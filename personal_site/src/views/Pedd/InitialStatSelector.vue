<template>
    <div>
        <h2>Initial Stat Selection: </h2>
        <div class="flex">
            <div class="flex selection">
                <select class="" :value="majorIncrease" @change="(event) => majorIncreaseChange(event.target.value)">
                    <option v-for="stat in stats" :value="stat">{{ capitalize(stat) }}</option>
                </select>
                <label>+2</label>
            </div>
            <div class="flex selection">
                <select class="" :value="minorIncrease" @change="(event) => minorIncreaseChange(event.target.value)">
                    <option v-for="stat in stats" :value="stat">{{ capitalize(stat) }}</option>
                </select>
                <label>+1</label>
            </div>
            <div class="flex selection">
                <select class="" :value="minorDecrease" @change="(event) => minorDecreaseChange(event.target.value)">
                    <option v-for="stat in stats" :value="stat">{{ capitalize(stat) }}</option>
                </select>
                <label>-1</label>
            </div>
            <div class="flex selection">
                <select class="" :value="majorDecrease" @change="(event) => majorDecreaseChange(event.target.value)">
                    <option v-for="stat in stats" :value="stat">{{ capitalize(stat) }}</option>
                </select>
                <label>-2</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { capitalize } from '../../assets/functionality';

let majorIncrease = ref("strength");
let minorIncrease = ref("dexterity");
let minorDecrease = ref("intelligence");
let majorDecrease = ref("charisma");

const props = defineProps(["stats"]);
const emits = defineEmits(["initialStatChange"]);

let majorIncreaseChange = (val) => {
    //swap around if selecting what is already selected elsewhere
    if (majorDecrease.value == val) {
        majorDecrease.value = majorIncrease.value;
    }
    else if (minorIncrease.value == val) {
        minorIncrease.value = majorIncrease.value;
    }
    else if (minorDecrease.value == val) {
        minorDecrease.value = majorIncrease.value;
    }
    majorIncrease.value = val;
    emits("initialStatChange", [majorIncrease.value, minorIncrease.value, minorDecrease.value, majorDecrease.value]);
};

let minorIncreaseChange = (val) => {
    //swap around if selecting what is already selected elsewhere
    if (majorIncrease.value == val) {
        majorIncrease.value = minorIncrease.value;
    }
    else if (majorDecrease.value == val) {
        majorDecrease.value = minorIncrease.value;
    }
    else if (minorDecrease.value == val) {
        minorDecrease.value = minorIncrease.value;
    }
    minorIncrease.value = val;
    emits("initialStatChange", [majorIncrease.value, minorIncrease.value, minorDecrease.value, majorDecrease.value]);
};

let minorDecreaseChange = (val) => {
    //swap around if selecting what is already selected elsewhere
    if (majorIncrease.value == val) {
        majorIncrease.value = minorDecrease.value;
    }
    else if (minorIncrease.value == val) {
        minorIncrease.value = minorDecrease.value;
    }
    else if (majorDecrease.value == val) {
        majorDecrease.value = minorDecrease.value;
    }
    minorDecrease.value = val;
    emits("initialStatChange", [majorIncrease.value, minorIncrease.value, minorDecrease.value, majorDecrease.value]);
};

let majorDecreaseChange = (val) => {
    //swap around if selecting what is already selected elsewhere
    if (majorIncrease.value == val) {
        majorIncrease.value = majorDecrease.value;
    }
    else if (minorIncrease.value == val) {
        minorIncrease.value = majorDecrease.value;
    }
    else if (minorDecrease.value == val) {
        minorDecrease.value = majorDecrease.value;
    }
    majorDecrease.value = val;
    emits("initialStatChange", [majorIncrease.value, minorIncrease.value, minorDecrease.value, majorDecrease.value]);
};
</script>

<style lang="css" scoped>
label,
h2 {
    font-weight: bold;
    font-size: larger;
    display: block;
    text-indent: 0px;
}

select {
    appearance: none;
    display: inline;
    outline: none;
    border: none;
    text-align: center;
    color: var(--text-color);
    background-color: var(--background);
    padding: 0px 0.5rem;
}

.selection {
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 2px groove var(--highlight);
}

.selection:last-child {
    border-right: none;
}
</style>