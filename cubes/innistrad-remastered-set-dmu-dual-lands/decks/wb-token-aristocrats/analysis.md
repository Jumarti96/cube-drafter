---
deck_name: "wb-token-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-08-27T14:58:49Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  3x Plains                                       basic
  10x Swamp                                        basic
  1x Evolving Wilds                               fetches a basic, enters tapped
  2x Sunlit Marsh                                 W/B dual, enters tapped
  1x Westvale Abbey // Ormendahl, Profane Prince  colourless, flips into a 9/7
```

### CREATURES (10)
```
CMC  Card                                       Qty   Color  Role                         Rar
  2  Blood Artist                                x2    B      Payload/Payoff               U
  2  Fleshtaker                                  x1    WB     Payload/Payoff               U
  2  Skirsdag High Priest                        x1    B      Payload/Payoff               R
  3  Falkenrath Torturer                         x2    B      Engine/Outlet                C
  3  Morbid Opportunist                          x1    B      Payload/Payoff               U
  4  Bloodline Keeper // Lord of Lineage         x1    B      Engine/Outlet                M
  4  Haunted Dead                                x2    B      Enabler/Fodder               U
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                                       Qty   Color  Role                         Rar
  1  Tragic Slip                                 x2    B      Interaction/Disruption       C
  1  Village Rites                               x1    B      Engine/Outlet                C
  2  Collective Brutality                        x1    B      Interaction/Disruption       R
  2  Gather the Townsfolk                        x2    W      Enabler/Fodder               C
  2  Infernal Grasp                              x2    B      Interaction/Disruption       U
  3  Angelic Purge                               x1    W      Interaction/Disruption       C
  3  Lingering Souls                             x2    W      Enabler/Fodder               U
```

### OTHER SPELLS (2)
```
CMC  Card                                       Qty   Color  Role                         Rar
  2  Ghoulish Procession                         x1    B      Enabler/Fodder               U
  2  The Meathook Massacre                       x1    B      Payload/Payoff               M
