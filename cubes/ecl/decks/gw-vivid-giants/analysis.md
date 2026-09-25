---
deck_name: "gw-vivid-giants"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GW"
format: "40-card"
built_at: "2026-08-10T21:46:25Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
2x Eclipsed Realms      {C} always; any colour only for Giant spells (14 of 22 nonlands)
12x Forest               
2x Plains               
2x Radiant Grove        GW dual, enters tapped; a LAND, so it adds nothing to X
```

### CREATURES (17)

```
CMC  Card                      Qty   Color  Role                                              Rar
  2  Great Forest Druid        x2    G      Ramp - {T}: any colour; 0/4 wall                  C
  2  Tam, Mindful First-Year   x1    UG     COLOUR ENGINE - {T}: a creature becomes ALL colours (X=5) R
  3  Chomping Changeling       x1    G      Changeling Giant; ETB destroy artifact or enchantment U
  3  Gangly Stompling          x2    RG     COLOUR-SETTER (R) - changeling Giant 4/2 trample  C
  3  Prideful Feastling        x2    WB     COLOUR-SETTER (B+W) - changeling Giant 2/3 lifelink C
  4  Champions of the Perfect  x1    G      Card engine - draw on every creature spell; 6/6   R
  4  Chitinous Graspling       x2    UG     COLOUR-SETTER (U) - changeling Giant 3/4 reach    C
  5  Pummeler for Hire         x2    G      4/4 vigilance reach ward{2}; ETB gain greatest Giant power U
  6  Prismabasher              x1    G      VIVID PAYOFF - X creatures get +X/+X              U
  7  Aurora Awakener           x1    G      VIVID PAYOFF - puts X permanents from the top onto the battlefield M
  7  Wildvine Pummeler         x2    G      VIVID PAYOFF - costs {1} less per colour; 6/5 reach trample C
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                      Qty   Color  Role                                              Rar
  3  Crib Swap                 x2    W      Unconditional exile; a Giant card                 U
  3  Unforgiving Aim           x1    G      Modal - kill a flier / destroy enchantment / B+G Elf token C
```

### OTHER SPELLS (2)

```
CMC  Card                      Qty   Color  Role                                              Rar
  2  Shimmerwilds Growth       x2    G      COLOUR-SETTER on a land - removal-proof; also ramps U
