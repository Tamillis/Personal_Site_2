## A remake of 5e

"One D&D", sorry "5.5" now, is coming and Wizards of the Coast really put their PR foot in it with the licensing changes so we're all ready to jump ship. I instead find myself remaking the ship, taking what I think works well, and changing, exchanging and adding in what I would like it to have. So if I were to make a 6th edition of a fashion that suited my tastes and allowed me to explore, reformulate and refine areas of mechanics in which I personally have an interest, while keeping much the rest the same, this would be that. A "Pete's Edition of Dungeons & Dragons", you might say.

In addition to mechanics that I personally find interesting, a lot of the changes I've made are minor tweaks I've done over the years for new player friendliness. Many times now, I've found myself the DM for a group of newbies who I've coaxed into the hobby or given at last an outlet for their pent-up interest, and these changes better enable newer folks to enjoy the hobby without needing to work their way past legacy systems and jargon. While some changes will add complexity, all are done with new players in mind as well, and all of PEDD is written with that understanding. So apologies to veterans if it feels like I'm belabouring the point.

Taking the content of the Fifth Edition as a base, PEDD applies changes in four major categories: 
- [Character Creation](/PEDD/character-creation) - a rework of the character creation system and core ability scores
- [Skills](/PEDD/skills) - a condensation and rework of the skill & proficiency systems, with a particular overhaul of how weapons are used
- [Power Progression](/PEDD/powers) - abolishment of the class and levelling system (including updates to nearly all features, feats and spells) which was the impetus behind this whole project
- [Combat](/PEDD/combat) - a rework of the action economy and combat to increase table-engagement, speed up & simplify the work of combat and yet also enable it to be more tactical

As this is not a complete system rewrite, more of an overhaul, anything not mentioned is not changed from 5e as while this is a total makeover affecting vast swathes of the game, the base is still D&D 5e and you know what, that’s OK. It's a good base, and one we are all familiar with and that does a damn fine job, and by extending it, it means there's no need to repeat good material.

Note that all in-game terms as defined in PEDD are capitalised, like 'Action', and that a corresponding entry in the Index (WIP) can be quickly found, but not necessarily all capitalised words are in-game terms. If I get the implementation going, each term's index entry will be quickly visible via pop-up.

### Flat Maths
A large part of the rewrite focuses on getting the maths right for the sweeping changes being made. It does this by making the maths "flat". This makes it easier to predict and interpret, and aids with the level-less design. It also has the added benefit of making something that was dangerous, always dangerous. Flat Maths means nothing "falls off".

To aid in the calculation of the maths, the following assumptions are kept to:
- "*peasants*" face an average DC of 10, act at +0/+3 (unskilled/skilled, unskilled being the norm), have 8 Defence (unarmoured and no bonuses) and have 6 Health. 
- "*adventurers*" face an average DC of 15, act at +2/+5 (unskilled/skilled, skilled being the norm), have 15 Defence (armoured and/or with decent reflexes), and have 14 Health (having Hardy I).*
- "*heroes*" face an average DC of 18, act at +4/+8 (unskilled/skilled, nearly always skilled), with +12 in their focus due to Expertise, have 18 Defence (high armour and/or reflexes), and have 30 Health (having Hardy II+).*

*Note that the numbers here are slightly skewed high, as I'm assuming that characters will naturally specialise and specialists will nearly-always be the one to attempt their field. For example, the health and defence numbers are what I expect for front-line characters that are supposed to take hits.

As such, all damage sources are [TODO: need to be] re-calibrated; various high-level spells and large monsters are brought down. Typically by simply reducing the dice size based on the scale of lethality (d4 for not-immediately-lethal, d6 for lethal to peasants, d12 for lethal to adventurers, d20 for lethal to heroes), and like 5e scaling number of dice with scale of monster, but also scale of damage (1 dice for medium, 2 for large, 3 for huge etc.). The idea here is that of Flat-Maths, thereby ,aking the face-value and value-spread of such abilities easier for newer players to read. Two sword strikes, a fireball, or a headshot (e.g. a critical) will drop most to 0 Health.

