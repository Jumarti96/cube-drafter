---
deck_name: "br-hellbent-burn-control"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-08-26T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x9 Mountain
  x6 Swamp
  x2 Geothermal Bog   BR dual, enters tapped
```

### CREATURES (11)
```
CMC  Card                                         Qty   Color  Role                                              Rar
  2  Asylum Visitor                               x2    B      Engine - hellbent refuel, madness 3/1             U
  2  Lupine Prototype                             x2    C      Payoff - 2-mana 5/5, hellbent-only attacker       U
  2  Olivia's Dragoon                             x2    B      Engine - free unlimited discard outlet            C
  2  Thermo-Alchemist                             x2    R      Engine - no-card damage, untaps on spells         U
  3  Stromkirk Occultist                          x2    R      Threat - madness 3/2 trample, refuels from exile  U
  4  Bloodhall Priest                             x1    BR     Payoff - hellbent 2 damage per attack             R
```

### INSTANTS & SORCERIES (12)
```
CMC  Card                                         Qty   Color  Role                                              Rar
  1  Faithless Looting                            x2    R      Engine - outlet + selection, flashback            C
  1  Lightning Axe                                x2    R      Interaction - outlet + 5 damage                   U
  2  Collective Brutality                         x1    B      Interaction - escalate discard, modal             R
  2  Infernal Grasp                               x2    B      Interaction - unconditional removal               U
  2  Murderous Compulsion                         x1    B      Interaction - madness removal                     C
  3  Collective Defiance                          x1    R      Interaction/Reach - self-wheel + burn             R
  3  Fiery Temper                                 x2    R      Interaction/Reach - madness {R} for 3             U
  5  Alchemist's Greeting                         x1    R      Interaction - madness 4 damage                    C
