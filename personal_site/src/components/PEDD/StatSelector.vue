<template>
    <div>
        <h2 v-if="title">{{ title }} </h2>
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
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { capitalize } from '../../assets/functionality';

let majorIncrease = ref("accuracy");
let minorIncrease = ref("perception");

const props = defineProps(["stats", "title"]);
const emits = defineEmits(["statChange"]);

let majorIncreaseChange = (val) => {
    //swap around if selecting what is already selected elsewhere
    if (minorIncrease.value == val) {
        minorIncrease.value = majorIncrease.value;
    }
    majorIncrease.value = val;
    emits("statChange", [majorIncrease.value, minorIncrease.value]);
};

let minorIncreaseChange = (val) => {
    //swap around if selecting what is already selected elsewhere
    if (majorIncrease.value == val) {
        majorIncrease.value = minorIncrease.value;
    }

    minorIncrease.value = val;
    emits("statChange", [majorIncrease.value, minorIncrease.value]);
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