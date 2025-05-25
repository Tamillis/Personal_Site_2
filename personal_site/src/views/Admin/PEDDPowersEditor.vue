<template>
    <div class="p-r">
        <div class="flex justify-between">
            <h2 class="subtitle" style="margin-bottom: 0">PEDD Powers Editor</h2>
            <p>{{ serverMsg }}</p>
        </div>

        <form id="pedd-power-form" class="" @submit.prevent="postPower">

            <h3 class="subsubtitle" ref="powerTitle"><span>{{ isNew ? "New" : "Edit" }}</span> Power</h3>

            <div class="input-container">
                <label for="name" class="q-label">Name</label>
                <input type="text" id="name" name="name" required class="q text-entry grow" v-model="name"
                    placeholder="Name...">
            </div>
            <div class="input-container">
                <label for="tag" class="q-label">Tags</label>
                <input type="text" id="tag" name="tag" class="q text-entry grow" v-model="tags" placeholder="Tags...">
            </div>
            <div class="input-container">
                <label for="preq" class="q-label">Prerequisites</label>
                <input type="text" id="preq" name="preq" class="q text-entry grow" v-model="preqs"
                    placeholder="Prerequisites...">
            </div>
            <div class="input-container">
                <label for="desc" class="w-100 q-label">Description</label>
                <textarea id="desc" name="desc" rows="10" required class="q text-entry font-sm align-self-end"
                    v-model="desc" placeholder="Description..."></textarea>
            </div>

            <section>
                <div class="mb-gap flex">
                    <label for="isRepeatable" class="q-label">Repeatable?</label>
                    <input type="checkbox" name="isRepeatable" id="isRepeatable" class="ml-gap checkboxQ sq"
                        v-model="repeatable">
                    <label for=""></label>
                </div>

                <div class="input-container">
                    <p class="q-label">Spells:</p>
                    <p>TODO</p>
                </div>

                <div class="input-container">
                    <p class="q-label">Skills:</p>
                    <SkillSelector class="ml-gap" v-model="skills" />
                </div>

                <div class="input-container">
                    <p class="q-label">Stat Changes</p>
                    <div class="stats-container">
                        <div class="input-container sixth" v-for="stat in ['acc', 'per', 'str', 'dex', 'cha', 'int']">
                            <label :for="`stat-change-${stat}`" class="capitalise">{{ stat }}.:</label>
                            <input type="number" :id="`stat-change-${stat}`" min="-3" max="5" step="1"
                                class="q q-number" v-model="statChanges[stat]" />
                        </div>
                    </div>
                </div>

                <div class="input-container">
                    <p class="q-label">Resistance Changes</p>
                    <div class="stats-container">
                        <div class="input-container sixth" v-for="stat in ['ref', 'fort', 'will']">
                            <label :for="`res-change-${stat}`" class="capitalise">{{ stat }}.:</label>
                            <input type="number" :id="`res-change-${stat}`" min="-6" max="10" step="1"
                                class="q q-number" v-model="resistanceChanges[stat]" />
                        </div>
                    </div>
                </div>

                <div class="input-container">
                    <p class="q-label">Secondary Stat Changes</p>
                    <div class="stats-container">
                        <div class="input-container sixth" v-for="stat in ['faith', 'speed', 'health', 'armour']">
                            <label :for="`sec-stat-change-${stat}`" class="capitalise">{{ stat }}:</label>
                            <input type="number" :id="`sec-stat-change-${stat}`" min="-6" max="10" step="1"
                                class="q q-number" v-model="secondaryStatChanges[stat]" />
                        </div>
                    </div>
                </div>

                <div class="input-container">
                    <p class="q-label">Stat Max</p>
                    <div class="stats-container">
                        <div class="input-container sixth" v-for="stat in ['acc', 'per', 'str', 'dex', 'cha', 'int']">
                            <label :for="`max-stat-change-${stat}`" class="capitalise">{{ stat }}.:</label>
                            <input type="number" :id="`max-stat-change-${stat}`" min="5" max="10" step="1"
                                class="q q-number" v-model="statMaxes[stat]" />
                        </div>
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
            <PowerCard v-for="power in powers" :power="power" class="border-bottom pb-1r"
                @edit-power="setFormToEdit(power)" />
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
    var res = await fetch("/api/powers", {
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

    var res = await fetch("/api/powers", {
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
.input-container {
    display: flex;
    gap: 0;
    margin-bottom: 1rem;
    flex-direction: column;
}

.border-bottom:first-child {
    border-top: var(--highlight) 2px groove;
}

.q-label {
    width: fit-content;
    margin: 0px var(--gap);
    text-align: left;
    padding-right: 0px;
    font-weight: 600;
}

.stats-container {
    display: flex;
    gap: 1rem;
    width: 100%;
}

.sixth {
    width: calc(16.5% - 1rem);
}

.capitalise {
    text-transform: capitalize;
}

@media only screen and (min-width: 600px) {
    .input-container {
        flex-direction: row;
    }

    .stats-container {
        width: unset;
        flex-wrap: wrap;
        gap: 0;
    }

    .q-label {
        width: 7rem;
        text-align: right;
        padding-right: 2px;
    }

    .q-number {
        margin-left: 0.5rem;
        width: 2.5em;
        height: 2.5em;
    }

    .capitalise {
        width: 4em;
        text-align: right;
    }

    .sixth {
        width: 6em;
    }
}
</style>