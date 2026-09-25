---
deck_name: "b-fortress-thirteen"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-08-31T16:55:29Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x17  Swamp
```

### CREATURES (10)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Blood Artist                                 x2    B     Engine/Outlet                  U
  2  Restless Bloodseeker // Bloodsoaked Reveler  x2    B     Engine/Outlet                  U
  2  Skirsdag High Priest                         x1    B     Engine/Outlet                  R
  3  Desperate Farmer // Depraved Harvester       x2    B     Infrastructure/Consistency     C
  3  Morbid Opportunist                           x1    B     Infrastructure/Consistency     U
  4  Haunted Dead                                 x1    B     Infrastructure/Consistency     U
  4  Tree of Perdition                            x1    B     Payload/Payoff                 M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Crawl from the Cellar                        x2    B     Infrastructure/Consistency     C
  1  Tragic Slip                                  x1    B     Interaction/Disruption         C
  2  Collective Brutality                         x1    B     Interaction/Disruption         R
  2  Infernal Grasp                               x2    B     Interaction/Disruption         U
  4  Sever the Bloodline                          x1    B     Interaction/Disruption         U
```

### OTHER SPELLS (6)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  The Meathook Massacre                        x1    B     Interaction/Disruption         M
  3  Cryptolith Fragment // Aurora of Emrakul     x2    C     Infrastructure/Consistency     U
  4  Invasion of Innistrad // Deluge of the Dead  x1    B     Interaction/Disruption         R
  4  Triskaidekaphobia                            x2    B     Payload/Payoff                 U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Eaten Alive                                  x1    B     Interaction/Disruption: vs planeswalkers and r C
