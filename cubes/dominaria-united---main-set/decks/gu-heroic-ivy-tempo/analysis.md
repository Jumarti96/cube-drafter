---
deck_name: "gu-heroic-ivy-tempo"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GU"
format: "40-card"
built_at: "2026-08-20T00:57:02Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
8x Island          U source and the Island basic type
3x Forest          G source and the Forest basic type
2x Haunted Mire    Swamp Forest: a GREEN source that carries a THIRD basic land type, taking Domain to 3; enters tapped
2x Tangled Islet   the only GU dual carrying BOTH the Forest and Island types; enters tapped
1x Yavimaya Coast  the pool's only untapped GU dual (rare); {T}: Add {G} or {U}, 1 damage
```

### CREATURES (11)

```
CMC  Card                     Qty   Color  Role                                                                                                                 Rar
  1  Pixie Illusionist        x2    U      Threat — {U} 1/1 flier; kicker {3}{G} for two +1/+1 counters is the flood outlet, and its {T} ability raises Domain  C
  2  Battlewing Mystic        x2    U      Threat — 2/1 flier for two mana (kicker {R} is dead here); the cheapest evasive Combat Research carrier              U
  2  Haunting Figment         x2    U      Threat — 2/1 vigilance, unblockable on any turn an instant or sorcery was cast                                       C
  2  Ivy, Gleeful Spellthief  x1    GU     Payoff — copy engine; every beneficial single-creature-target spell also buffs this 2/1 flier                        R
  2  Quirion Beastcaller      x1    G      Threat — grows on each creature spell; on death redistributes its counters                                           R
  2  Yavimaya Iconoclast      x2    G      Threat — the best raw two-mana body available: 3/2 trample                                                           U
  3  Aether Channeler         x1    U      Interaction — modal ETB: bird token, bounce a nonland permanent, or draw a card                                      R
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                 Qty   Color  Role                                                                                                                                                    Rar
  1  Gaea's Might         x2    G      Payoff — {G} for a doubled pump; +3/+3 once a Haunted Mire is down (Domain 3)                                                                           C
  1  Rona's Vortex        x2    U      Interaction — {U} base mode: return target creature or planeswalker you don't control to its owner's hand; the deck's only answer to a RESOLVED threat  U
  1  Shore Up             x2    U      Interaction — instant-speed hexproof on Ivy that also doubles as a +1/+1                                                                                C
  1  Timely Interference  x2    U      Interaction — {U}: shrink a blocker and draw; the Ivy copy is a full copy and draws a second card, at the cost of -1/-0 on Ivy                          C
  2  Colossal Growth      x2    G      Payoff — {1}{G} base mode is +3/+3 with no colour or Domain dependency; only the kicker is red                                                          C
  2  Essence Scatter      x1    U      Interaction — counters the large body that would wall the ground half                                                                                   C
