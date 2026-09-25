---
deck_name: "gu-kicker-value"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GU"
format: "40-card"
built_at: "2026-08-13T03:10:34Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  1x Crystal Grotto         Any colour for {1}, scry on ETB
  2x Tangled Islet          GU dual, enters tapped
  1x Yavimaya Coast         GU painland, untapped
  8x Forest                 basic
  4x Island                 basic
```

### CREATURES (15)
```
CMC  Card                       Qty   Color Role                                     Rar
  1  Pixie Illusionist          x2    U     Kicker value — 1-drop flier, kicked 3/3  C
  2  Llanowar Loamspeaker       x1    G     Ramp/fix — any colour + manland          R
  2  Vineshaper Prodigy         x2    G     Kicker value — body + kicked dig 3       C
  2  Volshe Tideturner          x1    U     Ramp — {U} for kicked spells and instants C
  3  Deathbloom Gardener        x2    G     Ramp/fix — any colour, deathtouch blocker C
  3  Elvish Hydromancer         x2    G     Payoff — kicked token copy of best body  U
  5  Defiler of Vigor           x1    G     Top-end 6/6 trample + board-wide counters R
  5  Elfhame Wurm               x1    G     Top-end 5/4 vigilance trample            C
  5  Linebreaker Baloth         x1    G     Top-end 4/5 enlist beater                U
  5  Silverback Elder           x1    G     Engine/top-end — value on every creature cast M
  7  Mossbeard Ancient          x1    G     Top-end 7/7 trample — the copy target    U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                       Qty   Color Role                                     Rar
  2  Bite Down                  x2    G     Creature-leveraged removal — capped at your best power C
  2  Essence Scatter            x2    U     Stack interaction — counter creature spell C
  2  Joint Exploration          x2    U     Kicker value — cantrip + kicked land drop U
  2  Silver Scrutiny            x1    U     Card advantage — X draw, flash at X<=3   R
  2  Tear Asunder               x1    G     Exile an artifact or enchantment         U
  3  Broken Wings               x1    G     Artifact / enchantment / flier answer    C
