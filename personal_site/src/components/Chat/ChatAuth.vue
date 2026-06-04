<template>
    <div class="auth-panel">
        <p class="auth-error" v-if="authError">{{ authError }}</p>
        <input v-model="username" placeholder="username" class="chat-input" @keyup.enter="login" />
        <input v-model="password" type="password" placeholder="password" class="chat-input" @keyup.enter="login" />
        <div class="auth-actions">
            <button @click="login" class="action-btn">sign in</button>
            <button @click="register" class="action-btn secondary">register</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ authError: String });
const emit = defineEmits(['login', 'register']);

const username = ref('');
const password = ref('');

const login = () => emit('login', username.value, password.value);
const register = () => emit('register', username.value, password.value);
</script>

<style scoped>
.auth-panel {
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.auth-error {
    color: #c0392b;
    font-size: 12px;
    margin: 0;
}

.auth-actions {
    display: flex;
    gap: 0.5em;
}

.chat-input {
    width: 100%;
    border: 1px solid var(--text-color);
    border-radius: 4px;
    padding: 0.5em;
    font-size: 1em;
    outline: none;
    color: var(--text-color);
    background: var(--backgroundDark);
    box-sizing: border-box;
}

.action-btn {
    flex: 1;
    padding: 0.5em;
    border: 1px solid var(--text-color);
    color: var(--text-color);
    background-color: var(--background);
    font-size: 12px;
    cursor: pointer;
    transition: background 0.15s;
}

.action-btn:hover {
    background: var(--black);
}

.action-btn.secondary {
    background: var(--contrastColor);
}

.action-btn.secondary:hover {
    background: var(--text-color);
    color: var(--background);
}
</style>