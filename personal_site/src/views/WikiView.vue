<template>
  <div class="section bg-black-transparent-0p3">
    <h1 class="main-title">Materium Existentiae</h1>
    <h2 class="subsubtitle text-centre no-decoration">A Wiki of my World Building</h2>

    <div class="main-text inset">
      <div id="wiki"></div>
    </div>

    <div class="mx-2r">
      <div class="flex justify-centre gap-1r">
        <label class="label" for="wiki-search-term">Search: </label>
        <input id="wiki-search-term" type="text" class="q flex-grow" v-model="searchTerm">
      </div>
      <p v-if="searchResults.matchedKeys.length">
        <span style="color: var(--highlight)">Known terms</span>: {{ searchResults.matchedKeys.join(", ") }}
      </p>
    </div>

    <ul class="traingle-points">
      <WikiRoutes v-for="route in searchResults.filteredRoutes" :key="route.path" :routes="route" />
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { putMdinElement } from '../assets/functionality'
import WikiRoutes from '../components/WikiRoutes.vue'

import routes from '../assets/wikiroutes.json'
import index from '../assets/index.json'

onMounted(() => {
  putMdinElement("/mewiki-introduction.md", 'wiki')
});

const searchTerm = ref("");

function filterNode(node, term, extraPaths = new Set()) {
  if (node.type === "file") {
    const nameMatch = node.name.toLowerCase().includes(term);
    const indexMatch = extraPaths.has(node.path.toLowerCase());
    return nameMatch || indexMatch ? node : null;
  }
  const children = node.contents.map(c => filterNode(c, term, extraPaths)).filter(Boolean)
  return children.length ? { ...node, contents: children } : null
}

const searchResults = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()
  if (!term) return { filteredRoutes: routes.contents, matchedKeys: [] }

  const matchedEntries = Object.entries(index).filter(([key, obj]) =>
    key.toLowerCase().includes(term) ||
    obj.aliases?.some(a => a.toLowerCase().includes(term))
  )

  const extraPaths = new Set(
    matchedEntries
      .filter(([, val]) => val.page)
      .map(([key, obj]) => `/mewiki/${obj.page.toLowerCase()}`)
  )

  const matchedKeys = matchedEntries.map(([key]) => key)
  console.log(extraPaths)
  return {
    filteredRoutes: routes.contents.map(c => filterNode(c, term, extraPaths)).filter(Boolean),
    matchedKeys
  }
});

</script>

<style lang="css">
#wiki h1 {
  font-size: var(--main-title-size);
}

#wiki h2 {
  font-size: var(--subtitle-size);
}

#wiki h3 {
  font-size: var(--subsubtitle-size);
}

#wiki h4 {
  font-size: var(--subsubtitle-size);
  text-decoration: none;
  margin-top: 0.5rem;
}


#wiki p {
  line-height: 1.2rem;
  margin-bottom: 0.33rem;
}

#wiki h2 {
  text-decoration: underline;
  margin: 0.5rem 0px 0.5rem 0px;
}

#wiki h3 {
  margin: 1rem 0px 0rem 0rem;
  text-decoration: underline;
}

#wiki em {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3rem;
}

#wiki strong {
  font-weight: 700;
}
</style>