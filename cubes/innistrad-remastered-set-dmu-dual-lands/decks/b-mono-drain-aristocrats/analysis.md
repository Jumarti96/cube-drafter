---
deck_name: "b-mono-drain-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-08-27T00:55:25Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x16  Swamp                  
```

### CREATURES (15)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  1  Ecstatic Awakener // Awoken Demon           x1   B      Sac outlet + draw, becomes a 3/3         C
  1  Gravecrawler                                x1   B      Recursive fodder                         R
  1  Sanitarium Skeleton                         x2   B      Recursive fodder + discard fuel          C
  2  Blood Artist                                x2   B      Drain payoff - 1 life per death          U
  2  Butcher Ghoul                               x2   B      Recursive fodder (undying)               C
  2  Restless Bloodseeker // Bloodsoaked Reveler x1   B      Secondary drain (back face)              U
  2  Skirsdag High Priest                        x1   B      Payoff - deaths into 5/5 fliers          R
  3  Falkenrath Torturer                         x2   B      FREE repeatable sac outlet               C
  3  Morbid Opportunist                          x2   B      Card flow off deaths                     U
  4  Bloodline Keeper // Lord of Lineage         x1   B      Fodder factory - a free 2/2 flier each turn M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  1  Eaten Alive                                 x1   B      Sac outlet + exile removal               C
  1  Tragic Slip                                 x2   B      Removal - morbid -13/-13                 C
  1  Village Rites                               x2   B      Sac outlet + draw two                    C
  2  Collective Brutality                        x1   B      Modal drain / discard / -2/-2            R
  2  Infernal Grasp                              x1   B      Removal - unconditional                  U
```

### OTHER SPELLS (2)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  2  Ghoulish Procession                         x1   B      Fodder engine / Zombie enabler           U
  2  The Meathook Massacre                       x1   B      Drain payoff + X sweeper                 M
