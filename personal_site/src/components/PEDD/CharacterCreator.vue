<template>
    <section>
        <CharacterDisplay :player="player" :haveFaith="sections.faith" />

        <hr />

        <div id="section-tabs">
            <button @click="setSection('concept')" :class="{ selected: sections.concept }">1. Concept</button>
            <button @click="setSection('race')" :class="{ selected: sections.race }">2. Race</button>
            <button @click="setSection('background')" :class="{ selected: sections.background }">3. Background</button>
            <button @click="setSection('role')" :class="{ selected: sections.role }">4. Role</button>
            <button @click="setSection('equipment')" :class="{ selected: sections.equipment }">5. Equipment</button>
            <button @click="sections.faith = !sections.faith">{{sections.faith ? "I lost my faith" : "I have faith!"}}</button>
            <button @click="buildPlayer">Manual Refresh</button>
        </div>

        <section id="concept-section" v-show="sections.concept">
            <!-- TODO: Put into concept component, emitting characterName, characterConcept, bonds, ideals, flaws  -->

            <div class="flex">
                <div>
                    <label for="character-name">Character Name: </label>
                    <input id="character-name" class="text-entry w100" placeholder="..." v-model="characterName"
                        @input="buildPlayer" />
                </div>
                <div class="flex-grow">
                    <label for="character-concept">Character Concept: </label>
                    <input id="character-concept" class="text-entry w100" placeholder="..." v-model="characterConcept"
                        @input="buildPlayer" />
                </div>
            </div>
            <div class="flex justify-around w100">
                <div class="w100">
                    <label for="character-bonds">Bond/s: </label>
                    <textarea id="character-bonds" class="text-entry" placeholder="..."></textarea>
                </div>
                <div class="w100">
                    <label for="character-ideals">Ideal/s: </label>
                    <textarea id="character-ideals" class="text-entry" placeholder="..."></textarea>
                </div>
                <div class="w100">
                    <label for="character-flaws">Flaw/s: </label>
                    <textarea id="character-flaws" class="text-entry" placeholder="..."></textarea>
                </div>
            </div>
        </section>

        <section id="race-section" v-show="sections.race">
            <!-- TODO: Put into race chooser component, emitting a simple chosen race name  -->
            <h2>Race: {{ chosen.race.name }}</h2>
            <CardContainer v-for="race in races" :name="race.name" :expanded="chosen.race.name == race.name"
                :class="{ hidden: player.race && player.race.name !== race.name }" @chosen="chooseRace(race)">
                <RaceContent :race="race" @selected-stats="(stats) => { updateChosenRaceWith(stats) }" />
            </CardContainer>


            <!-- TODO: Put into racial powers component, emitting a simple array of chosen power names  -->
            <div v-if="chosen.race">
                <h2>Racial Powers: <span>{{ chosen.racialPowers.join(', ') }}</span></h2>
                <div class="cards">
                    <CardContainer v-for="(power, i) in racialPowers" :name="power.name"
                        :class="{ highlight: chosen.racialPowers.includes(power.name) }"
                        :expanded="openedRacialPowerCards.includes(power.name)"
                        @chosen="() => openedRacialPowerCards = choosePower(power, 'racialPowers', openedRacialPowerCards, 2)"
                        :key="`rcpc-${i}-${key}`">
                        <PowerContent :power="power" @highlight="(tag) => highlight(tag)" />
                    </CardContainer>
                </div>
            </div>
        </section>

        <section id="background-section" v-show="sections.background">
            <!-- TODO: Put into upbringing component, emitting a simple array of chosen skills and chosen language  -->
            <h3>Upbringing</h3>
            <p>2 Non-Martial Skills and Language - Any, your native language.</p>

            <div class="flex gap-1r">
                <select v-model="chosen.upbringing.skill1" @change="buildPlayer">
                    <option v-for="skill in upbringingSkills.filter(s => s.skill != chosen.upbringing.skill2)">{{
                        skill.skill }}</option>
                </select>
                <select v-model="chosen.upbringing.skill2" @change="buildPlayer">
                    <option v-for="skill in upbringingSkills.filter(s => s.skill != chosen.upbringing.skill1)">{{
                        skill.skill }}</option>
                </select>
                <div class="flex-grow">
                    <p>Language (<input id="upbringing-language" v-model="chosen.upbringing.language"
                            @input="buildPlayer" style="display:inline" />)</p>
                </div>
            </div>

            <h2>Background:</h2>
            <div id="backgrounds-container">
                <CardContainer v-for="(bg, i) in backgrounds" :name="bg.name"
                    :expanded="player.background && player.background.name == bg.name"
                    :class="{ hidden: player.background && player.background.name != bg.name }"
                    @chosen="chooseBackground(bg)" :key="`bgc-${i}-${key}`">
                    <BackgroundContent :bg="bg" />
                </CardContainer>
            </div>

            <h2>Background Power:</h2>
            <div class="cards">
                <CardContainer v-for="(power, i) in backgroundPowers" :name="power.name"
                    :class="{ hidden: player.backgroundPower && player.backgroundPower != power.name }"
                    :expanded="chosen.backgroundPower == power.name" @chosen="chooseBackgroundPower(power)"
                    :key="`bgpc-${i}-${key}`">
                    <PowerContent :power="power" @highlight="(tag) => highlight(tag)" />
                </CardContainer>
            </div>
        </section>

        <section id="role-section" v-show="sections.role">
            <h2>Role</h2>

            <h3>Role Stats</h3>
            <StatSelector :stats="stats"
                @stat-change="(statsSelection) => { roleStats = statsSelection; buildPlayer(); }" />

            <h3>Role Skills</h3>
            <SkillSelector :skills="roleSkills" :limit="4 + player.intelligence"
                @skills="(skills) => chosen.roleSkills = skills" />
            <p>4 + your Intelligence ({{ player.intelligence }}) = {{ 4 + player.intelligence }}</p>

            <h2>Role Powers: <span>{{ chosen.rolePowers.join(', ') }}</span></h2>
            <p>One day the below will be properly automatically filtered by prerequisites</p>
            <select class="tag-select" v-model="roleTag">
                <option v-for="tag in tags">{{ tag }}</option>
            </select>
            <div class="cards">
                <CardContainer v-for="(power, i) in rolePowers" :name="power.name"
                    :expanded="openedRolePowerCards.includes(power.name)"
                    :class="{ highlight: chosen.rolePowers.includes(power.name) }"
                    @chosen="() => openedRolePowerCards = choosePower(power, 'rolePowers', openedRolePowerCards, 3)"
                    :key="`rlpc-${i}-${key}`">
                    <PowerContent :power="power" @highlight="(tag) => highlight(tag)" />
                </CardContainer>
            </div>
        </section>

        <section id="equipment-section" v-if="sections.equipment">
            <EquipmentTab @equipment="(equipment) => chosen.roleEquipment = equipment"
                @armour="(armour) => chosen.armour = armour" @shield="(shield) => chosen.shield = shield"
                @helmet="(helmet) => chosen.helmet = helmet" @ref-limit="(refLimit) => chosen.refLimit = refLimit" />
        </section>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import PowerContent from './PowerContent.vue';
