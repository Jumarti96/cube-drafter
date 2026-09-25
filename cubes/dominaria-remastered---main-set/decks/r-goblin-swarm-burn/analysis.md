---
deck_name: "r-goblin-swarm-burn"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "R"
format: "40-card"
built_at: "2026-07-30T00:21:59Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x17  Mountain   (Add {R}; untapped; Fireblast fuel)
```

### CREATURES (15)
```
CMC  Card                     Qty  Clr  Role                                     Rar
  1  Grim Lavamancer          x1   R    Interaction/reach (repeatable burn)      R
  1  Skirk Prospector         x2   R    Enabler/Fodder (free sac outlet, mana)   C
  2  Mogg War Marshal         x2   R    Enabler/Fodder (token generator)         C
  2  Subterranean Scout       x1   R    Enabler/Fodder (evasion enabler, Goblin body) C
  3  Gempalm Incinerator      x2   R    Interaction (tribal-scaled removal, cantrip) U
  3  Goblin Matron            x2   R    Infrastructure/Consistency (tribal tutor) C
  3  Goblin Medics            x1   R    Threat/reach (Goblin body, ping)         C
  3  Pashalik Mons            x1   R    Payload/Payoff (death-to-damage)         R
  3  Suq'Ata Lancer           x2   R    Threat (haste clock)                     C
  5  Siege-Gang Commander     x1   R    Payload/Payoff (tokens + sac-to-face reach) R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                     Qty  Clr  Role                                     Rar
  1  Chain Lightning          x2   R    Interaction/reach (burn)                 C
  1  Spark Spray              x1   R    Interaction (cheap removal + cycle)      C
  4  Empty the Warrens        x1   R    Enabler/Fodder (go-wide tokens)          C
  4  Solar Blast              x1   R    Interaction/reach (burn + cycle)         C
  6  Fireblast                x2   R    Payload/Payoff (free reach finisher)     U
```

### OTHER SPELLS (1)
```
CMC  Card                     Qty  Clr  Role                                     Rar
  3  Sulfuric Vortex          x1   R    Payload/Payoff (clock + lifegain lock)   R