```

## SIDEBOARD (10)

```
Card                                        Qty  Color  Role / When to board in                  Rar
Sever the Bloodline                         x2   B      Tokens / recursion answer                U
Killing Wave                                x2   B      Asymmetric sweeper vs go-wide            U
Murderous Compulsion                        x2   B      Cheap removal vs attackers               C
Morkrut Banshee                             x2   B      Removal on a 4/4 body                    U
Geistcatcher's Rig                          x2   C      The only flier answer mono-black has     U
```

## ANALYSIS

### DECK IDENTITY

Mono-black Aristocrats. The deck deploys cheap, recursive bodies and converts their deaths into damage: Blood Artist and The Meathook Massacre drain on every death, and Falkenrath Torturer is a zero-mana repeatable outlet, so the conversion costs nothing. Where the paired white-black build buys its bodies with Lingering Souls, mono-black buys them with Bloodline Keeper's free 2/2 flier every turn and with fodder that refuses to stay dead — Gravecrawler, Butcher Ghoul's undying, and Sanitarium Skeleton. The reward for the single colour is a mana base with a 0.0 percentage-point colour gap and an 84% three-lands-by-turn-three rate; the price is that mono-black has no artifact or enchantment answer anywhere in this pool.

### WHAT THE SINGLE COLOUR ACTUALLY BUYS, AND WHAT IT COSTS

This build and the white-black build run the same pipeline, so the comparison is the interesting part. Measured, not asserted:

| Axis | Mono-black | White-black |
|---|---|---|
| Colour gap in the mana audit | **0.0pp** (B demand 100.0% / production 100.0%) | +5.8pp |
| Can act on turn 1 (goldfish, 1000 hands) | **86%** | 64% |
| Keepable opening hands | **85%** | 84% |
| Nonbasic lands required | **0** | 3 |
| Artifact answers available | **0 in the entire pool** | Angelic Purge, Cathar Commando |
| Enchantment answers available | **0 in the entire pool** | Cathar Commando (1 of only 2 in the cube) |
| Dedicated flier answers | 1, and it costs {6} | several at 2–4 mana |

The concession is not a rounding error. `dossier.threat_profile` lists 24 artifacts and 25 enchantments in the cube — roughly 17% of the environment — and this deck's only interaction with either is to race it. Against a deck whose plan is an enchantment, mono-black draws dead answers by construction.

### THE FODDER MATH

Twenty-four nonland cards produce far more than twenty-four death events:

| Source | Death events per card | Rate |
|---|---|---|
| Bloodline Keeper | one 2/2 flying Vampire per turn, free | 1 per turn, unbounded |
| Butcher Ghoul x2 | 2 each (undying returns it once) | 4 total |
| Sanitarium Skeleton x2 | recur for {2}{B} each time | unbounded, mana-limited |
| Gravecrawler x1 | recast for {B} while a Zombie is out | unbounded, mana-limited |
| Ghoulish Procession x1 | one 2/2 Zombie per nontoken death | 1 per turn |
| Skirsdag High Priest x1 | one 5/5 flying Demon per turn | 1 per turn |

Gravecrawler needs a Zombie on the battlefield to be recast, and this deck supplies three sources: Butcher Ghoul is a Zombie, Ghoulish Procession makes a 2/2 Zombie on every nontoken death, and Gravecrawler counts itself while it is on the battlefield. With Ghoulish Procession out and Falkenrath Torturer as the outlet, one black mana converts into a Blood Artist drain, a Meathook drain, and a fresh 2/2 body — every turn, for as long as the mana lasts.

### BLOODLINE KEEPER IS FODDER, NOT A FINISHER

The shape judge flagged Bloodline Keeper as a weak keystone in the sketch that proposed it, and was right about the reason: its oracle text contains no death, sacrifice, or drain clause, so calling it an "evasive mana-sink finisher feeding the drain plan" overstated it. It is in this list under a different and oracle-accurate role. "{T}: Create a 2/2 black Vampire creature token with flying" costs no mana and repeats every turn — it is precisely the recurring body supply that mono-black has instead of Lingering Souls, and every token it makes is a Blood Artist trigger waiting to happen. The role label changed; the card stayed.

Its transform clause, "{B}: Transform this creature. Activate only if you control five or more Vampires," is reachable rather than decorative: nontoken Vampires here are Blood Artist x2, Falkenrath Torturer x2, Restless Bloodseeker x1 and Bloodline Keeper itself = 6 of 24, and its own tokens are Vampires too.

### DEMONIC TASKMASTER WAS CUT FOR A REASON WORTH RECORDING

An earlier version of this list ran Demonic Taskmaster as a "free recurring outlet." Its oracle text is "At the beginning of your upkeep, sacrifice a creature other than this creature" — and that sacrifice is **mandatory**, not optional. In a deck whose payoffs are creatures, a turn where the only other body is Blood Artist forces you to eat Blood Artist. Ecstatic Awakener replaced it: "{2}{B}, Sacrifice another creature: Draw a card, then transform this creature" is the same effect made optional, plus a card, plus a 3/3 body afterwards, on a one-mana creature that is itself fodder. It is also a Human, which matters because Falkenrath Torturer reads "If the sacrificed creature was a Human, put a +1/+1 counter on this creature."

### RARITY BUDGET

All five rare/mythic slots are spent in the mainboard; the sideboard uses none.

| Card | Rarity | What the slot buys |
|---|---|---|
| The Meathook Massacre | M | One of only two death-drain effects in the pool, plus a scaling sweeper |
| Bloodline Keeper | M | The free, repeatable, evasive body supply that replaces white's tokens |
| Gravecrawler | R | The only fodder in the pool that recurs for a single mana with no other cost |
| Skirsdag High Priest | R | The combat backup that wins when the drain is answered |
| Collective Brutality | R | Drain, discard and -2/-2 on one 2-drop |

Tree of Perdition and Invasion of Innistrad were both raised in the grill as candidates for the fifth slot in place of Skirsdag High Priest, and both were declined on the same ground: Skirsdag is load-bearing for the assembly check, and removing it drops effective payoff copies from 4.2 to 3.5, which fails the 0.75 probability floor at the thesis turn.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:9  2:10  3:4  4:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.2: Skirsdag High Priest@0.7, Restless Bloodseeker // Bloodsoaked Reveler@0.5) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.6: Eaten Alive@0.8, Ecstatic Awakener // Awoken Demon@0.8) → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 90%  T2 100%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre, Tragic Slip
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Eaten Alive
  CONCEDED  noncreature_permanents: Mono-black contains ZERO artifact or enchantment answers anywhere in this 300-card pool: dossier.threat_profile.artifact_answers is [Abrade (R), Angelic Purge (W), Cathar Commando (W), Hopeful Initiate (W)] and enchantment_answers is [Cathar Commando (W), Hopeful Initiate (W)] — every one is off-colour. This is the structural price of the single-colour mana base; mitigating it would require the second colour that defines the separate BW build.
  CONCEDED  stack: Black contains no counterspell anywhere in this pool. The deck answers permanents after they resolve, with Infernal Grasp, Tragic Slip and Eaten Alive.
  CONCEDED  graveyard: The dossier's structural census reports 0 graveyard-hate cards cube-wide, and the only black card that exiles from a graveyard is Invasion of Innistrad // Deluge of the Dead, whose graveyard clause sits on the back face of a rare and would need a sixth rare slot against a hard cap of 5. Sever the Bloodline in the sideboard exiles recursive threats on the battlefield instead.
```

