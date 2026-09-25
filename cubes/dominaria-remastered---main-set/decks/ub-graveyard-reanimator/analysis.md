---
deck_name: "ub-graveyard-reanimator"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-30T21:54:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
10x Swamp                  Black source (primary)
5x Island                 Blue source
1x Contaminated Aquifer   UB dual, tapped
1x Polluted Mire          B source, tapped; cycles
1x Remote Isle            U source, tapped; cycles
```

### CREATURES (9)
```
CMC  Card                          Qty  Color  Role                                       Rar
  2  Aquamoeba                    x2   U     Free repeatable discard outlet             C
  3  Undead Gladiator             x1   B     Inexhaustible recurring outlet + body + Dread Return fodder U
  4  Body Snatcher                x1   B     Self-contained bin (ETB discard creature) + reanimate on death R
  5  Chainer, Dementia Master     x1   B     Repeatable reanimation from ANY graveyard  R
  6  Necrosavant                  x2   B     Self-reanimating 5/5 target/recursion spine (GY-hate-proof) U
  7  Aven Fateshaper              x1   U     Evasive 4/5 target + hardcastable selection U
  8  Denizen of the Deep          x1   U     Primary haymaker — 11/11 reanimated T4-6   R
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                          Qty  Color  Role                                       Rar
  1  Duress                       x1   B     Strip the answer to the reanimated haymaker C
  1  Entomb                       x1   B     Bin the haymaker to GY turn 1 (key enabler) R
  2  Chainer's Edict              x1   B     Edict; also kills own Body Snatcher to trigger reanimation U
  2  Counterspell                 x2   U     Protect the reanimation turn               C
  2  Terror                       x1   B     Cheap removal to survive                   C
  3  Frantic Search               x1   U     Free loot outlet — dig + bin               C
  4  Deep Analysis                x1   U     Card advantage + fills GY (flashback)      C
  4  Dread Return                 x2   B     Reanimate any creature; flashback = sac 3 for a 2nd U
  4  Fact or Fiction              x1   U     Card advantage that dumps cards into GY    U
```

### OTHER SPELLS (2)
```
CMC  Card                          Qty  Color  Role                                       Rar
  2  Oversold Cemetery            x1   B     Grind recursion — return a creature each upkeep (4+ in GY) R
  2  Zombie Infestation           x1   B     Discard outlet + Zombie tokens (flashback/sac fodder) U
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                                   Rar
Tormod's Crypt               x2   C     GY hate — vs faster/rival graveyard decks — asymmetric (Entomb rebuilds ours) U
Duress                       x1   B     Hand disruption — 2nd copy vs control/combo — protect the go-off C
Faceless Butcher             x1   B     Creature removal on a body — vs midrange/fatties                      U
Terror                       x1   B     Cheap removal — 2nd copy vs aggro                        C
Ichor Slick                  x2   B     Removal + cycling bin — vs aggro/go-wide; cycles to fill GY      C
Man-o'-War                   x1   U     Tempo bounce on a body — vs aggro / problem ETB                   C
Chainer's Edict              x1   B     Edict — 2nd copy vs hexproof/protection/single big threat U
Urborg Uprising              x1   B     Bulk recursion — vs grindy attrition — refill from GY     C
```

## ANALYSIS

### DECK IDENTITY
UB graveyard-reanimator. Discard is fuel: Entomb (and the outlets Aquamoeba, Undead Gladiator, Zombie Infestation, Frantic Search) bins a fat creature, then a reanimation spell (Dread Return, Body Snatcher, Chainer) cheats it onto the battlefield by turn 4-6 — most often an 11/11 Denizen of the Deep. When the nut draw is disrupted, the deck grinds: Necrosavant self-reanimates, Oversold Cemetery and Chainer recur creatures, Undead Gladiator loops itself, and Fact or Fiction / Deep Analysis refuel, while Counterspell, Terror, Chainer's Edict, and Duress protect the reanimation turn.

### HOW IT DIFFERS FROM THE TEMPO BUILD
This is the black-primary member of the three UB shells: it uses the SAME discard engine but as *fuel for the graveyard* rather than for madness discounts. Instead of chipping in with evasive fliers, it cheats one oversized threat into play years ahead of its mana cost. The self-grill's honest read: it plays more like a reanimator-MIDRANGE than a hard combo — there is no deterministic kill loop, and Denizen of the Deep (11/11, no evasion, ETB bounces your own board) is the pool's ceiling for a fat target rather than a true bomb. Its edge over the tempo deck is a faster, more resilient single threat plus a graveyard that grinds through removal; its cost is a slower, greedier, more disruptable manabase.

### KEY INTERACTIONS
- **The go-off, counted:** 4 reanimation vectors that put a creature onto the battlefield (Dread Return x2, Body Snatcher, Chainer) + Necrosavant's self-reanimation, fed by 5 bin outlets (Entomb, Aquamoeba x2, Undead Gladiator, Zombie Infestation, Frantic Search) and 4 fat targets (Denizen, Necrosavant x2, Aven Fateshaper). Entomb + Dread Return is the turn-1-into-turn-4 nut.
- **Denizen's ETB is a constraint, not upside:** "return each other creature you control to its owner's hand" bounces YOUR board — reanimate it onto an empty board, with Necrosavant / Oversold Cemetery grinding underneath rather than a wide team.
- **Chainer fragility:** "When Chainer leaves the battlefield, exile all Nightmares" — everything Chainer reanimates is a Nightmare and evaporates if Chainer dies. Reanimate with Dread Return when you want a permanent body.
- **Body Snatcher loop:** it self-bins a creature on ETB and reanimates on death — kill it with your own Chainer's Edict to fire the return on demand.

### STRUCTURAL CHECKS
```
── Structural Checks: WARN ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (22 nonland):  1:2  2:8  3:2  4:5  5:1  6:2  7:1  8:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  reanimation: 6 copies (effective 4.6: Body Snatcher@0.7, Chainer, Dementia Master@0.8, Necrosavant@0.55, Necrosavant@0.55) → p=0.80 (need ≥ 0.75)
  PASS  fat_target: 5 copies (effective 4.9: Entomb@0.9) → p=0.82 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 34%  T2 90%  T3 96%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper; single oversized blocker (Denizen 11/11) + spot removal (Terror, Chainer Edict). SB Faceless Butcher + Ichor Slick x2.
  OK        single_large_threat: Terror, Chainer's Edict, Denizen of the Deep
  OK        noncreature_permanents: Counterspell
  OK        stack: Counterspell
  CONCEDED  graveyard: Our plan lives in the GY; Tormod Crypt is the SB answer vs rival GY decks.
