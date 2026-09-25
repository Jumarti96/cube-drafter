---
deck_name: "wb-cleric-walls"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-19T20:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x7   Plains                   basic
x2   Sunlit Marsh             WB dual, enters tapped
x7   Swamp                    basic
x1   Caves of Koilos          WB dual, untapped, 1 damage per colored tap
```

### CREATURES (17)

```
CMC  Card                            Qty   Color  Role                       Rar
  1  Clockwork Drawbridge           x2    W      Enabler                    C
  1  Walking Bulwark                x2    C      Payoff                     U
  2  Blight Pile                    x2    B      Payoff                     U
  2  Elas il-Kor, Sadistic Pilgrim  x1    WB     Payoff                     U
  2  Phyrexian Missionary           x2    W      Enabler                    U
  3  Anointed Peacekeeper           x1    W      Interaction                R
  3  Gibbering Barricade            x2    B      Engine                     C
  4  Sheoldred, the Apocalypse      x1    B      Threat                     M
  4  Shield-Wall Sentinel           x2    C      Engine                     C
  4  Wingmantle Chaplain            x2    W      Payoff                     U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                            Qty   Color  Role                       Rar
  1  Cut Down                       x2    B      Interaction                U
  2  Destroy Evil                   x2    W      Interaction                C
  2  Take Up the Shield             x1    W      Protection                 C
```

### OTHER SPELLS (1)

```
CMC  Card                            Qty   Color  Role                       Rar
  3  Citizen's Arrest               x1    W      Interaction                C
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                                Rar
Knight of Dusk's Shadow         x2    B      Interaction - Against the 22-card, 8.9%-density lifega U
      Against the 22-card, 8.9%-density lifegain class. This deck's entire clock is incremental life loss of 3-7 per turn; an opponent gaining 4-6 a turn does not slow it down, it turns it off. 'Your opponents can't gain life' is the sharpest card in this board.
Pilfer                          x2    B      Interaction - Against control and combo. WB has zero c C
      Against control and combo. WB has zero counterspells in this pool, so the stack class is conceded; stripping the key card before it is cast is the only proactive answer available.
Extinguish the Light            x2    B      Interaction - Against the creatures that fall between  C
      Against the creatures that fall between Cut Down (total power+toughness 5 or less) and Destroy Evil (toughness 4 or greater) - a 4/3 is missed by both. That gap is the card's whole job; the mainboard already answers planeswalkers via Citizen's Arrest.
Prayer of Binding               x2    W      Interaction - Against artifacts - a 15-card, 6.1%-dens U
      Against artifacts - a 15-card, 6.1%-density class that this mainboard cannot touch at all (Destroy Evil answers enchantments, Citizen's Arrest creatures and planeswalkers). 'exile up to one target nonland permanent' is the only WB answer of any kind, and every card the cube offers for artifacts otherwise is green or red.
Serra Paragon                   x1    W      Engine - Against sweepers and removal-heavy decks - th M
      Against sweepers and removal-heavy decks - the post-wipe rebuild. Its 'permanent spell with mana value 3 or less' clause recasts 7 of this mainboard's permanent names from the graveyard (Blight Pile MV2, Clockwork Drawbridge MV1, Walking Bulwark MV1, Elas il-Kor MV2, Phyrexian Missionary MV2, Citizen's Arrest MV3, Gibbering Barricade MV3) but NOT Wingmantle Chaplain or Shield-Wall Sentinel, both MV4.
Serra Redeemer                  x1    W      Payoff - Against decks that go wide or attack on the g R
      Against decks that go wide or attack on the ground. 'Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature' applies to 10 of the 12 defender bodies (every one except Blight Pile, printed 3/3) plus every 1/1 Bird token. A 0/3 wall becomes a 2/5, which under Walking Bulwark's toughness-assignment clause attacks for 5 instead of 3. It is also a flier, so it blocks the 20.6% evasion class.
