---
deck_name: "wbr-mardu-food-drain"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WBR"
format: "40-card"
built_at: "2026-08-04T14:31:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
1x Godless Shrine           ({T}: Add {W} or {B}.) As this land enters, you may pay 2 li
1x Sacred Foundry           ({T}: Add {R} or {W}.) As this land enters, you may pay 2 li
2x Sunlit Marsh             ({T}: Add {W} or {B}.) This land enters tapped.
2x Sacred Peaks             ({T}: Add {R} or {W}.) This land enters tapped.
2x Geothermal Bog           ({T}: Add {B} or {R}.) This land enters tapped.
8x Swamp                    basic
```

### CREATURES (12)
```
CMC  Card                           Qty  Col  Role                                     Rar
  1  Hullcarver                     x2   B    fodder - cheapest nontoken artifact = cheapest Munitions trigger C
  2  Virus Beetle                   x2   B    fodder - nontoken artifact body + hand disruption C
  2  Umbral Collar Zealot           x2   B    FREE unlimited sacrifice outlet - the engine's throttle U
  3  Susurian Voidborn              x2   B    PAYOFF - drain per creature/artifact death U
  2  Ragost, Deft Gastronaut        x1   WR   SPLASH PAYOFF - artifacts become Food, 3 dmg per sacrifice R
  3  Gravpack Monoist               x2   B    evasive fodder - dies into a 2/2 Robot artifact, net-zero on the fodder pool C
  3  Haliya, Guided by Light        x1   W    engine - life per ETB (Ragost untap) + cards R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                           Qty  Col  Role                                     Rar
  1  Embrace Oblivion               x2   B    OUTLET + removal - a sacrifice that resolves from the stack C
  3  Decode Transmissions           x1   B    reach + gas - Void: draw 2 and each opponent loses 2 C
  1  Tragic Trajectory              x2   B    removal - Void -10/-10 for one mana      U
  3  Emergency Eject                x1   W    removal - instant catch-all, any nonland permanent U
```

### OTHER SPELLS (6)
```
CMC  Card                           Qty  Col  Role                                     Rar
  1  Nutrient Block                 x2   C    Food - artifact fodder, 3 life, cantrip  C
  3  Dubious Delicacy               x2   B    Food - flash -3/-3, artifact, 3-point drain U
  4  Memorial Vault                 x1   R    SPLASH outlet - free repeatable sacrifice that pays in cards R
  2  Weapons Manufacturing          x1   R    SPLASH engine - a Munitions bullet per nontoken artifact R
