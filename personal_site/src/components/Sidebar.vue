<template>
    <nav class="sidebar">
        <div class="btn-list-container">
            <ul id="links" class="shiftBack" @click="toggleNav()">
                <li class="nav-item">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/dnd">D&D</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/mewiki">M.E. Wiki</RouterLink>
                </li>
                <li class="nav-item"><a href="https://www.github.com/Tamillis" class="nav-item-a"
                        target="_blank">Github</a>
                </li>
                <li class="nav-item"><a href="mailto:bellaby1993@gmail.com?subject=Enquiry for Peter Bellaby"
                        class="nav-item-a">Email Me</a></li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

let out = false;
function toggleNav() {
    let links = document.getElementById("links");

    //if the display of the sidebar is nill or none move items sidebar amount to the side
    //and set the display to block, or do the reverse
    if (out) {
        links.classList.remove("shiftOut");
        links.classList.add("shiftBack");
    }
    else {
        links.classList.remove("shiftBack");
        links.classList.add("shiftOut");
    }
    out = !out;
}
</script>

<style lang="css" scoped>
nav a.router-link-exact-active {
    color: var(--text-color);
}

a {
    text-decoration: none;
    color: var(--color-highlight);
    transition: 0.2s;
}

.sidebar {
    position: fixed;

    display: flex;
    flex-direction: row;
    align-items: center;

    width: fit-content;
    height: 100vh;
    z-index: 5;
    transition: ease-in;
    transform: 0.5s;
}

#links {
    transition: transform 0.33s ease-in-out, background-color 0.5s ease-in-out;
    padding: 1rem;
    border-radius: 0px 10px 10px 0px;
    border: var(--highlight) 4px groove;
    border-left: none;
}

#links:hover {
    cursor: pointer;
}

.shiftOut {
    transform: translateX(-80%);
    background-color: var(--background-transparent);
}

.shiftBack {
    transform: translateX(0%);
    background-color: var(--background);
}

.nav-item {
    padding: 0.13rem 1rem 0.13rem 0rem;
    text-align: left;
    list-style: '- ' inside;
    border-bottom: 1px solid var(--text-color);
}

.nav-item:last-child {
    border-bottom: none;
}

.nav-item:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    box-shadow: 0px 0px 5px 5px hsla(160, 100%, 37%, 0.2);
}
</style>