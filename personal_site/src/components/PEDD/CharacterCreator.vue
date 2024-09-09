<template>
	<section>
		<CharacterDisplay :player="player" :haveFaith="sections.faith" />

		TODO: Make resource powers work as intended. Flag Red Rage as such.

		<button class="btn">TODO: Save</button>

		<pre style="text-indent: 0;">
DEBUG:
{{ JSON.stringify(chosen, null, 2) }}
		</pre>

		<hr />

		<div id="section-tabs">
			<button @click="setSection('concept')" :class="{ selected: sections.concept }">1. Concept</button>
			<button @click="setSection('race')" :class="{ selected: sections.race }">2. Race</button>
			<button @click="setSection('background')" :class="{ selected: sections.background }">3. Background</button>
			<button @click="setSection('role')" :class="{ selected: sections.role }">4. Role</button>
			<button @click="setSection('equipment')" :class="{ selected: sections.equipment }">5. Equipment</button>
			<button @click="sections.faith = !sections.faith">
				{{ sections.faith ? "I lost my faith" : "I have faith!" }}
			</button>
			<button @click="buildPlayer">Manual Refresh</button>
		</div>

		<section id="concept-section" v-show="sections.concept">
			<CharacterConcept
				:chosen="chosen"
				@name="name => (chosen.name = name)"
				@concept="concept => (chosen.concept = concept)"
				@bonds="bonds => (chosen.bonds = bonds)"
				@ideals="ideals => (chosen.ideals = ideals)"
				@flaws="flaws => (chosen.flaws = flaws)"
			/>
		</section>

		<section id="race-section" v-show="sections.race">
			<RaceSelector 
                :chosenRace="chosen.race" 
                :chosenAnyStats="chosen.anyRaceStats"
                @race="race => (chosen.race = race)" 
                @race-stats="stats => setAnyRaceStats(stats)" />

			<div v-if="chosen.race">
				<RacialPowers
					:racialPowers="racialPowers"
					:chosenPowers="chosen.racialPowers"
					:race="chosen.race"
					@chosen="powers => (chosen.racialPowers = powers)"
				/>
			</div>
		</section>

		<section id="background-section" v-show="sections.background">
			<Upbringing
				:chosenUpbringingSkills="[chosen.upbringing.skill1, chosen.upbringing.skill2]"
				:chosenUpbringingLanguage="chosen.upbringing.language"
				@upbringing="upbringing => (chosen.upbringing = upbringing)"
			/>

			<!--  TODO: Put background into a component emitting a simple chosen background name -->
			<h2>Background:</h2>
			<div id="backgrounds-container">
				<CardContainer
					v-for="(bg, i) in backgrounds"
					:name="bg.name"
					:expanded="player.background && player.background.name == bg.name"
					:class="{ hidden: player.background && player.background.name != bg.name }"
					@chosen="chooseBackground(bg)"
					:key="`bgc-${i}-${key}`"
				>
					<BackgroundContent :bg="bg" />
				</CardContainer>
			</div>

			<!--  TODO: Put background power into a component emitting a simple chosen power name -->
			<h2>Background Power:</h2>
			<div class="cards">
				<CardContainer
					v-for="(power, i) in backgroundPowers"
					:name="power.name"
					:class="{
						hidden: player.backgroundPower && player.backgroundPower != power.name
					}"
					:expanded="chosen.backgroundPower == power.name"
					@chosen="chooseBackgroundPower(power)"
					:key="`bgpc-${i}-${key}`"
				>
					<PowerContent :power="power" @highlight="tag => highlight(tag)" />
				</CardContainer>
			</div>
		</section>

		<section id="role-section" v-show="sections.role">
			<h2>Role</h2>

			<h3>Role Stats</h3>
			<StatSelector
				:stats="stats"
				@stat-change="
					statsSelection => {
						roleStats = statsSelection;
						buildPlayer();
					}
				"
			/>

			<h3>Role Skills</h3>
			<SkillSelector :skills="roleSkills" :limit="4 + player.intelligence" @skills="skills => (chosen.roleSkills = skills)" />
			<p>4 + your Intelligence ({{ player.intelligence }}) = {{ 4 + player.intelligence }}</p>

			<h2>
				Role Powers: <span>{{ chosen.rolePowers.join(", ") }}</span>
			</h2>
			<p>One day the below will be properly automatically filtered by prerequisites</p>
			<select class="tag-select" v-model="roleTag">
				<option v-for="tag in tags">{{ tag }}</option>
			</select>
			<div class="cards">
				<CardContainer
					v-for="(power, i) in rolePowers"
					:name="power.name"
					:expanded="openedRolePowerCards.includes(power.name)"
					:class="{ highlight: chosen.rolePowers.includes(power.name) }"
					@chosen="() => (openedRolePowerCards = choosePower(power, 'rolePowers', openedRolePowerCards, 3))"
					:key="`rlpc-${i}-${key}`"
				>
					<PowerContent :power="power" @highlight="tag => highlight(tag)" />
				</CardContainer>
			</div>
		</section>

		<section id="equipment-section" v-if="sections.equipment">
			<EquipmentTab
				@equipment="equipment => (chosen.roleEquipment = equipment)"
				@armour="armour => (chosen.armour = armour)"
				@shield="shield => (chosen.shield = shield)"
				@helmet="helmet => (chosen.helmet = helmet)"
				@ref-limit="reflexLimit => (chosen.reflexLimit = reflexLimit)"
			/>
		</section>
	</section>
