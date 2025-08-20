<template>
    <BasePage subtitle="Character Creator">
        <section v-if="ready">
            <CharacterDisplay :player="player" :haveFaith="chosen.faith" @updateImgSrc="(src) => chosen.imgSrc = src" />

            <h4>TODO:</h4>
            <ul>
                <li>Custom Background in separate section to typical bg</li>
                <li>Power Ranks and the ability to take a Power more than once</li>
                <li>Separate character creation and character sheet</li>
                <li>In Character display show Racial Features</li>
                <li>Caluclate Health using racial Health Bonus / Health Malus correctly</li>
                <li>Have Powers that grant stats, skills and other changes do so (in progress)</li>
                <li>Special handling of Powers that change how Defence is calculated</li>
                <li>Add Powers in training section</li>
                <li>Add Rolling functionality for attacks, spells, skills and stats</li>
            </ul>
            <button class="btn mb-1r" @click="copyUrl">Copy to clipboard</button>
            <button class="btn" @click="chosen = blankCharacter">Reset</button>

            <hr />

            <div id="section-tabs">
                <button @click="setSection('concept')" :class="{ selected: sections.concept }">1. Concept</button>
                <button @click="setSection('race')" :class="{ selected: sections.race }">2. Race</button>
                <button @click="setSection('background')" :class="{ selected: sections.background }">3.
                    Background</button>
                <button @click="setSection('role')" :class="{ selected: sections.role }">4. Role</button>
                <button @click="setSection('equipment')" :class="{ selected: sections.equipment }">5. Equipment</button>
                <button @click="setSection('spells')" :class="{ selected: sections.spells }">6. Spells</button>
                <button @click="chosen.faith = !chosen.faith">
                    {{ chosen.faith ? "I lost my faith" : "I have faith!" }}
                </button>
            </div>

            <section id="concept-section" v-show="sections.concept">
                <CharacterConcept v-model:name="chosen.name" v-model:concept="chosen.concept"
                    v-model:bonds="chosen.bonds" v-model:ideals="chosen.ideals" v-model:flaws="chosen.flaws" />
            </section>

            <section id="race-section" v-show="sections.race">
                <p v-if="chosen.race == ''" style="color:orangered">Please choose a race.</p>
                <RaceSelector :chosenRace="chosen.race" :chosenAnyStats="chosen.anyRaceStats" @race="setRace"
                    @race-stats="stats => setAnyRaceStats(stats)" />

                <div v-if="chosen.race">
                    <RacialPowers :chosenPowers="chosen.racialPowers" :racePowers="getRacialPowers()"
                        :limit="((chosen.race == 'Half-Elf' || chosen.race == 'Tuskman') ? 3 : 2)"
                        @chosen="chooseRacialPowers" :key="`rp-${key}`" />
                </div>

                <Upbringing :chosenUpbringingSkills="[chosen.upbringingSkill1, chosen.upbringingSkill2]"
                    :chosenUpbringingLanguage="chosen.upbringingLanguage"
                    @upbringing="upbringing => chooseUpbringing(upbringing)" />
            </section>

            <section id="background-section" v-show="sections.background">
                <p v-if="!chosen.background" style="color:orangered">Choose a background</p>
                <Background :background="chosen.background" @backgroundChosen="setBackground" />

                <p v-if="chosen.background && !chosen.backgroundPower" style="color:orangered">Choose a background Power
                </p>
                <div v-if="chosen.background">
                    <h2>Background Power:</h2>
                    <div class="cards">
                        <CardContainer v-for="(power, i) in backgroundPowers" :name="power.name" :class="{
                            highlight: chosen.backgroundPower == power.name
                        }" :chosen="chosen.backgroundPower == power.name" @chosen="chooseBackgroundPower(power.name)"
                            :key="`bgpc-${i}-${key}`">
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
                <p>4 + your Intelligence ({{ player.intelligence }}) = {{ 4 + player.intelligence }}. It is wise to pick
                    up
                    some combat skills if you don't have enough yet.</p>
                <SkillSelector :roleSkills="chosen.roleSkills" :otherSkills="otherSkills"
                    :limit="4 + player.intelligence" @skills="skills => (chosen.roleSkills = skills)" />

                <RolePowers v-model:chosenPowers="chosen.rolePowers" :allChosenPowers="allChosenPowers"
                    :powers="powersJson" :player="player" />
            </section>

            <section id="equipment-section" v-show="sections.equipment">
                <EquipmentTab v-model:pack="chosen.pack" v-model:equipment="chosen.equipmentCollection"
                    v-model:armour="chosen.armour" v-model:shield="chosen.shield" v-model:helmet="chosen.helmet"
                    @ref-limit="reflexLimit => (chosen.reflexLimit = reflexLimit)" />
            </section>

            <section id="spells-section" v-show="sections.spells">
                <p>This section is entirely TODO (:</p>
                <p>But you can go to <a href="/pedd/spells">Spells</a> to see them all for now</p>
            </section>
        </section>
        <section v-else>
            <p>Loading data...</p>
        </section>
    </BasePage>
</template>

<script setup>
import { useTemplateRef, ref, computed } from "vue";

import BasePage from './Components/BasePage.vue';
import PowerContent from "./Components/PowerContent.vue";
import RaceSelector from "./Components/RaceSelector.vue";
import CardContainer from "./Components/CardContainer.vue";
import StatSelector from "./Components/StatSelector.vue";
import CharacterConcept from "./Components/CharacterConcept.vue";
import SkillSelector from "./Components/SkillSelector.vue";
import CharacterDisplay from "./Components/CharacterDisplay.vue";
import EquipmentTab from "./Components/EquipmentTab.vue";
import RacialPowers from "./Components/RacialPowers.vue";
import Upbringing from "./Components/Upbringing.vue";
import RolePowers from "./Components/RolePowers.vue";
import Background from "./Components/Background.vue";

//resources
import races from "../../assets/pedd/pedd-races.json";
import backgrounds from "../../assets/pedd/pedd-backgrounds.json";
import equipment from "../../assets/pedd/pedd-equipment-collections.json"
import packs from "../../assets/pedd/pedd-packs.json"

let powersJson = ref(null);

let ready = computed(() => {
    return powersJson.value != null;
});

fetchPowers();

//fetch from api and drill down
async function fetchPowers() {
    let res = await fetch("/api/powers", { method: "get" });
    if (res.ok) {
        powersJson.value = await res.json();
        console.log(`Successfully fetched ${powersJson.value.length} powers from /api/powers`);
    }
    else {
        console.error(res, "Failed to fetch /api/powers");
    }
}

//derived resources
let stats = ["accuracy", "perception", "strength", "dexterity", "charisma", "intelligence"];

let sizeDefence = {
    tiny: 16,
    small: 10,
    medium: 8,
    large: 6,
    huge: 2
};

let sizeHealth = {
    tiny: 2,
    small: 4,
    medium: 6,
    large: 12,
    huge: 25
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
    equipmentCollection: null,
    pack: "None",
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
let allChosenPowers = computed(() => [...chosen.value.racialPowers, chosen.value.backgroundPower, ...chosen.value.rolePowers].sort());

//race any stat selections
function setRace(race) {
    console.log("Setting race", race)

    chosen.value.race = race
    if (!race) {
        chosen.value.race = ""
        chosen.value.racialPowers = [];
    }
}

function setAnyRaceStats(stats) {
    chosen.value.anyRaceStats = stats;
}

function getRacialPowers() {
    let race = races.filter(r => r.name == chosen.value.race)[0];
    let racePowers = race.powers.map(powerName => {
        let powers = powersJson.value.filter(p => p.name == powerName);
        if(powers.length == 0) throw Error("No power found for [" + powerName + "]")
        else return powers[0];
    });
    return racePowers
}

function chooseRacialPowers(powers) {
    chosen.value.racialPowers = powers;
    key.value++;
}

//background
function setBackground(bg) {
    chosen.value.background = bg;
    if (!bg) chosen.value.backgroundPower = false;
}

let backgroundPowers = computed(() => powersJson.value.filter(p => p.tag.includes("background")));

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
    if (p.race) {
        p.race = races.filter(r => r.name == chosen.value.race)[0];
    }
    p.racialPowers = chosen.value.racialPowers;

    p.background = false;
    if (chosen.background != '') p.background = backgrounds.filter(bg => chosen.value.background == bg.name)[0];
    p.backgroundPower = chosen.value.backgroundPower;

    p.rolePowers = chosen.value.rolePowers;

    // stat choices
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
        //set fixed racial stat bonuses
        for (let stat of p.race.stats) {
            if (stats.includes(stat.desc.toLowerCase())) p[stat.desc.toLowerCase()] += stat.val;
        }
    }

    //set selected size - TODO: make this actually selectable when presented an option
    let size = p.race ? (Array.isArray(p.race.size) ? p.race.size[0].val : p.race.size.val) : "medium";
    p.size = size;

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

    console.log(p.size)
    p.baseHealth = sizeHealth[p.size];
    p.health = p.baseHealth + p.fortitude + p.willpower

    p.faith = 2; //TODO: make faith input based

    p.skills = [];
    p.skills = chosen.value.roleSkills ? chosen.value.roleSkills.slice() : []; //copy array by value not ref
    p.skills.push(chosen.value.upbringingSkill1);
    p.skills.push(chosen.value.upbringingSkill2);
    p.skills.push(`Language (${chosen.value.upbringingLanguage})`);

    if (p.background) p.skills = p.skills.concat(p.background.skills);
    p.skills = p.skills.sort((s1, s2) => s1.localeCompare(s2));

    p.equipmentCollection = chosen.value.equipmentCollection ? equipment.filter(e => e.name == chosen.value.equipmentCollection)[0].equipment.split(",") : [];

    p.pack = chosen.value.pack && chosen.value.pack != "None" ?
        packs.filter(pk => pk.name == chosen.value.pack)[0].equipment.split(",") :
        [];

    p.armour = chosen.value.armour + chosen.value.shield + chosen.value.helmet;

    p.baseDefence = sizeDefence[p.size];
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
