<template>
    <h3>Equipment</h3>
    <div class="flex">
        <select id="equipment-collections" v-model="equipment">
            <option disabled selected>Choose a collection...</option>
            <option v-for="collection in equipmentCollections">{{ collection.name }}</option>
        </select>
        <select id="equipment-packs" v-model="pack">
            <option disabled selected>Choose a pack...</option>
            <option>None</option>
            <option v-for="pack in packs">{{ pack.name }}</option>
        </select>
    </div>

    <div class="flex">
        <div class="selection">
            <h3>Body Armour</h3>
            <select data-prop="armour" v-model.number="armour" @change="chosenArmour">
                <option value="0" data-ref-limit="99">None</option>
                <option value="1" data-ref-limit="99">+1 Padded (Loud)</option>
                <option value="1" data-ref-limit="99">+1 Leather</option>
                <option value="2" data-ref-limit="99">+2 Studded Leather</option>
                <option value="2" data-ref-limit="2">+2 Hide</option>
                <option value="3" data-ref-limit="2">+3 Chain Shirt</option>
                <option value="4" data-ref-limit="2">+4 Scale Mail (Loud)</option>
                <option value="4" data-ref-limit="2">+4 Breastplate</option>
                <option value="5" data-ref-limit="2">+5 Half-plate (Loud)</option>
                <option value="4" data-ref-limit="0">+4 Ring mail (Loud)</option>
                <option value="6" data-ref-limit="0">+6 Chain mail (Loud)</option>
                <option value="7" data-ref-limit="0">+7 Splint mail (Loud)</option>
                <option value="8" data-ref-limit="0">+8 Plate mail (Loud)</option>
            </select>
        </div>

        <div class="selection">
            <h3>Helmet</h3>
            <select data-prop="helmet" v-model.number="helmet" @change="chosenArmour">
                <option value="0" data-ref-limit="99">None</option>
                <option value="1" data-ref-limit="2">+1 Lobster Pot</option>
                <option value="2" data-ref-limit="0">+2 Great Helm (Blinkered)</option>
            </select>
        </div>

        <div class="selection">
            <h3>Shield</h3>
            <select data-prop="shield" v-model.number="shield" @change="chosenArmour">
                <option value="0" data-ref-limit="99">None</option>
                <option value="1" data-ref-limit="99">+1 Buckler</option>
                <option value="2" data-ref-limit="2">+2 Shield</option>
                <option value="3" data-ref-limit="0">+3 Tower Shield (Loud)</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import equipmentCollections from '../../../assets/pedd/pedd-equipment-collections.json';
import packs from '../../../assets/pedd/pedd-packs.json';

const emit = defineEmits(["refLimit"]);

const equipment = defineModel('equipment');
const pack = defineModel('pack');
const armour = defineModel('armour');
const helmet = defineModel('helmet');
const shield = defineModel('shield');

const chosen = ref({
    armour: 0,
    armourRefLimit: 99,
    shield: 0,
    shieldRefLimit: 99,
    helmet: 0,
    helmetRefLimit: 99,
});

let chosenArmour = (e) => {
    //track each ref limit
    chosen.value[e.target.dataset.prop + "RefLimit"] = Number(e.target.children[e.target.selectedIndex].dataset.refLimit);

    //emit lowest reflexes limit
    let lowestLimit = chosen.value.armourRefLimit;
    if (chosen.value.helmetRefLimit < lowestLimit) lowestLimit = chosen.value.helmetRefLimit;
    if (chosen.value.shieldRefLimit < lowestLimit) lowestLimit = chosen.value.shieldRefLimit;
    emit('refLimit', lowestLimit);
};

</script>

<style lang="css" scoped></style>