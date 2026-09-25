---
deck_name: "wb-vondam-exile-aristocrats"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WB"
format: "40-card"
built_at: "2026-08-03T16:50:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x8  Swamp           untapped B source
x6  Plains          untapped W source
x2  Sunlit Marsh    WB dual, enters tapped
x1  Godless Shrine  WB dual, rare; 'you may pay 2 life' or it enters tapped
```

### CREATURES (15)

```
CMC  Card                          Qty  Color  Role                                                                 Rar
  2  Dockworker Drone              x2   W      Threat/Fodder — guaranteed nontoken counter-bearer                   C
  2  Lightless Evangel             x2   B      Payoff — redundant counter accumulator                               U
  2  Syr Vondam, Sunstar Exemplar  x1   WB     Payoff — locked pipeline payoff                                      R
  2  Timeline Culler               x1   B      Engine — cheap warp/exile trigger, one {B} warp per graveyard visit  U
  2  Umbral Collar Zealot          x2   B      Engine — free unlimited sacrifice outlet                             U
  3  Insatiable Skittermaw         x1   B      Threat — redundant growing menace clock                              C
  3  Rayblade Trooper              x2   W      Payoff — counter-to-fodder recycler                                  U
  3  Susurian Voidborn             x2   B      Payoff — redundant aristocrats drain                                 U
  3  Xu-Ifit, Osteoharmonist       x1   B      Engine — mana-free recurring death loop with the free sac outlet     R
  4  Elegy Acolyte                 x1   B      Payoff/Engine — renewable fodder + card draw                         R
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                  Qty  Color  Role                                                          Rar
  1  Embrace Oblivion      x2   B      Interaction — removal stapled to a sacrifice                  C
  1  Tragic Trajectory     x2   B      Interaction — one-mana Void removal                           U
  3  Decode Transmissions  x2   B      Engine — the deck's only net-positive card draw / Void reach  C
```

### OTHER SPELLS (2)

```
CMC  Card             Qty  Color  Role                                          Rar
  3  Banishing Light  x2   W      Interaction — noncreature-permanent coverage  C
