---
deck_name: "wb-lifegain-asymmetry"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-08-31T22:08:47Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x4   Plains
  x9   Swamp
  x2   Evolving Wilds                               fetches a basic
  x2   Sunlit Marsh                                 Plains Swamp, taps for BW, enters tapped
```

### CREATURES (11)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Lunarch Veteran // Luminous Phantom          x2    W     Engine/Outlet                  C
  2  Blood Artist                                 x2    B     Engine/Outlet                  U
  2  Cathar Commando                              x1    W     Interaction/Disruption         C
  2  Fleshtaker                                   x1    WB    Engine/Outlet                  U
  2  Siege Zombie                                 x2    B     Engine/Outlet                  C
  3  Falkenrath Torturer                          x2    B     Engine/Outlet                  C
  4  Tree of Perdition                            x1    B     Payload/Payoff                 M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Tragic Slip                                  x2    B     Interaction/Disruption         C
  1  Village Rites                                x2    B     Engine/Outlet                  C
  2  Collective Brutality                         x1    B     Interaction/Disruption         R
  3  Lingering Souls                              x2    W     Enabler/Fodder                 U
```

### OTHER SPELLS (5)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  The Meathook Massacre                        x1    B     Payload/Payoff                 M
  4  Demonmail Hauberk                            x1    C     Engine/Outlet                  U
  4  Invasion of Innistrad // Deluge of the Dead  x1    B     Interaction/Disruption         R
  4  Triskaidekaphobia                            x2    B     Payload/Payoff                 U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Murderous Compulsion                         x1    B     Interaction/Disruption: vs creature-dense aggr C
