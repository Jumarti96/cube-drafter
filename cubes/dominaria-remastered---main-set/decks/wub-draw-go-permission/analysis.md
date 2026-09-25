---
deck_name: "wub-draw-go-permission"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-07-31T03:19:35Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  1x Contaminated Aquifer    UB dual (tapped; B splash source)
  2x Idyllic Beachfront    WU dual (tapped)
  8x Island
  5x Plains
  2x Swamp
```

### CREATURES (5)

```
CMC  Card                     Qty  Color Role                       Rar
  4  Thieving Magpie          x2   U     Threat/Engine              U
  4  Voice of All             x1   W     Threat/Payoff              U
  5  Serra Angel              x1   W     Threat/Payoff              U
  6  Arcanis the Omnipotent   x1   U     Engine/Payoff              R
```

### INSTANTS & SORCERIES (15)

```
CMC  Card                     Qty  Color Role                       Rar
  1  Swords to Plowshares     x2   W     Interaction                U
  2  Counterspell             x2   U     Interaction                C
  2  Terror                   x2   B     Interaction                C
  3  Absorb                   x1   UW    Interaction                R
  3  Circular Logic           x2   U     Interaction                U
  4  Deep Analysis            x2   U     Engine                     C
  4  Fact or Fiction          x2   U     Engine                     U
  4  Wrath of God             x1   W     Interaction                R
  5  Force of Will            x1   U     Interaction                M
```

### OTHER SPELLS (2)

```
CMC  Card                     Qty  Color Role                       Rar
  1  Mystic Remora            x1   U     Engine                     R
  2  Mind Stone               x1   C     Infrastructure             C
