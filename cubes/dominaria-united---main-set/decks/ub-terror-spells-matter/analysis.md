---
deck_name: "ub-terror-spells-matter"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-08-17T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x10  Island                   basic
  x6   Swamp                    basic
  x2   Contaminated Aquifer     Island Swamp, enters tapped
```

### CREATURES (7)

```
CMC  Card                     Qty   Color  Role                                                     Rar
  2  Haunting Figment         x2    U      Threat — evasive clock, unblockable on spell turns       C
  3  Haughty Djinn            x1    U      Threat — evasive clock + cost reducer                    R
  4  Ertai Resurrected        x1    BU     Threat — flash body + modal answer                       R
  5  Sphinx of Clear Skies    x1    U      Threat — flying finisher                                 M
  7  Tolarian Terror          x2    U      Threat — self-discounting finisher                       C
```

### INSTANTS & SORCERIES (13)

```
CMC  Card                     Qty   Color  Role                                                     Rar
  1  Cut Down                 x2    B      Interaction — one-mana removal                           U
  1  Rona's Vortex            x2    U      Interaction — one-mana answer, kicked to library bottom  U
  2  Essence Scatter          x2    U      Interaction — counterspell                               C
  2  Impulse                  x2    U      Engine — card selection                                  C
  2  Tribute to Urborg        x2    B      Interaction — scaling -X/-X removal                      C
  4  Extinguish the Light     x2    B      Interaction — unconditional removal                      C
  6  Cosmic Epiphany          x1    U      Engine — graveyard-scaling refuel                        R
