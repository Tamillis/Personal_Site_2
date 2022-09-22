<template>
    <div class="section bg-black-transparent-0p3">
        <div class="main-text inset">
            <div id="wiki-page"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { putMdinElement } from '../assets/functionality';

const basepath = '/src/assets/wiki/'
const route = useRoute();
//setup this page to yoink the md filepath from the route parameter
onMounted(() => {
    let filepath = basepath + route.params.file.join("/") + ".md";
    putMdinElement(filepath, "wiki-page")
});
</script>

<style lang="css">
#wiki-page h1 {
    text-align: center;
    font-size: var(--main-title-size);
}

#wiki-page h2 {
    font-size: var(--subtitle-size);
}

#wiki-page h3 {
    font-size: var(--subsubtitle-size);
}

#wiki-page p {
    line-height: 1.2rem;
    margin-bottom: 0.33rem;
}

#wiki-page h2 {
    text-decoration: underline;
    margin: 0.5rem 0px 0.5rem 0px;
}

#wiki-page h3 {
    margin: 1rem 0px 0rem 0rem;
    text-decoration: underline;
}

#wiki-page em {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3rem;
}

#wiki-page strong {
    font-weight: 700;
}
</style>