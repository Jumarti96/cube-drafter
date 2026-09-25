---
deck_name: "ub-zombie-recursion"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UB"
format: "40-card"
built_at: "2026-08-26T04:30:20Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  x5 Island          blue source (7 total with the duals)
  x8 Swamp
  x2 Contaminated Aquifer          UB dual, enters tapped
  x1 Evolving Wilds          fetches a basic (13 in deck)
```

### CREATURES (10)
```
CMC  Card                   Qty   Color  Role                   Rar
  2  Blood Artist           x2    B      Death-to-damage drain  U
  2  Butcher Ghoul          x1    B      Undying Zombie         C
  2  Deranged Assistant     x2    U      Mill + ramp            C
  4  Gisa and Geralf        x1    UB     Recursion engine       R
  4  Haunted Dead           x2    B      Self-returning Zombie  U
  4  Overcharged Amalgam    x1    U      Flash flier + counter  R
  5  Grimgrin, Corpse-Born  x1    UB     Recurring finisher     M
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                 Qty   Color  Role                   Rar
  1  Eaten Alive          x1    B      Exile removal          C
  1  Syncopate            x1    U      Permission (exiles)    C
  1  Tragic Slip          x2    B      Removal (morbid)       C
  1  Village Rites        x2    B      Sac outlet + draw two  C
  2  Infernal Grasp       x2    B      Removal                U
  3  Forbidden Alchemy    x2    U      Mill + selection       C
  4  Sever the Bloodline  x1    B      Exile sweeper          U
```

### OTHER SPELLS (3)
```
CMC  Card                                         Qty   Color  Role                  Rar
  2  Ghoulish Procession                          x1    B      Free fodder per turn  U
  2  The Meathook Massacre                        x1    B      Sweeper + drain       M
  4  Invasion of Innistrad // Deluge of the Dead  x1    C      Removal + GY hate     R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                                                                                                                                                                                                                               Rar
Syncopate               x1    U      vs combo and big-mana decks -- the second copy of scaling permission that exiles what it counters                                                                                                                                                     C
Butcher Ghoul           x1    B      vs removal-heavy and grindy decks -- the second copy; undying gives Grimgrin two sacrifices from one card and adds a Zombie for Gisa and Geralf to recast                                                                                             C
Compelling Deterrence   x2    U      vs a resolved artifact or enchantment -- 'Return target nonland permanent to its owner's hand' is the ONLY effect in U/B in this pool that touches one at all; the 'discards a card if you control a Zombie' rider is live off 6 Zombie cards         U
Murderous Compulsion    x2    B      vs aggro decks that must tap out to attack -- cheap removal for the matchup the raced mode concedes; Madness {1}{B} is live off Haunted Dead's 'Discard two cards' cost                                                                               C
Imprisoned in the Moon  x2    U      vs an indestructible, recursive or otherwise unkillable permanent -- 'Enchanted permanent is a colorless land ... and loses all other card types and abilities' answers creatures, lands and planeswalkers without putting the card into a graveyard  C
Sever the Bloodline     x1    B      vs go-wide token decks -- the second copy; 'all other creatures with the same name' plus exile beats this cube's 27.1% graveyard density                                                                                                              U
Summary Dismissal       x1    U      vs a must-stop spell or a triggered-ability combo -- 'Exile all other spells and counter all abilities' is the only HARD, exiling, pay-proof catch-all available at common/uncommon, and the rare cap is fully spent                                  U
```

## ANALYSIS

### DECK IDENTITY

UB Zombie Graveyard Recursion. Deranged Assistant x2 and Forbidden Alchemy x2 fill the graveyard from turn two while Deranged Assistant's '{T}, Mill a card: Add {C}' also ramps toward a turn-4 Gisa and Geralf. Gisa then mills four more and grants 'Once during each of your turns, you may cast a Zombie creature spell from your graveyard' -- and because Grimgrin, Corpse-Born is itself a Legendary Creature - Zombie Warrior, the finisher lives inside the engine rather than beside it. Grimgrin eats a Haunted Dead that returns itself from the graveyard, or a free 2/2 from Ghoulish Procession, untapping and growing every turn while destroying a blocker on each attack; Blood Artist x2 and The Meathook Massacre convert every one of those sacrifices into life loss.

This is the third deck built off the same cube, the same colours and the same tribe, and it is the one where the tribal text does the least work and the graveyard does the most. Three things are worth stating as counts.

**Grimgrin is a Zombie, and that single line of type text is the whole build.** Gisa and Geralf reads `Once during each of your turns, you may cast a Zombie creature spell from your graveyard`. Grimgrin's type line is `Legendary Creature - Zombie Warrior` and Overcharged Amalgam's is `Creature - Zombie Horror`. So **2 of 2 threats in this deck are legal Gisa targets** -- 100% of the threat base is recastable from the graveyard once per turn. That is why a control deck can afford to run only two win conditions: an opponent has to answer the same threat repeatedly while also answering Gisa.

**Zombie count is 5 of 24 nonland cards, and that is deliberately low.** Grimgrin, Overcharged Amalgam, Haunted Dead x2, Butcher Ghoul. Compare the aristocrats build at 6 and the token build at 11 off the same pool. Here the tribe is not a payoff -- there is no lord, no anthem, no token multiplier. Zombie is simply the type line that makes Gisa's recursion legal, and five cards is enough because four mill outlets are digging for them: Deranged Assistant x2 at one card per turn from turn three, Forbidden Alchemy x2 at three cards per cast (four casts with flashback), and Gisa's own `mill four cards`.

**The assembly gate caught a real defect that no amount of prose would have.** On the first pass this deck had four payoff cards, every one a singleton, every one conditional: Grimgrin (`enters tapped and doesn't untap during your untap step`), Overcharged Amalgam (`{2}{U}{U}` on six blue producers), Gisa and Geralf (dead until a Zombie is in the yard), The Meathook Massacre (dead until creatures are dying). Reliability-weighted that is 3.1 effective copies, and P(seeing one by turn 8) came out at **0.70 against a 0.75 threshold** -- a hard fail. The fix was not to argue; it was Blood Artist x2 at full weight, taking the count to 6 copies / 5.1 effective / p=0.87.

