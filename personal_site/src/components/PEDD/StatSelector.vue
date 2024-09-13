<template>
    <div class="flex">
        <select v-model="model">
            <option v-for="s in stats">{{ s }}</option>
        </select>
        <label>{{ props.val < 0 ? props.val : '+' + props.val }}</label>
    </div>
</template>

<script setup>

let stats = ["Accuracy", "Perception", "Strength", "Dexterity", "Charisma", "Intelligence"];

const props = defineProps(["val"]);
const model = defineModel();


</script>

<style lang="css" scoped>
label {
    font-weight: bold;
    font-size: larger;
    display: block;
    text-indent: 0px;
}

select {
    appearance: none;
    display: inline;
    outline: none;
    border: none;
    text-align: center;
    color: var(--text-color);
    background-color: var(--background);
    padding: 0px 0.5rem;
}
</style>