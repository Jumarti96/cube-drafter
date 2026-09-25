---
deck_name: "br-munitions-drain"
cube_id: "eoe"
cube_slug: "eoe"
colors: "BR"
format: "40-card"
built_at: "2026-08-03T17:19:26Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
2x   Geothermal Bog         BR dual, enters tapped
7x   Mountain               Untapped red source
7x   Swamp                  Untapped black source
```

### CREATURES (14)

```
CMC  Card                    Qty   Color  Role                       Rar
  1  Hullcarver             x1    B      Deathtouch artifact body   C
  1  Kavaron Harrier        x2    R      Scheduled death/combat     U
  1  Rust Harvester         x1    R      Repeatable face damage     R
  1  Slagdrill Scrapper     x2    R      Repeatable outlet + draw   C
  2  Lightless Evangel      x2    B      Sac-to-counters payoff     U
  2  Umbral Collar Zealot   x2    B      Free unlimited sac outlet  U
  3  Susurian Voidborn      x2    B      Drain payoff (kill mech)   U
  3  Weftstalker Ardent     x2    R      ETB-side reach             U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                    Qty   Color  Role                       Rar
  1  Embrace Oblivion       x2    B      Removal + sac outlet       C
  1  Plasma Bolt            x2    R      Reach (3 with Void)        C
  1  Tragic Trajectory      x1    B      Removal (-10/-10 w/ Void)  U
