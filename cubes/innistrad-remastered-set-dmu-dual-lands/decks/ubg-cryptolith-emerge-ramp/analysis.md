---
deck_name: "ubg-cryptolith-emerge-ramp"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UBG"
format: "40-card"
built_at: "2026-08-27T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Contaminated Aquifer                      UB dual, enters tapped
  8x Forest                                    
  2x Haunted Mire                              BG dual, enters tapped
  1x Island                                    
  3x Swamp                                     
  2x Tangled Islet                             GU dual, enters tapped
```

### CREATURES (14)

```
CMC  Card                                      Qty   Color  Role                                                                       Rar
  2  Scorned Villager // Moonscarred Werewolf  x1    G      Ramp — green acceleration / Rite body                                      C
  3  Eccentric Farmer                          x1    G      Engine — mill 3, land rebuy, Rite body                                     C
  3  Somberwald Sage                           x2    G      Ramp — three mana of one colour for creature spells                        U
  7  Bramble Wurm                              x1    G      Fodder — mana-value-7 body, the second card that floors an emerge generic  C
  7  Wretched Gryff                            x1    C      Emerge payoff — cheapest sink, replaces itself                             C
  8  Abundant Maw                              x1    C      Emerge payoff — reach / drain                                              C
  8  Distended Mindbender                      x1    C      Emerge payoff — hand disruption                                            R
  8  Elder Deep-Fiend                          x1    C      Emerge payoff — flash tempo blowout                                        R
  8  Ghoultree                                 x2    G      Fodder — mana-value-8 body cast for 2-4                                    U
  8  It of the Horrid Swarm                    x2    C      Emerge payoff — rebuilds the Rite mana base                                C
 10  Decimator of the Provinces                x1    C      Emerge payoff — alpha strike finisher                                      R
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                                      Qty   Color  Role                                                                       Rar
  1  Tragic Slip                               x2    B      Interaction — morbid removal                                               C
  2  Infernal Grasp                            x2    B      Interaction — unconditional removal                                        U
  3  Maelstrom Pulse                           x1    BG     Interaction — the only artifact/enchantment answer in these colours        R
```

### OTHER SPELLS (3)

```
CMC  Card                                      Qty   Color  Role                                                                       Rar
  1  Abundant Growth                           x2    G      Fixing — any-colour land, replaces itself                                  C
  2  Cryptolith Rite                           x1    G      Engine — turns every body into any-colour mana                             R
