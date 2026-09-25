---
deck_name: "r-storm-entity-tempo"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "R"
format: "40-card"
built_at: "2026-07-30T00:25:56Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
16x Mountain
```

### CREATURES (10)
```
CMC  Card                       Qty  Color  Role                                  Rar
  0  Ornithopter                x1  C      Engine ({0} free spell — +1 storm /  C
  1  Grim Lavamancer            x1  R      Reach (repeatable 2-damage from GY)  R
  1  Skirk Prospector           x2  R      Engine (sac a Goblin for red mana)   C
  2  Mogg War Marshal           x2  R      Threat/fodder (two Goblin bodies for C
  2  Storm Entity               x2  R      Payload/Payoff (hasty spell-count be U
  4  Coal Stoker                x2  R      Engine (ritual body: add RRR from ha C
```

### INSTANTS & SORCERIES (13)
```
CMC  Card                       Qty  Color  Role                                  Rar
  1  Chain Lightning            x2  R      Interaction/reach (3 damage; storm c C
  1  Overmaster                 x1  R      Engine/protection (uncounterable nex R
  1  Spark Spray                x2  R      Interaction (1 damage; cycles)       C
  2  Grapeshot                  x2  R      Payload/Payoff (storm reach kill)    C
  4  Empty the Warrens          x2  R      Payload/Payoff (go-wide alt-kill)    C
  4  Solar Blast                x2  R      Interaction/reach (3 damage; cycles) C
  6  Fireblast                  x2  R      Reach (free 4 damage via sac Mountai U
```

### OTHER SPELLS (1)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Helm of Awakening          x1  C      Engine (cost reducer for the storm c R
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                              Rar
Tormod's Crypt             x1  C      GY hate — vs the cube's 45-card graveyard/reanimat U
Gempalm Incinerator        x2  R      Scaling removal + cantrip + goblin body — cycles f U
Sulfuric Vortex            x1  R      Inevitability + anti-lifegain — vs control and the R
Dragon Whelp               x2  R      Evasive firebreather — vs control/grind; a mana-si U
Flametongue Kavu           x2  R      Removal + body — vs single large threats and the 4 U
Slice and Dice             x2  R      Red sweeper — vs faster go-wide/token aggro        U
```

## ANALYSIS

### DECK IDENTITY
Mono-red Storm Entity tempo built around Coal Stoker rituals — honestly an aggro-tempo-burn deck, not a true storm combo. A low red curve plus Coal Stoker ('when cast from hand, add {R}{R}{R}'), Skirk Prospector ritual mana, Helm of Awakening cost reduction, and a free Ornithopter ({0}) let you chain several cheap spells in one turn to drop Storm Entity as a large hasty attacker ('enters with a +1/+1 counter for each other spell cast this turn'); the same spell density powers a scaling Grapeshot and a wide Empty the Warrens. Because the pool has no rituals beyond Coal Stoker/Skirk, the storm ceiling is modest — the realistic kill is a hasty Storm Entity plus board-independent burn reach (Chain Lightning, Spark Spray, Solar Blast, Fireblast, Grim Lavamancer), not a single 20-storm Grapeshot. Overmaster ('the next instant or sorcery spell you cast this turn can't be countered') protects the key spell. The deck is mono-red: all 16 lands are Mountains and 23 of 24 nonland cards are red (the 24th, Ornithopter, is colorless).

### The Coal Stoker ritual turn

This build is engineered around one explosive turn. Coal Stoker ({3}{R}, "when cast from hand, add {R}{R}{R}") is a net-positive 3/3 that refunds its own mana and leaves surplus to keep casting; Skirk Prospector turns spare Goblins (from Mogg War Marshal / Empty the Warrens) into more red; Helm of Awakening shaves {1} off every spell; and Ornithopter ({0}) is a *free* extra spell. Because Storm Entity "enters with a +1/+1 counter for each other spell cast this turn," the goal is to cast several cheap spells first, then drop it as a large hasty attacker — or point the same chain at a scaling Grapeshot or a wide Empty the Warrens.

### Honest ceiling — aggro-tempo-burn, not a storm combo

The self-grill flagged (and I agreed) that the pool has **no dedicated rituals** beyond Coal Stoker and Skirk Prospector, so storm count is bounded by cards in hand. A near-nut turn-4 line chains ~5 spells, making a ~5/5 hasty Storm Entity or a ~5-damage Grapeshot — not a 20-storm one-shot. So the real win condition is a fast red clock backed by **board-independent burn reach**: Chain Lightning (3), Solar Blast (3), Fireblast (free 4), Spark Spray, and a recurring Grim Lavamancer. Ornithopter was added specifically to push spell density at zero mana; Overmaster was added to protect the key spell against a counter (the deck runs no counters of its own).

### Count-dependent verdicts (Counts Principle)

- **Red proportion**: all 16 lands are Mountains and 23 of 24 nonland cards are red (Ornithopter is colorless) — a true mono-red deck, maximally honoring the high-red brief.
- **Fireblast fodder**: its free mode needs 2 Mountains; all 16 lands are basic Mountains, so the alt cost is always live — a free 4 damage that also adds a storm count.
- **Storm density**: 8 one-mana-or-free spells (Skirk, Chain Lightning x2, Spark Spray x2, Grim Lavamancer, Overmaster, Ornithopter) plus Coal Stoker's ritual let a single turn realistically chain 4-5 casts before the payoff.

### Flex knobs for iteration

The grill's other suggestions if you want to push different axes: **Siege-Gang Commander** (a rare — reach + 4 goblin bodies that feed Skirk, if you want a deeper go-wide/sacrifice engine); **Pashalik Mons** (turns Goblin deaths into reach); and **Dragon Whelp / Ridgetop Raptor** as extra evasive/double-strike bodies if you want a more creature-dense clock over burn.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  0:1  1:8  2:7  4:6  6:2
Assembly (thesis turn 4, 11 cards seen):  [PASS]
  PASS  payoff: 6 copies → p=0.83 (need ≥ 0.75)
  PASS  enabler: 15 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 91%  T2 99%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Grapeshot, Spark Spray, Solar Blast
  OK        single_large_threat: Chain Lightning, Fireblast, Solar Blast, Grim Lavamancer
  CONCEDED  noncreature_permanents: No artifact/enchantment removal in red here; the plan is to race and burn face rather than answer permanents.
  CONCEDED  stack: Red-primary with no counters maindeck; the deck applies pressure and reach rather than interacting on the stack.
  CONCEDED  graveyard: No maindeck graveyard hate; Grim Lavamancer only exiles from our own graveyard as a cost. Tormod's Crypt is in the sideboard.
```
- curve PASS, goldfish PASS (keepable 83%, T1 play 91%), assembly PASS (payoff p=0.83, enabler p=0.99). No structural WARN flags.
- Mana audit is now PASS with no WARN (mono-red, 100% red production) after the grill dropped the Snap splash.
- Interaction/reach at 37.5% exceeds the tempo band by design: red burn is the deck's board-independent win-through-stall path and doubles as removal + Storm Entity fuel.

### FAILURE MODES

Mode | Verdict | Reasoning
---|---|---
flood | mitigation | Excess lands feed Fireblast (sacrifice two Mountains for a free 4 damage) and hard-cast Coal Stoker/Empty the Warrens; Grim Lavamancer and burn stay relevant top-decks, and Solar Blast/Spark Spray cycle a flooding draw into a fresh card.
screw | accepted | 16 lands and a low 2.42 curve with 8 one-drops (incl. the free Ornithopter) keep 2-land hands active (goldfish keepable 83%, T1 play 91%); a 1-land hand stumbles, but adding lands would dilute the cheap-spell density that fuels Storm Entity and the burn suite.
decapitation | mitigation | Three independent kills — Storm Entity (hasty), Grapeshot (storm reach), Empty the Warrens (go-wide) — plus the burn suite; if one payoff is answered the others still close, and Coal Stoker + Skirk Prospector still power a storm turn.
gas-out | mitigation | Spark Spray and Solar Blast cycle when dead, Ornithopter and Overmaster replace themselves as free/cantrip spells, and Grim Lavamancer is card-free recurring reach; the low curve aims to close before the hand empties.
raced | accepted | As the aggressor it usually sets the clock, but a dedicated combo (the High Tide decks) can go over the top; with no maindeck stack interaction it accepts the race, relying on the turn-4 goldfish, burn to the face, and Overmaster to push a key spell through. It boards into Slice and Dice / Flametongue Kavu vs creature aggro and Sulfuric Vortex vs control. Adding counters would need blue, against the mono-red goal.
disruption-fizzle | mitigation | Upgraded from pure redundancy to real protection: Overmaster ('the next instant or sorcery spell you cast this turn can't be countered') pushes a Grapeshot or key burn past a counter. Storm Entity can also be cast smaller and still attack, Grapeshot/Fireblast/Chain Lightning are board-independent reach, and Coal Stoker/Empty rebuild; payoff redundancy (2 Grapeshot, 2 Empty, Storm Entity, burn) backs it up.

### CARDS CONSIDERED BUT EXCLUDED

Card | Reason
---|---
High Tide | Islands-matter blue engine — pulls the manabase toward blue Islands, directly against the 'high proportion of red' goal; belongs to the High Tide builds.
Peregrine Drake / Turnabout | Blue mana bursts serve the High Tide combos; they add no red and dilute the red-tempo clock.
Mystical Tutor / Counterspell / Force of Will | Blue interaction/consistency; a red-heavy proactive deck spends its slots on threats and burn, and these fight the color goal.
Ember Beast | 3/4 for {2}{R} but 'can't attack or block alone' — awkward on an aggressive curve that wants every body pressuring immediately.
Snap | Cut in the grill: a {1}{U} blue splash that untaps 2 lands + adds a storm count and can re-bounce Coal Stoker — but the 2-source splash was the only mana WARN and rarely on-curve; dropped for mono-red consistency (Ornithopter is a truly-free storm-density spell instead).
Siege-Gang Commander | FLEX (rare): 'create three 1/1 Goblins; {1}{R}, Sacrifice a Goblin: 2 damage' — reach + 4 bodies that feed Skirk Prospector; the top add if you want a deeper go-wide/sacrifice engine (uses a rare slot).
Dragon Whelp | FLEX: {2}{R}{R} flyer with '{R}: +1/+0' — an evasive firebreather mana-sink; swap in over burn if you want a more creature-dense clock (it's in the sideboard for grindy matchups).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.42   Ramp cards: 4   Cantrips: 3
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.27 adj [MV 2.42 vs 2.5, 7 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each
[PASS] Rares/mythics <= 1 copy each
[PASS] Rares/mythics total <= 5: 4/5 (Overmaster, Grim Lavamancer, Helm of Awakening, Sulfuric Vortex)
[PASS] Deck size 40 (24 nonland + 16 land); sideboard 10
[PASS] Colors R; no splash
```