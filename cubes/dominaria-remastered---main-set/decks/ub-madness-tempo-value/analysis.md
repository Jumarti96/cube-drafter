---
deck_name: "ub-madness-tempo-value"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-30T21:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
8x Island                 Blue source
5x Swamp                  Black source
1x Contaminated Aquifer   UB dual, enters tapped
1x Gemstone Mine          Any-color untapped (3 uses)
1x Remote Isle            U source, tapped; cycles
1x Polluted Mire          B source, tapped; cycles
```

### CREATURES (11)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Aquamoeba                 x2   U     Free repeatable discard outlet        C
  2  Cloud of Faeries          x2   U     Cheap flier; ETB untap 2 lands; cycles C
  2  Nantuko Shade             x1   B     Mana-sink beater / flood insurance    R
  3  Undead Gladiator          x1   B     Recurring discard outlet + cycling engine U
  3  Vexing Sphinx             x1   U     Evasive clock + built-in discard outlet + death-draw R
  4  Aven Fisher               x2   U     Evasive clock; draws on death         C
  4  Thieving Magpie           x2   U     Evasive card-advantage engine / clock U
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Chainer's Edict           x1   B     Edict + flashback                     U
  2  Counterspell              x2   U     Hard counter                          C
  2  Terror                    x1   B     Cheap removal                         C
  3  Circular Logic            x2   U     Madness counter (GY-scaling)          U
  3  Frantic Search            x1   U     Free loot outlet                      C
  3  Ichor Slick               x2   B     Madness removal (-3/-3); cycles       C
  3  Recoil                    x1   UB    Bounce + discard (only noncreature-perm answer) U
  6  Dark Withering            x1   B     Madness removal (destroy nonblack)    U
```

### OTHER SPELLS (1)
```
CMC  Card                       Qty  Color  Role                                  Rar
  2  Zombie Infestation        x1   B     Discard outlet -> 2/2 Zombie clock    U
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                                   Rar
Tormod's Crypt            x2   C     GY hate — vs reanimator/flashback/recursion (cube GY density 0.19) U
Duress                    x2   B     Hand disruption — vs control/combo — strip counters/removal/Sneak Attack C
Floodgate                 x1   U     One-sided-ish sweeper — vs go-wide; board in when our board is fliers-heavy (hits nonblue non-fliers) U
Faceless Butcher          x1   B     Creature removal on a body — vs midrange/fatties                      U
Royal Assassin            x1   B     Repeatable removal — vs creature/tapper decks                 R
Mystic Remora             x1   U     Card advantage — vs spell-heavy control/combo             R
Chainer's Edict           x1   B     2nd edict — vs hexproof/protection/single big threat U
Man-o'-War                x1   U     Tempo bounce on a body — vs aggro / problem ETB                   C
```

## ANALYSIS

