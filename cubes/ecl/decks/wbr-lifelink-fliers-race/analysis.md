---
deck_name: "wbr-lifelink-fliers-race"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WBr"
format: "40-card"
built_at: "2026-08-10T04:31:57Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  7x Plains                   Land
  3x Swamp                    Land
  2x Evolving Wilds           fetches any basic including the Mountain
  2x Sacred Peaks             RW dual: a red source for the Bre splash that also produces white; enters tapped
  2x Sunlit Marsh             WB dual, enters tapped
  1x Mountain                 the third red source for the Bre splash
```

### CREATURES (14)

```
CMC  Card                                       Qty   Color Role                                           Rar
  2  Abigale, Eloquent First-Year               x1    BW    2-mana flying first strike lifelink; its ETB … R
  2  Kinscaer Sentry                            x1    W     {1}{W} first strike lifelink; on attack it pu… R
  2  Scarblade Scout                            x2    B     2-mana lifelink; the cheapest way to have gai… C
  2  Wanderbrine Preacher                       x2    W     gains 2 life whenever it becomes tapped, so a… C
  3  Adept Watershaper                          x1    W     a 3/4 for three, and 'Other tapped creatures … R
  3  Flock Impostor                             x2    W     2/2 flash flier; the bounce mode re-uses an E… U
  3  Prideful Feastling                         x1    BW    2/3 lifelink body that Bre's tap ability turn… C
  4  Bre of Clan Stoutarm                       x1    RW    the cube's only 'if you gained life this turn… R
  4  Nightmare Sower                            x2    B     2/3 flying lifelink; each instant cast on the… U
  5  Eirdu, Carrier of Dawn // Isilu, Carrier … x1    W     5/5 flying lifelink top end; convoke discount… M
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                                       Qty   Color Role                                           Rar
  2  Nameless Inversion                         x2    B     2-mana instant that clears the one blocker in… U
  3  Crib Swap                                  x2    W     instant unconditional exile, size-blind        U
```

### OTHER SPELLS (5)

```
CMC  Card                                       Qty   Color Role                                           Rar
  1  Dawn-Blessed Pennant                       x1    C     a genuine turn-1 play that gains life WITHOUT… U
  1  Evershrike's Gift                          x2    W     1-mana aura granting flying, and it buys itse… U
  1  Springleaf Drum                            x2    C     taps an untapped creature for mana of any col… U
