<template>
    <BasePage subtitle="Races">
        <CardContainer v-for="race in races" :name="race.name" :read-only="true">
            <RaceContent :race="race" />
        </CardContainer>
    </BasePage>
</template>

<script setup>
import BasePage from './Components/BasePage.vue';
import CardContainer from './components/CardContainer.vue';
import RaceContent from './components/RaceContent.vue';
import races from '../../assets/pedd/pedd-races.json';

</script>

<style lang="scss" scoped></style>