---
deck_name: "ur-vesuvan-duplimancy"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-08-15T03:23:36Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
Island                         x7   ({T}: Add {U}.)
Mountain                       x6   ({T}: Add {R}.)
Molten Tributary               x2   ({T}: Add {U} or {R}.) This land enters tapped.
Shivan Reef                    x1   {T}: Add {C}. {T}: Add {U} or {R}. This land deals 1 damage...
```

### CREATURES (8)
```
CMC  Card                           Qty  Colr Role                               Rar
  2  Balmor, Battlemage Captain     x2   UR   Payoff — team pump; legendary, so tokens stack U
  2  Electrostatic Infantry         x2   R    Payoff — permanent counters per spell U
  2  Haunting Figment               x2   U    Payoff — unblockable carrier       C
  4  Micromancer                    x2   U    Engine — tutors an MV-1 enabler; ETB re-triggers U
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                           Qty  Colr Role                               Rar
  1  Flowstone Infusion             x1   R    Interaction — removal; clone trigger at a cost C
  1  Shore Up                       x2   U    Enabler — clone trigger + hexproof C
  1  Timely Interference            x2   U    Interaction — cantrip clone trigger C
  2  Furious Bellow                 x2   R    Enabler — clone trigger, wins the block C
  2  Impulse                        x2   U    Engine — digs four toward the mythic C
  2  Lightning Strike               x2   R    Interaction — removal + reach      C
```

### OTHER SPELLS (5)
```
CMC  Card                           Qty  Colr Role                               Rar
  1  Combat Research                x2   U    Enabler — clone trigger + draw engine U
  1  Hammerhand                     x2   R    Enabler — clone trigger, haste, blocker removed C
  4  Vesuvan Duplimancy             x1   U    Payoff — clones the targeted creature M
