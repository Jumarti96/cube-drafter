---
deck_name: "r-kavu-tribal-aggro"
cube_id: "eoe"
cube_slug: "eoe"
colors: "R"
format: "40-card"
built_at: "2026-08-07T01:14:18Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  17x Mountain                 Land — mono-red, every land casts everything untapped
```

### CREATURES (16)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  1  Kavaron Harrier             x2    R      Threat — turn-1 2/1 that makes an extra attacking body for {2} U
  1  Slagdrill Scrapper          x2    R      Engine — {2},{T}, sac an artifact or LAND: draw a card. The flood outlet. C
  2  Terrapact Intimidator       x2    R      Threat — Kavu; a 4/3 on turn 2 if the opponent declines the Landers U
  3  Frontline War-Rager         x1    R      Threat — Kavu 2/3 that grows while you control two tapped creatures C
  3  Molecular Modifier          x2    R      Threat — Kavu; +1/+0 and first strike each combat             U
  3  Possibility Technician      x1    R      Engine — Kavu; every Kavu ETB exiles a card you may play      R
  3  Weftstalker Ardent          x2    R      Threat — 1 damage to each opponent per creature/artifact ETB  U
  4  Kav Landseeker              x1    R      Threat — Kavu 4/3 menace, the only evasive body in the mainboard C
  4  Memorial Team Leader        x2    R      Payoff — Kavu anthem, +1/+0 to the team during your turn      U
  4  Tannuk, Steadfast Second    x1    R      Payoff — global haste + warp {2}{R} on every red creature in hand M
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  1  Full Bore                   x1    R      Trick — +3/+2, and trample+HASTE on a creature cast for its warp cost U
  1  Plasma Bolt                 x1    R      Interaction — 2-3 damage, any target (also reach)             C
  2  Invasive Maneuvers          x2    R      Interaction — instant, 3 damage to a creature                 U
  3  Bombard                     x1    R      Interaction — instant, 4 damage; the mainboard answer to a big blocker C
```

