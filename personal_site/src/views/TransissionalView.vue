<template>
    <section class="section bg-black-transparent-0p3">
        <div class="main-text inset">
            <div id="transissional"></div>
        </div>

    </section>
</template>
  
<script setup>
import { putMdinElement } from '../assets/functionality';
import { onMounted } from 'vue';

onMounted(() => putMdinElement('src/assets/articles/transissional.md', 'transissional'));
</script>
  
<style>
#transissional a,
#transissional a:link,
#transissional a:visited {
    text-decoration: none;
    color: var(--text-color);
    font-style: normal;
    font-weight: bold;
    overflow-wrap: break-word;
}

#transissional a:hover {
    font-style: italic;
}

#transissional blockquote {
    margin-left: var(--textindent);
    background-color: rgba(0, 0, 0, 0.3);
    width: fit-content;
    padding-right: 1.5rem;
    border-top: 2px solid var(--highlight);
    border-bottom: 2px solid var(--highlight);
}

#transissional p {
    line-height: 1.2rem;
    margin-bottom: 0.33rem;
}

#transissional h1 {
    text-align: center;
    font-size: var(--main-title-size);
}

#transissional h2 {
    font-size: var(--subtitle-size);
    text-align: center;
    margin: 1rem 0px;
}

#transissional h3 {
    font-size: var(--para-size);
    text-decoration: underline;
}

#transissional h4 {
    font-size: var(--para-size);
    font-weight: 700;
}

#transissional em {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3rem;
}

#transissional strong {
    font-weight: 700;
}
</style>