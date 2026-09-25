---
deck_name: "ub-zombie-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UB"
format: "40-card"
built_at: "2026-08-26T03:34:47Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  x1 Island          blue source for Grimgrin
  x12 Swamp
  x2 Contaminated Aquifer          UB dual, enters tapped
  x1 Shipwreck Marsh          UB dual, untapped from turn 3
```

### CREATURES (14)
```
CMC  Card                   Qty   Color  Role                   Rar
  1  Gravecrawler           x1    B      Recursive fodder       R
  1  Indulgent Aristocrat   x2    B      Sacrifice outlet       U
  2  Blood Artist           x2    B      Death-to-damage        U
  2  Butcher Ghoul          x2    B      Undying fodder         C
  2  Siege Zombie           x2    B      Non-combat drain       C
  3  Falkenrath Torturer    x2    B      Free sac outlet        C
  3  Morbid Opportunist     x2    B      Refuel on deaths       U
  5  Grimgrin, Corpse-Born  x1    UB     Free outlet + removal  M
```

### INSTANTS & SORCERIES (6)
```
CMC  Card            Qty   Color  Role              Rar
  1  Eaten Alive     x2    B      Exile removal     C
  1  Tragic Slip     x2    B      Removal (morbid)  C
  2  Infernal Grasp  x2    B      Removal           U
```

### OTHER SPELLS (4)
```
CMC  Card                                         Qty   Color  Role                    Rar
  2  Ghoulish Procession                          x2    B      Token engine            U
  2  The Meathook Massacre                        x1    B      Drain + sweeper         M
  4  Invasion of Innistrad // Deluge of the Dead  x1    C      Removal + token engine  R