Sanitarium Skeleton                          x2    B     Infrastructure/Consistency: vs fast aggro. '{2 C
Murderous Compulsion                         x2    B     Interaction/Disruption: vs creature-dense aggr C
Gluttonous Guest                             x2    B     Infrastructure/Consistency: vs aggro. 1/4 wall C
Wild-Field Scarecrow                         x2    C     Infrastructure/Consistency: vs ground aggro. ' C
Sever the Bloodline                          x1    B     Interaction/Disruption: vs token strategies. ' U
```

## ANALYSIS

### DECK IDENTITY

A mono-black fortress that wins by arithmetic rather than combat. Tree of Perdition is a 0/13 Defender that walls the ground for free and, once untapped, sets an opponent to exactly 13 with 'Exchange target opponent's life total with this creature's toughness'; Triskaidekaphobia then ends the game on the next upkeep, and because the untap step precedes the upkeep, Tree can be activated with the trigger already on the stack. Seven removal spells buy the turns assembly needs, and six of them cause a creature to die — each of those is also a Blood Artist trigger, since Blood Artist reads 'this creature OR ANOTHER CREATURE dies' and therefore fires on the opponent's creatures too. The deck's hardest constraint is not the opponent: Triskaidekaphobia has no controller exemption and the loss check precedes its life-shift clause, so the pilot must be off 13 BEFORE their own upkeep, not during it.

### DECK IDENTITY

A mono-black fortress that wins by arithmetic rather than combat. Tree of Perdition is a 0/13 Defender that walls the ground for free and, once untapped, sets an opponent to exactly 13 with 'Exchange target opponent's life total with this creature's toughness'; Triskaidekaphobia then ends the game on the next upkeep, and because the untap step precedes the upkeep, Tree can be activated with the trigger already on the stack. Seven removal spells buy the turns assembly needs, and six of them cause a creature to die — each of those is also a Blood Artist trigger, since Blood Artist reads 'this creature OR ANOTHER CREATURE dies' and therefore fires on the opponent's creatures too. The deck's hardest constraint is not the opponent: Triskaidekaphobia has no controller exemption and the loss check precedes its life-shift clause, so the pilot must be off 13 BEFORE their own upkeep, not during it.

### THE COMBO, AND WHY IT IS A TWO-CARD KILL AND NOT A THREE-CARD ONE

Tree of Perdition is printed **0/13**. Its ability reads "{T}: Exchange target opponent's life total with this creature's toughness" — so an *untouched* Tree sets an opponent to exactly 13, no other card required. Triskaidekaphobia reads "At the beginning of your upkeep, choose one — Each player with exactly 13 life loses the game."

The line that matters: **the untap step precedes the upkeep.** With both permanents already on the battlefield and Tree untapped, you let the Triskaidekaphobia trigger go on the stack and activate Tree in response. The opponent drops to 13, the trigger resolves, they lose. The opponent never gets a turn to move off the number. Tree's ability carries no timing restriction, which is the whole reason this works.

Three consequences of the printed text shape the entire build:

| Fact | Consequence |
|---|---|
| Tree is 0/**13** and the exchange uses its **toughness** | Anything that changes Tree's toughness changes the number it sets. The Meathook Massacre's "each creature gets -X/-X" includes Tree. **Never activate Tree on a turn your own sweeper or Tragic Slip has touched your board** — the effect ends at end of turn, so Tree is 0/13 again next upkeep. |
| Triskaidekaphobia has **no controller exemption** | "Each player with exactly 13 life loses the game" kills the pilot too. Worse, the loss check resolves *before* the "then each player gains 1 life" clause, so choosing the gain mode does **not** save a pilot already on 13. You must be off 13 *before* your upkeep, not during it. |
| Tree is mythic (1 copy); Triskaidekaphobia is **uncommon** (2 copies) | The combo is redundant on its cheap half and fragile on its expensive one. Hence Crawl from the Cellar x2 — four rebuys of Tree for {B} each across two cards. |

### THE PILOT IS THE MOST LIKELY VICTIM

This deck's largest self-inflicted risk is not the opponent. Two Infernal Grasps ("You lose 2 life") plus three Cryptolith Fragment activations ("Each player loses 1 life") is **20 − 2 − 2 − 1 − 1 − 1 = exactly 13**, on a completely ordinary line, and Cryptolith is a *mana rock* — you tap it for mana, not for the dial, so the life loss is not optional once you need the mana.

The rule that follows: **track your own life total every time you tap Cryptolith Fragment.** At 14 or 15, route the next removal spell to Tragic Slip or Sever the Bloodline, neither of which costs life, rather than Infernal Grasp.

The escape hatch is Blood Artist, and its direction matters. "Whenever this creature or another creature dies, target player loses 1 life **and you gain 1 life**":

- Aimed at the **opponent** → they −1, you **+1**. This is how you move yourself 13 → 14 at instant speed.
- Aimed at **yourself** → you −1 and +1 = **net zero**. Useless as an escape — but it is the correct play for the opposite job, holding an opponent's already-set 13 in place when another creature death would otherwise knock them to 12.

### BLOOD ARTIST IS FED BY THE REMOVAL SUITE, NOT BY A SACRIFICE ENGINE

This deck has no sacrifice outlet, which normally makes Blood Artist a dead card. It is live here because of one word: the trigger reads "Whenever this creature **or another creature** dies" — not *another creature you control*. Of the seven mainboard removal spells, **six cause a creature to die** (Infernal Grasp x2, Tragic Slip, Invasion of Innistrad's −13/−13, The Meathook Massacre, Collective Brutality's −2/−2 mode); only Sever the Bloodline exiles and therefore produces no trigger. Every one of those six is a point of drain and a point of lifegain on top of being removal.

### REACHING 13 WITHOUT TREE

Seven points of asymmetric drain from an untouched 20. Seven decomposes cleanly with what this list carries:

| Step | Source |
|---|---|
| −1 / +1 | Blood Artist x2, once per creature death |
| −2 / +2 | Collective Brutality |
| −2 / +2 | Restless Bloodseeker x2, back face, **repeatable** at {4}{B} |
| −1 (symmetric) | Cryptolith Fragment x2, repeatable — safe only alongside a lifegain source |
| −1 | The Meathook Massacre, per creature you control that dies |

2 + 2 + 3 or 2 + 5 or seven 1s all land on the number. Note the one arithmetic trap the Step-0 critic found and that this build acted on: **Chalice of Death's step size is 5, and 20 is 0 mod 5 while 13 is 3 mod 5** — no number of Chalice activations alone reaches 13 from an untouched opponent. It was cut.

### WHAT THIS DECK CANNOT DO

Two threat classes are conceded in writing rather than papered over. Mono-black in this cube has **no answer to an artifact or enchantment at any rarity** — the only pool answer is Maelstrom Pulse, which is B/G. And graveyard, this cube's densest threat class at 75 cards (density 0.271), is unanswerable in black: Epitaph Golem and Soul Separator both read "**your** graveyard", and Deluge of the Dead's exile clause sits on the back face of a Battle that a 0/13 Defender deck cannot reliably attack. Buying either answer costs a second colour, and every dual in this cube enters tapped or conditionally tapped — which would tax exactly the turn-4 and turn-5 sequence the combo depends on.

The evasion axis *was* a blind spot and was fixed: the pre-grill list had zero fliers and zero reach against a cube with 58 evasive cards. Haunted Dead's 1/1 flying Spirit token and Skirsdag High Priest's repeatable "Create a 5/5 black Demon creature token with flying" are the answer, and the 5/5 doubles as the only clock the deck has if Tree is exiled.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (23 nonland):  1:3  2:9  3:5  4:6
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  win_condition: 7 copies (effective 4.5: Cryptolith Fragment // Aurora of Emrakul@0.4, Cryptolith Fragment // Aurora of Emrakul@0.4, Restless Bloodseeker // Bloodsoaked Reveler@0.6, Restless Bloodseeker // Bloodsoaked Reveler@0.6, Skirsdag High Priest@0.5) → p=0.81 (need ≥ 0.75)
  PASS  life_dial: 8 copies (effective 7: Cryptolith Fragment // Aurora of Emrakul@0.5, Cryptolith Fragment // Aurora of Emrakul@0.5) → p=0.93 (need ≥ 0.75)
  PASS  interaction: 7 copies → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 90%
  play by turn: T1 50%  T2 97%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre, Sever the Bloodline
  OK        single_large_threat: Infernal Grasp, Invasion of Innistrad // Deluge of the Dead, Tragic Slip, Sever the Bloodline
  CONCEDED  noncreature_permanents: Mono-black in this cube has no 'destroy or exile target artifact/enchantment' effect at any rarity — the dossier probe found 0 in B and the only pool answer, Maelstrom Pulse, is B/G. Staying mono-black is what buys the perfect mana that lets two 4-mana combo halves land on consecutive turns; adding green to answer artifacts would cost the on-curve kill the thesis depends on.
  OK        stack: Collective Brutality
  CONCEDED  graveyard: CONCEDED after the grill. The only mono-black opposing-graveyard answer in the pool is Deluge of the Dead's '{2}{B}: Exile target card from a graveyard' — but that is the BACK face of a Battle, reachable only by defeating the Siege in combat, which a deck built around a 0/13 Defender cannot reliably do. Every other graveyard effect in black (Epitaph Golem, Soul Separator) reads 'your graveyard'. Graveyard interaction is this cube's densest threat class (75 cards, density 0.271) and this deck does not answer it; the cost of answering it is a second colour, which the mana argument above rules out.
```

