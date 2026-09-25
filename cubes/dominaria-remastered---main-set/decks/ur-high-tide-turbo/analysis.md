---
deck_name: "ur-high-tide-turbo"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-29T23:51:37Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
11x Island
2x Mountain
2x Molten Tributary    ({T}: Add {U} or {R}.) This land enters tapped.
```

### CREATURES (4)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Cloud of Faeries           x2  U      Engine (free untapper)               C
  5  Peregrine Drake            x2  U      Engine (largest untapper)            C
```

### INSTANTS & SORCERIES (20)
```
CMC  Card                       Qty  Color  Role                                  Rar
  1  High Tide                  x2  U      Engine (mana amplifier)              U
  1  Mystical Tutor             x1  U      Infrastructure (finds High Tide / pa R
  1  Obsessive Search           x2  U      Engine (1-mana storm ticket; madness C
  2  Counterspell               x1  U      Interaction (protect combo turn)     C
  2  Grapeshot                  x2  R      Payload/Payoff (primary kill)        C
  2  Impulse                    x2  U      Infrastructure (selection)           C
  2  Snap                       x2  U      Engine (free untapper / rebuy)       C
  3  Frantic Search             x2  U      Engine (free untapper / filter)      C
  3  Stroke of Genius           x1  U      Payoff/refuel (deck-out finisher)    R
  4  Deep Analysis              x2  U      Infrastructure (refuel + surplus dra C
  4  Empty the Warrens          x2  R      Payload/Payoff (plan-B board kill)   C
  5  Force of Will              x1  U      Interaction (free protection)        M
```

