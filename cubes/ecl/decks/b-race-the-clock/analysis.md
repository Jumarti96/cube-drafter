---
deck_name: "b-race-the-clock"
cube_id: "ecl"
cube_slug: "ecl"
colors: "B"
format: "40-card"
built_at: "2026-08-12T03:46:32Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x17  Swamp
```

### CREATURES (16)

```
CMC  Card                     Qty   Color  Role                                                                                                                                                                                                                                                                                                                         Rar
  1  Bile-Vial Boggart        x2    B      threat                                                                                                                                                                                                                                                                                                                       C
  2  Creakwood Safewright     x2    B      threat                                                                                                                                                                                                                                                                                                                       U
  3  Chaos Spewer             x2    BR     threat                                                                                                                                                                                                                                                                                                                       C
  3  Eclipsed Elf             x2    BG     threat                                                                                                                                                                                                                                                                                                                       U
  3  Retched Wretch           x2    B      threat                                                                                                                                                                                                                                                                                                                       U
  3  Shadow Urchin            x1    BR     threat                                                                                                                                                                                                                                                                                                                       R
  3  Voracious Tome-Skimmer   x1    BU     threat                                                                                                                                                                                                                                                                                                                       U
  4  Dawnhand Eulogist        x2    B      threat                                                                                                                                                                                                                                                                                                                       C
  4  Dream Seizer             x2    B      threat                                                                                                                                                                                                                                                                                                                       C
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                     Qty   Color  Role                                                                                                                                                                                                                                                                                                                         Rar
  1  Requiting Hex            x2    B      interaction                                                                                                                                                                                                                                                                                                                  U
  2  Bogslither's Embrace     x2    B      interaction                                                                                                                                                                                                                                                                                                                  C
  2  Nameless Inversion       x2    B      interaction                                                                                                                                                                                                                                                                                                                  U
