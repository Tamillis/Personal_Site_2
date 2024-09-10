<template>
    <PeddPage md="pedd-combat" subtitle="Combat" />
</template>

<script setup>
import { onUnmounted } from 'vue';
import p5 from 'p5';
import sketch from '../../assets/pedd/pedd_movement_1';
import PeddPage from './PeddPage.vue';

window.addEventListener("MarkedDone", peddCombatEvents);

onUnmounted(() => window.removeEventListener("MarkedDone", peddCombatEvents));

function peddCombatEvents() {
    let sections = ['weapons', 'weapon-properties', 'armour', 'actions'];
    for (let section of sections) {
        document.getElementById("toggle-" + section).addEventListener("click", () => {
            document.getElementById(section + "-section").classList.toggle("hidden");
        });
    }

    new p5(sketch, "movement-1-canvas");
}

</script>

<style>

</style>