DC's are relatively unchanged, but again become more consistant and easier to read. In [Skills](./pedd/skills) it is stated that "the maximum possible increase to a dice roll is +15". Since the probability curve for throwing one dice, the d20, is flat, this allows me to calculate the following DC's for a 50-50 chance to succeed at a given check, to which I have given rank-style descriptors to help envision who ought to be at that ability:

| Difficulty Class (DC) | 50-50 Chance for the |
| --- | --- |
| 5 | Disabled |
| 8 | Impaired |
| 10 | Peasant |
| 15 | Adventurer |
| 18 | Professional |
| 22 | Hero |
| 25 | Legend |
| 30 | Demi-god (as no non-superhuman can reach above +15 on a D20) |
| 40 | Godlike (as a theoretical cap to even the most powerful beings, a bonus to a D20 of +30) |

You'll note that the numbers don't progress "cleanly" such as 5, 10, 15, 20... etc. That's because these numbers have been calculated rather than thrown out there as a target or rough guide. Hopefully as I test the system, I can adjust these numbers to reflect not just predictions, but empirical results.

## Miscellaneous Changes
Changes to D&D 5e that don't fit in one of the four major categories above.

### Characters, Creatures and Monsters
Instances of 'creature' are updated to 'character' as generally the game is character focused and the clearer language helps. All monsters, beasts etc. do count as characters in this instance. However there is also a greater, clearer, emphasis on so-called 'monster types' as well, and are referenced in certain Powers. They're the (slightly expanded and rejigged) following categories known as Character Types:

#### Character Types
- **Aberrations** - so-called 'true outsiders', enigmatic and horrifying beings from beyond the outer planes and the boundary of Time and Space itself, sometimes referred to as the 'Far Planes'
- **Beasts** - natural creatures of the material plane, though humanoids and other sophonts are excluded from this category.
- **Celestials** - beings of the Good planes
- **Constructs** - beings of the plane of Logic and other constructs built in their image on the material plane. This means there are "Outsider constructs" and "material constructs"
- **Dragons** - beings of ancient power and deep hunger, said to be all that's left of the three Creators
- **Demons** - beings of the plane of Passion
- **Elementals** - beings of the four ribbons of the elemntal braid, those old things from when the creators first wove the physical realms, or newer spirits of the lands, seas and skies.
- **Fell** - beings of the realm of Shadowfell, though sometimes erronously mixed with Fey or Undead.
- **Fey** - beings of the realm of the Fey Wild
- **Fiends** - beings of the Evil planes
- **Giants** - those who're descendants of the Titans, the first and greatest of the Creator's children.
- **Humanoids** - also known as Sophonts, those typically of two legs and two arms of the physical realms who're capable of intelligent thought. Further subdivided into the Races of the worlds (a very long list indeed; dragonborn, dwarf, elf, gnome, goblinoid, half-elf, halfling, human, tuskman, etc. ...). Scholars argue that this should in-fact be two categories: humans and little-people.
- **Jurors** - beings of the planes of Reason, though often erronously confused with Celestials
- **Monstrosities** - creatures and other things of the physical realms and beyond, or a mix thereof, that require some mana to live. Things that are not 'of nature'.
  - **Lycanthropes** - humanoid monstrosities infected with a shape-changing disease and predilection for violence and the hunger of the far planes
- **Oozes** - curious life forms barely worthy of the name, neither plant nor animal nor fungus.
- **Plants** - and although scholars protest, fungi belong to this group
- **Sprites** - beings of the plane of Chaos
- **Undead** - humanoid husks that're turned to evil means by the black breath of Exanima.

There are many subcategories that the Character Types can be grouped with:
- **Material creatures**: beasts, (material) constructs, giants, humanoids, lycanthropes, monstrosities, oozes, plants
- **Living creatures**: beasts, dragons, fell, fey, giants, humanoids, lycanthropes, monstrosities, oozes, plants
- **Natural creatures**: beasts, elementals, giants, humanoids, oozes, plants
- **Dark creatures**: aberrations, demons, fiends, lycanthropes, monstrosities (debated), fell, undead.
- **Outsiders**: Aberrations, Celestials, (Outsider) Constructs, Demons, Fiends, Jurors, Sprites