```

### OTHER SPELLS (1)

```
CMC  Card                     Qty   Color  Role                                                                                                                                                                                                                                                                                                                         Rar
  3  Mornsong Aria            x1    B      engine                                                                                                                                                                                                                                                                                                                       R
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                                                                                                                                                                                                                                                                                      Rar
Dawnhand Dissident       x1    B      Vs the cube's 39 graveyard-interaction cards; '{T}, Blight 2: Exile target card from a graveyard' is repeatable on a 1-mana body.                                                                                                                                                                                            R
Auntie's Sentence        x1    B      Vs slower decks, strip their best nonland permanent; vs x/2 evasive creatures, use the -2/-2 mode.                                                                                                                                                                                                                           C
Mischievous Sneakling    x2    BU     Vs faster aggro; Flash lets a 2/2 ambush an attacker without costing a deployment turn.                                                                                                                                                                                                                                      C
Blight Rot               x2    B      Vs the cube's 41 evasion cards; 'Put four -1/-1 counters on target creature' at instant speed kills any flier with toughness 4 or less.                                                                                                                                                                                      C
Darkness Descends        x2    B      Vs token and go-wide decks (~40 token-generation cards in the cube); 'Put two -1/-1 counters on each creature' is the only mass creature effect in the pool castable off Swamps. Asymmetric here because Retched Wretch returns through it: 'if it had a -1/-1 counter on it, return it to the battlefield'.                 U
Perfect Intimidation     x1    B      Vs control and combo; 'Target opponent exiles two cards from their hand' is permanent card advantage once Mornsong Aria has shut off their draw. Second mode 'Remove all counters from target creature' also un-shrinks my own Creakwood Safewright to a 5/5.                                                                U
Rooftop Percher          x1    C      Vs reanimator/flashback decks; 'exile up to two target cards from graveyards' plus a 3/3 flier that fits the evasion plan. Kept over the Challenger's proposed cut because Dawnhand Dissident and this are the ONLY two graveyard answers castable off Swamps in the entire 282-card pool, against a 39-card threat class.   C
```

## ANALYSIS

### DECK IDENTITY

Mono-black aggro built around Mornsong Aria as a conditional closer rather than a lock. The bulk of the damage comes from above-rate and evasive black bodies - Chaos Spewer (5/4 for three), Retched Wretch (4/2 for three), and Dream Seizer, Voracious Tome-Skimmer and Dawnhand Eulogist in the air and through menace. Aria is cast only once the board is ahead, at which point its symmetric 'that player loses 3 life' clock kills the opponent several turns before it kills me, its per-turn tutor upgrades every remaining draw step into a chosen card, and its 'Players can't draw cards or gain life' clause blanks both the opponent's card draw and any attempt to stabilise on life. No card in the deck DEPENDS on drawing or gaining life, and zero cards contain the words 'draw a card' - but the claim is stated precisely: four copies carry a blanked gain-life rider (Requiting Hex x2 'you gain 2 life', Dawnhand Eulogist x2 'and you gain 2 life') plus Rooftop Percher in the sideboard, and all of them still perform their main function. Consequently Requiting Hex's optional blight is never paid, because the only thing that cost buys is the life.

### WHAT MORNSONG ARIA ACTUALLY DOES

The archetype brief calls this "Draw-Denial Stax," but the oracle text does not support that reading, and the deck is built on the reading it does support:

> "Players can't draw cards or gain life. At the beginning of each player's draw step, that player loses 3 life, searches their library for a card, puts it into their hand, then shuffles."

Both players still receive a card every draw step — a **tutored** one. That is card *quality* going **up**, not card flow going down. Aria's three real effects are:

1. A **symmetric** 3-life-per-turn clock. It kills its own controller on exactly the same schedule.
2. Lifegain switched off for everyone, so nobody stabilises out of the race.
3. Every card-draw spell in the opponent's deck becomes a blank.

Roughly seven draw steps kills an untouched player, so Aria imposes a shot clock on the deck that plays it. This build's entire answer to that is to be the aggressor: 16 of 23 nonland cards are threats, the goldfish turn is 6, and Aria is a card you *choose* when to cast. Behind on the race, you simply never deploy it.

### THE ANCHOR IS NEAR-UNANSWERABLE HERE

The cube contains exactly **four** enchantment answers across all 277 cards — Keep Out, Pyrrhic Strike, Unforgiving Aim, Wistfulness — and every one of them is G, UG or W. An opponent in black, red or blue cannot remove Mornsong Aria at all. This is unusual and it is the strongest structural argument for building around this card in this environment specifically.

### CARDS THAT ARIA TURNS OFF — AND THE ONES IT DOESN'T

This is the discipline the deck is built around, and it drove more cuts than any other consideration.

**Blanked by your own anchor** — every one of these was excluded on this basis: Blighted Blackthorn and Moonglove Extractor ("you draw a card"), Voracious Tome-Skimmer's *ability* (kept for the flying body only, never for the draw), Puca's Eye, and Scarblade Scout's lifelink.

**Still fully functional**, because none of it is drawing:

| Card | Text | Why it survives Aria |
|---|---|---|
| Shadow Urchin | "exile that many cards from the top of your library. Until your next end step, you may play those cards" | Impulse access, not a draw |
| Eclipsed Elf | "look at the top four cards... put it into your hand" | Selection, not a draw |
| Mornsong Aria | "searches their library for a card" | Tutoring, not a draw |
| Dawnhand Dissident (SB) | "Surveil 1" | Not a draw |

Four of the 23 nonland cards refuel through the lock. That is the deck's whole answer to gassing out, and it is why the list contains zero copies of the word "draw a card."

Note one residual: **Requiting Hex** and **Dawnhand Eulogist** both carry a "you gain N life" rider that Aria blanks. Neither depends on it — Requiting Hex still destroys, Eulogist still drains the opponent for 2 — but the practical consequence is that Requiting Hex's optional blight is **never paid**, because the life is the only thing that cost buys.

### THE BLIGHT ECONOMY

"Blight N" is a cost paid by putting N -1/-1 counters on **your own** creatures, and this deck pays it constantly. Getting the routing right matters more than it looks:

| Demand | Source | Where the counters go |
|---|---|---|
| Blight 2 (unless you pay {2}) | Chaos Spewer x2 | Retched Wretch first — it *wants* the counter; otherwise onto Chaos Spewer itself (5/4 to 3/2) |
| Blight 1 (unless you pay {3}) | Bogslither's Embrace x2 | Bile-Vial Boggart, or any 3-toughness body |
| Blight 1, mandatory on attack | Shadow Urchin x1 | Bile-Vial Boggart — its death then puts a counter on *their* creature and fuels Urchin's own exile trigger |
| Blight 1, optional | Dream Seizer x2 | Only when the discard is worth it |

**14 of the 16 threat copies absorb a blight 1. Only 7 of 16 handle a blight 2 without net loss** — Chaos Spewer x2, Shadow Urchin, Dawnhand Eulogist x2, plus Retched Wretch x2 which dies and returns.

Two hard routing rules: **never blight Creakwood Safewright** (it enters as a 2/2 and its entire text is *removing* counters, so blight 2 kills it outright), and Bile-Vial Boggart dying to a blight is the intended outcome, not a mistake.

The standout interaction is **Chaos Spewer plus Retched Wretch**. Spewer's blight 2 onto a 4/2 Wretch kills it — and "When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield" brings it straight back as a fresh 4/2. The cost is refunded in full, and you get a 5/4 on turn three for three mana.

### ELF DENSITY

Creakwood Safewright and Dawnhand Eulogist both key off "if there is an Elf card in your graveyard." Counting against this exact list: Creakwood Safewright x2, Eclipsed Elf x2, Dawnhand Eulogist x2, and — the non-obvious one — **Nameless Inversion x2**, a Kindred Instant with Changeling, which is therefore an Elf card the moment it hits the yard. **8 of 23 nonland cards.** Dawnhand Eulogist's own "mill three cards" also turns itself on a large fraction of the time before any of that is counted.

### PLAY PATTERN

Turn 1 Bile-Vial Boggart. Turn 2 Creakwood Safewright. Turn 3 Chaos Spewer, blighting the Wretch if one is down. Turn 4 Dawnhand Eulogist or Dream Seizer in the air. Aria comes down on turn 3 through 5 **only once you are ahead** — at which point the opponent is taking 3 from the draw step on top of five or more from combat, and dies around turn 6 while you are still above half.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:6  3:9  4:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  evasive_damage: 5 copies → p=0.82 (need ≥ 0.75)
  PASS  efficient_body: 11 copies (effective 9.6: Bile-Vial Boggart@0.5, Bile-Vial Boggart@0.5, Creakwood Safewright@0.8, Creakwood Safewright@0.8) → p=0.97 (need ≥ 0.75)
  PASS  blocker_removal: 6 copies (effective 5.2: Requiting Hex@0.6, Requiting Hex@0.6) → p=0.84 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 60%  T2 94%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mass removal is played; the plan is to outclass a token board in combat with Chaos Spewer (5/4) and menace/flying bodies, and Mornsong Aria's 'that player loses 3 life' ignores board width entirely.
  OK        single_large_threat: Bogslither's Embrace, Nameless Inversion
  CONCEDED  noncreature_permanents: The cube's artifact answers are BR/R/UG/W and its enchantment answers are G/UG/W only - mono-black has no answer to either, so the deck races them instead.
  CONCEDED  stack: Black has no counterspell in this pool; the deck accepts that its spells resolve or do not and leans on threat density (16 threat copies of 23 nonland cards).
  CONCEDED  graveyard: No maindeck graveyard interaction; Dawnhand Dissident and Rooftop Percher answer the cube's 39 graveyard cards from the sideboard instead of taxing a race-focused maindeck.
```