```

## SIDEBOARD (10)

```
Card                                      Qty   Color  Rar  Role                              When to board in
Compelling Deterrence                     x2    U      U    Bounce                            vs artifacts and enchantments — Maelstrom Pulse is the only permanent answer these colours have and it is capped at one copy, so bounce is the second copy; also resets a transformed DFC
Murderous Compulsion                      x2    B      C    Removal                           vs creature decks that attack — an attacking creature is tapped, and Elder Deep-Fiend's cast trigger taps up to four permanents on demand
Sever the Bloodline                       x2    B      U    Wide-board / exile answer         vs token and duplicate-heavy decks, and vs recursive threats — exile-by-name answers a swarm and stops anything that returns from the graveyard
Duel for Dominance                        x2    G      C    Removal via fight                 vs creature decks — coven is reliably live because this deck's bodies have widely different powers (Somberwald Sage 0/1, Scorned Villager, Ghoultree 10/10)
Geistcatcher's Rig                        x1    C      U    Anti-flier / mana-value-6 fodder  vs the cube's 58-card evasion class — 4 damage to a flier on entry, and a colourless mana-value-6 body that pays an entire emerge generic cost without straining three colours
Syncopate                                 x1    U      C    Counterspell                      vs combo and control — this is the deck's only stack interaction, boarded in for the matchups where holding up mana is affordable
```

## ANALYSIS

### DECK IDENTITY

The only build of the four that runs all six emerge Eldrazi, which means it has to produce {G}{G}{G}, {U}{U} and {B}{B} off a single 40-card mana base. Cryptolith Rite and Somberwald Sage are the answer: Rite turns every body — including the Insect tokens It of the Horrid Swarm makes — into a source of any colour, and Sage adds three mana of any one chosen colour, restricted to creature spells, which is exactly what all six payoffs are. Ghoultree is cast cheap off the mill package but keeps its mana value of 8, so sacrificing it erases an emerge cost's entire generic component and leaves only the pips the fixers exist to pay. Decimator of the Provinces then turns whatever bodies are left into lethal with +2/+2 and trample.

### THE PROBLEM THIS DECK EXISTS TO SOLVE

All six emerge Eldrazi live in three different colours, and three of them demand multiple pips of a *different* colour each:

| Payoff | Emerge cost | Irreducible requirement |
|---|---|---|
| `Decimator of the Provinces` | `{6}{G}{G}{G}` | **three green** |
| `Distended Mindbender` | `{5}{B}{B}` | **two black** |
| `Elder Deep-Fiend` | `{5}{U}{U}` | **two blue** |
| `It of the Horrid Swarm` | `{6}{G}` | one green |
| `Abundant Maw` | `{6}{B}` | one black |
| `Wretched Gryff` | `{5}{U}` | one blue |

Emerge's discount eats the **generic** portion first and floors at zero, so the pips are never reducible no matter how large the sacrifice. A mana-value-8 `Ghoultree` zeroes the entire `{6}` and leaves `{G}{G}{G}` — three mana, but three mana *of one specific colour*. That is the whole build problem, and no 18-land base solves it.

`Cryptolith Rite` is the answer: *"Creatures you control have '{T}: Add one mana of any color.'"* Every body becomes any colour, including the 1/1 Insect tokens `It of the Horrid Swarm` makes on cast. `Somberwald Sage` is the redundancy — *"Add three mana of any one color. Spend this mana only to cast creature spells"* pays exactly one Eldrazi's pips per activation, and all six payoffs are creature spells. `Abundant Growth` ×2 is the third layer, and the one that needs no creature at all.

### THE AUDIT REPORTS THIS DECK NEEDS ZERO BLUE MANA

It doesn't, and the reason is worth understanding because it applies to all four builds in different degrees.

`deck_audit` derives pip demand by parsing `mana_cost`. `Elder Deep-Fiend`'s printed cost is `{8}`. `Wretched Gryff`'s is `{7}`. Both are pure generic — the blue lives in the *oracle text*, in the emerge clause, which the parser never reads. So the tool honestly reports **U demand 0.0%** for a deck that cannot function without double blue, and reports the five blue sources as a pure surplus when they are the entire blue mana base.

Three separate numbers exist for this deck's green pips and each is correct for what it measures:

| Measure | G | Why |
|---|---|---|
| Regex over `mana_cost` | 10 | What is printed |
| `audit.pip_demand` | 11 | Adds `Scorned Villager`, a transform DFC whose `mana_cost` is null — the audit catches it via colour identity |
| **True demand incl. emerge** | **16** | Adds `Decimator`'s `{G}{G}{G}` and `It of the Horrid Swarm`'s `{G}` ×2 |

### THE COLOUR BALANCE IS BETTER THAN THE AUDIT SAYS, AND ALSO WORSE

The audit divides each colour's sources by the **land count**, so with six dual lands its three production figures sum to about 133% — each dual is counted for both its colours. On that convention green reads +2.1pp and passes comfortably.

Normalised over the 24 actual colour *sources*, the shares are G 50.0% / B 29.2% / U 20.8% against a true demand of G 59.3% / B 29.6% / U 11.1%. Green is **under**-supplied by about 9 points, not over-supplied. That is the honest reading, and it is why `Abundant Growth` ×2 is in the deck: counting every any-colour producer, the green-capable count rises to 17 and the gap closes without spending a land slot.

### WHAT THE BLUE ACTUALLY COSTS

Counted at turn seven on the draw:

- `Wretched Gryff`'s single `{U}` — about **88%** from the five blue lands alone. Fine.
- `Elder Deep-Fiend`'s `{U}{U}` — about **53%** from lands alone. Counting `Somberwald Sage` ×2, `Cryptolith Rite` and `Abundant Growth` ×2 as blue-capable, roughly **82%**.

`Elder Deep-Fiend` is the right card to point the shakiest mana at, and not by accident: it has **flash**. It is the one payoff that never has to be cast on schedule — hold it, deploy the fixer, and cast it on the opponent's end step or in response to an alpha strike.

### THE ONE THING THIS DECK CAN DO THAT THE OTHERS CANNOT

`Maelstrom Pulse` — *"Destroy target nonland permanent and all other permanents with the same name as that permanent."*

A case-insensitive probe over the entire 300-card cube finds **exactly one** card that destroys any nonland permanent, and this is it. The cube's four targeted artifact-and-enchantment removal spells are all red or white. Adding black and green to blue is what buys access to it, and it is why this is the only one of the four builds whose `noncreature_permanents` coverage is *answered* rather than conceded. The same clause also wipes a token swarm, since tokens share a name.

The cost of three colours is six lands that read *"This land enters tapped."* That is the trade, stated plainly: this deck answers a class the others cannot, and pays for it in tempo on turns two through four.

### WHAT NOTHING IN THIS CUBE ANSWERS

Graveyard interaction is the cube's largest theme at 75 cards (27.1%). A probe across all 300 cards finds **exactly one** card that exiles from an opponent's graveyard — `Invasion of Innistrad // Deluge of the Dead`. No deck in this cube, in any colour, has more than one option. That class is effectively uncontested for everybody, which is worth knowing before blaming a deck for conceding it.

