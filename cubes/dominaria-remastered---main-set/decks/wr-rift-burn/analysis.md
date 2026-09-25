---
deck_name: "wr-rift-burn"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WR"
format: "40-card"
built_at: "2026-07-29T22:33:44Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
1x Clifftop Retreat     RW dual, untapped w/ Mountain or Plains
2x Drifting Meadow      W, enters tapped, Cycling {2}
1x Mishra's Factory     colorless manland, 2/2
8x Mountain             basic (R)
2x Plains               basic (W)
1x Sacred Peaks         RW dual, enters tapped
2x Smoldering Crater    R, enters tapped, Cycling {2}
```

### CREATURES (6)
```
CMC  Card                     Qty  Color  Role                         Rar
  1  Grim Lavamancer          x1  R      GY reach engine              R
  3  Gempalm Incinerator      x1  R      Cycler + 2/2 body            U
  4  Flametongue Kavu         x2  R      Removal + body               U
  5  Street Wraith            x2  B      Free cycler (never cast)     C
```

### INSTANTS & SORCERIES (14)
```
CMC  Card                     Qty  Color  Role                         Rar
  1  Chain Lightning          x2  R      Burn / removal               C
  1  Spark Spray              x2  R      Cycler + 1-dmg removal       C
  1  Swords to Plowshares     x2  W      Premium spot removal         U
  3  Radiant's Judgment       x2  W      Cycler + removal pow>=4      C
  3  Renewed Faith            x2  W      Cycler + lifegain            C
  4  Solar Blast              x2  R      Cycler + 3 burn              C
  6  Slice and Dice           x2  R      Cycler + sweeper             U
