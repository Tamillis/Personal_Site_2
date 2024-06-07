<template>
    <div id="stats">
        <h3>Stats: </h3>
        <div class="flex table-like">
            <p>Accuracy: <span>{{ player.accuracy }}</span></p>
            <p>Perception: <span>{{ player.perception }}</span></p>
            <p>Strength: <span>{{ player.strength }}</span></p>
            <p>Dexterity: <span>{{ player.dexterity }}</span></p>
            <p>Charisma: <span>{{ player.charisma }}</span></p>
            <p>Intelligence: <span>{{ player.intelligence }}</span></p>

            <div v-if="player.faith">
                <p>Faith: <span>{{ player.faith }}</span></p>
            </div>
        </div>

        <h3>Resistances: </h3>
        <div class="flex table-like">
            <p>Fortitude: {{ player.fortitude }}</p>
            <p>Reflexes: {{ player.reflexes }}</p>
            <p>Willpower: {{ player.willpower }}</p>
        </div>

        <h3>Secondaries: </h3>
        <div class="flex table-like">
            <p>Health: {{ player.fortitude + player.willpower + (player.race ? player.race.baseHealth : 8) }}</p>
            <p>Defence: Base {{ player.baseDefence }} + Armour {{ player.armour }} + Reflexes {{ player.reflexes }} = {{
                player.defence }}</p>
            <p>Speed: {{ player.race ? player.race.speed.val : "" }}</p>
            <p>Size: {{ player.race ? capitalize(player.race.size.val) : "" }}</p>
        </div>

        <h3>Tertiaries: </h3>
        <p><small>Don't forget these are just for flavour.</small></p>
        <div class="flex table-like">
            <p>Appearance <small>(Str. + Cha.)</small>: {{ player.strength + player.charisma }}</p>
            <p>Agility <small>(Dex. + Acc.)</small>: {{ player.dexterity + player.accuracy }}</p>
            <p>Foresight <small>(Per. + Int.)</small>: {{ player.perception + player.intelligence }}</p>
        </div>

    </div>
</template>

<script setup>
import { capitalize } from '../../assets/functionality';

const props = defineProps(["player"]);

</script>

<style lang="css" scoped>
h3 {
    font-weight: bold;
    font-size: larger;
}

p {
    font-weight: 600;
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