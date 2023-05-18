<template>
    <div>
        <label :for="props.name" class="q-label">{{props.question}}</label><br />
        <select :name="props.name" :id="props.name" class="q" v-model="countrySelected">
            <option disabled value="">Please select your country</option>
            <option v-for="country in countries" :value="country">{{country}}</option>
        </select>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let props = defineProps(['content', 'name', 'question']);
let countries = ref(props.content);
let countrySelected = ref("Please select your country");

</script>

<style scoped>

</style>