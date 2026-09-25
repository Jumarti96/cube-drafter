---
deck_name: "gw-domain-counters"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-08-14T23:16:43Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x5   Plains
  x4   Forest
  x2   Radiant Grove    Forest Plains, 2 domain types
  x1   Haunted Mire     Swamp type, taps G
  x1   Island           domain fuel (Island type)
  x1   Mountain         domain fuel (Mountain type)
  x1   Swamp            domain fuel (Swamp type)
  x1   Tangled Islet    Island type, taps G
  x1   Wooded Ridgeline Mountain type, taps G
```

### CREATURES (10)
```
CMC  Card                         Qty   Color  Role                                    Rar
  2  Floriferous Vinewall         x1    G      Domain assembly - land dig + wall       C
  2  Nishoba Brawler              x2    G      Threat/Payoff - domain-scaled trampler  U
  2  Quirion Beastcaller          x1    G      Threat/Payoff - counter bank            R
  3  Deathbloom Gardener          x2    G      Mana - any-colour source                C
  3  King Darien XLVIII           x1    GW     Threat/Payoff - anthem + mana sink      R
  5  Zar Ojanen, Scion of Efrava  x2    GW     PAYOFF - kill mechanism                 U
  6  Briar Hydra                  x1    G      PAYOFF - domain counters on damage      R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                  Qty   Color  Role                                   Rar
  2  Artillery Blast       x2    W      Interaction - domain-scaled damage     C
  3  Scout the Wilderness  x2    G      Domain assembly - fetch basic          C
  5  Slimefoot's Survey    x2    G      Domain assembly - fetch 2 typed lands  U
```

### OTHER SPELLS (7)
```
CMC  Card                    Qty   Color  Role                                              Rar
  3  Citizen's Arrest        x2    W      Interaction - exile                               C
  3  Karn's Sylex            x1    C      Interaction - symmetric sweeper                   M
  3  The Weatherseed Treaty  x2    G      Domain assembly - fetch basic + finisher chapter  U
  5  Jodah's Codex           x1    C      Engine - domain-priced card draw                  U
  6  Leyline Binding         x1    W      Interaction - domain-priced exile                 R
