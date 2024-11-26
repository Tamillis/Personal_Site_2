<template>
	<section>
		<CharacterDisplay :player="player" :haveFaith="chosen.faith" @updateImgSrc="(src) => chosen.imgSrc = src" />

		TODO: Make resource powers work as intended including Red Rage. Make powers use prerequisites.

		<button class="btn mb-1r" @click="copyUrl">Copy to clipboard</button>
		<button class="btn" @click="chosen = blankCharacter">Reset</button>

		<hr />

		<div id="section-tabs">
			<button @click="setSection('concept')" :class="{ selected: sections.concept }">1. Concept</button>
			<button @click="setSection('race')" :class="{ selected: sections.race }">2. Race</button>
			<button @click="setSection('background')" :class="{ selected: sections.background }">3. Background</button>
			<button @click="setSection('role')" :class="{ selected: sections.role }">4. Role</button>
			<button @click="setSection('equipment')" :class="{ selected: sections.equipment }">5. Equipment</button>
			<button @click="setSection('spells')" :class="{ selected: sections.spells }">6. Spells</button>
			<button @click="chosen.faith = !chosen.faith">
				{{ chosen.faith ? "I lost my faith" : "I have faith!" }}
			</button>
		</div>

		<section id="concept-section" v-show="sections.concept">
			<CharacterConcept v-model:name="chosen.name" v-model:concept="chosen.concept" v-model:bonds="chosen.bonds"
				v-model:ideals="chosen.ideals" v-model:flaws="chosen.flaws" />
		</section>

		<section id="race-section" v-show="sections.race">
			<p v-if="chosen.race == ''" style="color:orangered">Please choose a race.</p>
			<RaceSelector :chosenRace="chosen.race" :chosenAnyStats="chosen.anyRaceStats"
				@race="race => (chosen.race = race)" @race-stats="stats => setAnyRaceStats(stats)" />

			<div v-if="chosen.race">
				<RacialPowers :chosenPowers="chosen.racialPowers" :race="chosen.race"
					:limit="((chosen.race == 'Half-Elf' || chosen.race == 'Tuskman') ? 3 : 2)"
					@chosen="chooseRacialPowers" :key="`rp-${key}`" />
			</div>
		</section>

		<section id="background-section" v-show="sections.background">
			<Upbringing :chosenUpbringingSkills="[chosen.upbringingSkill1, chosen.upbringingSkill2]"
				:chosenUpbringingLanguage="chosen.upbringingLanguage"
				@upbringing="upbringing => chooseUpbringing(upbringing)" />

			<p v-if="!chosen.background" style="color:orangered">Choose a background</p>
			<Background :background="chosen.background" @backgroundChosen="(bg) => (chosen.background = bg)" />

			<p v-if="chosen.background && !chosen.backgroundPower" style="color:orangered">Choose a background Power</p>
			<div v-if="chosen.background">
				<h2>Background Power:</h2>
				<div class="cards">
					<CardContainer v-for="(power, i) in backgroundPowers" :name="power.name" :class="{
						hidden: chosen.backgroundPower != '' && chosen.backgroundPower != power.name
					}" :expanded="chosen.backgroundPower != '' && chosen.backgroundPower == power.name"
						@chosen="chooseBackgroundPower(power.name)" :key="`bgpc-${i}-${key}`">
						<PowerContent :power="power" />
					</CardContainer>
				</div>
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

			<RolePowers :powers="chosen.rolePowers"
				@powersChosen="(chosenPowers) => (chosen.rolePowers = chosenPowers)" />
		</section>

		<section id="equipment-section" v-show="sections.equipment">
			<EquipmentTab v-model:equipment="chosen.roleEquipment" v-model:armour="chosen.armour"
				v-model:shield="chosen.shield" v-model:helmet="chosen.helmet"
				@ref-limit="reflexLimit => (chosen.reflexLimit = reflexLimit)" />
		</section>

		<section id="spells-section" v-show="sections.spells">
			<p>This section is entirely TODO (:</p>
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
import RolePowers from "./RolePowers.vue";
import Background from "./Background.vue";

//resources
import powers from "../../assets/pedd/pedd-powers.json";
import races from "../../assets/pedd/pedd-races.json";
import backgrounds from "../../assets/pedd/pedd-backgrounds.json";
import equipment from "../../assets/pedd/pedd-equipment-collections.json"

//derived resources
let stats = ["accuracy", "perception", "strength", "dexterity", "charisma", "intelligence"];

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
	spells: false
});

