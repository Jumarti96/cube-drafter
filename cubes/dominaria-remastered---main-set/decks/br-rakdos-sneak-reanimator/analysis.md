---
deck_name: "br-rakdos-sneak-reanimator"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-30T21:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  x10  Swamp                    Black source
  x6   Mountain                 Red source
  x2   Geothermal Bog           B/R dual (enters tapped)
```

### CREATURES (9)
```
CMC  Card                          Qty   Color Role                                Rar
  3  Phyrexian Rager              x1    B     Body + card                         C
  3  Undead Gladiator             x1    B     Discard/recursion enabler           U
  4  Flametongue Kavu             x2    R     ETB removal payoff                  U
  4  Juggernaut                   x1    C     Colorless beater target             C
  5  Siege-Gang Commander         x1    R     ETB payoff + reach                  R
  5  Street Wraith                x1    B     Free cantrip / GY-fill / target     C
  6  Necrosavant                  x2    B     Self-recurring body                 U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                          Qty   Color Role                                Rar
  1  Chain Lightning              x1    R     Burn / reach                        C
  1  Duress                       x2    B     Proactive disruption                C
  1  Entomb                       x1    B     GY-stocking tutor                   R
  1  Gamble                       x1    R     Tutor bridge                        R
  2  Chainer's Edict              x1    B     Edict removal                       U
  2  Terror                       x1    B     Removal                             C
  4  Dread Return                 x2    B     Reanimation outlet                  U
```

### OTHER SPELLS (4)
```
CMC  Card                          Qty   Color Role                                Rar
  2  Mind Stone                   x1    C     Ramp / cantrip                      C
  2  Oversold Cemetery            x1    B     Recursion/resilience engine         R
  2  Zombie Infestation           x1    B     Discard outlet                      U
  4  Sneak Attack                 x1    R     Cheat-from-hand outlet              M
