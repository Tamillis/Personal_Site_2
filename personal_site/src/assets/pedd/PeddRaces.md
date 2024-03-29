# PEDD Races

Let's start banging out them race cards.

### Format
Languages are a skill, and are learned not in-born.

```json
{
    "desc" : "A description of the Race in the Materium Existentiae",
    "stats" : ["Stat +2", "Stat +1", "Stat -1", "Resistance +1"],
    "baseDefence": 8,
    "baseHealth": 6,
    "age" : "Typical mature rate and age of majority, avergage lifespan",
    "size" : "Small or Medium plus typical height and weight values",
    "speed" : "30ft",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.",
    "powers" : ["list", "of racial powers", "this race", "can", "choose from"]
}
```

### Human
```json
{
    "desc" : "Humans represent the best and worst of civilization, and every other part of the spectrum, and are known primarily for their short lives, industriousness, and their lasting institutions.

That they are productive, conscientious, and promiscuous is without doubt, for human nations rule much of all the known Materiae, and even in wild and primal Tlancayo the greatest tribal territories and nations are governed, at least partially, by a human hand.

But \"Humanity\" is not a term usually used to mean the modern human race alone. Any and all of the races that descend from the First Men fall under the umbrella of humanity, be they a \"touched\" bloodline or descendant race. Even the haughty and capricious Eladrin, dwellers and custodians of the Fae Wyld, acknowledge this origin.

Humans, as in modern humans, are said by some to be the purest and most direct descendant of the First Men. The Religion of the Father, and the successor faith, the Everlight, both preach this as fact and unalienable right. Others say that humans are just as corrupted from the First Men as any of the other bloodlines, as they are not capable of the feats the First Men were described as accomplishing.",
    "stats" : ["Any Stat +2", "Any Stat +1", "Any Stat -1", "Willpower +1"],
    "baseDefence": 8,
    "baseHealth": 6,
    "age" : "Humans reach adulthood in their late teens and live less than a century.",
    "size" : "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
    "speed" : "Your base walking speed is 30ft",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.",
    "powers" : ["Extra Language", "Prodigy", "Natural Aptitude", "Determination", "Mana"]
}
```

### Dwarf

```json
{
    "desc" : "From kingdoms rich in ancient grandeur lost to the Cataclysm, the Dwarves are a people believed to be carved from the roots of mountains, which would certainly describe their supernatural sense for stone. They are so like Men and Little People, just stockier and of a height between them, yet they're utterly unable to form bloodlines. They, of all the races that shun the sun, have no weakness to it. A commitment to family or clan and unearthing lost traditions, and a burning hatred of drow and other dark creatures that kicked them when they were down, are the common threads that unite all dwarves.",
    "stats" : ["Strength +2", "Charisma -1", "Willpower +2", "Constitution +1"],
    "baseDefence": 7,
    "baseHealth": 8,
    "age" : "Dwarves mature slower than humans, until their 30's, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
    "size" : "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium",
    "speed" : "Your base walking speed is 25ft. Your speed is not reduced by wearing heavy armor.",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.
    
    **Darkvision** - You can see in dim light within 60ft of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of grey.
    
    **Stone sense** - You have Tremorsense up to a 15ft radius through earth & stone, when standing on connected ground",
    "powers" : ["Darkvision", "Stout Resilience", "Stonecunning", "Dwarven Toughness", "Ancestors of Stone (Dwarven Fortitude rewrite)"]
}
```

### Elf

```json
{
    "desc" : "Also known as the Fae-touched, Elves are a magical people of otherworldly bearing. The Fey drifted to one of two fates; living in places of ethereal natural beauty and terrible primalcy, in the midst of ancient forests of darks roots, in oases of deep deserts, in the watery depths of vibrant coral reefs; or to the courts and intrigues of mortal cities, crafting in silvery spires glittering with magic, where soft music drifts through the air and gentle fragrances waft on the breeze to counter city stench rising from the dirt streets below. Coming to be called Wild Elves and Grey Elves respectively, all Elves love life, as even now they're a reflection of the pre-world that made them.",
    "stats" : ["Dexterity +2", "Intelligence +1", "Strength -1", "Reflexes +1"],
    "baseDefence": 9,
    "baseHealth": 5,
    "age" : "Although elves reach physical maturity at about the same age as humans (unless the child doesn't wish to group up yet), the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old, with Elves deep in the glades rumoured to never age.",
    "size" : "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
    "speed" : "Your base walking speed is 35ft.",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.
    
    **Keen Senses (Sight)** - You can see further and clearer than other races, details rising to notice faster. You add your Bonus to any Perception checks for sight, when no Skill is in use.",
    "trance" : "**Trance** - Elves cannot sleep. Their blood is severed from dreams. Instead they meditate deeply, remaining conscious. While meditating, Elves make a pale attempt at dreaming; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.",
    "feyAncestry" : "You have advantage on saving throws against being Charmed, and magic can't put you to Sleep.",
    "powers" : ["Darkvision", "Superior Darkvision & Sunlight Sensitivity", "Drow Magic", "Arcane Aptitude (Bonus Cantrip)", "Fleet of Foot", "Mask of the Wild/Urbane", "Heritage of the Sea", "Elven Accuracy", "Drow High Magic", "Fey Teleportation", "Wood Elf Magic", "Everchanging Nature", "Mana"]
}
```

