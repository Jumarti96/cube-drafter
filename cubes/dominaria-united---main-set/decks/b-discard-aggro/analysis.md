---
deck_name: "b-discard-aggro"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "B"
format: "40-card"
built_at: "2026-08-20T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  17x Swamp
```

### CREATURES (9)

```
CMC  Card                        Qty   Color Role                               Rar
  1  Battlefly Swarm             x2    B     Threat/Payoff                      C
  1  Evolved Sleeper             x1    B     Threat/Payoff                      R
  2  Knight of Dusk's Shadow     x2    B     Threat/Payoff                      U
  2  The Raven Man               x1    B     Threat/Payoff                      R
  2  Toxic Abomination           x1    B     Threat/Payoff                      C
  3  Braids, Arisen Nightmare    x1    B     Engine/Infrastructure              R
  4  Defiler of Flesh            x1    B     Threat/Payoff                      R
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                        Qty   Color Role                               Rar
  1  Bone Splinters              x1    B     Interaction                        C
  1  Cut Down                    x2    B     Interaction                        U
  2  Pilfer                      x2    B     Engine/Discard                     C
  2  Tribute to Urborg           x2    B     Interaction                        C
  3  Aggressive Sabotage         x2    B     Engine/Discard                     C
  4  Extinguish the Light        x2    B     Interaction                        C
```

### OTHER SPELLS (3)

```
CMC  Card                        Qty   Color Role                               Rar
  1  Vanquisher's Axe            x1    C     Threat/Payoff                      C
  3  Braids's Frightful Return   x1    B     Engine/Discard                     U
  3  Liliana of the Veil         x1    B     Engine/Discard                     M
