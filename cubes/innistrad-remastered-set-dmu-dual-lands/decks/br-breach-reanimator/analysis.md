---
deck_name: "br-breach-reanimator"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-08-31T17:01:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x5   Mountain
  x11  Swamp
  x2   Geothermal Bog                               Swamp Mountain, taps for BR, enters tapped
```

### CREATURES (12)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Bloodtithe Harvester                         x2    BR    Enabler — Blood-token discard  U
  2  Lightning Mauler                             x2    R     Enabler — soulbond haste for r U
  2  Olivia's Dragoon                             x2    B     Enabler — free repeatable outl C
  3  Morbid Opportunist                           x1    B     Engine — refuel; draws on ever U
  5  Morkrut Banshee                              x2    B     Payoff — reanimation target wi U
  8  Abundant Maw                                 x1    C     Payoff — fifth reanimation tar C
  8  Griselbrand                                  x1    B     Payoff — primary reanimation t M
 13  Emrakul, the Promised End                    x1    C     Payoff — secondary reanimation M
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Faithless Looting                            x2    R     Enabler — discard outlet       C
  1  Tragic Slip                                  x2    B     Interaction — one-mana morbid  C
  3  Fiery Temper                                 x1    R     Interaction — madness burn, th U
  5  Edgar's Awakening                            x2    B     Payoff — reanimation spell     U
  5  Through the Breach                           x1    R     Payoff — third assembly axis,  M
```

### OTHER SPELLS (2)

```
CMC  Card                                         Qty   Color Role                           Rar
  3  Soul Separator                               x2    C     Payoff — second reanimation ax U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Abrade                                       x2    R     Hate — artifact removal: vs equipment/artifact U
Collective Brutality                         x1    B     Flex — escalate-discard toolbox: vs combo and  R
Infernal Grasp                               x2    B     Hate — unconditional removal: vs creatures abo U
Murderous Compulsion                         x1    B     Flex — cheap madness-castable removal: vs crea C
The Meathook Massacre                        x1    B     Hate — scalable sweeper vs go-wide: vs token d M
Fiery Temper                                 x1    R     Flex — second copy of the burn: vs decks with  U
Sever the Bloodline                          x2    B     Hate — exile answers recursion: vs disturb / u U
```

## ANALYSIS

### DECK IDENTITY

A black-red graveyard deck whose enablers and payoffs are the same cards. Cheap outlets - Faithless Looting, Olivia's Dragoon and the Blood tokens off Bloodtithe Harvester - bin Griselbrand, Emrakul or an Abundant Maw in the first three turns; Edgar's Awakening, Soul Separator or Through the Breach converts that into a threat on turn five, and Lightning Mauler's soulbond hastes it the turn it lands. Morkrut Banshee is the target that is never a dead draw: its -4/-4 is an ENTERS trigger, so reanimating it is a two-for-one and hard-casting it at five is a fair play. Note honestly what this deck is NOT: after the Phase 9 repair it carries a single printed madness card (Fiery Temper), down from five, and four Vampire cards. It is a reanimator-with-removal deck, not a madness-Vampire deck.

### DECK IDENTITY

A black-red graveyard deck whose enablers and payoffs are the same cards. Cheap outlets - Faithless Looting, Olivia's Dragoon and the Blood tokens off Bloodtithe Harvester - bin Griselbrand, Emrakul or an Abundant Maw in the first three turns; Edgar's Awakening, Soul Separator or Through the Breach converts that into a threat on turn five, and Lightning Mauler's soulbond hastes it the turn it lands. Morkrut Banshee is the target that is never a dead draw: its -4/-4 is an ENTERS trigger, so reanimating it is a two-for-one and hard-casting it at five is a fair play. Note honestly what this deck is NOT: after the Phase 9 repair it carries a single printed madness card (Fiery Temper), down from five, and four Vampire cards. It is a reanimator-with-removal deck, not a madness-Vampire deck.

### HOW THE DECK ACTUALLY WINS

The line the deck is built around is four cards deep and costs nine mana across five turns:

