<template>
  <section id="terminal-section" class="section no-border no-bg" style="min-height:80vh">
    <div id="terminal-canvas"></div>
  </section>
  
  <Marquee />
</template>

<script setup>
import Marquee from '../components/Marquee.vue'
import p5 from 'p5'
import { onMounted, onBeforeUnmount } from 'vue'

//make terminal interaction integral to site navigation?
onMounted(() => {
  new p5(terminalSketch, "terminal-canvas");
});

onBeforeUnmount(() => {
  //this code is written due a weird bug where the p5js canvas remains but empty, and only on the production build
  let canvases = document.getElementById('terminal-canvas').childNodes;
  for(let el of canvases) el.remove();
});

const terminalSketch = t => {

  //currently using var for global variables, probably bad practice. sorry.
  var textContent = "This is filler"
  const backgroundColour = "#111";

  //variables that control the appearance of the text
  const framesPerUpdate = 5;
  const framesPerBlinkCycle = 42;
  var curMsgLen = 0;
  var blinkOn = true;
  var blinks = 0; //number of blinks since message started
  const blinksPerCycle = 6;

  //a container for all the text properties, t for text
  var text = {
    color: "#008f11",
    size: 42,
    font: "IBMPlexMono-Regular"
  }

  //the script is a line by line string array, as loaded in line by line
  var script;
  //and the current index of that script
  var scriptIndex = 0;

  //the cut off for which lines are part of the start sequence and 
  //the later lines which should be displayed at random
  let cutoff = 5;

  //the current line of the script
  var curLine = "Default text";

  t.preload = function () {
    t.font = t.loadFont("src/assets/terminal/IBMPlexMono-Regular.ttf");

    //load the text into the file
    script = t.loadStrings("src/assets/terminal/messages.txt");
  }

  t.setup = function () {
    //set p5js canvas to desired canvas element
    let [w, h] = t.getDims();
    t.createCanvas(w, h);

    //set default text properties using global t obj, use push pop elsewhere if necessary
    t.textSize(text.size);
    t.textFont(text.font);
    t.fill(t.color(text.color));

    //set initial script line to first line in file
    curLine = script[0];
  }

  t.draw = function () {
    t.background(t.color(backgroundColour));

    //generate current text content (textContent) based on animation state and current script line
    textContent = getTextContent();

    //dynamic text size, either the default size or 16 characters wide (maybe?)
    let correctedTextSize = t.min(text.size, t.width / 16);
    t.textSize(correctedTextSize);

    //display that text in a wrapped box
    //for ease of editing set a margin variable
    let margin = correctedTextSize / 2;
    t.text(textContent, margin, margin, t.width - margin, t.height - margin)
  }

  function updateScriptIndex() {
    /*
    this logic may not be intuitive, but the first X lines of the script
    are fixed and should always be displayed in order.
    
    After those X lines the following lines are displayed at random,
    cycling infinitely
    */

    //check if the current scriptIndex is above the cutoff
    //and assign it a new index
    if (scriptIndex >= cutoff) scriptIndex = getNewIndex(scriptIndex);
    //otherwise increment
    else scriptIndex++;

    //and set the curLine to the line at the new index
    curLine = script[scriptIndex];
  }

  function getNewIndex(currIndex) {
    //assign a random index up to the script array length

    let newIndex = t.floor(t.random(cutoff, script.length));

    //unless that index is the previous one, recall the function
    if (newIndex == currIndex) {
      getNewIndex(currIndex);
    }
    return newIndex;
  }

  function getTextContent() {
    let msg = "";

    //let the message equal the slice of the current script line up to the current msg length curMsgLen
    msg = curLine.slice(0, curMsgLen);

    //if there have been enough frames for a message update, 
    //and the current message length isnt longer than the current message line
    if (t.frameCount % framesPerUpdate == 0 && curMsgLen < curLine.length) curMsgLen++;
    else if (blinks > blinksPerCycle) {
      //reset curMsgLen and blinks
      curMsgLen = 0;
      blinks = 0;
      //update script index
      updateScriptIndex();
    }

    //if there have been enough frames for half a blink cycle
    //(i.e. so that for one cycle, its half on and half off)
    if (t.frameCount % (framesPerBlinkCycle / 2) == 0) {

      if (blinkOn) {
        if (curMsgLen >= curLine.length) blinks++;
        blinkOn = false;
      }
      else blinkOn = true;
    }

    if (blinkOn) msg = msg + String.fromCharCode(0x2588);

    return msg;
  }

  t.windowResized = function () {
    let [newW, newH] = t.getDims();
    t.resizeCanvas(newW, newH);
  }

  t.getDims = function () {
    let container = document.getElementById("terminal-canvas");
    let w = t.min(container.offsetWidth * 0.8, 800);
    let h = t.max(container.offsetHeight * 0.3, 300);
    return [w, h];
  }
};
</script>

<style lang="css">
#terminal-canvas canvas {
  display: block;
  width: 100%;
  margin: 2em auto;
  border: 4px var(--highlight) groove;
  border-radius: 25px 0px 25px 0px;
}
</style>