```

### OTHER SPELLS (2)

```
CMC  Card                     Qty   Color  Role                                                     Rar
  2  Founding the Third Path  x2    U      Engine — free spell, mill four, graveyard rebuy          U
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                              Rar
Battlefly Swarm          x2    B      Defence — one-mana flying deathtouch blocker — In vs the cube's 30 flying creatures. For {B} it blocks any flier, and '{B}: This creature gains deathtouch until end of turn' kills it regardless of size — something the ground-bound Tolarian Terror structurally cannot do.  [C]
Knight of Dusk's Shadow  x2    B      Interaction — lifegain hate + semi-evasive body — In vs the cube's 22 lifegain cards (the third-largest threat class at 8.9% density). 'Your opponents can't gain life' shuts the class off entirely, and a 2/2 with menace and a {1}{B} pump adds to a clock that is built to deal exactly 20.  [U]
Negate                   x2    U      Interaction — counterspell — The only answer this deck has to the cube's 18 enchantments and 15 artifacts, since no mono-blue or mono-black card in this pool destroys either after it resolves. Also protects Haughty Djinn and the Terrors from removal on the stack.  [C]
Academy Wall             x1    U      Defence — ground blocker + filtering — In vs ground aggro. Its trigger fires off the 13 instants and sorceries in the mainboard, so it loots while it walls.  [C]
Ertai's Scorn            x2    U      Interaction — unconditional counterspell — In vs control mirrors and noncreature threats where Essence Scatter's creature-only clause is dead.  [U]
Drag to the Bottom       x1    B      Interaction - symmetric sweeper — In vs genuinely wide boards, the one class the mainboard concedes. At this deck's 2 basic land types it is -3/-3, killing 106 of the cube's 157 creatures while only 3 of this deck's 7 bodies die (Haunting Figment x2 and Ertai Resurrected); Haughty Djinn survives at */1 because its toughness is a fixed 4, and Sphinx of Clear Skies and Tolarian Terror x2 survive at 2/2. Board it in alongside cutting the Figments.  [R]
```

## ANALYSIS

### DECK IDENTITY

A UB spells-matter control deck where the interaction suite IS the cost reduction. Thirteen of its twenty-two nonland cards are instants or sorceries, and three separate cards read that number: Tolarian Terror's cost, Haughty Djinn's power, and kicked Tribute to Urborg's size. What separates this build from an ordinary Terror deck is that it does not try to win with two ground 5/5s. Seven bodies deal damage and four of them cannot be blocked profitably - Haunting Figment x2 are unblockable on any turn the deck casts a spell, Haughty Djinn and Sphinx of Clear Skies fly. The deck answers on curve for one and two mana, is paid for having done so, and closes around turn 8.

### ONE NUMBER, THREE PAYOFFS

Thirteen of the twenty-two nonland cards are instants or sorceries. Three cards in the list read that number off the graveyard, and one card manufactures it:

| Card | What it reads | Effect |
|---|---|---|
| Tolarian Terror | "costs {1} less to cast for each instant and sorcery card in your graveyard" | a 5/5 ward {2} for {2}{U}–{3}{U} on turn 5 |
| Haughty Djinn | "power is equal to the number of instant and sorcery cards in your graveyard" | a 3–6 power flier for three mana |
| Tribute to Urborg (kicked) | "an additional -1/-1 … for each instant and sorcery card in your graveyard" | scaling removal |
| Founding the Third Path | "II — Target player mills four cards" | manufactures the resource |

That is the pipeline. The interaction suite is not overhead protecting a separate win condition — every answer you cast makes both finishers cheaper and one of them bigger.

**With the correction the Challenger forced:** Founding the Third Path is weaker than it first looks, in two specific ways. Its mill-four only advances the payoffs for the instants and sorceries among those four cards, which at 13 of 40 is an expectation of about **1.8, not 4**. And chapter III reads "**Exile** target instant or sorcery card from your graveyard. Copy it" — the exile is mandatory and the copy ceases to exist, so chapter III *decrements* the number all three payoffs read. A full Saga cycle nets roughly **+0.8** cards in the graveyard, plus a free spell and a copied one. It is still the best graveyard-filler in these colours; it is not a +4 engine, and the assembly check now weights it at 0.55 per copy rather than 1.0.

### THE DECK'S CENTRAL FLAW WAS FOUND BY THE GRILL, NOT BY THE BUILD

This build entered Phase 9 claiming a goldfish turn of **7**. The Challenger worked the arithmetic and it did not hold:

- The only line reaching 20 by turn 7 needed three specific cards — both Tolarian Terrors plus the singleton Haughty Djinn — among the first 12 cards seen. That is **C(12,3)/C(40,3) = 2.23%**.
- Under the shape judge's own one-swing convention, the full five-body suite topped out at **21 damage**, requiring all five deployed and attacking by turn 7 — a **0.30%** draw.
- And 10 of those 15 turn-7 points came from two 5/5 **ground** creatures with no evasion, against a goldfish opponent granted no blockers. Any real opponent chump-blocks them.

The repair took both paths the gate allows. The thesis turn was revised to **8** and stated as a revision. And the missing ingredient — which turned out to be *evasion*, not *count* — was added:

- **Haunting Figment ×2** — "This creature can't be blocked as long as you've cast an instant or sorcery spell this turn." Live off 13 of 22 nonland cards. Critically it is a **2-copy common**: P(at least one in the first 8 cards) is **36.4%**, against 2.23% for the package it replaces. A Figment on turn 2 attacking through turn 8 is 12 damage from a two-mana card.
- **Sphinx of Clear Skies** — "Flying, ward {2}" on a 5/5 for a fixed {3}{U}{U}, with no graveyard prerequisite. It is the same body as Tolarian Terror, but airborne. It had never been evaluated: the rare budget note had assessed 5 of the 22 UB-legal rares in the pool.

Seven bodies now, **four of which cannot be blocked profitably** — two unblockable on spell turns, two flying. Assembly at turn 8 returns p = 0.93 against a 0.75 threshold, up from 0.81.

### THE DECK HAS NO SWEEPER, ON PURPOSE

`Drag to the Bottom` is the only sweeper in these colours, and at this deck's 2 basic land types it is −3/−3. I got the cost of running it wrong twice, and the Challenger caught both:

- **First draft:** "kills 4 of this deck's 5 bodies." Wrong — Tolarian Terror is a 5/5 and survives at 1/1.
- **Second draft:** "kills 4 of 7, including Haughty Djinn whenever its power is low." Also wrong, and worse — death from −X/−X is a state-based action on **toughness**, and Haughty Djinn's oracle sets only its *power*. Its toughness is a fixed 4, so at −3/−3 it is */1 and survives at **any** power, including 0.

The reproducing figure: **3 of 7 die** (Haunting Figment ×2 at 2/1, Ertai Resurrected at 3/2) and **4 of 7 survive** (Haughty Djinn at */1, Sphinx of Clear Skies and both Tolarian Terrors at 2/2).

That is a smaller cost than I claimed, so the honest response was to stop dismissing the card. It is now in the **sideboard**, spending the fifth and final rare slot. The mainboard still concedes the wide-board class — the two bodies Drag reliably kills are the Haunting Figments that *are* the turn-2 clock, and a sorcery-speed symmetric sweeper is dead in exactly the draws this deck wants. But against a genuinely wide board it kills 106 of the cube's 157 creatures while leaving four of this deck's seven bodies standing, and that is worth a sideboard slot.

### WHY THE MANA BASE HAS ALMOST NO TAPPED LANDS

An earlier version ran `Geothermal Bog` ×2 to reach a third basic land type for Domain. The Challenger measured the trade and it was strictly negative: the benefit required drawing both a Bog *and* the single `Shadow Prophecy`, materialising in roughly **11% of games** for an expected **0.05** extra instants or sorceries in the graveyard — while the enters-tapped cost was paid in **100%** of games a Bog was drawn, in a deck that wants {1}{U}{U} on turn 3 and a turn-5 Terror.

Both were cut for basic Swamps (black sources unchanged at 8 of 18), `Shadow Prophecy` was cut with them, and the freed slot paid for the 18th land that the recomputed `land_target` asked for. Only **2 of 18** lands now enter tapped, and the goldfish figures are the best of the three builds: 86% keepable, 92% to three lands by turn 3.

### A RARE BUDGET USED AS A CEILING, NOT A TARGET

This deck spends 4 of its 5 permitted rare/mythic slots and its sideboard spends none. Every land in it is a common, and both copies of its primary finisher are commons. The fifth slot is deliberately open — the strongest remaining UB rares each fail on a stated mechanism against *this* list rather than on budget: `Drag to the Bottom` kills 4 of 7 bodies; `Sheoldred, the Apocalypse` is four-mana inevitability in a deck built to close on turn 8; `The Phasing of Zhalfir`'s chapter III destroys all creatures, including these seven.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:4  2:10  3:1  4:3  5:1  6:1  7:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.5: Haughty Djinn@0.8, Haunting Figment@0.85, Haunting Figment@0.85) → p=0.93 (need ≥ 0.75)
  PASS  enabler: 15 copies (effective 14.1: Founding the Third Path@0.55, Founding the Third Path@0.55) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 56%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: This deck's MAINBOARD runs no sweeper, deliberately. The only one available in these colours is Drag to the Bottom. CORRECTED COUNT (an earlier draft said 4 of 7 and misattributed Haughty Djinn's survival to its power): at this deck's 2 basic land types it is -3/-3, and death from -X/-X is a state-based action on TOUGHNESS. Haughty Djinn's oracle sets only its power - its toughness is a fixed 4 - so at -3/-3 it is */1 and survives at any power, including 0. The true figure is 3 of 7 bodies die (Haunting Figment x2 at 2/1 and Ertai Resurrected at 3/2) and 4 of 7 survive (Haughty Djinn at */1, Sphinx of Clear Skies and Tolarian Terror x2 at 2/2). On that corrected number the mainboard concession still holds but on a narrower argument than before: the two cards it kills are Haunting Figment x2, which ARE the turn-2 clock the whole build is designed around, and it is a sorcery-speed symmetric card that is dead in every aggressive draw. It is therefore in the SIDEBOARD rather than conceded outright - boarded in against genuinely wide boards alongside cutting the Figments, where it kills 106 of the cube's 157 creatures and leaves 4 of 7 of this deck's own bodies standing. In the mainboard, wide boards are flown over (Sphinx of Clear Skies and Haughty Djinn fly, Haunting Figment is unblockable on spell turns) and walled by Tolarian Terror x2 at 5/5 with ward {2}; sideboard Academy Wall is the other boarded answer.
  OK        single_large_threat: Extinguish the Light, Rona's Vortex, Ertai Resurrected, Essence Scatter, Cut Down
  CONCEDED  noncreature_permanents: Partial by necessity. Planeswalkers ARE answered - Extinguish the Light ('Destroy target creature or planeswalker'), Ertai Resurrected ('Destroy another target creature or planeswalker') and kicked Rona's Vortex. Resolved artifacts and enchantments are not: the dossier's artifact-answer roster is BG/G/R only and its enchantment-answer roster is BG/G/W only, so no mono-blue or mono-black card in this pool destroys or exiles either. Sideboard Negate x2 is the pre-resolution answer; mitigating post-resolution would require leaving UB.
  OK        stack: Essence Scatter, Ertai Resurrected
  CONCEDED  graveyard: No card in U or B in this pool exiles cards from an opponent's graveyard (verified against oracle text by both the builder and the Challenger; the dossier structural census reports 0 graveyard hate cube-wide). Kicked Rona's Vortex is the closest analogue - it puts a permanent on the bottom of its owner's library rather than into the graveyard.
```

