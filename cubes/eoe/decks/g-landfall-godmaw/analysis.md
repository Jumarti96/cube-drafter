---
deck_name: "g-landfall-godmaw"
cube_id: "eoe"
cube_slug: "eoe"
colors: "G"
format: "40-card"
built_at: "2026-08-07T02:02:23Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
17x Forest                    basic
```

### CREATURES (14)
```
CMC  Card                      Qty   Color Role                                     Rar
  1  Edge Rover                x2    G     One-drop body + delayed Lander           U
  2  Frenzied Baloth           x1    G     Turn-2 haste trampler / uncounterable    R
  3  Galactic Wayfarer         x2    G     Stored landfall trigger (body)           C
  4  Icecave Crasher           x2    G     Landfall trampler                        C
  4  Icetill Explorer          x1    G     Extra land drop each turn                R
  4  Ouroboroid                x1    G     Compounding team pump                    M
  4  Seedship Agrarian         x2    G     Landfall counters + Lander engine        U
  5  Harmonious Grovestrider   x1    G     Land-count body (Ward 2)                 U
  7  Glacier Godmaw            x2    G     Primary payoff (team pump + haste)       U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                      Qty   Color Role                                     Rar
  1  Sami's Curiosity          x2    G     Stored landfall trigger                  C
  2  Close Encounter           x2    G     Removal (scales with own board)          U
  2  Seedship Impact           x2    G     Artifact/enchantment removal             U
```

### OTHER SPELLS (3)
```
CMC  Card                      Qty   Color Role                                     Rar
  3  Bioengineered Future      x1    G     Token-sizing engine                      R
  5  Eusocial Engineering      x2    G     Token engine (2/2 per landfall)          U
