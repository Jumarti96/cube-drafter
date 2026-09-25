---
deck_name: "gu-ghoultree-emerge-ramp"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GU"
format: "40-card"
built_at: "2026-08-27T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  12x Forest                                
  4x Island                                
  2x Tangled Islet                         GU dual, enters tapped
```

### CREATURES (16)

```
CMC  Card                                  Qty   Color  Role                                                      Rar
  2  Deranged Assistant                    x1    U      Engine — self-mill + generic ramp                         C
  3  Grizzled Angler // Grisly Anglerfish  x2    U      Engine — self-mill that converts into a body              U
  3  Somberwald Sage                       x2    G      Ramp — three mana of one colour for creature spells       U
  3  Splinterfright                        x2    G      Engine — upkeep self-mill / graveyard-scaled threat       U
  5  Moldgraf Millipede                    x2    G      Engine — mana-value-5 fodder that mills 3 on entry        C
  7  Wretched Gryff                        x2    C      Emerge payoff — cheapest sink, replaces itself            C
  8  Ghoultree                             x2    G      Engine — mana-value-8 emerge fodder cast for 2-4          U
  8  It of the Horrid Swarm                x2    C      Emerge payoff — rebuilds the board it ate                 C
 10  Decimator of the Provinces            x1    C      Primary payoff — alpha strike                             R
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                                  Qty   Color  Role                                                      Rar
  1  Syncopate                             x1    U      Interaction — stack answer                                C
  2  Grapple with the Past                 x2    G      Engine — mill 3 and rebuy Ghoultree                       C
  3  Clear Shot                            x1    G      Interaction — removal via a large creature                U
  3  Eldritch Evolution                    x1    G      Tutor — converts a body into a payoff on the battlefield  R
  3  Forbidden Alchemy                     x1    U      Engine — instant-speed mill 3 that selects the payoff     C
