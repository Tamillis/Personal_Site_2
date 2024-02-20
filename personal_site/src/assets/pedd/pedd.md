## A remake of 5e

"One D&D", sorry "5.5" now, is coming and Wizards of the Coast really put their PR foot in it with the licensing changes so we're all ready to jump ship. I instead find myself remaking the ship, taking what I think works well, and changing, exchanging and adding in what I would like it to have. So if I were to make a 6th edition of a fashion that suited my tastes and allowed me to explore, reformulate and refine areas of mechanics in which I personally have an interest, while keeping much the rest the same, this would be that. A sort of 5.75 if you will, or a "Pete's Edition of Dungeons & Dragons", you might say.

In addition to mechanics that I personally find interesting, a lot of the changes I've made are minor tweaks I've done over the years for new player friendliness. Many times now, I've found myself the DM for a group of newbies who I've coaxed into the hobby or given at last an outlet for their pent-up interest, and these changes better enable newer folks to enjoy the hobby without needing to work their way past legacy systems and jargon. While some changes will add complexity, many are done with new players in mind as well, and all of PEDD is written with the understanding that totally new-to-D&D-and-RPG's players will have to deal with them.

Taking the content of the Fifth Edition as a base, PEDD applies changes in four major categories: 
- a rework of the character creation system and core ability scores known as *Character Creation*
- a rework of the skill & proficiency system known simply as *Skills*
- abolishment of the class and levelling system (including updates to nearly all features, feats and spells) known as *Power Progression*
- and a rework of the action economy and combat to increase table-engagement, speed up & simplify the work of combat and yet also enable it to be more tactical, known as *Combat*

As this is not a compete system rewrite, more of an overhaul, anything not mentioned is not changed from 5e as while this is a total makeover affecting vast swathes of the game, the base is still D&D 5e and you know what, that’s OK. It's a good base, and one we are all familiar with and that does a damn fine job, and by extending it, it means there's no need to repeat good material.

Note that all in-game terms as defined in PEDD are capitalised, like 'Action', and that a corresponding entry in the Index (WIP) can be quickly found, but not necessarily all capitalised words are in-game terms. If I get the implementation going, each term's index entry will be quickly visible via pop-up.

### Flat Maths
A large part of the rewrite focuses on getting the maths right for the sweeping changes being made. It does this by making the maths "flat". This makes it easier to predict and interpret, and aids with the level-less design. It also has the added benefit of making something that was dangerous, always dangerous. Flat Maths means nothing "falls off".

To aid in the caluclation of the Maths, the following assumptions are kept to:
- "*peasants*" face an average DC of 10, act at +0/+3 (unskilled/skilled, unskilled being the norm), have 10 Defence and have 10 Health. 
- "*adventurers*" face an average DC of 15, act at +2/+5 (unskilled/skilled, skilled being the norm), have 15 Defence, and have 20 Health.
- "*heroes*" face an average DC of 20, act at +4/+8 (unskilled/skilled, nearly always skilled), with +12 in their focus due to Expertise, have 20 Defence, and have 30 Health.

As such, all damage sources are [TODO: need to be] re-calibrated; various high-level spells and large monsters are brought down (typically by simply reducing the multiples of dice to a single dice of the corresponding size), making the face-value and value-spread of such abilities easier for newer players to read. Two sword strikes, a fireball, or a headshot (e.g. a critical) will drop most to 0 Health.

DC's are relatively unchanged, but again become more consistant and easier to read. In [Skills](./pedd/skills) it is stated that "the maximum possible increase to a dice roll is +15". This gives us the following DC's using rank-style descriptors to give an indication of who has a 50-50 chance to succeed at a given check:

| Difficulty Class (DC) | 50-50 Chance for the |
| --- | --- |
| 5 | Impaired |
| 10 | Novice |
| 15 | Amateur |
| 18 | Professional |
| 22 | Master |
| 25 | Legend |
| 30 | Superhuman (as no non-superhuman can reach above +15 on a D20) |
| 40 | Godlike (as a theoretical cap to even the most powerful beings, a bonus to a D20 of +30) |

### Miscellaneous Changes
Changes to D&D 5e that don't fit in one of the four major categories above.

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
