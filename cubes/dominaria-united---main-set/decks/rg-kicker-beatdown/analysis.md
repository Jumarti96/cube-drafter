---
deck_name: "rg-kicker-beatdown"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-08-13T04:10:34Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  1x Karplusan Forest       RG painland, untapped
  2x Wooded Ridgeline       RG dual, enters tapped
  5x Forest                 basic
  8x Mountain               basic
```

### CREATURES (13)
```
CMC  Card                       Qty   Color Role                                     Rar
  1  Phoenix Chick              x2    R     Threat — turn-1 evasive clock that returns from the graveyard U
  1  Shivan Devastator          x1    R     Threat — {X}{R} flying hasty finisher, the surplus-mana outlet M
  1  Viashino Branchrider       x2    R     Threat — turn-1 haste body, kicked 3/3, {2}{R} mana sink C
  2  Electrostatic Infantry     x1    R     Threat — trample body that grows on every instant/sorcery cast U
  2  Quirion Beastcaller        x1    G     Threat — grows on every creature cast, bequeaths counters R
  2  Radha's Firebrand          x1    R     Threat — 3/1 that removes a SMALLER blocker on attack R
  2  Yavimaya Iconoclast        x2    G     Threat — kicked 4/3 trample haste on turn 3 U
  2  Yavimaya Steelcrusher      x2    R     Threat — 2/2 enlist; sacrifices to destroy an artifact C
  3  Squee, Dubious Monarch     x1    R     Threat — hasty 3-drop, a token per attack R
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                       Qty   Color Role                                     Rar
  2  Bite Down                  x1    G     Interaction — creature-leveraged removal C
  2  Colossal Growth            x2    G     Reach — kicked +4/+4 trample and haste at instant speed C
  2  Furious Bellow             x2    R     Interaction — +3/+0 first strike wins a combat outright; scry 1 C
  2  Lightning Strike           x2    R     Interaction — 3 damage to any target     C
  2  Twinferno                  x2    R     Reach — double strike, or copy the next instant/sorcery U
```

### OTHER SPELLS (2)
```
CMC  Card                       Qty   Color Role                                     Rar
  1  Hammerhand                 x2    R     Reach — haste enabler and blocker removal for {R} C
