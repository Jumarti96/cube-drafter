---
deck_name: "ur-elemental-copy-burn"
cube_id: "ecl"
cube_slug: "ecl"
colors: "UR"
format: "40-card"
built_at: "2026-08-11T18:09:34Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Eclipsed Realms          Land - restricted fixing (name Elemental)
  2x Molten Tributary         Land - U/R dual, enters tapped
  1x Steam Vents              Land - untapped-capable U/R dual
  5x Island                   Land - basic
  8x Mountain                 Land - basic
```

### CREATURES (15)

```
CMC  Card                     Qty   Color  Role                                                     Rar
  2  Flamebraider             x2    R      Infrastructure - Elemental-restricted ramp               U
  3  Enraged Flamecaster      x2    R      Payoff - redundant reach                                 C
  3  Flaring Cinder           x1    UR     Threat - 3-power Elemental looter                        C
  3  Sting-Slinger            x1    R      Payoff - repeatable reach / flood sink                   U
  4  Champion of the Path     x1    R      Payoff - kill mechanism                                  R
  4  Flamekin Gildweaver      x2    R      Threat - 4-power trample body                            C
  4  Tanufel Rimespeaker      x1    U      Infrastructure - draw on MV4+ casts                      U
  4  Twinflame Travelers      x2    UR     Threat - evasive body / trigger doubler                  U
  5  Omni-Changeling          x2    U      Engine - copy effect                                     U
  6  Kulrath Zealot           x1    R      Threat - 6-power copy target / landcycler                C
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                     Qty   Color  Role                                                     Rar
  2  Boulder Dash             x1    R      Interaction - split removal, face-capable                U
  2  Sear                     x1    R      Interaction - removal                                    U
  3  Tweeze                   x1    R      Interaction - removal, face-capable                      C
  4  Kindle the Inner Flame   x2    R      Engine - copy effect                                     U
  5  Ashling's Command        x1    UR     Engine - copy effect / flexible                          R
