<template>
    <div class="flex">
        <div>
            <label for="character-name">Character Name: </label>
            <input id="character-name" class="text-entry" placeholder="..." :value="chosen.name"
                @input="$emit('name')" />
        </div>
        <div class="flex-grow">
            <label for="character-concept">Character Concept: </label>
            <input id="character-concept" class="text-entry" placeholder="..."  :value="chosen.concept"
                @input="$emit('concept')" />
        </div>
    </div>
    <div class="flex-col justify-around gap-1r w-100">
        <div class="w-100">
            <label for="character-bonds">Bond/s: </label>
            <textarea id="character-bonds" class="text-entry" placeholder="..." :value="chosen.bonds" @input="$emit('bonds', chosen.bonds)">{{chosen.bonds}}</textarea>
        </div>
        <div class="w-100">
            <label for="character-ideals">Ideal/s: </label>
            <textarea id="character-ideals" class="text-entry" placeholder="..." :value="chosen.ideals" @input="$emit('ideals', chosen.ideals)">{{chosen.ideals}}</textarea>
        </div>
        <div class="w-100">
            <label for="character-flaws">Flaw/s: </label>
            <textarea id="character-flaws" class="text-entry" placeholder="..." :value="chosen.flaws" @input="$emit('flaws', chosen.flaws)">{{chosen.flaws}}</textarea>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["chosen"]);
const emits = defineEmits(["name", "concept", "bonds", "ideals", "flaws"]);
</script>

<style lang="css" scoped>
label {
    text-indent: 0px;
}
input, textarea {
	color: var(--text-color);
	background-color: var(--background);
}
</style>