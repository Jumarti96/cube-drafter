---
deck_name: "wb-pillowfort-attrition"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-07-31T02:57:39Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  1x Drifting Meadow    W, cycling
  1x Maze of Ith    Interaction — repeatable combat fog (land)
  6x Plains
  1x Polluted Mire    B, cycling
  2x Sunlit Marsh    WB dual (tapped)
  6x Swamp
```

### CREATURES (8)

```
CMC  Card                     Qty  Color Role                       Rar
  2  Wall of Junk             x1   C     Interaction/Defense        U
  3  Phyrexian Rager          x2   B     Engine                     C
  3  Undead Gladiator         x1   B     Engine                     U
  4  Windborn Muse            x1   W     Interaction/Threat         R
  4  Yawgmoth, Thran Physician x1   B     Engine                     M
  5  Serra Angel              x2   W     Threat/Payoff              U
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                     Qty  Color Role                       Rar
  1  Swords to Plowshares     x2   W     Interaction                U
  2  Chainer's Edict          x2   B     Interaction                U
  2  Terror                   x2   B     Interaction                C
  3  Ichor Slick              x1   B     Interaction                C
  4  Battle Screech           x2   W     Engine/Threat              U
  4  Wrath of God             x1   W     Interaction                R
```

### OTHER SPELLS (5)

```
CMC  Card                     Qty  Color Role                       Rar
  2  Mind Stone               x2   C     Infrastructure             C
  2  Pacifism                 x2   W     Interaction                C
  4  No Mercy                 x1   B     Interaction/Engine         M
