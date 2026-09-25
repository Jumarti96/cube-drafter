---
deck_name: "rw-argosy-vehicles-tempo"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RW"
format: "40-card"
built_at: "2026-08-19T14:00:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x1   Crystal Grotto           ETB scry 1; {C}, or any colour for {1} extra
  x2   Sacred Peaks             RW dual, enters tapped (only free WR dual in cube)
  x4   Mountain                 
  x10  Plains                   
```

### CREATURES (10)

```
CMC  Card                     Qty   Color Role                                Rar
  2  Resolute Reinforcements  x2    W     Enabler                             U
  2  Samite Herbalist         x1    W     Enabler                             C
  3  Argivian Cavalier        x2    W     Enabler                             C
  3  Automatic Librarian      x2    C     Enabler                             C
  4  Astor, Bearer of Blades  x1    RW    Engine                              R
  4  Serra Paragon            x1    W     Payload/Payoff + Engine             M
  5  Danitha, Benalia's Hope  x1    W     Payload/Payoff                      R
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                     Qty   Color Role                                Rar
  2  Destroy Evil             x1    W     Interaction                         C
  2  Lightning Strike         x2    R     Interaction                         C
  2  Take Up the Shield       x1    W     Interaction/Protection              C
  3  Hurloon Battle Hymn      x1    R     Interaction                         U
```

### OTHER SPELLS (8)

```
CMC  Card                     Qty   Color Role                                Rar
  1  Vanquisher's Axe         x2    C     Engine/Infrastructure               C
  2  Hero's Heirloom          x2    C     Engine/Infrastructure               U
  2  Weatherlight Compleated  x1    C     Payload/Payoff                      M
  3  Citizen's Arrest         x2    W     Interaction                         C
  4  Golden Argosy            x1    C     Payload/Payoff + Engine             R
