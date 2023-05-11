## A remake of 5e

If I were to make a radical 6e of a fashion that suited my tastes and mechanical areas to explore, reformulate and refine, while keeping as much as I could, this would be that. Starting with just the content of the player handbook, PEDD seeks to apply three major changes: abolishment of the class and levelling system (including updates to nearly all features, feats and spells), a rework of the character creation system and ability score system to be easier for new players to parse and understand (and be more balanced), and a rework of the action economy and combat to make it snappy yet tactical. 

Anything not mentioned is not changed as while this is a total homebrew makeover the base is still D&D 5e and you know what, that’s OK. It's a good base, and one we are all familiar with, and extension means no need to repeat good material. It's all already there.

The following is the first forays into that.

## Character Creation Rework

### *Ability Statistics*

The ability score into modifier system is a vestige. It is removed. All characters have ability statistics, a.k.a. "Stats", a single value from -5 to +5 (or more, for monsters and "Super humans"). When creating characters, any ability score increase features are remapped to two +1's in the stated abilities. Any base-races/subraces with 3 or more abilities increased increase 3 statistics by +1. Humans (which in PEDD are the "Human+" from the homebrew above) can choose +1 to any three statistics.

The base statistics of a character are [-2, -1, 0, +1, +2, +3]. Alternatively dice rollers can roll 6(d6-3), record each value and increase one value of their choice by one.

### *Resistances and Statistics*
A line is drawn between your active statistics used for actions, and your passive resistances used to not be affected by harms.

There are six **Statistics** (used in checks):
- **Strength** - used in melee attacks, and feats of brawn
- **Accuracy** - used in ranged attacks, and feats of precision
- **Dexterity** - used in many skills, for feats of action
- **Intelligence** - used in knowledge and understanding, for feats of alacrity
- **Perception** - used to sense the world, spot hidden things, read others and see far
- **Charisma** - used to affect others through force of personality

And three **Resistances** (used in saves):
- **Constitution** - the ability of the body to throw off ills
- **Reflexes** - the ability of the body to avoid harms
- **Willpower** - the ability of the mind to resist

Each Race and Background has a "Resistance Profile", where your final resistance values are the combination of the two. For example, Elves have a Constitution of -1, and Soldier's a Constitution of +3, meaning an Elf Protector starts with a Constitution of +2.

For those hankering for a sense of “wise” there is the Learned Power for wisdom in the sense of knowledgable, and the “Wisened” background that is wisdom in the sense of a wide body of practiced wisdom coming from aged experienced, the non-academic sage. 

**Initiative** - incidentally initiative is calculated from Dexterity + Perception as a base, with certain Powers affecting it further.

### *Proficiency Bonuses and Expertise*
**Bonus** - Proficiency Bonus is simply "Bonus", which means +2, and is typically derived from Proficiency and Powers, a characters skill in an area. Having "proficiency" in a tool or skill means gaining a Bonus to rolls made with that tool/skill.

A Power, “Aptitude I/II”, increases that to +3/+4. Bonus applies to more than just proficiencies, many Powers now key off it explicitly. That being said any reference to being “Proficient” still means having a Bonus. 

**Expertise** - Abilities with Bonus can gain Expertise to be grant effectively a double Bonus. Every area of the game that grants Expertise should only do so when that area already has a Bonus, otherwise it is treated as a Bonus. An area of the game which already benefits from Expertise cannot benefit from it again.

### Combat Rework
The goal is to make combat more consistently dangerous: low level combat was too dangerous but quickly combat became trivial, characters were health sponges that you end up playing whack-a-mole with.

- Health progression starts higher and progresses in smaller steps naturally due to only being increased through Powers (no levels after all).
- Damage is also “brought in line”. 15 damage is enough to one shot a peasant, 30 an adventurer. All damage sources need to be recalibrated; various high-level spells and large monsters are brought down, melee attacks should be ok as they stand. Two sword strikes, a fireball, or a headshot (e.g. a critical) will kill you.
- The Defence rework makes it more likely for a character to be hit if they do nothing (lower base, active shielding etc), but through equipment (armour), defence boosting powers (Int/Will/Per) and action (parry/dodge/block) defence can be actively boosted for smart application allowing for higher average applied defence than old AC. 

Another goal is to make combat snappier. This lead to "One Action All At Once".

Also, if 5e made the math linear, PEDD seeks to make the math flat (as part of removing classes): with the following assumptions;
- "peasants" face an average dc of 10, hit at +0/+3 (unskilled, skilled, unskilled being the norm), have 10 defence and have 8-12 health. 
- "adventurers" face an average dc of 15, hit at +2/+5 (unskilled, skilled, skilled being the norm), have 15 defence, and have 20-30 health. 

