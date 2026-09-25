---
deck_name: "gwr-domain-ramp-haymaker"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WRG"
format: "40-card"
built_at: "2026-08-13T06:04:23Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x7  Forest                   basic — Forest
  x1  Mountain                 basic — Mountain
  x1  Plains                   basic — Plains
  x2  Haunted Mire             Swamp Forest; enters tapped
  x2  Radiant Grove            Forest Plains; enters tapped
  x2  Tangled Islet            Forest Island; enters tapped
  x2  Wooded Ridgeline         Mountain Forest; enters tapped
```

### CREATURES (11)

```
CMC  Card                       Qty   Color  Role                     Rar
  2  Floriferous Vinewall       x2    G     Engine/Infrastructure    C
  2  Llanowar Loamspeaker       x1    G     Engine/Infrastructure    R
  2  Nishoba Brawler            x2    G     Threat/Payoff            U
  3  Llanowar Greenwidow        x1    G     Threat/Payoff            R
  5  Meria's Outrider           x2    R     Threat/Payoff            C
  5  Territorial Maro           x2    G     Threat/Payoff            U
  6  Briar Hydra                x1    G     Threat/Payoff            R
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                       Qty   Color  Role                     Rar
  1  Tail Swipe                 x1    G     Interaction              U
  2  Artillery Blast            x1    W     Interaction              C
  2  Bite Down                  x2    G     Interaction              C
  3  Broken Wings               x2    G     Interaction              C
  5  Slimefoot's Survey         x2    G     Engine/Infrastructure    U
  7  Herd Migration             x1    G     Threat/Payoff            R
