---
deck_name: "u-urza-tempo-value"
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

### CREATURES (13)
```
CMC  Card                         Qty  Color Role                                     Rar
  0  Ornithopter                  x2   C     Enabler (free artifact fuel)             C
  2  Millikin                     x2   C     Ramp (artifact creature)                 U
  3  Dragon Engine                x1   C     Threat (mana-sink beater)                C
  3  Man-o'-War                   x2   U     Interaction (bounce on a body)           C
  4  Juggernaut                   x2   C     Threat (5/3 beater)                      C
  4  Thieving Magpie              x2   U     Threat + Engine (evasive draw)           U
  4  Urza, Lord High Artificer    x1   U     Payoff (Construct clock + ramp + CA)     M
  6  Triskelion                   x1   C     Payoff/Reach (one-shot 3-dmg closer)     R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                         Qty  Color Role                                     Rar
  2  Counterspell                 x2   U     Interaction (hard counter)               C
  2  Impulse                      x1   U     Selection                                C
  2  Snap                         x1   U     Interaction (free bounce)                C
  3  Stroke of Genius             x1   U     Engine/Finisher (X-draw)                 R
  4  Fact or Fiction              x1   U     Engine (card advantage)                  U
  5  Force of Will                x1   U     Interaction (free counter)               M
```

### OTHER SPELLS (3)
```
CMC  Card                         Qty  Color Role                                     Rar
  2  Mind Stone                   x2   C     Ramp + late cantrip                      C
  4  Icy Manipulator              x1   C     Interaction (repeatable tap-down)        U
```

## SIDEBOARD (10)
```
Card                         Qty  Color Role / When to board in                  Rar
Tormod's Crypt               x2   C     Hate (graveyard) — vs reanimator/graveyard-value (45 GY cards in cube) U
Damping Sphere               x1   C     Hate (tax) — vs ramp/big-mana/storm      U
Circular Logic               x2   U     Interaction (counter) — vs control/combo (extra soft counters) U
Crawlspace                   x1   C     Hate (anti-aggro) — vs aggro/go-wide (caps attackers at two) R
Deep Analysis                x1   U     Refuel (recurring CA) — vs control/attrition (4 cards over two casts; feeds Circular Logic) C
Floodgate                    x1   U     Sweeper — vs go-wide aggro (Island-count sweep) U
Icy Manipulator              x1   C     Flex (tap-down) — vs bigger creatures/mana denial U
Confiscate                   x1   U     Answer (steal permanent) — vs a dominant permanent/enchantment (Opposition, big creature) U
```

## ANALYSIS

