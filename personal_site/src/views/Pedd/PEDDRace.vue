<template>
    <div :class="{ container: expanded, header: !expanded }">
        <h3 style="width:15rem;" @click="$emit('raceChosen')">{{ race.name }}<span v-if="!expanded" class="arrow">▼</span><span class="arrow" v-else>▲</span></h3>
        <div id="body" v-if="expanded" class="inner-container" style="flex-grow:4">
            <h4>Description:</h4>
            <p>{{ race.desc }}</p>
            <h4>Stats: </h4>
            <ul class="data">
                <li v-for="stat in race.stats">{{ stat }}</li>
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
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {marked} from 'marked';
const props = defineProps({ race: Object, expanded: Boolean});

let standardHeadings = ["name", "desc", "stats", "baseHealth", "age", "size", "speed", "senses", "powers", "expanded"]
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
@media only screen and (max-width: 599px) {
    .container {
        flex-direction: column;
    }
}

.container {
    display: flex;
    border: 2px groove var(--highlight);
    height: fit-content;
    text-align: center;
}

.inner-container {
    text-align: left;
    display: flex;
    flex-basis: 15rem;
    flex-direction: column;
    justify-content: start;
    padding: 0px 0.5rem;
    border-left: 2px groove var(--highlight);
}

@media only screen and (max-width: 599px) {
    .inner-container {
        border-left: none;
        border-top: 2px groove var(--highlight);
    }
}

.header {
    text-align: center;
    border: 2px groove var(--highlight);
    width: fit-content;
    min-width: 15rem;
}

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

.arrow {
    float:right;
    margin-right:1rem;
}
</style>