<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title">Portfolio</h1>

        <div class="main-text inset">
            <div id="portfolio"></div>
        </div>
    </section>
</template>

<script setup>
import { putMdinElement } from '../assets/functionality';
import { onMounted } from 'vue';

onMounted(() => putMdinElement('src/assets/articles/portfolio.md', 'portfolio'));
</script>

<style>
#portfolio h2 {
    font-size: var(--subtitle-size);
}
#portfolio h3 {
    font-size: var(--subsubtitle-size);
    text-decoration: underline;
    margin-top: 1rem;
    margin-bottom: -0.33rem;
}
</style>