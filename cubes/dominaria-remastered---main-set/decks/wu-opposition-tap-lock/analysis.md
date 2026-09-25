---
deck_name: "wu-opposition-tap-lock"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-31T02:34:12Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  1x Drifting Meadow    W, cycling (flood insurance)
  2x Idyllic Beachfront    WU dual
  7x Island
  1x Maze of Ith    Interaction — repeatable combat fog while the lock assembles
  6x Plains
  1x Remote Isle    U, cycling (flood insurance)
```

### CREATURES (10)

```
CMC  Card                     Qty  Color Role                       Rar
  2  Cloud of Faeries         x2   U     Threat/Infra               C
  3  Horseshoe Crab           x2   U     Engine                     C
  3  Nomad Decoy              x1   W     Interaction                C
  4  Thieving Magpie          x2   U     Threat/Engine              U
  4  Voice of All             x1   W     Threat/Payoff              U
  4  Windborn Muse            x1   W     Threat/Interaction         R
  5  Serra Angel              x1   W     Threat/Payoff              U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                     Qty  Color Role                       Rar
  2  Counterspell             x2   U     Interaction                C
  4  Battle Screech           x2   W     Engine/Threat              U
  4  Fact or Fiction          x1   U     Infrastructure/Consistency U
```

### OTHER SPELLS (7)

```
CMC  Card                     Qty  Color Role                       Rar
  2  Mind Stone               x2   C     Infrastructure/Consistency C
  2  Pacifism                 x2   W     Interaction                C
  4  Icy Manipulator          x2   C     Interaction                U
  4  Opposition               x1   U     Engine/Interaction         R
