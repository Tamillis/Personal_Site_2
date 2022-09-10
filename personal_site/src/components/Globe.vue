<template>
    <div id="globe-canvas"></div>
</template>

<script setup>
import * as THREE from 'three';
import { onMounted } from 'vue';

let proportionOfWindow, viewWidth;
setViewPort();

let renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(viewWidth, viewWidth);
renderer.setClearColor(0xffffff, 0);

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

let gmtry = new THREE.SphereGeometry(1, 32, 32);
let mat = new THREE.MeshPhongMaterial();
mat.map = new THREE.TextureLoader().load("src/assets/globe_assets/earthmap1kwithcountries.jpg");
mat.bumpMap = new THREE.TextureLoader().load("src/assets/globe_assets/earthbump1k.jpg");
mat.bumpScale = 0.5;
mat.specularMap = new THREE.TextureLoader().load("src/assets/globe_assets/earthspec1k.jpg");
mat.specular = new THREE.Color("grey");

let earth = new THREE.Mesh(gmtry, mat);
scene.add(earth);

let light = new THREE.DirectionalLight(0xFDEECD, 1);
light.position.set(1, 1, 1);
scene.add(light);

let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.2);
scene.add(ambientLight);

camera.position.z = 3;

//variables to control the rotation of the earth object
let tilt = Math.PI / 6; //x axis tilt
let rotation = 0;   //y rotation

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    earth.rotation.copy(new THREE.Euler(tilt, rotation, -tilt, 'ZXY'));

    rotation += 0.005;
}

animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    setViewPort();

    camera.updateProjectionMatrix();

    renderer.setSize(viewWidth, viewWidth);

}

function setViewPort() {
    proportionOfWindow = 0.6;
    if (window.innerWidth > 1280) viewWidth = 1280 * proportionOfWindow;
    else viewWidth = window.innerWidth * proportionOfWindow;
}

onMounted(() => {
    document.getElementById("globe-canvas").append(renderer.domElement)
})

</script>

<style scoped>
#globe-canvas {

    position: fixed;
    display: inline;

    width: 33vw;
    height: 33vw;
    top: 0px;
    right: 0px;

    padding: 0px 2px;
    margin: 0px;
    border: none;

}
</style>