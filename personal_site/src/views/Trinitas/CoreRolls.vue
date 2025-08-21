<template>
    <BasePage md="pedd-skills" subtitle="Core Rolls & Statistics" />
</template>

<script setup>
import BasePage from './Components/BasePage.vue';
import { onUnmounted } from 'vue';

window.addEventListener("MarkedDone", toggleTertiary)

onUnmounted(() => window.removeEventListener("MarkedDone", toggleTertiary));

function toggleTertiary() {

    let section = document.getElementById("toggle-tertiary");
    section.addEventListener("click", () => {
        document.getElementById("tertiary-section").classList.toggle("hidden");
    });

}
</script>

<style></style>