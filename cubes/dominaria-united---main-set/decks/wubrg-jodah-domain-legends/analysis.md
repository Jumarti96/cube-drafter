---
deck_name: "wubrg-jodah-domain-legends"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WUBRG"
format: "40-card"
built_at: "2026-08-19T14:29:54Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  1x Adarkar Wastes           untapped W/U painland
  1x Contaminated Aquifer     U/B tapland - Island Swamp
  2x Crystal Grotto           untapped, scry 1 on entry, any colour for {1}
  2x Geothermal Bog           B/R tapland - Swamp Mountain
  1x Haunted Mire             B/G tapland - Swamp Forest
  2x Idyllic Beachfront       W/U tapland - Plains Island
  1x Molten Tributary         U/R tapland - Island Mountain
  1x Plaza of Heroes          untapped; legendary-only any colour, plus hexproof + indestructible for {3}
  2x Radiant Grove            G/W tapland - Forest Plains
  1x Sacred Peaks             R/W tapland - Mountain Plains
  1x Sunlit Marsh             W/B tapland - Plains Swamp
  1x Wooded Ridgeline         R/G tapland - Mountain Forest (the 4th Forest carrier)
  1x Yavimaya Coast           untapped G/U painland
```

### CREATURES (12)

```
CMC  Card                            Qty   Color  Role                        Rar
  2  Baird, Argivian Recruiter       x2    WR     legendary body (R/W) + token whenever the anthem or an Equipment has pumped something  U
  2  Elas il-Kor, Sadistic Pilgrim   x2    WB     legendary body (W/B) + drain  U
  2  Vohar, Vodalian Desecrator      x2    UB     legendary body (U/B) + unconditional repeatable loot  U
  4  Ertai Resurrected               x1    UB     answer: stack, on a legendary body  R
  4  Nael, Avizoa Aeronaut           x1    UG     legendary body (G/U) + domain dig, flying  U
  4  Radha, Coalition Warlord        x2    RG     legendary body (R/G) + domain pump  U
  4  Ratadrabik of Urborg            x1    WB     second legends payoff       R
  5  Jodah, the Unifier              x1    WUBRG  payoff-primary              M
```

### INSTANTS & SORCERIES (2)

```
CMC  Card                            Qty   Color  Role                        Rar
  1  Cut Down                        x1    B      answer: cheap creature      U
  2  Lightning Strike                x1    R      answer: burn / planeswalker / reach  C
