<template>
	<h2>
		Racial Powers: <span>{{ selectedPowers ? selectedPowers.join(", ") : '' }}</span>
	</h2>
	<p v-if="props.chosenPowers.length < props.limit" style="color:orangered">Please choose {{ props.limit }} Racial Powers.</p>
	<div class="cards">
		<CardContainer
			v-for="power in racialPowers"
			:name="power.name"
			:class="{ highlight: selectedPowers.includes(power.name) }"
			:expanded="selectedPowers.includes(power.name)"
			@chosen="chosenPower"
		>
			<PowerContent :power="power" />
		</CardContainer>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import CardContainer from "./CardContainer.vue";
import PowerContent from "./PowerContent.vue";
import powers from '../../assets/pedd/pedd-powers.json';

const props = defineProps(["chosenPowers", "race", "limit"]);
const emits = defineEmits(["chosen"]);

const selectedPowers = ref(props.chosenPowers ? props.chosenPowers : []);

//race
let racialPowers = computed(() => powers.filter(p => p.tag.includes("racial") && p.tag.includes(props.race.toLowerCase())));

function chosenPower(power) {
	// remove power if already selected and then clicked on
	if (selectedPowers.value.includes(power)) selectedPowers.value = selectedPowers.value.filter(p => p != power);
	else {
		//push clicked on power onto list
		selectedPowers.value.push(power);
        //when at the limit, unselect last chosen power at position 0
        if(selectedPowers.value.length > props.limit) selectedPowers.value = selectedPowers.value.slice(1);
    }
	emits("chosen", selectedPowers.value);
}
</script>

<style lang="css" scoped></style>
