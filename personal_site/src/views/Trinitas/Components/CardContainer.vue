<template>
    <div :class="{ container: expanded, header: !expanded }" >
        <h3 class="card-title" @click="expanded = !expanded">{{ name }}<span v-if="!expanded"
                class="arrow">▼</span><span class="arrow" v-else>▲</span></h3>
        <div id="body" v-show="expanded" class="inner-container">
            <slot></slot>

            <div v-if="!readOnly">
                <button class="btn" @click.prevent.stop="$emit('chosen', name)">{{chosen ? "Unselect" : "Select"}}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({ name: String, chosen: Boolean, readOnly: Boolean });

const expanded = ref(props.chosen);
</script>

<style lang="css" scoped>
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-top: 2px groove var(--highlight);
    border-collapse: collapse;

    
}

.container:first-child {
    border-top: none;
}

.inner-container {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0px 0.5rem;

    border-left: none;
    border-top: 2px groove var(--highlight);
}

.inner-container,
.card-title {
    text-align: left;
    width: 100%
}

.header {
    text-align: center;
    border-top: 2px groove var(--highlight);
    width: fit-content;
    min-width: 15rem;
}

.highlight h3 {
    background-color: var(--contrastColor);
}

.arrow {
    float:right;
    margin-right: 1rem;
}

@media only screen and (min-width: 1000px) {
    .container {
        flex-direction: row;
    }

    .container .card-title {
        width: 30%;
    }

    .inner-container {
        width: 70%;
        border-left: 2px groove var(--highlight);
        border-top: none;
    }
}

@media only screen and (min-width: 1000px) {}
</style>