```

## SIDEBOARD (10)
```
Card                       Qty   Color Role / When to board in                      Rar
Broken Wings               x1    G     Artifacts (15) / enchantments (18) / fliers  C
Tear Asunder               x1    G     Second exile effect vs artifact/enchantment decks U
Negate                     x2    U     Sagas, sweepers, planeswalkers               C
Magnigoth Sentry           x2    G     The cube 51-card evasion class               C
Snarespinner               x1    G     Cheap anti-flier blocker vs fast evasive starts C
Tail Swipe                 x2    G     Fight-based removal vs single large threats  U
Impede Momentum            x1    U     Tap + 3 stun counters vs one dominant attacker C
```

## ANALYSIS

### DECK IDENTITY

Simic Kicker Value. This is the tightest mana of any kicker build in the cube — two colours, one dual cycle, and no off-colour pip anywhere. Every kicker card in G/U spends its extra mana on a card or a permanent upgrade rather than damage: Joint Exploration kicked puts a land from hand onto the battlefield, Vineshaper Prodigy kicked digs three, Pixie Illusionist kicked is a 3/3 flier. That accumulated advantage deploys a large green body — Mossbeard Ancient, Defiler of Vigor, Silverback Elder — and Elvish Hydromancer's kicked {3}{U} mode creates a token copy of it. Silverback Elder is the engine that makes the long game one-sided: every creature cast is a free artifact/enchantment kill, a land off the top five, or 4 life.

### THE TIGHTEST MANA OF THE FOUR KICKER BUILDS

Every kicker card in Dominaria United is paid in a second colour, so a kicker deck is always a two-colour
commitment at minimum. This build is what that commitment looks like at its cleanest: 2 of 16 lands enter
tapped, there is no off-colour pip anywhere in the 24 nonlands, and the four kicker cards form a closed loop —
Pixie Illusionist is a blue card with a {3}{G} kicker, Joint Exploration is a blue card with a {G} kicker,
Vineshaper Prodigy is a green card with a {1}{U} kicker, Elvish Hydromancer is a green card with a {3}{U}
kicker. Each colour pays for the other's kicks, which is why the pip demand only moves from 70/30 to roughly
63/37 once kicker costs are added.

### SILVERBACK ELDER IS THE REASON INTERACTION SITS LOW

The interaction slot is 6 of 24 (25%), near the bottom of the midrange band, and that is a decision rather
than an oversight. Silverback Elder reads "Whenever you cast a creature spell, choose one — Destroy target
artifact or enchantment. • Look at the top five cards of your library. You may put a land card from among them
onto the battlefield tapped. • You gain 4 life." This list runs 16 creatures of 24 nonlands, so once the Elder
resolves it is a repeatable artifact/enchantment kill, a repeatable land, or 4 life every single turn. That
is why `coverage.noncreature_permanents` credits it alongside Broken Wings and Tear Asunder — with the caveat
the grill correctly raised, that it must resolve and survive first.

### WHY TERRITORIAL MARO WAS CUT BEFORE THE GRILL EVER SAW IT

Territorial Maro's power and toughness are "twice the number of basic land types among lands you control".
In G/U only two basic land types are reachable — Forest and Island — because every Plains-, Swamp- or
Mountain-typed dual in the cube is off-colour. So Maro is a 4/4 for five here, not the 6/6 it is in a
three-colour shell. Elfhame Wurm is an unconditional 5/4 with vigilance and trample at the same cost and at
common instead of uncommon. Pixie Illusionist can raise Domain to 3 or 4 by tapping, but paying a creature's
tap to make a 4/4 into a 6/6 is a worse rate than just playing the Wurm.

### THE VOLSHE TIDETURNER CAVEAT

Volshe Tideturner reads "{T}: Add {U}. Spend this mana only to cast an instant or sorcery spell or a kicked
spell." Against this list that is 13 of 24 nonlands — but not one of the five top-end bodies qualifies, since
none is an instant, a sorcery, or a kicker card. The grill raised this and it is correct: the ramp that
actually casts Silverback Elder and Mossbeard Ancient is Deathbloom Gardener x2 and Llanowar Loamspeaker,
three cards. Volshe was cut from 2 copies to 1 in response. It stays at one because it does fund the actual
kill — the kicked Elvish Hydromancer at six mana is a kicked spell.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:2  2:12  3:5  5:4  7:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.3: Elvish Hydromancer@0.7, Elvish Hydromancer@0.7, Silverback Elder@0.9) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.2: Volshe Tideturner@0.8, Joint Exploration@0.7, Joint Exploration@0.7) → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 32%  T2 93%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: G/U has no sweeper anywhere in this pool, so mitigating is not a slot decision but an impossibility in these colours; the deck blocks instead — Deathbloom Gardener x2 (deathtouch), Mossbeard Ancient (7/7) and Silverback Elder (5/7) hold the ground while Elvish Hydromancer copies one of them.
  OK        single_large_threat: Bite Down, Bite Down, Essence Scatter, Essence Scatter
  OK        noncreature_permanents: Broken Wings, Tear Asunder, Silverback Elder
  OK        stack: Essence Scatter, Essence Scatter
  CONCEDED  graveyard: The cube census reports 0 graveyard-hate cards pool-wide, so no colour can answer the 32-card graveyard theme directly; this deck out-grinds it instead.
```

