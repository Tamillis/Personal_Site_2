<template>
    <button class="chat-bubble" @click="$emit('open')" aria-label="open chat">
        <span class="status-dot" :class="{ connected: isConnected }"></span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 4a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 3V4z" stroke="currentColor" stroke-width="1.4"
                stroke-linejoin="round" />
        </svg>
    </button>
</template>

<script setup>
defineProps({ isConnected: Boolean });
defineEmits(['open']);
</script>

<style scoped>
.chat-bubble {
    position: fixed;
    bottom: 2em;
    left: 2em;
    width: 4em;
    height: 4em;
    border-radius: 50%;
    background: var(--backgroundDark);
    color: #fff;
    border: 2px groove var(--highlight);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: background 0.15s;
}

.chat-bubble:hover {
    background: var(--black);
}

.status-dot {
    width: 0.6em;
    height: 0.6em;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    top: 0.4em;
    right: 0.4em;
    transition: background 0.3s;
}

.status-dot.connected {
    background: #4caf79;
}

@media (max-width: 600px) {
    .chat-bubble {
        width: 2.5em;
        height: 2.5em;
        bottom: 1em;
        left: 1em;
    }

    .chat-bubble svg {
        width: 14px;
        height: 14px;
    }
}
</style>