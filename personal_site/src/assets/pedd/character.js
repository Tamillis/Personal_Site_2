export default class Character {
    constructor() {
        this.name = "Dan";
        this.secret = "";
        this.concept = "Smith";
        this.bonds = "The workshop";
        this.ideals = "Something worth making, is worth making well.";
        this.flaws = "Weakness for sweet things.";
        this.hasFaith = false;
        this.race = "Human";
        this.raceStatBoon = ["Accuracy", "Perception"]
        this.raceStatMalus = "Intelligence"
        this.anyRaceStats = false;
        this.racialPowers = [];
        this.background = "Soldier";
        this.backgroundPower = "";
        this.upbringingSkill1 = "Acrobatics";
        this.upbringingSkill2 = "Alchemy";
        this.upbringingLanguage = "Common";
        this.roleStatMajor = "Accuracy";
        this.roleStatMinor = "Perception";
        this.rolePowers = [];
        this.roleSkills = [];
        this.equipmentCollection = null;
        this.armour = "";
        this.helmet = "";
        this.imgSrc = "";
        this.pip = "";
    }
}