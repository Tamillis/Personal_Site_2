<template>
    <div class="bg-row">
        <h2>Background: {{ background ? background : "" }}</h2>
        <select>
            <option v-for="bg in backgrounds.map(b => b.name)">{{ bg }}</option>
        </select>
    </div>

    <div class="bg-row">
        <h4>Name:</h4>
        <p>{{ selectedBg.name }}</p>
    </div>

    <h4>Description:</h4>
    <div>{{ selectedBg.desc }}</div>
    
    <div class="bg-row">
        <h4>Stats: </h4>
        <select v-model="selectedBgStat1">
            <option>Accuracy</option>
            <option>Perception</option>
            <option>Strength</option>
            <option>Dexterity</option>
            <option>Charisma</option>
            <option>Intelligence</option>
        </select>
        <select v-model="selectedBgStat2">
            <option>Accuracy</option>
            <option>Perception</option>
            <option>Strength</option>
            <option>Dexterity</option>
            <option>Charisma</option>
            <option>Intelligence</option>
        </select>
    </div>
    <div class="bg-row">
        <h4>Skills:</h4>
        <ul>
            <li v-for="n in [1, 2, 3, 4, 5, 6]">Any Skill</li>
        </ul>
    </div>

    <h4>Equipment:</h4>
    <p>{{ selectedBg.equipment.join(", ") }}</p>

    <h4>Power:</h4>
    <p>{{ selectedBg.suggestedPower }}</p>
</template>

<script setup>
import { computed } from 'vue';
import CardContainer from './CardContainer.vue';
import BackgroundContent from './BackgroundContent.vue';
import backgrounds from '../../../assets/pedd/pedd-backgrounds.json'

const customBackground = {
    name: "Custom",
    desc: "It is up to you to say where you came from, what profession or way of life it was that you kept to before you took on the mantle of your adventuring role.",
    stats: [
        "Any",
        "Any"
    ],
    skills: [
        "Any",
        "Any",
        "Any",
        "Any",
        "Any",
        "Any"
    ],
    equipment: [
        "a set of tools (one of your choice)",
        "3 miscellaneous items worth less than 1gp each",
        "a set of common clothes",
        "a trinket (one of your choice that has meaning to your background)",
        "a pouch containing 3 + 2d6 gp"
    ],
    suggestedPower: "Any"
};

const props = defineProps(['background']);
const emits = defineEmits(['backgroundChosen'])

const selectedBg = computed(() => {
    return props.background == '' ? customBackground : backgrounds.filter(b => b.name == props.background)[0];
});

const selectedBgStat1 = defineModel("selectedBgStat1");
const selectedBgStat2 = defineModel("selectedBgStat2");

let chooseBackground = chosenBg => {
    if (props.background == chosenBg) {
        //clicked on open card, set chosen to false and thereby reveal all cards
        emits('backgroundChosen', false);
    } else {
        //set chosen bg
        emits('backgroundChosen', chosenBg);
    }
};




</script>

<style lang="css" scoped>

h4 {
    font-weight: bold;
    width: fit-content;
}
ul {
    display: flex;
    flex-wrap: wrap;
}

ul li {
    width: fit-content;
    padding: 0px 0.5rem;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

.bg-row {
    display: flex;
    gap: 1rem;
}
</style>