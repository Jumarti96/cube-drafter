---
deck_name: "b-hand-lock-attrition"
cube_id: "ecl"
cube_slug: "ecl"
colors: "B"
format: "40-card"
built_at: "2026-08-12T04:18:51Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x18  Swamp
```

### CREATURES (11)

```
CMC  Card                    Qty   Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                             Rar
  1  Bile-Vial Boggart       x2    B      threat                                                                                                                                                                                                                                                                                                                                                                                                                                                           C
  3  Heirloom Auntie         x1    B      refuel                                                                                                                                                                                                                                                                                                                                                                                                                                                           C
  3  Shadow Urchin           x1    BR     refuel                                                                                                                                                                                                                                                                                                                                                                                                                                                           R
  4  Dawnhand Eulogist       x2    B      threat                                                                                                                                                                                                                                                                                                                                                                                                                                                           C
  4  Dream Seizer            x2    B      threat                                                                                                                                                                                                                                                                                                                                                                                                                                                           C
  4  Graveshifter            x1    B      refuel                                                                                                                                                                                                                                                                                                                                                                                                                                                           U
  6  Deceit                  x1    BU     hand attack                                                                                                                                                                                                                                                                                                                                                                                                                                                      M
  6  Emptiness               x1    BW     interaction                                                                                                                                                                                                                                                                                                                                                                                                                                                      M
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                    Qty   Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                             Rar
  2  Auntie's Sentence       x2    B      hand attack                                                                                                                                                                                                                                                                                                                                                                                                                                                      C
  2  Bogslither's Embrace    x2    B      interaction                                                                                                                                                                                                                                                                                                                                                                                                                                                      C
  2  Nameless Inversion      x2    B      interaction                                                                                                                                                                                                                                                                                                                                                                                                                                                      U
  2  Unbury                  x2    B      refuel                                                                                                                                                                                                                                                                                                                                                                                                                                                           U
  4  Perfect Intimidation    x2    B      hand attack                                                                                                                                                                                                                                                                                                                                                                                                                                                      U
