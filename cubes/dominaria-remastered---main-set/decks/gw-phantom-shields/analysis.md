---
deck_name: "gw-phantom-shields"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-31T16:14:42Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x7   Plains                   
  x5   Forest                   
  x2   Radiant Grove            GW dual, enters tapped
  x2   Slippery Karst           enters tapped, cycles
  x1   Drifting Meadow          enters tapped, cycles
```

### CREATURES (7)

```
CMC  Card                          Qty   Color  Role                                Rar
  4  Forgotten Ancient             x1    G      Counter-Recharge Engine             R
  4  Kavu Primarch                 x2    G      Threat/Payoff                       C
  5  Phantom Flock                 x2    W      Threat/Payoff                       C
  6  Triskelion                    x1    C      Threat/Payoff                       R
  7  Phantom Nishoba               x1    GW     Threat/Payoff                       R
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                          Qty   Color  Role                                Rar
  1  Swords to Plowshares          x2    W      Interaction                         U
  2  Lull                          x2    G      Interaction (fog)                   C
  3  Call of the Herd              x2    G      Card Advantage                      U
  3  Radiant's Judgment            x2    W      Interaction                         C
  4  Battle Screech                x2    W      Threat/Payoff (counter carriers)    U
```

### OTHER SPELLS (6)

```
CMC  Card                          Qty   Color  Role                                Rar
  1  Wild Growth                   x2    G      Mana/Acceleration                   C
  2  Invigorating Boon             x2    G      Counter-Recharge Engine             U
  3  Dragon Blood                  x2    C      Counter-Recharge Engine             U
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                                              Rar
Break Asunder                 x2    G      Hate: artifacts/enchantments - Against the cube's 24 artifacts or   C
Giant Spider                  x2    G      Flex: anti-evasion - Against the cube's 42 evasion cards - Reach b  C
Pacifism                      x2    W      Flex: extra creature answer - Against decks with multiple must-ans  C
Tormod's Crypt                x2    C      Hate: graveyard - Against any deck using the cube's 45 graveyard-i  U
Voice of All                  x2    W      Hate: targeted removal / evasion - Against decks whose removal is   U
```

## ANALYSIS

### DECK IDENTITY

A G/W midrange deck whose threats cannot be killed by damage. Phantom Flock and Phantom Nishoba are 0/0 creatures that enter with +1/+1 counters and replace every damage event with the removal of a single counter, so blockers and burn wear them down one hit at a time instead of killing them outright. The recharge rate is honest about its own arithmetic: Forgotten Ancient is the only source that produces more than one counter per turn and the rare cap allows exactly one copy, while Dragon Blood adds one counter per copy per turn at {3} and Invigorating Boon adds one per cycling trigger off 7 self-cycle sources. Against a single attacker that is a net gain; against a wide board it is parity, which is why Lull, Swords to Plowshares and Radiant's Judgment buy the turns and Battle Screech supplies the extra bodies the engine needs to point at. Triskelion converts a surplus of counters into direct damage for the last points.

### SLOT ALLOCATION

| Slot | Count | % of nonland | Rationale |
|---|---|---|---|
| lands | 17 | 42.5% | Computed by deck_audit.land_target; see land_math. |
| Threats/Payoffs | 8 | 35% | Mid-band. Raised from 7 to 8 in the grill repair by adding Battle Screech x2, whose four Bird tokens are the bodies the 5-copy engine bucket needs as targets. |
| Interaction | 6 | 26% | Inside the 20-30% midrange band after the repair (was 30.4% and included Primal Boost, which is a pump spell, not interaction). Composed of Swords to Plowshares x2, Radiant's Judgment x2 and Lull x2. |
| Counter-Recharge Engine | 5 | 22% | DEVIATION from the midrange 0% Engine band, thesis-grounded: the locked kill_mechanism names Dragon Blood, Forgotten Ancient and Invigorating Boon explicitly. Without an engine bucket the thesis is asserted, not built. |
| Card Advantage | 2 | 9% | Call of the Herd is two bodies from one card via flashback. |
| Mana/Acceleration | 2 | 9% | DEVIATION, thesis-grounded: the top end (Nishoba 7, Triskelion 6) is unreachable on 17 lands without acceleration. |

### COUNT-DEPENDENT VERDICTS

Every claim below is a numerator and a denominator against **this** list, not an adjective.

| Card | Verdict | Count |
|---|---|---|
| Invigorating Boon | INCLUDE x2 | Triggers on 'Whenever a player cycles a card'. Self-cycle sources in this 40 after the grill repair: Radiant's Judgment x2, Lull x2, Slippery Karst x2, Drifting Meadow x1 = 7 of 40 cards. The cube contains 23 cycling cards across all colours, so opponents supply further triggers. Declared at assembly weight 0.6 per copy. |
| Divine Sacrament | EXCLUDE | CORRECTED TWICE. 'White creatures get +1/+1' affects 3 of the 7 creature CARDS in this list - Phantom Flock x2 and Phantom Nishoba x1 (its colors field is ['G','W'], so a gold creature that is partly white DOES count); Kavu Primarch, Forgotten Ancient and Triskelion are green or colourless. Counting the 4 Battle Screech Bird tokens, which are white, it affects 7 of 11 bodies. The first version misstated this as 4 of 7 while enumerating only 3 and wrongly named Nishoba as not-white; the second version used a stale denominator of 8 creature cards, which included the since-cut Serra Angel and miscounted Battle Screech, a Sorcery, as a creature. The decisive ground is mechanical rather than numeric: '+1/+1' here is a static power/toughness modifier, NOT a +1/+1 counter, so it grants a Phantom zero additional shield charges - it turns a 3/3 into a 4/4 that still dies to the fourth damage event. |
| Lyra Dawnbringer | EXCLUDE | 'Other Angels you control get +1/+1 and have lifelink' finds 0 other Angels among the 23 nonland cards after Serra Angel was cut. The Challenger correctly noted the original verdict judged only the anthem clause and not the body; the body is genuinely strong, but the non-pipeline flier slot was deleted rather than upgraded - Battle Screech took it and produces 4 counter-carriers, which the engine needs. |
| Griffin Guide | EXCLUDE | 'Enchanted creature gets +2/+2 and has flying' is a static buff, not +1/+1 counters, so it adds 0 shield charges to a Phantom - the same mechanism error as Divine Sacrament. Its residual value is evasion, and 6 of the 11 bodies in this list already fly (Phantom Flock x2 plus the 4 Battle Screech Bird tokens). An earlier version of this verdict claimed '6 of the 8 creature copies plus all 4 Bird tokens already fly', which was wrong - among creature cards only Phantom Flock has Flying; Nishoba has Trample and Kavu Primarch, Triskelion and Forgotten Ancient have neither. |
| Squirrel Nest | EXCLUDE | 'Enchanted land has {T}: Create a 1/1 green Squirrel' costs the enchanted land's tap per body - one mana every turn it fires, in a deck needing {3} open for Dragon Blood and {5}{G}{W} for Nishoba. Battle Screech x2 answers the same target-starvation for zero ongoing cost; bodies after the repair are 11 (7 creature cards + 4 Bird tokens), up from 8. |
| Hunting Grounds | EXCLUDE | Threshold needs 7 cards in the graveyard, but this list's two best fillers exile themselves - Call of the Herd 'Flashback {3}{G} ... Then exile it' and Battle Screech 'Flashback - Tap three untapped white creatures ... Then exile it'. Net fill is the 7 cyclers, and cycling costs mana the curve needs. |
| Kavu Primarch | INCLUDE x2 at assembly weight 0.6 | Counters require the {4} kicker (8 mana total) or convoke help. Convoke fodder after the repair is 11 bodies (7 creature cards + 4 Bird tokens), up from the 8 the original weight was set against; the 0.6 weight is retained as the conservative claim. |

### MANA DERIVATION

**Land count.** Built to 17 against a recommendation of 18 (within the allowed 1). The justification rests ONLY on the self-converting lands, not on Wild Growth: the land_target call already takes accel=2 as an input (Wild Growth x2 carry the Mana Ramp tag), and that input is what produced the recorded adjustment of 0.56 - re-running the same audit with tags stripped (accel 0) at this list's avg MV of 3.17 gives 0.893 instead. Invoking those same two cards again to shave the 18th land would double-count them. The independent grounds are Slippery Karst x2 and Drifting Meadow x1, each reading 'Cycling {2}', which turn a surplus land into a card; an 18th land would raise flood risk in a list already carrying three self-converting lands.

**Composition.** Radiant Grove is the only free common GW dual and 'enters tapped'; both copies are run. Slippery Karst x2 and Drifting Meadow x1 also enter tapped, putting 5 of 17 lands on a tapped clock - the accepted cost of raising Invigorating Boon's trigger sources from 6 to 7, which is the statistic behind its 0.6 assembly weight. Drifting Meadow ('{T}: Add {W}. Cycling {2}') is capped at 1 rather than 2 because a sixth tapped land would begin to cost the turn-4 and turn-5 plays. Nantuko Monastery was rejected as GW fixing because its mana ability is '{T}: Add {C}', colourless only; its threshold creature-mode ('{G}{W}: becomes a 4/4 ... if seven or more cards in your graveyard') was separately assessed and declined, because this deck's two best graveyard fillers exile themselves on flashback (Call of the Herd, Battle Screech), so threshold is unreliable here. The five Lairs self-bounce and do not raise the battlefield land count.

**Pips.** W pips: Phantom Flock 4, Battle Screech 4, Swords to Plowshares 2, Radiant's Judgment 2, Phantom Nishoba 1 = 13. G pips: Kavu Primarch 2, Invigorating Boon 2, Lull 2, Call of the Herd 2, Wild Growth 2, Forgotten Ancient 1, Phantom Nishoba 1 = 12. W sources are set one above G because the only double-pip costs in the list are white (Phantom Flock {3}{W}{W}, Battle Screech {2}{W}{W}); every green cost is single-G. Audit gaps: G -4.9pp, W -6.8pp, both inside tolerance.

### SKELETON SELECTION (Phase 5B Step 0)

Archetype family **midrange** — Locked thesis default_role is 'controller'; the threat curve tops at 5-7; white supplies a removal toolbox; the deck wins combat attrition rather than racing.

Three independent, pool-blind sketchers each built one interpretation of that single family; an independent shape judge picked one whole build.

- **Chosen:** Sketch 2, lens *most grindy value*.
- **Judge grounds:** Only build that runs all three thesis-named recharge sources (Dragon Blood, Forgotten Ancient, Invigorating Boon) verbatim, so shield recharge outpacing combat spend - the literal kill_mechanism text - is actually built rather than asserted; its declared Counter-Recharge Engine band deviation is thesis-grounded, and grindy value matches default_role controller.
- **Rejected:** lens *most threat-dense / aggressive* — Fields the most damage-proof bodies but backs them with only one recharge source against far more shields to refill, understating the thesis's 'recharge faster than combat spends' clause; the 65% Threats blowout also sits against the locked controller role.
- **Rejected:** lens *most flexible toolbox* — Cut Forgotten Ancient, removing one of the three engines the locked thesis explicitly names, so its kill_mechanism execution is thinner.
- **Weak keystones:** The judge flagged Kavu Primarch, Savannah Lions and Battle Screech, all from rejected Sketch 1. The original resolution dismissed all three by sketch-membership, which the Challenger correctly called a category argument rather than an evaluation. Resolved on the merits here: Kavu Primarch is harvested and carried at reliability weight 0.6 (its counters require the {4} kicker); Savannah Lions is excluded because its oracle text is blank and it has no interaction with the counter engine; Battle Screech was RE-ASSESSED and INCLUDED x2 - its four flying tokens are exactly the 'other creatures' Forgotten Ancient's redistribution clause requires, and it was the pool's best answer to the engine's target-starvation.
- **Harvested from rejected builds:** Kavu Primarch (Threat/Payoff); Radiant's Judgment (Interaction); Battle Screech (Threat/Payoff (counter carriers))

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:4  3:6  4:5  5:2  6:1  7:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.2: Kavu Primarch@0.6, Kavu Primarch@0.6) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 5 copies (effective 4.2: Invigorating Boon@0.6, Invigorating Boon@0.6) → p=0.79 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 56%  T2 86%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Triskelion, Phantom Flock, Phantom Nishoba, Lull
  OK        single_large_threat: Swords to Plowshares, Radiant's Judgment
  CONCEDED  noncreature_permanents: No mainboard artifact/enchantment removal: the pool's answer in these colours is Break Asunder, which is narrow and would replace interaction that answers creatures, which is what kills this deck; it is sideboarded 2x.
  CONCEDED  stack: Green and white have no counterspells anywhere in this pool, so stack interaction is unavailable at any slot cost.
  CONCEDED  graveyard: Tormod's Crypt is the cube's only graveyard hate and is a dead card against the many decks that do not use the graveyard; it sits in the sideboard 2x rather than the maindeck.
```

