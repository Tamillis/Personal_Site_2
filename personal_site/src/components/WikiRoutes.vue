<template>
      <li :class=" routes.type == 'dir' ? 'triangle-points-down' : 'triangle-points'" >
        <h3 v-if="routes.type=='dir'">{{ routes.name }}</h3>
        <ul v-if="routes.type=='dir'">
          <WikiRoutes v-for="route in routes.contents" :routes="route" />
        </ul>
        <RouterLink v-else class="intext-link" :to="configuredPath">{{routes.name.replace(".md", "")}}</RouterLink>
      </li>
</template>

<script setup>

const props = defineProps(["routes"])

let configuredPath = props.routes.path.replace("./src/assets/wiki", "mewiki").replace(".md", "")

</script>

<style lang="css" scoped>
h3 {
  display: inline;
  font-weight: 300;
  font-size: 1.5em;
  border-bottom: 1px solid var(--text-color);
}
</style>