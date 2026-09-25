---
deck_name: "rw-bre-lifegain-cascade"
cube_id: "ecl"
cube_slug: "ecl"
colors: "RW"
format: "40-card"
built_at: "2026-08-10T21:19:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
2x Eclipsed Realms      {C} always; any colour only for Giant spells/abilities (15 of 23 nonlands)
8x Mountain             
5x Plains               
2x Sacred Peaks         the pool's only free WR dual; enters tapped
```

### CREATURES (18)

```
CMC  Card                      Qty   Color  Role                                              Rar
  2  Burdened Stoneback        x2    W      Counter -> indestructible (sorcery only); Bre protection U
  2  Feisty Spikeling          x1    WR     MV2 changeling Giant; Elemental for behold        C
  2  Kinscaer Sentry           x1    W      Lifelink; deploys a body mid-combat               R
  2  Wanderbrine Preacher      x2    W      Gains 2 on TAP - no combat needed                 C
  3  Brambleback Brute         x2    R      Counter -> target can't block                     C
  3  Gangly Stompling          x2    RG     4/2 trample changeling Giant                      C
  3  Prideful Feastling        x2    WB     Printed-lifelink changeling Giant                 C
  4  Bre of Clan Stoutarm      x1    WR     PAYOFF - flying+lifelink; end step free-cast MV <= life gained R
  4  Champion of the Path      x1    R      7 power - the highest in R/W; Elementals ping on entry R
  5  Boldwyr Aggressor         x2    R      Tribe-wide double strike; doubles life gained     U
  5  Hovel Hurler              x2    WR     4/5 on entry (6/7 printed); grants another flying U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                      Qty   Color  Role                                              Rar
  1  Impolite Entrance         x2    R      Trample + haste, cantrips                         U
  2  Sear                      x2    R      Removal, 4 dmg instant                            U
  3  Crib Swap                 x1    W      Unconditional exile; a Giant AND Elemental card   U
