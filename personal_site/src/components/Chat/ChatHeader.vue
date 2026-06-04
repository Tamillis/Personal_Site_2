<template>
    <div class="chat-header bar" @mousedown="$emit('startDrag', $event)">
        <span class="status-dot" :class="{ connected: isConnected }"></span>
        <span class="chat-title">chat</span>
        <input v-show="authed" v-model="room" @change="$emit('changeRoom')" class="chat-input room-input" />
        <button @click="$emit('close')" class="icon-btn" aria-label="close">✖</button>
    </div>
</template>

<script setup>
const room = defineModel('room');
defineProps({ isConnected: Boolean, authed: Boolean });
defineEmits(['close', 'startDrag', 'changeRoom']);
</script>

<style scoped>
.chat-header {
    cursor: grab;
    
    border-bottom: 1px solid var(--text-color);
    border-radius: 10px 10px 0 0;
}

.chat-header:active {
    cursor: grabbing;
}

.status-dot {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: #ccc;
    transition: background 0.3s;
    flex-shrink: 0;
}

.status-dot.connected {
    background: var(--highlight);
}

.chat-title {
    font-size: 1.1em;
    text-transform: capitalize;
}

.room-input {
    flex: 1;
    width: auto;
}
</style>