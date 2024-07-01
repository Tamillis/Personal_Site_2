<template>
    <div :class="{'error-box': blank}">
        <label :for="props.name" class="q-label">{{props.question}}</label><br />
        <select :name="props.name" :id="props.name" class="q w-100" v-model="countrySelected">
            <option disabled value="">Please select your country</option>
            <option v-for="country in countries" :value="country">{{country}}</option>
        </select>
        <p v-if="blank" class="error-text">Please select a country</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
let props = defineProps(['content', 'name', 'question']);
let countries = ref(props.content);
let countrySelected = ref("Please select your country");

let blank = ref(true);

watch(countrySelected, () => {
    blank.value = false;
});

</script>

<style scoped>

</style>