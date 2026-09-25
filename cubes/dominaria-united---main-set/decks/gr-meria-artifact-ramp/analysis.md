---
deck_name: "gr-meria-artifact-ramp"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GR"
format: "40-card"
built_at: "2026-08-17T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  10x Forest                       
  5x Mountain                     
  2x Wooded Ridgeline                Land — dual
```

### CREATURES (13)

```
CMC  Card                          Qty   Color Role                                              Rar
  1  Shivan Devastator             x1    R    Payload/Payoff — mana sink finisher               M
  1  Walking Bulwark               x1    C    Enabler/Fodder — artifact fuel                    U
  2  Llanowar Loamspeaker          x1    G    Infrastructure — acceleration                     R
  2  Salvaged Manaworker           x2    C    Infrastructure — fixing/artifact fuel             C
  3  Automatic Librarian           x2    C    Enabler/Fodder — artifact fuel + selection        C
  3  Meria, Scholar of Antiquity   x1    GR   Engine/Outlet — acceleration anchor               R
  5  Elfhame Wurm                  x1    G    Payload/Payoff — threat                           C
  5  Linebreaker Baloth            x2    G    Payload/Payoff — threat                           U
  5  Silverback Elder              x1    G    Payload/Payoff — engine threat                    M
  7  Mossbeard Ancient             x1    G    Payload/Payoff — top-end threat                   U
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                          Qty   Color Role                                              Rar
  2  Bite Down                     x2    G    Interaction/Disruption                            C
  2  Lightning Strike              x2    R    Interaction/Disruption                            C
```

### OTHER SPELLS (6)

```
CMC  Card                          Qty   Color Role                                              Rar
  1  Inscribed Tablet              x2    C    Enabler/Fodder — artifact fuel + land finder      U
  2  Yotia Declares War            x2    R    Interaction/Disruption — artifact-count removal   U
  3  Relic of Legends              x2    C    Infrastructure — acceleration                     U
