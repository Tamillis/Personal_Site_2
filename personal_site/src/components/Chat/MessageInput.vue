<template>
    <div class="bar">
        <button @click="$emit('logout')" class="icon-btn" aria-label="sign out">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2H2.5A1.5 1.5 0 001 3.5v7A1.5 1.5 0 002.5 12H5M9 10l3-3-3-3M12 7H5" stroke="currentColor"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <span class="alias">{{ alias }}</span>
        <input v-model="draft" placeholder="message..." class="chat-input compose-input" @keyup.enter="send"
            :maxlength="2048" />
        <button @click="send" class="icon-btn" aria-label="send">&#9656;</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ alias: String });
const emit = defineEmits(['send', 'logout']);

const draft = ref('');

const send = () => {
    if (!draft.value.trim()) return;
    emit('send', draft.value);
    draft.value = '';
};
</script>

<style scoped>
.alias {
    font-size: 0.9em;
    color: var(--highlight);
    white-space: nowrap;
}

.compose-input {
    flex: 1;
    width: auto;
}
</style>