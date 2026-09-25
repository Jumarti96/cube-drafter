---
deck_name: "wu-convoke-value-control"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WU"
format: "40-card"
built_at: "2026-08-11T05:02:06Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x9   Island                     Basic
  x5   Plains                     Basic
  x2   Evolving Wilds             Fetches a basic tapped
  x2   Idyllic Beachfront         WU dual, enters tapped
```

### CREATURES (15)

```
CMC  Card                              Qty   Color  Role                                            Rar
1    Wanderbrine Trapper               x1    W      The only 1-drop; taps two of my creatures per activation  U
2    Deepchannel Duelist               x2    WU     Untaps one Merfolk each end step; Merfolk lord  U
2    Silvergill Mentor                 x2    U      Two convoke bodies for two mana                 U
2    Wanderbrine Preacher              x1    W      Gains 2 life on every tap — lifegain that is also a body  C
3    Adept Watershaper                 x1    W      Other tapped creatures are indestructible       R
3    Glen Elendra Guardian             x1    U      Flash flier (2/3 on arrival); counters a noncreature spell  R
3    Silvergill Peddler                x2    U      Convoke body that loots on every tap            C
4    Pestered Wellguard                x2    U      A flying Faerie each time it taps — the clock the engine makes  U
5    Disruptor of Currents             x1    U      Flash convoke body that bounces any nonland permanent  R
5    Merrow Skyswimmer                 x2    WU     Convoke flier + token; vigilance                C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                              Qty   Color  Role                                            Rar
3    Crib Swap                         x1    W      Unconditional exile; a Merfolk card via changeling  U
3    Protective Response               x2    W      Convoke instant removal                         U
4    Temporal Cleansing                x1    U      Convoke: tucks any nonland permanent            C
5    Unexpected Assistance             x2    U      Convoke instant: draw three, discard one        C
6    Winnowing                         x1    W      Conditional convoke sweeper — conflicts with my own Faeries; see analysis  R
```

## SIDEBOARD (10)

```
Card                        Qty   Color  Role / When to board in                                                                 Rar
Spell Snare                 x2    U      Counters MV-2 spells — covers creatures, which the maindeck counter cannot — vs decks whose key plays cost two; MV2 is the pool's largest bucket at 72/260  U
Keep Out                    x1    W      4 damage to a tapped creature, or destroy an enchantment — vs the cube's 21 enchantments, or as cheap relief against attackers, which are tapped by definition  C
Loch Mare                   x1    U      Two-mana body that converts into three cards or a tap-and-stun — vs grindy control mirrors where a cheap body that becomes card advantage beats a reactive spell  M
Eclipsed Merrow             x1    WU     A body that digs 4 for a Merfolk, Plains or Island — vs decks that pressure the mana base, or when more early bodies are needed to power convoke  U
Pyrrhic Strike              x1    W      One mode, or both if blight 2 is paid: artifact/enchantment, or MV3+ creature — vs artifacts specifically; Keep Out is cheaper for enchantments alone  U
Liminal Hold                x2    W      Exiles any nonland permanent an opponent controls — vs planeswalkers and resilient permanents beyond the two maindeck answers  C
Rooftop Percher             x2    C      Graveyard hate on a 3/3 changeling flier — vs the cube's 39-card graveyard theme, its largest at 15% density — the class the maindeck concedes  C
```

## ANALYSIS

### DECK IDENTITY

A W/U control deck whose mana base is half lands and half creatures. Convoke reads 'Each creature you tap while casting this spell pays for {1} or one mana of that creature's color', and 9 of this deck's 22 nonland cards have convoke — the highest density of the three decks built from this pool — so Unexpected Assistance ({3}{U}{U}), Disruptor of Currents ({3}{U}{U}), Winnowing ({4}{W}{W}) and Temporal Cleansing ({3}{U}) are routinely cast for one or two real mana off a board of small bodies. That converts a plan that would normally need eight lands into one that operates on four or five, which is what lets the deck deploy AND hold interaction up on the same turn. The win condition is produced by the engine rather than bolted on beside it: Pestered Wellguard reads 'Whenever this creature becomes tapped, create a 1/1 blue and black Faerie creature token with flying', so the act of paying convoke manufactures an evasive, accumulating clock, and Merrow Skyswimmer's vigilance means it attacks and still pays for a spell.

### THE THESIS THIS DECK WAS ORIGINALLY PITCHED ON WAS WRONG

When the three sub-archetypes were presented, this one was sold as *"Winnowing as a one-sided wrath."* That claim did not survive contact with the cube.

Winnowing reads: *"For each player, you choose a creature that player controls. Then each player sacrifices all other creatures they control that don't share a creature type with the chosen creature they control."* The opponent keeps **every creature sharing a type with the one you pick for them**. In this cube:

| Measure | Value |
|---|---|
| Cards carrying a Tribal/Kindred tag | 43% of 277 |
| Pool creatures with ≥ 2 creature subtypes | 139 of 168 |
| Changelings (every creature type — survive unconditionally) | 13 |
| Random creature pairs already sharing a type | 29.3% |

Against a mono-tribe opponent Winnowing kills **zero** creatures. So this deck was rebuilt around what convoke actually does — **cost reduction for expensive value spells** — and Winnowing is played as a 1-of conditional sweeper at reliability weight 0.5, not as the centrepiece.

### THE MANA BASE IS HALF LANDS AND HALF CREATURES

9 of 22 nonland cards have convoke — the highest density of the three decks built from this pool. That is what makes an 18-land control deck able to cast this:

| Card | Printed | Realistic off 3–4 bodies |
|---|---|---|
| Unexpected Assistance | {3}{U}{U} | 1–2 mana, at instant speed |
| Winnowing | {4}{W}{W} | 1–2 mana |
| Disruptor of Currents | {3}{U}{U} | 1–2 mana, with flash |
| Temporal Cleansing | {3}{U} | often free |
| Merrow Skyswimmer | {3}{W/U}{W/U} | 1–2 mana |

And convoke pays *coloured* pips — *"one mana of that creature's color"* — so the {U}{U} on Unexpected Assistance and the {W}{W} on Winnowing come off blue and white Merfolk directly, not just their generic components. The mana audit measures colour demand from printed costs and therefore **overstates** what this deck needs from its lands. Its measured gap is ±0.4pp, the cleanest of the three.

### THE WIN CONDITION IS MANUFACTURED BY THE ENGINE

This is why the shape judge picked this build over two competing ones. Pestered Wellguard reads *"Whenever this creature becomes tapped, create a 1/1 blue and black Faerie creature token with flying."* Paying convoke taps it — so **casting a spell builds the clock**. No card slot is spent on a finisher. Merrow Skyswimmer's vigilance is the other half: it attacks and stays untapped, so it is the only threat here that never has to choose between hitting and paying for a spell.

The rejected "proactive finisher" build was rejected precisely because not one of its keystones drew a card; the rejected "reactive attrition" build because bodies held up to convoke answers on the opponent's turn are the same bodies that must attack to close.

### THE SHARPEST THING THE GRILL FOUND

Winnowing **conflicts with this deck's own declared win condition**, and the conflict cannot be resolved by choosing well:

- Pestered Wellguard's tokens are **Faeries**, not Merfolk.
- Name any Merfolk to save the board → **every Faerie token is sacrificed.**
- Name Glen Elendra Guardian (a Faerie Wizard) to save the Faeries → **11 of the 14 Merfolk-typed copies are sacrificed** (it spares only the Merfolk *Wizards* — Silvergill Mentor ×2 and Disruptor of Currents).

There is no choice that keeps both halves. The card stays as a 1-of, but it is now correctly understood as a **catch-up card** — cast on turns when the Faerie clock has not yet been built or has already been answered, never as a reset alongside a developed board. An earlier draft of this analysis claimed "I keep nearly everything when it fires," which was simply false.

### WHERE THIS DECK SITS AGAINST THE OTHER TWO

| | Tap-Trigger | Kinbinding | **This deck** |
|---|---|---|---|
| Lands | 17 | 17 | **18** |
| Avg MV | 3.09 | 2.96 | **3.41** |
| Convoke cards | 6 / 23 | 5 / 23 | **9 / 22** |
| Net card-economy cards | 3 / 23 | 1 / 23 | **4 / 22** |
| Coverage classes answered | 2 of 5 | 2 of 5 | **4 of 5** |
| Plays Hallowed Fountain? | no | **yes** | no |

That last row is the one worth noticing: the same rare land is correct in the aggro deck and wrong here. An 18-land control deck absorbs a tapped land far more easily than a deck trying to kill on turn 6, so the rare slot buys a spell instead. Same pool, same cap, opposite call.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:1  2:5  3:7  4:3  5:5  6:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.3: Pestered Wellguard@0.9, Pestered Wellguard@0.9, Winnowing@0.5) → p=0.94 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.7: Silvergill Mentor@0.85, Silvergill Mentor@0.85) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 15%  T2 73%  T3 96%
Coverage:  [PASS]
  OK        wide_boards: Winnowing, Temporal Cleansing
  OK        single_large_threat: Crib Swap, Protective Response, Temporal Cleansing, Disruptor of Currents
  OK        noncreature_permanents: Temporal Cleansing, Disruptor of Currents
  OK        stack: Glen Elendra Guardian
  CONCEDED  graveyard: No mainboard graveyard answer. The pool gives W/U exactly one (Rooftop Percher, 'exile up to two target cards from graveyards'), and at 5 printed mana with no convoke it would push this deck's already-high 3.41 average mana value further up and move land_target off 18. It is in the sideboard for the cube's 39-card graveyard theme, its largest at 15% density.
```

