<template>
    <div id="stats">
        <table class="main">
            <thead>
                <tr>
                    <th colspan="4">Stats</th>
                    <th colspan="2">Resistances</th>
                    <th colspan="2" class="screen-1000">Secondaries</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Accuracy:</td>
                    <td>{{ chosen.Accuracy }}</td>
                    <td>Perception:</td>
                    <td>{{ chosen.Perception }}</td>
                    <td>Reflexes:</td>
                    <td><span v-if=reflexIsLimited>
                            <span style="text-decoration: line-through;">{{ reflexes }}</span>
                            (<span style="color:var(--highlight); font-weight:bold;">{{ limitedReflexes }}</span>)
                        </span>
                        <span v-else>{{ reflexes }}</span>
                    </td>
                    <td class="screen-1000">
                        <a @click="showDefenceInfo = !showDefenceInfo">Defence: </a>
                        <span v-if="showDefenceInfo">{{ defenceInfo }}</span>
                    </td>
                    <td class="screen-1000">{{ defence }}</td>
                </tr>
                <tr>
                    <td>Strength:</td>
                    <td>{{ chosen.strength }}</td>
                    <td>Dexterity: </td>
                    <td>{{ chosen.dexterity }}</td>
                    <td>Fortitude: </td>
                    <td> {{ fortitude }}</td>
                    <td class="screen-1000">
                        <a @click="showHealthInfo = !showHealthInfo">Health: </a>
                        <span v-if="showHealthInfo">{{ healthInfo }}</span>
                    </td>
                    <td class="screen-1000">{{ health }}</td>
                </tr>
                <tr>
                    <td>Charisma:</td>
                    <td>{{ chosen.charisma }}</td>
                    <td>Intelligence:</td>
                    <td>{{ chosen.intelligence }}</td>
                    <td>Willpower:</td>
                    <td>{{ willpower }}</td>
                    <td class="screen-1000">Focus:</td>
                    <td class="screen-1000">{{ willpower < 1 ? 1 : willpower }}</td>
                </tr>
                <tr>
                    <td><span>Faith:</span></td>
                    <td><span>{{ chosen.faith }}</span></td>
                    <td colspan="6"></td>
                </tr>
            </tbody>
        </table>

        <table class="screen-600">
            <thead>
                <tr>
                    <th colspan="2">Secondaries</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a @click="showDefenceInfo = !showDefenceInfo">Defence: </a>
                        <span v-if="showDefenceInfo">{{ defenceInfo }}</span>
                    </td>
                    <td>{{ defence }}</td>
                </tr>
                <tr>
                    <td>
                        <a @click="showHealthInfo = !showHealthInfo">Health: </a>
                        <span v-if="showHealthInfo">{{ healthInfo }}</span>
                    </td>
                    <td>{{ health }}</td>
                </tr>
                <tr>
                    <td>Focus:</td>
                    <td>{{ willpower < 1 ? 1 : willpower }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { capitalize } from '../../../assets/functionality';
import core from '../../../assets/pedd/trinitas-core.json'

const props = defineProps(["chosen"]);
console.log(props.chosen);

const reflexIsLimited = ref(false);
const limitedReflexes = ref(0);

const makeResistance = (val1, val2) => Math.round((Number(val1) + Number(val2)) / 2)

const reflexes = ref(makeResistance(props.chosen.Accuracy, props.chosen.Perception));
const willpower = ref(makeResistance(props.chosen.Intelligence, props.chosen.Charisma));
const fortitude = ref(makeResistance(props.chosen.Strength, props.chosen.Dexterity));
const armour = ref(0);  //TODO: build from chosen worn equipment

let size = core.sizes.filter(s => s.val == props.chosen.size)[0];
console.log(size)
const defence = computed(() => size.defence + reflexes.value + armour.value);
const health = computed(() => size.health + fortitude.value + willpower.value);

const showHealthInfo = ref(false);
const healthInfo = computed(() => {
    return `${size.val} base (${size.health}) + ` +
        `Fortitude (${fortitude.value}) + ` +
        `Willpower (${willpower.value}) = `;
});

const showDefenceInfo = ref(false)
const defenceInfo = computed(() => {
    return `${size.val} Size (${size.defence}) + ` +
        `Armour (${armour.value}) + ` +
        `Reflexes (${reflexIsLimited.value ? limitedReflexes.value : reflexes.value}) = `;
});

</script>

<style lang="css" scoped>
p {
    font-weight: 600;
}

table.main {
    width: 100%;
}

table th {
    border-bottom: 2px var(--highlight) groove;
}

table td,
table th {
    padding: 0.25rem 0.5rem;
}

table td:nth-child(odd) {
    text-align: right;
    padding-right: 1rem;
}

.flex {
    flex-direction: column;
    gap: 0;
    width: fit-content;
}

.table-like div {
    border: 2px solid var(--highlight);
    border-bottom: none;
    text-indent: var(--text-indent);
    margin: 0px;
    padding: 5px 0px;

    display: flex;
    align-items: baseline;
}

.table-like p {
    width: 130px;
    text-align: right;
}

.table-like div:last-child {
    border-bottom: 2px solid var(--highlight);
}

.screen-600 {
    display: revert;
}

.screen-1000 {
    display: none;
}

@media only screen and (min-width: 1000px) {
    table {
        width: revert;
    }

    .screen-600 {
        display: none;
    }

    .screen-1000 {
        display: revert;
    }

    .flex {
        flex-direction: row;
    }

    .table-like div {
        border: 2px solid var(--highlight);
        border-right: none;
        padding: 0.5rem 0.5rem;
    }

    .table-like div:last-child {
        border-right: 2px solid var(--highlight);
    }
}
</style>