---
deck_name: "br-goblin-sac-burn"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-30T00:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
2x Geothermal Bog       BR dual, enters tapped
12x Mountain             basic
3x Swamp                basic
```

### CREATURES (15)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Festering Goblin              x2   B      fodder/removal                C
  1  Grim Lavamancer               x1   R      reach/removal                 R
  1  Skirk Prospector              x2   R      sac-outlet/ritual             C
  2  Mogg War Marshal              x2   R      fodder                        C
  3  Goblin Matron                 x2   R      tutor/consistency             C
  3  Pashalik Mons                 x1   R      sac-payoff                    R
  3  Phyrexian Ghoul               x1   B      sac-outlet                    C
  3  Pyre Zombie                   x1   BR     recurring-reach               R
  4  Flametongue Kavu              x2   R      removal-body                  U
  5  Siege-Gang Commander          x1   R      sac-payoff                    R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Chain Lightning               x2   R      burn/reach                    C
  1  Spark Spray                   x1   R      burn/removal                  C
  2  Terror                        x1   B      removal                       C
  4  Empty the Warrens             x1   R      fodder-tokens                 C
  6  Fireblast                     x1   R      burn/reach                    U
```

### OTHER SPELLS (2)
```
CMC  Card                          Qty  Color  Role                          Rar
  3  Dralnu's Crusade              x1   BR     anthem                        U
  3  Sulfuric Vortex               x1   R      reach/anti-lifegain           R
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                                   Rar
Tormod's Crypt                x2   C      sb-graveyard-hate: vs reanimator/flashback/threshold — e  U
Duress                        x2   B      sb-disruption: vs control/combo — strip sweepers, spot r  C
Chainer's Edict               x2   B      sb-removal: vs single big hexproof/regenerating blockers  U
Gempalm Incinerator           x2   R      sb-tribal-removal: vs go-wide/x1-toughness decks — a Gob  U
Ichor Slick                   x1   B      sb-removal: vs high-toughness midrange creatures burn ca  C
Spark Spray                   x1   R      sb-removal: vs decks flush with x/1 utility creatures     C
```

## ANALYSIS

### DECK IDENTITY

Red-primary, black-secondary Goblin sacrifice-burn aggro. Cheap Goblins and token-makers (Skirk Prospector, Mogg War Marshal, Goblin Matron, Empty the Warrens) build a wide board fast, and the sacrifice payoffs turn each body into direct damage: Siege-Gang Commander sacs Goblins for 2, Pashalik Mons pings 1 every time a Goblin dies, and burn (Chain Lightning, Fireblast, Grim Lavamancer, Sulfuric Vortex) closes from range through any blocker. The plan is to convert a flooded board into a lethal burst around turn 5, and Sulfuric Vortex shuts off the lifegain that would otherwise wall a race.

Some interactions and calculations worth calling out:

