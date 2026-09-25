---
deck_name: "w-r-big-ship-station"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WR"
format: "40-card"
built_at: "2026-08-02T23:45:33Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
7x Mountain                         
7x Plains                           
2x Sacred Peaks                     WR dual (enters tapped)
1x Sacred Foundry                   only untapped-capable WR dual
```

### CREATURES (10)

```
CMC  Card                             Qty  Col Role                                                               Rar
---------------------------------------------------------------------------------------------------------------------
  1  Kavaron Harrier                  x2   R   Enabler/Fodder — 2 power of Station fuel on arrival; its attack to U
  2  Starfighter Pilot                x2   W   Enabler/Fodder — Station fodder that surveils whenever it becomes  C
  2  Sunstar Chaplain                 x1   W   Threat/Payoff — 3-power body and end-step tapped payoff; its tappe R
  2  Terrapact Intimidator            x1   R   Enabler/Fodder — usually a 4/3, i.e. a one-activation Galvanizing  U
  3  Frontline War-Rager              x1   R   Enabler/Fodder — accumulates +1/+1 counters, so its power (and its C
  4  Sami, Ship's Engineer            x2   WR  Threat/Payoff — a tapped 2/2 every end step; fodder for the FOLLOW U
  5  Vaultguard Trooper               x1   R   Threat/Payoff — 5 power is the deck's best single Station, and its U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                             Qty  Col Role                                                               Rar
---------------------------------------------------------------------------------------------------------------------
  1  Reroute Systems                  x1   W   Interaction — modal: protect the ship, or 2 damage to a tapped cre U
  2  Drill Too Deep                   x2   R   Interaction — modal: five charge counters, or destroy target artif C
  2  Invasive Maneuvers               x1   R   Interaction — instant; 5 damage with any of the 6 Spacecraft out   U
  3  Emergency Eject                  x2   W   Interaction — instant, destroys any nonland permanent              U
```

### OTHER SPELLS (7)

```
CMC  Card                             Qty  Col Role                                                               Rar
---------------------------------------------------------------------------------------------------------------------
  1  Hardlight Containment            x1   W   Interaction — 1-mana exile that parks on a Spacecraft and grants i R
  2  Lumen-Class Frigate              x1   W   Threat/Payoff — 2+ anthem; +1/+1 means every later Station banks a R
  2  Wurmwall Sweeper                 x1   C   Enabler/Fodder — cheapest Station sink; ETB surveil 2              C
  3  The Seriema                      x1   W   Threat/Payoff — 3-mana 5/5 ship at 7+; tutors Sami and makes tappe R
  3  Warmaker Gunship                 x1   R   Threat/Payoff — removal on entry that stays as a 4/3 Station targe R
  5  Debris Field Crusher             x1   R   Threat/Payoff — ETB 3 damage; {1}{R} pump is the deck's repeatable U
  6  Galvanizing Sawship              x1   R   Threat/Payoff — 3+ is a 6/5 flier with haste, lethal on arrival of U
```

## SIDEBOARD (10)

```
Card                             Qty  Col Role / When to board in                                                Rar
--------------------------------------------------------------------------------------------------------------------
Chrome Companion                 x1   C   Hate — graveyard | vs the 31-card graveyard class; repeatable, which r C
Banishing Light                  x2   W   Hate — noncreature permanents | vs the 16-card enchantment class, whic C
Bombard                          x1   R   Flex — removal | unconditional instant 4 damage; answers more board st C
Cut Propulsion                   x2   R   Hate — evasion/fliers | vs the 56-card evasion class; doubled damage v U
Lithobraking                     x2   R   Hate — wide boards | vs go-wide decks only; it also kills this deck's  U
Radiant Strike                   x2   W   Hate — artifacts | vs the 74-card artifact class; also kills a tapped  C
```

## ANALYSIS

### DECK IDENTITY

A WR Station midrange deck that converts expendable bodies into one large evasive Spacecraft. Station is a cost that taps a creature WITHOUT using that creature's {T} symbol, so summoning-sick bodies pay it the turn they arrive, and each activation banks charge counters equal to the tapped creature's POWER - which is why this list deliberately runs high-power fodder (Vaultguard Trooper 5, Terrapact Intimidator usually 4, Sunstar Chaplain 3) rather than cheap 1/1s. The Seriema is the primary ship: a {1}{W}{W} 5/5 that tutors Sami on entry and flies at 7 counters, which one Drill Too Deep ('Put five charge counters on target Spacecraft or Planet you control') plus a single 2-power Station reaches. Galvanizing Sawship is the alternate kill, lethal on arrival at 3 counters off one big Station. Six of the twenty-three nonland cards are Spacecraft and three of them are removal spells on entry, so the deck answers the board with the same cards that assemble the kill.

### THE POWER PROBLEM, AND WHY THIS LIST LOOKS DIFFERENT

The single most important thing about building around Station is buried in its reminder text: *"Put charge counters equal to **its power** on this Spacecraft."* Charge counters are bought with power, not with bodies. A deck full of cheap 1/1 tokens Stations terribly.

The first version of this deck missed that and the grill caught it: **1 of 23 nonland cards had power 3 or more**, against a kill switch (Galvanizing Sawship) that needs exactly 3. The repair was to buy power deliberately:

| Card | Power | What one Station of it reaches |
|---|---|---|
| Vaultguard Trooper | 5 | Galvanizing Sawship 3+, Wurmwall Sweeper 4+ |
| Terrapact Intimidator | 4 (usually) | Galvanizing Sawship 3+ |
| Sunstar Chaplain | 3 | Galvanizing Sawship 3+ |
| Frontline War-Rager | 2, growing each end step | 3+ from turn two onward |

One-activation enablers went from 1 of 23 to **2 of 23 unconditionally** (Sunstar Chaplain, Vaultguard Trooper) plus **2 conditional** - Terrapact Intimidator is 4/3 only if the opponent declines the Landers, and Frontline War-Rager needs one end step to grow into range. That is the difference between a plan and a hope.

### THE SERIEMA IS THE REAL SHIP

The obvious build points at the biggest Spacecraft. The math points somewhere else.

Pinnacle Kill-Ship costs {7} and needs 7 counters; the Challenger reproduced that it is castable on the thesis turn in about **8%** of games. Galvanizing Sawship at {5}{R} was castable-with-a-Sawship-in-hand by turn 6 about **16%** of the time at two copies.

The Seriema costs `{1}{W}{W}`. It needs 7 counters, same as the Kill-Ship — but four mana cheaper, and the line is concrete:

```
T3  The Seriema                                     (0 counters)
T4  Drill Too Deep  -> +5 counters
    Station a 2-power creature -> +2 counters = 7   -> 5/5 flier
```

It also replaces itself (*"search your library for a legendary creature card... put it into your hand"* — always Sami, of which there are 2) and reads *"Other tapped legendary creatures you control have indestructible"*, which protects Sami on exactly the turns Station taps it. Three jobs on one three-mana card in a deck the grill correctly called thin on card advantage.

### WHAT THE GRILL CHANGED

Six BLOCKING findings, all implemented. The two most instructive:

**Emergency Eject does not ramp me.** The mana audit was crediting this deck with `accel = 2`, derived from Emergency Eject's land-fetch tag. Its oracle reads *"Destroy target nonland permanent. **Its controller** creates a Lander token"* — the Lander goes to whoever controlled the destroyed permanent, i.e. the opponent. True accel is 0. Recomputed correctly the raw land target moves from 16.87 to 17.20, which still rounds to 17 — so the number was right for the wrong reason.

**Sami cannot start its own engine.** Sami reads *"if you control two or more tapped creatures, create a tapped 2/2..."*. From an empty board, Sami tapping yields **one** tapped creature and the trigger never fires. It sustains an engine; it does not bootstrap one. The gas-out mitigation was rewritten around Vaultguard Trooper and The Seriema, with Sami demoted to third.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:9  3:5  4:2  5:2  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.6: Galvanizing Sawship@0.85, Lumen-Class Frigate@0.85, The Seriema@0.9) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 7 copies → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 56%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper: the only one in W or R this curve can pay for is Lithobraking, whose 2 damage to each creature also kills this deck's own Kavaron Harrier, Starfighter Pilot and Terrapact Intimidator. It is a sideboard card, boarded in only when the opponent is the wider deck.
  OK        single_large_threat: Warmaker Gunship, Debris Field Crusher, Hardlight Containment, Invasive Maneuvers, Emergency Eject
  OK        noncreature_permanents: Emergency Eject, Drill Too Deep
  CONCEDED  stack: W and R contain no counterspells anywhere in this cube's pool, so stack interaction is unavailable at any deck-building cost; Hardlight Containment's ward {1} on the enchanted Spacecraft is the nearest substitute, taxing the answer rather than stopping it.
  CONCEDED  graveyard: The cube's graveyard class is 12.5% density and mostly value recursion rather than a combo kill, so the mainboard spends no slot on it; Chrome Companion ('{2}, {T}: Put target card from a graveyard on the bottom of its owner's library') boards in as repeatable hate.
```

- No WARN flags were raised on the final list: curve, assembly, goldfish and coverage all returned PASS.
- Interaction sits at 30.4% against a 20-30% band, over by 0.4pp. Recorded in slot_allocation with thesis grounds: four of the seven interaction cards are modal or hit any permanent type, which is the locked toolbox lens.
- The goldfish check tests turns 1-3 only, so its PASS is not evidence for the turn-7 thesis. That claim rests instead on the post-grill curve: the cheapest ship-to-flier line is a turn-3 The Seriema plus a turn-4 Drill Too Deep and one 2-power Station, which is 7 counters on turn 4.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Wurmwall Sweeper's ETB surveil 2 and Starfighter Pilot's 'whenever this creature becomes tapped, surveil 1' - which fires on every Station - bin surplus lands. Debris Field Crusher's '{1}{R}: This Spacecraft gets +2/+0 until end of turn' converts every spare two mana into damage, and Kavaron Harrier's 'you may pay {2}' attack trigger is a second sink. Galvanizing Sawship at {5}{R} and Vaultguard Trooper at {4}{R} mean a flooded hand is still a castable hand. |
| screw | mitigation | 13 of 23 nonland cards cost MV <= 2, so a 2-land hand deploys Kavaron Harrier, Starfighter Pilot, Terrapact Intimidator, Lumen-Class Frigate, Sunstar Chaplain, Wurmwall Sweeper, Drill Too Deep, Invasive Maneuvers, Hardlight Containment or Reroute Systems on curve. The goldfish check reports 86% keepable hands and 3 lands by turn 3 in 88% of games. Honest limit: Galvanizing Sawship at {5}{R} is uncastable on 3 lands, so a screwed game is played from the fodder half and looks to The Seriema at three mana as the ship instead. |
| decapitation | mitigation | The kill is not one card. The Seriema, Warmaker Gunship, Debris Field Crusher, Galvanizing Sawship, Lumen-Class Frigate and Wurmwall Sweeper are six separate Spacecraft that become or enable threats at their thresholds, and Hardlight Containment grants ward {1} to whichever one it enchants. Charge counters already paid stay on the permanent, so answering the creature that Stationed refunds the opponent nothing. |
| gas-out | mitigation | Three sources, in order of reliability. (1) Vaultguard Trooper: 'if you control two or more tapped creatures, you may discard your hand. If you do, draw two cards' - a real refuel keyed to the exact state Station creates every turn, and it is best precisely when the hand is empty or dead. (2) The Seriema: 'search your library for a legendary creature card... put it into your hand' is card-neutral and always finds Sami. (3) Sami, Ship's Engineer x2 makes a tapped 2/2 every end step from an empty hand. The honest limit, which the grill was right to press on: Sami CANNOT bootstrap - its trigger needs two or more tapped creatures, and Sami alone tapping yields one, so it sustains an engine rather than starting one. Beyond these the deck has 0 net-positive draw cards in 23 nonland slots and wins on card QUALITY (three removal-on-entry Spacecraft are two cards in one) rather than card count. |
| raced | accepted | At avg MV 2.83 with a T1 play only 56% of the time, this deck loses races it does not interact in. Mitigating would mean cutting the top end - the Galvanizing Sawships and Pinnacle Kill-Ship - for cheap bodies, which is precisely the aggro build the shape judge rejected for not delivering the thesis's stated kill. The concession is deliberate: the deck trades the first three turns for removal-on-entry Spacecraft and expects to stabilize, not to race. |
| disruption-fizzle | mitigation | There is no critical turn. Station is a cost, so it cannot be responded to, and its charge counters are permanent once paid - an opponent who kills the Stationing creature in response gets nothing back. If the turn a ship lands meets removal, Drill Too Deep x2 re-thresholds a different Spacecraft for {1}{R}, and five other Spacecraft carry the same plan. Honest caveat: Drill Too Deep requires a Spacecraft already on the battlefield, so it is not a rebuild from zero. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Pinnacle Kill-Ship (C) | CUT DURING THE GRILL. 'ETB deals 10 damage to up to one target creature; 7+ Flying' on a {7} colorless body is a real card, but the Challenger reproduced that it is castable on the thesis turn in roughly 8% of games (P(7 lands in 13 cards) x P(drawing a 1-of)). The Seriema does the same job for three mana. |
| Galvanizing Sawship 2nd copy (U) | CUT DURING THE GRILL. At {5}{R} the second copy raised the chance of a stranded 6-drop more than the chance of a live kill switch once The Seriema became the three-mana ship. |
| Dawnsire, Sunstar Dreadnought (M) | Its 100-damage attack trigger needs 10 charge counters and it is not a creature until 20. This deck's best single Station is Vaultguard Trooper at 5 power, so 10 counters is two perfect activations or a Drill Too Deep plus one - reachable, but it still is not a creature and cannot attack, so it is a repeatable removal engine rather than a kill. It is the strongest unspent mythic if iterating. |
| Extinguisher Battleship (R) | 'ETB destroy target noncreature permanent, then deals 4 damage to each creature; 5+ Flying trample 10/10' is the single most powerful Spacecraft in the pool, but {8} is two mana past the top of this curve, and its 4-damage sweep kills this deck's own Kavaron Harrier, Starfighter Pilot and Terrapact Intimidator. |
| The Eternity Elevator (R) | '{T}: Add {C}{C}{C}' is real acceleration, but its second mode needs 20 charge counters and the deck has no card-draw engine to convert extra mana into cards. |
| Kavaron, Memorial World (M) and Adagia, Windswept Bastion (M) | Station on a land is thematically ideal, but both read 'This land enters tapped' and pay off only at 12+ charge counters, which no line in this list reaches. Two mythic slots left unspent rather than spent badly. |
| Systems Override (U) | A B3 keystone that did not make the final list. Its Spacecraft mode grants ten charge counters that are 'removed at the beginning of the next end step', so it never advances a permanent threshold; as a Threaten it is a tempo card in a deck whose plan is attrition. |
| Secluded Starforge (R) | '{2}, {T}, Tap X untapped artifacts you control: Target creature gets +X/+0' taps artifacts, not creatures, so it pays no Station cost; and it produces only {C}, which a WR deck with 12 W and 13 R pips cannot afford in a land slot. |
| Wedgelight Rammer (U) | 'ETB create a 2/2 colorless Robot artifact creature token' does supply its own Station body, which is the resource this deck was short on - but its own 9+ threshold means it never becomes a threat, so at 4 mana it is a Station sink that costs a full turn. |
| Rescue Skiff (U) | 'ETB return target creature or enchantment card from your graveyard to the battlefield' is genuine value, but at {5}{W} with a 10+ threshold it contributes nothing to the kill in a deck whose top end was already the problem. |
| Flight-Deck Coordinator (C), Dawnstrike Vanguard (U) | Both are end-step tapped payoffs, but this build's payoffs are Spacecraft thresholds, not board-wide counters; Coordinator's 2 life does not advance a controller's plan and Vanguard at {5}{W} competes with the ships. |
| Focus Fire (C) — mainboard | 'X is 2 plus the number of creatures and/or Spacecraft you control' scales with 16 of 23, but it can only target an ATTACKING OR BLOCKING creature, which is unreliable for a deck that expects to be the one being attacked. Kept as a sideboard slot in the first draft, then cut for Bombard on the Challenger's advisory. |
| Melded Moxite (C) | 'ETB you may discard a card. If you do, draw two cards' would be the deck's only net-positive card, and its back half makes a tapped Robot. A genuinely strong absence the Challenger named; it lost the last slot to Vaultguard Trooper, whose refuel keys off the tapped state the deck creates anyway and which also solves the power problem. |
| Pulsar Squadron Ace (U) | 'look at the top five cards of your library. You may reveal a Spacecraft card from among them and put it into your hand' digs 5 for 1 of the 6 Spacecraft. Cut only because the top end was reduced instead - with fewer expensive ships to find, the dig matters less. First card to add back if iterating. |
| Honor (U) | 'Put a +1/+1 counter on target creature. Draw a card' is a free-roll that raises a Station body's power by 1, and cantrip_count is 0. It lost to cards that raise power by 3 or more. |
| Beyond the Quiet (R) | 'Exile all creatures and Spacecraft' - Spacecraft below their threshold are still Spacecraft, so it exiles this deck's six ships and every charge counter banked on them. |
| SIDEBOARD CONSIDERATIONS: Seam Rip, All-Fates Stalker, Thaumaton Torpedo, Dauntless Scrapbot, Plasma Bolt, Focus Fire | All legal board slots. Dauntless Scrapbot is the cube's only probe-matched graveyard-hate card and is a colourless 3-power Station body, so it is the strongest of these if the graveyard matchup matters more than the 74-card artifact class. |
| NOTE ON SWEEPERS | dossier.threat_profile lists 5 sweepers at 2.0% density and this sideboard has no answer to them. Contested as ADVISORY: at that density the slot is better spent on the 29.7% artifact class, and W/R offers no protection effect beyond Reroute Systems, which is already mainboard. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.13 adj [MV 2.65 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  52.0%  prod  58.8%  gap  -6.8pp  [OK]
  W  demand  48.0%  prod  58.8%  gap -10.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube mainboard only - all 40 mainboard and 10 sideboard cards matched by exact name against the working pool cache
commons_uncommons_max_2: PASS - no card exceeds 2 copies
rares_mythics_max_1: PASS - Hardlight Containment, Lumen-Class Frigate, Sunstar Chaplain, The Seriema, Warmaker Gunship, Sacred Foundry at 1 copy each
rare_mythic_total_max_7: PASS - 6 used; 1 slot unspent. The sideboard is entirely common/uncommon and spends none of the budget.
basics_unlimited: Plains x7, Mountain x7 - format-supplied, exempt
```