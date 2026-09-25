---
deck_name: "gw-go-wide-tokens"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-30T01:22:54Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
9x Forest                 Green source
7x Plains                 White source
1x Radiant Grove          GW dual (enters tapped)
```

### CREATURES (9)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Birds of Paradise             x1    G      Ramp / fixing              R
  1  Icatian Javelineers           x1    W      1-drop + ping              C
  1  Savannah Lions                x2    W      Aggro 1-drop               C
  3  Penumbra Bobcat               x2    G      Death-token body           C
  4  Kavu Primarch                 x1    G      Convoke threat             C
  6  Kamahl, Fist of Krosa         x1    G      Overrun finisher           M
  6  Symbiotic Beast               x1    G      Death-token (4 Insects)    C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Swords to Plowshares          x2    W      Exile removal              U
  2  Nature's Lore                 x1    G      Ramp / fixing              U
  3  Call of the Herd              x2    G      Token + flashback          U
  3  Radiant's Judgment            x1    W      Removal (cycling)          C
  4  Battle Screech                x2    W      Token flyers + FB          U
  4  Saproling Symbiosis           x1    G      Mass token payoff          R
```

### OTHER SPELLS (5)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Wild Growth                   x1    G      Ramp aura                  C
  3  Griffin Guide                 x1    W      Evasion + token            U
  3  Squirrel Nest                 x2    G      Recurring token engine     U
  5  Gauntlet of Power             x1    C      Anthem (name green)        M
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in                          Rar
Tormod's Crypt                x2    C      GY hate — vs reanimator/flashback/threshold      U
Sandstorm                     x2    G      One-sided sweep — vs opposing go-wide/Goblins    C
Wax // Wane                   x1    GW     Enchantment removal / +2/+2 trick                U
Break Asunder                 x2    G      Artifact/enchantment removal — vs Opposition/Sneak Attack/Sulfuric Vortex  C
Congregate                    x1    W      Lifegain per creature — vs fast-aggro race       U
Giant Spider                  x1    G      Reach — vs the cube's flyers                     C
Lyra Dawnbringer              x1    W      Resilient bomb + lifelink — vs control/aggro     M
```

## ANALYSIS

### DECK IDENTITY
Green-White go-wide aggro. Flood the board with redundant token producers — Squirrel Nest and Battle Screech for evasive width, Call of the Herd and Saproling Symbiosis for mass bodies, Penumbra Bobcat and Symbiotic Beast for sweeper-resilient death tokens — then convert width into lethal combat damage with the color-agnostic pumps Gauntlet of Power (named green: +1/+1 across the mostly-green board) and Kamahl, Fist of Krosa ({2}{G}{G}{G}: Creatures you control get +3/+3 and gain trample). Birds of Paradise, Wild Growth and Nature's Lore accelerate the payoff turn; Swords to Plowshares and Radiant's Judgment clear blockers.

**Anthem coverage is a color count, not a slogan.** Gauntlet of Power is named green because the board this deck builds is majority green: Squirrel Nest Squirrels, Call of the Herd Elephants, Saproling Symbiosis Saprolings and Symbiotic Beast Insects are all green tokens, joined by the green nonland bodies. A green-named Gauntlet's +1/+1 therefore blankets the bulk of the board where the white-only Divine Sacrament (rejected in the sketch-off) would have missed it. Kamahl's {2}{G}{G}{G} overrun is color-agnostic and closes through blockers via trample.

**Built to rebuild through sweepers.** The cube fields four sweepers (Wrath of God, Slice and Dice, Floodgate, Sandstorm), so the token base is chosen to survive them: Squirrel Nest is an enchantment that keeps making a Squirrel every turn after a wipe; Battle Screech and Call of the Herd flash back from the graveyard for more bodies; Penumbra Bobcat (leaves a 2/1 Cat) and Symbiotic Beast (leaves four 1/1 Insects) turn the sweeper itself into fresh width. Roughly seven of the deck's token sources leave value across a board wipe.

**Convoke and flashback are self-funding on a wide board.** Kavu Primarch's convoke lets a wide board deploy it for a fraction of its cost — with four-plus tokens down it can be hard-cast and kicked (entering with four +1/+1 counters) as an 8/8. Battle Screech's flashback (tap three untapped white creatures) is self-enabling: the front side's two 1/1 Birds plus any one white body (Savannah Lions, Icatian Javelineers, or a Griffin token) pay the recast, so the card is two casts even from an otherwise green board.

### STRUCTURAL CHECKS
```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (23 nonland):  1:7  2:1  3:8  4:4  5:1  6:2
  WARN  MV 2 share: share 4% below band minimum 25%
  WARN  MV 4+ share: share 30% above band maximum 20%
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 12 copies → p=0.99 (need ≥ 0.75)
  PASS  enabler: 6 copies → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 75%  T2 86%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Deck races on its own width; no maindeck sweeper (anti-synergy with its board). Sandstorm x2 in the sideboard is the one-sided answer vs. opposing go-wide/Goblin token boards (1 damage to each attacker kills X/1 tokens).
  OK        single_large_threat: Swords to Plowshares, Radiant's Judgment
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment removal; Break Asunder and Wax // Wane are boarded in vs. enchantment/artifact-reliant decks.
  CONCEDED  stack: GW has no countermagic in this pool; the proactive clock pressures the opponent rather than answering the stack.
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt is the sideboard answer vs. flashback/reanimator.
```
- Curve WARN — MV 2 share 4% vs 25% min: the GW pool offers no efficient proactive 2-drop token producer; the deck bridges turn 2 with one-mana ramp (Birds, Wild Growth, Nature's Lore) into its 3-MV token engines. Pool constraint, accepted.
- Curve WARN — MV 4+ share 30% vs 20% max: the go-wide payoffs (Battle Screech, Kavu Primarch, Saproling Symbiosis, Gauntlet, Symbiotic Beast, Kamahl) naturally sit at 4-6 MV and convoke/ramp pull them earlier; trimming them would remove the win condition. Accepted.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Surplus mana is sunk by Kamahl's repeatable {2}{G}{G}{G} overrun, Squirrel Nest's {T}: create a Squirrel every turn, Battle Screech and Call of the Herd flashback, and Kavu Primarch's kicker {4} — every excess land converts to board or damage. |
| screw | mitigation | Two one-mana accelerants (Birds of Paradise, Wild Growth) plus Nature's Lore (MV2 ramp) and cheap 1-drop bodies (Savannah Lions x2, Icatian Javelineers) keep 2-land hands functional and ramp toward the 3-MV token engines; genuinely 1-land hands are a mulligan (no card-draw dig). |
| decapitation | mitigation | No single card is load-bearing — the win is diffuse token width across ~12 producers; answering any one piece (even Gauntlet or Kamahl) leaves the wide board and the remaining producers/pumps intact. |
| gas-out | mitigation | Cards: Self-Replacing/recurring — Battle Screech and Call of the Herd flashback from the yard (extra bodies with no card in hand), Squirrel Nest makes a token every turn empty-handed, Kamahl turns lands into attackers, Griffin Guide leaves a Griffin. The board refuels from permanents and the graveyard, not the hand. |
| raced | accepted | The deck's goldfish (~T6) is comparable to the cube's fastest aggro but its maindeck lifegain is thin; racing pure aggro (mono-red goblins, black aggro) is a real risk accepted in exchange for the proactive go-wide plan. Swords to Plowshares x2 + Radiant's Judgment interact with the biggest threats, and Sandstorm/Lyra/Congregate come in from the board. |
| disruption-fizzle | mitigation | There is no single combo turn to disrupt — a countered Saproling Symbiosis or Gauntlet still leaves the wide board already deployed; the deck attacks with the tokens down and plays the next producer next turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Empty the Warrens / Mogg War Marshal / Siege-Gang Commander | Red Goblin go-wide package — off core colors (GW splashless); reserved for the Naya build. |
| Opposition | Blue tap-down keystone — off-color; belongs to the GWu prison build. |
| Rith, the Awakener | GRW; requires a red pip the splashless GW build won't support. |
| Forgotten Ancient | +1/+1 counter engine off spells cast; slow and not a token producer — grindy value that doesn't advance the go-wide clock. |
| Sylvan Library | Card selection, not board development; a wide-aggro deck wants bodies on curve, not life-paid card draw. |
| Test of Endurance | Life-total wincon; the deck kills via combat, not by gaining to 50. |
| Serra Avatar | 7-drop */* — too expensive; the curve tops at the payoff pumps. |
| Werebear / Terravore / Mystic Zealot | Threshold/graveyard payoffs; this build has no self-mill to reliably turn threshold on, so power is unreliable — see Counts Principle against maindeck. |
| Wall of Junk / Giant Spider | Defensive bodies; a proactive go-wide aggro deck doesn't want walls that can't attack. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.17 adj [MV 2.87 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  60.7%  prod  58.8%  gap  +1.9pp  [OK]
  W  demand  39.3%  prod  47.1%  gap  -7.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_<=2: PASS (all C/U at <=2 copies)
rares_mythics_<=1_each: PASS
rares_mythics_total_<=5: PASS (4 mainboard + Lyra Dawnbringer SB = 5)
cards_from_cube_pool_only: PASS (basics format-supplied)
core_colors: GW, splashless
```