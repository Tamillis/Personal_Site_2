<template>
    <div class="messages" ref="messagesEl">
        <div v-for="(m, i) in messages" :key="'message-' + i" class="message"
            :class="{ system: m.user === 'SYSTEM', own: m.user === alias }">
            <span class="msg-user" v-if="m.user !== 'SYSTEM'">{{ m.user }} {{ m.timestamp }}</span>
            <span class="msg-text">{{ m.text }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    messages: Array,
    alias: String,
});
</script>

<style scoped>
.messages {
    overflow-y: auto;
    padding: 1em;
    display: flex;
    flex-direction: column;

    gap: 0.5em;
    height: 30em;
    border-top: 1px solid var(--text-color);
    border-bottom: 1px solid var(--text-color);
}

.message {
    display: flex;
    flex-direction: column;
}

.message.own {
    align-items: flex-end;
}

.message.system .msg-text {
    color: var(--highlight);
    font-size: 0.9em;
    font-style: italic;
    align-self: center;
}

.msg-user {
    font-size: 0.9em;
    color: var(--highlight);
}

.message.own .msg-user {
    text-align: right;
}

.msg-text {
    border-radius: 8px;
    padding: 5px 10px;
    max-width: 220px;
    word-break: break-word;
    line-height: 1.4;
    background: var(--backgroundDark);
    color: var(--text-color);
}

.message.own .msg-text {
    color: var(--backgroundDark);
    background: var(--text-color);
}

@media (max-width: 600px) {
    .messages {
        height: auto;
        flex: 1;
    }
}
</style>