```

## SIDEBOARD (10)

```
Card                     Qty   Color Role / When to board in             Rar
Flowstone Infusion       x1    R     {R} instant, 'Target creature get~  C
Destroy Evil             x1    W     Interaction - enchantment removal~  C
Knight of Dawn's Light   x2    W     2-drop 2/2 first strike blocker     U
Smash to Dust            x2    R     artifact removal                    C
Take Up the Shield       x1    W     Interaction/Protection - MAINDECK~  C
Hurloon Battle Hymn      x1    R     Interaction - 4 damage to a creat~  U
Prayer of Binding        x2    W     flash exile of any nonland perman~  U
```

## ANALYSIS

### DECK IDENTITY

RW Vehicles Tempo. The kill is a small number of artifact threats the pool's removal is badly shaped to answer, funded by a repeatable enter-the-battlefield engine. Golden Argosy attacks as a 3/6 and 'exile[s] each creature that crewed it this turn. Return them to the battlefield tapped' - so the crew must be REAL cards with re-triggerable ETBs, never tokens, because an exiled token ceases to exist. Argivian Cavalier, Resolute Reinforcements and Automatic Librarian are that crew: each pays crew 1 by itself and re-fires its ETB every attack, minting a Soldier or a scry 2 per turn for free. Samite Herbalist is the fourth crew slot and works on a different axis - 'Whenever this creature becomes tapped, you gain 1 life and scry 1' triggers on CREWING, so it pays off both Vehicles and every attack without needing the 1-of Argosy at all. Weatherlight Compleated is a {2} 5/5 flier that Astor's 'Vehicles you control have crew 1' switches on - it prints no crew ability of its own - and while uncrewed and below four phyresis counters it is not a creature, so the cube's sorcery-speed removal cannot touch it. Serra Paragon rebuys the crew fuel from the graveyard. Danitha, Benalia's Hope closes, arriving pre-equipped off her own ETB.

### THE RULE THAT DEFINES THIS BUILD: NEVER CREW WITH A TOKEN

Golden Argosy reads *"Whenever Golden Argosy attacks, exile each creature that crewed it this turn. Return them to the battlefield tapped under their owner's control at the beginning of the next end step."* A token that is exiled ceases to exist and never returns. So the Argosy engine only works if the crew is a **real card whose enter-the-battlefield ability re-fires**, and the tokens the deck makes are the profit, not the fuel. This is the finding that decided which of the three Step-0 sketches was built: one sketch proposed crewing with Squee's Goblin tokens, and it is wrong three ways — the token never returns, Squee's tokens arrive *"tapped and attacking"* while crew requires tapping **untapped** creatures, and tapping Squee itself makes no token since the trigger is *"whenever Squee attacks."*

The four crew slots, and what each re-fires every attack:

| Crew | Oracle clause re-fired | Value per attack |
|---|---|---|
| Argivian Cavalier x2 | "create a 1/1 white Soldier creature token" | a body |
| Resolute Reinforcements x2 | "create a 1/1 white Soldier creature token" | a body |
| Automatic Librarian x2 | "scry 2" | selection |
| Samite Herbalist x1 | "Whenever this creature becomes tapped, you gain 1 life and scry 1" | life + selection |

Samite Herbalist is the odd one and the best one: it composes on **crew tapping the creature**, not on an ETB, so it pays off both Vehicles *and* every attack, and unlike the other three it does not need the singleton Golden Argosy on the battlefield at all.

Two cards look like better crew and are traps: Cleaving Skyrider and Keldon Strike Team both have kicker-gated ETBs (*"if it was kicked"*), and a creature returning from exile was never **cast**, so it was never kicked.

### WEATHERLIGHT'S REMOVAL-DODGE IS A PHASE, NOT A PROPERTY

Uncrewed and below four phyresis counters, Weatherlight Compleated is **not a creature** and is not a legal target for any of the sorcery-speed creature removal this pool is built on. But the fourth counter flips it into a creature permanently via a static ability, and counters do not come off. The protection is one-way and self-terminating — and it ends precisely when the card becomes a 5/5 flying attacker, which is the trade the deck wants. It is weighted 0.5 in the assembly check for exactly this reason.

### HERO'S HEIRLOOM IS BETTER HERE THAN ON A CREATURE DECK

Its rider is *"As long as equipped creature is legendary, it has trample and haste."* This deck has only two legendary **creature** cards (Astor, Danitha) — but Golden Argosy and Weatherlight Compleated are both `Legendary Artifact — Vehicle`, and crewing makes them creatures, which makes them legal Equipment targets. **Hero's Heirloom on a crewed Golden Argosy is a 5/7 with trample** — on the exact body whose whole job is connecting to fire its attack trigger. On a crewed Weatherlight it is a 7/6 flying trample.

### SERRA PARAGON IS A REBUY, NOT A DRAW STEP

*"Once during each of your turns, you may play a land from your graveyard or cast a permanent spell with mana value 3 or less from your graveyard."* One cast per turn, at full mana cost, permanents only. Legal targets in this list: **8 of the 15 distinct nonland cards** — Vanquisher's Axe, Hero's Heirloom, Weatherlight Compleated, Resolute Reinforcements, Samite Herbalist, Argivian Cavalier, Automatic Librarian and Citizen's Arrest — plus all 17 lands. Rebuying Citizen's Arrest, an unconditional exile effect, is its best line; rebuying Weatherlight Compleated is the deck's answer to having its cheapest threat destroyed.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:2  2:10  3:7  4:3  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.5: Weatherlight Compleated@0.5) → p=0.90 (need ≥ 0.75)
  PASS  enabler: 7 copies → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 37%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. The only sweeper effects castable in R or W in this pool are Karn's Sylex and The Elder Dragon War, both rares, and the 5-rare budget is spent entirely on the Vehicle/Equipment package (Astor, Golden Argosy, Weatherlight Compleated, Danitha, Serra Paragon). Against a wide board the deck blocks with Golden Argosy as a 3/6 and grinds with the Argosy ETB loop rather than answering the width; Smash to Dust x2 in the sideboard is the one-sided 1-damage answer ('each creature your opponents control').
  OK        single_large_threat: Citizen's Arrest, Hurloon Battle Hymn, Lightning Strike, Destroy Evil
  OK        noncreature_permanents: Destroy Evil, Citizen's Arrest
  CONCEDED  stack: No counterspell or other stack interaction exists in red or white anywhere in this cube pool. This deck's substitute is that its primary threat is not a creature at rest - Weatherlight Compleated is only a creature while crewed or at four-plus phyresis counters - so it cannot be answered on the opponent's turn by the sorcery-speed removal the pool is built on.
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards in the entire 266-card cube, so there is no card to declare in any colour.
```

