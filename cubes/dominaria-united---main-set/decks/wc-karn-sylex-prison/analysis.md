---
deck_name: "wc-karn-sylex-prison"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "W"
format: "40-card"
built_at: "2026-08-17T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  17x Plains                
```

### CREATURES (8)

```
CMC  Card                   Qty   Color Role                                                                            Rar
  3  Anointed Peacekeeper   x1    W   Interaction/Disruption — taxing + turn-3 3/3 blocker                            R
  3  Argivian Cavalier      x1    W   Payload/Payoff — MV3 body + Soldier token                                       C
  3  Automatic Librarian    x1    C   Infrastructure — selection body above the Sylex line                            C
  4  Serra Paragon          x1    W   Payload/Payoff — recursion engine                                               M
  4  Shield-Wall Sentinel   x2    C   Enabler/Fodder — defender tutor                                                 C
  4  Wingmantle Chaplain    x2    W   Payload/Payoff — Bird factory                                                   U
```

### INSTANTS & SORCERIES (2)

```
CMC  Card                   Qty   Color Role                                                                            Rar
  2  Destroy Evil           x2    W   Interaction/Disruption — modal instant                                          C
```

### OTHER SPELLS (13)

```
CMC  Card                   Qty   Color Role                                                                            Rar
  1  Inscribed Tablet       x2    C   Infrastructure — land finder that sacrifices itself                             U
  3  Citizen's Arrest       x2    W   Interaction/Disruption — exile                                                  C
  3  Karn's Sylex           x1    C   Interaction/Disruption — asymmetric sweeper                                     M
  3  Relic of Legends       x2    C   Infrastructure — unrestricted acceleration                                      U
  4  Golden Argosy          x1    C   Payload/Payoff — closer + ETB re-buy                                            R
  4  Karn, Living Legacy    x1    C   Engine/Outlet — Powerstone ramp + card selection                                M
  4  Prayer of Binding      x2    W   Interaction/Disruption — flash exile                                            U
  5  Jodah's Codex          x1    C   Infrastructure — repeatable card draw                                           U
  5  Meteorite              x1    C   Interaction/Disruption — ETB removal + fixing                                   C