import RaceContent from './RaceContent.vue';
import CardContainer from './CardContainer.vue';
import BackgroundContent from './BackgroundContent.vue';
import StatSelector from './StatSelector.vue';

//resources
import powers from '../../assets/pedd/pedd-powers.json';
import backgrounds from '../../assets/pedd/pedd-backgrounds.json';
import races from '../../assets/pedd/pedd-races.json';
import skillsData from '../../assets/pedd/pedd-skills.json';
import SkillSelector from './SkillSelector.vue';
import CharacterDisplay from './CharacterDisplay.vue';
import EquipmentTab from './EquipmentTab.vue';

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
let upbringingSkills = ref(skillsData.basicSkills.concat(skillsData.knowledgeSkills));
upbringingSkills.value.sort((s1, s2) => s1.skill.localeCompare(s2.skill));

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
let key = ref(0);   //TODO: Remove key?

//TODO: change chosen to be the point of reference (i.e. id's, not objects), and also to load selections from chosen so that it can be used for saving
let chosen = ref({
    race: false,
    racialPowers: [],
    background: false,
    backgroundPower: "",
    upbringing: {
        skill1: upbringingSkills.value[0].skill,
        skill2: upbringingSkills.value[1].skill,
        language: "Common"
    },
    rolePowers: [],
    roleSkills: [],
    roleEquipment: [],
    armour: 0,
    helmet: 0,
    shield: 0,
    refLimit: 99
});

//card state
let openedRaceCards = [];
let openedRacialPowerCards = [];
let openedRolePowerCards = [];