- No WARN-tier structural flags: curve and goldfish both returned PASS, so no deviation response is owed.
- Elvish Hydromancer's assembly weight is held at 0.7 even though its oracle ("copy of target creature you control") can legally target the Hydromancer itself — the discount is deliberately conservative, since copying a 3/2 for six mana does not deliver the thesis kill.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Elvish Hydromancer's kicked {3}{U} mode (6 mana total) and Pixie Illusionist's kicked {3}{G} mode (5 total) are mana sinks that turn surplus lands into bodies; Silver Scrutiny ("Draw X cards") scales without limit; Llanowar Loamspeaker ("{T}: Target land you control becomes a 3/3 Elemental creature with haste") makes an excess land an attacker. 8 of 24 nonland cards have a mode that costs more than their base. |
| screw | mitigation | Only 2 of 16 lands enter tapped, and 14 of 24 nonlands cost 2 or less. Joint Exploration x2 ("Scry 2, then draw a card") and Vineshaper Prodigy x2 (kicked: "look at the top three cards of your library") dig to land three, and 8 accelerants substitute for lands. Goldfish: 84% keepable, 84% three lands by turn 3. |
| decapitation | mitigation | Five independent top-end bodies — Silverback Elder, Mossbeard Ancient, Defiler of Vigor, Linebreaker Baloth, Elfhame Wurm — none a prerequisite for another. Elvish Hydromancer copies whichever survived, so answering one on sight does not answer the plan. |
| gas-out | mitigation | Silverback Elder's second mode ("Look at the top five cards of your library. You may put a land card from among them onto the battlefield tapped") triggers on every creature cast, and this list runs 16 creatures of 24 nonlands. Silver Scrutiny draws X. Joint Exploration x2 and Vineshaper Prodigy x2 are self-replacing: 5 of 24 nonlands replace themselves or better. |
| raced | accepted | Mitigating would mean maindecking cheap defensive bodies and more instant-speed removal, which costs the six-mana turn-7 kicked-Hydromancer curve this build was chosen for. The partial answers are Deathbloom Gardener x2 (deathtouch blockers that trade with any attacker regardless of size), Bite Down x2, and Mossbeard Ancient's "you gain 5 life" on entry; against fast starts, 2x Magnigoth Sentry, 1x Snarespinner and 2x Tail Swipe board in. Note the dossier threat_profile carries no speed or shell classification, so no claim is made about which archetypes are fastest. |
| disruption-fizzle | mitigation | Every kicker card has a live base mode, so a countered kick costs a mode, not the game. If the kicked Elvish Hydromancer is answered on the critical turn, the second copy does the same job, and the large body it was going to copy is still on the board doing its own work. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Territorial Maro | Cut before the grill: "twice the number of basic land types" is a 4/4 for five in G/U, where only Forest and Island are reachable. Elfhame Wurm is a 5/4 vigilance trample at the same cost and at common. |
| Threats Undetected | Rare, and flagged as a weak keystone by the shape judge — at four mana the opponent chooses and shuffles away the two best of four, so it spends a scarce rare slot on the second- and fourth-best creatures. |
| Aether Channeler | Rare, flagged as a weak keystone: its only interactive mode returns a nonland permanent to hand, a temporary answer that trades down on a plan expected to survive to turn 7. |
| Quirion Beastcaller | Rare; "whenever you cast a creature spell, put a +1/+1 counter on this creature" is live on 16 of 24 nonlands, but taking it means cutting one of the five top-end bodies the thesis names as the copy target. |
| Leaf-Crowned Visionary | Rare; only 7 of 16 creatures here are Elves (Deathbloom Gardener x2, Llanowar Loamspeaker, Vineshaper Prodigy x2, Elvish Hydromancer x2) — a thinner denominator than the three-colour Temur build, and the rare budget is at 5/5. |
| Tatyova, Steward of Tides | The grill's strongest absence: "Land creatures you control have flying" turns Llanowar Loamspeaker's animated land into a 3/3 flier. Declined because {G}{G}{U} off 7 blue sources is the hardest cost in the deck and the land-animation clause needs seven lands on a 16-land build. |
| Vodalian Mindsinger | Rare; kicked with the on-colour {1}{G} it is a 5-mana 4/4 that steals a creature with power 3 or less — but it is the Temur build's keystone, and here it would displace a top-end body while the U/U cast cost competes with Silver Scrutiny. |
| Ertai's Scorn | {1}{U}{U} is the second-hardest cost in the deck off 7 blue sources, and the discount clause requires the opponent to have cast two spells that turn. |
| Impulse | Digs four toward the singleton top end, but it answers no threat class and the deck already runs 5 self-replacing cards plus Silver Scrutiny. |
| Sphinx of Clear Skies | Mythic; its Domain trigger reveals X cards where X is basic land types, capped at 2 natively in G/U — the same census problem that cut Territorial Maro, and it costs a rare slot. |
| Haughty Djinn / Tolarian Terror | Both scale off instants and sorceries in the graveyard; this list runs only 8 of 24 and does no self-mill, so both are below their advertised rate here. |
| Floriferous Vinewall | A 0/2 defender that digs six for a land would serve both screw and raced, and it is a creature spell for Silverback Elder — cut only because the 24 nonland slots were fully committed after the grill repairs. |
| Nael, Avizoa Aeronaut / Ivy, Gleeful Spellthief | Both are legendary three-drops whose payoff needs combat damage to connect; Nael also keys off basic land types, which cap at 2 here. |
| Academy Wall / Coral Colony / Hexbane Tortoise | Defensive bodies considered for the raced concession; Magnigoth Sentry and Snarespinner answer the same problem while also blocking the cube's 51-card evasion class. |
| Snarespinner (2nd copy) | Sideboard consideration, cut in the grill: the board was 8 of 10 slots on creature answers, so one copy went to Tear Asunder to cover artifacts and enchantments. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 7   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.73 adj [MV 2.83 vs 2.5, 7 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  70.0%  prod  75.0%  gap  -5.0pp  [OK]
  U  demand  30.0%  prod  50.0%  gap -20.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2          PASS — no card exceeds 2 copies
rares_mythics_max_1_each         PASS
rare_mythic_total_max_5          PASS — exactly 5: Llanowar Loamspeaker, Silver Scrutiny, Silverback Elder, Defiler of Vigor, Yavimaya Coast. Sideboard is 100% commons/uncommons.
basics_unlimited                 PASS — Forest x8, Island x4
all_cards_from_cube_mainboard    PASS (Phase 5C check 2)
```