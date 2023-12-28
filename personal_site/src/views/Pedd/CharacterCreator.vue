<template>
    <section>
        <div class="name-and-concept">
            <div>
                <label for="character-name">Character Name: </label>
                <input id="character-name" class="text-entry w100" placeholder="..." />
            </div>
            <div>
                <label for="character-concept">Character Concept: </label>
                <input id="character-concept" class="text-entry w100" placeholder="..." />
            </div>
        </div>
        <div>
            <label for="character-bonds">Bond/s: </label>
            <textarea id="character-bonds" class="text-entry" placeholder="..."></textarea>
        </div>
        <div>
            <label for="character-ideals">Ideal/s: </label>
            <textarea id="character-ideals" class="text-entry" placeholder="..."></textarea>
        </div>
        <div>
            <label for="character-flaws">Flaw/s: </label>
            <textarea id="character-flaws" class="text-entry" placeholder="..."></textarea>
        </div>

        <StatDisplay :player="player" :race="chosen.race" :key="'sd-'+key"/>

        <StatPicker />

        <h2>Race: <span>{{ chosen.race.name }}</span></h2>
        <PEDDCard v-for="race in races" :name="race.name" :expanded="openedRaceCards.includes(race.name)" :class="{highlight: chosen.race.name == race.name}"
            @chosen="() => openedRaceCards = chooseRace(race)">
            <PEDDRace :race="race" @selected-stats="(stats) => {chosen.stats = stats;updatePlayerStats(race);}"/>
        </PEDDCard>

        <div v-if="openedRaceCards.length !== 0">
            <h2>Racial Powers: <span>{{ chosen.racialPowers.join(', ') }}</span></h2>
            <div class="cards">
            <PEDDCard v-for="(power, i) in racialPowers" :name="power.name" :class="{highlight: chosen.racialPowers.includes(power.name)}"
                :expanded="openedRacialPowerCards.includes(power.name)"
                @chosen="() => openedRacialPowerCards = choosePower(power, 'racialPowers', openedRacialPowerCards, 2)"
                :key="`rcpc-${i}-${key}`">
                <PEDDPower :power="power"  @highlight="(tag) => highlight(tag)"/>
            </PEDDCard>
        </div>
        </div>

        <h2>Upbringing</h2>
        <p>2 General Skills and 1 Language Skill</p>

        <h2>Background: <span>{{ chosen.background }}</span></h2>
        <div id="backgrounds-container">

        </div>

        <h3>Background Skills</h3>
        <p>Background Stat Increases (automate as they're fixed?)</p>
        <p>Background 6 General Skills</p>

        <h2>Background Power: <span>{{ chosen.backgroundPower }}</span></h2>
        <div class="cards">
        <PEDDCard v-for="(power, i) in backgroundPowers" :name="power.name" :class="{highlight: chosen.backgroundPower == power.name}"
            :expanded="openedBackgroundPowerCards.includes(power.name)"
            @chosen="() => openedBackgroundPowerCards = chooseValue(power, 'backgroundPower', openedBackgroundPowerCards, 1)"
            :key="`bgpc-${i}-${key}`">
            <PEDDPower :power="power"  @highlight="(tag) => highlight(tag)"/>
        </PEDDCard>
    </div>

        <h2>Role Powers: <span>{{ chosen.rolePowers.join(', ') }}</span></h2>
        <p>One day the below will be properly automatically filtered by prerequisites</p>
        <select class="tag-select" v-model="roleTag">
            <option v-for="tag in tags">{{ tag }}</option>
        </select>
        <div class="cards">
        <PEDDCard v-for="(power, i) in rolePowers" :name="power.name" :expanded="openedRolePowerCards.includes(power.name)" :class="{highlight: chosen.rolePowers.includes(power.name)}"
            @chosen="() => openedRolePowerCards = choosePower(power, 'rolePowers', openedRolePowerCards, 3)" :key="`rlpc-${i}-${key}`">
            <PEDDPower :power="power" @highlight="(tag) => highlight(tag)" />
        </PEDDCard>
        </div>

        <h3>Role Stat increases</h3>
        <h3>4 Role Martial Skills</h3>

        <h2>Equipment Collections</h2>
        <p>Port this over from w/e</p>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import PEDDPower from './PEDDPower.vue';
import PEDDRace from './PEDDRace.vue';
import PEDDCard from './PEDDCard.vue';
import powers from '../../assets/pedd/pedd-powers.json';
import races from '../../assets/pedd/pedd-races.json';
import StatDisplay from './StatDisplay.vue';
import StatPicker from './StatPicker.vue';

let racialPowers = computed(
    () => powers.filter(p => p.tag.includes("racial") && p.tag.includes(chosen.value.race.name.toLowerCase()))
);
let backgroundPowers = computed(() => powers.filter(p => p.tag.includes("background")));
let rolePowers = computed(() => {
    key.value++;
    return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
});
let tags = ["All"].concat(Array.from(new Set(powers.map(p => p.tag).flat().sort()))); //don't you just love javascript?

let roleTag = ref("All");

let chosen = ref({
    race: false,
    racialPowers: [],
    background: "",
    backgroundPower: "",
    rolePowers: [],
    stats: []
});

let key = ref(0);
let selectedStats = ref({
    strength: 2,
    dexterity: 1,
    accuracy: 0,
    perception: 0,
    intelligence: -1,
    charisma: -2
})
let player = ref({
    strength: 2,
    dexterity: 1,
    accuracy: 0,
    perception: 0,
    intelligence: -1,
    charisma: -2,
    faith: 2,
    armour: 0,
    evasion: 0,
    fortitude: 0,
    reflexes: 0,
    willpower: 0,
    appearance: 0,
    agility: 0,
    foresight: 0,
    initiative: 0
});

let openedRaceCards = [];
let openedRacialPowerCards = [];
let openedBackgroundPowerCards = [];
let openedRolePowerCards = [];

let chooseRace = (race) => {
    key.value++;
    if (!openedRaceCards.includes(race.name)) {
        //clicking an un-opened card
        chosen.value.race = race;
        updatePlayerStats(race);
        openedRaceCards.push(race.name);
    }
    else if (chosen.value.race && chosen.value.race.name !== race.name) {
        //clicking an open card that is not the current selection
        chosen.value.race = race;
        updatePlayerStats(race);
    }
    else {
        //clicking the opened and selected card, i.e. deselect and close it
        openedRaceCards = openedRaceCards.filter(r => r !== race.name);
        if (openedRaceCards.length > 0) chosen.value.race = races.filter(r => r.name == openedRaceCards[openedRaceCards.length - 1])[0];
        else chosen.value.race = false;
    }

    return openedRaceCards;
};

let chooseValue = (card, attribute, opened) => {
    key.value++;
    if (!opened.includes(card.name)) {
        //clicking an un-opened card
        chosen.value[attribute] = card.name;
        opened.push(card.name);
    }
    else if (chosen.value[attribute] !== card.name) {
        //clicking an open card that is not the current selection
        chosen.value[attribute] = card.name;
    }
    else {
        //clicking the opened and selected card, i.e. deselect and close it
        opened = opened.filter(r => r !== card.name);
        if (opened.length > 0) chosen.value[attribute] = opened[opened.length - 1];
        else chosen.value[attribute] = "";
    }

    return opened;
};

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

    return opened;
};

