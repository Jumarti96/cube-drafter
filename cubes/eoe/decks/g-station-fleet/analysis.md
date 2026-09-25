---
deck_name: "g-station-fleet"
cube_id: "eoe"
cube_slug: "eoe"
colors: "G"
format: "40-card"
built_at: "2026-08-07T00:31:01Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
16x Forest                    basic
1x Secluded Starforge        {T}: Add {C}. {2}, {T}, Tap X untapped artifacts you control: Target c
```

### CREATURES (9)
```
CMC  Card                      Qty   Color Role                                            Rar
  3  Galactic Wayfarer         x2    G     Ramp                                            C
  4  Icetill Explorer          x1    G     Ramp (extra land drop)                          R
  4  Seedship Agrarian         x1    G     Ramp / Station battery                          U
  5  Harmonious Grovestrider   x2    G     Station battery / scaling threat                U
  6  Anticausal Vestige        x1    C     Cheat-into-play engine                          R
  7  Glacier Godmaw            x2    G     Payoff / haste enabler                          U
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                      Qty   Color Role                                            Rar
  1  Sami's Curiosity          x2    G     Ramp                                            C
  2  Close Encounter           x2    G     Removal                                         U
  2  Seedship Impact           x2    G     Artifact/enchantment removal                    U
  3  Shattered Wings           x1    G     Artifact/enchantment/flier removal              C
```

### OTHER SPELLS (7)
```
CMC  Card                      Qty   Color Role                                            Rar
  3  Larval Scoutlander        x2    G     Ramp                                            U
  4  Loading Zone              x1    G     Station accelerator (doubles charge counters)   R
  5  The Eternity Elevator     x1    C     Mana rock                                       R
  7  Pinnacle Kill-Ship        x2    C     Payoff / removal                                C
  8  Extinguisher Battleship   x1    C     Primary payoff / sweeper                        R
```

## SIDEBOARD (10)
```
Card                      Qty   Color Role / When to board in                                                        Rar
Meltstrider's Resolve     x1    G     Against creature decks that go under the ramp plan - one-mana fight attached to a body. U
Thaumaton Torpedo         x2    C     Against Planets, Spacecraft, enchantments and creatures this deck otherwise cannot touch - its oracle reads "Destroy target nonland permanent", and the activation drops to {3} on any turn this deck attacked with a Spacecraft. C
Dauntless Scrapbot        x2    C     Against Reanimator / Self-Mill / Graveyard decks (31 graveyard cards in this cube, 12% density). U
Shattered Wings           x1    G     Third artifact answer against the cube's 74 artifact cards (30% density) and against fliers. C
Skystinger                x2    G     Against evasion decks (56 evasive cards, 22% density) - it blocks a flier and gets +5/+0. C
Germinating Wurm          x2    G     Against fast aggro - a 5/5 that gains 2 life, deployable early for Warp {1}{G}. C
```

## ANALYSIS

### DECK IDENTITY

A mono-green ramp-control deck that uses Lander tokens and The Eternity Elevator to reach eight mana around turn six or seven, then lands a colorless Spacecraft whose enter-the-battlefield ability is a one-sided board sweeper. Extinguisher Battleship destroys a noncreature permanent and deals 4 damage to each creature, which this deck survives because its own bodies are 3/3, 5/5-and-growing, or 6/6. Station then converts the deck's surplus green power into evasion: tapping one 5-power creature turns the Battleship into a 10/10 flying trample artifact creature. Pinnacle Kill-Ship is the same plan one mana cheaper and at two copies.

### HOW THE KILL ACTUALLY ASSEMBLES

Station is the mechanic doing the real work, and it is worth spelling out because it is easy to mis-read. Station says: *"Tap another creature you control: Put charge counters equal to its power on this Spacecraft. Station only as a sorcery."* It is not a cost you pay once — it is a sorcery-speed activation you can repeat, and the counters accumulate. Extinguisher Battleship becomes an artifact creature at 5 counters; Pinnacle Kill-Ship at 7.

The critical number is therefore **power tapped**, not mana. This deck's Station batteries and what one tap contributes:

| Battery | Power tapped | Turns on Battleship (5+)? | Turns on Kill-Ship (7+)? |
|---|---|---|---|
| Harmonious Grovestrider | = lands you control (5-8) | Yes, from 5 lands | Yes, from 7 lands |
| Glacier Godmaw | 6 | Yes | No, needs a second tap |
| Anticausal Vestige | 7 | Yes | Yes |
| Galactic Wayfarer / Larval Scoutlander / Seedship Agrarian | 3 each | Two taps | Three taps |

Loading Zone changes every row of that table. Its oracle reads *"If one or more counters would be put on a creature, Spacecraft, or Planet you control, twice that many of each of those kinds of counters are put on it instead."* With it out, a single tap of any 3-power body puts 6 counters — enough for the Battleship in one activation — and a single 4-power body clears the Kill-Ship's 7. Six of the twenty-three nonland cards in this list receive Station charge counters, which is the denominator that earned it a maindeck slot in the Phase 9 repair round.

### WHY THE SWEEPER IS ASYMMETRIC

Extinguisher Battleship's ETB deals 4 damage to **each** creature, including yours. That is only a virtue if your board survives it. Counting this list: Harmonious Grovestrider (toughness = land count, so 5+ on any turn you can cast an {8} spell) x2, Glacier Godmaw 6/6 x2, and Anticausal Vestige 7/5 all live. Galactic Wayfarer 3/3 x2, Seedship Agrarian 3/3 and Icetill Explorer 2/4 die. So **5 of 9** creature-shaped permanents survive — and every survivor is a legal Station battery on the following turn, which is precisely the sequence the deck wants.

### THE LANDER IS NOT FAST MANA

A Lander token reads *"{2}, {T}, Sacrifice this token: Search your library for a basic land card, put it onto the battlefield tapped."* That is a card plus two mana for a tapped land. It nets +1 land, not +1 mana on the turn you crack it. The honest acceleration in this deck comes from three places: The Eternity Elevator's flat *"{T}: Add {C}{C}{C}"*, Icetill Explorer's *"You may play an additional land on each of your turns"*, and the sheer volume of land-count growth that Harmonious Grovestrider converts into stats. Twelve accel cards is what moves the eight-mana turn from turn 8 to turn 6-7.

### A CARD THAT WORKS FROM EXILE

Close Encounter's additional cost is *"choose a creature you control **or a warped creature card you own in exile**"*, and it then deals damage equal to that card's power. This deck runs no warp creature, so the clause is dormant here — worth flagging for whoever iterates on this list, because it is live in the Cost-Cheat build of the same archetype, where a warped Bygone Colossus in exile turns Close Encounter into a two-mana 9-damage removal spell.

### THE TWO CONCEDED THREAT CLASSES

Coverage concedes the stack and the graveyard. The stack concession is structural: green has no counterspell anywhere in this cube, and the build locked in Phase 5B cut the blue splash. The graveyard concession is a choice, not a limit — Dauntless Scrapbot's *"exile each opponent's graveyard. Create a Lander token"* is a ramp card that happens to be hate, and it sits in the sideboard at two copies so the maindeck curve stays on acceleration.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:2  2:4  3:5  4:3  5:3  6:1  7:4  8:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.6: Glacier Godmaw@0.8, Glacier Godmaw@0.8) → p=0.82 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 10.3: Larval Scoutlander@0.8, Larval Scoutlander@0.8, Seedship Agrarian@0.8, Icetill Explorer@0.7, Anticausal Vestige@0.6, Harmonious Grovestrider@0.8, Harmonious Grovestrider@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 36%  T2 79%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Extinguisher Battleship
  OK        single_large_threat: Pinnacle Kill-Ship, Close Encounter
  OK        noncreature_permanents: Seedship Impact, Shattered Wings, Extinguisher Battleship
  CONCEDED  stack: The build cut the blue splash, and green in this pool has no counterspell; the deck answers resolved permanents rather than spells on the stack.
  CONCEDED  graveyard: No maindeck graveyard interaction; Dauntless Scrapbot's 'exile each opponent's graveyard' is held in the sideboard so the maindeck curve stays on ramp.
```

