---
deck_name: "rw-enlist-kicker-aggro"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RW"
format: "40-card"
built_at: "2026-08-14T03:47:41Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
8x   Plains                   Basic - white source
7x   Mountain                 Basic - red source
2x   Sacred Peaks             RW dual, enters tapped - the only non-rare RW fixing in the pool
1x   Plaza of Heroes          Any colour for legendary spells - 5 legendary cards in this list
```

### CREATURES (15)
```
CMC  Card                        Qty   Color  Role                                            Rar
1    Phoenix Chick               x2    R      Threat - 1/1 flying haste, returns from the graveyard attacking  U
2    Baird, Argivian Recruiter   x2    RW     Payoff/engine - a free Soldier each end step off any pumped creature  U
2    Guardian of New Benalia     x1    W      Infra - Soldier body, enlist scry 2, enlist turns Baird on  R
2    Resolute Reinforcements     x2    W      Enabler - flash, two Soldier bodies             U
2    Valiant Veteran             x1    W      Payoff - Soldier anthem; also a permanent Baird enabler  R
3    Argivian Cavalier           x2    W      Enabler - Soldier token on ETB; enlist turns Baird on  C
3    Keldon Strike Team          x2    R      Payoff/enabler - kicked, two Soldiers and haste for the whole board  C
3    Squee, Dubious Monarch      x1    R      Threat - a tapped attacking Goblin every attack, recastable from the graveyard  R
4    Tori D'Avenant, Fury Rider  x2    RW     Payoff - pumps all other attackers, tramples the red, untaps the white  U
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                        Qty   Color  Role                                            Rar
2    Lightning Strike            x2    R      Interaction - 3 damage to any target, including the face  C
2    Take Up the Shield          x1    W      Enabler/protection - a permanent +1/+1 counter, so Baird triggers every end step  C
4    Heroic Charge               x2    W      Payoff - the alpha-strike finisher; kicked it adds trample  C
```

### OTHER SPELLS (2)
```
CMC  Card                        Qty   Color  Role                                            Rar
1    Hammerhand                  x2    R      Enabler - haste + can't block; the +1/+1 turns Baird on  C
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                                                 Rar
Destroy Evil                x2    W      Destroy a toughness-4-or-greater creature, or an enchantment — vs fat blockers and enchantment decks  C
Smash to Dust               x2    R      Destroy an artifact, or 1 damage to each opposing creature — vs artifact decks and opposing 1/1 token swarms  C
Citizen's Arrest            x2    W      Unconditional exile of a creature or planeswalker — vs single-large-threat and planeswalker decks  C
Hurloon Battle Hymn         x2    R      4 damage to a creature or planeswalker; kicked, gain 4 life — vs bigger creatures and vs decks that try to race  U
Prayer of Binding           x2    W      Flash exile any nonland permanent — vs decks whose best permanent must be answered at instant speed  U
```

## ANALYSIS

### DECK IDENTITY

Red-white kicker aggro with the fastest clock in the shortlist. Keldon Strike Team kicked is three bodies and haste for the entire board in one card; Baird, Argivian Recruiter turns every pump effect into a free Soldier at end step; Tori D'Avenant pumps all other attackers, gives the red ones trample and untaps the white ones so they block afterwards; Heroic Charge is the alpha strike. The build is deliberately bottom-heavy - 13 of 22 nonland cards cost two mana or less - because the deck's edge is winning on turn five, before the thin RW fixing it cannot solve becomes a liability.

### BAIRD IS THE ENGINE, AND THE ENABLER COUNT IS BIGGER THAN IT LOOKS

Baird, Argivian Recruiter reads: "At the beginning of your end step, if you control a creature with power greater than
its base power, create a 1/1 white Soldier creature token." The obvious enablers are the pump spells. The non-obvious
ones matter more:

| Enabler | Copies | Why it satisfies "power greater than its base power" |
|---|---|---|
| Hammerhand | 2 | "+1/+1 and has haste" on the enchanted creature |
| Take Up the Shield | 1 | a **permanent** +1/+1 counter — Baird triggers every end step thereafter, not once |
| Heroic Charge | 2 | +2/+1 to the whole team |
| Tori D'Avenant | 2 | its attack trigger gives all other attackers +1/+1 |
| Valiant Veteran | 1 | its **static** anthem puts every Soldier above base power for as long as it lives |
| Guardian of New Benalia | 1 | Enlist: "add its power to this creature's until end of turn" |
| Argivian Cavalier | 2 | same Enlist clause |

**7 distinct card types, 11 of the 22 nonland copies.** Half the deck turns Baird on, and two of those seven —
Take Up the Shield's counter and Valiant Veteran's anthem — turn him on *permanently* rather than for one turn.

### THE MANA IS QUANTIFIED, NOT ASSERTED

Red-white is the thinnest fixing in this cube: one non-rare dual (Sacred Peaks) and it enters tapped. Rather than
claim the manabase is fine, it was simulated — 60,000 iterations, on the play, with Plaza of Heroes correctly
restricted to legendary spells (so it produces **no** coloured mana for Heroic Charge):

| Metric | 17 lands (7/7/2/1) | 18 lands (7/8/2/1) |
|---|---|---|
| 4 land drops by turn 4 | 70.3% | **76.5%** |
| Tori D'Avenant `{1}{R}{R}{W}` on turn 4 | 63.5% | **67.6%** |
| Heroic Charge `{2}{W}{W}` on turn 4 | 60.3% | **67.9%** |
| Baird `{R}{W}` on turn 2 | 84.1% | **86.3%** |

The 18th land is one card above the computed target of 17. It bought 6–8 percentage points on the castability of two
of the four cards the kill plan names. That is the trade, stated plainly: this deck accepts that roughly one game in
three will not have Tori online on turn four, and it is built so that Keldon Strike Team's haste clause and Baird's
Soldiers still function on those turns.

### KELDON STRIKE TEAM'S HASTE CLAUSE IS UNCONDITIONAL — THE TOKENS ARE NOT

This distinction is what makes the card the deck's centrepiece rather than a kicker trap. Its two clauses have
different requirements:

- *"When this creature enters, **if it was kicked**, create two 1/1 white Soldier creature tokens."* — needs `{3}{R}{W}`, five mana in both colours.
- *"As long as this creature entered this turn, creatures you control **have haste**."* — no condition at all.

So the unkicked `{2}{R}` 3/1 on turn 3 still gives the whole board haste, which means everything cast that turn
attacks that turn. On the turns the RW fixing fails, the card is still doing half its job — and the half it is
still doing is the half that makes the attack happen.

### WHAT THIS DECK GIVES UP

Stated openly rather than buried: this is the only deck of the four with **no mainboard answer to an artifact or an
enchantment**, and it concedes three of the five threat classes. The trade is that it is also the only one of the
four that can point damage at the opponent's face (Lightning Strike ×2) and the only one with a turn-5 goldfish.
Against the cube's 32 graveyard cards it has, like every deck in this cube, no answer at all — `structural_census`
records zero graveyard hate in the entire 266-card list.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (22 nonland):  1:4  2:9  3:5  4:4
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 8.9: Keldon Strike Team@0.7, Keldon Strike Team@0.7, Baird, Argivian Recruiter@0.85, Baird, Argivian Recruiter@0.85, Squee, Dubious Monarch@0.8) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.4: Keldon Strike Team@0.7, Keldon Strike Team@0.7) → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 56%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The mainboard has no sweeper. The only red one at common (Smash to Dust, '1 damage to each creature your opponents control') is in the sideboard because it kills only 1-toughness bodies, and the only rare sweeper castable in these colours (Temporal Firestorm) deals 5 damage to EACH creature while phasing out at most one of this deck's own - it would delete the token board that is the win condition. Racing is the plan.
  OK        single_large_threat: Lightning Strike, Tori D'Avenant, Fury Rider
  CONCEDED  noncreature_permanents: The mainboard answers no artifact or enchantment. Both are answered from the sideboard (Smash to Dust x2 for artifacts, Destroy Evil x2 for enchantments, Prayer of Binding x2 for either); mainboarding them would cost threat density in a deck whose edge is a turn-5 kill.
  CONCEDED  stack: Neither red nor white has a counterspell in this pool; the answer to a key opposing spell is to have already dealt lethal.
  CONCEDED  graveyard: dossier.structural_census records 0 graveyard-hate cards in the entire cube, so no colour and no sideboard can answer this class.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three graveyard mana sinks turn surplus lands into threats. Phoenix Chick x2: 'Whenever you attack with three or more creatures, you may pay {R}{R}. If you do, return this card from your graveyard to the battlefield tapped and attacking with a +1/+1 counter on it' - repeatable and it only needs the board this deck already has. Squee, Dubious Monarch: 'You may cast this card from your graveyard by paying {3}{R} and exiling four other cards from your graveyard.' Valiant Veteran: '{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control.' Lightning Strike x2 also points excess mana at the opponent's face. |
| screw | mitigation | 13 of the 22 nonland cards cost two mana or less and 4 cost one, so a two-land hand still curves: Phoenix Chick or Hammerhand on turn 1, Baird or Resolute Reinforcements on turn 2. The goldfish check measured 88% keepable hands, a turn-1 play 56% of the time and a turn-2 play 96%. The residual risk is colour, and it is quantified rather than asserted: the simulation in land_math puts a turn-4 Tori D'Avenant at 67.6% and a turn-4 Heroic Charge at 67.9% on the repaired manabase. |
| decapitation | mitigation | Baird answered on sight leaves Keldon Strike Team x2 (two Soldiers on the kicked cast, independent of Baird) and Argivian Cavalier x2 and Resolute Reinforcements x2 as token sources. Tori answered on sight leaves Heroic Charge x2, which is an instant and cannot be pre-empted by creature removal. Both Baird and Tori are run in pairs specifically so the legend rule costs nothing while the second copy replaces an answered first. Squee, Dubious Monarch answers its own decapitation: it recasts itself from the graveyard. |
| gas-out | accepted | This deck runs zero Cards: Net-Positive cards. Thrill of Possibility was the available refuel and was cut because it costs a card to cast and does nothing to the board on the turn this deck needs to be attacking. Mitigating would mean trading threat density for card draw in a deck whose stated edge is a turn-5 kill - it would make the deck worse at the only thing it is trying to do. What it has instead is three graveyard recursion effects that keep producing threats from an empty hand: Phoenix Chick x2 returning for {R}{R}, Squee recasting for {3}{R}, and Valiant Veteran's graveyard counter ability. |
| raced | mitigation | This deck is usually the one racing - a turn-1 play 56% of the time and a turn-5 goldfish. Against a faster clock it has the only mainboard reach in the shortlist: Lightning Strike x2, 'deals 3 damage to any target', can go to the face. Tori D'Avenant's 'Untap each other white attacking creature you control' means the white half of the board attacks and then blocks, which is what actually wins a race. Take Up the Shield grants lifelink and indestructible at instant speed. The sideboard adds Hurloon Battle Hymn x2, whose kicked mode gains 4 life. |
| disruption-fizzle | mitigation | The critical turn is a kicked Keldon Strike Team or a Heroic Charge. Heroic Charge is an instant with 2 copies and can be held until blockers are declared. Keldon Strike Team's haste clause reads 'As long as this creature entered this turn, creatures you control have haste' - so even if the kicker mana is not available, the unkicked 3/1 for {2}{R} still grants the whole board haste, which is the half of the card that makes the attack happen. If the alpha strike is countered outright, Baird's end-step trigger still makes a Soldier from any pump that resolved, and the board is untouched. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Captain's Call | Three Soldiers for {3}{W} is the widest card in white, but at MV 4 it competes with Tori D'Avenant and Heroic Charge for the turn this deck wants to be attacking, and the locked lens is lowest-curve. |
| Charismatic Vanguard | Its team pump costs {4}{W} - five mana in a deck that intends to have won on turn 5. |
| Defiler of Faith | {3}{W}{W} needs double white on turn 5 off a manabase that also owes {R}{R} to Tori D'Avenant on turn 4; the RW fixing is tapped-only. |
| Serra Redeemer | Same double-white-at-five-mana problem, and this deck's tokens are meant to attack the turn they arrive rather than grow. |
| Griffin Protector | A 4-mana 2/3 whose pump lasts only until end of turn; the locked lens spends that slot on a one- or two-drop. |
| Jaya, Fiery Negotiator | {2}{R}{R} for one 1/1 Monk per turn is slower than Keldon Strike Team's two Soldiers plus haste for the same five-mana kicked cast. |
| Shivan Devastator | An X-cost flier scales with mana this 17-land deck does not reach; at X=3 on turn 5 it is a 3/3 flier that made no tokens. |
| The Elder Dragon War | Chapter I 'deals 2 damage to each creature and each opponent' - it kills this deck's own 1/1 Soldier tokens, which are the entire board. |
| Smash to Dust | Its '1 damage to each creature your opponents control' mode is a sideboard card here: against the many decks where this one is the faster aggressor it kills nothing that matters. |
| Balduvian Berserker | A 1/3 enlist body whose death trigger deals damage equal to its power - power 1, so the trigger is one damage. |
| Flowstone Kavu | Menace is real evasion, but '{R}: gets +1/-1' shrinks its own toughness and it makes no tokens, so it does not feed Baird or Valiant Veteran. |
| Coalition Warbrute | A 3/4 trample enlist body for {3}{R} - four mana for one body in a deck whose four-mana slot is Tori D'Avenant and Heroic Charge. |
| Thrill of Possibility | Card filtering that costs a card; this deck's problem is not card selection, it is having the second colour on turn 4. |
| Twinferno | Double strike on one creature, or copy the next instant; with 14 of the 19 creature copies at power 3 or less, doubling one body is less damage than Heroic Charge gives the team. |
| Jaya's Firenado | 5 damage for five mana - the removal rate is fine but the turn is not, in a deck built to a 2.43 average mana value. |
| Astor, Bearer of Blades | Its ETB looks for an Equipment or Vehicle and its static abilities reduce equip and crew costs; this list runs 0 Equipment and 0 Vehicles. |
| Rundvelt Hordemaster | 'Other Goblins you control get +1/+1' - this list contains exactly one Goblin source (Squee's tokens), so the anthem reads +1/+1 to at most a token or two. |
| Thran Portal | It would fix RW, but it enters tapped unless you control two or fewer other lands and its mana costs 1 life each activation - and it is a rare, competing with Plaza of Heroes for the same slot. |
| Crystal Grotto | It taps for {C} and charges an extra {1} for coloured mana; a deck casting {R}{W} on turn 2 cannot pay that tax. |
| Cleaving Skyrider | Cut in the Phase 9 repair: kicked it costs {4}{W}{R} = 6 mana, past this deck's turn-5 plan, so it is a 3-mana 2/2 flier - and that slot bought the 18th land, which raised turn-4 Tori castability from 63.5% to 67.6%. |
| Furious Bellow | Cut for Take Up the Shield: both are 2-mana Baird enablers, but Furious Bellow's +3/+0 lasts until end of turn while a +1/+1 counter keeps the creature above its base power permanently, so Baird triggers every subsequent end step. |
| Temporal Firestorm | Its phase-out clause reads 'where X is the number of times this spell was kicked'; only the {1}{W} kicker is on-colour here, so X maxes at 1 - it would save one creature and then deal 5 damage to this deck's entire token board. |
| Runic Shot | 'Destroy target tapped creature' - this deck is the aggressor, so opposing creatures untap and block rather than attack and tap; the removal is blank in exactly the matchups it is wanted for. |
| Join Forces | A fine on-curve trick at {2}{W} that pumps and untaps two creatures, and it would turn Baird on. It lost its slot to the 18th land in the Phase 9 repair, not to a mechanism objection - it is the first card to bring back if the manabase is changed. |
| Twinferno | Double strike on one creature; with 12 of the 15 creature copies at power 3 or less, doubling one body deals less than Heroic Charge's +2/+1 across the whole board. |
| Coalition Skyknight | A 4-mana 2/2 flier competing directly with Tori D'Avenant and Heroic Charge for the four-drop slot in a deck that wants to be finishing on turn 5. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 17 recommended  [PASS]
Avg CMC:     2.41   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.12 adj [MV 2.41 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  50.0%  prod  55.6%  gap  -5.6pp  [OK]
  W  demand  50.0%  prod  55.6%  gap  -5.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                         cube_mainboard
commons_uncommons_max_2      PASS - no common or uncommon exceeds 2 combined copies
rares_mythics_max_1_each     PASS
rares_mythics_max_5_total    PASS - 4 of 5 used: Valiant Veteran (R), Guardian of New Benalia (R), Squee Dubious Monarch (R) and the land Plaza of Heroes (R), all mainboard. The sideboard is entirely common/uncommon; one slot is deliberately unspent because no remaining rare improved a slot in a deck built to win on turn 5.
basics_unlimited             7 Mountain + 8 Plains
```