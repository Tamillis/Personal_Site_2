<template>
    <div class="section bg-black-transparent-0p3">
        <div id="wiki"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { putMdinElement } from '../assets/functionality';

onMounted(() => {
    putMdinElement('src/assets/wiki/wikiRoot.md', "wiki");
});
</script>

<style lang="css">
#wiki h1 {
    font-size: 5rem;
}
</style>