```

### OTHER SPELLS (5)

```
CMC  Card                    Qty   Color  Role                       Rar
  1  Nutrient Block         x2    C      Self-sac artifact, draws   C
  2  Melded Moxite          x2    R      Loot artifact, self-sac    C
  2  Weapons Manufacturing  x1    R      Munitions producer         R
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in          Rar
Drill Too Deep         x2    R      Artifact decks; destroy artifact C
Cut Propulsion         x2    R      Fliers / high-power top end      U
Lithobraking           x2    R      Go-wide token boards             U
Ruinous Rampage        x2    R      Lifegain (mode 1) only           U
Dauntless Scrapbot     x2    C      Recursion / reanimator           U
```

## ANALYSIS

### DECK IDENTITY

Black-red aristocrats drain built as a 13-one-drop aggro curve. Susurian Voidborn ('Whenever this creature or another creature or artifact you control dies, target opponent loses 1 life and you gain 1 life') turns every body and artifact the deck loses into reach, while Weftstalker Ardent bills the same permanents on the way in and Lightless Evangel banks them as +1/+1 counters. Weapons Manufacturing banks a 2-damage Munitions charge off each of the 10/24 nontoken artifacts, and those charges are only worth damage when something removes them — the Munitions clause is 'When this token LEAVES THE BATTLEFIELD, it deals 2 damage to any target' — so the list carries 6/24 cards that can cash one (Umbral Collar Zealot 2, Slagdrill Scrapper 2, Embrace Oblivion 2), 4/24 of them repeatably. Rust Harvester is the one repeatable non-combat damage source. The deck manufactures its own Void condition on 16/24 cards, which upgrades Plasma Bolt to 3 to the face and Tragic Trajectory to -10/-10 for one mana each.

### KILL MECHANISM (oracle text)

The deck does not need combat to close. Three quoted lines carry it:

- Susurian Voidborn x2 — "Whenever this creature or another creature or artifact you control dies, target opponent loses 1 life and you gain 1 life."
- Weapons Manufacturing x1 — "Whenever a nontoken artifact you control enters, create a colorless artifact token named Munitions with \"When this token leaves the battlefield, it deals 2 damage to any target.\""
- Umbral Collar Zealot x2 — "Sacrifice another creature or artifact: Surveil 1."

The Zealot costs no mana and has no limit, so it is the card that converts a banked Munitions into
its 2 damage at an arbitrary point in a turn. Slagdrill Scrapper x2 ("{2}, {T}, Sacrifice another
artifact or land: Draw a card.") does the same on a tap and two mana, and Embrace Oblivion x2 ("As an
additional cost to cast this spell, sacrifice an artifact or creature. | Destroy target creature or
Spacecraft.") does it once each while also being the removal.

The same deaths are billed twice more: Lightless Evangel x2 ("Whenever you sacrifice another creature
or artifact, put a +1/+1 counter on this creature.") converts them to permanent combat damage, and
Weftstalker Ardent x2 ("Whenever another creature or artifact you control enters, this creature deals
1 damage to each opponent.") bills the enter side of the same permanents. Rust Harvester x1
("Menace | {2}, {T}, Exile an artifact card from your graveyard: Put a +1/+1 counter on this
creature, then it deals damage equal to its power to any target.") is the only repeatable non-combat
damage source in the list. Plasma Bolt x2 ("Plasma Bolt deals 2 damage to any target. | Void - Plasma
Bolt deals 3 damage instead if a nonland permanent left the battlefield this turn or a spell was
warped this turn.") supplies the last points.

### COUNT-DEPENDENT VERDICTS

Every claim below is numerator/denominator against THIS 24-card nonland list.

- Weapons Manufacturing ('Whenever a NONTOKEN artifact you control enters...'): 10 of the 24 nonland cards are nontoken artifacts — Kavaron Harrier 2, Slagdrill Scrapper 2, Nutrient Block 2, Melded Moxite 2, Hullcarver 1, Rust Harvester 1. Up from 9/24 after the Phase 9 swaps. INCLUDE at assembly weight 0.6.
- MUNITIONS CONSUMER COUNT (Challenger finding 5 — the producer side alone was an incomplete claim). The token reads 'When this token LEAVES THE BATTLEFIELD, it deals 2 damage to any target', so a banked charge is worth 0 until something removes it. Cards in this list that can put a Munitions into the graveyard: Umbral Collar Zealot 2 ('Sacrifice another creature or artifact: Surveil 1' — free, unlimited), Slagdrill Scrapper 2 ('{2}, {T}, Sacrifice another artifact or land: Draw a card' — repeatable, gated on two mana, a tap and summoning sickness), Embrace Oblivion 2 ('As an additional cost to cast this spell, sacrifice an artifact or creature' — one-shot, and it is also removal) = 6 of 24, of which 4 of 24 are repeatable and 2 of 24 are free-and-repeatable. Producers 10/24, consumers 6/24.
- Susurian Voidborn's fodder denominator: 18 of 24 nonland cards leave a creature or artifact on the battlefield that can die (bodies 14 + Nutrient Block 2 + Melded Moxite 2). Same figure feeds Embrace Oblivion's additional cost.
- Lightless Evangel ('Whenever you SACRIFICE another creature or artifact'): sacrifice sources are Umbral Collar Zealot 2, Slagdrill Scrapper 2, Embrace Oblivion 2, Nutrient Block 2, Melded Moxite 2, Kavaron Harrier 2 = 12 of 24 nonland cards, up from 10/24. INCLUDE at weight 0.8. Note the trigger word is SACRIFICE, not dies — board wipes and targeted destruction bank zero counters.
- Void enablers ('a nonland permanent left the battlefield this turn or a spell was warped this turn') for Plasma Bolt and Tragic Trajectory: Umbral Collar Zealot 2, Slagdrill Scrapper 2, Nutrient Block 2, Embrace Oblivion 2, Kavaron Harrier 2, Melded Moxite 2, plus Warp on Susurian Voidborn 2 and Weftstalker Ardent 2 = 16 of 24, up from 14/24. Rust Harvester does NOT count: it exiles an artifact card from the GRAVEYARD, not from the battlefield.
- Cards: Net-Positive or Self-Replacing (gas-out denominator): Melded Moxite 2 ('discard a card. If you do, draw two cards'), Nutrient Block 2 ('When this artifact is put into a graveyard from the battlefield, draw a card'), Slagdrill Scrapper 2 ('Sacrifice another artifact or land: Draw a card') = 6 of 24, up from 4/24. Umbral Collar Zealot 2 adds selection (Surveil 1) but not card count.
- Bodies that can attack: 14 of 24 nonland cards are creatures (Susurian Voidborn 2, Weftstalker Ardent 2, Lightless Evangel 2, Kavaron Harrier 2, Slagdrill Scrapper 2, Umbral Collar Zealot 2, Hullcarver 1, Rust Harvester 1), total power 26. Of those 14 bodies, 12 have toughness 1-2 — only Weftstalker Ardent x2 (2/3) is above.
- Rust Harvester fuel ('{2}, {T}, Exile an artifact CARD from your GRAVEYARD'): 9 of 24 nonland cards are nontoken artifacts other than Rust Harvester itself and therefore become artifact cards in the graveyard — Kavaron Harrier 2, Slagdrill Scrapper 2, Nutrient Block 2, Melded Moxite 2, Hullcarver 1. Melded Moxite's ETB ('you may discard a card') can also pitch one directly. Assembly weight 0.7 because an early copy has no fuel.
- Mana sinks that convert a surplus land into board or drain (flood denominator, Challenger finding 4): Kavaron Harrier 2, Melded Moxite 2, Nutrient Block 2, Slagdrill Scrapper 2, Rust Harvester 1 = 9 of 24. The pre-resolve text said 5/24 against three cards totalling 6; that count did not reproduce and is repaired here.

### LAND MATH

```
deck_audit.land_target(40, 1.6250000000, 4)  # accel from deck_audit.accel_count(non_lands) = 4 (Slagdrill Scrapper x2 + Nutrient Block x2; the library term is 'ramp OR cantrip/smoothing', ramp-only = 0)
```

- Target: base 17 lands (argmax P(2-4 in 7) = 0.7945), adjustment -1.833 for avg MV 1.6250 vs reference 2.5 with accel 4, raw target 15.167 -> recommended 15 (P = 0.7763).
- Deviation: +1 over the recomputed recommendation of 15. Disclosed, not hidden: 16 lands gives P(2-4 in 7) = 0.7903 against 0.7763 at 15, and the goldfish sim at 16 reports 84% keepable with T1/T2/T3 play rates of 94%/100%/100%. mana_audit land_count_status: PASS.
- Composition: Geothermal Bog 2 + Swamp 7 + Mountain 7 = 16. Black sources 9/16 (56.2%), red sources 9/16 (56.2%). Rebalanced from 8 Swamp / 6 Mountain because the Phase 9 swaps flipped the pip majority: cutting Hullcarver x1 and Tragic Trajectory x1 (B) for Rust Harvester x1 and Slagdrill Scrapper x2 (R) moved the split from B12/R10 to B10/R12.
- Composition notes: dossier.mana_infrastructure: the ONLY BR dual in the cube is Geothermal Bog (common, enters_tapped: true, 2 copies) — both copies are in. Command Bridge is excluded: it is enters_tapped AND 'When this land enters, sacrifice it unless you tap an untapped permanent you control', which taxes exactly the untapped one-drop this curve is built around. Secluded Starforge produces only {C} against a list where 22 of 22 coloured pips are B or R, and it is a rare against a hard 6-card cap. Susur Secundi, Void Altar and Kavaron, Memorial World are enters_tapped mythics whose payoffs need 12 charge counters, far past turn 8. No self-bounce lands exist in the BR set. Result: 2 of 16 lands enter tapped (12.5%).
- Accel recomputation: Challenger finding 7, re-run and recorded. Two corrections. (a) The old accel=2 was NOT Melded Moxite — deck_audit.accel_count is 'is_ramp_card OR is_cantrip_card', and the library does not count Melded Moxite at all; the 2 was Nutrient Block x2 ('...draw a card'). The finding's premise that a non-mana-producer was credited as ramp is right in spirit (ramp-only = 0) but wrong in attribution. (b) On the final 24 nonlands accel = 4 (Slagdrill Scrapper x2 + Nutrient Block x2), avg MV = 1.6250, and land_target now recommends 15 (raw 15.167, p_window 0.7763). The accel=0 counterfactual recommends 16 (p_window 0.7903). We build to 16: it has the strictly better P(2-4 lands in 7) of the two, and deck_audit.mana_audit reports 'Land Count: 16 / 15 recommended [PASS]'.
- Land property census: Not required. Re-verified after the Phase 9 swaps: no mainboard card has a function that scales with a land type, 'basic land', snow, or land count. Slagdrill Scrapper's '{2}, {T}, Sacrifice another artifact or land' can eat a land but does not care which land. The mainboard runs 14 basics, so the sideboard Lander makers stay live.

### PIP MATH

- Black pips 10 — Susurian Voidborn 2, Lightless Evangel 2, Umbral Collar Zealot 2, Embrace Oblivion 2, Hullcarver 1, Tragic Trajectory 1 = 10 (one pip each, no double-pip card in the list)
- Red pips 12 — Weftstalker Ardent 2, Kavaron Harrier 2, Slagdrill Scrapper 2, Melded Moxite 2, Plasma Bolt 2, Weapons Manufacturing 1, Rust Harvester 1 = 12 (one pip each)
- Derived split: 10 black pips, 12 red pips (45.5% / 54.5%) — the Phase 9 swaps flipped the majority from black to red. 16 lands: Geothermal Bog 2 counts for both, then the remaining 14 split 7 Swamp / 7 Mountain -> 9 black sources (56.2%) and 9 red sources (56.2%). deck_audit.mana_audit confirms: B demand 45.5% vs prod 56.2% (gap -10.7pp OK), R demand 54.5% vs prod 56.2% (gap -1.7pp OK), color_balance_status PASS.
- Ongoing cost: Kavaron Harrier (Mana: Ongoing-Cost, 'you may pay {2}' per attack): with avg MV 1.6250 and a 13/7/4 curve, every turn from 4 onward has spare mana after the one- or two-drop; the payment is optional.
- Ongoing cost: Slagdrill Scrapper (Engine/Outlet, '{2}, {T}' per activation) and Rust Harvester ('{2}, {T}' per activation): both are once-per-turn and both compete with Kavaron Harrier's {2} for the same spare mana. Total mana sinks 9/24 — the deck can always spend a surplus, but it cannot spend it twice.
- Fed cost: Embrace Oblivion (Board: Sacrifice-Cost, 'As an additional cost to cast this spell, sacrifice an artifact or creature'): fed by the 18 of 24 nonland cards that leave a creature or artifact on the battlefield, plus every Munitions token Weapons Manufacturing makes.
- Fed cost: Melded Moxite (Cards: Extra-Cost, 'you may discard a card. If you do, draw two cards'): the cost is OPTIONAL, so the card is never uncastable; with an empty hand the ETB simply does nothing.
- Fed cost: Slagdrill Scrapper ('Sacrifice another artifact or land'): fed by the 10/24 nontoken artifacts plus the 16 lands plus every Munitions token — it is the one outlet that can convert a flooded board.

### SLOT ALLOCATION

- threats payoffs: 11/24 = 45.8% (band 45-55%) — DEVIATION (-4pp, 45.8% is in band). The kill mechanism is a death trigger, so the payoff slot holds both the drain payoffs and the cheap bodies that die to feed them.. Cards: Susurian Voidborn 2, Weftstalker Ardent 2, Lightless Evangel 2, Weapons Manufacturing 1, Kavaron Harrier 2, Hullcarver 1, Rust Harvester 1
- engine infrastructure: 8/24 = 33.3% (band 0-10%) — DEVIATION, WIDENED to +23pp (was +15pp at 6/24). Stated as still-deviating, not resolved. With zero sacrifice outlets the payoff is inert: Susurian Voidborn only triggers on deaths and 14/24 nonlands are creatures that will not die on their own, and Weapons Manufacturing's Munitions are worth 0 damage until something removes them (6/24 can, 4/24 repeatably). Slagdrill Scrapper x2 was added under Challenger finding 1 specifically to raise that consumer count from 2/24 to 4/24; it also takes net-positive cards from 4/24 to 6/24 and the Weapons Manufacturing denominator from 9/24 to 10/24, at MV1. The cost of the deviation is disclosed rather than reclassified away.. Cards: Umbral Collar Zealot 2, Slagdrill Scrapper 2, Nutrient Block 2, Melded Moxite 2
- interaction: 5/24 = 20.8% (band 10-15%) — DEVIATION (+5.8pp) as labelled, 20.8% against a 10-15% band. Reclassifying Plasma Bolt as reach — its oracle is 'Plasma Bolt deals 2 damage to any target', and the locked thesis names it as the card that supplies 'the last points' — gives true interaction 3/24 = 12.5%, INSIDE the band. Both figures are stated. Challenger finding 9 correctly noted that the previous 4/24 = 16.7% was still outside the ceiling; cutting the second Tragic Trajectory for Slagdrill Scrapper is what closed it. All five cost exactly one mana, so the slot costs the curve nothing.. Cards: Plasma Bolt 2, Embrace Oblivion 2, Tragic Trajectory 1

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (24 nonland):  1:13  2:7  3:4
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  reach_payoff: 9 copies (effective 8.2: Lightless Evangel@0.8, Lightless Evangel@0.8, Weapons Manufacturing@0.6) → p=0.97 (need ≥ 0.75)
  PASS  death_enabler: 10 copies (effective 9.3: Kavaron Harrier@0.85, Kavaron Harrier@0.85, Melded Moxite@0.8, Melded Moxite@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 93%  T2 100%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper: 12 of 24 nonland cards cost one mana and the plan races a wide board rather than answering it (Susurian Voidborn also converts every chump-block trade into 1 drain + 1 life). Maindecking Lithobraking ({2}{R}) would push avg MV off 1.667 and the land count off 16; it is a 2-of in the sideboard instead.
  OK        single_large_threat: Embrace Oblivion, Tragic Trajectory
  CONCEDED  noncreature_permanents: The whole cube has 4 artifact answers (density 1.6%) and 1 enchantment answer (mono-green Seedship Impact), so B/R cannot answer enchantments at all; the only artifact answers legal here are Drill Too Deep and Thaumaton Torpedo ({6} activation). Drill Too Deep x2 sits in the sideboard where the 29.7% artifact density makes it live.
  CONCEDED  stack: Zero counterspells exist in the B/R pool; the deck's stack interaction is proactive discard (Temporal Intervention, sideboard) plus a turn-6 clock that outruns reactive decks.
  CONCEDED  graveyard: No mainboard graveyard hate — every slot is spent on the death engine. Dauntless Scrapbot ('When this creature enters, exile each opponent's graveyard. Create a Lander token.') is the sideboard answer and is also a nontoken artifact, so it costs the plan nothing when boarded in.
```

