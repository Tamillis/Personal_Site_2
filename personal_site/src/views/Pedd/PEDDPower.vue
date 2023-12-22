<template>
    <div class="container">
        <h3 class="accordian" @click="$emit('chosen')">{{ power.name }}<span v-if="!expanded" class="arrow">▼</span><span class="arrow" v-else>▲</span></h3>
        <div id="body" v-if="expanded">
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
    flex-direction: column;
    justify-content: start;
    border: 2px groove var(--highlight);
    height: fit-content;
    padding: 0px 0.5rem;
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