<template>
    <div>
        <div class="power-top-bar">
            <h2 class="power-name order-1">{{ power.name }}</h2>
            <div class="flex-grow" v-if="!hidden"></div>
            <button class="btn mt-gap mr-gap order-3" @click="hidden = !hidden">{{hidden ? "Show" : "Hide"}}</button>
            <button class="btn mt-gap mr-gap order-3" @click="$emit('editPower', power)">Edit</button>
            <div class="power-summary" v-if="hidden">
                <p class="text-sm m0" style="margin-top:2px">{{ power.tag.join(", ") }}</p>
                <p class="text-sm m0">{{ power.preq.join(", ") }}</p>
            </div>
        </div>
        <section class="power-body" v-if="!hidden">
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
h2 {
    font-size: 1.5em;
}

.power-top-bar {
    display: flex;
    flex-wrap: wrap;
}
.power-name {
    min-width: 9em;
}

    .power-summary {
        order: 4;
        flex-grow: unset;
    }

    .order-1 {
        order: 1;
    }

    .order-3 {
        order: 3;
    }

@media only screen and (min-width: 500px){
.power-top-bar {
    flex-wrap: none;
}
    .power-name {
        width: 5em;
    }

    .power-summary {
        width: 30%;
        order: 2;
        flex-grow: 2;
    }
}
</style>