```

## SIDEBOARD (10)
```
Card               Qty   Color  Role / When to board in                 Rar
Broken Wings       x2    G      SB - artifact/enchantment/flier answer  C
Magnigoth Sentry   x2    G      SB - 4/4 reach flier blocker            C
Prayer of Binding  x2    W      SB - flash exile answer                 U
Destroy Evil       x2    W      SB - modal creature/enchantment answer  C
Bite Down          x2    G      SB - one-sided fight removal            C
```

## ANALYSIS

### DECK IDENTITY

A GW domain midrange deck whose real resource is basic land TYPES, not mana. Zar Ojanen, Scion of Efrava is the payoff: at five basic land types every attack it makes puts a permanent +1/+1 counter on each creature with toughness 4 or less, and the deck runs two copies. The mana base is built so that every missing basic land type has TWO sources - a typed dual that still taps for green, and a basic that Scout the Wilderness and The Weatherseed Treaty can actually fetch - which takes the deck from reaching domain 5 in about a third of games to about three quarters. The same domain count that fuels the counters also shrinks Leyline Binding toward one mana, turns Jodah's Codex into a near-free draw each turn, and makes Artillery Blast a five-damage removal spell.

### THE DECK'S REAL RESOURCE IS BASIC LAND TYPES, AND THAT CHANGED THE MANA BASE TWICE

Domain counts **basic land types among lands you control**, and a land has a type only if its type line says so. Enumerating the whole pool by `type_line` found nine typed dual lands — not just the obvious one:

| Land | Basic land types | Taps for |
|---|---|---|
| Radiant Grove | Forest, Plains | G or W |
| Tangled Islet | Forest, **Island** | G or U |
| Haunted Mire | **Swamp**, Forest | B or G |
| Wooded Ridgeline | **Mountain**, Forest | R or G |
| Crystal Grotto | **none** | C, or any for {1} |

The first build used only the typed duals, reaching domain 5 with zero dead lands. That looked strictly better and it was wrong. With one source of each missing type, **domain 5 arrived in only about a third of games by turn 7** — and worse, four of the deck's six land-search effects (Scout the Wilderness ×2, The Weatherseed Treaty ×2) search for a *"basic land card"* specifically and so could not fetch a dual at all. They were dead domain tutors.

The final base runs **both** — a typed dual and a basic for each missing type. Measured over 20,000 simulated games:

| Mana base | P(domain 5) by T7 | Mean domain at T7 |
|---|---|---|
| Typed duals only (zero dead lands) | 0.34 | 3.77 |
| Six typed duals (both colour sides) | 0.46 | 4.18 |
| **Duals + basics (this deck)** | **0.74** | **4.64** |

The price is three lands that produce no castable mana. It is worth paying because those three basics are the only version of Island, Swamp and Mountain that four of the six search effects can find.

### EVERY DOMAIN NUMBER, STATED AT THE MEDIAN AND THE CEILING

The median game is domain 4, not 5. Both are given because the difference is real:

| Card | At domain 4 (median) | At domain 5 |
|---|---|---|
| Leyline Binding | costs {1}{W} | costs {W} |
| Jodah's Codex | {1} per card | **{0}** per card |
| Artillery Blast | 5 damage | 6 damage |
| Nishoba Brawler | 4/3 trample | 5/3 trample |
| Zar Ojanen reach | 7 of 10 creature copies | 9 of 10 |

That last row is the one to watch. Zar Ojanen counters creatures with toughness **less than** the domain count. At domain 5 the threshold is toughness 4, which includes Zar Ojanen itself (4/4) — both copies counter each other and themselves. At domain 4 the threshold drops to toughness 3 and both Zars fall out of their own anthem. Briar Hydra (6/6) is never inside it at any domain number.

### KARN'S SYLEX IS IN THIS DECK BECAUSE A CONCESSION TURNED OUT TO BE FALSE

The build originally conceded that it could not answer a wide board, on the grounds that none of the cube's six sweepers is castable in green or white. That was wrong: **Karn's Sylex costs {3} colourless** and is castable in every deck in the cube. Its `{X}` destroy is symmetric, so the number that matters is what X=2 costs *this* list — 4 of 23 nonland copies (Nishoba Brawler ×2, Quirion Beastcaller, Floriferous Vinewall) — while leaving Zar Ojanen (5), Briar Hydra (6), Slimefoot's Survey (5), Jodah's Codex (5) and Leyline Binding (6) untouched. That asymmetry is the whole argument for it.

### PLAY PATTERN

There are no one-drops; the measured turn-1 play rate is 0%. Turns 1–3 are land drops and assembly (Floriferous Vinewall, Scout the Wilderness, The Weatherseed Treaty). Slimefoot's Survey is the card that jumps the domain count fastest — it fetches **two** lands with basic land types, so it can take you from domain 2 to domain 4 in one cast, and its "look at the top X" resolves *after* the fetch, so X is the improved number.

The kill is Zar Ojanen attacking, repeatedly. Each attack taps it, each tap counters up the small half of the board permanently, and the counters accumulate across turns in a way no single removal spell undoes.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  2:6  3:10  5:5  6:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.2: Briar Hydra@0.6, Nishoba Brawler@0.8, Nishoba Brawler@0.8) → p=0.91 (need ≥ 0.75)
  PASS  enabler: 9 copies → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 73%  T3 96%
Coverage:  [PASS]
  OK        wide_boards: Karn's Sylex
  OK        single_large_threat: Leyline Binding, Citizen's Arrest, Artillery Blast
  OK        noncreature_permanents: Leyline Binding, Karn's Sylex
  CONCEDED  stack: no card in the working pool with G or W identity counters a spell; this build instead answers resolved permanents with exile and with a symmetric sweeper, neither of which cares what resolved.
  CONCEDED  graveyard: the structural census found zero graveyard-hate cards in the entire cube, and a direct oracle scan of the working pool for exile-a-graveyard text returned only self-exiling cards. No colour can cover this class here.
```

- The land-property census changed the deck twice. All three sketchers budgeted three off-colour BASIC lands as domain fuel and accepted that ~18% of the mana base would cast nothing. Enumerating basic land types from type_line across the whole pool surfaced nine typed dual lands, each carrying two basic land types and each a common - which produced a first build with zero dead lands. The Challenger then showed by simulation that this was the wrong optimisation: with only ONE source of each missing type, and with 4 of the deck's 6 land-search effects able to fetch only BASIC lands, domain 5 arrived in about a third of games. The final base runs both - a typed dual AND a basic for each missing type - measured at 74% by turn 7.

