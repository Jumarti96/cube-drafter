---
deck_name: "ug-tatyova-land-animation"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UG"
format: "40-card"
built_at: "2026-08-19T15:11:06Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x4   Forest                     Basic land, untapped, on-colour
  x5   Island                     Basic land, untapped, on-colour
  x2   Tangled Islet              ({T}: Add {G} or {U}.) This land enters tapped.
  x1   Yavimaya Coast             {T}: Add {C}. {T}: Add {G} or {U}. This land deals 1 damage 
  x2   Haunted Mire               ({T}: Add {B} or {G}.) This land enters tapped.
  x2   Molten Tributary           ({T}: Add {U} or {R}.) This land enters tapped.
  x1   Radiant Grove              ({T}: Add {G} or {W}.) This land enters tapped.
```

### CREATURES (16)

```
CMC  Card                       Qty   Color Role                                                                            Rar
  1  Pixie Illusionist          x2    U     evasive one-drop                                                                C
  2  Ivy, Gleeful Spellthief    x1    UG    threat (evasive)                                                                R
  2  Llanowar Loamspeaker       x1    G     ramp/fixing + animation                                                         R
  2  Nishoba Brawler            x1    G     threat (Domain scaling)                                                         U
  2  Vodalian Hexcatcher        x1    U     payoff (Merfolk anthem)                                                         R
  2  Volshe Tideturner          x2    U     restricted ramp (Merfolk body)                                                  C
  3  Deathbloom Gardener        x1    G     ramp/fixing                                                                     C
  3  Tatyova, Steward of Tides  x2    UG    payoff (land animation)                                                         U
  3  Voda Sea Scavenger         x2    U     selection (Merfolk body)                                                        C
  4  Nael, Avizoa Aeronaut      x2    UG    threat (evasive, Domain draw)                                                   U
  5  Sphinx of Clear Skies      x1    U     threat (evasive, Domain card advantage)                                         M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                       Qty   Color Role                                                                            Rar
  1  Rona's Vortex              x2    U     interaction                                                                     U
  2  Bite Down                  x1    G     interaction                                                                     C
  2  Essence Scatter            x1    U     interaction                                                                     C
  2  Joint Exploration          x1    U     ramp/selection (kicked land drop)                                               U
  3  Broken Wings               x2    G     interaction                                                                     C