- Curve PASSED (Control band requires MV 0-2 share >= 25%; this list is 12 of 23 = 52%). No deviation to justify.
- Assembly PASSED at thesis turn 7 (win_condition p=0.81, life_dial p=0.93, interaction p=0.93). It FAILED at turn 6 on the pre-grill list at p=0.7496 against a 0.75 threshold, and the thesis turn was revised to 7 with the reason stated: a turn-6 kill requires Tree on turn 4 AND Triskaidekaphobia on turn 5, i.e. both halves in the opening seven, and Tree has no haste clause so it cannot activate the turn it lands.
- The Phase 9 Challenger correctly identified that deck_checks.p_at_least_one models drawing WITH replacement (1-(1-k/N)^n) rather than hypergeometrically, and that under the correct model turn 6 would have passed at p=0.776. This was CONTESTED and not acted on: the shipped function is the gate, the skill forbids hand-patching a validator to make it agree, and the error runs conservative in every direction — no gate flipped the wrong way. Turn 7 is retained as the conservative reading and is in any case the honest goldfish for a build that expects to cast the second combo half on turn 6.
- Goldfish PASSED at 87% keepable against an 80% threshold, with 90% reaching 3 lands by turn 3.
- Coverage PASSED with two written concessions (noncreature_permanents and graveyard). The graveyard concession was added at Phase 9: the original declaration cited Deluge of the Dead's '{2}{B}: Exile target card from a graveyard', but that is the BACK face of a Battle and requires defeating the Siege in combat, which a deck built around a 0/13 Defender cannot reliably do.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Restless Bloodseeker's back face is a {4}{B} mana sink that turns every surplus land into 2 points of asymmetric drain and 2 life gained; The Meathook Massacre is {X}{B}{B} and Haunted Dead's '{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield' converts flooded hands into bodies. Crawl from the Cellar's 'Flashback {3}{B}' is a second use of a spent card. Skirsdag High Priest needs no mana at all once online. At 17 lands with 12 of 23 nonland cards at MV 2 or less, the flood tail is short by construction. |
| `screw` | mitigation | 12 of the 23 nonland cards cost 2 or less and genuinely interact or develop at that cost: Crawl from the Cellar x2 ({B}), Tragic Slip ({B}), Infernal Grasp x2 ({1}{B}), Blood Artist x2 ({1}{B}), Restless Bloodseeker x2 ({1}{B}), Collective Brutality ({1}{B}), Skirsdag High Priest ({1}{B}), Morbid Opportunist is {2}{B} so it is outside this count. The earlier version of this claim was corrected during the grill: it counted Eaten Alive x2 (really {3}{B}+{B} = 5 mana without fodder) and The Meathook Massacre (at X=0 its ETB is -0/-0 and kills nothing). At 17 lands, P(2-4 lands in the opening 7) is 0.794 and the goldfish reports 87% keepable hands. |
| `decapitation` | mitigation | Tree of Perdition is one copy and will be answered on sight, so the deck is built so Tree is a shortcut rather than a requirement. First, it comes back: Crawl from the Cellar x2 gives four rebuys for {B} each (two casts plus two flashbacks). Second, the kill does not need it: -7 from 20 decomposes as 2+2+3, 2+5, or seven 1s, and the list supplies Collective Brutality (-2/+2), Restless Bloodseeker x2 ({4}{B}: -2/+2, repeatable), Blood Artist x2 (-1/+1 per creature death, fed by 6 death-causing removal spells and combat), and Cryptolith Fragment x2 (-1, symmetric). Third, Skirsdag High Priest is a wholly separate win route: 'Create a 5/5 black Demon creature token with flying', repeatable every turn, needing no combo piece at all. Phase 6b weights this explicitly at 7 physical copies / 4.5 effective for the win_condition role. |
| `gas-out` | mitigation | Corrected during the grill, which established that the Blood token ('{1}, {T}, Discard a card, Sacrifice this token: Draw a card') is card-NEUTRAL filtering, not refuel. The real answers are: Morbid Opportunist ('Whenever one or more other creatures die, draw a card'), a free card per turn at this list's death rate; Crawl from the Cellar x2, whose Flashback {3}{B} is a genuinely net-positive second card from an already-spent one; Sever the Bloodline's Flashback {5}{B}{B}, likewise; Haunted Dead, which returns ITSELF from the graveyard; and Skirsdag High Priest, which produces a 5/5 flier per turn from zero cards — the deck's answer to an empty hand is a board that keeps growing without one. Net-positive-card count: 4 of 23 (Morbid Opportunist, Crawl from the Cellar x2, Sever the Bloodline), plus 2 self-recurring permanents. |
| `raced` | accepted | Against this cube's fastest clocks a 17-land control deck whose combo lands on turn 7 will sometimes die on turn 6. Mitigating further would mean cutting dials for cheap blockers, which is the separate Aristocrats Dialer build — this deck's identity is that its interaction and its win condition are the same cards, and trading dials for walls dissolves that. Two axes, stated separately. On the ground: Tree of Perdition's 0/13 body walls essentially every creature in the cube for free, and the sideboard carries eight dedicated anti-ground cards (Wild-Field Scarecrow x2 'Defender' 1/4, Sanitarium Skeleton x2 recurring chumps, Gluttonous Guest x2 1/4, Murderous Compulsion x2). In the air, against the cube's 58 evasive cards (density 0.209), the maindeck answer is Haunted Dead's 1/1 flying Spirit and Skirsdag High Priest's repeatable 5/5 flying Demons — added at Phase 9 precisely because the pre-grill list had zero fliers and zero reach, which was a blind spot, not an accepted cost. |
| `disruption-fizzle` | mitigation | The critical turn is the upkeep on which Tree is activated in response to the Triskaidekaphobia trigger. That sequencing IS the protection: Tree's ability carries no timing restriction, so the opponent must answer Tree at instant speed with the trigger already on the stack — and if they do, the trigger still resolves and the game continues with Trisk on the battlefield. Nothing is lost but the turn, and Crawl from the Cellar rebuys Tree for {B}. Collective Brutality's escalate mode ('You choose an instant or sorcery card from it. That player discards that card') is the proactive answer, stripping the interaction before the turn arrives. A counterspell on Triskaidekaphobia costs one of two copies, not the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Heartless Summoning | ANTI-SYNERGY: 'Creatures you control get -1/-1' makes Tree of Perdition a 0/12, so its exchange sets the opponent to 12, not 13, and Triskaidekaphobia never fires. Its cost-reduction clause would apply to 10 of this list's 23 nonland cards, but no count rescues a card that turns the deck's kill number off. |
| Demonic Taskmaster | ANTI-SYNERGY: 'At the beginning of your upkeep, sacrifice a creature other than this creature' is mandatory. This list runs 10 creatures, but on the turns that matter the board is often Tree alone, and Tree is 1 of 1 copies of combo half A. |
| Griselbrand | 'Pay 7 life: Draw seven cards' is a 7-point self-dial; from 20 that lands on exactly 13, and Triskaidekaphobia has no controller exemption. Also {4}{B}{B}{B}{B} at 17 lands, and it would need a rare/mythic slot in a budget of 5 that is now fully spent. |
| Skirsdag High Priest | CUT AT 5A, RECOVERED AT PHASE 9. The original cut was a blanket rare-budget group reason with no count, which the Challenger correctly flagged. Recount: 'Morbid - {T}, Tap two untapped creatures you control: Create a 5/5 black Demon creature token with flying' is payable off this list's 10 creatures, and morbid is live off the 6 nonland cards that cause a creature to die. It is now the 5th and last rare/mythic and the deck's only repeatable answer to the cube's 58 evasive cards (density 0.209). |
| Captivating Vampire | 'Tap five untapped Vampires you control' - this list contains 4 Vampires (Blood Artist x2, Restless Bloodseeker x2) of 23 nonland cards, so the ability is unpayable by one short, and the static '+1/+1 to other Vampires' buffs a 0/1 and a 1/3 that never attack. |
| Metallic Mimic | 'Each other creature you control of the chosen type enters with an additional +1/+1 counter' - the largest creature type in this list is Vampire at 4 of 10 creatures, and +1/+1 counters on blockers that already survive the relevant attacks convert to zero damage. |
| Voldaren Bloodcaster // Bloodbat Summoner | 'if you control five or more Blood tokens, transform this creature' - this list's only Blood sources are Restless Bloodseeker x2, whose own trigger is gated on having gained life, so the realistic Blood count is 1-2 of the 5 required. The front face is a flying 2/1, which the recovered Skirsdag High Priest beats as an air answer at the same rare cost. |
| Gravecrawler | 'This creature can't block' in a deck whose plan is blocking, and 'You may cast this card from your graveyard as long as you control a Zombie' reads a Zombie count of 1 of 10 creatures in the finished list (Haunted Dead alone). |
| Midnight Scavengers | 'return target creature card with mana value 3 or less' - Tree of Perdition is mana value 4, so the single recursion target that matters is outside its range. Crawl from the Cellar was taken instead: no mana-value restriction, costs {B}, and has flashback for a second use. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.19 adj [MV 2.61 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] commons/uncommons max 2 copies: PASS - highest count across the 50-card pool is 2; verified by Phase 5C check 3
[PASS] rares/mythics max 1 copy each: PASS - Tree of Perdition, Collective Brutality, Invasion of Innistrad, The Meathook Massacre, Skirsdag High Priest, one each
[PASS] max 5 rares/mythics across MB+SB: PASS - 5 used, all mainboard; sideboard contains zero rares or mythics. At the cap, zero headroom
[PASS] cross-board copy totals: PASS - Sever the Bloodline is uncommon, 1 mainboard + 1 sideboard = 2
[PASS] basic lands exempt (format-supplied): PASS - 17 Swamps
[PASS] all cards from the cube mainboard or basics: PASS - verified by Phase 5C check 2 (exact-name membership)
```