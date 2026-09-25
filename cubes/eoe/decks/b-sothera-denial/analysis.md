---
deck_name: "b-sothera-denial"
cube_id: "eoe"
cube_slug: "eoe"
colors: "B"
format: "40-card"
built_at: "2026-08-03T17:12:04Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x17 Swamp          Basic. All 17 land slots; only untapped B source in the pool.
```

### CREATURES (10)

```
CMC  Card                    Qty  Color  Role                          Rar
  2  Beamsaw Prospector      x1   B      Fodder + Lander accel         C
  2  Lightless Evangel       x1   B      Sac-triggered grower          U
  2  Umbral Collar Zealot    x2   B      Free sac outlet               U
  3  Gravpack Monoist        x2   B      Two-death fodder              C
  3  Susurian Voidborn       x2   B      Deaths drain clock            U
  4  Swarm Culler            x1   B      Tap outlet / flyer            C
  5  Voidforged Titan        x1   B      Void end-step draw            U
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                    Qty  Color  Role                          Rar
  1  Embrace Oblivion        x2   B      Destroy + sac outlet          C
  1  Tragic Trajectory       x2   B      -2/-2, Void -10/-10           U
  2  Hymn of the Faller      x2   B      Void draw                     U
  3  Archenemy's Charm       x1   B      Exile / regrowth              R
  3  Decode Transmissions    x2   B      Void draw + reach             C
  4  Gravkill                x2   B      Instant exile                 C
```

### OTHER SPELLS (2)

```
CMC  Card                    Qty  Color  Role                          Rar
  3  Dubious Delicacy        x1   B      Flash -3/-3 + Food            U
  4  Sothera, the Supervoid  x1   B      Denial engine payoff          M