</template>

<script setup>
import { ref, computed } from "vue";
import PowerContent from "./PowerContent.vue";
import RaceSelector from "./RaceSelector.vue";
import CardContainer from "./CardContainer.vue";
import BackgroundContent from "./BackgroundContent.vue";
import StatSelector from "./StatSelector.vue";
import CharacterConcept from "./CharacterConcept.vue";
import SkillSelector from "./SkillSelector.vue";
import CharacterDisplay from "./CharacterDisplay.vue";
import EquipmentTab from "./EquipmentTab.vue";
import RacialPowers from "./RacialPowers.vue";
import Upbringing from "./Upbringing.vue";

//resources
import powers from "../../assets/pedd/pedd-powers.json";
import races from "../../assets/pedd/pedd-races.json";
import backgrounds from "../../assets/pedd/pedd-backgrounds.json";
import skillsData from "../../assets/pedd/pedd-skills.json";

//derived resources
let stats = ["accuracy", "perception", "strength", "dexterity", "charisma", "intelligence"];
let tags = ["All"].concat(Array.from(new Set(powers.map(p => p.tag).flat())).sort()); //don't you just love javascript?
let baseDefence = {
	tiny: 16,
	small: 10,
	medium: 8,
	large: 6,
	huge: 2
};

//tab state
let sections = ref({
	concept: true,
	race: false,
	background: false,
	role: false,
	equipment: false,
	faith: false
});

function setSection(section) {
	for (let prop in sections.value) sections.value[prop] = false;
	sections.value[section] = true;
}

//charactersheet state
let key = ref(0); //TODO: Remove key?

//TODO: change chosen to be the point of reference (i.e. id's, not objects), and also to load selections from chosen so that it can be used for saving
// let chosen = ref({
// 	name: "",
// 	concept: "",
// 	bonds: "",
// 	ideals: "",
// 	flaws: "",
// 	race: false,
// 	racialPowers: [],
// 	background: false,
// 	backgroundPower: "",
// 	upbringing: {
// 		skill1: upbringingSkills.value[0].skill,
// 		skill2: upbringingSkills.value[1].skill,
// 		language: "Common"
// 	},
// 	rolePowers: [],
// 	roleSkills: [],
// 	roleEquipment: [],
// 	armour: 0,
// 	helmet: 0,
// 	shield: 0,
// 	reflexLimit: 99
// });

//NOTE: can use url saving like I planned, or if the JSON gets too dense and therefore the url is too long, could experiment with downloading and uploading JSON purely through the frontend:
// https://stackoverflow.com/questions/23344776/how-to-access-data-of-uploaded-json-file