```

## SIDEBOARD (10)

```
Card                                       Qty   Color Role / When to board in                        Rar
Keep Out                                   x2    W     Modal instant — vs the cube's 21 enchantments… C
Spiral into Solitude                       x2    W     Toughness-blind removal — vs the 34 of 168 di… C
Blight Rot                                 x2    B     Instant — vs opposing evasive creatures (41 e… C
Liminal Hold                               x2    W     Universal answer — vs the 32 artifacts and en… C
Rooftop Percher                            x2    C     Graveyard hate on a 3/3 flier that also gains… C
```

## ANALYSIS

### DECK IDENTITY

WB Lifelink Fliers Race, splashing red for one card. Evasive lifelink bodies race the opponent while lifelink invalidates their race back. The single lifegain PAYOFF in the entire 282-card cube is Bre of Clan Stoutarm — 'At the beginning of your end step, if you gained life this turn, exile cards from the top of your library until you exile a nonland card. You may cast that card without paying its mana cost if the spell's mana value is less than or equal to the amount of life you gained this turn' — and it is {2}{R}{W}, which is the entire reason this build splashes a third colour on 3 dedicated sources. Its other ability, '{1}{W}, {T}: Another target creature you control gains flying and lifelink until end of turn', is the deck in miniature: it converts a ground body into both evasion and a lifegain trigger in one activation. Abigale, Eloquent First-Year does the same thing permanently, as counters.

### KEY MECHANICAL OBSERVATIONS

**This is the only one of the four WB decks that has a lifegain payoff at all, and the payoff costs red.** Both Phase 9 agents independently scanned all 277 cube cards for "gained life this turn" / "whenever you gain life" and returned exactly one hit: Bre of Clan Stoutarm, {2}{R}{W}. That single fact is why this deck splashes a third colour for one card, and why the other three builds in this set treat lifegain as a racing resource rather than an engine. The splash is not a preference — it is the archetype's only door.

**Bre's free-cast clause is a function of your own curve, not of your life total.** *"You may cast that card without paying its mana cost if the spell's mana value is less than or equal to the amount of life you gained this turn."* Gaining 2 life free-casts MV≤2, which is 13 of 23 nonland cards here; gaining 4 free-casts MV≤4, which is 22 of 23. A higher-curve lifegain deck would exile cards it could not cast. The 2.435 average mana value is what makes the payoff a payoff.

**The Sacred Peaks miss.** The first draft of this deck reasoned at length about how to support one red pip, considered and correctly rejected Eclipsed Realms, and never noticed that the cube contains a common RW dual — Sacred Peaks, two copies legal. The Phase 9 Challenger found it. Swapping 2 Mountain + 1 Plains for 2 Sacred Peaks + 1 Swamp held red at 3 sources while raising white from 10 to 11 and black from 4 to 5, and cut lands producing neither core colour from 3 of 17 to 1. Colour-balance gaps went from +7.9pp / +9.8pp to +2.0pp / +3.9pp. The price is two more tapped lands.

**Abigale is a trap card in her own deck.** *"When Abigale enters, up to one other target creature loses all abilities. Put a flying counter, a first strike counter, and a lifelink counter on that creature."* The ability-loss resolves first. Of 13 other creature copies, exactly 1 is strictly safe to target, 4 more are safe once their enters-the-battlefield trigger has already resolved, and 8 must never be targeted — pointing her at Kinscaer Sentry deletes the free-attacker trigger, at Wanderbrine Preacher deletes the deck's best non-combat lifegain, at Bre deletes the entire payoff. "Up to one" means aiming at nothing is legal, and against an opposing creature with a nasty static ability it is often the best line.

**The goldfish tool overstates this deck's speed and the record says so.** The structural check reports a 68% turn-1 play rate, but it counts Evershrike's Gift as a one-drop and that Aura reads "Enchant creature" — on an empty turn-1 board there is no legal target. The three genuinely castable turn-1 cards are Springleaf Drum ×2 and Dawn-Blessed Pennant, giving a true rate of 1 − C(37,7)/C(40,7) = 45%. Before the Phase 9 repair added the Pennant it was 32%. A deck with zero one-mana creatures also cannot activate a turn-1 Springleaf Drum before turn 3.

### COUNT-DEPENDENT VERDICTS

- Bre of Clan Stoutarm's end-step trigger checks 'if you gained life this turn'. Cards in this list that can switch it on: 8 lifelink copies (Abigale, Kinscaer Sentry, Eirdu, Nightmare Sower x2, Prideful Feastling, Scarblade Scout x2) plus the non-combat sources, Wanderbrine Preacher x2 ('Whenever this creature becomes tapped, you gain 2 life') and Dawn-Blessed Pennant ('Whenever a permanent you control of the chosen type enters, you gain 1 life'), plus Bre's own grant. Total 11 of the 23 nonland copies. The distinction that matters and that the pre-grill record blurred: 8 of those 11 require CONNECTING IN COMBAT. Only 3 copies gain life without combat -- Wanderbrine Preacher x2 (tap, including tapping it to Springleaf Drum) and Dawn-Blessed Pennant. Dawn-Blessed Pennant was added in the Phase 9 repair for exactly this reason.
- Bre's free-cast clause is capped at 'mana value less than or equal to the amount of life you gained this turn'. The curve is 1:5, 2:8, 3:6, 4:3, 5:1. Gaining 2 life free-casts MV<=2, which is 13 of 23 nonland cards; gaining 4 free-casts MV<=4, which is 22 of 23; only Eirdu at MV 5 is ever out of range. The low curve is what makes the payoff a payoff.
- Flying and evasion: 9 of the 23 nonland copies either have flying or grant it -- Abigale, Eirdu, Nightmare Sower x2, Flock Impostor x2 (6 flying BODIES), plus Evershrike's Gift x2 and Bre (3 grants). The pre-grill record said 11 and its own enumeration summed to 9; both my Proposer and the Challenger caught it independently. The corrected figure of 9 of 23, of which 6 are bodies, is what the conceded wide_boards coverage and the raced mitigation now rest on. Kinscaer Sentry's first strike is NOT counted as evasion -- it does not stop a chump block.
- Abigale's ETB reads 'up to one OTHER target creature loses all abilities. Put a flying counter, a first strike counter, and a lifelink counter on that creature.' Ability loss resolves first. Denominator: 13 other creature copies. Strictly safe (nothing of value lost): Prideful Feastling, whose entire text is 'Changeling / Lifelink' -- 1 of 13. Safe once their ETB has already resolved: Scarblade Scout x2 and Flock Impostor x2 -- a further 4, so 5 of 13 in practice. Never target: Kinscaer Sentry, Wanderbrine Preacher x2, Nightmare Sower x2, Adept Watershaper, Bre, Eirdu -- 8 of 13, each of which loses a load-bearing ability. Pointing at nothing is legal and often correct. This is a play-pattern constraint the decklist cannot express.
- The red splash: 1 card of 40 (Bre of Clan Stoutarm), 1 red pip, served by 3 red-producing lands (1 Mountain + 2 Sacred Peaks) that the audit counts, plus 2 Evolving Wilds and 2 Springleaf Drum that it does not -- 7 of 40 cards can produce the pip. Since the Sacred Peaks repair, only 1 of 17 lands produces neither core colour, down from 3.
- Springleaf Drum's cost is 'Tap an untapped creature you control', which competes with attacking, and a summoning-sick creature cannot pay it. The non-competing line is tapping Wanderbrine Preacher, whose own trigger then gains 2 life -- 2 of the 15 threat copies are that creature. Honest limit, raised by the Challenger and accepted: the deck has ZERO one-mana creatures, so a turn-1 Drum cannot be activated until turn 3 at the earliest.
- Evershrike's Gift's buyback is '{1}{W}, Blight 2: Return this card from your graveyard to your hand', and blight 2 puts two -1/-1 counters on a creature you control. Threat copies that survive two counters: Prideful Feastling (2/3), Nightmare Sower x2 (2/3), Adept Watershaper (3/4), Eirdu (5/5) -- 5 of 15. But the three that drop to 0/1 stop attacking and stop generating lifelink. Copies that can pay it and still function as a clock: 2 of 15 (Adept Watershaper, Eirdu). The buyback is a flooded-turn action, not a curve action, and both failure modes that name it now say so.
- Turn-1 plays: the structural goldfish reports 68%, but it counts Evershrike's Gift as a one-drop and that Aura reads 'Enchant creature' -- with an empty turn-1 board there is no legal target. The genuinely castable turn-1 cards are Springleaf Drum x2 and Dawn-Blessed Pennant, so the true rate is P(at least one of 3 in the opening seven) = 1 - C(37,7)/C(40,7) = 45%. Before the Phase 9 repair it was 32% on 2 copies. Stated because the pre-grill record used the tool's 59% as a load-bearing figure in two failure modes.
- Persist: this build runs Eirdu//Isilu but does NOT count persist as part of its plan. Isilu requires a 5-mana cast plus a {B} transform on a later first main phase -- turn 7 at the earliest against a goldfish turn of 6 -- and only 5 of 17 lands produce black. The front face is counted as a payoff (a 5/5 flying lifelink body); the back face is a bonus in games that go long.
- Adept Watershaper's 'Other tapped creatures you control have indestructible' applies to attackers automatically, since attacking taps them. Threat copies it protects once they attack: all 14 others. It also blanks the damage half of the cube's two sweepers (Ashling's Command, Soul Immolation) for the attacking half of the board. It does NOT cover removal held for the response to Bre's pre-combat activation, which is the residual cost the disruption-fizzle mode now states.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:5  2:8  3:6  4:3  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.5: Bre of Clan Stoutarm@0.7, Kinscaer Sentry@0.8) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 10 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 68%  T2 97%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: an aggro deck racing on evasion does not answer a wide board, it goes over it: 9 of the 23 nonland cards either fly or grant flying, of which 6 are flying bodies. Mitigating it properly would mean maindecking a sweeper, and the only one available in W/B (Darkness Descends) kills our own 1-to-3-toughness lifelink bodies.
  OK        single_large_threat: Crib Swap, Nameless Inversion, Adept Watershaper
  CONCEDED  noncreature_permanents: nothing in the mainboard answers an artifact or enchantment; Liminal Hold x2 is in the sideboard, and at 11.3% combined density a maindeck slot is worth more as a threat in a deck whose thesis turn is 6
  CONCEDED  stack: the pool contains no counterspell in W or B at all — every stack-interaction card in the cube is blue
  CONCEDED  graveyard: hate is sideboard-only (Rooftop Percher x2), which is also on-plan here since it is a 3/3 flier that gains 3 life
```

- curve, assembly, goldfish and coverage all returned PASS after the Phase 9 repair. The MV-4+ share is 4 of 23 = 17.4% against a 20% band maximum. The pre-grill record claimed this was 13%, which counted MV exactly 4 against a bound that reads '4+' -- corrected.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Bre's '{1}{W}, {T}: Another target creature you control gains flying and lifelink until end of turn' is a repeatable two-mana sink that also arms its own end-step trigger; Bre's end-step trigger then turns flooded turns into free spells off the top. Dawn-Blessed Pennant's '{2}, {T}, Sacrifice this artifact: Return target card of the chosen type from your graveyard to your hand' is a second sink that rebuys a card. Evershrike's Gift buys itself back for {1}{W} plus blight 2 -- qualified per the count above: only 2 of 15 threat copies can pay the blight and still function as a clock, so this is a flooded-turn action specifically, which is exactly the mode it is cited for. |
| `screw` | mitigation | 13 of the 23 nonland cards cost 2 or less. The honest turn-1 figure is 45%, not the 68% the goldfish tool reports -- the tool counts Evershrike's Gift as a one-drop and that Aura cannot be cast on an empty board. The three genuine turn-1 cards are Springleaf Drum x2 and Dawn-Blessed Pennant, the last of which was added in the Phase 9 repair precisely because the Challenger showed the deck had no real turn-1 play and that the Drum could not be activated before turn 3 in a list with zero one-mana creatures. Fixing: 6 of 17 lands fix or fetch (2 Sacred Peaks, 2 Sunlit Marsh, 2 Evolving Wilds), and the goldfish keepable rate is 87% with 88% three-lands-by-turn-3. |
| `decapitation` | accepted | Bre of Clan Stoutarm is a singleton and it is the ONLY card in the 277-card cube that reads 'if you gained life this turn' -- independently confirmed by both Phase 9 agents scanning the full pool. If it is answered on sight the deck loses its entire lifegain payoff and there is no redundancy to add, because none exists. Mitigating this would mean abandoning the locked pipeline. What the deck does instead is make the degraded state a real deck: without Bre it is still 9 evasive copies, 8 lifelink copies and a 2.435 average mana value -- a functioning WB fliers aggro deck that races. The payoff is the upside, not the plan. |
| `gas-out` | mitigation | Bre's end-step trigger is the primary refuel: on any turn the deck gained life it exiles down to a nonland card and either free-casts it or puts it in hand. Kinscaer Sentry converts a card in hand into a free extra attacker with no mana, and 14 of 23 nonland cards are creature cards, so its trigger has a target. Dawn-Blessed Pennant's sacrifice mode returns a card from the graveyard to hand. Evershrike's Gift recurs itself, subject to the blight-2 limit stated above. Recorded against it: the refuel rests on 5 copies of 23 (Bre, Kinscaer Sentry, Dawn-Blessed Pennant, Evershrike's Gift x2), three of which are singletons. |
| `raced` | mitigation | 8 lifelink copies of 23 nonland mean every point of our damage is two points of swing, and 9 copies fly or grant flying (6 of them flying bodies) so the damage connects through a stalled ground board. Adept Watershaper, added in the Phase 9 repair, makes the whole attacking team indestructible from declare-attackers on, which is what wins races against blocks and damage-based removal. The honest speed figure is a 45% turn-1 play rate and 97% by turn 2 -- the pre-grill record's 59% was the goldfish tool counting an uncastable Aura, and both Phase 9 agents caught it. |
| `disruption-fizzle` | accepted | the critical turn is the attack where Bre or Abigale grants evasion and lifelink. Removal held for the response to Bre's pre-combat '{1}{W}, {T}' activation blanks that turn entirely, because the grant is 'until end of turn' and killing the target wastes both the activation and the attack. This is stated narrowly on purpose: the pre-grill version claimed the pool contained 'no protection instant that this list can afford at its curve', and the Challenger refuted that with Rhys, the Evermore ({1}{W} flash) and Adept Watershaper ({2}{W}). Adept Watershaper is now in the deck and covers the post-declare-attackers window. What remains genuinely unmitigable is the pre-combat window: Watershaper's indestructible applies only to TAPPED creatures, and the target of Bre's activation is untapped when the activation resolves. Buying that window would cost a threat slot for a protection instant in a 15-threat aggro deck at a thesis turn of 6, and the pool contains no counterspell in W or B at all -- every stack-interaction card in the cube is blue. Redundancy of granters is what the deck buys instead: Bre and Abigale both grant lifelink, and Evershrike's Gift x2 grants flying only, so 2 of the 4 granters supply the lifelink the payoff needs. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Eclipsed Realms (land) | Naming Giant legally pays for Bre, who is a Giant Warrior — but the land produces only {C} for the other 22 nonland cards. Sacred Peaks does the same job while also producing white. |
| Bitterbloom Bearer (mythic) | A {B}{B} 1/1 flier making a 1/1 flier every upkeep. Double-black is a real cost on 5 black sources, and after the Phase 9 repair the rare/mythic cap is exactly full, so it would displace Adept Watershaper. |
| Timid Shieldbearer | Cut in the Phase 9 repair. Its {4}{W} team pump was the deck's only mana sink, but five mana is a whole turn in a deck with a thesis turn of 6, and the slot was better spent on Dawn-Blessed Pennant, which fixed a BLOCKING finding (no genuine turn-1 play). |
| Shore Lurker | A 3/3 flier for four. Cut before the grill to bring the MV-4+ share from 26% down under the aggro band maximum; Flock Impostor is the same evasive body one mana cheaper. |
| Reaping Willow / Goldmeadow Nomad / Personify | All rejected by the Phase 5B shape judge as grind cards in an aggro shell. Note a correction the Challenger forced: Personify IS an Instant, so my original 'no instant-speed timing' reason was wrong; it stays out because exiling and returning the creature as a new object erases Abigale's granted counters. |
| Kinsbaile Aspirant | Rejected by the judge as not a turn-1 play at all: its additional cost is 'behold a Kithkin or pay {2}', and on turn 1 there is neither a Kithkin to behold nor {2} available. |
| Tributary Vaulter | A 1/3 flier for three — evasive, but a worse clock than every other threat in the list. Considered specifically as a cheap flier when the MV-4+ share needed trimming. |
| Requiting Hex (moved out of the sideboard) | A 1-mana instant kill on MV<=2 that also gains 2 life, which is on-theme. Cut from the board in the Phase 9 repair because 4 of 10 board cards demanded black on a 5-source base; Keep Out does a comparable job at {1}{W} and answers enchantments too. |
| Rhys, the Evermore (rare) | Named by the Challenger as a {1}{W} flash protection effect the deck could afford. Declined because the rare/mythic cap is now full at 5 and Adept Watershaper protects the whole attacking team rather than one creature — but Rhys is the correct swap if the fifth slot is ever wanted elsewhere. |
| Darkness Descends (sideboard consideration) | The only mass removal available in W/B. Excluded from this board entirely: two -1/-1 counters on EACH creature kills our own 1-to-3-toughness lifelink bodies, which is most of the deck. |
| Emptiness / Kinbinding | Both sit above the curve this deck is built to. At an average mana value of 2.435 with a thesis turn of 6, a 5- or 6-drop is a card the deck never casts on time. |

