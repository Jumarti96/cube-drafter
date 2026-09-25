---
deck_name: "wub-anomaly-mill"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WUB"
format: "40-card"
built_at: "2026-08-07T21:39:51Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  7x Island
  1x Plains
  1x Swamp
  1x Command Bridge   This land enters tapped. When this land enters, sacrifice it unless yo
  2x Contaminated Aquifer   ({T}: Add {U} or {B}.) This land enters tapped.
  1x Godless Shrine   ({T}: Add {W} or {B}.) As this land enters, you may pay 2 life. If you
  2x Idyllic Beachfront   ({T}: Add {W} or {U}.) This land enters tapped.
  1x Sunlit Marsh   ({T}: Add {W} or {B}.) This land enters tapped.
  1x Watery Grave   ({T}: Add {U} or {B}.) As this land enters, you may pay 2 life. If you
```

### CREATURES (4)

```
CMC  Card                     Qty   Color  Role                                                                                                                 Rar
  2  Chrome Companion         x1    C      Lifegain — 1 life per tap, and the deck's graveyard answer                                                           C
  5  Quantum Riddler          x1    U      Finisher — 4/6 flier that draws, and draws extra on an empty hand                                                    M
  5  Starbreach Whale         x2    U      Finisher/dig — 3/5 flier whose ETB surveil 2 also digs toward the kill; warp {1}{U} deploys it early                 C
```

### INSTANTS & SORCERIES (15)

```
CMC  Card                     Qty   Color  Role                                                                                                                 Rar
  2  Consult the Star Charts  x1    U      Dig — looks at as many cards as you have lands, kicker doubles it                                                    R
  2  Depressurize             x2    B      Interaction — 2-mana instant that kills any creature with power 3 or less                                            C
  2  Divert Disaster          x2    U      Interaction — soft counter whose Lander token comes to YOU, so it is also the deck's ramp toward the 6-mana Rupture  C
  2  Mental Modulation        x2    U      Dig — 1-mana cantrip on your turn that also taps a creature, turning on Radiant Strike                               C
  3  Unravel                  x2    U      Interaction — hard counter that replaces itself against a discounted spell                                           U
  4  Gravkill                 x2    B      Interaction — instant-speed exile                                                                                    C
  4  Radiant Strike           x1    W      Interaction/lifegain — destroy an artifact or tapped creature, gain 3                                                C
  4  Space-Time Anomaly       x1    UW     Payoff — mills the opponent for your entire life total                                                               R
  5  Cerebral Download        x1    U      Dig — surveil X then draw three at instant speed                                                                     U
  6  Singularity Rupture      x1    BU     Payoff — a wrath that also mills half their library                                                                  R
