<template>
  <div class="card layer">
    <div class="header">
      <h3>{{ keyTerm }}</h3>
      <button class="btn" @click="emit('close')">×</button>
    </div>

    <h4>{{ entry.aliases ? entry.aliases.join(", ") : "" }}</h4>

    <hr/>

    <div class="body" ref="bodyEl" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHighlighter } from '@/composables/useHighlighter'

const emit = defineEmits(['open', 'close']);
const props = defineProps({
  entry: { type: Object, required: true },
  depth: { type: Number, required: true },
  keyTerm: { type: String, required: true },
  onLeave: {type: Function, required: true}
});

const bodyEl = ref(null);
onMounted(() => useHighlighter(
  bodyEl.value, 
  props.entry.description, 
  (key, e) => emit('open', key, e), 
  props.onLeave
));
</script>

<style scoped>
.layer {
  position: absolute;
  pointer-events: all;

  width: 250px;
  border: 2px groove var(--highlight);
  border-radius: 4px;

  background-color: var(--backgroundDark);
}

.card {
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>