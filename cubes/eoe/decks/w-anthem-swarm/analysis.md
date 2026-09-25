---
deck_name: "w-anthem-swarm"
cube_id: "eoe"
cube_slug: "eoe"
colors: "W"
format: "40-card"
built_at: "2026-08-03T04:15:36Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  17x Plains  Basic land, untapped, {W}
```

### CREATURES (13)

```
CMC  Card                    Qty   Color  Role                               Rar
  2  Honored Knight-Captain  x2    W      Token producer                     U
  2  Sunstar Chaplain        x1    W      Two-drop body / counters           R
  3  Brightspear Zealot      x2    W      Vigilance attacker / Station fuel  C
  3  Cosmogrand Zenith       x1    W      Token engine / anthem              M
  3  Dual-Sun Adepts         x2    W      Mass pump / mana sink              U
  3  Rayblade Trooper        x2    W      Token producer                     U
  4  Sunstar Lightsmith      x2    W      Draw engine / counters             U
  5  Exalted Sunborn         x1    W      Token doubler                      M
```

### INSTANTS & SORCERIES (6)

```
CMC  Card             Qty   Color  Role               Rar
  1  Focus Fire       x2    W      Scaling removal    C
  1  Honor            x2    W      Cantrip / counter  U
  3  Zealous Display  x2    W      Finisher pump      C
```

### OTHER SPELLS (4)

```
CMC  Card                 Qty   Color  Role                            Rar
  2  Lumen-Class Frigate  x1    W      Anthem (kill mechanism)         R
  3  Banishing Light      x1    W      Unconditional permanent answer  C
  4  Wedgelight Rammer    x2    W      Token producer                  U
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                      Rar
Radiant Strike           x2    W      Artifact decks (29.7% of cube is artifacts)  C
Emergency Eject          x2    W      Instant answer to a single large threat      U
Banishing Light          x1    W      Second catch-all vs bomb-heavy decks         C
Dauntless Scrapbot       x1    C      Graveyard decks (31 cards / 12.5% of cube)   U
Reroute Systems          x1    W      Sweeper decks; pre-empt with indestructible  U
All-Fates Stalker        x1    W      Creature decks; body plus exile              U
Hardlight Containment    x1    W      One-mana exile vs creature decks             R
Haliya, Guided by Light  x1    W      Grindy matchups; repeatable draw             R
```

## ANALYSIS

### DECK IDENTITY

Mono-white go-wide token aggro. Lumen-Class Frigate is a two-mana permanent anthem: Station is a cost paid by tapping another creature, so one tap of Sunstar Chaplain — the deck's only two-mana body with power 2 or greater — reaches its `2+ | Other creatures you control get +1/+1` threshold the turn the Frigate lands, and any two 1/1 Soldier tokens reach it in two taps. Seven token-producer slots flood the board, Exalted Sunborn doubles every one of those creations, and Zealous Display converts the anthem'd swarm into lethal on turn five. Brightspear Zealot's vigilance is what keeps the anthem's cost and the clock from competing: it attacks and is still untapped to pay Station. Every land is an untapped Plains, so the curve is never taxed.

### HOW THE CLOCK ACTUALLY WORKS

Station is the load-bearing rules detail and it is easy to misread. It is an ability of the *Spacecraft*, and its cost is "Tap another creature you control" — not a `{T}` symbol on the creature. Two consequences follow, and the whole deck is built on them:

1. **Summoning sickness is irrelevant.** A creature that entered this turn is a legal Station cost. So is a token created this turn.
2. **The charge counters equal the tapped creature's power.** A 1/1 Soldier pays 1. Sunstar Chaplain, a 3/2 for `{1}{W}`, pays 3 — and it is the only creature in the mono-white pool at mana value 2 with power 2 or greater. That is why it holds a rare slot in a deck whose ability text the Phase 5B judge dismissed: the *body* is the reason, not the ability.

Lumen-Class Frigate needs only 2 charge counters for `2+ | Other creatures you control get +1/+1`. One Sunstar Chaplain tap gets there. Two 1/1 Soldiers get there. Either way the anthem is live on turn 3 and never turns off, because below 12 counters the Frigate is a **noncreature artifact** — creature removal and creature sweepers cannot touch it.

### THE VIGILANCE PROBLEM, AND WHY BRIGHTSPEAR ZEALOT IS IN THIS DECK

The Phase 9 Challenger found the real structural tension: the deck runs three permanents that want Station taps (Lumen-Class Frigate, Wedgelight Rammer ×2), and every tap is a creature removed from the attack. Before repair, **0 of 12 creature cards had vigilance**, so the anthem's cost and the clock were in direct competition.

Brightspear Zealot is the only vigilance body in white in this pool. It attacks, stays untapped, and pays a Station cost in the same turn. Its own `+2/+0 as long as you've cast two or more spells this turn` clause reads the same condition Cosmogrand Zenith is built on, so it is a 4/4 on exactly the turns the engine is firing.