```

### OTHER SPELLS (4)

```
CMC  Card                     Qty   Color  Role                                                                                                                 Rar
  1  Nutrient Block           x2    C      Lifegain — indestructible Food, 3 life and a card                                                                    C
  3  Dubious Delicacy         x2    B      Lifegain/removal — flash -3/-3, then 3 life or 3 drain                                                               U
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                                                                                      Rar
Annul                    x2    U      vs the 74-card artifact class and 16 enchantments — a 1-mana hard counter for both                                           U
Seam Rip                 x2    W      vs fast MV<=2 starts                                                                                                         U
Emergency Eject          x2    W      vs resolved noncreature permanents — INSTANT speed, so it does not fight the counterspell plan the way Banishing Light does  U
Sinister Cryologist      x2    U      vs aggro — a 2/3 blocker that shrinks an attacker on entry                                                                   C
Lost in Space            x2    U      vs recursive threats — library, not graveyard, and it surveils                                                               C
```

## ANALYSIS

### DECK IDENTITY

A blue-based WUB control deck that wins by decking the opponent. Singularity Rupture is both a wrath and half the kill — 'Destroy all creatures, then any number of target players each mill half their library'. Space-Time Anomaly then mills a number equal to YOUR life total, so the Food and lifegain package is not defence, it is ammunition: every point of life is literally another card milled. Against a 40-card opponent whose library is 29 cards at your turn five, Rupture leaves 14 and Anomaly at 13 or more life mills past what remains. The deck holds counterspells up, answers what resolves, and digs with 6 selection effects because both halves of the kill are single-copy rares. CAST RUPTURE FIRST — see kill_arithmetic; the natural curve order is four turns worse.

### THE KILL IS REAL ARITHMETIC — AND THE ORDER MATTERS BY FOUR TURNS

A 40-card opponent opens 7 and draws one per turn, so at **your** turn N their library is 34 − N.

| | Library |
|---|---|
| Your T6: **Singularity Rupture** into 28 | mills 14 → **14 left** |
| Their T6 draw | 13 left |
| Your T7: **Space-Time Anomaly** at 13+ life | mills the rest |
| Their T7 draw | **draws from an empty library — loses** |

You need **13 life**, not 20+. Starting 20 minus 4 for both shocklands is 16, so the lifegain package is margin,
not a prerequisite.

Now the wrong order — which is the *natural* one, because Anomaly costs 4 and Rupture costs 6:

| | Library |
|---|---|
| Your T6: Anomaly at 20 life into 28 | **8 left** |
| Their T6 draw | 7 left |
| Your T7: Rupture into 7 | mills 3 → **4 left** |
| | they deck on turn **11** |

**Rupture takes half of a large library; Anomaly's number is fixed.** Cast the expensive one first. This is the
single most important play rule for the deck and it was not in the build record until the grill derived it.

### THE SWEEPER KILLS YOUR OWN BACKUP PLAN

`Destroy all creatures, then any number of target players each mill half their library.`

That "all creatures" includes yours — all 4 creature copies, and 3 of the 5 cards in the declared finisher role
(Quantum Riddler, Starbreach Whale ×2). The build's failure modes had `raced` naming Rupture as the mitigation and
`decapitation` naming the fliers as the fallback; the two cancelled each other and nothing in the record said so.

The play consequence is a fork, not a fix: **Rupture is the mill line's opener and the evasive line's ender.** If
you have fliers down and are winning in the air, holding Rupture is correct even against a board you would rather
sweep.

### WHY THIS DECK RUNS SIX SELECTION EFFECTS

Both halves of the kill are single-copy rares, and no card in this pool tutors a sorcery. The raw odds of seeing
both by turn 8 are **13.5%**; crediting the full dig package it is about **35%**.

So in roughly two games in three the mill kill is simply not available. That is why the finisher role is declared as
the union of two routes rather than as the mill alone — the deck wins by milling when it finds the halves and by
flying over when it does not. That is a weaker claim than "a mill deck," and it is the true one.

It is also why Codecracker Hound was cut during the grill: `look at the top two cards... Put one into your hand and
the other into your graveyard` is **mandatory**, and with no sorcery recursion in these colours it can bury the game.

### THE MANA IS THE PRICE OF ADMISSION

Space-Time Anomaly is `{2}{W}{U}`. Singularity Rupture is `{3}{U}{B}{B}`. The two halves of the kill demand
different colour pairs, so three colours is not a choice.

The cube charges for it: of the 8 nonbasic lands here, **6 enter tapped**. Only Watery Grave and Godless Shrine can
come in untapped, both are rares, and together they eat a third of the entire 6-card rare budget. There is no third
untapped-capable WUB dual in the pool and no untapped WU dual at all.

And the shocklands have a second cost unique to this deck: paying 2 life twice is **4 fewer cards milled**.

### KNOWN THIN SPOTS

- **38% turn-1 play**, by far the lowest in the run — three colours, five always-tapped duals, and only
  2 one-mana cards. It got *worse* during the grill: cutting Cryoshatter for Depressurize ×2 answered the aggro
  matchup but cost 13 points of turn-1 play. Turn 2 is fine at 93%.
- **Zero mainboard answers to a resolved noncreature permanent.** The deck counters them instead; Emergency Eject ×2
  boards in at instant speed.
- **One mainboard graveyard answer** (Chrome Companion) against a 31-card graveyard class, in a deck whose plan puts
  25+ cards in the opponent's yard. Lost in Space ×2 boards in and puts threats in the *library* instead.
- **No creature before turn 5 that stays.** Cutting Codecracker Hound ×2 removed the only sub-4-mana creature; the
  four remaining creature copies cost 2, 5, 5, 5, and the Whales exile themselves if warped.
- **Haliya, Guided by Light is the best card not in this deck.** Repeatable lifegain is repeatable mill here. It
  needs a rare slot and the budget is exactly 6/6.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:4  4:4  5:4  6:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  finisher: 5 copies (effective 3.8: Quantum Riddler@0.6, Starbreach Whale@0.6, Starbreach Whale@0.6) → p=0.78 (need ≥ 0.75)
  PASS  lifegain: 6 copies → p=0.91 (need ≥ 0.75)
  PASS  dig: 6 copies (effective 4.2: Mental Modulation@0.6, Mental Modulation@0.6, Starbreach Whale@0.5, Starbreach Whale@0.5) → p=0.81 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 38%  T2 93%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Singularity Rupture, Dubious Delicacy
  OK        single_large_threat: Gravkill, Dubious Delicacy, Singularity Rupture, Unravel, Divert Disaster, Radiant Strike
  CONCEDED  noncreature_permanents: The mainboard has NO answer to a resolved noncreature permanent — Radiant Strike reaches artifacts only, and Gravkill reaches creatures and Spacecraft only. The two counterspells (Divert Disaster x2, Unravel x2) answer them on the stack instead, which is the genuine plan for a deck holding up mana every turn, and Emergency Eject x2 comes in from the sideboard: 'Destroy target nonland permanent' at INSTANT speed, which does not fight the counterspell plan. Banishing Light was rejected for the maindeck AND for the board because it is sorcery-speed in a deck whose entire game is holding mana up.
  OK        stack: Unravel, Divert Disaster
  OK        graveyard: Chrome Companion
```

