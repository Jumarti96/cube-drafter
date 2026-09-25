---
deck_name: "gw-counters-aggro"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GW"
format: "40-card"
built_at: "2026-08-02T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x8  Plains          Basic
x7  Forest          Basic
x2  Radiant Grove   GW dual, enters tapped
```

### CREATURES (14)

```
CMC  Card                         Qty  Color  Role                             Rar
  2  Broodguard Elite             x2   G      Scalable X counters              U
  2  Dockworker Drone             x2   W      Enters countered; re-donates     C
  2  Dyadrine, Synthesis Amalgam  x1   GW     PAYOFF - X counters, trample     R
  3  Cosmogrand Zenith            x1   W      Mass counter / tokens            M
  3  Exosuit Savior               x2   W      Flying evasion; ETB re-buy       C
  3  Rayblade Trooper             x2   W      Counter distributor; tokens      U
  4  Drix Fatemaker               x2   G      PAYOFF - board-wide trample      C
  4  Ouroboroid                   x1   G      Compounding mass counters        M
  5  Haliya, Ascendant Cadet      x1   GW     PAYOFF - attack counters + draw  U
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                Qty  Color  Role                              Rar
  1  Focus Fire          x2   W      Scaling removal                   C
  1  Honor               x2   W      Counter + cantrip                 U
  2  Biosynthic Burst    x2   G      Counter + trample/indestructible  C
  2  Dual-Sun Technique  x1   W      Double strike + draw              U
  3  Emergency Eject     x1   W      Instant unconditional destroy     U
```

### OTHER SPELLS (1)

```
CMC  Card             Qty  Color  Role                 Rar
  3  Banishing Light  x1   W      Unconditional exile  C
```

## SIDEBOARD (10)

```
Card                Qty  Color  Role / When to board in                              Rar
Seam Rip            x2   W      1-mana exile of MV<=2 permanents - vs fast starts    U
Seedship Impact     x2   G      Instant artifact/enchantment removal                 U
Dauntless Scrapbot  x2   C      Graveyard hate - vs the 31 GY cards                  U
Shattered Wings     x2   G      Artifacts/enchantments/fliers - 29.7% artifact cube  C
Skystinger          x2   G      Reach blocker - vs the 22.5% evasion slice           C
```

## ANALYSIS

### DECK IDENTITY

GW +1/+1 Counters Aggro. Every counter this deck places is simultaneously an evasion grant, because Drix Fatemaker's static reads "Each creature you control with a +1/+1 counter on it has trample." The build therefore maximises counter-bearing bodies rather than single-target pump, and stacks three independent ways through a blocking board: trample (Drix Fatemaker, Dyadrine), flying (Exosuit Savior), and removing the blocker outright (Focus Fire, Banishing Light, Emergency Eject). Ouroboroid compounds the counters every combat from an empty hand, while Haliya and Dyadrine convert connecting attacks into cards.

### WHY THE COUNTS ARE THE ARGUMENT

The kill here is a **global static**, not a spell. Drix Fatemaker reads "Each creature you control with a +1/+1 counter on it has trample," so the deck's damage output is a function of *how many* counter-bearing bodies are on the battlefield, not of how good any single card is. That single fact drove every allocation decision:

| Quantity | Count | Why it matters |
|---|---|---|
| Nonland cards whose oracle contains "+1/+1 counter" | **17 of 23** | Every one of these is an evasion grant while Drix is out |
| Creature copies | **14 of 23** | The multiplier the static is applied to |
| Nonland cards at MV <= 2 | **12 of 23** | Plus three warp costs deployable off two lands |
| Double-pip cards | **4 of 23** | Broodguard Elite x2, Ouroboroid, Haliya - the manabase constraint |
| Net-positive card draw | **2 of 23** | Haliya, Dyadrine - honestly low; see gas-out below |
| Self-replacing | **3 of 23** | Honor x2, Dual-Sun Technique |

That is also why the Threats/Payoffs slot runs to 69.6% against a 45-55% band: a slot spent on a body *is* a slot spent on the kill.

### THE WARP CURVE

Three cards in this list have a warp cost that is strictly cheaper than their printed cost, and all three are two mana:

- Drix Fatemaker - printed {3}{G}, warp {1}{G}
- Rayblade Trooper - printed {2}{W}, warp {1}{W}
- Broodguard Elite - printed {X}{G}{G}, warp {X}{G}

Warp reads "You may cast this card from your hand for its warp cost. Exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn." The line that matters most: **hold Drix Fatemaker's warp for the alpha-strike turn.** Its static only needs to exist during that one combat, so warping it precombat on the turn you are attacking for lethal costs two mana instead of four and still grants the whole board trample.

### THE OUROBOROID / DRIX INTERACTION

Ouroboroid puts X counters on **each** creature at the beginning of combat, where X is its own power - and it is itself a creature, so it feeds its own X: 1, then 2, then 4. Under Drix Fatemaker every one of those creatures simultaneously gains trample. This is the deck's answer to a board stall and to an empty hand at once: the counters keep arriving with no cards spent.

### A CENSUS MISS WORTH KNOWING

The cube dossier's sweeper probe reports 5 sweepers, all in B / BR / C / R / UB. It misses `Beyond the Quiet` ({3}{W}{W}, "Exile all creatures and Spacecraft"), which is a real sweeper in this deck's own colours. Assume a GW opponent can have it; the deck's answer is the warp curve (a card in exile from a warp cast is not on the battlefield when a sorcery-speed wipe resolves) plus Rayblade Trooper's token rebuild.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:8  3:7  4:3  5:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6: Biosynthic Burst@0.5, Biosynthic Burst@0.5) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 15.6: Cosmogrand Zenith@0.6) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 55%  T2 94%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Drix Fatemaker's 'each creature you control with a +1/+1 counter on it has trample' means opposing chump blockers do not stop damage; a wide opposing board is raced through rather than swept, and the only GW sweeper in the pool (Beyond the Quiet, 'Exile all creatures and Spacecraft') would kill this deck's own board.
  OK        single_large_threat: Focus Fire, Focus Fire, Banishing Light, Emergency Eject
  OK        noncreature_permanents: Banishing Light, Emergency Eject
  CONCEDED  stack: Green and white contain no counterspell in this pool; the cube contains exactly 2 counterspells in 271 cards (0.7%), so the mainboard answer to an uncounterable spell is to have presented lethal trample damage by turn 5.
  CONCEDED  graveyard: No GW mainboard graveyard answer exists in this pool; Dauntless Scrapbot ('exile each opponent's graveyard') is a sideboard slot boarded against the cube's 31 graveyard-interaction cards.
```

