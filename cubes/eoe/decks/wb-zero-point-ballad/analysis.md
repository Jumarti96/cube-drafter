---
deck_name: "wb-zero-point-ballad"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WB"
format: "40-card"
built_at: "2026-08-03T15:58:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
6x Plains                     
9x Swamp                      
1x Godless Shrine             ({T}: Add {W} or {B}.) As this land enters, you may pay 2 li
2x Sunlit Marsh               ({T}: Add {W} or {B}.) This land enters tapped.
```

### CREATURES (4)

```
CMC  Card                       Qty   Color  Role                                                 Rar
3    Xu-Ifit, Osteoharmonist    x1    B      Recursion (free, repeatable; only 3 creature targets R
5    Astelli Reclaimer          x1    W      Finisher (5/4 flier) + noncreature-permanent recursi R
6    Dawnstrike Vanguard        x2    W      Finisher (toughness 5 survives this deck's own Balla U
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Tragic Trajectory          x2    B      Interaction (one mana, Void-scaling)                 U
1    Zero Point Ballad          x1    B      Anchor sweeper (scalable; at X>=6 it also reanimates R
2    Depressurize               x1    B      Interaction (cheap answer to an early utility creatu C
2    Hymn of the Faller         x2    B      Card flow + graveyard enabler                        U
3    Scrounge for Eternity      x2    B      Recursion (creature OR Spacecraft, mana value 5 or l U
4    Gravkill                   x2    B      Interaction (instant-speed exile)                    C
5    Beyond the Quiet           x1    W      Unconditional mass exile                             R
```

### OTHER SPELLS (7)

```
CMC  Card                       Qty   Color  Role                                                 Rar
3    Banishing Light            x2    W      Interaction (any nonland permanent; an ENCHANTMENT,  C
3    Fell Gravship              x2    B      Recursion to hand + self-mill                        U
5    Susurian Dirgecraft        x1    B      Interaction (edict; answers hexproof and ward)       U
6    Rescue Skiff               x2    W      Recursion (creature or ENCHANTMENT - rebuys Banishin U
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                                                                    Rar
Seam Rip                   x2    W      Hate — Against fast starts - a one-mana exile for any nonland permanent with mana value 2  U
Chrome Companion           x1    C      Hate — Against opposing graveyard decks - repeatable, one card at a time. Boarding it in a C
Emergency Eject            x1    W      Flex removal — Against noncreature permanents you must answer at instant speed; the Lander U
All-Fates Stalker          x2    W      Flex removal on a body — Against decks where you need blockers as well as answers - 2/3 th U
Radiant Strike             x2    W      Hate — Against artifact decks - 'Destroy target artifact or tapped creature. You gain 3 li C
Vote Out                   x2    B      Flex removal — Against creature decks that go under the sweepers; unconditional destroy wi U
```

## ANALYSIS

### DECK IDENTITY

A white-black control deck built on a scalable wrath. Zero Point Ballad reads 'Destroy all creatures with toughness X or less. You lose X life. If X is 6 or more, return a creature card put into a graveyard this way to the battlefield under your control' - so it is a sweeper that can also hand you the best creature it just killed, including the opponent's. White covers what a toughness-capped wrath misses with unconditional exile. The recursion here is not the usual creature reanimation: Scrounge for Eternity returns SPACECRAFT as well as creatures, Fell Gravship rebuys Spacecraft to hand, and Rescue Skiff returns a creature OR ENCHANTMENT - which means it rebuys Banishing Light and re-exiles a second permanent. Dawnstrike Vanguard's toughness 5 is chosen so it survives this deck's own Ballad at any X of 4 or less.

### SPACECRAFT ARE NOT CREATURES — AND WHY THAT MATTERS TWICE

A card typed `Artifact — Spacecraft` is an artifact only. It becomes a creature exclusively once Station has put it past its printed threshold (`It's an artifact creature at 8+`). This deck runs five Spacecraft, and the consequence cuts both ways:

- **Zero Point Ballad** destroys "all creatures with toughness X or less." An unstationed Spacecraft is not a creature, so it is untouched at any X. Fell Gravship, Rescue Skiff and Susurian Dirgecraft all survive your own wrath.
- **Beyond the Quiet** reads `Exile all creatures and Spacecraft.` It names Spacecraft explicitly, so it does **not** respect that distinction — it eats your own. Sequence it *before* you commit Spacecraft to the board, or accept the loss.

That asymmetry is the reason the deck's answer suite is built the way it is: Zero Point Ballad is close to one-sided here, Beyond the Quiet is a genuine reset you cast when you are behind on board and have nothing invested.

### THE BALLAD'S TOUGHNESS DIAL

`Destroy all creatures with toughness X or less. You lose X life. If X is 6 or more, return a creature card put into a graveyard this way to the battlefield under your control.`

X is a dial you set against your own board, not just theirs:

| X | Cost | Kills | Your board |
|---|---|---|---|
| 2 | 3 mana, 2 life | Most turn-1/2 plays | Everything of yours survives |
| 4 | 5 mana, 4 life | Most midrange creatures | Dawnstrike Vanguard (toughness 5) **survives** |
| 6 | 7 mana, 6 life | Nearly everything, **and returns a creature that died to it** | Dawnstrike Vanguard dies |

Dawnstrike Vanguard's toughness 5 is not a coincidence — it is the finisher chosen specifically to sit above the X=4 line. And note whose creature X=6 returns: it returns *a* creature card put into a graveyard this way, which includes **the opponent's**. At seven mana and six life, the Ballad is a wrath that also steals their best body.

### THE RECURSION HERE IS NOT CREATURE REANIMATION

This is the one graveyard deck of the four whose recursion mostly does not target creatures:

- **Scrounge for Eternity** — `Return target creature or SPACECRAFT card with mana value 5 or less` — rebuys Fell Gravship or Susurian Dirgecraft to re-trigger their enter-the-battlefield effects. Note Rescue Skiff at mana value 6 is **outside** the clause.
- **Rescue Skiff** — `return target creature or ENCHANTMENT card from your graveyard to the battlefield`. **Banishing Light is an enchantment.** Rebuying it exiles a second permanent — one card becoming two answers. This is the deck's signature line.
- **Fell Gravship** — returns a creature or Spacecraft to *hand*, so you pay the mana again; weighted accordingly in the assembly gate.

A control deck that rebuys its own **removal** rather than its threats does not run out of answers, only out of time.

### XU-IFIT IS NEARLY A BLANK HERE — SAID PLAINLY

Xu-Ifit reads `Return target creature CARD from your graveyard to the battlefield.` Spacecraft are artifacts, not creatures. This deck runs **four creature card copies across three names** (Dawnstrike Vanguard ×2, Astelli Reclaimer ×1, Xu-Ifit ×1), so excluding itself Xu-Ifit has **3 of 22 nonland cards** as targets, plus whatever Fell Gravship happens to mill. Note also that what it returns "has no abilities" — a reanimated Astelli Reclaimer is a vanilla 5/4 with no rebuy trigger.

It is in the list as a 2/3 blocker and Station fodder that *sometimes* rebuys a finisher — not as the engine its name suggests. If you iterate, this is the most cuttable card in the deck. The sketchers and the shape judge all treated it as a live engine; that was corrected at FILL, and the assembly gate declares it at weight 0.5 with exactly this target count as the reason.

### WHAT THE GATE CAUGHT

The first version of this list ran two finishers. The Phase 6b assembly check returned **p = 0.56** against a 0.75 threshold — a control deck with two win conditions in forty cards genuinely cannot find one in time. Adding a third, and declaring Rescue Skiff and Xu-Ifit as weighted finisher-*access* (they return a killed finisher to the battlefield), took it to **0.86**. The Threats/Payoffs slot sits at 14% against a 5–10% control band because of that repair: the HARD gate outranks the band.

The grill then upgraded that third slot. **Astelli Reclaimer** replaced Monoist Circuit-Feeder: one mana cheaper, 5/4 instead of 4/4, flying, and `When this creature enters, return target noncreature, nonland permanent card with mana value X or less… where X is the amount of mana spent` — cast for its printed cost, X is 5, which covers Banishing Light. So the third finisher also rebuys the deck's best answer, where Monoist's pump scaled with an artifact count that was realistically 1–3.

### PLAY PATTERN, AND THE MATCHUP IT LOSES

Do nothing until turn 2. Trade one-for-one with Tragic Trajectory and Depressurize, exile the things that matter with Banishing Light and Gravkill, and set Zero Point Ballad's X against your own board. Land Dawnstrike Vanguard once the coast is clear; its lifelink is what makes the six life you paid for a big Ballad affordable.

Be honest about the weakness: this deck's first meaningful play is turn 2, its finishers cost six, and the goldfish turn is 9. Against the fastest starts in the cube it is behind from the beginning, and the `raced` failure mode is recorded as an **accepted**, not a mitigation — fixing it would mean maindecking blockers, and a control deck that keeps creatures on board is fighting its own Zero Point Ballad.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (22 nonland):  1:3  2:3  3:7  4:2  5:3  6:4
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  mass_or_unconditional_answer: 10 copies (effective 8.3: Susurian Dirgecraft@0.6, Tragic Trajectory@0.6, Tragic Trajectory@0.6, Depressurize@0.5) → p=0.98 (need ≥ 0.75)
  PASS  recursion: 7 copies (effective 5.9: Fell Gravship@0.7, Fell Gravship@0.7, Xu-Ifit, Osteoharmonist@0.5) → p=0.92 (need ≥ 0.75)
  PASS  finisher: 6 copies (effective 4.7: Rescue Skiff@0.6, Rescue Skiff@0.6, Xu-Ifit, Osteoharmonist@0.5) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 48%  T2 81%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Zero Point Ballad, Beyond the Quiet, Susurian Dirgecraft
  OK        single_large_threat: Banishing Light, Gravkill, Beyond the Quiet
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: White and black contain no counterspell in this pool. This deck answers permanents after they resolve instead, which is why its interaction is weighted toward exile (Banishing Light, Gravkill, Beyond the Quiet) rather than damage - an exiled permanent cannot be rebought by the cube's 31 graveyard-interaction cards.
  CONCEDED  graveyard: No maindeck graveyard hate. The deck's own recursion (Scrounge for Eternity, Rescue Skiff, Fell Gravship, Xu-Ifit) depends on its graveyard, so symmetric hate costs it more than the opponent; Chrome Companion is sideboarded for the matchups where that trade is worth making.
```

- No WARN flags raised. Curve (Control), assembly, goldfish and coverage all returned PASS after the finisher count was repaired, and again after the grill repair.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Zero Point Ballad is an X spell - surplus lands are spent directly on a bigger sweep, and reaching X=6 (seven mana) is what turns it from a wrath into a wrath that hands you a creature. Rescue Skiff at {5}{W} and Dawnstrike Vanguard at {5}{W} are both genuine mana sinks, and Scrounge for Eternity's Lander token converts spare mana into a basic. |
| screw | mitigation | The deck is built to do nothing early on purpose, so a slow hand is closer to its plan than to a loss: Tragic Trajectory at {B}, Hymn of the Faller at {1}{B} and Depressurize at {1}{B} are the cheap interaction that bridges to the sweepers. The goldfish simulation (build_output.structural_checks.goldfish, not validation_report) reports 85% keepable hands and 92% with three lands by turn 3, and Godless Shrine can enter untapped for 2 life when the turn matters. |
| decapitation | mitigation | Zero Point Ballad is a single copy, so the plan without it is the rest of the answer suite. The genuinely unconditional answers are Beyond the Quiet (a second mass answer), Banishing Light x2 and Gravkill x2 - 5 copies that exile any single permanent regardless of size. The assembly gate's 10-copy figure additionally counts Susurian Dirgecraft, Tragic Trajectory x2 and Depressurize at reduced weights (0.6, 0.6, 0.5) precisely because those three are CONDITIONAL rather than unconditional, giving 8.3 effective copies and P(seen by turn 9) = 0.98. There is no single card to answer here. |
| gas-out | mitigation | Hymn of the Faller x2 draws and surveils, and 10 of 22 nonland cards turn on its extra draw. The structural refuel is the recursion suite rebuying ANSWERS rather than threats: Rescue Skiff returns Banishing Light from the graveyard to the battlefield for a second exile, and Scrounge for Eternity returns Fell Gravship or Susurian Dirgecraft to re-trigger their enter-the-battlefield effects. A control deck that rebuys its own removal does not run out of answers, only out of time. |
| raced | accepted | This is the deck's worst matchup and the list does not fix it. Its first meaningful play is turn 2, its finishers cost six, and its goldfish turn is 9. Mitigating properly would mean maindecking cheap blockers - but a control deck that keeps creatures on the battlefield is fighting its own Zero Point Ballad, and every blocker slot would come out of the 41% interaction the sweeper plan depends on. The concession is bounded rather than total: Dawnstrike Vanguard's lifelink and Radiant Strike's 'You gain 3 life' from the sideboard buy turns back, and Seam Rip x2 comes in specifically as a one-mana answer to the cheap threats that beat this deck. |
| disruption-fizzle | mitigation | CORRECTED AT THE GRILL - an earlier version of this entry claimed the deck 'faces no counterspells in the pool because blue is out of colour', which conflated this deck's own colours with what an OPPONENT can hold up. The pool does contain counterspells (Divert Disaster, Unravel), both blue. The honest claim is a density one: 2 of 276 pool cards are counterspells, so exposure on the sweeper turn is low but real, not zero. The structural answer is that the sweeper is not a single point of failure - Zero Point Ballad and Beyond the Quiet are two independent mass answers and the assembly gate puts P(seeing a mass-or-unconditional answer by turn 9) at 0.98 across ten copies. The other exposure is removal on a finisher after the board is clear, which is why the finishers are backed by recursion rather than protection: Rescue Skiff and Xu-Ifit both return a killed creature to the battlefield, so answering a Dawnstrike Vanguard costs the opponent a card and buys one turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bygone Colossus | 9/9 for mana value 9, colourless and castable here, but its toughness 9 survives Zero Point Ballad only at the cost of nine mana — and a control deck that has already wrathed does not need a body that large to close. |
| Faller's Faithful | 'If that creature wasn't dealt damage this turn, its controller draws two cards' — a control deck wins by out-carding the opponent, so paying two cards per removal spell is directly counter-plan. Cut for the same reason in all four builds. |
| Archenemy's Charm | RARE. Genuinely strong modal removal plus graveyard recursion, but {B}{B}{B} triple-black is unreachable on a two-colour base whose duals mostly enter tapped. |
| Alpharael, Stonechosen | MYTHIC. 'defending player loses half their life, rounded up' is a real finisher, but it must attack to do anything and this deck's plan is to have no creatures on board when the sweepers resolve. |
| Exalted Sunborn | MYTHIC. Token doubling is a payoff for a token deck; this list generates almost no tokens, so the doubler has nothing to double. |
| Elegy Acolyte | RARE. 4/4 lifelink with a combat-damage draw trigger, but toughness 4 means it dies to the deck's own Zero Point Ballad at any X of 4 or more. |
| Syr Vondam, Sunstar Exemplar | RARE 2/2 whose payoff counts creatures dying or being exiled - real synergy with a sweeper deck, but toughness 2 means it dies to the deck's own Zero Point Ballad at almost any X. |
| Hardlight Containment | RARE. 'Enchant artifact you control' - it needs an artifact already on the battlefield to attach to, so it is a dead card in the opening hand of a deck with few early artifacts. |
| Astelli Reclaimer | RARE. Returns a noncreature nonland permanent with mana value X or less where X is the mana spent - it can rebuy Banishing Light, but {3}{W}{W} double-white competes with the deck's black double-pips. |
| Scout for Survivors | 'total mana value 3 or less' - this control build runs almost no cheap creatures, so the clause returns nearly nothing. |
| Focus Fire | 'deals X damage to target attacking or blocking creature, where X is 2 plus the number of creatures and/or Spacecraft you control' - count-dependent and this deck deliberately keeps its own board empty, so X is usually 2 or 3. |
| Reroute Systems | Modal indestructible or 2 damage to a TAPPED creature; both modes are reactive tricks that a deck holding a sweeper does not need. |
| Starfield Shepherd | 3/2 flier that tutors a basic Plains or a mana-value-1 creature; this deck runs no mana-value-1 creatures, so the search finds a land. |
| Dubious Delicacy | Flash '-3/-3' plus a sacrifice-for-3-damage mode is fine, but a control deck already answers creatures with unconditional exile; the Food half wants a sacrifice theme this build does not run. |
| Embrace Oblivion | 'As an additional cost, sacrifice an artifact or creature' - a control deck that keeps its board deliberately empty cannot reliably pay this cost. It was a benefit in the aristocrats build and is a liability here. |
| Sothera, the Supervoid | Its exile trigger needs YOUR creatures to die repeatedly; this deck keeps its own board empty on purpose, so the engine rarely turns on. |
| Singularity Rupture | '{3}{U}{B}{B}' - blue is not a core colour here. |
| Beamsaw Prospector / Edge Rover / Umbral Collar Zealot | Cheap sacrifice-theme bodies; a control deck does not want creatures on the battlefield when its own sweeper resolves. |
| Lumen-Class Frigate | RARE. 'Other creatures you control get +1/+1' at 2+ charge counters, but Station requires tapping creatures and this deck deliberately has almost none. |
| The Seriema | RARE. Tutors a legendary creature; this build runs at most one legendary creature, so the search is a one-card toolbox at three mana. |
| Pinnacle Starcage | RARE. 'exile all artifacts and creatures with mana value 2 or less' is a partial sweeper, but it also exiles the deck's own cheap artifacts and its {6}{W}{W} unlock is unreachable. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.5   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.33 adj [MV 3.5 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  60.0%  prod  66.7%  gap  -6.7pp  [OK]
  W  demand  40.0%  prod  50.0%  gap -10.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                : cube_mainboard
multipliers         : {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}
rare/mythic cap (6) : PASS
verification        : All 40 mainboard + 10 sideboard cards exist by exact name in the working pool. No common/uncommon exceeds 2 combined copies; no rare/mythic exceeds 1. Rare+mythic total across mainboard and sideboard = 5 (Zero Point Ballad, Beyond the Quiet, Xu-Ifit Osteoharmonist, Astelli Reclaimer, Godless Shrine), inside the user's cap of 6. Basic lands are format-supplied and exempt.
```
