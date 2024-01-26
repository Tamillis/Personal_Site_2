<template>
    <div>
        <p>{{ props.question }}</p>
        <div v-for="(value, index) in props.content">

            <input type="radio" :id="'radio-q-' + index" :name="props.name" :value="value"
                :checked="index === 0 ? true : null" class="radioQ" />
            <label :for="'radio-q-' + index" class="radioQ-label">{{ value }}</label>

        </div>

    </div>
</template>
<script setup>
let props = defineProps(["name", "content", "question"]);
</script>
<style></style>