```

## SIDEBOARD (10)
```
Card                                         Qty   Color  Role / When to board in                                                                                                                                                                                                                                                                                    Rar
Abrade                                       x2    R      Artifact answer / 3 damage - vs the cube's 24 artifacts - Equipment, Vehicles and the Clue/Blood engines; 0 of 23 mainboard nonlands can destroy an artifact                                                                                                                                               U
Savage Alliance                              x2    R      Anti-wide micro-sweeper - vs the cube's 35 token-producing cards - the escalate mode deals 1 damage to each creature the OPPONENT controls, so unlike a symmetric sweeper it spares this deck's own 1-toughness bodies                                                                                     U
Eaten Alive                                  x2    B      Exile removal; the only planeswalker answer in these colours - vs planeswalkers and recursive threats - 5 of the cube's 7 planeswalkers are outside B/R and the mainboard's only answer to one is Collective Defiance's 3 damage; its sacrifice cost is fed by 11 creature copies                          C
Killing Wave                                 x2    B      Scaling sweeper that needs no self-board-out - vs go-wide and vs bigger creatures - X scales to the board, the payment taxes the life total this deck is already attacking, and unlike The Meathook Massacre it does not require boarding out Olivia's Dragoon                                             U
Invasion of Innistrad // Deluge of the Dead  x1    C      Removal that becomes graveyard hate - vs graveyard decks - 75 of 305 cube cards (24.6%) interact with graveyards and the back face's '{2}{B}: Exile target card from a graveyard' is the only repeatable answer available in these colours; the front face is a -13/-13 removal spell so it is never dead  R
Reforge the Soul                             x1    R      Refuel / mass madness trigger - vs attrition and control mirrors where running out of cards, not out of life, is how this deck loses                                                                                                                                                                       R
```

## ANALYSIS

### DECK IDENTITY

Black-red hellbent burn-control. The deck spends its hand deliberately and then gets paid for being empty: Bloodhall Priest deals 2 damage on every entry and every attack while you hold no cards, Asylum Visitor draws on each player's upkeep while a hand is empty, and Lupine Prototype is a two-mana 5/5 that only enters combat once somebody is hellbent. Stromkirk Occultist is the one refuel in the pool that does not undo that state - it exiles the top card and lets you play it, so the hand stays at zero. Twelve of the twenty-three nonland cards are instants or sorceries, which is also what untaps Thermo-Alchemist for a free point of damage per spell, and four madness costs are cheaper than their printed costs so the eight discard outlets convert an emptied hand into removal and reach rather than into card loss.

### THE ARCHETYPE'S CENTRAL TENSION

Hellbent decks are built on a contradiction: the payoffs want an empty hand, and card advantage wants a full one. Every card here is classified by which side of that tension it sits on.

| Card | Empties the hand | Refills the hand | Pays off an empty hand |
|---|---|---|---|
| Olivia's Dragoon | yes — free, unlimited, instant speed | no | no |
| Faithless Looting | yes — two per cast, twice per card | net 0 | no |
| Lightning Axe | yes — as an additional cost | no | no |
| Collective Brutality | yes — one per extra mode | no | no |
| Collective Defiance | yes | **yes, immediately** | no |
| **Stromkirk Occultist** | (madness) | **yes — from exile, hand stays at zero** | no |
| Asylum Visitor | (madness) | yes — only while empty | **yes** |
| Bloodhall Priest | (madness) | no | **yes** |
| Lupine Prototype | no | no | **yes** |

**Stromkirk Occultist is the resolution the first build missed.** "Whenever this creature deals combat damage to a player, exile the top card of your library. Until end of turn, you may play that card." The card is played from *exile*, so the hand never leaves zero — it is the only refuel in the entire pool that does not switch the payoffs off on the turn it fires. It was added at Phase 9 in place of Bloodmad Vampire, at identical cost ({2}{R}, madness {1}{R}), so the mana base did not move.

Asylum Visitor is the other half: the only card in the cube that refills *because* you are empty rather than in spite of it. That is why it is allocated to Engine despite genuinely being both.

Collective Defiance is the one card that works against the thesis and is kept anyway — it is here for its two burn modes (4 to a creature, 3 to the face), and the assembly gate discounts it to weight 0.6 as an outlet for exactly that reason.

### THE POOL CEILING THAT SHAPES THE WHOLE DECK

The cube contains **three** hellbent payoff cards, and at these multipliers that is a hard ceiling of **five copies**:

| Card | Rarity | Max copies |
|---|---|---|
| Asylum Visitor | uncommon | 2 |
| Lupine Prototype | uncommon | 2 |
| Bloodhall Priest | rare | 1 |

All five are in the deck. This is why Threats/Payoffs sits at 21.7% against a 5–10% control band: the band and the assembly gate are in direct conflict, and the gate is the one tied to whether the deck wins. At five copies the gate computes p=0.82 of finding a payoff by turn 7; at the band's own ceiling of two cards it would be **p=0.51**.

### THERMO-ALCHEMIST IS THE DECK'S QUIET WIN CONDITION

"Whenever you cast an instant or sorcery spell, untap this creature." Instants and sorceries here are **12 of 23 nonland cards (52.2%)** — the highest density of the three builds. Each untap is another "{T}: This creature deals 1 damage to each opponent", paid for with no card at all. Against a control mirror where both players are hellbent and topdecking, two Thermo-Alchemists are a clock that needs no threats drawn.

Its 0/3 Defender body is also the deck's only genuine early blocker, which matters because `wide_boards` is conceded maindeck.

### THE INTERACTION SUITE BENDS IN THE STATE THE DECK AIMS FOR

Worth knowing before you play it: **3 of the 10 interaction cards get worse at hellbent**, the exact state the payoffs check.

- **Lightning Axe** — "discard a card **or pay {5}**". With an empty hand there is nothing to discard, so it costs 6 mana.
- **Collective Brutality** — "Escalate—Discard a card". With an empty hand it is a 2-mana one-mode sorcery.
- **Collective Defiance** — its wheel mode refills you, undoing the state.

The counter-count: **9 of 23 nonland cards carry printed madness**, so on the turns you *do* have cards, the outlets always have profitable fodder. The suite is strong turns 1–5 and thins out in topdeck mode.

### WHY THE 17TH LAND IS CORRECT — FOR A DIFFERENT REASON THAN I FIRST GAVE

The land target computed 16.35 and rounded to 16; this build runs 17. My first argument named four mana sinks — and every one of them spends mana from lands *already on the battlefield*. That answers board flood. A drawn land that cannot be played is a card **in hand**, which is precisely what switches off Bloodhall Priest and Lupine Prototype, so the argument missed its own objection.

The real ground is arithmetic. `deck_audit.land_target(40, 2.2609, accel=0)` returns **17**. The recommendation drops to 16 only because `accel=2`, and that 2 is Faithless Looting being tagged `Looting` by the harness. Faithless Looting is a hand-neutral looter — it draws two and discards two, adding no mana and no net cards. It is not acceleration. Correct for that and the target is 17.

### WHAT THIS DECK CANNOT DO

Three of the five threat classes are conceded maindeck:

- **The stack** — black and red cast no counterspell anywhere in this cube. Collective Brutality answers a card in *hand*, which is why it is explicitly not declared as stack coverage.
- **Enchantments** — the cube's only two enchantment answers are both white. The 25 cube enchantments have no answer at any price here.
- **Graveyards** — conceded, but *not* because no answer exists. My first version claimed the cube had zero graveyard hate "at any price", citing a census that matched zero cards. The dossier's own caveat warns that a 0-match proves nothing, and Invasion of Innistrad's back face reads "{2}{B}: Exile target card from a graveyard." It is now in the sideboard. The class is conceded maindeck because a 4-mana Battle with a {2}{B} per-activation clause is too slow for a 23-card nonland list — a real reason, not a false one.

The sweeper is conceded for a specific reason too: The Meathook Massacre, the only symmetric sweeper in these colours, needs Olivia's Dragoon boarded out to reach a one-sided X — and Olivia's Dragoon is the card the shape judge identified as decisive. It was cut entirely for Killing Wave ×2, which scales the same way and taxes the life total this deck is already attacking.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (23 nonland):  1:4  2:12  3:5  4:1  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  hellbent_payoff: 5 copies (effective 4.6: Lupine Prototype@0.8, Lupine Prototype@0.8) → p=0.82 (need ≥ 0.75)
  PASS  discard_outlet: 8 copies (effective 6.5: Lightning Axe@0.6, Lightning Axe@0.6, Collective Brutality@0.7, Collective Defiance@0.6) → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 89% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 59%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. Thermo-Alchemist x2 ('Defender', 0/3) blanks the 1- and 2-power attackers a token board fields, but it does not clear one. The cube's 35 token-producing cards are answered from the sideboard by Savage Alliance x2 ('deals 1 damage to each creature target opponent controls' - one-sided by targeting) and Killing Wave x2 ('For each creature, its controller sacrifices it unless they pay X life'). Conceded maindeck because the only symmetric sweeper considered, The Meathook Massacre, was cut at Phase 9: reaching a one-sided X requires boarding out Olivia's Dragoon (toughness 2), the card the shape judge identified as the decisive card of this archetype.
  OK        single_large_threat: Lightning Axe, Infernal Grasp, Alchemist's Greeting, Fiery Temper
  CONCEDED  noncreature_permanents: No mainboard card destroys an artifact or an enchantment. Collective Brutality is deliberately NOT declared here - its clause is 'Target opponent reveals their hand. You choose an instant or sorcery card from it', which answers a card in hand, not a permanent on the battlefield. Abrade ('Destroy target artifact') covers the artifact half from the sideboard against the cube's 24 artifacts; the cube gives black and red no enchantment removal at all (dossier enchantment_answers = 2 cards, both white), so the 25 cube enchantments have no answer at any price in these colours.
  CONCEDED  stack: Black and red cast no counterspells anywhere in this cube. Collective Brutality's 'Target opponent reveals their hand. You choose an instant or sorcery card from it. That player discards that card' is the closest available - it answers a spell in hand rather than on the stack, which is why this class is conceded rather than declared.
  CONCEDED  graveyard: CORRECTED AT PHASE 9. The previous version asserted 'zero graveyard hate in any colour, so there is no answer available to buy at any price', citing the dossier's structural_census 0-match. That violated the dossier's own census_caveat, which states a 0-match proves nothing and must be verified against oracle text. Verification: Invasion of Innistrad // Deluge of the Dead (color_identity ['B']) reads '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token' - repeatable, colour-legal graveyard hate. It is now in the sideboard, spending a rare slot. The class is still CONCEDED MAINDECK, but for a real reason rather than a false one: 75 of 305 cube cards (24.6%) interact with graveyards, and a 4-mana Battle whose graveyard clause costs {2}{B} per activation is too slow to hold a mainboard slot in a 23-card nonland list that is already at the low end of its interaction needs.
```

