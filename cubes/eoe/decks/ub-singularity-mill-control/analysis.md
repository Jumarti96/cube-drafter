---
deck_name: "ub-singularity-mill-control"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-09-04T01:15:53Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x7   Island
  x9   Swamp
  x2   Contaminated Aquifer                         Island Swamp, taps for BU, enters tapped
```

### CREATURES (9)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Timeline Culler                              x2    B     residual                       U
  3  Alpharael, Dreaming Acolyte                  x2    UB    engine                         U
  3  Codecracker Hound                            x1    U     residual                       U
  3  Xu-Ifit, Osteoharmonist                      x1    B     engine                         R
  5  Quantum Riddler                              x1    U     payoff                         M
  9  Bygone Colossus                              x2    C     payoff                         U
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Zero Point Ballad                            x1    B     interaction                    R
  2  Depressurize                                 x2    B     interaction                    C
  2  Divert Disaster                              x1    U     interaction                    C
  3  Scrounge for Eternity                        x2    B     residual                       U
  3  Unravel                                      x2    U     interaction                    U
  4  Gravkill                                     x1    B     interaction                    C
  6  Singularity Rupture                          x1    UB    interaction                    R
```

### OTHER SPELLS (3)

```
CMC  Card                                         Qty   Color Role                           Rar
  3  Fell Gravship                                x2    B     engine                         U
  4  Uthros Scanship                              x1    U     engine                         U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Annul                                        x2    U     hate: Against the artifact decks — threat_prof U
Desculpting Blast                            x2    U     hate: The half of the artifact/enchantment ans U
Archenemy's Charm                            x1    B     flex: Against a single must-answer threat, or  R
Dauntless Scrapbot                           x2    C     hate: Against opposing graveyard decks. Sizing U
Lost in Space                                x2    U     flex: Against a recursive threat — 'Target art C
Vote Out                                     x1    B     flex: Against a threat above Depressurize's po U
```

## ANALYSIS

### DECK IDENTITY

The only deck in this run that can answer a spell before it resolves. Divert Disaster and Unravel x2 are the cube's counterspells, and every other build here filed a coverage concession for the stack class citing a zero-row probe in its colours. Behind them sits Singularity Rupture: 'Destroy all creatures, then ANY NUMBER of target players each mill half their library, rounded down.' Any number includes zero, so the mill is a choice - against a creature deck it is a clean wrath, and on the turn a graveyard is wanted it points at you alone and bins roughly half the remaining library at once. Two honest limits are stated rather than implied. It is a SORCERY, so no counter is held up on the turn it is cast; and 'Destroy all creatures' kills this deck's own Xu-Ifit, which is why Rupture is the reset and Xu-Ifit the rebuild, and why the thesis turn is 9 rather than 8. Bygone Colossus is the one creature that loses nothing to Xu-Ifit's 'has no abilities' clause, and Alpharael, Dreaming Acolyte and Uthros Scanship are what make binning it deliberate rather than lucky - both draw first and discard second.

### DECK IDENTITY

The only deck in this run that can answer a spell before it resolves. Divert Disaster and Unravel x2 are the cube's counterspells, and every other build here filed a coverage concession for the stack class citing a zero-row probe in its colours. Behind them sits Singularity Rupture: 'Destroy all creatures, then ANY NUMBER of target players each mill half their library, rounded down.' Any number includes zero, so the mill is a choice - against a creature deck it is a clean wrath, and on the turn a graveyard is wanted it points at you alone and bins roughly half the remaining library at once. Two honest limits are stated rather than implied. It is a SORCERY, so no counter is held up on the turn it is cast; and 'Destroy all creatures' kills this deck's own Xu-Ifit, which is why Rupture is the reset and Xu-Ifit the rebuild, and why the thesis turn is 9 rather than 8. Bygone Colossus is the one creature that loses nothing to Xu-Ifit's 'has no abilities' clause, and Alpharael, Dreaming Acolyte and Uthros Scanship are what make binning it deliberate rather than lucky - both draw first and discard second.

### "ANY NUMBER" IS THE WHOLE ARGUMENT

A skeleton critic attacked this deck on the grounds that milling half your own library in a 40-card deck is a deck-out risk, and that `Xu-Ifit` converts one graveyard card per turn against roughly thirteen supplied. The first half is refuted by the printed text and the second half is not.

