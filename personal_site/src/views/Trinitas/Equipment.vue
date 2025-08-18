<template>
    <BasePage md="pedd-equipment" subtitle="Equipment">
        <div>
            <h3 id="equipment-collections" class="cinzel">Equipment Collections</h3>
            <div v-for="ec in peddEquipment.sort((e1,e2) => e1.name.localeCompare(e2.name))">
                <p><strong>{{ ec.name }}</strong> - {{ ec.equipment }}</p>
            </div>
        </div>
    </BasePage>
</template>

<script setup>
import BasePage from './Components/BasePage.vue';
import peddEquipment from '../../assets/pedd/pedd-equipment-collections.json'
import { onUnmounted } from 'vue';

//window.addEventListener("MarkedDone", peddEquipmentEvents);

//onUnmounted(() => window.removeEventListener("MarkedDone", peddEquipmentEvents));

</script>

<style lang="css" scoped>
h3 {
    font-size: var(--subsubtitle-size);
    text-decoration: underline;
}
</style>