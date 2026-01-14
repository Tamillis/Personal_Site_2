<template>
    <div id="stats">
        <table class="main">
            <thead>
                <tr>
                    <th colspan="4">Stats</th>
                    <th colspan="2">Resistances</th>
                    <th colspan="2" class="non-mobile">Secondaries</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Accuracy:</td>
                    <td>{{ player.accuracy }}</td>
                    <td>Perception:</td>
                    <td>{{ player.perception }}</td>
                    <td>Reflexes:</td>
                    <td><span v-if=player.reflexIsLimited>
                            <span style="text-decoration: line-through;">{{ player.reflexes }}</span>
                            (<span style="color:var(--highlight); font-weight:bold;">{{ player.limitedReflexes }}</span>)
                        </span>
                        <span v-else>{{ player.reflexes }}</span>
                    </td>
                    <td class="non-mobile">
                        <a @click="showDefenceInfo = !showDefenceInfo">Defence: </a>
                        <span v-if="showDefenceInfo">{{ defenceInfo }}</span>
                    </td>
                    <td class="non-mobile">{{ player.defence }}</td>
                </tr>
                <tr>
                    <td>Strength:</td>
                    <td>{{ player.strength }}</td>
                    <td>Dexterity: </td>
                    <td>{{ player.dexterity }}</td>
                    <td>Fortitude: </td>
                    <td> {{ player.fortitude }}</td>
                    <td class="non-mobile">
                        <a @click="showHealthInfo = !showHealthInfo">Health: </a>
                        <span v-if="showHealthInfo">{{ healthInfo }}</span>
                    </td>
                    <td class="non-mobile">{{ player.health }}</td>
                </tr>
                <tr>
                    <td>Charisma:</td>
                    <td>{{ player.charisma }}</td>
                    <td>Intelligence:</td>
                    <td>{{ player.intelligence }}</td>
                    <td>Willpower:</td>
                    <td>{{ player.willpower }}</td>
                    <td class="non-mobile">Focus:</td>
                    <td class="non-mobile">{{ player.focus }}</td>
                </tr>
                <tr>
                    <td><span>Faith:</span></td>
                    <td><span>{{ player.faith }}</span></td>
                    <td colspan="6"></td>
                </tr>
            </tbody>
        </table>

        <table class="mobile-only">
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
                    <td>{{ player.focus }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import core from '../../../assets/pedd/trinitas-core.json'
import races from '../../../assets/pedd/pedd-races.json'
import backgrounds from '../../../assets/pedd/pedd-backgrounds.json'

const props = defineProps(["chosen"]);
const player = computed(() => props.chosen.getPlayer(core, races, backgrounds))
const armour = ref(0);  //TODO: build from chosen worn equipment

let size = core.sizes.filter(s => s.val == props.chosen.size)[0];

const showHealthInfo = ref(false);
const healthInfo = computed(() => {
    return `${size.val} (${size.health}) + ` +
        `Fortitude (${player.value.fortitude}) + ` +
        `Willpower (${player.value.willpower}) = `;
});

const showDefenceInfo = ref(false)
const defenceInfo = computed(() => {
    return `${size.val} (${size.defence}) + ` +
        `Armour (${armour.value}) + ` +
        `Reflexes (${player.value.reflexIsLimited ? player.value.limitedReflexes : player.value.reflexes}) = `;
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

@media only screen and (min-width: 660px) {

    .flex {
        flex-direction: row;
    }
}
</style>