```

## SIDEBOARD (10)
```
Card                          Qty   Color Role / When to board in                              Rar
Slice and Dice               x1    R     Go-wide aggro: 4 damage to each creature (cycling)   U
Tormod's Crypt               x1    C     Opposing graveyard/flashback: exile their yard       U
Damping Sphere               x1    C     Storm/ramp/untap combos: tax + {C} lock              U
Solar Blast                  x1    R     Extra removal / reach (cycles)                       C
Ichor Slick                  x1    B     Extra flexible removal                               C
Spark Spray                  x1    R     X/1 utility creatures + mana dorks; cycles           C
Terror                       x1    B     Extra creature removal                               C
Chain Lightning              x1    R     Extra reach / removal                                C
Faceless Butcher             x1    B     Midrange bombs: removal on a body (hardcast)         U
Icy Manipulator              x1    C     Control/big creatures: repeatable tap-down           U
```

## ANALYSIS

### DECK IDENTITY

Rakdos (B/R) dual-cheat reanimator. Two independent axes put a body into play ahead of curve: Sneak Attack ({R}: onto the battlefield from hand, haste, sac at end step) for an immediate swing or ETB burst, and Entomb->Dread Return / Necrosavant reanimation from the graveyard that keeps the body permanently. The two axes fail to *different* hate — Sneak dodges graveyard hate, reanimation dodges counters/discard aimed at the creature — and Siege-Gang's persistent goblins plus Oversold Cemetery keep generating value after any single threat is answered. The pool offers no true bomb in BR (biggest cheat targets are Necrosavant 5/5 and Juggernaut 5/3), so this is a resilient *mid-power* cheat-and-grind deck, not a fatty-slam combo; it wins on a fast, redundant clock rather than one giant swing. Gamble and Entomb bridge to whichever half the hand needs.

### KEY INTERACTIONS

- **Which creatures actually want to be Sneaked.** Sneak Attack puts a creature onto the battlefield WITHOUT casting it and sacrifices it at end step, so the good targets are ETB-burst or evasive/hasty bodies: Flametongue Kavu (ETB 4 damage lands, then it feeds the yard), Siege-Gang (3 goblins persist after the 2/2 is sacked), Necrosavant/Juggernaut (a hasty 5-power swing). Cackling-Fiend-type value bodies and Coal Stoker (cast-only ETB) are NOT cheat targets — the latter is why Coal Stoker is excluded.
- **Siege-Gang Commander = Dread Return flashback fuel.** One ETB makes three 1/1 goblins, exactly paying Dread Return's flashback 'Sacrifice three creatures' for a mana-free second reanimation.
- **Sneak Attack fuels Oversold Cemetery.** Each {R} activation sacrifices a creature CARD at end step, which lands a creature card in the graveyard — one of the few ways this deck advances Oversold's '4+ creature cards' threshold (Siege-Gang/token sacrifices don't count, since tokens cease to exist).
- **Necrosavant is Sneak-proof.** Sneaked, it swings for 5 and is sacrificed at end step — straight into the graveyard, where it self-returns for {3}{B}{B}, so the 'downside' recycles the threat.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (22 nonland):  1:5  2:5  3:2  4:6  5:2  6:2
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  enabler: 5 copies (effective 4.8: Gamble@0.8) → p=0.78 (need ≥ 0.75)
  PASS  payoff: 7 copies (effective 6.1: Necrosavant@0.7, Necrosavant@0.7, Street Wraith@0.7) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 67%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Siege-Gang Commander, Flametongue Kavu, Chainer's Edict, Chain Lightning
  OK        single_large_threat: Terror, Flametongue Kavu, Chainer's Edict, Chain Lightning
  CONCEDED  noncreature_permanents: BR has no maindeck artifact/enchantment removal; Duress preempts, SB brings Damping Sphere/Icy Manipulator
  CONCEDED  stack: BR cannot counter; Duress x2 strips key noncreature spells proactively
  CONCEDED  graveyard: opponent-GY hate is sideboard-only (Tormod's Crypt); the Sneak axis dodges GY hate against us
```
curve PASS and goldfish PASS — no WARN-tier deviations to justify.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Sneak Attack ({R} repeatable) and Siege-Gang ({1}{R}, sac a Goblin: 2 damage — 3 goblins = 6 reach) are mana sinks; Mind Stone cashes for a card; Necrosavant self-returns for {3}{B}{B} each upkeep. |
| screw | mitigation | 82% keepable (goldfish). Geothermal Bog fixes both colors (it enters tapped — a minor tempo cost on 2 of 18 lands); cheap plays Entomb {B}, Duress {B}, Chain Lightning {R}, Terror at 2 function on two lands; and the payoffs are cheated (Sneak/reanimate bypass their mana), so a light land count still deploys threats. |
| decapitation | mitigation | Two independent axes — if Sneak Attack is answered the Entomb->Dread Return axis still cheats bodies, and vice-versa; Siege-Gang leaves three permanent 1/1 goblins when its body is removed, and Oversold Cemetery rebuys any answered creature each upkeep. |
| gas-out | mitigation | Refuel: Phyrexian Rager ETB-draw, Street Wraith cantrips (cycling for 2 life), Undead Gladiator recurs itself, Oversold Cemetery returns a creature each upkeep, Gamble/Entomb dig, Mind Stone cashes — the reanimation axis reuses the same bodies indefinitely. |
| raced | mitigation | The Sneak axis is itself a fast clock — a hasty 5-power swing (Necrosavant 5/5, Juggernaut 5/3) on turn 5 (a Sneak'd Siege-Gang is only a 2-power body but leaves 3 goblins) — backed by maindeck removal (Terror, Chain Lightning, Flametongue Kavu's ETB 4) and Siege-Gang's goblin-ping to trade with early attackers, so the deck races back rather than durdling. |
| disruption-fizzle | mitigation | The key turn meeting one answer survives because the two axes are redundant — a countered Dread Return leaves the target in the GY to retry, a destroyed Sneak Attack leaves the reanimation line — and Duress x2 proactively strips the interaction before committing. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Coal Stoker | its ETB {R}{R}{R} triggers only if CAST from hand; Sneak Attack puts it onto the battlefield without casting, so it gives no value cheated — a hardcast ramp body only. |
| Faceless Butcher | Sneak'd, its exile returns the creature when it is sacrificed at end step (temporary removal); fine as a reanimation body but a poor Sneak target, so not a core dual-axis card. |
| Avarax | haste 3/3 that tutors another Avarax (of which there is 1) — a vanilla hasty body with no ETB payoff worth cheating. |
| Macetail Hystrodon | 7-mana 4/4 first-strike haste with cycling; too small a body to justify a Sneak/reanimation slot over Shivan/Siege-Gang. |
| Fire // Ice | the Ice half is blue (off-color); only the {1}{R} Fire half is usable — a fine cantrip-removal but a tier below the dedicated red burn. |
| Sulfuric Vortex | aggressive burn enchantment, but a rare slot; the 5-rare cap is spent on the two cheat axes, not a pure-burn plan. |
| Dralnu's Crusade | goblin/zombie tribal lord — the deck is not tribal enough (few goblins) to want an anthem over a cheat piece. |
| Cackling Fiend | cut for Street Wraith in the grill repair — a 2/1 ETB-discard that gains almost nothing from being cheated (dies at the Sneak end step); Street Wraith's free cycling fills the yard and digs, serving both axes better. |
| Shivan Dragon | the pool's real Sneak/reanimation bomb (5/5 flyer, firebreathing) but a rare — the 5-rare cap is spent on the two cheat axes (Sneak Attack/Entomb/Gamble/Siege-Gang/Oversold); the top swap-in if the cap is relaxed. |
| Body Snatcher | the best single dual-axis rare (discard-to-GY ETB + reanimate on death) — cut only for the 5-rare cap. |
| Worldgorger Dragon | no aura reanimation loop exists in the pool, so it is a 7/7 that exiles your own board; as a reanimation target it forms a removal-in-response death-pact — deliberately excluded. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.05   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.57 adj [MV 3.05 vs 2.5, 1 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  75.9%  prod  66.7%  gap  +9.2pp  [OK]
  R  demand  24.1%  prod  44.4%  gap -20.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Pool: cube mainboard; commons/uncommons x2, rares/mythics x1.
MB size 40 [PASS]   SB size 10 [PASS]
Copy limits: all <= allowed (Dread Return/FTK/Necrosavant/Duress 2; Terror/Chain Lightning/Geothermal Bog 2 across MB+SB) [PASS]
Rares/mythics total MB+SB: 5 / 5 cap [PASS]  (Sneak Attack, Entomb, Gamble, Siege-Gang Commander, Oversold Cemetery)
Color usability: every nonland card castable in [B,R] [PASS]
Membership: all names exact-match in cube pool [PASS]
```
