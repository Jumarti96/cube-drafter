---
deck_name: "br-goblin-go-wide"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BR"
format: "40-card"
built_at: "2026-08-10T00:12:15Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x8  Mountain        Land  [C]
x6  Swamp           Land  [C]
x2  Geothermal Bog  Land (BR dual, tapped)  [C]
x1  Blood Crypt     Land (untapped-capable BR dual)  [R]
```

### CREATURES (17)

```
CMC  Card                                               Qty  Color  Role
  1  Bile-Vial Boggart                                  x2   B      One-drop Goblin body; its death puts a -1/-1 counter on ANY creature  [C]
  1  Mudbutton Cursetosser                              x2   B      One-drop 2/1 attacker + removal on death  [U]
  2  Boggart Prankster                                  x2   B      Payoff: free per-combat pump  [C]
  3  Eclipsed Boggart                                   x2   BR     Goblin body + refuel (87.5% hit rate)  [U]
  3  Elder Auntie                                       x2   R      Two Goblin bodies per card  [C]
  3  Grub, Storied Matriarch // Grub, Notorious Auntie  x1   C      Menace attacker + free extra attacker each combat  [R]
  3  Retched Wretch                                     x2   B      Counter sink: returns as a fresh 4/2 Goblin  [U]
  4  Boneclub Berserker                                 x2   R      Payoff: scaling finisher  [C]
  4  Sourbread Auntie                                   x2   R      Three Goblin bodies per card  [U]
```

### INSTANTS & SORCERIES (4)

```
CMC  Card            Qty  Color  Role
  1  Cinder Strike   x2   R      Interaction (blight-costed; the counter goes on Retched Wretch)  [C]
  2  Giantfall       x1   R      Interaction: scaling fight removal / artifact answer  [U]
  5  Grub's Command  x1   BR     Payoff: alpha strike  [R]