```

## SIDEBOARD (10)

```
Card                     Qty  Color Role / When to board in                              Rar
Tormod's Crypt           x2   C     graveyard hate: vs graveyard decks (18.75% of the cu U
Duress                   x2   B     strip a noncreature threat from hand (covers combo/c C
Radiant's Judgment       x2   W     anti-fatty removal, cycles when dead: vs decks with  C
Festering Goblin         x2   B     cheap blocker/trade vs go-wide: vs go-wide aggro — a C
Renewed Faith            x1   W     lifegain + cycle vs aggro/burn: vs aggro/burn — 6 li C
Damping Sphere           x1   C     anti big-mana / cost-stacking: vs ramp / big-mana /  U
```

## ANALYSIS

### DECK IDENTITY

White-Black pillowfort attrition control. No Mercy, Windborn Muse, Wall of Junk and Maze of Ith make attacking into the deck suicidal or futile, while a dense removal suite (Swords to Plowshares, Terror, Chainer's Edict, Ichor Slick, Pacifism, Wrath of God) answers everything else one-for-one. Yawgmoth, Thran Physician turns spare bodies (Phyrexian Rager, the recurring Undead Gladiator, Battle Screech birds) into repeatable -1/-1 removal AND cards to out-grind the opponent, and Serra Angel plus the bird tokens close through the air once the ground is locked.

- NO MERCY AS UNBOUNDED REMOVAL: 'Whenever a creature deals damage to you, destroy it' scales with how much the opponent attacks. Paired with Wall of Junk (a 0/7 that bounces itself on block, so it blocks forever) and Maze of Ith (fog one attacker), the opponent is forced to either not attack or feed creatures to No Mercy one at a time. Attacking this deck is a losing exchange.

- REMOVAL DENSITY, AS A COUNT: 10 dedicated removal spells (Swords to Plowshares x2, Terror x2, Chainer's Edict x2, Ichor Slick, Wrath of God, Pacifism x2) plus No Mercy and Wrath means the deck can answer roughly a dozen threats one-for-one before the lock even matters; Yawgmoth, Undead Gladiator recursion, cycling and Phyrexian Rager refill so it rarely runs dry.

- YAWGMOTH FODDER, AS A COUNT: sacrificeable bodies in this list = Phyrexian Rager x2, Undead Gladiator (recurs every upkeep = renewable), up to four Battle Screech birds, Wall of Junk, Windborn Muse and Serra Angel x2 — about 11 bodies over a game, most of them renewable. Each 'Pay 1 life, Sacrifice another creature' is a -1/-1 removal AND a card, so Yawgmoth is both the removal engine and the card engine.

- STRAIGHT WB PAYS OFF: GOOD fixing (Sunlit Marsh + basics + two cycling duals) means the 50/50 double-pip demands (WW on Wrath/Serra/Battle Screech, BB on No Mercy/Yawgmoth/Undead Gladiator) are reliably met without a splash — the reason this build refused the tempting blue card-advantage splash.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:2  2:9  3:4  4:6  5:2
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  answers: 15 copies → p=1.00 (need ≥ 0.75)
  PASS  engine: 8 copies → p=0.93 (need ≥ 0.75)
  PASS  finisher: 5 copies → p=0.80 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 30%  T2 93%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Wrath of God, No Mercy, Windborn Muse, Wall of Junk, Pacifism
  OK        single_large_threat: Swords to Plowshares, Chainer's Edict, Pacifism, Terror, Maze of Ith
  CONCEDED  noncreature_permanents: WB has no artifact/enchantment destruction in this pool; the only lever is proactive hand disruption (SB Duress strips a noncreature card before it resolves). Maindecking a steal/answer would cost on-thesis removal and there is no on-color option anyway.
  CONCEDED  stack: WB has no counterspells in this pool; all interaction is permanent-based and applied after resolution. SB Duress disrupts key spells from hand. Accepted — adding counters is impossible in these colors.
  CONCEDED  graveyard: No maindeck graveyard hate; held for sideboard (Tormod's Crypt), a dead draw vs non-graveyard decks.
```
- interaction 57% and engine 35% exceed the control bands: accepted because the pillowfort pieces (No Mercy, Windborn Muse, Wall of Junk) ARE the deck's interaction and the attrition win comes from the grind engine, not a threat suite. Threats sit at 9% (in band); Battle Screech birds and Windborn Muse supply extra evasive clock beyond the 2 Serra Angels.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Mind Stone (sac for a card), the cycling lands Polluted Mire and Drifting Meadow, Ichor Slick and Undead Gladiator cycling, plus Phyrexian Rager and Yawgmoth draws turn surplus mana/lands into cards; 17 is the computed target. |
| screw | mitigation | Low curve (avg MV 2.87, keepable 85%): two 1-drops (Swords to Plowshares x2) and nine 2-drops mean most hands act early; Mind Stone ramps a stumbling hand toward the 4-drop keystones. |
| decapitation | mitigation | No single load-bearing card. The fort is a GROUP of seven interchangeable defensive effects (No Mercy, Windborn Muse, Wall of Junk, Maze of Ith, Wrath of God, Pacifism x2) — each a singleton, but drawing any one buys time — and the grind engine is genuinely redundant (Yawgmoth, Phyrexian Rager x2, Undead Gladiator, cycling). Answering any one piece leaves the rest; Serra Angel x2 still closes. |
| gas-out | mitigation | Yawgmoth draws a card per sacrifice, Phyrexian Rager draws on ETB, Undead Gladiator returns itself each upkeep, Chainer's Edict flashes back, and four cards/lands cycle (Ichor Slick, Renewed Faith SB, Polluted Mire, Drifting Meadow). The deck refuels faster than it spends. |
| raced | mitigation | Best-defended of the three builds: No Mercy punishes every attacker, Wall of Junk (0/7) walls the ground, Swords to Plowshares gains life equal to the creature's power, Maze fogs, and Wrath resets; SB adds Renewed Faith (6 life), Festering Goblin and Radiant's Judgment. The deck interacts on turns 1-4 (Swords, Terror, Pacifism, Chainer's Edict) before the fort locks. |
| disruption-fizzle | mitigation | No all-in turn — the plan is a war of attrition with 10 removal spells plus recursion, so a single counter/removal spent on one of our answers is a fair trade the deck is happy to make; there is no critical turn whose interruption loses the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Crawlspace | Rare (5-cap): its 'no more than two creatures can attack you' role overlaps Windborn Muse's tax; the rare slot went to Wrath/No Mercy/Yawgmoth/Muse/Maze. |
| Jester's Cap | Rare (5-cap): a real attrition wincon (strip their library) but too slow, and the rare budget is full. |
| Evil Eye of Orms-by-Gore | Its 'non-Eye creatures you control can't attack' turns off Serra Angel, the bird tokens and Windborn Muse — anti-synergistic with the flier finish. |
| Street Wraith | Swampwalk is unreliable evasion (needs opponent Swamps); mostly a free cycler. Cut for Wall of Junk, a better repeatable blocker. |
| Royal Assassin | Rare and wants tappers this shell does not run. |
| Umbilicus | Symmetric upkeep bounce is slow and hurts us too; no rare slot to spare. |
| Radiant's Judgment | Narrow (only power 4+); moved to the sideboard where it answers fatties, cycling when dead. |
| Icy Manipulator | Repeatable tapper/soft-lock (colorless, cap-free) — a fine pillowfort lever, but Deck A is the tapper deck; here Mind Stone's ramp/velocity to reach the 4-drop keystones is preferred. A reasonable swap for the go-wide matchup. |
| Gerrard's Verdict | On-color WB hand disruption + lifegain that would address both the noncreature-permanent gap and the race in one card; kept the disruption in the sideboard (Duress) to stay maximally reactive, but a strong maindeck flex. |
| Phantom Flock | Recurring 3/3 defensive flier (prevents damage by removing a +1/+1 counter) — a resilient blocker/clock and Yawgmoth fodder; a good swap if more win-condition density is wanted over a removal spell. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.16 adj [MV 2.87 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  46.4%  prod  52.9%  gap  -6.5pp  [OK]
  W  demand  53.6%  prod  52.9%  gap  +0.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons/uncommons <= 2 copies each:        PASS
Rares/mythics <= 1 copy each:              PASS
Rares/mythics total <= 5 (main+SB):        PASS (5/5): Maze of Ith, No Mercy, Windborn Muse, Wrath of God, Yawgmoth, Thran Physician
All cards from cube pool:                  PASS
Colour usable in W/B: PASS
Deck size 40 + sideboard 10:               PASS
```