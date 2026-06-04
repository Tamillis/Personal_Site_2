import { ref, nextTick } from 'vue';
 
export function useChat(send, on) {
    const currentRoom = ref('root');
    const messages = ref([]);
    const messagesEl = ref(null);
 
    on('open', () => send('room', currentRoom.value));
    on('messages', (data) => {
        messages.value = data.reverse();
        scrollToBottom();
    });
 
    const scrollToBottom = () => nextTick(() => {
        if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight;
    });
 
    const changeRoom = () => send('room', currentRoom.value);
 
    const sendMessage = (alias, text) => {
        if (!text.trim()) return;
        send('message', { room: currentRoom.value, user: alias, text: text.trim() });
    };
 
    return { currentRoom, messages, messagesEl, changeRoom, sendMessage };
}
 