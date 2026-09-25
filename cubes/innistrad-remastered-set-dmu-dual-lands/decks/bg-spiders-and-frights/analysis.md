---
deck_name: "bg-spiders-and-frights"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-08-27T14:38:33Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  8x Forest                             
  6x Swamp                              
  1x Deathcap Glade                     BG dual, untapped from your third land
  2x Haunted Mire                       BG dual, enters tapped
```

### CREATURES (14)
```
CMC  Card                                          Qty  Col   Role                          Rar
  2  Ambush Viper                                  x1   G     Removal / interaction         C
  2  Hermit Druid                                  x1   G     Engine                        R
  2  Noose Constrictor                             x2   G     Enabler - discard outlet      U
  3  Eccentric Farmer                              x1   G     Enabler - mill 3              C
  3  Falkenrath Torturer                           x2   B     Engine - free sac outlet      C
  3  Splinterfright                                x2   G     Payoff - floating P/T         U
  4  Grizzly Ghoul                                 x2   BG    Payoff - banked counters      U
  4  Lumberknot                                    x1   G     Payoff - banked counters      U
  5  Moldgraf Millipede                            x2   G     Payoff - banked counters      C
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                                          Qty  Col   Role                          Rar
  1  Eaten Alive                                   x1   B     Removal (sac outlet)          C
  1  Tragic Slip                                   x1   B     Removal / interaction         C
  1  Village Rites                                 x2   B     Sac outlet + draw             C
  2  Infernal Grasp                                x2   B     Removal / interaction         U
  5  Spider Spawning                               x2   G     Payoff - token swarm          U
```

### OTHER SPELLS (1)
```
CMC  Card                                          Qty  Col   Role                          Rar
  4  Garruk Relentless // Garruk, the Veil-Cursed  x1   BG    Payoff - lethality converter  M
