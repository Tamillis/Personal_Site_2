import { ref } from 'vue';
 
export function useAuth(send, on, onAuthed) {
    const authed = ref(false);
    const alias = ref('');
    const authError = ref('');
 
    on('login_response', (data) => handleAuthResponse(data));
    on('reg_response', (data) => handleAuthResponse(data));
 
    const handleAuthResponse = (data) => {
        if (data.success) {
            authed.value = true;
            authError.value = '';
            onAuthed();
        } else {
            authError.value = data.message ?? 'failed';
        }
    };
 
    const login = (username, password) => {
        authError.value = '';
        alias.value = username;
        send('login', { username, password });
    };
 
    const register = (username, password) => {
        authError.value = '';
        alias.value = username;
        send('reg', { username, password });
    };
 
    const logout = () => {
        send('logout', null);
        authed.value = false;
        alias.value = '';
    };
 
    return { authed, alias, authError, login, register, logout };
}