### Gnome

```json
{
    "desc" : "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes live, at least for the time they're there. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter cries of 'Eureka'!
    
Gnomes are infected with the desire to be where the action is, or simply to *be* the action. They are prone to travel, to follow the other races to see what's going on, as ever since leaving the Fractal Dream they fall prey to a sickness or palsy if they can't sate their curiosity.

They are particularly present at the borders between peoples where, as they see it, the fun really is. That gnomish curiosity has a twofold tragic downside though. Often, they are caught in many a crossfire between conflicting groups, distrusted as travellers, foreigners and potential spies. Secondly, many of them fall into what others call \"Mist Madness\". This almost uncontrollable wanderlust takes over when at the Mistal breaches, and few Gnomes can stare at that ever-changing fractal joy and not be taken by the desire to walk deep within it. Most are never seen again. Of the very few who return from such an investigation, they are inevitably changed, often hailing from different materiae. And times.",
    "stats" : ["Intelligence +2", "Accuracy +1", "Perception -1", "Willpower +1"],
    "baseDefence": 11,
    "baseHealth": 4,
    "age" : "Gnomes mature at the same rate as humans, and most are expected to settle into adult life around the age of 40. They can live to 350 years on average, but it's not too uncommon for them to reach 500 years of age.",
    "size" : "Gnomes are between 3 and 4 feet tall and weigh around 40 pounds. Your size is Small.",
    "speed" : "Your base walking speed is 25ft.",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.",
    "gnomeCunning" : "Magic and formulae comes to your people easily, and can be just as easily refuted. You have advantage on all Willpower saves against magic and memetics",
    "powers" : ["Darkvision", "Fey Ancestry", "Speak with Small Beasts", "Natural Illusionist", "Natural Artifice", "Tinkerer", "Wonder Maker", "Scribe's Insight", "Svirfneblin Magic", "Nimble & Squat Nimbleness", "Psychic Sense", "Mist Mad", "Everchanging Nature", "Mana"]
}
```

### Halfling
```json
{
    "desc" : "Humans call them Halflings, but they call themselves \"The Little People\" in their own language, which by-and-large they keep secret. Their origins are much of a mystery, though they are ubiquitous, sometimes more so even than humans, with whom they have been working hand in hand with since the beginning of time, oft retold in the household tale of \"The First Fast Friendship\". Halflings covet and espouse the comforts of home, and work readily with others, well known for their loyalty to their friends, halfling or otherwise.
    
Little Peoples can be found across the shards, of course, making up members of tribes, villages and cities throughout the whole of the Materiae. The one little-known exception is The Shard of Three Isles, where they are mysteriously and curiously absent. Often times Halfling societies are uniformly Halfling, peaceful shires of little round houses and pleasant gardens, far from marauding monsters and clashing armies. Sometimes, the little folk are often found underfoot in the cities and towns of the world, making up significant portions of settlements and tribes the shards over, with families forming districts within cities where the building regulations tend to fit a smaller clientele, greasing the wheels and filling the stomachs of civilisation.",
    "stats" : ["Charisma +1", "Dexterity +1", "Constitution +1"],
    "baseDefence": 10,
    "baseHealth": 5,
    "age" : "Typical mature rate and age of majority, avergage lifespan",
    "size" : "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is small.",
    "speed" : "Your base walking speed is 25ft",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.",
    "lucky" : "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new result, even if it is a 1.",
    "brave" : "You have advantage on saving throws against being Frightened.",
    "powers" : ["Extra Language", "Fleet of Foot", "Nimble & Squat Nimbleness", "Naturally Stealthy", "Stout Resilliance", "Psychic Sense", "Bountiful Luck", "Second Chance"]
}
```

