<template>
    <div style="width:250px">
        <div v-if="props.limit > chosenSkills.length" class="flex border-bottom mb-1r pb-1r">
            <select v-model="selectedSkill">
                <option v-for="skill in unchosenSkills" :value="skill">{{skill}}</option>
            </select>
            <button class="square btn" @click="addSkill">+</button>
        </div>
        <div v-for="skill in chosenSkills" class="flex">
            <p>{{ skill }}</p>
            <button class="square btn" @click="removeSkill(skill)">-</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import skillsData from "../../assets/pedd/pedd-skills.json";

const props = defineProps(["roleSkills", "otherSkills", "limit"]);
const emits = defineEmits(["skills"]);

let roleSkills = ref(
    skillsData.basicSkills.map(s => s.skill).concat(skillsData.knowledgeSkills.map(s => s.skill).concat(skillsData.martialSkills.map(s => s.skill)))
);
roleSkills.value.sort((s1, s2) => s1.localeCompare(s2));
let chosenSkills = ref(props.roleSkills ? props.roleSkills : []);
let unchosenSkills = ref(roleSkills.value.filter(s => !chosenSkills.value.includes(s) && !props.otherSkills.includes(s)));
let selectedSkill = ref(unchosenSkills.value[0]);

function addSkill() {
    chosenSkills.value.push(selectedSkill.value);
    unchosenSkills.value = unchosenSkills.value.filter(s => s != selectedSkill.value);
    selectedSkill.value = unchosenSkills.value[0];

    emits('skills', chosenSkills.value);
}

function removeSkill(skill) {
    chosenSkills.value = chosenSkills.value.filter(s => s != skill);
    unchosenSkills.value.push(skill);
    unchosenSkills.value = unchosenSkills.value.sort((s1,s2) => s1.localeCompare(s2));
    selectedSkill.value = unchosenSkills.value[0];

    emits('skills', chosenSkills.value);
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