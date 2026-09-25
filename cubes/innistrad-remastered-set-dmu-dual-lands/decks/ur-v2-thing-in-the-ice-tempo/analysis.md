---
deck_name: "ur-v2-thing-in-the-ice-tempo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-08-31T03:36:36Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x7   Island
  x6   Mountain
  x2   Molten Tributary                             Island Mountain, taps for RU, enters tapped
  x1   Stormcarved Coast                            taps for RU, conditionally tapped
```

### CREATURES (11)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Delver of Secrets // Insectile Aberration    x2    U     threat                         C
  1  Vexing Devil                                 x1    R     threat                         R
  2  Festival Crasher                             x2    R     payoff                         C
  2  Thermo-Alchemist                             x2    R     payoff                         U
  2  Thing in the Ice // Awoken Horror            x1    U     payoff                         R
  3  Wandering Mind                               x1    UR    threat                         U
  4  Mist Raven                                   x2    U     threat                         U
```

### INSTANTS & SORCERIES (13)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Faithless Looting                            x2    R     engine                         C
  1  Lightning Axe                                x2    R     interaction                    U
  1  Silent Departure                             x2    U     interaction                    C
  2  Abrade                                       x1    R     interaction                    U
  2  Think Twice                                  x2    U     engine                         C
  3  Collective Defiance                          x1    R     interaction                    R
  3  Fiery Temper                                 x2    R     interaction                    U
  4  Memory Deluge                                x1    U     engine                         R
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Syncopate                                    x2    U     interaction: vs single-haymaker / graveyard de C
Compelling Deterrence                        x2    U     interaction: vs auras & equipment voltron      U
Imprisoned in the Moon                       x2    U     interaction: vs planeswalkers, indestructible  C
Nebelgast Herald                             x2    U     interaction: vs ground aggro (flash blocker)   U
Savage Alliance                              x2    R     interaction: vs token swarms / x-1 boards      U
```

## ANALYSIS

### DECK IDENTITY

A UR tempo deck that uses cheap instants and sorceries as a resource twice over: once to answer or bounce whatever is in the way, and once as a trigger for creatures that grow, untap or transform when a spell is cast. Delver of Secrets and Thing in the Ice convert a normal turn of interaction into an evasive or oversized body; Festival Crasher turns each spell into +2 damage the turn it is cast; Thermo-Alchemist converts every spell into a free ping and closes games the board cannot. Faithless Looting and Lightning Axe double as discard outlets that turn Fiery Temper into a one-mana three-damage spell, and the flashback halves of Faithless Looting, Silent Departure, Think Twice and Memory Deluge mean one card in hand is two spell casts across the game.

### THE COUNT THIS DECK IS BUILT ON

13 of the 40 mainboard cards are instants or sorceries, and 6 of those 13 carry flashback (Faithless Looting x2, Silent Departure x2, Think Twice x2) with Memory Deluge making a seventh - so 13 physical cards produce **20 cast events**. Every payoff in the deck reads that number:

| Payoff | Clause | What 20 cast events buys |
|---|---|---|
| Thing in the Ice | "remove an ice counter" per instant/sorcery cast, 4 to flip | Flips turn 5 at ~1.5 spells/turn from turn 2 |
| Delver of Secrets | flips on an instant/sorcery revealed at upkeep | 13/40 = 32.5% per upkeep; 69% across turns 2-4 |
| Festival Crasher | "+2/+0 until end of turn" per cast | A 4/2 on a one-spell turn, 6/2 on two |
| Thermo-Alchemist | untaps per cast | ~5 damage per turn cycle with both copies from turn 3 |

### THE MADNESS SUB-ENGINE

Four cards in the list are discard outlets - Faithless Looting x2 ("Draw two cards, then discard two cards") and Lightning Axe x2, whose additional cost is literally "discard a card". They generate up to 10 discard events across a game. Fiery Temper x2 reads "Madness {R}", so a discard converts a 3-mana burn spell into a 1-mana one. Lightning Axe discarding Fiery Temper is two mana for "5 damage to a creature" plus "3 damage to any target" - the best rate in the deck.

### WHAT THE FLIP ACTUALLY COSTS

Awoken Horror's trigger reads "return **all** non-Horror creatures to their owners' hands". 9 of this deck's 11 creature cards are non-Horror, so flipping Thing in the Ice bounces the deck's own board. That is why Thing is weighted 0.6 in the assembly check rather than treated as the plan: the deck is built so the clock survives without it. The saving grace is that all 9 cost 4 or less and Mist Raven x2 and Wandering Mind actively **want** to be recast for their enter-the-battlefield triggers.

### CARDS CONSIDERED BUT EXCLUDED - THE ITERATION GUIDE

**Rares and mythics cut against the 5-card limit** (the budget is fully spent on Thing in the Ice, Vexing Devil, Memory Deluge, Collective Defiance and Stormcarved Coast):

| Card | Why it lost the slot |
|---|---|
| Chandra, Dressed to Kill | A 3-mana permanent that casts no instant or sorcery, so it advances none of the four payoff counters. |
| Overcharged Amalgam | The only proactive stack answer in these colours, but a fourth 4-drop against three existing, and its Exploit cost eats one of the 11 bodies that are the clock. |
| Mausoleum Wanderer | Its counter taxes "X, where X is this creature's power" - power 1 with 0 other Spirits, so it taxes exactly 1 mana. |
| Galvanic Iteration | A copy is put on the stack, not cast, so it advances 0 ice counters and 0 Delver flips. Two cast events for {U}{R}, which Think Twice matches at better colours. |
| Docent of Perfection | 5 mana in a deck whose curve tops at 4 and whose plan is finished by turn 5. |

**Uncommons a tier below the includes:**

| Card | Why |
|---|---|
| Alchemist's Greeting | "Madness {1}{R}" for 4 damage is a better rate than Fiery Temper, but the hard cast is {4}{R} - a fifth 5-drop in a deck with none. |
| Smoldering Werewolf | A 2-for-1 against x/1 swarms, but a fourth 4-drop; Savage Alliance covers the class from the sideboard at 3 mana. |
| Stromkirk Occultist | 3 power with card advantage, but a ground creature with no evasion, and taking it pushes red past 60% of pip demand. |
| Cackling Counterpart | The best target, Thing in the Ice, is a singleton - and a copied Thing enters with four fresh ice counters rather than inheriting progress. |
| Stitched Mangler | "This creature enters tapped" means it cannot block the turn it lands, which is exactly the turn a raced tempo deck needs a blocker. |

**Sideboard-consideration cards not taken:** Forbidden Alchemy (a 3-drop in a slot holding 4 cards, and its "the rest into your graveyard" clause is a payoff for the Flashback-Drain build, not this one), Essence Flux (blinking Thing in the Ice RESETS it to four ice counters; only 2 worthwhile targets), Lantern Bearer (its disturb half resolves as an Aura, a graveyard-cast payoff this deck has nothing to convert).

### SIDEBOARD GUIDE

The `Role / When to board in` column above is width-limited; this is the full reasoning.

| Card | Qty | When to board in |
|---|---|---|
| Syncopate | x2 | In vs decks whose plan is one expensive haymaker (Emrakul/Griselbrand reanimator, Rise from the Tides): 'Counter target spell unless its controller pays {X}. If that spell is countered this way, exile it' also strips the target from a 75-card graveyard-dense cube. |
| Imprisoned in the Moon | x2 | In vs any permanent this deck's damage-based removal cannot answer - planeswalkers, indestructible or hexproof creatures, Bloodline Keeper, Chalice of Death. 'Enchanted permanent is a colorless land ... and loses all other card types and abilities.' |
| Savage Alliance | x2 | In vs the cube's token/wide decks (Lingering Souls, Spider Spawning, Gather the Townsfolk, Docent). Escalate mode 'deals 1 damage to each creature target opponent controls' sweeps x/1 swarms; the escalate cost is only {1}. |
| Compelling Deterrence | x2 | In vs auras/equipment voltron (Faith Unbroken, Lunarch Mantle, Butcher's Cleaver) - 'Return target nonland permanent to its owner's hand' at instant speed two-for-ones the enchanted creature. |
| Nebelgast Herald | x2 | In vs ground aggro. 'Flash / Flying / Whenever this or another Spirit you control enters, tap target creature an opponent controls' ambushes an attacker and blanks a blocker on the crack-back. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  1:9  2:8  3:4  4:3
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.6: Thing in the Ice // Awoken Horror@0.6) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 13 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 84%  T2 99%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Thing in the Ice // Awoken Horror, Fiery Temper
  OK        single_large_threat: Lightning Axe, Silent Departure, Mist Raven, Thing in the Ice // Awoken Horror
  OK        noncreature_permanents: Abrade, Collective Defiance
  CONCEDED  stack: Conceded on curve and on the rare budget, not on holding up mana. The pool's one proactive stack answer in these colours is Overcharged Amalgam ({2}{U}{U}, rare, 'when this creature exploits a creature, counter target spell'), and after adding Stormcarved Coast and Collective Defiance the rare/mythic budget is at 5 of 5; it is also a fourth 4-drop in a deck that already runs three. Syncopate x2 in the sideboard is the answer when the matchup demands it.
  CONCEDED  graveyard: The cube's structural census reports 0 graveyard-hate cards, but a 0-match regex probe proves nothing (dossier census_caveat) and this claim was checked against oracle text rather than the probe. Two cards in the pool DO exile from a graveyard: Invasion of Innistrad // Deluge of the Dead ('{2}{B}: Exile target card from a graveyard') and Soul-Guide Gryff ('When this creature enters, exile up to one target card from a graveyard'). Both are black or white, both are one-card-at-a-time, and no mass graveyard exile exists in the pool. So graveyard interaction here is slow and incremental rather than absent, and this deck has no answer to it in these colours. This deck's plan is to be faster than the graveyard decks rather than to interact with them.
```

