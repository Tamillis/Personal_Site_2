<template>
    <div class="border p-r">
        <h2>PEDD Powers Editor</h2>

        <form id="pedd-power-form" class="main-text" @submit.prevent="postPower">
            <h3 class=""><span id="subtitle">New</span> Power</h3>
            <div class="mb-gap flex">
                <label for="name" class="q-label">Name</label>
                <input type="text" id="name" name="name" required class="q text-entry grow" v-model="name">
            </div>
            <div class="mb-gap flex">
                <label for="tag" class="q-label">Tags</label>
                <input type="text" id="tag" name="tag" class="q text-entry grow" v-model="tags">
            </div>
            <div class="mb-gap flex">
                <label for="preq" class="q-label">Prerequisites</label>
                <input type="text" id="preq" name="preq" class="q text-entry grow" v-model="preqs">
            </div>
            <div class="flex">
                <label for="desc" class="w-100 q-label">Description</label>
                <textarea id="desc" name="desc" rows="5" required class="q text-entry font-sm align-self-end"
                    v-model="desc"></textarea>
            </div>

            <div class="flex">
                <p class="q-label"></p>
                <p class="my-0">---------- ADMIN ----------</p>
            </div>

            <div class="mb-gap flex">
                <label for="isRepeatable" class="q-label">Repeatable?</label>
                <input type="checkbox" name="isRepeatable" id="isRepeatable" class="ml-gap checkboxQ sq"
                    v-model="repeatable">
            </div>
            <div class="mb-gap flex">
                <p class="q-label">Skills:</p>
                <SkillSelector class="ml-gap" v-model="skills" />
            </div>
            <div class="mb-gap flex">
                <p class="q-label">Stat Changes</p>
                <div class="flex gap flex-grow five-per ml-gap align-top">
                    <label for="stat-change-acc">Acc:</label>
                    <input type="number" id="stat-change-acc" min="-3" max="5" step="1" class="q q-number"
                        v-model="statChanges.acc" />
                    <label for="stat-change-per">Per:</label>
                    <input type="number" id="stat-change-per" min="-3" max="5" step="1" class="q q-number"
                        v-model="statChanges.per" />
                    <label for="stat-change-str">Str:</label>
                    <input type="number" id="stat-change-str" min="-3" max="5" step="1" class="q q-number"
                        v-model="statChanges.str" />
                    <label for="stat-change-dex">Dex:</label>
                    <input type="number" id="stat-change-dex" min="-3" max="5" step="1" class="q q-number"
                        v-model="statChanges.dex" />
                    <label for="stat-change-cha">Cha:</label>
                    <input type="number" id="stat-change-cha" min="-3" max="5" step="1" class="q q-number"
                        v-model="statChanges.cha" />
                    <label for="stat-change-int">Int:</label>
                    <input type="number" id="stat-change-int" min="-3" max="5" step="1" class="q q-number"
                        v-model="statChanges.int" />
                </div>
            </div>
            <div class="mb-gap flex">
                <p class="q-label">Resistance Changes</p>
                <div class="flex gap flex-grow five-per ml-gap align-top">
                    <label for="stat-change-ref">Ref:</label>
                    <input type="number" id="stat-change-ref" min="-3" max="5" step="1" class="q q-number"
                        v-model="resistanceChanges.ref" />
                    <label for="stat-change-fort">Fort:</label>
                    <input type="number" id="stat-change-fort" min="-3" max="5" step="1" class="q q-number"
                        v-model="resistanceChanges.fort" />
                    <label for="stat-change-will">Will:</label>
                    <input type="number" id="stat-change-will" min="-3" max="5" step="1" class="q q-number"
                        v-model="resistanceChanges.will" />
                </div>
            </div>

            <div class="mb-gap flex">
                <p class="q-label">Secondary Stat Changes</p>
                <div class="flex flex-grow gap ml-gap align-top five-per">
                    <label for="stat-change-fth">Faith:</label>
                    <input type="number" id="stat-change-fth" min="-3" max="5" step="1" class="q q-number"
                        v-model="secondaryStatChanges.faith" />
                    <label for="stat-change-spd">Speed:</label>
                    <input type="number" id="stat-change-spd" min="-15" max="15" step="5" class="q q-number"
                        v-model="secondaryStatChanges.speed" />
                    <label for="stat-change-hlth">Base Health:</label>
                    <input type="number" id="stat-change-hlth" min="-3" max="5" step="1" class="q q-number"
                        v-model="secondaryStatChanges.health" />
                    <label for="stat-change-narm">Natural Armour:</label>
                    <input type="number" id="stat-change-narm" min="-3" max="5" step="1" class="q q-number"
                        v-model="secondaryStatChanges.armour" />
                </div>
            </div>
            <div class="mb-gap flex">
                <p class="q-label">Stat Max</p>
                <div class="flex flex-grow gap ml-gap align-top five-per">
                    <label for="stat-max-acc">Acc:</label>
                    <input type="number" id="stat-max-acc" v-model="statMaxes.acc" min="5" max="10" step="1"
                        class="q q-number" />
                    <label for="stat-max-per">Per:</label>
                    <input type="number" id="stat-max-per" v-model="statMaxes.per" min="5" max="10" step="1"
                        class="q q-number" />
                    <label for="stat-max-str">Str:</label>
                    <input type="number" id="stat-max-str" v-model="statMaxes.str" min="5" max="10" step="1"
                        class="q q-number" />
                    <label for="stat-max-dex">Dex:</label>
                    <input type="number" id="stat-max-dex" v-model="statMaxes.dex" min="5" max="10" step="1"
                        class="q q-number" />
                    <label for="stat-max-cha">Cha:</label>
                    <input type="number" id="stat-max-cha" v-model="statMaxes.cha" min="5" max="10" step="1"
                        class="q q-number" />
                    <label for="stat-max-int">Int:</label>
                    <input type="number" id="stat-max-int" v-model="statMaxes.int" min="5" max="10" step="1"
                        class="q q-number" />
                </div>
            </div>
            <div class="flex gap justify-end">
                <button type="button" onclick="resetForm()" class="btn">Reset</button>
                <button type="submit" class="btn">Save</button>
            </div>

        </form>

        <hr />

        <PowersList />
    </div>
