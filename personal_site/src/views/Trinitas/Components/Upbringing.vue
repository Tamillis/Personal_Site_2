<template>
	<h3>Upbringing Skills</h3>

	<div class="flex gap-1r">
		<select v-model="skill1" @change="emitUpbringing">
			<option v-for="skill in upbringingSkills.filter(s => s.skill != skill2)">
				{{ skill.skill }}
			</option>
		</select>
		<select v-model="skill2" @change="emitUpbringing">
			<option v-for="skill in upbringingSkills.filter(s => s.skill != skill1)">
				{{ skill.skill }}
			</option>
		</select>
		<div class="flex-grow">
			<p>Language (<input id="upbringing-language" class="language-input" v-model="language" @input="emitUpbringing" />)</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import skillsData from "../../../assets/pedd/pedd-skills.json";

let upbringingSkills = ref(skillsData.filter(s => !s.martial));
upbringingSkills.value.sort((s1, s2) => s1.skill.localeCompare(s2.skill));

const props = defineProps(["chosenUpbringingSkills", "chosenUpbringingLanguage"]);
const emits = defineEmits(["upbringing"]);

const skill1 = ref(props.chosenUpbringingSkills ? props.chosenUpbringingSkills[0] : upbringingSkills[0]);
const skill2 = ref(props.chosenUpbringingSkills ? props.chosenUpbringingSkills[1] : upbringingSkills[1]);
const language = ref(props.chosenUpbringingLanguage ? props.chosenUpbringingLanguage : "Common");

function emitUpbringing() {
	//collate skills and native language into a an object of the form {skill1, skill2, language}
	let upbringing = {
		skill1: skill1.value,
		skill2: skill2.value,
		language: language.value
	};
	emits("upbringing", upbringing);
}
</script>

<style lang="css" scoped>
.language-input {
    display:inline;
    color: var(--text-color);
	background-color: var(--background);
    border: none;
    appearance: none;
    outline: none;
    padding: 0.6em;
}
</style>
