<template>

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
            <p v-show="openedPowers.length > 0">
                Chosen powers ({{ openedPowers.length }}): {{ openedPowers.join(", ") }}
            </p>
            <div style="color:yellowgreen">
                <p>TODO:</p>
                <p>- The ability to take Powers by rank (need to first go over every power and check for
                    repeatability, this is ongoing but slow going)</p>
                <p>- therefore "Every X Powers" is missing</p>
                <p>- skill or expertise is missing, need to finish going through every power and adding skills.</p>
                <p>- by cantrip or spell - spells are yet to be incorporated into the creator so that first</p>
                <p>A OR B, I just need to do it</p>
                <p>- by Tag (currently only "Patron Tag" since there are multiple patrons)</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["tags", "openedPowers"])
const filter = defineModel("filter");
const roleTag = defineModel("roleTag");
const powerSearch = defineModel("powerSearch");
const preqStats = defineModel("preqStats");
const preqResistances = defineModel("preqResistances");
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