### Half-Elf
```json
{
    "desc" : "One of the most common and well known of the bloodlines are the Fey Touched of the green blood, the Half Elves. Having had their bloodline meddled by fey powers, they bare resemblance to the folk that hail from there. Ever since the green flight and Elves flocked to the cities and courts, they've become a fairly common member of many a shard. 
    
Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human industriousnous, inventiveness, and ambition tempered by the refined senses, love of subtlety, and artistic tastes of the elves.",
    "stats" : ["Charisma +2", "Any Stat +1", "Any Stat -1", "Reflexes +1"],
    "baseDefence": 8,
    "baseHealth": 6,
    "age" : "Half-elves age at much the same rate as humans, reaching adulthood in their late teens. Depending on the strength of the Fae-Touch, they live much longer than humans, exceeding 3 centuries.",
    "size" : "Half-elves are more or less the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
    "speed" : "Your base walking speed is 30ft",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.",
    "versatileHeritage" : "Your people pull on a broad history of mixing between human and fae, and each Half-Elf is as distinct from each other as an elf is to a man. You pick 3 Racial Powers instead of 2.",
    "powers" : ["Keen Senses", "Fey Ancestry", "Extra Language", "Darkvision", "Prodigy", "Drow Magic",  "Arcane Aptitude (Bonus Cantrip)", "Fleet of Foot", "Mask of the Wild/Urbane", "Heritage of the Sea", "Elven Accuracy", "Drow High Magic", "Fey Teleportation", "Wood Elf Magic", "Mana"]
}
```

### Tuskman
```json
{
    "desc" : "The orc God took some First Men, and in an attempt to spite and better the other Gods, \"blessed\" them. Concentrating their life energy, He made them tall, savage, strong and fast breeding, shorter lives spans a worthy sacrifice for warriors who should die on the field. He made them mottled green, sand tan and the dark pitch of marsh peate to conceal themselves, and most importantly He made them as equally full of rage as He; even as it corrupted and wilted their minds. He charged His progeny to sally forth into the world and make life tremble and fear His name. The orcs, minds twisted, did so with gusto.

The ancient legends tell of great orc hordes, crusades of the Red if you will, sweeping from horizon to horizon, burning and pillaging, reaving and looting all in sight, all in honour of Gruumsh. Orcs spread and multiplied until they covered the world, the pride of Gruumsh, and kingdoms of Eden had to rally great armies to push them back. The Legions of Terror would have such an impact their legacy would echo well after the Shattering.

However, the curse is now old enough to be more myth than legend. Today most can throw the yolk of their anger off entirely, or at least keep it contained as the 'red rage'. They join civilized society or form more stable societies of their own, apart from the raving orc hordes, and call themselves the Tuskmen and they fight against the legacy of their ancestors.",
    "stats" : ["Strength +2", "Dexterity +1", "Charisma -1", "Constitution +1"],
    "baseDefence": 8,
    "baseHealth": 8,
    "age" : "Tuskmen mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years",
    "size" : "Tuskmen are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
    "speed" : "Your base walking speed is 30ft",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.
    
    **Keen Hearing and Smell** - You have advantage on Perception checks that rely on hearing or smell.",
    "redRage" : "Even now your people bear Grummsh' mark, and though any tuskman can throw off the yolk, sometimes they choose to indulge. In addition to your Racial Power choices, you can also take either: Orcish Fury, Orcish Aggression, Menacing, Relentless Endurance, Savage Attacks or Savage Magic.",
    "powers" : ["Extra Language", "Keen Senses", "Stout Resiliance", "Natural Camouflage" "Darkvision", "Hunter's Intuition", "Orcish Fury", "Orcish Aggression", "Menacing", "Relentless Endurance", "Savage Attacks", "Savage Magic", "Cursed"]
}
```

