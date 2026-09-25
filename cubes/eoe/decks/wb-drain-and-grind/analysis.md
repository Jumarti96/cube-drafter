---
deck_name: "wb-drain-and-grind"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WB"
format: "40-card"
built_at: "2026-08-04T04:45:27Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
1x Godless Shrine           ({T}: Add {W} or {B}.) As this land enters, you may pay 2 li
2x Sunlit Marsh             ({T}: Add {W} or {B}.) This land enters tapped.
9x Swamp                    basic
5x Plains                   basic
```

### CREATURES (15)
```
CMC  Card                           Qty  Col  Role                                     Rar
  1  Hullcarver                     x2   B    1-drop artifact creature, deathtouch     C
  2  Umbral Collar Zealot           x2   B    free unlimited sacrifice outlet          U
  2  Syr Vondam, Sunstar Exemplar   x1   WB   payoff - grows and gains per death/exile R
  3  Susurian Voidborn              x2   B    PAYOFF - drain per creature/artifact death U
  3  Comet Crawler                  x2   B    attack-gated outlet on a lifelink body   C
  3  Haliya, Guided by Light        x1   W    engine - lifegain to cards               R
  4  Swarm Culler                   x2   B    tap-gated outlet, draws, 2/4 flier       C
  4  Elegy Acolyte                  x1   B    engine - combat draw + Void token        R
  5  Syr Vondam, the Lucent         x2   WB   CLOSER - team deathtouch alpha strike    U
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                           Qty  Col  Role                                     Rar
  1  Tragic Trajectory              x2   B    removal - Void -10/-10 for one mana      U
  3  Emergency Eject                x2   W    removal - instant catch-all, any nonland U
```

### OTHER SPELLS (4)
```
CMC  Card                           Qty  Col  Role                                     Rar
  1  Nutrient Block                 x2   C    Food - fodder, life, cantrip             C
  3  Dubious Delicacy               x2   B    Food - flash removal + drain             U
