---
deck_name: "gw-terrasymbiosis-engine"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GW"
format: "40-card"
built_at: "2026-08-02T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x8  Plains          Basic
x7  Forest          Basic
x2  Radiant Grove   GW dual, enters tapped
```

### CREATURES (13)

```
CMC  Card                         Qty  Color  Role                                         Rar
  2  Broodguard Elite             x1   G      X counters; LTB relocates them               U
  2  Dockworker Drone             x2   W      Enters countered; re-donates on death        C
  2  Dyadrine, Synthesis Amalgam  x1   GW     X counters, trample; attack draws            R
  3  Cosmogrand Zenith            x1   W      Mass counter or two tokens                   M
  3  Rayblade Trooper             x2   W      Counter distributor; token rebuild           U
  4  Ouroboroid                   x1   G      ENGINE - compounding mass counters           M
  4  Seedship Agrarian            x1   G      Landfall counter + Lander; card-free growth  U
  4  Sunstar Lightsmith           x2   W      Second-spell counter + draw                  U
  5  Haliya, Ascendant Cadet      x2   GW     Attack counters + combat-damage draw         U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card             Qty  Color  Role                                                         Rar
  1  Honor            x2   W      Counter + cantrip; fires Terrasymbiosis for 1                U
  1  Reroute Systems  x2   W      Interaction - 2 dmg to a tapped creature, or indestructible  U
  3  Emergency Eject  x2   W      Instant unconditional destroy                                U
```

### OTHER SPELLS (4)

```
CMC  Card                    Qty  Color  Role                                          Rar
  3  Banishing Light         x1   W      Unconditional nonland exile                   C
  3  Terrasymbiosis          x1   G      ENGINE - counters become cards                R
  4  Loading Zone            x1   G      ENGINE - doubles every counter                R
  5  Atmospheric Greenhouse  x1   G      Mass counter on ETB; stations to an 8+ flier  U
