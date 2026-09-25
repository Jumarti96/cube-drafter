---
deck_name: "wr-pain-for-all"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WR"
format: "40-card"
built_at: "2026-08-06T04:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  10x Mountain
  4x Plains
  2x Sacred Peaks           WR dual, enters tapped
  1x Sacred Foundry         WR dual, untapped for 2 life
```

### CREATURES (9)
```
CMC  Card                            Qty   Color  Role                                    Rar
3    Kavaron Turbodrone              x1    R      Repeatable +1/+1 and haste; artifact bodyC
3    Rayblade Trooper                x1    W      +1/+1 counter on a chosen carrier, warpableU
3    Weftstalker Ardent              x2    R      2/3 carrier + board-independent reach   U
4    Roving Actuator                 x1    R      3/4 carrier + Void spell rebuy          U
4    Tannuk, Steadfast Second        x1    R      3/5 carrier (margin 2) + team haste     M
5    Kavaron Skywarden               x2    R      4/5 - the best Cut Propulsion carrier   C
5    Nova Hellkite                   x1    R      4/5 flying haste - evasive carrier and clockR
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                            Qty   Color  Role                                    Rar
1    Honor                           x2    W      +1/+1 counter (both stats) + cantrip    U
1    Plasma Bolt                     x2    R      2-3 damage to any target - can go face  C
1    Reroute Systems                 x2    W      Indestructible - lifts the toughness constraintU
3    Bombard                         x1    R      4 damage - answers toughness>power creaturesC
3    Cut Propulsion                  x2    R      Removal, OR self-aimed to fire the carrierU
```

### OTHER SPELLS (5)
```
CMC  Card                            Qty   Color  Role                                    Rar
2    The Dominion Bracelet           x1    C      Equipment - +1/+1 preserves the margin  M
3    Banishing Light                 x1    W      Exile any nonland permanent             C
3    Pain for All                    x1    R      THESIS PAYOFF - damage taken becomes face damageR
5    Auxiliary Boosters              x2    W      Equipment - flying DOUBLES Cut PropulsionC
```

## SIDEBOARD (10)
```
Card                            Qty   Color  Role / When to board in                         Rar
Invasive Maneuvers              x2    R      vs fast starts - cheapest removal available     U
Banishing Light                 x1    W      2nd copy vs a key noncreature permanent         C
Dauntless Scrapbot              x1    C      vs graveyard decks; colourless                  U
Ruinous Rampage                 x2    R      vs artifacts (30% of cube) OR 3 to the face     U
Orbital Plunge                  x2    R      vs a creature too big for Bombard's 4           C
Radiant Strike                  x2    W      vs artifacts, targeted + 3 life vs races        C
```

## ANALYSIS

### DECK IDENTITY

W/R Equipment Voltron built as a threat-dense midrange deck around Pain for All. The Aura's ETB converts the carrier's power straight into damage, and its standing clause turns every point of damage the carrier RECEIVES into damage to each opponent - so blockers stop being a wall and start being a burn spell. Cut Propulsion, aimed at OUR OWN enchanted creature, is the deck's own damage source, and because Cut Propulsion deals DOUBLE damage to a creature with flying, Auxiliary Boosters is not merely an Equipment here - it is a damage multiplier. The carriers are chosen for toughness greater than power so they survive the process: 8 of the 9 creature copies qualify.

### THE FLYING CLAUSE IS THE DECK

Cut Propulsion reads: "Target creature deals damage to itself equal to its power. **If that creature has flying, it deals twice that much damage to itself instead.**" Auxiliary Boosters reads: "Equipped creature gets +1/+2 **and has flying**." Put those together with Pain for All's "Whenever enchanted creature is dealt damage, it deals that much damage to each opponent" and the arithmetic changes completely:

| Carrier | Base | With Auxiliary Boosters | Self-aimed Cut Propulsion | Damage to each opponent |
|---|---|---|---|---|
| Kavaron Skywarden | 4/5 | 5/7 flying | 10 (doubled) | **10** |
| Nova Hellkite | 4/5 flying | 5/7 flying | 10 (doubled) | **10** |
| Roving Actuator | 3/4 | 4/6 flying | 8 (doubled) | **8** |
| Weftstalker Ardent | 2/3 | 3/5 flying | 6 (doubled) | **6** |

Without the Boosters the same line on Kavaron Skywarden deals 4. The Equipment is a 2.5x multiplier on the kill, not a stat stick — and it brings its own 2/2 Robot token, which is another Weftstalker Ardent trigger.

### WHY EVERY POWER-RAISER IN THIS DECK ALSO RAISES TOUGHNESS

The self-aimed Cut Propulsion line only works if the carrier survives it, which needs toughness strictly greater than power. **8 of the 9 creature copies qualify** (Weftstalker Ardent 2/3 x2, Kavaron Skywarden 4/5 x2, Kavaron Turbodrone 2/3, Roving Actuator 3/4, Tannuk 3/5, Nova Hellkite 4/5); the sole exception is Rayblade Trooper 2/2, which is a counter-placer rather than an intended carrier.

But **8 of those 9 have a margin of exactly 1**, so a single +1/+0 effect collapses it. That is why this deck runs no +1/+0 pump at all. Every power-raiser in the list moves both stats: Honor x2 and Rayblade Trooper x1 ("+1/+1 counter"), The Dominion Bracelet ("+1/+1"), Kavaron Turbodrone ("+1/+1 and gains haste"), and Auxiliary Boosters ("+1/+2", which actually *widens* the margin). Squire's Lightblade (+1/+0), Full Bore (+3/+2) and Rig for War (+3/+0) were all cut on exactly this count — Full Bore turns a 2/3 into a 5/5 that dies to its own Cut Propulsion.

Reroute Systems x2 is the escape hatch: "Target artifact or creature gains indestructible until end of turn" lifts the toughness constraint entirely for a turn, so all 9 creature copies become legal self-Cut-Propulsion targets and any pump becomes safe.

### PAIN FOR ALL IS ONE COPY, AND THE MATH SAYS SO

There is no tutor for an Aura anywhere in white or red in this cube. Hypergeometrically, over 13 cards seen by turn 6 on the play: Pain for All appears **32.5%** of the time, Cut Propulsion **55.0%**, and **both together 17.1%** (19.6% on the draw). The deck is therefore built so the Aura is an accelerant, not a requirement — Weftstalker Ardent's "Whenever another creature or artifact you control enters, this creature deals 1 damage to each opponent" fires off 11 of the 23 nonland cards, Nova Hellkite is a 4/5 flying haste clock on its own, and Cut Propulsion reverts to being unconditional removal that doubles against the cube's 56 evasion cards.

Rescue Skiff and Astelli Reclaimer are the only cards in the pool that could return Pain for All from the graveyard; both cost 5-6 mana against 7 white sources and were rejected on that basis.

### SIDEBOARDING CONSTRAINT WORTH KNOWING

Ruinous Rampage's second mode is "Exile all artifacts with mana value 3 or less." Auxiliary Boosters is mana value 5 and survives it; The Dominion Bracelet at mana value 2 does not. So the artifact-hate mode can be boarded in without dismantling the deck's own Equipment package — board out The Dominion Bracelet with it.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:6  2:1  3:9  4:2  5:5
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.6: Pain for All@0.6) → p=0.94 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10.7: The Dominion Bracelet@0.9, Tannuk, Steadfast Second@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 69%  T2 82%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Neither white nor red offers a sweeper this curve can afford maindeck, and a symmetric wipe would kill the carrier the Pain for All plan is stacked onto. Ruinous Rampage's artifact mode ('Exile all artifacts with mana value 3 or less') is sideboarded and answers the artifact half of a wide board, which is the cube's densest permanent class at 29.7%.
  OK        single_large_threat: Cut Propulsion, Bombard, Banishing Light
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: The pool contains no counterspell in white or red at all, so this axis cannot be covered in these colours at any slot cost; the deck answers threats after they resolve.
  CONCEDED  graveyard: Cube graveyard density is 31 of 249 nonland cards (12.5%) and none of it is a fast combo kill. Dauntless Scrapbot ('exile each opponent's graveyard'), a colourless card, is sideboarded for the decks where it is the losing axis.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Cut Propulsion at instant speed is the flood sink: with Pain for All attached, every spare three mana reads 'deal the carrier's power (doubled if it is flying) to each opponent'. Auxiliary Boosters 'Equip {3}' and The Dominion Bracelet 'Equip {1}' move attachments onto a fresh carrier. Kavaron Turbodrone's '{T}: Target creature you control gets +1/+1 and gains haste until end of turn' is a free repeatable sink that needs no mana at all. Stated with its condition: Kavaron Skywarden's Void trigger needs a nonland permanent to have left the battlefield or a spell to have been warped that turn, so it does NOT fire on a do-nothing flood turn. |
| screw | mitigation | 6 of 23 nonland cards cost one mana (Honor x2, Reroute Systems x2, Plasma Bolt x2) and Rayblade Trooper's 'Warp {1}{W}' deploys a three-drop for two. The goldfish simulator (1000 hands, seed 0) reports 85% keepable and 88% with three lands by turn 3. Stated honestly: the curve is clustered at three and five mana (9 and 5 of 23 nonland cards), so this is the slowest of the four builds off a two-land hand, with a 69% turn-1 play rate - the price of a threat-dense midrange shape whose carriers must be large enough to survive their own Cut Propulsion. |
| decapitation | mitigation | Pain for All is a single copy and cannot be tutored, so the deck is built not to need it: 9 creature copies plus Weftstalker Ardent x2 ('Whenever another creature or artifact you control enters, this creature deals 1 damage to each opponent', live off 11 of 23 nonland cards) plus Nova Hellkite's 4/5 flying haste body close the game on combat alone. If the enchanted carrier is answered the Aura is lost with it, but 8 of the 9 creature copies are legal replacement carriers, Tannuk grants the team haste so a replacement attacks the turn it lands, and Auxiliary Boosters survives the carrier and re-attaches for {3}. |
| gas-out | mitigation | Honor x2 ('Put a +1/+1 counter on target creature. Draw a card') replaces itself. Roving Actuator's Void trigger exiles and copies an instant or sorcery of mana value 2 or less from the graveyard for free - the legal rebuy pool in this list is Plasma Bolt x2 and Honor x2, which is 4 of 23 nonland cards, not the 2 originally recorded. Rayblade Trooper is cast twice from one card via warp. Stated honestly: 2 of 23 nonland cards draw a card, so this deck converts board presence into damage rather than into cards. |
| raced | accepted | The curve is clustered at three and five mana and the turn-1 play rate is 69%, so against the cube's fastest evasive starts (56 evasion cards, 22.5% density) this deck must trade rather than race. Mitigating would mean cutting the 4- and 5-drop carriers for cheap bodies - but those are precisely the creatures whose toughness exceeds their power, and without them a self-aimed Cut Propulsion kills its own carrier. The survivability math IS the top of the curve, so lowering the curve deletes the kill mechanism. Radiant Strike's 3 life comes in from the board. |
| disruption-fizzle | mitigation | The critical turn is casting Cut Propulsion at instant speed on our own enchanted carrier, and there is no counterspell in this cube's white or red - I scanned all 276 pool entries. The hole that previously existed - the opponent killing the carrier in response, fizzling the spell and taking the Aura with it - is now answered by Reroute Systems x2 ('Target artifact or creature gains indestructible until end of turn') at one mana, which also lifts the toughness constraint so any carrier can be fired safely. Two copies against a one-mana cost means the protection is affordable on the same turn as the three-mana Cut Propulsion from turn 4 onward. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Squire's Lightblade | The archetype's signature one-mana Equipment, and it is actively anti-synergistic here: '+1/+0' erodes the toughness-over-power margin that the self-aimed Cut Propulsion line depends on, and 8 of the 9 carriers have a margin of exactly 1 - so a single Lightblade makes each of them die to its own kill spell. Only Tannuk 3/5 could carry one. |
| Full Bore | '+3/+2 until end of turn' raises power faster than toughness, turning a 2/3 carrier into a 5/5 that dies to its own Cut Propulsion. It scales safely only on a body with a two-point margin, of which this list has one (Tannuk 3/5). |
| Rig for War | '+3/+0' raises power only, so it kills any carrier it is aimed at when Cut Propulsion follows - the worst possible pump for this thesis despite looking like the best. |
| Frontline War-Rager | A 2/3 carrier that grows, but only 'if you control two or more tapped creatures' at end step - and the slot was needed for the Equipment and protection the grill showed were load-bearing. |
| Focus Fire | 'X is 2 plus the number of creatures and/or Spacecraft you control' aimed at our own attacking carrier is a cheap self-aim outlet, but it deals UNDOUBLED damage - with Auxiliary Boosters granting flying, Cut Propulsion already deals twice as much for one more mana. |
| All-Fates Stalker | Interaction stapled to a 2/3 toughness-over-power body at two mana via warp - a genuinely good fit, but its exile lasts only 'until this creature leaves the battlefield', and the six freed slots went to the blocking absences instead. |
| Cosmogrand Zenith | Mythic. A margin-2 carrier with repeatable board-wide +1/+1, but its trigger needs a second spell each turn and this list holds only 6 one-mana cards; the rare/mythic budget was already at 5 of 6. |
| Sami, Ship's Engineer | Its end-step Robot needs two or more tapped creatures and the 2/2 tokens have power equal to toughness, so they can never be Cut Propulsion carriers - a slow value engine that does not advance the turn-6 kill. |
| Emergency Eject | Widest-coverage instant removal, but 'Its controller creates a Lander token' is straightforward ramp and fixing handed to the opponent, which cuts against an aggressor role. Banishing Light does the same job with no gift. |
| Nebula Dragon | A 4/4 flier with a 3-damage ETB, but power equals toughness so it cannot survive its own Cut Propulsion, and at mana value 7 it is two turns past the goldfish. |
| Territorial Bruntar | A 6/6 reach body would be the biggest Pain for All number in the pool, but power equals toughness - a self-aimed Cut Propulsion kills it outright, and at mana value 6 it arrives after the clock. |
| Devastating Onslaught | Mythic. Copying the enchanted carrier does NOT copy the Aura - Pain for All is a separate permanent - so the token copies deal combat damage but do not trigger the payoff. |
| Rescue Skiff / Astelli Reclaimer | The only two cards in the pool that can return Pain for All from the graveyard, which matters because the Aura is a single untutorable copy. Both cost 5-6 mana against 7 white sources; evaluated and rejected on cost, and recorded here so the option is visible on a future iteration. |
| Hylderblade / Atomic Microsizer / Illvoi Light Jammer / Meltstrider's Gear | Off-colour Equipment (B, U, U, G). W/R fixing is 3 duals and no pool land produces W/R plus a third colour, so splash_colors is empty. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.28 adj [MV 2.96 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  66.7%  prod  76.5%  gap  -9.8pp  [OK]
  W  demand  33.3%  prod  41.2%  gap  -7.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] base: cube_mainboard
  [PASS] commons_uncommons_max_2_copies: OK
  [PASS] rares_mythics_max_1_copy: OK
  [PASS] rare_mythic_total_cap_6: 5 used - Pain for All (R, MB), Tannuk Steadfast Second (M, MB), The Dominion Bracelet (M, MB), Nova Hellkite (R, MB), Sacred Foundry (R, MB land). 1 slot unused.
  [PASS] basic_lands_exempt: Mountain 10, Plains 4 - format-supplied, unlimited
  [PASS] colour_usability: all 21 distinct nonland names usable in W/R via effective_cost.best_mode; no splash
```