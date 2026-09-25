---
deck_name: "urg-kicker-big-mana"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GUR"
format: "40-card"
built_at: "2026-08-13T02:29:03Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  1x Crystal Grotto         Any colour for {1}, scry on ETB
  2x Molten Tributary       UR dual, enters tapped
  2x Tangled Islet          GU dual, enters tapped
  2x Wooded Ridgeline       RG dual, enters tapped
  1x Yavimaya Coast         GU painland, untapped
  4x Forest                 basic
  2x Island                 basic
  2x Mountain               basic
```

### CREATURES (17)
```
CMC  Card                       Qty   Color Role                                     Rar
  1  Pixie Illusionist          x2    U     Kicked 3/3 flier + land-type fixing      C
  1  Shivan Devastator          x1    R     Keystone — X finisher, flying haste      M
  2  Leaf-Crowned Visionary     x1    G     Elf lord + {G} draw per Elf cast         R
  2  Llanowar Loamspeaker       x1    G     Ramp/fix — any colour + manland          R
  2  Vineshaper Prodigy         x2    G     Body + kicked card selection             C
  2  Volshe Tideturner          x2    U     Ramp — {U} for kicked spells             C
  2  Yavimaya Iconoclast        x2    G     Kicked hasty trampler                    U
  3  Deathbloom Gardener        x2    G     Ramp/fix — any colour, deathtouch blocker C
  3  Elvish Hydromancer         x2    G     Kicked copy of the best body             U
  3  Vodalian Mindsinger        x1    U     Keystone — double-kicked steal           R
  5  Territorial Maro           x1    G     Domain top-end body                      U
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                       Qty   Color Role                                     Rar
  2  Bite Down                  x1    G     Size-uncapped creature removal           C
  2  Fires of Victory           x2    R     Kicked removal + draw                    U
  2  Joint Exploration          x1    U     Cantrip + kicked extra land drop         U
  2  Lightning Strike           x2    R     Removal / reach                          C
  3  Broken Wings               x1    G     Artifact / enchantment / flier answer    C
```

## SIDEBOARD (10)
```
Card                       Qty   Color Role / When to board in                      Rar
Broken Wings               x1    G     Artifacts (15) / enchantments (18) / fliers  C
Essence Scatter            x2    U     Single large creature threats                C
Negate                     x2    U     Sagas, sweepers, planeswalkers               C
Smash to Dust              x2    R     Go-wide token boards; artifacts              C
Jaya's Firenado            x2    R     Large single threats and planeswalkers       C
Magnigoth Sentry           x1    G     The cube 51-card evasion class               C
```

## ANALYSIS

### DECK IDENTITY

Temur Kicker Big-Mana. Every cheap card in this deck has two prices: a base mode that holds the early turns and a kicked mode that converts surplus mana into a threat, a card, or fixing — 12 of the 24 nonland cards print the word Kicker. Six accelerants carry the deck to the seventh mana, and three of them (Deathbloom Gardener x2, Llanowar Loamspeaker) tap for any colour, which is what actually pays the off-colour pips that DMU kicker costs demand; Volshe Tideturner adds {U} only and is spendable exclusively on instants, sorceries and kicked spells. The deck wins by resolving a double-kicked Vodalian Mindsinger or an oversized Shivan Devastator, with Elvish Hydromancer's kicked mode copying whichever landed.

### WHY THIS IS A THREE-COLOUR DECK AND NOT A TWO-COLOUR ONE

Every kicker card in Dominaria United is two-coloured in effect: the cast cost is one colour and the kicker
cost is another. Each colour *pair* holds exactly four distinct kicker cards. Temur is the only identity in
this cube where three such pairs overlap — UG, UR and RG contribute 12 distinct kicker cards, and it is also
the only three-colour combination where every pair has 2 free duals in the cube's mana infrastructure. The
deck runs 12 kicker cards of 24 nonlands as a direct consequence.

### THE COST OF THAT CHOICE, STATED PLAINLY

6 of the 16 lands enter tapped (Tangled Islet x2, Molten Tributary x2, Wooded Ridgeline x2). The untapped
duals in this cube are all rare, and the pool restriction allows only 5 rare/mythic cards in the whole deck,
so exactly one of them is affordable: Yavimaya Coast, chosen because G and U are the two deepest pip demands
(17 and 14 of 39 combined base+kicker pips). This is a real tax on the draw and the goldfish numbers absorb
it rather than hide it — 84% keepable against an 80% threshold.

### THE ELF COUNT

Leaf-Crowned Visionary was not in the original build; the self-grill's Challenger surfaced it with a count I
could not rebut. 9 of the other 24 nonland cards are Elf-typed — Deathbloom Gardener x2, Llanowar Loamspeaker,
Vineshaper Prodigy x2, Yavimaya Iconoclast x2, Elvish Hydromancer x2 — so "Whenever you cast an Elf spell,
you may pay {G}. If you do, draw a card" converts 9 of 24 casts into a cantrip, paid for with exactly the
surplus mana this deck's whole plan manufactures. It also pumps 8 of those 9. It cost the Briar Hydra rare
slot; Territorial Maro replaces that body at uncommon for one mana less.

### DOMAIN IS HIGHER THAN IT LOOKS

Territorial Maro's power and toughness are "twice the number of basic land types among lands you control".
Natively this deck reaches 3 (Forest, Island, Mountain) — 14 of its 16 lands carry a basic type. But Pixie
Illusionist reads "{T}: Target land you control becomes the basic land type of your choice until end of turn",
and there are 2 copies: one Pixie makes Maro an 8/8, two make it a 10/10. The cost is that a tapped Pixie
does not attack or block that turn.

### THE SEVEN-MANA LINE

Double-kicked Vodalian Mindsinger costs {3}{U}{U}{R}{G} = 7 mana and needs three colours simultaneously. It
enters as a 5/5 (1/1 base plus four counters) and steals any creature with power 4 or less. With 16 lands plus
one accelerant that is a turn-6 play, which is exactly the thesis turn the assembly check was run against
(payoff p=0.94, enabler p=0.89 by turn 6).

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:3  2:14  3:6  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8: Vodalian Mindsinger@0.8, Elvish Hydromancer@0.7, Elvish Hydromancer@0.7, Territorial Maro@0.8) → p=0.94 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.2: Volshe Tideturner@0.8, Volshe Tideturner@0.8, Joint Exploration@0.7, Leaf-Crowned Visionary@0.9) → p=0.89 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 43%  T2 96%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper: adding one would cost the creature-density this deck needs to convert surplus mana into kicked bodies; 2x Deathbloom Gardener (deathtouch) block up the curve and 2x Smash to Dust ("deals 1 damage to each creature your opponents control") board in.
  OK        single_large_threat: Vodalian Mindsinger, Bite Down, Lightning Strike, Lightning Strike, Fires of Victory, Fires of Victory
  OK        noncreature_permanents: Broken Wings
  CONCEDED  stack: No mainboard counterspells: holding up {1}{U} conflicts with spending every turn on a kicked mode, which is the thesis; 2x Essence Scatter and 2x Negate come in from the sideboard.
  CONCEDED  graveyard: The cube census reports 0 graveyard-hate cards pool-wide, so no colour can answer the 32-card graveyard theme directly; this deck races it instead.
```

