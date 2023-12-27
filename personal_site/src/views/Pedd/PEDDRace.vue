<template>
    <div>
        <h4>Description:</h4>
        <p>{{ race.desc }}</p>
        <h4>Stats: </h4>
        <ul>
            <li v-for="stat in stats">
                <PEDDAnyStat v-if="stat.stat.includes('Any')" :val="stat.val" />
                <p v-else style="margin:0">{{ stat.stat }} <span>{{ stat.val >= 0 ? "+" + stat.val : stat.val }}</span></p>
            </li>
        </ul>
        <h4>Base Health: <span>{{ race.baseHealth }}</span></h4>
        <h4>Age: </h4>
        <div v-html="marked.parse(race.age)"></div>
        <h4>Size: </h4>
        <div v-html="marked.parse(race.size)"></div>
        <h4>Speed: </h4>
        <div v-html="marked.parse(race.speed)"></div>
        <h4>Senses: </h4>
        <div v-html="marked.parse(race.senses)"></div>
        <div v-for="extra in extras">
            <h4>{{ format(extra) }}: </h4>
            <div v-html="marked.parse(race[extra])"></div>
        </div>
    </div>
</template>

<script setup>
import {marked} from 'marked';
import PEDDAnyStat from './PEDDAnyStat.vue';
const props = defineProps({ race: Object});

let standardHeadings = ["name", "desc", "stats", "baseHealth", "age", "size", "speed", "senses", "powers"]
let stats = props.race.stats.map(stat => {
    let parts = stat.split(" ");
    return {
        stat: parts[0],
        val: Number(parts[1])
    }
});
console.log(stats);
let extras = Object.keys(props.race).filter(key => !standardHeadings.includes(key));

function format(name) {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(" ");
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

</script>

<style lang="css" scoped>
ul {
    display: flex;
    flex-wrap: wrap;
}

ul li {
    width: fit-content;
    padding: 0px 0.5rem;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

h4, strong {
    font-weight: bold;
}
</style>