- curve — PASS, no flag. MV1 13/24 (54% vs a 15% floor), MV2 7/24, MV3 4/24, MV4+ 0/24 (vs a 20% ceiling); 0 nonland cards sit above the thesis turn's MV.
- assembly — PASS, no flag. reach_payoff 10 copies (effective 8.9 after Lightless Evangel@0.8 x2, Weapons Manufacturing@0.6, Rust Harvester@0.7) -> p=0.98; death_enabler 12 copies (effective 11.0 after Slagdrill Scrapper@0.85 x2, Kavaron Harrier@0.85 x2, Melded Moxite@0.8 x2) -> p=0.99. Both need >= 0.75.
- goldfish — PASS, no flag. 84% keepable (threshold 80%), 84% on three lands by turn 3, play rates 94%/100%/100% on turns 1/2/3.
- coverage — PASS. single_large_threat answered in the mainboard (Embrace Oblivion, Tragic Trajectory); wide_boards, noncreature_permanents, stack and graveyard conceded with counted grounds and sideboard answers.
- render note — the MV distribution printed above is re-derived at render time from the final 24 nonland cards (MV1:13  MV2:7  MV3:4); the stale 12/8/4 recorded in structural_checks was not reproduced.

### FAILURE MODES

| Mode | Verdict | Reasoning |
| --- | --- | --- |
| flood | mitigation | 9 of 24 nonland cards turn a surplus land into a death trigger or a card rather than a dead draw: Kavaron Harrier x2 ('you may pay {2}' every attack — a guaranteed sacrificed Robot = 1 Voidborn drain + 2 attacking power), Melded Moxite x2 ('{3}, Sacrifice this artifact: Create a tapped 2/2 colorless Robot artifact creature token'), Nutrient Block x2 ('{2}, {T}, Sacrifice this artifact: You gain 3 life', which also draws a card on death), Slagdrill Scrapper x2 ('{2}, {T}, Sacrifice another artifact or land: Draw a card' — it can even eat the surplus land itself), and Rust Harvester x1 ('{2}, {T}, Exile an artifact card from your graveyard: Put a +1/+1 counter on this creature, then it deals damage equal to its power to any target'). Corrected from the pre-resolve figure of 5/24, which did not reproduce (Challenger finding 4). |
| screw | mitigation | 20 of 24 nonland cards cost one or two mana (MV1 = 13, MV2 = 7), so a two-land opener casts on curve through turn 3; the goldfish sim reports 84% keepable hands and 94%/100%/100% play rates on turns 1/2/3. Melded Moxite's optional 'discard a card. If you do, draw two cards' digs two deeper on a stalled hand, and Slagdrill Scrapper's outlet explicitly accepts a land ('Sacrifice another artifact or land'). |
| decapitation | mitigation | Susurian Voidborn answered on sight does not end the plan: it is a 2-of, it has 'Warp {B}' so an exiled copy can be recast later, and the same deaths still pay through two other lines — Lightless Evangel x2 ('put a +1/+1 counter on this creature') banks them as combat damage and Weftstalker Ardent x2 ('this creature deals 1 damage to each opponent') bills the ENTER side instead of the DIE side. 14 of 24 nonland cards are attacking bodies totalling 26 power, and Rust Harvester ('it deals damage equal to its power to any target') is a repeatable non-combat line that needs no other permanent on board. Plasma Bolt x2 is a PERMANENT-INDEPENDENT FLOOR OF 4 (2 + 2), rising to 6 only when Void is live — and the Void condition is itself a permanent leaving the battlefield, so the 6 figure is conditional, not independent. Void enablers: 16 of 24 (Challenger finding 8). |
| gas-out | mitigation | Honest count: 6 of 24 nonland cards are Cards: Net-Positive or Self-Replacing — Melded Moxite x2 (discard 1, draw 2), Nutrient Block x2 ('When this artifact is put into a graveyard from the battlefield, draw a card') and Slagdrill Scrapper x2 ('{2}, {T}, Sacrifice another artifact or land: Draw a card'), up from 4/24 before the Phase 9 swaps. The rest of the mitigation is cheapness plus a free engine: at avg MV 1.6250 the hand empties onto the board by turn 4, and from there Kavaron Harrier produces a death every combat for mana only. Umbral Collar Zealot's Surveil 1 per sacrifice fixes the top of the library for free. |
| raced | accepted | Against the cube's fastest clocks (evasion density 22.5%, 56 cards) this deck has no mainboard sweeper and 12 of its 14 bodies have toughness 1-2 — corrected from the pre-resolve figure of 8 of 13, which did not reproduce (Challenger finding 3). Only Weftstalker Ardent x2 (2/3) is above toughness 2. The accepted cost, re-argued on the correct ground: the concrete anti-race option is Monoist Sentry ('{B} Artifact Creature — Robot 4/1, Defender'), and the old dismissal that it 'raises avg MV off 1.667' is FALSE for an MV1 card — that ground is withdrawn. The real cost is that 'Defender' contributes 0 of the deck's 26 attacking power, so two copies replace two attackers in a list whose whole reason for its low curve is a turn-5-to-6 goldfish clock; it is a sideboard-shaped card against a KNOWN aggro matchup, not a maindeck one. Partial offsets that cost nothing: Susurian Voidborn gains 1 life per death, Nutrient Block gains 3, and Hullcarver's 'Deathtouch' trades with any attacker. |
| disruption-fizzle | mitigation | The critical turn is an alpha strike plus stacked drains, and one removal spell mid-turn does not break it: Umbral Collar Zealot ('Sacrifice another creature or artifact: Surveil 1') costs no mana and can be activated in response, so a creature targeted for removal is sacrificed first and still becomes a Voidborn drain plus a Lightless Evangel counter — and the removal spell's own resolution then satisfies Void, upgrading a held Plasma Bolt to 3. Repeatable outlets are now 4 of 24 (Umbral Collar Zealot 2 free, Slagdrill Scrapper 2 at {2}+{T}); only the Zealots are free and instant-speed, so if both are answered every remaining conversion is mana-gated. Every card in the interaction slot costs one mana, so a fizzled turn is re-assembled the next turn. |

