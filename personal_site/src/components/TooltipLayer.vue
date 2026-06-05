<!-- TooltipLayer.vue -->
<!--
  Dumb, identical at every level. Knows nothing of what's above or below it.
  Renders one entry's prose, runs the SAME highlighter composable the article
  body uses, and emits upward. That ignorance is what keeps the DOM flat and
  the component reusable. The recursion is conceptual only: this layer's text
  can summon another layer, but that layer is a sibling created by the
  container, never a child nested in this one's DOM.
-->
<script setup>
defineProps({
  entry: { type: Object, required: true },  // { description, ... } from index.json
  depth: { type: Number, required: true },  // its index in the stack (z-order)
})
const emit = defineEmits(['open', 'close'])

// The highlighter turns known index terms in entry.description into spans.
// Each span, on hover, calls emit('open', key). Calling it here (not just on
// article bodies) is the actual recursive step.
//   import { useHighlighter } from '@/composables/useHighlighter'
//   const html = useHighlighter(entry.description, key => emit('open', key))
</script>

<template>
  <div class="tooltip-layer">
    <button
      class="tooltip-back"
      aria-label="Back"
      @click="emit('close')"
    >×</button>

    <!-- highlighted prose; hovering a term inside emits('open', key) -->
    <div class="tooltip-body" v-html="html" />
  </div>
</template>
