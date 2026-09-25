---
deck_name: "gw-crusade-counters"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-08-27T14:35:09Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  4x Forest                                       basic
  8x Plains                                       basic
  2x Evolving Wilds                               fetches a basic, enters tapped
  1x Overgrown Farmland                           G/W dual, untapped with 2+ other lands
  2x Radiant Grove                                G/W dual, enters tapped
```

### CREATURES (8)
```
CMC  Card                                       Qty   Color  Role                         Rar
  1  Lunarch Veteran // Luminous Phantom         x1    W      Enabler/Fodder               C
  2  Cathar Commando                             x1    W      Interaction/Disruption       C
  2  Hamlet Captain                              x2    G      Payload/Payoff               U
  3  Dauntless Cathar                            x1    W      Enabler/Fodder               C
  3  Mentor of the Meek                          x2    W      Infrastructure/Consistency   U
  3  Torens, Fist of the Angels                  x1    WG     Engine/Outlet                R
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                                       Qty   Color  Role                         Rar
  2  Duel for Dominance                          x1    G      Interaction/Disruption       C
  2  Gather the Townsfolk                        x2    W      Enabler/Fodder               C
  2  Join the Dance                              x2    WG     Enabler/Fodder               U
  2  Travel Preparations                         x1    G      Payload/Payoff               U
  2  Valorous Stance                             x1    W      Interaction/Disruption       U
  3  Clear Shot                                  x1    G      Interaction/Disruption       U
  3  Lingering Souls                             x2    W      Enabler/Fodder               U
```

### OTHER SPELLS (5)
```
CMC  Card                                       Qty   Color  Role                         Rar
  2  Intangible Virtue                           x1    W      Payload/Payoff               U
  3  Angel's Tomb                                x1    C      Standalone Threat            U
  3  Cathar's Call                               x1    W      Engine/Outlet                U
  3  Wedding Announcement // Wedding Festivity   x1    W      Engine/Outlet                R
  5  Cathars' Crusade                            x1    W      Payload/Payoff               R