```

## SIDEBOARD (10)

```
Card                       Qty   Color Role / When to board in                                                         Rar
Tear Asunder               x2    G     hate: artifacts + enchantments - vs. the cube's 15 artifacts and 18 enchantm... U
Negate                     x2    U     hate: sweepers - vs. any of the cube's 6 sweepers - all 6 are noncreature sp... C
Snarespinner               x2    G     hate: evasion - vs. flier decks - a 1/3 reach blocker that becomes 3/3 when ... C
Magnigoth Sentry           x1    G     hate: evasion (large reach) - vs. flier decks where a 4/4 reach body walls t... C
Essence Scatter            x1    U     flex: creature counter - vs. decks built on one or two large creatures rathe... C
Bite Down                  x1    G     flex: removal - vs. creature decks, once the board has a power-3+ body to po... C
Slimefoot's Survey         x1    G     flex: double ramp + Domain - vs. slow decks - one card is two land drops, tw... U
```

## ANALYSIS

### DECK IDENTITY

A Simic ramp-midrange deck that wins in the air behind a Domain manabase. Tatyova, Steward of Tides is the named payoff - 'Land creatures you control have flying', and from seven lands onward every land drop permanently animates a land into a 3/3 hasty flier that still taps for mana - with Llanowar Loamspeaker supplying the same animation from turn 3 without the seven-land clause. The pool caps that engine at three copies, giving it P(seen by turn 8) = 0.62, below the engine-assembly threshold, so the deck is deliberately built to win without it: six evasive bodies (Pixie Illusionist x2, Nael x2, Sphinx of Clear Skies, Ivy) carry the clock at p = 0.97. The manabase is the deck's real innovation: three common dual lands that cost no rare budget - Haunted Mire (Swamp Forest), Molten Tributary (Island Mountain) and Radiant Grove (Forest Plains) - put all five basic land types in a two-colour deck, taking Domain from X = 2 to a ceiling of X = 5 for the cost of one coloured source shifting from green to blue (G 11/U 9 becomes G 10/U 10) and five extra tapped lands. At 7 Merfolk of 23 nonland cards, Vodalian Hexcatcher's anthem reaches 6 bodies.

### THE MANABASE IS THE DECK

The most important thing in this list is not a spell. Dominaria United has ten common dual lands that each carry **two basic land types**, and three of them also produce a Simic colour:

| Land | Type line | Taps for | New basic type it supplies |
|---|---|---|---|
| Haunted Mire | Land — Swamp Forest | {B} or **{G}** | Swamp |
| Molten Tributary | Land — Island Mountain | **{U}** or {R} | Mountain |
| Radiant Grove | Land — Forest Plains | **{G}** or {W} | Plains |

Running all three inside a two-colour deck puts **all five basic land types** on the battlefield. Domain goes from **X = 2 to a ceiling of X = 5**, and the price is not a single coloured source — green stays at 10 sources, blue stays at 10 — nor a single point of rare budget, since all three are commons. The only cost is that 7 of the 17 lands enter tapped instead of 2.

That is a trade a midrange deck with a turn-8 thesis can pay and a tempo deck cannot. It is why this build looks nothing like deck 1 despite sharing four cards.

**Honest qualification, because the ceiling is not the average.** Swamp comes only from Haunted Mire ×2, Mountain only from Molten Tributary ×2, Plains only from Radiant Grove ×1. A typical game reaches **X = 3 or 4**, not 5. Nael's *"if there are five basic land types among lands you control, draw a card"* clause is now genuinely live — it was arithmetically impossible before — but it is upside, not a plan.

### WHAT DOMAIN X = 3–5 IS ACTUALLY WORTH HERE

| Card | At X = 2 (before) | At X = 3–5 (after) |
|---|---|---|
| Voda Sea Scavenger | look at top 2 | look at top 3–5 |
| Nael, Avizoa Aeronaut | top 2; draw clause **dead** | top 3–5; draw clause **live** |
| Sphinx of Clear Skies | reveal 2 — opponent hands you the empty pile | reveal 3–5 — the split is a real decision |
| Nishoba Brawler | 2/3 trample | 3/3 to 5/3 trample for two mana |
| Slimefoot's Survey (SB) | top 2 | top 3–5 |

Five cards upgraded for zero rare budget. `Sphinx of Clear Skies` in particular goes from a near-blank Domain trigger to genuine card advantage, which is what earned it a rare slot.

### THE PAYOFF SHOWS UP IN 62% OF GAMES — AND THAT IS DISCLOSED, NOT HIDDEN

Tatyova is the named payoff and the pool caps the animation engine at **three copies**: `Tatyova, Steward of Tides` ×2 (uncommon, at its copy limit) and `Llanowar Loamspeaker` ×1 (rare, at its copy limit). There is no fourth animator in Dominaria United. Reliability-weighted that is 2.5 effective copies, and:

> **P(seen by turn 8) = 0.62** — below the 0.75 engine-assembly threshold.

A deck whose win condition needed that card would lose 38% of its games to a bad draw. So the animation is **not declared as an engine role**. The declared payoff is the nine-copy threat suite — Tatyova ×2, Nael ×2, Sphinx of Clear Skies, Voda Sea Scavenger ×2, Ivy, Nishoba Brawler — which assembles at **p = 0.97**. When Tatyova does arrive with seven lands out, every land drop becomes a permanent 3/3 hasty flier that still taps for mana. When she doesn't, this is a Simic midrange deck with six evasive bodies.

That is the same structure as deck 1's single-copy lord, and for the same reason: in a pool with hard copy limits, a one- or two-of cannot be load-bearing.

### THE MERFOLK COUNT

7 Merfolk of 23 nonland cards — `Volshe Tideturner` ×2, `Voda Sea Scavenger` ×2, `Tatyova` ×2, `Vodalian Hexcatcher` ×1. The anthem reaches **6 bodies**, including both copies of the payoff, which is the best tribal density of the three builds. `Vodalian Mindsinger` would have made it 8 but lost its rare slot to `Sphinx of Clear Skies`.

The sacrifice ability is counted at its honest value and no higher: the only Merfolk this deck is willing to eat is `Voda Sea Scavenger` ×2. Tatyova is the payoff and Volshe is a mana source.

### VOLSHE TIDETURNER IS BETTER IN SIMIC THAN IN MONO-BLUE

*"{T}: Add {U}. Spend this mana only to cast an instant or sorcery spell **or a kicked spell**."* In mono-blue that second clause is dead — every kicker in the pool needs an off-colour mana. Here it is live: **9 of 23 nonland cards** can spend the mana, because `Pixie Illusionist`'s Kicker {3}{G} is payable in Simic on top of the seven instants. Same card, better deck.

### WHAT THE GRILL CHANGED, AND WHAT I GOT WRONG

The Challenger caught a factual error that materially improved the deck. My first land census asserted `Thran Portal` was the only pool land capable of raising Domain above 2. That was simply false — six commons carry basic land types, and I had not swept `type_line` across the pool to check. The entire Domain manabase above exists because that finding was correct.

Four other blocking findings drove real changes: the deck had **0 of 50 cards** that unconditionally answer a resolved ground creature (fixed with `Rona's Vortex` ×2), its stated win route "wins through the air" rested on **2 of 23 nonland cards** (fixed to 6), and its `raced` failure mode had been written by surveying *mono-green* one-drops in a *blue*-green deck (turn-1 play rate went 0% → **55%**).

