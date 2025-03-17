<template>
    <div>
        <div class="flex gap">
            <select v-model="rank">
                <option>Proficiency</option>
                <option>Expertise</option>
            </select>
            <select :value="choice" @change="selectChoice">
                <option>Single</option>
                <option>Selection of</option>
            </select>
            <select v-model="chosenSkill">
                <option v-for="skill in skills" :value="skill.skill">{{ skill.skill }} - {{ skill.category }} / {{
                    skill.stat }}</option>
            </select>
            <button type="button" class="btn" v-if="choice !== 'Single'" @click="addChoice">+</button>
            <p id="choices-display" v-if="choices.length > 0">Choices: {{choices.map(s => s.skill).join(", ")}}</p>
            <button type="button" class="btn" v-if="choices.length > 1" @click="choices.pop()">-</button>
            <button type="button" class="btn" @click="addSkill"
                v-if="choice == 'Single' || choices.length > 1">Add</button>
        </div>
        <div class="flex gap">
            <p id="skills-display" class="w-fit" v-if="chosenSkills.length > 0">
                {{chosenSkills.map(s => Array.isArray(s) ? "[" + s.map(datum => datum.skill).join(", ") + "]" : s.skill).join(", ")}}
            </p>
            <p v-else>(None)</p>
            <button type="button" class="btn" v-if="chosenSkills.length > 0" @click="chosenSkills.pop()">-</button>
        </div>
    </div>
</template>

<script setup>
import skillsData from '/src/assets/pedd/pedd-skills.json';
import { ref } from 'vue';

let allSkills = [
    ...skillsData.basicSkills.map(s => { return { ...s, category: "Core" } }),
    ...skillsData.knowledgeSkills.map(s => { return { ...s, category: "Knowledge" } }),
    ...skillsData.martialSkills.map(s => { return { ...s, category: "Martial" } })]
    .sort((a, b) => a.skill.localeCompare(b.skill));

let skills = ref(
    [{ skill: "Any", stat: "Any", category: "Any" },
    { skill: "Any Core", stat: "Any", category: "Core" },
    { skill: "Any Knowledge", stat: "Any", category: "Knowledge" },
    { skill: "Any Martial", stat: "Any", category: "Martial" },
    { skill: "Existing", stat: "Any", category: "Any" },
    ...allSkills]
);
let rank = ref("Proficiency");
let choice = ref("Single");
let choices = ref([]);
let chosenSkill = ref("Any");

let chosenSkills = defineModel({default:[]});

function isString(v) {
    return typeof v === 'string' || v instanceof String;
}

function getSkill() {
    return skills.value.filter(s => s.skill == chosenSkill.value)[0];
}

function pushSkill(arr, skill) {
    arr.push(skill);
    arr = arr.sort((a, b) => {

        if (isString(a.skill) && isString(b.skill)) return a.skill.localeCompare(b.skill);
        else if (Array.isArray(a) && Array.isArray(b)) return a.length - b.length;
        else if (Array.isArray(a)) return -1;
        else return 1;
    });
}

function addSkill() {
    if (choice.value == "Single") {
        pushSkill(chosenSkills.value, getSkill());
    } else {
        if (choices.value.length > 1) pushSkill(chosenSkills.value, choices.value);
        choices.value = [];
    }

    //emit('skillChosen', chosenSkills.value);
}

function addChoice() {
    pushSkill(choices.value, getSkill());
}

function selectChoice(e) {
    choice.value = e.target.value;
    choices.value = [];
}

</script>

<style lang="css" scoped>

</style>