### COUNT-DEPENDENT VERDICTS (recomputed against the shipped 23 nonland cards)

| Card | Verdict | Count against this list |
|---|---|---|
| Focus Fire | INCLUDE | `X = 2 plus the number of creatures and/or Spacecraft you control`. 13 creature cards + 3 artifact/Spacecraft permanents of 23 nonland, plus tokens. At a typical turn-4 board of 4 permanents it deals 6 for `{W}` at instant speed. |
| Cosmogrand Zenith | INCLUDE | Needs a second spell each turn. Curve is 1:4 2:4 3:10 4:4 5:1 — 8 of 23 at MV ≤ 2, 18 of 23 at MV ≤ 3. Live on most turns from four lands. |
| Sunstar Lightsmith | INCLUDE | Same denominator; converts an already-paid condition into repeatable draw. Card economy rises from 2 of 23 to 4 of 23. |
| Rayblade Trooper | INCLUDE | Death trigger needs a **nontoken** creature carrying a +1/+1 counter. Counter sources: 8 of 23 nonland cards, against 13 nontoken creature cards. |
| Brightspear Zealot | INCLUDE | Vigilance creatures went from 0 of 12 to 2 of 13, against 3 permanents demanding Station taps. |
| Honored Knight-Captain | INCLUDE (ETB only) | Its `{4}{W}{W}` Equipment tutor is **blank**: 0 of the 50 mainboard-plus-sideboard cards have Equipment in their type line. The card earns its slot on the ETB token alone. |
| Thrumming Hivepool | EXCLUDE | Affinity for Slivers; 0 Sliver cards of 23 nonland, so it always costs the full `{6}`. |

### WHAT THE DECK GAVE UP AT PHASE 9

The repairs were not free, and the Challenger recorded the cost rather than letting it pass: cutting Knight Luminary ×2 dropped token-producer slots from **9 to 7**, so Exalted Sunborn's `twice that many of those tokens are created instead` has two fewer cards to double. The deck traded raw width for card economy (Sunstar Lightsmith) and for the vigilance that resolves the Station tension. Both structural gates still pass. If you want the go-wide plan thicker, Knight Luminary is the first card back in.

### MANA

There is nothing to discuss, which is the point. 24 `{W}` pips, 17 Plains, 100% demand against 100% production, and **zero lands that enter tapped**. Every nonbasic land a mono-white deck could play was rejected on a land property: Adagia enters tapped and needs 12 charge counters, Secluded Starforge taps for `{C}` which pays none of the 24 pips, and Command Bridge both enters tapped and sacrifices itself unless you tap another permanent. The single `{W}{W}` card, Exalted Sunborn, has Warp `{1}{W}`.

### SIDEBOARD LOGIC

