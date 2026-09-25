---
deck_name: "g-ancient-triskelion"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "G"
format: "40-card"
built_at: "2026-07-31T16:28:20Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x15  Forest                   
  x2   Slippery Karst           enters tapped, cycles
```

### CREATURES (11)

```
CMC  Card                          Qty   Color  Role                                Rar
  2  Wall of Junk                  x2    C      Interaction (recurring blocker)     U
  3  Elvish Spirit Guide           x2    G      Infrastructure (burst mana)         U
  4  Forgotten Ancient             x1    G      Engine (counter accumulator)        R
  4  Gamekeeper                    x2    G      Engine (deploys the kill piece)     U
  4  Kavu Primarch                 x2    G      Threat (body / convoke fodder / co  C
  6  Kamahl, Fist of Krosa         x1    G      Threat (backup wincon)              M
  6  Triskelion                    x1    C      Engine (kill outlet)                R
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                          Qty   Color  Role                                Rar
  1  Worldly Tutor                 x1    G      Engine (finds either piece)         R
  2  Lull                          x1    G      Interaction (fog)                   C
  2  Nature's Lore                 x2    G      Infrastructure (ramp)               U
  3  Call of the Herd              x1    G      Threat (two bodies per card)        U
```

### OTHER SPELLS (7)

```
CMC  Card                          Qty   Color  Role                                Rar
  1  Wild Growth                   x2    G      Infrastructure (ramp)               C
  2  Invigorating Boon             x1    G      Engine (counter source)             U
  2  Sylvan Library                x1    G      Infrastructure (card draw)          M
  3  Dragon Blood                  x2    C      Engine (counter source)             U
  4  Icy Manipulator               x1    C      Interaction                         U
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                                              Rar
Break Asunder                 x2    G      Hate: artifacts/enchantments - Against the cube's 24 artifacts / 3  C
Emerald Charm                 x2    G      Hate: non-Aura enchantments / flex - Modal - destroys a NON-AURA e  C
Giant Spider                  x2    G      Flex: anti-evasion - Against the cube's 42 evasion cards - mono-gr  C
Lull                          x1    G      Flex: fog - Second copy against fast aggro while the engine assemb  C
Sandstorm                     x1    G      Flex: anti-swarm - Against token/weenie swarms. Note: the dossier   C
Tormod's Crypt                x2    C      Hate: graveyard - Against the cube's 45 graveyard-interaction card  U
```

## ANALYSIS

### DECK IDENTITY

A mono-green combo-midrange deck built on a two-card engine. Forgotten Ancient reads 'Whenever a player casts a spell, you may put a +1/+1 counter on this creature' - it grows off both players' spells - and at each of your upkeeps it may 'move any number of +1/+1 counters from this creature onto other creatures'. Moved onto Triskelion, every counter becomes 'Remove a +1/+1 counter from this creature: It deals 1 damage to any target', an instant-speed drain with no tap symbol and no timing restriction. Because both halves are single-copy rares, redundancy is built rather than assumed: Worldly Tutor finds either half (both are creature cards), and Gamekeeper turns that top-of-library placement into a free deploy - 'reveal cards from the top of your library until you reveal a creature card. Put that card onto the battlefield' - which is how a {6} kill piece arrives without paying {6}. Dragon Blood keeps feeding Triskelion if the Ancient is answered, Sylvan Library keeps the hand full, and Kamahl, Fist of Krosa ends games on bodies when the engine never assembles. Mono-green buys perfect mana and deep ramp at the cost of having no removal at all, so Wall of Junk, Icy Manipulator and Lull buy turns rather than trading.

### SLOT ALLOCATION

| Slot | Count | % of nonland | Rationale |
|---|---|---|---|
| lands | 17 | 42.5% | Computed by deck_audit.land_target; matches the recommendation exactly. |
| Engine & Infrastructure | 15 | 65% | CORRECTED after the approval round, which caught that the previous figure (13) described the pre-repair list. Recounted by role field: engine 8 (Forgotten Ancient, Triskelion, Dragon Blood x2, Invigorating Boon, Worldly Tutor, Gamekeeper x2) plus infrastructure 7 (Sylvan Library, Wild Growth x2, Nature's Lore x2, Elvish Spirit Guide x2) = 15. This is 15pp above the 40-50% combo ceiling and is the build's largest deviation, so it is defended at its true size rather than the understated one: both kill pieces are single-copy rares, and mono-green's only legal redundancy is search and cheat-into-play (Worldly Tutor, Gamekeeper x2) rather than extra copies - that is 3 slots the band does not anticipate. Mono-green also buys no fixing, so every mana slot is pure acceleration toward a {6} kill piece with nothing spent on duals. Sylvan Library is the 15th and was added in the Phase 9 repair as the deck's only card-draw engine. |
| Threats/Payoffs | 4 | 17% | CORRECTED after the approval round. Kamahl (backup wincon), Kavu Primarch x2 (convoke bodies and counter destinations) and Call of the Herd x1. The previous rationale defended a count of 6, but Symbiotic Beast and the second Call of the Herd were cut in the same Phase 9 repair that added Gamekeeper x2 - so the true figure is 4, and at 17% it is a SMALLER deviation above the 5-15% band than the record previously claimed. The engine's need for bodies is now met largely from the Engine bucket itself, since Gamekeeper x2 and Elvish Spirit Guide x2 are creature cards. |
| Interaction | 4 | 17% | Inside the 10-20% combo band. Mono-green has no creature removal anywhere in this pool, so 'interaction' here means buying turns: Wall of Junk x2 blocks and returns to hand, Icy Manipulator taps the largest threat each turn, Lull fogs a lethal swing. |

### COUNT-DEPENDENT VERDICTS

Every claim below is a numerator and a denominator against **this** list, not an adjective.

| Card | Verdict | Count |
|---|---|---|
| Gamekeeper | INCLUDE x2 at payoff weight 0.5 | 'When this creature dies, you may exile it. If you do, reveal cards from the top of your library until you reveal a creature card. Put that card onto the battlefield.' Creature cards in this list: Forgotten Ancient, Triskelion, Elvish Spirit Guide x2, Gamekeeper x2, Kamahl, Kavu Primarch x2, Wall of Junk x2 = 11 of 23 nonland cards, so a blind reveal hits a creature quickly - and Worldly Tutor's 'put the card on top' makes the reveal deterministic. Weighted 0.5 because it must die first and the reveal is random absent the Tutor. This is the dossier chain worldly-tutor-gamekeeper-deploy, whose other half was already mainboard and which the pre-grill build had not evaluated. |
| Sylvan Library | INCLUDE x1 - spends the 5th and final rare/mythic slot | 'At the beginning of your draw step, you may draw two additional cards.' This list has 0 other card-draw engines among 23 nonland cards; its entire card flow was 4 cyclers. The pre-grill gas-out entry claimed green's only pool draw was Jalum Tome and Urza's Blueprints and that mitigating would cost ramp - both false, since Sylvan Library is a {1}{G} enchantment, not a ramp cut, and was named in this deck's own considered-but-excluded list. |
| Invigorating Boon | INCLUDE x1 (not x2) | Triggers on 'Whenever a player cycles a card'. Self-cycle sources in this 40: Slippery Karst x2 and Lull x1 = 3 of 40 after Break Asunder moved to the sideboard. That supports one copy, not two; declared at assembly weight 0.45. Deck A, which fields 7 cyclers, runs two copies - the difference is the count, not the card. |
| Worldly Tutor | INCLUDE x1 at payoff weight 0.7 | 'Search your library for a creature card' finds either engine half because both are creatures: 2 of the 2 engine pieces are creature cards. Weighted below 1 because it puts the card on top rather than into hand. |
| Kavu Primarch | INCLUDE x2 at payoff weight 0.6, role CORRECTED | Role relabelled after the grill: Kavu Primarch is NOT a counter source for this pipeline. Forgotten Ancient moves counters 'from THIS creature' - i.e. only off itself - so the four counters Kavu enters with can never reach Triskelion. Its real contributions are being a legal counter DESTINATION and convoke fodder. Guaranteed convoke fodder is 6 creature copies, not 8: an earlier count double-booked Elvish Spirit Guide x2, whose 'Exile this creature from your hand: Add {G}' mode and its battlefield-body mode are mutually exclusive, and the screw mitigation banks on the mana mode. |
| Nut Collector | EXCLUDE - re-derived | The earlier verdict quoted only 'All Squirrels get +2/+2' and claimed 0 Squirrels. That deleted the card's first line: 'At the beginning of your upkeep, you may create a 1/1 green Squirrel creature token' - it manufactures its own Squirrels, so the 0-Squirrel numerator was wrong and the invented Squirrel Nest dependency was not a real condition. Correctly excluded on cost instead: at {5}{G} mythic it competed for the single remaining rare/mythic slot against Sylvan Library at {1}{G}, which repairs an UNSATISFIED failure mode. Threshold also needs seven graveyard cards, which this list reaches only through 3 cyclers. |
| Squirrel Nest | EXCLUDE | 'Enchanted land has {T}: Create a 1/1 green Squirrel creature token.' Each body costs the enchanted land's tap, i.e. one mana every turn it fires, against a deck needing {3} for Dragon Blood, {6} for Triskelion and {2}{G}{G}{G} for Kamahl; at {1}{G}{G} it also produces nothing the turn it resolves. Gamekeeper x2 answers the same body-starvation while additionally deploying the kill piece, taking creature cards from 10 to 11 of 23. |
| Birds of Paradise | EXCLUDE | A legitimate claimant on the last rare/mythic slot, but that slot went to Sylvan Library, which repairs an UNSATISFIED gas-out mode. The audit already reports accel 6 and a land count exactly on target (17/17), so a seventh accelerant buys less than the deck's only card-draw engine. In mono-green its colour-fixing half is worth nothing. |
| Terravore | EXCLUDE - count corrected | 'power and toughness ... equal to the number of land cards in all graveyards'. The earlier verdict claimed 0 self-mill outlets; the correct count is 2 - Slippery Karst x2 are Land cards with 'Cycling {2}', so cycling one puts a land into your own graveyard. 2 is still not a threat, so the conclusion stands on a corrected numerator. |
| Emerald Charm | SIDEBOARD x2, not mainboard | Its untap mode can untap Dragon Blood for a second '{3}, {T}: Put a +1/+1 counter on target creature' in one turn, but that spends a whole card for one counter and the list already runs 2 Dragon Blood. Its enchantment mode is NON-AURA only, so it answers 18 of the cube's 33 enchantments, not 33 of 33 - recorded here because the sideboard entry previously implied full coverage. |
| Werebear | EXCLUDE | Threshold needs seven graveyard cards; this list fields 3 cyclers as its only graveyard fillers. |
| Elvish Aberration | EXCLUDE | Its 'Forestcycling {2}' would raise Invigorating Boon's trigger sources from 3 to 5 and its '{T}: Add {G}{G}{G}' is real ramp, but at {5}{G} it is a sixth card at 6-or-more mana in a list already carrying Triskelion {6} and Kamahl {6}. |
| Helm of Awakening | EXCLUDE | 'Spells cost {1} less to cast' is symmetric: it discounts this deck's 23 nonland cards and every card the opponent casts. It is also a rare against a budget now fully spent at 5 of 5. |

### MANA DERIVATION

**Land count.** None. Built to exactly the recommended 17.

**Composition.** Mono-green means no fixing is required and every basic is a Forest, so 15 of the 17 land slots are Forests. Slippery Karst x2 is the only nonbasic: it 'enters tapped' but reads 'Cycling {2}', converting a surplus land into a card, triggering Invigorating Boon, and - because it is itself a Land card - putting a land into the graveyard when cycled. The five Lairs self-bounce and were not considered. Nature's Lore ('Search your library for a Forest card') fetches only from the 15 Forests, which is why the basic count is kept high rather than diluted with utility lands.

**Pips.** Mainboard green pips total 18, matching audit.pip_demand {G: 18}. This figure was wrong twice: an early draft recorded 25, and the first correction recorded 20 - which was the PRE-repair mainboard's count, fixed without re-deriving against the changed list. 18 is the recount against the list as built. Every land produces G, so demand 100% / production 100%, gap +0.0pp. Kamahl {4}{G}{G} is the only remaining double-pip cost; Symbiotic Beast and Break Asunder, the other {G}{G} cards, both left the mainboard in the Phase 9 repair.

### SKELETON SELECTION (Phase 5B Step 0)

Archetype family **combo** — The locked thesis default_role is 'combo' - the kill is a two-card engine (Forgotten Ancient stockpiling counters, Triskelion converting them to damage), not a creature race.

Three independent, pool-blind sketchers each built one interpretation of that single family; an independent shape judge picked one whole build.

- **Chosen:** Sketch 3, lens *most resilient to disruption*.
- **Judge grounds:** Matches Sketch 1's speed/ramp shape while being the only build to deliver the thesis's own backup-wincon clause (Kamahl / Symbiotic Beast / Wall of Junk) and bank a rare/mythic slot for the sideboard. NOTE: the grill found the banked slot was never actually spent, which would have collapsed this ground to the backup-wincon clause alone; the repair spends it on Sylvan Library, so the benefit the judge credited is now collected. Symbiotic Beast was subsequently cut for Gamekeeper, which serves the same removal-resistance role while also deploying the kill piece.
- **Rejected:** lens *fastest goldfish* — Cleanest oracle-to-role fit and maximal speed, but no backup wincon and zero rare/mythic sideboard reserve leaves the thesis's resilience clause undelivered.
- **Rejected:** lens *most redundant assembly* — 70% Engine overshoots the band and starves Threats/Payoffs; Urza's Blueprints (Echo {6}) works against a turn-9 clock; zero rare/mythic sideboard reserve compounds the cost.
- **Weak keystones:** The judge flagged Giant Spider (role 'interaction' but its oracle is only Reach, a vanilla blocker) and Urza's Blueprints (Echo {6} is generic draw, not engine-finding, and its tempo cost fights a turn-9 clock). Both belong to rejected Sketch 2. Resolved on the merits rather than by sketch membership: Urza's Blueprints is excluded outright for the Echo reason the judge gave, and Giant Spider is excluded from the mainboard for exactly the stated reason - Reach is not interaction - and placed in the sideboard x2 where its actual function, blocking the cube's 42 evasion cards, is the reason to board it in.
- **Harvested from rejected builds:** Kavu Primarch (Threat (counters body)); Nature's Lore (Infrastructure (ramp)); Wild Growth (Infrastructure (ramp)); Elvish Spirit Guide (Infrastructure (burst mana))

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:3  2:7  3:5  4:6  6:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 4.7: Worldly Tutor@0.7, Gamekeeper@0.5, Gamekeeper@0.5, Kamahl, Fist of Krosa@0.8, Kavu Primarch@0.6, Kavu Primarch@0.6) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 4 copies (effective 3.45: Invigorating Boon@0.45) → p=0.76 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 49%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Triskelion, Lull, Wall of Junk
  OK        single_large_threat: Icy Manipulator, Wall of Junk, Triskelion
  CONCEDED  noncreature_permanents: Break Asunder was moved out of the mainboard so the last rare/mythic slot could go to Sylvan Library, which repairs an UNSATISFIED gas-out mode; mono-green's only other artifact answer in this pool is Emerald Charm's non-Aura enchantment mode. Both are sideboarded 2x each.
  CONCEDED  stack: Green has no counterspells anywhere in this pool, so stack interaction is unavailable at any slot cost.
  CONCEDED  graveyard: Tormod's Crypt is the cube's only graveyard hate and is dead against decks that do not use the graveyard; it sits in the sideboard 2x rather than the maindeck.
```

- Slot-bucket reconciliation: build_output.slot_allocation and structural_checks.assembly deliberately partition the same cards differently. slot_allocation is a deckbuilding budget (where the 23 nonland slots went), while assembly.roles counts FUNCTIONAL copies of the pipeline roles - so Worldly Tutor and Gamekeeper x2 count as payoff copies there despite sitting in the Engine budget here, and Call of the Herd counts in neither. Both are internally consistent and both PASS; they are not meant to reconcile card-for-card.
- Coverage correction: an earlier draft listed Kamahl, Fist of Krosa under wide_boards. Its '{2}{G}{G}{G}: Creatures you control get +3/+3 and gain trample' is an offensive pump, not an answer to a wide board. Triskelion, Lull and Wall of Junk carry that class on their own and Kamahl was removed from the declaration.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Slippery Karst x2 read 'Cycling {2}', turning a surplus land into a card. Dragon Blood x2 ('{3}, {T}: Put a +1/+1 counter on target creature') is an uncapped mana sink. Kavu Primarch's 'Kicker {4}' turns 8 mana into a 7/7, and Kamahl's '{2}{G}{G}{G}: Creatures you control get +3/+3 and gain trample' plus '{G}: Target land becomes a 1/1 creature' convert arbitrary excess mana into damage - Kamahl can even animate the flooded lands themselves. |
| screw | mitigation | Mono-green means no colour screw is possible: all 17 lands produce {G} and the audit reports a +0.0pp gap. Against land screw, Elvish Spirit Guide x2 ('Exile this creature from your hand: Add {G}') is free mana from a stalled hand, Wild Growth x2 at {G} doubles a land, and Nature's Lore x2 puts a Forest onto the battlefield untapped. The goldfish check reports 86% keepable hands. |
| decapitation | mitigation | The engine is two rares at one copy each, which is the deck's central fragility, so redundancy is built rather than assumed. Worldly Tutor finds either half because both are creature cards. Gamekeeper x2 then converts a death into a free deploy - 'reveal cards from the top of your library until you reveal a creature card. Put that card onto the battlefield' - which after a Tutor is deterministic and is how a {6} Triskelion arrives without paying {6}. If Forgotten Ancient is answered, Dragon Blood x2 still feeds Triskelion. If Triskelion is answered, Kamahl ends the game on damage instead: '{2}{G}{G}{G}: Creatures you control get +3/+3 and gain trample until end of turn'. The honest residual is that the Dragon-Blood-only line is {3} per point of damage, which is a real line but not a fast one. |
| gas-out | mitigation | REPAIRED after the grill marked this UNSATISFIED. The earlier entry was an `accepted` resting on a false claim - that green's only draw in this pool was Jalum Tome and Urza's Blueprints, and that mitigating would cost ramp. Sylvan Library is in the pool, is a {1}{G} enchantment rather than a ramp cut, and was named in this deck's own considered-but-excluded list, so the stated tradeoff did not exist. It now occupies the 5th and final rare/mythic slot and reads 'At the beginning of your draw step, you may draw two additional cards.' Supporting it: Call of the Herd is 'Cards: Net-Positive' via flashback, Gamekeeper x2 convert a death into a free permanent off the top, and the 3 cyclers replace themselves. |
| raced | mitigation | Wall of Junk x2 is the key card: 'Defender / When this creature blocks, return it to its owner's hand at end of combat' means a 0/7 blocks the largest attacker every turn and is never lost. The honest price, corrected after the grill, is that it must be RECAST for {2} every turn it blocks - roughly 10 mana across turns 5-9, competing with Dragon Blood's {3} and Kamahl's {2}{G}{G}{G} - not a one-time {2}. Lull buys a full turn for {1}{G} and cycles when not needed; Icy Manipulator taps the biggest attacker before it attacks. Against the cube's 42 evasion cards the mainboard answers fliers only through Triskelion's ping and Icy Manipulator's tap, so Giant Spider x2 (Reach) is a sideboard fix rather than a mainboard one - stated as a known gap, not claimed as a mainboard mitigation. |
| disruption-fizzle | mitigation | Triskelion's activation is 'Remove a +1/+1 counter from this creature: It deals 1 damage to any target' - no tap symbol, no timing restriction, no mana cost. In response to any removal aimed at Triskelion, the whole stockpile can be drained at instant speed, so the counters are never stranded. The one turn that genuinely fizzles is Forgotten Ancient's upkeep move being answered in response, which loses the redistribution but not the counters already on the Ancient. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Birds of Paradise | Excellent turn-1 ramp, but it is a rare and the 5-card rare/mythic cap is already spent on Forgotten Ancient, Triskelion, Worldly Tutor and Kamahl; in mono-green its colour-fixing half is worth nothing. |
| Sylvan Library | Mythic. 'pay 4 life' per extra card is a real cost in a deck that must survive to turn 9, and it would consume the last rare/mythic slot the sideboard may need. |
| Urza's Blueprints | 'Echo {6}' means paying six mana again the following upkeep just to keep a {T}: Draw a card - against a turn-9 clock that is two full turns of the deck's mana for one card per turn. |
| Helm of Awakening | 'Spells cost {1} less to cast' is symmetric and this deck casts 23 nonland cards to the opponent's whole deck; it is also a rare competing with Worldly Tutor for the same slot. |
| Lotus Blossom | 'At the beginning of your upkeep, you may put a petal counter' - it needs three or four turns of setup before it produces the mana Triskelion wants, and it is a rare. |
| Werebear | '{T}: Add {G}' is real ramp, but its Threshold bonus needs seven cards in the graveyard and this deck fills the graveyard only through its 4 cyclers; cut to make room for bodies the engine can target. |
| Terravore | Power and toughness 'equal to the number of land cards in all graveyards' - this deck has no self-mill and no fetch effects, so the count starts at 0 and climbs only from opponents' land destruction. |
| Battlefield Scrounger | Its pump is Threshold-gated and costs putting three graveyard cards back into the library, which fights the same graveyard this deck barely fills. |
| Squirrel Nest | '{T}: Create a 1/1 green Squirrel' costs the enchanted land's tap every turn, competing directly with the {3} Dragon Blood activation and the {6} for Triskelion. |
| Juggernaut | 'This creature attacks each combat if able' removes the choice to hold blockers back, which is exactly what a deck assembling a two-card engine to turn 9 needs to do. |
| Jalum Tome | '{2}, {T}: Draw a card, then discard a card' is filtering, not card advantage; at 3 mana plus 2 per activation it competes with Dragon Blood for the same mana every turn. |
| Krosan Restorer | '{T}: Untap target land' is net-neutral mana until Threshold turns on three untaps, and this deck does not reliably reach seven cards in the graveyard. |
| Deadwood Treefolk | 'Vanishing 3' means it sacrifices itself after three upkeeps; the recursion is real but a 6-mana body that leaves on its own does not hold the board while the engine assembles. |
| Crawlspace | 'No more than two creatures can attack you each combat' is a rare, and the rare budget is spent; Wall of Junk covers a similar role at common and returns to hand each block. |
| Dodecapod | Its +1/+1 counters arrive only 'If a spell or ability an opponent controls causes you to discard this card' - the deck cannot enable that itself, so the counters mode is entirely in the opponent's hands. |
| Nut Collector | Mythic, six mana, and its Squirrel anthem is Threshold-gated; the deck fields 0 other Squirrels unless Squirrel Nest is also run. |
| Saproling Symbiosis | 'Create a 1/1 green Saproling for each creature you control' scales with a board this deck does not have when it most needs help, and it is a rare against a spent budget. |
| Sandstorm | 'deals 1 damage to each attacking creature' is a strong sideboard card against swarms but blank against the single large threats mono-green actually loses to; sideboarded x2. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.39 adj [MV 2.96 vs 2.5, 6 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
1a mainboard size                PASS   40 vs 40
1b sideboard size                PASS   10 vs 10
2 exact-name membership          PASS   []
3 copy limits                    PASS   []
3b rare+mythic <=5               PASS   5: ['Forgotten Ancient', 'Triskelion', 'Worldly Tutor', 'Sylvan Library', 'Kamahl, Fist of Krosa']
4 colour usability               PASS   []
5a splash <=3 per colour         PASS   []
5b splashed cards are candidates PASS   []
```