</template>

<script setup>
import PowersList from '../../components/PEDD/PowersList.vue';
import SkillSelector from './Components/SkillSelector.vue';

import { ref } from 'vue';

const name = ref("Example");
const tags = ref("");
const preqs = ref("");
const desc = ref("");
const repeatable = ref(true);
const skills = ref([]);
const statChanges = ref({
    acc: 0,
    per: 0,
    str: 0,
    dex: 0,
    cha: 0,
    int: 0
});
const resistanceChanges = ref({
    ref: 0,
    fort: 0,
    will: 0
});
const secondaryStatChanges = ref({
    faith: 0,
    speed: 0,
    health: 0,
    armour: 0
});
const statMaxes = ref({
    acc: 5,
    per: 5,
    str: 5,
    dex: 5,
    cha: 5,
    int: 5
});

async function postPower() {
    let body = {
        name: name.value,
        tag: tags.value,
        preq: preqs.value,
        desc: desc.value,
        repeatable: repeatable.value,
        skills: skills.value,
        statChanges: statChanges.value,
        resistanceChanges: resistanceChanges.value,
        secondaryStatChanges: secondaryStatChanges.value,
        statMaxes: statMaxes.value
    };

    console.log(body);

    var res = await fetch("/api/PEDD_Powers_Controller.php", {
        method: "PUT",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(body)
    });
    console.log(res);
    var data = await res.json();
    console.log(data);
}

</script>

<style lang="css" scoped>
.q-label {
    width: 6rem;
    text-align: right;
    padding-right: 2px;
}

.five-per>* {
    width: 5%;
}

.five-per label {
    text-align: right;
}
</style>