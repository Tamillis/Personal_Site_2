<template>
	<section>
		<CharacterDisplay :player="player" :haveFaith="sections.faith" @updateImgSrc="(src) => chosen.imgSrc = src" />

		TODO: Make resource powers work as intended. Flag Red Rage as such. Get rid of pure resource powers, they do nothing (like Fighting Style). Just use tags.

		<button class="btn" @click="debug = !debug">TODO: Save</button>

		<pre style="text-indent: 0;font-size:0.67em" :class="{ hidden: debug }">
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
			<CharacterConcept :chosen="chosen" @name="name => (chosen.name = name)"
				@concept="concept => (chosen.concept = concept)" @bonds="bonds => (chosen.bonds = bonds)"
				@ideals="ideals => (chosen.ideals = ideals)" @flaws="flaws => (chosen.flaws = flaws)" />
		</section>

		<section id="race-section" v-show="sections.race">
			<RaceSelector :chosenRace="chosen.race" :chosenAnyStats="chosen.anyRaceStats"
				@race="race => (chosen.race = race)" @race-stats="stats => setAnyRaceStats(stats)" />

			<div v-if="chosen.race">
				<RacialPowers :racialPowers="racialPowers" :chosenPowers="chosen.racialPowers" :race="chosen.race"
					@chosen="powers => (chosen.racialPowers = powers)" />
			</div>
		</section>

		<section id="background-section" v-show="sections.background">
			<Upbringing :chosenUpbringingSkills="[chosen.upbringingSkill1, chosen.upbringingSkill2]"
				:chosenUpbringingLanguage="chosen.upbringingLanguage"
				@upbringing="upbringing => chooseUpbringing(upbringing)" />

			<Background :background="chosen.background" @backgroundChosen="(bg) => (chosen.background = bg)" />

			<h2>Background Power:</h2>
			<div class="cards">
				<CardContainer v-for="(power, i) in backgroundPowers" :name="power.name" :class="{
					hidden: chosen.backgroundPower != '' && chosen.backgroundPower != power.name
				}" :expanded="chosen.backgroundPower != '' && chosen.backgroundPower == power.name" @chosen="chooseBackgroundPower(power.name)"
					:key="`bgpc-${i}-${key}`">
					<PowerContent :power="power" />
				</CardContainer>
			</div>
		</section>

		<section id="role-section" v-show="sections.role">
			<h2>Role</h2>

			<h3>Role Stats</h3>
			<div class="flex horizontal-spacers">
				<StatSelector v-model="chosen.roleStatMajor" :val="2" />
				<StatSelector v-model="chosen.roleStatMinor" :val="1" />
			</div>
			
			<h3>Role Skills</h3>
			<p>4 + your Intelligence ({{ player.intelligence }}) = {{ 4 + player.intelligence }}. It is wise to pick up some combat skills if you don't have enough yet.</p>
			<SkillSelector :roleSkills="chosen.roleSkills" :otherSkills="otherSkills" :limit="4 + player.intelligence"
			@skills="skills => (chosen.roleSkills = skills)" />
			
			<!-- TODO: From here -->
			<h2>Role Powers: <span>{{ chosen.rolePowers.join(", ") }}</span></h2>
			<p>One day the below will be properly automatically filtered by prerequisites</p>
			<select class="tag-select" v-model="roleTag">
				<option v-for="tag in tags">{{ tag }}</option>
			</select>
			<div class="cards">
				<CardContainer v-for="(power, i) in rolePowers" :name="power.name"
					:expanded="openedRolePowerCards.includes(power.name)"
					:class="{ highlight: chosen.rolePowers.includes(power.name) }"
					@chosen="() => (openedRolePowerCards = choosePower(power, 'rolePowers', openedRolePowerCards, 3))"
					:key="`rlpc-${i}-${key}`">
					<PowerContent :power="power" @highlight="tag => highlight(tag)" />
				</CardContainer>
			</div>
		</section>

		<section id="equipment-section" v-if="sections.equipment">
			<EquipmentTab @equipment="equipment => (chosen.roleEquipment = equipment.equipment.split(','))"
				@armour="armour => (chosen.armour = armour)" @shield="shield => (chosen.shield = shield)"
				@helmet="helmet => (chosen.helmet = helmet)"
				@ref-limit="reflexLimit => (chosen.reflexLimit = reflexLimit)" />
		</section>
	</section>
</template>

<script setup>
import { ref, computed } from "vue";
import PowerContent from "./PowerContent.vue";
import RaceSelector from "./RaceSelector.vue";
import CardContainer from "./CardContainer.vue";
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
import Background from "./Background.vue";

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
let debug = ref(true);

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
//TODO: convert as much as possible to use simple int/key id's to ideally compress the url
let chosen = ref({
	name: "Hiccary",
	concept: "The Holy Archeress",
	bonds: "Born and raised deep in the Ebon Glade in the old ways, she seeks her scattered and lost créche.",
	ideals: "The rule of nature is harsh, we can make something kinder.",
	flaws: "Faith once broken has been forged stronger and ever more rigid.",
	race: "Half-Elf",
	anyRaceStats: [
		{ desc: "Accuracy", val: 1 },
		{ desc: "Strength", val: -1 }
	],
	racialPowers: ["Elven Accuracy", "Keen Senses", "Wood Elf Magic"],
	background: "Acolyte",
	backgroundPower: "Scrivener's Magic",
	upbringingSkill1: "Animal Handling",
	upbringingSkill2: "Nature",
	upbringingLanguage: "Damarani",
	roleStatMajor: "Accuracy",
	roleStatMinor: "Dexterity",
	rolePowers: ["Archery", "Lay on Hands", "Mana"],
	roleSkills: ["Bows", "Light Armour", "Medicine", "Riding"],
	roleEquipment: false,
	armour: 0,
	helmet: 0,
	shield: 0,
	reflexLimit: 99,
	imgSrc: "https://dsm01pap007files.storage.live.com/y4mYxAkM_i8Gebhc4foTlfme5fFV5KLJl91A2KLbkVl1Ca73CFlAycsi9XA7ODStJuI9Xy8E3K8sQ2WMJUGq4bcTxAzN65b4TF5vf_8aXTmgqyF8JJ1q01Q_I9gUZunpl7KiXV_OzCoCngEGS8VMwPYeZqtxz20p9QlxlN9xezS_GqfbLqBMQ5udIiyzaDlJs9NyqNtrwPKfNb28700UwyhrniA2tMo5RleQOGdGD7itkI?encodeFailures=1&width=420&height=420"
});

