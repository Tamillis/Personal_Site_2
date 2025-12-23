<template>
	<div>
		<h4>Description:</h4>
		<p>{{ race.desc }}</p>
		<h4>Recommended Stat Boons:</h4>
		<ul>
			<li v-for="(stat) in race.recommendedStatBoons">
				<p style="margin: 0">{{ stat }}</p>
			</li>
		</ul>
		<h4>Recommended Stat Malus</h4>
		<ul>
			<li>{{ race.recommendedStatMalus }}</li>
		</ul>
		<h4>Size:</h4>
		<div v-if="Array.isArray(race.size)">
			<ul>
				<li v-for="size of race.size">{{ size }}</li>
			</ul>
		</div>
		<div v-else v-html="marked.parse(race.size)"></div>

		<div v-for="(desc, rf) in race.racialFeatures">
			<h4>{{ format(rf) }}:</h4>
			<div v-html="marked.parse(desc ?? '')"></div>
		</div>

		<h4>Heritage Powers <small>(choose {{ race.heritages }})</small></h4>
		<ul>
			<li v-for="power of race.heritagePowers.sort()">{{ power }}</li>
		</ul>
	</div>
</template>

<script setup>
import { marked } from "marked";
import { format } from "../../../assets/functionality";

const props = defineProps(["race"]);

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