### PLAY PATTERN

Turn 1 a tapped type-fixer or a Pixie Illusionist. Turns 2–4 develop mana and trade with `Rona's Vortex` / `Bite Down`, holding `Broken Wings` for whatever artifact, enchantment or flier appears. Tatyova on turn 3–4 immediately makes any animated land fly. From turn 7 the land drops themselves start attacking, and `Sphinx of Clear Skies` closes. Against decks that go wider or faster, the six evasive bodies race rather than block.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:9  3:7  4:2  5:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.6: Nishoba Brawler@0.6) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.4: Volshe Tideturner@0.7, Volshe Tideturner@0.7) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 55%  T2 94%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: The deck runs no sweeper, and the cube offers none in U/G that does not also destroy its own board (The Phasing of Zhalfir chapter III reads 'Destroy all creatures'). It answers wide boards by blocking on toughness - Volshe Tideturner 1/3, Nishoba Brawler */3, Nael 2/4, Sphinx of Clear Skies 5/5 - and by winning in the air with 6 evasive bodies.
  OK        single_large_threat: Rona's Vortex, Essence Scatter, Bite Down
  OK        noncreature_permanents: Broken Wings
  OK        stack: Essence Scatter, Vodalian Hexcatcher
  CONCEDED  graveyard: The cube dossier structural census reports 0 graveyard-hate cards in the entire cube, so no deck in this environment can answer this class; conceding it costs nothing that was available.
