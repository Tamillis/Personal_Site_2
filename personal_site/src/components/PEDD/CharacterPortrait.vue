<template>
    <div class="container">
        <img :src="imgSrc" :class="{square: (imgSrc == '')}" @click="showImgSrc = !showImgSrc" alt="Character Portrait Image. Click to show URL input." title="Character Portrait image. Click to show URL input."/>
        <input v-show="showImgSrc" id="img-src-input" @change="update" :value="imgSrc" class="text-entry" />
    </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps(['imgSrc'])
const emits = defineEmits(['updateImgSrc']);
const showImgSrc = ref(false);
const imgSrc = ref(props.imgSrc);

function update(e) {
    let newImgSrc = e.target.value;
    console.log()
    imgSrc.value = newImgSrc;
    emits('updateImgSrc', newImgSrc);
}

</script>

<style lang="css" scoped>
img, input, .container {
    text-indent: 0;
}

input {
    margin: 0.5rem;
}

img {
    border-radius: 50%;
    border: 2px var(--highlight) groove;
    width: 100%;
    text-indent: 0;
}

.square {
    display: block;
    aspect-ratio: 1 / 1;
    font-size: 1em;
    text-align: center;
    padding-top: calc(50% - 1em);
}
</style>