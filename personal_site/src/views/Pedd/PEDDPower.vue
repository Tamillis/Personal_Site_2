<template>
    <div :class="{container: expanded, header: !expanded}">
        <h3 style="width:15rem;" @click="$emit('chosen')">{{ power.name }} <span v-if="!expanded" class="arrow">▼</span><span class="arrow" v-else>▲</span></h3>
        
        <div id="body" v-if="expanded" class="inner-container" style="flex-grow:4">
            <h4>Tags:</h4>
            <ul>
                <li v-for="tag in power.tag">{{ tag }}</li>
            </ul>
            <h4>Preqs:</h4>
            <ul>
                <li v-for="preq in power.preq">{{ preq }}</li>
            </ul>
            <p>{{ power.desc }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({ power: Object, expanded: Boolean });

let power = ref(props.power);
</script>

<style lang="css" scoped>
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

h4 {
    font-weight: bold;
}

.arrow {
    float:right;
    margin-right:1rem;
}
</style>