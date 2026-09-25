---
deck_name: "b-yawgmoth-aristocrats"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "B"
format: "40-card"
built_at: "2026-07-29T23:59:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
1x Mishra's Factory     colorless manland (2/2)
2x Polluted Mire        B source, enters tapped, cycling
15x Swamp                basic
```

### CREATURES (14)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Festering Goblin              x2   B      fodder/removal                C
  3  Phyrexian Ghoul               x2   B      sac-outlet                    C
  3  Phyrexian Rager               x2   B      card-advantage/fodder         C
  3  Undead Gladiator              x1   B      recursion/discard-outlet      U
  3  Urborg Syphon-Mage            x2   B      reach/discard-outlet          C
  4  Phyrexian Debaser             x1   B      sac-outlet/removal            C
  4  Yawgmoth, Thran Physician     x1   B      engine                        M
  5  Chainer, Dementia Master      x1   B      recursion-engine              R
  6  Necrosavant                   x1   B      recurring-threat/outlet       U
  6  Triskelion                    x1   C      finisher/removal              R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Vampiric Tutor                x1   B      consistency                   M
  2  Chainer's Edict               x2   B      removal                       U
  2  Terror                        x2   B      removal                       C
  3  Ichor Slick                   x1   B      removal                       C
```

### OTHER SPELLS (2)
```
CMC  Card                          Qty  Color  Role                          Rar
  2  Oversold Cemetery             x1   B      recursion-engine              R
  2  Zombie Infestation            x1   B      fodder-engine                 U
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                                   Rar
Tormod's Crypt                x2   C      sb-graveyard-hate: vs reanimator / flashback / threshold  U
Duress                        x2   B      sb-disruption: vs control/combo/enchantment decks — stri  C
Dark Withering                x2   B      sb-removal: vs big nonblack evasive threats — destroy, a  U
Ichor Slick                   x1   B      sb-removal: vs x/1-x/3 evasion swarms — extra -3/-3, cyc  C
Faceless Butcher              x1   B      sb-removal-body: vs a single dominant creature you need   U
Damping Sphere                x1   C      sb-anti-ramp: vs big-mana / ritual / land-untap accelera  U
Cackling Fiend                x1   B      sb-disruption-body: vs draw-go control — a body that als  C
```

## ANALYSIS

### DECK IDENTITY

Mono-black aristocrats/sacrifice grind. Yawgmoth, Thran Physician is the engine — every spare body becomes a card plus a -1/-1 counter, which is card advantage and board control at once. Oversold Cemetery, Chainer, and Necrosavant rebuy fodder from the graveyard indefinitely, so the deck never runs out of resources. It closes by grinding the opponent to zero cards, then winning with recurring bodies, Urborg Syphon-Mage drain, and Triskelion pings.

Some interactions worth calling out in this list:

**Yawgmoth + Festering Goblin is a two-for-one removal burst.** Sacrificing Festering Goblin to Yawgmoth resolves two triggers on the same activation: Yawgmoth's "-1/-1 counter on up to one target creature" plus Festering Goblin's death "target creature gets -1/-1 until end of turn." That is a permanent -1/-1 counter and a temporary -1/-1 — enough to kill most 2-toughness creatures outright — while still drawing the card. Every 1-mana fodder body doubles as removal.

**Triskelion is a proliferate engine, not just a 6-drop.** Yawgmoth's second ability, "{B}{B}, Discard a card: Proliferate," adds a +1/+1 counter to Triskelion each time it fires, refilling its ping ammo. In the late grind this turns Triskelion into a recurring damage faucet rather than a one-shot three-ping — and the discard cost feeds the graveyard the recursion engines want.

**The recursion suite is deliberately triple-redundant against decapitation.** Three independent cards rebuy fodder from the graveyard — Oversold Cemetery (a creature to hand each upkeep once 4+ creature cards are binned), Chainer ("{B}{B}{B}, Pay 3 life: Put target creature card from a graveyard onto the battlefield"), and Necrosavant (self-returns during upkeep by sacrificing a creature). None depends on Yawgmoth, so answering the mythic on sight does not turn the engine off.

**Reach math for the turn-8 clock.** Once the board stalls, two Urborg Syphon-Mage drain 2 and gain 2 each (a 4-point life swing per turn from the pair), Triskelion contributes up to 3 damage from its counters, and recurring Necrosavant/Chainer bodies attack. Against an opponent already stripped of resources by the Yawgmoth grind, that is a closing clock, not just incremental value.

**Discarding is not card disadvantage here.** The five discard outlets (2x Urborg Syphon-Mage, Zombie Infestation, Undead Gladiator, Yawgmoth-proliferate) pitch creature cards straight into fuel for Oversold Cemetery, Chainer, and Necrosavant. The graveyard is a second hand, so the discard costs are largely refunded — which is why the deck can afford card-hungry engines like Zombie Infestation.