```

## SIDEBOARD (10)
```
Card                           Qty  Col  Role / When to board in                        Rar
Radiant Strike                 x2   W    artifact removal +3 life; vs the 74-card artifact class C
Dauntless Scrapbot             x2   C    graveyard hate; vs the 31-card graveyard class U
Seam Rip                       x2   W    exile a MV<=2 permanent; vs cheap engines      U
Gravkill                       x2   B    exile a creature/Spacecraft; vs recursion      C
Archenemy's Charm              x1   B    instant exile or GY rebuy; vs big single threats R
Sothera, the Supervoid         x1   B    repeatable edict; vs hexproof/indestructible   M
```

## ANALYSIS

### DECK IDENTITY

A W/B lifegain-aristocrats deck that converts artifacts and expendable bodies into life swing. Susurian Voidborn taxes the opponent one life for every creature or artifact that dies on my side while paying that life back to me, and Umbral Collar Zealot supplies a free, untapped, unlimited sacrifice outlet so those deaths happen on demand rather than incidentally. Nutrient Block and Dubious Delicacy are the pool's only two printed Food cards and the deck runs all four legal copies; each is fodder, a life source, and in Nutrient Block's case a replacement card. The game ends either on accumulated drain or on a Syr Vondam, the Lucent attack that hands the whole board deathtouch.

### HOW THE DECK ACTUALLY KILLS

The drain is not incidental. Umbral Collar Zealot's `Sacrifice another creature or artifact: Surveil 1`
has no mana cost and no tap symbol, so with a Zealot and any spare permanent the deck chooses how many
death triggers happen each turn. Every one of those is simultaneously a Susurian Voidborn drain, a Syr
Vondam, Sunstar Exemplar counter-plus-life, and (for the turn) a live Void condition on Tragic Trajectory.

**The Void line.** Tragic Trajectory reads "Target creature gets -2/-2" but "Void - That creature gets
-10/-10 until end of turn instead if a nonland permanent left the battlefield this turn or a spell was
warped this turn." This deck controls that condition for free: one Umbral Collar Zealot activation, or
warping Susurian Voidborn for {B}, turns a one-mana -2/-2 into a one-mana -10/-10. Against a board with
no permanent worth eating, it is still -2/-2, so the card is never dead.

**Food is real but small, and I would rather say so.** The entire 271-card cube contains exactly two
printed Food cards - Nutrient Block and Dubious Delicacy - and this deck runs all four legal copies.
There is no Food-count payoff anywhere in the pool. What the deck actually exploits is that both Foods
are artifacts, and Susurian Voidborn counts artifacts dying, not Foods dying.

**Haliya's threshold is exact, not approximate.** Haliya draws "if you've gained 3 or more life this
turn." Nutrient Block's `{2}, {T}, Sacrifice this artifact: You gain 3 life` gains exactly 3 - one
activation alone crosses the line, and the same activation draws a second card off Nutrient Block's own
graveyard trigger. Two cards and 3 life for {2}.

### COUNT-DEPENDENT VERDICTS (recomputed on the final list)

| Claim | Count | Verdict |
|---|---|---|
| Susurian Voidborn's trigger has fodder | 12 of 23 nonland cards are sacrificeable creature-or-artifact permanents | INCLUDE |
| Swarm Culler / Comet Crawler sac costs are fed | 6 dedicated fodder copies (Nutrient Block x2, Hullcarver x2, Dubious Delicacy x2) plus Elegy Acolyte's Void Robot tokens | INCLUDE |
| Tragic Trajectory's Void mode is live | 12 of 23 nonland cards can put a nonland permanent in the graveyard on demand; Susurian Voidborn also warps for {B} | INCLUDE |
| Haliya's 3-life threshold is reachable unaided | 4 copies gain exactly 3 in one activation (Nutrient Block x2, Dubious Delicacy x2); 5 lifelink copies gain more in combat | INCLUDE |
| Zero Point Ballad as a sweeper | at X=2 it kills 7 of this deck's 15 creature copies | EXCLUDE |
| Lifelink density for the raced mode | 5 of 23 nonland cards (Comet Crawler x2, Syr Vondam the Lucent x2, Elegy Acolyte x1) | INCLUDE |

### GRILL REPAIRS APPLIED

The Challenger found nine blocking issues; all were repaired and re-verified in an approval round.
The substantive ones: Emergency Eject was being counted as this deck's ramp, but its Lander token goes
to the destroyed permanent's controller - the opponent - so the land-count derivation was rebuilt with
the correct acceleration figure (it landed on the same 17). Embrace Oblivion x2 was cut because its
"As an additional cost to cast this spell, sacrifice an artifact or creature" made it uncastable on
turn 1 in a deck with no one-mana permanents, breaking the mana-screw plan; Hullcarver x2 replaced it
and fixed the same hole. Swarm Culler x2 and Comet Crawler x2 were added after the assembly gate was
split into separate payoff / outlet / fodder roles, which exposed that the free sacrifice outlet was a
lone 2-of at p=0.58. Xu-Ifit was cut (summoning-sick, sorcery-speed, and it returns creatures with no
abilities) and Sothera moved to the sideboard, since as a Legendary Enchantment its own departure gives
Susurian Voidborn no trigger at all.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:6  2:3  3:9  4:3  5:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies → p=0.90 (need ≥ 0.75)
  PASS  outlet: 6 copies (effective 4.6: Swarm Culler@0.7, Swarm Culler@0.7, Comet Crawler@0.6, Comet Crawler@0.6) → p=0.82 (need ≥ 0.75)
  PASS  fodder: 6 copies → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 75%  T2 92%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The only sweeper castable in W/B in this pool is Zero Point Ballad ({X}{B}): 'Destroy all creatures with toughness X or less. You lose X life.' It is symmetric, and at X=2 it kills 7 of this deck's 15 creature copies (Hullcarver 1/1 x2, Umbral Collar Zealot 3/2 x2, Syr Vondam Sunstar Exemplar 2/2 x1, Susurian Voidborn 2/2 x2) - the sacrifice engine itself. The deck answers width by ignoring it: Susurian Voidborn's drain is not blocked, and Syr Vondam, the Lucent grants the whole team deathtouch on the attack so each of my bodies trades with any of theirs.
  OK        single_large_threat: Emergency Eject, Tragic Trajectory, Dubious Delicacy, Hullcarver
  OK        noncreature_permanents: Emergency Eject
  CONCEDED  stack: No card castable in W/B in this pool counters a spell; the cube's stack interaction sits in blue. Mitigating would require splashing U, which the locked W/B identity and a 3-dual mana base cannot support without pushing Syr Vondam, the Lucent's {2}{W}{B}{B} past the turn-7 thesis.
  CONCEDED  graveyard: Maindeck carries no graveyard hate; the 31-card graveyard class is answered from the sideboard by Dauntless Scrapbot x2 ('When this creature enters, exile each opponent's graveyard') and Gravkill x2 ('Exile target creature or Spacecraft'). Maindecking them would cost drain-engine slots live in every matchup, whereas graveyard decks are a subset of the field.
```
- No curve or goldfish WARN flags were raised: curve PASS at 1:6 2:3 3:9 4:3 5:2, goldfish PASS at 86% keepable and 88% three-lands-by-turn-3.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | 4 of 23 nonland cards are mana sinks that cost mana rather than cards: Nutrient Block x2 and Dubious Delicacy x2, each reading '{2}, {T}, Sacrifice this artifact:'. Nutrient Block's sacrifice also draws ('When this artifact is put into a graveyard from the battlefield, draw a card') and Dubious Delicacy's second mode sends 3 damage at the opponent's face. |
| screw | mitigation | 6 of 23 nonland cards cost one mana - Nutrient Block x2, Hullcarver x2, Tragic Trajectory x2 - and none carries an additional cost, so a two-land hand casts on curve from turn 1. Hullcarver ({B} 1/1 'Deathtouch') is a real turn-1 artifact creature. Goldfish reports 86% keepable hands and 3 lands by turn 3 in 88%. Godless Shrine enters untapped for 2 life when tempo matters. |
| decapitation | mitigation | The kill is not one card: 6 payoff copies across two independent mechanisms - death-drain (Susurian Voidborn x2, Syr Vondam Sunstar Exemplar x1) and combat-drain (Syr Vondam the Lucent x2, Elegy Acolyte x1) - giving p=0.90 to see one by turn 7. Answering any single copy leaves the other mechanism running. |
| gas-out | mitigation | 6 of 23 nonland cards draw or replace themselves: Nutrient Block x2 ('When this artifact is put into a graveyard from the battlefield, draw a card'), Swarm Culler x2 ('Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card' - repeatable and mana-free, fed by 6 fodder copies), Haliya x1 ('draw a card if you've gained 3 or more life this turn', which a single Nutrient Block activation meets exactly), and Elegy Acolyte x1 on combat damage. |
| raced | mitigation | Maindeck blockers cover both axes: Hullcarver x2 ({B} 1/1 deathtouch trades with any attacker from turn 1), Swarm Culler x2 (2/4 FLYING, which answers the cube's 56-card / 22.5% evasion class), and Comet Crawler x2 (2/3 lifelink). Lifelink totals 5 of 23 nonland cards - Comet Crawler x2, Syr Vondam the Lucent x2, Elegy Acolyte x1 - so the deck gains life while blocking rather than merely surviving. |
| disruption-fizzle | mitigation | There is no critical turn to interact with. Susurian Voidborn reads 'Whenever this creature or another creature or artifact you control dies' - the drain accrues one trigger at a time rather than as a chain, so a removal spell in response to any single sacrifice costs at most 1 life of drain. The one concentrated turn is a Syr Vondam, the Lucent attack; the second copy re-runs the same enter-or-attack trigger, and the deathtouch board persists. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Ragost, Deft Gastronaut | Colour-locked out: {R}{W}. Path C builds this as its own deck; admitting a red splash here would collapse Decks 1 and 3 into one list. |
| Space-Time Anomaly | {2}{W}{U} needs a third colour, and 'Target player mills cards equal to your life total' is 1 copy — at 25 life that mills 25 of a 40-card library, which is not a kill and cannot be recast in W/B. |
| Dawnstrike Vanguard | {5}{W} for a lifelink 4/5 whose payoff needs 'two or more tapped creatures' at end step; this deck sacrifices its creatures rather than keeping them tapped on board, and 6 mana is above the curve a 17-land 40-card list supports. |
| Flight-Deck Coordinator | 'if you control two or more tapped creatures, you gain 2 life' is a Station/tapped-matters payoff. This list attacks and sacrifices; it does not hold tapped creatures. It is a Path-B/Deck-2 card. |
| Requiem Monolith | Its ability grants a creature 'Whenever this creature is dealt damage, you draw that many cards and lose that much life' but 'That creature's controller MAY have this artifact deal 1 damage to it' — the opponent chooses, so it is not reliable removal or reliable draw, and it costs a rare slot. |
| Pinnacle Starcage | 'exile all artifacts and creatures with mana value 2 or less' is symmetric, and 14 of this deck's 23 nonland cards have MV<=2 — it exiles more of my board than theirs. |
| Monoist Circuit-Feeder | {4}{B}{B} is two turns past this deck's curve; the ETB scales with artifacts, of which this list runs 8 of 23 nonland cards. |
| Susurian Dirgecraft | {4}{B} and its ETB edict hits 'a nontoken creature of their choice' — the opponent picks their worst; at 5 mana that is below rate for this curve. |
| Hylderblade | Equipment with 'Equip {4}'; the Void auto-attach is real, but this deck's creatures are sacrifice fodder and an Aura-like buff on fodder is card disadvantage when it dies. |
| Scrounge for Eternity | 'sacrifice an artifact or creature' plus {2}{B} to reanimate an MV<=5 creature is a fine rate, but it competes with Xu-Ifit, which does it repeatedly for free once online. |
| Depressurize | '-3/-0 then destroy if power 0 or less' only kills 3 power or less and only at instant speed; Tragic Trajectory's Void mode kills anything for one mana in this deck. |
| Focus Fire | 'X damage where X is 2 plus creatures and/or Spacecraft you control' only hits ATTACKING OR BLOCKING creatures — it cannot answer a permanent that sits back, which is what this grind deck needs answered. |
| Seam Rip | Exiles a nonland permanent with 'mana value 2 or less' only; Banishing Light exiles any nonland permanent for one more mana. Sideboard consideration. |
| Timeline Culler | {B}{B} for a body with graveyard/flashback text that this list has no flashback payoffs for: 0 of 23 nonland cards care. |
| Alpharael, Stonechosen | {3}{B}{B} mythic; costs a scarce rare/mythic slot for a card outside the Lifegain and Aristocrats clusters. |
| Tezzeret, Cruel Captain | Colourless mythic that wants a dense artifact deck; this list runs 8 artifacts of 23 nonland cards, and the -3 fetches 'an artifact card with mana value 1 or less' — only Nutrient Block qualifies here (1 of 8). |
| Exalted Sunborn | Token doubling is real but the deck creates tokens off death triggers only (Beamsaw Prospector, Gravpack Monoist); {3}{W}{W} double-white is the wrong pip shape for a list whose pips run black-heavy. Cut for rare/mythic budget. |
| Archenemy's Charm | {B}{B}{B} triple black is castable but restrictive against a W/B mana base built on tapped duals; cut for rare/mythic budget at 6. |
| The Seriema | {1}{W}{W} double-white tutor in a black-heavy pip mix; the legends it finds (Syr Vondam, Haliya) are already at 3 physical copies between them. Cut for rare/mythic budget. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.47 adj [MV 2.65 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  77.8%  prod  70.6%  gap  +7.2pp  [OK]
  W  demand  22.2%  prod  47.1%  gap -24.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard only - every card verified by exact name against the working pool
[PASS] copy_limits: commons/uncommons <=2, rares/mythics <=1 - verified via cube_search.get_max_copies
[PASS] rare_mythic_cap: 6 of 6 used: Syr Vondam Sunstar Exemplar, Haliya, Elegy Acolyte, Godless Shrine (mainboard) + Archenemy's Charm, Sothera the Supervoid (sideboard)
[PASS] basics: Swamp x9 + Plains x5 - format-supplied, exempt from copy limits
[PASS] colour: core W/B, no splash; every nonland card returns non-None from effective_cost.best_mode(card, ['W','B'], [])
[PASS] 1 mainboard count: 40 == 40
[PASS] 1 sideboard count: 10 == 10
[PASS] 2 exact-name membership: all names in working pool
[PASS] 3 copy limits: all within card_pool_rules
[PASS] 4 colour usability (best_mode): all nonland usable in W/B
[PASS] 5 splash cap: off-core nonland cards: none
[PASS] 6 rare/mythic cap (user constraint <=6): 6 rare+mythic: ["Archenemy's Charm", 'Elegy Acolyte', 'Godless Shrine', 'Haliya, Guided by Light', 'Sothera, the Supervoid', 'Syr Vondam, Sunstar Exemplar']
```