```

## SIDEBOARD (10)
```
Card                      Qty   Color Role / When to board in                                                        Rar
Biosynthic Burst          x2    G     Against removal-heavy decks - indestructible protects Glacier Godmaw through a removal spell on the turn the alpha strike happens, and it grants trample as well. C
Dauntless Scrapbot        x2    C     Against Reanimator / Self-Mill / Graveyard decks (31 graveyard cards, 12% density); its Lander also feeds the landfall plan, so it is never a dead board-in. U
Shattered Wings           x2    G     Against the cube's 74 artifact cards (30% density), its 16 enchantments, and fliers. C
Skystinger                x2    G     Against evasion decks - reach, and +5/+0 whenever it blocks a flier. Of the cube's 56 evasive cards, 48 reference flying. C
Drix Fatemaker            x2    G     Against decks that block on the ground - once Bioengineered Future is giving Robot tokens +1/+1 counters, its 'Each creature you control with a +1/+1 counter on it has trample' turns the whole token board into tramplers. C
```

## ANALYSIS

### DECK IDENTITY

A mono-green landfall deck in which the land drop is the damage. Glacier Godmaw's landfall reads 'creatures you control get +1/+1 and gain vigilance and haste until end of turn', so a land entering both pumps the team and lets anything made that turn attack immediately. Eusocial Engineering turns each land drop into a 2/2 Robot, Bioengineered Future makes those Robots enter larger, Icetill Explorer grants a second land drop every turn and lets you replay lands from the graveyard, and every Lander token is a stored land drop you crack at a moment of your choosing. Ouroboroid compounds the whole board across successive combats, and Frenzied Baloth gives the deck a turn-two attacker whose 'Creature spells you control can't be countered' clause protects everything behind it. The kill is a wide board plus two land drops in one turn.

### THE LANDER IS A STORED TRIGGER, NOT RAMP

Every other build in this archetype treats a Lander token as acceleration. This deck treats it as ammunition, and the difference is worth stating precisely.

A Lander reads *"{2}, {T}, Sacrifice this token: Search your library for a basic land card, put it onto the battlefield tapped."* That is an **activated ability of a permanent already on the battlefield**, which means three things a ramp spell does not:

1. **You choose the turn.** Bank three Landers over turns 1–4, then crack all three on turn 6 for three separate landfall triggers in one turn.
2. **A counterspell cannot stop it.** It is not a spell. Once the Landers are down, the alpha-strike turn is protected from the cube's Annul, Divert Disaster and Unravel.
3. **It is a land drop that ignores the once-per-turn rule.** Your natural drop plus two cracked Landers is three landfall events on a single turn.

Nine of the twenty-three nonland cards here read *"Landfall"* or *"whenever a land you control enters."* Multiply that by three triggers in a turn and the arithmetic gets silly quickly.

### THE ALPHA-STRIKE TURN, WORKED THROUGH

Board: Glacier Godmaw, Eusocial Engineering, Bioengineered Future, two banked Landers, and one land in hand. Turn 6:

| Step | What happens |
|---|---|
| Play the land | Godmaw: team gets +1/+1, **vigilance and haste**. Eusocial: a 2/2 Robot, which enters with +1/+1 from Bioengineered Future for the one land already in — a 3/3, **hasty** |
| Crack Lander #1 ({2}) | Second land enters. Team +1/+1 again. Second Robot arrives as a 4/4 (two lands entered this turn), also hasty |
| Crack Lander #2 ({2}) | Third land. Team +1/+1 again. Third Robot arrives as a 5/5, hasty |

The team is now +3/+3 over its printed stats, three brand-new bodies totalling 12 power are attacking the turn they were made, and vigilance means the whole board is still untapped to block the crack-back. That is the deck.

### WHY GLACIER GODMAW IS NON-NEGOTIABLE

The shape judge ranked the fastest of the three candidate builds *last*, and its reason is the sharpest observation in this build's history: that build benched Glacier Godmaw to lower the curve, and **Godmaw is the only haste source in the slice**. Without it, every Robot that Eusocial Engineering makes is summoning-sick. The deck still goes wide — it just cannot convert width into damage on the turn the width appears, which is the entire thesis. A faster curve that cannot execute the kill mechanism is not faster.

### THE HOLE THE SELF-GRILL FOUND

The first version of this list had **zero creatures at mana value 1 or 2**. Its cheapest cards were Sami's Curiosity (a sorcery), Seedship Impact and Close Encounter (instants), and the first body arrived on turn 3. For a deck labelled aggro with a turn-6 goldfish, that is a real structural fault, and the goldfish check registered it: keepable 79.7% against an 80% floor, with a 37% turn-1 play rate.

Frenzied Baloth and Edge Rover ×2 fixed it. The play rate went 37% → 59% on turn 1 and 79% → 91% on turn 2, and the WARN cleared. Frenzied Baloth earns the slot twice over: *"Trample, haste"* makes it a turn-2 attacker, and *"Creature spells you control can't be countered"* protects the other eleven creature cards in the deck against the only colour in this cube with counterspells.

### EDGE ROVER'S SYMMETRY, COUNTED RATHER THAN DISMISSED

Edge Rover reads *"When this creature dies, **each player** creates a Lander token."* Handing an opponent a free land is a genuine cost, and "it's symmetric" is not by itself a reason to play or not play it. The count is what decides it: **9 of 23** nonland cards in this deck trigger on a land entering. For an opponent who is not also a landfall deck, that number is zero. The same token is a Glacier Godmaw trigger for you and a tapped basic for them.

### FLOOD IS THE WIN CONDITION

Of the four builds of this archetype, this is the only one where drawing too many lands is not a failure mode. Harmonious Grovestrider's *"power and toughness are each equal to the number of lands you control"* converts surplus directly into stats, Icetill Explorer lets a second land be played every turn, and every one of those drops fires nine cards' worth of triggers. The failure mode this deck actually has is **gas-out**: zero of its twenty-three nonland cards draw a card. That is accepted rather than mitigated, and the cost is specific — against a deck that trades one-for-one profitably, this list is empty-handed around turn 8. What it has instead is a board that grows without spending cards: Eusocial Engineering makes a 2/2 per land drop for free, Seedship Agrarian makes a Lander every time it becomes tapped, and Ouroboroid adds permanent counters to the whole team every combat.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:5  3:3  4:6  5:3  7:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 9.4: Harmonious Grovestrider@0.8, Ouroboroid@0.6) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 6.9: Edge Rover@0.7, Edge Rover@0.7, Icetill Explorer@0.7, Bioengineered Future@0.8) → p=0.91 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 90%
  play by turn: T1 59%  T2 91%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: This build has no sweeper. Mitigating would mean adding Extinguisher Battleship, whose ETB 'deals 4 damage to each creature' would kill this deck's own 2/2 Robot tokens, Seedship Agrarian and Galactic Wayfarer - a go-wide deck cannot run the only wide-board answer in its colours. Instead it out-widths the opponent: Eusocial Engineering makes a 2/2 per land drop and Glacier Godmaw's landfall gives the whole team +1/+1 and haste.
  OK        single_large_threat: Close Encounter
  OK        noncreature_permanents: Seedship Impact
  CONCEDED  stack: Green has no counterspell anywhere in this cube and this build plays no blue; it answers permanents after they resolve.
  CONCEDED  graveyard: No maindeck graveyard interaction; Dauntless Scrapbot's 'exile each opponent's graveyard. Create a Lander token' is held in the sideboard at two copies, where it doubles as a land-drop enabler.
```

