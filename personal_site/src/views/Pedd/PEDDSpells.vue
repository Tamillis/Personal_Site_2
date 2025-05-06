<template>
    <PeddPage md="pedd-spells" subtitle="Spells">
        <h2>Spells</h2>

        <div class="flex gap align-center filter-borders">
            <h3>Filter:</h3>
            <div class="flex align-center">
                <label>By School</label>
                <input type="checkbox" class="q checkBoxQ" v-model="filter.useSchools">
            </div>

            <div class="flex align-center">
                <label>By Term</label>
                <input type="checkbox" class="q checkBoxQ" v-model="filter.useTerms">
            </div>
        </div>

        <div class="flex gap" v-if="filter.useSchools">
            <label>Schools: </label>
            <select class="tag-select" v-model="spellSchool">
                <option v-for="school in spellSchools">{{ school }}</option>
            </select>
        </div>

        <div class="flex gap" v-if="filter.useTerms">
            <label>Terms: </label>
            <input v-model="spellSearch" class="q" />
        </div>

        <section v-for="n in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]">
            <hr />
            <h3>{{ n == 0 ? "" : "Magnitude" }} {{ valToMagnitude(n) }}</h3>
            <CardContainer v-for="(spell, i) in byMagnitude(n)" :name="spell.name"
                :expanded="openedSpells.includes(spell.name)" @chosen="toggleSpellOpened(spell.name)"
                :key="`card-${i}-spell`">
                <div>
                    <div>
                        <h4>{{ spell.name }}</h4>
                        <span>&nbsp;<em>{{ spell.school }}</em></span>
                    </div>
                    <p><strong>{{ spell.casting }} {{ spell.range }} {{ spell.components }} <span>{{ spell.concentration
                        ? "(c)" : "" }}</span></strong></p>
                    <p>Duration: {{ spell.duration }}</p>
                    <p v-if="spell.hasOwnProperty('materials')">Materials: {{ spell.materials }}</p>
                    <div v-html="marked.parse(spell.description)"></div>
                </div>
            </CardContainer>
        </section>
    </PeddPage>


</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import spellsData from '../../assets/pedd/pedd-spells.json';
import PeddPage from './PeddPage.vue';
import CardContainer from '../../components/PEDD/CardContainer.vue';
import { marked } from 'marked';

onMounted(() => {
    //do post-md-load stuff
});

const spellSchools = [... new Set(spellsData.map(s => s.school))].sort();

const spellSchool = ref("Abjuration");
const filter = ref({
    useSchools: false,
    useTerms: false,
    //usePreqs: false
});
const openedSpells = ref([]);
const filteredSpells = computed(() => {
    let spells = [...spellsData];
    if(filter.value.useSchools) spells = spells.filter(s => s.school == spellSchool.value);
    if(filter.value.useTerms) spells = spells.filter(s => spellSearch.value == "" || s.name.toLowerCase().includes(spellSearch.value.toLowerCase()));
    return spells;
});
const spellSearch = ref("");

function byMagnitude(mag) {
    return filteredSpells.value.filter(s => s.magnitude == mag);
}

function toggleSpellOpened(spellName) {
    if (openedSpells.value.filter(s => s == spellName).length == 0) openedSpells.value.push(spellName);
    else openedSpells.value = openedSpells.value.filter(s => s != spellName);
}

function valToMagnitude(val) {
    switch (val) {
        case 0: return "Cantrip";
        case 1: return "I";
        case 2: return "II";
        case 3: return "III";
        case 4: return "IV";
        case 5: return "V";
        case 6: return "VI";
        case 7: return "VII";
        case 8: return "VIII";
        case 9: return "IX";
    }
}
</script>

<style lang="css" scoped>
h2 {
    font-size: 2em;
}

h3 {
    text-decoration: underline;
    font-size: 1.5em;
}

h4 {
    font-weight: bolder;
    display: inline;
    font-size: 1.5em;
}

.tag-select {
    border: none;
    border-radius: 0px;

    margin-bottom: var(--gap);
    padding: 4px 2px;

    width: fit-content;

    font-size: var(--para-size);
}
</style>