//race any stat selections
function setAnyRaceStats(stats, val) {
	chosen.anyRaceStats = stats.value;
	console.log("setAnyRaceStats", stats, val);
}

//race
let racialPowers = computed(() =>
	chosen.value.race != "" ? powers.filter(p => p.tag.includes("racial") && p.tag.includes(chosen.value.race.toLowerCase())) : []
);

//background
let backgroundPowers = computed(() => powers.filter(p => p.tag.includes("background")));

let chooseUpbringing = (upbringing)  => {
	chosen.value.upbringingSkill1 = upbringing.skill1;
	chosen.value.upbringingSkill2 = upbringing.skill2;
	chosen.value.upbringingLanguage = upbringing.language;
}

let chooseBackgroundPower = (bg) => {
	if(chosen.value.backgroundPower == bg) chosen.value.backgroundPower = '';
	else chosen.value.backgroundPower = bg;
}

//role

// other skills used to calculate what Role Skills can be chosen from
let otherSkills = computed(() => {
	let skills = [chosen.value.upbringingSkill1, chosen.value.upbringingSkill2];
	let background = backgrounds.filter(bg => bg.name == chosen.value.background)[0];
	skills = skills.concat(background.skills);
	return skills;
});

let openedRolePowerCards = [];
let roleTag = ref("All");
let rolePowers = computed(() => {
	return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
});

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

	return opened;
};

//computer player stats from chosen values
let player = computed(() => {
	//console.log("Chosen raceStats", chosen.value.anyRaceStats);
	let p = {};

	p.name = chosen.value.name;
	p.concept = chosen.value.concept;
	p.bonds = chosen.value.bonds;
	p.ideals = chosen.value.ideals;
	p.flaws = chosen.value.flaws;

	p.race = chosen.value.race != "";
	if (p.race) p.race = races.filter(r => r.name == chosen.value.race)[0];
	p.racialPowers = chosen.value.racialPowers;

	p.background = false;
	if (chosen.background != '') p.background = backgrounds.filter(bg => chosen.value.background == bg.name)[0];
	p.backgroundPower = chosen.value.backgroundPower;

	p.rolePowers = chosen.value.rolePowers;

	let ss = {
		strength: 0,
		dexterity: 0,
		accuracy: 0,
		perception: 0,
		intelligence: 0,
		charisma: 0
	};
	ss[chosen.value.roleStatMajor.toLowerCase()] = 2;
	ss[chosen.value.roleStatMinor.toLowerCase()] = 1;

	for (let stat of chosen.value.anyRaceStats) {
		ss[stat.desc.toLowerCase()] += stat.val;
	}

	p.strength = ss.strength;
	p.dexterity = ss.dexterity;
	p.accuracy = ss.accuracy;
	p.perception = ss.perception;
	p.intelligence = ss.intelligence;
	p.charisma = ss.charisma;
	if (p.race) {
		for (let stat of p.race.stats) {
			if (stats.includes(stat.desc.toLowerCase())) p[stat.desc.toLowerCase()] += stat.val;
		}
	}
	if (p.background) {
		for (let statDesc of p.background.stats) {
			let stat = statDesc.toLowerCase();
			if (stats.includes(stat)) p[stat]++;
		}
	}

	p.fortitude = p.strength + p.dexterity;
	p.reflexes = p.accuracy + p.perception;
	p.reflexLimit = chosen.value.reflexLimit;
	p.reflexLimited = p.reflexes > p.reflexLimit
	p.willpower = p.intelligence + p.charisma;
	p.health = p.fortitude + p.willpower + (p.race ? p.race.baseHealth : 0)

	p.faith = 2; //TODO: make faith input based

	p.skills = [];
	p.skills = chosen.value.roleSkills.slice(); //copy array by value not ref
	p.skills.push(chosen.value.upbringingSkill1);
	p.skills.push(chosen.value.upbringingSkill2);
	p.skills.push(`Language (${chosen.value.upbringingLanguage})`);
	
	if (p.background) p.skills = p.skills.concat(p.background.skills);
	p.skills = p.skills.sort((s1, s2) => s1.localeCompare(s2));
	
	p.roleEquipment = chosen.value.roleEquipment;

	p.armour = chosen.value.armour + chosen.value.shield + chosen.value.helmet;

	p.baseDefence = p.race ? baseDefence[p.race.size.val] : 8;
	p.defence = Number(p.baseDefence) + Number(p.armour) + Number(p.reflexLimited ? p.reflexLimit : p.reflexes);

	p.imgSrc = chosen.value.imgSrc;

	//encode player into url for easy saving and sharing
	let saved = btoa(JSON.stringify(p));
	//history.pushState({},null, new URL(window.location.href.split("?")[0] + "?saved=" + saved));
	//TODO: decode the url into where exactly? encode the chosen options?

	//TODO: switch chosen to just use id's, i.e. names, for race and powers to reduce encoded size
	return p;
});

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
