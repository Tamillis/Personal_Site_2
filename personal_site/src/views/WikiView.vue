<template>
  <div class="section bg-black-transparent-0p3">
    <h1 class="main-title">Materium Existentiae Wiki</h1>
    <h2 class="subsubtitle text-centre no-decoration">My D&D Setting & Worldbuilding Project</h2>

    <!-- List of articles on the wiki, doubling as route and link -->
    <WikiRoutes />

    <!-- Search bar for unique terms to jump to article it's associated to -->
    <!-- <div class="flex gap-1r">
      <input type="text" v-model="fileName">
      <button class="btn inline" @click="">Go</button>
    </div> -->

    <div class="main-text inset">
      <div id="wiki"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { putMdinElement } from '../assets/functionality'
import WikiRoutes from '../components/WikiRoutes.vue'

const basepath = 'src/assets/'
let file = ref(basepath + 'wikiRoot.md')

onMounted(() => {
  putMdinElement(file.value, 'wiki')
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