```

## SIDEBOARD (10)

```
Card                                  Qty   Color  Rar  Role                              When to board in
Compelling Deterrence                 x2    U      U    Bounce                            vs artifacts and enchantments — 'Return target nonland permanent to its owner's hand' is the ONLY interaction these colours have with a class that is 49 of 277 cube cards (17.7%); the Zombie discard rider is live off Ghoultree, a Zombie Treefolk
Ambush Viper                          x2    G      C    Removal-by-trade                  vs creature decks — flash deathtouch at two mana trades with anything, and the body is still emerge fodder afterwards
Imprisoned in the Moon                x2    U      C    Catch-all answer                  vs planeswalkers, indestructible or recursive creatures, and utility lands — it strips all abilities rather than destroying
Geistcatcher's Rig                    x1    C      U    Anti-flier / mana-value-6 fodder  vs the cube's 58-card evasion class — 4 damage to a flier on entry, and at mana value 6 it pays an entire emerge generic cost by itself
Clear Shot                            x1    G      U    Removal                           vs creature decks — second copy; a resolved Ghoultree turns it into unconditional removal
Syncopate                             x1    U      C    Counterspell                      vs combo and control — second copy, and the exile clause matters against the 27%-density graveyard field
Cryptolith Rite                       x1    G      R    Ramp engine                       vs slow or controlling decks that let the game go long — it turns 16 creature cards into any-colour mana, which fixes {G}{G}{G} and enables hardcasting an {8} It of the Horrid Swarm when no fodder is available
```

## ANALYSIS

### DECK IDENTITY

A self-mill deck whose graveyard is a discount coupon. Ten mill sources fill the yard with creature cards, which does two things at once: it shrinks Ghoultree from {7}{G} toward {1}{G}, and it grows Splinterfright. Ghoultree's mana value stays 8 no matter how cheaply it was cast, so sacrificing it to Decimator of the Provinces' emerge cost erases the entire {6} generic and leaves only {G}{G}{G}. Decimator arrives with haste and hands the whole board +2/+2 and trample, turning a pile of milled-out value creatures into a lethal attack from a board state that looked harmless a moment earlier.

### THE TRICK: PAID 2, WORTH 8

Two facts about `Ghoultree` do all the work, and they pull in opposite directions on the same card:

- *"This spell costs {1} less to cast for each creature card in your graveyard."* With five creature cards binned it costs `{2}{G}`.
- **Its mana value is still 8.** A cost reduction changes what you *pay*; it never changes mana value.

Emerge reads mana value. So a Ghoultree bought for three mana pays like an eight-drop when you sacrifice it:

| Sacrifice (mana value) | Decimator `{6}{G}{G}{G}` | It of the Horrid Swarm `{6}{G}` | Wretched Gryff `{5}{U}` |
|---|---|---|---|
| **Ghoultree (8)** | **`{G}{G}{G}` = 3** | **`{G}` = 1** | **`{U}` = 1** |
| Moldgraf Millipede (5) | `{1}{G}{G}{G}` = 4 | `{1}{G}` = 2 | `{U}` = 1 |
| Splinterfright / Grizzled Angler / Somberwald Sage (3) | `{3}{G}{G}{G}` = 6 | `{3}{G}` = 4 | `{2}{U}` = 3 |

The mana-value-8 row is the deck. Everything else is a fallback that costs three or four extra generic mana, which is exactly why `role_counts` weights the mana-value-2 and -3 bodies at half.

### THE DECK IS ITS OWN DISCOUNT

Ten of the 22 nonland cards put cards in the graveyard: `Grizzled Angler` ×2, `Deranged Assistant`, `Splinterfright` ×2, `Moldgraf Millipede` ×2, `Grapple with the Past` ×2, `Forbidden Alchemy`. Sixteen of 22 nonland cards are creatures, so almost every milled card is a mana of discount. The same graveyard sizes `Splinterfright`, whose power and toughness *"are each equal to the number of creature cards in your graveyard"* — a three-mana card that is usually a 4/4 to 6/6 trampler and mills two more every upkeep on its own.

The result is a deck whose best draw is a long one. It is the only build of the four that genuinely *wants* the game to go another turn.

### A CARD THAT TURNS ITSELF OFF

`Grizzled Angler` is worth reading carefully, because its role is narrower than it looks: *"{T}: Mill two cards. Then if there is a colorless creature card in your graveyard, transform this creature."*

That transform is **mandatory**, and the back face `Grisly Anglerfish` has no mill ability at all. The trigger condition is the deck's own payoffs — colourless creature cards here are `Decimator`, `It of the Horrid Swarm` ×2 and `Wretched Gryff` ×2, five of 22. Against a roughly 33-card library, the chance one is already in the graveyard is about 0.50 after four cards milled and 0.78 after eight, and this deck mills that fast. So expect **two or three activations, not unlimited mill**, and then a body.

That is not a reason to cut it — a body with a `{6}` activation is a fine blocker and mana-value-3 fodder — but the deck should not be planned around it as an open-ended engine.

### WHY NOT ELDER DEEP-FIEND

It is the best emerge card in the cube and it is not here. Combined true pip demand for this list is **G 18 / U 7**, and the mana base runs 14 green sources against 6 blue. `Elder Deep-Fiend`'s emerge `{5}{U}{U}` asks for two blue pips off those six sources **on the same turn** the deck needs `{G}{G}{G}` for `Decimator`. One of the two would be missing often enough to matter, and the deck would rather cast the one it can always cast.

### WHAT THIS DECK CANNOT DO

Green-blue in this cube contains **zero** of the four sweepers (all four are red or white), and **zero** effects that destroy or exile an artifact or enchantment. Against a field where artifacts and enchantments are 49 of 277 cards (17.7%), the only interaction available is bouncing them — which is why `Compelling Deterrence` ×2 sits in the sideboard for a card that is otherwise a mediocre two-mana bounce.

Graveyard hate is worse still: no green-blue card in the pool touches an *opponent's* graveyard. `Epitaph Golem`, `Cobbled Lancer` and `Soul Separator` all read "your graveyard". Against the cube's largest theme (75 cards, 27.1%) this deck simply has no answer — and a symmetric one would be self-defeating anyway, since its own graveyard is the discount the whole plan runs on.

### THE COMBO TURN IS HARDER TO INTERACT WITH THAN IT LOOKS

Emerge's sacrifice is part of the spell's **cost**, paid on announcement. An opponent who responds to the emerge announcement by killing `Ghoultree` has spent a card and stopped nothing — `Decimator` is already on the stack and its `+2/+2` and trample trigger is guaranteed.

The real window is *before* announcement, which is what the redundancy answers: a second `Ghoultree`, `Moldgraf Millipede` ×2 as mana-value-5 backup, and `Grapple with the Past` ×2 to return a `Ghoultree` that was milled or killed. Only a counterspell beats the turn itself, and `Syncopate` can be held up the turn before.

One line worth knowing: `Eldritch Evolution` sacrificing `Ghoultree` searches at X = 2 + 8 = 10, which reaches `Decimator` exactly. But *"Put that card onto the battlefield"* is **not casting it**, so the `+2/+2` and trample trigger does **not** fire. It buys a 7/7 trample haste body for `{1}{G}{G}` — worth a card, but it is the backup line, not a second copy of the kill.

### COUNT-DEPENDENT VERDICTS

Every card whose value is a function of how many others qualify, decided against **this** list (22 nonland cards) rather than in the abstract.

| Card | Verdict | Count against this list |
|---|---|---|
| Ghoultree | INCLUDE | 'This spell costs {1} less to cast for each creature card in your graveyard.' Creature cards are 16 of 22 nonland cards = 72.7%, and the mill package is 10 cards, several repeatable: Grizzled Angler x2, Deranged Assistant x1, Splinterfright x2 (upkeep), Moldgraf Millipede x2 (entry), Grapple with the Past x2 and Forbidden Alchemy. A realistic turn-4-to-5 graveyard holds 4-6 creature cards, putting Ghoultree at {3}{G} down to {1}{G}. Its mana value stays 8 regardless, which is the entire point. |
| Splinterfright | INCLUDE | Power and toughness each equal creature cards in your graveyard — the same 16-of-22 denominator — so typically a 4/4 to 6/6 trampler for three mana by turn 5, and it mills two per upkeep, growing itself. |
| Moldgraf Millipede | INCLUDE | Mills three on entry then takes a counter per creature card in the graveyard — same 16-of-22 denominator. Included primarily as mana-value-5 fodder: sacrificing it pays 5 of Decimator's {6} generic, leaving {1}{G}{G}{G}. |
| Grizzled Angler // Grisly Anglerfish | INCLUDE, RE-ROLED at Phase 9 | '{T}: Mill two cards. Then if there is a colorless creature card in your graveyard, transform this creature.' The transform is MANDATORY once the condition is met, and the back face Grisly Anglerfish has no mill ability — so this is not open-ended repeatable mill, and the original role wording overstated it. The trigger condition is the deck's own payoffs: colourless creature cards are 5 of 22 (Decimator, It of the Horrid Swarm x2, Wretched Gryff x2). Against a ~33-card post-mulligan library, P(at least one is already in the graveyard) is roughly 0.50 after 4 cards milled and 0.78 after 8, so expect about 2-3 activations, i.e. 4-6 cards, before it flips. KEPT rather than cut because flipping is not a loss: it converts into a body with a {6} activated ability, which is both a blocker and mana-value-3 emerge fodder. The role now reads 'self-mill that converts into a body'. |
| Traverse the Ulvenwald | CUT at Phase 9 (was INCLUDE) | Delirium requires four or more card types among cards in your graveyard. Recounted against the finished list, the types available are creature (16 of 22) and land (18 of 40) freely, instant (3: Grapple x2, Forbidden Alchemy... actually Clear Shot and Syncopate are instants too) and sorcery — but sorceries in this list are Eldritch Evolution alone, and its oracle ends 'Exile Eldritch Evolution', so cast normally it NEVER reaches the graveyard. Mainboard artifacts are 0 of 22 and enchantments 0 of 22, so there is no alternate fourth type. The fourth type is therefore reachable only by MILLING the single Eldritch Evolution — roughly 1 card in 33, about 25-30% by turn 5. A one-mana Ghoultree tutor that is live under a third of the time is not worth one of five rare slots, and it was cited as a decapitation redundancy it could not deliver. Replaced by Forbidden Alchemy. |
| Cryptolith Rite | CUT from mainboard, INCLUDE x1 in sideboard | 'Creatures you control have "{T}: Add one mana of any color."' — creature cards are 16 of 22, the highest possible denominator, so the effect is real. CUT from the mainboard on tempo, not on count: it is a turn-2 play that produces nothing on the turn it resolves, in a deck whose turn 2 must start milling or the Ghoultree discount never materialises. |
| Vilespawn Spider | CUT | 'Create a 1/1 green Insect creature token for each creature card in your graveyard' — the 16-of-22 denominator is favourable. CUT on cost competition: the activation is {2}{G}{U}, tap, sacrifice, at sorcery speed, spending the exact turn and mana the {G}{G}{G} Decimator line needs, and the tokens are mana value 0 so they discount no emerge cost. |
| Duskwatch Recruiter // Krallenhorde Howler | CUT | The back face's 'Creature spells you cast cost {1} less to cast' would apply to 16 of 22 cards. CUT because reaching that face is outside this deck's control — it transforms only 'if no spells were cast last turn', and a combo deck milling every turn casts spells every turn. |
| Spider Spawning | CUT | A 1/2 Spider per creature card in the graveyard — 16-of-22 denominator, favourable. CUT on cost and plan: {4}{G} is five mana on the combo turn, and 1/2 blockers do not convert into damage the way Decimator's +2/+2 and trample does. |
| Lumberknot | CUT | 'Whenever a creature dies, put a +1/+1 counter on this creature.' Creature deaths here are driven by emerge sacrifices — 5 payoffs across the game, typically 1-2 before the kill turn. A hexproof 1/1 that grows once or twice does not reach relevant size before turn 6. |
| Laboratory Maniac | CUT | RECOUNTED at Phase 9 — the earlier entry said '5-6 cards per turn' while its own parenthetical summed to 10, which was an arithmetic error. Maximum sustained mill with every engine online is Grizzled Angler x2 for 4, Deranged Assistant x1 for 1, Splinterfright x2 for 4 at upkeep, i.e. about 9 per turn, against a library of ~33 after the opening hand — roughly 4 turns, not 'six or more'. The CUT nevertheless stands, on a different mechanism: Grizzled Angler's transform is mandatory, so 4 of those 9 cards per turn stop permanently after 2-3 activations, and the deck has no way to draw into the win once the library empties. |
| Spontaneous Mutation | CUT | '-X/-0, where X is the number of cards in your graveyard.' Here X is genuinely LARGE — the graveyard reaches 10 or more by turn 5. CUT anyway on two grounds the size does not fix: it does not remove the creature, which keeps full toughness and keeps blocking, and it is a blue card in a base with 6 blue sources of 18. |
| Rise from the Tides | CUT | A Zombie per instant and sorcery card in the graveyard — instants and sorceries are 6 of 22 nonland cards = 27.3%, of which perhaps 2-3 are in the graveyard by turn 6. Six mana for two or three 2/2s, and the tokens are mana value 0 so they discount no emerge cost. |
| Tireless Tracker | CUT | Investigates per land entering; land drops run about one per turn, so roughly 4 Clues by turn 5 at two mana each to cash. CUT on slot and budget: it competes at three mana with Splinterfright and Grizzled Angler, both of which advance the Ghoultree discount, and it is a rare. |
| Wrenn and Seven | CUT | Its +1 does mill creature cards — about 2 per activation at this deck's 18-land ratio — and its -3 Treefolk sizes to your land count, roughly 5 by turn 5. CUT on cost and budget: five mana is the combo turn, and it is a mythic. |
| Second Harvest | CUT | 'For each token you control, create a token that's a copy of that permanent.' Tokens come only from It of the Horrid Swarm's cast trigger, two 1/1 Insects, and only after an emerge cast — so the token count is 0 on almost every turn and at best 2. |
| Mayor of Avabruck // Howlpack Alpha | CUT | Human lord front — Humans are 5 of 22 (Grizzled Angler x2, Somberwald Sage x2, Deranged Assistant x1) — and Wolf/Werewolf lord back, where the count is 0 of 22. The front count is real but the payoff is +1/+1 on utility bodies that exist to be tapped or sacrificed. |
| Howlpack Resurgence | CUT | 'Each creature you control that's a Wolf or a Werewolf gets +1/+1 and has trample' — Wolves and Werewolves are 0 of 22. |
| Moonlight Hunt | CUT | Damage equal to the power of each Wolf or Werewolf you control — 0 of 22. |
| Hamlet Captain | CUT | Pumps other Humans on attack or block — Humans are 5 of 22, but every one is a tap-ability utility creature that does not attack. |
| Dawnhart Disciple | CUT | Grows when another Human enters — 5 of 22, and the payoff is a temporary +1/+1 on a 2/2. |
| Intrepid Provisioner | CUT | 'another target Human you control gets +2/+2 until end of turn' — 5 of 22 Humans, but a temporary pump on a mana dork advances nothing. |
| Duel for Dominance | CUT | Coven requires three or more creatures with different powers, which this deck satisfies easily (Somberwald Sage 0/1, Deranged Assistant 1/1, Ghoultree 10/10, Splinterfright a variable */*). CUT anyway because it duplicates Clear Shot's prerequisite — both need a large body of your own to point at something — and the sideboard slots it would have taken went to Compelling Deterrence, which answers a class nothing else in these colours can touch. |
| Delver of Secrets // Insectile Aberration | CUT | Flip rate equals instant/sorcery density: 6 of 22 = 27.3% per upkeep. At mana value 1 it is also near-worthless as emerge fodder. |
| Thing in the Ice // Awoken Horror | CUT | Needs four instant or sorcery casts to remove all ice counters; density is 6 of 22, putting the flip past turn 6. Its flip also returns all non-Horror creatures to hand, which would bounce this deck's own Ghoultree. |
| Metallic Mimic | CUT | Counters go only on the chosen creature type; the largest single type in this list is Eldrazi at 5 of 22 (Decimator, It of the Horrid Swarm x2, Wretched Gryff x2), and those are cast via emerge as one-off finishers, not built up with counters. |
| Docent of Perfection // Final Iteration | CUT | A Wizard per instant/sorcery cast, flipping at three Wizards — instants and sorceries are 6 of 22 and Wizards are 1 of 22 (Deranged Assistant). |
| Battleground Geist | CUT | 'Other Spirit creatures you control get +1/+0' — Spirits are 0 of 22. |
| Nebelgast Herald | CUT | 'Whenever this creature or another Spirit you control enters' — nontoken Spirits are 0 of 22, so the trigger fires once, on its own entry. |
| Geistlight Snare | CUT | It costs {1} less if you control a Spirit and a further {1} less if you control an enchantment — once per condition. Spirits are 0 of 22 and enchantments 0 of 22, so it is a full {2}{U} for 'counter unless its controller pays {3}' in a deck with six blue sources. |
| Compelling Deterrence | CUT from mainboard, INCLUDE x2 in sideboard at Phase 9 | The discard rider needs a Zombie — Zombies are 2 of 22 (Ghoultree is a Zombie Treefolk), so the rider is live but not reliable. The card earns its sideboard slot on a completely different axis, and the axis is decisive: 'Return target nonland permanent to its owner's hand' is the ONLY effect in the entire G/U-usable pool that interacts with an artifact or an enchantment, a class that is 49 of 277 cube cards (17.7%). |
| Necroduality | CUT | Copies each nontoken Zombie that enters — 2 of 22 qualify (Ghoultree x2), and it is a mythic. Copying Ghoultree would be excellent fodder, but a four-mana enchantment that does nothing until a mana-value-8 creature resolves is the wrong order of operations for a turn-6 kill. |
| Hermit Druid | CUT | 'Reveal cards from the top of your library until you reveal a basic land card. Put that card into your hand and all other cards revealed this way into your graveyard.' The number MILLED is the non-basics ahead of the first basic, so MORE basics means a SHALLOWER mill. With 16 basics of 18 lands, roughly 14 basics remain in a ~33-card library, giving (33-14)/(14+1) is about 1.3 cards per activation — worse than Deranged Assistant's guaranteed 1 plus a mana, and Deranged Assistant is a common at 2 copies. Cutting it freed the rare slot. |

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (combo):  [WARN]
  MV distribution (22 nonland):  1:1  2:3  3:9  5:2  7:2  8:4  10:1
  WARN  Above thesis turn: share of nonland cards with MV > 6 is 32% (max 10%)
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 5 copies → p=0.82 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 7.5: Splinterfright@0.5, Splinterfright@0.5, Grizzled Angler // Grisly Anglerfish@0.5, Grizzled Angler // Grisly Anglerfish@0.5, Somberwald Sage@0.5, Somberwald Sage@0.5, Deranged Assistant@0.5) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 16%  T2 62%  T3 96%
Coverage:  [PASS]
  CONCEDED  wide_boards: The cube contains exactly 4 sweepers and all are red or white by identity (dossier.threat_profile.sweepers), and a direct query over the G/U-usable pool returns no mass-removal effect at all — no green-blue deck in this cube can answer a wide board with a sweeper. This deck answers it with trample instead: Decimator of the Provinces gives 'creatures you control get +2/+2 and gain trample until end of turn', and a 12/12 trampling Ghoultree is not stopped by a board of small blockers. Conceding is the pool's constraint, not a slot choice.
  OK        single_large_threat: Clear Shot, Syncopate
  CONCEDED  noncreature_permanents: CORRECTED at Phase 9 — the earlier text asserted that these colours had no generic bounce, which the pool's own oracle text refutes: Compelling Deterrence is mono-blue and reads 'Return target nonland permanent to its owner's hand', which hits any artifact or enchantment. What IS true is that G/U contains no 'destroy or exile target artifact/enchantment' effect at all, so the class can be delayed but never permanently answered. The mainboard concedes it because a two-mana temporary bounce does not earn a slot in a 22-card engine; Compelling Deterrence x2 is boarded instead, against a class that is 49 of 277 cube cards (17.7%).
  OK        stack: Syncopate
  CONCEDED  graveyard: No G/U card in the pool exiles from an opponent's graveyard — every graveyard effect in these colours (Epitaph Golem, Cobbled Lancer, Soul Separator) reads 'your graveyard'. The concession is unusually costly to reverse here for a second reason: this deck's own graveyard is its engine, so any symmetric answer would shrink Ghoultree's discount and Splinterfright's size at the same time it hit the opponent.
```

