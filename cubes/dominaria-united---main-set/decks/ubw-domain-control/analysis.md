---
deck_name: "ubw-domain-control"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-08-13T06:04:24Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x2  Island                   basic — Island
  x2  Swamp                    basic — Swamp
  x2  Contaminated Aquifer     Island Swamp; enters tapped
  x2  Geothermal Bog           Swamp Mountain; enters tapped
  x2  Haunted Mire             Swamp Forest; enters tapped
  x2  Idyllic Beachfront       Plains Island; enters tapped
  x2  Molten Tributary         Island Mountain; enters tapped
  x2  Sunlit Marsh             Plains Swamp; enters tapped
  x2  Tangled Islet            Forest Island; enters tapped
```

### CREATURES (7)

```
CMC  Card                       Qty   Color  Role                     Rar
  1  Pixie Illusionist          x2    U     Engine/Infrastructure    C
  3  Academy Wall               x1    U     Engine/Infrastructure    C
  4  Sheoldred, the Apocalypse  x1    B     Threat/Payoff            M
  5  Sphinx of Clear Skies      x1    U     Threat/Payoff            M
  7  Tolarian Terror            x2    U     Threat/Payoff            C
```

### INSTANTS & SORCERIES (13)

```
CMC  Card                       Qty   Color  Role                     Rar
  1  Cut Down                   x2    B     Interaction              U
  1  Rona's Vortex              x1    U     Interaction              U
  2  Essence Scatter            x1    U     Interaction              C
  2  Impulse                    x2    U     Engine/Infrastructure    C
  2  Negate                     x1    U     Interaction              C
  3  Choking Miasma             x1    B     Interaction              U
  3  Shadow Prophecy            x2    B     Engine/Infrastructure    C
  4  Drag to the Bottom         x1    B     Interaction              R
  4  Extinguish the Light       x2    B     Interaction              C
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty   Color  Role                     Rar
  5  Jodah's Codex              x1    C     Engine/Infrastructure    U
  6  Leyline Binding            x1    W     Interaction              R
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in      Rar
Knight of Dusk's Shadow    x1    B     Hate — lifegain              U
Negate                     x1    U     Hate — noncreature permanents C
Tribute to Urborg          x2    B     Flex — cheap removal         C
Ertai's Scorn              x2    U     Hate — spell decks / control mirror U
Soaring Drake              x1    U     Hate — evasion               C
Ertai Resurrected          x1    UB    Flex — flash answer on a body R
Tidepool Turtle            x2    U     Flex — anti-race blocker     C
```

## ANALYSIS

### DECK IDENTITY

A blue-black Domain Control deck that spends the domain counter on ANSWERS instead of threats. Leyline Binding is a flash catch-all that exiles any nonland permanent for {1}{W} at domain 4 and {W} at domain 5; Drag to the Bottom is a one-card board wipe at -5/-5 or -6/-6. Fourteen typed dual lands - seven different pairs, each producing blue or black - assemble the land types, and unlike the green build these duals do not all share a type, so the deck reaches domain 4 in 83% of games by turn five. Pixie Illusionist then closes the last step on demand: its tap ability makes a land you control become the basic land type of your choice until end of turn, converting one of the fourteen redundant Island or Swamp sources into whichever type is missing, at the exact moment a domain payoff resolves. Its sweepers are symmetric against its own board, so the threat count is deliberately low and the threats are deployed after the wipe. It wins with four resilient payoff copies: Sphinx of Clear Skies refills the hand on every connection, Sheoldred drains 2 on every opposing draw step without attacking, and two Tolarian Terrors cost {1} less per instant or sorcery in the graveyard.

### DOMAIN AS A DISCOUNT, NOT A RAMP TARGET

The green Domain build spends its land types on making creatures bigger. This deck spends them on making *answers* cheaper and wider. The same counter that would size a Territorial Maro instead does this:

| Card | domain 3 | domain 4 | domain 5 |
|---|---|---|---|
| Leyline Binding | `{2}{W}` | `{1}{W}` | `{W}` |
| Drag to the Bottom | −4/−4 | −5/−5 | −6/−6 |
| Jodah's Codex activation | `{2}` | `{1}` | `{0}` |
| Shadow Prophecy | dig 3 | dig 4 | dig 5 |

That is the whole thesis. A control deck's problem is that answers cost more than threats; domain inverts it.

### THIS IS A DOMAIN 4 DECK AND IT IS BUILT TO BE

Measured over 40,000 hands on this exact list:

| Turn | P(domain ≥ 4) | P(domain ≥ 5) |
|---|---|---|
| 3 | 0.70 | 0.19 |
| 5 | **0.83** | 0.37 |
| 7 | 0.91 | 0.51 |

Compare the green build, which reaches domain 4 in only 0.76 by turn five but domain 5 in 0.58. The difference is structural and worth understanding: **green's four typed duals all contain Forest**, so *N* duals union to at most *N*+1 types — but green has land tutors to fix it. This deck's seven duals pair across *different* types (Island-Swamp, Plains-Island, Swamp-Mountain, Plains-Swamp, Island-Mountain, Forest-Island, Swamp-Forest), so two lands can be four types — but nothing here searches for a land, so the fifth type has to be drawn.

Every payoff is already excellent at four. The deck does not need five.

### PIXIE ILLUSIONIST IS THE HIDDEN KEYSTONE

A one-mana common that the first draft of this deck missed entirely, and the Phase 9 grill caught: *"{T}: Target land you control becomes the basic land type of your choice until end of turn."*

The type census here is Island 10 / Swamp 10 / Plains 4 / Mountain 4 / Forest 4. **Fourteen of eighteen lands are an Island or Swamp source**, so in essentially every game that reaches domain 4 there is a *redundant duplicate type* sitting on the battlefield. One tap converts it into whatever is missing — at the exact moment a payoff resolves. That upgrades six cards at once, and it means the domain-5 probability table above **understates** the deck: the simulator models land draws, and Pixie doesn't draw a land, it relabels one.

### THE SWEEPERS KILL YOUR OWN BOARD — SEQUENCE ACCORDINGLY

Drag to the Bottom at domain 4 is −5/−5, which makes a 5/5 into a 0/0. It kills **all seven** of this deck's creature cards, Sphinx and Tolarian Terror included. There is no clever survival line; the deck is instead built at a deliberately low creature count so the wipe lands on a board where *you* have committed nothing, and every threat is deployable afterwards — Sheoldred at four mana, Sphinx at five, Tolarian Terror at three or four once the graveyard is stocked by the very removal that preceded the sweeper.

Choking Miasma is the exception and that is why it earned its slot: at −2/−2 it kills none of the 5/5s and not Sheoldred, only the two 1/1 Pixies. It is the sweeper you can cast with your own board already down.

### TOLARIAN TERROR IS NOT A SEVEN-DROP

*"This spell costs {1} less to cast for each instant and sorcery card in your graveyard."* Thirteen of the twenty-two nonland cards qualify. The ladder:

| Instants/sorceries in yard | Cost |
|---|---|
| 0 | `{6}{U}` — uncastable |
| 3 | `{3}{U}` |
| 4 | `{2}{U}` |
| 6+ | `{U}` |

A control deck that has answered three or four spells is casting a 5/5 with ward 2 for three mana, twice. It was added specifically because the deck failed its assembly gate at two payoff copies (p = 0.56 against a 0.75 threshold) — and it was the only card available that adds a clock without adding an *independent* threat, since the interaction suite already pays for it.

### PLAY NOTES

- **Fourteen of eighteen lands enter tapped.** Lead on a dual every time you are not casting something. The deck's first mandatory play is turn two, not turn one, which is what makes this manabase affordable at all.
- **Hold Leyline Binding.** It has flash. At domain 4 it costs two mana, so it is almost always correct to represent it rather than cast it on your own turn.
- **Three of the four payoff copies have ward 2** (Sphinx, Tolarian Terror ×2). Cheap removal cannot answer them on sight without paying a tax — that is what makes the turn-9 clock survive interaction rather than merely begin.
- **Sheoldred wins without attacking.** *"Whenever an opponent draws a card, they lose 2 life"* is 2 damage per turn cycle with no combat. Against a deck with its own card draw it is far faster. Its own draw trigger gains you life — it does not deal damage, so don't count Codex activations as a clock.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:5  2:4  3:4  4:4  5:2  6:1  7:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.7: Tolarian Terror@0.85, Tolarian Terror@0.85) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 20 copies (effective 17.6: Pixie Illusionist@0.7, Pixie Illusionist@0.7, Impulse@0.5, Impulse@0.5, Shadow Prophecy@0.6, Shadow Prophecy@0.6) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 65%  T2 90%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Drag to the Bottom, Choking Miasma
  OK        single_large_threat: Leyline Binding, Extinguish the Light, Cut Down, Rona's Vortex, Essence Scatter
  OK        noncreature_permanents: Leyline Binding, Negate, Rona's Vortex
  OK        stack: Essence Scatter, Negate
  CONCEDED  graveyard: The cube dossier's structural census reports zero graveyard-hate cards in the entire 266-card pool, so no answer of this class exists for any deck here. This matters more to this deck than to most, because the cube's graveyard-interaction class is its second largest at 32 cards.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Every one of the 18 lands carries at least one basic land type, so a surplus land raises the counter that discounts Leyline Binding and Jodah's Codex and grows Drag to the Bottom. Jodah's Codex is a mana sink that converts excess lands into cards every turn ({1} at domain 4, {0} at domain 5), Pixie Illusionist turns a redundant land into a relevant one, and Tolarian Terror is a 5/5 a flooded deck can simply hard-cast. Tidepool Turtle's '{2}{U}: Scry 1' does the same from the sideboard. |
| screw | mitigation | Repaired during the grill. The first draft accepted this mode on a cost that was oracle-false - it claimed the colourless alternatives 'fail to advance the domain counter', but Inscribed Tablet's 'Put a LAND card from among them into your hand' lets you choose the land, and every one of this deck's 18 lands carries a basic land type. The real fix went further: Pixie Illusionist x2 at {U} is both a one-mana play a two-land hand can make and the card that converts a redundant land type into the missing one. Alongside Impulse x2 ('Look at the top four cards... Put one of them into your hand') and Shadow Prophecy x2 (up to two cards to hand at instant speed), the goldfish check now reports 85% keepable hands, 92% to three lands by turn three, and a turn-one play measured tapland-aware at 24% on the draw; the deck_checks figure of 65% does not model enters-tapped and is an upper bound. |
| decapitation | mitigation | Four payoff copies across three different answer profiles: Sphinx of Clear Skies (5/5 flier with ward 2 — an opponent must pay 2 extra to target it), Sheoldred (4/5 deathtouch that wins without ever attacking, via 'Whenever an opponent draws a card, they lose 2 life'), and Tolarian Terror x2 (5/5 with ward 2). The assembly check puts P(seen by turn nine) at 0.79. Three of the four carry ward 2, so cheap removal cannot answer them on sight without a tax. |
| gas-out | mitigation | Jodah's Codex is repeatable draw for {1} at domain 4 and {0} at domain 5; Shadow Prophecy x2 is tagged Cards: Net-Positive and puts up to two cards in hand at instant speed while binning the rest as Tolarian Terror fuel; Impulse x2 is tagged Cards: Self-Replacing; and Sphinx of Clear Skies refills the hand on every connection. That is 6 of 22 nonland cards that replace or generate cards after the repair (down from 8, since Phyrexian Espionage was cut and a Codex trimmed), against 3 of 23 in the green build. |
| raced | accepted | Fourteen of eighteen lands enter tapped, and the deck's cheapest board interaction is a one-mana Cut Down that only kills a creature with total power and toughness 5 or less. Against the cube's fastest starts this deck is behind on board through turn three by construction. Mitigating would mean cutting typed duals for untapped painlands — but those have the bare type line 'Land', contribute ZERO domain, and would raise Leyline Binding's cost and shrink Drag to the Bottom, which is the deck's primary sweeper. The cost of fixing the tempo is the cost-reduction engine that makes the answers affordable at all. The sideboard pays what it can: Tidepool Turtle x2 (2/5), Soaring Drake against the flying creatures, and Tribute to Urborg x2 as cheap removal. Additional cost the first draft omitted, raised by the Phase 9 Challenger: all six painlands are RARE, and the rare/mythic cap is fully spent at 5 on Sphinx, Sheoldred, Drag to the Bottom, Leyline Binding and sideboard Ertai Resurrected. The untapped-fixing trade is therefore not merely expensive in domain terms, it is unavailable at any price short of cutting a maindeck win condition. |
| disruption-fizzle | mitigation | The critical turn is casting Drag to the Bottom into a stabilised opposing board. Because the sweeper kills all seven of this deck's own creature cards at -5/-5 (Sphinx, Sheoldred, Tolarian Terror x2, Pixie Illusionist x2, Academy Wall), the deck is built to have nothing on board when it resolves, so a countered Drag costs a turn rather than a board. The plan then retries rather than folds: Leyline Binding answers any single nonland permanent at flash speed for one or two mana, Extinguish the Light x2 destroys a creature or planeswalker unconditionally, Rona's Vortex kicked puts a permanent on the bottom of its owner's library, and the deck's own counterspells (Essence Scatter, Negate, plus Ertai's Scorn x2 and a second Negate from the board) protect the retry. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Herd Migration | The other domain build's payoff. {6}{G} is outside U/B and green is not a splash under the deterministic filter (this deck has no green source and no green card). |
| Territorial Maro | Green. Also anti-synergistic with Drag to the Bottom, which is this deck's sweeper and would kill a 10/10 Maro just as readily as an opposing creature. |
| Thran Portal | Rare land that fixes any basic type; excluded to protect the 5-card rare/mythic budget, which is fully spent on spells that win or answer. |
| Crystal Grotto | Fixes every colour but its type line is the bare 'Land' — it adds ZERO basic land types, so in a domain deck it shrinks Drag to the Bottom and raises Leyline Binding's cost. |
| Adarkar Wastes | Painland cycle (also Caves of Koilos, Shivan Reef, Sulfurous Springs, Yavimaya Coast, Karplusan Forest): rare, and their type line is bare 'Land' — zero basic land types, so they are anti-synergy with the whole pipeline despite fixing the colours well. |
| Timeless Lotus | Mythic that taps for all five colours, but it enters tapped, costs five mana, adds no basic land type, and would consume one of only five rare/mythic slots in a deck that needs those slots for answers. |
| Karn's Sylex | Mythic sweeper, but its {X} destroy-each-nonland-permanent is symmetric and would exile the deck's own Leyline Binding, undoing the exile and returning the answered permanent. |
| Vodalian Hexcatcher | Rare Merfolk lord whose counter ability requires sacrificing a Merfolk; this shell runs at most one Merfolk (Voda Sea Scavenger), so the sacrifice cost is unfed. |
| Academy Loremaster | Rare 2/3 that symmetrically offers both players an extra card each draw step; the opponent gets the same card advantage this deck is trying to monopolise, and it taxes this deck's own spells by {2} on any turn it draws. |
| Cosmic Epiphany | Rare {4}{U}{U} 'Draw cards equal to the number of instant and sorcery cards in your graveyard' — a six-mana sorcery that does nothing to the board, competing with Silver Scrutiny which is flexible at any X and castable at flash speed. |
| Rona, Sheoldred's Faithful | {1}{U}{B}{B} for a 3/4 whose trigger drains 1 per instant/sorcery cast; triple-pip in a manabase already stretched across five basic land types, and 1 damage a spell is not a clock. |
| Coral Colony | Its mill ability scales with creatures you control with defender; this deck runs at most 2 defenders, so the ability mills 2 at a time and the deck has no mill win condition to support it. |
| Tyrannical Pitlord | Rare 6/6 flier for six, but 'When this creature leaves the battlefield, sacrifice the chosen creature' turns any removal spell into a two-for-one against a deck that runs only a handful of creatures. |
| Defiler of Dreams | Rare 4/3 flier whose discount applies only to blue PERMANENT spells; this list is overwhelmingly instants and sorceries, so the cost reduction is close to dead. |

### A CORRECTION TO THE DEPLOYMENT NUMBERS

The Phase 9 grill on the aggro build of this archetype found that `deck_checks.goldfish_sim` — the function that produces the structural gate's `play_by_turn` figures — **does not model "This land enters tapped"**. The token does not appear anywhere in that module, and its castability check credits every land seen as an available mana source. For a deck built on enters-tapped typed duals, which is every Domain deck in this cube, the reported deployment curve is an upper bound.

The finding was back-ported to this deck and re-measured with a tapland-aware simulation over the actual list (40,000 hands, tempo-first land sequencing — the policy most favourable to deployment):

| | `deck_checks` reports | tapland-aware (on the draw) | tapland-aware (on the play) |
|---|---|---|---|
| Turn 1 play | 0.647 | **0.244** | 0.196 |
| Turn 2 play | 0.902 | **0.579** | 0.522 |
| Turn 3 play | 0.974 | **0.856** | 0.826 |

The keepable-hand rate is unaffected — it only counts lands in hand, not whether they are usable. What changes is how fast the deck actually deploys, and it changes most for the deck with the most taplands. This is the deck the correction matters most for: **fourteen of eighteen lands enter tapped**, and the turn-one figure was overstated by 40 percentage points. Read it as a genuine cost of the manabase rather than a flaw in the deck — a control deck's first mandatory play is a two-mana Cut Down or Essence Scatter, not a one-drop, and the true turn-three rate of 0.86 is the number that actually gates the plan. But do not plan on interacting on turn one.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.23   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.97 adj [MV 3.23 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  53.8%  prod  55.6%  gap  -1.8pp  [OK]
  U  demand  46.2%  prod  55.6%  gap  -9.4pp  [OK]

Splash Check: [PASS]
  W  1 card(s), max CMC 6  sources 4/3  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1-mainboard-size: 40 vs 40
[PASS] 1-sideboard-size: 10 vs 10
[PASS] 2-exact-name-membership: all names found in working pool
[PASS] 3-copy-limits: all within card_pool_rules (basics exempt)
[PASS] 3b-rare-mythic-cap: 5/5: ['Drag to the Bottom', 'Ertai Resurrected', 'Leyline Binding', 'Sheoldred, the Apocalypse', 'Sphinx of Clear Skies']
[PASS] 4-colour-usability: all nonland cards usable in ['U', 'B']+['W']; modes={}
[PASS] 5-splash-cap: <=3 cards per splash colour, all in splash_candidates
[PASS] 6-no-domain-dead-lands: every land carries >=1 basic land type
[PASS] 7-land-count-vs-target: list=18, recommended=18
[PASS] 8-domain-target-reachable: declared domain_target=5, distinct basic land types available=5 {"Plains": 4, "Island": 10, "Swamp": 10, "Mountain": 4, "Forest": 4}
```