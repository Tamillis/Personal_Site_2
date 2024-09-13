## My 5e Overhaul

"One D&D", sorry "5.5" now, oh no wait its D&D 5e (2024) which I think is impresively is an even worse name, is coming and Wizards of the Coast really put their PR foot in it with the licensing changes so we're all ready to jump ship. I instead find myself remaking the ship, taking what I think works well, and changing, exchanging and adding in what I would like it to have. So if I were to make a 6th edition of a fashion that suited my tastes and allowed me to explore, reformulate and refine areas of mechanics in which I personally have an interest, while keeping much the rest the same, this would be that. A "Pete's Edition of Dungeons & Dragons", you might say.

Frankly, by now, this is less an edition of D&D 5e, and more a total overhaul or, in other words, just my own heavily-inspired heroic fantasy roleplaying system with (for now) borrowed spells and features. But hey, here we are.

In addition to mechanics that I personally find interesting and a redo of the maths, a lot of the changes I've made are minor tweaks I've done over the years for new player friendliness. Many times now, I've found myself the DM for a group of newbies who I've coaxed into the hobby or given at last an outlet for their pent-up interest, and these changes better enable newer folks to enjoy the hobby without needing to work their way past legacy systems and jargon. While some changes will add complexity, all are done with new players in mind as well, and all of PEDD is written with that understanding. So apologies to veterans if it feels like I'm belabouring the point.

Taking the content of the Fifth Edition as a base, PEDD applies changes in four major categories: 
- [Character Creation](/PEDD/character-creation) - a rework of the character creation system and core ability scores.
- [Skills](/PEDD/skills) - a condensation and rework of the skill & proficiency systems, with a particular overhaul of how weapons are used.
- [Power Progression](/PEDD/powers) - abolishment of the class and levelling system (including updates to nearly all features, feats and spells) which was the impetus behind this whole project.
- [Combat](/PEDD/combat) - a rework of the action economy and combat to increase table-engagement, speed up & simplify the work of combat and yet also enable it to be more tactical.

While this is now a complete overhaul of base 5e, anything not mentioned is not changed from the 5e ruleset as while vast swathes of the game have been affected, the bones are still D&D 5e and you know what, that’s OK. It's a good base, and one we are all familiar with and that does a damn fine job, and by extending it, it means there's no need for me to repeat good material.

Note that all in-game terms as defined in PEDD are capitalised, like 'Action', and that a corresponding entry in the Index (a WIP) can be quickly found, but not necessarily all capitalised words are in-game terms. If I get the implementation going, each term's index entry will be quickly visible via pop-up.

### Thoughts on Pedd
Having played a recent game for a group of newbies I've noticed that there is *still* a lot of up-front work even with the presentation of cards for easy pick-and-mix character creation. 

The main issue was with the presentation and determination of stats, which makes me want to simplify them. In retrospect, I've ended up with a system of 11 Stats! 15 (!) if you count Health, Defence, Speed and Initiative, which in a way my players did. They're all just terms given the same amount of attention to them. Which, to be fair, is a bit mental. If you get really gnarly, you can add Armour and Base Defence in there too. 

As such I've removed all non-stat increases from the racial options (so resistances are purely derived), I've axed initiative (to be determined by Dex / Per depending on the context pre-fight / whatever the roll-off should be dictated by). Defence complexity is intended so that's staying. Base Health, Speed and Size are unchanged, tacked on to race as really that's all they are anyway. Evasion was given its own name to help diffentiate it from Reflexes as a shorthand for "reflexes value capped by armour and a minimum of 0" but that sort of just didn't work with new folks oddly enough. I'll try using just Reflexes next and see if that works out better. At the very least in needs to be de-emphasised.

On an unrelated note, one was to communicate the ideas behind the Primary Stats are the following schema of worldy-interaction: 
| - | Direct | Indirect | Passive |
| --- | --- | --- | --- |
| **External** | Acc. | Per. | Ref. |
| **Liminal** | Str. | Dex. | Fort. |
| **Internal** | Cha. | Int. | Will. |
 
This helps delineate between the potentially confusing Dexterity and Accuracy, Dexterity and Reflexes, and Strength and Fortitude. 

Strength and Dexterity can be seen as two very different ways to physically interact with the environment: brute force and subtlety: flow and redirection. 

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
| 30 | Demi-god <br/>(as no non-superhuman can reach above +15 on a D20) |
| 40 | Godlike <br/>(as a theoretical cap to even the most powerful beings,<br/>a bonus to a D20 of +30) |

You'll note that the numbers don't progress "cleanly" such as 5, 10, 15, 20... etc. That's because these numbers have been calculated rather than thrown out there as a target or rough guide. Hopefully as I test the system, I can adjust these numbers to reflect not just predictions, but empirical results.