_No WARN-tier structural flags were raised._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | 16 lands is the lowest count the land_target function permits at this curve, and the surplus has sinks: Faithless Looting/Silent Departure/Think Twice/Memory Deluge all have flashback costs of 3-7 mana, so a flooded hand converts extra lands into second casts of cards already spent. Thermo-Alchemist needs no mana at all to keep pinging. |
| `screw` | mitigation | 9 of 24 nonland cards cost 1 mana and 9 more cost 2, so a two-land hand still casts Delver, Vexing Devil, Faithless Looting, Lightning Axe, Silent Departure, Festival Crasher, Thermo-Alchemist, Thing in the Ice and Abrade. Faithless Looting x2 ('Draw two cards, then discard two cards') is the dig. The goldfish check measured 83% keepable hands. |
| `decapitation` | mitigation | There is no single key card: the clock is spread across Delver x2, Festival Crasher x2, Thermo-Alchemist x2, Vexing Devil and Mist Raven x2 - 9 bodies. Thing in the Ice is deliberately weighted at 0.6 in the assembly check precisely so the deck is not built to depend on it. |
| `gas-out` | mitigation | Think Twice x2 and Memory Deluge are net-positive card draw with flashback (4 draws from Memory Deluge alone across two casts), and Wandering Mind's ETB 'look at the top six cards ... put it into your hand' refuels. The flashback halves of Faithless Looting x2, Silent Departure x2 and Think Twice x2 mean 6 additional castable cards sit in the graveyard when the hand is empty, 7 counting Memory Deluge. |
| `raced` | accepted | The cube's fastest clocks are the W/B token and Vampire aggro decks, and this deck has 9 one-mana plays and 8 pieces of removal but only 2 lifegain-free blockers; against a turn-4 kill the deck must trade resources rather than stabilise. Mitigating - adding Nebelgast Herald and Savage Alliance to the mainboard - would cost 4 of the 8 interaction slots that are currently pointed at the opponent's threats AND at advancing flip counters, converting a tempo deck into a reactive one. Those cards are in the sideboard instead, where the matchup is known. |
| `disruption-fizzle` | mitigation | Corrected mechanism: Thing in the Ice's trigger reads 'Whenever you CAST an instant or sorcery spell, remove an ice counter' - casting is the trigger, so a counterspell resolving afterward does not undo it. The flip clock is immune to counterspells by construction. The real fizzle exposure is targets, not the stack: 5 of 24 nonland cards (Lightning Axe x2, Silent Departure x2, Abrade) require an opposing creature and are dead against a creature-light opponent. Against that board the deck still advances every payoff with 5 fully targetless cast events - Faithless Looting x2, Think Twice x2 and Memory Deluge - while Fiery Temper x2 and Collective Defiance both read 'any target' / 'target opponent or planeswalker' and are therefore never dead. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Village Messenger // Moonrise Intruder | flip clause reads 'At the beginning of each upkeep, if no spells were cast last turn, transform' - anti-correlated with a deck that casts an instant or sorcery nearly every turn, so it stays a 1/1 |
| Covetous Castaway // Ghostly Castigator | 'When this creature dies, mill three cards' - self-mill is the Flashback-Drain plan's resource, not this tempo build's; the disturb half costs {3}{U}{U} |
| Reckless Scholar | '{T}: Target player draws a card, then discards a card' - sorcery-speed, no board impact, and a tempo deck cannot spend turn three tapping a 1/1 |
| Through the Breach | 'put a creature card from your hand onto the battlefield ... Sacrifice that creature at the beginning of the next end step' - there is no creature in the UR pool whose ETB wins on the spot, so it cheats in a body that dies |
| Soulcipher Board // Cipherbound Spirit | transform needs three creature cards put into the graveyard; this list runs few creatures and does not mill them |
| Cobbled Lancer | 'As an additional cost to cast this spell, exile a creature card from your graveyard' - on turn one there is no creature in the yard, so it is uncastable in the window a one-drop matters |
| Geier Reach Bandit // Vildin-Pack Alpha, Hanweir Watchkeep // Bane of Hanweir, Village Messenger // Moonrise Intruder | CORRECTED REASON (the original bucket described these as tribal cards; their operative clause is a SPELL COUNT). Each reads 'At the beginning of each upkeep, if no spells were cast last turn, transform this creature', and the reverse clause flips them back 'if a player cast two or more spells last turn'. Count against the finished list: 13 of 40 cards are instants or sorceries plus 7 flashback re-casts = 20 cast events, so this deck casts a spell on nearly every turn and these permanently stay on their weak front faces - Hanweir Watchkeep as a 1/5 Defender, Geier Reach Bandit as a 2/2. The cut is correct; the count is what makes it correct. |
| Lupine Prototype | CORRECTED REASON. Its clause is a HAND COUNT, not a tribe: 'can't attack or block unless a player has no cards in hand'. Count against this list: the deck runs Faithless Looting x2, Think Twice x2, Memory Deluge and Wandering Mind and holds cards back for flashback, so it is hellbent essentially never, and the opponent controls their own hand size. A 2-mana 5/5 that cannot attack. |
| Furyblade Vampire, Blood Petal Celebrant | CORRECTED REASON (the original bucket said 'all cost 3+' and 'none interacts with instants or sorceries' - both false for these two, which cost 2 and are discard outlets). The real count: this deck already runs 4 discard outlets (Faithless Looting x2, Lightning Axe x2) against 2 madness cards (Fiery Temper x2), so outlets outnumber madness targets 2:1 and a fifth and sixth outlet has nothing to feed. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.04   Ramp cards: 0   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.28 adj [MV 2.04 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  54.8%  prod  56.2%  gap  -1.4pp  [OK]
  U  demand  45.2%  prod  62.5%  gap -17.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons capped at 2 copies: PASS - every 2-of in this list (Delver, Festival Crasher, Thermo-Alchemist, Mist Raven, Faithless Looting, Lightning Axe, Silent Departure, Think Twice, Abrade, Fiery Temper, Molten Tributary, and all five sideboard pairs) is a common or uncommon.
[PASS] Rares/mythics capped at 1 copy: PASS - Thing in the Ice x1, Vexing Devil x1, Memory Deluge x1.
[PASS] At most 5 rare/mythic cards across mainboard + sideboard: PASS - 3 used (all mainboard), 2 unspent. Verified by Phase 5C check 6.
[PASS] Basic lands are format-supplied and exempt from copy limits: PASS - 7 Island, 7 Mountain.
[PASS] All 40 mainboard and 10 sideboard cards exist by exact name in the cube mainboard pool.: PASS - All 40 mainboard and 10 sideboard cards exist by exact name in the cube mainboard pool.
```