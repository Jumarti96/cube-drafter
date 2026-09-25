---
deck_name: "br-goblin-aristocrats"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-30T00:45:40Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x7   Mountain           {T}: Add {R}
  x6   Swamp              {T}: Add {B}
  x2   Geothermal Bog     B/R dual, enters tapped
  x1   Polluted Mire      B, enters tapped, Cycling {2}
  x1   Smoldering Crater  R, enters tapped, Cycling {2}
```

### CREATURES (13)
```
CMC  Card                       Qty  Clr  Role                                         Rar
  1  Festering Goblin           x2   B    Enabler/Fodder (native Zombie, death -1/-1)  C
  1  Skirk Prospector           x2   R    Enabler/Fodder (free sac outlet + mana)      C
  2  Mogg War Marshal           x2   R    Enabler/Fodder (token generator)             C
  3  Goblin Matron              x2   R    Infrastructure/Consistency (tribal tutor)    C
  3  Pashalik Mons              x1   R    Payload/Payoff (death-to-damage)             R
  3  Pyre Zombie                x1   BR   Payload/recursion (recurring sac reach)      R
  4  Flametongue Kavu           x1   R    Interaction (removal on a body)              U
  4  Yawgmoth, Thran Physician  x1   B    Engine/Outlet (sac → card + removal)         M
  5  Siege-Gang Commander       x1   R    Payload/Payoff (tokens + sac-to-face reach)  R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                       Qty  Clr  Role                                         Rar
  1  Chain Lightning            x2   R    Interaction/reach (burn)                     C
  2  Chainer's Edict            x2   B    Interaction (edict + flashback)              U
  2  Terror                     x2   B    Interaction (spot removal)                   C
```

### OTHER SPELLS (4)
```
CMC  Card                       Qty  Clr  Role                                         Rar
  2  Oversold Cemetery          x1   B    Engine (graveyard recursion)                 R
  3  Deadapult                  x1   R    Engine/Outlet (sac a Zombie → 2 dmg)         U
  3  Dralnu's Crusade           x2   BR   Engine/anthem (Goblins→Zombies, +1/+1; enables Deadapult) U
