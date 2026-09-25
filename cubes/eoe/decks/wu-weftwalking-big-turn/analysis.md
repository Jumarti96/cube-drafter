---
deck_name: "wu-weftwalking-big-turn"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WU"
format: "40-card"
built_at: "2026-08-04T14:12:12Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
9x Island                    basic
6x Plains                    basic
2x Idyllic Beachfront        ({T}: Add {W} or {U}.)
```

### CREATURES (10)
```
CMC  Card                      Qty   Color  Role                                             Rar
  1  Illvoi Galeblade          x2    U      fuel (no-target 1-drop / flash blocker)          C
  2  Station Monitor           x2    WU     payoff (second-spell -> flier)                   U
  3  Cosmogrand Zenith         x1    W      payoff (conditional board engine)                M
  3  Uthros Psionicist         x2    U      engine (cost reducer)                            U
  4  Sunstar Lightsmith        x2    W      engine (payoff + draw)                           U
  5  Exalted Sunborn           x1    W      finisher (token doubler / evasive body)          M
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                      Qty   Color  Role                                             Rar
  1  Honor                     x2    W      fuel (cantrip + counter)                         U
  2  Consult the Star Charts   x1    U      card flow (selection)                            R
  2  Divert Disaster           x2    U      interaction (soft counter)                       C
  2  Mental Modulation         x1    U      interaction (tempo cantrip)                      C
  3  Emergency Eject           x1    W      interaction (unconditional removal)              U
  3  Unravel                   x2    U      interaction (hard counter)                       U
```

### OTHER SPELLS (4)
```
CMC  Card                      Qty   Color  Role                                             Rar
  1  Cryoshatter               x1    U      interaction (one-mana permanent answer / fuel)   C
  3  Banishing Light           x2    W      interaction (catch-all exile)                    C
  6  Weftwalking               x1    U      engine (refuel + free first spell)               M
