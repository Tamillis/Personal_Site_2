<template>
    <h2>Powers List</h2>
    <div class="flex gap align-center filter-borders">
        <h3>Filter:</h3>
        <div class="flex align-center">
            <label>By Tag</label>
            <input type="checkbox" class="q checkBoxQ" v-model="filter.useTags">
        </div>

        <div class="flex align-center">
            <label>By Prerequisite</label>
            <input type="checkbox" class="q checkBoxQ" v-model="filter.usePreqs">
        </div>

        <div class="flex align-center">
            <label>By Term</label>
            <input type="checkbox" class="q checkBoxQ" v-model="filter.useTerms">
        </div>
    </div>

    <div class="flex gap" v-if="filter.useTags">
        <label>Tags: </label>
        <select class="tag-select" v-model="roleTag">
            <option v-for="tag in tags">{{ tag }}</option>
        </select>
    </div>

    <div class="flex gap" v-if="filter.useTerms">
        <label>Terms: </label>
        <input v-model="powerSearch" class="q" />
    </div>

    <div>
        <div v-if="filter.usePreqs">
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
            <p v-show="openedPowers.length > 0">Chosen powers ({{ openedPowers.length }}): {{ openedPowers.join(", ") }}
            </p>
            <div style="color:yellowgreen">
                <p>TODO:</p>
                <p>- The ability to take Powers by rank (need to first go over every power and check for
                    repeatability)</p>
                <p>- therefore "Every X Powers" is missing</p>
                <p>- skill or expertise is missing, need to finish going through every power and adding skills. At
                    least I have the tool for that</p>
                <p>- by cantrip or spell - yet to do any progress on powers containing their spells or character
                    sheets containing their spells. I do have that excel file tho...</p>
                <p>A OR B, I just need to do it</p>
                <p>Power Tag (currently only "Patron Tag" since there are multiple patrons and I want to axe the "Otherworldly Patron" Power)</p>
            </div>
        </div>
    </div>

    <p>{{ rolePowers.length + " / " + powers.length }}</p>
    <div class="cards">
        <CardContainer v-for="(power, i) in rolePowers" :name="power.name" :expanded="openedPowers.includes(power.name)"
            @chosen="togglePowerOpened(power)" :key="`rlpc-${i}-power`">
            <PowerContent :power="power" @highlight="(tag) => highlight(tag)" />
        </CardContainer>
        <p v-if="rolePowers.length == 0">No Powers match :-(</p>
    </div>
</template>

<script setup>
import powers from '/src/assets/pedd/pedd-powers.json';
import PowerContent from './PowerContent.vue';
import CardContainer from './CardContainer.vue';
import { ref, computed } from 'vue';

let tags = ["All"].concat(Array.from(new Set(powers.map(p => p.tag).flat())).sort()); //don't you just love javascript?

const filter = ref({
    useTags: false,
    useTerms: false,
    usePreqs: false
});
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
    let list = [...powers];
    if (filter.value.useTags) list = list.filter(p => roleTag.value == "All" || p.tag.includes(roleTag.value));
    if (filter.value.usePreqs) list = list.filter(filterByPreq);
    if (filter.value.useTerms) list = list.filter(filterByTerm);
    return list;
});

function filterByTerm(power) {
    let lw = (str) => str.toLowerCase();
    return lw(power.name).includes(lw(powerSearch.value)) || lw(power.desc).includes(lw(powerSearch.value))
}

function filterByPreq(power) {
    //TODO: OK so lots of things to actually do but for now do the After N and Stat based powers for now

    //check each prerequisite - i.e. rule
    //if any rule fails, return false, otherwise keep checking. If you reach the end, return true as this should be kept
    for (let p of power.preq) {
        
        //filter by After N powers
        if (p.startsWith("After") && openedPowers.value.length < Number(p[6])) return false;
        
        //filter by stat
        // The OR rule can be hacked because only one Power uses it currently 
        // and ceebs to properly set up the recursive approach needed to parse and solve a chain of OR rules for a true general solution
        if (p == "One of Accuracy +3 OR Dexterity +3" && preqStats.value.acc < 3 && preqStats.value.dex < 3) return false;
        
        for (let stat of Object.keys(preqStats.value)) {
            if (p.toLowerCase().startsWith(stat)) {
                let val = Number(p.slice(-2))
                if (preqStats.value[stat] < val) return false;
            }
        }
        

        //filter by resistance
        for (let res of Object.keys(preqResistances.value)) {
            if (p.toLowerCase().startsWith(res)) {
                let val = Number(p.slice(-2))
                if (preqResistances.value.hasOwnProperty(res) && preqResistances.value[res] < val) return false;
            }
        }

        //filter by presence of required powers
        if (allPowers.includes(p) && !openedPowers.value.includes(p)) return false;
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
.filter-borders>*:not(:last-child):not(:first-child) {
    border-right: var(--highlight) 2px groove;
}

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