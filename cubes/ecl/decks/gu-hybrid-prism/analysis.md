---
deck_name: "gu-hybrid-prism"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GU"
format: "40-card"
built_at: "2026-08-10T20:29:30Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  9x Forest                   basic
  7x Island                   basic
  2x Tangled Islet            ({T}: Add {G} or {U}.) This land enters tapped.
```

### CREATURES (17)

```
CMC  Card                     Qty   Color Role                                          Rar
  2  Bloom Tender             x1    G     Engine & Infrastructure                       M
  2  Foraging Wickermaw       x1    C     Engine & Infrastructure                       C
  2  Mischievous Sneakling    x2    BU    Engine & Infrastructure                       C
  2  Tam, Mindful First-Year  x1    GU    Engine & Infrastructure                       R
  3  Gangly Stompling         x2    GR    Threats/Payoffs                               C
  3  Rimekin Recluse          x1    U     Interaction                                   U
  3  Wary Farmer              x2    GW    Engine & Infrastructure                       C
  4  Luminollusk              x1    G     Interaction                                   U
  5  Glister Bairn            x2    GU    Threats/Payoffs                               U
  6  Prismabasher             x2    G     Threats/Payoffs                               U
  6  Shinestriker             x1    U     Engine & Infrastructure                       U
  7  Wildvine Pummeler        x1    G     Threats/Payoffs                               C
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                     Qty   Color Role                                          Rar
  1  Blossoming Defense       x1    G     Interaction                                   U
  1  Spell Snare              x1    U     Interaction                                   U
  3  Unforgiving Aim          x1    G     Interaction                                   C
  7  Rime Chill               x1    U     Interaction                                   U
```

### OTHER SPELLS (1)

```
CMC  Card                     Qty   Color Role                                          Rar
  2  Shimmerwilds Growth      x1    G     Engine & Infrastructure                       U
