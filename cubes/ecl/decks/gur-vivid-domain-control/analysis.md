---
deck_name: "gur-vivid-domain-control"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GUR"
format: "40-card"
built_at: "2026-08-12T03:46:46Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Evolving Wilds                {T}, Sacrifice this land: Search your library for a basic la
  2x Tangled Islet                 ({T}: Add {G} or {U}.)
  2x Wooded Ridgeline              ({T}: Add {R} or {G}.)
  1x Steam Vents                   ({T}: Add {U} or {R}.)
  5x Forest                        ({T}: Add {G}.)
  4x Island                        ({T}: Add {U}.)
  2x Mountain                      ({T}: Add {R}.)
```

### CREATURES (11)

```
CMC  Card                          Qty  Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                            Rar
  2  Explosive Prodigy             x2   R      Interaction - Vivid removal on a red body                                                                                                                                                                                                                                                                                                                                                                                                                       U
  2  Silvergill Mentor             x2   U      Engine - one card, a blue permanent and a white token                                                                                                                                                                                                                                                                                                                                                                                                           U
  2  Tam, Mindful First-Year       x1   GU     Engine - on-demand Vivid X=5                                                                                                                                                                                                                                                                                                                                                                                                                                    R
  4  Sanar, Innovative First-Year  x1   RU     Engine - ungated recurring card advantage                                                                                                                                                                                                                                                                                                                                                                                                                       R
  4  Squawkroaster                 x1   R      Payoff - double striker with power X                                                                                                                                                                                                                                                                                                                                                                                                                            U
  6  Prismabasher                  x2   G      Payoff - 6/6 trample, mass +X/+X                                                                                                                                                                                                                                                                                                                                                                                                                                U
  6  Shinestriker                  x1   U      Payoff - flier that draws X                                                                                                                                                                                                                                                                                                                                                                                                                                     U
  7  Wildvine Pummeler             x1   G      Payoff - 6/5 reach trample, cost falls with X                                                                                                                                                                                                                                                                                                                                                                                                                   C
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                          Qty  Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                            Rar
  2  Sear                          x2   R      Interaction - 4 damage instant                                                                                                                                                                                                                                                                                                                                                                                                                                  U
  2  Wild Unraveling               x1   U      Interaction - hard counter (stack coverage)                                                                                                                                                                                                                                                                                                                                                                                                                     C
  3  Unforgiving Aim               x2   G      Interaction - enchantment removal, its one booked job                                                                                                                                                                                                                                                                                                                                                                                                           C
  4  Feed the Flames               x1   R      Interaction - 5 damage with exile                                                                                                                                                                                                                                                                                                                                                                                                                               C
```

### OTHER SPELLS (5)

```
CMC  Card                          Qty  Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                            Rar
  2  Puca's Eye                    x1   C      Engine - cantrip that becomes a colour                                                                                                                                                                                                                                                                                                                                                                                                                          U
  2  Shimmerwilds Growth           x2   G      Engine - paints a land an off-deck colour, raising Vivid X                                                                                                                                                                                                                                                                                                                                                                                                      U
  4  Prismatic Undercurrents       x2   G      Engine - extra land drop + Vivid basic fetch                                                                                                                                                                                                                                                                                                                                                                                                                    U
