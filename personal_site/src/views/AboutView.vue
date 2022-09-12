<script setup>
import Globe from '../components/Globe.vue';
import Profile from '../components/Profile.vue';
</script>

<template>
  <Globe />
  <section class="section z3 bg-black-transparent-0p3">
    <h1 class="main-title mb0">About Me</h1>
    <h2 class="subsubtitle text-centre no-decoration">A Resume Profile</h2>

    <div class="profile-pic-container"><img class="profile-pic" src="../assets/profile-pic.jpg"></div>

    <Profile class="inset" />
  </section>
</template>

<style>
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

.inset {
  margin: 0px 2rem;
}
</style>