```

## SIDEBOARD (10)

```
Card                Qty  Color  Role / When to board in                                 Rar
Seam Rip            x2   W      Sideboard — cheap (MV<=2) noncreature-permanent answer  U
Hymn of the Faller  x2   B      Sideboard — refuel after attrition and sweepers         U
Dauntless Scrapbot  x2   C      Sideboard — graveyard hate on a body                    U
Gravkill            x2   B      Sideboard — unconditional exile                         C
Radiant Strike      x2   W      Sideboard — artifact / tapped-attacker answer           C
```

## ANALYSIS

### DECK IDENTITY

White-black exile-aristocrats. Syr Vondam, Sunstar Exemplar turns every death AND every warp self-exile into a +1/+1 counter on a vigilance-menace body, so warp creatures, a free sacrifice outlet and the deck's own removal all feed one clock. Because only 1 copy of Vondam exists in the pool the build is the resilient one: Xu-Ifit, Osteoharmonist plus the mana-free Umbral Collar Zealot outlet manufacture a death every turn, Lightless Evangel x2 grow on the sacrifice half, Susurian Voidborn x2 convert the same deaths into drain with no Vondam on board, and Insatiable Skittermaw is a second growing menace body. Decode Transmissions x2 are the deck's only net-positive draw. Six pieces of interaction (four at one mana, two of which sacrifice a body as an additional cost) clear blockers while advancing the counter engine.

### KILL MECHANISM

Syr Vondam, Sunstar Exemplar ({W}{B}, rare, 1 copy in the pool) reads: "Vigilance, menace | Whenever another creature you control dies or is put into exile, put a +1/+1 counter on Syr Vondam and you gain 1 life. | When Syr Vondam dies or is put into exile while its power is 4 or greater, destroy up to one target nonland permanent."

The clock is a 2/2 menace-vigilance body that gains a counter from BOTH halves of the engine:

- **Exile half.** Warp reminder text on the warp cards reads "Exile this creature at the beginning of the next end step", so every warp cast is a self-exile and therefore a Vondam counter. Warp costs in the 23: Rayblade Trooper x2 "Warp {1}{W}", Susurian Voidborn x2 "Warp {B}", Timeline Culler x1 "Warp—{B}, Pay 2 life" = 5 of 23.
- **Death half.** Umbral Collar Zealot x2 "Sacrifice another creature or artifact: Surveil 1" costs no mana and is usable at an arbitrary point in a turn; Embrace Oblivion x2 "As an additional cost to cast this spell, sacrifice an artifact or creature. | Destroy target creature or Spacecraft" pays a death as a cost while also killing something.
- **Recycling.** Rayblade Trooper x2 "Whenever a nontoken creature you control with a +1/+1 counter on it dies, create a 1/1 white Human Soldier creature token" turns counter-bearing deaths back into fodder. Counter-bearers needing no help: 5 of the 15 creature cards (Dockworker Drone x2 "This creature enters with a +1/+1 counter on it", Insatiable Skittermaw x1, Lightless Evangel x2).
- **Refuel.** Xu-Ifit, Osteoharmonist "{T}: Return target creature card from your graveyard to the battlefield. It's a Skeleton in addition to its other types and has no abilities. Activate only as a sorcery." plus the Zealot's zero-mana outlet is one free death per turn: 1 Vondam counter, 1 counter on each Lightless Evangel, 1 drain from each Susurian Voidborn, and the Void condition satisfied for the rest of the list.
- **Redundancy when Vondam is answered.** Susurian Voidborn x2 "Whenever this creature or another creature or artifact you control dies, target opponent loses 1 life and you gain 1 life"; Insatiable Skittermaw x1 "Menace | Void — At the beginning of your end step, if a nonland permanent left the battlefield this turn or a spell was warped this turn, put a +1/+1 counter on this creature."

The gating clause is honest: Vondam's "destroy up to one target nonland permanent" only exists "while its power is 4 or greater", i.e. after 2 accumulated counters on a 2/2 base, so removal on the turn it lands is a clean one-for-one.

### LAND MATH

Recommended land count 17, built to 17 — no deviation.

```
Nonland cards 23, total MV 54, avg MV 54/23 = 2.3478 (deck_audit rounds to 2.35), accel 0.
base_lands 17 (argmax P(2-4 lands in 7) = 0.7945)
exact-input call : adjustment -0.203  raw_target 16.797  -> 17
deck_audit call  : adjustment -0.20   raw_target 16.80   -> 17
Composition: 1 Godless Shrine, 2 Sunlit Marsh, 6 Plains, 8 Swamp = 17.
Coloured pips: W 7 (25.9%), B 20 (74.1%), total 27.
Proportional split would be 4.4 W / 12.6 B; actual sources are W 9 / B 11 (duals count for both).
```

2 of 17 lands always enter tapped (Sunlit Marsh: 'This land enters tapped.'). Godless Shrine is conditionally tapped ('As this land enters, you may pay 2 life. If you don't, it enters tapped.') and is the only untapped WB dual, which is why it is worth 1 of the 6 rare/mythic slots for a {W}{B} turn-2 payoff. Command Bridge was CUT from the sketch: 'When this land enters, sacrifice it unless you tap an untapped permanent you control' cannot be paid on turn 1 with an empty board, and it also enters tapped, so as a turn-1 land drop it is strictly worse than a basic; its slot became the 6th Plains, which keeps W sources at 9. No self-bouncing land and no land-back MDFC exists in the W/B pool.

Deliberate deviation on white: White is deliberately over-allocated against its 25.9% pip share (9 sources, not 4). The payoff costs {W}{B} on turn 2 and cannot be cast at all off black mana, and 7 of the 23 nonland cards need {W}. P(>=1 W source in the first 8 cards) = 0.897 at 9 sources vs 0.863 at 8 and 0.924 at 10; P(>=1 B source in 8) = 0.944 at 11. deck_audit.mana_audit rates both colours OK.

### COUNT-DEPENDENT VERDICTS

- Void enablers ('a nonland permanent left the battlefield this turn or a spell was warped this turn'), recounted against the FINAL 23 nonland cards: warp costs - Rayblade Trooper 2, Susurian Voidborn 2, Timeline Culler 1 (5); permanent-leaves - Umbral Collar Zealot 2 (free sac outlet), Embrace Oblivion 2 (sac as additional cost, and it destroys a creature), Banishing Light 2 (exiles an opponent's nonland permanent) (6). Total 11 of 23, down from 13 of 23 before the Phase 9 swaps (Scrounge for Eternity and 1 Timeline Culler left the list). This is the denominator behind Insatiable Skittermaw x1, Tragic Trajectory x2, Decode Transmissions x2 and Elegy Acolyte. Not counted: Xu-Ifit's reanimation itself does not make a permanent leave the battlefield - the Zealot sacrifice that follows it does, and the Zealot is already in the 11.
- Cards: Net-Positive / Cards: Self-Replacing (resource_exchange) in the mainboard: 2 of 23 (Decode Transmissions x2), recomputed from taxonomic_profile. Before the Phase 9 swaps it was 0 of 23, which is the hole Challenger F2/F3/F6 identified.
- Instant-speed interaction: 0 of 23 nonland cards can be cast on the opponent's turn (Embrace Oblivion and Tragic Trajectory are Sorceries, Banishing Light is an Enchantment; no card in the 23 has Flash). Verified by type_line scan. Challenger F12 stands as an accepted structural hole - see the resolution table for why Focus Fire was not swapped in.
- Creature cards: 15 of 23 (Syr Vondam 1, Rayblade Trooper 2, Susurian Voidborn 2, Insatiable Skittermaw 1, Lightless Evangel 2, Elegy Acolyte 1, Dockworker Drone 2, Umbral Collar Zealot 2, Timeline Culler 1, Xu-Ifit 1). Toughness <= 2: 13 of 15 - Zero Point Ballad at X=2 kills all but Xu-Ifit (2/3) and Elegy Acolyte (4/4).
- Sacrifice feeding for Lightless Evangel's 'Whenever you sacrifice another creature or artifact': 4 of 23 nonland cards (Umbral Collar Zealot x2 free outlet, Embrace Oblivion x2 sac-as-cost), down from 5 with Scrounge for Eternity cut. Fodder for those costs: the 15 creature cards, 2 of which (Dockworker Drone) are also artifacts, plus tokens - Rayblade Trooper's 1/1 Soldiers, Elegy Acolyte's 2/2 Robots, and one reanimated body per turn from Xu-Ifit.
- Rayblade Trooper's 'Whenever a nontoken creature you control with a +1/+1 counter on it dies': counter-bearers that need no help = 5 of the 15 creature cards (Dockworker Drone x2 'enters with a +1/+1 counter on it', Insatiable Skittermaw 1 Void self-counter, Lightless Evangel x2 counter per sacrifice), plus Rayblade's own ETB, which can arm any of the other 10. Xu-Ifit's reanimated bodies 'ha[ve] no abilities' but are nontoken and can be armed by Rayblade's ETB or by Dockworker Drone's death trigger.
- Xu-Ifit, Osteoharmonist's loop, counted against THIS list: it needs (a) a creature card in the graveyard - 15 of 23 nonland cards are creature cards - and (b) a zero-mana sacrifice outlet to send the body back - Umbral Collar Zealot x2, 2 of 23. Each iteration is 1 Vondam counter + 1 life, 1 counter on each Lightless Evangel on board, 1 drain from each Susurian Voidborn, and it satisfies the Void condition for Insatiable Skittermaw / Tragic Trajectory x2 / Decode Transmissions x2 / Elegy Acolyte. Without the Zealot it is still one free body per turn, at sorcery speed only.
- Seam Rip's answered class, corrected per Challenger F8: 'exile target nonland permanent an opponent controls with mana value 2 or less'. Of the 16 enchantments in working_pool only 5 are MV <= 2 (Cryoshatter, Hardlight Containment, Meltstrider's Resolve, Seam Rip, Weapons Manufacturing), i.e. 4 of 16 opposing enchantments. Its honest denominator is the general one: 65 of 196 nonland permanents in the pool are MV <= 2 (33.2%). Mainboard Banishing Light x2 answers all 16 enchantments regardless of cost.
- Mana: Ongoing-Cost cards in the mainboard: 0 of 23 - no line is owed for keeping an ongoing mana cost paid.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:8  3:10  4:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 7.9: Insatiable Skittermaw@0.7, Rayblade Trooper@0.8, Rayblade Trooper@0.8, Lightless Evangel@0.8, Lightless Evangel@0.8) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.5: Xu-Ifit, Osteoharmonist@0.7, Decode Transmissions@0.9, Decode Transmissions@0.9) → p=0.98 (need ≥ 0.75)
  PASS  interaction: 6 copies (effective 5.6: Tragic Trajectory@0.8, Tragic Trajectory@0.8) → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 56%  T2 94%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Three sweepers are castable in W/B in this pool - Zero Point Ballad ('Destroy all creatures with toughness X or less'), Beyond the Quiet ({3}{W}{W}, 'Exile all creatures and Spacecraft') and Pinnacle Starcage ({1}{W}{W}, 'exile all artifacts and creatures with mana value 2 or less until this artifact leaves the battlefield') - and this deck survives none of them: Zero Point Ballad at X=2 destroys 13 of this deck's 15 creature cards (only Xu-Ifit 2/3 and Elegy Acolyte 4/4 live) and Beyond the Quiet exiles 15 of 15. The fodder IS the engine, so the deck races instead: Syr Vondam's vigilance lets it attack and still hold one blocker, and Umbral Collar Zealot's free 'Sacrifice another creature or artifact: Surveil 1' converts doomed chump blockers into +1/+1 counters.
  OK        single_large_threat: Embrace Oblivion, Tragic Trajectory, Banishing Light
  OK        noncreature_permanents: Banishing Light, Embrace Oblivion
  CONCEDED  stack: W/B in this pool contains no counterspell (0 of the 113 distinct W/B/colourless names in working_pool contain 'Counter target'). The deck plays proactively at sorcery speed; the only recovery from a countered cast is that Timeline Culler ('You may cast this card from your graveyard using its warp ability. Warp-{B}, Pay 2 life') can be re-bought ONCE per graveyard visit, and Xu-Ifit, Osteoharmonist ('{T}: Return target creature card from your graveyard to the battlefield') rebuys a creature per turn - neither answers the stack, they only refill after it.
  CONCEDED  graveyard: Zero mainboard graveyard hate; the class is answered from the sideboard with 2 Dauntless Scrapbot ('When this creature enters, exile each opponent's graveyard. Create a Lander token.'), which is dead in game 1 against the 31 graveyard cards spread over all five colours.
```