```

### OTHER SPELLS (2)

```
CMC  Card              Qty  Color  Role
  3  Boggart Mischief  x2   B      Two tokens + drain on every Goblin death  [U]
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Role / When to board in
Sear                  x2   R      Hate: the blocker the board cannot attack through — vs decks with 4-toughness ground blockers  [U]
Boggart Cursecrafter  x2   BR     Flex: deathtouch blocker + reach — vs faster aggro, where a 2/3 deathtouch brake beats a fourth token maker  [U]
Giantfall             x1   R      Hate: artifacts (second copy) — vs Equipment or mana-rock decks (11 artifacts, 4.2% density)  [U]
Hexing Squelcher      x1   R      Flex: team-wide ward tax — vs removal-dense decks, where taxing every answer 2 life shortens their own clock  [R]
Tweeze                x2   R      Flex: removal or reach — vs X/3 blockers, or when the last 3 damage must come from a spell  [C]
Rooftop Percher       x2   C      Hate: graveyard — vs recursion decks - 39 graveyard-interaction cards, 15.0% of the cube; changeling also makes it a Goblin for Boneclub Berserker's count  [C]
```

## ANALYSIS

### DECK IDENTITY

BR Goblins built as a go-wide aggro deck. Every slot is a Goblin body, a card that makes more than one Goblin body, or a way to convert those bodies into damage. Boneclub Berserker is the finisher — it gets +2/+0 for each other Goblin you control, so a board of four other Goblins makes it a 10/4 — and Boggart Prankster adds a free +1/+0 to an attacking Goblin every combat. Grub's Command is the alpha strike: team +1/+1 and haste, plus a copy of the best Goblin or a removal spell. The build declines the blight engine the drain deck runs on: with zero sacrifice outlets in this cube, blight means putting -1/-1 counters on your own creatures, which subtracts from the exact board count this deck scales on. The one exception is Retched Wretch, the pool's only card that WANTS the counter — it returns to the battlefield when it dies having carried one.

### HOW THE ENGINE WORKS

The scaling is multiplicative, not additive, and that is why this build refuses the blight engine Deck A is built on.

Each new Goblin does three things at once: it attacks for its own power, it gives every Boneclub Berserker +2/+0, and it becomes a legal target for Boggart Prankster's free +1/+0. So the fourth Goblin on the board is not worth 1 damage — with one Berserker out it is worth 3, and with two Berserkers 5.

| Other Goblins on board | Boneclub Berserker | Swing with 1 Berserker + Prankster |
|---|---|---|
| 2 | 6/4 | 6 + 2 + 1 = 9 |
| 4 | 10/4 | 10 + 4 + 1 = 15 |
| 5, with Grub's Command | 12/5 | 13 + five bodies at +1 each + haste = lethal from 20 |

The one blight card the deck keeps is Retched Wretch, and it is kept for the opposite reason to everything else: 9 of the 23 nonland cards generate a -1/-1 counter as a cost, and Retched Wretch is the only card in the pool whose oracle text wants to receive one — 'if it had a -1/-1 counter on it, return it to the battlefield'. One card turns nine cards' worth of self-inflicted cost into a second 4/2 Goblin body, and it unlocks Cinder Strike's paid mode, taking that spell from killing 39.5% of the pool's creatures to 79.6%.

### COUNT-DEPENDENT VERDICTS

- Boneclub Berserker reads 'This creature gets +2/+0 for each other Goblin you control.' Goblin creature CARDS in this mainboard: Bile-Vial Boggart x2, Mudbutton Cursetosser x2, Boggart Prankster x2, Elder Auntie x2, Grub x1, Retched Wretch x2, Eclipsed Boggart x2, Sourbread Auntie x2, Boneclub Berserker x2 = 17 of the 23 nonland cards. Goblin TOKENS creatable: Elder Auntie 1 each (2), Sourbread Auntie 2 each (4), Boggart Mischief 2 each (4) = 10. Total 27 Goblin bodies. INCLUDE.
- Boggart Prankster reads 'Whenever you attack, target attacking Goblin you control gets +1/+0 until end of turn.' Same 27-body denominator; it has a legal target on every attack this deck makes. INCLUDE.
- Eclipsed Boggart reads 'look at the top four cards of your library. You may reveal a Goblin, Swamp, or Mountain card from among them and put it into your hand.' Hits in THIS deck: 20 Goblin cards (17 Goblin creature cards plus Boggart Mischief x2 and Grub's Command x1) plus 17 lands that all carry the Swamp or Mountain type (6 Swamp, 8 Mountain, and Blood Crypt and Geothermal Bog x2 are each printed 'Land - Swamp Mountain') = 37 of 40 cards, 92.5%. INCLUDE.
- Retched Wretch reads 'When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield.' Cards in this list that can put a counter on it: Cinder Strike x2 (optional blight), Sourbread Auntie x2, Boggart Mischief x2, Grub's attack trigger, and Bile-Vial Boggart x2 on death = 9 of the 23 nonland cards. This is exactly the count the Phase 9 Challenger raised — nine cards generating a -1/-1 counter with no home — and Retched Wretch is the home. INCLUDE.
- Mudbutton Cursetosser's additional cost is 'behold a Goblin or pay {2}'. Goblin CARDS in the 40: 20. The probability that a seven-card hand containing a Cursetosser holds no other Goblin card is roughly 1%, so the cost is fed and the {2} tax is essentially never paid. INCLUDE.
- REJECTED BY COUNT — Collective Inferno ('Convoke ... Double all damage that sources you control of the chosen type would deal'): naming Goblin would double 17 of the 23 nonland cards, and convoke means the wide board discounts the {3}{R}{R}. It is rejected anyway because it deals no damage on the turn it resolves, and against a thesis turn of 6 an enchantment that must survive a turn is one turn slower than the plan. It was the finisher of a rejected build.
- REJECTED BY COUNT — Sting-Slinger ('{1}{R}, {T}, Blight 1: deals 2 damage to each opponent'): its cost taps a Goblin AND removes a body, so each activation costs Boneclub Berserker 2 power and Boggart Prankster a target — roughly 2 board damage traded for 2 face damage while shrinking the finisher.

### SLOT ALLOCATION

| Slot | Count | % | Rationale |
|---|---|---|---|
| lands | 17 | 42.5% | computed by deck_audit.land_target from avg MV 2.609 and accel 0; raw target 17.15 rounds to 17. The pre-repair list sat at 16 because Impolite Entrance x2 counted as cantrips; the Phase 9 Challenger showed Impolite Entrance is uncastable with no creature on the battlefield, both copies were cut, accel fell to 0, and the count moved to 17. |
| interaction | 3 | 13.0% | Cinder Strike x2 and Giantfall x1 — inside the Aggro 10-15% band. Giantfall replaced Boulder Dash on a reproduced count: Boulder Dash's 2-damage half kills 39.5% of the pool's creatures, while Giantfall ('Target creature you control deals damage equal to its power to target creature an opponent controls') kills 79.6% off any 4-power body and 91.4% off a 6-power one, and this deck's own bodies reach 10 power. |
| threats_payoffs | 16 | 69.6% | Above the Aggro 45-55% band on the judge-credited grounds that a bare 1/1 Goblin token is not filler here — it is a +2/+0 pump on Boneclub Berserker and a legal Boggart Prankster target. The Aggro bands sum to only 55-80% of nonland cards, so the unassigned residual collapses into Threats/Payoffs. |
| engine_infra | 4 | 17.4% | Eclipsed Boggart x2 (refuel: it reveals a Goblin, Swamp or Mountain card from the top four, and 37 of this deck's 40 cards qualify) and Retched Wretch x2 (the counter sink that makes the deck's own blight costs free). Above the 0-10% band; the grounds are that both are also Goblin bodies, so the slot is double-counted work rather than a separate engine package. |

### MANA DERIVATION

- Land target after FILL: {"base_lands": 17, "avg_mv": 2.609, "accel": 0, "adjustment": 0.145, "raw_target": 17.145, "clamped": false, "recommended_land_count": 17, "p_window_at_recommended": 0.7945}
- Deviation: none — built to 17, the post-repair recommendation.
- Composition: Only 2 of the 17 lands enter tapped (Geothermal Bog x2); Blood Crypt is untapped for 2 life, which an aggro deck pays without hesitation. Evolving Wilds is excluded even though 2 copies are legal: it fetches a basic TAPPED, and this list has 6 one-drops.
- Pips: {"B": 11, "R": 12} → B 47.8% / R 52.2%
- Sources: 6 Swamp + Blood Crypt + Geothermal Bog x2 = 9 black sources (52.9% of 17); 8 Mountain + Blood Crypt + Geothermal Bog x2 = 11 red (64.7%). Both colours are over-served relative to demand, which is correct for a deck with {B} one-drops and a {2}{R}{R} four-drop that must both land on curve.
- Data gap: Grub, Storied Matriarch // Grub, Notorious Auntie has mana_cost null in the enriched data (transforming DFC, cmc 3.0, colour identity B,R); its pips are excluded rather than guessed.

### BUILD SELECTION (Phase 5B sketch → judge → lock)

**Archetype family:** aggro — default_role is 'aggressor' with a goldfish turn of 6, and the include-candidate list is body-dense with only four dedicated answer cards — not the interaction-heavy two-drop curve that would make it tempo.

**Chosen lens:** lowest-curve / most explosive

**Judge grounds:** It is the only build whose entire shape is the thesis sentence 'Goblin tokens are the clock' — every keystone is either the earliest possible Goblin body or a free/near-free attack enabler feeding Boneclub Berserker's +2/+0 for each other Goblin, so board count and lethal arrive on the same axis by turn 6 with no second card required.

**Rejected builds:**

- *most reach & evasion* (23 nonland: Interaction 17%/4, Threats-Payoffs 74%/17, Engine 9%/2) — Judge: Collective Inferno with convoke is a genuinely thesis-grounded finisher, but the rationale openly assumes the ground will stall and routes half the kill through blocker-irrelevant drip (Sting-Slinger, Boggart Cursecrafter), which is an inevitability plan rather than the assigned aggressor role at goldfish 6.
- *most resilient to sweepers and removal* (24 nonland: Interaction 12.5%/3, Threats-Payoffs 54.2%/13, Engine 33.3%/8) — Judge: its own grounds defeat it — it concedes the cube has only 2 sweepers (0.77%), then spends a 33.3% Engine slot (8 cards against 13 threats) insuring against the thing it just called nearly absent, collapsing the Threats count that Boneclub Berserker's damage is literally a function of and pushing the clock past turn 6.

**Weak keystones flagged by the judge, and their resolution:**

- **Chaos Spewer** — flag: Assigned 'three-mana oversized body, most explosive rate in the slice', but 'you may pay {2}. If you don't, blight 2' makes it either a five-mana 5/4 or a 5/4 arriving with two -1/-1 counters — and this build's own logic cut Gutsplitter Gang for exactly that reason. Resolution: RESOLVED BY REPLACEMENT. Chaos Spewer is absent from the final list. The Phase 9 repair went further and added Retched Wretch x2, the pool's only card whose oracle text WANTS the counter ('if it had a -1/-1 counter on it, return it to the battlefield'), converting the build's blight problem into a resource.

**Harvested from rejected builds:**

- Grub, Storied Matriarch // Grub, Notorious Auntie (from *most reach & evasion*) — menace attacker whose attack trigger adds a free extra attacking body — a Threats/Payoffs body slot, not a new role
- Boggart Mischief (from *most resilient to sweepers and removal*) — a token generator that survives creature removal — a Threats/Payoffs slot
- Retched Wretch (from *most resilient to sweepers and removal*) — multi-body threat a single removal spell cannot answer — added during the Phase 9 repair as the counter sink

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:6  2:3  3:9  4:4  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies → p=0.92 (need ≥ 0.75)
  PASS  enabler: 14 copies (effective 13.6: Retched Wretch@0.8, Retched Wretch@0.8) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 71%  T2 90%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Cinder Strike, Mudbutton Cursetosser, Bile-Vial Boggart, Boggart Mischief
  OK        single_large_threat: Giantfall, Cinder Strike, Grub's Command
  OK        noncreature_permanents: Giantfall, Grub's Command
  CONCEDED  stack: Black and red contain no counterspells or stack interaction anywhere in this pool. Hexing Squelcher ('Spells you control can't be countered') exists in these colours but is protection for the deck's own spells rather than an answer to an opposing one, and it is held in the sideboard because a 2/2 that makes no token is below this build's body-per-card floor. The maindeck answer is the clock: a turn-6 aggro board forces an opposing controller to spend its interaction on creatures, not on the stack.
  CONCEDED  graveyard: Two BR-legal graveyard answers exist in the pool and both are declined for a stated mechanism cost: Rooftop Percher is a colourless five-drop, two mana above this deck's top end, so it is boarded rather than maindecked; Dawnhand Dissident ('{T}, Blight 2: Exile target card from a graveyard') costs two -1/-1 counters plus a tap per activation, which is the board count this deck's damage is a function of, and it would consume a rare slot.
```