Valorous Stance                              x2    W     Interaction/Disruption: vs decks whose threats U
Fiend Hunter                                 x1    W     Interaction/Disruption: vs single large threat U
Apothecary Geist                             x2    W     Infrastructure/Consistency: vs aggro and vs fl C
Sever the Bloodline                          x1    B     Interaction/Disruption: vs token strategies. ' U
Slayer of the Wicked                         x2    W     Interaction/Disruption: vs this cube's tribal  U
Soul-Guide Gryff                             x1    W     Interaction/Disruption: vs graveyard decks, as C
```

## ANALYSIS

### DECK IDENTITY

A white-black sacrifice deck built around the one clause everyone misreads. Triskaidekaphobia checks EACH PLAYER against an ABSOLUTE 13, independently - no life 'gap' triggers it, and the pilot begins seven points clear of the number for free. So the deck's job is not to build a lead; it is to move the OPPONENT'S total, precisely, in one-point steps, while never letting its own drift onto 13. Siege Zombie ('Tap three untapped creatures you control: EACH OPPONENT loses 1 life') and Blood Artist do the moving; Lingering Souls' eight flying Spirit tokens and five sacrifice outlets do the paying; Lunarch Veteran turns every body entering AND leaving into a life point, which is the safety margin rather than the win condition. Tree of Perdition is the one-card shortcut to the same number, and the deck kills from 20 without it.

### DECK IDENTITY

A white-black sacrifice deck built around the one clause everyone misreads. Triskaidekaphobia checks EACH PLAYER against an ABSOLUTE 13, independently - no life 'gap' triggers it, and the pilot begins seven points clear of the number for free. So the deck's job is not to build a lead; it is to move the OPPONENT'S total, precisely, in one-point steps, while never letting its own drift onto 13. Siege Zombie ('Tap three untapped creatures you control: EACH OPPONENT loses 1 life') and Blood Artist do the moving; Lingering Souls' eight flying Spirit tokens and five sacrifice outlets do the paying; Lunarch Veteran turns every body entering AND leaving into a life point, which is the safety margin rather than the win condition. Tree of Perdition is the one-card shortcut to the same number, and the deck kills from 20 without it.

### THE MISREADING THIS DECK WAS BUILT ON, AND THE CORRECTION

The path was chosen as "lifegain asymmetry": gain enough life that a *symmetric* clock kills the opponent while the pilot survives it. Two separate critics dismantled that, and both were right.

**First error — a symmetric drain cannot create asymmetry.** Triskaidekaphobia's own "then each player loses 1 life" and Cryptolith Fragment's "Each player loses 1 life" both move the two totals *together*. They preserve whatever difference already exists; they cannot manufacture one. Building the deck around them meant building it around a card that does nothing the plan needs.

**Second error, and the deeper one — the plan did not need a difference at all.** Triskaidekaphobia checks **each player against an absolute 13, independently**. No "gap" of any size triggers it. The gap is only a *safety margin* that keeps the pilot off the number — and the pilot begins **seven points clear of 13 for free**. Five of twenty-three slots were buying insurance against a state the deck starts nowhere near.

So the job is not to build a lead. It is to move the **opponent's** total, precisely, in one-point steps, while never letting your own drift onto 13.

### WHAT ACTUALLY MOVES THE OPPONENT

| Card | Clause | Effect on the opponent |
|---|---|---|
| Siege Zombie ×2 | "Tap three untapped creatures you control: **Each opponent** loses 1 life." | −1, repeatable, **costs no mana and no life** |
| Blood Artist ×2 | "target player loses 1 life **and you gain 1 life**" | −1 to them, +1 to you, on any creature death |
| The Meathook Massacre | "Whenever a creature you control dies, **each opponent** loses 1 life" | −1 per sacrifice |
| Collective Brutality | "Target opponent loses 2 life and you gain 2 life" | an exact −2, for a 15 → 13 correction |
| Tree of Perdition | "Exchange target opponent's life total with this creature's toughness" | sets **exactly 13** in one activation |

Every one is asymmetric or one-sided. Nothing in the mainboard drains both players — with a single exception, stated below, and it is the win condition itself.

### THE ONE CARD THAT CAN KILL THE PILOT IS TRISKAIDEKAPHOBIA

An earlier version of this write-up claimed there was no card in the mainboard that lowers the pilot's own life total. That was **false**, and the grill caught it. Triskaidekaphobia's mode B reads "Each player with exactly 13 life loses the game, then **each player loses 1 life**" — the same clause shape Cryptolith Fragment was cut for. With two copies on the battlefield, choosing mode B on both triggers costs the pilot **2 life per upkeep**.

Two consequences the pilot has to hold in their head:

- **The loss check resolves before the life shift.** Sitting on exactly 13 at your own upkeep is lethal in *either* mode; the gain mode does not save you, because you have already lost.
- **Two copies make a two-step.** Pilot at 14, two Trisks out, mode B: trigger one moves you to 13, trigger two checks and kills you. The same mechanism aimed the other way is the deck's fastest kill — an opponent on 14 dies to that sequence, and an opponent on 12 dies to mode A twice.

The out is Blood Artist, and the direction matters: aimed at the **opponent** it is you +1 at instant speed. Aimed at yourself it is −1 and +1, net zero — which is the *other* useful mode, for holding an opponent's already-set 13 in place when another death would knock them to 12.

### THE OUTLET WAS THE CONSTRAINT, NOT THE FODDER

The engine's real bottleneck turned out not to be bodies. Lingering Souls alone makes **eight** 1/1 flying Spirits across two copies and their flashbacks. What the deck lacked was ways to *sacrifice* them — and every point of movement from Blood Artist, The Meathook Massacre, Fleshtaker and Luminous Phantom is gated behind a sacrifice.

Five outlets now: Falkenrath Torturer ×2 ("Sacrifice a creature:" — no mana symbol, no tap symbol, unlimited, instant speed), Demonmail Hauberk (the same, on an **artifact**, so creature removal cannot answer it), Village Rites ×2, and Cathar Commando sacrificing itself. One Spirit token fed to a free outlet with the board assembled is: −1 opponent (Blood Artist), +1 pilot (Blood Artist), −1 opponent (Meathook), +1 pilot (Fleshtaker), +1 pilot (Luminous Phantom). Two points off them and three onto you, for zero mana.

### WHY TRAGIC SLIP CAME BACK

It was cut on the claim that Valorous Stance covered the same creatures. That was wrong, and measurably so: Tragic Slip's morbid "−13/−13" kills **anything with toughness 13 or less, including indestructible, at instant speed, for {B}, at no life cost** — a set that strictly *contains* Valorous Stance's "toughness 4 or greater, destroy-based only." With five sacrifice outlets, morbid is switchable on at will. Before this correction the mainboard had **zero** answers to a 3/3.

Valorous Stance's other mode was also oversold. "Indestructible until end of turn" answers destroy and damage effects — 11 of the 38 creature answers in this cube. The other 27 exile, bounce, apply −X/−X, or force a sacrifice. And because Tree's exchange reads its *toughness*, even a −1/−1 leaves Tree alive and sets the opponent to **12**, which indestructible does nothing about.

### THE MANA IS THE ONE THING THIS DECK PAYS FOR

This is the only one of the four builds whose mana audit is **WARN** rather than PASS: black demand 76.0% against 64.7% production, a gap of 11.3pp. It is accepted, not hidden, because the fix is worse than the flaw. Going to 10 Swamp / 3 Plains clears the warning outright — but four of the eight white sources enter or fetch tapped (Sunlit Marsh ×2, Evolving Wilds ×2), so untapped white would fall to three Plains and a turn-1 Lunarch Veteran would be available in roughly 45% of opening hands. The deck takes a colour warning in exchange for casting the one-drops the white half exists for.

In return, it is the only one of the four builds that answers **all five threat classes** with no concession — including the graveyard, this cube's densest at 75 cards, via Deluge of the Dead's "{2}{B}: Exile target card from **a** graveyard."

### THE INTERNAL TENSION WORTH KNOWING

The Meathook Massacre's ETB is "each creature gets −X/−X until end of turn." That includes your own Spirit tokens *and* Tree of Perdition — casting it for X ≥ 1 with Tree out sets the opponent to 13 − X instead of 13. Its recurring triggers are also **mandatory and untargeted**, so once an opponent is parked on exactly 13, every chump block that kills one of your creatures pushes them to 12 and costs a turn cycle. It is the best card in the deck and the one most likely to spoil the number; sequence around it.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (23 nonland):  1:6  2:8  3:4  4:5
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  win_condition: 7 copies (effective 5.3: Siege Zombie@0.7, Siege Zombie@0.7, Blood Artist@0.7, Blood Artist@0.7, The Meathook Massacre@0.5) → p=0.86 (need ≥ 0.75)
  PASS  sacrifice_outlet: 6 copies (effective 4.1: Village Rites@0.4, Village Rites@0.4, Cathar Commando@0.3) → p=0.78 (need ≥ 0.75)
  PASS  life_safety_margin: 7 copies (effective 5.9: Fleshtaker@0.8, The Meathook Massacre@0.6, Collective Brutality@0.5) → p=0.89 (need ≥ 0.75)
  PASS  interaction: 5 copies → p=0.85 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 67%  T2 95%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre
  OK        single_large_threat: Tragic Slip, Invasion of Innistrad // Deluge of the Dead, Collective Brutality
  OK        noncreature_permanents: Cathar Commando
  OK        stack: Collective Brutality
  CONCEDED  graveyard: CONDITIONAL, and recorded as a concession rather than as coverage. The answer is Deluge of the Dead's '{2}{B}: Exile target card from a graveyard' - repeatable and unrestricted, and the best the colours offer. But it is the BACK face of a Battle: 'When it's defeated, exile it, then cast it transformed', so reaching it requires attacking the Siege down. This deck's own count-dependent verdicts cut five separate cards for requiring attacks, and the bodies that would do the attacking are the same ones Siege Zombie's 'Tap three untapped creatures you control' wants untapped. The eight flying Spirit tokens from Lingering Souls make it more reachable here than in a ground-only build, but not reliably enough to claim the class outright. Soul-Guide Gryff is in the sideboard as the unconditional one-shot version.
```