- curve: PASS - Aggro bands met on the final list: MV1 4/23 = 17.4% (min 15%), MV2 8/23 = 34.8% (min 25%), MV4+ 1/23 = 4.3% (max 20%). The 10 cards at MV3 are the softest part of the curve and 4 of them (Rayblade Trooper x2, Susurian Voidborn x2) are castable earlier via warp.
- goldfish: PASS - keepable 88% vs the 80% threshold, 3 lands by turn 3 in 88% of games, play-by-turn T1 56% / T2 94% / T3 98%. Per Challenger F13 the T1 figure must NOT be read as a turn-1 play rate: the 4 MV1 cards are Embrace Oblivion x2 ('As an additional cost to cast this spell, sacrifice an artifact or creature' - you control none on turn 1) and Tragic Trajectory x2 (needs an opposing creature). The deck's real turn-1 play is warping Susurian Voidborn for {B}, which the simulator scores off printed MV3.

### FAILURE MODES

| Mode | Verdict | Reasoning |
| --- | --- | --- |
| flood | mitigation | Corrected per Challenger F1/F2. Timeline Culler is NOT a per-turn graveyard sink: 'You may cast this card from your graveyard using its warp ability. Warp-{B}, Pay 2 life. (... If you do, exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn.)' - after one graveyard warp it is in EXILE, and the follow-up cast from exile is its printed {B}{B}. One {B} warp per graveyard visit. Umbral Collar Zealot's 'Sacrifice another creature or artifact: Surveil 1' costs no mana, so it is card selection, not a mana sink. The actual flood answer is now in the list: Decode Transmissions x2, '{2}{B}: You draw two cards and lose 2 life. Void - ... instead you draw two cards and each opponent loses 2 life' - 2 of 23 nonland cards that turn surplus mana into cards (and into 2 damage on the 11-of-23 Void turns), where before the swap it was 0 of 23. Xu-Ifit, Osteoharmonist adds a mana-free per-turn body from the yard, which is what makes a flooded board keep attacking. Elegy Acolyte's draw is combat-gated ('Whenever one or more creatures you control deal combat damage to a player') and is 1 of 40 - it is not counted as a sink. |
| screw | mitigation | 12 of 23 nonland cards cost 1 or 2 mana (4 at MV1: Embrace Oblivion x2, Tragic Trajectory x2; 8 at MV2 including the payoff itself at {W}{B}). Four nominal three-drops are deployable off two lands via warp: Susurian Voidborn x2 'Warp {B}' and Rayblade Trooper x2 'Warp {1}{W}' - so 16 of 23 nonland cards are live on two lands (Timeline Culler is already MV2 and is inside the 12; the pre-resolution list double-counted it, Challenger F9). goldfish_sim on the final list: keepable 88% (threshold 80%), T2 play rate 94%, 3 lands by turn 3 in 88%. |
| decapitation | mitigation | Syr Vondam is 1 of 40 cards, so the clock is deliberately redundant, restated for the post-swap list: Susurian Voidborn x2 ('Whenever this creature or another creature or artifact you control dies, target opponent loses 1 life and you gain 1 life') convert every death into reach with no Vondam on board; Lightless Evangel x2 ('Whenever you sacrifice another creature or artifact, put a +1/+1 counter on this creature') grow on the sacrifice half, fed by 4 of 23 nonland cards (Umbral Collar Zealot x2 free outlet, Embrace Oblivion x2 sac-as-cost); Insatiable Skittermaw x1 ('Menace \| Void - At the beginning of your end step ... put a +1/+1 counter on this creature') is the second growing menace body; and Xu-Ifit, Osteoharmonist rebuilds the fodder that feeds all of them for zero mana each turn. That is 7 of 23 nonland cards that make progress with Vondam absent. The trim from 2 Skittermaw to 1 costs one copy of the growing-menace class the judge credited - stated, not hidden. Vondam's own answer-tax is CONDITIONAL, per Challenger F4: 'When Syr Vondam dies or is put into exile WHILE ITS POWER IS 4 OR GREATER, destroy up to one target nonland permanent' - on a 2/2 base that needs 2 accumulated counters, so removal on the turn it lands is a clean one-for-one. |
| gas-out | mitigation | Corrected per Challenger F1/F3/F6. Recounted on the final 23: cards carrying 'Cards: Net-Positive' or 'Cards: Self-Replacing' in resource_exchange = 2 of 23 (Decode Transmissions x2), up from 0 of 23. Board-based refuel: Xu-Ifit, Osteoharmonist returns one creature card from the graveyard per turn for zero mana (the returned body 'has no abilities', so it is fodder, not a rebuilt engine piece - it still feeds Vondam, Susurian Voidborn x2 and Lightless Evangel x2 when sacrificed); Rayblade Trooper x2 manufacture a 1/1 Soldier whenever a nontoken counter-bearer dies - 5 of the 15 creature cards (Dockworker Drone x2, Insatiable Skittermaw 1, Lightless Evangel x2) carry a counter without help, plus Rayblade's own ETB; Elegy Acolyte draws on connection. The claim that Timeline Culler is 'recastable every turn' is WITHDRAWN - it is one {B} warp per graveyard visit. Sideboard adds Hymn of the Faller x2. |
| raced | accepted | Against a wide fast board the deck loses, and the cost of fixing it is the deck itself. Correction per Challenger F7: Zero Point Ballad is NOT the only sweeper castable in these colours - Beyond the Quiet ({3}{W}{W}, rare, 'Exile all creatures and Spacecraft') and Pinnacle Starcage ({1}{W}{W}, rare, 'exile all artifacts and creatures with mana value 2 or less until this artifact leaves the battlefield') are also castable, as is colourless Extinguisher Battleship ({8}). The substance survives: Zero Point Ballad at X=2 destroys 13 of this deck's 15 creature cards (only Xu-Ifit 2/3 and Elegy Acolyte 4/4 live), Beyond the Quiet exiles 15 of 15, and Pinnacle Starcage exiles every MV<=2 body - the fodder IS the engine, and each of the three would spend a 5th of the 6 rare/mythic slots. What the deck keeps instead is incidental life (Syr Vondam gains 1 per trigger, Susurian Voidborn x2 drain 1 and gain 1 per death, Elegy Acolyte has lifelink) plus 6 removal spells, 4 of them at one mana. |
| disruption-fizzle | mitigation | Restated per Challenger F1/F4 - two of the three previous mechanisms were misstated and are withdrawn. (a) WITHDRAWN: 'the engine turn is re-run next turn for {B} + 2 life' - Timeline Culler's graveyard warp is once per graveyard visit and exiles the card, so there is no per-turn retry. (b) WITHDRAWN: 'a two-for-two at worst' - Vondam's 'destroy up to one target nonland permanent' only exists 'while its power is 4 or greater', i.e. after 2 counters on a 2/2 base; removal on the turn it lands is a clean one-for-one. (c) SURVIVES: Umbral Collar Zealot's 'Sacrifice another creature or artifact: Surveil 1' costs no mana and can be activated in response to removal, banking a Vondam counter, a Lightless Evangel counter and a Susurian Voidborn drain off a creature that was going to die anyway - 2 of 23 nonland cards. (d) NEW: Xu-Ifit, Osteoharmonist means a creature answered by removal comes back next turn for zero mana, which is the real answer to one-for-one disruption. The structural point stands: no single turn is the critical turn - the counters accrue one at a time from many cheap sources. Instant-speed interaction remains 0 of 23; see count_dependent_verdicts. |

