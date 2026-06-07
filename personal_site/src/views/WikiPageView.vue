<template>
    <TooltipContainer v-if="!isMobile()" ref="tooltips" />
    <div class="section">
        <div class="main-text inset">
            <li class="triangle-points-reverse back-link">
                <RouterLink class="intext-link" to="/mewiki">Back</RouterLink>
            </li>
            <div id="wiki-page" ref="wikiPage"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import TooltipContainer from '../components/TooltipContainer.vue';
import { useHighlighter } from '@/composables/useHighlighter';
import { marked } from 'marked';
import { isMobile } from '../assets/functionality.js';

const wikiPage = ref(null);
const tooltips = ref(null);
const route = useRoute();

const putMdinElement = async (path, elementId) => {

    document.getElementById(elementId)
    window.dispatchEvent(MarkedDone);
};

onMounted(async () => {
    const filepath = '/mewiki/' + route.params.file.join('/') + '.md';
    const content = await (await fetch(filepath)).text();
    useHighlighter(wikiPage.value, content,
        (key, e) => tooltips.value.scheduleOpen(key, e, 0), // OnHover
        () => tooltips.value.clearPending()                 // OnLeave
    )
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

#wiki-page h4 {
    font-size: var(--para-size);
    font-weight: 700;
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

.img-wrap img {
    border: 4px groove var(--color-highlight);
    width: 100%;
}

.img-wrap {
    margin: 0px auto;
    text-indent: 0px;
    width: 100%;
    padding-top: 1em;
}

.back-link {
    z-index: 2;
    margin-bottom: -1rem;
}
</style>