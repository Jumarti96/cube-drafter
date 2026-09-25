---
deck_name: "b-blight-board-lock"
cube_id: "ecl"
cube_slug: "ecl"
colors: "B"
format: "40-card"
built_at: "2026-08-12T04:50:52Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x18  Swamp
```

### CREATURES (9)

```
CMC  Card                    Qty   Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Rar
  1  Bile-Vial Boggart       x1    B      fodder                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         C
  3  Chaos Spewer            x2    BR     clock                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          C
  3  Eclipsed Boggart        x1    BR     refuel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         U
  3  Shadow Urchin           x1    BR     refuel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         R
  4  Nightmare Sower         x2    B      clock                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          U
  5  Blighted Blackthorn     x2    B      clock                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          C
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                    Qty   Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Rar
  2  Bogslither's Embrace    x2    B      interaction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    C
  2  Nameless Inversion      x2    B      interaction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    U
  2  Unbury                  x2    B      refuel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         U
  3  Blight Rot              x2    B      interaction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    C
  4  Darkness Descends       x2    B      interaction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    U
```

### OTHER SPELLS (3)

```
CMC  Card                    Qty   Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Rar
  3  Boggart Mischief        x2    B      drain                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          U
  3  Mornsong Aria           x1    B      accelerant                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     R
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Rar
Dawnhand Dissident      x1    B      Vs the cube's 39 graveyard-interaction cards. Both abilities put counters on your own creatures and at 1/2 a Blight 2 kills it, so it exiles once off its own toughness and repeatedly only while other bodies absorb the counters.                                                                                                                                                                                                                                                                            R
Auntie's Sentence       x2    B      Vs any deck with artifacts or enchantments - the cube holds 11 artifacts and 21 enchantments and mono-black has ZERO answers to either once they resolve, so 'Target opponent reveals their hand. You choose a nonland permanent card from it. That player discards that card' is the only interaction available, and it must happen before the permanent is cast. Its second mode, '-2/-2', is also removal with no mana-value ceiling.                                                                       C
Mischievous Sneakling   x2    BU     Vs fast aggro, the matchup where falling a three-life bracket behind stops the turn-order ruling from rescuing the Aria race. Flash blocks at instant speed; Changeling makes it a Goblin for the Mischief drain.                                                                                                                                                                                                                                                                                              C
Gnarlbark Elm           x2    B      Vs creature decks, boarded in ONLY while boarding Darkness Descends x2 OUT - Gnarlbark enters as a 1/2 and dies to my own sweeper, so the two cards must not share a 40. It then leaves a 3/4 wall and shares Treefolk and Warlock with Blighted Blackthorn, turning on Unbury's second mode.                                                                                                                                                                                                                  U
Rooftop Percher         x2    C      Vs reanimator and flashback decks; 'exile up to two target cards from graveyards' on a 3/3 flier that also joins the clock and survives Darkness Descends at 1/1. Changeling makes it a Goblin for Boggart Mischief's drain. Its 'gain 3 life' rider is live only before Aria is cast, so sequence Percher first.                                                                                                                                                                                              C
Deceit                  x1    BU     Vs green and white opponents specifically. Evoke {U/B}{U/B} is paid as {B}{B} off two Swamps and satisfies its own 'if {B}{B} was spent' clause, giving 'target opponent reveals their hand. You choose a nonland card from it. That player discards that card'. This is the answer to Mornsong Aria's own drawback: Aria hands the opponent a tutor every turn and the cube's only four enchantment answers are all G/UG/W, so against those colours you must be able to take the answer out of their hand.   M
```

## ANALYSIS

### DECK IDENTITY

Mono-black board-lock control, and the one deck of the three where Mornsong Aria is genuinely the win condition rather than an accelerant - made viable by a turn-order fact the whole build is arranged around. Aria is a sorcery-speed enchantment, so it resolves in the pilot's MAIN PHASE, after the pilot's own draw step. The next draw step in the game therefore belongs to the OPPONENT, and every trigger afterwards alternates opponent-first. A player at life L dies on their ceil(L/3)-th trigger, so the pilot wins iff ceil(L_opponent/3) <= ceil(L_pilot/3): the Aria player wins at EQUAL life totals, and at 20/20 the opponent hits zero on their seventh trigger with the pilot still at 2. The deck therefore does not need a life lead - it needs to avoid falling a three-life bracket behind, which 8 removal copies and Blighted Blackthorn's 7 toughness are built to guarantee. Two costs are stated rather than buried. First, Aria's tutor half is symmetric and the opponent gets theirs FIRST every cycle - six free selections before their lethal seventh - and the cube's only four enchantment answers are all G/UG/W, so against a green or white opponent Aria is the card that finds their answer to Aria. Second, Aria is a rare capped at one copy seen 42.5% of the time by turn 10, so the same 8 removal copies plus a ten-power board of Blighted Blackthorn, Chaos Spewer and Nightmare Sower win by attrition without it.

### THE TURN-ORDER RULING — THE MOST IMPORTANT THING IN THIS FILE

This deck is the only one of the three where Mornsong Aria is genuinely the win condition, and it is viable because of a timing fact that is easy to miss and that flips the card's reputation.

Aria is a sorcery-speed enchantment. It therefore resolves in **your main phase** — which comes *after* your own draw step that turn. The next draw step in the game belongs to the **opponent**. From then on the triggers alternate opponent-first, forever.

A player at life *L* dies on their `ceil(L/3)`-th trigger. So:

> **You win iff `ceil(L_opponent / 3) ≤ ceil(L_you / 3)`.**

**At equal life totals, the Aria player wins.** Worked at 20/20:

| Trigger | Opponent | You |
|---|---|---|
| 1st | 17 | 17 |
| 4th | 8 | 8 |
| 6th | 2 | 2 |
| **7th** | **−1 — dead** | 2, still alive |

Both agents in the grill verified this independently, and one swept all 282 cards in the cube for anything that modifies draw steps or grants extra turns — Aria is the only hit, so nothing in this environment can invert the alternation.

**The practical consequence reshapes the whole archetype.** You are not trying to build a life lead. You are trying to **not fall a three-life bracket behind**. A single unanswered 3-damage hit at parity flips the race — pilot 17 vs opponent 20 is bracket 6 vs bracket 7, and you die first. That is what the 8 removal spells and Blighted Blackthorn's 7 toughness are for.

**Pilot rule: hold Aria until you are inside the same bracket as the opponent. It is never a play-it-on-curve card.**

### THE COST NOBODY PRICES: ARIA TUTORS FOR THEM TOO

The same turn-order fact that wins you the race also works against you on the other half of the card. Aria reads "searches their library for a card" for **each** player, and the opponent gets theirs **first**, every cycle — six free tutors before their lethal seventh trigger.

Now cross-reference the cube: it contains exactly **four** enchantment answers — Keep Out `{1}{W}`, Pyrrhic Strike `{2}{W}`, Unforgiving Aim `{2}{G}`, Wistfulness `{3}{G/U}{G/U}` — and all four are green or white.

| Opponent's colours | What Aria does |
|---|---|
| B / R / U | Unanswerable. Cast it on schedule. |
| G or W | **Aria is the card that finds their answer to Aria.** |

Against green or white, hold it and strip the answer first — that is exactly why Auntie's Sentence ×2 and Deceit are in the sideboard.

### DARKNESS DESCENDS IS A ONE-SIDED SWEEPER *HERE*

Every creature in this deck was chosen against its own sweeper. "Put two -1/-1 counters on each creature," checked card by card:

| Creature | Before | After | Result |
|---|---|---|---|
| Chaos Spewer | 5/4 | 3/2 | survives |
| Blighted Blackthorn | 3/7 | 1/5 | survives comfortably |
| Shadow Urchin | 3/4 | 1/2 | survives |
| Eclipsed Boggart | 2/3 | 0/1 | survives |
| Nightmare Sower | 2/3 | 0/1 | survives |
| Bile-Vial Boggart | 1/1 | — | **dies, and that is the point** |

Five of six survive. The one that dies triggers "put a -1/-1 counter on up to one target creature" *and* Boggart Mischief's drain. Boggart Mischief's own 1/1 tokens die too, for more drain.

This is also why **Gnarlbark Elm and Heirloom Auntie are not in the maindeck** despite being fine on-colour walls: both *enter* with two -1/-1 counters, so they are 1/2 and 2/2 on the battlefield and die to your own card. Gnarlbark Elm is in the sideboard with an explicit instruction to board Darkness Descends **out** alongside boarding it in — the two cards must never share a 40.

### THE COUNTS PRINCIPLE, WORKING IN BOTH DIRECTIONS

Nightmare Sower is a useful illustration. Its trigger reads "Whenever you cast a spell during an opponent's turn, put a -1/-1 counter on up to one target creature." I **rejected** it in both sibling decks and **included** it here, on the same test:

| Deck | Instants | Verdict |
|---|---|---|
| Race the Clock | 4 of 23 | EXCLUDE |
| Hand-Lock Attrition | 4 of 22 | EXCLUDE |
| **Blight Board-Lock** | **6 of 22** | **INCLUDE** |

Nameless Inversion ×2, Unbury ×2 and Blight Rot ×2 are all instants, and this is the deck that holds mana open every turn anyway. It is also the only flier in the maindeck, against the cube's largest threat class (41 evasion cards).

### WHAT THIS DECK DOES WITHOUT ARIA

Aria is a rare capped at one copy and nothing in the pool tutors for an enchantment, so it shows up **42.5%** of the time by turn 10. The clock therefore has to stand on its own, and an earlier version of this list failed that test badly — two Reaping Willows read as 3/6 on the card but *enter with two -1/-1 counters*, making them 1/4 bodies. The real board was 4 damage a turn, which reaches 20 on turn 12, not turn 10.

The repaired clock is **10 power**: Blighted Blackthorn 3, Chaos Spewer 5, Nightmare Sower 2 in the air, plus Boggart Mischief draining 1 per Goblin death. That closes 20 in two attacks from turn 8.

### BLIGHT ROUTING IS A PILOT RULE, NOT A FREE COST

The 10-power clock only holds if you pay Chaos Spewer's blight correctly. "You may pay `{2}`. If you don't, blight 2."

| Route the counters to | Effect |
|---|---|
| Pay the `{2}` | Best line whenever you have the mana |
| Shadow Urchin (3/4 → 1/2) | Safe, and its death later feeds its own exile trigger |
| Chaos Spewer itself (5/4 → 3/2) | Fine — but it then **dies** to your own Darkness Descends at 1/0 |
| **Blighted Blackthorn** | **Never.** Two Spewers put four counters on it: 3/7 → −1/3, contributing **zero** power. Clock drops from 10 to 7. |

Also note Shadow Urchin's attack blight is **mandatory** — no "may". Two attacks leave it a 1/2, and Darkness Descends then kills it too.

### PLAY PATTERN

Turns 1–4: remove everything, take as little damage as possible. Turn 3–4 Chaos Spewer or Boggart Mischief. Turn 5 Blighted Blackthorn walls the ground. **Check the brackets before casting Aria** — if you and the opponent are in the same `ceil(life/3)` bracket, cast it and you win the race. If you are a bracket down, hold it, stabilise with removal, and win with the 10-power board instead.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:1  2:6  3:9  4:4  5:2
Assembly (thesis turn 10, 17 cards seen):  [PASS]
  PASS  board_control: 8 copies → p=0.98 (need ≥ 0.75)
  PASS  clock: 8 copies (effective 7.4: Boggart Mischief@0.7, Boggart Mischief@0.7) → p=0.97 (need ≥ 0.75)
  PASS  refuel: 4 copies (effective 3.7: Shadow Urchin@0.7) → p=0.81 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 89% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 20%  T2 86%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Darkness Descends, Blight Rot
  OK        single_large_threat: Bogslither's Embrace, Blight Rot, Nameless Inversion
  CONCEDED  noncreature_permanents: The cube's artifact answers are BR/R/UG/W and its enchantment answers are G/UG/W only - across all 282 pool cards there is ZERO black-castable removal for either class, so 11 artifacts and 21 enchantments cannot be answered once they resolve. The maindeck concedes the class outright. Auntie's Sentence x2 and Deceit in the sideboard are the only available interaction and they work by taking the permanent from hand before it is cast, which is a partial answer and is declared as one rather than as coverage.
  CONCEDED  stack: Black has no counterspell in this pool and this build has no maindeck hand attack as a substitute either; it answers permanents only after they resolve, with 8 removal copies.
  CONCEDED  graveyard: No maindeck graveyard interaction; Dawnhand Dissident and Rooftop Percher x2 answer the cube's 39 graveyard cards from the sideboard rather than taxing the removal core.
```

