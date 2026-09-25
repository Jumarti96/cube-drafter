---
deck_name: "gu-aurora-ramp"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GU"
format: "40-card"
built_at: "2026-08-10T21:20:27Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  11x Forest                   basic
  4x Island                   basic
  2x Tangled Islet            ({T}: Add {G} or {U}.) This land enters tapped.
```

### CREATURES (15)

```
CMC  Card                     Qty   Color Role                                          Rar
  2  Bloom Tender             x1    G     Engine & Infrastructure                       M
  2  Great Forest Druid       x2    G     Engine & Infrastructure                       C
  2  Mischievous Sneakling    x1    BU    Engine & Infrastructure                       C
  2  Tam, Mindful First-Year  x1    GU    Engine & Infrastructure                       R
  3  Gangly Stompling         x2    GR    Engine & Infrastructure                       C
  3  Rimekin Recluse          x2    U     Interaction                                   U
  3  Wary Farmer              x1    GW    Engine & Infrastructure                       C
  6  Prismabasher             x2    G     Threats/Payoffs                               U
  7  Aurora Awakener          x1    G     Threats/Payoffs                               M
  7  Wildvine Pummeler        x2    G     Threats/Payoffs                               C
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                     Qty   Color Role                                          Rar
  1  Blossoming Defense       x1    G     Interaction                                   U
  1  Spell Snare              x1    U     Interaction                                   U
  3  Unforgiving Aim          x1    G     Interaction                                   C
```

### OTHER SPELLS (5)

```
CMC  Card                     Qty   Color Role                                          Rar
  1  Springleaf Drum          x1    C     Engine & Infrastructure                       U
  2  Puca's Eye               x2    C     Engine & Infrastructure                       U
  4  Prismatic Undercurrents  x2    G     Engine & Infrastructure                       U
```

## SIDEBOARD (10)

```
Card                     Qty   Color Role / When to board in
Chomping Changeling      x2    G     Hate - artifacts/enchantments - Against the 11 artifacts and 21 enchantments in the cube: 'When this creature enters, destroy up to one target artifact or enchantment'.   [U]
Dawn's Light Archer      x2    G     Flex - anti-flier blocker - Against the cube's 41 evasion cards: 'Flash / Reach' on a 4/2 ambushes an attacking flier while the ramp plan sets up.   [C]
Luminollusk              x1    G     Flex - anti-race blocker - Against fast starts: 'Deathtouch / Vivid - When this creature enters, you gain life equal to the number of colors among permanents you control' buys the turns the seven-mana plan needs.   [U]
Rooftop Percher          x2    C     Hate - graveyard - Against decks that recur from the graveyard: 'When this creature enters, exile up to two target cards from graveyards. You gain 3 life.'   [C]
Spell Snare              x1    U     Flex - stack interaction - Second copy against decks whose key pieces sit at mana value 2.   [U]
Wild Unraveling          x1    U     Flex - stack interaction - Against combo or a single must-answer spell: 'Counter target spell'.   [C]
Wistfulness              x1    GU    Hate - artifact/enchantment on a threat - When an opposing artifact or enchantment must die and you still want a body: 'if {G}{G} was spent to cast it, exile target artifact or enchantment an opponent controls' on a 6/5.   [M]
```

## ANALYSIS

### DECK IDENTITY

A Simic ramp deck whose top end is a single card. Aurora Awakener reads 'reveal cards from the top of your library until you reveal X permanent cards... Put any number of those permanent cards onto the battlefield', so on the turn it resolves it converts the colour count into a fistful of free permanents - and 20 of the 23 nonland cards in this list are permanents, so the reveal almost never burns a card. Getting there is the deck: Great Forest Druid and Bloom Tender accelerate, Prismatic Undercurrents adds a land drop every turn and fetches basics off the same colour count, and Puca's Eye cantrips into whichever colour the board is missing. Wildvine Pummeler and Prismabasher are the redundant top end that closes when Aurora Awakener does not appear, and Blossoming Defense and Spell Snare defend the one turn the whole plan hinges on.

### THE COUNT THAT MATTERS MOST IS NOT THE COLOUR COUNT

Every other Vivid deck is built around X. This one is built around a second number that only `Aurora Awakener` cares about: **permanent density**. Its trigger reads "reveal cards from the top of your library until you reveal X **permanent** cards" — so every instant or sorcery it turns over is a card buried on the bottom for nothing.

This list runs **20 permanents of 23 nonland cards**. The only three non-permanents are `Spell Snare`, `Blossoming Defense` and `Unforgiving Aim`. Counting the 17 lands, **37 of the 40 cards are permanents**. At X=4 the expected number of cards revealed and wasted is well under one — the trigger is close to "put the next four permanents from your library onto the battlefield."

### THE MISTAKE THE SIMULATION CAUGHT

The first version of this list claimed a modal X of 4. That number was asserted, not derived, and a 20,000-game simulation over the 14 cards seen by turn 7 showed the truth was worse:

| | modal X | P(X≥4) |
|---|---|---|
| First draft | **3** | 0.367 |
| After the repair | **4** | 0.609 |

The cause was a supply problem hiding in plain sight: white was 1 card of 23 (`Wary Farmer`) and black was 1 of 23 (`Mischievous Sneakling`). The two cards booked as "Engine & Infrastructure" that could have fixed it — `Chitinous Graspling` and `Glister Bairn` — supplied only green and blue, the two colours this deck can never be missing. They were doing no engine work at all.

Both were cut for **`Puca's Eye` ×2**: "When this artifact enters, draw a card, then choose a color. This artifact becomes the chosen color." Two mana, replaces itself, and becomes whichever colour the board is short of. That one swap moved the modal X up a full point, made `Wildvine Pummeler` cost {2}{G} instead of {3}{G}, and took the deck's card-advantage count from 3 of 23 to 5 of 23.