```

### OTHER SPELLS (1)

```
CMC  Card                     Qty   Color  Role                                                     Rar
  5  Collective Inferno       x1    R      Payoff - damage doubler                                  R
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                                                                                                                        Rar
Giantfall                x2    R      Artifact removal / power-based fight / vs. artifact decks (11 artifacts in cube); mode 1 stays live otherwise                                                  U
Hexing Squelcher         x1    R      Uncounterable + ward for the whole board / vs. blue counterspell decks and removal-heavy decks                                                                 R
Feed the Flames          x1    R      5 damage + exile / vs. large or recursive creatures that Sear's 4 damage misses                                                                                C
Swat Away                x2    U      Tempo answer to a spell or creature / vs. single large threats and when being raced - costs {U}{U} when a creature is attacking you                            U
Temporal Cleansing       x2    U      Catch-all nonland permanent answer / vs. enchantments and resolved bombs (21 enchantments; no U or R enchantment answer exists in this pool)                   C
Rooftop Percher          x2    C      Graveyard hate on a changeling (= Elemental) 3/3 flier / vs. graveyard decks (39 GY-interaction cards in cube); changeling keeps it on-thesis after boarding   C
```

## ANALYSIS

### DECK IDENTITY

U/R Elemental copy-burn. Champion of the Path turns every Elemental that enters the battlefield into face damage equal to that creature's power, so this deck's copy effects are not card advantage — they are direct damage no blocker can intercept. Twinflame Travelers makes those triggers fire an extra time and Collective Inferno doubles the damage of every Elemental source, so the same board produces multiples of its printed damage. Enraged Flamecaster and Sting-Slinger supply board-independent reach when the copy engine has not assembled, and Kindle the Inner Flame's hasty tokens close in combat.

### HOW THE DAMAGE MULTIPLIES

Champion of the Path reads "Whenever another Elemental you control enters, it deals damage equal to its power to each opponent." The number that matters is the *entering* creature's power, not Champion's. That single fact drove the whole build and killed the low-curve version of this deck outright during Step-0 judging: a deck of 1- and 2-power Elementals converts each copy into 1-2 damage, which is not a clock.

With all three multipliers online, one Kindle the Inner Flame copying Champion of the Path itself (7 power, and Champion is not legendary, so copying it is legal) reads:

| Layer | Oracle text | Damage |
|---|---|---|
| Champion trigger alone | "deals damage equal to its power to each opponent" | 7 |
| + Twinflame Travelers | "it triggers an additional time" | 14 |
| + Collective Inferno (name Elemental) | "Double all damage that sources you control of the chosen type would deal" | 28 |

Collective Inferno doubles rather than adding a trigger, because the damage source under Champion's trigger is the entering Elemental itself. Both multipliers apply to the same event.

### THE COUNTS THIS DECK RUNS ON

Every count-dependent inclusion, recomputed against the final 22-card nonland list:

| Card | The clause | Count | Verdict |
|---|---|---|---|
| Enraged Flamecaster x2 | "Whenever you cast a spell with mana value 4 or greater" | 13 of 22 nonland | INCLUDE |
| Tanufel Rimespeaker | the same MV4+ trigger, for cards | 13 of 22 nonland | INCLUDE |
| Collective Inferno | "sources you control of the chosen type" (Elemental) | 12 of 14 creatures | INCLUDE |
| Champion of the Path | "behold an Elemental and exile it" | 14 other Elemental cards available | cost is feedable |
| Flamebraider x2 | "Spend this mana only to cast Elemental spells" | 18 of 22 nonland | INCLUDE |
| Eclipsed Realms x2 | restricted any-colour mana, naming Elemental | 18 of 22 nonland | INCLUDE |

Eclipsed Realms is better here than its restriction suggests: **every blue cost in the deck sits on an Elemental spell** (Twinflame Travelers; Omni-Changeling via changeling; Ashling's Command, a Kindred Instant - Elemental), so it is a full blue source for 100% of the deck's blue demand. Real sources are R 13 / U 10 of 18. Only four cards - Collective Inferno, Sting-Slinger, Sear, Tweeze - cannot use its coloured mana.

### PLAY PATTERN

Turn 2 Flamebraider, turn 3 Champion of the Path (beholding a spare Elemental from hand, which returns when Champion leaves). From turn 4 every Elemental you cast is a burn spell attached to a body. Hold the copy spells until Twinflame Travelers or Collective Inferno is down - Kindle the Inner Flame at 7 damage is worth far more than Kindle at 3.

Omni-Changeling deserves a note: "You may have this creature enter as a copy of any creature on the battlefield" includes the *opponent's* creatures, and changeling guarantees the copy is an Elemental even when the original is not - so it is a Champion trigger regardless of what is on the table.

### WHAT THE SELF-GRILL CHANGED

The Phase 9 Challenger landed three BLOCKING findings that materially improved the deck, all implemented: Flamebraider x2 (the deck had only 3 cards at MV 2 or less against a 3.6 average), Tanufel Rimespeaker (the cantrip count was literally zero), and cutting an Eclipsed Flamekin for Flaring Cinder - the 1/4 body was the exact 1-power defect the Step-0 judge had used to reject a whole competing sketch, and I had applied that standard inconsistently.

It also correctly argued Kirol, Attentive First-Year out of the deck: Kirol is a Vampire Cleric, so it is excluded from Collective Inferno's doubling, from Champion's behold cost, and from Eclipsed Realms' coloured mana, while consuming one of only five rare slots. That slot became Steam Vents, the pool's only untapped U/R dual.

One Challenger suggestion I checked and declined: cutting an Omni-Changeling to make room for interaction would have taken the enabler assembly probability from 0.80 to roughly 0.72, failing the Phase 6b HARD gate. The interaction slot came from the last Eclipsed Flamekin instead.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (22 nonland):  2:4  3:5  4:8  5:4  6:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.2: Enraged Flamecaster@0.8, Enraged Flamecaster@0.8, Sting-Slinger@0.9, Collective Inferno@0.7) → p=0.76 (need ≥ 0.75)
  PASS  enabler: 5 copies (effective 4.6: Omni-Changeling@0.9, Omni-Changeling@0.9, Ashling's Command@0.8) → p=0.80 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 76% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 64%  T3 93%
Coverage:  [PASS]
  OK        wide_boards: Ashling's Command, Boulder Dash
  OK        single_large_threat: Sear, Tweeze, Boulder Dash
  CONCEDED  noncreature_permanents: No mainboard answer to a resolved artifact or enchantment; the win is a turn-6 non-combat damage kill that does not need the opponent's permanents gone, and Giantfall x2 (destroy target artifact) plus Temporal Cleansing x2 (library-bury any nonland permanent) are in the sideboard for the 11-artifact and 21-enchantment matchups.
  CONCEDED  stack: No mainboard counterspell; this deck is the proactive one and holding up {U} costs a deployment turn against a turn-6 clock. Hexing Squelcher (spells you control can't be countered) is sideboarded against blue.
  CONCEDED  graveyard: No mainboard graveyard hate; the colours have none that is not a dead card in the other 80% of matchups, and Rooftop Percher x2 (exile up to two target cards from graveyards; changeling keeps it on-thesis) is sideboarded against the cube's 39 graveyard-interaction cards.
```