- No WARN-tier flags returned. Curve PASS for aggro (1:6, 2:3, 3:9, 4:4, 5:1). Goldfish PASS: 86% keepable, 88% reaching three lands by turn 3, 71% with a turn-1 play.
- DISCLOSED DRIFT: implementing the Phase 9 Challenger's three BLOCKING findings (Retched Wretch, Eclipsed Boggart, and Giantfall over Boulder Dash) moved this build's average mana value from 2.33 to 2.61 and thinned the two-drop slot from 5 cards to 3. The locked lens was 'lowest-curve / most explosive', and the final list is less explosive than that lens intends. The trade was accepted because every finding was oracle-grounded and the Goblin body count rose from 26 to 27 while refuel went from 4 conditional cards to 2 unconditional 92.5% diggers; swapping Warren Torchmaster x2 back to Bile-Vial Boggart x2 recovered the one-drop count from 4 to 6.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Grub's two transform clauses ('At the beginning of your first main phase, you may pay {R} / {B}. If you do, transform Grub') are per-turn mana sinks that re-arm its attack-copy trigger, and Grub's Command at {3}{B}{R} is a five-mana outlet that pumps the team and destroys a permanent. Eclipsed Boggart x2 additionally converts a flooded draw into a card by revealing one of 37 hits from the top four. |
| screw | mitigation | Six of the 23 nonland cards cost one mana (Bile-Vial Boggart x2, Mudbutton Cursetosser x2, Cinder Strike x2) and only 2 of the 17 lands enter tapped. The goldfish sim reports 86% keepable hands, 71% with a turn-one play and 88% reaching three lands by turn 3. |
| decapitation | mitigation | Boneclub Berserker is the named finisher but it is not a single point of failure: 16 of the 24 nonland cards are Goblins and the damage comes from board width, so removing the Berserker removes a multiplier, not the clock. Hexing Squelcher's 'Other creatures you control have Ward—Pay 2 life' additionally taxes every removal spell aimed at the board by 2 life, in a matchup where the opponent's life total is the win condition. |
| gas-out | mitigation | Eclipsed Boggart x2 is unconditional refuel on a Goblin body — 37 of this deck's 40 cards are legal reveals, so it is effectively 'draw a card' stapled to a 2/3. Grub, Storied Matriarch returns a Goblin card from the graveyard on every transform back, against 20 Goblin cards in the list, and Grub's Command's fourth mode mills five and returns each Goblin card milled, which against 20/40 returns about 2.4 cards. |
| raced | mitigation | Boggart Mischief gains 1 life for every Goblin that dies, so the trades an aggro mirror forces move the race in this deck's favour; Mudbutton Cursetosser's death trigger destroys an opposing creature with power 2 or less, which is 46.0% of the pool's creatures. Boggart Cursecrafter x2 (2/3 deathtouch, 1 damage to each opponent per Goblin death) is boarded for the matchup. |
| disruption-fizzle | accepted | The maindeck has no protection and no stack interaction. Mitigating would mean maindecking Hexing Squelcher ('Spells you control can't be countered / Other creatures you control have Ward-Pay 2 life'), which costs a Threats/Payoffs slot for a 2/2 that makes no token and adds only one to Boneclub Berserker's count — below this build's body-per-card floor, in a deck whose damage is a function of that count. It is boarded instead. The plan's answer to interaction on the critical turn is that the damage comes from 4-6 separate bodies, so one removal spell mid-combat costs a fraction of the swing rather than the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Lasting Tarfire | 'At the beginning of each end step, if you put a counter on a creature this turn, this enchantment deals 2 damage to each opponent.' — 2 damage per turn is slower than a Goblin body in an aggro shell whose goldfish is turn 6; it belongs to the drain build, not this one. |
| Retched Wretch | 'When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield under its owner's control and it loses all abilities.' — a 4/2 that recurs only if it died with a -1/-1 counter, which requires spending a blight on it rather than pushing damage; the recursion is an attrition payoff, not a tempo one. |
| Shadow Urchin | Rare; 'Whenever this creature attacks, blight 1' is mandatory, so every attack shrinks one of your own creatures — a direct cost to a go-wide board. Its counter-death card advantage is a grind payoff. |
| Heirloom Auntie | 'This creature enters with two -1/-1 counters on it' — a 4/4 that arrives as a 2/2 and only grows when your own creatures die, which is the opposite of an aggro board's plan. |
| Scuzzback Scrounger | Rare 3/2 for two; its Treasure requires blighting a creature every turn, and against the 5-rare cap the aggro build prefers Grub's Command and Collective Inferno, which convert the board into damage rather than into mana. |
| Champion of the Weird | Rare 5/5 for {3}{B}, but 'behold a Goblin and exile it' removes a Goblin from the battlefield or hand as a cast cost — subtracting from the exact board count Boneclub Berserker and Collective Inferno scale on. |
| Taster of Wares | Rare; hand disruption scaling with Goblin count. Stripping a card does not add a body or push damage on a turn-6 clock. |
| Boldwyr Aggressor | 'Double strike / Other Giants you control have double strike' — a 2/5 double striker for five mana, but it is a Giant, so it adds nothing to Boneclub Berserker's Goblin count and its lord clause finds 0 other Giants in this list. |
| Lavaleaper | Rare; 'All creatures have haste' is symmetric and this deck already has Warren Torchmaster and Grub's Command for haste on the turns it matters; at four mana it adds no body to the board count. |
| Gathering Stone | 'Spells you cast of the chosen type cost {1} less to cast.' Naming Goblin would discount 15 or so of this deck's spells, but it costs {4} and adds no body — an aggro deck that spends turn four on a cost reducer has already lost the tempo the discount was meant to buy. |
| Dawn-Blessed Pennant | 'Whenever a permanent you control of the chosen type enters, you gain 1 life' — incidental lifegain does not advance a clock, and the recursion mode costs {2} plus the artifact. |
| Bogslither's Embrace | 'blight 1 or pay {3} ... Exile target creature' — the blight mode kills one of your own tokens, which is a real cost to a board-count deck; Sear answers the same creature for two mana without touching your board. |
| Soul Immolation | Mythic; 'deals X damage to each opponent AND EACH CREATURE THEY CONTROL' — it does not hit your own board, but blight X puts X counters on one of your creatures, and at five mana it is a turn this deck would rather spend attacking. |
| Spinerock Tyrant | Mythic 6/6 flier for five; a fine top end, but this list's curve is built to empty its hand by turn four and it is a Dragon, adding nothing to the Goblin count. |
| Meek Attack | Mythic; '{1}{R}: put a creature card with total power and toughness 5 or less from your hand onto the battlefield ... sacrifice that creature' at end step — it cheats bodies out but they leave at end of turn, so they add to the board count only during your own combat, and it needs a full hand this deck empties. |
| Mirrormind Crown | Rare Equipment; token-copy doubling for six total mana (cast plus equip) is two turns of not attacking. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.15 adj [MV 2.61 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  47.8%  prod  52.9%  gap  -5.1pp  [OK]
  R  demand  52.2%  prod  64.7%  gap -12.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
check1_mainboard_count: PASS (40/40)
check1_sideboard_count: PASS (10/10)
check2_membership: PASS
check3_copy_limits: PASS
check3b_rare_mythic_cap: PASS (4/5) [('Grub, Storied Matriarch // Grub, Notorious Auntie', 'rare'), ("Grub's Command", 'rare'), ('Blood Crypt', 'rare'), ('Hexing Squelcher', 'rare')]
check4_colour_usability: PASS
check5_splash: PASS (no splash colours declared)
```
