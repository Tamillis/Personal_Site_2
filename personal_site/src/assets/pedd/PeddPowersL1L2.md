# PEDD Powers from 5e levels 1 to 2
Subclasses have instead taken 2 to 3 of the given options for now.

Some have been combined and / or modified but by and large pains have been taken to leave them alone as much as possible.

## PEDD updates
Also:
- Archetypes are now Roles, player defined (no cards)
- Add section Skill learning and Power learning times
- "Natural Weapons" mean you are always proficient and you cannot be disarmed without surgery
- section about Rests, Long Rests contain Short Rests

## Format
```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```

## Example Powers
**Artisan** – gain Proficiency in a Tool Set and Proficiency in a Skill. You also gain Expertise in a Tool Set, the one you just gained Proficiency in or another you already had Proficiency in. When not at Disadvantage, you can choose to take 8 on the dice instead of the number rolled when making any Tool Set check, adding Stat and any Bonus to that as normal.

**Brawler** – (Unique) Your Unarmed Attacks contain the Block I, Finesse and Parry (bludgeoning) properties. Your Unarmed Attacks deal d4 damage.

**Combat Expert** – (Proficiency with a martial weapon) You can Engage one more enemy, up to the maximum number possible for your Size

**Hale** – (Once per 2 Powers) Rests grant an additional Fortitude + Willpower (to a minimum of 1) as well to Health recovery.

**Hardy** - (Once per 2 Powers) Add your Fortitude & Willpower (to a minimum of 1) to your Health total. If you increase or decrease your Fortitude or Willpower at other times in the game, recalculate your Health Bonus from Hardy using the new values.

**Hunter** – (Unique) You can Aim as a Bonus Action, granting a Bonus to the next Ranged Weapon Attack you make this turn.

**Innate Spells** – (A spellcasting, Mana), learn two spells from your known spell lists. You cannot learn spells of a Magnitude you do not have Mana for.

**Learned** – (History, Arcana or Religion) gain Expertise in history, arcana and religion if you had Proficiency with each. As you gain Proficiency with each of these skills later in the game, you also gain Expertise in them from Learned.

**Protector** – (Unique) You can make the Block action with Shields as a Bonus action. You can instead block for an ally within 5ft of you. They gain the benefits of the block as if they themselves blocked.

**Quick Recovery** – when Resting regain x2 Health from Recovery. Can be taken again for x3 after 5 or more Powers, then finally once more for x4 affect after 10 or more Powers.

**Resistance Increase** – (Once every 5<sup>th</sup> Power), increase a Resistance by +2

**Run and Gun** – (Unique) you can Run and Gun without Disadvantage.

**Stat Increase** – (Once every 5<sup>th</sup> Power), increase a Statistic by +1 to a maximum of +5.

**Aptitude I/II** - (once every 5<sup>th</sup> Power), Bonus is increased to +3, or +4 if taken twice. Cannot be taken more than twice.

## Racial Powers

1. "Fleet of Foot", 
1. "Fey Ancestry", 
1. "Fey Teleportation", 
1. "Heritage of the Sea",
1. "Hunter's Intuition", 
1. "Improved Breath Weapon", 
1. "Keen Senses"
1. "Mask of the Wild/Urbane", 
1. "Menacing", 
1. "Natural Illusionist", 
1. "Naturally Stealthy", 
1. "Nimble & Squat Nimbleness", 
1. "Orcish Aggression", 
1. "Orcish Fury", 
1. "Prodigy", 
1. "Psychic Sense"
1. "Relentless Endurance"
1. "Scribe's Insight", 
1. "Second Chance"
1. "Speak with Small Beasts", 
1. "Stonecunning", 
1. "Superior Darkvision & Sunlight Sensitivity", 

### Extra Language
```json
{
    "name" : "Extra Language",
    "tag" : ["racial"],
    "preq" : [],
    "desc" : "You were raised in an environment that required you to become bilingual, and you've gained an aptitude for languages. You know one more Childhood Language, and you learn other languages at twice the usual rate."
}
```

### Elven Accuracy
```json
{
    "name" : "Elven Accuracy",
    "tag" : ["racial", "combat", "offensive"],
    "preq" : [],
    "desc" : "The accuracy of elves is legendary, especially that of elf archers and spellcasters. Youhave uncanny aim with attacks that rely on precision rather than brute force. Once per Short Rest, you have advantage on an attack made with Accuracy, or a ranged spell attack."
}
```

### Dwarven Toughness
```json
{
    "name" : "Dwarven Toughness",
    "tag" : ["racial"],
    "preq" : [],
    "desc" : "Your Health maximum increases by 1, and it increases by 1 for every 5 Powers you have."
}
```

### Dragon Wings
```json
{
    "name" : "Dragon Wings",
    "tag" : ["racial"],
    "preq" : [],
    "desc" : "You have draconic wings. With your wings, you have a flying speed of 20 feet if you aren't wearing heavy armor and aren't exceeding your carrying capacity."
}
```

### Draconic Resistance
```json
{
    "name" : "Draconic Resistance",
    "tag" : ["racial"],
    "preq" : [],
    "desc" : "You have resistance to the damage type associated with your ancestry."
}
```

### Dragon Fear
```json
{
    "name" : "Dragon Fear",
    "tag" : ["racial"],
    "preq" : [],
    "desc" : "When angered, you radiate menace. Instead of exhaling destructive energy, you can expend a use of your Draconic Ancestry's breath weapon to roar, forcing each character of your choice within 30ft of you to make a Willpower saving throw vs 8 + your Bonus + your Charisma. A target automatically succeeds on the save if it can't hear or see you. On a failed save, a target becomes Frightened for 1 minute. If the frightened target takes any damage, it can repeat the saving throw, ending the effect on itself on a success."
}
```

