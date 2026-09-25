---
deck_name: "ur-jhoira-artifact-cheat"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-08-17T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  8x Island                     
  1x Molten Tributary              Land — dual
  6x Mountain                   
  1x Shivan Reef                   Land — untapped dual
```

### CREATURES (8)

```
CMC  Card                        Qty   Color Role                                                                          Rar
  2  Jhoira, Ageless Innovator   x1    RU   Engine/Outlet — deployment anchor                                             R
  2  Salvaged Manaworker         x2    C    Infrastructure — fixing / Jhoira ammo MV2                                     C
  3  Academy Wall                x1    U    Payload/Payoff — loot engine + 0/5 wall                                       C
  3  Automatic Librarian         x2    C    Infrastructure — selection / Jhoira ammo MV3                                  C
  3  Haughty Djinn               x1    U    Payload/Payoff — evasive clock + spell discount                               R
  7  Tolarian Terror             x1    U    Payload/Payoff — graveyard-scaled finisher                                    C
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                        Qty   Color Role                                                                          Rar
  2  Essence Scatter             x2    U    Interaction/Disruption — stack                                                C
  2  Fires of Victory            x1    R    Interaction/Disruption — scaling removal, draws when kicked                   U
  2  Impulse                     x1    U    Infrastructure — selection                                                    C
  2  Lightning Strike            x2    R    Interaction/Disruption                                                        C
  2  Silver Scrutiny             x1    U    Payload/Payoff — instant-speed refuel                                         R
  2  Thrill of Possibility       x1    R    Interaction/Disruption — instant-speed filtering                              C
  3  Ertai's Scorn               x1    U    Interaction/Disruption — stack                                                U
```

### OTHER SPELLS (7)

```
CMC  Card                        Qty   Color Role                                                                          Rar
  1  Inscribed Tablet            x2    C    Infrastructure — land finder / Jhoira ammo MV1                                U
  2  Yotia Declares War          x2    R    Interaction/Disruption — artifact-count removal                               U
  3  Relic of Legends            x2    C    Infrastructure — acceleration / Jhoira ammo MV3                               U
  4  The Phasing of Zhalfir      x1    U    Interaction/Disruption — mass answer                                          R
