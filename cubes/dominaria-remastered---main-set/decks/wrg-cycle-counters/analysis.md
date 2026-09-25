---
deck_name: "wrg-cycle-counters"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WRG"
format: "40-card"
built_at: "2026-07-29T23:24:55Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
1x Clifftop Retreat     RW dual, untapped w/ Mtn or Plains
1x Drifting Meadow      W, tapped, Cycling {2}
4x Forest               basic (G)
1x Gemstone Mine        any color, 3 uses
3x Mountain             basic (R)
2x Plains               basic (W)
1x Radiant Grove        GW dual, tapped
1x Sacred Peaks         RW dual, tapped
1x Slippery Karst       G, tapped, Cycling {2}
1x Smoldering Crater    R, tapped, Cycling {2}
1x Wooded Ridgeline     RG dual, tapped
```

### CREATURES (11)
```
CMC  Card                          Qty  Color  Role                               Rar
  1  Grim Lavamancer               x1  R      GY reach engine                    R
  1  Savannah Lions                x2  W      1-drop clock (2/1)                 C
  2  Jolrael, Mwonvuli Recluse     x1  G      cycle-draw -> 2/2 Cat; X/X overrun finisher R
  3  Penumbra Bobcat               x2  G      2/1, death -> 2/1 Cat (sweeper-resilient) C
  4  Flametongue Kavu              x2  R      removal + 4/2 body                 U
  4  Kavu Primarch                 x1  G      convoke/kicker green body          C
  5  Street Wraith                 x2  B      free cycler (fuels Boon/Rift/Jolrael, never cast) C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                          Qty  Color  Role                               Rar
  1  Chain Lightning               x1  R      burn / reach                       C
  1  Spark Spray                   x2  R      cycler + 1-dmg removal             C
  1  Swords to Plowshares          x1  W      premium removal                    U
  3  Call of the Herd              x2  G      flashback tokens (two 3/3 Elephants) U
  3  Radiant's Judgment            x1  W      cycler + removal (pow>=4)          C
  3  Renewed Faith                 x1  W      cycler + incidental life           C
  4  Saproling Symbiosis           x1  G      go-wide payoff — X Saprolings = creatures you control R