```

All four structural checks returned PASS, so there are no WARN-tier deviations to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Tatyova, Steward of Tides converts every surplus land into a permanent 3/3 flying hasty attacker once seven lands are out, and Llanowar Loamspeaker animates one land per turn from turn 3 with no land-count condition. Joint Exploration kicked is an extra land drop, which post-seven is an extra animation trigger. Stated limit, unchanged by the repair: all of this requires the animation package, which is 2.5 effective copies at P = 0.62 by turn 8 - in the other 38% of games surplus lands are inert, and the deck runs 0 repeatable mana sinks. |
| `screw` | mitigation | 89% of hands reach 3 lands by turn 3 and 86% are keepable in the goldfish simulation, with a 55% turn-1 play rate after the repair added Pixie Illusionist x2 and Rona's Vortex x2. Joint Exploration ('Scry 2, then draw a card') digs out of a 2-land keep, and Deathbloom Gardener and Llanowar Loamspeaker each read '{T}: Add one mana of any color', substituting for the third land. The land count is 17 rather than the computed 16 specifically to reduce this exposure. |
| `decapitation` | mitigation | Tatyova is the named payoff at 2 copies and Llanowar Loamspeaker at 1, and the deck is built so the kill mechanism does not require them: the declared payoff role at the structural gate is the 9-copy threat suite (Tatyova x2, Nael x2, Sphinx of Clear Skies, Voda Sea Scavenger x2, Ivy, Nishoba Brawler) at p = 0.97 by turn 8. If every animator is answered the deck is still a Simic midrange deck with six evasive bodies - Pixie Illusionist x2, Nael x2, Sphinx of Clear Skies and Ivy all fly. What is lost is the flood outlet, not the win condition. That fallback was under-built before Phase 9 (2 evasive cards of 23); the repair took it to 6. |
| `gas-out` | mitigation | Resource ledger, counted rather than asserted: Joint Exploration is tagged Cards: Self-Replacing ('Scry 2, then draw a card'). Beyond raw draw, the deck's card advantage is selection scaled by the Domain manabase - Voda Sea Scavenger x2 and Sphinx of Clear Skies look at X cards where X reaches 5, Nael x2 looks at X on connect AND draws a card when all five basic land types are out, a clause the pre-repair manabase made impossible. The sideboard adds Slimefoot's Survey. Honest limit: this is selection and permanents, not bulk draw - the deck holds exactly 1 unconditional cantrip. |
| `raced` | mitigation | REWRITTEN after Phase 9 finding F5, which correctly showed the previous entry surveyed MONO-GREEN one-drops in a BLUE-green deck and so declared a trade-off that did not exist. The mainboard now has a turn-1 play in 55% of games (up from 0%): Pixie Illusionist x2 is a {U} 1/1 flier that costs no fixing or ramp slot, and Rona's Vortex x2 is a one-mana instant that bounces the fastest starts. Blocking is on toughness - Volshe Tideturner 1/3, Nishoba Brawler */3, Nael 2/4, Sphinx of Clear Skies 5/5 - and the sideboard adds Snarespinner x2 and Magnigoth Sentry for the flier-heavy matchups that make up the cube's largest threat class (51 evasion cards). |
| `disruption-fizzle` | mitigation | The critical trigger is a land drop, not a spell, so once Tatyova has resolved and seven lands are out the animation happens at land-drop speed with nothing on the stack to answer. Before that, the plan is spread across 16 creature cards rather than one turn, so a counterspell on Tatyova costs one card and delays the flood outlet rather than ending the game. Vodalian Hexcatcher's Flash lets the deck deploy at end of turn into open mana. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Silverback Elder (MYTHIC) | The shape judge's own keystone, maindecked through the structural gate, and CUT in the Phase 9 repair on castability alone. 'Whenever you cast a creature spell, choose one - destroy target artifact or enchantment; or put a land from the top five onto the battlefield tapped; or gain 4 life' fires on 15 of 23 nonland cards and is the strongest green card available. But {2}{G}{G}{G} became a third double/triple-pip demand alongside Tatyova's {G}{G}{U} and Sphinx's {3}{U}{U} once the Domain manabase added 5 tapped lands. THE top swap target if you cut Sphinx of Clear Skies and re-tilt the mana green. |
| Vodalian Mindsinger (RARE) | A Merfolk, and materially better here than in mono-blue: kicked for {1}{G} it enters as a 4/4 that steals a creature with power 3 or less. Cut on the rare limit when Sphinx of Clear Skies came in to fix the evasion count - the Merfolk total went 8 to 7. The closest of the rare-limit cuts. |
| Defiler of Vigor (RARE) | A 6/6 trample for {3}{G}{G} that puts a +1/+1 counter on every creature whenever you cast a green permanent spell. Excluded for the same reason as Silverback Elder - a green double-pip five-drop in a base that is blue-primary by pip count (U 18 / G 13). |
| Herd Migration (RARE) | 'Domain - Create a 3/3 green Beast creature token for each basic land type among lands you control.' With the repaired manabase this makes 3 to 5 Beasts, which is a game-ending swing. Excluded at {6}{G}: seven mana in a deck whose curve tops at five, and the rare budget is at 5 of 5. The most interesting card in the pool this deck cannot afford. |
| Territorial Maro | 'Domain - power and toughness are each equal to TWICE the number of basic land types among lands you control.' At the repaired Domain that is a 6/6 to 10/10 for {4}{G} at uncommon, costing no rare budget. A strong fit a tier below the includes; lost the five-mana slot to Sphinx of Clear Skies, which flies and draws. The best no-rare-cost upgrade if you want more raw size. |
| Nishoba Brawler (2nd copy) | Run at 1 rather than 2. 'Domain - power is equal to the number of basic land types among lands you control' with trample makes it a 4/3 or 5/3 for two mana late, but its floor on turn two is a 2/3, and the deck already has 4 one-drops competing for the early curve. |
| The Weatherseed Treaty | The shape judge flagged it as a weak keystone at Domain X = 2, where chapter III is only +2/+2. The Domain repair changes that arithmetic - chapter III now reads +3/+3 to +5/+5 with trample - so it is a genuine sideboard consideration rather than a clear cut. Still excluded: three turns for one basic land, a 1/1 Saproling and a one-shot pump is below the rate of the two-mana plays this deck wants. |
| Floriferous Vinewall | 'When this creature enters, look at the top six cards of your library. You may reveal a land card from among them and put it into your hand.' A genuine land-finder for a plan that needs seven lands, and it was maindecked before Phase 9. Cut so the repair could add Pixie Illusionist x2 and Rona's Vortex x2 - a 0/2 Defender does not advance a win route stated as 'wins through the air'. |
| Deathbloom Gardener (2nd copy) | '{T}: Add one mana of any color' is real fixing for {G}{G}{U} and {3}{U}{U}. Cut to 1 copy when Silverback Elder's {G}{G}{G} left the deck and the fixing burden dropped. |
| Elvish Hydromancer | Kicked for {3}{U} it copies a creature you control - copying Sphinx of Clear Skies or Nael is strong. Excluded on cost: {2}{G} + {3}{U} is six mana for the mode that matters, and Tatyova is Legendary so copying the payoff is illegal. |
| Bite Down (2nd copy) | Cut from 2 to 1 in the Phase 9 repair. It needs a power-3+ creature to point, and 9 of 15 creature cards are too small; Rona's Vortex answers a creature unconditionally for one mana instead. Second copy kept in the sideboard for creature matchups. |
| Tail Swipe | 'Choose target creature you control and target creature you don't control... those creatures fight each other.' Same power-dependency problem as Bite Down but at {G} - it loses the comparison because Bite Down does not risk your own creature dying. |
| Gaea's Might | 'Domain - Target creature gets +1/+1 until end of turn for each basic land type among lands you control' - a +3/+3 to +5/+5 instant for one mana with the repaired manabase. A real combat trick the deck has no room for; the interaction slot went to unconditional answers instead. |
| Crystal Grotto | Its untapped mode produces only {C}, its any-colour mode costs an extra {1}, and its type line is plain 'Land' so it adds nothing to Domain. Strictly worse here than any of the three type-fixing duals. |
| Thran Portal (RARE) | 'As this land enters, choose a basic land type.' Was the ONLY land I originally believed could raise Domain - which was wrong, and the error is recorded. Now redundant: the three common type-fixers reach the X = 5 ceiling at zero rare cost. |
| Wooded Ridgeline | 'Land - Mountain Forest', a common that produces {R} or {G}. It duplicates Molten Tributary's Mountain type while producing green rather than blue; the pip split needs the blue half more. |
| Contaminated Aquifer / Idyllic Beachfront | Both carry a basic land type this deck wants (Swamp; Plains) but neither produces a second Simic colour that the deck is short of - Haunted Mire and Radiant Grove supply the same types while producing {G}. Kept out to hold tapped lands at 7 of 17. |
| Plaza of Heroes (RARE) | '{T}: Add one mana of any color. Spend this mana only to cast a legendary spell.' The deck has 4 legendary creature cards (Tatyova x2, Nael x2, Ivy), so the restricted mode is live more often than usual - but it is a rare against a full budget, and its unrestricted mode produces only {C}. |
| Magnigoth Sentry / Snarespinner | Both are pure reach blockers with no offensive role. Correct sideboard cards against the cube's 51-card evasion class; wrong maindeck cards for a deck that wins in the air itself. |
| Academy Wall / Coral Colony / Tidepool Turtle | Defender or purely defensive rates. Named here because they are what mitigating the 'raced' failure mode maindeck would cost, and that cost is stated rather than hidden. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 5   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.93 adj [MV 2.43 vs 2.5, 5 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  41.9%  prod  58.8%  gap -16.9pp  [OK]
  U  demand  58.1%  prod  58.8%  gap  -0.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Pool base                : commons/uncommons max 2 copies, rares/mythics max 1 copy, base = cube mainboard, no exclusions.
[PASS] Rare/mythic cap          : 5 of 5 used (0 remaining)
                                  Vodalian Hexcatcher (main, rare); Llanowar Loamspeaker (main, rare); Ivy, Gleeful Spellthief (main, rare); Sphinx of Clear Skies (main, mythic); Yavimaya Coast (main land, rare)
[PASS] Copy limits              : Verified by Phase 5C check 3 against cube_search.get_max_copies. Bite Down is 1 main + 1 side = 2 and Essence Scatter is 1 main + 1 side = 2, both at the common cap.
[PASS] Basic lands              : Island x5 and Forest x4 - format-supplied, exempt from copy limits. The three type-fixing duals (Haunted Mire x2, Molten Tributary x2, Radiant Grove x1) are commons and count normally against the copy limit.
[PASS] All cards in cube        : Verified by Phase 5C check 2 (exact string match against the working pool cache).
[PASS] Colour usability         : every nonland card returns a usable mode from effective_cost.best_mode against core_colors ['U', 'G'] + splash []
[PASS] Deck / sideboard size    : mainboard 40 (23 spells + 17 lands); sideboard 10
```
