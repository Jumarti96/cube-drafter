---
deck_name: "ur-tolarian-terror-control"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-08-15T03:23:36Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
Island                         x11  ({T}: Add {U}.)
Mountain                       x3   ({T}: Add {R}.)
Molten Tributary               x2   ({T}: Add {U} or {R}.) This land enters tapped.
Shivan Reef                    x1   {T}: Add {C}. {T}: Add {U} or {R}. This land deals 1 damage...
```

### CREATURES (7)
```
CMC  Card                           Qty  Colr Role                               Rar
  2  Electrostatic Infantry         x2   R    Payoff — permanent counters per spell U
  3  Academy Wall                   x1   U    Engine — 0/5 blocker, loots per turn C
  3  Haughty Djinn                  x1   U    Payoff — GY-count flier + cost reducer R
  5  Frostfist Strider              x1   U    Payoff — 4/4 ward 2, ETB tap+stun  U
  7  Tolarian Terror                x2   U    Payoff — self-discounting 5/5 ward 2 C
```

### INSTANTS & SORCERIES (13)
```
CMC  Card                           Qty  Colr Role                               Rar
  1  Flowstone Infusion             x1   R    Interaction — cheapest early trade C
  2  Essence Scatter                x2   U    Interaction — counter creature     C
  2  Impede Momentum                x1   U    Interaction — tap + 3 stun         C
  2  Impulse                        x2   U    Engine — finds the finisher        C
  2  Lightning Strike               x2   R    Interaction — 3 damage any target  C
  2  Thrill of Possibility          x2   R    Engine — instant refuel, fills GY  C
  3  Ertai's Scorn                  x2   U    Interaction — unconditional counter U
  5  Jaya's Firenado                x1   R    Interaction — 5 damage, scry 1     C
```

### OTHER SPELLS (3)
```
CMC  Card                           Qty  Colr Role                               Rar
  2  Founding the Third Path        x2   U    Engine — free cast, self-mill, GY copy U
  4  The Phasing of Zhalfir         x1   U    Interaction — phase out any permanent / wipe R