```

## SIDEBOARD (10)

```
Card                      Qty   Color  Role / When to board in                                Rar
Blossoming Defense        x2    G      vs removal aimed at a Vivid payoff                     U
Keep Out                  x1    W      vs the 21-card enchantment class and tapped attackers  C
Formidable Speaker        x1    G      vs grindy decks - finds the missing payoff             R
Protective Response       x2    W      vs a single large blocker; convoke off 17 creatures    U
Luminollusk               x1    G      vs aggro - deathtouch wall                             U
Rooftop Percher           x2    C      vs the cube's 39-card graveyard class                  C
Curious Colossus          x1    W      vs a wide board this cannot race                       M
```

## ANALYSIS

### DECK IDENTITY

Green-white Vivid Giants. **Vivid** abilities scale with X, *"the number of colors among permanents you control"*, and this deck buys X almost for free — because **a hybrid permanent is both of its colours**. Gangly Stompling is [G,R], Chitinous Graspling [G,U] and Prideful Feastling [B,W], so three changelings castable off Forests and Plains alone put four colours beyond green on the battlefield, and each is also a Giant body that attacks. Tam, Mindful First-Year then makes X=5 an activation rather than an accident. At X=4 Wildvine Pummeler is a three-mana 6/5 with reach and trample.

### WHAT X ACTUALLY IS

The first version of this deck claimed the hybrids "put all five colours on the battlefield" as a default state. That was over-claimed by about 1.5 colours, and the correction is worth recording because it changed the build rather than just the prose.

Red lived on exactly two cards and blue on exactly two, so X=5 required a Gangly Stompling **and** a Chitinous Graspling alive at the same time. Simulation of the original list gave mean X = 3.65 at turn 7 and P(X=5) = 16%. Two cards fixed it:

- **Tam, Mindful First-Year** — *"{T}: Target creature you control becomes all colors until end of turn."* One activation makes a single permanent all five colours, so X=5 becomes a repeatable action instead of a draw outcome. It is also a blue permanent itself, and gives the other 16 creatures hexproof from their own colours.
- **Shimmerwilds Growth ×2** — *"Enchant land / As this Aura enters, choose a color. / Enchanted land is the chosen color."* A wildcard colour attached to a **land**, so creature removal cannot answer it — and the cube contains only 4 enchantment answers at 1.5% density. It ramps as well.

| | turn 7 mean X | P(X=5) turn 7 | X at first payoff |
|---|---|---|---|
| Before | 3.65 | 16% | 3.42 |
| **After** | **4.09** | **48%** | **3.86** |

**Honest reading: X is about 4.** X=5 is now a common outcome rather than a rare one, but the working number is 4, and Wildvine Pummeler is a three-mana 6/5 on average rather than the two-mana one a naive X=5 reading would promise.

### THE COLOUR ENGINE, AS COUNTS

| Colour | Supplied by | Copies |
|---|---|---|
| G | almost everything | — |
| W | Prideful Feastling x2 | 2 |
| B | Prideful Feastling x2, Unforgiving Aim token | 3 |
| R | Gangly Stompling x2 | 2 |
| U | Chitinous Graspling x2, Tam | 3 |
| **ANY** | **Shimmerwilds Growth x2** (chosen colour, on a land) | **2** |
| **ALL FIVE** | **Tam's activation** | **1** |

That is **10 colour-setter copies across 6 cards**, and two of the six are not creatures — which is what makes the engine survive removal.

**Lands contribute nothing to X.** Worth stating because the enriched data lists Radiant Grove's colours as ['G','W'], which is a produced-mana artifact rather than the card's colour; Temple Garden correctly shows none. Only the 22 nonland permanents set X.

### VIVID PAYOFFS — 4 COPIES, NOT 6

An earlier count booked 6 payoffs by including Pummeler for Hire x2. That card scales on *greatest Giant power*, not on colours, and receives no Vivid discount. The literal Vivid cards are **Wildvine Pummeler x2, Prismabasher and Aurora Awakener — 4 copies across 3 cards**, which assemble at p=0.77 rather than the inflated 0.94.

### MANA

Mandatory demand is **G 19 / W 4** with zero flexible pips. Unconditional production is G 14 of 18 and W 4 of 18 — thin on white until you notice that **all four white pips sit on Giant cards** (Crib Swap and Prideful Feastling are changelings), so both Eclipsed Realms pay for them, as do both Great Forest Druid. That is 8 effective white sources for 4 white pips.

The audit reports G 87.5% / W 12.5% demand, which counts only strict pips; it cannot see hybrid, so it misses the five forced-green pips on Gangly Stompling, Chitinous Graspling and Tam, and the two forced-white on Prideful Feastling.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Midrange):  [WARN]
  MV distribution (22 nonland):  2:5  3:8  4:3  5:2  6:1  7:3
  WARN  MV 6+ share: share 18% above band maximum 10%
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 4 copies → p=0.77 (need ≥ 0.75)
  PASS  colour_setter: 10 copies (effective 9.5: Unforgiving Aim@0.5) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 0%  T2 74%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. The cube contains exactly 2 (Ashling's Command, Soul Immolation), neither castable in G/W. The deck's answer is that its bodies outclass a wide board on size - 6/5, 6/6 and 7/7 tramplers against tokens - and Prismabasher's ETB pumps up to X creatures by +X/+X to break a stall. Curious Colossus is sideboarded for boards this cannot race.
  OK        single_large_threat: Crib Swap
  OK        noncreature_permanents: Chomping Changeling, Unforgiving Aim
  CONCEDED  stack: The pool's only counterspells are Spell Snare, Wild Unraveling and Glen Elendra Guardian, all blue; no G/W-castable card says 'counter target'. Blossoming Defense ('hexproof') is sideboarded as protection instead.
  CONCEDED  graveyard: Rooftop Percher exiles up to two cards from graveyards and costs {5} colourless, but it is a 3/3 in a deck whose curve already tops at 7; it is sideboarded against the cube's 39-card graveyard class.
```

