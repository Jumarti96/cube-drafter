---
deck_name: "rw-astor-equipment-aggro"
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
  x2   Sacred Peaks               RW dual, enters tapped (only free WR dual in cube)
  x7   Mountain                   
  x8   Plains                     
```

### CREATURES (15)

```
CMC  Card                       Qty   Color Role                                Rar
  1  Phoenix Chick              x2    R     Threat                              U
  2  Baird, Argivian Recruiter  x2    RW    Engine                              U
  2  Guardian of New Benalia    x1    W     Threat/Enabler                      R
  2  Resolute Reinforcements    x2    W     Enabler                             U
  2  Valiant Veteran            x1    W     Payload/Payoff                      R
  2  Yavimaya Steelcrusher      x1    R     Threat/Interaction                  C
  3  Argivian Cavalier          x1    W     Threat/Enabler                      C
  3  Cleaving Skyrider          x2    W     Threat/Reach                        U
  3  Keldon Strike Team         x2    R     Threat/Enabler                      C
  4  Astor, Bearer of Blades    x1    RW    Engine                              R
```

### INSTANTS & SORCERIES (2)

```
CMC  Card                       Qty   Color Role                                Rar
  2  Lightning Strike           x2    R     Interaction                         C
```

### OTHER SPELLS (6)

```
CMC  Card                       Qty   Color Role                                Rar
  1  Vanquisher's Axe           x2    C     Payload/Payoff                      C
  2  Hero's Heirloom            x2    C     Payload/Payoff                      U
  2  Weatherlight Compleated    x1    C     Payload/Payoff                      M
  3  Citizen's Arrest           x1    W     Interaction                         C
