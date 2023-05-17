<template>
    <div :class="{'error-box': blank}">
        <label :for="props.name" class="q-label">{{ question }}</label><br />
        <input type="text" :id="props.name" :name="props.name" v-model="name" @beforeinput="setOldName" @input.prevent="handleChange"
            class="textQ" />
        <p v-if="blank" class="error-text">Blank handles are not allowed.</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let props = defineProps(['content', 'name', 'question']);
let blank = ref(props.content === "");
let name = ref(props.content);

let oldName = name.value;

function setOldName() {
    oldName = name.value;
}

function handleChange(event) {
    let newName = event.target.value;
    //return out if not only alphanumeric or not blank
    if (onlyAlphaNumeric(newName) || newName == "") {
        blank.value = (newName === "");
        name.value = newName;
    }
    else {
        name.value = oldName;
    }
}

function onlyAlphaNumeric(string) {
    return /^[a-z0-9]+$/i.test(string);
}
</script>

<style scoped>
.q-label {
  text-indent: 0px !important;
}

.error-box {
  border: red 2px solid;
  width: fit-content;
  padding-right: 2rem;
}

.error-text {
  color: red;
  font-weight: bold;
}
</style>