```

## SIDEBOARD (10)

```
Card                     Qty   Color Role / When to board in
Chitinous Graspling      x1    GU    Flex - anti-flier blocker + colour source - Against the cube's 41 evasion cards (15.8%, its largest threat class): 'Changeling / Reach' on a 3/4 that is also a green-AND-blue permanent and a legal Glister Bairn target.   [C]
Chomping Changeling      x2    G     Hate - artifacts/enchantments - Against the 11 artifacts and 21 enchantments in the cube: 'When this creature enters, destroy up to one target artifact or enchantment'.   [U]
Dawn's Light Archer      x2    G     Flex - anti-flier blocker - Against fliers: 'Flash / Reach' on a 4/2 body ambushes an attacking flier.   [C]
Rooftop Percher          x1    C     Hate - graveyard - Against decks that actually recur from the graveyard: 'When this creature enters, exile up to two target cards from graveyards. You gain 3 life.'   [C]
Spell Snare              x1    U     Flex - stack interaction - Against decks whose key pieces sit at mana value 2: 'Counter target spell with mana value 2'.   [U]
Unforgiving Aim          x1    G     Flex - anti-flier / anti-enchantment - Second copy against the 41 evasion cards: 'Destroy target creature with flying' or 'Destroy target enchantment'.   [C]
Wild Unraveling          x1    U     Flex - stack interaction - Against combo or a single must-answer spell: 'Counter target spell'. Board in only when a creature you can afford to blight is expendable, or when you can pay the {1} instead.   [C]
Wistfulness              x1    GU    Hate - artifact/enchantment on a threat - When an opposing artifact or enchantment must die and you still want a body: 'if {G}{G} was spent to cast it, exile target artifact or enchantment an opponent controls' on a 6/5.   [M]
```

## ANALYSIS

### DECK IDENTITY

A two-colour Simic manabase that fields a four-to-five-colour board. Every off-colour permanent arrives on a hybrid card castable with a Forest or an Island - Mischievous Sneakling is blue AND black off one Island, Gangly Stompling is red AND green off one Forest, Wary Farmer is green AND white off two Forests - so the deck raises the Vivid count without ever needing a Plains, Swamp or Mountain. Shimmerwilds Growth paints a land a permanent extra colour and ramps; Foraging Wickermaw and Tam paint any missing colour on demand. The Vivid payoffs then cash that count in: Glister Bairn pumps every combat, Prismabasher pumps the team on entry, and Rime Chill and Wildvine Pummeler get cheaper as the count rises, so the deck's answers and its top end both scale with its own engine.

### THE CENTRAL FINDING: LANDS ARE COLORLESS

The archetype brief for this cube says the Vivid deck is supported by "15 dual lands". Read against oracle text, that is false in the way that matters. Every Vivid card asks for **the number of colors among permanents you control**, and a land is a colorless permanent - `Tangled Islet`'s entire text is "({T}: Add {G} or {U}.) This land enters tapped." Nothing in it makes it green or blue. Fifteen duals let you *cast* five colours; they contribute **zero** to X.

What actually raises X is the mana **cost** of the cards you play, not their text - and a hybrid card is both of its colours while castable with only one of them:

| Card | Cost | Colours on the battlefield | Castable off |
|---|---|---|---|
| Mischievous Sneakling | {1}{U/B} | blue **and** black | one Island |
| Gangly Stompling | {2}{R/G} | red **and** green | one Forest |
| Wary Farmer | {1}{G/W}{G/W} | green **and** white | Forests only |
| Glister Bairn | {2}{G/U}{G/U}{G/U} | green **and** blue | either basic |

Three cards - Sneakling, Stompling, Wary Farmer - put black, red and white onto the battlefield off a manabase of nothing but Forests and Islands. That is the whole deck: **a two-colour manabase fielding a five-colour board.**

### WHAT X ACTUALLY IS

The honest number matters, because five cards in this list are priced off it. A draw-only Monte Carlo over the 13 cards seen by turn 6 - ignoring mana, removal and blocks, so a strict upper bound - gives:

| X | P |
|---|---|
| 2 | 0.02 |
| 3 | 0.11 |
| 4 | 0.25 |
| 5 | 0.62 |

E[X] = 4.48, P(X>=4) = 0.87. The list is therefore priced at **X=4 with X=5 as upside**: `Rime Chill` is a {2}{U} instant that taps two creatures, stuns them and cantrips; `Wildvine Pummeler` is a {3}{G} 6/5 with reach and trample. At X=5 they become {1}{U} and {1}{G}.

### THE KILL

`Prismabasher` is the alpha strike: a 6/6 trampler whose ETB reads "up to X target creatures you control get +X/+X until end of turn". At X=4 across three other bodies that is +16 power in a single swing, on top of its own 6. `Glister Bairn` is the grind: "at the beginning of combat on your turn, another target creature you control gets +X/+X" - a triggered ability, so it cannot be countered, and it fires every turn it survives. Note the wording: **another** target creature, exactly one per combat. That single pumped attacker is the deck's entire lethal package on any given turn, which is why `Blossoming Defense` ({G}, hexproof at instant speed) earns a maindeck slot that a bigger protection spell would not.

### THE ONE PIECE OF REAL FIXING

`Shimmerwilds Growth` is the only card in the deck that both paints a colour permanently and produces extra mana: "Enchanted land is the chosen color... Whenever enchanted land is tapped for mana, its controller adds an additional one mana of the chosen color." It was nearly cut for the classic Aura risk of being two-for-oned - until a sweep of all 282 pool cards found **zero** cards that destroy or return a land, and only 4 of 260 (1.5%) that answer an enchantment at all. In this cube the Aura risk is a number, and the number is small.

### WHAT THIS DECK CANNOT DO

Two classes are conceded in writing rather than papered over. It has **no answer to a wide board** - the pool's only two sweepers are red and blue-red, and the nearest G/U effect is `Wanderwine Farewell` at {5}{U}{U} for two permanents. And it has **one flier in nineteen creatures** against a cube that is 15.8% evasion. Both concessions are the same trade: every slot spent on a green-only reach body is a slot not spent on an off-colour source, and lowering X lowers every payoff in the deck simultaneously.

### ON THE RARE BUDGET

This build uses **three** rare/mythic cards - `Tam, Mindful First-Year`, `Bloom Tender`, `Wistfulness` - well inside the original 5-card cap even though you lifted it. That is not luck: the Vivid payoffs are uncommons and commons, and the hybrid colour-supply shell is entirely commons and uncommons. The rare cap costs this build essentially nothing. It is Paths B and C where it bites, because a true five-colour manabase spends the whole budget on shocklands.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (22 nonland):  1:2  2:6  3:6  4:1  5:2  6:3  7:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.6: Glister Bairn@0.9, Glister Bairn@0.9, Wildvine Pummeler@0.8) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.7: Foraging Wickermaw@0.7) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 33%  T2 87%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No card castable off G/U in this 282-card pool answers a wide board: the pool's only two sweepers are red and blue-red, and the nearest G/U effect is Wanderwine Farewell {5}{U}{U}, which returns at most two nonland permanents. Mitigating would mean splashing red for a sweeper, which would add tapped duals to a manabase whose entire consistency argument is that it needs only Forests and Islands. The deck instead races: Prismabasher's 'up to X target creatures you control get +X/+X' across three bodies is roughly +16 power in one swing at X=4.
  OK        single_large_threat: Rimekin Recluse, Luminollusk, Rime Chill
  OK        noncreature_permanents: Unforgiving Aim
  OK        stack: Spell Snare
  CONCEDED  graveyard: No mainboard graveyard interaction; the deck's clock (Prismabasher/Glister Bairn converting a four-to-five-colour board into lethal by turn 6) races graveyard-value decks, and Rooftop Percher in the sideboard exiles two graveyard cards when the matchup demands it.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Rime Chill and Wildvine Pummeler both read 'costs {1} less to cast for each color among permanents you control', so surplus lands buy a second spell per turn rather than sitting idle; Foraging Wickermaw's '{1}: Add one mana of any color. This creature becomes that color' converts a spare mana into a colour each turn; and Shimmerwilds Growth's 'Whenever enchanted land is tapped for mana, its controller adds an additional one mana of the chosen color' makes one land produce two. |
| screw | mitigation | Two-land hands are keepable because the deck's colour engine costs two and splits evenly across the two basics: Foraging Wickermaw {2} casts off anything, Tam {1}{G/U} off either basic, Bloom Tender {1}{G} and Shimmerwilds Growth {1}{G} off a Forest, Mischievous Sneakling {1}{U/B} off an Island. Bloom Tender then adds mana toward the four-drops (it is a mana ability, not a dig). The goldfish check measures 87% keepable hands and 92% three-lands-by-turn-three. |
| decapitation | mitigation | The colour count is not held by one card: white comes from Wary Farmer x2, black from Mischievous Sneakling x2, red from Gangly Stompling x2, and Foraging Wickermaw, Shimmerwilds Growth or Tam can supply any of the three. Removing Tam - the highest-impact single card - costs one colour source out of nine, not the plan. On the payoff side there are five copies (Glister Bairn x2, Prismabasher x2, Wildvine Pummeler). |
| gas-out | mitigation | Shinestriker reads 'draw cards equal to the number of colors among permanents you control' - a four-to-five card refill on a 3/3 flier. Rime Chill ends 'Draw a card', and Wary Farmer surveils on each turn a creature entered. Resource ledger: 2 of 22 nonland cards are Cards: Net-Positive or Self-Replacing (Shinestriker, Rime Chill), which is thin and stated as such - the deck is built to convert the board into a win before the hand empties, and the sideboard does not fix this. |
| raced | accepted | The cube's fastest clocks are evasion-based (41 evasion cards, 15.8% density) and this list has one flier of its own. Mitigating properly would mean maindecking reach and anti-flier bodies in place of colour sources, which would directly lower X in every payoff's oracle text - the cost is the archetype itself. The concession is bounded: Luminollusk's deathtouch trades with any single large attacker, Rime Chill stuns two attackers, and Dawn's Light Archer x2 ('Flash / Reach') plus Chitinous Graspling ('Changeling / Reach', 3/4) sit in the sideboard for the matchups where racing is the actual problem. |
| disruption-fizzle | mitigation | The critical turn is a combat step, not a spell. Glister Bairn's pump is a triggered ability 'at the beginning of combat on your turn', so countering spells does not stop it - only removing the Bairn itself does. Against targeted removal on the pumped attacker, Blossoming Defense gives 'hexproof until end of turn' for {G} at instant speed, and Tam grants 'each other creature you control has hexproof from each of its colors'. If the Prismabasher line is answered, Glister Bairn re-pumps every subsequent combat and Wildvine Pummeler provides a second 6-power trampler. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Aurora Awakener (M) | RARE/MYTHIC CUT. {6}{G} 7/7 with no cost reduction of its own; this build's 18-land tempo curve cannot reliably reach seven mana by the thesis turn of 6. It is the anchor of the Path C build instead. |
| Squawkroaster (U) | '*/4 ... power equal to the number of colors among permanents you control' is a genuine payoff, but {3}{R} is not castable off a Forest/Island manabase - it needs real red sources. |
| Shimmercreep (U) | {4}{B} drain-X is a strong payoff but requires actual black mana; this deck's black arrives only on hybrid permanents cast with blue. |
| Kithkeeper (U) | {6}{W} with no cost reducer; needs white mana AND seven lands, neither of which this build has. |
| Explosive Prodigy (U) | {1}{R} Vivid removal, uncastable off GU. |
| Sanar, Innovative First-Year (R) | RARE CUT. {2}{U/R}{U/R} is castable off {2}{U}{U}, but its trigger reveals until X NONLAND cards and exiles one per colour - an engine for a grindier build. Used in Paths B and C. |
| Prismatic Undercurrents (U) | TIER-BELOW UNCOMMON. Contested absence from the grill. A 4-mana enchantment that adds 0 power and exactly one colour - green, the colour this deck already has most of. Its extra land drop matters less at 18 lands, and the deck's scarce resource is off-GU colour, which it does not supply. First swap-in if the list wants more grind. |
| Puca's Eye (U) | TIER-BELOW UNCOMMON. Its repeatable mode reads 'Activate only if there are five colors among permanents you control', and P(X=5) by turn 6 is 0.62 as a draw-only upper bound - the mode is off more than a third of the time in the most favourable model. |
| Voracious Tome-Skimmer (U) | TIER-BELOW UNCOMMON. Contested absence from the grill. A 2/3 flier that is also a black source, but {U/B}{U/B}{U/B} is UUU on turn three off nine blue sources; the 3-drop slot goes to Gangly Stompling and Wary Farmer, which each need one coloured pip. Swap in if the manabase moves bluer. |
| Eclipsed Kithkin (U) | TIER-BELOW UNCOMMON. Contested absence from the grill. A 2-mana white source that digs for a Forest, but a 2/1 dies to the cube's 4/2 bodies; the pump plan needs creatures that survive to be pumped, which is why Wary Farmer's 3/3 holds the slot. |
| Selfless Safewright (R) | RARE CUT + contested absence. 'Flash / Convoke / ... Other permanents you control of that type gain hexproof and indestructible until end of turn' covers 8 of 17 creature cards by naming Elemental, but at {3}{G}{G} it does the job Blossoming Defense does for {G} on the one creature that actually carries the pump. |
| Omni-Changeling (U) | Contested absence from the grill. Entering as a copy of Prismabasher yields a MONO-GREEN 6/6 - it supplies one colour to X while occupying a slot that currently supplies an off-GU colour. |
| Sunderflock (R) | RARE CUT. 'Costs {X} less to cast, where X is the greatest mana value among Elementals you control' - the deck's Elementals top out at MV 6, so it is a 9-mana card discounted to 3 only after a 6-drop already resolved. |
| Mirrorform (M) | MYTHIC CUT. 'Each nonland permanent you control becomes a copy of target non-Aura permanent' - copying the board collapses the colour count to one colour, directly anti-synergistic with every Vivid card. |
| Stalactite Dagger (C) | 'create a 1/1 colorless Shapeshifter token' - both the token and the Equipment are colourless, adding 0 to X. |
| Mutable Explorer (R) | RARE CUT. Its Mutavault token is a LAND with '{T}: Add {C}' - colourless, contributing 0 to colour count. |
| Moon-Vigil Adherents (U) | 0/0 that grows off creature count and graveyard; this build's creatures stay on the battlefield rather than filling a graveyard, and it adds only green to X. |
| Glen Elendra Guardian (R) | RARE CUT. A 3/4 flash counter-a-noncreature-spell; a fine card that adds only blue to X, in a deck whose scarce resource is off-GU colour. |
| Loch Mare (M) | MYTHIC CUT. A 4/5 for {1}{U} with three -1/-1 counters and draw/stun modes; strong generically but adds only blue to X. |
| Prideful Feastling (C) | {2}{W/B} - a white-AND-black permanent, but neither pip can be paid with G or U mana. |
| Eclipsed Realms (U) | '{T}: Add one mana of any color. Spend this mana only to cast a spell of the chosen type...' - the deck's creatures span Ouphe, Shapeshifter, Kithkin, Merfolk, Elemental and Elf, so any single chosen type covers a minority of the list. |
| Wild Unraveling (C) - moved to sideboard | SIDEBOARD CONSIDERATION. 'blight 2 or pay {1}' as an additional cost: of 17 creature cards, blight 2 kills Mischievous Sneakling, Tam, Bloom Tender, Gangly Stompling and Rimekin Recluse (two of which are the deck's only black and red sources) and neuters Luminollusk 2/4 to 0/2. Only 3 of 17 keep their function. Board it in when the {1} can be paid comfortably. |
| Rooftop Percher (C) - trimmed to 1 | SIDEBOARD CONSIDERATION. A 5-mana 3/3 that exiles two graveyard cards once. The cube's 39-card graveyard roster conflates 'fills graveyards' with 'profits from graveyards', so the second copy went to Chitinous Graspling against the cube's larger evasion class (41 cards, 15.8%). |
| Dawn's Light Archer (C) | SIDEBOARD CONSIDERATION. 'Flash / Reach' 4/2 - the ambush blocker for the raced failure mode, deliberately kept out of the mainboard because a green-only body lowers nothing but also raises nothing in X. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.55   Ramp cards: 3   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.90 adj [MV 3.55 vs 2.5, 3 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  G  demand  66.7%  prod  61.1%  gap  +5.6pp  [OK]
  U  demand  33.3%  prod  50.0%  gap -16.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  check1_deck_size: mainboard=40 (need 40), sideboard=10 (need 10)
  check2_membership: PASS
  check3_copies: PASS
  check3b_rare_mythic: 3 rare/mythic cards: ['Bloom Tender', 'Tam, Mindful First-Year', 'Wistfulness']
  check4_colour_usability: PASS
  check5_splash: PASS
  overall: PASS
```
