---
deck_name: "rw-ragost-food-cannon"
cube_id: "eoe"
cube_slug: "eoe"
colors: "RW"
format: "40-card"
built_at: "2026-08-04T05:10:35Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
1x Sacred Foundry           ({T}: Add {R} or {W}.) As this land enters, you may pay 2 li
2x Sacred Peaks             ({T}: Add {R} or {W}.) This land enters tapped.
9x Mountain                 basic
4x Plains                   basic
```

### CREATURES (11)
```
CMC  Card                           Qty  Col  Role                                     Rar
  1  Rust Harvester                 x1   R    engine - graveyard-fed repeatable damage R
  2  Ragost, Deft Gastronaut        x1   WR   PAYOFF - all artifacts become Food, 3 dmg per sac R
  3  Weftstalker Ardent             x2   R    PAYOFF - 1 dmg to each opponent per ETB  U
  1  Slagdrill Scrapper             x2   R    OUTLET - sac another artifact or land, draw C
  2  Chrome Companion               x2   C    lifegain artifact - 1 life whenever tapped C
  3  Haliya, Guided by Light        x1   W    engine - life per ETB (Ragost untap) + cards R
  1  Kavaron Harrier                x2   R    fuel - free artifact ETB and death each combat U
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                           Qty  Col  Role                                     Rar
  3  Ruinous Rampage                x2   R    reach - 3 dmg to each opponent, engine-free U
  3  Emergency Eject                x2   W    removal - instant catch-all, any nonland permanent U
  4  Radiant Strike                 x1   W    removal + 3 life (Ragost untap, Haliya threshold) C
```

### OTHER SPELLS (8)
```
CMC  Card                           Qty  Col  Role                                     Rar
  2  Weapons Manufacturing          x1   R    engine - a Munitions bullet per nontoken artifact R
  4  Memorial Vault                 x1   R    OUTLET - free repeatable sac, exile-and-play X R
  1  Nutrient Block                 x2   C    Food - 3 life on demand, fodder, cantrip C
  2  Melded Moxite                  x2   R    fuel - two artifact ETBs off one card, plus a dig C
  2  Wurmwall Sweeper               x2   C    fuel - artifact ETB, surveil 2 feeds Rust Harvester C
