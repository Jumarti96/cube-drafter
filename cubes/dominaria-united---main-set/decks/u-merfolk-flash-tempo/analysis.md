---
deck_name: "u-merfolk-flash-tempo"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "U"
format: "40-card"
built_at: "2026-08-19T14:37:40Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x16  Island                 Basic land, untapped, on-colour
```

### CREATURES (15)

```
CMC  Card                   Qty   Color Role                                                                            Rar
  1  Pixie Illusionist      x2    U     evasive body core                                                               C
  2  Battlewing Mystic      x2    U     evasive body core                                                               U
  2  Haunting Figment       x2    U     evasive body core                                                               C
  2  Vodalian Hexcatcher    x1    U     payoff                                                                          R
  2  Volshe Tideturner      x2    U     engine/infrastructure                                                           C
  3  Aether Channeler       x1    U     engine/infrastructure                                                           R
  3  Haughty Djinn          x1    U     threat                                                                          R
  3  Voda Sea Scavenger     x2    U     evasive body core (Merfolk fodder)                                              C
  5  Frostfist Strider      x1    U     threat                                                                          U
  5  Sphinx of Clear Skies  x1    U     threat                                                                          M
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                   Qty   Color Role                                                                            Rar
  1  Rona's Vortex          x2    U     interaction                                                                     U
  1  Shore Up               x2    U     interaction                                                                     C
  1  Timely Interference    x2    U     engine/infrastructure                                                           C
  2  Essence Scatter        x2    U     interaction                                                                     C
```

### OTHER SPELLS (1)

```
CMC  Card                   Qty   Color Role                                                                            Rar
  1  Combat Research        x1    U     engine/infrastructure                                                           U
