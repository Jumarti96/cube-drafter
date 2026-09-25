---
deck_name: "ubr-vivid-sanar-elementals"
cube_id: "ecl"
cube_slug: "ecl"
colors: "UBR"
format: "40-card"
built_at: "2026-08-11T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x5  Island                basic
  x2  Mountain              basic
  x2  Swamp                 basic
  x1  Blood Crypt           BR dual, shock - pay 2 life or enters tapped
  x2  Contaminated Aquifer  
  x1  Evolving Wilds        
  x2  Geothermal Bog        BR dual, enters tapped
  x2  Molten Tributary      
  x1  Steam Vents           
```

### CREATURES (13)

```
CMC  Card                          Qty  Color  Role            Rar
  2  Explosive Prodigy             x1   R      Interaction     U
  2  Foraging Wickermaw            x2   C      Engine/Outlet   C
  3  Enraged Flamecaster           x2   R      Payload/Payoff  C
  3  Flaring Cinder                x1   RU     Engine/Outlet   C
  4  Sanar, Innovative First-Year  x1   RU     Payload/Payoff  R
  4  Twinflame Travelers           x2   RU     Payload/Payoff  U
  5  Shimmercreep                  x2   B      Payload/Payoff  U
  6  Shinestriker                  x2   U      Payload/Payoff  U
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                  Qty  Color  Role           Rar
  2  Bogslither's Embrace  x1   B      Interaction    C
  2  Nameless Inversion    x2   B      Interaction    U
  2  Sear                  x1   R      Interaction    U
  3  Burning Curiosity     x2   R      Engine/Outlet  C
  5  Ashling's Command     x1   RU     Engine/Outlet  R
