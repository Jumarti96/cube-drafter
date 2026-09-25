---
deck_name: "w-lifegain-endurance"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "W"
format: "40-card"
built_at: "2026-07-31T02:24:13Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  18x Plains                 basic land
```

### CREATURES (11)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Icatian Javelineers           x1  W      Removal / pinger              C
  1  Savannah Lions                x1  W      Aggro 1-drop / aura carrier   C
  2  Cleric of the Forward Order   x2  W      Lifegain body                 C
  2  Whitemane Lion                x1  W      Flash blocker / ETB reuse     C
  4  Voice of All                  x1  W      Evasive protected threat      U
  5  Lyra Dawnbringer              x1  W      Lifelink finisher + anthem    M
  5  Phantom Flock                 x1  W      Resilient flyer               C
  5  Serra Angel                   x1  W      Evasive beater (Angel)        U
  6  Kjeldoran Gargoyle            x1  W      Lifegain flyer                C
  7  Serra Avatar                  x1  W      Life-scaled closer            M
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Enlightened Tutor             x1  W      Toolbox consistency           R
  1  Swords to Plowshares          x1  W      Premium removal               U
  2  Momentary Blink               x1  W      Protection / ETB reuse        C
  3  Radiant's Judgment            x1  W      Removal / cycle               C
  3  Renewed Faith                 x1  W      Lifegain / cantrip            C
  4  Battle Screech                x1  W      Go-wide flyers                U
  4  Congregate                    x1  W      Mass lifegain                 U
```

