<template>
    <select class="intext-link" v-model="selected" @change="$emit('statChosen', selected, val)">
        <option value="Any" disabled>Any {{ val < 0 ? val : "+" + val }}</option>
        <option value="accuracy">Accuracy {{ val < 0 ? val : "+" + val }}</option>
        <option value="perception">Perception {{ val < 0 ? val : "+" + val }}</option>
        <option value="strength">Strength {{ val < 0 ? val : "+" + val }}</option>
        <option value="dexterity">Dexterity {{ val < 0 ? val : "+" + val }}</option>
        <option value="charisma">Charisma {{ val < 0 ? val : "+" + val }}</option>
        <option value="intelligence">Intelligence {{ val < 0 ? val : "+" + val }}</option>
    </select>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps([ 'val', 'initialStat' ]);
const emit = defineEmits(['statChosen']);
let selected = ref(props.initialStat ?? "Any");

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

option:disabled {
    background-color: #1114
}
</style>