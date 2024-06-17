<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title">P.E.D.D.</h1>
        <h2 class="subsubtitle text-centre no-decoration">Skills</h2>
        <Links />
        <div class="main-text inset">
            <div id="pedd"></div>

            <section id="skill-viewer">
                <h3> 
                    <select id="by-category" v-model="category" @change="updateByCategory">
                        <option>All</option>
                        <option>Basic</option>
                        <option>Knowledge</option>
                        <option>Martial</option>
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
        </div>
    </section>
</template>

<script setup>
import { putMdinElement } from '../../assets/functionality';
import { onMounted, ref } from 'vue';
import Links from '../../components/PEDD/Links.vue';
import skillsData from '../../assets/pedd/pedd-skills.json'

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
    else if (category.value == "Martial") {
        skills.value = skills.value.concat(skillsData.martialSkills.filter(s => s.stat == stat.value || stat.value == "All"));
    }
}

onMounted(() => {
    putMdinElement('../src/assets/pedd/pedd-skills.md', 'pedd');
    document.getElementById("by-category").dispatchEvent(new Event("change"));
});

function updateByCategory(e){
   var selectedText = e.target.options[e.target.selectedIndex].text;

   e.target.style.width = 16 + (selectedText.length * 16) + "px";

   filterSkills();
}
</script>

<style>
#pedd a,
#pedd a:link,
#pedd a:visited {
    text-decoration: none;
    color: var(--text-color);
    font-style: normal;
    font-weight: bold;
    overflow-wrap: break-word;
}

#pedd a:hover {
    font-style: italic;
}

#pedd blockquote {
    margin-left: var(--textindent);
    background-color: rgba(0, 0, 0, 0.3);
    width: fit-content;
    padding-right: 1.5rem;
    border-top: 2px solid var(--highlight);
    border-bottom: 2px solid var(--highlight);
}

#pedd p {
    line-height: 1.2rem;
    margin-bottom: 0.33rem;
}

#pedd h1 {
    text-align: center;
    font-size: var(--main-title-size);
}

#pedd h2 {
    font-size: var(--subtitle-size);
}

#pedd h3,
#skill-viewer h3, #by-category {
    font-size: var(--subsubtitle-size);
    text-decoration: underline;
    margin-top: 1rem;
    margin-bottom: -0.33rem;
}

#pedd h4 {
    font-size: var(--para-size);
    font-weight: 700;
    margin-top: 0.75rem;
    margin-bottom: -0.33rem;
}

#pedd em {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3rem;
}

#pedd strong {
    font-weight: 700;
}

#pedd table {
    margin: 0.5rem auto;
}

.proficiencies-list ul {
    margin-top: 0.5rem;
    margin-left:0;
    padding:0;
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