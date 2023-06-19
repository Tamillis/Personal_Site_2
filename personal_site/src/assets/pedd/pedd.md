## A remake of 5e

"One D&D" is coming and Wizards of the Coast really put their PR foot in it with the licensing changes so we're all ready to jump ship. I instead find myself remaking the ship, taking what I think works well, and changing, exchanging and adding in what I would like it to have. So if I were to make a radical 5.5e of a fashion that suited my tastes and allowed me to explore, reformulate and refine areas of mechanics in which I personally have an interest, while keeping much the rest the same, this would be that. 

In addition to mechanics that I personally find interesting, a lot of the changes I've made are minor tweaks I've done over the years for new player friendliness. Many times now, I've found myself the DM for a group of newbies who I've coaxed into the hobby or given at last an outlet for their pent-up interest, and these changes better enable newer folks to enjoy the hobby without needing to work their way past legacy systems and jargon. While some changes will add complexity, many are done with this in mind, and all of PEDD is written with the understanding that totally new-to-D&D-and-RPG's players will have to deal with them.

Taking the content of the Fifth Edition Player's Handbook as a base (meaning, assume normal 5e D&D unless otherwise stated), PEDD applies changes in three major categories: 
- a rework of the character creation system and core ability scores known as *Character Creation 5.P* 
- abolishment of the class and levelling system (including updates to nearly all features, feats and spells) known as *Power Progression*
- and a rework of the action economy and combat to increase table-engagement, speed up & simplify the work of combat and yet also enable it to be more tactical, known as *Combat 5.P*

Anything not mentioned is not changed as while this is a total homebrew makeover the base is still D&D 5e and you know what, that’s OK. It's a good base, and one we are all familiar with and that does a damn fine job, and by extending it, it means there's no need to repeat good material. It's all already there.

***

## Character Creation 5.P

