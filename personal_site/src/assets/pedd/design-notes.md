When PEDD became Trinitas, the various musings on design and justifactions were removed from the pages, and left here. I've yet to properly organise this, so for now you get to see it as one long dump.

- [Flat Maths](#flat-maths)
  - [Damage Scales](#damage-scales)
  - [DC's](#dcs)
- [Stat Changes - Where's Wisdom?](#stat-changes---wheres-wisdom)
- [Combat Notes](#combat-notes)
- [Retrospectives on PEDD](#retrospectives-on-pedd)
- [Converting from 5e](#converting-from-5e)
  - [Features](#features)
  - [Spells and Flat Math Damage Rescaling](#spells-and-flat-math-damage-rescaling)
  - [Converting Saves](#converting-saves)
  - [Converting Races](#converting-races)
  - [Converting Spells](#converting-spells)
- [Powers Development](#powers-development)
  - [A Reflection on Powers](#a-reflection-on-powers)
  - [Power Sets](#power-sets)
  - [Power Requirements](#power-requirements)
    - [Power Acquirements](#power-acquirements)
  - [Simulation](#simulation)
- [Skills \& Proficiency](#skills--proficiency)
  - [Max Roll Modifier](#max-roll-modifier)
  - [Knowledge and Martial Skills](#knowledge-and-martial-skills)
  - [Tools](#tools)
  - [Charisma Rolls](#charisma-rolls)

## Flat Maths
A large part of the rewrite focuses on getting the maths right for the sweeping changes being made. It does this by making the maths "flat". This makes it easier to predict and interpret, and aids with the level-less design. It also has the added benefit of making something that was dangerous, always dangerous. Flat Maths means nothing "falls off".

To aid in the calculation of the maths, the following assumptions are kept to:
- "*Peasants*" face an average DC of 10, act at +0/+3 (unskilled/skilled, unskilled being the norm), have 8 Defence (unarmoured and no bonuses) and have 6 Health.
- "*Adventurers*" face an average DC of 15, act at +2/+5 (unskilled/skilled, skilled being the norm), have 15 Defence (armoured and/or with decent reflexes), and have 14 Health (having Hardy I).*
- "*Heroes*" face an average DC of 18, act at +4/+8 (unskilled/skilled, nearly always skilled), with +12 in their focus due to Expertise, have 18 Defence (high armour and/or reflexes), and have 30 Health (having Hardy II+).*

*Note that the numbers here are slightly skewed high, as I'm assuming that characters will naturally specialise and specialists will nearly-always be the one to attempt their field. For example, the health and defence numbers are what I expect for front-line characters that are supposed to take hits.

### Damage Scales
As such, all damage sources will be re-calibrated; various high-level spells and large monsters are brought down. Typically by simply reducing the dice size based on the scale of lethality.

Two scales are used to determine damage: the size and the damage.

Size | ft (approx.) | dice
--- | --- | ---
Small | < 5ft | d3* / d4
Medium | 5ft | d5* / d6
Large | 10ft | d10 / d12
Huge <sup>5e</sup> | 15ft | d15 (rolling a d20 and rerolling anything above 15) or d16 (i.e. 1d8 + 8 if a second dice is even)**
Gargantuan / Huge<sup>PEDD</sup> | 20ft | d20

*These dice can be just half the value of the common d6 and d10, but that'd be annoying to do all the time so I'll just upgrade them to d4 and d6 respectively.

**Obviously this is kind of ridiculous to actually play with but to be honest I leave it here mostly as a demonstrator. The keen eyed will note that the scales double as you go up, and the dice remain relatively clean with the platonic solids, if you skip 5e Huge. So I will. This indeed is the basis for me ignoring the old Huge size category (and also because it better fits with my sense of fantasy Huge for Huge to actually be 5e gargantuan, and PEDD's Gargantuan to just be off the scale, literally).

Damage | No. of dice
--- | ---
Low / Peasant | 1
Normal / Adventurous | 2
High / Heroic | 3
Lethal | 4
Destructive | 5+

The idea here is that of Flat-Maths, thereby, taking the face-value and value-spread of such abilities easier for newer players to read. Two sword strikes, a fireball, or a headshot (e.g. a critical) will drop most to 0 Health.

A knife attack then, is 1d4 damage (plus Stat), a small scale low damage attack according to the above scale.

A fireball (8d6, which averages to about 5d10), is a destructive large scale attack, which also works out. It does concentrate the damage more in that centre, but that's OK. It's a spell, let it be special.

These scales also give me a guideline with which to collapse spells. I've been uhming and ahing about collapsing the magnitudes of the spell system from I to IX to I to VI, with I to V following the above scales and VI being for wacky overpowered spells.

### DC's
DC's are relatively unchanged, but again become more consistant and easier to read. In [Skills](./pedd/skills) it is stated that "the maximum possible increase to a dice roll is +15" (thoughthere are in fact a couple of caveats to this). Since the probability curve for throwing one dice, the d20, is flat, this allows me to calculate the following DC's for a 50-50 chance to succeed at a given check, to which I have given rank-style descriptors to help envision who ought to be at that ability:

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

## Stat Changes - Where's Wisdom?
The first thing in Character Creation you will notice are the changed Stats. The 6 stats of D&D are so iconic they've become ubiquitous, appearing in systems that frankly do not need them. This has highlighted their idiosynchrosies and pitfalls time and again, and changing these was something I just couldn't resist. I've griped about them to my friends often enough, they wouldn't be surprised by this change. This was also the beginning of the slide down the slippery slope to full overhaul.

PEDD's stats are (and their Raison D'Etre):
- **Accuracy** : the ranged weapon attack stat as well as a 'move with precision' stat. Core stats should reflect core interactions, and ranged attacks (especially in my fire-arms based settings) are one of those. It is also a way to break up Dexterity, which has long been known to be over-tuned.
- **Perception** : as the most used skill and a core interaction, and something that ought to represent a facet of a character, it ought to be a stat too. It replaces the "sensing" aspect of Wisdom as well.
- **Strength** : unchanged, but includes most situations Constitution would be used actively (such as with endurance. <small>Yes I know explosive strength and endurance strength are physically very different things but the system doesn't need such a distinction</small>)
- **Dexterity** : re-focused as the stat used in feats of adroitness and physical skill. In game terms it becomes the "skill stat" as its primary area of concern.
- **Charisma** : unchanged but includes Wisdom's old domain of empathy and human-relations.
- **Intelligence** : unchanged, but also determines number of skills.

These 6 stats are combined to make the 3 Resistances, since saves are still a thing and a line is drawn between reactive (saves) and active (stats):
- **Reflexes** (Accuracy + Perception) : one's ability to avoid danger with accurate movements and seeing attacks coming. This also means Dexterity is not used in Defence calculations (by default).
- **Fortitude** (Strength + Dexterity) : one's ability to power through bodily harms from the combination of the power and capability of their body. Replaces Constitution.
- **Willpower** (Charisma + Intelligence) : one's ability to overcome mental hardship, through both aspects of their mentality.

A better and more in-depth explanation can be found in [PEDD Character Creation](/PEDD/character-creation#Statistics).

Generally speaking wisdom has been removed, with all of the D&D weirdness about 'connection' and 'perception' being part of wisdom, even though most people use wisdom like willpower, and it just generally having a very poorly defined and understood area of concern confusing veterans and newbies alike for decades. It gets especially odd when many people's definitions of wisdom start to sound a lot like Intelligence, such as having the wherewithal to notice something isn't real but is in fact an illusion. Which the game itself calls an Intelligence save!

To address these issues, I've split wisdom in twain. Willpower is willpower, everyone gets that. The coverage of wisdom over connections, in terms of human relations and empathy, is now under Charisma, and perception is under the new Stat Perception (which also handily stops Perception being the most-important-adventuring-skill). Connection to divine power is covered by Faith, a secretive seventh Stat for those to whom it matters, and to primal power via the unrelated-to-the-character Verdance table.

This does leave the window open for those hankering for a sense of “wise”, as in an individual who has a broad body of experience to call upon and errs on the side of patience. Characters still have the various Knowledge skills, and there is now the "Learned" Power for wisdom in the sense of being broadly knowledgeable, educated, well-read, etc., and the “Wisened” background that is wisdom in the sense of a wide body of practiced wisdom coming from age and life experience; the non-academic sage. It is also, I find, mostly simply a matter of role-play. Stop me if you have heard of a high-wisdom character who's player hasn't been capable of acting wisely?

## Combat Notes
The goals were to make combat:
 1. More consistently dangerous (so slightly less dangerous at "level one")
 2. More engaging on a player level
 3. More tactical
 4. (And the seemingly incompatible with the above) More snappy

The first point is a combination of the fact that low level combat was too dangerous but higher level combat quickly became trivially easy to survive. Characters became health sponges that you end up playing whack-a-mole with, and monsters much the same. It was also very slow to play through at higher levels. The fact that interesting combat relied on DM's to employ various twists and challenges on top of typical combat rules to make it engaging says more about the base combat system than being critical of DM's who didn't go that far.

Getting rid of HP scaling (starting higher 'Health' but not going up unless explicitely empowered) fixes the health sponge issue, and combined with lower average Defence and the Defence Stat rework makes combat more consistently dangerous (as does the general trend of [Flat Maths](/pedd#flat-maths)).

The second point of tactical choice is improved by bringing more possible [Actions](#combat-actions) to the table, remaking [Weapons](#weapons) and [Armour](#armour) with expanded and active [Weapon Properties](#weapon-properties), and lastly by folding Battle Master Manoeuvers into basic combat actions with the experimental [Focus](#focus) system.

Snappiness was a major motivator for this rewrite of combat. I wanted to erase the issue of players switching off when its not their turn during combat that I frequently observed, no matter how different and engaging I tried to make combat. So I got rid of turns with the [One Action All At Once](#one-action-all-at-once) system. This is a much more engaging system as everyone is playing together and at once, getting rid of the slow round-the-robin of turn based combat. Everyone only having one Action also means each round is resolved much more quickly.

## Retrospectives on PEDD
Having played a recent game for a group of newbies I've noticed that there is *still* a lot of up-front work even with the presentation of cards for easy pick-and-mix character creation.

The main issue was with the presentation and determination of stats, which makes me want to simplify them. In retrospect, I've ended up with a system of 11 Stats! 15 (!) if you count Health, Defence, Speed and Initiative, which in a way my players did. They're all just terms given the same amount of attention to them. Which, to be fair, is a bit mental. If you get really gnarly, you can add Armour and Base Defence in there too.

As such I've removed all non-stat increases from the racial options (so resistances are purely derived), I've axed initiative (to be determined by Dex / Per depending on the context pre-fight / whatever the roll-off should be dictated by). Defence complexity is intended so that's staying, though player's are encouraged to note their typical 'Defence', when armoured and not flat-foot. Base Health, Speed and Size are unchanged but de-emphasised, now tacked on to race as really that's all they are anyway. Evasion was given its own name to help diffentiate it from Reflexes as a shorthand for "reflexes value capped by armour and a minimum of 0" but that sort of just didn't work with new folks oddly enough. I'll try using just Reflexes next and see if that works out better. At the very least in needs to be de-emphasised.

On an unrelated note, one way to communicate the ideas behind the Primary Stats are the following schema of worldy-interaction: 
| - | Brute Force | Subtle | Reactive |
| --- | --- | --- | --- |
| **External** | Acc. | Per. | Ref. |
| **Surface** | Str. | Dex. | Fort. |
| **Internal** | Cha. | Int. | Will. |

This helps delineate between the potentially confusing Dexterity and Accuracy, Dexterity and Reflexes, and Strength and Fortitude. 

Strength and Dexterity can be seen as two very different ways to physically interact with the environment: brute force and subtlety: flow and redirection. 

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

**Wisdom, is an odd one. See ["Where's Wisdom?"](#wheres-wisdom) for my thoughts on that. By default use Willpower, but if Perception would be more appropriate, use a Reflex Save instead.

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

## Powers Development
I have also taken this opportunity to reduce the amount of nitpick and special pleading many features used to come with, where a lot of powers would work in similar but not quite the same ways, making it difficult to recall exactly how anything worked unless you'd memorised every little iota. I seek to inject balance and consistency, as well as also making every Power on roughly equal footing in terms of impact, so that each is worth taking in its own right: cutting down or even combining some of the more superfluous ribbon abilities, buffing others, and bringing everything in line.

Some thoughts and musings on the development of Powers, the core of the PEDD system.

### A Reflection on Powers
Obviously, what I'd decided to do was translate the features of 5e as-is as much as possible: for the twin reasons of simplicity and familiarity. However seeing as PEDD is drifting further and further from its point of origin, and now we have this pretty list of often rather fine grained powers with plenty of awkward prerequisites, odd benefits and often boxed in bizare categories, me thinks it is time to start making more serious changes.

Primarily, I'm inspired by another classless system I saw that also did away with any pretense at connecting to the old classes, but I wish to retain a much greater connection than that. It is simply that, more than anything, I wish to streamline some of the powers, bring them in line with my own sensibilities and implied setting, and explore some of my own ideas. By streamline, I do mean to remove as many Powers as possible by combining them, crunching them down and translating them into other aspects of the system (as already done with the Battlemaster Fighter into Tactical Actions).

This does also imply a future change to spells with pretty much the same approach (remove, combine and translate), but we'll get to that, and whether and by how much it would be necessary, later. Which I have actually started work on, if only behind the scenes.

### Power Sets
An idea for Power rewriting Powers is to guide myself by organising Powers under themed Sets (no totally not classes). A set may be a tree, an inverse tree, or just a grouping. Each set can then have a tag to help navigation and discovery of Powers.

- Focus Set - Powers for enhancing tactical actions and Focus. Note, put certain tactical actions into this.
- Patronage Set - for Pact Magic and friends
  - Invocations - although it would be good to unwrap this set back up into patronage
- Fighting Styles
- Powerful - name to be confirmed. The "level up" set. These are the powers that in a rather absolute sense improve character power, so combining them under one tag allows one "Powerful" Power to be taken per X Powers without overlap. Those would be access to higher level spells, more Health, and Extra Attack. Also create "Heavy Attack" as a foil to Extra Attack: heavy attacks deal twice the damage when using Strength, extra attacks allow you to do more than one attack per action when using Dexterity / Accuracy. Also an "Empowered Cantrips" Power to replace 5th/11th/17th character level power bump.

### Power Requirements
On an unrelated note, I've sat down to set out the framework for Power Requirements, so it can be programmed for a proper build system be built, where Players only see the powers they qualify for (and to have fun features like a character randomizer that actually produces legal results). The character creator also needs to factor in changes to a character caused by Powers, such as skills, expertise marking, Stat increases etc, which means that when deselecting a Power, first the new state must be checked to see if the current powers still qualify and if invalid, ignore the deselect. Or better yet, display in some way that the power is not deselectable.

Prerequisite groupings:
- {Stat name} {value}
- {Power name}
- "Once every Nth Role Power"
- "After N Role Powers"
- {Name} Skill / {Name} Expertise
- {Name} Cantrip / {Name} Spell
- {Tag} Tag
- One of (the above / separated / by / forward-slashes)

#### Power Acquirements
- Powers that grant Skills at Expertise are marked with *, just Skill proficiency (no mark) or Skill proficiency or Expertise if already earned with ^
- Sorcerous Origin and Occult Spellcasting is a special case and needs proper handling. Mana becomes a required pick but retro-actively.

Powers that can be taken multiple times that scale their prerequisites, the scaling needs to be machine readable in some way. Starting with RANK as a keyword (i.e. Dexterity +RANK).

- SkillName^ skill Proficiency or upgrade to Expertise if already earned
- SkillName* skill at Expertise

For Stats:
- stat-change: { stat: val etc.} - note that stat can be the statistics or the secondaries like speed
- stat-max: {stat: val etc.}

### Simulation
So begins the idea of adding everything needed to powers to fully simulate them in a virtual tabletop.

As I make my way through the Powers I'll make a note of the sections here and my thoughts for there use on simulation.

```json "actions": ["array", "of", "action", "names"] ``` will give a list of actions a character can do on their turn (in addition to base)
```json "bonus-actions": ["array", "of", "action", "names"] ``` as above, but for bonus actions. includes if actions are now bonus actions
```json "cool-down": { "short" : 3 } ``` an object with different prop-values for different periods and numbers of times of use per period. Probs just a very high value for "infinite" or negative and check on val == 0

or, you know, I'm just making a tonne of work for myself for basically no reason.

## Skills & Proficiency
What steadily became a more and more significant subsection of PEDD was the skills system. It began as the flattening of the odd distinction between the small yet related categories of "Skills, Tools, Languages, Weapon and Armor Proficiencies", where for simplificty and new player's sake they were all lumped together.

Since then there has also been a pass over skills, with some skills changed, added or removed, and tools, weapons and armour have in particular been overhauled. For example, due to being promoted to a Stat, Perception is no longer a Skill. Occultism, as the missing knowledge skill representing that sphere of magic and occultish lore, has been added, as have certain 'tool' skills.

Weapons have also been redefined from "Simple" and "Martial" weapons, where you no longer earn Proficiency per individual weapon or for the sweeping groups of "Simple" and "Martial", but instead into weapon classes: each its own skill. For item categorisation and shorthand, the idea of "simple" and "martial" weapons remains, but doesn't affect gameplay further than what skills can be taken during "Upbringing".

**Body**, representing proficiency with unarmed combat, has been introduced as a Weapon Skill, to remove Unarmed Combat from its odd state of limbo.

All of these are now "Skills" in which you have "Proficiency", or not, meaning you gain your Bonus to the skill check roll.

### Max Roll Modifier
In other words, on a roll, you will never get more than your Bonus or Expertise in addition to your Stat increase, and the maximum possible increase to a dice roll is +15 (+5 Stat, +5 Bonus x2 with Expertise). This does mean that the few Powers that break this rule need to do so carefully, and it probably would be better to rewrite most that currently do, as they weren't written with the above maths in mind.

### Knowledge and Martial Skills
This idea has since been axed.

There were two kinds of specialist skills:
- **Knowledge Skills** - skills which most of the time you *cannot* attempt the actions that would be governed by this skill unless Proficient. You either know something, or you do not. For example the new skill 'Culture', which represents learning in the cultural mores and sociology both generally and for specific areas.
- **Martial Skills** - skills with weapons, armour and shields. Unlike other skills, some Martial Skills are marked with an *, meaning they require other Martial Skills before they can be taken. If a Background or Power provide Proficiency in such a skill before you have the requirement, you "Downgrade" it to the required Skill instead.
  - Heavy Armour requires Medium Armour which requires Light Armour.
  - Battle-Axes and Mauls require Clubs & Axes.
  - Heavy Blades requires Blades which requires Knives.
  - Pole-Arms requires Spears

### Tools
This section used to be called "Getting Rid of Tools, Game Sets, Instruments and Kits". They were awkward, and often too fine-grained, and more often than not an ignored part of 5e. They've received the weapons treatment: getting parsed into broader categories that are then just skills in which to take proficiency.

Tools the item still exist and can be used just like any other item in the game, opening up role-playing opportunities that can then be rolled on as required.

| Skill | 5e tools |
| --- | --- |
| **Alchemy** | Herbalism Kit, Poisoner's Kit, related artisan's tools |
| **Sleight of Hand** | Thieves' Tools, relative Gaming Sets |
| **Musical Instruments** | Covers all the musical instruments |
| **Driving**, **Sailing**, **Riding** | Vehicles (Land), Vehicles (Sea) and what was a missing part of 5e |
| **Enigneering** | For most Artisan's tools used in crafting.
| **Strategy** | For thinking game sets like Chess
| **Naviagation** | Navigators tools |
| **Disguise** | Disguise kit, forgery kit when forging stamps and such apparel |

### Charisma Rolls

I recently came across Shadow of the Demon Lord and it's take on stats (Agility, Strength, Intellect, Will) is intriguing. Notably its lack of charisma at all.

Instead they have "Social Attacks" (Actions really):
- Befriend: Will vs. Will
- Deceive: Intellect vs. Intellect
- Intimidate: Will (or Strength) vs. Will
- Persuade: Will vs. Will
- Taunt: Intellect vs. Will

Perception & Power are tied to Intellect

Insanity is tied to Will, but Trinitas doesn't use a Sanity system so eh.

Health & Defense seem to be their own thing.