### OTHER SPELLS (4)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Spirit Link                   x1  W      Lifegain aura                 C
  2  Pacifism                      x1  W      Creature lock                 C
  3  Griffin Guide                 x1  W      Evasive aura + token          U
  4  Test of Endurance             x1  W      Alt-win payoff                M
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                              Rar
Tormod's Crypt                x2  C      vs graveyard decks (biggest cube theme)             U
Swords to Plowshares          x1  W      extra premium removal                               U
Pacifism                      x1  W      extra creature lock                                 C
Remedy                        x1  W      vs burn / aggro reach                               C
Nomad Decoy                   x1  W      repeatable tapper vs evasive/aggressive creatures   C
Orim's Thunder                x2  W      vs artifacts & enchantments                         C
Icy Manipulator               x1  C      tap down a key threat or blocker                    U
Wrath of God                  x1  W      vs go-wide/aggro swarm                              R
```

## ANALYSIS

### DECK IDENTITY
Mono-white lifegain midrange. A proactive white board of evasive and lifelink creatures gains life to arm two win conditions: Serra Avatar (power/toughness equal to your life total) as a life-scaled closer, and Test of Endurance as a long-game alternate-win at 50 life. Removal, cycling and Enlightened Tutor knit the plan together and keep it consistent.

**Congregate is the biggest single life spike.** Its text — "Target player gains 2 life for each creature on the battlefield" — counts every creature in play, both players'. On a developed board of 5-8 creatures (the deck runs 11 creatures plus Battle Screech and Griffin Guide tokens) it gains 10-16 life in one card, the largest jump toward Test of Endurance's 50.

**Serra Avatar scales with the same engine that feeds Test of Endurance.** At 30 life it is a 30/30; the lifegain suite that inches toward 50 simultaneously grows the Avatar into a two-swing kill. Its shuffle-on-death clause dodges mill and graveyard hate — but note exile (e.g. Swords to Plowshares) still answers it permanently, so it is resilient, not unkillable.

**Realistic win path is beatdown-first, Test-second.** Reaching literally 50 life is slow; more games are won by Serra Avatar / Lyra / evasive lifelinkers closing while lifegain buys the time, with Test of Endurance as the inevitability that punishes decks trying to grind. Enlightened Tutor can fetch Test when the life race is already won.

**Lyra's anthem is live but not the spine.** She buffs 2 other Angels here (Serra Angel, Voice of All) and gives the whole Angel package lifelink; the deck is a lifegain deck that happens to run three Angels, not an Angel tribal deck.

**Battle Screech's flashback is fully mono-white payable.** With 11 white creatures in the mainboard, tapping three untapped white creatures to recast it for four total flyers is routinely achievable — and each Bird both pressures in the air and adds to the Congregate multiplier.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:5  2:5  3:3  4:4  5:3  6:1  7:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 8 copies → p=0.96 (need ≥ 0.75)
  PASS  enabler: 6 copies → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 67%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper; stabilize behind lifegain (Congregate, Spirit Link, Lyra lifelink) and race with evasion — Wrath of God boarded in vs go-wide.
  OK        single_large_threat: Swords to Plowshares, Pacifism, Radiant's Judgment, Lyra Dawnbringer, Icatian Javelineers
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment removal; Orim's Thunder available from the sideboard.
  CONCEDED  stack: White has no countermagic in this pool; interaction resolves on the battlefield via removal.
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt available from the sideboard.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Renewed Faith and Radiant's Judgment cycle excess lands into fresh cards; Serra Avatar (7), Kjeldoran Gargoyle (6) and Congregate are top-end mana sinks; Griffin Guide/Improvised-style auras turn spare mana into board. |
| screw | mitigation | Five 1-drops (Savannah Lions, Icatian Javelineers, Spirit Link, Swords, Enlightened Tutor) plus five 2-drops keep 2-land hands active; Renewed Faith/Radiant's Judgment cycle toward the third land. Goldfish keepable 87%, 3-lands-by-T3 94%. |
| decapitation | mitigation | No single key card: the win is spread across Test of Endurance, Serra Avatar (shuffles back on death/mill/graveyard-hate — though exile such as Swords to Plowshares still answers it permanently), and Lyra; answering any one leaves the others, and Enlightened Tutor rebuilds toward Test. |
| gas-out | mitigation | Cycling (Renewed Faith, Radiant's Judgment) and Battle Screech's flashback are self-replacing/recursive refuels; Serra Avatar reshuffles to keep a threat live. Card advantage is deliberately modest — the plan converts resolved threats + lifegain into inevitability rather than raw draw. |
| raced | mitigation | Lifelink (Lyra, Spirit Link, Kjeldoran Gargoyle) plus Congregate and Renewed Faith out-stabilize fast clocks; Swords/Pacifism/Radiant's Judgment pick off key attackers; Wrath of God boards in vs the widest aggro. |
| disruption-fizzle | mitigation | The plan is incremental, not one fragile turn — a countered Congregate or removed lifelinker does not end it; Momentary Blink protects a key creature from targeted removal and re-triggers Cleric. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Phantom Nishoba | GW 7/7 lifelink-shield fits Lifegain perfectly but requires a green pip — off the Mono-White identity; available as a 1-card splash if the path changes. |
| Absorb | UW counter + gain 3 — needs UU, off mono-white identity. |
| Vigilant Sentry | Threshold payoff needs 7+ cards in graveyard; mono-white has no self-mill to reach threshold reliably. |
| Mystic Zealot | Threshold flyer — same graveyard-count problem; base 2/4 is a slow do-nothing. |
| Glory | Graveyard-activated protection; strong but a rare we cannot afford under the 5-rare cap, and better as a niche SB tech. |
| Lieutenant Kirtar | Good flyer/removal but competes for the tight rare budget against Enlightened Tutor and Wrath. |
| Windborn Muse | Taxing flyer is defensive value but a rare that does not advance the lifegain plan. |
| Sevinne's Reclamation | Recurs a permanent MV≤3 (e.g. Spirit Link, Test of Endurance) but a rare outside the budget; SB consideration. |
| Mesa Enchantress | Draws on each enchantment cast, but only 4 enchantments in the list (Spirit Link, Pacifism, Griffin Guide, Test of Endurance); a fragile 0/2 — Momentary Blink's payoff protection was kept over it. Best card-advantage upgrade if the enchantment count grows. |
| Windborn Muse | Rare 2/3 flyer that taxes attackers {2} each — excellent time-buyer for the 50-life plan, but the 5-rare cap is saturated (would require cutting Enlightened Tutor). |
| Improvised Armor | Aura +2/+5 that cycles — strong lifelink amplifier on Lyra/Kjeldoran, cut to hit the 18/22 land-to-spell target; first swap-in if the curve is lowered. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.09   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.79 adj [MV 3.09 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_max2: PASS
rares_mythics_max1: PASS
rares_mythics_total_max5: 5/5 PASS
mono_white: PASS
```