### Dragon Hide
```json
{
    "name" : "Dragon Hide",
    "tag" : ["racial"],
    "preq" : [],
    "desc" : "You have scales and claws reminiscent of your draconic ancestors. You gain the following benefits:
- Your scales are hardened. Your Base Defence is now 10.
- You can grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no Action. The claws are natural weapons. If you hit with them, you deal slashing damage equal to 1d4 + your Strength."
}
```

### Draconic Language
```json
{
    "name" : "Draconic Language",
    "tag" : ["racial"],
    "preq" : [],
    "desc" : "You have an innate and full understanding of the language of Dragons. You are able to converse in Draconic, and as the language of creation, every utterence has greater weight, when you put your will behind it. Once per Short Rest, you can make a Charisma check with Advantage. When you do so, you speak Draconic, and yet any who hear you understand what it is you say."
}
```

### Determination
```json
{
    "name" : "Determination",
    "tag" : ["racial", "roll-effecting"],
    "preq" : [],
    "desc" : "When you make an attack roll, an ability check, or a saving throw, you can do so with Advantage. Once you use this Power, you can't use it again until you finish a Short Rest."
}
```

### Natural Aptitude
```json
{
    "name" : "Natural Aptitude",
    "tag" : ["racial"],
    "preq" : [],
    "desc" : "This race has a natural aptitude for picking up abilities quickly, weilding them as well as other Races are born to their own natural abilities. Choose any non-racial Power where the Statistic Prerequisites do not total above 1 and you qualify for that Power, and take that Power as your Natural Aptitude.
    
    This Power can be taken twice, choosing a different non-racial Power each time."
}
```

### Natural Artifice
```json
{
    "name" : "Natural Artifice",
    "tag" : ["racial"],
    "preq" : [],
    "desc" : "You gain the benefits of the Artificer's Lore Power, only for you such knowledge is instinctual than learned."
}
```

### Savage Attacks
```json
{
    "name" : "Savage Attacks",
    "tags" : ["racial", "combat", "offensive"],
    "preq" : ["Strength +1"],
    "desc" : "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
}
```

### Savage Magic
```json
{
    "name" : "Savage Magic",
    "tags" : ["racial", "spellcasting"],
    "preq" : ["Spellcasting"],
    "desc" : "When you score a critical hit with a spell attack, you can roll one of the spell's damage dice one additional time and add it to the extra damage of the critical hit."
}
```

### Natural Camouflage
``` json
{
    "name": "Natural Camouflage",
    "tags": ["racial", "exploration", "utility"],
    "preq": [],
    "desc": "You can try to hide by pressing yourself up against a solid surface as an Action, such as a tree or wall, that is at least as tall and wide as you are, or against the ground by Going Prone. You gain a +10 bonus to Stealth checks as long as you remain there without moving or taking Actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
}
```

### Darkvision
```json
{
    "name": "Darkvision",
    "tags": ["racial", "exploration", "utility"],
    "preq": [],
    "desc": "You can see in dim light within 60ft of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of grey."
}
```

### Stout Resiliance
```json
{
    "name": "Stout Resiliance",
    "tags": ["racial", "exploration", "utility"],
    "preq": [],
    "desc": "You have advantage on saving throws against poison, and you have resistance to poison damage."
}
```

### Ancestors of Stone
```json
{
    "name": "Ancestors of Stone",
    "tags": ["racial", "combat", "spell-like", "defensive", "passive"],
    "preq": [],
    "desc": "As an Action you make your flesh turn as hard as stone. For 1 minute you Concentrate as if on a spell, and while concentrating you have resistance to nonmagical physical damage.
    
    Additionally, your Base Defence is now 10."
}
```

### Arcane Aptitude
```json
{
    "name": "Arcane Aptitude",
    "tags": ["racial", "combat", "cantrip"],
    "preq": [],
    "desc": "You have a natural grasp of arcane magic and with only a little preparation, can have ready a plethora of minor magics. 
    
You know one cantrip of your choice from the Arcane Sphere spell list which you can switch for a different Arcane Sphere cantrip after a Long Rest. Intelligence is your spellcasting ability for it. 

Additionally, you learn Arcane spells at twice the usual rate."
}
```

### Mist Mad
```json
{
    "name" : "Mist Mad",
    "tag" : ["racial", "stat-increase"],
    "preq" : [],
    "desc" : "Many Gnomes are cautioned to avoid the Mists at all costs, and many heed those wise words. Those that don't are often doomed to be hypnotized by the Mist's maddening swirls, and be drawn deep within. Those that survive are inevitably deeply changed, and far from home. You have the following effects:

**Major Mutation** - you have several major mutations warping and twisting your body in many locations, which have a collective effect. The effect of these mutations is not only to make you look like the horror that peasants tell tales of to frighten their children, enough to even make Mistdivers flinch at your visage, but one of the following;
- Bulging Skin-Bursting Muscles - you ignore the heavy property of weapons, you gain proficiency in Athletics, and your Strength is increased by 1
- Pawed digitigrade Hooves and Tail - your movement speed is now 35ft, you gain proficiency in Acrobatics, and your Dexterity is increased by 1
- Armoured Shell and Scales - your base Armour when not wearing armour is 5 and your Evasion modifier doesn't affect your Defence. You are resistant to Slashing damage, and your Constitution is increased by 1.
- Headful of Mismatched Eyes - your passive perception is increased by 5, you gain proficiency in Observation, and your Perception score is increased by 1.
- Hypnotic Bioluminescence - you know the Friends cantrip, using your Charisma to cast the spell, you gain proficiency in Persuasion, and your Charisma score is increased by 1."
}
```

