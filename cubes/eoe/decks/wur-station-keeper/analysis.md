---
deck_name: "wur-station-keeper"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WUR"
format: "40-card"
built_at: "2026-08-03T00:20:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
5x Plains                  
3x Mountain                
2x Island                  
2x Sacred Peaks            WR dual, enters tapped
2x Idyllic Beachfront      WU dual, enters tapped
2x Molten Tributary        UR dual, enters tapped
1x Sacred Foundry          WR shock, only untapped-capable dual
```

### CREATURES (10)

```
CMC  Card                     Qty  Color  Role                                                                                      Rar
  2  Dockworker Drone         x2   W      Enabler — 2-power stationer whose counters survive its death                              C
  2  Sunstar Chaplain         x1   W      Enabler+Payoff — 3-power stationer; tapped-creature counter engine and a tap-down outlet  R
  3  Flight-Deck Coordinator  x1   W      Enabler+Payoff — 3-power stationer, gains 2 life per Station turn                         C
  3  Frontline War-Rager      x2   R      Enabler+Payoff — grows itself every turn the deck stations                                C
  3  Nanoform Sentinel        x2   U      Enabler — tapping it untaps another permanent, doubling a Station turn                    C
  4  Sami, Ship's Engineer    x1   RW     Payoff — free tapped 2/2 Robot every end step the deck stations                           U
  6  Dawnstrike Vanguard      x1   W      Payoff — raises every stationer's power, which raises every future Station yield          U
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                     Qty  Color  Role                                                                                      Rar
  2  Drill Too Deep           x2   R      Interaction/Enabler — five charge counters at instant speed, or destroy an artifact       C
  3  Emergency Eject          x1   W      Interaction — instant-speed destroy any nonland permanent                                 U
  3  Lithobraking             x1   R      Interaction — self-feeding sweeper; 2 damage to each creature, Spacecraft take none       U