```

### OTHER SPELLS (2)

```
CMC  Card             Qty   Color  Role                                                                                       Rar
  1  Combat Research  x2    U      Engine — the Aura copy lands on legendary Ivy: +1/+1, ward {1}, and a card per connection  U
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                                                                                           Rar
Bite Down                x1    G      vs resolved creatures — one-directional damage, so unlike Tail Swipe the attacking body takes none back                           C
Broken Wings             x2    G      vs artifacts (15), enchantments (18) and fliers — destroy target artifact, enchantment, or creature with flying                   C
Negate                   x2    U      vs the cube's 6 sweepers and vs targeted removal — none of the 6 is a creature spell                                              C
Protect the Negotiators  x1    U      vs any spell type — counter target spell unless its controller pays {1} for each creature you control; live on 10 non-Ivy bodies  U
Snarespinner             x2    G      vs evasion (51 cards, 20.7% of the cube) — reach, and +2/+0 whenever it blocks a flier                                            C
Tear Asunder             x2    G      vs noncreature permanents — exile target artifact or enchantment; answers an aura or Arrest pinning Ivy                           U
```

## ANALYSIS

### DECK IDENTITY

Pure green-blue tempo on Ivy, Gleeful Spellthief. Ivy copies any spell targeting only a single creature other than herself and the copy targets Ivy, so 10 of the 24 nonland cards buff a ground body and a 2/1 flier at once. With no red splash there is no double-strike burst, so the kill is grindier: Combat Research's Aura copy lands on legendary Ivy for +1/+1, ward {1} and a card per connection, and the deck wins by flying over while refuelling. It is threat-dense by design -- 11 creatures -- because Ivy's trigger needs a second body on board before any trick can double.

### WHAT DROPPING RED ACTUALLY COSTS

This is the two-colour sibling of a GU-plus-red build of the same engine, and the interesting
question is not "is it worse" but "what specifically changes." Three things do.

**The burst kill disappears.** Twinferno's second mode — *"Target creature you control gains double
strike until end of turn"* — is a single-creature-target spell, so Ivy copies it and both attackers
double-strike. Layered on a doubled pump that is a turn-5 kill. Without red there is no multiplier
anywhere in green or blue, so the thesis turn moves from 5 to 7 and the plan changes from "one
explosive turn" to "fly over while never running out of cards."

**Domain does NOT cap at 2.** I originally wrote that it did, and that was flatly wrong — the
Phase 9 Challenger caught it as the run's largest finding. Six **commons** in this pool carry a
Forest or Island basic land type alongside a second basic type while still tapping for a colour a
GU deck needs, and none of them costs a rare slot:

| Land | Type line | Taps for |
|---|---|---|
| Haunted Mire | Land — Swamp Forest | {B} or {G} |
| Radiant Grove | Land — Forest Plains | {G} or {W} |
| Wooded Ridgeline | Land — Mountain Forest | {R} or {G} |
| Contaminated Aquifer | Land — Island Swamp | {U} or {B} |
| Molten Tributary | Land — Island Mountain | {U} or {R} |
| Idyllic Beachfront | Land — Plains Island | {W} or {U} |

Two Haunted Mires replaced two Forests: green sources are unchanged at 8, and Gaea's Might goes
from a flat +2/+2 to +3/+3 whenever a Mire is down. The off-colour half of the dual is simply never
used. There is a second route too, which the Proposer found independently: Pixie Illusionist's
*"{T}: Target land you control becomes the basic land type of your choice until end of turn"* aimed
at Yavimaya Coast, which has no printed basic type to lose.

**Colossal Growth was never lost.** Only its kicker is red. The base mode is `{1}{G}` for
*"Target creature gets +3/+3 until end of turn"* — a legal Ivy trigger and the biggest pump in the
deck. Two copies went back in and took the trigger count from 8 of 24 to 10 of 24.

### THE COUNTS

| Claim | Count against this list |
|---|---|
| Cards that trigger Ivy | 10 of 24 nonland cards |
| Non-Ivy bodies for those spells to target | 10 of 24 |
| Non-Ivy bodies that evade | 6 of 10 — Pixie Illusionist ×2 and Battlewing Mystic ×2 fly, Haunting Figment ×2 is unblockable on any turn an instant is cast |
| Instants and sorceries (which switch on Haunting Figment) | 11 of 24 — Combat Research ×2 are Auras and do **not** count |
| Cards that answer a threat that has already resolved | 5 of 24, up from 3 before the grill |
| P(Ivy among the 13 cards seen by turn 7, on the play) | 13/40 = 32.5% |
| P(Domain 3 by turn 7) | 63.5% |
| Rare/mythic budget | 4 of 5 used; the sideboard spends none |

### THE ONE CARD THE MANA DOESN'T COVER

Every coloured cost in this deck is a single pip — except the card it is named after.
Ivy, Gleeful Spellthief is `{G}{U}` on turn 2 off **8** green sources in 16 lands. That single fact
drives two decisions: the deck is built to 16 lands against a computed recommendation of 15, and
Yavimaya Coast — the pool's only untapped GU dual — spends one of the five rare slots on a land.
Four of the sixteen lands enter tapped, which is the ceiling this deck can afford; deck A's
red-splash sibling pays five.

### RONA'S VORTEX AND THE "MAY" CLAUSE

Rona's Vortex targets a single creature you don't control, which means Ivy's trigger *does* see it —
and the copy would target Ivy and bounce her to hand. That reads like anti-synergy until you notice
Ivy says *"you **may** copy that spell."* The copy is declined and the card is simply removal. It is
booked as Interaction and deliberately not counted among the 10 triggers. The same logic is why
this deck can afford targeted answers at all, where a naive reading of Ivy says it cannot.

### PLAY PATTERN AND THE RACE IT LOSES

Turn 1 Pixie Illusionist, turn 2 Ivy or a Battlewing Mystic, turn 3 a body plus Combat Research on
it — Ivy becomes a warded 3/2 flier drawing a card per connection. From there the deck deploys and
holds one mana for Shore Up.

What the Phase 9 repairs cost is the ground game. Adding Colossal Growth ×2 and Rona's Vortex ×2
meant cutting Soaring Drake ×2 (2/3), Nishoba Brawler (2/3 trample) and Volshe Tideturner (1/3) —
every body in the deck with three toughness. Against a genuinely fast clock this list now trades
rather than walls, and Snarespinner ×2 in the sideboard is the answer rather than a maindeck one.
That trade is recorded as an accepted failure mode rather than papered over.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  1:12  2:11  3:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.6: Haunting Figment@0.8, Haunting Figment@0.8) → p=0.92 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.6: Timely Interference@0.8, Timely Interference@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 92%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mass removal exists in green or blue in this pool; the deck's plan is a proactive evasive clock and any wrath-shaped card would be a dead draw against the 45%+ of the cube that is not go-wide.
  OK        single_large_threat: Essence Scatter, Rona's Vortex, Aether Channeler, Timely Interference
  OK        noncreature_permanents: Aether Channeler
  OK        stack: Essence Scatter
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census: gy hate = 0), so there is nothing to buy; the deck races the 32 graveyard-interaction cards instead.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Pixie Illusionist's kicker {3}{G} turns a surplus four lands into a 3/3 flier, and its '{T}: Target land you control becomes the basic land type of your choice' converts a spare untapped land into a Domain type, taking Gaea's Might from +2/+2 to +3/+3 on demand. The steady sink is Combat Research x2 -- 'Whenever this creature deals combat damage to a player, draw a card' -- doubled by the Ivy Aura token, so flooded turns still buy cards. |
| screw | mitigation | 23 of the 24 nonland cards cost 1 or 2 mana, and every card in the list except one is a SINGLE coloured pip: Pixie Illusionist ({U}), Combat Research ({U}), Shore Up ({U}), Timely Interference ({U}), Rona's Vortex ({U}) and Gaea's Might ({G}) all cast off a single source. The exception is the deck's namesake -- Ivy, Gleeful Spellthief is {G}{U} and needs both colours on turn 2 off 8 green sources, which is exactly why the list is built to 16 lands rather than the recommended 15. A two-land hand that misses green still curves out on the blue half. |
| decapitation | mitigation | Shore Up x2 grants hexproof at instant speed and Combat Research grants ward {1} while Ivy is legendary. Losing Ivy costs the doubling but not the clock: of the 10 non-Ivy bodies, 6 evade -- Pixie Illusionist x2 and Battlewing Mystic x2 fly, Haunting Figment x2 is unblockable on any turn an instant is cast -- and the 10 pump and protection spells still function at half value on them. |
| gas-out | mitigation | Five dedicated card sources of 24 nonlands: Combat Research x2 (a card per connection, doubled by the Ivy Aura token), Timely Interference x2 (a cantrip whose Ivy copy is a full copy and draws a second card), and Aether Channeler's 'Draw a card' mode. Ivy connecting with two Combat Researches in play draws two cards per attack. |
| raced | accepted | This is the mode the Phase 9 repairs cost the deck. Replacing Soaring Drake x2 (2/3), Nishoba Brawler (2/3 trample) and Volshe Tideturner (1/3) with Colossal Growth x2, Rona's Vortex x2 and Battlewing Mystic x2 traded every dedicated ground blocker for evasion and interaction: the surviving bodies are 2/1s and 3/2s that trade rather than wall. What is left is temporary -- Rona's Vortex x2 bounces the fastest attacker for a turn, Shore Up untaps a blocker and pumps it, Essence Scatter answers one creature on the stack. Mitigating properly would mean putting the 2/3s and the 1/3 back, which would undo the Challenger-verified Colossal Growth and Rona's Vortex additions and drop the Ivy-trigger count from 10 of 24 back to 8. The deck accepts being the slower aggressor in a true race and boards in Snarespinner x2 for it. |
| disruption-fizzle | accepted | This build runs one hard counter maindeck (Essence Scatter) and no Negate. That is the deliberate cost of the locked lens: the judge picked this build precisely because holding up mana on turns 2-4 is the anti-lens for a deck whose route to a turn-7 goldfish is width of pressure. Mitigating would mean maindecking Negate x2 in place of two threats, dropping the non-Ivy body count from 10 to 8 and leaving the 10 Ivy-trigger spells short of legal targets -- Ivy's trigger is dead without a second creature. Negate x2 sits in the sideboard for the matchups where holding mana is actually correct. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Twinferno | Red is not in this build's identity; the double-strike burst is exactly what deck A buys with its splash and what this build gives up. |
| Hammerhand | Red; unavailable without the splash. |
| Tail Swipe | Targets two creatures, so it never triggers Ivy. |
| Impede Momentum | Targets an opposing creature; Ivy's copy would tap Ivy and stun her. |
| Timely Interference | The copy would give Ivy -1/-0. |
| Rona's Vortex | The copy would bounce Ivy to hand. |
| Hero's Heirloom | +2/+1 with trample and haste on a legend, but trample is near-worthless on a 2/1 flier and haste is dead on an already-deployed Ivy; cast plus equip is four mana for no immediate board. |
| Vanquisher's Axe | +2/+0 for a cast and a {2} equip, and equipping is an ability rather than a spell, so it never triggers Ivy. |
| Vesuvan Duplimancy | The payoff of a different pipeline (deck C); a four-mana enchantment that affects no board on the turn it lands. |
| Haughty Djinn | Power equals instants and sorceries in your graveyard; this list casts its cheap spells for immediate value, so the Djinn arrives as a 2/4 or 3/4 for three and costs one of five rare slots. |
| Academy Wall | 0/5 defender that loots once per turn; it blocks well but never attacks, and this build still wins by connecting with an evasive body. |
| Coral Colony | Mill payoff: '{1}{U},{T}: Target player mills X, where X is the number of creatures you control with defender.' This list runs 0 defenders, so X is 0. |
| Academy Loremaster | Symmetric extra draw that taxes the caster {2}; this deck is the one holding up one- and two-mana instants, so the tax lands on it as hard as on the opponent. |
| Tolarian Terror | Costs {1} less per instant and sorcery in your graveyard; this list runs 12 instants/sorceries, so the Terror is realistically a five-or-six-mana 5/5 with no evasion. |
| Defiler of Vigor | {3}{G}{G} 6/6 rare; a blockable ground body that does not convert the original half of a copied pump, and it costs a rare slot. |
| Silverback Elder | {2}{G}{G}{G} five-drop with GGG in a two-colour manabase built around a two-mana legend. |
| Sphinx of Clear Skies | Five-mana mythic; its Domain trigger reveals X cards where X is basic land types, and pure GU caps that at two. |
| The Phasing of Zhalfir | Chapter III destroys ALL creatures, including Ivy and every body the deck needs to trigger her. |
| Plaza of Heroes | Its '{3},{T}, Exile: Target legendary creature gains hexproof and indestructible' protects Ivy, but it is a rare that otherwise taps only for {C} in a deck with 23 coloured pips across 24 nonland cards. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     1.54   Ramp cards: 0   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.95 adj [MV 1.54 vs 2.5, 4 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  G  demand  32.0%  prod  50.0%  gap -18.0pp  [OK]
  U  demand  68.0%  prod  68.8%  gap  -0.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 == 40
[PASS] 1b sideboard size — 10 == 10
[PASS] 2 exact-name membership — missing: []
[PASS] 3 copy limits — violations: []
[PASS] 3b rare/mythic budget — 4 rare+mythic of max 5
[PASS] 4 colour usability via best_mode — unusable: [] ; non-normal modes: {}
[PASS] 5a splash cards in candidate list — off-list: []
[PASS] 5b splash cap <=3 per colour — 0 splash cards: []
```