Built against `dossier.threat_profile`, not against this deck. The cube is **29.7% artifacts** (74 of 249) — the largest single class — and white holds only one of the cube's four artifact answers, so Radiant Strike ×2 is the highest-leverage pair of slots available. The **31-card / 12.45% graveyard class** is answered by Dauntless Scrapbot, a colourless 3/1 whose ETB exiles each opponent's graveyard, so it is a body rather than a dead card in the matchups where the class does not appear. Reroute Systems pre-empts the destroy-and-damage sweepers with indestructible instead of rebuilding after them.

One honest caveat on the sweeper count: the dossier's regex census reports 5 sweepers, but it **missed Beyond the Quiet** (`Exile all creatures and Spacecraft`), which is white. The true count facing this deck is at least 6, and one of them exiles rather than destroys — which Reroute Systems does not stop.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:4  3:10  4:4  5:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 5.4: Exalted Sunborn@0.8, Cosmogrand Zenith@0.8, Dual-Sun Adepts@0.6, Dual-Sun Adepts@0.6, Zealous Display@0.8, Zealous Display@0.8) → p=0.82 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.8: Cosmogrand Zenith@0.8) → p=0.89 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 89% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 58%  T2 89%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Focus Fire, Zealous Display
  OK        single_large_threat: Banishing Light
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: White has no counterspell in this pool; the deck's answer to a stack-based plan is a turn-five clock that ends the game before a reactive deck stabilises.
  CONCEDED  graveyard: The mainboard runs no graveyard interaction: every slot is a token producer, an anthem, or a one-mana answer that feeds Cosmogrand Zenith's second-spell trigger, and adding a hate piece would cost one of those. The class is answered from the sideboard instead - Dauntless Scrapbot exiles each opponent's graveyard on entry and leaves a 3/1 body, so it is not a dead draw in the matchups where the class does not appear.