### Everchanging Nature
```json
{
    "name": "Everchanging Nature",
    "tags": ["racial", "combat", "exploration", "cantrip", "spell-like"],
    "preq": [],
    "desc": "Your arcane nature grants you spell-like abilities as if you know the Prestidigitation cantrip. Additionally, after your 5th Power, you gain the ability to effectively cast the Absorb Elements spell at Magnitude 2 once with this Power and regain the ability to do so when you finish a Long Rest. After your 10th Power, you can effectively cast the Alter Self spell once with this Power and regain the ability to do so when you finish a Long Rest. Intelligence is your effective spellcasting ability for these Powers."
}
```

### Wood Elf Magic
```json
{
    "name": "Wood Elf Magic",
    "tags": ["racial", "exploration", "cantrip", "spellcasting"],
    "preq": [],
    "desc": "You learn the magic of the primeval woods, which are revered and protected by your people. You learn one Primal Sphere cantrip of your choice. You also learn the Longstrider and Pass Without Trace spells, each of which you can cast once without expending Mana. You regain the ability to cast these two spells in this way when you finish a Long Rest. The Verdance of your locale is your spellcasting ability for all three spells. See the Verdance table."
}
```

### Drow Magic
```json
{
    "name": "Drow Magic",
    "tags": ["racial", "exploration", "cantrip", "spellcasting"],
    "preq": [],
    "desc": "You learn the magic of the raiders of the dark places. You learn the Dancing Lights cantrip. You also learn the Faerie Fire and Darkness spells, each of which you can cast once without expending Mana. You regain the ability to cast these two spells in this way when you finish a Long Rest. Charisma is your spellcasting ability for these spells."
}
```

### Drow High Magic
```json
{
    "name": "Drow Magic",
    "tags": ["exploration", "cantrip", "spellcasting"],
    "preq": ["Drow Magic"],
    "desc": "You learn more of the magic typical of dark elves. You learn the Hunter's Mark spell and can cast it at will, without expending Mana. You also learn the Hold Person and Dispel Magic spells, each of which you can cast once without expending Mana. You cast these spells at their lowest Magnitude with this Power. You regain the ability to cast the spells in this way when you finish a Long Rest. Charisma is your spellcasting ability for these spells."
}
```

### Tinkerer
```json
{
    "name": "Tinkerer",
    "tags": ["racial", "exploration", "utility"],
    "preq": [],
    "desc": "You gain proficiency with Skill Tinker's Tools. Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (1 Health, 5 Defence). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your Action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:
- **Clockwork Toy**. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.
- **Fire Starter**. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.
- **Music Box**. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.
- At your DM's discretion, you may make other objects with effects similar in power to these. The Prestidigitation cantrip is a good baseline for such effects."
}
```

### Svirfneblin Magic
```json
{
    "name": "Svirfneblin Magic",
    "tags": ["racial", "exploration", "cantrip", "spellcasting"],
    "preq": [],
    "desc": "You have inherited the innate spellcasting ability of your ancestors.

You learn to cast each of the following spells once without expending Mana with this Power: Blindness/Deafness, Blur, Disguise Self, and Nondetection (targetting only yourself  but without needing the 25gp material component). You regain the ability to cast these spells when you finish a Long Rest. Intelligence is your spellcasting ability for these spells"
}
```

## Background Powers
Powers available to be taken as part of a background. Primarily "lower tier" powers, meaning every non-background non-racial Power will require a bit more in the way of prerequisites, and be meatier.

### Lucky
```json 
{
    "name": "Lucky",
    "tags": ["background", "utility", "roll-effecting"],
    "preq": [],
    "desc": "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new result, even if it is a 1."
}
```

### Cursed
```json
{
    "name" : "Cursed",
    "tag" : ["background", "utility", "roll-effecting"],
    "preq" : ["each", "prerequisite"],
    "desc" : "When you roll a 20 on an attack roll, ability check, or saving throw, you must reroll the die and use the new result, even if it is a 20.

However this misfortune has a habit of spreading, even to your enemies. Once per Long Rest you can turn one successful attack roll, skill check or saving throw of an enemy you can see into a failure."
}
```

### Artificer's Lore
```json
{
    "name": "Artificer's Lore",
    "tags": ["background", "skill", "passive"],
    "preq": [],
    "desc": "Whenever you make an History check related to magical, alchemical, or technological items, you can add twice your proficiency Bonus  as if you had Expertise in History, instead of any other Bonus that may apply."
}
```

### Journeyman Mage
```json
{
    "name": "Journeyman Mage",
    "tags": ["background", "spellcasting"],
    "preq": [],
    "desc": "Choose a Sphere of Magic: Arcane, Divine, Occult or Primal. You learn two cantrips of your choice from that sphere's spell list.

In addition, choose one 1st Circle Spell to learn from that same list. Using this Power, you can cast the spell twice at Magnitude I, and you must finish a Long Rest before you can cast it with this Power again.

Your spellcasting statistic for these spells depends on the class you chose: Intelligence for Arcane, Faith for Divine, Charisma for Occult or Verdance for Primal (see the Verdance table).

Additionally being a Journeyman Mage makes learning the corresponding Spellcasting Power and Mana Power much faster."
}
```

### Danger Sense
```json
{
    "name" : "Danger Sense",
    "tag" : ["exploration", "reactive", "combat", "utility", "background"],
    "preq" : ["Perception +1"],
    "desc" : "You gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Reflex saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
}
```

### Jack of all Trades

```json
{
    "name" : "Jack of All Trades",
    "tag" : ["exploration", "passive", "background"],
    "preq" : [],
    "desc" : "You can add half your Proficiency Bonus, rounded down, to any ability check you make that doesn't already include a Proficiency Bonus."
}
```

