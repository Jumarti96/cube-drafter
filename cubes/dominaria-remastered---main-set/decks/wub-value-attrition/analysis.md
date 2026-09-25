---
deck_name: "wub-value-attrition"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-07-30T21:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  4x Island                 basic (U)
  5x Plains                 basic (W)
  4x Swamp                  basic (B)
  1x Contaminated Aquifer   UB dual, enters tapped
  1x Dromar's Cavern        WUB Lair (all 3 colors; bounces a land)
  1x Idyllic Beachfront     WU dual, enters tapped
  1x Isolated Chapel        WB check-land, untapped w/ Plains/Swamp (rare)
  1x Sunlit Marsh           WB dual, enters tapped
```

### CREATURES (14)
```
CMC  Card                     Qty  Color  Role                           Rar
2.0  Whitemane Lion           x2   W      Flash rebuy engine             C
3.0  Man-o'-War               x2   U      ETB bounce (rebuy)             C
3.0  Phyrexian Rager          x2   B      ETB draw a card                C
4.0  Cackling Fiend           x1   B      ETB discard (rebuy)            C
4.0  Faceless Butcher         x2   B      ETB exile removal (rebuy)      U
4.0  Sawtooth Loon            x1   WU     Rebuy W/U + draw-2             U
4.0  Thieving Magpie          x1   U      Evasive card draw              U
4.0  Voice of All             x1   W      Protected flier finisher       U
5.0  Lyra Dawnbringer         x1   W      Bomb finisher / lifegain       M
5.0  Serra Angel              x1   W      Flying finisher                U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                     Qty  Color  Role                           Rar
1.0  Swords to Plowshares     x2   W      Premium 1-mana removal         U
2.0  Counterspell             x1   U      Hard counter                   C
2.0  Momentary Blink          x2   W      Core rebuy (flashback)         C
3.0  Ichor Slick              x1   B      -3/-3 removal / cycles         C
4.0  Deep Analysis            x1   U      Recurring card advantage       C
4.0  Fact or Fiction          x1   U      Card advantage                 U
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in                      Rar
Wrath of God             x1   W      vs go-wide/aggro swarm — reset when spot removal is overwhelmed R
Tormod's Crypt           x1   C      vs graveyard/reanimator (cube GY density 19%) U
Duress                   x2   B      vs combo/control — strip a counter/sweeper/combo piece C
Terror                   x1   B      vs aggro/midrange — cheap kill for a nonblack creature C
Pacifism                 x2   W      vs big single threats we can't exile         C
Chainer's Edict          x1   B      vs hexproof/protection — edict; flashback = two U
Absorb                   x1   WU     vs combo/control — counter + 3 life          R
Confiscate               x1   U      steal a resolved noncreature permanent       U
```

## ANALYSIS

### DECK IDENTITY
WUB three-color value-attrition midrange built on repeatable enter-the-battlefield effects. Momentary Blink and Whitemane Lion rebuy Faceless Butcher (exile removal re-pointed at the biggest threat), Phyrexian Rager (card draw) and Man-o'-War (bounce), while Fact or Fiction, Deep Analysis and a card-advantage suite bury the opponent in resources. Evasive fliers — Serra Angel, Lyra Dawnbringer, Voice of All — close once the grind is won. The plan is to out-value, not out-tempo.

Black is a core color here, not a splash — Faceless Butcher and Cackling Fiend are {2}{B}{B}, so the deck runs 8 black sources (4 Swamp + Dromar's Cavern + Isolated Chapel + Sunlit Marsh + Contaminated Aquifer). That is a real three-color manabase with four tapped-or-bouncing lands; the deck pays a fixing tax that a turn-9 attrition plan can afford but a tempo deck could not. This is precisely why the red-splash blink deck and this black deck are different archetypes rather than one list with a color swapped.

The rebuy engine has a color seam worth knowing at the table: Sawtooth Loon returns only a white or blue creature, so it cannot recur Phyrexian Rager, Faceless Butcher or Cackling Fiend — the black payoffs. Recurring the black ETBs is the job of the two Momentary Blink (a true flicker; with flashback that is four re-triggers) and, at a recast tax, Whitemane Lion.

Faceless Butcher is re-pointable removal, not cumulative: blinking it hands the previously-exiled creature back to its owner and then exiles a new target. In practice you point it at whatever the biggest current threat is each turn — it follows the threat rather than stacking exiles.

The card-advantage base is the win condition. Phyrexian Rager x2, Fact or Fiction, Deep Analysis (four cards across two casts), Thieving Magpie and Sawtooth Loon out-draw the opponent; against other fair decks the deck simply never runs out of gas while Faceless Butcher keeps the board clear.

### STRUCTURAL CHECKS
```
── Structural Checks: WARN ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (22 nonland):  1:2  2:5  3:5  4:8  5:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.8: Faceless Butcher@0.9, Faceless Butcher@0.9) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 4 copies → p=0.81 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 79% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 33%  T2 77%  T3 95%
Coverage:  [PASS]
  CONCEDED  wide_boards: Spot removal + evasive fliers, not a maindeck sweeper; Wrath of God is sideboarded for go-wide (a maindeck Wrath fights our own recurring ETB board).
  OK        single_large_threat: Swords to Plowshares, Faceless Butcher, Man-o'-War, Ichor Slick
  OK        noncreature_permanents: Counterspell
  OK        stack: Counterspell
  CONCEDED  graveyard: Graveyard interaction is sideboarded (Tormod's Crypt); the maindeck grinds through the yard rather than attacking it.
```

- goldfish WARN: keepable 79% vs the 80% threshold — a ~1pp miss driven by the higher midrange curve (avg MV 3.14) and the double-black requirement. Accepted: 18 lands is the computed target, 7 nonland sit at MV<=2 and Ichor Slick's Cycling {2} smooths short-land / flooded hands. Lowering the curve to chase 1pp would cut the card-advantage engine that defines the deck.

### FAILURE MODES

Mode | Verdict | Reasoning
---|---|---
flood | mitigation | Excess mana fuels Momentary Blink's Flashback {3}{U}, Deep Analysis' flashback and Fact or Fiction convert mana to cards, and Ichor Slick's Cycling {2} turns a flooded draw into a card.
screw | mitigation | 7 nonland at MV<=2 (2 Momentary Blink, 2 Whitemane Lion, 2 Swords to Plowshares, Counterspell) keep two-land hands functional; Ichor Slick cycles for {2} to dig, and 18 lands raise the odds of the third land.
decapitation | mitigation | No single lynchpin: the rebuy engine is 4 pieces (2 Momentary Blink, 2 Whitemane Lion) feeding 8 value ETBs; answering any one card leaves the attrition plan intact.
gas-out | mitigation | The deck's core strength: Phyrexian Rager x2, Fact or Fiction, Deep Analysis (flashback = a second draw from the yard), Thieving Magpie and Sawtooth Loon are net-positive / self-replacing and refuel an empty hand faster than opponents.
raced | accepted | As a turn-9 controller the deck can lose to the cube's fastest goldfish before stabilizing. Mitigating (more cheap lifegain/blockers) would dilute the card-advantage engine that is the deck's identity; instead Swords {W}, Ichor Slick, Faceless Butcher, Man-o'-War and Lyra Dawnbringer's lifelink buy the time the grind needs, and the fastest matchups are addressed post-board (Terror, Pacifism, Wrath of God).
disruption-fizzle | mitigation | The plan is incremental, not one critical turn; a single counter or removal costs one ETB without collapsing it, and Momentary Blink can blink a targeted creature in response to save it.

### CARDS CONSIDERED BUT EXCLUDED

Card | Reason
---|---
Terror | Excellent single-pip {1}{B} removal, but it is a 4th black NAME beyond the 3-card splash cap (which the ETB creatures fill); not a blink-ETB card.
Ichor Slick | Flexible -3/-3 with cycling, but same issue — a 4th black name over the splash cap; excluded to keep black to the ETB payoffs.
Yawgmoth, Thran Physician | Powerful black engine but sacrifice-based and double-black; off the blink/ETB plan and over the splash-name cap.
Wrath of God | Symmetric sweeper kills our own recurring ETB board; kept in the sideboard for go-wide, not main.
Sun Clasp | The {W} bounce makes the aura fall off after one use (one-shot per cast), too clunky as a rebuy engine here.
Denizen of the Deep | ETB returns ALL your other creatures — mass self-bounce is a blowout, not attrition value, at 8 mana.
Body Snatcher | Strong reanimation but its ETB demands discarding a creature card and it's double-black; over cap and off the tempo-value plan.
Urza, Lord High Artificer | Bomb, but artifact-count-dependent (we run few artifacts) and off the blink plan; mythic budget better spent on Lyra.
Cloud of Faeries | Ran in the first list; cut in the grill for Ichor Slick — a 1/1 chip flier is weaker than on-color removal for a turn-9 controller, and Ichor Slick's cycling replaces the flood insurance.
Recoil | {1}{U}{B} 'Return target permanent to its owner's hand, then that player discards' — on-theme tempo+attrition that also answers resolved noncreature permanents maindeck; the strongest future swap-in if the deck wants more disruption.
Gerrard's Verdict | {W}{B} 'discard two, gain 3 life per land discarded' — a strong anti-aggro / anti-combo two-for-one and lifegain; a sideboard consideration for the raced matchup.
Mystic Remora | {U} rare cumulative-upkeep card-draw engine vs spell-heavy control/combo; a rare-slot consideration (deck is at 4 of 5 rares).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.14   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.85 adj [MV 3.14 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  29.0%  prod  44.4%  gap -15.4pp  [OK]
  U  demand  29.0%  prod  38.9%  gap  -9.9pp  [OK]
  W  demand  41.9%  prod  50.0%  gap  -8.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Mainboard = 40, Sideboard = 10
[PASS] Commons/uncommons <= 2 copies, rares/mythics <= 1 copy each
[PASS] Rares/mythics total (main+side) = 4 / 5 cap
[PASS] Splash none: n/a (<=3 named)
[PASS] All card names exist in cube pool (exact match)
```