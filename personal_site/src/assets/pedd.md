## A remake of 5e

If I were to make a radical 5.5e of a fashion that suited my tastes and mechanical areas to explore, reformulate and refine, while keeping as much as I could, this would be that. 

Taking the content of the Fifth Edition Player's Handbook as a base (meaning assume normal 5e D&D unless otherwise redefined), PEDD applies three major changes: a rework of the character creation system and ability score system to be easier for new players to parse and understand (and be more in tune with my sensibilities) known as *Character Creation 5.P*, abolishment of the class and levelling system (including updates to nearly all features, feats and spells) known as *Power Progression*, and a rework of the action economy and combat to increase table-engagement, speed up combat and yet also make it more tactical, known as *Combat 5.P*. 

Anything not mentioned is not changed as while this is a total homebrew makeover the base is still D&D 5e and you know what, that’s OK. It's a good base, and one we are all familiar with and that does a damn fine job, and by extending it it means no need to repeat good material. It's all already there.

***

## Character Creation 5.P

Step-By-Step Character creation in PEDD looks like this:
1. *Create a Character Concept* - in a phrase, define the core of your character.
2. *Determine Ability Statistics & Resistances* - these values will be modified by Race, Background and Archetype
3. *Choose a Race* - all handbook races, and some more, are available below. See "Converting Races, Background and Classes" section for details on 5e content that doesn't appear here.
4. *Choose a Background* - all handbook backgrounds, and some more, are available below.
5. *Choose your Archetype and initial Powers* - choose an Archetype and corresponding number and kind of Powers (see [Powers Progression](#powers-progression)).
6. *Finalize Equipment* - chose and collate the starting Equipment you have from your Background and Archetype.
7. *Come Together* - [just like the base game](https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters#6ComeTogether)

### Character Concept
While not new, I ask players to think of a core character concept, a fantasy person they would like to be, as the very firs step of character creation. This is a fluid thing, and is expected to change as you go through character creation, choose slightly different options and redefine your character as you go. I expect players to be constantly updating their *Core Concept* as they go.

As they do, they can add to their **Flaws**, **Bonds** and **Ideals** as they go through each step, but again thinking of these as part of the first step of character creation.

### Races
WIP
<div id="races-container"></div>

### Racial Powers
WIP
<div id="racial-powers-container"></div>

### Backgrounds
WIP
<div id="backgrounds-container"></div>

### Ability Statistics

The ability score into modifier system is a vestige. It is removed. All characters have ability statistics, a.k.a. "Stats", a single value from -5 to +5 (or more, for monsters and "Super humans"). 

The base statistics of a character are [-2, -1, 0, 0, +1, +2]. Alternatively, dice rollers can roll 6d6, reducing each result by -3 (a 6 is 3, a 2 is -1 etc.) and record each value.

Stats can be increased from Race, Background, Archetype and also during Progression. During character creation no Statistic can be increased beyond +4, unless explicitly stated.

#### Resistances and Statistics
A line is drawn between your active Statistics used for actions, and your passive Resistances which are used to mitigate harms. Resistances are calculated values, from Statistics, Race and Background.

There are six **Statistics** (used in checks):
- **Strength** - used in melee attacks, and feats of brawn
- **Accuracy** - used in ranged attacks, and feats of precision
- **Dexterity** - used in many skills, for feats of action
- **Intelligence** - used in knowledge and understanding, for feats of alacrity
- **Perception** - used to sense the world, spot hidden things, read others and see far
- **Charisma** - used to affect others through force of personality

And three **Resistances** (used in saves):
- **Constitution** - the ability of the body to throw off ills. Calculated from **Strength** + **Dexterity**.
- **Reflexes** - the ability of the body to avoid harms. Calculated from **Accuracy** + **Perception**.
- **Willpower** - the ability of the mind to resist. Calculated from **Intelligence** + **Charisma**.

Additionally, each Race and Background has a "Resistance Profile", modifiers to your character's Resistance values. For example, Elves have a Constitution of -1, and Soldier's a Constitution of +2, meaning an Elf Soldier starts with a Constitution of **Strength**+**Dexterity**+1.

#### Resistance DC's
Sometimes enemy attacks and other effects are made against your "Resistance DC", this is 8 + the Resistance value.

#### Converting Saves
Whenever 5e asks for a save of a certain kind, using the following conversion:
- Strength Saves -> Constitution Saves
- Dexterity Saves -> Reflex Saves
- Constitution Saves -> Constitution Saves
- Intelligence Saves -> Willpower Saves
- Wisdom Saves -> Willpower Saves / Perception Saves*
- Charisma Saves -> Willpower Saves

*Wisdom, being poorly understood by perhaps even the designers of 5e themselves, is an odd one. See "Where's Wisdom?" for my thoughts on that. By default use Willpower, but if Perception would be more appropriate, use that.

#### Secondary Statistics

- **Health** - how much damage you can take before entering the Dying state. Race, Background and Archetype all provide initial Health, and finally **Constitution** + **Willpower** is added on top. See "Health" in "Combat 5.P". Health is explicitly a combination of physical and emotional wear and tear, rolling with and carrying on from blows.
- **Defence** - how difficult you are to harm. **Base Defence** + **Armour** + **Evasion**
  - **Base Defence** - determined by your Race (default 8), or overridden by some Powers.
  - **Armour** - determined by the sum Defence of worn equipment.
  - **Evasion** - your Dexterity value (min 0), can be modified by some Powers, can be limited by worn equipment.
- **Speed** - unchanged, determined by Race
- **Passive Statistics** - sometimes Powers or play require a value to compare against. The DM can ask you to make a roll that then represents that value, and sometimes they will ask for your "Passive Strength" etc. This is 8 + the Stat Value.

#### Where's Wisdom?
Generally speaking Wisdom has been removed, with all of the D&D weirdness about 'connection' and 'perception' being part of Wisdom, even though most people use Wisdom like willpower, and it just generally having a very poorly defined and understood area of concern. It gets especially odd when many people's definitions of Wisdom start to sound a lot like Intelligence, such as having the wherewithal to notice something isn't real but is in fact an illusion. Which the game itself calls an Intelligence save!

To address these issues, I've split Wisdom in twain. Willpower is willpower, everyone gets that. The coverage of Wisdom over connections and empathy is now under Charisma, and perception is under the new Stat Perception. 

This does leave the window open for those hankering for a sense of “wise”. Characters still have the various Knowledge skills, and there is now the "Learned" Power for wisdom in the sense of being broadly knowledgeable, educated, well-read, etc., and the “Wisened” background that is wisdom in the sense of a wide body of practiced wisdom coming from age and life experience; the non-academic sage. 

### Converting Races, Backgrounds and Classes

#### Features
First, any and all Features can be taken as written so long as any areas of the game they touch haven't been effected by changes in PEDD. Those that do will need adjusting, and some Features have been rewritten wholesale. See the points below.

**Ability Score Increases** - any "Ability Score Increase" features are constrained to, at maximum, two +1's in the stated abilities. Any base-race - subrace combinations with 3 or more ability score increases only increase 2 Stats by +1, and you can choose which two. Any increases to Dexterity can instead be increases to Accuracy. Any increases to Wisdom can instead be increases to Perception or Willpower.

**Perception Proficiency** - any feature that gives proficiency in perception instead grants +1 to the Perception Stat to a maximum of +4. Any feature that gives expertise in perception instead grants +1 to the Perception Stat to a maximum of +5.

**Saving Throw Proficiency** - any feature that gives a saving throw proficiency instead gives +1 to the corresponding Resistance stat to a maximum of +4 (see [Converting Saves](#converting-saves))

#### Races
Introduce Baseline Health and Base Defence statistics for a Race.

***

## Combat 5.P
The goal is to make combat more consistently dangerous and snappier. Low level combat was too dangerous but quickly combat became trivial, with characters that were health sponges that you end up playing whack-a-mole with. And I wanted to erase the issue of players switching off when its not their turn, which lead to the "One Action All At Once" system (see [below](#one-action-all-at-once)).

- Thus the changes to HP as Health, with progression starting higher and progressing in naturally smaller steps due to only being increased when being purposefully taken as a Power.
- Thus [Flat Maths](#flat-maths), where Damage and other numbers are flattened and easier to parse
- Thus the AC rework as Defence, see [Character Creation](#secondary-statistics), which makes it more likely for a character to be hit (with the lower base defence, necessity of raising shields, Stationary Defence, etc.), unless they do something like take Defence boosting Powers (Int/Cha/Per) or defensive actions (parry/dodge/block).

#### Flat Maths
If 5e made the math linear from quadratic 3.Xe, PEDD seeks to make the math flat, making it easier to predict and interpret, and also aiding with the level-less system.

The Maths is calculated with the following assumptions:
- "*peasants*" face an average dc of 10, hit at +0/+3 (unskilled, skilled, unskilled being the norm), have 10 defence and have 8-12 health. 
- "*adventurers*" face an average dc of 15, hit at +2/+5 (unskilled, skilled, skilled being the norm), have 15 defence, and have 20-30 health. 

As such, all damage sources need to be re-calibrated; various high-level spells and large monsters are brought down, making the face-value of such abilities easier for newer players to read. ("Oh my go, a D12 of damage!?" Vs the relatively opaque 4d6 damage of a fireball). Two sword strikes, a fireball, or a headshot (e.g. a critical) will drop you to 0 Health.

#### Recovery
Hit Dice are also an older mechanic that is mostly vestigial. It too is removed. Resting (short or long) recovers your Race's Baseline Health, until your Health is back at its maximum. Long rests also only recover your Baseline Health, but are otherwise unchanged.

Once you have regained Health from Short Rests twice, you cannot regain Health from a third Short Rest until you have completed a Long Rest. Meaning, per day, you can at maximum regain 3 × your Race's Baseline Health.

That means, at a maximum, you can gain your Baseline Health (without modification from Powers) twice, once from a short rest and once from a long rest, per day. If you seek medical attention or healing spells, however, you may yet recover a lot more Health in a day.

#### Wounds
**Wounded X** - When your Health is reduced to 0 and you don't already have the Wounded condition, you go Unconscious as usual and you gain the Wounded 1 condition. Each time you go Unconscious from your Health dropping to 0, your Wounded condition increases by 1. 

When you make Death Saves, the DC is not 10, it is your Wounded condition rank × 5. So at Wounded I, Death Saves are made against a DC of 5.

The wounded condition loses one rank per Long Rest, and one rank per successful Medicine check made against a DC of the Wounded condition rank × 5 (the same like a Death Save). This Medicine check can be made once per day on a character, regardless of success or failure.

### Full, Unarmoured and Stationary Defence
The Defence Stat is more flexible than being a flat value made of three parts: 
- a base value from your Race (typically 8)
- an Armour value determined by worn Equipment
- an Evasion value, Dexterity to a minimum of 0 which can be limitted by worn Equipment. 
  
Instead Defence is calculated when required from these three parts, depending on what parts are in play. This gives us three kinds of Defence;
- **Full Defence** - Defence with Armour and Evasion
- **Unarmoured Defense** - Defence without Armour, armour limits on Evasion are still applied
- **Stationary Defense** - Defence without the benefit of Evasion, often called "touch AC" in other systems.

Remember that the Armour value also changes during play as you don and doff Equipment, and especially based on whether you Raise your Shield or not!

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

***

## Power Progression
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

#### Proficiency Bonuses and Expertise
**Bonus** - Proficiency Bonus is simply "Bonus", which means +2, and is typically derived from Proficiency and Powers, a characters skill in an area. Having "proficiency" in a tool or skill means gaining a Bonus to rolls made with that tool/skill.

A Power, “Aptitude I/II”, increases that to +3/+4. Bonus applies to more than just proficiencies, many Powers now key off it explicitly. That being said any reference to being “Proficient” still means having a Bonus. 

**Expertise** - Abilities with Bonus can gain Expertise to be grant effectively a double Bonus. Every area of the game that grants Expertise should only do so when that area already has a Bonus, otherwise it is treated as a Bonus. An area of the game which already benefits from Expertise cannot benefit from it again.

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