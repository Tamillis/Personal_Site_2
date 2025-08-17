<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title cinzel" style="margin-bottom:-1rem;">Trinitas</h1>
        <h2 class="subsubtitle cinzel text-centre" style="text-indent: 0px;" v-if="subtitle">{{ subtitle }}</h2>

        <Links />

        <div class="main-text inset">
            <div id="pedd"></div>

            <slot></slot>
        </div>
    </section>
</template>

<script setup>
import { putMdinElement } from '../../../assets/functionality';
import { onMounted } from 'vue';
import Links from './Links.vue';

const props = defineProps(['md', 'subtitle']);

onMounted(() => {
    if (props.md) { putMdinElement(`/src/assets/pedd/${props.md}.md`, 'pedd') }
});

</script>

<style>
#pedd a,
#pedd a:link,
#pedd a:visited {
    text-decoration: none;
    color: var(--highlight);
    font-style: normal;
    font-weight: bold;
    overflow-wrap: break-word;
}

#pedd a:hover {
    font-style: italic;
}

#pedd blockquote {
    margin-left: var(--textindent);
    background-color: rgba(0, 0, 0, 0.3);
    width: fit-content;
    padding-right: 1.5rem;
    border-top: 2px solid var(--highlight);
    border-bottom: 2px solid var(--highlight);
}

#pedd p,
#pedd li {
    line-height: 1.2rem;
    margin-bottom: 0.33rem;
}

.cinzel,
#pedd h1,
#pedd h2,
#pedd h3 {
    font-family: "Cinzel", serif;
    font-optical-sizing: auto;
    font-style: normal;
}

#pedd h1 {
    text-align: center;
    font-size: var(--main-title-size);
}

#pedd h2 {
    font-size: var(--subtitle-size);
}

#pedd h3 {
    font-size: var(--subsubtitle-size);
    text-decoration: underline;
    margin-top: 1rem;
    margin-bottom: -0.33rem;
}

#pedd h4 {
    font-size: var(--para-size);
    font-weight: 700;
    margin-top: 0.75rem;
    margin-bottom: -0.33rem;
}

#pedd em {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3rem;
}

#pedd strong {
    font-weight: 700;
}

#pedd table {
    margin: 0.5rem auto;
}
</style>