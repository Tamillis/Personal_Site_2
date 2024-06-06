<template>
    <div id="stats">
        <div class="flex">
            <h3>Stats: </h3>
            <table>
                <tr>
                    <td>
                        <p>Accuracy: </p>
                    </td>
                    <td>{{ player.accuracy }}</td>
                    <td>
                        <p>Perception: </p>
                    </td>
                    <td>{{ player.perception }}</td>
                    <td>
                        <p>Strength: </p>
                    </td>
                    <td>{{ player.strength }}</td>
                    <td>
                        <p>Dexterity: </p>
                    </td>
                    <td>{{ player.dexterity }}</td>
                    <td>
                        <p>Charisma: </p>
                    </td>
                    <td>{{ player.charisma }}</td>
                    <td>
                        <p>Intelligence: </p>
                    </td>
                    <td>{{ player.intelligence }}</td>
                    <td v-if="player.faith">
                        <p>Faith: </p>
                    </td>
                    <td v-if="player.faith">{{ player.faith }}</td>
                </tr>
            </table>
            <table class="mobile">
                <tr>
                    <td>
                        <p>Accuracy: </p>
                    </td>
                    <td>{{ player.accuracy }}</td>
                </tr>
                <tr>
                    <td>
                        <p>Perception: </p>
                    </td>
                    <td>{{ player.perception }}</td>
                </tr>
                <tr>
                    <td>
                        <p>Strength: </p>
                    </td>
                    <td>{{ player.strength }}</td>
                </tr>
                <tr>
                    <td>
                        <p>Dexterity: </p>
                    </td>
                    <td>{{ player.dexterity }}</td>
                </tr>
                <tr>
                    <td>
                        <p>Charisma: </p>
                    </td>
                    <td>{{ player.charisma }}</td>
                </tr>
                <tr>
                    <td>
                        <p>Intelligence: </p>
                    </td>
                    <td>{{ player.intelligence }}</td>
                </tr>
                <tr v-if="player.faith">
                    <td>
                        <p>Faith: </p>
                    </td>
                    <td>{{ player.faith }}</td>
                    <td></td>
                </tr>
            </table>
        </div>

        <div v-if="player.race">
            <div class="flex">
                <h3>Resistances</h3>
                <table>
                    <tr>
                        <td>
                            <p>Fortitude:</p>
                        </td>
                        <td>{{ player.fortitude }}</td>
                        <td>
                            <p>Reflexes:</p>
                        </td>
                        <td>{{ player.reflexes }}</td>
                        <td>
                            <p>Willpower:</p>
                        </td>
                        <td>{{ player.willpower }}</td>
                    </tr>
                </table>
                <table class="mobile">
                    <tr>
                        <td>
                            <p>Fortitude:</p>
                        </td>
                        <td>{{ player.fortitude }}</td>
                    </tr>
                    <tr>
                        <td>
                            <p>Reflexes:</p>
                        </td>
                        <td>{{ player.reflexes }}</td>
                    </tr>
                    <tr>
                        <td>
                            <p>Willpower:</p>
                        </td>
                        <td>{{ player.willpower }}</td>
                    </tr>
                </table>
            </div>

            <div class="flex">
                <h3>Secondaries: </h3>
                <table>
                    <tr>
                        <td>
                            <p>Health:</p>
                        </td>
                        <td>{{ player.fortitude + player.willpower + player.race.baseHealth }}</td>
                        <td>
                            <p>Defence:</p>
                        </td>
                        <td class="collapse">
                            <table class="collapse border-none">
                                <tr>
                                    <td>Base </td>
                                    <td>{{ baseDefence[player.race.size.val] }}</td>
                                    <td> + Armour</td>
                                    <td>{{ player.armour }}</td>
                                    <td> + Evasion</td>
                                    <td>{{ player.evasion }}</td>
                                    <td>=</td>
                                    <td class="border-none">
                                        {{ baseDefence[player.race.size.val] + player.armour + (player.evasion) }} </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <p>Speed: </p>
                        </td>
                        <td>{{ player.race.speed.val }}</td>
                        <td>
                            <p>Size: </p>
                        </td>
                        <td>{{ capitalize(player.race.size.val) }}</td>
                    </tr>
                </table>
                <table class="mobile">
                    <tr>
                        <td>
                            <p>Health:</p>
                        </td>
                        <td>{{ player.fortitude + player.willpower + player.race.baseHealth }}</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="border-top">
                            <p>Defence:</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="collapse border-bottom" colspan="2">
                            <table class="mobile collapse border-none">
                                <tr>
                                    <td>Base </td>
                                    <td>{{ baseDefence[player.race.size.val] }}</td>
                                    <td> + Armour</td>
                                    <td>{{ player.armour }}</td>
                                    <td> + Evasion</td>
                                    <td>{{ player.evasion }}</td>
                                    <td>=</td>
                                    <td class="border-none">
                                        {{ baseDefence[player.race.size.val] + player.armour + player.evasion }} </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Speed: </p>
                        </td>
                        <td>{{ player.race.speed.val }}</td>
                    </tr>
                    <tr>
                        <td>
                            <p>Size: </p>
                        </td>
                        <td>{{ capitalize(player.race.size.val) }}</td>
                    </tr>
                </table>
            </div>
            <div class="flex">
                <h3>Tertiaries: </h3>
                <div>
                    <p><small>Don't forget these are just for flavour.</small></p>
                    <table>
                        <tr>
                            <td>
                                <p>Appearance <small>(Str. + Cha.)</small>:</p>
                            </td>
                            <td>{{ player.strength + player.charisma }}</td>
                            <td>
                                <p>Agility <small>(Dex. + Acc.)</small>:</p>
                            </td>
                            <td>{{ player.dexterity + player.accuracy }}</td>
                            <td>
                                <p>Foresight <small>(Per. + Int.)</small>:</p>
                            </td>
                            <td>{{ player.perception + player.intelligence }}</td>
                        </tr>
                    </table>
                    <table class="mobile">
                        <tr>
                            <td>
                                <p>Appearance <small>(Str. + Cha.)</small>:</p>
                            </td>
                            <td>{{ player.strength + player.charisma }}</td>

                        </tr>
                        <tr>
                            <td>
                                <p>Agility <small>(Dex. + Acc.)</small>:</p>
                            </td>
                            <td>{{ player.dexterity + player.accuracy }}</td>
                        </tr>
                        <tr>
                            <td>
                                <p>Foresight <small>(Per. + Int.)</small>:</p>
                            </td>
                            <td>{{ player.perception + player.intelligence }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { capitalize } from '../../assets/functionality';

const props = defineProps(["player"]);

let baseDefence = {
    tiny: 16,
    small: 10,
    medium: 8,
    large: 6,
    huge: 2
};
</script>

<style lang="css" scoped>
h3 {
    font-weight: bold;
    font-size: larger;
}

p {
    font-weight: 600;
}

table {
    margin-top: 0;
}

td:last-child {
    border-right: none;
}

.flex {
    display: flex;
    gap: 1rem;
}

.mobile {
    display: none;
}

@media only screen and (max-width: 1050px) {
    .mobile {
        display: inline-block;
    }

    table:not(.mobile) {
        display: none;
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