The hard limit of the archetype is the mono-black color pie: there is no maindeck answer to resolved enchantments or noncreature artifacts (the cube's enchantment/artifact removal is entirely G/W/R). Chainer's Edict handles artifact and enchantment *creatures*, and the sideboard's Duress strips key noncreature cards from hand pre-emptively, but a resolved Opposition or Pacifism is simply raced.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:3  2:6  3:8  4:2  5:1  6:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  sac_outlet: 5 copies (effective 4: Phyrexian Debaser@0.5, Necrosavant@0.5) → p=0.79 (need ≥ 0.75)
  PASS  payoff: 6 copies (effective 5.8: Chainer, Dementia Master@0.8) → p=0.90 (need ≥ 0.75)
  PASS  fodder: 6 copies (effective 5.6: Zombie Infestation@0.8, Undead Gladiator@0.8) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 89% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 48%  T2 91%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Yawgmoth, Thran Physician, Triskelion, Chainer's Edict, Festering Goblin, Ichor Slick
  OK        single_large_threat: Terror, Chainer's Edict, Phyrexian Debaser, Ichor Slick
  CONCEDED  noncreature_permanents: Black has no maindeck artifact/enchantment removal (color-pie limit); the grind pressures the opponent before most noncreature permanents dominate, and the sideboard adds Tormod's Crypt for the relevant class.
  CONCEDED  stack: Black cannot interact on the stack; the sideboard's proactive discard (Duress) pre-empts key spells from hand instead of answering them on the stack.
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt is in the sideboard for graveyard-reliant matchups.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | 2 Polluted Mire cycle a surplus land into a card; Mishra's Factory turns a land into a 2/2 attacker/fodder; Zombie Infestation converts flooded cards into tokens; Necrosavant ({3}{B}{B}) and Chainer ({B}{B}{B}) are repeatable mana sinks that spend excess lands. |
| screw | mitigation | Cyclers (Ichor Slick {2}, Undead Gladiator {1}{B}, Polluted Mire) dig on 2-land hands; the curve is cheap early (Festering Goblin, Terror, Oversold Cemetery, Chainer's Edict all <=2) and Vampiric Tutor can fetch a land in a pinch; goldfish keepable 89%. |
| decapitation | mitigation | The engine is redundant across independent cards: removing Yawgmoth still leaves Oversold Cemetery + Chainer + Necrosavant + 2 Phyrexian Ghoul delivering the sacrifice-value plan; no single removal spell shuts the deck off. |
| gas-out | mitigation | Self-replacing/net-positive cards refuel: Phyrexian Rager x2 (draw), Yawgmoth (draw per sac), Oversold Cemetery (a creature back each upkeep), Undead Gladiator (self-returns), Chainer (recurring bodies), Vampiric Tutor. The graveyard itself is a renewable hand. |
| raced | accepted | This is a grind, not a fast clock. It interacts heavily (Terror x2, Chainer's Edict x2, Ichor Slick, Phyrexian Debaser flying blocker, Yawgmoth -1/-1, Festering Goblin) plus Syphon-Mage lifegain, but its worst draws can lose the race to the cube's fastest evasive aggro. Lowering the curve or adding pure lifegain to win races would abandon the recurring-threat inevitability that is the deck's identity; the sideboard (Dark Withering, extra Ichor Slick) shores it up instead. |
| disruption-fizzle | mitigation | The plan is incremental, not a single critical turn: sacrifice value accrues one body at a time, and a countered/removed engine piece is replaced next turn from a redundant class, so one piece of interaction costs a tempo beat rather than fizzling the plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Flesh Reaver | 2-mana 4/4 but deals its combat damage to you too — an aggro card, wrong plan for an attrition grind that wants to be the one grinding. |
| Wretched Anurid | 1B 3/3 but you lose 1 life whenever ANY creature enters — punishes your own token/recursion engine; anti-synergy with the deck's core. |
| Street Wraith | Swampwalk is matchup-dependent evasion; played as a cycler it is a fine cantrip but not a plan card here — bounded consideration. |
| Phyrexian Scuta | Vanilla kicker beater; no death/sac value, pure stats — worse fodder than the value bodies. |
| Twisted Experiment | +3/-1 aura is card disadvantage on fragile fodder; no sac payoff. |
| Nightscape Familiar | Cost reducer only for blue/red spells: 0 of the mono-B nonland cards qualify. No function here. |
| Goblin Turncoat | Sac a Goblin to regenerate — needs Goblins; this deck runs ~0 Goblins, so the ability is dead. EXCLUDE. |
| Helm of Awakening | Spells cost 1 less but symmetric (helps opponent) and no storm/spell-count payoff here to exploit it — marginal in a creature grind. |
| Mind Stone / Millikin | Colorless ramp; the curve tops near 5 and the deck prefers bodies/fodder over a non-creature rock that Yawgmoth can't eat for value. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.55 adj [MV 2.91 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod  94.4%  gap  +5.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Mainboard size = 40 (40)
[PASS] Sideboard size = 10 (10)
[PASS] Commons/uncommons <= 2 copies each
[PASS] Rares/mythics <= 1 copy each
[PASS] Rare/mythic total = 5 (cap 5)
[PASS] All cards from cube pool + mono-black usable
```