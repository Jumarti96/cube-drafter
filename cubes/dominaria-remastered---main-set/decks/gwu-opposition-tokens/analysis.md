---
deck_name: "gwu-opposition-tokens"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GWU"
format: "40-card"
built_at: "2026-07-30T01:22:54Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
5x Island                 Blue source
5x Plains                 White source
3x Forest                 Green source
2x Idyllic Beachfront     UW dual (tapped)
1x Radiant Grove          GW dual (tapped)
1x Tangled Islet          GU dual (tapped)
```

### CREATURES (3)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Birds of Paradise             x1    G      Fixing / ramp              R
  3  Nomad Decoy                   x1    W      Backup tapper              C
  5  Serra Angel                   x1    W      Evasive vigilant finisher  U
```

### INSTANTS & SORCERIES (15)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Enlightened Tutor             x1    W      Fetch Opposition (enchantment)  R
  1  Swords to Plowshares          x2    W      Exile removal              U
  2  Counterspell                  x2    U      Hard counter               C
  2  Impulse                       x1    U      Dig / find Opposition      C
  2  Nature's Lore                 x1    G      Ramp / fixing              U
  3  Absorb                        x1    UW     Counter + 3 life           R
  3  Call of the Herd              x2    G      Token + flashback          U
  4  Battle Screech                x2    W      Token flyers + flashback   U
  4  Fact or Fiction               x1    U      Card advantage             U
  4  Saproling Symbiosis           x1    G      Mass token multiplier      R
  4  Turnabout                     x1    U      One-shot mass tap          U
```

### OTHER SPELLS (5)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Wild Growth                   x1    G      Ramp aura                  C
  3  Squirrel Nest                 x2    G      Token engine (Opposition fuel)  U
  4  Icy Manipulator               x1    C      Backup tapper              U
  4  Opposition                    x1    U      Tap-down soft-lock         R
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in                          Rar
Tormod's Crypt                x2    C      GY hate — vs reanimator/flashback/threshold      U
Sandstorm                     x1    G      One-sided anti-attacker — vs aggro swarms        C
Pacifism                      x2    W      Neutralize aggressive threat/bomb — vs aggro     C
Circular Logic                x1    U      Scaling counter (madness) — vs control/combo     U
Man-o'-War                    x1    U      Tempo bounce — vs aggro/bombs                    C
Break Asunder                 x2    G      Artifact/enchantment removal — vs Opposition-mirror/Sneak Attack/Sulfuric Vortex  C
Congregate                    x1    W      Anti-race lifegain — vs fast decks               U
```

## ANALYSIS

### DECK IDENTITY
Green-White-Blue tokens-control built around Opposition. A wide token board (Squirrel Nest a Squirrel every turn, Battle Screech flyers, Call of the Herd, Saproling Symbiosis) doubles as both the FUEL for Opposition ('Tap an untapped creature you control: Tap target artifact, creature, or land'), which taps the opponent's lands and creatures for a soft-lock, and as the CLOCK that grinds them out behind it. Because Opposition is a single copy, the lock is made redundant: Nomad Decoy, Icy Manipulator and Turnabout keep a tap-down online, Enlightened Tutor fetches Opposition (an enchantment), and Counterspell + Absorb protect a resolved one. Serra Angel and evasive Bird tokens close; Fact or Fiction and blue card advantage grind. The greedy three-color double-pip mana is the deliberate, accepted cost of this highest-variance sub-path.

**The token board is both the lock's fuel and the win condition.** Opposition reads 'Tap an untapped creature you control: Tap target artifact, creature, or land,' so on a board of N untapped creatures it taps up to N of the opponent's lands and creatures every turn. Squirrel Nest (a fresh Squirrel each turn), Battle Screech, Call of the Herd and Saproling Symbiosis keep that board wide, and the same bodies — plus Serra Angel's vigilance and the flying Bird tokens — grind the opponent out behind the tap-down. A countered or killed Opposition therefore costs tempo, not the game.

**The single-copy Opposition is hedged on every axis — that is why this build was chosen over the beatdown and pure-grind sketches.** Enlightened Tutor fetches it (Opposition is an enchantment) or Icy Manipulator (an artifact); Counterspell x2 and Absorb protect a resolved copy; and Nomad Decoy, Icy Manipulator and Turnabout keep a tap-down online if it is gone. Honest scope, per the self-grill: only Opposition converts board WIDTH into a full lock — the backups keep A tapper going, not the whole prison — so the assembly gate counts tap-down CAPABILITY (p=0.85 by turn 8), and the token clock is the independent backup plan.

**The greedy three-color mana is the deliberate cost, and the deck's real weakness.** Double pips land in all three colors — GG Squirrel Nest, WW Battle Screech / Serra Angel, UU Opposition / Counterspell / Turnabout / Absorb — on THIN fixing. The standalone mana audit PASSes (sources are biased toward U and W, where the double-pip load is heaviest; green's only double pip is Squirrel Nest), but the deck's own goldfish keepability sits at a WARN-level 74% because color-screw, not land-screw, is the risk (91% of hands have three lands by turn three). Birds of Paradise, Wild Growth, Nature's Lore (which fetches the Forest-typed duals) and Impulse smooth it, and a control deck mulligans and keeps slower hands than an aggro heuristic rewards — but this fragility is exactly what makes the Opposition path the highest-variance of the three. Horseshoe Crab ('{U}: Untap this creature') is the strongest iteration upgrade: with Opposition it becomes a mana-into-taps engine that locks from an empty board.