- No WARN flags were raised on the final list: curve, assembly, goldfish and coverage all returned PASS. This is also the only one of the three decks whose wide_boards AND single_large_threat coverage are both OK rather than conceded.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Mornsong Aria replaces every draw step with 'searches their library for a card', so a flooded topdeck becomes a chosen one; Bogslither's Embrace's 'blight 1 or pay {3}' branch spends surplus mana instead of a creature; Chaos Spewer's 'you may pay {2}' keeps its 5/4 body at full size rather than blighting; and Unbury's second mode returns two creature cards instead of one. |
| screw | mitigation | 7 of the 22 nonland cards cost two mana or less (Nameless Inversion x2, Bogslither's Embrace x2, Unbury x2, and Bile-Vial Boggart at one), and all of the two-drops are interaction rather than development, which is what a control deck wants from a slow hand. The goldfish simulation returns 89% keepable hands and 92% for three lands by turn 3 on 18 lands. Stated honestly: with only one card at MV 1 this deck has the weakest turn-one of the three, playing something on turn 1 in just 20% of hands. |
| decapitation | mitigation | REPAIRED in response to finding F1, which correctly showed the pre-repair version could not kill by its thesis turn without Aria. Aria is a one-of seen 42.5% of the time by turn 10 under the assembly gate's model, so the deck is built to win without it: the clock role is 8 copies at p=0.97, and a developed board of Blighted Blackthorn (3), Chaos Spewer (5) and Nightmare Sower (2 in the air) is 10 power, closing 20 in two attacks from turn 8, with Boggart Mischief draining on top. When Aria does resolve, it is unanswerable against B/R/U opponents - the cube's only four enchantment answers are all G/UG/W. |
| gas-out | mitigation | Refuel is 4 copies at p=0.81 and every piece is non-draw so it survives the anchor: Unbury x2 returns one or two creature cards to hand, Eclipsed Boggart's 'look at the top four cards... put it into your hand' is selection rather than drawing, and Shadow Urchin's 'exile that many cards from the top of your library. Until your next end step, you may play those cards' is impulse access. Aria's own tutor is a fifth source in the 42.5% of games it appears. |
| raced | accepted | Fast aggro remains the matchup that beats this deck and mitigating it fully would cost the archetype. Under the turn-order ruling a single unanswered 3-point hit at parity flips the race, and this deck has one card at MV 1 and plays on turn 1 in only 20% of hands. Making it faster would mean cutting the removal and the walls for cheap bodies, which is Deck 1. The pilot rule is that against a fast start Aria is HELD and the game is won by attrition instead; the sideboard brings Mischievous Sneakling x2 for Flash blocks and Gnarlbark Elm x2 as removal-on-a-body, with Darkness Descends x2 boarded OUT alongside them because Gnarlbark enters as a 1/2 and dies to it. That is a named 4-in, 4-out. |
| disruption-fizzle | mitigation | There is no single critical turn - the plan is 8 one-for-one removal spells and an 8-copy clock, none of which depends on another resolving first. The one card answerable on sight is Aria, and the pool protects it partially rather than completely: only 4 enchantment answers exist cube-wide and none is castable in B, R or U, so against those colours Aria simply cannot be removed. Against green and white the protection fails, and worse, Aria's own trigger is what finds their answer - which is why Auntie's Sentence x2 and Deceit are in the sideboard specifically for those matchups, and why against G/W the correct line is to strip the answer before deploying the anchor. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Perfect Intimidation | Hand attack is the identity of the Hand-Lock build, not this one; a 4-mana sorcery that touches neither the board nor the life total does not serve a board-lock plan. |
| Auntie's Sentence | Same reason - its -2/-2 mode is real but the deck already runs cheaper and larger removal, and its hand-attack mode belongs to the other archetype. |
| Deceit | A 2-mana Thoughtseize via evoke is premium, but it is the Hand-Lock deck's card; spending a mythic slot on hand attack in a board-control deck buys nothing that answers a resolved threat. |
| Dream Seizer | 3/2 flier with a discard trigger; the 2 toughness dies to this deck's own Darkness Descends, which is the card the whole build is arranged around. |
| Chaos Spewer | 5/4 for three is the best aggro rate in the pool, but 4 toughness dies to my own Darkness Descends and a board-lock deck does not want to be the one attacking. |
| Gutsplitter Gang | 'you may blight 2. If you don't, you lose 3 life' stacks a second 3-per-turn on top of Aria's, and this deck's whole plan is winning a life race by a margin. |
| Bitterbloom Bearer | Mythic flier engine, but 'At the beginning of your upkeep, you lose 1 life' makes the pilot's clock 4 per turn against the opponent's 3 - it inverts the exact race this deck is trying to win. |
| Moonshadow | A {B} 7/7 Menace entering with six -1/-1 counters; it needs six permanent cards in my graveyard to become a threat, and blight or Darkness Descends kills it outright while it waits. |
| Voracious Tome-Skimmer | A 2/3 flier whose only text - 'pay 1 life... draw a card' - is blanked by Aria, and 3 toughness barely survives Darkness Descends. |
| Blighted Blackthorn's draw mode | Not a card; noting that Blighted Blackthorn is included purely as a 3/7 body because its optional 'draw a card and lose 1 life' trigger is blanked by Aria and would only cost life. |
| Nightmare Sower | 2/3 flier for four whose trigger needs spells cast on an opponent's turn, and whose lifelink is dead under Aria. |
| Scarblade Scout | 2/2 Lifelink; Aria states 'Players can't... gain life', so the lifelink is blank and this is a vanilla 2/2 that dies to my own sweeper. |
| Taster of Wares | Rare whose strip size is 'the number of Goblins you control'; this build's Goblin count fluctuates and hand attack is not this archetype's plan. |
| Twilight Diviner | Rare 3/3 whose copy trigger needs creatures entering from a graveyard; this list has no reanimation loop. |
| Gloom Ripper | Rare {3}{B}{B} whose pump scales with Elves controlled plus Elf cards in the graveyard; this Goblin-leaning list runs few Elf cards. |
| Mudbutton Cursetosser | 'This creature can't block' is disqualifying in a deck whose creatures exist to block, even though its death trigger is removal. |
| Stoic Grove-Guide | A 5-mana 5/4 that does not affect the board on arrival; the curve cannot afford it alongside the higher-toughness walls. |
| Bloodline Bidding | 8 mana with convoke; this build has neither the creature count to convoke it nor a graveyard full of a single type. |
| Dose of Dawnglow | 5-mana reanimation with no high-value target in this list. |
| Springleaf Drum | Mono-black needs no fixing, and tapping a creature is a real cost for a deck that wants blockers untapped. |
| Evolving Wilds | Fetches a basic tapped; strictly worse than a Swamp in a mono-colour deck. |
| Blood Crypt | A rare dual; mono-black needs no fixing and every rare slot is budgeted at 5 across MB and SB. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.67 adj [MV 3.0 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard - every card verified present in the working pool by exact name.
[PASS] copy_limits: Commons and uncommons capped at 2, rares and mythics at 1; the Phase 5C validator cross-checked every combined mainboard+sideboard count against cube_search.get_max_copies and returned PASS.
[PASS] rare_mythic_budget: 4 of the maximum 5: Mornsong Aria (rare, MB), Shadow Urchin (rare, MB), Deceit (mythic, SB), Dawnhand Dissident (rare, SB). The Phase 9 repair swapped Emptiness (mythic) out and Deceit (mythic) in, keeping the total unchanged with one slot deliberately unused.
[PASS] basics: 18 Swamp - format-supplied and exempt from copy limits.
[PASS] colour: All 19 distinct nonland cards return a usable 'cast' mode from effective_cost.best_mode against core_colors ['B']; the five hybrid cards (Shadow Urchin {2}{B/R}, Chaos Spewer {2}{B/R}, Eclipsed Boggart {B/R}{B/R}{B/R}, Deceit {4}{U/B}{U/B} with Evoke {U/B}{U/B}, Mischievous Sneakling {1}{U/B}) are cast entirely off Swamps, so splash_colors is empty. Deceit's 'if {B}{B} was spent to cast it' clause is satisfied by paying its two hybrid pips with black mana.

[PASS] 1a mainboard size: 40 (want 40)
[PASS] 1b sideboard size: 10 (want 10)
[PASS] 2 exact-name membership: all 20 names found
[PASS] 3 copy limits: all within card_pool_rules
[PASS] 3b rare+mythic budget: 4/5 -> ['Dawnhand Dissident', 'Deceit', 'Mornsong Aria', 'Shadow Urchin']
[PASS] 4 colour usability (best_mode): all nonland castable in B; off-normal modes: {'Bile-Vial Boggart': 'cast', 'Nameless Inversion': 'cast', "Bogslither's Embrace": 'cast', 'Unbury': 'cast', 'Blight Rot': 'cast', 'Mornsong Aria': 'cast', 'Boggart Mischief': 'cast', 'Shadow Urchin': 'cast', 'Chaos Spewer': 'cast', 'Eclipsed Boggart': 'cast', 'Darkness Descends': 'cast', 'Nightmare Sower': 'cast', 'Blighted Blackthorn': 'cast', "Auntie's Sentence": 'cast', 'Deceit': 'cast', 'Dawnhand Dissident': 'cast', 'Rooftop Percher': 'cast', 'Mischievous Sneakling': 'cast', 'Gnarlbark Elm': 'cast'}
[PASS] 5 splash cap: splash_colors empty; 5 hybrid cards castable off Swamps with no splash needed
```
