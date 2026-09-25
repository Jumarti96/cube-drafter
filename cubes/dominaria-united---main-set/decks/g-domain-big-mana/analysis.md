---
deck_name: "g-domain-big-mana"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "G"
format: "40-card"
built_at: "2026-08-13T05:21:41Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  2x Haunted Mire           Swamp Forest, tapped — only source of the Swamp type
  2x Radiant Grove          Forest Plains, tapped — only source of the Plains type
  2x Tangled Islet          Forest Island, tapped — only source of the Island type
  2x Wooded Ridgeline       Mountain Forest, tapped — only source of the Mountain type
  9x Forest                 basic
```

### CREATURES (13)
```
CMC  Card                       Qty   Color Role                                     Rar
  2  Floriferous Vinewall       x2    G     Assembly — digs six for a land; a dual counts C
  2  Nishoba Brawler            x2    G     Payoff — cheap end of the Domain curve   U
  2  Sunbathing Rootwalla       x1    G     Early body + repeatable Domain mana sink C
  3  Deathbloom Gardener        x2    G     Ramp — any colour, deathtouch blocker    C
  3  Llanowar Greenwidow        x1    G     Payoff — recursive reach/trample body    R
  4  Magnigoth Sentry           x1    G     Body — the four-drop; maindeck answer to fliers C
  5  Silverback Elder           x1    G     Engine/payoff — value AND land assembly per creature cast M
  5  Territorial Maro           x2    G     Payoff — twice the basic land types in P/T U
  6  Briar Hydra                x1    G     Payoff — 6/6 trample, Domain counters on combat damage R
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                       Qty   Color Role                                     Rar
  1  Tail Swipe                 x1    G     Interaction — one-mana fight             U
  2  Bite Down                  x2    G     Interaction — creature-leveraged removal C
  2  Tear Asunder               x1    G     Interaction — exile artifact or enchantment (base mode only) U
  3  Broken Wings               x1    G     Interaction — artifact / enchantment / flier C
  3  Threats Undetected         x1    G     Tutor — net +1 card; opponent picks which two you keep R
  5  Slimefoot's Survey         x2    G     Assembly — two TYPED lands onto the battlefield, then digs U
  7  Herd Migration             x1    G     Payoff — a 3/3 Beast per basic land type R
```

### OTHER SPELLS (1)
```
CMC  Card                       Qty   Color Role                                     Rar
  5  Jodah's Codex              x1    C     Engine — {1} draw at Domain 4, free at Domain 5 U