```

### OTHER SPELLS (9)

```
CMC  Card                     Qty  Color  Role                                                                                      Rar
  1  Hardlight Containment    x1   W      Interaction — 1-mana exile; grants ward {1} to the Spacecraft it enchants                 R
  1  Synthesizer Labship      x1   U      Payoff — 1-mana Spacecraft; at 2+ animates an artifact as a 2/2 flier each combat         R
  2  Lumen-Class Frigate      x1   W      Payoff — anthem at 2 charge counters                                                      R
  2  Wurmwall Sweeper         x2   C      Payoff — early colorless Spacecraft, surveil 2 on entry, flips at 4                       C
  3  Banishing Light          x1   W      Interaction — exile any nonland permanent                                                 C
  3  Warmaker Gunship         x1   R      Payoff — ETB removal scaling with artifact count, 4/3 flier at 6                          R
  4  Uthros Scanship          x1   U      Payoff — refuels on entry, 4/4 hull                                                       U
  6  Galvanizing Sawship      x1   R      Payoff — 6/5 flying haste at only 3 charge counters                                       U
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in                                                                   Rar
Annul                    x2   U      Counter artifact/enchantment spells — 90 legal targets in the cube                        U
Chrome Companion         x1   C      Graveyard hate on a colorless stationer body                                              C
Banishing Light          x1   W      Second catch-all exile                                                                    C
Cut Propulsion           x2   R      Double damage to fliers — vs the cube's 56 evasion cards                                  U
Dauntless Scrapbot       x1   C      Exile each opponent's graveyard — vs the cube's 31 graveyard cards                        U
Emergency Eject          x1   W      Second universal answer for permanent-heavy matchups                                      U
Lithobraking             x1   R      Second sweeper vs wide boards / token decks                                               U
Radiant Strike           x1   W      Destroy artifact or tapped creature +3 life — vs the cube's 74 artifacts                  C
```

## ANALYSIS

### DECK IDENTITY

A W/U/R midrange deck built on Station, the mechanic that lets you tap a creature to put charge counters equal to its power onto a Spacecraft. Every creature in this list is therefore two resources at once: a body that blocks, and a battery that charges a hull. The same act of tapping turns on a whole cycle of 'if you control two or more tapped creatures' payoffs — Sami, Ship's Engineer manufactures a free tapped 2/2 Robot every end step, Sunstar Chaplain hands out counters, Flight-Deck Coordinator buys life, Frontline War-Rager grows itself. The deck wins in the air with Galvanizing Sawship, a 6/5 flier with haste that needs only three charge counters, and Warmaker Gunship, whose entry damage equals your artifact count.

### THE MECHANIC THAT PAYS ITSELF TWICE

Station reads: *"Tap another creature you control: Put charge counters equal to its power on this Spacecraft. Station only as a sorcery."* Read literally, that is a cost — you give up a creature's turn to charge a hull. This deck is built on the observation that the cost is also a trigger. White prints a whole cycle of cards gated on **"if you control two or more tapped creatures"**, and Station is the cheapest, most repeatable way in the cube to satisfy that condition on demand, without attacking into anything.

| Card | What it pays, every turn you Station |
|---|---|
| Sami, Ship's Engineer | a tapped 2/2 Robot artifact creature token |
| Sunstar Chaplain | a +1/+1 counter on any creature |
| Frontline War-Rager ×2 | a +1/+1 counter on itself |
| Flight-Deck Coordinator | 2 life |
| Dawnstrike Vanguard | a +1/+1 counter on **every** other creature |

Sami is the one that makes this a deck rather than a pile. Her Robot enters **tapped**, which means it counts toward next turn's "two or more tapped creatures" on its own, and it is a fresh 2-power Station battery the turn after that. From an empty hand she manufactures ammunition indefinitely.

### THE THRESHOLD ARITHMETIC IS THE WHOLE BUILD

Charge counters equal the tapped creature's **power**, one creature per activation. This deck's stationers are Dockworker Drone (2, with its own counter), Nanoform Sentinel (3), Frontline War-Rager (2, growing), Flight-Deck Coordinator (3), Sunstar Chaplain (3), Sami (2), Dawnstrike Vanguard (4), plus 2/2 Robot tokens — a mean of about **2.7 power per activation**. That single number decided which Spacecraft made the deck:

| Spacecraft | Threshold | Activations needed |
|---|---|---|
| Synthesizer Labship | 2+ (animate mode) | 1 |
| Lumen-Class Frigate | 2+ (anthem mode) | 1 |
| Galvanizing Sawship | 3+ (flying, haste) | 1 |
| Wurmwall Sweeper ×2 | 4+ (flying) | 1 large or 2 small |
| Warmaker Gunship | 6+ (flying) | 2 |
| *Uthros Scanship* | *8+* | *3 — not part of the plan* |
| *Debris Field Crusher* | *8+* | *3 — cut* |
| *Adagia, Windswept Bastion* | *12+* | *5 — cut* |

Six of the seven Spacecraft copies flip at 6 or under. Uthros Scanship is the only exception and it is in the deck purely for *"draw two cards, then discard a card"* on entry — its 8+ mode is not counted toward any role. This is also why every Planet in the cube was cut: they gate their payoffs at 12+, and they compete with the Spacecraft for the same activations.

### NANOFORM SENTINEL DOUBLES A TURN

*"Whenever this creature becomes tapped, untap another target permanent. This ability triggers only once each turn."* Tap Nanoform Sentinel to Station — that is 3 counters — and its trigger untaps a creature you already stationed with, which can then Station again. Two activations from one turn's worth of creatures. It is the only card in these colours that raises the deck's counter *rate* rather than its counter *total*, and Drill Too Deep is the only card that raises the total in one shot (five counters, at instant speed).

### WHY LITHOBRAKING IS NOT SYMMETRICAL HERE

*"Create a Lander token. Then you may sacrifice an artifact. When you do, Lithobraking deals 2 damage to each creature."* Two things make this one-sided in this list. First, **all seven Spacecraft are noncreature permanents** until they hit a charge threshold, so they take nothing — the deck's actual threat base is immune to its own sweeper. Second, the sacrifice cost is **self-fed**: the Lander token it creates is itself an artifact, so it never needs another permanent. Of the deck's ten creature cards it kills five (Dockworker Drone ×2, Sunstar Chaplain, Nanoform Sentinel ×2) and spares five (Frontline War-Rager ×2, Flight-Deck Coordinator, Sami, Dawnstrike Vanguard) — so it is an instant you hold until the count favours you, not a card you fire on sight.

### A RULES POINT THAT MATTERS IN PRACTICE

Tapping the creature is a **cost** of the Station ability, not an ongoing requirement. Once you activate, killing the creature in response does not stop the charge counters from being placed. That makes the deck unusually resistant to being interacted with on its critical turn — combined with Drill Too Deep placing five counters at instant speed, a Spacecraft can complete its flip on the opponent's turn in response to their removal.

### SINGLE PIPS ONLY

There is no `{W}{W}` or `{U}{U}` anywhere in the 23 nonland cards. That was a hard build constraint, not a coincidence: six of seventeen lands enter tapped and Sacred Foundry is the only untapped-capable dual in the entire colour identity. The Seriema (`{1}{W}{W}`) would have tutored Sami and given tapped legendary creatures indestructible — a genuinely elegant fit — and it was cut on the pip test alone.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:9  4:2  6:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 12 copies (effective 11.45: Galvanizing Sawship@0.75, Dawnstrike Vanguard@0.7) → p=0.99 (need ≥ 0.75)
  PASS  enabler: 11 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 89% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 29%  T2 91%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Lithobraking, Warmaker Gunship
  OK        single_large_threat: Hardlight Containment, Banishing Light, Emergency Eject, Warmaker Gunship
  OK        noncreature_permanents: Banishing Light, Emergency Eject, Drill Too Deep
  CONCEDED  stack: No mainboard counterspells. Station is a sorcery-speed activated ability, so every turn's mana is committed on the deck's own turn; holding up {U} forfeits a Station activation, which is the resource the kill mechanism consumes. Annul is in the sideboard for artifact/enchantment-heavy matchups.
  CONCEDED  graveyard: No mainboard graveyard hate; the mainboard slots are spent on stationers and Spacecraft. Chrome Companion ('{2}, {T}: Put target card from a graveyard on the bottom of its owner's library') and Dauntless Scrapbot ('exile each opponent's graveyard') are both in the sideboard against the cube's 31 graveyard-interaction cards.
```