### DECK IDENTITY
Mono-blue + colorless artifact tempo. Cheap artifacts (Ornithopter, Mind Stone, Millikin, Mishra's Factory) build a wide artifact count that turns Urza's ETB Construct into a 4-6 power clock by turn 4-5, joined by Juggernaut, Dragon Engine, Thieving Magpie and Triskelion. Blue interaction (Counterspell, Force of Will, Man-o'-War, Snap, Icy Manipulator) protects and accelerates the race; Stroke of Genius and Urza's {5} ability refuel.

The engine is the artifact denominator. Urza's Construct 'gets +1/+1 for each artifact you control', and this list runs 11 nonland artifact permanents (Juggernaut x2, Triskelion, Dragon Engine, Ornithopter x2, Mind Stone x2, Millikin x2, Icy Manipulator) plus Mishra's Factory when animated. A realistic turn-4 board of 4-5 artifacts makes the Construct a 4/4-5/5 the turn Urza lands, and every mana rock that fuels the count also taps for {U} under Urza's 'Tap an untapped artifact: Add {U}', so double-blue turns (Counterspell, Force of Will, Thieving Magpie) come online off a 94.1%-blue manabase.

Redundancy is the answer to removal. Because the kill is a critical mass of artifact threats rather than a single card, spot removal on Urza only deletes the Construct — Juggernaut, Thieving Magpie, Dragon Engine, Triskelion and the Mishra's Factory manland all close on their own. Force of Will and Counterspell protect the marquee draws when it matters.

The build is deliberately at the 5 rare/mythic cap (Urza, Triskelion, Force of Will, Stroke of Genius, Crawlspace). The self-grill's strongest upgrades — Helm of Awakening and Vexing Sphinx — are cap-blocked, and the enchantment/artifact-destruction gap is a hard pool constraint: mono-U + colorless has no way to blow up a resolved noncreature permanent, so Confiscate (steal) is the only in-identity answer and the deck otherwise races under them.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  0:2  2:8  3:4  4:7  5:1  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  threat: 8 copies → p=0.96 (need ≥ 0.75)
  PASS  artifact_enabler: 6 copies → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 36%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Triskelion, Icy Manipulator, Man-o'-War, Snap
  OK        single_large_threat: Counterspell, Force of Will, Man-o'-War, Snap, Icy Manipulator
  CONCEDED  noncreature_permanents: Mono-U + colorless cannot destroy a resolved noncreature permanent; the deck answers them on the stack (Counterspell, Force of Will) or races under them (Confiscate steals one from the board).
  OK        stack: Counterspell, Force of Will
  CONCEDED  graveyard: No maindeck graveyard interaction; the proactive artifact clock races reanimator/GY-value decks and Tormod's Crypt x2 boards in.
```
- curve PASS (no WARN)
- goldfish PASS (no WARN): keepable 86%, T2 play 94%

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Surplus mana is never dead: Stroke of Genius {X}{2}{U} draws X, Urza's '{5}: play top card free', Icy Manipulator {1} activation, Dragon Engine {2}:+1/+0, and Mishra's Factory {1}-animate all convert extra lands into action. |
| screw | mitigation | 2-land hands are keepable behind 8 two-drops incl. Mind Stone/Millikin ramp and 2 free Ornithopters; Impulse and Fact or Fiction dig to land 3, and Snap untaps two lands for a tempo mana burst. |
| decapitation | mitigation | Urza is not a single point of failure — the kill is redundant (Juggernaut x2, Thieving Magpie x2, Triskelion, Dragon Engine, Mishra's Factory each close independently). Removing Urza only kills the Construct; the beatdown continues, and Counterspell/Force of Will can protect Urza when it matters. |
| gas-out | mitigation | Refuel sources (Cards Net-Positive/Self-Replacing): Thieving Magpie x2, Fact or Fiction, Impulse, Stroke of Genius, Mind Stone (sac-draw), Urza's {5} = 7 sources keep the hand stocked. |
| raced | accepted | Against the cube's fastest clocks the deck interacts (Counterspell x2/Force of Will/Man-o'-War x2/Snap/Icy) and races with its own T4-5 Construct, but the value top-end (Triskelion 6, Force 5) means the very fastest nut-aggro draws can win the race — the accepted cost of a value-leaning tempo build over a leaner pure-aggro curve. |
| disruption-fizzle | mitigation | There is no single critical turn to fizzle — the plan is incremental board development. One removal on the Construct or a counter on Urza does not end the plan; subsequent threats continue the clock and Force of Will/Counterspell can answer the answer. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|------|--------|
| Helm of Awakening | 'Spells cost {1} less' + an artifact for the Construct and a mana source under Urza; the tightest single-card fit but cut by the 5 rare/mythic cap (would displace Stroke of Genius or the SB rare). Symmetric reduction. |
| Vexing Sphinx | {2}{U} 4/4 flyer is a faster T3 clock than Thieving Magpie, but its cumulative-upkeep 'discard a card' fights the grind plan and it costs a rare slot. |
| Opposition | 'Tap an untapped creature: Tap target artifact/creature/land' soft-locks with a wide artifact board — the Path-B engine, not the proactive tempo clock; rare-capped. |
| Arcanis the Omnipotent | '{T}: Draw three' is the pool's best grind engine but a 6-drop {3}{U}{U}{U} that only shines in the card-advantage build the judge rejected; rare-capped. |
| Mystic Remora | Cheap tax-draw engine, strong vs control, but a rare slot and its 'cumulative upkeep' fades; reserved as an iteration option, not a proactive-clock include. |
| Frantic Search | 'Draw two, discard two, untap up to three lands' — free filtering that would close the deck's zero-cantrip gap; a fine iteration swap over a marginal 2-drop. |
| Jalum Tome | '{2},{T}: Draw then discard' — repeatable filtering that is also an artifact for the Construct; competes with the current engine slots, held as flex. |
| Cloud of Faeries | Free-to-cast 1/1 flyer that untaps two lands and cycles when flooded; a tempo body just below the chosen threats. |
| Peregrine Drake | {4}{U} 2/3 flyer, ETB untap five lands — enables a same-turn double-spell/Stroke burst but is a five-drop competing with the top end. |
| Lotus Blossom | Petal-counter ramp is too slow for a proactive tempo curve; Mind Stone/Millikin ramp immediately, so this rare slot went elsewhere. |
| Cryptic Gateway | 'Tap two creatures sharing a type: put a creature of that type from hand' — the deck's artifact bodies (Thopter/Construct/Golem/Jellyfish/Bird) rarely share a type; too few matches. |
| Thran Golem | Only a 3/3 unless enchanted; the deck runs no Auras to trigger '+2/+2, flying, first strike, trample'. |
| Gauntlet of Power | Anthem buffs one color's creatures and doubles that color's basic mana; the deck's creatures are mostly colorless artifacts, so the anthem misses. |
| Wall of Junk | 0/7 defender that bounces itself on block — pure defense; a proactive clock wants attackers. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 5   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.29 adj [MV 2.91 vs 2.5, 5 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand 100.0%  prod  94.1%  gap  +5.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
copy_limits: commons/uncommons <=2, rares/mythics <=1 — PASS (no violations)
rare_mythic_cap: 5 total (Urza M, Triskelion R, Force of Will M, Stroke of Genius R [main] + Crawlspace R [side]) — AT CAP, PASS
colors: mono-U + colorless; all nonland usable in {U} — PASS
basics: Island format-supplied, uncapped — PASS
```