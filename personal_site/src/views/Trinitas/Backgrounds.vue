<template>
    <BasePage subtitle="Backgrounds">
        <CardContainer v-for="(bg, i) in backgrounds" :name="bg.name">
            <BackgroundContent :bg="bg" />
        </CardContainer>
    </BasePage>
</template>

<script setup>
import BasePage from './Components/BasePage.vue';
import CardContainer from './components/CardContainer.vue';
import BackgroundContent from './components/BackgroundContent.vue';
import backgrounds from '../../assets/pedd/pedd-backgrounds.json'

</script>

<style lang="css" scoped></style>