- curve WARN (32% of nonland cards have MV > 6, max 10%): accepted. The seven flagged cards are Wretched Gryff x2 (MV 7), Ghoultree x2 (MV 8), It of the Horrid Swarm x2 (MV 8) and Decimator of the Provinces (MV 10) — and not one of them is ever paid at printed cost. Five are cast via emerge for 1-4 mana by sacrificing a body, and Ghoultree's own text reduces it to 2-4 once the graveyard is stocked. The high mana values are not a curve problem, they are the resource the deck converts: Ghoultree's MV of 8 is precisely what erases Decimator's {6} generic. Lowering the flagged share would mean cutting either the payoffs or the fodder, which are the two halves of the kill mechanism.
- goldfish PASS (keepable 86%, needs 80%): recorded rather than defended. Note that a play by turn 1 fell from 33% to 16% in the Phase 9 repair, because one Deranged Assistant was cut for Forbidden Alchemy. That is an accepted trade: the turn-1 play it lost was a mana dork, and what replaced it raises the two counts the kill actually reads — graveyard fill and cards in hand. A play by turn 3 is 96% and 3 lands by turn 3 is 92%.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands convert directly into the kill, because emerge's generic component is paid in mana: a seventh land is the difference between emerging Decimator off a mana-value-5 Moldgraf Millipede ({1}{G}{G}{G}) and needing Ghoultree at all. Grapple with the Past x2 returns a land from the graveyard to hand, Syncopate scales with {X}, Forbidden Alchemy is an instant-speed mana sink, and Somberwald Sage x2 turns excess untapped mana into three-at-a-time creature mana. |
| screw | mitigation | The deck has real acceleration: deck_audit.accel_count is 3 and all three are nameable — Somberwald Sage x2 ('{T}: Add three mana of any one color') and Deranged Assistant ('{T}, Mill a card: Add {C}'). Grapple with the Past x2 additionally returns a land card from the graveyard to hand. A two-land hand containing a mana creature is genuinely keepable, and the goldfish check corroborates it at 3 lands by turn 3 in 92% of hands. |
| decapitation | mitigation | Ghoultree is the piece most likely to be answered on sight, and after the Phase 9 repair it is redundant three ways that do not depend on a conditional: a second copy, Moldgraf Millipede x2 as mana-value-5 backup fodder, and Grapple with the Past x2 ('return a creature or land card from your graveyard to your hand'), which specifically recovers a Ghoultree that was milled or killed. Traverse the Ulvenwald was previously counted as a fourth redundancy and has been removed, because its delirium condition was live under a third of the time. |
| gas-out | mitigation | The deck does not need a full hand, because its resources sit in the graveyard rather than in hand: Ghoultree gets cheaper as the game goes longer, Splinterfright gets bigger, and Grapple with the Past x2 converts an empty hand back into the best creature in the yard. Cards: Net-Positive plus Self-Replacing is 5 of 22 — Wretched Gryff x2 ('When you cast this spell, draw a card'), Grapple with the Past x2, and Forbidden Alchemy, which was added at Phase 9 precisely to raise this count. |
| raced | accepted | Against the fastest clocks in the threat profile this deck is genuinely vulnerable: it has 2 mainboard interaction cards, no sweeper, and spends turns 2 through 4 tapping creatures to mill rather than affecting the board. Mitigating would mean cutting mill or fodder for cheap removal — and every card cut from the engine directly raises Ghoultree's cost, which is the one number the entire kill depends on. The deck accepts being the slower deck against aggro game one and boards in Ambush Viper x2, Compelling Deterrence x2, the second Clear Shot and the second Syncopate afterwards — six cards coming in on top of the two mainboard interaction slots. |
| disruption-fizzle | mitigation | The combo turn is unusually resistant to spot removal, and this is a rules property rather than a card: emerge's sacrifice is part of the spell's COST, paid on announcement, so an opponent who kills Ghoultree in response to the emerge announcement has spent a card and stopped nothing — Decimator is already on the stack. Killing Ghoultree BEFORE the announcement does work, which is what the three-way redundancy under 'decapitation' answers. Only a counterspell stops the turn itself, and Syncopate can be held up on the preceding turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Abundant Maw, Distended Mindbender | Emerge cost is {6}{B} and {5}{B}{B} respectively; core_colors locked to [G,U] at Phase 3, so the emerge mode is uncastable and only the generic {8} hardcast remains. Colour ceiling fixed by an earlier phase, not a guess about the eventual list. |
| Emrakul, the Promised End | Mana value 13 reduced by card types in the graveyard still bottoms out around 8-9 mana; this deck's own Decimator line kills several turns sooner, and Emrakul competes for the same graveyard the discount already spends. |
| Epitaph Golem, Cobbled Lancer | Directly fights the engine: both exile or recycle creature cards OUT of the graveyard, and Ghoultree's discount and Splinterfright's size are both counts of creature cards IN the graveyard. Epitaph Golem's '{2}: Put target card from your graveyard on the bottom of your library' and Cobbled Lancer's 'exile a creature card from your graveyard' each shrink the number this pipeline is trying to grow. |
| The Gitrog Monster, Gravecrawler, Sanitarium Skeleton | CORRECTED at Phase 9 — the original reason named Hermit Druid and Elder Deep-Fiend as budget holders, and both were subsequently cut, so the deck finished at 3 of 5 rare/mythic cards with two slots unspent. The Gitrog Monster and Gravecrawler are cut on mechanism instead: Gitrog's 'At the beginning of your upkeep, sacrifice The Gitrog Monster unless you sacrifice a land' fights a deck that must hit five land drops to cast Ghoultree and emerge in one turn, and Gravecrawler is a mana-value-1 body whose recursion needs a Zombie, of which this list has 2 of 22. Sanitarium Skeleton is mana value 1, which discounts a single generic mana. All three also require a black splash the two-colour base is not paying for. |
| Jace, Unraveler of Secrets, Tamiyo's Journal, Helvault, Stitcher's Graft, Mausoleum Wanderer | CORRECTED at Phase 9 — the rarity-budget premise was wrong (the deck finished at 3 of 5 with two slots free). These are cut on mechanism: none mills a card, none provides a body above mana value 3, and none answers a threat faster than the commons already in include_candidates. Jace and Tamiyo's Journal are five-mana value engines in a deck whose kill turn is five or six; Helvault and Stitcher's Graft do not interact with the graveyard at all; Mausoleum Wanderer is a mana-value-1 Spirit in a list with 0 other Spirits. |
| Unnatural Growth | CORRECTED at Phase 9 — the original reason cited a conflict with Elder Deep-Fiend's emerge {5}{U}{U}, and Elder Deep-Fiend is not in the finished deck. The cut stands on the card's own cost: {1}{G}{G}{G}{G} is four green pips, which even a 70%-green base cannot reliably produce on the turn it also wants to cast a creature. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 19 recommended  [PASS]
Avg CMC:     4.55   Ramp cards: 3   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +2.23 adj [MV 4.55 vs 2.5, 3 accel, scaled N/60]  ->  19 lands  (P(2-4 in 7) = 0.774)

