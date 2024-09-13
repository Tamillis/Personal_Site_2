<template>
    <h2>Background:</h2>
    <div id="backgrounds-container">
        <CardContainer v-for="(bg, i) in backgrounds" :name="bg.name" :expanded="props.background == bg.name"
            :class="{ hidden: props.background != '' && props.background != bg.name }"
            @chosen="chooseBackground(bg.name)" >
            <BackgroundContent :bg="bg" />
        </CardContainer>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import CardContainer from './CardContainer.vue';
import BackgroundContent from './BackgroundContent.vue';
import backgrounds from '../../assets/pedd/pedd-backgrounds.json'

const props = defineProps(['background']);
const emits = defineEmits(['backgroundChosen'])

const selectedBg = computed(() => {
    return props.background == '' ? false : backgrounds.filter(b => b.name == props.background)[0];
});

let chooseBackground = chosenBg => {
	if (props.background == chosenBg) {
		//clicked on open card, set chosen to false and thereby reveal all cards
		emits('backgroundChosen', false);
	} else {
		//set chosen bg
        emits('backgroundChosen', chosenBg);
	}
};

</script>

<style lang="scss" scoped></style>