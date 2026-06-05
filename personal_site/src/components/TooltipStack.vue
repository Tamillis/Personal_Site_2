<!-- TooltipStack.vue -->
<!--
  Owns the hover-chain. The ONE clever object: holds the stack, resolves
  open-vs-promote, owns the close-delay timer, owns the keybinds.
  Layers below are dumb and identical; they only emit upward.

  Desktop-pointer idiom only. Touch does not mount this: on touch a term
  is just a <a href> to the entry's page. So there is no tap-to-open path
  here and no tap/close collision to resolve.
-->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TooltipLayer from './TooltipLayer.vue'
import index from '@/data/index.json'

const stack = ref([])        // linear chain: [{ key, entry }, ...], index = z-order
let closeTimer = null        // pending leave-collapse; cancelled on re-enter

// --- the one bit of cleverness: open === promote ---
// A term hover always emits the same event. If the term is already in the
// chain we truncate back up to it (promotion / cycle-prevention); if not we
// push a new deeper layer. An already-visible term is ALWAYS "go back up to
// it", never "open a second copy lower down". This single line is where that
// whole invariant lives.
function open(key) {
  cancelClose()
  const at = stack.value.findIndex(e => e.key === key)
  if (at !== -1) {
    stack.value = stack.value.slice(0, at + 1)   // promote: keep 0..at
  } else if (index[key]) {
    stack.value.push({ key, entry: index[key] }) // descend
  }
  // unknown key (highlighted term with no index entry) => no-op
}

// X on layer i closes layer i, returning the viewer to layer i-1 (the one
// beneath). slice(0, i) keeps 0..i-1. Top layer's X pops one. This is the
// "go back and re-read the previous tooltip" affordance, nothing more.
function closeFrom(i) {
  cancelClose()
  stack.value = stack.value.slice(0, i)
}

function dismissAll() {
  cancelClose()
  stack.value = []
}

// --- leave-collapse with delay so the cursor can cross the dead gap ---
// between a term and its bubble, or between stacked bubbles, without the
// chain vanishing mid-reach. Re-entering anything cancels the pending close.
const CLOSE_DELAY = 160 // ms

function scheduleClose() {
  cancelClose()
  closeTimer = setTimeout(() => { stack.value = [] }, CLOSE_DELAY)
}

function cancelClose() {
  if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
}

// --- keybinds (rough first pass; refine when a11y path is built out) ---
// Esc       -> dismiss whole chain
// Backspace -> pop one layer (go back), prevent the browser's history-back
// ArrowDown -> pop one (alias for "back", feels natural descending a stack)
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

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => { window.removeEventListener('keydown', onKey); cancelClose() })

// Exposed so the article-body highlighter can summon the first layer:
//   <span @mouseenter="tooltips.open(term.key)">
defineExpose({ open, dismissAll })
</script>

<template>
  <!--
    Flat render. Each layer is a SIBLING, not a descendant: keeps the DOM
    flat for overlay positioning, and makes "pop to top" a slice rather than
    a reparent. z-index rises with array position.

    @open  : a highlighted term inside this layer's prose was hovered
    @close : this layer's X was clicked -> closeFrom(i)
    mouseenter/leave on the layer drive the shared collapse timer.
  -->
  <TooltipLayer
    v-for="(layer, i) in stack"
    :key="layer.key"
    :entry="layer.entry"
    :depth="i"
    :style="{ zIndex: 100 + i }"
    @open="open"
    @close="closeFrom(i)"
    @pointerenter="cancelClose"
    @pointerleave="scheduleClose"
  />
</template>
