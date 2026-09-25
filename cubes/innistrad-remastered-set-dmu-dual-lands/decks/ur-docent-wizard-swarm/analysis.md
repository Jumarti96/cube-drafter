---
deck_name: "ur-docent-wizard-swarm"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-08-26T00:26:46Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
6x Island
6x Mountain
2x Molten Tributary   ({T}: Add {U} or {R}.) This land enters tapped.
1x Stormcarved Coast  This land enters tapped unless you control two or more other lands. {T}: Add {U} or {R}.
```

### CREATURES (11)

```
CMC  Card                                       Qty  Color  Role         Rar
  1  Delver of Secrets // Insectile Aberration  x2   C      threat       C
  2  Deranged Assistant                         x2   U      wizard-body  C
  2  Festival Crasher                           x2   R      threat       C
  2  Metallic Mimic                             x1   C      wizard-body  R
  3  Hanweir Garrison                           x1   R      threat       R
  3  Reckless Scholar                           x2   U      wizard-body  C
  5  Docent of Perfection // Final Iteration    x1   C      threat       R
```

### INSTANTS & SORCERIES (14)

```
CMC  Card                Qty  Color  Role         Rar
  1  Ancestral Anger     x1   R      engine       C
  1  Faithless Looting   x2   R      engine       C
  1  Lightning Axe       x2   R      interaction  U
  1  Silent Departure    x2   U      engine       C
  2  Abrade              x2   R      interaction  U
  2  Galvanic Iteration  x1   RU     engine       R
  2  Think Twice         x2   U      engine       C
  5  Seize the Storm     x2   R      threat       C
