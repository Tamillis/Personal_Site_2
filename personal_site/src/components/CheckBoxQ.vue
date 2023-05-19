<template>
    <div>
        <p>{{props.question}}</p>
        <div v-for="dndClass in props.content">
            <input type="checkbox" :id="dndClass" name="class" :value="dndClass" v-model="classes" class="checkBoxQ" />
            <label :for="dndClass" class="q-label">{{dndClass}}</label>
        </div>
    </div>
</template>

<script setup>
import {ref, watch} from 'vue';

const multiClassLimit = 3;
let props = defineProps(["question", "content", "name"]);
let classes = ref([props.content[4]]); //sets default selection to 'Fighter' as well

watch(classes, (newClasses, oldClasses) => {   
    if (newClasses.length > multiClassLimit || newClasses.length < 1) {
        classes.value = oldClasses;
    }
    else classes.value = newClasses;
});
</script>

<style lang="css" scoped>

</style>