- No WARN-tier structural flags were raised; curve and goldfish both passed.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | The curve tops at 6 with two 6-drops (Galvanizing Sawship, Dawnstrike Vanguard), so surplus lands cast the top end. Beyond that the deck has three ways to spend spare mana: Sunstar Chaplain's '{2}, Remove a +1/+1 counter from a creature you control: Tap target artifact or creature' is a repeatable mana sink that also taps a blocker (and taps YOUR OWN creature to satisfy the two-tapped-creatures payoffs), Nanoform Sentinel's 'untap another target permanent' can untap a land for real mana, and Uthros Scanship's 'draw two cards, then discard a card' converts a flooded draw step into selection. Lithobraking also creates a Lander token ("{2}, {T}, Sacrifice this token: Search your library for a basic land card"), which is a mana sink rather than another land. |
| screw | mitigation | 11 of the 23 nonland cards cost 2 or less (Synthesizer Labship at 1, Hardlight Containment at 1, Lumen-Class Frigate, Wurmwall Sweeper x2, Dockworker Drone x2, Sunstar Chaplain, Drill Too Deep x2, Invasive Maneuvers), so a two-land hand still deploys a Spacecraft and a stationer. The goldfish simulation shows 89% of hands keepable and 91% reaching three lands by turn 3. |
| decapitation | mitigation | No single piece is required. The Station mechanic is printed on all 7 Spacecraft, so removing any one leaves six other hulls; the tapped-creature payoff cycle is spread across 5 different cards (Sami Ship's Engineer, Sunstar Chaplain, Flight-Deck Coordinator, Frontline War-Rager x2, Dawnstrike Vanguard); and charge counters already placed are not lost when a stationer dies, because tapping the creature is a COST paid on activation rather than an ongoing dependency. |
| gas-out | mitigation | Sami, Ship's Engineer is the answer: 'At the beginning of your end step, if you control two or more tapped creatures, create a tapped 2/2 colorless Robot artifact creature token' makes a new body — and therefore a new Station battery and a new artifact for Warmaker Gunship's count — from an empty hand, every turn, forever. Alongside it, Uthros Scanship draws two on entry, Wurmwall Sweeper x2 surveil 2 on entry, and Flight-Deck Coordinator's 2 life per turn buys the draw steps to find more. |
| raced | accepted | This deck is slow on purpose and it will lose some races. Its average mana value is 2.83, six of its seventeen lands enter tapped, and its turn-2 and turn-3 plays are stationers that tap rather than attack — the goldfish sim plays something on turn 1 in only 29% of hands. Mitigating would mean cutting Station enablers for cheap interaction, which removes the exact resource the kill mechanism consumes: fewer creatures means fewer charge counters means no Spacecraft ever flips. Flight-Deck Coordinator's 2 life per turn and Dawnstrike Vanguard's lifelink buy turns but do not stop a genuinely fast clock. Cut Propulsion x2, Radiant Strike and a second Lithobraking are in the sideboard for the matchups where that is the actual problem. |
| disruption-fizzle | mitigation | Station is unusually resilient to a single piece of interaction on the critical turn, for a specific rules reason: tapping the creature is a COST of the activated ability, so once activated, killing the creature in response does not stop the charge counters from being placed. The Spacecraft themselves also front-load value on entry rather than on the flip turn — Warmaker Gunship deals its damage, Uthros Scanship draws two, Wurmwall Sweeper surveils two — so a Spacecraft answered before it charges has already traded for something. Hardlight Containment grants 'ward {1}' to whichever artifact it enchants, and Drill Too Deep places five counters at instant speed, so the flip can be completed on the opponent's turn in response to their removal. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Tapestry Warden | 'Each creature you control with toughness greater than its power stations permanents using its toughness rather than its power' — the single best Station enabler printed in this cube, and it is {3}{G}. A fourth colour is unpayable when two of the three core pairs (WU, UR) have only enters-tapped duals. |
| Sledge-Class Seedship / Atmospheric Greenhouse / Larval Scoutlander | All three are green Spacecraft; same fourth-colour problem as Tapestry Warden. |
| Dawnsire, Sunstar Dreadnought | Its first live mode needs 10 charge counters and it only becomes a creature at 20. This deck's stationers average about 3 power, so 10+ is four station activations across multiple turns — and it is a mythic against the 7-card rare cap. |
| The Eternity Elevator | '{T}: Add {C}{C}{C}' is real acceleration, but its own payoff line needs 20 charge counters and it never becomes a creature. A 5-mana mana rock in a midrange deck that already runs 17 lands. |
| Rescue Skiff | 6 MV for a 10+ threshold — the highest flip requirement of any Spacecraft this deck could run, and the reanimation ETB has few high-value targets in a list built around noncreature Spacecraft. |
| Adagia, Windswept Bastion | '12+ | {3}{W}, {T}: Create a token that's a copy of target artifact or enchantment you control' — a Planet, so its counters compete with the Spacecraft for the same station activations, and it enters tapped in a three-colour manabase. Mythic against the rare cap. |
| Uthros, Titanic Godcore / Kavaron, Memorial World | Same objection as Adagia: Planets soak up station activations that the Spacecraft need, they all enter tapped, and each is a mythic. |
| Sami, Wildcat Captain | 'Spells you cast have affinity for artifacts' is the strongest artifact payoff in the cube, but at {4}{R}{W} it is a 6-drop, and this deck runs only 8-9 artifacts on board at a time, so the discount is smaller than it looks in a deck that is not flooding the board with cheap artifacts. |
| Tezzeret, Cruel Captain | Its trigger is 'whenever an ARTIFACT you control enters'. This deck plays 9 artifact cards of 23 nonland, versus 15 of 24 in the U/R count build — the loyalty ramp is materially slower here, and it is a mythic against the rare cap. |
| Oreplate Pangolin / Mm'menon, Uthros Exile / Weftstalker Ardent | All three are artifact-COUNT payoffs. This build wins by converting creature power into charge counters, not by maximizing the number of artifacts entering; at 9 artifact cards of 23 nonland they fire roughly half as often as they do in the count build. |
| Vaultguard Trooper | 'you may discard your hand. If you do, draw two cards' — a 5-mana 5/5 whose payoff is card DISADVANTAGE unless the hand is already empty, which is not this deck's failure mode. |
| Beyond the Quiet | 'Exile all creatures and Spacecraft' — it exiles the deck's own Spacecraft, which are its entire threat base. Anti-synergy with the win condition, not merely symmetric. |
| Pinnacle Starcage | 'exile all artifacts and creatures with mana value 2 or less' — this list runs 7 permanents at MV 2 or less, so it exiles a quarter of its own board. |
| Cosmogrand Zenith / Sunstar Lightsmith / Brightspear Zealot | Spellslinger payoffs keyed to casting a second spell each turn. This deck's turns are one Spacecraft plus one station activation, and Station is an ability, not a spell. |
| Exalted Sunborn | 'If one or more tokens would be created under your control, twice that many are created instead' is powerful with Sami and Wedgelight Rammer, but at {3}{W}{W} the double-W pip is the hardest cost in a three-colour manabase with one untapped dual, and it is a mythic against the rare cap. |
| Astelli Reclaimer | {3}{W}{W} double-W, same pip objection; its reanimation clause targets noncreature nonland permanents, and this deck's Spacecraft rarely reach the graveyard before the game ends. |
| Scout for Survivors | Returns creature cards with total MV 3 or less; this list's stationers are cheap, but spending a card to rebuy 2-3 mana of small bodies is slower than casting the next Spacecraft. |
| Annul / Divert Disaster / Unravel | Reactive counterspells demand holding mana open, and this deck's turns are already fully committed to deploying a Spacecraft and then stationing it at sorcery speed. |
| Mm'menon, the Right Hand | 'You may cast artifact spells from the top of your library' is a real engine, but {3}{U}{U} double-blue is unsupportable when U is the third colour in this manabase. |
| Systems Override | 'If it's a Spacecraft, put ten charge counters on it. If you do, remove ten charge counters from it at the beginning of the next end step' — the counters are temporary, so it steals for one attack rather than advancing your own Spacecraft permanently. Drill Too Deep's five counters are permanent and cost one mana less. |
| Virulent Silencer / Emissary Escort / Mechan Assembler | Artifact-count payoffs; see the Oreplate Pangolin entry. Emissary Escort in particular ('+X/+0 where X is the greatest mana value among other artifacts') is actually strong here because the Spacecraft are MV 5-8, but its 0/4 body cannot attack profitably and it competes with a Spacecraft for the same slot. |
| Secluded Starforge | '{T}: Add {C}' only — a colourless land in a three-colour deck whose two hardest costs are {1}{W}{W} (The Seriema) and {1}{U}{R}. It is also a rare against the 7-card cap. |
| Invasive Maneuvers | CUT IN PHASE 9. It was the fourth single-target removal spell in a six-slot Interaction budget, while the deck had no answer at all to a wide board. Lithobraking took the slot because it answers a threat class this list otherwise conceded outright. |
| Mechan Navigator | "Whenever this creature becomes tapped, draw a card, then discard a card" is genuinely on-theme - it loots every time it is tapped to Station. It lost the slot to Nanoform Sentinel at the same {1}{U}/{2}{U} cost band: Nanoform "untaps another target permanent" when tapped, which lets a second creature Station the same turn, and charge counters are the resource this deck is actually short of. Blue is also the third colour here at 4 pips and 6 sources, so U-costed enablers are rationed. |
| Cerebral Download | "Surveil X, where X is the number of artifacts you control. Then draw three cards." The count is real - 11 of 23 nonland cards are artifacts - but it is a 5-mana instant in the deck's third colour, and turn 5-6 is exactly when this list must be casting a Spacecraft and stationing it. Cut on curve and pip cost, not on the count. |
| Tractor Beam | "Enchant creature or Spacecraft / You control enchanted permanent" is the only effect in these colours that steals a Spacecraft, but it costs {2}{U}{U}. That is the same double-pip test that cut The Seriema ({1}{W}{W}): with one untapped-capable dual and 6 blue sources of 17 lands, a double pip in the third colour is unsupportable. |
| Focus Fire | "deals X damage to target attacking or blocking creature, where X is 2 plus the number of creatures and/or Spacecraft you control." X is large here (17 of 23 nonland cards are creatures or Spacecraft), but it only hits an ATTACKING OR BLOCKING creature - a combat trick, not an answer to a threat that sits still, which is what a midrange deck needs from its removal. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.11 adj [MV 2.83 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  36.4%  prod  47.1%  gap -10.7pp  [OK]
  U  demand  18.2%  prod  35.3%  gap -17.1pp  [OK]
  W  demand  45.5%  prod  58.8%  gap -13.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: max 2 copies each
[PASS] Rares/mythics: max 1 copy each
[PASS (6 used: Sacred Foundry, Synthesizer Labship, Lumen-Class Frigate, Warmaker Gunship, Sunstar Chaplain, Hardlight Containment)] Max 7 rares/mythics total across mainboard + sideboard
[PASS] All cards drawn from cube eoe mainboard
[PASS (5 Plains, 3 Mountain, 2 Island)] Basic lands format-supplied, exempt from copy limits
[PASS] Colour identity within core W/U/R, no splash
[PASS] Mainboard exactly 40 cards
[PASS] Sideboard exactly 10 cards
```
