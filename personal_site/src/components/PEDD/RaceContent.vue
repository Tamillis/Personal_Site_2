<template>
	<div>
		<h4>Description:</h4>
		<p>{{ race.desc }}</p>
		<h4>Stats:</h4>
		<ul>
			<li v-for="(stat) in race.stats">
				<AnyStatSelector v-if="stat.desc == 'Any'" :val="stat.val" @stat-chosen="chosenStat => anyStatChosen(chosenStat, stat.val)" />
				<p v-else style="margin: 0">
					{{ stat.desc }} <span>{{ stat.val >= 0 ? "+" + stat.val : stat.val }}</span>
				</p>
			</li>
		</ul>
		<h4>
			Base Health: <span>{{ race.baseHealth }}</span>
		</h4>
		<h4>Age:</h4>
		<div v-html="marked.parse(race.age)"></div>
		<h4>Size:</h4>
		<div v-html="marked.parse(race.size.desc)"></div>
		<h4>Speed:</h4>
		<div v-html="marked.parse(race.speed.desc)"></div>
		<h4>Senses:</h4>
		<div v-html="marked.parse(race.senses.desc)"></div>
		<div v-for="extra in extras">
			<h4>{{ format(extra) }}:</h4>
			<div v-html="marked.parse(race[extra])"></div>
		</div>
	</div>
</template>

<script setup>
import { marked } from "marked";
import { format } from "../../assets/functionality";
import { ref } from "vue";
import AnyStatSelector from "./AnyStatSelector.vue";

const props = defineProps(["race", "chosenAnyStats"]);
const emit = defineEmits(["selectedStats"]);

let standardHeadings = ["name", "desc", "stats", "baseHealth", "age", "size", "speed", "senses", "powers"];

let extras = Object.keys(props.race).filter(key => !standardHeadings.includes(key));

//chosenAnyStats of the form [{desc, val},{desc,val}...]
//TODO: How to pass this down to the AnyStatSelector, can be just overriden on the way out, as different races have different numbers of any stats
const currentAnyStats = ref(props.chosenAnyStats ? props.chosenAnyStats : {});

function anyStatChosen(n, stat, val) {
	currentAnyStats.value.push({ desc: stat, val: val });

	emit("selectedStats", currentAnyStats.value);
}
</script>

<style lang="css" scoped>
ul {
	display: flex;
	flex-wrap: wrap;
}

ul li {
	width: fit-content;
	padding: 0px 0.5rem;
	margin: 0;
	text-decoration: none;
	list-style: none;
}

h4,
strong {
	font-weight: bold;
}
</style>
