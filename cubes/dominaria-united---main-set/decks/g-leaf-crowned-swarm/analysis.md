---
deck_name: "g-leaf-crowned-swarm"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "G"
format: "40-card"
built_at: "2026-08-18T22:37:18Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x16  Forest                     basic
```

### CREATURES (17)

```
CMC Card                       Qty   Color  Role                             Rar
1   Llanowar Stalker           x2    G      Payload/Payoff                   C
2   Leaf-Crowned Visionary     x1    G      Payload/Payoff + Engine/Outlet   R
2   Llanowar Loamspeaker       x1    G      Infrastructure/Consistency       R
2   Quirion Beastcaller        x1    G      Payload/Payoff                   R
2   Vineshaper Prodigy         x2    G      Payload/Payoff                   C
2   Yavimaya Iconoclast        x2    G      Payload/Payoff                   U
3   Bog Badger                 x1    G      Payload/Payoff                   C
3   Deathbloom Gardener        x2    G      Infrastructure/Consistency       C
3   Elvish Hydromancer         x2    G      Payload/Payoff                   U
3   Hexbane Tortoise           x2    G      Payload/Payoff                   C
3   Llanowar Greenwidow        x1    G      Payload/Payoff                   R
```

### INSTANTS & SORCERIES (7)

```
CMC Card                       Qty   Color  Role                             Rar
1   Tail Swipe                 x2    G      Interaction/Disruption           U
2   Bite Down                  x2    G      Interaction/Disruption           C
2   Colossal Growth            x2    G      Payload/Payoff                   C
3   Threats Undetected         x1    G      Infrastructure/Consistency       R
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                      Rar
Snarespinner               x2    G      Interaction/Disruption — vs cheap fliers     C
Tear Asunder               x2    G      Interaction/Disruption — vs enchantment/arti U
Broken Wings               x2    G      Interaction/Disruption — vs fliers, artifact C
Magnigoth Sentry           x2    G      Interaction/Disruption — vs decks whose cloc C
Linebreaker Baloth         x2    G      Payload/Payoff — vs go-wide small-creature b U
```

## ANALYSIS
### DECK IDENTITY
A mono-green Elf swarm that curves out from turn one and converts board width into lethal damage. Leaf-Crowned Visionary is the anthem and the refuel; 11 other Elf bodies get +1/+1 from it and each Elf spell cast offers a {G}-for-a-card trade. The curve is hard-capped at MV3 so every draw is castable on the turn it is drawn, and the four interaction slots are creature-powered (Bite Down, Tail Swipe) so they scale with the same anthem that wins the race.
**The pool caps the tribe at twelve.** Of the 21 Elf copies in the filtered pool, only 12 are castable off Forests: Llanowar Stalker x2, Vineshaper Prodigy x2, Yavimaya Iconoclast x2, Elvish Hydromancer x2, Deathbloom Gardener x2, Leaf-Crowned Visionary and Llanowar Loamspeaker. The other nine (Nael, Radha, Queen Allenal, Meria's Outrider, Meria) each require {U}, {R} or {W}{W}. All 12 are in this deck, so the Elf denominator here is maxed out and the remaining creature slots are non-Elf by necessity, not by choice.

**Two of the twelve are Elves only on paper.** Vineshaper Prodigy's kicker is {1}{U} and Elvish Hydromancer's is {3}{U} — both dead mono-green. They are in the list as a 2/2 and a 3/2 that happen to be Elf spells, which is exactly what Leaf-Crowned Visionary's draw trigger asks for. That is an honest downgrade, not a hidden one: 12 of the 24 nonland cards trigger the draw, and 11 of the 17 creatures take the +1/+1.

**The rare cap is the real deckbuilding constraint.** Five rares, and mono-green needs none of them on lands — so all five went to spells: the lord, the mana Elf, Quirion Beastcaller, Llanowar Greenwidow and Threats Undetected. Defiler of Vigor and Silverback Elder were both proposed during the grill and both rejected on the same ground: they are MV5 in a deck whose entire shape is an MV3 cap.

**Every Domain card in green is a trap here.** Domain counts basic land TYPES, and a 16-Forest manabase has 1 of 5. Nishoba Brawler is a 1/3, Territorial Maro a 2/2 for five, Gaea's Might a one-mana +1/+1, and Briar Hydra's trigger puts a single counter. This is the clearest case in the cube where a card's printed ceiling and its value in a specific deck diverge completely.

**Enlist is weaker here than it looks.** Hexbane Tortoise's enlist adds a nonattacking creature's POWER, and every donor in this list has printed power 1 (2 under the anthem) — so tapping one to pump the Tortoise usually just moves damage from one creature to another. It is credited at 0.3 reliability in the assembly check for exactly that reason, and the Tortoise earns its slot on being a 3/2 with ward {2} for three, not on the enlist.

| Interaction | What it costs | What it kills |
|---|---|---|
| Tail Swipe | {G} | Your creature's power +1 (main phase only) — but it fights back |
| Bite Down | {1}{G} | Your creature's power, no damage taken back |
| Colossal Growth | {1}{G} | Nothing — it wins the combat instead, +3/+3 at instant speed |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:4  2:11  3:9
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 4.6: Llanowar Stalker@0.7, Llanowar Stalker@0.7, Quirion Beastcaller@0.6, Colossal Growth@0.5, Colossal Growth@0.5, Hexbane Tortoise@0.3, Hexbane Tortoise@0.3) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 12 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 62%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in mono-green in this pool (the dossier lists 6 cube-wide, none green); the plan is to BE the wider board — 17 creatures under a global anthem race a wide board rather than answer it.
  OK        single_large_threat: Bite Down, Tail Swipe, Deathbloom Gardener
  CONCEDED  noncreature_permanents: Every maindeck slot is capped at MV3 and spent on the clock; Broken Wings x2 and Tear Asunder x2 in the sideboard are the answers, boarded in when the opponent shows an artifact or enchantment.
  CONCEDED  stack: Green has no counterspell in this pool at any rarity; the deck's answer to a key spell is to have already dealt lethal.
  CONCEDED  graveyard: The dossier reports 0 graveyard-hate cards in the entire cube, so no colour can cover this class.
```
- No WARN-tier flags: curve PASS (1:4 2:11 3:9) and goldfish PASS (85% keepable, T1 play 62%, T2 98%).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Llanowar Loamspeaker's '{T}: Target land you control becomes a 3/3 Elemental creature with haste until end of turn' turns a surplus land into an attacker every turn, and Leaf-Crowned Visionary's 'you may pay {G}. If you do, draw a card' converts spare mana into cards on every Elf cast. |
| screw | mitigation | The curve is hard-capped at MV3, so 15 of the 24 nonland cards (4 at MV1, 11 at MV2) are castable off two lands and nothing in the deck is ever stranded beyond a third land — corrected from an earlier overstatement that two lands cast everything; the 9 MV3 cards do need a third. Llanowar Loamspeaker at MV2 is the accel that bridges to them (Deathbloom Gardener cannot, being MV3 itself). The goldfish check reports 85% keepable hands and 84% three lands by turn 3, both above threshold. |
| decapitation | mitigation | The clock does not run through the single Visionary: Llanowar Stalker's '+1/+0 whenever another creature enters' and Hexbane Tortoise's enlist both convert board width into damage without it, and 16 other creatures attack on their own stats. Maindeck Threats Undetected then refills with two more of them off one card. |
| gas-out | mitigation | Two refuels, neither of which costs an Elf. Leaf-Crowned Visionary's 'Whenever you cast an Elf spell, you may pay {G}. If you do, draw a card' fires off 12 of the 24 nonland cards. Threats Undetected — moved maindeck in the Phase 9 repair over 1 Bog Badger — reads 'Search your library for up to four creature cards with different powers... put the rest into your hand'; the deck has exactly four distinct printed powers (1/2/3/4), so it always returns two creatures for one card. It cost no Elf and no rare budget, since it was already 1 of the 5 rares. |
| raced | accepted | The cube's largest threat class is evasion (51 cards, 20.7% density) and this deck has exactly one reach body maindeck (Llanowar Greenwidow) and no fliers. Mitigating means maindecking Magnigoth Sentry and Snarespinner, which are non-Elves that neither trigger the Visionary's draw nor receive its +1/+1 — they sit in the sideboard for precisely that matchup instead of taxing every other one. |
| disruption-fizzle | mitigation | The critical turn is an attack, not a spell, so a counterspell has no target. Colossal Growth x2 ('Target creature gets +3/+3 until end of turn') is the instant held up through combat to beat a surprise blocker or a removal spell — Tail Swipe is counted as main-phase removal instead, since its '+1/+1' rider applies only 'If you cast this spell during your main phase'. Quirion Beastcaller's 'When this creature dies, distribute X +1/+1 counters among any number of target creatures you control' means removal aimed at the grown body still leaves that damage on the board. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Nishoba Brawler | Domain — power = basic land types you control. A mono-Forest manabase has 1 of 5, so it is a {1}{G} 1/3 trample. EXCLUDE. |
| Territorial Maro | Domain — P/T = twice the basic land types. 1 of 5 types here makes it a {4}{G} 2/2. EXCLUDE. |
| Sunbathing Rootwalla | Domain activation gives +1/+1 per basic land type: 1 of 5 here, i.e. {3}{G} for +1/+1 once per turn. EXCLUDE. |
| Gaea's Might | Domain pump: +1/+1 per basic land type — 1 of 5 types, so a one-mana +1/+1. Colossal Growth gives +3/+3 for one more mana. EXCLUDE. |
| Yavimaya Sojourner | Costs {1} less per basic land type: 1 of 5 here, so it is a {6}{G} 4/6. EXCLUDE. |
| The Weatherseed Treaty | Chapter III is a domain pump (1 of 5 basic types here) and chapters I-II are a tapped basic plus one 1/1 — three turns for a Saproling in a deck whose thesis turn is 5. EXCLUDE. |
| Slimefoot's Survey | {4}{G} sorcery fetching two typed lands — mono-green wants no second land type and the deck is not ramping past 5. EXCLUDE. |
| Herd Migration | {6}{G} domain token maker: 1 of 5 basic types produces one 3/3 for seven mana. EXCLUDE. |
| Mossbeard Ancient | {5}{G}{G} 7/7 — two mana above the top of an aggro curve whose land count is built for a 2.3 average MV. EXCLUDE. |
| The World Spell | Seven-mana Saga that pays off on chapter III (turn 9+); the thesis kill turn is 5. EXCLUDE. |
| Timeless Lotus | Five-mana artifact that enters tapped and adds all five colours — mono-green needs one colour and cannot spend four extra turns. EXCLUDE. |
| Bog Badger | {2}{G} 3/3 whose menace rider needs kicker {B}; unkicked it is a vanilla 3/3 that is not an Elf, so it neither triggers the Visionary nor gets its +1/+1. EXCLUDE. |
| Tear Asunder | Exiles an artifact or enchantment; the kicked 'any nonland permanent' mode needs {1}{B}. Sideboard-only against artifact/enchantment decks. SIDEBOARD. |
| Scout the Wilderness | Fetches one tapped basic; the two-Soldier rider needs kicker {1}{W}. A three-mana ramp-one-land in a 17-land aggro deck. EXCLUDE. |
| Threats Undetected (2nd copy) | Rare — the 5-card rare cap makes a second copy impossible regardless of merit. |
| Meria's Outrider | An Elf, but {4}{R} — uncastable in mono-green. EXCLUDE (pipeline ② only). |
| Nael, Avizoa Aeronaut / Radha, Coalition Warlord / Queen Allenal of Ruadach / Meria, Scholar of Antiquity | Elves whose costs include {U}, {R} or {W}{W} — outside mono-green's identity. EXCLUDE (pipelines ②-④). |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.21   Ramp cards: 3   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.89 adj [MV 2.21 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1 mainboard size  40 vs 40
  [PASS] 1 sideboard size  10 vs 10
  [PASS] 2 exact-name membership  []
  [PASS] 3 copy limits  []
  [PASS] 3b rare/mythic cap <=5  5 rares/mythics: ['Leaf-Crowned Visionary', 'Llanowar Greenwidow', 'Llanowar Loamspeaker', 'Quirion Beastcaller', 'Threats Undetected']
  [PASS] 4 colour usability via best_mode  []
  [PASS] 5 splash cap  []
```