### CARDS CONSIDERED BUT EXCLUDED

**Rares and mythics cut against the 6-card rare/mythic cap (2 of 6 spent: Weapons Manufacturing, Rust Harvester)**

- Mutinous Massacre (rare) — Budget cut: {3}{B}{B}{R}{R} is 7 mana with 4 coloured pips split across both colours, unreachable with 0 untapped BR duals in the pool - and it would consume 1 of only 6 rare slots.
- Archenemy's Charm (rare) — Budget cut: {B}{B}{B} triple-black is uncastable on schedule when black sources are roughly half the lands; a rare slot is better spent on Weapons Manufacturing/Memorial Vault.
- Entropic Battlecruiser (rare) — Budget cut: its 1+ ability keys on OPPONENT discards; this deck has only Virus Beetle and Temporal Intervention as discard sources, so the payoff fires 0-2 times per game.
- Extinguisher Battleship (rare) — Budget cut: 8 mana, and its ETB 'deals 4 damage to each creature' kills most of this deck's own 1-2 toughness fodder while costing a rare slot.
- Possibility Technician (rare) — Budget cut: its impulse-draw is gated on 'you may play it if you control a Kavu' - only Kav Landseeker, Memorial Team Leader, Terrapact Intimidator and Kavaron Skywarden are Kavu (4 of the 69 include candidates), so access is unreliable.
- Terminal Velocity (rare) — Budget cut: 6 mana to cheat in a permanent that dies at end of turn; the goldfish turn is 8, and it costs a rare slot that Memorial Vault uses better.
- Thrumming Hivepool (rare) — Budget cut and dead text: 'Affinity for Slivers' and 'Slivers you control have double strike' - 0 Slivers exist in the BR pool, so it is a 6-mana do-nothing besides two 1/1s per upkeep.
- Chorale of the Void (rare) — Budget cut: an Aura that reanimates from the DEFENDING player's graveyard - it does nothing on an empty opposing yard, and it is card disadvantage to removal.
- Sothera, the Supervoid (mythic) — Budget cut and anti-synergy: its end-step clause sacrifices Sothera whenever ANY player controls no creatures - fragile in a deck that voluntarily empties its own board.
- Tezzeret, Cruel Captain (mythic) — Budget cut: the -3 tutors an artifact with mana value 1 or less; only Nutrient Block, Thaumaton Torpedo, Hullcarver and Monoist Sentry qualify (4 of the 69 include candidates), not worth a mythic slot.
- Dawnsire, Sunstar Dreadnought (mythic) — Budget cut: needs 10 charge counters before it does anything; with ~2 average creature power that is 5 Station taps - far past the turn-8 goldfish.
- The Endstone (mythic) — Budget cut: 7 mana, and 'your life total becomes half your starting life total' fights the lifegain half of Susurian Voidborn's drain.
- Devastating Onslaught (mythic) — Budget cut - though note 'Sacrifice them at the beginning of the next end step' is X free Voidborn deaths; it needs 2X+1 mana, so X=3 costs 7, past this deck's operating range.
- Kavaron, Memorial World (mythic) — Budget cut (land): enters tapped and its payoff needs 12+ charge counters; a plain Mountain serves this curve better.
- Secluded Starforge (rare) — SIDEBOARD/flex: taps only for {C} in a deck with {B}{B}/{R}{R} costs and 0 untapped BR duals, so a colourless source is a real cost even though the {5} Robot mode is a mana sink.

