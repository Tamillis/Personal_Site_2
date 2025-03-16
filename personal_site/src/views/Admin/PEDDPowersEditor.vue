<template>
    <div class="border p-r">
        <h2>PEDD Powers Editor</h2>

        <form id="pedd-power-form" class="main-text">
                <h3 class=""><span id="subtitle">New</span> Power</h3>
                <div class="mb-gap flex">
                    <label for="name" class="q-label">Name</label>
                    <input type="text" id="name" name="name" required class="q text-entry grow">
                </div>
                <div class="mb-gap flex">
                    <label for="tag" class="q-label">Tags</label>
                    <input type="text" id="tag" name="tag" class="q text-entry grow">
                </div>
                <div class="mb-gap flex">
                    <label for="preq" class="q-label">Prerequisites</label>
                    <input type="text" id="preq" name="preq" class="q text-entry grow">
                </div>
                <div class="mb-gap flex">
                    <label for="desc" class="w-100 q-label">Description</label>
                    <textarea id="desc" name="desc" rows="5" required class="q text-entry align-self-end"></textarea>
                </div>
                <div class="mb-gap flex">
                    <label for="isRepeatable" class="q-label">Repeatable?</label>
                    <input type="checkbox" name="isRepeatable" id="isRepeatable" class="ml-gap checkboxQ sq">
                </div>
                <SkillSelector />
                <div class="flex gap justify-end">
                    <button type="button" onclick="resetForm()" class="btn">Reset</button>
                    <button type="submit" class="btn">Save</button>
                </div>
            </form>

            <hr/>

            <PowersList />
    </div>
</template>

<script setup>
import PowersList from '../../components/PEDD/PowersList.vue';
import SkillSelector from './Components/SkillSelector.vue';
</script>

<style lang="css" scoped>
.q-label {
    width: 6rem;
}
</style>