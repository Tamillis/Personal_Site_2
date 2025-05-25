<template>
    <PeddPage md="pedd-powers" subtitle="Powers">

        <hr />

        <a @click.prevent="togglePowers = !togglePowers">{{ togglePowers ? "Hide" : "Show" }} Powers List</a>

        <PowersList v-if="togglePowers" />

        <hr />

        <div id="pedd-dev"></div>
    </PeddPage>
</template>

<script setup>
import PowersList from '../../components/PEDD/PowersList.vue';
import PeddPage from './PeddPage.vue';

import { ref, onMounted, onUnmounted } from 'vue';
import { putMdinElement } from '/src/assets/functionality';

onMounted(() => putMdinElement(`/src/assets/pedd/pedd-powers-dev.md`, 'pedd-dev'));
const togglePowers = ref(false);
let eventsSet = false;
window.addEventListener("MarkedDone", peddPowersEvents);

onUnmounted(() => window.removeEventListener("MarkedDone", peddPowersEvents));

function peddPowersEvents() {
    if(eventsSet) return;
    eventsSet = true;

    for(let section of ["tags", "preqs"]) {
        console.log("toggle-" + section);
        document.getElementById("toggle-" + section).addEventListener("click", () => {
            document.getElementById(section + "-section").classList.toggle("hidden");
        });

    }
}

</script>

<style>
.cards .btn {
    display: none;
}
</style>