```

### OTHER SPELLS (3)
```
CMC  Card                          Qty  Color  Role                               Rar
  2  Invigorating Boon             x1  G      cycling payoff — +1/+1 counter per cycle U
  2  Lightning Rift                x1  R      cycling payoff — 2 dmg per cycle   U
  3  Griffin Guide                 x1  W      evasion aura + Griffin token on death U
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                          Rar
Tormod's Crypt                x2  C      vs graveyard decks (~18.75% of cube)             U
Orim's Thunder                x2  W      vs artifacts/enchantments; kicker R burns a creature C
Pacifism                      x2  W      vs a large threat our board can't get past       C
Lull                          x2  G      vs aggro/go-wide — fog to buy a turn, cycles when not needed C
Primal Boost                  x2  G      combat trick + extra green cycler; grows the widest attacker (fine vs grind and go-wide mirrors) C
```

## ANALYSIS

### DECK IDENTITY

Naya (WRg) cycling counters/tokens midrange. Two cycling payoffs — Invigorating Boon (+1/+1 counter per cycle) and Lightning Rift (2 damage per cycle) — turn every cycle into board growth and reach, while Jolrael, Mwonvuli Recluse converts each turn's cycle-draw into a 2/2 Cat. A wide, growing board of tokens (Call of the Herd, Penumbra Bobcat, Saproling Symbiosis, Griffin) attacks; Lightning Rift, Grim Lavamancer and burn supply the reach; Flametongue Kavu and Swords clear blockers. The plan wins by combat from a widening, counter-pumped board around turn 7.

### KEY OBSERVATIONS

**Two payoffs off one trigger.** Every cycle fires BOTH Invigorating Boon (a +1/+1 counter on your best attacker) and Lightning Rift (2 damage to clear a blocker or go face), and — on your own turn — Jolrael's second-draw trigger for a free 2/2 Cat. Nine cycle sources (6 spells + 3 cycling lands) mean the board widens, grows, and burns from the same cards.

**Mana safety was the design axis.** Of three sketched builds the judge took the one with zero double-green cards: every green spell here casts on a single {G} (Invigorating Boon {1}{G}, Jolrael {1}{G}, Saproling Symbiosis {3}{G}, Call of the Herd {2}{G}, Penumbra Bobcat {2}{G}, Kavu Primarch {3}{G}). That is why 8 green sources is enough despite the thin fixing. Jolrael's {4}{G}{G} overrun (X/X where X = cards in hand) is an optional late-game finisher, not a casting requirement.

**No card sweeps its own board.** Slice and Dice and Solar Blast (both hit every creature) were kept out of the maindeck — 8 of the 9 body-types here are 3 toughness or less. The grill also cut Slice and Dice from the sideboard for the same reason; Primal Boost (a {2}{G} combat trick that also cycles) took the slot.

**Forgotten Ancient was cut, not kept.** The threat-dense sketch ran it, but its counters come from spells cast, not from cycling — decoupled from the deck's engine. Cutting it freed the fifth rare for Clifftop Retreat, the manabase's only untapped RW dual.

**Land count is one over the curve target.** The model recommends 16 for avg MV 2.17; this deck runs 17 because 8 of its lands enter tapped and it must hit three colors on curve. The three cycling lands turn the flood risk into engine fuel.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:7  2:3  3:7  4:4  5:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 4 copies → p=0.77 (need ≥ 0.75)
  PASS  threat: 11 copies → p=0.99 (need ≥ 0.75)
  PASS  enabler: 6 copies → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 70%  T2 88%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: This deck answers go-wide by going wider and bigger (Invigorating Boon counters + Saproling Symbiosis/Call of the Herd/Jolrael tokens); no maindeck sweeper (Slice and Dice would kill our own board). Lull (fog) is the sideboard option to buy time when behind.
  OK        single_large_threat: Swords to Plowshares, Flametongue Kavu, Radiant's Judgment
  CONCEDED  noncreature_permanents: Burn ('any target': Lightning Rift, Chain Lightning, Spark Spray, Grim Lavamancer) answers planeswalkers; artifacts/enchantments are raced. Orim's Thunder is the SB answer.
  CONCEDED  stack: No counterspells; proactive go-wide plan. Resilience is token/counter redundancy across four payoffs, not stack control.
  CONCEDED  graveyard: No maindeck graveyard hate; race. Tormod's Crypt in SB vs the cube's 18.75% graveyard decks.
```
- curve PASS (midrange) — no WARN.
- goldfish PASS (keepable 86%) — no WARN.
- Land deviation (17 vs 16) is composition-driven (3-color + 8 taplands) and documented in land_math.deviation; audit PASSES at 17.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Three cycling lands (Slippery Karst, Smoldering Crater, Drifting Meadow) cycle for {2}; Kavu Primarch's kicker {4}, Jolrael's {4}{G}{G} overrun, Grim Lavamancer and Lightning Rift ({1}) are mana sinks that turn surplus lands into board or damage. |
| screw | mitigation | Avg MV 2.17, 7 one-drops; 6 cyclers + 3 cycling lands dig, and Gemstone Mine + Street Wraith (free cycle) find colors. 17 lands (one above the curve target) is the 3-color insurance; goldfish keepable 86%, 3 lands by turn 3 = 91%. |
| decapitation | mitigation | No single key card — four independent payoffs (Invigorating Boon, Lightning Rift, Jolrael, Saproling Symbiosis) plus a go-wide token core; removing any one leaves the board plan intact. |
| gas-out | mitigation | 6 self-replacing cyclers + Call of the Herd flashback (a second Elephant) + Penumbra Bobcat death-tokens + Jolrael's per-turn Cat refuel the board; Grim Lavamancer and Lightning Rift give mana-only reach on an empty hand. |
| raced | accepted | The 3-color tapland mana (8 enter-tapped lands) concedes early tempo; cutting taplands would strand the green payoffs the archetype is built on. We accept vulnerability to the fastest starts, mitigated by cheap removal (Swords, Flametongue Kavu, Spark Spray, Chain Lightning) + Grim Lavamancer + Renewed Faith lifegain, and post-board Lull (fog) + Pacifism. |
| disruption-fizzle | mitigation | The plan is incremental and go-wide — many independent token/counter sources, no single combo turn. One counter or removal spell trades one-for-one and the board keeps growing (Boon counters, Jolrael Cats, flashback/death tokens). |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Forgotten Ancient | Sketch keystone, then CUT: its counters accrue from spells cast, not from cycling, so it is decoupled from the Boon/Rift/Jolrael cycle engine; cutting it freed a rare slot for Clifftop Retreat (better fixing). |
| Battle Screech | Four evasive flyers (ideal Invigorating Boon / Griffin Guide targets), but a WW double-white cast is risky on 7 white sources in a 3-color base. |
| Squirrel Nest | Repeatable token engine, but {1}{G}{G} strands on the thin (8-source) green base — the exact GG risk the mana plan avoids. |
| Symbiotic Beast | Sweeper-resilient go-wide, but {4}{G}{G} double-green + 6 mana is too heavy for this fixing. |
| Kamahl, Fist of Krosa | A second overrun finisher, but {4}{G}{G} cast + {G}{G}{G} activation is uncastable on 8 green sources. |
| Assault // Battery | Flexible single-pip burn-or-token; a reasonable flex the toolbox build would want, held back to keep the token/counter core tight. |
| Solar Blast | A 7th cycler + removal, but its {1}{R}{R} cycle cost is double-red and it can ping your own 1/1 tokens. |
| Slice and Dice | Cut from the sideboard in the grill: '4 damage to each creature' sweeps this deck's own go-wide board (8 of 9 body-types are <=3 toughness). Replaced by a 2nd Primal Boost. |
| Gempalm Incinerator | A {1}{R} cycler-body, but its cycle-ping X = Goblins = 0 here (no other Goblins), so it is a vanilla 2/1 cycler. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.17   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.77 adj [MV 2.17 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  38.1%  prod  47.1%  gap  -9.0pp  [OK]
  R  demand  33.3%  prod  47.1%  gap -13.8pp  [OK]
  W  demand  28.6%  prod  35.3%  gap  -6.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] commons/uncommons <= 2 copies each
[PASS] rares/mythics <= 1 copy each
[PASS] <= 5 rares/mythics total main+SB: 5 main (Clifftop Retreat, Gemstone Mine, Jolrael, Saproling Symbiosis, Grim Lavamancer) + 0 SB = 5 (at cap)
[PASS] all cards from cube mainboard pool + format basics
[PASS] WRG color identity — all green cast costs single-G; Street Wraith in as a colorless cycler
```