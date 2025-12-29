<template>
    <div class="container">
        <img :src="imgSrc" :class="{square: (imgSrc == '')}" alt="Character Portrait Image. Click to show URL input." title="Character Portrait image. Click to show URL input."/>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps(['imgSrc']);
const imgSrc = ref(props.imgSrc);

</script>

<style lang="css" scoped>
img, .container {
    text-indent: 0;
}

img {
    border-radius: 50%;
    border: 2px var(--highlight) groove;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    text-indent: 0;
}

.square {
    display: block;
    font-size: 1em;
    text-align: center;
    padding-top: calc(50% - 1em);
}
</style>