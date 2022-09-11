<template>
    <div class="marquee-wrapper">
        <div class="marquee">
            <p class="main-text banner-text-p"></p>
            <p class="main-text banner-text-p"></p>
            <p class="main-text banner-text-p"></p>
        </div>
    </div>
</template>

<script setup>
import {onMounted} from 'vue'

//a demonstration of async await functionality
//the text for the marquee banner, which needs to be repeated to prevent
//odd behaviour on wide screens, is pulled and filled into the three p elements automatically
async function getText() {
    let text = await fetch("src/assets/banner-text.txt").then(response => response.text());
    let marqueePs = document.getElementsByClassName("banner-text-p")
    for(let p of marqueePs) {
        p.innerHTML = text;
    }
}

onMounted(() => {
    getText()
});
</script>

<style lang="css" scoped>
.marquee-wrapper {
    max-width: 60%;

    margin: 0px 20%;

    overflow: hidden;

    border-left: 2px groove var(--color);
    border-right: 2px groove var(--color);
}

.marquee {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: marquee 15s linear infinite;
}

.marquee p {
    display: inline-block;
    font-size: 1.25em;
    font-style: italic;
}
@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-33.334%, 0, 0);
  }
}
</style>