**Commons and uncommons that fit the plan but sit a tier below the includes**

- Hylderblade (uncommon) — Equipment on a deck that sacrifices its own creatures: the Void auto-attach re-targets, but Equip {4} is unaffordable and the +3/+1 evaporates every time the holder is fed to an outlet.
- Full Bore (uncommon) — The trample-and-haste rider only applies 'if that creature was cast for its warp cost'; only 8 pool cards here have warp, so the upside half is off most of the time.
- Rig for War (uncommon) — A pure combat trick in a deck that would rather spend 2 mana on a permanent that becomes both a Munitions trigger and future sacrifice fodder.
- Dark Endurance (common) — Indestructible protects a creature this deck is often happy to lose - anti-synergy with Susurian Voidborn's death trigger.
- Frontline War-Rager (common) — Grows only at end step with two or more TAPPED creatures, and only by one counter; too slow versus a 3-drop that triggers on entry or death.
- Territorial Bruntar (uncommon) — 6 mana with {R}{R}, and its Landfall impulse-draw needs lands to keep entering; this deck's Landers fetch basics tapped only when you spend {2} on them.
- Remnant Elemental (uncommon) — 0/4 reach whose Landfall pump requires a land drop that turn - it neither triggers Weapons Manufacturing nor produces a death, so it is off-plan.
- Bygone Colossus (uncommon) — Warp {3} for a 9/9 is a real attack, but it is a vanilla body: no ETB, no death value, and only one Munitions trigger for a 9-mana hard cast.
- Systems Override (uncommon) — Threaten effects want a free sac outlet to keep the stolen creature; Umbral Collar Zealot is the only mana-free outlet among the 69 include candidates, so the two-card pairing is 1/69 reliable.
- Roving Actuator (uncommon) — Its Void ETB only rebuys an instant/sorcery of mana value 2 or less from the yard - it needs a spent Plasma Bolt/Tragic Trajectory/Hymn already in the graveyard to do anything.
- All-Fates Scroll (uncommon) — Three mana for a rock is off-tempo for an aggressor with a turn-8 goldfish, and its {7} draw ability scales with differently named lands (realistically 3-4 here).