### DECK IDENTITY
UB discard-value tempo. Evasive fliers (Vexing Sphinx, Thieving Magpie, Aven Fisher, Cloud of Faeries) and Zombie tokens form the clock; discard outlets (Aquamoeba, Zombie Infestation, Vexing Sphinx's cumulative upkeep, Frantic Search, Undead Gladiator) turn excess and dead cards into madness-discounted interaction (Circular Logic, Ichor Slick, Dark Withering) and card advantage. Cheap counters and spot removal protect the clock while Thieving Magpie, Undead Gladiator, and death-triggered draws refuel the hand for the long game.

### KEY INTERACTIONS
- **Madness engine, counted:** 5 madness payoffs (Circular Logic x2, Ichor Slick x2, Dark Withering x1) are fed by 6 discard outlets (Aquamoeba x2, Zombie Infestation, Frantic Search, Vexing Sphinx's cumulative upkeep, Undead Gladiator). Aquamoeba is the linchpin — a free, repeatable, instant-speed outlet that lets you hold up Circular Logic as a hard counter for {U} on the opponent's turn, or fire off Ichor Slick / Dark Withering at instant speed for their madness cost.
- **Circular Logic scales with the outlets:** it counters "unless its controller pays {1} for each card in your graveyard." Every discard fills the yard, so the same outlets that enable madness also make Circular Logic a hard counter by mid-game.
- **Vexing Sphinx triple-duty:** a {1}{U}{U} flier that is a clock, a built-in per-turn discard outlet (cumulative upkeep), and card advantage — "draw a card for each age counter on it" when it finally dies.
- **Flood is not dead:** Nantuko Shade converts extra lands into damage, and Remote Isle / Polluted Mire cycle away for cards.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  2:10  3:8  4:4  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies → p=0.97 (need ≥ 0.75)
  PASS  enabler: 6 copies → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 89%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper exists in UB here; race with evasive fliers + Zombie tokens while Chainer's Edict (recurs) + Ichor Slick trade. Floodgate is the SB answer (hits nonblue non-fliers, so board in only when our board is fliers-heavy).
  OK        single_large_threat: Terror, Ichor Slick, Dark Withering, Chainer's Edict, Recoil
  OK        noncreature_permanents: Recoil, Counterspell
  OK        stack: Counterspell, Circular Logic
  CONCEDED  graveyard: No maindeck GY hate; Tormod's Crypt is the SB answer.
```
No WARN-tier flags — curve, assembly, and goldfish all PASS, so no structural responses are required.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Nantuko Shade ('{B}: +1/+1', uncapped) turns surplus lands into damage; Remote Isle and Polluted Mire cycle {2} into fresh cards; Thieving Magpie / Aven Fisher / Vexing Sphinx draw to find action. |
| screw | mitigation | 10 of 23 nonland cards are 2-MV and the curve tops functionally at 4; Cloud of Faeries (ETB untap 2 lands), Ichor Slick cycling {2}, and Remote Isle/Polluted Mire cycling dig toward the third land on a 2-land keep. |
| decapitation | mitigation | No single key card — 9 redundant clock pieces and 6 redundant discard outlets; answering any one leaves the plan intact. |
| gas-out | mitigation | Recurring card advantage: Thieving Magpie x2 (draw on hit), Vexing Sphinx (death-draw), Aven Fisher x2 (death-draw), Undead Gladiator (recurring outlet+cycling), Frantic Search; Zombie Infestation converts dead cards into 2/2 bodies. ~7 net-positive/self-replacing sources. |
| raced | accepted | Against the fastest clocks (Sulfuric Vortex, mono-red/Goblin aggro) the deck has no lifegain and can lose the race if it stumbles; adding maindeck lifegain (e.g. Urborg Syphon-Mage) would dilute the evasive tempo core and slow the clock. We accept the risk and lean on 7 sub-4-MV interaction spells (Counterspell2, Circular Logic2, Terror1, Ichor Slick2) to break the opposing curve; Dark Withering is madness-first, not cheap interaction. |
| disruption-fizzle | mitigation | The plan is incremental, not a single critical turn: madness spells and death-triggers generate value even through a counter/removal, and a countered threat is replaced by the next of 9 redundant clock pieces. |

### CARDS CONSIDERED BUT EXCLUDED
- Yawgmoth, Thran Physician — Mythic sacrifice/-1-1 engine, not a discard outlet; off-plan for a tempo clock and would burn one of the 5 rare/mythic slots.
- Force of Will — Mythic; free counter needs a blue card to pitch and is card-disadvantage — a control-shell tool, not a proactive tempo card. Sideboard-only vs combo.
- Vampiric Tutor / Mystical Tutor — Tutors want a singleton payoff to find; this deck's plan is redundant value, so a tutor just costs a card + life.
- Arcanis the Omnipotent / Denizen of the Deep — 6-8 MV fatties are too slow for a tempo curve topping near 4.
- Body Snatcher / Necrosavant / Dread Return — Reanimation package — that is Path C's kill mechanism, not this deck's evasive clock.
- Urborg Syphon-Mage — Discard outlet with a drain, but {2}{B},{T} per activation is slow; kept as a flex, cut for tempo-positive outlets (Aquamoeba, Jalum Tome).
- High Tide / Turnabout / Peregrine Drake — Big-mana/untap combo pieces with no storm payoff in UB — no home in a tempo build.
- Obsessive Search — Madness {U} cantrip; on-theme but low impact (draw 1); flex/SB, would raise madness density to 6.
- Deep Analysis — Flashback card advantage; strong grind tool cut to keep the tempo curve lean.
- Snap — free tempo bounce; playable but Recoil/Man-o'-War cover the bounce role with added value.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.49 adj [MV 2.87 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  37.5%  prod  47.1%  gap  -9.6pp  [OK]
  U  demand  62.5%  prod  58.8%  gap  +3.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
- Commons/uncommons <= 2 copies each: PASS
- Rares/mythics <= 1 copy each: PASS
- Max 5 rares/mythics total (main+SB): PASS — exactly 5 (Vexing Sphinx, Nantuko Shade, Gemstone Mine main; Royal Assassin, Mystic Remora SB)
- All nonland cards usable in U/B: PASS
- Basic lands unlimited: PASS (Island x8, Swamp x5)
```
