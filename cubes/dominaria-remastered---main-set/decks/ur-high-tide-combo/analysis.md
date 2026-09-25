---
deck_name: "ur-high-tide-combo"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-29T22:55:25Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
13x Island
2x Mountain
2x Molten Tributary    ({T}: Add {U} or {R}.) This land enters tapped.
```

### CREATURES (3)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Cloud of Faeries           x2  U      Enabler (free untap + storm)         C
  2  Storm Entity               x1  R      Payload/Payoff (alt kill / proactive U
```

### INSTANTS & SORCERIES (19)
```
CMC  Card                       Qty  Color  Role                                  Rar
  1  High Tide                  x2  U      Enabler (mana multiplier)            U
  1  Mystical Tutor             x1  U      Infrastructure (find combo piece)    R
  1  Overmaster                 x1  R      Infrastructure (uncounterable + cant R
  2  Counterspell               x2  U      Interaction (protect combo turn)     C
  2  Grapeshot                  x2  R      Payload/Payoff (primary kill)        C
  2  Impulse                    x1  U      Infrastructure (dig + storm)         C
  2  Snap                       x2  U      Enabler (free untap + storm)         C
  3  Circular Logic             x1  U      Interaction (madness counter)        U
  3  Frantic Search             x2  U      Enabler (untap + dig + storm)        C
  3  Stroke of Genius           x1  U      Payoff/refuel (deck-out finisher)    R
  4  Empty the Warrens          x2  R      Payload/Payoff (backup board kill)   C
  4  Turnabout                  x1  U      Enabler (mass untap burst)           U
  5  Force of Will              x1  U      Interaction (free protection)        M
```

### OTHER SPELLS (1)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Helm of Awakening          x1  C      Infrastructure (cost reducer)        R
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                              Rar
Tormod's Crypt             x1  C      GY hate — vs the cube's 45-card graveyard/reanimat U
Spark Spray                x2  R      Cheap removal — vs X/1 aggro, birds, tokens; cycle C
Man-o'-War                 x2  U      Tempo bounce — vs aggro and big threats; also clea C
Fire // Ice                x2  RU     Flexible removal + cantrip — vs aggro; Ice taps a  U
Flametongue Kavu           x2  R      Removal+body — vs single large threats and the 42- U
Slice and Dice             x1  R      Red sweeper (4 to each creature) — vs wide boards  U
```

## ANALYSIS

### DECK IDENTITY
UR High Tide storm combo. The engine — High Tide (doubles Island mana) plus a suite of free/cheap untappers (Snap, Cloud of Faeries, Frantic Search, Turnabout) and cost reduction from Helm of Awakening — generates a large mana surplus and storm count in a single turn, which Grapeshot converts into lethal damage. Empty the Warrens (x2) is the redundant board-based kill and Storm Entity a proactive backup clock; Stroke of Genius refuels the chain or decks the opponent out on a big-mana turn. Force of Will, Counterspell and Circular Logic protect the combo turn, while Mystical Tutor and Overmaster add consistency and push the kill past a counter.

### How the storm turn works

Under one High Tide, each of the deck's 15 Island-typed sources (13 basic Island + 2 Molten Tributary) taps for {U}{U}. The free-untap suite recycles that mana while adding to the storm count: Snap and Cloud of Faeries each untap 2 lands (net +2 mana under High Tide, +1 storm), Frantic Search untaps 3 (+3 mana, +1 storm, +filtering), and Turnabout untaps *all* Islands for the single biggest burst. Every nonland spell cast adds 1 to Grapeshot's storm count ("copy it for each spell cast before it this turn"), so a chain of 6-8 cheap spells makes one Grapeshot lethal.

### Count-dependent verdicts (Counts Principle)

- **Helm of Awakening** ("Spells cost {1} less to cast") reduces every nonland card with a generic mana component: **17 of the 23 nonland cards** qualify (all but High Tide, Mystical Tutor, Overmaster, and the two Counterspells — none of which has a generic pip). It turns the free untappers net-positive even without High Tide, and shaves a mana off every chain link. INCLUDE.
- **High Tide's Island dependency**: **15 of 17 lands** carry the Island type and are doubled; the 2 basic Mountains are the only non-doubling lands. Maximizing Island-typed sources (including the dual-typed Molten Tributary) is the single most important manabase decision.
- **Payoff redundancy**: 5 storm payoffs (Grapeshot x2, Empty the Warrens x2, Storm Entity x1) give P(see one by turn 5) = 0.80; the interchangeable engine of 12 untappers/cantrips gives P = 0.98.

### Key interaction: Snap + Cloud of Faeries

Snap ("Return target creature... Untap up to two lands") can bounce your own Cloud of Faeries to re-cast it — another ETB untap and another storm count — turning two cards into a repeatable mana-and-storm loop when High Tide is active.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:4  2:11  3:4  4:3  5:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 5 copies → p=0.80 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 11.8: Mystical Tutor@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 55%  T2 97%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Combo deck races the board; no dedicated sweeper. Grapeshot is reserved as the kill, not as removal.
  OK        single_large_threat: Counterspell, Force of Will, Snap
  CONCEDED  noncreature_permanents: No artifact/enchantment removal in this UR slice; plan is to combo off before a permanent decides the game.
  OK        stack: Counterspell, Force of Will, Circular Logic
  CONCEDED  graveyard: No maindeck graveyard hate; irrelevant to executing the storm turn.
```
- No WARN-tier structural flags: curve PASS and goldfish PASS. Payoff and enabler assembly both PASS (p=0.80 / p=0.98).