```

## SIDEBOARD (10)

```
Card                      Qty   Color  Role / When to board in                                Rar
Giantfall                 x2    R      vs the 11-card artifact class; or a >4-toughness blocker U
Keep Out                  x2    W      vs the 21-card enchantment class                       C
Protective Response       x2    W      vs a single large blocker; convoke off 18 bodies       U
Pyrrhic Strike            x1    W      vs artifacts and enchantments together                 U
Rooftop Percher           x2    C      vs the 39-card graveyard class                         C
Winnowing                 x1    W      vs wide boards - nothing of yours dies                 R
```

## ANALYSIS

### DECK IDENTITY

Red-white lifegain combo built on Bre of Clan Stoutarm. Bre grants a creature flying and lifelink, and at end step converts the life gained that turn into a **free spell of equal or lower mana value**. Life gained equals the attacker's power, so power is what sets the ceiling - and because the deck's most expensive card is mana value 5, **the practical bar is 5 life**. Champion of the Path clears it alone at 7 power; under Boldwyr Aggressor's tribe-wide double strike, lifelink triggers on both damage steps and a 3-power Giant clears it too. Bre is a singleton rare, so the deck is built to win as a lifelink Giants beatdown without ever drawing it.

### THE HONEST ODDS

This is the fragile pipeline of the four, and the numbers should be stated rather than buried:

| Event | Probability by turn 7 |
|---|---|
| Bre drawn | **35.0%** |
| Bre **and** a lifegain source | **31.5%** |
| Bre **and** Boldwyr Aggressor (the doubled ceiling) | **20.4%** |

No legal configuration improves this - Bre is a rare, so exactly one copy exists. The deck is therefore designed so the combo is upside on a functional beatdown, and the whole build was chosen on that basis: the shape judge picked the fastest-clock sketch over the most-resilient one precisely because the resilient build spent all five rare slots protecting a card that shows up a third of the time.

### WHAT POWER ACTUALLY BUYS

An earlier version of this analysis claimed a "6-power Giant gains 12, setting the ceiling at mana value 12." That was wrong twice over, and the correction is the most useful thing in this document.

**First, the body did not exist.** Hovel Hurler is printed 6/7 but its own first line reads *"This creature enters with two -1/-1 counters on it"* - it is a **4/5** on the battlefield, and reaching 6/7 costs two sorcery-speed activations. Before Champion of the Path was added, the maximum on-board power in the entire deck was **4**.

**Second, the ceiling saturates.** The deck's highest mana value is 5, so power 5 covers all 23 nonlands and any power above that buys nothing. And Bre reads *"Otherwise, put it into your hand"* - **you get the card regardless of how much life you gained**. Power decides free-cast versus into-hand; it never decides card advantage. So the marginal value of the 13th through 18th body is zero *as combo fuel*.

The threat count is therefore justified on different grounds, stated plainly: **18 of 23 nonlands are bodies (78.3%, against a combo band of 5-15%)** because the deck's real plan in ~65% of games is a beatdown, and because bodies are its redundancy against removal. That is the argument; the fuel-gauge argument was arithmetic theatre.

### CHAMPION OF THE PATH IS THE KEY CARD

A 7/3 for {3}{R} - the highest power in R/W by three - whose additional cost is *"behold an Elemental and exile it."* Changeling makes every Shapeshifter card an Elemental, so **6 of 23 nonlands** feed that cost (Feisty Spikeling, Prideful Feastling x2, Gangly Stompling x2, Crib Swap), and *"When this creature leaves the battlefield, return the exiled card to its owner's hand"* makes the cost a loan rather than a loss. The cost is **mandatory**, so it is uncastable with no Elemental available; P(at least one of the 6 seen by turn 4 on the play) is 0.845.

Its second line is a bonus the deck did not plan for: *"Whenever another Elemental you control enters, it deals damage equal to its power to each opponent"* - every changeling that lands afterwards pings for its power.

### MANA, AND A MEASUREMENT WARNING

Honest mandatory demand is **R 14 / W 9**; unconditional production is **R 10 of 17** and **W 7 of 17**. No card costs {W}{W}, and the only strict double pip is Boldwyr Aggressor's {R}{R}.

The Phase 6 audit reports R 63.2% / W 36.8%, but it cannot see hybrid pips at all - `cuber/effective_cost.py:42` documents the gap - so it misses Prideful Feastling's two mandatory white and Gangly Stompling's two mandatory red. A 9-Mountain/4-Plains split scores a *better* colour gap on that broken measurement and is wrong in play. The 8/5 split here was chosen against the honest figures. `deck_audit` also credits Eclipsed Realms as five unconditional colours despite its restriction clause, so the raw production numbers in the audit block below read high.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:7  4:2  5:4
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 18 copies → p=1.00 (need ≥ 0.75)
  PASS  lifelink_source: 6 copies (effective 5.6: Kinscaer Sentry@0.8, Wanderbrine Preacher@0.9, Wanderbrine Preacher@0.9) → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 33%  T2 92%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Winnowing IS one-sided in this deck - 5 changeling creature copies (Feisty Spikeling, Prideful Feastling x2, Gangly Stompling x2) each share every creature type, so choosing one sacrifices nothing of mine. It is sideboarded rather than maindecked because at {4}{W}{W} it is a MV6 sorcery in a list whose goldfish turn is 7 and whose plan is to be attacking by turn 3.
  OK        single_large_threat: Crib Swap
  CONCEDED  noncreature_permanents: No mainboard artifact or enchantment answer. Corrected coverage: Keep Out destroys ENCHANTMENTS only ('4 damage to target tapped creature' or 'Destroy target enchantment') and does not touch artifacts; the sideboard answers the 11-card artifact class with Giantfall x2 and Pyrrhic Strike, and the 21-card enchantment class with Keep Out x2 and Pyrrhic Strike. Maindecking one would cost a body in a list whose plan is to be attacking by turn 3.
  CONCEDED  stack: The pool's only counterspells are Spell Snare, Wild Unraveling and Glen Elendra Guardian, all blue; 0 of the R/W-castable cards say 'counter target'. R and W cannot interact on the stack at any rate.
  CONCEDED  graveyard: Rooftop Percher exiles up to two cards from graveyards and gains 3 life, but at {5} for a 3/3 it does not advance a turn-5-6 clock; it is sideboarded against the cube's 39-card graveyard class.
```