`Singularity Rupture` reads `any number of target players each mill half their library`. **Any number includes zero.** The spell has a non-targeting mode that still does something (`Destroy all creatures`), so choosing zero targets does not fizzle it. Concretely, that gives three cards in one:

| Situation | How you cast it |
|---|---|
| behind on board, yard not needed | zero targets — a clean six-mana wrath |
| behind on board, yard wanted | target yourself only — wrath plus a ~10-card self-mill |
| you want to attack their library | target them, or both |

You are never forced to mill yourself, and you never hand the opponent a free half-library of reanimator fuel.

### WHAT IS NOT REFUTED, AND WHAT CHANGED BECAUSE OF IT

Rupture is a **sorcery**, so the turn it is cast is a turn no counterspell is held up. And `Destroy all creatures` kills your own `Xu-Ifit`. The correct sequencing is Rupture as the **reset** and Xu-Ifit as the **rebuild** — which means the earliest reanimated body lands the turn after the wrath and first attacks the turn after that.

That is why `thesis_turn` on this deck is **9, not 8**. It was revised during the grill rather than left standing with the risk merely recorded: a Challenger pointed out that an acknowledged thesis miss which changes nothing is not a resolution, and that is correct.

### THE COST THAT ONLY EXISTS ON ONE TURN

`Scrounge for Eternity` reads `As an additional cost to cast this spell, sacrifice an artifact or creature`. Counting sacrificeable permanents at rest gives a comfortable number. Counting them on **the turn immediately after your own wrath** gives a very different one, because `Destroy all creatures` has just emptied the board.

That is why `Uthros Scanship` is in the deck. It is an `Artifact — Spacecraft`, not a creature, so it **survives your own Rupture** — and it is simultaneously legal Scrounge fodder, a legal Scrounge target at mana value 4, and a second deliberate way to bin the Colossus (`draw two cards, then discard a card`). One card answering a count that was only wrong at the moment it mattered.

### THE COLOSSUS CHOKEPOINT, STATED PLAINLY

Of the creature cards here, only `Bygone Colossus` loses nothing to Xu-Ifit's `has no abilities` clause — its entire printed text is a casting ability. Every other target comes back as a vanilla body.

But the cards that can put a *milled* Colossus onto the battlefield number exactly one: `Xu-Ifit`. `Scrounge for Eternity` caps at `mana value 5 or less`, `Zero Point Ballad` returns only `a creature card put into a graveyard this way`, and `Fell Gravship` returns `to your hand`. That is a genuine single point of failure, and the deck's answer is not to pretend otherwise — it is `Timeline Culler` ×2, whose `You may cast this card from your graveyard using its warp ability` is recursion that needs no reanimator at all and cannot be answered by killing Xu-Ifit.

### WHY THIS DECK EXISTS SEPARATELY FROM THE OTHER THREE