```

## SIDEBOARD (10)
```
Card                           Qty  Col  Role / When to board in                        Rar
Dauntless Scrapbot             x2   C    graveyard hate on two artifact ETBs; vs the 31-card graveyard class U
Drill Too Deep                 x2   R    destroy target artifact; vs the 74-card artifact class C
Lithobraking                   x2   R    the only R/W sweeper; vs go-wide, at the cost of my own small bodies U
Invasive Maneuvers             x2   R    3 dmg to a creature, 5 with a Spacecraft; vs creature decks U
Bombard                        x2   R    4 dmg to a creature at instant speed; vs fast starts C
```

## ANALYSIS

### DECK IDENTITY

An R/W deck that turns artifacts into face damage rather than into a board. Weftstalker Ardent pings for 1 every time any creature or artifact enters; Weapons Manufacturing mints a Munitions token off every nontoken artifact that deals 2 more when it leaves the battlefield; Rust Harvester eats artifact cards out of the graveyard for a growing direct shot; and Ragost grants the Food type to every artifact on board, converting one per activation into 3 damage to each opponent and untapping at each end step on any life gained. Three dedicated sacrifice outlets - Slagdrill Scrapper x2 and Memorial Vault - are what make Munitions fire without Ragost. Honest statement of the two modes: with Ragost the kill is non-combat and arrives around turn 8; without it the deck is a slower artifact-value deck whose damage accumulates across pings, bullets, Rust Harvester shots and Ruinous Rampage, with combat from 11 creature copies making up the difference. Lifegain is not a side theme - it is Ragost's untap condition.

### THE MUNITIONS PROBLEM, AND WHY THIS LIST LOOKS THE WAY IT DOES

The first version of this deck was wrong in a way worth recording, because the fix is most of
what makes the final list good. Weapons Manufacturing reads "Whenever a nontoken artifact you
control enters, create a colorless artifact token named Munitions with 'When this token
**leaves the battlefield**, it deals 2 damage to any target.'" A Munitions sitting on the
battlefield deals nothing. It needs an outlet.

In the first build the only outlet was Ragost — which made the card supposedly designed to
make the deck Ragost-proof work *only when Ragost was already out*. The whole "four independent
engines" thesis was circular. The repair was three dedicated outlets:

| Outlet | Oracle | Cost |
|---|---|---|
| Slagdrill Scrapper ×2 | "{2}, {T}, Sacrifice another artifact or land: Draw a card." | {2} + tap, once/turn |
| Memorial Vault | "{T}, Sacrifice another artifact: Exile the top X cards of your library, where X is one plus the mana value of the sacrificed artifact. You may play those cards this turn." | free, once/turn |
| Ragost | grants "{2}, {T}, Sacrifice this artifact" to every artifact | {2} + tap, per artifact |

Note Slagdrill Scrapper sacrifices "another artifact **or land**" — so it also converts flood
into cards, which is why the flood plan leans on it.

### THE RAGOST UNTAP CLAUSE IS A TIMING PUZZLE

Ragost reads "At the beginning of each end step, **if you gained life this turn**, untap Ragost."
That is an intervening-if: the condition is checked when the trigger would go on the stack, not
when it resolves. This rules out an entire class of lifegain that looks correct and is not.

Flight-Deck Coordinator ("At the beginning of your end step, if you control two or more tapped
creatures, you gain 2 life") triggers *simultaneously* with Ragost's check, so its life always
arrives too late — and it never triggers on the opponent's turn, so it cannot enable the
opponent's-end-step untap either. It was cut for exactly this reason.

What works instead is lifegain that lands mid-turn: Chrome Companion ("Whenever this creature
becomes tapped, you gain 1 life" — fires in combat), Haliya (life on every artifact ETB),
Nutrient Block and Radiant Strike (activated/instant, either player's turn). Because Ragost
untaps at *each* end step, gaining life on the opponent's turn as well yields two activations
per turn cycle — 6 damage — which is the difference between a turn-8 kill and a turn-11 one.

### COUNT-DEPENDENT VERDICTS (recomputed on the final list)

| Claim | Count | Verdict |
|---|---|---|
| Weapons Manufacturing has triggers | 14 nontoken artifact copies among 24 nonland cards | INCLUDE |
| Weapons Manufacturing has outlets | 4 outlet copies (Slagdrill Scrapper ×2, Memorial Vault, Ragost), effective 3.6, p=0.76 | INCLUDE |
| Weftstalker Ardent has ETBs to see | 18 of 24 nonland cards are creatures or artifacts, plus every Robot and Munitions token | INCLUDE |
| Rust Harvester has graveyard fuel | 14 nontoken artifact copies, plus Wurmwall Sweeper ×2 milling 2 each | INCLUDE |
| Ragost's untap condition is reachable | 5 lifegain copies effective 4.8, p=0.85; plus every artifact once Ragost resolves | INCLUDE |
| Invasive Maneuvers' 5-damage mode | 2 Spacecraft in the 40 (Wurmwall Sweeper ×2) — live, not guaranteed | SIDEBOARD |
| Damage without Ragost | 6 copies effective 4.5, p=0.83 — but this measures *a source*, not 20 damage | DISCLOSED |

### HOW THIS DIFFERS FROM THE W/B BUILD

Both decks run Nutrient Block ×2 and Haliya and both care about artifacts dying. The difference
is what a dying artifact *is*. In W/B it is a Susurian Voidborn drain trigger worth 1 life each
way, closed out by a deathtouch alpha strike. Here it is 2 damage from a Munitions plus 3 from
Ragost, and there is no attack step in the plan at all. The W/B deck wants bodies that die; this
one wants artifacts that enter.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (24 nonland):  1:7  2:8  3:7  4:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  engine: 5 copies (effective 4.7: Rust Harvester@0.7) → p=0.85 (need ≥ 0.75)
  PASS  damage_without_ragost: 6 copies (effective 4.5: Weapons Manufacturing@0.8, Rust Harvester@0.7, Ruinous Rampage@0.5, Ruinous Rampage@0.5) → p=0.83 (need ≥ 0.75)
  PASS  outlet: 4 copies (effective 3.6: Slagdrill Scrapper@0.8, Slagdrill Scrapper@0.8) → p=0.76 (need ≥ 0.75)
  PASS  fuel: 8 copies → p=0.96 (need ≥ 0.75)
  PASS  lifegain: 5 copies (effective 4.8: Chrome Companion@0.9, Chrome Companion@0.9) → p=0.85 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 80%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Maindeck concedes the class. The only sweeper castable in R/W in this pool is Lithobraking ('Create a Lander token. Then you may sacrifice an artifact. When you do, Lithobraking deals 2 damage to each creature'), which is symmetric and kills 6 of this deck's 9 creature copies (Rust Harvester 1/1, Ragost 2/2, Chrome Companion 2/1 x2, Kavaron Harrier 2/1 x2) plus every 2/2 Robot token - it would sweep the engine along with their board. It is boarded in as Lithobraking x2 where the matchup makes that trade correct.
  OK        single_large_threat: Emergency Eject, Radiant Strike
  OK        noncreature_permanents: Emergency Eject, Radiant Strike, Ruinous Rampage
  CONCEDED  stack: No card castable in R/W in this pool counters a spell; the cube's stack interaction sits in blue. Splashing U would require a third colour against a 3-dual RW base and would delay Ragost's turn-2 {R}{W}.
  CONCEDED  graveyard: Maindeck carries no graveyard hate; the 31-card graveyard class is answered from the sideboard by Dauntless Scrapbot x2 ('When this creature enters, exile each opponent's graveyard. Create a Lander token'), which is also two artifact ETBs so boarding it in costs the engine nothing. Maindecking it would displace fuel, and every artifact cut is at once a Weapons Manufacturing trigger, a Weftstalker Ardent ping and a Ragost bullet.
```
- No curve or goldfish WARN flags were raised: curve PASS at 1:7 2:8 3:7 4:2 with nothing above MV 4, goldfish PASS at 84% keepable, 84% three-lands-by-turn-3 and a turn-1 play in 80%.
- The outlet role passes at p=0.7570 against a 0.75 threshold - a margin of 0.007. Recorded rather than rounded away: this deck's single tightest structural number is whether it draws a sacrifice outlet, and three copies plus Ragost is all the pool offers in R/W.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Genuinely repeatable mana sinks: Slagdrill Scrapper x2 ('{2}, {T}, Sacrifice another artifact OR LAND: Draw a card' - it converts the flood itself into cards), Kavaron Harrier x2 ({2} per attack for a Robot token), and Chrome Companion x2 ('{2}, {T}: Put target card from a graveyard on the bottom of its owner's library'). Bounded but real: Ragost's activation is limited by artifacts on board, Rust Harvester's by artifact CARDS in the graveyard, and Melded Moxite's '{3}, Sacrifice this artifact' is one-shot - stated precisely because the earlier draft overclaimed three unlimited sinks. |
| screw | mitigation | 7 of 24 nonland cards cost one mana and 8 more cost two, so 15 of 24 are live off two lands, and nothing in the deck costs more than 4. Goldfish reports 84% keepable hands, 3 lands by turn 3 in 84%, and a turn-1 play in 80%. Sacred Foundry enters untapped for 2 life when tempo matters. |
| decapitation | mitigation | Measured rather than asserted. With Ragost dead or never drawn, the damage_without_ragost role is 6 copies at effective 4.5, p=0.83 by turn 8: Weftstalker Ardent x2 (repeatable, needs no sacrifice and no lifegain), Weapons Manufacturing (an ENCHANTMENT, which creature removal cannot answer, now backed by three outlets), Rust Harvester (graveyard-fed, so it improves as artifacts die), and Ruinous Rampage x2 (3 damage to each opponent with no board at all). The honest caveat, kept from the grill: this measures whether a damage source is drawn, not whether 20 damage arrives - without Ragost the clock is materially slower. |
| gas-out | mitigation | 10 of 24 nonland cards draw, replace themselves or dig: Slagdrill Scrapper x2 (a card per sacrifice, repeatable), Melded Moxite x2 ('you may discard a card. If you do, draw two cards'), Nutrient Block x2 ('When this artifact is put into a graveyard from the battlefield, draw a card' - and this deck puts artifacts there on purpose), Wurmwall Sweeper x2 ('surveil 2'), Memorial Vault ('Exile the top X cards of your library... You may play those cards this turn'), and Haliya (a card whenever 3 life is gained, which one Nutrient Block activation meets exactly). |
| raced | accepted | This deck is the slower one against the cube's fastest starts and accepts it. Mitigating would mean maindecking blockers or Lithobraking, and every slot spent on defence is a slot not spent on an artifact - which here is simultaneously a Weapons Manufacturing trigger, a Weftstalker Ardent ping and a Ragost bullet, so defence is paid for directly out of the clock. The offset that does not cost the plan is the lifegain the engine already requires: Nutrient Block x2 gain 3 each, Chrome Companion x2 gain on every tap, Haliya gains on every ETB, Radiant Strike gains 3, and once Ragost resolves every artifact on board can be cashed for 3 life instead of 3 damage. Lithobraking x2 is the sideboard answer where the trade is correct. |
| disruption-fizzle | mitigation | There is no single critical turn - damage accrues in 1s, 2s and 3s across many small triggers, so interaction aimed at any one turn costs at most one activation. Ragost's ability is a tap plus a sacrifice of a permanent already on board, so a counterspell has nothing to counter and removal in response does not fizzle it: the damage is already on the stack once the cost is paid. The one exception, removal on Ragost before it ever activates, routes into the decapitation case above. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Susurian Voidborn | Black. Deck 1 is the W/B build; this is the R/W one, and the RW mana base cannot also support black. |
| Syr Vondam, the Lucent | Black. Same reason. |
| Dubious Delicacy | {2}{B} — the pool's other Food is black and out of these colours. Ragost compensates by granting the Food type to every artifact, so the deck has more 'Foods' than the two printed ones. |
| Space-Time Anomaly | {2}{W}{U} requires blue, and at 1 copy 'Target player mills cards equal to your life total' cannot deck a 40-card opponent. |
| Tannuk, Steadfast Second | {2}{R}{R} mythic granting warp {2}{R} to artifacts and red creatures — real, but it competes for a capped rare/mythic slot against Ragost, Weapons Manufacturing and Rust Harvester, all of which convert artifacts directly into damage where Tannuk only discounts them. |
| Dawnsire, Sunstar Dreadnought | {5} 20/20 Spacecraft; its payoff needs 10+ charge counters via Station, i.e. tapping ~5 creatures' worth of power across multiple sorcery-speed turns. This deck sacrifices its creatures and artifacts rather than keeping them on board to Station with. |
| Beyond the Quiet | {3}{W}{W} 'Exile all creatures and Spacecraft' is symmetric and would exile this deck's own engine bodies (Ragost, Weftstalker Ardent, Rust Harvester); double-white is also wrong for a red-primary pip base. Sideboard consideration only. |
| Pain for All | {2}{R} Aura on your own creature — 'Whenever enchanted creature is dealt damage, it deals that much damage to each opponent' is a real drain, but an Aura on a creature in a deck that sacrifices its own permanents is card disadvantage on removal. |
| Warmaker Gunship | {2}{R} rare Spacecraft whose ETB 'deals damage equal to the number of artifacts you control to target creature' points at creatures, not the face; the deck's problem is closing, not blocking. Costs a capped rare slot. |
| Virulent Silencer | 'Whenever a nontoken artifact creature you control deals combat damage to a player, that player gets two poison counters' — a second, competing win condition needing 10 poison, i.e. 5 unblocked connections. Splitting between poison and burn wins neither race. |
| Cosmogrand Zenith | {2}{W} mythic keyed to 'your second spell each turn'; this deck's engine is artifacts entering, not spell count, and it would cost a capped mythic slot. |
| Pinnacle Starcage | 'exile all artifacts and creatures with mana value 2 or less' is symmetric against a deck whose whole fuel base is cheap artifacts — it would exile more of my board than theirs. |
| Devastating Onslaught | {X}{X}{R} mythic making X token copies of an artifact or creature that are sacrificed at end of turn — the sacrifice is a genuine Ragost synergy, but at X=2 it costs 5 mana for two Foods, which is worse than simply casting two artifacts. |
| Cut Propulsion | 'Target creature deals damage to itself equal to its power' misses 0- and 1-power utility creatures and cannot go face; Plasma Bolt and Bombard cover the same slot with reach attached. |
| Drill Too Deep | 'Destroy target artifact' is a fine answer but the mode is dead against non-artifact decks, and this cube's artifact density means my own board is the bigger artifact board more often than not. Sideboard consideration. |
| Sunstar Chaplain | {1}{W} rare whose payoff needs 'two or more tapped creatures' at end step and produces +1/+1 counters; this deck converts artifacts into damage rather than building a combat board, and it costs a capped rare slot. |
| Lumen-Class Frigate | {1}{W} rare Spacecraft needing 12 charge counters for its flying/lifelink mode; the 2+ mode (+1/+1 to other creatures) is a lord effect in a deck whose damage does not come from combat. |
| Survey Mechan | {4} 1/3 flier whose sacrifice ability costs {10} minus differently-named lands — this deck runs 2 nonbasic land names, so the ability realistically costs 7 or 8. |
| Honored Knight-Captain | Its Equipment tutor costs {4}{W}{W} plus sacrificing itself; the deck runs 0 Equipment, so 0 of 23 nonland cards make that ability live. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.17   Ramp cards: 2   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.44 adj [MV 2.17 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  76.2%  prod  75.0%  gap  +1.2pp  [OK]
  W  demand  23.8%  prod  43.8%  gap -20.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard only - every card verified by exact name against the working pool
[PASS] copy_limits: commons/uncommons <=2, rares/mythics <=1 - verified via cube_search.get_max_copies
[PASS] rare_mythic_cap: 6 of 6 used, all mainboard: Ragost, Weapons Manufacturing, Rust Harvester, Haliya, Memorial Vault, Sacred Foundry. Sideboard is 100% common/uncommon.
[PASS] basics: Mountain x9 + Plains x4 - format-supplied, exempt from copy limits
[PASS] colour: core R/W, no splash; every nonland card returns non-None from effective_cost.best_mode(card, ['R','W'], [])
[PASS] 1 mainboard count: 40 == 40
[PASS] 1 sideboard count: 10 == 10
[PASS] 2 exact-name membership: all names in working pool
[PASS] 3 copy limits: all within card_pool_rules
[PASS] 4 colour usability (best_mode): all nonland usable in R/W
[PASS] 5 splash cap: off-core nonland cards: none
[PASS] 6 rare/mythic cap (user constraint <=6): 6 rare+mythic: ['Haliya, Guided by Light', 'Memorial Vault', 'Ragost, Deft Gastronaut', 'Rust Harvester', 'Sacred Foundry', 'Weapons Manufacturing']
```