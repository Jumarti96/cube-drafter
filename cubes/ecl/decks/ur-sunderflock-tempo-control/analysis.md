---
deck_name: "ur-sunderflock-tempo-control"
cube_id: "ecl"
cube_slug: "ecl"
colors: "UR"
format: "40-card"
built_at: "2026-08-09T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  8x Island                 
  5x Mountain               
  2x Eclipsed Realms        taps for {C}; any colour restricted to the chosen type (Elemental)
  2x Molten Tributary       UR dual, enters tapped
  1x Steam Vents            UR dual, untapped for 2 life
```

### CREATURES (12)

```
CMC  Card                                     Qty   Color  Role                       Rar
  2  Flamebraider                             x1    R      engine                     U
  2  Summit Sentinel                          x2    U      blocker                    C
  3  Eclipsed Flamekin                        x2    UR     blocker                    U
  4  Tanufel Rimespeaker                      x2    U      engine                     U
  5  Stratosoarer                             x2    U      blocker                    C
  6  Kulrath Zealot                           x2    R      threat                     C
  9  Sunderflock                              x1    U      finisher                   R
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                                     Qty   Color  Role                       Rar
  1  Cinder Strike                            x1    R      interaction                C
  1  Spell Snare                              x2    U      interaction                U
  2  Sear                                     x2    R      interaction                U
  4  Feed the Flames                          x1    R      interaction                C
  4  Glen Elendra's Answer                    x1    U      interaction                M
  4  Temporal Cleansing                       x2    U      interaction                C
  5  Ashling's Command                        x1    UR     interaction                R