```

## SIDEBOARD (10)
```
Card                           Qty  Colr Role / When to board in                                    Rar
Negate                         x2   U    vs control, sweepers and removal — the only way to defend a resolved Vesuvan Duplimancy is to counter the answer before it resolves C
Essence Scatter                x2   U    vs creature decks — answers the blocker that would otherwise wall an evasive carrier C
Smash to Dust                  x2   R    vs artifact decks (15 artifacts in cube) or go-wide tokens (38-card Tokens cluster) — 'Destroy target artifact' or 'deals 1 damage to each creature your opponents control' C
Impede Momentum                x2   U    vs a body too large to burn — 'Tap target creature and put three stun counters on it' removes a blocker for three combats without needing damage C
Aether Channeler               x1   U    vs resolved noncreature permanents, when a cheap temporary answer is enough — 'Return another target nonland permanent to its owner's hand'; it is also a modal ETB body that compounds under Duplimancy R
Chaotic Transformation         x1   R    vs decks that imprison a creature with an enchantment — 'Exile up to one target artifact, up to one target creature, up to one target enchantment, up to one target planeswalker, and/or up to one target land' is the only card in these colours that permanently answers a resolved enchantment, and the cube holds 18. Honest cost: {5}{R} is six mana on a 16-land curve topping at four, and the exiled permanent's controller gets a random replacement of the same type R
```

## ANALYSIS

### DECK IDENTITY

A UR deck in which cheap spells aimed at your own creature stop being pump and start being clones. Vesuvan Duplimancy reads 'Whenever you cast a spell that targets only a single artifact or creature you control, create a token that's a copy of that artifact or creature, except it's not legendary' — and that last clause is the point, because it makes copies of Balmor legal and their anthems stack. The mythic is capped at one copy and is seen roughly 35% of the time by turn 7, so the deck is built to win without it: eleven enablers trigger the clone, and the seven of them that are instants or sorceries also make Haunting Figment unblockable, grow Electrostatic Infantry permanently, and fire Balmor's team-wide trample pump. The enchantment shortens the game; it is not the game.

### THE CONSTRAINT THAT SHAPED EVERY OTHER DECISION

Vesuvan Duplimancy is a mythic and the pool rules cap it at **one copy**. One copy in a 40-card deck
is seen with probability **0.35** by turn 7, against the structural gate's 0.75 threshold. No
revision of the thesis turn fixes that — you would have to see 30 of 40 cards — and an independent
sweep of all 271 pool cards found no tutor and no recursion that touches an enchantment.

So this deck cannot be a draw-it-or-lose deck, and it is not built as one. The payoff cluster is
seven copies across four names, and only one of them is the enchantment:

| Card | Copies | Weight | Mechanism |
|---|---|---|---|
| Vesuvan Duplimancy | 1 | 1.0 | Clones the targeted creature |
| Electrostatic Infantry | 2 | 1.0 | Permanent +1/+1 counters per spell |
| Balmor, Battlemage Captain | 2 | 0.9 | Team +1/+0 and trample, but only until end of turn |
| Haunting Figment | 2 | 0.6 | Evasion only — delivers damage, generates none |

Effective 6.0, assembly probability **0.90**. The enchantment is the ceiling, not the plan.

### WHY THE 'NOT LEGENDARY' CLAUSE IS THE WHOLE CARD

Vesuvan Duplimancy creates a token copy "except it's not legendary." That clause is what makes the
best line in the deck legal. Balmor, Battlemage Captain is legendary; ordinarily a second copy
would die to the legend rule. A Duplimancy token of Balmor does not, and its anthem trigger stacks.

Concretely: with Duplimancy and one Balmor on the battlefield, casting Shore Up on Balmor makes a
second, non-legendary Balmor — and because Shore Up is itself an instant, both Balmors then
trigger, giving the team **+2/+0 and trample** off a one-mana spell that also granted hexproof.

Two caveats worth knowing at the table. The Aura, Combat Research, reads "as long as enchanted
creature is legendary, it gets +1/+1 and has ward {1}" — a Balmor *token* is not legendary, so an
Aura on a token keeps the draw trigger but loses the rider entirely. And Twinferno's copy mode
(cut to the sideboard, then cut outright) never triggered anything: a copy put on the stack is not
*cast*, and Duplimancy, Balmor and Electrostatic Infantry all read "whenever you **cast**."

One rules point the shape judge left open and the grill confirmed: **Hammerhand is a legal
trigger.** An Aura spell targets what it will enchant; its "target creature can't block this turn"
line is a triggered ability whose target is chosen on resolution, after Duplimancy's cast-trigger
has already been checked.

### EVERY SLOT IS TWO CARDS — BUT NOT THE SAME TWO

Eleven of the 24 nonland cards satisfy Duplimancy's clause, and each is separately a real card when
the enchantment is absent:

| Enabler | With Duplimancy | Without |
|---|---|---|
| Shore Up x2 | Clone | Hexproof through removal, untap, +1/+1 |
| Hammerhand x2 | Clone | Haste on a fresh body, best blocker removed |
| Combat Research x2 | Clone | Every connection draws a card |
| Furious Bellow x2 | Clone | +3/+0 first strike wins any block, scry 1 |
| Timely Interference x2 | Clone, at −1 power | Cantrip; shrinks a blocker |
| Flowstone Infusion x1 | Clone, at −2 toughness | One-mana removal for x/2s |

The important subtlety, which an earlier draft of this record got wrong: the enabler suite and the
cast-payoff suite are **overlapping but different sets**. Hammerhand and Combat Research are
Enchantments — they trigger Duplimancy but they do *not* trigger Balmor, Electrostatic Infantry or
Haunting Figment, all of which read "whenever you cast an instant or sorcery spell." Eleven cards
clone; eleven cards are instants or sorceries; only seven are both.

There are also **no counterspells maindeck**, and that is a mechanism decision rather than a
preference: a counterspell targets a *spell*, not a creature you control, so it is the one
interaction type in these colours that can never trigger the payoff. Negate x2 and Essence Scatter
x2 come in after game one.

### WHERE THIS DECK IS EXPOSED

This is the most fragile of the three Izzet builds, and the record says so in five written coverage
concessions. The maindeck has **no** answer to a resolved 4-toughness creature (Lightning Strike
caps at 3, Flowstone Infusion at toughness 2, Timely Interference kills nothing), **no** sweeper,
**no** counterspell, and **no** way to touch a resolved artifact or enchantment. The plan against
all of it is to go around rather than through: Haunting Figment is unblockable on any turn a spell
is cast, and Balmor grants the team trample.

It also does not out-draw anyone. Eight of 24 slots refuel — Combat Research x2 (repeating, on an
unblockable body), Timely Interference x2 (replaces itself), Impulse x2 and Micromancer x2 — but
nothing generates raw card advantage the way a control deck does.

The sideboard is where it becomes a normal Magic deck. Negate, Essence Scatter, Smash to Dust,
Impede Momentum, Aether Channeler and Chaotic Transformation between them answer four of the five
conceded classes. Chaotic Transformation in particular is the only card in these colours that
permanently exiles a resolved enchantment, and the cube holds 18 of them — several, like
Citizen's Arrest and Prayer of Binding, imprison exactly the carrier this deck is built around.
Expect to board heavily in every matchup, and expect game one to be the combo deck.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (24 nonland):  1:9  2:12  4:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6: Balmor, Battlemage Captain@0.9, Balmor, Battlemage Captain@0.9, Haunting Figment@0.6, Haunting Figment@0.6) → p=0.90 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10.4: Timely Interference@0.9, Timely Interference@0.9, Flowstone Infusion@0.6) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 86%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Zero of the 24 nonland cards affect more than one opposing creature. Mitigating in the maindeck would mean running a sweeper over a clone enabler, and every enabler cut is a Duplimancy trigger removed from a deck whose payoff is a single mythic — the trigger density IS the pipeline. The partial maindeck answer is that Balmor grants trample, so a token swarm chump-blocking a pumped carrier does not stop the damage. The real answer is boarded: Smash to Dust x2, 'deals 1 damage to each creature your opponents control'.
  CONCEDED  single_large_threat: The maindeck answers a resolved 4-or-more-toughness body with nothing: Lightning Strike x2 caps at 3 damage, Flowstone Infusion only kills toughness 2 or less, and Timely Interference's -1/-0 kills nothing. The plan is to go around it rather than through it — Haunting Figment x2 is unblockable on any turn a spell is cast and Balmor grants the team trample. Mitigating would mean maindecking Impede Momentum or Fires of Victory in place of a clone enabler. Boarded: Impede Momentum x2 and Essence Scatter x2.
  CONCEDED  noncreature_permanents: CORRECTED after the grill: the earlier wording claimed neither U nor R in this pool can destroy or exile an artifact or enchantment, which is false — Smash to Dust and Yavimaya Steelcrusher both read 'Destroy target artifact' in mono-red, and Chaotic Transformation exiles an enchantment. The true position is narrower: this deck's MAINDECK has no answer, because it runs no counterspell and no removal that touches a noncreature permanent, and adding one costs a clone enabler. All three answers are boarded: Chaotic Transformation (permanent, the only UR answer to a resolved enchantment against the cube's 18), Aether Channeler (temporary, bounce) and Smash to Dust x2 (artifacts).
  CONCEDED  stack: No maindeck counterspell. This is a deliberate consequence of the pipeline: a counterspell targets a spell, not a creature you control, so it can never trigger Vesuvan Duplimancy — it is the one interaction type that breaks the deck's every-spell-is-an-enabler pattern. Boarded: Negate x2 and Essence Scatter x2.
  CONCEDED  graveyard: The cube's graveyard-hate census returned zero matches in every colour. Per the dossier's own census_caveat a 0-match probe proves nothing on its own, so this was verified by hand: a sweep of the UR-legal pool found no card that exiles from or otherwise attacks a graveyard. The absence is real and is a property of the pool, not of the colour choice.
```

