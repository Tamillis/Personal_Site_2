<template>

    <h2 class="title">{{ player.name }}, {{ player.concept }}</h2>

    <StatDisplay :player="player" :haveFaith="haveFaith" style="margin-top: 1rem" />

    <div class="flex justify-between gap-1r summary">
        <div>
            <h2>Race</h2>
            <p>{{ player.race ? player.race.name : "None chosen" }}</p>
        </div>

        <div>
            <h2>Background</h2>
            <p>{{ player.background ? player.background.name : "None chosen" }}</p>
        </div>

        <div class="flex-grow">
            <h2>Equipment</h2>
            <p>{{ player.background ? player.background.equipment.join(", ") : "" }}</p>
            <p>{{ player.equipmentCollection ? player.equipmentCollection.equipment : "" }}</p>
        </div>

    </div>

    <div>
        <h2>Skills</h2>
        <div class="flex gap-1r flex-wrap">
            <p v-for="skill in player.skills" style="text-indent: 0;">{{ skill }}</p>
        </div>
    </div>

    <div>
        <h2>Powers</h2>
        <div class="flex gap-1r flex-wrap">
            <div class="power-summary" v-for="power in selectedPowers">
                <h4>{{power.name}}</h4>
                <p><small>{{ power.desc }}</small></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import StatDisplay from './StatDisplay.vue';
import powers from '../../assets/pedd/pedd-powers.json';

const props = defineProps(['player', 'haveFaith']);

const selectedPowers = computed(() => {
    let sp = props.player.racialPowers.concat(props.player.rolePowers)
    if(props.player.backgroundPower) sp.push(props.player.backgroundPower);
    console.log(sp);
    sp = sp.map(p => powers.filter(power => power.name == p)[0]);
    return sp;
});

</script>

<style lang="css" scoped>
.power-summary {
    width: 30%;
}

.power-summary h4 {
    text-indent: 0;
    border-bottom: 1px solid var(--text-color);
}

.power-summary p {
    margin: 0;
    line-height: 1;
}

.power-summary small {
    -webkit-line-clamp: 15;      
    -moz-line-clamp: 15;
    line-clamp: 15;
    display: -webkit-box;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      -ms-box-orient: vertical;
      box-orient: vertical;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>