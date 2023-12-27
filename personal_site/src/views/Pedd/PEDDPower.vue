<template>
    <div>
        <h4>Tags:</h4>
        <ul>
            <li v-for="tag in power.tag" @click="$emit('highlight', tag)"><a>{{ tag }}</a></li>
        </ul>
        <h4>Prerequisites:</h4>
        <ul>
            <li v-for="preq in power.preq">{{ preq }}</li>
        </ul>
        <div v-html="marked.parse(power.desc)"></div>
    </div>
</template>

<script setup>
import { marked } from 'marked';
const props = defineProps({ power: Object });
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

h4 {
    font-weight: bold;
}
</style>