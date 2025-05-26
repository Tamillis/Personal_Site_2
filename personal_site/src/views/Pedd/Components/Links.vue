<template>
    <ul>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'pedd' }">Introduction</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'pedd-character-creation' }">Character Creation</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'pedd-character-creator' }">Character Creator</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'pedd-skills' }">Skills</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'pedd-combat' }">Combat</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'pedd-powers' }">Powers</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'pedd-equipment' }">Equipment</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'pedd-magic' }">Magic</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'pedd-spells' }">Spells</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{ name: 'admin' }">Admin</RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
</script>

<style lang="css" scoped>

@media only screen and (min-width: 500px) {

    ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
}
    
    ul li {
        width: fit-content;
        padding-right: 1rem;
    }

</style>