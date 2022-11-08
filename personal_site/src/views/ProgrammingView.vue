<template>
    <section class="section bg-black-transparent-0p3">
        <h1 class="main-title">Programming</h1>
        <h2 class="subtitle">My programming adventure</h2>
        <div class="main-text">
            <p>
                Over the years I've dabbled in various programming languages and environments. For me it started back in
                sixth-form where I took my first Computing class that used BASIC as its language of instruction
                and I was welcomed into the wonderful world of computer programming. Within I
                learned first to make my form fullscreen and flash random colours. It’s been my way of saying Hello World
                ever since.<br><br>
                These days I instruct others in how to use C# from near-zero up to business level tools of ASP.NET and Entity Framework, but I can’t say I’m an "industry expert" at it or any of the languages I use, I’ll let you be the judge of that. In addition to C#, I have
                managed to drag myself to a level of familiarity with JavaScript (including React and Vue, which this site is built in), as well as Python, Java, C++, HLSL and PHP.
                Technically languages, though I don't personally count them as such, I also taught myself HTML and CSS.<br><br>
                Below you will find iframes of some sketches written in the handy library of P5JS, as they're easy to demo and its the library I really learned JavaScript, and relearned programming, in after coming back to it during my long hiatus as a teacher. I’m afraid my old PyGame ventures in python2
                from 16 year old me are lost to the void. Thankfully, haha.<br><br>
                Anyway, here’s a showcase, if you want to take a peak at any of the code open up the P5JS programs in a
                new tab and take a look at the online editor there. Everything is on show. If you have any other questions
                please feel free to contact me.
            </p>
        </div>

        <hr class="rule">

        <h2 class="subtitle">Randomly Coloring Tiles</h2>
        <p class="main-text">As noted, my first foray into something nearly always involves filling the screen with
            random
            colours. Like this.</p>

        <button type="button" class="btn centre" id="randomly-coloring-tiles-btn"
            @click="toggleIframe('randomly-coloring-tiles', 'https://preview.p5js.org/Tamillis/embed/Os9tzE3r-')">Open</button>
        <div class="wrap" id="randomly-coloring-tiles"></div>

        <h2 class="subtitle">Smokey Wanderer</h2>
        <p class="main-text">This was another of the first forays into JavaScript, this time primarily to familiarise
            myself
            with array functions and make something pretty. Click to pause.</p>
        <button type="button" class="btn centre" id="smokey-wanderer-btn"
            @click="toggleIframe('smokey-wanderer', 'https://preview.p5js.org/Tamillis/embed/EJ8E8twVF')">Open</button>
        <div class="wrap" id="smokey-wanderer"></div>

        <h2 class="subtitle">Boids</h2>
        <p class="main-text">Following along with Daniel Schiffman's videos I decided to implement the flocking
            algorithm,
            setting this up. It also makes use of DOM elements generated from inside the script that dynamically effect
            the
            simulation. Also they flee the mouse, which I thought was cute.</p>
        <button type="button" class="btn centre" id="boids-btn"
            @click="toggleIframe('boids', 'https://preview.p5js.org/Tamillis/embed/_zCa9LADT')">Open</button>
        <div class="wrap" id="boids"></div>

        <h2 class="subtitle">Continent Generator</h2>
        <p class="main-text">One of these days I will get around to a full world generating program or, perhaps, some
            kind
            of zero player simulator of agents on a tiled world. For now, I busied myself with this generator that
            randomly
            creates continents using voronoi cells with a randomised distance function. Left and right arrow keys allow
            scrolling, to show that it is left-right wrappable. Click to generate a new set.</p>
        <button type="button" class="btn centre" id="continent-generator-btn"
            @click="toggleIframe('continent-generator', 'https://preview.p5js.org/Tamillis/embed/6j5IixBqc')">Open</button>
        <div class="wrap" id="continent-generator"></div>

        <h2 class="subtitle">Conways Life</h2>
        <p class="main-text">I love Conway's Life, so it was only a matter of time before I made it in P5JS. Here is
            that
            implementation. It also allows users to draw in new cells. P for pause and N for new set.</p>
        <button type="button" class="btn centre" id="conways-life-btn"
            @click="toggleIframe('conways-life', 'https://preview.p5js.org/Tamillis/embed/_f0BjwSbT')">Open</button>
        <div class="wrap" id="conways-life"></div>

        <h2 class="subtitle">No Overlap</h2>
        <p class="main-text">This particular sketch started as an attempt to explain recursion to a friend, and
            eventually
            into a packing algorithm challenge to myself, could I make one in less than the hour that I had before
            heading to
            work?<br>
            Of course not, but I did get the bulk of it done, and I polished it up to the state seen within the same
            day. Keep
            clicking and the balls will get smaller. It's probably my only properly commented program, haha.</p>
        <button type="button" class="btn centre" id="no-overlap-btn"
            @click="toggleIframe('no-overlap', 'https://preview.p5js.org/Tamillis/embed/jE5l0FIlz')">Open</button>
        <div class="wrap" id="no-overlap"></div>

        <h2 class="subtitle">Growth by random particles</h2>
        <p class="main-text">This sketch was an idle moment where I wanted to explore an algorithm idea I had, to see what structures it would organically form.
            It starts with a single fixed particle at the bottom of the screen, and any particle that touches it "sticks", itself becoming collidable. These interesting branches form quite naturally.
        </p>
        <button type="button" class="btn centre" id="random-growth-btn"
            @click="toggleIframe('random-growth', 'https://preview.p5js.org/Tamillis/embed/qwEB2PNNO')">Open</button>
        <div class="wrap" id="random-growth" ></div>
    </section>
</template>

<script setup>
//function to create an iframe at the specified divID on click or destroy it otherwise.
//thatll make it load properly without lagging everything to buggery
function toggleIframe(divId, iframeSrc) {
    const container = document.getElementById(divId);
    if (container.firstElementChild) {
        destroyIframe(divId);
        closeDiv(divId);
    } else {
        openDiv(divId);
        createIframeInDiv(divId, iframeSrc);
    }
}

//functions for toggling divs between block and none display, and changing the button text to boot
function openDiv(divId) {
    let div = document.getElementById(divId);
    //I've set up the HTML so that the button is the previous sibling
    let btn = document.getElementById(div.previousElementSibling.id);
    div.style.display = "block";
    btn.innerHTML = "Close";
}

function closeDiv(divId) {
    let div = document.getElementById(divId);
    //I've set up the HTML so that the button is the previous sibling
    let btn = document.getElementById(div.previousElementSibling.id);
    div.style.display = "none";
    btn.innerHTML = "Open";
}

function createIframeInDiv(divId, iframeSrc) {
    const iframe = document.createElement("iframe");
    iframe.src = iframeSrc;
    iframe.className = "frame"

    document.getElementById(divId).appendChild(iframe);
}

function destroyIframe(divId) {
    const div = document.getElementById(divId);
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
</script>

<style lang="css" scoped>

</style>