```

## SIDEBOARD (10)

```
Card                    Qty  Color  Role / When to board in       Rar
Monoist Sentry          x2   B      vs aggro: 4/1 Defender wall   U
Thaumaton Torpedo       x2   C      vs noncreature permanents     C
Chrome Companion        x1   C      vs recursion: instant gy hit  C
Depressurize            x2   B      vs aggro: instant, power<=3   C
Dauntless Scrapbot      x1   C      vs graveyard: mass exile      U
Temporal Intervention   x2   B      vs combo/control: discard     C
```

## ANALYSIS

### DECK IDENTITY

Mono-black sacrifice-denial control: convert your own recursive fodder into a one-sided exile sweeper via Sothera, grind the opponent to an empty board, then win with recurred threats and Void card advantage. Eight printed removal spells (8 of 23 nonland) plus 12 Sothera creature-death instances do the grinding; three Void draw engines (Hymn of the Faller x2, Decode Transmissions x2, Voidforged Titan x1) do the out-carding.

### HOW THE DECK ACTUALLY KILLS

The kill is denial first and damage second. Sothera, the Supervoid reads "Whenever a creature you control dies,
each opponent chooses a creature they control and exiles it." — an unconditional, one-sided exile trigger with
no mana cost attached, so the deck's job is simply to make its own creatures die as often as possible.

The free outlet is Umbral Collar Zealot: "Sacrifice another creature or artifact: Surveil 1". No mana, no tap,
usable at any point in any turn, repeatable. This is the only outlet in the 23 nonland cards that is truly
free — Swarm Culler's "Whenever this creature becomes tapped, you may sacrifice another creature or artifact.
If you do, draw a card" only fires on becoming tapped, and Embrace Oblivion's "As an additional cost to cast
this spell, sacrifice an artifact or creature" is one-shot and sorcery-speed.

The fodder replaces itself. Beamsaw Prospector: "When this creature dies, create a Lander token." Gravpack
Monoist: "When this creature dies, create a tapped 2/2 colorless Robot artifact creature token." Each Gravpack
Monoist is therefore two Sothera triggers off one card, and the Robot is itself sacrificeable again.

Then the payoff converts: "At the beginning of your end step, if a player controls no creatures, sacrifice
Sothera, then put a creature card exiled with it onto the battlefield under your control with two additional
+1/+1 counters on it." The exiled opposing creature comes back on my side, two counters bigger, and swings.

### THE SOTHERA DEPLOY RULE (read this before casting it)

The intervening-if says "a player", not "an opponent". It is satisfied when EITHER side is creatureless. Since
emptying the opponent's board is the entire plan, this deck routinely satisfies its own payoff's self-sacrifice
clause. Concrete failure: cast Sothera turn 4 into a creatureless opponent, and at my end step it is sacrificed
and "put a creature card exiled with it" finds nothing, because it exiled nothing. Rule: hold Sothera until the
opponent controls at least one creature, keep at least one creature of my own on the battlefield, and if the
opponent is already empty, treat Sothera as a one-shot exile-then-convert engine and sequence the sacrifices so
the exile pile is non-empty before the end step arrives.

### VOID IS SWITCHABLE FOR ZERO MANA

7 of 23 nonland cards read Void (Hymn of the Faller x2, Decode Transmissions x2, Tragic Trajectory x2,
Voidforged Titan x1). The condition — a nonland permanent left the battlefield this turn, or a spell was
warped this turn — is turned on for free by Umbral Collar Zealot x2, incidentally by all 8 removal spells,
and by Susurian Voidborn's own Warp {B}. This is why Tragic Trajectory is -10/-10 rather than -2/-2 in most
mid-game turns, and why Decode Transmissions is a draw-two-and-drain rather than a draw-one.

### THE ONE ADMITTED BAND DEVIATION

Interaction is 8 of 23 nonland cards = 34.78% against a 35-45% band — a 0.22 percentage-point miss. It was
left in place rather than manufactured away: reaching 9 interaction requires cutting a payoff (denial_payoff
drops to 3 copies, p=0.71 < 0.75, a measured assembly HARD FAIL), an outlet, or fodder (which shrinks Sothera's
own trigger denominator). The deviation is recorded, not hidden.

### COUNT-DEPENDENT VERDICTS

- Sothera trigger denominator: 10 of 23 nonland cards are creatures (Susurian Voidborn x2, Umbral Collar Zealot x2, Gravpack Monoist x2, Swarm Culler x1, Voidforged Titan x1, Lightless Evangel x1, Beamsaw Prospector x1). Plus the 2 Robot tokens Gravpack Monoist makes = 12 creature-death instances, each exiling one opposing creature. UNCHANGED at 12 by the resolution: Swarm Culler -1 was offset by Voidforged Titan +1. INCLUDE Sothera.
- Embrace Oblivion feed: 2 of 23 nonland cards need a permanent to eat. Feeders now 10 creature bodies + 2 Robot tokens + 1 Lander token + 1 Dubious Delicacy (Artifact - Food) = 14 sacrificeable instances for 2 required (was 13). Cost is fed 14:2.
- Void payoff density: 7 of 23 nonland cards read Void (Hymn of the Faller x2, Decode Transmissions x2, Tragic Trajectory x2, Voidforged Titan x1) — up from 6 with the Titan restored. Switchable at will for zero mana by 2 of 23 (Umbral Collar Zealot x2); switched on incidentally by the 8 removal spells, by Swarm Culler x1, and by Susurian Voidborn's Warp {B} satisfying the 'or a spell was warped this turn' half.
- Removal count: 8 of 23 nonland cards are printed removal (Embrace Oblivion x2, Tragic Trajectory x2, Gravkill x2, Archenemy's Charm x1, Dubious Delicacy x1) = 34.78%. This single number now appears in coverage.stack, failure_modes.decapitation, deck_identity and slot_allocation; the pre-resolution record said 7 in two of those places.
- Lightless Evangel growth: 5 of 23 nonland cards can make you sacrifice (Umbral Collar Zealot x2 repeatably and free, Swarm Culler x1, Embrace Oblivion x2, of which the last 2 spend a removal spell). Down from 6 because Swarm Culler went 2 -> 1. Its trigger is 'Whenever you SACRIFICE', not 'dies'. RETAIN at 1 copy: it is the 4th denial_payoff copy and the assembly gate measurably fails at 3.
- Cards: Net-Positive (gas-out denominator): 4 of 23 unconditional (Hymn of the Faller x2, Decode Transmissions x2), plus Voidforged Titan x1 recurring once Void is on and Swarm Culler x1 conditional = 6 of 23 = 26.1% refuel.
- Cheap-interaction density (screw mode): 10 of 23 nonland cards cost MV <= 2, but 2 of them (Embrace Oblivion x2) are UNCASTABLE on an empty board because of 'As an additional cost to cast this spell, sacrifice an artifact or creature'. The unconditional cheap cards are the other 8.
- Mana: Ongoing-Cost: 0 of 23 nonland cards.
- Rare/mythic budget: 2 of the 6 permitted (Sothera mythic x1, Archenemy's Charm rare x1) across mainboard AND sideboard, 4 unspent. Every card added by the resolution (Voidforged Titan, Dubious Delicacy, Temporal Intervention, Dauntless Scrapbot) is common or uncommon, so the budget did not move.

### LAND MATH

- `cuber.deck_audit.land_target(40, 2.6522, 1)` -> base 17 lands (argmax P(2-4 in 7) = 0.7945), avg MV 2.65 vs reference 2.5 and 1 accel card give adjustment +0.033, raw target 17.033, clamped False, **recommended 17**. Built to 17. Deviation: None. Built to 17, exactly the model's recommendation.
- All 17 land slots are basic Swamps. dossier.mana_infrastructure lists only four B-legal land options: Susur Secundi, Void Altar (mythic, enters_tapped true, and its draw ability needs 12 Station charge counters), Command Bridge (enters_tapped true and 'sacrifice it unless you tap an untapped permanent you control', producing any colour — worth nothing to a zero-splash deck), Secluded Starforge (rare, '{T}: Add {C}' only, cannot cast Sothera's {B}{B} or Archenemy's Charm's {B}{B}{B}), and Haunted Mire / Geothermal Bog (dual Swamps but enters_tapped, and their second colour is dead here). Every one of them is either tapped or off-colour, and the deck has {B} one-drops (Embrace Oblivion, Tragic Trajectory) plus a {B}{B}{B} instant, so untapped basics win on both flags. No land-property census: no core card in this list scales with a land type, basic-land count, snow, or Domain.
- This block and grill_input.audit.land_target_trace are now the SAME object, produced by one cuber.deck_audit.land_target(40, 2.6522, 1) call on the post-resolution list. The pre-resolution 0.036-vs-0.033 split was caused by land_math passing the unrounded avg_mv (2.652173913) and the audit passing the rounded 2.65 to the same function.

### PIP MATH

- Colored pips: B 26. Sources: B 17 of 17 lands (100%). Pip share B 26/26 = 100%. Color balance gap +0.0pp — PASS.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (23 nonland):  1:4  2:6  3:8  4:4  5:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  denial_payoff: 4 copies (effective 3.7: Lightless Evangel@0.7) → p=0.79 (need ≥ 0.75)
  PASS  sac_outlet: 5 copies (effective 3.6: Swarm Culler@0.6, Embrace Oblivion@0.5, Embrace Oblivion@0.5) → p=0.78 (need ≥ 0.75)
  PASS  fodder: 10 copies → p=0.99 (need ≥ 0.75)
  PASS  draw_engine: 6 copies (effective 5.4: Voidforged Titan@0.8, Swarm Culler@0.6) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 60%  T2 94%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Sothera, the Supervoid, Umbral Collar Zealot, Gravpack Monoist, Beamsaw Prospector, Swarm Culler, Embrace Oblivion
  OK        single_large_threat: Gravkill, Archenemy's Charm, Embrace Oblivion, Tragic Trajectory, Dubious Delicacy
  CONCEDED  noncreature_permanents: No mainboard card's oracle text destroys, exiles or bounces an artifact or enchantment; the dossier records 4 artifact_answers and 1 enchantment_answer in the whole 249-card cube and none of them is mono-black, so this is a colour limit, not a build choice. Thaumaton Torpedo x2 ('{6}, {T}, Sacrifice this artifact: Destroy target nonland permanent') is the sideboard answer, and it is honestly slow: the mainboard contains 0 Spacecraft and the sideboard now contains 0 Spacecraft, so the '{3} less if you attacked with a Spacecraft' discount is dead in 100% of games and the ability costs {6} every time.
  CONCEDED  stack: Zero cards in the B-legal pool have a counter-target-spell clause, so nothing in mono-black can interact on the stack. Every opposing spell resolves. The deck answers threats after they resolve with 8 of 23 nonland cards that are printed removal (Embrace Oblivion x2, Tragic Trajectory x2, Gravkill x2, Archenemy's Charm x1, Dubious Delicacy x1), and pre-emptively only from the sideboard via Temporal Intervention x2 ('Target opponent reveals their hand. You choose a nonland card from it. That player discards that card.'), whose Void clause ('This spell costs {2} less to cast if a nonland permanent left the battlefield this turn or a spell was warped this turn') is switchable for zero mana by Umbral Collar Zealot x2, making it a {B} targeted discard. Correction of record: the previous text said '7 pieces of removal' and named a sideboard discard plan that did not exist in the 75.
  CONCEDED  graveyard: No mainboard card exiles or otherwise interacts with an opponent's graveyard. The mainboard's partial substitute is exile-based removal — Gravkill x2 and Archenemy's Charm ('Exile target creature or planeswalker') plus Sothera's own 'each opponent chooses a creature they control and exiles it' — which denies recursion of the specific creatures answered but not the graveyard as a resource. The sideboard answer is a deliberate split against the cube's 31 graveyard_interaction cards (12.45%): Dauntless Scrapbot x1 ('When this creature enters, exile each opponent's graveyard. Create a Lander token.') answers the yard as a resource in one shot and leaves a creature body plus a Lander, while Chrome Companion x1 ('{2}, {T}: Put target card from a graveyard on the bottom of its owner's library.') is the instant-speed mode that can bottom a single reanimation target with the spell on the stack, which Scrapbot cannot.
```

