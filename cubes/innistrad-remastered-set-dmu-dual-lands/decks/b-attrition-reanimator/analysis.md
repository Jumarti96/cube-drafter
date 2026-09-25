---
deck_name: "b-attrition-reanimator"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-08-31T17:23:04Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (21 spells + 19 lands = 40)

### LANDS (19)

```
  x19  Swamp
```

### CREATURES (12)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Olivia's Dragoon                             x2    B     Enabler — free unlimited disca C
  3  Falkenrath Torturer                          x2    B     Engine — FREE unlimited sacrif C
  3  Morbid Opportunist                           x2    B     Engine — draws a card whenever U
  4  Haunted Dead                                 x2    B     Engine — graveyard-resident ou U
  8  Abundant Maw                                 x2    C     Payoff — large body AND discar C
  8  Griselbrand                                  x1    B     Payoff — primary reanimation t M
 13  Emrakul, the Promised End                    x1    C     Payoff — secondary reanimation M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Tragic Slip                                  x2    B     Interaction — one-mana morbid  C
  2  Collective Brutality                         x1    B     Interaction — escalate-discard R
  2  Infernal Grasp                               x2    B     Interaction — unconditional re U
  5  Edgar's Awakening                            x2    B     Payoff — reanimation spell     U
```

### OTHER SPELLS (2)

```
CMC  Card                                         Qty   Color Role                           Rar
  3  Soul Separator                               x2    C     Payoff — second reanimation ax U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Eaten Alive                                  x2    B     Hate — exile removal that also answers planesw C