```

## SIDEBOARD (10)
```
Card                   Qty  Clr  Role / When to board in                                                Rar
Tormod's Crypt         x2   C    GY hate — vs reanimator / recursion (Dread Return, Body Snatcher, Necrosavant, Oversold Cemetery, Pyre Zombie) — free exile of their graveyard. U
Slice and Dice         x2   R    sweeper — vs faster/wider aggro & token mirrors where we are the control; cycling {2}{R} gives a floor when it's dead. U
Flametongue Kavu       x2   R    removal on a body — vs midrange/creature decks with key blockers or 4-toughness threats; trades up and leaves a 4/2. U
Solar Blast            x1   R    flexible burn — vs creature decks & grind — extra reach/removal (main 1 + SB 1 = 2). C
Goblin Medics          x1   R    Goblin reach body — vs grindy boards where repeatable pings matter (main 1 + SB 1 = 2). C
Damping Sphere         x1   C    tax / combo hate — vs High Tide storm, big-mana ramp, and Cryptic Gateway — taxes multi-spell turns and shuts off 2+-mana lands. U
Shivan Dragon          x1   R    evasive finisher — vs control / lifegain grind / ground stalls — a hard-to-block clock that closes when the go-wide plan stalls (rare: main 4 + SB 1 = 5 total). R
```

## ANALYSIS

### DECK IDENTITY
Mono-red Goblin go-wide aggro. Flood the board with cheap Goblins and tokens (Skirk Prospector, Mogg War Marshal, Empty the Warrens, Siege-Gang Commander, Pashalik Mons), then convert that board into damage through sacrifice-to-face reach (Siege-Gang, Pashalik death-pings) and a mono-red burn suite (Chain Lightning, Fireblast, Solar Blast, Spark Spray) with Sulfuric Vortex as an inevitability clock. Goblin Matron tutors the shallow tribe's key pieces for consistency. Win by damage on turn 4-5.

### KEY INTERACTIONS & OBSERVATIONS
- **The sacrifice loop is the whole deck.** Skirk Prospector ("Sacrifice a Goblin: Add {R}") is a *free* sac outlet, so with Pashalik Mons out every Goblin token becomes 1 damage to any target at no mana cost — the board itself is a pile of burn spells. Siege-Gang Commander then converts the same bodies into 2-damage bolts for {1}{R} each.
- **Goblin count that feeds the engines (numerator/denominator against this list):** 12 of 15 creatures are Goblins; the 3 non-Goblins (Grim Lavamancer, Suq'Ata Lancer x2) are deliberate reach/tempo that do NOT feed Gempalm's X or the sac costs. Even so, Gempalm Incinerator's "X = number of Goblins on the battlefield" is routinely 3–6 on a developed board, enough to kill most creatures while replacing itself.
- **Fireblast is effectively free reach.** All 17 lands are Mountains, so "sacrifice two Mountains rather than pay this spell's mana cost" is always payable; by turn 4–5 dumping two lands for 4 to the face is the standard closing line (two copies = 8 reach).
- **Sulfuric Vortex is the inevitability + lifegain lock** — 2 to the opponent every upkeep regardless of board, and it shuts off the cube's 10 lifegain cards (Test of Endurance, Spirit Link, Congregate, …), the deck's only main-deck answer to that axis.
- **Note (from the self-grill):** Gempalm Incinerator is board-state-dependent, creature-only removal — the reliable single-target answers are Chain Lightning (3), Solar Blast (3) and Fireblast (4), which stack.

### STRUCTURAL CHECKS
```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (23 nonland):  1:6  2:3  3:9  4:2  5:1  6:2
  WARN  MV 2 share: share 13% below band minimum 25%
  WARN  MV 4+ share: share 22% above band maximum 20%
  WARN  Above thesis turn: share of nonland cards with MV > 4 is 13% (max 10%)
Assembly (thesis turn 4, 11 cards seen):  [PASS]
  PASS  payoff (face reach / closers): 10 copies → p=0.96 (need ≥ 0.75)
  PASS  enabler (Goblin fodder / token gen): 8 copies → p=0.91 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 77%  T2 93%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mono-R main-deck sweeper at the 5-rare budget; the plan out-races go-wide boards with a turn 4-5 clock and reach to the face rather than trading. Slice and Dice is the sideboard answer.
  OK        single_large_threat: Gempalm Incinerator, Chain Lightning, Solar Blast, Fireblast
  CONCEDED  noncreature_permanents: Red has no main-deck artifact/enchantment removal here; the clock pressures the opponent before static permanents take over.
  CONCEDED  stack: No countermagic in mono-R; the deck plays proactively and holds burn to punish a tapped-out opponent rather than interacting on the stack.
  CONCEDED  graveyard: No main-deck graveyard hate; the fast clock closes before graveyard engines dominate. Tormod's Crypt is the sideboard answer.