- goldfish WARN — keepable 76% against the 80% threshold. The deck runs no 1-drop, so the simulator scores every hand without a turn-1 play as worse. The curve instead starts at Flamebraider ({1}{R}, "{T}: Add two mana in any combination of colors. Spend this mana only to cast Elemental spells or activate abilities of Elemental sources"), a turn-2 play that casts a four-mana Elemental on turn 3 — acceleration the keepable heuristic does not model. Accepted rather than repaired: the only 1-drop available (Cinder Strike) was cut to fund the Flamebraider and Tanufel Rimespeaker additions the Phase 9 Challenger's oracle-grounded findings required.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Sting-Slinger ("{1}{R}, {T}, Blight 1: This creature deals 2 damage to each opponent") is a repeatable sink that turns surplus mana into the win condition - though its blight-1 cost means that with no other creature on board it self-blights and caps at three activations. Kulrath Zealot's ETB ("exile the top card of your library. Until the end of your next turn, you may play that card") converts a land-heavy turn into a new card, and Kindle the Inner Flame's "Flashback-{1}{R}, Behold three Elementals" gives a spent card a second use once three Elementals are available. |
| screw | mitigation | Kulrath Zealot has "Basic landcycling {1}{R}", turning the deck's most expensive card into a land for two mana. Flamebraider x2 ("{T}: Add two mana in any combination of colors") substitutes for a missed land drop on 18 of the 22 nonland cards. Omni-Changeling and Collective Inferno both have convoke, so creatures pay for the lands you are missing. |
| decapitation | mitigation | Champion of the Path is a 1-of and will be killed on sight. The deck degrades to Elemental beatdown with the reach package intact: Enraged Flamecaster x2 (2 damage to each opponent per MV4+ cast; 13 of 22 nonland cards qualify), Sting-Slinger (repeatable 2 to each opponent), and Collective Inferno doubling all Elemental damage including combat damage. Kindle the Inner Flame's token "has haste", so copies still attack the turn they arrive without Champion. |
| gas-out | mitigation | Tanufel Rimespeaker ("Whenever you cast a spell with mana value 4 or greater, draw a card") is live on 13 of 22 nonland cards. Flaring Cinder and Tweeze both loot. Kulrath Zealot impulse-draws on entry, Kindle the Inner Flame flashbacks from the graveyard, and Ashling's Command has "Target player draws two cards" as one of its two modes - 6 of 22 nonland cards refuel. |
| raced | accepted | The cube's threat profile holds 41 evasion cards and this deck's mainboard interaction is 3 cards (Sear, Tweeze, Boulder Dash). Mitigating means adding removal, and the slots would come out of the threat and copy package that IS the kill mechanism - there is no filler to cut, since the 22 nonland cards are 11 threats, 8 engine/infrastructure and 3 interaction. Swat Away x2 ("This spell costs {2} less to cast if a creature is attacking you") and Feed the Flames are sideboarded for the matchups where being raced is the actual problem. |
| disruption-fizzle | mitigation | The kill turn is not one spell. Champion of the Path's trigger fires on EVERY Elemental entry, so a countered Kindle the Inner Flame leaves the next Elemental cast still converting to damage, and Kindle has "Flashback-{1}{R}" to retry from the graveyard. Enraged Flamecaster and Sting-Slinger deal damage off a trigger and an activation rather than off the stack, so one counterspell does not blank the turn. Hexing Squelcher ("Spells you control can't be countered") is sideboarded against dedicated counterspell decks. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Mirrormind Crown | Equipment costing 4 + equip 2 before it converts a token creation; this build's copy effects already produce Elemental bodies directly and the Crown's token replacement is capped at once per turn. Reserved for Deck 2. |
| Rimefire Torque | Needs three charge counters from chosen-type permanents entering before one spell copy; this build wins on creature ETBs, not instant/sorcery copies. |
| Sanar, Innovative First-Year | Vivid impulse-draw scales with colors among permanents; this deck runs 2 colors, so it reveals 2 nonland cards - a rare slot for a small effect. |
| Meek Attack | '{1}{R}: put a creature card with total power and toughness 5 or less from your hand onto the battlefield' - the Elementals this deck wants to re-enter (Kulrath Zealot 6/5, Champion 7/3, Flamekin Gildweaver 4/3) all exceed total P+T 5. |
| Soul Immolation | Blight X capped by greatest toughness among your creatures; symmetric damage also hits your own copies. |
| Glen Elendra's Answer | Mythic mass counter; this deck is the proactive deck and rarely holds up {2}{U}{U}. |
| Loch Mare | Mythic 4/5 that enters with three -1/-1 counters and pays them for card draw - a value engine, not an Elemental and not a damage converter. |
| Goatnap | Threaten effect; this deck already generates its own hasty bodies via Kindle the Inner Flame. |
| Wild Unraveling | Counterspell whose additional cost is blight 2 or pay {1}; a proactive aggro deck is rarely the one holding up {U}{U}. |
| Boneclub Berserker | Goblin lord effect ('+2/+0 for each other Goblin'); this deck's creature base is Elemental, not Goblin. |
| Boldwyr Aggressor | Giant double-strike lord; only one other Giant is castable in these colors. |
| Springleaf Drum | Mana rock that taps a creature; competes with attacking and with Kirol's tap-two activation cost. |
| Firdoch Core | Colorless changeling mana rock; enters as a noncreature so it does not trigger Champion of the Path. |
| Wanderwine Farewell | {5}{U}{U} bounce that makes Merfolk tokens - off-tribe and far above this curve. |
| Sourbread Auntie | Two 1/1 Goblin tokens for {2}{R}{R}; 1/1 non-Elementals do nothing for Champion of the Path's power-based damage. |
| Pestered Wellguard | 1/1 Faerie per tap; the tokens are not Elementals and have 1 power. Reserved for Deck 2. |
| Harmonized Crescendo | Rare draw-X by creature type; a rare slot spent on cards, not on the kill. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.68   Ramp cards: 5   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.74 adj [MV 3.68 vs 2.5, 5 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  R  demand  70.4%  prod  66.7%  gap  +3.7pp  [OK]
  U  demand  29.6%  prod  50.0%  gap -20.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons max 2 copies
[PASS] Rares/mythics max 1 copy
[PASS] Max 5 rares/mythics total (main + side)
[PASS] All cards from the cube pool
[PASS] Colour usability (U/R only)
```
