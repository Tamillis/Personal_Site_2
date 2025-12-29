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
        this.equipment = [];
        this.armour = "";
        this.helmet = "";
        this.weapons = [];
        this.imgSrc = "https://picsum.photos/200";
        this.pip = "";
    };

    getPlayer(core, races, backgrounds) {
        let p = {};

        p.name = this.name;
        p.concept = this.concept;
        p.bonds = this.bonds;
        p.ideals = this.ideals;
        p.flaws = this.flaws;

        let race = false;
        if (this.race != "") {
            race = races.filter(r => r.name == this.race)[0];
        }
        p.racialPowers = this.racialPowers;

        p.background = backgrounds.filter(bg => this.background == bg.name)[0];
        p.backgroundPower = this.backgroundPower;

        p.rolePowers = this.rolePowers;

        // stat choices
        for (let stat of core.stats) {
            p[stat.toLowerCase()] = 0;
        }

        p[this.roleStatMajor.toLowerCase()] += 2;
        p[this.roleStatMinor.toLowerCase()] += 1;

        p[this.raceStatBoon[0].toLowerCase()] += 1;
        p[this.raceStatBoon[1].toLowerCase()] += 1;
        p[this.raceStatMalus.toLowerCase()] += -1;

        //set selected size - TODO: make this actually selectable when presented an option
        p.size = race ? (Array.isArray(race.size) ? race.size[0] : race.size) : "Medium";

        for (let stat of p.background.stats) p[stat.toLowerCase()] += 1;

        let setResistance = (s1, s2) => Math.round((s1 + s2) / 2);
        p.reflexes = setResistance(p.accuracy, p.perception);
        p.reflexLimit = this.reflexLimit;
        p.reflexLimited = p.reflexes > p.reflexLimit
        p.fortitude = setResistance(p.strength, p.dexterity);
        p.willpower = setResistance(p.intelligence, p.charisma);

        let chosenSize = core.sizes.filter(s => s.val == p.size)[0]
        p.baseHealth = chosenSize.health;
        p.health = p.baseHealth + p.fortitude + p.willpower

        p.faith = 2; //TODO: make faith input based

        p.skills = [];
        p.skills = this.roleSkills ? this.roleSkills.slice() : []; //copy array by value not ref
        p.skills.push(this.upbringingSkill1);
        p.skills.push(this.upbringingSkill2);
        p.skills.push(`Language (${this.upbringingLanguage})`);

        if (p.background) p.skills = p.skills.concat(p.background.skills);
        p.skills = p.skills.sort((s1, s2) => s1.localeCompare(s2));

        p.equipmentCollection = this.equipmentCollection ? equipment.filter(e => e.name == this.equipmentCollection)[0].equipment.split(",") : [];

        p.pack = this.pack && this.pack != "None" ?
            packs.filter(pk => pk.name == this.pack)[0].equipment.split(",") :
            [];

        p.armour = this.armour + this.shield + this.helmet;

        p.baseDefence = chosenSize.defence;
        p.defence = Number(p.baseDefence) + Number(p.armour) + Number(p.reflexLimited ? p.reflexLimit : p.reflexes);

        p.imgSrc = this.imgSrc;

        return p;
    }
}