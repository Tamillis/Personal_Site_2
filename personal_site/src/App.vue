<script setup>
import { RouterLink, RouterView } from 'vue-router';
import p5 from 'p5';
import { Snowstorm } from './assets/snowstorm.js';
import { onMounted } from 'vue';

onMounted(() => {
  new p5(sketch, "background-canvas")
});

const sketch = s => {
  let storm;

  s.setup = function () {
    s.createCanvas(s.windowWidth, s.windowHeight);

    s.stroke(220);
    s.angleMode(s.DEGREES);

    storm = new Snowstorm(s);
  }

  s.draw = function () {
    s.background(s.color("#2a312d"));
    storm.draw(s);
  }

  s.windowResized = function () {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  }
};
</script>

<template>
  <div id="background-canvas" class="z-1 no-border"></div>

  <!-- implement old sidebar, but snazzier? -->
  <nav class="wrapper">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/dnd">D&D</RouterLink>
    <RouterLink to="/mewiki">M.E. Wiki</RouterLink>
  </nav>


  <RouterView />
</template>

<style scoped>
#background-canvas {
  position: fixed;
  top: 0px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: inline-block;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
