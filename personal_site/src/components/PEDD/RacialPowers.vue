<template>
	<h2>
		Racial Powers: <span>{{ selectedPowers.join(", ") }}</span>
	</h2>
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
import { ref } from "vue";
import CardContainer from "./CardContainer.vue";
import PowerContent from "./PowerContent.vue";

const props = defineProps(["racialPowers", "chosenPowers", "race"]);
const emits = defineEmits(["chosen"]);

const selectedPowers = ref(props.chosenPowers);

function chosenPower(power) {
    let limit = props.race == "Half-Elf" || props.race == "Tuskman" ? 3 : 2;
	if (selectedPowers.value.includes(power)) selectedPowers.value = selectedPowers.value.filter(p => p != power);
	else {
        //when at the limit, cannot choose more
        if(selectedPowers.value.length < limit) selectedPowers.value.push(power);
    }
	emits("chosen", selectedPowers.value);
}
</script>

<style lang="css" scoped></style>
