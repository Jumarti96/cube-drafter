---
deck_name: "ur-v2-docent-spell-count-swarm"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-08-31T03:36:37Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x7   Island
  x7   Mountain
  x2   Molten Tributary                             Island Mountain, taps for RU, enters tapped
  x1   Stormcarved Coast                            taps for RU, conditionally tapped
```

### CREATURES (6)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Delver of Secrets // Insectile Aberration    x2    U     threat                         C
  2  Festival Crasher                             x2    R     payoff                         C
  4  Aberrant Researcher // Perfected Form        x1    U     engine                         U
  5  Docent of Perfection // Final Iteration      x1    U     payoff                         R
```

### INSTANTS & SORCERIES (17)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Faithless Looting                            x2    R     engine                         C
  1  Lightning Axe                                x2    R     interaction                    U
  2  Abrade                                       x2    R     interaction                    U
  2  Galvanic Iteration                           x1    UR    engine                         R
  2  Think Twice                                  x1    U     engine                         C
  3  Fiery Temper                                 x2    R     interaction                    U
  3  Forbidden Alchemy                            x2    U     engine                         C
  4  Memory Deluge                                x1    U     engine                         R
  5  Seize the Storm                              x2    R     payoff                         C
  6  Rise from the Tides                          x2    U     payoff                         U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Syncopate                                    x2    U     interaction: vs single-haymaker / graveyard de C
