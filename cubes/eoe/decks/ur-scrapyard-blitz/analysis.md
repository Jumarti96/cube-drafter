---
deck_name: "ur-scrapyard-blitz"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UR"
format: "40-card"
built_at: "2026-08-02T23:40:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
9x Mountain                
5x Island                  
2x Molten Tributary        UR dual, enters tapped
```

### CREATURES (12)

```
CMC  Card                     Qty  Color  Role                                                                                               Rar
  1  Kavaron Harrier          x2   R      Threat — 1-drop that makes an artifact every attack                                                U
  1  Rust Harvester           x1   R      Payoff — menace body + repeatable reach                                                            R
  1  Slagdrill Scrapper       x1   R      Engine — 1-mana artifact body; sac outlet that feeds Rust Harvester and converts flood into cards  C
  2  Mechan Shieldmate        x2   U      Threat — 3/2 attacker on artifact turns                                                            C
  2  Oreplate Pangolin        x2   R      Payoff — counter per artifact ETB                                                                  C
  3  Mm'menon, Uthros Exile   x1   RU     Payoff — evasive counter distributor                                                               U
  3  Pinnacle Emissary        x1   RU     Payoff — flying Drone per artifact spell                                                           R
  3  Weftstalker Ardent       x2   R      Payoff — 1 dmg to each opponent per ETB                                                            U
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                     Qty  Color  Role                                                                                               Rar
  1  Plasma Bolt              x2   R      Interaction — 2-3 damage any target                                                                C
  2  Drill Too Deep           x1   R      Interaction — destroy artifact / 5 charge counters                                                 C
  2  Invasive Maneuvers       x1   R      Interaction — 3/5 damage to a creature                                                             U