//TEST, as if it was loaded from a save
let chosen = ref({
	name: "Ana",
	concept: "A Young Elf Abroad",
	bonds: "She loves and lives for her papa's farm.",
	ideals: "All nature is fundamentally good, just we don't know how to be good around it.",
	flaws: "Emulates what she imagines her mama to be, as she's never known her.",
	race: "Half-Elf",
	anyRaceStats: [
		{ desc: "accuracy", val: 1 },
		{ desc: "intelligence", val: -1 }
	],
	racialPowers: ["Elven Accuracy", "Keen Senses", "Wood Elf Magic"],
	background: false,	//TODO: from here
	backgroundPower: "",
	upbringing: {
		skill1: "Animal Handling",
		skill2: "Nature",
		language: "Damarani"
	},
	rolePowers: [],
	roleSkills: [],
	roleEquipment: [],
	armour: 0,
	helmet: 0,
	shield: 0,
	reflexLimit: 99
});

//race any stat selections
function setAnyRaceStats(stats) {
	chosen.anyRaceStats = stats.value;
	console.log("setAnyRaceStats", stats);
}

//race
let racialPowers = computed(() =>
	chosen.value.race != "" ? powers.filter(p => p.tag.includes("racial") && p.tag.includes(chosen.value.race.toLowerCase())) : []
);

//background
let backgroundPowers = computed(() => powers.filter(p => p.tag.includes("background")));

let chooseBackground = chosenBg => {
	if (chosen.value["background"].name == chosenBg.name) {
		//clicked on open card, close it and reveal all cards
		chosen.value["background"] = false;
	} else {
		//open chosen card, hide others
		chosen.value["background"] = chosenBg;
	}

	buildPlayer();
	return;
};

let chooseBackgroundPower = card => {
	if (chosen.value.backgroundPower == card.name) {
		//clicked on open card, close it and reveal all cards
		chosen.value.backgroundPower = false;
	} else {
		//open chosen card, hide others
		chosen.value.backgroundPower = card.name;
	}

	buildPlayer();
	return;
};

//role
let openedRolePowerCards = [];
let roleTag = ref("All");
let rolePowers = computed(() => {
	return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
});

let roleStats = ref(["accuracy", "perception"]);

let roleSkills = ref(
	skillsData.basicSkills.map(s => s.skill).concat(skillsData.knowledgeSkills.map(s => s.skill).concat(skillsData.martialSkills.map(s => s.skill)))
);
roleSkills.value.sort((s1, s2) => s1.localeCompare(s2));

let choosePower = (power, attribute, opened, max) => {
	key.value++;
	if (!opened.includes(power.name)) {
		//clicking an un-opened card must open it
		opened.push(power.name);

		if (chosen.value[attribute].length < max) {
			//and it can be added to selected list if there's room
			chosen.value[attribute].push(power.name);
		}
	} else {
		//clicking an opened card
		//if the opened card is not in the selected list and there is room, add it
		if (!chosen.value[attribute].includes(power.name) && chosen.value[attribute].length < max) {
			chosen.value[attribute].push(power.name);
		} else {
			//remove it from the selected list
			chosen.value[attribute] = chosen.value[attribute].filter(r => r !== power.name);
			//and close that card
			opened = opened.filter(r => r !== power.name);
		}
	}

	buildPlayer();
	return opened;
};