```

### OTHER SPELLS (1)

```
CMC  Card                    Qty   Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                             Rar
  3  Mornsong Aria           x1    B      accelerant                                                                                                                                                                                                                                                                                                                                                                                                                                                       R
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                                                                                                                                                                                                                                                                                                                                                                                                                                          Rar
Dawnhand Dissident      x1    B      Vs the cube's 39 graveyard-interaction cards. '{T}, Blight 2: Exile target card from a graveyard' is repeatable only while other bodies exist to absorb counters - Dissident is a 1/2 and two counters kill it - so realistic throughput is one exile per turn at the cost of shrinking your own board. '{T}, Blight 1: Surveil 1' at half the cost is the mode you will use more often.                                                                         R
Mischievous Sneakling   x1    BU     Vs faster aggro; Flash lets a 2/2 ambush an attacker without spending a sorcery-speed turn. A vanilla body - it is here for the instant-speed blocking, nothing else.                                                                                                                                                                                                                                                                                            C
Blight Rot              x2    B      Vs 4-toughness threats. 'Put four -1/-1 counters on target creature' at instant speed outranges everything in the maindeck: Nameless Inversion caps at -3 toughness and evoked Emptiness at three counters. Run the full 2 copies - a 1-of is only found 33% of the time by turn 9.                                                                                                                                                                              C
Darkness Descends       x2    B      Vs token and go-wide decks ONLY. 'Put two -1/-1 counters on each creature' is the only mass creature effect in the pool castable off Swamps, but it is not one-sided: of this deck's 7 distinct creature names it kills Bile-Vial Boggart, Heirloom Auntie and Dream Seizer outright, leaving Shadow Urchin (3/4 to 1/2), Dawnhand Eulogist (3/3 to 1/1) and a hard-cast Deceit (5/5 to 3/3). Hold your own creatures in hand and cast them after it resolves.   U
Reaping Willow          x2    BW     Vs aggro, which is this deck's worst matchup. {1}{W/B}{W/B}{W/B} is cast as {1}{B}{B}{B} off Swamps; a 3/6 body walls almost every ground attacker in the cube, and '{1}{W/B}, Remove two counters from this creature: Return target creature card with mana value 3 or less from your graveyard to the battlefield' rebuys Bile-Vial Boggart, Heirloom Auntie or Shadow Urchin. Its lifelink is dead under Aria; the toughness is what you are buying.          U
Rooftop Percher         x2    C      Vs reanimator and flashback decks; 'exile up to two target cards from graveyards' on a 3/3 flier that also joins the clock. The 'gain 3 life' rider is dead whenever your own Aria is out.                                                                                                                                                                                                                                                                       C
```

## ANALYSIS

### DECK IDENTITY

Mono-black discard-and-attrition control, and the deck is labelled honestly rather than aspirationally. The brief called this archetype 'Draw-Denial Stax'; the Phase 9 grill established that Mornsong Aria does not deny draws in any meaningful sense - 'searches their library for a card, puts it into their hand' REPLACES a random draw with an unrestricted tutor at unchanged rate, so it is card-quality POSITIVE for the opponent, and its only true denial is against the cube's bulk-draw text (29 of 282 pool cards) and its lifegain (13 of 277). What the deck actually does: 5 copies of hand attack plus 5 removal spells trade one-for-one against a resource base the opponent refills at exactly one card per turn while Aria is out, 5 refuel copies that all function under the lock, and a 6-copy evasive clock closes. Two limits are stated rather than hidden. First, all 5 hand-attack copies are SORCERY-speed while Aria hands the opponent its tutored card at their own draw step - so the tutored card is reachable only after they have had a full main phase to use it, and only 3 of the 5 copies let the pilot choose what is taken. Second, Aria is a rare capped at one copy with no enchantment tutor in the pool, so under the assembly gate's own model it is seen 33% of the time by turn 9; the deck is therefore built to win WITHOUT it and Aria is recorded as an accelerant, not an engine.

### THE HONEST VERDICT ON "DRAW-DENIAL STAX"

This deck was built to the literal archetype brief, and the build process disproved the brief. That is worth stating plainly rather than burying, because it is the most useful thing this list can tell you.

Read Mornsong Aria's oracle text again:

> "Players can't draw cards or gain life. At the beginning of each player's draw step, that player loses 3 life, searches their library for a card, puts it into their hand, then shuffles."

**It does not deny the opponent cards.** It replaces a random draw with an unrestricted tutor, at exactly the same rate — one card per turn. For the opponent that is card *quality* going up. The only draw it genuinely denies is bulk draw: 29 of the 282 pool cards (10.3%) have draw text beyond the draw step, and 13 of 277 have lifegain. Everything else about the card is a **symmetric 3-life clock**.

Three consequences the list is built around:

| Claim in the brief | What the oracle text actually supports |
|---|---|
| "Every card stripped is a permanent loss" | Permanent loss of card *count*, not card *quality* — they replace it with a chosen card |
| "Turns every draw step into a tutor" | True, and it does so **for both players** |
| "A 3-life clock" | True, and it points at **you** as well |

### THE TIMING PROBLEM WITH HAND ATTACK

All five hand-attack copies are **sorcery-speed** — Auntie's Sentence and Perfect Intimidation are Sorceries, and Deceit is a creature ETB. Aria hands the opponent their tutored card at *their* draw step, immediately before *their* main phase. So the card Aria gives them is never strippable on the turn they get it. You can only take it a full turn later, and only if they chose not to cast it.

There is no instant-speed hand attack castable off Swamps anywhere in this cube, so this is not a building error — it is a property of the pool. Plan around it: strip *before* Aria lands, not after.

And of the five copies, only three let you pick:

| Card | Qty | Who chooses | Restriction |
|---|---|---|---|
| Deceit (evoked) | 1 | **You** | Any nonland card — the only true Thoughtseize |
| Auntie's Sentence | 2 | **You** | Nonland **permanent** only — whiffs on a hand of spells |
| Perfect Intimidation | 2 | Opponent | None, but it takes **two** cards |

### THE EVOKE TRICK — TWO PREMIUM SPELLS FOR TWO MANA

The two mythics in this deck are both six-mana creatures that this deck almost never hard-casts. Both have Evoke costs made entirely of hybrid pips, and hybrid pips paid with black mana satisfy their own "if {B}{B} was spent" clauses:

- **Deceit**, Evoke `{U/B}{U/B}` = **two Swamps** → "target opponent reveals their hand. You choose a nonland card from it. That player discards that card."
- **Emptiness**, Evoke `{W/B}{W/B}` = **two Swamps** → "put three -1/-1 counters on up to one target creature."

A two-mana Thoughtseize and a two-mana kill-anything-with-three-toughness, in a mono-black deck, off basic lands. These are the best rates in the entire black pool and neither is obvious from the printed mana cost. Note the land count of 18 is computed from their *printed* mana value of 6, so the real curve is lower than the audit shows and 18 lands is deliberately conservative.

### WHAT THIS DECK IS IN 60% OF GAMES

Aria is a rare, capped at one copy, and **nothing in the 282-card pool tutors for an enchantment in black**. Under the assembly gate's own model it is drawn by turn 9 only **33%** of the time — 22.5% by turn 3, when a three-mana enchantment actually wants to land.

So the deck is built to win without it, and it does: five hand-attack copies, five removal spells, five refuel cards and a four-copy evasive clock all clear the assembly gate independently. When Aria does arrive it is close to unanswerable — the whole cube has **four** enchantment answers, all G/UG/W — and it should be cast only from ahead on board.

**The blunt version: in most games this is a mono-black discard-midrange deck, not a stax deck.** That is a perfectly good deck. It just isn't the one the archetype name promises, and no list built from this pool can be.

### REFUELLING UNDER YOUR OWN LOCK

The subtle trap, and the one the grill actually broke this deck on: *surveil is not card advantage*. Heirloom Auntie's "surveil 1" and Dawnhand Dissident's "{T}, Blight 1: Surveil 1" put cards in the graveyard or back on top — they add **nothing to your hand**. An earlier version of this list had exactly one card in 22 that put a card into hand, and it was the 33%-of-games Aria.

The fix is **Unbury** — `{1}{B}` instant, "Return target creature card from your graveyard to your hand," or two that share a creature type. Not a draw, so it works under the lock. Mode two is live here because **Heirloom Auntie and Dawnhand Eulogist are both Warlocks**, as was the cut Taster of Wares.

The full set of things that still function under Aria: Unbury (return to hand), Heirloom Auntie (surveil), Shadow Urchin (impulse exile — "you may play those cards" is not drawing), Dawnhand Eulogist (mill), and Aria's own tutor.

### PLAY PATTERN

Turn 1 Bile-Vial Boggart. Turn 2 evoked Deceit taking their best nonland card, or Auntie's Sentence. Turns 3–5 trade removal for their threats and keep stripping. Deploy Dream Seizer and Dawnhand Eulogist as the clock. **Cast Aria only when you are ahead on board and life** — against a fast start, never cast it at all. Aria is a finisher you choose, not an opener.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:2  2:8  3:3  4:7  6:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  hand_attack: 5 copies → p=0.88 (need ≥ 0.75)
  PASS  removal: 5 copies → p=0.88 (need ≥ 0.75)
  PASS  clock: 4 copies → p=0.81 (need ≥ 0.75)
  PASS  refuel: 5 copies (effective 4.2: Heirloom Auntie@0.5, Shadow Urchin@0.7) → p=0.83 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 37%  T2 94%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mass removal in the maindeck. The deck answers a wide board by trading one-for-one with Nameless Inversion and evoked Emptiness and by chump-blocking with Bile-Vial Boggart, whose death then puts a -1/-1 counter on an attacker. Darkness Descends x2 covers the class from the sideboard, but the concession is real rather than nominal: it kills 3 of this deck's 7 distinct creature names as well, so it is a token-matchup board-in, not a general answer.
  OK        single_large_threat: Bogslither's Embrace, Nameless Inversion, Emptiness
  CONCEDED  noncreature_permanents: The cube's artifact answers are BR/R/UG/W and its enchantment answers are G/UG/W only - mono-black has no answer to either. The deck substitutes proactive hand attack: Perfect Intimidation x2, Auntie's Sentence x2 and Deceit take the permanent before it is cast. Auntie's Sentence is the only one restricted to nonland PERMANENT cards, so it is the copy that actually targets this class.
  CONCEDED  stack: Black has no counterspell in this pool. The 5 hand-attack copies substitute by taking the spell from the hand - but all 5 are sorcery-speed, so they cannot answer anything already on the stack, and they cannot reach a card Mornsong Aria tutored until the opponent has had a main phase with it.
  CONCEDED  graveyard: No maindeck graveyard interaction; Dawnhand Dissident and Rooftop Percher x2 answer the cube's 39 graveyard cards from the sideboard rather than taxing a maindeck that must fit 10 interaction slots.
```

