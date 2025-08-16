<template>
    <BasePage subtitle="Skills">

        <section id="skill-viewer">
            <div class="no-indent">
                <div class="flex gap">
                    <label for="by-stat" class="q-label">Show default stats: </label>
                    <input id="by-stat" class="checkBoxQ" style="padding:0.5rem" type="checkbox" v-model="useStat">
                </div>
            </div>

            <div class="proficiencies-list">
                <ul v-if="!useStat">
                    <li v-for="skill in skills">{{ skill.skill }}</li>
                </ul>

                <div v-else>
                    <div v-for="stat in ['Accuracy', 'Perception', 'Strength', 'Dexterity', 'Intelligence', 'Charisma']">
                        <h3>{{ stat }}</h3>
                        <ul>
                            <li v-for="skill in skills.filter(s => s.stat == stat)">{{ skill.skill }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </BasePage>
</template>

<script setup>
import { ref } from 'vue';
import skillsData from '../../assets/pedd/pedd-skills.json';
import BasePage from './Components/BasePage.vue';

let useStat = ref(false);
let skills = [...skillsData.basicSkills, ...skillsData.knowledgeSkills, ...skillsData.martialSkills].sort((s1,s2) => s1.skill.localeCompare(s2.skill));

</script>

<style>
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

@media only screen and (min-width: 1000px) {
    .proficiencies-list ul {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

.proficiencies-list li {
    list-style: none;
    border-left: 2px groove var(--highlight);
    border-right: 2px groove var(--highlight);
    padding: 0px 1rem;
}
.no-indent {
    text-indent: 0px !important;
}

.proficiencies-list h3 {
    text-decoration: underline;
    font-size: var(--subsubtitle-size);
    color: var(--highlight)
}
</style>