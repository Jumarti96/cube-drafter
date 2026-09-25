---
deck_name: "ur-v2-galvanic-iteration-copy-and-extra-turns"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-08-31T03:50:44Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x10  Island
  x4   Mountain
  x2   Molten Tributary                             Island Mountain, taps for RU, enters tapped
  x1   Stormcarved Coast                            taps for RU, conditionally tapped
```

### CREATURES (4)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Delver of Secrets // Insectile Aberration    x2    U     threat                         C
  2  Deranged Assistant                           x1    U     engine                         C
  3  Biolume Egg // Biolume Serpent               x1    U     threat                         U
```

### INSTANTS & SORCERIES (19)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Faithless Looting                            x2    R     engine                         C
  1  Lightning Axe                                x2    R     interaction                    U
  1  Syncopate                                    x1    U     interaction                    C
  2  Abrade                                       x2    R     interaction                    U
  2  Galvanic Iteration                           x1    UR    payoff                         R
  2  Think Twice                                  x2    U     engine                         C
  3  Cackling Counterpart                         x2    U     payoff                         U
  3  Forbidden Alchemy                            x2    U     engine                         C
  4  Memory Deluge                                x1    U     engine                         R
  4  Mystic Retrieval                             x1    U     engine                         U
  5  Seize the Storm                              x2    R     payoff                         C
  7  Temporal Mastery                             x1    U     payoff                         M
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Compelling Deterrence                        x2    U     interaction: vs auras & equipment voltron      U
Imprisoned in the Moon                       x2    U     interaction: vs planeswalkers, indestructible  C
Nebelgast Herald                             x2    U     interaction: vs ground aggro (flash blocker)   U
Savage Alliance                              x2    R     interaction: vs token swarms / x-1 boards      U
Overcharged Amalgam                          x1    U     interaction: vs one must-counter spell; also a R
Summary Dismissal                            x1    U     interaction: vs copy / storm / extra-turn deck U
```

## ANALYSIS

### DECK IDENTITY

A UR deck built around one clause: Galvanic Iteration's 'When you next cast an instant or sorcery spell this turn, copy that spell'. The realistic kill is Seize the Storm - a 5-mana sorcery whose trampler is as big as the graveyard the deck has been filling, doubled either by Galvanic Iteration or by Cackling Counterpart x2, which copies the resolved TOKEN and inherits its characteristic-defining size. Temporal Mastery is the ceiling, and the honest reading of it is the {5}{U}{U} hard cast on turn 8-9, not the miracle line: combining 'Miracle {1}{U} ... if it's the first card you drew this turn' with Galvanic Iteration's 'when you NEXT cast ... this turn' requires casting Iteration in the upkeep, blind, before the draw is known. Delver of Secrets x2 is in the deck precisely because its 'look at the top card of your library' at upkeep is the only effect in the colour-usable pool that turns that blind commitment into an informed one.

### THE LINE THAT LOOKS BEST AND THE LINE THAT ACTUALLY WINS

The archetype notes propose Galvanic Iteration copying Temporal Mastery for two extra turns. That line is **affordable** — `{U}{R}` plus Miracle `{1}{U}` is four mana, against nine for the hard-cast pair — but it is not freely **arrangeable**, and that distinction is the whole design of this deck:

- Miracle fires "if it's the **first card you drew this turn**", i.e. on your draw step.
- Galvanic Iteration reads "When you **next** cast an instant or sorcery spell **this turn**".

So Iteration has to be on the stack in your **upkeep**, before you know what you are about to draw. That is a blind two-mana commitment at roughly 3–4% per draw step, on top of needing Iteration in hand (37.5% by turn 8). **Delver of Secrets ×2 is in this deck for exactly one reason**: "At the beginning of your upkeep, look at the top card of your library" is the only effect among the 119 colour-usable cards in this pool that shows you the top card *before* the draw step. It converts the blind commitment into an informed one — and it flips at 47.5% (19 of 40).

The line that actually wins is simpler:

| Turn | Play | Result |
|---|---|---|
| 5 | Seize the Storm `{4}{R}` | A trampler as big as the graveyard, ~4/4–6/6 |
| 6 | Cackling Counterpart `{1}{U}{U}` on the token | A second token of **identical** size; the first attacks |
| 7–8 | Attack with two tramplers | ~12 then ~13 damage |

### WHY THE COPY OF A TOKEN IS THE SAME SIZE

Seize the Storm grants the *token itself* the ability "This token's power and toughness are each equal to the number of instant and sorcery cards in your graveyard plus the number of cards with flashback you own in exile." That is a characteristic-defining ability printed on the token, so it is part of what "a token that's a copy of target creature you control" copies. Both tokens then recompute from the same game state. The same fact cuts the other way: they shrink together if the graveyard is attacked.

### ONE CARD YOU NEVER POINT GALVANIC ITERATION AT

**Memory Deluge.** Its text is "Look at the top X cards of your library, where X is the amount of mana **spent to cast** this spell." A copy is *put onto the stack*, not cast, and no mana is spent — so X = 0 and the copy looks at nothing. It is in the deck as the deepest instant-speed dig for a singleton, not as a copy target.

### THE COUNTS

19 of 40 mainboard cards are instants or sorceries. Seize the Storm's second clause reads "cards with **flashback** you own in exile" — so of the 13 flashback cards, **11 can feed it**: Forbidden Alchemy ×2 are excluded because their `{6}{B}` flashback is unpayable here, which means those two can never leave the graveyard at all. Temporal Mastery does not feed it either — it has miracle, not flashback.

One count the colour percentages hide: only **4 of the 7 red sources are untapped on turn 1**. Molten Tributary always enters tapped and Stormcarved Coast enters tapped until you control two other lands, so P(a Mountain in the opener) = 55.2% against the four cards that want `{R}` on turn 1.

### CARDS CONSIDERED BUT EXCLUDED — THE ITERATION GUIDE

**Rares and mythics.** The budget is fully spent (Galvanic Iteration, Temporal Mastery, Memory Deluge, Stormcarved Coast, Overcharged Amalgam in the sideboard):

| Card | Why it lost the slot |
|---|---|
| Jace, Unraveler of Secrets | The best unused mythic: repeatable "Scry 1, then draw a card" is what a 17-land deck holding singletons wants, and a planeswalker is the threat class this deck's opponents cannot answer with the removal they bring. It would replace Overcharged Amalgam. |
| Mass Hysteria | `{R}` for "All creatures have haste" — three of the four payoff cards make a summoning-sick token, so this is the one card that makes the turn-8 kill hold. Competes with Jace for the same freed slot. |
| Hanweir Battlements | Repeatable haste on a land, but it adds no blue against 19 of 28 pips and 13 blue sources of 17 lands. |
| Burning Vengeance / Thermo-Alchemist | 11 graveyard casts here, but both are the Flashback-Drain deck's clock; importing them collapses two of the four requested builds into one. |

**Commons and uncommons a tier below:**

| Card | Why |
|---|---|
| Silent Departure | Cut at Phase 9 (was ×2). Two cheap answers that also fed Seize the Storm's exile clause — but the failing failure mode was being *raced*, and a sorcery-speed bounce the opponent recasts does not block. The slots became Delver ×2. Cost: instants/sorceries 22 → 19, flashback cards 15 → 13, exile feeders 13 → 11. |
| Mystic Retrieval (2nd copy) | Kept at 1 on **curve**, not on impossibility. It reaches 21 of 23 nonland cards after a from-hand cast; only Temporal Mastery ("Exile Temporal Mastery") is permanently unreachable. `{3}{U}` competes with Forbidden Alchemy for turns 3–4. |
| Wandering Mind | Six cards deep beats Forbidden Alchemy's four and it is a body, but `{1}{U}{R}` wants both colours on turn 3 off three duals. |
| Mist Raven | The only card in the pool that is interaction *and* a creature, and a better Cackling Counterpart target than Deranged Assistant. `{2}{U}{U}` at four mana against a curve that already holds two 4-drops. |
| Tower Geist | Digs, adds to the graveyard count, leaves a 2/2 flier — cut for the same 4-mana slot Biolume Egg's blocking took. |
| Rise from the Tides | Its count is *destroyed* by this engine: 13 of 23 nonland cards leave the graveyard for exile when used. Seize the Storm occupies the slot and counts the exiled cards instead. |
| Fiery Temper | `{1}{R}{R}` against a 67.9%-blue pip demand on three dual lands. Replaced by Silent Departure at Step 0, then itself replaced. |

**Sideboard-consideration cards not taken:** Stitched Mangler (a two-turn tapper, but "enters tapped" means it does not block the turn it lands), Reckless Scholar (repeatable outlet on a 3-mana 1/1), Chandra Dressed to Kill (`{1}{R}{R}` against 7 red sources), Collective Defiance (4 mana with escalate on the deployment turns).

### SIDEBOARD GUIDE

The `Role / When to board in` column above is width-limited; this is the full reasoning.

| Card | Qty | When to board in |
|---|---|---|
| Imprisoned in the Moon | x2 | In vs planeswalkers and any permanent this deck's damage-based removal cannot answer. 'Enchanted permanent is a colorless land ... and loses all other card types and abilities.' |
| Nebelgast Herald | x2 | In vs ground aggro. 'Flash / Flying / tap target creature an opponent controls' buys a turn without costing a turn of development, which is what a deck assembling a 5-to-7 mana payoff needs. |
| Savage Alliance | x2 | In vs the cube's token decks. Escalate 'deals 1 damage to each creature target opponent controls' for {1} extra is the cheapest sweep effect in these colours, and this deck's own payoff is a single large trampler that a swarm chump-blocks. |
| Compelling Deterrence | x2 | In vs auras and equipment voltron - 'Return target nonland permanent to its owner's hand' at instant speed two-for-ones an enchanted creature, which Lightning Axe and Abrade cannot. |
| Summary Dismissal | x1 | In vs an opposing copy, storm or extra-turn deck: 'Exile all other spells and counter all abilities' answers a whole stack at once rather than one spell. |
| Overcharged Amalgam | x1 | In vs decks with a single must-counter spell, and as a 3/3 flash flier when this deck needs a body. 'When this creature exploits a creature, counter target spell, activated ability, or triggered ability' - note the exploit cost needs a creature, and the only bodies here are Deranged Assistant and Seize the Storm's token, so board it in alongside Nebelgast Herald. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:7  2:6  3:5  4:2  5:2  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5: Galvanic Iteration@0.7, Temporal Mastery@0.3) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10.4: Mystic Retrieval@0.8, Deranged Assistant@0.6) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 76%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The mainboard has no mass removal. Biolume Egg's 'Defender' 0/4 blocks one creature per turn and Abrade deals 3 damage to one target - neither answers a wide board, and an earlier draft wrongly upgraded this class to OK on the strength of those two cards. Against a go-wide board the plan is that Seize the Storm's token has trample, so chump blocks do not stop it; Savage Alliance x2 is in the sideboard, where escalate 'deals 1 damage to each creature target opponent controls' is the real answer. Maindecking it would cost 2 of the 5 remaining interaction slots in a deck that just traded three answers for three blockers.
  OK        single_large_threat: Lightning Axe, Abrade, Syncopate
  CONCEDED  noncreature_permanents: Partial at best, and stated as a concession rather than OK. Abrade destroys artifacts only and Syncopate must be held up. Against a RESOLVED enchantment this deck has 0 answers across all 50 cards, and dossier.threat_profile.enchantments is 25 cards (9.0%). This is pool-limited, not a build error: the cube's only enchantment answers are white. Compelling Deterrence x2 in the sideboard bounces a nonland permanent, which is the nearest available cover.
  OK        stack: Syncopate
  CONCEDED  graveyard: The cube's structural census reports 0 graveyard-hate cards, but a 0-match regex probe proves nothing (dossier census_caveat) and this claim was checked against oracle text rather than the probe. Two cards in the pool DO exile from a graveyard: Invasion of Innistrad // Deluge of the Dead ('{2}{B}: Exile target card from a graveyard') and Soul-Guide Gryff ('When this creature enters, exile up to one target card from a graveyard'). Both are black or white, both are one-card-at-a-time, and no mass graveyard exile exists in the pool. So graveyard interaction here is slow and incremental rather than absent, and this deck has no answer to it in these colours. Seize the Storm's token recalculates continuously and so is the one payoff here that a resolved Deluge of the Dead can shrink; Cackling Counterpart's copies inherit the same characteristic-defining ability and shrink with it.
```

