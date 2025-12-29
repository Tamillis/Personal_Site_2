<template>
    <BasePage subtitle="Character Creator">
        <section v-if="ready">
            <CharacterDisplay :chosen="chosen" />

            <h4>TODO:</h4>
            <ul>
                <li>Ability to take repeatable Powers more than once inc Rank display</li>
                <li>Have Powers that grant stats, skills and other changes do so</li>
                <li>Special handling of Powers that change how Defence is calculated</li>
            </ul>

            <a class="btn" :href="getUrlFromCharacter(chosen)">Open {{player.name ? player.name + "'s" : "Blank"}} Character Sheet</a>

            <div id="simple-stat-display" class="flex">
                <div v-for="stat in core.stats">
                    <p :id="stat + '-control'">{{ stat }} {{ player[stat.toLowerCase()] }}</p>
                </div>
                <p>{{ player.size }}</p>
            </div>

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
                <RaceSelector :chosenRaceName="chosen.race" @race="setRace" />

                <div class="flex">
                    <div class="flex-grow">
                        <h3>Stat Boons</h3>
                        <div class="flex gap">
                            <StatSelector v-model="chosen.raceStatBoon[0]" val="1"/>
                            <StatSelector v-model="chosen.raceStatBoon[1]" val="1"/>
                        </div>
                    </div>
                    <div class="flex-grow gap">
                        <h3>Stat Malus</h3>
                        <StatSelector v-model="chosen.raceStatMalus" val="-1"/>
                    </div>
                </div>

                <div v-if="chosen.race">
                    <RacialPowers :chosenPowers="chosen.racialPowers" :racePowers="getRacialPowers()"
                        :limit="chosen.race.heritages"
                        @chosen="chooseRacialPowers" :key="`rp-${key}`" />
                </div>

                <Upbringing :chosenUpbringingSkills="[chosen.upbringingSkill1, chosen.upbringingSkill2]"
                    :chosenUpbringingLanguage="chosen.upbringingLanguage"
                    @upbringing="upbringing => chooseUpbringing(upbringing)" />
            </section>

            <section id="background-section" v-show="sections.background">
                <BackgroundSelector :selected-bg="chosen.background" />

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

                <h2>Powers in Progress:</h2>
                <input class="text-entry" placeholder="..."  v-model="chosen.pip" />
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
import { ref, computed } from "vue";
import jsoncrush from "JSONCrush"
import Character from "../../assets/pedd/character.js";
import core from "../../assets/pedd/trinitas-core.json";

import BasePage from './Components/BasePage.vue';
import PowerContent from "./Components/PowerContent.vue";
import RaceSelector from "./Components/RaceSelector.vue";
import CardContainer from "./Components/CardContainer.vue";
import StatSelector from "./Components/StatSelector.vue";
import CharacterConcept from "./Components/CharacterConcept.vue";
import SkillSelector from "./Components/SkillSelector.vue";
import EquipmentTab from "./Components/EquipmentTab.vue";
import RacialPowers from "./Components/RacialPowers.vue";
import Upbringing from "./Components/Upbringing.vue";
import RolePowers from "./Components/RolePowers.vue";
import BackgroundSelector from "./Components/BackgroundSelector.vue";
import CharacterDisplay from "./Components/CharacterDisplay.vue";

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

//NOTE: can use url saving like I planned, or if the JSON gets too dense and therefore the url is too long, could experiment with downloading and uploading JSON purely through the frontend:
// https://stackoverflow.com/questions/23344776/how-to-access-data-of-uploaded-json-file


function getCharacterFromUrl(url) {
    let c = new URLSearchParams(new URL(url).search).get("c");
    return c ? Object.assign(new Character(), JSON.parse(jsoncrush.uncrush(c))) : new Character();
}

function getUrlFromCharacter(character) {
    if(!character) character = chosen.value;

    if(!(character instanceof Character)) throw Error("AAAAA character isn't a Character object:" + JSON.stringify(character));

    let c = encodeURIComponent(jsoncrush.crush(JSON.stringify(character)));
    return new URL(window.location.origin + "/trinitas/character-sheet?c=" + c).href;
}

let chosen = ref(getCharacterFromUrl(window.location.href));

let allChosenPowers = computed(() => [...chosen.value.racialPowers, chosen.value.backgroundPower, ...chosen.value.rolePowers].sort());

//race any stat selections
setRace(chosen.value.race);
function setRace(raceName) {
    if (!raceName) {
        chosen.value.race = "Human"
        chosen.value.size = "Medium"
        chosen.value.racialPowers = [];
    }
    else {
        let race = races.filter(r => r.name == raceName)[0];
        chosen.value.race = raceName;
        if(Array.isArray(race.size)) chosen.value.size = race.size[0];
        else chosen.value.size = race.size;
        chosen.value.raceStatBoon = race.recommendedStatBoons;
        chosen.value.raceStatMalus = race.recommendedStatMalus;
    }
}

function getRacialPowers() {
    let race = races.filter(r => r.name == chosen.value.race)[0];

    let racePowers = race.heritagePowers.map(powerName => {
        let powers = powersJson.value.filter(p => p.name == powerName);
        if (powers.length == 0) throw Error("No power found for [" + powerName + "]")
        else return powers[0];
    });
    return racePowers
}

function chooseRacialPowers(powers) {
    chosen.value.racialPowers = powers;
    key.value++;
}

let powerNames = computed(() => powersJson.value.map(p => p.name));
let backgroundPowers = computed(() => powersJson.value.filter(p => !p.preq.some(item => powerNames.value.includes(item))));

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
    let p = {};

    p.name = chosen.value.name;
    p.concept = chosen.value.concept;
    p.bonds = chosen.value.bonds;
    p.ideals = chosen.value.ideals;
    p.flaws = chosen.value.flaws;

    let race = false;
    if (chosen.value.race != "") {
        race = races.filter(r => r.name == chosen.value.race)[0];
    }
    p.racialPowers = chosen.value.racialPowers;

    p.background = backgrounds.filter(bg => chosen.value.background == bg.name)[0];
    p.backgroundPower = chosen.value.backgroundPower;

    p.rolePowers = chosen.value.rolePowers;

    // stat choices
    for(let stat of core.stats) {
        p[stat.toLowerCase()] = 0;
    }

    p[chosen.value.roleStatMajor.toLowerCase()] += 2;
    p[chosen.value.roleStatMinor.toLowerCase()] += 1;

    p[chosen.value.raceStatBoon[0].toLowerCase()] += 1;
    p[chosen.value.raceStatBoon[1].toLowerCase()] += 1;
    p[chosen.value.raceStatMalus.toLowerCase()] += -1;
    
    //set selected size - TODO: make this actually selectable when presented an option
    p.size = race ? (Array.isArray(race.size) ? race.size[0] : race.size) : "Medium";

    for(let stat of p.background.stats) p[stat.toLowerCase()] += 1;

    let setResistance = (s1, s2) => Math.round((s1 + s2) / 2);
    p.reflexes = setResistance(p.accuracy, p.perception);
    p.reflexLimit = chosen.value.reflexLimit;
    p.reflexLimited = p.reflexes > p.reflexLimit
    p.fortitude = setResistance(p.strength, p.dexterity);
    p.willpower = setResistance(p.intelligence, p.charisma);

    let chosenSize = core.sizes.filter(s => s.val == p.size)[0]
    p.baseHealth = chosenSize.health;
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

    p.baseDefence = chosenSize.defence;
    p.defence = Number(p.baseDefence) + Number(p.armour) + Number(p.reflexLimited ? p.reflexLimit : p.reflexes);

    p.imgSrc = chosen.value.imgSrc;

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
