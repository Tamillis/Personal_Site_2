<template>
    <BasePage md="pedd-character-creation" subtitle="Character Creation" />
</template>

<script setup>
import { onUnmounted } from 'vue';
import BasePage from './Components/BasePage.vue';

window.addEventListener("MarkedDone", peddCharacterCreationEvents)

onUnmounted(() => window.removeEventListener("MarkedDone", peddCharacterCreationEvents));

function peddCharacterCreationEvents() {
    let sections = ["tertiary"];

    for (let sectionId of sections) {
        let section = document.getElementById("toggle-" + sectionId);
        section.addEventListener("click", () => {
            document.getElementById(sectionId + "-section").classList.toggle("hidden");
        });
    }
}
</script>

<style></style>