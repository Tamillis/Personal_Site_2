<template>
  <div class="container" ref="containerEl">
    <Tooltip v-for="(layer, i) in stack" :key="layer.keyTerm" :key-term="layer.keyTerm" :entry="layer.indexEntry"
      :depth="i" :style="{ zIndex: 10 + i, left: layer.x + 'px', top: layer.y + 'px' }" :on-leave="clearPending" 
      @open="(key, e) => scheduleOpen(key, e, i + 1)" @close="closeFrom(i)" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Tooltip from './Tooltip.vue'
import index from '../assets/index.json'

let openTimer = null
let pendingKey = null;
const OPEN_DELAY = 0.75;  // s

const containerEl = ref(null)
const stack = ref([]);

function open(keyTerm, event, depth) {
  cancelOpen();

  stack.value = stack.value.slice(0, depth);

  const at = stack.value.findIndex(e => e.keyTerm === keyTerm)
  if (at !== -1)
    stack.value = stack.value.slice(0, at + 1)
  else if (index[keyTerm]) {
    const rect = containerEl.value.getBoundingClientRect()
    stack.value.push({
      keyTerm,
      indexEntry: index[keyTerm],
      x: event.clientX - rect.left - 10,
      y: event.clientY - rect.top - 10
    });
  }
}

function closeFrom(i) {
  cancelOpen()
  stack.value = stack.value.slice(0, i)
}

function dismissAll() {
  cancelOpen()
  stack.value = []
}

function scheduleOpen(keyTerm, event, depth = 0) {
  cancelOpen();

  pendingKey = keyTerm;
  openTimer = setTimeout(() => {
    if (pendingKey === keyTerm)
      open(keyTerm, event, depth)
    openTimer = null
  }, OPEN_DELAY * 1000)
}

function cancelOpen() {
  if (!openTimer) return;
  clearTimeout(openTimer);
  openTimer = null;
}

function clearPending() {
  pendingKey = null
}

function onKey(e) {
  if (!stack.value.length) return
  switch (e.key) {
    case 'Escape':
      dismissAll()
      break
    case 'Backspace':
    case 'ArrowDown':
      e.preventDefault()
      closeFrom(stack.value.length - 1)
      break
  }
}

function onDocumentClick(e) {
  if (!e.target.closest('.layer')) dismissAll()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.removeEventListener('click', onDocumentClick)
  cancelOpen()
})

defineExpose({ scheduleOpen, clearPending, dismissAll });
</script>

<style scoped>
.container {
  position: absolute;
  top: 0px;
  left: 0px;
  inset: 0;
}
</style>