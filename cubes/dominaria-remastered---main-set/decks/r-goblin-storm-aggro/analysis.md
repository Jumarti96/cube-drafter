---
deck_name: "r-goblin-storm-aggro"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "R"
format: "40-card"
built_at: "2026-07-29T23:12:41Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
16x Mountain
```

### CREATURES (13)
```
CMC  Card                       Qty  Color  Role                                  Rar
  1  Grim Lavamancer            x1  R      Reach (repeatable 2-damage from GY)  R
  1  Skirk Prospector           x2  R      Engine (sac goblin for red mana)     C
  2  Mogg War Marshal           x2  R      Threat/fodder (two goblin bodies)    C
  2  Storm Entity               x2  R      Payload/Payoff (hasty storm beater)  U
  3  Goblin Matron              x2  R      Engine (tutor a Goblin)              C
  3  Pashalik Mons              x1  R      Reach (goblin death-pinger + token m R
  4  Coal Stoker                x2  R      Engine (ritual body: add RRR from ha C
  5  Siege-Gang Commander       x1  R      Payoff/reach (tokens + sac-to-face)  R
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                       Qty  Color  Role                                  Rar
  1  Chain Lightning            x2  R      Threat/reach (3 damage, storm count) C
  1  Spark Spray                x2  R      Interaction (1 damage, cycles)       C
  2  Grapeshot                  x2  R      Payload/Payoff (storm burn reach)    C
  4  Empty the Warrens          x2  R      Payload/Payoff (storm token flood)   C
  6  Fireblast                  x1  R      Interaction/reach (free 4 damage via U
```

### OTHER SPELLS (2)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Helm of Awakening          x1  C      Engine (cost reducer for the storm c R
  3  Sulfuric Vortex            x1  R      Reach/inevitability (2 dmg/upkeep, n R
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                              Rar
Tormod's Crypt             x1  C      GY hate — vs the cube's 45-card graveyard/reanimat U
Subterranean Scout         x2  R      Evasion pusher — board in vs clogged ground/wall d C
Gempalm Incinerator        x1  R      Scaling goblin removal + cantrip — vs creature dec U
Goblin Medics              x1  R      Repeatable pinger — vs X/1 aggro and small fliers  C
Flametongue Kavu           x2  R      Removal + body — vs single large threats and the 4 U
Solar Blast                x2  R      3-damage removal, cycles — vs midrange creatures/b C
Slice and Dice             x1  R      Red sweeper — vs faster go-wide/token decks; rebui U
```

## ANALYSIS

### DECK IDENTITY
Mono-red goblin storm-aggro. A low, wide curve of cheap goblins and burn builds a storm count that Empty the Warrens (x2) converts into a token swarm; Skirk Prospector turns that swarm into red mana, Coal Stoker adds {R}{R}{R}, and Helm of Awakening discounts the chain to assemble a lethal storm turn around turn 4. (The 1/1 tokens have summoning sickness, so an Empty resolved on turn 4 threatens lethal the following turn; the deck's immediate turn-4 reach is Grapeshot and the burn suite.) When the ground stalls the same board becomes reach: Siege-Gang Commander and Pashalik Mons sacrifice goblins to the face, Grapeshot / Chain Lightning / Fireblast / Grim Lavamancer burn, and Sulfuric Vortex ticks the opponent down while shutting off lifegain. The build is mono-red by design — the goblin core is red-pip-intensive ({3}{R}{R}, {1}{R}{R}, Fireblast's sacrifice-two-Mountains), and blue's only real offering (a single Counterspell) does not justify taxing that base.

### The two win axes

This deck attacks from two directions that share the same cards. The **wide** axis: Empty the Warrens off a storm count of N prior spells makes 2×(N+1) Goblins — four cheap red spells is 10 bodies. The **reach** axis: those same Goblins are ammunition — Skirk Prospector ("Sacrifice a Goblin: Add {R}") turns them into mana, Siege-Gang Commander ("{1}{R}, Sacrifice a Goblin: 2 damage to any target") throws them at the face, and Pashalik Mons ("Whenever a Goblin you control dies, deal 1 damage to any target") pings once per death. With Pashalik out, sacrificing a 10-Goblin board to Skirk is 10 free points of reach on top of the mana.

### Count-dependent verdicts (Counts Principle)

- **Goblin fodder for sac outlets**: the deck runs 3 sac outlets (Skirk Prospector x2, Siege-Gang, Pashalik) fed by 8 nonland Goblin permanents plus every token source (Empty x2, Mogg War Marshal, Siege-Gang's 3, Pashalik's ability). Fodder vastly exceeds outlets — the engine is never starved.
- **Fireblast**: needs 2 Mountains to sacrifice for its free mode; 16 of 16 lands are Mountains, so the alt cost is always live — a board-independent 4 damage with no mana.
- **Helm of Awakening** discounts all 24 nonland cards by {1}, letting one more cheap spell fit per turn — directly more storm count for Empty/Grapeshot.

### Honest gap (conceded)

Mono-red has **no answer** to the cube's enchantments (33 cards) or artifacts (24). Zero mono-red artifact/enchantment removal exists in this pool, so the plan is to race and burn face rather than interact with permanents. This is a pool limitation, not a build choice — it is the price of the mono-red consistency that makes the goblin engine hum.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:7  2:7  3:4  4:4  5:1  6:1
Assembly (thesis turn 4, 11 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.7: Goblin Matron@0.7) → p=0.90 (need ≥ 0.75)
  PASS  enabler: 8 copies → p=0.91 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 82%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Aggro deck races and goes over the top; no true sweeper maindeck. Sulfuric Vortex plus burn reach (Grapeshot storm, Chain Lightning, Fireblast, Grim Lavamancer) close before an opposing wide board matters.
  OK        single_large_threat: Chain Lightning, Fireblast, Grim Lavamancer, Siege-Gang Commander
  CONCEDED  noncreature_permanents: No artifact/enchantment removal in mono-red commons/uncommons here; the plan is to race and burn face rather than answer permanents.
  CONCEDED  stack: Mono-red has no counterspells; the deck applies pressure and uses reach rather than interacting on the stack.
  CONCEDED  graveyard: No maindeck graveyard hate; race plan. Grim Lavamancer only exiles from our own graveyard as a cost.
```
- curve PASS and goldfish PASS (keepable 84%, T1 play 82%) — no WARN flags.
- Slot deviations (threats 58%, interaction/reach 25%, engine 17%) are thesis-grounded: a storm-aggro hybrid's payoffs double as threats, its burn doubles as reach, and Skirk Prospector's mana is a load-bearing accelerant. The shape judge credited these grounds.

### FAILURE MODES

Mode | Verdict | Reasoning
---|---|---
flood | mitigation | Excess lands feed Fireblast (sacrifice two Mountains for a free 4 damage) and hard-cast Siege-Gang Commander {3}{R}{R} / Coal Stoker; Skirk Prospector converts spare board into mana. Grim Lavamancer and Sulfuric Vortex are flood-proof recurring reach.
screw | accepted | 16 lands plus seven one-mana plays (Skirk Prospector x2, Chain Lightning x2, Spark Spray x2, Grim Lavamancer) keep 2-land hands active, but a true 1-land hand stumbles; adding lands would cut the low-curve threat density that is the explosive plan's identity.
decapitation | mitigation | No single key card: the board is Empty the Warrens x2 (storm tokens), Mogg War Marshal (2 bodies), Siege-Gang (3 tokens), Goblin Matron (tutors a replacement Goblin). If one payoff is answered the others still close, and Grapeshot / Chain Lightning / Fireblast kill from an empty board.
gas-out | mitigation | Goblin Matron tutors the next threat, Empty the Warrens is a one-card army, and Spark Spray cycles when it is a dead removal spell; Sulfuric Vortex and Grim Lavamancer supply damage that needs no further cards. The deck is built to have applied lethal pressure before the hand empties.
raced | accepted | As the aggressor it usually sets the clock, but against a faster combo (e.g. the UR High Tide deck) it has no maindeck stack interaction (conceded); it accepts the race, relying on the turn-4 goldfish and Sulfuric Vortex inevitability. Adding counters requires blue, which the mono-red build rejected as a manabase tax.
disruption-fizzle | mitigation | The kill is not one fragile turn: if an Empty is countered or a sweeper resolves, Skirk Prospector sacs the board for value first, Pashalik Mons turns dying goblins into damage, and Empty x2 / Siege-Gang / Goblin Matron rebuild; Sulfuric Vortex and burn continue independent of the board.

### CARDS CONSIDERED BUT EXCLUDED

Card | Reason
---|---
Stroke of Genius / Time Stretch | Big-mana blue finishers belong to the control/combo builds; irrelevant to a go-wide goblin clock.
Peregrine Drake / Turnabout | Blue mana bursts serve the High Tide combo, not a red board plan.
Force of Will | Free counter is a combo-protection card; an aggro deck would rather deploy threats than hold up a pitch counter, and it competes for the rare/mythic cap.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.5   Ramp cards: 4   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.00 adj [MV 2.5 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each
[PASS] Rares/mythics <= 1 copy each
[PASS] Rares/mythics total <= 5: 5/5 (Siege-Gang Commander, Pashalik Mons, Sulfuric Vortex, Grim Lavamancer, Helm of Awakening)
[PASS] Deck size 40 (24 nonland + 16 land); sideboard 10
[PASS] Colors R; no splash
```