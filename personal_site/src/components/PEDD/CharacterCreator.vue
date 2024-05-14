<template>
    <section>
        <div class="summary">
            <div>
                <label for="character-name">Character Name: </label>
                <input id="character-name" class="text-entry w100" placeholder="..." />
            </div>
            <div>
                <label for="character-concept">Character Concept: </label>
                <input id="character-concept" class="text-entry w100" placeholder="..." />
            </div>
        </div>
        <div class="summary justify-around w100">
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

        <div class="summary gap-1r">
            <div class="flex">
                <h2>Race</h2>
                <p>{{ player.race ? player.race.name : "None chosen" }}</p>
            </div>

            <div class="flex">
                <h2>Background</h2>
                <p>{{ player.background ? player.background.name : "None chosen" }}</p>
            </div>

            <div>
                <p>
                <h2 class="inline">Racial Powers</h2>: {{ player.racialPowers.length == 0 ? "None chosen" :
                    player.racialPowers.join(", ")
                }}</p>
                <p>
                <h2 class="inline">Background Power</h2>: {{ player.backgroundPower == "" ? "None chosen" :
                    player.backgroundPower }}
                </p>
                <p>
                <h2 class="inline">Role Powers</h2>: {{ player.rolePowers.length == 0 ? "None chosen" :
                    player.rolePowers.join(", ") }}</p>
            </div>

            <div class="flex">
                <h2>Equipment</h2>
                <p>TODO</p>
            </div>

            <div class="flex">
                <h2>Skills</h2>
                <p>TODO</p>
            </div>
        </div>

        <StatDisplay :player="player" :key="'sd-' + key" style="margin-top: 1rem" />

        <hr />

        <h2>Race: <span>{{ chosen.race.name }}</span></h2>
        <CardContainer v-for="race in races" :name="race.name" :expanded="openedRaceCards.includes(race.name)"
            :class="{ highlight: player.race && player.race.name == race.name }"
            @chosen="() => openedRaceCards = chooseRace(race)">
            <RaceContent :race="race" @selected-stats="(stats) => { updateChosenRaceWith(stats) }" />
        </CardContainer>

        <div v-if="openedRaceCards.length !== 0">
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

        <h3>Upbringing</h3>
        <p>2 Non-Martial Skills and Language - Any, your native language.</p>
        <select>
            <option v-for="skill in skills" v-html="skill"></option>
        </select>
        <select>
            <option v-for="skill in skills" v-html="skill"></option>
        </select>

        <h2>Background: <span>{{ chosen.background.name }}</span></h2>
        <div id="backgrounds-container">
            <CardContainer v-for="bg in backgrounds" :name="bg.name" :expanded="openedBackgroundCards.includes(bg.name)"
                :class="{ highlight: player.background && player.background.name == bg.name }"
                @chosen="() => openedBackgroundCards = chooseBackground(bg)">
                <BackgroundContent :bg="bg" />
            </CardContainer>
        </div>

        <h2>Background Power: <span>{{ chosen.backgroundPower }}</span></h2>
        <div class="cards">
            <CardContainer v-for="(power, i) in backgroundPowers" :name="power.name"
                :class="{ highlight: chosen.backgroundPower == power.name }"
                :expanded="openedBackgroundPowerCards.includes(power.name)"
                @chosen="() => openedBackgroundPowerCards = chooseValue(power, 'backgroundPower', openedBackgroundPowerCards, 1)"
                :key="`bgpc-${i}-${key}`">
                <PowerContent :power="power" @highlight="(tag) => highlight(tag)" />
            </CardContainer>
        </div>

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

        <StatSelector :stats="stats"
            @stat-change="(statsSelection) => { roleStats = statsSelection; buildPlayer(); }" />

        <h3>Role Skills</h3>

        <h2>Equipment Collections</h2>
        <p>Port this over from w/e</p>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import PowerContent from './PowerContent.vue';
