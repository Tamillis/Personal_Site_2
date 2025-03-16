<template>
    <div class="mb-gap flex">
        <label for="skills">Skills</label>
        <p id="skills-display"></p>
        <div class="flex">
            <select>
                <option>Proficiency</option>
                <option>Upgrade</option>
                <option>Expertise</option>
            </select>
            <select>
                <option>Single</option>
                <option>Selection of</option>
            </select>
            <select>
                <option v-for="skill in skills" :value="skill.skill">{{ skill.skill (skill.stat) }}</option>
            </select>
            <button class="btn">+</button>
        </div>
    </div>
</template>

<script setup>
import skillsData from '/src/assets/pedd/pedd-skills.json';
import { ref } from 'vue';

let skills = ref(
    skillsData.basicSkills.concat(skillsData.knowledgeSkills.concat(skillsData.martialSkills))
);

console.log(skills.value);

</script>

<style lang="css" scoped></style>