```

### OTHER SPELLS (9)

```
CMC  Card                            Qty   Color  Role                        Rar
  1  Combat Research                 x2    U      legends payoff: draw on hit, +1/+1 and ward {1} on a legend  U
  2  Hero's Heirloom                 x2    C      legends payoff: trample + haste on a cascaded legend  U
  3  Relic of Legends                x2    C      five-colour fixing that scales with legend count  U
  4  Prayer of Binding               x1    W      answer: flash exile of any nonland permanent  U
  5  Timeless Lotus                  x1    C      taps for all five colours at once  M
  6  Leyline Binding                 x1    W      answer: flash exile, costs {W} at five basic land types  R
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                       Rar
Destroy Evil                    x2    W      enchantment / toughness-4+ answer             C
Essence Scatter                 x2    U      creature-spell answer                         C
Negate                          x2    U      noncreature-spell answer, incl. every sweeper in this cube  C
Broken Wings                    x2    G      artifact / enchantment / flier answer - three threat classes from one card  C
Shadow Prophecy                 x2    B      domain card selection when the game goes long  C
```

## ANALYSIS

### DECK IDENTITY

Five-colour Jodah legends-domain midrange. Twelve legendary creatures spread across all five colours are the deck's denominator: Jodah, the Unifier gives each of them +X/+X where X is the number of legendary creatures you control, so four legends on the battlefield become four bodies four sizes larger at once, and a board that looked like a stall becomes lethal in a single attack. Jodah's second clause free-casts a cheaper legendary card off the top on every legendary spell cast from hand, so each legend deployed compounds the anthem it feeds. Ratadrabik of Urborg returns every dead legend as a 2/2 Zombie copy that keeps its abilities - though the token is explicitly NOT legendary, so it rebuys the dead legend's text without restoring Jodah's count. The whole mana base is dual-typed, which means the fixing the deck already needs is also its domain payload: Leyline Binding costs {W} at five basic land types and {1}{W} at four, and Radha and Nael scale with the same number.

### THE HEADLINE NUMBER: JODAH IS 1 CARD IN 40

Read this before anything else about the deck. Jodah, the Unifier is a **mythic**, and the pool rules cap mythics at one copy. That makes him 1 of 40 cards, and the probability of seeing him by the thesis turn is **14/40 = 35%**.

The first version of this deck failed its own structural gate on exactly that point: the payoff role came back at 3 copies, 2.5 effective, p = 0.59 against a 0.75 threshold. The build did not get to hand-wave that. It had to be rebuilt so the deck **is not a plan to resolve Jodah** — it is a pile of individually-castable legends that becomes lethal when he shows up, and still functions in the 65% of games when he doesn't.

What carries those games: Ratadrabik of Urborg, Hero's Heirloom ×2 and Combat Research ×2. The grill measured the honest cost of that too — the two *full-weight* payoffs (Jodah and Ratadrabik) are 2 cards in 40, and you see neither of them in the top 14 in **41.7%** of games on the draw. The payoff gate passes by 2.1 percentage points, and it passes on the half-weight cards.

### WHAT THE ANTHEM ACTUALLY DOES

`Legendary creatures you control get +X/+X, where X is the number of legendary creatures you control.`

Every creature in this deck is legendary — **12 of 12**, the highest legendary fraction of the four decks built in this session. With Jodah plus three two-drops on the battlefield, X = 4, and every one of those bodies grows by four in both directions simultaneously. A 2/2 Elas il-Kor becomes a 6/6 deathtouch; a 2/4 Nael becomes a 6/8 flier. A board that reads as a stall is lethal the turn Jodah lands.

**One thing the anthem does NOT do**, and my first draft of this analysis got it wrong before my own Proposer caught it: Ratadrabik's Zombie tokens are explicitly `not legendary`. They rebuy the dead legend's *abilities* — a Zombie copy of Elas il-Kor still drains — but they contribute **0** to X, gain nothing from the anthem, and switch on neither Hero's Heirloom's nor Combat Research's legendary rider. Ratadrabik is a good card here; it is not the anthem insurance policy it looks like.

### THE CASCADE HAS A BLIND SPOT

`Whenever you cast a legendary spell from your hand, exile cards from the top of your library until you exile a legendary nonland card with lesser mana value.`

Thirteen of the 23 nonland cards are legendary spells that trigger this. Their mana values are **MV 2 ×6, MV 4 ×5, MV 5 ×2** — and nothing in the deck is a legendary nonland card below mana value 2. So casting any of the six two-mana legends fires the trigger and **can never find a hit**. That is 6 of the 13 triggers, and they are the ones you cast most often.

The cascade is live from mana value 4 upward (6 legal targets) and from Jodah or Timeless Lotus at 5 (11 targets). This is a structural ceiling of a deliberately cheap curve, not a fixable defect — the pool has no cheaper legendary nonland card worth running.

### THE MANA IS THE DECK

This is where the raised rare cap went. Of the 8 rares used, **4 are mana**: Timeless Lotus, Plaza of Heroes, Adarkar Wastes and Yavimaya Coast — and Jodah is only castable because they exist.

| Route to `{W}{U}{B}{R}{G}` | Earliest |
|---|---|
| Timeless Lotus (`{T}: Add {W}{U}{B}{R}{G}`, enters tapped) | turn 6 |
| Five lands whose colours cover all five pips | turn 6 realistically |
| Plaza of Heroes (any colour, legendary spells only) + four coloured sources | turn 6 |

All three land inside the turn-7 thesis. Crystal Grotto **cannot** be part of a five-land Jodah cast — its coloured mode is `{1}, {T}: Add one mana of any color`, and a five-land turn cannot pay the surcharge and still cast a five-mana spell. That is exactly why the assembly gate discounts it to 0.6.

Stated honestly, because `deck_audit` is generous here: it credits Crystal Grotto ×2 and Plaza as full sources of all five colours. **Unrestricted** sources are W 7, U 6, B 5, R 5, G 5 of 17. Off lands alone, all five colours are simultaneously available in 30.4% of games at turn 5, 47.2% at turn 6 and 57.6% at turn 7.

### DOMAIN IS A BATTLEFIELD STATE, NOT A DECKLIST PROPERTY

The deck runs **zero basic lands**, and that is deliberate: every dual in this base carries two basic land types on its type line and produces two colours, where a basic gives one of each. The fixing the deck already needs *is* its domain payload.

But the first draft of this analysis stated the domain payoffs at their ceiling — "the base maximises at 5" — and the grill correctly called that out. Domain 5 is a state you reach, not a property you have. The measured distribution at turn 7 on the post-repair base:

| turn | domain 5 | domain 4 | domain ≤3 |
|---|---|---|---|
| 7 | ~55% | ~38% | ~7% |

So Leyline Binding costs `{W}` about half the time and `{1}{W}` through most of the rest. Radha gives +5/+5 or +4/+4. Nael digs 5 or 4 and draws the extra card only at exactly five types. All still strong at domain 4 — but the 100% figures were ceilings, and the fix (swapping Karplusan Forest back to Wooded Ridgeline, taking Forest carriers from 3 to 4) bought roughly 9 percentage points of domain-5 at the price of one untapped land.

### WHY EVERY LEGEND IS A ONE-PIP-EACH TWO-COLOUR CARD

This is the discipline that makes a five-colour deck castable off 17 lands: **no card in the deck needs a double pip of any colour except Jodah, who needs one of each.** Elas il-Kor `{W}{B}`, Vohar `{U}{B}`, Baird `{R}{W}`, Radha `{2}{R}{G}`, Nael `{2}{G}{U}`. The deck is never trying to produce `{B}{B}` on turn 4 — only one of each colour by turn 5 or 6.

That rule is why several genuinely on-theme legends are absent: Aron, Benalia's Ruin (`{W}{W}{B}`), Rona, Sheoldred's Faithful (`{1}{U}{B}{B}`), Garna, Bloodfist of Keld (`{1}{B}{R}{R}`) and Sheoldred, the Apocalypse (`{2}{B}{B}`) are all excluded on cost shape, not on power.

### WHAT THE GRILL CHANGED

Four slots were cut for a reason worth recording. Raff, Weatherlight Stalwart ×2 and Balmor, Battlemage Captain ×2 both read `Whenever you cast an instant or sorcery spell` — and this deck has **2 instants in 23 nonland cards**. I had written 5 in the failure-mode record, having miscounted Prayer of Binding and Leyline Binding (Enchantments with flash) and Ertai Resurrected (a Creature with flash) as instants. Four of twelve creature slots were spellslinger legends in a deck with two spells.

They became Vohar, Vodalian Desecrator ×2 — whose `{T}: Draw a card, then discard a card` is unconditional and repeatable and is what actually repairs the gas-out mode — and Baird, Argivian Recruiter ×2, whose end-step token condition is turned on by 7 of the 23 nonland cards here (the anthem, both Equipment, both Auras, both Radha).

### THE ACCEPTED WEAKNESS

12 of 17 lands enter tapped. The first proactive play arrives on turn 2 in 44% of games. This deck loses to a fast start, and there is no version of a five-colour deck in this pool that doesn't — the only untapped duals the cube offers are painlands, and every one of them is a rare.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:9  3:2  4:6  5:2  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  five_colour_source: 6 copies (effective 4.5: Plaza of Heroes@0.7, Relic of Legends@0.8, Relic of Legends@0.8, Crystal Grotto@0.6, Crystal Grotto@0.6) → p=0.81 (need ≥ 0.75)
  PASS  legend_denominator: 12 copies → p=0.99 (need ≥ 0.75)
  PASS  payoff: 6 copies (effective 4: Hero's Heirloom@0.5, Hero's Heirloom@0.5, Combat Research@0.5, Combat Research@0.5) → p=0.77 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 44%  T2 93%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: Drag to the Bottom ({2}{B}{B}, rare) is the reachable domain sweeper and it was deliberately NOT taken: at five basic land types it gives every creature -6/-6, which kills all 12 of this deck's legendary creature copies and therefore zeroes Jodah's own +X/+X denominator at the exact moment the anthem is supposed to win the game. The same objection retires every other sweeper in these colours. The deck answers width instead by out-sizing it: with four legends on the battlefield Jodah makes each of them +4/+4, so a board of 2/2s and 1/3s becomes a board of 6/6s and 5/7s in one cast, and Radha, Coalition Warlord gives another creature +X/+X equal to the basic land type count every time she taps to attack.
  OK        single_large_threat: Leyline Binding, Prayer of Binding, Ertai Resurrected, Elas il-Kor, Sadistic Pilgrim
  OK        noncreature_permanents: Leyline Binding, Prayer of Binding, Lightning Strike, Ertai Resurrected
  OK        stack: Ertai Resurrected
  CONCEDED  graveyard: Stated precisely: this cube contains no graveyard HATE - no card exiles, disrupts or shrinks an opponent's graveyard. Two cards do reach into a graveyard, but to steal from it rather than answer it: The Cruelty of Gix chapter III and Soul of Windgrace. The cube's 32-card graveyard-interaction class (13.0%) therefore cannot be disrupted by any deck in this cube.
```

