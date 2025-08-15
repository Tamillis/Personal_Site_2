<template class="page">
    <PeddPage subtitle="Spells">
        <h2>Spells</h2>

        <p>All spells officially ported from the 2024 SRD that are currently available to view, and soon in the
            character creator.</p>
        <p>If you wish to use other spells please consult with your GM to convert them as appropriate.</p>
        <p>Cantrips, Magnitude I and Magnitude II Spells are currently available</p>

        <div class="flex gap align-center filter-borders">
            <h3>Filter:</h3>
            <div class="flex align-center">
                <label>By Magnitude</label>
                <input type="checkbox" class="q checkBoxQ" v-model="filter.useMagnitudes">
            </div>

            <div class="flex align-center">
                <label>By Sphere</label>
                <input type="checkbox" class="q checkBoxQ" v-model="filter.useSpheres">
            </div>

            <div class="flex align-center">
                <label>By School</label>
                <input type="checkbox" class="q checkBoxQ" v-model="filter.useSchools">
            </div>

            <div class="flex align-center">
                <label>By Term</label>
                <input type="checkbox" class="q checkBoxQ" v-model="filter.useTerms">
            </div>

        </div>

        <p><strong>Showing:</strong> {{ filteredSpells.length }} / {{ spellsData.length }}</p>

        <div class="flex gap align-center filter-borders" style="margin-left:2rem">
            <div class="flex gap" v-if="filter.useMagnitudes">
                <label>Magnitude: </label>
                <select class="tag-select" v-model="magnitude">
                    <option v-for="n in 10" :value="n-1">{{ valToMagnitude(n - 1) }}</option>
                </select>
            </div>

            <div class="flex gap" v-if="filter.useSpheres">
                <label>Spheres: </label>
                <select class="tag-select" v-model="spellSphere">
                    <option>Arcane</option>
                    <option>Divine</option>
                    <option>Primal</option>
                    <option>Occult</option>
                </select>
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
        </div>

        <section v-if="filteredSpells.length > 0">
            <CardContainer v-for="(spell, i) in filteredSpells" :name="spell.name"
                :expanded="openedSpells.includes(spell.name)" @chosen="toggleSpellOpened(spell.name)"
                :key="`card-${i}-spell`">
                <div>
                    <div>
                        <h4>{{ spell.name }}</h4>
                        <span>&nbsp;<em>{{ spell.school }}</em></span>
                    </div>
                    <p><strong>{{ spell.casting }} {{ spell.range }} {{ spell.components }} <span>{{
                        spell.concentration
                            ? "(c)" : "" }}</span></strong></p>
                    <p>Duration: {{ spell.duration }}</p>
                    <p v-if="spell.materials != ''">Materials: {{ spell.materials }}</p>
                    <div v-html="marked.parse(spell.description)"></div>
                </div>
            </CardContainer>
        </section>
        <section v-else>
            <p>No spells found</p>
        </section>

    </PeddPage>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import spellsData from '../../assets/pedd/pedd-spells.json';
import PeddPage from './PeddPage.vue';
import CardContainer from './components/CardContainer.vue';
import { marked } from 'marked';

onMounted(() => {
    //do post-md-load stuff
});

const spellSchools = [... new Set(spellsData.map(s => s.school))].sort();

const magnitude = ref(0);
const spellSchool = ref("Abjuration");
const spellSphere = ref("Arcane");
const filter = ref({
    useSpheres: false,
    useSchools: false,
    useTerms: false,
    useMagnitudes: true
});

const openedSpells = ref([]);
const filteredSpells = computed(() => {
    let spells = [...spellsData];
    if (filter.value.useMagnitudes) spells = spells.filter(s => s.magnitude == magnitude.value)
    if (filter.value.useSpheres) {
        if (spellSphere.value == "Arcane") spells = spells.filter(s => s.arcane);
        else if (spellSphere.value == "Divine") spells = spells.filter(s => s.divine);
        else if (spellSphere.value == "Primal") spells = spells.filter(s => s.primal);
        else spells = spells.filter(s => s.occult);
    }
    if (filter.value.useSchools) spells = spells.filter(s => s.school == spellSchool.value);
    if (filter.value.useTerms) spells = spells.filter(s => spellSearch.value == "" || s.name.toLowerCase().includes(spellSearch.value.toLowerCase()));
    return spells.sort((s1, s2) => s1.name.localeCompare(s2.name));
});
const spellSearch = ref("");

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
    margin-bottom: 3px;
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

.header {
    display: flex;
    align-items: center;
    width: 30%
}

.header h3 {
    flex-grow: 2;
    width: fit-content;
}

.chevron {
    display: inline-block;
    transition: transform 0.33s ease-in-out;
    text-indent: 0;
}

.rotated {
    transform: rotate(180deg);
}
</style>