Step-By-Step Character creation in PEDD looks like this:
1. *Create a Character Concept* - in a phrase, define the core of your character.
2. *Determine Ability Statistics & Resistances* - these values will be modified by Race, Background and Archetype
3. *Choose a Race* - all handbook races, and some more, are available below. See "Converting Races, Background and Classes" section for details on 5e content that doesn't appear here.
4. *Choose a Background* - all handbook backgrounds, and some more, are available below.
5. *Choose your Archetype, initial skills and initial Powers* - choose an Archetype and corresponding number and kind of Powers (see [Powers Progression](#powers-progression)).
6. *Finalize Equipment* - chose and collate the starting Equipment you have from your Background and Archetype. Otherwise equipment is identical to 5e.
7. *Come Together* - [just like the base game](https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters#6ComeTogether)

As you work your way through these steps, select or input your inputs. This document doubles as a character creator for PEDD!

### Character Concept
While not new, I ask players to think of a core character concept (a fantasy person they would like to play, to inhabit and act out) as the very first step of character creation, to form a basis they can build on and have the basis of their character be an idea, not a race or class as the old way lent itself to be (I've seen many, many newbies open the book and then go "I want to be a Dwarf Ranger", or what have you. That's not a character, that's a video game protagonist). Of course, this is a fluid thing, and is expected to change as you go through character creation and, choosing slightly different options as you go, you redefine your character's core concept. I expect players to be constantly updating their Core Concept based on their mechanical choices, but not for the mechanical choices to be the basis.

As they do, they can add to their **Bonds**, **Ideals** and **Flaws** as they go through each step, but again thinking of these as part of the first step of character creation.

#### Name
<div id="character-name"></div>

#### Concept
<div id="character-concept"></div>

#### Bonds, Ideals and Flaws
<div id="bonds-ideals-flaws"></div>

### Ability Statistics

The ability score into modifier system was vestigial so I removed it. All characters have "Ability Statistics", a.k.a. "Stats", a single value ranging from -3 to +5 for humanoid and player characters (higher and lower for monsters and "Super humans").

Stat Value | Meaning
--- | ---
-3 | Severely Handicapped - even menial tasks are difficult
-2 | Handicapped - most basic tasks are difficult
-1 | Below Average - you fail to overcome most challenges
0 | Average - unremarkable, equivalent to an unskilled labourer
1 | Capable - you're more capable than the unskilled
2 | Professional - you're trusted to succeed
3 | Exceptional - you're renowned within the region
4 | World-class - few in the nation can best you
5 | Legendary - your capability is on the level of the myths of the Gods

The base statistics of a character are [-2, -1, 0, 0, +1, +2]. Alternatively, dice rollers can roll 6d6, reducing each result by -3 (a 6 is 3, a 2 is -1 etc.) and record each value. If the Stats add up to more than 2 or less than -2, reroll all 6 dice.

Stats can be increased from Race, Background, Archetype and also during Progression. During character creation no Statistic can be increased beyond +4, unless explicitly stated. If a Race, Background or Archetype would raise a Stat above 4, instead you may raise a different Stat (again, not above 4).

#### Resistances and Statistics
A line is drawn between your active Statistics used for actions, and your passive Resistances which are used to mitigate harms. Resistances are calculated values, from Statistics, Race and Background. They can be above 4 or below -3, they are whatever the calculation comes out as.

There are six **Statistics** (used in checks):
- **Strength** - used in melee attacks, and feats of brawn
- **Dexterity** - used in many skills, for feats of deftness
- **Accuracy** - used in ranged attacks, and feats of precision
- **Perception** - used to sense the world, spot hidden things, and read others
- **Intelligence** - used in knowledge and understanding, for feats of alacrity
- **Charisma** - used to affect others through force of personality, empathy and displays of emotion

And three **Resistances** (used in saves):
- **Fortitude** - the ability of the body to throw off ills. Calculated from **Strength** + **Dexterity**.
- **Reflexes** - the ability of the body to avoid harms. Calculated from **Accuracy** + **Perception**.
- **Willpower** - the ability of the mind to resist. Calculated from **Intelligence** + **Charisma**.

Additionally, each Race and Background has a "Resistance Profile", modifiers to your character's Resistance values. For example, Elves have a Fortitude of -1, and Soldiers a Fortitude of +2, meaning an Elf Soldier starts with a Fortitude of **Strength**+**Dexterity**-1+2.

#### Resistance DC's
Sometimes enemy attacks and other effects are made against your "Resistance DC", this is 8 + the Resistance value.

#### Stats
WIP - Assign your Stats. (Resistances and Resistance DC's calculated from Race and Background chosen below, Secondary Statistics can be found [here](#secondary-statistics))

<div id="stats"></div>

#### Converting Saves
Whenever 5e asks for a save of a certain kind, using the following conversion:
- Strength Saves -> Fortitude Saves
- Dexterity Saves -> Reflex Saves / Fortitude Saves*
- Constitution Saves -> Fortitude Saves
- Intelligence Saves -> Willpower Saves
- Wisdom Saves -> Willpower Saves / Perception Saves**
- Charisma Saves -> Willpower Saves

*Dexterity is somewhat redefined as the agility and capability of one's body irrespective of their physical Strength or Accuracy. Pure dodging, then, (as most old Dexterity saves were) are covered by Reflex saves, however those old Dexterity saves that were more about the capability of the victim's body (such as jumping high enough) would now be covered by Fortitude saves, which represent more one's physical ability to avoid damage. 

**Wisdom, being poorly understood by perhaps even the designers of 5e themselves, is an odd one. See ["Where's Wisdom?"](#wheres-wisdom) for my thoughts on that. By default use Willpower, but if Perception would be more appropriate, use that.

#### Secondary Statistics

- **Health** - how much damage you can take before entering the Dying state. Race, Background and Archetype all provide initial Health, and finally **Fortitude** + **Willpower** is added on top. Health is explicitly a combination of physical and emotional wear and tear, and the ability to roll with and carry on from blows.
- **Defence** - how difficult you are to harm. **Base Defence** + **Armour** + **Evasion**
  - **Base Defence** - determined by your Race (around 8), or overridden by some Powers.
  - **Armour** - determined by the sum Defence of worn equipment.
  - **Evasion** - your **Reflex** value to a minimum of 0, can be modified by some Powers, can be limited by worn equipment.
- **Speed** - unchanged, determined by Race
- **Initiative** - **Perception** + **Dexterity** (+ a bonus from some Powers)
- **Passive Statistics** - sometimes Powers or play require a value to compare against. The DM can ask you to make a roll that then represents that value, and sometimes they will ask for your "Passive Strength" etc. This is 8 + the Stat Value.

#### Where's Wisdom?
Generally speaking Wisdom has been removed, with all of the D&D weirdness about 'connection' and 'perception' being part of Wisdom, even though most people use Wisdom like willpower, and it just generally having a very poorly defined and understood area of concern. It gets especially odd when many people's definitions of Wisdom start to sound a lot like Intelligence, such as having the wherewithal to notice something isn't real but is in fact an illusion. Which the game itself calls an Intelligence save!

To address these issues, I've split Wisdom in twain. Willpower is willpower, everyone gets that. The coverage of Wisdom over connections and empathy is now under Charisma, and perception is under the new Stat Perception. 

This does leave the window open for those hankering for a sense of “wise”. Characters still have the various Knowledge skills, and there is now the "Learned" Power for wisdom in the sense of being broadly knowledgeable, educated, well-read, etc., and the “Wisened” background that is wisdom in the sense of a wide body of practiced wisdom coming from age and life experience; the non-academic sage. 

### Races
WIP - this will be a browse-able scrolling list of the races.

<div id="races-container"></div>

### Racial Powers
WIP - this will be a browse-able scrolling list of Powers available to your Race, representing in-born abilities (some are generically available, some are race-specific, all can only be chosen during character creation).

<div id="racial-powers-container"></div>

### Backgrounds
WIP - this will be a browse-able scrolling list of the Backgrounds.

Backgrounds will be where Characters choose their skills from the given list.
<div id="backgrounds-container"></div>

### Background Powers
WIP - a shortlist of all Powers that can be taken as your Background Power.

Choose a Power from your time as your background. It must be related to the activities of your background, so confer with your DM (me).

<div id="background-powers-container"></div>

### Archetypes
WIP - choose your Archetype, what forms the seed of your adventuring capabilities.

<div id="archetypes-container"></div>


### Converting Races, Backgrounds and Classes

#### Features
First, any and all Features can be taken as written so long as any areas of the game they touch haven't been effected by changes in PEDD. Those that do will need adjusting, and some Features have been rewritten wholesale, such as Spellcasting (which has its own section in powers [here](#spheres-of-magic)). See the points below.

**Ability Score Increases** - any "Ability Score Increase" features are constrained to, at maximum, two +1's in the stated abilities. Any base-race - subrace combinations with 3 or more ability score increases only increase 2 Stats by +1, and you can choose which two. Any increases to Dexterity can instead be increases to Accuracy. Any increases to Wisdom are instead increases to your choice of Perception or Willpower.

**Perception Proficiency** - any feature that gives proficiency in perception instead grants the Keen Sense Power:

**Keen Sense** - choose one of the senses (sight, hearing, touch, taste, smell or psychic). When using this sense you have a +1 bonus to skill checks. Additionally, increase your Perception Stat by +1 to a maximum of +4. You can take this Power again for different senses.

**Saving Throw Proficiency** - any feature that gives a saving throw proficiency instead gives +1 to the corresponding Resistance stat to a maximum of +4 (see [Converting Saves](#converting-saves))

#### Races
Races have been tweaked in a number of ways. Go through the following steps to convert a Race:

1. Introduce Baseline Health (default: 6 base, -2 for small, +2 for large, -2 for weak, +2 for strong) and Base Defence statistics (default 8, +1 for small, -1 for large, +1 for evasive, -1 for clumsy/slow)
2. Remove any Skill proficiencies not distinctly tied to the physicality of the race (such as weapon or tool proficiencies)
3. Remove all Features and make the Racial Powers for that Race.
4. Take a number of Racial Powers equal to the number of Features removed (including from generic racial powers and related racial powers, though the latter needs to be with the consent of your DM)
5. TODO: come back here when I start converting races and add to these steps as necessary

***

## Combat 5.P
The goal is to make combat more consistently dangerous and snappier. Low level combat was too dangerous but quickly combat became trivial, with characters that were health sponges that you end up playing whack-a-mole with. This lead to the various minor tweaks below. 

And I wanted to erase the issue of players switching off when its not their turn, which lead to the "One Action All At Once" system (see [below](#one-action-all-at-once)).

#### Health
Health starts higher than HP that it replaces, and purposefuly progressely in smaller steps, avoiding the health sponge issue of later level 5e. Due to only being increased when being purposefully taken as a Power, it is naturally restrained and reserved for those that invest in it, those ineffible heroes who seem to be able to take punch after punch where others would fall to the first blow.

#### Recovery
Hit Dice are also an older mechanic that is mostly vestigial. It too is removed. 

**Recovery** - Resting (short or long) recovers your Race's Baseline Health + your Fortitude, no more or no less.

Once you have regained Health from Short Rests twice, you cannot regain Health from a third Short Rest until you have completed a Long Rest. Meaning, per day, you can at maximum regain 3 × (your Race's Baseline Health + your Fortitude).

If you seek medical attention or healing spells, however, you may yet recover a lot more Health in a day, but this is fine since it is an investment of other resources.

#### Wounds
Entering the Dying state is now inheritantly dangerous. When you enter the Dying state you gain the new condition, "Wounded X":

**Wounded X** - When your Health is reduced to 0 and you don't already have the Wounded condition, you go Unconscious and you gain the Wounded 1 condition. Each time you go Unconscious from your Health dropping to 0, your Wounded condition increases by 1. 

When you make Death Saves, the DC is not 10, it is your Wounded condition's rank × 5. So at Wounded I, Death Saves are made against a DC of 5, at Wounded II a DC of 10, Wounded III at DC 15 etc.

The Wounded X condition loses one rank per Long Rest, and one rank per successful Medicine check made against a DC of the Wounded condition rank × 5 (the same like a Death Save). This Medicine check can be made once per day on a character, regardless of success or failure.

The more you're knocked down, the more likely you are to stay down, forever.

#### Flat Maths
If 5e made the math linear from quadratic 3.Xe, PEDD seeks to make the math flat, making it easier to predict and interpret, and also aiding with the level-less system. It also has the added benefit of making something that was dangerous, always dangerous. Flat Maths means nothing "falls off".

To aid in the caluclation of the Maths, the following assumptions are kept to:
- "*peasants*" face an average DC of 10, hit at +0/+3 (unskilled/skilled, unskilled being the norm), have 10 Defence and have 8-12 Health. 
- "*adventurers*" face an average DC of 15, hit at +2/+5 (unskilled/skilled, skilled being the norm), have 15 Defence, and have 20-30 health. 

As such, all damage sources need to be re-calibrated; various high-level spells and large monsters are brought down (typically by simply reducing the multiples of dice to a single dice of the corresponding size), making the face-value of such abilities easier for newer players to read. ("Oh my go, a D12 of damage!?" Vs the relatively opaque 3d10 damage of a giant). Two sword strikes, a fireball, or a headshot (e.g. a critical) will drop most to 0 Health.

#### Full, Unarmoured and Stationary Defence
To make characters easier to strike, meaning less spongey, and also to make cmobat more proactive and engaging; the Defence Stat replaces AC and is more flexible than a flat value, being made of three parts: 
- a base value from your Race (typically 8)
- an Armour value determined by worn Equipment
- an Evasion value, Reflexes to a minimum of 0 which can be limited by worn Equipment. 
  
Instead Defence is calculated when required from these three parts, depending on what parts are in play. This gives us three kinds of Defence;
- **Full Defence** - Defence with both Armour and Evasion
- **Unarmoured Defence** - Defence without Armour, armour limits on Evasion are still applied. A few effects target Unarmoured Defence.
- **Stationary Defence** - Defence without the benefit of Evasion, often called "touch AC" in other systems. Some effects target Stationary Defence, and surprised targets only get their Stationary Defence.

Remember that the Armour value also changes during play as you don and doff Equipment, and especially based on whether you Raise your Shield or not!

### One Action All At Once
A radical change I've experimented a little with is to basic combat where, simply, all characters in a round of combat have one action, and everyone "acts" at once, no initiative.

How on Earth does that work? You might be thinking.

All enemies in the scene declare their intentions, just as their movements would give away what they're about to do. Then all players decide among themselves what they're going to do that round. When everyone is happy with their actions, you "resolve" the round in whatever order works.

**Initiative Contest** - For any situations where the order of actions matters, the two characters involved roll off with their initiative to see who can get the higher value. If it makes sense to resolve such conflicts of interest using appropriate skill checks rather than Initiative (i.e. Athletics), then do so. For "slow" enemies / mooks the DM will just let the players go first, player's advantage.

Most actions, however, can be resolved simultaneously. Attacks for example; two people just try to hit each other, damage each other, and collapse wounded at the same time.

Since everyone gets only one action, the action / bonus-action / movement economy of 5e is radically simplified. Movement is simply another action, making the "Dash" action and the "Movement Action" synonymous. Bonus actions are mostly unchanged but are best thought of as 'concurrent actions', happening at the same time and therefore not significantly interrupting the character's main action. Reactions, interestingly, disappear. 

**Converting Reactions** - Any "Reactions" are considered "Actions". As turns are simultaneous their triggers don't matter. If anything, the "triggers" are natural consequences of play. "Oh, the zombie is attempting to bite my face? I block!".

#### Engagement
To help with handling fights with little to no initiative and create a natural ebb-and-flow to combat, combatants are "paired off" in **Engagements**. These are the momentary pairs or small groups that naturally form in the middle of any chaotic fight, and allows us as the players to "zoom in" on little microcosms of fights with the camera, as it were, focusing on pairing after pairing.

Engagements are resolved effectively simultaneously and the order of Engagements doesn’t matter, as with only 1 action per turn melees rarely effect each other.

All combat is resolved in two simple steps:

1. **Determine Engagements** - where combatents, according to their ["Zone of Engagement"](#zone-of-engagement), “pair off”. “Pulling” and “turning”, if in conflict, are an Initiative Contest. Any who intend to move do, engaging as necessary.
2. **Resolve Engagements** - resolving pairs/groups in a sensible/cinematic sequence. Melee conflicts are easily resolved. Ranged attacks naturally involve unpaired individuals; resolve simultaneously with everyone else. Resolve conflicts of interest with an Initiative Contest. For example; "I try to grab the bag of gold before him", "OK, you and the white dragon need to make an Initiative Contest". 

#### Zone of Engagement
The rules of pairing off, pulling and turning. 

How do you avoid a long conga-line chain of awkwardly connected characters fighting each other? "Pairing off". Sometimes if you want to attack Mr A, even if they're attacking Mr B, because Mr C is attacking you and is otherwise unengaged, you have no choice but to "**Turn**" and "**Pair Off**" with them. 

A character can only attempt to engage one character at a time. You can only melee attack someone you’re engaged with. Conga-lines break as if you, who are engaging someone who is engaging someone else, are engaged by a fourth, you must “turn” and engage your attacker, with the attacker **“Pulling”**. I.e., you cannot be "pulled" if you are engaged with someone who is engaged with you.

Additionally, a character can only be engaged by a maximum number of characters according to their size. Sometimes someone is surrounded by attackers, and even if you wanted to join in on the bullying, you're crowded out. The maximum number of opponents a character of a given size can have is:
- tiny/small - 1
- medium - 2
- large - 4
- gargantuan - 8

**Flanking** - is changed. You are "Flanking" when you are the one in an Engagement who the foe isn’t engaging. You cannot flank a creature 2 or more sizes larger than you.

#### Additional Actions
Also, to make martial combat spicier a variety of generally available tactical basic combat actions are added; 
- **Charge** - you make a linear movement (no turn greater than 90 degrees) at the end of which you make 1 attack at advantage as a bonus action. You need to have moved over half your movement in order to be able to take the bonus action attack.
- **Dodge** - as an action, you make a Reflex Saving Throw and if the result is higher than your Defence, it replaces your Defence value for the rest of the round
- **Block** - as a Bonus Action, you raise your weapon or shield to gain the item's block value as Armour. This prevents you using that item as a weapon to attack. The Armour bonus lasts for the rest of the round
- **Parry** - if your weapon has the Parry Property, you make an attack action against an enemy who is making a melee attack against you. The roll is your Defense for the rest of this round, and also functions as a normal attack action. Resolve the enemy's attack against your new Defence, if its higher or even lower.
- **Disengage** - as a Bonus Action, move 5ft without triggering Attacks of Opportunity. (Replaces 5e action "Disengage")
- **Stand** - a Bonus Action to go from Prone to Standing.
- **Go to cover / Go prone** - as a Bonus Action make yourself Prone, or enter adjacent cover. The Prone condition or being in cover uses Stationary Defence. As before Prone makes being shot at occur at disadvantage, and cover is +2/+5 to Defence for half / ¾ cover.
- **Attack of Opportunity** - as a Bonus Action to an enemy you're engaged with moving away from you without Disengaging from you, you can make an attack action on them, after which they have moved away and are no longer engaged with you for that Round.

***

## Power Progression
In a move I've wanted to do since I've ever started tweaking 5e and messing around with my own RPG's, I introduce an abolishment of all classes and the system of levelling, replacing it with "Powers" (created from Features and Feats). The intent is to allow for any combination of Features to be allowed for all sorts of different and unique characters, and to replace levelling with a more story-driven Power by Power progression system.

Certain Powers will be stronger than others, so they will key off of prerequisites, typically Stats, the presence of other Powers, and also “After n or more Powers” or "Once every n<sup>th</sup> Power", meaning n number of other Powers must be taken before this Power can be taken, and the same again if taking this power again. This has nothing to do with other Powers that also have this prerequisite, so they may be "interleaved".

Powers taken more than once should be noted what "Rank" they are at; such as "Hale I" or "Hale IV", to show that they are technically two separate powers.

This means (as both Hearty and Hale are "Once every 2<sup>nd</sup> Power" Powers) the following is a valid combination of Powers:
1. Brawler
2. Hearty I
3. Hale I
4. Hearty II
5. Hale II

As has already been listed, some Powers have some meta categories:
- Racial Powers – inborn powers that cannot be trained in normal progression and can only be taken during character creation
- Background Powers - so called "simpler" Powers that can be taken as part of your Background
- Unique Powers - those that can only be taken once
- Difficult - Powers that take longer than usual to learn

#### Powers In Training
Powers are “in training” before coming online, to encourage roleplay of skill acquisition. E.g. a character at the start of each session declares what Power/s they are training towards and when the when the group / DM feels its appropriate, characters gain that Power.

For the intended "power level" of a Power, take any Feat from the PHB which has a Stat increase component, and remove the Stat increase.

### Spheres of Magic
Spellcasting is a Feature that had to receive major reworking, and is still WIP.

### Proficiencies Rework; PEDD Skills
A part of Powers Progression is the flattening of the odd little distinct yet related categories of "Skills, Tools, Languages and Weapon & Armor Proficiencies". They all are now "Skills". Weapons have also been regrouped into "Weapon Classes", no longer "Simple" and "Martial" and no longer taken for Proficiency individually, as that's too fine-grained, or gained as one of the massive sets "Simple" and "Martial" as they were far too broad. 

Body, representing proficiency with unarmed combat, has been introduced as a simple weapon skill; and yes, due to being promoted to a Stat, Perception is removed. This, and the fact that in PEDD no skill is automatically associated with a Stat, gives us the flat list:

<div class="proficiencies-list">

- Acrobatics
- Animal Handling
- Arcana
- Athletics
- Battle-Axes*
- Blades*
- Body
- Bows
- Clubs & Axes
- Crafting
- Deception
- Firearms & Pistols
- Heavy Armour*
- Heavy Blades*
- History
- Insight
- Intimidation
- Investigation
- Knives
- Languages (one of)
- Light Armour
- Mauls*
- Medicine
- Medium Armour*
- Nature
- Persuasion
- Pole-Arms*
- Religion
- Shields
- Sleight of Hand
- Slings
- Spears
- Stealth
- Survival
- Thrown
- Tools (one set of)

- Custom - for unique undefined weapons and skills

</div>

For ease of use, skills are separated into four groups; 
- **General Skills** - which most of the time anyone can attempt the actions that would be governed by this skill even if they're not proficient.
- **Simple Weapons** - a subset of general skills for "general" weapons, and includes light-armour and shields.
- **Trained Skills** - which most of the time you cannot attempt the actions that would be governed by this skill unless proficient.
- **Martial Skills** - a subset of Trained Skills for "Trained" weapon & armour classes.

This is not to say anyone can attempt all General Skill checks (proficient or not) or that without proficiency you can never attempt any Trained Skill check, as it depends on the scenario and is a DM (me) call, which players can argue in either direction as best fits the understanding of the table.

*Certain Martial Skills marked with an * require proficiency in other skills before they can be taken. 
- Heavy Armour requires Medium Armour which requires Light Armour. 
- Battle-Axes and Mauls require Clubs & Axes.
- Heavy Blades requires Blades which requires Knives.
- Pole-Arms requires Spears

#### General Skills

<div class="proficiencies-list">

- Animal Handling
- Athletics
- Deception
- Insight
- Intimidation
- Persuasion
- Sleight of Hand
- Stealth
- Survival

- Custom - for general skills not defined in the list.

</div>

#### Simple Weapons

<div class="proficiencies-list">

- Body
- Clubs & Axes
- Firearms & Pistols
- Knives
- Light Armour
- Shields
- Slings
- Spears
- Thrown

- Custom - for unique simple weapons not defined in the list.

</div>

#### Trained Skills

<div class="proficiencies-list">

- Acrobatics
- Arcana
- Crafting
- History
- Investigation
- Languages (one of)
- Medicine
- Nature
- Religion
- Tools (one set of)

- Custom - for trained skills not defined in the list.

</div>

#### Martial Skills

<div class="proficiencies-list">

- Battle-Axes*
- Blades*
- Bows
- Heavy Armour*
- Heavy Blades*
- Mauls*
- Medium Armour*
- Pole-Arms*
- Custom - for martial skills not defined in the list

</div>



#### Proficiency Bonuses and Expertise
**Proficiency a.k.a. Bonus** - having Proficiency is also known as having a "Bonus" in a skill check, which means a +2, and is typically derived from having Proficiency in a Skill from your Race, Background, Archetype or Power, or as a Bonus in a certain scenario earned directly from a Power. This replaces 5e 'Proficiency bonus'. Every Proficiency is a Bonus, not all Bonuses are from Proficiencies, to be clear.

A special Power, “Aptitude I/II”, increases the value of a Bonus to +3/+4.

**Expertise** - Abilities with Bonus can gain Expertise to be grant effectively a double Bonus. Every area of the game that grants Expertise should only do so when that area already has a Bonus, otherwise it is treated as a Bonus. An area of the game which already benefits from Expertise cannot benefit from it again.

### *Example Powers*
**Artisan** – gain proficiency in a Tool Set and proficiency in a Skill. You also gain Expertise in a Tool Set. When not at Disadvantage, you can choose to not roll when making any Tool Set check and instead assume you rolled a 10, adding Stat and any Bonus to that as normal.

**Brawler** – (Unique) Your Unarmed Attacks contain the Block I, Finesse and Parry (bludgeoning) properties. Your Unarmed Attacks deal d4 damage.

**Combat Expert** – (Proficiency with a martial weapon) You can Engage one more enemy, up to the maximum number possible for your Size

**Hale** – (Once per 2 Powers) Rests grant an additional Fortitude + Willpower (to a minimum of 1) as well to Health recovery.

**Hardy** - (Once per 2 Powers) Add your Fortitude & Willpower (to a minimum of 1) to your Health total

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

**Aptitude I/II** - (once every 5<sup>th</sup> Power), Bonus is increased to +3, or +4 if taken twice. Cannot be taken more than twice.