- Goldfish keepable was 77% against an 80% threshold on the first FILL. Rather than argue it, the curve was lowered: Champions of the Shoal and one Temporal Cleansing came out for Silvergill Peddler x2, raising keepable to 82%. After the Phase 9 repair (Springleaf Drum x2 out, Wanderbrine Trapper and Wanderbrine Preacher in) it measures 80% — at the threshold, PASS. The simulator also systematically understates this deck, because it measures castability from printed mana value and cannot know that 9 of 22 nonland cards have convoke.

- Threats/Payoffs 18.2% vs a 5-10% band: accepted on the mechanism the judge credited — the clock is manufactured by the engine, and a control deck in this pool at 5-10% threats has no way to win. Attribution corrected: the judge did not select this build for that number, which did not exist at selection time.

- Engine 45.5% vs a 10-20% band: accepted, with the two-part rationale the Challenger's F8 required — the 8 creature copies are the second mana base, and the 2 non-creature copies stand on their own as ordinary control card advantage.

- Interaction reached 36.4% and is IN BAND after the Phase 9 repair; it was 31.8% and out of band before.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Silvergill Peddler x2 reads 'Whenever this creature becomes tapped, draw a card, then discard a card', so every convoke tap and every Wanderbrine Trapper activation converts a surplus land in hand into a fresh card. Unexpected Assistance x2 turns excess mana into cards outright. Structurally, convoke is anti-flood: 9 of 22 nonland cards are paid with creatures instead of lands, so the 6th and 7th land are never needed to cast anything. |
| screw | mitigation | Corrected arithmetic per Challenger F4. Unexpected Assistance is MV 5 and IS castable off three lands and two bodies; the claim that Harmonized Crescendo was also castable that way was false (MV 6 needs three lands and three bodies) and that card is no longer in the deck. Wanderbrine Trapper ({W}) is now the deck's only 1-MV creature and the earliest convoke body, and its '{1}, {T}, Tap another untapped creature you control' taps TWO of my creatures per activation, double-triggering Pestered Wellguard and Silvergill Peddler at instant speed. Springleaf Drum x2 was cut for it: for the 9 convoke copies the Drum was strictly worse than convoke itself, and with no 1-MV creature it made no mana until turn 3. 3 lands by turn 3 measures 92%, the best of the three decks. |
| decapitation | mitigation | No single card is the plan. The card engine is spread across Unexpected Assistance x2 and Silvergill Peddler x2; the clock across Merrow Skyswimmer x2 and Pestered Wellguard x2 — answering either leaves the other. Adept Watershaper is a singleton but is protection, not the plan; the deck functions without it at the cost of losing tapped creatures to combat and damage-based removal. |
| gas-out | mitigation | 4 of 22 nonland copies draw cards. Unexpected Assistance x2 is net +2 each and is an INSTANT with convoke, so refuelling does not compete with holding interaction up — which is the specific reason this pipeline exists. Silvergill Peddler x2 is self-replacing on every tap, and this deck taps its own creatures constantly. Honest note: this is one card thinner than before the grill, because Harmonized Crescendo's rare slot was spent on Disruptor of Currents to bring interaction into band. |
| raced | mitigation | Rewritten from an 'accepted' after the Challenger showed the stated cost was false. I had claimed adding lifegain or a cheap wall 'would cost slots from the 12 bodies that are simultaneously this deck's mana base' — but Wanderbrine Preacher ('Whenever this creature becomes tapped, you gain 2 life') IS a body: a two-mana Merfolk that is itself a convoke source, a behold target, a Merfolk permanent, and a legal target for Deepchannel Duelist's untap. It is now in the deck, and this deck taps its own creatures on 9 convoke cards plus Wanderbrine Trapper's activation, so the trigger fires often. Alongside it: Protective Response x2 destroys an attacking creature at instant speed for convoke, Crib Swap exiles, Disruptor of Currents bounces at flash speed, and Adept Watershaper makes tapped creatures indestructible — with the stated limit that it does not protect blockers, since blocking does not tap. Spell Snare x2, Keep Out and Liminal Hold x2 come in from the sideboard against the fastest starts. |
| disruption-fizzle | mitigation | Convoke taps creatures as a COST while casting, so nothing about the engine is lost if the spell is countered — the mana was creatures, not cards, and Pestered Wellguard's Faerie and Silvergill Peddler's loot both trigger on that tapping and resolve regardless. The plan is also spread across turns rather than committed to one: of the 9 convoke cards, Protective Response x2, Unexpected Assistance x2 and Disruptor of Currents are instants or flash, and Glen Elendra Guardian has flash, so the deck acts on the opponent's turn and never has to tap out into open mana to execute. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Harmonized Crescendo | Cut during the grill despite being the marquee convoke payoff. At {4}{U}{U} it is a 6-MV instant that affects no board, and its rare slot bought Disruptor of Currents instead — a flash body that is simultaneously a convoke payer, a convoke user, an answer to any nonland permanent, and the card that moved interaction from 31.8% (below the control floor) to 36.4% (in band). Card-draw copies fell from 5 of 22 to 4 of 22; that was the price. |
| Springleaf Drum | Both copies cut during the grill. For the 9 convoke cards it is strictly worse than convoke itself — convoke already taps a creature for mana without also tapping an artifact — and with no 1-MV creature in the list it produced no mana until turn 3. Its genuine value (a free repeatable tap outlet for Pestered Wellguard and Silvergill Peddler) is now supplied by Wanderbrine Trapper, which taps two creatures per activation. |
| Champions of the Shoal | Cut while lowering the curve. Its 'behold a Merfolk and exile it' removes one of my own convoke bodies to deploy it, which is the wrong trade in a deck whose bodies are its mana, and the shape judge separately found that its stun-counter trigger is a tap-down rather than an answer. |
| Curious Colossus | Rejected by the shape judge as 'an enabler sold as a finisher': its ETB removes blockers for one turn against creatures already on the board, does not blank anything cast afterward, and at {5}{W}{W} it is a mythic this deck cannot reliably deploy at 18 lands. |
| Hallowed Fountain | The pool's only untapped-capable WU dual, deliberately NOT played here even though the Kinbinding deck does play it. It is a rare, and a control deck at 18 lands absorbs a tapped land far more easily than an aggro deck — so the rare slot buys a spell instead. The opposite call from Deck 2, and the difference is the point. |
| Glen Elendra's Answer | 'Counter all spells your opponents control and all abilities your opponents control. Create a 1/1 blue and black Faerie creature token with flying for each' makes exactly this deck's token type and would be a blowout. Excluded solely by the 5-rare cap being full, not on merit — the first card to try if the cap is raised. |
| Deepway Navigator | 'When this creature enters, untap each other Merfolk you control' is a flash mass-refuel of the convoke mana base, which is precisely this deck's resource. Excluded solely by the 5-rare cap. |
| Sunderflock | 'This spell costs {X} less to cast, where X is the greatest mana value among Elementals you control' — this deck contains zero Elementals, so the discount is always 0 and it is a straight {7}{U}{U}. Its 'return all non-Elemental creatures to their owners' hands' would also bounce my entire board. |
| Mirrorform | 'Each nonland permanent you control becomes a copy of target non-Aura permanent' wants a wide board AND a large target already on the battlefield; this deck's boards are wide and small, and it is a mythic against a full cap. |
| Omni-Changeling | A close call and a genuine absence flagged by the grill: convoke plus changeling means it is a Merfolk for every count and survives this deck's own Winnowing under any choice. It lost to keeping the interaction count in band, and 'enter as a copy of any creature on the battlefield' is a 0/0 when the best thing to copy is a 2/3. |
| Wanderwine Farewell | 'Return one or two target nonland permanents to their owners' hands' plus a Merfolk token per permanent returned is a strong convoke answer that replaces the bodies it spent. Left out on curve: at printed MV 7 it pushed avg MV and the land target up, and Disruptor of Currents covers the same class at MV 5 on a body. |
| Sun-Dappled Celebrant | The pool's largest convoke body (5/6 vigilance) and a fine blocker, but it is a Treefolk Cleric — it does not count for any Merfolk-typed payoff in this deck and it makes no token, so it is one body for six printed mana in a deck that buys bodies two at a time. |
| Thirst for Identity | 'Draw three cards. Then discard two cards unless you discard a creature card' is net +2 at instant speed for three mana and its discount is well fed here. It lost its slot to Unexpected Assistance x2, which does the same job with convoke attached — the whole point of this pipeline. |
| Shinestriker | 'Vivid — When this creature enters, draw cards equal to the number of colors among permanents you control' draws exactly 2 in a two-colour deck, for {4}{U}{U}. A 6-mana 3/3 flier that draws two is below rate for a deck whose expensive spells are all convoke-discounted. |
| Rime Chill | 'Vivid — This spell costs {1} less to cast for each color among permanents you control' saves only {2} in a two-colour deck, leaving {4}{U} to tap two creatures and draw a card. Too expensive for the effect when Temporal Cleansing answers a permanent permanently for convoke. |
| Moonlit Lamenter | A 2/5 wall that converts a -1/-1 counter into a card is a reasonable control body, but it has no convoke, makes no token, and taps for nothing — it does not participate in the mana base that is this deck's whole thesis. |
| Swat Away | 'This spell costs {2} less to cast if a creature is attacking you' is genuinely on-rate for a control deck. It lost to Protective Response, which convoke makes free rather than cheap, and which destroys rather than tucking to the top of the library. |
| Wild Unraveling | A two-mana counterspell whose 'blight 2 or pay {1}' cost this deck can pay, but putting two -1/-1 counters on a convoke body reduces the mana base's durability, and Spell Snare in the sideboard answers the same MV-2 bucket for one mana. |
| Illusion Spinners | 'This creature has hexproof as long as it's untapped' anti-synergizes directly with a deck whose plan is tapping its own creatures to cast spells. |
| Puca's Eye | 'Activate only if there are five colors among permanents you control' — this deck has two colours, so the draw ability is permanently switched off. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.41   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.21 adj [MV 3.41 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand  61.5%  prod  61.1%  gap  +0.4pp  [OK]
  W  demand  38.5%  prod  38.9%  gap  -0.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  base: cube_mainboard only — every card verified by exact name against the working pool
  commons_uncommons_max_2: PASS — no common or uncommon exceeds 2 copies
  rares_mythics_max_1_each: PASS — all 5 rare/mythic cards are singletons
  rares_mythics_max_5_total: PASS — exactly 5/5: Glen Elendra Guardian, Adept Watershaper, Disruptor of Currents, Winnowing (mainboard) + Loch Mare (sideboard). No rare land is played.
  basics_unlimited: PASS — Plains x5, Island x9 are format-supplied and exempt
  colour_legality: PASS — every nonland card usable in W/U via effective_cost.best_mode; zero off-identity modes needed
  splash: PASS — splash_colors empty; zero off-core nonland cards
```
