---
deck_name: "ur-storm-entity-tempo"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-29T23:32:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
9x Island
7x Mountain
```

### CREATURES (7)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Cloud of Faeries           x1  U      Engine (flyer + free untap + spell c C
  2  Storm Entity               x2  R      Payload/Payoff (hasty spell-count be U
  3  Man-o'-War                 x1  U      Interaction/tempo (bounce + body)    C
  3  Suq'Ata Lancer             x2  R      Threat (haste + flanking clock)      C
  4  Thieving Magpie            x1  U      Threat/engine (evasive body that dra U
```

### INSTANTS & SORCERIES (17)
```
CMC  Card                       Qty  Color  Role                                  Rar
  1  Chain Lightning            x2  R      Interaction/reach (3 damage, storm c C
  1  Mystical Tutor             x1  U      Infrastructure (find Grapeshot / a c R
  1  Obsessive Search           x1  U      Engine (cantrip; madness)            C
  1  Overmaster                 x1  R      Engine (uncounterable + cantrip)     R
  1  Spark Spray                x2  R      Interaction (1 damage; cycles)       C
  2  Counterspell               x1  U      Interaction (hard counter)           C
  2  Grapeshot                  x1  R      Payload/Payoff (storm reach)         C
  2  Impulse                    x2  U      Engine (dig + spell count)           C
  2  Snap                       x1  U      Interaction/enabler (free bounce + u C
  3  Circular Logic             x2  U      Interaction (tempo counter; madness) U
  3  Frantic Search             x1  U      Engine (dig + free untap)            C
  4  Fire // Ice                x2  RU     Interaction (removal + cantrip)      U
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                              Rar
Tormod's Crypt             x1  C      GY hate — vs the cube's 45-card graveyard/reanimat U
Grim Lavamancer            x1  R      Repeatable reach/removal — vs aggro and X/1 boards R
Man-o'-War                 x1  U      Extra tempo bounce — vs aggro and big threats (2nd C
Aven Fisher                x2  U      Flyer blocker that replaces itself — vs aggro and  C
Flametongue Kavu           x2  R      Removal + body — vs single large threats and the 4 U
Solar Blast                x2  R      Flexible 3-damage removal, cycles — vs midrange cr C
Slice and Dice             x1  R      Red sweeper — vs faster go-wide/token aggro        U
```

## ANALYSIS