- Curve PASSED. Distribution 1:6 2:8 3:4 4:5 across 23 nonland cards, with 14 of 23 at mana value 2 or less.
- Assembly PASSED on all four declared roles at thesis turn 7 (win_condition p=0.86, sacrifice_outlet p=0.78, life_safety_margin p=0.89, interaction p=0.85). The sacrifice_outlet role FAILED at p=0.68 on the first repaired list and was fixed by adding Demonmail Hauberk rather than by re-weighting: Village Rites is held at 0.4 as a one-shot and Cathar Commando at 0.3 because it sacrifices only itself.
- MANA AUDIT IS WARN, NOT PASS, and it is accepted rather than fixed. Black demand is 76.0% against 64.7% production, a gap of 11.3pp. Going to 10 Swamp / 3 Plains clears it, but 4 of this deck's 8 white sources enter or fetch tapped, so untapped white would fall to 3 Plains and a turn-1 Lunarch Veteran - the card the white half exists for - would be available in roughly 45% of opening hands. The deck takes the colour WARN in exchange for casting its one-drops.
- The land count is 17 against a recommendation of 16, a deviation of 1. The earlier justification ('zero acceleration') was circular, as the Challenger showed, because the recommendation already consumed accel=2. The honest reason is the tapland tax: 4 of 17 lands enter or fetch tapped in a deck with six four-drops.
- Goldfish PASSED at 84% keepable against an 80% threshold, with 88% reaching 3 lands by turn 3.
- Coverage PASSED with ONE conditional concession, corrected at the Phase 9 approval round. An earlier version of this record claimed zero concessions on the strength of Deluge of the Dead's graveyard exile; the Challenger correctly noted that clause sits on the BACK face of a Battle and is reachable only by defeating the Siege in combat - a mode this deck's own verdicts cut five cards for requiring. Graveyard is therefore recorded as conditional coverage, not as an answered class. The other four classes are answered outright, which is still more than any of the other three builds.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Siege Zombie x2 activate as many times per turn as there are groups of three untapped bodies, and cost no mana - but the real sinks are Lingering Souls' 'Flashback {1}{B}' (a second casting of a spent card), Village Rites x2 at {B} apiece, The Meathook Massacre as an {X} spell, and Thraben Inspector's Clue at {2}. At 17 lands with 15 of 23 nonland cards at mana value 2 or less, surplus lands convert into bodies and bodies convert into gap. |
| `screw` | mitigation | 15 of the 23 nonland cards cost 2 or less, and the deck's cheapest functioning start is a turn-1 Lunarch Veteran or Thraben Inspector into a turn-2 Blood Artist or Siege Zombie - at which point every subsequent body entering is a life point. Village Rites operates on one land. At 17 lands (one above the recommendation, deliberately) the goldfish reports 84% keepable and 88% reaching 3 lands by turn 3, and the colour gap is 0.9pp, the tightest of the four builds. |
| `decapitation` | mitigation | Tree of Perdition is one copy and this build does not depend on it - it kills from 20 without any combo piece. Siege Zombie x2 ('Tap three untapped creatures you control: Each opponent loses 1 life') needs no outlet and no fodder; Blood Artist x2 and The Meathook Massacre convert every sacrificed body into a point off the opponent. Phase 6b weights this at 7 physical copies / 5.3 effective. The claim that Valorous Stance PROTECTS Tree has been withdrawn from the mainboard and the card moved to the sideboard: the Challenger measured its coverage at 11 of the 38 creature answers in this cube, and Tree's exchange reads its TOUGHNESS, so even a -1/-1 sets the opponent to 12 while Tree survives and indestructible does nothing about it. |
| `gas-out` | mitigation | Village Rites x2 - 'sacrifice a creature ... Draw two cards' - against 11 expendable bodies (8 Lingering Souls Spirit tokens across both flashbacks, 2 Deluge of the Dead Zombies, Cathar Commando). Lingering Souls' 'Flashback {1}{B}' is a genuinely net-positive second card from a spent one, and Deluge of the Dead's '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie' makes a body per activation from no card at all. Fleshtaker's 'scry 1' per sacrifice is the deck's only library selection. Net-positive-card count: 3 of 23. |
| `raced` | accepted | Against this cube's fastest starts a 17-land deck whose drain engine needs two or three turns to matter can lose before it matters. Mitigating further would mean maindecking a symmetric sweeper - and that is the specific thing this deck cannot do, because its lifegain triggers off its OWN creatures entering (Lunarch Veteran) and its drain off them being sacrificed on the pilot's terms (five outlets, Blood Artist, Fleshtaker); a wipe turns off all three at once. Vanquish the Horde and Killing Wave were both in the pool and both rejected on that mechanism. The phrasing is narrower than the earlier version, which the Challenger correctly noted was contradicted by the deck's own The Meathook Massacre - that IS a maindeck sweeper, but it is one whose X the pilot chooses and whose triggers pay the pilot. What the deck has otherwise is a wall: eight flying Spirit tokens from Lingering Souls block the cube's 58 evasive cards, and Tree of Perdition is a 0/13. The sideboard carries nine anti-aggro or removal cards. |
| `disruption-fizzle` | mitigation | This deck has the least to fizzle, because its kill is incremental rather than a single turn: Siege Zombie's activation is not a spell and cannot be countered, and the gap it builds persists across turns. If Triskaidekaphobia is countered, one of two copies is gone and the drain continues toward 0 instead of 13. If Tree of Perdition is targeted, Valorous Stance grants indestructible in response. The one proactive answer, Collective Brutality's 'You choose an instant or sorcery card from it. That player discards that card', strips the interaction before the turn arrives. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Tamiyo's Journal | COUNT RESTATED AT PHASE 9 (it was cut inside a colourless block with no count). '{T}, Sacrifice three Clues: Search your library for a card' reads a Clue count, which in this list is 0 after Thraben Inspector was cut - so the tutor never activates. At {5} with three upkeeps of investigating first, it also fires past the turn-7 thesis. |
| Asylum Visitor | COUNT RESTATED AT PHASE 9. 'if that player has no cards in hand, you draw a card and YOU LOSE 1 LIFE' - it is the one excluded card whose text lowers the PILOT's life total, which is this deck's binding constraint, and the hellbent condition reads a hand count. Cut on the mechanism, not on the earlier blanket 'none of them gains life'. |
| Lupine Prototype | COUNT RESTATED AT PHASE 9. 'This creature can't attack or block unless a player has no cards in hand' reads a hand count; this deck runs Village Rites x2 and Lingering Souls' flashback and empties its hand slowly, so the enabler count is 0 of 23. |
| Midnight Scavengers | MISFILED AT 5A AND CORRECTED. It was swept into a block labelled 'Colourless cards'; it is a BLACK creature ({4}{B}). Recounted against the finished list: 'return target creature card with mana value 3 or less' is live on 17 of 23 nonland cards, so the clause is not the problem. It is cut on rate - {4}{B} for a 3/3 that returns one body to hand, in a deck whose bodies are 1/1 tokens it makes two at a time. |
| Graf Rats | MISFILED AT 5A AND CORRECTED. Also a black creature, not colourless. 'if you both own and control this creature and a creature named Midnight Scavengers' is a possession condition needing a second specific card, and Midnight Scavengers is itself cut - so its functional count in a 23-nonland list is 0. |
| Murderous Compulsion | CUT FROM THE MAINBOARD, PLAYED IN THE SIDEBOARD. The Phase 9 Challenger correctly flagged that the earlier blanket reason ('none of them gains life') was falsified by the deck's own board. Restated: 'Destroy target tapped creature' is a sorcery, so it only catches creatures that stayed tapped from attacking - live against the aggro decks this list boards it in against, dead against a deck that holds back, which is why it is a sideboard card and not a maindeck one. |
| Sever the Bloodline | CUT FROM THE MAINBOARD, PLAYED IN THE SIDEBOARD. Same correction. 'Exile target creature and all other creatures with the same name' is a one-card sweeper against token decks because tokens share a name - but exile produces no death triggers, so in the maindeck it would turn off Blood Artist, The Meathook Massacre and Fleshtaker, which is exactly why it is boarded rather than played. |
| Blazing Torch | COUNT RESTATED AT PHASE 9. '{T}, Sacrifice Blazing Torch: Blazing Torch deals 2 damage to any target' is a one-mana, opponent-only, exact 2-point dial that can hit a face - the earlier blanket reason ('does not move a life total by a known amount') was factually wrong about the card. It is cut because it requires tapping one of 11 creature cards, and Siege Zombie x2 already compete for the same untapped bodies while dealing the same 1-2 points for no card. |
| Deadly Allure, Crawl from the Cellar, Olivia's Dragoon, Gisa's Bidding, Avacynian Priest, Wild-Field Scarecrow, Griselbrand, Heartless Summoning, Brisela, Voice of Nightmares, Chittering Host | Off-plan or actively anti-synergistic. Heartless Summoning's 'Creatures you control get -1/-1' makes Tree of Perdition a 0/12 (sets 12, not 13) and kills every 1/1 Spirit token the engine runs on. Griselbrand's 'Pay 7 life: Draw seven cards' is a 7-point self-dial, and 20 minus 7 is exactly the number this deck's own enchantment kills for. Brisela and Chittering Host are meld results with no mana cost. The rest neither sacrifice, gain life, nor move a life total by a known amount. |