```

## SIDEBOARD (10)

```
Card                       Qty   Color Role / When to board in             Rar
Destroy Evil               x2    W     enchantment removal / kills tough~  C
Smash to Dust              x2    R     artifact removal                    C
Take Up the Shield         x1    W     indestructible + lifelink protect~  C
Anointed Peacekeeper       x1    W     3/3 vigilance body plus hand-insp~  R
Hurloon Battle Hymn        x2    R     4 damage to a creature/planeswalk~  U
Prayer of Binding          x2    W     flash exile of any nonland perman~  U
```

## ANALYSIS

### DECK IDENTITY

RW Equipment Aggro built around the cube's entire Equipment & Vehicle package. The deck deploys a wide board of cheap bodies and token-pairs by turn 3, then inflates whichever attacker is unblocked with Vanquisher's Axe (+2/+0) or Hero's Heirloom (+2/+1). Baird, Argivian Recruiter converts that power-above-base condition into a free 1/1 Soldier at every end step, and Astor, Bearer of Blades reduces equip to {1} so a single Equipment relocates every turn and also grants Weatherlight Compleated the crew ability it does not natively have. Enlist is a supporting mechanic here, not the headline: after the Phase 9 repairs the list runs 3 enlist cards (Guardian of New Benalia, Yavimaya Steelcrusher, Argivian Cavalier x1), down from 5, and the deck was renamed accordingly. Astor (1 copy) and Baird (2 copies) are amplifiers, not assembly requirements: the declared assembly roles are payoff (the four Equipment plus Weatherlight, p=0.76 by turn 5) and enabler (15 bodies, p=1.00), neither of which routes through Astor. Note the bucket labels differ by design: Equipment are Threats/Payoffs in slot_allocation and payoff in assembly; the Engine bucket holds only Baird and Astor.

### THE ARCHETYPE IS SIX CARDS DEEP

An exhaustive type-line scan of the 266-card cube returns the complete Equipment & Vehicles pool:

| Type | Cards | Max copies under the pool rules |
|---|---|---|
| Equipment | Vanquisher's Axe (C), Hero's Heirloom (U) | 4 |
| Vehicle | Golden Argosy (R), Weatherlight Compleated (M) | 2 |

There is no third Equipment and no third Vehicle. That is the single fact that shapes all three of these decks: the package cannot be a deck, it can only be a sub-theme inside a RW shell. This build runs 5 of the 6 (all but Golden Argosy) and is the one that leans on them hardest.

### BAIRD IS THE ENGINE THE PRIOR ANALYSIS MISSED

Baird, Argivian Recruiter: *"At the beginning of your end step, if you control a creature with power greater than its base power, create a 1/1 white Soldier creature token."* An attached Vanquisher's Axe (+2/+0) satisfies that condition permanently — a free 1/1 every turn for as long as the Equipment stays on. Counted against this 23-spell list, **7 cards create the condition**: Vanquisher's Axe x2 and Hero's Heirloom x2 (static, no combat needed), plus the three enlist bodies — Guardian of New Benalia, Yavimaya Steelcrusher, Argivian Cavalier — whose *"add its power to this creature's until end of turn"* is still live at the end step, which comes after combat. Valiant Veteran's anthem is an eighth source. Baird is RW, uncommon, and costs {R}{W}; it was absent from the archetype notes this build started from.

### ASTOR IS AN AMPLIFIER, NOT AN ASSEMBLY REQUIREMENT

This is deliberate and it is what the assembly gate measures. Astor has three clauses and this list makes all three live — *"Equipment you control have equip {1}"* covers 4 cards, *"Vehicles you control have crew 1"* covers 1, and the ETB dig-7 has 5 physical targets. But Astor is a single copy under the 5-rare cap, so the declared assembly roles route around it: payoff is the four Equipment plus Weatherlight (4.5 effective copies, p=0.76 by turn 5) and enabler is 15 bodies (p=1.00). With Astor answered on sight, the Equipment still function at their printed Equip {2}.

### WHY WEATHERLIGHT COMPLEATED IS IN A DECK THAT CANNOT RELIABLY CREW IT

Weatherlight Compleated prints **no crew ability at all**. It is a creature only *"as long as [it] has four or more phyresis counters,"* and counters arrive only *"Whenever a creature you control dies."* Astor grants it crew 1; without Astor it needs four of your own creatures to die. That is why it is reliability-weighted to 0.5 in the assembly check rather than counted as a full payoff copy. What earns the slot unconditionally is the other half of the same trigger: *"If it doesn't [have 7+ counters], scry 1."* This list trades 1/1 Soldier tokens and 2-power enlist bodies in combat every turn, so it is a mana-free repeating scry attached to a {2} card that eventually flips into a 5/5 flier.

### THE MANA IS THE REAL CONSTRAINT

`duals_by_pair.WR` in the cube dossier reads **free: 1, untapped-capable: 0**. WR is the worst-supported pair in the entire cube. That one dual is Sacred Peaks, which *"enters tapped"* — but it is a common, so 2 copies is the legal maximum and both are in. Crystal Grotto was rejected on a specific mechanism: *"{T}: Add {C}"* plus *"{1}, {T}: Add one mana of any color"* produces no coloured mana on turn 1 or 2 without an extra {1}, and this deck casts {R} (Phoenix Chick) on turn 1 and {R}{W} (Baird) on turn 2. The remaining 15 slots are basics.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:12  3:6  4:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.5: Weatherlight Compleated@0.5) → p=0.76 (need ≥ 0.75)
  PASS  enabler: 15 copies → p=1.00 (need ≥ 0.75)
  PASS  power_amplifier: 7 copies → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 57%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. The only sweeper effects castable in R or W in this pool are Karn's Sylex and The Elder Dragon War (both rares, and the 5-rare budget is spent) and Smash to Dust's 1-damage mode (sideboarded, where it is one-sided: 'each creature your opponents control'). The deck contests width by being the wider board - Resolute Reinforcements, Argivian Cavalier and kicked Keldon Strike Team each add a body without a card, and Baird adds one every end step - and by racing on a turn-5 clock.
  OK        single_large_threat: Citizen's Arrest, Lightning Strike
  OK        noncreature_permanents: Yavimaya Steelcrusher, Citizen's Arrest
  CONCEDED  stack: No counterspell or other stack interaction exists in red or white anywhere in this cube pool; the deck's answer is a turn-5 clock that forces the opponent to spend their own turn reacting.
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards in the entire 266-card cube, so there is no card to declare in any colour.
```

