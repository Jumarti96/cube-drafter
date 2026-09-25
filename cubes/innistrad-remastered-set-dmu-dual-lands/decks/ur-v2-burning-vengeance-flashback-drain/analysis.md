---
deck_name: "ur-v2-burning-vengeance-flashback-drain"
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
  x5   Island
  x9   Mountain
  x2   Molten Tributary                             Island Mountain, taps for RU, enters tapped
```

### CREATURES (6)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Lantern Bearer // Lanterns' Lift             x2    U     engine                         C
  2  Deranged Assistant                           x1    U     engine                         C
  2  Thermo-Alchemist                             x2    R     payoff                         U
  2  Thing in the Ice // Awoken Horror            x1    U     payoff                         R
```

### INSTANTS & SORCERIES (15)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Faithless Looting                            x2    R     engine                         C
  1  Lightning Axe                                x2    R     interaction                    U
  1  Syncopate                                    x2    U     interaction                    C
  2  Abrade                                       x2    R     interaction                    U
  2  Galvanic Iteration                           x1    UR    engine                         R
  2  Think Twice                                  x2    U     engine                         C
  3  Fiery Temper                                 x2    R     interaction                    U
  5  Seize the Storm                              x2    R     payoff                         C
```

### OTHER SPELLS (3)

```
CMC  Card                                         Qty   Color Role                           Rar
  3  Burning Vengeance                            x2    R     payoff                         U
  3  Chandra, Dressed to Kill                     x1    R     engine                         M
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Collective Defiance                          x1    R     interaction: vs 4-toughness threat + planeswal R
Geistlight Snare                             x2    U     interaction: vs one-resolved-spell decks       U
Imprisoned in the Moon                       x2    U     interaction: vs planeswalkers, indestructible  C
Nebelgast Herald                             x1    U     interaction: vs ground aggro (flash blocker)   U
Savage Alliance                              x2    R     interaction: vs token swarms / x-1 boards      U
Memory Deluge                                x1    U     engine: vs control mirrors / slow decks        R
Smoldering Werewolf // Erupting Dreadwolf    x1    R     interaction: vs Spirit/token x-1 boards        U
```

## ANALYSIS

### DECK IDENTITY

A UR control deck whose damage comes from the graveyard rather than from the battlefield. Nine cards in the mainboard can be cast a second time out of the yard - the flashback halves of Faithless Looting x2, Think Twice x2, Seize the Storm x2 and Galvanic Iteration, and the disturb halves of Lantern Bearer x2 - and each of those casts triggers Burning Vengeance for 2 damage to any target. Being honest about the arithmetic: collecting all nine costs 35 mana of flashback on top of the first casts, which a 16-land deck does not generate by turn 8, so Burning Vengeance is a SUPPLEMENTARY drain and a repeatable removal spell rather than the clock. The clock is Thermo-Alchemist x2, which converts the deck's 15 instants and sorceries into 4-6 damage per turn cycle from turn 5 without ever tapping mana, and Seize the Storm, whose one 5-mana cast makes a trampler as big as the graveyard the deck has been filling anyway.

### THE COUNT THIS DECK IS BUILT ON

Burning Vengeance reads "Whenever you cast a spell **from your graveyard**, this enchantment deals 2 damage to any target." Nine cards in the mainboard can be cast a second time out of the yard:

| Card | Graveyard cost | Copies |
|---|---|---|
| Faithless Looting | Flashback {2}{R} | 2 |
| Think Twice | Flashback {2}{U} | 2 |
| Lantern Bearer | Disturb {2}{U} | 2 |
| Seize the Storm | Flashback {6}{R} | 2 |
| Galvanic Iteration | Flashback {1}{U}{R} | 1 |

**9 triggers = 18 damage per copy of Burning Vengeance, 36 with both.** Fiery Temper's Madness casts from exile rather than the graveyard and contributes 0.

### WHY BURNING VENGEANCE IS NOT THE CLOCK

Summing those printed costs: 6 + 6 + 6 + 14 + 3 = **35 mana of graveyard casts**, on top of the first casts of 24 nonland cards. A 16-land deck generates roughly 34 cumulative mana through turn 8. Realising all nine triggers is a turn-12 line, not a turn-8 one - so the honest reading is that Burning Vengeance is a **supplementary drain and a repeatable "2 damage to any target" removal effect**, and the clock is elsewhere:

- **Thermo-Alchemist x2** converts the deck's 15 instants and sorceries into 4-6 damage per turn cycle from turn 5, and never taps mana to do it.
- **Seize the Storm x2** is one 5-mana cast for a trampler as big as the graveyard the deck was filling anyway - and its second clause counts "cards with flashback you own in **exile**", so the engine's exile cost grows it instead of draining it.

### THE FLASHBACK / GRAVEYARD TENSION, RESOLVED

Every flashback cast exiles the card. That is a cost for a payoff counting the graveyard and a benefit for one counting exile. This deck runs the second kind (Seize the Storm) and not the first (Rise from the Tides), which is the single clearest difference between it and the Docent swarm build - same cube, same colours, opposite resolution of the same tension.

### CARDS CONSIDERED BUT EXCLUDED - THE ITERATION GUIDE

**Rares and mythics cut against the 5-card limit** (the budget is fully spent on Thing in the Ice, Galvanic Iteration, Chandra Dressed to Kill, Memory Deluge and Collective Defiance):

| Card | Why it lost the slot |
|---|---|
| Stormcarved Coast | The only untapped-capable UR dual, and a real upgrade over a basic - but Chandra took the last slot because a mana-producing permanent that also deals damage attacks the deck's stated 35-mana problem twice over. |
| Docent of Perfection | Wizards in this list: 0. It flips only off its own tokens, three spell casts after a 5-mana turn. |
| Bedlam Reveler | Its ETB "discard your hand, then draw three cards" discards the flashback cards this deck is holding to pay for. |
| Hullbreaker Horror | {5}{U}{U} = 7 mana, an entire turn of a plan that wants to cast two spells a turn. |
| Jace, Unraveler of Secrets | 5 mana competing with the turns the deck deploys Seize the Storm. |

**Uncommons and commons a tier below the includes:**

| Card | Why |
|---|---|
| Forbidden Alchemy | Bins 3 cards per cast, but its own flashback is {6}{B} - the only mainboard card contributing 0 Burning Vengeance triggers. Cut at Phase 9 for Deranged Assistant and Chandra. |
| Mystic Retrieval | Cannot return a spent flashback card - every flashback ends "Then exile it". Its 8 legal targets are the non-flashback spells, and at {3}{U} it competes with holding up Syncopate. |
| Silent Departure | Would be graveyard casts #10 and #11 (+22% triggers), but its flashback is {4}{U} - the second-worst rate in the deck after Seize the Storm. |
| Covetous Castaway | A disturb body, so a real trigger, but the disturb cost is {3}{U}{U}. |
| Tower Geist | A guaranteed card into the yard on a 2/2 flier; cut on curve against a deck already holding 5 three-drops. |

**Sideboard-consideration cards not taken:** Spontaneous Mutation (-X/-0 leaves the blocker alive), Reckless Scholar (a repeatable outlet, but a 3-mana 1/1 that does nothing the turn it lands), Alchemist's Greeting (4 damage off a discard, but a 5-mana hard cast), Summary Dismissal (answers a whole stack, but {2}{U}{U} in a deck with 7 blue sources).

### SIDEBOARD GUIDE

The `Role / When to board in` column above is width-limited; this is the full reasoning.

| Card | Qty | When to board in |
|---|---|---|
| Imprisoned in the Moon | x2 | In vs any permanent damage cannot answer - planeswalkers, high-toughness or indestructible creatures, Chalice of Death, an enchanted voltron creature. 'Enchanted permanent is a colorless land ... and loses all other card types and abilities.' |
| Savage Alliance | x2 | In vs the cube's token decks (Lingering Souls, Spider Spawning, Gather the Townsfolk). Escalate '1 damage to each creature target opponent controls' for {1} extra sweeps x/1 swarms this deck otherwise loses to. |
| Geistlight Snare | x2 | In vs decks that win with one resolved spell. 'This spell costs {1} less to cast if you control a Spirit. It also costs {1} less to cast if you control an enchantment' - Burning Vengeance is an enchantment and Lantern Bearer is a Spirit, so in this shell it is routinely a 1-2 mana 'Counter target spell unless its controller pays {3}'. |
| Nebelgast Herald | x1 | In vs ground aggro that races the turn-8 clock. 'Flash / Flying / Whenever this creature or another Spirit you control enters, tap target creature an opponent controls' - boarded as a flash flier that ambushes an attacker, NOT as a tribal engine: the only other Spirits in these 50 cards are Lantern Bearer x2, and Lantern Bearer's disturb face is Lanterns' Lift, an Aura rather than a Spirit creature, so it does not re-trigger the Herald. Repeatable triggers available: 2 of 50. |
| Memory Deluge | x1 | In vs other slow decks and control mirrors, where the {5}{U}{U} flashback is affordable and four cards across two casts wins the attrition war. Out vs anything that kills before turn 8. |
| Collective Defiance | x1 | In vs decks with a 4-toughness threat plus a planeswalker: escalate lets one card do 'deals 4 damage to target creature' and 'deals 3 damage to target opponent or planeswalker' in the same turn. |
| Smoldering Werewolf // Erupting Dreadwolf | x1 | In vs Spirit/token decks with multiple x/1 and x/2 bodies - 'deals 1 damage to each of up to two target creatures' on ETB is a two-for-one attached to a 3/3 blocker. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (24 nonland):  1:8  2:9  3:5  5:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.7: Thing in the Ice // Awoken Horror@0.7) → p=0.94 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.1: Lantern Bearer // Lanterns' Lift@0.8, Lantern Bearer // Lanterns' Lift@0.8, Deranged Assistant@0.8, Chandra, Dressed to Kill@0.7) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 80%  T2 97%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Thing in the Ice // Awoken Horror
  OK        single_large_threat: Lightning Axe, Syncopate, Thing in the Ice // Awoken Horror, Abrade
  OK        noncreature_permanents: Abrade, Syncopate, Chandra, Dressed to Kill
  OK        stack: Syncopate
  CONCEDED  graveyard: The cube's structural census reports 0 graveyard-hate cards, but a 0-match regex probe proves nothing (dossier census_caveat) and this claim was checked against oracle text rather than the probe. Two cards in the pool DO exile from a graveyard: Invasion of Innistrad // Deluge of the Dead ('{2}{B}: Exile target card from a graveyard') and Soul-Guide Gryff ('When this creature enters, exile up to one target card from a graveyard'). Both are black or white, both are one-card-at-a-time, and no mass graveyard exile exists in the pool. So graveyard interaction here is slow and incremental rather than absent, and this deck has no answer to it in these colours. Syncopate's 'exile it instead of putting it into its owner's graveyard' is this deck's only graveyard denial and works only on the stack.
```

