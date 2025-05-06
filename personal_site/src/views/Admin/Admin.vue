<template>
    <section class="section bg-black-transparent-0p3">
        <Links class="mb-gap" />

        <form id="login-form" @submit.prevent="login" :class="{hidden: !showLogin}">
            <div class="flex">
                <label for="username">Username:</label>
                <input id="username" v-model="username" class="q text-entry" type="text" />
                <label for="password">Password:</label>
                <input id="password" v-model="password" class="q text-entry" type="password" />
                <button type="submit" id="login-btn" class="btn">Login</button>
            </div>
            <p :class="{hidden: !errMsg}" class="error-text">{{ errMsg }}</p>
        </form>

        <section id="logged-in" :class="{hidden: showLogin}">
            <div class="flex gap justify-end">
                <p>Logged in as <span id="username-display">{{ username }}</span></p>
                <button id="log-out-btn" class="btn" @click="logout">Log Out</button>
            </div>
            <hr/>
            <section class="">
                <PEDDPowersEditor />
            </section>
        </section>
    </section>
</template>

<script setup>
import Links from '../../components/PEDD/Links.vue';
import PEDDPowersEditor from './PEDDPowersEditor.vue';

import { ref } from 'vue';
const AUTH_URL = "/api/Auth_Controller.php";
const username = ref("");
const password = ref("");
const showLogin = ref(true);
const errMsg = ref("");

checkAuth();

async function checkAuth() {
    const res = await fetch(`${AUTH_URL}?action=check`, { method: 'GET' });
    if(!res.ok) errMsg.value = res.status + " - " + res.statusText;
    const data = await res.json();
    console.log(data);
    showLogin.value = !data.authenticated;
    username.value = data.username;

}

async function login(e) {
    console.log("Logging in...")
    let res = await fetch(AUTH_URL + "?action=login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    });

    let data = await res.json();
    console.log(data);
    if (data.error) {
        //do something with message
        //display error message.
        errMsg.value = data.error;
    }
    else if(data.message) {
        checkAuth();
    } 
}

async function logout(e) {
    console.log("Logging out " + username.value);

    const res = await fetch(`${AUTH_URL}?action=logout`);
    if (res.ok) {
        checkAuth();
    }
    else {
        let data = await res.json();
        console.warn(data);
        errMsg.value = data.error;
    }
    username.value = '';
    password.value = '';
        

}
</script>

<style lang="css" scoped></style>