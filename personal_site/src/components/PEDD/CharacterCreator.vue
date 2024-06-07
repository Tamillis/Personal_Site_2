<template>
    <section>
        <h2 class="title"><span id="character-name-disp">{{ player.name }}</span>, <span id="character-concept-disp">{{
            player.concept }}</span></h2>

        <StatDisplay :player="player" :key="'sd-' + key" style="margin-top: 1rem" />

        <div class="flex justify-between gap-1r summary">
            <div>
                <h2>Race</h2>
                <p>{{ player.race ? player.race.name : "None chosen" }}</p>
            </div>

            <div>
                <h2>Background</h2>
                <p>{{ player.background ? player.background.name : "None chosen" }}</p>
            </div>

            <div>
                <h2>Equipment</h2>
                <p>{{ player.background ? player.background.equipment.join(", ") : "" }}</p>
                <p>{{ player.equipmentCollection ? player.equipmentCollection.equipment : "" }}</p>
            </div>

            <div>
                <h2>Skills</h2>
                <p>TODO</p>
            </div>
        </div>

        <div>
            <h2>Powers</h2>
            <p>{{ player.racialPowers.length == 0 ? "None chosen" :
                player.racialPowers.join(", ") }} </p>
            <p>{{ player.backgroundPower == "" ? "None chosen" :
                player.backgroundPower }} </p>
            <p>{{ player.rolePowers.length == 0 ? "None chosen" :
                player.rolePowers.join(", ") }} </p>
        </div>

        <hr />

        <div id="section-tabs">
            <button @click="setSection('concept')" :class="{ selected: sections.concept }">1. Concept</button>
            <button @click="setSection('race')" :class="{ selected: sections.race }">2. Race</button>
            <button @click="setSection('background')" :class="{ selected: sections.background }">3. Background</button>
            <button @click="setSection('role')" :class="{ selected: sections.role }">4. Role</button>
            <button @click="setSection('equipment')" :class="{ selected: sections.equipment }">5. Equipment</button>
        </div>

        <section id="concept-section" v-if="sections.concept">
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

        <section id="race-section" v-if="sections.race">
            <h2>Race: {{ chosen.race.name }}</h2>
            <CardContainer v-for="race in races" :name="race.name" :expanded="chosen.race.name == race.name"
                :class="{ hidden: player.race && player.race.name !== race.name }"
                @chosen="chooseRace(race)">
                <RaceContent :race="race" @selected-stats="(stats) => { updateChosenRaceWith(stats) }" />
            </CardContainer>

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

        <section id="background-section" v-if="sections.background">
            <h3>Upbringing</h3>
            <p>2 Non-Martial Skills and Language - Any, your native language.</p>

            <div class="flex gap-1r">
                <select>
                    <option v-for="skill in upbringingSkills">{{ skill.skill }}</option>
                </select>
                <select>
                    <option v-for="skill in upbringingSkills">{{ skill.skill }}</option>
                </select>
                <div class="flex-grow">
                    <p>Language (<input id="upbringing-language" value="Common" style="display:inline"/>)</p>
                </div>
            </div>

            <h2>Background:</h2>
            <div id="backgrounds-container">
                <CardContainer v-for="(bg, i) in backgrounds" :name="bg.name"
                    :expanded="player.background && player.background.name == bg.name"
                    :class="{ hidden: player.background && player.background.name != bg.name }"
                    @chosen="chooseBackground(bg)"
                    :key="`bgc-${i}-${key}`">
                    <BackgroundContent :bg="bg" />
                </CardContainer>
            </div>

            <h2>Background Power:</h2>
            <div class="cards">
                <CardContainer v-for="(power, i) in backgroundPowers" :name="power.name"
                    :class="{ hidden: player.backgroundPower && player.backgroundPower != power.name }"
                    :expanded="chosen.backgroundPower == power.name"
                    @chosen="chooseBackgroundPower(power)"
                    :key="`bgpc-${i}-${key}`">
                    <PowerContent :power="power" @highlight="(tag) => highlight(tag)" />
                </CardContainer>
            </div>
        </section>

        <section id="role-section" v-if="sections.role">
            <h2>Role</h2>

            <h3>Role Stats</h3>
            <StatSelector :stats="stats"
                @stat-change="(statsSelection) => { roleStats = statsSelection; buildPlayer(); }" />

            <h3>Role Skills</h3>
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

            <div class="selection" style="max-width: 300px;">
                <h3>Equipment Collections</h3>
                <select id="equipment-collections" @change="updateEquipmentCollection">
                    <option disabled selected>Choose one...</option>
                    <option v-for="(collection, i) in equipmentCollections" :value="i">{{ collection.name }}</option>
                </select>
            </div>

            <div class="flex">
                <div class="selection">
                    <h3>Body Armour</h3>
                    <select id="arm" @change="chosenArmour">
                        <option value="0" data-ref-limit="99">None</option>
                        <option value="1" data-ref-limit="99">+1 Padded (Loud)</option>
                        <option value="1" data-ref-limit="99">+1 Leather</option>
                        <option value="2" data-ref-limit="99">+2 Studded Leather</option>
                        <option value="2" data-ref-limit="2">+2 Hide</option>
                        <option value="3" data-ref-limit="2">+3 Chain Shirt</option>
                        <option value="4" data-ref-limit="2">+4 Scale Mail (Loud)</option>
                        <option value="4" data-ref-limit="2">+4 Breastplate</option>
                        <option value="5" data-ref-limit="2">+5 Half-plate (Loud)</option>
                        <option value="4" data-ref-limit="0">+4 Ring mail (Loud)</option>
                        <option value="6" data-ref-limit="0">+6 Chain mail (Loud)</option>
                        <option value="7" data-ref-limit="0">+7 Splint mail (Loud)</option>
                        <option value="8" data-ref-limit="0">+8 Plate mail (Loud)</option>
                    </select>
                </div>

                <div class="selection">
                    <h3>Helmet</h3>
                    <select id="helmet" @change="chosenArmour">
                        <option value="0" data-ref-limit="99">None</option>
                        <option value="1" data-ref-limit="2">+1 Lobster Pot</option>
                        <option value="2" data-ref-limit="0">+2 Great Helm (Blinkered)</option>
                    </select>
                </div>

                <div class="selection">
                    <h3>Shield</h3>
                    <select id="shield" @change="chosenArmour">
                        <option value="0" data-ref-limit="99">None</option>
                        <option value="1" data-ref-limit="99">+1 Buckler</option>
                        <option value="2" data-ref-limit="2">+2 Shield</option>
                        <option value="3" data-ref-limit="0">+3 Tower Shield (Loud)</option>
                    </select>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import PowerContent from './PowerContent.vue';