- DISCLOSURE, not a check response: the payoff role clears the 0.75 assembly threshold at p=0.7712, and 4 of its 6 copies carry weight 0.5 (Hero's Heirloom x2, Combat Research x2). The two full-weight payoffs, Jodah and Ratadrabik, are 2 cards in 40; the Challenger computed P(neither in the top 14) at 41.7% on the draw and 45.0% on the play. So in roughly two games in five the entire legends-payoff role is an Equipment granting +2/+1, trample and haste and an Aura granting +1/+1 and ward {1}. The gate passes by 2.1 percentage points and it passes on the half-weight cards. This is the honest structural cost of building around a mythic under a one-copy rule, and it is why the deck is a pile of individually-castable legends first and a Jodah deck second.

- DISCLOSURE: the Midrange band table cannot sum to 100% (see slot_allocation.band_arithmetic_note), so the 78.3% Threats figure is an artefact of the band definition rather than a discretionary deviation by this build.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Crystal Grotto x2 scry on entry, so a surplus land at least filters. Beyond that the deck's mana sinks are Hero's Heirloom x2 at 'Equip {2}', which moves trample and haste onto whichever legend is best positioned each turn, and Plaza of Heroes' '{3}, {T}, Exile this land' protection mode, which converts a land that is no longer needed into hexproof and indestructible on the anthem's holder. Nael, Avizoa Aeronaut also converts a flooded board into cards, digging 5 deep on every connection at full domain. Stated honestly: this is the weakest flood mitigation of the four decks built in this session - there is no repeatable draw engine, and a 17-land five-colour base floods more often than a two-colour one. |
| screw | mitigation | 12 of 23 nonland cards cost 2 or less and every one of them needs at most a single pip of each of two colours, so a two-land hand of any two duals casts something on curve. The land base carries 8 to 10 sources of every colour out of 17 lands. Crystal Grotto x2 scry on entry to dig. The goldfish simulation measured 82% keepable hands and 3 lands by turn 3 in 88%. The residual risk is not colour but SPEED: 11 of 17 lands enter tapped, which is why the T1 play rate is only 44%. |
| decapitation | mitigation | Jodah is 1 of 40 and will be answered on sight, so the deck is explicitly built not to need him: the payoff role holds 6 copies (4 effective, p=0.77 by turn 7) across Ratadrabik of Urborg, Hero's Heirloom x2 and Combat Research x2, none of which needs Jodah on the battlefield. Plaza of Heroes can give Jodah hexproof and indestructible for {3} on the turn he matters, and Combat Research grants ward {1} to whichever legend carries it. Ratadrabik specifically covers the case where the legends themselves are picked off - each one that dies comes back as a 2/2 Zombie copy that keeps its abilities. |
| gas-out | mitigation | REBUILT AFTER THE GRILL, which correctly marked the previous version UNSATISFIED. It named Raff, Weatherlight Stalwart at 5 of 23 instants and sorceries when the true figure was 2 of 23 - Prayer of Binding and Leyline Binding are Enchantments with flash, and Ertai Resurrected is a Creature with flash. Raff x2 and Balmor x2, four slots whose printed abilities both keyed off that same 2-of-23 denominator, were cut. Refuelling now rests only on cards whose text is unconditional: Vohar, Vodalian Desecrator x2 ('{T}: Draw a card, then discard a card' - repeatable, needing nothing else on the battlefield), Combat Research x2 (a card on every connection), Nael, Avizoa Aeronaut (digs 4 or 5 deep on combat damage and draws outright at five basic land types), and Jodah's own cascade, which free-casts a legendary card on every legendary spell cast at mana value 4 or above. The board also refuels through Ratadrabik of Urborg. |
| raced | accepted | This is the deck's real weakness and it cannot be engineered away. 11 of 17 lands enter tapped, the first proactive play arrives on turn 2 in only 44% of games, and the payoff lands on turn 5 at the earliest. Mitigating it would mean cutting the tapped duals for untapped sources - but the untapped sources in this pool are six painlands, each a rare, and the cap is already fully spent at 9 with three of them taken; going further would mean cutting Jodah, Timeless Lotus or Plaza of Heroes, which are the cards that make a five-colour deck possible at all. It would also mean cutting the dual-typed lands that ARE the domain payload for Leyline Binding, Radha and Nael. The deck accepts the slow start and offsets it partially with two deathtouch Elas il-Kor blockers, four one- and two-mana answers, and a curve that tops at 5. |
| disruption-fizzle | mitigation | There is no combo turn - the plan is linear board accrual, so a counterspell or removal spell on any given turn costs one card rather than the game. The turn that matters most is the Jodah cast, and it is protectable: Plaza of Heroes grants hexproof and indestructible to a legendary creature for {3}, and Ertai Resurrected has flash and can counter the answer. If Jodah is answered anyway, Ratadrabik and the two Aura and Equipment payoffs carry a slower version of the same plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| RARE CAP RAISED TO 9 FOR THIS DECK ONLY | The other three decks in this session were built under the stated 5 rare/mythic limit. This one was not: the Phase 3 shortlist flagged that a five-colour deck must spend rare slots on its MANA before it spends any on power - Jodah (mythic), Timeless Lotus (mythic) and Plaza of Heroes (rare) alone consume 3 - and the option as chosen specified raising the cap to roughly 8-9. It is built at 9. Every rare above the fifth is disclosed in the analysis. |
| Karn's Sylex | Symmetric sweeper that destroys every nonland permanent at or below the chosen mana value - this deck's whole board is legendary permanents, so it is a mirror-breaker aimed at ourselves. |
| Karn, Living Legacy | Legendary planeswalker, but its Powerstone tokens produce mana that 'can't be spent to cast a nonartifact spell', which is every card in this deck except Relic of Legends and Hero's Heirloom. |
| Golden Argosy | Legendary Vehicle that exiles its own crew on attack; the crewing legends leave the battlefield, so Jodah's anthem shrinks at exactly the moment it should be largest. |
| Weatherlight Compleated | Legendary artifact that only becomes a creature after four creature deaths; this deck wants its legends alive on the battlefield for Jodah's +X/+X, not dying. |
| Vesuvan Duplimancy | Its tokens are explicitly 'not legendary', so they add nothing to Jodah's count and cannot be copied legends. |
| Liliana of the Veil | Legendary planeswalker, so it is neither a Jodah cascade hit nor a Ratadrabik trigger, and its symmetric discard empties a hand that wants to deploy legends every turn. |
| Jaya, Fiery Negotiator | Same objection as Liliana - Jodah's cascade exiles until it finds a legendary NONLAND card, which a planeswalker satisfies, but the anthem and Ratadrabik both read 'legendary creature'. |
| Ajani, Sleeper Agent | Legendary planeswalker with a Phyrexian mana pip; same planeswalker objection, and it competes for a raised-but-finite rare budget already spent on mana. |
| Rivaz of the Claw | Its mana and recursion are restricted to Dragon creature spells; this pool holds 3 Dragon creature cards and this list runs at most 1. |
| Astor, Bearer of Blades | Digs for Equipment or Vehicles and discounts equip costs; this list runs 2 Equipment at most, so a rare slot buys a 4/4 with a small rider. |
| Nemata, Primeval Warden | A strong rare, but its Saproling engine and the {G} and {1}{B} activations pull a five-colour deck toward a dedicated B/G sub-theme it cannot support. |
| Jhoira, Ageless Innovator | Puts artifacts onto the battlefield from hand; this list runs 3-5 artifacts, so the ingenuity counters usually find nothing. |
| Stenn, Paranoid Partisan | Cost reducer restricted to one chosen non-creature, non-land type; this list is overwhelmingly creatures, so no legal choice covers more than a handful of cards. |
| Danitha, Benalia's Hope | A fine legendary body, but {4}{W} in a five-colour mana base whose white is one of five competing colours, and the raised rare budget is already fully committed. |
| The Raven Man | Its token engine needs a player to have discarded each turn; this list runs no repeatable discard outlet. |
| Temporary Lockdown | Exiles every nonland permanent with mana value 2 or less - this list's cheap legendary bodies and Relic of Legends are exactly that. |
| The Phasing of Zhalfir | Chapter III destroys all creatures, which in a Jodah deck is destroying the anthem's own denominator. |
| The Elder Dragon War | Rare Saga whose sweeper chapter hits our own cheap legends as hard as anything opposing. |
| Serra Paragon | Strong graveyard recursion on a 3/4 flier, but it is not legendary, so it adds nothing to Jodah's count and cannot be found by his cascade. |
| Defiler of Faith / Defiler of Dreams / Defiler of Flesh / Defiler of Instinct / Defiler of Vigor | Each discounts only its own colour's permanent spells; in a five-colour deck each one covers roughly a fifth of the list, and none of them is legendary. |
| Tolarian Terror | Cost reduction scales with instants and sorceries in the graveyard; this is a permanents deck. |
| Writhing Necromass | Cost reduction scales with creature cards in the graveyard, but this deck wants its creatures on the battlefield for the anthem. |
| Argivian Phalanx | Affinity for creatures makes it cheap on a wide board, but it is not legendary and adds nothing to the Jodah count. |
| Herd Migration | Domain ramp that fetches basic lands, and genuinely on-theme - but at {5}{G}{G} it arrives after the turn the deck needs its fifth colour, and double green is the hardest pip in a five-colour base. |
| Tribute to Urborg / Runic Shot / Timely Interference and the other kicker removal | All are efficient, but their kicked halves each demand a second specific colour on the turn they are cast, which is the one thing a five-colour tapland base cannot promise. |
| Mesa Cavalier / Soaring Drake / Griffin Protector and other non-legendary bodies | Every non-legendary creature slot is a slot that does not raise Jodah's +X/+X and cannot be hit by his cascade; the deck deliberately trades card quality for legendary density. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 3   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.29 adj [MV 2.91 vs 2.5, 5 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  24.2%  prod  47.1%  gap -22.9pp  [OK]
  G  demand  12.1%  prod  47.1%  gap -35.0pp  [OK]
  R  demand  18.2%  prod  47.1%  gap -28.9pp  [OK]
  U  demand  21.2%  prod  47.1%  gap -25.9pp  [OK]
  W  demand  24.2%  prod  58.8%  gap -34.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card appears more than 2 times across mainboard and sideboard combined.
rares_mythics_max_1: PASS - all eight are 1 copy each.
rare_mythic_total_max_9: PASS - 8 used against the RAISED cap of 9 for this deck, one slot deliberately unspent. See rare_cap_note: the other three decks in this session were built at the original cap of 5. Five of the eight are mana or mana-adjacent (Timeless Lotus, Plaza of Heroes, Adarkar Wastes, Yavimaya Coast, and Jodah is only castable because of them); the sideboard is entirely common and uncommon.
basics_unrestricted: No basic lands are run at all - every dual in this base produces two colours and two basic land types where a basic would produce one of each.
all_cards_from_cube: PASS - exact-name match against the working pool cache for all distinct cards.
colour_legality: PASS - all five colours are core, so every card in the pool is colour-legal; effective_cost.best_mode returns a usable mode for every nonland card.
```