```

## SIDEBOARD (10)

```
Card                        Qty   Color Role / When to board in                                      Rar
Choking Miasma              x2    B     Hate — wide boards — vs. token and go-wide decks; 'All creat U
Splatter Goblin             x2    B     Flex — anti-aggro / removal on a body — vs. fast starts and  C
Phyrexian Rager             x2    B     Flex — grind / anti-attrition — vs. removal-heavy control de C
Cult Conscript              x2    B     Flex — resilient body vs. sweepers — vs. sweeper decks (6 sw U
Urborg Repossession         x2    B     Flex — recursion vs. sweepers — vs. the cube's 6 sweepers an C
```

## ANALYSIS

### DECK IDENTITY

A mono-black tempo deck that uses hand attack as protection for a cheap evasive clock. Four unconditional opponent-only discard effects (Pilfer x2, Aggressive Sabotage x2) plus Liliana of the Veil's symmetric +1, Braids's Frightful Return chapter I and The Raven Man's repeatable {3}{B} activation strip the answer out of the opponent's hand before it can be cast, and seven pieces of cheap removal deal with whatever they draw live. The damage comes from bodies that are hard to block rather than large: Battlefly Swarm x2 fly for one mana, Knight of Dusk's Shadow x2 have menace and shut off lifegain, Defiler of Flesh grants menace to a creature every time a black permanent spell is cast, Vanquisher's Axe adds +2/+0 to any of them, and The Raven Man banks a 1/1 flier at every end step in which a player discarded. Braids, Arisen Nightmare turns each end step into a card or 2 life and is the deck's only pressure on an artifact or enchantment. Being mono-colour is a real structural advantage here: all 17 lands produce the deck's only colour, so nothing is ever stranded and the curve is never disrupted by fixing.


### MONO-COLOUR IS A CARD, NOT A COMPROMISE

The mana audit reports demand 100% / production 100%, gap 0.0pp — the only one of the three builds with a perfect mana base. That is not a cosmetic win. Four cards demand {B}{B} (Extinguish the Light x2, Defiler of Flesh, Liliana of the Veil), and because every land is a Swamp, the probability of casting them on curve collapses to the probability of simply having enough lands: 88% by turn 3. The deck also gets a turn-1 play in 81% of hands, the highest of the three builds. What it pays for that is stated below.

### DEFILER OF FLESH IS ONLY GOOD IN THIS DECK

The same card was excluded from the black-red build on a count: its cost reduction and its menace trigger both key on **black permanent spells**, and in the BR list only 10 of 23 nonlands qualified — the discount missed the entire removal and hand-attack suite. Here 11 of 23 qualify (10 of the other 22 once it is on the battlefield). That is what earns it a rare slot, and it is also the card that fixes the deck's non-evasive bodies: it grants menace to a creature every time a black permanent resolves.

### THE CONCESSION THAT WAS WRONG

An earlier draft of this deck's coverage declared that mono-black has zero answers to artifacts and enchantments in this pool. The grill showed the reasoning was structurally broken: the dossier's artifact_answers and enchantment_answers lists are keyed by colour, so they exclude every colourless card by construction, and the dossier's own census_caveat warns against exactly that inference. Two pool cards return a usable mono-black mode. Braids, Arisen Nightmare is now maindecked and its end-step "sacrifice an artifact, creature, enchantment, land, or planeswalker" is real (if opponent-elective) pressure on the class. Karn's Sylex is castable too and is deliberately declined — 16 of 23 nonlands cost 2 or less, so any useful X wipes this deck's own board first, and its static "Players can't pay life to cast spells or to activate abilities that aren't mana abilities" would switch off Defiler of Flesh's own discount, which is paid with life.

### THE REMOVAL SUITE HAS A CEILING

Four of the seven interaction slots are size-capped. Cut Down's "total power and toughness 5 or less" cannot kill 63 of the 150 pool creatures with printed power and toughness; unkicked Tribute to Urborg's -2/-2 misses 89 of 150, a strict superset. Unconditional answers are 3 of 23 nonlands, one of which (Bone Splinters) eats one of the 9 threats that constitute the clock. There is no fix available in colour: the only other mono-black removal is a rare with the cap spent, or Choking Miasma, which kills 7 of this deck's own 9 creatures. This is the price of the perfect mana base, recorded rather than hidden.

### WHY THE LAND COUNT DEVIATES UPWARD

The tool recommends 16; the deck runs 17. The grounds are five genuine repeatable mana sinks — Knight of Dusk's Shadow's "{1}{B}: +1/+1" (x2), Evolved Sleeper's ladder ending in a card draw, The Raven Man's "{3}{B}, {T}", Vanquisher's Axe's "Equip {2}", and Braids, Arisen Nightmare, whose end-step sacrifice explicitly accepts a **land**. That last one is the cleanest flood outlet in any of the three decks: a surplus land becomes a card or 2 life without touching a single threat slot.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:7  2:8  3:5  4:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 7.75: Evolved Sleeper@0.8, The Raven Man@0.9, Toxic Abomination@0.7, Vanquisher's Axe@0.45, Defiler of Flesh@0.9) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.6: Braids's Frightful Return@0.6) → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 81%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. The two mono-black-castable sweepers are declined for stated mechanism reasons, not for absence: Drag to the Bottom is a rare and the 5-rare cap is fully spent, and Choking Miasma's 'All creatures get -2/-2' kills 7 of this deck's own 9 creature cards, so it is a sideboard card boarded in only when my board is not the wide one. The mainboard plan against a wide board is to be faster than it — this deck is the aggressor, with 15 of 23 nonlands at mana value 2 or less.
  OK        single_large_threat: Extinguish the Light, Bone Splinters, Liliana of the Veil
  CONCEDED  noncreature_permanents: Planeswalkers only. Extinguish the Light reads 'Destroy target creature or planeswalker', which covers the class outright. Artifacts (15 in cube) and enchantments (18 in cube) are CONCEDED. Braids, Arisen Nightmare is recorded as partial, OPPONENT-ELECTIVE pressure and not as an answer: 'each opponent MAY sacrifice a permanent OF THEIR CHOICE that shares a card type with it', so the opponent picks which artifact dies and a specific problem permanent can never be targeted. Braids's Frightful Return chapter III has the identical defect. Worse, to offer the artifact or enchantment mode at all this deck must sacrifice one of its own, and it runs exactly one artifact (Vanquisher's Axe) and one enchantment (Braids's Frightful Return) - 2 of 40 cards - so firing either mode throws away the card being paid for. The repeatable mode is the LAND sacrifice, which pressures only lands. An earlier draft claimed mono-black has zero answers in this pool, reasoning from the dossier's COLOUR-KEYED artifact_answers/enchantment_answers lists, which structurally exclude every colourless card and which the dossier's own census_caveat warns against reading as absence; that claim was false and is withdrawn. Karn's Sylex ({3}, colourless, castable here) is the one real answer and is DECLINED on two mechanism grounds: 15 of this deck's 23 nonlands cost mana value 2 or less, so any X large enough to matter destroys the aggressor's own board first, and its static 'Players can't pay life to cast spells or to activate abilities that aren't mana abilities' would shut off Defiler of Flesh's own {B} cost reduction, which is paid with 2 life.
  CONCEDED  stack: Black holds no counterspell in this cube. The pre-emptive substitute is hand attack, counted honestly after the grill: 4 of 23 nonlands are UNCONDITIONAL opponent-only discard (Pilfer x2, Aggressive Sabotage x2), plus The Raven Man's repeatable '{3}{B}, {T}: Each opponent discards a card'. Liliana's '+1: Each player discards a card' is symmetric and Braids's Frightful Return chapter I is gated on a sacrifice, so neither is counted here. The substitute is pre-emptive, not reactive: a spell already on the stack cannot be answered by this deck at all.
  CONCEDED  graveyard: The cube contains zero graveyard hate (dossier structural_census: GY hate = 0), so no colour combination can answer graveyard strategies here.
```

No WARN-tier flags — curve and goldfish both PASS, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Five repeatable outlets turn surplus lands into damage or cards, recounted honestly after the grill: Knight of Dusk's Shadow's '{1}{B}: This creature gets +1/+1 until end of turn' (x2), Evolved Sleeper's ladder ending in '{1}{B}{B}: put a +1/+1 counter on it, then you draw a card', The Raven Man's '{3}{B}, {T}: Each opponent discards a card' (which also makes another Bird), Vanquisher's Axe's 'Equip {2}', and Braids, Arisen Nightmare - the strongest flood answer in the deck, because its end-step sacrifice explicitly accepts a land, converting a surplus land directly into a card or 2 life at no cost to the 9 threat slots. This is the reason the land count deviates +1. |
| screw | mitigation | 15 of the 23 nonlands cost 2 or less and every one of the 17 lands produces {B}, so there is no colour-screw failure mode at all — only land-count screw. The goldfish check measures 88% keepable hands, 88% reaching 3 lands by turn 3, and a turn-1 play in 75% of hands, the highest of the three builds. |
| decapitation | mitigation | No single card carries the plan. The Raven Man is a 1-of and the assembly check counts 9 payoff copies (p=0.96) and 6 enabler copies (p=0.88) without needing it. If Defiler of Flesh or Liliana is answered on sight, Battlefly Swarm x2, Knight of Dusk's Shadow x2, Toxic Abomination x2 and Evolved Sleeper still present the clock, and Braids's Frightful Return chapter II ('Return target creature card from your graveyard to your hand') rebuys any answered creature. |
| gas-out | mitigation | Braids, Arisen Nightmare is the answer and it replaced Stronghold Arena during grill repair precisely because it does not require a connection: 'At the beginning of your end step, you may sacrifice an artifact, creature, enchantment, land, or planeswalker... that player loses 2 life and you draw a card.' Its fodder is 17 lands plus 9 creature copies plus Bird tokens, so it draws on turns when the board is stalled or wiped, which is exactly when a tempo deck runs out. Evolved Sleeper's third activation draws for {1}{B}{B} as a repeatable sink, and Braids's Frightful Return chapter III draws. Stated plainly: unconditional card generation from hand is 0 of 23 nonlands - this deck refuels off permanents, not off cantrips, and Phyrexian Rager x2 plus Urborg Repossession x2 come in from the board against removal-heavy decks. |
| raced | mitigation | This deck IS the aggressor and is the fastest of the three builds: a turn-1 play in 81% of hands, 15 of 23 nonlands at mana value 2 or less, and 7 one-drops. Against the cube's 21%-density evasive starts it interacts on curve with Cut Down x2 at {B} and Tribute to Urborg x2 at {1}{B}, both instants, without giving up a turn of pressure. Knight of Dusk's Shadow's 'Your opponents can't gain life' additionally shuts off the lifelink races the cube's 22 lifegain cards enable. Splatter Goblin x2 comes in from the board against anything faster; stated honestly, the deck no longer boards a defensive wall, because Gibbering Barricade's 'Defender' never advanced this plan. |
| disruption-fizzle | mitigation | There is no single critical turn - the plan is 6 discard effects, 7 removal spells and 9 threat slots, none of which needs another card to function. If the turn a key permanent resolves is answered, Braids's Frightful Return chapter II rebuys the creature. The redundancy is stated correctly after the grill: 3 threat NAMES are 2-of pairs (Battlefly Swarm, Knight of Dusk's Shadow, and formerly Toxic Abomination which is now a 1-of), so 4 of the 9 threat slots are paired and 5 are singletons - an earlier draft said '4 of the 9 threats are 2-of pairs', which matched nothing. The one real exposure is a sweeper, which is why Vanquisher's Axe is maindecked (an Equipment survives all 6 sweepers in the cube and re-equips for {2}) and Cult Conscript x2 plus Urborg Repossession x2 are in the sideboard. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Stronghold Arena | RARE, cut during grill repair. 'Whenever one or more creatures you control deal combat damage to a player, you may reveal the top card of your library and put it into your hand.' It was the mainboard's only card-advantage source and a 1-of whose trigger requires a connection, so the gas-out plan rested on drawing one specific card AND on the clock already working. Braids, Arisen Nightmare draws with no combat requirement and covers a threat class the deck answered zero times. |
| Karn's Sylex | MYTHIC. Colourless, so it is castable here, and its '{X}, {T}, Exile: Destroy each nonland permanent with mana value X or less' is the only outright answer mono-black has to the cube's 15 artifacts and 18 enchantments. Declined on two oracle grounds: 16 of the 23 nonlands cost mana value 2 or less, so any useful X wipes the aggressor's own board first, and its static 'Players can't pay life to cast spells or to activate abilities that aren't mana abilities' would shut off Defiler of Flesh's own {B} discount, which is paid with 2 life. |
| Sheoldred, the Apocalypse | MYTHIC. The strongest card in the pool in a vacuum, but a 4-mana 4/5 with no evasion is a blocker and a drain engine, not a clock. The shape judge rejected the sketch built around it on exactly that ground: 'seven bodies, one of which is a 4-mana Sheoldred, does not get to 20 by turn 7'. |
| The Cruelty of Gix | RARE. Five mana in a deck whose curve tops at 4 and whose average nonland mana value is 2.17. Its chapter I would be a seventh discard effect, but neither that nor its reanimation is worth a turn-5 sorcery-speed play for a deck that intends to be winning by turn 7. |
| Drag to the Bottom | RARE. 'Domain — Each creature gets -X/-X, where X is 1 plus the number of basic land types among lands you control.' Mono-black means one basic land type, so X = 2 — the same effect as Choking Miasma, which is an uncommon costing one mana less. It would also kill 7 of this deck's own 9 creature cards. |
| Shadow Prophecy | 'Domain — Look at the top X cards, where X is the number of basic land types among lands you control.' Mono-black means X = 1: a three-mana 'look at the top card, put it in your hand, lose 2 life'. The worst version of this card that exists. |
| Battle-Rage Blessing | Was in the winning sketch's Interaction bucket; the shape judge caught that 'Target creature gains deathtouch and indestructible until end of turn' is a pump/protection trick, not an answer, which put the sketch's real removal count at ~21%, below the tempo band floor. Replaced by a second Extinguish the Light and a Bone Splinters so all seven Interaction slots are genuine removal. |
| Gibbering Barricade | Cut from the sideboard during grill repair. 'Defender' never advances a plan whose 9 threats are the kill mechanism, and it overlapped almost entirely with Splatter Goblin in the same anti-aggro slot — 6 of 10 sideboard slots were answering one axis. Urborg Repossession x2 took the slots. |
| Toxic Abomination (second copy) | A vanilla 3/2 with 'you lose 2 life' in a deck whose identity is 'bodies that are hard to block rather than large'. It carried the harshest reliability weight of any threat (0.7). Trimmed to one copy; the slot went to Vanquisher's Axe, which multiplies the evasive half of the clock instead. |
| Balduvian Atrocity | A 2/3 menace for {2}{B} with the {R} kicker declined — genuinely evasive where Toxic Abomination is not. Passed over because at mana value 3 it competes with the deck's densest slot (8 cards at mana value 2) and the Axe does more for the one-drop fliers already in the list. |
| Tattered Apparition | 'Flying. {1}{B}: This creature gets +1/+1 until end of turn' — both an evasive body and a genuine mana sink, which is a rare combination for this deck's two stated needs. Held out at mana value 4, where the list already has three four-drops and a curve built to play two spells a turn from turn 3. |
| Phyrexian Vivisector | 'Whenever a creature you control dies, scry 1.' It composes with Bone Splinters and the cube's 6 sweepers, but it has no evasion and no card advantage, and it competes with Toxic Abomination for a non-evasive two-drop slot the deck already had too many of. |
| Weatherlight Compleated | MYTHIC. A 2-mana 5/5 flier reads perfectly for this deck, but by its oracle text it is a Vehicle that becomes a creature only after four creature deaths ('four or more phyresis counters') and draws only after seven — far too slow for a turn-7 goldfish, at the cost of a rare slot. |
| Blight Pile | 'Defender. {2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control.' This list runs 0 other defenders, so X caps at 1, and a Defender cannot attack in a deck whose 9 threats are the kill mechanism. |
| Crystal Grotto | The only nonbasic land available. Its oracle is '{T}: Add {C}. {1}, {T}: Add one mana of any color' — in a deck whose only colour is black it produces no usable mana for free and taxes {1} for coloured mana, so it is strictly worse than a Swamp. The ETB scry does not pay for a turn of tempo on a curve with seven one-drops. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.17   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.61 adj [MV 2.17 vs 2.5, 1 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                            cube_mainboard of dominaria-united---main-set
commons_uncommons_max_2:         PASS — no card exceeds 2 copies (validator CHECK3, verified against a known-bad fixture)
rares_mythics_max_1_each:        PASS
rares_mythics_max_5_total:       PASS - exactly 5: Liliana of the Veil (mythic), Evolved Sleeper (rare), The Raven Man (rare), Defiler of Flesh (rare), Braids, Arisen Nightmare (rare). Stronghold Arena held the fifth slot before grill repair and was displaced. Sideboard contains zero rares.
basics_unlimited:                Swamp x17 — format-supplied, exempt
colour_usability:                PASS - every nonland card returns a usable mode under effective_cost.best_mode(card, ['B'], []). Four cards are legal via a kicker-decline and are NOT splashes: Aggressive Sabotage (base {2}{B}, {R} declined), Tribute to Urborg (base {1}{B}, {1}{U} declined), Urborg Repossession (sideboard, base {B}, {1}{G} declined), Choking Miasma (sideboard, base {1}{B}{B}, {G} declined). Vanquisher's Axe is colourless and castable in any deck.
```
