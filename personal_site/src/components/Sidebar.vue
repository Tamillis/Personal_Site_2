<template>
    <nav class="sidebar" :class="{shiftOut: sidebarOut, shiftBack: !sidebarOut}" id="nav" @click="sidebarOut = !sidebarOut">
        <ul id="links">
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
            <!--  <li class="nav-item">
                <RouterLink to="/dnd">D&D</RouterLink>
            </li>  -->
            <li class="nav-item">
                <RouterLink to="/pedd">PEDD</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/mewiki">M.E. Wiki</RouterLink>
            </li>
            <!-- <li class="nav-item">
                <RouterLink to="/survey">Survey</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/statistics">Statistics</RouterLink>
            </li>  -->
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
        <div class="triangle-point"></div>
    </nav>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { ref } from 'vue';

useRoute();
const sidebarOut = ref(false);

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

a:hover {
    cursor: pointer;
    background-color: hsla(160, 100%, 37%, 0.2);
    box-shadow: 0px 0px 5px 5px hsla(160, 100%, 37%, 0.2);
}

#nav {
    transition: transform 0.33s ease-in-out, background-color 0.5s ease-in-out;
}

.sidebar {
    position: fixed;
    top: 0px;
    width: 100vw;
    padding-bottom: 1rem;
    border-radius: 0px 0px 10px 10px;
    border: var(--highlight) 4px groove;
    border-top: none;
}

.shiftOut {
    transform: translateY(-85%);
    background-color: var(--background-transparent);
    z-index: 5 !important;
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

@media screen and (max-width: 599px) {
    #links {
        display: flex;
        flex-wrap: wrap;
        padding: 1rem;
    }
}

@media screen and (min-width: 600px) {
    .sidebar {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: fit-content;
        height: fit-content;

        transition: ease-in;
        transform: 0.5s;

        top: 50%;

        padding: 1rem;
        border-radius: 0px 10px 10px 0px;
        border: var(--highlight) 4px groove;
        border-left: none;
    }

    .shiftOut {
        transform: translate(-85%, -50%);
        background-color: var(--background-transparent);
        z-index: 1 !important;
    }

    .shiftBack {
        transform: translate(0%, -50%);
        background-color: var(--backgroundDark);
        z-index: 5 !important;
    }

    .nav-item {
        padding: 0.13rem 1rem 0.13rem 0rem;
        text-align: left;
        list-style: '- ' inside;
        border: none;
        border-bottom: 1px solid var(--text-color);
    }

    .nav-item:last-child {
        border-bottom: none;
    }
}
</style>