_No WARN-tier structural flags were raised; the gate returned PASS on curve, assembly, goldfish and coverage._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Slippery Karst x2 and Drifting Meadow x1 read 'Cycling {2}', turning a surplus land into a card. Dragon Blood x2 ('{3}, {T}: Put a +1/+1 counter on target creature') is an uncapped mana sink that converts every excess land into permanent board growth - and after the repair it has 11 bodies to point at rather than 8. Kavu Primarch's Kicker {4} gives a second sink turning 8 mana into a 7/7. |
| screw | mitigation | Wild Growth x2 at {G} and 17 lands give a 2-land keep real upside; the goldfish check reports 84% keepable hands and 88% three-lands-by-turn-3. Swords to Plowshares at {W} and Invigorating Boon at {1}{G} are meaningful turn-1/2 plays off a stumbling draw. |
| decapitation | accepted | Forgotten Ancient is the single best target for removal and there is exactly one copy (rare, 1-copy cap). Mitigating would mean adding redundant engines the pool does not contain - Dragon Blood x2 is already the only other repeatable counter source in G/W. What survives its loss: the Phantoms are 3/3 and 7/7 on their own, and Dragon Blood recharges them without the Ancient, just more slowly. |
| gas-out | mitigation | Call of the Herd x2 is tagged 'Cards: Net-Positive' - 'Create a 3/3 green Elephant' plus 'Flashback {3}{G}' is two bodies from one card. Battle Screech x2 is the same shape with a different cost: two 1/1 fliers now, two more for 'Flashback - Tap three untapped white creatures you control'. That condition is priced honestly: this list holds only 3 white creature CARDS (Phantom Flock x2, Phantom Nishoba x1), so the realistic flashback line is the 2 Birds plus one white card - summoning sickness does not block it, because the cost is a tap requirement written into the flashback cost rather than the {T} symbol. Radiant's Judgment x2, Lull x2, Slippery Karst x2 and Drifting Meadow x1 all replace themselves via cycling (7 self-replacing cards). Dragon Blood converts an empty hand into board growth indefinitely. |
| raced | mitigation | REPAIRED after the grill marked this UNSATISFIED. Lull x2 is now MAINBOARD: 'Prevent all combat damage that would be dealt this turn' is a hard fog that buys a full turn for {1}{G}, and 'Cycling {2}' means it is never a dead draw. Phantom Nishoba's 'Whenever this creature deals damage, you gain that much life' on a 7/7 trample body swings a race by 7 per connection. The earlier version of this entry was wrong twice and is corrected here: it cited Giant Spider, which is a SIDEBOARD card and cannot satisfy a mainboard mode, and it claimed Phantom Flock 'blocks every turn without dying' when its oracle gives it three counters and it spends one per damage event, so unrecharged it blocks exactly three times. |
| disruption-fizzle | mitigation | This deck has no critical turn to interact with - it wins by accumulating board state, not by executing a combo turn. The closest thing is a Triskelion activation chain, and Triskelion's 'Remove a +1/+1 counter: deals 1 damage to any target' is instant-speed and can be fully drained in response to removal rather than fizzling. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Wrath of God | 'Destroy all creatures' - destruction, not damage, so the Phantoms' prevention clause does not protect them; symmetric sweeper in a deck whose plan is to hold a board. |
| Lyra Dawnbringer | 5/5 flying first strike lifelink is a strong body, but its Angel anthem finds 0 other Angels among the 24 nonland cards in this list, and it competes with Phantom Nishoba for the same rare slot. |
| Serra Avatar | {4}{W}{W}{W} is uncastable on a GW base with 1 free common dual; triple-white at 7 mana fails the pip math. |
| Divine Sacrament | 'White creatures get +1/+1' - only 8 of this list's creature copies are white, and it does nothing for Kavu Primarch, Forgotten Ancient, or Triskelion; a rare slot for a partial anthem. |
| Mystic Enforcer | Threshold needs seven cards in the graveyard; this deck runs 6 self-mill or discard outlets and is not built to fill a graveyard, so the +3/+3 and flying are unreliable. |
| Hunting Grounds | Same threshold problem, and its trigger is 'Whenever an opponent casts a spell' - a mythic slot gated on a graveyard this deck does not fill. |
| Sylvan Library | Strong card engine, but 'pay 4 life' per extra card is a real cost in a deck that expects to be raced, and it is a mythic competing with Forgotten Ancient and Phantom Nishoba for the 5-rare budget. |
| Storm Entity | 'enters with a +1/+1 counter on it for each other spell cast this turn' - red, outside GW, and this deck casts 1-2 spells a turn, not the 3+ that makes it a threat. |
| Spiritmonger | 6/6 for {3}{B}{G} that grows on combat damage - a qualifying black splash candidate, but it needs {B} on a GW base whose only free dual is Radiant Grove; adding black sources would degrade the already-THIN GW mana. |
| Yawgmoth, Thran Physician | Proliferate at '{B}{B}, Discard a card' would recharge Phantoms, but {B}{B} is unreachable in GW and its sacrifice engine pulls against holding a board. |
| Icatian Javelineers | Its counter is a javelin counter, not a +1/+1 counter - Dragon Blood, Forgotten Ancient and Invigorating Boon cannot recharge it, so it is outside the counter engine. |
| Nantuko Monastery | Reads as a GW land but its mana ability is '{T}: Add {C}' - colourless only, so it is not GW fixing; its creature mode also needs threshold. |
| Squirrel Nest | '{T}: Create a 1/1 green Squirrel' is a real engine, but it costs a land's tap every turn, competing with the {3} activation this deck needs for Dragon Blood. |
| Juggernaut | 5/3 for {4} colorless, but 'attacks each combat if able' removes the choice to hold back blockers, and it dies to damage unlike everything else in the threat suite. |
| Wild Dogs | 'the player with the most life gains control of this creature' - Phantom Nishoba and Kjeldoran Gargoyle gain life, which actively turns this card against its own deck. |
| Exploration | 'You may play an additional land on each of your turns' needs a land-heavy hand to convert; this deck runs 17 lands and no land tutoring beyond Nature's Lore, so the extra drop is often blank. |
| Gauntlet of Power | Mythic, 5 mana, and '+1/+1 to creatures of the chosen color' splits badly across a two-colour board - it would buff 8 of 14 creature copies at best. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 18 recommended  [PASS]
Avg CMC:     3.17   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.56 adj [MV 3.17 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  G  demand  48.0%  prod  52.9%  gap  -4.9pp  [OK]
  W  demand  52.0%  prod  58.8%  gap  -6.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
1a mainboard size                PASS   40 vs 40
1b sideboard size                PASS   10 vs 10
2 exact-name membership          PASS   []
3 copy limits                    PASS   []
3b rare+mythic <=5               PASS   3: ['Phantom Nishoba', 'Triskelion', 'Forgotten Ancient']
4 colour usability               PASS   []
5a splash <=3 per colour         PASS   []
5b splashed cards are candidates PASS   []
```