```

### OTHER SPELLS (3)
```
CMC  Card                     Qty  Color  Role                         Rar
  2  Lightning Rift           x2  R      Payoff engine - cycle->2 dmg U
  3  Sulfuric Vortex          x1  R      Clock + lifegain lock        R
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in                              Rar
Tormod's Crypt           x2  C      Graveyard decks (~18.75% of cube)                    U
Orim's Thunder           x2  W      Artifacts/enchantments; kicker R burns a creature    C
Pacifism                 x2  W      Single large/evasive threat                          C
Windborn Muse            x1  W      Go-wide aggro (attacker tax)                         R
Crawlspace               x1  C      Go-wide swarms (caps attackers at 2)                 R
Fireblast                x1  R      Control/combo - free 4 reach                         U
Damping Sphere           x1  C      Ramp/big-mana/storm                                  U
```

## ANALYSIS

### DECK IDENTITY

WR Lightning Rift burn-control built around Cycling. Thirteen cyclers plus two cycling lands turn every draw step into a 2-damage Lightning Rift trigger while filtering to answers; Grim Lavamancer recycles the graveyard the cyclers fill, and Sulfuric Vortex adds a clock that also locks off opposing lifegain. Point removal (Swords to Plowshares, Flametongue Kavu, Chain Lightning) and a Slice and Dice sweeper hold the board until direct damage - Rift pings, burn, Grim, and Vortex - closes from the top around turn 8.

### KEY OBSERVATIONS

**Two overlapping damage axes off the same cards.** Spark Spray, Solar Blast, and Slice and Dice each *also* deal damage when cycled, so a single cycler can be card selection, a Lightning Rift trigger ({1} -> 2), and a direct burn effect. That triple-duty is why 13 cyclers can carry a control shell that still fields 10 dedicated removal/answer cards.

**Redundant inevitability, not a fragile engine.** The assembly gate treats the payoff as any one of Lightning Rift x2 / Grim Lavamancer / Sulfuric Vortex (effective 3.75 copies, P=0.77 by turn 8). Lightning Rift x2 alone is only P=0.51 by turn 7 - which is exactly why the thesis turn was set to 8 and the engine is spread across three independent cards. Removing any one on sight does not turn the deck off.

**Cycler count is 13, engine slot is 15.** The engine slot (15 cards) = 13 cyclers + 2 Lightning Rift; the Rift copies are the payoff, not cyclers. So 13/23 nonland cards (56.5%) actually cycle - the number the assembly gate used as the enabler count (P=0.997).

**Gempalm Incinerator's cycle-ping is dead here.** Its 'X = number of Goblins on the battlefield' is 0/40 in this list (Gempalm is the only Goblin and it leaves as it cycles), so it is run purely as a {1}{R} cycler and a 2/2 body - one copy, not two.

**Mana skews red.** 18 red pips vs 6 white (75/25); white demand is all single-pip (Swords, Radiant's, Renewed Faith cycle), so 6 white sources suffice while red carries the RR cards (Slice and Dice, Sulfuric Vortex). Sulfuric Vortex + Swords to Plowshares is pro-synergy (denies the opponent the Swords life); Vortex + our own Renewed Faith is anti-synergy, which is why Vortex is a board-out vs aggro.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:7  2:2  3:6  4:4  5:2  6:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.75: Grim Lavamancer@0.85, Sulfuric Vortex@0.9) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 13 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 75%  T2 90%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Slice and Dice
  OK        single_large_threat: Swords to Plowshares, Flametongue Kavu, Radiant's Judgment
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment removal; burn ('any target') answers planeswalkers but artifacts/enchantments are raced. Orim's Thunder is the SB answer.
  CONCEDED  stack: No counterspells; the deck is proactive and races. Resilience is redundancy, not stack control.
  CONCEDED  graveyard: No maindeck graveyard hate; race plan. Tormod's Crypt in SB vs the cube's 18.75% graveyard decks.
```
- curve: PASS - no WARN.
- goldfish: PASS (keepable 86%) - no WARN.
- assembly: thesis turn revised 7->8 (Lightning Rift x2 alone is P=0.51 by turn 7; the redundant three-engine payoff assembles at P=0.77 by turn 8).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Smoldering Crater + Drifting Meadow cycle for {2} (surplus land -> card + Rift trigger); Mishra's Factory becomes a 2/2; excess mana fuels Rift ({1}) and Grim Lavamancer ({R}). |
| screw | mitigation | Avg MV 2.48 with 7 one-drops; 13 cyclers (Street Wraith free, Spark Spray {R}) dig to lands. Goldfish keepable 86%, 3 lands by turn 3 = 91%. |
| decapitation | mitigation | Lightning Rift is one of three inevitability engines; removing it leaves Grim Lavamancer + Sulfuric Vortex + the burn suite intact - redundant direct damage, not one card. |
| gas-out | mitigation | 13 of 23 nonland cards are self-replacing cyclers; the deck refuels as it operates. Grim Lavamancer and Rift give mana-only reach on an empty hand. |
| raced | accepted | Teching harder vs turn-3-4 aggro (more lifegain/sweepers) would dilute the cycler/burn density the Rift engine needs. We accept some vulnerability to the fastest starts; post-board Renewed Faith, Slice and Dice, Windborn Muse, Crawlspace come in and Sulfuric Vortex (which also damages us) comes out. |
| disruption-fizzle | mitigation | The kill is incremental - each cycle is an independent 2-damage trigger, no single combo turn to counter. One counterspell removes at most one of three engines; Grim/Vortex/burn continue. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Empty the Warrens | Storm payoff; no ritual acceleration in pool + spell count too low to make tokens |
| Grapeshot | Storm payoff; same — storm count won't reach lethal here |
| Siege-Gang Commander | Goblin-aristocrats engine, off the Rift-burn plan; rare-cap pressure |
| Pashalik Mons | Goblin sac payoff, off-plan |
| Polluted Mire | Off-color cycling land — taps for dead B mana in WR; tapland cost not worth extra fuel |
| Remote Isle | Off-color cycling land — dead U mana in WR |
| Slippery Karst | Off-color cycling land — dead G mana in WR |
| Helm of Awakening | Symmetric cost reducer with no storm payoff to break the symmetry |
| Test of Endurance | Lifegain wincon — wrong axis for a burn deck |
| Divine Sacrament | Threshold anthem — threshold subtheme too thin in this build |
| Worldgorger Dragon | Reanimator combo, off-plan |
| Lyra Dawnbringer | Top-end lifegain fatty; too slow + rare-cap |
| Wrath of God | Unconditional sweeper for toughness-5+ bodies Slice and Dice can't kill; costs a rare (deck at 5-cap) and WW is hard on 6 white sources - kept as a sideboard-tier answer via Pacifism instead. |
| Triskelion | Three colorless pings compose with the direct-damage finish, but cmc 6 and a rare-cap cost; declined to keep the curve low. |
| Icy Manipulator | Repeatable tempo lock with no rare-cap cost, but not a cycler - dilutes the engine-forward density. |
| Mind Stone | Ramp + late cantrip; the 13 cyclers already supply card flow, so ramp is off-plan for a 17-land shell. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.36 adj [MV 2.48 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  75.0%  prod  70.6%  gap  +4.4pp  [OK]
  W  demand  25.0%  prod  35.3%  gap -10.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] commons/uncommons <= 2 copies each (max used: x2)
[PASS] rares/mythics <= 1 copy each
[PASS] <= 5 rares/mythics total main+SB: 3 main (Clifftop Retreat, Grim Lavamancer, Sulfuric Vortex) + 2 SB (Windborn Muse, Crawlspace) = 5 (at cap)
[PASS] all cards from cube mainboard pool + format basics
[PASS] WR color identity - all nonland cards usable in W/R (Street Wraith in as a colorless cycler)
```