```

## SIDEBOARD (10)
```
Card                                        Qty   Color  Rar  Role / When to board in
Cathar Commando                             x1    W      C    the second copy vs artifact and enchantment decks; '{1}, Sacrifice this creature: Destroy target artifact or enchantment' answers a permanent this deck otherwise cannot touch, off a 3/1 flash body. Capped at 1 here because one copy is already maindecked and commons are limited to 2 total across both boards.
Noose Constrictor                           x2    G      U    vs the cube's 58 evasion cards (20.9%), which the mainboard cannot block at all: 'Reach' is the only way a G/W ground board interacts with a flier, and 'Discard a card: this creature gets +1/+1 until end of turn' turns flooded lands into blocking size. This replaces Ambush Viper, whose printed text is only 'Flash. Deathtouch' - no reach, so it could never block the threat class it was boarded for.
Valorous Stance                             x1    W      U    the second copy vs removal-heavy decks: 'Target creature gains indestructible until end of turn' protects a Crusade-grown creature from a targeted kill spell at the moment it matters, and the other mode kills a toughness-4-or-greater wall.
Angelic Purge                               x2    W      C    vs the cube's 24 artifacts and 25 enchantments: 'Exile target artifact, creature, or enchantment'; a spare token pays the sacrifice cost, and sacrificing a token that Cathars' Crusade has already grown costs nothing the board misses.
Thalia, Heretic Cathar                      x1    W      R    vs slower midrange and control: 'Creatures and nonbasic lands your opponents control enter tapped' buys the growing board a full extra attack step, and every dual in this cube is a nonbasic.
Slayer of the Wicked                        x2    W      U    vs the cube's three largest non-Human tribes (Vampire 23, Zombie 15, Werewolf 13 = 51 cards): 'you may destroy target Vampire, Werewolf, or Zombie' on a 3/2 Human body, so it is also a Crusade trigger.
Soul-Guide Gryff                            x1    W      C    vs graveyard decks (75 cards, 27% of the cube): 'When this creature enters, exile up to one target card from a graveyard' - the only graveyard answer in G/W, and it arrives on a 3/4 flying body that also triggers Cathars' Crusade.
```

## ANALYSIS

### DECK IDENTITY

A G/W deck that makes the whole board permanently bigger every time anything enters. Ten of its twenty-three nonland copies create creature tokens and eight are creature cards, so Cathars' Crusade - 'Whenever a creature you control enters, put a +1/+1 counter on each creature you control' - fires several times a turn rather than once. Join the Dance and Gather the Townsfolk each resolve as TWO separate enter-the-battlefield events, Lingering Souls adds two more plus the deck's only flying bodies, and Torens converts every creature spell into a further token and trigger. Mentor of the Meek turns that same stream of entries into cards, because every token ENTERS at power 1 - Crusade's counters arrive afterwards, from a separate trigger. The kill is ordinary combat damage from a board that has quietly become several sizes too large to block.

### THE ENTRY EVENT vs THE COUNTER — THE RULING THIS DECK IS BUILT ON

Cathars' Crusade is a *triggered ability*: "Whenever a creature you control enters, put a +1/+1 counter on each creature you control." The trigger goes on the stack **after** the creature has already entered, and only puts counters on when it resolves. Two consequences run through the whole list, and I got both of them wrong in the first draft before the self-grill corrected me:

1. **Tokens always ENTER as 1/1s.** No matter how many Crusade triggers have already resolved, a Human token from Gather the Townsfolk enters at power 1. That is why **Mentor of the Meek** — "Whenever another creature you control with power 2 or less **enters**" — triggers on roughly 31 of this deck's ~33 possible entry events. The only two exceptions are Dauntless Cathar's 3/2 body and Cathar Commando's 3/1 body.
2. **Powers DIVERGE, they don't converge.** Each trigger counters the creatures you control *at that moment*, so a token arriving on trigger #6 has one counter while one that has been there since trigger #1 has six. That is why **Duel for Dominance**'s Coven clause — "three or more creatures with different powers" — is live on essentially every board from turn 3, and it is also why the +1/+1 counter resolves *before* the fight, so Hamlet Captain fights as a 3/3.

### WHAT THE TRIGGER COUNT ACTUALLY IS

It is tempting to quote one big number. The honest version has two:

| Figure | Value | What it means |
|---|---|---|
| Whole-deck ceiling | ~33 entry events | Every ETB the 23 nonland copies can produce if the entire deck is drawn and cast — including both Join the Dance flashbacks and up to 8 Torens tokens |
| At the thesis turn (7) | ~9–11 triggers | The structural gate sees 14 cards, i.e. about 8 nonland copies drawn |

And a counter count is *not* the trigger count: after 30 triggers the oldest creature has ~30 counters and the newest has 1. An earlier version of this record said "30 counters on every creature in play", which is not a board state that can exist.

### THE HUMAN DENOMINATOR

Hamlet Captain reads "other **Humans** you control get +1/+1 until end of turn", and this deck is almost entirely Human by accident of the cube: **all 8** of its nontoken creature copies are Humans by type line — Lunarch Veteran (Human Cleric), Hamlet Captain ×2 (Human Warrior), Cathar Commando (Human Soldier), Mentor of the Meek ×2 (Human Soldier), Dauntless Cathar (Human Soldier), Torens (Human Cleric). On the token side, Gather the Townsfolk, Join the Dance, Torens, Cathar's Call and Wedding Announcement all make Humans. Only Lingering Souls' four Spirits and Dauntless Cathar's one are not. Human is the largest tribe in this cube at 53 cards, and this deck fell into it without trying.

### WHY LINGERING SOULS IS HERE AND MAUSOLEUM GUARD ISN'T

Both are uncommons, both make Spirit tokens, and the first draft ran the Guard. The count that decided it:

| | Mana for 2 copies | Immediate triggers | Gated triggers | Flying bodies |
|---|---|---|---|---|
| Mausoleum Guard ×2 | 8 | 2 | 4 (on death) | 0 |
| Lingering Souls ×2 | 6 | 4 | 0 | 4 |

Lingering Souls' `Flashback {1}{B}` is **dead** here — this deck has zero black sources — so it is credited at nothing, and it still wins. The flying matters separately: the cube holds 58 evasion cards (20.9%), and before this swap the mainboard had **zero** fliers.

### THE SWEEPER MATH NOBODY LIKES

The cube has four sweepers, not one, and three are pointed at exactly this deck:

- **Savage Alliance** — "deals 1 damage to each creature target opponent controls" for three mana, one-sided, and it kills every 1/1 before Crusade lands.
- **Smoldering Werewolf** — ETB pings two creatures.
- **Vanquish the Horde** — "costs {1} less to cast for each creature on the battlefield." On an eight-body board that is a **two-mana** Destroy all creatures. This deck pays down its own wrath.

The only real hedge available in G/W is a permanent that isn't a creature. **Angel's Tomb** is that card: an artifact, so all four miss it, and it re-animates as a 3/3 flier the moment the next creature enters. Note the honest limit — its animation lasts "until end of turn" and triggers on *your* creature entering, so it attacks and survives wraths; it does not reliably block.

### SLOT ALLOCATION

Nonland cards: **23**

| Slot | % of nonland | Count | Rationale |
|---|---|---|---|
| Interaction | 17.4% | 4 | Clear Shot, Duel for Dominance, Valorous Stance, Cathar Commando. Above the 10-15% aggro band by 2.4pp. Grounded: Clear Shot and Duel for Dominance are both fights, and a fight scales with the Crusade counters already on the board, so this bucket gets better the longer the payoff has been down. Duel for Dominance is the cheaper at {1}{G}; its 'Then the chosen creatures fight each other' clause is unconditional - only the +1/+1 counter is Coven-gated, and Coven resolves the counter BEFORE the fight, so Hamlet Captain fights as a 3/3. Cathar Commando is the only answer to a noncreature permanent and is also a body. |
| Threats/Payoffs | 60.9% | 14 | Every card whose deck-array role is Enabler/Fodder, Payload/Payoff or Standalone Threat: Gather the Townsfolk x2, Join the Dance x2, Lingering Souls x2, Dauntless Cathar, Lunarch Veteran, Hamlet Captain x2, Intangible Virtue, Travel Preparations, Angel's Tomb, Cathars' Crusade. Above the 45-55% band by 5.9pp. Under this payoff a threat and a payoff are frequently the same object - a token maker is a body AND the trigger that grows the team - but that argument does not cover everything here, so the bucket was trimmed rather than inflated: Intangible Virtue and Travel Preparations create no token and fire no trigger, and are at one copy each for exactly that reason. |
| Engine & Infrastructure | 21.7% | 5 | Torens, Cathar's Call, Wedding Announcement, Mentor of the Meek x2. Above the 0-10% band by 11.7pp, and this is the deliberate result of the grill. Before the repair the deck had ONE draw source in 23 nonland copies and its own gas-out entry admitted it. Mentor of the Meek is not a generic value card here: 'another creature you control with power 2 or less enters' is checked on the ENTRY event, and every token this deck makes enters as a 1/1 regardless of how many Crusade triggers have resolved, so it converts essentially the whole ETB stream into cards. Torens, Cathar's Call and Wedding Announcement each produce a body every turn without spending a card. |

*4 + 14 + 5 = 23 = nonland_total, and every card is booked into the bucket matching its own role in the deck array. Two corrections are folded in here. The pre-grill version read 4 / 17 / 2 = 22 with Wedding Announcement booked nowhere, which reported an out-of-band Engine bucket as in-band. The first repair then read 4 / 13 / 6, which booked Lunarch Veteran into Engine while its deck-array role is Enabler/Fodder - the Challenger flagged that as the same class of mismatch at one-sixth the magnitude. This table books strictly by role.*

### LAND & PIP MATH

- **Land target trace:** `{"base_lands": 17, "base_window": [2, 4], "base_p_window": 0.7945, "avg_mv": 2.52, "reference_avg_mv": 2.5, "accel": 0, "adjustment": 0.027, "raw_target": 17.027, "clamped": false, "recommended_land_count": 17, "p_window_at_recommended": 0.7945}`
- **Recount after FILL:** Recomputed from the post-repair list: avg MV 2.52 -> 17 lands. No deviation.
- **Deviation:** none - built to 17
- **Composition:** Overgrown Farmland is 'This land enters tapped unless you control two or more other lands. {T}: Add {G} or {W}.' - per dossier.duals_by_pair.WG the pair's only untapped-capable dual, and it costs one of the five rare/mythic slots. Radiant Grove is 'Land - Forest Plains' with 'This land enters tapped' unconditionally, at 2 copies. Evolving Wilds x2 fetch either basic but produce no mana themselves, and the mana audit does not credit them as coloured sources; this record follows the audit's convention. Note that Radiant Grove's type line is 'Forest Plains', so it IS both a Forest and a Plains - relevant only if a land-type-matters card were run, and none is. Tempo cost, priced: 5 of the 17 lands cannot cast a two-drop on turn 2 - Radiant Grove x2 (enters tapped unconditionally), Evolving Wilds x2 (fetches a basic TAPPED), and Overgrown Farmland (tapped until you control two other lands). That is 29% of the manabase in a deck with 11 two-drops of 23 nonland copies. Per dossier.mana_infrastructure the pool holds only these two G/W duals and both enter tapped, so the cost is forced by the cube, not chosen - but the screw entry now states it rather than assuming a turn-2 play is always available.
- **Pips:** 18 white pips and 8 green pips (69% / 31%) across the 23 nonland cards. Two flashbacks add demand that mana_cost does not carry: Travel Preparations' 'Flashback {1}{W}' adds 1 white, and Join the Dance's 'Flashback {3}{G}{W}' adds 2 green and 2 white across its two copies. Lingering Souls' 'Flashback {1}{B}' is DEAD - black is not a colour of this deck - and is counted as 0. True demand is therefore 21W/10G, still 68/32. Land split: 8 Plains, 4 Forest, 1 Overgrown Farmland, 2 Radiant Grove, 2 Evolving Wilds = 17. On the audit's convention (Evolving Wilds not credited as a coloured source) that is 11 white and 7 green, gaps of +4.5pp and -10.4pp, both inside the 15pp tolerance. The only double-pip card is Cathars' Crusade's {3}{W}{W} at five mana, which 11 white sources support by turn 5.

### COUNT-DEPENDENT VERDICTS

| Card | Verdict | Count against this list |
|---|---|---|
| Cathars' Crusade | INCLUDE x1 | The anchor. Trigger ceiling against this list: counting every enter-the-battlefield event the 23 nonland copies can produce if the entire deck is drawn and cast - Lunarch Veteran 1 (+1 disturbed), Gather 4, Join the Dance 8, Lingering Souls 4, Hamlet Captain 2, Cathar Commando 1, Torens body 1, Dauntless Cathar 2, plus up to 8 Torens tokens and 1 per turn from Cathar's Call and Wedding Announcement - gives roughly 33 as a WHOLE-DECK CEILING. The pre-grill version of this verdict then said '30 counters on every creature in play', which is false and the Challenger was right to reject it: Crusade puts a counter on each creature you control at the moment each trigger RESOLVES, so a token created on the 28th trigger receives one counter, not thirty. At the thesis turn the structural gate sees 14 cards, i.e. roughly 8 nonland copies drawn, which is about 9-11 triggers - the oldest creature holding around 10 counters and the newest 1. |
| Torens, Fist of the Angels | INCLUDE x1 | 'Whenever you cast a creature spell, create a 1/1 green and white Human Soldier creature token with training.' 8 of the 23 nonland copies are creature spells (Lunarch Veteran, Hamlet Captain x2, Cathar Commando, Mentor of the Meek x2, Dauntless Cathar, Torens itself), so it converts about a third of the deck into a second trigger each. |
| Mentor of the Meek | INCLUDE x2 (reversed at Phase 9) | The pre-grill cut claimed that under Cathars' Crusade 'every token enters and immediately becomes a 4/4, and a token that ENTERS at power 3 or more never triggers it at all'. That is an oracle misreading and the Challenger reproduced why: Mentor checks 'another creature you control with power 2 or less ENTERS' on the entry event, while Cathars' Crusade is a separate triggered ability that goes on the stack after the entry and only then puts counters on. Tokens therefore ALWAYS enter as 1/1s and always trigger Mentor, no matter how many Crusade triggers have already resolved. Count: roughly 31 of the ~33 ceiling ETB events qualify - the only two that do not are Dauntless Cathar's 3/2 body and Cathar Commando's 3/1 body, both power 3 at entry. (An earlier draft named only Dauntless Cathar; the Challenger caught the second.) Against a list that had 1 draw source in 23 copies, at zero rare cost, and as a Human body that is itself a trigger. |
| Duel for Dominance | INCLUDE x1 (reversed at Phase 9) | The pre-grill cut claimed Crusade 'puts a counter on EACH creature simultaneously, so the board converges on a single shared power'. The opposite is true: Crusade counters each creature you control at the time a given trigger resolves, so a creature that arrives on trigger #6 has one counter while one present since trigger #1 has six - powers DIVERGE monotonically. Add the divergent printed bases already in the list (1/1 tokens, Hamlet Captain 2/2, Cathar Commando 3/1, Dauntless Cathar 3/2) and Coven's 'three or more creatures with different powers' is live on essentially every board from turn 3. Second correction: Coven gates only the +1/+1 counter - 'Then the chosen creatures fight each other' is unconditional - so it is a {1}{G} fight, one mana cheaper than Clear Shot. |
| Lingering Souls | INCLUDE x2 (reversed at Phase 9) | The pre-grill cut compared it to Join the Dance, which is already at its 2-copy cap; the Challenger pointed out the relevant comparison is against what actually held the slot, Mausoleum Guard x2. Lingering Souls: 6 mana for both copies, 4 IMMEDIATE triggers, and the four bodies fly. Mausoleum Guard: 8 mana for both copies, 2 immediate triggers plus 4 gated on the Guards dying - which this build's own assembly check discounted to weight 0.7 twice. The flying matters independently: against dossier.threat_profile.evasion's 58 cards (20.9% of the cube) this deck otherwise fields 0 fliers. Its 'Flashback {1}{B}' is dead at 0 black sources and is credited at nothing. |
| Angel's Tomb | INCLUDE x1 (reversed at Phase 9) | Batch-cut pre-grill on the reason that colourless artifacts 'do not care about a creature entering', which is the literal negation of its trigger: 'Whenever a creature you control enters, you may have this artifact become a 3/3 white Angel artifact creature with flying until end of turn.' It reads the exact quantity this deck maximises - roughly 30 ceiling ETB events - so it animates on nearly every turn from turn 4. Two further counts: it is a NONCREATURE permanent, so all 4 of the cube's sweepers miss it, which is the direct fix for the disruption-fizzle mode; and it is a flier in a list that otherwise has only Lingering Souls' Spirits. |
| Lunarch Veteran // Luminous Phantom | INCLUDE x1 (added at Phase 9) | 'Whenever another creature you control enters, you gain 1 life' reads the deck's central quantity - roughly 30 ceiling ETB events - and Disturb {1}{W} gives a second body from the same card. It is also a genuine one-drop Human, against a turn-1 play rate the pre-grill build accepted at 18% on the false grounds that Thraben Inspector was 'the only one-drop in the slice that advances this payoff'. |
| Thraben Inspector | CUT (reversed at Phase 9) | Its Clue was the deck's only card draw, which is why it was in. Mentor of the Meek x2 now does that job at a far higher rate (every power-2-or-less entry rather than one Clue), so the Inspector's draw is redundant, and Lunarch Veteran occupies the one-drop slot with text that reads the deck's own ETB count. A Clue is also an artifact token, so Intangible Virtue does not pump it. |
| Mausoleum Guard | CUT (reversed at Phase 9) | See the Lingering Souls verdict: 8 mana for both copies against 6, 2 immediate triggers against 4, and 0 flying bodies against 4. |
| Intangible Virtue | INCLUDE x1 (reduced from x2 at Phase 9) | 'Creature tokens you control get +1/+1 and have vigilance.' 10 of the 23 nonland copies make creature tokens and the tokens outnumber nontoken creatures roughly two to one, so the anthem covers most of the board. Reduced to one copy because the Challenger correctly noted it creates no token and generates no Crusade trigger, so it is one of the few Threats/Payoffs cards the 'threat and payoff are the same object' argument does not cover. |
| Travel Preparations | INCLUDE x1 (reduced from x2 at Phase 9) | 'Put a +1/+1 counter on each of up to two target creatures. Flashback {1}{W}' - four PERMANENT counters from one card across two casts, and the only counter source in the list that survives Cathars' Crusade being answered. Reduced to one copy for the same reason as Intangible Virtue: it makes no body and fires no trigger. |
| Hamlet Captain | INCLUDE x2 | 'Whenever this creature attacks or blocks, other Humans you control get +1/+1 until end of turn.' Human count against the post-repair list: ALL 8 nontoken creature copies are Humans by type line - Lunarch Veteran (Human Cleric), Hamlet Captain x2 (Human Warrior), Cathar Commando (Human Soldier), Mentor of the Meek x2 (Human Soldier), Dauntless Cathar (Human Soldier), Torens (Human Cleric). The earlier '6 of the 8' was an understatement the Challenger corrected; the Spirits it referred to are Lingering Souls' TOKENS, not nontoken copies. On the token side the Human makers are Gather the Townsfolk (4), Join the Dance (8 with flashback), Torens, Cathar's Call and Wedding Announcement; only Lingering Souls' 4 Spirits and Dauntless Cathar's 1 Spirit are not Humans. Roughly three quarters of every board. |
| Young Wolf | CUT | Undying reads 'if it had no +1/+1 counters on it', and Cathars' Crusade switches that off. The pre-grill verdict said 'permanently switched off after the very first trigger following Young Wolf's arrival', which the Challenger correctly narrowed: that requires Crusade to be ON THE BATTLEFIELD, and Crusade is 1 of 23 copies at five mana - roughly 30% to have been drawn by turn 5. So in most games the anti-synergy has not begun to bind when Young Wolf is relevant. It stays cut on the narrower ground that its {G} cost sits against 7 green sources in 17 lands and the deck's white-primary curve wants its one-drop slot on a white card (Lunarch Veteran), but the earlier overstatement is retracted. |
| Crusader of Odric | CUT | Its size is the creature count, which this deck supplies - but Cathars' Crusade already makes every creature that size permanently, while Crusader shrinks the moment the board is answered. |
| Tireless Tracker | CUT | Its Clue engine is real (17 landfall triggers over a long game), but a Clue is an artifact token: 0 of the Intangible Virtue copies pump it and it is not a creature entering, so it generates 0 Crusade triggers and 0 Mentor triggers. It also costs a rare slot, and all 5 are spent. |
| Ulvenwald Mysteries | CUT | 'Whenever a NONTOKEN creature you control dies, investigate' - 8 of 23 nonland copies are nontoken creatures, and converting a Clue into a Human Soldier costs a further {2}. Cathar's Call makes a body every turn for no further mana and no deaths required. |
| Metallic Mimic | CUT | Naming Human would hit roughly 20 of the ~26 tokens this list makes (Gather 4, Join the Dance 8, Torens up to 8, Cathar's Call and Wedding Announcement one per turn; only Lingering Souls' and Dauntless Cathar's 6 Spirits are not Humans) - about 77%. The pre-grill figure of '12 of ~18' understated this and the Challenger corrected it. The cut stands solely on the rare budget: 5 of 5 spent. |
| Somberwald Sage | CUT | 'Spend this mana only to cast creature spells' - only 8 of 23 nonland copies are creature spells (35%), so more than half the deck cannot use its mana, and the curve tops at five. |
| Eldritch Evolution | CUT | 'a creature card with mana value X or less, where X is 2 plus the sacrificed creature's mana value' - a token's mana value is 0, so off this deck's most expendable bodies it finds a 2-drop, and its most expensive creature is a 3-drop. |
| Duskwatch Recruiter // Krallenhorde Howler | CUT | Its dig hits creature cards only - 8 of 23 nonland copies - so it misses Cathars' Crusade, Intangible Virtue, Travel Preparations, both Join the Dance and both Gather the Townsfolk, which is where this deck's power is. |
| Spider Spawning | CUT | 'for each creature card in your graveyard' - this deck's bodies are tokens, which cease to exist rather than becoming graveyard cards, so the denominator is only the 8 nontoken creature copies, and only after they die. |
| Moldgraf Millipede | CUT | Same graveyard-creature denominator: 8 nontoken copies. |
| Splinterfright | CUT | Same graveyard-creature denominator: 8 nontoken copies. |
| Voice of the Blessed | CUT | 'Whenever you gain life, put a +1/+1 counter on this creature' - lifegain triggers in the post-repair mainboard: Lunarch Veteran's, which fires on every creature entry. That is a real count and better than the pre-grill zero, but Voice of the Blessed is a rare and all 5 slots are spent. |
| Strength of Arms | CUT | The token clause needs an Equipment; this mainboard contains 0 Equipment. |
| Hopeful Initiate | CUT | The Challenger raised this as an absence and the count is real: this deck produces 27+ counters, so paying two is a small fraction of one turn's production, and per dossier.threat_profile it is one of only TWO enchantment answers in the entire 305-card pool (the other being Cathar Commando, which sacrifices itself while this is repeatable). It stays cut on the rare budget alone - 5 of 5 spent on Cathars' Crusade, Torens, Wedding Announcement, Overgrown Farmland and Thalia - and Cathar Commando covers the class in the mainboard. |
| Mayor of Avabruck // Howlpack Alpha | CUT | 'Other Human creatures you control get +1/+1' has the same excellent Human denominator as Hamlet Captain, but it is a rare and the budget is spent. Hamlet Captain is the uncommon doing the same job at two copies. |
| Odric, Lunarch Marshal | CUT | Harvested from the rejected reach-and-evasion sketch and reconsidered after Lingering Souls was maindecked, which gives the list 4 flying bodies and so satisfies Odric's condition. It stays cut on the rare budget: 5 of 5 spent, and Angel's Tomb provides a flier at uncommon for no rare cost. |
| Rally the Peasants | CUT | '+2/+0 until end of turn' is a one-shot on a board Cathars' Crusade has already made permanently larger. |
| Wrenn and Seven | CUT | A mythic against a spent budget, and its -3 makes ONE token sized by land count rather than several tokens; this payoff wants many small entries, not one large body. |
| Garruk Relentless // Garruk, the Veil-Cursed | CUT | A mythic against a spent budget. Its 2/2 Wolf per turn is one trigger per turn, the same rate as Cathar's Call at {2}{W} and a common. |
| Pack Guardian | CUT | {2}{G}{G} is the only double-green cost considered, against 7 green sources in 17 lands. |
| Cryptolith Rite | CUT | It would let this deck's bodies tap for mana, a real count - but the curve tops at five and the deck has no mana sink, so the mana has nothing to buy. It is the anchor of a different pipeline in this cube. |
| Second Harvest | CUT | 'For each token you control, create a token that's a copy of that permanent' would fire Cathars' Crusade once per copy, the largest trigger burst available - but at {2}{G}{G} against 7 green sources, and a rare against a spent budget. |
| Sigarda, Host of Herons | CUT | A mythic at {2}{G}{W}{W}, above this curve, answering a sacrifice class this cube barely fields. |
| Twinblade Geist // Twinblade Invocation | CUT | Double strike doubles every Crusade counter on the creature carrying it - the best per-card multiplier in the slice - but on ONE creature, against 13 Threats/Payoffs copies that widen or grow the whole board. |
| Butcher Ghoul | CUT (splash declined) | Same undying / Crusade interaction as Young Wolf, plus {1}{B} against 0 black sources. |
| Crawl from the Cellar | CUT (splash declined) | Its counter clause targets a Zombie; this mainboard has 0 Zombie cards, and 0 black sources. |
| Indulgent Aristocrat | CUT (splash declined) | 'Put a +1/+1 counter on each Vampire you control' - 0 Vampire cards in this mainboard, and 0 black sources. |
| Dawnhart Disciple | CUT | 'Whenever another Human you control enters, this creature gets +1/+1 UNTIL END OF TURN' - the same excellent Human denominator as Hamlet Captain but the bonus is temporary and applies only to itself, where Hamlet Captain's applies to every other Human. |
| Intrepid Provisioner | CUT | 'another target Human you control gets +2/+2 until end of turn' - one Human, one turn, at {3}{G} against 7 green sources. |
| Inspiring Captain | CUT | 'creatures you control get +1/+1 until end of turn' is a one-shot version of what Cathars' Crusade and Wedding Festivity do permanently, at four mana. |
| Lumberknot | CUT | 'Whenever a creature dies, put a +1/+1 counter on this creature' - this deck's creatures mostly do not die on purpose; it has no sacrifice outlet at all, so the denominator is combat deaths only. |
| Festerhide Boar | CUT | 'Morbid - enters with two +1/+1 counters if a creature died this turn' - with 0 sacrifice outlets in the list the morbid condition is met only after combat, so on a proactive turn it is a vanilla 3/3 for four. |
| Tamiyo's Journal | CUT | {5} for one Clue per upkeep, and a Clue is an artifact token: 0 Crusade triggers, 0 Mentor triggers, and not pumped by Intangible Virtue. It is also a rare against a spent budget. |
| Howlpack Resurgence | CUT | 'Each creature you control that's a Wolf or a Werewolf gets +1/+1 and has trample' - Wolf and Werewolf count in this mainboard: 0 of 23. |
| Fiend Hunter | CUT | The Challenger raised this as an absence and the gap it names is real: before Cathars' Crusade resolves, Clear Shot off a 1/1 token deals only 2, so the list has a hole against toughness-3 creatures in the first five turns. Duel for Dominance was added at {1}{G} rather than Fiend Hunter at {1}{W}{W} because the double-white cost on turn three competes directly with Lingering Souls, Cathar's Call and Wedding Announcement, all {2}{W}, and because Fiend Hunter's 'When this creature leaves the battlefield, return the exiled card' hands the creature back when it trades in combat - which a 1/3 in a token deck does often. |
| Angel's Tomb | INCLUDE x1 (moved out of considered_but_excluded at Phase 9) | 'Whenever a creature you control enters, you may have this artifact become a 3/3 white Angel artifact creature with flying until end of turn.' It reads the exact quantity this deck maximises - roughly 33 ceiling ETB events - so it animates on nearly every turn from turn 4. Two further counts: it is a NONCREATURE permanent, so all 4 of the cube's sweepers miss it, which is the mitigation for the disruption-fizzle mode; and it is a flier in a list whose only other evasion is Lingering Souls' Spirits. One honest limit, per the Challenger: because the animation lasts 'until end of turn' and triggers on YOUR creature entering, it is an attacker and a sweeper hedge, not a reliable blocker - blocking with it requires an instant-speed body, which in this list is only Cathar Commando's flash. |

### SKELETON SELECTION (Phase 5B Step 0)

- **Archetype family:** aggro — Locked thesis default_role = aggressor, and the payoff makes the whole board permanently larger every time a creature enters - the win is combat damage from that board. That is aggro's damage model at a slower curve, not tempo's protected clock.
- **Chosen:** Sketch 1 — lens `lowest-curve / most explosive`
- **Judge grounds:** Every keystone (Join the Dance, Gather the Townsfolk, Mausoleum Guard, Torens, Crusade) is a literal double or multiplied ETB generator with no conditional or off-colour text, delivering the quadratic-trigger, ground-stats kill mechanism on the fastest schedule consistent with goldfish turn 7 and the lowest rarity exposure (2 of 5).
- **Rejected** (`most reach & evasion`, family aggro): Judge: coherent and well-supported, but the locked thesis states 'damage is dealt on the ground by a board of permanently oversized bodies' - team-wide flying and trample answers a problem the thesis's own kill description already presumes solved by raw size, making evasion a solution to an unstated problem.
- **Rejected** (`most resilient to sweepers`, family aggro): Judge: the resilience lens front-loads slower, grindier pieces (Wedding Announcement's end-step trickle, Dauntless Cathar's one-at-a-time graveyard recursion) against a turn-7 aggressor clock, carries the highest rarity budget (4 of 5), and assigns Lingering Souls a role its usable text cannot deliver.
- **Harvested from rejected builds:** Wedding Announcement // Wedding Festivity (from `most resilient to sweepers`, Engine/Outlet); Dauntless Cathar (from `most resilient to sweepers`, Enabler/Fodder); Cathar's Call (from `most resilient to sweepers`, Engine/Outlet); Odric, Lunarch Marshal (from `most reach & evasion`, considered, rejected); Lingering Souls (from `most resilient to sweepers`, Enabler/Fodder)
- **Weak keystones:** none

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:1  2:11  3:10  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5: Wedding Announcement // Wedding Festivity@0.6, Hamlet Captain@0.7, Hamlet Captain@0.7) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.3: Cathar's Call@0.8, Dauntless Cathar@0.7, Lunarch Veteran // Luminous Phantom@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 18%  T2 92%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Cathars' Crusade answers a wide board by out-sizing it rather than removing it: every creature that enters makes the whole team permanently bigger, so an opposing swarm of 1/1s and 2/2s cannot block profitably by turn 5. The pool's only mass -X/-X effects (The Meathook Massacre, Killing Wave) are black, outside the core colours, and both are symmetric against the board this deck builds. The cost of conceding is that a token deck that goes wider AND faster races us; Slayer of the Wicked x2 and Noose Constrictor x2 are the sideboard response.
  OK        single_large_threat: Clear Shot, Valorous Stance, Duel for Dominance
  OK        noncreature_permanents: Cathar Commando
  CONCEDED  stack: G/W fields no counterspell anywhere in this pool, so nothing can be declared here. The concession costs this deck its only proactive answer to a combo turn; it accepts that in exchange for keeping all 23 nonland slots on bodies, counters and removal, which is what makes the turn-7 clock.
  CONCEDED  graveyard: The only graveyard answer in the core colours is Soul-Guide Gryff at {4}{W} ('When this creature enters, exile up to one target card from a graveyard'), which is a five-mana card in a list whose curve tops at five with the payoff itself. It is in the sideboard rather than the mainboard; maindecking it would cost a two-mana Crusade trigger for a one-shot exile.
```