- Mana audit returns WARN, and the WARN is a tool artifact rather than a mana problem, as the Challenger independently traced: the splash check classifies the basic Island, Swamp and Mountain as splash CARDS (CMC 0) and asks for three sources of U, B and R. This deck contains zero U, B or R spells; those lands are domain fuel. The colour-balance check that measures real castability returns PASS on both core colours (G +8.6pp, W -2.7pp).

- The structural gate returns PASS on all four checks after the repairs: curve PASS, assembly PASS (payoff p=0.91, enabler p=0.97), goldfish PASS at 81% keepable, and coverage PASS with wide_boards now an ANSWERED class rather than a false concession.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Every excess land is a resource this deck spends: Jodah's Codex converts mana into cards ('{5}, {T}: Draw a card', reduced to {0} at domain 5 and {1} at the median domain 4), King Darien XLVIII's '{3}{G}{W}: Put a +1/+1 counter on King Darien and create a 1/1 white Soldier creature token' is a repeatable threat factory, Karn's Sylex is an {X} sink that scales with surplus mana, and Slimefoot's Survey turns a flooded board into two more typed lands plus a dig. A deck whose payoff scales with LAND TYPES is the one archetype where a surplus land can still be an upgrade. |
| screw | mitigation | Nine enabler copies fix and ramp: Scout the Wilderness x2 and The Weatherseed Treaty x2 each put a basic onto the battlefield, Slimefoot's Survey x2 puts two typed lands onto the battlefield, Floriferous Vinewall looks at the top six for a land card, and Radiant Grove x2 each supply two basic land types on one card. Deathbloom Gardener x2 add any-colour mana on top. The goldfish check measures 81% keepable hands and 88% reaching three lands by turn 3. The honest cost: there are no one-drops, so a 2-land hand does nothing on turn 1 - the measured T1 play rate is 0%. |
| decapitation | mitigation | Zar Ojanen answered on sight costs a turn, not the plan - the deck runs 2 copies, and the domain count that powers it also powers Briar Hydra, Nishoba Brawler x2 (power = domain), Leyline Binding (cost = 6 minus domain), Artillery Blast x2 (damage = 1 plus domain) and Jodah's Codex. Quirion Beastcaller's 'When this creature dies, distribute X +1/+1 counters among any number of target creatures you control' means removal on the counter bank relocates the counters instead of erasing them. |
| gas-out | mitigation | Jodah's Codex draws a card every turn for {0} at domain 5 and {1} at domain 4; Slimefoot's Survey x2 look at the top X cards and reload the top of the library; Floriferous Vinewall looks at six and takes a land; The Weatherseed Treaty x2 and Scout the Wilderness x2 each replace themselves with a permanent on the battlefield. Net-positive or self-replacing cards in the list: 9 of the 23 nonlands (corrected from 10 per Challenger #7). |
| raced | mitigation | REWRITTEN AFTER THE GRILL - the previous entry accepted this mode on the ground that mitigating would cost domain-assembly slots, which the Challenger showed was false: cheap interaction comes out of the interaction bucket, not the engine. The mainboard now answers the cube's 51 evasion creatures (20.7% density, its largest class) with Artillery Blast x2 - 'deals X damage to target TAPPED creature, where X is 1 plus the number of basic land types', which is 5 damage at the deck's median domain and kills essentially any attacking flier in the cube for two mana. Floriferous Vinewall is a 0/2 defender that blocks the ground while this happens, and Karn's Sylex answers a wide fast start at X=2. The sideboard adds Magnigoth Sentry x2 (4/4 reach) and Broken Wings x2. |
| disruption-fizzle | mitigation | There is no single critical turn to interact with. The counters Zar Ojanen places are PERMANENT and are placed on every combat, so answering one attack does not undo the previous ones, and the deck's other payoffs read the same resource independently - killing Zar Ojanen in response to its trigger still leaves Leyline Binding priced at {1}{W} (or {W} at domain 5), Jodah's Codex drawing for {1} (or {0}), Nishoba Brawler a 4/3 (or 5/3) and Artillery Blast dealing 5 (or 6). The mainboard answers what resolves rather than trying to stop it on the stack: three exile effects (Leyline Binding, Citizen's Arrest x2), plus Artillery Blast x2 and Karn's Sylex. CORRECTED IN THE APPROVAL ROUND - an earlier draft of this entry still named Prayer of Binding x2, which repair #8 had moved to the sideboard, and it was stated at domain 5 alone rather than dual-stated at the median. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Territorial Maro | Its power and toughness are each TWICE the domain count, so at this deck's measured mean domain of 4.64 at turn 7 it is roughly a 9/9 for five mana. It was originally cut as 'below rate before domain 4', which the Challenger correctly identified as a floor case rather than the median. It stays out only because all 23 nonland slots are spoken for by the four BLOCKING repairs - this is the first card to try on iteration. Note one genuine anti-synergy: its toughness scales with the same count Zar Ojanen tests against, so Zar never counters it. |
| Llanowar Greenwidow | Cut during the grill for Karn's Sylex. Its graveyard buyback costs {2}{G} at domain 5, but it returns TAPPED and Zar Ojanen triggers only when ZAR becomes tapped, so the recursion never feeds the kill mechanism - the shape judge demoted it from payoff to recursive body, and its rare slot was better spent on the wide-board answer the deck did not have. |
| Herd Migration | At domain 5 it makes five 3/3 Beasts, and its '{1}{G}, Discard this card: Search your library for a basic land card' mode means it is never a dead draw. Cut on curve: it was the deck's only seven-drop and the first goldfish run returned WARN at 73% keepable with it in the list. |
| Jodah's Codex (2nd copy) | A second copy is legal and costs nothing against the rare cap. Contested only on slots: the cube holds 5 artifact answers (2.0% density), so the 'one removable artifact' risk is small, and every nonland slot is committed. Free to add if you cut a Citizen's Arrest. |
| Temporary Lockdown | 'Exile each nonland permanent with mana value 2 or less' is a genuine answer to a wide board and to the cheap half of the cube's 51 evasion creatures. It exiles 4 of this deck's own 23 nonland copies (Nishoba Brawler x2, Quirion Beastcaller, Floriferous Vinewall), and it needs a 6th rare slot - Karn's Sylex covers the same class at colourless cost and with an X the deck chooses. |
| Silverback Elder | Its land mode puts ANY land from the top five onto the battlefield, so unlike Scout the Wilderness and The Weatherseed Treaty it can find the typed duals, and it triggers on each creature spell cast. Excluded on colour and budget: {G}{G}{G} against 9 green sources, and it needs a 6th rare/mythic slot. |
| Gaea’s Might | '+1/+1 until end of turn for each basic land type' is +5/+5 for one mana at domain 5 and the deck runs trample bodies. Excluded because it is a pump spell in a build whose interaction budget is already at 26.1% and whose payoff already grows the board permanently - a temporary pump does not compound the way a +1/+1 counter does. |
| Sunbathing Rootwalla | A two-drop mana sink whose activation grants +1/+1 per basic land type. A reasonable flood outlet, but the deck already has three (Jodah's Codex, King Darien's activation, Karn's Sylex) and the two-drop slot is better spent on Nishoba Brawler, whose power reads the same count for free. |
| Crystal Grotto | Fixes any colour, but its type line is bare 'Land' - it carries NO basic land type, so it pays a land slot without paying the domain dividend. Both the grindy and the threat-dense sketchers reached this conclusion independently. |
| Thran Portal | It DOES carry a basic land type ('As this land enters, choose a basic land type. This land is the chosen type'). Excluded because it is a rare against a full budget, its mana abilities cost 1 life each activation, and naming a missing type means it taps for off-colour mana anyway - a worse Tangled Islet that also costs a rare slot. |

## MANA AUDIT: WARN

```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.43   Ramp cards: 9   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.26 adj [MV 3.43 vs 2.5, 9 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  61.5%  prod  52.9%  gap  +8.6pp  [OK]
  W  demand  38.5%  prod  41.2%  gap  -2.7pp  [OK]

Splash Check: [WARN]
  B  1 card(s), max CMC 0  sources 2/3  [WARN]
  R  1 card(s), max CMC 0  sources 2/3  [WARN]
  U  1 card(s), max CMC 0  sources 2/3  [WARN]
  WARN  U  actual 2 < required 3
  WARN  B  actual 2 < required 3
  WARN  R  actual 2 < required 3
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Mainboard size            : 40 / 40
[PASS] Sideboard size            : 10 / 10
[PASS] All cards in cube pool    : 0 phantom names
[PASS] Copy limits (C/U max 2)   : 0 violations
[PASS] Copy limits (R/M max 1)   : 0 violations
[PASS] Max 5 rares/mythics total : 5 / 5  (Briar Hydra, Karn's Sylex, King Darien XLVIII, Leyline Binding, Quirion Beastcaller)
[PASS] Colour usability (G/W)    : 0 unusable cards
[PASS] Splash cap                : no splash colours declared
```