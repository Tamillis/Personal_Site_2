<template>

    <div class="stat-display-container">
        <div>
            <h2 class="title underline">{{ chosen.name }}{{ chosen.name && chosen.concept ? ", " : "" }}{{ chosen.concept }}</h2>
            <StatDisplay :chosen="props.chosen" />
        </div>
        <CharacterPortrait class="character-portrait" :imgSrc="chosen.imgSrc" />
    </div>

    <div class="summary">
        <div>
            <div class="flex flex-align-center">
                <h3 style="width:125px">Race</h3>
                <p>{{ chosen.race }}</p>
            </div>

            <div class="flex flex-align-center">
                <h3 style="width:125px">Background</h3>
                <p>{{ chosen.background }}</p>
            </div>

            <div>
                <h3>Personal</h3>
                <p>{{ chosen.bonds }}</p>
                <p>{{ chosen.ideals }}</p>
                <p>{{ chosen.flaws }}</p>
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
                <li v-for="skill in props.chosen.skills" class="triangle-points" style="font-size:0.66em">{{ skill }}</li>
            </ul>
        </div>
    </div>
    <div>
        <h3>Racial Features</h3>
        <div id="powers-summary" class="flex gap-1r flex-wrap">
            <div class="power-summary" v-for="(rf, prop) in selectedRace.racialFeatures">
                <h4>{{ format(prop) }}</h4>
                <div style="font-size:0.66em" v-html="rf"></div>
            </div>
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
import { computed } from 'vue'
import { format } from '../../../assets/functionality';
import { marked } from 'marked';
import StatDisplay from './StatDisplay.vue';
import powers from '../../../assets/pedd/pedd-powers.json';
import races from '../../../assets/pedd/pedd-races.json';
import backgrounds from '../../../assets/pedd/pedd-backgrounds.json';
import CharacterPortrait from './CharacterPortrait.vue';

const props = defineProps(['chosen']);

console.log(props.chosen.imgSrc);

const selectedEquipment = computed(() => {
    let equipment = [];
    if(props.chosen.background) equipment.push(props.chosen.background.equipment);
    if(props.chosen.equipmentCollection) equipment.push(props.chosen.equipmentCollection);
    if(props.chosen.pack) equipment.push(props.chosen.pack);
    return equipment.flat();
});

const selectedRace = computed(() => races.filter(r => r.name == props.chosen.race)[0]);
const selectedBg = computed(() => backgrounds.filter(r => r.backgrounds == props.chosen.background)[0]);
const selectedPowers = computed(() => {
    let selectedPower = [];
    if (props.chosen.racialPowers) selectedPower = selectedPower.concat(props.chosen.racialPowers);
    if (props.chosen.backgroundPower) selectedPower.push(props.chosen.backgroundPower);
    if (props.chosen.rolePowers && Array.isArray(props.chosen.rolePowers)) selectedPower = selectedPower.concat(props.chosen.rolePowers);

    selectedPower = selectedPower.map(sp => {
        let power = powers.filter(p => sp && p.name == sp)[0]
        return {
            name: power.name,
            desc: marked.parse(power.desc)
        }
    });

    return selectedPower.sort((a,b) => a.name.localeCompare(b.name));
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