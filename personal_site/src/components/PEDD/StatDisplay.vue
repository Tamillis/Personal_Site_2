<template>
    <div id="stats">
        <table>
            <thead>
                <tr>
                    <th colspan="4">Stats</th>
                    <th colspan="2">Resistances</th>
                    <th colspan="2">Secondaries</th>
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
                    <td>
                        <a @click="showDefenceInfo = !showDefenceInfo">Defence: </a>
                        <span v-if="showDefenceInfo">{{ defenceInfo }}</span>
                    </td>
                    <td>{{ player.defence }}</td>
                </tr>
                <tr>
                    <td>Strength:</td>
                    <td>{{ player.strength }}</td>
                    <td>Dexterity: </td>
                    <td>{{ player.dexterity }}</td>
                    <td>Fortitude: </td>
                    <td> {{ player.fortitude }}</td>
                    <td>
                        <a @click="showHealthInfo = !showHealthInfo">Health: </a>
                        <span v-if="showHealthInfo">{{ healthInfo }}</span>
                    </td>
                    <td>{{ player.health }}</td>
                </tr>
                <tr>
                    <td>Charisma:</td>
                    <td>{{ player.charisma }}</td>
                    <td>Intelligence:</td>
                    <td>{{ player.intelligence }}</td>
                    <td>Willpower:</td>
                    <td>{{ player.willpower }}</td>
                    <td>Focus:</td>
                    <td>{{ player.willpower < 1 ? 1 : player.willpower }}</td>
                </tr>
                <tr>
                    <td><span v-if="haveFaith">Faith:</span></td>
                    <td><span v-if="haveFaith">{{ player.faith }}</span></td>
                    <td colspan="4"></td>
                    <td>Speed:</td>
                    <td>{{ player.race ? player.race.speed.val : "" }}</td>
                </tr>
            </tbody>
        </table>

        <a @click="showTertiaries = !showTertiaries">
            <h3>{{ showTertiaries ? "Tertiaries:" : "Tertiaries..." }}</h3>
        </a>
        <section v-if="showTertiaries">
            <p><small>Don't forget these are just for flavour.</small></p>
            <div class="flex table-like">
                <p>Appearance <small>(Str. + Cha.)</small>: {{ player.strength + player.charisma }}</p>
                <p>Agility <small>(Dex. + Acc.)</small>: {{ player.dexterity + player.accuracy }}</p>
                <p>Foresight <small>(Per. + Int.)</small>: {{ player.perception + player.intelligence }}</p>
            </div>
        </section>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { capitalize } from '../../assets/functionality';

const props = defineProps(["player", "haveFaith"]);
const showHealthInfo = ref(false);
const healthInfo = computed(() => {
    return `${props.player.race ? props.player.race.name : 'Race'} base (${props.player.race ? props.player.race.baseHealth : 0}) + ` +
        `Fortitude (${props.player.fortitude}) + ` +
        `Willpower (${props.player.willpower}) = `;
});

const showDefenceInfo = ref(false)
const defenceInfo = computed(() => {
    return `${props.player.race ? capitalize(props.player.race.size.val) + " " : ""} Size (${props.player.baseDefence}) + ` +
        `Armour (${props.player.armour}) + ` +
        `Evasion (${props.player.reflexLimited ? props.player.reflexLimit : props.player.reflexes}) = `;
});
const showTertiaries = ref(false);
</script>

<style lang="css" scoped>

p {
    font-weight: 600;
}

table {
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

@media only screen and (min-width: 1000px) {
    table {
        width: unset;
    }
}

.flex {
    display: flex;
    gap: 0;
}

.table-like p {
    border: 2px solid var(--highlight);
    border-right: none;
    margin: 0;
    padding: 0.5rem 0.5rem;
    text-align: start;
    text-indent: 0;
}

.table-like p:last-child {
    border-right: 2px solid var(--highlight);
}

@media only screen and (max-width: 750px) {
    .flex {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .table-like p {
        border: 2px solid var(--highlight);
        border-bottom: none;
        text-indent: var(--text-indent);
        width: 100%;
    }

    .table-like p:last-child {
        border-bottom: 2px solid var(--highlight);
    }
}

.flex h3:first-child {
    width: 10vw;
    min-width: 8rem;
    text-align: right;
    padding-right: 1rem;
}

.btn {
    padding: 0;
    display: inline;
}
</style>