- No WARN-tier structural flags: curve and goldfish both returned PASS, so no deviation response is owed.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Shivan Devastator ({X}{R}, "This creature enters with X +1/+1 counters on it") turns every surplus land into a bigger flying hasty body; Llanowar Loamspeaker ("{T}: Target land you control becomes a 3/3 Elemental creature with haste until end of turn") makes an excess land itself an attacker; Leaf-Crowned Visionary converts spare {G} into cards on 10 of 24 nonland casts. 12 of the 24 nonland cards print Kicker and so have a mode that costs more than their base (13 counting Shivan Devastator's {X}). Note the two exceptions to Volshe Tideturner's restricted mana: Shivan Devastator and Territorial Maro are neither instants/sorceries nor kicked spells, so Volshe cannot help cast them. |
| screw | mitigation | Two-land keeps are live because 17 of 24 nonlands cost 2 or less and every one is castable off a single coloured source in its base mode; Joint Exploration ("Scry 2, then draw a card") and Vineshaper Prodigy x2 (kicked: "look at the top three cards of your library. Put one of them into your hand") dig toward land three, and 6 accelerants substitute for the third and fourth land. Goldfish check: 84% keepable, 84% at three lands by turn 3. |
| decapitation | mitigation | The kill is not one card. Vodalian Mindsinger, Shivan Devastator, Territorial Maro and Elvish Hydromancer x2 are 5 independent top-end threats across 3 colours, and none is a prerequisite for another — Shivan Devastator alone is a scalable win on an empty board. |
| gas-out | mitigation | Leaf-Crowned Visionary ("Whenever you cast an Elf spell, you may pay {G}. If you do, draw a card") turns 9 of the 24 nonland cards — every other Elf: Deathbloom Gardener x2, Llanowar Loamspeaker, Vineshaper Prodigy x2, Yavimaya Iconoclast x2, Elvish Hydromancer x2 — into a cantrip for surplus mana the deck already manufactures. Joint Exploration and Fires of Victory x2 (kicked: "draw a card") are self-replacing, and Shivan Devastator makes an empty hand irrelevant because the mana itself is the threat. |
| raced | accepted | Mitigating fully would mean maindecking cheap defensive interaction and a sweeper, which costs the surplus-mana curve the kicked modes require — the deck would stop being a big-mana deck. Partial answers are in: Deathbloom Gardener x2 (deathtouch) block anything, Lightning Strike x2 and Fires of Victory x2 kill early attackers, and the fastest clocks in the cube threat profile are the WR/RW aggro shells, against which 2x Smash to Dust and 2x Jaya’s Firenado board in. |
| disruption-fizzle | mitigation | Kicker degrades gracefully: every kicked spell is still castable in its base mode, so a countered or removed piece costs a mode, not the game. If the double-kicked Mindsinger is answered on the turn it lands, the mana that paid for it is still there next turn for Shivan Devastator at the same X, and Elvish Hydromancer copies whatever survived. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Silverback Elder | Mythic; {2}{G}{G}{G} is unreliable off 9 green sources of 16 in a three-colour base before turn 6, and it would displace a rare that the 5-card budget cannot spare. |
| Silver Scrutiny | Rare; "Draw X cards" with conditional flash has no kicker, no board impact and no mana generation — it advances the kill only by drawing into it. |
| Sphinx of Clear Skies | Mythic; a six-mana rival finisher competing for the exact turn the thesis reserves for the double-kicked Mindsinger, and its Domain trigger caps at 3 natively here. |
| Temporal Firestorm | Rare; "deals 5 damage to each creature" kills 10 of this deck's 16 creature copies unless kicked to 6 mana, and {R}{R} off 6 red sources is the shallowest colour. |
| Briar Hydra | Rare; cut in the grill repair — Territorial Maro is the same 6/6-class Domain body at {4}{G} uncommon, one mana cheaper, and freeing the rare slot is what paid for Leaf-Crowned Visionary. |
| Tolarian Terror | Only 7 of 24 nonlands are instants or sorceries and there is no self-mill, so its "costs {1} less for each instant and sorcery card in your graveyard" discount averages about 2 by turn 6. |
| Ghitu Amplifier | Both prices are on-colour, but its static ability triggers on instants and sorceries (7 of 24) and the kicked bounce is temporary rather than an answer. |
| Rona's Vortex | Cheap instant-speed answer to an arbitrarily large body, but its kicker {2}{B} is uncastable in U/R/G — the one card that would break this deck's two-prices identity. |
| Viashino Branchrider | A one-drop whose kicker ({2}{G}) and pump ({2}{R}) compete for exactly the mana the turn-6 double-kick needs. |
| Timely Interference | Flagged as a weak keystone by the shape judge: -1/-0 kills almost nothing and the kicked rider only forces a block, so its real function is a one-mana cantrip. |
| Sprouting Goblin | Flagged as a weak keystone: the kicked fetch puts the basic into hand, not onto the battlefield, so it fixes a turn late and does not accelerate. |
| Colossal Growth | One-shot +3/+3 (kicked +4/+4 trample haste) with no card draw — it converts a board into damage only if a board already exists, which a controller-seat deck often lacks. |
| Molten Monstrosity | "Costs {X} less where X is the greatest power among creatures you control" needs a large creature already resolved, which is the turn you no longer need a 5/5. |
| Meteorite | A {5} mana rock is too slow when 16 lands plus 6 accelerants already reach seven mana on turn 6. |
| Salvaged Manaworker | "{1}: Add one mana of any color" is net-zero mana — a colour filter, not acceleration, so it does not move the deck toward the seventh mana. |
| Mossbeard Ancient / Linebreaker Baloth / Elfhame Wurm / Frostfist Strider / Hurler Cyclops | Double-pip five-drops; in a three-colour base with 6 taplands the deck cannot reliably hold {G}{G} or {U}{U} or {R}{R} on the turn they matter. |
| Shivan Reef / Karplusan Forest | The other two untapped rare duals. Only one untapped dual fits the 5-rare budget; Yavimaya Coast wins it because G and U are the deepest pip demands (17 and 14 of 39 combined pips) while R is 8. |
| Impulse | Sideboard consideration, cut in the grill: it answers no threat class in the cube, and the slot went to Magnigoth Sentry against an evasion class of 51 of 247 nonland cube cards (20.7%). |
| Hexbane Tortoise / Snarespinner | Sideboard considerations against evasion; Magnigoth Sentry is the same colour cost class with a 4/4 body and unconditional reach. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.25   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.33 adj [MV 2.25 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  53.8%  prod  62.5%  gap  -8.7pp  [OK]
  R  demand  19.2%  prod  43.8%  gap -24.6pp  [OK]
  U  demand  26.9%  prod  50.0%  gap -23.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2          PASS — no card exceeds 2 copies
rares_mythics_max_1_each         PASS
rare_mythic_total_max_5          PASS — exactly 5: Llanowar Loamspeaker, Leaf-Crowned Visionary, Vodalian Mindsinger, Shivan Devastator, Yavimaya Coast. Sideboard is 100% commons.
basics_unlimited                 PASS — Forest x4, Island x2, Mountain x2
all_cards_from_cube_mainboard    PASS (Phase 5C check 2)
```