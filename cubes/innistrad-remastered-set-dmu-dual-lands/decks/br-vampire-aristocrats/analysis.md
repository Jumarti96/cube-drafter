---
deck_name: "br-vampire-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-08-26T02:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x11  Swamp                                
  x3   Mountain                             
  x2   Geothermal Bog                       BR dual, enters tapped
```

### CREATURES (13)

```
CMC  Card                                       Qty   Color  Role                            Rar
  1  Indulgent Aristocrat                       x2    B      engine                          U
  2  Blood Artist                               x2    B      payoff                          U
  2  Blood Petal Celebrant                      x1    R      engine                          C
  2  Bloodtithe Harvester                       x2    BR     threat                          U
  2  Butcher Ghoul                              x1    B      engine                          C
  2  Voldaren Bloodcaster // Bloodbat Summoner  x1    B      payoff                          R
  3  Falkenrath Torturer                        x2    B      engine                          C
  3  Morbid Opportunist                         x2    B      engine                          U
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                       Qty   Color  Role                            Rar
  1  Tragic Slip                                x2    B      interaction                     C
  1  Village Rites                              x2    B      engine                          C
  2  Abrade                                     x1    R      interaction                     U
  2  Infernal Grasp                             x2    B      interaction                     U
```

### OTHER SPELLS (4)

```
CMC  Card                                       Qty   Color  Role                            Rar
  2  Ghoulish Procession                        x2    B      engine                          U
  2  The Meathook Massacre                      x1    B      payoff                          M
  3  Sorin, Imperious Bloodlord                 x1    B      payoff                          M
