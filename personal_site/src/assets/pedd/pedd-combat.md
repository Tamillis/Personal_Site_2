## Combat 5.P
The goal is to make combat more consistently dangerous and snappier. Low level combat was too dangerous but quickly combat became trivial, with characters that were health sponges that you end up playing whack-a-mole with. This lead to the various minor tweaks below. 

And I wanted to erase the issue of players switching off when its not their turn, which lead to the "One Action All At Once" system (see [below](#one-action-all-at-once)).

### Flat Maths
If 5e made the math linear from quadratic 3.Xe, PEDD seeks to make the math flat, making it easier to predict and interpret, and also aiding with the level-less system. It also has the added benefit of making something that was dangerous, always dangerous. Flat Maths means nothing "falls off".

To aid in the caluclation of the Maths, the following assumptions are kept to:
- "*peasants*" face an average DC of 10, act at +0/+3 (unskilled/skilled, unskilled being the norm), have 10 Defence and have 8-12 Health. 
- "*adventurers*" face an average DC of 15, act at +2/+5 (unskilled/skilled, skilled being the norm), have 15 Defence, and have 20-30 Health.
- "*heroes*" face an average DC of 20, act at +4/+8 (unskilled/skilled, nearly always skilled), have 20 Defence, and have 30-50 Health.

As such, all damage sources need to be re-calibrated; various high-level spells and large monsters are brought down (typically by simply reducing the multiples of dice to a single dice of the corresponding size), making the face-value of such abilities easier for newer players to read. ("Oh my go, a D12 of damage!?" Vs the relatively opaque 3d10 damage of a giant). Two sword strikes, a fireball, or a headshot (e.g. a critical) will drop most to 0 Health.

### Health
Health starts higher than HP that it replaces, and purposefuly progressely in smaller steps, avoiding the health sponge issue of later level 5e. Due to only being increased when being purposefully taken as a Power, it is naturally restrained and reserved for those that invest in it, those ineffible heroes who seem to be able to take punch after punch where others would fall to the first blow.

### Recovery
There are a few changes to recovery.

#### Short and Long Rests, Sleep and Downtime
Short Rests and Long Rests are mostly unchanged, with the caveat that explicitely, yes, a Long Rest counts as a Short Rest. For this reason all Powers that key off of "A Short or Long Rest" now simply state "Short Rest". 

**Short Rests** are 1 hour periods of light activity or rest.

**Long Rests** are 8 hour periods of light activity or rest.

Every Character must, in addition, **Sleep** for at least 6 hours every 24 hour period, unless some Power or racial feature says otherwise (such as Elves, who cannot sleep). Failure to do so means you gain a point of Exhaustion. Sleeping counts as Resting, though not all Rest needs to be sleep; say if you were keeping watch.

**Downtime** - a third level of resting exists, Downtime, which is a 2 day+ period of non-adventuring activity. As Short Rests are part of Long Rests, Long Rests are part of Downtime, though many other activities can be gotten up to during Downtime. Just as in the base game, feel free to pursue professions, craft, carouse, or any other Downtime Activity.

#### Recovering Health
Hit Dice are also an older mechanic that is mostly vestigial. It too is removed. Instead, when Resting (Short or Long), you recover your Race's Baseline Health as a flat amount to your current Health, no more or no less.

Once you have regained Health from Short Rests twice, you cannot regain Health from a third Short Rest until you have completed a Long Rest. Meaning, per day, you can at maximum regain 3 × your Race's Baseline Health.

If you seek medical attention or healing spells, however, you may yet recover a lot more Health in a day, but this is fine since it is an investment of other resources.

#### Wounds
Entering the Dying state is now inheritantly dangerous. When you enter the Dying state you gain the new condition, "Wounded X":

**Wounded X** - When your Health is reduced to 0 and you don't already have the Wounded condition, you go Unconscious and you gain the Wounded 1 condition. Each time you go Unconscious from your Health dropping to 0, your Wounded condition increases by 1. 

When you make Death Saves, the DC is not 10, it is your Wounded condition's rank × 5. So at Wounded I, Death Saves are made against a DC of 5, at Wounded II a DC of 10, Wounded III at DC 15 etc.

The Wounded X condition loses one rank per Long Rest, and one rank per successful Medicine check made against a DC of the Wounded condition rank × 5 (the same like a Death Save). This Medicine check can be made once per day on a character, regardless of success or failure.

The more you're knocked down, the more likely you are to stay down, forever.

### Defence
To make characters easier to strike, meaning less spongey, and also to make combat more proactive and engaging; the Defence Stat replaces AC and is more flexible than a flat value, being made of three parts: 
- a Base Defence value of 8 for Medium characters, 10 for Small characters and 6 for Large characters. Should it be relevant, Huge characters have a base defence of 2 and Tiny a base defence of 14.
- an Armour value determined by worn Equipment
- an Evasion value, your Reflexes to a minimum of 0 (which can be limited by worn Equipment).

Powers can affect all three categories.
  
Instead Defence is calculated when required from these three parts, depending on what parts are in play. This gives us three kinds of Defence;
- **Defence** - Defence with both Armour and Evasion.
- **Unarmoured Defence** - Defence without Armour, armour limits on Evasion are still applied. A few effects target Unarmoured Defence.
- **Stationary Defence** - Defence without the benefit of Evasion, often called "Touch AC" in other systems. Some effects target Stationary Defence, and surprised or unmoving targets only get their Stationary Defence.

Remember that the Armour value also changes during play as you don and doff Equipment, and especially based on whether you Block with your Shield or not!

#### Natural Armour
Many creatures have Natural Armour, and so might you through strange Powers. Natural Armour grants an armour value, cannot be doffed and is always 'light', i.e. never limits Evasion. As per usual with armour, it does not stack, so to benefit from greater armour values, one must wear armour with a greater value than your natural armour.

#### Weapons and Armour
Weapons are a well known weakpoint of 5e and have been addressed many times. In fact, I'm more than happy to continue to use the homebrew I've long pinned to my own games; Weapon's Revised. PEDD uses it too. https://www.gmbinder.com/share/-NF9U-94H07DIQEtDu3-

Armour is changed to the following:
| Name | Cost | Armour | Property |
| --- | --- | --- | --- |
| Padded | 5gp | 1 | Light, Loud | 
| Leather | 10gp | 1 | Light | 
| Studded Leather | 45gp | 2 | Light | 
| **Medium Armour** |
| Hide | 10gp | 2 | Medium |
| Chain shirt | 50gp | 3 | Medium |
| Scale mail | 50gp | 4 | Medium, Loud |
| Breastplate | 400gp | 4 | Medium |
| Half plate | 750gp | 5 | Medium, Loud |
| **Heavy Armour** |
| Ring mail | 30gp | 4 | Heavy, Loud |
| Chain mail | 75gp | 6 | Heavy, Loud |
| Splint | 200gp | 7 | Heavy, Loud |
| Plate mail | 1,500gp | 8 | Heavy, Loud |
| **Auxilliary** |
| Lobster Pot | 15gp | +1 | Medium, Helmet |
| Great Helm | 15gp | +2 | Blinkered, Heavy, Helmet |
| Buckler | 5gp | +1 | Light, Shield |
| Shield | 10gp | +2 | Medium, Shield |
| Tower Shield | 75gp | +3 | Heavy, Loud, Shield |

**Light** - no limit on Evasion

**Medium** - your Evasion cannot be greater than 2.

**Heavy** - you cannot use Evasion in calculations of Defence.

**Loud** - you have Disadvantage on Stealth checks.

**Helmet** - worn on the head, you can only wear one helmet at a time

**Blinkered** - you have Disadvantage on Perception checks

**Shield** - equipped in the hand, you must use a Quick Action to Block to gain the bonus to Armour

#### Cover
Cover is unchanged from the base game, but worth re-iterating here. Cover is a bonus to your Defence, a +2 for 'Half Cover' and a +5 for 'Three Quarters Cover'. This is independent of Armour and Evasion, so consider it part of your Base Defence. Additionally, don't forget that these bonuses apply to Dexterity Saves as well! 

### One Action All At Once
A radical change I've experimented a little with is to basic combat where, simply, all characters in a **Round** of combat have one **Action** (and a Bonus Action), and everyone "acts" at once, no initiative. No taking "Turns".

How on Earth does that work? You might be thinking.

The GM declares the intentions of most enemies in the scene at the start of a Round, just as their movements would give away what they're about to do. Then all players decide among themselves what they're going to do that Round. When everyone is happy with their Actions, you "resolve" the round in whatever order works.

Only powerful or well-trained enemies will be capable of **Hidden Actions**, where their intentions are not stated by the GM but kept secret until after players commit to their own Actions, but player characters can always attempt to **Discern** enemy moves anyway (see [Additional Actions](#-Additional-Actions)).

**Initiative Contest** - For any situations where the order of actions matters, the two characters involved roll off with their Initiative, the secondary statistic that starts as your Perception and Dexterity, to see who can get the higher value. If it makes sense to resolve such conflicts of interest using appropriate skill checks rather than Initiative (i.e. Athletics), then do so. For "slow" enemies / mooks the DM will just let the players go first, so-called "player's advantage".

Most Actions, however, can be resolved simultaneously. Attacks for example; two people just try to hit each other, damage each other, and collapse wounded at the same time if that is what happens.

Since everyone gets only one Action, the old action / bonus-action / movement economy of 5e is radically simplified. Movement is simply another Action, making the "Dash" action and the "Movement Action" synonymous. Bonus Actions are mostly unchanged but are best thought of as 'concurrent actions', happening at the same time and therefore not significantly interrupting the character's main action. Reactions, interestingly, disappear. 

**Converting Reactions** - Any "Reactions" are considered "Actions". As Turns are simultaneous their triggers don't matter. If anything, the "triggers" are natural consequences of play. "Oh, the zombie is attempting to bite my face? I block!"

#### Engagement
To help with handling fights with little to no initiative and create a natural ebb-and-flow to combat, combatants are "paired off" in **Engagements**. These are the momentary pairs or small groups that naturally form in the middle of any chaotic fight, and allows us as the players to "zoom in" on little microcosms of fights with the camera, as it were, focusing on resolving pairing after pairing.

Engagements are resolved effectively simultaneously and the order of Engagements doesn’t matter, as with only 1 Action per turn melees rarely effect each other.

All combat is resolved in two simple steps:

1. **Determine Engagements** - where combatents, according to their ["Zone of Engagement"](#zone-of-engagement), “pair off”. “Pulling” and “turning”, if in conflict, are an Initiative Contest. Any who intend to Move do, Engaging as necessary.
2. **Resolve Engagements** - resolving pairs/groups in a sensible/cinematic sequence. Melee conflicts are easily resolved. Ranged attacks naturally involve unpaired individuals; resolve simultaneously with everyone else. Resolve conflicts of interest with an Initiative Contest. For example; "I try to grab the bag of gold before him", "OK, you and the white dragon need to make an Initiative Contest."

#### Zone of Engagement
The rules of pairing off, pulling and turning. 

How do you avoid a long conga-line chain of awkwardly connected characters fighting each other? "Pairing off". Sometimes if you want to attack Mr A, even if they're attacking Mr B, because Mr C is attacking you and is otherwise unengaged, you have no choice but to "**Turn**" and "**Pair Off**" with them. 

A character can only attempt to engage one character at a time. You can only melee attack someone you’re engaged with. Conga-lines break as if you, who are engaging someone who is engaging someone else, are engaged by a fourth, you must “turn” and engage your attacker, with the attacker **“Pulling”**. I.e., you cannot be "pulled" if you are engaged with someone who is engaged with you.

Additionally, a character can only be engaged by a maximum number of characters according to their size. Sometimes someone is surrounded by attackers, and even if you wanted to join in on the bullying, you're crowded out. The maximum number of opponents a character of a given size can have is:
- tiny/small - 1
- medium - 2
- large - 4
- gargantuan - 8

**Flanking** - is changed. You are "Flanking" when you are the one in an Engagement who the foe isn’t Engaging. You cannot flank a creature 2 or more sizes larger than you.

#### Additional Actions
Also, to make martial combat spicier a variety of generally available tactical basic combat actions are added; 
- **Charge** - when you use your Action to Move half your Speed or more, and you turn no greater than 90 degrees, at the end of the Move you can make 1 Weapon Attack at Advantage as a Bonus Action.
- **Run and Gun** - when you use your Action to Move, you can make 1 Ranged Weapon Attack as a Bonus Action at Disadvantage.
- **Dodge** - as an action, you make a Reflex Saving Throw and if the result is higher than your Defence, it replaces your Defence value for the rest of the round
- **Block** - as a Bonus Action, you raise your weapon or shield to gain the item's block value as Armour. This prevents you using that item as a weapon to attack. The Armour bonus lasts for the rest of the round.
- **Parry** - if your weapon has the Parry Property, you make an attack action against an enemy who is making a melee attack against you. The roll is your Defense for the rest of this round, and also functions as a normal attack action. Resolve the enemy's attack against your new Defence, if its higher or even lower.
- **Disengage** - as a Bonus Action, move 5ft without triggering Attacks of Opportunity. (Replaces 5e action "Disengage")
- **Stand** - a Bonus Action to go from Prone to Standing.
- **Go to cover / Go prone** - as a Bonus Action make yourself Prone, or enter adjacent cover. The Prone condition or being in cover uses Stationary Defence. As before Prone makes being shot at occur at disadvantage, and cover is +2/+5 to Defence for half / ¾ cover.
- **Attack of Opportunity** - as a Bonus Action to an enemy you're engaged with moving away from you without Disengaging from you, you can make an attack action on them, after which they have moved away and are no longer engaged with you for that Round.
- **Discern** - as an Action, you can make a Perception check against one enemy whose has a Hidden Action. If successful (the GM will decide the DC), their Action is no longer hidden and everyone in the combat can know.
- **Disarm** - as an Action against an enemy in your Reach holding a weapon, you can make a contested Dexterity check against the enemy's Weapon Attack Roll. If you beat them, you rip the weapon from their grasp and throw it 30ft in a direction of your choice (this does not count as a thrown weapon attack), or equip it an empty hand of yours.
