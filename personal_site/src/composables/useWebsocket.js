import { ref, onUnmounted } from 'vue';

const WS_URL = import.meta.env.VITE_WS_URL ?? 'wss://bell-soft.co.uk/ws';

export function useWebSocket() {
    const isConnected = ref(false);
    const lastMessage = ref(null);

    let ws = null;
    let reconnectTimer = null;
    let reconnectCount = 0;
    const handlers = {};

    const send = (type, data) => {
        if (ws?.readyState === WebSocket.OPEN)
            ws.send(JSON.stringify({ type, data }));
    };

    const on = (type, handler) => { handlers[type] = handler; };

    const connect = () => {
        ws = new WebSocket(WS_URL);

        ws.onopen = () => {
            isConnected.value = true;
            reconnectCount = 0;
            handlers['open']?.();
        };

        ws.onclose = () => {
            isConnected.value = false;
            if (reconnectCount++ < 10) reconnectTimer = setTimeout(connect, 3000);
            else console.warn('10 reconnect attempts failed, please try again later.');
        };

        ws.onmessage = ({ data }) => {
            const msg = JSON.parse(data);
            lastMessage.value = msg;
            handlers[msg.type]?.(msg.data);
        };
    };

    const disconnect = () => {
        clearTimeout(reconnectTimer);
        ws?.close();
    };

    onUnmounted(disconnect);
    connect();

    return { isConnected, send, on };
}