```

## ANALYSIS

### DECK IDENTITY

A WB Defenders control deck that kills without ever needing to win a combat. It runs all 12 Defender bodies that W/B can legally supply - six W/B-legal defender cards at two copies each is the ceiling in these colours - and Blight Pile converts that count directly into life loss: '{2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control.' Wingmantle Chaplain turns the same denominator into 1/1 flying Birds, which are the deck's only evasive damage and its only flying blockers, and Walking Bulwark can send a Defender in for its toughness instead of its power when the drain alone is too slow. Sheoldred, the Apocalypse is a second clock that needs no defenders at all. Of the three Cleric builds this one honours the constraint least: only Wingmantle Chaplain is both a Cleric and a Defender, so the deck runs 6 Cleric cards where the kindred build runs 11.


**Read this first: this is the Cleric build that honours the constraint least.** Only one card in the entire 271-card pool is both a Cleric and a Defender - Wingmantle Chaplain - so this deck runs 6 Cleric cards where the kindred build runs 11. That was disclosed up front when the three paths were presented, and it has not been quietly improved since. What the deck offers in exchange is the most mechanically distinctive win condition in the cube.

**The kill, stated as a count.** Blight Pile reads `{2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control.` X is capped by the defender count, and the ceiling is a hard fact about the pool: nine cards in the cube have Defender, six of them are W/B-legal, all six are common or uncommon, so **2 copies each = 12 is the maximum any W/B deck can field**. This deck runs all 12. No card in the pool grants Defender and no card creates a token with Defender, so 12 cannot be raised by any effect.

**The realistic drain curve** (on the play, expected draws at 30% defender density, drain only — no Bird attacks, no second Blight Pile assumed):

| Turn | X | Drain | Cumulative |
|---|---|---|---|
| 4 | 3 | 3 | 3 |
| 5 | 3 | 3 | 6 |
| 6 | 4 | 4 | 10 |
| 7 | 4 | 4 | 14 |
| 8 | 4 | 4 | 18 |
| 9 | 5 | 5 | **23** |

Twenty life is crossed during turn 9 — the stated thesis turn, on the nose. An earlier draft of this analysis claimed "a realistic turn 6-7 board of 5 defenders"; that was one point optimistic and the table above is the corrected version.

**The mistake this build made, and what it cost.** The first draft of the derivation asserted four times that a non-Defender card "shrinks X" (three found in the first grill round, a fourth in the approval round). That is simply false on the oracle text — X counts creatures with defender you control, so adding Sheoldred or Anointed Peacekeeper leaves X at exactly 12. The error was not cosmetic: it was the sole stated reason for benching the deck's two most powerful available cards and for leaving 2 of 5 rare slots unspent. Correcting it maindecked Sheoldred (a second clock needing no defenders at all) and Anointed Peacekeeper (which also raised the Cleric count from 5 to 6), and moved the rare budget to 5 of 5. The real cost of a non-defender card is that it **displaces a slot** — not that it reduces the kill.

**Why Crystal Grotto is in this deck's cut list but the mana base still differs from the other two.** All three builds excluded Crystal Grotto in the end, but for the same reason each time: 21 of these 23 nonlands need a coloured pip, and Grotto's free mode adds only `{C}`. Replacing both copies with basics moved hard sources from 9 W / 9 B to **10 W / 10 B**, improving both the hardest cast (`{1}{W}{W}` Citizen's Arrest) and the every-turn `{2}{B}` activation simultaneously.

**Where this deck is genuinely strong, and genuinely weak.** It is the best of the three against the cube's largest threat class — 51 evasive creatures at 20.6% density — because 12 walls with 38 total toughness hold the ground completely and Wingmantle Chaplain's Birds are the only flying blockers available in these colours anywhere across the three builds. It is also the most sweeper-vulnerable deck imaginable by construction: Drag to the Bottom kills 10 of the 12 defender bodies including both Blight Piles - Blight Pile is printed 3/3, so -3/-3 gets it, and across the whole mainboard only Gibbering Barricade x2 and Sheoldred survive - and Temporary Lockdown exiles 6 of them plus both Blight Piles. Sweepers are the thinnest class in the cube at 6 cards / 2.4%, which is why the answer (Serra Paragon) is boarded rather than maindecked. And the drain outlet itself passes its assembly gate at p=0.76 against a 0.75 threshold — the narrowest margin of the three decks, because Blight Pile is the only card in the pool that converts a defender count into life loss and cannot be made more redundant than 2 copies plus 2 tutors.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (23 nonland):  1:6  2:8  3:4  4:5
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  drain_outlet: 4 copies (effective 3.4: Shield-Wall Sentinel@0.7, Shield-Wall Sentinel@0.7) → p=0.76 (need ≥ 0.75)
  PASS  defender_body: 12 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 74%  T2 97%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Clockwork Drawbridge, Gibbering Barricade, Walking Bulwark, Wingmantle Chaplain, Blight Pile, Shield-Wall Sentinel
  OK        single_large_threat: Citizen's Arrest, Destroy Evil, Clockwork Drawbridge, Elas il-Kor, Sadistic Pilgrim, Sheoldred, the Apocalypse
  OK        noncreature_permanents: Destroy Evil, Citizen's Arrest
  CONCEDED  stack: WB has no counterspell in this pool. This deck runs zero stack interaction and accepts it; every answer here operates after the threat resolves, and Pilfer is boarded to strip a key card proactively instead.
  CONCEDED  graveyard: Verified by oracle-text scan of the full working pool: NO card in this cube disrupts an OPPONENT'S graveyard. Six cards contain 'exile ... graveyard' text (Eerie Soultender, Founding the Third Path, Rivaz of the Claw, Serra Paragon, Valiant Veteran, Vohar) but every one of them exiles its own card as a cost. The class cannot be covered by any deck built from this pool, not just this one.
```

- Curve, assembly, goldfish and coverage all returned PASS both before and after the Phase 9 repair; no WARN flags were raised.

- DISCLOSED THIN MARGIN: the drain_outlet assembly role passes at p=0.76 against a 0.75 threshold - the narrowest margin in any of the three builds. Blight Pile is the only card in the pool that converts a defender count into life loss, so the outlet cannot be made more redundant than 2 copies plus 2 reliability-weighted tutors. Recorded rather than left implicit behind a PASS. Noted per the grill: the harness's assembly model is a with-replacement binomial and is materially MORE pessimistic than the hypergeometric truth (0.84 for the same inputs), so the real margin is wider than the recorded one.

- Slot allocation deviates from the Control bands on all three rows: Threats 34.8% vs 5-10%, Engine 39.1% vs 10-20%, and Interaction 26.1% BELOW the 35-45% floor. All three trace to one structural fact: in this archetype the creature count IS the damage number, and the same bodies do the blocking that interaction would otherwise do. The first draft described the interaction figure as 'at the bottom of the band' when it is below it; corrected.

- DISCLOSED, from the approval round: moving Prayer of Binding x2 to the sideboard to answer the artifact hole left the MAINBOARD with zero artifact answers, where it previously had two, and dropped noncreature_permanents coverage from 7 cards to 3 (Destroy Evil x2 in enchantment mode, Citizen's Arrest x1). The coverage gate still returns PASS, but the honest statement is that the class went from thinly answered to unanswered in the mainboard, and interaction fell to 26.1% - 8.9 points below the Control band floor rather than the 0.2 the first draft implied.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | This deck wants surplus lands more than any of the three: the win condition is an activated ability, so every extra land is another activation. Sinks are Blight Pile x2 at {2}{B} each per turn, Clockwork Drawbridge x2 at {2}{W} to tap a blocker, Gibbering Barricade x2 at {2}{B} to draw a card, and Walking Bulwark x2 at {2} per creature converted into an attacker. A flooded turn 9 casting nothing still activates both Piles for 10 and draws a card. |
| screw | mitigation | 14 of the 23 nonland cards cost 2 or less and 6 cost 1, and the two cheapest (Walking Bulwark {1}, Clockwork Drawbridge {W}) are both defenders that start building X immediately. The goldfish simulation returned 86% keepable hands and 88% on three lands by turn 3 - the best of the three builds. All 10 white and all 10 black sources are hard sources after the Crystal Grotto cut. |
| decapitation | mitigation | Two mitigations, both added in the Phase 9 repair after the grill rejected the original acceptance as resting on a false premise. (1) PROTECTION: Take Up the Shield ('It gains lifelink and indestructible until end of turn') at {1}{W} turns a targeted removal spell aimed at either Blight Pile into a blank. Before the repair, 0 of 23 nonland cards could protect the kill. (2) A SECOND CLOCK: Sheoldred, the Apocalypse's 'Whenever an opponent draws a card, they lose 2 life' is 2 damage per turn that needs no defenders and no Blight Pile at all. The original entry claimed every non-defender finisher 'shrinks X and therefore weakens the plan it insures' - that is false on Blight Pile's oracle text, since X counts creatures with defender and Sheoldred has none. Residual, honestly stated: Blight Pile remains the only card in the pool converting a defender count into life loss, so the PRIMARY kill is still 2 copies deep plus 2 tutors at p=0.76. DISCLOSED MARGIN: protection plus the second clock rests on 2 of 23 cards, p=0.56 of seeing one by turn 9; Take Up the Shield alone is p=0.33. A second copy is legal at no rare cost and would take protection to 0.56 on its own, and it was DECLINED for a stated reason: interaction is already 8.9 points below the Control band floor, and buying protection by cutting removal trades one fragility for another. |
| gas-out | mitigation | Gibbering Barricade x2 is a repeatable draw engine ('{2}{B}, Sacrifice a creature: You gain 1 life and draw a card') with a 5-card non-defender fodder base at p=0.88. Shield-Wall Sentinel x2 replaces itself by tutoring a defender to hand. Phyrexian Missionary x2 kicked for {1}{B} returns a creature card from the graveyard to hand. Sheoldred, the Apocalypse turns each of those draws into 2 life while draining the opponent's own draw step. |
| raced | mitigation | This is the build best positioned against the cube's 51-card, 20.6%-density evasion class, and uniquely so: 12 Defender bodies with 38 total toughness wall the ground completely, and Wingmantle Chaplain's Birds are 1/1 FLIERS - the only flying blockers available in these colours anywhere in the three builds. Clockwork Drawbridge's '{2}{W}, {T}: Tap target creature' removes an attacker before combat. Sheoldred is a 4/5 deathtouch blocker and Phyrexian Missionary x2 are 2/3 lifelink. The deck concedes speed - goldfish turn 9 is the slowest of the three - but it does not concede the race. |
| disruption-fizzle | mitigation | There is no critical turn: the drain accrues 3-5 per activation across many turns rather than in one combo turn, so interaction aimed at any single turn costs one activation, not the plan. No single TARGETED removal spell moves X by more than 1, since the denominator is spread across 6 distinct card names and 12 copies. CORRECTED IN THE GRILL - the first draft said 'no single removal spell' without the word targeted, which its own record falsified: a SWEEPER moves X catastrophically, and this deck is the most sweeper-vulnerable of the three by construction. Drag to the Bottom kills 10 of the 12 defender bodies including both Blight Piles (Blight Pile is printed 3/3 and dies to -3/-3 - the earlier figure of 8 understated this), and Temporary Lockdown exiles 6 of them plus both Blight Piles. Sweepers are a 6-card, 2.4%-density class in this cube - the thinnest threat class there is - and the answer is boarded rather than maindecked: Serra Paragon recasts 7 of this mainboard's permanent names from the graveyard at MV 3 or less. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Temporary Lockdown | RARE, and actively hostile rather than merely unpicked. 'exile each nonland permanent with mana value 2 or less' would exile this deck's own Walking Bulwark x2, Clockwork Drawbridge x2, Blight Pile x2, Elas il-Kor, Phyrexian Missionary x2 and Take Up the Shield - including both copies of the win condition. All three independent sketchers rejected it on this ground. |
| Drag to the Bottom | RARE, and actively hostile. Domain -X/-X with 2 basic land types means X=3, killing every creature with toughness 3 or less. That is 10 of the 12 defender bodies INCLUDING BOTH BLIGHT PILES (printed 3/3); only Gibbering Barricade x2 and Sheoldred survive it across the whole mainboard. It is a card to play AGAINST this deck. |
| Karn's Sylex | MYTHIC, cut. '{X}, {T}, Exile: Destroy each nonland permanent with mana value X or less' - this deck's permanents are the cheapest in any of the three builds, so a symmetric sweeper is worse for it than for almost any opponent. |
| Serra Redeemer (sideboard consideration) | In the sideboard, and the closest call for a mainboard slot. 'Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature' applies to 10 of the 12 defender bodies (all but Blight Pile, printed 3/3) plus every Bird. It turns a 0/3 wall into a 2/5, which under Walking Bulwark attacks for 5 instead of 3. Boarded rather than maindecked because at {3}{W}{W} it is the hardest cast in the pool for this base. |
| Braids, Arisen Nightmare | RARE, cut for the 5-card cap. A second no-mana recurring drain on the same axis as the kill, fed by Bird tokens. It lost the last rare slot to Anointed Peacekeeper, which is a Cleric and therefore also serves the stated brief - a close and partly non-power-based decision. |
| Liliana of the Veil | MYTHIC, cut for the 5-card cap. Notable because as a planeswalker it is literally outside X's definition, so it costs nothing at all on the denominator; its -2 edict is the only answer to a hexproof threat. Purely a budget casualty. |
| Join Forces | The only untap effect castable in W/B in the entire pool - 'Untap up to two target creatures' would give a second Blight Pile activation in a turn, worth 2X extra damage. Cut because a double-activation turn costs {2}{W} + {2}{B} + {2}{B} = 9 mana, which is the deck's own goldfish turn, so it arrives too late to matter. |
| Bone Splinters | Unconditional 1-mana removal covering the exact Cut Down / Destroy Evil gap. Cut because its additional cost sacrifices a creature, and in this deck most creatures are the denominator - it is a fine card in the aristocrats build for exactly the reason it is awkward here. |
| Crystal Grotto | Cut from the land base in the self-grill. 21 of the 23 nonland cards need at least one coloured pip, and Grotto's free mode adds only {C} while its coloured mode costs {1}. Replacing both copies with basics moved hard sources from 9/9 to 10/10, improving both the hardest cast and the every-turn activation. |
| Shadow-Rite Priest | RARE, and the one card that is a payoff in the kindred build and a liability here: its sacrifice ability eats a Cleric, and the only Cleric-Defender in the deck is Wingmantle Chaplain - so activating it would genuinely decrement X. |
| Academy Wall / Coral Colony / Floriferous Vinewall | The three defender cards in the cube that are NOT W/B-legal (two blue, one green). They are the reason the 12-body ceiling is colour-local rather than a property of the cube - a UB or WU defenders deck could field 14-16. |
| Phyrexian Rager | Sideboard consideration, cut during the grill. Its boarding plan was to come in for Wingmantle Chaplain copies, which would have cut the Bird engine that the Gibbering Barricade fodder plan depends on and removed the deck's only flying blockers. |
| Jodah's Codex | Cut. At {3} to activate with 2 basic land types it is a worse draw engine than Gibbering Barricade, which does the same job and is also a body that counts for X. |
| Leyline Binding | RARE, cut. With 2 basic land types it costs {3}{W} - identical to Prayer of Binding, which is uncommon, gains 2 life, and preserves the rare cap. |
| Aron, Benalia's Ruin | Cut on two counts: {W}{W}{B} is a triple-pip cast off 10/10 sources, and its sacrifice ability eats a body, which in this deck usually means a defender. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.20 adj [MV 2.35 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  40.9%  prod  58.8%  gap -17.9pp  [OK]
  W  demand  59.1%  prod  58.8%  gap  +0.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Rule                                                        Result
1a mainboard count == 40  -- got 40                         PASS
1b sideboard count == 10  -- got 10                         PASS
2 every name exists in working pool (exact match)  -- []    PASS
3 copy counts obey card_pool_rules  -- []                   PASS
3b rares+mythics MB+SB <= 5  -- got 5: ['Anointed Peacekeep PASS
4 every nonland usable in core+splash (best_mode)  -- []    PASS
5 no splash colors declared - splash cap vacuous            PASS

card_pool_rules: commons/uncommons max 2, rares/mythics max 1
extra constraint : max 5 rares+mythics across mainboard + sideboard
rares/mythics used (5 of 5): Anointed Peacekeeper, Caves of Koilos, Serra Paragon, Serra Redeemer, Sheoldred, the Apocalypse
```