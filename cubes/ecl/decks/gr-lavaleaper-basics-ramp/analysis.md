---
deck_name: "gr-lavaleaper-basics-ramp"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GR"
format: "40-card"
built_at: "2026-08-12T04:42:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  9x Forest                ({T}: Add {G}.)
  8x Mountain              ({T}: Add {R}.)
```

### CREATURES (12)

```
CMC  Card                  Qty  Color  Role                                                                                                                                                                                                                                                         Rar
  2  Great Forest Druid    x2   G      Engine - the deck's entire nonland fixing, and a Treefolk for Tend the Sprigs                                                                                                                                                                                C
  3  Enraged Flamecaster   x2   R      Threat - two-mana reach body that taxes 2 per four-drop cast                                                                                                                                                                                                 C
  4  Champion of the Path  x1   R      Payoff - each Elemental that enters deals its power to each opponent                                                                                                                                                                                         R
  4  Lavaleaper            x1   R      Payoff - doubles every basic and gives the top end haste                                                                                                                                                                                                     R
  5  Spinerock Tyrant      x1   R      Payoff - 6/6 flier that copies single-target spells with new targets                                                                                                                                                                                         M
  6  Kulrath Zealot        x1   R      Threat/Engine - a 6/5 with impulse draw, or basic landcycling when short                                                                                                                                                                                     C
  6  Prismabasher          x2   G      Payoff - hasty 6/6 trample                                                                                                                                                                                                                                   U
  7  Aurora Awakener       x1   G      Payoff - hasty 7/7 trample that deploys free permanents                                                                                                                                                                                                      M
  7  Wildvine Pummeler     x1   G      Payoff - 6/5 reach trample for {4}{G}                                                                                                                                                                                                                        C
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                  Qty  Color  Role                                                                                                                                                                                                                                                         Rar
  1  End-Blaze Epiphany    x1   R      Interaction - X-damage removal, the deck's only mana sink and its only card-positive answer                                                                                                                                                                  R
  2  Giantfall             x1   R      Interaction - fight, or one of only 4 artifact answers in the cube                                                                                                                                                                                           U
  2  Sear                  x2   R      Interaction - 4 damage instant                                                                                                                                                                                                                               U
  3  Tend the Sprigs       x2   G      Engine - adds a BASIC to the battlefield, i.e. more doubling surface                                                                                                                                                                                         C
  3  Unforgiving Aim       x2   G      Interaction - modal flier/enchantment removal                                                                                                                                                                                                                C
  4  Feed the Flames       x1   R      Interaction - 5 damage with exile                                                                                                                                                                                                                            C