- **curve**: PASS, no flags. Control band asks MV 0-2 for at least 25% of nonland cards; this list is 10/23 = 43.5%, and 0/23 cards sit above the thesis turn's MV of 9 (the top of the curve is MV 4).
- **goldfish**: PASS, no flags. keepable 87% against the 80% threshold, 3 lands by turn 3 at 88%, castable play by T1 60% / T2 94% / T3 100% — the 60% at T1 is the four {B} one-drops (Embrace Oblivion x2, Tragic Trajectory x2) and is expected for a controller that does not need a turn-1 play.

### FAILURE MODES

| Mode | Verdict | Reasoning |
| --- | --- | --- |
| flood | mitigation | Surplus lands become cards and reach. Hymn of the Faller x2 and Decode Transmissions x2 (4 of 23 nonland cards, both tagged Cards: Net-Positive) are pure mana-into-cards; Gravkill x2 at {3}{B} is an instant-speed mana sink held up on the opponent's turn; and Archenemy's Charm's second mode ('Return one or two target creature and/or planeswalker cards from your graveyard to your hand') rebuys two of the creature cards already sacrificed. Critically, the deck's engine does not need mana at all — Umbral Collar Zealot's 'Sacrifice another creature or artifact: Surveil 1' is free — so a flooded board still fires Sothera every turn. |
| screw | mitigation | 10 of 23 nonland cards cost 2 or less (4 at MV 1, 6 at MV 2), including both Embrace Oblivion ({B} destroy), both Tragic Trajectory ({B}), both Umbral Collar Zealot, both Hymn of the Faller, Beamsaw Prospector and Lightless Evangel — so a 2-land hand has removal and an engine piece. Beamsaw Prospector's death trigger creates a Lander ('{2}, {T}, Sacrifice this token: Search your library for a basic land card, put it onto the battlefield tapped'), the deck's one land-finder and the reason deck_audit.accel_count returns 1. goldfish_sim (1000 hands, seed 0): keepable 87%, 3 lands by turn 3 88%, castable play by T2 94%.  QUALIFIED after grill: 10 of 23 nonland cards cost MV <= 2, but Embrace Oblivion x2 carries 'As an additional cost to cast this spell, sacrifice an artifact or creature' and is therefore uncastable on a screwed, boardless hand. The mode stands on the 8 unconditional cheap cards: Tragic Trajectory x2 at {B}, Umbral Collar Zealot x2, Hymn of the Faller x2, Beamsaw Prospector x1, Lightless Evangel x1. |
| decapitation | mitigation | Sothera is a 1-of and Archenemy's Charm CANNOT rebuy it (mode two returns 'creature and/or planeswalker cards' only, and Sothera is a Legendary Enchantment) — so the answer is redundancy, not recursion. The denial_payoff role carries 4 copies / 3.7 effective (Sothera x1, Susurian Voidborn x2, Lightless Evangel x1) for p=0.79 by turn 9; Susurian Voidborn converts the identical creature deaths into 'target opponent loses 1 life and you gain 1 life' with Sothera gone. Independently, 8 of 23 nonland cards are printed removal that beats a board without any payoff at all. |
| gas-out | mitigation | 6 of 23 nonland cards refuel: Hymn of the Faller x2 and Decode Transmissions x2 are tagged Cards: Net-Positive in resource_exchange, and Swarm Culler x2 draws off its own outlet ('Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card'). Both Void draw spells scale rather than fizzle: the Zealot switches Void on for zero mana at instant speed, so Hymn is a draw-two and Decode reads 'you draw two cards and each opponent loses 2 life'. Umbral Collar Zealot's surveil 1 is selection, not advantage, and is not counted here. |
| raced | accepted | The dossier counts 56 evasion cards (22.5% of the cube), and this deck's card-advantage suite pays up to 6 life (Hymn of the Faller x2 'lose 1 life', Decode Transmissions x2 'lose 2 life') while the first real blocker above 2 toughness, Swarm Culler (2/4 flying), costs 4. Mitigating in game 1 would mean maindecking Monoist Sentry ('Defender', {B} 4/1) over payoff or removal slots — a card that never attacks, never draws and never fires a trigger except by dying, which would push the denial_payoff role back under the assembly threshold. The cost is accepted and paid in the sideboard instead: Monoist Sentry x2 and Depressurize x2 come in for Decode Transmissions x2 and Vote Out on the draw. |
| disruption-fizzle | mitigation | The critical turn is a sacrifice chain, and the outlet is a mana-free activated ability, so removal aimed at Umbral Collar Zealot or at Sothera can be responded to by sacrificing in response — the Sothera trigger is already on the stack and resolves independently of what dies. Redundancy is real: the sac_outlet role is 6 copies / 4.2 effective (Zealot x2 at 1.0, Swarm Culler x2 at 0.6, Embrace Oblivion x2 at 0.5) for p=0.83 by turn 9. If the interaction hits Sothera instead, the same sacrifice still fed Lightless Evangel's counter and Susurian Voidborn's drain, so the turn is not blank. |
| sothera_self_sacrifice | accepted | Sothera sacrifices itself for nothing when the opponent is already creatureless. Oracle: 'At the beginning of your end step, if a player controls no creatures, sacrifice Sothera, then put a creature card exiled with it onto the battlefield under your control with two additional +1/+1 counters on it.' The intervening-if reads 'a player', not 'an opponent', so it is satisfied when EITHER side is empty — and emptying the opponent's side is this deck's plan (8 of 23 removal spells plus 12 Sothera creature-death instances). Keeping my own board populated, which the pre-resolution record offered as the mitigation, does not prevent it. Cast Sothera on turn 4 into a creatureless opponent (routine against control, and against anyone whose board was just cleared). At my end step the condition holds, Sothera is sacrificed, and 'put a creature card exiled with it' finds nothing, because Sothera exiled nothing. The 1-of mythic payoff, 1 of 23 nonland cards, becomes a 4-mana blank. Hold Sothera until the opponent controls >= 1 creature. Both players must control >= 1 creature for it to survive to my next turn. When the opponent is creatureless, treat it as a one-shot exile-then-convert engine, not a repeating one, and sequence the sacrifices so the exile pile is non-empty before the end step arrives. None in card slots; this is a sequencing constraint, and the 4 unspent rare/mythic slots buy no second copy because Sothera is pool-capped at 1. |

