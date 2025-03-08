<template>
    <PeddPage md="pedd-equipment" subtitle="Equipment">
        <div>
            <h3>Equipment Collections</h3>
            <div v-for="ec in peddEquipment">
                <p><strong>{{ ec.name }}</strong> - {{ ec.equipment }}</p>
            </div>
        </div>
    </PeddPage>
</template>

<script setup>
import PeddPage from './PeddPage.vue';
import peddEquipment from '../../assets/pedd/pedd-equipment-collections.json'
import { onUnmounted } from 'vue';

//window.addEventListener("MarkedDone", peddEquipmentEvents);

//onUnmounted(() => window.removeEventListener("MarkedDone", peddEquipmentEvents));

</script>

<style lang="css"></style>