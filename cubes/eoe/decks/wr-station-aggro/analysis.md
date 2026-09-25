---
deck_name: "w-r-station-aggro"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WR"
format: "40-card"
built_at: "2026-08-02T23:23:42Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
7x Plains                           
6x Mountain                         
2x Sacred Peaks                     WR dual (enters tapped)
1x Sacred Foundry                   only untapped-capable WR dual
```

### CREATURES (17)

```
CMC  Card                             Qty  Col Role                                                               Rar
---------------------------------------------------------------------------------------------------------------------
  1  Kavaron Harrier                  x2   R   Threat/Payoff — 1-drop body whose 2 power alone turns on Lumen-Cla U
  1  Starport Security                x1   W   Enabler/Fodder — repeatable instant-speed tapper; {2} cheaper off  C
  2  Honored Knight-Captain           x1   W   Enabler/Fodder — two bodies from one card satisfies the tapped cla U
  2  Starfighter Pilot                x2   W   Enabler/Fodder — Station fodder that surveils whenever it becomes  C
  2  Sunstar Chaplain                 x1   W   Threat/Payoff — end-step tapped payoff + second tap outlet         R
  2  Terrapact Intimidator            x1   R   Threat/Payoff — 2/1 that becomes 4/3 or nets two Lander artifacts  U
  3  Flight-Deck Coordinator          x2   W   Threat/Payoff — 3/3 body + end-step tapped payoff (race buffer)    C
  3  Frontline War-Rager              x2   R   Threat/Payoff — self-growing end-step tapped payoff                C
  3  Weftstalker Ardent               x2   R   Threat/Payoff — reach; damages each opponent on every permanent en U
  4  Memorial Team Leader             x1   R   Threat/Payoff — anthem redundancy on a 4/3 body; Warp {1}{R}       U
  4  Sami, Ship's Engineer            x2   WR  Threat/Payoff — end-step tapped payoff producing a free tapped 2/2 U
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                             Qty  Col Role                                                               Rar
---------------------------------------------------------------------------------------------------------------------
  1  Focus Fire                       x2   W   Interaction — scales with this deck's own width                    C
  2  Invasive Maneuvers               x1   R   Interaction — instant 5 damage with a Spacecraft out (3 in list)   U
```

### OTHER SPELLS (4)

```
CMC  Card                             Qty  Col Role                                                               Rar
---------------------------------------------------------------------------------------------------------------------
  1  Hardlight Containment            x1   W   Interaction — 1-mana exile; enabled by 9/24 artifact sources       R
  2  Lumen-Class Frigate              x1   W   Engine — 2+ anthem, the payoff the curve is built around           R
  2  Wurmwall Sweeper                 x2   C   Engine/Infra — cheapest Station sink + ETB surveil 2               C