```

## SIDEBOARD (10)
```
Card                                        Qty   Color  Rar  Role / When to board in
Eaten Alive                                 x2    B      C    vs planeswalkers (7 in the pool, and the mainboard answers none of them) and vs indestructible or death-triggered creatures: 'Exile target creature or planeswalker' for {B} once a token pays the additional cost.
Cathar Commando                             x2    W      C    vs the cube's 24 artifacts and 25 enchantments - a class the dossier says the whole cube answers with only 4 artifact answers and 2 enchantment answers, and which the mainboard covers with a single Angelic Purge. 'Flash. {1}, Sacrifice this creature: Destroy target artifact or enchantment' is a body, a sacrifice outlet and an answer in one card, so it is never a dead draw in this deck.
Valorous Stance                             x1    W      U    'Destroy target creature with toughness 4 or greater' answers the large creatures Tragic Slip and Infernal Grasp sometimes cannot reach profitably. Trimmed to one copy at the grill: the indestructible mode was justified as protecting Skirsdag High Priest, and the Challenger correctly noted that indestructible does not save a 1/2 from -X/-X, exile or bounce, so that half of the argument does not hold.
Angelic Purge                               x1    W      C    the second copy vs the cube's 24 artifacts and 25 enchantments; the 'sacrifice a permanent' additional cost is a benefit in this deck, feeding Blood Artist and The Meathook Massacre in the same action.
Sever the Bloodline                         x2    B      U    vs token and recursion decks: 'Exile target creature and all other creatures with the same name as that creature' removes an entire opposing token type at once, and exile beats the undying and graveyard recursion that 27% of this cube is built on.
Slayer of the Wicked                        x2    W      U    vs the cube's three largest non-Human tribes (Vampire 23, Zombie 15, Werewolf 13 = 51 cards): a 3/2 body that is also fodder, plus 'you may destroy target Vampire, Werewolf, or Zombie'.
```

## ANALYSIS

### DECK IDENTITY

A W/B deck in which the tokens are ammunition, not attackers. Eight of its twenty-three nonland copies make creature tokens, and one of them - Bloodline Keeper - makes a 2/2 flier every turn for free and without limit, which is what turns a finite pile of fodder into an engine. The deck spends those bodies: Falkenrath Torturer x2 is a free, repeatable, instant-speed sacrifice outlet, and Village Rites and Angelic Purge convert a dying body into two cards or an exiled permanent. Every death is monetised twice, by Blood Artist x2 and The Meathook Massacre on one side and Morbid Opportunist on the other. Skirsdag High Priest then converts leftovers into a 5/5 flier a turn - note it TAPS two creatures rather than sacrificing them, so it needs a separate death to satisfy its own morbid clause - and Westvale Abbey, a land, eats five bodies to become a 9/7 flying lifelink indestructible haste creature. The kill is drain plus one uninteractable flier, not combat width.

### TAP IS NOT SACRIFICE - THE DISTINCTION THIS DECK IS BUILT ON

Skirsdag High Priest reads *"Morbid - **{T}, Tap two untapped creatures you control**: Create a 5/5 black Demon creature token with flying. Activate only if a creature died this turn."*

The cost is **tap**, not sacrifice. The two creatures survive. That means the Priest:
- feeds **no** death trigger - not Blood Artist, not The Meathook Massacre, not Morbid Opportunist;
- **cannot satisfy its own morbid clause** - something else has to die first.

One of the three build sketches counted it as a free sacrifice outlet and reported "2 free outlets" on that basis. The shape judge caught it. The real count is **two copies of one card**: Falkenrath Torturer, whose *"Sacrifice a creature:"* has no mana in the cost at all.

### SIX OUTLETS, BUT ONLY ONE THAT IS FREE

| Outlet | Cost | Repeatable? |
|---|---|---|
| Falkenrath Torturer x2 | **none** | yes, unlimited, instant speed |
| Village Rites | `{B}` plus the sacrifice | no, one-shot |
| Angelic Purge | `{2}{W}` plus sacrifice a **permanent** | no, one-shot |
| Fleshtaker | `{1}` per activation | yes |
| Westvale Abbey | `{5}`, sacrifice **five** | yes, but once |

Note Angelic Purge sacrifices *a permanent*, not specifically a creature - it only feeds the death triggers when you choose a creature to pay it.

Everything downstream - Tragic Slip's morbid, Skirsdag's morbid, Blood Artist, Meathook, Morbid Opportunist - is gated on a death happening. That is why the free outlet is the card the whole list is arranged around, and why the assembly gate declares `outlet` as a role of its own rather than folding it into the payoffs.

### WESTVALE ABBEY: WHAT IT DOES, AND HOW OFTEN

*"{5}, {T}, Sacrifice five creatures: Transform this land"* into a 9/7 flying lifelink indestructible haste creature - off a **land**, costing no nonland slot. With Blood Artist x2 and The Meathook Massacre on the battlefield those five sacrifices are also 3 damage each, 15 total.

Stated honestly, because the number is seductive: that conjunction needs the Abbey *plus* both Blood Artists *plus* the Meathook, which at 14 cards seen by turn 7 is roughly a **4%** joint probability. The realistic figure is **5** (Meathook alone) or **10** (Meathook plus one Artist). The 9/7 is the reliable part; the 15 is the dream.

### THE FUEL PROBLEM, AND THE CARD THAT SOLVES IT

The shape judge picked this build because its own sketch admitted the plan is *fuel-limited, not payoff-limited*. Seven of twenty-three nonland copies make tokens, producing a **finite** pile, and three separate engines - Skirsdag's tap, Westvale's five, and every drain trigger, since each is itself a death - all eat from that one pool. A single sweeper starves all three at once.

Bloodline Keeper is the only card in the 305-card pool that fixes this: *"{T}: Create a 2/2 black Vampire creature token with flying"* is free, every turn, forever, and refills from an empty board without spending a card. Its transform clause even self-satisfies - *"only if you control five or more Vampires"*, and the mainboard already fields four (Blood Artist x2, Falkenrath Torturer x2), so the Keeper is its own fifth. Flipped, *"Other Vampire creatures you control get +2/+2."*

### THE MEATHOOK MASSACRE IS SYMMETRIC - PROFITABLY

*"When The Meathook Massacre enters, each creature gets -X/-X until end of turn"* is symmetric, and at X=2 it kills this deck's own 1/1 tokens too. Calling it one-sided would be wrong.

What makes it good anyway is that the other half - *"Whenever a creature you control dies, each opponent loses 1 life"* - is on the **same permanent** and is already on the battlefield when the ETB resolves. So every one of your own dying tokens drains 1 on the way out. Against a go-wide deck you wipe their board and convert yours into damage with the same spell.

### GHOULISH PROCESSION AND THE DENOMINATOR THAT WASN'T ITS OWN

Worth recording because it is the kind of error that is invisible unless you read the two cards side by side. I cut Ghoulish Procession on the ground that *"only 11 of 23 copies are nontoken creatures"* - which is this deck's own nontoken count, and the correct denominator for **Voldaren Bloodcaster**, whose text reads *"another nontoken creature **you control** dies."* Ghoulish Procession reads *"Whenever one or more nontoken creatures die"* with no controller restriction at all, so it also fires on every nontoken creature the **opponent** loses - which this deck's four removal spells and Collective Brutality actively cause. At `{1}{B}` it is a free 2/2 nearly every turn.

### SLOT ALLOCATION

Nonland cards: **23**

| Slot | % of nonland | Count | Rationale |
|---|---|---|---|
| Interaction | 26.1% | 6 | Tragic Slip x2, Infernal Grasp x2, Collective Brutality, Angelic Purge - inside the 20-30% midrange band. Two are better here than anywhere else in this cube: Tragic Slip's morbid -13/-13 is unconditional in a deck with a free sacrifice outlet, and Angelic Purge's 'sacrifice a permanent' additional cost is a benefit rather than a tax. |
| Threats/Payoffs | 26.1% | 6 | Skirsdag High Priest, Blood Artist x2, The Meathook Massacre, Fleshtaker, Morbid Opportunist. BELOW the 30-40% midrange band by 3.9pp: this pipeline's threats are the Demon tokens Skirsdag makes and the Ormendahl that Westvale Abbey becomes, neither of which occupies a nonland slot. |
| Engine & Infrastructure | 17.4% | 4 | Village Rites, Falkenrath Torturer x2, Bloodline Keeper. The midrange spec nominally absorbs this bucket into Threats/Payoffs at 0%, and here it cannot be: a sacrifice OUTLET is neither a threat nor an answer, and without one the payoffs are inert - Blood Artist waits on combat, Tragic Slip's morbid stays off, and Skirsdag High Priest cannot meet its own 'Activate only if a creature died this turn' clause because tapping two creatures kills nothing. |

*6 + 6 + 4 + 7 = 23 = nonland_total, and every card is booked into the bucket matching its own role in the deck array. Disclosure the Challenger asked for: this deck is out of band in BOTH directions depending on the booking. Under the four-bucket booking above, Threats/Payoffs is 26.1%, which is 3.9pp BELOW the 30-40% band. Under the midrange spec's own absorption rule - Engine folded into Threats/Payoffs - it becomes (6+4)/23 = 43.5%, which is 3.5pp ABOVE it. Declaring the fourth bucket is not neutral; it converts an over-allocation into an under-allocation, and neither reading is in band. The judge's credited grounds cover the fuel-volume remainder; the Engine-at-17.4% booking is the builder's own reasoning, not the judge's.*

### LAND & PIP MATH

- **Land target trace:** `{"base_lands": 17, "base_window": [2, 4], "base_p_window": 0.7945, "avg_mv": 2.39, "reference_avg_mv": 2.5, "accel": 1, "adjustment": -0.313, "raw_target": 16.687, "clamped": false, "recommended_land_count": 17, "p_window_at_recommended": 0.7945}`
- **Recount after FILL:** Recomputed from the final list: avg MV 2.39, ramp 0, cantrip 1, accel 1 -> 17 lands. No deviation.
- **Deviation:** none - built to 17
- **Composition:** Westvale Abbey // Ormendahl, Profane Prince occupies a land slot and one of the five rare/mythic slots. It taps for {C} only, a real cost in a list with 26 coloured pips, and the deck fields 15 coloured LANDS behind it (9 Swamp, 3 Plains, 2 Sunlit Marsh, 1 Overgrown-equivalent none - plus Evolving Wilds, which the audit does not credit as a coloured source). The earlier note said 16 and the Challenger caught the off-by-one against the audit's own convention. What the Abbey buys is a win condition that costs no nonland slot: '{5}, {T}, Sacrifice five creatures: Transform this land' into a 9/7 flying lifelink indestructible haste creature, and '{5}, {T}, Pay 1 life: Create a 1/1 white and black Human Cleric creature token' as a flood outlet. Sunlit Marsh x2 is 'Land - Plains Swamp' with 'This land enters tapped' unconditionally; Shattered Sanctum, the pair's only untapped-capable dual, was declined because it is a rare and the budget is spent. Only 3 of 17 lands enter tapped, the lowest of the four decks.
- **Pips:** 20 black pips and 6 white pips (77% / 23%) after the Phase 9 repair - the most lopsided of the four decks. Lingering Souls' 'Flashback {1}{B}' is LIVE here, unlike in the two G/W builds, and adds 2 further black pips of demand that mana_cost does not carry, taking true demand to 22B/6W (79/21). Land split: 10 Swamp, 3 Plains, 2 Sunlit Marsh, 1 Evolving Wilds, 1 Westvale Abbey = 17, giving 12 black and 5 white coloured sources on the audit's convention - gaps of +6.3pp and -6.3pp. The white surplus is deliberate: every white card is a single pip and two are early plays (Gather the Townsfolk {1}{W}, Lingering Souls {2}{W}), so white needs breadth not depth, while black's demanding costs are The Meathook Massacre's {X}{B}{B} and Bloodline Keeper's {2}{B}{B}.

### COUNT-DEPENDENT VERDICTS

| Card | Verdict | Count against this list |
|---|---|---|
| Skirsdag High Priest | INCLUDE x1 (reliability weight 0.6) | 'Morbid - {T}, Tap two untapped creatures you control: Create a 5/5 black Demon creature token with flying. Activate only if a creature died this turn.' Note precisely what the cost is: it TAPS two creatures, it does not sacrifice them - the shape judge caught a rejected sketch miscounting this as a free sacrifice outlet. So it needs a separate death, which this list supplies from 3 free outlet copies (Falkenrath Torturer x2, Demonic Taskmaster) plus Village Rites and Angelic Purge. Spare untapped bodies: 16 token bodies over a game plus 11 nontoken creature copies. Discounted to 0.6 for the double gate. |
| Blood Artist | INCLUDE x2 | 'Whenever this creature or another creature dies, target player loses 1 life and you gain 1 life.' Death count against this list: Demonic Taskmaster alone forces one per upkeep; Falkenrath Torturer x2 can convert any of the 16 token bodies at instant speed for free; and it triggers on the OPPONENT'S creatures dying too, so all 4 removal copies feed it. One Westvale Abbey activation is 5 triggers by itself. |
| The Meathook Massacre | INCLUDE x1 (reliability weight 0.9) | 'Whenever a creature you control dies, each opponent loses 1 life' is a second Blood Artist on a permanent that creature removal cannot touch, and its ETB is a scalable sweeper the deck chooses the size of. In the other three decks in this cube a symmetric -X/-X is a liability; here at X=2 it kills an opposing swarm while every one of our own dying bodies drains. With Blood Artist x2 also out, five sacrifices to Westvale Abbey is 15 damage. |
| Falkenrath Torturer | INCLUDE x2 | 'Sacrifice a creature: This creature gains flying until end of turn. If the sacrificed creature was a Human, put a +1/+1 counter on this creature.' The only FREE repeatable sacrifice outlet in the whole slice - every other outlet considered (Village Rites {B}, Eaten Alive {B} or {3}{B}, Ecstatic Awakener {2}{B}, Indulgent Aristocrat {2}, Angelic Purge {2}{W}) charges mana on top of the sacrifice. It is what turns on Tragic Slip x2's morbid, Skirsdag High Priest's morbid, and Blood Artist x2 at instant speed with no mana held up. Its Human clause: 8 of the bodies this deck makes or plays are Humans (Gather the Townsfolk's 4 tokens, Skirsdag High Priest, Fleshtaker, Morbid Opportunist, Mausoleum Guard); Lingering Souls' 8 Spirits are not. |
| Demonic Taskmaster | CUT (reversed at Phase 9) | The Challenger's finding 9 is correct and it is why this is now cut. 'At the beginning of your upkeep, sacrifice a creature other than this creature' is FORCED, not optional - so on any turn the fodder half of the deck (7 of 23 copies) has nothing on board, it consumes from the 6 Payload/Payoff copies instead: Blood Artist, Skirsdag High Priest, Fleshtaker or Morbid Opportunist. In a build whose judge grounds are 'fuel-limited, not payoff-limited', 1 of 23 copies that drains the fuel supply every upkeep is a liability. Falkenrath Torturer x2 already turns morbid on at instant speed and on demand, which is strictly better than on a fixed upkeep. Bloodline Keeper took the slot. |
| Morbid Opportunist | INCLUDE x1 (reliability weight 0.8) | 'Whenever one or more other creatures die, draw a card. This ability triggers only once each turn.' The once-per-turn clause is the discount: this deck can produce four or five deaths in a turn and still draw one card. It is still the only repeatable draw in the list, and with Demonic Taskmaster it draws on turns the deck does nothing. |
| Fleshtaker | INCLUDE x1 (reliability weight 0.8) | 'Whenever you sacrifice another creature, you gain 1 life and scry 1' plus '{1}, Sacrifice another creature: This creature gets +2/+2 until end of turn.' Both a payoff and an outlet. Discounted to 0.8 because its trigger reads SACRIFICE specifically, not any death - combat deaths and the 4 removal spells do not feed it, unlike Blood Artist. Terminology correction the Challenger asked for: this deck has SIX sacrifice outlets in total, not five - Falkenrath Torturer x2 and Village Rites (booked under Engine), Angelic Purge and Fleshtaker (booked elsewhere but declared in the outlet role), and Westvale Abbey, a land. Of those, exactly TWO COPIES are free and repeatable (Falkenrath Torturer). Earlier drafts called two different cards 'the fifth outlet'; the counts are now stated once, here. |
| Angelic Purge | INCLUDE x1 (reliability weight 0.7 as an outlet) | 'As an additional cost to cast this spell, sacrifice a permanent. Exile target artifact, creature, or enchantment.' The only mainboard answer to a noncreature permanent, and the additional cost is paid by any of 16 token bodies while triggering Blood Artist x2 and The Meathook Massacre. Counted at 0.7 in the outlet role because it is a one-shot sorcery, not a repeatable outlet. |
| Village Rites | INCLUDE x1 | 'As an additional cost to cast this spell, sacrifice a creature. Draw two cards' at instant speed - the cheapest conversion of a body into cards in the pool, and it satisfies morbid for Tragic Slip in the same action. |
| Lingering Souls | INCLUDE x2 | 'Create two 1/1 white Spirit creature tokens with flying. Flashback {1}{B}.' Both costs are core colours here, which is the one deck of these four where that is true, so it is 8 bodies from 2 cards across 4 casts - half the deck's total token output. The bodies also fly, which matters when they are not being sacrificed. |
| Mausoleum Guard | CUT (reversed at Phase 9) | It was maindecked pre-grill, and its verdict still read INCLUDE after the repair while the card was in neither board - the Challenger caught the contradiction between the ledger and the deck array. The grounds it was missing: 'When this creature dies, create two 1/1 white Spirit creature tokens with flying' makes it three bodies from one card, which is genuinely on-plan, but at {3}{W} it is a four-mana white card in a list with 5 white sources, and its fodder arrives only after it dies. Bloodline Keeper took the slot because '{T}: Create a 2/2 black Vampire creature token with flying' produces a body EVERY turn, needs no death to do it, and the body flies - and because the deck's binding constraint is a renewable fuel supply, not a one-time burst of three. |
| Haunted Dead | INCLUDE x2 | 'When this creature enters, create a 1/1 white Spirit creature token with flying' plus '{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield tapped.' Recursion is the point: sacrifice it, bring it back, sacrifice it again. The discard-two cost is fed by 4 of 23 nonland copies that want to be in the graveyard anyway (Lingering Souls x2 for flashback, Haunted Dead x2 itself). |
| Gather the Townsfolk | INCLUDE x2 | Two Human bodies for {1}{W} - the cheapest fodder rate in the slice, and Humans specifically, which is what Falkenrath Torturer's counter clause reads. |
| Ghoulish Procession | INCLUDE x1 (reversed at Phase 9) | My cut used the wrong denominator and the Challenger caught it exactly: I applied 'only 11 of 23 copies are nontoken creatures' - which is THIS deck's own nontoken count, and the correct denominator for the card in the very next verdict, Voldaren Bloodcaster, whose text reads 'another nontoken creature YOU CONTROL dies'. Ghoulish Procession's trigger reads 'Whenever one or more nontoken creatures die' with no controller restriction, so it also fires on every nontoken creature the OPPONENT loses - which this mainboard's 4 removal copies and Collective Brutality's -2/-2 actively cause. The second half of my cut was also wrong: decayed's 'can't block. When it attacks, sacrifice it at end of combat' is irrelevant to a deck whose thesis is that tokens are fodder, not attackers - the Zombie is sacrificed to Falkenrath Torturer and never attacks. At {1}{B} it is a free 2/2 body nearly every turn, against the deck's single binding constraint. Weight 0.8 for the once-each-turn cap. |
| Voldaren Bloodcaster // Bloodbat Summoner | CUT | Same nontoken denominator - 11 of 23 - and it needs FIVE Blood tokens on the battlefield at once to transform. Blood tokens are artifacts, so no anthem or payoff in this list reads them, and they are not creatures, so they cannot be sacrificed to Westvale Abbey or tapped to Skirsdag. |
| Indulgent Aristocrat | CUT | '{2}, Sacrifice a creature: Put a +1/+1 counter on each Vampire you control.' Vampire count in this mainboard: 2 (Blood Artist x2). It is an outlet, but it charges {2} where Falkenrath Torturer charges nothing, and its payoff is a counter on two creatures. |
| Captivating Vampire | CUT | Same Vampire denominator: 2, and its steal needs five. |
| Gravecrawler | CUT | 'You may cast this card from your graveyard as long as you control a Zombie' would be a perfect recurring fodder engine - infinite sacrifices for {B} each. Zombie count in this mainboard: 2 (Haunted Dead x2), and creates 0 Zombie tokens, so the clause is live only while one of 2 of 23 copies is on the battlefield. It is also a rare against a spent budget. |
| Butcher Ghoul | CUT | Undying makes it fodder twice, and unlike the Cathars' Crusade deck nothing here puts +1/+1 counters on it - so the anti-synergy that killed it in deck B does not apply. It is cut on rate instead: {1}{B} for one body that returns once, against Gather the Townsfolk's {1}{W} for two bodies. |
| Ecstatic Awakener // Awoken Demon | CUT | '{2}{B}, Sacrifice another creature: Draw a card, then transform this creature. Activate only once each turn.' Three mana per activation and capped at once per turn, against Village Rites drawing TWO for {B} and Falkenrath Torturer sacrificing for free without a cap. |
| Archghoul of Thraben | CUT | 'Whenever this creature or another Zombie you control dies' - Zombie count 2 of 23 (Haunted Dead x2). |
| Sorin, Imperious Bloodlord | CUT | '+1: You may sacrifice a Vampire. When you do, Sorin deals 3 damage to any target' - Vampire count 2, and the -3 wants a Vampire creature CARD in hand. A mythic against a spent budget. |
| Killing Wave | CUT | 'For each creature, its controller sacrifices it unless they pay X life.' With Blood Artist x2 and The Meathook Massacre this is genuinely one-sided - the count is real and it is the strongest argument for it. Cut because the deck's own board is the widest half of that equation at 16 token bodies, so it costs the fodder Skirsdag and Westvale Abbey need, and because The Meathook Massacre already provides a scalable sweeper the deck controls the size of, on a permanent that keeps draining afterwards. |
| Vanquish the Horde | CUT | 'costs {1} less to cast for each creature on the battlefield. Destroy all creatures.' On this deck's own board it is cheap - which is exactly the problem: it destroys the 16 token bodies that are the deck's ammunition. It is also a rare against a spent budget. |
| Crusader of Odric | CUT | Its size is the creature count, which this deck has - but the deck's plan is to SPEND creatures, so the payoff shrinks exactly when the engine fires. |
| Intangible Virtue | CUT | 'Creature tokens you control get +1/+1 and have vigilance' - 7 of 23 copies make creature tokens, so the anthem is live. It is cut because this deck does not win by attacking with tokens: the thesis is drain plus a large flier, and a +1/+1 on a body that is about to be sacrificed is worth nothing. |
| Cathars' Crusade | CUT | Same reason plus cost: {3}{W}{W} is 5 mana with a double-white requirement against 6 white sources, and counters on creatures the deck intends to sacrifice are wasted. |
| Rally the Peasants | CUT | A one-shot team pump for a deck that does not win by attacking wide. |
| Mentor of the Meek | CUT | My figure of '13 of the deck's ~16 token bodies' was wrong twice over and the Challenger corrected both: ALL 16 token bodies are 1/1, and the clause is not limited to tokens - 10 of the 11 nontoken creature copies also enter at power 2 or less. The true numerator is roughly 26 body-entries, about double what I stated. The cut still stands on rate: each draw costs {1} on top, while Village Rites draws TWO for {B} plus a sacrifice the deck wanted to make, and Morbid Opportunist draws off deaths that were happening anyway at no additional mana. |
| Cathar's Call | CUT (reason corrected at Phase 9) | My cut reason - 'an Aura on a creature this deck intends to sacrifice' - was the same sentence I applied to a nine-card generic Equipment-and-Aura batch, i.e. a heuristic rather than a count, and the Challenger was right to reject it: this deck's outlets are FREE and UNLIMITED (Falkenrath Torturer x2), so it never has to eat the enchanted host - it enchants one creature and feeds on the other 25-plus bodies. Restated on a real count: the card produces a free Human token every end step, and Humans are what Falkenrath Torturer's '+1/+1 counter' clause reads (8 Human bodies in this list). It loses the slot to Bloodline Keeper, which produces a body every turn with no host to lose and no Aura exposure, and whose token FLIES. |
| Wedding Announcement // Wedding Festivity | CUT (reason corrected at Phase 9) | The Challenger's finding 5 is correct that my rare-budget reason was spending a slot on a redundant SIDEBOARD card. That is now fixed - Invasion of Innistrad was cut from the sideboard because Sever the Bloodline x2 already exiles against the graveyard class - but the freed slot went to Bloodline Keeper rather than here. Head-to-head: both make a free body every turn and neither has Aura exposure, but Bloodline Keeper's body FLIES and is unbounded from the turn it lands, where Wedding Announcement stops making bodies after three invitation counters and transforms into an anthem - and an anthem is worth little to a deck that sacrifices its board rather than attacking with it. |
| Liesa, Forgotten Archangel | CUT | 'Whenever another NONTOKEN creature you control dies, return that card to its owner's hand' - 11 of 23 copies qualify, which is a real count and would be a genuine recursion engine. Cut on cost and budget: {2}{W}{W}{B} is five mana with a WW requirement against 6 white sources, and it is a rare. |
| Demonmail Hauberk | CUT | 'Equip - Sacrifice a creature' makes the equip cost an outlet, which is genuinely on-plan. Cut because at {4} to cast plus a body per equip it is the most expensive outlet in the slice, and the +4/+2 goes on a creature this deck may want to sacrifice. |
| Galvanic Juggernaut | CUT | 'Whenever another creature dies, untap this creature' - this deck causes a death nearly every turn, so the drawback is answered. Cut because 'This creature attacks each combat if able' forces a 5/5 into blockers on a board the deck wants to keep as fodder, and it is not a Human so Falkenrath Torturer's counter clause misses it. |
| Siege Zombie | CUT | 'Tap three untapped creatures you control: Each opponent loses 1 life' competes with Skirsdag High Priest for the same untapped bodies, and Skirsdag converts two of them into a 5/5 flier where this converts three into 1 damage. |
| Metallic Mimic | CUT | Naming Spirit hits Lingering Souls' 8 and Mausoleum Guard's 2 of ~16 token bodies. Rare, budget spent, and counters on sacrificed bodies are wasted. |
| Voice of the Blessed | CUT | 'Whenever you gain life, put a +1/+1 counter on this creature' - lifegain triggers here are Blood Artist x2 and Fleshtaker, so the count is genuinely high. Cut as a rare against a spent budget, and because a growing creature that must survive is the wrong shape for a deck that sacrifices its board. |
| Morkrut Banshee | CUT | 'Morbid - ... target creature gets -4/-4' on a 4/4 for {3}{B}{B} - the morbid is free with an outlet, but five mana with a double-black pip is above the curve this 17-land list built to (0 of 23 copies cost 5). |
| Ulvenwald Mysteries | CUT (splash declined) | 'Whenever a NONTOKEN creature you control dies, investigate' plus a Clue-to-body conversion is a real death-to-card-to-fodder loop against 11 nontoken copies, but it costs {2}{G} and the final list took 0 green sources. |
| Garruk Relentless // Garruk, the Veil-Cursed | CUT (splash declined) | Its transformed '-1: Sacrifice a creature. If you do, search your library for a creature card' is an outlet AND a tutor, the best splash card of the three - but 0 green sources in the final base, and it is a mythic. |
| Young Wolf | CUT (splash declined) | Undying fodder twice for {G}, with 0 green sources. |
| Bloodline Keeper // Lord of Lineage | INCLUDE x1 (added at Phase 9) | Seeded and then dropped with no verdict at all - the Challenger's strongest absence, and it is right. '{T}: Create a 2/2 black Vampire creature token with flying' is the only UNBOUNDED free fodder source in the pool, against a deck whose fuel was otherwise a finite ~16 bodies from 7 of 23 copies, and whose own judge grounds say the plan is fuel-limited. Its transform clause also self-satisfies: '{B}: Transform this creature. Activate only if you control five or more Vampires' - the mainboard already fields 4 Vampires (Blood Artist x2, Falkenrath Torturer x2), so Bloodline Keeper is the fifth, and flipped it gives 'Other Vampire creatures you control get +2/+2'. It took the rare slot freed by cutting Invasion of Innistrad from the sideboard. |
| Lunarch Veteran // Luminous Phantom | CUT | Seeded and never adjudicated - the Challenger's absence 2. Its disturbed back face is genuinely on-plan: 'Whenever another creature you control LEAVES the battlefield, you gain 1 life' catches every sacrifice, and it returns from the graveyard AFTER being sacrificed. Cut on what the payoff is: life, and this deck already gains on every death from Blood Artist x2, on every sacrifice from Fleshtaker, and on every opposing death from The Meathook Massacre. 0 of the 23 nonland copies convert life into anything else, so the count converts to nothing but a higher life total. |
| Gisa's Bidding | CUT | Seeded and never adjudicated. Two 2/2 Zombie bodies for {2}{B}{B}, with 'Madness {2}{B}' refunded by Collective Brutality's escalate discard and Haunted Dead's 'Discard two cards'. Cut on the pip and rate count: {2}{B}{B} is the deck's only double-black four-drop besides Bloodline Keeper, and Lingering Souls makes FOUR bodies across two casts for the same total mana. |
| Dauntless Cathar | CUT | Seeded and never adjudicated. A 3/2 Human body plus '{1}{W}, Exile this card from your graveyard: Create a 1/1 white Spirit creature token with flying' is two bodies from one card, the second arriving after the first was sacrificed - genuinely on-plan. Cut on the colour count: it is a white card requiring {2}{W} then {1}{W} in a deck with 5 white sources in 17 lands, and its slot went to Bloodline Keeper, which produces a body EVERY turn rather than once. |
| Cathar Commando | INCLUDE x2 in the SIDEBOARD (added at Phase 9) | Seeded and never adjudicated - the Challenger's absence 8. 'Flash. {1}, Sacrifice this creature: Destroy target artifact or enchantment' is a body, an outlet and an answer in one card. It is boarded rather than maindecked because the class it answers is matchup-dependent, but the sideboard count justifies two copies: per dossier.threat_profile the entire 305-card cube contains only 4 artifact answers and 2 enchantment answers against 24 artifacts and 25 enchantments, and the sideboard previously covered that with a single Angelic Purge. |
| Thalia, Heretic Cathar | CUT | Seeded and never adjudicated. 'Creatures and nonbasic lands your opponents control enter tapped' is a tempo tax on a 3/2 first-striking body. Cut on the rare budget: 5 of 5 spent on Skirsdag High Priest, The Meathook Massacre, Collective Brutality, Westvale Abbey and Bloodline Keeper - and this deck does not race, so buying a turn of tempo is worth less to it than an unbounded fodder engine. |
| Fiend Hunter | CUT | Seeded and never adjudicated. Read carefully it is actively anti-synergistic here: 'When this creature LEAVES the battlefield, return the exiled card to the battlefield under its owner's control' - so sacrificing Fiend Hunter, which this deck does to everything, hands the exiled creature straight back. In a list with 6 sacrifice outlets that is a liability, not a cost. |
| Restless Bloodseeker // Bloodsoaked Reveler | CUT (reason corrected at Phase 9) | Cut in a batch whose stated reason ('none pays off lifegain') was false for it - 'if you gained life this turn, create a Blood token' is exactly a lifegain payoff, and lifegain here is Blood Artist x2 on every death, Fleshtaker on every sacrifice and The Meathook Massacre on every opposing death, so the clause is live nearly every turn. Restated on what the payoff IS: a Blood token is an ARTIFACT, not a creature - it is not fodder for Falkenrath Torturer, not a body Skirsdag High Priest can tap, and not one of the five Westvale Abbey eats. The deck's binding constraint is creature bodies, and this makes none. |

### SKELETON SELECTION (Phase 5B Step 0)

- **Archetype family:** midrange — Locked thesis default_role = controller, but the deck deploys a proactive token board every turn and converts it through sacrifice rather than answering and durdling; control's 35-45% interaction band would crowd out the fodder the payoffs eat.
- **Chosen:** Sketch 2 — lens `most grindy value`
- **Judge grounds:** The only build whose remainder note and rationale keep tokens strictly as fodder - 'volume of expendable bodies to feed Skirsdag's cost and to keep dying for Blood Artist and Meathook triggers' - matching the locked thesis (drain plus fliers, not token attacks) exactly, and the only sketch that reports its free-sac-outlet count honestly (1, Falkenrath Torturer) without inflating it.
- **Rejected** (`most threat-dense / aggressive`, family midrange): Judge: thesis violation - its remainder note says the fodder exists partly 'to keep Skirsdag's tap-two cost fed while still leaving bodies to ATTACK with', and the remainder itself includes Intangible Virtue and Rally the Peasants, pump effects meant to make tokens attack. The locked thesis says 'Tokens are FODDER, not attackers'.
- **Rejected** (`most flexible toolbox`, family midrange): Judge: its keystone role for Skirsdag High Priest is not supported by its own quoted oracle text, and it counted Skirsdag inside 'Free no-mana sacrifice outlets: 2', overstating the build's outlet count by one.
- **Harvested from rejected builds:** Collective Brutality (from `most flexible toolbox`, Interaction/Disruption); Angelic Purge (from `most flexible toolbox`, Interaction/Disruption)
- **Weak keystones:** none

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:11  3:6  4:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.1: Skirsdag High Priest@0.6, The Meathook Massacre@0.9, Fleshtaker@0.8, Morbid Opportunist@0.8) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.8: Ghoulish Procession@0.8) → p=0.95 (need ≥ 0.75)
  PASS  outlet: 5 copies (effective 4.5: Angelic Purge@0.7, Fleshtaker@0.8) → p=0.81 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 49%  T2 96%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  OK        noncreature_permanents: Angelic Purge
  CONCEDED  stack: W/B fields no counterspell in this pool. Collective Brutality's 'Target opponent reveals their hand. You choose an instant or sorcery card from it. That player discards that card' is the nearest thing and it is maindecked, but it answers a card in hand, not a spell on the stack, so the class is genuinely conceded. The cost of mitigating is nil-but-impossible: there is no card to add.
  CONCEDED  graveyard: The core colours' graveyard answers are Soul-Guide Gryff at {4}{W} and Invasion of Innistrad's back face, both five-plus-mana propositions in a deck whose curve tops at four. Invasion of Innistrad sits in the sideboard. Maindecking a five-mana answer would cost a fodder slot, and this deck's engine is fodder volume.
```

