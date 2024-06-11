<template>
    <div style="width:250px">
        <div class="flex">
            <select v-model="selectedSkill">
                <option v-for="skill in unchosenSkills" :value="skill">{{skill}}</option>
            </select>
            <button class="square btn" v-if="props.limit > chosenSkills.length" @click="addSkill">+</button>
        </div>
        <div v-for="skill in chosenSkills" class="flex">
            <p>{{ skill }}</p>
            <button class="square btn" @click="removeSkill(skill)">-</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["skills", "limit"]);
const emits = defineEmits(["chosen"]);

let chosenSkills = ref([]);
let unchosenSkills = ref(props.skills)
let selectedSkill = ref(props.skills[0]);


function addSkill() {
    chosenSkills.value.push(selectedSkill.value);
    unchosenSkills.value = unchosenSkills.value.filter(s => s != selectedSkill.value);
    selectedSkill.value = unchosenSkills.value[0];
}

function removeSkill(skill) {
    chosenSkills.value = chosenSkills.value.filter(s => s != skill);
    unchosenSkills.value.push(skill);
}
</script>

<style lang="css" scoped>
.square {
    box-sizing: border-box;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
}
.flex {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}
select {
    font-size:1em;
    padding: 4px 0;
}
</style>