<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title">Survey Statistics</h1>
        <p class="subtitle">WIP</p>
        <p id="descr" class="">This page is built using plotly.js. Below is a dynamic display for each set of data.</p>

        <button @click="showGraph = !showGraph" class="btn mx-auto mt-gap">Show {{ showGraph ? "Handles" : "Graphs" }}</button>
        <div id="graph-wrapper" v-show="showGraph">

            <p class="subsubtitle">Original Question</p>

            <div class="graph-container">
                <div id="graph"></div>
            </div>
            <!-- TODO: create a proper selection interface -->
            <button @click="nextGraph()" class="btn">Next</button>
            <p id="expText">Explanation Text Here</p>
        </div>
        <div id="handle-canvas-wrapper" v-show="!showGraph">
            <div class="subsubtitle">
                <p>Handle Glyphs</p>
            </div>
            <div class="graph-container">
                <div id="handles-canvas"></div>
            </div>

            <p>The handles of everyone in the database, drawn using P5JS using my very own pseudo-logographic script. Hover over them to see
                the original Handle.</p>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue';

let showGraph = ref(true);

// ONLOAD, fetch database data via simple php get script

function nextGraph() {
    alert("Go to next graph");
}
</script>

<style scoped>
.graph-container {
    height: 70vh;
    width: 80vw;
    padding: 0px;
    margin: 10px auto;

    outline: #41b883 4px groove;
}

@media (min-width: 700px) {
    .graph-container {
        width: 600px;
    }
}

#graph {
    width: 100%;
    height: 100%;
}

#handles-canvas {
    width: 100%;
    height: 100%;
    margin: none !important;
    padding: none !important;
    border: blue 1px solid;
}

#handles-canvas>canvas {
    width: 100%;
    height: 100%;
    margin: none !important;
    padding: none !important;
    border: red 1px solid;
}
</style>