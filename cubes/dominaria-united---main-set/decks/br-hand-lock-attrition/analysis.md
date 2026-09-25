---
deck_name: "br-hand-lock-attrition"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-08-20T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  9x Swamp
  4x Mountain
  2x Crystal Grotto  scry 1 on ETB; {1} extra for coloured mana
  2x Geothermal Bog  dual, enters tapped
```

### CREATURES (8)

```
CMC  Card                        Qty   Color Role                               Rar
  1  Cult Conscript              x1    B     Engine/Infrastructure              U
  2  Goblin Picker               x1    R     Engine/Discard                     C
  2  The Raven Man               x1    B     Threat/Payoff                      R
  3  Braids, Arisen Nightmare    x1    B     Threat/Payoff                      R
  3  Gibbering Barricade         x2    B     Engine/Infrastructure              C
  3  Squee, Dubious Monarch      x1    R     Threat/Payoff                      R
  4  Sheoldred, the Apocalypse   x1    B     Threat/Payoff                      M
```

### INSTANTS & SORCERIES (12)

```
CMC  Card                        Qty   Color Role                               Rar
  1  Bone Splinters              x1    B     Interaction                        C
  1  Cut Down                    x2    B     Interaction                        U
  2  Lightning Strike            x2    R     Interaction                        C
  2  Pilfer                      x2    B     Engine/Discard                     C
  2  Thrill of Possibility       x1    R     Engine/Infrastructure              C
  3  Aggressive Sabotage         x2    B     Engine/Discard                     C
  4  Extinguish the Light        x2    B     Interaction                        C
```

### OTHER SPELLS (3)

```
CMC  Card                        Qty   Color Role                               Rar
  3  Braids's Frightful Return   x2    B     Engine/Discard                     U
  3  Liliana of the Veil         x1    B     Engine/Discard                     M
