---
deck_name: "b-mono-black-reanimator"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "B"
format: "40-card"
built_at: "2026-07-30T21:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  x16  Swamp                    Black source
  x1   Polluted Mire            Black source, cycling land, ETB tapped
  x1   Mishra's Factory         Colorless manland, flood insurance
```

### CREATURES (12)
```
CMC  Card                          Qty   Color Role                                Rar
  2  Millikin                     x1    C     Self-mill ramp                      U
  3  Phyrexian Ghoul              x1    B     Free sac outlet                     C
  3  Phyrexian Rager              x1    B     Body + card                         C
  3  Undead Gladiator             x1    B     Repeatable discard outlet           U
  4  Body Snatcher                x1    B     Reanimator + discard outlet         R
  4  Faceless Butcher             x1    B     Removal on a body                   U
  4  Juggernaut                   x2    C     Beater / reanimation target         C
  4  Yawgmoth, Thran Physician    x1    B     Sac-draw engine / reach             M
  5  Chainer, Dementia Master     x1    B     Repeatable reanimator               R
  5  Street Wraith                x1    B     Free cantrip / target               C
  6  Necrosavant                  x1    B     Self-returning threat               U
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                          Qty   Color Role                                Rar
  1  Entomb                       x1    B     GY-stocking tutor                   R
  2  Chainer's Edict              x1    B     Edict removal                       U
  2  Terror                       x1    B     Removal                             C
  3  Ichor Slick                  x1    B     Removal / cycler                    C
  4  Dread Return                 x2    B     Reanimation spell                   U
  5  Urborg Uprising              x1    B     Bulk recursion + draw               C
```

### OTHER SPELLS (3)
```
CMC  Card                          Qty   Color Role                                Rar
  2  Mind Stone                   x1    C     Ramp / cantrip                      C
  2  Oversold Cemetery            x1    B     Recursion engine                    R
  2  Zombie Infestation           x1    B     Discard outlet                      U
