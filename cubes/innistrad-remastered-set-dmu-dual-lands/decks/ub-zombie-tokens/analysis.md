---
deck_name: "ub-zombie-tokens"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UB"
format: "40-card"
built_at: "2026-08-26T04:02:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  x3 Island          only untapped blue on turn 2
  x10 Swamp
  x2 Contaminated Aquifer          UB dual, enters tapped
  x1 Shipwreck Marsh          UB dual, untapped from turn 3
```

### CREATURES (14)
```
CMC  Card                  Qty   Color  Role                      Rar
  1  Gravecrawler          x1    B      Recursive Zombie          R
  2  Bladestitched Skaab   x2    UB     Zombie anthem             U
  2  Blood Artist          x2    B      Death-to-damage reach     U
  2  Butcher Ghoul         x2    B      Undying Zombie            C
  2  Siege Zombie          x2    B      Non-combat drain          C
  2  Skirsdag High Priest  x1    B      5/5 flier factory         R
  3  Archghoul of Thraben  x1    B      Zombie card filter        U
  3  Stitched Mangler      x2    U      Zombie + blocker tap      C
  4  Haunted Dead          x1    B      Recurring Zombie + flier  U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card            Qty   Color  Role                   Rar
  1  Tragic Slip     x2    B      Removal (morbid)       C
  1  Village Rites   x2    B      Sac outlet + draw two  C
  4  Gisa's Bidding  x2    B      Two Zombie tokens      C
```

### OTHER SPELLS (4)
```
CMC  Card                                         Qty   Color  Role                    Rar
  2  Ghoulish Procession                          x2    B      Token engine            U
  4  Invasion of Innistrad // Deluge of the Dead  x1    C      Removal + token faucet  R
  4  Necroduality                                 x1    U      Zombie doubler          M
