<template>
    <h2>Powers List</h2>
    <select v-model="powerListMode" class="q">
        <option value="tag">By Tag</option>
        <option value="term">By Term</option>
    </select>

    <span> : </span>

    <select class="tag-select" v-model="roleTag" v-if="powerListMode == 'tag'">
        <option v-for="tag in tags">{{ tag }}</option>
    </select>
    <input v-model="powerSearch" class="q" v-else />
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

let powerListMode = ref("tag");

let openedPowers = ref([]);
let tags = ["All"].concat(Array.from(new Set(powers.map(p => p.tag).flat())).sort()); //don't you just love javascript?
let roleTag = ref("All");
let powerSearch = ref("");

let rolePowers = computed(() => {
    let lw = (str) => str.toLowerCase();
    if(powerListMode.value == "tag") return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
    else return powers.filter(p => lw(p.name).includes(lw(powerSearch.value)) || lw(p.desc).includes(lw(powerSearch.value)));
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