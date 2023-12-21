<template>
    <div class="container">
        <h3 class="accordian">{{ race.name }}<span v-if="!race.expanded" style="float:right;margin-right:1rem;">▼</span></h3>
        <div id="body" v-if="race.expanded">
            <h4>Description:</h4>
            <p>{{ race.desc }}</p>
            <h4>Stats: </h4>
            <ul class="stats">
                <li v-for="stat in race.stats">{{ stat }}</li>
            </ul>
            <ul class="data">
                <li>Base Health: {{ race.baseHealth }}</li>
                <li>Age: <span v-html="marked.parse(race.age)"></span></li>
                <li>Size: <span v-html="marked.parse(race.size)"></span></li>
                <li>Speed: <span v-html="marked.parse(race.speed)"></span></li>
                <li>Senses: <span v-html="marked.parse(race.senses)"></span></li>
                <li v-for="extra in extras">{{ format(extra) }}: <span v-html="marked.parse(race[extra])"></span></li>
            </ul>
            <h4>Racial Powers: </h4>
            <ul>
                <li v-for="power in race.powers">{{ power }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {marked} from 'marked';
const props = defineProps({ race: Object});

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
.container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    border: 2px groove var(--highlight);
    height:fit-content;
}

.stats {
    display: flex;
    flex-wrap: wrap;
}

.data {
    display: flex;
    flex-direction: column;
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