```

## SIDEBOARD (10)

```
Card                     Qty  Color Role / When to board in                              Rar
Tormod's Crypt           x2   C     graveyard hate: vs graveyard decks (18.75% of cube:  U
Damping Sphere           x1   C     anti big-mana / cost-stacking: vs ramp / big-mana /  U
Confiscate               x1   U     steal a problem noncreature permanent: vs decks lean U
Circular Logic           x2   U     extra counter: vs combo/control — extra permission;  U
Radiant's Judgment       x2   W     anti-fatty removal, cycles when dead: vs aggro / big C
Absorb                   x1   UW    premium counter + lifegain: vs aggro/burn/combo — co R
Floodgate                x1   U     one-shot sweeper that mostly spares our fliers/blue  U
```

## ANALYSIS

### DECK IDENTITY

Mono White-Blue Opposition tap-lock control. Opposition plus Horseshoe Crab is the engine: tap a permanent by tapping the Crab, then pay {U} to untap the Crab and do it again, so with enough blue mana every one of the opponent's lands can be tapped down each turn — a hard mana-denial lock. A wide board of cheap fliers (Battle Screech makes up to four birds; Cloud of Faeries, Voice of All, Serra Angel, Thieving Magpie) supplies extra Opposition fuel and an evasive clock, while Icy Manipulator, Nomad Decoy, Pacifism, Counterspell and Maze of Ith control the board until the lock lands. It grinds with Thieving Magpie, Fact or Fiction and Mind Stone and closes through the air.

- THE ENGINE, AS A COUNT: Opposition needs untapped creatures to tap the opponent's board. Horseshoe Crab ('{U}: Untap this creature') converts that from 'tap = my creature count' into 'tap = my blue mana': with Opposition down, each {U} taps one more of their permanents. Across 8-10 blue sources this taps every land the opponent has each turn — a hard mana-denial lock, not a soft tempo tax.

- FUEL DOUBLES AS CLOCK: 9 of the 22 nonland cards are creatures/token-makers (Cloud of Faeries x2, Voice of All, Serra Angel, Thieving Magpie x2, Windborn Muse, Battle Screech x2 = up to 4 birds). Every one is simultaneously Opposition fuel and an evasive attacker, which is why the threat slot (41%) runs far above the control band without diluting the plan.

- BATTLE SCREECH FLASHBACK: the flashback taps three untapped WHITE creatures. Under Serra Angel's vigilance and a wide bird board those taps are nearly free, and the tapped bodies can be the same ones you would tap to Opposition — the two costs overlap rather than compete.

- SOFT-LOCK REMOVAL: the deck runs almost no destroy-effects (only Pacifism). That is deliberate — a permanent that is tapped every turn by Opposition/Icy/Maze is removed as effectively as one that is destroyed, and it keeps the deck's answers repeatable rather than one-shot.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  2:8  3:3  4:10  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  tap_engine: 6 copies (effective 4.7: Horseshoe Crab@0.6, Horseshoe Crab@0.6, Nomad Decoy@0.5) → p=0.80 (need ≥ 0.75)
  PASS  finisher: 9 copies → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 79% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 0%  T2 83%  T3 95%
Coverage:  [PASS]
  OK        wide_boards: Opposition, Pacifism, Icy Manipulator, Battle Screech, Horseshoe Crab
  OK        single_large_threat: Pacifism, Maze of Ith, Icy Manipulator, Opposition, Nomad Decoy
  CONCEDED  noncreature_permanents: WU has no artifact/enchantment removal in this pool; Counterspell answers them on the stack only. Mitigating means maindecking Confiscate (6-mana steal, dead vs empty board) which dilutes the tap-lock. Held for sideboard.
  OK        stack: Counterspell
  CONCEDED  graveyard: No maindeck graveyard hate; mitigating means maindecking Tormod's Crypt (colorless), a dead draw vs non-graveyard decks. Held for sideboard.
```
- goldfish WARN (keepable 79% vs 80% threshold): a 1-point miss for a control deck; the plan lives at MV3-4 (Horseshoe Crab, the tap package, Battle Screech, fliers), so the heuristic still penalizes the lack of turn-1 plays the deck does not need. 94% of hands have 3 lands by turn 3, T2 board-presence is 83%, and three cycling cards (Cloud of Faeries, Drifting Meadow, Remote Isle) plus Mind Stone smooth clunky hands. Accepted.
- threats slot 41% and engine 23% exceed the control bands: accepted because the creature bodies ARE the Opposition fuel (threat count = fuel count) and Horseshoe Crab is the lock amplifier, not a spare threat.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Mind Stone ('{1},{T},Sacrifice: Draw a card'), Drifting Meadow and Remote Isle (Cycling {2}), Cloud of Faeries (Cycling {2}), Thieving Magpie and Fact or Fiction all turn surplus mana/lands into cards; 18 lands is the computed target. |
| screw | mitigation | Eight MV<=2 cards are castable early (Counterspell x2, Pacifism x2, Cloud of Faeries x2, Mind Stone x2); Cloud of Faeries untaps two lands to smooth, Mind Stone ramps toward the 4-drops. Caveat: Counterspell {U}{U} needs two blue among the early lands. |
| decapitation | mitigation | The evasive fliers are an INDEPENDENT win condition, so answering Opposition does not stop the deck. The mana-denial lock itself rests mainly on Opposition (1) amplified by Horseshoe Crab (2); Icy Manipulator (2) provides partial single-target mana denial if it is gone, and Counterspell x2 can protect Opposition. Honest cost: without Opposition the deck wins by beatdown, not by a hard lock. |
| gas-out | mitigation | Refuel from Thieving Magpie (draw on combat damage), Fact or Fiction, Battle Screech flashback (four more bodies from the graveyard), Cloud of Faeries / Drifting Meadow / Remote Isle cycling, and Mind Stone (sac for a card). |
| raced | mitigation | Windborn Muse taxes multi-attacker races ('pay {2} for each attacker'), Maze of Ith fogs one attacker every turn, Pacifism x2 and the tap package (Icy, Nomad Decoy, Opposition) blunt the clock, and Horseshoe Crab is a 1/3 wall; SB adds Radiant's Judgment x2, Absorb (gain 3) and Floodgate. Race is still the deck's weakest axis and the SB is built to shore it. |
| disruption-fizzle | mitigation | The lock assembles incrementally across turns rather than on one all-in turn, so a single counter/removal on one tapper is absorbed — Opposition/Horseshoe Crab/Icy x2 give layered redundancy and Counterspell x2 protects the keystone. No critical turn to fizzle. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Royal Assassin | Cut with the black splash: {1}{B}{B} double-black is unreliable on the few black sources a WU deck can support; its 'destroy tapped creature' role is replaced by the harder Horseshoe Crab + Opposition land-lock. |
| Terror | Cut with the black splash; cheap removal role is covered by Pacifism plus the tap package neutralizing the same threats. |
| No Mercy | Mythic and {2}{B}{B} — belongs to the Pillowfort build; unrealistic to cast here and does not advance the Opposition clock. |
| Force of Will | Mythic; needs a denser blue count to pitch reliably and cannot justify a rare slot over Opposition/Windborn Muse. |
| Peregrine Drake | Strong Opposition fuel (ETB untap five lands) but redundant with Cloud of Faeries at two more mana; slot went to cheaper fuel. |
| Mystic Remora | Excellent early card advantage against this noncreature-dense cube, but competes for the last rare slot with Windborn Muse, which also shores the deck's weakest axis (the race). |
| Sawtooth Loon | Flying fuel plus card selection, but its ETB return-a-creature clause is awkward with our small count of ETB creatures. |
| Wrath of God | Anti-synergistic maindeck — 'Destroy all creatures' wipes our own Opposition fuel (birds, fliers); Floodgate is the sideboard sweeper that mostly spares our blue/flying board. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.18   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.57 adj [MV 3.18 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand  55.6%  prod  55.6%  gap  +0.0pp  [OK]
  W  demand  44.4%  prod  50.0%  gap  -5.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons/uncommons <= 2 copies each:        PASS
Rares/mythics <= 1 copy each:              PASS
Rares/mythics total <= 5 (main+SB):        PASS (4/5): Absorb, Maze of Ith, Opposition, Windborn Muse
All cards from cube pool:                  PASS
Colour usable in W/U: PASS
Deck size 40 + sideboard 10:               PASS
```