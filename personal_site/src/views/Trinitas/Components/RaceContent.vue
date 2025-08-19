<template>
	<div>
		<h4>Description:</h4>
		<p>{{ race.desc }}</p>
		<h4>Stats:</h4>
		<ul>
			<li v-for="(stat) in race.stats.filter(s => s.desc != 'Any')">
				<p style="margin: 0">
					{{ stat.desc }} <span>{{ stat.val >= 0 ? "+" + stat.val : stat.val }}</span>
				</p>
			</li>
			<li v-for="(stat, i) in currentAnyStats">
				<AnyStatSelector :val="stat.val" :initialStat="stat.desc" @stat-chosen="chosenStat => anyStatChosen(chosenStat, stat.val, i)" />
			</li>
		</ul>
		<h4>Age:</h4>
		<div v-html="marked.parse(race.age)"></div>
		<h4>Size:</h4>
		<div v-if="Array.isArray(race.size)">
			<div v-for="size in race.size" class="flex align-centre pl-r gap">
				<input type="radio" name="raceSize" :value="size.val" class="radioQ">
				<p style="text-indent: 0px;">{{ size.desc }}</p>
			</div>
		</div>
		<div v-else v-html="marked.parse(race.size.desc)"></div>
		<h4>Speed:</h4>
		<div v-html="marked.parse(race.speed.desc)"></div>
		<div v-for="extra in extras">
			<h4>{{ format(extra) }}:</h4>
			<div v-html="marked.parse(race[extra])"></div>
		</div>
	</div>
</template>

<script setup>
import { marked } from "marked";
import { format } from "../../../assets/functionality";
import { ref } from "vue";
import AnyStatSelector from "./AnyStatSelector.vue";

const props = defineProps(["race", "chosenAnyStats"]);
const emit = defineEmits(["selectedStats"]);

let standardHeadings = ["name", "desc", "stats", "baseHealth", "age", "size", "speed", "senses", "powers"];

let extras = Object.keys(props.race).filter(key => !standardHeadings.includes(key));
console.log(extras);
//chosenAnyStats of the form [{desc, val},{desc,val}...] ... defaults will be passed in.
const currentAnyStats = ref(props.chosenAnyStats ? props.chosenAnyStats : props.race.stats.filter(stat => stat.desc == "Any"));

function anyStatChosen(stat, val, n) {
	currentAnyStats.value[n] = { desc: stat, val: val };

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
	flex-basis: unset;
}

h4,
strong {
	font-weight: bold;
}
</style>