```

## SIDEBOARD (10)

```
Card                                       Qty   Color  Role / When to board in                    Rar
Eaten Alive                                x2    B      flex — indestructible / recursive threats  C
Lightning Axe                              x1    R      hate — single_large_threat                 U
Abrade                                     x1    R      hate — artifacts                           U
Collective Brutality                       x1    B      flex — stack / combo                       R
Gluttonous Guest                           x2    B      flex — faster aggro                        C
Invasion of Innistrad // Deluge of the Dea x1    B      hate — graveyard                           R
Sever the Bloodline                        x2    B      hate — wide_boards / recursion             U
```

## ANALYSIS

### DECK IDENTITY

A black-heavy Vampire aristocrats deck that wins without ever needing a clean attack step. Thirteen nontoken creatures feed eight sacrifice outlets, and every death is converted into life loss by Blood Artist x2 ('Whenever this creature or another creature dies, target player loses 1 life and you gain 1 life') and The Meathook Massacre ('Whenever a creature you control dies, each opponent loses 1 life'). Falkenrath Torturer x2 is the load-bearing piece: 'Sacrifice a creature:' with no mana cost and no per-turn cap is the only free unlimited outlet in the 305-card pool, so the deck chooses when its creatures die. Ghoulish Procession x2 converts each death back into a decayed Zombie whose own 'sacrifice it at end of combat' is another death, and Village Rites x2 plus Morbid Opportunist x2 keep the hand full while the loop runs. Voldaren Bloodcaster turns every nontoken death into Blood — a resource this build, unlike the madness build, genuinely reaches five of.

### THE ONE CARD THIS DECK IS BUILT AROUND

Not a payoff — an outlet. **Falkenrath Torturer**: *"Sacrifice a creature: This creature gains flying until end of turn."* No mana in the cost, no once-per-turn cap, no limit. Every sacrifice effect in black or red in this 305-card pool was checked against that standard, and it is the only one that meets it:

| Outlet | Cost | Cap |
|---|---|---|
| **Falkenrath Torturer** | free | **none** |
| Indulgent Aristocrat | `{2}` per activation | none |
| Village Rites | one-shot spell | once per copy |
| Bloodtithe Harvester | sacrifices only itself | once per copy |
| Sorin `+1` | free | once per turn, Vampire only |
| Ecstatic Awakener | `{2}{B}` | once per turn |

Everything else in the deck is downstream of that. Blood Artist and The Meathook Massacre are inert cards on their own; what makes them a win condition is that the deck **chooses when its creatures die**, at instant speed, for zero mana, as many times per turn as it has bodies.

### WHY THE ENGINE BLOCK IS 50% AND WHY THAT IS NOT A MISTAKE

The midrange slot table says Engine is `0% (absorbed)` — the assumption being that a midrange threat generates its own value, so you never need a separate engine budget. That assumption fails here, and it fails specifically:

- Blood Artist alone generates nothing. It needs deaths.
- Falkenrath Torturer alone generates nothing. It needs a payoff.
- Ghoulish Procession alone generates nothing. It needs both.

Outlet, fodder, card flow and payoff are four distinct jobs, and no single card does two of them well enough to collapse the categories. Folding the Engine block back into Threats — the absorb convention — would report **79.2% Threats**, which is a number that tells you nothing. The 20.8 / 29.2 / 50.0 split is the honest disclosure.

### THE MEATHOOK MASSACRE IS A FINISHER, NOT A STABILISER

This is the single most important play-pattern note in the deck, and it took two rounds of recounting to get right. Machine-verified against the final list by toughness:

**An X=1 Meathook Massacre kills 9 of this deck's 13 creature copies** — Blood Artist ×2 (0/1), Indulgent Aristocrat ×2 (1/1), Butcher Ghoul (1/1), Blood Petal Celebrant (2/1), Voldaren Bloodcaster (2/1) and Falkenrath Torturer ×2 (2/1). That set contains the locked payoff *and both copies of the only free outlet*.

So the card has two modes and they are not interchangeable:

- **X = 0** — a pure drain enchantment. It kills nothing, and *"Whenever a creature you control dies, each opponent loses 1 life"* doubles every sacrifice for the rest of the game. This is the normal cast.
- **X = 1+** — a finisher. With both Blood Artists out, an X=1 cast that kills nine of your own creatures deals **9 × 3 = 27**. It also dismantles your engine, so you cast it to win, not to stabilise.

Note the same card was **cut** from the madness build (P3) for the mirror-image reason: there, those deaths were pure loss.

### THE COLOUR SKEW IS REAL — SAY IT PLAINLY

**23 black pips, 4 red pips (85.2% / 14.8%).** Red is a splash living inside a Phase 3-locked BR identity, and it is fair to ask why it is here at all. Three of the four red copies are load-bearing with no mono-black equivalent in the pool:

- **Bloodtithe Harvester ×2** — a 3/2 Vampire body, a Blood token toward the payoff's flip gate, and scaling removal, on one card.
- **Abrade ×1** — the deck's only artifact answer, against a cube 8.7% dense in artifacts, 22 of which are colourless and playable by any opponent.

If you iterate on this deck, the honest question is not "should the red stay" but "is Abrade worth a Mountain" — because cutting those two names is the whole conversion to mono-black.

### THE PAYOFF'S FLIP GATE IS ACTUALLY REACHABLE HERE

`Voldaren Bloodcaster` transforms at five Blood tokens. In the madness build (P3) that was declared unreachable and the card was cut. Here it is a normal turn-5 board, because the trigger reads *"Whenever this creature or another **nontoken** creature you control dies"* — and all 13 creature copies are nontoken, with a free unlimited outlet to kill them on demand. Bloodtithe Harvester ×2 add Blood on ETB and Blood Petal Celebrant adds one on death. The back face, `Bloodbat Summoner`, then animates a Blood token into a 2/2 flying hasty Bat each combat: the engine's own exhaust becomes an evasive clock.

### WHAT THIS DECK CANNOT DO

- **No counterspells.** Verified against all 305 pool cards: the only `counter target` effects are Mausoleum Wanderer, Overcharged Amalgam, Syncopate and Geistlight Snare — all mono-blue. Collective Brutality strips the spell from hand instead.
- **No mainboard graveyard answer**, against the cube's largest threat class (75 cards, 27.1%). Invasion of Innistrad is boarded in; it stays in the ten because it is blank against the 72.9% of the cube that is not a graveyard deck.
- **It loses races it does not interact in.** The `raced` failure mode is *accepted*, not mitigated — see the table below for what mitigating would have cost.


### COUNT-DEPENDENT VERDICTS

Every card whose value is a function of how many others qualify, decided against **this** list.

| Card | Verdict | Count |
|---|---|---|
| Blood Artist | INCLUDE x2 | 'Whenever this creature or ANOTHER creature dies' — unconditional, and it reads the opponent's creatures too, so the 5 interaction copies also feed it. This list supplies 13 nontoken creature copies plus Ghoulish Procession x2 recurring decayed Zombies and Butcher Ghoul's undying second life, against 8 sacrifice-outlet copies across 5 names (Falkenrath Torturer x2 free and uncapped, Indulgent Aristocrat x2 at {2}, Village Rites x2 one-shot, Bloodtithe Harvester x2 self-sacrificing, Sorin's +1). Deaths are self-controlled, so the drain rate is a choice. |
| The Meathook Massacre | INCLUDE x1 | CORRECTED TWICE. The pre-grill count said 7 of 15 and the first repair said 8 of 13; both undercounted. Machine-recounted from toughness against the final mainboard: an X=1 ETB kills 9 of 13 creature copies — Blood Artist x2 (0/1), Indulgent Aristocrat x2 (1/1), Butcher Ghoul x1 (1/1), Blood Petal Celebrant x1 (2/1), Voldaren Bloodcaster x1 (2/1) and Falkenrath Torturer x2 (2/1). That set includes the locked payoff AND both copies of the only free unlimited outlet, so the play pattern is the important half of this verdict: cast it for X=0 as a pure drain enchantment ('Whenever a creature you control dies, each opponent loses 1 life') and hold X=1+ for a turn when the board is already being converted, or when the opponent's X/1s outnumber yours. With both Blood Artists out, an X=1 cast that kills 9 of your own creatures is 9 x 3 = 27 damage — but it costs the engine, so it is a finisher, not a stabiliser. |
| Sorin, Imperious Bloodlord | INCLUDE x1 | CORRECTED TWICE. The pre-grill derivation said '7 Vampire creature cards', a number nothing reproduced; the first repair said 9 of 13, which dropped Voldaren Bloodcaster. Machine-recounted from type_line against the final mainboard: Vampires are 10 of 13 creature copies (76.9%) across 6 names — Blood Artist x2, Indulgent Aristocrat x2, Blood Petal Celebrant x1, Voldaren Bloodcaster // Bloodbat Summoner x1 ('Creature — Vampire Wizard'), Falkenrath Torturer x2, Bloodtithe Harvester x2. Both of Sorin's Vampire clauses therefore have a legal target on almost any board: '+1: You may sacrifice a Vampire ... deals 3 damage to any target and you gain 3 life' is outlet, drain payoff and reach on one card, and '-3: You may put a Vampire creature card from your hand onto the battlefield' hits 10 of 24 nonland cards. |
| Voldaren Bloodcaster // Bloodbat Summoner | INCLUDE x1 | The flip gate is five Blood tokens and this list genuinely reaches it: 'Whenever this creature or another NONTOKEN creature you control dies, create a Blood token' fires off 13 nontoken creature copies, and Falkenrath Torturer x2 provides free unlimited sacrifices to trigger it at will. Bloodtithe Harvester x2 add Blood on ETB and Blood Petal Celebrant adds one on death. Five Blood in a deck that sacrifices on demand is a normal turn-5 board. |
| Indulgent Aristocrat | INCLUDE x2 | Its counter payout reads a Vampire count (9 of 13 creature copies) but that is the smaller half of its value. It was added to repair a Phase 6b assembly FAILURE: with only Falkenrath Torturer x2 as a real outlet the enabler role sat at p=0.74 against a 0.75 threshold. Declared at weight 0.7 for the {2}-per-activation tax the shape judge identified. |
| Ghoulish Procession | INCLUDE x2 (raised from x1 post-grill) | CORRECTED after the grill. 'Whenever one or more NONTOKEN creatures die, create a 2/2 black Zombie creature token with decayed. This ability triggers only once each turn.' All 13 creature copies are nontoken, so the trigger is live on any death. Raised to 2 because the pre-grill list rested its entire per-turn fodder refill on a single copy (1 of 23 nonland = 4.3%) while mis-stating Butcher Ghoul's undying as a per-turn source — 'if it had no +1/+1 counters on it' returns each copy exactly once for the whole game, not once per turn. Decayed ('can't block. When it attacks, sacrifice it at end of combat') is a drawback everywhere else and a free death trigger here. |
| Village Rites | INCLUDE x2 (added post-grill) | A pipeline include_candidate that the pre-grill build dropped with no recorded verdict — the exact 5A failure the sweep exists to prevent. 'As an additional cost to cast this spell, sacrifice a creature. Draw two cards.' One mana buys an outlet, a death trigger and two cards simultaneously; 13 nontoken creature copies feed the cost, and with Blood Artist x2 plus The Meathook Massacre on board each cast is 3 life loss AND 2 cards. It is the primary repair to the gas-out failure mode. |
| Morbid Opportunist | INCLUDE x2 (raised from x1 post-grill) | 'Whenever one or more OTHER creatures die, draw a card. This ability triggers only once each turn.' Raised to 2 because the gas-out mitigation previously rested on one copy (4.3% of nonland cards) while miscounting Blood tokens as card advantage — '{1}, {T}, Discard a card, Sacrifice this token: Draw a card' is a rummage at net minus one permanent, not a stored draw. True card draw in the final list is 4 of 24 nonland cards (16.7%): Village Rites x2 and Morbid Opportunist x2. |
| Blood Petal Celebrant | INCLUDE x1 (added post-grill) | Added when the recomputed land target moved from 17 to 16 and freed a nonland slot. 'When this creature dies, create a Blood token' produces Blood on precisely the event this engine manufactures, where the deck's other Blood sources (Bloodtithe Harvester x2) produce it on ETB only. It is also a Vampire, so it counts for Sorin's +1 and Indulgent Aristocrat, taking Vampire density to 9 of 13 creature copies. |
| Voldaren Epicure | CUT (post-grill) | Cut on two independent findings that agreed. Its oracle — 'When this creature enters, it deals 1 damage to each opponent. Create a Blood token' — neither causes a death nor replaces a body, so its 'engine' role label was unsupported; and it was the only one of the deck's four red cards whose function black duplicates, at a time when red production was 6 sources for 4 pips. |
| Morkrut Banshee | CUT (post-grill) | A 5-mana 4/4 Spirit. Cut for the same reason recorded against Captivating Vampire: a body that wins through combat is the wrong axis for a deck whose four payoffs are all life-loss triggers. Being a Spirit it is also invisible to Sorin's -3, Sorin's sacrifice +1 and Indulgent Aristocrat's counters — 0 of the three Vampire-reading cards see it. |
| Demonic Taskmaster | CUT (post-grill) | 'At the beginning of your upkeep, sacrifice a creature other than this creature' is a mandatory, non-optional tax of one body per turn. The pre-grill list justified it against a fodder refill of 'roughly one body per turn' that the grill showed was overstated — Butcher Ghoul's undying is once per copy ever, not per turn. A forced sacrifice that cannot be held for the turn a payoff lands is the wrong kind of outlet for a deck whose whole edge is choosing WHEN creatures die. |
| Gravecrawler | CUT | 'You may cast this card from your graveyard as long as you control a Zombie.' Nontoken Zombies in the final list: Butcher Ghoul x1 — 1 of 13 creature copies (7.7%). Ghoulish Procession's tokens are Zombies but arrive only after a death, so the recursion clause is off in the early turns when repeatable fodder matters most. It also costs a rare against a fully committed budget. |
| Skirsdag High Priest | CUT | '{T}, Tap two untapped creatures you control: Create a 5/5 black Demon' costs three untapped bodies per activation — the same bodies Indulgent Aristocrat x2, Village Rites x2 and Falkenrath Torturer x2 want to sacrifice. In a 13-creature deck that is the most contested resource in the list, and it consumes a rare slot. |
| Siege Zombie | CUT | 'Tap three untapped creatures you control: Each opponent loses 1 life' competes for the same three bodies as eight sacrifice-outlet copies, and pays 1 damage where sacrificing one of those bodies to Falkenrath Torturer with both Blood Artists and Meathook out pays 3. |
| Archghoul of Thraben | CUT | Both its trigger and its payout read Zombie: 'Whenever this creature or another ZOMBIE you control dies ... If it's a ZOMBIE card'. Nontoken Zombies here are 1 of 13 creature copies, and the library-top check would hit 1 of 24 nonland cards. |
| Restless Bloodseeker // Bloodsoaked Reveler | CUT | Unlike the madness build the lifegain condition IS met here — Blood Artist x2, Indulgent Aristocrat x2 (lifelink), Sorin's +1 and The Meathook Massacre all gain life, so 6 of 24 nonland cards switch it on. Cut on opportunity cost, not the count: it occupies the same 2-mana slot as cards the assembly gate required, and produces one Blood per turn where Bloodcaster produces one per death. |
| Bloodline Keeper // Lord of Lineage | CUT | '{T}: Create a 2/2 black Vampire creature token' is a genuine fodder factory and the five-Vampire flip gate is reachable at 9 of 13 creature copies. Cut on rate and budget: Ghoulish Procession makes a body per turn for 2 mana where this costs 4, and the rare budget is committed to three drain payoffs plus Invasion of Innistrad and Collective Brutality. |
| Captivating Vampire | CUT | Anthem over 9 of 13 creature copies. Cut because it is not an outlet: a +1/+1 anthem advances combat, and no card among the 24 nonland cards wins through combat damage. CLARIFIED after the grill, which correctly noted the axis argument was applied inconsistently — Indulgent Aristocrat shares the same anthem text and the same Vampire count, and is kept solely because it is ALSO a repeatable sacrifice outlet. The anthem is not why it is in the deck. |
| Olivia Voldaren | CUT | '{1}{R}: ... deals 1 damage to another target creature' would kill this deck's own X/1 fodder for value, but at 4 mana with {2}{B}{R} on 5 red sources, and '{3}{B}{B}' for the steal mode, it is the most mana-hungry card considered. Mythic against a committed budget. |
| Metallic Mimic | CUT | +1/+1 counters on entering Vampires or Zombies (9 or 1 of 13 creature copies). Counters make bodies harder to kill, the opposite of what a deck that sacrifices its own creatures wants — and Butcher Ghoul's undying explicitly checks 'if it had no +1/+1 counters on it', so Mimic naming Zombie would switch the undying recursion off entirely. |
| Galvanic Juggernaut | CUT | 'Whenever another creature dies, untap this creature' is genuinely live — this list produces a death on most turns from turn 3. Cut because 'This creature attacks each combat if able' forces it into combat in a deck whose payoffs never require an attack, and as a colourless artifact it contributes nothing to the Vampire count 3 other cards read. |
| Killing Wave | CUT | 'For each creature, its controller sacrifices it unless they pay X life.' Asymmetric in this deck's favour on paper. Cut on the life total: the list already pays 4 life to Infernal Grasp x2, and an X large enough to break a developed board is an X the opponent can often pay and this deck cannot. |
| Desperate Farmer // Depraved Harvester | CUT | 'When another creature you control dies, transform this creature' is live on any of 13 creature deaths, but the payoff is a 3-mana body with lifelink on both faces — a defensive rate in the slot where Falkenrath Torturer costs the same and is the free unlimited outlet the whole plan depends on. |
| Invasion of Innistrad // Deluge of the Dead | SIDEBOARD x1 (added post-grill) | A pipeline include_candidate the pre-grill build dropped with no verdict, against the cube's LARGEST threat class: dossier.threat_profile records 75 graveyard-interaction cards at 27.1% density, and coverage.graveyard was conceded outright. Its back face '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token' is the only repeatable graveyard exile available to black or red in this pool, and it manufactures fodder while doing it. Sideboarded rather than maindecked because it is blank against the 73% of the cube that is not a graveyard deck. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:6  2:13  3:5
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.2: Sorin, Imperious Bloodlord@0.7, Voldaren Bloodcaster // Bloodbat Summoner@0.5) → p=0.76 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 5.7: Indulgent Aristocrat@0.7, Indulgent Aristocrat@0.7, Village Rites@0.5, Village Rites@0.5, Bloodtithe Harvester@0.4, Bloodtithe Harvester@0.4, Sorin, Imperious Bloodlord@0.5) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 75%  T2 98%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  OK        noncreature_permanents: Abrade
  CONCEDED  stack: Black and red hold no counterspells anywhere in this pool. The deck's proxy is Collective Brutality in the sideboard ('You choose an instant or sorcery card from it. That player discards that card'), which strips a spell from hand rather than answering it on the stack.
  CONCEDED  graveyard: No MAINBOARD graveyard answer exists in these colours — verified against oracle text, every graveyard-touching BR card in this pool is self-serving. The class is answered from the sideboard: Invasion of Innistrad // Deluge of the Dead, whose back face reads '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token', is the only repeatable graveyard exile available to black or red in this cube, and Sever the Bloodline x2 exiles recursive creatures off the battlefield. Maindecking Invasion of Innistrad would spend a rare slot on a card that is blank against the 73% of the cube that is not a graveyard deck.
```

