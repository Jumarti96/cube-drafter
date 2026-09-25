---
deck_name: "rgw-goblin-token-reach"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "RGW"
format: "40-card"
built_at: "2026-07-30T01:22:54Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
9x Mountain               Red source
3x Forest                 Green source
1x Plains                 White splash source
1x Radiant Grove          GW dual (tapped)
1x Sacred Peaks           RW dual (tapped)
1x Wooded Ridgeline       RG dual (tapped)
```

### CREATURES (12)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Birds of Paradise             x1    G      Fixing / ramp              R
  1  Grim Lavamancer               x1    R      Repeatable reach           R
  1  Skirk Prospector              x2    R      Sac outlet (Goblin)        C
  2  Mogg War Marshal              x2    R      Goblin fodder (2 bodies)   C
  2  Radha, Heir to Keld           x1    GR     Mana dork (G / R)          U
  3  Goblin Matron                 x2    R      Goblin tutor               C
  3  Pashalik Mons                 x1    R      Death-ping reach           R
  4  Flametongue Kavu              x1    R      Removal body               U
  5  Siege-Gang Commander          x1    R      Reach engine + 3 Goblins   R
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Chain Lightning               x2    R      Burn reach                 C
  1  Swords to Plowshares          x2    W      Exile removal (splash)     U
  2  Nature's Lore                 x1    G      Ramp / fixing              U
  3  Call of the Herd              x2    G      Token + flashback          U
  4  Empty the Warrens             x1    R      Storm Goblins              C
  4  Solar Blast                   x1    R      Removal/reach (cycling)    C
  6  Fireblast                     x1    R      Free burst reach           U
```

### OTHER SPELLS (2)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Wild Growth                   x1    G      Ramp aura                  C
  3  Sulfuric Vortex               x1    R      Reach clock / anti-lifegain  R
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in                          Rar
Tormod's Crypt                x2    C      GY hate — vs reanimator/flashback/threshold      U
Sandstorm                     x2    G      One-sided anti-attacker — vs opposing go-wide/aggro  C
Spark Spray                   x1    R      Cheap removal/reach — vs X/1 aggro               C
Break Asunder                 x2    G      Artifact/enchantment removal — vs Opposition/Sneak Attack/Sulfuric Vortex  C
Giant Spider                  x1    G      Reach — vs the cube's flyers                     C
Solar Blast                   x1    R      Extra removal/reach — vs creature decks          C
Slice and Dice                x1    R      Sweeper reset — vs faster/wider aggro when behind  U
```

## ANALYSIS

### DECK IDENTITY
Red-primary Naya Goblin go-wide that wins WITHOUT needing to connect. A cheap Goblin/token board — Mogg War Marshal, Empty the Warrens, Siege-Gang Commander's three Goblins, and Call of the Herd — is converted directly into face damage: Siege-Gang Commander ({1}{R}, Sacrifice a Goblin: 2 to any target) and Pashalik Mons (a Goblin dies: 1 to any target) throw the board, Skirk Prospector fuels the loop, and Chain Lightning / Solar Blast / Fireblast / Sulfuric Vortex finish — Vortex ticking 2 to the opponent every upkeep with no board investment. Goblin Matron tutors the payoff; Birds of Paradise, Radha and Wild Growth fix the thin three-color base (white is a light splash for Swords to Plowshares).

**The kill needs no attack.** With Siege-Gang Commander and Pashalik Mons both online, sacrificing a single Goblin reads as 3 damage to the face — 2 from Siege-Gang's {1}{R} sac-gun and 1 from Pashalik's death trigger — at instant speed, ignoring blockers. Skirk Prospector recycles the {R} to fire the gun repeatedly, so a Siege-Gang plus its three tokens (four sac-able Goblins) throws up to 8 while Pashalik adds up to 4 more: roughly 12 damage from one card once the engine is assembled, and Goblin Matron x2 tutors that engine into existence by turn 5.

**The reach engine is Goblin-specific, and the build respects that.** Skirk and Siege-Gang sacrifice 'a Goblin' and Pashalik triggers only on 'a Goblin you control' dying, so the fodder that matters is the Goblin subset: Skirk Prospector x2, Mogg War Marshal x2 (two bodies each), Goblin Matron x2, plus Empty the Warrens and Siege-Gang's own tokens — enough to keep the engines fed. Call of the Herd's Elephants are the combat/blocking half of the plan, not reach fuel. Sulfuric Vortex was deliberately chosen over a token-multiplier here (the self-grill flagged Saproling Symbiosis's non-Goblin tokens as off the engine): Vortex delivers 2 to the opponent every upkeep with zero board investment, and its 'players gain no life' clause both punishes lifegain decks and cancels the life your own Swords to Plowshares hands the opponent.

**Three colors on thin fixing, paid for deliberately.** The fixing is three enters-tapped duals (Sacred Peaks, Wooded Ridgeline, Radiant Grove) plus the untapped dorks Birds of Paradise and Radha, Heir to Keld. Because Sacred Peaks and Wooded Ridgeline are Mountain-typed, Fireblast has eleven Mountain-lands to sacrifice from (nine Mountains + the two duals), and Nature's Lore can fetch the Forest-typed duals — so red and green both fix themselves while white stays a two-card, single-pip splash for Swords to Plowshares.

### STRUCTURAL CHECKS
```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (24 nonland):  1:9  2:4  3:6  4:3  5:1  6:1
  WARN  MV 2 share: share 17% below band minimum 25%
  WARN  MV 4+ share: share 21% above band maximum 20%
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 8 copies → p=0.93 (need ≥ 0.75)
  PASS  enabler: 9 copies → p=0.95 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 83%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Aggressor that races; Pashalik/Siege-Gang and burn can point at key attackers ('any target'), but there is no maindeck mass sweep. Slice and Dice and Sandstorm board in vs opposing go-wide.
  OK        single_large_threat: Swords to Plowshares, Flametongue Kavu, Chain Lightning, Solar Blast
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment removal; Break Asunder x2 boards in vs Opposition/Sneak Attack/equipment.
  CONCEDED  stack: GWR has no countermagic in this pool; the fast proactive clock and burn-to-face pressure the opponent instead of answering the stack.
  CONCEDED  graveyard: No maindeck graveyard hate (Grim Lavamancer only exiles your own GY as a cost); Tormod's Crypt boards in vs reanimator/flashback.