```

## SIDEBOARD (10)
```
Card                   Qty   Color  Role / When to board in                                                                                                                                                                                             Rar
Eaten Alive            x2    B      vs planeswalkers and recursive threats -- 'Exile target creature or planeswalker'; its 'sacrifice a creature' cost is a second sacrifice outlet, paid by a decayed token that would die at end of combat anyway     C
Silent Departure       x2    U      vs a single large blocker -- 'Return target creature to its owner's hand' plus Flashback {4}{U} clears the wall twice from one slot                                                                                 C
Compelling Deterrence  x2    U      vs a resolved artifact or enchantment -- the only answer in U/B in this pool to a noncreature permanent; the 'discards a card if you control a Zombie' rider is on nearly every turn here                           U
Infernal Grasp         x2    B      vs a single large blocker that walls the ground -- 'Destroy target creature. You lose 2 life' with no condition attached                                                                                            U
Sever the Bloodline    x2    B      vs rival token/go-wide boards -- 'Exile target creature and all other creatures with the same name as that creature' answers a whole token army with one card, and exile beats this cube's 27.1% graveyard density  U
```

## ANALYSIS

### DECK IDENTITY

UB Zombie Tokens. Eleven nontoken Zombie cards of 24 nonland slots feed Necroduality's 'Whenever a nontoken Zombie you control enters, create a token that's a copy of that creature', while Gisa's Bidding x2, Deluge of the Dead, and Ghoulish Procession x2 add 2/2 Zombie tokens directly. Bladestitched Skaab x2 turns that width into damage at 'Other Zombies you control get +1/+0'. Because the ground stalls against a cube with 20.9% evasion density, the deck goes over the top rather than through: Skirsdag High Priest converts spare bodies into a 5/5 flying Demon every turn, Haunted Dead brings a flying Spirit, and Stitched Mangler x2 taps the blocker out of two consecutive combats. Village Rites x2 is the sacrifice outlet that makes Ghoulish Procession self-supplied and the deck's only unconditional card draw.

This is the same cube, the same colours and the same tribe as the aristocrats build, and it ends up a different deck for one structural reason worth stating precisely.

**A go-wide Zombie deck in this pool has an evasion problem, not a width problem.** Before repair, all 14 creature cards in this list had zero flying, menace or trample between them, against a cube whose own evasion density is 58 of 277 nonland cards (20.9%). Width is easy here -- four separate cards make 2/2 Zombie tokens -- but width that cannot cross the ground is not a clock. The fix is that the deck's last three points of damage now come from somewhere other than the ground: Skirsdag High Priest's `Create a 5/5 black Demon creature token with flying`, Haunted Dead's `create a 1/1 white Spirit creature token with flying`, Stitched Mangler x2's `tap target creature an opponent controls. That creature doesn't untap during its controller's next untap step`, and Siege Zombie x2's `Tap three untapped creatures you control: Each opponent loses 1 life`, which needs no attack step at all.

**Siege Zombie is a tiebreaker, not a closer, and the honest arithmetic says so.** Each activation costs three untapped bodies and deals exactly 1. At a realistic wide board of six to eight untapped creatures that is 2 damage per turn. It converts a stalled board into inevitability; it does not race.

**Necroduality's denominator is the number that decides whether this build is real.**

| Nontoken Zombie card | Copies | Re-enters for free? |
|---|---|---|
| Gravecrawler | 1 | Yes -- casts from the graveyard for {B} |
| Butcher Ghoul | 2 | Yes -- undying, once each |
| Siege Zombie | 2 | No |
| Stitched Mangler | 2 | No |
| Bladestitched Skaab | 2 | No |
| Archghoul of Thraben | 1 | No |
| Haunted Dead | 1 | Yes -- returns for {1}{B} + discard two |

That is **11 of 24 nonland cards (45.8%)**, four of which re-enter without spending a new card. Every token any card in this deck makes is a `2/2 black Zombie creature token`, so Bladestitched Skaab's anthem covers 100% of the board minus itself -- there is no dead anthem coverage anywhere in the list.

**Village Rites is the card that made the engine legal rather than aspirational.** Ghoulish Procession reads `Whenever one or more nontoken creatures die` -- with zero sacrifice outlets, that trigger depends entirely on the opponent choosing to trade. Sacrificing a Gravecrawler that returns for {B} is a free nontoken death every turn, which turns Ghoulish Procession on unilaterally, switches on Tragic Slip's morbid at instant speed during the opponent's turn, triggers Blood Artist x2 and Archghoul, and draws two cards.

**Where this deck loses.** Blue is 5 pips across 24 nonland cards, but only the 3 Islands make untapped blue on turn 2 -- Contaminated Aquifer reads `This land enters tapped` and Shipwreck Marsh needs two other lands first. Bladestitched Skaab at `{U}{B}` is therefore a turn-3 play about half the time, and the two-dual pool cannot fix it.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:5  2:11  3:3  4:5
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 6.8: Necroduality@0.7, Siege Zombie@0.7, Siege Zombie@0.7, Skirsdag High Priest@0.7) → p=0.91 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.6: Invasion of Innistrad // Deluge of the Dead@0.6) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 68%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: This deck answers a wide board by being wider and by going over the top of it rather than through: Skirsdag High Priest's 'Create a 5/5 black Demon creature token with flying' and Haunted Dead's 1/1 flying Spirit both fly, and Siege Zombie x2's 'Tap three untapped creatures you control: Each opponent loses 1 life' needs no attack step at all. A mainboard sweeper was declined at a stated cost -- The Meathook Massacre's 'each creature gets -X/-X' would kill 9 of this deck's 11 nontoken Zombie bodies and every 2/2 token it makes, which is the entire kill mechanism. Sever the Bloodline x2 boards in against rival token decks.
  OK        single_large_threat: Invasion of Innistrad // Deluge of the Dead, Tragic Slip, Stitched Mangler
  CONCEDED  noncreature_permanents: No card in blue or black in this pool destroys an artifact or enchantment (dossier probe: 0 mono-colour matches in B and U), against a cube holding 24 artifacts and 25 enchantments. The mainboard races them; Compelling Deterrence x2 in the sideboard bounces one.
  CONCEDED  stack: Absolute concession -- zero stack interaction in either board. Every U/B counterspell in this pool is blue-pip-gated (Syncopate {X}{U}, Geistlight Snare {2}{U}, Summary Dismissal {2}{U}{U}) and requires blue held untapped, which an aggro deck deploying a threat every turn on 6 blue sources cannot do.
  CONCEDED  graveyard: Deluge of the Dead's '{2}{B}: Exile target card from a graveyard' is the ONLY card in this pool inside U/B/colourless that touches an opponent's graveyard -- and it sits on the back face of a Battle, so it must be defeated first. Against the cube's largest threat class (75 cards, 27.1% graveyard density) this is a pool wall, not a slot choice: there is nothing else to run.
```

