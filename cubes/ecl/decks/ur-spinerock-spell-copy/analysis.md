---
deck_name: "ur-spinerock-spell-copy"
cube_id: "ecl"
cube_slug: "ecl"
colors: "UR"
format: "40-card"
built_at: "2026-08-11T19:00:53Z"
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

### CREATURES (11)

```
CMC  Card                     Qty   Color  Role                                                                      Rar
  2  Unwelcome Sprite         x2    U      Engine - surveil 2 per spell cast on the opponent's turn                  U
  3  Flaring Cinder           x2    UR     Engine - loot on entry and on MV4+ casts                                  C
  3  Glen Elendra Guardian    x1    U      Engine - flash flier, one-shot counter for a noncreature spell            R
  4  Goliath Daydreamer       x1    R      Payoff - 4/4 closer that recurs spent answers                             R
  4  Tanufel Rimespeaker      x2    U      Engine - draw on MV4+ casts                                               U
  4  Twinflame Travelers      x1    UR     Payoff - 3/3 flying closer, doubles Elemental triggers                    U
  5  Spinerock Tyrant         x1    R      Payoff - 6/6 flying finisher; copies single-target spells when it lands   M
  5  Stratosoarer             x1    U      Payoff - 3/5 flying closer with basic landcycling                         C
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                     Qty   Color  Role                                                                      Rar
  1  Spell Snare              x2    U      Interaction - counter a 2-drop, single target                             U
  2  Sear                     x2    R      Interaction - 4 damage, single target                                     U
  4  Feed the Flames          x2    R      Interaction - 5 damage + exile, single target                             C
  4  Kindle the Inner Flame   x2    R      Payoff - hasty copy of your best body; also single-target fuel            U
  4  Swat Away                x2    U      Interaction - tuck a spell or creature, single target                     U
  5  Ashling's Command        x1    UR     Interaction - modal sweeper / Elemental copy                              R
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                                                                                                                   Rar
Giantfall                x2    R      Artifact removal (mode 2 is single-target) / vs. artifact decks (11 artifacts); mode 1 has TWO targets and does not trigger the Tyrant                    U
Wild Unraveling          x2    U      Hard counter, single target / vs. combo; its blight 2 can pay onto Glen Elendra Guardian for two extra counter activations                                C
Enraged Flamecaster      x2    R      Reach - 2 damage to each opponent per MV4+ cast / vs. decks that stabilise the ground - the mainboard cannot point damage at a player                     C
Temporal Cleansing       x2    U      Nonland permanent answer, single target / vs. enchantments (21 in cube; no U or R permanent answer exists) - note the owner may keep it second-from-top   C
Rooftop Percher          x2    C      Graveyard hate on a 3/3 flier / vs. graveyard decks (39 GY-interaction cards in cube); changeling makes it an Elemental                                   C
```

## ANALYSIS

### DECK IDENTITY

U/R control that answers one-for-one and closes in the air, with a spell-doubling multiplier on top when it shows up. Every interaction spell in the mainboard has exactly one target, because Spinerock Tyrant reads "Whenever you cast an instant or sorcery spell with a single target, you may copy it" - and that clause is the reason Boulder Dash and Run Away Together are not in the deck at all. The honest framing, arrived at during the self-grill: the Tyrant is a 1-of that the deck sees in under a third of games by turn 7, and the pool contains no second card that copies a spell. So the reliable plan is nine single-target answers and nine closer copies, and the Tyrant is the game the deck steals rather than the game it expects.

### ONE CLAUSE BUILT THIS DECK

Spinerock Tyrant: "Whenever you cast an instant or sorcery spell with **a single target**, you may copy it. If you do, those spells gain wither."

*A single target* is a hard filter, and it decided what this deck may not play:

| Card | Targets | Triggers the Tyrant? |
|---|---|---|
| Sear, Feed the Flames, Spell Snare, Swat Away, Kindle the Inner Flame | exactly 1 | **yes** |
| Boulder Dash ("2 damage to any target and 1 damage to any **other** target") | 2 | no |
| Run Away Together ("Choose **two** target creatures") | 2 | no |
| Thirst for Identity, Unexpected Assistance | 0 | no |

