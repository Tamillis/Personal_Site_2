<template>
  <li :class="routes.type === 'dir' ? 'dir-item' : 'file-item'">
    <div v-if="routes.type === 'dir'" class="dir-header" @click="isOpen = !isOpen">
      <span class="triangle" :class="{ open: isOpen }">&#9654;</span>
      <h3>{{ formatPascal(routes.name) }}</h3>
    </div>
    <ul v-if="routes.type === 'dir'" v-show="isOpen">
      <WikiRoutes v-for="route in sortedRoutes" :key="route.path" :routes="route" />
    </ul>
    <RouterLink v-else class="intext-link" :to="configuredPath">
      {{ formatPascal(routes.name.replace(".md", "")) }}
    </RouterLink>
  </li>
</template>

<script setup>
import { ref, computed } from "vue";
import { formatPascal } from "../assets/functionality";

const props = defineProps(["routes"]);

const isOpen = ref(false);

const sortedRoutes = computed(() =>
  props.routes.type === "dir"
    ? [...props.routes.contents].sort((a, b) => a.name.localeCompare(b.name))
    : []
)

const configuredPath = props.routes.path.replace("/mewiki", "mewiki").replace(".md", "")
</script>

<style scoped>
.dir-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.triangle {
  display: inline-block;
  font-size: 0.75em;
  color: var(--text-color);
  transition: transform 0.25s ease;
}

.triangle.open {
  transform: rotate(90deg);
}

h3 {
  display: inline;
  font-weight: 300;
  font-size: 1.5em;
  border-bottom: 1px solid var(--text-color);
}

li {
  list-style: none;
  padding-left: 1rem;
}

.intext-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease;
}

.intext-link:hover {
  color: var(--highlight);
}
</style>