- No WARN flags were raised at the revised thesis turn of 8. Curve PASS, goldfish PASS (86% keepable against an 80% threshold, 92% to 3 lands by turn 3, 56% turn-1 play), assembly PASS on both roles (payoff 6.5 reliability-weighted copies p=0.93, up from 0.81 before the repair; enabler 14.1 weighted copies p=1.00), coverage PASS with three declared concessions.
- The curve shows single cards at 5 and 6 and two at 7. Those are Sphinx of Clear Skies, Cosmic Epiphany and Tolarian Terror x2 registering at printed cost; with 13 instants and sorceries plus Founding the Third Path's mill, the real curve tops out around 5.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Cosmic Epiphany is the flood valve that scales with the deck's own resource: 'Draw cards equal to the number of instant and sorcery cards in your graveyard' turns the seventh land into 4-7 cards. Two kickers give spare mana a floor earlier - Rona's Vortex {2}{B} upgrades bounce to library-bottom, Tribute to Urborg {1}{U} adds the graveyard-scaling -1/-1. Tolarian Terror x2 at a printed {6}{U} genuinely want the extra lands on turns when the graveyard is still thin. |
| screw | mitigation | Goldfish reports 86% keepable hands and 92% to 3 lands by turn 3 at 18 lands, the best figures of the three builds. Impulse x2 digs four deep at instant speed. Two-land hands are live because the curve is 4 cards at one mana and 10 at two: Cut Down {B} and Rona's Vortex {U} are real turn-1 answers and Haunting Figment is a turn-2 clock, giving a 56% turn-1 play rate. |
| decapitation | mitigation | REWRITTEN on a Challenger finding - an earlier version claimed Rona's drain 'triggers on casting rather than on the battlefield surviving', which its oracle text contradicts, and Rona has since been cut. The real answer is redundancy across failure types: 7 bodies across 5 distinct names, and they die to different things. Haunting Figment x2 dodge blockers but not removal; Tolarian Terror x2 dodge removal behind ward {2} but not blockers; Sphinx of Clear Skies and Haughty Djinn dodge blockers by flying. No single answer class turns off the clock. On the interaction side, 10 cards across 5 distinct names. |
| gas-out | mitigation | The refuel scales with the same resource the threats do. Cosmic Epiphany draws 4-7 late; Impulse x2 digs; Founding the Third Path's chapter I casts a spell for free and chapter III copies one out of the graveyard. Five of 22 nonland cards draw, select, or manufacture cards, and the deck's cheap curve means a small hand still deploys fully each turn. |
| raced | accepted | This is the fastest of the three control builds - thesis turn 8, a turn-2 clock in Haunting Figment, and 4 one-mana plus 10 two-mana cards - but the mainboard runs no sweeper at all. The cost of mitigating is measured rather than asserted, at the CORRECTED count: Drag to the Bottom at this deck's 2 basic land types is -3/-3 and kills 3 of the 7 bodies - Haunting Figment x2 and Ertai Resurrected - while Haughty Djinn survives at */1 (its toughness is a fixed 4, and -X/-X kills on toughness, not power) and Sphinx of Clear Skies and Tolarian Terror x2 survive at 2/2. Three of seven is a smaller cost than the 4 of 7 an earlier draft claimed, which is why the card is now in the sideboard rather than dismissed: the two it reliably kills are the Haunting Figments that ARE the turn-2 clock, so it is dead in exactly the draws this deck wants, but it is the right card against a genuinely wide board. Sideboard Battlefly Swarm x2 ('Flying / {B}: This creature gains deathtouch until end of turn', one mana) covers the air, Academy Wall covers the ground, Knight of Dusk's Shadow x2 ('Your opponents can't gain life') answers the 22-card lifegain class that would otherwise stretch a clock built to deal exactly 20, and Drag to the Bottom covers the wide board. |
| disruption-fizzle | mitigation | There is no single critical turn - the graveyard count accumulates across every spell cast, so interaction aimed at any one card does not reset it. If Founding the Third Path is countered the count still climbs from ordinary spell-casting; if a Tolarian Terror is answered the second is already cheaper for it. The one turn worth protecting is the first Terror, and it protects itself with ward {2}. Essence Scatter x2 and Ertai Resurrected's flash counter mode cover the rest. |

### COUNT-DEPENDENT VERDICTS

| Card | Verdict | Count against this list |
|---|---|---|
| Haunting Figment | INCLUDE x2 (added in grill repair - the card that makes the clock real) | 'Vigilance / This creature can't be blocked as long as you've cast an instant or sorcery spell this turn.' This list runs 13 instants and sorceries of 22 nonland cards (59%), so the unblockable clause is live on most turns the deck operates. The decisive number is availability rather than power: as a 2-copy common, P(at least one in the first 8 cards) is 36.4%, against 2.23% for the three-specific-card lethal package the deck previously relied on. A Figment cast on turn 2 and attacking through turn 8 is 12 damage from a two-mana card. Priced at weight 0.85 in the assembly check because on turns the deck holds up mana without casting, it is a plain 2/1. |
| Sphinx of Clear Skies | INCLUDE (rare slot 4 of 5, added in grill repair) | 'Flying, ward {2}' on a 5/5 for {3}{U}{U}. It is the same body as Tolarian Terror but evasive and at a fixed cost with no graveyard prerequisite, which is exactly the gap the Challenger's goldfish audit found: 10 of the pre-repair deck's 15 turn-7 damage came from ground 5/5s that a single chump blocker turns off. Its Domain trigger reveals X = 2 basic land types here and is recorded as incidental, not load-bearing. |
| Tolarian Terror | INCLUDE x2 - the pipeline payoff | 'This spell costs {1} less to cast for each instant and sorcery card in your graveyard.' This list runs 13 instants and sorceries of 22 nonland cards (59%), plus Founding the Third Path x2. A deck that has cast four cheap spells by turn 5 - which its curve of 4 one-drops and 10 two-drops makes routine - casts a 5/5 with ward {2} for {2}{U}. Common, so 2 copies cost nothing against the 5-rare cap. Honest limitation, now compensated rather than hidden: it has no evasion, which is why four of the deck's seven bodies do. |
| Haughty Djinn | INCLUDE (rare slot 1 of 5) | 'power is equal to the number of instant and sorcery cards in your graveyard' and 'Instant and sorcery spells you cast cost {1} less to cast.' Both halves key off the same 13 of 22 nonland cards (59%). Unlike the sibling attrition build, this deck runs no Drag to the Bottom, so 0 of 22 mainboard cards kill its own */4. Priced at weight 0.8 in assembly because it enters as a 0-power body before the deck has spent spells. |
| Founding the Third Path | INCLUDE x2, at a corrected valuation | 'I - You may cast an instant or sorcery spell with mana value 1 or 2 from your hand without paying its mana cost' hits 10 of this list's 13 instants and sorceries (77%): Cut Down x2, Rona's Vortex x2, Tribute to Urborg x2, Essence Scatter x2, Impulse x2. CORRECTED YIELD on a Challenger finding: 'II - Target player mills four cards' does NOT add four to the payoff count - only instants and sorceries advance it, so with 13 of 40 cards qualifying the expected yield is about 1.8 of 4, not 4. And 'III - Exile target instant or sorcery card from your graveyard' REMOVES one from the count, so a full Saga cycle nets roughly +0.8 rather than the +4 an earlier draft implied. It is still the fastest graveyard-filler available and still free-casts a spell, and it is priced at weight 0.55 in the assembly check to reflect the corrected yield. |
| Tribute to Urborg | INCLUDE x2 | 'If this spell was kicked, that creature gets an additional -1/-1 until end of turn for each instant and sorcery card in your graveyard' - the same 13 of 22 count that sizes the other two payoffs. Third card in the list scaling on the deck's defining number. |
| Cosmic Epiphany | INCLUDE (rare slot 2 of 5) | 'Draw cards equal to the number of instant and sorcery cards in your graveyard' at {4}{U}{U}, or {3}{U}{U} with Haughty Djinn out. With 13 instants and sorceries in 40 cards plus Founding's mill, a turn-6 graveyard realistically holds 4-7 of them. |
| Ertai Resurrected | INCLUDE (rare slot 3 of 5) | 'Flash / choose up to one - Counter target spell, activated ability, or triggered ability; or Destroy another target creature or planeswalker.' One of only 2 cards in this list that interact with the stack, one of 3 that answer planeswalkers, and a body that arrives at instant speed so a turn spent holding up mana is not a turn spent not developing. |
| Rona, Sheoldred's Faithful | EXCLUDE (cut during grill repair) | 'Whenever you cast an instant or sorcery spell, each opponent loses 1 life' triggers off 13 of 22 nonland cards and was worth 7-9 unblockable points over a game. It was cut for two reasons that compounded: {1}{U}{B}{B} demands double black on turn 4 from 8 of 18 sources in a deck whose blue pip share is 67.9%, and the Challenger showed the decapitation argument built on it was false - the drain is a battlefield trigger, so answering Rona stops it. Haunting Figment x2 and Sphinx of Clear Skies deliver the same missing damage evasively and at castable costs. |
| Shadow Prophecy | EXCLUDE (cut during grill repair) | 'Look at the top X cards, where X is the number of basic land types among lands you control. Put up to two of them into your hand and the rest into your graveyard.' Its self-mill value required a third basic land type, which required Geothermal Bog, which the Challenger showed was a strictly negative trade. At this deck's 2 basic types it is 'look at 2, take up to 2, bin 0' - a plain draw-two for {2}{B} and 2 life with no filtering upside. Cutting it is the honest consequence of cutting the Bogs, and it paid for the 18th land. |
| Impede Momentum | EXCLUDE (cut during grill repair) | 'Tap target creature and put three stun counters on it.' It was in the list to clear a lane for ground Tolarian Terrors. Four of this deck's seven bodies no longer need a lane cleared - Haunting Figment x2 are unblockable on spell turns and Haughty Djinn and Sphinx of Clear Skies fly - so 2 sorcery-speed slots bought evasion instead. |
| Defiler of Dreams | EXCLUDE | CORRECTED on a Challenger finding: an earlier draft counted 5 blue permanent spells in this list. The true figure against the final list is 8 of 22 (36%) - Founding the Third Path x2, Haunting Figment x2, Haughty Djinn, Tolarian Terror x2, Sphinx of Clear Skies, plus Ertai Resurrected whose colours include U, making 9. The verdict stands at the corrected number: both halves key off well under half the deck, for {3}{U}{U}. |
| Djinn of the Fountain | EXCLUDE | 'Flying / Whenever you cast an instant or sorcery spell, choose one - +1/+1; exile this creature and return it at the next end step; scry 1.' The trigger is live off 13 of 22 nonland cards and the blink mode is genuine removal protection. Excluded on cost: {4}{U}{U} is six mana in a deck whose thesis requires a board by turn 5, and Sphinx of Clear Skies is a larger flier for one less. |
| Coral Colony | EXCLUDE | '{1}{U}, {T}: Target player mills X cards, where X is the number of creatures you control with defender.' This list runs 0 other creatures with defender, so X = 1 and the mill costs two mana per card - against Founding the Third Path's four for two mana. |
| Frostfist Strider | EXCLUDE | 'Ward {2} / When this creature enters, tap target creature an opponent controls and put a stun counter on it' on a 4/4 for {3}{U}{U}. It competes directly with Sphinx of Clear Skies at the identical cost; the Sphinx is 1 power larger and flies, and flying is precisely the property the goldfish audit showed the deck was missing. |
| Micromancer | EXCLUDE | 'search your library for an instant or sorcery card with mana value 1' - this list runs 4 mana-value-1 instants of 22 nonland cards (Cut Down x2, Rona's Vortex x2). A four-mana 3/3 fetching a one-mana removal spell is a losing rate for a deck already running 10 interaction cards. |
| Drag to the Bottom | SIDEBOARD (rare slot 5 of 5) - moved out of the mainboard, not excluded | 'Each creature gets -X/-X, where X is 1 plus the number of basic land types among lands you control.' At this deck's 2 basic land types, X = 3. TWICE-CORRECTED count: a first draft claimed it killed 4 of 5 bodies, a second claimed 4 of 7 and attributed Haughty Djinn's fate to its power. Both were wrong. Death from -X/-X is a state-based action on toughness, and Haughty Djinn's oracle sets only its power ('Haughty Djinn's power is equal to the number of instant and sorcery cards in your graveyard') - its toughness is a fixed 4. At -3/-3 it is */1 and survives at any power. The reproducing figure is 3 of 7 dying (Haunting Figment x2 at 2/1, Ertai Resurrected at 3/2) and 4 of 7 surviving (Haughty Djinn */1, Sphinx of Clear Skies 2/2, Tolarian Terror x2 2/2). Against the cube it kills 106 of 157 creatures (68%). On that number it is too good to leave out of the seventy-five entirely, and too anti-synergistic with a turn-2 Haunting Figment clock to main-deck: it goes in the sideboard, spending the fifth and final rare slot. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sheoldred, the Apocalypse | 'Whenever an opponent draws a card, they lose 2 life' — a four-mana inevitability permanent in a deck built to have a body on the battlefield from turn 2 and close on turn 8. It belongs to the attrition pipeline, which is built separately. |
| Rona, Sheoldred's Faithful | 'Whenever you cast an instant or sorcery spell, each opponent loses 1 life' triggers off 13 of 22 nonland cards and was in the pre-grill list. Cut because {1}{U}{B}{B} demands double black on turn 4 from 8 of 18 sources in a deck whose blue pip share is 67.9%, and because the drain is a battlefield trigger, so it is not the decapitation insurance it was first credited as. |
| Shadow Prophecy | 'Look at the top X cards, where X is the number of basic land types among lands you control. Put up to two into your hand and the rest into your graveyard.' Its self-mill required a third basic land type, which required Geothermal Bog, which proved a strictly negative trade. At 2 basic types it is 'look at 2, take up to 2, bin 0' — a plain draw-two for {2}{B} and 2 life. |
| Impede Momentum | 'Tap target creature and put three stun counters on it' — it was in the list to clear a lane for ground Terrors. Four of this deck's seven bodies no longer need a lane cleared, so the slots bought evasion instead. |
| Geothermal Bog | 'Land — Swamp Mountain, enters tapped' — it would add a third basic land type, but the only Domain card left in the final list is a singleton Sphinx whose trigger needs combat damage first, against 2 of 18 lands entering tapped in 100% of games they are drawn. |
| Vohar, Vodalian Desecrator | '{T}: Draw a card, then discard a card' — one binned card per turn and summoning-sick on arrival. Founding the Third Path bins four at once for the same two mana. |
| Djinn of the Fountain | 'Flying // Whenever you cast an instant or sorcery spell, choose one — +1/+1; exile this creature and return it at the next end step; scry 1' — the trigger is live and the blink mode is real removal protection, but {4}{U}{U} is six mana in a deck that needs a board by turn 5, and Sphinx of Clear Skies is a larger flier for one less. |
| Frostfist Strider | 'Ward {2} // When this creature enters, tap target creature an opponent controls and put a stun counter on it' on a 4/4 for {3}{U}{U} — competes directly with Sphinx of Clear Skies at the identical cost, and the Sphinx is larger and flies. |
| Coral Colony | '{1}{U}, {T}: Target player mills X cards, where X is the number of creatures you control with defender' — this list runs 0 other creatures with defender, so X is 1 and the mill costs two mana per card. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' — only 4 of 22 nonland cards qualify; a four-mana 3/3 fetching a one-mana spell is a losing rate for a deck already running 10 interaction cards. |
| Monstrous War-Leech | 'power and toughness are each equal to the greatest mana value among cards in your graveyard' — the kicked mill-four is real, but the body needs a Tolarian Terror already binned to be large, and a card that wants your finisher in the graveyard fights the deck that wants to cast it. |
| Silver Scrutiny | 'Draw X cards' at {X}{U}{U} — scales with lands, not with the graveyard. Cosmic Epiphany draws more for the same mana off the resource this deck is already accumulating. |
| Liliana of the Veil | '+1: Each player discards a card' — symmetric discard in a deck that wants a full hand of cheap spells to cast, and it would spend a mythic slot. |
| The Phasing of Zhalfir | 'III — Destroy all creatures' — this deck runs seven of them; the chapter that makes it a sweeper is a sweeper aimed at its own thesis. |
| Writhing Necromass | 'costs {1} less to cast for each creature card in your graveyard' — the same self-discount mechanic as Tolarian Terror but keyed to creature cards, and this list bins instants and sorceries by design. |
| Phyrexian Espionage | 'Draw two cards. If kicked, each opponent discards a card' — a fine card and one of the few castable with no opposing board, but the slots went to Haunting Figment x2 and Sphinx of Clear Skies, which the goldfish arithmetic showed were the binding need. |
| Talas Lookout | 'Flying // When this creature dies, look at the top two cards of your library' — a reasonable evasive body, but at {2}{U}{U} it is a 3/2 where Sphinx of Clear Skies is a 5/5 with ward {2} and Haunting Figment is a two-mana unblockable clock. |
| Crystal Grotto | '{T}: Add {C}. {1}, {T}: Add one mana of any color' — a colourless-tapping land in a deck that wants {1}{U}{U} on turn 3, and it carries no basic land type. |
| Thran Portal | 'As this land enters, choose a basic land type' — would raise the Domain count, but it charges 1 life per mana activation and the only Domain card left in the list is a singleton Sphinx. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.55 adj [MV 2.91 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  32.1%  prod  44.4%  gap -12.3pp  [OK]
  U  demand  67.9%  prod  66.7%  gap  +1.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [INFO] base: cube_mainboard only - every card verified by exact name against the working pool cache
  [PASS] commons_uncommons_max_2: PASS - no card exceeds 2 copies except basic lands
  [PASS] rares_mythics_max_1: PASS - all four rare/mythic cards are singletons
  [PASS] rare_mythic_total_max_5: PASS with one slot spare - 4 of the permitted 5: Haughty Djinn (R), Cosmic Epiphany (R), Ertai Resurrected (R), Sphinx of Clear Skies (M). Sideboard contains zero rares. See rare_budget_note.
  [PASS] basics_unlimited: PASS - 10 Island, 6 Swamp, format-supplied and exempt
  [PASS] colour_identity: PASS - every nonland card usable in UB via effective_cost.best_mode
```