### OTHER SPELLS (1)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Helm of Awakening          x1  C      Infrastructure (cost reduction)      R
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                              Rar
Tormod's Crypt             x2  C      Graveyard hate — vs the cube's 45-card GY theme    U
Overmaster                 x1  R      Combo protection + cantrip — vs counterspell decks R
Spark Spray                x2  R      Cheap removal — vs X/1 aggro; cycles               C
Counterspell               x1  U      Extra counter — vs control/combo                   C
Ovinize                    x2  U      Hate — neutralizes a single large threat / evasive C
Slice and Dice             x2  R      Hate — wide boards / go-wide aggro                 U
```

## ANALYSIS

### DECK IDENTITY
UR High Tide 'turbo' storm combo — a card-advantage-heavy take on the Grapeshot kill. High Tide (Islands add an extra {U}) plus the full free-untap suite (Snap x2, Cloud of Faeries x2, Frantic Search x2, Peregrine Drake x2) and Helm of Awakening cost reduction generate a large mana surplus and storm count. Because this pool has no rituals or extra free spells, the storm ceiling is bounded by cards in hand, so the realistic kill is usually Empty the Warrens x2 (a lethal Goblin board off a modest storm count of ~5), repeated Grapeshots across a big turn, or a Stroke-of-Genius deck-out — rather than a single one-shot Grapeshot for 20 by turn 5. A deep draw shell (Deep Analysis x2, Impulse x2, Obsessive Search x2, Frantic Search x2, Mystical Tutor) finds High Tide and rebuilds after disruption; Force of Will is free protection for the kill turn and a single Counterspell is backup.

### How this build differs from ur-high-tide-combo

Same engine, different emphasis. Where the baseline combo runs Turnabout + a second Counterspell + Circular Logic + Storm Entity, this turbo version trades interaction and the biggest mana-burst for a **deeper card-advantage shell** — Peregrine Drake x2 (restored to the main), Deep Analysis x2, Obsessive Search x2, and a full Impulse x2 — plus Force of Will as free protection. The bet: rather than out-counter disruption, out-draw it and re-assemble.

### The realistic kill (grill-verified)

This pool has **no rituals and no extra free spells** (no Brainstorm/Ponder/Manamorphose/Seething Song exist in the cube), so storm count is bounded by the cards in your hand, not by mana. The untappers make *mana*, but each is still only +1 to storm. With ~13 castable cantrip/engine spells, a single Grapeshot for 20 by turn 5 is optimistic. The reliable win lines are:
- **Empty the Warrens** off a modest storm count (~5 prior spells → 12 goblins), the go-wide plan B — note only 4 sweepers exist in the whole cube, so a token board is hard to punish;
- **repeated Grapeshots** across a big High Tide turn; or
- **Stroke of Genius** deck-out once the mana pool is enormous.

### Count-dependent verdicts (Counts Principle)

- **High Tide sources**: 13 of 15 lands are Island-typed (11 Island + 2 Molten Tributary) and doubled; the 2 Mountains are not. That makes the effective "combo land" count 13, tighter than the raw 15 — one reason the 15-land base sits at the goldfish 80% floor.
- **Gas-out defense** (the deck's real strength): Deep Analysis x2 (4 cards each with flashback), Impulse x2, Obsessive Search x2, Frantic Search x2, Stroke of Genius = a card-positive shell that reliably finds a second High Tide and rebuilds a broken turn.

### Flex knobs for iteration

The grill's top suggestions, all legal in this pool: **Turnabout** (the single biggest mana multiplier — untap all your lands, re-doubled by High Tide) as a higher-ceiling payoff; a **2nd Counterspell or Circular Logic** to lift interaction from 8% into the combo band; and a **16th land** to move goldfish keepability off the 80% floor.

### STRUCTURAL CHECKS
```
── Structural Checks: WARN ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (25 nonland):  1:5  2:10  3:3  4:4  5:3
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.8: Mystical Tutor@0.8) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 15 copies (effective 14.2: Mystical Tutor@0.2) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 80%
  play by turn: T1 68%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Combo deck races the board; no dedicated sweeper maindeck. Grapeshot is reserved as the kill.
  OK        single_large_threat: Counterspell, Force of Will, Snap
  CONCEDED  noncreature_permanents: No artifact/enchantment removal in this UR slice; the plan is to combo off before a permanent decides the game.
  OK        stack: Counterspell, Force of Will
  CONCEDED  graveyard: No maindeck graveyard hate; irrelevant to executing the storm turn (Tormod's Crypt is in the sideboard).
```
- goldfish WARN: keepable hands land exactly at the 80% threshold and 3-lands-by-turn-3 is 80% — a direct consequence of the lean 15-land count. Accepted per the user's list: the 8-card cantrip/draw suite (Impulse x2, Deep Analysis x2, Obsessive Search x2, Frantic Search x2) digs toward lands, and a combo deck values the extra spell over a 16th land. A 16th land is the obvious safety swap if early stumbles prove common.
- curve PASS and assembly PASS (payoff p=0.85, enabler p=0.99). Interaction (8%) is below the combo band by design — a deep draw shell + Force of Will substitutes for a counter suite.
- Storm-ceiling note (from grill): the assembly metric proves the deck DRAWS a payoff+enabler by turn 5, not that it reaches storm 19 for a one-shot Grapeshot. With ~13 castable cantrips/engine spells and zero rituals in the pool, storm count is bounded by cards in hand; the deck wins primarily via Empty the Warrens go-wide (storm ~5 = 12 goblins), repeated Grapeshots, or a Stroke deck-out. Pipeline is viable, just not a reliable turn-5 one-shot.
- Coverage note: Snap is listed under single_large_threat but is a tempo bounce, not a permanent answer (Counterspell/Force of Will answer on the stack only); the deck genuinely concedes resolved permanents and races/combos instead.

### FAILURE MODES

Mode | Verdict | Reasoning
---|---|---
flood | mitigation | Excess lands are combo fuel: every extra Island is doubled by High Tide and untapped by Snap/Frantic Search/Peregrine Drake; Impulse, Deep Analysis, and Stroke of Genius convert a flooding hand into more spells and storm count.
screw | accepted | At 15 lands this is the deck's real risk — goldfish keepable sits at the 80% floor. The 8-card cantrip suite digs toward lands, but mitigating properly would mean a 16th land, which the user's lean build deliberately omits to keep spell density; the deck accepts a higher screw rate as the price of its card-advantage engine.
decapitation | mitigation | No single card is the combo: the engine is ~14 interchangeable untappers/cantrips and 5 payoffs. If High Tide is answered, Mystical Tutor fetches a second and the deep draw suite (Deep Analysis, Impulse) rebuilds; Empty the Warrens is a non-storm-damage kill.
gas-out | mitigation | This build is specifically hardened against gas-out: Deep Analysis x2 (draw 2, flashback draw 2 = 4 cards each), Impulse x2, Obsessive Search x2, Frantic Search x2, and Stroke of Genius (draw X) form a card-positive/self-replacing shell that refuels the chain repeatedly.
raced | accepted | With only 2 maindeck interaction pieces the deck concedes board control and can lose to the cube's fastest evasive aggro (42 evasion cards) game 1; it relies on the turn-5 goldfish and boards into Spark Spray, Slice and Dice, and Ovinize. Mitigating maindeck would mean cutting the card-advantage engine that defines this build.
disruption-fizzle | mitigation | Force of Will (free counter, ~20 blue cards to pitch) pushes the kill through one piece of interaction, and the deep draw shell (Deep Analysis, Impulse, Stroke-to-self) rebuilds for a second attempt if the turn is broken; Overmaster in the sideboard adds an uncounterable enabler vs counter-heavy fields. Counter density is lower than the baseline build, so a single well-timed counter is a real risk this deck answers by rebuilding rather than out-countering.

### CARDS CONSIDERED BUT EXCLUDED

Card | Reason
---|---
Turnabout | FLEX: 'untap all your lands' is the single biggest mana burst with High Tide; cut here for the leaner card-advantage build but the top add for a higher mana ceiling.
Circular Logic | FLEX: cheap madness counter; with only 2 maindeck interaction pieces this is the natural flex-in for more combo-turn protection (and Frantic Search enables its madness).
Storm Entity | A proactive hasty alt-payoff; cut in favor of pure card advantage and the Grapeshot/Empty kills.
Lotus Blossom | Slow petal ritual — too slow for a lean turbo shell that wants to combo by turn 5.
Time Stretch | The {8}{U}{U} extra-turns finisher belongs to the draw-out control-combo variant, not a Grapeshot turbo deck.
Coal Stoker | Its {R}{R}{R} is off-color in an 85%-blue deck — it neither triggers High Tide nor pays the blue spells.
16th land | The computed target is 16; the user's 15-land build leaves goldfish keepability at the 80% floor. Adding a 16th land (e.g. a basic Island) is the obvious safety swap if early stumbles prove common.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.6   Ramp cards: 4   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.87 adj [MV 2.6 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  15.4%  prod  26.7%  gap -11.3pp  [OK]
  U  demand  84.6%  prod  86.7%  gap  -2.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each
[PASS] Rares/mythics <= 1 copy each
[PASS] Rares/mythics total <= 5: 5/5 (Stroke of Genius, Mystical Tutor, Helm of Awakening, Force of Will, Overmaster)
[PASS] Deck size 40 (25 nonland + 15 land); sideboard 10
[PASS] Colors UR; no splash
```