- No WARN flags were raised: curve, assembly, goldfish and coverage all returned PASS.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three mana sinks convert surplus lands into action: Mornsong Aria replaces every draw step with 'searches their library for a card', so a flooded topdeck becomes a chosen card; Chaos Spewer's 'you may pay {2}' mode spends two extra mana to keep its 5/4 body at full size instead of blighting; and Bogslither's Embrace's 'blight 1 or pay {3}' lets surplus mana buy the exile without costing a creature. |
| screw | mitigation | Stated precisely after Phase 9 finding F7, which correctly caught the original count folding reactive spells into a 'curves out' claim. 10 of 23 nonland cards cost two mana or less, but only 4 of those DEVELOP THE BOARD: Bile-Vial Boggart x2 at MV 1 and Creakwood Safewright x2 at MV 2. The rest are reactive and need an opposing target. Bogslither's Embrace is explicitly NOT a two-mana turn-two play off an empty board - its 'blight 1 or pay {3}' additional cost has no creature to blight, so it costs five. The real mitigation is therefore the two MV-1 bodies added in repair plus the goldfish result recorded at build_output.structural_checks.goldfish: 87.3% keepable hands, 88.1% for three lands by turn 3, and a turn-1 play in 60% of hands. |
| decapitation | mitigation | Mornsong Aria is the named key card but the thesis does not require it: 16 of 23 nonland cards are threats that deliver the kill on their own, and the structural gate confirms the efficient_body role is seen with p=0.98 by turn 6. Aria is also close to unanswerable in this environment - dossier.threat_profile.enchantment_answers lists only 4 cards cube-wide (Keep Out, Pyrrhic Strike, Unforgiving Aim, Wistfulness), all G/UG/W. |
| gas-out | mitigation | Under Aria, 'draw a card' is off for both players, so the deck's refuel is deliberately non-draw: Mornsong Aria tutors one card per draw step, Shadow Urchin's 'exile that many cards from the top of your library. Until your next end step, you may play those cards' is impulse access rather than drawing, and Eclipsed Elf x2 'look at the top four cards... put it into your hand' is selection rather than drawing. 4 of 23 nonland cards refuel through Aria. |
| raced | mitigation | Against the cube's fastest clocks the deck has 6 interaction spells at MV 1-3 (Requiting Hex x2 destroys anything at MV 2 or less, Nameless Inversion x2 is an instant -3 toughness, Bogslither's Embrace x2 exiles unconditionally) plus Mischievous Sneakling x2 in the sideboard for a Flash ambush blocker. Critically, Aria is a card I choose when to cast: when behind on the race I simply never deploy it, so the anchor never accelerates my own death. |
| disruption-fizzle | mitigation | The deck has no single critical turn to interact with - the kill is incremental combat damage from 16 threat copies, so one removal spell removes one attacker rather than the plan. Retched Wretch specifically survives interaction: 'When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield', and its counter is supplied by my own Chaos Spewer or Bogslither's Embrace blight. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Blighted Blackthorn | 'you draw a card and lose 1 life' - the draw is turned off by my own Mornsong Aria, leaving a 5-mana 3/7 that only loses me life. |
| Moonglove Extractor | 'you draw a card and lose 1 life' on attack - the draw is dead under Aria; a 3-mana 2/1 with a pure life-loss downside. |
| Voracious Tome-Skimmer | BBB 2/3 flier, but its only text ('pay 1 life... draw a card') is blanked by Aria. |
| Puca's Eye | 'draw a card' ETB and a draw activation - both dead under Aria. |
| Scarblade Scout | 2/2 Lifelink for 2; Aria states 'Players can't... gain life', so the lifelink is blank and this is a vanilla 2/2. |
| Rooftop Percher | 5 mana 3/3 flier whose 'You gain 3 life' is dead under Aria; the graveyard exile is a sideboard effect, not a maindeck rate. |
| Twilight Diviner | Rare 3/3 whose payoff needs creatures entering from a graveyard; this list has no reanimation, so the trigger is off. |
| Gloom Ripper | Rare {3}{B}{B} 4/4 whose pump scales with 'the number of Elves you control plus the number of Elf cards in your graveyard' - this list runs 3 Elves, so X is typically 1-2. |
| Taster of Wares | Rare whose ETB reveals X cards 'where X is the number of Goblins you control'; this list runs 2 Goblins, so X is 0-1 on curve. |
| Dawnhand Dissident | Rare 1/2 whose graveyard-exile and exile-cast modes both cost taps and counters; too slow for a race build and it competes for the 5-rare budget. |
| Darkness Descends | 'Put two -1/-1 counters on each creature' is symmetric; this build commits more bodies to the board than the opponent, so it kills my own team. |
| Gnarlbark Elm | 3/4 for 3 that enters with two -1/-1 counters (so 1/2) and needs {2}{B} plus two counters for a -2/-2; far too slow for a T6 clock. |
| Perfect Intimidation | 4-mana sorcery that exiles two cards from hand - card advantage the race plan cannot spend four mana on; belongs in the attrition build. |
| Bloodline Bidding | 8 mana with convoke; the goldfish turn is 6 and this does nothing to the board when cast. |
| Dose of Dawnglow | 5-mana reanimation; this list has no high-value creature worth reanimating and no self-mill to enable it. |
| Unbury | Card advantage at sorcery speed that does not affect the board on the turn it is cast. |
| Graveshifter | 4 mana 2/2 that returns a creature card - a value rate, not a clock rate, for a deck that must kill by turn 6-7. |
| Boggart Mischief | 'Whenever a Goblin creature you control dies, each opponent loses 1 life' - this list runs 2 Goblins and there is no sacrifice outlet in the entire cube, so the trigger has no reliable enabler. |
| Springleaf Drum | Mono-black needs no color fixing; the ramp is one mana and taps a creature I want attacking. |
| Evolving Wilds | Fetches a basic land tapped; in a mono-colour deck it is a strictly worse Swamp that costs a turn of tempo. |
| Eclipsed Realms | Taps for {C} freely and colored mana only for one chosen creature type; this list spans Goblin, Elf, Faerie, Shapeshifter and Treefolk, so no single choice covers it. |
| Blood Crypt | A rare dual; mono-black needs no fixing and every rare slot is budgeted (max 5 across MB+SB). |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.57   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.09 adj [MV 2.57 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard - every card verified present in the working pool by exact name.
[PASS] copy_limits: Commons and uncommons capped at 2, rares and mythics at 1; the Phase 5C validator cross-checked every combined mainboard+sideboard count against cube_search.get_max_copies and returned PASS.
[PASS] rare_mythic_budget: 3 of the maximum 5: Mornsong Aria (rare, MB), Shadow Urchin (rare, MB), Dawnhand Dissident (rare, SB). Two slots deliberately left unused after Bitterbloom Bearer (mythic) was cut in the Phase 9 repair.
[PASS] basics: 17 Swamp - format-supplied and exempt from copy limits.
[PASS] colour: All 20 distinct nonland cards return a usable 'cast' mode from effective_cost.best_mode against core_colors ['B']; the five hybrid cards (Chaos Spewer {2}{B/R}, Shadow Urchin {2}{B/R}, Eclipsed Elf {B/G}{B/G}{B/G}, Voracious Tome-Skimmer {U/B}{U/B}{U/B}, Mischievous Sneakling {1}{U/B}) are cast entirely off Swamps, so splash_colors is empty.

[PASS] 1a mainboard size: 40 (want 40)
[PASS] 1b sideboard size: 10 (want 10)
[PASS] 2 exact-name membership: all 21 names found
[PASS] 3 copy limits: all within card_pool_rules
[PASS] 3b rare+mythic budget: 3/5 -> ['Dawnhand Dissident', 'Mornsong Aria', 'Shadow Urchin']
[PASS] 4 colour usability (best_mode): all nonland castable in B; off-normal modes: {'Requiting Hex': 'cast', 'Bile-Vial Boggart': 'cast', 'Voracious Tome-Skimmer': 'cast', 'Creakwood Safewright': 'cast', 'Nameless Inversion': 'cast', "Bogslither's Embrace": 'cast', 'Chaos Spewer': 'cast', 'Retched Wretch': 'cast', 'Eclipsed Elf': 'cast', 'Shadow Urchin': 'cast', 'Mornsong Aria': 'cast', 'Dream Seizer': 'cast', 'Dawnhand Eulogist': 'cast', 'Dawnhand Dissident': 'cast', 'Rooftop Percher': 'cast', 'Darkness Descends': 'cast', 'Blight Rot': 'cast', "Auntie's Sentence": 'cast', 'Perfect Intimidation': 'cast', 'Mischievous Sneakling': 'cast'}
[PASS] 5 splash cap: splash_colors empty; 5 hybrid cards castable off Swamps with no splash needed
```