```

## SIDEBOARD (10)

```
Card                   Qty   Color Role / When to board in                                                         Rar
Clockwork Drawbridge   x2    W   Flex — 0/3 defender wall vs aggro; raises the Chaplain defender count           C
Walking Bulwark        x2    C   Flex — 1-mana artifact wall vs aggro                                            U
Samite Herbalist       x1    W   Flex — lifegain + scry vs race matchups                                         C
Mesa Cavalier          x2    W   Flex — 2/1 flier + 2 life vs evasion races                                      C
Captain's Call         x1    W   Flex — three Soldier tokens; a sorcery, so exempt from the mana-value line      C
Argivian Phalanx       x2    W   Flex — 4/4 vigilance with affinity for creatures; blocks and attacks vs races   C
```

## ANALYSIS

### DECK IDENTITY

A mono-white artifact prison deck built around a mana-value line. Karn's Sylex reads '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less', so 21 of the 23 nonland cards are either permanents priced at mana value 3 or more or instants that never occupy the battlefield — the sweep at X=2 destroys the cube's cheap creatures and none of this deck's permanent cards. Two honest exceptions are recorded rather than hidden: Inscribed Tablet x2 sit at mana value 1, but '{1}, {T}, Sacrifice this artifact' is their own activation cost at instant speed, so they are cracked in response to Sylex's sorcery-speed ability; and TOKENS have mana value 0, so Karn's Powerstones die to the sweep they paid for. Karn, Living Legacy banks Powerstone mana spendable only on the 11 colourless cards and on activated costs, white exile effects answer what is too large for the sweep, and the game is closed by Wingmantle Chaplain's Birds behind a Golden Argosy that re-buys enters-the-battlefield triggers on 7 of the 8 creature cards.


### THE DECK IS BUILT AROUND A MANA-VALUE LINE

Karn's Sylex reads "{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less." That is symmetric text, and the entire construction of this deck is the work required to make it asymmetric at X=2: **19 of the 23 nonland cards are permanents priced at mana value 3 or more, and 2 more are instants** that never occupy the battlefield.

Two exceptions are recorded rather than hidden.

**Inscribed Tablet x2 sit at mana value 1** — but "{1}, {T}, Sacrifice this artifact" is their own activation cost, an activated ability with no timing restriction, while Sylex is "Activate only as a sorcery." You crack them in response to Sylex's ability on the stack. They are the one cheap permanent in the white/colourless pool that pays its own way off the battlefield, which is why they are the deck's turn-1 play and its answer to mana screw.

**Tokens have mana value 0.** Birds and Soldiers can be deployed after the sweep. Powerstones cannot: Powerstone mana is what pays Sylex's {X}, so they are on the battlefield when the ability resolves and are destroyed by it. There is no sequencing that saves them. Karn rebuilds at one per turn.

### X=2 IS THE ONLY SETTING THAT IS ONE-SIDED

| X | What it destroys of yours |
|---|---|
| 0–1 | Powerstones, Birds, Soldiers, Inscribed Tablet (crackable in response) |
| **2** | **Nothing else — this is the window** |
| 3 | Relic of Legends x2, Automatic Librarian, Citizen's Arrest x2, Anointed Peacekeeper, Argivian Cavalier |
| 4+ | Adds Karn, Golden Argosy, Shield-Wall Sentinel x2, Serra Paragon, Wingmantle Chaplain x2, Prayer of Binding x2 |

Note the hidden cost at X≥3: **destroying your own Citizen's Arrest or Prayer of Binding gives the prisoner back**, because both read "until this enchantment leaves the battlefield."

### GOLDEN ARGOSY IS AN ENGINE HERE, AND IT HAS A PRICE

"Whenever Golden Argosy attacks, exile each creature that crewed it this turn. Return them to the battlefield tapped." In this list that re-buys an enters-the-battlefield trigger on **7 of the 8 creature cards** — Automatic Librarian's scry 2, Shield-Wall Sentinel's defender tutor, Wingmantle Chaplain's Birds, Argivian Cavalier's Soldier, and Anointed Peacekeeper naming a fresh card out of the opponent's hand.

The price, which is real: they come back **tapped at your end step**, so they are tapped through the opponent's turn. Crewing with a Shield-Wall Sentinel removes one of the deck's four blockers from defence on the swing-back. Do not attack with the Argosy on a board you need to hold.

### WHAT KARN'S MANA CAN AND CANNOT DO

Powerstone mana "can't be spent to cast a nonartifact spell." The 23 nonland cards split **12 colourless / 11 white**, and of the colourless twelve only **11 are artifacts** — Karn himself is a planeswalker. So Powerstones cast 11 of 23 cards and pay both relevant activated costs (Sylex's {X}, Karn's own −1), but not one white spell. That restriction is exactly why the deck runs 17 real Plains and treats Karn as a card-advantage engine that happens to pay for its own sweeper.

### PLAY PATTERN NOTES

- Fire Sylex at X=2 and never higher unless you are willing to hand back everything Citizen's Arrest and Prayer of Binding are holding.
- Crack Inscribed Tablet in response to your own Sylex activation, not before — it is a legal blocker-adjacent artifact until then.
- Shield-Wall Sentinel's tutor should usually find Wingmantle Chaplain, not another Sentinel: Chaplain has defender, so it is a legal target, and it converts the defender count into fliers.
- Hold Prayer of Binding for the opponent's turn. Flash is the deck's only way to interact without tapping low on its own turn.
- Against aggro, board in Clockwork Drawbridge x2 and Walking Bulwark x2 and accept them as Sylex collateral — turn-1 walls matter more than a one-sided sweep when the alternative is dying on turn 5.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:2  2:2  3:8  4:9  5:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  mana_development: 6 copies (effective 4.5: Meteorite@0.6, Karn, Living Legacy@0.7, Inscribed Tablet@0.6, Inscribed Tablet@0.6) → p=0.85 (need ≥ 0.75)
  PASS  sweeper_engine: 5 copies → p=0.88 (need ≥ 0.75)
  PASS  payoff: 5 copies → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 38%  T2 66%  T3 96%
Coverage:  [PASS]
  OK        wide_boards: Karn's Sylex, Wingmantle Chaplain, Wingmantle Chaplain, Shield-Wall Sentinel, Shield-Wall Sentinel, Anointed Peacekeeper
  OK        single_large_threat: Citizen's Arrest, Citizen's Arrest, Prayer of Binding, Prayer of Binding, Destroy Evil, Destroy Evil
  OK        noncreature_permanents: Prayer of Binding, Prayer of Binding, Destroy Evil, Destroy Evil, Karn's Sylex
  CONCEDED  stack: White holds no counterspell anywhere in this cube's W pool; the deck answers permanents after they resolve, via exile effects that are strictly better than counters against recursion but cannot stop a spell.
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards cube-wide, and no W or colourless card in the working pool exiles an opponent's graveyard. Partial mitigation only: Citizen's Arrest and Prayer of Binding exile rather than destroy, so a reanimated threat they answer does not return.
```