```

### OTHER SPELLS (8)

```
CMC  Card                     Qty  Color  Role                                                                                               Rar
  1  Nutrient Block           x1   C      Engine — 1-mana indestructible artifact, cantrips on death                                         C
  1  Synthesizer Labship      x1   U      Engine — 1-mana artifact; animates artifacts as 2/2 fliers                                         R
  2  Cryogen Relic            x2   U      Engine — self-replacing artifact ETB                                                               C
  2  Melded Moxite            x1   R      Engine — artifact ETB + card filtering                                                             C
  2  Weapons Manufacturing    x1   R      Engine — Munitions token per nontoken artifact ETB                                                 R
  3  Tezzeret, Cruel Captain  x1   C      Payoff — noncreature engine, ticks off artifact ETBs                                               M
  3  Warmaker Gunship         x1   R      Interaction — ETB removal scaling with artifact count                                              R
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in                                                                            Rar
Annul                    x2   U      Counter artifact/enchantment spells                                                                U
Desculpting Blast        x2   U      Bounce any nonland permanent (only enchantment answer)                                             U
Drill Too Deep           x1   R      Artifact removal — vs the cube's 74 artifacts                                                      C
Bombard                  x2   R      Unconditional 4 damage to a creature                                                               C
Cut Propulsion           x2   R      Anti-flier removal                                                                                 U
Dauntless Scrapbot       x1   C      Graveyard exile + two artifact ETBs                                                                U
```

## ANALYSIS

### DECK IDENTITY

A U/R artifact-count aggro deck that wins by making the number of artifacts on the battlefield go up every single turn. Fifteen of the twenty-four nonland cards are artifacts, and three separate payoffs convert each artifact entering into a different resource: Oreplate Pangolin turns it into a +1/+1 counter, Mm'menon, Uthros Exile turns it into a counter on an evasive body, and Weftstalker Ardent turns it into a point of damage the opponent cannot block. Weapons Manufacturing and Pinnacle Emissary make the count self-sustaining by generating fresh artifact tokens off the artifacts already being cast. The clock is combat damage from cheap artifact creatures backed by non-combat pings, so a board stall does not stop the deck.

### ONE ARTIFACT, FOUR RESOURCES

The whole deck is one sentence: *an artifact entered the battlefield.* What that sentence is worth depends on which payoffs are out. Every card below reads off the same trigger, so they stack rather than compete for it.

| Payoff | What one artifact ETB becomes | Copies |
|---|---|---|
| Oreplate Pangolin | a permanent +1/+1 counter (for {1}) | 2 |
| Mm'menon, Uthros Exile | a +1/+1 counter on any creature you choose | 1 |
| Weftstalker Ardent | 1 damage to the opponent, unblockable | 2 |
| Tezzeret, Cruel Captain | a loyalty counter | 1 |
| Weapons Manufacturing | a Munitions token (2 more damage, later) | 1 |

With three of these on board, a single two-mana Cryogen Relic is a counter, a counter, a point of damage, a loyalty tick and a Munitions token — and the Munitions token is *itself* an artifact entering, so it runs the whole column a second time.

### THE MUNITIONS DOUBLE-DIP

This is the most important line in the deck and it is easy to miss. Weapons Manufacturing reads "Whenever a **nontoken** artifact you control enters, create a colorless artifact token named Munitions." The Munitions token is a token, so it does not re-trigger Weapons Manufacturing — no loop. But it *is* an artifact entering the battlefield, which is what Oreplate Pangolin, Mm'menon, Weftstalker Ardent and Tezzeret actually check. **Every one of the 15 nontoken artifact cards in this list therefore produces two count triggers instead of one** while Weapons Manufacturing is out. And the Munitions never dies for free: "When this token leaves the battlefield, it deals 2 damage to any target" means Slagdrill Scrapper eating one for a card also throws 2 damage at the opponent's face.

### SYNTHESIZER LABSHIP IS THE EVASION PLAN

Four of the 15 artifacts are *noncreature* artifacts that would otherwise just sit there being counted: Cryogen Relic ×2, Melded Moxite and Nutrient Block. Synthesizer Labship at 2+ charge counters reads "At the beginning of combat on your turn, up to one other target artifact you control becomes an artifact creature with base power and toughness 2/2 **and gains flying** until end of turn." That is a free 2/2 flier every single combat, drawn from cards the opponent has already written off, and it is the only repeatable evasion in a deck whose ground creatures are 1/1s and 2/2s. It costs {U} — the cheapest artifact card in the entire cube.

### TEZZERET'S TUTOR HAS FIVE TARGETS

Tezzeret's "−3: Search your library for an artifact card with mana value 1 or less" is only as good as the one-drops available. In this list **5 of the 15 artifact cards are MV 1 or less**: Rust Harvester, Kavaron Harrier, Synthesizer Labship, Nutrient Block and Slagdrill Scrapper. Every one of them is a live target, and Tezzeret arrives at 3 loyalty and ticks *up* off the artifact ETBs the deck is already producing, so the −3 is usually available the turn after he lands without ever going to zero.

### THE MANABASE IS A COMPROMISE, STATED PLAINLY

Molten Tributary is the only U/R dual this cube prints and its oracle text says "This land enters tapped." There is no shockland for this pair. A deck with eight one-drops cannot afford many tapped lands, so the manabase is 14 untapped sources and 2 tapped duals, which leaves U slightly under-served for the two `{1}{U}{R}` gold cards. Pinnacle Emissary softens this itself — Warp `{U/R}` is hybrid, payable with either colour — but Mm'menon, Uthros Exile genuinely wants both colours on turn three and sometimes will not get them. That is the price of the pair, not a build error.

### PLAY PATTERN

Turn 1 is Rust Harvester, Kavaron Harrier, Slagdrill Scrapper, Synthesizer Labship or Nutrient Block — 8 of 24 nonland cards, and the goldfish sim plays something on turn 1 in 80% of hands. Turns 2-3 deploy a payoff and start attacking; Mechan Shieldmate's defender turns off "as long as an artifact entered the battlefield under your control this turn," which in this deck means essentially always. From turn 4 the deck is not trying to make one big attack, it is trying to make the count go up twice per turn while Weftstalker Ardent bills the opponent for each one.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:8  2:10  3:6
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.65: Pinnacle Emissary@0.8, Rust Harvester@0.85) → p=0.92 (need ≥ 0.75)
  PASS  enabler: 12 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 80%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in U/R in this pool that this deck could survive; its own board is the wider one (12 creature cards plus recurring Munitions, Drone and Robot tokens from Weapons Manufacturing, Pinnacle Emissary and Kavaron Harrier), so the plan is to win the board race rather than reset it.
  OK        single_large_threat: Warmaker Gunship, Invasive Maneuvers, Plasma Bolt
  OK        noncreature_permanents: Drill Too Deep
  CONCEDED  stack: Holding up {U} on turns 2-4 forfeits the artifact deployment the count payoffs require; Annul (counter target artifact or enchantment spell) is in the sideboard for the matchups where a specific noncreature spell must be stopped.
  CONCEDED  graveyard: No mainboard graveyard hate; every mainboard slot must add artifact count for the payoffs to scale. Dauntless Scrapbot (exile each opponent's graveyard) is in the sideboard against the cube's 31 graveyard-interaction cards.
```