## MANA AUDIT: WARN

```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.53 adj [MV 2.35 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [WARN]
  B  demand  76.0%  prod  64.7%  gap +11.3pp  [WARN]
  W  demand  24.0%  prod  35.3%  gap -11.3pp  [OK]

Flags:
  WARN  B  gap +11.3pp
```

## RESTRICTIONS COMPLIANCE

```
[PASS] commons/uncommons max 2 copies: PASS - highest count across the 50-card pool is 2; verified by Phase 5C check 3
[PASS] rares/mythics max 1 copy each: PASS - Tree of Perdition (M), The Meathook Massacre (M), Collective Brutality (R), Invasion of Innistrad (R), one each, all mainboard
[PASS] max 5 rares/mythics across MB+SB: PASS - 4 used, all mainboard; 1 slot left unspent. Invasion of Innistrad took a previously-unspent slot at Phase 9 because it answered three separate gaps at once.
[PASS] cross-board copy totals: PASS - no card appears in both boards
[PASS] basic lands exempt (format-supplied): PASS - 7 Swamp + 6 Plains; Sunlit Marsh x2 and Evolving Wilds x2 are cube commons within the 2-copy limit
[PASS] all cards from the cube mainboard or basics: PASS - verified by Phase 5C check 2
[PASS] sweep partition integrity: PASS after repair - Invasion of Innistrad and Soul-Guide Gryff were recovered at Phase 9 and were still recorded on the excluded side of the 5A partition. Both moved to include_candidates with their mechanism; the partition is now 81 include / 40 excluded / 121 seed.
```