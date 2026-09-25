---
deck_name: "gr-domain-aggro-tempo"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-08-13T06:07:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x4  Forest                   basic — Forest
  x5  Mountain                 basic — Mountain
  x2  Geothermal Bog           Swamp Mountain; enters tapped
  x2  Haunted Mire             Swamp Forest; enters tapped
  x1  Molten Tributary         Island Mountain; enters tapped
  x2  Tangled Islet            Forest Island; enters tapped
```

### CREATURES (16)

```
CMC  Card                       Qty   Color  Role                     Rar
  1  Llanowar Stalker           x2    G     Threat/Payoff            C
  1  Phoenix Chick              x2    R     Threat/Payoff            U
  1  Shivan Devastator          x1    R     Threat/Payoff            M
  1  Viashino Branchrider       x2    R     Threat/Payoff            C
  2  Nishoba Brawler            x2    G     Threat/Payoff            U
  2  Quirion Beastcaller        x1    G     Threat/Payoff            R
  2  Radha's Firebrand          x1    R     Threat/Payoff            R
  2  Sunbathing Rootwalla       x2    G     Threat/Payoff            C
  2  Yavimaya Iconoclast        x2    G     Threat/Payoff            U
  3  Squee, Dubious Monarch     x1    R     Threat/Payoff            R
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                       Qty   Color  Role                     Rar
  1  Gaea's Might               x2    G     Threat/Payoff            C
  1  Tail Swipe                 x1    G     Interaction              U
  2  Lightning Strike           x2    R     Interaction              C
  3  Hurloon Battle Hymn        x1    R     Interaction              U
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty   Color  Role                     Rar
  1  Hammerhand                 x2    R     Threat/Payoff            C
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in      Rar
Bite Down                  x2    G     Flex — removal               C
Smash to Dust              x2    R     Hate — artifacts / token boards C
Snarespinner               x1    G     Hate — evasion               C
Broken Wings               x2    G     Hate — artifacts / enchantments / fliers C
Llanowar Greenwidow        x1    G     Hate — evasion / sweeper resilience R
Coalition Warbrute         x1    R     Flex — ground stall breaker  C
Meria's Outrider           x1    R     Hate — lifegain / reach      C
```

## ANALYSIS

### DECK IDENTITY

A green-red aggro deck that treats domain as a stat multiplier on cheap bodies rather than as a ramp target. Twelve of the twenty-four nonland cards cost one mana and only two cost three, so the deck makes a turn-one play in 68% of games and a turn-two play in 94% (tapland-aware measurement - see deployment_measured). Nishoba Brawler is a two-mana trampler whose power is the basic land type count, Sunbathing Rootwalla converts flooded mana into the same scaling, and Gaea's Might is a one-mana pump worth +3/+3 on the turn it matters. It is honestly a DOMAIN 3 deck, not a domain 4 or 5 one: the measured curve is 75% to three types by turn three and 43% to four by turn five, and Plains is unreachable entirely, because every typed dual enters tapped and an aggressive deck cannot pay for more than seven of them.

### THE ARCHETYPE'S HARDEST BUILD, AND WHY

The other two Domain decks want land types and can afford to buy them with tapped lands. This one wants land types *and* untapped mana on turn one, and the pool will not sell both. Every typed dual in the cube enters tapped, and they are the only way past domain 2. That tension is the whole design problem, and this deck resolves it by **declining to chase domain 5 at all**.

Measured over 40,000 hands on this exact list:

| Turn | P(domain ≥ 2) | P(domain ≥ 3) | P(domain ≥ 4) | P(domain ≥ 5) |
|---|---|---|---|---|
| 2 | 0.91 | 0.67 | 0.16 | — |
| 3 | 0.94 | **0.75** | 0.31 | — |
| 5 | 0.98 | 0.86 | 0.43 | — |

Domain 5 is not unlikely here, it is **impossible**: reaching Plains requires Radiant Grove or Sacred Peaks, and adding one moved P(≥5) at turn five only from 0.00 to 0.10 while costing an Island source. So the deck declares `domain_target` 4 and plans its cards at **3**.

That is not a concession, it is the correct read. At three types Nishoba Brawler is a **two-mana 3/3 trampler** and Gaea's Might is a **one-mana +3/+3 instant**. Both are above the common rate at their cost without domain ever reaching 4. Plan the deck at three and treat four as upside.

### THE LAND THAT LOOKED RIGHT AND BOUGHT NOTHING

The locked sketch ran Wooded Ridgeline ×2. It produces both core colours, so it reads like the best dual in the deck. Its basic land types are **Forest and Mountain** — the two types 9 basics already supply. It cost a tapped turn and added essentially no domain.

Swapping it for Haunted Mire and Molten Tributary, which add Swamp and Island, is what the manabase trace measures:

| configuration | taplands | P(≥3) @ T3 | P(≥4) @ T5 |
|---|---|---|---|
| locked sketch (2 redundant Ridgeline) | 6 | 0.58 | 0.22 |
| all type-adding | 6 | 0.71 | 0.37 |
| **all type-adding (chosen)** | **7** | **0.75** | **0.42** |
| all type-adding | 8 | 0.79 | 0.50 |

Row two is a **free upgrade over row one** — same tapland count, +13pp. That is the single largest improvement in this build, and it came from reading a type line rather than a mana symbol. The eighth tapland was declined: in a deck with twelve one-drops it costs a deployment turn more often than it gains a domain point.

### HOW FAST THIS DECK ACTUALLY IS

The structural gate reports a turn-one play in 91% of games. That number is wrong, and finding out why was the most useful thing the grill did across all three decks: **`deck_checks.goldfish_sim` does not model "This land enters tapped"** — the token appears nowhere in the module, and every land seen is credited as an available source.

Re-measured tapland-aware, this deck plays a spell on turn one in **68%** of games on the draw (60% on the play) and by turn two in **94%**. Still the fastest of the three Domain builds by a wide margin — the control deck's true turn-one rate is 24% — but not 91%.

### WHERE THE DAMAGE COMES FROM

Six of twenty-four cards push damage past a blocker: trample on Nishoba Brawler ×2 and Yavimaya Iconoclast ×2, plus Hammerhand ×2, whose *"target creature can't block this turn"* removes the single best blocker on the swing turn. Radha's Firebrand adds a seventh for free on every attack. This matters because the deck **concedes four of the five coverage classes** — it has no sweeper, no counterspell, no graveyard hate, and no maindeck answer to an artifact or enchantment. It does not clear boards; it goes through them.

### WHAT IT HONESTLY CANNOT DO

- **Answer a big creature.** Hurloon Battle Hymn's 4 damage covers 133 of the pool's 153 creatures, but **20 with toughness 5 or more are simply unanswered**.
- **Refuel.** Zero cards in the list draw a card. The hand is spent by turn four; Phoenix Chick and Squee recurring from the graveyard are the only material after that.
- **Beat lifegain.** The cube holds 22 lifegain cards and this deck's only plan is a race. Meria's Outrider is in the board specifically for that matchup.

### PLAY NOTES

- **Lead untapped when you have a one-drop, tapped when you don't.** The domain figures above assume you play the type-adding tapland; a pure tempo player sees P(≥4) at turn three of 0.18 rather than 0.31. Both policies converge by turn four.
- **Gaea's Might is the finisher, not a trick.** Holding it for the turn trample connects is usually worth more than saving a creature.
- **Shivan Devastator is never a one-drop.** At X=0 it is a 0/0 that dies immediately. It is the flood outlet — cast it for four or more, or not at all.
- **Sunbathing Rootwalla's activation costs four mana**, one more than the entire curve. It is what surplus lands are for.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:12  2:10  3:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.7: Radha's Firebrand@0.7) → p=0.91 (need ≥ 0.75)
  PASS  enabler: 7 copies → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 89%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper is castable in G/R at this curve. The cube's six sweepers are Drag to the Bottom {2}{B}{B}, Choking Miasma {1}{B}{B}, The Phasing of Zhalfir {2}{U}{U}, Temporal Firestorm {3}{R}{R} (castable in red but a five-drop, past this deck's entire curve), Karn's Sylex (symmetric, and it would exile this deck's own board), and Smash to Dust, whose sweeper mode is only 'deals 1 damage to each creature your opponents control'. This deck answers a wide board by being faster than it: 12 of the 24 nonland cards cost one mana, and Hammerhand's 'target creature can't block this turn' plus trample on Nishoba Brawler and Yavimaya Iconoclast push damage through a board it cannot clear.
  OK        single_large_threat: Hurloon Battle Hymn, Lightning Strike, Tail Swipe
  CONCEDED  noncreature_permanents: The maindeck contains zero answers to a resolved artifact or enchantment, against a cube that holds 15 artifacts and 18 enchantments. This is a deliberate cost of the lowest-curve lens: Broken Wings costs three mana in a deck whose curve tops at three and whose every slot is a one- or two-mana threat, and spending maindeck slots on an answer that is dead in the many matchups without those permanents would slow the turn-6 clock the whole thesis rests on. Broken Wings x2 is in the sideboard for the matchups where the class is live.
  CONCEDED  stack: Green and red contain no counterspell anywhere in this pool. The deck interacts only after resolution, and its real answer to an opposing key spell is to have already dealt enough damage that the spell arrives too late.
  CONCEDED  graveyard: The cube dossier's structural census reports zero graveyard-hate cards in the entire 266-card pool, so no answer of this class exists for any deck here.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three mana sinks convert surplus lands into damage, which a 16-land deck topping at three mana genuinely needs: Sunbathing Rootwalla's '{3}{G}: +1/+1 for each basic land type' every turn, Viashino Branchrider's '{2}{R}: +2/+0', and Shivan Devastator, whose X cost turns any amount of excess mana into a flying hasty body. Every land also carries a basic land type, so a surplus land still raises the counter that sizes Nishoba Brawler and Gaea's Might. |
| screw | mitigation | This is the mode the whole build is designed around, restated at the true deployment rate. 12 of the 24 nonland cards cost one mana and only two cost three, so a two-land hand functions. Tapland-aware measurement (deck_checks.goldfish_sim does not model enters-tapped, so its 0.911 is an upper bound): turn-one play 0.68 on the draw and 0.60 on the play, turn-two 0.94 and 0.90, keepable-hand rate 0.84 against a 0.80 threshold. The deck does not need a third land to execute its plan; it needs a second, and it has one in essentially every keepable hand. |
| decapitation | mitigation | There is no key card to answer. 7 domain payoff copies across 4 names, and the assembly check puts P(seen by turn six) at 0.91. Counted correctly (an earlier draft added Gaea's Might x2, an Instant, to the body count): the list holds 16 creatures - 5 of them domain payoffs (Nishoba Brawler x2, Sunbathing Rootwalla x2, Radha's Firebrand) and 11 others - plus 2 Gaea's Might as noncreature payoffs. Removing any one creature costs the opponent a card and a turn against a deck with twelve one-mana replacements, and Quirion Beastcaller specifically survives its own answer: 'When this creature dies, distribute X +1/+1 counters among any number of target creatures you control'. |
| gas-out | accepted | The list contains ZERO cards tagged Cards: Net-Positive or Cards: Self-Replacing, and no card draw of any kind. Running out of cards is not a risk, it is the plan: the deck spends its hand by turn four and wins or loses on the board state that produces. Mitigating would mean maindecking a draw spell in a shell whose every slot is a one-mana body or pump, which would slow the clock the thesis rests on - the deck's answer to an empty hand is that the opponent should be dead. Two cards do provide late-game recursion without costing a slot to card draw: Phoenix Chick returns from the graveyard for {R}{R} when you attack with three or more creatures, and Squee, Dubious Monarch recasts itself from the graveyard for {3}{R}. |
| raced | mitigation | Corrected after Phase 9. Two claims in the first draft were contradicted by their own oracle text and are withdrawn: Phoenix Chick reads 'This creature can't block' at 2 copies, so the blocker count is 14 of 24 rather than 16; and Hammerhand's 'target creature can't block this turn' is an offensive trigger that does nothing while being raced. What actually survives: this deck is usually the one racing, at an average mana value of 1.58 with a turn-two play in 94% of games; Lightning Strike x2 ('deals 3 damage to any target') and Hurloon Battle Hymn ('deals 4 damage to target creature or planeswalker') remove a racer at two and three mana; Tail Swipe fights one down at one mana; and 14 of 24 cards are bodies that can be held back. The sideboard carries the real defensive package: Snarespinner (a {1}{G} 1/3 that blocks fliers as a 3/3), Llanowar Greenwidow (4/3 reach trample for three), Coalition Warbrute (3/4 trample) and Meria's Outrider (4/4 reach that drains for the domain count on entry). |
| disruption-fizzle | mitigation | The critical turn is the alpha strike backed by Gaea's Might. If the pump is answered - and only damage-based removal can answer it, since green and red hold no counterspell anywhere in this 271-card pool - the plan retries rather than folds. Four alternative pushes across three names remain in the list: Gaea's Might x2 itself, Hammerhand x2 ('target creature can't block this turn'), and Tail Swipe, whose main-phase '+1/+1 until end of turn' pushes damage before the fight. The board persists through a countered pump, and 12 of the 24 nonland cards cost one mana, so the following turn redeploys immediately. The deck's real protection is redundancy at one mana, not resilience on any single turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Herd Migration | The ramp build's payoff. A seven-mana sorcery is unreachable in a deck whose whole plan is to have won by turn six. |
| Territorial Maro | A 10/10 for five is a ramp payoff, not a tempo one; this build's curve tops at four and a five-drop that does nothing the turn it lands is a lost turn. |
| Briar Hydra | Rare six-drop. Same objection as Territorial Maro, one turn later. |
| Drag to the Bottom | {2}{B}{B} is outside G/R and double-black cannot be a splash; it is also a symmetric sweeper, which is the single worst card type for a deck committed to a wide board. |
| Sphinx of Clear Skies | Mythic {3}{U}{U}; double blue is not a splash under the deterministic filter, and a five-mana value creature is not this deck's turn. |
| Thran Portal | Rare land that fixes any basic type, but 'This land enters tapped unless you control two or fewer other lands' means it is tapped from turn four onward, and its mana costs 1 life per activation — both bad for a deck racing on life totals and tempo. |
| Crystal Grotto | Its type line is the bare 'Land' — zero basic land types — so every copy shrinks Nishoba Brawler and Gaea's Might. Fixing colour at the cost of the payoff is backwards here. |
| Adarkar Wastes | Painland cycle (also Karplusan Forest, Shivan Reef, Sulfurous Springs, Yavimaya Coast, Caves of Koilos): rare, bare 'Land' type line, zero domain — and the life loss is real in a deck that expects to be racing. |
| Sprouting Goblin | Kicked it searches a typed land to HAND, not to the battlefield, so it costs a card and a land drop to raise domain by one — far too slow for a turn-six clock. |
| Defiler of Instinct | Rare 4/4 first strike whose discount applies only to red PERMANENT spells; this build's red cards are mostly instants and a kicker, so the reduction is largely dead. |
| Rundvelt Hordemaster | Rare Goblin lord; this shell contains at most one Goblin (Squee) plus its tokens, so the lord bonus is close to blank. |
| Llanowar Greenwidow | Rare 4/3 reach trample for three — genuinely strong, but its domain recursion costs {2}{G} at domain 5 and this build does not expect to reach domain 5 or to be playing a long game. |
| Linebreaker Baloth | 4/5 for five that can't be blocked by power 2 or less; the evasion clause is real but five mana is past this deck's curve. |
| Jaya, Fiery Negotiator | Mythic four-mana planeswalker whose +1 makes a 1/1; a deck this committed to attacking wants the four-drop to be a body that attacks immediately. |
| Deathbloom Gardener | Fixes any colour on a 1/1 deathtouch body, but it adds no basic land TYPE, so it does nothing for the payoffs — and a mana dork is a ramp card in a deck with no expensive cards to ramp into. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.58   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.23 adj [MV 1.58 vs 2.5, 0 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  50.0%  prod  50.0%  gap  +0.0pp  [OK]
  R  demand  50.0%  prod  50.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1-mainboard-size: 40 vs 40
[PASS] 1-sideboard-size: 10 vs 10
[PASS] 2-exact-name-membership: all names found in working pool
[PASS] 3-copy-limits: all within card_pool_rules (basics exempt)
[PASS] 3b-rare-mythic-cap: 5/5: ['Llanowar Greenwidow', 'Quirion Beastcaller', "Radha's Firebrand", 'Shivan Devastator', 'Squee, Dubious Monarch']
[PASS] 4-colour-usability: all nonland cards usable in ['G', 'R']+[]; modes={}
[PASS] 5-splash-cap: <=3 cards per splash colour, all in splash_candidates
[PASS] 6-no-domain-dead-lands: every land carries >=1 basic land type
[PASS] 7-land-count-vs-target: list=16, recommended=16
[PASS] 8-domain-target-reachable: declared domain_target=4, distinct basic land types available=4 {"Plains": 0, "Island": 3, "Swamp": 4, "Mountain": 8, "Forest": 8}
```