- The assembly p-values printed by the structural gate (payoff 0.87, enabler 0.99) are the gate's own hypergeometric figures on reliability-weighted copies. Computed on unweighted whole cards the equivalents are P(at least one of the 4 real payoff cards by turn 8) = 86.2% and P(at least one Seize the Storm) = 61.5%; the second number is the one that matters, because Seize the Storm is the only payoff that needs no second card.
- The audit reports 4 cantrips and 5 accel after the Phase 9 swaps, but the list gained no mana source - Delver of Secrets does not accelerate. The figure is deck_audit's own classification from card tags and is left as the function computes it, because Phase 6 audits against that same function; it changes no decision, since the recommendation returns 16 either way and the deck sits at 17 with the +1 declared on the four-7-mana-sinks grounds.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | The deck's two best lines are mana sinks rather than fixed costs: Seize the Storm's 'Flashback {6}{R}' is a 7-mana second copy of the finisher, Cackling Counterpart's 'Flashback {5}{U}{U}' is a third, and Memory Deluge's 'Flashback {5}{U}{U}' is four more cards. Temporal Mastery's hard cast at {5}{U}{U} is specifically what the extra land is for. Excess lands are the resource this build is shortest on, not longest. |
| `screw` | mitigation | 8 of 23 nonland cards cost 1 and 6 more cost 2, so a two-land hand casts Faithless Looting, Lightning Axe, Silent Departure, Syncopate, Think Twice, Abrade, Deranged Assistant and Galvanic Iteration. Faithless Looting x2 and Forbidden Alchemy x2 are the dig, and Deranged Assistant turns a third land into a fourth. Goldfish measured 86% keepable, 88% on three lands by turn 3. |
| `decapitation` | mitigation | The clock is deliberately NOT the singletons. P(neither Galvanic Iteration nor Temporal Mastery is seen by turn 9) = (25/40)(24/39) = 38.5% - an earlier draft mis-stated this as 86.5%, which was P(not both present). The backup is Seize the Storm x2, P(at least one by turn 8 on the play) = 61.5%, a 5-mana sorcery that makes a 7/7-or-larger trampler with no other card required. Cackling Counterpart x2 is a multiplier rather than a backup - it produces nothing until a token exists - and is counted as such. |
| `gas-out` | mitigation | Forbidden Alchemy x2 ('put one of them into your hand and the rest into your graveyard'), Think Twice x2 and Memory Deluge are self-replacing or net-positive, and 11 of 23 nonland cards remain castable from the graveyard when the hand is empty (13 flashback cards minus Forbidden Alchemy x2, whose {6}{B} is unpayable). Mystic Retrieval recovers a payoff milled or discarded by the deck's own digging - and, per the corrected reading, one cast from hand as well - which is this deck's specific gas-out shape: not running out of cards, but running out of the RIGHT card. |
| `raced` | mitigation | Repaired at Phase 9 from an unforced acceptance. The deck previously had 0 blockers in 23 nonland cards. It now runs Biolume Egg // Biolume Serpent ('Defender / When this creature enters, scry 2'), a 0/4 wall for {2}{U} that also digs toward the payoffs, and Delver of Secrets x2, which block on turn 1 and become 3/2 fliers that race back. The three bodies cost one Syncopate and two Silent Departures - three answers traded for three blockers, because the mode that was failing was being raced, not being disrupted. Nebelgast Herald x2 and Savage Alliance x2 remain in the sideboard for the matchups that need more. |
| `disruption-fizzle` | mitigation | The critical turn is casting Seize the Storm or the Galvanic Iteration pair into open mana. Three properties limit the damage: Seize the Storm has 'Flashback {6}{R}', so a countered copy is still castable from the graveyard; it is a 2-of; and Cackling Counterpart can copy a token that already resolved, which is not answerable by a counterspell at all. Syncopate x2 protects the turn itself, and Summary Dismissal in the sideboard answers an opposing counter-war outright. The one line with no redundancy is Temporal Mastery, which is exactly why it is weighted 0.3 and is not the stated plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Crawl from the Cellar, Gravecrawler, Gisa and Geralf | The three named black splash candidates. Declined on the mana base: the UR pair has exactly 2 free duals in the cube and no UB or BR land also produces U and R, so a black source is subtracted from a base that must reach {5}{U}{U} on turn 7-8 with blue available. |
| Ulrich's Kindred | Its only ability costs {3}{G}, outside core_colors; the remainder is a 2/2 trample body. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.57   Ramp cards: 1   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.74 adj [MV 2.57 vs 2.5, 5 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  32.1%  prod  41.2%  gap  -9.1pp  [OK]
  U  demand  67.9%  prod  76.5%  gap  -8.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons capped at 2 copies: PASS - Seize the Storm C, Cackling Counterpart U, Faithless Looting C, Think Twice C, Forbidden Alchemy C, Lightning Axe U, Abrade U, Syncopate C, Silent Departure C, Molten Tributary C; sideboard Imprisoned in the Moon C, Nebelgast Herald U, Savage Alliance U, Compelling Deterrence U.
