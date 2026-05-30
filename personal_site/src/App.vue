<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { init } from './assets/bg.js'
import Sidebar from './components/Sidebar.vue';

let showFrameRate = false;

onMounted(() => {
  if (!detectMob()) {
    init("background-canvas");
  }
});

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
</script>

<template>
  <canvas id="background-canvas" class="no-border"></canvas>
  <Sidebar />
  <RouterView />
</template>

<style scoped>
#background-canvas {
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  top: 0px;
  z-index: -10;
}
</style>
