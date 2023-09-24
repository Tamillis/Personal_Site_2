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
- **Full Defence** - Defence with both Armour and Evasion. Often shortened to just 'Defence'
- **Unarmoured Defence** - Defence without Armour, armour limits on Evasion are still applied. A few effects target Unarmoured Defence.
- **Stationary Defence** - Defence without the benefit of Evasion, often called "touch AC" in other systems. Some effects target Stationary Defence, and surprised targets only get their Stationary Defence.

Remember that the Armour value also changes during play as you don and doff Equipment, and especially based on whether you Raise your Shield or not!

### One Action All At Once
A radical change I've experimented a little with is to basic combat where, simply, all characters in a **Round** of combat have one action (and a Bonus Action, if they have any), and everyone "acts" at once, no initiative. No taking "Turns".

How on Earth does that work? You might be thinking.

The GM declares the intentions of most enemies in the scene, just as their movements would give away what they're about to do. Then all players decide among themselves what they're going to do that Round. When everyone is happy with their actions, you "resolve" the round in whatever order works.

Only powerful or well-trained enemies will be capable of **Hidden Actions** where their intentions are not stated by the GM but kept secret until after players commit to their own actions, but player characters can always attempt to **Discern** their moves anyway (see [Additional Actions](#-Additional-Actions)).

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
- **Discern** - as an Action, you can make a Perception check against the enemy who's action has not been revealed. If successful (the GM will decide the difficulty), their action is no longer hidden and everyone in the party can know.
