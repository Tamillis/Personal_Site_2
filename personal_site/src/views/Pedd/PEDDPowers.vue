<template>
    <PeddPage md="pedd-powers" subtitle="Powers">
        <PowersList />
    </PeddPage>
</template>

<script setup>
import { onUnmounted } from 'vue';
import PowersList from '../../components/PEDD/PowersList.vue';
import PeddPage from './PeddPage.vue';

window.addEventListener("MarkedDone", peddPowersEvents);

onUnmounted(() => window.removeEventListener("MarkedDone", peddPowersEvents));

function peddPowersEvents() {
    document.getElementById("toggle-tags").addEventListener("click", () => {
        document.getElementById("tags-section").classList.toggle("hidden");
    });
}

</script>

<style>

</style>