<template>
    <table className="table app-table">
        <thead>
            <tr>
                <th>Attribute Value</th>
                <th>Point Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(key, index) in keys">
                <td>{{key}}</td>
                <td>{{values[index]}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const props = defineProps(['mapping'])

//for display purposes reverse the order of the data of the mapping object
let keys = Object.keys(props.mapping).slice().reverse()
let values = Object.values(props.mapping).slice().reverse()
</script>

<style scoped>
.app-table {
  flex-basis: max(16rem, 20vw);
  margin: 5px 1em;
  border-color: var(--contrastColor);
}

.app-table td,
.app-table th {
  border-color: var(--contrastColor);
}
</style>