import RaceContent from './RaceContent.vue';
import CardContainer from './CardContainer.vue';
import BackgroundContent from './BackgroundContent.vue';
import powers from '../../assets/pedd/pedd-powers.json';
import backgrounds from '../../assets/pedd/pedd-backgrounds.json';
import races from '../../assets/pedd/pedd-races.json';
import skills from '../../assets/pedd/pedd-skills.json';
import StatDisplay from './StatDisplay.vue';
import StatSelector from './StatSelector.vue';

let racialPowers = computed(
    () => powers.filter(p => p.tag.includes("racial") && p.tag.includes(chosen.value.race.name.toLowerCase()))
);
let backgroundPowers = computed(() => powers.filter(p => p.tag.includes("background")));
let rolePowers = computed(() => {
    return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
});
let tags = ["All"].concat(Array.from(new Set(powers.map(p => p.tag).flat())).sort()); //don't you just love javascript?
let stats = ["strength", "dexterity", "accuracy", "perception", "intelligence", "charisma"];

let roleTag = ref("All");

let chosen = ref({
    race: false,
    racialPowers: [],
    background: false,
    backgroundPower: "",
    rolePowers: []
});

let roleStats = ref(["strength", "dexterity", "intelligence", "charisma"]);
let key = ref(0);

let selectedStats = computed(() => {
    let ss = {};
    ss[roleStats.value[0]] = 2;
    ss[roleStats.value[1]] = 1;
    for (let s of stats) {
        if (!ss.hasOwnProperty(s)) ss[s] = 0;
    }
    return ss
});

let player = ref({});
let buildPlayer = () => {
    player.value = {};
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
            let stat = statDesc.toLowerCase().slice(0, -3);
            if (stats.includes(stat)) player.value[stat]++;
        }
    }

    player.value.fortitude = player.value.strength + player.value.dexterity;
    player.value.reflexes = player.value.accuracy + player.value.perception;
    player.value.willpower = player.value.intelligence + player.value.charisma;
    player.value.evasion = player.value.reflexes < 0 ? 0 : player.value.reflexes;
    player.value.faith = 2;
    player.value.armour = 0;
    if (player.value.race) {
        for (let stat of player.value.race.stats) {
            if (stat.desc.toLowerCase() == "fortitude") player.value.fortitude += stat.val;
            else if (stat.desc.toLowerCase() == "reflexes") {
                player.value.reflexes += stat.val;
                player.value.evasion += stat.val;
                if (player.value.evasion < 0) player.value.evasion = 0;
            }
            else if (stat.desc.toLowerCase() == "willpower") player.value.willpower += stat.val;
            else if (stat.desc.toLowerCase() == "evasion") {
                player.value.evasion += stat.val;
                if (player.value.evasion < 0) player.value.evasion = 0;
            }
        }
    }

    return player.value;
};
buildPlayer();

let openedRaceCards = [];
let openedRacialPowerCards = [];
let openedBackgroundCards = [];
let openedBackgroundPowerCards = [];
let openedRolePowerCards = [];

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

let chooseBackground = (chosenBg) => {
    key.value++;
    if (!openedBackgroundCards.includes(chosenBg.name)) {
        //clicking an un-opened card, opening it and making it the player race
        chosen.value.background = chosenBg;
        openedBackgroundCards.push(chosenBg.name);
    }
    else if (chosen.value.background && chosen.value.background.name !== chosenBg.name) {
        //clicking an open card that is not the current player race
        chosen.value.background = chosenBg;
    }
    else {
        //clicking the opened and player race card, i.e. set player race to prior open race card and close it
        openedBackgroundCards = openedBackgroundCards.filter(r => r !== chosenBg.name);
        if (openedBackgroundCards.length > 0) chosen.value.background = races.filter(r => r.name == openedBackgroundCards[openedBackgroundCards.length - 1])[0];
        else chosen.value.background = false;
    }

    buildPlayer();
    return openedBackgroundCards;
}

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

    buildPlayer();
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

    buildPlayer();
    return opened;
};

let highlight = (tag) => {
    roleTag.value = tag;
};

let updateChosenRaceWith = (stats) => {
    chosen.value.race.stats = stats;
    buildPlayer();
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

.summary {
    display: flex;
    gap: var(--gap);
}

@media screen and (max-width: 1050px) {
    .summary {
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