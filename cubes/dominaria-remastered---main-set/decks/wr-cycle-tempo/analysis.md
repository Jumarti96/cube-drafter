---
deck_name: "wr-cycle-tempo"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WR"
format: "40-card"
built_at: "2026-07-29T23:02:04Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
1x Clifftop Retreat     RW dual, untapped w/ Mountain or Plains
2x Drifting Meadow      W, tapped, Cycling {2}
1x Gemstone Mine        any color, 3 uses
1x Mishra's Factory     colorless manland, 2/2
5x Mountain             basic (R)
2x Plains               basic (W)
2x Sacred Peaks         RW dual, tapped
2x Smoldering Crater    R, tapped, Cycling {2}
```

### CREATURES (12)
```
CMC  Card                     Qty  Color  Role                              Rar
  1  Grim Lavamancer          x1  R      recurring reach (GY)              R
  1  Savannah Lions           x2  W      1-drop clock (2/1)                C
  2  Spectral Lynx            x1  W      evasive 2-drop (2/1, protection from green) U
  3  Gempalm Incinerator      x1  R      cycler + 2/1 body                 U
  3  Suq'Ata Lancer           x2  R      evasive clock (haste, flanking)   C
  4  Dragon Whelp             x1  R      evasive flyer + firebreathing reach U
  4  Flametongue Kavu         x2  R      tempo removal + 4/2 body          U
  5  Street Wraith            x2  B      free cycler (Rift fuel, never cast) C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                     Qty  Color  Role                              Rar
  1  Chain Lightning          x2  R      burn / reach                      C
  1  Spark Spray              x2  R      1-dmg cycler                      C
  1  Swords to Plowshares     x2  W      premium removal                   U
  3  Radiant's Judgment       x1  W      removal cycler (pow>=4)           C
  3  Renewed Faith            x1  W      cycler + incidental life          C
  4  Solar Blast              x1  R      3 burn / cycler                   C