Imprisoned in the Moon                       x2    U     interaction: vs planeswalkers, indestructible  C
Nebelgast Herald                             x2    U     interaction: vs ground aggro (flash blocker)   U
Savage Alliance                              x2    R     interaction: vs token swarms / x-1 boards      U
Mist Raven                                   x2    U     threat: vs one large unblockable-by-you threat U
```

## ANALYSIS

### DECK IDENTITY

A UR midrange deck that spends the first five turns turning cheap spells into graveyard cards and then converts one card into a whole board. Rise from the Tides makes a 2/2 Zombie for every instant and sorcery card in the graveyard; Seize the Storm makes a single trampler whose power and toughness equal that same graveyard count PLUS the flashback cards already exiled, so the flashback engine's exile cost feeds one payoff while it drains the other. Forbidden Alchemy buries three cards per cast and, uniquely, can never exile itself because its own flashback is uncastable here. The denominator all of this reads is 17 instants and sorceries in 40 cards (42.5%). Delver of Secrets, Festival Crasher and Aberrant Researcher pay the early turns' rent off that same count, and Docent of Perfection is the ceiling rather than the plan.

### THE COUNT THIS DECK IS BUILT ON

17 of the 40 mainboard cards are instants or sorceries (42.5%). Every payoff reads that number, but they read it in two different places, and the difference is the whole deck:

| Payoff | What it counts | Grows or shrinks when you flash back? |
|---|---|---|
| Rise from the Tides | instant and sorcery cards **in your graveyard** | **Shrinks** - flashback exiles the card |
| Seize the Storm | the same graveyard count **plus cards with flashback you own in exile** | **Flat** - the card leaves one pile and joins the other |
| Docent of Perfection | instant/sorcery **casts**, and Wizards you control | Grows |
| Delver, Festival Crasher, Aberrant Researcher | instant/sorcery density | Unaffected |

That is why Forbidden Alchemy is the single best engine card here and not merely a good one: its flashback is `{6}{B}`, uncastable in these colours, so it is the one dig spell that can **never** exile itself out of Rise from the Tides' count. It bins three cards per cast and stays.

### THE DOCENT PROBLEM, STATED HONESTLY

Docent of Perfection's flip reads "if you control three or more Wizards". Docent's own type line is `Creature — Insect Horror` — it is **not** a Wizard and Final Iteration's "+2/+1 and flying" anthem does not pump it. The only printed Wizards in the deck are Delver of Secrets ×2 on their **front** face, and this deck flips its Delvers on purpose (81% by the third upkeep), after which the printed text is just "Flying". So in most games Docent flips off three of its own tokens, i.e. three spell casts after a 5-mana turn. It is a singleton rare present in ~32% of games by turn 8, weighted 0.5 in the assembly check, and it is the ceiling — not the plan.

### WHY THE THESIS TURN IS 8 AND NOT 7

Rise from the Tides costs 6 and creates its tokens **tapped**. To attack on turn 7 it must resolve on turn 6, which needs six lands by turn 6 — roughly 36% on a 17-land deck. The median land schedule puts that on turn 7 and lethal on turn 9. The turn stayed at 8 because the *other* payoff meets it: Seize the Storm is a 5-mana sorcery whose trampler does not need to connect through blockers.

### CARDS CONSIDERED BUT EXCLUDED — THE ITERATION GUIDE

**Rares and mythics.** Four of five slots are spent (Docent of Perfection, Galvanic Iteration, Memory Deluge, Stormcarved Coast). The fifth is deliberately unspent, and here is what it cost:

| Card | Why it lost the slot |
|---|---|
| Hanweir Garrison | **The honest cost.** "Whenever this creature attacks, create two 1/1 red Human creature tokens that are tapped and attacking" is two bodies per attack from turn 4 with no dependence on graveyard size or a six-land turn — the three things this deck's risk statement names. Not taken because the tokens are Human but not Wizard, and because it demands the deck attack profitably on turns 4–5, the exact window this build spends casting Forbidden Alchemy. |
| Temporal Mastery | Anti-synergistic with **both** counting payoffs at once: "Exile Temporal Mastery" means it never reaches the graveyard, and its alternative cost is Miracle, not flashback, so Seize the Storm's exile clause does not see it either. |
| Thing in the Ice | "Return all non-Horror creatures to their owners' hands" would return this deck's Wizard, Zombie and Elemental **tokens**, which cease to exist. Flipping it destroys the board it was cast to protect. |
| Overcharged Amalgam | The exploit cost is fed, but the counter is only live *after* the board exists, and the turn that needs protection is the one before. |
| Collective Defiance | 4 mana with escalate, on the turns this deck is casting Forbidden Alchemy or deploying a payoff. |
| Jace, Unraveler of Secrets | 5 mana competing directly with Docent and Rise from the Tides for the same deployment turns. |

**Uncommons and commons a tier below the includes:**

| Card | Why |
|---|---|
| Reckless Scholar | The closest common absence. A free repeatable outlet — every activation is +1 graveyard card, i.e. +1 Zombie and +1 Seize power — and it is a `Human Wizard`, the scarcest resource for Docent. Cut only because it is a 3-mana 1/1 that does nothing the turn it lands, on a turn already spoken for by Forbidden Alchemy. |
| Tower Geist | `{3}{U}`, mana value 4 — the same slot as Aberrant Researcher, which wins it because its mill is per-upkeep rather than once on arrival, and its flipped face is a 5/4 flier rather than a 2/2. |
| Cackling Counterpart | Cut at Phase 9. Its copyable targets were 5 of 23 nonland cards and none of them reliably on board on turn 3–4. |
| Alchemist's Greeting | "Madness {1}{R}" for 4 damage off the same four discard outlets that justified Fiery Temper at 2 copies — but the hard cast is `{4}{R}`, a 5-drop in a deck whose 5- and 6-slots are the payoffs themselves. |
| Bladestitched Skaab | The splash cut that actually costs something: "Other Zombies you control get +1/+0" is +6 to +8 damage across a Rise board. Declined on the mana base, not the card. |
| Siege Zombie | Named "most painful cut" in an earlier draft, and that was wrong. Its cost is "Tap three **untapped** creatures you control", and Rise's tokens enter **tapped** — so on the single turn this deck has 6–8 bodies, it cannot be activated at all. |

**Sideboard-consideration cards not taken:** Spontaneous Mutation (X is genuinely large here, but −X/−0 leaves the blocker alive and this deck attacks into blockers), Mass Hysteria (haste does not fix tokens that enter tapped, and the grant is symmetric), Metallic Mimic (must already be out naming one of two token types).

### SIDEBOARD GUIDE

The `Role / When to board in` column above is width-limited; this is the full reasoning.

| Card | Qty | When to board in |
|---|---|---|
| Savage Alliance | x2 | In vs mirror-ish token decks and the cube's W/B swarm. Escalate 'deals 1 damage to each creature target opponent controls' answers the same x/1 boards this deck builds. Note honestly: it does NOT hit this deck's own Zombie tokens only in the sense that it targets an opponent - the mode is one-sided. |
| Syncopate | x2 | In vs single-haymaker decks. 'Counter target spell unless its controller pays {X} ... exile it' is also the deck's only way to stop a sweeper resolving on the turn the board is deployed, which is this deck's worst loss. |
| Imprisoned in the Moon | x2 | In vs planeswalkers and any permanent damage cannot answer. 'Enchanted permanent is a colorless land ... and loses all other card types and abilities.' |
| Nebelgast Herald | x2 | In vs ground aggro that pressures the deck before turn 6. 'Flash / Flying / Whenever this creature or another Spirit you control enters, tap target creature an opponent controls' - boarded as a flash blocker that also taps an attacker, NOT as a repeating tapper: Spirits across all 50 cards number 2, both of them these Heralds (Mist Raven is a Bird), so two copies yield 3 tap events in a game. |
| Mist Raven | x2 | In vs decks with one large threat this deck cannot block. 'Flying / When this enters, return target creature to its owner's hand' is a body and a tempo answer; also a Docent-flip-independent flier for the games Docent never appears. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:6  2:6  3:4  4:2  5:3  6:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.5: Docent of Perfection // Final Iteration@0.5) → p=0.93 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 15.6: Aberrant Researcher // Perfected Form@0.8, Galvanic Iteration@0.8) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 69%  T2 96%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Fiery Temper, Abrade
  OK        single_large_threat: Lightning Axe, Abrade, Rise from the Tides
  OK        noncreature_permanents: Abrade
  CONCEDED  stack: The mainboard runs no counterspell. This deck's whole plan is to tap out on turns 5 and 6 for Seize the Storm and Rise from the Tides, so mana held for a counter is mana not spent on the payoff; Syncopate x2 is in the sideboard for the matchups where a resolved opposing spell is worse than a delayed payoff.
  CONCEDED  graveyard: The cube's structural census reports 0 graveyard-hate cards, but a 0-match regex probe proves nothing (dossier census_caveat) and this claim was checked against oracle text rather than the probe. Two cards in the pool DO exile from a graveyard: Invasion of Innistrad // Deluge of the Dead ('{2}{B}: Exile target card from a graveyard') and Soul-Guide Gryff ('When this creature enters, exile up to one target card from a graveyard'). Both are black or white, both are one-card-at-a-time, and no mass graveyard exile exists in the pool. So graveyard interaction here is slow and incremental rather than absent, and this deck has no answer to it in these colours. This matters more here than in the other builds: Seize the Storm's token P/T is a characteristic-defining ability that recalculates continuously, so a resolved Deluge of the Dead grinds the Elemental down by 1 per {2}{B} activation. Rise from the Tides' 2/2 tokens are printed and immune once made, which is part of why the deck runs both payoffs.
```

