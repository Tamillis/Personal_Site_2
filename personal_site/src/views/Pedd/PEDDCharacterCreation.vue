<template>
    <PeddPage md="pedd-character-creation" subtitle="Character Creation" />
</template>
  
<script setup>
import { onUnmounted } from 'vue';
import PeddPage from './PeddPage.vue';

window.addEventListener("MarkedDone", peddCharacterCreationEvents);

onUnmounted(() => window.removeEventListener("MarkedDone", peddCharacterCreationEvents));

function peddCharacterCreationEvents() {
    let sections = ['pack-list', 'equipment-list', "tertiary"];
    for (let section of sections) {
        document.getElementById("toggle-" + section).addEventListener("click", () => {
            document.getElementById(section + "-section").classList.toggle("hidden");
        });
    }
}
</script>
  
<style>

</style>