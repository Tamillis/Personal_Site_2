<template>
    <ul v-show="showLinks">
        <li class="no-list">
            <ul class="col">
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas' }">Introduction</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-character-creation' }">Character Creation
                    </RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-character-creator' }">Character Creator
                    </RouterLink>
                </li>
            </ul>
        </li>
        <li class="no-list">
            <ul class="col">
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-core-rolls' }">Core Rolls & Statistics
                    </RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-progression' }">Progression
                    </RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-combat' }">Combat</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-magic' }">Magic</RouterLink>
                </li>
            </ul>
        </li>
        <li class="no-list">
            <ul class="col">
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-races' }">Races</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-backgrounds' }">Backgrounds</RouterLink>
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
        <li class="no-list">
            <ul class="col">
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'admin' }">Admin</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-appendices' }">Appendices</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-design-notes' }">Design Notes</RouterLink>
                </li>
                <li class="triangle-points">
                    <RouterLink class="intext-link" :to="{ name: 'trinitas-stat-blocks' }">Stat Blocks</RouterLink>
                </li>
            </ul>
        </li>
    </ul>
    <i :class="{ 'triangle-point': !showLinks, 'triangle-point-reverse': showLinks }" @click="showLinks = !showLinks">
        {{ showLinks ? "Hide" : "Show" }}
    </i>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const showLinks = ref(true);

</script>

<style lang="css" scoped>
i {
    font-style: normal;
    margin-left: 1rem;
    padding-right: 1rem;
}

.no-list {
    list-style-type: none;
    width: 100%;
    border-bottom: 1px solid var(--text-color);
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

    .no-list {
        max-width: 33%;
        border-bottom: none;
    }
}

ul li {
    width: fit-content;
    padding-right: 1rem;
}
</style>