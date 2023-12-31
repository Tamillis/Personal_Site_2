## A remake of 5e

"One D&D" is coming and Wizards of the Coast really put their PR foot in it with the licensing changes so we're all ready to jump ship. I instead find myself remaking the ship, taking what I think works well, and changing, exchanging and adding in what I would like it to have. So if I were to make a radical 5.5e of a fashion that suited my tastes and allowed me to explore, reformulate and refine areas of mechanics in which I personally have an interest, while keeping much the rest the same, this would be that. 

In addition to mechanics that I personally find interesting, a lot of the changes I've made are minor tweaks I've done over the years for new player friendliness. Many times now, I've found myself the DM for a group of newbies who I've coaxed into the hobby or given at last an outlet for their pent-up interest, and these changes better enable newer folks to enjoy the hobby without needing to work their way past legacy systems and jargon. While some changes will add complexity, many are done with this in mind, and all of PEDD is written with the understanding that totally new-to-D&D-and-RPG's players will have to deal with them.

Taking the content of the Fifth Edition Player's Handbook as a base (meaning, assume normal 5e D&D unless otherwise stated), PEDD applies changes in three major categories: 
- a rework of the character creation system and core ability scores known as *Character Creation 5.P* 
- abolishment of the class and levelling system (including updates to nearly all features, feats and spells) known as *Power Progression*
- and a rework of the action economy and combat to increase table-engagement, speed up & simplify the work of combat and yet also enable it to be more tactical, known as *Combat 5.P*

Anything not mentioned is not changed as while this is a total homebrew makeover the base is still D&D 5e and you know what, that’s OK. It's a good base, and one we are all familiar with and that does a damn fine job, and by extending it, it means there's no need to repeat good material. It's all already there.

Note that all in-game terms as defined in PEDD are capitalised, like 'Action', and that a corresponding entry in the Index (WIP) can be quickly found, but not necessarily all capitalised words are in-game terms. If I get the implementation going, each term's index entry will be quickly visible via pop-up.

### Miscellaneous Changes
Changes to D&D 5e that don't fit in one of the three major categories above.

### Skills & Proficiency
Another part of PEDD is the flattening of the odd little distinct yet related categories of "Skills, Tools, Languages and Weapon & Armor Proficiencies". They all are now "Skills" in which you have "Proficiency", or not. Being Proficienct means being able to apply your Bonus.

Weapons have also been regrouped into "Weapon Classes", no longer "Simple" and "Martial" and no longer taken for Proficiency individually. The old system was too fine-grained as well as bizarrely too broad as most gained weapon proficiencies through the massive sets "Simple" and "Martial" via their classes. 

Body, representing proficiency with unarmed combat, has been introduced as a Simple Weapon Skill, to remove Unarmed Combat from its odd state of limbo. And yes, due to being promoted to a Stat, Perception is no longer a Skill.

In PEDD no Skill is automatically associated with a Stat, though there are suggestions as naturally certain Skills tend to be handled by certain Stats. However if played well, you can Intimidate with Charisma using guile, Stealth with Intelligence using knowledge of the terrain and the enemy, and do Acrobatics with Accuracy while juggling, depending on how you use the Skill. The GM and the table will decide if a combination is valid, or if another combination would be better.

**Note** for weapon attacks, the Stats used are fixed: Strength for Melee, Accuracy for Ranged (unless a property of the weapon or some Power allows you to choose another Stat).

Skills are primarily earned by your Background, the skills you learned to do during your profession, but also from your Role: and some racial Powers also give skills, those in born natural abilities of a race.

WIP - turn the below into a list of selectable skills / automatically selected based on other character choices, and custom to have a text input. Prompt for the number of untrained/trained free picks left.
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

#### General, Trained and Martial Skills
For ease of use, skills are separated into four groups; 
- **General Skills** - which most of the time anyone can attempt the actions that would be governed by this skill even if they're not proficient.
- **Trained Skills** - which most of the time you cannot attempt the actions that would be governed by this skill unless proficient.
- **Martial Skills** - skills with weapons, armour and shields. A subset exists for General Skills, i.e. "Simple Weapons", and for Trained Skills, i.e. "Skilled Weapons".

This is not to say anyone can attempt all General Skill checks (proficient or not) or that without proficiency you can never attempt any Trained Skill check, as it depends on the scenario and is a DM (me) call, which players can argue in either direction as best fits the understanding of the table.

If you gain a Skill that you already have proficiency in, you can pick a different skill of that category (General, Trained, or Martial).

#### Martial Skill Prerequisites and Downgrading Skills
*Certain Martial Skills marked with an * require proficiency in other skills before they can be taken. 
- Heavy Armour requires Medium Armour which requires Light Armour. 
- Battle-Axes and Mauls require Clubs & Axes.
- Heavy Blades requires Blades which requires Knives.
- Pole-Arms requires Spears

If a Background grants you a skill proficiency in a Skill you don't have the prerequisites for, "downgrade" the Skill to its prerequisite (unless, during character creation, you get the Skill from elsewhere).

