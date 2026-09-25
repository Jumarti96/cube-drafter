---
deck_name: "wu-second-spell-engine"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WU"
format: "40-card"
built_at: "2026-08-03T04:50:35Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  9x Plains              Basic land, {W}
  6x Island              Basic land, {U}
  2x Idyllic Beachfront  WU dual; enters tapped
```

### CREATURES (13)

```
CMC  Card                    Qty   Color  Role                              Rar
  2  Honored Knight-Captain  x1    W      Token producer                    U
  2  Illvoi Operative        x2    U      Two-mana second-spell payoff      C
  2  Station Monitor         x2    UW     Second-spell token engine         U
  3  Cosmogrand Zenith       x1    W      Second-spell token engine         M
  3  Illvoi Infiltrator      x1    U      Second-spell evasion / card draw  U
  3  Uthros Psionicist       x1    U      Second-spell cost reducer         U
  4  Knight Luminary         x2    W      Token producer / warp rebuy       C
  4  Sunstar Lightsmith      x2    W      Second-spell draw engine          U
  5  Exalted Sunborn         x1    W      Token doubler                     M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                     Qty   Color  Role                           Rar
  1  Focus Fire               x2    W      Scaling removal                C
  1  Honor                    x1    W      Cantrip / counter              U
  2  Consult the Star Charts  x1    U      Card advantage / second spell  R
  2  Desculpting Blast        x1    U      Bounce / conditional token     U
  2  Mental Modulation        x1    U      Cantrip / tempo tap            C
  3  Emergency Eject          x1    W      Instant permanent answer       U
```

### OTHER SPELLS (3)

```
CMC  Card                 Qty   Color  Role                            Rar
  2  Lumen-Class Frigate  x1    W      Anthem                          R
  3  Banishing Light      x1    W      Unconditional permanent answer  C
  3  Moonlit Meditation   x1    U      Token-copy converter            R
