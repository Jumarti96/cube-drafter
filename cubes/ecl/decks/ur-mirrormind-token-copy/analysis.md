---
deck_name: "ur-mirrormind-token-copy"
cube_id: "ecl"
cube_slug: "ecl"
colors: "UR"
format: "40-card"
built_at: "2026-08-11T18:38:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Molten Tributary         Land - U/R dual, enters tapped
  1x Steam Vents              Land - untapped-capable U/R dual
  8x Island                   Land - basic
  7x Mountain                 Land - basic
```

### CREATURES (14)

```
CMC  Card                     Qty   Color  Role                                                              Rar
  2  Scuzzback Scrounger      x1    R      Engine - a free token every first main phase                      R
  2  Silvergill Mentor        x2    U      Engine - the pool's only MV2 creature-token maker                 U
  4  Pestered Wellguard       x2    U      Engine - repeatable flying token on every tap                     U
  4  Sourbread Auntie         x2    R      Engine - two tokens in one trigger = two copies                   U
  4  Twinflame Travelers      x1    UR     Threat - MV4 3/3 printed flier, second large Crown payload        U
  5  Merrow Skyswimmer        x2    WU     Threat - flying vigilant Crown carrier that makes its own token   C
  5  Omni-Changeling          x2    U      Engine - enters as a copy of any creature                         U
  5  Spinerock Tyrant         x1    R      Threat - 6/6 flying Crown carrier and Mirrorform target           M
  5  Stratosoarer             x1    U      Threat - 3/5 printed flier with basic landcycling                 C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                     Qty   Color  Role                                                              Rar
  1  Impolite Entrance        x1    R      Infrastructure - haste + trample, replaces itself                 U
  2  Boulder Dash             x1    R      Interaction - split removal, face-capable                         U
  2  Reckless Ransacking      x1    R      Engine - instant-speed token creation                             C
  2  Sear                     x1    R      Interaction - removal                                             U
  3  Tweeze                   x1    R      Interaction - removal, face-capable, loots                        C
  4  Kindle the Inner Flame   x1    R      Engine - Crown-independent copy effect                            U
  6  Mirrorform               x1    U      Payoff - instant-speed mass conversion / finisher                 M