### STRUCTURAL CHECKS
```
── Structural Checks: WARN ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:5  2:4  3:6  4:7  5:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 8 copies → p=0.96 (need ≥ 0.75)
  PASS  tappers: 5 copies (effective 4.7: Enlightened Tutor@0.7) → p=0.85 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 74% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 57%  T2 83%  T3 95%
Coverage:  [PASS]
  OK        wide_boards: Opposition, Nomad Decoy, Icy Manipulator
  OK        single_large_threat: Swords to Plowshares, Opposition
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment removal; Counterspell/Absorb can preempt on the stack, and Break Asunder / Wax // Wane board in vs Opposition-mirror/Sneak Attack/Sulfuric Vortex.
  OK        stack: Counterspell, Absorb
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt boards in vs the cube's reanimator/flashback density.
```
- Goldfish WARN — keepable 74% vs 80%: the triple-double-pip base on THIN three-color fixing lowers keepability (color-screw, not land-screw — 3-lands-by-T3 is 91%). This is the deliberately-flagged, accepted cost of the GWu Opposition identity, the highest-variance of the three sub-paths; the deck mulligans more aggressively and a control deck also keeps slower reactive hands an aggro keepability heuristic discards. (Curve is PASS after the self-grill swap of Radiant's Judgment for the two-drop Impulse.)

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Excess mana fuels repeated Opposition and Icy Manipulator activations, Squirrel Nest's per-turn token, Battle Screech and Call of the Herd flashback, and is held up for Counterspell/Absorb; Fact or Fiction and Enlightened Tutor convert surplus mana into cards. |
| screw | accepted | Color-screw, not just land-screw, is the deck's defining risk — double pips in all three colors mean off-color keeps are unkeepable, and fully mitigating would require cutting the double-pip payoffs (Opposition, Counterspell, Squirrel Nest) that ARE the deck. Birds of Paradise, Wild Growth and Nature's Lore partially smooth it; this fragility is the explicit accepted cost of the GWu Opposition identity. |
| decapitation | mitigation | Only Opposition converts board WIDTH into a full lock, but tap-down CAPABILITY is redundant — Opposition answered on sight leaves Nomad Decoy, Icy Manipulator and Turnabout tapping a permanent each turn, Enlightened Tutor re-finds Opposition (or Icy), and Counterspell/Absorb protect the next copy. Crucially the token board is an INDEPENDENT wincon (Serra Angel + evasive Bird/Squirrel tokens), so losing the full lock costs tempo, not the game. |
| gas-out | mitigation | Cards: Net-Positive/Self-Replacing — Fact or Fiction (2-3 cards), Enlightened Tutor (selection), Battle Screech and Call of the Herd flashback (bodies from an empty hand), and Squirrel Nest making a token every turn refuel board and hand; the lock buys time to draw out of an empty grip. |
| raced | accepted | A goldfish-8 control deck with a color-greedy base is vulnerable to fast aggro before the lock assembles; Swords x2, Absorb (counter + 3 life), Radiant's Judgment and chump-blocking tokens buy time, and Pacifism/Sandstorm/Congregate board in, but racing hyper-aggression is a real, accepted weakness of the slow tap-down plan. |
| disruption-fizzle | mitigation | There is no single combo turn; the goal state (Opposition on a wide board) is reached incrementally, and one piece of interaction on the key spell is answered by the redundant tappers, Enlightened Tutor re-finding a piece, and Counterspell/Absorb fighting over it. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Force of Will | Free counter to protect the lone Opposition, but costs a rare/mythic slot and demands a high blue-card density the token base doesn't want; the cap is better spent on Opposition-finders and fixing. |
| Arcanis the Omnipotent | Strong draw engine but a 6-drop rare competing with cheaper card advantage (Fact or Fiction, Deep Analysis) that this deck already runs. |
| Mystical Tutor | Can't find Opposition (instant/sorcery only); Enlightened Tutor is the correct tutor for an enchantment keystone. |
| Peregrine Drake / Cloud of Faeries / Frantic Search untap loops | Untap-lands pieces enable big-mana combos but do not advance the tap-down tokens plan; off-archetype. |
| Kamahl, Fist of Krosa | Overrun finisher, but this deck wins by grinding under Opposition rather than an alpha strike; a mythic better spent on Urza's engine. |
| Jolrael, Mwonvuli Recluse | Token trigger needs drawing a second card each turn — with Fact or Fiction/Frantic Search there is SOME second-draw, but it is inconsistent; a rare slot better used elsewhere. |
| Cryptic Gateway | Tap two creatures to cheat a creature sharing a type into play — cute with tokens but the pool's tokens rarely share a castable creature type, so it whiffs (Counts Principle: few shared-type payoffs). |
| Turnabout as a hard combo | Turnabout untapping your own lands can loop with rituals, but this pool has no rituals to abuse it; kept only as a tempo tap, not a combo. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.29 adj [MV 2.78 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  30.3%  prod  29.4%  gap  +0.9pp  [OK]
  U  demand  36.4%  prod  47.1%  gap -10.7pp  [OK]
  W  demand  33.3%  prod  47.1%  gap -13.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_<=2: PASS
rares_mythics_<=1_each: PASS
rares_mythics_total_<=5: PASS (5 mainboard: Opposition, Birds, Absorb, Enlightened Tutor, Saproling Symbiosis; 0 in SB)
cards_from_cube_pool_only: PASS (basics format-supplied)
core_colors: GWU (three core colors, no splash)
```