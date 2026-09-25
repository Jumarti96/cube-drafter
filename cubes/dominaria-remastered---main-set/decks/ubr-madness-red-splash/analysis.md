---
deck_name: "ubr-madness-red-splash"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UBR"
format: "40-card"
built_at: "2026-07-30T21:33:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
10x Island                 Blue source
2x Swamp                  Black source
1x Mountain               Red source (splash)
1x Molten Tributary       UR dual, tapped
1x Geothermal Bog         BR dual, tapped
1x Contaminated Aquifer   UB dual, tapped
1x Smoldering Crater      R source, tapped; cycles
```

### CREATURES (10)
```
CMC  Card                       Qty  Color  Role                                  Rar
  1  Grim Lavamancer           x1   R     SPLASH: repeatable 2-dmg reach from graveyard R
  2  Aquamoeba                 x2   U     Free repeatable discard outlet        C
  2  Cloud of Faeries          x2   U     Cheap flier; ETB untap 2 lands; cycles C
  3  Vexing Sphinx             x1   U     Evasive clock + built-in outlet + death-draw R
  4  Aven Fisher               x2   U     Evasive clock; draws on death         C
  4  Thieving Magpie           x2   U     Evasive card-advantage engine / clock U
```

### INSTANTS & SORCERIES (12)
```
CMC  Card                       Qty  Color  Role                                  Rar
  1  Gamble                    x1   R     SPLASH: {R} tutor + random discard (consistency) R
  1  Obsessive Search          x1   U     Madness cantrip; thickens GY          C
  2  Counterspell              x2   U     Hard counter                          C
  3  Circular Logic            x2   U     Madness counter (GY-scaling)          U
  3  Frantic Search            x1   U     Free loot outlet                      C
  3  Ichor Slick               x2   B     Madness removal (-3/-3); cycles       C
  3  Recoil                    x1   UB    Bounce + discard (only noncreature-perm answer) U
  4  Solar Blast               x1   R     SPLASH: 3 damage any target; flexible removal/reach; cycles C
  6  Dark Withering            x1   B     Madness removal (destroy nonblack)    U
```

### OTHER SPELLS (1)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Zombie Infestation        x1   B     Discard outlet -> 2/2 Zombie clock    U
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                                   Rar
Tormod's Crypt            x2   C     GY hate — vs reanimator/flashback/recursion (cube GY density 0.19) U
Duress                    x2   B     Hand disruption — vs control/combo — strip counters/removal/Sneak Attack C
Floodgate                 x1   U     Go-wide answer — vs tokens/go-wide; hits nonblue non-fliers — board in fliers-heavy U
Faceless Butcher          x1   B     Creature removal on a body — vs midrange/fatties                      U
Royal Assassin            x1   B     Repeatable removal — vs creature/tapper decks                 R
Mystic Remora             x1   U     Card advantage — vs spell-heavy control/combo             R
Terror                    x1   B     Cheap removal — vs aggro — kills real bodies the splash burn can't C
Man-o'-War                x1   U     Tempo bounce on a body — vs aggro / problem ETB                   C
```

## ANALYSIS

