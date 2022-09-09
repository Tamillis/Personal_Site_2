<template>
    <div className="statbloc-container">
        <p className="statbloc-items statbloc-label">
            {{ attribute }} {{value}} (<span v-if="modifier(value) >= 0">+</span>{{modifier(value)}})
        </p>
        <div>
            <button className="statbloc-items btn statbloc-btn" type="number" @click="$emit('updateAttribute', attribute, 1)">+</button>
            <button className="statbloc-items btn statbloc-btn" type="number" @click="$emit('updateAttribute', attribute, -1)">-</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['attribute', 'value'])

const modifier = (val) => Math.floor((val - 10) / 2);

</script>

<style scoped>
@media screen and (max-width: 600px) {
    .statbloc-container {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: nowrap;

        width: auto;
        height: auto;
        padding: 0px;
    }
}

.statbloc-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    width: auto;
    height: auto;
    padding: 0px;
}

.statbloc-items {
    display: inline;
    padding: 0px;
}

.statbloc-label {
    width: max(10rem, 25%);
    text-align: right;
    margin: 5px;
}

.statbloc-btn {
    font-size: 1.5rem;
    background-color: var(--contrastColor);

    border: 1px black solid;

    width: 2rem;
    height: 2rem;
}

.statbloc-btn:active {
    border: 2px inset var(--contrastColor);
    transform: translateY(2px);
}
</style>