### Song of Rest
```json
{
    "name" : "Song of Rest",
    "tag" : ["exploration", "active", "healing", "background"],
    "preq" : ["each", "prerequisite"],
    "desc" : "You can use soothing music or oration to help revitalize your wounded allies during a Short Rest. If you or any friendly creatures who can hear your performance regain Health at the end of the Short Rest, each of those creatures regains an extra 1d6 Health."
}
```

## Powers

### Draconic Warding
```json
{
    "name" : "Draconic Warding",
    "tag" : ["combat", "defensive", "immunity"],
    "preq" : ["After 5 Powers", "Draconic Resistance", "Constitution +1"],
    "desc" : "As an Action, you can channel your draconic energy to protect yourself. Until the start of the next Round, you become Immune to the damage type associated with your Draconic Ancestry. You can use this Power a number of times equal to your Constitution per Long Rest."
}
```

### Bountiful Luck
```json
{
    "name" : "Name",
    "tag" : ["utility", "roll-effecting"],
    "preq" : ["Lucky"],
    "desc" : "Your people have extraordinary luck, which you have learned to mystically lend to your companions whenever you see them falter. You're not sure how you do it, you just wish it, and it happens. Surely a sign of fortune's favor!

When an ally you can see within 30 feet of you rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, you can use your Bonus Action to let the ally reroll the die. The ally must use the new roll.

When you use this Power, you can't use your Lucky racial trait before the end of your next turn."
}
```

### Arcane Spellcasting

```json
{
    "name" : "Arcane Spellcasting",
    "tags" : ["spellcasting"],
    "preq" : ["Intelligence +1", "Mana"],
    "desc" : "**Cantrips** - You know three cantrips of your choice from the Arcane Sphere.

**Spellbook** - You have a spellbook containing six 1st-Magnitude arcane spells of your choice. Your spellbook is the repository of the spells you know, except your Innate spells, which are fixed in your mind. You can add to your spellbook through two methods: spell invention or by copying spells you encounter in your adventures. Spell invention is a Downtime Activity, where you 'invent' a spell of your choice from the Arcane Sphere spell list.

Copying a spell into your spellbook involves reproducing the basic form of the spell, then deciphering the intricacies of the spell into a form your mind can replicate in magic. You must practice the spell until you understand the sounds and/or gestures required, then transcribe it into your spellbook. For each Magnitude of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.

Any spell scrolls, spell books or willing teachers you encounter in your adventures can let you copy spells into your spellbook. You can only invent and copy spells that you have the mana Magnitude for. 

**Replacing the Book** - You can copy a spell from your own spellbook into another book-for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own studies and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell. If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.

**The Book's Appearance** - Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.

**Preparing and Casting Spells** - You use your Reserve of Mana to cast spells, gained through the Mana Power. In addition to any Innate spells you know, you prepare a list of arcane spells that are available for you to cast each day. To do so, choose a number of spells from your spellbook equal to your Intelligence + your Bonus. The spells must be of a Magnitude that you have the ability to Cast. You can change your list of prepared spells when you finish a long rest. Preparing a new list of arcane spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell Magnitude for each spell on your list.

**Spellcasting Ability** - Intelligence is your spellcasting ability for your arcane spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence when setting the saving throw DC for an arcane spell you Cast and when making an attack roll with one.

**Spell save DC** - 8 + your Bonus + your Intelligence

**Spell attack modifier** - your Bonus + your Intelligence

**Ritual Casting** - You can cast an arcane spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.

**Spellcasting Focus** - You can use an arcane focus as a spellcasting focus for your wizard spells." 
}

```

### Mana
```json
{
    "name" : "Mana",
    "tag" : ["racial", "spellcasting", "utility"],
    "preq" : [],
    "desc" : "You're able to tap into a well of mystical energy within yourself known to practitioners as Mana. Your Mana comes in a Reserve, of which portions, or 'points', are at a certain Magnitude. Higher Magnitude Reserve can always be used at a lower Magnitude, though it still only counts as 1 point. Consult the table below by your rank in this Power to see what your Reserve is per Magnitude.
    
    | Magnitude I | Magnitude II | Magnitude III | Magnitude IV | Magnitude V | Magnitude VI | Magnitude VII | Magnitude VIII | Magnitude IX |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | 2 | - | - | - | - | - | - | - | - |
    | 4 | 2 | - | - | - | - | - | - | - |
    | 4 | 3 | 2 | - | - | - | - | - | - |
    | 4 | 3 | 3 | 1 | - | - | - | - | - |
    | 4 | 3 | 3 | 3 | 1 | - | - | - | - |
    | 4 | 3 | 3 | 3 | 2 | 1 | - | - | - |
    | 4 | 3 | 3 | 3 | 2 | 1 | 1 | - | - |
    | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | - |
    | 4 | 3 | 3 | 3 | 3 | 1 | 1 | 1 | 1 |
    | 4 | 3 | 3 | 3 | 3 | 2 | 2 | 1 | 1 |
    "
}
```

### Rage

```json
{
    "name" : "Rage",
    "tag" : ["combat", "offensive", "utility", "unique"],
    "preq" : ["Strength +1, Willpower +1"],
    "desc" : "In battle, you fight with primal ferocity. You can enter a rage as a Bonus Action.

While raging, you gain the following benefits if you aren't wearing heavy armor:
- You have advantage on Strength checks and Constitution saving throws.
- When you make a melee weapon attack using Strength, you gain a +1 Bonus to the damage roll.
- You have resistance to bludgeoning, piercing, and slashing damage.
- If you are able to cast spells, you can't cast them or concentrate on them while raging.
- Your Rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a Bonus Action.

Once you have raged a number of teams equal to your Willpower Stat, you must finish a Long Rest before you can Rage again."
}
```

### Improved Rage