```

### OTHER SPELLS (3)
```
CMC  Card                     Qty  Color  Role                              Rar
  2  Lightning Rift           x2  R      cycling payoff — 2 dmg per cycle  U
  3  Griffin Guide            x1  W      evasion aura + Griffin token on death U
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in                              Rar
Slice and Dice           x2  R      vs go-wide aggro/tokens — reset when on the back foot (board out small creatures) U
Tormod's Crypt           x2  C      vs graveyard decks (~18.75% of cube)                 U
Orim's Thunder           x2  W      vs artifacts/enchantments; kicker R burns a creature C
Pacifism                 x2  W      vs a large blocker/attacker our small creatures can't get past C
Sulfuric Vortex          x1  R      vs control/grind — reach + lifegain lock when creatures get swept R
Fireblast                x1  R      vs control/combo — free 4 reach to close             U
```

## ANALYSIS

### DECK IDENTITY

WR cycling tempo. A lean, evasive creature clock (Savannah Lions, Suq'Ata Lancer with flanking, Flametongue Kavu, a Griffin Guide-borne flyer, Dragon Whelp) applies pressure from turn one while eight cyclers plus two cycling lands keep the hand full and feed Lightning Rift; cheap removal and burn (Swords to Plowshares, Chain Lightning, Spark Spray, Solar Blast) clear blockers and, with Lightning Rift and Grim Lavamancer, provide the reach to close around turn 6.

### KEY OBSERVATIONS

**Cycling doubles as card advantage and reach.** Eight cyclers plus two cycling lands mean the deck rarely floods or runs dry, and with Lightning Rift out every cycle is also a 2-damage bolt to clear a blocker or go face. That is why an aggressive 16-land deck can afford to spend cards on removal without running out of gas.

**Evasion is the harvest.** The winning sketch (card-advantage lens) had almost no evasion — all ground 2/1s and 2/2s. Griffin Guide (grants flying, leaves a 2/2 flyer when the creature dies) and Dragon Whelp (a firebreathing flyer) were pulled from the rejected proactive-clock build to give the clock a way over the ground stall the cube's midrange creates.

**The turn-2 creature gap, fixed.** The grill flagged nine one-drops then a jump to three-drop creatures. Macetail Hystrodon (a cycler-only 7-drop) was swapped for Spectral Lynx, a 2/1 for {1}{W} whose protection from green is live against the cube's most-played color (37 green cards) — it attacks and blocks into green all day.

**Gempalm Incinerator's cycle-ping is 0 here** (X = Goblins on the battlefield; this deck runs 0 other Goblins), so it is a {1}{R} cycler and a 2/1 body only — one copy, not two.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  1:9  2:3  3:6  4:4  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  threat: 11 copies → p=0.98 (need ≥ 0.75)
  PASS  reach: 8 copies → p=0.94 (need ≥ 0.75)
  PASS  enabler: 8 copies → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 84%  T2 95%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: As the aggressor this deck races go-wide boards rather than sweeping (a sweeper kills its own clock). Slice and Dice is the SB answer when on the back foot.
  OK        single_large_threat: Swords to Plowshares, Flametongue Kavu, Radiant's Judgment
  CONCEDED  noncreature_permanents: Burn ('any target') answers planeswalkers; artifacts/enchantments are raced. Orim's Thunder is the SB answer.
  CONCEDED  stack: No counterspells; proactive race. Resilience is a redundant creature clock + cheap threats, not stack control.
  CONCEDED  graveyard: No maindeck graveyard hate; race plan. Tormod's Crypt in SB vs the cube's 18.75% graveyard decks.
```
- curve PASS (tempo) — no WARN.
- goldfish PASS — no WARN.
- Grill repair (advisory): Macetail Hystrodon (cycler-only 7-drop) swapped for Spectral Lynx to fill the turn-2 creature gap the Challenger flagged; avg MV 2.25->2.04, land target 16 unchanged.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Smoldering Crater + Drifting Meadow cycle for {2}; Mishra's Factory + Dragon Whelp firebreathing + Grim Lavamancer are mana sinks; excess mana fuels Rift ({1}). |
| screw | mitigation | Avg MV 2.04; 8 cyclers (Street Wraith free, Spark Spray {R}) plus the low curve dig to lands. Goldfish keepable high, T1 play strong. |
| decapitation | mitigation | No single key card — the clock is 11 threats and Lightning Rift is redundant reach (Grim Lavamancer + 5 burn spells also close). Removing any one piece leaves the rest of the clock intact. |
| gas-out | mitigation | 8 self-replacing cyclers + Renewed Faith refuel; Grim Lavamancer and Lightning Rift give mana-only reach when the hand empties. |
| raced | mitigation | This deck is the aggressor with an evasive clock (Griffin Guide flying, Suq'Ata flanking, Dragon Whelp) + cheap interaction (Swords, Flametongue Kavu, Spark Spray, Chain Lightning) to trade against a faster start; Grim Lavamancer + burn clear a blocker or go face. Post-board Slice and Dice + Renewed Faith stabilize vs the fastest aggro. |
| disruption-fizzle | mitigation | The plan is incremental — many independent threats + independent cycles, no single combo turn. One counter/removal trades one-for-one and the clock continues. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Macetail Hystrodon | Cut in the grill: a cycler-only 7-drop in a 16-land deck; Spectral Lynx fills the turn-2 creature gap instead. |
| Shivan Dragon | Stronger evasive finisher (5/5 flyer) but cmc 6 and a rare (rare-cap pressure); no cycle mode, so it costs engine density. |
| Ridgetop Raptor | Double strike hits hard under Griffin Guide, but no cycle mode; kept the cycler-body Gempalm for enabler density. |
| Serra Angel | Premium 4/4 flyer, but WW on 8 white sources is a real cost in an R-leaning shell. |
| Juggernaut | Colorless 5/3 beater, but no evasion and no synergy with the cycling/Rift plan. |
| Empty the Warrens | Storm token payoff; no ritual acceleration + low spell count in the pool. |
| Siege-Gang Commander | Goblin-aristocrats engine — a different (go-wide sacrifice) plan; rare-cap pressure. |
| Improvised Armor | +2/+5 aura at 4 mana is too slow for a tempo curve; Griffin Guide is the cheaper evasion aura. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.04   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.95 adj [MV 2.04 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  65.2%  prod  62.5%  gap  +2.7pp  [OK]
  W  demand  34.8%  prod  50.0%  gap -15.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] commons/uncommons <= 2 copies each
[PASS] rares/mythics <= 1 copy each
[PASS] <= 5 rares/mythics total main+SB: 3 main (Clifftop Retreat, Gemstone Mine, Grim Lavamancer) + 1 SB (Sulfuric Vortex) = 4
[PASS] all cards from cube mainboard pool + format basics
[PASS] WR color identity — all nonland cards usable in W/R (Street Wraith in as a colorless cycler)
```