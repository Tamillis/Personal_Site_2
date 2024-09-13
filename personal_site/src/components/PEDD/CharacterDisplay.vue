<template>

    <div class="flex flex-justify-between gap-1r" style="width: 100%">
        <div>

            <h2 class="title underline">{{ player.name }}, {{ player.concept }}</h2>
            <StatDisplay :player="player" :haveFaith="haveFaith" />
        </div>
        <CharacterPortrait style="max-width: 25%;" :imgSrc="player.imgSrc"
            @updateImgSrc="(imgSrc) => $emit('updateImgSrc', imgSrc)" />
    </div>

    <div class="flex flex-wrap gap-1r summary">

        <div>
            <div class="flex flex-align-center">
                <h3>Race</h3>
                <p>- {{ player.race ? player.race.name : "None chosen" }}</p>
            </div>

            <div class="flex flex-align-center">
                <h3>Background</h3>
                <p>- {{ player.background ? player.background.name : "None chosen" }}</p>
            </div>

            <div>
                <h3>Personal</h3>
                <p>{{ player.bonds }}</p>
                <p>{{ player.ideals }}</p>
                <p>{{ player.flaws }}</p>
            </div>
        </div>

        <div>
            <h3>Equipment</h3>
            <ul v-if="player.background">
                <li v-for="eq in player.background.equipment" class="triangle-points">{{ eq }}</li>
            </ul>
            <ul v-if="player.roleEquipment">
                <li v-for="eq in player.roleEquipment" class="triangle-points">{{ eq }}</li>
            </ul>
        </div>

        <div>
            <h3>Skills</h3>
            <ul>
                <li v-for="skill in player.skills" class="triangle-points">{{ skill }}</li>
            </ul>
        </div>
    </div>


    <div>
        <h3 @click="showPowersSummary = !showPowersSummary"><a>Powers{{ showPowersSummary ? ":" : "..." }}</a></h3>
        <div v-if="showPowersSummary" id="powers-summary" class="flex gap-1r flex-wrap">
            <div class="power-summary" v-for="power in selectedPowers">
                <h4>{{ power.name }}</h4>
                <div style="font-size:0.66em" v-html="power.desc"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { marked } from 'marked';
import StatDisplay from './StatDisplay.vue';
import powers from '../../assets/pedd/pedd-powers.json';
import CharacterPortrait from './CharacterPortrait.vue';

const props = defineProps(['player', 'haveFaith']);
const emits = defineEmits(['updateImgSrc']);

const showPowersSummary = ref(false);

const selectedPowers = computed(() => {
    let selectedPower = [];
    if (props.player.racialPowers) selectedPower = selectedPower.concat(props.player.racialPowers);
    if (props.player.backgroundPower) selectedPower.push(props.player.backgroundPower);
    if (props.player.rolePowers && Array.isArray(props.player.rolePowers)) selectedPower = selectedPower.concat(props.player.rolePowers);

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

.summary>div {
    width: calc(33% - 1rem);
    border-right: 2px var(--highlight) groove;
}

.summary>div:last-child {
    border-right: none;
}

.summary ul {
    margin-left: 1rem;
    padding-left: 0;
}

.summary h3 {
    text-decoration: underline;
}

.summary * {
    text-indent: 0;
}
</style>