```

## SIDEBOARD (10)

```
Card                        Qty   Color Role / When to board in                                      Rar
Choking Miasma              x2    B     Hate — wide boards — vs. token and go-wide decks; 'All creat U
Smash to Dust               x2    R     Hate — artifacts — vs. artifact decks (15 artifacts / 6.1% d C
Knight of Dusk's Shadow     x2    B     Hate — lifegain — vs. the cube's 22 lifegain cards; 'Your op U
Flowstone Infusion          x2    R     Hate — small evasive creatures (toughness ≤ 2) — vs. decks w C
Tattered Apparition         x2    B     Flex — stalled ground boards — vs. creature-dense ground dec C
```

## ANALYSIS

### DECK IDENTITY

A black-red attrition control deck whose engine is opponent-directed discard. Five unconditional effects (Pilfer x2, Aggressive Sabotage x2, Liliana of the Veil's +1) plus two gated ones (Braids's Frightful Return chapter I) strip the opponent's hand so they operate off the top of their library, and seven interaction cards answer whatever they draw one-for-one. The emptied hand is then converted into a clock: The Raven Man banks a 1/1 flier at every end step in which a player discarded — a condition Goblin Picker makes payable from mana alone every turn — Sheoldred drains 2 for every card they draw, Braids, Arisen Nightmare turns each end step into a card or 2 life, and Squee, Dubious Monarch recurs from the graveyard and so cannot be answered permanently by one-for-one removal.


### WHY THIS IS NOT A RAVEN MAN DECK

The Raven Man is the card the archetype is named after, and it is a rare — so exactly one copy in forty. P(drawn by turn 4, on the draw) is about 26%. Any thesis that *requires* it fails the assembly gate outright. This build therefore treats it as a bonus keystone: the structural check counts 3 unconditional payoff copies without it, and the plan still functions when it never shows up. What actually assembles is the hand-attack class, which has 5 unconditional copies plus 2 gated ones.

### THE ONE CARD THAT CHANGED THE ENGINE

Goblin Picker was rejected in the initial sweep with the reason "a rummage that costs a card; the attrition plan wants card advantage, not filtering." That was wrong, and the grill said so with a count: self-discard density without it is 1 of 23 nonlands. The Raven Man's trigger reads "if **a player** discarded a card this turn" — a self-discard satisfies it. Goblin Picker's "{R}, {T}, Discard a card: Draw a card" converts that from a once-per-game coincidence into a mana-only guarantee every turn, which is why The Raven Man's reliability weight rose from 0.85 to 0.95 after the repair.

### THE RARE BUDGET IS THE REAL CONSTRAINT

Five rare slots, and this deck spends all five on engine pieces: Liliana of the Veil, Sheoldred the Apocalypse, The Raven Man, Braids Arisen Nightmare, Squee Dubious Monarch. That leaves nothing for Sulfurous Springs (the untapped BR dual) and nothing for the sideboard. The mana base is therefore Geothermal Bog x2 plus Crystal Grotto x2 plus basics — and Crystal Grotto only makes coloured mana for an extra {1}, so it is a source on paper and a fixer of last resort in practice.

### WHAT THE DECK CANNOT DO

Three coverage classes are written concessions rather than answered: wide boards (Choking Miasma is in the board but its -2/-2 kills this deck's own Bird tokens, Cult Conscript and Goblin Picker), the stack (no counterspell exists in black or red in this cube), and noncreature permanents. That last one is worth stating plainly: Extinguish the Light reads "Destroy target creature or planeswalker", so planeswalkers are covered and the cube's 18 enchantments are not covered at all, by any card in the 50.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:4  2:7  3:9  4:3
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.95: The Raven Man@0.95) → p=0.81 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 7.9: Braids's Frightful Return@0.6, Braids's Frightful Return@0.6, Thrill of Possibility@0.8, Goblin Picker@0.9) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 61%  T2 95%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. Choking Miasma ('All creatures get -2/-2 until end of turn', {1}{B}{B} with the {G} kicker declined) is available and is boarded in for exactly this class, but it is not maindecked because -2/-2 also kills this deck's own Bird tokens, Goblin tokens, Cult Conscript and Goblin Picker, which are the fodder the sacrifice suite runs on. The mainboard cost of mitigating is the engine's own board.
  OK        single_large_threat: Extinguish the Light, Bone Splinters, Liliana of the Veil
  CONCEDED  noncreature_permanents: Genuinely unanswered, and corrected from an earlier OK marking. Extinguish the Light reads 'Destroy target creature or planeswalker' and cannot touch artifacts or enchantments; both Braids effects are opponent-elective ('may sacrifice a permanent of their choice'). The only B/R-castable enchantment answer in the pool is Chaotic Transformation at {5}{R}, a rare, and the 5-rare cap is spent on engine pieces. Planeswalkers are covered; artifacts (15 in cube) are covered from the sideboard by Smash to Dust; enchantments (18 in cube) are not covered at all.
  CONCEDED  stack: Neither black nor red holds a counterspell in this cube; the pre-emptive substitute is the 5 unconditional opponent-directed discard effects, which take the spell out of hand before it can be cast.
  CONCEDED  graveyard: The cube contains zero graveyard hate (dossier structural_census: GY hate = 0), so no colour combination can answer graveyard strategies here.
```

No WARN-tier flags — curve and goldfish both PASS, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Four repeatable mana sinks turn surplus lands into action: The Raven Man's '{3}{B}, {T}: Each opponent discards a card', Goblin Picker's '{R}, {T}, Discard a card: Draw a card', Gibbering Barricade's '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card', and Cult Conscript's '{1}{B}: Return this card from your graveyard to the battlefield'. Braids, Arisen Nightmare additionally accepts a land as its end-step sacrifice, so a surplus land becomes a card or 2 life. |
| screw | mitigation | 11 of the 23 nonlands cost 2 or less (Cut Down x2, Bone Splinters, Cult Conscript, Pilfer x2, Lightning Strike x2, The Raven Man, Thrill of Possibility, Goblin Picker), so a two-land hand still operates; Crystal Grotto x2 scries 1 on entry. The goldfish check measures 88% keepable hands, 88% reaching 3 lands by turn 3, and a turn-1 play in 61% of hands. |
| decapitation | mitigation | The plan is deliberately not Raven-Man-dependent — it is a 1-of, and without it the assembly check still counts 3 unconditional payoff copies (Sheoldred, Braids Arisen Nightmare, Squee) and 9 enabler copies. If The Raven Man is answered on sight, the discard suite still strips the hand; Squee specifically recurs from the graveyard ('You may cast this card from your graveyard'), so removal on it is temporary, and Braids's Frightful Return chapter II rebuys any other answered creature. |
| gas-out | mitigation | Corrected after the grill showed the earlier count was unreproducible. Unconditional card generation is 3 of 23 nonlands: Thrill of Possibility (net +1) and Gibbering Barricade x2, whose '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' is the deck's only REPEATABLE draw and converts Bird tokens, Goblin tokens and Cult Conscript into cards indefinitely. Goblin Picker adds a repeatable card-neutral filter. Braids, Arisen Nightmare draws on top of that but is opponent-elective and is not counted here. Squee is castable from the graveyard, refuelling the board without a card from hand. |
| raced | mitigation | Upgraded from an acceptance after the grill's F5. The deck now has real early defence that costs the plan nothing: Cult Conscript ({B}, 2/1, recurs for {1}{B}) and Gibbering Barricade x2 (0/4 Defender) block the cube's 21%-density evasive starts, and Cut Down x2 at {B} answers the turn-1 and turn-2 curve. Both Barricades are also the gas-out engine, so no slot is spent purely on defence. Flowstone Infusion x2 comes in from the board against low-toughness aggro. |
| disruption-fizzle | mitigation | There is no single critical turn to interact with — the plan is 5 unconditional discard effects and 7 removal spells, none of which needs another card to function. If the turn a key permanent resolves is answered, Braids's Frightful Return chapter II ('Return target creature card from your graveyard to your hand') rebuys it and Squee returns itself. Noted limit: chapter II reads 'creature card from your graveyard', so it cannot rebuy an exiled permanent — which is why noncreature_permanents is a written concession. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sulfurous Springs | Rare BR painland; the 5-rare cap is fully consumed by Liliana / Raven Man / Cruelty of Gix / Braids / Sheoldred, and a land is the cheapest of those to give up. |
| Evolved Sleeper | Rare; a fine mana sink but it produces no discard and no card advantage until {1}{B}{B} activations, and the rare budget is spent on engine pieces. |
| Defiler of Flesh | Rare; its cost reduction applies only to black PERMANENT spells — 9 of the 24 nonland cards in this list are black permanents, so the discount misses the removal and discard suite that is the deck's engine. |
| Rivaz of the Claw | Rare; 'cast a Dragon creature spell from your graveyard' — this list runs 0 Dragons, so the recursion clause is blank text. |
| Shadow-Rite Priest | Rare; 'Sacrifice another Cleric' — this list runs 0 other Clerics, so the tutor cannot be activated. |
| Jaya, Fiery Negotiator | Mythic; a strong standalone card but the rare budget is spent, and its Monk tokens do nothing for the discard plan. |
| Keldon Flamesage | Rare; free-spell trigger needs it to attack and survive, which a controller's board rarely allows. |
| Goblin Picker | '{R}, {T}, Discard a card: Draw a card' — a rummage that costs a card and a tap; the attrition plan wants card advantage, not card filtering, and Thrill of Possibility does the same job at instant speed without a body. |
| The Elder Dragon War | Rare; chapter I deals 2 to EACH creature including my own Birds and Ragers, and the rare budget is spent. |
| Flowstone Infusion | '+2/-2 until end of turn' — only kills toughness-2 creatures; Cut Down covers the same range unconditionally at the same cost. |
| Smash to Dust | Artifact removal; the cube has 15 artifacts (6% density) — a sideboard card, not a maindeck slot. |
| Sengir Connoisseur | 'Whenever one or more other creatures die, put a +1/+1 counter' — 5 mana for a grow-creature in a deck whose creature count is 9/24 nonlands; too slow a payoff. |
| Hurler Cyclops | '{1}, Sacrifice another creature: 1 damage' — a sac outlet at 5 mana; Gibbering Barricade does it for 3 and draws a card. |
| Battlefly Swarm | 1-mana flier with a deathtouch pump; an aggro card with no attrition text — this build is the controller lens, not the aggro one. |
| Warhost's Frenzy | 'Creatures you control get +2/+0' — a combat trick for a wide board; this list's creature count is too low to convert it. |
| Meteorite | 5-mana artifact for 2 damage plus a mana rock; the deck's mana is already 2-colour and fixed by Geothermal Bog / Crystal Grotto. |
| Twinferno | Spell-copy needs a high instant/sorcery density used as damage; this deck's spells are 1-for-1 removal, so a copy usually has no second target. |
| Phoenix Chick | Recursion needs 'attack with three or more creatures' — this list attacks with 3+ creatures only after several Bird tokens, which is not reliable. |
| Balduvian Atrocity | Kicked reanimation is capped at 'mana value 3 or less'; the creatures worth rebuying here (Tyrannical Pitlord, Writhing Necromass) are above that cap. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.03 adj [MV 2.48 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  82.1%  prod  76.5%  gap  +5.6pp  [OK]
  R  demand  17.9%  prod  47.1%  gap -29.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                            cube_mainboard of dominaria-united---main-set
commons_uncommons_max_2:         PASS — no card exceeds 2 copies (validator CHECK3, verified against a known-bad fixture)
rares_mythics_max_1_each:        PASS — every rare/mythic appears once
rares_mythics_max_5_total:       PASS — exactly 5: Liliana of the Veil (mythic), Sheoldred, the Apocalypse (mythic), The Raven Man (rare), Braids, Arisen Nightmare (rare), Squee, Dubious Monarch (rare). Sideboard contains zero rares.
basics_unlimited:                Swamp x9, Mountain x4 — format-supplied, exempt
colour_usability:                PASS — every nonland card returns a usable mode under effective_cost.best_mode(card, ['B','R'], []). Two cards are legal via a kicker-decline or in-core kicker: Aggressive Sabotage (base {2}{B}, kicker {R} — both colours core) and Choking Miasma (base {1}{B}{B}, kicker {G} declined).
```
