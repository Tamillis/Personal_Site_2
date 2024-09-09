<template>
    <div class="power-content">
        <h4>Tags:</h4>
        <ul>
            <li v-for="tag in power.tag" @click="$emit('highlight', tag)"><a>{{ tag }}</a></li>
        </ul>
        <h4>Prerequisites:</h4>
        <ul>
            <li v-for="preq in power.preq">{{ preq }}</li>
        </ul>
        <div v-html="marked.parse(power.desc)" class="list-circles"></div>
    </div>
</template>

<script setup>
import { marked } from 'marked';
const props = defineProps({ power: Object });
</script>

<style lang="css">
*.power-content ul {
    display: flex;
    flex-wrap: wrap;
}

*.power-content ul li {
    width: fit-content;
    padding: 0px 0.5rem;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

*.list-circles li {
    list-style: circle !important;
}

*.power-content a,
*.power-content a:link,
*.power-content a:visited {
    text-decoration: none;
    color: var(--text-color);
    font-style: normal;
    font-weight: bold;
    overflow-wrap: break-word;
}

*.power-content a:hover {
    font-style: italic;
}

*.power-content blockquote {
    margin-left: var(--textindent);
    background-color: rgba(0, 0, 0, 0.3);
    width: fit-content;
    padding-right: 1.5rem;
    border-top: 2px solid var(--highlight);
    border-bottom: 2px solid var(--highlight);
}

*.power-content p {
    line-height: 1.2rem;
    margin-bottom: 0.33rem;
}

*.power-content h1 {
    text-align: center;
    font-size: var(--main-title-size);
}

*.power-content h2 {
    font-size: var(--subtitle-size);
}

*.power-content h3 {
    font-size: var(--subsubtitle-size);
    text-decoration: underline;
    margin-top: 1rem;
    margin-bottom: -0.33rem;
}

*.power-content h4 {
    font-size: var(--para-size);
    font-weight: 700;
    margin-top: 0.75rem;
    margin-bottom: -0.33rem;
}

*.power-content em {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3rem;
}

*.power-content strong {
    font-weight: 700;
}

*.power-content table {
    margin: 0.5rem auto;
}
</style>