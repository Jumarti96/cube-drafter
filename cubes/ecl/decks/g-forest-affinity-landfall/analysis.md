---
deck_name: "g-forest-affinity-landfall"
cube_id: "ecl"
cube_slug: "ecl"
colors: "G"
format: "40-card"
built_at: "2026-08-12T02:31:05Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Evolving Wilds           {T}, Sacrifice this land: Search your library for a basic la
  16x Forest                   ({T}: Add {G}.)
```

### CREATURES (11)

```
CMC  Card                     Qty  Color  Role                                                                                                                                                                                                                                                                                                                       Rar
  1  Virulent Emissary        x1   G      Threat - one-drop deathtouch blocker against fast starts                                                                                                                                                                                                                                                                   U
  2  Bristlebane Battler      x1   G      Threat - late 6/6 trample ward {2}                                                                                                                                                                                                                                                                                         R
  2  Dundoolin Weaver         x2   G      Engine - returns a permanent card from the graveyard, including an answered Sapling Nursery                                                                                                                                                                                                                                U
  3  Crossroads Watcher       x2   G      Threat - trample, grows per creature ETB                                                                                                                                                                                                                                                                                   C
  3  Mutable Explorer         x1   G      Engine - a creature spell that puts a land onto the battlefield                                                                                                                                                                                                                                                            R
  4  Bristlebane Outrider     x2   G      Threat - evasive finisher                                                                                                                                                                                                                                                                                                  U
  4  Moon-Vigil Adherents     x2   G      Threat - scales with the token board                                                                                                                                                                                                                                                                                       U
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                     Qty  Color  Role                                                                                                                                                                                                                                                                                                                       Rar
  2  Assert Perfection        x2   G      Interaction - conditional removal; a sorcery that needs a creature you control                                                                                                                                                                                                                                             C
  2  Thoughtweft Charge       x2   G      Interaction - trick that replaces itself on any creature-ETB turn                                                                                                                                                                                                                                                          U
  3  Tend the Sprigs          x2   G      Engine/Payoff - land onto the battlefield, plus a redundant Treefolk                                                                                                                                                                                                                                                       C
  3  Unforgiving Aim          x2   G      Interaction - modal flier/enchantment removal, or a body                                                                                                                                                                                                                                                                   C
