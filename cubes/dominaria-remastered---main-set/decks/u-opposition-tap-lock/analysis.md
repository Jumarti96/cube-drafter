---
deck_name: "u-opposition-tap-lock"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "U"
format: "40-card"
built_at: "2026-07-31T01:53:13Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  16x Island                   basic blue source
  1x Mishra's Factory         colorless manland; artifact creature when animated
```

### CREATURES (12)
```
CMC  Card                         Qty  Color Role                                     Rar
  0  Ornithopter                  x2   C     Enabler (free fuel)                      C
  2  Millikin                     x2   C     Ramp (creature fuel)                     U
  3  Horseshoe Crab               x2   U     Lock enabler (repeatable tapper)         C
  3  Man-o'-War                   x1   U     Interaction (bounce body)                C
  4  Juggernaut                   x2   C     Finisher (5/3)                           C
  4  Thieving Magpie              x1   U     Finisher + Engine                        U
  4  Urza, Lord High Artificer    x1   U     Engine (Construct + mana + CA)           M
  6  Triskelion                   x1   C     Finisher/Reach (lock-independent)        R
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                         Qty  Color Role                                     Rar
  2  Counterspell                 x2   U     Interaction (counter)                    C
  2  Impulse                      x1   U     Selection                                C
  2  Snap                         x1   U     Interaction (bounce+untap)               C
  4  Deep Analysis                x1   U     Engine (recurring CA)                    C
  4  Fact or Fiction              x1   U     Engine (CA)                              U
  4  Turnabout                    x1   U     Interaction (mass tap/untap)             U
  5  Force of Will                x1   U     Interaction (free counter)               M
```

### OTHER SPELLS (3)
```
CMC  Card                         Qty  Color Role                                     Rar
  4  Icy Manipulator              x2   C     Tapper (repeatable)                      U
  4  Opposition                   x1   U     Payoff/Lock (tap-down engine)            R