- Curve and goldfish both returned PASS; no WARN flags to respond to. The goldfish's 86% turn-1 play rate reflects 9 cards at MV 1, and the curve now tops at MV 4 after Djinn of the Fountain was cut.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Impulse x2 ('Look at the top four cards of your library. Put one of them into your hand and the rest on the bottom') converts a surplus land into the card the deck is missing, and Micromancer x2 turns a spare four mana into a guaranteed one-mana enabler in hand. Combat Research x2 on an unblockable Haunting Figment converts each connection into a card, so extra lands become extra spells rather than dead draws. |
| screw | mitigation | The curve is 9 cards at MV 1 and 12 at MV 2 — 21 of 24 nonland cards cost two or less, and the list has no card above MV 4 at all. A two-land hand casts a one-mana enabler on turn 1 and a two-mana body on turn 2. Goldfish reports 83% keepable hands and 86% turn-1 plays off 16 lands. CORRECTED in the approval round: the pre-repair text cited 8 at MV 1, 20 of 24 at two or less, an 82% turn-1 rate, and 'the only card above MV 4 is a single Djinn of the Fountain' — a card the F2 repair had already cut. The mitigation is stronger after the repair, not weaker; only the figures were stale. |
| decapitation | mitigation | The mythic payoff is answered on sight in every game it is drawn, which is precisely why the deck does not depend on it: the payoff cluster is 7 copies across four names (Vesuvan Duplimancy, Balmor, Battlemage Captain x2, Electrostatic Infantry x2, Haunting Figment x2) and only one of them is the enchantment. CORRECTED in the approval round from '8 copies across five names', which was the pre-repair census. Shore Up x2 grants hexproof at instant speed for one mana in response to targeted removal — and is itself a clone trigger, so protecting a carrier also advances the plan. Electrostatic Infantry's +1/+1 counters are permanent, so removal aimed at it does not undo the damage already banked. Assembly probability across the cluster is 0.90 by turn 7. |
| gas-out | mitigation | Card ledger against this list: Combat Research x2 is the only repeating net-positive source ('Whenever this creature deals combat damage to a player, draw a card', on a body that is unblockable whenever a spell was cast), Timely Interference x2 replaces itself outright, and 4 more are self-replacing or filtering (Impulse x2, Micromancer x2, whose ETB puts a card in hand). Micromancer is the specific answer to an empty hand: it is a body AND a tutor for one of the 5 MV-1 instants, and under Duplimancy each token re-triggers the search. That is 8 of 24 slots on refuelling, up from 6 before the grill repair. |
| raced | accepted | The list has exactly one reach card (Lightning Strike, 'deals 3 damage to any target'), no lifegain, and 8 of its 24 nonland cards are Auras and pump spells that do nothing on an empty board. Against a faster clock it must win the race. Mitigating would mean adding blockers or counterspells, and a counterspell is the one interaction type that can never trigger Vesuvan Duplimancy — adding them would subtract from the 11-of-24 enabler density that is the entire pipeline. The concession is deliberate and is what the sideboard's Essence Scatter x2 and Impede Momentum x2 exist to reverse after game one. |
| disruption-fizzle | mitigation | The lethal turn is a sequence of one- and two-mana spells rather than a single spell, so a counterspell removes one clone or one pump increment rather than the plan. Shore Up (hexproof, instant, one mana) protects the carrier mid-combat and is itself an enabler. If the enchantment is countered the deck loses its ceiling but not its plan — the same eleven enablers still make Haunting Figment unblockable, grow Electrostatic Infantry, and fire Balmor's trample pump, which is the line the other 65% of games run anyway. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Ivy, Gleeful Spellthief | {G}{U} — the sole splash candidate, and mechanically perfect ('Whenever a player casts a spell that targets only a single creature other than Ivy, you may copy that spell'). best_mode([U,R],[]) returns None: it needs {G} at cast time on a two-drop, and Tangled Islet enters tapped, so 2-3 green sources tax exactly the turns this deck deploys. It is also a rare, competing for a budget the mythic already opened. |
| Vanquisher's Axe / Hero's Heirloom | Duplimancy also copies artifacts, but equipping is not casting and nothing in the UR pool casts a spell targeting your own artifact, so neither ever triggers the payoff. |
| Tolarian Terror | 'Costs {1} less for each instant and sorcery card in your graveyard' — a fine body, but this deck's Auras and pump spells are not all instants/sorceries, so the discount arrives later than in the Path B build; and a 5/5 is a worse clone target than an ETB creature that re-triggers. |
| Frostfist Strider | Its ETB ('tap target creature an opponent controls and put a stun counter on it') re-triggers beautifully on every token, but at {3}{U}{U} it is a five-mana clone target in a deck whose enablers cost one and two. |
| Automatic Librarian | Colourless 3/2 whose ETB scry 2 re-triggers on each token, but scry is the weakest ETB to compound — it adds no board and no cards. |
| Talas Lookout | 3/2 flier that digs on death; a fine body but its trigger needs it to die, which is the opposite of a deck protecting a carrier with Shore Up. |
| Battlewing Mystic | 2/1 flier; its kicked mode discards your hand, which is anti-synergistic with a deck that wants to hold cheap enablers. |
| Soaring Drake | 2/3 flying with no text; it is a legal clone target but adds nothing when copied, and this deck's carriers need to reward the spells being aimed at them. |
| Thrill of Possibility | Draws two but targets nothing, so it is not a clone trigger; its discard also costs one of the cheap enablers the deck wants in hand. |
| Jaya, Fiery Negotiator | Mythic; the budget is already spent on Vesuvan Duplimancy and the mana base, and a 4-mana planeswalker does not target a creature you control. |
| Najal, the Storm Runner | Copies a spell rather than a permanent — a different mechanism from the pipeline — and {2}{U}{U}{R} is a five-mana triple-pip cost. |
| Jhoira, Ageless Innovator | Artifacts cluster; this list runs 0 artifacts. |
| Crystal Grotto | Its untapped tap produces {C} and coloured mana costs an extra {1}, which casts neither a turn-1 one-mana enabler nor a turn-2 Balmor. |
| The Elder Dragon War | Chapter I deals 2 damage to each creature, which kills this deck's own carriers (Haunting Figment 2/1, Electrostatic Infantry 1/2, Phoenix Chick 1/1, Balmor 1/3 survives) — a sweeper aimed at its own board. |
| Essence Scatter / Negate — maindeck-excluded, boarded | A counterspell targets a spell, not a creature you control, so neither can ever trigger Vesuvan Duplimancy — they are the one interaction type that breaks the deck's every-spell-is-an-enabler pattern. Excluded from the maindeck on that mechanism; both sit in the sideboard at 2 copies. |
| Impede Momentum — maindeck-excluded, boarded | Tap plus three stun counters is strong removal, but it targets an opponent's creature, so 0 of its copies are Duplimancy triggers in a deck where 11 of 24 nonland cards are. Sideboard at 2 copies. |
| Djinn of the Fountain — built with, then CUT at Phase 9 | Included as the single top-end clone target, then cut: at {4}{U}{U} it was the only MV-6 card in a 16-land deck, arriving at or after the thesis turn, and it carried the lowest reliability weight in the list (0.5). Cutting it removed the curve's entire top end — the list now stops at MV 4. |
| Haughty Djinn — considered at Phase 9, declined | The grill proposed it over Djinn of the Fountain: its cost reduction would discount 11 of 24 nonland cards and the list has no other cost reducer. Declined and the contest upheld — its power clause reads instant and sorcery cards in the graveyard, and this deck has no self-mill and no looting (Impulse bottoms its rejects rather than milling them), so the yard fills only at natural cast rate; and the discount misses the 4 Aura enablers entirely. |
| Twinferno — boarded, then CUT at Phase 9 | Only its second mode ('Target creature you control gains double strike') is a legal clone trigger; the first mode puts a COPY on the stack, and a copy is not cast, so it triggers neither Duplimancy nor Balmor nor Electrostatic Infantry. The slot went to Chaotic Transformation. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.88   Ramp cards: 0   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.49 adj [MV 1.88 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  42.3%  prod  56.2%  gap -13.9pp  [OK]
  U  demand  57.7%  prod  62.5%  gap  -4.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2      PASS — no name exceeds 2 copies (basics exempt). Balmor, Battlemage Captain verified uncommon in the working pool, so 2 copies are legal and cost no rare budget.
rares_mythics_max_1          PASS — Vesuvan Duplimancy 1 (mythic), Shivan Reef 1, Aether Channeler 1, Chaotic Transformation 1.
rare_mythic_budget_5         PASS — 4 of 5 used (Vesuvan Duplimancy and Shivan Reef mainboard; Aether Channeler and Chaotic Transformation sideboard). The fifth is deliberately unspent. CORRECTED in the approval round: the earlier reason grouped Silver Scrutiny with the graveyard-reading rares, which is wrong — its text is 'You may cast this spell as though it had flash if X is 3 or less. Draw X cards' and it does not touch the graveyard. The accurate reason is that the remaining UR-legal rares each want something this build does not supply: Haughty Djinn reads a graveyard the deck never fills (no self-mill, no looting), Keldon Flamesage must attack, and Silver Scrutiny is an X-spell that competes for the same mana as a multi-enabler turn on a 16-land curve topping at MV 4. The enumeration is illustrative, not exhaustive.
all_cards_in_cube            PASS — every name matched by exact string against the working pool cache.
colour_usability             PASS — effective_cost.best_mode(card, ['U','R'], []) returned non-None for every nonland card; no off-identity inclusions.
splash_cap                   PASS — the deterministic filter offered a green splash (Ivy, Gleeful Spellthief); it was declined by all three sketchers and by the build, so splash_colors is empty and 0 cards are splashed.
```
