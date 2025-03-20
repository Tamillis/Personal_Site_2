<template>
    <div>
        <div class="flex gap">
            <h2 class="power-name">{{ power.name }}</h2>
            <div v-if="hidden">
                <p class="text-sm m0" style="margin-top:2px">{{ power.tag.join(", ") }}</p>
                <p class="text-sm m0">{{ power.preq.join(", ") }}</p>
            </div>
            <div class="flex-grow"></div>
            <button class="btn mt-gap mr-gap" @click="hidden = !hidden">{{hidden ? "Show" : "Hide"}}</button>
            <button class="btn mt-gap mr-gap" @click="$emit('editPower', power)">Edit</button>
        </div>
        <section v-if="!hidden">
            <div class="flex gap">
                <h3>Tags:</h3>
                <p>{{ power.tag.join(", ") }}</p>
            </div>
            <div class="flex gap">
                <h3>Prerequisites:</h3>
                <p>{{ power.preq.join(", ") }}</p>
            </div>
            <h3>Description:</h3>
            <div v-html="marked.parse(power.desc)"></div>
            <h3>Admin:</h3>
            <p class="text-wrap">{{ getAdminDisplay(power) }}</p>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { marked } from 'marked';

const props = defineProps(['power']);

const hidden = ref(true);

function getAdminDisplay(power) {
    let str = "";

    if (power.hasOwnProperty("repeatable")) {
        str += power.repeatable ? "Repeatable" : "Not repeatable";
    }
    else return "TODO";

    let skills = power.skills.map(s => Array.isArray(s) ? "[" + s.map(datum => datum.skill).join(", ") + "]" : s.skill);

    if (skills.length > 0) str = "Skills: " + skills.join(", ");

    let statChanges = [];
    for (let statChange in power.statChanges) if (power.statChanges[statChange] != 0) statChanges.push(`${statChange}: ${power.statChanges[statChange]}`);
    if (statChanges.length > 0) str += "\nStat Changes: " + statChanges.join(", ");

    let resChanges = [];
    for (let resChange in power.resistanceChanges) {
        if (power.resistanceChanges[resChange] != 0) resChanges.push(`${resChange}: ${power.resistanceChanges[resChange]}`);
    }
    if (resChanges.length > 0) str += "\nResistance Changes: " + resChanges.join(", ");

    let secondaryStatChanges = [];
    for (let secondaryStatChange in power.secondaryStatChanges) {
        if (power.secondaryStatChanges[secondaryStatChange] != 0) secondaryStatChanges.push(`${secondaryStatChange}: ${power.secondaryStatChanges[secondaryStatChange]}`);
    }
    if (secondaryStatChanges.length > 0) str += "\nSecondary Changes: " + secondaryStatChanges.join(", ");

    let statMaxes = [];
    for (let statMax in power.statMaxes) {
        if (power.statMaxes[statMax] != 5) statMaxes.push(`${statMax}: ${power.statMaxes[statMax]}`);
    }
    if (statMaxes.length > 0) str += "\nStat Max: " + statMaxes.join(", ");

    return str.trim();
}
</script>

<style lang="css" scoped>
.power-name {
    min-width: 9em;
}
</style>