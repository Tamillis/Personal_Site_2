<template>
    <div class="main-text">
        <div id="profile"></div>
    </div>
</template>

<script setup>
import { putMdinElement } from '../assets/functionality'
import { onMounted } from 'vue';

onMounted(() => {
    putMdinElement('src/assets/profile.md', 'profile');
});
</script>

<style lang="css" scoped>
#profile p {
  line-height: 1.2rem;
  margin-bottom: 0.33rem;
}

#profile h2 {
  text-decoration: underline;
  margin: 0.5rem 0px;
}

#profile h3 {
  margin: 0.5rem 0px;
}
</style>