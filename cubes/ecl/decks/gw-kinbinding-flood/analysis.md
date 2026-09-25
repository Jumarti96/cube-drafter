---
deck_name: "gw-kinbinding-flood"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GW"
format: "40-card"
built_at: "2026-08-09T16:33:27Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x4    Forest                         4 of the 6 green sources (32% pip demand)
x9    Plains                         9 of the 11 white sources (68% pip demand)
x2    Evolving Wilds                 fetches a basic tapped; floats to either colour
x2    Radiant Grove                  GW dual, always enters tapped
```

### CREATURES (15)

```
CMC  Card                           Qty   Color  Role                           Rar
1    Goldmeadow Nomad               x1    W      Body, then token from graveyar C
1    Kinsbaile Aspirant             x2    W      1-drop payoff; +1/+1 per entry U
2    Bristlebane Battler            x1    G      6/6 trample; sheds counters    R
2    Eclipsed Kithkin               x2    WG     Hybrid-cost body; digs 4 deep  U
2    Kinscaer Sentry                x1    W      Cheats a body in mid-combat    R
2    Thoughtweft Lieutenant         x2    WG     Trample grant on Kithkin entry U
2    Timid Shieldbearer             x1    W      Repeatable team anthem         C
3    Crossroads Watcher             x2    G      Native trample; +1/+0 per entr C
3    Reluctant Dounguard            x1    W      4/4; sheds 2 counters          C
4    Bristlebane Outrider           x2    G      Unblockable by power<=2        U
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                           Qty   Color  Role                           Rar
2    Personify                      x1    W      Two entries at instant speed   U
2    Thoughtweft Charge             x1    G      +3/+3; draws when engine runs  U
3    Protective Response            x2    W      Convoked removal               U
```

### OTHER SPELLS (4)

```
CMC  Card                           Qty   Color  Role                           Rar
2    Spiral into Solitude           x1    W      Turns off the big blocker      C
3    Ajani, Outland Chaperone       x1    W      Free token every turn          M
3    Clachan Festival               x1    W      2 tokens ETB; repeatable sink  U
5    Kinbinding                     x1    W      Team +X/+X; free token/turn    R
```

## SIDEBOARD (10)

```
Card                           Qty   Color  Role / When to board in                        Rar
Unforgiving Aim                x2    G      vs fliers (41-card evasion class, the cube's l C
Dawn's Light Archer            x2    G      vs fliers -- a 4/2 flash reach blocker that is C
Chomping Changeling            x2    G      vs artifacts/enchantments; 'up to one' target  U
Pyrrhic Strike                 x2    W      vs big single threats (MV>=3) and vs artifact/ U
Rooftop Percher                x1    C      vs graveyard decks (39-card class); also a fly C
Champion of the Clachan        x1    W      vs grindy removal-light decks, where a permane R
```

## ANALYSIS

### DECK IDENTITY

A GW Kithkin go-wide aggro deck whose payoff counts creatures that entered the battlefield this turn rather than creatures on board. Eleven cards convert that entry event into damage INDEPENDENTLY of Kinbinding -- this is deliberate, because the rare cap allows exactly one Kinbinding and p(drawn by the thesis turn) is only 0.300, so the deck is named for its best draw, not its median one. Kinbinding when drawn turns the turn's entry count into a team-wide +X/+X and supplies its own X>=1 with a free token at the beginning of every combat. The build was locked on the 'most reach and evasion' lens, so the non-threat slots buy trample, unblockability and blocker-removal rather than more bodies -- the characteristic loss for this archetype is holding a lethal-on-paper board that gets chump-blocked.

### THE ENGINE, AS COUNTS

The deck is built on one distinction: its payoffs count creatures that **entered this turn**, not creatures on board. That makes width per-turn, not cumulative, and it changes what a good card is here.

| Quantity | Count | What it means |
|---|---|---|
| Cards that put a body onto the battlefield | **19 of 23** | The fuel line. Only Thoughtweft Charge, Protective Response x2 and Spiral into Solitude do not. |
| Cards that convert an entry into damage or value | **12 of 23** | Kinbinding plus 11 that work without it. |
| Cards that manufacture an entry for **zero cards** | **4 of 23** | Kinbinding's combat token, Ajani's +1, Clachan Festival's {4}{W}, Goldmeadow Nomad's graveyard activation. |
| Kithkin permanents that can enter | **16 of 23** | All 15 creature cards plus Clachan Festival, a Kindred Enchantment - Kithkin. Every token the deck makes is also a Kithkin token. |

### THE DECK IS NOT ACTUALLY ABOUT KINBINDING

Kinbinding is one copy in forty. Hypergeometric p(seen by turn 5, 12 cards seen) = **0.300**. Seventy percent of games never see the card the deck is named after, which is why the 11 independent converters carry the median game and why the Phase 6b assembly check measures the payoff *class* (p = 0.97), not the namesake. Treat Kinbinding as the best draw, not the plan.

### THE LOSS CONDITION, AND WHAT WAS BOUGHT TO ANSWER IT

A go-wide pump deck loses by holding a lethal-on-paper board that gets chump-blocked. Three cards are in the list specifically for that, and only one of them is unconditional:

- **Crossroads Watcher** - the only *native* trample in the deck, needing no grant.
- **Bristlebane Outrider** - "can't be blocked by creatures with power 2 or less" is soft evasion, but it is aimed precisely at the 1/1 and 2/2 tokens the cube's other go-wide decks present.
- **Spiral into Solitude** - two mana to turn the single biggest blocker off permanently, without donating a body. This replaced Crib Swap during the grill: Crib Swap's "**its controller** creates a 1/1" hands the opponent a fresh chump blocker at exactly the wrong moment.

### KINSCAER SENTRY RAISES X AFTER ATTACKERS ARE DECLARED

"Whenever this creature attacks, you may put a creature card with mana value X or less from your hand onto the battlefield tapped and attacking, where X is the number of attacking creatures you control." The put-in creature *enters* during the declare-attackers step, so with Kinbinding out it raises the whole team's +X/+X after the opponent has committed to the attack and before blockers. 11 of the 15 creature cards cost MV 4 or less, so a four-attacker board puts most of the creature suite in range.

### CHAMPION OF THE CLACHAN EATS A TOKEN

Its additional cost is "behold a Kithkin **and exile it**." A 1/1 Kithkin token is a legal choice, and because "return the exiled card" does nothing for a token, you convert a spare 1/1 into a permanent team anthem at no card cost. Kinbinding makes a token every combat. It sits in the sideboard rather than the maindeck only because at MV 4 it competes with the turn-5 curve.

### THE MANA IS THE REAL COST

The cube has **no untapped-capable GW dual available at this rare budget**: Radiant Grove always enters tapped, Evolving Wilds fetches tapped, and Temple Garden (the one shock-style dual) would spend one of the five rare slots. So 4 of 17 lands enter tapped in a deck trying to attack on turn 5. Eclipsed Kithkin x2 were added during the grill partly for this reason - {G/W}{G/W} casts off two Plains *or* two Forests, against 8 of 23 nonland cards that need a hard green pip off only 6 dedicated green sources.

### THE CUBE BARELY PUNISHES THIS PLAN

The dossier finds **2 sweepers in 277 cards** and **0 sacrifice outlets**. The structural risk that normally prices a token deck's insurance is close to absent here - which is why the sweeper-resilient build was rejected at the sketch stage, and why the sideboard spends nothing on rebuilding after a wrath. The real threat is the **41-card evasion class**: this deck has zero maindeck fliers and zero maindeck reach across all 15 creatures, and 5 of the 10 sideboard slots exist to answer that.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (23 nonland):  1:3  2:10  3:7  4:2  5:1
  WARN  MV 1 share: share 13% below band minimum 15%
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 11 copies (effective 10: Bristlebane Outrider@0.8, Bristlebane Outrider@0.8, Bristlebane Battler@0.6, Reluctant Dounguard@0.8) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 5.6: Goldmeadow Nomad@0.9, Kinscaer Sentry@0.7, Eclipsed Kithkin@0.5, Eclipsed Kithkin@0.5) → p=0.84 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 47%  T2 94%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Kinbinding, Timid Shieldbearer, Protective Response
  OK        single_large_threat: Spiral into Solitude, Protective Response, Bristlebane Outrider
  CONCEDED  noncreature_permanents: No maindeck artifact or enchantment removal; the 23 nonland slots are spent on entry-trigger density that the thesis X-count depends on, and the cube's artifact+enchantment density is 32 of 277 cards (11.6%) -- answered post-board by Unforgiving Aim x2, Chomping Changeling x2 and Pyrrhic Strike x2 (6 cards).
  CONCEDED  stack: No counterspell exists in GW anywhere in this pool; the deck's answer to a key opposing spell resolving is to have already committed a board that kills on turn 5.
  CONCEDED  graveyard: No maindeck graveyard hate; Rooftop Percher is the sideboard answer to the cube's 39 graveyard-interaction cards, and maindecking a 5-mana colourless body would break a 2.48 avg-MV aggro curve.
```

- curve WARN (MV-1 share 3/23 = 13% vs 15% band minimum): accepted. The band assumes an aggro deck's early clock is its one-drops; this deck's early clock is a per-turn token engine, and the checks confirm it lands -- enabler p(seen by turn 5) = 0.84, 94% of hands make a turn-2 play, and MV<=2 is 13 of 23. An earlier version of this response claimed the pool's only remaining GW one-drops were Virulent Emissary and Figure of Fable; that was FALSE and is corrected here. The full set of unused GW one-drops is Blossoming Defense, Celestial Reunion, Dawn-Blessed Pennant, Evershrike's Gift, Figure of Fable, Springleaf Drum, Virulent Emissary and Wanderbrine Trapper. THREE of the 8 are bodies, and each is declined on its own grounds rather than on absence: (a) Wanderbrine Trapper ({W} 2/1 Merfolk Scout, '{1}, {T}, Tap another untapped creature you control: Tap target creature an opponent controls') -- its activation taps two of my own creatures to tap one of theirs, which on the alpha-strike turn removes two attackers to remove one blocker, net negative for a deck whose damage is board-width times Kinbinding's X; it is also non-Kithkin, so it triggers neither Thoughtweft Lieutenant x2 nor Kinsbaile Aspirant's behold. (b) Figure of Fable ({G/W} 1/1 Kithkin) -- declined on the rare cap, which is at exactly 5/5. (c) Virulent Emissary ({G} 1/1 Elf Assassin, 'Deathtouch / Whenever another creature you control enters, you gain 1 life') -- a defensive body whose payoff is lifegain, which does not advance a turn-5 clock, and non-Kithkin.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable mana sinks turn surplus lands into board: Clachan Festival's '{4}{W}: Create a 1/1 green and white Kithkin creature token', Timid Shieldbearer's '{4}{W}: Creatures you control get +1/+1 until end of turn', and Ajani's '+1: Create a 1/1 ... token' for free every turn. Two of the three make a body, and each body is another trigger for the 11 independent entry converters. |
| screw | mitigation | 13 of the 23 nonland cards cost 2 or less (curve 1:3, 2:10), so a two-land hand still deploys on curve; Evolving Wilds x2 and Radiant Grove x2 fix both colours, and Eclipsed Kithkin x2 cast off two lands of EITHER colour. The goldfish check measures 87% keepable hands and 88% reaching 3 lands by turn 3. [CORRECTED from an earlier claim of '12 of 23', which double-counted Bristlebane Battler and Kinscaer Sentry.] |
| decapitation | mitigation | Kinbinding answered on sight -- or, more often, never drawn (p = 0.300 by turn 5) -- does not end the plan. 11 further cards CONVERT the same entry event independently of it: Crossroads Watcher x2, Kinsbaile Aspirant x2, Thoughtweft Lieutenant x2, Bristlebane Outrider x2, Bristlebane Battler, Reluctant Dounguard, Thoughtweft Charge. Ajani is a second non-creature entry source that creature removal cannot touch. [CORRECTED: Kinscaer Sentry was previously counted here; its oracle reads 'Whenever this creature attacks, you may put a creature card ... onto the battlefield', so it PRODUCES an entry rather than converting one, and it is counted in the enabler class instead. Of the 11 converters, 4 (Crossroads Watcher x2, Kinsbaile Aspirant x2) scale with the NUMBER of entries; Bristlebane Outrider x2 is binary, Bristlebane Battler caps at five counters, Reluctant Dounguard at two, and Thoughtweft Lieutenant targets one creature per trigger.] |
| gas-out | mitigation | From an empty hand the deck still acts. Exactly 4 of 23 cards manufacture an ENTRY for zero cards: Kinbinding's 'At the beginning of combat on your turn, create a 1/1 ... token', Ajani's '+1: Create a 1/1 ... token', Clachan Festival's '{4}{W}: Create a 1/1 ... token', and Goldmeadow Nomad's '{W}, Exile this card from your graveyard: Create a 1/1 ... token'. Timid Shieldbearer's '{4}{W}: Creatures you control get +1/+1 until end of turn' is a fifth zero-card mana sink but manufactures NO entry and is deliberately excluded from that count. Card replacement is thin and stated as such: Thoughtweft Charge is the deck's only draw effect (1 of 23), and its 'If a creature entered the battlefield under your control this turn, draw a card' is reliable only when cast on my own turn after deploying, since on the opponent's turn 'this turn' is theirs and the deck has just 1 instant-speed entry source (Personify). |
| raced | accepted | The cube's fastest clocks are evasive: 41 of 277 cards carry evasion, 13 of them blue. This deck has zero maindeck fliers and zero maindeck reach across all 15 creatures, so it cannot block that clock -- it can only outpace it. Mitigating would mean maindecking Unforgiving Aim ('Destroy target creature with flying') or Dawn's Light Archer over a payoff, which cuts the entry-trigger numerator the thesis multiplies; the cost of that is a slower turn-5 alpha strike in every non-flier matchup. Accepted, and answered post-board by 5 of the 10 sideboard slots -- Unforgiving Aim x2, Dawn's Light Archer x2 (4/2 flash reach) and Rooftop Percher (3/3 flying). |
| disruption-fizzle | mitigation | The critical turn does not hinge on one spell resolving. Kinbinding is a static enchantment already on the battlefield, so removal aimed at a creature mid-combat does not undo the +X/+X the rest of the team already has, and the deck's only enchantment-based answer class in the cube numbers 4 of 277 cards. Personify at instant speed both rescues a targeted creature ('Exile target creature you control, then return that card to the battlefield') and adds two entries, raising X in response. Its exclusion list is stated: a TOKEN exiled this way ceases to exist and does not return, and Bristlebane Battler and Reluctant Dounguard re-enter with their -1/-1 counters restored, so 2 of the 15 creatures are not legal targets for value -- which is why it runs at 1 copy rather than 2. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Mutable Explorer | 'create a tapped Mutavault token' makes a LAND token, not a creature entering — it triggers none of this deck's 11 entry payoffs on ETB, and it costs a rare slot. |
| Brigid's Command | Two entry triggers for {1}{G}{W} is genuinely on-plan, but the 5-card rare/mythic budget was fully spent on Kinbinding, Ajani, Kinscaer Sentry, Bristlebane Battler and Champion of the Clachan. |
| Brigid, Clachan's Heart // Brigid, Doun's Mind | The transform loop yields one token per two turns, and the back face's '{T}: Add X {G} or X {W}' is ramp this 2.61 avg-MV curve has nothing to spend on; rare budget. |
| Mirrormind Crown | {4} to cast plus 'Equip {2}' is six mana before it produces anything, against a goldfish turn of 5. |
| Winnowing | A six-mana sorcery in a 2.61 avg-MV deck; convoke helps, but a go-wide deck that is ahead on board rarely wants a wrath, and it costs a rare slot. |
| Figure of Fable | Reaching the 7/8 Avatar mode costs {G/W} + {1}{G/W}{G/W} + {3}{G/W}{G/W}{G/W} = nine total mana; a mana sink, not a turn-5 clock, and a rare slot. |
| Temple Garden | The pool's only untapped-capable dual, but it costs 1 of 5 rare slots; Radiant Grove x2 plus Evolving Wilds x2 supply the same fixing at zero rare cost. |
| Kithkeeper | 'create X 1/1 ... tokens, where X is the number of colors among permanents you control' — this deck is exactly two colours, so X = 2: six mana for a 3/3 and two 1/1s. |
| Moon-Vigil Adherents | '+1/+1 for each creature you control and each creature card in your graveyard' is a real go-wide payoff, but it is a 0/0 that dies to any -X/-X effect and its {2}{G}{G} double-green fights a 66.7%-white pip demand. |
| Timid Shieldbearer | Its '{4}{W}: Creatures you control get +1/+1' costs the same five mana as Clachan Festival's token activation, which instead makes a body and therefore triggers all 11 entry payoffs. |
| Stalactite Dagger | One entry trigger plus a +1/+1 equipment for {2}, but 'Equip {2}' competes with deploying a body on a curve where every body is a trigger. |
| Flock Impostor | Its ETB bounce can re-trigger an entry, but a {2}{W} 2/2 flier that returns your own creature is card-neutral tempo, not the extra body the thesis wants. |
| Mistmeadow Council | Four mana (after the Kithkin discount) for a 4/3 that draws a card is above a curve built to attack on turn 5. |
| Virulent Emissary | 'Whenever another creature you control enters, you gain 1 life' — lifegain does not advance a turn-5 clock; the 1/1 deathtouch body is defensive. |
| Eclipsed Kithkin | Card selection off the top four; this deck's constraint is board presence, not finding cards. |
| Springleaf Drum | Acceleration into a curve that tops out at a single five-drop, and it taps the creatures the alpha strike needs untapped. |
| Riverguard's Reflexes | Cut during FILL: the only card in the 23 that neither adds a body nor answers one, in a deck whose payoff counts bodies entering. |
| Sun-Dappled Celebrant | Convoke makes a 5/6 castable, but a six-mana vanilla body adds one entry trigger for the cost of two other spells. |
| Liminal Hold | Sideboard consideration: 'exile up to one target nonland permanent an opponent controls' answers artifacts and enchantments, but at four mana it is slower than Pyrrhic Strike and Chomping Changeling, which were taken instead. |
| Spiral into Solitude | Sideboard consideration: a two-mana pacifism, but its exile mode costs '{1}{W}, Blight 1, Sacrifice this Aura' and blight puts a -1/-1 counter on my own creature. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.03 adj [MV 2.48 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  32.0%  prod  35.3%  gap  -3.3pp  [OK]
  W  demand  68.0%  prod  64.7%  gap  +3.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies                       PASS  (20 distinct; 0 over cap)
rares/mythics max 1 copy each                        PASS  (5 distinct, all at qty 1)
max 5 rare+mythic across MB+SB                       PASS  (5/5: Ajani, Outland Chaperone, Bristlebane Battler, Champion of the Clachan, Kinbinding, Kinscaer Sentry)
basic lands unlimited (format-supplied)              PASS  (Forest x4, Plains x9 -- exempt)
all cards from cube mainboard                        PASS  (exact-name match vs working_pool, 0 phantoms)
colour identity G/W, no splash                       PASS  (effective_cost.best_mode non-None for every nonland; splash list empty)
deck size 40 + sideboard 10                          PASS  (mainboard 40, sideboard 10)
any copy-limit violation                             NONE
```