```

### OTHER SPELLS (2)

```
CMC  Card                  Qty  Color  Role                                                                                                                                                                                                                                                         Rar
  2  Shimmerwilds Growth   x2   G      Engine - a one-sided multiplier; an enchanted basic taps for three under Lavaleaper                                                                                                                                                                          U
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Role / When to board in
Boulder Dash          x2   R      Anti-aggro two-for-one - Against the Goblin (21) and Kithkin (19) swarm decks, and as the answer to the declared wide_boards concession - 'deals 2 damage to any target and 1 damage to any other target' answers two bodies for two mana.  [U]
Cinder Strike         x2   R      One-mana removal - Against fast starts - 'deals 2 damage to target creature. It deals 4 damage to that creature instead if this spell's additional cost was paid', and the blight-1 cost is cheap in a deck whose bodies are 6/5 and 7/7.  [C]
Rooftop Percher       x2   C      Anti-graveyard + flier - Against the 39 graveyard-interaction cards (15% of the cube) - 'exile up to two target cards from graveyards'. Colourless, so it costs nothing against a manabase with zero fixing lands, and it is the only flying body available.  [C]
Pummeler for Hire     x2   G      Anti-flier / removal-resistant body - Against the cube's 41 evasion cards - 'Vigilance, reach / Ward {2}' blocks fliers and taxes removal. Its Giant-lifegain rider is live here: Wildvine Pummeler and Aurora Awakener are both Giants.  [U]
Tweeze                x1   R      Flexible damage + filter - When you need reach to the face or a third cheap answer - 'deals 3 damage to any target. You may discard a card. If you do, draw a card.'  [C]
Chomping Changeling   x1   G      Artifact/enchantment removal - Against the cube's 11 artifacts and 21 enchantments, when Giantfall and Unforgiving Aim are not enough - 'destroy up to one target artifact or enchantment' on a body.  [U]
```

## ANALYSIS
### DECK IDENTITY
Green-red basics-only ramp midrange. Lavaleaper reads 'All creatures have haste. / Whenever a player taps a BASIC land for mana, that player adds one mana of any type that land produced' - so every basic taps for two, and the oversized threats that mana buys attack the turn they land. The manabase is therefore 17 of 17 BASIC: this is the one deck in the pool that is actively worse for playing a dual, because a nonbasic does not double. Shimmerwilds Growth stacks on top - an enchanted basic taps for three. The kill is a hasty 6/6 Prismabasher or 7/7 Aurora Awakener arriving two turns early, with Champion of the Path converting each Elemental that enters into direct damage and Enraged Flamecaster taxing two per four-drop cast.

### THE TYPE-LINE TRAP

This is the one deck in this cube that is *actively worse* for playing a dual land, and the reason is a supertype-versus-type distinction that is very easy to get backwards.

Lavaleaper reads: "Whenever a player taps a **basic** land for mana, that player adds one mana of any type that land produced."

The only free G/R dual in the pool is **Wooded Ridgeline**, whose type line is `Land — Mountain Forest`. It *is* a Mountain and *is* a Forest — for any effect that checks land **types**. But Lavaleaper does not check types. It checks **basic**, which is a *supertype*, and Wooded Ridgeline does not have it. A build that reasoned from the type line would run two copies and quietly turn off 12% of its own engine.

So the manabase is **17 of 17 basic**. Under Lavaleaper that reads as **34 mana**, and with a Shimmerwilds Growth attached, 35. Evolving Wilds is declined for the same family of reason plus a second one: it is a colourless nonbasic, *and* the basic it fetches enters tapped — costing exactly the turn this deck wants mana up.

The price is real and stated: this manabase has **zero fixing lands**. Great Forest Druid ×2 is the entire nonland fixing package.

### THE SYMMETRY, PRICED HONESTLY

Lavaleaper says "whenever **a player** taps a basic land" and "**All** creatures have haste." Both halves are handed to the opponent. In a cube whose only free duals are tapped commons, a typical opposing two-colour deck is *also* mostly basics — so on the mana side the gift is close to even.

Three things make it favourable anyway, each as a count rather than an adjective:

| Asymmetry | The count |
|---|---|
| The sinks | 5 of 23 nonland cards cost five or more; a fair curve is not built to spend ten mana on the turn it is handed |
| Shimmerwilds Growth | Doubles only the land *it* enchants — a one-sided multiplier, ×2 |
| The haste half | Worth more to a deck whose top end is a 6/6 and a 7/7 than to one whose top end is a three-drop |

The residual is not zero: against another basics-heavy ramp deck, Lavaleaper is closer to a 4/4 for four with upside than an engine. That is exactly why 6 of the 23 nonland cards ramp *without* it, and why the shape judge picked this build — it is the one that stays a functional deck in the majority of games where the single legal copy never arrives.

### THE VIVID MISTAKE, AND WHY LANDS BEING COLOURLESS MATTERS TWICE

The first version of this record asserted that "in a two-colour deck X = 2" for every Vivid card. That is wrong, and the self-grill caught it. Vivid counts "the number of colors among **permanents** you control" — and **lands are colourless permanents**. Forest and Mountain both carry `colors: []` in the pool data.

The deck's own Shimmerwilds Growth proves it in text: *"Enchanted land **is** the chosen color"* is only a meaningful line if a land is otherwise no colour at all.

So X counts coloured **nonland** permanents, and the consequences are specific:

| Card | What was claimed | What is true |
|---|---|---|
| Prismabasher | +2/+2 on two bodies | Counts itself (green), so X ≥ 1; X = 2 needs a second colour on board |
| **Wildvine Pummeler** | "{4}{G}, five mana" | Discount checked **on cast**, before it is a permanent — on an empty board X = 0 and it costs the printed **{6}{G}** |
| Aurora Awakener | 2 free permanents | X ≥ 1 counting itself; 2 with any red permanent out |

The cleanest fix is a line the original build never stated: **Shimmerwilds Growth naming red, on a Forest.** One card fixes colour *and* turns Vivid on, because the enchanted land becomes a red permanent.

This is the second time in this deck that "lands are colourless" is load-bearing — the first being Lavaleaper's supertype check above. It is the through-line of the whole build.

### THE ELEMENTAL PACKAGE

Champion of the Path was flagged by the shape judge as potentially uncastable in a rejected sketch, because that sketch never showed it could pay "behold an Elemental and exile it." This list can, and the payoff is the deck's best single turn:

**Elementals here:** Lavaleaper, Kulrath Zealot, Enraged Flamecaster ×2, Prismabasher ×2 — **6 of 23 nonland cards.**

Champion of the Path: *"Whenever another Elemental you control enters, it deals damage equal to its power to each opponent."* A Prismabasher entering under it deals **6 to the face before combat**, then attacks as a hasty 6/6. Twelve damage from one card.

And Enraged Flamecaster: *"Whenever you cast a spell with mana value 4 or greater, this creature deals 2 damage to each opponent."* Cards at MV 4+: **9 of 23.**

### PLAY PATTERN

| Turn | Line |
|---|---|
| 1-2 | Basic, then Shimmerwilds Growth (that land now taps for two on its own) or Great Forest Druid. |
| 3 | Tend the Sprigs for a basic, or Enraged Flamecaster. |
| 4 | Lavaleaper — it attacks immediately for 4 under its own haste clause. Every basic now taps for two. |
| 5 | Five basics = ten mana. Prismabasher (hasty 6/6, +2/+2 to two attackers) *and* Sear held up, or Aurora Awakener. |
| 6 | Champion of the Path or a second fatty; each Elemental entering is its power to the face, and everything swings the turn it lands. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:1  2:7  3:6  4:3  5:1  6:3  7:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.6: Champion of the Path@0.6) → p=0.90 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.5: Kulrath Zealot@0.5) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 15%  T2 83%  T3 96%
Coverage:  [PASS]
  CONCEDED  wide_boards: Stated with the pool fact rather than as a preference. The cube contains exactly TWO sweepers (dossier structural_census): Soul Immolation, a red mythic, and Ashling's Command, a U/R rare - so every mass answer in this colour pair costs a rare/mythic slot, and this deck's budget is now fully spent at 5 of 5 on the engine, the top end and the mana sink. Every maindeck answer is therefore single-target (Sear 4 damage, Feed the Flames 5, End-Blaze Epiphany X damage, Giantfall a fight). The plan against a wide board is to go over the top - Lavaleaper's haste means a 6/6 Prismabasher or 7/7 Aurora Awakener attacks the turn it lands - and Boulder Dash x2 in the sideboard ('deals 2 damage to any target and 1 damage to any other target') is the bounded two-body answer.
  OK        single_large_threat: Feed the Flames, Sear, End-Blaze Epiphany
  OK        noncreature_permanents: Unforgiving Aim, Giantfall
  CONCEDED  stack: This pool offers no counterspell in green or red - the cube's three counters are all blue. The deck instead lets spells resolve and answers them on the battlefield with instant-speed damage, which the doubled mana lets it hold up alongside a threat.
  CONCEDED  graveyard: No mainboard graveyard interaction; Rooftop Percher ('exile up to two target cards from graveyards') answers the cube's 39 graveyard cards from the board, and it is colourless so it costs no fixing.
```
- Phase 6b returns PASS on all four checks and the Phase 6 mana audit returns PASS with the land count at exactly the computed 17 and colour gaps under one point (G +0.9pp, R -0.9pp) after the End-Blaze Epiphany swap.
- The threat band sits at 43.5%, 3.5 points over. This is the corrected figure: the shape judge established that the winning sketch had booked its ramp package as Threats and reported 37.5% when its own list was really 65.2%. Re-booking those six cards to Engine produced 43.5%, and the residual overage is the top end a ramp deck exists to cast.
- Interaction sits at 30.4%, marginally over, and all seven slots are now genuine answers. The grill showed the previous seventh was Blossoming Defense, which answers nothing of the opponent's; replacing it with End-Blaze Epiphany fixed the booking and the mana-sink hole in one swap.
- The goldfish check reports keepable at exactly the 80% floor with 89% to three lands by turn 3. The T1 play rate of 15% is honest but should be read with the grill's caveat: this deck has zero proactive one-drops, and its first creature is a 0/4 wall on turn two.
- The wide_boards concession was ruled correct at the approval round, on a count the build had not made: the cube contains 40 token generators of 282 cards (14.2%), but only 8 of 282 (2.8%) create more than one body at a time. Wide boards are a real but thin axis in this environment, and Boulder Dash x2 in the sideboard is a proportionate hedge for it.
- Goldfish keepable sits at exactly the 80.0% floor. Disclosed rather than smoothed: the T1 play rate of 15% is End-Blaze Epiphany cast for X=0, not a real one-drop - this deck's first creature is a 0/4 Great Forest Druid on turn two.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | REWRITTEN at the grill, because the previous entry named a card that is not a mana sink. Under Lavaleaper a surplus land is two mana rather than one, and 6 of the 23 nonland cards cost five or more (corrected from 5). The genuine sink, added in the repair, is End-Blaze Epiphany: '{X}{R}, deals X damage to target creature' scales without bound, so a twelve-mana turn has somewhere to go. The earlier claim that Aurora Awakener 'converts excess mana into free permanents' is withdrawn - its ETB costs no mana at all and therefore absorbs no surplus, though it is still card advantage. Shimmerwilds Growth also gives a flooded hand something to do with two mana. |
| screw | mitigation | Four fixing effects, not two - the grill corrected the count. Great Forest Druid x2 ('{T}: Add one mana of any color') AND Shimmerwilds Growth x2, which put on a Forest naming red yields {G}{G}{R} under Lavaleaper. Beyond fixing: Tend the Sprigs x2 searches a basic onto the battlefield and Kulrath Zealot's basic landcycling turns a stranded six-drop into a land for {1}{R}. The goldfish check reports 80% keepable and 89% to three lands by turn 3. Honest limit: this manabase has ZERO fixing lands - no duals, no Evolving Wilds - which is the deliberate price of a manabase where every land doubles. |
| decapitation | accepted | Lavaleaper is a singleton rare, so it is drawn by the thesis turn in a minority of games, and this deck deliberately does not depend on it - which is precisely why the shape judge chose this build over the two others. The accepted cost of mitigating: there is no second copy legal and no other card in the pool doubles basic-land mana, so 'redundancy' would mean replacing the thesis card with generic ramp and abandoning the Specific Constraint the deck was built to satisfy. What the deck does instead is make the rare-less games normal: 6 of 23 nonland cards ramp without it, and the payoffs are castable on a fair curve one to two turns later. |
| gas-out | mitigation | Cards: Net-Positive / Self-Replacing in this list: Kulrath Zealot ('exile the top card of your library. Until the end of your next turn, you may play that card'), Aurora Awakener (puts any number of revealed permanent cards onto the battlefield), Spinerock Tyrant (copies each single-target instant or sorcery, so every answer is two), and Tend the Sprigs x2 (a land plus a 3/4 body past the threshold) = 6 of 23. The deeper answer is that this deck's hand empties into a board of 6/6s rather than into nothing - an empty hand with ten mana still casts the top card it draws. |
| raced | accepted | CHANGED FROM A MITIGATION TO AN ACCEPTED, because the grill showed the mitigation's central claim was false. The previous entry called Enraged Flamecaster 'a two-mana 3/2 with REACH'; it costs {2}{R}, which is three. This deck has ZERO proactive one-drops and its only two-drop creature is a 0/4 Great Forest Druid, so the honest early game is a wall on turn two and the first reach blocker on turn three. Mitigating would mean adding cheap bodies at the expense of the ramp package or the top end - and the ramp package is the pipeline, while the top end is what the ramp is for. What bounds the concession: 7 interaction slots at 30.4%, all of them genuine answers and all castable alongside a threat once the doubling is on, plus Cinder Strike x2 at one mana and Boulder Dash x2 from the sideboard. |
| disruption-fizzle | accepted | REWRITTEN AS AN ACCEPTED, because my own repair broke the previous mitigation. That entry ended by naming Blossoming Defense ('+2/+2 and hexproof') as the answer held up on the critical turn - and Blossoming Defense is the card I cut to make room for End-Blaze Epiphany. A scan of the updated 23 nonland cards for hexproof, indestructible, protection or ward returns ZERO hits, so the deck now has no way to protect Lavaleaper on the turn it resolves. Half the old argument survives and is still textually sound: if Lavaleaper is removed in response to being cast the land drops are not wasted, because they were mana either way, and the six non-Lavaleaper ramp cards still function; if it is removed after resolving, the threats it already bought keep their board presence and only future doubling is lost. The half that is now false is the protection. The cost of mitigating: the pool does offer Gilt-Leaf's Embrace ('Flash / ... enchanted creature gains trample and indestructible until end of turn') at 2 copies with no rare cost, but taking it would mean giving back the deck's only mana sink or two of its seven genuine answers - and the Challenger's own ruling was that the sink is the better buy, because End-Blaze Epiphany is live in every board state and is the only card in the list that kills something with more than five toughness. The concession is therefore: this deck protects its engine by not depending on it (6 of 23 nonland cards ramp without Lavaleaper) rather than by holding up a trick. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Wooded Ridgeline | The only free G/R dual, available at 2 copies - and the single card most likely to be included by mistake. Its type line is 'Land - Mountain Forest', so it IS a Mountain and a Forest by TYPE, but Lavaleaper checks the supertype BASIC, which it does not have. Running it would quietly turn off 12% of the deck's own engine, and it enters tapped besides. |
| Evolving Wilds | Excellent in the other three decks in this pool and wrong here on two counts: it is a colourless NONBASIC that does not double, and the basic it fetches enters tapped, costing exactly the turn this deck wants mana up to hold an instant. |
| Prismatic Undercurrents | Proposed by a rejected sketch as 'the second, redundant mana-doubling axis'. The shape judge established its text does no such thing: it puts basic lands in HAND (no acceleration at all by itself) and grants at most one extra land drop per turn - arithmetic addition, not doubling. |
| Goliath Daydreamer | Claimed by a rejected sketch as 'every attack rebuys a removal spell for free'. The judge established the text exiles a spell only when cast FROM HAND, and the attack trigger casts ONE spell - so a spell recast from exile is not re-exiled and each answer is rebought once, total. |
| Collective Inferno | 'As this enchantment enters, choose a creature type. / Double all damage that sources you control of the chosen type would deal.' - Elemental would be the choice, and there are 6 Elemental copies of 23 nonland cards. Rejected because the deck's two largest bodies (Aurora Awakener, a Giant Druid, and Wildvine Pummeler, a Giant Berserker) are NOT Elementals, so the doubler misses the top end it most wants to double. |
| Boldwyr Aggressor | 'Double strike / Other Giants you control have double strike' - the Giants here are Wildvine Pummeler and Aurora Awakener, 2 of 23 nonland cards, and both cost five or more. A 2/5 for five that upgrades two expensive cards is not a payoff a ramp deck can spend a slot on. |
| Gangly Stompling | A 3-mana 4/2 changeling trample that is every creature type at once, including Elemental for Champion of the Path. Cut for Enraged Flamecaster, which is a mana cheaper, has reach against the cube's 41 evasion cards, and converts the deck's 9 four-plus-drops into direct damage. |
| Flamekin Gildweaver / Noggle Robber / Firdoch Core / Springleaf Drum | Treasure- and artifact-based ramp. All rejected on the same mechanism: they produce mana that Lavaleaper does not double, because Lavaleaper triggers only on tapping a BASIC LAND. In this deck, a mana source that is not a basic is worth strictly less than the basic it displaced. |
| Sapling Nursery | The cube's only true landfall card and a rare - but 'Affinity for Forests' wants a mono-Forest manabase, and this deck's 8 Mountains mean it costs {2}{G}{G} at best. It also competes for a rare slot with Lavaleaper itself. |
| Mistmeadow Council | A 4/3 that draws a card, and its cost reducer needs a Kithkin - of which this list has zero. At a flat five mana it is worse than every other five-drop in the slice. |
| Squawkroaster | 'Double strike / Vivid - Squawkroaster's power is equal to the number of colors among permanents you control.' X is 2 in a two-colour deck, so it is a 2/4 double striker for four - four damage. In the three-colour Vivid deck this card is a 5/4; here it is not. |
| Pitiless Fists | Fight plus a permanent +2/+2, and excellent off a 6/6 - but it is an Aura at sorcery speed, and this build's whole lens is holding mana up at instant speed. Giantfall does the fight half as an instant for two less. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.57   Ramp cards: 8   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.09 adj [MV 3.57 vs 2.5, 8 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  53.8%  prod  52.9%  gap  +0.9pp  [OK]
  R  demand  46.2%  prod  47.1%  gap  -0.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard only - every name verified by exact string match against the working pool cache
commons_uncommons_max_2: PASS - no common or uncommon exceeds 2 copies across mainboard + sideboard
rares_mythics_max_1: PASS - Lavaleaper, Spinerock Tyrant, Aurora Awakener, Champion of the Path each at 1
rare_mythic_total_max_5: PASS - 5 of 5 used, the full budget: Lavaleaper, Spinerock Tyrant, Aurora Awakener, Champion of the Path and End-Blaze Epiphany, all mainboard. The pre-grill record left the fifth slot unspent on a rationale the Challenger showed was false on its own example - it dismissed Collective Inferno for requiring 'a single dominant creature type this list does not have', when this list has 7 Elemental copies among its 12 creature copies. The slot went to End-Blaze Epiphany instead of Collective Inferno because the deck's structural hole was a mana sink, not a damage doubler. The sideboard is entirely commons and uncommons.
basics_unlimited: 9 Forest, 8 Mountain - basics are format-supplied and exempt, and here they are also 100% of the manabase by design
colour_legality: PASS - every distinct nonland name returns a usable mode under effective_cost.best_mode(card, ['G','R'], [])
```