- Curve check PASSED for aggro, no WARN flag.
- Goldfish check PASSED (85% keepable vs the 80% threshold), no WARN flag.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Broodguard Elite x2 ({X}{G}{G}) and Dyadrine ({X}{G}{W}, "enters with a number of +1/+1 counters on it equal to the amount of mana spent to cast it") are X-spells that convert every surplus land directly into +1/+1 counters, which is this deck's kill resource. Ouroboroid then multiplies those counters every combat at no mana cost. |
| screw | mitigation | 12 of 23 nonland cards cost MV<=2, and three warp costs let bigger cards be deployed off two lands: Drix Fatemaker warp {1}{G}, Rayblade Trooper warp {1}{W}, Broodguard Elite warp {X}{G}. Double-pip cards are only 4 of 23 (Broodguard Elite x2, Ouroboroid, Haliya). The goldfish sim reports 85% keepable openers and 94% on-curve play by turn 2. |
| decapitation | mitigation | The trample grant is not a single card: Drix Fatemaker x2 supplies the static, Dyadrine has "Trample" printed on itself, and Biosynthic Burst x2 grants "reach, trample, and indestructible until end of turn" at instant speed. Independently of all of them, Exosuit Savior x2 has printed "Flying", an evasion axis that works with Drix off the battlefield entirely. The assembly check gives p=0.86 of seeing a payoff copy by turn 5. |
| gas-out | mitigation | Net-positive cards are 2 of 23 (Haliya, Dyadrine) and self-replacing cards are 3 of 23 (Honor x2, Dual-Sun Technique), so the deck does not out-draw an opponent on cards alone. The load-bearing answer is Ouroboroid: "At the beginning of combat on your turn, put X +1/+1 counters on each creature you control, where X is this creature's power" needs no cards in hand at all, and X compounds off its own power, so board development continues after the deck has emptied its hand by design. Haliya and Dyadrine then refuel from the attack step itself. |
| raced | accepted | The fastest clocks in dossier.threat_profile are mono-red Kavu aggro and colourless artifact aggro. This deck runs 4 removal spells (17.4% of nonlands) and zero lifegain. Mitigating would mean adding blockers or lifegain (Flight-Deck Coordinator, Germinating Wurm, Eumidian Terrabotanist are all in the pool) at the cost of threat density, and threat density is exactly the resource Drix Fatemaker's board-wide trample grant multiplies. Trading bodies for life would weaken the kill mechanism in every game to survive one matchup. The deck accepts the race and answers it by being the faster deck: goldfish turn 5. |
| disruption-fizzle | mitigation | The kill is a persistent static, not a one-turn chain: Drix Fatemaker's "Each creature you control with a +1/+1 counter on it has trample" keeps applying every turn, so one removal spell mid-combat removes one attacker rather than the plan. Biosynthic Burst answers removal aimed at the key attacker at instant speed - "It gains reach, trample, and indestructible until end of turn. Untap it." - and the counter it places stays even if the rest of the effect is answered. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sunstar Chaplain (rare) | Its ability "{2}, Remove a +1/+1 counter from a creature you control: Tap target artifact or creature" strips the very counter that grants trample under Drix Fatemaker - anti-synergistic with the kill, and it would burn one of the six rare slots. |
| Dual-Sun Adepts | Double strike is not evasion: a blocked double-striker deals all its damage to the blocker. It was cut for Exosuit Savior, whose printed "Flying" works even when Drix Fatemaker has been answered. |
| Intrepid Tenderfoot | "{3}: Put a +1/+1 counter on this creature. Activate only as a sorcery" counters only itself at sorcery speed, so it cannot switch on the trample static for the rest of the board; this deck's own assembly check discounted it to 0.5 weight. |
| Meltstrider Eulogist | "Whenever a creature you control with a +1/+1 counter on it dies, draw a card" - this deck has no sacrifice outlet, so the trigger is entirely opponent-dependent. Cut for cards that act on the deck's own turn. |
| Luxknight Breacher | "enters with a +1/+1 counter on it for each other creature and/or artifact you control" makes it roughly a 4/4-5/5 for 4, but Drix Fatemaker occupies the same 4-slot at the same body size AND carries the trample static that is the actual kill. |
| Starport Security | Its discount clause is live (17 of 23 nonland cards place a counter), but the discounted ability is "{1}{W}, {T}: Tap another target creature" - a defensive tempo effect on a 1/1 body, which adds no counter-bearing power to a deck whose damage scales with body count. |
| Weftblade Enhancer | "put a +1/+1 counter on each of up to two target creatures" is two targets, not mass; at MV 6 (warp {2}{W}) it competes directly with Ouroboroid, which does strictly more every combat. |
| Atmospheric Greenhouse | "put a +1/+1 counter on each creature you control" is a genuine mass widener, but at MV 5 it arrives on the goldfish turn itself; Ouroboroid at MV 4 does the same thing repeatedly and one turn earlier. |
| Zealous Display | "Creatures you control get +2/+0 until end of turn" is a one-shot mass pump that places no +1/+1 counter, so it grants no trample under Drix Fatemaker and does not advance the counter-bearing-body count the kill scales with. |
| Terrasymbiosis (rare) | "Whenever you put one or more +1/+1 counters on a creature you control, you may draw that many cards" fires off 17 of 23 nonland cards, but at MV 3 it adds no damage to a turn-5 goldfish; the aggro build refuels through combat (Haliya, Dyadrine) instead. This card anchors the sibling engine build. |
| Loading Zone (rare) | Doubling counters is strong, but Drix Fatemaker's static keys on HAVING a counter, not on counter count, so the doubling converts to raw stats rather than to more trample bodies - a poor rate for a rare slot in the aggro build. |
| Frenzied Baloth (rare, sideboard consideration) | "Creature spells you control can't be countered" answers a class the cube barely contains: exactly 2 counterspells in 271 cards (0.7% density). Cut from the sideboard for a second Skystinger against the 56-card (22.5%) evasion slice. |
| Radiant Strike (sideboard consideration) | "Destroy target artifact or tapped creature. You gain 3 life" is a reasonable artifact answer plus life against the race, but Shattered Wings and Seedship Impact already cover artifacts at 4 copies and cost less. |
| Command Bridge (land) | Any-colour fixing, but "When this land enters, sacrifice it unless you tap an untapped permanent you control" taxes a creature on exactly the turns an aggro deck needs to attack. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 1   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.47 adj [MV 2.52 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  41.4%  prod  52.9%  gap -11.5pp  [OK]
  W  demand  58.6%  prod  58.8%  gap  -0.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card exceeds 2 copies; basic lands are format-supplied and exempt.
rares_mythics_max_1: PASS - Cosmogrand Zenith x1, Ouroboroid x1, Dyadrine x1.
max_6_rares_mythics_total: PASS - 3 of 6 used (all mainboard; zero rares in the sideboard).
colour_identity: PASS - every nonland card returns non-None from effective_cost.best_mode(card, ['G','W'], []).
splash_cap: PASS - splash_colors = [], splash_candidates = [].
```