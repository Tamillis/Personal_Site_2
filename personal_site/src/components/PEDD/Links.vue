<template>
    <ul>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{name:'pedd'}">Introduction</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{name:'pedd-character-creation'}">Character Creation</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{name:'pedd-skills'}">Skills</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{name:'pedd-combat'}">Combat</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{name:'pedd-powers'}">Powers</RouterLink>
        </li>
        <li class="triangle-points">
            <RouterLink class="intext-link" :to="{name:'pedd-magic'}">Magic</RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
</script>

<style lang="css" scoped>
#pedd a,
#pedd a:link,
#pedd a:visited {
    text-decoration: none;
    color: var(--text-color);
    font-style: normal;
    font-weight: bold;
    overflow-wrap: break-word;
}

#pedd a:hover {
    font-style: italic;
}
</style>