- No WARN flags were raised on the final list: curve, assembly, goldfish and coverage all returned PASS.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana has real sinks: Bogslither's Embrace's 'blight 1 or pay {3}' branch buys the exile without spending a creature, Deceit and Emptiness are hard-cast as a 5/5 and a 3/5 for six instead of evoked for two, Unbury's second mode returns two creature cards rather than one, and Mornsong Aria replaces every draw step with 'searches their library for a card' so a flooded topdeck becomes a chosen one. The Gnarlbark Elm 'repeatable removal' claim that appeared here pre-repair was withdrawn under finding F11 and the card was cut. |
| screw | mitigation | Stated precisely after finding F8. 10 of 22 nonland cards cost two mana or less, and unlike Deck 1 most of them are what a control deck wants from a slow hand - Nameless Inversion x2, Bogslither's Embrace x2, Auntie's Sentence x2 and Unbury x2 all trade or rebuy on two lands, and Bile-Vial Boggart x2 gives a turn-1 body so that Bogslither's Embrace's blight branch is payable from turn 2 rather than stranded until turn 3. Deceit and Emptiness are both castable for {B}{B} via Evoke on turn 2. The goldfish simulation returns 88% keepable hands and 92% for three lands by turn 3 on 18 lands. |
| decapitation | mitigation | Aria is the named build-around and this deck deliberately does not require it - under the gate's own model it is seen 33% of the time by turn 9, so the kill is carried by 5 hand-attack copies (p=0.88), 5 removal copies (p=0.88), a 4-copy clock (p=0.81) and 5 refuel copies (p=0.79), every one of which clears the assembly gate independently. When Aria does resolve it is near-unanswerable: the whole cube contains only 4 enchantment answers (Keep Out, Pyrrhic Strike, Unforgiving Aim, Wistfulness), all G/UG/W. |
| gas-out | mitigation | REPAIRED in response to finding F4, which correctly marked the pre-repair entry UNSATISFIED. The problem was that surveil adds no card to hand, so only 1 of 22 cards generated real advantage. The fix was Unbury x2 - '{1}{B} Instant. Return target creature card from your graveyard to your hand' or 'Return two target creature cards that share a creature type' - which is not a draw and therefore functions under the anchor, and whose two-for-one mode is live because Heirloom Auntie x2 and Dawnhand Eulogist x2 are both Warlocks. Combined with Heirloom Auntie's surveil, Shadow Urchin's impulse exile and Aria's tutor, the refuel role now assembles at 5 copies (effective 3.7, p=0.79). |
| raced | accepted | This remains the deck's worst matchup and mitigating it fully would cost the archetype. Its creatures are 1/1s, 3/2s and 3/3s that block once, its curve tops at MV 4 with two evoke-or-six cards, and the goldfish turn is 9. Making it fast enough to beat aggro would mean cutting the hand attack for bodies - which is Deck 1, a different archetype. The concrete pilot rule is that against a fast start Aria must NEVER be cast, because 3 self-inflicted life per turn on top of a real clock simply loses. In response to finding F12 the sideboard now devotes 5 of 10 slots to this matchup rather than 3: Reaping Willow x2 (a 3/6 wall that also rebuys a dead body), Blight Rot x2 at the full copy limit rather than a 1-of, and Mischievous Sneakling for a Flash block. The deck still accepts being an underdog to genuine aggro. |
| disruption-fizzle | mitigation | There is no single critical turn to interact with - the plan is 5 incremental hand-attack spells and 5 removal spells, all one-for-one, none dependent on another resolving first. The one card that could be answered on sight, Aria, is protected by the pool itself: 4 enchantment answers cube-wide, none castable in B, R or U. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Chaos Spewer | 5/4 for three is the best aggro rate in the pool, but this build is the controller and its blight 2 costs a creature from a list that runs few of them. |
| Gutsplitter Gang | 'you may blight 2. If you don't, you lose 3 life' stacks a second 3-per-turn on top of Aria's, halving the pilot's own clock - fatal to a plan that needs to reach turn 9. |
| Retched Wretch | A 4/2 recursive attacker is an aggro card; this build wants blockers with toughness, not two-toughness beaters. |
| Creakwood Safewright | Enters as a 2/2 and needs an Elf card in the graveyard to grow; this build runs only 4 Elf cards, so the growth clause is unreliable here. |
| Iron-Shield Elf | A 3/1 body whose indestructible ability taps it and does not save it from the -1/-1 counters that dominate this cube. |
| Blighted Blackthorn | 'you draw a card and lose 1 life' - the draw is blanked by my own Aria, leaving a 5-mana 3/7 that only costs me life. |
| Moonglove Extractor | 'you draw a card and lose 1 life' on attack - blanked by Aria. |
| Puca's Eye | Both an ETB 'draw a card' and a draw activation; entirely blanked by Aria. |
| Scarblade Scout | 2/2 Lifelink; Aria states 'Players can't... gain life', so the lifelink is blank and this is a vanilla 2/2. |
| Bitterbloom Bearer | Mythic flier engine, but 'At the beginning of your upkeep, you lose 1 life' stacks with Aria's 3 to make the pilot's clock 4 per turn against the opponent's 3 - the opposite of what an attrition plan needs. |
| Moonshadow | A {B} 7/7 Menace that enters with six -1/-1 counters; clearing them needs permanent cards hitting my graveyard, and this build has no discard outlet or self-mill engine. |
| Twilight Diviner | Rare 3/3 whose copy trigger needs creatures entering from a graveyard; this list has no reanimation. |
| Gloom Ripper | Rare {3}{B}{B} whose pump scales with Elves controlled plus Elf cards in the graveyard; this list runs 4 Elf cards, so X is typically 1. |
| Champion of the Weird | Rare 5/5 requiring 'behold a Goblin and exile it' as an additional cost; this list runs 1 Goblin, so the cost is usually unpayable. |
| Boggart Mischief | 'Whenever a Goblin creature you control dies, each opponent loses 1 life' - this list runs 1 Goblin and the cube contains zero sacrifice outlets, so the trigger has no enabler. |
| Bloodline Bidding | 8 mana with convoke; this build has neither the creature count to convoke it nor a graveyard full of one type. |
| Dose of Dawnglow | 5-mana reanimation with no high-value target in this list and no self-mill to enable it. |
| Unbury | Returns creature cards to hand, but this build's creatures are cheap blockers not worth a card to rebuy. |
| Graveshifter | A 4-mana 2/2 that returns a creature card - too little board impact for a deck under its own 3-per-turn clock. |
| Stoic Grove-Guide | A 5-mana 5/4; the curve cannot afford a five-drop body that does not affect the board on arrival. |
| Springleaf Drum | Mono-black needs no fixing, and tapping a creature is a real cost for a deck that wants blockers untapped. |
| Evolving Wilds | Fetches a basic tapped; strictly worse than a Swamp in a mono-colour deck. |
| Blood Crypt | A rare dual; mono-black needs no fixing and every rare slot is budgeted at 5 across MB and SB. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.05   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.73 adj [MV 3.05 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard - every card verified present in the working pool by exact name.
[PASS] copy_limits: Commons and uncommons capped at 2, rares and mythics at 1; the Phase 5C validator cross-checked every combined mainboard+sideboard count against cube_search.get_max_copies and returned PASS.
[PASS] rare_mythic_budget: 5 of the maximum 5, fully spent: Mornsong Aria (rare, MB), Shadow Urchin (rare, MB), Deceit (mythic, MB), Emptiness (mythic, MB), Dawnhand Dissident (rare, SB). The Phase 9 repair swapped Taster of Wares (rare) for Emptiness (mythic), keeping the total unchanged.
[PASS] basics: 18 Swamp - format-supplied and exempt from copy limits.
[PASS] colour: All 19 distinct nonland cards return a usable 'cast' mode from effective_cost.best_mode against core_colors ['B']; the five hybrid cards (Shadow Urchin {2}{B/R}, Deceit {4}{U/B}{U/B} with Evoke {U/B}{U/B}, Emptiness {4}{W/B}{W/B} with Evoke {W/B}{W/B}, Reaping Willow {1}{W/B}{W/B}{W/B}, Mischievous Sneakling {1}{U/B}) are cast entirely off Swamps, so splash_colors is empty. Both Incarnations' 'if {B}{B} was spent to cast it' clauses are satisfied by paying their hybrid pips with black mana.

[PASS] 1a mainboard size: 40 (want 40)
[PASS] 1b sideboard size: 10 (want 10)
[PASS] 2 exact-name membership: all 21 names found
[PASS] 3 copy limits: all within card_pool_rules
[PASS] 3b rare+mythic budget: 5/5 -> ['Dawnhand Dissident', 'Deceit', 'Emptiness', 'Mornsong Aria', 'Shadow Urchin']
[PASS] 4 colour usability (best_mode): all nonland castable in B; off-normal modes: {'Bile-Vial Boggart': 'cast', 'Unbury': 'cast', 'Nameless Inversion': 'cast', "Bogslither's Embrace": 'cast', "Auntie's Sentence": 'cast', 'Heirloom Auntie': 'cast', 'Graveshifter': 'cast', 'Shadow Urchin': 'cast', 'Mornsong Aria': 'cast', 'Perfect Intimidation': 'cast', 'Dream Seizer': 'cast', 'Dawnhand Eulogist': 'cast', 'Deceit': 'cast', 'Emptiness': 'cast', 'Dawnhand Dissident': 'cast', 'Rooftop Percher': 'cast', 'Darkness Descends': 'cast', 'Blight Rot': 'cast', 'Reaping Willow': 'cast', 'Mischievous Sneakling': 'cast'}
[PASS] 5 splash cap: splash_colors empty; 5 hybrid cards castable off Swamps with no splash needed
```
