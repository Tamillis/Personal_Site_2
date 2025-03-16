<template>
    <div class="border p-r">
        <h2>PEDD Powers Editor</h2>

        <form id="pedd-power-form" class="main-text">
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
                <textarea id="desc" name="desc" rows="5" required class="q text-entry align-self-end"
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
                <SkillSelector class="ml-gap" @skill-chosen="chosen => skills = chosen" />
            </div>
            <div class="mb-gap flex">
                <p class="q-label">Stat Changes</p>
                <div>
                    <label for="stat-change-acc">Acc:</label>
                    <input type="number" id="stat-change-acc" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-per">Per:</label>
                    <input type="number" id="stat-change-per" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-str">Str:</label>
                    <input type="number" id="stat-change-str" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-dex">Dex:</label>
                    <input type="number" id="stat-change-dex" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-cha">Cha:</label>
                    <input type="number" id="stat-change-cha" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-int">Int:</label>
                    <input type="number" id="stat-change-int" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
            </div>
            <div class="mb-gap flex">
                <p class="q-label">Resistance Changes</p>
                <div>
                    <label for="stat-change-ref">Ref:</label>
                    <input type="number" id="stat-change-ref" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-fort">Fort:</label>
                    <input type="number" id="stat-change-fort" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-will">Will:</label>
                    <input type="number" id="stat-change-will" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
            </div>

            <div class="mb-gap flex">
                <p class="q-label">Secondary Stat Changes</p>
                <div>
                    <label for="stat-change-fth">Faith:</label>
                    <input type="number" id="stat-change-fth" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-spd">Speed:</label>
                    <input type="number" id="stat-change-spd" value="0" min="5" max="45" step="5"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-hlth">Base Health:</label>
                    <input type="number" id="stat-change-hlth" value="0" min="5" max="45" step="5"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-change-narm">Natural Armour:</label>
                    <input type="number" id="stat-change-narm" value="0" min="5" max="45" step="5"
                        class="q q-number ml-gap" />
                </div>
            </div>
            <div class="mb-gap flex">
                <p class="q-label">Stat Max</p>
                <div>
                    <label for="stat-max-acc">Acc:</label>
                    <input type="number" id="stat-max-acc" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-max-per">Per:</label>
                    <input type="number" id="stat-max-per" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-max-str">Str:</label>
                    <input type="number" id="stat-max-str" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-max-dex">Dex:</label>
                    <input type="number" id="stat-max-dex" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-max-cha">Cha:</label>
                    <input type="number" id="stat-max-cha" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
                </div>
                <div>
                    <label for="stat-max-int">Int:</label>
                    <input type="number" id="stat-max-int" value="0" min="-3" max="5" step="1"
                        class="q q-number ml-gap" />
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

</script>

<style lang="css" scoped>
.q-label {
    width: 6rem;
    text-align: right;
    padding-right: 2px;
}
</style>