//calculated player stats
//TODO: make this computed from chosen
let player = ref({});
let buildPlayer = () => {
	//console.log("Chosen raceStats", chosen.value.anyRaceStats);
	player.value = {};

	player.value.name = chosen.value.name;
	player.value.concept = chosen.value.concept;

	player.value.race = chosen.value.race != "";
	if (player.value.race) player.value.race = races.filter(r => r.name == chosen.value.race)[0];
	player.value.racialPowers = chosen.value.racialPowers;
	player.value.background = chosen.value.background;
	player.value.backgroundPower = chosen.value.backgroundPower;
	player.value.rolePowers = chosen.value.rolePowers;

	let ss = {
		strength: 0,
		dexterity: 0,
		accuracy: 0,
		perception: 0,
		intelligence: 0,
		charisma: 0
	};
	ss[roleStats.value[0]] = 2;
	ss[roleStats.value[1]] = 1;

	for (let stat of chosen.value.anyRaceStats) {
        ss[stat.desc] += stat.val;
	}

	player.value.strength = ss.strength;
	player.value.dexterity = ss.dexterity;
	player.value.accuracy = ss.accuracy;
	player.value.perception = ss.perception;
	player.value.intelligence = ss.intelligence;
	player.value.charisma = ss.charisma;
	if (player.value.race) {
		for (let stat of player.value.race.stats) {
			if (stats.includes(stat.desc.toLowerCase())) player.value[stat.desc.toLowerCase()] += stat.val;
		}
	}
	if (player.value.background) {
		for (let statDesc of player.value.background.stats) {
			let stat = statDesc.toLowerCase();
			if (stats.includes(stat)) player.value[stat]++;
		}
	}

	player.value.fortitude = player.value.strength + player.value.dexterity;
	player.value.reflexes = player.value.accuracy + player.value.perception;
	player.value.reflexLimit = chosen.value.reflexLimit;
	player.value.reflexLimited = player.value.reflexes > player.value.reflexLimit
	player.value.willpower = player.value.intelligence + player.value.charisma;

	player.value.faith = 2; //TODO: make faith input based

	player.value.equipmentCollection = chosen.value.roleEquipment;

	player.value.skills = [];
	player.value.skills = chosen.value.roleSkills.slice(); //copy array by value not ref
	player.value.skills.push(chosen.value.upbringing.skill1);
	player.value.skills.push(chosen.value.upbringing.skill2);
	player.value.skills.push(`Language (${chosen.value.upbringing.language})`);
	if (chosen.value.background) player.value.skills = player.value.skills.concat(chosen.value.background.skills);
	player.value.skills = player.value.skills.sort((s1, s2) => s1.localeCompare(s2));

	player.value.armour = chosen.value.armour + chosen.value.shield + chosen.value.helmet;

	player.value.baseDefence = player.value.race ? baseDefence[player.value.race.size.val] : 8;
	player.value.defence = Number(player.value.baseDefence) + Number(player.value.armour) + Number(player.value.reflexLimited ? player.value.reflexLimit: player.value.reflexes);

	//encode player into url for easy saving and sharing
	let saved = btoa(JSON.stringify(player.value));
	//history.pushState({},null, new URL(window.location.href.split("?")[0] + "?saved=" + saved));
	//TODO: decode the url into where exactly? encode the chosen options?

	//TODO: switch chosen to just use id's, i.e. names, for race and powers to reduce encoded size
	return player.value;
};
buildPlayer();
</script>

<style lang="css" scoped>
textarea {
	height: 1.5rem;
}

label,
h2 {
	font-weight: bold;
	font-size: larger;
	display: block;
	text-indent: 0px;
}

.summary div {
	min-width: 150px;
}

.tag-select {
	border: none;
	border-radius: 0px;

	margin-bottom: var(--gap);
	padding: 4px 2px;

	width: fit-content;

	font-size: var(--para-size);
}

.selection {
	margin-right: 1rem;
	padding-right: 1rem;
	border-right: 2px groove var(--highlight);
}

#section-tabs {
	border-bottom: 2px groove var(--highlight);
}

#section-tabs button {
	border-left: 2px groove var(--highlight);
	border-right: none;
	border-top: 2px groove var(--highlight);
	border-bottom: none;
	outline: none;
	background-color: rgba(0, 0, 0, 0);
	color: var(--text-color);
	margin: 0;
	padding: 4px 8px;
}

#section-tabs button:last-child {
	border-right: 2px groove var(--highlight);
	border-top-right-radius: 4px;
}

#section-tabs button:first-child {
	border-top-left-radius: 4px;
}

#section-tabs button:hover,
#section-tabs .selected {
	cursor: pointer;
	background-color: rgba(255, 255, 255, 0.1);
}

.hidden {
	display: none;
}

@media screen and (max-width: 750px) {
	.flex {
		flex-direction: column;
	}

	#section-tabs {
		text-indent: 0;
	}

	#section-tabs button {
		text-indent: 0;
		width: 20%;
		overflow: hidden;
		text-wrap: nowrap;
		text-overflow: ellipsis;
	}
}
</style>