```

## SIDEBOARD (10)
```
Card                       Qty   Color Role / When to board in                      Rar
Magnigoth Sentry           x1    G     The cube 51-card evasion class — 4/4 reach   C
Snarespinner               x2    G     Cheap anti-flier blocker vs fast evasive starts C
Hexbane Tortoise           x2    G     Ward 2 body vs removal-dense decks           C
Broken Wings               x1    G     Artifacts (15) / enchantments (18) / fliers  C
Tear Asunder               x1    G     Second exile effect vs artifact/enchantment decks U
Tail Swipe                 x1    G     Extra fight removal vs single large threats  U
Gaea's Might               x1    G     Domain pump — makes the fight package unconditional removal C
Mossbeard Ancient          x1    G     Domain-INDEPENDENT 7/7 for games where land types stall U
```

## ANALYSIS

### DECK IDENTITY

Domain Big-Mana. Every castable spell in this deck is mono-green or colourless; the five colours live entirely in the land base. The cube contains exactly four Forest-typed dual lands — Radiant Grove (Forest Plains), Haunted Mire (Swamp Forest), Tangled Islet (Forest Island) and Wooded Ridgeline (Mountain Forest) — and all four are commons, so the deck runs 2 of each. Between them they supply all five basic land types while every single one taps for {G}, which is why the mana audit reads 100% green demand against 100% green production with no off-colour source and no rare land. The game ends to Territorial Maro (power and toughness each twice the basic land types), Briar Hydra (6/6 trample that dumps X +1/+1 counters on combat damage), or Herd Migration (a 3/3 Beast per basic land type).

### THE TRICK: FIVE COLOURS OF LAND, ONE COLOUR OF SPELL

Domain counts basic land *types*, not colours you can cast. Dominaria United's common dual cycle is typed — Radiant
Grove is literally "Land — Forest Plains" — and four of those ten duals carry the Forest type: Radiant Grove
(Forest Plains), Haunted Mire (Swamp Forest), Tangled Islet (Forest Island), Wooded Ridgeline (Mountain Forest).
Between them they supply all five basic land types, and every single one taps for {G}. All four are commons, so
they run at 2 copies each.

The consequence is the line in the mana audit: **green pip demand 100.0%, green production 100.0%, gap 0.0pp**, on a
deck that counts five land types. This is the only one of the four builds with literally zero colour risk, and it
spends zero of its five rare slots on lands — the entire budget went to spells (Briar Hydra, Herd Migration,
Silverback Elder, Llanowar Greenwidow, Threats Undetected).

### THE HONEST DOMAIN NUMBER IS 4, NOT 5

Domain 5 needs one of each of four different 2-ofs on the battlefield — coupon collection, not a curve. The
self-grill's Proposer simulated this exact land base at 200k hands and got a turn-6 mean of 3.06 on draws alone,
rising to 3.53 once Slimefoot's Survey is castable, with P(Domain 5) at 28.9%. So every payoff here is priced at
Domain 4 and every one is still a real card at it:

| Payoff | Domain 3 | Domain 4 | Domain 5 |
|---|---|---|---|
| Territorial Maro ({4}{G}) | 6/6 | 8/8 | 10/10 |
| Nishoba Brawler ({1}{G}) | 3/3 trample | 4/3 | 5/3 |
| Herd Migration ({6}{G}) | three 3/3s | four 3/3s | five 3/3s |
| Briar Hydra (per connection) | 3 counters | 4 | 5 |
| Jodah's Codex (draw cost) | {2} | {1} | {0} |
| Llanowar Greenwidow (rebuy) | {4}{G} | {3}{G} | {2}{G} |

### ONLY TWO CARDS ACTUALLY ASSEMBLE DOMAIN

This is the finding that shaped the build. Most green land-search reads "search your library for a basic land card"
— and in a deck whose only basic is Forest, that adds a type already in play. Herd Migration's discard mode does
this. The Weatherseed Treaty's chapter I does this, which is why it is not in the deck. Scout the Wilderness does
this, which is why the self-grill cut it from the sideboard.

Exactly two effects put a *typed* land into play: Slimefoot's Survey ("up to two land cards that each have a basic
land type" — all 17 lands qualify) and Silverback Elder's second mode ("put a land card from among them onto the
battlefield tapped"). Floriferous Vinewall is a weaker third, finding a dual to hand. That is why the engine slot is
34.8% of the nonlands against a 0% band: cut it and 11 of 23 nonland cards stay switched off.

### THE OFF-COLOUR-BASICS ARGUMENT, AND WHY IT LOST

The Challenger made the sharpest case in this whole run: add a couple of off-colour basics and you gain Domain
types *and* convert three basic-fetchers from dead to live, and it simulated the gain at +0.23 mean Domain by turn
5 with no measured cost. The reason it lost is a number the simulation did not check. Running it through
deck_audit.mana_audit: two off-colour basics drop green production from 100% to 88.2% and the audit from PASS to
WARN; four drop it to 76.5% and FAIL. In a deck with 100% green pip demand, that trades the build's single best
structural property for a fraction of a Domain point.

### WHAT THIS DECK CANNOT DO

Three coverage classes are conceded, and none is a slot decision: mono-green has no sweeper in this pool, no
counterspell in this pool, and the cube contains zero graveyard hate in any colour against a 32-card graveyard
theme. The deck's answer is to be bigger — a Domain-4 Territorial Maro blocks as an 8/8 and Herd Migration makes
four 3/3s.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:1  2:8  3:5  4:1  5:6  6:1  7:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 7.6: Territorial Maro@0.8, Territorial Maro@0.8, Nishoba Brawler@0.8, Nishoba Brawler@0.8, Herd Migration@0.8, Silverback Elder@0.9, Sunbathing Rootwalla@0.7) → p=0.94 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.4: Floriferous Vinewall@0.8, Floriferous Vinewall@0.8, Jodah's Codex@0.8) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 20%  T2 91%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-green has no sweeper anywhere in this pool, so this is a colour-availability fact rather than a slot decision. What the deck does instead is out-size the board: Herd Migration makes a 3/3 Beast per basic land type, and Territorial Maro x2 block as 8/8s at Domain 4.
  OK        single_large_threat: Bite Down, Bite Down, Tail Swipe
  OK        noncreature_permanents: Broken Wings, Tear Asunder, Silverback Elder
  CONCEDED  stack: Mono-green contains no counterspell in this pool; the deck answers resolved permanents instead via Broken Wings, Tear Asunder and Silverback Elder's repeatable destroy mode.
  CONCEDED  graveyard: The cube census reports 0 graveyard-hate cards pool-wide, so no colour can answer the 32-card graveyard theme directly.
```