function setSection(section) {
	for (let prop in sections.value) sections.value[prop] = false;
	sections.value[section] = true;
}

//makes loops update correctly even though vue documentation says the ref and computed stuff should automatically update (it doesn't)
let key = ref(0);

//TODO: create character reset btn that sets chosen to the following (and make sure the sheet works building from a blank)
let blankCharacter = {
	name: "",
	concept: "",
	bonds: "",
	ideals: "",
	flaws: "",
	faith: false,
	race: "",
	anyRaceStats: false,
	racialPowers: [],
	background: "",
	backgroundPower: "",
	upbringingSkill1: "Acrobatics",
	upbringingSkill2: "Alchemy",
	upbringingLanguage: "Common",
	roleStatMajor: "Accuracy",
	roleStatMinor: "Perception",
	rolePowers: [],
	roleSkills: [],
	roleEquipment: "",
	armour: 0,
	helmet: 0,
	shield: 0,
	reflexLimit: 99,
	imgSrc: ""
};

//NOTE: can use url saving like I planned, or if the JSON gets too dense and therefore the url is too long, could experiment with downloading and uploading JSON purely through the frontend:
// https://stackoverflow.com/questions/23344776/how-to-access-data-of-uploaded-json-file

//TODO: convert as much as possible to use simple int/key id's to ideally compress the url
let decodeUrl = new URLSearchParams(window.location.search).get("saved");
let chosen = ref(decodeUrl ? JSON.parse(atob(decodeUrl)) : blankCharacter);

//race any stat selections
function setAnyRaceStats(stats) {
	chosen.value.anyRaceStats = stats;
}

function chooseRacialPowers(powers) {
	chosen.value.racialPowers = powers;
	key.value++;
}

//background
let backgroundPowers = computed(() => powers.filter(p => p.tag.includes("background")));

let chooseUpbringing = (upbringing) => {
	chosen.value.upbringingSkill1 = upbringing.skill1;
	chosen.value.upbringingSkill2 = upbringing.skill2;
	chosen.value.upbringingLanguage = upbringing.language;
}

let chooseBackgroundPower = (bg) => {
	if (chosen.value.backgroundPower == bg) chosen.value.backgroundPower = '';
	else chosen.value.backgroundPower = bg;
}

//role

// other skills used to calculate what Role Skills can be chosen from
let otherSkills = computed(() => {
	let skills = [chosen.value.upbringingSkill1, chosen.value.upbringingSkill2];
	if (chosen.value.background) {
		let background = backgrounds.filter(bg => bg.name == chosen.value.background)[0];
		skills = skills.concat(background.skills);
	}
	return skills;
});

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

	if (chosen.value.anyRaceStats) for (let stat of chosen.value.anyRaceStats) {
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
	p.skills = chosen.value.roleSkills ? chosen.value.roleSkills.slice() : []; //copy array by value not ref
	p.skills.push(chosen.value.upbringingSkill1);
	p.skills.push(chosen.value.upbringingSkill2);
	p.skills.push(`Language (${chosen.value.upbringingLanguage})`);

	if (p.background) p.skills = p.skills.concat(p.background.skills);
	p.skills = p.skills.sort((s1, s2) => s1.localeCompare(s2));

	p.roleEquipment = chosen.value.roleEquipment ? equipment.filter(e => e.name == chosen.value.roleEquipment)[0].equipment.split(",") : "";

	p.armour = chosen.value.armour + chosen.value.shield + chosen.value.helmet;

	p.baseDefence = p.race ? baseDefence[p.race.size.val] : 8;
	p.defence = Number(p.baseDefence) + Number(p.armour) + Number(p.reflexLimited ? p.reflexLimit : p.reflexes);

	p.imgSrc = chosen.value.imgSrc;

	//encode chosen into url for easy saving and sharing
	let saved = btoa(JSON.stringify(chosen.value));
	history.pushState({}, null, new URL(window.location.href.split("?")[0] + "?saved=" + saved));

	//TODO: switch chosen to just use id's, i.e. names, for race and powers to reduce encoded size and maybe even just stop using btoa
	return p;
});

function copyUrl() {
	window.navigator.clipboard.writeText(window.location.href);
}

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
