---
deck_name: "wu-azorius-endurance"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-31T03:01:29Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  8x Island                 basic land
  8x Plains                 basic land
  1x Idyllic Beachfront     UW dual, enters tapped
  1x Remote Isle            U source, cycling
```

### CREATURES (6)
```
CMC  Card                          Qty  Color  Role                          Rar
  2  Cleric of the Forward Order   x1  W      Lifegain body / blocker       C
  3  Man-o'-War                    x1  U      Tempo bounce body             C
  4  Floodgate                     x1  U      Wall / one-sided sweep        U
  4  Thieving Magpie               x1  U      Evasive draw engine           U
  5  Lyra Dawnbringer              x1  W      Lifelink finisher + anthem    M
  5  Serra Angel                   x1  W      Evasive beater                U
```

### INSTANTS & SORCERIES (13)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Swords to Plowshares          x1  W      Premium removal               U
  2  Counterspell                  x1  U      Hard counter                  C
  2  Impulse                       x1  U      Card selection                C
  2  Snap                          x1  U      Free bounce                   C
  3  Absorb                        x1  UW     Counter + gain 3              R
  3  Circular Logic                x1  U      Scaling counter / madness     U
  3  Frantic Search                x1  U      Free card filtering           C
  3  Renewed Faith                 x1  W      Lifegain / cantrip            C
  4  Congregate                    x1  W      Mass lifegain (reactive)      U
  4  Deep Analysis                 x1  U      Card advantage + flashback    C
  4  Fact or Fiction               x1  U      Card advantage                U
  4  Wrath of God                  x1  W      Board reset                   R
  5  Force of Will                 x1  U      Free counter / protection     M
```