### CARDS CONSIDERED BUT EXCLUDED

- **Hylderblade** (uncommon, 2 available) | Equipment whose Void trigger auto-attaches is the combat package the sibling deck b-void-halving is built on; this controller build wins by attrition, not by a +3/+1 aura on one body.
- **Alpharael, Stonechosen** (mythic, 1 available) | Explicitly barred from this pipeline: its attack-triggered halve-life is the sibling aggressor's kill mechanism, and it would consume 1 of only 6 rare+mythic slots for a plan this deck does not run.
- **Sunset Saboteur** (rare, 1 available) | Rare-budget cut: its attack trigger puts the +1/+1 counter on a creature AN OPPONENT controls, which actively makes the board Sothera has to strip harder to strip.
- **Requiem Monolith** (rare, 1 available) | Rare-budget cut: the draw is gated on 'That creature's controller MAY have this artifact deal 1 damage to it' — the opponent decides, so it is not a reliable card-advantage engine.
- **Chorale of the Void** (rare, 1 available) | Rare-budget cut: an Aura on my creature that sacrifices itself unless Void is on, and it needs a creature card in the DEFENDING player's graveyard — Sothera exiles instead of killing, so my own payoff shrinks its fuel.
- **Entropic Battlecruiser** (rare, 1 available) | Rare-budget cut: the discard payoff needs 8 charge counters to fly and its 1+ mode only punishes discard, of which this list has 2 sources (Virus Beetle, Temporal Intervention).
- **Tezzeret, Cruel Captain** (mythic, 1 available) | Rare-budget cut: the −3 tutors an artifact with mana value 1 or less — exactly 2 such cards are in the B-legal pool (Nutrient Block, Thaumaton Torpedo), so the ability is near-blank here.
- **The Dominion Bracelet** (mythic, 1 available) | Rare-budget cut: the payoff costs {15} minus the equipped creature's power; the largest naturally-cast creature among the include candidates is 5 power, leaving a {10} activation.
- **Dawnsire, Sunstar Dreadnought** (mythic, 1 available) | Rare-budget cut and unreachable: Station needs 10 charge counters before it does anything and 20 before it flies; total power across a realistic 4-creature board here is under 12.
- **The Eternity Elevator** (rare, 1 available) | Rare-budget cut: a mana engine whose payoff needs 20 charge counters; this deck's top end is 5 mana, so tripling mana solves a problem it does not have.
- **Extinguisher Battleship** (rare, 1 available) | Rare-budget cut: 8 mana in a deck whose land count tops out around 17-18; the 4-damage sweep also kills my own fodder without the one-sidedness Sothera provides for free.
- **Thrumming Hivepool** (rare, 1 available) | Rare-budget cut and dead text: Affinity for Slivers and 'Slivers you control have double strike and haste' — 0 of the 60 B-legal nonland cards is a Sliver, so it is a 6-mana do-nothing.
- **The Endstone** (mythic, 1 available) | Rare-budget cut: 7 mana, and 'At the beginning of your end step, your life total becomes half your starting life total' caps me at 10 life while this deck already pays life to Hymn of the Faller, Decode Transmissions and Voidforged Titan.
- **Secluded Starforge** (rare, 1 available) | Rare-budget cut: a colorless-only land in a deck with {B}{B} and {B}{B}{B} costs; spending a rare slot on a land that cannot cast Sothera is not defensible.
- **Susur Secundi, Void Altar** (mythic, 1 available) | Rare-budget cut: enters tapped, and the sacrifice-for-cards ability needs 12 charge counters (Station) before it turns on; the mythic slot is Sothera's.
- **Chrome Companion** (common, 2 available) | SIDEBOARD: '{2}, {T}: Put target card from a graveyard on the bottom of its owner's library' is graveyard hate — board it in against recursion decks, but maindeck it competes with fodder that has a death trigger.
- **Thaumaton Torpedo** (common, 2 available) | SIDEBOARD vs noncreature permanents: the destroy costs {6} and only drops to {3} 'if you attacked with a Spacecraft this turn'; 3 of the 43 include candidates are Spacecraft and each needs 4-8 charge counters before it can attack.
- **Virulent Silencer** (uncommon, 2 available) | Poison is a separate win condition needing 10 counters at 2 per connection from NONTOKEN artifact creatures; only 5 of the 43 include candidates are nontoken artifact creatures, so it asks for a fifth combat step this control deck never gets.
- **Dark Endurance** (common, 2 available) | A combat trick granting +2/+0 and indestructible — a controller with a free sacrifice outlet wants its creatures to DIE (that is the Sothera trigger), so indestructible is anti-synergy with the deck's own engine.
- **Pinnacle Kill-Ship** (common, 2 available) | 7 mana for an ETB that deals 10 damage to one creature; Gravkill exiles a creature for 4 and Embrace Oblivion for 1 — strictly worse rate at 3x the cost in a 17-18 land deck.
- **Bygone Colossus** (uncommon, 2 available) | Warp {3} for a 9/9 that is EXILED at the next end step, not sacrificed — it never dies, so it never triggers Sothera, and a vanilla body does not advance a denial plan.

