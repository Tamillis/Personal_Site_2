<template>
    <div>
        <h2>Role Powers: <span>{{ chosenPowers.join(", ") }}</span></h2>
        <p v-if="chosenPowers.length < 3" style="color: orangered">Please choose 3 Powers.</p>

        <PowerFilter :tags="tags" :openedPowers="allChosenPowers" v-model:filter="filter" v-model:roleTag="searchTag"
            v-model:powerSearch="searchTerm" v-model:preqStats="preqStats" v-model:preqResistances="preqResistances" />

        <div class="cards">
            <CardContainer v-for="(power, i) in filteredPowers" :name="power.name"
                :chosen="chosenPowers.includes(power.name)" :class="{ highlight: chosenPowers.includes(power.name) }"
                @chosen="(name) => choosePower(name)" :key="`rlpc-${i}`">
                <PowerContent :power="power" @highlight="tag => highlight(tag)" />
            </CardContainer>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import CardContainer from './CardContainer.vue';
import PowerContent from './PowerContent.vue';
import PowerFilter from './PowerFilter.vue';

import core from '../../../assets/pedd/trinitas-core.json';
import powers from '../../../assets/pedd/pedd-powers.json';
import races from '../../../assets/pedd/pedd-races.json';
import backgrounds from '../../../assets/pedd/pedd-backgrounds.json';

const props = defineProps(["allChosenPowers", "chosen", "powers"]);
let tags = ["All"].concat(Array.from(new Set(props.powers.map(p => p.tag).flat())).sort()); //don't you just love javascript?

const chosenPowers = defineModel('chosenPowers');

const player = computed(() => props.chosen.getPlayer(core, races, backgrounds));

const filter = ref({
    useTags: false,
    useTerms: false,
    usePreqs: false
});

const searchTerm = ref("");
const searchTag = ref("All");

const preqStats = ref({
    acc: player.value.Accuracy,
    per: player.value.Perception,
    str: player.value.Strength,
    dex: player.value.Dexterity,
    cha: player.value.Charisma,
    int: player.value.Intelligence,
    faith: player.value.faith
});
const preqResistances = ref({
    ref: player.value.reflexes,
    fort: player.value.fortitude,
    will: player.value.willpower
});

let allPowerNames = props.powers.map(p => p.name);

const filteredPowers = computed(() => {
    let list = [...props.powers];
    if (filter.value.useTags) list = list.filter(p => searchTag.value == "All" || p.tag.includes(searchTag.value));
    if (filter.value.usePreqs) list = list.filter(filterByPreq);
    if (filter.value.useTerms) list = list.filter(filterByTerm);
    return list;
});

let choosePower = (name) => {
    //first copy existing powers list
    let newPowersList = chosenPowers.value.slice();

    //if a present power has been chosen, deselect it
    if (newPowersList.includes(name)) newPowersList = newPowersList.filter(p => p !== name);
    else {
        if (newPowersList.length >= 3) {
            //deselect last selected power, i.e. the one at position 0
            newPowersList = newPowersList.slice(1);
        }
        //and push the new name
        newPowersList.push(name);
    }

    chosenPowers.value = newPowersList;
};

function filterByTerm(power) {
    let lw = (str) => str.toLowerCase();
    return lw(power.name).includes(lw(searchTerm.value)) || lw(power.desc).includes(lw(searchTerm.value))
}

function filterByPreq(power) {
    //TODO: OK so lots of things to actually do but for now do the After N and Stat based powers for now

    //check each prerequisite - i.e. rule
    //if any rule fails, return false, otherwise keep checking. If you reach the end, return true as this should be kept
    for (let p of power.preq) {

        //filter by After N powers
        if (p.startsWith("After") && props.allChosenPowers.length < Number(p[6])) return false;

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
        if (allPowerNames.includes(p) && !props.allChosenPowers.includes(p)) return false;
    }

    // returns TRUE or FALSE based on whether the character meets the requirements

    return true;
}
</script>

<style lang="css" scoped></style>