Color Balance (core):  [PASS]
  G  demand  72.2%  prod  77.8%  gap  -5.6pp  [OK]
  U  demand  27.8%  prod  33.3%  gap  -5.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  - Commons/uncommons max 2 copies each — highest count anywhere across mainboard + sideboard is 2 (It of the Horrid Swarm, Wretched Gryff, Ghoultree, Moldgraf Millipede, Splinterfright, Grizzled Angler, Grapple with the Past, Somberwald Sage, Compelling Deterrence, Ambush Viper, Imprisoned in the Moon; and Clear Shot at 1 mainboard + 1 sideboard, Syncopate at 1 mainboard + 1 sideboard). Verified with cube_search.get_max_copies driven by a per_rarity copies policy: PASS
  - Rares/mythics max 1 copy each — Decimator of the Provinces 1, Eldritch Evolution 1 (mainboard), Cryptolith Rite 1 (sideboard): PASS
  - Max 5 rare/mythic cards total across mainboard + sideboard — 3 used (2 mainboard + 1 sideboard), two slots deliberately left unspent after Traverse the Ulvenwald and Hermit Druid were cut on their own mechanisms: PASS
  - All cards drawn from the cube mainboard pool; basic lands format-supplied and exempt: PASS
  - Mainboard 40 cards, sideboard 10 cards as requested: PASS
```