### Where's Wisdom?
Generally speaking wisdom has been removed, with all of the D&D weirdness about 'connection' and 'perception' being part of wisdom, even though most people use wisdom like willpower, and it just generally having a very poorly defined and understood area of concern. It gets especially odd when many people's definitions of wisdom start to sound a lot like Intelligence, such as having the wherewithal to notice something isn't real but is in fact an illusion. Which the game itself calls an Intelligence save!

To address these issues, I've split wisdom in twain. Willpower is willpower, everyone gets that. The coverage of wisdom over connections, in terms of human relations, and empathy is now under Charisma, and perception is under the new Stat Perception. Connection to divine power is covered by Faith, and to primal power via the unrelated-to-the-character Verdance table.

This does leave the window open for those hankering for a sense of “wise”, as in an individual who has a broad body of experience to call upon and errs on the side of patience. Characters still have the various Knowledge skills, and there is now the "Learned" Power for wisdom in the sense of being broadly knowledgeable, educated, well-read, etc., and the “Wisened” background that is wisdom in the sense of a wide body of practiced wisdom coming from age and life experience; the non-academic sage. It is also, I find, mostly simply a matter of role-play.

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

## Converting from 5e

### Features
First, any and all Features can be taken as written so long as any areas of the game they touch haven't been effected by changes in PEDD. Those that do will need adjusting, and some Features have been rewritten wholesale, such as Spellcasting (which has its own section in Magic [here](/pedd/magic#spheres-of-magic)). See the points below.

**Ability Score Increases** - any "Ability Score Increase" features are constrained to, at maximum, two +1's in the stated abilities. Any base-race - subrace combinations with 3 or more ability score increases only increase 2 Stats by +1, and you can choose which two. Any increases to Dexterity can instead be increases to Accuracy. Any increases to wisdom are instead increases to your choice of Perception or Willpower.

**Perception Proficiency** - any feature that gives proficiency in perception instead grants the Keen Sense Power.

**Saving Throw Proficiency** - any feature that gives a saving throw proficiency instead gives +1 to the corresponding Resistance

### Spells and Flat Math Damage Rescaling
Number of dice based on size, x1 for small/medium, x2 for large, x3 for huge, x4 for gargantuan.

Size of dice based on intended damage, 1 for pittance, d4 for non-lethal, d6 for serious (50/50 on killing a Health 4 peasant...), d8 for lethal, d10 for highly lethal, d12 for massive damage.

### Converting Saves
Whenever 5e asks for a save of a certain kind, using the following conversion:
- Strength Saves -> Fortitude Saves
- Dexterity Saves -> Reflex Saves / Fortitude Saves*
- Constitution Saves -> Fortitude Saves
- Intelligence Saves -> Willpower Saves
- Wisdom Saves -> Willpower Saves / Reflex Saves**
- Charisma Saves -> Willpower Saves

*Dexterity is somewhat redefined as the agility and capability of one's body irrespective of their physical Strength or Accuracy. Pure dodging, then, (as most old Dexterity saves were) are covered by Reflex saves, however those old Dexterity saves that were more about the capability of the victim's body (such as jumping high enough) would now be covered by Fortitude saves, which represent more one's physical ability to mitigate damage. 

**Wisdom, being poorly understood by perhaps even the designers of 5e themselves, is an odd one. See ["Where's Wisdom?"](#wheres-wisdom) for my thoughts on that. By default use Willpower, but if Perception would be more appropriate, use a Reflex Save instead.

### Converting Races
Races have been tweaked in a number of ways. Go through the following steps to convert a Race:

1. Use the original Age, Size and Speed. Add a description for the race in the Materium Existentiae.
2. Adjust the Attribute Increase feature to reflect the pattern: ["A Stat +2", "Another Stat +1", "A third Stat -1"]. Adjust using other races as examples if necessary. Combine sub-races if necessary.
3. Add Senses, this may include darkvision if it is a required part of the fantasy of the race. Note that Low-light vision is back, so that might be more appropriate (like Elves, Gnomes, Dragonborn etc.).
4. Introduce Baseline Health (default: 6 base, -1 for small, +1 for large, -1 for weak, +1 for strong)
5. Remove any Skill proficiencies not distinctly tied to the physicality of the race (such as weapon or tool proficiencies)
6. Remove all other non-iconic features and make them the Racial Powers options for that Race, including from all sub-races.
7. If a Racial Power is iconic (it cannot be removed without intrinsically damaging the fantasy of the race), keep it as a named feature of the race. (Such as Lucky, for the Halfling). Try to balance power through tempering racial powers for that race, or introduce a malus elsewhere (such as lowering baseHealth, like I have for the Elves)
8. Create a list of Racial Powers from the removed Features, converting each Feature to a Power, and include any other racial powers to that list that should apply (check with your GM).

### Converting Spells

Spells are mostly left as is, but the use of Flat Math means that damage does need to be brought down for higher level spells. As I haven't started to do that yet, I don't have a baseline to recommend here.

Another are that needs redoing are Reaction spells. By default, change Reaction to Bonus Action. It may make sense to rejig the effect slightly as well, such as "until the start/end of their next turn" to "this turn" since that's how that works now.