### OTHER SPELLS (2)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  2  Melded Moxite               x2    R      Engine — discard 1, draw 2 (net +1 card); an artifact ETB for Weftstalker C
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                       Rar
Drill Too Deep              x2    R      vs artifacts (29.7% of the cube) — instant, targeted, non-symmetric C
Bombard                     x1    R      vs large creatures — a second instant-speed 4 damage          C
Cut Propulsion              x2    R      vs fliers — doubled damage; kills 24 of the 29 statted evasion creatures in the pool U
Dauntless Scrapbot          x1    C      vs graveyard decks — exiles each opponent's graveyard         U
Lithobraking                x1    R      vs go-wide token decks (14.1% of the pool makes tokens) — 2 damage to each creature; the sac is optional and it makes a Lander first U
Ruinous Rampage             x2    R      vs control/lifegain — '3 damage to each opponent'; board the artifact mode only vs a board my own artifacts have left U
Nova Hellkite               x1    R      vs ground stalls — 4/5 flying haste, the only flier in the 50 R
```

## ANALYSIS

### DECK IDENTITY

Mono-red Kavu Tribal Aggro. The deck curves out on Kavu bodies and converts them into lethal with two multipliers: Memorial Team Leader gives the rest of the team +1/+0 during your turn, and Molecular Modifier hands a creature +1/+0 and first strike at the beginning of every combat. Tannuk, Steadfast Second is the ceiling - it gives every other creature haste AND stamps warp {2}{R} on every red creature card in hand, so one turn can deploy two threats that both attack immediately. Possibility Technician turns each of the 10 Kavu ETBs into a card off the top. Being mono-colour is itself a resource: 17 untapped Mountains means no fixing tax and no tapped-land turns in a deck whose margin is a threat every turn from turn 1 - goldfish castability is 76% on turn 1 and 97% on turn 2.

### WARP IS NOT WHAT IT LOOKS LIKE

Warp reads: *"You may cast this card from your hand for its warp cost. Exile this creature at the
beginning of the next end step, then you may cast it from exile on a later turn."* Two consequences
that shape this entire deck, and both are easy to get wrong:

1. **A warped creature without haste never attacks.** It is exiled at *your own* end step, before your
   next combat and before you could ever block with it. So warping a vanilla body buys you its ETB
   trigger and nothing else. Of the five native-warp copies in this list, **none has haste**.
2. **Warp is not removal protection.** The delayed exile only fires if the creature is still on the
   battlefield. Kill a warped creature and it goes to the graveyard like anything else — the card is
   gone permanently, not banked in exile.

This is precisely why `Tannuk, Steadfast Second` staples *"Other creatures you control have haste"* to
*"Artifact cards and red creature cards in your hand have warp {2}{R}"*. The haste line is not a bonus;
it is what makes the warp line function. `Full Bore` is the pool's second answer to the same problem —
*"if that creature was cast for its warp cost, it also gains trample and haste until end of turn."*

### THE KAVU COUNT IS THE DECK

| Kavu in the mainboard | Copies |
|---|---|
| Terrapact Intimidator | 2 |
| Molecular Modifier | 2 |
| Memorial Team Leader | 2 |
| Frontline War-Rager | 1 |
| Kav Landseeker | 1 |
| Possibility Technician | 1 |
| Tannuk, Steadfast Second | 1 |
| **Total** | **10 of 23 nonland cards (43.5%)** |

`Possibility Technician` reads *"Whenever this creature **or another Kavu you control** enters, exile the
top card of your library. For as long as that card remains exiled, you may play it if you control a
Kavu."* At 10 of 23, roughly every second nonland card draws it a card — and the same 10 satisfy the
release condition. Note the wording is *"you may **play** it"*: you still pay the mana. This is card
advantage, not mana advantage.

### TWO MULTIPLIERS, DELIBERATELY DIFFERENT

The deck runs two ways to convert a board into extra damage, and they are not redundant copies of one
effect — they fail to different answers:

- `Memorial Team Leader` — *"During your turn, other creatures you control get +1/+0."* A team anthem.
  Scales with board width. Blanked by a sweeper.
- `Molecular Modifier` — *"At the beginning of combat on your turn, target creature you control gets
  +1/+0 and gains first strike."* Scales with nothing, but first strike wins the individual block that
  the anthem alone would only tie. Blanked by nothing.

Two copies each means the decapitation plan is genuinely redundant rather than four copies of one card.

### MONO-COLOUR AS A RESOURCE

17 untapped Mountains, zero fixing tax, zero tapped-land turns. The measurable result is a **76%
turn-1 castability and 97% turn-2** — the best of the four builds by a wide margin. The cost is real
and worth naming: no green means no `Tannuk, Memorial Ensign`, no Landers engine, and no access to the
pool's only enchantment removal.

### PLAY PATTERN

Lead on a body every turn, and do not hold `Full Bore` for a blowout — its job is usually just to make
a warped `Memorial Team Leader` or `Possibility Technician` into an attacker. Against a deck with a
sweeper, deploy to the minimum lethal rather than emptying the hand; `Slagdrill Scrapper` and
`Melded Moxite` are what let you rebuild, and they are the reason this list can afford to play around
a wipe at all.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:6  2:6  3:7  4:4
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 16 copies → p=1.00 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.4: Full Bore@0.6, Possibility Technician@0.8) → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 76%  T2 97%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: The mainboard runs no sweeper. Recounted honestly after grill finding F5: this deck has 18 creature copies and 17 of them have toughness 3 or less, so a symmetric sweeper points back at me - though Lithobraking specifically deals only 2, which kills just 8 of my 18. It is conceded in the MAINBOARD because a sweeper is a card that does not attack, and the locked lens is 'lowest-curve / most explosive' where every maindeck slot is a threat on curve. It is answered from the sideboard by Lithobraking x1, whose sacrifice clause is optional and which creates a Lander first. On board, the race plan is Kav Landseeker's menace plus Memorial Team Leader x2 and Molecular Modifier x2 winning the damage exchange.
  OK        single_large_threat: Bombard, Invasive Maneuvers, Plasma Bolt
  CONCEDED  noncreature_permanents: Mono-red's answers are Drill Too Deep and Ruinous Rampage's artifact mode, both sideboard - a maindeck slot spent on a noncreature answer is a slot not attacking, and this deck's margin is deploying a threat every turn from turn 1
  CONCEDED  stack: red has no counterspell or stack interaction anywhere in this pool; the deck races instead
  CONCEDED  graveyard: graveyard text is 12.45% of the cube; Dauntless Scrapbot answers it from the sideboard, and it is not a Kavu so maindecking it would also cost a Possibility Technician trigger
```