```

## SIDEBOARD (10)
```
Card                   Qty   Color  Role / When to board in                                                                                                                                                                                            Rar
Killing Wave           x1    B      vs boards wider or larger than ours -- symmetry inverts because Gravecrawler recasts from the yard and Butcher Ghoul's undying returns it                                                                          U
Compelling Deterrence  x2    U      vs a resolved artifact or enchantment -- the only answer in U/B to a noncreature permanent (dossier probe: 0 destroy-artifact/enchantment matches in mono-B or mono-U); cube holds 24 artifacts + 25 enchantments  U
Murderous Compulsion   x2    B      vs decks that must tap out to attack -- 'Destroy target tapped creature' at {1}{B}                                                                                                                                 C
Demonic Taskmaster     x2    B      vs ground stalls -- a 4/3 flier for {2}{B} whose 'At the beginning of your upkeep, sacrifice a creature other than this creature' is a free recurring death trigger paid by Gravecrawler and Procession tokens     U
Sever the Bloodline    x2    B      vs go-wide/token decks -- 'Exile target creature and all other creatures with the same name' is a one-card sweeper, and exile beats this cube's 27.1% graveyard density                                            U
Morkrut Banshee        x1    B      vs creature decks -- 'Morbid -- When this creature enters, if a creature died this turn, target creature gets -4/-4' is a body plus removal the sacrifice engine turns on for free                                 U
```

## ANALYSIS

### DECK IDENTITY

UB Zombie Aristocrats. Gravecrawler recurs from the graveyard for a single black mana as long as any Zombie is on board, and five sacrifice outlets -- Falkenrath Torturer x2 and Grimgrin free, Indulgent Aristocrat x2 for two mana -- convert each recursion into a death trigger. Blood Artist x2 and The Meathook Massacre turn every death into one to two damage that no blocker interacts with, and Morbid Opportunist x2 draws a card off the same deaths. The loop regenerates its own gate: sacrificing Gravecrawler is a nontoken death, which triggers Ghoulish Procession to create a 2/2 black Zombie token, and that token satisfies Gravecrawler's Zombie condition for the next recast.

Three things about this list are worth stating as counts rather than impressions.

**The Zombie tribe here is fodder, not payoff.** This cube contains 15 Zombies, 13 of them UB-legal, but exactly one Zombie lord -- Bladestitched Skaab, at `Other Zombies you control get +1/+0` -- and no anthem stacking of any kind. Meanwhile the cards that actually convert deaths into wins are Vampires and Humans: Blood Artist, Falkenrath Torturer and Indulgent Aristocrat are all Vampires (6 of 14 creature copies), and Morbid Opportunist is a Human. So the honest description of this deck is an aristocrats engine whose *renewable fodder* happens to be Zombies. Zombie cards are 6 of 24 nonland -- Gravecrawler, Butcher Ghoul x2, Siege Zombie x2, Grimgrin -- plus every token Ghoulish Procession and Deluge of the Dead create.

**The loop is self-gating, which is why the low Zombie count does not break it.** Gravecrawler reads `You may cast this card from your graveyard as long as you control a Zombie`. Sacrificing Gravecrawler is a nontoken creature dying, which triggers Ghoulish Procession's `Whenever one or more nontoken creatures die, create a 2/2 black Zombie creature token with decayed`. That token is a Zombie, so it satisfies the gate for the next recast. The engine manufactures its own precondition once per turn, at a cost of one black mana per iteration.

**Bladestitched Skaab was cut on the manabase, not on the card.** With 25 black pips against 1 blue pip, the only lands producing untapped blue on turn 2 are the single Island -- Contaminated Aquifer reads `This land enters tapped` and Shipwreck Marsh reads `enters tapped unless you control two or more other lands`. A `{U}{B}` two-drop anthem that lands on curve roughly one game in five is a worse card than a `{2}{B}` unconditional card-draw engine. Blue in this deck now exists for exactly one card, Grimgrin at mana value 5, by which turn all four blue sources are live.

| Loop iteration | Mana | Damage with both Blood Artists and Meathook out |
|---|---|---|
| Recast Gravecrawler, sacrifice to Falkenrath Torturer | {B} | 3 (1 + 1 + 1) |
| Ghoulish Procession token created, sacrificed | 0 (once/turn) | 3 |
| Butcher Ghoul sacrificed, undying returns it, sacrificed again | 0 | 6 across two deaths |

**The two coverage concessions are pool limits, not oversights.** A regex sweep of every mono-blue and mono-black card in this cube returns zero instances of `destroy target artifact` or `destroy target enchantment`, against a cube holding 24 artifacts and 25 enchantments. Compelling Deterrence x2 in the sideboard bounces one, which is temporary. Stack interaction is an absolute concession -- every U/B counterspell in the pool is blue-pip-gated and this manabase runs four blue sources.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:7  2:11  3:4  4:1  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.4: Siege Zombie@0.7, Siege Zombie@0.7) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 5 copies (effective 4.4: Grimgrin, Corpse-Born@0.8, Indulgent Aristocrat@0.8, Indulgent Aristocrat@0.8) → p=0.80 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 80%  T2 99%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre, Invasion of Innistrad // Deluge of the Dead
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Eaten Alive, Grimgrin, Corpse-Born
  CONCEDED  noncreature_permanents: Eaten Alive x2 answers a planeswalker ('Exile target creature or planeswalker'), but no card in blue or black in this pool destroys an artifact or enchantment (dossier probe: 0 mono-colour matches in B and U). Against the cube's 24 artifacts and 25 enchantments the mainboard races; Compelling Deterrence x2 in the sideboard bounces one.
  CONCEDED  stack: Absolute concession: zero stack interaction in the mainboard OR the sideboard. Every counterspell available in U/B in this pool is blue-pip-gated (Syncopate {X}{U}, Geistlight Snare {2}{U}, Summary Dismissal {2}{U}{U}) and this list runs 25 black pips against 1 blue pip on 4 blue producers, so holding blue open would cost the turn-1-to-3 board development the drain plan is built on. The deck does not interact with the stack at all.
  OK        graveyard: Invasion of Innistrad // Deluge of the Dead, Eaten Alive
```

