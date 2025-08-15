<template>

    <div class="stat-display-container">
        <div>
            <h2 class="title underline">{{ player.name }}{{ player.name && player.concept ? ", " : "" }}{{ player.concept }}</h2>
            <StatDisplay :player="player" :haveFaith="haveFaith" />
        </div>
        <CharacterPortrait class="character-portrait" :imgSrc="player.imgSrc"
            @updateImgSrc="(imgSrc) => $emit('updateImgSrc', imgSrc)" />
    </div>

    <div class="summary">
        <div>
            <div class="flex flex-align-center">
                <h3 style="width:125px">Race</h3>
                <p>- {{ player.race ? player.race.name : "None chosen" }}</p>
            </div>

            <div class="flex flex-align-center">
                <h3 style="width:125px">Background</h3>
                <p>- {{ player.background ? player.background.name : "None chosen" }}</p>
            </div>

            <div>
                <h3>Personal</h3>
                <p>{{ player.bonds }}</p>
                <p>{{ player.ideals }}</p>
                <p>{{ player.flaws }}</p>
            </div>
        </div>

        <div class="summary-sub-section">
            <h3>Equipment</h3>
            <ul>
                <li v-for="eq in selectedEquipment" class="triangle-points" style="font-size:0.66em">{{ eq }}</li>
            </ul>
        </div>

        <div class="summary-sub-section">
            <h3>Skills</h3>
            <ul>
                <li v-for="skill in player.skills" class="triangle-points" style="font-size:0.66em">{{ skill }}</li>
            </ul>
        </div>
    </div>


    <div>
        <h3>Powers</h3>
        <div id="powers-summary" class="flex gap-1r flex-wrap">
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
import powers from '../../../assets/pedd/pedd-powers.json';
import CharacterPortrait from './CharacterPortrait.vue';

const props = defineProps(['player', 'haveFaith']);
const emits = defineEmits(['updateImgSrc']);

const selectedEquipment = computed(() => {
    let equipment = [];
    if(props.player.background) equipment.push(props.player.background.equipment);
    if(props.player.equipmentCollection) equipment.push(props.player.equipmentCollection);
    if(props.player.pack) equipment.push(props.player.pack);
    return equipment.flat();
})

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

<style lang="css" scoped>
.power-summary {
    width: 100%;
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

.summary {
    display: block;
}

.summary>div:last-child {
    border-right: none;
}

.summary ul {
    margin-left: 1rem;
    padding-left: 0;
}

h3 {
    text-decoration: underline;
}

.summary * {
    text-indent: 0;
}

.stat-display-container {
    width: 100%;
}

.character-portrait {
    margin-left: auto;
    margin-right: auto;
    max-width: 250px;
}

@media only screen and (min-width: 600px) and (max-width: 999px) {
    .power-summary {
        width: calc(50% - 1rem);
    }

    .summary {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .summary-sub-section {
        width: calc(50% - 1rem);
    }
}

@media only screen and (min-width: 1000px) {
    .stat-display-container {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
    }

    .character-portrait {
        max-width: 25%;
    }

    .summary {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .summary>div {
        width: calc(33% - 1rem);
        border-right: 2px var(--highlight) groove;
    }

    .power-summary {
        width: calc(33% - 1rem);
    }
}
</style>