### DECK IDENTITY
UB discard-value tempo with a light red splash for reach and consistency. The UB core is the same evasive-flier + madness engine as the pure-UB build (Vexing Sphinx, Thieving Magpie, Aven Fisher, Cloud of Faeries as the clock; Aquamoeba, Zombie Infestation, Frantic Search, and Vexing Sphinx's upkeep as outlets fueling Circular Logic, Ichor Slick, Dark Withering, Obsessive Search). The red splash adds exactly three cards: Gamble (a one-mana tutor that also discards for madness), Grim Lavamancer (repeatable reach that turns the deep graveyard into direct damage), and Solar Blast (flexible 3-damage removal/reach). Red buys the last few points the evasive clock can't force through a stall and raises consistency toward the turn-7 kill.

### DOES THE SPLASH EARN ITS FIXING? (self-grill verdict, stated plainly)
The self-grill's absence audit made a strong, count-backed case worth recording so you can compare this against the pure-UB deck: **of the 3 red cards, only Grim Lavamancer offers something UB cannot replicate** (repeatable in-color direct damage / reach). Gamble has a pure-blue near-substitute in Impulse (no red source, no random discard), and Solar Blast's removal role is matched by black Terror / Chainer's Edict. The manabase pays a real tax for the splash — 4 of 17 lands enter tapped (Molten Tributary, Geothermal Bog, Contaminated Aquifer, Smoldering Crater), of which only Smoldering Crater is strictly red-attributable — so on raw power the pure-UB list is likely a touch stronger and faster. This deck keeps the splash deliberately, because reach + a tutor is a genuinely different game plan (closing stalled boards, digging for the right piece) and that is the point of running the red version.

### KEY INTERACTIONS
- **Madness engine, counted:** 6 madness payoffs (Circular Logic x2, Ichor Slick x2, Dark Withering, Obsessive Search) fed by 5 reliable outlets (Aquamoeba x2, Zombie Infestation, Frantic Search, Vexing Sphinx) plus Gamble's random pitch.
- **Grim Lavamancer tension:** it exiles two cards from your graveyard per activation, while Circular Logic counters "unless its controller pays {1} for each card in your graveyard." Sequence Lavamancer activations after you've cashed Circular Logic, or when the yard is deep enough to spare the cards.
- **Gamble as an outlet:** the random discard is usually upside here — with 6 madness cards and a graveyard payoff, pitching a random card frequently enables a spell or feeds Grim Lavamancer.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:3  2:7  3:7  4:5  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies → p=0.97 (need ≥ 0.75)
  PASS  enabler: 6 copies → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 37%  T2 89%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper in UB(r); race with fliers+tokens while Ichor Slick, Solar Blast, Grim Lavamancer pick off attackers. Floodgate is the SB answer.
  OK        single_large_threat: Ichor Slick, Dark Withering, Solar Blast, Recoil
  OK        noncreature_permanents: Recoil, Counterspell
  OK        stack: Counterspell, Circular Logic
  CONCEDED  graveyard: No maindeck GY hate; Tormod's Crypt is the SB answer (Grim Lavamancer only exiles your own GY).
```
No WARN-tier flags — curve, assembly, and goldfish all PASS, so no structural responses are required.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Grim Lavamancer converts spent graveyard + spare mana into 2 damage a turn regardless of land count; Smoldering Crater cycles; Thieving Magpie / Aven Fisher / Vexing Sphinx / Gamble dig and draw. |
| screw | mitigation | avg MV 2.78 with 3 one-drops and 7 two-drops; Cloud of Faeries (untap 2 lands), Obsessive Search / Smoldering Crater cycling dig toward lands. Risk is higher than the pure-UB build because 4 of 17 lands enter tapped. |
| decapitation | mitigation | No single key card — 9 redundant clock/reach pieces and 6 outlets; Gamble can re-find any answered piece. |
| gas-out | mitigation | Thieving Magpie x2, Vexing Sphinx death-draw, Aven Fisher x2, Frantic Search, Obsessive Search, deep-graveyard Grim Lavamancer as a mana-only damage source; Zombie Infestation makes bodies from dead cards; Gamble tutors gas. |
| raced | accepted | The splash makes this build SLOWER than the pure-UB version (4 tapped lands + a narrow Mountain), so against the fastest clocks (Sulfuric Vortex, mono-red) it can fall behind on the draw; we accept this as the price of red reach + Gamble consistency, and lean on Grim Lavamancer/Solar Blast to trade with early creatures and 6 cheap interaction spells to break the curve. |
| disruption-fizzle | mitigation | Incremental plan; madness + death-triggers generate value through interaction; a countered/answered threat is re-found by Gamble or replaced by the next redundant flier. |

### CARDS CONSIDERED BUT EXCLUDED
- Gempalm Incinerator — Cycle-damage keys off Goblins you control; deck runs ~0 Goblins so it deals 0 — the ability is dead here.
- Fireblast — Free mode needs sacrificing 2 Mountains; a splash never has 2 Mountains, so it is a {4}{R}{R} spell — unviable.
- Sulfur Falls / Gemstone Mine — Rare fixing lands; cut from the manabase to keep the 5 rare/mythic budget for spells (Gamble, Grim Lavamancer, Vexing Sphinx, Nantuko Shade).
- Pyre Zombie — BR recursion but {1}{R}{R} to sac and needs BB to return — too red/color-hungry for a light splash.
- Spark Spray — earlier splash pick; cut for Solar Blast, which deals 3 (kills real bodies) instead of 1.
- Impulse / Terror — the self-grill's absence audit correctly notes these pure-UB cards would out-perform Gamble/Solar Blast on raw power; kept red to preserve THIS deck's splash identity (see analysis).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 2.78 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  22.2%  prod  23.5%  gap  -1.3pp  [OK]
  U  demand  77.8%  prod  70.6%  gap  +7.2pp  [OK]

Splash Check: [PASS]
  R  5 card(s), max CMC 4  sources 4/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
- Commons/uncommons <= 2 copies each: PASS
- Rares/mythics <= 1 copy each: PASS
- Max 5 rares/mythics total (main+SB): PASS — exactly 5 (Vexing Sphinx, Grim Lavamancer, Gamble main; Royal Assassin, Mystic Remora SB)
- Core UB + red splash: PASS — exactly 3 red cards (Gamble, Grim Lavamancer, Solar Blast), all in splash_candidates
- Basic lands unlimited: PASS (Island x10, Swamp x2, Mountain x1)
```
