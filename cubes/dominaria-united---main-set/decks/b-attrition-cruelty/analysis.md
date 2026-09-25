---
deck_name: "b-attrition-cruelty"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "B"
format: "40-card"
built_at: "2026-08-19T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  17x Swamp
```

### CREATURES (11)

```
CMC  Card                       Qty  Color  Role              Rar
1    Cult Conscript             x2   B      Threat/Recursion  U
2    Blight Pile                x2   B      Threat/Payoff     U
3    Braids, Arisen Nightmare   x1   B      Engine/Outlet     R
3    Eerie Soultender           x2   B      Engine/Enabler    C
3    Gibbering Barricade        x2   B      Engine/Outlet     C
4    Sheoldred, the Apocalypse  x1   B      Threat            M
6    Tyrannical Pitlord         x1   B      Threat            R
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                     Qty  Color  Role                 Rar
1    Bone Splinters           x2   B      Interaction/Enabler  C
1    Cut Down                 x2   B      Interaction          U
3    Choking Miasma           x2   B      Interaction          U
4    Extinguish the Light     x2   B      Interaction          C
4    Sheoldred's Restoration  x2   B      Engine/Payoff        U
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty  Color  Role           Rar
3    Braids's Frightful Return  x1   B      Engine/Outlet  U
5    The Cruelty of Gix         x1   B      Engine/Payoff  R
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in                                                                                                                                                                                                                                                                                                                                Rar
Battlefly Swarm          x2   B      Hate — Against the cube's largest threat class - 51 evasion cards, 20.6% density. A one-mana 1/1 flier whose '{B}: This creature gains deathtouch until end of turn' lets it block and kill a flier of ANY size; it is also an unconditional turn-1 play, which this deck otherwise has only two of.                                                   C
Knight of Dusk's Shadow  x2   B      Hate — Against the cube's 22 lifegain cards. 'Your opponents can't gain life' blanks Mossbeard Ancient's ETB, Silverback Elder's third mode and Prayer of Binding, on a 2/2 menace body with a pump ability so it is never a dead card.                                                                                                                U
Splatter Goblin          x2   B      Hate — Against go-wide token decks (Tokens is the cube's 2nd-largest cluster at 38 cards). 'When this creature dies, target creature an opponent controls gets -1/-1 until end of turn' - a body that kills an x/1 on its way to the graveyard, where it then counts as a creature card for Sheoldred's Restoration.                                   C
Tribute to Urborg        x2   B      Flex — Against fast starts. 'Target creature gets -2/-2 until end of turn' at instant speed for two mana, cast with the {1}{U} kicker declined - the scaling half of the card is off-colour, which is why it is a sideboard card and not a maindeck one.                                                                                               C
Karn's Sylex             x1   C      Hate — The ONLY card a mono-black deck in this cube can cast that answers an artifact or an enchantment: '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less.' Board in against the 15 artifacts and 18 enchantments; at X=3 it clears most of them while Sheoldred (MV 4) and Tyrannical Pitlord (MV 6) survive.  M
Phyrexian Rager          x1   B      Flex — Against grindy decks - sacrifice fodder that replaces itself. 'When this creature enters, you draw a card and you lose 1 life', and it reaches the graveyard as a creature card for the reanimation package.                                                                                                                                    C
```

## ANALYSIS

### DECK IDENTITY

A mono-black attrition control deck. Seventeen Swamps mean zero fixing cost, zero tapped lands, zero life paid for mana and a 0.0pp colour gap in the audit, so every {B}{B} cost is castable the turn it comes up - which is what lets the deck run eight removal spells alongside a real engine. It trades one-for-one on curve while Braids Arisen Nightmare, Braids's Frightful Return, Gibbering Barricade and Bone Splinters convert its own spent bodies into cards and graveyard fuel. The graveyard then pays out three ways: Sheoldred's Restoration returns the best body, Braids's Frightful Return chapter II retrieves one to hand, and The Cruelty of Gix chapter III reads ANY graveyard - so the removal suite that answers the opponent's threats is simultaneously stocking the yard Cruelty steals from. Cult Conscript returns itself for {1}{B} off the same deaths. The clock is Sheoldred, the Apocalypse and Tyrannical Pitlord; Blight Pile x2 is a SUPPLEMENTARY drain, not the win condition - '{2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control' is loss rather than damage and so is blocker-proof and unpreventable, but simulated on this list X averages 1.0 at turn 5 and 1.4 by turn 8, not the 4 that a full board of Defenders would give.

### THE MANABASE IS THE ARGUMENT

Seventeen Swamps. Nothing else. The mana audit returns a **0.0pp colour gap** — the only perfect score across the four decks in this set — and every land is untapped, costs no life, and needs no fixing spent on it.

That is not a limitation this deck accepts; it is the resource it spends. Because no mana is ever stranded, the list can run **three** different double-black cards at four copies (Extinguish the Light ×2, Choking Miasma ×2) *plus* `{1}{B}{B}` Braids, `{2}{B}{B}` Sheoldred, `{3}{B}{B}` The Cruelty of Gix and `{4}{B}{B}` Tyrannical Pitlord, and cast each on the turn it comes up. Compare deck A, which spends one of its five rare slots on a **land** just to make `{W}{W}` reachable.

The bill comes due in two places, and both are stated rather than hidden:

| Card | What one basic land type does to it |
|---|---|
| Drag to the Bottom | `X = 1 + 1 = 2`. A `{2}{B}{B}` −2/−2 — **strictly worse** than Choking Miasma's `{1}{B}{B}` −2/−2, which the deck already runs at its cap. Cut from both boards. |
| Shadow Prophecy | `X = 1`. Three mana to look at **one** card and bin **zero**, in a deck whose whole point is binning. Cut entirely. |

All three independent sketchers derived both of those from the oracle text without prompting, which is a good sign the reading is right.

### BLIGHT PILE IS A DRAIN, NOT A CLOCK — AND I HAD TO BE TOLD TWICE

`{2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with **defender** you control.`

The deck runs four Defenders — Blight Pile ×2 (3/3) and Gibbering Barricade ×2 (2/4) — and my first draft of this analysis called it "the deck's actual win condition, draining for 4 per turn." That is the same **"at full deployment"** reasoning that had *already* been refuted once in this build, and it doesn't survive the distribution either. Simulated over the actual list, under assumptions generous to the claim (no opposing removal, never sacrifices a Defender):

| Turn | mean X | P(X≥3) | P(X=4) |
|---|---|---|---|
| 5 | 1.03 | 4.3% | 0.2% |
| 8 | 1.38 | 11.1% | 0.9% |
| 12 | 1.79 | 22.6% | 3.3% |

Four Defenders is four cards in a forty-card deck, in a deck that **sacrifices its own creatures as its engine**. Two oracle details the optimistic version also skipped: the ability costs `{T}`, so a freshly cast Pile counts toward X but can't activate that turn, and each Pile taps for its own activation — "two Piles for 8" is six mana with both untapped.

What's actually true is narrower and still good: *"Each opponent **loses** X life"* is loss, not damage, so it is blocker-proof, unpreventable, and needs no creature to survive combat. It is a **supplementary inevitability piece**. The clock is Sheoldred, the Apocalypse and Tyrannical Pitlord.

Blight Pile also solved a structural problem: the pre-grill list had **zero cards at mana value 2**. It fills that with an unconditional `{1}{B}` body, which matters because the deck's other cheap cards are conditional — Bone Splinters needs a creature to sacrifice and Cut Down needs an opposing target, so the honest count of *unconditional* one-mana plays is **2 of 23** (Cult Conscript ×2), not the six the first draft claimed.

### THE CARD THAT GOT CUT, AND WHY

The first version of this deck ran **Writhing Necromass ×2** — a 5/5 deathtouch that "costs {1} less to cast for each creature card in your graveyard." It looked like the perfect mono-black graveyard payoff, and it produced a structural curve WARN that I initially argued away on the grounds that its printed mana value 7 wasn't its real cost.

That argument does not survive contact with the clause. Necromass counts creature cards in **your** graveyard — and eight of this deck's cards are removal spells that fill the **opponent's** graveyard. Simulated over the actual list, the mean was **1.15 creature cards in your own yard at end of turn 5**, with P(≥3, the discount needed to reach 3–4 mana) at **9.8%**. At the mean it cost six.

Both copies came out. The curve WARN disappeared on its own, the land count dropped from 18 to 17, and the slot went to cards that fix the underlying problem instead of riding it. The one graveyard payoff that survives the same test is **The Cruelty of Gix**, because chapter III reads *"a graveyard"* — not *your* graveyard — so the removal suite genuinely does feed it.

### WHAT MONO-BLACK CANNOT DO

Two gaps, one of which I got wrong the first time and one that is real:

- **Artifacts and enchantments (33 cards, 13.4% of the cube).** I originally wrote that mono-black has *no* answer anywhere in the pool. That was false: **Karn's Sylex** is colourless and castable — `{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less.` It is now the sideboard's answer, and at X=3 it clears most of that class while Sheoldred (MV 4) and Tyrannical Pitlord (MV 6) survive. Its *"Players can't pay life"* clause doesn't conflict with anything here — this deck's life effects are all losses, not payments.
- **The stack.** Genuinely unanswerable. All four counterspells in the cube are blue, and a second colour costs the 0.0pp manabase that is this build's entire reason to exist.

One environmental note in this deck's favour: the cube's graveyard-hate probe matches **zero cards in any colour**, and The Cruelty of Gix reads *either* graveyard — so uncontested graveyards are strictly good news here in a way they are not for the other three decks.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:6  2:2  3:8  4:5  5:1  6:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.9: The Cruelty of Gix@0.8, Braids's Frightful Return@0.7, Cult Conscript@0.7, Cult Conscript@0.7) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.1: Bone Splinters@0.8, Bone Splinters@0.8, Braids, Arisen Nightmare@0.9, Braids's Frightful Return@0.8, Gibbering Barricade@0.9, Gibbering Barricade@0.9) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 76%  T2 89%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Choking Miasma
  OK        single_large_threat: Extinguish the Light, Bone Splinters, Cut Down
  OK        noncreature_permanents: Extinguish the Light
  CONCEDED  stack: No black card in this cube counters a spell; the pool's only counterspells (Negate, Essence Scatter, Ertai's Scorn, Protect the Negotiators) are blue. Mitigating would mean a second colour, which costs the perfect manabase that is this build's entire structural advantage - the audit's 0.0pp colour gap and 17 untapped, life-free, fixing-free sources.
  CONCEDED  graveyard: The cube contains zero graveyard hate in any colour (dossier structural_census: gy_hate = 0). There is no card to mitigate with. Note this cuts BOTH ways here: The Cruelty of Gix chapter III reads 'a graveyard', so this deck actively benefits from opposing graveyards being uncontested.
```
- No WARN-tier structural flag is raised on the final list - curve, assembly, goldfish and coverage all return PASS - so this array records only what was repaired. The pre-grill list carried a CURVE WARN ('share of nonland cards with MV > 5 is 14%, max 10%') which was originally ACCEPTED on the argument that Writhing Necromass's printed mana value 7 was not its real cast cost. The Challenger measured that argument and refuted it (mean 1.15 creature cards in your own graveyard at end of turn 5; P(>=3) = 9.8%; at the mean the cost is 6, not the claimed 3-4). Rather than defend the acceptance, both copies were cut. MV>5 share fell to 1 of 23 = 4.3%, the WARN disappeared, and the land target moved from 18 to 17.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable mana sinks, with their real costs stated: Blight Pile x2's '{2}{B}, {T}: Each opponent loses X life' costs mana only (X averages 1.0-1.4 on this list, so it is a supplementary drain rather than the win condition); Gibbering Barricade x2's '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' costs mana AND a body, which is why it is listed second; and Eerie Soultender x2's '{4}{B}, Exile this card from your graveyard: Return another target creature card from your graveyard to your hand' costs mana only but needs two creature cards already in the yard. Cult Conscript's {1}{B} return is deliberately NOT counted here - its 'non-Skeleton creature died this turn' gate is exactly what a flood state lacks. |
| screw | mitigation | The manabase half is unconditional: 17 Swamps, zero tapped, zero life, so every land drop is live mana on curve, and the goldfish sim returns 86% keepable hands with a 76% turn-1 play rate. The card half, recounted honestly after the grill: only 2 of 23 nonland cards are UNCONDITIONAL one-mana plays (Cult Conscript x2) - Bone Splinters needs a creature to sacrifice and Cut Down needs an opposing target. Adding Blight Pile x2 gives 4 of 23 unconditional bodies at mana value 2 or less, which is what a two-land hand actually deploys. The earlier claim of '6 of 22 all castable off a single land' was wrong and is withdrawn. |
| decapitation | mitigation | The payoff role holds 6 copies across 4 names (Sheoldred's Restoration x2, The Cruelty of Gix, Braids's Frightful Return, Cult Conscript x2), assembly p=0.79 by turn 5, and the routes are mechanically different: a sorcery, a saga chapter with no mana-value cap that reads EITHER graveyard, a saga chapter that returns to hand, and a creature that reanimates itself for {1}{B}. The honest joint figure, measured rather than implied: drawing a payoff by turn 5 is p=0.79 and having a legal target in YOUR graveyard by turn 5 is 0.757, so payoff-with-a-target is roughly 0.60 - which is why the deck's clock is Sheoldred, the Apocalypse and Tyrannical Pitlord (neither of which needs the graveyard at all) with Blight Pile's blocker-proof drain underneath, and the reanimation package is an accelerant rather than the plan. |
| gas-out | mitigation | This deck refuels from its own trades. Braids, Arisen Nightmare draws a card each end step - at the cost of a permanent, and an opponent willing to sacrifice a matching permanent can deny the draw entirely, so it is repeatable rather than free. Gibbering Barricade x2 turn a spent body into a card for {2}{B}; Cult Conscript x2 return themselves with no card spent; Eerie Soultender x2 convert their own corpses into a creature card in hand; Braids's Frightful Return chapter III drains or draws; Sheoldred turns every draw into 2 life; and The Cruelty of Gix chapter II is an unrestricted 'Search your library for a card, put that card into your hand'. An empty hand with a stocked yard and a Blight Pile is a winning position. |
| raced | mitigation | This is the deck in the set best equipped for it. Eight removal spells with four at one mana, TWO mainboard sweepers (Choking Miasma x2) that 7 of this list's own 11 creature cards survive, FOUR Defender bodies (Blight Pile x2 at 3/3, Gibbering Barricade x2 at 2/4) that wall the ground while doubling as the win condition, and a 76% turn-1 play rate off a perfectly untapped manabase. Extinguish the Light's 'you gain 3 life' and Gibbering Barricade's 'You gain 1 life' buy additional turns. The residual risk is the air: Tyrannical Pitlord is the only flier in the 40, which is why Battlefly Swarm x2 - a one-mana flier that gains deathtouch for {B} and so blocks and kills any flier of any size - is in the sideboard. |
| disruption-fizzle | mitigation | The critical turn is a 4-mana Sheoldred's Restoration or a 5-mana Cruelty of Gix chapter III. If either is answered the target is still in the graveyard - nothing in the 40 exiles a graveyard, and Sheoldred's Restoration's 'Exile Sheoldred's Restoration' exiles only itself - so the second Restoration, the other route, or Braids's Frightful Return chapter II retries off the same yard. Uniquely among these decks the fizzle is also self-correcting: interaction the opponent spends answering a reanimation is a card they are not spending on the board, which is what an attrition deck wants, and Blight Pile's drain does not care whether any of it resolved. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Shadow-Rite Priest | '{3}{B}{B}, {T}, Sacrifice another Cleric: Search your library for a black creature card, put it onto the battlefield.' It costs 5 mana, a Cleric, and a turn of summoning sickness - and the Cleric count in a mono-black list is 1-2 (Eerie Soultender; Evolved Sleeper only after activation). It also fetches from the LIBRARY, not the graveyard. |
| Battlefly Swarm | A 1/1 flier with '{B}: This creature gains deathtouch until end of turn'. Evasive fodder, but it does nothing for the graveyard and the one-drop slot is better spent on Cut Down and Bone Splinters, which trade with real cards. |
| Tattered Apparition | A 2/2 flier for 4 with a pump ability - the four-drop slot is contested by Sheoldred, Extinguish the Light, Monstrous War-Leech and Sheoldred's Restoration, all of which affect the game more. |
| Battle-Rage Blessing | A combat trick; at competitive power the interaction budget is better spent on unconditional removal that answers cards this deck cannot race. |
| Balduvian Atrocity | Its reanimation clause requires the {R} kicker, which is off-colour here, and even kicked it reads 'Sacrifice it at the beginning of the next end step'. Unkicked it is a vanilla 2/3 menace. |
| Aggressive Sabotage | Castable at {2}{B} with the {R} kicker declined, but unkicked it is just 'Target opponent discards two cards' - a three-mana discard spell in a cube where 32 cards interact with graveyards, so it often helps the opponent. |
| Karn's Sylex | '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less' is colourless and castable, but it is symmetric and slow, and its 'Players can't pay life to cast spells' clause turns off Defiler of Flesh's own cost reduction. |
| Weatherlight Compleated (as a 5/5) | Listed as a candidate for its death-trigger card draw, but note that the 5/5 body needs FOUR phyresis counters before it is a creature at all, and each counter costs a creature dying - a real ramp-up this deck may not have time for. |
| Golden Argosy | 'Whenever Golden Argosy attacks, exile each creature that crewed it this turn. Return them to the battlefield tapped' is a blink engine, not a graveyard one, and it costs a rare slot. |
| Karn, Living Legacy | A colourless planeswalker whose Powerstone tokens can't cast nonartifact spells - this deck's spells are all nonartifact, so the +1 produces mana it cannot use. |
| Inscribed Tablet / Salvaged Manaworker / Relic of Legends / Meteorite | Colourless filler. Mono-black has no fixing problem to solve and no artifact payoff, so these cost a card to do a job the manabase already does. |
| Vanquisher's Axe / Hero's Heirloom | Equipment. This deck deliberately trades creatures away and sacrifices its own bodies; an aura-like permanent that needs a surviving creature fights the sacrifice plan. |
| Bortuk Bonerattle | Requires green, and its domain clause reads 'mana value less than or equal to the number of basic land types among lands you control' - a mono-Swamp deck has ONE basic land type, so it would return only mana-value-1 creatures. |
| Serra Paragon | Requires {W}{W}. Its 'permanent spell with mana value 3 or less' rebuy is the right shape for this deck, but not at the cost of the perfect mono-black manabase that is this build's entire point. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.44 adj [MV 2.83 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 (need 40)
[PASS] 1b sideboard size — 10 (need 10)
[PASS] 2 exact-name membership — all 21 distinct names found
[PASS] 3 copy limits — all within per-rarity caps (basics exempt)
[PASS] 3b rare/mythic cap (<=5) — 5: Braids, Arisen Nightmare x1, Karn's Sylex x1, Sheoldred, the Apocalypse x1, The Cruelty of Gix x1, Tyrannical Pitlord x1
[PASS] 4 colour usability (best_mode) — all nonland cards usable in B; off-cast modes: none
[PASS] 5 splash cap — splashed cards: none; per-splash-colour counts {} (splash_colors=[])
[PASS] 5-selftest validator rejects a known-bad card (Serra Paragon) — fixture correctly identified as an illegal splash
```