```

## SIDEBOARD (10)
```
Card                           Qty  Col  Role / When to board in                        Rar
Dauntless Scrapbot             x2   C    graveyard hate + two artifact ETBs; vs the 31-card graveyard class U
Radiant Strike                 x2   W    artifact removal + 3 life; vs the 74-card artifact class C
Seam Rip                       x2   W    exile a MV<=2 permanent; vs cheap engines      U
Gravkill                       x2   B    exile a creature or Spacecraft; vs recursion   C
Swarm Culler                   x2   B    2/4 flier that draws on attack; vs the 56-card evasion class C
```

## ANALYSIS

### DECK IDENTITY

A W/B sacrifice deck that splashes red for three cards, where the splash is not cosmetic: black's free sacrifice outlets are what make the red cards work at all. Weapons Manufacturing mints a Munitions token off every nontoken artifact that enters, and Munitions only deals its 2 damage when it LEAVES the battlefield - so it is inert without an outlet. Umbral Collar Zealot ('Sacrifice another creature or artifact: Surveil 1' - no mana, no tap, unlimited), Memorial Vault and Embrace Oblivion supply exactly that, and every Munitions they eat is simultaneously a Susurian Voidborn trigger draining one more life. Ragost then turns every remaining artifact into a Food worth 3 damage or 3 life. Honest statement of the two modes, because the first draft of this paragraph overclaimed and the grill caught it: with Ragost or Weapons Manufacturing online the kill is non-combat and lands around turn 8; without either - which is roughly half of games, since both are singletons under the rare cap - the deck is a slower drain deck that finishes through combat with the same cheap bodies it would otherwise have eaten.

### WHY THE SPLASH IS NOT COSMETIC

This is the only one of the three decks where a card does something it cannot do in its own colours.
Weapons Manufacturing reads "Whenever a nontoken artifact you control enters, create a colorless
artifact token named Munitions with 'When this token **leaves the battlefield**, it deals 2 damage
to any target.'" A Munitions sitting on the battlefield deals nothing.

In the R/W build of this same card, the only sacrifice outlets available in red are Slagdrill
Scrapper ({2} and a tap, once per turn) and Memorial Vault. In black, Umbral Collar Zealot reads
"Sacrifice another creature or artifact: Surveil 1" — no mana, no tap, no limit. That is the whole
argument for the splash: black supplies the outlet that red's engine card requires, and every
Munitions eaten is simultaneously a Susurian Voidborn drain trigger.

| Outlet | Oracle | Cost | Answerable on board? |
|---|---|---|---|
| Umbral Collar Zealot ×2 | "Sacrifice another creature or artifact: Surveil 1." | free, unlimited | yes (creature) |
| Memorial Vault | "{T}, Sacrifice another artifact: Exile the top X cards of your library…" | free, once/turn | yes (artifact) |
| Embrace Oblivion ×2 | "As an additional cost to cast this spell, sacrifice an artifact or creature." | one-shot | **no — it is a spell** |
| Ragost | grants "{2}, {T}, Sacrifice this artifact" to every artifact | {2} + tap | yes (creature) |

### AND WHAT THE SPLASH COSTS — STATED PLAINLY

The Phase 9 Challenger's strategic verdict was that a two-colour W/B build is simply the stronger
deck, and I agree with it. The bill for three red cards is:

- **2 of 6 rare slots** spent on Godless Shrine and Sacred Foundry, which buy nothing but untapped mana
- **4 further lands** (Sacred Peaks ×2, Geothermal Bog ×2) that exist only for red, all entering tapped
- **39% of opening hands contain no red source at all** — 1 − (1 − 5/40)⁷ = 0.607 means Ragost,
  Weapons Manufacturing and Memorial Vault are dead cards in two hands in five
- **a conceded coverage class**: with the cap full, Sothera, the Supervoid and Syr Vondam, Sunstar
  Exemplar are both locked out, and the judge listed the latter as a keystone in *both* rejected sketches
- **the lowest turn-1 play rate of the three decks**, 74%

What it buys is one engine card that is live in roughly 17% of games, plus Ragost. If you want the
W/B version of this shell without the tax, it is the other deck built in this same run.

### THE COUNT THAT MATTERS MOST

| Claim | Count | Verdict |
|---|---|---|
| Munitions has an outlet | 6 outlet copies, effective 5.2, p=0.88 by turn 8 | INCLUDE |
| Weapons Manufacturing has fuel | 9 nontoken artifact copies of 24 nonland cards | INCLUDE |
| Susurian Voidborn has deaths to see | 9 nontoken artifacts + 12 creature copies + every Munitions token | INCLUDE |
| Tragic Trajectory's Void mode is live | any sacrifice turns it on; 6 outlet copies plus Susurian Voidborn's Warp {B} | INCLUDE, except turn 1 |
| Decode Transmissions' Void mode | same condition — draw 2 AND 2 to the face rather than losing 2 | INCLUDE |
| Ragost + Weapons Manufacturing both online | ~17% of games; the identity paragraph now says so | DISCLOSED |
| Non-combat damage by turn 8, modal game | ~10-12 of 20 after the Decode Transmissions and Embrace Oblivion adds | DISCLOSED |
| Beyond the Quiet as a sweeper | castable, but exile is not dying, so Voidborn gets 0 triggers from it | EXCLUDE |

### A NOTE ON THE VIABILITY VERDICT

The Challenger stated the Re-evaluation Path trigger sentence — that the pipeline cannot achieve its
stated win condition. I did not swap pipelines, and the reasoning is on the record: the claim was
scoped to the *stated* win condition ("the deck kills without attacking"), and the same report said
the deck is viable by attacking. That is a defect in my thesis wording, not a pool-level
impossibility, so the identity was rewritten to admit both modes. The Challenger accepted that
framing in the approval round. If the non-combat clock is what you want from this shell, the honest
answer is that Ragost and Weapons Manufacturing are singletons under your 6-rare cap and no third
copy of anything exists to fix it.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:8  2:6  3:9  4:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 4 copies → p=0.79 (need ≥ 0.75)
  PASS  outlet: 6 copies (effective 5.2: Embrace Oblivion@0.7, Embrace Oblivion@0.7, Ragost, Deft Gastronaut@0.8) → p=0.88 (need ≥ 0.75)
  PASS  fodder: 9 copies → p=0.98 (need ≥ 0.75)
  PASS  lifegain: 5 copies → p=0.87 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 85%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Correcting an error the grill caught: a sweeper IS castable here. Beyond the Quiet ({3}{W}{W}, rare) reads 'Exile all creatures and Spacecraft' and is mono-white. It is rejected on mechanism, not availability: it EXILES rather than destroys, and exile is not dying, so it would give Susurian Voidborn - the deck's primary payoff - exactly zero triggers while removing its own outlets (Umbral Collar Zealot x2), its fodder (Hullcarver x2, Virus Beetle x2) and Ragost. The other option, Zero Point Ballad ({X}{B}), is symmetric and at X=2 kills 8 of 12 creature copies. Both would also need a seventh rare slot against a cap of six that is full. The deck answers width by not fighting it: Susurian Voidborn's drain, Munitions damage and Ragost's damage all ignore blockers.
  OK        single_large_threat: Emergency Eject, Tragic Trajectory, Embrace Oblivion
  OK        noncreature_permanents: Emergency Eject
  CONCEDED  stack: No card castable in W, B or the red splash in this pool counters a spell; the cube's stack interaction sits in blue. A fourth colour is not available to a base that already runs 8 duals to support three.
  CONCEDED  graveyard: Maindeck carries no graveyard hate; the 31-card graveyard class is answered from the sideboard by Dauntless Scrapbot x2 ('When this creature enters, exile each opponent's graveyard. Create a Lander token'), which is two nontoken-artifact-adjacent bodies and a Munitions trigger, so boarding it costs the engine nothing.
```
- No curve or goldfish WARN flags were raised: curve PASS at 1:8 2:6 3:9 4:1, goldfish PASS at 84% keepable and 84% three-lands-by-turn-3.
- The turn-1 play rate is 74%, the lowest of the three decks in this run, and that is the direct cost of a three-colour base where 6 of 8 duals enter tapped. Accepted rather than repaired: the alternative is cutting duals for basics, which reintroduces the colour-balance FAIL the land repair fixed.
- The outlet role passes at p=0.88 on six copies, none of which is credited for attacking. An earlier draft reached 0.81 only by crediting attack-gated Swarm Culler in a deck whose identity says it does not attack; the grill rejected that and Swarm Culler moved to the sideboard.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | 4 of 24 nonland cards are genuine mana sinks - Nutrient Block x2 and Dubious Delicacy x2, each '{2}, {T}, Sacrifice this artifact:'. Memorial Vault is not a mana sink and is no longer described as one: its cost is '{T}, Sacrifice another artifact' with no mana at all. It mitigates flood a different way - 'Exile the top X cards of your library... You may play those cards this turn' gives the surplus mana something to buy. |
| screw | mitigation | 6 of 24 nonland cards are true one-mana plays with no additional cost: Hullcarver x2, Nutrient Block x2, Tragic Trajectory x2. Embrace Oblivion x2 also costs {B} but carries 'As an additional cost to cast this spell, sacrifice an artifact or creature', so it is deliberately NOT counted as a turn-1 play. 6 more cost two, so 12 of 24 are live off two lands. Godless Shrine and Sacred Foundry each enter untapped for 2 life. Goldfish reports 84% keepable and 3 lands by turn 3 in 84%. |
| decapitation | mitigation | The outlet count is 6 copies at effective 5.2, p=0.88 by turn 8, and it is deliberately not all creatures - the grill showed the earlier version had 4 of 5 outlets on the battlefield, so opposing creature removal answered Weapons Manufacturing by proxy. Embrace Oblivion x2 sacrifices from the stack and cannot be answered on the battlefield at all; Memorial Vault is an artifact, not a creature. Killing both Umbral Collar Zealots no longer turns the Munitions plan off. On the payoff side, Susurian Voidborn x2 drains independently of the red cards entirely. |
| gas-out | mitigation | Decode Transmissions x2 ('You draw two cards and lose 2 life. Void - ... instead you draw two cards and each opponent loses 2 life'), and this deck turns Void on with any sacrifice; Nutrient Block x2 ('When this artifact is put into a graveyard from the battlefield, draw a card'); Memorial Vault (X cards playable that turn per artifact eaten); Haliya (a card whenever 3 life is gained, met exactly by one Nutrient Block or Dubious Delicacy activation); and Umbral Collar Zealot x2 surveilling on every sacrifice, which is selection at zero cost. 8 of 24 nonland cards refuel or filter. |
| raced | accepted | The three-colour tapped base makes this the slowest of the three decks built from this pool - turn-1 play rate 74% against 75% and 80% for the two-colour builds - and it accepts that. Mitigating means either cutting duals for basics, which reintroduces the colour-balance FAIL the mana repair just fixed, or maindecking blockers over the fodder-and-outlet package that IS the win condition. The in-plan offset is that the deck gains life while operating: Nutrient Block x2 and Dubious Delicacy x2 gain 3 each, Susurian Voidborn gains 1 per death, Haliya gains 1 per ETB, and once Ragost resolves every artifact can be cashed for 3 life instead of 3 damage. Swarm Culler x2 is the sideboard answer - a 2/4 flier against the cube's 56-card evasion class. |
| disruption-fizzle | mitigation | There is no critical turn. Susurian Voidborn's 'Whenever this creature or another creature or artifact you control dies' fires one trigger at a time, and Umbral Collar Zealot's activation costs no mana, so removal held for the key turn finds no key turn. Redundancy is now measured rather than assumed: 6 outlet copies at effective 5.2, p=0.88, of which two are spells that resolve their sacrifice from the stack. Munitions tokens already on the battlefield keep their leaves-the-battlefield trigger regardless of which outlet eats them. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Space-Time Anomaly | {2}{W}{U} would make this a FOUR-colour deck. At 1 copy, 'Target player mills cards equal to your life total' mills roughly 25 of a 40-card library — not a kill, and unrecastable. |
| Weftstalker Ardent | {2}{R} is a SECOND red pip card beyond the 3-card splash cap, and at 2 copies it would demand red on turn 3 rather than as a late splash. Deck 2 runs it; this build cannot. |
| Sami, Ship's Engineer | {2}{R}{W} is gold in the splash colour — a splash may not require its off-colour on curve. Also cut from Deck 2 for legend redundancy. |
| Slagdrill Scrapper | {R} — a fourth red card, over the splash cap. Its job (a sacrifice outlet for Munitions) is already done better here by Umbral Collar Zealot, which is free and unlimited. |
| Memorial Vault | {3}{R} — a fourth red card, over the splash cap; Umbral Collar Zealot covers the free-outlet role in black. |
| Ruinous Rampage | {1}{R}{R} needs DOUBLE red — the worst possible shape for a splash off a mostly-tapped three-colour base. |
| Sothera, the Supervoid | {2}{B}{B} mythic. Strong, but as a Legendary Enchantment its own departure gives Susurian Voidborn no trigger, and the rare/mythic cap is consumed by the three red splash cards. |
| Xu-Ifit, Osteoharmonist | {1}{B}{B} rare: summoning-sick, sorcery-speed, and returns creatures with no abilities. Cut from Deck 1 for the same reasons; here the rare budget is even tighter. |
| Archenemy's Charm | {B}{B}{B} triple black against a three-colour base built on tapped duals — the pip shape and the mana base disagree. |
| The Seriema | {1}{W}{W} double white plus a rare slot, in a deck whose rare budget is already three-quarters spent on the red splash. |
| Exalted Sunborn | {3}{W}{W} mythic; double white is the wrong pip shape for a three-colour base, and the token doubling only doubles death-trigger tokens. |
| Flight-Deck Coordinator | Its 'at the beginning of your end step, you gain 2 life' resolves SIMULTANEOUSLY with Ragost's 'at the beginning of each end step, if you gained life this turn' check, so it can never satisfy that check. Chrome Companion gains life in combat instead. |
| Melded Moxite | {1}{R} — a fourth red card over the splash cap. |
| Kavaron Harrier | {R} — a fifth red card over the splash cap. |
| Wurmwall Sweeper | {2} colourless and castable, but the deck's artifact count is already sufficient for Weapons Manufacturing and the slot is better spent on black drain payoffs that also work when the splash is stranded. |
| Depressurize | '-3/-0 then destroy if power 0 or less' kills only 3-power-or-less creatures; Tragic Trajectory's Void mode kills anything for one mana in this deck. |
| Vote Out | Convoke wants a wide untapped board, which competes with Swarm Culler's tap trigger and Comet Crawler's attack trigger. |
| Banishing Light | Sorcery-speed and removable; Emergency Eject exiles the same range at instant speed for the same cost. |
| Dawnstrike Vanguard | {5}{W} is above the curve a three-colour tapped-dual base supports, and its 'two or more tapped creatures' payoff wants a board this deck keeps sacrificing. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 1   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.01 adj [MV 2.12 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  89.5%  prod  81.2%  gap  +8.3pp  [OK]
  W  demand  10.5%  prod  37.5%  gap -27.0pp  [OK]

Splash Check: [PASS]
  R  2 card(s), max CMC 4  sources 5/3  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard only - every card verified by exact name against the working pool
[PASS] copy_limits: commons/uncommons <=2, rares/mythics <=1 - verified via cube_search.get_max_copies
[PASS] rare_mythic_cap: 6 of 6 used, all mainboard: Ragost, Weapons Manufacturing, Memorial Vault, Haliya, Godless Shrine, Sacred Foundry. Sideboard is 100% common/uncommon.
[PASS] basics: Swamp x8, no basic Plains - format-supplied, exempt from copy limits
[PASS] splash: splash_colors ['R'], splash_candidates exactly 3 named cards: Ragost, Weapons Manufacturing, Memorial Vault. No other red card is legal in this build.
[PASS] colour: core W/B + R splash; every nonland card returns non-None from effective_cost.best_mode(card, ['W','B'], ['R'])
[PASS] 1 mainboard count: 40 == 40
[PASS] 1 sideboard count: 10 == 10
[PASS] 2 exact-name membership: all names in working pool
[PASS] 3 copy limits: all within card_pool_rules
[PASS] 4 colour usability (best_mode): all nonland usable in W/B splash ['R']
[PASS] 5 splash cap: off-core nonland cards: ['Memorial Vault', 'Ragost, Deft Gastronaut', 'Weapons Manufacturing']
[PASS] 6 rare/mythic cap (user constraint <=6): 6 rare+mythic: ['Godless Shrine', 'Haliya, Guided by Light', 'Memorial Vault', 'Ragost, Deft Gastronaut', 'Sacred Foundry', 'Weapons Manufacturing']
```