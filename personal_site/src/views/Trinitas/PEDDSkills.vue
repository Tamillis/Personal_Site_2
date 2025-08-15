<template>
    <PeddPage md="pedd-skills" subtitle="Skills">

        <section id="skill-viewer">
            
            <div class="no-indent">
                <div class="flex gap">
                    <select id="skill-selector" class="skill-selector" v-model="category">
                        <option>All</option>
                        <option>Basic</option>
                        <option>Knowledge</option>
                        <option>Weapon</option>
                    </select>
                    <label for="skill-selector" class="skill-selector-label">Skills</label>
                </div>
                
                <div class="flex gap">
                    <label for="by-stat" class="skill-selector-label">For stat: </label>
                    <select id="by-stat" class="skill-selector" v-model="stat">
                        <option>All</option>
                        <option>Accuracy</option>
                        <option>Perception</option>
                        <option>Strength</option>
                        <option>Dexterity</option>
                        <option>Charisma</option>
                        <option>Intelligence</option>
                    </select>
                </div>
            </div>

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
import { ref, computed } from 'vue';
import skillsData from '../../assets/pedd/pedd-skills.json';
import PeddPage from './PeddPage.vue';

let category = ref("All");
let stat = ref("All");
let skills = computed(() => {
    let arr = [];
    if (category.value == "All") {
        arr = filterByStat(skillsData.basicSkills);
        arr = arr.concat(filterByStat(skillsData.knowledgeSkills));
        arr = arr.concat(filterByStat(skillsData.martialSkills));
    }
    else if (category.value == "Basic") {
        arr = arr.concat(filterByStat(skillsData.basicSkills));
    }
    else if (category.value == "Knowledge") {
        arr = arr.concat(filterByStat(skillsData.knowledgeSkills));
    }
    else if (category.value == "Weapon") {
        arr = arr.concat(filterByStat(skillsData.martialSkills));
    }
    return arr;
});

function filterByStat(arr) {
    return arr.filter(s => s.stat == stat.value || stat.value == "All")
}
</script>

<style>
#by-category {
    font-size: var(--subsubtitle-size);
    text-decoration: underline;
    margin-top: 1rem;
    text-indent: 0;
}

.proficiencies-list ul {
    margin-top: 0.5rem;
    margin-left: 0;
    padding: 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
}

@media only screen and (min-width: 600px) {
    .proficiencies-list ul {
    grid-template-columns: 1fr 1fr 1fr;
}
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

.no-indent {
    text-indent: 0px !important;
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
    display: inline;
    padding: 4px 2px;
}
</style>