```

### OTHER SPELLS (2)

```
CMC  Card        Qty  Color  Role           Rar
  2  Puca's Eye  x2   C      Engine/Outlet  U
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Rar  Role / When to board in
Bogslither's Embrace  x1   B      C    Against a recursive or indestructible threat - the second copy. 'Exile target creature', and the cost reads 'blight 1 OR pay {3}', so it is castable on an empty board.
Giantfall             x2   R      U    Against artifact decks. 'Destroy target artifact' - 1 of only 4 artifact answers cube-wide and the only one legal in U/B/R. The fight mode is weak here: this deck's creatures are 3/2, 3/3, 3/5 and 1/3, so board it for the artifact half.
Sear                  x1   R      U    Against creature decks - the second copy, bringing it to the uncommon cap of 2. 'deals 4 damage to target creature or planeswalker' kills most of the cube's evasive threats, the largest threat class at 41 cards (15.8%).
Wild Unraveling       x2   U      C    Against combo or a single must-answer spell. 'blight 2 or pay {1}. Counter target spell' is a hard counter, and the pay-{1} mode means it is castable with no creature on board. Only 2 counterspells exist cube-wide (0.7%) and both are blue - this is the only one of the three decks that can board either.
Chaos Spewer          x2   BR     C    Against fast aggro - the deck's accepted weakness. A three-mana 5/4 blocker is the largest body available in these colours at that cost, and 'When this creature enters, you may pay {2}. If you don't, blight 2' can put its own counters on itself (5/4 to 3/2) and still block everything. It is also BOTH black and red on one permanent, so it adds a colour to the Vivid count that this deck otherwise only gets from Shimmercreep.
Rooftop Percher       x2   C      C    Against the cube's graveyard decks (39 cards, 15.0% density - the second-largest threat class). 'exile up to two target cards from graveyards. You gain 3 life' on a 3/3 flier. It is a changeling, therefore an Elemental, so Twinflame Travelers doubles its trigger to four exiles and 6 life.
```

## ANALYSIS

### DECK IDENTITY

A Grixis midrange deck built on Vivid - a keyword whose every payoff scales with X, the number of colours among permanents you control. Sanar, Innovative First-Year converts that number into a free play-from-exile at the beginning of every first main phase, and because hybrid cards are BOTH of their colours as permanents, Sanar counts 2 toward its own X just by being on the battlefield. Two colourless permanents push X past the three colours the mana base can produce: Puca's Eye permanently becomes a chosen colour while cantripping, and Foraging Wickermaw becomes any colour at instant speed for {1}. The cashiers are Elementals - Shinestriker draws X, Shimmercreep drains X, Enraged Flamecaster converts every mana-value-4-or-greater cast into 2 damage to each opponent - and Twinflame Travelers makes each of those triggers happen an additional time. Burning Curiosity gives the play-from-exile plan redundancy so it does not live or die on a single legendary creature.

### THE ONE RULE THAT MAKES THIS DECK WORK

Every Vivid card reads *"where X is the number of colors among permanents you control."* The single most common way to misplay this archetype is to assume that means *"play three colours of mana."* It does not. **Lands are colourless permanents.** A basic Island, a Contaminated Aquifer and a Blood Crypt contribute **zero** to X. The colour count lives entirely on your nonland permanents.

Once you accept that, the deck's shape follows:

**Hybrid cards are BOTH of their colours.** Sanar, Innovative First-Year is `{2}{U/R}{U/R}` — it is a blue **and** red permanent, so **the turn it resolves, X is already 2 with nothing else on the battlefield.** Its own trigger is live immediately, not three turns later once a board is assembled. The same is true of Twinflame Travelers and Flaring Cinder.

**Colourless permanents can add colours you cannot cast.** Puca's Eye is `{2}` generic — castable off any land in any configuration — and its ETB reads *"draw a card, then choose a color. This artifact becomes the chosen color."* Nothing says the colour has to be one you play. Two Puca's Eyes choosing **white and green** take X from 2 to 4 in a deck that cannot produce either colour. Foraging Wickermaw then adds a fifth at instant speed for `{1}`.

The full line, using four permanents and no black:

| Step | Permanent | Adds | X |
|---|---|---|---|
| 1 | Sanar (hybrid U/R) | U, R | **2** |
| 2 | Puca's Eye #1 → White | W | **3** |
| 3 | Puca's Eye #2 → Green | G | **4** |
| 4 | Foraging Wickermaw activates for `{1}` | 5th | **5** |

At X=4 a single Shinestriker draws 4, a single Shimmercreep drains 4, and with Twinflame Travelers on the battlefield each of those happens **twice**.

### WHAT TWINFLAME TRAVELERS DOES AND DOES NOT DOUBLE

*"If a triggered ability of another Elemental you control triggers, it triggers an additional time."* 10 of the 13 creature copies are Elementals, but only the ones with an actual **triggered** ability get doubled — **8 of the 22 nonland cards**: Explosive Prodigy, Flaring Cinder, Enraged Flamecaster ×2, Shimmercreep ×2, Shinestriker ×2.

Two exclusions that matter at the table:

- **Squawkroaster was cut from this deck for exactly this reason.** *"Squawkroaster's power is equal to the number of colors among permanents you control"* is a characteristic-defining ability, not a triggered one. It is the only Vivid payoff in the colour pair that does **not** scale with the deck's own multiplier.
- **Sanar is not doubled either.** Its type line reads Goblin Sorcerer, not Elemental.

### THE BLACK PROBLEM, STATED HONESTLY

Black is 23.8% of the pip demand but supplies almost nothing to X: **the only black permanents in the mainboard are Shimmercreep ×2.** Nameless Inversion is a Kindred *Instant* and Bogslither's Embrace is a *Sorcery* — neither is a permanent, and Swamps are colourless.

Black is in this deck for three cards, not for the colour count: Shimmercreep's drain, and the two cheapest removal spells in the colour pair. The colour count is supplied by the hybrids and the colourless artifacts, which is why the deck functions despite black rarely showing up on the battlefield. **If the count feels unreliable in play, Chaos Spewer is the fix** — it is a three-mana 5/4 that is both black and red on one permanent, and it is already in the sideboard.

### THE MANA BASE IS THE PRICE OF ADMISSION

Three-colour mana in this cube is genuinely bad, and the deck pays for it in two currencies:

- **Tempo.** 7 of the 18 lands enter tapped (Contaminated Aquifer ×2, Molten Tributary ×2, Geothermal Bog ×2, plus Evolving Wilds fetching tapped). This is the single largest reason the thesis turn is 8 rather than 6.
- **Rare budget.** Steam Vents and Blood Crypt are the **only** duals in these colours that can enter untapped, and both are rares. Two of the four rare slots this deck spends go to *lands*.

Contaminated Aquifer is load-bearing and irreplaceable: it is **the only U/B fixing in the entire cube**. The double-blue Shinestriker and the black cards both run through it.

The one subsidy that makes it work: **4 of the coloured pips are U/R hybrids** (Sanar, Flaring Cinder), payable by either colour. That is real slack on a base with seven tapped lands.

### PLAY PATTERN

- **T2**: Puca's Eye or Foraging Wickermaw — both colourless, both castable off any land, including a tapped one played on T1. Choose an off-colour with the Eye.
- **T3**: Burning Curiosity (impulse 2–3 cards), Enraged Flamecaster, or Flaring Cinder.
- **T4**: Sanar. From here you get a free extra card every single turn.
- **T5+**: Shimmercreep and Shinestriker land into an already-inflated X, and Twinflame Travelers doubles whichever arrives second.
- **The instant-speed trick**: Foraging Wickermaw's `{1}` activation can be used **in your upkeep**, before Sanar's beginning-of-first-main-phase trigger, to raise X by one for that turn's reveal. It can also be used in response to removal.

### THE HONEST WEAKNESSES

**Turn-1 play rate is 0%.** There is no one-drop, and the deck accepts this rather than mitigating it. Every one-drop in these colours is a rare the budget cannot afford, a reactive spell better held, or carries a behold-or-pay-`{2}` cost that makes it a non-play on turn 1. With seven tapped lands, the correct turn-1 play here is genuinely *"sequence the tapped dual."*

**Wide boards are conceded.** Ashling's Command is the only mass answer in the 40, and the cube's only other sweeper (Soul Immolation) is a mythic the rare budget cannot reach.

**Enchantments are unanswerable.** Zero U/B/R cards in this cube destroy or exile an enchantment; 21 exist (8.1%).

### WHAT THE GRILL CHANGED

Worth knowing before you tune this: the pre-grill version of this list ran **Sanar as the only play-from-exile card in a deck built around playing from exile.** Burning Curiosity ×2 was added specifically to fix that — the pipeline is now 3 of 22 cards, not 1. Squawkroaster, Ashling and Tanufel Rimespeaker came out; the fifth rare slot is deliberately left unspent, which is the flexibility to add one back if you want a different top end.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  2:9  3:5  4:3  5:3  6:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 7.1: Sanar, Innovative First-Year@0.7, Shinestriker@0.8, Shinestriker@0.8, Shimmercreep@0.8, Shimmercreep@0.8, Twinflame Travelers@0.8, Twinflame Travelers@0.8, Enraged Flamecaster@0.8, Enraged Flamecaster@0.8) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.6: Flaring Cinder@0.8, Ashling's Command@0.8) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 88%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: CORRECTED after the grill, which showed the earlier declaration overstated this. Explosive Prodigy 'deals X damage to TARGET CREATURE an opponent controls' is single-target and does not answer a wide board. The only genuine mass answer in the 40 is Ashling's Command x1 ('deals 2 damage to each creature target player controls'), 1 of 22 nonland cards - too thin to declare as coverage. The cube's only other sweeper is Soul Immolation, a MYTHIC, and the rare/mythic budget is spent on Sanar, Ashling's Command and the two untapped duals that the three-colour mana base cannot function without. The class is conceded; Chaos Spewer x2 in the sideboard is a blocker, not a sweeper.
  OK        single_large_threat: Bogslither's Embrace, Sear, Nameless Inversion
  CONCEDED  noncreature_permanents: Enchantments are unanswerable in U/B/R - the dossier's enchantment_answers list contains only G, UG and W cards - and there are 21 of them (8.1% of the cube). Artifacts are answerable but only by Giantfall, which is 1 of the 4 artifact answers cube-wide; artifacts are 11 cards (4.2%), so it sits in the sideboard x2 rather than taking a maindeck slot that would be blank in most matchups.
  CONCEDED  stack: The maindeck runs no counterspell. This is the only one of the three decks that CAN answer the stack - both of the cube's counterspells are blue - but at 2 cards cube-wide (0.7%) they are a boarded answer, not a maindeck slot. Wild Unraveling x2 ('blight 2 or pay {1}. Counter target spell') is the sideboard answer; it is preferred over Spell Snare because Spell Snare only counters spells of mana value exactly 2.
  CONCEDED  graveyard: The maindeck concedes graveyard interaction. Rooftop Percher x2 is the sideboard answer; at {5} it is colourless and castable, but a five-drop that answers two cards is too slow for a maindeck slot in a deck already carrying two mana-value-6 payoffs. The class is real and large: 39 cards, 15.0% density.
```
_No WARN-tier flags were raised; all four structural checks passed._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | 8 of the 22 nonland cards cost 4 or more, topping out at two copies of Shinestriker at mana value 6, so excess lands are what make the top of the deck castable on curve. Puca's Eye's second ability ('{3}, {T}: Draw a card. Activate only if there are five colors among permanents you control') is a repeatable mana sink once the colour count is maxed, and Foraging Wickermaw's '{1}: Add one mana of any color' converts a spare land into fixing plus a point of X. Burning Curiosity x2, added in the repair, turns a flooded turn into two or three fresh cards off the top. |
| `screw` | mitigation | 9 of the 22 nonland cards cost 2 - CORRECTED from an earlier draft that said 8 - and four of those are COLOURLESS (Puca's Eye x2, Foraging Wickermaw x2), so they cast off any land at all and are the deck's stated turn-2 play regardless of which colours have arrived. Evolving Wilds and Foraging Wickermaw both fix. The goldfish check reports 85% keepable hands and 92% on three lands by turn 3 - the best three-lands-by-turn-3 figure of the three decks in this run, which is what an 18-land base buys. |
| `decapitation` | mitigation | Sanar is a singleton by rare limit. Two independent answers. First, the pipeline itself is no longer a 1-of: Burning Curiosity x2 was added in the Phase 9 repair specifically because the play-from-exile plan the user asked to build around was executed by exactly one card, so 3 of the 22 nonland cards now play from exile. Second, the win condition never ran through Sanar. The payoff suite is 9 copies - Sanar x1 plus eight that function with it dead: Shinestriker x2 (draw X), Shimmercreep x2 (drain X), Enraged Flamecaster x2 (2 damage to each opponent per mana-value-4-or-greater cast, doubled by Twinflame Travelers) and Twinflame Travelers x2 - all cashing the same colour count, which lives on permanents Sanar does not supply. The structural check measures P(seeing a payoff by turn 8) at 0.95. |
| `gas-out` | mitigation | CORRECTED after the grill, which showed the earlier figure of 11 counted loots and surveils as card advantage. Genuinely NET-POSITIVE sources are 8 of the 22 nonland cards: Sanar x1 (a free extra play every first main phase), Shinestriker x2 (draw X, doubled to 2X by Twinflame Travelers), Puca's Eye x2 (cantrip on entry), Ashling's Command x1 ('Target player draws two cards'), and Burning Curiosity x2 (exile two or three and play them). Foraging Wickermaw's surveil 1 and Flaring Cinder's discard-then-draw are selection and smoothing, not card advantage, and are no longer counted as such. |
| `raced` | accepted | REWRITTEN after the grill, which correctly marked the earlier version UNSATISFIED for stating a false dichotomy. The earlier text claimed mitigating would require cutting the tapped duals or the mana-value-5-and-6 payoffs; that was untrue - the pool contains cheap answers (Chaos Spewer, Enraged Flamecaster, Soulbright Seeker) that cost neither. The repair took the two that fit: Enraged Flamecaster x2 gives a 3/2 REACH blocker against the cube's largest threat class (41 evasion cards, 15.8%), and the mana-value-3 slot went from 1 of 22 cards to 5 of 22. What remains accepted is narrower and true: the deck still has a turn-1 play rate of 0%, because every one-drop in these colours is either a rare the budget cannot afford, a reactive spell better held, or carries a behold-or-pay-{2} cost that makes it a non-play on turn 1 - and because with 7 of 18 lands entering tapped, the correct turn-1 play in this deck is to sequence a tapped dual. The cost of fixing that is the three-colour mana base itself, whose only U/B bridge is Contaminated Aquifer. The boarded answer is Chaos Spewer x2, a three-mana 5/4 blocker. |
| `disruption-fizzle` | mitigation | There is no critical turn to interact with - the plan is a per-turn accumulation, and the colour count that drives it lives on permanents already on the battlefield rather than on the stack. X is supplied redundantly: Sanar alone is 2 colours because it is a hybrid permanent; Puca's Eye x2 each add a permanent colour of your choosing; Foraging Wickermaw x2 each add one at instant speed for {1}, which means the count can be raised in response to removal after blockers are declared, or in upkeep before Sanar's beginning-of-first-main-phase trigger. Removing any single one of those does not collapse X, and no single answer stops the accumulation. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Ashling, Rekindled // Ashling, Rimebound | CUT in the Phase 9 repair. Its ramp lives on the BACK face and reaching it requires paying {U} on a previous first main phase, so it is a turn slower than its mana value 2 suggests - it carried the harshest reliability discount in the build at 0.7. Two further counts decided it: it consumed 1 of only 5 rare slots in a deck where 2 of the other 4 were forced onto the only untapped duals in the colour pair; and its own bundle record carries no mana cost and no colours, so it contributes 0 to X and Sanar can never exile it. Cutting it took the rare budget from 5 of 5 to 4 of 5. |
| Tanufel Rimespeaker | 'Whenever you cast a spell with mana value 4 or greater, draw a card.' CUT in the Phase 9 repair. The grill correctly observed that its justification - a mana-value-4-matters count - was build-internal rather than a judge-credited thesis ground for the Engine deviation. Its denominator also shrank with the repair, from 10 of 22 nonland cards at mana value 4 or greater to 8 of 22. Enraged Flamecaster took its slot: the same trigger condition, converted to damage rather than a card, in a deck whose accepted failure mode is being raced. |
| Squawkroaster | 'Double strike. Vivid - Squawkroaster's power is equal to the number of colors among permanents you control.' CUT in the Phase 9 repair. It was a judge-flagged weak keystone in the rejected Sketch 1, and the decisive count is that Twinflame Travelers does NOT double it (a characteristic-defining ability is not a triggered ability), which makes it the only payoff in the deck that does not scale with the deck's own multiplier. It is a 0/4 on an empty board. |
| Chaos Spewer | 'When this creature enters, you may pay {2}. If you don't, blight 2.' Raised by the grill as a missed sweep entry and it was genuinely missed. A three-mana 5/4 is the largest body available in these colours at that cost, it is BOTH black and red on one permanent (which is the cheapest two-colour permanent in the pool, against a deck whose cheapest is Flaring Cinder at 3), and its blight can go on itself, leaving a 3/2 that still blocks. It is in the SIDEBOARD x2 rather than the maindeck because the maindeck slots it would take are the Vivid payoffs that are the reason to be in these colours; against fast aggro it comes in. |
| Kulrath Zealot | 'When this creature enters, exile the top card of your library. Until the end of your next turn, you may play that card. Basic landcycling {1}{R}.' Raised by the grill as non-rare play-from-exile redundancy, and it is an Elemental with a triggered ability, so Twinflame Travelers would double it into two free cards. Excluded because at {5}{R} it is a third card at mana value 6 in a deck already carrying two Shinestrikers there, and its landcycling is far weaker here than in a mono-colour deck: only 9 of the 18 lands are basics, so 'search your library for a basic land card' finds a Swamp or Mountain that may not be the colour needed. |
| Mischievous Sneakling | 'Changeling. Flash.' A {1}{U/B} 2/2 is BOTH blue and black as a permanent - the cheapest way in the pool to add a black colour to the count, against a deck whose only black permanents are Shimmercreep x2. Excluded because Puca's Eye does the same job at the same cost, adds a colour the deck cannot even cast, and draws a card while doing it; and Mischievous Sneakling has no trigger for Twinflame Travelers to double. Chaos Spewer is the better version of this card and is in the sideboard. |
| Silvergill Mentor | 'When this creature enters, create a 1/1 WHITE and blue Merfolk creature token.' Raised by the grill as one of only two cards in the legal pool that put an inherently white permanent onto the battlefield. Excluded because its behold-a-Merfolk cost is payable only off Nameless Inversion x2 (changeling) or by paying {2}, making it realistically a four-mana 2/1 plus a token - and Puca's Eye produces the same off-colour colour for {2} while drawing a card. |
| Eclipsed Boggart | '{B/R}{B/R}{B/R}. When this creature enters, look at the top four cards of your library. You may reveal a Goblin, Swamp, or Mountain card from among them and put it into your hand.' A triple hybrid, so castable off B or R alone and a two-colour permanent at mana value 3. Excluded on its selection count in THIS deck: hits are Swamp x2 + Mountain x2 + Blood Crypt + Geothermal Bog x2 = 7 of the other 39 cards, and Sanar is the only Goblin. Chaos Spewer is the same colour-count job on a 5/4 instead of a 2/3. |
| Scarblade's Malice | 'Target creature you control gains deathtouch and lifelink until end of turn. When that creature dies this turn, create a 2/2 black and GREEN Elf creature token.' Raised by the grill as the only card in the legal pool that can produce a green permanent. Excluded because the green permanent arrives only if your own creature dies that turn - a conditional two-step in a deck that wants its creatures alive - whereas Puca's Eye simply chooses green on entry. |
| Voracious Tome-Skimmer | 'Flying. Whenever you cast a spell during an opponent's turn, you may pay 1 life. If you do, draw a card.' Also a U/B hybrid, so two colours on one permanent. Its trigger requires casting on an opponent's turn, and this mainboard contains 4 instants of 22 nonland cards (Nameless Inversion x2, Sear x1, Ashling's Command x1) - CORRECTED from an earlier draft that said 5 by reusing the instants-and-sorceries figure. Too thin a denominator to make it a card-advantage engine here. |
| Eclipsed Flamekin | 'When this creature enters, look at the top four cards of your library. You may reveal an Elemental, Island, or Mountain card from among them and put it into your hand.' CORRECTED after the grill, which showed the earlier hit count was understated: the oracle says Elemental CARD, which includes Nameless Inversion x2 (changeling - 'This card is every creature type') and Ashling's Command (a Kindred Instant - Elemental), so the true count is higher than the creature-only figure originally recorded. Still excluded, on the unchanged ground that a large share of the hits are lands in a deck built exactly to an 18-land target, and a 1/4 body does not advance a plan that needs to reach mana value 6. |
| Rime Chill | 'Vivid - This spell costs {1} less to cast for each color among permanents you control. Tap up to two target creatures. Put a stun counter on each of them. Draw a card.' The judge flagged the real problem as a weak keystone in the rejected Sketch 3: the discount is smallest exactly when the answer is most needed. At X=2 on turns 2-4 it costs {4}{U}; it is only efficient from turn 5. |
| Dream Harvest | 'Each opponent exiles cards from the top of their library until they have exiled cards with total mana value 5 or greater this way. Until end of turn, you may cast cards exiled this way without paying their mana costs.' A genuine play-from-exile card and thematically close to the user's constraint. Excluded on cost: {5}{U/B}{U/B} is mana value 7 in a deck whose curve tops out at 6, and the cards it exiles come from the OPPONENT's library, so casting them is a colour-screwed gamble on this deck's U/B/R mana. It is also a rare. |
| Goliath Daydreamer | 'Whenever you cast an instant or sorcery spell from your hand, exile that card with a dream counter on it... Whenever this creature attacks, you may cast a spell from among cards you own in exile with dream counters on them without paying its mana cost.' The other compounding play-from-exile engine in the cube, and it anchors Deck B. Excluded here because it requires {2}{R}{R} - double red in a three-colour deck with 8 red sources of 18 lands - and because it banks only instants and sorceries, of which this list runs 5 of 22 nonland cards. |
| Shadow Urchin | 'Whenever a creature you control with one or more counters on it dies, exile that many cards from the top of your library.' Castable on B/R hybrid. Excluded because it needs counter-laden creatures to die on demand, and this deck has no sacrifice outlet and no token maker - its only counter sources are Bogslither's Embrace's optional blight 1 and Nameless Inversion, neither of which is a repeatable engine. It anchors Deck A. |
| Bloom Tender | 'Vivid - {T}: For each color among permanents you control, add one mana of that color.' The single best Vivid card in the cube and the one that would most improve this deck - at four colours it taps for four mana. It is mono-GREEN, so taking it means a fourth colour in a deck whose three-colour mana already runs 7 tapped lands of 18. Not a splash: it is a colour. |
| Prismabasher | 'Trample. Vivid - When this creature enters, up to X target creatures you control get +X/+X until end of turn.' Mono-green, and {4}{G}{G} double-pip. Same reason as Bloom Tender: green is a fourth colour, not a splash. |
| Sunderflock | 'This spell costs {X} less to cast, where X is the greatest mana value among Elementals you control. Flying. When this creature enters, if you cast it, return all non-Elemental creatures to their owners' hands.' 12 of the 15 creature cards here are Elementals, so the one-sided bounce is close to symmetric in this deck's favour and the cost reduction is real (Shinestriker at mana value 6 makes it a three-drop). Excluded because it is a RARE against a budget at 5 of 5, two of which are already spent on lands. |
| Deceit | 'When this creature enters, if {U}{U} was spent to cast it, return up to one other target nonland permanent to its owner's hand. When this creature enters, if {B}{B} was spent to cast it, target opponent reveals their hand... Evoke {U/B}{U/B}.' A 5/5 Elemental Incarnation whose triggers Twinflame Travelers would double. Excluded because it is a MYTHIC against a budget at 5 of 5, and its modes require {U}{U} or {B}{B} specifically - this deck has 7 black sources of 18 lands. |
| Firdoch Core | 'Changeling. {T}: Add one mana of any color. {4}: This artifact becomes a 4/4 artifact creature until end of turn.' Three-colour fixing on a colourless permanent, which the mana base genuinely wants. Excluded because at {3} it is a full turn slower than Foraging Wickermaw ({2}, also fixes, also surveils) and - the deciding count - it does NOT change colour, so unlike Puca's Eye and Foraging Wickermaw it adds 0 to X. In this deck a fixer that does not raise the colour count is a worse card than one that does. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color.' Fixing for a three-colour deck, but it taps a creature - and 12 of the 15 creature cards here are Elementals whose value is on entering, not attacking, so the cost is low. Excluded on the same ground as Firdoch Core: it fixes without adding to X, and every fixing slot in this deck competes with a fixer that does both. |
| Rimekin Recluse | 'When this creature enters, return up to one other target creature to its owner's hand.' An Elemental Wizard whose bounce Twinflame Travelers would double, adding a 10th doublable trigger. Excluded because bounce is tempo rather than an answer against a deck already conceding a turn-1 play rate of 0%, and the Interaction slot is on band at 6 of 22 with cards that actually remove. |
| Thirst for Identity | 'Draw three cards. Then discard two cards unless you discard a creature card.' Strong selection to find the payoffs, and the discard clause is cheap here because 15 of the 22 nonland cards are creatures. Excluded because the deck already counts 11 of 22 nonland cards as card-advantage sources, and a pure draw spell does not raise X, block, or attack in a list whose stated failure mode is being raced. |
| Moonglove Extractor | 'Whenever this creature attacks, you draw a card and lose 1 life.' Repeatable card advantage on a two-drop black body - which would also help the count noted under Sanar, since black permanents here are Shimmercreep x2 only. Excluded because it must ATTACK to draw, and a 2/1 attacking into the cube's boards is a poor proposition for a deck whose thesis turn is 8 and whose plan is to sit behind blockers accumulating value. |
| Cinder Strike | 'you may blight 1... deals 2 damage to target creature. It deals 4 damage instead if the additional cost was paid.' One-mana removal, but the blight puts a -1/-1 counter on one of this deck's own creatures, and 15 of 22 nonland cards are creatures whose bodies are already small (2/4, 3/3, 1/1, 2/2). Explosive Prodigy at the same slot deals X damage - 3 or 4 in practice - without shrinking your own board, and it leaves a body behind. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.27   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.69 adj [MV 3.27 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  23.8%  prod  38.9%  gap -15.1pp  [OK]
  R  demand  42.9%  prod  44.4%  gap  -1.5pp  [OK]
  U  demand  33.3%  prod  55.6%  gap -22.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard (ecl), 277 unique cards
[PASS] copy_limits: commons/uncommons max 2, rares/mythics max 1 - verified by cube_search.get_max_copies against every card in mainboard + sideboard: PASS
[PASS] rare_mythic_budget: 4 of the allowed 5 used, all mainboard: Sanar, Ashling's Command, Steam Vents (land), Blood Crypt (land). TWO OF THE FOUR ARE LANDS - the price of three-colour mana in this cube, where Steam Vents and Blood Crypt are the ONLY duals in these colours that can enter untapped. Cutting Ashling in the Phase 9 repair freed the fifth slot, which is deliberately left unspent: the sideboard is entirely commons and uncommons, and no remaining rare improves the deck more than the flexibility of the open slot.
[PASS] basics: Island x5 + Mountain x2 + Swamp x2 are format-supplied and exempt from copy limits
[PASS] colour_legality: every nonland card returns a usable mode from effective_cost.best_mode(card, ['U','B','R'], []): PASS, all 18 distinct nonland cards resolve as a normal 'cast'. Note that 4 nonland copies are hybrids castable off either of two colours (Sanar, Flaring Cinder), which is a real mana-base subsidy in a three-colour deck with 7 tapped lands.
[PASS] splash: splash_colors = [], splash_candidates = [] - no splashed cards. The off-colour Vivid payoffs (Bloom Tender, Prismabasher, Aurora Awakener, Prismatic Undercurrents, Luminollusk, Wildvine Pummeler) are all mono-GREEN, so admitting any of them would be a fourth colour rather than a splash.
```