```

## SIDEBOARD (10)
```
Card                           Qty  Colr Role / When to board in                                    Rar
Negate                         x2   U    vs control, sagas and sweepers — counters The Elder Dragon War, Temporal Firestorm and Karn's Sylex, which the maindeck can otherwise only answer with the two Ertai's Scorn C
Smash to Dust                  x2   R    vs artifact decks (15 artifacts in cube) — 'Destroy target artifact'; the third mode, 'deals 1 damage to each creature your opponents control', also answers an x/1 token swarm C
Fires of Victory               x2   R    vs decks built on toughness-4-and-5 bodies — 'deals damage to target creature or planeswalker equal to the number of cards in your hand' reaches a band Lightning Strike cannot; only 6 of the cube's 157 creatures have toughness 6 or more, and the {2}{U} kicker draws a card U
The Elder Dragon War           x1   R    vs aggro and tokens — chapter I 'deals 2 damage to each creature and each opponent' kills only one of this deck's five creature names (Electrostatic Infantry, toughness 2), so board the Infantry out when bringing this in. Skipping chapter I via read ahead is not an out: chapter III destroys all creatures including your own Terrors. R
Frostfist Strider              x1   U    vs creature decks — the second copy; a 4/4 with Ward {2} that taps and stuns an attacker on arrival U
Jaya's Firenado                x1   R    vs multiple large ground creatures — the second copy       C
Impede Momentum                x1   U    vs a body too large or too warded to burn — taps and stuns for three combats without needing damage C
```

## ANALYSIS

### DECK IDENTITY

A UR control deck whose threats are priced in cards rather than mana. Every cheap instant and sorcery it casts is simultaneously an answer, a point of Haughty Djinn's power, a {1} off Tolarian Terror and a +1/+1 counter on Electrostatic Infantry, so interaction and threat development are the same action. It answers the early game with one- and two-mana instants, bricks the ground with Academy Wall and two 5/5s, and lands a discounted large body from turn 5 that closes in roughly three attacks under the cover of Ertai's Scorn and The Phasing of Zhalfir.

### THE THREAT IS PRICED IN CARDS, NOT MANA

This deck's two headline finishers have printed mana values of 3 and 7. Neither number is what you
pay. Tolarian Terror reads "This spell costs {1} less to cast for each instant and sorcery card in
your graveyard"; with 13 instants and sorceries in 23 nonland cards, the yard holds roughly 4-6 of
them by turn 5-6, so a 5/5 with Ward {2} costs one to three mana. Haughty Djinn's power is that
same count, and it discounts every subsequent instant and sorcery by {1}.

The consequence is that the usual control trade-off inverts. Normally each answer you cast is a
card that did not develop your board. Here casting an answer *is* developing your board — bigger
Djinn, cheaper Terror, and (after the grill repair) another +1/+1 counter on Electrostatic
Infantry. That is why the Interaction bucket can sit at 39% without the deck failing to close.

One honest correction the self-grill forced: the Djinn is a **turn-5** threat, not a turn-3 one.
The turn-3 arithmetic ceiling is 3 power and requires a specific two-card line; the typical turn-3
Djinn is a 1/4 or 2/4 flier. It is a 4-to-6 power flier from turn 5.

### WHAT THE LAND MODEL CANNOT SEE

`land_target` recommends 18 lands. It reads the printed `cmc` field, and Tolarian Terror's printed
cmc is 7 — roughly five mana above what this deck actually pays for it. Built to 17, a deviation of
exactly one, which the audit tolerates (PASS at 17/18).

The interesting part is the margin. `raw_target` is 17.551 against a 17.5 boundary, so only 0.051
raw units separate the two recommendations, while the Terror correction is worth about 0.43 of
average mana value. The correction is roughly eight times larger than the gap it needs to close —
which means the deviation is not a close call. Substituting Terror's cost at 2, 4 or even 6 mana,
the model recommends 17 at every value.

### THE POOL CAPS THE REAL PAYOFF AT THREE COPIES

The binding constraint on this archetype is rarity, not colour. Exactly two card names in the cube
read the graveyard count off the battlefield, and the pool rules cap them at 3 copies total —
Haughty Djinn at 1 (rare), Tolarian Terror at 2 (common). Three copies in a 40-card deck give a
0.70 probability of seeing one by turn 6, which **failed** the 0.75 assembly gate outright on the
first build.

The repair widens the cluster with cards that convert the same spell stream into a threat by a
different mechanism, each declared at an honest weight:

| Card | Copies | Weight | Why discounted |
|---|---|---|---|
| Haughty Djinn | 1 | 1.0 | Reads the graveyard count; is the count |
| Tolarian Terror | 2 | 1.0 | Cost falls with the count |
| Electrostatic Infantry | 2 | 0.9 | Reads the *cast* stream, not the yard — gains nothing from cards already there |
| Frostfist Strider | 1 | 0.7 | 4/4 Ward {2}, but no evasion and no count clause |

Six copies, effective 5.5, assembly probability 0.85.

### THE SAGA THAT PAYS FOR ITSELF, AND THE ONE THAT COSTS YOU

Two Sagas do opposite things to the resource.

**Founding the Third Path** is mostly upside — chapter I casts one of the 10 MV-1-or-2 instants and
sorceries free, chapter II mills four. But chapter III reads "**Exile** target instant or sorcery
card from your graveyard. Copy it." Exiling permanently removes a point of Djinn power and adds
{1} back to the Terror's cost. On a yard modelled at 4-6 cards that is a 17-25% haircut on the
deck's own resource, which is why both copies are declared to the assembly gate at half weight.

**The Phasing of Zhalfir** is the card the self-grill added, and it is the reason this deck no
longer concedes two coverage classes. Chapters I and II each phase out any nonland permanent — the
only maindeckable U/R answer to a resolved artifact or enchantment, a class covering 33 of 247
cube nonlands. Chapter III destroys all creatures, which is a wide-board answer where the list
previously had literally zero. Read ahead lets you cast it starting at chapter III as a one-shot
sweeper, or at chapter I when you want the removal. The cost is real: chapter III kills your board
too, so the default line starts at I.

### WHERE THIS DECK IS ACTUALLY EXPOSED

Two things, both recorded rather than hidden.

**Card advantage.** Zero of the 23 nonland cards are strictly net-positive; six are self-replacing
filtering. The deck does not out-draw anyone — it out-*discounts* them. The fix would be Cosmic
Epiphany, a six-mana sorcery, and it was rejected: it costs a full turn in which the deck does not
interact, and it would consume the rare slot that went to The Phasing of Zhalfir.

**Fliers.** The blocking plan is entirely ground-based — Academy Wall 0/5, two 5/5 Terrors, a 4/4
Strider. Evasion is the cube's largest threat class at 51 cards and 20.7% density. Against it the
deck has Haughty Djinn, four counterspells, two Lightning Strikes and a Firenado. That is real
interaction, but it is thinner than the ground wall suggests.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:1  2:13  3:4  4:1  5:2  7:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.5: Electrostatic Infantry@0.9, Electrostatic Infantry@0.9, Frostfist Strider@0.7) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 14.5: Founding the Third Path@0.5, Founding the Third Path@0.5, Academy Wall@0.5) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 15%  T2 94%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: The Phasing of Zhalfir, Academy Wall
  OK        single_large_threat: The Phasing of Zhalfir, Essence Scatter, Ertai's Scorn, Jaya's Firenado, Impede Momentum
  OK        noncreature_permanents: The Phasing of Zhalfir
  OK        stack: Essence Scatter, Ertai's Scorn
  CONCEDED  graveyard: The cube contains zero graveyard hate in any colour (dossier structural_census), so this is a pool-level absence rather than a colour choice. This deck is itself the cube's graveyard deck; against a mirror, Ertai's Scorn and Essence Scatter answer the payoff on the stack instead of attacking the yard.
```