```json
{
    "name" : "Improved Rage",
    "tag" : ["combat", "offensive", "utility", "rage", "Once every 4 Powers"],
    "preq" : ["Rage", "Strength +2"],
    "desc" : "While raging, when you make a melee weapon attack using Strength, you gain a +2 Bonus to the damage roll, and your Rage doesn't end early unless you will it to with a Bonus Action. 
    
    Every time you take this power hereafter, the bonus to damage, duration and strength prerequisite increase by 1."
}
```

### Hale Defence

```json
{
    "name" : "Hale Defence",
    "tag" : ["combat", "defensive", "passive"],
    "preq" : ["Constitution +2"],
    "desc" : "Your steadfast ability to take hits sees you through. When not wearing Armour, your Evasion is replaced by your Constitution when calculating Defence. You can use a shield and still gain this benefit."
}
```

### Reckless Attack
```json
{
    "name" : "Reckless Attack",
    "tag" : ["combat", "offensive"],
    "preq" : ["Strength +1"],
    "desc" : "You can throw aside all concern for defense to attack with fierce desperation. If you decide to attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until the next turn."
}
```


### Bardic Inspiration
```json
{
    "name" : "Bardic Inspiration",
    "tag" : ["exploration", "active", "combat", "utility"],
    "preq" : ["Charisma +1"],
    "desc" : "You can inspire others through stirring words or music. To do so, you use your bonus action to choose one character other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.
    
Once within the next 10 minutes, the character can roll the die and add the number rolled to one ability check, attack roll, or saving throw they make. The character can wait until after they roll the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A character can have only one Bardic Inspiration die at a time.

You can use this Power a number of times equal to your Charisma modifier. You regain any expended uses when you finish a Rest."
}
```

### Divine Domain

All (in time) Divine Domain Features and Channel Divinity abilities are going to be grouped together in the meta category "Miracles", just like Warlocks have "Invocations".

```json
{
    "name" : "Divine Domain",
    "tag" : ["spellcasting", "repeatable"],
    "preq" : ["Divine Spellcasting"],
    "desc" : "You immerse yourself in exemplifying the ways of your Faith.

**Domain Spells** - choose 2 Divine sphere spells you can cast that represent your faith, they are now Innate Spells for you.

**Miracles** - Choose one Miracle that you have the prerequisites for. You now are blessed and capable of bestowing this Miracle. You can't take the same Miracle more than once."
}
```

### Miracles

```json
{
    "name" : "Warding Flare",
    "tag" : ["combat", "offensive", "utility", "miracle"],
    "preq" : ["Divine Domain"],
    "desc" : "You gain the Light cantrip if you don't already know it, which you cast using Faith.

Also, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a character within 30 feet of you that you can see, you can use your bonus action to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this Miracle.

You can use this Miracle a number of times equal to your Faith (a minimum of once). You regain all expended uses when you finish a Rest.

You cannot take this Power independently, you must take it through Divine Domain."
}
```

```json
{
    "name" : "Disciple of Life",
    "tag" : ["exploration", "miracle", "healing", "passive"],
    "preq" : ["Divine Domain"],
    "desc" : "Your healing spells are miraculously more effective. Whenever you use a spell of Magnitude 1 or higher to restore Health to a Character, the Character regains additional Health equal to 2 + the spell's Magnitude."
}
```

```json
{
    "name" : "Blessings of Knowledge",
    "tag" : ["exploration", "miracle", "skill", "instant"],
    "preq" : ["Divine Domain"],
    "desc" : "In a moment of divine revelation, you learn two language Skills of your choice, also gaining Expertise with them. You also become Proficient and gain Expertise in your choice of two of the following skills: Arcana, History, Nature, or Religion. This is regardless of if you were Proficient with those skills or languages before."
}
```

```json
{
    "name" : "Channel Divinty: Knowledge of the Ages",
    "tag" : ["miracle", "channel divinity", "exploration", "skill"],
    "preq" : ["Divine Domain"],
    "desc" : "You can channel your divinity to tap into a divine well of knowledge. As an Action, you choose one Skill. For 10 minutes, you have Proficiency with the chosen Skill."
}
```

```json
{
    "name" : "Channel Divinity: Turn Undead",
    "tag" : ["miracle", "channel divinity", "combat", "utility"],
    "preq" : ["Divine Domain"],
    "desc" : "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Willpower saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.

A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. For its action, it can only Move or try to escape from an effect that prevents it from Moving. If there's nowhere to move, the creature can use the Dodge action.

You must then finish a Short Rest to use a Channel Divinity Miracle again."
}
```

### Secret Language
```json
{
    "name" : "Secret Language",
    "tag" : ["exploration", "passive"],
    "preq" : [],
    "desc" : "You know the secret language of a cloistered society, gang, network or other such group. You can speak the language and use it to leave coded messages, the medium varying significantly between secret languages. You and others who know this language automatically spot and decipher such a message. Others who listen to or encounter encoded messages can't decipher the language without magic."
}
```