```

## SIDEBOARD (10)
```
Card                      Qty   Color  Role / When to board in                          Rar
Annul                     x2    U      SB: counter artifact/enchantment spell           U
Focus Fire                x2    W      SB: one-mana combat removal, scales with board   C
Seam Rip                  x2    W      SB: cheap exile MV<=2                            U
Dauntless Scrapbot        x2    C      SB: graveyard exile                              U
Lost in Space             x1    U      SB: instant-speed tuck                           C
Beyond the Quiet          x1    W      SB: sweeper                                      R
```

## ANALYSIS

### DECK IDENTITY

WU Weftwalking Big-Turn. A controller that answers the early game with nine cheap interaction spells - Unravel and Divert Disaster on the stack, Banishing Light and Emergency Eject on the battlefield - while quietly pre-deploying its payoffs. Cosmogrand Zenith, Station Monitor and Sunstar Lightsmith all read on the second spell each turn, and Uthros Psionicist makes that second spell cost {2} less, so the deck converts its own answer-heavy turns into board and cards. Weftwalking is the upgrade rather than the plan: shuffling into seven fresh cards and making the first spell of every turn free lets a deck already holding three second-spell permanents cast three or four spells a turn. Exalted Sunborn doubles every token the engine has made and closes in the air.

### THE BUILD DOES NOT BET ON ITS OWN NAMESAKE

This is the Weftwalking deck, and the single most important decision in it is that **it is built to win without Weftwalking.**

The reasoning is arithmetic, not taste. Weftwalking is a mythic, so the pool rules allow exactly one copy. A 40-card deck finds a specific 1-of by turn 9 with probability **0.375 on the play** (15 cards seen) and **0.40 on the draw** (16 cards). And its own text works against leaning on it:

> "When this enchantment enters, if you cast it, shuffle your hand and graveyard into your library, then draw seven cards. The first spell **each player** casts during each of their turns may be cast without paying its mana cost."

Two clauses, two problems. The shuffle means **any payoff you were holding for the big turn is gone** — so the payoffs have to already be on the battlefield. And the free-spell clause says *each player*: resolving it hands the opponent a free spell on every one of their turns for the rest of the game.

So the payoff slot runs at 17.4% against a 5–10% control band. That deviation is the whole thesis: Cosmogrand Zenith, Station Monitor ×2 and Exalted Sunborn are deployed early and give a real clock **100%** of the time, and Weftwalking upgrades that clock the under-40% of games it shows up.

### WHAT A WEFTWALKING TURN ACTUALLY LOOKS LIKE

Assume Cosmogrand Zenith and a Station Monitor are already down, and Weftwalking resolves on turn 6 into seven fresh cards.

| Spell | Cost paid | Why |
|---|---|---|
| 1st | **0** | Weftwalking: first spell each turn is free |
| 2nd | cost − up to {2} | Uthros Psionicist discounts the second spell — but only its generic part, so 10 of 23 cards get the full {2} and 6 get only {1} |
| 3rd | full | — |

The second spell of that turn is what fires Cosmogrand Zenith (two Soldiers, doubled to four by Exalted Sunborn), Station Monitor (a Drone, doubled to two) and Sunstar Lightsmith (a counter and a card). With seven cards in hand and every point of mana free for spells two-and-onward, three resolutions a turn is routine.

### THE ONE CLASS THIS BUILD DOES NOT CONCEDE

Both other builds of this archetype concede the stack — the tempo deck because holding mana open contradicts its clock, the go-wide deck because every counterspell in the pool is blue and it has five blue sources. This one covers it: **Unravel ×2 and Divert Disaster ×2.**

Unravel is better here than it looks anywhere else in the cube:

> "Counter target spell. **If the amount of mana spent to cast that spell was less than its mana value, you draw a card.**"

Cost reduction and free casts are what this entire archetype does — on both sides of the table. Against a Warp cast, a kicker-declined spell, or anything discounted, Unravel replaces itself. It is also the answer to the symmetry problem: the free spell Weftwalking hands your opponent each turn is, by definition, a spell whose mana value exceeds the mana spent on it.

### WHY 17 LANDS WHEN THE MODEL SAYS FEWER

`land_target` recommends fewer, driven by a negative adjustment from an acceleration count of 7. My first justification for overriding it was that all seven were cantrips — **and that was simply wrong**, which the self-grill caught: the tagger counts Divert Disaster ×2 and Emergency Eject as *ramp*, and does not count Mental Modulation or Consult the Star Charts at all.

The correct ground is a different one, and it is on the cards themselves. Emergency Eject reads "**Its controller** creates a Lander token" — that land goes to the *opponent*. Divert Disaster reads "Counter target spell unless its controller pays {2}. **If they do**, you create a Lander token" — my Lander only exists in the branch where my counterspell was paid through. Neither is acceleration I can sequence around; one of them is acceleration for the other player.

This deck has the highest top end of the three and three double-pip costs (Unravel `{1}{U}{U}` ×2, Weftwalking `{4}{U}{U}`, Exalted Sunborn `{3}{W}{W}`). The 17th land stays, the deviation is one card, and the mana audit passes at 17/16.

### THE DOUBLE-WHITE PROBLEM, AND ITS ESCAPE HATCH

Exalted Sunborn costs `{3}{W}{W}` and this deck has **8 white sources**. That is a genuinely awkward cast. The reason it is still here is its Warp cost of `{1}{W}` — one white pip, deployable long before `{3}{W}{W}` is realistic, and a Warp cast banks the card for a full cast later. It is also the one payoff that must be on the battlefield before Weftwalking resolves, which is exactly what a cheap early deployment buys.

### THE HOLE THE GRILL FOUND, WHICH WAS NOT THE MYTHIC

Everyone looks at Weftwalking and worries about the 1-of. The self-grill's sharpest finding was somewhere else entirely: **every single one-mana card in the deck was fuel.** Honor, Mental Modulation, Illvoi Galeblade — six slots, not one of them an answer. The cheapest permanent answer to a creature was Banishing Light at three mana, in a deck that formally accepts losing races and does not intend to win before turn 9.

Cryoshatter fixes it for one blue mana:

> "Enchant creature. Enchanted creature gets -5/-0. When enchanted creature becomes tapped or is dealt damage, destroy it."

It blanks an attacker the turn it lands, kills it the next time it taps, and it is a legal second spell on a turn where {U}{U} is being held for Unravel. That last property is the one that matters — the controller's permanent tension is that holding up a counterspell and casting a second spell want the same mana, and a one-mana answer resolves it.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:5  2:6  3:8  4:2  5:1  6:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 5 copies → p=0.88 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.1: Honor@0.9, Honor@0.9, Weftwalking@0.5, Cryoshatter@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 65%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Cosmogrand Zenith, Station Monitor, Uthros Psionicist, Sunstar Lightsmith
  OK        single_large_threat: Banishing Light, Emergency Eject, Cryoshatter, Unravel, Divert Disaster, Mental Modulation
  OK        noncreature_permanents: Banishing Light, Emergency Eject, Unravel, Divert Disaster
  OK        stack: Unravel, Divert Disaster
  CONCEDED  graveyard: Zero mainboard graveyard interaction. This is the one build of the three that spends its mainboard slots on the stack instead, with Unravel x2 and Divert Disaster x2 answering spells before they resolve; a maindeck graveyard slot would have to come out of that counterspell suite, which is what makes the Weftwalking turn survivable. Dauntless Scrapbot x2 answers the class from the sideboard against the cube's 31 graveyard cards.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This is the build that wants extra lands most: Weftwalking at MV6 and Exalted Sunborn at MV5 are genuine mana sinks, and Consult the Star Charts scales directly with flood - 'Look at the top X cards of your library, where X is the number of lands you control', so the eighth land makes it dig eight deep, and its Kicker {1}{U} turns surplus mana into a second card. Sunstar Lightsmith x2 draws on every second spell, and Honor, Mental Modulation and Consult the Star Charts all replace themselves. |
| screw | mitigation | 19 of the 23 nonland cards cost three mana or less, so a two-land hand casts real spells: Illvoi Galeblade {U} and Cryoshatter {U} at one mana, Mental Modulation at {U} on my turn, and Station Monitor, Divert Disaster and Consult the Star Charts at two. Illvoi Galeblade requires no target at all, so it is castable into a genuinely empty board. Honor was named here in an earlier draft and has been struck (Challenger finding F7): its oracle is 'Put a +1/+1 counter on target creature', so it is uncastable with no creature in play - the same reason the assembly check already discounts it to weight 0.9. The goldfish sim reports 86% keepable hands, 95% playing a spell by turn 2 and 88% hitting a third land by turn 3. |
| decapitation | mitigation | Weftwalking being answered on sight is survivable by construction - that is the entire reason the payoff slot runs 7.4pp over its band. The second-spell trigger lives on 3 distinct cards across 5 copies that are already on the battlefield (Cosmogrand Zenith, Station Monitor x2, Sunstar Lightsmith x2), assembly reports p=0.88 of seeing one by turn 9, and the deck's clock is the accumulated token board plus Exalted Sunborn rather than the enchantment. Losing Weftwalking costs the fast kill, not the game. |
| gas-out | mitigation | 5 distinct cards / 9 copies are self-replacing or net-positive: Honor x2, Mental Modulation x1 (both 'Draw a card'), Sunstar Lightsmith x2 (recurring draw on every second spell), Consult the Star Charts x1 (selection that scales with lands, and draws two if kicked) and Illvoi Galeblade x2 ('{2}, Sacrifice this creature: Draw a card'). The copy count was stated as 8 in an earlier draft and recounted to 9 by the Challenger. Weftwalking itself is the emergency refuel - 'shuffle your hand and graveyard into your library, then draw seven cards' is at its best precisely when the hand is empty, which is the state this failure mode describes. |
| raced | accepted | With a 6-mana centrepiece, a MV5 finisher and a thesis turn of 9, this build is the slowest of the three and it loses to the cube's fastest starts. Mitigating would mean cutting counterspells for cheap blockers, which unmakes the one thing this build has that the other two do not: an uncontested stack. What the Phase 9 repair DID fix is that the deck previously had zero one-mana answers - Cryoshatter now gives it one that is also second-spell fuel. Beyond that, the interaction is cheap (Mental Modulation at {U} on my turn, Divert Disaster at {1}{U}) and the payoff bodies are defensive: Uthros Psionicist and Cosmogrand Zenith are both 2/4, and Station Monitor's Drones block fliers against a cube whose largest threat class is 56 evasive cards. The sideboard holds Focus Fire x2 and Seam Rip x2 for the games where more is needed. |
| disruption-fizzle | mitigation | The Weftwalking turn meeting a counterspell is the defining risk, and the deck holds its own counterspells for exactly that exchange: Unravel x2 and Divert Disaster x2 are 4 of the 23 nonland cards, and Unravel's rider draws a card when it counters a cost-reduced spell. Beyond protecting the turn, the turn is not all-or-nothing: because the payoffs trigger on the SECOND spell EACH TURN rather than on a chain, one countered spell costs one turn of triggers and the next turn re-arms. Uthros Psionicist's {2} discount makes the retry affordable immediately. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Specimen Freighter | Cut from the sideboard in the Phase 9 repair. {5}{U} 4/7 returning up to two non-Spacecraft creatures to hand reads like a grindy top end, but the Challenger showed it was the wrong shape for the only pressure the sideboard is asked to answer: the 'raced' failure mode is ACCEPTED and points at the board, and a MV6 card cannot answer a fast start. Its Station cost ('Tap another creature you control') also competes with blocking, and its 9+ threshold is unreachable in a deck whose largest power is 4. |
| Lost in Space (2nd copy) | Trimmed from 2 to 1 in the Phase 9 repair to make room for Focus Fire x2. {3}{U} instant-speed tuck is the cleanest answer to a recurring permanent, but at MV4 it was the next-weakest sideboard card against speed after Specimen Freighter. |
| Mental Modulation (2nd copy) | Cut to 1 in the Phase 9 repair for Cryoshatter. The Challenger's finding was that all six of the deck's one-mana-or-effectively-one-mana slots were FUEL and the cheapest permanent answer to a creature was MV 3 - a real hole for a deck with thesis turn 9 that formally accepts losing races. Mental Modulation taps for one combat; Cryoshatter's -5/-0 is permanent and it destroys the creature on its next tap. One copy of each is the compromise: the cantrip is still there, and now so is an answer. |
| Beyond the Quiet (mainboard) | RARE, kept at 1 copy in the SIDEBOARD only. 'Exile all creatures and Spacecraft' is the cube's strongest sweeper and is in-colour, but 10 of this deck's 23 nonland cards are creatures (Cosmogrand Zenith, Station Monitor x2, Exalted Sunborn, Uthros Psionicist x2, Sunstar Lightsmith x2, Illvoi Galeblade x2), and the shape judge flagged exactly this in the rejected attrition sketch. It boards in only when the removal-heavy configuration is drawn and the board is already lost. |
| Quantum Riddler | MYTHIC cut. A 4/6 flier for {3}{U}{U} with Warp {1}{U} and a real draw engine. Two reasons: the rare/mythic budget is at 5 of 6 with Weftwalking, Cosmogrand Zenith, Exalted Sunborn, Consult the Star Charts and Beyond the Quiet; and its clause 'As long as you have one or fewer cards in hand' is directly anti-synergistic with a Weftwalking turn that refills to seven. The most obvious swap-in if you cut Weftwalking itself. |
| Starwinder | RARE. {5}{U}{U} 7/7 with Warp {2}{U}{U} and 'Whenever a creature you control deals combat damage to a player, you may draw that many cards' - a genuine finisher that turns the token board into a draw engine. Cut on cost: a second double-blue card at MV7 in a deck already holding Weftwalking at {4}{U}{U} and Unravel x2 at {1}{U}{U}, on 11 blue sources, is one double-pip too many. |
| Astelli Reclaimer | RARE. {3}{W}{W} 5/4 flier whose ETB returns a noncreature nonland permanent from the graveyard with MV up to the mana spent - it could rebuy Weftwalking or Banishing Light. Excluded because it is a SECOND {W}{W} cost on 8 white sources, and because Weftwalking's own trigger shuffles the graveyard into the library, so the two cards actively fight each other. |
| Starfield Vocalist | RARE. 'If a permanent entering the battlefield causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time.' Zero text here: all five second-spell payoff copies are CAST triggers, not permanent-ETB triggers, so it doubles none of them. This is the third build in which it looked like a fit and was not. |
| The Endstone | MYTHIC. 'Whenever you play a land or cast a spell, draw a card' is the strongest possible engine for a deck built around casting several spells per turn. Excluded on the second clause: 'At the beginning of your end step, your life total becomes half your starting life total, rounded up' sets you to 10 and keeps you there, which is untenable for a build whose 'raced' failure mode is already accepted rather than mitigated. At MV7 it also lands a turn after the deck's stated thesis turn. |
| Illvoi Infiltrator | {2}{U} 1/3, unblockable on double-spell turns and drawing on connect - the Phase 9 Challenger raised it as the only card in the pool that is simultaneously a second-spell payoff, an unblockable clock and repeating card flow, and noted that unlike this deck's four payoffs it needs only the turn's second spell rather than a surviving board. Excluded because a 1-power creature is not a clock for a deck whose kill is a doubled token army, and the payoff slot is deliberately reserved for permanents that make BOARD. The strongest swap-in if you want a second angle of attack. |
| Gigastorm Titan | {4}{U} 4/4 costing {3} less if you have already cast a spell this turn - the Phase 9 Challenger raised it as a cost-dimension second-spell payoff and the second-largest body available to the deck, {2}{U} as your second spell or {U} with Uthros Psionicist out. Excluded because it can only ever be the beneficiary of a multi-spell turn, never the enabler, and at printed MV5 it pushes an avg MV already at 2.61 higher in a deck already holding 17 lands against a computed 16. |
| Brightspear Zealot | {2}{W} 2/4 vigilance, a 4/4 on double-spell turns. A fine defensive body for a controller, but it produces neither a token for Exalted Sunborn to double nor a card, and the payoff slot is already 7.4pp over band on the strength of cards that do. |
| Mouth of the Storm | {6}{U} 6/6 flier with ward {2} whose ETB gives opposing creatures -3/-0 until your next turn - effectively a one-sided fog plus a large body. Excluded because it competes directly with Weftwalking for the turn-6 slot, and this build can only afford one six-drop. |
| Mechanozoa | {4}{U}{U} 5/5 with Warp {2}{U} whose ETB taps and stun-counters an opposing permanent. Good rate, but a fourth double-blue card, and its interaction is a one-turn delay rather than an answer. |
| Cerebral Download | {4}{U} instant, 'Surveil X where X is the number of artifacts you control. Then draw three cards.' The draw-three is unconditional and real, but X is near zero here - this deck's only artifacts are Station Monitor's Drone tokens, which need a double-spell turn to exist. Consult the Star Charts costs 3 less and scales with lands, which this deck has 17 of. |
| Uthros Scanship | {3}{U} Spacecraft, 'draw two cards, then discard a card' on entry. Card-neutral-plus on a permanent, but the discard is a real cost in a deck that wants to hold interaction, and Spacecraft are hit by the cube's exile-all-creatures-and-Spacecraft sweeper. |
| Codecracker Hound | {2}{U} 2/1 with Warp {2}{U}, looking at the top two and taking one. Two casts and two selections from one card, which is exactly the Warp economy that made Sinister Cryologist the right call in the tempo build - but at 3 mana per cast it is the most expensive way this controller can buy a second spell, and it does not hold up interaction. |
| Sinister Cryologist | The tempo build's best warp card: {U} for a spell plus -3/-0 on a creature, banked for a later 2/3. Excluded here because -3/-0 is a combat-only shrink and this build wants answers that remove permanents outright (Banishing Light, Emergency Eject) or stop them on the stack. |
| Command Bridge | The cube's only any-colour land, and this build has the heaviest colour requirements of the three (three double-pip costs). Rejected on composition anyway: 'This land enters tapped. When this land enters, sacrifice it unless you tap an untapped permanent you control' - a controller that must hold up Unravel cannot afford to tap a permanent down on its own turn. |
| Lost in Space (mainboard) | Kept at 2 copies in the SIDEBOARD. {3}{U} instant tucking an artifact or creature to the top or bottom of its owner's library plus surveil 1 - unconditional and permanent-proof. Excluded from the mainboard on cost: at 4 mana it is the most expensive answer available and the interaction slot was full at 9 with cheaper cards. |
| Honored Knight-Captain | {1}{W} making a 1/1 Soldier on entry - a token source Exalted Sunborn would double, and this build's token denominator is only 3 of 23. Excluded because it is a two-mana play that does nothing on the turn it is cast for a controller that wants those two mana for Divert Disaster. |
| Rayblade Trooper | {2}{W} with Warp {1}{W}, ETB counter plus a Soldier token whenever a nontoken creature with a counter dies. Strong in the go-wide build. Excluded here because only Sunstar Lightsmith x2 and Honor x2 place counters on nontoken creatures in this list - 4 of 23 rather than 13 of 23 - so the death trigger is far thinner. |
| Annul (mainboard) | Kept at 2 copies in the SIDEBOARD. {U} counters artifact or enchantment spells, and 90 of the cube's 249 nonland cards (36.1%) are legal targets. Excluded from the mainboard because it is a conditional counter where Unravel and Divert Disaster are unconditional, and the interaction slot was full at 9. |
| Desculpting Blast | Raised as an absence by the Phase 9 Challenger with a real count: at {1}{U} it would be the deck's cheapest UNCONDITIONAL answer (the current cheapest is Banishing Light at MV 3), and the Drone it makes when the bounced permanent was attacking is the exact same token Station Monitor makes - so Exalted Sunborn doubles it, adding a sixth token source to the doubler's denominator. Excluded because the interaction slot was full at 9 and bounce is a delay where Banishing Light and Emergency Eject are answers; this is the best remaining upgrade to the interaction suite. |
| Reroute Systems | Raised as an absence by the Phase 9 Challenger: the whole 'decapitation' plan rests on Cosmogrand Zenith, Station Monitor x2 and Sunstar Lightsmith x2 STAYING on the battlefield, and this is a one-mana modal answer to targeted removal aimed at them, plus a one-mana second spell when it is not needed for that. Excluded because Cryoshatter took the one-mana interaction slot in the same repair, and an answer that removes an opposing creature outranks one that protects mine in a deck that also has to survive to turn 9. |
| Hardlight Containment | RARE, and the candidate for the deck's single unspent rare/mythic slot. {W} for an unconditional creature exile is the best rate in the pool. Declined on a stated mechanism: it reads 'Enchant artifact you control' and this deck runs ZERO permanent artifacts - the only legal hosts are Station Monitor's Drone tokens, which require a second-spell turn to exist, and Divert Disaster's Lander, which requires your counterspell to be paid through. It is a dead card in the opening hand and live from roughly turn 4. |
| Illvoi Operative | The one second-spell payoff in the W/U pool this deck skipped, recorded for completeness after the Challenger flagged the omission. {1}{U} 2/1 growing one counter per turn. Correctly passed over: it is the weakest of the four available payoffs on a 1-toughness body, and it creates no token, so Exalted Sunborn does nothing with it. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 3   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.02 adj [MV 2.61 vs 2.5, 7 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand  58.6%  prod  64.7%  gap  -6.1pp  [OK]
  W  demand  41.4%  prod  47.1%  gap  -5.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
base                                          cube_mainboard - every card verified by exact name against the working pool cache
commons_uncommons_max_2                       PASS - no card exceeds 2 copies
rares_mythics_max_1                           PASS - Weftwalking, Cosmogrand Zenith and Exalted Sunborn (mythic), Consult the Star Charts and Beyond the Quiet (rare), all at 1 copy
max_6_rares_mythics_total_MB_plus_SB          PASS - 5 of 6 used: Weftwalking, Cosmogrand Zenith, Exalted Sunborn, Consult the Star Charts (mainboard) and Beyond the Quiet (sideboard). This is the build that actually needs the budget, because its centrepiece and its finisher are both mythics that no common or uncommon replicates. The 6th slot is deliberately unspent: the Phase 9 absence audit named Hardlight Containment as the candidate for it, and it was declined on a stated mechanism - it reads 'Enchant artifact you control' and this deck runs zero permanent artifacts.
basics                                        Island x9, Plains x6 - format-supplied, exempt from copy limits
colour_identity                               PASS - every nonland card usable in W/U via effective_cost.best_mode; zero off-identity inclusions
splash                                        PASS - splash_colors empty; the deterministic filter's only R candidate (Roving Actuator) is uncastable on a manabase with zero red sources
```