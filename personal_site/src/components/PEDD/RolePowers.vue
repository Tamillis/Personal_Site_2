<template>
    <div>
        <h2>Role Powers: <span>{{ props.powers.join(", ") }}</span></h2>
        <p>TODO: properly automatically filter by prerequisites</p>
        <p v-if="props.powers.length < 3" style="color: orangered">Please choose 3 Powers.</p>
        <select class="tag-select" v-model="searchType">
            <option value="tag">Search by tag</option>
            <option value="term">Search by term</option>
        </select>
        <select v-if="searchType == 'tag'" class="tag-select" v-model="searchTag">
            <option v-for="tag in tags">{{ tag }}</option>
        </select>
        <input v-if="searchType == 'term'" class="text-search" placeholder="Search by name or description..." v-model="searchTerm" />
        <div class="cards">
            <CardContainer v-for="(power, i) in rolePowers" :name="power.name"
                :expanded="props.powers.includes(power.name)" :class="{ highlight: props.powers.includes(power.name) }"
                @chosen="(name) => choosePower(name)" :key="`rlpc-${i}`">
                <PowerContent :power="power" @highlight="tag => highlight(tag)" />
            </CardContainer>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import powers from '../../assets/pedd/pedd-powers.json'

import CardContainer from './CardContainer.vue';
import PowerContent from './PowerContent.vue';

let tags = ["All"].concat(Array.from(new Set(powers.map(p => p.tag).flat())).sort()); //don't you just love javascript?

const props = defineProps(['powers']);
const emits = defineEmits(['powersChosen'])

const searchTerm = ref("");
const searchTag = ref("All");
const searchType = ref("tag");
const rolePowers = computed(() => {
    let term = searchTerm.value.toLowerCase();
    if(searchType.value == "tag") return powers.filter(p => searchTag.value == 'All' || p.tag.includes(searchTag.value));
    else return powers.filter(p => term == '' || term == 'all' || p.name.includes(term) || p.desc.includes(term));
});

let choosePower = (name) => {
    //first copy existing powers list
    let newPowersList = props.powers.slice();

    //if a present power has been chosen, deselect it
    if(newPowersList.includes(name)) newPowersList = newPowersList.filter(p => p !== name);
    else {
        if(newPowersList.length >= 3) {
            //deselect last selected power, i.e. the one at position 0
            newPowersList = newPowersList.slice(1);
        }
        //and push the new name
        newPowersList.push(name);
    }

    emits('powersChosen', newPowersList);
};
</script>

<style lang="css" scoped>
.text-search {
    border: none;
    width: 50%;
    margin-left: 1rem;
}
</style>