```
- curve MV2 share 13% vs 25% min: the mono-R Goblin pool offers only Mogg War Marshal (x2) and the weak Subterranean Scout at MV2; goldfish shows 93% of hands make a T2 play and 87% keepable, so real curve-out is fine. Adding filler (Ember Beast/Storm Entity) over payoffs would be a downgrade.
- curve MV4+ 22% vs 20% max and MV>4 13% vs 10%: overstated by Fireblast x2 (printed MV6, effectively free via 'sacrifice two Mountains'). Discounting them puts MV4+ at ~13% and leaves one true top-end (Siege-Gang), the payoff the plan is built to reach.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Surplus lands convert to damage and cards: Fireblast sacrifices two Mountains for 4 to the face; Gempalm Incinerator, Spark Spray and Solar Blast all cycle a flooded draw into a fresh card; and mana keeps buying activations (Siege-Gang/Pashalik sac abilities, Empty the Warrens). |
| screw | mitigation | Low curve (6 one-drops, avg MV 2.78) keeps 2-land hands functional — Skirk/Chain Lightning/Grim Lavamancer on T1, double-spells by T3; Gempalm/Spark Spray/Solar Blast cantrip toward the third land. Goldfish keepable rate 87%, 3-lands-by-T3 88%. |
| decapitation | mitigation | No single load-bearing card: the payoffs are redundant (Pashalik, Siege-Gang, Sulfuric Vortex + the whole burn suite each close on their own), and Goblin Matron rebuys a Goblin payoff if one is answered. |
| gas-out | mitigation | 6 self-replacing/tutor cards refill (Goblin Matron x2 fetch, Gempalm x2 cycle-draw, Spark Spray, Solar Blast); Mogg War Marshal / Siege-Gang / Empty the Warrens each yield multiple bodies per card; Sulfuric Vortex ends an empty-handed game on its own 2-per-turn clock. |
| raced | accepted | As a go-wide creature-aggro deck it can be out-raced by a dedicated turn-3-4 combo (e.g. High Tide storm). Mitigating in the maindeck would require counters/disruption unavailable in mono-R and would blunt the proactive clock that is the deck's identity — accepted, with Damping Sphere + burn-to-the-face + Sulfuric Vortex as the sideboard/racing hedge. |
| disruption-fizzle | mitigation | The clock is incremental, not one lethal turn: a single removal spell or counter trades 1-for-1 and the go-wide+burn plan continues. Sac outlets (Skirk Prospector, Siege-Gang) can respond to targeted removal by converting the doomed Goblin into mana or 2 face damage before it dies. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|------|--------|
| Shivan Dragon | 6-CMC 5/5 flyer finisher — too high for an aggro curve, and the rare/mythic budget (5) is better spent on payoffs+reach. |
| Cryptic Gateway | 'Tap two untapped creatures...put a creature that shares a type from hand' — only Siege-Gang is worth cheating and it's a 5-mana do-nothing turn; costs a rare slot. |
| Urza's Incubator | 'Creature spells of the chosen type cost {2} less' — only 10 of 23 nonland cards are Goblins; a 3-mana do-nothing turn that dies to artifact hate, too slow for aggro; costs the mythic slot. |
| Slice and Dice | 'deals 4 damage to each creature' sweeps our own token board — anti-synergy mainboard; cycling mode is a sideboard consideration vs go-wide mirrors. |
| Grapeshot | Storm payoff — with 0 rituals the realistic storm count is 1-2, so it deals 2-3, below a burn spell's floor; not a competitive main-deck card here. |
| Storm Entity | '+1/+1 counter for each other spell cast this turn' — a creature deck rarely chains enough spells in a turn; usually a vanilla 1/1-2/2. |
| Goblin Turncoat | Black ({1}{B}) — off mono-R identity; belongs to the Rakdos build. |
| Dralnu's Crusade | Black/red anthem + Zombie type-change — the Deadapult combo it enables is the Path B plan; splash not run here. |
| Festering Goblin | Black ({B}) 1-drop death -1/-1 — off mono-R identity; a Path B card. |
| Ridgetop Raptor | 3-mana double striker with no Goblin synergy — a worse use of a 3-slot than Pashalik/Matron/burn. |
| Juggernaut | 4-mana 5/3 artifact with no tribal synergy; slot better spent on a payoff or reach that scales with the board. |
| Lightning Rift | (self-grill absence note) Converts each cycle into 2 damage, but only 4 maindeck cyclers + a {1}-per-trigger tax — too low-density to earn a slot. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 2   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.13 adj [MV 2.78 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_max2: PASS — no common/uncommon exceeds 2 copies
rares_mythics_max1_each: PASS — every rare is a singleton
rares_mythics_max5_total: PASS — exactly 5 (Grim Lavamancer, Pashalik Mons, Siege-Gang Commander, Sulfuric Vortex main; Shivan Dragon SB)
basics_unlimited: 17 Mountains (format-supplied)
```