```

## SIDEBOARD (10)
```
Card                                          Qty  Col   Rar  Role / When to board in
Maelstrom Pulse                               x1   BG    R    vs. any relevant artifact or enchantment (49 of 277 nonland cube cards); the only 'Destroy target nonland permanent' in B/G
Invasion of Innistrad // Deluge of the Dead   x1   B     R    vs. the cube's 75 graveyard-interaction cards; '{2}{B}: Exile target card from a graveyard' is the only repeatable graveyard hate in B/G, plus a flash -13/-13 front face
Sever the Bloodline                           x2   B     U    vs. recursive creatures and same-name token swarms: 'Exile target creature and all other creatures with the same name as that creature'
Killing Wave                                  x2   B     U    vs. wide boards, the one class this deck has NO maindeck answer to: 'For each creature, its controller sacrifices it unless they pay X life' is asymmetric here because every creature of ours it kills adds a creature card to the graveyard and feeds Lumberknot and Grizzly Ghoul
Eaten Alive                                   x1   B     C    second copy alongside the maindeck one, vs. planeswalkers and indestructible threats: 'Exile target creature or planeswalker'
Duel for Dominance                            x2   G     C    vs. a bigger creature deck: 'the chosen creatures fight' off a counter-banked Moldgraf Millipede, and the death feeds Lumberknot and Grizzly Ghoul
Clear Shot                                    x1   G     U    vs. a single large threat our two unconditional removal spells cannot cover: 'It deals damage equal to its power to target creature you don't control' off a counter-banked Millipede
```

## ANALYSIS

### DECK IDENTITY

A B/G graveyard deck built on two parallel readers of one resource, so that the answer to either half does not answer the other. Spider Spawning converts the graveyard creature-card count into a wide board of reach tokens; Splinterfright converts the identical count into a single trampling body; and Garruk's -3 is the only card that applies the tall axis's arithmetic to the wide axis's width. Underneath them sits a second, narrower engine: Falkenrath Torturer x2 sacrifice spare bodies for free, which simultaneously feeds the graveyard count, turns on Tragic Slip's morbid, grows Lumberknot, and inflates an incoming Grizzly Ghoul. Village Rites x2 is the only card draw in the list and pays into every one of those at once. Moldgraf Millipede x2 is the deck's genuine insurance policy - it is the ONLY card here that reads the graveyard count and banks it as permanent +1/+1 counters that an exiled graveyard cannot undo.

### THE THESIS, CORRECTED

This deck was built on a claim that turned out to be two-thirds false, and the self-grill caught it. The original thesis said Moldgraf Millipede, Grizzly Ghoul and Lumberknot all *bank the graveyard count as permanent +1/+1 counters*. Reading the oracle text carefully:

| Card | What it actually reads | Banks the graveyard count? |
|---|---|---|
| Moldgraf Millipede | "a +1/+1 counter for each creature card in your graveyard" | **Yes — the only one** |
| Grizzly Ghoul | "a +1/+1 counter for each creature that **died this turn**" | No — a deaths-this-turn count |
| Lumberknot | "Whenever **a creature dies**, put a +1/+1 counter" | No — a death trigger |
| Splinterfright | power and toughness = creature cards in graveyard | Reads it, but **floating** |
| Spider Spawning | a token per creature card in graveyard | Reads it; tokens are permanent |
| Garruk −3 | +X/+X where X = creature cards in graveyard | Reads it, **floating** |

Mill causes zero deaths, so Grizzly Ghoul and Lumberknot are not fed by the deck's primary engine at all — they belong to a separate deaths-matter sub-theme that Falkenrath Torturer and Village Rites drive. Moldgraf Millipede went to two copies as a result: it is a common at a cap of 2, and that was the only legal way to actually double the deck's banking.

The honest description is **one graveyard-count axis (6 copies) plus one deaths-matter sub-theme (7 copies)**, joined by Garruk.

### THE NUMBERS ARE SMALLER THAN THEY LOOK

A 6,000-game simulation of this list puts the graveyard at roughly **2.7 creature cards on turn 7**, not the 5 the first draft claimed. Spider Spawning therefore makes about 2–3 tokens, and Garruk's −3 on that board is around 10–12 damage rather than 30. Two timing facts compound it: Spider Spawning is a **sorcery**, so its tokens are summoning-sick and cannot attack the turn they are made; and Garruk's −3 lives on the back face, reachable at earliest turn 6. The alpha strike is a turn-7-or-later play on a board built a turn earlier.

### HERMIT DRUID — AND WHY IT ALMOST DIDN'T MAKE IT

I cut this card from all four decks in this run, reasoning that milling through a library that is mostly non-creature raises the graveyard count less than adding creature cards does. That reasoning is wrong, and the grill caught it.

Hermit Druid reads: *"Reveal cards from the top of your library until you reveal a basic land card. Put **that card into your hand** and all other cards revealed this way into your graveyard."* The basic goes to **hand**. It therefore never mills a basic — everything it mills comes from the non-basic part of the library, which in this deck is 26 cards of which 13 are creatures:

| | volume per activation | creature cards per activation |
|---|---|---|
| Hermit Druid | ~1.7 cards | **0.87** |
| Splinterfright (mill 2) | 2 cards | 0.65 |

The low volume figure I quoted was correct; the conclusion drawn from it was not, because I applied the deck's overall 32.5% creature density to a pool the card cannot touch. Its real density is **50%**. Measured, adding it swings the turn-7 graveyard count +45%. It is now maindeck on the fifth and last rare slot.

### FALKENRATH TORTURER AND VILLAGE RITES ARE THE ENGINE

Neither reads the graveyard count, and together they are what makes the rest work. Falkenrath Torturer's "Sacrifice a creature" is free and unlimited; Village Rites is "sacrifice a creature. Draw two cards" at instant speed for one mana. Each activation simultaneously converts a body into a creature **card** in the graveyard (feeding both axes), supplies the death Grizzly Ghoul and Lumberknot read, and turns on Tragic Slip's morbid −13/−13.

Village Rites started this build in the sideboard. The grill pointed out it was the only card draw in all 50 cards and that it touched every mechanism in the deck — it is maindeck now.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:6  3:5  4:4  5:4
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 8.5: Splinterfright@0.85, Splinterfright@0.85, Grizzly Ghoul@0.75, Grizzly Ghoul@0.75, Lumberknot@0.7, Garruk Relentless // Garruk, the Veil-Cursed@0.6) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 10.85: Noose Constrictor@0.7, Noose Constrictor@0.7, Falkenrath Torturer@0.8, Falkenrath Torturer@0.8, Hermit Druid@0.85) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 52%  T2 91%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: reclassified from OK after the Challenger's finding 5, which showed that none of the four cards previously listed here removes an opposing creature - Spider Spawning makes our own tokens (it races, it does not answer), Noose Constrictor is a 2/2 with reach, Grizzly Ghoul is a 4/3 trample, Lumberknot is a 1/1 that grows. There is no sweeper and no repeatable ping anywhere in the mainboard. Killing Wave x2 ('For each creature, its controller sacrifices it unless they pay X life') is the sideboard answer, and it is asymmetric in our favour because every creature of ours it kills adds a creature card to the graveyard and feeds Lumberknot and Grizzly Ghoul.
  OK        single_large_threat: Infernal Grasp, Eaten Alive, Tragic Slip, Ambush Viper, Garruk Relentless // Garruk, the Veil-Cursed
  CONCEDED  noncreature_permanents: the only card in B or G whose text reads 'Destroy target nonland permanent' is Maelstrom Pulse, and it is in the sideboard; game one this deck presents two parallel board states and races a noncreature permanent rather than answering it
  CONCEDED  stack: there is no card in B or G in this pool whose text reads 'Counter target spell'; the deck cannot interact on the stack at all. Of the four builds explored for this cube, only the G/U one has any stack interaction
  CONCEDED  graveyard: Invasion of Innistrad // Deluge of the Dead is the only repeatable graveyard hate reachable in B/G and it is in the sideboard. CORRECTED per the Challenger's finding 2: only Moldgraf Millipede x2 genuinely banks the graveyard COUNT as permanent counters. Grizzly Ghoul and Lumberknot read DEATHS, so their permanence is a property they have in any deck and is not a defence this thesis can claim.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Noose Constrictor x2 ('Discard a card: This creature gets +1/+1 until end of turn') is a free unlimited outlet that turns any surplus card into a graveyard card, and it is the ONLY card here that can convert a flooded hand into the number both axes read. Eccentric Farmer ('you may return a land card from your graveyard to your hand') recovers a land, and Village Rites x2 turns a spare body into two fresh cards. Correction per the Challenger's finding 12: the earlier claim that 'Spider Spawning scales with turns rather than with mana, so flooded turns still raise the token count' was false - Spider Spawning scales with creature CARDS in the graveyard, and a milled land does nothing for it. |
| screw | mitigation | 17 lands at the computed recommendation; goldfish keepable 83% and 3 lands by turn 3 at 88%. Ten of the 23 nonland cards cost 2 or less (5 at MV 1, 5 at MV 2) - materially better than the pre-repair 9 of 22, because Village Rites at {B} replaced Grapple with the Past at {1}{G}. Eccentric Farmer returns a land card from the graveyard. |
| decapitation | mitigation | The deck's genuine strength and the reason the dual axis exists. Spider Spawning x2 is a SORCERY with no battlefield dependency - it cannot be answered by creature removal at all - and Splinterfright x2 reads the same count from a body; neither depends on the other. Moldgraf Millipede x2 has already banked its count as permanent +1/+1 counters by the time anything can respond, and Lumberknot's 'Hexproof' means at least one threat cannot be targeted. Assembly p(payoff seen by turn 7) = 0.96 on reliability-weighted copies. CORRECTED per the Challenger: Grizzly Ghoul was previously named here as a banking card and is not one - it reads deaths this turn, and on its curve turn it enters with zero counters. The mode passes on Spider Spawning x2, Splinterfright x2, Moldgraf Millipede x2 and Lumberknot. |
| gas-out | mitigation | REWRITTEN - the Challenger marked this UNSATISFIED and was right. The old entry claimed 4 of 22 self-replacing cards by counting Eccentric Farmer x2, which returns a LAND, not gas, and which was already claimed under flood. The real pre-repair figure was 2 of 22, in a deck with zero card draw. The fix was to maindeck the deck's own sideboard answer: Village Rites x2 ('As an additional cost to cast this spell, sacrifice a creature. Draw two cards') is now in the 40. It is the most on-thesis card in the pool for this list - it draws two, puts a creature CARD in the graveyard for both axes, supplies the death Lumberknot and Grizzly Ghoul read, and turns on Tragic Slip's morbid, all at instant speed for one mana. With Grapple with the Past x2 cut, the honest count is now 2 genuine draw spells plus 1 self-replacing (Eccentric Farmer) of 23. Spider Spawning's Flashback {6}{B} is acknowledged as a turn 9-10 card against a simulated 5.64 lands at turn 7, not a turn-7 refuel. |
| raced | accepted | the fastest clocks in this cube's threat_profile are the 58 evasion cards (21%). Ambush Viper ('Flash. Deathtouch') and Noose Constrictor x2 (reach) now hold the ground, and interaction rose to 6 of 23 with 3 of those unconditional - but the deck's own evasion is still limited to Falkenrath Torturer's 'gains flying until end of turn' on a 2/1, and the realistic kill turn is 7-8. Mitigating further would mean spending Threats/Payoffs slots on cheap fliers or lifegain, and every one of those slots is currently a card that either reads the graveyard count or manufactures the deaths the second sub-theme runs on - trading them away lowers the number BOTH axes read, which is the one thing this build is constructed not to do. |
| disruption-fizzle | mitigation | The dual axis IS the answer to this mode: a countered or removed Splinterfright leaves Spider Spawning reading the same count, and Spider Spawning is a sorcery with no battlefield dependency at all. If the first Spawning is countered it goes to the graveyard and the Flashback {6}{B} is a second casting from there. Lumberknot's hexproof means at least one threat cannot be targeted, and Moldgraf Millipede x2's counters are permanent once they land. Corrections per the Challenger's finding 12: the cube contains THREE cards that touch a graveyard from outside it (Soul-Guide Gryff, Soul Separator, Deluge of the Dead), not two - still 3 of 300, so the zone remains near-unattackable; and the earlier claim that 'Grizzly Ghoul's counters are already permanent by the time anything can respond' presupposed counters that on its curve turn do not exist. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bramble Wurm | seven mana for a 5/5, and '{2}{G}, Exile this card from your graveyard: You gain 5 life' exiles it out of the yard the payoff counts. |
| Epitaph Golem | '{2}: Put target card from your graveyard on the bottom of your library' — its only ability removes cards FROM the graveyard, shrinking the exact number Spider Spawning and Splinterfright count. |
| Harvest Hand // Scrounged Scythe | 'When this creature dies, return it to the battlefield transformed' — it never stays in the graveyard, so it never adds to the creature-card count. |
| Soul Separator | {3} to cast plus '{5}, {T}, Sacrifice this artifact' — eight mana across two turns to reanimate one creature; the deck's own payoff costs five. |
| Travel Preparations (uncommon) | Named in this deck's own original thesis as a counter-banking card and cut at the Step-0 gate. Its 'Flashback {1}{W}' is uncastable - W is outside core_colors + splash_colors - and the flashback was exactly the half that made it dual-axis (front half on a Splinterfright, back half on two Spiders). As a one-shot two-counter sorcery it is strictly worse than Moldgraf Millipede, which banks counters without needing a second card. |
| Morbid Opportunist (uncommon, up to 2) | A keystone of the winning sketch, and the judge credited it as one of three reasons that sketch won. 'Whenever one or more other creatures die, draw a card' is excellent with two free sacrifice outlets and a wide Spider board. It lost its slot first to Falkenrath Torturer x2 (an outlet that CAUSES deaths is prerequisite to a card that rewards them) and then to Village Rites x2, which does the same job while also feeding the graveyard count. It is the first card to add if you want a third draw effect. |
| Grapple with the Past (common, up to 2) | Was maindeck until the grill. 'Mill three cards, then you MAY return a creature or land card from your graveyard to your hand' - at this deck's creature density the mill supplies about one creature card and returning a creature removes exactly one, so used as a rebuy its net contribution to the count is roughly zero. This deck had already cut Duskwatch Recruiter on exactly that reasoning without applying it here. Cut for Village Rites, which is card advantage rather than card selection and is count-positive. |
| Deadly Allure (uncommon, up to 2) | Was maindeck and filed as interaction, which inflated the interaction count. 'Target creature gains deathtouch until end of turn and must be blocked this turn if able' is a combat trick, not removal - it needs an attack step and a legal blocker, and the DEFENDER chooses which creature blocks. Cut for Eaten Alive and Ambush Viper, which actually remove a creature. |
| Ghoultree (uncommon, up to 2) | At the corrected graveyard count (~2-3 creature cards, not the 5 first claimed) its cost reduction leaves it at {5}{G}-{6}{G} on turn 6-7 rather than the {2}{G} an inflated count suggested. It also has no trample and no evasion, so a 1/1 chump-blocks it all game. |
| Skirsdag High Priest (rare) | A rejected sketch's keystone, and a clever one: 'Tap two untapped creatures you control: Create a 5/5 black Demon creature token with flying' is genuinely payable off Spider tokens, because tapping creatures as a COST is not a {T} symbol on those creatures and summoning sickness does not block it. Cut because the Demon reads nothing from the graveyard - it is a third win condition competing with the two the thesis locked, on a capped rare slot. |
| Young Wolf and Butcher Ghoul (commons, up to 2 each) | Both read 'Undying', so each is two creature-card deaths from one card. Re-tested against the FINAL list the gain measured flat (2.74 -> 2.74 creature cards at turn 7), because Village Rites x2 and Eaten Alive now consume the fodder the undying bodies would otherwise supply. The grill withdrew its own earlier recommendation for them on that evidence. |
| Ghoulish Procession (uncommon, up to 2) | 'Whenever one or more nontoken creatures die, create a 2/2 black Zombie creature token with decayed. This ability triggers only once each turn' is a second wide-axis engine at two mana, and the cube contains only 2 enchantment answers in 277 cards, so it is very hard to remove. Cut on slots rather than mechanism - the deaths it reads are the same ones Lumberknot and Grizzly Ghoul already read, and the deck needed card draw more than a third death payoff. |
| Siege Zombie (common, up to 2) | The best card for a build that wants to lean harder on the WIDE axis: 'Tap three untapped creatures you control: Each opponent loses 1 life' is reach a Spider board can pay repeatedly, ignoring blockers entirely. Cut because it is offline until Spider Spawning has resolved, and at the corrected 2-3 Spiders it taps most of the board for 1 damage. |
| Second Harvest (rare) | Would double a Spider Spawning board outright, the single largest effect available to the wide axis. Cut because the token count is zero until Spider Spawning resolves, so it can never advance the kill turn - and at 2-3 Spiders it makes only 2-3 more. |
| The Meathook Massacre (mythic) - the best card not taken | 'When The Meathook Massacre enters, each creature gets -X/-X until end of turn' plus 'Whenever a creature you control dies, each opponent loses 1 life' is simultaneously the sweeper this deck has no maindeck answer without AND a drain engine for a deck whose own creatures die constantly. It lost only because the rare/mythic budget hit exactly 5 of 5 once Hermit Druid went in. If you drop Deathcap Glade back to a basic, this is the slot to spend it on. |
| Sideboard considerations not taken | A second Ambush Viper ('Flash. Deathtouch') is the cheapest extra answer to the cube's 58 evasion cards. Morkrut Banshee ({3}{B}{B}, morbid -4/-4) is a five-mana answer this curve does not want. Boarded Window and Geistcatcher's Rig were both considered against the evasion class and rejected: -1/-0 to attackers, and six mana for 4 damage to a flier. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 2.91 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  40.7%  prod  52.9%  gap -12.2pp  [OK]
  G  demand  59.3%  prod  64.7%  gap  -5.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2            PASS - highest count on any common/uncommon is 2
rares_mythics_max_1_each           PASS - Garruk Relentless 1, Deathcap Glade 1 (mainboard); Maelstrom Pulse 1, Invasion of Innistrad 1 (sideboard)
rares_mythics_max_5_total          PASS - 4 across mainboard (2) and sideboard (2), one under the cap
basics_unlimited                   Forest 8, Swamp 6 - exempt from copy limits as format-supplied
all_cards_from_cube                PASS - every non-basic name matched by exact string against the working pool cache
```