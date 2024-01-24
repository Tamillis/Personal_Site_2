<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title">P.E.D.D.</h1>
        <h2 class="subsubtitle text-centre no-decoration">Character Creation</h2>

        <div class="centre width-fit">
            <input type="checkbox" id="creator" class="radioQ" @change="creatorMode = !creatorMode">
            <label for="creator" style="display:inline;"> - Character Creator Mode</label>
        </div>

        <Links />

        <div class="main-text inset">
            <div id="pedd" v-show="!creatorMode"></div>

            <CharacterCreator v-show="creatorMode" />
        </div>

    </section>
</template>
  
<script setup>
import { putMdinElement } from '../../assets/functionality';
import { onMounted, ref } from 'vue';
import Links from '../../components/PEDD/Links.vue';
import CharacterCreator from '../../components/PEDD/CharacterCreator.vue';

onMounted(() => {
    putMdinElement('../src/assets/pedd/pedd-character-creation.md', 'pedd')
});

let creatorMode = ref(false);
</script>
  
<style>
#pedd a,
#pedd a:link,
#pedd a:visited {
    text-decoration: none;
    color: var(--text-color);
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

#pedd p {
    line-height: 1.2rem;
    margin-bottom: 0.33rem;
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