```


### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Dual-Sun Adepts turns every surplus land into board-wide damage: `{5}: Creatures you control get +1/+1 until end of turn` is a repeatable sink with no cap. Honor (`Put a +1/+1 counter on target creature. Draw a card.`) and Sunstar Lightsmith (`put a +1/+1 counter on this creature and draw a card`) both convert spare mana into cards, and Lumen-Class Frigate's Station converts idle bodies into a permanent anthem rather than needing more mana. |
| screw | mitigation | Eight of the twenty-three nonland cards cost one or two mana and eighteen cost three or less, and three more (Rayblade Trooper x2, Exalted Sunborn) have Warp {1}{W}, so a two-land hand still deploys a threat every turn. Every land is an untapped Plains, so there is no colour screw at all. |
| decapitation | mitigation | Lumen-Class Frigate is a noncreature artifact below 12 charge counters, so creature removal and creature sweepers cannot answer the anthem. If it is answered anyway, Cosmogrand Zenith's `Put a +1/+1 counter on each creature you control` and Dual-Sun Adepts' `{5}: Creatures you control get +1/+1` are two further mass-pump lines, and Zealous Display x2 still converts width to lethal without any anthem in play. |
| gas-out | mitigation | Two independent refuels. Card economy: Honor x2 (`Draw a card`) and Sunstar Lightsmith x2 (`put a +1/+1 counter on this creature and draw a card` on every second-spell turn) are 4 of 23 nonland cards tagged Cards: Self-Replacing or Net-Positive. Board economy: Honored Knight-Captain and Wedgelight Rammer each put two permanents on the battlefield from one card, and Cosmogrand Zenith produces two bodies every turn a second spell is cast. Haliya, Guided by Light comes in from the sideboard for the grindiest matchups. |
| raced | mitigation | Focus Fire deals `2 plus the number of creatures and/or Spacecraft you control` to an attacking or blocking creature - with four bodies out that is 6 damage at instant speed for {W}. Zealous Display's `If it's not your turn, untap those creatures` turns a tapped-out attack into a full blocking wall on the crack-back, and Brightspear Zealot's vigilance means it was never tapped in the first place. Exalted Sunborn's lifelink on a 4/5 flier swings a race outright. |
| disruption-fizzle | accepted | The critical turn is the alpha strike, and one removal spell aimed at Exalted Sunborn or one counterspell on Zealous Display genuinely costs a turn of damage. Mitigating this in the mainboard would mean running Reroute Systems over a token producer, which shrinks the board the whole plan is built on - so Reroute Systems sits in the sideboard instead. The deck accepts the loss of one turn and relies on redundancy: seven weighted payoff copies and seven token-producer slots mean no single answer stops the clock twice. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Knight Luminary | ETB 1/1 Soldier plus warp {1}{W} — a genuine token producer, cut at Phase 9 to pay for Sunstar Lightsmith x2 and Brightspear Zealot x2. The cost is real and is recorded: token-producer slots fell from 9 to 7, so Exalted Sunborn has two fewer cards to double. The first swap-back candidate if you want the go-wide plan thicker at the expense of card economy. |
| Dockworker Drone | 1/1 artifact creature entering with a +1/+1 counter (so a 2/2 for {1}{W}) that passes its counters on when it dies — cut for Brightspear Zealot, which is a 2/4 with vigilance at the same slot and can attack and still pay a Station cost in the same turn. |
| Seam Rip | One-mana exile, but capped at 'mana value 2 or less'. The Phase 9 Challenger reproduced that 131 of the 196 unique nonland permanents in this pool (67%) are mana value 3 or greater, so it cannot answer the class it was credited for. Replaced in the mainboard by Banishing Light, which has no mana-value cap. |
| Auxiliary Boosters | ETB 2/2 Robot plus flying is a real token event, but at mana value 5 it is off-curve for the locked lowest-curve build, and the shape judge flagged its Equip {3} re-attachment as unaffordable on turns 3-5. |
| Scout for Survivors | Returns up to three creature cards with TOTAL mana value 3 or less. This deck runs 0 creature cards at mana value 1 or less (the creature MV multiset is 2,2,2,3,3,3,3,4,4,5), so the budget buys exactly one creature. Its sideboard sweeper role went to Reroute Systems, which pre-empts a sweeper with indestructible instead of rebuilding after one. |
| Luxknight Breacher | Enters with a +1/+1 counter for each other creature and/or artifact you control — on the deck's typical turn-4 board of 4 permanents that is a 6/6 for four mana, and it is a nontoken creature arriving with counters, which feeds Rayblade Trooper. Genuinely close; it lost the mana-value-4 slot to Sunstar Lightsmith x2, which is repeatable card advantage rather than one large body. Strong swap-back candidate. |
| Dual-Sun Technique | Double strike plus a conditional cantrip; 8 of the 23 nonland cards place +1/+1 counters so the draw clause turns on often, and doubling a creature already raised by the anthem is a short line to lethal. Cut because it is a one-shot trick where the slot it wanted holds a repeatable engine. |
| Starport Security | A one-mana artifact creature — the deck runs 0 creature cards at mana value 1, so it is the only turn-one body available, and its tap-down costs {1}{W} rather than {3}{W} whenever a +1/+1 counter is on board (8 of 23 cards make that true). Cut because a 1/1 is poor Station fuel: Station puts charge counters equal to the tapped creature's POWER, so a 1/1 pays half what Sunstar Chaplain pays. |
| Wurmwall Sweeper | A {2} colourless Spacecraft whose 4+ flying threshold is genuinely reachable where Wedgelight Rammer's 9+ is not. Contested and withdrawn at Phase 9 on oracle grounds: Station reads 'Tap another creature you control', so a fourth Station sink competes for a fixed supply of taps rather than expanding it — the deck has 13 creature cards against 3 existing Station permanents. |
| Pinnacle Starcage | ETB exiles ALL artifacts and creatures with mana value 2 or less; token creatures have mana value 0, so it exiles this deck's own board. Anti-synergy, not a payoff. |
| Beyond the Quiet | Exile all creatures and Spacecraft — a symmetric sweeper that destroys the go-wide board it is meant to protect. Note the cube's sweeper census missed this card, so the real sweeper count facing this deck is 6, not the 5 the dossier reports. |
| Thrumming Hivepool | Affinity for Slivers reduces its cost by 1 per Sliver controlled; this deck runs 0 Sliver cards of 23 nonland, and the only Slivers it could ever control are the tokens it makes after resolving, so it always costs the full {6}. |
| Adagia, Windswept Bastion | Copy ability requires 12+ charge counters and the land enters tapped; reaching 12 costs multiple turns of Station taps that would otherwise be attacks, and the tapped land delays the turn-3 Frigate deployment. |
| Secluded Starforge | {5},{T}: create a 2/2 Robot — but it taps for {C} only, which cannot pay any of this list's 24 {W} pips, and the token costs five mana. |
| Dawnsire, Sunstar Dreadnought | Requires 10+ charge counters before any ability turns on; stationing taps creatures instead of attacking, which is the opposite of this build's clock. This is the P4 (wc-station-payload) payoff. |
| The Seriema | Its ETB tutors a legendary creature; this list runs 0 legendary creatures, so the ability is blank. |
| Flight-Deck Coordinator | A two-or-more-tapped-creatures payoff whose reward is 2 life; this build converts tapped creatures into +1/+1 counters via Sunstar Chaplain instead, which advances the clock rather than delaying a loss. |
| Pulsar Squadron Ace | Digs five cards for a Spacecraft card; this list runs 3 Spacecraft/artifact permanents of 23 nonland cards (Lumen-Class Frigate, Wedgelight Rammer x2), so the dig whiffs more often than it hits. |
| Lightstall Inquisitor | Lets each opponent exile a card from hand and play it — card advantage for the opponent in a deck that wins by racing. |
| Astelli Reclaimer | 5/4 flier at {3}{W}{W} returning a noncreature nonland permanent; the curve top of an aggro deck goldfishing on turn 5, and it would consume one of only 6 rare/mythic slots (already at 6/6). |
| Weftblade Enhancer | Two +1/+1 counters for {5}{W} (warp {2}{W}); the counters are fine but six mana is off-curve for a turn-5 clock. |
| Moonlit Meditation | Off-colour (U), and the defining payoff of the separate W/U build. |
| Devastating Onslaught | Off-colour (R), and the defining payoff of the separate W/R build. |
| Starwinder | {5}{U}{U}, warp {2}{U}{U} — off-colour, and seven mana is outside a mono-W aggro curve even before the fixing cost. |
| Infinite Guideline Station | Creates a Robot for each MULTICOLORED permanent you control; a mono-white deck controls 0 multicolored permanents, so both its ETB and its attack-draw trigger are blank. |
| Ruinous Rampage / Lithobraking / other sweepers (sideboard consideration) | Off-colour (R). The mono-white sideboard cannot access a sweeper, which is why Reroute Systems (indestructible pre-emption) holds the anti-sweeper slot instead. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.74   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.01 adj [MV 2.74 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Base = cube mainboard only ........................................ PASS
Commons/uncommons max 2 copies each (mainboard + sideboard) ....... PASS
Rares/mythics max 1 copy each ..................................... PASS
Max 6 rares+mythics across mainboard and sideboard ................ PASS (6/6: Lumen-Class Frigate R, Cosmogrand Zenith M, Exalted Sunborn M, Sunstar Chaplain R mainboard; Hardlight Containment R, Haliya Guided by Light R sideboard)
All cards drawn from the eoe cube pool ............................ PASS
Basic lands format-supplied, unlimited ............................ PASS (17 Plains)
Mainboard = 40 cards .............................................. PASS
Sideboard = 10 cards .............................................. PASS
```