```

## SIDEBOARD (10)

```
Card                                     Qty   Color  Role / When to board in                                     Rar
Rooftop Percher                          x2    C      Against any graveyard deck                                  C
Giantfall                                x2    R      Against artifacts (11 in the cube; one of only 4 artifact   U
Tweeze                                   x2    R      Against creature decks that go wider than the mainboard's   C
Run Away Together                        x2    U      Against auras and equipment, where returning the enchanted  C
Harmonized Crescendo                     x1    U      Against grindy decks that go long                           R
Thirst for Identity                      x1    U      When the matchup wants to dig for the single Sunderflock    U
```

## ANALYSIS

### DECK IDENTITY

A UR control deck built around one line: every creature it plays is an Elemental, so when Sunderflock arrives its 'return all non-Elemental creatures to their owners' hands' is entirely one-sided - the opponent's board goes to hand and this deck's twelve bodies stay. Ten pieces of interaction and six Elemental walls hold the early turns, and Tanufel Rimespeaker turns the deck's own top end into cards. Sunderflock's mana value 9 is nominal because its cost falls by the greatest mana value among Elementals you control, and the deck deliberately carries Kulrath Zealot at 6 and Stratosoarer at 5 to supply that number - behind a Zealot it costs {1}{U}{U}. The sweep is a tempo reset, not removal: the opponent recasts, so the deck converts immediately, swinging with a 5/5 flier alongside a board that survived.

One line defines this deck, and it is a deckbuilding constraint rather than a synergy: **every creature
in the mainboard is an Elemental — 12 of 12.** Sunderflock reads "return all non-Elemental creatures to their
owners' hands," and that clause does not care who controls them. A single off-tribe creature would make the
finisher symmetric, so the whole creature suite was chosen under that rule.

That constraint has a real price, and it is worth seeing what it cost. These are cards this deck would obviously
want and structurally cannot play:

| Card excluded | Why it would be good | Why it can't be here |
|---|---|---|
| Glen Elendra Guardian | 3/4 flash flier that counters a noncreature spell | Faerie — bounced by your own Sunderflock |
| Disruptor of Currents | 3/3 flash convoke, bounces any nonland permanent | Merfolk |
| Champions of the Shoal | 4/6 that taps and stuns on entry and on becoming tapped | Merfolk |
| Spinerock Tyrant | 6/6 flier that copies your single-target spells | Dragon |
| Loch Mare | 4/5 for two that converts counters into cards | Horse Serpent |

### The reduction takes the greatest value, not the sum

Sunderflock "costs {X} less to cast, where X is the greatest mana value among Elementals you control." Four
two-drops do not reduce it by eight — they reduce it by two. The Step-0 judge caught this build reasoning as if
the discount were cumulative, so the list carries the two largest Elementals in the colours *specifically* to be
that number:

- Kulrath Zealot (mana value 6) → Sunderflock costs **{1}{U}{U}**
- Stratosoarer (mana value 5) → **{2}{U}{U}**
- Nothing bigger than a three-drop wall → **{4}{U}{U}**

The `{U}{U}` is a floor no reduction touches, which is why the manabase is Island-heavy at 8 Islands to 5
Mountains — the bluest of the three decks.

### The sweep is a reset, not removal

Bouncing a creature gives it back. The deck's answer is that it never needed the sweep to be permanent: when
Sunderflock resolves, **0 of this deck's 12 bodies leave** while the opponent's board goes to hand and they
spend turns re-deploying. A Sunderflock plus one Kulrath Zealot is 11 power, and Stratosoarer's "target creature
gains flying until end of turn" can put the 6/5 into the air over a rebuilt ground. The counterspells are worth
most on exactly those rebuild turns, pointed at the recast rather than at the original development.

### What the self-grill changed

The grill caught a genuinely dishonest piece of reasoning. The original `decapitation` entry accepted having no
second sweeper, claiming the cube's only two were unusable — but Ashling's Command costs {3}{U}{R}, which is
squarely in these colours, and I had a rare slot sitting unused. It is now maindecked, and its "deals 2 damage to
each creature target player controls" mode is a second, one-sided board answer; its copy mode on a Kulrath Zealot
even manufactures a second mana-value-6 Elemental for the reduction. The grill also found that Temporal Cleansing
— the only card here that answers a permanent regardless of size or type, and the only enchantment answer
available in U or R anywhere in this cube — was at one copy when it is a common and the second was free.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:3  2:5  3:2  4:6  5:3  6:2  9:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.3: Sunderflock@0.7, Kulrath Zealot@0.8, Kulrath Zealot@0.8) → p=0.82 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.4: Stratosoarer@0.9, Stratosoarer@0.9, Kulrath Zealot@0.8, Kulrath Zealot@0.8) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 78% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 49%  T2 87%  T3 95%
Coverage:  [PASS]
  OK        wide_boards: Sunderflock, Glen Elendra's Answer, Ashling's Command
  OK        single_large_threat: Feed the Flames, Sear, Cinder Strike, Temporal Cleansing, Sunderflock
  OK        noncreature_permanents: Temporal Cleansing
  OK        stack: Spell Snare, Glen Elendra's Answer
  CONCEDED  graveyard: No graveyard answer exists in U or R in this cube; the dossier's own probe finds all graveyard-relevant answers outside these colours. Rooftop Percher comes in from the sideboard, and because Changeling makes it an Elemental it survives the deck's own Sunderflock sweep.
```

- curve PASS: MV distribution over the 22 nonland cards is 1:3 2:5 3:2 4:6 5:3 6:2 9:1 - a genuine control curve with three one-drops and five two-drops.

- assembly initially FAILED and was repaired. The first list had 4 payoff copies (effective 3.5) for p=0.75 at a 0.75 floor. The repair added a second Kulrath Zealot and cut Summit Sentinel; payoff is now 5 copies, effective 4.3, p=0.82. The five payoff copies are Sunderflock (weighted 0.7), Kulrath Zealot x2 (0.8 each) and Stratosoarer x2 (undiscounted) - named explicitly so the figure is reproducible from the list, which the Phase 9 Challenger correctly noted it previously was not.

- coverage initially FAILED on a phantom card - the declaration named Swat Away under single_large_threat and Swat Away is not in this mainboard. Corrected to the cards actually present. The class was always covered; the declaration was wrong.

- goldfish WARN (keepable 78%, threshold 80%). This check PASSED at 81% before Phase 9 and regressed when the repairs traded two cheap cards (Wild Unraveling at mana value 2, a Kulrath Mystic at 3) for two expensive ones (a second Temporal Cleansing at 4, Ashling's Command at 5), which the BLOCKING findings required. I measured twelve alternative 22-nonland configurations to recover it. Three reached 80%, and each cost something a gate depends on: two cut a Stratosoarer, which is simultaneously an assembly payoff copy and a Sunderflock cost-reducer, and the third cut Feed the Flames, the only 5-damage exile removal in the list. The configuration adopted (Summit Sentinel x2 in, Unexpected Assistance and the last Kulrath Mystic out) recovers 78% from 75% while cutting only cards the Challenger itself identified as the weakest - Kulrath Mystic's vigilance and +2/+0 are both no-ops on defence, which is the role it was filling. 3 lands by turn 3 is 92% and a turn-2 play is 87%.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Unexpected Assistance was cut in the Phase 9 repair, so the flood answer is: Tanufel Rimespeaker x2 draw off 12 of the 22 nonland copies; Kulrath Zealot x2 exile the top card on entry and can be played from exile; Ashling's Command's 'Target player draws two cards' mode converts a flooded turn into cards at instant speed; and Summit Sentinel x2 replace themselves when they die. Eclipsed Realms taps for {C} unconditionally so no land is ever colour-dead. Note what basic landcycling is NOT: it searches a basic into your HAND, converting a spell into a land, which is screw insurance and is strictly negative under flood - it is listed under screw below, not here. |
| screw | mitigation | Four of the 22 nonland cards are basic landcyclers (Stratosoarer x2 at {1}{U}, Kulrath Zealot x2 at {1}{R}) searching a pool of 13 basics, which is the most robust screw insurance of the three decks. Eclipsed Flamekin x2 look four cards deep and 16 of the 18 lands are a legal Island-or-Mountain reveal. Three one-mana answers (Spell Snare x2, Cinder Strike) mean a two-land hand still interacts. |
| decapitation | mitigation | Sunderflock is a single copy and will be answered on sight, so the deck carries a second board-resetting effect rather than accepting the risk. Correction to an earlier version of this record, which claimed the cube's only two sweepers were unusable here: that was false in both halves. Ashling's Command costs {3}{U}{R} - squarely in this deck's colours - and its 'deals 2 damage to each creature target player controls' mode is one-sided; it is now in the mainboard in the fifth and last rare slot. Soul Immolation is likewise one-sided ('deals X damage to each opponent and each creature they control'); only its blight cost touches your own board. Beyond the second sweeper, the deck is built to win without Sunderflock at all: two 6/5 Kulrath Zealots and two 3/5 Stratosoarers behind 10 interaction spells are a real clock, and Ashling's Command's other mode copies a Kulrath Zealot to make a second mana-value-6 Elemental - which is itself the maximal Sunderflock cost reduction if the finisher is still to come. |
| gas-out | mitigation | Tanufel Rimespeaker x2 draw on 12 of the 22 nonland copies; Kulrath Zealot x2 exile-and-play the top card on entry; Summit Sentinel x2 'When this creature dies, draw a card' means the deck's cheapest blockers trade without costing a card; Ashling's Command can simply be a 'Target player draws two cards' at instant speed. Harmonized Crescendo is in the SIDEBOARD, not the mainboard, and is named here only as the boarded-in refuel for long matchups. |
| raced | mitigation | This is the one deck of the three built to survive the cube's 41 evasive cards (16% of the pool). Three one-mana interactions (Spell Snare x2 and Cinder Strike - the last is a Shock unless a creature is available to blight, so it is a cheap interaction rather than a premium answer on turn 1), plus four walls with toughness 4 or greater (Eclipsed Flamekin x2 at 1/4, Summit Sentinel x2 at 1/3 that replace themselves) and two 3/5 fliers in Stratosoarer x2 mean the ground and the air are both contested from turn 2. The goldfish check confirms a turn-1 play 49% of the time and a turn-2 play 87%. |
| disruption-fizzle | mitigation | The critical turn is a single Sunderflock resolving. If it is countered the deck does not fold, because the sweep was never the only win condition — 12 Elemental bodies including two 6/5s remain, and Glen Elendra's Answer ('This spell can't be countered') is specifically the card held for the turn the opponent tries to interact with the finisher. If Sunderflock is instead removed after it resolves, the sweep has already happened and the board it left behind is what wins. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Glen Elendra Guardian | A rare 3/4 flash flier that counters a noncreature spell — an excellent control card that this deck cannot play, because it is a Faerie and Sunderflock's 'return all non-Elemental creatures' would bounce it off the deck's own finisher. |
| Disruptor of Currents | Rare 3/3 flash convoke with 'return up to one other target nonland permanent' — same objection: a Merfolk, so the deck's own Sunderflock returns it. |
| Champions of the Shoal | Rare 4/6 that taps and stun-counters on entry and on becoming tapped — a superb blocker, but a Merfolk and therefore anti-synergistic with the finisher, and its behold cost wants a Merfolk this deck does not run. |
| Spinerock Tyrant | Mythic 6/6 flier copying single-target instants and sorceries — a genuine control finisher, but a Dragon, so Sunderflock bounces it; it would also spend a rare slot the finisher package needs. |
| Loch Mare | Mythic 4/5 for two that converts -1/-1 counters into cards and stun effects — but a Horse Serpent, bounced by the deck's own Sunderflock, and a rare slot. |
| Hexing Squelcher | Rare granting 'Spells you control can't be countered' and ward — protection for the top end, but a Goblin, so Sunderflock returns it, and it costs a rare slot. |
| Soul Immolation | Mythic 'blight X... deals X damage to each opponent and each creature they control' — X is capped by the greatest toughness among YOUR creatures and the counters land on your own blockers, which is the opposite of what a control deck wants from a sweeper. |
| End-Blaze Epiphany | '{X}{R}' removal with an impulse rider; flexible, but it would spend a rare slot on an effect Sear and Feed the Flames already cover at fixed rates. |
| Boulder Dash | 'deals 2 damage to any target and 1 damage to any other target' — splitting damage is worse than Sear's 4 to one target against this cube's creature sizes. |
| Goatnap | Threaten-style theft; a tempo-positive card for an aggressive deck, but a control deck has no attack step to convert the stolen creature into damage. |
| Noggle the Mind | 'Enchanted creature loses all abilities and is a colorless Noggle with base power and toughness 1/1' — real answer to a single large threat, but it leaves the body on the battlefield, where Sunderflock would then bounce it back to be recast. |
| Blossombind | Tap-down aura; it neutralizes an attacker but does not answer it, and the opponent can rebuild around it. |
| Twinflame Travelers | Doubling Elemental triggers is powerful, but this build's Elementals are mostly blockers whose triggers are small; the doubler is the payoff of a different pipeline in this cube. |
| Champion of the Path | The payoff of a different pipeline — it converts Elementals entering into damage, which a control deck built on answers rather than bodies cannot supply at volume. |
| Kindle the Inner Flame | Copying a creature is a proactive, board-dependent effect; from behind on board, which is where a control deck lives, it does nothing. |
| Springleaf Drum | Requires an untapped creature to tap, and a control deck wants its creatures untapped as blockers. |
| Explosive Prodigy | Vivid caps at 2 damage in a two-colour deck, on a 1/1 that blocks nothing — Cinder Strike deals the same damage for one mana without a body that dies. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.59   Ramp cards: 5   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.62 adj [MV 3.59 vs 2.5, 5 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  R  demand  34.8%  prod  50.0%  gap -15.2pp  [OK]
  U  demand  65.2%  prod  66.7%  gap  -1.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                cube_mainboard — every card is in cubes/ecl mainboard.csv (277 unique cards)
copy_limits:         PASS — no common or uncommon above 2 copies, no rare or mythic above 1. Basic lands (Island x8, Mountain x5) are format-supplied and exempt.
rare_mythic_cap:     PASS - exactly 5 of 5 used: Sunderflock, Glen Elendra's Answer, Ashling's Command and Steam Vents in the mainboard, Harmonized Crescendo in the sideboard. The fifth slot, left unused in the pre-grill version, was spent on Ashling's Command to repair the decapitation failure mode.
colour_identity:     PASS — every nonland card is usable in {U, R} via effective_cost.best_mode; no splash.
deck_size:           PASS — 40 mainboard (22 nonland + 18 lands), 10 sideboard.
```