### DECK IDENTITY
UR Storm Entity tempo. A dense, cheap interaction suite — hard counters (Counterspell, Circular Logic), burn-as-removal (Chain Lightning, Spark Spray, Fire//Ice), and bounce (Snap, Man-o'-War) — controls the board while those same cheap spells fuel the payoff: Storm Entity enters with a +1/+1 counter for each other spell cast that turn, landing as a hasty attacker (a realistic turn-4 lead-in of 2-3 spells makes a 3/3-4/4). Suq'Ata Lancer x2 (haste, flanking) and Thieving Magpie (evasive, draws on hit) are the supporting bodies, Grapeshot is scaling storm reach, and burn (Chain Lightning, Spark Spray, Fire//Ice) plus Grim Lavamancer from the board provide ~14 points of board-independent reach. Card flow (Impulse, Obsessive Search, Frantic Search, Cloud of Faeries, Thieving Magpie) plus Overmaster and Mystical Tutor keep the clock fed. The plan is lock-and-clock: deny the opponent's development while a spell-count-scaled threat and burn reach close around turn 4-5.

### Interaction that doubles as fuel

The 12 cheap interaction spells aren't a control shell bolted onto a creature — they ARE the payoff's fuel. Every Counterspell, Chain Lightning, Spark Spray, Fire//Ice, Snap, or Man-o'-War cast before Storm Entity in a turn adds a +1/+1 counter to it ("enters with a +1/+1 counter for each other spell cast this turn"). A representative turn-4: bounce/burn something with two 1-mana spells, then drop Storm Entity as a 3/3 haste that attacks immediately — while the board is already controlled. Grapeshot scales off the exact same spell count as reach.

### Count-dependent verdicts (Counts Principle)

- **Storm Entity size**: it grows by 1 for each other spell cast that turn. With ~10 one- and two-mana spells in the deck (Chain Lightning, Spark Spray, Snap, Impulse, Obsessive Search, Circular Logic, Fire//Ice…), a realistic 2-spell lead-in makes a 3/3 haste on turn 4, more on a bigger turn — and it costs only {1}{R}, so the spells that pump it are cast the same turn.
- **Grapeshot reach**: copies once per prior spell this turn; in a 24-nonland deck built on cheap spells, a mid-game turn easily chains 3-4 before Grapeshot for 4-5 to the face.
- **Madness outlets**: Obsessive Search and Circular Logic both have madness ({U}); Frantic Search ("discard two cards") is the discard outlet that enables casting them for their madness cost — 1 outlet feeding 2 madness cards.

### Why High Tide was cut

The shape judge flagged High Tide as this build's softest inclusion: a one-shot blue-mana burst that needs Islands tapped and does little in a fair tempo game. It was replaced with a second Suq'Ata Lancer — a {2}{R} haste flanker that adds a real body to the clock and lifts the threat count from 4 to 5, directly answering the "too threat-light" concern.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  1:7  2:8  3:6  4:3
Assembly (thesis turn 4, 11 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.7: Mystical Tutor@0.7) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 12 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 74%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Grapeshot, Spark Spray, Fire // Ice
  OK        single_large_threat: Counterspell, Snap, Man-o'-War, Chain Lightning
  CONCEDED  noncreature_permanents: No artifact/enchantment removal in this UR slice; the plan counters key permanents on the stack or races them.
  OK        stack: Counterspell, Circular Logic
  CONCEDED  graveyard: No maindeck graveyard hate; the tempo clock races graveyard decks rather than answering them.
```
- curve PASS and goldfish PASS (keepable 84%, T1 play 74%) — no WARN flags. Assembly payoff p=0.82, enabler p=0.98 at thesis turn 4.
- Interaction at 46% exceeds the tempo band by design — the winning lens was interaction-dense, and the burn (Chain Lightning/Spark Spray/Fire//Ice) doubles as reach and Storm Entity fuel, so it is not dead reactive weight. Madness (Circular Logic, Obsessive Search) has one discard outlet (Frantic Search) — treated as upside, not a fed engine, since both cards are fully functional at normal cost.

### FAILURE MODES

Mode | Verdict | Reasoning
---|---|---
flood | mitigation | Flood is mild at 16 lands; excess lands let the deck hold up Counterspell/Circular Logic while deploying, and Impulse/Frantic Search/Fire//Ice's Ice mode cash surplus into cards; Grapeshot and burn stay relevant top-decks.
screw | accepted | 16 lands, a low 2.12 avg MV, and seven one-drops keep 2-land hands active; a true 1-land hand stumbles, but adding lands would dilute the cheap-spell density that both fuels Storm Entity and powers the counter/burn suite.
decapitation | mitigation | No single key card: Storm Entity x2 and Suq'Ata Lancer x2 are four threats plus Grapeshot; if Storm Entity is answered, the flanking Lancers and burn still clock, and Counterspell x2 protect the key threat.
gas-out | mitigation | Card flow keeps the clock fed: Impulse x2, Obsessive Search (madness recast), Frantic Search (draw 2), Cloud of Faeries (cycling), Overmaster ('Draw a card'), and Mystical Tutor (finds the next threat/answer) — self-replacing/digging effects that prevent the empty-hand collapse.
raced | accepted | As a tempo deck it usually sets the clock, but a dedicated combo (e.g. the High Tide draw-out deck) can go over the top; it accepts this and relies on Counterspell x2 + Circular Logic x2 to disrupt the combo turn plus a fast Storm Entity clock. Adding more reactive cards would over-commit at the cost of the proactive threats.
disruption-fizzle | mitigation | The clock is not one fragile turn: Storm Entity can be cast smaller and still attack, Suq'Ata Lancer and Grapeshot provide alternate damage, and Overmaster ('the next instant or sorcery spell you cast this turn can't be countered') pushes a key Grapeshot/burn past a counter; Snap/Man-o'-War re-buy tempo if a threat is answered.

### CARDS CONSIDERED BUT EXCLUDED

Card | Reason
---|---
Time Stretch / Last Chance / Stroke of Genius | Big-mana / extra-turn finishers belong to the control-combo draw-out build; a tempo clock wins with bodies + burn, not durdle finishers.
Peregrine Drake / Turnabout | Blue mana bursts serve the combo builds; a tempo deck wants proactive threats, not a 4-5 mana untapper.
Force of Will | Free counter is best in a combo shell; a tempo deck would rather deploy a threat than pitch a card, and it competes for the rare cap.
Vexing Sphinx | FLEX: {1}{U}{U} flyer + cumulative-upkeep discard (the missing madness outlet for Circular Logic/Obsessive Search) + death-draw; an evasive body that also enables the madness cards.
Dragon Whelp | FLEX: {2}{R}{R} flyer with '{R}: +1/+0' — a second evasive firebreather clock and a flood mana-sink; a swap-in when more bodies are wanted over interaction.
Quicksilver Dagger | FLEX: on-color {1}{U}{R} aura granting 'tap: 1 damage to a player, draw a card' — repeatable reach + card advantage on a Storm Entity or Suq'Ata Lancer.
Sulfuric Vortex | FLEX: {1}{R}{R} 2-damage-per-upkeep clock that also shuts off the cube's 10 lifegain cards; board-independent reach, but a rare that competes for the cap and damages you too.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.21   Ramp cards: 0   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.05 adj [MV 2.21 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  42.9%  prod  43.8%  gap  -0.9pp  [OK]
  U  demand  57.1%  prod  56.2%  gap  +0.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each
[PASS] Rares/mythics <= 1 copy each
[PASS] Rares/mythics total <= 5: 3/5 (Overmaster, Mystical Tutor, Grim Lavamancer)
[PASS] Deck size 40 (24 nonland + 16 land); sideboard 10
[PASS] Colors UR; no splash
```