### Wild Shape
```json
{
    "name" : "Wild Shape",
    "tag" : ["exploration", "active", "combat", "utility"],
    "preq" : ["Primal Spellcasting"],
    "desc" : "You can use your Action to magically assume the shape of a Beast that you have learned before (what constitutes 'learning a creature' depends on the creature and the circumstances, typically an hour of unobtrusive observation). 
    
- You can use this Power a number of times equal to your Connection. You regain expended uses when you finish a Short Rest. 
- You can transform into any beast that has a Challenge Rating of 1/2 or lower that doesn't have a flying, burrowing or swimming speed.
- You can stay in a wild shape for 1 hour. You then revert to your normal form unless you expend another use of this Power. You can revert to your normal form earlier by using a Bonus Action on your turn. You automatically revert if you fall unconscious, drop to 0 Health, or die.

While you are transformed, the following rules apply:
- Your Strength, Dexterity, Accuracy and Perception statistics are replaced by those of the Creature. You retain your Intelligence and Charisma statistics, and also retain all of your skill and saving throw proficiencies, in addition to gaining those of the Creature. If the Creature has the same Proficiency Bonus as you, but the Bonus in its stat block is higher than yours, use the Creature's Bonus instead of yours. If the Creature has any legendary or lair actions, you can't use them.
- When you transform, you assume the beast's full Health. When you revert to your normal form, you return to the Health value you had before you transformed. However, if you revert as a result of dropping to 0 Health, any excess damage carries over to your normal form, For example, if you take 10 damage in a form that has only 1 Health left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 Health, you aren't knocked unconscious.
- You can't cast spells, and your ability to speak or take any action that requires hands or humanoid mouth is limited to the capabilities of your form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as Call Lightning, that you've already cast.
- You retain the benefit of any Powers and can use them if the new form is physically capable of doing so. However, as your Perception is replaced, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.
- You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
}
```