```

## SIDEBOARD (10)

```
Card                          Qty   Color Role / When to board in                           Rar
Tail Swipe                    x1    G    Flex — 1-mana removal                             U
Smash to Dust                 x2    R    Hate — artifact + anti-token sweep                C
Snarespinner                  x1    G    Flex — cheap reach blocker                        C
Broken Wings                  x2    G    Hate — artifact/enchantment/flier                 C
Llanowar Greenwidow           x1    G    Flex — 4/3 reach trample vs evasion               R
Magnigoth Sentry              x2    G    Flex — 4/4 reach vs evasion                       C
Jaya's Firenado               x1    R    Flex — 5 damage removal                           C
```

## ANALYSIS

### DECK IDENTITY

A G/R midrange deck that treats cheap nontoken artifacts as a mana battery. Meria, Scholar of Antiquity taps them for {G} as HER activated ability, so an artifact cast this turn is usable the same turn, and two at a time convert into a card off the top. The deck is deliberately built so Meria is an accelerant rather than a prerequisite: she is a singleton seen by turn 6 in roughly 30% of games, and the floor plan is 17 lands plus Relic of Legends, Salvaged Manaworker and Llanowar Loamspeaker curving into Linebreaker Baloth, Elfhame Wurm and Mossbeard Ancient. Yotia Declares War is the second, Meria-independent artifact payoff, converting a wide artifact board directly into removal. Games are won by combat damage from bodies deployed two to three turns ahead of curve.


### WHY MERIA IS FASTER THAN SHE LOOKS

The load-bearing rules detail is that Meria's mana ability taps the *artifact* as a cost, but the ability itself belongs to Meria. Summoning sickness gates a permanent's *own* {T} abilities; it does not gate being tapped as a cost for someone else's ability. So an Automatic Librarian cast this turn is immediately worth {G}. That is why the artifact count, not the artifact quality, is what the build optimises for — and it is the reason a turn-4 board of four lands plus three artifacts casts a 7-mana Mossbeard Ancient.

| Turn | Lands | Untapped artifacts | Total mana with Meria | What it casts |
|---|---|---|---|---|
| 3 | 3 | 0 (Meria just cast) | 3 | Meria herself |
| 4 | 4 | 2 | 6 | Linebreaker Baloth + a 1-drop |
| 5 | 5 | 3 | 8 | Mossbeard Ancient, or Silverback Elder + Yotia |
| 6 | 6 | 4 | 10 | Shivan Devastator as a 9/9 flier with haste |

### THE TWO PAYOFFS ARE DELIBERATELY DIFFERENT

Meria is a singleton, and the deck is honest about that: she is seen by turn 6 in about 30% of games. Yotia Declares War is the redundancy, and it pays off the same resource by a different mechanism — it does not need Meria on the battlefield, it does not care that the artifacts are tapped afterwards, and its chapter II scales linearly with the exact count the deck is already maximising. On a board of four artifacts it is a 4-damage removal spell for two mana. It is also the only source of a flying blocker in the 40.

### DOMAIN IS A TRAP IN TWO COLOURS

Dominaria United is a Domain set, and green and red are full of Domain payoffs. This deck controls **2 of 5 basic land types** — Wooded Ridgeline reads 'Land — Mountain Forest' and adds nothing new — so Nishoba Brawler is a 2/3, Territorial Maro is a 4/4 for five, Meria's Outrider deals 2, and Jodah's Codex draws a card for {3} plus a tap. All four are cut for that reason, not on feel.

### PLAY PATTERN NOTES

- Lead Inscribed Tablet on turn 1 only when the hand needs a land; otherwise hold it, because as an untapped artifact it is worth more to Meria than the sacrifice is worth to you.
- Do not crack Inscribed Tablet the turn you plan to activate Meria's card-draw mode — that mode costs *two* untapped artifacts.
- Against a removal-heavy opponent, deploy artifacts before Meria, not after. She is the card they want to kill, and the artifacts are still mana rocks the moment she resolves.
- Silverback Elder's land mode is usually correct over the 4 life; the artifact-destruction mode is what turns the cube's own artifact decks into a bad matchup for them.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:9  3:5  5:4  7:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  acceleration: 6 copies (effective 4.8: Salvaged Manaworker@0.5, Salvaged Manaworker@0.5, Llanowar Loamspeaker@0.8) → p=0.81 (need ≥ 0.75)
  PASS  artifact_fuel: 9 copies → p=0.96 (need ≥ 0.75)
  PASS  payoff: 6 copies → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 60%  T2 96%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Walking Bulwark, Salvaged Manaworker, Salvaged Manaworker, Mossbeard Ancient, Automatic Librarian, Automatic Librarian
  OK        single_large_threat: Bite Down, Bite Down, Lightning Strike, Lightning Strike, Yotia Declares War, Yotia Declares War
  OK        noncreature_permanents: Silverback Elder
  CONCEDED  stack: Green and red hold no counterspell anywhere in this cube's G/R pool; the deck answers resolved permanents with point removal after the fact rather than on the stack.
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards cube-wide, and no G or R card in the working pool exiles an opponent's graveyard — the class is unanswerable in these colours, not merely unaddressed.
```