```

## SIDEBOARD (10)

```
Card                   Qty   Color Role / When to board in                                                         Rar
Negate                 x2    U     hate: sweepers + enchantment removal - vs. any deck holding one of the cube'... C
Ertai's Scorn          x2    U     hate: stack, catch-all counter - vs. control and any deck that double-spells... U
Talas Lookout          x2    U     flex: evasion answer + card on death - vs. the cube's 51 evasion cards, and ... C
Impede Momentum        x2    U     hate: single large threat - vs. decks whose plan is one oversized creature -... C
Impulse                x1    U     flex: consistency - vs. grindy matchups where finding the one specific answe... C
Silver Scrutiny        x1    U     flex: attrition refuel - vs. decks that trade one-for-one and try to out-las... R
```

## ANALYSIS

### DECK IDENTITY

A mono-blue flash-tempo deck that wins with cheap evasive bodies - 6 unconditional fliers plus 2 conditionally-unblockable creatures - while one-mana bounce, creature counterspells and instant-speed tricks keep the opponent from ever stabilizing. Vodalian Hexcatcher is the named tribal keystone: it anthems the other 4 Merfolk and converts a spent Merfolk into a flash-speed soft counter. Because Hexcatcher is a rare and the pool rules allow only 1 copy, the deck is deliberately built so the kill mechanism does NOT depend on drawing it - the lord is an upgrade layered on a blue tempo shell that functions without it. Mono-colour is a deliberate structural choice, not a fallback: every untapped dual in this cube is a rare, so any second colour would spend part of the 5-rare budget on lands rather than on spells.

### THE MERFOLK COUNT — WHAT THIS ARCHETYPE ACTUALLY IS

The honest headline: **Dominaria United contains exactly 6 unique Merfolk**, and only one of them is a lord. Under the pool rules (commons/uncommons x2, rares x1) the mono-blue ceiling is 6 Merfolk cards, and this deck runs 5 of them.

| Merfolk | Copies here | Cost | Why |
|---|---|---|---|
| Vodalian Hexcatcher | 1 (rare cap) | {1}{U} | The only lord in the cube |
| Volshe Tideturner | 2 | {1}{U} | Body + restricted mana |
| Voda Sea Scavenger | 2 | {2}{U} | Body + designated sacrifice fodder |
| Vodalian Mindsinger | 0 | {1}{U}{U} | Cut — see excluded list |

That single-copy lord is the defining constraint of the build, and it is why this deck is a **blue tempo shell that happens to be tribal**, not a tribal deck that needs its lord. Vodalian Hexcatcher is drawn by turn 7 in roughly a third of games; a deck whose kill mechanism required it would be a deck that loses two games in three. So the assembly gate is declared against the 9-copy evasive cluster (p = 0.95 by turn 7), not against the lord. When Hexcatcher does show up it is a genuine upgrade — +1/+1 on 4 bodies and a repeatable soft counter — but the clock does not wait for it.

### THE SACRIFICE ABILITY IS THE REAL PAYOFF, AND IT IS SMALLER THAN IT LOOKS

*"Sacrifice a Merfolk: Counter target noncreature spell unless its controller pays {1}."* This is repeatable, which no counterspell in the pool is. But the fodder count is **2 of 24 nonland cards**, not 4: Volshe Tideturner is a mana source you do not want to eat, and eating Hexcatcher itself removes the anthem. One to two activations per game is the supported number. It is still the best thing the tribe does — it lets you tap out for a threat and *still* tax a sweeper — but it is a tax, not a lock.

### WHY MONO-COLOUR IS A STRUCTURAL CHOICE, NOT A CONCESSION

This cube prices fixing in rares. Every untapped dual in Dominaria United — Yavimaya Coast, Shivan Reef, Adarkar Wastes, Caves of Koilos, Sulfurous Springs, Karplusan Forest — is a rare, and the commons (Tangled Islet, Contaminated Aquifer, etc.) all enter tapped. Under a **5 rare/mythic cap across mainboard and sideboard**, a second colour does not merely cost consistency; it spends part of a budget that could otherwise buy spells.

Mono-blue pays zero. All 16 lands are untapped, on-colour Islands, the colour-balance gap is **0.0 percentage points**, and the entire 5-rare budget goes into Vodalian Hexcatcher, Haughty Djinn, Aether Channeler, Sphinx of Clear Skies and Silver Scrutiny. That is the trade this deck is built on.

### THE CARD THAT ALMOST GOT MISSED

The initial sweep filtered the pool by `color_identity`, which hides every card whose printed identity is off-colour **only because of a kicker**. Re-swept by castability, the mono-U nonland pool is **54 cards, not 44**. Two of the ten hidden cards are maindeck:

- **Timely Interference** — {U} instant, common. *"Target creature gets -1/-0 until end of turn. … Draw a card."* The draw sits outside the kicker sentence, so it is unconditional. It is the cheapest way in the pool to switch on Haunting Figment's unblockable clause, and it costs no card to do it.
- **Battlewing Mystic** — {1}{U}, uncommon. A **2/1 flier for two**, unkicked. Strictly the evasion the thesis is built on, one mana cheaper than Soaring Drake.

Both print as red-blue cards. Neither is a splash.

### THE INTERACTION SUITE IS ALL INSTANTS BY DESIGN

Every one of the 6 interaction cards is an instant. Impede Momentum — a genuinely strong effect, three stun counters for two mana — was cut to the sideboard specifically because it is a **sorcery**, and a deck that wants to represent "creature or counterspell" with the same untapped mana cannot afford to tap out on its own turn. That is also why Vodalian Hexcatcher's Flash matters beyond the anthem: on turn 2 you hold {1}{U} and decide at end of turn whether it was a body or a bluff.

### THE COUNTS THAT DRIVE THE DECK

| Claim | Count against this list |
|---|---|
| Hexcatcher's anthem targets | 4 of 15 creature cards |
| Hexcatcher's sacrifice fodder | 2 of 24 nonland cards (1–2 activations) |
| Haunting Figment's evasion enablers | 8 of 24 nonland cards (33%) |
| Haughty Djinn's power / discount source | 8 instants & sorceries; 6 of the 8 cost exactly one mana, so the discount makes them free |
| Combat Research's evasive carriers | 8 of 15 creature cards |
| Combat Research's legendary clause | **0 of 15** — the +1/+1 and ward {1} never apply |
| Voda Sea Scavenger's Domain X | **1** (16 Islands = one basic land type); 2 if a Pixie Illusionist taps instead of attacking |
| Cards that replace themselves | 2 of 24 (Timely Interference x2) |

The last row is the deck's weak point and it is stated rather than hidden: this is a tempo deck that intends to have won before the hand empties, and the bulk refuel deliberately lives in the sideboard.

### PLAY PATTERN

Turn 1 Pixie Illusionist or a held-up Rona's Vortex. Turns 2–3 add a flier and start representing Essence Scatter. From turn 4 the deck attacks with 2–5 power in the air every turn while holding one or two mana up; Shore Up answers the removal spell aimed at the best attacker, and Sphinx of Clear Skies closes at five. The turn-7 goldfish is real: 85% of opening hands are keepable, 90% make a turn-1 play, and 100% have a play by turn 3.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Tempo):  [PASS]
  MV distribution (24 nonland):  1:9  2:9  3:4  5:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 7.9: Haunting Figment@0.8, Haunting Figment@0.8, Haughty Djinn@0.7, Frostfist Strider@0.6) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.8: Shore Up@0.9, Shore Up@0.9) → p=0.89 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 90%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: The deck fields 8 evasive bodies (6 unconditional fliers plus Haunting Figment x2) and goldfishes on turn 7, so a wide ground board that cannot block fliers loses the race; the pool's only mono-U sweeper is The Phasing of Zhalfir, whose chapter III reads 'Destroy all creatures' and would destroy this deck's own win condition.
  OK        single_large_threat: Rona's Vortex, Essence Scatter, Frostfist Strider
  CONCEDED  noncreature_permanents: The cube holds 18 enchantments and 15 artifacts (33 cards, 13.4%), and its artifact- and enchantment-removal is entirely in BG/G/R/W - blue has zero. The mainboard's only touch on the class is Aether Channeler's 'Return another target nonland permanent to its owner's hand' mode, a temporary bounce on a 1-of modal card; Rona's Vortex reads 'creature or planeswalker' and does not apply. Mitigating maindeck would mean adding a second colour, which every untapped dual in this cube prices at a rare slot. Negate x2 in the sideboard answers the class on the stack.
  OK        stack: Essence Scatter, Vodalian Hexcatcher
  CONCEDED  graveyard: The cube dossier's structural census reports 0 graveyard-hate cards in the entire cube, so no deck in this environment can answer this class; conceding it costs nothing that was available.
```

