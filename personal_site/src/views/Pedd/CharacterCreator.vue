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
        <div id="stats">
            <label>Stats</label>
            <table>
                <tr>
                    <td>
                        <p>Strength: <span></span></p>
                    </td>
                    <td></td>
                    <td>
                        <p>Dexterity: <span></span></p>
                    </td>
                    <td></td>
                    <td>
                        <p>Accuracy: <span></span></p>
                    </td>
                    <td></td>
                    <td>
                        <p>Perception: <span></span></p>
                    </td>
                    <td></td>
                    <td>
                        <p>Intelligence: <span></span></p>
                    </td>
                    <td></td>
                    <td>
                        <p>Charisma: <span></span></p>
                    </td>
                    <td></td>
                </tr>
            </table>
            <label>Resistances</label>
            <table>
                <tr>
                    <td>
                        <p>Fortitude:</p>
                    </td>
                    <td></td>
                    <td>
                        <p>Reflexes: <span></span></p>
                    </td>
                    <td></td>
                    <td>
                        <p>Willpower: <span></span></p>
                    </td>
                    <td></td>
                </tr>
            </table>
            <label>Tertiaries</label>
            <p>Don't forget these are just for flavour.</p>
            <table>
                <tr>
                    <td>
                        <p>Appearance (Strength + Charisma): <span></span></p>
                    </td>
                    <td></td>
                    <td>
                        <p>Agility (Dexterity + Accuracy): <span></span></p>
                    </td>
                    <td></td>
                    <td>
                        <p>Foresight (Perception + Intelligence): <span></span></p>
                    </td>
                    <td></td>
                </tr>
            </table>
            <StatPicker />
        </div>
        <h2>Race: <span>{{ chosen.race }}</span></h2>
        <PEDDCard v-for="race in races" :name="race.name" :expanded="openedRaceCards.includes(race.name)" :class="{highlight: chosen.race == race.name}"
            @chosen="() => openedRaceCards = chooseValue(race, 'race', openedRaceCards)">
            <PEDDRace :race="race" />
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
import StatPicker from './StatPicker.vue';

let racialPowers = computed(
    () => powers.filter(p => p.tag.includes("racial") && p.tag.includes(chosen.value.race.toLowerCase()))
);
let backgroundPowers = computed(() => powers.filter(p => p.tag.includes("background")));
let rolePowers = computed(() => {
    key.value++;
    return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
});
let tags = ["All"].concat(Array.from(new Set(powers.map(p => p.tag).flat().sort()))); //don't you just love javascript?

let roleTag = ref("All");

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