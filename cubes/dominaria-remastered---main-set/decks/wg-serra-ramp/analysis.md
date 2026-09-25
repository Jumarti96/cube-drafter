---
deck_name: "wg-serra-ramp"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-31T03:20:02Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  10x Plains                 basic land
  6x Forest                 basic land
  1x Radiant Grove          GW dual, enters tapped
  1x Slippery Karst         G source, cycling
```

### CREATURES (11)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Birds of Paradise             x1  G      Ramp + any-color fixing       R
  2  Cleric of the Forward Order   x1  W      Lifegain body                 C
  2  Werebear                      x1  G      Ramp body / blocker           C
  4  Giant Spider                  x1  G      Reach blocker                 C
  4  Kavu Primarch                 x1  G      Convoke/kicker beater         C
  5  Lyra Dawnbringer              x1  W      Lifelink finisher + anthem    M
  5  Serra Angel                   x1  W      Evasive beater                U
  6  Kjeldoran Gargoyle            x1  W      Lifegain flyer                C
  6  Symbiotic Beast               x1  G      Removal-proof beater          C
  7  Phantom Nishoba               x1  GW     Lifelink bomb                 R
  7  Serra Avatar                  x1  W      Life-scaled finisher          M
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Swords to Plowshares          x1  W      Premium removal               U
  2  Nature's Lore                 x2  G      Ramp (fetch Forest)           U
  2  Wax // Wane                   x1  GW     Combat trick / enchantment r  U
  3  Call of the Herd              x2  G      Recursive beater              U
  3  Renewed Faith                 x1  W      Lifegain / cantrip            C
  4  Congregate                    x1  W      Mass lifegain                 U
```