```

## SIDEBOARD (10)
```
Card                       Qty   Color Role / When to board in                      Rar
Smash to Dust              x2    R     Artifacts (15); 1 damage to each opposing creature vs go-wide C
Broken Wings               x2    G     Artifacts (15) / enchantments (18) / fliers  C
Tail Swipe                 x2    G     Fight removal vs single large blockers       U
Flowstone Infusion         x2    R     One-mana +2/-2 vs cheap blockers and x/2 threats C
Snarespinner               x2    G     The cube 51-card evasion class — on-curve reach blocker C
```

## ANALYSIS

### DECK IDENTITY

Gruul Kicker Beatdown. This is the fastest of the four kicker builds and the only one that treats kicker as a mana sink rather than a value engine. The curve is 7 one-drops, 15 two-drops and 2 three-drops; a body lands on turn 1 in 76% of goldfish games. From turn 3 onward every point of surplus mana becomes damage: Viashino Branchrider pumps for {2}{R} forever, Yavimaya Iconoclast kicked for {R} is a hasty 4/3 trampler, Colossal Growth kicked for {R} is +4/+4 with trample and haste at instant speed, and Shivan Devastator is an {X}{R} flying hasty body sized to whatever is left. Nothing in the deck asks to reach turn 7.

### KICKER AS A MANA SINK, NOT A VALUE ENGINE

This is the only one of the four kicker builds where the extra mana buys damage rather than cards. Viashino
Branchrider is the clearest statement of it: {R} for a 1/1 haste on turn 1, or {2}{G} more for a 3/3, and
then "{2}{R}: This creature gets +2/+0 until end of turn" forever afterward. Yavimaya Iconoclast kicked for
one extra {R} is a 4/3 trample haste that attacks the turn it lands. Colossal Growth kicked for {R} is
+4/+4 with trample and haste at instant speed. The deck never wants turn 7.

### THE CURVE IS THE DECK

7 one-drops, 16 two-drops, 1 three-drop. A body lands on turn 1 in 76% of goldfish hands and on turn 2 in
97%. That is what buys the two concessions this deck makes without apology: it runs no counterspell (R/G has
none anywhere in this pool) and no mainboard sweeper (every R/G sweeper here would kill 22 of its own 24
nonland cards, all of which cost 2 or less).

### WHAT THE SELF-GRILL CHANGED

Two blocking findings, both about honesty rather than card choice. First, the original slot table filed the
eight pump spells under "Engine & Infrastructure" — but the cube's own tagging gives Colossal Growth and
Twinferno the role Payload/Payoff, Hammerhand Enabler/Fodder, and Furious Bellow Interaction/Disruption, and
the mana audit independently reports zero ramp and zero cantrips. The real table is 20.8% interaction and
79.2% threats, both outside their bands, and both are now declared as deviations with grounds instead of
hidden in a bucket. Second, the build claimed no land-property census was owed while running Radha's
Firebrand, whose Domain line scales with basic land types. The census: this deck reaches exactly 2, so that
ability floors at {3}{R} and never gets cheaper.

Two card changes came out of the same grill. Flowstone Kavu was replaced by Electrostatic Infantry — one
mana cheaper, and "whenever you cast an instant or sorcery spell, put a +1/+1 counter on this creature" is
live on 9 of the 24 nonland cards, where Flowstone Kavu's "{R}: +1/-1" sink actively kills it after two
activations on a 2/3 body. In the sideboard, Magnigoth Sentry x2 became Snarespinner x2: a 4-mana blocker
was the only 4-drop in all 50 cards and inverted the aggressor plan, where a {1}{G} 1/3 that becomes a 3/3
when blocking a flier does the same job on curve.

### THE ONE THING THIS DECK CANNOT DO

It has zero card draw. `gas-out` is an accepted failure mode, not a mitigated one, and the accepted cost is
stated: a cantrip in this curve costs a body on a turn the deck needed one. What blunts it is that two of
the most-removed threats come back without being drawn — Phoenix Chick for {R}{R} and Squee for {3}{R} plus
four exiled graveyard cards — and Shivan Devastator turns a topdecked land into a threat.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:7  2:16  3:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 11 copies (effective 10.6: Colossal Growth@0.8, Colossal Growth@0.8) → p=0.98 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 6.8: Hammerhand@0.8, Hammerhand@0.8, Furious Bellow@0.8, Furious Bellow@0.8, Twinferno@0.8, Twinferno@0.8) → p=0.89 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 76%  T2 97%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper: R/G at this curve has none that does not also kill the deck's own 1- and 2-drops, and a 24-nonland aggro shell cannot spend a slot on a card that is blank when ahead. 2x Smash to Dust ("deals 1 damage to each creature your opponents control") boards in.
  OK        single_large_threat: Bite Down, Lightning Strike, Lightning Strike
  OK        noncreature_permanents: Yavimaya Steelcrusher, Yavimaya Steelcrusher
  CONCEDED  stack: R/G contains no counterspell anywhere in this pool, so this is a colour-availability fact rather than a slot decision; the deck answers the stack by being ahead on board before the opponent can use it.
  CONCEDED  graveyard: The cube census reports 0 graveyard-hate cards pool-wide; this deck is the fastest of the four builds and races the 32-card graveyard theme instead.
```