None — after the Phase 9 repairs the structural gate returns PASS on all four checks. The pre-grill draft carried an accepted goldfish WARN (78% keepable) on the grounds that no repair existed without breaking the mana-value discipline; the Challenger falsified that with Inscribed Tablet, whose sacrifice is its own activation cost, and adding it plus Anointed Peacekeeper and Argivian Cavalier moved keepable to 82% and the turn-1 play rate from 0% to 38%. The WARN is gone rather than argued away.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Karn's '-1: Pay any amount of mana. Look at that many cards from the top of your library, then put one of those cards into your hand' is an uncapped mana sink that converts surplus lands directly into cards, and it can be paid with Powerstone mana. Automatic Librarian x2 ('scry 2') and Serra Paragon ('you may play a land from your graveyard') smooth the rest, and Golden Argosy turns idle creatures into a 3/6 attack for crew 1. |
| screw | mitigation | 17 lands plus Inscribed Tablet x2 ('Reveal the top five cards of your library. Put a land card from among them into your hand'), which digs five deep for the third land and, because '{1}, {T}, Sacrifice this artifact' is its own activation cost at instant speed, never becomes collateral to the deck's own X=2 sweep. Pre-turn-3 castables went from 2 of 22 to 4 of 23; the goldfish sim moved from 78% to 82% keepable and the turn-1 play rate from 0% to 38%. |
| decapitation | mitigation | No single card is load-bearing. Karn's Sylex is one of nine interaction cards and the deck's other eight (Citizen's Arrest x2, Prayer of Binding x2, Destroy Evil x2, Meteorite x2) all answer permanents one at a time; Karn, Living Legacy is a value engine, not a prerequisite, since Relic of Legends x2 and Meteorite x2 supply mana that Powerstones cannot legally spend on white spells anyway. The six payoff cards are independent of each other. |
| gas-out | mitigation | Karn's '-1: Pay any amount of mana. Look at that many cards from the top of your library, then put one of those cards into your hand' is repeatable card advantage every turn he survives, and it is payable with Powerstone mana because an activated ability is not casting a spell. Jodah's Codex is a true repeatable draw at {4} plus a tap on this deck's 1-of-5 Domain count. Serra Paragon rebuys a permanent spell of mana value 3 or less from the graveyard once per turn — 10 legal copies in this list. Golden Argosy re-buys an enters-the-battlefield trigger on 7 of the 8 creature cards. Stated precisely: Automatic Librarian's 'scry 2' is selection, not card replacement, and is not counted here. |
| raced | mitigation | Corrected count — Golden Argosy is a 'Legendary Artifact - Vehicle' and blocks only by tapping a creature to crew it, so it is NOT counted. The genuine blockers are Wingmantle Chaplain x2 (0/3 defender), Shield-Wall Sentinel x2 (1/3 defender) and Anointed Peacekeeper (3/3 vigilance, castable on turn 3) — 5 of 23 nonland cards, with the first arriving on turn 3 rather than turn 4. Prayer of Binding x2 has flash, so it interacts on the opponent's turn without tapping out. Against the cube's fastest starts the sideboard adds Clockwork Drawbridge x2 and Walking Bulwark x2 as turn-1 walls, accepting that they become Sylex collateral in that matchup, plus Argivian Phalanx x2 whose affinity for creatures makes a 4/4 vigilance body cheap on a developed board. |
| disruption-fizzle | mitigation | The critical turn is the Sylex activation, and it is protected structurally: Sylex is already on the battlefield when it is activated, so the only interaction that stops it is artifact removal in response. The correct dossier row is threat_profile.artifact_answers at 5 cards / 2.0% of the cube, all in BG/G/R — not the 15 cards / 6.1% artifact-CARDS row an earlier draft cited. If Sylex is answered the plan does not fold: the other eight interaction cards and five payoffs operate independently, and Serra Paragon can recast a DESTROYED Sylex from the graveyard because it is mana value 3 (note that a Sylex which was activated is in exile, not the graveyard, since 'Exile Karn's Sylex' is part of its cost). |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Defiler of Faith (rare) | CUT IN PHASE 9 on an oracle conflict with the deck's own centrepiece. Its discount reads 'As an additional cost to cast white permanent spells, you may PAY 2 LIFE' and Karn's Sylex reads 'Players can't pay life to cast spells or to activate abilities that aren't mana abilities.' With Sylex on the battlefield the discount is live on 0 of 23 cards instead of 8, and the deck's primary line puts Sylex down on turn 3 and Defiler on turn 5. Its 1/1 Soldier tokens are also mana value 0 and die to the sweep. STRONGEST RARE CUT — re-add only if you also cut Karn's Sylex. |
| Temporary Lockdown (rare) | 'exile each nonland permanent with mana value 2 or less' duplicates Karn's Sylex's band while also exiling Karn's Powerstones and Inscribed Tablet x2, and it would spend a capped rare slot on a second copy of an effect the deck already has. |
| Leyline Binding (rare) | 'Domain — This spell costs {1} less to cast for each basic land type among lands you control.' This deck controls 1 of 5 (Plains only, zero nonbasic lands), so it costs {4}{W} — a six-mana removal spell that would also eat one of the 5 capped rare slots. |
| Artillery Blast | 'Domain — deals X damage to target tapped creature, where X is 1 plus the number of basic land types among lands you control.' At 1 of 5 that is 2 damage, and only to a TAPPED creature. |
| Urza Assembles the Titans (rare) | SIDEBOARD/BUBBLE CONSIDERATION. Chapter I scries 4 and can find Karn, and chapter III doubles his -1 — but there is exactly ONE planeswalker in the deck for chapter II to put onto the battlefield, so a 5-mana Saga is spent digging for a 1-of. Gated by the 5-rare cap. |
| Timeless Lotus (mythic) | Its color_identity is WUBRG, so four of the five colours it makes are dead in a mono-white deck, and it enters tapped at 5 mana. |
| Golden Argosy — the drawback, priced | INCLUDED, but note the cost: 'Return them to the battlefield TAPPED at the beginning of the next end step' means the crewing creature is tapped through the opponent's turn, so crewing with a Shield-Wall Sentinel removes 1 of the deck's 4 blockers on the swing-back. Do not attack with it on a board you need to hold. |
| Salvaged Manaworker | The pool's best violator of the mana-value discipline, tested explicitly: a {2} artifact creature that ramps and blocks would be an excellent turn-2 play, but at MV 2 it IS destroyed by the deck's own X=2 sweep. Correctly rejected — the contrast with Inscribed Tablet, which sacrifices itself and therefore is not collateral, is what the discipline actually turns on. |
| Weatherlight Compleated (mythic) / Valiant Veteran (rare) / Guardian of New Benalia (rare) | All at mana value 2 or less, so all sit under the Sylex line. Excluded on the discipline, not on power. |
| Clockwork Drawbridge / Walking Bulwark | SIDEBOARD. Both are MV 1 artifact defenders that would raise the Wingmantle Chaplain defender count from 4 to 8 and give the deck a turn-1 play — but both are Sylex collateral. They are the explicit aggro boarding plan, where surviving turns 1-3 matters more than a one-sided sweep. |
| Captain's Call | SIDEBOARD. A sorcery, so genuinely exempt from the mana-value line — but its three 1/1 Soldiers are mana value 0 and die to the sweep like every other token. Argivian Cavalier gives a body AND a Soldier at MV 3 for less, which is why the maindeck slot went there. |
| Coalition Skyknight | Cut in Phase 9. A 2/2 flier at MV 4 with no enters-the-battlefield trigger (so Golden Argosy does nothing with it), no defender (so Wingmantle Chaplain does nothing with it), and enlist that wants attackers on a board that is mostly walls. |
| Danitha, Benalia's Hope (rare) | 'you may put an Aura or Equipment card from your hand or graveyard onto the battlefield attached to Danitha' — this deck runs 0 Auras and 0 Equipment, so the ETB is blank. A 4/4 first strike lifelink body would still be fine, but not for a capped rare slot. |
| Serra Redeemer (rare) | 'Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature' would be live on the Bird and Soldier tokens, but the tokens die to the deck's own sweeper and the card costs {3}{W}{W} plus a capped rare slot. |
| Hero's Heirloom / Vanquisher's Axe | Equipment at MV 1-2, both under the Sylex line, and with only 8 creature cards to carry them. |
| Argivian Phalanx | SIDEBOARD. 'Affinity for creatures' makes a 4/4 vigilance body cheap on a developed board and its printed mana value is 6, well above the line — but the maindeck wants its 4-drops to be the defenders and the exile effects. It is the primary board-in against decks that race. |
| Automatic Librarian (2nd copy) | Trimmed to 1 to bring the average mana value to 3.30 and the land count to a self-consistent 17. Note for the record: 'scry 2' is selection, not card replacement, so it does not answer the deck's card-flow problem the way Jodah's Codex does. |
| Meteorite (2nd copy) | Trimmed to 1. It is doing double duty as both interaction ('deals 2 damage to any target') and acceleration ('{T}: Add one mana of any color'), which is disclosed in the slot allocation — one copy is enough to carry both roles without distorting the curve at MV 5. |
| Mesa Cavalier / Samite Herbalist | SIDEBOARD. Mesa Cavalier is the only sideboard body that respects the MV>=3 line, so it boards in without compromising Sylex; Samite Herbalist's tap trigger pairs with Golden Argosy crew but sits at MV 2. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.3   Ramp cards: 4   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.07 adj [MV 3.3 vs 2.5, 6 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size                        40 (expect 40)
[PASS] 1b sideboard size                        10 (expect 10)
[PASS] 2 exact-name membership                  all 23 names found
[PASS] 3 copy limits                            all within card_pool_rules (basics exempt)
[PASS] 3b rare/mythic cap                       5/5 -> Anointed Peacekeeper x1, Golden Argosy x1, Karn's Sylex x1, Karn, Living Legacy x1, Serra Paragon x1
[PASS] 4 colour usability                       all nonland cards usable in ['W']; off-identity modes: none
[PASS] 5a splash cap <=3/colour                 splash_colors=[] (none)
[PASS] 5b splashed cards in splash_candidates   splashed: none
```