### BUILD DERIVATION

- **Skeleton selection (Phase 5B Step 0):** chose *Sketch B — most reach & evasion* over *lowest-curve / most explosive* and *most resilient to sweepers and removal*. Judge grounds: B kills by turn 6 with the resource the thesis names: bodies that fly and lifelink, granted permanently by Abigale and repeatably by Evershrike's Gift, with Kinscaer Sentry converting an attack into a second free attacker. Because Bre is the sole lifegain payoff in the entire cube, castability of {2}{R}{W} is a first-order shape question, and B's red-source count is the only mana base among the three that reliably lands it on curve. The judge credited B's small interaction over-band because removal here clears the one blocker between a flying lifelinker and lethal, and explicitly declined to credit the tapped-land tax as free.
- **Weak keystone — Eirdu, Carrier of Dawn // Isilu, Carrier of Twilight:** role claimed 'top-end evasive threat + convoke discount' plus a persist engine, but the persist half is gated behind a 5-MV cast PLUS a separate {B} transform — two turns past the goldfish turn of 6. Sound as a threat, overstated as an engine. → KEPT at 1 copy with the role narrowed to what the text supports on turn 5: a 5/5 flying lifelink body whose convoke clause discounts the rest of the curve. The gate config counts it as a payoff at weight 1.0 for the FRONT FACE only, and the record now states plainly that persist is a late bonus, not the plan.
- **Weak keystone — Abigale, Eloquent First-Year:** role claimed 'the only evasion grant that sticks', which is correct on permanence, but the same trigger makes the target LOSE ALL ABILITIES first — pointed at Kinscaer Sentry it deletes the attack trigger the same build calls its reach multiplier, so the two keystones partially cancel. → KEPT at 1 copy, with the play pattern stated: the ETB reads 'up to one OTHER target creature', so it is optional and must never be pointed at Kinscaer Sentry, Wanderbrine Preacher, Nightmare Sower, Adept Watershaper, Bre or Eirdu. Against 13 other creature copies: 1 is strictly safe (Prideful Feastling, whose entire text is 'Changeling / Lifelink'), a further 4 are safe once their ETB has already resolved (Scarblade Scout x2, Flock Impostor x2), and 8 must never be targeted. Timid Shieldbearer was named here in the pre-grill record and has since been cut.
- **Weak keystone — the whole skeleton's red-source comparison:** the Phase 9 Challenger showed the judge scored red sources on two different rulers -- Sketch A's 4 was a lands-only count, the winner's 7 was lands-plus-artifacts. Under a consistent lands-only ruler the winner had the FEWEST dedicated red lands of the three (3 of 17 against A's 4 of 15). → RECORDED, pick unchanged. Sketch A was rejected on a second independent ground (it discarded the Persist Recursion half of the intent), and after the Sacred Peaks repair this build's 3 red lands also produce white, which is strictly better than A's 4 dead Mountains.
- **Land math:** after the Phase 9 repair: 23 nonland at avg MV 2.435 with 2 acceleration -> 17 lands. Built to 17. Deviation: none. Composition: SACRED PEAKS CORRECTION. The pre-grill build reasoned about red sources at length and never saw Sacred Peaks ('({T}: Add {R} or {W}.) This land enters tapped.' -- Land - Mountain Plains, common, 2 copies legal), which the Phase 9 Challenger found. Swapping 2 Mountain + 1 Plains for 2 Sacred Peaks + 1 Swamp holds red at 3 sources while raising white production from 10 to 11 and black from 4 to 5, cutting lands that produce neither core colour from 3 of 17 to 1 of 17. The colour-balance gaps improved from +7.9pp W / +9.8pp B to +2.0pp W / +3.9pp B. The price is tempo: tapped-or-delayed lands go from 4 of 17 to 6 of 17 (2 Sacred Peaks, 2 Sunlit Marsh, 2 Evolving Wilds), which is a real cost in a deck with a thesis turn of 6 and is accepted because the alternative was three Mountains that cast nothing but Bre. Eclipsed Realms remains excluded: naming Giant does make its any-colour mana legal for Bre, but it produces only {C} for the other 22 nonland cards.
- **Pip math:** 17 lands: 7 Plains, 3 Swamp, 1 Mountain, 2 Sacred Peaks (R and W), 2 Sunlit Marsh (W and B), 2 Evolving Wilds (fetches any basic). Audit-counted producers: W 11, B 5, R 3. Production 64.7% W / 29.4% B against demand 66.7% / 33.3% -- gaps +2.0pp and +3.9pp, both OK.  The pre-grill record claimed hard pips W 14 / B 5 and a 74/26 share, and asserted that 'the black pip count was deliberately trimmed to 5'. The Challenger recounted W 13 / B 6, which also matches audit.pip_demand sitting three keys above it in the same object. The claimed trim never happened; black demand was 6 pips across 6 cards throughout. Corrected here. The audit's splash_check is computed from the wrong input and its PASS should not be relied on: it scored the deck's red LANDS as the splash cards (splash_card_count 3, max_cmc 0) rather than Bre of Clan Stoutarm (1 card, cmc 4). Hand-computed instead: Bre is {2}{R}{W}, so it needs a red source plus four lands. With 3 red sources in 17 lands, P(at least one red among four lands in play) = 1 - C(14,4)/C(17,4) = 0.579 strictly, rising to 0.792 if Evolving Wilds x2 is counted as red. Springleaf Drum x2 adds two further uncounted ways to make the pip, so 7 of the 40 cards can produce it. That is thin for a card the archetype depends on, and it is the stated price of building the only WB deck that has a lifegain payoff at all.
- **Phase 9 self-grill repairs applied:** LANDS: -2 Mountain, -1 Plains / +2 Sacred Peaks, +1 Swamp. Sacred Peaks is an RW dual common the pre-grill build never saw; it holds red at 3 sources while raising W production 10->11 and B 4->5, cutting dead-colour lands from 3 of 17 to 1 of 17. Colour gaps improved from +7.9pp/+9.8pp to +2.0pp/+3.9pp.; -1 Timid Shieldbearer, -1 Prideful Feastling; +1 Adept Watershaper (the unspent fifth rare slot; 'Other tapped creatures you control have indestructible' protects the attacking team and refutes the false pool claim in disruption-fizzle); +1 Dawn-Blessed Pennant (the deck's only genuine turn-1 play and one of only 3 lifegain sources that do not require connecting in combat); sideboard: -2 Requiting Hex / +2 Keep Out (cuts black board cards from 4 to 2 on a 5-source base; Keep Out is a 2-mana modal instant answering both the 21 enchantments and tapped attackers); record: slot_allocation rebuilt to partition all 23 nonland cards (Bre was in no bucket); pip_math corrected W 14->13 and B 5->6; flying count corrected 11->9; Abigale safe-target count corrected and re-denominated; black source count corrected 3->4->5; MV-4+ share corrected 13%->17.4%; turn-1 rate corrected from the tool's 68% to the true 45%; density denominators standardised on the dossier's 260 nonland cards
- **Approval round:** Challenger approval round (round 1 of a 2-round cap): all TEN BLOCKING findings returned RESOLVED and both CONTEST rows' grounds were upheld, with one word qualified — the Challenger noted Sacred Peaks enters tapped where a Mountain does not, so the swap is better on fixing and worse on tempo, not 'strictly better'. It re-derived every hard check from scratch and confirmed no repair introduced a violation. Four non-blocking regressions it caught inside the repaired fields are corrected above: hybrid pips 2->3, a '9 lifelink copies' self-contradiction against an enumeration of 8, 'creature cards 15 of 23' -> 14 with the gas-out copy count restated at 5 (three singletons), and a stale Abigale weak-keystone entry still naming the cut Timid Shieldbearer. Its closing assessment: the mana base went from 3 dead lands of 17 to 1, colour gaps from +7.9/+9.8pp to +2.0/+3.9pp, and the turn-1 rate is now both honest and higher (32% -> 45%).

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.43 adj [MV 2.43 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  33.3%  prod  29.4%  gap  +3.9pp  [OK]
  W  demand  66.7%  prod  64.7%  gap  +2.0pp  [OK]

Splash Check: [PASS]
  R  1 card(s), max CMC 0  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  commons_uncommons_max_2: PASS — no card exceeds 2 copies (validator check 3)
  rares_mythics_max_1_each: PASS — all four are singletons
  rare_mythic_total_max_5: PASS -- exactly 5 across mainboard + sideboard: Bre of Clan Stoutarm, Abigale, Kinscaer Sentry, Adept Watershaper, Eirdu//Isilu. The Phase 9 repair spent the previously unspent fifth slot on Adept Watershaper. Sideboard is entirely commons/uncommons.
  all_cards_from_cube: PASS — validator check 2, exact-name match against the working pool
  splash_cap: PASS — 1 splashed card (Bre of Clan Stoutarm), against a cap of 3, and it is the named splash candidate from the Phase 3 deterministic filter
  basics_unlimited: 7 Plains + 3 Swamp + 1 Mountain, format-supplied and exempt
```