**The board is ammunition, not just attackers.** The ~11 Goblin sources (Skirk Prospector x2, Mogg War Marshal x2 with its ETB+death tokens, Goblin Matron x2, Festering Goblin x2, Empty the Warrens, plus Siege-Gang's three ETB tokens) exist to be *sacrificed for damage*, not to connect in combat. Siege-Gang eats each Goblin for 2 to the face; Pashalik Mons deals 1 every time any Goblin dies. That is why blockers and lifegain-on-a-blocker don't save the opponent — most of the damage never touches combat.

**Pashalik + a free outlet is a burst multiplier.** Because Pashalik Mons triggers on *every* Goblin death, sacrificing a wide board to Phyrexian Ghoul (free) or Skirk Prospector in a single turn converts each body into a Pashalik ping on top of whatever the outlet does. A board of five Goblins fed to Ghoul is five Pashalik triggers = 5 to any target(s), before Siege-Gang even activates.

**Sulfuric Vortex is the anti-lifegain lock, which is the point of the black.** The judge's meta read flagged lifegain — not sweepers — as the real wall for this cube's aggro. Sulfuric Vortex's "If a player would gain life, that player gains no life instead" turns off Spirit Link, Test of Endurance, and every lifelink blocker while adding a fixed 2 to the clock each upkeep. A pure mono-red build has no comparable answer; the sac-burn reach (non-combat damage) plus Vortex is specifically chosen to bypass the exact tools — chump blockers + lifegain — the wall is built from.

**Fireblast's alt cost is over-supported.** "You may sacrifice two Mountains rather than pay this spell's mana cost" — Geothermal Bog is `Land — Swamp Mountain`, so it counts as a Mountain. 12 basic Mountain + 2 Geothermal Bog = 14 Mountain-type lands, so a free turn-4/5 Fireblast for 4 to the face is reliably live.

**Grim Lavamancer turns the graveyard into a second reach engine.** Spent burn, dead Goblins, and cycled cards fill the yard fast; "{R}, {T}, Exile two cards from your graveyard: 2 damage" then grinds 2 per turn from range — the piece that closes against a stabilized board a pure-tempo build would stall against.

Deadapult (the literal "sacrifice a Zombie for 2 damage" card) is deliberately in the maybeboard, not the maindeck: only 3 natural Zombies feed it (Festering Goblin x2 + Pyre Zombie), so it needs Dralnu's Crusade online to fire reliably. Terror is kept over a color-agnostic answer because it is instant-speed and a 2-drop that fills an otherwise thin two-slot; Chainer's Edict sits in the sideboard for black or hexproof blockers it can't hit.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:8  2:3  3:7  4:3  5:1  6:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  fodder: 9 copies → p=0.95 (need ≥ 0.75)
  PASS  reach_payoff: 10 copies (effective 9.5: Pyre Zombie@0.7, Grim Lavamancer@0.8) → p=0.96 (need ≥ 0.75)
  PASS  sac_outlet: 6 copies (effective 5.1: Pashalik Mons@0.6, Pyre Zombie@0.5) → p=0.81 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 80%  T2 94%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Aggro race with reach: rather than trade, the deck presents the faster wide Goblin board and sends Siege-Gang/Pashalik/burn to the face; Flametongue Kavu and Spark Spray pick off key blockers, and Gempalm Incinerator (SB) scales board-wide removal to the goblin count.
  OK        single_large_threat: Flametongue Kavu, Terror, Chain Lightning, Fireblast
  CONCEDED  noncreature_permanents: BR has no maindeck artifact/enchantment removal (the cube's answers are all G/W/R); the fast clock races them and the sideboard's Duress strips key noncreature cards from hand pre-emptively.
  CONCEDED  stack: No countermagic in BR; the deck's job is to end the game before reactive control stabilizes, and SB Duress pre-empts key spells from hand.
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt is in the sideboard for reanimator/flashback matchups.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | The curve is low (avg MV 2.52, 17 lands) so few lands are needed, and surplus mana has sinks: Grim Lavamancer activations ({R}), Siege-Gang's {1}{R} sac-for-damage, Pashalik's {3}{R} token-making, and Skirk Prospector converting spare Goblins to more red. Sulfuric Vortex is a fixed 2-per-turn clock independent of draws. |
| screw | mitigation | Eight one-drops (Skirk Prospector x2, Festering Goblin x2, Grim Lavamancer, Chain Lightning x2, Spark Spray) plus Skirk's ritual keep 2-land hands functional; goldfish keepable 86%, T1 play 80%. Spark Spray cycles a dead card. |
| decapitation | mitigation | The payoff is redundant across cards: Siege-Gang, Pashalik Mons, Pyre Zombie, Grim Lavamancer, Sulfuric Vortex and eight burn/removal spells all push damage — removing any one leaves a functioning clock; no single answer disables the deck. |
| gas-out | mitigation | Card-positive/self-replacing pieces refuel: Goblin Matron (body + tutors a Goblin), Mogg War Marshal (three bodies across its life), Empty the Warrens (storm tokens), Spark Spray (cycles), and Sulfuric Vortex provides a hand-independent 2-per-turn clock that wins even from an empty hand. Grim Lavamancer keeps producing damage from the graveyard. |
| raced | mitigation | The deck IS the aggressor and carries reach to win races from behind on board: burn goes to the face regardless of blockers, and Flametongue Kavu (4 to a creature), Terror, and Spark Spray are speed bumps that slow the opposing clock. Sulfuric Vortex denies the opponent the lifegain that would let them win a race. |
| disruption-fizzle | mitigation | The plan is many small independent threats plus burn, not one critical turn: a counterspell or removal trades for a single Goblin or burn spell and costs a beat, not the game; Goblin Matron and Mogg War Marshal rebuild the board afterward. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Deadapult | '{R}, Sacrifice a Zombie: 2 damage' — cut: natural Zombie fodder is only Festering Goblin x2 + Pyre Zombie (3/23), so it needs Dralnu's Crusade (1 copy) online to reliably fire; too conditional for a maindeck damage engine. |
| Solar Blast | 3-damage instant with cycling — cut for Phyrexian Ghoul to add a free sacrifice outlet (assembly gate) and lower the 4-drop count; the reach suite (Chain Lightning x2, Fireblast, Grim Lavamancer, Sulfuric Vortex) is already deep. |
| Goblin Medics | Deals 1 damage only when it becomes tapped — slow, conditional ping; the sac-for-damage payoffs convert bodies faster. |
| Worldgorger Dragon | A combo/reanimator payoff needing a reanimation loop this aggro shell does not build; off-plan. |
| Sneak Attack | Wants big creatures to cheat in; this deck's creatures are 1/1 goblins — no payoff for the effect. |
| Shivan Dragon | A 6-mana standalone flier — too slow and mana-hungry for a curve that wants to kill by turn 5-6, and not a Goblin/sac payoff. |
| Yawgmoth, Thran Physician | {2}{B}{B} is unsupportable in a red-primary manabase; belongs to the mono-B build (Deck A). |
| Nightscape Familiar | Reduces only blue/red spell costs: reduces ~9 red spells but its regenerate needs {1}{B}; a fine blocker but does not advance the go-wide sac-burn plan. |
| Goblin Turncoat | Sac a Goblin to regenerate itself — pure defense, no damage payoff; the sac slots want outlets that generate value/damage. |
| Ember Beast | Can't attack or block alone — awkward in a token deck where you want each body to attack independently; conditional downside for vanilla stats. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 2   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.47 adj [MV 2.52 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  21.4%  prod  29.4%  gap  -8.0pp  [OK]
  R  demand  78.6%  prod  82.4%  gap  -3.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Mainboard size = 40 (40)
[PASS] Sideboard size = 10 (10)
[PASS] Commons/uncommons <= 2 copies each
[PASS] Rares/mythics <= 1 copy each
[PASS] Rare/mythic total = 5 (cap 5)
[PASS] All cards from cube pool + mono-black usable
```