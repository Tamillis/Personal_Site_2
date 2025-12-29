export default class Character {
    constructor() {
        this.name = "Dan";
        this.concept = "Smith";
        this.bonds = "The workshop";
        this.ideals = "Something worth making, is worth making well.";
        this.flaws = "Weakness for sweet things.";
        this.faith = 2;
        this.race = "Human";
        this.size = "Medium";
        this.raceStatBoon = ["Accuracy", "Perception"]
        this.raceStatMalus = "Intelligence"
        this.racialPowers = ["Arcane Apprentice"];
        this.background = "Soldier";
        this.backgroundPower = "Martial Arts";
        this.upbringingSkill1 = "Acrobatics";
        this.upbringingSkill2 = "Alchemy";
        this.upbringingLanguage = "Common";
        this.roleStatMajor = "Accuracy";
        this.roleStatMinor = "Perception";
        this.rolePowers = ["Action Surge", "Bullrush", "Keen Senses"];
        this.roleSkills = [];
        this.equipmentCollection = null;
        this.armour = "";
        this.helmet = "";
        this.imgSrc = "https://picsum.photos/200";
        this.pip = "";
    }
}