<template>
    <h2>Powers List</h2>
    <select class="tag-select" v-model="roleTag">
        <option v-for="tag in tags">{{ tag }}</option>
    </select>
    <div class="cards">
        <CardContainer v-for="(power, i) in rolePowers" :name="power.name" :expanded="openedPowers.includes(power.name)"
            @chosen="togglePowerOpened(power)" :key="`rlpc-${i}-power`">
            <PowerContent :power="power" @highlight="(tag) => highlight(tag)" />
        </CardContainer>
    </div>
</template>

<script setup>
import powers from '../../assets/pedd/pedd-powers.json';
import PowerContent from './PowerContent.vue';
import CardContainer from './CardContainer.vue';
import { ref, computed } from 'vue';

let openedPowers = ref([]);
let tags = ["All"].concat(Array.from(new Set(powers.map(p => p.tag).flat())).sort()); //don't you just love javascript?
let roleTag = ref("All");

let rolePowers = computed(() => {
    return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
});

function togglePowerOpened(power) {
    if (openedPowers.value.includes(power.name)) openedPowers.value = openedPowers.value.filter(p => p != power.name);
    else openedPowers.value.push(power.name);
}

function highlight(tag) {
    roleTag.value = tag;
}

</script>

<style lang="css" scoped>
.cards {
    /* Do something */
}

.tag-select {
    border: none;
    border-radius: 0px;

    margin-bottom: var(--gap);
    padding: 4px 2px;

    width: fit-content;

    font-size: var(--para-size);
}
</style>