All four structural checks returned PASS with no WARN flags, so there are no `structural_responses` entries to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Thermo-Alchemist ('{T}: This creature deals 1 damage to each opponent. Whenever you cast an instant or sorcery spell, untap this creature') converts a flooded board into damage without spending a card, and 12 of the 23 nonland cards are instants or sorceries that untap it. Faithless Looting's Flashback {2}{R} and Alchemist's Greeting's printed {4}{R} are mana sinks only a flooded hand can afford, and Lightning Axe's alternative cost is literally 'pay {5}' instead of discarding - the clause that makes it castable at hellbent. Stated limit: all four sinks spend mana from lands already on the battlefield, so they answer BOARD flood; a drawn land that cannot be played is a card in hand, which is the state the payoffs check. That half is not mitigated. |
| screw | mitigation | 4 of 23 nonland cards cost one mana and 12 cost two, so a 2-land hand still deploys Olivia's Dragoon, Lupine Prototype, Asylum Visitor, Thermo-Alchemist, Infernal Grasp or Collective Brutality on turn 2 and something else on turn 3. Four printed-madness cards cost less at their madness cost than at their printed cost (Fiery Temper {R} vs {1}{R}{R}, Stromkirk Occultist {1}{R} vs {2}{R}, Alchemist's Greeting {1}{R} vs {4}{R}, Bloodhall Priest {1}{B}{R} vs {2}{B}{R}); Asylum Visitor's madness {1}{B} equals its printed cost and buys instant speed rather than mana. So a stalled land drop still casts spells off an outlet. 17 lands with 11 red and 8 black sources at a 64/36 pip split. |
| decapitation | mitigation | Bloodhall Priest answered on sight leaves 4 further hellbent-reading copies (Asylum Visitor x2, Lupine Prototype x2) and the deck's real damage floor, which is not a creature at all: Thermo-Alchemist x2 pings for 1 per instant or sorcery cast, Fiery Temper x2 and Collective Defiance each point 3 at the opponent's face, and Alchemist's Greeting plus 6 removal spells keep the board clear while that adds up. |
| gas-out | mitigation | Answered by cards that pay for an empty hand rather than avoid one, and - after the Phase 9 repair - by one that refuels WITHOUT filling the hand. Stromkirk Occultist x2: 'Whenever this creature deals combat damage to a player, exile the top card of your library. Until end of turn, you may play that card' - the card is played from exile, so the hand stays at zero and all 5 hellbent copies stay switched on. This is the only refuel in the pool with that property; it replaced Bloodmad Vampire x2 at identical cost ({2}{R}, madness {1}{R}). Asylum Visitor x2: 'At the beginning of EACH player's upkeep, if that player has no cards in hand, you draw a card and you lose 1 life' - two draws per turn cycle when both players are empty. Faithless Looting x2 refuels a second time from the graveyard via Flashback {2}{R}. Collective Defiance's wheel mode can be pointed at yourself. Stated cost, not hidden: every refuel except Stromkirk Occultist puts cards back IN HAND and therefore switches the payoffs off on the turn it fires. Reforge the Soul is the sideboard's dedicated attrition refuel and has the same drawback. |
| raced | mitigation | Thermo-Alchemist is a 0/3 Defender, which blanks the 1- and 2-power attackers the cube's aggro decks lead with, and it does not stop pinging while it blocks. Six mainboard removal spells (Lightning Axe x2 at 5 damage for {R}, Infernal Grasp x2 unconditional, Fiery Temper x2 at 3 damage instant-speed for madness {R}) plus Alchemist's Greeting at 4 damage answer the biggest attackers, and Murderous Compulsion kills a creature that attacked. Lupine Prototype at 2 mana for 5/5 blocks whenever the OPPONENT is hellbent ('unless A PLAYER has no cards in hand'), which an aggro deck that has dumped its hand routinely is. Stated weakness: only 2 real blockers, zero lifegain, zero mainboard sweeper - Killing Wave x2 and Savage Alliance x2 are the boarded answers. |
| disruption-fizzle | accepted | Bloodhall Priest's trigger checks 'if you have no cards in hand' on entry and on each attack, so a single removal spell in response to the attack trigger does not fizzle the damage - but removal on sight, before an attack, costs the whole card. There is no protection spell in black or red in this cube and no way to rebuy the Priest. Mitigating would mean adding a protection or recursion package, which costs interaction slots - and interaction is what buys the turns this 7-turn clock needs, so the trade is directly self-defeating. The redundancy answer is that the hellbent payoff is 5 copies across 3 names, not one card. |