Curve WARN - MV6+ share 18% vs band maximum 10%: the four cards are Prismabasher, Wildvine Pummeler x2 and Aurora Awakener, and two of them are not really 6+ drops. Wildvine Pummeler at the measured X of about 4 costs three mana, and re-running the land target on that effective curve returns 17.5, still 18 lands, so the deviation is largely a booking artifact. Aurora Awakener at MV7 is the single genuine top-end card.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Four cards at MV6 or more (Prismabasher, Wildvine Pummeler x2, Aurora Awakener) are live off surplus lands, and Shimmerwilds Growth x2 turns a land into an extra mana of a chosen colour every time it taps. Aurora Awakener converts a flooded late game directly into board, putting X permanents from the top onto the battlefield. |
| screw | mitigation | 18 lands is the computed recommendation and the goldfish returns 86% keepable with 3 lands by turn 3 in 94% of hands. Great Forest Druid x2 at {1}{G} both walls and fixes; Shimmerwilds Growth x2 adds a mana whenever the enchanted land taps. The colour requirement is lopsided but shallow - 19 mandatory green against 14 green sources, and only 4 white pips against 8 effective white sources. |
| decapitation | mitigation | No single point of failure remains. The colour engine is 10 copies across 6 cards, and its two most important members are not creatures: Shimmerwilds Growth enchants a land, which creature removal cannot answer and which the cube can only answer with 4 enchantment-removal cards at 1.5% density, while Tam makes X=5 an activation. Red still rests on Gangly Stompling x2 and blue on Chitinous Graspling x2, but neither is required now that two wildcard sources exist. |
| gas-out | mitigation | Champions of the Perfect is a 6/6 for {3}{G} reading "Whenever you cast a creature spell, draw a card" against 16 other creature spells. Its "behold an Elf and exile it" cost is fed by the 9 changeling cards - changelings are Elves - and "When this creature leaves the battlefield, return the exiled card to its owner's hand" makes the cost a loan; behold from HAND rather than the battlefield to avoid exiling a colour-setter. Aurora Awakener is the second refuel. |
| raced | mitigation | The bodies are oversized on defence, not only offence: Great Forest Druid is a 0/4 wall for two, Chitinous Graspling a 3/4 with reach, Pummeler for Hire a 4/4 with vigilance, reach and ward {2}, and Prideful Feastling has lifelink. Crib Swap x2 exiles the biggest threat at instant speed and Unforgiving Aim destroys a flier - the cube's evasion class is its largest at 41 cards. |
| disruption-fizzle | mitigation | The deck deploys one permanent per turn rather than assembling a chain, and no G/W card in this pool faces a counterspell. Tam gives every other creature hexproof from its own colours, which blanks a large share of targeted removal outright, and Blossoming Defense is sideboarded for the rest. If a payoff is answered the colour engine is untouched and the next payoff is still discounted. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Puca's Eye / Foraging Wickermaw (uncommon/common) | The two cards the rejected sketches spent 30-35% of their nonland slots on, to raise a colour count that hybrid permanents supply for free. A hybrid permanent is BOTH its colours, so Gangly Stompling, Chitinous Graspling and Prideful Feastling deliver R, U and B on bodies that also attack. Cut before the build. |
| Ajani, Outland Chaperone (mythic) | Cut at the sketch-judge stage. Its 1/1 green AND white Kithkin tokens add colours the deck already has, so it contributes 0 to X - the colour-setting claim was empty. |
| Bristlebane Battler (rare) | Cut in repair. A {1}{G} 6/6 with trample and ward {2} reads superbly until you apply 'enters with five -1/-1 counters': it is a 1/1 on turn 2 and needs five subsequent creature ETBs. A rare slot on a card that is a payoff for density rather than a clock. |
| Eclipsed Kithkin (uncommon) | Cut in repair for the slots. Its four {G/W} pips were the deck's only genuinely flexible mana, and losing them is a real cost, but it set no colour the deck lacked. |
| Temple Garden (rare LAND) | The only untapped GW dual, and a genuine upgrade over the 15th Forest given only 4 unconditional white sources. Cut because the 5-rare cap INCLUDES lands and the budget is now spent on Tam, Champions of the Perfect, Aurora Awakener, Formidable Speaker and Curious Colossus. |
| Mistmeadow Council (common) | 'costs {1} less if you control a Kithkin' plus 'When this creature enters, draw a card' - and every changeling is a Kithkin, so it is a {3}{G} 4/3 cantrip. Lost the gas-out slot to Champions of the Perfect, which is a 6/6 with a repeatable draw trigger for the same mana value. |
| Glister Bairn (uncommon) | Fully payable off green, a blue permanent (+1 to X), and the only REPEATABLE Vivid payoff in the pool - 'At the beginning of combat on your turn, another target creature gets +X/+X'. The strongest card not in this deck; cut only because five green mana at MV5 competes with Pummeler for Hire. |
| Noggle Robber (uncommon) | A red permanent castable entirely off green with a Treasure attached - it would double the red pool from 2 cards to 4. Not a changeling, so Eclipsed Realms cannot pay for it. |
| Wistfulness (mythic) | A 5-mana 6/5 payable off green that is a blue permanent, answers artifacts and enchantments, and has an MV2 evoke line. Competes directly with Aurora Awakener for the mythic slot; Awakener kept because its ETB scales with the engine. |
| Firdoch Core / Stalactite Dagger / Mutable Explorer / Personify | All make or are COLOURLESS permanents, so despite being changelings they add nothing to X - the one thing this deck needs from a slot. |
| Slumbering Walker (rare) | The grindy sketch's recursion engine, but its 'power 2 or less' gate is nearly blank here: this deck's bodies are 3/4, 4/2, 4/4, 6/5, 6/6 and 7/7. |
| Prismatic Undercurrents (uncommon) | Searches X basic lands and grants an extra land drop - real fuel, but it is a 4-mana enchantment that adds no board presence in a deck whose plan is above-curve bodies. |
| Kithkeeper (uncommon) | Vivid ETB making X Kithkin tokens, but the tokens are green and white - colours the deck already has - so it scales off X without contributing to it, at {6}{W} on 4 white sources. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.77   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.03 adj [MV 3.77 vs 2.5, 4 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  G  demand  87.5%  prod  83.3%  gap  +4.2pp  [OK]
  W  demand  12.5%  prod  27.8%  gap -15.3pp  [OK]
```


## RESTRICTIONS COMPLIANCE

```
[PASS] commons/uncommons max 2 copies each
[PASS] rares/mythics max 1 copy each
[PASS] max 5 rares+mythics across MB+SB, INCLUDING LANDS - 5 used, at cap (Tam R, Champions of the Perfect R, Aurora Awakener M; Formidable Speaker R, Curious Colossus M in sideboard). Temple Garden, a rare land, was cut for this reason.
[PASS] every card drawn from the ecl cube mainboard; basics format-supplied
[PASS] core colours G/W, no splash; Gangly Stompling's {R/G}, Chitinous Graspling's {G/U}, Prideful Feastling's {W/B} and Tam's {G/U} all payable with green or white
[PASS] mainboard 40, sideboard 10
```