| Turn | Play | Effect |
|---|---|---|
| 1 | Faithless Looting | Draw two, discard two - Griselbrand or Emrakul goes to the graveyard |
| 2 | Lightning Mauler | A 2/1 that is doing nothing yet, and that is the point |
| 5 | Edgar's Awakening | Griselbrand returns; soulbond pairs on entry and both creatures gain haste |
| 5 | Attack, then pay 7 life | 7 damage with lifelink, then draw seven cards |

Soulbond is the piece that makes this work, and it is easy to misread. Lightning Mauler says "You may pair this creature with another unpaired creature **when either enters**" - the trigger fires when the *reanimated* creature arrives, not only when the Mauler does. So a Mauler played on turn two and left alone is a haste enabler waiting for turn five. Without it the same line deals 7 on turn six and the deck's own thesis turn is 8.

### THE COUNT THAT DECIDED THE BUILD

The 5-rare cap is binding on this archetype, and it binds on exactly one thing. Here is the pool's complete inventory of effects that put a creature onto the battlefield from a graveyard or a hand:

| Card | Rarity | Copies | Reads |
|---|---|---|---|
| Edgar's Awakening | uncommon | 2 | graveyard |
| Soul Separator | uncommon | 2 | graveyard (exiles it) |
| Through the Breach | **mythic** | 1 | hand |
| Bruna, the Fading Light | rare | 1 | cast trigger only, and white |

That is the whole list. With only the two uncommons the Phase 6b assembly check failed at p=0.71 against a 0.75 threshold, and no common or uncommon in the cube could repair it. Clearing the gate required spending a mythic slot on Through the Breach, which in turn forced Haunted Ridge - the pool's only untapped-capable black-red dual - out of the deck. The reanimation half of a Reanimator deck in this cube is rarity-gated, not skill-gated.

One number worth carrying forward if you iterate: the check measures each role's marginal separately, so it reports 0.78 for effects and 0.81 for targets and calls that a pass. The conjunction - an effect **and** a target by turn 8 - is about **0.74 weighted, 0.84 raw**, and it cannot be pushed past 0.78 no matter what you do, because five physical reanimation effects is all the pool has.

### WHAT SOUL SEPARATOR ACTUALLY DOES

Worth being precise about, because it reads better than it is. It says: "Create a token that's a copy of that card, except it's 1/1... and it has flying. Create a black Zombie creature token with **power equal to that card's power and toughness equal to that card's toughness**."

The Zombie gets stats and nothing else. On Griselbrand you get a 1/1 flying lifelink token that can still "Pay 7 life: Draw seven cards", plus a **vanilla ground 7/7**. On Emrakul, a 1/1 flier plus a vanilla ground 13/13 with no trample and no protection. Two bodies from one card is real value and a single removal spell cannot take both - but it is not a second Edgar's Awakening, it costs eight mana across two turns, and it **exiles** the target, so it competes with Edgar's Awakening for the same five cards.

### WHAT THIS DECK IS NOT

Two honest corrections to the archetype brief this was built from.

**It is not a madness deck.** The build began with five printed madness cards and finished with one (Fiery Temper). Every repair round traded a madness Vampire for something that fixed a gate - Lightning Mauler for the haste failure, Morkrut Banshee for the target count, Tragic Slip for the interaction count. Vampire cards fell from 7 to 4, which is also why Falkenrath Gorger was cut: it would grant madness to 4 cards of 22, all of mana value 2 or less.

**It got narrower as it got more correct.** Over three repair rounds the coverage declaration went from three answered threat classes to one. Wide boards and graveyard are both conceded now; the only reach is a single Fiery Temper; and red is 9 pips against 7 sources in 18 lands. The mana audit passes legitimately on aggregate shares, and Fiery Temper's live mode is madness {R} rather than its {1}{R}{R} hard cast - but this is a heavier, blacker, less interactive list than the one that entered the grill, and the sideboard is where the flexibility went.

### CARDS CONSIDERED BUT NOT INCLUDED - a swap guide

For iterating later. The generated section below covers the Phase 5A cuts; these are the closer calls made at Phase 5B and Phase 9.

**Rares and mythics that lost to the 5-card cap.** Any of these becomes available if you raise the cap:

