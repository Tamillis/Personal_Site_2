<template>
    <h2 class="title underline">{{ player.name }}, {{ player.concept }}</h2>

    <div class="flex">
        <StatDisplay :player="player" :haveFaith="haveFaith" style="margin-top: 1rem" />
        <CharacterPortrait style="max-width: 25%;" :imgSrc="player.imgSrc" @updateImgSrc="(imgSrc) => $emit('updateImgSrc', imgSrc)"/>
    </div>


    <div class="flex justify-between gap-1r summary">
        <div>
            <h2>Race</h2>
            <p>{{ player.race ? player.race.name : "None chosen" }}</p>
        </div>

        <div>
            <h2>Background</h2>
            <p>{{ player.background ? player.background.name : "None chosen" }}</p>
        </div>

        <div class="flex-grow">
            <h2>Equipment</h2>
            <p>{{ player.background ? player.background.equipment.join(", ") : "" }}</p>
            <p>{{ player.equipmentCollection ? player.equipmentCollection.equipment : "" }}</p>
        </div>

    </div>

    <div>
        <h2>Skills</h2>
        <div class="flex gap-1r flex-wrap">
            <p v-for="skill in player.skills" style="text-indent: 0;">{{ skill }}</p>
        </div>
    </div>

    <div>
        <h2>Powers</h2>
        <div class="flex gap-1r flex-wrap">
            <div class="power-summary" v-for="power in selectedPowers">
                <h4>{{power.name}}</h4>
                <div style="font-size:0.66em" v-html="power.desc"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {marked} from 'marked';
import StatDisplay from './StatDisplay.vue';
import powers from '../../assets/pedd/pedd-powers.json';
import CharacterPortrait from './CharacterPortrait.vue';

const props = defineProps(['player', 'haveFaith']);
const emits = defineEmits(['updateImgSrc']);

const selectedPowers = computed(() => {
    let selectedPower = [];
    if (props.player.racialPowers) selectedPower = selectedPower.concat(props.player.racialPowers);
    if(props.player.backgroundPower) selectedPower.push(props.player.backgroundPower);
    if(props.player.rolePowers && Array.isArray(props.player.rolePowers)) selectedPower = selectedPower.concat(props.player.rolePowers);

    selectedPower = selectedPower.map(sp => {
        let power = powers.filter(p => sp && p.name == sp)[0]
        return {
            name: power.name,
            desc: marked.parse(power.desc)
        }
    });

    return selectedPower;
});

</script>

<style lang="css">
.power-summary {
    width: 30%;
}

.power-summary h4 {
    text-indent: 0;
    border-bottom: 1px solid var(--text-color);
}

.power-summary p {
    margin: 0.25em 0;
    line-height: 1.1;
}

.power-summary table {
    display: none;
}

</style>