- Goldfish WARN - keepable 80% against an 80% floor, i.e. exactly at the boundary rather than below it. Accepted rather than repaired: the only lever that raises it is trading top end for two-drops, and 5 of the 23 nonland cards ARE the win condition at MV 7-8. The mechanism that makes an 80% keepable rate playable here is that the four cheapest cards in the deck (Sami's Curiosity {G} x2 and Galactic Wayfarer {2}{G} x2) all read "create a Lander token", so a keepable two-land hand converts directly into the third and fourth land rather than merely surviving.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two cards convert surplus lands into action: Harmonious Grovestrider, whose "power and toughness are each equal to the number of lands you control", grows with every extra land on a Ward {2} body; and Secluded Starforge, whose "{5}, {T}: Create a 2/2 colorless Robot artifact creature token" is a repeatable land-mana sink that needs no cards in hand. [REVISED after the Challenger review: an earlier draft also cited Larval Scoutlander, which converts a land into more lands rather than into action.] |
| screw | accepted | Keepable two-land hands are the ones containing Sami's Curiosity ({G}) or Galactic Wayfarer ({2}{G}); the goldfish check measures 81% keepable and 88% at three lands by turn 3. Mitigating further would mean cutting acceleration for cheap card selection, and the 12 accel cards are precisely what turns a 17-land deck into an eight-mana deck on turn 6-7 - remove them and the thesis turn moves past 7 and the assembly gate fails. |
| decapitation | mitigation | The payoff is not one card. Pinnacle Kill-Ship x2 is the same Station plan at {7} with its own removal ETB ('deals 10 damage to up to one target creature'), and Glacier Godmaw x2 is a 6/6 trample that closes on its own. The assembly check counts 4 payoff copies (3.8 effective) reaching P=0.75 by turn 7, so answering the Battleship on sight does not answer the deck. |
| gas-out | mitigation | Cards tagged 'Cards: Net-Positive' in this mainboard: 1 of 23 (Anticausal Vestige - 'draw a card, then you may put a permanent card... onto the battlefield tapped'). That is thin, so the refuel is board-based rather than card-based: Seedship Agrarian creates a Lander every time it becomes tapped, which is every Station activation, and Secluded Starforge makes a 2/2 Robot for {5} every turn with no cards required. An empty hand still deploys a body per turn. |
| raced | accepted | The cube's fastest clocks come out of a 56-card evasion pool (22% density), including Galvanizing Sawship which flies with haste at only 3 charge counters; against those this deck is not favoured before turn 6. Mitigating would mean replacing acceleration with early interaction and blockers, which pushes the eight-mana turn past 7 and dismantles the thesis. The concession is made in the sideboard instead: Germinating Wurm x2 (5/5 that gains 2 life, Warp {1}{G} for an early body) and Skystinger x2 (3/3 reach that gets +5/+0 when it blocks a flier). |
| disruption-fizzle | mitigation | The critical turn is resolving a single permanent, not executing a chain, so one piece of interaction costs a turn rather than the game: the mana base does not deplete when the Battleship is answered, and the deck simply casts the next {7} the following turn from a three-deep payoff stack. Harmonious Grovestrider's Ward {2} additionally taxes removal aimed at the Station battery. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Famished Worldsire | {5}{G}{G}{G} - triple green is uncastable off a manabase that must also support colorless {7}-{8} casts and a U splash; and 'Devour land 3' sacrifices the lands this deck spent the game accumulating. |
| Ouroboroid | {2}{G}{G} 1/3 that grows the team by X = its own power each combat; it is a counters-payoff engine, not a mana or top-end card, and this build has 0 other +1/+1-counter payoffs. |
| Eusocial Engineering | {3}{G}{G} makes a 2/2 per landfall; this list makes 6 land-drop events beyond the natural one across a game, so it is a token engine for the landfall build (Deck D), not the Station build. |
| Bioengineered Future | Its payoff clause counts lands that entered THIS turn; with one extra land drop per turn at most it adds +1/+1 per creature, and it competes with real ramp at 3 mana. |
| Loading Zone | Doubles counters put on Spacecraft, which would halve Station requirements - but it is a rare, and at the 6 rare/mythic budget the Battleship, Elevator, Icetill Explorer and Sledge-Class Seedship are load-bearing ahead of it. |
| Mightform Harmonizer | Landfall doubles one creature's power for a turn; a combat trick, not a route to {8} mana, and it is a rare competing for the capped budget. |
| Terrasymbiosis | Draws on +1/+1 counters placed; 2 of the 23 nonland cards in this list place counters (Atmospheric Greenhouse, Seedship Agrarian landfall). Denominator too thin. EXCLUDE. |
| Edge Rover | 'When this creature dies, EACH PLAYER creates a Lander token' - symmetric ramp that helps the opponent equally; a ramp deck does not want to accelerate its opponent. |
| Dawnsire, Sunstar Dreadnought | Stations at 20+ for flying and 10+ for its damage trigger; reaching 10 charge counters needs 10 power tapped, which this list cannot assemble before turn 8. |
| Thrumming Hivepool | 'Affinity for Slivers' and 'Slivers you control have double strike' - there are 0 Slivers in this pool other than the tokens it makes itself; it is a {6} do-nothing for two turns. |
| The Endstone | {7} draw engine, but 'your life total becomes half your starting life total' each end step caps you at 10 and then does nothing further; at {7} it competes directly with Pinnacle Kill-Ship, which affects the board. |
| Mm'menon, the Right Hand | SPLASH CANDIDATE REJECTED. {3}{U}{U} requires two blue pips off a 2-3 source splash; the splash math does not support double-U. |
| Virulent Silencer | Poison payoff requires nontoken artifact creatures connecting repeatedly; this list runs 4 nontoken artifact creatures and wins by air damage, not by 10 poison counters. |
| Lashwhip Predator | 'costs {2} less if your opponents control three or more creatures' - a 5/7 for 4 against go-wide only; it does not advance the {8} plan and blanks against the control decks. |
| Frenzied Baloth | {G}{G} 3/2 uncounterable haste - a rare spent on a 2-drop beater in a deck whose plan starts at 7 mana. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     4.09   Ramp cards: 12   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.12 adj [MV 4.09 vs 2.5, 12 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod  94.1%  gap  +5.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
copy_limits:           PASS - every common/uncommon at most 2 copies, every rare/mythic at most 1, checked against cube_search pool quantities.
rare_mythic_budget:    6 of 6 used: Icetill Explorer, The Eternity Elevator, Anticausal Vestige, Extinguisher Battleship, Secluded Starforge, Loading Zone. Sideboard adds none. Budget is exactly at cap.
basics:                16 Forest, format-supplied and exempt from copy limits.
colour:                Every nonland card usable in core_colors ['G'] via effective_cost.best_mode; splash_colors is empty.
1_counts:              PASS (mainboard 40, sideboard 10)
2_exact_name_membership: PASS
3_copy_limits:         PASS
4_colour_usability_best_mode: PASS
5_splash_cap:          PASS (no splashed cards)
6_rare_mythic_budget:  PASS (6/6, exactly at cap)
```