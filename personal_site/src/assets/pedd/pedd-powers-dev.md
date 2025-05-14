# Powers Development

Some thoughts and musings on the development of Powers, the core of the PEDD system.

## A Reflection on Powers
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

#### TODO
- mark all Stat-boosting & skill granting Powers with that data in ther json for the character creator to read out
- for resource powers, when selected they need to flag that the associated powers have a cost of 1
- many powers can be taken more than once. Make this possible.
- Sorcerous Origin and Occult Spellcasting is a special case and needs proper handling. Mana becomes a required pick but retro-actively.
- Powers that grant Skills at Expertise are marked with *, just Skill proficiency (no mark) or Skill proficiency or Expertise if already earned with ^
- Skill/Stat increase choices need to be handled. Currently set as either using the "Any" keyword or an array of choices
- Powers that can be taken multiple times that scale their prerequisites, the scaling needs to be machine readable in some way. Starting with RANK as a keyword (i.e. Dexterity +RANK).

Skills are set on power by skill attribute which leads to an object of {core, knowledge, martial} mirroring how the pedd-skill object works like:

```json
"skill": {
    "core":[["Arcana*", "History*", "Nature*", "Religion*"], ["Arcana*", "History*", "Nature*", "Religion*"]],
    "knowledge": "Language (Any)",
    "martial": ["Blade^", "Bows^", "Mauls^" "Rogue^"]
}
```

Actually the above needs to change to accomodate skill choices between arrays that cover more than one skill category

Also there are special names for "Any Martial", "Any", and "Current^" which means upgrade any Current Skill from Proficiency to Expertise

- SkillName^ skill Proficiency or upgrade to Expertise if already earned
- SkillName* skill at Expertise

For Stats:
- stat-change: { stat: val etc.} - note that stat can be the statistics or the secondaries like speed
- stat-max: {stat: val etc.}

Prerequisite groupings:
- {Stat name} {value}
- {Power name}
- "Once every Nth Role Power"
- "After N Role Powers"
- {Name} Skill / {Name} Expertise
- {Name} Cantrip / {Name} Spell
- {Tag} Tag
- One of (the above / separated / by / forward-slashes)

### Simulation
So begins the idea of adding everything needed to powers to fully simulate them in a virtual tabletop.

As I make my way through the Powers I'll make a note of the sections here and my thoughts for there use on simulation.

```json "actions": ["array", "of", "action", "names"] ``` will give a list of actions a character can do on their turn (in addition to base)
```json "bonus-actions": ["array", "of", "action", "names"] ``` as above, but for bonus actions. includes if actions are now bonus actions
```json "cool-down": { "short" : 3 } ``` an object with different prop-values for different periods and numbers of times of use per period. Probs just a very high value for "infinite" or negative and check on val == 0

or, you know, I'm just making a tonne of work for myself for basically no reason.