<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { init } from './assets/bg.js'
import Sidebar from './components/Sidebar.vue';
import ChatWindow from './components/Chat/ChatWindow.vue';
import { isMobile } from './assets/functionality.js';

let showFrameRate = false;

const mobile = isMobile();

onMounted(() => {
  if (!mobile) {
    init("background-canvas");
  }
});
</script>

<template>
  <canvas id="background-canvas" class="no-border" v-if="!mobile"></canvas>
  <Sidebar />
  <RouterView />
  <ChatWindow />
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
