<template>
    <PeddPage md="pedd-equipment" subtitle="Equipment"/>

    <div id="equipment-collection-template">
        <div v-for="ec in peddEquipment">
            
            <p><strong>{{ ec.name }}</strong> - {{ ec.equipment }}</p>
        </div>
    </div>
</template>

<script setup>
import PeddPage from './PeddPage.vue';
import peddEquipment from '../../assets/pedd/pedd-equipment-collections.json'
import { onUnmounted } from 'vue';

window.addEventListener("MarkedDone", peddEquipmentEvents);

onUnmounted(() => window.removeEventListener("MarkedDone", peddEquipmentEvents));

function peddEquipmentEvents() {
    console.log("test")
    //cut and paste dom
    let content = document.getElementById("equipment-collection-template").innerHTML;
    document.getElementById("pedd-equipment-collections").innerHTML = content;
    document.getElementById("equipment-collection-template").remove();
}

</script>

<style lang="css">

</style>