```

## SIDEBOARD (10)

```
Card                    Qty  Color  Role / When to board in                      Rar
Syncopate               x2   U      vs combo/big-mana; protects the Docent turn  C
Compelling Deterrence   x2   U      vs resolved enchantments (9% of cube)        U
Fiery Temper            x2   R      vs low-toughness aggro; reach to the face    U
Imprisoned in the Moon  x2   U      vs planeswalkers and untouchable creatures   C
Savage Alliance         x2   R      vs go-wide token boards                      U
```

## ANALYSIS

### DECK IDENTITY

A UR spell-count token swarm. Cheap instants and sorceries are the ammunition, not the support: Docent of Perfection makes a 1/1 Wizard for every one of them and flips into a lord that gives Wizards +2/+1 and flying, Festival Crasher grows with each cast, Seize the Storm reads the same spells once they reach the graveyard, and Delver of Secrets flips off them on top of the library. Seven Human Wizard bodies -- Delver, Reckless Scholar, Deranged Assistant and a Metallic Mimic naming Wizard -- let Docent reach its three-Wizard transform without spending a single spell on it, and the Mimic makes every Wizard token enter as a 2/2. Fourteen of the 25 nonland cards are instants or sorceries (56%), and that one number drives every payoff in the list. Honest framing: with three cards at five mana this is the slow end of aggro -- aggro with a midrange top-end -- not the 'most explosive' build its lens name suggests. And in the roughly 65% of games that do not draw the single legal Docent, the deck is a Delver/Festival Crasher clock with Seize the Storm on top rather than a token swarm.

### ONE NUMBER, FOUR PAYOFFS

Fourteen of the 25 nonland cards are instants or sorceries — **56% of the nonland slots, 35% of the
40-card library**. Four different payoffs read that one number, which is why removal and card-draw
are not competing with the threats here; every spell is also a trigger.

| Payoff | What its oracle reads | Against this list |
|---|---|---|
| Docent of Perfection | a 1/1 Wizard per instant/sorcery **cast** | 14 casts; transforms at 3+ Wizards |
| Festival Crasher | +2/+0 per instant/sorcery cast | same 14, at 2 mana |
| Delver of Secrets | an instant/sorcery on top of the library | 35.0% per upkeep → **72.5% flipped by T4** |
| Seize the Storm | instants/sorceries **in the graveyard** + flashback cards in exile | typically 5–8 by turn 6 |

### THE WIZARD COUNT IS A BUILT RESOURCE, NOT A HOPE

Docent of Perfection is a **Creature — Insect Horror**. It is *not itself a Wizard*, so "three or more
Wizards" has to come from somewhere else. Left to its own tokens, Docent must survive three separate
casts before it flips. This build instead runs **seven non-token Wizards**:

- Delver of Secrets ×2 — `Creature — Human Wizard`
- Reckless Scholar ×2 — `Creature — Human Wizard`
- Deranged Assistant ×2 — `Creature — Human Wizard`
- Metallic Mimic ×1 — *"This creature is the chosen type in addition to its other types"* → name Wizard

With one of those already on the battlefield, **two spells** complete the transform instead of three.

Metallic Mimic is the card this build nearly missed. Its other half — *"Each other creature you
control of the chosen type enters with an additional +1/+1 counter on it"* — means every Wizard token
Docent makes thereafter enters as a **2/2 rather than a 1/1**, off a 56% trigger base. It was cut at
the sweep stage on a reason that misread it as an equipment-style single-body buff; the grill caught
that, and it now spends the fifth and final rare slot.

*One caveat I cannot close from the data:* the card cache stores a single type line per double-faced
card, so whether a **flipped** Delver (Insectile Aberration) is still a Wizard is not verifiable here.
The count of seven is computed on unflipped Delvers.

### TWO CARDS THAT LOOK LIKE THEY BELONG AND DO NOT

**Thing in the Ice is a trap in this deck specifically.** Awoken Horror reads *"return all non-Horror
creatures to their owners' hands."* Every token this deck makes is a non-Horror **token** — Docent's
Wizards, Seize the Storm's Elemental, Hanweir Garrison's Humans — so the flip would bounce them and,
being tokens, they would cease to exist. It would also return nine non-token bodies to hand. The
archetype's most famous card is excluded here on its own text; it is deck B's payoff, not this one's.

**Hanweir Garrison's tokens are Humans, not Wizards.** Final Iteration pumps only *"Wizards you
control,"* so Garrison's two tokens per attack get neither +2/+1 nor flying, and they do not count
toward the transform. Garrison is in the deck purely as a three-drop that widens the board with no
graveyard or spell requirement — the only one of those in the colours — and it is credited as nothing
more anywhere in this analysis.

### A NOTE ON GALVANIC ITERATION, PRECISELY

Iteration reads *"When you next cast an instant or sorcery **spell** this turn, **copy** that spell."*
Two things follow that are easy to get wrong: casting Docent does not trigger it (Docent is a
creature), and the copy it makes is **put on the stack, not cast** — so the copy produces no Docent
token. Iteration is one cast plus one doubled effect. It is a good card here; it is not two triggers.

### WHAT THIS DECK ACTUALLY IS

Honest framing: with three cards at five mana, this is the slow end of aggro — aggro with a midrange
top-end, not the "most explosive" build its lens name suggests. And with Docent limited to a single
copy by the rare cap, roughly **65% of games never draw it**; in those games the deck is a
Delver/Festival Crasher clock with Seize the Storm on top rather than a token swarm. The kill does
not depend on Docent, which is why the assembly check still returns P(payoff by turn 7) = 0.88 — but
the *identity* does, and that is worth knowing before you sit down with it.

The deck also has **zero maindeck damage to the face**. Every point must come through the board. In a
race that is the exposure, and the `raced` failure mode accepts it explicitly rather than pretending
otherwise — adding reach would cost the threat density that all four payoffs read.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (25 nonland):  1:9  2:10  3:3  5:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 5.6: Docent of Perfection // Final Iteration@0.5, Delver of Secrets // Insectile Aberration@0.6, Delver of Secrets // Insectile Aberration@0.6, Festival Crasher@0.6, Festival Crasher@0.6, Seize the Storm@0.7, Seize the Storm@0.7, Metallic Mimic@0.6, Hanweir Garrison@0.7) → p=0.88 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 14.8: Reckless Scholar@0.7, Reckless Scholar@0.7, Deranged Assistant@0.7, Deranged Assistant@0.7) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 80%
  play by turn: T1 86%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper -- this deck IS the wide board, and Savage Alliance's 'deals 1 damage to each creature target opponent controls' mode would be symmetric-adjacent here only in that it does not hit our own tokens, so it sits in the sideboard where the matchup calls for it. Maindecking it would cost a threat slot in a 48%-threat aggro deck.
  OK        single_large_threat: Lightning Axe, Abrade, Silent Departure
  OK        noncreature_permanents: Abrade
  CONCEDED  stack: No maindeck counterspells -- an aggro deck taps out on curve every turn and cannot hold up mana. Syncopate x2 is the sideboard answer.
  CONCEDED  graveyard: The cube contains zero graveyard hate (dossier structural_census graveyard_hate = 0), so no answer exists in the pool for any colour to board in.
```

