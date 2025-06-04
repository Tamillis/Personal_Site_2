<script setup>
import { RouterView } from 'vue-router';
// import p5 from 'p5';
// import { Snowstorm } from './assets/snowstorm.js';
import { onMounted } from 'vue';
import Sidebar from './components/Sidebar.vue';

let showFrameRate = false;

onMounted(() => {
  // window.addEventListener("mousedown", (e) => {
  //   if (e.clientX < 25 && e.clientY < 25) showFrameRate = !showFrameRate;
  // });

  //if screen is too small, assume mobile and don't load the sketch
  if (!detectMob()) {
    //new p5(sketch, "background-canvas")
    bg.init("background-canvas");
  }
});

// const sketch = s => {
//   let storm;
//   let count = 0;
//   let fps = 60;
//   s.setup = function () {
//     s.createCanvas(s.windowWidth, s.windowHeight);
//     s.stroke(220);
//     s.angleMode(s.DEGREES);
//     storm = new Snowstorm(s);
//   }

//   s.draw = function () {
//     s.background(s.color("#2a312d"));
//     storm.draw(s);
//     if (count++ % 6 == 0) fps = Math.floor(s.frameRate());
//     if (showFrameRate) {
//       s.push();
//       s.fill("white");
//       s.noStroke();
//       s.text(fps, 10, 20);
//       s.pop();
//     }
//   }

//   s.windowResized = function () {
//     s.resizeCanvas(s.windowWidth, s.windowHeight);
//   }
// };

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
  <!-- Footer worth putting back in? -->
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