- No WARN-tier flags were raised: curve, assembly, goldfish and coverage all returned PASS.
- Slot bands, reported separately rather than merged: Interaction 3 of 24 = 12.5% (inside the aggro 10-15% band); Engine 5 of 24 = 20.8% (over the 0-10% band); Threats/Payoffs 16 of 24 = 66.7% (over the 45-55% band). The Engine overrun is 4 copies of two cards added by the grill to fix hard findings -- Village Rites x2, a one-mana instant that is also the only card draw, and Ghoulish Procession x2, a two-mana permanent producing a body per turn; neither is a slow engine. The Threats overrun is arithmetic: the three aggro rows sum to at most 80% of nonland, so roughly 20% is unallocated by construction and this build puts it in Threats.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Deluge of the Dead's '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token' is an unlimited mana sink that converts surplus lands into the exact resource this deck wins with, and simultaneously attacks a cube with 27.1% graveyard density. Gravecrawler recasts from the graveyard for {B} every turn as a second, unconditional sink, and Haunted Dead returns for {1}{B} plus a discard. |
| screw | mitigation | 16 of 24 nonland cards cost two or less (curve 1:5, 2:11, 3:3, 4:5). Goldfish sim over 1000 hands: 84% keepable, 84% reach three lands by turn 3, 68% have a turn-1 play and 98% a turn-2 play. |
| decapitation | mitigation | Necroduality is an accelerant, not a requirement, and the token stream survives without it: Gisa's Bidding x2 makes two tokens each on cast, and Ghoulish Procession x2 makes one every turn a nontoken creature dies -- now self-supplied, because Village Rites x2 sacrifices a Gravecrawler that recasts itself for {B}. Deluge of the Dead adds two more plus a repeatable faucet, though that half is Battle-gated and is not counted as a peer of the other two. Bladestitched Skaab x2 means the anthem is also not a single point of failure. |
| gas-out | mitigation | Village Rites x2 ('As an additional cost to cast this spell, sacrifice a creature. Draw two cards') is the deck's unconditional card draw, and the creature it sacrifices is a Gravecrawler that comes straight back for {B}. Archghoul of Thraben x1 is a filter rather than a refuel -- 'If it's a Zombie card, you may reveal it and put it into your hand' hits on 11 of 40 cards -- and is recorded as such. Beyond cards, the board refuels itself: Butcher Ghoul's undying returns it free, Haunted Dead returns from the graveyard at will, and Deluge of the Dead makes a token per {2}{B}. |
| raced | accepted | Against the cube's fastest clocks this deck is the aggressor and does not plan to stabilise. Mitigating would mean a sweeper, and the only one available in these colours is The Meathook Massacre, whose 'each creature gets -X/-X' would kill 9 of this deck's 11 nontoken Zombie bodies and every 2/2 token it makes -- deleting the kill mechanism in order to survive. The hedges that do not cost identity are already in: Blood Artist x2 reads 'target player loses 1 life and you gain 1 life' on every death including chump blocks, Tragic Slip x2 answers the biggest attacker for one mana, and Stitched Mangler x2 taps an attacker out of two turns. |
| disruption-fizzle | mitigation | There is no single critical turn. Width accumulates from four distinct token cards -- Gisa's Bidding x2, Ghoulish Procession x2, Deluge of the Dead, plus every Necroduality copy -- so interaction aimed at any one removes a fraction of the board rather than the plan. The closing lines are likewise plural: Bladestitched Skaab x2 for combat, Skirsdag High Priest for the air, Siege Zombie x2 for damage that needs no attack step, and Blood Artist x2 for damage that needs no attack at all. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Throng | 'When this creature dies, you may search your library for a card named Wretched Throng.' At the 2-copy legal maximum the second copy's death finds nothing, so realistic yield is about one extra card -- and it spent 2 of the deck's blue-gated slots on a {1}{U} 2/1. Cut for Stitched Mangler x2, which costs the same colours, is still a nontoken Zombie, and taps a blocker out of two combats. |
| Drunau Corpse Trawler | 'When this creature enters, create a 2/2 black Zombie creature token' is two Zombie bodies in one card, but at {3}{U} for a 1/1 body it was the fourth blue-gated card on a manabase with 6 blue sources of which only 3 enter untapped. Cut for Haunted Dead, which is mono-black and re-enters from the graveyard to re-trigger Necroduality. |
| Collective Brutality | Three modes for two mana and its escalate discard is fed by Gisa's Bidding's madness -- but it costs one of five rare slots, and Skirsdag High Priest's 'Create a 5/5 black Demon creature token with flying' answered the deck's actual losing condition (zero evasion across 14 creature cards) where Brutality did not. |
| Metallic Mimic | Naming Zombie would put a +1/+1 counter on 11 nontoken Zombie cards plus every Zombie token as they enter -- a large numerator. It is cut because 'enters with an additional +1/+1 counter' switches off Butcher Ghoul's undying, which reads 'if it had no +1/+1 counters on it', and because it is a rare against a cap already at 5/5. |
| Rooftop Storm | 'You may pay {0} rather than pay the mana cost for Zombie creature spells you cast' costs {5}{U}. Against a token build the relevant Zombies are tokens, which are created rather than cast, so the discount reads only the 11 nontoken Zombie cards -- and those cost 1 to 4 mana. |
| Bloodline Keeper // Lord of Lineage | '{T}: Create a 2/2 black Vampire creature token with flying' makes tokens every turn, but they are VAMPIRE tokens: they do not trigger Necroduality's 'nontoken Zombie', are not pumped by Bladestitched Skaab's 'Other Zombies', and do not satisfy Gravecrawler's Zombie condition. |
| Gisa and Geralf | 'Once during each of your turns, you may cast a Zombie creature spell from your graveyard' is live on 11 nontoken Zombie cards and each recast re-triggers Necroduality. Cut on mana, not on count: {2}{U}{B} demands a second colour on turn 4 from 6 blue sources of which 3 enter untapped, and it would consume a rare slot. |
| Spontaneous Mutation | 'Enchanted creature gets -X/-0, where X is the number of cards in your graveyard' -- X is realistically 4 to 6 by turn 4-5 here, so it is a one-mana flash -5/-0. Cut on a mechanism: -X/-0 leaves toughness untouched, so the blocker still blocks and still eats a 2/2 attacker. Stitched Mangler's tap removes it from two combats outright. |
| Murderous Compulsion | Sideboard consideration, cut. 'Destroy target tapped creature' is a Sorcery, so it can only be cast in your own main phase -- blocking does not tap a creature and an attacker untaps before your turn arrives. The stated boarding case could not occur. Replaced with Silent Departure x2. |
| Thing in the Ice // Awoken Horror | 'When this creature transforms into Awoken Horror, return all non-Horror creatures to their owners' hands' would bounce this deck's own board and permanently destroy its Zombie tokens, which cease to exist on leaving the battlefield. |
| Cobbled Lancer | A genuine {U} nontoken Zombie -- but its additional cost 'exile a creature card from your graveyard' competes with the two of eleven nontoken Zombies that must stay in the yard: Gravecrawler casts from it and Haunted Dead returns from it. |
| Rise from the Tides | 'Create a tapped 2/2 black Zombie creature token for each instant and sorcery card in your graveyard.' Instants and sorceries in this mainboard: Gisa's Bidding 2, Village Rites 2, Tragic Slip 2 = 6 of 24 nonland cards, and at {5}{U} the tokens arrive tapped. |
| Cobbled Wings | Sideboard consideration, cut. 'Equipped creature has flying. Equip {1}' is the cheapest colourless route to evasion, but flying now arrives on bodies instead -- Skirsdag High Priest's 5/5 Demon and Haunted Dead's Spirit -- rather than costing 2 mana plus a 1-mana equip on a 2/2. |
| Morbid Opportunist | Sideboard consideration. 'Whenever one or more other creatures die, draw a card' is real refuel, but it is a Human Rogue: 0 to Necroduality's denominator, 0 to Bladestitched Skaab's anthem, 0 to Archghoul. Village Rites took the slot at one mana instead of three and doubles as the sacrifice outlet. |
| Falkenrath Torturer | Sideboard consideration. 'Sacrifice a creature: This creature gains flying until end of turn' is a free repeatable outlet where Village Rites is a one-shot -- but it is a Vampire, contributing nothing to the three Zombie-count payoffs, and Skirsdag High Priest covers the evasion half better with a 5/5. |
| Abundant Maw, Distended Mindbender, Elder Deep-Fiend, It of the Horrid Swarm, Decimator of the Provinces, Emrakul, the Promised End, Wretched Gryff, Temporal Mastery, Hullbreaker Horror, Griselbrand | Top end at mana value 7 to 13, including two Emerge cards whose alternative cost is still 7-plus mana after sacrificing a 2/2 token. An aggro deck with a goldfish turn of 6 cannot cast any of them before the game is decided, and none makes a Zombie. |
| Mausoleum Wanderer, Nebelgast Herald, Essence Flux, Battleground Geist, Geistlight Snare, Tower Geist, Mist Raven, Spectral Shepherd, Apothecary Geist, Gather the Townsfolk | Spirit-matters, blue tempo bodies and the white splash candidates: each reads 'Spirit' or makes Human tokens, so none triggers Necroduality's 'nontoken Zombie' clause and none is pumped by Bladestitched Skaab's 'Other Zombies'. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.33   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.56 adj [MV 2.33 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  82.1%  prod  81.2%  gap  +0.9pp  [OK]
  U  demand  17.9%  prod  37.5%  gap -19.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool rules: commons/uncommons max 2 copies, rares/mythics max 1 copy .......... PASS
  (verified against cube_search.get_max_copies for every card; basics exempt)
Extra constraint: at most 5 rare/mythic CARDS across mainboard + sideboard .... PASS (5/5)
  Gravecrawler (R), Necroduality (M), Invasion of Innistrad // Deluge of the
  Dead (R), Skirsdag High Priest (R), Shipwreck Marsh (R)
  Sideboard rares/mythics: 0 -- forced by the cap.
Deck size 40 / sideboard 10 ................................................... PASS
Exact-name membership against the cube mainboard .............................. PASS
Colour usability -- every nonland card returns a usable mode in U/B ........... PASS
Splash cap -- splash resolved to none; the white candidates named by the Phase 3
  filter (Gather the Townsfolk, Spectral Shepherd, Apothecary Geist) were all
  declined: they are Human and Spirit bodies that neither trigger Necroduality's
  'nontoken Zombie' clause nor are pumped by Bladestitched Skaab ............... PASS
Mana audit ................................................................... PASS
Structural gate (curve / assembly / goldfish / coverage) ...................... PASS
```