Phase 6b returns PASS on all four checks. Recorded for the file: the first run of this build WARNed on the curve in BOTH directions (MV-2 13% against a 25% minimum, MV-4+ 35% against a 20% cap). Because the locked lens is literally 'lowest-curve / most explosive', a top-heavy curve is the build failing its own brief rather than a deviation to justify, so the deck was rebuilt rather than excused. After the Phase 9 repairs the curve is 1:6 2:6 3:7 4:4 - MV-2 26.1%, MV-4+ 17.4% - and turn-1 castability rose from 60% to 76%, turn-2 from 94% to 97%.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | REPAIRED on grill finding F1, which was BLOCKING. The earlier entry was an 'accepted' whose stated cost - that mono-red's only mana sinks cost more than the whole curve - was falsified by the pool. Slagdrill Scrapper x2 is now in the mainboard: '{2}, {T}, Sacrifice another artifact or LAND: Draw a card' converts a surplus land into a card for two mana, inside this deck's curve rather than above it. Melded Moxite x2 adds a second outlet: 'you may discard a card. If you do, draw two cards' turns a flooded hand into two live cards. Kavaron Harrier x2 also absorbs spare mana every combat ('you may pay {2}' for an extra attacking 2/2), and Tannuk, Steadfast Second turns spare mana into a second creature per turn via warp {2}{R}. |
| screw | mitigation | 17 lands, all untapped Mountains with zero colour requirements to miss. The Phase 6b goldfish sim over 1000 hands reports 87% keepable, 88% with 3 lands by turn 3, and castability of 76% on turn 1 and 97% on turn 2 - the best of the four builds. Corrected per grill finding F10: the cards costing 2 or less are 12 of 23 (6 at MV 1 and 6 at MV 2), not the figure stated earlier. |
| decapitation | mitigation | The kill is combat damage from 16 creature copies, not from any single card, so there is no piece to answer on sight. The two amplifiers are redundant with each other and with themselves: Memorial Team Leader x2 and Molecular Modifier x2 convert a board into extra damage by different means (a team anthem versus a targeted pump plus first strike), and Slagdrill Scrapper x2 plus Melded Moxite x2 refill after a trade. Tannuk, Steadfast Second x1 is the one true singleton, but the deck functions without it - it raises the ceiling, it is not the floor. |
| gas-out | mitigation | REPAIRED on grill finding F2, which was BLOCKING on two grounds. First, the earlier entry claimed Tannuk's warp was 'a second hand' - oracle-false: warp reads 'cast this card FROM YOUR HAND for its warp cost', so it re-casts a card you already hold and generates nothing off an empty hand. That claim is retracted. Second, it justified the shortfall with 'the pool offers no red card-draw engine', which was false. The deck now runs real card advantage: Melded Moxite x2 ('you may discard a card. If you do, draw two cards' - a net +1) and Slagdrill Scrapper x2 (repeatable: '{2}, {T}, Sacrifice another artifact or land: Draw a card'), alongside Possibility Technician x1, whose trigger fires on 10 of the 23 nonland cards. The resource_exchange census over the 23 nonland copies now shows 2 Cards: Net-Positive and 2 repeatable draw outlets, against 0 before. |
| raced | mitigation | This deck is the aggressor and wins most races outright: turn-1 castability 76%, turn-2 97%, and Tannuk's 'Other creatures you control have haste' means no threat wastes a turn. Against the cube's 22.5% evasion class the mainboard interacts with 4 of 23 cards (Plasma Bolt x1, Invasive Maneuvers x2, Bombard x1) and the sideboard brings Cut Propulsion x2, whose 'if that creature has flying, it deals twice that much damage to itself' kills 24 of the 29 statted evasion creatures in the pool. |
| disruption-fizzle | mitigation | There is no critical turn to interact with - the damage is spread across 16 creature copies over four or five combats, so a counterspell or a removal spell answers one attacker, not the plan. Per grill finding F3 the earlier warp sentence has been STRUCK as oracle-false: it claimed 'a threat that is answered while warped is not gone', but the delayed exile only fires if the creature is still on the battlefield at that end step - a warped creature killed by removal goes to the graveyard and the card is gone permanently. Warp is cost-splitting, not resilience. What does carry the mode is redundancy of function: Memorial Team Leader x2 and Molecular Modifier x2 are two different mechanisms for the same job (a team anthem versus a targeted pump plus first strike), and Slagdrill Scrapper x2 plus Melded Moxite x2 refill after a trade. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Tannuk, Memorial Ensign | The RG landfall Kavu. Its payoff is 'Whenever a land you control enters' - it needs a Lander shell to fire more than once a turn, and adding green to a mono-red curve costs untapped lands for zero combat benefit. |
| Dawnsire, Sunstar Dreadnought | Mythic 20/20 Spacecraft. Station only reaches 10+ (the first payoff) after tapping 10 total power, which is the whole board for a turn - an aggro deck cannot stop attacking for two turns to switch it on. |
| Devastating Onslaught | Mythic {X}{X}{R}: X token copies with haste, sacrificed at end of turn. At X=2 it costs 5 mana for two temporary bodies; the anthem plan wants permanent width. |
| Tezzeret, Cruel Captain | Mythic planeswalker whose loyalty grows off 'Whenever an ARTIFACT you control enters'. This list runs 0 artifact cards - the Kavu are all creatures. 0 of 23 nonland cards would tick it up. |
| The Dominion Bracelet | Mythic Equipment. '+1/+1 and {15}, Exile: You control target opponent' - the {15} ability is unreachable; a 2-mana +1/+1 equipment is worse than a Kavu body in the same slot. |
| Thrumming Hivepool | Rare, 'Affinity for Slivers' and 'Slivers you control have double strike'. This list has 0 Slivers, so it costs the full {6} and its anthem applies to 0 of 23 nonland cards. |
| Weapons Manufacturing | Rare: 'Whenever a NONTOKEN artifact you control enters.' This list runs 0 artifact cards; 0 of 23 qualify. |
| Rust Harvester | Rare: needs 'an artifact card in your graveyard' to fuel every activation. 0 of 23 nonland cards are artifacts. Dead. |
| Memorial Vault | Rare: '{T}, Sacrifice another artifact' - 0 artifact cards in this list to feed it. |
| Warmaker Gunship | Rare Spacecraft: ETB damage equal to 'the number of artifacts you control', which is 0 in a creature-only build. |
| Pain for All | Rare Aura. Auras are card disadvantage against removal, and 'Whenever enchanted creature is dealt damage, it deals that much damage to each opponent' rewards being blocked, which a menace/anthem deck is trying to avoid. |
| Terminal Velocity | Rare, 6 mana to cheat one creature in that sacrifices itself at end of turn - three turns past this deck's thesis turn. |
| Anticausal Vestige | Rare 7/5 for 6 (warp {4}). Its value clause triggers 'When this creature LEAVES the battlefield'; an aggro deck wants threats that stay. |
| The Endstone | Mythic, 7 mana, and 'At the beginning of your end step, your life total becomes half your starting life total' - halving to 10 while racing is a liability, not a cost. |
| Extinguisher Battleship | Rare, 8 mana. 'Deals 4 damage to each creature' would kill most of this deck's own board. |
| Nebula Dragon | 7 mana for a 4/4 flier. Four turns past the thesis turn. |
| Pinnacle Kill-Ship | 7 mana. Same curve problem. |
| Bygone Colossus | 9 mana 9/9, warp {3} - warp puts a 9/9 in for 3, but it exiles at the next end step, so it is one attack for 3 mana with no board presence after. |
| Galvanizing Sawship | 6 mana Spacecraft; 3+ station for flying haste is reachable, but 6 mana is past the thesis turn and it does nothing the turn it lands. |
| Debris Field Crusher | 5 mana Spacecraft, 3 damage ETB, 1/5 body that is not a creature until station 8. Too slow and it does not attack. |
| Survey Mechan | 1/3 flier for 4 that does not pressure; the {10} ability discounts by 'differently named lands you control', which in a mono-Mountain deck is 1-2. |
| Zookeeper Mechan | 1/3 that taps for {R}. Ramp in a deck whose curve tops at 5 and whose 1-drop slot wants Kavaron Harrier's 2/1 attacker instead. |
| Slagdrill Scrapper | '{2}, {T}, Sacrifice another artifact or land: Draw a card' - 0 artifact cards in the list, so the cost eats lands in a 16-land aggro deck. |
| Dauntless Scrapbot | 3/1 for {3} with graveyard hate and a Lander. Fine, but not a Kavu - it turns on 0 of Possibility Technician's triggers, and this build is paying for tribal density. |
| Virulent Silencer | 'Whenever a NONTOKEN ARTIFACT CREATURE you control deals combat damage' - 0 of the creatures in this list are artifact creatures except Kavaron Harrier and Oreplate Pangolin, and poison needs 5 connections. |
| Lithobraking | '2 damage to each creature' is a sweeper; this deck is the one with the wide board. 8 of its 14 creature copies have toughness 3 or less. |
| Orbital Plunge | {3}{R} sorcery-speed 6 damage. At 4 mana in an aggro curve it competes with Kav Landseeker and Memorial Team Leader, both of which attack. |
| Remnant Elemental | 0/4 reach. A 2-drop that cannot attack is the wrong 2-drop for the lowest-curve build in mono-red. |
| Rig for War | +3/+0, first strike and reach for {1}{R} - a combat trick; Full Bore does the same job for one mana with a trample/haste upside off warp. |
| Systems Override | Threaten effect for 3. Steals one blocker for a turn, but it adds no permanent board and Memorial Team Leader's anthem does more every turn. |
| Territorial Bruntar | 6/6 reach for 6 with a landfall impulse-draw. This build has no landfall payoff density and 6 mana is past the thesis turn. |
| Nutrient Block / Melded Moxite / Chrome Companion / Wurmwall Sweeper | Colourless artifacts. Each would turn on Oreplate Pangolin and Tezzeret, but none attacks, and this build is spending every slot on Kavu density for Possibility Technician. |
| Secluded Starforge | Rare land taping only for {C} in a deck with {R}{R} costs (Tannuk, Steadfast Second and Ruinous Rampage). A colourless land is a real cost in mono-red. |
| Kavaron, Memorial World | Mythic Planet land that enters tapped. A tapped land in the lowest-curve build in the pool, and it would spend a mythic slot. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 1   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.65 adj [MV 2.39 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool: every card is in the eoe cube mainboard (Phase 5C check 2 PASS)
[PASS] copies: commons/uncommons <= 2, rares/mythics <= 1 (Phase 5C check 3 PASS)
[PASS] rare_mythic_cap: 3 of the permitted 6 used: Possibility Technician (rare, mainboard), Tannuk Steadfast Second (mythic, mainboard), Nova Hellkite (rare, sideboard). Three slots remain unused.
[PASS] colors: all 23 nonland cards usable in mono-R via effective_cost.best_mode (Phase 5C check 4 PASS)
[PASS] splash: splash_colors = [], so check 5 is vacuously satisfied
[PASS] basics: Mountain x17 — format-supplied, exempt from copy limits
[PASS] deck_size: 23 nonland + 17 land = 40 mainboard; 10 sideboard
```