- No WARN-tier flags raised, before or after the Phase 9 repairs. Curve PASS (1:4 2:12 3:6 4:1) and goldfish PASS (88% keepable vs 80% needed; 88% three-lands-by-turn-3).


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Mana sinks that convert surplus lands into board, all mainboard: Equip {2} (or {1} with Astor) relocates an Equipment every turn indefinitely; Phoenix Chick x2 '{R}{R}... return this card from your graveyard to the battlefield tapped and attacking with a +1/+1 counter'; Valiant Veteran '{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control'. Two kickers also absorb mana: Keldon Strike Team {1}{W} x2 and Cleaving Skyrider {2}{R} x2, the latter scaling with the board ('X damage... where X is the number of attacking creatures'). |
| screw | mitigation | 16 of 23 spells cost 2 or less (4 at MV1, 12 at MV2), so a two-land hand deploys on curve; the goldfish check reports 88% keepable and 88% three-lands-by-turn-3. Card selection: Guardian of New Benalia 'Whenever this creature enlists a creature, scry 2', Weatherlight Compleated's scry-1 on every creature death, and Astor's 'look at the top seven cards of your library'. |
| decapitation | mitigation | Astor is the only 1-of engine and the deck is built not to need it: the declared assembly roles are payoff (the four Equipment plus Weatherlight Compleated, 4.5 effective, p=0.76 by turn 5) and enabler (15 bodies, p=1.00), neither of which routes through Astor. With Astor answered the Equipment still function at their printed Equip {2}, and Baird x2 provides removal insurance for the token engine (Baird is legendary, so the second copy is insurance rather than doubled throughput - Challenger-corrected). |
| gas-out | mitigation | Seven cards produce more board than they cost a card: Resolute Reinforcements x2 and Argivian Cavalier x1 ('create a 1/1 white Soldier creature token' on top of their own body), Keldon Strike Team x2 kicked ('create two 1/1 white Soldier creature tokens'), and Baird x2 ('At the beginning of your end step... create a 1/1 white Soldier creature token'), which refuels with no cards in hand at all. Three cards recur from an empty hand: Phoenix Chick x2's graveyard return and Valiant Veteran's graveyard pump. Card selection across the list is Astor's dig-7, Guardian's scry 2 and Weatherlight's scry 1 - stated consistently with the screw entry (Challenger F9 correction). |
| raced | accepted | Mitigating would mean maindecking Destroy Evil, Prayer of Binding or Hurloon Battle Hymn over the 2-MV bodies that produce the turn-5 clock, against a cube whose largest threat class is evasion (51 cards, 20.6% of the pool). That trade converts the deck from the aggressor into a reactive midrange deck with a shallow removal suite - it would lose the identity the pipeline was locked on. The concessions kept in the main are Lightning Strike x2 ('any target', so it can also close), Citizen's Arrest (unconditional exile) and Cleaving Skyrider's kicked reach; the sideboard adds Hurloon Battle Hymn x2 (kicked: 'you gain 4 life', an 8-point life swing across two copies) and Prayer of Binding x2 for the matchups where racing is not an option. |
| disruption-fizzle | mitigation | REWRITTEN after Challenger F2, which correctly identified two defects in the previous entry (it claimed enlist could be redirected 'after blockers are known', contradicting enlist's own 'As this creature attacks' timing, and it named a sideboard-only card). Three maindeck-only, oracle-true layers now: (1) the pump lives on a permanent the removal cannot hit - if the equipped creature is killed in response to the attack, Vanquisher's Axe and Hero's Heirloom stay on the battlefield and re-attach next turn for {2}, or {1} with Astor, so the critical turn is retried rather than lost; (2) threat redundancy - the alpha strike is made by a board of 4-6 bodies out of 15 creature cards plus tokens, so one removal spell subtracts a fraction of the damage, not the plan; (3) Cleaving Skyrider x2 has Flash, so it can be held and deployed after the opponent has committed their interaction, and its kicked mode 'deals X damage to any target, where X is the number of attacking creatures' converts a partially-blocked attack into direct damage. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Golden Argosy | RARE, cut against the 5-card cap. 'Crew 1' needs a spare untapped body at exactly the moment this deck wants every creature attacking, and the attack trigger exiles the crewer, subtracting it from the alpha strike. Built into deck 2 instead, where the exile is the point. |
| Danitha, Benalia's Hope | RARE. MV 5 against a curve locked at 4-max with a single MV-4 card; her ETB fetches from 4 Equipment copies, which is real, but she arrives two turns after the goldfish turn. |
| Squee, Dubious Monarch | RARE. Was in the pre-grill list and cut in Phase 9 to fund Cleaving Skyrider x2 and Citizen's Arrest. Its Goblin tokens receive neither Valiant Veteran's 'Other Soldiers you control get +1/+1' nor any power-above-base status for Baird - the 3-MV threat with the least overlap with this list's two engines. |
| Temporary Lockdown | RARE, and actively anti-synergistic: 'exile each nonland permanent with mana value 2 or less' would exile 16 of this deck's own 23 spells plus every Soldier token, both Equipment and Weatherlight Compleated. |
| Leyline Binding | RARE. Its Domain discount counts basic land TYPES among lands you control; a Plains/Mountain base has 2, so it costs {3}{W} - no cheaper than the uncommon Prayer of Binding, which is legal at 2 copies and gains 2 life. |
| Serra Redeemer | RARE. 'put two +1/+1 counters on' every power-2-or-less creature entering is the largest single payoff available for this token stream, but MV 5 breaks the lowest-curve lens the shape judge locked. |
| Defiler of Faith | RARE. MV 5. Its 'whenever you cast a white permanent spell, create a 1/1 white Soldier' would fire off 9 of 23 cards, but the curve is the deck's thesis. |
| Shivan Devastator | MYTHIC. Proposed by the Step-0 sketcher as a 1-drop-and-mana-sink, but it is a single large flier that adds no board width to a plan built on width. |
| Coalition Skyknight | The only card in RW that is both an enlist body and an evasive Equipment carrier, raised by the Challenger as an absence - but at MV 4 it is superseded by Cleaving Skyrider at MV 3, which also carries the kicked reach mode Skyknight lacks. |
| Tori D'Avenant, Fury Rider | Would satisfy Baird for the whole attacking board for free, but {1}{R}{R}{W} is the hardest cast in the deck against 9 red sources, and MV 4 fights the locked lens. |
| Hammerhand | A 1-mana permanent that switches Baird on with no equip tax. Excluded because its ETB 'target creature can't block this turn' targets separately from the enchanted creature, so it is not an unblockable-maker, and an Aura is a 2-for-1 against the removal this deck already fears on its equipped carrier. |
| Heroic Charge | The alpha-strike card, but MV 4 with {W}{W}. This build's payoff routes damage through ONE inflated attacker (Equipment + enlist), not a wide team pump; that is deck 3's plan. |
| Captain's Call | Three Soldier tokens on one card, but MV 4 competes directly with Astor on the deck's most contested turn. |
| Balduvian Berserker | An enlist body whose 1 power makes it poor enlist fodder AND a poor Equipment carrier - the two things this deck asks a 3-drop to do. |
| Jaya's Firenado | Sideboard consideration, cut. MV 5 sits above this deck's entire curve and it cannot target players. |
| Artillery Blast | Sideboard consideration, cut. Its Domain count is 2 basic land types in a Plains/Mountain base, so it deals 3 damage, and only 'to target TAPPED creature'. |
| Knight of Dawn's Light | A fine 2-MV first-strike Equipment carrier, but it adds no width and this build's residual slots all produce two or more bodies. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.17   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.44 adj [MV 2.17 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  45.5%  prod  52.9%  gap  -7.4pp  [OK]
  W  demand  54.5%  prod  58.8%  gap  -4.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard - every card verified present in working_pool.json by exact name
commons_uncommons_max_2: PASS - no common or uncommon exceeds 2 copies across main+side
rares_mythics_max_1: PASS - all five are single copies
rare_mythic_card_cap_5: PASS - exactly 5: Astor, Bearer of Blades / Guardian of New Benalia / Valiant Veteran / Weatherlight Compleated (main) + Anointed Peacekeeper (sideboard).
basics: Plains x8, Mountain x7 - format-supplied, exempt
colour: All 23 nonland cards return a usable mode from effective_cost.best_mode(card, ['R','W'], []); no splash
```