- No WARN-tier flags after the Phase 9 repair: curve PASS (1:1 2:11 3:10 5:1 across 23 nonland) and goldfish PASS (86% keepable, 91% three lands by turn 3, T2 play 92%).
- Turn-1 play rate is 18%, the lowest of the four decks. The pre-grill note accepted this on the false grounds that Thraben Inspector was 'the only one-drop in the slice that advances this payoff' - the Challenger listed three more (Lunarch Veteran, Hopeful Initiate, Strength of Arms, plus Young Wolf). Lunarch Veteran is now maindecked in that slot. The rate stays 18% because it is still one copy: the honest reason is that this deck's real curve starts on turn 2, where Gather the Townsfolk and Join the Dance each produce TWO Crusade triggers for two mana, and a second one-drop would cost one of those.
- Assembly: payoff 6 copies / 5.0 effective -> p=0.85, enabler 10 copies / 9.3 effective -> p=0.98, both against a 0.75 threshold at thesis turn 7. Payoff copies fell from 8 to 6 in the repair because Intangible Virtue and Travel Preparations went to one copy each; the gate still clears by 0.10.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Nine of the 23 nonland copies convert surplus mana into board or cards: Cathar's Call and Wedding Announcement each make a body every end step for no further mana; Join the Dance x2 has 'Flashback {3}{G}{W}'; Travel Preparations has 'Flashback {1}{W}'; Dauntless Cathar has '{1}{W}, Exile this card from your graveyard'; Lunarch Veteran has 'Disturb {1}{W}'; and Mentor of the Meek x2 turns every spare {1} into a card. (The pre-grill figure said 5 and the first repair said 8; both undercounted their own enumeration - the Challenger caught it twice.) |
| screw | mitigation | 12 of the 23 nonland cards cost 2 or less, so a two-land hand deploys Gather the Townsfolk or Join the Dance - each of which is TWO bodies - on turn 2. Goldfish: 86% keepable, 91% three lands by turn 3. The real cost, now priced: 5 of the 17 lands enter tapped (Radiant Grove x2, Evolving Wilds x2, Overgrown Farmland until you control two other lands), so 29% of draws cost the turn-2 play this mitigation depends on. The pool offers no untapped G/W dual other than Overgrown Farmland, so this is forced by the cube rather than chosen. |
| decapitation | accepted | Cathars' Crusade is 1 of 23 copies and no second copy exists under the one-per-rare rule, so the namesake payoff can be answered on sight. Mitigating would mean building around a redundant payoff, which is a different deck. The cost is bounded: 5 of the 6 payoff copies are not Cathars' Crusade - Intangible Virtue and Travel Preparations add size Crusade's removal does not undo (Travel Preparations' counters are permanent), Hamlet Captain x2 pumps the Human majority every attack, and Wedding Festivity is a flat team anthem. Without Crusade this is still a token-aggro deck, only a slower one. |
| gas-out | mitigation | This is the mode the grill changed most. Mentor of the Meek x2 is the engine: 'Whenever another creature you control with power 2 or less enters, you may pay {1}. If you do, draw a card' fires on essentially every entry, because tokens ENTER as 1/1s and Crusade's counters arrive afterward from a separate trigger. Behind it: Cathar's Call and Wedding Announcement each make a body every turn from an empty hand; Join the Dance x2, Travel Preparations and Lingering Souls x2 are each two casts from one card; Lunarch Veteran disturbs back. That is 10 of 23 nonland copies producing more board or cards than the one card spent. |
| raced | mitigation | Clear Shot and Duel for Dominance are both fights that scale with the Crusade counters already on the board, so a 5/5 token kills the opposing clock's best creature at instant speed while staying on the battlefield. Intangible Virtue's vigilance means tokens that attacked still block the crack-back, and Valorous Stance answers a toughness-4+ attacker outright. The gap the grill exposed and this repair closes: the pre-repair list had ZERO flying blockers against dossier.threat_profile.evasion's 58 cards. Lingering Souls x2 now supplies four real flying BLOCKERS, and the sideboard's Noose Constrictor x2 has reach - where the Ambush Viper it replaced had only 'Flash. Deathtouch' and could not block a flier at all. Angel's Tomb is deliberately not counted here: its animation is 'until end of turn' and triggers on your own creature entering, so it is an attacker and a sweeper hedge rather than a fifth blocker. |
| disruption-fizzle | accepted | There is no single critical turn to interact with - the counters accrue permanently, one trigger at a time, so there is no stack to break. The real exposure is a sweeper resolving BEFORE Cathars' Crusade lands, which sets the count to zero. Priced correctly this time: dossier.threat_profile.sweepers.count is FOUR, not one - Vanquish the Horde, Savage Alliance, Smoldering Werewolf // Erupting Dreadwolf and Archangel Avacyn // Avacyn, the Purifier - and three of them are specifically anti-token. Savage Alliance's 'deals 1 damage to each creature target opponent controls' is a one-sided three-mana answer to a board of 1/1s, and Vanquish the Horde 'costs {1} less to cast for each creature on the battlefield', so this deck's own plan pays the wrath down - on an eight-body board it is a two-mana Destroy all creatures. The pre-grill entry called this 'one card in 300' and the Challenger correctly marked it UNSATISFIED. What is accepted, and its cost: fully mitigating would mean maindecking the sweeper-resilient package the shape judge rejected as too slow for a turn-7 clock. The partial mitigation taken instead is Angel's Tomb, a NONCREATURE permanent that all four sweepers miss and that re-animates as a 3/3 flier off the next creature to enter, plus Cathar's Call and Wedding Announcement, which rebuild bodies from an empty board. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Decimator of the Provinces | Emerge is 'reduced by that creature's mana value', and a creature token's mana value is 0 - this pipeline's board is tokens, so a go-wide board discounts {6}{G}{G}{G} by nothing. Hard cast is {10}. |
| It of the Horrid Swarm | Same emerge arithmetic: sacrificing a token reduces {6}{G} by 0, so it is a 7-mana 4/4 plus two 1/1s. Hard cast is {8}. |
| Soul Separator | {3} to cast plus '{5}, {T}, Sacrifice this artifact' is 8 mana across two turns, and it exiles a creature CARD from your graveyard - creature tokens cease to exist rather than becoming graveyard cards, so this pipeline supplies it with little. |
| Archangel Avacyn // Avacyn, the Purifier | Its back face 'deals 3 damage to each other creature and each opponent' and it transforms on the death of any non-Angel creature you control - which in this pipeline is every token. It would wipe its own board. Also a mythic against a 5-slot rare budget. |
| Sigarda, Host of Herons | {2}{G}{W}{W} is five mana with a WW requirement, above the curve ceiling a token-swarm build's land count supports, and 'Spells and abilities your opponents control can't cause you to sacrifice permanents' answers a class this cube has almost none of (2 edict effects). |
| Restoration Angel | A rare, and the 5 rare/mythic slots are contested by the pipeline's own payoffs; its blink re-uses one ETB for four mana while this list's Crusade triggers come four at a time off two-mana token spells. |
| Gisela, the Broken Blade | A mythic 4/3 flier that does nothing with +1/+1 counters or tokens; its meld partner Bruna, the Fading Light costs {5}{W}{W} and is outside this curve entirely. |
| Lupine Prototype | An ARTIFACT CREATURE - a 5/5 for {2} that does trigger Cathars' Crusade. The batch reason was false. Its real gate is a hand count: 'can't attack or block unless a player has no cards in hand.' This deck's gas-out plan is explicitly to keep drawing - Mentor of the Meek x2 turns essentially every creature entry into a card - so it is actively working to keep its own hand non-empty, and the opponent's hand is not under its control. Cut on that count, not on rate. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.03 adj [MV 2.52 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  30.8%  prod  41.2%  gap -10.4pp  [OK]
  W  demand  69.2%  prod  64.7%  gap  +4.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] base: cube_mainboard mainboard only
[PASS] copy_limits: commons/uncommons max 2 each across MB+SB combined, rares/mythics max 1 each - verified by _tmp_validate_build.py check 3 against cube_search.get_max_copies with an explicit per_rarity policy. Cathar Commando is 1 MB + 1 SB = 2, at the cap; Angelic Purge 2 SB; Valorous Stance 1 MB + 1 SB = 2.
[PASS] rare_mythic_cap: 5 total MB+SB. Used exactly 5: Cathars' Crusade (R, MB), Torens Fist of the Angels (R, MB), Wedding Announcement // Wedding Festivity (R, MB), Overgrown Farmland (R, MB land), Thalia Heretic Cathar (R, SB).
[PASS] basics: Plains 8 / Forest 4 - format-supplied, exempt from copy limits, not present in the cube list
[PASS] colour_usability: every nonland card returns a non-None effective_cost.best_mode against core_colors [G,W] with splash_colors []. No off-identity inclusions.
[PASS] splash: splash_colors = [] in the final deck; all three Phase 3 black candidates (Crawl from the Cellar, Indulgent Aristocrat, Butcher Ghoul) declined at FILL.
[PASS] deck_size: 40 mainboard (23 nonland + 17 land), 10 sideboard
```