### CARDS CONSIDERED BUT EXCLUDED

The full Phase 5A partition lives in `sweep.json`; this is the curated view of the cuts a reader would ask about.

| Card(s) | Reason |
|---|---|
| Vexing Devil | 'any opponent may have it deal 4 damage to them. If a player does, sacrifice this creature.' The opponent picks the mode, and this build wins on a long axis - handing a control opponent the option to take 4 they can afford is not a clock. |
| Gravecrawler | 'You may cast this card from your graveyard as long as you control a Zombie.' This build runs no Zombies, so the recursion clause is dead, and it costs 1 of 5 rare slots. |
| Captivating Vampire | 'Other Vampire creatures you control get +1/+1' - a lord in a build whose creature count is deliberately low, and {1}{B}{B} against a red-forward hellbent mana base. |
| Metallic Mimic | 'Each other creature you control of the chosen type enters with an additional +1/+1 counter' - this build's creatures are a scattered mix of Vampire, Devil, Human and Construct, so one chosen type covers only part of them. |
| Skirsdag High Priest | 'Tap two untapped creatures you control: Create a 5/5 black Demon' - it needs three creatures on board, and this build's creature count is deliberately low so the burn can run. |
| Tamiyo's Journal | 'At the beginning of your upkeep, investigate' plus a three-Clue tutor - genuine card flow, but at {5} it arrives after the hellbent payoffs have already needed to be online, and it costs a rare slot. |
| Voldaren Bloodcaster // Bloodbat Summoner | Blood on each nontoken creature death and flips at five Blood; this build runs few creatures and does not sacrifice them, so both clauses are near-dead. |
| Edgar's Awakening | 'When you discard this card, you may pay {B}. When you do, return target creature card from your graveyard to your hand.' A real discard payoff, but returning a creature to HAND is anti-hellbent - it refills the hand this deck is trying to empty. |
| Haunted Dead | '{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield tapped.' A repeatable emptier, but the 2/2 body it returns does nothing for a burn plan and the card costs two cards per activation with no madness attached. |
| Emrakul, the Promised End | 'costs {1} less to cast for each card type among cards in your graveyard' - the ceiling is 8 types; this build's graveyard is instants, sorceries and the odd creature, so the realistic discount lands it around 9-10 mana, above what 17 lands casts. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.26   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.65 adj [MV 2.26 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  36.0%  prod  47.1%  gap -11.1pp  [OK]
  R  demand  64.0%  prod  64.7%  gap  -0.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
  [PASS] commons/uncommons max 2 copies
         no common or uncommon exceeds 2 copies across mainboard + sideboard (Phase 5C check 3, verified against cube_search.get_max_copies)
  [PASS] rares/mythics max 1 copy
         all five appear once
  [PASS] max 5 rares/mythics total across mainboard + sideboard
         exactly 5: Bloodhall Priest, Collective Brutality, Collective Defiance (mainboard); Invasion of Innistrad // Deluge of the Dead, Reforge the Soul (sideboard). Budget fully spent.
  [PASS] all cards from the cube mainboard
         Phase 5C check 2 - every name matched by exact string against the working pool cache
  [PASS] basic lands format-supplied, unlimited
         9 Mountain, 6 Swamp
  [PASS] colour legality (core B/R, no splash)
         Phase 5C checks 4 and 5 - every nonland card usable via effective_cost.best_mode in [B,R]; 0 splash cards
```