```

## SIDEBOARD (10)

```
Card                             Qty  Col Role / When to board in                                                Rar
--------------------------------------------------------------------------------------------------------------------
Chrome Companion                 x1   C   Hate — graveyard | vs the 31-card graveyard class; repeatable, which v C
Drill Too Deep                   x2   R   Hate — artifacts | vs artifact decks; otherwise 5 charge counters on a C
Banishing Light                  x1   W   Hate — noncreature permanents | vs a resolved bomb or enchantment      C
Bombard                          x1   R   Flex — removal | vs a single large blocker Focus Fire cannot legally t C
Cut Propulsion                   x2   R   Hate — evasion/fliers | vs the 56-card evasion class; doubled damage v U
Emergency Eject                  x2   W   Hate — noncreature permanents | vs the 74-card artifact class and the  U
Radiant Strike                   x1   W   Hate — artifacts | vs artifact decks; also kills a tapped creature and C
```

## ANALYSIS

### DECK IDENTITY

A WR Station aggro deck. It deploys 1-2 MV bodies, then uses Station (a cost that taps a creature WITHOUT using that creature's {T} symbol, so summoning-sick creatures qualify) to turn Lumen-Class Frigate on at 2 charge counters, which permanently grants 'Other creatures you control get +1/+1'. Because attacking also taps creatures, the same board simultaneously satisfies the end-step 'if you control two or more tapped creatures' clause on Sunstar Chaplain, Frontline War-Rager, Flight-Deck Coordinator and Sami, Ship's Engineer, which compound width and counters each turn. The kill is combat damage, with Weftstalker Ardent supplying non-combat reach and Focus Fire, Invasive Maneuvers and Hardlight Containment clearing the single blocker in the way.

### HOW THE ENGINE ACTUALLY WORKS

Station is the load-bearing rules detail and it is easy to get wrong. Its cost reads "Tap another creature you control" and it does **not** use that creature's {T} symbol, so summoning sickness never applies - every creature can Station the turn it arrives. That makes each fresh body free fuel.

The two halves of the archetype are the same action seen twice:

- **Attacking taps creatures.** The end-step clause "if you control two or more tapped creatures" is therefore free on any turn you attack with two bodies. 8 of the 24 nonland cards read that clause or turn it on.
- **Station taps creatures without attacking.** This is the stalled-board mode: it satisfies the same clause when attacking is bad, and banks charge counters at the same time.

They are mutually exclusive *per creature* - a creature that Stations is tapped and cannot attack, and vice versa - but they produce the identical board state, which is what the payoffs check. Correct sequencing is precombat main: Station the summoning-sick and the unprofitable attackers, then swing with the rest.

The anthem math is the reason the curve is this low. Lumen-Class Frigate turns on at **2** charge counters, and 15 of the 24 nonland cards have power 2 or more, so a single Station flips it. A turn-2 Frigate is an anthem on turn 3.

### PLAY PATTERN AND KEY LINES

| Turn | Line |
|---|---|
| 1 | Kavaron Harrier ({R}) or Starport Security ({W}) |
| 2 | Lumen-Class Frigate, then Station the turn-1 body - the anthem is live immediately, and the tapped body counts toward the end-step clause |
| 3 | Two-drop + attack; end step turns on Sunstar Chaplain / Frontline War-Rager |
| 4 | Sami, Ship's Engineer - from here every end step produces a free tapped 2/2 |
| 5-6 | Attack with everything; Focus Fire clears the one blocker at X = 2 + board width |

Two specific interactions worth knowing:

- **Sami's token enters tapped.** It cannot Station the turn it appears (Station needs an untapped creature), but it does count toward the *next* end-step check while it is still tapped during the opponent's turn, and it untaps for your turn after.
- **Sunstar Chaplain's tapper does not make charge counters.** "{2}, Remove a +1/+1 counter from a creature you control: Tap target artifact or creature" taps a permanent; it does not pay Station's cost. Use it to tap an opposing blocker, or to tap your own creature to hit the two-tapped threshold - never expect counters from it.

### WHAT THE GRILL CHANGED

The Challenger raised two BLOCKING findings, both irreproducible counts, and both reversed a card I had excluded:

| Card | My original count | Reproduced count | Outcome |
|---|---|---|---|
| Starport Security | 1 of 24 counter-makers | 4 of 24 | EXCLUDE reversed - included x1 |
| Hardlight Containment | 5 of 24 artifact enablers | 9 of 24 (artifact *tokens* also qualify) | EXCLUDE reversed - included x1 |

Both errors were the same mistake: scoping a count too narrowly. "Enchant artifact you control" is not limited to nontoken artifacts, and I had counted only the card that makes counters on demand rather than the one that makes them every end step.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:6  2:9  3:6  4:3
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.85: Lumen-Class Frigate@0.85) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.4: Wurmwall Sweeper@0.7, Wurmwall Sweeper@0.7) → p=0.95 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 72%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in W or R in this pool at a cost this curve can pay; the deck instead wins the width race - Sami, Ship's Engineer adds a free tapped 2/2 every end step and Flight-Deck Coordinator's 'you gain 2 life' buys a turn in that race.
  OK        single_large_threat: Hardlight Containment, Invasive Maneuvers, Focus Fire
  CONCEDED  noncreature_permanents: No mainboard answer - Hardlight Containment exiles only creatures. The mainboard is committed to a turn-6 clock; Emergency Eject x2, Banishing Light x1, Radiant Strike x1 and Drill Too Deep x2 board in against artifact and enchantment decks.
  CONCEDED  stack: W and R contain no counterspells anywhere in this cube's pool, so stack interaction is unavailable at any deck-building cost; the plan is to resolve more threats than one-for-one answers can absorb.
  CONCEDED  graveyard: The cube's graveyard class is 12.5% density and mostly value recursion rather than a combo kill, so the mainboard spends no slot on it; Chrome Companion ('{2}, {T}: Put target card from a graveyard on the bottom of its owner's library') boards in as repeatable hate.
```