**9 of the 22 nonland cards are single-target instants or sorceries, and all 9 of the mainboard's instants and sorceries qualify — a 100% hit rate.** Boulder Dash and Run Away Together were cut for this reason and are not in the sideboard either.

One subtlety the self-grill surfaced and I had missed: a Tyrant copy of **Spell Snare** usually does nothing. Its copy must target "target spell with mana value 2", and once you have countered the only such spell on the stack there is no second legal target. So 2 of the 9 fuel cards yield a blank copy in the normal case — effective fuel is 7 of 9. Swat Away is exempt, because "target spell **or creature**" gives its copy somewhere else to go.

### THE HONEST VERSION OF THIS DECK

The pipeline was pitched as spell-doubling. It is not reliably that, and I would rather say so than sell it.

The entire U/R pool contains exactly **two** effects that copy an instant or sorcery: Spinerock Tyrant and Rimefire Torque. Both are rare, so the pool rules cap each at one copy, and Rimefire Torque was cut during the grill because it needs three charge counters — each from an Elemental permanent entering — plus eleven mana of Elementals cast *after* it resolves, which puts its first copy strictly *later* than the Tyrant it was supposed to precede.

That leaves one card. **P(seeing Spinerock Tyrant by turn 7) is 0.298.**

The first build hid this by defining the Phase 6b payoff role as "cards that end the game" and filling it with fliers — which passed the gate at 0.82 while measuring something the thesis never claimed. The Challenger called that out and was right. The fix was not a better scoping: it was to **revise the thesis** to what the deck reliably does — answer one-for-one, close in the air — and to print the copy engine's real assembly probability in the structural output as a disclosed non-gate role. Roughly seven games in ten, this is a well-built U/R control deck. The other three, it is that plus a 6/6 flier that makes every removal spell into two.

### THE COUNTS

Against the final 22-card nonland list:

| Claim | Count |
|---|---|
| Single-target instants/sorceries (Tyrant fuel) | 9 of 22 — of which 7 give a non-blank copy |
| Cards at mana value 4 or greater (Tanufel / Flaring Cinder trigger) | 13 of 22 |
| Closers (the role that actually assembles) | 6 copies across 5 cards, p = 0.86 |
| Effects that copy a spell | **1** of 22, p = 0.298 — disclosed, not gated |
| Genuinely card-positive or self-replacing | 5 of 22 (corrected down from a claimed 10) |
| Cards that can point damage at the opponent | **0** of 22 |

### KINDLE THE INNER FLAME EARNS FOUR SLOTS AT ONCE

Added during the grill, and the best card in the repair. "Create a token that's a copy of target creature you control, except it has haste and 'At the beginning of the end step, sacrifice this token.'" It is simultaneously: a single-target sorcery (Tyrant fuel), mana value 4 (Tanufel and Flaring Cinder fuel), a maker of an Elemental token, and — copying Spinerock Tyrant — a hasty 6/6 flier that **carries the Tyrant's own copy trigger**, so the token doubles your spells for the turn it lives.

### PLAY PATTERN

Pass with mana up. Every answer is an instant, and Unwelcome Sprite x2 pays a surveil 2 for each one cast on the opponent's turn, so the default line costs nothing. Deploy a closer when you can protect it or when the opponent is tapped out. If the Tyrant resolves, stop trading and start two-for-oneing — and remember the copies gain wither, so damage becomes permanent -1/-1 counters that kill regenerators and shrink whatever survives.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:2  2:4  3:3  4:10  5:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  finisher: 6 copies (effective 5.2: Goliath Daydreamer@0.8, Kindle the Inner Flame@0.7, Kindle the Inner Flame@0.7) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.2: Spell Snare@0.6, Spell Snare@0.6) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 78% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 32%  T2 79%  T3 93%
Coverage:  [PASS]
  OK        wide_boards: Ashling's Command
  OK        single_large_threat: Feed the Flames, Sear, Swat Away, Spinerock Tyrant
  CONCEDED  noncreature_permanents: No mainboard artifact or enchantment removal; the mainboard spends its slots on single-target spells and closers, and the cube is only 4.2% artifacts. Giantfall x2 and Temporal Cleansing x2 are sideboarded. Disclosed limitation: Temporal Cleansing lets the OWNER choose second-from-top, so against a resolved enchantment it buys a turn rather than answering it - the same defect that got Swat Away flagged. It is close to forced: the whole cube holds only 4 enchantment answers and none is castable on U/R mana.
  OK        stack: Spell Snare, Swat Away, Glen Elendra Guardian
  CONCEDED  graveyard: No mainboard graveyard hate; Rooftop Percher x2 ('exile up to two target cards from graveyards') is sideboarded against the cube's 39 graveyard-interaction cards.