```

## SIDEBOARD (10)
```
Card                          Qty   Color Role / When to board in                              Rar
Duress                       x2    B     Control/combo/GY-hate: strip a key noncreature card  C
Tormod's Crypt               x1    C     Graveyard decks: exile their yard                    U
Damping Sphere               x1    C     Storm/ramp/untap combos: tax + {C} lock              U
Terror                       x1    B     Aggro: extra spot removal                            C
Ichor Slick                  x1    B     Aggro/midrange: flexible removal                     C
Chainer's Edict              x1    B     Hexproof/single big threat: edict                    U
Faceless Butcher             x1    B     Midrange bombs: extra removal-body                   U
Phyrexian Debaser            x1    B     Go-wide/aggro: flying blocker, sac for -2/-2         C
Icy Manipulator              x1    C     Control/big creatures: repeatable tap-down           U
```

## ANALYSIS

### DECK IDENTITY

Mono-black grindy value reanimator. Entomb and cheap discard/cycling outlets (Zombie Infestation, Undead Gladiator, Street Wraith, Millikin) stock the graveyard; Chainer, two Dread Returns and Body Snatcher cheat bodies into play ahead of curve, while Oversold Cemetery, Necrosavant's self-return and Yawgmoth's sac-draw refuel the grind. The pool offers no true bomb in mono-black — the largest reanimation target is a 5/5 (Necrosavant) or colorless Juggernaut 5/3 — so the deck wins on **inevitability** (repeated reanimated/hardcast threats plus reach from Yawgmoth's -1/-1 counters), not a fast clock. Mono-black buys flawless triple-black mana for Chainer's {B}{B}{B} activation with zero fixing tax.

### KEY INTERACTIONS

- **Necrosavant + free sac fodder.** Necrosavant self-returns for {3}{B}{B} by sacrificing a creature each upkeep. Zombie Infestation tokens, Phyrexian Ghoul, and Body Snatcher all supply renewable fodder, making it a body opponents cannot permanently remove.
- **Dread Return flashback vs. hardcast.** The 4-mana hardcast (needs only 1 creature card in the yard) is the primary mode; the flashback ('sacrifice three creatures') is a late-game bonus — realistic given 12 creature copies plus unbounded Zombie tokens, but not the plan.
- **Oversold Cemetery threshold.** Turns on at 4+ creature cards in the graveyard (denominator: 12 creatures in the 40, fed by Entomb + self-mill + discard). It is a mid-game engine (~turn 5-6), not an early enabler — the deck's assembly relies on the payoff/enabler suite, not on Oversold coming online turn 3.
- **Yawgmoth as a Swiss-army engine.** Sac-a-creature draws a card and puts a -1/-1 counter (removal + card advantage + reach); the {B}{B} discard mode is itself a graveyard-stocking outlet that proliferates. Protection from Humans dodges a chunk of the cube's removal.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:1  2:6  3:4  4:7  5:3  6:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.5: Body Snatcher@0.8, Necrosavant@0.7) → p=0.76 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 4.9: Zombie Infestation@0.8, Millikin@0.8, Street Wraith@0.7, Urborg Uprising@0.6) → p=0.79 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 20%  T2 84%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Yawgmoth, Thran Physician, Chainer's Edict, Ichor Slick
  OK        single_large_threat: Terror, Faceless Butcher, Chainer's Edict, Ichor Slick
  CONCEDED  noncreature_permanents: mono-black runs no maindeck artifact/enchantment removal; boarded answers only (Duress preempts, Icy taps)
  CONCEDED  stack: black cannot interact on the stack; Duress (SB) strips key noncreature spells proactively
  CONCEDED  graveyard: opponent-GY hate is sideboard-only (Tormod's Crypt); our own GY is the engine
```
curve PASS and goldfish PASS — no WARN-tier deviations to justify.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Mishra's Factory becomes a 2/2 attacker; Mind Stone sacrifices for a card; Chainer ({B}{B}{B}), Necrosavant ({3}{B}{B}) and Yawgmoth ({B}{B} proliferate) are repeatable mana sinks that turn surplus mana into board/cards. |
| screw | mitigation | 82% keepable (goldfish). Cheap black plays hold the fort on two lands — Entomb {B}, Terror/Chainer's Edict/Ichor Slick at 2 — while the 17-black-source base (16 Swamp + Polluted Mire) reliably assembles {B}{B}{B}; Mind Stone/Millikin add generic ramp toward the higher end (they produce {C}, not black). |
| decapitation | mitigation | Reanimation is redundant — Chainer, 2x Dread Return, Body Snatcher, Necrosavant self-return and Oversold Cemetery each recur threats independently, so answering one leaves the rest and the bodies stay in the GY. |
| gas-out | mitigation | Refuel engines: Phyrexian Rager ETB-draw, Urborg Uprising (draw + 2 creatures to hand), Undead Gladiator recurs itself each upkeep, Oversold Cemetery returns a creature each upkeep, Yawgmoth sac-draws, Mind Stone cashes — a deep net-positive / self-replacing base. |
| raced | accepted | Avg MV 3.36 and reanimation-into-play landing ~T5 mean the fastest aggro can get under the engine; fully mitigating would require lowering the curve and cutting the reanimation payoffs that ARE the win condition, so we accept some fast-aggro losses and lean on maindeck spot removal (Terror / Chainer's Edict / Ichor Slick) plus sideboard (Phyrexian Debaser, extra Terror/Edict, Icy Manipulator). |
| disruption-fizzle | mitigation | If a reanimation spell is countered/removed mid-turn, the target stays in the GY and the redundant reanimators (2nd Dread Return, Chainer, Body Snatcher, Necrosavant) retry next turn — the plan survives one piece of interaction. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Worldgorger Dragon | its infinite loop needs an aura reanimator (Animate Dead/Dance/Necromancy); pool has none, so it is a 7/7 that exiles your own board on ETB — a liability. |
| Dark Depths | 20/20 payoff needs ten ice counters removed or a Thespian's Stage / Vampire Hexmage combo the pool lacks; far too slow. |
| Gauntlet of Power | mythic ramp/anthem; a rare/mythic slot better spent on the reanimation engine, and it does nothing toward stocking or emptying the graveyard. |
| Royal Assassin | strong repeatable removal but a rare slot; the 5-rare cap is spent on the engine (Entomb/Chainer/Vampiric/Yawgmoth/Oversold). |
| Flesh Reaver | 4/4 for 2 but deals its damage to you too; the self-damage compounds with Vampiric/Phyrexian life costs in a grindy deck. |
| No Mercy | mythic defensive enchantment; slot better spent on proactive engine given the 5-rare cap. |
| Evil Eye of Orms-by-Gore | 3/6 that stops your OWN non-Eye creatures from attacking — anti-synergy with a creature beatdown finish. |
| Hyalopterous Lemure | 4/3 evasion but no graveyard or ETB relevance; a vanilla-ish body a reanimator does not need. |
| Festering Goblin | On-color, cap-free 1-drop sac fodder (dies: target -1/-1) flagged by the grill; a fine marginal add — left out because the curve/goldfish gates already pass and it is a minor upgrade. |
| Vampiric Tutor | Mythic tutor cut only for the 5-rare cap (the 5 slots went to the engine: Entomb/Chainer/Body Snatcher/Oversold/Yawgmoth) — the top swap-in if the cap is relaxed. |
| Spiritmonger | The pool's only genuine oversized body (6/6, {B}: regenerate) but BG identity — off mono-black; a splash target for the B+U/G variants, not this build. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.36   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.81 adj [MV 3.36 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod  94.4%  gap  +5.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Pool: cube mainboard; commons/uncommons x2, rares/mythics x1.
MB size 40 [PASS]   SB size 10 [PASS]
Copy limits: all <= allowed (Dread Return 2, Juggernaut 2, Terror/Ichor Slick/Chainer's Edict/Faceless Butcher/Duress 2 across MB+SB) [PASS]
Rares/mythics total MB+SB: 5 / 5 cap [PASS]  (Entomb, Chainer, Body Snatcher, Oversold Cemetery, Yawgmoth)
Color usability: every nonland card castable in [B] [PASS]
Membership: all names exact-match in cube pool [PASS]
```