_No WARN-tier structural flags were raised._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Every excess land is ammunition: the 9 graveyard casts total 35 mana of sinks (Faithless Looting {2}{R} x2, Think Twice {2}{U} x2, Lantern Bearer disturb {2}{U} x2, Galvanic Iteration {1}{U}{R}, Seize the Storm {6}{R} x2), and each is 2 damage per Burning Vengeance on board. Chandra's '+1: Add {R}' turns a flooded board into an extra spell per turn, and Deranged Assistant's '{T}, Mill a card: Add {C}' converts a spare tap into both mana and a graveyard card. |
| `screw` | mitigation | 8 of 24 nonland cards cost 1 and 8 more cost 2, so a two-land hand casts Faithless Looting, Lightning Axe, Lantern Bearer, Syncopate, Think Twice, Thermo-Alchemist, Abrade and Thing in the Ice. Faithless Looting ('Draw two cards, then discard two cards') digs, and its discards are not lost - they are exactly the flashback and madness cards this deck wants in the yard. Goldfish measured 84% keepable. |
| `decapitation` | mitigation | Burning Vengeance is a 2-of, and it is not the only damage source: Thermo-Alchemist x2 pings independently of it and Seize the Storm x2 wins without it. If both Vengeances are answered the deck still has 7 payoff copies across three different mechanisms - noncombat ping, graveyard-scaled trampler, and Awoken Horror. |
| `gas-out` | mitigation | Think Twice x2 is net-positive draw at both ends; Chandra's second +1 ('Exile the top card of your library. If it's red, you may cast it this turn') is repeatable card access against 19 of 28 red pips; and 9 cards in the graveyard remain castable when the hand is empty, which is a second hand the opponent cannot attack. An empty hand with 5 lands untapped is a normal, good position here. |
| `raced` | accepted | Against the cube's fastest clocks - W/B token aggro and Vampire madness - a turn-8 goldfish is too slow to win the damage race outright, and this deck fields only 5 creature cards, of which 2 are Defenders and 2 are 1/1 fliers. Mitigating would mean maindecking Nebelgast Herald and Savage Alliance and cutting two of the nine graveyard-cast cards, which subtracts directly from the win condition's ammunition - the deck would answer the board better and then have nothing to kill with. They are in the sideboard, where the matchup is known. |
| `disruption-fizzle` | mitigation | There is no critical turn to interact with. Burning Vengeance's damage arrives 2 points at a time across many turns, so a counterspell aimed at any single graveyard cast costs the opponent a card to prevent 2 damage. The one genuinely critical cast is Seize the Storm, and it has 'Flashback {6}{R}' - if the first copy is countered it is still in the graveyard and can be cast again, which is the specific reason it was chosen over Rise from the Tides. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Crawl from the Cellar, Gravecrawler, Gisa and Geralf | The three named black splash candidates. Declined on the mana base, not on the cards: the UR pair has exactly 2 free duals in the whole cube (Molten Tributary common, Stormcarved Coast rare) and there is no UB or BR fixing that also produces U and R, so every black source added is a source subtracted from a deck that must cast {2}{U}{U} (Memory Deluge), {1}{R}{R} and {5}{U}{U} flashback costs on curve. splash_colors is recorded as [B] by the deterministic filter; zero splash cards are played. |
| Stensia Masquerade | 'Whenever a Vampire you control deals combat damage to a player' - the payoff clause names Vampires, and the graveyard/flashback pipeline fields none; the first-strike half is a combat-only effect with no card advantage |
| Vexing Devil | 'any opponent may have it deal 4 damage to them. If a player does, sacrifice this creature' - the opponent chooses, and against a deck planning to win at turn 8+ they will simply take 4 and deny the body; a one-shot 4 damage is not a resource this pipeline converts |
| Laboratory Maniac | 'If you would draw a card while your library has no cards in it, you win the game instead' - this deck mills 1-3 cards a turn at most and has no library-emptying engine in UR, so the win clause is unreachable |
| Distended Mindbender | 'Emerge {5}{B}{B}' requires two black pips and the hard cast is {8}; with no black sources the emerge mode is unavailable and the alternative is an 8-mana creature |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.17 adj [MV 2.12 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  67.9%  prod  68.8%  gap  -0.9pp  [OK]
  U  demand  32.1%  prod  43.8%  gap -11.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons capped at 2 copies: PASS - every 2-of is a common or uncommon (Burning Vengeance U, Thermo-Alchemist U, Seize the Storm C, Lantern Bearer C, Faithless Looting C, Think Twice C, Lightning Axe U, Abrade U, Fiery Temper U, Syncopate C, Molten Tributary C; sideboard Imprisoned in the Moon C, Savage Alliance U, Geistlight Snare U).
[PASS] Rares/mythics capped at 1 copy: PASS - Thing in the Ice, Galvanic Iteration and Chandra, Dressed to Kill (mainboard); Memory Deluge and Collective Defiance (sideboard).
[PASS] At most 5 rare/mythic cards across mainboard + sideboard: PASS - 5 used, 0 unspent. Verified by Phase 5C check 6.
[PASS] Basic lands format-supplied and exempt: PASS - 5 Island, 9 Mountain.
[PASS] Forbidden Alchemy was cut at Phase 9, so the deck no longer contains any card played off its printed colour identity; Phase 5C check 4 now reports no off-identity modes.: PASS - Forbidden Alchemy was cut at Phase 9, so the deck no longer contains any card played off its printed colour identity; Phase 5C check 4 now reports no off-identity modes.
```