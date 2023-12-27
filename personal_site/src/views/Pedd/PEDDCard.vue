<template>
    <div :class="{ container: expanded, header: !expanded }">
        <h3 @click="$emit('chosen')">{{ name }}<span v-if="!expanded" class="arrow">▼</span><span class="arrow"
                v-else>▲</span></h3>
        <div id="body" v-if="expanded" class="inner-container">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ name: String, expanded: Boolean });
</script>

<style lang="css" scoped>
.container {
    display: flex;
    border-top: 2px groove var(--highlight);
    height: fit-content;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    border-collapse: collapse;
}

.container:first-child {
    border-top: none;
}
@media only screen and (min-width: 600px) {
.container * {
    flex-basis: 15rem;
}
}
@media only screen and (max-width: 599px) {
    .container {
        flex-direction: column;
    }
}

.inner-container {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0px 0.5rem;
    border-left: 2px groove var(--highlight);
    flex-grow: 4;
}

@media only screen and (max-width: 599px) {
    .inner-container {
        border-left: none;
        border-top: 2px groove var(--highlight);
    }
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
    float: right;
    margin-right: 1rem;
}
</style>