```

## SIDEBOARD (10)

```
Card                        Qty   Color Role / When to board in                                                       Rar
Fires of Victory            x1    R    Flex — scaling removal vs evasion                                             U
Impede Momentum             x2    U    Flex — tempo answer to ward/hexproof threats                                  C
Negate                      x2    U    Hate — noncreature spells; the only answer to enchantments in these colours   C
Smash to Dust               x1    R    Hate — artifact + anti-token sweep                                            C
Thrill of Possibility       x1    R    Flex — instant-speed filtering vs flood                                       C
Frostfist Strider           x1    U    Flex — 4/4 ward 2, stun on ETB vs removal-heavy decks                         U
Jaya's Firenado             x2    R    Flex — 5 damage removal vs large threats                                      C
```

## ANALYSIS

### DECK IDENTITY

A U/R control deck that uses Jhoira, Ageless Innovator as a mana-free deployment engine on top of a shell that stands on its own. Her ability puts an artifact CARD from hand onto the battlefield at mana value up to her ingenuity counters, so the deck's eight artifact cards are all priced at MV 1-3: her first activation (X=2) can deploy four of the eight, and her second (X=4) can deploy all eight — one activation earlier than a ladder that reaches for MV 5. Each deployment is free, so the deck's real mana holds up Essence Scatter, Ertai's Scorn and Lightning Strike the same turn. Jhoira is a singleton and is seen by turn 8 in roughly 37.5% of games; in the other 62.5% this is a straightforward U/R control deck with three counterspells, a wrath, and two finishers that both get cheaper and larger as the interaction suite fills the graveyard.


### JHOIRA ONLY DEPLOYS ARTIFACT CARDS — AND THAT SHAPED THE WHOLE LIST

The single most consequential line in this build is the word *artifact* in Jhoira's text: "you may put an **artifact card** with mana value X or less from your hand onto the battlefield." She cannot deploy a Tolarian Terror, a Haughty Djinn, or a token. That constraint forces the deck to carry a dedicated ammunition suite, and it forces the finishers to be cast the normal way.

The second consequential detail is that counters go on **before** the deployment, so her windows are X=2, X=4, X=6 — there is no X=1 or X=3. The obvious build reaches for MV-5 artifacts to use the X=6 window; this build does the opposite and caps the ladder at MV 3.

| Artifact | MV | X=2 (1st activation) | X=4 (2nd) |
|---|---|---|---|
| Inscribed Tablet x2 | 1 | legal | legal |
| Salvaged Manaworker x2 | 2 | legal | legal |
| Automatic Librarian x2 | 3 | — | legal |
| Relic of Legends x2 | 3 | — | legal |

**4 of 8 legal on the first activation, 8 of 8 on the second.** A ladder that reached for Meteorite at MV 5 would need a *third* activation — three untap steps after Jhoira resolves — to unlock its top rung. Trading the top rung for a full second activation is a turn of tempo.

### THE DECK IS BUILT TO BE 62.5% JHOIRA-LESS

Jhoira is a singleton, and the honest number is that she is seen by turn 8 in about 37.5% of games. Rather than pretend otherwise, every slot is priced to be fine without her: Relic of Legends and Salvaged Manaworker are the mana that supports {1}{U}{U}, {2}{U}{U} and {X}{U}{U}; Automatic Librarian is a 3/2 that scries; Inscribed Tablet converts into a land or a card. Both win conditions read the graveyard, not the engine.

### THE TWO FINISHERS SHARE ONE DENOMINATOR

Haughty Djinn's power and Tolarian Terror's discount both count instants and sorceries in the graveyard, and this list holds **8 of 23** nonland cards that qualify. That is the number to watch when swapping cards: every instant or sorcery removed makes the Djinn smaller *and* the Terror more expensive. It is also why Thrill of Possibility beats a cantrip here — it puts itself and a discarded card toward the count.

### PLAY PATTERN NOTES

- **Never crew a Vehicle with Jhoira** if one is added later: exiling and returning her makes a new object with zero ingenuity counters.
- Hold Essence Scatter on the turn Jhoira resolves rather than deploying a second artifact. She is the card that gets killed, and her activation is sorcery-speed.
- Read ahead on Yotia Declares War: start on chapter II only when two or more artifacts are already untapped, otherwise start on I for the flying Thopter.
- Silver Scrutiny has flash at X<=3 — cast it end of turn on the turns nothing else happens, not on your own main phase.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (24 nonland):  1:2  2:13  3:7  4:1  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  mana_development: 6 copies (effective 3.8: Salvaged Manaworker@0.5, Salvaged Manaworker@0.5, Inscribed Tablet@0.4, Inscribed Tablet@0.4) → p=0.78 (need ≥ 0.75)
  PASS  jhoira_ammo: 8 copies → p=0.96 (need ≥ 0.75)
  PASS  payoff: 4 copies → p=0.79 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 38%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: The Phasing of Zhalfir, Academy Wall, Salvaged Manaworker, Salvaged Manaworker, Automatic Librarian, Automatic Librarian
  OK        single_large_threat: Essence Scatter, Essence Scatter, Ertai's Scorn, The Phasing of Zhalfir, Lightning Strike, Lightning Strike
  OK        noncreature_permanents: Ertai's Scorn, The Phasing of Zhalfir
  OK        stack: Essence Scatter, Essence Scatter, Ertai's Scorn
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards cube-wide, and an independent scan of every U, R and colourless card in the working pool found none that exiles an opponent's graveyard — the class is unanswerable in these colours, not merely unaddressed.
```

