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
                        <input type="number" v-model="preqStats[stat]" class="q q-number stat-input">
                    </label>
                </div>
                <div class="flex gap">
                    <label v-for="stat in Object.keys(preqResistances)" class="flex stat-inputs">
                        <span>{{ stat.toUpperCase() }}</span>
                        <input type="number" v-model="preqResistances[stat]" class="q q-number stat-input">
                    </label>
                </div>
                <p v-show="openedPowers.length > 0">Chosen powers ({{ openedPowers.length }}): {{ openedPowers.join(", ") }}</p>
                <div>
                    <p>TODO:</p>
                    <p>- The ability to take Powers by rank (need to first go over every power and check for repeatability)</p>
                    <p>- therefore "Every X Powers" is missing</p>
                    <p>- skill or expertise is missing, need to finish going through every power and adding skills. At least I have the tool for that</p>
                    <p>- by cantrip or spell - yet to do any progress on powers containing their spells or character sheets containing their spells. I do have that excel file tho...</p>
                    <p>A OR B, I just need to do it</p>
                </div>
            </div>
        </div>
    </div>

    <p>{{ rolePowers.length + " / " + powers.length }}</p>
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

let allPowers = powers.map(p => p.name);

const rolePowers = computed(() => {
    if (filter.value == "tag") return powers.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
    else if (filter.value == "preq") return powers.filter(filterByPreq);
    else return powers.filter(filterByTerm);
});

function filterByTerm(power) {
    let lw = (str) => str.toLowerCase();
    return lw(power.name).includes(lw(powerSearch.value)) || lw(power.desc).includes(lw(powerSearch.value))
}

function filterByPreq(power) {
    //TODO: OK so lots of things to actually do but for now do the After N and Stat based powers for now

    //filter by attribute
    let stats = ["str", "dex", "acc", "per", "int", "cha"];
    let resistances = ["ref", "fort", "will"];

    for(let p of power.preq) {
        //filter by After N powers
        if(p.startsWith("After") && openedPowers.value.length < Number(p[6])) return false;

        for (let stat of stats) {
            if (p.toLowerCase().includes(stat)) {
                let val = Number(p.slice(-2))
                if(preqStats.value.hasOwnProperty(stat) && preqStats.value[stat] < val) return false;
            }
        }
        for (let res of resistances) {
            if (p.toLowerCase().includes(res)) {
                let val = Number(p.slice(-2))
                if(preqResistances.value.hasOwnProperty(res) && preqResistances.value[res] < val) return false;
            }
        }

        //filter by presence of required powers
        if(allPowers.includes(p) && !openedPowers.value.includes(p)) return false;
    }   

    // returns TRUE or FALSE based on whether the character meets the requirements

    return true;
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
    gap: 2px;
}

.stat-inputs span {
    width: 2.5em;
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