### Dragonborn
```json
{
    "desc" : "At some point in history, the first dragon made the first dragonborn out of a First Man, shaping it into its own likeness. To what end is unknown and lost to time, but now various dragons over the ages have made their own dragonborn, out of jealous imitation or genuine desire, or perhaps on the whimsy of granting a mad man's request. Those twisted by the dragon's curse gain many physical benefits and magical powers, not least biological immortality, but many revile their visage and the dragon madness; that hungering greed, the hollowing emptiness that can never be filled.
    
The dragonborn walk lightly through a world that greets them with fearful incomprehension. Some dragonborn are faithful servants to true dragons, especially the metallic guardians of the Edict, others form the ranks of soldiers in travelling mercenary bands, and still others find themselves keeping to secluded clans based strictly on their chromatic hue, perservering up to the present. With their heritage always setting them apart, tying them eternally to creatures powerful and anathema to humanity, such individuals must struggle to make their way in life.

Dragonborn are technically a human bloodline, and can even mingle and produce offspring with their soft-skin cousins, but the magic that made them was primeval and strong, and the children of such unions are, the vast majority of the time, dragonborn themselves, fully inflicted with the dragon's curse. Such is the strength of that primeval magic, that dragonborn do not have mixed blood, and cannot hold onto other Touches.",
    "stats" : ["Strength +2", "Charisma +1", "Accuracy -1", "Willpower +1"],
    "baseDefence": 8,
    "baseHealth": 8,
    "age" : "Young dragonborn grow quickly. They walk hours after leaving the pouch, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 14. Draconic energy sets them apart, and they don't grow old, only slowly increasing in size year by year until death takes them, typically violence from the fearful or starvation from lack of sustanence for the constant growth.",
    "size" : "Young dragonborn are on par with humans in height and weight, but adult dragonborn are taller and heavier, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium. Rare senior Dragonborn stand over 9 feet tall and their size is Large, in which case their Base Defence is 6 and their Base Health is 9. Mythical Ancient Dragonborn are said to be as tall as giants, their size being Huge, but such rare and terrible creatures are not fit for Player Characters.",
    "speed" : "Your base walking speed is 30ft.",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.",
    "draconicAncestry" : "You are distantly related to a particular kind of dragon. Choose a type of dragon from the table below; this determines the effect, area and type of your breath weapon.
    
    | Dragon Ancestry | Effect | Area | Save |
    | --- | --- | --- | --- |
    | Black | Acid - 3d6 fire damage on a failed save, and half as much damage on a successful one. | 5ft by 30ft line | Reflex save |
    | Blue | Lightning - 3d6 lightning damage on a failed save, and half as much damage on a successful one. | 5ft by 30ft line | Reflex save |
    | Brass | Sleep - On a failed save, the character falls unconscious for 1 minute. This effect ends for a character if the character takes damage or someone uses an Action to wake it.| 5ft by 30ft line | Willpower save |
    | Bronze | Repulsion - On a failed save, the character is pushed to the nearest free space at the end of the effect's line area. | 5ft by 30ft line | Reflex save |
    | Copper | Slow - On a failed save, the character's speed is halved, and it can't make more than one attack in the Round, and they can use either an Action or a Bonus Action in the Round, but not both. These effects last for 1 minute. The character can repeat the saving throw at the end of each Round, ending the effect on with a successful save. | 5ft by 30ft line | Willpower save |
    | Green | Poison - 2d6 poison damage and suffer the Poison condition on a failed save, or half as much damage on a successful one. | 15ft cone | Constitution save |
    | Gold | Weaken - On a failed save, the character has disadvantage on Strength-based attack rolls, Strength checks, and Constitution saving throws for 1 minute. A character can repeat the saving throw at the end of each Round, ending the effect on itself on a success. | 15ft cone | Constitution save |
    | Red | Fire - 3d6 fire damage on a failed save, and half as much damage on a successful one. | 15ft cone | Reflex save |
    | Silver | Paralyse - on a failed save, the character is paralyzed for the next Round. | 15ft cone | Constitution save |
    | White | Cold - 3d6 cold damage on a failed save, and half as much damage on a successful one. | 15ft cone | Constitution save |

    **Breath Weapon** - You can use your Action to exhale primeval draconic energy. When you use your breath weapon, all characters in the area must make a saving throw, the type of which is determined by the Ancestry table above, against the effect described. The DC of the save is 8 + your Constitution + your Bonus. You may use your breath weapon a number of times equal to your Constitution (minimum 1). You regain expended uses on a Short Rest.
    ",
    "powers" : ["Darkvision", "Draconic Language", "Draconic Resistance", "Draconic Warding", "Improved Breath Weapon", "Dragon Wings", "Dragon Fear", "Dragon Hide", "Mana", "Cursed"]
}
```

### Goblinoid
```json
{
    "desc" : "A description of the Race in the Materium Existentiae",
    "stats" : ["Stat +2", "Stat +1", "Stat -1", "Resistance +1"],
    "baseDefence": 8,
    "baseHealth": 6,
    "age" : "Typical mature rate and age of majority, avergage lifespan",
    "size" : "Small or Medium plus typical height and weight values",
    "speed" : "30ft",
    "senses" : "You have the typical 5 senses of touch, taste, sight, sound and smell.",
    "powers" : ["list", "of racial powers", "this race", "can", "choose from"]
}
```