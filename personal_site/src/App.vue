<script setup>
import { RouterView } from 'vue-router';
import p5 from 'p5';
import { Snowstorm } from './assets/snowstorm.js';
import { onMounted } from 'vue';
import Sidebar from './components/Sidebar.vue';

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
  <Sidebar class="z3"/>
  <RouterView class="z2"/>
  <!-- Footer worth putting back in? -->
</template>

<style scoped>
#background-canvas {
  position: fixed;
  top: 0px;
}
</style>