```

- goldfish WARN - keepable 78% against the 80% threshold, with 3-lands-by-turn-3 healthy at 92%. The deck has 6 of 22 nonland cards at MV 2 or less, and its cheapest interaction (Spell Snare, "Counter target spell with mana value 2") is conditional on what the opponent casts - it literally cannot be cast against an opponent on one land, so the goldfish turn-1 figure is not claimed as support anywhere. Stratosoarer's "Basic landcycling {1}{U}" turns an unkeepable hand into a keepable one, but it is 1 of 22 and the Phase 9 Challenger was right that this is thin cover on its own. The third option it named is a 19th land: avg MV rose from 3.27 to 3.36 during the repair, and the accel discrepancy above argues only for more lands. That was weighed and declined - deck_audit.land_target computes 18 (raw 17.98) and the skill's discipline is to build to the computed number rather than to a hunch. Accepted rather than repaired, with the alternative recorded so it can be tried.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Eight of the 22 nonland cards are instants (Sear x2, Feed the Flames x2, Spell Snare x2, Swat Away x2), so surplus mana is spent on the opponent's turn rather than wasted, and Unwelcome Sprite x2 ("Whenever you cast a spell during an opponent's turn, surveil 2") converts each of those casts into selection that buries the extra lands. Flaring Cinder x2 loots on every MV4+ cast. Stratosoarer is a spell when you are flooded and a land when you are not. |
| screw | mitigation | Stratosoarer's "Basic landcycling {1}{U}" is the deck's land-finder and turns its most expensive closer into a land for two mana. Six of the 22 nonland cards cost two or less (Spell Snare x2, Sear x2, Unwelcome Sprite x2). Swat Away's "costs {2} less to cast if a creature is attacking you" makes it a {U}{U} answer in exactly the screwed-and-under-pressure state. Stated plainly: this is the deck's weakest mode - it has one land-finder and its one-mana plays are conditional on what the opponent does, which is why the goldfish keepable rate sits at 78%. |
| decapitation | mitigation | Spinerock Tyrant is a 1-of and the deck expects to lose it. That is survivable because the revised thesis does not depend on it: the closer role is 6 copies across 5 cards (Goliath Daydreamer 4/4, Twinflame Travelers 3/3 flying, Stratosoarer 3/5 flying, Kindle the Inner Flame x2 copying whichever body survived) and assembles at p=0.86 by turn 7. Losing the Tyrant costs the doubling, not the win condition. |
| gas-out | mitigation | Tanufel Rimespeaker x2 draws on every MV4+ cast and 13 of the 22 nonland cards qualify. Flaring Cinder x2 loots on the same trigger, Unwelcome Sprite x2 surveils 2 per opponent-turn cast, and Ashling's Command has "Target player draws two cards" as one of its two modes. Corrected count, and this correction came out of the self-grill: genuinely card-positive or self-replacing cards are 5 of 22, not the 10 of 22 originally recorded. Glen Elendra Guardian was wrongly counted as card advantage - its clause reads "Its controller draws a card", and 'its controller' is the controller of the COUNTERED spell, i.e. the opponent. It is card-negative for this deck. |
| raced | accepted | Against the cube's 41 evasion cards this deck is the slower one, and its answers are one-for-one until a closer lands. Mitigating means trading interaction for cheap blockers, and the interaction IS the plan - it is what the Tyrant doubles, and a blocker is not a spell with a single target. The real cost being accepted is sharper than that, though: the mainboard has ZERO cards that can point damage at the opponent (Sear hits creatures or planeswalkers, Feed the Flames hits creatures), so the deck cannot shorten a race at all - it must win the board. Enraged Flamecaster x2 ("Whenever you cast a spell with mana value 4 or greater, this creature deals 2 damage to each opponent") is sideboarded for exactly that gap. |
| disruption-fizzle | mitigation | The deck holds mana rather than committing, so the critical turn is usually the opponent's. Swat Away x2 answers a spell on the stack or a resolved creature, Spell Snare x2 counters an MV2 spell, and Glen Elendra Guardian flashes in to counter a noncreature spell. Disclosed limitation from the self-grill: that protection suite is 5 of 22 and 3 of the 5 are hard-restricted - Spell Snare to mana value exactly 2, and Glen Elendra Guardian to noncreature spells AND to a single activation ever, since it enters with one -1/-1 counter and the deck contains no way to add counters to it. Wild Unraveling x2 is sideboarded as an unconditional counter, and its blight-2 cost can be paid onto Glen Elendra Guardian to buy two more activations. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Mirrormind Crown | Converts token creation into copies of a creature; this deck copies spells, not permanents, and makes no tokens. Reserved for Deck 2. |
| Mirrorform | Copies permanents, not spells; this deck's payoffs all read 'instant or sorcery'. Reserved for Deck 2. |
| Champion of the Path | Its trigger is Elemental creatures entering, not spells being cast. Reserved for Deck 1. |
| Omni-Changeling | A creature that enters as a copy of a creature - it copies permanents, not spells. |
| Kindle the Inner Flame | Copies a creature, not a spell; and it has no single target on the stack that Spinerock Tyrant cares about beyond the creature it copies. |
| Twinflame Travelers | Doubles triggered abilities of ELEMENTALS; the spell-copy payoffs here are a Dragon, an artifact and a Giant. |
| Collective Inferno | Doubles damage from one chosen creature type; this deck's damage comes from spells, whose source is the spell, not a creature of a chosen type. |
| Boulder Dash | Deals damage to 'any target and 1 damage to any OTHER target' - two targets, so Spinerock Tyrant's 'single target' clause does not trigger. Cut for single-target removal instead. |
| Run Away Together | 'Choose TWO target creatures controlled by different players' - two targets, so it never triggers Spinerock Tyrant. |
| Thirst for Identity | Strong card flow but it has no targets, so neither Spinerock Tyrant nor Rimefire Torque's copy is worth anything on it; a copy of a draw-three is the one case where copying is genuinely good, but the Tyrant specifically requires a single target. |
| Glen Elendra's Answer | Mythic mass counter; it is a sweeper the cube's threat_profile barely calls for (2 sweepers total) and it costs a scarce rare slot. |
| Loch Mare | Mythic value engine; its card draw is an activated ability, not a spell, so it feeds none of the MV4+ or cast-trigger payoffs. |
| Sanar, Innovative First-Year | Vivid reveal scales with colors among permanents; at two colors it exiles two cards for a rare slot. |
| Harmonized Crescendo | Draw-X by creature type; this deck's creatures are a scattered mix of Dragon, Giant, Elemental and Faerie, so the count is low. |
| Soul Immolation | Blight X capped by your greatest toughness, and it damages each creature your opponents control but not the opponent's board selectively - a mythic slot for a sweeper this deck does not want when it holds the better board. |
| Hexing Squelcher | Real protection, but it costs one of only five rare slots and the three spell-copy payoffs already consume three. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.36   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.98 adj [MV 3.36 vs 2.5, 1 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  R  demand  46.2%  prod  55.6%  gap  -9.4pp  [OK]
  U  demand  53.8%  prod  61.1%  gap  -7.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons max 2 copies
[PASS] Rares/mythics max 1 copy
[PASS] Max 5 rares/mythics total (main + side)
[PASS] All cards from the cube pool
[PASS] Colour usability (U/R only)
```