### *Health & Recovery*
**Health** - HP is relabelled to "Health", and is calculated from: racial “Baseline Health” (a 4/6/8/10) + background bonus (another 4/6/8/10) + Constitution (physical fortitude) + Willpower (mental fortitude). Health is explicitely a combination of physical and emotional wear and tear as well as the idea of "experience" that allows you to avoid, roll with and carry on from blows.

**Recovery** - Hit Dice are also an older mechanic that is mostly vestigal. It too is removed. Resting (short or long) recovers your Baseline Health, until your Health is back at its maximum. Long rests also only recover your Baseline Health, but are otherwise unchanged.

Once you have regained health from a short rest, you cannot regain health again until you have completed a long rest. 

That means, at a maximum, you can gain your Baseline Health (without modification from Powers) twice, once from a short rest and once from a long rest, per day. If you seek medical attention or healing spells, however, you may yet recover a lot more Health in a day.

### *Wounds*
"Wounded X" is a new condition. When your Health is reduced to 0 or below for the first time in a fight, you go Unconsciouss and you gain the Wounded 1 condition. Each time you go down, your Wounded condition increases by one. When you make Death Saves, the DC is instead your Wounded condition value x5, so at Wounded I Death Saves are made against a DC of 5.

The wounded condition loses one rank per long rest, and one rank per successful Medicine DC Wounded rank x5 check. This Medicine check can be made once per day on a character. (My own Injury Risk is updated to use Wounded X to calculate Injury Risk).

### *Defence, Armour and Evasion*
AC is recalculated and relabelled to "Defence".

The Defence Stat is more flexible and is made of three parts: a base value of 8, an Armour value and an Evasion value. By default Evasion is Dexterity to a minimum of 0, but Armour can limit it to a maximum (noted in the armour). This gives us three kinds of Defence. Normal Defence, and:

- **Unarmoured Defense** - Defence without Armour, armour limits on Dexterity are still applied

- **Stationary Defense** - Defence without Evasion, often called "touch AC" in other systems

### *One Action All At Once*
A major change I've experimented a little with is a radical change where, simply, all characters in a round of combat have one action, and everyone "acts" at once, no initiative.

All enemies in the scene declare their intentions, just as their movements would give away what they're about to do. Then all players decide among themselves what they're going to do that round.

For any situations where the order of actions matters, the two characters involved roll of with initiative, or for "slow" enemies / mooks the GM will just let the players go first.

Most actions, however, can be resolved simultaneously. Attacks for example; two people just try to hit each other, damage each other, and collapse wounded at the same time.

For smaller groups (that is, of players & enemies) it worked quite well. We'll see with larger groups.

Since everyone gets only one action, the action bonus-action movement economy of 5e is radically changed.

Movement is simply another action. Bonus actions are revamped, and any bonus-action can be "promoted" to an action, if a characters wants to do two bonus actions in a round. Reactions, interestingly, disappear.

Also, to make martial combat spicier a variety of generally available tactical basic combat actions are added; 
- **Charge** - a linear move that allows 1 attack at advantage as a bonus action
- **Dodge** - as an action to being attacked, make a dexterity save throw and if the result is higher than your Defense, it replaces your defence value for the rest of the round
- **Block** - as a bonus action, raise your weapon or shield to gain the block value as Armour to your defence. This prevents you using that item as a weapon to attack. Both effects last for the rest of the round
- **Parry** - if your weapon has the parry property, as an action to being attacked in melee, make an attack action. The roll is your Defense for the rest of this round, and also functions as a normal attack action
- **Step** - as a bonus action, move 5ft without triggering attacks of opportunity
- **Stand** - a bonus action. 
- **Go to cover / Go prone** - as a bonus action make yourself Prone, or enter adjacent cover. The Prone condition or being in cover uses Stationary Defence. As before prone makes being shot at occur at disadvantage, and cover is +2/+5 to Defence for half / ¾ cover.
- **Disengage** is a bonus action for anyone
- **Attack of Opportunity** - as a bonus action to an enemy you're engaged with moving away from you without Disengaging from you, you can make an attack action on them 

### *Engagement*
To help with handling fights with little to no initiative, combatants are "paired off". These are the momentary pairs or small groups that naturally form in the middle of any chaotic fight, and allows us as the players to "zoom in" on little microcosms of fights with the camera focusing on pairing after pairing.

Engagements are resolved effectively simultaneously and the order of engagements doesn’t matter. With only 1 action per turn melees can’t effect each other. In cases where order of action is important characters “roll off” using their initiative. 

All combat is resolved in two simple steps:

1. **Determine Engagements** - where combatents “pair off”. “Pulling” and “turning” if in conflict are rolled off. Any who intend to move do, engaging if necessary.
2. **Resolve Engagements** - resolving pairs/groups in a sensible/cinematic sequence. Melee conflicts are easily resolved. Ranged attacks naturally involve unpaired individuals; resolve simultaneously with everyone else. Resolve conflicts of interest with a roll off like normal (I try to grab the bag of gold before him, for example). 

