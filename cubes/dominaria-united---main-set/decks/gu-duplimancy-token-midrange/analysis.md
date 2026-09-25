---
deck_name: "gu-duplimancy-token-midrange"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GU"
format: "40-card"
built_at: "2026-08-20T01:15:46Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
6x Island            U source and the Island basic type
5x Forest            G source and the Forest basic type
2x Crystal Grotto    untapped, scry 1 on entry, and '{1},{T}: Add one mana of any color' for the double pips
2x Tangled Islet     the only GU dual carrying BOTH the Forest and Island types; enters tapped
2x Wooded Ridgeline  Mountain Forest: a GREEN source carrying a THIRD basic land type for Domain; enters tapped
```

### CREATURES (9)

```
CMC  Card                     Qty   Color  Role                                                                                                                                                                       Rar
  2  Ivy, Gleeful Spellthief  x1    GU     Payoff — second engine; the same trick that fires Duplimancy also copies the spell onto Ivy                                                                                R
  2  Llanowar Loamspeaker     x1    G      Infrastructure — two-mana '{T}: Add one mana of any color'; turn-2 into turn-3 Duplimancy                                                                                  R
  3  Deathbloom Gardener      x1    G      Infrastructure — '{T}: Add one mana of any color' is FREE acceleration (unlike Salvaged Manaworker, which taxes {1} to produce 1), and deathtouch makes it a real blocker  C
  3  Elvish Hydromancer       x1    G      Threat — 3/2; kicked at six mana it clones your best body, the deck's only redundancy for a 1-of mythic engine                                                             U
  3  Llanowar Greenwidow      x1    G      Threat — 4/3 reach trample for three, the best mana-to-stats copy target in the pool                                                                                       R
  4  Micromancer              x2    U      Threat — 3/3 whose ETB tutors a mana-value-1 instant, i.e. it finds another engine trigger                                                                                 U
  5  Defiler of Vigor         x1    G      Threat — 6/6 trample; discounts green permanents by {G} for 2 life and puts a +1/+1 counter on every creature, tokens included                                             R
  5  Frostfist Strider        x1    U      Threat — 4/4 ward {2}; its ETB taps and stuns a blocker, and each token copy taps another                                                                                  U
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                       Qty   Color  Role                                                                                                                                                 Rar
  1  Gaea's Might               x2    G      Enabler — {G} Domain pump on a single creature                                                                                                       C
  1  Shore Up                   x2    U      Enabler — {U} targets a single creature you control: fires both engines AND protects the target from removal in response                             C
  1  Strength of the Coalition  x2    G      Enabler — {G} 'Target creature you control gets +2/+2'; one mana, no Domain or colour dependency                                                     U
  2  Bite Down                  x1    G      Interaction — the only unconditional creature removal in these colours; scales with the oversized bodies this deck fields                            C
  2  Essence Scatter            x1    U      Interaction — buys the turn needed to untap with a four-mana enchantment                                                                             C
  2  Negate                     x2    U      Interaction — the ONLY card in the list that can protect Vesuvan Duplimancy, and it answers all 6 of the cube's sweepers (none is a creature spell)  C
  3  Broken Wings               x1    G      Interaction — destroy target artifact, enchantment, or creature with flying                                                                          C
```

### OTHER SPELLS (3)

```
CMC  Card                Qty   Color  Role                                                                                                                                                                                         Rar
  1  Combat Research     x2    U      Enabler — an AURA targets on cast, so it fires Duplimancy for a token copy of the enchanted body; the copy also lands on Ivy as a token Aura, and it is the deck's only repeating card draw  U
  4  Vesuvan Duplimancy  x1    U      Payoff — the copy engine; a cheap spell aimed at your own body mints a token copy of that body                                                                                               M
