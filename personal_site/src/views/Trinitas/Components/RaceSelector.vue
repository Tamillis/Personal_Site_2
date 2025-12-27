<template>
    <div>
        <div class="flex gap">
            <button class="btn" style="width: 2rem; height: 2rem" @click="incrementChosenRace(-1)">&larr;</button>
            <div class="flex-grow flex gap">
                <h4 v-for="race in raceData" class="w-fit pointer" :class="{bold: race.name == selectedRace.name}" @click="$emit('race', race.name)">{{ race.name }}</h4>
            </div>
            <button class="btn" style="width: 2rem; height: 2rem" @click="incrementChosenRace(1)">&rarr;</button>
        </div>

        <hr/>

		<h2>{{ selectedRace.name }}</h2>

		<div v-html="marked.parse(selectedRace.desc ?? '')"></div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { marked } from "marked";

import raceData from '../../../assets/pedd/pedd-races.json';

const emits = defineEmits(["race"]);
const props = defineProps(["chosenRaceName"])
const selectedRace = computed(() => raceData.filter(r => r.name == (props.chosenRaceName))[0]);

function incrementChosenRace(val) {
    let raceNames = raceData.map(r => r.name);
    let currentIndex = raceNames.indexOf(props.chosenRaceName);
    currentIndex += val;
    if(currentIndex == raceNames.length) currentIndex = 0;
    if(currentIndex < 0) currentIndex = raceNames.length - 1;

    emits('race', raceNames[currentIndex]);
}

</script>

<style lang="css" scoped></style>