Killing Wave                                 x1    B     Hate — second sweeper, scalable: vs go-wide bo U
Murderous Compulsion                         x1    B     Flex — cheap madness-castable removal: vs crea C
The Meathook Massacre                        x1    B     Hate — scalable sweeper vs go-wide: vs token d M
Bloodline Keeper // Lord of Lineage          x1    B     Flex — graveyard-independent win condition: vs M
Gisa's Bidding                               x2    B     Flex — two 2/2 blockers, madness {2}{B}: vs ag C
Sever the Bloodline                          x2    B     Hate — exile answers recursion: vs disturb / u U
```

## ANALYSIS

### DECK IDENTITY

Mono-black attrition control that reanimates. Nineteen Swamps means zero tapped lands, zero colour screw and not one rare spent on fixing - that is what this build path buys, and the price is paid in speed: it expects to win on turn 10, two full turns later than the black-red version, and mono-black has no access to haste at all because every haste granter in this cube is red. Five removal spells trade one-for-one while Olivia's Dragoon, Falkenrath Torturer and Haunted Dead's own graveyard ability bin Griselbrand, Emrakul or an Abundant Maw; Edgar's Awakening or Soul Separator converts that into a threat from turn five. Abundant Maw is the card that makes the plan work at both ends - a large body to reanimate, perfect fodder when drawn, and castable for {2}{B} by emerging off a sacrificed Haunted Dead, which puts the Haunted Dead exactly where its ability lives.

### DECK IDENTITY

Mono-black attrition control that reanimates. Nineteen Swamps means zero tapped lands, zero colour screw and not one rare spent on fixing - that is what this build path buys, and the price is paid in speed: it expects to win on turn 10, two full turns later than the black-red version, and mono-black has no access to haste at all because every haste granter in this cube is red. Five removal spells trade one-for-one while Olivia's Dragoon, Falkenrath Torturer and Haunted Dead's own graveyard ability bin Griselbrand, Emrakul or an Abundant Maw; Edgar's Awakening or Soul Separator converts that into a threat from turn five. Abundant Maw is the card that makes the plan work at both ends - a large body to reanimate, perfect fodder when drawn, and castable for {2}{B} by emerging off a sacrificed Haunted Dead, which puts the Haunted Dead exactly where its ability lives.

### WHAT THE MONO-COLOUR MANA BASE COSTS

This is the control deck of the four, and the interesting thing about it is the trade it makes explicit. Nineteen Swamps buys a **0.0pp colour gap** — the only perfectly balanced mana base in the run — zero tapped lands, and zero rares spent on fixing. What it pays:

| | Deck A (black-red) | This deck (mono-black) |
|---|---|---|
| Reanimation effects available | 5 | **4** |
| Haste available | Lightning Mauler | **none in the colour** |
| Thesis turn | 8 | **10** |
| Colour gap | −4.3pp / −6.8pp | **0.0pp** |
| Lands | 18 | 19 |

The reanimation number is the one that matters. The cube's complete inventory of effects that put a creature onto the battlefield from a graveyard is Edgar's Awakening (uncommon, 2 copies) and Soul Separator (uncommon, 2 copies). Through the Breach is the only third, and it is **red**, so no rare budget can buy it here. Four copies instead of five is why this deck's thesis turn is 10 and Deck A's is 8.

And there is no haste anywhere in black. Every haste granter in this cube — Lightning Mauler, Mass Hysteria, Through the Breach, Zealous Conscripts, Arlinn Kord — is red. A reanimated Griselbrand always waits a full turn cycle before it attacks. That is stated as an *accepted* failure mode rather than mitigated, because the only mitigation is to stop being mono-black.

### THE NUMBER THE ASSEMBLY GATE DOESN'T SHOW

The Phase 6b check reports three separate probabilities — outlet 0.83, reanimation effect 0.76, target 0.80 — and passes all three. But the deck needs **all three at once**, and no product is taken anywhere in the pipeline. Simulated on the actual 40-card list (200,000 trials, an outlet counted as Olivia's Dragoon or Collective Brutality in hand *or* Haunted Dead plus Falkenrath Torturer to bin it, and a large body counted as Griselbrand, Emrakul or Abundant Maw only):

| Cards seen | Turn | Joint P(outlet **and** effect **and** large body) |
|---|---|---|
| 11 | 5 | 0.366 |
| 13 | 7 | 0.502 |
| 17 | **10 (thesis turn)** | **0.736** |

0.736 is below the 0.75 the marginals clear, and it is stated rather than hidden. Adding Abundant Maw ×2 moved it 18 points from 0.556; it cannot go higher, because four reanimation copies is the mono-black ceiling.

### ABUNDANT MAW IS THE CARD THAT MAKES THIS WORK

It is a common, so two copies, and it is doing four jobs at once:

- **A large body to reanimate** — a 6/4 for a 5-mana Edgar's Awakening.
- **Perfect discard fodder** — at mana value 8 it is exactly what you want to find with Olivia's Dragoon.
- **A castable threat** — `Emerge {6}{B}` reduced by the sacrificed creature's mana value. Sacrifice a **Haunted Dead** (mana value 4) and it costs **{2}{B}** for a 6/4 that drains 3.
- **A way to put Haunted Dead in the graveyard** — which is the only zone Haunted Dead's `{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield tapped` works in.

That last point is the one that took a grill to find. Haunted Dead is not an outlet you can deploy: from hand it is a four-mana 2/2 with no discard ability at all. It becomes an engine only once something has put it in the yard, which is why **Falkenrath Torturer** — free, unlimited, no per-turn cap — was added at Phase 5B and why Abundant Maw's emerge is a second route to the same place.

### WHAT THIS DECK IS NOT

The real fizzle mode is not a countered reanimation spell. It is **losing Olivia's Dragoon**. Hand-usable discard outlets are 3 of 21 cards, and the Dragoon is a `{1}{B}` 2/2 — the softest removal target in the format. Griselbrand at `{4}{B}{B}{B}{B}` and Emrakul at `{13}` are stone-dead in hand without an outlet. Three things answer that: the Falkenrath Torturer + Haunted Dead pair is removal-resistant by construction (killing Haunted Dead puts it where its ability lives), Abundant Maw is castable via emerge with no outlet at all, and Bloodline Keeper is boarded as a win condition needing neither outlet nor graveyard.

### CARDS CONSIDERED BUT NOT INCLUDED - a swap guide

The generated section below covers the Phase 5A cuts. These are the closer calls from Phase 5B and Phase 9.

**Rares and mythics that lost to the 5-card cap** (budget spent on Collective Brutality, Griselbrand, Emrakul, The Meathook Massacre, Bloodline Keeper):

| Card | What it would do here |
|---|---|
| Gravecrawler | Recasts from the graveyard while you control a Zombie; the deck has 2 Zombie cards and Soul Separator makes Zombie tokens. Renewable fodder for Falkenrath Torturer at zero cost. |
| Skirsdag High Priest | 5/5 flying Demons from a wide board — but it needs two other untapped creatures against a realistic board of 2. |
| Invasion of Innistrad | An ETB `-13/-13` is premium removal; it enters as a Siege that must be attacked down first, which a 2-creature board does poorly. |
| Heartless Summoning | Cuts creature costs by {2}, but the plan is to *reanimate*, and reanimation is not casting — the discount misses the payoff while the −1/−1 hits every body. |
| Tree of Perdition + Triskaidekaphobia | A real two-card kill (set them to 13, then "each player with exactly 13 life loses"), but Tree is a mythic and a 1+2 combo in 40 cards assembles rarely. |

**Uncommons and commons a tier below the includes** — straight swaps, no cap cost:

| Card | Trade-off |
|---|---|
| Sanitarium Skeleton | `{2}{B}: Return this card from your graveyard to your hand` — renewable fodder that touches most of the deck. The strongest single omission; add it if you find yourself outlet-rich and body-poor. |
| Village Rites | Sacrifice a creature, draw two. Cut when the curve rose; it was the cheapest way to turn a dying body into cards. |
| Morkrut Banshee | A 4/4 whose morbid `-4/-4` is an **enters** trigger, so reanimation delivers it. Cut deliberately at Phase 9 — counting a hard-castable 4/4 as a "reanimation target" was what hid the true joint assembly number. |
| Ghoulish Procession | Makes a 2/2 whenever a nontoken creature dies. Note the token has **decayed**: it can't block and dies when it attacks. Right for the aggro aristocrats build, wrong for a control deck that needs blockers. |
| Crawl from the Cellar | Returns a creature from the yard to **hand** with flashback — four rebuys across two copies. Weak here because returning Griselbrand to hand only sets up another discard. |
| Asylum Visitor | A 3/1 with madness {1}{B} and a hellbent draw. Cut on curve; the two-mana slot is crowded. |
| Gluttonous Guest | A Blood token is a hand-usable outlet — the deck's scarcest resource. Cut because sacrificing a Blood token is **not** a creature dying, so it never turns morbid on. |
| Butcher Ghoul | Undying gives one card two death triggers; strong in the aristocrats build, redundant here. |
| Demonic Taskmaster | A 4/3 flier for three whose forced upkeep sacrifice is a free death trigger. Excellent — but in a 2-creature control board it would eat a reanimated fatty. It is maindecked in the aristocrats build instead. |

**Sideboard cards that nearly made it:** Deadly Allure, a third Sever the Bloodline (only 2 are legal), and Midnight Scavengers, which returns a creature of mana value 3 or less — it can rebuy the outlets, but never a finisher.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (21 nonland):  1:2  2:5  3:6  4:2  5:2  8:3  13:1
Assembly (thesis turn 10, 17 cards seen):  [PASS]
  PASS  discard_outlet: 5 copies (effective 4: Haunted Dead@0.5, Haunted Dead@0.5) → p=0.83 (need ≥ 0.75)
  PASS  reanimation_effect: 4 copies (effective 3.2: Soul Separator@0.6, Soul Separator@0.6) → p=0.76 (need ≥ 0.75)
  PASS  reanimation_target: 4 copies (effective 3.6: Abundant Maw@0.8, Abundant Maw@0.8) → p=0.80 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 37%  T2 87%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Every maindeck answer is single-target. The deck's two sweepers, The Meathook Massacre and Killing Wave, are boarded rather than maindecked because both are symmetric and this deck's own board is the resource its Morbid Opportunist x2 and Tragic Slip x2 feed on; a maindeck sweeper would fight its own engine in most matchups. CORRECTED - the previous wording cited Village Rites, which was cut in the Phase 9 repair.
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  CONCEDED  noncreature_permanents: Mono-black in this pool answers neither artifacts nor enchantments - the dossier's artifact-removal probe and enchantment-removal probe both return zero mono-black matches, and an oracle-text sweep of the black slice confirms it. The only answers in the cube are red (Abrade) or white (Angelic Purge, Cathar Commando, Bound by Moonsilver), and taking any of them means abandoning the mono-black identity that is this build path's entire premise.
  CONCEDED  stack: The cube has no counterspell density worth maindecking against, and black has no answer to the stack at any rate.
  CONCEDED  graveyard: The deck has no maindeck graveyard interaction, and the cube supplies almost nothing to hate with: the dossier's graveyard-hate probe returns 0 matches and an oracle sweep finds only incidental effects, none of them black. Sever the Bloodline's exile answers the recursive CREATURES that a graveyard deck actually presents, which is the reachable half of the class; the second copy is boarded.
```

- curve PASS and goldfish PASS - no WARN-tier flags were raised.
- thesis_turn was raised from 9 to 10 during Phase 6b rather than papering over an assembly failure. Mono-black has exactly four reanimation copies and no fifth exists in the colour, so the honest response was to admit the deck is two turns slower than the black-red version.
- The assembly check's three marginals all PASS, but the JOINT probability they conceal is 0.736 at the thesis turn, below the 0.75 threshold the marginals clear. This is disclosed in assembly_joint_note rather than hidden behind the passing marginals, and it cannot be repaired within mono-black.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Every card named is in the list. Surplus lands convert through Haunted Dead's '{1}{B}, Discard two cards' recursion, which is repeatable every turn and costs mana each time; Soul Separator's '{5}, {T}, Sacrifice this artifact'; and Emrakul's 'costs {1} less to cast for each card type among cards in your graveyard', which with creature, sorcery, instant and artifact in the yard hard-casts for {9} - reachable in a deck that expects turn 10. Morbid Opportunist turns the trades a flooded board still makes into cards. |
| `screw` | mitigation | Every land is a Swamp, so a two-land hand is never colour-screwed - the reason this build path exists. CORRECTED count per Challenger finding 7 (the previous entry said '9 of 22 cards cost 2 or less' and reached nine by counting a three-drop): the repaired list has 7 of 21 nonland cards at mana value 2 or less - Tragic Slip x2, Olivia's Dragoon x2, Infernal Grasp x2, Collective Brutality x1. The mana audit reports a 0.0pp colour gap, and 19 lands is the highest land count of the four decks, which is itself the screw mitigation. |
| `decapitation` | mitigation | No single card is load-bearing. The reanimation half is 4 copies across two mechanisms (Edgar's Awakening from the graveyard, Soul Separator via exile into two tokens) and the target half is 4. Haunted Dead is answer-resistant by construction: killing it puts it in the graveyard, which is where its ability works. Bloodline Keeper is boarded as a win condition that needs no graveyard at all. |
| `gas-out` | mitigation | CORRECTED - the previous version named Village Rites, which the same repair had cut. Every card named here is in the final list. The refuel is Morbid Opportunist x2, 'Whenever one or more other creatures die, draw a card', and it is load-bearing rather than incidental because this deck causes a death almost every turn by its own routine actions: 5 removal spells (Tragic Slip x2, Infernal Grasp x2, Collective Brutality) plus Falkenrath Torturer x2, whose 'Sacrifice a creature' costs no mana and has no per-turn cap. Behind it, Griselbrand's 'Pay 7 life: Draw seven cards' refuels once reanimated. Stated so it is not double-counted: Haunted Dead is a mana SINK, not refuel - each activation spends two cards to return one body. |
| `raced` | accepted | This deck loses races and cannot be repaired without abandoning its premise. Every haste granter in the cube is red - Lightning Mauler, Mass Hysteria, Through the Breach, Zealous Conscripts, Arlinn Kord - so a reanimated creature always waits a full turn cycle before attacking, and the deck's own kill is turn 10. Mitigating means adding red, which is precisely the black-red build delivered separately as Deck A. The cost of the mitigation is the mono-colour mana base that is this path's entire reason to exist, so it is accepted. CORRECTED - the previous version offered 'two Morkrut Banshee enters-triggers' as part of the partial answer, and Morkrut Banshee was cut in the same repair. The partial answer that actually exists: 5 maindeck removal spells (Tragic Slip x2, Infernal Grasp x2, Collective Brutality), 19 lands so the deck reliably hits its drops, and Gisa's Bidding x2 in the board for four 2/2 blockers. |
| `disruption-fizzle` | mitigation | REWRITTEN per Challenger finding 11, which correctly identified that the previous entry answered the wrong mode. This deck's real fizzle is not a countered reanimation spell - it is losing the discard outlet, because Griselbrand at {4}{B}{B}{B}{B} and Emrakul at {13} are dead in hand without one. Hand-usable outlets are Olivia's Dragoon x2 and Collective Brutality x1: 3 of 21, and the Dragoon is a {1}{B} 2/2, the softest possible removal target. Three things answer it. Falkenrath Torturer x2 plus Haunted Dead x2 form a second, removal-resistant outlet - killing Haunted Dead puts it in the graveyard, which is the only zone its ability works in. Abundant Maw x2 is castable via Emerge {6}{B} with no outlet at all. And Bloodline Keeper is boarded as a win condition that needs neither an outlet nor a graveyard. If the reanimation spell itself is answered, the second Edgar's Awakening and two Soul Separators are three more attempts. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Gryff, Elder Deep-Fiend, It of the Horrid Swarm | Colorless or off-colour Eldrazi whose only text is a CAST trigger - reanimation puts a creature onto the battlefield without casting, so the payoff never fires and a vanilla body is all that arrives. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  19 / 19 recommended  [PASS]
Avg CMC:     4.05   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +2.07 adj [MV 4.05 vs 2.5, 0 accel, scaled N/60]  ->  19 lands  (P(2-4 in 7) = 0.774)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] commons_uncommons_max_2: PASS - highest count is 2, and every 2-of is a common or uncommon.
[PASS] rares_mythics_max_1: PASS - every rare and mythic appears once.
[PASS] rare_mythic_total_max_5: PASS - exactly 5: Collective Brutality (R), Griselbrand (M), Emrakul, the Promised End (M) in the mainboard; The Meathook Massacre (M) and Bloodline Keeper (M) in the sideboard.
[INFO] basics_unlimited: 19 Swamp, format-supplied and exempt from copy limits.
[PASS] all_cards_from_cube: PASS - Phase 5C check 2, exact-name membership against the working pool cache.
```