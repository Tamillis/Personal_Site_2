<template>
    <nav class="sidebar z3" id="nav">
        <ul id="links" class="shiftBack" @click="toggleNav()">
            <li class="nav-item">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/portfolio">Portfolio</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/programming">Programming</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/dnd">D&D</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/pedd">PEDD</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/mewiki">M.E. Wiki</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/survey">Survey</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/statistics">Statistics</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/transissional">Transissional English</RouterLink>
            </li>
            <li class="nav-item"><a href="https://www.github.com/Tamillis" class="nav-item-a" target="_blank">Github</a>
            </li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/peter-bellaby-40b93022b/" class="nav-item-a"
                    target="_blank">LinkedIn</a>
            </li>
            <li class="nav-item"><a href="mailto:peter@bellaby.co.uk?subject=Enquiry for Peter Bellaby"
                    class="nav-item-a">Email Me</a></li>
        </ul>
    </nav>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

let out = false;
function toggleNav() {
    let links = document.getElementById("links");
    let nav = document.getElementById("nav");

    //if the display of the sidebar is nill or none move items sidebar amount to the side
    //and set the display to block, or do the reverse
    if (out) {
        nav.classList.remove("z1");
        nav.classList.add("z3");
        links.classList.remove("shiftOut");
        links.classList.add("shiftBack");
    }
    else {
        nav.classList.remove("z3");
        nav.classList.add("z1");
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

@media screen and (min-width: 600px) {
    .sidebar {
        position: fixed;

        display: flex;
        flex-direction: row;
        align-items: center;

        width: fit-content;
        height: 100vh;

        transition: ease-in;
        transform: 0.5s;
    }

    #links {
        position: relative;
        transition: transform 0.33s ease-in-out, background-color 0.5s ease-in-out;
        padding: 1rem;
        border-radius: 0px 10px 10px 0px;
        border: var(--highlight) 4px groove;
        border-left: none;
    }

    .shiftOut {
        transform: translateX(-80%);
        background-color: var(--background-transparent);
        z-index: 1 !important;
    }

    .shiftBack {
        transform: translateX(0%);
        background-color: var(--backgroundDark);
        z-index: 5 !important;
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
}

@media screen and (max-width: 599px) {
    .sidebar {
        position: absolute;
        top: 0px;
        width: 100vw;
    }

    #links {
        display: flex;
        flex-wrap: wrap;
        transition: transform 0.33s ease-in-out, background-color 0.5s ease-in-out;
        padding: 1rem;
        border-radius: 0px 0px 10px 10px;
        border: var(--highlight) 4px groove;
        border-top: none;
    }

    .shiftOut {
        transform: translateY(-80%);
        background-color: var(--background-transparent);
        z-index: 1 !important;
    }

    .shiftBack {
        transform: translateY(0%);
        z-index: 5 !important;
        background-color: var(--backgroundDark);
    }

    .nav-item {
        margin-left: 0.33rem;
        padding-right: 0.33rem;
        text-align: left;
        list-style: '' inside;
        border-right: 1px solid var(--text-color);
    }

    .nav-item:last-child {
        border-right: none;
    }
}

/* a,
li {
    width: 100%;
} */

a:hover {
    cursor: pointer;
}




.nav-item a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    box-shadow: 0px 0px 5px 5px hsla(160, 100%, 37%, 0.2);
}
</style>