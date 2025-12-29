<template>
    <BasePage>
        <h2>TODO:</h2>
        <ul>
            <li>Include area for power progression</li>
            <li>Include area for donnable armour</li>
            <li>Include area for weapon attacks and spell attacks (one day... lol)</li>
            <li>Include adjustable stats, resistances and so on</li>
        </ul>
        <CharacterDisplay :player="player" />
    </BasePage>
</template>

<script setup>
import BasePage from './Components/BasePage.vue';
import CharacterDisplay from './Components/CharacterDisplay.vue';
import Character from '../../assets/pedd/character.js'
import jsoncrush from "JSONCrush"
import { ref } from 'vue';

function getCharacterFromUrl(url) {
    let c = new URLSearchParams(new URL(url).search).get("c");
    console.log(c);
    let character = Object.assign(new Character(), JSON.parse(jsoncrush.uncrush(c)));
    return c ? character : new Character();
}

const player = ref(getCharacterFromUrl(window.location.href));

</script>

<style lang="scss" scoped>

</style>