A probe over the pool for general counterspells returns exactly two blue-black rows, `Divert Disaster` and `Unravel`, and this deck plays both; the one narrow counter the pattern misses, `Annul` (`Counter target artifact or enchantment spell`), is in the sideboard. It plays every counterspell the cube offers in these colours. The other three builds from this cube all filed a coverage concession for the stack class citing a zero-row probe in their own colours. This is the only one of the four whose plan B, when the graveyard is attacked, is simply to out-answer the opponent.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:1  2:5  3:10  4:2  5:1  6:1  9:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  yard_filler: 8 copies (effective 7.5: Zero Point Ballad@0.5) → p=0.96 (need ≥ 0.75)
  PASS  recursion: 7 copies (effective 5: Scrounge for Eternity@0.6, Scrounge for Eternity@0.6, Fell Gravship@0.4, Fell Gravship@0.4) → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 18%  T2 76%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Singularity Rupture, Zero Point Ballad, Depressurize
  OK        single_large_threat: Gravkill, Unravel, Divert Disaster, Singularity Rupture
  CONCEDED  noncreature_permanents: Unanswered in the mainboard at an acceptable cost, and the pool claim is now CITED rather than asserted - an earlier draft said 'the pool answers it in these colours' with no evidence, which a Challenger correctly flagged. The evidence: dossier.threat_profile.artifact_answers lists 4 cards, all green, red or white, and enchantment_answers lists 1, mono-green - so in blue and black the pool offers no destroy-or-exile answer to a resolved noncreature permanent at all. What it does offer, and what this deck boards, is interaction BEFORE it resolves (Annul x2, 'Counter target artifact or enchantment spell') and a bounce after (Desculpting Blast x2). Per dossier.census_caveat those counts are probe results, not proofs of absence. The mainboard's own removal is Gravkill ('creature or Spacecraft'), Depressurize (creatures), Singularity Rupture and Zero Point Ballad (creatures) - none touches a non-Spacecraft artifact or an enchantment, which is 90 of 249 nonland cards.
  OK        stack: Divert Disaster, Unravel
  CONCEDED  graveyard: Unanswered in the mainboard, deliberately, and answered from the sideboard at 2 copies (Dauntless Scrapbot). Probe cited and actually run: cube_search.search_pool(pool, color_identity=['U','B'], splash_color_identity=['G'], oracle_pattern=r'exile .{0,40}graveyard|graveyard.{0,40}(exile|bottom of)') -> 3 rows: Chrome Companion, Dauntless Scrapbot, Timeline Culler. Timeline Culler is a false positive - its 'exile' clause is its own warp - so the pool offers this deck two real answers and the stronger is boarded. Sizing note, corrected at Phase 9: dedicated opposing graveyard hate is roughly 2 of 249 nonland cards. That figure is corrected at Phase 9: an earlier draft quoted 12.45%, which is threat_profile.graveyard_interaction and counts every card that USES a graveyard - nine of its thirty-one names are cards in this very deck. The right key is dossier.structural_census.graveyard_hate, which lists ONE card (Dauntless Scrapbot); a hand probe finds one more the census missed (Chrome Companion, '{2}, {T}: Put target card from a graveyard on the bottom of its owner's library'), which is exactly what dossier.census_caveat warns about. Two of 249 is the honest number, and it is an error that was in this deck's favour. Pattern caveat: this regex would miss library-shuffle hate.
```

- No WARN-tier structural flags were raised on the final list - curve, assembly, goldfish and coverage all return PASS at the revised thesis turn of 9.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | This is the deck that wants the lands, and the count is stated after the Phase 9 repair rather than before it. SIX of the eight interaction cards are instants - Divert Disaster x1, Unravel x2, Depressurize x2, Gravkill x1 - so an extra land is a turn spent holding up an answer rather than a wasted draw; only Singularity Rupture and Zero Point Ballad are sorceries. The top end is genuinely mana-hungry: Singularity Rupture at {3}{U}{B}{B} and Quantum Riddler at {3}{U}{U}, and Zero Point Ballad's X scales with every land drawn, so at eight lands X=7 is a wrath that also reanimates a creature it killed - at a cost of 7 life, which the raced entry names. Xu-Ifit's reanimation costs no mana at all, so a flooded board still deploys a threat every turn. (An earlier draft of this entry named Starbreach Whale, which this pass cut; removing the clause makes the mitigation stronger, not weaker, because the instant count it understated is 6 of 8.) |
| `screw` | accepted | This is the deck screw hurts most in the run, and the cost of fixing it is the deck. Only 6 of 22 nonland cards cost 2 or less, the goldfish check reports an 18.4% turn-1 play rate, and both duals enter tapped. Mitigating means lowering the curve - but the curve IS the plan: a 6-mana wrath, counterspells that must be held up, and a reanimation package. What the deck does instead is shape the mana around the pips: after Timeline Culler x2 ({B}{B} each) came in at Phase 9 the split moved from an even 14/14 to 18 black and 12 blue, and the base was rebalanced with it to 7 Island + 9 Swamp + 2 Contaminated Aquifer = 11 black sources and 9 blue. (An earlier draft of this entry still claimed 'an exact 50/50 with 10 sources of each colour', which the repair had already superseded.) The honest exposure that leaves: blue sources are 9 of 18 while Unravel is {1}{U}{U} and Singularity Rupture wants U and BB on the same turn - the audit passes because both gaps are oversupply (B -1.1pp, U -10.0pp), but the double-blue turn is the thinnest it has been in this build. |
| `decapitation` | mitigation | Rewritten at Phase 9, because a Challenger showed the earlier version was UNSATISFIED: it claimed six weighted reanimation copies across four cards, but NONE of those four could return Bygone Colossus - Scrounge caps at 'mana value 5 or less', Zero Point Ballad returns only 'a creature card put into a graveyard THIS WAY', and Fell Gravship returns 'to your hand'. So the Colossus route really was 1 of 22 (Xu-Ifit), and the deck's own payoff destroys it. Two things changed. (1) Timeline Culler x2 was added: 'You may cast this card from your graveyard using its warp ability. Warp-{B}, Pay 2 life' is recursion that needs no reanimator at all and cannot be answered by killing Xu-Ifit - cards in the earlier list that returned themselves from the yard numbered 0 of 22. (2) The claim is now scoped honestly: losing Xu-Ifit costs this deck the COLOSSUS plan, and what survives is a counterspell shell with Quantum Riddler (a 4/6 flier) and Timeline Culler as a recurring clock. That is a real fallback, and no other build in this run can say its plan B is 'out-counter them'. |
| `gas-out` | mitigation | Card flow is deep for a 22-card nonland list, and it is counted with the conditionals separated rather than folded in. UNCONDITIONAL self-replacement: Alpharael, Dreaming Acolyte x2 ('draw two cards' on ETB), Uthros Scanship ('draw two cards, then discard a card'), Codecracker Hound ('put one into your hand'), Quantum Riddler ('When this creature enters, draw a card') and Fell Gravship x2 (return a card from the yard to hand) = 7 of 22. CONDITIONAL on top of that: Unravel x2 draw only 'if the amount of mana spent to cast that spell was less than its mana value', and Quantum Riddler's draw-doubling needs one or fewer cards in hand - which a control deck that has spent its hand answering things routinely has. Behind all of it, Singularity Rupture targeting yourself converts the library into a graveyard that Xu-Ifit then converts into a board at no mana cost, and Timeline Culler x2 recast themselves from that yard for {B}. The deck's late-game resource is a zone, not a hand. |
| `raced` | accepted | The deck is behind on turns 1-3 by construction: the goldfish check reports an 18% turn-1 play rate, its cheapest interaction is 2 mana, and its pivot costs 6. Mitigating means trading counterspells or the wrath for cheap bodies, at which point it stops being the only deck in this cube that answers a spell before it resolves - which is its entire reason to exist as a separate build. Two costs are named rather than smoothed over: Zero Point Ballad's scalable sweep charges 'You lose X life' and there is ZERO lifegain in the mainboard, so the cheap early sweep is paid for in the resource a slow deck can least afford; and Depressurize, the cheapest answer, only kills power 3 or less. The sideboard's correction is Vote Out ('Convoke / Destroy target creature'), unconditional at zero rare cost. |
| `disruption-fizzle` | mitigation | Two vectors, and the sizing of the first is corrected. (1) OPPOSING GRAVEYARD HATE: dedicated opposing graveyard hate is roughly 2 of 249 nonland cards, not the 12.45% an earlier draft quoted. That 12.45% is threat_profile.graveyard_interaction, which counts every card that USES a graveyard - nine of its thirty-one names are cards in this very deck. The right key is dossier.structural_census.graveyard_hate, which lists ONE card (Dauntless Scrapbot); a hand probe finds one more the census missed (Chrome Companion), which is exactly the failure dossier.census_caveat warns about. The correction is against this deck's interest in the sense that it was over-stating a threat, and in its favour in the sense that the threat is smaller than claimed. Against two cards the answer is simply that 8 weighted yard-filler copies rebuild from empty and Singularity Rupture can refill the entire graveyard in one resolution by targeting yourself, which no one-shot exile keeps pace with. (2) The pivot turn is the real exposure and it is conceded rather than mitigated: Singularity Rupture is a SORCERY, so on the turn it is cast no counterspell is held up and the deck is open to anything. There is no way to fix that with this card. What the deck does instead is make the turn as late and as safe as possible - 8 interaction cards to reach it alive, and Zero Point Ballad as a cheaper scalable sweeper for the games where the pivot turn is too late to matter. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Weftwalking | 'shuffle your hand AND GRAVEYARD into your library, then draw seven cards.' In any other deck that is a refuel; in this one it is a self-mill deck deleting its own graveyard — the exact resource Singularity Rupture spends six mana to build and that Xu-Ifit and Scrounge for Eternity read from. A mythic that undoes the pipeline. |
| Specimen Freighter | 'return up to two target non-Spacecraft creatures to their owners' hands' at {5}{U}. Bounce puts creatures back in HANDS, not graveyards; against the decks this build most wants to beat it hands a reanimator's target back to be recast, and at 6 mana it competes directly with the turn Singularity Rupture wants. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.55   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.23 adj [MV 3.55 vs 2.5, 1 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  60.0%  prod  61.1%  gap  -1.1pp  [OK]
  U  demand  40.0%  prod  50.0%  gap -10.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```

```