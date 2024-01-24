<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title">Survey</h1>
        <h2 class="subtitle">WIP</h2>
        <p>Respond to the survey and see everyone's responses <RouterLink to="/statistics">here!</RouterLink></p>
        
        <p>This was a short demonstration built with React, used to build a survey page, check the input for errors and malicious input, and send it on to the API found at /surveydata .</p>
        <p>It, however, needed to be rebuilt from the ground up in Vue because making a react App work inside of a Vite build vue project was too much of an arse.</p>
        
        <Suspense>
          <SurveyForm/>
        </Suspense>
        
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import SurveyForm from '../components/Survey/SurveyForm.vue';

// ON SUBMIT make post fetch to ./surveydata endpoint, where a php script will handle it :3
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