- No WARN-tier structural flags were raised; curve and goldfish both passed.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | At 16 lands this list carries four repeatable mana sinks that turn a surplus land into action every turn: Slagdrill Scrapper ("{2}, {T}, Sacrifice another artifact or land: Draw a card" - it eats the flooded land itself), Rust Harvester ("{2}, {T}, Exile an artifact card from your graveyard: Put a +1/+1 counter on this creature, then it deals damage equal to its power to any target"), Kavaron Harrier ("you may pay {2}. If you do, create a 2/2 colorless Robot artifact creature token that’s tapped and attacking"), and Oreplate Pangolin ("you may pay {1}" on each artifact ETB). Melded Moxite converts a dead card in hand into two cards. |
| screw | mitigation | 18 of the 24 nonland cards cost 2 or less (8 at one mana, 10 at two), so a two-land hand deploys on curve through turn 3 without missing a beat. The goldfish simulation confirms it: 87% of hands keepable, 80% of hands play something on turn 1. |
| decapitation | mitigation | There is no single key card. Eight payoff copies are spread across six different cards (Oreplate Pangolin x2, Weftstalker Ardent x2, Mm’menon Uthros Exile, Pinnacle Emissary, Tezzeret Cruel Captain, Rust Harvester), and they convert the same artifact ETB into three different resources - counters, bodies and direct damage. Answering any one leaves the other five operating on the same trigger. |
| gas-out | mitigation | Four of the 24 nonland cards replace themselves on the way through: Cryogen Relic x2 ('When this artifact enters OR LEAVES the battlefield, draw a card' — two cards per copy), Melded Moxite ('discard a card. If you do, draw two cards'), and Nutrient Block ('When this artifact is put into a graveyard from the battlefield, draw a card'). More importantly, three permanents make board out of zero cards each turn once resolved — Weapons Manufacturing (a Munitions token per nontoken artifact ETB), Pinnacle Emissary (a flying Drone per artifact spell) and Kavaron Harrier (a 2/2 Robot each attack for {2}) — plus Tezzeret's '-3: Search your library for an artifact card with mana value 1 or less'. An empty hand still advances the clock. |
| raced | accepted | The cube's fastest clocks come from its 56 evasion cards (22% density). This list's only flying blocker is Mm'menon, Uthros Exile (1/3) and its only lifegain is Nutrient Block's '{2}, {T}, Sacrifice this artifact: You gain 3 life'. Mitigating would mean maindecking Cut Propulsion x2 and Bombard x2 in place of four artifact bodies — that drops the artifact count from 15 to 11 of 24 nonland cards, which is the denominator every count payoff in the deck multiplies against. The cost of not losing races is losing the engine, so those four cards live in the sideboard instead. |
| disruption-fizzle | mitigation | This deck has no critical turn to interact with. Its damage is incremental and per-permanent: each artifact entering independently produces a +1/+1 counter (Oreplate Pangolin, Mm'menon), a token (Weapons Manufacturing, Pinnacle Emissary) and a point of damage (Weftstalker Ardent). A counterspell aimed at any single artifact removes one trigger of many rather than breaking a chain; there is no turn on which the plan is all-in. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Mm'menon, the Right Hand | {3}{U}{U} — 5 MV against a T5 goldfish; its artifact-mana grant only pays for spells cast from somewhere other than hand, which this deck never does. |
| Sami, Wildcat Captain | Affinity for artifacts is the strongest count payoff in the cube, but it is {4}{R}{W} — the W pip is outside core U/R and the WU/WR duals needed to reach it all enter tapped. |
| Dawnsire, Sunstar Dreadnought | Its live mode needs 10+ charge counters; this deck's creatures average roughly 2 power, so it needs about five station activations — turns this deck does not have. |
| Galvanizing Sawship | 6 MV for a 3+ threshold — the threshold is cheap but the card arrives a full turn after the goldfish turn. |
| Extinguisher Battleship | 'deals 4 damage to each creature' would kill 9 of the 13 creatures this list actually runs; an 8-MV symmetric sweeper is anti-synergy with a go-wide plan. |
| Pinnacle Kill-Ship | 7 MV colorless; the ETB is removal, not damage to the player, and it lands two turns past the thesis turn. |
| Bygone Colossus | Warp {3} puts a 9/9 down for one turn, but it leaves at the next end step — it adds one artifact ETB for {3} and nothing permanent. |
| Thrumming Hivepool | 'Affinity for Slivers' — this list contains 0 Slivers of 40 cards, so it costs the full {6}. |
| Memorial Vault | Its impulse draw requires sacrificing an artifact; every count payoff in this deck wants artifacts to stay on the battlefield, so it fights its own list. |
| Survey Mechan | '{10}, Sacrifice... costs {X} less where X is the number of differently named lands you control' — this list runs 3 differently-named lands, so the ability costs {7}. |
| Terminal Velocity | 6 MV, and the permanent it cheats in is sacrificed at your own end step — a one-turn effect priced past the thesis turn. |
| Systems Override | Threaten effects want a big board to steal from; against the wide, small boards this cube's other artifact decks present, 3 mana for one attack is below rate. |
| Annul / Unravel / Divert Disaster | Reactive counterspells demand holding mana open on turns this deck must spend deploying artifacts — the count payoffs only pay if the board grows every turn. |
| Cloudsculpt Technician | 3 MV for a 2/4 flier once an artifact is out; the same slot buys Warmaker Gunship, which is removal plus a 4/3 artifact. |
| Uthros Psionicist / Illvoi Infiltrator | Spellslinger payoffs keyed to casting two spells per turn; they are blind to artifact COUNT, which is what this pipeline actually generates. |
| Secluded Starforge | Taps for {C} only; in a deck with {1}{R} and {1}{U} two-drops and no untapped dual, a colourless-only land is a colour-screw source — and it is a rare against the 7-rare cap. |
| Uthros, Titanic Godcore / Kavaron, Memorial World | Both enter tapped and gate their payoff behind 12+ charge counters; both are mythics that would consume the 7 rare/mythic budget for a land. |
| Moonlit Meditation | Token-copying is powerful with Weapons Manufacturing, but it is an Aura on a permanent — two-card setup that dies to the removal aimed at the creature, in a deck that wants every card to stand alone. |
| Pain for All | An Aura on your own creature; the enchanted creature must survive and be dealt damage to convert. This deck's creatures are 1–3 toughness and die to the damage that would trigger it. |
| Devastating Onslaught | {X}{X}{R} for X hasty copies that are sacrificed at the next end step — at X=2 that is 5 mana for a one-turn effect, past the thesis turn. |
| The Endstone | 7 MV, and 'your life total becomes half your starting life total' each end step actively helps the aggro decks this list races. |
| Emissary Escort | '+X/+0, where X is the greatest mana value among other artifacts you control' on a 0/4 body. The highest-MV artifact in this list is Red Tiger Mechan at 4 and 14 of the 15 artifacts are MV 3 or less, so it plays as a 2/4 or 3/4 - a big-artifact payoff in a low-curve list. |
| Virulent Silencer | Two poison per connection needs five separate combat hits; 11 of the 15 artifacts here are creatures so the trigger is well fed, but five connections is slower than this list's five-turn damage clock. |
| Mechan Assembler | {4}{U} for the same artifact-ETB trigger the 2-MV Oreplate Pangolin already provides; a 5-drop is one turn past the thesis turn in the chosen lowest-curve build. |
| Starfield Vocalist | Doubles every ETB trigger in the deck, which is the single largest multiplier available - but at {3}{U} (warp {1}{U} for one turn only) it needs a payoff already on board, and the chosen lens is lowest-curve. The strongest card cut to the curve. |
| Uthros Scanship | {3}{U} draw-two-discard-one is real refuelling, but a 4-MV artifact does not add count on the turns 2-4 when the payoffs need it. |
| Nanoform Sentinel / Kavaron Turbodrone / Chrome Companion / Zookeeper Mechan | Vanilla-ish artifact bodies that add count but no second function; the six Engine slots went to artifacts that also draw cards (Cryogen Relic, Melded Moxite, Nutrient Block) or make more artifacts (Weapons Manufacturing, Synthesizer Labship). |
| Steelswarm Operator / Mechan Navigator | Both are fine 2-MV artifact bodies, but Mechan Shieldmate is a 3/2 for the same cost and this list already attacks on every artifact turn, which is Shieldmate's only condition. |
| Tannuk, Steadfast Second | {2}{R}{R} - the double-R pip is the hardest cost in a manabase whose only dual enters tapped, and it is a mythic against the 7-card rare cap that would displace a payoff. |
| The Dominion Bracelet | Flagged by the shape judge as a weak keystone: +1/+1 and a {15} ability is neither recurring nor a threat multiplier on a five-turn clock. |
| Selfcraft Mechan / Dauntless Scrapbot (maindeck) | Both are 3-4 MV artifact bodies; Dauntless Scrapbot is in the sideboard instead, where its graveyard-exile ETB answers a real threat class (31 graveyard cards in the cube). |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.92   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.11 adj [MV 1.92 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  70.8%  prod  68.8%  gap  +2.0pp  [OK]
  U  demand  29.2%  prod  43.8%  gap -14.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: max 2 copies each
[PASS] Rares/mythics: max 1 copy each
[PASS (6 used: Rust Harvester, Synthesizer Labship, Weapons Manufacturing, Pinnacle Emissary, Warmaker Gunship, Tezzeret Cruel Captain)] Max 7 rares/mythics total across mainboard + sideboard
[PASS] All cards drawn from cube eoe mainboard
[PASS (9 Mountain, 5 Island)] Basic lands format-supplied, exempt from copy limits
[PASS] Colour identity within core U/R, no splash
[PASS] Mainboard exactly 40 cards
[PASS] Sideboard exactly 10 cards
```