### OTHER SPELLS (3)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Spirit Link                   x1  W      Lifegain aura                 C
  2  Pacifism                      x1  W      Creature lock                 C
  4  Test of Endurance             x1  W      Lifegain payoff / inevitabil  M
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                              Rar
Tormod's Crypt                x2  C      vs graveyard decks (biggest cube theme)             U
Counterspell                  x1  U      extra permission vs combo/control                   C
Damping Sphere                x1  C      vs storm / big-mana ramp                            U
Ovinize                       x1  U      shut off abilities / trick vs indestructible & big  C
Wall of Junk                  x1  C      0/7 recurring wall vs aggro                         U
Man-o'-War                    x1  U      extra tempo/bounce vs aggro                         C
Orim's Thunder                x2  W      vs artifacts & enchantments                         C
Aven Fisher                   x1  U      extra grindy flyer vs control mirrors               C
```

## ANALYSIS

### DECK IDENTITY
Azorius (UW) lifegain-control. Blue permission (Counterspell, Force of Will, Absorb) and card advantage (Fact or Fiction, Deep Analysis, Thieving Magpie) deny the opponent's game plan while Wrath of God and Floodgate reset the board. White lifegain (Congregate, Renewed Faith, Spirit Link) and Absorb bank life behind the wall; the deck closes with protected evasive flyers (Lyra Dawnbringer, Serra Angel, Thieving Magpie) and Test of Endurance as a Wrath-proof 50-life inevitability.

**The primary win is the flyer/attrition line, not Test of Endurance.** Lyra, Serra Angel and Thieving Magpie, protected by Counterspell/Absorb/Force of Will and refueled by Fact or Fiction/Deep Analysis, close most games. Test of Endurance is the deck's thematic Lifegain payoff and a Wrath-proof inevitability for the grindy games where the flyers get repeatedly answered — with only ~6 lifegain sources, reaching 50 is a long-game outcome, not a fast clock. The self-grill flagged this honestly and it is retained by design.

**Absorb is the deck's signature card.** 'Counter target spell. You gain 3 life' is permission that advances the lifegain plan — every counter is 3 more life banked toward Test.

**Floodgate is a one-sided ~4-damage sweep.** 'Deals damage to each nonblue creature without flying equal to half the number of Islands you control' — with 9 Island-subtype lands (8 Islands + Idyllic Beachfront) that is 4 to each nonblue grounded creature; the deck's own win-cons (blue Man-o'-War, flying Lyra/Serra/Magpie) are exempt.

**Congregate is a reactive swing, not a steady tap.** With only 6 creatures maindeck, its value comes from counting the opponent's board too — cast in response to a wide attack, 'gain 2 per creature on the battlefield' can be a 10-16 life swing exactly when you are being raced.

**Card advantage is the engine that wins the resource war.** Fact or Fiction, Deep Analysis (four cards across two casts), Thieving Magpie, Impulse and Frantic Search bury the opponent in cards while permission protects the plan to turn 9.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:2  2:5  3:5  4:7  5:3
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 4 copies → p=0.81 (need ≥ 0.75)
  PASS  enabler: 5 copies → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 32%  T2 81%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Wrath of God, Floodgate
  OK        single_large_threat: Swords to Plowshares, Pacifism, Man-o'-War, Snap, Counterspell, Force of Will
  OK        noncreature_permanents: Counterspell, Force of Will, Absorb, Circular Logic
  OK        stack: Counterspell, Force of Will, Absorb, Circular Logic
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt available from the sideboard.
```
- Threats at ~18% and card-advantage engine at ~27% both sit above the strict control bands: a 40-card singleton pool needs redundant win-cons, and reactive attrition deliberately over-weights card advantage to win the resource war — both deviations are the plan, not drift.
- Test of Endurance is retained as the pipeline's thematic Lifegain payoff and a Wrath-proof grind-inevitability, not the primary clock; lifegain density was raised to 6 sources (added Cleric of the Forward Order) to make the 50-life line more reachable in long control games. The primary win remains the protected flyer plan.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Cantrips (Impulse, Obsessive Search, Frantic Search) and Fact or Fiction / Deep Analysis turn surplus lands into cards; Deep Analysis flashback, Test of Endurance and Lyra are mana sinks; a control deck wants to hit land drops anyway. |
| screw | mitigation | Cheap cantrips (Obsessive Search {U}, Impulse {1}{U}, Frantic Search which untaps lands) dig toward the third land; 18 lands with keepable 82% / 3-land-by-T3 94%. The double-pip UU/WW top end is the residual risk, mitigated by the near-even split and the cycling Remote Isle. |
| decapitation | mitigation | The win is spread across Lyra, Serra Angel, Thieving Magpie and Test of Endurance (a noncreature that survives creature removal and Wrath); counters (Force of Will, Counterspell, Absorb) protect whichever closer is deployed. |
| gas-out | mitigation | Heavy card advantage — Fact or Fiction, Deep Analysis (with flashback), Thieving Magpie (draws on damage), Impulse, Frantic Search — means the deck out-draws the opponent and rarely empties first; this is the whole reactive-attrition plan. |
| raced | mitigation | Floodgate (0/5 wall), Cleric of the Forward Order (early blocker) and Wrath of God reset fast starts; cheap interaction (Swords, Snap, Man-o'-War, Pacifism) buys tempo; lifegain (Congregate, Renewed Faith, Spirit Link, Absorb, Cleric, Lyra lifelink) offsets the clock. The very fastest aggro is still the hardest matchup — hence Wall of Junk and a 2nd Man-o'-War in the board. |
| disruption-fizzle | mitigation | The plan is not one fragile turn: redundant win cons plus permission mean a countered or removed piece is replaced; Force of Will protects the key spell for free on the critical turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Serra Avatar | Mana-driven cut: {4}{W}{W}{W} is very hard in a blue-primary two-color base; the UW build anchors on Test of Endurance + Lyra + protected flyers instead. |
| Urza, Lord High Artificer | Powerful blue mythic but an artifact/token engine with no artifacts here to fuel it — off-plan. |
| Arcanis the Omnipotent | Great card-advantage finisher but {3}{U}{U}{U} is a triple-blue rare that strains THIN UW fixing; a rare-slot cost. |
| Opposition | Strong tap-down engine but wants a wide board the control deck doesn't field; better in a tempo shell. |
| Stroke of Genius | Card-draw payoff / mill kill but does not advance lifegain and eats a rare slot. |
| Mystical Tutor | Finds a counter or Wrath but card-disadvantageous and a rare outside the tight budget. |
| Denizen of the Deep | 11/11 finisher but 8 mana and bounces your own board — too clunky for a control shell with better win cons. |
| Icy Manipulator | Top control upgrade the grill surfaced: '{1},{T}: Tap target artifact, creature, or land' is a colorless repeatable soft-lock that sidesteps the THIN UW fixing and hardens the raced matchup — the first swap-in if the shell wants more repeatable answers. |
| Momentary Blink | Instant-speed save for Lyra/Serra/Magpie from removal (flashback for a second use) — directly serves the 'protect the flyers' plan; cut only for slot pressure. |
| Sawtooth Loon | The grill's proposed Test-of-Endurance replacement (ETB draw-2-filter + bounce a UW creature); a better pure-control card, but cutting Test would abandon the deck's Lifegain identity, so Test was kept. |
| Obsessive Search | 1-mana cantrip cut during the grill for Cleric of the Forward Order to raise lifegain density (5→6) and add an early blocker vs aggro. |
| Mystic Remora | Cheapest card-advantage engine vs a spell field, but a rare and the 5-cap is saturated; would require freeing a rare (e.g. cutting Test or Wrath). |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.18   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.91 adj [MV 3.18 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand  51.6%  prod  55.6%  gap  -4.0pp  [OK]
  W  demand  48.4%  prod  50.0%  gap  -1.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_max2: PASS
rares_mythics_max1: PASS
rares_mythics_total_max5: 5/5 PASS
UW_only: PASS
```
