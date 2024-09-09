## Combat
PEDD significantly changes how combat works both at the character level, through [Combat Statistics](#combat-statistics) (see below), and at the game level in the following rules of New Combat.

The goals were to make combat:
 1. More consistently dangerous
 2. Mre tactical
 3. (And the seemingly incompatible with the above) snappier

The first point is a combination of the fact that low level combat was too dangerous but higher level combat quickly became trivially easy to survive and very slow to play through. Characters became health sponges that you end up playing whack-a-mole with, and monsters much the same. The fact that interesting combat relied on DM's to employ various twists and challenges on top of typical combat rules to make it engaging says more about the base combat system than being critical of DM's who didn't go that far.

Getting rid of HP scaling (starting higher 'Health' but not going up unless explicitely empowered) fixes the health sponge issue, and combined with lower average Defence and the Defence Stat rework makes combat more consistently dangerous (as does the general trend of [Flat Maths](/pedd#flat-maths)).

The second point of tactical choice is improved by bringing more possible [Actions](#combat-actions) to the table, remaking [Weapons](#weapons) and [Armour](#armour) with expanded and active [Weapon Properties](#weapon-properties), and lastly by folding Battle Master Manoeuvers into basic combat actions with the experimental [Focus](#focus) system.

Snappiness was a major motivator for this rewrite of combat. I wanted to erase the issue of players switching off when its not their turn during combat that I frequently observed, no matter how different and engaging I tried to make combat. So I got rid of turns with the [One Action All At Once](#one-action-all-at-once) system. This is a much more engaging system as everyone is playing together and at once, getting rid of the slow round-the-robin of turn based combat. Everyone only having one Action also means each round is resolved much more quickly.

## New Combat

### One Action All At Once
A radical change to basic combat: where, simply, all characters in a **Round** of combat have one **Action**, and everyone acts at once, no initiative. No taking "turns".

How on Earth does that work? You might be thinking.

For starters, it is a bit of a misnomer. All characters still have access to Bonus Actions, from various Powers and Spells, in addition to their Action. Movement also does not technically occur at the same time as the other Actions, as it is resolved last (see below).

However, the main thrust of the system works like this. The GM declares the intentions of most enemies in the scene at the start of a Round, just as their movements would give away what they're about to do. Then all players decide among themselves what they're going to do that Round. When everyone is happy with their Actions, you "resolve" the round in whatever order works. Only in the edge case when the order of actions matters does Initiative need to be determined, using an [Initiative Contest](#initiative-contest).

Often, some players may still be thinking while others already know what they want to do. Resolve the actions of the decided players and their engagements (see Engagement below), and you'll often find the remaining players now know what to do.

Only powerful or well-trained enemies will be capable of **Hidden Actions**, where their intentions are not stated by the GM but kept secret until after players commit to their own Actions, but player characters can always attempt to **Discern** enemy moves anyway (see [Additional Actions](#additional-actions)).

Most Actions, however, can be resolved simultaneously. Attacks for example; two people just try to hit each other, damage each other, and collapse wounded at the same time if that is what happens.

Since everyone gets only one Action, the old action / bonus-action / movement economy of 5e collapses. Movement is simply another Action, making the "Dash" action and the "Movement Action" synonymous. Bonus Actions are mostly unchanged but are best thought of as 'concurrent actions', happening at the same time and therefore not significantly interrupting the character's main action. Reactions, interestingly, disappear.

#### Converting Reactions
Any "Reactions" are considered "Actions". As Turns are simultaneous their triggers don't matter. If anything, the "triggers" are natural consequences of play. "Oh, the zombie is attempting to bite my face? I block!"

#### Initiative Contest
For any situations where the order of actions matters, the two (or more) characters involved roll off with the most appropriate skill, to see who can get the higher value. For "slow" enemies / mooks the DM will just let the players go first, so-called "player's advantage". For example; "I try to grab the bag of gold before him", "OK, you and the white dragon need to make an Dexterity Check."

Characters can spend 1 Focus to add a d6 to their Initiative roll. See [Focus](#focus) below.

### Combat Actions
So what can that one Action can do? Quite a lot more than 5e. Every character can perform Core Combat Actions and a variety of Tactical Actions. Note that many are keyed to "an Attack or Action", so if you have more than one attack, you can potentially take more than one "action" on your turn.

<a id="toggle-actions">Click here to show.</a>

<section id="actions-section" class="hidden">

#### Core Combat Actions
- **Attack** - as an Action, you make your weapon or spell attack/s against the target(s). One attack Action may involve a number of Attacks on a number of targets depending on the weapon, spell or some Power such as Extra Attack. As in 5e, this is the distinction between the "Attack Action" and specific "Attacks", as well as "Weapon Attacks" and "Spell Attacks". Unless otherwise stated, full attack action attacks are with lethal intent (see Non-Lethal Strike).
- **Attack of Opportunity** - as a Bonus Action to an enemy you're Engaged with moving away from you without Disengaging, you can make an attack action on them, after which they have moved away and are no longer Engaged with you for that Round.
- **Block** - as a Bonus Action, you raise your shield, or weapon if it has the Block property, to gain the item's Armour bonus. This prevents you using that item as a weapon to attack. The Armour bonus lasts for the rest of the Round.
- **Discern** - as an Attack or Action, you can make a Perception check against one enemy whose has a Hidden Action. If successful (the GM will decide the DC), their Action is no longer hidden and everyone in the combat can know.
- **Disengage** - when you are in an Engagement, as a Bonus Action you can move 5ft without triggering Attacks of Opportunity and break the Engagement. You cannot start a new Engagement with this movement.
- **Dodge** - as an Action, you make a Reflex Saving Throw and the result (or your Stationary Defence, if that is higher) replaces your Defence value for the rest of the Round.
- **Go to Cover / Go Prone** - as a Bonus Action you make yourself Prone, or enter adjacent cover. The Prone condition or being in cover uses Stationary Defence. Prone makes being shot at occur at Disadvantage, and cover is +2/+5 to Defence for half / ¾ cover respectively (see [Conditions](#conditions)).
- **Move** - move your Speed along a path of your choice towards a target. See [Move Action](#move-action) for details.
- **Stand** - a Bonus Action to go from Prone to Standing.

#### Tactical Actions
- **Aim** - as an Attack or Action, you gain Advantage on your next weapon attack which must be a ranged or thrown weapon. You can choose to spend 1 Focus, and Aim as a Bonus Action.
- **Bait and Switch** - as an Attack or Action, when you're within 5ft of an Engaged ally character, you can spend 1 Focus to switch places with that character, provided you spend at least 5 ft of movement. This movement doesn't provoke an Attack of Opportunity. You are now Engaged with that ally's enemy, and any attack they were about to make on your ally is directed at yourself instead.
- **Call the Shot** - As an Action, direct one of your allys to strike. Choose an ally who can see or hear you. That character can immediately make one weapon attack. You can choose to spend 1 Focus, and Call the Shot as a Bonus Action instead of an Action.
- **Charge** - when you use your Action to Move, moving at least 15ft or half your speed (whichever is lower), at the end of the Move you can make 1 Weapon Attack at Advantage as a Bonus Action.
- **Coup de Grace** - when you make a Weapon Attack against an Incapacitated target, don't roll for Damage, instead take each dice roll (if any) to be the maximum result.
- **Disarm** - as an Attack or Action against an enemy in your Reach holding a weapon or shield, you make an attack roll against the enemy's passive Reflexes. If you succeed, you rip the weapon from their grasp and throw it 10ft in a direction of your choice (this does not count as a thrown weapon attack), to the ground at your feet, or equip it an empty hand of yours.
- **Distract** - as a Bonus Action when you hit a character with a weapon attack, you can distract them, giving your allies an opening. The next Attack roll against the target this Round has Advantage.
- **Evasive Footwork** - when you take the Move action, you can spend 1 Focus and roll a d6. You add the number rolled to your Defence until you stop moving.
- **Feint** - as a Bonus Action, you can choose one character within 5ft of you as your target to Feint against. You then have Advantage on your next Attack roll against that character this Round.
- **Focussed Strike** - when you make a weapon attack roll against a character, you can spend 1 Focus to add d6 to the roll.
- **Goad** - as an Action, when a target Character that can see or hear you has an Intelligence Stat, you can attempt to goad the target into attacking you. You must make a Charisma check vs their passive Willpower. On a success, the target has Disadvantage on all attack rolls against targets other than you until the end of the Round.
- **Grapple** - as an Attack or Action you attempt to Restrain an character. You make a Strength check against their passive Fortitude. If you succeed both the character is Restrained. On subsequent turns you can maintain the grapple or end the grapple (no additional action or roll needed), and you can only use your Move action, if you do, to Move yourself and the enemy as if going through Difficult Terrain (typically, at half Speed). The grappled character can use their Action to attempt to escape the Grapple, making a Strength or Dexterity check (their choice) vs your passive Fortitude, ending the grapple on a success.
- **Hound** - When you hit a character that is 2 sizes larger than you or less with a weapon attack, you can forego damage to move the target 10ft in a direction of your choice without provoking attacks of opportunity.
- **Lunge** - When you make a melee weapon attack, you can attack at Disadvantage but increase your Reach for that attack by 5ft. You can spend 1 Focus to ignore the Disadvantage.
- **Menace** - as an Action, you can attempt to intimidate a character that can see or hear you. You must make a Charisma check vs their passive Willpower. On a success, the target is Frightened of you until the end of the Round.
- **Non-lethal Strike** (a.k.a. knockout strike) - you make an Attack Action with the intention to knock unconscious rather than kill. Don't roll for Damage, instead take each dice roll (if any) to have been a 1.
- **Parry** - as an Attack or Action, if your weapon has the Parry Property and when another character damages you with a melee attack, you can reduce the damage by your Dexterity and proficiency Bonus with the weapon.
- **Power Strike** - when you hit a character with a weapon attack, you can spend 1 Focus to add 1d6 to the damage roll.
- **Quick Toss** - as a Bonus Action, you make a Ranged Weapon Attack with a weapon that has the thrown property at Disadvantage. You can draw the weapon as part of making this attack. You can spend 1 Focus to ignore the Disadvantage.
- **Rally** - as a Bonus Action you can bolster the resolve of one of your allies. When you do so, choose an ally who can see or hear you. They gain temporary Health equal to your Charisma (to a minimum of 1). When you have used Rally on an ally, you cannot use Rally on the same ally until you both finish a Long Rest.
- **Riposte** - if your weapon has the Parry Property, when an enemy makes a melee attack against you, you can choose to make a Weapon Attack against them, and use your weapon attack roll as your Defense for the enemy's attack resolution (even if the result is lower than your normal Defence). Resolve the enemy's attack against your new Defence. If this causes them to fail, carry over your result as if you had just made a weapon attack against them. If it is a success, you damage them as per a normal weapon attack.
- **Run and Gun** - when you use your Action to Move, you can make 1 Ranged Weapon Attack as a Bonus Action at Disadvantage.
- **Shove** - as an Attack or Action you attempt to make an Enemy Prone or move 10ft in a direction of your choice. You make a Strength check against their passive Fortitude.

</section>

### Move Action
The Move Action sees a character move a distance in feet equal to their Speed towards a stated target. This can be in a straight line or other path of their choice, so long as the path is traversible. Like all Actions, they are declared at the same time as everyone else, however they're unique in that they're only resolved at the end, after all other Actions and Engagements (see Engagement).

Difficult terrain doubles the Speed required, with swimming / climbing requiring quadruple the speed, and impassible terrain must be circumnavigated.

When more than one character takes the Move action with respect to other characters' positions, how to resolve movement can get quite confusing quite quickly. As such, when declaring a Move, declare also the 'target' of the movement. When everone does this generally speaking a natural conclusion where all characters reach or approach their targets becomes clear. 

For example, if we have Mr A, Mr B and Mr C in the awkward face off of A moving to B, B to C and C to A, where does everyone end up? Bunched in the middle: because when viewed through the lense of their targets, the natural result is that they all start moving towards each other (this way, A gets to B, who gets to C, who gets to A). 

I'm a programmer so you don't have to believe me, just watch:

<script src="pedd_movement_1.js"></script>
<div id="movement-1-canvas"></div>

Another situation may be: A is moving to B, who is moving to C, who is running away from A (or B really). In this case, they all move linearly in the direction of C's flight (which is away from A (or B)). 

If it is *not* clear, make an Initiative Contest check to see who goes first, and then resolve from there.

#### Engagement
To help with handling fights with little to no initiative and create a natural ebb-and-flow to combat, combatants are "paired off" in Engagements. These are the momentary pairs or small groups that naturally form in the middle of any chaotic fight, and allows us as the players to "zoom in" on little microcosms of fights with the camera, as it were, focusing on resolving pairing after pairing. This can help with indicisive players where ready pairings can resolve first.

Engagements are resolved effectively simultaneously and the order of Engagements doesn’t matter, as with only 1 Action per turn melees rarely effect each other.

All combat is resolved in two simple steps*:

1. **Determine Engagements** - (if this step is necessary) where combatents pair off with ["Zone of Engagement"](#zone-of-engagement). This may seem complex at the outset, but these rules mostly only exist to resolve edge-cases and opinions of conflict. 9 times out of 10 the GM simply needs to ask "OK, so who's fighting the Ogre wacking Gary and who's shooting back at the goblins?".
2. **Resolve Engagements** - resolving pairs/groups in a sensible/cinematic sequence. Melee conflicts are easily resolved in their engagements. Ranged attacks naturally involve unpaired individuals but often can be smoothly resolved at the start or end of a Round. Resolve conflicts of interest with an Initiative Contest.

#### Zone of Engagement
The rules of pairing off, pulling and turning. 

How do you avoid a long conga-line chain of awkwardly connected characters fighting each other? "Pairing off". Sometimes if you want to attack Mr A, even if they're attacking Mr B, because Mr C is attacking you and is otherwise unengaged, you have no choice but to "**Turn**" from your initial intended target, who is said to "**Pull**" you, and "**Pair Off**" with them. I.e., you cannot be "pulled" if you are engaged with someone who is engaged with you.

Intent:

> Mr C -> You -> Mr A -> Mr B -> ...

Result:

> Mr C <-> You | Mr A <-> Mr B ...

“Pulling” and “turning”, if in conflict, are an Initiative Contest.

Additionally, a character can only be engaged by a maximum number of characters according to their relative size. Sometimes someone is surrounded by attackers, and even if you wanted to join in on the bullying, you're crowded out. The maximum number of opponents a character of a given relative size can have is:
- 2+ sizes smaller - 1
- smaller - 2
- same - 4
- larger - 8
- 2+ sizes larger - any

## Combat Statistics

### Focus
Focus is both a replacement of Battle Master's unnamed superiority dice pool and an exclusionary partner of the "Concentration" condition. Characters start with their Willpower (to a minimum of 1) Focus. Each point of Focus can be expended on certain Tactical Actions. You regain all used Focus on a Short Rest. 

Each time you are Concentrating on a spell, you use cannot Focus.

### Health
Health starts higher than the HP that it replaces, with the name also shaking out the video game connetations and helping players who don't come from a video-game background to engage with the Stat. It purposefuly does not progress unless specifically empowered. Health is naturally limited and only those who invest in it become the ineffible heroes who seem to be able to take punch after punch where others would fall to the first blow no matter how many fights they'd been in.

### Recovery
On the topic of health, recovery of that Health has also changed. No matter what the sheer iverisimilitude of full recoveries every Long Rest (which inevitably meant a few z's were enough to fix broken bones and burnt flesh) always took me out of a game. So I changed it.

#### Recovering Health, removing Hit Dice
Hit Dice are an older mechanic that is mostly vestigial. It, too, is removed. Instead, when Resting (Short or Long), you recover your Race's Baseline Health as a flat amount to your current Health, no more or no less.

Once you have regained Health from Short Rests twice, you cannot regain Health from a third Short Rest until you have completed a Long Rest. Meaning, per day, you can at maximum regain 3 × your Race's Baseline Health, unless your ability to recover is further empowered of course.

If you seek professional medical attention or magical healing, you may yet recover a lot more Health in a day.

Few will be capable of fully recoving in a single day, not at least without a significant expenditure of resources.

#### Short and Long Rests, Sleep and Downtime
Appart from Health recovery, Short Rests and Long Rests are mostly unchanged, with the caveat that explicitely, yes, a Long Rest counts as a Short Rest. For this reason all Powers that key off of "A Short or Long Rest" now simply state "Short Rest". Simplifying and unifying that odd system. 

Additionally the meaning of a rest is clarified:
- **Short Rests** are 1 hour periods of light activity or rest.
- **Long Rests** are 8 hour periods of light activity or rest.
- **Light Activity** includes reading, talking, eating, or standing watch. If a Check is needed, it is not Light Activity, including crafting or other professional activity.

Every Character must, in addition, **Sleep** for at least 6 reasonably-continuous hours every 24 hour period, unless some Power or racial feature says otherwise (such as Elves, who cannot sleep). Failure to do so means you gain a point of Exhaustion. Sleeping counts as Resting, though not all Rest needs to be sleep; say if you were keeping watch.

**Downtime** - PEDD introduces a third level of resting, Downtime, which is a 2 day+ period of non-adventuring activity. As Short Rests are part of Long Rests, Long Rests are part of Downtime, though many other activities can be gotten up to during Downtime. Just as in the base game, feel free to pursue professions, craft, carouse, or any other Downtime Activity. After a Downtime, you regain all Health.

#### Dying and Wounds
When you reach 0 Health, you enter the "Dying" state, as in 5e. You collapse Unconscious, and cannot take Actions. Additionally, you gain a rank of the Wounded condition. This is another addressment of the wack-a-mole issue. Entering the Dying state is now cumulatively dangerous as when you enter the Dying state you gain a rank in the Wounded condition (Wounded I, initially), which affects one's chances with Death Saves, and has a chance to leave permanent marks.

**Wounded [Rank]** - When your Health is reduced to 0 and you don't already have the Wounded condition, you go Unconscious and you gain the Wounded 1 condition. Each time you go Unconscious from your Health dropping to 0, your Wounded condition increases by 1. Wounds are severe physical and mental damage that threatens your continued existence. The Wounded X condition loses one rank per Long Rest, and one rank per successful Medicine check made against a DC of the Wounded condition rank × 5 (the same like a Death Save). This Medicine check can be made once per day on a wounded character, regardless of success or failure.

The Dying condition is therefore updated:

**Dying** - now when you are Dying and you make Death Saves, the DC is not 10, it is your Wounded condition's rank × 5. So at Wounded I, Death Saves are made against a DC of 5, at Wounded II a DC of 10, Wounded III at DC 15 etc. Otherwise Dying is unchanged (3 saves to stabilise, 3 failed saves and death, coming conscious erases all death saves).

The more you're knocked down, the more likely you are to stay down, forever.

#### Wounds and Enemies
Enemy characters function just like player characters in that they have health, defence and can even suffer the Wounded condition, but with a simple twist that changes what it is like to play against them.

Most smaller enemy characters die immediately (or are otherwise defeated) when they reach the Wounded I condition. I.e., they can take "one wound". But some don't. Some foes can take multiple Wounds, and may lose parts of themselves (such as a tail, layer of armour, claws, part of their construction...), and will act differently, have access (or greater access) to certain powers etc. 

Their Health also resets when they take a Wound, meaning each wound they can take is like an additional health bar. Such enemies, great monsters and infamous villains, have "Wounds" that you must burn through first, with every tier presenting a different kind of foe and challenge.

### Defence
The Defence Stat replaces AC, and is more flexible than a flat value, being made of three parts:
- a Base Defence value of 8 for Medium characters, see the Base Defence Table below.
- an Armour value determined by worn Equipment (see [Armour](./pedd/combat#armour))
- your Reflexes to a minimum of 0 (which can be limited by worn Equipment).

It is intented to be, on average, lower than AC, making combat more dangerous. However this is only passive defence, Actions such as Block, and Powers, play a more significant role in increasing Defence, making it more active and combat in general more engaging.

Defence is calculated as required as one of these three categories:
- **Defence** - Full Defence with both Armour and Reflexes.
- **Unarmoured Defence** - Defence without Armour, armour limits on Reflexes are still applied. A few effects target Unarmoured Defence.
- **Stationary Defence** - Defence without the benefit of Reflexes, often called "Touch AC" in other systems. Some effects target Stationary Defence, and surprised or unmoving targets only get their Stationary Defence. Any character whose Speed is 0, such as one suffering the Immobilised condition, uses its Stationary Defence.

Remember that the Armour value also changes during play as you don and doff Equipment, and especially based on whether you Block with your Shield or not! Armour Piercing strikes ignore some or all of your Armour as well, such as guns.

#### Base Defence Table
Smaller characters are harder to hit. Player characters can potentially be Small, Medium or Large as that is interesting, and Tiny and Huge are added incase size, through magic or other means, is altered during play.

| Size | Base Defence |
| --- | --- |
| Tiny | 14 |
| Small | 10 |
| Medium | 8 |
| Large | 6 |
| Huge | 2 |

### Weapons and Armour
Weapons are a well known weakpoint of 5e and have been addressed many times. In fact, I used to use, and continue to take heavy inspiration from, the homebrew; Weapon's Revised https://1drv.ms/b/s!Aq2B34oritBLmmrdNLmMeUrxi5kM

PEDD makes use of the following list of weapons, weapon attributes and armour.

More details about the guns and munitions, as they're a core part of my setting, can be found in my [Armouries of the Second Empire](/mewiki/Mitteland/ArmouriesOfTheSecondEmpire).

#### Weapons
Courtesy of Weapons Remastered, adapted and tweaked.

<a id="toggle-weapons">Click here to show</a>:
<section id="weapons-section" class="hidden"> 

Weapons with an *, like the Lance, have special properties described below the table.

Bludgeoning -> blg, Piercing -> prc, Slashing -> slash

| Name | Skill | Cost | Damage | Weight | Properties |
| --- | --- | --- | --- | --- | --- |
| **Simple Melee Weapons** |
| Cestus* | Body | 1gp | 1d4 blg | 0.5lbs | Light, Nonlethal |
| Club | Clubs & Axes | 1sp | 1d4 blg | 2lbs | Light, Nonlethal, Block |
| Dagger | Knives | 2gp | 1d4 prc / slash | 1lbs | Finesse, Finisher, Light, Nnlethal |
| Great Club | Clubs & Axes | 5sp | 2d4 blg | 10lbs | Heavy, Two-handed, Dazes, Knockback |
| Handaxe | Clubs & Axes / Thrown | 3gp | 1d6 slash | 2lbs | Light, Thrown (20/75) |
| Javelin | Spear / Thrown | 5sp | 1d6 prc | 2lbs | Thrown (30/120) |
| Light Hammer | Clubs & Axes, thrown | 2sp | 1d4 blg | 2lbs | Light, Dazes, Thrown (20/60) |
| Mace | Clubs & Axes | 5gp | 1d6 blg | 4lbs | Light Armour Piercing |
| Quarterstaff | Spear | 2sp | 1d6 blg | 4lbs | Nonlethal, Versatile (2d4), Block |
| Shiv* | Knives | 5cp | 1d4 prc | 0.5lbs | Light, Nonlethal |
| Short Spear | Spear | 1gp | 1d6 prc | 3lbs | Finisher, Nonlethal |
| Sickle | Knives | 1gp | 1d4 slash | 2lbs | Light, Bleeds |
| Spear Club (Goedenday) | Spear / Clubs & Axes | 5sp | 1d4 blg / prc | 3lbs | Finisher, Light Armour Piercing |
| Spear | Spear | 1gp | 1d8 prc | 4lbs | Reach, Two-Handed, Block |
| Winged Spear | Spear | 5gp | 1d6 prc | 5lbs | Versatile (1d8), Winged, Block |
| **Martial Melee Weapons** |
| Battleaxe | Battleaxes | 10gp | 1d8 slash | 4lbs | Bleeds, Sweeping, Versatile (1d10) |
| Esctoc | Blades | 20gp | 1d8 prc | 2lbs | Finesse, Parry, Lightly Armour Piercing |
| Falchion | Blades | 25gp | 1d8 slash | 2lbs | Bleeds, Finesse, Parry |
| Flail | Mauls | 10gp | 1d8 blg / prc | 2lbs | Ensnaring, Wind-up |
| Garotte Wire* | Exotic (Garrote Wire) | 5gp | 1d6 slash | 1/4lbs | Finesse, Light, Two-Handed |
| Glaive | Pole-arms | 20gp | 1d10 slash | 6lbs | Heavy, Reach, Sweeping, Two-Handed |
| Greataxe | Battleaxes | 30gp | 1d12 slash | 9lbs | Heavy, Finisher, Bleeds, Two-Handed |
| Greatsword | Heavy Blades | 50gp | 2d6 prc / slash | 7lbs | Heavy, Bleeds, Sweeping, Two-Handed |
| Halberd | Pole-arms | 20gp | 1d10 prc / slash | 7lbs | Heavy, Reach, Bleeds, Two-Handed |
| Lance* | Exotic (Lance) | 10gp | 1d12 prc | 6lbs | Reach, Dazes |
| Longsword | Blades | 15gp | 1d8 prc / slash | 3lbs | Parry, Bleeds, Versatile (1d10), Block |
| Lucerne Hammer | Pole-arms | 20gp | 1d10 blg / prc | 7lbs | Heavy, Reach, Lightly Armour Piercing, Two-Handed |
| Maul | Mauls | 10gp | 2d6 blg | 12lbs | Heavy, Reach, Dazes, Lightly Armour Piercing, Two-Handed, Knockback |
| Morningstar | Mauls | 15gp | 1d8 blg / prc | 4lbs | Dazes, Finisher |
| Parrying Dagger | Knives | 3gp | 1d4 prc | 1lb | Finesse, Finisher, Light, Parry, Prone Fighting, Block |
| Pike | Pole-arms | 5gp | 1d10 prc | 13lbs | Heavy, Reach, Two-Handed, Wind-Up |
| Pollaxe | Pole-arms | 35gp | 1d10 blg / prc / slash | 10lbs | Bleeds, Dazes, Two-Handed |
| Rapier | Blades | 25gp | 1d8 prc | 2lbs | Finesse, Parry, Finisher |
| Scimitar | Blades | 15gp | 1d6 slash | 3lbs | Light, Bleeds, Finesse, Parry |
| Shortsword | Blades | 10gp | 1d6 prc / slash | 2lbs | Light, Finesse, Finisher, Parry |
| Trident | Spears | 5gp | 2d4 prc | 4lbs | Finisher, Versatile (1d10), Winged, Block |
| War Pick | Mauls | 5gp | 1d8 prc | 2lbs | Finisher, Versatile (1d10), Lightly Armour Piercing |
| Warhammer | Mauls | 15gp | 1d8 blg | 3lbs | Finisher, Dazes, Lightly Armour Piercing, Versatile (1d10), Knockback |
| War Scythe (Guisarme) | Pole-arms | 5gp | 1d10 prc | 8lbs | Ensnaring, Heavy, Reach, Two-Handed |
| Whip* | Exotic (Whip) | 2gp | 1d4 slash | 3lbs | Ensnaring, Finesse, Reach |
| Winged Pike (Ranseur) | Pole-arms | 25gp | 1d10 prc / slash | 8lbs | Heavy, Reach, Winged |
| **Traditional Ranged Weapons** |
| Blowgun* | Exotic (Blowgun) | 5sp | 1 prc | 1lb | Ammunition (25/100), Loading |
| Dart | Thrown | 5cp | 1d4 prc | 1/4lbs | Finesse, Thrown (20/60) |
| Hand Crossbow | Crossbows | 75gp | 1d6 prc | 3lbs | Ammunition (30/120), Light, Loading, Prone-fighting |
| Heavy Crossbow | Crossbows | 50gp | 1d10 prc | 12lbs | Ammunition (100/300), Heavy, Loading, Bleeds, Lightly Armour Piercing, Two-Handed |
| Light Crossbow | Crossbows | 25gp | 1d8 prc | 5lbs | Ammunition (80/320), Loading, Two-Handed |
| Longbow | Bows | 75gp | 1d10 prc | 2lbs | Ammunition (200/600), Heavy, Bleeds, Two Handed |
| Net* | Exotic (Net) | 1gp | - | 3lbs | Thrown (15/30) |
| Recurve Bow | Bows | 50gp | 1d8 prc | 3lbs | Ammunition (150/600), Two-Handed |
| Shortbow | Bows | 15gp | 1d6 prc | 2lbs | Ammunition (100/150), Two-Handed |
| Sling | Slings | 1sp | 1d4 blg | 1/4lbs | Ammunition (30/120) |
| **Firearms** |
| *Longarms* |
| Arquebus | Firearms & Pistols | 20gp | 1d10 piercing | 9lbs | Ammunition (60/300), cartridge loading, light armour piercing, misfire, two-handed |
| Buckshot Gun | Firearms & Pistols | 40gp | 2d6 slashing | 9lbs | Ammunition (30/60), cartridge loading, scatter (1d6), two-handed |
| Carbine | Firearms & Pistols | 40gp | 1d10 piercing | 7lbs | Ammunition (40/150), cartridge loading, armour piercing |
| Musket | Firearms & Pistols | 50gp | 1d12 piercing | 12lbs | Ammunition (120/500), cartridge loading, armour piercing, heavy, two-handed |
| *Sidearms* |
| Pepperbox | Firearms & Pistols | 40gp | 1d8 piercing | 6lbs | Ammunition 6<sup>a</sup> (20/100), cartridge loading, light armour piercing |
| Pistol | Firearms & Pistols | 10gp | 1d8 piercing | 3lbs | Ammunition (20/120), cartridge loading, light armour piercing, misfire, light |
| Sawn-Off Gun | Firearms & Pistols | 30gp | 2d4 slashing | 6lps | Ammunition (20/40), cartridge loading, scatter (1d4) |
| *Munitions* |
| Demo-barrel | - | 50gp | 4d6 bludgeoning & 4d6 burning<sup>b</sup> | 75lbs | Knockback (+2 / 10ft per barrel*), Area (10ft radius per barrel*) *to a maximum of 60ft. |
| Flashbomb | Thrown | Blinds & Deafens until the end of the target’s next turn |	| 1lbs | Thrown (20/60), Area (10ft radius)<sup>d</sup> |
| Fire Lance | Exotic (Lance) | 35gp | 2d8 burning<sup>b</sup> | 11lbs | Ammunition (5/10), reach, heavy, two-handed, special<sup>c<sup> |
| Firebomb | Thrown | 10gp | 2d10 burning<sup>b</sup> | 2lbs | Thrown (20/60), Area (5ft radius)<sup>d</sup> |
| Grenade | Thrown | 5gp | 1d8 slashing, 1d8 burning<sup>b</sup> | 1lbs | Thrown (20/60), Knockdown (+2), Area (5ft radius)d |

a.	The X in Ammunition X refers to the number of times the weapon can be fired before needing to be reloaded. No value means one shot per reload.

b.	A flammable object hit by this ignites if it isn’t being worn or carried.

c.	The Fire Lance also has the properties of a lance, for normal use. The firing of a fire lance can only occur once, then must be reloaded outside of combat after 1 minute's work and appropriate materials.

d.	Grenades and Firebombs effect an area, as such instead of attack rolls effected creatures make a dexterity save vs a DC of 8 + the thrower’s dexterity modifier + the thrower’s proficiency bonus. On a successful save the target takes half damage from grenades and firebombs or does not suffer the effects of the flashbomb.

**Blowgun** - Ammunition for this weapon is made up of small, fine needles that are especially potent when paired with a poison coating. When applying poison to ammunition for this weapon (blowgun needles), it can cover 10 pieces of ammunition instead of the usual 3.

**Cestus** - The weapon is not held in the hand, instead being wrapped around the wrist, held between the fingers, or covering the knuckles. Wielding this weapon does not prevent you from grappling or shoving an enemy, using an item, or interacting with an object, but you cannot wield other weapons with that hand.

**Garotte Wire** - Garrote Wire can only be used on a character the same size or smaller than the user, when the user has advantage against that character. On a hit the target is automatically grappled. Until the grapple ends, the target cannot breath and begins to Suffocate, if they can, and Garotte Wire attacks against the target automatically hit.

**Lance** - You have disadvantage when you use a lance to attack a target within 5 feet of you. A lance requires two hands to wield when you aren't mounted.

**Net** - A character hit by a Net of its size or one larger is Restrained until it is freed. A Net has no effect on characters that are formless, or
creatures that are two sizes or more larger than it. A character can use an Action to make a DC 10 Strength check, freeing itself or another character within its reach from a Net on a success. Dealing 5 slashing damage to the net (Defence 10) destroys the Net and frees the character without harming it.

**Shiv** - Crude and simply made, a shiv is the weapon of the desparate. If you make an attack roll with this weapon and the dice result is 1, the Shiv breaks.

**Whip** - The whip functionally also has the benefits of the Winged property, without being Winged. 
</section>

#### Weapon Properties

<a id="toggle-weapon-properties">Click here to show:</a>

<section id="weapon-properties-section" class="hidden"> 

- **Ammunition (X/Y)** - You can use a weapon that has the Ammunition property to make a ranged attack only if you have Ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a weapon). Expended arrows, bolts and darts can be recovered, by taking a minute to search the battlefield, but guns that use paper cartridges cannot. X denotes the short range of the weapon, and Y the long range (attacks at Disadvantage).
- **Armour Piercing** & **Light Armour Piercing** – the weapon ignores some benefit of Armour to a target's Defence. The target's Armour is reduced, to a minimum of 0, by 2 for Light Armour Piercing and by 6 for Armour Piercing.
- **Block** - You can raise this weapon like a shield, using your Bonus Action to Block, gaining a bonus of 1 to Defence.
- **Ensnaring** - When you hit an attack with an ensnaring weapon, you may use your Bonus Action to attempt the Grapple action on the target or Shove them Prone, using your weapon attack modifier in place of Strength. If you grapple a target with an ensnaring weapon, the grapple is automatically ended if you make another attack roll with that weapon.
- **Finesse** - The weapon lends itself to dexterous combat due to features that make it more reliant on technique than brute force. When attacking with a finesse weapon, you use your choice of your
Strength or Dexterity for the attack and damage rolls. You must use the same modifier for both rolls.
- **Finisher** - Finisher weapons are well-suited to executing enemies that are at your mercy. When you make an attack against a Prone or Incapacitated character, you roll one additional damage die.
- **Heavy** - These weapons are larger and unwieldier than most, lending them unique advantages and challenges: 
  - Small characters make attacks with heavy weapons at Disadvantage.
  - A heavy weapon allows you to make an attack relying upon on raw strength instead of technique. When you attack with a heavy weapon that you're proficient in, you can forego adding your proficiency bonus to the attack roll. If the attack hits, you add that proficiency bonus to the damage roll instead. You must decide to do this before making the attack roll.
- **Light** - A light weapon is small and easy to handle. When you take the Attack action and attack with a light melee weapon that you’re holding in one hand, you can use a Bonus Action to attack with a different light melee weapon that you’re holding in the other hand. You don’t add your Stat to the damage of the bonus attack, unless that modifier is negative. 
- **Loading** & **Slow Loading** - due to the elaborate procedure of preparing the weapon for its next shot, it takes an Attack, Action or Bonus Action to reload, and a free hand. Slow Loading weapons take an Attack or Action to reload.
- **Nonlethal** - The weapon is designed to incapacitate or is otherwise capable of delivering a hit that does not kill the target. Non-lethal Strikes can be made with normal damage rolls.
- **Parry** - The weapon has some weapon catching or deflecting feature, allowing it to be used to take the Riposte or Parry Actions.
- **Prone Fighting** - When you are prone and make a melee attack with this weapon, you do not suffer Disadvantage for being prone.
- **Reach** - This weapon's extended length adds 5 ft to your Reach when you attack with it.
- **Bleeds** - critical hits with this weapon when doing Slashing damage inflict gaping wounds and profuse bleeding, inflicting additional slashing damage equal to your Bonus. Non-living character types are immune to this damage.
- **Dazes** - critical hits with this weapon when doing Bludgeoning or Piercing damage hit with a singularly boneshaking blow, dazing the target. The target's next attack roll is made with Disadvantage. 
- **Sweeping** - These weapons strike in broad, sweeping motions. When you make an attack with a sweeping weapon that deals slashing damage, you may use a Bonus Action to deal the weapon's damage die in damage against a second target within your reach that is adjacent to the first, provided that your attack roll would also hit that target.
- **Versatile** - This weapon can be used with one or two hands. A damage value in parentheses appears with the property–the damage when the weapon is used with two hands.
- **Wind-up** - The weapon can be used to spend time preparing an attack to be even more effective. On your turn you can use an attack or Bonus Action to swing up or set your weapon. On the next attack you make that Round with the weapon you can add an additional weapon die to that attack if it hits. A weapon can only add one such damage die in this way.
- **Winged** - These weapons have specially-shaped heads that halt the movement of their target toward the user and can also be used to catch shields and weapons. When you deal piercing damage against a character one size larger than you, or less, with a winged weapon, that character cannot move toward you that Round. Additionally can use the Disarm action with this weapon, using your Proficiency with the weapon's skill.
- **Cartridge Loading** – due to the elaborate procedure of preparing a muzzle loading gun for its next shot, it takes an attack or an action to reload firearms, and a free hand.
- **Knockdown (Str)** – effected characters have to pass a Fortitude check vs the value given, or the passive strength of the User, or be knocked prone.
- **Knockback (Str/X)** – effected characters have to pass a Fortitude check vs the value given or be thrown X ft and made prone. Additionally, they take falling damage as if they fell X feet (regardless of the distance actually thrown).
- **Misfire** - on an attack roll of 1, the gun misfires; the attack fails, and a clearing bonus action to clean the gun is required before it can be fired again, leaving it unloaded.
- **Scatter X** – weapons with this property also target any creature within 5ft of the target, using the same to hit roll, for the damage indicated in X. The scatter property is not in effect if the primary target is 10ft or less from the attacker.
- **20 Paper Cartridges** – these pre-prepared cartridges were invented in the Imperial capital and rapidly took over from manually priming, loading, and wadding shot, which used to take far longer and was far more prone to mistake. Unlike other ammunition, paper cartridges cannot be reused. The powder, paper, and wax wadding is burnt up upon firing, and the lead ball is often missing (in the ground or the body of the target) and always deformed. 20 cartridges can be bought for 1gp, and are of the type “longarm”, “sidearm” or “buckshot”. Each can only be used with its associated weapons, and each cost the same.

</section>

#### Armour
Armour is changed to the following (+ values can be taken in addition) <a id="toggle-armour">show</a>:

<section id="armour-section" class="hidden"> 

| Name | Cost | Armour | Property |
| --- | --- | --- | --- |
| **Body Armour** |
| Padded | 5gp | 1 | Light, Loud |
| Leather | 10gp | 1 | Light |
| Studded Leather | 45gp | 2 | Light |
| Hide | 10gp | 2 | Medium |
| Chain shirt | 50gp | 3 | Medium |
| Scale mail | 50gp | 4 | Medium, Loud |
| Breastplate | 400gp | 4 | Medium |
| Half plate | 750gp | 5 | Medium, Loud |
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

**Light** - no limit on Reflexes

**Medium** - your Reflexes cannot be greater than 2.

**Heavy** - you do not use Reflexes in calculations of Defence, and your Reflexes are limited to 2.

**Loud** - you have Disadvantage on Stealth checks.

**Helmet** - worn on the head, you can only wear one helmet at a time

**Blinkered** - you have Disadvantage on Perception checks

**Shield** - equipped in 1 hand, you must use a Bonus Action to Block to gain the bonus to Armour. If you use two shields, and use your Bonus Action and Action to Block, yes you may gain both shields' defence bonuses.

</section>

#### Natural Armour
Many creatures have Natural Armour, and so might you through strange Powers. Natural Armour grants an armour value, cannot be doffed and is always 'light', i.e. never limits Reflexes. Like other body armour, it does not stack, so to benefit from greater armour values, you must wear armour with a greater value than your natural armour.

#### Cover
Cover is functionally unchanged from the base game, but translates like so. Cover is a bonus to your Defence, a +2 for 'Half Cover' and a +5 for 'Three Quarters Cover'. This is independent of Armour and Evasion, so consider it part of your Base Defence. Additionally, these bonuses apply to Reflex Saves as well, just as cover applies to Dexterity Saves in 5e.

### Conditions
The following are changes and additions to D&D's conditions

- **Bloodied** - A fan favourite, enemy characters when they fall below half health enter the "Bloodied" condition. This often means their behaviour, tactics and even powers may change for the easier or the much, much harder. Players also get to know that the target is below half health.
- **Immobilised** - a "new" condition that is just short hand for the often stated "A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed". In addition the target must use its Stationary Defence.
- **Incapacitated** - (updated, effectively makes Stun the same condition)
  - The target character is Immobilised
  - The target character cannot take actions or reactions.
  - The target character automatically fails Fortitude and Reflex saves.
  - Attack rolls against the target character have Advantage.
- **Charmed** - unless otherwise stated, a charmed character considers you an ally and will heed your commands, which you can give freely, to the best of its ability. However it will not obey commands that are against its interests. If it is an intelligent character, you can attempt to persuade or otherwise convince them to obey, or that their interests lie elsewhere.
- **Frightened** - A Frightened character has Disadvantage on Ability checks and Attack rolls while the source of its fear is within line of sight. If it chooses to Move, the character must move away, or otherwise out of line of sight, from the source of its fear. The character doesn’t have to move into obviously dangerous ground, such as a fire or a pit.
- **Flanked** - replacing the popular alternate rule of 5e, when you are the one in an Engagement who the foe isn’t Engaging, you have Advantage on your weapon attack rolls. You cannot flank a character 2 or more sizes larger than you.

The following enviromental damage rules are updated and rolled into Conditions of the corresponding name:
- **Falling** - At the end of a fall, a character takes 1d6 bludgeoning damage for every 10ft it fell, to a maximum of 200ft for 20d6. The character lands prone, unless it avoids taking damage from the fall.
- **Suffocating*** - A character can survive for a number of rounds equal to its Fortitude (to a minimum of 1). At the start of the next turn, it drops to 0 health and is dying, and it can’t regain health or be stabilized until it can breathe again. If it recovers from Dying with a natural 20 and is still Suffocating, it suffers the condition anew as if just running out of breath again.
- **Burning** - A character burns each Round. They take 1d6 fire damage at the start of the Round, and can take an Action to extinguish themselves. Unless another DC is stated, it is a DC 8 Reflex save to end the Burning condition.

*Holding breath rules: A character can hold their breath for 1 minute plus their Willpower x 30 seconds (to a minimum of 30 seconds). When a character takes damage, it loses 30 seconds of breath. When a character runs out of breath they're Suffocating.