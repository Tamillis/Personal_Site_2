<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title">P.E.D.D.</h1>
        <h2 class="subsubtitle text-centre no-decoration">Character Creation</h2>

        <div class="centre width-fit">
            <input type="checkbox" id="creator" class="radioQ" :value="creatorMode" @change="toggleCreator">
            <label for="creator" style="display:inline;"> - Character Creator Mode</label>
        </div>

        <PeddLinks />

        <div class="main-text inset" v-show="!creatorMode">
            <div id="pedd"></div>
        </div>

        <div class="main-text inset" v-show="creatorMode">
            <div class="flex gap-1r">
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
            <div id="stats">
                <label>Stats</label>
                <textarea class="text-entry">Here be, in time, automatic stats</textarea>
            </div>
            <h2>Race: <span>{{ chosen.race }}</span></h2>
            <div id="races-container" class="card-container">
                <PEDDRace v-for="race in races" :race="race"
                    @race-chosen="() => openedRaceCards = chooseValue(race, 'race', openedRaceCards)"
                    :expanded="openedRaceCards.includes(race.name)" />
            </div>
            <div v-if="openedRaceCards.length !== 0">
                <h2>Racial Powers: <span>{{ chosen.racialPowers.join(', ') }}</span></h2>
                <div id="racial-powers-container" class="card-container" :key="key">
                    <PEDDPower v-for="power in racialPowers" :power="power"
                        @chosen="() => openedRacialPowerCards = choosePower(power, 'racialPowers', openedRacialPowerCards, 2)"
                        :expanded="openedRacialPowerCards.includes(power.name)" />
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
            <div id="background-powers-container" class="card-container" :key="key">
                <PEDDPower v-for="power in backgroundPowers" :power="power"
                        @chosen="() => openedBackgroundPowerCards = choosePower(power, 'racialPowers', openedBackgroundPowerCards, 1)"
                        :expanded="openedBackgroundPowerCards.includes(power.name)" />
            </div>

            <h2>Role Powers: <span>{{ chosen.rolePowers.join(', ') }}</span></h2>
            <p>One day the below will be properly automatically filtered by prerequisites</p>
            <div id="role-powers-container" class="card-container" :key="key">
                <PEDDPower v-for="power in rolePowers" :power="power"
                        @chosen="() => openedRolePowerCards = choosePower(power, 'racialPowers', openedRolePowerCards, 2)"
                        :expanded="openedRolePowerCards.includes(power.name)" />
            </div>
            <h3>Role Stat increases</h3>
            <h3>4 Role Martial Skills</h3>

            <h2>Equipment Collections</h2>
            <p>Port this over from w/e</p>
        </div>

    </section>
</template>
  
<script setup>
import { putMdinElement } from '../../assets/functionality';
import { onMounted, ref, computed } from 'vue';
import PeddLinks from './PeddLinks.vue';
import PEDDPower from './PEDDPower.vue';
import PEDDRace from './PEDDRace.vue';
import powers from '../../assets/pedd/pedd-powers.json';
import races from '../../assets/pedd/pedd-races.json';
onMounted(() => {
    putMdinElement('../src/assets/pedd/pedd-character-creation.md', 'pedd')
});

let racialPowers = computed(
    () => powers.filter(p => p.tag.includes("racial") && p.tag.includes(chosen.value.race.toLowerCase()))
);
let backgroundPowers = computed(() => powers.filter(p => p.tag.includes("background")));
let rolePowers = computed(() => powers.filter(p => !p.tag.includes("racial") || (p.tag.includes("racial") && p.tag.includes("background"))));

let creatorMode = ref(false);
let chosen = ref({
    race: "",
    racialPowers: [],
    background: "",
    backgroundPower: "",
    rolePowers: []
});
let key = ref(0);

let openedRaceCards = [];
let openedRacialPowerCards = [];
let openedBackgroundPowerCards = [];
let openedRolePowerCards = [];

let toggleCreator = () => creatorMode.value = !creatorMode.value;

// choose(race, "race", openedRaceCards) and return selection otherwise the seemingly passed by value array will be lost! hahahaha
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
</script>
  
<style>
#pedd a,
#pedd a:link,
#pedd a:visited {
    text-decoration: none;
    color: var(--text-color);
    font-style: normal;
    font-weight: bold;
    overflow-wrap: break-word;
}

#pedd a:hover {
    font-style: italic;
}

#pedd blockquote {
    margin-left: var(--textindent);
    background-color: rgba(0, 0, 0, 0.3);
    width: fit-content;
    padding-right: 1.5rem;
    border-top: 2px solid var(--highlight);
    border-bottom: 2px solid var(--highlight);
}

#pedd p {
    line-height: 1.2rem;
    margin-bottom: 0.33rem;
}

#pedd h1 {
    text-align: center;
    font-size: var(--main-title-size);
}

#pedd h2 {
    font-size: var(--subtitle-size);
}

#pedd h3 {
    font-size: var(--subsubtitle-size);
    text-decoration: underline;
    margin-top: 1rem;
    margin-bottom: -0.33rem;
}

#pedd h4 {
    font-size: var(--para-size);
    font-weight: 700;
    margin-top: 0.75rem;
    margin-bottom: -0.33rem;
}

#pedd em {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3rem;
}

#pedd strong {
    font-weight: 700;
}

#pedd table {
    margin: 0.5rem auto;
}

.proficiencies-list ul {
    margin-top: 0.5rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
}

.proficiencies-list li {
    list-style: none;
    border-left: 2px groove var(--highlight);
    border-right: 2px groove var(--highlight);
    padding: 0px 1rem;
}

.card-container {
    display: flex;
    flex-direction: column;
}

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
    font-size: var(--para-size);
}

textarea {
    height: 2rem;
}

label {
    font-weight: bold;
    font-size: larger;
    display: block;
}
</style>