Structural gate returned PASS on all four checks, so there are no WARN-tier deviations to answer.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Impolite Entrance x2 draws a card. Six mainboard copies carry mana sinks that also grow the body - Burdened Stoneback {1}{W}, Brambleback Brute {1}{R}, Hovel Hurler {R/W}{R/W} - though each is capped at two activations and is sorcery-speed, so it is 12 lifetime uses rather than a true repeatable sink. Bre's own {1}{W} plus tap is genuinely repeatable every turn. |
| screw | mitigation | 11 of 23 nonlands cost MV2 or less and 18 of 23 cost MV3 or less; goldfish 88% keepable, 3 lands by turn 3 in 91%, turn-2 play in 92%. No card costs {W}{W} - Abigale was cut for exactly that reason - and the only strict double pip is Boldwyr Aggressor's {R}{R} against 10 red sources. |
| decapitation | accepted | Bre is a rare, so exactly 1 copy is legal and P(drawn by turn 7) is 0.35; the full combo assembles at 31.5% and reaches its doubled ceiling at 20.4%. Goliath Daydreamer is the one card in this pool that reproduces the free-cast half, and it is not run because only 5 of 23 nonlands are instants or sorceries to fuel its dream counters. The cost is accepted rather than mitigated: mitigation is not available at the copy cap, and in the ~65% of games without Bre the deck is a lifelink Giants beatdown killing on turn 5-6, ahead of the combo's own goldfish turn of 7. |
| gas-out | mitigation | Impolite Entrance x2 replaces itself. Kinscaer Sentry converts an empty board into deployment. Bre's end step is card advantage on ANY lifegain, not just a big one, because the trigger ends "Otherwise, put it into your hand" - so even a Wanderbrine Preacher tap for 2 draws a card off the top every turn. |
| raced | mitigation | Lifegain is the racing answer and it no longer depends on connecting: Wanderbrine Preacher x2 gains 2 whenever it becomes tapped, which includes attacking into a certain block or convoking. Prideful Feastling x2 and Kinscaer Sentry carry printed lifelink, and Boldwyr doubles the gain. Sear x2 and Crib Swap answer an early threat; Burdened Stoneback blocks as a 2/2 and Hovel Hurler as a 4/5, stated at entry sizes. |
| disruption-fizzle | mitigation | The critical action is a combat step plus an end-step trigger, not a spell chain, and R/W face no counterspell in this pool. Burdened Stoneback's indestructible grant answers a destroy effect aimed at Bre, pre-committed in a main phase per "Activate only as a sorcery" - it does not answer exile, bounce or -X/-X, and Personify would have. If Bre dies the deck reverts to the beatdown plan rather than losing, because 14 of 23 nonlands are Giant bodies that never needed the combo. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Abigale, Eloquent First-Year (rare) | Cut in repair for two reasons at once. Its {W/B}{W/B} is {W}{W} in an R/W deck against 7 white sources, and its ETB reads 'loses all abilities' FIRST - which strips changeling, and stripping changeling strips every creature type, un-Giant-ing the body and cutting it off from Boldwyr Aggressor and Eclipsed Realms. Clean targets were only 4 of 15 Giant bodies. |
| Curious Colossus (mythic) | Cut from the sideboard. {5}{W}{W} at MV7 against 7 white sources, in a deck whose own plan concedes the game ends around turn 5-6. It was also one of two rare slots sitting in the sideboard while a maindeck 7-power body went unplayed. |
| Goliath Daydreamer (rare) | The genuine free-cast redundancy in this pool - 'Whenever this creature attacks, you may cast a spell from among cards you own in exile with dream counters on them without paying its mana cost' - on a 4/4 Giant. Not taken because only 5 of 23 nonlands are instants or sorceries to fuel its dream counters, and the rare slot bought 7 power instead. |
| Catharsis (mythic) | Cut at the sketch-judge stage: a one-turn team pump adds one mana value per body to a free-cast ceiling the deck already clears, which is a poor use of a slot under a 5-rare hard cap. |
| Reckless Ransacking (common) | '+3/+2 until end of turn. Create a Treasure token' is instant-speed +3 to the free-cast ceiling AND the deck's only ramp, with ramp_count at 0. A real absence; the slots went to cards that resolved BLOCKING findings instead. |
| Personify (uncommon) | Instant-speed protection that beats exile, bounce and -X/-X - the three things Burdened Stoneback's indestructible cannot touch - and leaves a changeling Giant token. Cut only for slot pressure. |
| Sizzling Changeling (uncommon) | A 3/2 changeling for {2}{R} is +1 on-board power per copy over Brambleback Brute's real 2/3, plus impulse value on death. A close call lost to the removal count. |
| Cinder Strike (common) | Cut in repair. Its 4-damage mode needs blight 1, and blighting a fuel body costs 1 power - which by this deck's own metric is 1-2 points of free-cast ceiling. |
| Dawn-Blessed Pennant (uncommon) | The judge's decisive objection to the redundancy sketch: gaining 1 life satisfies Bre's 'if you gained life this turn' but caps the free cast at mana value 1. Turning Bre on is trivial; turning Bre on for something worth casting is the actual problem. |
| Reaping Willow (uncommon) | 3/6 lifelink reads well until you apply its own 'enters with two -1/-1 counters': it is a 1/4, i.e. 1 point of fuel, for three mandatory white pips. |
| Adept Watershaper (rare) | Its 'Other tapped creatures you control have indestructible' genuinely shields Bre, because Bre taps for its own activation - a clever line from the rejected resilient sketch. Cut with that whole sketch: spending rares to protect a card that appears in ~35% of games leaves the other 65% slower. |
| Changeling Wayfinder / Firdoch Core (common) | Both are real engine cards in R/W - a basic-land tutor and an any-colour mana source, each a changeling Giant. Named here because the build originally claimed no such cards existed in these colours, which was false; they are cut for slots, not for absence. |
| Boldwyr Aggressor as a rare-budget item | Not applicable - it is an uncommon, so both copies are free against the 5-rare cap. Noted because it is the deck's largest multiplier and costs nothing from the budget. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 2.91 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  63.2%  prod  64.7%  gap  -1.5pp  [OK]
  W  demand  36.8%  prod  47.1%  gap -10.3pp  [OK]
```


## RESTRICTIONS COMPLIANCE

```
[PASS] commons/uncommons max 2 copies each
[PASS] rares/mythics max 1 copy each
[PASS] max 5 rares+mythics across MB+SB - 4 used (Kinscaer Sentry R, Bre of Clan Stoutarm R, Champion of the Path R; Winnowing R in sideboard)
[PASS] every card drawn from the ecl cube mainboard; basics format-supplied
[PASS] core colours R/W, no splash; Prideful Feastling's {W/B}, Gangly Stompling's {R/G} and Hovel Hurler's {R/W} pips all payable with red or white
[PASS] mainboard 40, sideboard 10
```