### OTHER SPELLS (3)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Spirit Link                   x1  W      Lifegain aura                 C
  2  Pacifism                      x1  W      Creature lock                 C
  4  Test of Endurance             x1  W      Lifegain payoff / 50-life wi  M
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                              Rar
Tormod's Crypt                x2  C      vs graveyard decks (biggest cube theme)             U
Emerald Charm                 x1  G      remove flying / destroy enchantment / untap         C
Sandstorm                     x1  G      vs go-wide aggro                                    C
Cleric of the Forward Order   x1  W      extra lifegain body vs aggro                        C
Lull                          x1  G      fog + cycle vs an alpha strike                      C
Pacifism                      x1  W      extra creature lock                                 C
Break Asunder                 x2  G      vs artifacts & enchantments (cycles)                C
Giant Spider                  x1  G      extra reach blocker vs evasion                      C
```

## ANALYSIS

### DECK IDENTITY
Selesnya (GW) lifegain-beatdown ramp. Green acceleration (Birds of Paradise, Werebear, Nature's Lore) deploys fat lifelinking threats a turn early — Phantom Nishoba (a 7/7 trample that gains life on damage and sheds counters instead of dying), Serra Avatar (power/toughness equal to your life total), Lyra Dawnbringer and Kjeldoran Gargoyle. A white-heavy base (10 Plains + Radiant Grove + Birds) supplies the triple-white for Serra Avatar while the green ramp supplies the generic mana; lifelink combat plus Congregate/Spirit Link/Renewed Faith climb the life total, which both swells Serra Avatar and turns Test of Endurance (win at 50) into an alternate-win the beatdown reaches naturally. Call of the Herd and Symbiotic Beast keep the board resilient to removal and sweepers.

**This is the deck that actually casts Serra Avatar.** Its {4}{W}{W}{W} is out of reach for the mono-W, WB and UW builds, but here a white-heavy base (10 Plains + Radiant Grove + Birds of Paradise = 12 white sources) plus green ramp gets there — and by then the lifegain suite has climbed your life, so 'power/toughness equal to your life total' is routinely a 25-40+ trampling body.

**Phantom Nishoba is the centerpiece.** A 7/7 trample that gains life equal to the damage it deals and prevents damage to itself by shedding +1/+1 counters — it eats burn and combat, races, and feeds both the life climb and Serra Avatar's size in a single card.

**The ramp is honest about its colors.** Werebear, Nature's Lore and Slippery Karst make green; the triple-white for Serra Avatar comes from the Plains-heavy base and Birds (any color), not from the green sources. The ramp buys tempo; the white density supplies the pips.

**Resilience is built in against removal and sweepers.** Call of the Herd (two Elephants across a flashback), Symbiotic Beast (four Insects on death) and Serra Avatar (reshuffles when it dies) all leave value behind, so spot removal and a Wrath only stall the beatdown.

**Test of Endurance is more live here than in the control build.** Because lifelink is stapled to attacking beaters (Phantom Nishoba, Lyra, Kjeldoran Gargoyle), life climbs while you race — a Congregate off a wide board (2 life per creature, both sides) can be a 10-16 life spike that puts 50 in reach as a genuine second win, not just flavor.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:4  2:5  3:3  4:4  5:2  6:2  7:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies → p=0.88 (need ≥ 0.75)
  PASS  enabler: 8 copies → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 56%  T2 90%  T3 96%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper (a creature deck); race over the top with bigger lifelink bodies and block with Giant Spider (reach) and Symbiotic Beast tokens; Congregate resets a race.
  OK        single_large_threat: Swords to Plowshares, Pacifism, Giant Spider, Wax // Wane
  OK        noncreature_permanents: Wax // Wane
  CONCEDED  stack: No countermagic in GW; interaction resolves on the battlefield (removal, bigger bodies).
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt available from the sideboard.
```
- Land count 18 sits at the recommended target after crediting the 4 ramp pieces (accel-adjusted target 18); a lower count was tested and produced a mana WARN + borderline keepability, so the deck builds to the full recommendation.
- Test of Endurance is retained as the pipeline's Lifegain payoff and a redundant kill; unlike the control build, its lifelink is stapled to attacking beaters (Phantom Nishoba, Lyra, Kjeldoran Gargoyle), so life climbs while racing and the 50-life line is genuinely reachable. The primary win is still the lifelink beatdown / a life-scaled Serra Avatar.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Renewed Faith and Slippery Karst cycle surplus lands into cards; Serra Avatar (7), Phantom Nishoba (7), Kjeldoran Gargoyle (6), Kavu Primarch (kicker {4}) and Call of the Herd (flashback) are top-end mana sinks that use every extra land. |
| screw | mitigation | Four ramp pieces (Birds, Werebear, Nature's Lore x2) plus 18 lands hit land drops; Werebear and Birds are durable mana bodies (not fragile auras) that survive removal and block, and cheap plays (Birds {G}, Werebear {1}{G}, Cleric {1}{W}, Swords {W}, Spirit Link {W}) keep 2-land hands active. Goldfish keepable ~81%, 3-land-by-T3 94%. |
| decapitation | mitigation | No single key card: Phantom Nishoba prevents damage and sheds counters instead of dying, Serra Avatar reshuffles on death, and Lyra/Test spread the win; Call of the Herd (flashback) and Symbiotic Beast (tokens) leave value; the four ramp pieces make acceleration redundant if Birds is removed. |
| gas-out | mitigation | Call of the Herd's flashback (a second Elephant from the graveyard), Symbiotic Beast's four death-tokens and Renewed Faith's cycle are self-replacing/net-positive refuels; Serra Avatar reshuffles to stay a live threat — the board itself is the resource. |
| raced | mitigation | Lifelink (Phantom Nishoba, Lyra, Kjeldoran Gargoyle, a Spirit-Linked fatty) plus Congregate and Giant Spider (reach) out-stabilize aggro, and bigger bodies simply win the damage race; Sandstorm and Lull board in vs the fastest starts. |
| disruption-fizzle | mitigation | Not one fragile turn: redundant ramp and a deep threat base mean a removed Birds or an answered bomb does not end the plan; Symbiotic Beast and Call of the Herd rebuild the board and Serra Avatar recurs. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Sylvan Library | Elite card advantage but a mythic (rare-cap pressure) and its 'pay 4 life' fights the lifegain plan; SB / flex consideration. |
| Kamahl, Fist of Krosa | Powerful mythic overrun/land-animation but off the lifegain plan and competes for the rare cap. |
| Terravore | */* by lands in graveyards — needs self-mill/land-destruction the deck doesn't run; small here. |
| Wild Growth | Turn-1 ramp aura, but swapped out during the grill for Werebear — a fragile do-nothing enchantment that is 2-for-1'd with its land, whereas Werebear is a durable mana body that also blocks and pads Congregate. |
| Deadwood Treefolk | Recursion value but Vanishing 3 makes it temporary; too slow for a beatdown curve. |
| Elvish Aberration | 6-mana GGG ramp/body is clunky once Birds/Wild Growth/Nature's Lore already ramp; cut for a lower curve. |
| Nantuko Monastery | GW threshold manland but requires 7+ graveyard cards to animate — unreliable without self-mill. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.45   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.60 adj [MV 3.45 vs 2.5, 4 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  G  demand  40.0%  prod  44.4%  gap  -4.4pp  [OK]
  W  demand  60.0%  prod  61.1%  gap  -1.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_max2: PASS
rares_mythics_max1: PASS
rares_mythics_total_max5: 5/5 PASS
GW_only: PASS
```