#### General Skills 
The suggested stat to base the skill check with is in brackets, though this is merely a suggestion.

<div class="proficiencies-list">

- Animal Handling (Perception)
- Athletics (Strength)
- Deception (Charisma)
- Insight (Perception)
- Intimidation (Strength)
- Persuasion (Charisma)
- Sleight of Hand (Dexterity)
- Stealth (Dexterity)
- Survival (Intelligence)

- Custom - for general skills not defined in the list.

</div>

#### General Martial Skills
"Simple Weapons"

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

#### Trained Skills (Suggested Stat)

<div class="proficiencies-list">

- Acrobatics (Dexterity)
- Arcana (Intelligence)
- Crafting (Dexterity)
- History (Intelligence)
- Investigation (Perception)
- Languages, one of (Charisma)
- Medicine (Intelligence)
- Nature (Intelligence)
- Religion (Intelligence)
- Tools, one set of (Strength / Dexterity)

- Custom - for trained skills not defined in the list.

</div>

#### Trained Martial Skills
"Martial Weapons"

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
**Proficiency a.k.a. Bonus** - having Proficiency is also known as having a "Bonus" in a skill check, which means a +2, and is typically derived from having Proficiency in a Skill from your Race, Background, Role or Power, or as a Bonus in a certain scenario earned directly from a Power. This replaces 5e 'Proficiency bonus'. Every Proficiency is a Bonus, not all Bonuses are from Proficiencies, to be clear.

A special Power, “Aptitude I/II/III”, increases the value of your Bonus to +3/+4/+5.

**Expertise** - Abilities with Bonus can gain Expertise to be grant effectively a double Bonus. Every area of the game that grants Expertise should only do so when that area already has a Bonus, otherwise it is treated as a Bonus. An area of the game which already benefits from Expertise cannot benefit from it again. As weapons are just another kind of Skill, Martial Skills, you can benefit from Expertise with them.

In other words, on a roll, you will never get more than your Bonus or Expertise in addition to your Stat increase, and the maximum possible increase to a dice roll is +15 (+5 Stat, +5 Bonus x2 from Expertise).

### Characters, Creatures and Monsters
Instances of 'creature' are updated to 'character' as generally the game is character focused and the clearer language helps. All monsters, beasts etc. do count as characters in this instance. However there is also a greater, clearer, emphasis on so-called 'monster types' as well, and are referenced in certain Powers. They're the (slightly expanded and rejigged) following categories known as Character Types:

#### Character Types
- **Aberrations** - so-called 'true outsiders', enigmatic and horrifying beings from beyond the outer planes and the boundary of Time and Space itself, sometimes referred to as the 'Far Planes'
- **Beasts** - natural creatures of the material plane, though humanoids and other sophonts are excluded from this category.
- **Celestials** - beings of the Good planes
- **Constructs** - beings of the plane of Logic and other constructs built in their image on the material plane
- **Dragons** - beings of ancient power and deep hunger, said to be all that's left of the three Creators
- **Demons** - beings of the plane of Passion
- **Elementals** - beings of the four ribbons of the elemntal braid, those old things from when the creators first wove the physical realms, or newer spirits of the lands, seas and skies.
- **Fell** - beings of the realm of Shadowfell, though sometimes erronously mixed with Fey or Undead.
- **Fey** - beings of the realm of the Fey Wild
- **Fiends** - beings of the Evil planes
- **Giants** - those who're descendants of the Titans, the first and greatest of the Creator's children.
- **Humanoids** - also known as Sophonts, those typically of two legs and two arms of the physical realms who're capable of intelligent thought. Further subdivided into the Races of the worlds (a very long list indeed; dragonborn, dwarf, elf, gnome, goblinoid, half-elf, halfling, human, tuskman, etc. ...)
- **Jurors** - beings of the planes of Reason, though often erronously confused with Celestials
- **Lycanthropes** - humanoids infected with a shape-changing disease and predilection for violence and the hunger of the far planes
- **Monstrosities** - creatures and other things of the physical realms and beyond, or a mix thereof, that require some mana to live. Things that are not 'of nature'.
- **Oozes** - curious life forms bare worthy of the name, neither plant nor animal nor fungus.
- **Plants** - and although scholars protest, fungi belong to this group
- **Sprites** - beings of the plane of Chaos
- **Undead** - humanoid husks that're turned to evil means by the black breath of Exanima.

There are many subcategories that the Character Types can be grouped with:
- **Material creatures**: beasts, giants, humanoids, lycanthropes, monstrosities, oozes, plants
- **Living creatures**: beasts, dragons, fell, fey, giants, humanoids, lycanthropes, monstrosities, oozes, plants
- **Natural creatures**: beasts, elementals, giants, humanoids, oozes, plants
- **Dark creatures**: aberrations, demons, fiends, lycanthropes, monstrosities (debated), fell, undead.
- **Outsiders**: Aberrations, Celestials, Demons, Fiends, Jurors, Sprites
