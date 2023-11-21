<template>
    <div class="container">
        <button class="btn" @click="next(-1)">&NestedLessLess;</button>
        <div>
            <h3>{{ power.name }}</h3>
            <h4>Tags</h4>
            <ul>
                <li v-for="tag in power.tag">{{ tag }}</li>
            </ul>
            <h4>Preqs</h4>
            <ul>
                <li v-for="preq in power.preq">{{ preq }}</li>
            </ul>
            <p>{{ power.desc }}</p>
        </div>
        <button class="btn" @click="next(1)">&NestedGreaterGreater;</button>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
const props = defineProps({powers:Array});

let i = ref(0);
let power = ref(props.powers[i.value]);

function next(n) {
    i.value += n;
    if(i.value >= props.powers.length) i.value = 0;
    else if (i.value < 0) i.value = props.powers.length - 1;

    power.value = props.powers[i.value];
}

</script>

<style lang="css" scoped>
.container {
    display: flex;
    align-items: center;
}

ul {
    display: flex;
    gap: 1rem;
}

ul li {
    width: fit-content;
    padding: 0px 0.5rem;
    text-decoration: none;
}
</style>