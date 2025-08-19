<template>
    <h2>Race: {{ selectedRace }}</h2>
    <CardContainer v-for="race in races" 
        :name="race.name" 
        :chosen="selectedRace == race.name"
        :class="{ highlight: selectedRace == race.name }"
        @chosen="(chosenRaceName) => chooseRace(chosenRaceName)">
        <RaceContent 
            :race="race" @selected-stats="(stats) => $emit('raceStats', stats)"
            :chosenAnyStats="chosenAnyStats" />
    </CardContainer>
</template>

<script setup>
import { ref, computed } from 'vue';
import CardContainer from './CardContainer.vue';
import RaceContent from './RaceContent.vue';
import raceData from '../../../assets/pedd/pedd-races.json';

const races = computed(() => {
    console.log(props.chosenRace, selectedRace.value)
    return raceData.filter(r => !selectedRace.value || selectedRace.value == r.name)
})

const emits = defineEmits(["race", "raceStats"]);
const props = defineProps(["chosenRace", "chosenAnyStats"])
const selectedRace = ref(props.chosenRace);

function chooseRace(race) {
    if (selectedRace.value == race) {
        console.log("Unselecting race: " + race)
        selectedRace.value = "";
        emits('race', false);
    }
    else {
        console.log("selecting race: " + race)
        selectedRace.value = race;
        emits('race', race);
    }
}

</script>

<style lang="css" scoped></style>