```

## SIDEBOARD (10)

```
Card                Qty   Color  Role / When to board in                                          Rar
Annul               x2    U      Artifact/enchantment decks (29.7% artifacts, 6.4% enchantments)  U
Divert Disaster     x2    U      Cheap tax counter vs fast starts                                 C
Seam Rip            x2    W      Fast creature decks; one-mana exile of a cheap threat            U
Banishing Light     x1    W      Second catch-all vs bomb-heavy decks                             C
Emergency Eject     x1    W      Second instant answer                                            U
Dauntless Scrapbot  x1    C      Graveyard decks (31 cards / 12.5% of cube)                       U
Chrome Companion    x1    C      Graveyard decks; repeatable bottoming                            C
```

## ANALYSIS

### DECK IDENTITY

Azorius tokens scheduled around one repeated condition: cast a second spell each turn. SEVEN copies across FOUR cards read that exact trigger - Cosmogrand Zenith, Station Monitor x2, Illvoi Operative x2 and Sunstar Lightsmith x2 - and Illvoi Infiltrator reads the same two-spell condition as a STATIC evasion clause rather than a trigger, so eight copies across five cards are keyed to the habit, seven of which actually fire off the trigger. Moonlit Meditation upgrades one token-creation event per turn into copies of the enchanted permanent and Exalted Sunborn doubles the count; both are replacement effects on the same event, applied in the order you choose, so two Soldiers become four copies either way. Stated plainly, because the Phase 9 Challenger measured it twice: switching the engine off entirely still leaves this list killing on turn 7 unopposed. The pre-repair ablation gap was 11.1 percentage points of kill-by-turn-7; after the repair it is 9.3 points. The repair did NOT narrow that gap and was not able to - what it did was make the whole deck faster, from 60.4% to 73.4% kill-by-turn-7, mostly via Knight Luminary's raw curve rather than via the engine. The engine is a strong rider on a competent curve-out midrange deck, not the thing that wins the game. That is the honest description and it is the one shipped here.

### WHAT THIS DECK ACTUALLY IS

Seven copies across four cards read *"whenever you cast your second spell each turn"* — Cosmogrand Zenith, Station Monitor ×2, Illvoi Operative ×2, Sunstar Lightsmith ×2. Illvoi Infiltrator reads the same two-spell condition as a **static** clause (*"can't be blocked if you've cast two or more spells this turn"*), not a trigger, so eight cards are keyed to the habit but only seven fire off it.

**And the honest headline, measured twice by an independent adversarial agent across 9,000 simulated games: the engine is a rider, not the plan.** Switch every second-spell trigger off and this list still kills on turn 7 unopposed. The ablation gap was 11.1 percentage points of kill-by-turn-7 before the Phase 9 repair and **9.3 points after** — the repair did not narrow it. What the repair *did* do was make the deck materially faster overall, from **60.4% to 73.4% kill-by-turn-7**, and most of that came from Knight Luminary's raw curve rather than from the engine.

I am shipping that description rather than the one I started with ("a single habit pays three times"), because the second one did not survive measurement.

### WHY THE ENGINE UNDERPERFORMS, AND WHAT THE REPAIR ACTUALLY FIXED

The diagnosis is affordability, not design. Measured double-spell rates on turns 4–7 are roughly 40% / 48% / 49% / 41%, and the *reason* for failure changes as the game goes:

| Turn | fails on MANA | fails on HAND |
|---|---|---|
| 4 | **54.6%** | — |
| 6 | — | 28.6% |
| 7 | 14.1% | **44.5%** |

Early turns fail because two spells cost too much; late turns fail because the hand is empty. The repair attacked both ends. Payoff copies costing **two mana** went from 2 to 4 (Illvoi Operative ×2), and Knight Luminary ×2 came in for the hand-limited turns specifically — *"Warp {1}{W} … Exile this creature at the beginning of the next end step, **then you may cast it from exile on a later turn**"* is a token-creation event that costs **no card from hand**. Hand-limited failures fell from 34.8%/51.5% to 28.6%/44.5%.

### THE ONE COST REDUCER THAT CANNOT REDUCE THE COST THAT MATTERS

Uthros Psionicist reads *"The second spell you cast each turn costs {2} less."* It discounts a **generic** component, and 18 of 23 nonland cards have one. The five exceptions are Focus Fire ×2, Honor, and — the material pair — **Station Monitor ×2, whose `{W}{U}` has no generic component at all.** The deck's own cheapest and earliest payoff is discounted by exactly `{0}`. That is why it runs at one copy instead of two.

### THE MULTIPLIER MATH IS ORDER-INDEPENDENT

Moonlit Meditation and Exalted Sunborn are both replacement effects on the same token-creation event, so you choose the order and both orders agree:

- Meditation first → 2 Soldiers become 2 copies → Sunborn doubles → **4 copies**
- Sunborn first → 2 Soldiers become 4 → Meditation replaces the event → **4 copies**

Both Phase 9 agents verified this independently. Two limits, both real: the copies are trigger sources for **turn N+1 only** — a token copy of a "whenever you cast" permanent cannot trigger on the spell that created it, because it enters during resolution of that spell's trigger. And Moonlit Meditation reads *"Enchant artifact or creature you control"* — 14 of 23 nonland cards are legal targets, and Cosmogrand Zenith is one of them (type line `Creature — Human Soldier`, no Legendary supertype, so four copies coexist).

### THE MANA IS THE PRICE OF THE COLOUR PAIR

W/U's **only** dual is Idyllic Beachfront and it enters tapped. There is no untapped option anywhere in the pool. Two of 17 lands produce nothing on the turn they are played, on a deck whose whole plan is reaching four untapped mana. That is why `goldfish_turn` is 7 and not 5, and why `failure_modes.screw` is an `accepted` — mitigating means cutting Station Monitor (`{W}{U}`) and Exalted Sunborn (`{3}{W}{W}`), which are two of the seven trigger copies and the doubler.

The land count deserves a note: this deck was built to 17 against a recommended 16, on the compositional grounds that two lands enter tapped. The Phase 9 repairs raised average mana value to 2.609 and the model now recommends 17 outright, so the deviation resolved itself — and the Challenger's simulation showed the +1 had been **under**-corrected, not over-corrected, with turn 4 still failing on mana 54.6% of the time at 17 lands.

### SIDEBOARD

Rebalanced at Phase 9. Six of ten slots had been counterspells, which compete for mana with a plan that wants to tap out and cast two spells every turn; that is now four of ten. Unravel ×2 (`{1}{U}{U}` on an 8-source blue base) came out for **Seam Rip ×2** — a one-mana exile of a cheap threat, which is the cheap creature answer the accepted `raced` mode had none of.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:9  3:6  4:4  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.3: Cosmogrand Zenith@0.9, Moonlit Meditation@0.7, Exalted Sunborn@0.8, Lumen-Class Frigate@0.9) → p=0.94 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.3: Station Monitor@0.9, Station Monitor@0.9, Desculpting Blast@0.5) → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 46%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Focus Fire, Desculpting Blast
  OK        single_large_threat: Banishing Light, Emergency Eject
  OK        noncreature_permanents: Banishing Light, Emergency Eject
  OK        stack: Mental Modulation
  CONCEDED  graveyard: The mainboard runs no graveyard interaction: every slot is either an engine card reading the second-spell trigger or a cheap spell that exists to BE the second spell, and a hate piece would be neither. The class is answered from the sideboard by Dauntless Scrapbot (exiles each opponent's graveyard on entry, leaves a 3/1 body) and Chrome Companion (repeatable bottoming of a graveyard card).
```


### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Surplus lands convert into extra spells rather than sitting idle: the plan is casting TWO spells a turn, so the fifth and sixth land are what let the deck cast two three-drops instead of one, and Consult the Star Charts scales its dig with land count and can be kicked for a second card. Self-replacing cards number 4 of 23 nonland cards - Sunstar Lightsmith x2 (gated on the second-spell condition), Honor x1 and Mental Modulation x1 - corrected in the Phase 9 approval round from a stale figure of 6. |
| screw | accepted | This is the build's real weakness and it is accepted rather than mitigated. Both duals enter tapped, Station Monitor costs {W}{U} on turn 2, and the deck must reach four lands to double-spell reliably - the Challenger measured turn 4 failing on mana 54.6% of the time even at 17 lands. Mitigating means cutting the {W}{U} and {3}{W}{W} cards, Station Monitor x2 and Exalted Sunborn, which are two of the seven trigger copies and the doubler the kill arithmetic uses. The deck accepts a slower start - hence goldfish turn 7 - and leans on 12 of 23 nonland cards at one or two mana (curve 1:3, 2:9; corrected in the approval round from a stale 13). |
| decapitation | mitigation | The second-spell trigger is written across FOUR cards and SEVEN copies - Cosmogrand Zenith x1, Station Monitor x2, Illvoi Operative x2, Sunstar Lightsmith x2 - so answering any one of them leaves the habit paying several times over. Corrected in the Phase 9 approval round from a stale 'three cards across five copies'. Moonlit Meditation and Exalted Sunborn are multipliers, not prerequisites: the engine still makes Soldiers, a Drone and counters without either. |
| gas-out | mitigation | REPAIRED at Phase 9 - this was UNSATISFIED before. The Challenger measured turns 6 and 7 failing to double-spell for HAND reasons 34.8% and 51.5% of the time, and correctly showed that Honor and Mental Modulation are card-NEUTRAL while Sunstar Lightsmith's draw is circular, gated on the very condition that is failing. The load-bearing repair is Knight Luminary x2: `Warp {1}{W} … Exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn` supplies a token-creation event on a hand-limited turn that spends NO card from hand. Measured working - hand-limited failures fell to 28.6% and 44.5%. Consult the Star Charts adds depth rather than raw cards, and is scoped honestly per approval round 2: unkicked it spends one card and returns one, so it is card-NEUTRAL selection with the same economy as Honor and Mental Modulation, and it is card-positive only when kicked at {2}{U}{U} - four mana and double blue against 8 blue sources and two enters-tapped duals. Illvoi Infiltrator draws on combat damage and is unblockable on the turns the deck is double-spelling. |
| raced | accepted | Two enters-tapped duals and a turn-7 goldfish mean the fastest decks in the cube get a real head start, and the deck accepts it. Mitigating would mean maindecking cheap creature removal over the second-spell fuel the engine runs on. One correction from Phase 9 that makes this worse rather than better, recorded rather than hidden: the Drone token from Desculpting Blast reads 'This token can block ONLY creatures with flying', so it is not a blocker at all against a ground race - the earlier text that called it 'a flying blocker' was wrong. What the deck actually has: Focus Fire x2 scaling off its own board, Illvoi Infiltrator's lifelink-free but evasive clock, Exalted Sunborn's 4/5 flying lifelink body, and Seam Rip x2 in the sideboard as the one-mana answer to a cheap fast threat. |
| disruption-fizzle | mitigation | The critical turn is repeated, not singular - all seven trigger copies read 'each turn', so a counterspell aimed at one trigger turn costs one turn of tokens rather than the plan, and Sunstar Lightsmith's draw means an answered turn is often replaced with a card. Corrected at Phase 9: an earlier version claimed Mental Modulation could 'force the trigger through on the opponent's end step', which is false by the payoffs' own text - one instant on the opponent's turn is that turn's FIRST spell and triggers nothing. That is the exact error used to reject the 'most flexible toolbox' sketch, and repeating it here was inconsistent. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Devastating Onslaught | Requires {R} — outside this build's colours and the defining payoff of the separate W/R build. |
| Weftstalker Ardent | Requires {R} — outside this build's colours. |
| Starwinder | Whenever a creature you control deals combat damage to a player, you may draw that many cards — a genuine go-wide payoff, but {5}{U}{U} hard-cast or warp {2}{U}{U} for one turn, and this build's fixing is two enters-tapped duals, so a double-blue four-drop competes directly with the second-spell curve. |
| Quantum Riddler | 4/6 flier with a draw-boost at {3}{U}{U}, warp {1}{U} — strong, but double-blue on a two-tapped-dual mana base, and it produces no tokens. |
| Weftwalking | Refills to seven cards and lets the first spell each turn be free — but 'the first spell each player casts' also helps the opponent, and at {4}{U}{U} it is off this build's curve. |
| Mm'menon, the Right Hand | Casts artifact spells off the top of the library; this list runs 6 artifact cards of 23 nonland, so the top-of-library clause is live only about a quarter of the time. |
| Auxiliary Boosters | ETB 2/2 Robot plus flying is a real token event, but at mana value 5 it is off-curve for a deck that wants to cast two spells per turn from turn 4. |
| Pinnacle Starcage | ETB exiles ALL artifacts and creatures with mana value 2 or less; token creatures have mana value 0, so it exiles this deck's own board. |
| Space-Time Anomaly | Mills the target player for your life total — a self-mill/graveyard card with no token or second-spell interaction in this build. |
| Tractor Beam | Steals a creature or Spacecraft for {2}{U}{U}; double-blue on a two-tapped-dual base, and it is a one-for-one that does not advance the token engine. |
| Specimen Freighter | Bounces two creatures at mana value 6; too slow for a turn-7 clock and its 9+ Station threshold is unreachable off 1/1 and 2/2 tokens. |
| Mechanozoa | 5/5 for {4}{U}{U} with a stun-counter ETB; double blue at mana value 6. |
| Thrumming Hivepool | Affinity for Slivers; this deck runs 0 Sliver cards, so it always costs the full {6}. |
| Adagia, Windswept Bastion | Its copy ability needs 12+ charge counters and the land enters tapped — this build already runs two enters-tapped duals and cannot afford a third slow land. |
| Uthros, Titanic Godcore | Enters tapped and its mana ability needs 12+ charge counters; same land-speed objection. |
| Dawnsire, Sunstar Dreadnought | Needs 10+ charge counters; this is P4's payoff and stationing taps the creatures this build wants attacking. |
| Beyond the Quiet | Exiles all creatures and Spacecraft — a symmetric sweeper that destroys the go-wide board it would protect. |
| Sunstar Chaplain | 3/2 for {1}{W} is a fine body, but it reads 'two or more tapped creatures' rather than the second-spell trigger this build is scheduled around, and it would consume one of only 6 rare/mythic slots. |
| Gigastorm Titan | 4/4 that costs {3} less if you've cast another spell this turn — genuinely cheap on a second-spell turn, but it is a vanilla body that produces no tokens and triggers nothing. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 1   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.19 adj [MV 2.61 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  38.5%  prod  47.1%  gap  -8.6pp  [OK]
  W  demand  61.5%  prod  64.7%  gap  -3.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Base = cube mainboard only ........................................ PASS
Commons/uncommons max 2 copies each (mainboard + sideboard) ....... PASS
Rares/mythics max 1 copy each ..................................... PASS
Max 6 rares+mythics across mainboard and sideboard ................ PASS (5/6: Cosmogrand Zenith M, Moonlit Meditation R, Exalted Sunborn M, Lumen-Class Frigate R, Consult the Star Charts R - all mainboard; 0 in sideboard)
All cards drawn from the eoe cube pool ............................ PASS
Basic lands format-supplied, unlimited ............................ PASS (9 Plains, 6 Island)
Mainboard = 40 cards .............................................. PASS
Sideboard = 10 cards .............................................. PASS
```