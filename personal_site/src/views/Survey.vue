<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title">Survey</h1>
        <h2 class="subtitle">WIP</h2>
        <p>Respond to the survey and see everyone's responses <RouterLink to="/statistics">here!</RouterLink></p>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';

// ON SUBMIT fetch php post script, push new data to database
</script>

<style scoped>
a,
a:link,
a:visited {
  text-decoration: none;
  color: var(--text-color);
  font-style: normal;
  font-weight: bold;
  overflow-wrap: break-word;
}

a:hover {
  font-style: italic;
}
</style>