- All gates passed on the first run and again after the Phase 9 repair: curve PASS (1:3 2:11 3:6 4:3 across 23 nonland), assembly PASS on all three declared roles - payoff 6 copies / 5.1 effective p=0.85, enabler 8 / 7.8 p=0.95, outlet 5 / 4.5 p=0.81 - and goldfish PASS (86% keepable, 89% three lands by turn 3, T1 play 49%, the highest of the four decks).
- A third role, 'outlet', was declared beyond the usual payoff/enabler pair. This is the only one of the four pipelines whose payoffs are inert without a distinct third class of card, and the shape judge's grounds for picking this build turned on the outlet count being reported honestly. Declaring it means the gate tests it: at p=0.81 it is the narrowest of the three, which is the correct signal for a deck whose only FREE repeatable outlet is a two-copy common.
- The Phase 9 repair changed the fuel picture rather than the plan. Bloodline Keeper replaced Mausoleum Guard, adding the pool's only unbounded free body source; Ghoulish Procession replaced Demonic Taskmaster, trading a forced upkeep sacrifice that ate the payoffs for a free 2/2 on any nontoken death including the opponent's.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Westvale Abbey is itself the flood outlet: '{5}, {T}, Pay 1 life: Create a 1/1 white and black Human Cleric creature token' converts surplus mana into fodder every turn, and its other mode converts five bodies into a 9/7. Bloodline Keeper's '{T}: Create a 2/2 black Vampire creature token with flying' does the same for free. Behind them: Haunted Dead x2 recurs for '{1}{B}, Discard two cards', Lingering Souls x2 flashes back for {1}{B}, and Fleshtaker's '{1}, Sacrifice another creature' is a one-mana sink. That is 6 of 23 nonland copies plus a land - the pre-grill entry said 6 while naming only 5, and the sixth is now real rather than an arithmetic slip. |
| screw | mitigation | 14 of the 23 nonland cards cost 2 or less and the deck's cheapest plays are also its best - Tragic Slip at {B}, Village Rites at {B}, Gather the Townsfolk at {1}{W}, Blood Artist at {1}{B}, Skirsdag High Priest at {1}{B}, Ghoulish Procession at {1}{B}. Goldfish on the FINAL list: 86% keepable, 89% three lands by turn 3, and a 49% turn-1 play rate - the highest of the four decks. Only 3 of 17 lands enter tapped (Sunlit Marsh x2, Evolving Wilds), also the lowest of the four. |
| decapitation | mitigation | The kill is redundant across three PERMANENT TYPES, which is the property that matters against targeted answers: creature (Skirsdag High Priest's 5/5 Demons and Bloodline Keeper's Vampires), enchantment (The Meathook Massacre, which creature removal cannot touch), and land (Westvale Abbey, which most decks in this cube cannot interact with at all, becoming a 9/7 flying lifelink indestructible haste creature). An opponent must answer three different permanent types. Honest correction the Challenger forced: these routes are redundant in permanent type but NOT in resource - Skirsdag taps bodies, Westvale Abbey eats five, and every drain trigger is itself a death, so all three draw on the same fodder pool and one sweeper starves all three at once. Bloodline Keeper is the answer to that specific exposure, because it refills the pool from an empty board without spending a card. |
| gas-out | mitigation | Morbid Opportunist draws off deaths the deck was causing anyway, and the pair that now guarantees it a trigger with no card spent is Bloodline Keeper plus Falkenrath Torturer: '{T}: Create a 2/2 black Vampire creature token with flying' makes a free body every turn and 'Sacrifice a creature:' converts it at instant speed, on demand, for no mana. (The pre-repair version of this entry credited Demonic Taskmaster for that clause - a card the same repair had cut two rows earlier. The Challenger caught it; the replacement is better than what it replaces, because a forced upkeep sacrifice cannot be held for the opponent's turn and this pair can.) Village Rites turns one dying body into two cards at instant speed; Haunted Dead x2 and Lingering Souls x2 are each two uses from one card; and Collective Brutality's escalate discard is partly refunded because Haunted Dead wants cards in the graveyard. Recounted on the surviving list: 7 of 23 nonland copies produce more than the one card spent - Village Rites, Morbid Opportunist, Lingering Souls x2, Haunted Dead x2, Fleshtaker. |
| raced | mitigation | Four removal copies (Tragic Slip x2, whose morbid is made unconditional by a free outlet, and Infernal Grasp x2) plus Collective Brutality's -2/-2 answer the opposing clock, and this deck's payoffs gain life while they drain: Blood Artist x2 is 'you gain 1 life' on every death, Fleshtaker gains on every sacrifice, Ormendahl has lifelink. The Meathook Massacre is the key card against a fast go-wide deck, and precisely: it is not one-sided - 'each creature gets -X/-X' is symmetric and at X=2 it kills this deck's own 1/1 tokens too - but it is PROFITABLY symmetric, because 'Whenever a creature you control dies, each opponent loses 1 life' is on the same permanent and already live when the ETB resolves, so every one of our own dying tokens drains 1 on the way out. |
| disruption-fizzle | accepted | There is no single critical turn to interact with - the drain accrues one death at a time - so the exposure is narrower than in the other three decks. Where it exists is Westvale Abbey: '{5}, {T}, Sacrifice five creatures' is a five-body, five-mana commitment at sorcery speed, and instant-speed removal on a creature mid-activation, or a sweeper in response, wastes the turn. Mitigating would mean holding up protection instead of deploying fodder, which costs the board width the activation needs - a real identity conflict. Two honest corrections to the earlier version of this entry. First, the '15 damage' figure quoted as the bound is the arithmetic ceiling, not the median: it requires Westvale Abbey plus BOTH Blood Artists plus The Meathook Massacre simultaneously, which at the thesis turn's 14 cards seen is roughly a 4% conjunction; the realistic bound is 5 damage on Meathook alone or 10 with one Blood Artist. Second, 'Ormendahl enters indestructible, so only exile or bounce touches it' is wrong - -X/-X and edict effects also answer an indestructible creature, and both exist in this pool (The Meathook Massacre, Killing Wave). |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Chittering Host | Has no mana cost - it is the meld of Graf Rats and Midnight Scavengers ('exile them, then meld them into Chittering Host'). It cannot be cast from a deck. |
| Decimator of the Provinces | Emerge is 'reduced by that creature's mana value' and a creature token's mana value is 0, so a board of fodder discounts {6}{G}{G}{G} by nothing - and those three green pips are outside the W/B core and outside the named splash candidates. Hard cast is {10}. |
| It of the Horrid Swarm | Same emerge arithmetic - a sacrificed token reduces {6}{G} by 0 - and the green pip is off-core. |
| Soul Separator | {3} plus a {5} activation is 8 mana across two turns for one reanimation. This pipeline sacrifices its bodies for one mana or for free; paying eight to get one back is the worst rate in the slice. |
| Archangel Avacyn // Avacyn, the Purifier | It transforms on the death of any non-Angel creature you control, and the back face 'deals 3 damage to each other creature and each opponent'. In a deck whose whole plan is making its own creatures die every turn, the transform is not optional - it fires immediately and wipes its own fodder. |
| Restoration Angel | A rare against a 5-slot budget contested by the pipeline's own payoffs; its blink saves a creature from a sacrifice this deck WANTS to happen. |
| Griselbrand | {4}{B}{B}{B}{B} is eight mana with four black pips, unreachable at this deck's land count; 'Pay 7 life: Draw seven cards' also fights Blood Artist's and Fleshtaker's lifegain plan for the same life total. |
| Emrakul, the Promised End | 'This spell costs {1} less to cast for each card type among cards in your graveyard' caps at 8 card types, so the floor is {5} - but this deck's graveyard fills with creature CARDS and little else, and creature tokens leaving play add no card type at all. |
| Tree of Perdition | A mythic whose '{T}: Exchange target opponent's life total with this creature's toughness' is a one-shot life-setting effect that neither makes a body, sacrifices one, nor pays off a death - it is orthogonal to every card in the pipeline. |
| Bruna, the Fading Light | {5}{W}{W} is seven mana and its cast trigger returns an Angel or Human creature card - this deck's dead bodies are overwhelmingly tokens, which never become graveyard cards. |
| Gisela, the Broken Blade | A mythic 4/3 flier with no sacrifice, death or token text; its meld partner costs seven. |
| Heartless Summoning | 'Creatures you control get -1/-1' kills every 1/1 token this pipeline makes on arrival, and the {2} discount applies only to creature SPELLS - not to the token-making sorceries and enchantments that are this deck's real fodder source. |
| Restless Bloodseeker // Bloodsoaked Reveler | Pulled out of a batch whose reason ('none pays off lifegain') was false for it. 'At the beginning of your end step, IF YOU GAINED LIFE THIS TURN, create a Blood token' is a lifegain payoff, and lifegain sources in this mainboard are Blood Artist x2 (on every death), Fleshtaker (on every sacrifice) and The Meathook Massacre (on every opposing creature death) - so the clause is live on essentially every turn the engine runs. Cut on what the payoff IS: a Blood token is an artifact, not a creature, so it is not fodder for Falkenrath Torturer, not a body for Skirsdag High Priest to tap, and not one of the five Westvale Abbey eats. Its back face's '{4}{B}: Each opponent loses 2 life' is a five-mana-per-activation drain against a deck that already drains 3 per death with Blood Artist x2 and Meathook out. |
| Brisela, Voice of Nightmares | Has no mana cost - it is the meld of Gisela, the Broken Blade and Bruna, the Fading Light. It cannot be cast from a deck. The sweep applied this reason correctly to Chittering Host and wrongly filed Brisela in a rate batch; corrected here. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.31 adj [MV 2.39 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  76.9%  prod  70.6%  gap  +6.3pp  [OK]
  W  demand  23.1%  prod  29.4%  gap  -6.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] base: cube_mainboard mainboard only
[PASS] copy_limits: commons/uncommons max 2 each across MB+SB combined, rares/mythics max 1 each. Angelic Purge is 1 MB + 1 SB = 2, at the common cap; Cathar Commando 2 SB, at the cap.
[PASS] rare_mythic_cap: 5 total MB+SB. Used exactly 5: Skirsdag High Priest (R, MB), The Meathook Massacre (M, MB), Collective Brutality (R, MB), Bloodline Keeper // Lord of Lineage (M, MB), Westvale Abbey // Ormendahl, Profane Prince (R, MB land). Invasion of Innistrad was cut from the sideboard at Phase 9 to free the slot for Bloodline Keeper.
[PASS] basics: Swamp 10 / Plains 3 - format-supplied, exempt from copy limits, not present in the cube list
[PASS] colour_usability: every nonland card returns a non-None effective_cost.best_mode against core_colors [W,B] with splash_colors []. No off-identity inclusions.
[PASS] splash: splash_colors = [] in the final deck; all three Phase 3 green candidates (Ulvenwald Mysteries, Garruk Relentless, Young Wolf) declined at FILL.
[PASS] deck_size: 40 mainboard (23 nonland + 17 land), 10 sideboard
```