```

## SIDEBOARD (10)

```
Card                     Qty  Color Role / When to board in                              Rar
Tormod's Crypt           x2   C     graveyard hate: vs graveyard decks (18.75% of the cu U
Radiant's Judgment       x2   W     anti-fatty removal, cycles when dead: vs decks with  C
Chainer's Edict          x1   B     edict vs hexproof/protection: vs hexproof/protection U
Damping Sphere           x1   C     anti big-mana / storm: vs ramp / big-mana / storm-is U
Renewed Faith            x1   W     lifegain + cycle vs aggro/burn: vs aggro/burn — 6 li C
Pacifism                 x1   W     cheap creature lockdown vs aggro: vs creature-dense  C
Serra Angel              x1   W     Threat/Payoff                                        U
Confiscate               x1   U     steal a resolved problem permanent (covers our artif U
```

## ANALYSIS

### DECK IDENTITY

White-Blue draw-go permission control splashing black. Six counters (Counterspell, Circular Logic, Absorb, Force of Will) stop the opponent's threats on the stack while premium removal (Swords to Plowshares, Terror, Wrath of God) cleans up what resolves. A deep card-advantage engine (Mystic Remora, Fact or Fiction, Deep Analysis, Arcanis the Omnipotent, Mind Stone) buries the opponent in resources, and a small, entirely evasive finisher package (Thieving Magpie, Serra Angel, Voice of All, plus Arcanis's body) closes once they are out of gas.

- PERMISSION AS A COUNT: 6 counters (Counterspell x2, Circular Logic x2, Absorb, Force of Will) plus 5 clean answers (Swords to Plowshares x2, Terror x2, Wrath of God) interact with 11 of 22 nonland cards. Caveat per the Counts Principle: only 4 counters are unconditional early (Counterspell x2, Absorb, Force of Will); Circular Logic scales with the graveyard and is a strong counter only once Fact or Fiction / Deep Analysis have filled the yard.

- MYSTIC REMORA IS THE DRAW-GO ENGINE: '{U}, Cumulative upkeep {1}: whenever an opponent casts a noncreature spell, draw a card unless they pay {4}.' A turn-1 play that either draws you cards or taxes the opponent's spells for several turns — it also partially covers the deck's inability to destroy a resolved artifact/enchantment by drawing off (or taxing) the noncreature spell before it lands.

- CARD ADVANTAGE = INEVITABILITY: Mystic Remora, Fact or Fiction x2, Deep Analysis x2 (four cards across flashback) and Arcanis (draw three/turn) bury the opponent; against another fair deck the counter + card-advantage engine simply never runs out of answers first.

- ARCANIS IS ENGINE AND CLOCK: '{T}: Draw three cards' refuels the permission suite, '{2}{U}{U}: return to hand' dodges sorcery-speed removal and sweepers, and the 3/4 body pressures life — one card advancing all three axes; it is why the base is blue-heavy (triple-U).

- THIN, EVASIVE CLOCK BY DESIGN: only Thieving Magpie x2, Serra Angel, Voice of All (+ Arcanis) close, but all fly and the first two draw/dodge removal, so the deck needs few threats — the counters ensure the opponent can't punish the low creature count.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:3  2:5  3:3  4:8  5:2  6:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  permission: 6 copies → p=0.88 (need ≥ 0.75)
  PASS  card_engine: 7 copies → p=0.92 (need ≥ 0.75)
  PASS  finisher: 5 copies → p=0.82 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 76% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 42%  T2 81%  T3 94%
Coverage:  [PASS]
  OK        wide_boards: Wrath of God, Counterspell, Circular Logic
  OK        single_large_threat: Swords to Plowshares, Terror, Wrath of God, Counterspell
  OK        noncreature_permanents: Counterspell, Circular Logic, Absorb, Force of Will
  OK        stack: Counterspell, Circular Logic, Absorb, Force of Will
  CONCEDED  graveyard: No maindeck graveyard hate; held for sideboard (Tormod's Crypt), a dead draw vs non-graveyard decks.
```
- goldfish WARN (keepable 76% vs 80%): inherent to a high-curve draw-go (avg MV 3.18, ten cards at MV4+); the deck mulligans to a functional reactive hand and 94% of kept hands have 3 lands by turn 3. Mystic Remora and Swords give turn-1 action. Accepted.
- interaction 50% / engine 32% / threats 18% exceed the control bands: accepted because the counter wall IS the identity, card-advantage inevitability IS the win route, and the 'threats' (Magpie x2, Arcanis) double as card engines so real dead-weight threat count is ~2 (Serra, Voice).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Mind Stone (sac for a card), Mystic Remora, Fact or Fiction, Deep Analysis (flashback), Arcanis (draw three) and Thieving Magpie all convert surplus mana into cards; 18 is the computed target. |
| screw | mitigation | Cheap early plays hold a stumbling hand together — Mystic Remora ({U}) and Swords to Plowshares ({W}) on turn 1, Counterspell ({U}{U}) and Mind Stone ({2}) on turn 2 — and 94% of hands have 3 lands by turn 3. |
| decapitation | mitigation | No single load-bearing card: permission is redundant (6 counters), the card engine is redundant (Mystic Remora, Fact or Fiction x2, Deep Analysis x2, Arcanis, Mind Stone) and the finishers are redundant (Thieving Magpie x2, Serra Angel, Voice of All). Answering any one leaves the rest. |
| gas-out | mitigation | The deepest refuel of the three decks — Mystic Remora and Arcanis (draw three/turn) plus Deep Analysis (four cards across two casts), Fact or Fiction x2, Thieving Magpie and Mind Stone. A draw-go deck runs the opponent out of gas first. |
| raced | mitigation | Swords to Plowshares (gain life = the creature's power), Absorb (gain 3), Wrath of God (reset), the counters (stop the threat before it lands) and Serra Angel (a 4/4 vigilance blocker) stabilize; SB adds Renewed Faith and Pacifism. The high curve makes a fast aggro start the deck's weakest matchup, which the SB is built to shore. |
| disruption-fizzle | mitigation | A reactive deck has no all-in turn to fizzle; in a counter war Force of Will (free) and six total counters win the on-the-stack fight, and Arcanis / Mystic Remora rebuy resources to out-last a single disruptive spell. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Icy Manipulator | A repeatable tapper is a proactive tempo tool that belongs to the Opposition tap-lock (Deck A); a reactive draw-go would rather hold up counters than tap out. Cut in FILL. |
| Maze of Ith | Produces no mana — unaffordable in a base this pip-hungry (triple-U Arcanis, {U}{U} counters, {W}{W} Wrath/Serra, plus a B splash). |
| Impulse | Instant-speed dig (look at top four, take one) that would smooth the goldfish keepability; on-color, but the card-advantage slots are already deep (Fact or Fiction x2, Deep Analysis x2, Arcanis, Remora). |
| Frantic Search | Free filtering that fuels the graveyard for Circular Logic and Deep Analysis flashback; a fine flex, but the deck wanted counters/removal density over pure card selection. |
| Snap / Man-o'-War | Free/cheap tempo bounce that nets counter mana and shores the raced matchup; kept as sideboard-adjacent options rather than maindeck to preserve permission density. |
| Stroke of Genius | Rare card-advantage mana sink / alternate finisher, but it competed with Mystic Remora for the single open rare slot and Remora is the stronger early-game engine. |
| Chainer's Edict | Good edict removal but a 3rd maindeck B card strains the light splash's untapped mana; moved to the sideboard. |
| Radiant's Judgment | Narrow (power 4+); moved to the sideboard as anti-fatty tech, cycling when dead. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.18   Ramp cards: 1   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.57 adj [MV 3.18 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand  71.0%  prod  61.1%  gap  +9.9pp  [OK]
  W  demand  29.0%  prod  38.9%  gap  -9.9pp  [OK]

Splash Check: [PASS]
  B  4 card(s), max CMC 2  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons/uncommons <= 2 copies each:        PASS
Rares/mythics <= 1 copy each:              PASS
Rares/mythics total <= 5 (main+SB):        PASS (5/5): Absorb, Arcanis the Omnipotent, Force of Will, Mystic Remora, Wrath of God
All cards from cube pool:                  PASS
Colour usable in W/U+B: PASS
Deck size 40 + sideboard 10:               PASS
```