```

## SIDEBOARD (10)

```
Card                Qty  Color  Role / When to board in                                        Rar
Seam Rip            x1   W      1-mana exile of MV<=2 permanents - vs fast starts              U
Seedship Impact     x2   G      Instant artifact/enchantment removal                           U
Dauntless Scrapbot  x2   C      Graveyard hate on a body                                       U
Shattered Wings     x2   G      Artifacts/enchantments/fliers - 29.7% artifact cube            C
Skystinger          x2   G      Reach blocker - vs the 22.5% evasion slice                     C
Astelli Reclaimer   x1   W      Post-sweeper rebuild - returns Terrasymbiosis or Loading Zone  R
```

## ANALYSIS

### DECK IDENTITY

GW +1/+1 Counters Engine. Terrasymbiosis turns counter placement into card draw - "Whenever you put one or more +1/+1 counters on a creature you control, you may draw that many cards. Do this only once each turn." - and 16 of the 23 nonland cards place a counter, so it fires on most turns from turn three. Ouroboroid is the exponential mode: it is itself a creature, so the X counters it puts on each creature every combat feed back into its own power (1 to 2 to 4), and Loading Zone doubles every one of them. Because the once-per-turn cap rewards one BIG placement rather than many small ones, the three mass-counter sources - Ouroboroid, Cosmogrand Zenith and Atmospheric Greenhouse - are what make the engine draw a fistful instead of a single card.

### THE ONCE-PER-TURN CAP IS THE WHOLE DESIGN

Terrasymbiosis reads "you may draw that many cards. **Do this only once each turn**." That single clause determines the entire build. It means the deck is not rewarded for placing many small counters across a turn - it is rewarded for placing **one big pile**. Everything follows from that:

| Quantity | Count | Consequence |
|---|---|---|
| Nonland cards that PLACE a +1/+1 counter | **16 of 23** | Terrasymbiosis has a trigger on most turns |
| ...of those, **mass** sources (counters on *each* creature) | **3 of 23** | Ouroboroid, Cosmogrand Zenith, Atmospheric Greenhouse - the cards that make the draw large |
| P(at least one mass source seen by turn 6) | **70.4%** | 1 − C(37,13)/C(40,13) |
| Nonland cards that draw a card by oracle text | **8 of 23** | Four independent axes beyond Terrasymbiosis |
| Creatures | **13 of 23** | The bodies Ouroboroid multiplies |

### WHAT THIS DECK'S THESIS ACTUALLY IS

An earlier version of this write-up claimed the kill was the three-card stack Terrasymbiosis + Ouroboroid + Loading Zone. That claim did not survive the grill. All three are singletons, so:

> P(all three by turn 6) = C(37,10) / C(40,13) = **2.9%**

A 2.9% line is an upside, not a plan. The honest thesis is the floor the assembly check actually measures: **one counters-into-cards engine** (6 copies, effective 4.8 after reliability weighting, **p = 0.81** by turn 6) plus **a counter source** (16 copies, p ≈ 1.00), with a mass source at 70.4% turning one trigger into a multi-card draw. When all three engine pieces *do* line up, Ouroboroid's power runs 2 → 6 → 18 under the doubler and the game ends immediately - but the deck is built to win without ever seeing that.

### OUROBOROID COMPOUNDS BECAUSE IT IS ITS OWN TARGET

"At the beginning of combat on your turn, put X +1/+1 counters on each creature you control, where X is this creature's power." Ouroboroid is a creature you control, so it receives X counters too. Starting at 1/3: turn one it puts 1 on everything and becomes 2/4; next turn 2 on everything and becomes 4/6; then 4, then 8. Under Loading Zone each of those numbers doubles at the moment of placement, so the sequence starts at 2 and runs 2 → 6 → 18. And each of those placements is a single Terrasymbiosis event, so the draw scales with the same curve.

### A CARD THAT RAMPS YOUR OPPONENT

Emergency Eject reads "Destroy target nonland permanent. **Its controller** creates a Lander token." The Lander goes to whoever controlled the destroyed permanent - the opponent. The cube's automated ramp census counts this card as ramp for whoever runs it, which is backwards. It is still the deck's best unconditional instant-speed answer; the Lander is simply a real cost paid for that flexibility.

### MANABASE: A DELIBERATE DEVIATION FROM PIP SHARE

Pip demand is W 19 / G 11 (63.3% / 36.7%), which implies about 10.8 white and 6.2 green sources out of 17. The deck instead runs 10 white and 9 green. The reason is a single card: Ouroboroid costs {2}{G}{G} on turn 4, and by hypergeometric on 10 cards seen, P(2+ green sources) is 73.4% at 9 green sources but falls to 57.2% at 7 - making the deck's highest-leverage cast uncastable on curve 43% of the time. White is not starved by the trade: P(2+ white by turn 5) is 84.6%, which covers Haliya's {W}{W}.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:4  3:7  4:5  5:3
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  engine: 6 copies (effective 4.8: Haliya, Ascendant Cadet@0.8, Haliya, Ascendant Cadet@0.8, Sunstar Lightsmith@0.7, Sunstar Lightsmith@0.7, Dyadrine, Synthesis Amalgam@0.8) → p=0.81 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 14.9: Sunstar Lightsmith@0.7, Sunstar Lightsmith@0.7, Seedship Agrarian@0.9, Cosmogrand Zenith@0.6) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 55%  T2 85%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in green or white in this pool except Beyond the Quiet ('Exile all creatures and Spacecraft'), which would exile Ouroboroid and every counter-bearing body the engine runs on. A wide board is out-sized rather than swept: Ouroboroid puts X counters on each creature every combat, so this deck's blockers outclass a token swarm.
  OK        single_large_threat: Emergency Eject, Emergency Eject, Banishing Light
  OK        noncreature_permanents: Emergency Eject, Emergency Eject, Banishing Light
  CONCEDED  stack: Green and white contain no counterspell in this pool; the cube holds exactly 2 counterspells in 271 cards (0.7% density), so no maindeck slot is spent on a class appearing in under one percent of the environment.
  CONCEDED  graveyard: No GW mainboard graveyard answer exists in this pool; Dauntless Scrapbot ('exile each opponent's graveyard') is the sideboard slot. Note the dossier's 31-card graveyard count is inflated - it includes this deck's own cards and cards that merely surveil.
```