- Curve and goldfish both returned PASS; no WARN flags to respond to. The goldfish's 15% turn-1 play rate is expected and accepted for a control build whose only one-mana card is a single Flowstone Infusion — the relevant numbers are the 87% keepable rate and 88% three-lands-by-turn-three.
- Assembly reporting note (Challenger F8): deck_checks reports p=0.85 for an effective payoff count of 5.5; an independent hypergeometric at N=40, n=13 puts K=5.5 nearer 0.89. The tool's figure is the conservative one and the gate clears on either reading, so the tool's output is recorded as-is rather than restated.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Thrill of Possibility x2 ('As an additional cost to cast this spell, discard a card. Draw two cards.') converts a surplus land into two cards at instant speed and puts a card in the yard doing it; Impulse x2 ('put one of them into your hand and the rest on the bottom') bottoms three to find action. Tolarian Terror is a flood outlet in reverse — the longer the game runs the cheaper it gets, so late lands are spent on multiple spells per turn rather than sitting idle. |
| screw | mitigation | The curve is 1 card at MV 1 and 13 at MV 2, so a two-land hand interacts from turn 2. Goldfish reports 87% keepable hands and 88% three-lands-by-turn-three off 17 lands, and Impulse digs four deep at two mana. CORRECTED after the grill (Challenger F14): the pre-repair record also claimed Tolarian Terror is 'the least mana-hungry threat in the pool once the yard fills' — that sentence is struck, because under mana screw the yard does not fill and the Terror stays at or near its printed 7. |
| decapitation | mitigation | Haughty Djinn is capped at 1 copy by rarity, so the list deliberately does not depend on it: the payoff cluster is 6 copies across four names, and 3 of those 6 (Tolarian Terror x2, Frostfist Strider) carry Ward {2}, which taxes targeted removal by two mana every time. Electrostatic Infantry x2 is the copy that survives a spell-light draw, because its +1/+1 counters are permanent rather than a read off a yard that can be emptied. Assembly probability across the cluster is 0.85 by turn 6. |
| gas-out | accepted | CORRECTED after the grill (Challenger F3): this was previously filed as a mitigation, but the argument it rested on — that this deck's threats get cheaper rather than its hand getting bigger — answers a mana problem, not a card problem, and the named cards do not support a card-advantage claim. The honest ledger against this list is 0 of 23 nonland cards strictly net-positive and 6 of 23 self-replacing or filtering (Impulse x2, Thrill of Possibility x2, Founding the Third Path x2). The exposure is accepted. Mitigating means Cosmic Epiphany, a 6-mana sorcery: it costs a full turn in which the deck does not interact — which is the deck's entire defence — and it consumes the last of the 5 rare/mythic slots, which went instead to The Phasing of Zhalfir, the only card in the colours that answers a resolved artifact or enchantment at all. Trading the deck's only answer to 33 of 247 cube nonlands for a draw spell is a worse deck. |
| raced | mitigation | Against the cube's fastest ground clocks the deck blocks rather than races: Academy Wall (0/5 defender), Tolarian Terror x2 (5/5) and Frostfist Strider (4/4 with an ETB that taps and stuns an attacker) brick the ground, backed by 9 interaction slots. QUALIFIED after the grill (Challenger F13): that wall is entirely ground-based, and evasion is the cube's largest threat class at 51 cards (20.7% density). Against fliers the answers are Haughty Djinn (Flying) plus Lightning Strike x2, Jaya's Firenado, four counterspells and The Phasing of Zhalfir — real, but thinner than the ground plan. The sideboard adds The Elder Dragon War, whose chapter I sweeps for 2. |
| disruption-fizzle | accepted | The critical turn is a single large body resolving, and a counterspell on it is a real setback — Ward {2} taxes but does not stop a counter, since ward triggers on being targeted, not on being countered. The list carries no protection spell for that turn. Mitigating would mean maindecking Shore Up in place of an instant that answers something, and this deck's answers are also its threat's size — cutting one costs a point of Djinn power and a {1} of Terror discount permanently, to protect a turn that recurs six times across the payoff cluster's 6 copies. Redundancy is the chosen substitute for protection. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Vohar, Vodalian Desecrator | {U}{B} — the deterministic splash filter surfaced it (Engine/Outlet, Spellslinger + Graveyard clusters) and its sacrifice mode recasts a spell from the yard, but best_mode([U,R],[]) returns None: it needs a black pip at cast time, and 2-3 black sources would have to be Contaminated Aquifers that enter tapped, which a deck holding up {1}{U}{U} from turn 3 cannot afford. |
| Rona, Sheoldred's Faithful | {1}{U}{B}{B} — the second splash candidate; a double off-colour pip is unreachable on the 2-3 sources a splash allows. |
| Cosmic Epiphany | 'Draw cards equal to the number of instant and sorcery cards in your graveyard' at {4}{U}{U}. Genuinely on-pipeline, but it is a rare against a budget already at 4 of 5, and a 6-mana draw spell does not advance a turn-6 clock. |
| Sphinx of Clear Skies | Mythic 5/5 flier ward {2}; its Domain trigger scales with basic land types and this deck runs two, and it would spend the last rare slot on a finisher the deck already has at six copies. |
| Silver Scrutiny | 'Draw X cards', flash at X<=3. A rare, and at X>=3 it is a 5-mana play; the budget went to The Elder Dragon War and Aether Channeler, which answer threat classes this deck otherwise cannot. |
| Djinn of the Fountain | 4/4 flier with cast-trigger modes, but {4}{U}{U} is 6 mana — it arrives on the thesis turn rather than before it, and it does not scale with the graveyard count. |
| Talas Lookout | 3/2 flier that digs and mills one on death — on-theme, but toughness 2 means it dies to The Elder Dragon War's chapter I, the sideboard's anti-aggro sweeper. Note the Phase 9 repair narrowed that asymmetry anyway by adding Electrostatic Infantry (toughness 2) to the maindeck, so the Saga is now boarded alongside cutting the Infantry rather than as a strictly one-sided effect. |
| Coral Colony | '{1}{U}, {T}: Target player mills X cards, where X is the number of creatures you control with defender.' A real self-mill engine, but this list runs 1 defender (Academy Wall), so X is 1 or 2 — two mana per point of graveyard count is slower than simply casting a spell. |
| Micromancer | Tutors an instant or sorcery with mana value 1; after the Phase 9 repair this list runs exactly 1 such card (Flowstone Infusion), so the search finds one specific card and the 3/3 body costs 4 mana. |
| Goblin Picker | '{R}, {T}, Discard a card: Draw a card' fills the yard repeatably, but a 2/2 body with no defender text does not survive the aggro the deck must brick, and the ability costs a card each activation. |
| Najal, the Storm Runner | 'Whenever Najal attacks, you may pay {2}...copy it' at {2}{U}{U}{R} — 5 mana, a triple-pip cost in a 6-red-source manabase, and its copy trigger requires attacking, which a controller does late and reluctantly. |
| Negate — maindeck-excluded, boarded | Cut from the maindeck in favour of Ertai's Scorn x2, which counters noncreature spells AND creature spells for the same or less mana; Negate returns from the board at 2 copies against sagas and sweepers. |
| Twinferno | Its copy mode requires a follow-up spell the same turn and its double-strike mode needs an attacking creature; a deck with 7 creatures and a reactive posture supplies neither reliably. |
| Shore Up | Protection for one mana, but this deck's finishers already carry Ward {2} on 3 of the 6 payoff copies (Tolarian Terror x2, Frostfist Strider), which taxes removal without spending a card. |
| Balmor, Battlemage Captain | Path A's payoff; its team pump wants a wide board and this list runs 7 creatures across 40 cards, most of them arriving after turn 4. |
| Vesuvan Duplimancy | Its trigger needs spells targeting a single artifact or creature you control; 4 of this list's 14 instants and sorceries can do that, and it is a mythic against a full rare budget. |
| Volshe Tideturner | '{T}: Add {U}. Spend this mana only to cast an instant or sorcery spell or a kicked spell.' Real acceleration, but a 1/3 that must survive and tap is a poor use of a slot in a deck whose spells are mostly held up at instant speed anyway. |
| Crystal Grotto | Its untapped tap produces {C} and coloured mana costs an extra {1}; a deck that must hold up {1}{U}{U} for Ertai's Scorn cannot spend that surcharge. |
| Contaminated Aquifer | Would only be needed for the declined black splash; without Vohar or Rona it is a tapped land producing an unused colour. |
| Ghitu Amplifier / Phoenix Chick | Path A's two-mana bodies. Ghitu Amplifier's +2/+0 lasts only until end of turn and Phoenix Chick is a 1/1 — neither survives the ground stall this build wins from, and neither reads the graveyard count. |
| Electrostatic Infantry — ADDED at Phase 9 | Originally grouped with Path A's cards and excluded. The self-grill overturned that: 'Whenever you cast an instant or sorcery spell, put a +1/+1 counter on this creature' fires on the same 13-of-23 spell denominator as Haughty Djinn and Tolarian Terror, at uncommon rarity and zero rare cost, and its counters are permanent rather than a read off a yard that can be emptied. Now in the mainboard at 2 copies. |
| The Phasing of Zhalfir — ADDED at Phase 9 | Not considered during the build. The grill's absence audit surfaced it: chapters I and II phase out any nonland permanent — the only maindeckable U/R answer to a resolved artifact or enchantment (33 of 247 cube nonlands) — and chapter III destroys all creatures, a wide-board answer the list otherwise lacked entirely. It converted two coverage concessions into named answers using the previously unspent rare slot. |
| Timely Interference — considered for the sideboard, then cut | Boarded as anti-aggro during the build, then cut at Phase 9: '-1/-0 until end of turn' kills nothing at any toughness and prevents one damage, and the kicked mode forces a block, which is offensive tech rather than defence. The slots went to Fires of Victory x2. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 18 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.55 adj [MV 2.91 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  R  demand  28.6%  prod  35.3%  gap  -6.7pp  [OK]
  U  demand  71.4%  prod  82.4%  gap -11.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2      PASS — no name exceeds 2 copies (basics exempt).
rares_mythics_max_1          PASS — Haughty Djinn 1, Shivan Reef 1, The Phasing of Zhalfir 1, The Elder Dragon War 1.
rare_mythic_budget_5         PASS — 4 of 5 used (Haughty Djinn, Shivan Reef and The Phasing of Zhalfir mainboard; The Elder Dragon War sideboard).
all_cards_in_cube            PASS — every name matched by exact string against the working pool cache.
colour_usability             PASS — effective_cost.best_mode(card, ['U','R'], []) returned non-None for every nonland card; no off-identity inclusions.
splash_cap                   PASS — the deterministic filter offered a black splash (Vohar, Rona); it was declined, so splash_colors is empty and 0 cards are splashed.
```