let highlight = (tag) => {
    roleTag.value = tag;
};

let updatePlayerStats = (race) => {
    //set base stats from selections
    for(let stat in selectedStats.value) {
        player.value[stat] = selectedStats.value[stat];
    }
    
    player.value.evasion = 0;
    player.value.fortitude = 0;
    player.value.reflexes = 0;
    player.value.willpower = 0;
    player.value.appearance = 0;
    player.value.agility = 0;
    player.value.foresight = 0; 
    player.value.initiative = 0;
    player.value.faith = 2;

    //race increases
    //console.log(race.stats.map(s => s.desc + " " + s.val));
    for(let stat of race.stats) {
        if(stat.desc.toLowerCase() == "any") continue;
        player.value[stat.desc.toLowerCase()] += stat.val;
    }

    //calc using new stats secondaries
    player.value.evasion += player.value.dexterity < 0 ? 0 : player.value.dexterity;
    player.value.fortitude += player.value.strength + player.value.dexterity;
    player.value.reflexes += player.value.accuracy + player.value.perception;
    player.value.willpower += player.value.intelligence + player.value.charisma;
    player.value.appearance += player.value.strength + player.value.charisma;
    player.value.agility += player.value.accuracy + player.value.dexterity;
    player.value.foresight += player.value.intelligence + player.value.perception;
    player.value.initiative += player.value.dexterity + player.value.perception;
};
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

    width: 80%;
    font-size: smaller;
}

textarea {
    height: 1.5rem;
}

label {
    font-weight: bold;
    font-size: larger;
    display: block;
}

.name-and-concept {
    display: flex;
    gap: var(--gap);
}

@media screen and (max-width: 599px) {
    .name-and-concept {
        flex-direction: column;
    }
}

.tag-select {
    border: none;
    border-radius: 0px;

    margin-bottom: var(--gap);
    padding: 4px 2px;

    width: fit-content;

    font-size: var(--para-size);
}

</style>