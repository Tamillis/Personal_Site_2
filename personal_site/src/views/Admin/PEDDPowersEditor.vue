<template>
    <div class="border p-r">
        <div class="flex justify-between">
            <h2 class="subtitle">PEDD Powers Editor</h2>
            <p>{{ serverMsg }}</p>
        </div>

        <form id="pedd-power-form" class="main-text" @submit.prevent="postPower">
            <h3 class="subsubtitle" ref="powerTitle"><span>{{ isNew ? "New" : "Edit" }}</span> Power</h3>
            <div class="mb-gap flex">
                <label for="name" class="q-label">Name</label>
                <input type="text" id="name" name="name" required class="q text-entry grow" v-model="name"
                    placeholder="Name...">
            </div>
            <div class="mb-gap flex">
                <label for="tag" class="q-label">Tags</label>
                <input type="text" id="tag" name="tag" class="q text-entry grow" v-model="tags" placeholder="Tags...">
            </div>
            <div class="mb-gap flex">
                <label for="preq" class="q-label">Prerequisites</label>
                <input type="text" id="preq" name="preq" class="q text-entry grow" v-model="preqs"
                    placeholder="Prerequisites...">
            </div>
            <div class="flex">
                <label for="desc" class="w-100 q-label">Description</label>
                <textarea id="desc" name="desc" rows="10" required class="q text-entry font-sm align-self-end"
                    v-model="desc" placeholder="Description..."></textarea>
            </div>

            <div class="flex">
                <p class="q-label"></p>
                <button type="button" class="btn ml-gap mt-gap mb-gap" @click="adminToggle = !adminToggle">TOGGLE
                    ADMIN</button>
            </div>

            <section v-show="adminToggle">
                <div class="mb-gap flex">
                    <label for="isRepeatable" class="q-label">Repeatable?</label>
                    <input type="checkbox" name="isRepeatable" id="isRepeatable" class="ml-gap checkboxQ sq"
                        v-model="repeatable">
                    <label for=""></label>
                </div>
                <div class="mb-gap flex">
                    <p class="q-label">Spells:</p>
                    <p>TODO</p>
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
            </section>
            <div class="flex gap justify-end">
                <button type="button" onclick="resetForm()" class="btn">Reset</button>
                <button type="submit" class="btn">Save</button>
            </div>

        </form>

        <hr />

        <section class="bg-dark">
            <h2 class="subtitle">Powers:</h2>
            <PowerCard v-for="power in powers" :power="power" class="border-bottom" @edit-power="setFormToEdit(power)" />
        </section>
    </div>
</template>

<script setup>
import SkillSelector from './Components/SkillSelector.vue';
import PowerCard from './Components/PowerCard.vue';

import { ref } from 'vue';

const serverMsg = ref("");
const powerTitle = ref();

const name = ref("");
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
const isNew = ref(true); //could be PUT
const adminToggle = ref(false);
const powers = ref([]);

getPowers();

function setFormToEdit(power) {
    resetPowerForm();
    isNew.value = false;
    name.value = power.name;
    tags.value = power.tag.join(", ");
    preqs.value = power.preq.join(", ");
    desc.value = power.desc;
    if (!power.hasOwnProperty("repeatable")) return;
    repeatable.value = power.repeatable;
    skills.value = power.skills;
    statChanges.value = power.statChanges;
    resistanceChanges.value = power.resistanceChanges;
    secondaryStatChanges.value = power.secondaryStatChanges;
    statMaxes.value = power.statMaxes;
}

function resetPowerForm() {
    powerTitle.value.scrollIntoView({ behavior: "smooth" });
    isNew.value = true;
    name.value = "";
    tags.value = "";
    preqs.value = "";
    desc.value = "";
    repeatable.value = true;
    skills.value = [];
    statChanges.value = {
        acc: 0,
        per: 0,
        str: 0,
        dex: 0,
        cha: 0,
        int: 0
    };
    resistanceChanges.value = {
        ref: 0,
        fort: 0,
        will: 0
    };
    secondaryStatChanges.value = {
        faith: 0,
        speed: 0,
        health: 0,
        armour: 0
    };
    statMaxes.value = {
        acc: 5,
        per: 5,
        str: 5,
        dex: 5,
        cha: 5,
        int: 5
    };
}

async function getPowers() {
    var res = await fetch("/api/PEDD_Powers_Controller.php", {
        method: "GET"
    });

    var data = await res.json();

    powers.value = data;
}

async function postPower() {
    if (name.value == "" || desc.value == "") return;

    let body = {
        name: name.value,
        tag: tags.value.split(",").map(t => t.trim()),
        preq: preqs.value.split(",").map(t => t.trim()),
        desc: desc.value,
        repeatable: repeatable.value,
        skills: skills.value,
        statChanges: statChanges.value,
        resistanceChanges: resistanceChanges.value,
        secondaryStatChanges: secondaryStatChanges.value,
        statMaxes: statMaxes.value
    };

    var res = await fetch("/api/PEDD_Powers_Controller.php", {
        method: isNew.value ? "POST" : "PUT",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(body)
    });

    var data = await res.json();
    if (data.message) serverMsg.value = data.message;

    resetPowerForm();
    getPowers();
}

</script>

<style lang="css" scoped>
.border-bottom:first-child {
    border-top: var(--highlight) 2px groove;
}

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