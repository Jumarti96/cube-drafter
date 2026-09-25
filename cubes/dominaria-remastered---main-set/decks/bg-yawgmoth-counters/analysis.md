---
deck_name: "bg-yawgmoth-counters"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BG"
format: "40-card"
built_at: "2026-07-31T16:44:53Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x9   Swamp                    
  x6   Forest                   
  x2   Haunted Mire             BG dual, enters tapped
  x1   Woodland Cemetery        BG dual, enters tapped
```

### CREATURES (12)

```
CMC  Card                          Qty   Color  Role                                Rar
  1  Festering Goblin              x2    B      Sac fodder (1-mana body, death deb  C
  3  Phyrexian Rager               x1    B      Sac fodder (cantrip body)           C
  4  Forgotten Ancient             x1    G      Engine (counter reservoir)          R
  4  Kavu Primarch                 x2    G      Threat (kicked counters body / con  C
  4  Phyrexian Scuta               x2    B      Threat (kicked counters body)       U
  4  Yawgmoth, Thran Physician     x1    B      Engine (sac outlet + proliferate)   M
  5  Spiritmonger                  x2    BG     Threat (self-growing counters)      U
  6  Triskelion                    x1    C      Engine (counter sink / reach)       R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                          Qty   Color  Role                                Rar
  2  Chainer's Edict               x2    B      Interaction (flashback edict)       U
  2  Terror                        x2    B      Interaction                         C
  3  Call of the Herd              x2    G      Threat (two bodies per card)        U
  6  Dark Withering                x1    B      Interaction (madness off the proli  U
```

### OTHER SPELLS (3)

```
CMC  Card                          Qty   Color  Role                                Rar
  2  Oversold Cemetery             x1    B      Engine (renewable fodder from grav  R
  3  Dragon Blood                  x1    C      Engine (colourless counter seed)    U
  3  Squirrel Nest                 x1    G      Sac fodder (renewable body factory  U
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                                              Rar
Break Asunder                 x2    G      Hate: artifacts/enchantments - Against the cube's 24 artifacts + 3  C
Duress                        x2    B      Flex: proactive disruption - Against control and combo. B/G has ze  C
Giant Spider                  x2    G      Flex: anti-evasion - Against the cube's 42 evasion cards; 37 of th  C
Ichor Slick                   x2    B      Flex: removal for Terror's blind spot - Against black or artifact   C
Tormod's Crypt                x2    C      Hate: graveyard - Against the cube's 45 graveyard-interaction card  U
```

## ANALYSIS

### DECK IDENTITY

A black-green attrition deck whose engine runs counters in both directions at once. Yawgmoth, Thran Physician reads 'Pay 1 life, Sacrifice another creature: Put a -1/-1 counter on up to one target creature and draw a card' - every spare body becomes removal AND a card - and '{B}{B}, Discard a card: Proliferate', which gives 'each another counter of each kind already there'. A single proliferate therefore deepens the -1/-1 counters killing the opponent's creatures and simultaneously grows the +1/+1 counters on Spiritmonger, Phyrexian Scuta, Kavu Primarch and Forgotten Ancient. Two things the grill made me state plainly. First, the +1/+1 half is a GROWTH engine, not a kill: Triskelion converts counters to damage one at a time, which is reach and removal, not a clock - the actual kill is combat damage from bodies that proliferate has enlarged. Second, both halves of the engine have a per-activation cost, so the deck is built to pay them: proliferate costs a card, which Dark Withering's Madness {B} turns into a one-mana kill spell, and the sacrifice costs a body, which Squirrel Nest and Oversold Cemetery renew instead of merely spending.

### SLOT ALLOCATION

| Slot | Count | % of nonland | Rationale |
|---|---|---|---|
| lands | 18 | 45.0% | Computed by deck_audit.land_target; matches the recommendation exactly. High because the deck runs zero acceleration, so the adjustment is a full +1.09 off the base of 17. |
| Threats/Payoffs | 8 | 36% | Inside the 30-40% midrange band after the Phase 9 repair cut Flesh Reaver. Spiritmonger x2, Phyrexian Scuta x2 and Kavu Primarch x2 are the +1/+1 carriers proliferate multiplies; Call of the Herd x2 is two bodies per card and therefore two Yawgmoth activations per card. |
| Engine | 5 | 23% | DEVIATION from the midrange 0% Engine band, thesis-grounded: the locked kill_mechanism is a card (Yawgmoth) plus the counter sources proliferate multiplies (Forgotten Ancient, Dragon Blood) and the sink that converts them (Triskelion). Oversold Cemetery joined this bucket in the Phase 9 repair, spending the 5th and final rare/mythic slot: its 'four or more creature cards in your graveyard' condition is a byproduct of Yawgmoth activations rather than a deckbuilding cost, so it makes the engine's fuel renewable. |
| Interaction | 5 | 23% | Inside the 20-30% midrange band. Terror x2 is the cheapest hard answer in the pool but cannot touch black or artifact creatures - 36 of the pool's 120 unique creatures (30%), including this deck's own Spiritmonger. Chainer's Edict x2 covers that entire blind spot via sacrifice and does it twice per card. Dark Withering was added in the repair primarily as a madness outlet. |
| Sac Fodder | 4 | 18% | DEVIATION, thesis-grounded: Yawgmoth's activation cost is 'Sacrifice another creature', a per-activation body cost no other slot pays. The grill found the pre-repair version fed this entirely from exhaustible one-shot bodies, so Squirrel Nest was added as the only renewable, untapped, unconditional fodder source in the pool. |

### COUNT-DEPENDENT VERDICTS

Every claim below is a numerator and a denominator against **this** list, not an adjective.

| Card | Verdict | Count |
|---|---|---|
| Yawgmoth, Thran Physician | INCLUDE x1 - sacrifice cost is fed, and now renewably | Its cost is 'Sacrifice ANOTHER creature'. Creature cards in this list: Yawgmoth, Forgotten Ancient, Triskelion, Spiritmonger x2, Phyrexian Scuta x2, Kavu Primarch x2, Festering Goblin x2, Phyrexian Rager = 12 of 22 nonland, so 11 are legal fodder, plus up to 4 Elephant tokens from Call of the Herd x2. The grill's decisive point was that all of those are ONE-SHOT and gated on being drawn: 0 pre-repair cards made a body more than once. Squirrel Nest ('{T}: Create a 1/1 green Squirrel') and Oversold Cemetery ('return target creature card from your graveyard to your hand') now make the fuel renewable. |
| Oversold Cemetery | INCLUDE x1 - spends the 5th and final rare/mythic slot | 'At the beginning of your upkeep, if you have four or more creature cards in your graveyard, you may return target creature card from your graveyard to your hand.' The four-creature condition is a byproduct of the engine, not a cost: four Yawgmoth activations put four creature cards in the graveyard. It is also the deck's only answer to the cube's 4 sweepers. The pre-grill record excluded Birds of Paradise on the ground that this slot was 'reserved for the sideboard' - but the sideboard holds 0 of 10 rares, so the reservation was spent on nothing. The grill caught that and the slot is now spent. |
| Squirrel Nest | INCLUDE x1 at enabler weight 0.7 | 'Enchanted land has {T}: Create a 1/1 green Squirrel creature token.' The only renewable, untapped, unconditional fodder source among the pool's B/G/colourless cards, and its taxonomic_profile carries both Engine/Outlet and Enabler/Fodder. Weighted 0.7 because each body costs the enchanted land's tap, competing with casting spells that turn, and it produces nothing the turn it resolves. Held to x1 rather than x2 because {1}{G}{G} is double-green against 9 green sources of 18. |
| Dark Withering | INCLUDE x1 (not x2) | 'Destroy target nonblack creature. / Madness {B}'. The grill's finding was exact: proliferate costs 'Discard a card' per activation and 0 of the 22 pre-repair mainboard cards recouped a discard - the only madness and cycling cards were all in the sideboard. Dark Withering is the one card in B/G that converts that discard into a one-mana instant-speed kill spell. Held to x1 rather than the recommended x2 because hard-casting it is {4}{B}{B} and the madness enabler is a single Yawgmoth, so a second copy risks two dead six-drops. |
| Dragon Blood | INCLUDE x1 (cut from x2) | '{3}, {T}: Put a +1/+1 counter on target creature' is 4 mana per counter and one per turn - the worst counter rate in the list against Kavu Primarch kicked (4 counters on a 7/7) and Triskelion (3 on arrival). Cut to one rather than zero because it is the only COLOURLESS repeatable seed, so it works on turns when the {B}{B} and {G}{G} pips are already committed. |
| Forgotten Ancient | INCLUDE x1 | 'Whenever a player casts a spell' triggers on both players. Its upkeep clause moves counters 'onto other creatures' - legal recipients are the other 11 creature cards plus Elephant and Squirrel tokens. CORRECTED from an earlier figure of 12 recipients. Note the clause moves counters only FROM ITSELF, so it is a distributor, not a way to relocate Kavu Primarch's or Phyrexian Scuta's counters onto Triskelion. |
| Triskelion | INCLUDE x1 | The only counter SINK among the pool's 8 colourless-or-BG +1/+1 counter cards (Phyrexian Scuta, Forgotten Ancient, Kavu Primarch, Invigorating Boon, Dodecapod, Triskelion, Dragon Blood, Spiritmonger) - CORRECTED from an earlier figure of 6. It is also the only card in the list that enters with a +1/+1 counter unconditionally. Proliferate reloads it, but at 1 damage per {B}{B}-plus-a-card it is reach and removal, not a clock. |
| Phyrexian Scuta | INCLUDE x2 at payoff weight 0.8 | 'Kicker-Pay 3 life' is a life cost, not mana, so unlike Kavu Primarch's {4} it does not push the card off curve. Weighted 0.8 because this deck has 3 separate life sinks after the repair cut Flesh Reaver - Yawgmoth's 'Pay 1 life' per activation, Phyrexian Rager's 'lose 1 life', and this kicker itself. |
| Kavu Primarch | INCLUDE x2 at payoff weight 0.6 | Counters require the {4} kicker (8 mana) or convoke help; convoke fodder is 11 other creature cards plus tokens. Its four counters can never be moved to Triskelion - Forgotten Ancient moves counters only from itself - so it is a counter DESTINATION and a body, not a source for the sink. |
| Festering Goblin | INCLUDE x2 at enabler weight 0.5, role string CORRECTED | Its role was labelled 'dies into -1/-1', which the grill correctly called misleading: 'target creature gets -1/-1 UNTIL END OF TURN' is a temporary debuff, not a -1/-1 counter, so proliferate cannot touch it and it seeds nothing. Relabelled 'Sac fodder (1-mana body, death debuff)'. It counts as an enabler purely as one-mana Yawgmoth fodder. |
| Nantuko Shade / Phyrexian Debaser | EXCLUDE | Both read like counter cards and are not: '{B}: This creature gets +1/+1 until end of turn' and 'Target creature gets -2/-2 until end of turn' are temporary, so proliferate multiplies neither. CORRECTED count: 7 B/G/colourless pool cards use until-end-of-turn wording where a counter would be expected (Nantuko Shade, Phyrexian Debaser, Festering Goblin, Ichor Slick, Primal Boost, Phyrexian Ghoul, Hyalopterous Lemure) - an earlier version said 3. Yawgmoth is the pool's ONLY source of an actual -1/-1 counter and its ONLY source of proliferate. |
| Flesh Reaver | EXCLUDE - cut in the Phase 9 repair | It creates and carries no counters, so it contributed 0 to the pipeline from 1 of 22 slots, and 'this creature deals that much damage to you' made it a fourth life sink alongside Yawgmoth, Phyrexian Scuta's kicker and Phyrexian Rager. |
| Faceless Butcher | EXCLUDE - cut in the Phase 9 repair | 'When this creature leaves the battlefield, return the exiled card to the battlefield' actively fights this deck's own engine: sacrificing it to Yawgmoth hands the opponent their creature back. It was the one interaction card whose cost went up as the sacrifice engine got better. |
| Symbiotic Beast | EXCLUDE | Five sacrifice bodies from one card is the best fodder rate in the pool, but {4}{G}{G} is double-green against 9 green sources of 18 in a list that is 63% black by pip demand. |
| Mind Stone | EXCLUDE | accel_count = 0 is the entire reason land_target pushed to 18, so acceleration is genuinely the deck's weak point. But Mind Stone adds {C}, and this deck's binding constraint is coloured pips - {B}{B} for Yawgmoth and Dark Withering, {G}{G} for Squirrel Nest - not generic mana. |
| Invigorating Boon | EXCLUDE | 'Whenever a player cycles a card' - this mainboard fields 0 of 40 cycling cards, so every trigger would come from the opponent. Excluded on the count, not on the card. |

### MANA DERIVATION

**Land count.** None. Built to exactly the recommended 18. The count is high for a midrange deck because the list runs zero ramp and zero cantrips (accel = 0), so the land_target adjustment is a full +1.09 off the base of 17.

**Composition.** Haunted Mire x2 is the only free common BG dual and 'enters tapped'. Woodland Cemetery is a rare and reads 'enters tapped unless you control a Swamp or a Forest' - with 15 basics plus 2 Haunted Mires in the list, that condition is met on essentially every turn after the first, so it is effectively an untapped dual. Green sources were raised from 8 to 9 in the Phase 9 repair because Squirrel Nest is {1}{G}{G}, the list's second double-green cost. Nantuko Monastery was rejected as fixing: its mana ability is '{T}: Add {C}', colourless only. Land-type census, corrected after the approval round: Haunted Mire's type line is 'Land - Swamp Forest', so it DOES carry the Swamp type - the deck holds 11 Swamp-type lands (9 Swamp + 2 Haunted Mire), not the 9 an earlier draft claimed. Woodland Cemetery is a plain 'Land' and carries no land type. This matters against Street Wraith's Swampwalk.

**Pips.** Recounted from the deck array: B = 16 (Yawgmoth 2, Dark Withering 2, Spiritmonger x2 = 2, Phyrexian Scuta x2 = 2, Festering Goblin x2 = 2, Terror x2 = 2, Chainer's Edict x2 = 2, Phyrexian Rager 1, Oversold Cemetery 1); G = 9 (Spiritmonger x2 = 2, Kavu Primarch x2 = 2, Call of the Herd x2 = 2, Squirrel Nest 2, Forgotten Ancient 1). That is 64%/36%, matching audit.color_balance_per_color; an earlier draft recorded 15 and 63/37. Black carries the double-pip costs (Yawgmoth {2}{B}{B}, Dark Withering {4}{B}{B}); green rose to 9 sources in the Phase 9 repair because Squirrel Nest {1}{G}{G} joined Spiritmonger as a green-demanding card. Audit gaps: B -2.7pp, G -14.0pp (green over-served because both duals count toward it), both inside tolerance.

### SKELETON SELECTION (Phase 5B Step 0)

Archetype family **midrange** — Locked thesis default_role is 'controller'; the shell is removal-dense B/G with beaters (Spiritmonger, Phyrexian Scuta) that win attrition rather than racing.

Three independent, pool-blind sketchers each built one interpretation of that single family; an independent shape judge picked one whole build.

- **Chosen:** Sketch 1, lens *most threat-dense / aggressive*.
- **Judge grounds:** Keeps 3 of 4 named +1/+1 carriers (Forgotten Ancient, Spiritmonger, Phyrexian Scuta) alongside Yawgmoth, and its above-band Threats deviation is thesis-grounded (more sac fodder feeds proliferate) rather than a lens indulgence.
- **Rejected:** lens *most grindy value* — Only 2 of 4 named +1/+1 carriers survive (Phyrexian Scuta and Dragon Blood cut), and it spends the entire 5-slot rare/mythic cap on the mainboard, leaving no sideboard flex - a real cost for a build that already delivers less of the dual-mechanism.
- **Rejected:** lens *most flexible toolbox* — Drops all four named +1/+1 carriers outright, so Yawgmoth's proliferate clause has nothing to grow - only the -1/-1 kill half of the locked thesis is actually built.
- **Weak keystones:** The judge flagged Yawgmoth in Sketch 3 (proliferate with zero growth targets) and Triskelion in Sketch 2 (a counter-SPENDING tool, not a counter-growing one). Both belong to rejected sketches. Resolved on the merits: the Sketch 3 objection is answered because this build runs all four named carriers plus Kavu Primarch x2; the Sketch 2 objection is answered because Triskelion is included HERE as an additional sink on top of those carriers, not as a replacement. CORRECTED after the grill: an earlier version of this note claimed proliferate 'always has upward targets', which is false in the general case - only Triskelion enters with a +1/+1 counter unconditionally. Phyrexian Scuta needs its life kicker, Kavu Primarch needs {4} or convoke, Spiritmonger needs to have already dealt damage to a creature, Forgotten Ancient needs a spell cast since it landed, and Dragon Blood needs 4 mana. The claim holds in practice by turn 8; it does not hold as stated.
- **Harvested from rejected builds:** Triskelion (Engine (counter sink / reach)); Phyrexian Rager (Sac fodder (cantrip body)); Chainer's Edict (Interaction (flashback edict))

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:2  2:5  3:5  4:6  5:2  6:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 5.8: Phyrexian Scuta@0.8, Phyrexian Scuta@0.8, Kavu Primarch@0.6, Kavu Primarch@0.6) → p=0.90 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 5.4: Oversold Cemetery@0.7, Squirrel Nest@0.7, Festering Goblin@0.5, Festering Goblin@0.5) → p=0.89 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 35%  T2 83%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Chainer's Edict, Triskelion, Yawgmoth, Thran Physician
  OK        single_large_threat: Terror, Dark Withering, Chainer's Edict
  CONCEDED  noncreature_permanents: Neither black nor green offers artifact/enchantment removal cheap enough to maindeck here - the pool's only option in these colours is Break Asunder at {2}{G}{G}, double-green in a list whose pip demand is 63% black. Sideboarded 2x; it is 1 of only 5 artifact answers and 1 of only 4 enchantment answers in the whole cube.
  CONCEDED  stack: Black and green have no counterspells anywhere in this pool. Duress is the nearest substitute and is sideboarded 2x, but it acts before the spell is cast rather than on the stack.
  CONCEDED  graveyard: Tormod's Crypt is the cube's only graveyard hate and is dead against decks that do not use the graveyard; it also fights this deck's own Chainer's Edict flashback, Call of the Herd flashback and Oversold Cemetery. Sideboarded 2x.
```

- Interaction blind spot, disclosed rather than hidden: Terror x2 reads 'Destroy target NONARTIFACT, NONBLACK creature', and 36 of the pool's 120 unique creatures (30%) are black or artifact - including this deck's own Spiritmonger. Chainer's Edict x2 (sacrifice, ignores all of it) covers the gap from the mainboard, and Ichor Slick x2 is sideboarded specifically for it.
- Sideboard note on a specific unanswered card: 37 of the cube's 42 evasion cards are flying-based, so Giant Spider x2 covers 88% of that class. Street Wraith is among the 5 that Reach does not answer - and its Swampwalk makes it unblockable against this list's 11 Swamp-type lands (9 Swamp + 2 Haunted Mire, whose type line is 'Land - Swamp Forest'). An earlier draft undercounted these as 9.
- Slot-bucket note: build_output.slot_allocation is a deckbuilding budget over the 22 nonland slots, while structural_checks.assembly counts FUNCTIONAL copies of the pipeline roles - so Oversold Cemetery, Squirrel Nest and Festering Goblin x2 appear as enabler copies there while sitting in the Engine and Sac Fodder budgets here. Both are internally consistent and both PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Dragon Blood ('{3}, {T}: Put a +1/+1 counter on target creature') is an uncapped mana sink with 12 creature cards to point at. Kavu Primarch's 'Kicker {4}' turns 8 mana into a 7/7. Chainer's Edict's 'Flashback {5}{B}{B}' is a seven-mana second use of a card already spent. Squirrel Nest turns a surplus land into a body every turn, and Yawgmoth's proliferate at {B}{B} converts spare mana into counters each turn. CORRECTED after the approval round: an earlier version said Dragon Blood x2 (now x1) and 13 creature cards (now 12). |
| screw | mitigation | The curve is bottom-loaded for a deck with no ramp: 7 of 22 nonland cards cost 2 or less - Festering Goblin x2 at one mana, and Terror x2, Chainer's Edict x2 and Oversold Cemetery x1 at two. Terror and Chainer's Edict are both meaningful turn-2 plays off two lands, and Oversold Cemetery is a two-mana enchantment that costs nothing further. 18 lands is the computed land_target, not a compromise, and the goldfish check reports 83% keepable hands with 92% three-lands-by-turn-3 - the highest of the three decks built from this pool. CORRECTED after the approval round: an earlier version of this entry listed Flesh Reaver among the cheap plays, but Flesh Reaver was cut in the Phase 9 repair. The total of 7 was right; the enumeration was not. |
| decapitation | accepted | Yawgmoth is a single mythic at one copy and there is no second copy or tutor for it in these colours. Mitigating would mean spending a rare/mythic slot on a tutor - and the 5 slots are now fully spent (Yawgmoth, Forgotten Ancient, Triskelion, Oversold Cemetery, Woodland Cemetery), with the last one going to Oversold Cemetery precisely because the grill showed the 'reserved for the sideboard' justification was empty. A tutor would still not produce a second Yawgmoth. What survives its loss: Spiritmonger x2 grow themselves with no engine at all, Phyrexian Scuta x2 and Kavu Primarch x2 enter with counters unaided, Dragon Blood and Forgotten Ancient still add counters, and Squirrel Nest keeps making bodies. The deck degrades to a normal BG midrange deck rather than folding. The honest residual: with Yawgmoth gone the deck has 0 sacrifice outlets, so Oversold Cemetery's condition stops advancing on its own. |
| gas-out | mitigation | Yawgmoth IS the card-advantage engine: 'Sacrifice another creature: ... draw a card' turns 11 fodder bodies plus up to 4 Elephants and a renewing stream of Squirrels into draws. Independently: Phyrexian Rager is 'Cards: Self-Replacing', Call of the Herd x2 is 'Cards: Net-Positive' via flashback, and Chainer's Edict x2 flashback is a second removal spell from the graveyard. Oversold Cemetery returns a creature card to hand every upkeep once four creatures have died, which in this deck is four Yawgmoth activations. |
| raced | accepted | This is the deck's real weakness and it is a consequence of the plan. With 0 acceleration, an 18-land 3.32-avg-MV curve and a thesis turn of 8, it cannot outrun the cube's fastest starts, and it still pays life in exactly those games - Yawgmoth's 'Pay 1 life' per activation and Phyrexian Scuta's 'Pay 3 life' kicker are both live costs when life is the scarce resource. Mitigating would mean maindecking Giant Spider x2 and cutting removal or threats, which trades the attrition plan for a defensive one and gives up the thing the deck is good at. What partially covers it: Terror x2 and Chainer's Edict x2 at two mana are the cheapest interaction in the pool, and Dark Withering is an instant that can be cast for {B} via Madness off a proliferate discard. CORRECTED after the approval round: an earlier version cited Flesh Reaver and Faceless Butcher, both cut in the Phase 9 repair, and a stale average mana value of 3.23. |
| disruption-fizzle | mitigation | There is no critical turn to interact with - the deck accumulates board state and card advantage incrementally rather than executing a combo turn. Yawgmoth's sacrifice ability is an activated ability with no tap symbol and no timing restriction, so in response to removal aimed at Yawgmoth the whole board can be converted into -1/-1 counters and cards rather than being lost. Chainer's Edict answers a threat that resolves through disruption, and its flashback means the answer survives being countered the first time. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Birds of Paradise | Fixing and acceleration in one rare, and it would address accel = 0. Excluded because all five rare/mythic slots are now spent (Yawgmoth, Forgotten Ancient, Triskelion, Oversold Cemetery, Woodland Cemetery). An earlier draft excluded it by 'reserving' the last slot for a sideboard that holds no rares - an empty reservation the grill correctly called out. |
| Dragon Blood (second copy) | '{3}, {T}: Put a +1/+1 counter on target creature' is 4 mana per counter, one per turn - the worst counter rate in the list next to Kavu Primarch kicked (4 counters on a 7/7) and Triskelion (3 on arrival). Cut to one copy; the survivor is kept because it is the only COLOURLESS repeatable seed, live on turns the {B}{B} and {G}{G} pips are already committed. |
| Duress | 'You choose a noncreature, nonland card from it' is blank against the cube's creature decks; sideboarded 2x for control and combo matchups instead. |
| Faceless Butcher | Exile-grade removal on a 2/3 body, but 'When this creature leaves the battlefield, return the exiled card to the battlefield' fights this deck's own engine - sacrificing it to Yawgmoth hands the opponent their creature back. The one interaction card whose cost RISES as the sacrifice engine improves. Cut in the Phase 9 repair. |
| Flesh Reaver | A 4/4 for two mana, but it creates and carries no counters, so it contributed nothing to the pipeline from a threat slot - and 'this creature deals that much damage to you' made it a fourth life sink alongside Yawgmoth's 'Pay 1 life', Phyrexian Scuta's kicker and Phyrexian Rager. Cut in the Phase 9 repair. |
| Gamekeeper | With a free sacrifice outlet on board, 'reveal cards from the top of your library until you reveal a creature card. Put that card onto the battlefield' is a real cheat-into-play. Excluded because this deck's best hits are Spiritmonger at 5 and Triskelion at 6, neither of which it is desperate to accelerate, and the slot went to renewable fodder instead. |
| Ichor Slick | '-3/-3 until end of turn' misses the cube's larger threats, but it hits the black and artifact creatures Terror cannot target - 36 of the pool's 120 unique creatures - and its Madness {3}{B} is live off Yawgmoth's proliferate discard. Sideboarded 2x for exactly that blind spot. |
| Invigorating Boon | 'Whenever a player cycles a card' - this list fields 0 cycling cards in the mainboard, so the trigger depends entirely on the opponent. Excluded on the count, not on the card. |
| Mind Stone | accel_count = 0 is the entire reason land_target pushed the deck to 18 lands, so acceleration is a real weak point. Excluded because Mind Stone adds {C}, and the binding constraint here is coloured pips - {B}{B} for Yawgmoth and Dark Withering, {G}{G} for Squirrel Nest - not generic mana. |
| Mindslicer | 'When this creature dies, each player discards their hand' is symmetric, and this deck sacrifices its own creatures to Yawgmoth - it would empty its own hand at the moment it most wants cards. |
| Nantuko Shade | '{B}: This creature gets +1/+1 until end of turn' is a temporary pump, NOT a +1/+1 counter, so proliferate cannot multiply it. It is one of 7 B/G/colourless pool cards that use until-end-of-turn wording where a counter would be expected; Yawgmoth is the pool's only actual -1/-1 counter source. |
| Necrosavant | '{3}{B}{B}, Sacrifice a creature: Return this card from your graveyard to the battlefield' costs five mana plus a body every activation, and it is {3}{B}{B}{B} to cast - triple black at six mana against 12 black sources. |
| Penumbra Bobcat | 'When this creature dies, create a 2/1 black Cat creature token' is two sacrifice bodies from one card with no life cost, a better rate than Festering Goblin. It lost its slot to Squirrel Nest and Oversold Cemetery, which supply bodies renewably rather than twice. |
| Phyrexian Debaser | '{T}, Sacrifice this creature: Target creature gets -2/-2 until end of turn' is a temporary debuff, not a -1/-1 counter, so proliferate cannot extend it - one of 7 B/G/colourless pool cards that use until-end-of-turn wording where a counter would be expected. |
| Phyrexian Ghoul | 'Sacrifice a creature: This creature gets +2/+2 until end of turn' is a free, mana-less redundant sacrifice outlet, and this deck has only 1 outlet among 22 nonland cards. Genuinely close; excluded because the pump is temporary and adds nothing to the counter engine, whereas Oversold Cemetery both feeds the outlet and answers the cube's 4 sweepers. |
| Royal Assassin | '{T}: Destroy target tapped creature' is strong repeatable removal, but it only answers creatures that attack or tap, and it is a rare in a budget already holding Yawgmoth, Forgotten Ancient, Triskelion and Woodland Cemetery. |
| Street Wraith | Its Swampwalk is live against black decks and its 'Cycling-Pay 2 life' is free, but a 3/4 for five is below rate and this deck's life total is already taxed by Flesh Reaver, Phyrexian Scuta's kicker and Yawgmoth's own activation cost. |
| Sylvan Library | Mythic. 'pay 4 life' per extra card in a deck already paying life to Yawgmoth, Flesh Reaver and Phyrexian Scuta's kicker. |
| Symbiotic Beast | Five sacrifice bodies from one card is the best fodder rate in the pool, but {4}{G}{G} is double-green against 9 green sources of 18 in a list that is 63% black by pip demand. |
| Terravore | 'power and toughness ... equal to the number of land cards in all graveyards' - this list runs 0 self-mill outlets and 0 fetch effects, so the count starts at 0. |
| Wretched Anurid | 3/3 for two, but 'Whenever another creature enters, you lose 1 life' triggers on this deck's own Elephant tokens and every body it deploys - the drawback scales with the plan. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.32   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.09 adj [MV 3.32 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  64.0%  prod  66.7%  gap  -2.7pp  [OK]
  G  demand  36.0%  prod  50.0%  gap -14.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
1a mainboard size                PASS   40 vs 40
1b sideboard size                PASS   10 vs 10
2 exact-name membership          PASS   []
3 copy limits                    PASS   []
3b rare+mythic <=5               PASS   5: ['Yawgmoth, Thran Physician', 'Forgotten Ancient', 'Triskelion', 'Oversold Cemetery', 'Woodland Cemetery']
4 colour usability               PASS   []
5a splash <=3 per colour         PASS   []
5b splashed cards are candidates PASS   []
```