### Expanded Wild Shape
Increase CR limit by 1/2 to a maximum of 6, increase number of hours you can stay in a wild shape by 1 to a maximum of 6, and choose one category: flying speed, burrowing speed, swimming speed, monstrosity, giant, dragon, elemental, fey, ooze, plant. All that you have learned before.

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```

### Combat Wild Shape

```json
{
    "name" : "Combat Wild Shape",
    "tag" : ["combat", "self-healing", "utility"],
    "preq" : ["Wild Shape"],
    "desc" : "You gain the ability to use Wild Shape on your turn as a Bonus Action, rather than as an Action.

Additionally, while you are transformed by Wild Shape, you can use a Bonus Action to expend Mana to regain 1d8 Health per Mana expended, up to your maximum mana magnitude."
}
```

### Secrets of the Land
```json
{
    "name" : "Secrets of the Land",
    "tag" : ["spellcasting", "repeatable", "exploration", "utility"],
    "preq" : ["Primal Spellcasting"],
    "desc" : "Your magic is influenced by the druidic practicies, mysterious rites and primal secrets of the land you're connected to.
    
**Bonus Cantrip** - You learn one additional Primal sphere cantrip of your choice.

**Land Spells** - Choose 2 Primal sphere spells you can cast that represent the land of your Connection, they are now Innate Spells for you.

**Natural Recovery** - You can regain some of your magical energy by sitting in meditation and communing with nature. During a Short Rest, you choose expended Mana to recover, up to your Magnitude. You can't use this Power again until you finish a Long Rest.

When you take this Power again, you only gain a Bonus Cantrip and Land Spells."
}
```

### Fighting Styles

```json
{
    "name" : "Fighting Style",
    "tag" : ["combat", "fighting style"],
    "preq" : [],
    "desc" : "You adopt a particular style of fighting as your specialty. Choose one Fighting Style Power you have the prerequisites for. You can't take the same Fighting Style Power more than once, but if you take this Power again you can choose a different Fighting Style."
}
```
```json
{
    "name" : "Archery",
    "tag" : ["combat", "fighting style", "offensive", "ranged"],
    "preq" : ["Fighting Style", "Accuracy +1"],
    "desc" : "You gain a +2 bonus to attack rolls you make with Slings and Bows."
}
```
```json
{
    "name" : "Marksman",
    "tag" : ["combat", "fighting style", "offensive", "ranged"],
    "preq" : ["Fighting Style", "Accuracy +1"],
    "desc" : "You gain a +2 bonus to attack rolls you make with Firearms & Pistols without the Scatter property."
}
```
```json
{
    "name" : "Akimbo",
    "tag" : ["combat", "fighting style", "offensive", "ranged"],
    "preq" : ["Fighting Style", "Accuracy +1"],
    "desc" : "when wielding two light ranged weapons and you make an attack action with one, as a Bonus Action you can make an attack with the other weapon. You do not add Accuracy to the damage roll of the second attack."
}
```
```json
{
    "name" : "Blind Fighting",
    "tag" : ["combat", "fighting style", "offensive", "melee"],
    "preq" : ["Fighting Style", "Perception +1"],
    "desc" : "You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you."
}
```
```json
{
    "name" : "Defensive Fighting",
    "tag" : ["combat", "fighting style", "defensive", "melee", "passive"],
    "preq" : ["Fighting Style", "Strength +1"],
    "desc" : "While you are wearing armour, you gain a +1 bonus to your Armour."
}
```
```json
{
    "name" : "Duelling",
    "tag" : ["combat", "fighting style", "offensive", "passive"],
    "preq" : ["Fighting Style", "Dexterity +1"],
    "desc" : "When wielding a one-handed melee weapon or a pistol, and no other weapons, you gain a +2 bonus to damage rolls."
}
```
```json
{
    "name" : "Great Weapon Fighting",
    "tag" : ["combat", "fighting style", "offensive", "melee", "passive"],
    "preq" : ["Fighting Style", "Strength +1"],
    "desc" : "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."
}
```
```json
{
    "name" : "Protection",
    "tag" : ["combat", "fighting style", "defensive"],
    "preq" : ["Fighting Style", "Dexterity +1"],
    "desc" : "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your Bonus Action to impose disadvantage on the attack roll. You must be wielding a shield or a weapon with the Block property."
}
```
```json
{
    "name" : "Thrown Weapon Fighting",
    "tag" : ["combat", "fighting style", "offensive", "ranged"],
    "preq" : ["Fighting Style", "Accuracy +1"],
    "desc" : "You can draw a weapon that has the Thrown property as part of the attack action you make with the weapon. In addition, when you hit with a ranged attack using a Thrown weapon, you gain a +2 Bonus to the damage roll."
}
```
```json
{
    "name" : "Two Weapon Fighting",
    "tag" : ["combat", "fighting style", "offensive", "melee", "passive"],
    "preq" : ["Fighting Style", "Dexterity +1"],
    "desc" : "When you engage in two-weapon fighting, you can add your attack Statistic to the damage of the second attack."
}
```
```json
{
    "name" : "Unarmed Fighting",
    "tag" : ["combat", "fighting style", "offensive", "melee", "passive"],
    "preq" : ["Fighting Style", "Strength +1"],
    "desc" : "Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8. At the start of each Round, you can deal 1d4 bludgeoning damage to one creature grappled by you."
}
```
```json
{
    "name" : "Close Quarters Shooter",
    "tag" : ["combat", "fighting style", "offensive", "ranged", "passive"],
    "preq" : ["Fighting Style", "Accuracy +1", "Dexterity +1"],
    "desc" : "When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks."
}
```
```json
{
    "name" : "Mariner",
    "tag" : ["combat", "fighting style", "defensive", "utility"],
    "preq" : ["Fighting Style", "Strength +1"],
    "desc" : "As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to your Armour."
}
```
```json
{
    "name" : "Sniper",
    "tag" : ["combat", "fighting style", "ranged", "offensive"],
    "preq" : ["Fighting Style", "Accuracy +1"],
    "desc" : "When attacking a Character 60ft away or further with a ranged weapon, you gain a +2 Bonus to damage rolls."
}
```
```json
{
    "name": "Blessed Warrior",
    "tag": ["combat", "fighting style", "spellcasting", "utility"],
    "preq": ["Fighting Style", "Faith +1"],
    "desc": "You learn two cantrips of your choice from the divine sphere. Charisma is your spellcasting ability for them."
}
```
```json
{
    "name": "Druidic Warrior",
    "tag": ["combat", "fighting style", "spellcasting", "utility"],
    "preq": ["Fighting Style", "Faith +1"],
    "desc": "You learn two cantrips of your choice from the nature sphere. Your spellcasting ability for these spells is determined by the current Verdance of nature where you are, as detailed in the Verdance table."
}
```


### Second Wind

```json
{
    "name" : "Second Wind",
    "tag" : ["combat", "utility", "self-healing"],
    "preq" : ["Constitution +1"],
    "desc" : "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain Health equal to 1d10 + your Proficiency Bonus.

Once you use this Power, you must finish a Short Rest before you can use it again."
}
```
### Action Surge

```json
{
    "name" : "Action Surge",
    "tag" : ["combat", "utility", "unique"],
    "preq" : ["Willpower +1", "Dexterity +1"],
    "desc" : "You can push yourself beyond your normal limits for a moment. During a Round after your Action, you can take one additional Action.

Once you use this Power, you must finish a Short Rest before you can use it again."
}
```

### Foresighted Defence

```json
{
    "name" : "Foresighted Defence",
    "tag" : ["combat", "defensive", "passive"],
    "preq" : ["Perception +1", "Intelligence +1"],
    "desc" : "Your ability to read and predict your foes makes you harder to hit. When not wearing medium or heavy armour or using a shield, your Evasion is replaced by your Foresight (Perception + Intelligence) when calculating Defence."
}
```

### Martial Arts

```json
{
    "name" : "Martial Arts",
    "tag" : ["combat", "offensive"],
    "preq" : ["Dexterity +1", "Accuracy +1"],
    "desc" : "your practice of martial arts gives you mastery of combat styles that use unarmed strikes and 'martial arts weapons': weapons which don't have the ranged, two-handed or heavy properties and with which you already have proficiency.

You gain the following benefits while you are unarmed or wielding only martial arts weapons and you aren't wearing armour or wielding a shield:
- You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and martial arts weapons.
- You can roll a d6 in place of the normal damage of your unarmed strike or martial arts weapon. The damage type is unchanged.
- When you use the Attack action with an unarmed strike or a martial arts weapon, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff with which you are proficient, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this round."
}
```
### Ki

```json
{
    "name" : "Ki",
    "tag" : ["combat", "offensive"],
    "preq" : ["Willpower +2"],
    "desc" : "Your inner training allows you to harness the mystic bodily energy of ki. Your access to this energy is represented by a number of ki points equal to your Willpower.

You can spend these points to fuel various ki Powers. You start knowing three such Powers: Flurry of Blows, Patient Defense, and Step of the Wind.

When you spend a ki point, it is unavailable until you finish a Short Rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.

Some of your ki Powers require your target to make a saving throw to resist the feature's effects. Your Ki save DC is 8 + your Willpower.

**Flurry of Blows** - Immediately after you take the Attack action, you can spend 1 ki point to make two unarmed strikes as a bonus action.
**Patient Defense** - You can spend 1 ki point to take the Dodge action as a bonus action.
**Step of the Wind** - You can spend 1 ki point to take the Dash action as a bonus action without provoking Attacks of Opportunity, and your jump distance is doubled for the round.
**Unhindered Movement** - You can spend 1 ki point to move along or up vertical surfaces and across liquids without falling when you take the Move Action. If you end your movement still on a vertical or liquid surface you must spend another Ki point to do Unhindered Movement, or fall instead"
}
```

### Deepened Ki

```json
{
    "name" : "Deepened Ki",
    "tag" : ["combat", "utility", "ki", "After 6 Powers", "Every 2nd Power"],
    "preq" : ["Ki"],
    "desc" : "Increase the number of ki points you have access to by your Bonus. Your Ki save DC is also increased by your Bonus. If you take this Power again, you add your Bonus anew each time."
}
```

### Fleet

```json
{
    "name" : "Fleet",
    "tag" : ["movement", "combat", "exploration", "utility", "passive", "repeatable"],
    "preq" : ["Dexterity +1"],
    "desc" : "Increase your speed by 10ft. When you take this Power again, increase the Dexterity prerequise by 1 for each Rank you have in this Power."
}
```

### Divine Sense

```json
{
    "name" : "Divine Sense",
    "tag" : ["exploration", "sense", "active"],
    "preq" : ["Charisma +1"],
    "desc" : "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as if with the Hallow spell.

You can use this feature a number of times equal to your Charisma. You regain all expended uses after a Long Rest."
}
```
### Lay on Hands

```json
{
    "name" : "Lay on Hands",
    "tag" : ["combat", "healing"],
    "preq" : ["Faith +1"],
    "desc" : "Your blessed touch can heal wounds. You have a pool of healing energy that replenishes when you take a long rest. With that pool, you can restore a total amount of Health equal to your Faith x 5.

As an Action, you can touch a character and draw energy from the pool to restore an amount of Health to that character, up to the maximum amount remaining in your pool.

Alternatively, you can expend 5 Health from your pool of healing to cure the target of one Disease or remove the Poisoned condition from it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending Health separately for each one.

This feature has no effect on undead and constructs."
}
```
### Divine Smite

```json
{
    "name" : "Divine Smite",
    "tag" : ["combat", "offensive", "spellcasting"],
    "preq" : ["Divine Spellcasting"],
    "desc" : "When you hit a creature with a melee weapon attack, you can expend one Reserve of Mana to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for 1 Mana, plus 1d8 for each further point of Mana, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8."
}
```
### Favoured Enemy

```json
{
    "name" : "Favoured Enemy",
    "tag" : ["exploration", "utility"],
    "preq" : [],
    "desc" : "You have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

Choose a type of favoured enemy: aberrations, beasts, celestials, constructs, demons, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, sprites or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favoured enemies.

You gain a +2 bonus to damage rolls with weapon attacks against creatures of the chosen type. Additionally, you have Advantage on Survival checks to track your favoured enemies, as well as on Intelligence checks to recall information about them.

When you gain this Power, your studies in the language of choice spoken by your favoured enemies (or reasonable alternative) comes to fruition and you become fluent in it.

You can take this Power two more times, choosing different enemy type and language each time."
}
```
### Natural Explorer

```json
{
    "name" : "Natural Explorer",
    "tag" : ["combat", "exploration", "utility"],
    "preq" : [],
    "desc" : "You are a master of navigating one type of natural environment, and you react with swift and decisive action when attacked in such regions. Choose one type of favoured terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or underground. When in such terrain you have the following benefits:
- You ignore difficult natural terrain of that environment.
- You have advantage on Initiative rolls.
- Your first Attack in a combat has Advantage.
- Verdance is one higher for you in your terrain, if you have Primal Spellcasting (up to a maximum of 5).

While traveling in your favoured terrain, you gain the following benefits:
- Difficult terrain doesn’t slow your group’s travel, and your group can move stealthily at a normal pace.
- Your group can’t become lost except by magical means.
- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.
- When you forage, you find twice as much food as you normally would.
- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area."
}
```

### Primal Spellcasting
```json
{
    "name" : "Primal Spellcasting",
    "tags" : ["spellcasting"],
    "preq" : ["Perception +1", "Mana"],
    "desc" : "**Cantrips** - You know two cantrips of your choice from the Primal Sphere.

**Preparing and Casting Spells** - You use your Reserve of Mana to cast spells, gained through the Mana Power. In addition to any Innate spells you know, you prepare a list of primal spells that are available for you to cast each day. To do so, choose a number of spells from the Primal Sphere spell list. The spells must be of a Magnitude that you have the ability to Cast. You can change your list of prepared spells when you finish a Long Rest. Preparing a new list of primal spells requires time spent communing with nature and absorbing the instincts and hidden wisdom needed to cast the spells: at least 1 minute per spell Magnitude for each spell.

**Spellcasting Ability** - Your spellcasting ability is determined by the current Verdance of nature where you are, as detailed in the Verdance table below. You use Verdance whenever a spell refers to your spellcasting ability. In addition, you use Verdance when setting the saving throw DC for a primal spell you Cast and when making an attack roll with one.

| Verdance | Boreal | Coastal | Deserts | Forests | Jungles | Plains | Mountains | Swamps | Underground |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Barren   | -1 | 1 | -1 | 0 | 1 | 1 | 0 | 0 | -1 |
| Poor     | 0 | 2 | 0 | 1 | 2 | 2 | 1 | 1 | 0 |
| Middling | 1 | 3 | 1 | 2 | 3 | 3 | 2 | 2 | 1 |
| Rich     | 2 | 3 | 2 | 3 | 3 | 3 | 3 | 3 | 2 |
| Abundant | 4 | 5 | 4 | 4 | 5 | 5 | 4 | 4 | 4 | 

**Spell save DC** - 8 + your Bonus + Verdance

**Spell attack modifier** - your Bonus + Verdance

**Ritual Casting** - You can cast a primal spell as a ritual if that spell has the ritual tag and you have the spell prepared.

**Spellcasting Focus** - You can use a druidic focus as a spellcasting focus for your Primal spells." 
}

```

### Expertise

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```
### Sneak Attack

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```

### Cunning Action

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```
### "Sorcerous Origin"

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```
### Font of Magic

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```
### "Otherworldly Patron"

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```
### Eldritch Invocations *

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```
### Arcane Recovery

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```
### "Arcane Tradition"

```json
{
    "name" : "Name",
    "tag" : ["each", "tag"],
    "preq" : ["each", "prerequisite"],
    "desc" : "The full description of the power written in markdown"
}
```