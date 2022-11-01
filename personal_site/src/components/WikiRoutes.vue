<template>
    <ul class="">
      <li class="triangle-points" v-for="route in configuredRoutes"><RouterLink class="intext-link" :to="route">{{route.substring(6)}}</RouterLink></li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import routes from '../../wikiroutes.json'

const configuredRoutes = [];

for(let i = 0; i < routes.length; i++) configuredRoutes[i] = "mewiki/" + routes[i].substring(0, routes[i].length-3)
configuredRoutes.sort()

</script>

<style lang="css" scoped>

</style>