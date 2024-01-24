<template>
    <div :class="{'error-box': blank}">
        <label :for="props.name" class="q-label">{{ question }}</label><br />
        <input type="text" :id="props.name" :name="props.name" v-model="name" @beforeinput="setOldName" @input.prevent="handleChange"
            class="q" />
        <p v-if="blank" class="error-text">Blank handles are not allowed.</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let props = defineProps(['content', 'name', 'question', 'unavailable']);
let blank = ref(props.content === "");
let name = ref(props.content);
let takenHandles = ref(props.unavailable);

let oldName = name.value;

function setOldName() {
    oldName = name.value;
}

function handleChange(event) {
    let newName = event.target.value;

    if ((available(newName) && onlyAlphaNumeric(newName)) || newName == "") {
        blank.value = (newName === "");
        name.value = newName;
    }
    else {
        name.value = oldName;
    }
}

function available(newName) {
    //check if handle is already present in database.

    //to prevent a database call per key press prefetch the current handles in the database on page load, and check again on submission
    return true;
}

function onlyAlphaNumeric(string) {
    return /^[a-z0-9]+$/i.test(string);
}
</script>

<style scoped>
</style>