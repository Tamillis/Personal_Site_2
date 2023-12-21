<template>
    <div class="container">
        <h3 class="accordian" @click="toggleBody()">{{ power.name }}<span v-if="!showBody" style="float:right;margin-right:1rem;">▼</span></h3>
        <div id="body" v-if="showBody">
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
const props = defineProps({ power: Object });

let power = ref(props.power);
let showBody = ref(false);

let toggleBody = () => showBody.value = !showBody.value;

</script>

<style lang="css" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    border: 2px groove var(--highlight);
    height: fit-content;
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
</style>