### THE SEVEN-MANA PROBLEM

Seventeen lands, and the plan needs seven mana on turn seven. Three things get it there:

- **`Prismatic Undercurrents` ×2** — "You may play an additional land on each of your turns", plus it fetches up to X basic lands *to hand*. Note the interaction with the manabase: it fetches **basics only**, and the only basics here are Forests and Islands. That is a stated cost of the two-colour build — it cannot fetch a colour the deck does not already play — but it means all 15 basics are live targets.
- **`Bloom Tender`** taps for one mana per colour among your permanents. The deck spends only G and U, so at X=4 two of those four mana are dead. It is honestly a two-mana accelerant here, not a four-mana rock.
- **15 of the 17 lands enter untapped.** In this deck that matters more than in any other build in the archetype: a tapped land on turn six is a missed seventh mana on turn seven.

### WHY THIS BUILD AND NOT THE FASTER ONE

Three builds of this archetype were sketched — fastest goldfish, most redundant assembly, most resilient to disruption — and the independent shape judge picked resilience. Its reasoning: under competitive intent, where opponents hold interaction, the question is not "how early can Aurora Awakener be cast" but "how does it actually resolve on turn seven."

One caveat worth stating precisely, because I got it wrong the first time. `Tam, Mindful First-Year` reads "each other creature you control has hexproof **from each of its colors**" — and `Aurora Awakener` is mono-green. Tam grants it hexproof from green only: **one colour of five**. The genuine protection is that the effect is an enters-the-battlefield trigger, so removal *after* it resolves does not undo the permanents it already dropped. The live vector is a counterspell, and the honest count there is that `Spell Snare` is 1 card of 23 and cannot answer anything at mana value 1 or 3-plus.

### HOW THE THREE BUILDS COMPARE

| | Hybrid Prism (A) | Five-Colour (B) | Aurora Ramp (C) |
|---|---|---|---|
| Goldfish turn | 6 | 7 | 7 |
| Rare/mythic cards | 3 | 9 | **4** |
| Keepable hands | 87% | 84% | **86%** |
| Turn-one plays | 33% | 20% | **46%** |
| Modal X | 4–5 | 4–5 | 4 |

This is the cheapest of the three in rare slots after Path A, and the fastest to start doing something — but it is the only one whose whole plan is a single turn, and the only one that concedes the early game by construction.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:3  2:7  3:6  4:2  6:2  7:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.5: Aurora Awakener@0.9, Wildvine Pummeler@0.8, Wildvine Pummeler@0.8) → p=0.81 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.6: Springleaf Drum@0.7, Tam, Mindful First-Year@0.9) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 46%  T2 93%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No card castable off G/U in this pool answers a wide board - the pool's only two sweepers are red and blue-red. Mitigating would mean splashing red, which would add tapped duals to a manabase that must produce {G} on turn two and seven mana on turn seven. The deck instead blocks and goes over the top: Great Forest Druid x2 are 0/4 walls that also ramp, and Aurora Awakener's 'put any number of those permanent cards onto the battlefield' can deploy several blockers at once off a single trigger.
  OK        single_large_threat: Rimekin Recluse, Great Forest Druid, Unforgiving Aim
  OK        noncreature_permanents: Unforgiving Aim
  OK        stack: Spell Snare
  CONCEDED  graveyard: No mainboard graveyard interaction; the mainboard slots it would displace are the ramp package without which the seven-mana thesis turn does not happen, and Rooftop Percher x2 in the sideboard exiles two graveyard cards per cast.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Prismatic Undercurrents x2 read 'You may play an additional land on each of your turns', so surplus lands accelerate rather than idle; Wildvine Pummeler x2 and Aurora Awakener are a top end that surplus lands are literally spent on; and Puca's Eye's '{3}, {T}: Draw a card' converts spare mana into cards once the board reaches five colours. |