```

## SIDEBOARD (10)
```
Card                   Qty  Clr  Role / When to board in                                                    Rar
Tormod's Crypt         x2   C    GY hate — vs reanimator/recursion (Dread Return, Body Snatcher, Oversold Cemetery mirrors) — targets the OPPONENT's graveyard, so it never hits our own recursion. U
Duress                 x2   B    proactive disruption — vs control, combo, and removal/enchantment decks — strips No Mercy, Pacifism, counters, or a combo piece before it lands (our only lever on the stack/noncreature axes). C
Slice and Dice         x2   R    sweeper — vs faster/wider aggro & token decks where we are the control; cycling {2}{R} gives a floor. Board OUT our own go-wide pieces when bringing it in. U
Ichor Slick            x2   B    flexible removal — vs creature decks — -3/-3 kills most threats; Cycling {2} / Madness {3}{B} keep it from being dead. C
Gempalm Incinerator    x1   R    tribal-scaled removal — vs creature/go-wide decks — cycles to deal X = our Goblins to a creature, and is itself a Goblin body for the sac engine. U
Damping Sphere         x1   C    combo/ramp tax — vs High Tide storm, big-mana ramp, and Cryptic Gateway — taxes multi-spell turns and shuts off 2+-mana lands. U
```

## ANALYSIS

### DECK IDENTITY
Rakdos (B/R) Goblin sacrifice-aristocrats. Deploy a go-wide Goblin board (Skirk Prospector, Festering Goblin, Mogg War Marshal, Siege-Gang Commander) and feed it into a sacrifice engine that converts bodies into damage, removal, and cards: Pashalik Mons pings 1 per Goblin death, Siege-Gang and Deadapult fling Goblins at the face for 2 (Dralnu's Crusade x2 turns every Goblin into a Zombie so Deadapult eats any of them, and anthems the team), and Yawgmoth turns each sacrifice into a card plus a -1/-1 counter. A black removal suite (Terror, Chainer's Edict, Chain Lightning) clears the way while Oversold Cemetery and Pyre Zombie recur bodies to grind through removal. Win by combat plus sacrifice reach on turn 5, out-attriting the opponent in the long game.

### KEY INTERACTIONS & OBSERVATIONS
- **The signature combo:** Dralnu's Crusade ("All Goblins are black and are Zombies in addition to their other creature types") turns the entire Goblin board into legal Deadapult fuel ("{R}, Sacrifice a Zombie: 2 damage to any target"). Without Crusade, Deadapult's native fodder is only 3 cards (Festering Goblin x2, Pyre Zombie x1) — so the deck runs Dralnu x2 for redundancy, and the +1/+1 anthem half is never a dead draw.
- **Yawgmoth is the value engine (numerator/denominator):** "Pay 1 life, Sacrifice another creature: -1/-1 counter and draw a card." Its fodder is every OTHER creature — 12 other creature cards + every token (Mogg's, Siege-Gang's 3, Pashalik's 2s) — so it converts a stalled board into cards and removal indefinitely.
- **Triple recursion keeps the engine fed:** Oversold Cemetery returns a creature every upkeep once 4+ creature CARDS are in the yard (tokens don't count — the 13 real creatures + the sac engine get there in a grind); Pyre Zombie self-returns for {1}{B}{B}; Goblin Matron x2 tutors the missing payoff. An opponent must break multiple pieces to stop the grind.
- **Reach is redundant beyond the combo:** Pashalik Mons (1 per Goblin death), Siege-Gang Commander (sac Goblin: 2 to face), Pyre Zombie (sac: 2), and Chain Lightning (3) all close without Deadapult, so removing any single payoff doesn't decapitate the plan.
- **Mana caveat:** the base is R-leaning (57% R pips) but must reliably produce {B}{B} for Yawgmoth on THIN BR fixing; the split was nudged to 9 B / 10 R sources with Geothermal Bog x2 as the load-bearing dual. Double-black is the acknowledged stress point, mitigated by it being a single 4-drop while the rest of the black cards are single-pip.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:6  2:7  3:7  4:2  5:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  sac_outlet: 6 copies → p=0.86 (need ≥ 0.75)
  PASS  payoff (sac/death -> damage): 6 copies → p=0.86 (need ≥ 0.75)
  PASS  fodder (Goblin bodies): 8 copies → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 72%  T2 97%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No B/R sweeper at the 5-rare budget; the deck contests wide boards by going wider itself (Mogg/Siege-Gang/Pashalik tokens) and grinding 1-for-1 with Chainer's Edict (flashback) + Terror. Slice and Dice is the sideboard sweeper.
  OK        single_large_threat: Terror, Flametongue Kavu, Chainer's Edict, Chain Lightning
  CONCEDED  noncreature_permanents: B/R has no artifact/enchantment removal in this pool; Duress (sideboard) preempts a key noncreature card from hand instead.
  CONCEDED  stack: No countermagic in B/R; the deck disrupts proactively (Duress, sideboard) and applies a sacrifice clock rather than interacting on the stack.
  CONCEDED  graveyard: The deck relies on its OWN graveyard (Oversold Cemetery, Pyre Zombie recursion), so main-deck symmetric GY hate is self-harming; Tormod's Crypt (sideboard) targets the opponent only.
```
- Structural gate returned a full PASS (no WARN); no responses required. Threats/Payoffs sits ~74% because the Midrange Engine budget is absorbed into threats (per the band note) — the value engines (Yawgmoth, Oversold, Dralnu, Deadapult) are counted there.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Polluted Mire and Smoldering Crater each 'Cycling {2}' turn a surplus land into a card; Yawgmoth, Oversold Cemetery and Goblin Matron convert excess mana into recurring value; and the sac outlets (Siege-Gang {1}{R}, Pashalik {3}{R}, Deadapult {R}) always give mana something to do. |
| screw | mitigation | Low curve (avg MV 2.35, 6 one-drops + 7 two-drops) keeps 2-land hands active; Geothermal Bog x2 fixes both colors and the two cycling lands smooth draws; Goblin Matron keeps card flow going. Goldfish keepable 86%, 3-lands-by-T3 88%. Residual risk is Yawgmoth's {B}{B} on THIN fixing — a single 4-drop, not the core plan, which runs on single pips. |
| decapitation | mitigation | No single load-bearing card: the reach payoffs are redundant (Pashalik, Siege-Gang, Deadapult, Pyre Zombie each close), Yawgmoth is a value-add not a requirement, and Goblin Matron x2 rebuys an answered Goblin payoff; Oversold Cemetery / Pyre Zombie recur a removed threat. |
| gas-out | mitigation | This is the build's strength: Yawgmoth ('Sacrifice a creature: ...draw a card') is a repeatable card engine, Oversold Cemetery returns a creature every upkeep, Pyre Zombie recurs itself, Goblin Matron x2 tutors, and Mogg War Marshal / Siege-Gang generate multiple bodies per card — the deck refuels a sacrificed board indefinitely. |
| raced | mitigation | Against the cube's fast clocks the deck interacts before it dies: Terror x2, Chainer's Edict x2, Chain Lightning x2 and Flametongue Kavu remove attackers, Festering Goblin and Yawgmoth apply -1/-1 to shrink the board, and go-wide Goblins chump-block while Pashalik pings; it trades and stabilizes rather than purely racing. |
| disruption-fizzle | mitigation | The plan is incremental, not a single lethal turn — one counter or removal trades 1-for-1 and the sacrifice engine continues. Free sac outlets (Skirk Prospector, Yawgmoth) respond to targeted removal by sacrificing the doomed creature for mana/a card/a Pashalik ping before it dies, and Oversold Cemetery/Pyre Zombie buy it back. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|------|--------|
| Cryptic Gateway | 'Tap two creatures that share a type: put a shared-type creature from hand' — only Siege-Gang is worth cheating; a 5-mana do-nothing that eats a rare slot. |
| Urza's Incubator | 'Goblin creature spells cost {2} less' — only ~11 Goblins qualify and it's a mythic-slot do-nothing turn; the mythic is better spent on Yawgmoth as a sac engine. |
| Nantuko Shade | {B}{B} firebreather with no sacrifice synergy — off-plan and double-black-intensive on THIN BR fixing. |
| Royal Assassin | {1}{B}{B} tapper-removal — strong but double-black-heavy and not a sacrifice piece; the removal suite (Terror/Chainer's Edict/Ichor Slick) is cheaper and on-plan. |
| Suq'Ata Lancer | Non-Goblin haste body with no sacrifice/death value — belongs in the pure-aggro build, not aristocrats. |
| Slice and Dice | '4 damage to each creature' wrecks our own go-wide board — anti-synergy; sideboard-only. |
| Necrosavant | {3}{B}{B} recursive Giant — too slow and double-black-heavy; Pyre Zombie/Oversold Cemetery give recursion more cheaply. |
| Shivan Dragon | 6-CMC rare finisher — the 5 rare/mythic slots are spent on engine pieces (Pashalik, Siege-Gang, Yawgmoth, Pyre Zombie, +1). |
| Grapeshot | Storm payoff — no rituals means storm count 1-2; below a real burn spell's floor. |
| Body Snatcher | {2}{B}{B} reanimator that requires discarding a creature — a different (reanimator) plan, not go-wide aristocrats. |
| Phyrexian Ghoul | (grill absence) Free unconditional sac outlet (Sacrifice a creature: +2/+2) eating any of 13 creatures + tokens; a strong add but the outlet slots (Skirk, Yawgmoth, Siege-Gang, Pashalik, Deadapult) were already committed. Top sideboard/swap candidate. |
| Zombie Infestation | (grill absence) Discard two cards: make a 2/2 Zombie — Dralnu-independent Deadapult fodder, but card-disadvantage in a deck that wants to keep cards; cut for the removal/value suite. |
| Empty the Warrens | (grill absence) Two Goblin tokens + Storm — more sac fodder, but the value build preferred removal + recursion over raw go-wide; belongs in the aggressive (Deck A) build. |
| Goblin Turncoat | (grill absence) A black Goblin body + second Goblin sac outlet (regen), but a low-impact 2/2; the slot went to removal/engine pieces. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.53 adj [MV 2.35 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  42.9%  prod  52.9%  gap -10.0pp  [OK]
  R  demand  57.1%  prod  58.8%  gap  -1.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_max2: PASS — no common/uncommon exceeds 2 copies
rares_mythics_max1_each: PASS — every rare/mythic is a singleton
rares_mythics_max5_total: PASS — exactly 5 (Pashalik Mons, Siege-Gang Commander, Yawgmoth [mythic], Pyre Zombie, Oversold Cemetery); ALL in the mainboard, so the sideboard is commons/uncommons only
basics_unlimited: 13 basics (8 Mountain, 5 Swamp)
```