- No WARN-tier flags: curve PASS and goldfish PASS (keepable 83.7%, 88.1% three lands by turn 3). Turn-1 play is 37.8%, the lowest in the run by a wide margin, and turn-2 play is 92.9%.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana has somewhere to go every turn: Consult the Star Charts has 'Kicker {1}{U}' that doubles the cards it puts in hand, so a flooded turn upgrades it; Nutrient Block x2 and Dubious Delicacy x2 each turn {2} into 3 life, which in THIS deck is 3 more cards milled by Space-Time Anomaly rather than just life; Cerebral Download is a 5-mana instant that can be held; Flood is also the failure this deck minds least — it is the deck in the run whose plan most wants to reach 7+ lands. |
| screw | accepted | This deck keeps the worst two-land hands in the run and cannot fix it without abandoning three colours. Only 2 of 23 nonland cards cost 1, and 5 of the 7 dual copies always enter tapped. The cost of mitigating is the colour requirements themselves: Space-Time Anomaly is {2}{W}{U} and Singularity Rupture is {3}{U}{B}{B}, so the deck cannot cut a colour without cutting half its kill, and the pool contains no third untapped-capable WUB dual and no untapped WU dual at all. STATED AGAINST THE DECK (Challenger round 2): turn-1 play is 37.8%, DOWN from 50.7% before the grill — the raced repair cut Cryoshatter, the deck's only one-mana blue card, to make room for Depressurize x2. A repair made to answer aggro made turn one worse. The compensation is real but is on a different turn: turn-2 play rose from 84.6% to 92.9%, and Depressurize actually kills an attacker where Cryoshatter needed it to tap or take damage first. Keepable hands are 83.7% and the goldfish check still PASSes. |
| decapitation | mitigation | The 'key piece' here is a single-copy sorcery that spends itself on resolution, so it cannot be answered on sight the way a permanent can — only countered. Against that, Unravel x2 and Divert Disaster x2 protect the critical cast, and the deck holds them up by default. If Space-Time Anomaly is countered outright, the backup route is intact: Quantum Riddler and Starbreach Whale x2 are 3 evasive bodies, which is why the finisher role was declared as the union of both routes rather than as the mill alone. ADDED AFTER THE GRILL: this mode addressed only the OPPONENT answering a kill piece. The deck can also decapitate ITSELF — that was the case for cutting Codecracker Hound x2, whose 'put the other into your graveyard' is mandatory and could bury a singleton kill piece with no recursion available in these colours. |
| gas-out | mitigation | Six selection effects across four names, which exist because the deck must find two cards it can legally run one copy of each: Consult the Star Charts ('Look at the top X cards of your library, where X is the number of lands you control', doubled by its kicker), Cerebral Download ('Surveil X... Then draw three cards' at instant speed), and Mental Modulation x2 and Starbreach Whale x2, which replace themselves and filter respectively. Quantum Riddler adds 'As long as you have one or fewer cards in hand, if you would draw one or more cards, you draw that many cards plus one instead' — it turns an empty hand into an advantage. CORRECTED: an earlier version of this entry named Codecracker Hound x2 and Uthros Scanship, both of which were cut during the grill repair. |
| raced | mitigation | REWRITTEN after Challenger marked the previous `accepted` UNSATISFIED. Two things were wrong with it. First, its stated cost — 'every creature slot competes with the seven selection effects' — was false, because Starbreach Whale x2 IS both a creature slot and a selection effect; the trade-off it called impossible had already been made twice. Second, its named mitigation did not survive oracle check: Singularity Rupture is a single 6-mana copy that also destroys this deck's own blockers, and the warp creatures cannot block at all. What the deck actually has now: Depressurize x2, a 2-mana instant killing any creature with power 3 or less, added for exactly this mode; Dubious Delicacy x2 with Flash for a -3/-3 at instant speed; Gravkill x2 for anything larger; Unravel x2 and Divert Disaster x2 to stop the threat before it lands; and 6 lifegain copies which, uniquely in this run, both extend the race and increase the number Space-Time Anomaly mills. Sinister Cryologist x2 comes in from the board as a hard-cast 2/3 that actually blocks. Stated plainly: this repair cost turn-1 play, which fell from 50.7% to 37.8% when Cryoshatter was cut for it. |
| disruption-fizzle | mitigation | The critical turn is casting Space-Time Anomaly, and the deck is built to protect it: Unravel x2 and Divert Disaster x2 are held up by default, and both mill halves are SORCERIES that resolve or do not — there is no mid-chain state to disrupt. If the Anomaly is countered, Singularity Rupture still halves their library and wraths the board on its own, and the evasive backup route is untouched. The genuine vulnerability is a graveyard-recursion opponent undoing the mill, which is what Chrome Companion answers in the mainboard and Lost in Space x2 answers from the sideboard by putting a threat into the LIBRARY rather than the graveyard. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Specimen Freighter | THE SHAPE JUDGE'S WEAK KEYSTONE, and it was named as a core keystone by ALL THREE sketches. 'Whenever this Spacecraft attacks, defending player mills four cards' requires it to ATTACK, which requires it to be a creature, which requires 9 charge counters from Station. In a control deck with 4 creature copies averaging 3 power that is three or four sorcery-speed Station activations after a {5}{U} cast. Below 9 counters it is not a creature, so it does not even block. Excluded — and its exclusion is why this deck's mill package is two cards rather than three. |
| Mechanozoa | A 5/5 for {4}{U}{U} with a tap-and-stun ETB, cut when Starbreach Whale x2 came in: the Whale flies (so it actually closes), costs one less, and its surveil 2 feeds the dig role the assembly gate was failing. |
| Haliya, Guided by Light | RARE. 'draw a card if you've gained 3 or more life this turn' is a genuine engine and the archetype's namesake fit, but the rare budget is exactly 6/6 and two of those slots are non-negotiable duals for a three-colour mana base. It is the first card to try if you free a rare slot. |
| Flight-Deck Coordinator | COUNT-DEPENDENT REJECTION. 'if you control two or more tapped creatures' — this deck runs 3 creature copies of 23 nonland cards and does not attack, so the condition is met rarely. It is a fine card in the two aggro builds in this run and close to blank here. |
| Beyond the Quiet | RARE. A second wrath ('Exile all creatures and Spacecraft') would be excellent, but Singularity Rupture already destroys all creatures AND is half the kill, and the rare budget cannot afford both. |
| Annul | SIDEBOARD. 'Counter target artifact or enchantment spell' is narrow game one, but the cube is 29.7% artifacts and 6.4% enchantments — 90 of 271 cards — so it is one of the best boarded 1-mana counters available. |
| Banishing Light | SIDEBOARD ONLY, deliberately. It is the only clean answer to a resolved noncreature permanent, but it is SORCERY-speed in a deck whose entire game is holding counterspells up on the opponent's turn. The mainboard concedes that class and answers it on the stack instead. |
| Vote Out | Convoke is dead here — the deck runs 3 creature copies, so it is a straight {3}{B} sorcery-speed removal spell competing with Gravkill's instant-speed exile. |
| Faller's Faithful | Removal on a body, but 'If that creature wasn't dealt damage this turn, its controller draws two cards' is a pure gift in a deck with zero damage sources — the same finding that removed it from the aristocrats build in this run. |
| Tragic Trajectory | Its Void mode is a one-mana -10/-10 and Void is live here (a nonland permanent leaving the battlefield is not restricted to yours). Cut for slots rather than for power — Gravkill's exile answers recursion this deck cannot otherwise beat. |
| Weftwalking | MYTHIC. 'shuffle your hand and graveyard into your library, then draw seven' is a real refuel, but 'The first spell each player casts during each of their turns may be cast without paying its mana cost' is SYMMETRIC and this deck is the one holding up counterspells — it hands the opponent a free spell every turn. |
| Mm'menon, the Right Hand | RARE. Casting artifacts off the top is powerful, but this deck runs 6 artifact copies of 23 nonland cards, so the ability would be live on roughly a quarter of its library. |
| Command Bridge (2nd copy) | 'sacrifice it unless you tap an untapped permanent you control' is a real cost for a deck that wants every permanent untapped for counterspells; one copy is the most this shell can absorb. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.13   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.17 adj [MV 3.13 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  30.8%  prod  41.2%  gap -10.4pp  [OK]
  U  demand  61.5%  prod  76.5%  gap -15.0pp  [OK]
  W  demand   7.7%  prod  35.3%  gap -27.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Mainboard count == 40                                    PASS (40)
Sideboard count == 10                                    PASS (10)
Every card exists in the cube pool by exact name         PASS
Commons/uncommons <= 2 copies                            PASS
Rares/mythics <= 1 copy                                  PASS
<= 6 rares/mythics TOTAL across MB+SB (lands count)      PASS (6/6)
   Space-Time Anomaly (R), Singularity Rupture (R), Quantum Riddler (M), Consult the Star Charts (R), Watery Grave (R), Godless Shrine (R)
Every nonland card usable in W/U/B                                  PASS
Splash cap                                               PASS (no splash colours declared)
Basic lands unrestricted (format-supplied)               PASS
```
