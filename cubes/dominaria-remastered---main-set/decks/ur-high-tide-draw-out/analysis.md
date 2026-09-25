---
deck_name: "ur-high-tide-draw-out"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-29T23:32:21Z"
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

### CREATURES (4)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Cloud of Faeries           x2  U      Engine (untap 2 lands + flyer)       C
  5  Peregrine Drake            x2  U      Engine (untap 5 lands — biggest net  C
```

### INSTANTS & SORCERIES (17)
```
CMC  Card                       Qty  Color  Role                                  Rar
  1  High Tide                  x2  U      Engine (mana multiplier)             U
  1  Mystical Tutor             x1  U      Infrastructure (find High Tide / fin R
  2  Counterspell               x2  U      Interaction (protect / control)      C
  2  Grapeshot                  x2  R      Payload/Payoff (storm backup kill)   C
  2  Impulse                    x2  U      Infrastructure (dig)                 C
  2  Snap                       x2  U      Interaction/Engine (bounce + free un C
  3  Frantic Search             x1  U      Engine (untap 3 + dig)               C
  3  Stroke of Genius           x1  U      Payload/Payoff (deck-out / draw-your R
  4  Deep Analysis              x1  U      Infrastructure (card advantage; flas C
  4  Turnabout                  x2  U      Engine/Interaction (untap all lands; U
 10  Time Stretch               x1  U      Payload/Payoff (extra-turns bury fin M
```

### OTHER SPELLS (2)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Helm of Awakening          x1  C      Engine (cost reducer)                R
  2  Lotus Blossom              x1  C      Engine (stored ritual — X mana of on R
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                              Rar
Tormod's Crypt             x1  C      GY hate — vs the cube's 45-card graveyard/reanimat U
Spark Spray                x1  R      Cheap removal — vs X/1 aggro; cycles when dead     C
Circular Logic             x2  U      Cheap counters — vs combo and fast aggro; madness  U
Man-o'-War                 x2  U      Tempo bounce + body — vs aggro to buy time to asse C
Fire // Ice                x2  RU     Removal + cantrip — vs aggro; Ice taps a blocker a U
Flametongue Kavu           x2  R      Removal + body — vs midrange/aggro creatures and e U
```

## ANALYSIS

### DECK IDENTITY
UR High Tide control-combo that wins by drawing the opponent out and taking extra turns. High Tide (Islands add an extra {U}) plus a dense untap suite (Peregrine Drake x2, Cloud of Faeries x2, Turnabout x2, Frantic Search, Snap x2) and Lotus Blossom's stored ritual — discounted by Helm of Awakening — assemble a game-ending mana pool in a single turn ONCE HIGH TIDE RESOLVES (the untappers are only mana-neutral without it). Stroke of Genius then either decks the opponent out (X = their remaining library) or draws a huge chunk of your own deck; Time Stretch buries them under two extra turns to do it again. Counterspell and the free-untap tempo suite protect the assembly, Deep Analysis and Impulse refuel, Mystical Tutor finds High Tide or a finisher, and Grapeshot is a storm backup kill from the same spell density.

### The mana math of the finish

Time Stretch costs {8}{U}{U} = 10 mana. Under one High Tide, each of the 15 Island-typed sources taps for {U}{U}, so 5 untapped Islands = 10 mana — before any untappers. Peregrine Drake (untap 5), Turnabout (untap all), Cloud of Faeries (untap 2), Snap (untap 2) and Frantic Search (untap 3) then re-tap those Islands for another doubled payout, and Helm of Awakening shaves {1} off every spell in the chain. The same pool aims Stroke of Genius: point it at the opponent for X = their library to deck them out on your turn, or at yourself to draw a huge chunk and chain into Time Stretch.

### Count-dependent verdicts (Counts Principle)

- **High Tide Island dependency**: 15 of 17 lands carry the Island type (13 basic Island + 2 Molten Tributary) and are doubled; only the 2 Mountains are not. Molten Tributary is capped at 2 (common), which is why the last two red-capable slots are basic Mountains.
- **Helm of Awakening** discounts every nonland card with a generic component — 18 of the 23 nonland cards have one — turning the untappers net-positive and dropping Time Stretch toward castability a full mana faster.
- **Payoff redundancy**: 3 independent finishers (Stroke, Time Stretch, Grapeshot) + Mystical Tutor to find one give P(finisher by turn 7) = 0.83; the engine is P = 0.99.

### High Tide is the true linchpin

Note what the untappers do *without* High Tide: nothing, mana-wise. Peregrine Drake ({4}{U}, untap 5) returns exactly what it cost; Cloud of Faeries, Snap, and Frantic Search are likewise mana-neutral. They only become mana-*positive* once High Tide is doubling each Island. So the engine's real bottleneck is High Tide itself — 2 copies plus Mystical Tutor to find one (~3 effective). If High Tide is repeatedly answered, the deck falls back on Stroke-of-Genius-to-self to rebuild a hand, but the explosive Time Stretch turn genuinely needs it.

### The honest weakness

This is a turn-7 deck with only 6 maindeck interaction cards. Against the cube's fastest evasive aggro it will sometimes die before the engine comes online — the reason the sideboard is loaded with cheap removal (Fire//Ice, Spark Spray, Man-o'-War, Flametongue Kavu) and extra counters (Circular Logic). It trades game-1 speed for the highest mana ceiling of the four builds.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:3  2:12  3:2  4:3  5:2  10:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.8: Mystical Tutor@0.8) → p=0.83 (need ≥ 0.75)
  PASS  enabler: 11 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 50%  T2 97%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Grapeshot, Turnabout
  OK        single_large_threat: Counterspell, Snap, Turnabout
  CONCEDED  noncreature_permanents: No artifact/enchantment removal in this UR slice; the plan counters key permanents on the stack or wins before they matter.
  OK        stack: Counterspell
  CONCEDED  graveyard: No maindeck graveyard hate; not relevant to executing the draw-out finish.
```
- curve PASS and goldfish PASS (keepable 86%) — no WARN flags. Assembly payoff p=0.83, enabler p=0.99 at thesis turn 7.
- Interaction (26%) sits below the control band by deliberate choice: the pool has ~11 UR interaction-capable cards, but most are aggro-facing burn that lives in the sideboard, so the maindeck spends those slots on the mana engine + card advantage (Deep Analysis, Impulse) as its second wall.
- Snap counts in both interaction and the untap engine but its untap is conditional on a legal creature target (bounce your own Cloud of Faeries/Peregrine Drake to re-trigger when the board is otherwise empty).

### FAILURE MODES

Mode | Verdict | Reasoning
---|---|---
flood | mitigation | Excess lands ARE the win condition: Stroke of Genius ({X}{2}{U}) and Time Stretch scale directly with mana, every extra Island is doubled by High Tide, and Frantic Search/Impulse convert surplus into cards while Turnabout/Peregrine Drake re-use it.
screw | accepted | 17 lands + 8 accelerants dig toward mana, but the {8}{U}{U} Time Stretch and a big Stroke are mana-hungry, so a 2-land stumble badly delays the turn-7 finish; adding more lands would cut the untappers/card-flow that assemble the finish — the deck accepts a slower clock as the price of its high-mana payoffs.
decapitation | mitigation | Win-card redundancy is real: Stroke of Genius, Time Stretch, and Grapeshot are three independent kills and Mystical Tutor fetches whichever is missing. Honest caveat (from grill): the land-untappers are mana-NEUTRAL without High Tide, so High Tide (2 copies + Mystical Tutor to find one = ~3 effective) is the true linchpin — if it is repeatedly answered the deck can still Stroke-to-self off a smaller pool to rebuild, but the explosive turn needs High Tide.
gas-out | mitigation | The finisher IS card advantage — Stroke of Genius draws your deck, Frantic Search and Impulse dig, and Time Stretch's extra turns net more draw steps; these card-positive/self-replacing effects mean the deck refuels as it executes.
raced | accepted | A turn-7 finish is slow; against the cube's fastest evasive aggro (42 evasion cards) the maindeck has only 6 interaction pieces and concedes it may lose game-1 races. It boards into Fire//Ice, Man-o'-War, Flametongue Kavu, Spark Spray, Circular Logic. Mitigating maindeck would mean cutting the engine that powers the mana-hungry finish.
disruption-fizzle | mitigation | Counterspell x2 protects the assembly turn, Snap bounces a threat, and Turnabout can tap the opponent's team to survive a swing; if the finish is countered, the deep card advantage (Stroke to self, Frantic Search, Impulse) plus Time Stretch's extra turns rebuild for another attempt. This build runs proactive counters rather than free protection (no Force of Will).

### CARDS CONSIDERED BUT EXCLUDED

Card | Reason
---|---
Storm Entity | A hasty storm beater fits the aggressive/tempo builds; the draw-out plan wins on cards/turns, not a creature clock.
Goblin package (Skirk/Siege-Gang/Pashalik) | Red board plan is the aggro build; the control-combo wins with blue card/turn advantage.
Sulfuric Vortex | A proactive damage clock that also damages us; wrong axis for a grindy deck-them-out plan.
Force of Will | FLEX (cap-locked): the pool's only FREE counter — ideal protection for the tapped-out combo turn in an 92%-blue deck — but adding it requires cutting one of the 5 rares/mythics (the cap is full). The top swap-in if you free a rare slot.
Overmaster | FLEX (cap-locked): {R} 'next instant/sorcery can't be countered' + cantrip — makes Stroke/Time Stretch uncounterable; also blocked by the 5/5 rare cap.
Fact or Fiction | FLEX (legal now): {3}{U} instant-speed bulk dig to load the go-off hand; a fine addition over a marginal engine slot if you want more selection.
Arcanis the Omnipotent | FLEX (cap-locked): {3}{U}{U}{U} repeatable draw-3 that bounces itself — a recurring High-Tide-powered refuel/threat, but a rare and blocked by the cap.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 7   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.73 adj [MV 2.83 vs 2.5, 7 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand   7.7%  prod  23.5%  gap -15.8pp  [OK]
  U  demand  92.3%  prod  88.2%  gap  +4.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each
[PASS] Rares/mythics <= 1 copy each
[PASS] Rares/mythics total <= 5: 5/5 (Stroke of Genius, Time Stretch, Lotus Blossom, Helm of Awakening, Mystical Tutor)
[PASS] Deck size 40 (23 nonland + 17 land); sideboard 10
[PASS] Colors UR; no splash
```