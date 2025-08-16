<template>
    <BasePage md="pedd-powers" subtitle="Powers">
        <hr />

        <a @click.prevent="togglePowers = !togglePowers" class="link">
            <h2>Powers List <span v-if="togglePowers">△</span><span v-else>▽</span></h2>
        </a>

        <PowersList v-if="togglePowers" />
    </BasePage>
</template>

<script setup>
import PowersList from './Components/PowersList.vue';
import BasePage from './Components/BasePage.vue';

import { ref, onUnmounted } from 'vue';

const togglePowers = ref(false);
let eventsSet = false;
window.addEventListener("MarkedDone", peddPowersEvents);

onUnmounted(() => window.removeEventListener("MarkedDone", peddPowersEvents));

function peddPowersEvents() {
    if (eventsSet) return;
    eventsSet = true;

    for (let section of ["tags", "preqs"]) {
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