| Card | What it would do here |
|---|---|
| Bloodhall Priest | {2}{B}{R} 4/4 with Madness {1}{B}{R} and "if you have no cards in hand, deals 2 damage" on enter **or attack**. The single best-fitting card in the pool for this shell - it rewards the empty hand the deck creates. First name to add if the cap goes to 6. |
| Haunted Ridge | The only untapped-capable BR dual. Cut specifically to fund Through the Breach. Add it back at cap 6 and go to 11 Swamp, 4 Mountain, 2 Bog, 1 Ridge. |
| Bloodline Keeper | {2}{B}{B} 3/3 flier, "{T}: Create a 2/2 black Vampire creature token with flying". A win condition that needs no graveyard at all - the best insurance against graveyard hate. |
| Olivia Voldaren | {2}{B}{R} 3/3 flier with a repeatable "{1}{R}: deals 1 damage to another target creature... Put a +1/+1 counter" - a mana-sink removal engine that closes games alone. |
| Collective Defiance | "Target player discards all the cards in their hand, then draws that many" can be aimed at **yourself** to bin a fatty, and escalate adds 4 damage to a creature. |
| Reforge the Soul | The pool's largest mass-discard: "Each player discards their hand, then draws seven cards." Symmetric, which is the reason it lost. |
| Falkenrath Gorger | Grants madness to Vampire cards. Only 4 of 22 qualify in the final list; would be much stronger in a Vampire-dense version. |
| Mass Hysteria / Zealous Conscripts | Both haste. Lightning Mauler does the job at uncommon for no rare cost, which is why both lost. |
| Bedlam Reveler | {6}{R}{R} reduced by instants and sorceries in the yard - realistically {3}{R}{R} for a 3/4 that discards your hand and draws three. |

**Uncommons a tier below the includes** - straight swaps, no cap cost:

| Card | Trade-off vs what is in the deck |
|---|---|
| Asylum Visitor | 3/1 for {1}{B}, Madness {1}{B}, draws when a player is hellbent. Cut for Morkrut Banshee. Bring it back if you want the madness identity over the target count. |
| Stromkirk Occultist | 3/2 trample, Madness {1}{R}, exiles the top card on combat damage. The best fair clock that was cut. |
| Lightning Axe | 5 damage for {R} whose additional cost is a discard. Cut because it needs a creature target, so it cannot bin a fatty on turn one. |
| Furyblade Vampire | A second free repeatable outlet that converts the discard into 4 trample damage instead of flying on a 2/2. |
| Voldaren Epicure | {R} 1/1, deals 1 and makes a Blood token - a card-neutral outlet. Lost the two-mana slot to Lightning Mauler. |
| Haunted Dead | Cut as a weak keystone: its outlet ability works only from the graveyard, so it cannot be a turn 1-3 enabler. Good in a build with sacrifice outlets - see the mono-black version. |
| Sanitarium Skeleton | "{2}{B}: Return this card from your graveyard to your hand" - renewable discard fodder. Cut once fodder reached 8 of 22. |
| Distended Mindbender | A third 8-drop body, but a rare, and its hand-attack is a cast trigger reanimation never delivers. |

**Sideboard cards that nearly made it:** Killing Wave (scalable symmetric sweeper - swap in for The Meathook Massacre against decks with bigger creatures than yours), Murderous Compulsion's second copy, and Alchemist's Greeting (4 damage for {1}{R} off madness, cut because Infernal Grasp is strictly better and already boarded).

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:4  2:6  3:4  5:5  8:2  13:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  discard_outlet: 6 copies (effective 5.8: Bloodtithe Harvester@0.9, Bloodtithe Harvester@0.9) → p=0.90 (need ≥ 0.75)
  PASS  reanimation_effect: 5 copies (effective 3.8: Soul Separator@0.6, Soul Separator@0.6, Through the Breach@0.6) → p=0.78 (need ≥ 0.75)
  PASS  reanimation_target: 5 copies (effective 4.2: Morkrut Banshee@0.7, Morkrut Banshee@0.7, Abundant Maw@0.8) → p=0.81 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 55%  T2 90%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Every maindeck answer is single-target - Tragic Slip, Fiery Temper and Morkrut Banshee's -4/-4 each hit one creature. The deck's only sweeper, The Meathook Massacre, is boarded rather than maindecked because a symmetric sweeper kills this deck's own Lightning Maulers and Bloodtithe Harvesters, on which the haste and outlet plans both depend.
  OK        single_large_threat: Tragic Slip, Morkrut Banshee
  CONCEDED  noncreature_permanents: Neither black nor red in this pool answers an enchantment at all; the only artifact answer, Abrade, sits in the sideboard because a maindeck artifact-removal slot is blank against most of this cube's decks.
  CONCEDED  stack: The cube has no counterspell density worth maindecking against; the answer to a countered or discarded Edgar's Awakening is its second copy plus two Soul Separators.
  CONCEDED  graveyard: The deck's graveyard interaction - Collective Brutality's first mode and Sever the Bloodline's exile - is entirely in the sideboard. Maindecking graveyard hate in the deck that IS this cube's graveyard deck costs more than it gains, and the cube supplies almost nothing to hate with: an oracle-text sweep of the pool finds only Soul-Guide Gryff ('exile up to one target card from a graveyard'), Ghostly Castigator and Invasion of Innistrad's back face. The class is answered from the board when a graveyard opponent appears.