### SIDEBOARD GUIDE

| Matchup | In | Out |
| --- | --- | --- |
| Aggro / wide creature decks | Monoist Sentry x2, Depressurize x2 | Decode Transmissions x2, Voidforged Titan x1, Dubious Delicacy x1 |
| Graveyard / recursion decks | Dauntless Scrapbot x1, Chrome Companion x1 | Tragic Trajectory x1, Lightless Evangel x1 |
| Artifact / enchantment permanent decks | Thaumaton Torpedo x2 | Embrace Oblivion x1, Tragic Trajectory x1 |
| Control / combo (few creature targets) | Temporal Intervention x2, Dauntless Scrapbot x1 | Gravkill x2, Sothera, the Supervoid x1 |

Notes on the guide, from oracle text and this list's counts:

- Against creatureless control, 8 of 23 nonland cards are printed removal with no legal target, and Sothera's
  own intervening-if ("At the beginning of your end step, if a player controls no creatures, sacrifice Sothera,
  then put a creature card exiled with it onto the battlefield under your control with two additional +1/+1
  counters on it.") fires on an empty opposing board and eats the payoff for nothing. Both classes come out.
- Temporal Intervention ("Target opponent reveals their hand. You choose a nonland card from it. That player
  discards that card.") costs {2} less with Void on; Umbral Collar Zealot ("Sacrifice another creature or
  artifact: Surveil 1") switches Void on for zero mana at instant speed, so it is a {B} targeted discard in
  any game where a Zealot and one spare body are on the battlefield.
- Thaumaton Torpedo's discount is dead: the 75 contains 0 Spacecraft, so "{6}, {T}, Sacrifice this artifact:
  Destroy target nonland permanent" costs {6} in 100% of games. It is boarded only when the alternative is
  having no answer at all.
- Monoist Sentry is a Defender and never fires a Sothera trigger except by dying; it is a blocker that later
  becomes fodder, which is why it is a sideboard card and not a maindeck fodder slot.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.03 adj [MV 2.65 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
deck_size_40:                  40 mainboard cards including 17 lands — PASS
sideboard_10:                  exactly 10 — PASS
copy_limits_main_plus_side:    commons/uncommons capped at 2, rares/mythics at 1; no name exceeds its cap and no name exceeds the copies present in working_pool. Basics exempt (17 Swamps) — PASS
rare_mythic_cap_6:             2 used (Sothera, the Supervoid — mythic; Archenemy's Charm — rare), 4 unspent — PASS
colors:                        core_colors ['B'], no splash. Every nonland card returned a non-None effective_cost.best_mode against ['B']; Chrome Companion and Thaumaton Torpedo are colourless (color_identity []) — PASS
splash_cap:                    splash_colors is empty and no card has a color_identity outside {B} — PASS
pool_base:                     cube_mainboard with multipliers common 2 / uncommon 2 / rare 1 / mythic 1; no only_from, no exclusions — PASS
```