**Sideboard consideration cards (evaluated for the 10 slots, not chosen)**

- Blade of the Swarm (uncommon) — SIDEBOARD: its second mode 'Put target exiled card with warp on the bottom of its owner's library' is anti-warp hate with no warp ability of its own; maindeck it is a vanilla 4-mana 3/1 or 5/3.
- Drill Too Deep (common) — SIDEBOARD: 'Destroy target artifact' is dead against creature decks; board in versus Spacecraft/Equipment builds.
- Ruinous Rampage (uncommon) — SIDEBOARD: 'Exile all artifacts with mana value 3 or less' is symmetric and would exile this deck's own Landers, Munitions, Nutrient Blocks and Hullcarvers; only the 3-to-each-opponent mode is board-in reach versus control.
- Survey Mechan (uncommon) — SIDEBOARD: the sac ability costs {10} reduced by differently named lands; a 2-colour base realistically has 3-4 distinct land names, leaving a {6}+ activation - only a grindy-matchup flier.

**Cut at build time from the include list, on counted grounds**

- REJECT Comet Crawler (Challenger finding 2 — named in the locked thesis, rejection now recorded). Oracle: 'Lifelink // Whenever this creature ATTACKS, you may sacrifice another creature or artifact. If you do, this creature gets +2/+0 until end of turn.' Three counted grounds. (a) Type line is 'Creature — Insect Horror', not an artifact, so it adds 0 to the Weapons Manufacturing denominator of 10/24 and 0 to the Rust Harvester fuel count of 9/24. (b) Its outlet is attack-gated, so per the locked pipeline's own verified note it cannot be used at an arbitrary point in a turn — it does NOT add to the 4/24 repeatable Munitions consumers usable in response to removal, which is the exact gap Challenger finding 1 identifies. (c) MV3 is already the top of a 13/7/4 curve; two copies would take avg MV from 1.6250 to 1.792 and move deck_audit.land_target off its current derivation. What Comet Crawler WOULD buy — sacrifice sources for Lightless Evangel — is bought at MV1 by Slagdrill Scrapper x2, which took that count from 10/24 to 12/24.
- REJECT Zero Point Ballad (Challenger finding 12, CONTESTED). '{X}{B} Sorcery — Destroy all creatures with toughness X or less. You lose X life.' The finding's asymmetry argument credits it with Lightless Evangel counters, but Evangel reads 'Whenever you SACRIFICE another creature or artifact'; destruction is not sacrifice, so the Ballad banks ZERO Evangel counters. At X=2 it destroys 12 of our own 14 bodies including both Susurian Voidborn (2/2), i.e. the drain payoff dies to the same resolution. Lithobraking ('you may SACRIFICE an artifact. When you do, Lithobraking deals 2 damage to each creature') does pay Evangel on card text, is a 2-of, and costs no rare slot.
- REJECT Monoist Sentry (re-argued under Challenger finding 3). '{B} Artifact Creature — Robot 4/1, Defender.' The Challenger is correct that the old dismissal ('raises avg MV off 1.667') is FALSE for an MV1 card — that ground is withdrawn. The correct count-grounded ground: 'Defender' means it contributes 0 of the deck's 26 attacking power across 14 bodies, and the whole low-curve build exists to deliver a turn-5-to-6 goldfish clock. It would raise the Weapons Manufacturing denominator to 12/24, which is why it is named in the raced accepted as the concrete anti-race option if the matchup is known.
- REJECT Dubious Delicacy (harvest): MV3; two copies would raise the nonland MV total and displace one-mana cards. The Weapons Manufacturing denominator it would buy is bought more cheaply by Slagdrill Scrapper at MV1.
- REJECT Beamsaw Prospector (harvest): it is a creature, not an artifact, and the Lander it leaves is a TOKEN, so it adds 0 to the 10/24 nontoken artifact count.
- REJECT Memorial Vault (harvest): MV4 in a list whose top is MV3 (4/24 cards) and it deals zero damage; 0 of 24 nonland cards cost more than 3.
- REJECT Swarm Culler and Scrounge for Eternity (harvest): MV4 and MV3-plus-an-unbudgeted-recursion-role respectively.

