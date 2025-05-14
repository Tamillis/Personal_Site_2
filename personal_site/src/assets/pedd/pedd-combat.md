## Combat
PEDD significantly changes how combat works both at the character level, through [Combat Statistics](#combat-statistics) (see below), and at the game level in the following rules of [New Combat](#new-combat).

The goals were to make combat:
 1. More consistently dangerous
 2. More tactical
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

Only powerful or well-trained enemies will be capable of **Hidden Actions**, where their intentions are not stated by the GM but kept secret until after players commit to their own Actions, but player characters can always attempt to **Discern** enemy moves anyway (see [Tactical Actions](#tactical-actions)). In these cases, if fairness needs to clear, GM's are encouraged to write down the intended action on a scratchpad, which also comes in handy for the reveal of a successful discern action.

Most Actions, however, can be resolved simultaneously. Attacks for example; two people just try to hit each other, damage each other, and collapse wounded at the same time if that is what happens.

Since everyone gets only one Action, the old action / bonus-action / movement economy of 5e collapses. Movement is simply another Action, making the "Dash" action and the "Movement Action" synonymous. Bonus Actions are mostly unchanged but are best thought of as 'concurrent actions', happening at the same time and therefore not significantly interrupting the character's main action. Reactions, interestingly, disappear.

#### Converting Reactions and Ready Actions
Any "Reactions" are considered "Actions". As Turns are simultaneous their triggers don't matter. If anything, the "triggers" are natural consequences of play. "Oh, the zombie is attempting to bite my face? I block!" The same goes for the Ready Action, no need to setup and wait for a trigger, as it becomes a natural part of play.

Note that one particularly common Reaction of 5e, Attacks of Opportunity, and its paired Action Disengage, have become a Tactical Action in the former and completely removed in the latter. Further, some Tactical Actions allow for attacks "for free", which means outside of needing to make an Attack Action, Bonus Action etc.

#### Initiative Contest
For any situations where the order of actions matters, the two (or more) characters involved roll off with the most appropriate skill, to see who can get the higher value. For "slow" enemies / mooks the DM will just let the players go first, so-called "player's advantage". For example; "I try to grab the bag of gold before him", "OK, you and the white dragon need to make a Dexterity Check."

### Combat Actions
So what can that one Action can do? Quite a lot more than 5e. Every character can perform Core Combat Actions and a variety of Tactical Actions. Note that many are keyed to "an Attack or Action", so if you have more than one attack, you can potentially take more than one "action" on your turn. Note there are several Powers that provide further and enhanced Tactical Actions.

#### Core Combat Actions

- **Attack** - as an Action, you make your weapon or spell attack/s against characters in reach / range. One attack Action may involve a number of Attacks on a number of targets depending on the weapon, spell or some Power such as Extra Attack. If multiple targets are all within reach / range and you have multiple Attacks as part of the Attack Action, you may freely choose who to direct attacks at, and make Attack Rolls per Attack. As in 5e, this is the distinction between the "Attack Action" and specific "Attacks", as well as "Weapon Attacks" and "Spell Attacks". Unless otherwise stated, full attack action attacks are with lethal intent (see Non-Lethal Strike).
  - **Unarmed Strike** - in PEDD, this simply means a weapon Attack using Body, instead of a traditional weapon.
  - **Improvised Strike** - in PEDD, this simply means a weapon Attack using a piece of the environment. Ask your GM for appropriate statistics to use.
- **Block** - as a Bonus Action, you raise your shield, or weapon if it has the Block property, to gain the item's Armour bonus. This prevents you using that item as a weapon to attack. The Armour bonus lasts for the rest of the Round.
- **Discern** - as an Attack or Action, you can make a Perception check against one enemy whose has a Hidden Action. If successful (the GM will decide the DC), their Action is no longer hidden and everyone in the combat can know.
- **Dodge** - as an Action, you make a Reflex Saving Throw and the result (or your Stationary Defence, if that is higher) replaces your Defence value for the rest of the Round.
- **Go to Cover / Go Prone / Stand** - as a Bonus Action you make yourself Prone, or enter adjacent cover. The Prone condition or being in cover uses Stationary Defence. Prone makes being shot at occur at Disadvantage, and cover is +2/+5 to Defence for half / ¾ cover respectively (see [Conditions](#conditions)). Going from cover or Prone to standing takes a Stand Bonus Action.
- **Help** - as an Action, you aid an ally in attacking an enemy within your reach. You feint, distract the target, or in some other way team up to make your ally's attack more effective. If your ally Attacks the target this Round, the first Attack is made with Advantage.
- **Hide** - as an Action, you make a Stealth check in an attempt to hide from those you are obscured from (in 3/4's cover or out of line of sight), versus a DC of 15. If you succeed, you gain the benefits of being Invisible: Attacks against you have Disadvantage, and your Attacks have Advantage. When you make an Attack, you are no longer hidden. If you or others Move such that you are no longer obscured, you are no longer Hidden from them.
- **Interact** - as an Action, you interact, a short series of motions that achieves a simple goal, with something or someone. This includes; giving an unconscious ally a health potion, arranging the runes of a magical interface, frisking a character for weapons, pulling the chains of a pulley, finding a particular page of a book, or creating a rough sketch in the sand
- **Mount / Dismount** - as an Action, you safely get on or get off a mount within your reach.
- **Move** - move your Speed along a path of your choice towards a target. See [Move Action](#move-action) for details.
- **Use** - as a Bonus Action, you make a single motion to use an item or device. This includes: pulling a lever, pushing a button, drinking a potion readily available, sending a signal (hand, flag, flare etc.), or unlocking a chest with a readily available key.

#### Tactical Actions

- **Attack of Opportunity** - if an enemy you're Engaged with moves away from you, you can spend 1 Focus to make an attack on them for free, after which they have moved away and are no longer Engaged with you for that Round.
- **Coup de Grace** - when you make a melee Weapon Attack against an Incapacitated target, don't roll for Damage, instead take each dice you would roll (if any) to be the maximum result.
- **Disarm** - as an Attack or Action against an enemy in your Reach holding a weapon or shield, you make an attack roll against the enemy's passive Reflexes. If you succeed, you rip the weapon from their grasp and throw it 10ft in a direction of your choice (this does not count as a thrown weapon attack), to the ground at your feet, or equip it an empty hand of yours.
- **Focussed Strike** - when you make a weapon attack roll against a character, you can spend 1 Focus to add d6 to the roll.
- **Grapple** - as an Attack or Action you attempt to Grapple a Character. You make a Strength check against their passive Fortitude. If you succeed the target Character is Immobilised. On subsequent turns you can maintain the grapple (no additional roll needed) as an Action or end the grapple for free. When Grappling, you can use your Bonus Action to Move yourself and the enemy as if going through Difficult Terrain (typically, at half Speed), make yourself and the enemy Prone, or make an Unarmed Strike or Weapon Attack with the 'prone fighting' tag against the grappled character. The grappled character must use their Action to attempt to escape the Grapple, making a Strength or Dexterity check (their choice) vs your passive Fortitude, ending the grapple on a success.
- **Lunge** - When you make a melee weapon attack, you can attack at Disadvantage but double your Reach for that attack. You can spend 1 Focus to ignore the Disadvantage.
- **Non-lethal Strike** (a.k.a. Knockout Strike) - you make an Attack Action with the intention to knock unconscious rather than kill. Don't roll for Damage, instead take each dice roll (if any) to have been a 1. If the target reaches 0 Health, they enter the Unconscious condition.
- **Off-Hand Strike** - when you make an Attack with a weapon with the Light Property, you may use your Bonus Action to do a second Attack with the other weapon in your off-hand, which also must have the Light property. This second attack does not benefit from the Statistic to the damage roll.
- **Parry** - as an Attack or Action, if your weapon has the Parry Property and when another character damages you with a melee attack, you can reduce the damage by your Dexterity and proficiency Bonus with the weapon (if any), to a minimum of 0, if you succeed at a weapon skill check vs the enemy's passive Reflexes.
- **Power Strike** - when you hit a character with a weapon attack, you can spend 1 Focus to add d6 to the damage roll.
- **Shove** - as an Attack or Action you attempt to make an Enemy Prone or move 10ft in a direction of your choice. You make a Strength check against their passive Fortitude.

### Move Action
The Move Action sees a character move a distance in feet equal to their Speed towards a stated target. This can be in a straight line or other path of their choice, so long as the path is traversible. Like all Actions, they are declared at the same time as everyone else, however they're unique in that they're only resolved at the end, after all other Actions and Engagements (see Engagement).

Difficult terrain doubles the Speed required, with swimming / climbing requiring quadruple the speed, and impassible terrain must be circumnavigated.

When more than one character takes the Move action with respect to other characters' positions, how to resolve movement can get quite confusing quite quickly. As such, when declaring a Move, declare also the 'target' of the movement. When everyone does this generally speaking a natural conclusion where all characters reach or approach their targets becomes clear. 

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

How do you avoid a long conga-line chain of awkwardly connected characters fighting each other? "Pairing off". Sometimes if you want to attack Mr A, even if they're attacking Mr B, because Mr C is attacking you and is otherwise unengaged, you have no choice but to "**Turn**" from your initial intended target, who is said to "**Pull**" you, and "**Pair Off**" with them. In other words, you cannot be "pulled" if you are "paired off": engaged with someone who is engaged with you.

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

#### Mounted Combat & Unstable Platforms
Fighting on the back of a mount, such as a horse, flying carpet or dune worm, is tricky for the untrained. 

When mounted: 
- You suffer from the 'Unstable Platform' effect. 
- You gain the benefit of +5ft of reach, if your mount is a size larger than you
- When your mount uses its Action to Move, it automatically moves you (and is not slowed, such as when grappled characters move each other). Since Movement happens last, any actions from the back of a mount occur before it moves apart from a 'Combined Charge'.

It takes an Action to Mount or Dismount a mount. If you are knocked from your mount, you fall Prone. If your mount is two sizes larger than you, or more, the GM should consider fall damage.

**Unstable Platform** - When unstable, such as being on a mount or standing in an earthquake, you have Disadvantage on Ranged Attacks and cannot attack beyond normal range.

**Combined Charge** - You and your mount both use your Actions. The mount Moves in a straight line towards a target that is within its movement. At the end of that movement, the rider can make one Attack at Advantage against that target. If the mount cannot reach the target with a straight movement, you cannot use Combined Charge.

## Combat Statistics

### Focus
Focus is both a replacement of Battle Master's unnamed superiority dice pool and an exclusionary partner of the "Concentration" condition. 

Characters start with their Willpower of Focus (to a minimum of 1). Each point of Focus can be expended on certain Tactical Actions or to boost an initiative contest roll by d6, and you regain all used Focus on a Short Rest. This gives all characters a small (by default) pool of special moves they can pull off during a fight. There are Powers to boost your Focus pool, provide more Focus recovery and make new Tactical Actions available.

Focus and Concentration are "exclusionary partners" becase when you are Concentrating on a spell, you use cannot use Focus. If you must use Focus, you break concentration.

### Health
Health starts higher than the HP that it replaces, with the name also shaking out the video game connetations and helping players who don't come from a video-game background to engage with the Stat. It purposefuly does not progress unless specifically empowered. Health is naturally limited and only those who invest in it become the ineffible heroes who seem to be able to take punch after punch where others would fall to the first blow no matter how many fights they'd been in.

NOTE: OK, so just spit-balling here but, what if Base Health is removed from races, with a simple health bonus as part of their race, and size dictates base health just like it already did at the design stage. It means there's one less awkwardly named stat to care about: Base Health. This also means Size dynamically scales your Health, which could be cool or could be a ball-ache. We'll see.

#### Recovering Health, removing Hit Dice
On the topic of health, recovery of that Health has also changed. No matter what the sheer iverisimilitude of full recoveries every Long Rest (which inevitably meant a few z's were enough to fix broken bones and burnt flesh) always took me out of a game. So I changed it.

Hit Dice are an older mechanic that is mostly vestigial. It, too, is removed. Instead, when Resting, you recover your Race's Baseline Health as a flat amount to your current Health. You regain Health one Short Rest per Long Rest (and every Long Rest). Meaning, per day, you can at maximum regain 2 × your Race's Baseline Health, unless your ability to recover is further empowered of course.

If you seek professional medical attention or magical healing, you may yet recover a lot more Health in a day. Few will be capable of fully recoving in a single day, not at least without a significant expenditure of resources.

If you undergo a period of downtime, or due to other exceptional circumstance, the GM may allow for a "Full Recovery", removing all ongoing conditions, maluses and recovering all Health and resources.

#### Short and Long Rests, Sleep and Downtime
Apart from Health recovery, Short Rests and Long Rests are mostly unchanged, with the caveat that explicitely, yes, a Long Rest counts as a Short Rest. For this reason all Powers that key off of "A Short or Long Rest" now simply state "Short Rest". Simplifying and unifying that oddity.

Additionally the meaning of a rest is clarified:
- **Short Rests** are 1 hour periods of light activity and / or rest.
- **Long Rests** are 8 hour periods of light activity and / or rest.
- **Light Activity** includes reading, talking, eating, or standing watch. If a Check is needed, it is not Light Activity, including crafting or other professional activity.

Every Character must, in addition, **Sleep** for at least 6 reasonably-continuous hours every 24 hour period, unless some Power or racial feature says otherwise (such as Elves, who cannot sleep). Failure to do so means you gain a point of Exhaustion. Sleeping counts as Resting, though not all Rest needs to be sleep; say if you were keeping watch.

**Downtime** - PEDD introduces a third level of resting, Downtime, which is a 2 day+ period of non-adventuring activity. As Short Rests are part of Long Rests, Long Rests are part of Downtime, though many other activities can be gotten up to during Downtime. Just as in the base game, feel free to train, pursue professions, craft, carouse, or any other Downtime Activity. After a Downtime, you gain a Full Recovery.

#### Dying and Wounds
When you reach 0 Health, you enter the "Dying" state. You collapse Unconscious, and cannot take Actions. Additionally, you gain a rank of the Wounded condition. This is another addressment of the wack-a-mole issue. Entering the Dying state is now cumulatively dangerous as when you enter the Dying state you gain a rank in the Wounded condition (Wounded I, initially), which affects one's chances with Death Saves, and has a chance to leave permanent marks.

**Wounded [Rank]** - When your Health is reduced to 0 and you don't already have the Wounded condition, you go Unconscious and you gain the Wounded 1 condition. Each time you go Unconscious from your Health dropping to 0, your Wounded condition increases by 1. Wounds are severe physical and mental damage that threatens your continued existence. The Wounded X condition loses one rank per Long Rest, and one rank per successful Medicine check made against a DC of the Wounded condition rank × 5 (the same like a Death Save). This Medicine check can be made once per day on a wounded character, regardless of success or failure.

The Dying condition is therefore updated:

**Dying** - now when you are Dying and you make Death Saves, the DC is not 10, it is your Wounded condition's rank × 5. So at Wounded I, Death Saves are made against a DC of 5, at Wounded II a DC of 10, Wounded III at DC 15 etc. Otherwise Dying is unchanged (3 saves to stabilise, 3 failed saves and death, coming conscious erases all death saves).

The more you're knocked down, the more likely you are to stay down, forever.

#### Wounds and Major Enemies
Enemy characters function just like player characters in that they have health and defence, but certain powerful enemies, for reference purposes known as "Major Enemies", can even suffer the "Wounded" condition: a simple twist that changes what it is like to play against them.

Most smaller enemy characters die immediately (or are otherwise defeated) when they reach 0 Health, not having access to Death Saves. Some important humanoid NPCs may go on to have Death Saves. Some power NPC's don't. They can take multiple "Wounds", and may lose parts of themselves (such as a tail, layer of armour, claws, part of their construction...), and will act differently, have access (or greater access) to certain powers etc.

A character with Wounds, when their Health reaches 0, instead lose one Wound and their Health resets to full. Meaning, each wound they can take is effectively an additional health pool. Such enemies, great monsters and infamous villains, must have their wounds be burnt through first, with every tier presenting a different kind of foe and challenge.

### Defence
The Defence Stat replaces AC, and is a dynamic value made of three parts:
- a Base Defence value that keys off of Size, 8 for Medium characters. See the Base Defence Table below.
- an Armour value determined by worn Equipment (see [Armour](./pedd/combat#armour)) and other sources
- your Reflexes to a minimum of 0 (which can be limited by worn Equipment) which is also known as your "Evasion". Some Powers change how Evasion is calculated.

It is intented to be, on average, lower than AC, making combat more dangerous. However this is only passive defence, Actions such as Block, and Powers, play a more significant role in increasing Defence, making it more active and combat in general more engaging.

In most situations, Defence is the simple sum of Base Defence, Armour and Evasion. There are two special scenarios that use a more limited form of Defence:
- **Stationary Defence** - Defence without the benefit of Evasion. Some effects target Stationary Defence directly, and Surprised, Stunned and Immobilised targets only get their Stationary Defence. Any character whose Speed is 0, such as one suffering the Immobilised condition, uses its Stationary Defence.
- **Unarmoured Defence** - Defence without the benefit of Armour, though armour limits on Reflexes are still applied (if appropriate). A few effects target Unarmoured Defence, notably Armour Piercing Weapons.

Remember that the Armour value also changes during play as you don and doff Equipment, and especially from bonuses such as spells, helmets or whether you Block with your Shield or not!

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

The list of weapons, weapon attributes and armour that PEDD makes use of can be found [in equipment](/PEDD/equipment).

More details about guns, munitions, weapons and specific technological and magical items as they pertain to my setting can be found in my [Armouries of the Second Empire](/mewiki/Mitteland/ArmouriesOfTheSecondEmpire).

#### Natural Armour
Many creatures have Natural Armour, and so might you through strange Powers. Natural Armour grants an armour value, cannot be doffed and is always 'light', i.e. never limits Reflexes. Like other body armour, it does not stack, so to benefit from greater armour values, you must wear armour with a greater value than your natural armour.

#### Cover
Cover is functionally unchanged from 5e. Cover is a bonus to your Defence, a +2 for 'Half Cover' and a +5 for 'Three Quarters Cover'. This is independent of Armour and Evasion, so consider it part of your Base Defence. Additionally, these bonuses apply to Reflex Saves.

### Conditions
The following are changes and additions to 5e's conditions (I will in time port all the conditions over including an overhaul of exhaustion).

Note that durations have been separated from Conditions, so every condition, when inflicted, should also state their duration (1 Round, 1 hour etc.). If a Condition is inflicted that Round, if necessary, roll Initiative to see if the condition applies before or after the target's actions. 

Exhaustion does not have a duration in-so-far-as any applied level of Exhaustion always requires a Long Rest to remove, so its duration is in affect "until the next Long Rest", and then of course only reducing the effect by 1 level.

As a short hand, Stunned is just Incapacitated for 1 round, so that obviously doesn't require a duration statement, and it is implied that Incapacitated occurs for more than 1 Round.

Note that "Paralyzed" is carried over, but now functions the same as "Incapacitated".

Note that the severity of some conditions follow levels of intensity, making it easier to know what does what: 

> Immobilised -> Incapacitated / Paralyzed / Stunned  -> Unconscious
> 
> Immobilised -> Restrained

- **Blinded / Deafened** - A blinded / deafened character can’t see / hear and automatically fails any ability check that requires sight / hearing. If your Attacks rely on this sense, they are made at Disadvantage.
- **Bloodied** - A fan favourite, when enemy characters fall below half health, they enter the "Bloodied" condition. This is purely an descriptive marker though this also often means their behaviour, tactics and even powers may change, becoming more aggressive and desparate. The Bloodied Condition also lets Players know that the target is below half Health. Alternatively, on monsters that have 2 to 3 Wounds, its the condition after 1 Wound.
- **Charmed** - unless otherwise stated, a charmed character considers you an ally and will heed your commands, which you can give freely, to the best of its ability. However it will not obey commands that are against its interests. If it is an intelligent character, you can attempt to persuade or otherwise convince them to obey, or that their interests lie elsewhere. For example, a charmed character will not attack another they consider an Ally, but depending on the situation, they may be persuaded to no longer consider the other character an ally.
- **Concentrating** - when you are using your Concentration on a Spell to maintain its effect. If you take damage, you must make a Willpower save vs the damage (to a minimum of 10) to maintain concentration, otherwise the Spell ends. If you are Concentrating, you cannot use Focus.
- **Exhaustion** - exhaustion applies in "levels". 1 level is recovered after a Long Rest. At the 6th level, you die.
  - The target character suffers a -2 per level of Exhaustion penalty to all checks.
  - The target character suffers a -2 per level of Exhaustion penalty to their maximum Health.
  - The target character suffers a 5ft per level of Exhaustion penalty to their Speed.
- **Flanked** - when you are the one in an Engagement who the foe isn’t Engaging, you have Advantage on your weapon attack rolls. You cannot flank a character 2 or more sizes larger than you.
- **Frightened** - A Frightened character has Disadvantage on Ability checks and Attack rolls while the source of its fear is within line of sight. If it chooses to Move, the character must move away, or otherwise out of line of sight, from the source of its fear. The character doesn’t have to move into obviously dangerous ground, such as a fire or a pit.
- **Immobilised** - the target character cannot take the Move Action. Additionally, the target must use its Stationary Defence.
- **Incapacitated**
  - The target character is Immobilised.
  - The target character cannot take Actions or Bonus Actions.
  - The target character has Disadvantage on Reflex saves.
  - Attack rolls against the target character have Advantage.
- **Pained** - the target character must succeed on a Concentration check to do any Action.
- **~~Paralyzed~~** - unified with Incapacitated
- **Prone**
  - A prone character's Speed is at 1/4
  - A prone character can stand up as an Action and end the condition.
  - A prone character has Disadvantage on attack rolls with weapons that do not have the Prone Fighting property.
  - An attack roll against the prone character has Advantage if the attacker is within reach. Otherwise, the attack roll has Disadvantage.
- **Restrained** - the target character is Immobilised and Attack rolls against them have Advantage, and the target character's attack rolls have Disadvantage.
- **Poisoned** - A poisoned character has Disadvantage on attack rolls and ability checks. (Kinda lame)
- **Sluggish** - the target character can take an Action OR a Bonus Action, not both.
- **Stunned** - the target character is Incapacitated for the Round.
- **Unconscious**
  - The target character is Incapacitated, can’t speak, and is unaware of its surroundings
  - The target character drops whatever it’s holding and falls Prone.
  - The target character automatically fails Reflex saving throws.
  - Attack rolls against the target character have Advantage.

The following enviromental damage rules are updated and rolled into Conditions of the corresponding name:
- **Burning (damage, DC)** - A character burns each Round. They take the amount of fire damage noted in brackets alongside the condition, default 1d6, at the start of the Round, and can take an Action to extinguish themselves. Burning caused by a spell uses the mage's Magic Save statistic for the DC. Unless another DC is stated, it is a DC 8 Fortitude save to end the Burning condition.
- **Falling** - At the end of a fall, a character takes 1d6 bludgeoning damage for every 10ft it fell, to a maximum of 200ft for 20d6. The character lands prone, unless it avoids taking damage from the fall.
- **Suffocating*** - A character can survive for a number of rounds equal to its Fortitude (to a minimum of 1). At the start of the next turn, it drops to 0 health and is dying, and it can’t regain health or be stabilized until it can breathe again. If it recovers from Dying with a natural 20 and is still Suffocating, it suffers the condition anew as if just running out of breath again.

*Holding breath rules: A character can hold their breath for 1 minute plus their Willpower x 30 seconds (to a minimum of 30 seconds). When a character takes damage, they lose 30 seconds of breath. When a character runs out of breath they're Suffocating.

### Damage Conditions
Each damage type has an associated condition or weapon special effect, which the DM will more liberally apply making damage do more than just Health numbers in most scenarios. Not every instance of each damage type should apply (indeed, the three weapon damage types apply only on crits), but it creates good opportunities for complications for a DM to apply.

#### Physical
- **Bludgeoning** -> **Dazes**
- **Piercing** -> **Penetrates** i.e. Exhaustion (that is to say, accumulated "permanent" damage)
- **Slashing** -> **Bleeds** 
- **Thunder** -> **Deafened**

#### Organic
- **Acid** & Base -> **Pained**
- **Poison** & Disease -> **Poisoned**, hey this condition already exists!
- **Psychic** -> **Sluggish**

#### Energy
- **Fire** -> **Burning**
- **Cold** -> **Exhaustion**
- **Lightning** -> **Stunned**

#### Mystical
- **Necrotic** -> **Sluggish** / **Incapacitated**, depending on the severity
- **Radiant** -> **Charmed** / **Frightened**, depending on the alignments of those involved
- **Force** -> **Poisoned** - think radiation