---
deck_name: "wur-blink-removal"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUR"
format: "40-card"
built_at: "2026-07-30T21:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  6x Island                 basic (U)
  7x Plains                 basic (W)
  1x Idyllic Beachfront     WU dual, enters tapped
  1x Molten Tributary       UR dual (red splash), enters tapped
  1x Sacred Peaks           RW dual (red splash), enters tapped
  1x Sulfur Falls           UR check-land, untapped with Island/Mountain
```

### CREATURES (14)
```
CMC  Card                     Qty  Color  Role                           Rar
2.0  Cloud of Faeries         x2   U      ETB untap flier / blink fuel   C
2.0  Whitemane Lion           x2   W      Flash rebuy engine             C
3.0  Man-o'-War               x2   U      ETB bounce (rebuy target)      C
4.0  Flametongue Kavu         x2   R      ETB removal (rebuy target)     U
4.0  Sawtooth Loon            x1   WU     Rebuy + draw-2 filter          U
4.0  Thieving Magpie          x1   U      Evasive card draw              U
4.0  Voice of All             x2   W      Protected flier clock          U
5.0  Lyra Dawnbringer         x1   W      Bomb finisher / lifegain       M
5.0  Serra Angel              x1   W      Flying finisher                U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                     Qty  Color  Role                           Rar
1.0  Swords to Plowshares     x2   W      Premium 1-mana removal         U
2.0  Counterspell             x2   U      Hard counter                   C
2.0  Impulse                  x1   U      Card selection                 C
2.0  Momentary Blink          x2   W      Core rebuy (flashback)         C
2.0  Snap                     x1   U      Free bounce / tempo            C
4.0  Fact or Fiction          x1   U      Card advantage                 U
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in                      Rar
Wrath of God             x1   W      vs go-wide swarm — board in when a wider board out-races us R
Tormod's Crypt           x1   C      vs graveyard/reanimator (cube GY density 19%) U
Pacifism                 x2   W      vs big single threat we can't exile or race  C
Radiant's Judgment       x2   W      vs power-4+ fatties; cycles vs small creatures C
Absorb                   x1   WU     vs combo/control — counter + 3 life          R
Icy Manipulator          x1   C      vs control/midrange — tap key blocker or land U
Confiscate               x1   U      steal a resolved noncreature permanent (artifact/enchant/PW) U
Circular Logic           x1   U      extra counter vs control/combo               U
```

## ANALYSIS

### DECK IDENTITY
WU tempo built on repeatable enter-the-battlefield value with a light red splash. Momentary Blink and Whitemane Lion rebuy Flametongue Kavu (4 damage) and Man-o'-War (bounce) to keep the opponent's board clear, while a stack of evasive fliers — Voice of All, Serra Angel, Lyra Dawnbringer, Cloud of Faeries — races in the air. Swords to Plowshares and Counterspell protect the clock. The plan is to out-tempo and out-interact rather than out-grind.

The engine is repeatable removal on a stick. Of 6 rebuy tools (2 Momentary Blink, 2 Whitemane Lion, Snap, Sawtooth Loon), the two that matter most are Momentary Blink — its flashback gives two rebuys per card — and Whitemane Lion's flash, which lets you re-fire an ETB on the opponent's turn (ambush-block, then bounce a spent Man-o'-War/Flametongue Kavu to recast). Nine of the fourteen creatures carry a rebuyable ETB, so the outlets never lack a target.

Flametongue Kavu is the reason for the red splash and nothing else. It is a single {R} pip at 4 MV backed by exactly 3 red sources (Sacred Peaks, Molten Tributary, Sulfur Falls), each of which also makes a core color — so the splash never strands a W/U card. Rebought, it is the strongest ETB in the pool: 4 damage each time it re-enters clears the ground and lets the fliers race unopposed.

Sawtooth Loon only returns *white or blue* creatures, so it rebuys Man-o'-War, Cloud of Faeries and Voice of All but **not** Flametongue Kavu — that job falls to Momentary Blink and Whitemane Lion. This is a real constraint on which outlet you point at which body.

Man-o'-War as a rebuy target is a soft board-lock: bounce their best creature every turn and they never resolve their game plan while your evasive clock ticks. Against decks with few creatures the same bodies just beat down in the air.

### STRUCTURAL CHECKS
```
── Structural Checks: WARN ──────────────────────────────────
Curve (Tempo):  [WARN]
  MV distribution (23 nonland):  1:2  2:10  3:2  4:7  5:2
  WARN  MV 4+ share: share 39% above band maximum 30%
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.7: Flametongue Kavu@0.85, Flametongue Kavu@0.85) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 5 copies (effective 4.9: Snap@0.9) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 32%  T2 93%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper (Wrath fights our own board); 8+ evasive fliers race over wide ground boards and Flametongue Kavu clears the biggest attacker — Wrath of God is sideboarded for go-wide.
  OK        single_large_threat: Swords to Plowshares, Flametongue Kavu, Man-o'-War
  OK        noncreature_permanents: Counterspell
  OK        stack: Counterspell
  CONCEDED  graveyard: Graveyard interaction is sideboarded (Tormod's Crypt); the maindeck does not interact with graveyards but races in the air.
```

- curve WARN: MV 4+ share is 39% (9 of 23 nonland: 2 Flametongue Kavu, 2 Voice of All, Sawtooth Loon, Thieving Magpie, Fact or Fiction, Serra Angel, Lyra Dawnbringer) vs the 30% Tempo band. Accepted: these are the ETB payoffs and evasive finishers the thesis names; 52% of nonland is MV<=2 and Cloud of Faeries' land-untap deploys the fours ahead of curve.

### FAILURE MODES

Mode | Verdict | Reasoning
---|---|---
flood | mitigation | Excess mana fuels Momentary Blink's Flashback {3}{U} (a second rebuy), Fact or Fiction and Impulse convert mana into cards, and Cloud of Faeries' Cycling {2} turns a flooded draw into a card.
screw | mitigation | 12 of 23 nonland are MV<=2 (Swords {W}, Snap, Impulse, Whitemane Lion, Counterspell, Momentary Blink, Cloud of Faeries), so 2-land hands function; Impulse digs for land three and Cloud of Faeries / Snap untap lands to stretch a short manabase.
decapitation | mitigation | No single lynchpin: the robust rebuy engine is 4 pieces (2 Momentary Blink, 2 Whitemane Lion) and the clock is 8 fliers, so answering any one card leaves the plan intact.
gas-out | mitigation | Card advantage refuels an empty hand: Fact or Fiction, Sawtooth Loon (draw-2, rebought by Blink/Whitemane), Thieving Magpie's on-hit draw and Impulse are net-positive/self-replacing.
raced | mitigation | Early interaction survives the cube's fastest clocks: Swords {W}, Whitemane Lion (flash blocker), Man-o'-War (bounce the attacker), 2 Counterspell, and Lyra Dawnbringer's flying/first-strike/lifelink 5/5 stabilizes. Identity cost: we trade-and-stabilize rather than pure-race.
disruption-fizzle | mitigation | The plan is incremental (a flier + a rebuy each turn), not one critical turn; a single removal or counter costs one flier without collapsing it, and Momentary Blink can blink a targeted creature in response to save it.

### CARDS CONSIDERED BUT EXCLUDED

Card | Reason
---|---
Faceless Butcher | Strong blink target (exile removal that resets), but {2}{B}{B} double-black is off this deck's WU+R identity.
Wormfang Drake | ETB 'sacrifice it unless you exile a creature you control' — exiles your OWN creature and dies if you have no other; anti-synergy with a small board.
Denizen of the Deep | ETB returns ALL your other creatures to hand — mass self-bounce is a blowout, not value, and 8 mana.
Ovinomancer | ETB sacrifices itself unless you bounce three basics; the tempo cost is backbreaking in a tapland manabase.
Wrath of God | Symmetric sweeper fights this deck's own creature-based clock and blink board; better as a sideboard card vs go-wide.
Umbilicus | Symmetric upkeep bounce helps rebuy ETBs but also bounces our lands/permanents and pings us for 2 life each upkeep — too slow/painful for a tempo plan.
Urza, Lord High Artificer | Powerful but artifact-count-dependent (we run ~1-2 artifacts) and off the blink plan; mythic budget better spent elsewhere.
Force of Will | Free counter is strong but demands a high blue-card density and a life/card cost this tempo build can't spare; mythic.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.49 adj [MV 2.87 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  48.3%  prod  52.9%  gap  -4.6pp  [OK]
  W  demand  51.7%  prod  52.9%  gap  -1.2pp  [OK]

Splash Check: [PASS]
  R  2 card(s), max CMC 4  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Mainboard = 40, Sideboard = 10
[PASS] Commons/uncommons <= 2 copies, rares/mythics <= 1 copy each
[PASS] Rares/mythics total (main+side) = 4 / 5 cap
[PASS] Splash R: Flametongue Kavu (<=3 named)
[PASS] All card names exist in cube pool (exact match)
```