### COUNT-DEPENDENT VERDICTS

Every card whose value is a function of how many others qualify, decided against **this** list (22 nonland cards) rather than in the abstract.

| Card | Verdict | Count against this list |
|---|---|---|
| Cryptolith Rite | INCLUDE | INCLUDE. 'Creatures you control have "{T}: Add one mana of any color."' Creature cards are 14 of 22 nonland cards = 63.6%, and the real denominator is higher because It of the Horrid Swarm x2 each add two 1/1 Insect tokens on cast. It is the single card that makes a three-colour deck with three separate multi-pip requirements castable, and coverage/decapitation confirms there is no second copy of the effect anywhere in the pool. |
| Ghoultree | INCLUDE | INCLUDE. 'costs {1} less to cast for each creature card in your graveyard' — creature cards are 14 of 22, and the mill package is Eccentric Farmer alone after the repair, so expect {5}{G} to {3}{G} rather than {1}{G}. It is included for its mana value of 8, unchanged by the discount, which erases an entire {6} generic emerge component. Bramble Wurm was added at Phase 9 as a second mana-value-7 body precisely because two such bodies for seven emerge payoff copies was too thin: the Challenger computed P(at least one by turn 6) at 51.5%, and a third body takes it to about 67% by turn 6 (the 78% figure first recorded was for four such bodies, not three). |
| Heartless Summoning | CUT | CUT. 'Creature spells you cast cost {2} less' would apply to 14 of 22 cards, a real numerator. CUT decisively on the cost side: 'Creatures you control get -1/-1' kills every 1/1 Insect token It of the Horrid Swarm makes and shrinks Somberwald Sage (0/1) to death — and those tokens and dorks are the bodies Cryptolith Rite taps for mana. In this deck specifically the accelerant destroys the mana engine. |
| Splinterfright | CUT | CUT. Power and toughness equal creature cards in the graveyard — 14 of 22 is a fine denominator, but after the repair this deck has ONE dedicated mill card (Eccentric Farmer) against Deck B's ten, so the graveyard holds perhaps 2-3 creature cards by turn 5. |
| Moldgraf Millipede | CUT | CUT. Same denominator and the same thin graveyard, plus five mana competing with the turn the deck wants to spend deploying Cryptolith Rite plus a body. |
| Spider Spawning | CUT | A Spider per creature card in the graveyard — same thin graveyard as above, and at {4}{G} it costs the combo turn. |
| Vilespawn Spider | CUT | Its token payoff reads the graveyard (thin here), and the activation is {2}{G}{U} plus a tap plus a sacrifice at sorcery speed — four mana across two colours on the turn this deck needs three of a third colour. |
| Second Harvest | CUT | 'For each token you control, create a token that's a copy of that permanent.' Tokens come only from It of the Horrid Swarm's cast trigger — two 1/1 Insects, and only after an emerge cast — so the count is 0 on most turns and at best 2. It would be excellent in a build that made tokens proactively; this one does not. |
| Siege Zombie | CUT | CUT. 'Tap three untapped creatures you control: Each opponent loses 1 life' — creatures are 14 of 22, so the bodies exist. CUT because the taps compete directly with Cryptolith Rite: every creature tapped for one damage is a creature not tapped for the mana that casts an Eldrazi. |
| Traverse the Ulvenwald | CUT | CUT. Delirium needs four card types in the graveyard. RECOUNTED at Phase 9 against the repaired list: creature and land come freely, instants are 4 of 22 (Infernal Grasp x2, Tragic Slip x2 — Clear Shot was cut) and sorceries 1 (Maelstrom Pulse), so four types is reachable but only via that single sorcery. More decisively, dedicated mill is now 1 of 22 (Eccentric Farmer), so filling the graveyard is a matter of things dying rather than a plan. And it is a rare, with all five rare slots spent on cards that have no substitute. |
| Gravecrawler | CUT | Recursion needs a Zombie: Zombies are 2 of 22 (Ghoultree x2 are Zombie Treefolk). At mana value 1 it discounts a single generic mana, and it is a rare against a fully spent budget. |
| Metallic Mimic | CUT | CUT. Counters go only on the chosen type; the largest single type here is Eldrazi at 7 of 22 — genuinely the best Mimic target in the run — but those are one-off finishers cast via emerge, not creatures built up with counters, and it is a rare against a spent budget. |
| Necroduality | CUT | Copies nontoken Zombies entering — 2 of 22 (Ghoultree x2). Copying a Ghoultree would be superb fodder, but a four-mana mythic that does nothing until a mana-value-8 creature resolves is the wrong sequencing. |
| Bloodline Keeper // Lord of Lineage | CUT | Vampires are 0 of 22, so it must build to five from its own tokens; mythic against a spent budget. |
| Captivating Vampire | CUT | Vampires 0 of 22. |
| Sorin, Imperious Bloodlord | CUT | Vampires 0 of 22 — two of its three abilities are blank. |
| Indulgent Aristocrat | CUT | Vampires 0 of 22, so its counter payoff is blank; the residual outlet costs {2} per activation, competing with emerge for mana. |
| Voldaren Bloodcaster // Bloodbat Summoner | CUT | Needs five Blood tokens to transform, and this deck creates none proactively. |
| Archghoul of Thraben | CUT | Zombie deaths and Zombie digs — 2 of 22 on both halves. |
| Bladestitched Skaab | CUT | 'Other Zombies you control get +1/+0' — 2 of 22. |
| Gisa and Geralf | CUT | Casts a Zombie from the graveyard once per turn — 2 of 22, and a rare against a spent budget. |
| Nebelgast Herald | CUT | Spirits are 0 of 22 nontoken, so the trigger fires only on its own entry. |
| Battleground Geist | CUT | 'Other Spirit creatures you control get +1/+0' — Spirits 0 of 22. |
| Geistlight Snare | CUT | CUT. It costs {1} less if you control a Spirit and a further {1} less if you control an enchantment — once per condition. RECOUNTED: Spirits are 0 of 22 but enchantments are now 3 of 22 (Cryptolith Rite, Abundant Growth x2), so it is realistically {1}{U} rather than the {2}{U} first recorded. Still CUT: it is a tax the opponent simply pays on the turn that matters, and blue is the deck's thinnest colour at 5 sources. |
| Mausoleum Wanderer | CUT | Spirits 0 of 22; mana value 1; rare against a spent budget. |
| Docent of Perfection // Final Iteration | CUT | CUT. Wizards 0 of 22; instants and sorceries 5 of 22. |
| Delver of Secrets // Insectile Aberration | CUT | CUT. Flip rate is instant/sorcery density: 5 of 22 = 22.7% per upkeep. |
| Thing in the Ice // Awoken Horror | CUT | CUT. Needs four instant/sorcery casts at 5-of-22 density, and its flip bounces this deck's own Eldrazi. |
| Rise from the Tides | CUT | CUT. A Zombie per instant/sorcery in the graveyard — 5 of 22, and the tokens are mana value 0 so they discount no emerge cost. |
| Spontaneous Mutation | CUT | CUT. X is graveyard size; with one mill card the graveyard is small here, unlike Deck B, so X is typically 2-4 and it does not remove the creature. |
| Laboratory Maniac | CUT | CUT. Mill rate after the repair is 1 card of 22 (Eccentric Farmer, 3 on entry); emptying a ~33-card library is not reachable. |
| Compelling Deterrence | CUT from mainboard, INCLUDE x2 in sideboard | The discard rider needs a Zombie — 2 of 22. It is boarded on the other axis: with Maelstrom Pulse capped at one copy, bounce is the only second answer to an artifact or enchantment. |
| Killing Wave | CUT | Symmetric sacrifice-unless-you-pay-life. This deck's drain payoffs are 0 of 22 — it has no Blood Artist and no Meathook Massacre — so unlike Deck D it gains nothing from its own creatures dying, and its board of mana dorks and tokens is exactly what the effect eats. |
| Duel for Dominance | CUT from mainboard, INCLUDE x2 in sideboard | Coven needs three creatures with different powers, which this list satisfies easily (Somberwald Sage 0/1, Scorned Villager, Ghoultree 10/10). Boarded rather than maindecked because the mainboard's six interaction slots went to unconditional removal and the only artifact/enchantment answer. |
| Lumberknot | CUT | Grows per creature death; deaths here are the emerge sacrifices, about 1-2 before the kill turn. |
| Tireless Tracker | CUT | One Clue per land drop, roughly 4 by turn 5 at two mana each to cash; a rare against a spent budget. |
| Wrenn and Seven | CUT | Its -3 Treefolk sizes to land count (about 5 by turn 5); mythic against a spent budget. |
| Cultivator Colossus | CUT | Power and toughness equal lands you control, and {4}{G}{G}{G} is seven mana with three green pips competing directly with Decimator's {G}{G}{G}; mythic against a spent budget. |
| Mayor of Avabruck // Howlpack Alpha | CUT | CUT. RECOUNTED: Humans are 4 of 22 including Scorned Villager, which is a Human Werewolf and was wrongly excluded from the earlier Human totals; Wolves and Werewolves are 1 of 22 (Scorned Villager again). Both faces are thin, and it is a rare against a budget spent to 5 of 5. |
| Hamlet Captain | CUT | CUT. RECOUNTED: Humans are 4 of 22, and the pump is combat-only on bodies that exist to tap for mana. |
| Dawnhart Disciple | CUT | CUT. RECOUNTED: Humans are 4 of 22. |
| Intrepid Provisioner | CUT | CUT. RECOUNTED: Humans are 4 of 22, and a temporary +2/+2 on a mana dork advances nothing. |
| Howlpack Resurgence | CUT | CUT. Wolves and Werewolves are 1 of 22 (Scorned Villager). |
| Moonlight Hunt | CUT | CUT. Damage equal to the power of each Wolf or Werewolf you control — 1 of 22, and Scorned Villager's power is 1. |
| Duskwatch Recruiter // Krallenhorde Howler | CUT | CUT. Its back face reduces creature spells, which are 14 of 22 — a good numerator — but the transform requires that no spells were cast last turn, which a deck deploying a body every turn does not achieve, and the front face's {2}{G} dig competes with the fixing this deck must deploy instead. |
| Abundant Growth | INCLUDE x2 at Phase 9 | 'Enchant land / When this Aura enters, draw a card. / Enchanted land has "{T}: Add one mana of any color."' Added on the Challenger's absence finding, which was correct: before the repair this deck's any-colour producers were 3 of 22 (Cryptolith Rite, Somberwald Sage x2), giving about a 67% chance of having one by turn 6 in a deck whose stated central problem is producing {G}{G}{G}, {U}{U} and {B}{B} off one base. Two copies take that to roughly 85%. It is better than the alternatives on two axes the other fixers miss: unlike Somberwald Sage its mana is NOT restricted to creature spells, so it can cast Infernal Grasp or Maelstrom Pulse; and unlike Cryptolith Rite it needs no creature on the battlefield. It also replaces itself, so it costs no card. |

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (midrange):  [WARN]
  MV distribution (22 nonland):  1:4  2:4  3:4  7:2  8:7  10:1
  WARN  Above thesis turn: share of nonland cards with MV > 7 is 36% (max 10%)
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies → p=0.93 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9: Scorned Villager // Moonscarred Werewolf@0.5, Eccentric Farmer@0.5) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 55%  T2 86%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Maelstrom Pulse, Elder Deep-Fiend
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  OK        noncreature_permanents: Maelstrom Pulse
  CONCEDED  stack: No counterspell is maindecked. The 22 nonland slots are committed to three colours of fixing plus all six emerge payoffs, and a counterspell asks this deck to hold up mana on a turn it is deploying a fixer or a body — the one thing a three-colour ramp deck cannot afford to skip. Syncopate is boarded for the matchups where the stack decides the game.
  CONCEDED  graveyard: Verified and stronger than a colour restriction: a case-insensitive probe across the whole cube finds exactly ONE card that exiles from an opponent's graveyard - Invasion of Innistrad // Deluge of the Dead - and it is a rare against a rarity budget spent to 5 of 5. No deck in this cube in any colour has more than one option, so the 27.1%-density graveyard field is effectively uncontested for everyone.