None — the structural gate returned PASS on all four checks (curve, assembly, goldfish, coverage), so there is no WARN-tier deviation to justify.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Thrill of Possibility x2 ('As an additional cost to cast this spell, discard a card. Draw two cards') turns a surplus land into two cards at instant speed and puts a sorcery in the graveyard for both finishers; Impulse ('Look at the top four cards of your library. Put one of them into your hand') filters. Silver Scrutiny scales directly with excess mana ('Draw X cards'). Jhoira's deployment costs no mana at all, so a flooded turn still adds a permanent while the surplus holds up Essence Scatter x2 and Ertai's Scorn. |
| screw | mitigation | 16 lands and a 2.50 average mana value — the flattest curve of the four builds (MV distribution 1:2, 2:13, 3:7, 4:1, 7:1). Inscribed Tablet x2 ('Put a land card from among them into your hand') directly finds the third land, and 15 of the 24 nonland cards cost 2 or less, so a two-land keep has a real turn-2 play in nearly every hand. The goldfish sim reports 85% keepable and 84% reaching three lands by turn 3. |
| decapitation | mitigation | Jhoira is a singleton and is the card an opponent most wants to kill, so nothing in the deck references her: all eight artifacts are cast normally at fair rates, and the two finishers (Haughty Djinn, Tolarian Terror) scale off the graveyard the interaction suite fills, not off her. Without Jhoira this is still a U/R control deck with 3 counterspells, 4 removal spells, a wrath and two self-cheapening threats. |
| gas-out | mitigation | Stated as a count: 1 of 24 nonland cards is net card-positive (Silver Scrutiny, 'Draw X cards', with flash at X<=3 so it costs nothing on the turns the deck already represents a counterspell). Thrill of Possibility x2, Impulse and Academy Wall ('you may draw a card. If you do, discard a card') are card-neutral filtering that convert dead cards into live ones and fill the graveyard. The structural answer is that both finishers get cheaper as the hand empties: Tolarian Terror at four instants/sorceries in the yard costs {2}{U} for a 5/5 with ward 2. |
| raced | mitigation | Corrected count, no double-counting and no crew dependency: the distinct simultaneous blockers are Academy Wall (0/5), Salvaged Manaworker x2 (1/3), Automatic Librarian x2 (3/2) and the Thopter tokens from Yotia Declares War x2 ('a 0/2 colorless Thopter artifact creature token with flying') — 7 bodies from 7 cards, two of which fly. Adding Lightning Strike x2 and Essence Scatter x2, that is 11 of the 24 nonland cards that block or answer the cube's densest threat class (evasion, 51 cards / 20.6%). |
| disruption-fizzle | accepted | The critical turn is the turn Jhoira first activates, and she is sorcery-speed vulnerable: an opponent can kill her with any removal spell in response and the activation is lost. The in-colour protection is Shore Up ('Target creature you control gets +1/+1 and gains hexproof until end of turn. Untap it.'), and the untap clause is a genuine second upside the earlier record failed to weigh — it would give a second activation the same turn, taking X from 2 to 4 in one turn. It is still declined: two maindeck slots protecting a card present in 37.5% of games costs either an interaction slot (weakening the controller role that IS default_role) or an artifact rung (removing ammunition from the kill mechanism). The deck accepts the loss and plays around it by holding Essence Scatter and Ertai's Scorn on the turn Jhoira comes down rather than deploying more artifacts. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Golden Argosy (rare) | CUT IN PHASE 9. It is the only MV-4 artifact in the pool, so it looked like the natural X=4 rung — but 'Whenever Golden Argosy attacks, exile each creature that crewed it this turn. Return them to the battlefield tapped' means crewing with Jhoira returns her as a NEW object with zero ingenuity counters, resetting X from 4 back to 2. Its ETB re-buy was also live on only 2 of 7 creature cards. Capping the ladder at MV3 made it unnecessary. |
| Karn, Living Legacy (mythic) | '+1: Create a tapped Powerstone token' produces a TOKEN, which Jhoira can never deploy — she puts artifact CARDS from hand onto the battlefield. Its mana also 'can't be spent to cast a nonartifact spell', and all 9 interaction slots are nonartifact. STRONGEST MYTHIC ON THE BUBBLE if you rebuild toward a Powerstone plan instead. |
| Meteorite | 'When this artifact enters, it deals 2 damage to any target' plus a mana rock is a genuinely good free deployment — but at MV 5 it is reachable ONLY on Jhoira's third activation (X=6), three untap steps after she resolves. Cutting it capped the ladder at MV3, which is what let X=4 deploy 8 of 8 instead of 7 of 9. FIRST CARD TO RE-ADD for a slower build. |
| Weatherlight Compleated (mythic) | MV 2 and therefore a legal X=2 drop, but 'As long as Weatherlight Compleated has four or more phyresis counters on it, it's a Phyrexian creature' means it is not a creature on arrival, and its counters come from 'Whenever a creature you control DIES' — this control deck's artifacts are built to survive, not trade. |
| Karn's Sylex (mythic) | '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less' is symmetric, and this deck's board is 8 artifacts all priced at MV 1-3 — every Sylex activation big enough to matter destroys its own ladder first. |
| Timeless Lotus (mythic) | 'enters tapped' and '{T}: Add {W}{U}{B}{R}{G}' — three of the five colours are dead here, and 5 mana for a rock is outside the ladder's MV cap. |
| Vesuvan Duplimancy (mythic) | 'Whenever you cast a spell that targets only a single artifact or creature you control, create a token that's a copy' — this list contains ZERO spells that target a single artifact or creature you control, so the trigger count is 0 of 24. It would need Shore Up x2 or an Aura package built around it. |
| Shore Up | SIDEBOARD CONSIDERATION. 'Target creature you control gets +1/+1 and gains hexproof until end of turn. Untap it.' The untap clause would give Jhoira a SECOND activation the same turn, taking X from 2 to 4 in one turn — a real upside. Declined because two maindeck slots protecting a card present in 37.5% of games costs either an interaction slot or a ladder rung. It is also the enabler Vesuvan Duplimancy would need. |
| Jodah's Codex | 'Domain — {5}, {T}: Draw a card. This ability costs {1} less to activate for each basic land type among lands you control.' This deck controls 2 of 5 basic land types (Molten Tributary is 'Land - Island Mountain' and Shivan Reef has none), so the activation costs {3} plus a tap. |
| Timely Interference | 'Target creature gets -1/-0 until end of turn' kills essentially nothing; the attached cantrip does not make it a removal spell, and the interaction slots went to Essence Scatter and Lightning Strike. |
| Cosmic Epiphany (rare) | 'Draw cards equal to the number of instant and sorcery cards in your graveyard' reads the same 9-of-24 denominator as the two finishers, so it is a realistic draw-3 to draw-4 at turn 8. It lost the last rare slot to Silver Scrutiny purely on speed: {X}{U}{U} with flash at X<=3 costs nothing on the turns the deck already represents a counterspell. STRONGEST RARE ON THE BUBBLE. |
| Defiler of Dreams (rare) | 'Whenever you cast a blue permanent spell, draw a card' — only 4 of the 24 nonland cards are blue permanent spells (Academy Wall, Haughty Djinn, Tolarian Terror, The Phasing of Zhalfir), because eight of the artifacts are colourless. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' — this deck has zero MV-1 instants or sorceries, so the ETB is blank. |
| Balmor, Battlemage Captain | 'Whenever you cast an instant or sorcery spell, creatures you control get +1/+0 and gain trample' is a spellslinger-aggro payoff; this list has 2 real attackers, so the anthem has almost nothing to pump. |
| Najal, the Storm Runner / Keldon Flamesage / Electrostatic Infantry / Ghitu Amplifier | All spellslinger payoffs that want 12+ instants and sorceries and an attacking board. This deck runs 9 of 24 and wins by accumulated permanents, not by spell volume. |
| Academy Loremaster (rare) | 'At the beginning of each player's draw step, that player may draw an additional card. If they do, spells they cast this turn cost {2} more' — symmetric card draw that helps an opponent developing a board more than a controller holding up counterspells. |
| Vanquisher's Axe / Hero's Heirloom | Equipment with no creature count to carry it: 7 creature cards, of which three are 1/3 fixers and a 0/5 wall. The Equipment slots went to Inscribed Tablet, which is a legal MV1 ladder rung that converts into a land or a card. |
| Shield-Wall Sentinel | MV 4 — above the ladder's MV3 cap, so it would need Jhoira's second activation while contributing nothing the MV3 rungs do not. Its 'search your library for a creature card with defender' also has a denominator of 1 defender in this list (Academy Wall). |
| Soaring Drake | SIDEBOARD CONSIDERATION, cut in Phase 9. Its full oracle text is 'Flying' — no ETB, no scaling, no interaction with the artifact ladder or the instant/sorcery count. Replaced by Fires of Victory, which answers the same evasive threats and draws a card when kicked. |
| Yavimaya Steelcrusher / Smash to Dust (2nd copy) | Artifact hate against a threat class that is only 15 cards / 6.1% of the cube. One Smash to Dust is kept for its third mode, 'deals 1 damage to each creature your opponents control', which is the sideboard's only sweeper. |
| Molten Tributary (2nd copy) | Replaced by Shivan Reef once the rare budget was recounted. 'This land enters tapped' is a real cost twice per game for a deck that wants {1}{U} Essence Scatter up on turn 2; Shivan Reef's 1 damage is the cheaper price. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.5   Ramp cards: 4   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.00 adj [MV 2.5 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  33.3%  prod  50.0%  gap -16.7pp  [OK]
  U  demand  66.7%  prod  62.5%  gap  +4.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size                        40 (expect 40)
[PASS] 1b sideboard size                        10 (expect 10)
[PASS] 2 exact-name membership                  all 26 names found
[PASS] 3 copy limits                            all within card_pool_rules (basics exempt)
[PASS] 3b rare/mythic cap                       5/5 -> Haughty Djinn x1, Jhoira, Ageless Innovator x1, Shivan Reef x1, Silver Scrutiny x1, The Phasing of Zhalfir x1
[PASS] 4 colour usability                       all nonland cards usable in ['U', 'R']; off-identity modes: none
[PASS] 5a splash cap <=3/colour                 splash_colors=[] (none)
[PASS] 5b splashed cards in splash_candidates   splashed: none
```
