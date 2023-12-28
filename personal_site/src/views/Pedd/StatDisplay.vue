<template>
    <div id="stats">
        <h4>Stats</h4>
        <table>
            <tr>
                <td>
                    <p>Strength: </p>
                </td>
                <td>{{ player.strength }}</td>
                <td>
                    <p>Dexterity: </p>
                </td>
                <td>{{ player.dexterity }}</td>
                <td>
                    <p>Accuracy: </p>
                </td>
                <td>{{ player.accuracy }}</td>
                <td>
                    <p>Perception: </p>
                </td>
                <td>{{ player.perception }}</td>
                <td>
                    <p>Intelligence: </p>
                </td>
                <td>{{ player.intelligence }}</td>
                <td>
                    <p>Charisma: </p>
                </td>
                <td>{{ player.charisma }}</td>
                <td v-if="player.faith">
                    <p>Faith: </p>
                </td>
                <td v-if="player.faith">{{ player.faith }}</td>
            </tr>
        </table>

        <h4>Resistances</h4>
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

        <h4>Secondary Stats</h4>
        <table v-if="race">
            <tr>
                <td>
                    <p>Health:</p>
                </td>
                <td>{{ player.fortitude + player.willpower + race.baseHealth }}</td>
                <td>
                    <p>Defence:</p>
                </td>
                <td>
                    <table>
                        <tr>
                            <td>Base </td>
                            <td>{{ baseDefence[race.size.val] }}</td>
                            <td> + Armour</td>
                            <td>{{ player.armour }}</td>
                            <td> + Evasion</td>
                            <td>{{ player.evasion }}</td>
                            <td>=</td>
                            <td>{{ baseDefence[race.size.val] + player.armour + player.evasion }}</td>
                        </tr>
                    </table>
                </td>
                <td>
                    <p>Speed: </p>
                </td>
                <td>{{ race.speed.val }}</td>
                <td>
                    <p>Initiative: </p>
                </td>
                <td>{{ player.initiative }}</td>
            </tr>
        </table>

        <h4>Tertiaries</h4>
        <p><small>Don't forget these are just for flavour.</small></p>
        <table>
            <tr>
                <td>
                    <p>Appearance (Str. + Cha.):</p>
                </td>
                <td>{{ player.appearance }}</td>
                <td>
                    <p>Agility (Dex. + Acc.):</p>
                </td>
                <td>{{ player.agility }}</td>
                <td>
                    <p>Foresight (Per. + Int.):</p>
                </td>
                <td>{{ player.foresight }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
const props = defineProps(["player", "race"]);

let baseDefence = {
    tiny: 16,
    small: 10,
    medium: 8,
    large: 6,
    huge: 2
};
</script>

<style lang="css" scoped></style>