```

- curve PASS and goldfish PASS - no WARN-tier flags were raised, so no deviation lines are required.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Every card named here is in the final list. Four mana sinks absorb surplus lands: Faithless Looting's 'Flashback {2}{R}' x2 casts a second time from the graveyard; Soul Separator's '{5}, {T}, Sacrifice this artifact' x2; Through the Breach at {4}{R} is a five-mana instant held for excess mana; and Abundant Maw's 'Emerge {6}{B}' converts a surplus turn into a 6/4 that also drains 3. Emrakul's own 'costs {1} less to cast for each card type among cards in your graveyard' is a genuine flood payoff - with creature, sorcery, instant, artifact and land in the yard (a land arrives by discarding one to Faithless Looting) it hard-casts for {8}. Morbid Opportunist turns the trades a flooded board still makes into cards. |
| `screw` | mitigation | Two-land hands are keepable because 10 of the 22 nonland cards cost 2 or less and the whole enabling half is cheap - Faithless Looting at {R}, Olivia's Dragoon and Bloodtithe Harvester at 2. Faithless Looting itself digs two cards deep on turn 1 for one mana. Only 2 of 18 lands enter tapped. |
| `decapitation` | mitigation | No single card is load-bearing. The reanimation half is 5 functional copies across three different mechanisms (Edgar's Awakening x2 from the graveyard, Soul Separator x2 from the graveyard via exile into two tokens, Through the Breach x1 from the hand), and the target half is 5 copies (Griselbrand, Emrakul, Morkrut Banshee x2, Abundant Maw). Answering any one axis leaves the other two intact, and Through the Breach in particular reads the hand rather than the graveyard, so it survives graveyard hate entirely. |
| `gas-out` | mitigation | Every card named here is in the final list. Morbid Opportunist - 'Whenever one or more other creatures die, draw a card' - is the primary refuel, and it has a specific synergy with this deck's own combo: Through the Breach reads 'Sacrifice that creature at the beginning of the next end step', so firing the combo draws a card. Behind it: the two Blood tokens off Bloodtithe Harvester ('Discard a card, Sacrifice this token: Draw a card'), Faithless Looting's flashback as a fifth card from an empty hand, and Griselbrand's 'Pay 7 life: Draw seven cards' once reanimated. Correcting the previous version, which named Asylum Visitor and Stromkirk Occultist - both cut by the Phase 9 repair. |
| `raced` | mitigation | Lightning Mauler x2 - 'Soulbond (You may pair this creature with another unpaired creature when either enters.) As long as this creature is paired with another creature, both creatures have haste.' Soulbond triggers on the REANIMATED creature entering, so a turn-5 Edgar's Awakening on Griselbrand attacks for 7 with lifelink and pays 7 life to draw seven the same turn, and a turn-5 Emrakul deals 13 flying trample damage on arrival. A full turn off the clock at zero cost to the reanimation half and zero cost to the rare budget. The previous entry claimed the cost of mitigating was the deck's identity; the Challenger falsified that with this card and the claim is withdrawn. Backing it: 5 maindeck interaction spells plus Murderous Compulsion x2 and Infernal Grasp x2 in the board. |
| `disruption-fizzle` | mitigation | The critical turn is turn 5. If Edgar's Awakening is answered, the second copy, two Soul Separators and Through the Breach are four more attempts across three different mechanisms, and Through the Breach is an INSTANT reading the HAND, so graveyard hate does not answer it. Correcting an overclaim the previous version carried: Emrakul's 'protection from instants' blanks this cube's instant-speed removal (Infernal Grasp, Lightning Axe, Fiery Temper, Tragic Slip, Abrade) but NOT its sorcery-speed answers (Sever the Bloodline, Murderous Compulsion, Killing Wave, The Meathook Massacre). Resilient, not unanswerable. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Indulgent Aristocrat, Blood Artist, Restless Bloodseeker // Bloodsoaked Reveler, Skirsdag High Priest, Ecstatic Awakener // Awoken Demon, Falkenrath Torturer, Ghoulish Procession, Butcher Ghoul, Siege Zombie, Graf Rats, Demonic Taskmaster, Desperate Farmer // Depraved Harvester, Gluttonous Guest, Captivating Vampire | Aristocrats sacrifice-outlet or death-payoff whose output scales with a token engine this list does not build - no Ghoulish Procession/Gisa's Bidding token core in the reanimation shell. |
| Festival Crasher, Thermo-Alchemist, Burning Vengeance, Seize the Storm, Ancestral Anger, Borrowed Hostility, Stensia Masquerade | Spellslinger or prowess payoff requiring an instant/sorcery density this creature-and-reanimation list does not reach. |
| Wretched Gryff, Elder Deep-Fiend, It of the Horrid Swarm | Colorless Eldrazi whose only text is a CAST trigger - reanimation and Through the Breach both put onto the battlefield without casting, so the payoff never fires. |
| Killing Wave | CORRECTED (Challenger finding 8): mis-grouped as narrow single-target removal. 'For each creature, its controller sacrifices it unless they pay X life' is a scalable symmetric SWEEPER, a different class entirely. Partially REVERSED: Killing Wave x1 is now in the sideboard as the deck's second sweeper. |
| Reforge the Soul | CORRECTED (Challenger finding 8): not a beater at all. 'Each player discards their hand, then draws seven cards' is the pool's largest mass-discard effect and it bins Griselbrand and Emrakul. Cut solely because it is a RARE and the 5-card budget is fully spent. It is also symmetric, refilling the opponent's hand. |
| Lightning Mauler | CORRECTED (Challenger finding 3): this exclusion was WRONG and has been REVERSED. Lightning Mauler x2 is now in the mainboard. 'Soulbond... As long as this creature is paired with another creature, both creatures have haste', pairing 'when either enters', hastes a reanimated Griselbrand or Emrakul on the turn it arrives. |
| Zealous Conscripts | CORRECTED (Challenger finding 8): not a vanilla beater. 'Haste... Untap that permanent. It gains haste until end of turn' is a haste enabler, the exact effect this deck's thesis_risk names. Cut because it is a RARE against a spent budget, and Lightning Mauler supplies the same effect at uncommon for three fewer mana. |
| Tree of Perdition | CORRECTED (Challenger finding 8): not a beater. A 0/13 Defender whose '{T}: Exchange target opponent's life total with this creature's toughness' sets an opponent to 13. Cut because its only payoff partner, Triskaidekaphobia, makes a two-card kill unrelated to reanimation, and Tree is a MYTHIC against a spent budget. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.73   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.31 adj [MV 3.73 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  67.9%  prod  72.2%  gap  -4.3pp  [OK]
  R  demand  32.1%  prod  38.9%  gap  -6.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] commons_uncommons_max_2: PASS - highest count is 2, and every 2-of is a common or uncommon.
[PASS] rares_mythics_max_1: PASS - every rare and mythic appears once.
[PASS] rare_mythic_total_max_5: PASS - exactly 5: Griselbrand (M), Emrakul, the Promised End (M) and Through the Breach (M) in the mainboard; The Meathook Massacre (M) and Collective Brutality (R) in the sideboard.
[INFO] basics_unlimited: 11 Swamp + 5 Mountain, format-supplied and exempt from copy limits.
[PASS] all_cards_from_cube: PASS - Phase 5C check 2, exact-name membership against the working pool cache.
```