- No WARN flags remain. Before the Phase 9 repair round the goldfish check reported keepable 79.7% against an 80% floor (a WARN); adding Frenzied Baloth and Edge Rover x2 at the bottom of the curve moved it to 82% keepable with a turn-1 play rate of 59%, and the flag cleared.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This is the one deck of the four for which flood is not a failure mode at all - it is the win condition. Every surplus land is a Glacier Godmaw team pump with haste, a Eusocial Engineering 2/2, a Seedship Agrarian counter, an Icecave Crasher +1/+0 and a larger Bioengineered Future token; 9 of the 23 nonland cards read 'Landfall' or 'whenever a land you control enters'. Harmonious Grovestrider's 'power and toughness are each equal to the number of lands you control' turns the surplus into raw stats, and Icetill Explorer lets a second land be played every turn. |
| screw | mitigation | The goldfish check measures 82% keepable and 90% for three lands by turn 3. Sami's Curiosity at {G} both gains life and banks a Lander, Edge Rover at {G} is a 2/2 reach body that banks a delayed one, and Galactic Wayfarer at {2}{G} does the same on a 3/3; between them that is 6 of the 23 nonland cards that turn a short land count into a longer one. [REVISED after the Challenger's review: an earlier draft quoted 80% keepable, which was the pre-repair figure of 79.7% - a WARN - rounded up. The current list genuinely measures 82%.] |
| decapitation | mitigation | The payoff is not one card. The assembly check counts 10 payoff copies (9.4 effective) reaching P=0.97 by turn 6, and the payoffs occupy three different card types - Glacier Godmaw, Icecave Crasher, Ouroboroid and Frenzied Baloth are creatures while Eusocial Engineering and Bioengineered Future are enchantments, so creature removal and enchantment removal each answer only part of the deck. Harmonious Grovestrider carries Ward {2}, and Frenzied Baloth's 'Creature spells you control can't be countered' protects the other 11 creature cards on the stack. |
| gas-out | accepted | Cards tagged 'Cards: Net-Positive' in this mainboard: 0 of 23. This deck draws no cards. Mitigating would mean Terrasymbiosis, whose trigger only 4 of 23 cards can supply, or blue card draw that would require a splash and a manabase this deck cannot afford at nine {G}{G}-costing cards. The cost of accepting it is real and specific: against a deck that trades one-for-one profitably, this build runs out of cards around turn 8. What it has instead is a board that keeps growing without new cards - Eusocial Engineering makes a 2/2 every land drop for free, Seedship Agrarian makes a Lander every time it becomes tapped, and Ouroboroid adds permanent counters to the whole team every combat with no cards spent. |
| raced | mitigation | The repair round made this the fastest of the four builds off the mark: 59% of hands play a spell on turn 1 and 91% on turn 2, and Frenzied Baloth is a turn-two 3/2 with trample and haste. Its specific anti-race tool is Glacier Godmaw's landfall granting VIGILANCE alongside haste, which lets the team attack and still block on the crack-back. Against the cube's 56-card evasion pool the sideboard adds Skystinger x2, a 3/3 reach body that gets +5/+0 when it blocks a flier, and Shattered Wings x2 to destroy a flier outright; Edge Rover's reach also blocks fliers maindeck. |
| disruption-fizzle | mitigation | The critical turn is cracking one or two Landers with Glacier Godmaw and Eusocial Engineering already on the battlefield. A Lander's ability is an activated ability of a permanent already in play, so a counterspell cannot stop it - only permanent removal aimed at the enchantment or the Leviathan beforehand can, and those sit on different card types. If Godmaw is answered the Robots still arrive, they are simply summoning-sick for a turn; the plan slows rather than folding. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Terrapact Intimidator | {1}{R} - red is not in this deck's identity and it is not a legal splash candidate; its two Landers are the right effect in the wrong colour. |
| Extinguisher Battleship | {8}, and its ETB 'deals 4 damage to each creature' would kill this build's own board - the 2/2 Robot tokens, Seedship Agrarian, Galactic Wayfarer and Eumidian Terrabotanist all die. A go-wide deck cannot run the sweeper. |
| Pinnacle Kill-Ship | {7} with no cost reduction; this build's goldfish turn is 6 and its mana peaks around 6-7, so a colourless seven-drop is a card it casts after the game is decided. |
| The Eternity Elevator | A {5} mana rock in a deck whose most expensive card is {5}{G}{G}; the mana it makes has nothing to buy. |
| Bygone Colossus | {9} 9/9 with Warp {3} - a big body, but it has no landfall text and contributes nothing to a plan that wins by making land drops matter. |
| Fungal Colossus | Its discount reads differently NAMED lands, and this build's manabase is deliberately mostly Forests to support {G}{G} costs - the expected distinct-name count on the battlefield is under 2. |
| Famished Worldsire | {5}{G}{G}{G}, and 'Devour land 3' SACRIFICES lands - in a landfall deck, throwing away lands is throwing away the engine. |
| Tapestry Warden | Its toughness-for-power clause only helps creatures whose toughness exceeds their power; this build's board is 2/2 Robot tokens, a 6/6, a 4/4 and a 3/3. |
| Anticausal Vestige | {6} with Warp {4}; the free permanent drop is strong, but it is a rare in a build whose budget is better spent on Icetill Explorer and the landfall engines, and it has no landfall text. |
| Sledge-Class Seedship | Needs 7 charge counters before it does anything, and this build's bodies are 2/2 tokens - three or four Station activations. |
| Meltstrider Eulogist | {2}{G} 3/3 drawing when a counter-bearing creature dies; this build wants its creatures to survive and attack, so the trigger fights the plan. |
| Frenzied Baloth | {G}{G} 3/2 uncounterable haste - a rare on a 2-drop beater with no landfall relevance. |
| Broodguard Elite | {X}{G}{G} scaling body - fine, but it competes for the same slots as the landfall engines and has no landfall text of its own. |
| Mm'menon, the Right Hand | SPLASH CANDIDATE REJECTED. {3}{U}{U} needs two blue pips off a 2-3 source splash. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.3   Ramp cards: 13   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.10 adj [MV 3.3 vs 2.5, 13 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
copy_limits:           PASS - every common/uncommon at most 2 copies, every rare at most 1, checked against cube_search pool quantities.
rare_mythic_budget:    4 of 6 used: Bioengineered Future, Icetill Explorer, Frenzied Baloth, Ouroboroid (mythic). Sideboard adds none. Mightform Harmonizer was cut in the Phase 9 repair round. The two remaining slots are left unused because the other green rares failed a reproduced count against this list, recorded in count_dependent_verdicts.
basics:                17 Forest, format-supplied and exempt from copy limits.
colour:                Every nonland card usable in core_colors ['G'] via effective_cost.best_mode; splash_colors is empty.
1_counts:              PASS (mainboard 40, sideboard 10)
2_exact_name_membership: PASS
3_copy_limits:         PASS
4_colour_usability_best_mode: PASS
5_splash_cap:          PASS (no splashed cards)
6_rare_mythic_budget:  PASS (4/6)
```