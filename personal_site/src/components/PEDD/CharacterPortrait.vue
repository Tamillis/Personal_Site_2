<template>
    <div>
        <img :src="imgSrc" @click="showImgSrc = !showImgSrc" alt="Character Portrait Image. Click to show URL input." title="Character Portrait image. Click to show URL input."/>
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
img {
    border-radius: 50%;
    border: 2px var(--highlight) groove;
    width: 100%;
}
</style>