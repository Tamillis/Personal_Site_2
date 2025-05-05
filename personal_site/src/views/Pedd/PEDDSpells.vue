<template>
    <PeddPage md="pedd-spells" subtitle="Skills">

        <h3>Spells</h3>

        <div v-for="spell in spellsData" class="card">
            <h4>{{ spell.name }} ({{ valToMagnitude(spell.magnitude) }}) <em>{{ spell.school }}</em></h4>
            <p><strong>{{ spell.casting }} {{ spell.range }} {{ spell.components }} <span>{{ spell.concentration ? "(c)" : "" }}</span></strong></p>
            <p>Duration: {{ spell.duration }}</p>
            <p v-if="spell.hasOwnProperty('materials')">Materials: {{ spell.materials }}</p>
            <div v-html="marked.parse(spell.description)"></div>
        </div>
    </PeddPage>

    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import spellsData from '../../assets/pedd/pedd-spells.json';
import PeddPage from './PeddPage.vue';
import { marked}  from 'marked';

onMounted(() => {
    //do post-md-load stuff
});

function valToMagnitude(val) {
    switch(val) {
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

<style lang="css">

</style>