- curve PASS (midrange 1:6 2:13 3:5) — no flags raised. The list has no card above 3 MV after the grill removed Morkrut Banshee (5) and Demonic Taskmaster (3).
- goldfish PASS (keepable 84%, 3 lands by T3 84%, play by T1 75% / T2 98% / T3 99%) — no flags raised.
- Engine & Infrastructure at 50.0% against a midrange band of 0% (absorbed) is the load-bearing deviation, credited by both the shape judge and the Challenger: the absorb rule presumes a midrange threat generates its own value, which fails here because outlet, fodder, card flow and payoff are four separate jobs and none functions alone.
- Threats/Payoffs at 29.2% sits 0.8pp below the 30-40% floor. This is a labelling consequence of the Engine carve-out, not a shortage of ways to win: under the absorb convention the same 24 cards read 79.2% Threats.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess mana has three sinks that all advance the kill. Indulgent Aristocrat x2 reads '{2}, Sacrifice a creature' with no cap, so every spare two mana is a death worth 1 damage per Blood Artist plus 1 from The Meathook Massacre. The Meathook Massacre is itself an {X}{B}{B} sink whose X scales with surplus lands. Blood tokens convert a spare mana into a rummage. Caveat stated: the Aristocrat sink needs a body on board, not just mana, which is why Ghoulish Procession x2 sits in the engine block. |
| screw | mitigation | Six 1-drops and thirteen 2-drops make two-land hands functional — the goldfish sim reports 98% play-by-turn-2 and 84% keepable. Only two of sixteen lands enter tapped, and Haunted Ridge (which enters tapped on turns 1 and 2) was cut during grill resolution. At 85.2% black pip demand a hand of two Swamps casts almost the whole deck; Bloodtithe Harvester's {B}{R} is the only card needing both colours. |
| decapitation | mitigation | There is no single key card. The drain payoff is 4 cards across 3 names (Blood Artist x2, The Meathook Massacre, Sorin) and the outlet is 8 copies across 5 names; removing any one leaves the loop intact. The Meathook Massacre and Ghoulish Procession x2 are enchantments, and the cube holds only 2 enchantment answers in 277 cards, both white — the hardest pieces to replace are also the hardest to remove. |
| gas-out | mitigation | REBUILT after the grill marked this UNSATISFIED. The pre-grill answer was one Morbid Opportunist (4.3% of nonland cards) plus a miscount of Blood tokens as stored draws — '{1}, {T}, Discard a card, Sacrifice this token: Draw a card' is a rummage at net minus one permanent, not card advantage. The final list holds 4 true card-draw cards of 24 nonland (16.7%): Village Rites x2 ('sacrifice a creature. Draw two cards' — two cards for one mana, and the sacrifice is itself a drain trigger) and Morbid Opportunist x2 ('Whenever one or more other creatures die, draw a card', live on nearly every turn from turn 3 given a free uncapped outlet). Ghoulish Procession x2 separately guarantees the outlets never idle for lack of a body. |
| raced | accepted | The deck is a turn-6 engine whose only mainboard lifegain is Blood Artist's 1-per-death and Indulgent Aristocrat's lifelink. Mitigating would mean maindecking defensive bodies such as Gluttonous Guest (a 1/4 wall) in place of outlets or payoffs, and the enabler role already required a repair to clear the p=0.75 assembly gate — spending engine slots on walls would push it back under. The concession is that fast aggro is a sideboard matchup: Gluttonous Guest x2 and Lightning Axe x1 come in, and The Meathook Massacre's ETB doubles as a one-sided sweeper against an opposing board of X/1s. |
| disruption-fizzle | mitigation | There is no critical turn to interact with; the plan is a per-turn loop and one removal spell costs one sacrifice-worth of damage. Falkenrath Torturer's 'Sacrifice a creature:' is a free ACTIVATED ability, so it cannot be countered and can be activated in response to removal — a creature targeted by a kill spell is sacrificed for full drain value instead of being lost. Verified across all 305 pool cards: the only 'counter target' effects are Mausoleum Wanderer, Overcharged Amalgam, Syncopate and Geistlight Snare, all mono-blue, so blue is the only stack interaction to play around. (Corrected from the pre-grill claim that EVERY outlet is activated — Demonic Taskmaster's was a mandatory triggered ability, and it has since been cut.) |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Garruk Relentless // Garruk, the Veil-Cursed | G splash candidate. Its back face '-1: Sacrifice a creature. If you do, search your library for a creature card' is genuinely on-thesis, but reaching it costs {3}{G} plus taking loyalty damage, and the pool has no BG dual that also fixes BR — Geothermal Bog and Haunted Ridge are both BR only, so a green splash would have to be run off basics in a two-colour manabase. |
| Mayor of Avabruck // Howlpack Alpha | G splash candidate whose text reads tribal counts this deck does not have: 'Other HUMAN creatures you control get +1/+1' and the back face pumps 'Werewolf or Wolf'. This list's bodies are Vampires and Zombies. |
| Ulvenwald Mysteries | G splash candidate and the closest miss of the three: 'Whenever a nontoken creature you control dies, investigate' is exactly this deck's trigger. Cut on mana only — {2}{G} in a BR manabase with no green source that also produces B or R. |
| Falkenrath Gorger | Granting madness to Vampire cards at a cost 'equal to its mana cost' is card retention for a madness deck; this build's engine is creature deaths, not discards, and it holds only three madness cards. Its rare slot buys more on a drain payoff. |
| Stensia Masquerade | 'Whenever a Vampire you control deals combat damage to a player, put a +1/+1 counter on it' reads combat damage, but this deck's win condition is life loss from death triggers that never enters combat. It is the payoff of a different build (P3). |
| Bloodmad Vampire | A 4/1 whose counter accrues only on connecting in combat — the wrong axis for a deck that converts creatures into drain rather than attacking with them. |
| Stromkirk Occultist | Its card flow ('exile the top card of your library') is gated on dealing combat damage to a player; this deck's card flow comes from Morbid Opportunist and Village Rites, which fire without attacking. |
| Furyblade Vampire | 'discard a card. If you do, this creature gets +3/+0' is a combat-damage payoff on a deck that wins without combat, and its discard outlet is redundant with Olivia's Dragoon. |
| Tree of Perdition | '{T}: Exchange target opponent's life total with this creature's toughness' would set an opponent to 13 in one activation, which is a genuine alternate win axis — but it is a mythic, a Defender that cannot pressure, and it must survive a turn to activate. The rare budget is spent on drain payoffs that work the turn they land. |
| Triskaidekaphobia | 'Each player with exactly 13 life loses the game' is a real alternate kill and this deck can move a life total 1 at a time via Blood Artist and Siege Zombie. Cut because it is symmetric on a deck that also loses life to Infernal Grasp and Asylum Visitor, and because hitting exactly 13 requires the opponent not to gain or lose life on their own turn. |
| Emrakul, the Promised End | {13}. Uncastable at 17 lands. |
| Griselbrand | {4}{B}{B}{B}{B} — eight mana with four black pips against a two-colour manabase that also needs red on turn two. |
| Chandra, Dressed to Kill | A 3-mana mythic whose value is impulse card advantage off red spells; this deck's card advantage comes from creature deaths (Morbid Opportunist, Village Rites, Ecstatic Awakener), and it adds no body to sacrifice. |
| Soul Separator | '{5}, {T}, Sacrifice this artifact: Exile target creature card from your graveyard. Create a token that's a copy ... it's 1/1 ... Create a black Zombie creature token with power equal to that card's power' would be two fodder bodies, but at {3} to cast plus {5} to activate it is eight mana total — three turns past this deck's thesis turn. |
| Edgar Markov | Outside the seed's colour gate (BRW vs. core BR). In a 40-card deck there is no command zone, so its Eminence token-maker requires a 6-mana {3}{R}{W}{B} hardcast with no BRW land in the pool. Built as its own deck (P4). |