[PASS] Rares/mythics capped at 1 copy: PASS - Galvanic Iteration, Temporal Mastery (mythic), Memory Deluge, Stormcarved Coast (mainboard); Overcharged Amalgam (sideboard).
[PASS] At most 5 rare/mythic cards across mainboard + sideboard: PASS - 5 used, 0 unspent. Verified by Phase 5C check 6.
[PASS] Basic lands format-supplied and exempt: PASS - 10 Island, 4 Mountain.
[PASS] Forbidden Alchemy prints as U/B color identity because of its {6}{B} flashback. It is played on its base cast only ({2}{U}), which effective_cost.best_mode confirms is usable in [U,R]; the flashback is treated as unavailable throughout. Here that is an asset - it is the one dig spell that can never exile itself, so it is always a Mystic Retrieval target and always a card in the graveyard.: PASS - Forbidden Alchemy prints as U/B color identity because of its {6}{B} flashback. It is played on its base cast only ({2}{U}), which effective_cost.best_mode confirms is usable in [U,R]; the flashback is treated as unavailable throughout. Here that is an asset - it is the one dig spell that can never exile itself, so it is always a Mystic Retrieval target and always a card in the graveyard.
[PASS] Colour usability: PASS - Forbidden Alchemy prints as U/B because of its {6}{B} flashback and is played on its base {2}{U} cast, which effective_cost.best_mode confirms is usable in [U,R]; the flashback is treated as unavailable throughout, which is why those two copies are excluded from Seize the Storm's flashback-exile count. NOTE: the Phase 8 bundle projects usable_as as null on every row, so a grill agent cannot re-verify this from the bundle alone; it is verifiable from mana_cost, and Phase 5C check 4 runs best_mode directly.
```