- No WARN-tier flags were raised: curve, assembly, goldfish and coverage all returned PASS on the final list.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands become action through three sinks. Gravecrawler recasts from the graveyard for {B} every turn; Indulgent Aristocrat's '{2}, Sacrifice a creature' converts a spare land into a death trigger; and Deluge of the Dead's '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token' is a repeatable sink that also answers opposing graveyards, though that third sink is contingent on the Siege being defeated first. |
| screw | mitigation | 18 of 24 nonland cards cost two or less (curve 1:7, 2:11, 3:4, 4:1, 5:1), and only one card in the deck asks for blue. A two-land hand casts 75% of the nonland deck. Goldfish sim over 1000 hands: 85% keepable, 84% reach three lands by turn 3, 80% have a turn-1 play. |
| decapitation | mitigation | There are five sacrifice outlets, of which three are free: Falkenrath Torturer x2 ('Sacrifice a creature: This creature gains flying until end of turn'), Grimgrin ('Sacrifice another creature: Untap Grimgrin and put a +1/+1 counter on it'), and Indulgent Aristocrat x2 at {2} per activation. Answering Grimgrin on sight removes one of five. The drain itself -- Blood Artist x2 and The Meathook Massacre -- never needed Grimgrin at all, because both are static triggers on any creature dying. |
| gas-out | mitigation | Morbid Opportunist x2 ('Whenever one or more other creatures die, draw a card. This ability triggers only once each turn') draws off the same deaths that deal the damage, running on 14 creature copies plus a Ghoulish Procession token every turn. Beyond cards, the board itself regenerates from an empty hand: Gravecrawler recasts from the graveyard, Butcher Ghoul's undying returns it once free, and Deluge of the Dead makes a token per {2}{B}. |
| raced | mitigation | Against the cube's fastest clocks (Vampires 23 and Humans 53, mostly R/W aggro) the wall is Tragic Slip x2 at one mana, whose morbid '-13/-13' is live from the first turn anything dies, and Infernal Grasp x2 at two mana. Eaten Alive x2 is a one-mana exile only once a body is already down -- its additional cost reads 'sacrifice a creature or pay {3}{B}' -- so it is a turn-2-onward answer, not a turn-1 one. Lifegain comes from Blood Artist's 'you gain 1 life' on every death and The Meathook Massacre's 'Whenever a creature an opponent controls dies, you gain 1 life'. The residual cost, stated plainly: the recurring bodies do not block -- Gravecrawler reads 'This creature can't block' and every Ghoulish Procession token has decayed -- so the deck must answer an early aggro board with removal rather than with chump blocks. |
| disruption-fizzle | mitigation | The kill is incremental rather than a single critical turn. Blood Artist and The Meathook Massacre are static triggers that already banked their damage on every prior sacrifice, so a counterspell or a removal spell aimed at the 'key' turn costs one loop of {B}, not the plan. Five sacrifice outlets and three independent drain converters mean no single piece of interaction stops the chain. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Bladestitched Skaab | The pool's only Zombie lord, at 'Other Zombies you control get +1/+0'. Cut on the manabase: at {U}{B} against 25 black pips and 1 blue pip, the only land producing untapped blue on turn 2 is the single Island, so it lands on curve about one game in five. |
| Archghoul of Thraben | 'If it's a Zombie card, you may reveal it and put it into your hand' -- once Bladestitched Skaab was cut, Zombie cards fell to 6 of 40, a 15% hit rate on a 3-mana body. Morbid Opportunist draws unconditionally in the same slot. |
| Rooftop Storm | 'You may pay {0} rather than pay the mana cost for Zombie creature spells you cast' costs {5}{U}. The UB Zombie creature spells in this pool cost 1-5 mana (median 3), so a six-mana investment saves under three mana per subsequent Zombie and does nothing the turn it lands. |
| Necroduality | 'Whenever a nontoken Zombie you control enters, create a token that's a copy of that creature.' Nontoken Zombies are 6 of 24 nonland cards, a live count -- but at four mana it does nothing the turn it lands on a curve where 18 of 24 nonland cards cost two or less. |
| Gisa and Geralf | 'Once during each of your turns, you may cast a Zombie creature spell from your graveyard' -- but Gravecrawler, the one you most want to recast, already casts itself from the yard, and at {2}{U}{B} it demands a second blue pip from a four-blue-producer manabase while consuming one of five rare slots. |
| Metallic Mimic | Naming Zombie would put a +1/+1 counter on each Zombie as it enters, but the counter applies on entry only, so a Gravecrawler recast every loop banks nothing -- and 'enters with an additional +1/+1 counter' switches off Butcher Ghoul's undying, which reads 'if it had no +1/+1 counters on it'. |
| Heartless Summoning | 'Creature spells you cast cost {2} less to cast' would discount 14 of 24 nonland cards. But 'Creatures you control get -1/-1' immediately kills Gravecrawler (2/1), Blood Artist x2 (0/1), Butcher Ghoul x2 (1/1), Indulgent Aristocrat x2 (1/1) and Falkenrath Torturer x2 (2/1) -- 9 of 24 nonland cards, including both halves of the drain engine. |
| Sorin, Imperious Bloodlord | '+1: You may sacrifice a Vampire. When you do, Sorin deals 3 damage to any target' is a free repeatable outlet, and this deck does hold 6 Vampire copies -- but 4 of them (Blood Artist x2, Falkenrath Torturer x2) are engine pieces you must keep, and 100% of the renewable fodder (recurring Gravecrawler, undying Butcher Ghoul, every Zombie token) feeds it zero times. |
| Skirsdag High Priest | 'Morbid -- {T}, Tap two untapped creatures you control: Create a 5/5 black Demon creature token with flying.' Tapping two creatures competes directly with sacrificing those same creatures, which is the deck's entire mana-free engine, and it costs one of five rare slots. |
| Galvanic Juggernaut | 'Whenever another creature dies, untap this creature' is a genuine death trigger this deck turns on nearly every turn, but the card adds 0 drain, 0 Zombie count for Gravecrawler's gate and 0 outlet capacity at mana value 4, against a curve where 18 of 24 nonland cards cost two or less; 'attacks each combat if able' also gifts blocks to a board of 1/1s and 2/1s. |
| Captivating Vampire | 'Other Vampires you control get +1/+1' reads a tribe this deck holds 6 copies of -- but those are Blood Artist (0/1) and Indulgent Aristocrat (1/1) bodies kept for their triggers, not attackers, and it costs a rare slot from a cap already at 5/5. |
| Triskaidekaphobia | 'Each player with exactly 13 life loses the game.' Blood Artist reads 'you gain 1 life' and The Meathook Massacre reads 'Whenever a creature an opponent controls dies, you gain 1 life', so the deck moves both life totals on the same triggers and cannot steer either to exactly 13. |
| Syncopate | Sideboard consideration, cut. 'Counter target spell unless its controller pays {X}' is an instant needing blue held untapped, on a manabase with four blue producers, in a deck that taps out every turn to recast Gravecrawler and activate outlets. |
| Imprisoned in the Moon | Sideboard consideration, cut. 'Enchant creature, land, or planeswalker' answers a planeswalker permanently, but Eaten Alive now does that maindeck for one mana, and this costs {2}{U} on four blue producers. |
| Village Rites | Sideboard consideration. 'Sacrifice a creature. Draw two cards' converts one Gravecrawler recursion into two cards, but Morbid Opportunist does the same job repeatedly from a single permanent. |
| Asylum Visitor | Sideboard consideration. 'If that player has no cards in hand, you draw a card' matches this deck's empty-hand plan, but the condition only turns on around turn 5, whereas Morbid Opportunist is live the turn it lands. |
| Abundant Maw, Distended Mindbender, Elder Deep-Fiend, Emrakul, the Promised End, Griselbrand, Chittering Host, Temporal Mastery, Hullbreaker Horror | Top end at mana value 7-13 (Griselbrand additionally at four black pips). On 16 lands with a curve peaking at two and a thesis turn of 7, none is castable before the game is decided, and none produces a death trigger or a Zombie. |
| Mausoleum Wanderer, Nebelgast Herald, Essence Flux, Battleground Geist, Geistlight Snare, Tower Geist, Mist Raven | Spirit-matters and blue tempo cards: each reads 'Spirit' or grants flying/bounce with no sacrifice, death-trigger or Zombie clause, and every one of them adds blue pips to a manabase carrying 25 black. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.08   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.56 adj [MV 2.08 vs 2.5, 0 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  96.2%  prod  93.8%  gap  +2.4pp  [OK]
  U  demand   3.8%  prod  25.0%  gap -21.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool rules: commons/uncommons max 2 copies, rares/mythics max 1 copy .......... PASS
  (verified against cube_search.get_max_copies for every card; basics exempt)
Extra constraint: at most 5 rare/mythic CARDS across mainboard + sideboard .... PASS (5/5)
  Gravecrawler (R), Grimgrin Corpse-Born (M), The Meathook Massacre (M),
  Invasion of Innistrad // Deluge of the Dead (R), Shipwreck Marsh (R)
  Sideboard rares/mythics: 0 -- forced by the cap.
Deck size 40 / sideboard 10 ................................................... PASS
Exact-name membership against the cube mainboard .............................. PASS
Colour usability -- every nonland card returns a usable mode in U/B ........... PASS
Splash cap -- splash resolved to none; the red candidates named by the Phase 3
  filter (Bloodtithe Harvester, Blood Petal Celebrant, Bloodmad Vampire) were
  all declined: the pool's only UB fixing produces no red ..................... PASS
Mana audit ................................................................... PASS
Structural gate (curve / assembly / goldfish / coverage) ...................... PASS
```