- No WARN-tier flags raised. Curve PASS (1:2 2:10 3:7 4:3 5:1) and goldfish PASS (87% keepable vs 80% needed; 88% three-lands-by-turn-3). The low T1 play rate is expected and accepted: the only 1-MV card is Vanquisher's Axe x2, because the lens is card advantage and the thesis turn is 6, not 5.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Serra Paragon is a per-turn mana sink that converts a surplus land into a permanent: 'Once during each of your turns, you may play a land from your graveyard or cast a permanent spell with mana value 3 or less from your graveyard' - 8 of the 15 distinct nonland cards qualify (corrected count), plus all 17 lands. Equip {2} (or {1} with Astor) relocates an Equipment every turn indefinitely across 4 Equipment copies. Crystal Grotto's '{1}, {T}: Add one mana of any color' absorbs a mana whenever colour is the constraint. Hurloon Battle Hymn's kicker {W} converts a spare white source into 4 life. |
| screw | mitigation | The most selection-dense of the three builds, deliberately, at a 17-land 2.61-avg-MV curve: Automatic Librarian x2 'When this creature enters, scry 2' - and Golden Argosy re-fires that ETB on every attack; Samite Herbalist 'Whenever this creature becomes tapped, you gain 1 life and scry 1', which fires on every crew and every attack; Crystal Grotto 'When this land enters, scry 1'; Astor's 'look at the top seven cards of your library'. Goldfish reports 87% keepable and 88% three-lands-by-turn-3. NOTE, per the Challenger: Weatherlight Compleated's scry-1-on-creature-death is NOT counted here, because this deck has no sacrifice outlet and its own engine exiles rather than kills, so that source is not deck-controlled. |
| decapitation | mitigation | This is the build's sharpest exposure and it is answered structurally rather than denied. Every one of the five rares is a singleton, so no single card may be required - and none is: Golden Argosy prints its own Crew 1 and does not need Astor; the four crew-fuel cards (7 copies, p=0.92 by turn 6) generate the value engine with no rare on the battlefield at all, and Samite Herbalist specifically pays off with no Vehicle in play; and Serra Paragon recasts Weatherlight Compleated (MV 2) from the graveyard if it is destroyed. What genuinely dies with Astor is Weatherlight's attack mode, which is why Weatherlight is weighted 0.5 in assembly and the payoff role still clears at p=0.90 without it. Take Up the Shield is maindecked and a second copy is in the sideboard. |
| gas-out | mitigation | Six cards produce more board than they cost a card: Resolute Reinforcements x2 and Argivian Cavalier x2 each arrive as two bodies, plus the two engines below. Serra Paragon adds one graveyard recast per turn across 8 qualifying cards. STATED WITH THE CHALLENGER'S CORRECTION: the pre-repair entry headlined 'the Argosy loop is the answer', which overstates - Golden Argosy is a singleton at p=0.325 by turn 6, and p=0.550 for at least one of Argosy-or-Serra-Paragon. What actually carries this entry is the four-copy token base (Resolute Reinforcements x2, Argivian Cavalier x2), which refuels with an empty hand whether or not the Argosy is ever drawn; the Argosy loop is upside layered on top, not the floor. |
| raced | mitigation | Unlike the aggro builds this deck can afford to block, and does. Golden Argosy is crewable at instant speed, so it blocks as a 3/6 - the largest toughness in either board. Danitha is a 4/4 first strike / vigilance / lifelink, which attacks and blocks in the same turn. The lifegain axis is repeatable: Samite Herbalist gains 1 on every crew and every attack, Hurloon Battle Hymn kicked gains 4, Danitha's lifelink scales with the Equipment, Take Up the Shield grants lifelink for a turn, and Knight of Dawn's Light in the sideboard makes every one of those gain 1 more. Six interaction cards (26.1%) sit inside the tempo band. |
| disruption-fizzle | mitigation | REWRITTEN after Challenger F1, which identified a genuine RULES ERROR in the previous entry. The deleted claim asserted that a removal spell aimed at the crewing creature in response to Golden Argosy's attack trigger would fizzle. That is backwards: the removal spell goes on the stack ABOVE the trigger and resolves FIRST, killing the crewer while it is still on the battlefield; the trigger then finds nothing to exile, so the creature is never exiled and never returns. Responding to the trigger is the opponent's best window, not their worst. The corrected entry: (1) Weatherlight Compleated uncrewed and below four phyresis counters is not a creature and is not a legal target for creature removal - the opponent must answer it at instant speed or not at all; (2) Take Up the Shield is now MAINDECKED and is the actual answer to the removal-in-response window - 'gains lifelink and indestructible until end of turn' is live against the 9 'destroy target' effects in the 271-card pool; (3) Resolute Reinforcements has Flash, so crew fuel can be deployed after the opponent has committed interaction; (4) the Equipment survive any answer aimed at the creature holding them and re-attach for {2}, or {1} with Astor. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Valiant Veteran | RARE, no budget left - all 5 are spent on the Vehicle/Equipment package. Its anthem would hit every Soldier token the Argosy loop mints, but displacing Astor, Argosy, Weatherlight, Serra Paragon or Danitha costs the deck its identity. |
| Serra Redeemer | RARE, no budget. Raised by the Challenger with an exact compose: Argosy's crew 'return[s] to the battlefield', which is an ENTERS event, so every returning crewer would gain two permanent +1/+1 counters. Contested because the only honest displacement is Serra Paragon, and MV 5 with {W}{W} against a 2.61 avg MV is a worse trade than the recursion it would replace. |
| Squee, Dubious Monarch | RARE. Proposed by the rejected Sketch D as free Argosy crew - which the shape judge showed is wrong three ways: an exiled token never returns, Squee's tokens arrive 'tapped and attacking' while crew requires tapping UNTAPPED creatures, and tapping Squee itself produces no token since the trigger is 'whenever Squee attacks'. |
| Baird, Argivian Recruiter | Raised by the Challenger as an absence with a valid count - 4 Equipment copies satisfy its 'power greater than its base power' clause, and it is legendary and NOT rare, so it would add a fifth Hero's Heirloom carrier for free. Contested on slots: every card it would displace is either crew fuel or one of the 6 interaction slots. |
| Mesa Cavalier | Was the fourth crew-fuel slot pre-grill; cut in Phase 9 for Samite Herbalist, whose 'Whenever this creature becomes tapped' triggers on CREWING rather than on an ETB and so pays off both Vehicles without needing the 1-of Argosy. |
| Jaya's Firenado | Sideboard consideration, cut per the Challenger: only 20 of 157 pool creatures have toughness 5 or greater, and Destroy Evil already answers all 47 with toughness 4 or greater at {1}{W} instant speed. Replaced by Flowstone Infusion. |
| Cleaving Skyrider | A TRAP as Argosy crew, recorded because it looks like fuel: a creature returning from exile was not CAST, so its kicker-gated ETB ('if it was kicked') does nothing on the return. Same for Keldon Strike Team. |
| Salvaged Manaworker | A colourless 1/3 that crews 1 and adds a fixing source against the three double-W cards, but it has no ETB, so an Argosy return gains nothing - it is legal crew that is not profitable crew. |
| Relic of Legends | Any-colour fixing with no surcharge (unlike Crystal Grotto) and a second mode tapping Astor or Danitha, but it competes for the 3-slot, already the deck's heaviest bucket at 7 of 23. |
| Yotia Declares War | The explicit artifact-matters card: chapter II 'Tap any number of untapped artifacts you control... deals that much damage' scales off the 8 colourless artifact copies here. Excluded because read-ahead Saga sequencing is slow for a tempo posture and chapter I's 0/2 Thopter cannot crew 1 alone. |
| Inscribed Tablet | A turn-1 artifact that later converts to a land (screw) or a card (flood), covering both ends of the variance this deck concedes - but it produces no body and the deck's contested turns are 4 through 6. |
| Prayer of Binding | Maindeck consideration, sideboarded. The only effect in either board that answers ANY nonland permanent type at flash speed, but MV 4 competes with Astor and Golden Argosy on the deck's most contested turn. |
| Temporary Lockdown | RARE and anti-synergistic - it would exile the deck's own Weatherlight Compleated (MV 2), Vanquisher's Axe, Hero's Heirloom, Resolute Reinforcements and every Soldier token. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.15 adj [MV 2.61 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  21.1%  prod  41.2%  gap -20.1pp  [OK]
  W  demand  78.9%  prod  76.5%  gap  +2.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard - every card verified present in working_pool.json by exact name
commons_uncommons_max_2: PASS - no common or uncommon exceeds 2 copies across main+side (Destroy Evil 1+1, Take Up the Shield 1+1, Hurloon Battle Hymn 1+1, all at the cap)
rares_mythics_max_1: PASS - all five are single copies
rare_mythic_card_cap_5: PASS - exactly 5, all mainboard: Astor, Bearer of Blades / Danitha, Benalia's Hope / Golden Argosy / Serra Paragon / Weatherlight Compleated. Sideboard contains ZERO rares or mythics.
basics: Plains x10, Mountain x4 - format-supplied, exempt
colour: All 23 nonland cards return a usable mode from effective_cost.best_mode(card, ['R','W'], []); no splash
```