```

### OTHER SPELLS (3)

```
CMC  Card                     Qty  Color  Role                                                                                                                                                                                                                                                                                                                       Rar
  4  Prismatic Undercurrents  x2   G      Engine - extra land drop each turn                                                                                                                                                                                                                                                                                         U
  8  Sapling Nursery          x1   G      Payoff - the landfall engine                                                                                                                                                                                                                                                                                               R
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in
Dawn's Light Archer      x2   G      Anti-evasion - Against fliers - 'Flash / Reach' 4/2 ambushes an attacking flier and kills anything with toughness 4 or less.  [C]
Rooftop Percher          x2   C      Anti-graveyard + flier - Against the 39 graveyard-interaction cards (15% of the cube) - 'exile up to two target cards from graveyards'; also the only flying body green offers here.  [C]
Chomping Changeling      x2   G      Artifact/enchantment removal - Against the cube's 11 artifacts and 21 enchantments - 'When this creature enters, destroy up to one target artifact or enchantment.' This is the deck's ONLY artifact answer; Unforgiving Aim hits enchantments only.  [U]
Blossoming Defense       x1   G      Protection - Against targeted creature removal and fight effects. Honest limit: 'Target creature you control' cannot protect Sapling Nursery or Prismatic Undercurrents, which are enchantments.  [U]
Great Forest Druid       x2   G      Anti-aggro wall / Treefolk type - Against the fastest Goblin and Kithkin starts - a 0/4 for two. It is a real Treefolk, counting toward Tend the Sprigs' 'seven or more lands and/or Treefolk' and the Nursery's indestructible clause. It is NOT ramp for the Nursery: a mana dork cannot advance a Forest-affinity cost.  [C]
Virulent Emissary        x1   G      Anti-aggro one-drop - Against the fastest clocks - a {G} deathtouch body blanks any ground attacker on turn 1.  [U]
```

## ANALYSIS
### DECK IDENTITY
Mono-green Forest-affinity landfall midrange. Sapling Nursery is the cube's only true landfall trigger, and every green dual in this cube is Forest-typed, so a 16-Forest manabase lands an {6}{G}{G} enchantment for four mana on turn 4; from there each land drop, Evolving Wilds crack, Tend the Sprigs fetch and Mutable Explorer Mutavault token is a 3/4 reach Treefolk. The honest frequency is stated rather than hidden: Sapling Nursery is 1 of 40 cards, so P(seen by turn 8 on the play, 14 cards) = 35.0%. In the roughly 65% of games it is not drawn, the deck is a normal green midrange clock - Bristlebane Outrider x2 as a 5/5 that creatures with power 2 or less cannot block, Moon-Vigil Adherents x2 scaling with the board, Crossroads Watcher x2, and the Tend the Sprigs x2 Treefolk - and Dundoolin Weaver x2 rebuys the Nursery from the graveyard when it is answered.

### THE AFFINITY ARITHMETIC — WHY THIS DECK RUNS NO MANA DORKS

Sapling Nursery costs {6}{G}{G} with "Affinity for Forests (This spell costs {1} less to cast for each Forest you control.)" With N Forests, the cost is 8-N and the available mana is N, so the cast turn is the smallest N where N >= 8-N: **N = 4, turn 4**.

Now add a mana creature. The available mana becomes N+1, so the condition is N+1 >= 8-N, i.e. N >= 3.5, i.e. **N = 4 - still turn 4**. A nonland mana source cannot advance the Nursery by a single turn, because a Forest is worth *two* to the equation (one mana AND one discount) while a dork is worth one. This is the sole reason Bloom Tender, Springleaf Drum, Firdoch Core, Foraging Wickermaw and Great Forest Druid are all absent from the mainboard despite being perfectly reasonable green cards - and it is why the 18th land, not a 19th spell, is the correct build.

### THE TYPED-DUAL TRAP

Every green dual land in this cube is Forest-typed: Radiant Grove and Temple Garden are `Land - Forest Plains`, Haunted Mire and Overgrown Tomb are `Land - Swamp Forest`, Tangled Islet is `Land - Forest Island`, Wooded Ridgeline is `Land - Mountain Forest`. All six therefore count for Affinity for Forests, which makes a two-colour Nursery build look free. It is not. Four of the six read "This land enters tapped", which costs a turn on the exact curve the affinity discount buys; the two that do not (Temple Garden, Overgrown Tomb) are rares that charge 2 life and one of the deck's five rare/mythic slots to do precisely what a basic Forest does. And all six shrink the fetch pool: Tend the Sprigs, Prismatic Undercurrents and Evolving Wilds each search for a **basic** land card. Mono-green is not a limitation of this build - it is the optimisation.

### WHAT THE MUTAVAULT TOKEN IS FOR

Mutable Explorer reads "When this creature enters, create a tapped Mutavault token." That token is a land entering the battlefield, which means Mutable Explorer is the only *creature spell* in the deck that triggers landfall - and crucially, it does so **without spending the land drop**. On a turn where you have already played a land, casting Mutable Explorer under an active Nursery yields two bodies from one card: the 1/1 Shapeshifter and a 3/4 Treefolk. The token also taps for {C} and can animate into a 2/2 for {1}.

### PLAY PATTERN

| Turn | Line |
|---|---|
| 1-3 | Land, land, land. Virulent Emissary or a Dundoolin Weaver holds the ground; Tend the Sprigs on 3 puts a fourth Forest onto the battlefield. |
| 4 | Sapling Nursery for {2}{G}{G} off four Forests. |
| 5 | Land drop = 3/4 Treefolk. Prismatic Undercurrents if held (its own ETB finds the basic for the extra drop). |
| 6+ | Two land drops per turn under Undercurrents = two 3/4 reach bodies per turn; Bristlebane Outrider turns on (+2/+0, unblockable by power 2 or less) every one of those turns. |
| 8 | Lethal: three-plus 3/4 tokens plus a 5/5 evasive Outrider and a Moon-Vigil Adherents sized to the board. |

The honest caveat, disclosed rather than buried: the Nursery is 1 of 40 cards, so that line happens in 35% of games by turn 8. The other 65% is a competent green midrange deck with a 6/6 ward {2} trampler, two evasive 5/5s and modal removal - which is why the repair round spent its slots on Dundoolin Weaver (rebuys the Nursery from the graveyard, and 7 of the 8 answers this pool can point at it are destroy-or-counter effects, not exile) and Thoughtweft Charge (a cantrip that turns on from any creature entering) rather than on more expensive top-end.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:1  2:7  3:7  4:6  8:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.2: Tend the Sprigs@0.6, Tend the Sprigs@0.6) → p=0.92 (need ≥ 0.75)
  PASS  enabler: 7 copies → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 21%  T2 90%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Assert Perfection, Sapling Nursery, Moon-Vigil Adherents
  OK        single_large_threat: Assert Perfection, Unforgiving Aim, Moon-Vigil Adherents
  OK        noncreature_permanents: Unforgiving Aim
  CONCEDED  stack: Mono-green in this pool offers no counterspell or hand disruption; the deck instead presents a token board that a single answer cannot undo, and Dundoolin Weaver rebuys the one permanent whose loss matters.
  CONCEDED  graveyard: No mainboard graveyard interaction; Rooftop Percher ('exile up to two target cards from graveyards') is the sideboard answer for the cube's 39 graveyard cards.
```
- Phase 6b returned PASS on all four checks (curve, assembly, goldfish, coverage), so no WARN-tier response is owed. The Phase 6 mana audit returned WARN on a +11.1pp green production gap: 16 of 18 lands produce {G} directly while demand is 100% G. The gap is entirely the 2 Evolving Wilds, which produce no mana until cracked but then fetch a Forest - a one-turn delay accepted for a second land-enters event.
- Coverage caveat (Challenger F9, accepted): the noncreature_permanents class is credited to Unforgiving Aim, whose modes are 'Destroy target creature with flying / Destroy target enchantment / Create a 2/2'. It answers enchantments only. Mainboard artifact answers: 0 of 22 nonland cards, against 11 artifacts in the cube (4.2% density). Artifacts are answered from the sideboard by Chomping Changeling x2, and that placement is the density call, not an oversight.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This is the deck that wants flood. Under Sapling Nursery every surplus land that enters is a 3/4 reach Treefolk, and Prismatic Undercurrents x2 lets a flooded hand deploy two lands per turn. Moon-Vigil Adherents x2 grows with each body the flood produces. |
| screw | mitigation | Six fetch effects dig out: Tend the Sprigs x2 searches a basic onto the battlefield, Prismatic Undercurrents x2 searches a basic to hand on ETB, and Evolving Wilds x2 converts into one. The goldfish check reports 88% keepable openers and 92% to three lands by turn 3. Honest limit, per the Challenger: four of the six cost 3-4 mana and are uncastable on the one- and two-land hands the mode describes; only the 2 Evolving Wilds function there. |
| decapitation | accepted | Sapling Nursery is 1 of 40 cards and the pool's only landfall trigger, so the irreducible concession is the DRAW risk, not the answer risk: P(seen by turn 8) = 35%. The answer risk is now mitigated - Dundoolin Weaver x2 reads 'When this creature enters, if you control three or more creatures, return target permanent card from your graveyard to your hand', and 7 of the 8 cards in this pool that can answer the Nursery put it in the graveyard rather than exile it (only Wistfulness exiles). Mitigating the DRAW risk would require a tutor, and this pool's only green tutors (Celestial Reunion, Formidable Speaker) search for CREATURE cards and cannot find an enchantment; the deck therefore places its redundancy in Tend the Sprigs x2, which makes the same 3/4 reach Treefolk without the Nursery. |
| gas-out | mitigation | Thoughtweft Charge x2 reads 'Target creature gets +3/+3 until end of turn. If a creature entered the battlefield under your control this turn, draw a card' - with the Nursery online every land drop satisfies the clause, and off it, 11 of 22 nonland cards are creature spells plus the Tend the Sprigs token. Dundoolin Weaver x2 converts a spent permanent in the graveyard back into a card. The earlier claim that an empty hand produces a 3/4 every turn is withdrawn: 18 of 40 cards are lands, so an empty hand supplies a land-enters event on 45% of draw steps, not all of them. |
| raced | accepted | The fastest clocks in this cube are the Goblin and Kithkin aggro shells. The repair round bought back real early defence - Virulent Emissary ({G} deathtouch) and the improved curve now put a play on the table on turn 1 in 21% of games and turn 2 in 90% - but the deck's payoffs still live at four and five mana. Mitigating further would mean cutting those payoffs for more one- and two-drops, which is exactly the aggressive Sketch A the judge rejected as thesis-inverted, and it would remove the cards that convert the token board into lethal by turn 8. The concession is bounded by the 3/4 REACH tokens, which brick both ground and air attackers the turn they arrive. |
| disruption-fizzle | mitigation | The critical turn is the Nursery resolving. If it is countered or removed on that turn the land drops are not wasted - they were mana either way - and the deck retries through Tend the Sprigs x2 (a 3/4 Treefolk on its own with seven lands/Treefolk) and Dundoolin Weaver x2 (returns the Nursery from the graveyard). The ETB-scaling bodies key off 'another creature entered' from any source, not off the Nursery specifically. Supporting datum: of the pool's three counterspells, Spell Snare ('Counter target spell with mana value 2') cannot legally hit the Nursery, because affinity reduces cost, not mana value, which stays 8. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bloom Tender | 'Vivid - {T}: For each color among permanents you control, add one mana of that color.' In a mono-green list the number of colors among permanents you control is 1, so it taps for exactly {G} - a worse Llanowar Elf, and it would consume one of the 5 rare/mythic slots. |
| Aurora Awakener | 'Vivid - ... reveal cards ... until you reveal X permanent cards, where X is the number of colors among permanents you control.' X = 1 in mono-green, so a 7-mana 7/7 that puts one permanent onto the battlefield; costs a mythic slot for a marginal rider. |
| Champions of the Perfect | 'As an additional cost to cast this spell, behold an Elf and exile it.' The list contains 0 Elf cards other than the token mode of Unforgiving Aim, so the additional cost is frequently unpayable. |
| Vinebred Brawler | 'Whenever this creature attacks, another target Elf you control gets +2/+1' - 0 of the 23 nonland cards in this list are Elves, so the trigger has no legal target. |
| Morcant's Eyes | 'Create X 2/2 ... Elf creature tokens, where X is the number of Elf cards in your graveyard.' 0 Elf cards in the deck means X is always 0. |
| Lys Alana Dignitary | '{T}: Add {G}{G}. Activate only if there is an Elf card in your graveyard.' - 0 Elf cards in the list, so the mana ability never turns on; the behold cost also wants an Elf. |
| Celestial Reunion | 'Search your library for a creature card with mana value X or less' - a sorcery-speed tutor for a card that still has to be cast; the deck's apex is an enchantment (Sapling Nursery), which it cannot find. |
| Spry and Mighty | 'X is the difference between the chosen creatures' powers' - the list's bodies cluster at 3-6 power, so X is typically 0-2 for five mana. |
| Mirrormind Crown | 'the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature' - powerful with the Nursery, but 4 to cast plus 2 to equip is 6 mana of setup that does nothing to an empty board, and it would eat a rare slot. |
| Gathering Stone | 'Spells you cast of the chosen type cost {1} less' - the only shared creature type in this list is Shapeshifter (2 of 23 nonland cards via changeling), so the discount applies to 2/23. |
| Stalactite Dagger | 'Equipped creature gets +1/+1 and is all creature types' - a tribal enabler; this list has no tribal payoff to enable. |
| Eclipsed Realms | '{T}: Add {C}. / {T}: Add one mana of any color. Spend this mana only to cast a spell of the chosen type' - a colorless-only land in a deck whose every spell wants {G}, and it is not a Forest so it fights Affinity for Forests. |
| Puca's Eye | 'Activate only if there are five colors among permanents you control' - 1 color in mono-green, so the repeatable draw is permanently off. |
| Doran, Besieged by Time | Off-colour ({1}{W}{B}{G}); a three-colour manabase would replace Forests with non-Forest duals and directly raise Sapling Nursery's affinity-discounted cost. |
| Lavaleaper | 'Whenever a player taps a basic land for mana, that player adds one mana of any type that land produced' - a genuine lands-matter payoff, but red; splashing it costs Forests, which is the resource Affinity for Forests spends. |
| Radiant Grove / Temple Garden / Haunted Mire | Forest-typed duals that would count for affinity, but their off-colour half produces mana this deck cannot spend, and the common ones enter tapped - a strictly worse Forest here. |
| Pitiless Fists | Was in the locked skeleton at 2 copies and cut in the grill round: 'Enchant creature you control' makes it uncastable on an empty board and a 2-for-1 against instant-speed removal, and at MV 4 it was the correct slot to convert into Dundoolin Weaver's Nursery recursion. |
| Mistmeadow Council | A 4/3 that draws a card, discounted by 8 of 22 Kithkin/changeling cards - but at MV 5 it was the list's second-most-expensive card, and the same card-advantage job is done for two mana by Thoughtweft Charge in a deck where a creature enters almost every turn. |
| Changeling Wayfinder | Fetches a basic to HAND rather than the battlefield, so unlike Tend the Sprigs it is not itself a landfall trigger; at 3 mana for a 1/2 it was the weakest of the deck's land-access effects once six others were already in the list. |
| Selfless Safewright | Cut in the grill round. 'Other permanents you control of that type gain hexproof and indestructible' answers only 1 of the pool's 4 mass board-effects: Darkness Descends puts -1/-1 counters (indestructible does not help), Curious Colossus targets the PLAYER and sets base power and toughness to 1/1 (hexproof on your permanents does not apply), and Ashling's Command deals 2 damage, which a 3/4 Treefolk survives unaided. Only Soul Immolation is actually answered - and it cannot protect Sapling Nursery, an enchantment, at all. |
| Eclipsed Kithkin | Castable as {G}{G} and hits a Forest in the top four 88.4% of the time with 16 Forests, which is a genuine upgrade over the cut Changeling Wayfinder - but its printed color_identity is ['G','W'], and admitting it ends the mono-green identity that the whole Forest-affinity plan rests on. |
| Champions of the Perfect | A 6/6 for four with 'Whenever you cast a creature spell, draw a card' - the only repeatable draw green offers here, and it would spend one of the two unused rare slots. Rejected because 'behold an Elf and exile it' is up-front card disadvantage payable by only 5 of the 22 nonland cards, and the draw trigger fires on 11 of 22. |
| Mirrormind Crown | Copying the token instead of making a Treefolk replaces a 3/4 REACH blocker with a copy of the equipped creature - and reach is this deck's only air defence against the cube's 41 evasion cards. Six mana of setup (4 to cast, 2 to equip) that does nothing to an empty board. |


## MANA AUDIT: WARN

```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  18 / 17 recommended  [PASS]
Avg CMC:     3.09   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.12 adj [MV 3.09 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [WARN]
  G  demand 100.0%  prod  88.9%  gap +11.1pp  [WARN]

Flags:
  WARN  G  gap +11.1pp
```

## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard only - every name verified by exact string match against the working pool cache
commons_uncommons_max_2: PASS - no common or uncommon exceeds 2 copies across mainboard + sideboard (Virulent Emissary is at exactly 2: 1 main, 1 board)
rares_mythics_max_1: PASS - Sapling Nursery, Mutable Explorer, Bristlebane Battler each at 1
rare_mythic_total_max_5: PASS - 3 of 5 used, all mainboard. Two slots deliberately unspent: the pool's remaining green rares either do not advance this pipeline (Champions of the Perfect's 'behold an Elf and exile it' is up-front card disadvantage payable by only 5 of 22 nonland cards) or print off-colour identities.
basics_unlimited: 16 Forest - basics are format-supplied and exempt
colour_legality: PASS - all 18 distinct nonland names return a usable mode under effective_cost.best_mode(card, ['G'], [])
```
