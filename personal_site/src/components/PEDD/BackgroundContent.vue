<template>
    <div>
        <h4>Description:</h4>
        <div v-html="marked.parse(bg.desc)"></div>
        <h4>Stats: </h4>
        <ul>
            <li v-for="stat in bg.stats">
                <p style="margin:0">{{ stat }}</p>
            </li>
        </ul>
        <h4>Skills:</h4>
        <ul>
            <li v-for="skill in bg.skills">{{ skill }}</li>
        </ul>
        <h4>Equipment:</h4>
        <p>{{ bg.equipment.join(", ") }}</p>
        <h4>Suggested Power:</h4>
        <p>{{ bg.suggestedPower }}</p>
    </div>
</template>

<script setup>
import {marked} from 'marked';
const props = defineProps({ bg: Object});

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