### FAILURE MODES

Mode | Verdict | Reasoning
---|---|---
flood | mitigation | Excess lands are combo fuel, not dead cards: every extra Island is doubled by High Tide and untapped by Snap/Frantic Search/Turnabout to raise the storm ceiling; Impulse, Frantic Search and Stroke of Genius convert a flooding hand into more spells.
screw | accepted | The deck keeps ~13 Islands and cheap cantrips (High Tide {U}, Overmaster {R}, Impulse {1}{U}) to dig, but a true 2-land stumble delays the turn-5 kill; adding more lands would dilute the spell density the storm chain needs, costing the deck its kill speed.
decapitation | mitigation | No single card is the combo: the engine is 11 interchangeable untappers/cantrips and 5 payoffs. If High Tide is answered, the untap-recycle chain plus Mystical Tutor (fetches a second High Tide) still assembles a storm turn, and Storm Entity offers a creature kill outside the storm math.
gas-out | mitigation | Frantic Search (draw 2), Impulse, Overmaster (draw a card) and Stroke of Genius (draw X, can target self) refuel the hand mid-chain; these are the deck's Cards net-positive/self-replacing engine that keeps spells flowing.
raced | accepted | Against the cube's fastest evasive aggro (42 evasion cards) the maindeck has only 4 counters and concedes board control; it accepts some game-1 race losses, relying on turn-5 goldfish speed and boarding into Flametongue Kavu / Slice and Dice / Spark Spray / Man-o'-War. Mitigating maindeck would mean cutting engine for removal, costing combo consistency.
disruption-fizzle | mitigation | Force of Will (free counter) and Overmaster ('the next instant or sorcery spell you cast this turn can't be countered') push the kill through a single piece of interaction; Counterspell x2 and Circular Logic protect proactively, and the Frantic Search/Impulse/Stroke card-advantage shell rebuilds for a second attempt if the turn is broken.

### CARDS CONSIDERED BUT EXCLUDED

Card | Reason
---|---
Time Stretch | {8}{U}{U} extra-turns finisher — too slow for the damage plan; belongs to the draw-out variant.
Last Chance | 'Take an extra turn... you lose the game' at that turn's end — an extra-turn enabler, not a kill; risk without a lock here.
Elvish Spirit Guide | Exile for {G} — off-color mana that can't pay UU costs and adds no storm; not a real UR accelerant.
Vexing Sphinx | Cumulative-upkeep body that discards cards — attrition durdle that fights the combo's card economy.
Gamble | Tutor with a random discard — can pitch the piece it just found; too risky as combo consistency.
Skirk Prospector / Goblin package | Sacrifice-for-red goblin engine is the resilient Empty-the-Warrens aggro build, not the spell-chain combo.
Peregrine Drake | FLEX: {4}{U} untap 5 lands = net +5 mana / +1 storm under High Tide — highest-yield untapper; cut for turn-5 goldfish speed but the top swap-in if the metagame is slower.
Obsessive Search | FLEX: {U} draw + madness {U}; mana-positive storm cantrip under High Tide, recastable off a Frantic Search discard. Strong consistency add over a Counterspell in combo-heavy fields.
Coal Stoker | FLEX: {3}{R} adds {R}{R}{R} from hand — storm count + red for Empty/Grapeshot, Snap-rebounce loop. Cut for cheaper interaction; a ritual-body option.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 3   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.81 adj [MV 2.39 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  23.1%  prod  23.5%  gap  -0.4pp  [OK]
  U  demand  76.9%  prod  88.2%  gap -11.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each
[PASS] Rares/mythics <= 1 copy each
[PASS] Rares/mythics total <= 5: 5/5 (Stroke of Genius, Mystical Tutor, Overmaster, Helm of Awakening, Force of Will)
[PASS] Deck size 40 (23 nonland + 17 land); sideboard 10
[PASS] Colors UR; no splash
```