| screw | mitigation | The colour engine and the ramp both cost two or less: Springleaf Drum {1}, Bloom Tender {1}{G}, Great Forest Druid {1}{G}, Tam {1}{G/U}, Mischievous Sneakling {1}{U/B} and Puca's Eye {2} all deploy by turn two, and 15 of the 17 lands enter untapped. The goldfish check measures 86% keepable hands, 46% turn-one plays and 88% three-lands-by-turn-three. |
| decapitation | mitigation | Aurora Awakener is one card, so the deck does not rely on it: the payoff suite is 5 reliability-weighted copies across three names (Aurora Awakener, Prismabasher x2, Wildvine Pummeler x2) at p=0.81 by the thesis turn, and Prismabasher's 'up to X target creatures you control get +X/+X' wins from the same board state Aurora Awakener would have used. On the mana side, losing Bloom Tender leaves Great Forest Druid x2, Springleaf Drum, Puca's Eye x2 and Prismatic Undercurrents x2. |
| gas-out | mitigation | Rewritten from an accepted to a mitigation, because the cost the acceptance claimed - that all in-colour card advantage costs five to seven mana - was false against the pool. Puca's Eye x2 cost {2} and read 'When this artifact enters, draw a card', competing with nothing on the thesis turn, and their '{3}, {T}: Draw a card' mode is a repeating engine at five colours. Prismatic Undercurrents x2 put up to X basic LAND cards into hand. Wary Farmer surveils each turn a creature entered, and Aurora Awakener's 'put any number of those permanent cards onto the battlefield' is a refill in permanents rather than in hand. Resource ledger: 5 of 23 nonland cards are Cards: Net-Positive or Self-Replacing (Prismatic Undercurrents x2, Puca's Eye x2, Aurora Awakener), up from 3. |
| raced | accepted | A ramp deck that wants turn seven concedes the early turns by construction, and mitigating would mean cutting ramp for cheap interaction, which pushes the thesis turn later and defeats the plan. This concession is re-argued after the grill swap, which cut two of the blockers the original version named: what remains is Great Forest Druid x2 as 0/4 walls that also ramp, Rimekin Recluse x2 bouncing the biggest attacker, and Wary Farmer at 3/3. Luminollusk (2/4 deathtouch) and Dawn's Light Archer x2 (flash, reach) sit in the sideboard for the matchups where racing is the actual problem. The concession is real and it got slightly worse in exchange for the colour count that makes every payoff bigger. |
| disruption-fizzle | mitigation | The strongest point first: Aurora Awakener's effect is an enters-the-battlefield trigger, so removal after it resolves does not undo the permanents it already put onto the battlefield. Before it resolves, the live vector is a counterspell, and the honest count is that Spell Snare - 'Counter target spell with mana value 2' - is 1 of 23 nonland cards and cannot answer anything at mana value 1 or 3 and above. Against targeted removal on a key creature, Blossoming Defense gives 'hexproof until end of turn' for {G} at instant speed. Tam's 'each other creature you control has hexproof from each of its colors' is NOT general protection for Aurora Awakener, which is mono-green - it grants hexproof from green only, one colour of five, until Tam's separate {T} ability makes that creature all colours. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Pitiless Fists (U) | TIER-BELOW UNCOMMON, and the strongest contested absence from the grill. '{3}{G} Enchant creature you control / When this Aura enters, enchanted creature fights up to one target creature an opponent controls. / Enchanted creature gets +2/+2' is real removal for a resolved ground creature - which this deck answers with 0 of 23 nonland cards except Rimekin Recluse's temporary bounce - and being an enchantment it does not dilute the 20-of-23 permanent density Aurora Awakener reads. It was cut only because adding it means cutting a blocker in a list that had just cut two. FIRST SWAP-IN against a creature-heavy field. |
| Formidable Speaker (R) | RARE CUT, contested absence. '{2}{G} 2/2 - When this creature enters, you may discard a card. If you do, search your library for a creature card' plus '{1}, {T}: Untap another target permanent' would be the deck's only tutor and would re-use Bloom Tender. Rejected on a count: the plan does not hinge on one card - Aurora Awakener is 1 of 5 reliability-weighted payoff copies at p=0.81 by turn 7 - so a tutor that costs a card to discard is worse than a fifth payoff. |
| Noggle Robber (U) | TIER-BELOW UNCOMMON, contested absence. '{1}{R/G}{R/G} 3/3 - When this creature enters or dies, create a Treasure token' has the same red supply and the same cost as Gangly Stompling plus real ramp. Kept Gangly Stompling because it is a 4/2 TRAMPLER where Noggle Robber is a 3/3, and after the grill cut two bodies this list needs its remaining creatures to attack as well as block. |
| Chitinous Graspling (C) - CUT during the grill | A 3/4 reach blocker for {3}{G/U}, booked as Engine & Infrastructure. Its only infrastructural contribution was supplying green and blue - the two colours this deck can never be missing. Its slot went to a wildcard colour the deck WAS missing. |
| Glister Bairn (U) - CUT during the grill | Same reason. 'At the beginning of combat on your turn, another target creature you control gets +X/+X' is a combat pump with no mana, no cards and no fixing, at five mana, in a deck whose 5-7 mana turns belong to the payoffs. |
| Mutable Explorer (R) | RARE CUT, and the shape judge's weak-keystone call. Changeling makes a card every creature TYPE, not every COLOUR, and its Mutavault token is a LAND with '{T}: Add {C}' - colourless. It would have contributed 0 to the count this deck is built on. |
| Shinestriker (U) | TIER-BELOW UNCOMMON. 'Flying / Vivid - When this creature enters, draw cards equal to the number of colors among permanents you control' is the archetype's card-advantage payoff, but at {4}{U}{U} it competes for exactly the turns Prismabasher and Wildvine Pummeler want, and this manabase runs 6 blue sources of 17. |
| Rime Chill (U) | TIER-BELOW UNCOMMON. A {2}{U} tap-two-and-cantrip at X=4, but the shape judge picked the protection build over the card-advantage build, and Rime Chill wants blue open on turns the deck is tapped out ramping. |
| Sunderflock (R) | RARE CUT. 'Costs {X} less to cast, where X is the greatest mana value among Elementals you control' - Prismabasher at MV 6 would discount it to {1}{U}{U}, and 'return all non-Elemental creatures to their owners' hands' would be near one-sided. But it needs a 6-drop Elemental to have already resolved, which is the turn the deck was going to win anyway, and Aurora Awakener is a Giant Druid, not an Elemental. |
| Sapling Nursery (R) | RARE CUT. 'Affinity for Forests' makes it castable for {G}{G} off 11 Forests, and its landfall 'create a 3/4 green Treefolk creature token with reach' pairs with Prismatic Undercurrents' extra land drop. Cut because the tokens are mono-green - they add board presence but 0 to the colour count every payoff reads. |
| Tend the Sprigs (C) | Genuine ramp toward turn seven plus a 3/4 reach blocker, but it is a SORCERY: it would take non-permanents from 3 of 23 to 4 of 23, a direct charge against the density Aurora Awakener reveals through. |
| Celestial Reunion (M) | MYTHIC CUT. '{X}{G} - Search your library for a creature card with mana value X or less... put that card onto the battlefield instead' would tutor Aurora Awakener directly, but only for X=7, i.e. eight mana - a turn later than simply casting it. |
| Firdoch Core (C) / Foraging Wickermaw (C) | Both fix mana without being a coloured permanent themselves (Firdoch Core is a colourless artifact; Foraging Wickermaw is colourless unless you pay {1} every turn). In a deck whose payoffs all read the colour count, Puca's Eye does the same job for the same cost AND draws a card AND becomes a colour permanently. |
| Mistmeadow Council (C) | '{4}{G}, costs {1} less if you control a Kithkin - When this creature enters, draw a card.' Wary Farmer is a Kithkin and the changelings are every creature type, so 4 of 23 nonland cards turn on the discount - but a 4/3 that draws one card is a worse five-drop than Prismabasher. |
| Shimmerwilds Growth (U) | A permanent extra colour plus real acceleration - and it is in the Path A build for exactly that reason. Cut here because this deck already runs Puca's Eye x2 as its wildcard colours, and Shimmerwilds Growth needs a land on the battlefield to enchant, which an opening hand may not have. |
| Luminollusk (U) / Dawn's Light Archer (C) | SIDEBOARD CONSIDERATIONS. Both are the answer to the `raced` failure mode, held out of the mainboard because a green-only blocker adds nothing to X and the mainboard's job is to reach seven mana. Board them in against the cube's aggressive starts. |
| Wild Unraveling (C) | SIDEBOARD CONSIDERATION. '{U}{U} plus blight 2 or pay {1} - Counter target spell' is in practice a three-mana Counterspell off 6 blue sources, so it is boarded rather than maindecked; bring it in when the matchup has one must-answer spell. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.3   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.07 adj [MV 3.3 vs 2.5, 6 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  82.4%  prod  76.5%  gap  +5.9pp  [OK]
  U  demand  17.6%  prod  35.3%  gap -17.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  check1_deck_size: mainboard=40 (need 40), sideboard=10 (need 10)
  check2_membership: PASS
  check3_copies: PASS
  check3b_rare_mythic: 4 rare/mythic cards: ['Aurora Awakener', 'Bloom Tender', 'Tam, Mindful First-Year', 'Wistfulness']
  check4_colour_usability: PASS
  check5_splash: PASS
  overall: PASS
```