None — the structural gate returned PASS on all four checks (curve, assembly, goldfish, coverage), so there is no WARN-tier deviation to justify.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Shivan Devastator ({X}{R}, 'This creature enters with X +1/+1 counters on it') is an uncapped mana sink; Llanowar Loamspeaker's '{T}: Target land you control becomes a 3/3 Elemental creature with haste until end of turn' turns a surplus land into an attacker; Meria's 'Tap two untapped nontoken artifacts you control: Exile the top card of your library. You may play it this turn' converts an idle turn into a card; Inscribed Tablet x2 cashes out with 'If you didn't put a card into your hand this way, draw a card.' |
| screw | mitigation | 17 lands. Inscribed Tablet x2 ('Put a land card from among them into your hand') is 2 of 23 nonland cards, and Llanowar Loamspeaker at {1}{G} is castable off the two lands it is meant to rescue, unlike the {3} rocks; Silverback Elder's 'put a land card from among them onto the battlefield tapped' mode compounds later. The goldfish sim reports 87% keepable and 88% reaching three lands by turn 3. |
| decapitation | mitigation | Meria is a singleton and will be answered on sight, so she is built as an accelerant rather than a prerequisite: with 17 lands, Relic of Legends x2 and Llanowar Loamspeaker the deck still curves Linebreaker Baloth ('can't be blocked by creatures with power 2 or less') on 5 and Mossbeard Ancient on 7 without her, and Yotia Declares War x2 keeps the artifact count paying off with no Meria on the battlefield. She is drawn by turn 6 in roughly 30% of games; the other 70% are ordinary midrange games, not lost ones. |
| gas-out | mitigation | Meria's exile-the-top ability is repeatable card advantage; Automatic Librarian x2 ('When this creature enters, scry 2') and Inscribed Tablet x2 smooth draws; Silverback Elder's 'Look at the top five cards of your library. You may put a land card from among them onto the battlefield tapped' fires on every one of the 13 creature spells. |
| raced | mitigation | Yotia Declares War x2 chapter I ('Create a 0/2 colorless Thopter artifact creature token with flying') gives the deck two flying blockers it otherwise has none of, and chapter II ('Tap any number of untapped artifacts you control. When you do, this Saga deals that much damage to target creature or planeswalker') kills an evasive threat off a board of 3-5 artifacts. With Lightning Strike x2 and Bite Down x2 that is 6 of 23 nonland cards that interact with the cube's densest threat class (evasion, 51 cards / 20.6%) before it connects; Magnigoth Sentry x2, Snarespinner and Llanowar Greenwidow wait in the sideboard for the matchups where that is not enough. |
| disruption-fizzle | mitigation | There is no single critical turn to interact with: every artifact independently produces mana or blocks, so the plan is incremental rather than a chain. Of the 9 nontoken artifacts, Relic of Legends x2 produce mana and Walking Bulwark, Automatic Librarian x2 and Salvaged Manaworker x2 block, so 8 of 9 do something with no other piece present. One removal spell on Meria costs the acceleration but not the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Golden Argosy (rare) | CUT IN PHASE 9. 'Whenever Golden Argosy attacks, exile each creature that crewed it this turn. Return them to the battlefield tapped.' Only 3 of 14 creature copies had an ETB worth re-buying (Automatic Librarian x2, Mossbeard Ancient); on the other 11 the trigger strictly removes a blocker and returns it tapped, so it cannot be tapped for Meria either. It also spent one of the 5 rare/mythic slots. FIRST CARD TO RE-ADD if you want more artifact bodies and are willing to spend a rare. |
| Karn, Living Legacy (mythic) | '+1: Create a tapped Powerstone token.' Powerstones are TOKENS, and Meria's ability specifies 'nontoken artifact' — so Karn's own artifacts do not fuel the deck's engine. Its mana is also restricted ('can't be spent to cast a nonartifact spell'). |
| Defiler of Vigor (rare) | Both of its clauses key on green permanent spells; only 7 of the 23 nonland cards qualify, because the nine artifacts are colourless. A 6/6 trample for five is a fine body, but not a rare slot in THIS shell. |
| Squee, Dubious Monarch (rare) | Recursive attrition threat, but its Goblin tokens are neither nontoken nor artifacts, so it adds nothing to either artifact payoff. The last sideboard rare slot went to Llanowar Greenwidow instead, against the cube's 51-card evasion class. |
| Jaya, Fiery Negotiator (mythic) | A strong standalone planeswalker, but {2}{R}{R} demands double red in a deck whose pip math is 70% green, and it costs one of the 5 rare/mythic slots that the engine and finishers already claim. SIDEBOARD CONSIDERATION if you drop a green finisher and rebalance red sources. |
| Ragefire Hellkite (rare) | 5/3 flier for {4}{R}{R} — double red at six mana in a green-primary manabase, and its 'sacrifice another creature' clause fights the plan of keeping artifacts on the battlefield. |
| Quirion Beastcaller (rare) | 'Whenever you cast a creature spell, put a +1/+1 counter on this creature' would be live on 13 of 23 cards, which is a real count — but it is a rare slot spent on a 2-drop when the cap is 5 and the engine plus finishers already claim them. STRONGEST RARE ON THE BUBBLE. |
| Deathbloom Gardener | Was in the list as the acceleration piece that cleared the assembly gate, then replaced by Llanowar Loamspeaker: identical '{T}: Add one mana of any color' at {1}{G} instead of {2}{G}, with +2 toughness. Deathtouch is the only thing lost. RE-ADD if you want the rare slot back. |
| Timeless Lotus (mythic) | 'enters tapped' and '{T}: Add {W}{U}{B}{R}{G}' — three of the five colours it makes are dead here, and 5 mana for a rock arrives after Meria has already solved mana. |
| Karn's Sylex (mythic) | '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less' is symmetric, and this deck's board is nine nontoken artifacts at MV 1-3 — it destroys its own engine first. |
| Weatherlight Compleated (mythic) | A 2-mana artifact that becomes a 5/5 flier, but only at four phyresis counters, and the trigger is 'Whenever a creature you control DIES.' This deck's artifacts are built to survive and be tapped, not to trade, so the counters accumulate slowly. |
| Meteorite | 'When this artifact enters, it deals 2 damage to any target' plus a mana rock is genuinely on-theme, but at MV 5 it is outside this deck's acceleration window — it arrives after the mana problem is already solved. STRONGEST UNCOMMON/COMMON ON THE BUBBLE for a slower build. |
| Jodah's Codex | 'Domain — {5}, {T}: Draw a card. This ability costs {1} less to activate for each basic land type among lands you control.' This deck controls 2 of 5 basic land types, so the activation costs {3} plus a tap. |
| Shield-Wall Sentinel | 'search your library for a creature card with defender' has a denominator of 1 defender in the final list (Walking Bulwark), so the ETB tutors a 0/3 or another Sentinel. 4 mana for a 1/3. |
| Vanquisher's Axe | 'Equipped creature gets +2/+0. Equip {2}' — 3 total mana for +2/+0. The 2nd Inscribed Tablet fills the same 1-MV artifact-fuel slot and also answers the mana-screw failure mode. |
| Hero's Heirloom | 2-mana artifact fuel whose legendary rider ('trample and haste') is live on only 1 of 23 nonland cards (Meria). Fuel-only at that denominator. |
| Floriferous Vinewall | 'When this creature enters, look at the top six cards of your library. You may reveal a land card from among them and put it into your hand' — a real answer to mana screw, but the 2nd Inscribed Tablet plus a 2-mana Llanowar Loamspeaker do the same job without spending two slots on a 0/2 that never attacks. |
| Sprouting Goblin | '{R}, {T}, Sacrifice a land: Draw a card' works against a deck whose Meria mana ceiling scales with land drops; the kicker only fetches a basic to hand. |
| Nishoba Brawler / Territorial Maro / Meria's Outrider / Gaea's Might / Briar Hydra | All Domain cards. This deck controls 2 of 5 basic land types, so Nishoba Brawler is a 2/3, Territorial Maro a 4/4 for five, and Meria's Outrider deals 2. Domain does not pay in two colours. |
| Karplusan Forest (rare) | '{T}: Add {R} or {G}. This land deals 1 damage to you' is the only untapped RG dual, but it is a rare and would consume one of the 5 capped slots that spells need more. RE-ADD FIRST if you cut a rare spell. |
| The Elder Dragon War (rare) | 'I — This Saga deals 2 damage to each creature and each opponent' is symmetric and kills this deck's own Automatic Librarian (3/2) and Llanowar Loamspeaker (1/3). |
| Molten Monstrosity | 'costs {X} less to cast, where X is the greatest power among creatures you control' — a real discount here, but it is a vanilla 5/5 trample competing with Mossbeard Ancient's 7/7 at similar effective cost. |
| Yavimaya Steelcrusher | SIDEBOARD CONSIDERATION, cut in Phase 9. '{1}, Sacrifice this creature: Destroy target artifact' is single-purpose against a threat class that is only 15 cards / 6.1% of the cube, and the sideboard already commits 4 slots with an artifact mode. |
| Tail Swipe | Moved to the sideboard. Cheapest green removal at {G}, but the fight is two-way — Bite Down's 'Target creature you control deals damage equal to its power' takes nothing back, so both maindeck copies went there. |
| Jaya's Firenado (maindeck copy) | Moved to the sideboard. 5 damage covers the cube's top end, but a 5-mana sorcery in an otherwise 1-2 mana interaction suite was the marginal card driving the average mana value up. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 7   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.13 adj [MV 2.78 vs 2.5, 9 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  70.0%  prod  70.6%  gap  -0.6pp  [OK]
  R  demand  30.0%  prod  41.2%  gap -11.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size                        40 (expect 40)
[PASS] 1b sideboard size                        10 (expect 10)
[PASS] 2 exact-name membership                  all 25 names found
[PASS] 3 copy limits                            all within card_pool_rules (basics exempt)
[PASS] 3b rare/mythic cap                       5/5 -> Llanowar Greenwidow x1, Llanowar Loamspeaker x1, Meria, Scholar of Antiquity x1, Shivan Devastator x1, Silverback Elder x1
[PASS] 4 colour usability                       all nonland cards usable in ['G', 'R']; off-identity modes: none
[PASS] 5a splash cap <=3/colour                 splash_colors=[] (none)
[PASS] 5b splashed cards in splash_candidates   splashed: none
```