import RaceContent from './RaceContent.vue';
import CardContainer from './CardContainer.vue';
import BackgroundContent from './BackgroundContent.vue';
import StatDisplay from './StatDisplay.vue';
import StatSelector from './StatSelector.vue';

//resources
import powers from '../../assets/pedd/pedd-powers.json';
import backgrounds from '../../assets/pedd/pedd-backgrounds.json';
import races from '../../assets/pedd/pedd-races.json';
import skillsData from '../../assets/pedd/pedd-skills.json';
import equipmentCollections from '../../assets/pedd/pedd-equipment-collections.json';

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
    equipment: false
});

function setSection(section) {
    for (let prop in sections.value) sections.value[prop] = false;
    sections.value[section] = true;
}

//charactersheet state
let key = ref(0);
let chosen = ref({
    race: false,
    racialPowers: [],
    background: false,
    backgroundPower: "",
    rolePowers: [],
    equipmentCollection: false,
    arm: 0,
    armRefLimit: 99,
    shield: 0,
    shieldRefLimit: 99,
    helmet: 0,
    helmetRefLimit: 99,
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

let chooseRacialPowers = () => {};

//background
let upbringingSkills = ref(skillsData.basicSkills.concat(skillsData.knowledgeSkills));
upbringingSkills.value.sort((s1, s2) => s1.skill.localeCompare(s2.skill));
let backgroundPowers = computed(() => powers.filter(p => p.tag.includes("background")));

let chooseBackground = (chosenBg) => {
    if(chosen.value["background"].name == chosenBg.name) {
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

    if(chosen.value.backgroundPower == card.name) {
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

let selectedStats = computed(() => {
    let ss = {};
    ss[roleStats.value[0]] = 2;
    ss[roleStats.value[1]] = 1;
    for (let s of stats) {
        if (!ss.hasOwnProperty(s)) ss[s] = 0;
    }
    return ss
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

//equipment
let updateEquipmentCollection = (e) => {
    chosen.value.equipmentCollection = equipmentCollections[e.target.value];
    buildPlayer();
}

let chosenArmour = (e) => {
    let chosenProp = e.target.id;
    let refLimitProp = e.target.id + "RefLimit";
    let armourValue = e.target.children[e.target.selectedIndex].value;
    let refLimit = e.target.children[e.target.selectedIndex].dataset.refLimit;
    chosen.value[chosenProp] = armourValue;
    chosen.value[refLimitProp] = refLimit;
    buildPlayer();
}

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

    player.value.strength = selectedStats.value.strength;
    player.value.dexterity = selectedStats.value.dexterity;
    player.value.accuracy = selectedStats.value.accuracy;
    player.value.perception = selectedStats.value.perception;
    player.value.intelligence = selectedStats.value.intelligence;
    player.value.charisma = selectedStats.value.charisma;
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

    if (player.value.reflexes > chosen.value.armRefLimit) player.value.reflexes = chosen.value.armRefLimit;
    if (player.value.reflexes > chosen.value.shieldRefLimit) player.value.reflexes = chosen.value.shieldRefLimit;
    if (player.value.reflexes > chosen.value.helmetRefLimit) player.value.reflexes = chosen.value.helmetRefLimit;

    player.value.willpower = player.value.intelligence + player.value.charisma;

    player.value.faith = 2; //TODO: make faith input based

    player.value.equipmentCollection = chosen.value.equipmentCollection;

    player.value.armour = Number(chosen.value.arm) + Number(chosen.value.shield) + Number(chosen.value.helmet);

    player.value.baseDefence = player.value.race ? baseDefence[player.value.race.size.val] : 8;
    player.value.defence = Number(player.value.baseDefence) + Number(player.value.armour) + Number(player.value.reflexes);

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

select {
    appearance: none;
    display: inline;
    outline: none;
    border: none;
    text-align: center;
    color: var(--text-color);
    background-color: var(--background);
    padding: 0px 0.5rem;
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