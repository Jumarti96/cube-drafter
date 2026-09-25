---
deck_name: "w-counters-voltron"
cube_id: "eoe"
cube_slug: "eoe"
colors: "W"
format: "40-card"
built_at: "2026-08-06T04:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  16x Plains                 16 basics - no nonbasics, no tapped lands, 0.0pp colour gap
```

### CREATURES (12)
```
CMC  Card                            Qty   Color  Role                                    Rar
1    Starport Security               x2    W      Turn-1 body + pre-blockers tapper       C
2    Dockworker Drone                x1    W      Artifact body, saves its own counter    C
2    Honored Knight-Captain          x2    W      Two bodies + Equipment tutor            U
2    Sunstar Chaplain                x1    W      Repeating counter engine + tapper       R
3    Cosmogrand Zenith               x1    W      Second-spell payoff - counters or tokensM
3    Dual-Sun Adepts                 x2    W      PRIMARY CARRIER - native double strike  U
3    Rayblade Trooper                x2    W      ETB counter on the carrier, warpable    U
6    Weftblade Enhancer              x1    W      Two counters on chosen targets, Warp {2}{W}C
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                            Qty   Color  Role                                    Rar
1    Focus Fire                      x2    W      Instant-speed kill on an attacker or blockerC
1    Honor                           x2    W      Counter on any creature + cantrip       U
2    Dual-Sun Technique              x2    W      THESIS CONVERTER - double strike + cantripU
3    Scout for Survivors             x1    W      Rebuild after a wipe, with counters     U
```

### OTHER SPELLS (5)
```
CMC  Card                            Qty   Color  Role                                    Rar
1    Hardlight Containment           x1    W      Exile any creature + ward an Equipment  R
1    Seam Rip                        x1    W      Exile a nonland permanent MV<=2         U
1    Squire's Lightblade             x2    W      Flash self-attaching Equipment          C
5    Auxiliary Boosters              x1    W      The only evasion grant in mono-white    C
```

## SIDEBOARD (10)
```
Card                            Qty   Color  Role / When to board in                         Rar
Reroute Systems                 x2    W      vs removal on the carrier - indestructible      U
Banishing Light                 x2    W      vs any resolved nonland permanent               C
Dauntless Scrapbot              x1    C      vs graveyard decks; colourless, castable here   U
Emergency Eject                 x2    W      vs a resolved permanent, at instant speed       U
Radiant Strike                  x2    W      vs artifacts (30% of cube) + 3 life vs races    C
Beyond the Quiet                x1    W      vs wide boards; Scout for Survivors rebuilds    R
```

## ANALYSIS

### DECK IDENTITY

Mono-white Equipment Voltron built as a low-curve aggro deck. A cheap white body accumulates +1/+1 counters from the deepest pump package in the cube, picks up the Equipment that stack onto it, and converts with double strike - either natively on Dual-Sun Adepts or at instant speed from Dual-Sun Technique. Auxiliary Boosters supplies the deck's only evasion, which is what stops a lone 1/1 chump-blocker from blanking the whole plan. Mono-colour means a flawless 16-Plains mana base with a 0.0pp colour gap - that is what buys the ten one-drops and the 92% turn-1 play rate, the fastest of the four Voltron builds.

### THE COUNT THAT MATTERS: SOURCES THAT TARGET A *CHOSEN* CARRIER

Voltron needs counters on ONE creature, so the number that matters is not "cards that make counters" but "cards that put a counter on a creature I choose." Against this list that is **7 of 24 nonland cards**:

| Card | Copies | Conditional? |
|---|---|---|
| Honor | 2 | No |
| Rayblade Trooper | 2 | No |
| Weftblade Enhancer | 1 | No |
| Sunstar Chaplain | 1 | Yes - needs two or more tapped creatures at end step |
| Cosmogrand Zenith | 1 | Yes - needs a second spell cast that turn |

So **5 of 24 are unconditional**. Two cards that look like counter sources are deliberately excluded. Dockworker Drone's counter enters on *itself* and reaches another creature only through "When this creature dies, put its counters on target creature you control" — and "its counters" means the Drone's own, so it saves nothing when the loaded carrier dies. Scout for Survivors puts counters on creatures returned from the graveyard, not on a chosen on-board carrier.

### EVASION WAS THE HOLE, AND THERE IS EXACTLY ONE ANSWER

A carrier at 2/2 base plus three counters plus two Equipment is a ~7/6 double striker — and a single 1/1 token chump-blocks it for free. Sweeping all mono-white-castable cards in the pool for flying, trample, menace or unblockable returns exactly **one** card that grants evasion to a chosen creature: Auxiliary Boosters ("Equipped creature gets +1/+2 and has flying"). It is in the list for that reason alone. Note the distinction the deck depends on: Auxiliary Boosters reads "Equip {3}", so it **moves** to the real carrier rather than being stuck on the 2/2 Robot token it arrives with.

Blocker removal is a separate and thinner count. Only **3 of 24** cards can tap a blocker *before* blockers are declared (Starport Security x2, Sunstar Chaplain x1 — and the Chaplain's tap mode reads "Remove a +1/+1 counter from a creature you control," so using it eats the win condition). Focus Fire x2 is real removal but reads "target **attacking or blocking** creature" — it fires after blockers are declared, by which point the carrier's damage is already blanked. It is a combat-trick kill, not a lane-opener.

### HARDLIGHT CONTAINMENT IS UNDONE BY ITS OWN HOST

"Enchant artifact you control" gives 6 of 24 legal hosts here (Squire's Lightblade x2, Auxiliary Boosters x1, Starport Security x2, Dockworker Drone x1) — but the exile lasts only "until this Aura leaves the battlefield," and **3 of those 6 are 1/1 artifact creatures** that die to anything. Killing the host returns the exiled creature. Prefer a noncreature artifact host whenever one is available.

### WHAT THIS DECK TRADES AWAY

The mana base is perfect and the clock is the fastest of the four builds, but the card economy is the thinnest: only 4 of 24 nonland cards replace themselves (Honor x2, Dual-Sun Technique x2). This deck is designed to be empty-handed by turn 5 with the game already decided. If it is not, it loses the long game, and no sideboard card fixes that.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:10  2:6  3:6  5:1  6:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.5: Cosmogrand Zenith@0.8, Sunstar Chaplain@0.7) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.3: Dockworker Drone@0.6, Scout for Survivors@0.7) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 92%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-white's only sweeper in this pool is Beyond the Quiet ('Exile all creatures and Spacecraft'), which is symmetric and would exile our own carrier along with the counters stacked on it - counters are lost with the creature, unlike Equipment. It is sideboarded, where Scout for Survivors and Rayblade Trooper's warp re-cast make the wipe asymmetric in our favour.
  OK        single_large_threat: Hardlight Containment, Focus Fire, Starport Security
  OK        noncreature_permanents: Seam Rip
  CONCEDED  stack: The pool contains no counterspell in white at all, so this axis cannot be covered in mono-white at any slot cost; the deck answers permanents after they resolve.
  CONCEDED  graveyard: Cube graveyard density is 31 of 249 nonland cards (12.5%) and none of it is a fast combo kill; the turn-6 clock races it. Dauntless Scrapbot ('exile each opponent's graveyard'), a colourless card castable in mono-white, is sideboarded for the decks where it is the losing axis.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Dual-Sun Adepts' '{5}: Creatures you control get +1/+1 until end of turn' is a repeatable mana sink that scales with a flooded board, and it is in the list at 2 copies. Honored Knight-Captain's '{4}{W}{W}, Sacrifice this creature: Search your library for an Equipment card, put it onto the battlefield, then shuffle' converts six surplus mana into a battlefield Equipment - and with Auxiliary Boosters (mana value 5) now in the list, the tutor has a target worth the six mana rather than only a +1/+0. Squire's Lightblade 'Equip {3}' and Auxiliary Boosters 'Equip {3}' move attachments onto a fresh carrier. |
| screw | mitigation | The best mana base of the four builds: 16 Plains, zero nonbasics, nothing enters tapped, colour gap exactly 0.0pp. 10 of 24 nonland cards cost one mana and 6 cost two. Rayblade Trooper's 'Warp {1}{W}' deploys a three-drop for two and Weftblade Enhancer's 'Warp {2}{W}' deploys a printed six-drop for three. The goldfish simulator (1000 hands, seed 0) reports 85% keepable, 84% with three lands by turn 3, and a turn-1 play in 92% of hands. |
| decapitation | mitigation | Scout for Survivors ('Return up to three target creature cards with total mana value 3 or less from your graveyard to the battlefield. Put a +1/+1 counter on each of them') is the real rebuild - 11 of the 12 creature copies in this list are mana value 3 or less and therefore legal targets, the exception being Weftblade Enhancer at printed mana value 6. Rayblade Trooper x2 re-casts from exile after being warped. Squire's Lightblade and Auxiliary Boosters survive the carrier and re-attach for {3}. Stated honestly: counters on a dead carrier are lost - Dockworker Drone saves only its OWN counter, not the carrier's, and the earlier claim that it saved the carrier's stack was false. |
| gas-out | mitigation | 4 of 24 nonland cards replace themselves: Honor x2 ('Put a +1/+1 counter on target creature. Draw a card') and Dual-Sun Technique x2 ('If it has a +1/+1 counter on it, draw a card', live off the 7 carrier-targetable counter sources plus Dockworker Drone). Honored Knight-Captain x2 converts a late empty hand into a tutored Equipment. Stated honestly: 4 of 24 is the thinnest card economy of the four builds, and this deck is designed to be empty-handed by turn 5 with the game already decided. |
| raced | accepted | This IS the fast deck - 10 one-drops, a turn-1 play in 92% of hands and a turn-6 goldfish - so it does not concede the race; it concedes the LONG game instead. Mitigating the long game would mean maindecking Radiant Strike's lifegain and heavier top-end, which would push the curve past what a 16-land base supports and give up the turn-1 starts that make the plan work at all. Note that the top end already includes Weftblade Enhancer, which is affordable only because 'Warp {2}{W}' makes it a three-mana play despite its printed mana value of 6. |
| disruption-fizzle | mitigation | The critical turn is casting Dual-Sun Technique at instant speed after blockers are declared. If it is answered or the carrier is removed in response, Dual-Sun Adepts x2 has 'Double strike' printed on it and needs no spell at all - the converter is redundant across 4 copies of 2 names. Focus Fire x2 is a second instant-speed play for that turn. Stated honestly: the mainboard has zero protection spells; Reroute Systems ('Target artifact or creature gains indestructible until end of turn') is sideboarded because the maindeck could not afford the slot at a 16.7% interaction budget. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| The Dominion Bracelet | Mythic. Its {15} ability reduced by the carrier's power still costs {8} against a realistic 7-power carrier in a 16-land aggro deck, so its functional text is '+1/+1, Equip {1}' - the weakest of three Equipment paying the highest rarity cost. The slot bought evasion instead. |
| Luxknight Breacher | 'Enters with a +1/+1 counter on it for each OTHER creature and/or artifact you control' scales off 16 of 24 nonland cards, but on an empty board it is a vanilla 2/2 for four mana - and an aggro deck that just had its board wiped is exactly when it draws this. |
| Pulsar Squadron Ace | Its ETB digs for a Spacecraft; this list runs zero Spacecraft, so the counter falls on itself in 100% of games and never reaches a chosen carrier. |
| Lightstall Inquisitor | Rare 2/1 vigilance for one mana, but its ETB lets each opponent exile a card from hand and PLAY it - handing a removal spell to the player whose only job is to kill our single carrier. |
| Sunstar Lightsmith | A 3/3 for four that self-loads and cantrips off the second spell each turn - genuinely strong, but it loads only ITSELF, and the locked build spends its four-drop slot on cards that can target a chosen carrier. |
| Zealous Display | '+2/+0 until end of turn' is +4 damage through a double striker, but it is a temporary pump in a deck whose thesis names counters as 'the durable half of the stack'; the slot went to Focus Fire, which removes the blocker instead of trying to outmuscle it. |
| Exosuit Savior | A 2/2 flier that rebuys Squire's Lightblade would be the only other evasive body, but its ETB returns a permanent WE control - bouncing Seam Rip or Hardlight Containment returns the exiled card to the opponent. |
| Tezzeret, Cruel Captain | Mythic, colourless and castable here, but its 0 ability puts a counter only on ARTIFACT creatures; this list holds 3 artifact-creature copies of 24 nonland cards, so the counter mode is blank on Dual-Sun Adepts and every other real carrier. |
| Dawnstrike Vanguard | Six mana for an end-step board-wide counter engine; the turn-6 goldfish resolves before it stabilises, and the 16-land base cannot support it. |
| Beyond the Quiet (maindeck) | 'Exile all creatures and Spacecraft' is symmetric and exiles our own carrier along with every counter on it - counters, unlike Equipment, are lost with the creature. Correct only as a sideboard card, where Scout for Survivors and Rayblade Trooper's warp re-cast make the wipe asymmetric in our favour. |
| Pinnacle Starcage | Rare. 'Exile all artifacts and creatures with mana value 2 or less' is symmetric and would exile 16 of our own 24 nonland cards. |
| Hylderblade / Atomic Microsizer / Illvoi Light Jammer / Meltstrider's Gear | Off-colour Equipment (B, U, U, G). Mono-white has no fixing to reach them and no reason to take on any, so splash_colors is empty and the Equipment package is the three W/colourless ones. |
| Starfield Shepherd / Exalted Sunborn | Both are {3}{W}{W} at mana value 5 - castable in mono-white, but the locked lens is 'lowest-curve / most explosive' and the built curve tops out at two cards above mana value 3. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.84 adj [MV 2.12 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] base: cube_mainboard
  [PASS] commons_uncommons_max_2_copies: OK
  [PASS] rares_mythics_max_1_copy: OK
  [PASS] rare_mythic_total_cap_6: 4 used - Cosmogrand Zenith (M, MB), Sunstar Chaplain (R, MB), Hardlight Containment (R, MB), Beyond the Quiet (R, SB). 2 slots deliberately unused.
  [PASS] basic_lands_exempt: Plains 16 - format-supplied, unlimited
  [PASS] colour_usability: all 20 distinct nonland names usable in mono-W via effective_cost.best_mode; The Dauntless Scrapbot in the sideboard is colourless; no splash
```