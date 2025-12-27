<template>
    <div class="flex gap">
        <button class="btn" style="width: 2rem; height: 2rem" @click="incrementChosenBg(-1)">&larr;</button>
        <div class="flex-grow flex gap flex-wrap m-0">
            <p v-for="bg in backgrounds.sort((a, b) => a.name.localeCompare(b.name))" 
                class="w-fit pointer no-indent"
                :class="{ bold: bg.name == selectedBg }" 
                @click="selectedBg = bg.name">
                {{ bg.name }}
            </p>
        </div>
        <button class="btn" style="width: 2rem; height: 2rem" @click="incrementChosenBg(1)">&rarr;</button>
    </div>

    <hr/>

    <h2>{{ background.name }}</h2>

    <div v-html="marked.parse(background.desc ?? '')"></div>

    <div class="flex gap">
        <h4>Stats: </h4>
        <ul>
            <li v-for="stat in background.stats">{{ stat }}</li>
        </ul>
    </div>
    <div class="flex gap">
        <h4>Skills:</h4>
        <ul>
            <li v-for="skill in background.skills">{{ skill }}</li>
        </ul>
    </div>

    <div class="flex gap">
        <h4>Equipment:</h4>
        <ul>
            <li v-for="tool in background.equipment">{{ tool }}</li>
        </ul>
    </div>

    <div class="flex gap">
        <h4>Suggested Power:</h4>
        <p>{{ background.suggestedPower }}</p>
    </div>
</template>

<script setup>
import { marked } from 'marked';
import { computed } from 'vue';
import backgrounds from '../../../assets/pedd/pedd-backgrounds.json'

const selectedBg = defineModel('selectedBg');

const background = computed(() => {
    let chosenBg = backgrounds.filter(b => b.name == selectedBg.value)[0];
    return chosenBg;
});

function incrementChosenBg(val) {
    let bgNames = backgrounds.map(r => r.name);
    let currentIndex = bgNames.indexOf(selectedBg.value);
    currentIndex += val;
    if (currentIndex == bgNames.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = bgNames.length - 1;

    selectedBg.value = bgNames[currentIndex];
}

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
</style>