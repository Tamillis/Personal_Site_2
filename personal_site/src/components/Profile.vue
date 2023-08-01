<template>
    <div class="main-text">
        <div id="profile"></div>
    </div>
</template>

<script setup>
import { putMdinElement } from '../assets/functionality'
import { onMounted } from 'vue';

onMounted(() => {
    putMdinElement('src/assets/articles/profile.md', 'profile');
});
</script>

<style lang="css">
#profile p {
  line-height: 1.2rem;
  margin-bottom: 0.33rem;
}

#profile h2 {
  text-decoration: underline;
  margin: 0.5rem 0px 0px 0px;
}

#profile h3 {
  margin: 1rem 0px 0px 0px;
}

#profile em {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3rem;
}
</style>