_All four structural checks returned PASS; no WARN flags to respond to._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Seize the Storm's Flashback {6}{R} is a genuine mana sink that makes a second large trampler, and Silent Departure's Flashback {4}{U} and Think Twice's Flashback {2}{U} convert spare mana into a second cast -- which is also a second Docent trigger. Deranged Assistant's '{T}, Mill a card: Add {C}' gives an extra land somewhere to go. The deck runs only 15 lands precisely so flooding is rare. |
| screw | mitigation | 18 of the 25 nonland cards cost 2 or less (curve 1:9, 2:10), and 9 cost exactly 1 -- Faithless Looting {R} x2, Ancestral Anger {R}, Lightning Axe {R} x2, Silent Departure {U} x2, Delver of Secrets {U} x2. A two-land hand casts a threat on turn 1 and a spell on turn 2. Faithless Looting's 'draw two cards, then discard two' digs for the third land, and Deranged Assistant accelerates. The goldfish check reports 80% keepable and an 86% turn-1 play rate; 80% is exactly the threshold floor, which is stated rather than smoothed over. |
| decapitation | mitigation | Docent of Perfection is limited to 1 copy by the rare cap, so the deck was built never to depend on it. SIX further copies read the same instant/sorcery resource in their own oracle text -- Delver of Secrets x2 ('If an instant or sorcery card is revealed this way, transform'), Festival Crasher x2 ('Whenever you cast an instant or sorcery spell, this creature gets +2/+0') and Seize the Storm x2 (its token's P/T reads the graveyard spell count). CORRECTED at Phase 9: an earlier draft said seven and included Hanweir Garrison, whose text is 'Whenever this creature attacks' and contains no spell clause at all -- Garrison is board presence, not spell-count redundancy. The Phase 6b assembly check confirms P(a payoff seen by turn 7) = 0.88 on reliability-weighted copies. Seize the Storm is the specific answer to losing the board: its flashback remakes a trampler whose size has grown, because the spells cast in the meantime are now in the graveyard. |
| gas-out | mitigation | 7 of the 25 nonland cards are cast twice each (Faithless Looting x2, Think Twice x2, Silent Departure x2, Seize the Storm x2 -- 8 copies) plus Galvanic Iteration, so the deck effectively draws 9 extra cards over a long game. Think Twice x2 and Ancestral Anger replace themselves outright, and Reckless Scholar's '{T}: Target player draws a card, then discards a card' is a repeatable filter. Critically, the payoffs convert cards into BOARD rather than needing more cards: one Seize the Storm off a stocked graveyard is a whole threat from a single draw. Stated caveat: Seize the Storm's flashback is {6}{R} and Silent Departure's is {4}{U}, so 'cast twice each' is true but back-loaded on a 15-land deck -- the second casts are turn-6-plus plays, not a smooth curve. |
| raced | accepted | This deck does not stabilise -- it races, and it is the faster deck in most matchups. Against the cube's 58 evasive creatures (20.9%) it has only 4 maindeck removal copies, no lifegain, no maindeck sweeper and no blockers worth the name; Docent's Wizards are 1/1s until Final Iteration flips, or 2/2s with Metallic Mimic out. It also has ZERO maindeck damage to the face -- every point of damage must come through the board, which is the specific exposure in a race. Mitigating any of this would mean cutting threats for blockers, removal or reach, which in a 52%-threat aggro deck directly slows the clock that IS the defence, and would also cut the instant/sorcery density every payoff reads. The trade is refused. The cube's 15 lifegain cards (5.4%) are a second unanswered class for the same reason. |
| disruption-fizzle | mitigation | The board is built incrementally rather than on one critical turn, so a single counterspell or removal spell costs one token or one body, not the game -- Docent makes a Wizard on every cast, and there are 14 casts in the list. Metallic Mimic compounds this: once it has named Wizard, every replacement token arrives as a 2/2. The one genuinely critical card is Docent itself, and Syncopate x2 boards in when the opponent's interaction is the problem. CORRECTION applied at Phase 9: an earlier draft claimed Galvanic Iteration could be held so that 'the turn Docent resolves it also gets two triggers immediately'. That is wrong twice over on the oracle text -- Iteration reads 'When you next cast an instant or sorcery SPELL', and Docent is a creature, so casting Docent does not trigger it at all; and Iteration says 'copy that spell', while a copy put on the stack by an effect is not cast, so it produces no Docent trigger. Galvanic Iteration is one cast and one copied effect, and is credited as nothing more anywhere in this derivation. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Village Messenger // Moonrise Intruder, Hungry Ridgewolf, Runebound Wolf, Ulrich's Kindred, Geier Reach Bandit // Vildin-Pack Alpha, Hanweir Watchkeep // Bane of Hanweir, Conduit of Storms // Conduit of Emrakul, Kruin Outlaw // Terror of Kruin Pass, Smoldering Werewolf // Erupting Dreadwolf | Werewolves transform only 'if no spells were cast last turn'. Docent of Perfection makes a token for every instant or sorcery cast, so this deck casts spells every turn by design -- the werewolf flip condition is the exact inverse of the payoff's. |
| Necroduality, Drunau Corpse Trawler, Cobbled Lancer | Zombie-tribal payoffs. Rise from the Tides does make Zombie tokens, but it is ONE card in the list and its tokens arrive tapped and all at once -- 'Whenever a nontoken Zombie you control enters' (Necroduality) reads nontoken Zombies, of which this deck has zero. The Zombie count is a by-product here, not a resource. |
| Thing in the Ice // Awoken Horror | TRAP in this build, on its own oracle text: Awoken Horror 'returns all non-Horror creatures to their owners' hands'. Every token this deck makes -- Docent's 1/1 Human Wizards, Rise from the Tides' Zombies, Hanweir Garrison's Humans, Seize the Storm's Elemental -- is a non-Horror TOKEN, so the flip bounces them and, being tokens, they cease to exist. The deck's own win condition would destroy its own board. |
| Metallic Mimic | EXCLUSION RETRACTED at Phase 9 -- this card is now in the mainboard. The original Phase 5A reason grouped it with equipment and vehicles that 'buff one body at a time for an equip cost', which is factually wrong on its oracle text: it has no equip cost and its ability is a global static. 'As this creature enters, choose a creature type. This creature is the chosen type in addition to its other types. Each other creature you control of the chosen type enters with an additional +1/+1 counter on it.' Naming Wizard makes it a Wizard for Docent's transform AND makes every Docent token enter as a 2/2. Recorded here rather than silently moved, so the bad reason stays visible. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 15 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 2   Cantrips: 5
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.67 adj [MV 2.12 vs 2.5, 7 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  R  demand  52.0%  prod  60.0%  gap  -8.0pp  [OK]
  U  demand  48.0%  prod  60.0%  gap -12.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS -- verified by Phase 5C check 3 against cube_search.get_max_copies
rares_mythics_max_1_each: PASS -- all four are single copies
max_5_rares_mythics_total: PASS -- exactly 5 of 5: Docent of Perfection // Final Iteration (rare, main), Hanweir Garrison (rare, main), Galvanic Iteration (rare, main), Metallic Mimic (rare, main), Stormcarved Coast (rare, main, land). Zero rares in the sideboard. The fifth slot was unspent until Phase 9, when the Challenger's absence audit showed Metallic Mimic had been excluded on a misreading of its oracle text.
all_cards_from_cube: PASS -- exact-name membership verified against the working pool cache
basics_unlimited: Island 6, Mountain 6 -- format-supplied, exempt
colour_legality: PASS -- every nonland card is on-colour by its printed identity; no alternate-mode admissions
```
