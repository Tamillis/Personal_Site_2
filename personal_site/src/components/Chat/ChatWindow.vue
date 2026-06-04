<template>
    <div id="chat" v-if="!hidden" class="chat-window" :style="windowStyle" ref="windowRef">
        <ChatHeader v-model:room="currentRoom" :isConnected="isConnected" :authed="authed" @close="hidden = true"
            @startDrag="startDrag" @changeRoom="changeRoom" />
        <div class="chat-body">
            <ChatAuth v-if="!authed" :authError="authError" @login="login" @register="register" />
            <template v-else>
                <MessageList :messages="messages" :alias="alias" />
                <MessageInput :alias="alias" @send="(text) => sendMessage(alias, text)" @logout="logout" />
            </template>
        </div>
    </div>

    <ChatBubble v-if="hidden" :isConnected="isConnected" @open="showChat" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useWebSocket } from '../../composables/useWebsocket.js';
import { useAuth } from '../../composables/useAuth.js';
import { useChat } from '../../composables/useChat.js';
import { useDrag } from '../../composables/useDrag.js';
import ChatBubble from './ChatBubble.vue';
import ChatHeader from './ChatHeader.vue';
import ChatAuth from './ChatAuth.vue';
import MessageList from './MessageList.vue';
import MessageInput from './MessageInput.vue';

const windowRef = ref(null);
const hidden = ref(true);

const emit = defineEmits([]);

const { isConnected, send, on } = useWebSocket();
const { authed, alias, authError, login, register, logout } = useAuth(send, on, onAuthed);
const { currentRoom, messages, changeRoom, sendMessage } = useChat(send, on);
const { pos, setPosition, startDrag } = useDrag(windowRef);

const windowStyle = computed(() => ({
    transform: `translate(${pos.value.x}px, ${pos.value.y}px)`,
}));

function onAuthed() {
    setPosition(0, window.innerHeight);
}

const showChat = () => {
    hidden.value = false;
    setPosition(0, window.innerHeight);
};
</script>

<style>
@import '../../assets/chat.css';
</style>

<style scoped>
.chat-window {
    position: fixed;
    top: 0;
    left: 0;
    width: 33em;
    color: var(--text-color);
    background: var(--background);
    border: 2px groove var(--color-highlight);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    z-index: 9999;
    user-select: none;
}

.chat-body {
    display: flex;
    flex-direction: column;
    flex: 1;
}

@media (max-width: 600px) {
    .chat-window {
        width: 100dvw;
        height: 100dvh;
        border: none;
        border-radius: 0;
        transform: none !important;
    }
}
</style>