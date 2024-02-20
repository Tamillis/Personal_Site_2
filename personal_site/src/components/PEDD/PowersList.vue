<template>
    <div class="cards">
        <CardContainer v-for="(power, i) in powers" :name="power.name"
            :expanded="openedPowers.includes(power)"
            @chosen="togglePowerOpened(power)"
            :key="`rlpc-${i}-power`">
            <PowerContent :power="power" @highlight="(tag) => highlight(tag)" />
        </CardContainer>
    </div>
</template>

<script setup>
import powers from '../../assets/pedd/pedd-powers.json';
import PowerContent from './PowerContent.vue';
import CardContainer from './CardContainer.vue';
import { ref } from 'vue';

let openedPowers = ref([]);

function togglePowerOpened(power) {
    if(openedPowers.value.includes(power)) {
        //remove
        openedPowers.value = openedPowers.value.filter(p => p != power);
    } else {
        //add
        openedPowers.value.push(power);
    }
}

</script>

<style lang="css" scoped>
</style>