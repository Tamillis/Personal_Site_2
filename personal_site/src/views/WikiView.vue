<template>
    <div class="section bg-black-transparent-0p3">
        <div id="wiki"></div>
    </div>
</template>

<script setup>
import { marked } from 'marked';
import { onMounted } from 'vue';

const getMd = async (path, elementId) => {
    let res = await fetch(path);
    let content = await res.text();
    document.getElementById(elementId).innerHTML = marked.parse(content);
}

onMounted(() => {
    getMd('src/assets/wiki/wikiRoot.md', "wiki");
});

</script>

<style lang="css">
#wiki h1 {
    font-size: 5rem;
}
</style>