<template>
    <BasePage>
        <CharacterDisplay :player="player" />
    </BasePage>
</template>

<script setup>
import BasePage from './Components/BasePage.vue';
import CharacterDisplay from './Components/CharacterDisplay.vue';
import Character from '../../assets/pedd/character.js'

import { ref } from 'vue';

function getCharacterFromUrl(url) {
    let c = new URLSearchParams(new URL(url).search).get("c");
    return c ? Object.assign(new Character(), JSON.parse(jsoncrush.uncrush(c))) : new Character();
}

const player = ref(getCharacterFromUrl(window.location.href));

</script>

<style lang="scss" scoped>

</style>