```

### OTHER SPELLS (1)

```
CMC  Card                     Qty   Color  Role                                                              Rar
  4  Mirrormind Crown         x1    C      Payoff - kill mechanism, token-to-copy converter                  R
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                                                                                                 Rar
Spell Snare              x1    U      Counter a 2-mana spell / vs. decks whose key piece costs exactly 2 (artifact ramp, 2-drop lords)                                        U
Giantfall                x2    R      Artifact removal / power-based fight / vs. artifact decks (11 artifacts); mode 1 stays live otherwise                                   U
Feed the Flames          x1    R      5 damage + exile / vs. large or recursive creatures                                                                                     C
Swat Away                x2    U      Tempo answer to a spell or creature / vs. single large threats and when being raced                                                     U
Temporal Cleansing       x2    U      Catch-all nonland permanent answer / vs. enchantments and resolved bombs (21 enchantments; no U or R enchantment answer in this pool)   C
Rooftop Percher          x2    C      Graveyard hate on a 3/3 flier / vs. graveyard decks (39 GY-interaction cards in cube)                                                   C
```

## ANALYSIS

### DECK IDENTITY

U/R token-copy go-wide. Mirrormind Crown replaces each turn's first token creation with that many copies of the equipped creature, so cheap token makers stop producing 1/1s and start producing copies of your best body. Every Crown carrier in the list has printed evasion - Spinerock Tyrant, Twinflame Travelers, Stratosoarer and Merrow Skyswimmer - because a copy effect carries the printed card and not any Aura or pump attached to it, so flying has to already be on the card. Mirrorform is the finisher: at instant speed it turns every nonland permanent you control into a copy of your best body, converting a board of tokens into a lethal air force in one shot.

### THE RULE THE WHOLE DECK IS BUILT ON

A copy effect copies the **printed** card. It does not copy Auras, Equipment grants, pump spells, or -1/-1 counters. Both Phase 9 agents independently verified this from the bundle's own text, and Mirrorform is its cleanest in-cube proof: "Each nonland permanent you control becomes a copy of target **non-Aura** permanent." The Aura exclusion only needs to exist because an Aura is a separate permanent from the creature it enchants.

Two consequences run through every card choice:

1. **The Crown must go on a printed flier.** Putting it on a ground body and pumping that body produces copies that are still ground bodies. This is why Lofty Dreams ("Enchanted creature gets +2/+2 and has flying") is not in the deck despite looking like a Crown enabler — a Crown copy would inherit neither the +2/+2 nor the flying.
2. **Blight is free upside.** The -1/-1 counters that Sourbread Auntie and Scuzzback Scrounger put on your own creatures are not copiable, so a Crown copy of a blighted 4/3 Sourbread Auntie arrives at full 4/3.

### THE ONCE-PER-TURN CAP IS THE REAL CONSTRAINT

Mirrormind Crown reads "the **first time** you would create one or more tokens **each turn**." Its output scales with the number of tokens in that one event, not with mana spent. That reframes every token maker:

| Card | MV | Tokens per event | Copies under the Crown |
|---|---|---|---|
| Sourbread Auntie x2 | 4 | **2** | **2** |
| Silvergill Mentor x2 | 2 | 1 | 1 |
| Reckless Ransacking | 2 | 1 | 1 |
| Scuzzback Scrounger | 2 | 1 (free, every turn) | 1 |
| Pestered Wellguard x2 | 4 | 1 (free, every tap) | 1 |
| Merrow Skyswimmer x2 | 5 | 1 | 1 |

Sourbread Auntie is the only card in the pool that creates two tokens from one trigger, which is why it is the deck's single most valuable Crown conversion — and why it is at the full 2 copies.

The Crown's "you **may** instead" is also load-bearing: on a turn where Scuzzback Scrounger's first-main Treasure would waste the conversion, you decline it and save the redirect for a Sourbread Auntie later the same turn.

### THE BEST LINE IS NOT OBVIOUS FROM ANY ONE CARD

Pestered Wellguard triggers on "becomes tapped", not on attacking. So it makes a token when it attacks, when it convokes Merrow Skyswimmer or Omni-Changeling, and when Temporal Cleansing convokes off it from the sideboard. Three zero-card ways per turn to hand the Crown its fuel.

### THE COUNTS

Against the final 22-card nonland list:

| Claim | Count |
|---|---|
| Cards that create one or more tokens (Crown fuel) | 11 of 22 |
| Cards with **printed** flying (valid Crown payloads) | 5 of 22 |
| Printed fliers with power 3 or more | 3 of 22 (Spinerock Tyrant 6/6, Stratosoarer 3/5, Twinflame Travelers 3/3) |
| Merfolk feeding Silvergill Mentor's "behold a Merfolk" | 8 of 22 |
| Creature cards available for convoke | 14 of 22 |
| Token events costing no card from hand | 3 of 40 — at the copy-limit ceiling |

### WHAT THE SELF-GRILL CHANGED

The Challenger landed six BLOCKING findings and the deck is materially different for it.

The sharpest was this: the skeleton was locked on the "most reach & evasion" lens, and the judge's grounds named Spinerock Tyrant and Illusion Spinners as the printed fliers. Illusion Spinners was then removed as a weak keystone and backfilled with a 2/2. That left the deck with exactly **one** large printed flier, a 1-of at 30% to be drawn by its own thesis turn — the same defect ("copies that get blocked profitably") that had been used to reject a competing sketch outright. Twinflame Travelers and Stratosoarer were added; large printed fliers went from 1 to 3.

Second: the record justified running zero haste by claiming every U/R haste granter "costs a card and a blight". Impolite Entrance's actual text is "Target creature gains trample and haste until end of turn. **Draw a card.**" — no blight, and it replaces itself. The ground was false, so the resolution was unsound. Impolite Entrance is now in the deck.

Third: under the once-per-turn cap, Kindle the Inner Flame was paying four mana for the same single-token output that Silvergill Mentor buys for two — and when the Crown replaces Kindle's effect, Kindle's own haste-and-sacrifice rider is replaced away with it, so its distinguishing feature disappears exactly when the engine is online. Kindle went from 2 copies to 1. It stayed at 1 rather than 0 because cutting both would have dropped the payoff assembly probability to roughly 0.71, failing the Phase 6b HARD gate — a check I ran before accepting the cut.

Also corrected in the record: the pip count. The build claimed R 14 / U 8 while its own stated method (count Merrow Skyswimmer's hybrid pips as blue) yields **U 12**, i.e. R 53.8% / U 46.2%, not 63.6/36.4. The even source split was right for the wrong stated reason; the number is now correct.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (22 nonland):  1:1  2:6  3:1  4:7  5:6  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.2: Mirrormind Crown@0.7, Mirrorform@0.7, Omni-Changeling@0.9, Omni-Changeling@0.9) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.7: Sourbread Auntie@0.9, Sourbread Auntie@0.9, Scuzzback Scrounger@0.9) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 71% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 17%  T2 82%  T3 91%
Coverage:  [PASS]
  OK        wide_boards: Boulder Dash, Spinerock Tyrant
  OK        single_large_threat: Sear, Tweeze, Spinerock Tyrant
  CONCEDED  noncreature_permanents: No mainboard answer to a resolved artifact or enchantment; every mainboard slot is either a token creation the Crown needs as fuel or a copy converter, and cutting either shrinks the kill. Giantfall x2 (destroy target artifact) and Temporal Cleansing x2 (library-bury any nonland permanent) are sideboarded for the cube's 11 artifacts and 21 enchantments.
  CONCEDED  stack: No mainboard counterspell; the deck must deploy a token maker every turn to keep the Crown's once-per-turn replacement fed, so holding up mana costs the engine a turn. Spell Snare is sideboarded.
  CONCEDED  graveyard: No mainboard graveyard hate; Rooftop Percher x2 ('exile up to two target cards from graveyards') is sideboarded against the cube's 39 graveyard-interaction cards.
```