```

## SIDEBOARD (10)

```
Card             Qty   Color  Role / When to board in                                                                                                                                                                 Rar
Bite Down        x1    G      vs creature decks — second copy of the deck's only unconditional creature removal                                                                                                       C
Broken Wings     x1    G      vs artifacts, enchantments and fliers — second copy                                                                                                                                     C
Essence Scatter  x1    U      vs decks whose plan is one large creature — second copy                                                                                                                                 C
Impede Momentum  x2    U      vs a single resolved large creature — tap it and put three stun counters on it, which neutralises it for three untaps; replaces two slots that answered no class in the threat profile  C
Impulse          x1    U      vs slower decks — digs four deep for Vesuvan Duplimancy, which is 1 of 40                                                                                                               C
Snarespinner     x2    G      vs evasion (51 cards, 20.7% of the cube) — reach, and +2/+0 whenever it blocks a flier                                                                                                  C
Tear Asunder     x2    G      vs noncreature permanents (15 artifacts, 18 enchantments) — exile target artifact or enchantment; the base mode needs no black                                                          U
```

## ANALYSIS

### DECK IDENTITY

Green-blue midrange built on Vesuvan Duplimancy. Duplimancy copies the PERMANENT, not the spell: 'Whenever you cast a spell that targets only a single artifact or creature you control, create a token that's a copy of that artifact or creature.' So a one-mana instant aimed at your own 6/6 buys a second 6/6. Eight of the twenty-three nonland cards satisfy that clause, which is why this build fields the largest legal bodies in the colours rather than the cheapest: the engine converts mana into whichever creature is already best on board. Ivy, Gleeful Spellthief is a complementary second engine — a trick aimed at a non-Ivy creature you control fires Duplimancy AND copies the spell onto Ivy.

### THE CLAUSE THAT DEFINES THE DECK

Vesuvan Duplimancy reads: *"Whenever you cast a spell that targets only a single artifact or creature
you control, create a token that's a copy of that artifact or creature, except it's not legendary."*

Two words do all the work. **"Cast"** means a triggered ability that targets is not enough — the
*spell* must target. **"That artifact or creature"** means it copies the **permanent**, not the
spell. So a one-mana instant aimed at your own 6/6 buys a second 6/6, and the token arrives at
printed stats with printed abilities, carrying none of the pump that fired it.

That is why this deck fields the largest legal bodies in green and blue rather than the cheapest
ones. The engine converts a one-mana card into whichever creature is already best on the board, so
the ceiling of the deck is the ceiling of its best creature.

### WHAT DOES AND DOESN'T FIRE THE ENGINE

This was the single hardest thing to get right, and two of the calls were corrected during the
build by independent review.

| Card | Fires Duplimancy? | Why |
|---|---|---|
| Shore Up, Strength of the Coalition, Gaea's Might | **Yes** | one-target instants aimed at your own body |
| Combat Research | **Yes** | an **Aura** targets on cast; Ivy's own reminder text — *"(A copy of an Aura spell becomes a token.)"* — confirms Auras are inside this class |
| Elvish Hydromancer | **No** | its clone is an *enters-the-battlefield triggered ability*; the Hydromancer **spell** has no targets |
| Bite Down | **No** | *"Target creature you control deals damage… to target creature… you don't control"* — **two** targets |
| Broken Wings, Essence Scatter, Negate | **No** | they target a permanent you don't control, or a spell |
| Vanquisher's Axe, Hero's Heirloom | **No** | equip is an activated ability, not a cast spell |
| Silverback Elder | n/a | it triggers on creature spells **cast**, and Duplimancy tokens are *created*, not cast — the two never interact |

Final enabler count: **8 of the 23 nonland cards.** For comparison, the two rival builds the shape
judge rejected ran 4 each, and that gap is why this shape was locked.

### THE COUNTS

| Claim | Count against this list |
|---|---|
| Cards that satisfy Duplimancy's cast-and-target clause | 8 of 23 |
| Non-Ivy bodies for those spells to aim at | 8 of 23 |
| Cards Micromancer can legally fetch (mana value 1 instants/sorceries) | 6 of 23 — and every one is an enabler |
| Green **permanent** spells for Defiler of Vigor's counter clause | 5 of 23, and only **4** once Defiler itself is on the battlefield |
| P(Vesuvan Duplimancy seen by the turn-8 thesis) | 15/40 = 37.5% on the draw, 35.0% on the play |
| P(Domain 3, via one of 2 Wooded Ridgelines) | 61.5% |
| Rare/mythic budget | **5 of 5** — fully spent |

Defiler of Vigor's row is the weakest count in the deck and it is stated rather than dressed up.
The earlier version of this record claimed 8 green permanents and then listed 5; that contradiction
was caught in review. Defiler is here as a 6/6 trample body first and a counter engine a distant
second.

### THE RARE CAP IS THE REAL CONSTRAINT

Five rare/mythic slots go to Vesuvan Duplimancy (mythic), Ivy, Defiler of Vigor, Llanowar Greenwidow
and Llanowar Loamspeaker. That is the whole budget, and it has two visible consequences:

1. **The manabase runs zero rare lands.** Yavimaya Coast is the pool's only untapped green-blue dual
   and there is no budget for it, so the fixing is 2 Tangled Islet, 2 Wooded Ridgeline and 2 Crystal
   Grotto instead — four of which enter tapped in a deck that must reach four mana on turn 4.
2. **Aether Channeler cannot be played anywhere.** The shape judge called it "genuinely the best
   single copy in the field" because its modal enters-the-battlefield ability is re-chosen on every
   token copy. It is a rare. It was first written into the sideboard and the pre-flight validator
   correctly failed the build at 6 rare/mythic cards, because the cap counts both boards together.
   It cannot be added without cutting one of the bodies the locked lens is built on.

### DOMAIN: HOW FAR TO GO

Wooded Ridgeline is `Land — Mountain Forest` and still taps for {G}, so it is a green source that
smuggles in a third basic land type for free. That takes Gaea's Might from +2/+2 to +3/+3 and drops
Llanowar Greenwidow's graveyard recursion from *"{7}{G} … costs {1} less for each basic land type"*
= 5 mana down to 4.

The pool contains four more commons that would do the same trick in other type pairs — Radiant
Grove, Haunted Mire, Contaminated Aquifer, Idyllic Beachfront — and taking them all reaches
**Domain 5**, which would make Gaea's Might a +5/+5 and Greenwidow's recursion cost 3. It was
declined, and here is the price of declining: tapped lands would go from 4 of 17 to 8 of 17 in a
deck whose payoff costs four mana and does nothing on the turn it resolves. Two cards get better;
every opening hand gets worse. That trade is not worth it at this curve.

### THE HONEST WEAKNESSES

**Nothing happens on turn 1.** All six one-mana cards read "target creature" and the cheapest
creature costs two, so **0 of 23 nonland cards do anything on turn one**. That is the real cost of
the threat-dense lens the judge picked over a grindier build.

**The engine is a 1-of mythic with no tutor.** No card in the pool finds an enchantment — the eleven
tutors in the cube fetch lands, creatures, or instants and sorceries. Elvish Hydromancer's kicked
clone is the only redundancy and it costs six mana all-in. In the roughly two-thirds of games where
Duplimancy never shows up, what remains is a legal midrange curve: a 6/6 trample, a 4/4 with ward
{2}, a 4/3 with reach and trample, and two 3/3 tutors.

**Salvaged Manaworker was a mistake and got cut.** Its *"{1}: Add one mana of any color"* taxes a
mana to produce one — it is a colour filter, not acceleration — and the screw plan had been counting
it as ramp. Deathbloom Gardener's *"{T}: Add one mana of any color"* is free, and deathtouch makes
it a blocker the deck otherwise does not have.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:8  2:6  3:4  4:3  5:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.5: Elvish Hydromancer@0.5) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 8 copies → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 85%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mass removal exists in green or blue in this pool. The deck out-sizes width rather than answering it, and the honest count is small: Defiler of Vigor's counter clause fires on green PERMANENT spells, of which only 4 remain in the list once Defiler itself is on the battlefield. Mitigating properly would mean playing a sweeper that does not exist in these colours.
  OK        single_large_threat: Bite Down, Essence Scatter, Frostfist Strider
  OK        noncreature_permanents: Broken Wings
  OK        stack: Essence Scatter, Negate
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census: gy hate = 0), so there is nothing to buy; this deck's answer is to out-board the recursion rather than to stop it.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Elvish Hydromancer's kicker turns six lands into a 3/2 plus a copy of the biggest body on the board -- the deck's one uncapped mana sink. Combat Research x2 convert flooded turns into cards once a body connects. Llanowar Loamspeaker's '{T}: Target land you control becomes a 3/3 Elemental creature with haste' is the second sink, and it is claimed HERE and only here; the weak_keystones entry disclaims it as a ROLE, not as a flood outlet. Stated honestly: real mana sinks are 2 of 23, which is thin, and the 17-land count is itself part of the answer. |
| screw | mitigation | Two mana creatures of 23 nonland cards genuinely ACCELERATE: Llanowar Loamspeaker at two mana and Deathbloom Gardener at three, both reading '{T}: Add one mana of any color' with no cost. Salvaged Manaworker was cut for exactly this reason on a Challenger finding — its '{1}: Add one mana of any color' taxes a mana to produce one and is a colour filter, not acceleration. Thirteen of the 23 nonlands cost one or two mana, and Combat Research ({U}), Shore Up ({U}), Strength of the Coalition ({G}) and Gaea's Might ({G}) each cast off a single coloured source, so a two-land hand still deploys. |
| decapitation | accepted | Vesuvan Duplimancy is a mythic, so 1 copy is the legal maximum, and no tutor in the pool finds an enchantment — Micromancer fetches only instants and sorceries with mana value 1. P(Duplimancy among the cards seen by the turn-8 thesis) is 15/40 = 37.5% on the draw; on the play you skip the first draw step and see 14, so 35.0%. Elvish Hydromancer's kicked clone is the only redundancy and it is a one-shot at six mana. Mitigating properly would mean playing a second copy that does not exist under the pool rules; what the deck does instead is field bodies that are worth playing without the engine — a 6/6 trample, a 4/4 ward {2}, a 4/3 reach trample and two 3/3 tutors are a legal midrange curve on their own. |
| gas-out | mitigation | Combat Research x2 is the deck's only repeating card advantage -- 'Whenever this creature deals combat damage to a player, draw a card' on a body the engine has already duplicated -- and it was added on a Challenger absence finding that the list previously had 0 of 23 card-draw effects. Micromancer x2 each convert into a tutored one-mana enabler on arrival (6 of the 23 nonland cards are legal fetches: Shore Up x2, Strength of the Coalition x2, Gaea's Might x2), and every token copy of a Micromancer tutors again. Duplimancy itself is the refuel: each one-mana spell it converts is a whole extra permanent. |
| raced | accepted | The deck's cheapest blocker is a three-mana Deathbloom Gardener and its curve tops at 5, so turns 1 through 3 offer almost nothing defensively -- 0 of the 23 nonland cards do anything on turn 1, which is the real cost of the locked threat-dense lens. What exists is real but late: Deathbloom Gardener's deathtouch trades up against anything, Frostfist Strider taps and stuns the fastest attacker on entry, Bite Down kills an attacker using the deck's own oversized power, and Llanowar Greenwidow's reach blocks the 51-card evasion class. Mitigating properly would mean maindecking cheap defensive bodies in place of the four- and five-drops the engine exists to copy, which is the build the shape judge rejected. Snarespinner x2 comes in from the board for that matchup. |
| disruption-fizzle | mitigation | Negate x2 is the answer, and it was moved from the sideboard to the mainboard on a Challenger finding: before it, 0 of the 23 nonland cards could protect a four-mana enchantment that does nothing on resolution. Negate answers all 6 of the cube's sweepers -- Choking Miasma, Karn's Sylex, Smash to Dust, Temporal Firestorm, The Elder Dragon War and The Phasing of Zhalfir are every one of them noncreature spells -- and the removal aimed at Duplimancy itself. Shore Up x2 covers removal aimed at a body mid-combat. The plan also does not depend on a single turn: the 8 enablers are spread across four different cards, so a countered Combat Research is replaced by a Shore Up next turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Tail Swipe | 'Choose target creature you control AND target creature you don't control' -- two targets, so it triggers neither Duplimancy nor Ivy. |
| Timely Interference | Targets a creature; but Duplimancy requires the target be a permanent YOU control, and this card's job is shrinking an opposing blocker. Pointed at your own creature it is a strictly worse Shore Up. |
| Impede Momentum | Targets an opponent's creature -- outside Duplimancy's 'you control' clause entirely. |
| Twinferno | Red; outside this build's identity, and its double-strike mode is the burst plan of a different deck. |
| Hammerhand | Red. |
| Haughty Djinn | Flier with a real cost reduction, but its power is its graveyard count and this build wants bodies whose COPIES are worth having; a token Djinn's power is the same shared graveyard count, so cloning it adds power without adding a new effect. |
| Tolarian Terror | {6}{U} reduced by instants and sorceries in the graveyard; this list runs 8 instants and sorceries and casts them for immediate value, so the Terror lands around turn 6-7 as a vanilla 5/5 with ward. |
| Nishoba Brawler | A 2/3 or 3/3 trample body; cloning it produces another 2/3, which is the least valuable copy available in a deck that can clone a 5/5 flier or an ETB engine. |
| Haunting Figment | 2/1 unblockable-on-instant; a fine aggro body, but a token copy is another 2/1 and this build converts the engine into value, not into a second small clock. |
| Hero's Heirloom | An Equipment. CASTING it targets nothing and EQUIPPING is an activated ability, so it never triggers Duplimancy despite being an artifact. |
| Vanquisher's Axe | Same mechanism: casting the Equipment targets nothing, so it is not an enabler; it is only a legal copy TARGET, and a second +2/+0 Axe is not worth a slot. |
| Weatherlight Compleated | Mythic 5/5 Vehicle that needs creatures to die to gain phyresis counters; this list has no sacrifice outlet, so the counter clause is fed only by combat losses. |
| Karn, Living Legacy | Mythic planeswalker; its Powerstone tokens can't be spent on nonartifact spells, and 22 of this deck's 24 nonland cards are nonartifact. |
| Golden Argosy | Rare Vehicle, crew 1; it exiles and returns its crew, which is real ETB value, but it costs a rare slot and the deck already spends four on bodies and fixing. |
| The Phasing of Zhalfir | Chapter III destroys all creatures -- including every token the engine has made. |
| Plaza of Heroes | Rare land that taps for {C} or for colour only toward legendary spells; this list has 23 coloured pips and only one legendary card. |
| Thran Portal | Rare Gate that adds a chosen basic land type, but it enters tapped past three lands and its mana costs 1 life per activation; a four-mana enchantment deck cannot afford the tempo. |
| Quirion Beastcaller | A vanilla ground 2/2 that grows; its death trigger targets multiple creatures so it composes with neither engine, and it would spend a rare slot. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.87 adj [MV 2.35 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  50.0%  prod  64.7%  gap -14.7pp  [OK]
  U  demand  50.0%  prod  58.8%  gap  -8.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 == 40
[PASS] 1b sideboard size — 10 == 10
[PASS] 2 exact-name membership — missing: []
[PASS] 3 copy limits — violations: []
[PASS] 3b rare/mythic budget — 5 rare+mythic of max 5
[PASS] 4 colour usability via best_mode — unusable: [] ; non-normal modes: {}
[PASS] 5a splash cards in candidate list — off-list: []
[PASS] 5b splash cap <=3 per colour — 0 splash cards: []
```
