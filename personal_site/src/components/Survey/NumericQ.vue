<template>
    <div>
        <label :for="props.name" class="q-label">{{props.question}}</label><br />
        <input :name="props.name" :id="props.name" v-model="age" class="q w-fit" @beforeinput="before" @input.prevent="handleInput" />
    </div>
</template>

<script setup>
import {ref} from 'vue';
let props = defineProps(["name", "question"]);
let age = ref(0);
let oldAge = 0;

function before() {
    oldAge = age.value;
}

function handleInput(event) {
    //check the input is valid, if not switch conditional flag and set error message
    let newAge = event.target.value;

    //return out of non-numbers
    if (/\D/g.test(newAge)) {
        age.value = oldAge;
        return;
    }
    //whole numbers only
    newAge = Math.floor(newAge);
    //0 is minimum, 122 is maximum
    if (newAge < 0 || newAge > 999) {
        age.value = oldAge;
        return;
    }

    age.value = newAge;
}
</script>
<style lang="">
    
</style>