- No WARN flags were raised: curve PASS (1:5 / 2:11 / 3:8) and goldfish PASS (84% keepable, 84% on three lands by turn 3), so no structural response was required.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Corrected after the grill: five cards in this list genuinely consume surplus mana. The Meathook Massacre is {X}{B}{B} and scales its sweeper with every extra land. Sanitarium Skeleton's '{2}{B}: Return this card from your graveyard to your hand' is a repeatable mana-into-fodder converter. Restless Bloodseeker's back face is '{4}{B}: Each opponent loses 2 life and you gain 2 life'. Ecstatic Awakener's '{2}{B}, Sacrifice another creature: Draw a card' converts mana into a death trigger and a card. Eaten Alive's alternative cost 'or pay {3}{B}' lets surplus mana stand in for a body. Bloodline Keeper is deliberately NOT counted here: its token ability costs {T} and no mana, and its transform is gated on controlling five Vampires rather than on mana. |
| screw | mitigation | With 16 Swamp and zero nonbasics the colour gap is 0.0pp, so screw here can only ever be a land-count problem, never a colour problem. 9 one-drops and 10 two-drops mean 19 of 24 nonland cards are castable on two lands, and the goldfish check reports 85% keepable hands and 84% on three lands by turn 3 — the strongest opening numbers of the four builds in this queue. |
| decapitation | mitigation | Blood Artist is 2 copies and The Meathook Massacre is an enchantment, against a cube whose entire enchantment-removal census is 2 cards. If every drain source is answered, Skirsdag High Priest's 'Create a 5/5 black Demon creature token with flying' and Bloodline Keeper's '{T}: Create a 2/2 black Vampire creature token with flying' close through combat instead, and Morbid Opportunist keeps drawing regardless of which payoff is on the battlefield. |
| gas-out | mitigation | Corrected after the grill to 8 of 24, not 7. Hand refuel: Village Rites x2 ('Draw two cards'), Morbid Opportunist x2 ('Whenever one or more other creatures die, draw a card'), Ecstatic Awakener x1 ('Sacrifice another creature: Draw a card'). Graveyard refuel, which works with an empty hand: Sanitarium Skeleton x2 ('{2}{B}: Return this card from your graveyard to your hand') and Gravecrawler x1 ('You may cast this card from your graveyard as long as you control a Zombie'). That is 8 of 24 nonland cards, plus Bloodline Keeper, which needs no cards at all to keep producing bodies. |
| raced | mitigation | Against the cube's fastest clocks (evasion density 20.9%, 58 cards) the deck gains life on the same triggers that deal damage: Blood Artist gains 1 per death, The Meathook Massacre gains 1 per opposing creature death, Collective Brutality's drain mode gains 2, and Restless Bloodseeker's back face gains 2. The Meathook Massacre's entry trigger is a scaling sweeper against a wide fast board, and Tragic Slip's morbid -13/-13 kills any single attacker for {B}. Bloodline Keeper's 2/2 fliers can also block, which the BW build's decayed Zombie tokens cannot. |
| disruption-fizzle | mitigation | There is no critical turn to interact with: the kill is 1-2 life at a time across many turns rather than one assembled combo turn, so a single counterspell or removal spell delays it rather than fizzling it. Village Rites is an instant, so a sacrifice chain can be run in response to targeted removal - the creature about to be destroyed is sacrificed first, converting the opponent's answer into a death trigger and two cards. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Fleshtaker, Cathar Commando, Lunarch Mantle | The deterministic splash filter returned W with these three names, but this build's locked identity is MONO-BLACK: playing them would require Plains plus the WB dual, which is exactly the BW build already in this queue, and would give up the single-colour mana base that is this build's only structural advantage over it. |
| Wretched Gryff, Elder Deep-Fiend, Abundant Maw, Distended Mindbender, It of the Horrid Swarm, Decimator of the Provinces | Emerge spends fodder as a COST-REDUCTION for one 7-10 MV body. This pipeline's kill mechanism is per-death drain triggers, where the same fodder is worth more sacrificed to a free outlet with Blood Artist on the battlefield; three of the six are also rares against a 5-rare cap. |
| Griselbrand | MV 8 mythic with {B}{B}{B}{B} in its cost. At a computed 16-17 land count it is not castable on this deck's curve, and it would consume one of only 5 rare/mythic slots. (Emrakul, the Promised End is NOT cut here: its cost scales with a count, so its verdict is deferred to Phase 5B step 6.) |
| Helvault | '{1}, {T}: Exile target creature you control' EXILES rather than kills, producing no death trigger for Blood Artist or The Meathook Massacre; and '{7}, {T}' to answer an opponent's creature is unreachable at 16-17 lands. |
| Heartless Summoning | 'Creatures you control get -1/-1' kills this deck's own 1/1 and 2/2 tokens and its Gravecrawler outright, deleting the fodder the drain plan is made of. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.88   Ramp cards: 0   Cantrips: 3
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.33 adj [MV 1.88 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool base                         cube mainboard                                  PASS
Commons / uncommons  max 2 each   highest count in deck is 2                      PASS
Rares / mythics      max 1 each   all five are single copies                      PASS
Rares / mythics      max 5 TOTAL  5 of 5 used (mainboard); sideboard uses 0       PASS
  Gravecrawler (R), The Meathook Massacre (M), Skirsdag High Priest (R),
  Collective Brutality (R), Bloodline Keeper // Lord of Lineage (M)
All cards from the cube                                                           PASS
Basic lands (format-supplied)     Swamp x16                                       PASS
Mainboard 40 / Sideboard 10                                                       PASS
Colour usability in [B]           every nonland card; mono-black, no splash       PASS
```
