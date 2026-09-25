---
deck_name: "wu-skyknight-spells-tokens"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-08-14T04:05:22Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
9x   Island                   Basic - blue source
5x   Plains                   Basic - white source
2x   Idyllic Beachfront       WU dual, enters tapped
1x   Adarkar Wastes           WU painland - the only untapped WU dual in the pool
```

### CREATURES (9)
```
CMC  Card                        Qty   Color  Role                                            Rar
2    Raff, Weatherlight Stalwart  x2    UW     Payoff/engine - a card per instant or sorcery; {3}{W}{W} pumps the board  U
2    Resolute Reinforcements     x2    W      Enabler - flash, TWO untapped bodies, which is exactly Raff's tap-two cost  U
2    Valiant Veteran             x1    W      Payoff - Soldier anthem; every token this deck makes is a Soldier  R
3    Haughty Djinn               x1    U      Payoff - flier whose power is the spell count; discounts every instant and sorcery  R
3    Soaring Drake               x1    U      Threat - a 2/3 flier body and a Raff tap target  C
5    Tura Kennerüd, Skyknight    x2    UW     Payoff - a 1/1 Soldier for every instant and sorcery cast  U
```

### INSTANTS & SORCERIES (14)
```
CMC  Card                        Qty   Color  Role                                            Rar
1    Shore Up                    x2    U      Fuel/protection - hexproof saves an engine legend; triggers Tura and Raff  C
1    Timely Interference         x1    U      Fuel - draws a card unconditionally, no Raff tax (red kicker declined)  C
2    Destroy Evil                x2    W      Interaction/fuel - kills a fat blocker or an enchantment, and makes a Soldier  C
2    Impulse                     x2    U      Fuel/selection - finds an engine legend and triggers the one already out  C
2    Negate                      x2    U      Interaction/fuel - counters a noncreature spell and makes a Soldier  C
2    Protect the Negotiators     x2    U      Interaction/fuel - counters ANY spell; kicked it also makes a Soldier  U
3    Tolarian Geyser             x1    U      Interaction/fuel - bounce plus a card, and a Soldier  C
4    Captain's Call              x2    W      Payoff/fuel - a SORCERY, so three Soldiers become four with Tura out  C
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                                                 Rar
Essence Scatter             x2    U      Counter target creature spell — vs creature-dense decks where Negate is dead            C
Aether Channeler            x1    U      Modal - Bird token, bounce a nonland permanent, or draw — vs matchups needing flexibility; the bounce mode answers an otherwise unanswerable permanent  R
Anointed Peacekeeper        x1    W      Names a card and taxes it {2}; a 3/3 vigilance body — vs combo decks and vs a known bomb  R
Citizen's Arrest            x2    W      Unconditional exile of a creature or planeswalker — vs single-large-threat and planeswalker decks  C
Prayer of Binding           x2    W      Flash exile of any nonland permanent — vs artifact and enchantment decks and single-bomb decks  U
Frostfist Strider           x2    U      4/4 ward 2 that taps and stun-counters a creature on entry — vs decks that win with one big attacker, and vs removal-heavy decks  U
```

## ANALYSIS

### DECK IDENTITY

Blue-white spells-matter midrange. Tura Kennerud, Skyknight and Raff, Weatherlight Stalwart share one trigger condition - casting an instant or sorcery - and this list contains 14 of them across 23 nonland cards, so the interaction suite IS the token engine: every Negate, Impulse and Destroy Evil is also a 1/1 Soldier and, with Raff online, a card. Captain's Call is the bridge between the two halves, a sorcery that makes three Soldiers on its own and four with Tura out, and Valiant Veteran makes every one of those Soldiers a 2/2. This is the only deck of the four that answers the stack; it wins by accumulating a Soldier board behind counterspells while Haughty Djinn grows with the graveyard.

### THE INTERACTION SUITE IS THE TOKEN ENGINE

This is the structural idea the whole deck rests on. Tura Kennerüd and Raff, Weatherlight Stalwart share one trigger
condition — *casting an instant or sorcery* — and this list has **14 of 23** nonland cards that qualify:

| Card | Qty | What it does | What it ALSO does |
|---|---|---|---|
| Negate | 2 | counters a noncreature spell | 1/1 Soldier + a card |
| Destroy Evil | 2 | kills a toughness-4+ blocker or an enchantment | 1/1 Soldier + a card |
| Protect the Negotiators | 2 | counters **any** spell, scaling with your creature count | 1/1 Soldier from the kicker, plus Tura's Soldier, plus a card |
| Impulse | 2 | digs four deep | 1/1 Soldier + a card |
| Shore Up | 2 | hexproof, saves an engine from removal | 1/1 Soldier + a card |
| Timely Interference | 1 | −1/−0 and **draws unconditionally** | 1/1 Soldier + a card |
| Tolarian Geyser | 1 | bounce + a card | 1/1 Soldier + a card |
| Captain's Call | 2 | **three** Soldiers | a fourth Soldier from Tura, + a card |

Every answer this deck holds up is also a body and a card. That is why the Interaction slot sits at the *top* of the
midrange band (30.4%) rather than being trimmed toward the payoffs — trimming it would shrink the engine.

### WHAT VALIANT VETERAN FIXED

The Phase 9 Challenger found the sharpest hole in any of these four builds: the deck's stated win condition was
"accumulating a Soldier board," and it had **four independent Soldier-generation lines** with **zero** cards pumping
them.

| Soldier line | Output |
|---|---|
| Tura Kennerüd ×2 | 1 Soldier per instant/sorcery — repeatable, uncapped |
| Captain's Call ×2 | 3 each (4 with Tura out) = up to 8 |
| Resolute Reinforcements ×2 | 1 token each + the 1/1 body itself |
| Protect the Negotiators ×2, kicked | 1 each |

Valiant Veteran's *"Other Soldiers you control get +1/+1"* turns every one of those into a 2/2, and its graveyard mode
(*"{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control"*) puts a permanent
counter on the whole board even after the anthem body has been killed. It replaced Serra Paragon in the rare budget
and, being `{1}{W}` rather than `{2}{W}{W}`, fixed a castability problem at the same time.

### THE ONLY DECK OF THE FOUR THAT ANSWERS THE STACK

Across all four builds in this shortlist, the coverage concessions look like this:

| Deck | wide boards | single threat | noncreature perms | stack | graveyard |
|---|---|---|---|---|---|
| Mono-W Soldiers | conceded | ✓ | ✓ | **conceded** | conceded |
| GW Wide-and-Tall | conceded | ✓ | ✓ | **conceded** | conceded |
| RW Enlist/Kicker | conceded | ✓ | conceded | **conceded** | conceded |
| **WU Skyknight** | conceded | ✓ | ✓ | **✓ Negate ×2, Protect the Negotiators ×2** | conceded |

Every deck in this cube concedes the graveyard class — `structural_census` records **zero** graveyard-hate cards in
the entire 266-card list, so it is not a build failure, it is an environment fact. But the stack is answerable, and
this is the only one of the four that answers it.

### HAUGHTY DJINN'S TWO CLAUSES HAVE THE SAME DENOMINATOR

*"Haughty Djinn's power is equal to the number of instant and sorcery cards in your graveyard. Instant and sorcery
spells you cast cost {1} less to cast."*

Both clauses read the same 14 cards. It enters as a **0/4** — an honest starting point, not a bomb — and grows one
point per spell that has already been cast. On the turn it lands (turn 3) it is realistically a 1/4 or 2/4 flier;
by the turn-8 thesis it is typically a 4/4 to 6/4 that has also been shaving a mana off every spell in between.
The cost reduction is the half that matters earlier: it is what lets the deck cast a two-mana answer and still hold
up a second one.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:13  3:3  4:2  5:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.1: Raff, Weatherlight Stalwart@0.75, Raff, Weatherlight Stalwart@0.75, Haughty Djinn@0.6) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 16 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 49%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: White and blue offer no sweeper at common or uncommon in this pool, and the only rare option, The Phasing of Zhalfir, reads 'Destroy all creatures' - it would kill this deck's own accumulated Soldier board, which is the win condition. The deck blocks with its own tokens while Tura keeps adding one per spell and Valiant Veteran makes each of them a 2/2.
  OK        single_large_threat: Destroy Evil, Tolarian Geyser, Protect the Negotiators
  OK        noncreature_permanents: Destroy Evil, Negate, Protect the Negotiators
  OK        stack: Negate, Protect the Negotiators
  CONCEDED  graveyard: dossier.structural_census records 0 graveyard-hate cards in the entire cube, so no colour and no sideboard can answer this class.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Raff, Weatherlight Stalwart's '{3}{W}{W}: Creatures you control get +1/+1 and gain vigilance until end of turn' is a five-mana sink that converts surplus lands into damage across the whole Soldier board, and the vigilance clause means the pumped creatures still block afterwards. Valiant Veteran adds a second, graveyard-based sink that works after it has died: '{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control' - permanent counters on every token, from the yard. |
| screw | mitigation | 14 of the 23 nonland cards cost two mana or less. The goldfish check measured 86% keepable hands and a turn-2 play 96% of the time. The deck's cheap interaction (Negate, Destroy Evil, Protect the Negotiators, Impulse - all two mana) means a two-land hand is functional rather than dead, and Impulse x2 digs toward the third land. The turn-1 play rate is only 35%, which is correct for a deck whose plan does not begin until turn 2. |
| decapitation | mitigation | Tura answered on sight is the real risk, and there are three separate responses. First, redundancy: 2 copies of Tura and 2 of Raff, and because both are legendary the second copy exists precisely to replace an answered first. Second, protection: Shore Up x2 reads '+1/+1 and gains hexproof until end of turn' for a single {U}, held up on the turn Tura is cast. Third, an independent plan: Captain's Call x2 makes three Soldiers with no engine on the battlefield at all, and Haughty Djinn's power scales off the graveyard rather than off Tura. |
| gas-out | mitigation | Raff's draw is not free and not unconditional: it costs tapping two untapped creatures you control, so it draws nothing on a turn the board is empty or already attacking, and tapping two blockers to draw is a real cost against an aggressive opponent. The deck's own assembly model discounts each Raff copy to 0.75 for exactly this reason and this entry does not claim otherwise. What IS unconditional: Impulse x2, Tolarian Geyser x1 and Timely Interference x1 replace themselves with no board requirement at all - Timely Interference's resource_exchange is literally Cards: Self-Replacing. And Resolute Reinforcements x2 supplies BOTH of Raff's tap targets from a single card at flash ('Flash / When this creature enters, create a 1/1 white Soldier creature token'), so the two-body requirement is met by one draw rather than two. With Raff live and two bodies on the battlefield, all 14 instants and sorceries draw as well. |
| raced | accepted | This deck has a turn-1 play only 35% of the time and a goldfish turn of 8, so against the cube's fastest aggro it will be behind on board for the first three turns. Mitigating would mean adding cheap creatures in place of the two-mana interaction - and that interaction is the token engine here, since each spell is also a Soldier and a card. Trading it for bodies would produce a worse aggro deck than the three other builds in this shortlist while destroying what makes this one distinct. The partial answers it does have are Resolute Reinforcements x2 at flash for two blockers, Destroy Evil x2, and a sideboard with Frostfist Strider x2 and Essence Scatter x2 for exactly this matchup. |
| disruption-fizzle | mitigation | There is no single critical turn to disrupt - that is the structural advantage of this build. The engine produces one Soldier and one card per spell rather than assembling toward one lethal attack, so interaction aimed at any individual spell costs the deck one token and one card, not the game. The turn that matters most is casting Tura at {2}{W}{U}{U}, and that turn is protected by holding Shore Up ({U}, hexproof) or Negate ({1}{U}) alongside - both of which are themselves Tura triggers once she resolves. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' - Tura's Soldier tokens are mana value 0 and Raff himself is mana value 2, so it exiles this deck's own engine and its entire board. |
| The Phasing of Zhalfir | Chapter III reads 'Destroy all creatures' - the same problem: it kills the accumulated Soldier board that is this deck's win condition. |
| Djinn of the Fountain | {4}{U}{U} is six mana for a 4/4 flier; two copies would push the average mana value from 2.61 to about 3.0 and the land count with it, in a deck whose interaction wants to be held up. |
| Cosmic Epiphany | 'Draw cards equal to the number of instant and sorcery cards in your graveyard' at {4}{U}{U} - six mana, and the deck already converts each spell into a card through Raff at no extra cost. |
| Silver Scrutiny | An {X}{U}{U} draw spell competing for the same rare slot as Haughty Djinn, which turns the spell count into a clock rather than into more cards. |
| Essence Scatter | 'Counter target creature spell' is narrower than Negate against the noncreature bombs this deck loses to; kept in the sideboard for creature-dense matchups. |
| Ertai's Scorn | {1}{U}{U} is a double-blue counter on the same turn the deck wants to hold up {W}{U}; its discount requires the opponent to have cast two or more spells that turn. |
| Academy Wall | 'Whenever you cast an instant or sorcery spell, you may draw a card. If you do, discard a card' - a loot, not a draw, and 'only once each turn'; and a 0/5 defender cannot be tapped profitably for Raff since it never attacks anyway. |
| Volshe Tideturner | Its mana is restricted to instants, sorceries and kicked spells, which does not help cast Tura at {2}{W}{U}{U} - the deck's tightest cast. |
| Micromancer | It searches for an instant or sorcery with mana value exactly 1; this list runs 2 such cards (Shore Up x2), so the tutor finds one specific card. |
| Vesuvan Duplimancy | 'Whenever you cast a spell that targets only a single artifact or creature you control, create a token that's a copy' - only 2 of the 23 nonland cards (Shore Up x2) target a single creature you control, so the engine fires at most twice per game. |
| Tolarian Terror | Its discount needs instants and sorceries in the graveyard, which competes with Haughty Djinn for the same resource, and a 5/5 ground body does not close a game the Soldier tokens are already stalling. |
| Valiant Veteran | 'Other Soldiers you control get +1/+1' is a real payoff for the tokens, but at {1}{W} in a deck with 8 white sources it is the worst white double-duty card to compete with Serra Paragon's {2}{W}{W} for the same white mana. |
| Serra Redeemer | {3}{W}{W} in a deck whose white production is 47% - the double white is a real cost, and its counters land on tokens that Raff would rather simply tap for cards. |
| Stall for Time | Taps two creatures and cycles; a tempo tap does not advance a plan that wins by accumulating a board over eight turns. |
| Impede Momentum | A sorcery-speed tap with stun counters - this deck wants its spells at instant speed so that casting them and holding up interaction are the same turn. |
| Runic Shot | 'Destroy target tapped creature' - this deck is not the aggressor, so opposing creatures are usually untapped blockers when the answer is needed. |
| Take Up the Shield | Overlaps Shore Up as engine protection, but at {1}{W} rather than {U} and without the untap clause that re-enables Raff's tap-two draw cost. |
| Griffin Protector | Its +1/+1 is until end of turn and it costs four; Soaring Drake is a flier for one less mana and this deck's threat slots are spent on the engines. |
| Crystal Grotto | It taps for {C} and charges an extra {1} for a colour, which a deck casting {W}{U} on turn 2 and {2}{W}{U}{U} on turn 5 cannot afford. |
| Serra Paragon | Cut in the Phase 9 repair: at {2}{W}{W} off 8 white sources it is castable on curve in roughly 47% of games, and its recursion pool here was only 7 of the 10 nonland permanents. |
| Ertai's Scorn | {1}{U}{U} breaks this deck's core pattern of casting a two-mana spell AND holding up interaction on the same turn; its discount requires the OPPONENT to have cast two spells that turn, which this deck cannot plan around. Protect the Negotiators already counters any spell for two mana. |
| Founding the Third Path | Chapter I free-casts an instant or sorcery of mana value 1 or 2 and would double-trigger both engines, but a Saga pays its cost a turn before the payoff and this deck would rather spend turn 2 on Raff or a counterspell. |
| Pixie Illusionist | A {U} 1/1 flier would lower the turn Raff's tap-two cost is first payable, but Resolute Reinforcements already supplies both bodies from one card at flash. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.26 adj [MV 2.43 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  63.3%  prod  70.6%  gap  -7.3pp  [OK]
  W  demand  36.7%  prod  47.1%  gap -10.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                         cube_mainboard
commons_uncommons_max_2      PASS - no common or uncommon exceeds 2 combined copies
rares_mythics_max_1_each     PASS
rares_mythics_max_5_total    PASS - exactly 5 of 5: Haughty Djinn (R), Valiant Veteran (R) and the land Adarkar Wastes (R) mainboard; Anointed Peacekeeper (R) and Aether Channeler (R) sideboard.
basics_unlimited             9 Island + 5 Plains
```