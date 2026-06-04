import { ref, nextTick, onMounted, onUnmounted } from 'vue';

export function useDrag(windowRef) {
    const pos = ref({ x: 0, y: 0 });

    let dragging = false;
    let dragOffset = { x: 0, y: 0 };

    const setPosition = async (x, y) => {
        await nextTick();
        if (!windowRef.value) return;
        const { offsetWidth, offsetHeight } = windowRef.value;
        pos.value = {
            x: Math.max(0, Math.min(window.innerWidth - offsetWidth, x)),
            y: Math.max(0, Math.min(window.innerHeight - offsetHeight, y)),
        };
    };

    const startDrag = (e) => {
        dragging = true;
        dragOffset = { x: e.clientX - pos.value.x, y: e.clientY - pos.value.y };
    };

    const onMouseMove = (e) => {
        if (!dragging) return;
        setPosition(e.clientX - dragOffset.x, e.clientY - dragOffset.y);
    };

    const onMouseUp = () => { dragging = false; };

    onMounted(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    });

    return { pos, setPosition, startDrag };
}