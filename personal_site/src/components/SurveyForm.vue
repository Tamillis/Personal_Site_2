<template>
  <div class="main-text">
    <form @submit.prevent="handleSubmit" action="/surveydata" target="" method="POST" v-if="firstTimeSubmit == null"
      class="subsection" id="survey-form">
      <TextInput question="What's your online handle?" name="handle" content="" :unavailable="takenHandles"
        class="subsection"></TextInput><br />
      <SelectBoxQ question="What country are you from?" name="country" :content="countriesArray" class="subsection">
      </SelectBoxQ><br />
      <NumericQ name="age" question="How old are you?" class="subsection"></NumericQ><br />
      <RadioQ :content="genderOptions" question="What's your gender?" name="gender"></RadioQ><br />
      <CheckBoxQ question="Which D&D class would you be? (Choose 1 or up to 3 for a multi-class)" :content="dndClassList"
        name="class"></CheckBoxQ><br />

      <input type="submit" value="Submit Survey" class="btn z-1" />
    </form>
    <div v-else>
      <h3 className="subtitle">Already Submitted</h3>
      <p>You have already submitted a survey, sorry :(</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TextInput from '../components/TextInput.vue';
import SelectBoxQ from '../components/SelectBoxQ.vue';
import NumericQ from '../components/NumericQ.vue';
import RadioQ from '../components/RadioQ.vue';
import CheckBoxQ from '../components/CheckBoxQ.vue';
import dbsettings from '../assets/dbsettings.json';
import countriesData from '../assets/countries.json';

let countriesArray = ref(countriesData);

//will fix the below when backend is written
//let takenHandlesData = await fetch(window.location.origin + "/surveydata/handles").then(res => res.json());
//let takenHandles = ref(takenHandlesData);
let takenHandles = ref([]);

const dndClassList = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Paladin", "Monk", "Ranger", "Rogue", "Sorcerer", "Wizard", "Warlock"];
let genderOptions = ["Male", "Female", "Other", "Rather not say"];

const firstTimeSubmit = localStorage.getItem("submitted");

function handleSubmit(event) {
  //simple check on preventing multiple posts from a single user. Obviously easy to dodge but should work for most simple users
  //localStorage.setItem("submitted", true);

  const data = new FormData(document.getElementById("survey-form"));

  const jsonData = {};
  jsonData["handle"] = data.get("handle");
  jsonData["country"] = data.get("country");
  jsonData["age"] = data.get("age");
  jsonData["gender"] = data.get("gender");
  jsonData["class"] = data.getAll("class");

  //make post submition using fetch, adding necessary secret X-API-KEY header

  //return out of submitting with invalid data
  if (data.get('handle') == "" || data.get('country') == "") {
    console.log("Invalid data");
    return;
  }
  fetch(window.location.origin + '/surveydata/', {
    method: 'POST',
    body: JSON.stringify(jsonData),
    headers: {
      'X-API-KEY': dbsettings['X-API-KEY']
    }
  });
}

</script>

<style scoped>
.subsection {
  width: 90%;
  min-width: 300px;
}

.z-1 {
  z-index: 1;
}

.textQ,
.numQ,
.selectBoxQ {
  border: none;
  border-radius: 0px;

  margin-left: 2em;
  padding: 4px 2px;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  width: 66vw;
}

@media screen and (min-width: 700px) {

  .textQ,
  .numQ,
  .selectBoxQ {
    width: 500px;
  }
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
}

input[type=number] {
  -moz-appearance: textfield;
}

.checkBoxQ,
.radioQ {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: white solid 1px;

  margin: 2px 5px 0px 5px;

  transition: 0.2s all linear;
}

.checkBoxQ:checked,
.radioQ:checked {
  background: white;
}
</style>