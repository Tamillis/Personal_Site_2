## Combat
The goal was to make combat more consistently dangerous, and the seemingly incompatible: more tactical and snappier. 

Low level combat was too dangerous but quickly combat became trivial and/or very slow, with characters that were health sponges that you end up playing whack-a-mole with, and monsters much the same. Getting rid of Health scaling (starting higher but not going up unless explicitely empowered) fixes this.

I also wanted to erase the issue of players switching off when its not their turn, so I got rid of turns. The "One Action All At Once" system (see [below](#one-action-all-at-once)), which is also part of making the combat more tactical. Giving players more to do with their single Action also furthers this goal. This is also a much quicker system. Everyone is playing all at once, getting rid of the slow round-the-robin of turn based combat, and everyone only having one Action means each round is resolved more quickly.

### Health
Health starts higher than the HP that it replaces, the name also shaking out the video game connetations and helping players who don't come from a video-game background. It purposefuly does not progress unless specifically empowered, avoiding the health sponge issue of later level 5e. Health is naturally restrained and reserved for those that invest in it: those ineffible heroes who seem to be able to take punch after punch where others would fall to the first blow no matter how many fights they'd been in.

### Recovery
On the topic of health, there are a few changes to recovery.

#### Short and Long Rests, Sleep and Downtime
Short Rests and Long Rests are mostly unchanged, with the caveat that explicitely, yes, a Long Rest counts as a Short Rest. For this reason all Powers that key off of "A Short or Long Rest" now simply state "Short Rest". Simplifying and unifying that odd system.

**Short Rests** are 1 hour periods of light activity or rest.

**Long Rests** are 8 hour periods of light activity or rest.

Every Character must, in addition, **Sleep** for at least 6 reasonably-continuous hours every 24 hour period, unless some Power or racial feature says otherwise (such as Elves, who cannot sleep). Failure to do so means you gain a point of Exhaustion. Sleeping counts as Resting, though not all Rest needs to be sleep; say if you were keeping watch.

**Downtime** - PEDD introduces a third level of resting, Downtime, which is a 2 day+ period of non-adventuring activity. As Short Rests are part of Long Rests, Long Rests are part of Downtime, though many other activities can be gotten up to during Downtime. Just as in the base game, feel free to pursue professions, craft, carouse, or any other Downtime Activity.

#### Recovering Health, removing Hit Dice
Hit Dice are also an older mechanic that is mostly vestigial. It is removed. Instead, when Resting (Short or Long), you recover your Race's Baseline Health as a flat amount to your current Health, no more or no less.

Once you have regained Health from Short Rests twice, you cannot regain Health from a third Short Rest until you have completed a Long Rest. Meaning, per day, you can at maximum regain 3 × your Race's Baseline Health, unless your ability to recover is further empowered of course.

If you seek medical attention or healing spells, you may yet recover a lot more Health in a day, but this is fine since it is an investment of other resources.

#### Dying and Wounds
(This is completely true for 5e as well but) When you reach 0 Health, you enter the "Dying" state. You collapse Unconscious (or dramatically conscious, functionally unconscious, if you will), and cannot take Actions. What is new, is that you gain a rank of the Wounded condition as well.

**Wounded** - another addressment of the wack-a-mole issue is the Wounded condition. Entering the Dying state is now cumulatively dangerous as when you enter the Dying state you gain a rank in the Wounded condition (Wounded I, initially).

**Wounded [Rank]** - When your Health is reduced to 0 and you don't already have the Wounded condition, you go Unconscious and you gain the Wounded 1 condition. Each time you go Unconscious from your Health dropping to 0, your Wounded condition increases by 1. Wounds are severe physical and mental damage that threatens your continued existence. The Wounded X condition loses one rank per Long Rest, and one rank per successful Medicine check made against a DC of the Wounded condition rank × 5 (the same like a Death Save). This Medicine check can be made once per day per character, regardless of success or failure.

**Dying** - now when you are Dying and you make Death Saves, the DC is not 10, it is your Wounded condition's rank × 5. So at Wounded I, Death Saves are made against a DC of 5, at Wounded II a DC of 10, Wounded III at DC 15 etc. Otherwise Dying is unchanged (3 saves to stabilise, 3 failed saves and death, coming conscious erases all death saves)*.

The more you're knocked down, the more likely you are to stay down, forever.

*I actually would like to experiment with keeping failed death saves but fewer changes are better for now I believe.

### Defence
To make characters easier to strike, meaning less spongey, and also to make combat more proactive and engaging; the Defence Stat replaces AC (a simple rename for ease of understanding. AC really is an odd term), and is more flexible than a flat value, being made of three parts:
- a Base Defence value of 8 for Medium characters, 10 for Small characters and 6 for Large characters. Should it be relevant, Huge characters have a Base Defence of 2 and Tiny a Base Defence of 14. (Smaller characters are harder to hit).
- an Armour value determined by worn Equipment (see [Armour](./pedd/combat#armour))
- an Evasion value, your Reflexes to a minimum of 0 (which can be limited by worn Equipment).

Instead Defence is calculated when required from these three parts, depending on what parts are in play. This gives us three kinds of Defence;
- **Defence** - Defence with both Armour and Evasion.
- **Unarmoured Defence** - Defence without Armour, armour limits on Evasion are still applied. A few effects target Unarmoured Defence.
- **Stationary Defence** - Defence without the benefit of Evasion, often called "Touch AC" in other systems. Some effects target Stationary Defence, and surprised or unmoving targets only get their Stationary Defence. Any condition that reduces a character to 0 speed, called "Immobilised" in PEDD, uses its Stationary Defence.

Remember that the Armour value also changes during play as you don and doff Equipment, and especially based on whether you Block with your Shield or not! Armour Piercing strikes ignore some or all of your Armour as well, such as guns.

### Weapons and Armour
Weapons are a well known weakpoint of 5e and have been addressed many times. In fact, I used to use, and continue to take heavy inspiration form, the homebrew; Weapon's Revised https://1drv.ms/b/s!Aq2B34oritBLmmrdNLmMeUrxi5kM

PEDD makes use of the following modified list of weapon attributes, the guns can be found in my [Armouries of the Second Empire](/mewiki/ArmouriesOfTheSecondEmpire).

#### Weapons
Courtesy of Weapons Remastered, adapted and tweaked.

Weapons with an *, like the Lance, have special properties described below the table.

Bludgeoning -> blg, Piercing -> prc, Slashing -> slash

| Name | Skill | Cost | Damage | Weight | Properties |
| --- | --- | --- | --- | --- | --- |
| **Simple Melee Weapons** |
| Club | Clubs & Axes | 1sp | 1d4 blg | 2lbs | Light, nonlethal |
| Cestus* | Body | 1gp | 1d4 blg | 0.5lbs | Light, nonlethal |
| Dagger | Knives | 2gp | 1d4 prc / slash | 1lbs | Finesse, Finisher, Light, nonlethal |
| Spear Club (Goedenday) | Spear / Clubs & Axes | 5sp | 1d4 blg / prc | 3lbs | Finisher, Light Armour Piercing |
| Great Club | Clubs & Axes | 5sp | 2d4 blg | 10lbs | Heavy, Two-handed, Dazes |
| Handaxe | Clubs & Axes / Thrown | 3gp | 1d6 slash | 2lbs | Light, Thrown (20/75) |
| Javelin | Spear / Thrown | 5sp | 1d6 prc | 2lbs | Thrown (30/120) |
| Winged Spear | Spear | 5gp | 1d6 prc | 5lbs | Versatile (1d8), Winged |
| Light Hammer | Clubs & Axes, thrown | 2sp | 1d4 blg | 2lbs | Light, Dazes, Thrown (20/60) |
| Mace | Clubs & Axes | 5gp | 1d6 blg | 4lbs | Light Armour Piercing |
| Quarterstaff | Spear | 2sp | 1d6 blg | 4lbs | Nonlethal, Versatile (2d4) |
| Sickle | Knives | 1gp | 1d4 slash | 2lbs | Light, Bleeds |
| Shiv* | Knives | 1sp | 1d4 prc | 0.5lbs | Light, nonlethal |
| Short Spear | Spear | 1gp | 1d6 prc | 3lbs | Finisher, nonlethal |
| Spear | Spear | 1gp | 1d8 prc | 4lbs | Reach, two-handed |
| **Martial Melee Weapons** |
| Battleaxe | Battleaxes | 10gp | 1d8 slashing | 4lbs | Bleeds, Sweeping, Versatile (1d10) |
| Esctoc | Blades | 20gp | 1d8 piercing | 2lbs | Finesse, Parry, Lightly Armour Piercing |
| Falchion | Blades | 25gp | 1d8 slashing | 2lbs | Bleeds, Finesse, Parry |
| Flail | Mauls | 10gp | 1d8 blg / prc | 2lbs | Ensnaring, Wind-up |
| Garotte Wire* | Exotic (Garrote Wire) | 5gp | 1d6 Slash | 0.25lbs | Finesse, Light, Two-Handed |

TODO: keep transfering these over


#### Weapon Properties
- **Ammunition** - You can use a weapon that has the Ammunition property to make a ranged attack only if you have Ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a weapon). Expended arrows and bolts can be recovered, by taking a minute to search the battlefield, but guns that use paper cartridges cannot.
- **Armour Piercing** & **Light Armour Piercing** – the weapon ignores some benefit of Armour to a target's Defence. The target's Armour is reduced, to a minimum of 0, by 2 for Light Armour Piercing and by 6 for Armour Piercing.
- **Block** - You can raise this weapon like a shield, using your Bonus Action to Block, gaining a bonus to Defence equal to the value of the Block property.
- **Ensnaring** - When you hit an attack with an ensnaring weapon, you may use your Bonus Action to attempt the Grapple action on the target or Shove them Prone, using your weapon attack modifier in place of Strength. If you grapple a target with an ensnaring weapon, the grapple is automatically ended if you make another attack roll with that weapon.
- **Finesse** - The weapon lends itself to dexterous combat due to features that make it more reliant on technique than brute force. When attacking with a finesse weapon, you use your choice of your
Strength or Dexterity for the attack and damage rolls. You must use the same modifier for both rolls.
- **Finisher** - Finisher weapons are well-suited to executing enemies that are at your mercy. When you make an attack against a Prone or Incapacitated character, you roll one additional damage die.
- **Heavy** - These weapons are larger and unwieldier than most, lending them unique advantages and challenges: 
  - Small characters make attacks with heavy weapons at Disadvantage.*
  - A heavy weapon allows you to make an attack relying upon on raw strength instead of technique. When you attack with a heavy weapon that you're proficient in, you can forego adding
your proficiency bonus to the attack roll. If the attack hits, you add that proficiency bonus to the damage roll instead. You must decide to do this before making the attack roll. 
- **Light** - A light weapon is small and easy to handle. When you take the Attack action and attack with a light melee weapon that you’re holding in one hand, you can use a Bonus Action to attack with a different light melee weapon that you’re holding in the other hand. You don’t add your Stat to the damage of the bonus attack, unless that modifier is negative. 
- **Loading** & **Slow Loading** - due to the elaborate procedure of preparing the weapon for its next shot, it takes an Attack, Action or Bonus Action to reload, and a free hand. Slow Loading weapons take an Attack or Action to reload.
- **Nonlethal** - The weapon is designed to incapacitate or is otherwise capable of delivering a hit that does not kill the target. Non-lethal Strikes can be made with normal damage rolls.
- **Parry** - The weapon has some weapon catching or deflecting feature, allowing it to be used to take the Parry Action.
- **Prone Fighting** - When you are prone and make a melee attack with this weapon, you do not suffer Disadvantage for being prone.
- **Reach** - This weapon's extended length adds 5 ft to your Reach when you attack with it.
- **Bleeds** - critical hits with this weapon inflict gaping wounds and profuse bleeding, inflicting additional slashing damage equal to your Bonus. Non-living character types are immune to this damage.
- **Dazes** - critical hits with this weapon hit with a singularly boneshaking blow, dazing the target. The target's next attack roll is made with Disadvantage. 
- **Sweeping** - These weapons strike in broad, sweeping motions. When you make an attack with a sweeping weapon that deals slashing damage, you may use a Bonus Action to deal the weapon's damage die in damage against a second target within your reach that is adjacent to the first, provided that your attack roll would also hit that target.
- **Versatile** - This weapon can be used with one or two hands. A damage value in parentheses appears with the property–the damage when the weapon is used with two hands.
- **Wind-up** - The weapon can be used to spend time preparing an attack to be even more effective. On your turn you can use an attack or Bonus Action to swing up or set your weapon. On the next attack you make that Round with the weapon you can add an additional weapon die to that attack if it hits. A weapon can only add one such damage die in this way.
- **Winged** - These weapons have specially-shaped heads that halt the movement of their target toward the user and can also be used to catch shields and weapons. When you deal piercing damage against a character one size larger than you, or less, with a winged weapon, that character cannot move toward you that Round.

*This property of Heavy Weapons is a consequence of using a weapon of a size larger than your own. [A system that is TODO]

#### Armour
Armour is changed to the following (+ values can be taken in addition):
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

**Shield** - equipped in 1 hand, you must use a Bonus Action to Block to gain the bonus to Armour

#### Natural Armour
Many creatures have Natural Armour, and so might you through strange Powers. Natural Armour grants an armour value, cannot be doffed and is always 'light', i.e. never limits Evasion. Like other abse armour, it does not stack, so to benefit from greater armour values, one must wear armour with a greater value than your natural armour.

#### Cover
Cover is functionally unchanged from the base game, but translates like so. Cover is a bonus to your Defence, a +2 for 'Half Cover' and a +5 for 'Three Quarters Cover'. This is independent of Armour and Evasion, so consider it part of your Base Defence. Additionally, don't forget that these bonuses apply to Reflex Saves as well, just as they apply to Dexterity Saves in 5e!

### One Action All At Once
A radical change I've experimented a little with is to basic combat where, simply, all characters in a **Round** of combat have one **Action** (and a Bonus Action), and everyone "acts" at once, no initiative. No taking "Turns".

How on Earth does that work? You might be thinking.

The GM declares the intentions of most enemies in the scene at the start of a Round, just as their movements would give away what they're about to do. Then all players decide among themselves what they're going to do that Round. When everyone is happy with their Actions, you "resolve" the round in whatever order works.

Only powerful or well-trained enemies will be capable of **Hidden Actions**, where their intentions are not stated by the GM but kept secret until after players commit to their own Actions, but player characters can always attempt to **Discern** enemy moves anyway (see [Additional Actions](#additional-actions)).

**Initiative Contest** - For any situations where the order of actions matters, the two characters involved roll off with their Initiative, the secondary statistic that starts as your Perception and Dexterity, to see who can get the higher value. If it makes sense to resolve such conflicts of interest using appropriate skill checks rather than Initiative (i.e. Athletics), then do so. For "slow" enemies / mooks the DM will just let the players go first, so-called "player's advantage". For example; "I try to grab the bag of gold before him", "OK, you and the white dragon need to make an Initiative Contest."

Most Actions, however, can be resolved simultaneously. Attacks for example; two people just try to hit each other, damage each other, and collapse wounded at the same time if that is what happens.

Since everyone gets only one Action, the old action / bonus-action / movement economy of 5e is radically simplified. Movement is simply another Action, making the "Dash" action and the "Movement Action" synonymous. Bonus Actions are mostly unchanged but are best thought of as 'concurrent actions', happening at the same time and therefore not significantly interrupting the character's main action. Reactions, interestingly, disappear. 

**Converting Reactions** - Any "Reactions" are considered "Actions". As Turns are simultaneous their triggers don't matter. If anything, the "triggers" are natural consequences of play. "Oh, the zombie is attempting to bite my face? I block!"

#### Engagement
To help with handling fights with little to no initiative and create a natural ebb-and-flow to combat, combatants are "paired off" in **Engagements**. These are the momentary pairs or small groups that naturally form in the middle of any chaotic fight, and allows us as the players to "zoom in" on little microcosms of fights with the camera, as it were, focusing on resolving pairing after pairing.

Engagements are resolved effectively simultaneously and the order of Engagements doesn’t matter, as with only 1 Action per turn melees rarely effect each other.

All combat is resolved in two simple steps:

1. **Determine Engagements** - where combatents, according to their ["Zone of Engagement"](#zone-of-engagement), “pair off”. “Pulling” and “turning”, if in conflict, are an Initiative Contest. Any who intend to Move do, Engaging as necessary. This may seem complex at the outset, but these rules mostly only exist to resolve edge-cases and cases of conflict. 9 times out of 10 the GM simply needs to ask "OK, so who's fighting the Ogre and who's shooting back at the goblins?".
2. **Resolve Engagements** - resolving pairs/groups in a sensible/cinematic sequence. Melee conflicts are easily resolved in their engagements. Ranged attacks naturally involve unpaired individuals but often can be smoothly resolved at the start or end of a Round. Resolve conflicts of interest with an Initiative Contest.

#### Zone of Engagement
The rules of pairing off, pulling and turning. 

How do you avoid a long conga-line chain of awkwardly connected characters fighting each other? "Pairing off". Sometimes if you want to attack Mr A, even if they're attacking Mr B, because Mr C is attacking you and is otherwise unengaged, you have no choice but to "**Turn**" from your initial intended target, who is said to "**Pull**" you, and "**Pair Off**" with them. I.e., you cannot be "pulled" if you are engaged with someone who is engaged with you.

Additionally, a character can only be engaged by a maximum number of characters according to their relative size. Sometimes someone is surrounded by attackers, and even if you wanted to join in on the bullying, you're crowded out. The maximum number of opponents a character of a given relative size can have is:
- smaller - 1
- same - 2
- larger - 4
- 2 sizes larger - 8
- 3 sizes+ larger - any

**Flanking** - replacing the popular alternate rule of 5e, when you are the one in an Engagement who the foe isn’t Engaging, you have Advantage on your waepon attack rolls. You cannot flank a creature 2 or more sizes larger than you.

### Combat Actions
The other facet of making combat more tactical, beside the radical change of One Action All At Once, is what that one action can do. A variety of generally available tactical basic combat actions are added; 
- **Charge** - when you use your Action to Move, moving at least 15ft, at the end of the Move you can make 1 Weapon Attack at Advantage as a Bonus Action.
- **Run and Gun** - when you use your Action to Move, you can make 1 Ranged Weapon Attack as a Bonus Action at Disadvantage.
- **Dodge** - as an Action, you make a Reflex Saving Throw and if the result is higher than your Defence, it replaces your Defence value for the rest of the Round
- **Block** - as a Bonus Action, you raise your shield, or weapon if it has the Block property, to gain the item's Armour bonus. This prevents you using that item as a weapon to attack. The Armour bonus lasts for the rest of the round.
- **Parry** - if your weapon has the Parry Property, when you make an attack action against an enemy who is making a melee attack against you use your weapon attack roll as your Defense for the enemy's attack resolution, and it also functions as a normal attack action. Resolve the enemy's attack against your new Defence, if its higher or even if it's lower.
- **Disengage** - as a Bonus Action, move 5ft without triggering Attacks of Opportunity. (Replaces 5e action "Disengage")
- **Stand** - a Bonus Action to go from Prone to Standing.
- **Go to Cover / Go Prone** - as a Bonus Action make yourself Prone, or enter adjacent cover. The Prone condition or being in cover uses Stationary Defence. As before Prone makes being shot at occur at disadvantage, and cover is +2/+5 to Defence for half / ¾ cover.
- **Attack of Opportunity** - as a Bonus Action to an enemy you're engaged with moving away from you without Disengaging from you, you can make an attack action on them, after which they have moved away and are no longer engaged with you for that Round.
- **Discern** - as an Attack or Action, you can make a Perception check against one enemy whose has a Hidden Action. If successful (the GM will decide the DC), their Action is no longer hidden and everyone in the combat can know.
- **Disarm** - as an Attack or Action against an enemy in your Reach holding a weapon, you can make a Dexterity check against the enemy's passive Reflexes. If you succeed, you rip the weapon from their grasp and throw it 20ft in a direction of your choice (this does not count as a thrown weapon attack), or equip it an empty hand of yours.
- **Shove** - as an Attack or Action you attempt to make an Enemy Prone or move 10ft directly away from you. You make a Strength check against their passive Fortitude.
- **Grapple** - as an Attack or Action you attempt to Restrain an character. You make a Strength check against their passive Fortitude. If you succeed both the character is Restrained. On subsequent turns you can maintain the grapple or end the grapple (no additional action or roll needed), and you can only use your Move action, if you do, to Move yourself and the enemy as if going through Difficult Terrain (typically, at half Speed). The grappled character can use their Action to attempt to escape the Grapple, making a Strength or Dexterity check (their choice) vs your passive Fortitude, ending the grapple on a success.
- **Non-lethal Strike** (a.k.a. knockout strike) - you attack with the weapon with the intention to knock unconscious rather than kill. Don't roll for Damage, instead take each dice roll to have been a 1.
- **Coup de Grace** - an attack made against an incapacitated target where damage is not rolled, assume maximum results for any damage dice.

### Conditions
The following are changes and additions to D&D's conditions

- **Bloodied** - A fan favourite, enemy characters when they fall below half health enter the "Bloodied" condition. This often means their behaviour, tactics and even powers may change for the easier or the much, much harder. Players also get to know that the target is below half health.
- **Immobilised** - a "new" condition that is just short hand for the often stated "A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed". In addition the target must use its Stationary Defence.
- **Incapacitated** - (updated, effectively makes Stun the same condition)
  - The target character is Immobilised
  - The target character cannot take actions or reactions.
  - The target character automatically fails Fortitude and Reflex saves.
  - Attack rolls against the target character have Advantage.