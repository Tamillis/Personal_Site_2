<template>
    <table className="table app-table">
        <thead>
            <tr>
                <th>Attribute Value</th>
                <th>Point Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, key) in mapping">
                <td>{{key}}</td>
                <td>{{value}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const props = defineProps(['mapping']);
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