```
- Curve WARN — MV2 share 17% vs 25% min: the shell is bimodal (a dense nine-card one-drop base into three-drop payoffs); the pool's playable two-drops (Mogg War Marshal x2, Radha, Nature's Lore) are already all run. Pool constraint, accepted.
- Curve WARN — MV4+ share 21% vs 20% max (marginal): the reach top-end (Empty the Warrens, Flametongue Kavu, Solar Blast, Siege-Gang, Fireblast) sits at 4-6 MV, but Fireblast is usually free (sac two Mountains) and Solar Blast cycles, so the effective curve is lower than nominal. Accepted.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Surplus mana sinks into Siege-Gang's {1}{R} sac-gun, Pashalik's {3}{R} make-two-Goblins, Grim Lavamancer's {R} ping, Skirk Prospector activations, hard-cast Fireblast, and Call of the Herd flashback — every extra land becomes reach or bodies. |
| screw | mitigation | Six accelerants (Birds of Paradise, Wild Growth, Nature's Lore, Radha, and Skirk Prospector x2 sac-for-R) plus a nine-card one-drop base keep 2-land hands live, and Goblin Matron digs to the payoff; genuinely 1-land hands mulligan. |
| decapitation | mitigation | Reach is redundant — Siege-Gang, Pashalik, and five burn sources (Chain Lightning x2, Solar Blast, Fireblast, Grim Lavamancer) all convert the board to face damage; answering any one piece leaves the rest and the wide board. |
| gas-out | mitigation | Cards: Net-Positive / Self-Replacing — Goblin Matron x2 (tutor to a threat), Call of the Herd (flashback = second body), Solar Blast (cycling), Mogg War Marshal (two bodies) — refuel the board; and the reach plan needs fewer cards to close (burn to face) than a pure combat deck. |
| raced | mitigation | The deck is usually the aggressor (T5 goldfish + burn-to-face reach). Against equal/faster aggro it interacts with Swords x2, Flametongue Kavu (ETB 4 dmg) and burn pointed at their threats, and Pashalik/Siege-Gang can aim reach at attackers; Sandstorm x2 and Slice and Dice come in from the board. |
| disruption-fizzle | mitigation | No single combo turn — reach is spread across many cheap spells; a countered Siege-Gang or Saproling Symbiosis leaves the board plus Pashalik and the burn suite, so one piece of interaction does not stop the kill. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Opposition | Blue tap-down keystone — off the GWR identity; belongs to the GWu prison build. |
| Sneak Attack | Cheats big creatures in, but the pool's fatties are few and it is off-plan for a token-swarm reach deck. |
| Sulfuric Vortex | Great burn-plan enchantment, but its symmetric anti-lifegain matters little here and it does not add to the token/reach engine; a pure-burn card in a go-wide deck. |
| Worldgorger Dragon | Exiles your own permanents on ETB — anti-synergy with a wide board; a combo piece, not a token payoff. |
| Grapeshot | Storm burn, but the deck's spell count is low (creature-heavy), so storm count rarely exceeds 1-2 — Counts Principle: too few spells to make it lethal. |
| Slice and Dice | 4 damage to each creature — kills the deck's own tokens; a sideboard sweeper at best, anti-synergy maindeck. |
| Nut Collector / Jolrael | Green token engines but 6/2 MV and (Jolrael) needs a 2nd-draw enabler the deck lacks; rares competing with the reach engine for the 5-cap. |
| Shivan Dragon / Dragon Whelp | Single evasive beaters that do not compose with the go-wide/sacrifice reach plan; rare-slot competition. |
| Valduk, Keeper of the Flame | Makes tokens only for attached Auras/Equipment — the deck runs neither, so its token clause is dead (Counts Principle: 0 Auras/Equipment). |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.42   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.11 adj [MV 2.42 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  23.1%  prod  31.2%  gap  -8.1pp  [OK]
  R  demand  76.9%  prod  68.8%  gap  +8.1pp  [OK]

Splash Check: [PASS]
  W  3 card(s), max CMC 1  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_<=2: PASS
rares_mythics_<=1_each: PASS
rares_mythics_total_<=5: PASS (5 mainboard: Birds, Grim Lavamancer, Pashalik, Siege-Gang, Saproling Symbiosis; 0 in SB)
cards_from_cube_pool_only: PASS (basics format-supplied)
core_colors: RG core + W splash (Swords)
```