### CARDS CONSIDERED BUT EXCLUDED

- **Sothera, the Supervoid** — RARE BUDGET (mythic), re-tested in Phase 9: 'each opponent CHOOSES a creature they control and exiles it' is opponent-chosen, so it does not answer the single-large-threat class, and 'if a player controls no creatures, sacrifice Sothera' fires exactly when the deck's own board has been swept. MV4+ is 1 of 23 (4.3%) already.
- **Honor** — UNCOMMON, a tier below: 'Put a +1/+1 counter on target creature. Draw a card.' creates no death and no exile, so it is 0 Syr Vondam triggers, and it adds 2 more {W} pips against a 25.9% W pip share already served by 9 sources.
- **Gravpack Monoist** — COMMON, a tier below: the only flier offered (0 of 15 creature cards fly), but 'When this creature dies, create a tapped 2/2 colorless Robot artifact creature token' adds a body and no counter of its own; the slot would come out of the 11-of-23 Void enablers.
- **Emergency Eject** — UNCOMMON, a tier below Banishing Light: 'Destroy target nonland permanent. Its controller creates a Lander token.' destroys rather than exiles into a 31-card graveyard_interaction class, and it hands the opponent a ramp artifact. Same MV3.
- **Dubious Delicacy** — UNCOMMON, a tier below: both drain modes cost '{2}, {T}, Sacrifice this artifact' on top of {2}{B} — 5 mana for 3 damage at avg MV 2.35 — and the -3/-3 ETB misses the 4-toughness bodies Gravkill is boarded for.
- **Temporal Intervention** — SIDEBOARD candidate, cut: 'Target opponent reveals their hand. You choose a nonland card from it. That player discards that card' is sorcery-speed and does nothing to a permanent already on the battlefield; its two proposed cuts (Radiant Strike, Gravkill) are the only answers to artifacts (74 of 249) and to exile-not-destroy.
- **Focus Fire** — COMMON, a tier below: 'deals X damage to target ATTACKING OR BLOCKING creature, where X is 2 plus the number of creatures and/or Spacecraft you control' — it cannot answer a creature that never attacks or blocks, and X is 2 on the swept boards where a reactive answer is most needed.
- **Scrounge for Eternity** — UNCOMMON, cut in Phase 9: its sacrifice-as-cost was on-theme, but the 3 slots the resolution had went to the two BLOCKING absences (Xu-Ifit, Osteoharmonist and Decode Transmissions x2); cutting it moved Void enablers from 13 of 23 to 11 of 23, which is stated, not hidden.
- **Command Bridge** — LAND, cut from the sketch: 'When this land enters, sacrifice it unless you tap an untapped permanent you control' cannot be paid on turn 1 off an empty board and it also enters tapped, so as a turn-1 land drop it is strictly worse than a basic. Its slot became the 6th Plains.
- **Xu-Ifit, Osteoharmonist** — REVERSED — the sweep excluded it ('returns creatures with no abilities'), Phase 9 finding F5 overturned that and it is MAINBOARD: with Umbral Collar Zealot x2 it is a mana-free once-per-turn death, and the no-abilities body is fodder rather than a rebuilt engine piece.
- **Exalted Sunborn** — RARE BUDGET (mythic): token doubling plus Warp {1}{W} is a real fit, but only 5 of the ~58 include candidates create tokens (Honored Knight-Captain, Knight Luminary, Beamsaw Prospector, Gravpack Monoist, Elegy Acolyte), so the doubler is worse than a rare that does something on its own.
- **Alpharael, Stonechosen** — RARE BUDGET (mythic): the Void attack trigger halves life, but {3}{B}{B} demands a black-heavy mana base that fights the {W}{B} turn-2 payoff and the {2}{W}{B}{B} top end.
- **Astelli Reclaimer** — RARE BUDGET: 'return target noncreature, nonland permanent card with mana value X or less' returns only noncreature permanents — this list is creature-dense, so the ETB is often blank.
- **Anticausal Vestige** — RARE BUDGET: Warp {4} for a 7/5 that draws on leaving is powerful but 4 mana is 2x the cost of Timeline Culler / Haliya for the same one Vondam counter.
- **Sunstar Chaplain** — RARE BUDGET: needs 'two or more tapped creatures' at end step, which fights Vondam's vigilance (attacking with Vondam leaves it untapped) — a conditional counter is not worth a rare slot.
- **Sunset Saboteur** — Its attack trigger reads 'put a +1/+1 counter on target creature an OPPONENT controls' — it grows the opponent's board, and rare-budget on top.
- **Lightstall Inquisitor** — RARE BUDGET: 'each opponent exiles a card from their hand and may play that card' gives the opponent access to the card — card disadvantage dressed as disruption.
- **Hardlight Containment** — RARE BUDGET: 'Enchant artifact you control' — it needs an artifact already on board and dies with it, and only 6 of the include candidates are artifacts I would reliably have on turn 1-2.
- **Pinnacle Starcage** — 'exile ALL artifacts and creatures with mana value 2 or less' is symmetric and this deck's fodder core (Hullcarver, Monoist Sentry, Nutrient Block, Virus Beetle, Dockworker Drone, Umbral Collar Zealot, Syr Vondam himself) is almost entirely mv<=2 — it exiles the deck.
- **Zero Point Ballad** — SIDEBOARD: 'Destroy all creatures with toughness X or less' at X=2-3 kills the fodder core it is cast alongside; boardable only versus a go-wide x/1 deck where the deaths are all profitable Vondam triggers.
- **Beyond the Quiet** — SIDEBOARD (rare): 'Exile all creatures and Spacecraft' resets a board this deck usually leads on; only correct as a catch-up card from behind, and it costs a rare slot.
- **Archenemy's Charm** — {B}{B}{B} in a deck whose payoff costs {W}{B} and whose top end costs {2}{W}{B}{B} — the triple-black pip is unpayable on the fixing available (1 Godless Shrine + 2 Sunlit Marsh + 2 Command Bridge).
- **The Seriema** — RARE BUDGET: Station 7+ needs 7 power tapped into it and its tutor finds a legendary creature — this deck has only 2 distinct legends (Syr Vondam Exemplar, Syr Vondam the Lucent) worth finding.
- **Entropic Battlecruiser** — RARE BUDGET: 3/10 defensive Spacecraft whose discard payoff needs an opponent-discard subtheme; only 2 include candidates (Virus Beetle, Temporal Intervention) cause discards.
- **Lumen-Class Frigate** — RARE BUDGET: the 2+ anthem is fine but Station taxes the same creatures the deck wants attacking or sacrificing.
- **Requiem Monolith** — RARE BUDGET: the damage-to-draw grant is symmetric ('That creature's controller may have this artifact deal 1 damage to it') and does nothing toward the exile/death engine.
- **Extinguisher Battleship** — RARE BUDGET: 8 mana, and the ETB 'deals 4 damage to each creature' wipes this deck's own fodder board.
- **Thrumming Hivepool** — Affinity for Slivers with 0 Slivers in the W/B pool means it always costs {6}.
- **Tezzeret, Cruel Captain** — RARE BUDGET (mythic): its loyalty engine keys on artifacts entering; only 8 of the ~58 include candidates are artifacts, and its -3 fetches mv<=1 artifacts of which the pool offers Nutrient Block/Hylderblade only.
- **The Dominion Bracelet** — RARE BUDGET (mythic): the {15}-minus-power activation is a win-more that arrives long after the turn-7 goldfish.
- **The Endstone** — RARE BUDGET (mythic): 'your life total becomes half your starting life total' every end step is a hard clock against an aggro deck that is often racing.
- **Dawnsire, Sunstar Dreadnought** — RARE BUDGET (mythic): Station 10+/20+ requires tapping ~10 power of creatures — that is the attack this deck would rather make.
- **Chorale of the Void** — RARE BUDGET: an Aura on your own creature (2-for-1 risk against removal) whose reanimation targets the DEFENDING player's graveyard, which may be empty.
- **Pulsar Squadron Ace** — Its ETB digs for a Spacecraft; only 3 Spacecraft are include candidates (Fell Gravship, Susurian Dirgecraft) so the dig whiffs and it is a 2/3 for 2.
- **Sunstar Expansionist** — Landfall +1/+0 and a conditional Lander ('if an opponent controls more lands than you') are both behind-the-curve effects in a deck aiming to be ahead on board.
- **Starfighter Pilot** — Surveil-on-tap is card selection with no board impact; strictly a tier below Umbral Collar Zealot, which surveils AND is the free sac outlet.
- **Flight-Deck Coordinator / Dawnstrike Vanguard** — Both need 'two or more tapped creatures' at end step, which anti-synergizes with the vigilance and the free-sac plan (sacrificed creatures are not tapped creatures).
- **Brightspear Zealot** — +2/+0 only 'as long as you've cast two or more spells this turn' — a 2/4 body most turns, and Sunstar Lightsmith pays the same second-spell condition with a counter AND a card.
- **Virulent Silencer / Survey Mechan / All-Fates Scroll / Thaumaton Torpedo** — Colourless filler on a poison / {10}-activation / {7}-activation / {6}-activation clock — none of the four does anything before the turn-7 goldfish.
- **Auxiliary Boosters / Wedgelight Rammer / Rescue Skiff / Pinnacle Kill-Ship** — 5-7 mana token-and-Station package; the deck's curve tops at the {2}{W}{B}{B} Lucent and these arrive after the race is decided.
- **Dauntless Scrapbot** — SIDEBOARD: 'exile each opponent's graveyard' is dead in game 1; board it in against graveyard/recursion decks where the Lander token is a free bonus.
- **Monoist Circuit-Feeder** — {4}{B}{B} for a pump that scales with artifacts you control — the double-black at six mana is unpayable on this fixing and the effect is a combat trick, not a threat.
- **Squire's Lightblade / Starport Security / Chrome Companion / Zealous Display / Wurmwall Sweeper** — Uncommons/commons a tier below the includes: each provides a small combat or tempo bump with no death, exile, or +1/+1-counter interaction with the Vondam engine.

### SIDEBOARD GUIDE

- **Radiant Strike x2** — answers: artifacts (74 of 249 cube cards, density 0.297) and artifact_answers scarcity (only 4 answers exist cube-wide, 1 of them white)
  - When to board in: Board in against any deck leading on artifacts or Spacecraft, and against decks whose creatures must tap to attack; 'Destroy target artifact or tapped creature. You gain 3 life.' Cut 2 Tragic Trajectory when the opposing threats are artifacts rather than creatures.
- **Gravkill x2** — answers: single_large_threat and graveyard_interaction (31 cards) — 'Exile target creature or Spacecraft' answers indestructible, ward-free recursive and Spacecraft threats that 'destroy' effects leave behind
  - When to board in: Board in against recursion decks and against single large finishers that beat -2/-2; cut 2 Tragic Trajectory, whose Void mode needs an enabler that turn.
- **Seam Rip x2** — answers: cheap noncreature permanents generally - 65 of the 196 nonland permanents in working_pool are MV <= 2 (33.2%). Corrected per Challenger F8: it does NOT answer the enchantment class broadly - only 4 of the 16 opposing cube enchantments are MV <= 2. Mainboard Banishing Light x2 covers the other 12 at any cost.
  - When to board in: Board in against cheap mana rocks, 1-2 mana Spacecraft and MV<=2 enchantments; 'exile target nonland permanent an opponent controls with mana value 2 or less'. Cut 1 Insatiable Skittermaw and 1 Banishing Light when the opposing permanents are all cheap (the Scrounge for Eternity that this plan used to cut is no longer in the deck).
- **Dauntless Scrapbot x2** — answers: graveyard_interaction (31 cube cards, density 0.1245)
  - When to board in: Board in against reanimator/recursion; 'When this creature enters, exile each opponent's graveyard. Create a Lander token.' The Lander is a free artifact for this deck's sacrifice costs, so it is never a blank body. Cut 2 Dockworker Drone (both are nontoken artifact bodies for the same sacrifice costs).
- **Hymn of the Faller x2** — answers: attrition and post-sweeper recovery. Honest framing: it prevents nothing; it replaces cards afterwards. With Decode Transmissions x2 now in the mainboard the deck no longer relies on this slot for its only card flow.
  - When to board in: Board in against control/attrition when the clock will be interrupted; 'Surveil 1, then you draw a card and lose 1 life. | Void — If a nonland permanent left the battlefield this turn or a spell was warped this turn, draw another card' is a 2-mana draw-two on the 13-of-23 turns Void is on. Cut 2 Insatiable Skittermaw, whose Void counter is too slow in a grind.

Unanswerable classes, stated rather than papered over: stack - 0 of the 113 distinct W/B/colourless names in working_pool contain 'Counter target', main or side, and the deck has no hand disruption either, so a resolved noncreature engine above MV2 is answered only by Banishing Light x2. wide_boards - corrected per Challenger F7: three sweepers are castable in these colours (Zero Point Ballad, Beyond the Quiet, Pinnacle Starcage), but each kills this deck's own board (13 of 15 creature cards to Zero Point Ballad at X=2, 15 of 15 to Beyond the Quiet), so no sideboard slot can answer that class without answering the deck itself. Artifact answers are also thin cube-wide (4 total, 1 white), which is why 2 Radiant Strike are boarded rather than a cleaner artifact sweeper.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.20 adj [MV 2.35 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  74.1%  prod  64.7%  gap  +9.4pp  [OK]
  W  demand  25.9%  prod  52.9%  gap -27.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
deck_size_40: PASS (40 mainboard, 17 lands)
sideboard_10: PASS
copy_limits_main_plus_side: PASS - every non-basic name at or under min(rarity multiplier, pool copies); basics exempt
rare_mythic_cap_6: PASS - 4 used: Syr Vondam, Sunstar Exemplar (rare), Elegy Acolyte (rare), Godless Shrine (rare), Xu-Ifit, Osteoharmonist (rare). 2 unspent; the sideboard is entirely common/uncommon.
colour_usability: PASS - effective_cost.best_mode returned non-None for every nonland card against core_colors [W,B]; no off-identity inclusion, so no usable_as caveat applies
splash_cap: PASS - splash_colors is empty and no card in main or side has a colour identity outside {W,B} (Dauntless Scrapbot is colourless)
pool_base: cube_mainboard, no only_from and no exclusions in force
rare_mythic_total: 4 of 6 (Syr Vondam, Sunstar Exemplar; Elegy Acolyte; Xu-Ifit, Osteoharmonist; Godless Shrine)
mainboard_total: 40
sideboard_total: 10
```