```

### OTHER SPELLS (3)

```
CMC  Card                       Qty   Color  Role                     Rar
  3  The Weatherseed Treaty     x1    G     Engine/Infrastructure    U
  5  Jodah's Codex              x1    C     Engine/Infrastructure    U
  6  Leyline Binding            x1    W     Interaction              R
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in      Rar
Tail Swipe                 x1    G     Flex — extra removal         U
Artillery Blast            x1    W     Hate — attacking creatures   C
Snarespinner               x2    G     Hate — evasion               C
Tear Asunder               x2    G     Hate — artifacts / enchantments U
Hexbane Tortoise           x2    G     Flex — anti-race blocker     C
Magnigoth Sentry           x2    G     Hate — evasion               C
```

## ANALYSIS

### DECK IDENTITY

A green-base Domain Ramp deck that treats basic land TYPES, not colours, as the resource it accumulates. Eight common typed dual lands cover all five basic land types between them, and Slimefoot's Survey, The Weatherseed Treaty and Floriferous Vinewall add more. Measured against the actual list (40k-hand simulation, on the play, optimal land ordering and optimal fetches), the deck has domain 4 in 76% of games by turn five and domain 5 in 58%; by turn seven those are 88% and 78%. It converts that type count straight into board: Territorial Maro is a 10/10 for five at domain 5, Briar Hydra a 6/6 trampler that adds five +1/+1 counters per connection, and Herd Migration makes five 3/3 Beasts from one card. A Leyline Binding that costs {W} at domain 5 and two Meria's Outriders (5 damage to the face on entry) are the same counter spent on removal and reach.

### THE MANABASE IS THE DECK

Domain counts **basic land types among lands you control**, not colours. That makes the land slots the real payoff engine, and it produces a constraint that does not exist in any other deck in this cube: a land that taps for the right colour but has the bare type line `Land` actively shrinks your threats. Every painland (Adarkar Wastes, Karplusan Forest, Yavimaya Coast and the rest), Crystal Grotto and Plaza of Heroes were cut for that reason — **17 of 17 lands here carry at least one basic land type**.

The binding constraint is subtler and it cost this deck a full grill round to find. The pool contains exactly four green typed duals, and **all four contain Forest**:

| Land | Basic land types |
|---|---|
| Radiant Grove | Forest, Plains |
| Wooded Ridgeline | Mountain, Forest |
| Haunted Mire | Swamp, Forest |
| Tangled Islet | Forest, Island |

Because they all share Forest, *N* duals union to at most *N*+1 types. Two duals is domain 3, not 4. Reaching domain 5 off duals alone requires all four distinct ones. That single fact sets the deck's real clock, and it is why the measured curve looks like this:

| Turn | P(domain ≥ 4) | P(domain ≥ 5) |
|---|---|---|
| 4 | 0.60 | 0.14 |
| 5 | 0.76 | 0.58 |
| 6 | 0.83 | 0.69 |
| 7 | 0.88 | 0.78 |

(40,000-hand simulation over this exact list, on the play, with optimal land ordering and optimal fetches — deliberately generous.) The practical reading: **turn five is a domain-4 turn, not a domain-5 turn.** Territorial Maro is usually an 8/8 rather than a 10/10 when it lands, Meria's Outrider usually drains for 4, and Leyline Binding usually costs `{1}{W}`. All still excellent — but plan the turn on 4, and treat 5 as the upside.

### WHY GREEN CAPS THE MANABASE AT TWO FLEX SLOTS

With green as the only core colour, `deck_audit.color_balance` compares 100% green pip demand against the fraction of lands producing green, and FAILs past a 15pp gap. That forces **≥15 of 17 green sources**. The four green duals cap at 2 copies each as commons, so 8 duals + 7 Forests = 15, and exactly **two land slots are free**. Those two are Plains and Mountain here: they cast the W and R splashes *and* they keep The Weatherseed Treaty's *"Search your library for a basic land card"* live, which a Forest-only manabase would not.

### THE SPLASHES ARE CHEAPER THAN THEY LOOK

Leyline Binding prints at `{5}{W}` and is a six-drop on paper. Its domain discount removes the entire generic component, so what actually has to be paid is one white pip — served by 3 sources plus Llanowar Loamspeaker's *"{T}: Add one mana of any color"*, and fetchable by name, since Slimefoot's Survey searches *land cards that each have a basic land type* and can go get a Radiant Grove. The same logic makes Artillery Blast a two-mana 6-damage spell. Only Meria's Outrider ×2 pays a real red cost.

### THE REMOVAL IS PRICED OFF YOUR OWN CREATURES

Bite Down ×2 and Tail Swipe each need a creature you control to supply the damage. There are 11 creatures in 23 nonland cards, but Floriferous Vinewall is 0/2 and Llanowar Loamspeaker is 1/3 — the **effective denominator is 8 of 11**, four of which are domain-sized. Held until a Territorial Maro or Briar Hydra is out, Bite Down kills essentially anything in the cube for two mana. Cast on turn three off a Nishoba Brawler, it is a 3-damage trick. Sequencing matters more here than card choice.

### PLAY NOTES

- **Lead on the dual you are missing a type from, not the one that casts your hand.** Nine lands enter untapped; the eight duals do not. A turn-one tapland is nearly free in a deck whose first real play is a two-drop.
- **Herd Migration is a land in your opening hand.** *"{1}{G}, Discard this card: Search your library for a basic land card… You gain 3 life"* — pitching it on turn two to hit a land drop is correct far more often than it feels.
- **Jodah's Codex is the long game.** At domain 4 it draws for `{1}` and at domain 5 for `{0}`. It replaced the deck's total absence of card advantage during the grill.
- **Against sweepers, hold Llanowar Greenwidow's recursion.** `{7}{G}` discounted by domain is `{2}{G}` at five types, and it returns from the graveyard, so it is the one threat a wrath does not permanently answer.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:1  2:8  3:4  5:7  6:2  7:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies → p=0.97 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 12: The Weatherseed Treaty@0.6, Floriferous Vinewall@0.7, Floriferous Vinewall@0.7) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 20%  T2 89%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: The cube contains six sweepers and none is castable here: Drag to the Bottom is {2}{B}{B}, Choking Miasma is {1}{B}{B}, The Phasing of Zhalfir is {2}{U}{U}, Temporal Firestorm is {3}{R}{R} (double red exceeds a splash), Karn's Sylex is symmetric and would destroy this deck's own Beast tokens and Territorial Maro, and Smash to Dust's sweeper mode is only 'deals 1 damage to each creature your opponents control', which kills nothing this cube plays above one toughness. So this deck answers a wide board by out-sizing it: Territorial Maro blocks as a 10/10, Briar Hydra as a 6/6 trampler, and Herd Migration replaces the board with five 3/3 Beasts at once.
  OK        single_large_threat: Leyline Binding, Bite Down, Tail Swipe, Artillery Blast
  OK        noncreature_permanents: Leyline Binding, Broken Wings
  CONCEDED  stack: Green has no counterspell in this pool and none of the six named W/R splash candidates counters anything; the deck interacts only after resolution, with Leyline Binding's flash as the closest approximation to holding up an answer.
  CONCEDED  graveyard: The cube dossier's structural census reports zero graveyard-hate cards in the entire 266-card pool, so there is no answer of this class available to any deck here, in or out of these colours.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Every one of the 17 lands carries at least one basic land type, so a surplus land is never blank — it raises the domain count that sizes Territorial Maro (x2 types), Briar Hydra's counters and Herd Migration's token count. Beyond that, Llanowar Loamspeaker's '{T}: Target land you control becomes a 3/3 Elemental creature with haste until end of turn' converts an excess land into an attacker every turn, and Herd Migration's '{1}{G}, Discard this card: Search your library for a basic land card... You gain 3 life' means the flooded-out copy is itself a land. |
| screw | mitigation | Seven acceleration/selection cards (deck_audit.accel_count = 7) support two-land keeps: Floriferous Vinewall x2 at two mana looks at the top six and puts a land into hand — and unlike a basic-only search it can take Tangled Islet or Haunted Mire, the deck's only Island and Swamp sources — plus Slimefoot's Survey x2 and The Weatherseed Treaty putting lands onto the battlefield. Llanowar Loamspeaker taps for any colour from turn three (it has summoning sickness the turn it is cast). Goldfish: 84% keepable hands, 88% to three lands by turn three. |
| decapitation | mitigation | The kill is not single-card. Herd Migration, Territorial Maro x2, Briar Hydra and Llanowar Greenwidow each independently convert the same domain count into a lethal-scale body, and Meria's Outrider x2 delivers damage equal to the domain count on entry without needing to connect — nine payoff copies, which the assembly check puts at p=0.97 of being seen by turn seven. Magnitude stated honestly: Outrider's entry damage is 5 in the 58% of games at domain 5 by turn five and 4 in most of the remainder. |
| gas-out | mitigation | Repaired during the grill. Jodah's Codex — 'Domain — {5}, {T}: Draw a card. This ability costs {1} less to activate for each basic land type among lands you control' — is a repeatable draw engine costing {1} at domain 4 and {0} at domain 5, for zero colour commitment and zero rare budget. Alongside Floriferous Vinewall x2 ('look at the top six cards of your library. You may reveal a land card from among them and put it into your hand'), the list now has 3 of 23 nonland cards that replace or generate cards, against 1 before. |
| raced | mitigation | Corrected arithmetic: all four typed duals in this list contain Forest, so two duals union to exactly three basic land types — Nishoba Brawler is a 3/3 trampler on turn three off two duals, not a 4/4; four types needs three duals. The anti-race plan is therefore the blockers, not the Brawler: Floriferous Vinewall x2 is a two-mana Defender that also finds a land, Llanowar Greenwidow is a 3-mana 4/3 with reach and trample, and Meria's Outrider is a 4/4 with reach that drains for the domain count on entry. Leyline Binding costs {W} at domain 5 so an answer is affordable alongside a development play. The sideboard adds Hexbane Tortoise x2 (a {2}{G} 3/2 with Ward {2}, on the board by turn three) and four reach bodies against the cube's 51-card evasion class — replacing the seven-mana Mossbeard Ancient, which arrived after a fast clock had already resolved. |
| disruption-fizzle | mitigation | The critical turn is casting Herd Migration for seven. If it resolves, single-target removal cannot undo it — it makes five separate 3/3 bodies, so the opponent needs a sweeper, of which the whole cube contains six. If it is countered or discarded, the plan retries rather than folds: Territorial Maro x2 and Briar Hydra each convert the same assembled domain into a lethal body for five or six mana, and the deck's mana is fully deployed by then, so the retry is on the following turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sphinx of Clear Skies | Mythic with a {3}{U}{U} cost — double blue is not a splash under the deterministic splash filter, and it would consume one of only five rare/mythic slots for a card this shell cannot reliably cast. |
| Drag to the Bottom | {2}{B}{B} double-black sweeper; symmetric -X/-X kills this deck's own Nishoba Brawler, Rootwalla and Herd Migration Beast tokens, and double-black exceeds a splash. |
| Thran Portal | Rare land that fixes any basic type, but it costs one of five rare/mythic slots and its mana abilities cost 1 life each; the ten common typed duals do the same job at zero rarity cost. |
| Bortuk Bonerattle | {4}{B}{G} reanimation payoff; adds a fourth colour requirement for a six-drop whose value depends on already having a creature in the graveyard. |
| Nael, Avizoa Aeronaut | {2}{G}{U} 2/4 flier whose domain trigger needs combat damage to a player — a blue splash bought for a card-selection trigger this ramp plan does not need. |
| Sprouting Goblin | Kicked it searches a typed land to HAND, not to the battlefield, so it neither ramps nor turns on domain the turn it lands. |
| Quirion Beastcaller | Rare that grows on creature casts; this list casts only about a dozen creatures and would spend a rare slot on a two-drop with no domain text. |
| Leaf-Crowned Visionary | Rare Elf lord; this list contains 2 Elves (Deathbloom Gardener, Llanowar Loamspeaker) out of 23 nonland cards, so the lord bonus and the Elf-cast draw trigger are near-dead. |
| Karn's Sylex | Mythic sweeper whose {X} destroy-each-nonland-permanent is symmetric and would destroy this deck's own Territorial Maro and Beast tokens. |
| Hexbane Tortoise | 3/2 ward-2 enlist body with no domain text and no ramp — a fair two-power three-drop in a deck whose three-drops must either fix mana or scale with domain. |
| Barkweave Crusher | 2/5 enlist for four; the enlist payoff wants a wide aggressive board, which is the opposite of a deck that taps out for five- and seven-drops. |
| Snarespinner | 1/3 reach that only pumps when blocking a flier; Magnigoth Sentry blocks the same fliers as a 4/4. |
| Meteorite | Five-mana artifact for 2 damage and a mana rock — too slow as ramp when the deck's own five-drops are 10/10s. |
| Plaza of Heroes | Rare land whose any-colour mana is restricted to legendary spells; this list runs at most two legendary cards, and it carries no basic land type for domain. |
| Adarkar Wastes | Painland cycle (also Karplusan Forest, Yavimaya Coast, Shivan Reef, Sulfurous Springs, Caves of Koilos): rare, and crucially their type line is bare 'Land' — they add ZERO basic land types and so are anti-synergy with the entire domain plan. |

### A CORRECTION TO THE DEPLOYMENT NUMBERS

The Phase 9 grill on the aggro build of this archetype found that `deck_checks.goldfish_sim` — the function that produces the structural gate's `play_by_turn` figures — **does not model "This land enters tapped"**. The token does not appear anywhere in that module, and its castability check credits every land seen as an available mana source. For a deck built on enters-tapped typed duals, which is every Domain deck in this cube, the reported deployment curve is an upper bound.

The finding was back-ported to this deck and re-measured with a tapland-aware simulation over the actual list (40,000 hands, tempo-first land sequencing — the policy most favourable to deployment):

| | `deck_checks` reports | tapland-aware (on the draw) | tapland-aware (on the play) |
|---|---|---|---|
| Turn 1 play | 0.197 | **0.137** | 0.110 |
| Turn 2 play | 0.888 | **0.666** | 0.588 |
| Turn 3 play | 0.975 | **0.942** | 0.905 |

The keepable-hand rate is unaffected — it only counts lands in hand, not whether they are usable. What changes is how fast the deck actually deploys, and it changes most for the deck with the most taplands. Eight of seventeen lands here enter tapped. The practical reading is that this deck's turn two is usually a tapland turn, not a Nishoba Brawler turn — which is consistent with how the build is meant to play, since its first real deployment is a two-drop and its plan peaks on turn five and later. It does mean the deck is slower out of the gates than the structural gate suggests, and against the cube's fastest starts that gap is real.

## MANA AUDIT: WARN

```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.61   Ramp cards: 7   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.31 adj [MV 3.61 vs 2.5, 7 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [WARN]
  G  demand 100.0%  prod  88.2%  gap +11.8pp  [WARN]

Flags:
  WARN  G  gap +11.8pp

Splash Check: [PASS]
  R  3 card(s), max CMC 5  sources 3/3  [OK]
  W  3 card(s), max CMC 6  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1-mainboard-size: 40 vs 40
[PASS] 1-sideboard-size: 10 vs 10
[PASS] 2-exact-name-membership: all names found in working pool
[PASS] 3-copy-limits: all within card_pool_rules (basics exempt)
[PASS] 3b-rare-mythic-cap: 5/5: ['Briar Hydra', 'Herd Migration', 'Leyline Binding', 'Llanowar Greenwidow', 'Llanowar Loamspeaker']
[PASS] 4-colour-usability: all nonland cards usable in ['G']+['W', 'R']; modes={}
[PASS] 5-splash-cap: <=3 cards per splash colour, all in splash_candidates
[PASS] 6-no-domain-dead-lands: every land carries >=1 basic land type
[PASS] 7-land-count-vs-target: list=17, recommended=17
[PASS] 8-domain-target-reachable: declared domain_target=5, distinct basic land types available=5 {"Plains": 3, "Island": 2, "Swamp": 2, "Mountain": 3, "Forest": 15}
```