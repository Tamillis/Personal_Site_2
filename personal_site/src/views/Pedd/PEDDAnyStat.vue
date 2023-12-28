<template>
    <select class="intext-link" :selected="selected" @change="(event) => setStat(event)">
        <option selected disabled>Any {{ val < 0 ? val : "+" + val }}</option>
        <option value="Strength">Strength {{ val < 0 ? val : "+" + val }}</option>
        <option value="Dexterity">Dexterity {{ val < 0 ? val : "+" + val }}</option>
        <option value="Accuracy">Accuracy {{ val < 0 ? val : "+" + val }}</option>
        <option value="Perception">Perception {{ val < 0 ? val : "+" + val }}</option>
        <option value="Intelligence">Intelligence {{ val < 0 ? val : "+" + val }}</option>
        <option value="Charisma">Charisma {{ val < 0 ? val : "+" + val }}</option>
    </select>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ val: Number });
const emit = defineEmits(['statChosen']);
let selected = ref("Any");
let priorStat = "";

let setStat = (e) => {
    priorStat = selected.value;
    selected.value = e.target.value;
    emit("statChosen", selected.value, priorStat, props.val);
};

</script>

<style lang="css" scoped>
select {
    background-color: #0000;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
}
option {
    background-color: #0000;
    color: black;
}
</style>