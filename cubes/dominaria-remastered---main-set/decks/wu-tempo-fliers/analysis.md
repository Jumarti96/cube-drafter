---
deck_name: "wu-tempo-fliers"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-30T21:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  7x Island                 basic (U)
  9x Plains                 basic (W)
  1x Idyllic Beachfront     WU dual, enters tapped
```

### CREATURES (15)
```
CMC  Card                     Qty  Color  Role                           Rar
1.0  Savannah Lions           x2   W      Aggressive 1-drop 2/1          C
2.0  Cloud of Faeries         x2   U      ETB untap flier / blink fuel   C
2.0  Whitemane Lion           x2   W      Flash rebuy engine             C
3.0  Man-o'-War               x2   U      ETB bounce (main removal)      C
4.0  Aven Fisher              x1   U      Flier, dies-draw               C
4.0  Sawtooth Loon            x1   WU     Rebuy W/U + draw-2             U
4.0  Thieving Magpie          x1   U      Evasive card draw              U
4.0  Voice of All             x2   W      Protected flier clock          U
5.0  Lyra Dawnbringer         x1   W      Bomb finisher / lifegain       M
5.0  Serra Angel              x1   W      Flying finisher                U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                     Qty  Color  Role                           Rar
1.0  Swords to Plowshares     x2   W      Premium 1-mana removal         U
2.0  Counterspell             x2   U      Hard counter                   C
2.0  Momentary Blink          x2   W      Core rebuy (flashback)         C
2.0  Snap                     x1   U      Free bounce / tempo            C
4.0  Battle Screech           x1   W      Go-wide fliers (+flashback)    U
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in                      Rar
Wrath of God             x1   W      vs go-wide/aggro swarm — reset when racing loses R
Tormod's Crypt           x1   C      vs graveyard/reanimator (cube GY density 19%) U
Pacifism                 x2   W      vs big single threats we can't race or exile C
Lieutenant Kirtar        x1   W      vs aggro — evasive body that exiles an attacking creature R
Nomad Decoy              x1   W      vs midrange/control — repeatable tapper      C
Icy Manipulator          x1   C      vs control/midrange — tap a key blocker or land U
Absorb                   x1   WU     vs combo/control — counter + 3 life          R
Confiscate               x1   U      steal a resolved noncreature permanent (artifact/enchant/PW) U
Impulse                  x1   U      vs control — extra selection                 C
```

## ANALYSIS

### DECK IDENTITY
Two-color WU tempo-fliers — the most consistent of the three blink builds. An evasive air force (Savannah Lions, Voice of All, Serra Angel, Lyra Dawnbringer, Cloud of Faeries, Battle Screech) races while repeatable bounce (Man-o'-War rebought by Momentary Blink, Whitemane Lion and Snap) keeps the opponent's board off-tempo. With no red or black, the 'removal' is bounce plus Swords to Plowshares and counters, and the clean two-color manabase pays almost no fixing tax.

This is the consistency build. Only one nonbasic land (Idyllic Beachfront), 13 of 23 nonland at MV<=2, and no color it can't produce off basics — where the WU+R and WUB builds pay a tapland tax, this one curves out cleanly. The trade is power: the highest-impact ETB payoffs in the pool (Flametongue Kavu, Phyrexian Rager, Faceless Butcher) are off-color, so the removal here is bounce, not a kill.

That makes the removal suite the honest question. Man-o'-War (x2) and Snap bounce rather than kill, so a recurring or hexproof threat is only delayed, not answered — which is exactly why Swords to Plowshares x2 is load-bearing (the deck's only permanent removal). In practice the plan is not to answer every threat but to bounce a blocker, connect in the air, and protect the tempo with Counterspell; Whitemane Lion's flash lets it double as an ambush blocker when racing.

The pip split is sharply white (19 W pips vs 13 U) because Savannah Lions, Whitemane Lion, Voice of All, Serra, Lyra, Swords, Battle Screech and Momentary Blink are all white — hence 9 Plains to 7 Island. The one place this bites is double-blue Counterspell on turn two off 8 blue sources; the deck simply holds it a turn later on a white-heavy draw.

Battle Screech is quietly the best go-wide card here: two 1/1 fliers now and two more via a flashback that only taps three white creatures — four evasive bodies from one card, and every one of them gets +1/+1 and lifelink if Lyra Dawnbringer is out (they are not Angels, but they fly alongside her clock).

### STRUCTURAL CHECKS
```
── Structural Checks: WARN ──────────────────────────────────
Curve (Tempo):  [WARN]
  MV distribution (23 nonland):  1:4  2:9  3:2  4:6  5:2
  WARN  MV 4+ share: share 35% above band maximum 30%
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies → p=0.87 (need ≥ 0.75)
  PASS  enabler: 5 copies (effective 4.9: Snap@0.9) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 55%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper (fights our own fliers); we race in the air over wide ground boards and Nomad Decoy/Icy from the board tap key attackers — Wrath of God is sideboarded for go-wide.
  OK        single_large_threat: Swords to Plowshares, Man-o'-War, Snap
  OK        noncreature_permanents: Counterspell
  OK        stack: Counterspell
  CONCEDED  graveyard: Graveyard interaction is sideboarded (Tormod's Crypt); the maindeck races rather than attacking the yard.
```

- curve WARN: MV 4+ share 35% (8 of 23 nonland: 2 Voice of All, Sawtooth Loon, Thieving Magpie, Aven Fisher, Battle Screech, Serra Angel, Lyra Dawnbringer) vs the 30% Tempo band. Accepted: these are the evasive threats and finishers the thesis names, while 57% of nonland is MV<=2 (an unusually low curve for a tempo deck) and Cloud of Faeries / Snap untap lands to deploy the fours ahead of curve.

### FAILURE MODES

Mode | Verdict | Reasoning
---|---|---
flood | mitigation | Excess mana fuels Momentary Blink's Flashback {3}{U}, Battle Screech's flashback makes two more birds, and Cloud of Faeries' Cycling {2} turns a flooded draw into a card.
screw | mitigation | 13 of 23 nonland are MV<=2 (2 Savannah Lions, 2 Swords, 2 Cloud of Faeries, 2 Whitemane Lion, 2 Momentary Blink, Snap, 2 Counterspell), so two-land hands are highly functional; Cloud of Faeries and Snap untap lands to stretch mana.
decapitation | mitigation | No single lynchpin: the rebuy engine is 4 pieces (2 Momentary Blink, 2 Whitemane Lion) plus Snap and the clock is 9+ fliers; answering any one leaves the plan intact.
gas-out | mitigation | Sawtooth Loon (draw-2, rebought by Blink/Whitemane), Thieving Magpie's on-hit draw, Aven Fisher's dies-draw and Cloud cycling refuel; Battle Screech is card-like (four bodies from one card).
raced | mitigation | Cheap interaction survives the cube's fastest clocks: Swords {W}, Man-o'-War / Whitemane flash blocker, Snap, 2 Counterspell, and Lyra Dawnbringer's flying/first-strike/lifelink 5/5 stabilizes. Identity cost: in the worst matchups we trade-and-stabilize rather than pure-race.
disruption-fizzle | mitigation | The plan is incremental (a flier + a tempo play each turn), not one critical turn; a single removal or counter costs one flier without collapsing it, and Momentary Blink can blink a targeted creature in response to save it.

### CARDS CONSIDERED BUT EXCLUDED

Card | Reason
---|---
Flametongue Kavu | The best blink removal in the pool, but it is red — off this deck's pure-WU identity (it anchors the separate WU+R build).
Sun Clasp | The {W} bounce makes the aura fall off after one use (one-shot per cast); too clunky as a rebuy engine — Snap does the job better.
Wrath of God | Symmetric sweeper fights the deck's own flier-based clock; kept in the sideboard for go-wide.
Umbilicus | Symmetric upkeep bounce also bounces our permanents and pings us 2 life each upkeep — too slow/painful for a tempo plan.
Denizen of the Deep | ETB returns ALL your other creatures — mass self-bounce is a blowout, not value, at 8 mana.
Wormfang Drake | ETB 'sacrifice it unless you exile a creature you control' — exiles your OWN creature and dies if you have no other; anti-synergy with a small board.
Horseshoe Crab | '{U}: Untap this creature' with no untap payoff in the deck is just a 1/3 wall — no evasion, no ETB, off-plan.
Arcanis the Omnipotent | Powerful card engine but 6 mana and {2}{U}{U} to bounce; too slow and clunky for a proactive tempo clock.
Vexing Sphinx | {1}{U}{U} 4/4 flyer is a faster turn-3 clock, but its cumulative-upkeep discard fights the low-curve gas plan and the double-blue strains an already blue-light (8-source) manabase; Aven Fisher is the safer single-pip, self-replacing body.
Peregrine Drake | The best blink payoff in the pool (untap 5 lands on a flier), but it is a 5-drop that worsens the top-heavy curve; a strong swap if the deck wants an explosive Momentary Blink turn.
Fact or Fiction | Instant net card advantage named in the rejected card-advantage sketch; the strongest maindeck swap-in if the deck wants more raw draw over a threat.
Griffin Guide | {2}{W} aura granting +2/+2 and flying with a Griffin token on death — turns Savannah Lions into a resilient evasive threat and dodges the usual aura two-for-one; a consideration for more evasion.
Windborn Muse | {3}{W} 2/3 flyer that taxes attackers {2} each — a maindeck-able anti-go-wide flier if the metagame is aggressive.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.7   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.27 adj [MV 2.7 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  40.6%  prod  47.1%  gap  -6.5pp  [OK]
  W  demand  59.4%  prod  58.8%  gap  +0.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Mainboard = 40, Sideboard = 10
[PASS] Commons/uncommons <= 2 copies, rares/mythics <= 1 copy each
[PASS] Rares/mythics total (main+side) = 4 / 5 cap
[PASS] Splash none: n/a (<=3 named)
[PASS] All card names exist in cube pool (exact match)
```