- No WARN-tier structural flags: curve and goldfish both returned PASS.
- The two slot-band deviations above are declared rather than reclassified — the self-grill Challenger showed the original table filed 8 pump spells as Engine & Infrastructure when their structural_roles are Payload/Payoff, Interaction/Disruption and Enabler/Fodder.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Shivan Devastator ({X}{R}, "This creature enters with X +1/+1 counters on it") converts a hand of excess lands into one large flying hasty body — a one-time cast, not a sink. The repeatable post-deployment mana sinks are 3 of 24: Viashino Branchrider x2 ("{2}{R}: This creature gets +2/+0 until end of turn", unbounded) and Radha's Firebrand ("{3}{R}" at this deck's Domain of 2, once each turn). Phoenix Chick's "you may pay {R}{R}" graveyard return is a fourth mana outlet on any attack with three or more declared attackers. |
| screw | mitigation | This is the least screw-prone of the four builds: 22 of 24 nonlands cost 2 or less and only 2 of 16 lands enter tapped, so a two-land keep casts almost the entire deck. Goldfish: 84% keepable, T1 play rate 76%, T2 97%. |
| decapitation | mitigation | There is no key card. 13 creatures across 9 distinct names, none referencing another; Phoenix Chick returns from the graveyard for {R}{R} on any attack with three or more creatures, and Squee can be recast from the graveyard for {3}{R} AND exiling four other cards from your graveyard — a real cost this deck pays slowly, since it has no self-mill. |
| gas-out | accepted | This deck has no card-draw engine and mitigating would mean maindecking a cantrip or a value creature, which costs a slot in a curve whose whole claim is a body every turn from turn 1. The accepted cost is real: on a stalled board past turn 8 the deck is drawing one card a turn like everyone else. What blunts it rather than fixes it: Furious Bellow x2 scry 1, Phoenix Chick x2 and Squee recurring from the graveyard without being drawn, and Shivan Devastator making a topdecked land into a threat. |
| raced | mitigation | This deck is the race. T1 play rate 76% and T2 97% mean it is usually the beatdown; against a faster or equal start, Lightning Strike x2 ("deals 3 damage to any target") and Bite Down answer the opposing one- and two-drops, Furious Bellow x2 grants first strike to win a combat outright, and 2x Flowstone Infusion (+2/-2) plus 2x Tail Swipe board in. |
| disruption-fizzle | mitigation | Kicker degrades gracefully — Viashino Branchrider, Yavimaya Iconoclast and Colossal Growth all have a live unkicked mode, so a mana-denial turn costs a mode not a card. The critical turn is also not a single turn here: with a goldfish of 5 the damage is spread across turns 1-5, so one removal spell or counterspell mid-curve removes one attacker rather than the plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Sprouting Goblin | Flagged as a weak keystone by the shape judge: the kicked fetch puts a basic in HAND, not on the battlefield, and its "{R}, {T}, Sacrifice a land: Draw a card" actively shrinks the mana the thesis wants to spend. |
| Flowstone Kavu | Cut in the grill for Electrostatic Infantry — a 2/3 whose only sink is "{R}: +1/-1" kills itself after two activations, and it was the deck's second three-drop. |
| Defiler of Vigor | Rare; {3}{G}{G} for a 6/6 is a turn-5 play in a deck whose goldfish turn is 5, and its cost reduction touches only green permanent spells — not Colossal Growth (instant), not the {R} kickers, not Shivan Devastator. |
| Defiler of Instinct | Rare; its discount applies to red PERMANENT spells only, so among this deck's cards it reaches the creatures but none of the 9 instants, and {2}{R}{R} competes with holding {G} for the kicker. |
| Dragon Whelp | {2}{R}{R} on a 16-land base that must also produce {G} by turn 2-3; its {R} pump self-destructs after four activations, capping the mana-sink role. |
| Ragefire Hellkite / Hurler Cyclops / Molten Monstrosity / Meria's Outrider | All cost 5 or more. The curve tops at 3 by design; a goldfish-5 deck that draws a six-drop has drawn a blank. |
| Territorial Maro / Nishoba Brawler / Gaea's Might / Sunbathing Rootwalla | Domain cards. This deck reaches exactly 2 basic land types (Mountain, Forest), so each pays off at 40% of its ceiling — Territorial Maro would be a 4/4 for five, Gaea's Might a +2/+2. |
| Thrill of Possibility | The grill's absence #2 and the obvious answer to zero card draw — declined because gas-out is an explicitly accepted mode whose stated cost is exactly this: a cantrip displaces a body on a turn the curve needed one. |
| Llanowar Stalker | The only green one-drop creature in the legal pool, raised as an absence because all 7 one-drops need {R}. Declined: 11 of 16 lands produce {R}, so an all-Forest opener is a corner case, and a 1/1 whose pump lasts only until end of turn is below the curve's rate. |
| Goblin Picker / Vanquisher's Axe | Both were raised as absences for the gas-out and mana-sink holes; both cost a body slot in a curve whose entire claim is a play every turn from turn 1. |
| Meria, Scholar of Antiquity / Rulik Mons, Warren Chief / Rundvelt Hordemaster / Keldon Flamesage / Jaya, Fiery Negotiator | All rare or mythic. The 5-slot budget is full (Radha's Firebrand, Quirion Beastcaller, Squee, Shivan Devastator, Karplusan Forest), so each would require cutting one of those five. |
| Crystal Grotto | Its coloured mana costs "{1}, {T}", which is unusable on a curve where 22 of 24 nonlands cost 2 or less and the deck wants a turn-1 {R}. |
| Magnigoth Sentry | Sideboard consideration, cut in the grill: a {3}{G} 4/4 was the only 4-drop in all 50 cards and inverted the aggressor plan. Snarespinner answers the same evasion class at 2 mana. |
| Jaya's Firenado | Sideboard consideration: 5 damage for 5 mana is the largest removal available, but this deck is never spending turn 5 on a removal spell. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.75   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.00 adj [MV 1.75 vs 2.5, 0 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  25.0%  prod  50.0%  gap -25.0pp  [OK]
  R  demand  75.0%  prod  68.8%  gap  +6.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2          PASS — no card exceeds 2 copies
rares_mythics_max_1_each         PASS
rare_mythic_total_max_5          PASS — exactly 5: Radha's Firebrand, Quirion Beastcaller, Squee Dubious Monarch, Shivan Devastator, Karplusan Forest. Sideboard is 100% commons/uncommons.
basics_unlimited                 PASS — Mountain x8, Forest x5
all_cards_from_cube_mainboard    PASS (Phase 5C check 2)
```