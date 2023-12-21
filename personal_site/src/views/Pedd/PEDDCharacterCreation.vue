<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title">P.E.D.D.</h1>
        <h2 class="subsubtitle text-centre no-decoration">Character Creation</h2>

        <div class="centre width-fit">
            <input type="checkbox" id="creator" class="radioQ" :value="creatorMode" @change="toggleCreator">
            <label for="creator"> - Character Creator Mode</label>
        </div>

        <PeddLinks />

        <div class="main-text inset" v-show="!creatorMode">
            <div id="pedd"></div>
        </div>

        <div class="main-text inset" v-show="creatorMode">
            <div id="character-name">
                <h2>Character Name: </h2>
                <input id="character-name" placeholder="..." />
            </div>
            <div id="character-concept">
                <h2>Character Concept: </h2>
                <input id="character-name" placeholder="..." />
            </div>
            <div id="bonds-ideals-flaws" class="flex gap-1r">
                <div>
                    <h2>Bond/s: </h2>
                    <input id="character-name" placeholder="..." />
                </div>
                <div>
                    <h2>Ideal/s: </h2>
                    <input id="character-name" placeholder="..." />
                </div>
                <div>
                    <h2>Flaw/s: </h2>
                    <input id="character-name" placeholder="..." />
                </div>
            </div>
            <div id="stats">
                <h2>Stats</h2>
                <textarea cols="100" rows="1">Here be, in time, automatic stats</textarea>
            </div>
            <h2>Races: <span id="chosen-race">{{ chosenRace }}</span></h2>
            <div id="races-container" class="card-container">
                <PEDDRace v-for="race in raceCards" style="width:50%" :race="race" @click="chooseRace(race)"/>
            </div>
            <h2>Racial Powers:</h2>
            <div id="racial-powers-container" class="card-container" :key="key">
                <PEDDPower v-for="power in racialPowers" style="width:30%" :power="power" />
            </div>
            <div id="backgrounds-container"></div>
            <div id="background-powers-container"></div>
            <div class="proficiencies-list"></div>
            <div id="role-container"></div>
        </div>

    </section>
</template>
  
<script setup>
import { putMdinElement } from '../../assets/functionality';
import { onMounted, ref, reactive } from 'vue';
import PeddLinks from './PeddLinks.vue';
import PEDDPower from './PEDDPower.vue';
import PEDDRace from './PEDDRace.vue';
import powers from '../../assets/pedd/pedd-powers.json';
import races from '../../assets/pedd/pedd-races.json';
onMounted(() => {
    putMdinElement('../src/assets/pedd/pedd-character-creation.md', 'pedd')
});

let racialPowers = ref(powers.filter(p => p.tag.includes("racial")));
let raceCards = races.map(p=> {return {...p, expanded: false}});

let creatorMode = ref(false);
let chosenRace = ref("");
let key = ref(0);

let toggleCreator = () => creatorMode.value = !creatorMode.value;

let selectedRaces = [];
let chooseRace = (race) => {
    let raceName = race.name;
    key.value++;
    if (!selectedRaces.includes(raceName)) {
        chosenRace.value = raceName;
        selectedRaces.push(raceName);
        racialPowers.value = powers.filter(p => p.tag.includes("racial") && p.tag.includes(raceName.toLowerCase()));
        race.expanded = true;
    }
    else if (chosenRace.value !== raceName) {
        chosenRace.value = raceName;
        racialPowers.value = powers.filter(p => p.tag.includes("racial") && p.tag.includes(raceName.toLowerCase()));
    }
    else {
        selectedRaces = selectedRaces.filter(r => r !== raceName);
        race.expanded = false;
        if (selectedRaces.length > 0) {
            chosenRace.value = selectedRaces[selectedRaces.length - 1];
            racialPowers.value = powers.filter(p => p.tag.includes("racial") && p.tag.includes(chosenRace.value.toLowerCase()));
        }
        else {
            chosenRace.value = "";
            racialPowers.value = powers.filter(p => p.tag.includes("racial"));
        }
    }
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
    flex-direction: row;
    flex-wrap: wrap;
}
</style>