- goldfish WARN - keepable 71% against the 80% threshold, with '3 lands by turn 3' healthy at 92%. The flag is driven by 6 of the 22 nonland cards sitting at MV 5, and the simulator prices all six at face value. Four of them do not cost five mana in practice: Merrow Skyswimmer x2 and Omni-Changeling x2 both have convoke ("Each creature you tap while casting this spell pays for {1} or one mana of that creature's color"), and this deck puts CREATURE tokens onto the battlefield off 9 of its 22 nonland cards - Treasure tokens from Scuzzback Scrounger and Reckless Ransacking are artifacts and cannot be tapped for convoke - so their real cost is routinely two or three mana. The fifth, Stratosoarer, has "Basic landcycling {1}{U}" - it is a land for two mana on exactly the hands the keepable heuristic is scoring as unkeepable. Accepted rather than repaired: cutting the MV5 tier means cutting printed fliers, and printed evasion on the Crown's payload is the locked skeleton's entire reason for being.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Pestered Wellguard x2 ("Whenever this creature becomes tapped, create a 1/1 blue and black Faerie creature token with flying") plus Mirrormind Crown converts one attack step per turn into a fresh copy of the equipped creature at no card cost, so a flooded board still advances the plan. Stratosoarer's "Basic landcycling {1}{U}" is the reverse valve - it is a spell when you are flooded and a land when you are not. Tweeze ("You may discard a card. If you do, draw a card") turns a surplus land into a new card. |
| screw | mitigation | Stratosoarer's "Basic landcycling {1}{U}" is a two-mana land on exactly the hands that are short, and it is a printed flier when they are not. Convoke on 4 of the 22 nonland cards (Merrow Skyswimmer x2, Omni-Changeling x2) lets creatures pay for the lands you are missing, fed by the 9 of 22 cards that make CREATURE tokens (Pestered Wellguard x2, Sourbread Auntie x2, Silvergill Mentor x2, Merrow Skyswimmer x2, Kindle the Inner Flame). Scuzzback Scrounger makes a Treasure every first main phase and Reckless Ransacking makes one at instant speed ("{T}, Sacrifice this token: Add one mana of any color"). Seven of the 22 nonland cards cost two mana or less. |
| decapitation | mitigation | Mirrormind Crown is a 1-of and an artifact, so it dodges creature removal but not artifact removal. Three other copy effects remain - Mirrorform, Omni-Changeling x2 and Kindle the Inner Flame x1, four copies in total - and they produce copies with no Crown on the battlefield. Spinerock Tyrant is a 6/6 flier that wins on its own. Losing the Crown costs the engine, not the deck. |
| gas-out | mitigation | Thin, and stated as such. Impolite Entrance ("Target creature gains trample and haste until end of turn. Draw a card") and Tweeze both replace themselves; Kindle the Inner Flame has "Flashback-{1}{R}" for a second cast from the graveyard, though its "Behold three Elementals" cost is fed by only the two Omni-Changelings' changeling. Beyond that the deck refuels on the board rather than in hand: Pestered Wellguard x2 and Scuzzback Scrounger each make a token every turn from nothing, so an empty hand still feeds the Crown. That free-fuel base is 3 cards in 40 and CANNOT be raised - Pestered Wellguard is already at its 2-copy uncommon cap and Scuzzback Scrounger is a rare capped at 1. What the Phase 9 repair did instead was make the paid fuel cheap: Silvergill Mentor x2 at two mana, so feeding the Crown from hand costs 2 rather than 4. |
| raced | accepted | Mirrormind Crown costs 4 to cast plus 2 to equip, so the engine is not online before turn 6 against a cube holding 41 evasion cards. Mitigating would mean cutting Crown carriers or token makers for cheap interaction, and both are the engine - the Crown converts nothing without a token event, and copies of a small body do not win. Swat Away x2 (costs {2} less when a creature is attacking you), Feed the Flames and Spell Snare are sideboarded for the matchups where the race is the actual problem. |
| disruption-fizzle | mitigation | The Crown's replacement is a static ability on a resolved permanent and cannot be countered once the Equipment is on the battlefield; each subsequent turn is a fresh conversion, so interaction on the critical turn costs one turn rather than the plan. Reckless Ransacking is an Instant, so its token creation - and therefore the Crown conversion - can happen on the opponent's end step, outside sorcery-speed answers. Mirrorform is likewise an Instant, held in hand where no board answer reaches it. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Champion of the Path | Its payoff is 'damage equal to its power' per Elemental entry; the 1/1 tokens this deck makes have 1 power, and once the Crown converts them they are copies of a non-Elemental body. Reserved for Deck 1. |
| Twinflame Travelers | Doubles triggered abilities of ELEMENTALS only; this deck's token makers are Goblins, Merfolk and Faeries. Reserved for Deck 1. |
| Collective Inferno | Doubles damage from one chosen creature type; this deck's copies take the type of whatever body is equipped, which is not known at the time you name the type. |
| Rimefire Torque | Needs three charge counters from chosen-type permanents entering before one spell copy; this deck copies permanents, not spells. Reserved for Deck 3. |
| Wanderwine Farewell | {5}{U}{U} for bounce plus Merfolk tokens - the token count is good but seven mana is past this deck's clock. |
| Glen Elendra's Answer | Mythic mass counter making a Faerie per countered spell; a proactive go-wide deck rarely holds up {2}{U}{U}, and it is a mythic against a 5-rare cap. |
| Meek Attack | 'put a creature card with total power and toughness 5 or less from your hand onto the battlefield' - the Crown targets this deck wants (Spinerock Tyrant 6/6, Kulrath Zealot 6/5, Champions of the Shoal 4/6) all exceed total P+T 5. |
| Goliath Daydreamer | Recurs instants and sorceries; this deck's engine is permanents and equipment, and it would cost a scarce rare slot. |
| Sanar, Innovative First-Year | Vivid reveal scales with colors among permanents; at two colors it exiles two cards, for a rare slot. |
| Loch Mare | Mythic 4/5 that enters with three -1/-1 counters and spends them on card draw; a value engine, not a token maker or a Crown payoff. |
| Firdoch Core | Colorless changeling mana rock; it makes no tokens and '{4}: becomes a 4/4' is a poor Crown target at that cost. |
| Foraging Wickermaw | 1/3 mana creature with surveil 1; makes no tokens and is a weak equip target. |
| Boneclub Berserker | '+2/+0 for each other Goblin' - only 2 of this deck's token makers produce Goblins, and the Crown replaces those Goblins with non-Goblin copies. |
| Soul Immolation | Blight X for symmetric damage - it kills your own 1/1 token board before the Crown can convert it. |
| Sunderflock | Returns all non-Elemental creatures to hand, which bounces your own token board and your equipped creature. |
| Kirol, Attentive First-Year | 'Copy target triggered ability you control' - real, but its tap-two-creatures cost competes with Springleaf Drum, convoke, and attacking, and it costs one of only five rare slots. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.64   Ramp cards: 3   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.85 adj [MV 3.64 vs 2.5, 4 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  R  demand  53.8%  prod  55.6%  gap  -1.8pp  [OK]
  U  demand  46.2%  prod  61.1%  gap -14.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons max 2 copies
[PASS] Rares/mythics max 1 copy
[PASS] Max 5 rares/mythics total (main + side)
[PASS] All cards from the cube pool
[PASS] Colour usability (U/R only)
```