let highlight = (tag) => {
    roleTag.value = tag;
};

//concept
let characterName = ref("");
let characterConcept = ref("");

//race
let updateChosenRaceWith = (stats) => {
    chosen.value.race.stats = stats;
    buildPlayer();
};

let racialPowers = computed(
    () => powers.filter(p => p.tag.includes("racial") && p.tag.includes(chosen.value.race.name.toLowerCase()))
);

let chooseRace = (chosenRace) => {
    key.value++;
    if (!openedRaceCards.includes(chosenRace.name)) {
        //clicking an un-opened card, opening it and making it the player race
        chosen.value.race = chosenRace;
        openedRaceCards.push(chosenRace.name);
    }
    else if (chosen.value.race && chosen.value.race.name !== chosenRace.name) {
        //clicking an open card that is not the current player race
        chosen.value.race = chosenRace;
    }
    else {
        //clicking the opened and player race card, i.e. set player race to prior open race card and close it
        openedRaceCards = openedRaceCards.filter(r => r !== chosenRace.name);
        if (openedRaceCards.length > 0) chosen.value.race = races.filter(r => r.name == openedRaceCards[openedRaceCards.length - 1])[0];
        else chosen.value.race = false;
    }

    buildPlayer();
    return openedRaceCards;
};

let chooseRacialPowers = () => { };

//background
let backgroundPowers = computed(() => powers.filter(p => p.tag.includes("background")));

let chooseBackground = (chosenBg) => {
    if (chosen.value["background"].name == chosenBg.name) {
        //clicked on open card, close it and reveal all cards
        chosen.value["background"] = false;

    } else {
        //open chosen card, hide others
        chosen.value["background"] = chosenBg;
    }

    buildPlayer();
    return;
}

let chooseBackgroundPower = (card) => {

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
let roleTag = ref("All");
let rolePowers = computed(() => {
    return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
});

let roleStats = ref(["accuracy", "perception"]);

let roleSkills = ref(skillsData.basicSkills.map(s => s.skill).concat(skillsData.knowledgeSkills.map(s => s.skill).concat(skillsData.martialSkills.map(s => s.skill))));
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
    }
    else {
        //clicking an opened card
        //if the opened card is not in the selected list and there is room, add it
        if (!chosen.value[attribute].includes(power.name) && chosen.value[attribute].length < max) {
            chosen.value[attribute].push(power.name);
        }
        else {
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
let player = ref({});
let buildPlayer = () => {
    player.value = {};

    player.value.name = characterName.value;
    player.value.concept = characterConcept.value;

    player.value.race = chosen.value.race;
    player.value.racialPowers = chosen.value.racialPowers;
    player.value.background = chosen.value.background;
    player.value.backgroundPower = chosen.value.backgroundPower;
    player.value.rolePowers = chosen.value.rolePowers;

    let ss = {};
    ss[roleStats.value[0]] = 2;
    ss[roleStats.value[1]] = 1;
    for (let s of stats) {
        if (!ss.hasOwnProperty(s)) ss[s] = 0;
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
    if(player.value.reflexes > chosen.value.refLimit) player.value.reflexes = chosen.value.refLimit;
    player.value.willpower = player.value.intelligence + player.value.charisma;

    player.value.faith = 2; //TODO: make faith input based

    player.value.equipmentCollection = chosen.value.roleEquipment;

    player.value.skills = [];
    player.value.skills = chosen.value.roleSkills.slice();  //copy array by value not ref
    player.value.skills.push(chosen.value.upbringing.skill1)
    player.value.skills.push(chosen.value.upbringing.skill2)
    player.value.skills.push(`Language (${chosen.value.upbringing.language})`)
    if (chosen.value.background) player.value.skills = player.value.skills.concat(chosen.value.background.skills);
    player.value.skills = player.value.skills.sort((s1, s2) => s1.localeCompare(s2));

    player.value.armour = chosen.value.armour + chosen.value.shield + chosen.value.helmet;

    player.value.baseDefence = player.value.race ? baseDefence[player.value.race.size.val] : 8;
    player.value.defence = Number(player.value.baseDefence) + Number(player.value.armour) + Number(player.value.reflexes);

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
.text-entry {
    border: none;
    border-radius: 0px;

    margin-left: 2rem;
    margin-right: 2rem;
    padding: 4px 2px;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    width: 90%;
    font-size: smaller;
}

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