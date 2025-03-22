<template>
    <h2>Powers List</h2>
    <div class="flex gap align-center">
        <h3>Filter:</h3>
        <select v-model="filter" class="q">
            <option value="preq">By Prerequisites</option>
            <option value="tag">By Tag</option>
            <option value="term">By Term</option>
        </select>
    
        <div>
            <select class="tag-select" v-model="roleTag" v-if="filter == 'tag'">
                <option v-for="tag in tags">{{ tag }}</option>
            </select>
            <input v-model="powerSearch" class="q" v-if="filter == 'term'" />

            <div v-if="filter == 'preq'">
                <p>I have: </p>
                <div class="flex gap">
                    <label v-for="stat in Object.keys(preqStats)" class="flex stat-inputs">
                        <span>{{ stat.toUpperCase() }}</span>
                        <input type="text" v-model="preqStats[stat]" class="q stat-input">
                    </label>
                </div>
                <div class="flex gap">
                    <label v-for="stat in Object.keys(preqResistances)" class="flex stat-inputs">
                        <span>{{ stat.toUpperCase() }}</span>
                        <input type="text" v-model="preqResistances[stat]" class="q stat-input">
                    </label>
                </div>
                <p v-show="openedPowers.length > 0">Chosen powers: {{ openedPowers.join(", ") }}</p>
            </div>
        </div>
    </div>


    <div class="cards">
        <CardContainer v-for="(power, i) in rolePowers" :name="power.name" :expanded="openedPowers.includes(power.name)"
            @chosen="togglePowerOpened(power)" :key="`rlpc-${i}-power`">
            <PowerContent :power="power" @highlight="(tag) => highlight(tag)" />
        </CardContainer>
    </div>
</template>

<script setup>
import powers from '/src/assets/pedd/pedd-powers.json';
import PowerContent from './PowerContent.vue';
import CardContainer from './CardContainer.vue';
import { ref, computed } from 'vue';

let tags = ["All"].concat(Array.from(new Set(powers.map(p => p.tag).flat())).sort()); //don't you just love javascript?

const filter = ref("tag");
const openedPowers = ref([]);
const roleTag = ref("All");
const powerSearch = ref("");
const preqStats = ref({
    acc: 0,
    per: 0,
    str: 0,
    dex: 0,
    cha: 0,
    int: 0
});
const preqResistances = ref({
    ref: 0,
    fort: 0,
    will: 0
});

const rolePowers = computed(() => {
    let lw = (str) => str.toLowerCase();
    if(filter.value == "tag") return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
    else if(filter.value == "preq") return powers.filter(p => filterByPreq(p));
    else return powers.filter(p => lw(p.name).includes(lw(powerSearch.value)) || lw(p.desc).includes(lw(powerSearch.value)));
});

function filterByPreq(power) {
    //TODO: OK so lots of things to actually do but for now do the After N and Stat based powers for now

    // returns TRUE or FALSE based on whether the character meets the requirements
}

function togglePowerOpened(power) {
    if (openedPowers.value.includes(power.name)) openedPowers.value = openedPowers.value.filter(p => p != power.name);
    else openedPowers.value.push(power.name);
}

function highlight(tag) {
    roleTag.value = tag;
}

</script>

<style lang="css" scoped>
.stat-input {
    width: 2em;
    text-align: center;
}

.stat-inputs {
    gap:2px;
}

.stat-inputs span {
    width:2.5em;
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