```
- Goldfish is WARN-tier (keepable at the 80% floor): accepted. 18 lands (the land_target recommendation) firms the deck's real BBB demand — Chainer's {B}{B}{B} activation and Necrosavant's per-upkeep {3}{B}{B} are not in the cast-cost pip model — putting 3 lands in hand by turn 3 in 92% of games; the small flood tail is absorbed by cycling lands, Undead Gladiator, and graveyard recursion.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Reanimation makes flood irrelevant to the win — the haymaker comes from the graveyard, not the top of the library; Polluted Mire / Remote Isle cycle surplus lands; Undead Gladiator cycles / recurs; Necrosavant and Oversold Cemetery turn spare mana into recurring bodies. |
| screw | accepted | The deck genuinely wants 3-4 lands with BBB to reanimate and protect, so keepable sits right at the 80% floor; lowering the curve to mitigate would mean cutting the fat targets or reanimation spells — deleting the deck's identity. Accepted; 18 lands puts 3 lands in hand by turn 3 in 92% of games, and cheap outlets (Aquamoeba x2, Entomb, Frantic Search) smooth early turns. |
| decapitation | mitigation | No single key card — 3 independent reanimation vectors (Dread Return x2, Body Snatcher, Chainer), 2 self-sufficient recursion engines (Necrosavant, Oversold Cemetery), and Entomb to re-bin; answering one haymaker leaves the next plus the grind. |
| gas-out | mitigation | The graveyard IS the resource: Oversold Cemetery and Chainer recur creatures indefinitely, Necrosavant self-returns, Undead Gladiator loops itself, and Dread Return flashback / Fact or Fiction / Deep Analysis refuel. A reanimator does not run out of gas while the yard holds creatures. |
| raced | accepted | Against the fastest clocks (Sulfuric Vortex, mono-red) a turn-4-6 reanimator with no maindeck lifegain and a non-evasive payoff can die before stabilizing; mitigating with more cheap interaction would cost the engine density that makes the plan consistent. We accept the risk, lean on Counterspell x2 + Terror + Chainer's Edict to survive, side in Ichor Slick x2 / Faceless Butcher / Man-o'-War, and note a reanimated Denizen (11/11) walls the ground. |
| disruption-fizzle | mitigation | Redundant reanimation + Duress + Counterspell: a countered reanimation spell is followed by a second vector (Body Snatcher / Chainer) or the self-recurring Necrosavant; Duress proactively strips the answer before the go-off turn. |

### CARDS CONSIDERED BUT EXCLUDED
- Serra Avatar / Shivan Dragon / Worldgorger Dragon — Bigger/off-color targets, but not castable in UB (best_mode None) so they fail the color-usability gate, and Worldgorger's ETB exiles your own permanents — no fair use here.
- Life // Death — Death half reanimates for {1}{B}, but the split card's identity is BG and best_mode returns None in UB — fails the color gate.
- Vampiric Tutor / Mystical Tutor — Would add consistency finding Entomb/Dread Return, but each is a rare and the 5 rare/mythic budget is already spent on the reanimation core.
- Jalum Tome — a repeatable colorless loot outlet, cut for Undead Gladiator (which loots by cycling AND recurs itself as a body/fodder).
- Phyrexian Rager — cheap ETB-draw body, cut to make room for the 18th land; Undead Gladiator covers the fodder-body role.
- Recoil — bounce + discard; strong flex that clears a chump blocker for the non-evasive Denizen or strips a counter (grill-recommended if you want more protection).
- Street Wraith — free self-mill of a creature via cycling; a zero-mana way to bin a body / feed Dread Return.
- Circular Logic — a graveyard-scaling counter free via madness off the outlets; excellent protection if you trim an engine slot.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.45   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.27 adj [MV 3.45 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  64.7%  prod  66.7%  gap  -2.0pp  [OK]
  U  demand  35.3%  prod  38.9%  gap  -3.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
- Commons/uncommons <= 2 copies each: PASS
- Rares/mythics <= 1 copy each: PASS
- Max 5 rares/mythics total (main+SB): PASS — exactly 5, all mainboard (Denizen of the Deep, Entomb, Body Snatcher, Chainer Dementia Master, Oversold Cemetery); SB carries 0 rares
- All nonland cards usable in U/B: PASS (off-color/uncastable fatties like Serra Avatar rejected)
- Basic lands unlimited: PASS (Swamp x10, Island x5)
```
