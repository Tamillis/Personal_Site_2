<template>
    <ul>
        <li class="no-list">
            <ul class="col">
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas' }">Introduction</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-combat' }">Combat</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-magic' }">Magic</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'admin' }">Admin</RouterLink>
                </li>
            </ul>
        </li>
        <li class="no-list">
            <ul class="col">
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-character-creation' }">Character Creation</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-character-creator' }">Character Creator</RouterLink>
                </li>
            </ul>
        </li>
        <li class="no-list">
            <ul class="col">
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-races' }">Races*</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-backgrounds' }">Backgrounds*</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-powers' }">Powers</RouterLink>
                </li>
            </ul>
        </li>
        <li class="no-list">
            <ul class="col">
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-skills' }">Skills</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-equipment' }">Equipment</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-spells' }">Spells</RouterLink>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
</script>

<style lang="css" scoped>
.no-list {
    list-style-type: none;
    max-width: 100%;
}

@media only screen and (min-width: 660px) {

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        
        .col {
            flex-direction: column;
        }
    }

    .no-list{
        max-width: 33%;
    }
}

ul li {
    width: fit-content;
    padding-right: 1rem;
}
</style>