```

## SIDEBOARD (10)
```
Card                         Qty  Color Role / When to board in                  Rar
Tormod's Crypt               x2   C     Hate (graveyard) — vs reanimator/graveyard (45 GY cards) U
Damping Sphere               x1   C     Hate (tax) — vs ramp/big-mana/storm      U
Wall of Junk                 x1   C     Blocker/Fuel — vs aggro (0/7 blocker + Opposition fuel) U
Circular Logic               x2   U     Interaction (counter) — vs control/combo U
Crawlspace                   x1   C     Hate (anti-aggro) — vs aggro/go-wide (control's worst matchup) R
Aven Fisher                  x1   U     Flex (grind body) — vs attrition/flyers  C
Floodgate                    x1   U     Sweeper — vs go-wide aggro (Island-count sweep) U
Confiscate                   x1   U     Answer (steal permanent) — vs a dominant permanent/enchantment U
```

## ANALYSIS

### DECK IDENTITY
Mono-blue + colorless artifact tap-control. Opposition ('Tap an untapped creature you control: Tap target artifact, creature, or land') turns a board of cheap creatures (Ornithopter, Millikin, Horseshoe Crab, Man-o'-War, Urza's Construct) into a soft lock, stranding the opponent's lands on their upkeep and tapping blockers; Horseshoe Crab ('{U}: Untap this creature') makes the tap repeatable. Icy Manipulator x2 and Turnabout back the lock up. Juggernaut, Triskelion and Thieving Magpie close under it. Because Opposition is a singleton (online in ~1/3 of games), the deck reliably plays as UC tempo-control (redundant tappers + finishers + a full counter suite) and UPGRADES to a hard lock only when Opposition is drawn.

The lock is a ceiling, not a floor. Opposition is a singleton and, on the assembly model (16 cards seen by turn 9), resolves in only about a third of games. That is deliberate: the deck's reliable engine is the redundant TAP role — Opposition + Icy Manipulator x2 + Turnabout = 4 tap sources (p=0.81 to see one) — plus a five-card finisher package (Juggernaut x2, Triskelion, Thieving Magpie, Mishra's Factory; p=0.88) and the full counter suite. In two-thirds of games the deck is a mono-U tempo-control deck that grinds with counters and evasive draw; in the other third Opposition converts that same board into a hard mana-and-blocker lock. Horseshoe Crab ('{U}: Untap this creature') is the true multiplier — one Crab plus open blue taps the opponent's permanents repeatedly, so the lock does not need a wide board.

Opposition is fueled by CREATURES only. Its cost is 'Tap an untapped creature you control', so Icy Manipulator, Millikin-tapped-for-mana, and Mind Stone do not pay for it — only bodies do. The list runs 12 creature copies plus Urza's Construct token and the animated Mishra's Factory, and the cheap sticky fuel that does not want to attack (Ornithopter x2, Millikin x2, Horseshoe Crab x2, Man-o'-War, the Construct) is what powers a lock turn; the two Juggernauts are must-attack finishers, not lock fuel.

The build sits at the 5 rare/mythic cap (Opposition, Urza, Force of Will, Triskelion, and Crawlspace in the board). The self-grill's best upgrades — Maze of Ith (a repeatable Fog land that shores up the accepted 'raced' aggro weakness) and Mystic Remora / Stroke of Genius — are all rare-capped out, and the mono-U colour identity leaves 57 of the cube's noncreature permanents answerable only by Confiscate (steal) plus stack interaction.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  0:2  2:6  3:3  4:10  5:1  6:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  tap_engine: 4 copies → p=0.81 (need ≥ 0.75)
  PASS  finisher: 5 copies → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 36%  T2 89%  T3 96%
Coverage:  [PASS]
  OK        wide_boards: Opposition, Icy Manipulator, Turnabout, Triskelion, Man-o'-War
  OK        single_large_threat: Opposition, Icy Manipulator, Counterspell, Force of Will, Man-o'-War, Snap
  CONCEDED  noncreature_permanents: Mono-U + colorless cannot destroy a resolved noncreature permanent; answers on the stack (Counterspell, Force of Will) or taps/bounces the threat instead (Opposition, Icy, Man-o'-War); Confiscate steals one from the board.
  OK        stack: Counterspell, Force of Will
  CONCEDED  graveyard: No maindeck graveyard interaction; the lock strands reanimator's mana and Tormod's Crypt x2 boards in vs graveyard decks.
```
- curve PASS (no WARN)
- goldfish PASS (no WARN): keepable 81% (at the floor for a 3.13-MV control deck), T2 play 89%

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Excess mana fuels the lock and engines: Horseshoe Crab '{U}: Untap this creature' converts each extra {U} into another Opposition tap; Icy Manipulator {1} activations, Turnabout, Urza's '{5}: play top free', Deep Analysis flashback, and Mishra's Factory animate all sink surplus mana. |
| screw | mitigation | Keepable 81%; Millikin x2 ramp and six two-drops stabilize, Ornithopter is a free turn-1 play, Snap untaps two lands, and Impulse / Fact or Fiction dig to land drops. |
| decapitation | mitigation | Opposition is not a single point of failure: it is one of four tap sources (Icy Manipulator x2, Turnabout) and is not required to win — the deck plays as UC tempo-control with redundant finishers (Juggernaut x2, Triskelion, Thieving Magpie, Urza's Construct) and Counterspell x2 / Force of Will. Its ~1/3 draw rate is by design; losing it downgrades the hard lock to a slower tap grind, not a loss, and counters protect it when it resolves. |
| gas-out | mitigation | Refuel sources (Cards Net-Positive/Self-Replacing): Fact or Fiction, Deep Analysis (4 cards over two casts via flashback), Impulse, Thieving Magpie (draw on damage), Urza's {5} = 5 sources; the lock itself buys the turns to out-draw the opponent. |
| raced | accepted | The deck is slow (goldfish turn 9) and light on early defense beyond Horseshoe Crab, Ornithopter and Wall of Junk (SB); the cube's fastest aggro (Sulfuric Vortex, goblins) can get under it before Opposition locks. Adding more early blockers/removal would crowd out the lock and card-advantage core that define the control plan — the accepted cost; Crawlspace, Wall of Junk and Floodgate board in vs aggro. (Maze of Ith, a zero-slot repeatable Fog land, is the top iteration answer but is rare-capped out.) |
| disruption-fizzle | mitigation | The lock assembles over several turns, not one critical turn — a counter or removal on Opposition is absorbed (Icy x2 / Turnabout continue the tap plan, the finishers continue the beatdown), and Counterspell x2 / Force of Will protect the key resolution. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|------|--------|
| Cloud of Faeries | 'ETB untap up to two lands', 1/1 flyer, cycling {2} — the strongest fuel absence: a free evasive Opposition body whose land-untap funds extra Horseshoe Crab '{U}: Untap' activations. Top iteration add over a marginal body. |
| Maze of Ith | Colorless land: '{T}: Untap target attacking creature. Prevent all combat damage dealt to and by that creature' — a repeatable Fog that answers the 'raced' aggro weakness at zero spell-slot cost, but it is a non-mana land in a deck already at the 17-land keepable floor and it is rare-capped (would cost Crawlspace). |
| Peregrine Drake | 'ETB untap up to five lands' 2/3 flyer — a body plus an explosive mana burst to chain Icy/Crab activations; competes with the top of the curve. |
| Frantic Search | 'Draw two, discard two, untap up to three lands' — free dig that also untaps lands for an extra Opposition/Icy activation; would deepen the thin card-selection but was cut for finisher density. |
| Ovinomancer | '{T}, Return this creature to hand: Destroy target creature' — the only repeatable creature removal in-color, but its ETB bounces three of your basics, backbreaking in a 17-land deck. |
| Mystic Remora | Premier control card-advantage engine ('opp casts noncreature spell: draw unless they pay {4}'), but rare-capped out of a build already at 5/5. |
| Stroke of Genius | 'Target player draws X' — an instant mana-sink that converts the lock's surplus mana into cards/a finish, but rare-capped. |
| Mind Stone | Cut for the 2nd Icy Manipulator: it is a non-creature artifact, so it does NOT fuel Opposition ('tap an untapped creature'), and the assembly gate needed a 4th real tap source more than another ramp rock. |
| Cryptic Gateway | Needs shared creature types among tapped creatures; the deck's bodies rarely share a type. |
| Denizen of the Deep | 8-mana 11/11 that bounces your own creatures — destroys the Opposition board you built. |
| Gauntlet of Power | Anthem/mana-double keyed to one color; the colorless artifact bodies gain nothing and it does not advance the lock. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.13   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.17 adj [MV 3.13 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand 100.0%  prod  94.1%  gap  +5.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
copy_limits: commons/uncommons <=2, rares/mythics <=1 — PASS
rare_mythic_cap: 5 total (Opposition R, Urza M, Force of Will M, Triskelion R [main] + Crawlspace R [side]) — AT CAP, PASS
colors: mono-U + colorless — PASS
basics: Island uncapped — PASS
```