- thesis_turn 8 is the good-draw line, not the median. Casting Rise from the Tides on turn 6 to attack on turn 7 needs 6 lands by turn 6, which on 17 lands is roughly 36%; the median land schedule puts the sixth land on turn 7, the attack on turn 8 and lethal on turn 9. The turn was already revised UP from 7 to 8 during the build for the tapped-token reason, and it is left at 8 because the Seize the Storm line - a 5-mana trampler on turn 5 that does not need to connect through blockers - is the one that actually meets it.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Every excess land is convertible, but the sinks and the payoff read the SAME resource and that trade-off is stated rather than hidden: Seize the Storm's Flashback {6}{R} makes a second trampler for 7 mana and Memory Deluge's Flashback {5}{U}{U} draws four across two casts - and each flashback exiles the card, costing one Rise from the Tides Zombie while adding one point of Seize the Storm power. The flashbacks are therefore a late-game sink to be spent AFTER Rise has been cast or given up on, not a routine play. Galvanic Iteration plus Forbidden Alchemy at 5 mana is the flood turn that costs nothing: six cards into the graveyard, no exile. |
| `screw` | mitigation | 6 of 23 nonland cards cost 1 and 7 more cost 2, so a two-land hand casts Delver x2, Faithless Looting x2, Lightning Axe x2, Festival Crasher x2, Abrade x2 and Think Twice x2. Faithless Looting is the dig, and its discards are not lost - a discarded Fiery Temper is cast for {R} via Madness and a discarded instant is a Zombie. Goldfish measured 86% keepable, the best of the four builds. |
| `decapitation` | mitigation | There is no single key card. The payoff count is 7 copies across three independent mechanisms - Rise from the Tides x2 (graveyard count), Seize the Storm x2 (graveyard plus exile count, and it recurs itself via flashback), Festival Crasher x2 (per-cast pump) - plus Docent, which is explicitly weighted at 0.5 so the deck is not built to need it. Removal aimed at any one of them leaves two others. |
| `gas-out` | mitigation | Think Twice x2 and Forbidden Alchemy x2 are self-replacing or net-positive, and Faithless Looting x2 filters. More importantly this deck's late-game does not need cards in hand: the graveyard IS the resource, and a hand of one Rise from the Tides with 8 spells in the yard is 16 power. Seize the Storm and Cackling Counterpart remain castable from the graveyard when the hand is empty. |
| `raced` | accepted | The payoffs cost 5 and 6 and Rise from the Tides' tokens enter TAPPED, so against the cube's turn-4-and-5 aggro decks this deck can lose before its plan comes online - the goldfish check reports only 69% of hands making a turn-1 play. Mitigating would mean maindecking Nebelgast Herald and Mist Raven and cutting two of the eight engine cards, and those engine cards are literally the size of the payoffs: cutting them shrinks the Zombie count and the Seize the Storm token, so the deck would survive longer and then win with less. They are in the sideboard, where the matchup is known. |
| `disruption-fizzle` | mitigation | The critical turn is casting a 5-or-6-mana payoff into open mana. Three properties limit the damage: Seize the Storm has 'Flashback {6}{R}', so a countered copy is still castable from the graveyard; Rise from the Tides is a 2-of, so a countered first copy is not the last; and both payoffs count a graveyard that keeps growing while the deck waits, so a delayed cast is a BIGGER cast. Against removal aimed at the resulting board, the tokens are 6-8 separate bodies rather than one, which is why the deck is built around Rise from the Tides rather than a single large threat. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Ulrich's Kindred | Its only ability costs {3}{G}, outside core_colors; what remains is a 2/2 trample body with no token, spell or tribal text this list reads. |
| Soul Separator | '{5}, {T}, Sacrifice this artifact' on top of a {3} cast is 8 mana to make two tokens, against a plan whose payoffs make tokens for 2-5 mana. |
| Hanweir, the Writhing Township | It has no mana cost - it is a meld result, castable only by melding Hanweir Garrison with Hanweir Battlements, and Battlements taps only for {C}, which this two-colour list cannot afford as a land slot. |
| Bladestitched Skaab, Ghoulish Procession, Siege Zombie | The three named black splash candidates. Declined on the mana base, not the cards: the UR pair has exactly 2 free duals in the whole cube and no UB or BR land also produces U and R, so every black source is subtracted from a base that must cast {3}{U}{U} (Docent) and {5}{U} (Rise from the Tides) on curve. Siege Zombie's 'Tap three untapped creatures you control: Each opponent loses 1 life' is a genuine token payoff and the single most painful cut here. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 0   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.23 adj [MV 2.83 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  53.6%  prod  58.8%  gap  -5.2pp  [OK]
  U  demand  46.4%  prod  58.8%  gap -12.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons capped at 2 copies: PASS - Rise from the Tides U, Seize the Storm C, Festival Crasher C, Delver of Secrets C, Faithless Looting C, Think Twice C, Forbidden Alchemy C, Lightning Axe U, Abrade U, Fiery Temper U, Molten Tributary C; sideboard Savage Alliance U, Syncopate C, Imprisoned in the Moon C, Nebelgast Herald U, Mist Raven U.
[PASS] Rares/mythics capped at 1 copy: PASS - Docent of Perfection x1, Galvanic Iteration x1, Stormcarved Coast x1.
[PASS] At most 5 rare/mythic cards across mainboard + sideboard: PASS - 3 used, 2 unspent - deliberately. Temporal Mastery (mythic) was the fourth and was cut at Phase 5B step 6 because it contributes zero to both counting payoffs; Thing in the Ice (rare) was cut because its flip would destroy this deck's own token board. Spending a rare slot on a card that fights the plan is worse than leaving it unspent.
[PASS] Basic lands format-supplied and exempt: PASS - 7 Island, 7 Mountain.
[PASS] Forbidden Alchemy prints as U/B color identity because of its {6}{B} flashback. It is played on its base cast only ({2}{U}), which effective_cost.best_mode confirms is usable in [U,R]. Here the dead flashback is an ASSET - it is the one card-flow spell that can never exile itself out of Rise from the Tides' count.: PASS - Forbidden Alchemy prints as U/B color identity because of its {6}{B} flashback. It is played on its base cast only ({2}{U}), which effective_cost.best_mode confirms is usable in [U,R]. Here the dead flashback is an ASSET - it is the one card-flow spell that can never exile itself out of Rise from the Tides' count.
```