| Sacrifice fodder for Grimgrin | Cost per use | Renewable? |
|---|---|---|
| Ghoulish Procession token | free, one per turn a nontoken creature dies | Yes |
| Haunted Dead | `{1}{B}` + discard two, from the graveyard | Yes |
| Butcher Ghoul | free once, via undying | Once |
| Deluge of the Dead token | `{2}{B}` | Yes, unlimited |
| Blood Artist / Deranged Assistant | the body itself | No |

**Where this deck's answers are unusually good, and where they are absent.** Four of its nine interaction cards **exile** rather than destroy -- Eaten Alive, Sever the Bloodline, Syncopate, and Deluge of the Dead's `{2}{B}: Exile target card from a graveyard` -- which matters more here than in most cubes: graveyard interaction is this environment's single largest threat class at 75 cards, 27.1% density. Against that, the deck has no answer at all to a resolved artifact or enchantment, because none exists: a scan of every blue, black and colourless card in the pool returns zero `destroy target artifact` or `destroy target enchantment` clauses, against 24 artifacts and 25 enchantments in the cube. Compelling Deterrence x2 in the sideboard bounces one, temporarily. That is a pool wall, not a slot choice.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (24 nonland):  1:6  2:9  3:2  4:6  5:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.1: Grimgrin, Corpse-Born@0.8, Overcharged Amalgam@0.7, Gisa and Geralf@0.8, The Meathook Massacre@0.8) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.5: Gisa and Geralf@0.9, Invasion of Innistrad // Deluge of the Dead@0.6) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 69%  T2 95%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre, Sever the Bloodline
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Eaten Alive, Invasion of Innistrad // Deluge of the Dead
  CONCEDED  noncreature_permanents: Eaten Alive answers a PLANESWALKER ('Exile target creature or planeswalker') but nothing in blue or black in this pool destroys an artifact or an enchantment -- a scan of all 122 U/B/colourless pool cards returns zero. Against the cube's 24 artifacts and 25 enchantments (49 cards, 17.7%) the mainboard has no answer; Compelling Deterrence x2 in the sideboard bounces one, which is temporary, and Imprisoned in the Moon cannot enchant an artifact or a non-Aura enchantment either. This is a pool wall, not a slot choice.
  OK        stack: Syncopate, Overcharged Amalgam
  OK        graveyard: Invasion of Innistrad // Deluge of the Dead, Eaten Alive, Sever the Bloodline, Syncopate
