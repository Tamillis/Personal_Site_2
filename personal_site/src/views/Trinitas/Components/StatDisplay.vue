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
                    <td>{{ player.accuracy }}</td>
                    <td>Perception:</td>
                    <td>{{ player.perception }}</td>
                    <td>Reflexes:</td>
                    <td><span v-if=player.reflexLimited>
                            <span style="text-decoration: line-through;">{{ player.reflexes }}</span>
                            (<span style="color:var(--highlight); font-weight:bold;">{{ player.reflexLimit }}</span>)
                        </span>
                        <span v-else>{{ player.reflexes }}</span>
                    </td>
                    <td class="screen-1000">
                        <a @click="showDefenceInfo = !showDefenceInfo">Defence: </a>
                        <span v-if="showDefenceInfo">{{ defenceInfo }}</span>
                    </td>
                    <td class="screen-1000">{{ player.defence }}</td>
                </tr>
                <tr>
                    <td>Strength:</td>
                    <td>{{ player.strength }}</td>
                    <td>Dexterity: </td>
                    <td>{{ player.dexterity }}</td>
                    <td>Fortitude: </td>
                    <td> {{ player.fortitude }}</td>
                    <td class="screen-1000">
                        <a @click="showHealthInfo = !showHealthInfo">Health: </a>
                        <span v-if="showHealthInfo">{{ healthInfo }}</span>
                    </td>
                    <td class="screen-1000">{{ player.health }}</td>
                </tr>
                <tr>
                    <td>Charisma:</td>
                    <td>{{ player.charisma }}</td>
                    <td>Intelligence:</td>
                    <td>{{ player.intelligence }}</td>
                    <td>Willpower:</td>
                    <td>{{ player.willpower }}</td>
                    <td class="screen-1000">Focus:</td>
                    <td class="screen-1000">{{ player.willpower < 1 ? 1 : player.willpower }}</td>
                </tr>
                <tr>
                    <td><span v-if="haveFaith">Faith:</span></td>
                    <td><span v-if="haveFaith">{{ player.faith }}</span></td>
                    <td colspan="4"></td>
                    <td class="screen-1000">Speed:</td>
                    <td class="screen-1000">{{ player.race ? player.race.speed.val : "" }}</td>
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
                    <td>{{ player.defence }}</td>
                </tr>
                <tr>
                    <td>
                        <a @click="showHealthInfo = !showHealthInfo">Health: </a>
                        <span v-if="showHealthInfo">{{ healthInfo }}</span>
                    </td>
                    <td>{{ player.health }}</td>
                </tr>
                <tr>
                    <td>Focus:</td>
                    <td>{{ player.willpower < 1 ? 1 : player.willpower }}</td>
                </tr>
                <tr>
                    <td>Speed:</td>
                    <td>{{ player.race ? player.race.speed.val : "" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { capitalize } from '../../../assets/functionality';

const props = defineProps(["player", "haveFaith"]);

const showHealthInfo = ref(false);
const healthInfo = computed(() => {
    return `${capitalize(props.player.size)} base (${props.player.baseHealth}) + ` +
        `Fortitude (${props.player.fortitude}) + ` +
        `Willpower (${props.player.willpower}) = `;
});

const showDefenceInfo = ref(false)
const defenceInfo = computed(() => {
    return `${capitalize(props.player.size)} Size (${props.player.baseDefence}) + ` +
        `Armour (${props.player.armour}) + ` +
        `Evasion (${props.player.reflexLimited ? props.player.reflexLimit : props.player.reflexes}) = `;
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