<script setup>
import Globe from '../components/Globe.vue';
import { putMdinElement } from '../assets/functionality'
import { onMounted } from 'vue';

onMounted(() => {
    putMdinElement('src/assets/articles/profile.md', 'profile');
});
</script>

<template>
  <Globe />
  <section class="section bg-black-transparent-0p3">
    <h1 class="main-title mb0">About Me</h1>
    <h2 class="subsubtitle text-centre no-decoration">A Resume Profile</h2>

    <div class="profile-pic-container"><img class="profile-pic" src="../assets/profile-pic.jpg"></div>

    <div id="profile" class="inset main-text"></div>

  </section>
</template>

<style scoped>
.profile-pic {
  width: 70vw;
  height: 70vw;
  border-radius: 50%;
  border: 2px var(--highlight) groove;
}

@media screen and (min-width: 600px) {
  .profile-pic {
    width: 300px;
    height: 300px;
  }
}

.profile-pic-container {
  display: flex;
  justify-content: center;
}

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