If it makes sense to resolve conflicts of interest using appropriate skill checks rather than Initiative (i.e. speed), then do so.

**Zone of Engagement** – the rules of pairing off, pulling and turning. 

How do you avoid a long conga-line chain of awkwardly connected characters fighting each other? "Pairing off", where a character can only be engaged by a number of characters equal to their size (1 for tiny/small, 2 for medium, 4 for large, 8 for gargantuan). A character can only attempt to engage one character at a time. You can only melee attack someone you’re engaged with. Being next to someone who is already fully engaged is “crowding” giving all attackers disadvantage. Conga-lines break; if you who are engaging someone who is engaging someone else are engaged by a fourth, you must “turn” and engage your attacker, with the attacker “pulling”. I.e., you cannot be "pulled" if you are engaged with someone who is engaged with you.

**Flanking** works by being the one in an engagement who the foe isn’t engaging. Though, like my original homebrew, you cannot flank a creature 2 or more sizes larger than you.

## Class & Levelling Rework
An abolishment of all classes and the system of levelling, replaced with "Powers" (created from Features and Feats) with a more story-driven Power by Power development system.

Progression, then, is the acquisition of more Powers and proficiencies. Certain Powers will be stronger than others, so they will key off of prerequisites, typically Stats, other powers and also “After n or more Powers”, or "Once every n<sup>th</sup> Power". These are noted in brackets before the description of the Power.

"Once every n<sup>th</sup> Power" means n number of other Powers must be taken before this Power can be taken, and the same again if taking this power again. This has nothing to do with other Powers that also have this prerequisite, so they may be "interleaved".

Powers taken more than once should be noted what "Rank" they are at; such as "Hale I" or "Hale IV", to show that they are technically two separate powers.

This means (as both Hearty and Hale are "Once every 2<sup>nd</sup> Power" Powers) the following is a valid combination of Powers:
1. Brawler
2. Hearty I
3. Hale I
4. Hearty II
5. Hale II

Powers have some meta categories:
- Innate Powers – cannot be trained in normal progression
- Unique Powers - can only be taken once
- Difficult - Powers that take longer than usual to learn

Powers are “in training” before coming online, to encourage roleplay of skill acquisition. E.g. a character at the start of each session declares what Power/s they are training towards and when the when the group / DM feels its appropriate, characters gain that Power.

For the intended "power level" of a Power, take any Feat from the PHB which has a Stat increase component, and remove the Stat increase.

Spellcasting is a Feature that has had to receive major reworking, and is still WIP.

### *Example Powers*
**Artisan** – gain proficiency in a Tool Set and proficiency in a Skill. You also gain Expertise in a Tool Set. When not at Disadvantage, you can choose to not roll when making any Tool Set check and instead assume you rolled a 10, adding Stat and any Bonus to that as normal.

**Brawler** – (Unique) Your Unarmed Attacks contain the Block I, Finesse and Parry (bludgeoning) properties. Your Unarmed Attacks deal d4 damage.

**Combat Expert** – (Proficiency with a martial weapon) You can Engage one more enemy, up to the maximum number possible for your Size

**Hale** – (Once per 2 Powers) Rests grant an additional Constitution + Willpower (to a minimum of 1) as well to Health recovery.

**Hardy** - (Once per 2 Powers) Add your Constitution & Willpower (to a minimum of 1) to your Health total

**Hunter** – (Unique) You can Aim as a bonus action, granting a Bonus to the next Ranged Weapon Attack you make this turn.

**Innate Spells** – (Spellcasting Initiate I), learn two spells from your known spell lists. You cannot learn spells of a Circle you cannot yet cast.

**Learned** power – gain expertise in history, arcana or religion.

**Magical Reserve** Power – determines spell slots. “Once Every 2nd Power”. Progression down the old spell slot table but with relabelled terms; spell casts, magnitude. Explicitly state all higher magnitude casts can be “down cast”, and that certain spells can be “Up Cast” as described in their spell description.

**Protector** – (Unique) You can make the Block action with Shields as a Bonus action. You can instead block for an ally within 5ft of you. They gain the benefits of the block as if they themselves blocked.

**Quick Recovery** – when Resting regain Baseline Health x2 Health. Can be taken again for x3 after 5 or more Powers, then finally once more for x4 affect after 10 or more Powers.

**Resistance Increase** – (Once every 5<sup>th</sup> Power), increase a Resistance by +2

**Run and Gun** – (Unique) you can Run and Gun as an action, where you can make a ranged weapon attack at disadvantage after making a move action as a bonus action. You may instead fire and then move.

**Spellcasting Initiate** – choose a Sphere of Magic: Arcane, Divine, Occult or Primal. You gain 2 cantrips and a 1st Circle spell from that list. You also gain the Spellcasting Power for that Sphere. You can take this Power again if you can and do choose a different Sphere of Magic.

**Stat Increase** – (Once every 5<sup>th</sup> Power), increase a Statistic by +1