```

- curve WARN (36% of nonland cards have MV > 7, max 10%): accepted, and this build trips it hardest of the four because it is the only one running all six emerge names. The eight flagged cards are the six emerge creatures (Decimator 10, It of the Horrid Swarm 8 x2, Abundant Maw 8, Distended Mindbender 8, Elder Deep-Fiend 8, Wretched Gryff 7) plus Ghoultree x2 at 8 — and not one is ever paid at printed cost. Lowering the flagged share means running fewer than all six emerge names, which is the one thing this build exists to do and the reason it is three colours at all.
- goldfish PASS (keepable 82%, needs 80%): recorded. This is the three-colour deck with six enters-tapped lands and it still clears the threshold, which is the fixing package doing its job — 3 lands by turn 3 at 92%, a play by turn 2 in 86% of hands and by turn 3 in 98%.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Emerge's generic component is paid in mana, so surplus lands buy cheaper Eldrazi outright: an extra land is the difference between emerging Decimator off a mana-value-3 body and needing Ghoultree at all. Eccentric Farmer returns a land card from the graveyard to hand rather than drawing a dead one, Abundant Growth x2 convert a surplus land into an any-colour source AND draw a card, and Somberwald Sage x2 plus Cryptolith Rite convert excess untapped bodies into more mana than the lands alone provide. |
| screw | mitigation | This build has the most acceleration of the four — deck_audit.accel_count is 6, and all six are nameable: Cryptolith Rite, Somberwald Sage x2 ('{T}: Add three mana of any one color'), Scorned Villager ('{T}: Add {G}') and Abundant Growth x2 (each draws a card and gives a land '{T}: Add one mana of any color'). It also has the most fixing: six dual lands covering all three colour pairs, so a two-land hand is far more likely to produce two different colours than in a basics-heavy build. The four one-mana plays (Abundant Growth x2, Tragic Slip x2) mean a two-land hand is rarely blank. |
| decapitation | accepted | Cryptolith Rite is the piece most likely to be answered on sight and it is a singleton, because the rarity rule caps it at one copy. The narrow claim is verifiable and I make only that: there is no second 'creatures you control have {T}: Add one mana of any color' effect anywhere in this cube. What the deck DOES have after the Phase 9 repair is redundant any-colour PRODUCTION — Somberwald Sage x2 (three of any one colour, creature-spells-only, and all six payoffs are creature spells) and Abundant Growth x2 — so losing Rite is a real setback rather than a stop. The cost of accepting this is that against a deck with enchantment removal the three-colour payoff suite gets materially harder to cast, and Rite and Abundant Growth are both enchantments, so one answer type hits three of the five fixers. |
| gas-out | mitigation | Cards: Net-Positive plus Self-Replacing is 4 of 22 = 18.2% — Wretched Gryff ('When you cast this spell, draw a card'), Eccentric Farmer (returns a land card, replacing itself in a deck that wants land drops) and Abundant Growth x2 ('When this Aura enters, draw a card'), which the Phase 9 repair added and which raised this count from 3. Beyond the count, this deck's threats are individually game-ending rather than incremental: a resolved Decimator with any board is lethal, so it does not need to win a long attrition game. |
| raced | mitigation | Five interaction cards at 1-3 mana, including 4 unconditional or near-unconditional kill spells — Infernal Grasp x2 and Tragic Slip x2, whose morbid is live off any emerge sacrifice because the sacrifice is a cost paid on announcement — plus Maelstrom Pulse. Elder Deep-Fiend at flash speed reads 'tap up to four target permanents', a one-turn fog, and Abundant Maw swings the race six points on cast. Post-board this rises with Murderous Compulsion x2 and Duel for Dominance x2. |
| disruption-fizzle | mitigation | The emerge turn is resistant to spot removal as a rules matter: the sacrifice is part of the spell's COST, paid on announcement, so killing the fodder in response does not stop the Eldrazi. The bigger exposure here is the mana rather than the spell — an opponent who answers Cryptolith Rite at instant speed in response to a tapped-out emerge attempt can strand the pips. Somberwald Sage x2 and Abundant Growth x2 are the redundancy, and holding a second body back rather than tapping the whole board is the play pattern that answers it. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Chittering Host | Has no mana cost — it exists only as the meld of Graf Rats and Midnight Scavengers, so it cannot be cast or included as a deck card. |
| Emrakul, the Promised End | Mana value 13 reduced by graveyard card types still lands around 8-9 mana; this deck's own Decimator line kills sooner, and Emrakul competes for the same graveyard the discount already spends. |
| Epitaph Golem | Directly fights the engine: '{2}: Put target card from your graveyard on the bottom of your library' shrinks the creature-card count that Ghoultree, Splinterfright, Spider Spawning and Moldgraf Millipede all read. |
| Soul Separator | Reanimation and graveyard-copy effects are anti-synergistic with every emerge Eldrazi here: their entire value is on 'When you cast this spell', which a battlefield-return never triggers. Soul Separator additionally costs {3} to play and {5} to activate. |
| Join the Dance, Dauntless Cathar, Mausoleum Guard | Splash candidates, declined. All three are white cards, and this build is ALREADY three colours needing {G}{G}{G}, {U}{U} and {B}{B}; a fourth colour is not a splash, it is a mana base that casts nothing on time. The deterministic splash filter qualified white on cluster overlap alone, which is exactly the case the colour ceiling is meant to catch. |
| Unnatural Growth, Griselbrand | Four pips of a single colour on a mana base that must already produce {G}{G}{G}, {U}{U} and {B}{B}. The pip demand, not the effect, rules these out. |
| The Gitrog Monster, Tree of Perdition, Helvault, Tamiyo's Journal, Stitcher's Graft, Jace, Unraveler of Secrets | Rare and mythic cards competing for the five-card rarity budget that do not fix mana, do not generate bodies, and do not answer a threat: The Gitrog Monster's upkeep land sacrifice actively fights a three-colour deck's land drops, Tree of Perdition is a defender that never attacks or sacrifices profitably, and Helvault, Tamiyo's Journal, Stitcher's Graft and Jace, Unraveler of Secrets are slow value engines in a deck whose plan is a turn-6 alpha strike. |
| Hullbreaker Horror, Temporal Mastery | {5}{U}{U} and {5}{U}{U} respectively — seven mana with two blue pips on a base that is at most one-third blue. Hullbreaker Horror and Temporal Mastery are both strong cards this colour configuration simply cannot cast on time. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 19 recommended  [PASS]
Avg CMC:     4.73   Ramp cards: 4   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.97 adj [MV 4.73 vs 2.5, 6 accel, scaled N/60]  ->  19 lands  (P(2-4 in 7) = 0.774)

Color Balance (core):  [PASS]
  B  demand  31.2%  prod  38.9%  gap  -7.7pp  [OK]
  G  demand  68.8%  prod  66.7%  gap  +2.1pp  [OK]
  U  demand   0.0%  prod  27.8%  gap -27.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  - Commons/uncommons max 2 copies each — highest count anywhere across mainboard + sideboard is 2. At the cap: It of the Horrid Swarm, Ghoultree, Somberwald Sage, Abundant Growth, Infernal Grasp, Tragic Slip and the three common dual lands Tangled Islet, Haunted Mire and Contaminated Aquifer (mainboard) and Compelling Deterrence, Murderous Compulsion, Sever the Bloodline, Duel for Dominance (sideboard). At 1 copy: Bramble Wurm, Scorned Villager, Eccentric Farmer, Wretched Gryff, Abundant Maw, Geistcatcher's Rig, Syncopate. Verified with cube_search.get_max_copies driven by a per_rarity copies policy: PASS
  - Rares/mythics max 1 copy each — Decimator of the Provinces 1, Distended Mindbender 1, Elder Deep-Fiend 1, Cryptolith Rite 1, Maelstrom Pulse 1: PASS
  - Max 5 rare/mythic cards total across mainboard + sideboard — exactly 5, all mainboard, zero in the sideboard: PASS, at cap
  - All cards drawn from the cube mainboard pool; basic lands format-supplied and exempt: PASS
  - Mainboard 40 cards, sideboard 10 cards as requested: PASS
```