### SIDEBOARD GUIDE

| Card | Qty | Threat class | When to board in |
| --- | --- | --- | --- |
| Drill Too Deep | 2 | artifacts (dossier.threat_profile.artifacts: 74 cards, density 29.7% — the largest threat class in the cube). NOT enchantments. | Board in against any Spacecraft, Equipment or artifact-engine deck; cut the last Tragic Trajectory and one Hullcarver when the opposing creature count is low. |
| Cut Propulsion | 2 | evasion (56 cards, 22.5%) and single_large_threat | Board in against fliers and against any deck whose top end has power >= toughness; cut Slagdrill Scrapper copies when the opponent has no artifacts worth trading for cards. |
| Lithobraking | 2 | wide_boards (the conceded mainboard class) | Board in against go-wide token decks; cut Tragic Trajectory and Hullcarver. |
| Ruinous Rampage | 2 | lifegain (13 cards, density 5.2%) via mode 1, and artifacts (74 cards, 29.7%) via mode 2 | NEVER maindeck: 10 of this deck's 24 nonland cards are nontoken artifacts of MV1-2, so mode 2 is a symmetric wipe of our own board. Board mode 1 in against lifegain; board mode 2 in only when siding OUT the artifact half of the curve. |
| Dauntless Scrapbot | 2 | graveyard_interaction (31 cards, 12.5%) | Board in against recursion/reanimator; cut Plasma Bolt copies when the opposing creature base is out of burn range. |