```

## SIDEBOARD (10)

```
Card                          Qty  Color  Role / When to board in
Rooftop Percher               x2   C      Anti-graveyard + flier - Against the 39 graveyard-interaction cards (15% of the cube). The dossier's structural_census lists graveyard_hate as EMPTY, so 'exile up to two target cards from graveyards' makes this the cube's only graveyard answer.  [C]
Boulder Dash                  x2   R      Anti-aggro two-for-one - Against the Goblin (21) and Kithkin (19) aggro shells - 'deals 2 damage to any target and 1 damage to any other target' answers two bodies for two mana.  [U]
Luminollusk                   x2   G      Anti-aggro blocker - Against fast starts - 'Deathtouch' on a 2/4 trades up with anything, and it is a green permanent so boarding it does not dilute the Vivid count.  [U]
Giantfall                     x1   R      Artifact removal / fight - Against the cube's artifacts - one of only 4 artifact answers in the entire cube. Held to 1 copy, not 2: the grill's recount put opposing artifacts at 10 cards / 3.8% density, which does not justify two slots.  [U]
Spell Snare                   x1   U      Stack answer - Against decks whose key cards cost two - 72 of the 282 pool cards are mana value 2 (25.5%).  [U]
Ashling's Command             x1   RU     One-sided sweeper + draw - Against wide boards, the declared coverage concession. Replaced Soul Immolation at the grill's finding: Soul Immolation's 'blight X' puts X -1/-1 counters on YOUR OWN creature, so an X large enough to matter kills the 6/6 that enabled it, and with no creature X is 0. Ashling's Command's 'deals 2 damage to each creature target player controls' is one-sided and costs nothing off your board, and a second mode draws two.  [R]
Dawn's Light Archer           x1   G      Anti-flier - Against the cube's 41 evasion cards - 'Flash / Reach' on a 4/2. Added specifically to de-conflict Unforgiving Aim, which was carrying the flier job and the enchantment job at the same time.  [C]
```

## ANALYSIS
### DECK IDENTITY
Three-colour Vivid control. Every payoff in this deck reads the same variable - X, 'the number of colors among permanents you control' - and the deck's whole construction is a machine for inflating that one number. Prismatic Undercurrents is the lands-matter keystone: it grants an additional land drop every turn AND searches for X basic lands, so the same counter that sizes the threats also sizes the mana. The trick that makes a three-colour deck reach X=5 is that lands are colourless permanents, so raising X is not about playing more colours of cards - Shimmerwilds Growth reads 'Enchanted land IS the chosen color' and paints a land a colour you do not otherwise play, Puca's Eye 'becomes the chosen color', and Tam sets the count to 5 on demand. At X=5 Wildvine Pummeler costs {1}{G} for a 6/5 reach trample, Squawkroaster is a 5/4 double striker, Shinestriker draws five, and Prismabasher gives up to five creatures +5/+5.

### LANDS ARE COLOURLESS - AND THAT IS THE WHOLE PUZZLE

Every Vivid card in this cube reads X = "the number of colors among permanents you control." The instinctive read is that a Vivid deck should play five colours. That read is wrong here, and the reason is a rules detail: **lands are colourless permanents**. A Forest is not a green permanent - it is a colourless permanent that produces green mana. So a five-colour manabase contributes exactly **0** to X while charging the full tempo cost of five colours' worth of tapped duals.

What actually raises X is coloured *permanents*. This deck therefore plays three colours and buys the other two off the rack:

| Card | How it raises X | Cost |
|---|---|---|
| Shimmerwilds Growth x2 | "Enchanted land IS the chosen color" - name white or black on a land you were playing anyway | {1}{G} |
| Puca's Eye x2 | "becomes the chosen color" - and it cantrips on the way in | {2} |
| Unforgiving Aim (mode 3) | "Create a 2/2 **black and green** Elf creature token" | {2}{G} |
| Tam, Mindful First-Year | "{T}: Target creature you control becomes **all colors**" - X=5 outright | {1}{G/U} |

Six of the twenty-two nonland cards push X past the deck's own colour count. The floor is X=3 from G/U/R permanents alone; the realistic turn 5-6 number is 4, and 5 on the payoff turn.

### WHAT X=5 ACTUALLY BUYS

| Card | At X=3 | At X=5 |
|---|---|---|
| Wildvine Pummeler | {3}{G} 6/5 reach trample | **{1}{G}** 6/5 reach trample |
| Squawkroaster | 3/4 double strike (6 dmg) | **5/4** double strike (**10 dmg**) |
| Shinestriker | 3/3 flier, draw 3 | 3/3 flier, **draw 5** |
| Explosive Prodigy | 3 damage | **5 damage** |
| Prismabasher | +3/+3 to up to 3 | **+5/+5** to up to 5 |
| Bloom Tender | 3 mana of 3 colours | 5 mana of 5 colours |
| Puca's Eye | ETB draw only | ETB draw **plus** repeatable "{3}, {T}: Draw a card" |

**But how often is X actually 5?** The self-grill measured it, and the answer is sobering: P(X>=5 by 14 cards seen) = **0.452** under maximally generous assumptions, and **0.249** once Unforgiving Aim is spent on one of its removal modes rather than its token mode. That measurement is why the final list differs from the sketch. A second Puca's Eye - whose repeatable draw is gated at five colours - came out for Sanar, whose card advantage is ungated and works at X=3. Silvergill Mentor x2 came in because P(this deck had a green AND a blue AND a red permanent among its first 14 cards) was only **0.474**: it was missing even X=3 in half its games. The tier this deck is honestly priced at is **X=4**.

This is why the shape judge picked the engine-forward build over the two that spent their slots on answers or on haymakers: raising X is not a support activity in this deck, it is a discount and a card-advantage engine applied simultaneously to every other card in the list.

### ONE CORRECTION WORTH RECORDING

A rejected sketch proposed pointing Tam at Prismabasher so its static ("Each other creature you control has hexproof from each of its colors") would protect the kill, letting the deck skip counterspells. The shape judge caught it: hexproof prevents *targeting*, and a counterspell targets the **spell on the stack**, not the permanent. It also does nothing against sweepers or non-targeted damage. Tam is in this list for its tap ability alone.

### PLAY PATTERN

| Turn | Line |
|---|---|
| 1-2 | Tapped dual, then Bloom Tender or Puca's Eye (cantrip + a colour) or Shimmerwilds Growth (a second colour, and the enchanted land now taps for two). |
| 3-4 | Prismatic Undercurrents. At X=3-4 it fetches three or four basics to hand and turns on double land drops. |
| 5 | Two land drops. Squawkroaster or Wildvine Pummeler at a discount; Explosive Prodigy holds the ground for two mana. |
| 6-7 | Prismabasher. At X=5, +5/+5 across the board plus a 6/6 trample; a resolved Squawkroaster swings for 10 through double strike. |

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  2:11  3:2  4:5  6:3  7:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.7: Squawkroaster@0.7) → p=0.83 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.7: Tam, Mindful First-Year@0.8, Sanar, Innovative First-Year@0.9) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 90%  T3 96%
Coverage:  [PASS]
  CONCEDED  wide_boards: Every maindeck answer in these colours is single-target (Sear 4 damage, Feed the Flames 5 damage, Explosive Prodigy X damage). The sideboard answer is Ashling's Command, whose mode 'deals 2 damage to each creature target player controls' is ONE-SIDED and, unlike Soul Immolation, costs nothing off your own board.
  OK        single_large_threat: Feed the Flames, Sear, Explosive Prodigy
  OK        noncreature_permanents: Unforgiving Aim
  OK        stack: Wild Unraveling
  CONCEDED  graveyard: No mainboard graveyard interaction; Rooftop Percher ('exile up to two target cards from graveyards') answers the cube's 39 graveyard cards from the board. The dossier's structural_census records graveyard_hate as EMPTY, so Rooftop Percher is the cube's only graveyard answer at all.
```
- Phase 6b HARD gates (assembly, coverage) both PASS on the final list. Getting there took a second repair round with a correction to the Challenger's own recommendation: it proposed -1 Prismabasher / +1 Sear, which is sound on interaction density but dropped the payoff assembly figure to p=0.74 against a 0.75 floor - a HARD failure. The final build satisfies both by restoring the second Prismabasher AND keeping the second Sear, paying for it with Bloom Tender. Assembly now reads payoff 5 copies (effective 4.7) p=0.83, enabler 9 copies (effective 8.7) p=0.97.
- Interaction finished at 8 of 22 = 36.4%, inside the control band. The first repair had dropped it to 31.8% by cutting a Sear, and the Challenger established that the grounds (raising X upgrades Explosive Prodigy's damage from 3 to 4) were real but the card sold was wrong: Sear is the only cheap answer in the list that does not read X, in a deck whose raced mode is accepted rather than mitigated.
- Goldfish returns WARN on a T1 play rate of 0% (keepable 80% meets the floor, three-lands-by-turn-3 is 92%, and T2 is 90%). Accepted, not repaired: the cheapest card in the list costs two, and there is no one-drop in G/U/R that raises the Vivid counter or answers anything - adding one would mean a body that does nothing the deck reads. A control deck whose first play is turn 2 in 90% of games is behaving as designed.
- The land count is 18 against a computed 17. Two grounds: the goldfish keepable rate was 78% (WARN) at 17 and 80% (PASS) at 18, and the accel input that produced the 17 is itself optimistic - Shimmerwilds Growth x2 carries the Mana Ramp tag and is 2 of the 5 accel inputs, but in its assigned role it produces white or black mana this deck cannot spend.
- The mana audit reads PASS with -12.8pp blue over-production. Deliberate: two of blue's demands are DOUBLE pips ({U}{U} on Shinestriker and on Wild Unraveling).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | accepted | Withdrawing the earlier claim first, because it was wrong: Prismatic Undercurrents' 'search your library for up to X basic land cards ... put them into your hand' is a flood GENERATOR, not a mitigator, and the earlier entry treated its extra land drop - which empties a flooded hand faster but converts nothing into cards - as though it answered flood. It does not. The genuine mana sinks in this list are Sanar ('You may cast the exiled cards this turn' - surplus mana casts more of what it exiles), Puca's Eye's '{3}, {T}: Draw a card' (gated at five colours), and Silvergill Mentor's 'behold a Merfolk or pay {2}' additional cost. That is thin, and it is accepted rather than mitigated because the pool's real fixes - Loch Mare or Tanufel Rimespeaker - would have to come out of the engine or payoff slots, and the cost of that is the Vivid counter itself, which every remaining card in the deck reads. A deck that trades its colour count for a flood outlet has answered flood by making the other twenty cards worse. |
| screw | mitigation | Evolving Wilds x2 fixes any colour from a single slot ('Search your library for a basic land card'), Prismatic Undercurrents x2 searches for X basic lands on ETB, and Steam Vents is the one land that can enter untapped ('you may pay 2 life'). The goldfish check reports 80% keepable and 92% to three lands by turn 3. Honest limit: SEVEN of the eighteen lands cost a tempo point - the four tapped duals plus the 2 Evolving Wilds, which put the fetched land onto the battlefield tapped - so a two-land opener on tapped duals starts a turn behind, and with Bloom Tender cut there is no longer a nonland mana source in the list. |
| decapitation | accepted | There is no single key card to answer - the colour counter is built by six cards (Shimmerwilds Growth x2, Silvergill Mentor x2, Puca's Eye, Tam) and read by nine. What CAN be decapitated is Tam specifically, the only on-demand X=5. Accepted rather than mitigated because there is no second card in this pool that sets the counter to five, so 'mitigating' would mean adding a card that does something else instead - and the floor is survivable without it: at X=3 Squawkroaster is still a 3/4 double striker and Wildvine Pummeler still costs {3}{G} for a 6/5 reach trample. The measured numbers back the floor: P(X>=4 by 14 cards) = 0.800 without counting Tam's tap at all. |
| gas-out | mitigation | CORRECTED TWICE, and the second correction is against my own repair. The original entry claimed 7 of 22 nonland cards replace themselves or better; the grill showed two of those were wrong - Prismatic Undercurrents searches for basic LANDS to hand, which in an 18-land deck is negative card quality, and Unforgiving Aim being never-dead is not the same as replacing itself. My repair then claimed 5 of 22 by counting Silvergill Mentor x2, and the Challenger correctly applied the standard I had just withdrawn: 'create a 1/1 white and blue Merfolk creature token' is a BODY, not a card. The honest figure is 3 of 22 card-positive: Puca's Eye (ETB 'draw a card'), Shinestriker ('draw cards equal to the number of colors among permanents you control' - three to five), and Sanar, which is the real answer here - an UNGATED upkeep trigger reading 'You may cast the exiled cards this turn' that functions at X=3, unlike Puca's Eye's five-colour gate which was measured at P=0.457. |
| raced | accepted | The first meaningful play is turn 2 in 91% of games, but the payoffs land turn 5-7 and SEVEN of the eighteen lands cost a tempo point - the four remaining tapped duals plus the 2 Evolving Wilds, which put the fetched land onto the battlefield tapped (corrected from the earlier record's 'five of eighteen'). Mitigating would mean cutting engine slots for cheap blockers, and the engine slots are what make every payoff and every answer bigger, so the cost is the deck's entire scaling. The concession is bounded: Explosive Prodigy x2 is a two-mana body that kills an early creature on ETB, Silvergill Mentor x2 leaves two bodies behind, and the sideboard holds Luminollusk x2 (deathtouch 2/4) and Boulder Dash x2 for the race. |
| disruption-fizzle | mitigation | The critical turn is a Prismabasher or Squawkroaster resolving into a high colour count. If that one spell is answered, the colour count is unaffected - it lives on permanents already in play (the enchanted land, Puca's Eye, Prismatic Undercurrents), not on the spell being cast. So the next payoff is just as large: the deck retries with 5 payoff copies plus Shinestriker. This is the structural advantage of building X on cheap permanents rather than on the threats themselves. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sapling Nursery | The cube's only true landfall trigger, but 'Affinity for Forests' wants a mono-Forest manabase, which is exactly what a three-colour Vivid deck cannot supply - with 6 Forests in a GUR base it still costs {2}{G}{G} at best on turn 6, not turn 4. |
| Tend the Sprigs | Fetches a basic and can make a 3/4 Treefolk, but its threshold clause reads 'seven or more lands and/or Treefolk' and this deck's payoffs want to be cast at 5-6 mana, not to still be assembling a land count at seven. |
| Mutable Explorer | Its Mutavault token is a colourless land, so it adds nothing to 'the number of colors among permanents you control' - the counter every payoff in this deck reads. |
| Eclipsed Realms | '{T}: Add one mana of any color. Spend this mana only to cast a spell of the chosen type' - the restriction binds to one creature type, and this deck's spells span Elemental, Ouphe, Giant, Goblin and several noncreature types. |
| Steam Vents / Temple Garden / Overgrown Tomb / Blood Crypt / Hallowed Fountain | Untapped duals, but every one is a RARE and would consume one of the 5 rare/mythic slots the deck needs for its Vivid enablers (Tam) and payoffs. |
| Lavaleaper | 'Whenever a player taps a basic land for mana, that player adds one mana of any type that land produced' - a real lands-matter payoff, but a three-colour manabase runs 6 tapped duals whose mana it does not double, and it is a rare competing with Tam. |
| Soul Immolation | 'blight X. X can't be greater than the greatest toughness among creatures you control ... deals X damage to each opponent and each creature they control' - a mythic sweeper that also kills this deck's own 1/3 and 0/4 fixers; the cost is paid by putting X -1/-1 counters on your own creature. |
| Ashling's Command | A rare modal instant, but two of its four modes ('Create a token that's a copy of target Elemental you control', 'deals 2 damage to each creature target player controls') are worst-in-class here, and it costs a rare slot. |
| Vibrance | 'if {G}{G} was spent ... search your library for a land card' - real lands-matter text on a 4/4, but a mythic slot for an effect a two-mana fixer already provides, and its {R/G} hybrid pips do not raise the Vivid counter beyond R and G. |
| Loch Mare | A mythic 4/5 with repeatable draw, but every activation removes a -1/-1 counter and the body shrinks to a 1/2 once the counters are spent - and it costs a mythic slot against Bloom Tender and Aurora Awakener. |
| Celestial Reunion | 'Search your library for a creature card with mana value X or less' - a tutor that still has to cast the card, in a deck whose payoffs cost 4-6 and whose keystone (Prismatic Undercurrents) is an enchantment it cannot find. |
| Lofty Dreams | 'Enchant creature ... draw a card ... gets +2/+2 and has flying' - an Aura is a 2-for-1 against instant-speed removal, and this deck's bodies are already large enough that flying, not size, is what it lacks. |
| Harmonized Crescendo | 'Choose a creature type. Draw a card for each permanent you control of that type.' - the deck's creatures span Elemental, Ouphe, Giant, Goblin, Elf, Scarecrow and Shapeshifter with no dominant type, so the count is typically 1-2 for six mana. |
| Rime Chill | 'Vivid - This spell costs {1} less to cast for each color among permanents you control. / Tap up to two target creatures. Put a stun counter on each of them. / Draw a card.' - genuinely a two-mana tempo swing at X=5, but it was the deck's highest printed mana value and cutting it for an 18th land moved the goldfish keepable rate from 78% (WARN) to 80% (PASS) and three-lands-by-turn-3 from 88% to 92%. |
| Foraging Wickermaw | Proposed by one sketch as a repeatable instant-speed colour-count raiser; the shape judge established that '{1}: Add one mana of any color. This creature becomes that color until end of turn' changes only its OWN colour, to one colour, once per turn - so it raises X by at most 1, and by 0 whenever that colour is already on the board. |
| Aurora Awakener | A 7/7 that puts X permanents onto the battlefield is the biggest Vivid payoff in the pool, but at {6}{G} it is a seventh-turn play in a deck whose whole point is that its payoffs get CHEAPER as X rises - and it would spend a mythic slot to do what two uncommon Prismabashers already do on turn 6. |
| Glen Elendra Guardian | A 3/4 flash flier that counters noncreature spells, but each counter costs {1}{U} plus removing its only -1/-1 counter, so it is a one-shot counterspell on a body - and it would take a rare slot in a three-colour deck that can rarely hold {1}{U} open on the turns it also wants to deploy. |
| Sanar, Innovative First-Year | Repeatable Vivid card advantage, but 'reveal cards until you reveal X nonland cards ... you may exile a card of that color' only converts colours the deck actually has among the revealed cards, and this list's colour count is built from recoloured lands and artifacts rather than from a wide spread of coloured spells. |
| Wistfulness | A 6/5 mythic whose ETB modes are gated on {G}{G} or {U}{U} having been spent - in a three-colour tapland manabase with 6 green and 6 blue sources, hitting a specific double pip on curve is exactly what this deck cannot promise. |
| Thirst for Identity / Unexpected Assistance | Instant-speed refuel, but neither leaves a permanent behind, and in this deck a card that resolves without adding a permanent contributes nothing to the Vivid counter that every payoff reads - Puca's Eye draws a card AND becomes a colour for the same two mana. |
| Bloom Tender | In the locked skeleton and cut in the final grill round. 'For each color among permanents you control, add one mana of that color' is real fixing at X=3, but at X=5 two of the five mana are white and black and 0 of the 22 nonland cards carry a W or B pip - the card plateaus exactly as the rest of the deck scales. It was the right slot to sell when the second Sear had to come back without lowering the payoff count. |
| Soul Immolation | Was the sideboard sweeper and was cut at the grill. 'As an additional cost, blight X. X can't be greater than the greatest toughness among creatures you control. (Put X -1/-1 counters on a creature you control.)' - so X=6 off a 6/6 Prismabasher KILLS the Prismabasher, and with no creature at all X is 0. Ashling's Command does the same job one-sidedly and draws two. |
| Molten Tributary | Replaced by Steam Vents once the grill established that the rare budget had room and that four of the five untapped duals previously cited as unavailable were off-colour anyway. Identical mana ({U} or {R}); Steam Vents can enter untapped for 2 life, which lifted P(two blue sources by turn 3) from 0.589 to 0.665. |
| Loch Mare / Tanufel Rimespeaker | The two real answers to this deck's flood problem - an ungated mana sink and a spell-count draw engine. Both rejected because either would have to come out of the engine or payoff slots, and that trades the Vivid counter every remaining card reads for a flood outlet. The flood failure mode is recorded as accepted rather than mitigated for exactly this reason. |
| Glister Bairn | 'Vivid - At the beginning of combat on your turn, another target creature you control gets +X/+X' is a repeatable version of Prismabasher's one-shot pump, and it is a G/U permanent worth two toward the counter. Cut on cost: {2}{G/U}{G/U}{G/U} is five mana for a 1/4 that does nothing the turn it lands and needs a second creature to target. |
| Foraging Wickermaw | Proposed as an instant-speed colour-count raiser; the shape judge established that '{1}: Add one mana of any color. This creature becomes that color until end of turn' changes only its OWN colour, to one colour, once per turn - raising X by at most 1, and by 0 whenever that colour is already on board. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 17 recommended  [PASS]
Avg CMC:     3.32   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.43 adj [MV 3.32 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  47.8%  prod  50.0%  gap  -2.2pp  [OK]
  R  demand  26.1%  prod  27.8%  gap  -1.7pp  [OK]
  U  demand  26.1%  prod  38.9%  gap -12.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard only - every name verified by exact string match against the working pool cache
commons_uncommons_max_2: PASS - no common or uncommon exceeds 2 copies across mainboard + sideboard
rares_mythics_max_1: PASS - Bloom Tender, Tam Mindful First-Year, Soul Immolation each at 1
rare_mythic_total_max_5: PASS - 4 of 5 used: Tam Mindful First-Year (rare), Sanar Innovative First-Year (rare) and Steam Vents (rare) mainboard, Ashling's Command (rare) sideboard. The fifth slot was held by Bloom Tender (mythic) until the final repair round cut it; it is left unspent rather than refilled, because the remaining rares in these colours either do not raise the Vivid counter or cost more than the slot they would take.
basics_unlimited: 6 Forest, 3 Island, 2 Mountain - basics are format-supplied and exempt
colour_legality: PASS - every distinct nonland name returns a usable mode under effective_cost.best_mode(card, ['G','U','R'], []). (The earlier record's '21 distinct names' figure was produced by splitting a dict on commas, and 'Tam, Mindful First-Year' contains one; the validator's own modes map is authoritative.)
```