- No WARN flags were raised on the final list: curve, assembly, goldfish and coverage all returned PASS.
- Two slot bands are exceeded (Interaction 20.8% vs 10-15%; Engine & Infrastructure 12.5% vs 0-10%). Both are recorded in slot_allocation with thesis grounds and were reviewed and accepted by the Challenger.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands convert to action through Wurmwall Sweeper's ETB surveil 2 and Starfighter Pilot's 'whenever this creature becomes tapped, surveil 1' (which fires on every attack and every Station), both of which bin surplus lands off the top; Sami, Ship's Engineer turns each flooded turn into a free tapped 2/2 Robot with no card spent, and Kavaron Harrier's 'you may pay {2}' attack trigger is a mana sink that converts spare mana into an extra attacking body. |
| screw | mitigation | 15 of 24 nonland cards cost MV <= 2 and 6 cost MV 1, so a 2-land hand casts on curve through turn 2 and still turns on Lumen-Class Frigate's 2+ anthem (Frigate is {1}{W}, Station costs no mana); the goldfish check reports 84% keepable hands and 3 lands by turn 3 in 84% of games. |
| decapitation | mitigation | If Lumen-Class Frigate is answered on sight, the end-step payoff battery is untouched: Sunstar Chaplain, Frontline War-Rager x2, Flight-Deck Coordinator x2 and Sami, Ship's Engineer x2 all trigger off attacking alone and require no Spacecraft. 8 of the 9 payoff copies function without it, and Memorial Team Leader supplies a second anthem on a 4/3 body. |
| gas-out | mitigation | Sami, Ship's Engineer is the refuel: 'create a tapped 2/2 colorless Robot artifact creature token' every end step from an empty hand. Starfighter Pilot x2 and Wurmwall Sweeper x2 supply surveil to improve the top of the deck. Kavaron Harrier x2 convert spare mana into an extra attacking body each combat. So the deck keeps producing board with no cards in hand - though surveil is selection, not card advantage, which is the honest limit of this answer. |
| raced | accepted | Against the fastest clocks in the cube this deck sometimes has to be the beatdown and sometimes the blocker, and it has only 4 interaction cards. Mitigating further would mean cutting bodies for removal, which directly attacks the 'two or more tapped creatures' clause - the payoffs need a wide board, not a clean one. Flight-Deck Coordinator's 'you gain 2 life' each end step is the concession to racing that does not cost a body. |
| disruption-fizzle | mitigation | There is no critical turn to interact with - the deck has no combo step. Removal on any single creature costs it one of 17 bodies; the end-step payoff clause needs only TWO tapped creatures, a floor that a one-for-one answer does not break. Station itself cannot be responded to profitably: it is a cost, and the charge counters stay on the Spacecraft permanently once paid. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Dawnsire, Sunstar Dreadnought (M) | Its attack trigger needs 10 charge counters and it is not a creature until 20. This list's creatures average 2.3 power, so 10 counters is ~5 Station activations - far past a turn-6 clock. It is the centrepiece of the Big-Ship build instead. |
| Warmaker Gunship (R) | ETB deals damage equal to artifacts you control; this list has 5 nontoken artifacts of 24 nonland cards, so the ETB is usually 1-3 damage. |
| The Seriema (R) | {1}{W}{W} for a noncreature that tutors a legendary creature; a turn-3 blank in a deck whose plan requires attacking on turn 3. |
| Weapons Manufacturing (R) | Triggers only on nontoken artifacts entering: 5 of the 24 nonland cards qualify. |
| Cosmogrand Zenith (M) | Its trigger needs a second spell each turn, which 16 of 24 cards at MV <= 2 do support - but it is a 3-drop and the 3-slot already holds 6 cards. Strongest of the unspent rare slots if iterating. |
| Tannuk, Steadfast Second (M) | 'Other creatures you control have haste' across 17 creatures is real, but {2}{R}{R} against 9 red sources is not castable on curve here. |
| Beyond the Quiet (R) | 'Exile all creatures and Spacecraft' - Spacecraft below their threshold are still Spacecraft, so it exiles this deck's own Lumen-Class Frigate and Wurmwall Sweepers along with everything else. |
| Lightstall Inquisitor (R) | Vigilance means attacking does not tap it, so it actively fails the 'two or more tapped creatures' check that 8 of 24 cards read. |
| Brightspear Zealot (C) | Same mechanism: vigilance is anti-synergy with a deck whose payoffs count tapped creatures. |
| Nova Hellkite (R), Pinnacle Starcage (R) | 5 MV and {1}{W}{W} respectively; both sit above this curve's ceiling of 4, and Pinnacle Starcage's 'exile all artifacts and creatures with mana value 2 or less' would exile 15 of this deck's own cards. |
| Vaultguard Trooper (U) | A genuine end-step tapped payoff, but {4}{R} for a 5/5 is MV 5 - above this build's ceiling. It is a mainboard card in the Big-Ship build. |
| Dawnstrike Vanguard (U) | The strongest tapped payoff in the pool ('put a +1/+1 counter on each creature you control other than this creature') but {5}{W} is two turns past the clock. |
| Galvanizing Sawship (U) | 3+ threshold is the lowest of any big Spacecraft, but {5}{R} arrives after the goldfish turn in this shell. |
| Dual-Sun Adepts (U) | 2/2 double strike scales beautifully with the Frigate anthem; cut for Weftstalker Ardent, whose damage does not require connecting in combat. |
| Rayblade Trooper (U), Knight Luminary (C), Wedgelight Rammer (U), Luxknight Breacher (C) | 3-4 MV value bodies surfaced by the rejected sweeper-resilient sketch; each would displace the 1-2 MV mass the locked lens exists to keep, so none was harvested. |
| Zealous Display (C) | 'Creatures you control get +2/+0' plus an untap clause is a real finisher, but it is not a permanent, so it never satisfies the 'two or more tapped creatures' clause that 8 of 24 cards check. |
| Starport Security 2nd copy (C) | The {2}-less discount is live off 4 of 24 counter-makers; a second 1/1 body dilutes the power-2+ density that turns the Frigate on in one Station. |
| Honored Knight-Captain 2nd copy (U) | Its {4}{W}{W} Equipment tutor is fed by 0 of 24 cards, and both bodies are power 1, so each supplies only 1 charge counter versus 2-3 from any other body. |
| Terrapact Intimidator 2nd copy (U) | The opponent chooses the mode; against this curve they hand over two Lander tokens, which are artifacts but not creatures, so they supply 0 Station fodder and 0 tapped creatures. |
| Plasma Bolt (C) | Replaced by Invasive Maneuvers: 3 Spacecraft in this list make it deal 5 at instant speed, versus Plasma Bolt's sorcery-speed 2 (3 only under Void, whose enablers here are 4 of 24). |
| Loading Zone (G, R) | Doubles counters put on Spacecraft, which would halve every Station requirement - but it is green, and a splash would cost a tapland in a 16-land deck that needs untapped mana on turns 1-3. |
| Mechan Navigator (U), Nanoform Sentinel (C) | The two best 'becomes tapped' engines in the cube (loot on tap; untap another permanent on tap) are blue and outside WR entirely. |
| SIDEBOARD CONSIDERATIONS: Seam Rip, All-Fates Stalker, Reroute Systems, Thaumaton Torpedo, Dauntless Scrapbot, Plasma Bolt | All are legal and reasonable board slots. Seam Rip and All-Fates Stalker are exile effects that lose to their own removal; Reroute Systems is the pool's only 1-mana protection for the Frigate; Dauntless Scrapbot lost the graveyard slot to Chrome Companion because one-shot exile does not answer recursion. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 17 recommended  [PASS]
Avg CMC:     2.25   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.33 adj [MV 2.25 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  45.8%  prod  56.2%  gap -10.4pp  [OK]
  W  demand  54.2%  prod  62.5%  gap  -8.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube mainboard only - all 40 mainboard and 10 sideboard cards matched by exact name against the working pool cache
commons_uncommons_max_2: PASS - no card exceeds 2 copies
rares_mythics_max_1: PASS - Hardlight Containment, Lumen-Class Frigate, Sunstar Chaplain, Sacred Foundry at 1 copy each
rare_mythic_total_max_7: PASS - 4 used (Hardlight Containment, Lumen-Class Frigate, Sunstar Chaplain, Sacred Foundry); 3 slots deliberately unspent, see CARDS CONSIDERED BUT EXCLUDED for the rares that were weighed for them
basics_unlimited: Plains x7, Mountain x6 - format-supplied, exempt
```