Seed candidates that reached the sketchers but did not make the final list:

| Card | Verdict | Reason |
|---|---|---|
| Sanitarium Skeleton | CUT | '{2}{B}: Return this card from your graveyard to your hand' is inexhaustible fodder at mana rather than cards, and a genuine flood sink. Cut because at 3 mana per body it is the slowest fodder in the list, where Ghoulish Procession x2 makes one free per turn. |
| Ecstatic Awakener // Awoken Demon | CUT | '{2}{B}, Sacrifice another creature: Draw a card, then transform this creature. Activate only once each turn' is a repeatable outlet that draws, but at {2}{B} per activation and capped once per turn it is strictly worse than Village Rites x2 at {B} for two cards, which the grill added instead. |
| Haunted Dead | CUT | '{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield tapped' is repeatable fodder, but discarding two cards per return is unaffordable in a deck whose total draw is 4 of 24 nonland cards. |
| Eaten Alive | SIDEBOARD x2 | Its additional cost is paid as a drain trigger rather than a cost, but 5 mainboard interaction slots are already at the band floor; it boards in against threats destruction does not answer. |
| Sever the Bloodline | SIDEBOARD x2 | A 4-mana sorcery is too slow for a mainboard interaction slot, but it is the only card in the pool that answers a whole token board with one targeted spell and it exiles. |
| Edgar's Awakening | CUT | 'Return target creature card from your graveyard to the battlefield' at {3}{B}{B} reanimates a deck whose largest creature is a 3/2 — there is nothing worth 5 mana to bring back. |
| Morkrut Banshee | CUT | See count-dependent verdicts: a 5-mana Spirit on the combat axis, invisible to all three Vampire-reading cards. |
| Harvest Hand // Scrounged Scythe | CUT | 'When this creature dies, return it to the battlefield transformed' makes it fodder that survives its own sacrifice, but it returns as an Equipment, not a creature — so it is one extra death, not a repeatable body. |
| Collective Defiance | CUT | Removal plus reach, but {1}{R}{R} on 5 red sources in a deck at 85.2% black pip demand is close to uncastable, and it is a rare against a fully committed budget. |
| Fiery Temper | CUT | Madness {R} is dead here — the final mainboard contains zero discard outlets — so it is a {1}{R}{R} sorcery-rate burn spell on 5 red sources. |
| Bloodhall Priest | CUT | Its trigger reads 'if you have no cards in hand', but this deck's Village Rites x2 and Morbid Opportunist x2 exist specifically to keep the hand full — the two plans work against each other. |
| Savage Alliance | CUT from sideboard (post-grill) | Its sweep mode is 'deals 1 damage to each creature target opponent controls', which does not kill the cube's 2/2 Spirit, Zombie or Human tokens its own board-in note targeted. wide_boards is already covered mainboard by The Meathook Massacre, and boarding 2 more red cards off 5 red sources was an unpriced cost. |
| Asylum Visitor | CUT | 'if that player has no cards in hand, you draw a card' rewards an empty hand, which this build's card-flow package is designed to prevent. |
| Gluttonous Guest | SIDEBOARD x2 | A 1/4 wall is the wrong maindeck rate for a deck that needs its creatures to die profitably, but it is the named answer to the accepted 'raced' failure mode. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.96   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.05 adj [MV 1.96 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  85.2%  prod  81.2%  gap  +4.0pp  [OK]
  R  demand  14.8%  prod  31.2%  gap -16.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool rules: commons/uncommons up to 2 copies; rares/mythics 1 copy.
Extra build constraint: at most 5 rare-or-mythic CARDS across mainboard + sideboard.
Basic lands: format-supplied, unlimited.

  [PASS] Mainboard = 40 (required 40)
  [PASS] Sideboard = 10 (required 10)
  [PASS] Every card exists in the cube mainboard by exact name
  [PASS] Copy limits obeyed (verified via cube_search.get_max_copies with a per_rarity policy)
  [PASS] Rare/mythic cards used: 5 of 5 -> The Meathook Massacre, Sorin, Imperious Bloodlord, Voldaren Bloodcaster // Bloodbat Summoner, Invasion of Innistrad // Deluge of the Dead, Collective Brutality
  [PASS] Every nonland card usable in B/R (effective_cost.best_mode)
  [PASS] Splash cap: 0 splash colour(s), 0 splash cards used

```