- No WARN-tier structural flags: curve and goldfish both returned PASS.
- The self-grill closed the curve hole it found: the list had 0 cards at mana value 4 against six five-drops, 8 tapped lands and a 20% turn-1 play rate. Magnigoth Sentry ({3}{G} 4/4 Reach) replaced the second Sunbathing Rootwalla — it fills turn 4 and gives the mainboard its first answer to the cube's largest threat class (evasion, 51 of 247 nonland cards).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Sunbathing Rootwalla x2 ("Domain — {3}{G}: Until end of turn, this creature gets +1/+1 for each basic land type among lands you control. Activate only once each turn") and Llanowar Greenwidow ("Domain — {7}{G}: Return this card from your graveyard to the battlefield tapped ... costs {1} less to activate for each basic land type", i.e. {3}{G} at Domain 4) are repeatable mana sinks. Jodah's Codex converts surplus mana into cards at {5} minus one per basic land type — {1} at Domain 4, {0} at Domain 5. And unlike every other deck, a surplus land here can literally make the threats bigger, because 8 of the 23 nonlands scale with land types. |
| screw | mitigation | 3 lands by turn 3 in 88% of goldfish hands and 85% keepable, the best of the four builds, on the highest land count (17). Of the 8 tagged accelerants, 5 cost under 3 mana and are the ones that actually answer a screwed hand: Deathbloom Gardener x2 ("{T}: Add one mana of any color"), Floriferous Vinewall x2 ("look at the top six cards of your library. You may reveal a land card ... and put it into your hand") and Herd Migration's discard mode ("{1}{G}, Discard this card: Search your library for a basic land card"). Slimefoot's Survey x2 costs {4}{G} and is ramp for a functioning hand, not screw insurance. |
| decapitation | mitigation | The payoffs are 9 copies across 7 names and none is a prerequisite for another. Llanowar Greenwidow specifically answers removal: it returns itself from the graveyard for {3}{G} at Domain 4 and gains "if this permanent would leave the battlefield, exile it instead". Threats Undetected finds two more — but note the real cost stated in its oracle: "An opponent chooses two of those cards. Shuffle the chosen cards into your library and put the rest into your hand", so you get the two the opponent least fears, and the two characteristic-defining-power creatures (Nishoba Brawler, Territorial Maro) can collide on power with Briar Hydra or Llanowar Greenwidow at some Domain counts, narrowing the pick. It is a net +1 card, not a tutor. |
| gas-out | mitigation | Jodah's Codex is a repeatable draw whose cost falls to {1} at Domain 4 and {0} at Domain 5. Silverback Elder turns every one of the 12 other creature spells in the list into a land, 4 life, or an artifact/enchantment kill. Slimefoot's Survey x2 and Floriferous Vinewall x2 each replace themselves, and Threats Undetected converts one card into two. 8 of 23 nonlands are net-positive or self-replacing on cards. |
| raced | accepted | This is the slowest of the four builds — 8 of 17 lands enter tapped and the turn-1 play rate is 20%. Mitigating would mean cutting the tapped duals, which ARE the Domain engine: each is the sole source of one of the four non-Forest types, and without them Territorial Maro is a 2/2 and Herd Migration makes one Beast. The identity cost is total, so the mode is accepted rather than mitigated. What blunts it: Deathbloom Gardener x2 have deathtouch and block anything regardless of size; Nishoba Brawler x2 are two-mana trample bodies that grow as land types arrive (on turn 2 they are a 1/3 or 2/3, not the 3/3 an earlier draft of this note claimed — two lands cap Domain at 2 on any turn the Brawler is actually castable, because a turn-2 dual enters tapped); and Magnigoth Sentry is a 4/4 reach wall. 2x Snarespinner, 2x Hexbane Tortoise and 1x Mossbeard Ancient board in. |
| disruption-fizzle | mitigation | There is no critical turn to interact with — Domain is a board state built across many land drops, not a spell that can be countered, and 8 of the 23 nonlands read off it independently. Killing the Territorial Maro on the turn it lands costs the opponent a card and changes the Domain count by zero, so the next payoff arrives the same size. Llanowar Greenwidow returns from the graveyard after being answered. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| The Weatherseed Treaty | Chapter I searches for a BASIC land card, which in a mono-green deck is a Forest — a type already in play. It adds exactly zero Domain, which is the one thing this deck needed from a 3-mana ramp Saga. |
| Crystal Grotto | Cut at the Step-0 lock on the shape judge's flag: it carries no basic land type and its coloured mana costs an extra {1}, so in a 100%-green deck it is both Domain-neutral and mana-irrelevant. Became the ninth Forest. |
| Off-colour basics (Plains / Island / Swamp / Mountain) | Would add Domain types and make the basic-fetchers live, and the grill simulated +0.23 mean Domain by turn 5 — but the mana audit regresses PASS to WARN at two copies (green production 100% to 88.2%) and to FAIL at four (76.5%). |
| Thran Portal | "As this land enters, choose a basic land type" is the single best Domain fixer in the cube, but it is a rare and the 5-slot budget is full; its mana abilities also cost an additional 1 life each. |
| Timeless Lotus | Mythic, {5}, enters tapped, and taps for all five colours — four of which this deck cannot spend. It carries no basic land type, so it adds nothing to Domain either. |
| Sphinx of Clear Skies / Meria's Outrider / Radha, Coalition Warlord / Nael, Avizoa Aeronaut | All are Domain payoffs, and all are off-colour — taking any of them means adding a second colour to a deck whose whole structural advantage is 100% green production against 100% green demand. |
| Defiler of Vigor | Rare; a 6/6 trample that discounts green permanent spells is genuinely strong here, but the 5-slot budget went to cards that either assemble Domain or scale off it, and Defiler does neither. |
| Llanowar Loamspeaker | Rare; its "add one mana of any color" is strictly a green dork in a deck with no off-colour spell, and animating a land turns a Domain source into a removal target. |
| Leaf-Crowned Visionary / Quirion Beastcaller | Both rares. Only 3 Elves appear in the mono-green slice, so the Visionary's draw trigger has almost nothing to trigger on; Beastcaller competes for a slot with a Domain scaler. |
| The World Spell | Mythic {5}{G}{G} Saga; a seven-mana enchantment that finds permanents is too slow even for a turn-6 thesis, and it would take the rare slot that Herd Migration uses to actually end the game. |
| Yavimaya Sojourner | A 4/6 for {3}{G} at Domain 4 is fine, but Territorial Maro is an 8/8 for five at the same Domain — the same slot, twice the body. |
| Mossbeard Ancient / Elfhame Wurm / Linebreaker Baloth | Domain-independent green fatties. Mossbeard Ancient made the sideboard as the hedge for games where the land types stall; the other two lost the maindeck slot to cards that scale. |
| Salvaged Manaworker / Meteorite / Relic of Legends | Colourless mana sources. Salvaged Manaworker's "{1}: Add one mana of any color" is net-zero mana; Meteorite costs 5; Relic of Legends keys off legendary creatures and this deck runs zero. |
| Scout the Wilderness | Sideboard consideration, cut in the grill: it fetches a basic Forest, so it adds no Domain and no fixing to a deck already running 17 lands and 8 accelerants. |
| Sunbathing Rootwalla (second copy) | Cut in the grill to fill the curve: the list had zero cards at mana value 4 against six five-drops, and Magnigoth Sentry fills turn 4 while answering the cube's 51-card evasion class. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.43   Ramp cards: 8   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.09 adj [MV 3.43 vs 2.5, 8 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2          PASS — no card exceeds 2 copies
rares_mythics_max_1_each         PASS
rare_mythic_total_max_5          PASS — exactly 5: Briar Hydra, Herd Migration, Silverback Elder, Llanowar Greenwidow, Threats Undetected. Zero rares in the mana base, because all four Forest-typed duals are commons. Sideboard is 100% commons/uncommons.
basics_unlimited                 PASS — Forest x9
all_cards_from_cube_mainboard    PASS (Phase 5C check 2)
```