All four structural checks returned PASS, so there are no WARN-tier deviations to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Excess lands convert into action through Combat Research (1 mana onto an evasive body, drawing on every connection), Volshe Tideturner x2 feeding a held-up Essence Scatter or Rona's Vortex in the same turn as a creature deploy, and the two {3}{U}{U} five-drops (Frostfist Strider, Sphinx of Clear Skies) giving flooded hands a ward-2 body plus, in Frostfist's case, a two-turn tap-down. Stated honestly: 0 of 24 nonland cards is a repeatable mana sink, so above roughly five lands the surplus is genuinely inert. The land count is 16 - the computed target - not a hedged 17. |
| `screw` | mitigation | A 2-land hand is keepable because 9 of 24 nonland cards cost 1 and 9 cost 2: Pixie Illusionist, Rona's Vortex, Shore Up, Timely Interference and Combat Research all operate on turn 1, and the goldfish simulation returns an 85% keepable rate with 84% of hands reaching 3 lands by turn 3 and 90% making a turn-1 play. (The earlier claim that Volshe Tideturner is a '17th effective source' was struck in the Phase 9 repair: its oracle restricts the mana to instants, sorceries and kicked spells, and 16 of 24 nonland cards - every creature plus Combat Research - cannot be cast with it.) |
| `decapitation` | mitigation | Vodalian Hexcatcher is a 1-of and the deck is explicitly built so the kill mechanism does not require it - the thesis names 'cheap evasive blue bodies' as the damage source and the assembly check declares the payoff role as the 9-copy evasive cluster (p=0.95 by turn 7), not the lord. If Hexcatcher is answered on sight the deck loses +1/+1 on 4 bodies and a soft counter, and continues attacking on the same curve. Shore Up x2 also protects it at instant speed for one mana ('gains hexproof until end of turn'). |
| `gas-out` | mitigation | REBUILT after Phase 9 finding 1, which correctly showed the previous entry cited a resource_exchange tag that does not exist (Combat Research's resource_exchange is []). The honest mainboard count is now: 2 of 24 nonland cards replace themselves unconditionally - Timely Interference x2, 'Target creature gets -1/-0 until end of turn. ... Draw a card.' - added specifically to close this hole. On top of that, Combat Research draws on every connection from an evasive body (8 of 15 creature cards are evasive carriers), Aether Channeler's third mode is 'Draw a card', and Sphinx of Clear Skies' Domain trigger fires on combat damage. The sideboard adds Impulse and Silver Scrutiny for the matchups that go long. This remains the deck's thinnest axis: it is a tempo deck that intends to have won by turn 7, and the bulk refuel lives in the board because maindecking it would cost the clock the shape judge picked this build for. |
| `raced` | accepted | Against the fastest clocks in dossier.threat_profile - the 51-card evasion class, concentrated in R (7) and W (7) - this deck's blockers are mostly 1-3 toughness. It interacts rather than blocks: Rona's Vortex x2 resets a developed threat for one mana, Essence Scatter x2 stops it landing, Frostfist Strider's ETB taps an attacker for three untap steps, and Sphinx of Clear Skies is a 5/5 ward-2 flier that blocks anything in the air. Mitigating further would mean maindecking defensive bodies - Academy Wall (0/5 Defender), Coral Colony (1/4 Defender), Tidepool Turtle (2/5, {2}{U}: Scry 1) - every one of which has Defender or a purely defensive rate and none of which advances the evasive clock that IS this deck's win condition. Accepting the risk is the cost of the proactive-clock build the shape judge locked. |
| `disruption-fizzle` | mitigation | The critical turn is a creature deploy plus held-up interaction, not a single all-in turn, so one counterspell costs one card rather than the game. Shore Up ('gets +1/+1 and gains hexproof until end of turn. Untap it.') blanks targeted removal on the key attacker for one mana at instant speed; Vodalian Hexcatcher's Flash lets the deck represent a threat and a counter with the same two mana; and because the clock is spread across 15 creature cards rather than one keystone, removing any single body delays the turn-7 goldfish by roughly a turn rather than ending the plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Vodalian Mindsinger (RARE) | The 6th and last mono-U Merfolk, so it would take Hexcatcher's anthem from 4 targets to 5. Cut on the rare limit: its kicker is {1}{R} and/or {1}{G}, both uncastable here, so unkicked it is a {1}{U}{U} 2/2 whose ETB reads 'gain control of target creature with power LESS THAN this creature's power' - i.e. power 0 or 1 only. A rare slot buys more as Sphinx of Clear Skies. |
| Defiler of Dreams (RARE) | 'Whenever you cast a blue permanent spell, draw a card' would fire on 16 of the 24 nonland cards - the largest card-advantage effect available to these colours. Cut on the rare limit and on speed: at {3}{U}{U} it lands after the turns this build wins on, and the shape judge explicitly rejected the card-advantage build it anchors. This is the single strongest swap target if you want to convert the deck toward grind. |
| Silver Scrutiny (RARE) | Kept, but in the sideboard rather than the mainboard. 'Draw X cards', flash at X<=3, is the only bulk refuel in the mono-U pool that does not cost a turn; maindecking it would cost a clock slot in a build the judge picked for its clock. |
| Cosmic Epiphany (RARE) | 'Draw cards equal to the number of instant and sorcery cards in your graveyard' - with only 8 instants/sorceries in the list the ceiling is low, and at {4}{U}{U} sorcery speed it costs the whole turn. Two rare-slot competitors (Sphinx of Clear Skies, Aether Channeler) do more for less. |
| The Phasing of Zhalfir (RARE) | Chapter III reads 'Destroy all creatures' - a one-sided sweeper only for a deck with no board. This deck's win condition IS its board, so the card kills its own plan. |
| Academy Loremaster (RARE) | 'At the beginning of EACH player's draw step, THAT player may draw an additional card. If they do, spells they cast this turn cost {2} more' - symmetric, and the tax lands on this deck's own double-spell turns, which are the turns a flash-tempo deck is trying to have. |
| Vesuvan Duplimancy (MYTHIC) | Copies a creature whenever a spell targets only one of your creatures. This list has 3 such spells (Shore Up x2, Combat Research x1), so a four-mana enchantment that does nothing the turn it lands is too slow for a rare slot. |
| Impede Momentum | Strong uncommon-tier effect a tier below the includes - 'Tap target creature and put three stun counters on it' is three missed untap steps. Cut from the mainboard in the Phase 9 repair because it is a SORCERY, and a deck whose identity is holding up flash interaction should not be tapping out on its own turn. Moved to the sideboard, where it comes in against single-big-creature decks. |
| Talas Lookout | A 3/2 flier for {2}{U}{U} that replaces itself on death - genuinely close to a maindeck slot. Lost to Battlewing Mystic, which is the same 2 power in the air for two fewer mana in a deck that goldfishes on turn 7. Kept in the sideboard against the cube's 51-card evasion class. |
| Soaring Drake | A vanilla 2/3 flier for {2}{U}. Cut when Battlewing Mystic x2 arrived: same evasion, one mana cheaper, and the three-drop slot is contested by Voda Sea Scavenger (Merfolk count) and Aether Channeler (modal value). |
| Impulse | 'Look at the top four cards... put one into your hand' - card selection, not card advantage, so it is net-neutral on cards. One copy kept in the sideboard for grindy matchups; the mainboard preferred Timely Interference, which is selection AND a body-relevant effect for the same one mana. |
| Micromancer | A 4-mana 3/3 that fetches an instant/sorcery with mana value 1; the fetchable pool here is exactly 6 cards (Rona's Vortex x2, Shore Up x2, Timely Interference x2). Below the rate this curve wants at four mana, where the deck would rather hold up interaction. |
| Protect the Negotiators | 'Counter target spell unless its controller pays {1} for each creature you control.' The tax counts creatures ON THE BATTLEFIELD, which on turns 3-5 is typically 2-3 - a {2}-{3} tax, not a hard counter. Essence Scatter counters a creature spell outright for the same {1}{U}. |
| Tolarian Terror | 'Costs {1} less to cast for each instant and sorcery card in your graveyard', a 5/5 ward 2. With only 8 instants/sorceries the discount arrives late, and the deck's two five-mana slots are already the ward-2 bodies Frostfist Strider and Sphinx of Clear Skies. A real sideboard consideration against grindy decks. |
| Founding the Third Path | Chapter I casts a free instant/sorcery of mana value 1 or 2 - all 8 of this deck's instants/sorceries qualify, so it never misses. Excluded because a Saga chapter fires on YOUR turn at sorcery speed: it cannot deploy a counterspell when a counterspell is wanted, which is the whole posture of this build. The best card-advantage sideboard consideration that costs no rare. |
| Tolarian Geyser | 'Return target creature to its owner's hand. Draw a card' for {2}{U} - card-neutral bounce. Lost to Rona's Vortex, which does the bounce half for one mana instead of three; the extra card is not worth two mana in a tempo deck. Reasonable sideboard consideration for grind. |
| Battlewing Mystic (kicked mode) | Noted for clarity: the card is maindecked, but only for 'Flying' on a {1}{U} 2/1. Its kicked clause ('discard your hand, then draw two cards') needs {R} and is never available here. |
| Academy Wall / Coral Colony / Tidepool Turtle | All three have Defender or a purely defensive rate (0/5, 1/4, 2/5). They are the cards that would mitigate the 'raced' failure mode, and every one of them fails to advance the evasive clock that is this deck's win condition. Excluded as a group, with that cost stated. |
| Djinn of the Fountain | Six mana for a 4/4 flier. The computed land target for this curve is 16; a six-drop wants materially more, and the curve tops at five by design. |
| Crystal Grotto / Thran Portal / Plaza of Heroes | Each would replace an untapped Island with a worse blue source. Thran Portal would add a second basic land type for Voda Sea Scavenger's Domain, but it is a rare and the budget is at 5 of 5; Plaza of Heroes only makes coloured mana for legendary spells, of which this deck has zero. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.04   Ramp cards: 2   Cantrips: 3
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.45 adj [MV 2.04 vs 2.5, 5 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Pool base                : commons/uncommons max 2 copies, rares/mythics max 1 copy, base = cube mainboard, no exclusions.
[PASS] Rare/mythic cap          : 5 of 5 used (0 remaining)
                                  Vodalian Hexcatcher (main, rare); Haughty Djinn (main, rare); Aether Channeler (main, rare); Sphinx of Clear Skies (main, mythic); Silver Scrutiny (side, rare)
[PASS] Copy limits              : Verified by Phase 5C check 3 against cube_search.get_max_copies; no card exceeds its rarity cap or its available pool copies.
[PASS] Basic lands              : 16 Island - format-supplied, exempt from copy limits.
[PASS] All cards in cube        : Verified by Phase 5C check 2 (exact string match against the working pool cache).
[PASS] Colour usability         : every nonland card returns a usable mode from effective_cost.best_mode against core_colors ['U'] + splash []
[PASS] Deck / sideboard size    : mainboard 40 (24 spells + 16 lands); sideboard 10
```