- Curve check PASSED for midrange, no WARN flag.
- Goldfish check PASSED (82% keepable vs the 80% threshold), no WARN flag. T2 play rate is 85%, up from 69% in the pre-grill list after Dockworker Drone x2 and Reroute Systems x2 were added.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Broodguard Elite ({X}{G}{G}) and Dyadrine ({X}{G}{W}, "enters with a number of +1/+1 counters on it equal to the amount of mana spent to cast it") are X-spells that turn surplus lands directly into counters, and every counter is a Terrasymbiosis card. Seedship Agrarian's "Landfall - Whenever a land you control enters, put a +1/+1 counter on this creature" converts the surplus LAND itself into an engine trigger. Atmospheric Greenhouse's Station costs no mana at all. |
| screw | mitigation | 8 of 23 nonland cards cost MV<=2, and Loading Zone's warp {G} is a turn-1 play off a single green source. Seedship Agrarian's Lander ("{2}, {T}, Sacrifice this token: Search your library for a basic land card") is the deck's one true fixer - a Lander you actually own, unlike Emergency Eject's, which its oracle gives to the permanent's controller. Rayblade Trooper's warp {1}{W} is a two-mana body. Goldfish: 82% keepable openers, 3 lands by turn 3 in 88%. |
| decapitation | mitigation | Terrasymbiosis is a singleton and the deck deliberately does not depend on it. Four further draw axes are in the list: Haliya x2 ("Whenever one or more creatures you control with +1/+1 counters on them deal combat damage to a player, draw a card"), Sunstar Lightsmith x2 ("Whenever you cast your second spell each turn, put a +1/+1 counter on this creature and draw a card") and Dyadrine. The assembly check measures it directly: 6 engine copies, effective 4.8 after reliability weighting, p=0.81 by turn 6. Astelli Reclaimer in the sideboard returns Terrasymbiosis (MV 3) or Loading Zone (MV 4) from the graveyard on a 5/4 flier. |
| gas-out | mitigation | 8 of 23 nonland cards draw a card by oracle text (Terrasymbiosis, Honor x2, Haliya x2, Sunstar Lightsmith x2, Dyadrine). Beyond that, Ouroboroid develops the board from an empty hand - "At the beginning of combat on your turn, put X +1/+1 counters on each creature you control, where X is this creature's power" costs no cards and compounds off its own power, and each trigger is itself a Terrasymbiosis event for that many cards. The deck's refuel is therefore a consequence of executing its plan rather than a separate package. |
| raced | mitigation | Reroute Systems x2 at {W} answer the fastest starts - "Reroute Systems deals 2 damage to target tapped creature", and attacking creatures are tapped. Cards able to interact before turn 3 went from 0 of 23 in the pre-grill list to 2 of 23, and MV<=2 from 5 to 8 of 23, after Dockworker Drone x2 and Reroute Systems x2 were added. Dockworker Drone is a 2-drop blocker that keeps its counter when it trades ("When this creature dies, put its counters on target creature you control"). The sideboard adds Seam Rip and Skystinger x2. |
| disruption-fizzle | mitigation | The engine is a permanent, not a chain: Terrasymbiosis and Loading Zone sit on the battlefield and re-trigger every turn, so interaction aimed at one turn's counter placement costs one turn's cards rather than the plan. They are also close to unanswerable in this environment - only 6 of the 276 unique cards in the pool (2.2%) can destroy or exile an opposing enchantment at all. Reroute Systems protects the creature half at instant speed for one mana: "Target artifact or creature gains indestructible until end of turn." |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bioengineered Future (rare) | "an additional +1/+1 counter on it for each land that entered the battlefield under your control this turn" is +1 counter on a normal turn, since the deck makes one land drop and has few Lander sources. Cut as the weakest of the six rare slots; the freed slot became Astelli Reclaimer in the sideboard. |
| Sledge-Class Seedship (rare) | A 4/5 Spacecraft with "7+ | Flying" and a free creature on each attack, but Station converts creature POWER into charge counters and this deck taps its creatures for nothing else - it anchors the sibling Station build instead. |
| Sunstar Chaplain (rare) | Its end-step counter needs "two or more tapped creatures", which this deck only meets after attacking, and its second ability REMOVES a counter - a cost against an engine that pays out when counters are PUT. It also adds no mass-counter mode, and mass sources are what make Terrasymbiosis draw more than one card. |
| Icetill Explorer (rare) | "You may play an additional land on each of your turns" is real acceleration, but it places no counter, so it is invisible to Terrasymbiosis - 0 engine triggers for a rare slot. |
| Mightform Harmonizer (rare) | "Landfall - double the power of target creature you control until end of turn" is a temporary pump that places no counter; Terrasymbiosis never sees it. |
| Lumen-Class Frigate (rare) | Its "2+ | Other creatures you control get +1/+1" is a static buff, not a +1/+1 counter, so it triggers Terrasymbiosis zero times. |
| Meltstrider Eulogist | "Whenever a creature you control with a +1/+1 counter on it dies, draw a card" - the deck has no sacrifice outlet, so the trigger is entirely opponent-dependent; this deck's own assembly check weighted it 0.6. Cut for interaction that acts on the deck's own turn. |
| Drix Fatemaker | "Each creature you control with a +1/+1 counter on it has trample" is the right answer to chump blocks and it was harvested into the pre-grill list, but at 1 copy it was present in only about a third of games by turn 6; the slot went to cheap interaction the raced failure mode actually needed. |
| Biosynthic Burst | It places a counter and grants indestructible, but it targets "creature you control" - it cannot protect Terrasymbiosis or Loading Zone, which are 2 of the 3 engine pieces. Reroute Systems does the creature half for one mana instead of two. |
| Sami's Curiosity | "You gain 2 life. Create a Lander token." places no counter, so it is invisible to Terrasymbiosis; Seedship Agrarian makes a Lander AND places a counter on the same body. |
| Luxknight Breacher | "enters with a +1/+1 counter on it for each other creature and/or artifact you control" is a genuine multi-counter event, but at MV 4 it competes directly with Ouroboroid and Loading Zone, both of which repeat. |
| Intrepid Tenderfoot | "{3}: Put a +1/+1 counter on this creature. Activate only as a sorcery" is a repeatable Terrasymbiosis trigger and a real flood answer; cut only because the 2-drop slots went to Dockworker Drone, which places its counter for free on entry. |
| Dual-Sun Technique | "If it has a +1/+1 counter on it, draw a card" is live off 16 of 23 cards and would be a near-cantrip, but it places no counter itself, so unlike Honor it gives Terrasymbiosis nothing. |
| Beyond the Quiet (rare, sideboard consideration) | "Exile all creatures and Spacecraft" is the only sweeper in these colours and it would exile Ouroboroid and every counter-bearing body this deck's engine runs on. |
| Rescue Skiff (sideboard consideration) | "return target creature or enchantment card from your graveyard to the battlefield" does recur Terrasymbiosis, but at MV 6 versus Astelli Reclaimer's 5 with a 5/4 flying body attached. |
| Command Bridge (land) | Any-colour fixing, but "sacrifice it unless you tap an untapped permanent you control" taxes a body on the turns the deck is deploying its engine. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 3   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.22 adj [MV 2.96 vs 2.5, 5 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  36.7%  prod  52.9%  gap -16.2pp  [OK]
  W  demand  63.3%  prod  58.8%  gap  +4.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card exceeds 2 copies across mainboard and sideboard combined; basics are format-supplied and exempt.
rares_mythics_max_1: PASS - every rare/mythic is at 1 copy.
max_6_rares_mythics_total: PASS - exactly 6 of 6 used: Terrasymbiosis (R), Ouroboroid (M), Loading Zone (R), Dyadrine (R), Cosmogrand Zenith (M) mainboard; Astelli Reclaimer (R) sideboard.
colour_identity: PASS - every nonland card returns non-None from effective_cost.best_mode(card, ['G','W'], []).
splash_cap: PASS - splash_colors = [], splash_candidates = [].
```