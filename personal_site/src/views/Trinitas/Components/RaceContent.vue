<template>
	<div>
		<h2>{{ race.name }}</h2>

		<div v-html="marked.parse(race.desc ?? '')"></div>

		<div class="flex gap">
			<div>
				<h4>Stat Boons:</h4>
				<ul>
					<li v-for="(stat) in race.recommendedStatBoons">
						<p style="margin: 0">{{ stat }}</p>
					</li>
				</ul>
			</div>
			<div>
				<h4>Stat Malus</h4>
				<ul>
					<li>{{ race.recommendedStatMalus }}</li>
				</ul>
			</div>
		</div>

		<div v-if="Array.isArray(race.size)">
			<h4>Sizes:</h4>
			<ul>
				<li v-for="size of race.size">{{ size }}</li>
			</ul>
		</div>
		<p v-else><strong>Size:</strong> {{ race.size }}</p>

		<div class="flex gap">
			<div v-for="(desc, rf) in race.racialFeatures" class="">
				<h4>{{ format(rf) }}:</h4>
				<div v-html="marked.parse(desc ?? '')"></div>
			</div>
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
