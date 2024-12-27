<template>
    <PeddPage md="pedd-skills" subtitle="Skills">

        <section id="skill-viewer">
            <h3>
                <select id="by-category" v-model="category" @change="updateByCategory">
                    <option>All</option>
                    <option>Basic</option>
                    <option>Knowledge</option>
                    <option>Weapon</option>
                </select>
                <span>Skills</span>
            </h3>

            <label for="by-stat" class="skill-selector-label">For stat: </label>
            <select id="by-stat" class="skill-selector" v-model="stat" @change="filterSkills">
                <option>All</option>
                <option>Accuracy</option>
                <option>Perception</option>
                <option>Strength</option>
                <option>Dexterity</option>
                <option>Charisma</option>
                <option>Intelligence</option>
            </select>
            <div class="proficiencies-list">
                <ul>
                    <li v-for="(skill, i) in skills" :key="`ms-${i}`">
                        {{ skill.skill }} ({{ skill.stat }})
                    </li>
                </ul>
            </div>
        </section>
    </PeddPage>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import skillsData from '../../assets/pedd/pedd-skills.json';
import PeddPage from './PeddPage.vue';

let skills = ref([]);
let category = ref("All");
let stat = ref("All");

filterSkills();

function filterSkills() {
    skills.value = [];
    if (category.value == "All") {
        skills.value = skills.value.concat(skillsData.basicSkills.filter(s => s.stat == stat.value || stat.value == "All"));
        skills.value = skills.value.concat(skillsData.knowledgeSkills.filter(s => s.stat == stat.value || stat.value == "All"));
        skills.value = skills.value.concat(skillsData.martialSkills.filter(s => s.stat == stat.value || stat.value == "All"));
    }
    else if (category.value == "Basic") {
        skills.value = skills.value.concat(skillsData.basicSkills.filter(s => s.stat == stat.value || stat.value == "All"));
    }
    else if (category.value == "Knowledge") {
        skills.value = skills.value.concat(skillsData.knowledgeSkills.filter(s => s.stat == stat.value || stat.value == "All"));
    }
    else if (category.value == "Weapon") {
        skills.value = skills.value.concat(skillsData.martialSkills.filter(s => s.stat == stat.value || stat.value == "All"));
    }
}

onMounted(() => {
    document.getElementById("by-category").dispatchEvent(new Event("change"));
});

function updateByCategory(e) {
    var selectedText = e.target.options[e.target.selectedIndex].text;

    e.target.style.width = 16 + (selectedText.length * 16) + "px";

    filterSkills();
}
</script>

<style>
#skill-viewer h3,
#by-category {
    font-size: var(--subsubtitle-size);
    text-decoration: underline;
    margin-top: 1rem;
    margin-bottom: -0.33rem;
}

.proficiencies-list ul {
    margin-top: 0.5rem;
    margin-left: 0;
    padding: 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
}

.proficiencies-list li {
    list-style: none;
    border-left: 2px groove var(--highlight);
    border-right: 2px groove var(--highlight);
    padding: 0px 1rem;
}

#by-category {
    background-color: #0000;
    appearance: revert;
    padding: 4px 0px;
    margin-right: 4px;
}

#by-category option {
    background-color: var(--background);
}

.skill-selector {
    border: none;
    border-radius: 0px;
    color: var(--text-color);
    text-align: right;

    padding: 2px 4px;
    margin: 2px 4px;

    width: fit-content;

    font-size: var(--para-size);
}

.skill-selector option {
    text-align: center;
}

.skill-selector-label {
    text-indent: 0px !important;
    display: inline;
    padding: 4px 2px;
}
</style>