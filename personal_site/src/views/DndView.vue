<template>
  <section class="section bg-black-transparent-0p3">
    <h1 class="main-title">Dungeons & Dragons</h1>
    <h2 class="subsubtitle text-centre no-decoration">At My Table</h2>

    <div class="main-text inset">
      <div id="player-brief"></div>
    </div>
    
    <hr class="rule">

    <PointBuyCalculator id="PBCalc" />

  </section>
</template>

<script setup>
import PointBuyCalculator from '../components/PointBuyCalculator.vue';
import { putMdinElement } from '../assets/functionality';
import { onMounted } from 'vue';

onMounted(() => putMdinElement('src/assets/articles/playerbrief.md', 'player-brief'));
</script>

<style>
#player-brief a,
#player-brief a:link,
#player-brief a:visited {
  text-decoration: none;
  color: var(--text-color);
  font-style: normal;
  font-weight: bold;
  overflow-wrap: break-word;
}

#player-brief a:hover {
  font-style: italic;
}

#player-brief blockquote {
  margin-left: var(--textindent);
  background-color: rgba(0,0,0,0.3);
  width: fit-content;
  padding-right: 1.5rem;
  border-top: 2px solid var(--highlight);
  border-bottom: 2px solid var(--highlight);
}

#player-brief p {
  line-height: 1.2rem;
  margin-bottom: 0.33rem;
}

#player-brief h2 {
  text-decoration: underline;
  margin: 0.5rem 0px 0.5rem 0px;
}

#player-brief h3 {
  margin: 1rem 0px -0.5rem 0rem;
  text-decoration: underline;
}

#player-brief h4 {
  margin: 1rem 0px 0.5rem 0rem;
  text-decoration: underline;
}

#player-brief em {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3rem;
}

#player-brief strong {
  font-weight: 700;
}
</style>