```

- No WARN-tier flags were raised on the final list: curve, assembly, goldfish and coverage all returned PASS.
- The assembly check FAILED on the first pass at payoff p=0.70 against the 0.75 threshold (4 conditional singletons, 3.1 effective copies). It was repaired by adding Blood Artist x2 at full weight rather than by reweighting the existing cards; the final figure is 6 copies / 5.1 effective / p=0.87.
- SLOT BAND DEVIATION -- Threats/Payoffs 4 of 24 = 16.7% against the control band of 5-10%. Grounds, stated rather than left implicit: the control band implies one or two payoff cards, but the Phase 6b assembly gate requires P(payoff seen by thesis turn 8) >= 0.75, which at 15 cards seen needs roughly five reliability-weighted copies. Every payoff this pool offers in these colours is a conditional singleton -- Grimgrin ('enters tapped and doesn't untap during your untap step'), Overcharged Amalgam ({2}{U}{U}), Gisa and Geralf (dead until a Zombie is in the yard), The Meathook Massacre (dead until creatures are dying) -- so at four cards the gate returned p=0.70 and FAILED. Blood Artist x2 was added to clear it, and it is a drain WIN CONDITION rather than a body: 'Whenever this creature or another creature dies, target player loses 1 life and you gain 1 life', with no once-per-turn clause and triggering on the opponent's deaths too. The band and the hard gate are in direct conflict here; the gate is hard and the band is guidance.
- SLOT BAND DEVIATION -- Engine & Infrastructure 11 of 24 = 45.8% against the control band of 10-20%. Partly arithmetic: the control rows sum to at most 75% of nonland, so roughly 25% is unallocated by construction. Partly thesis: in this pipeline the graveyard IS the hand, so the mill-and-recursion package is not overhead beside the win condition, it is the mechanism that produces it.
- Interaction 9 of 24 = 37.5%, inside the control 35-45% band -- no deviation.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Deluge of the Dead's '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token' is an unlimited sink that turns surplus lands into both graveyard hate and Grimgrin fodder. Forbidden Alchemy x2 has 'Flashback {6}{B}', so both copies are castable a second time with spare mana, and Deranged Assistant's '{T}, Mill a card: Add {C}' converts excess lands into a larger X for The Meathook Massacre. Haunted Dead's '{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield tapped' is a further sink, though it is conditional -- it needs something to have put Haunted Dead back into the graveyard first, which Village Rites x2 and Grimgrin now do. |
| screw | mitigation | 15 of 24 nonland cards cost two or less (curve 1:6, 2:9, 3:2, 4:6, 5:1). Deranged Assistant x2 costs {1}{U} on turn two and produces mana from turn three, which is what puts Gisa and Geralf on turn four. Goldfish sim over 1000 hands: 81% keepable against an 80% threshold -- the thinnest margin of the three decks off this pipeline, and the disclosed price of holding 5 Island against 19 black pips so that Overcharged Amalgam stays castable. 84% reach three lands by turn 3, 95% have a play by turn 2. |
| decapitation | mitigation | Grimgrin answered on sight is the mode this build is specifically constructed against. Grimgrin is a Legendary Creature - Zombie Warrior, so Gisa and Geralf's 'you may cast a Zombie creature spell from your graveyard' returns it the following turn, once per turn, for as long as Gisa lives; Overcharged Amalgam is likewise a Zombie and likewise recastable. If Gisa is answered instead, Haunted Dead x2 still return themselves for {1}{B} plus a discard, and Butcher Ghoul's undying gives one free return, so the board rebuilds without her. Blood Artist x2 and The Meathook Massacre keep draining regardless of which creature is on the battlefield. |
| gas-out | mitigation | Village Rites x2 ('As an additional cost to cast this spell, sacrifice a creature. Draw two cards') is four cards from two slots, and the creature it eats is one the deck wanted dead anyway -- a Ghoulish Procession token, a Butcher Ghoul that returns via undying, or a Haunted Dead that returns for {1}{B}. Forbidden Alchemy x2 adds four more looks with 'Flashback {6}{B}'. Beyond the hand, the graveyard is a second hand by design: Gisa and Geralf casts a Zombie from it every turn, so an empty hand still deploys a threat per turn. |
| raced | accepted | This deck is the slowest of the three built off this pipeline shortlist -- goldfish turn 8, and 3 of its 16 lands enter tapped. Mitigating would mean cutting mill outlets and card flow for cheap blockers, and the mill outlets ARE the engine here: Gisa and Geralf does nothing until Zombies are in the graveyard, so trading them for defence deletes the win condition to survive. What is already paid for without costing identity: 9 interaction cards of 24 nonland (37.5%), of which Tragic Slip x2 answers a threat for one mana and its morbid is now self-enabled by Village Rites x2 at instant speed; Blood Artist x2 reads 'you gain 1 life' on every death including the opponent's; and The Meathook Massacre is a scalable reset that is one-sided in practice, because Haunted Dead x2, Butcher Ghoul and every Gisa target rebuild after it while the opponent's board does not. |
| disruption-fizzle | mitigation | This is the one of the three builds that can protect its own key turn: Syncopate and Overcharged Amalgam's 'When this creature exploits a creature, counter target spell, activated ability, or triggered ability' are two pieces of stack interaction, and Amalgam has Flash so it can be held up alongside a threat. And because the plan is recursion rather than a single assembly turn, a removal spell landing mid-chain costs one Gisa activation, not the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Geistlight Snare | 'This spell costs {1} less to cast if you control a Spirit. It also costs {1} less to cast if you control an enchantment.' It was seeded on Ghoulish Procession and Necroduality as the enchantment enablers; Necroduality never made the build. Cut even after Ghoulish Procession returned, because undiscounted it is {2}{U} for 'Counter target spell unless its controller pays {3}' -- a Force Spike against an opponent with spare mana on every turn that matters at a thesis turn of 8. |
| Shipwreck Marsh | The only untapped-capable UB dual in the pool, but it is a rare and the cap is 5/5. Dropped so the slot could go to Invasion of Innistrad // Deluge of the Dead, which is simultaneously removal, the deck's only opposing-graveyard answer, and a repeatable source of Grimgrin fodder. Cost of the trade, stated: blue producers fell from 9 of 17 to 7 of 16, which matters because Overcharged Amalgam is the deck's only {U}{U} card; the manabase was rebalanced to 5 Island / 8 Swamp / 2 Contaminated Aquifer / 1 Evolving Wilds to hold blue at 7 sources, audit gaps B +5.4pp and U -11.7pp, both PASS. |
| Gravecrawler | 'You may cast this card from your graveyard as long as you control a Zombie' -- and this deck holds 5 Zombie cards, one of which is Grimgrin himself, so the condition would be self-satisfied. It is a rare, and the cap allowed exactly one of Gravecrawler or Invasion of Innistrad; Ghoulish Procession and Village Rites fix the fodder shortage at common/uncommon, which freed the rare for Invasion. |
| Think Twice | 'Draw a card. Flashback {2}{U}' is four cards from two slots. Cut for Village Rites x2, which is also four cards from two slots but is additionally the instant-speed sacrifice outlet the engine needed -- Grimgrin cannot untap on a turn it has nothing to sacrifice. |
| Rise from the Tides | 'Create a tapped 2/2 black Zombie creature token for each instant and sorcery card in your graveyard.' Instants and sorceries are 11 of 24 nonland cards (45.8%) here, so by turn 7-8 the realistic yield is 5-8 bodies. It stays out because those bodies arrive TAPPED and do nothing the turn they land, whereas Ghoulish Procession supplies one untapped body every turn for two mana paid once. |
| Makeshift Mauler | A 4/5 Zombie for four that Gisa and Geralf could recast -- except 'As an additional cost to cast this spell, exile a creature card from your graveyard' means every recast eats one of the graveyard bodies this deck needs to persist: Haunted Dead x2 return from there and Butcher Ghoul is recurred from there. |
| Cobbled Lancer | Same defect as Makeshift Mauler in a one-mana shell: its additional cost exiles a creature card from the graveyard, which is where Haunted Dead x2 live. |
| Epitaph Golem | '{2}: Put target card from your graveyard on the bottom of your library' -- it moves cards OUT of the graveyard, which is the resource this build spends the whole game accumulating. The ability works against the deck's own plan. |
| Necroduality | 'Whenever a nontoken Zombie you control enters, create a token that's a copy of that creature' -- with 5 nontoken Zombie cards and Gisa recasting one every turn, the count is live. Cut on the rare cap at 5/5, where it would have to displace the finisher, the engine, the reset or the removal, and it does nothing at all on the turn it lands. |
| Griselbrand | '{4}{B}{B}{B}{B}' with 'Pay 7 life: Draw seven cards'. Reanimation effects in this list: 0, and Gisa and Geralf reads 'a Zombie creature spell', which Griselbrand (Legendary Creature - Demon) is not. With no enabler and four black pips it is uncastable. |
| Laboratory Maniac | 'If you would draw a card while your library has no cards in it, you win the game instead.' Mill across a game to turn 8 is roughly 12-16 cards from a 40-card library against a normal draw of 15 -- nowhere near emptying it. The mill here is fuel, not a clock. |
| Tree of Perdition | '{T}: Exchange target opponent's life total with this creature's toughness' is a genuine alternate win, but it is a Defender with no evasion, it is not a Zombie so Gisa cannot recur it, and it would cost one of five rare/mythic slots. |
| Morbid Opportunist | Sideboard consideration. 'Whenever one or more other creatures die, draw a card' is real refuel off this deck's death stream, but Village Rites took the card-flow slot at one mana instead of three while also being the sacrifice outlet, and the remaining creature slots went to Blood Artist because the assembly gate needed full-weight PAYOFF copies, which Morbid Opportunist is not. |
| Soulcipher Board // Cipherbound Spirit | Sideboard consideration. '{1}{U}, {T}: Look at the top two cards of your library. Put one of them into your graveyard' is a third repeatable mill engine, but the deck already runs four mill outlets and the binding constraint was payoff copies, not mill. |
| Silent Departure | Sideboard consideration, cut. 'Return target creature to its owner's hand' is sorcery-speed temporary bounce -- it hands the card back to be recast, which is a poor trade in a cube with 27.1% graveyard density where the maindeck answers are chosen specifically to exile. |
| Abundant Maw, Distended Mindbender, Elder Deep-Fiend, It of the Horrid Swarm, Decimator of the Provinces, Emrakul, the Promised End, Chittering Host, Wretched Gryff, Temporal Mastery, Hullbreaker Horror | Top end at mana value 7 to 13 on a 16-land deck: even with Deranged Assistant x2 ramping, none arrives before the thesis turn of 8, none is a Zombie for Gisa to recur, none mills, and none returns a card from the graveyard. |
| Mausoleum Wanderer, Nebelgast Herald, Essence Flux, Battleground Geist, Lantern Bearer // Lanterns' Lift, Mist Raven, Spectral Shepherd, Apothecary Geist | Spirit-matters and blue tempo bodies: each reads 'Spirit' or is a one-shot bounce on entry, and none is a Zombie, mills, or recurs -- they trade one-for-one in a deck whose plan is to win the long game on card count. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.46   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.72 adj [MV 2.46 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  67.9%  prod  62.5%  gap  +5.4pp  [OK]
  U  demand  32.1%  prod  43.8%  gap -11.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool rules: commons/uncommons max 2 copies, rares/mythics max 1 copy .......... PASS
  (verified against cube_search.get_max_copies for every card; basics exempt)
Extra constraint: at most 5 rare/mythic CARDS across mainboard + sideboard .... PASS (5/5)
  Grimgrin Corpse-Born (M), The Meathook Massacre (M), Gisa and Geralf (R),
  Overcharged Amalgam (R), Invasion of Innistrad // Deluge of the Dead (R)
  Sideboard rares/mythics: 0 -- forced by the cap.
Deck size 40 / sideboard 10 ................................................... PASS
Exact-name membership against the cube mainboard .............................. PASS
Colour usability -- every nonland card returns a usable mode in U/B ........... PASS
Splash cap -- splash resolved to none; the green candidates named by the Phase 3
  filter (Spider Spawning, Ghoultree, Grapple with the Past) were all declined:
  the pool contains NO green fixing whatsoever, so green would be reachable only
  through Evolving Wilds fetching a basic Forest the deck does not run ........ PASS
Mana audit ................................................................... PASS
Structural gate (curve / assembly / goldfish / coverage) ...................... PASS
```