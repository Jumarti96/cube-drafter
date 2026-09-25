---
deck_name: "wu-nine-equipment-unblockable"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WU"
format: "40-card"
built_at: "2026-08-06T02:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  8x Plains
  6x Island
  2x Idyllic Beachfront     WU dual, always enters tapped
```

### CREATURES (9)
```
CMC  Card                            Qty   Color  Role                                    Rar
2    Dockworker Drone                x1    W      Counter donor on death                  C
2    Honored Knight-Captain          x2    W      Two bodies + Equipment tutor            U
2    Illvoi Operative                x2    U      Carrier - grows on 2nd spell            C
3    Cosmogrand Zenith               x1    W      2nd-spell payoff - counters/tokens      M
3    Illvoi Infiltrator              x1    U      Second unblockable route + draw         U
4    Sunstar Lightsmith              x2    W      Carrier - grows and draws               U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                            Qty   Color  Role                                    Rar
1    Honor                           x2    W      Permanent counter + cantrip             U
2    Dual-Sun Technique              x2    W      Double strike finisher + cantrip        U
2    Mental Modulation               x2    U      Tap a blocker + cantrip                 C
```

### OTHER SPELLS (9)
```
CMC  Card                            Qty   Color  Role                                    Rar
1    Atomic Microsizer               x2    U      THESIS ENABLER - unblockable            U
1    Hardlight Containment           x1    W      Exile a creature + ward an Equipment    R
1    Squire's Lightblade             x2    W      Flash attachment, first strike          C
2    Illvoi Light Jammer             x2    U      Attachment + flash hexproof             C
2    The Dominion Bracelet           x1    C      Cheapest equip, redeploys for {1}       M
3    Banishing Light                 x1    W      Catch-all exile                         C
```

## SIDEBOARD (10)
```
Card                            Qty   Color  Role / When to board in                         Rar
Annul                           x2    U      vs artifacts (30% of cube) / enchantments       U
Cryoshatter                     x2    U      vs a single large threat, 1 mana                C
Desculpting Blast               x1    U      vs a resolved threat, tempo bounce              U
Emergency Eject                 x1    W      vs a resolved permanent (e.g. Tractor Beam)     U
Unravel                         x1    U      vs the cube's 5 sweepers / key spells           U
Radiant Strike                  x2    W      vs artifacts - W's only artifact answer         C
Beyond the Quiet                x1    W      vs wide boards, when behind on board            R
```

## ANALYSIS

### DECK IDENTITY

W/U Equipment Voltron built as a card-advantage tempo deck. A cheap carrier accumulates +1/+1 counters and Equipment, then Atomic Microsizer's attack trigger is aimed at the carrier itself to make it unblockable; the 1/1 base it sets is applied in layer 7b, beneath the Equipment's static bonuses (7c) and the +1/+1 counters (7d), so everything accumulated survives the reset. Illvoi Infiltrator is a second, Equipment-independent unblockable route, though at one copy the whole evasion package is 3 of 24 nonland cards. Nearly every counter-adder and trick also draws a card, so removal on a carrier costs tempo but not card equity.

### THE LAYER TRICK, AND WHAT IT COSTS

Atomic Microsizer's trigger reads "choose up to one target creature. That creature can't be blocked this turn and has base power and toughness 1/1 until end of turn." Aimed at our own attacker it grants unblockable, and because base-setting is a layer 7b effect it is applied *before* Equipment bonuses (7c) and +1/+1 counters (7d) — so a carrier with three counters and two Equipment keeps all of it.

What the thesis does not say, and should: layer 7b **replaces printed power**, so the line deletes everything above 1 that is not a counter or an attachment. Per copy, aiming the trigger at a naked carrier costs Sunstar Lightsmith (3/3) two power, Illvoi Operative (2/1) one, and Cosmogrand Zenith (2/4) one. Only Illvoi Infiltrator (1/3) is neutral — and it has its own evasion clause and does not need the trigger. The line is only profitable once counters and a second attachment are down, which is precisely why the goldfish is turn 7 and not turn 5.

### THE EQUIPMENT CENSUS IS THE REAL CONSTRAINT

This cube contains **seven distinct Equipment in total** and exactly **one Equipment-matters card** (Honored Knight-Captain, whose tutor costs {4}{W}{W} and eats the creature). There are no "whenever equipped creature attacks" payoffs, no equip-cost reducers and no modified-matters. Five of the seven are castable in W/U: Atomic Microsizer, Squire's Lightblade, Illvoi Light Jammer, The Dominion Bracelet and Auxiliary Boosters. This list runs four of the five at 7 copies. "Voltron" here therefore means *counters plus attachments on one body*, not an Equipment-synergy engine — the counters are the durable half of the stack and the Equipment are the replaceable half.

### THE SECOND-SPELL DENOMINATOR

Three cards key on casting two spells in a turn — Illvoi Operative x2 ("put a +1/+1 counter on this creature"), Sunstar Lightsmith x2 ("put a +1/+1 counter on this creature and draw a card"), Cosmogrand Zenith x1 ("choose one - create two 1/1 tokens; or put a +1/+1 counter on each creature you control"), plus Illvoi Infiltrator x1's evasion clause. That is 6 of 24 nonland copies. The denominator that turns them on: **19 of the 24 nonland cards cost one or two mana**, so a double-spell turn is routine from turn 3.

### WHAT THIS DECK LOSES TO

| Axis | Why it hurts | The line |
|---|---|---|
| A resolved Tractor Beam | "You control enchanted permanent" takes the carrier permanently; hexproof and indestructible are until-end-of-turn and neither undoes a control change | Banishing Light maindeck, Emergency Eject from the board |
| Symmetric sweepers | 5 in the cube; the board is one carrier plus attachments, so a wipe orphans 7 cards | Unravel from the board; rebuild off Honored Knight-Captain tokens |
| A faster clock | 56 evasion cards (22.5% density) and no maindeck lifegain | Accepted - see failure modes |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  1:7  2:12  3:3  4:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.6: Illvoi Infiltrator@0.8, Cosmogrand Zenith@0.8) → p=0.88 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 10.5: The Dominion Bracelet@0.9, Dockworker Drone@0.6, Honored Knight-Captain@0.5, Honored Knight-Captain@0.5) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 75%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: W/U at this curve has no sweeper the plan can afford maindeck; a symmetric sweeper would exile our own carrier and orphan seven attachment cards. Beyond the Quiet is in the sideboard for the matchups where this is the losing axis.
  OK        single_large_threat: Banishing Light, Hardlight Containment, Atomic Microsizer
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: No maindeck counterspell; the tempo plan spends every mana on its own board. Annul x2 and Unravel x1 are sideboarded for the decks whose key spell must be answered on the stack.
  CONCEDED  graveyard: The cube's graveyard density is 31 of 249 nonland cards (12.5%) and none of it is a fast combo kill; the clock races it rather than answering it.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Surplus lands buy equip costs: The Dominion Bracelet 'Equip {1}', Atomic Microsizer 'Equip {2}', Squire's Lightblade and Illvoi Light Jammer 'Equip {3}' move an orphaned attachment onto a fresh carrier. Honored Knight-Captain x2 ('{4}{W}{W}, Sacrifice this creature: Search your library for an Equipment card, put it onto the battlefield, then shuffle') is a six-mana sink that converts flood into a tutored attachment. |
| screw | mitigation | 7 of 24 nonland cards cost one mana (Atomic Microsizer x2, Squire's Lightblade x2, Honor x2, Hardlight Containment x1) and 12 cost two, so two-land hands deploy on curve. Stated honestly: only 4 of those 7 are castable into an empty turn-1 board - Honor needs 'target creature' and Hardlight Containment needs 'Enchant artifact you control'. The goldfish simulator (1000 hands, seed 0) reports 84% keepable and 84% with three lands by turn 3; the no-mulligan hypergeometric equivalents are 79.0% and 70.8% on the play, and the two statistics must not be read as the same measure. |
| decapitation | mitigation | Carrier redundancy is 6 payoff copies across 4 names (Illvoi Operative x2, Sunstar Lightsmith x2, Illvoi Infiltrator x1, Cosmogrand Zenith x1), so no single removal spell ends the plan. On the turn it matters the instant-speed answer is Illvoi Light Jammer x2 ('Flash ... That creature gains hexproof until end of turn') - one protection source, not two, after Reroute Systems was cut. Dockworker Drone's 'When this creature dies, put its counters on target creature you control' is the only card in the pool that saves the counter stack from a dead carrier. Attachments survive the carrier and re-attach for {1}-{3}. |
| gas-out | mitigation | 9 of 24 nonland cards replace themselves or draw: Honor x2 ('Draw a card'), Dual-Sun Technique x2 ('If it has a +1/+1 counter on it, draw a card'), Mental Modulation x2 ('Draw a card'), Sunstar Lightsmith x2 ('put a +1/+1 counter on this creature and draw a card'), Illvoi Infiltrator x1 ('Whenever this creature deals combat damage to a player, draw a card'). Sunstar Lightsmith and Illvoi Infiltrator are recurring rather than one-shot. |
| raced | accepted | Against the cube's fastest starts (56 evasion cards, 22.5% density) this deck cannot win a pure race: its goldfish is turn 7 and it has no maindeck lifegain and no maindeck sweeper. Mitigating would mean maindecking Radiant Strike ('You gain 3 life') plus blockers, which costs the attachment and cantrip slots the kill mechanism needs - the deck would stop assembling a carrier by turn 5 and would no longer be an Equipment Voltron deck. |
| disruption-fizzle | mitigation | The critical turn is an attack, not a spell: Atomic Microsizer's trigger fires on attacking and needs no additional mana, so a counterspell cannot answer it. Against targeted removal on that turn the instant-speed answer is Illvoi Light Jammer x2 ('Flash ... gains hexproof until end of turn') - a single protection source after Reroute Systems was cut. If the carrier still dies, the attachments remain on the battlefield and re-attach next turn rather than being two-for-one'd. Hexproof does not answer exile, -X/-0 or steal effects, of which the pool contains several. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Auxiliary Boosters | A fifth W/U-castable Equipment and the only one granting flying without the base-P/T reset, but at MV 5 it would be the highest card in a list whose avg MV is 2.00 on 16 lands - 1 of 24 cards arriving turn 5, after the thesis wants the carrier assembled. The strongest single swap-back candidate if the list ever wants a sixth attachment. |
| Uthros Psionicist | 'The second spell you cast each turn costs {2} less to cast' - but 19 of 24 nonland cards cost 1-2 mana, so the discount is fully consumed by only 17 of 24 and wasted on the rest; and it adds no counter, no attachment and no evasion. Mental Modulation supplies the same second-spell density at MV 2 with a board effect. |
| Luxknight Breacher | 'Enters with a +1/+1 counter for each other creature and/or artifact you control' scales off 16 of 24 nonland cards, but at MV 4 it is a 2/2 base that does not help build the board it counts, and it was the copy driving the threat slot 2x past its band. |
| Sunstar Chaplain | Rare; a 3/2 for two whose counter trigger requires two or more tapped creatures at end step, so it produces nothing on a turn we did not attack. Its rare slot was re-spent on Cosmogrand Zenith. |
| Reroute Systems | The indestructible mode is real protection, but the second mode deals 2 damage only to a TAPPED creature and this list contains nothing that taps an opposing creature except Mental Modulation - it killed 0 of the pool's large bodies. Cut for Mental Modulation, which taps AND cantrips. |
| Emissary Escort | 'Gets +X/+0, where X is the greatest mana value among other artifacts you control' - the highest-MV artifact in this list is 2 (Illvoi Light Jammer / The Dominion Bracelet), so it is a 2/4 for two mana in 100% of games. Rare slot better spent. |
| Moonlit Meditation | Token-copying payoff; this list creates tokens on 3 of 24 nonland cards (Honored Knight-Captain x2 plus Cosmogrand Zenith's token mode) - too thin a denominator to build around. |
| Pulsar Squadron Ace | Its ETB digs for a Spacecraft; this list runs zero Spacecraft, so it is a vanilla 1/2 with a counter in 100% of games. |
| Pinnacle Starcage | 'Exile all artifacts and creatures with mana value 2 or less' is symmetric and would exile our own Equipment and carriers - 19 of our 24 nonland cards are MV 2 or less. |
| Tezzeret, Cruel Captain | Mythic. Its 0 ability only puts a counter on ARTIFACT creatures; this list runs 1 artifact creature (Dockworker Drone) of 24 nonland cards, so the counter mode is blank on the other carriers. |
| Tractor Beam | 'You control enchanted permanent' is a Control Magic, not a Voltron attachment; at {2}{U}{U} it steals rather than builds the carrier, and it is the double-pip cost the mainboard deliberately avoids. |
| Hylderblade / Meltstrider's Gear / Meltstrider's Resolve / Pain for All | Off-colour (B, G, G, R). WU's only dual is a tapped Idyllic Beachfront and no pool land produces W/U plus a third colour, so zero off-colour cards were considered and splash_colors is empty. |
| Unravel (maindeck) | {1}{U}{U} is the only double-pip demand in the candidate pool and would warp a mana base with 8 blue sources; demoted to the sideboard so the mainboard has zero double-pip cards and a clean 61/39 pip split. |
| Beyond the Quiet (maindeck) | 'Exile all creatures and Spacecraft' is symmetric - it exiles our own carrier and orphans 7 attachment copies. Correct as a sideboard card against wide boards only. |
| Dawnstrike Vanguard | Six mana for an end-step counter engine; the goldfish clock resolves before it stabilises. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.0   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.00 adj [MV 2.0 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand  39.1%  prod  50.0%  gap -10.9pp  [OK]
  W  demand  60.9%  prod  62.5%  gap  -1.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] base: cube_mainboard
  [PASS] commons_uncommons_max_2_copies: OK
  [PASS] rares_mythics_max_1_copy: OK
  [PASS] rare_mythic_total_cap_6: 4 used - Cosmogrand Zenith (M, MB), The Dominion Bracelet (M, MB), Hardlight Containment (R, MB), Beyond the Quiet (R, SB)
  [PASS] basic_lands_exempt: Plains 8, Island 6 - format-supplied, unlimited
  [PASS] colour_usability: all 22 distinct nonland names usable in W/U via effective_cost.best_mode; no splash
```