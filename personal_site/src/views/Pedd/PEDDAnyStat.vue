<template>
    <select class="intext-link" v-if="showOptions" v-model="selected" @change="setStat()">
        <option default disabled>Any</option>
        <option>Strength</option>
        <option>Dexterity</option>
        <option>Accuracy</option>
        <option>Perception</option>
        <option>Intelligence</option>
        <option>Charisma</option>
    </select>
    <a v-else class="intext-link" @click="showOptions = true">{{ selected }} <span>{{ val >= 0 ? "+" + val : val }}</span></a>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ val: Number });
const emit = defineEmits(['statChosen']);
let showOptions = ref(false);
let selected = ref("Any");

let setStat = () => {
    showOptions.value = false;
    emit("statChosen", stat, props.val);
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