Unanswerable classes, stated rather than hidden: ENCHANTMENTS: the cube contains 16 enchantments and exactly 1 enchantment answer (Seedship Impact, mono-green). B/R has zero, so an opposing Banishing Light / Hardlight Containment / Tractor Beam on a key permanent is simply unanswerable and the response is to race. STACK: zero counterspells exist in the B/R pool; Temporal Intervention's proactive discard is the closest substitute and it only sees the hand, not the stack.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     1.62   Ramp cards: 0   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.84 adj [MV 1.62 vs 2.5, 4 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  B  demand  45.5%  prod  56.2%  gap -10.7pp  [OK]
  R  demand  54.5%  prod  56.2%  gap  -1.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
deck_size_40                     PASS — 24 nonland + 16 land
sideboard_10                     PASS — 5 names x2
copy_limits_main_plus_side       PASS — commons/uncommons capped at 2, rares/mythics at 1; verified with cube_search.get_max_copies against working_pool copy counts. Basics exempt: 7 Swamp, 7 Mountain.
rare_mythic_cap_6                PASS — 2/6 used (Weapons Manufacturing, Rust Harvester; both mainboard). 4 unspent; the sideboard is all commons and uncommons. Challenger finding 6 spent one of the five idle slots.
colour_usability                 PASS — effective_cost.best_mode(card, ['B','R'], []) returned a non-None cast mode for all 19 distinct nonland names.
splash_cap                       PASS — splash_colors is empty and 0 cards have a colour identity outside {B,R,colourless}.
only_from_excluded               PASS — card_pool_rules.only_from and .excluded are both empty; every name resolves in working_pool.json.
mainboard_40                     PASS — 24 spells + 16 lands = 40
sideboard_10                     PASS — 10 cards
no_external_links                PASS — card names are plain text; zero links in this file
```
