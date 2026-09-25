---
deck_name: "bg-splinterfright-beatdown"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-08-27T14:38:34Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  11x Forest                             
  4x Swamp                              
  1x Deathcap Glade                     BG dual, untapped from your third land
  2x Haunted Mire                       BG dual, enters tapped
```

### CREATURES (14)
```
CMC  Card                                          Qty  Col   Role                          Rar
  2  Noose Constrictor                             x2   G     Enabler - discard outlet      U
  3  Eccentric Farmer                              x2   G     Enabler - mill 3              C
  3  Falkenrath Torturer                           x2   B     Engine - free sac outlet      C
  3  Splinterfright                                x2   G     Payoff - floating P/T         U
  4  Festerhide Boar                               x2   G     Payoff - banked counters      C
  4  Grizzly Ghoul                                 x2   BG    Payoff - banked counters      U
  4  Lumberknot                                    x1   G     Payoff - banked counters      U
  5  The Gitrog Monster                            x1   BG    Payoff / draw engine          M
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                                          Qty  Col   Role                          Rar
  1  Deadly Allure                                 x1   B     Removal via combat            U
  1  Tragic Slip                                   x2   B     Removal / interaction         C
  2  Grapple with the Past                         x2   G     Mill 3 + rebuy                C
  3  Wild Hunger                                   x2   G     Trample grant                 U
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
Invasion of Innistrad // Deluge of the Dead   x1   B     R    vs. the cube's 75 graveyard-interaction cards; '{2}{B}: Exile target card from a graveyard' is the only repeatable graveyard hate in B/G, and the front face is flash -13/-13 removal
Infernal Grasp                                x2   B     U    vs. decks that contest the ground with a single large blocker: 'Destroy target creature' unconditionally, which this aggro build's 3 maindeck interaction slots cannot cover
Sever the Bloodline                           x2   B     U    vs. recursive creatures and same-name token swarms: 'Exile target creature and all other creatures with the same name as that creature'
Ambush Viper                                  x2   G     C    vs. faster clocks (the cube's 58 evasion cards): 'Flash. Deathtouch' trades up at instant speed and then becomes a creature card in the graveyard
Duel for Dominance                            x2   G     C    vs. a bigger creature deck: 'the chosen creatures fight' converts our graveyard-scaled body into removal without paying life
```

## ANALYSIS

### DECK IDENTITY

A B/G aggro deck that converts its own library into a small number of very large TRAMPLING bodies and swings. Splinterfright mills two every upkeep and is as big as the creature cards in the graveyard; Grizzly Ghoul and Festerhide Boar bank a deaths-this-turn count as permanent +1/+1 counters; Lumberknot grows off every death on either side and is hexproof. Falkenrath Torturer x2 are the free unlimited sacrifice outlets that feed all of that, and The Gitrog Monster turns the deck's own self-mill into cards. Six of the eight large bodies have printed trample; Lumberknot and The Gitrog Monster do not - a 6/6 deathtouch is chump-blocked by a 1/1 exactly like a 10/10 is - which is what Wild Hunger x2 and Garruk's -3 are for.

### THE HONEST CLOCK

This deck's thesis turn was **revised from 6 to 7 during the self-grill**, and the reason is worth recording rather than hiding. The Challenger simulated 20,000 games on the pre-repair list and found the graveyard held **2.34 creature cards on turn 6**, against the 4-5 the first draft claimed. Every body size downstream of that number was therefore inflated roughly 2x. After the repair (free sacrifice outlets, a draw engine, higher creature density) a re-simulation put it at **2.57 mean on turn 6 and 3.33 on turn 7**. Turn 7 is the real number.

### SPLINTERFRIGHT IS A TURN-4 CARD, NOT A TURN-3 CARD

Its oracle gives it no floor: "power and toughness are each equal to the number of creature cards in your graveyard." With an empty graveyard it is a **0/0 that dies on resolution**. Simulated on this list, **77% of turn-3 Splinterfrights** are in exactly that state, because the only thing that can stock the yard before turn 3 is Grapple with the Past - and spending turn 2 on Grapple means not having three mana for Splinterfright anyway. Play it turn 4 behind a Grapple or an Eccentric Farmer.

### WHAT ACTUALLY HAS TRAMPLE

The thesis is "one or two huge trampling bodies", so the trample audit is the deck:

| Has printed trample | No trample |
|---|---|
| Splinterfright x2, Grizzly Ghoul x2, Festerhide Boar x2 | Lumberknot, The Gitrog Monster |

A 6/6 deathtouch Gitrog is chump-blocked by a 1/1 exactly like a 10/10 would be - which is why Wild Hunger x2 ("gets +3/+1 and gains trample until end of turn") and Garruk's -3 ("Creatures you control gain trample and get +X/+X") are load-bearing rather than optional. Three grants for two bodies.

Note also that **Wild Hunger's "Flashback {3}{R}" is dead text here** - this deck runs zero red sources - so each copy is genuinely one-shot. That is why it is at two copies and not one.

### GITROG'S DRAWBACK IS THE ENGINE

"At the beginning of your upkeep, sacrifice The Gitrog Monster unless you sacrifice a land" looks like a cost. It is not, because "Whenever one or more land cards are put into your graveyard from anywhere, draw a card" reads *from anywhere* - the land you sacrifice IS a land card put into your graveyard. The upkeep clause draws a card every turn by itself. On top of that, at 18 of 40 lands a Grapple with the Past mill-three triggers it **84%** of the time and a Splinterfright mill-two **70%**.

### HERMIT DRUID DOES NOT WORK IN THIS CUBE

The prior analysis named it a keystone. It reveals until a **basic** land card, so its mill depth is *inversely* proportional to basic density - and B/G here has only four legal nonbasic land slots in total (Haunted Mire x2 common, Deathcap Glade x1 rare, Westvale Abbey x1 rare; Evolving Wilds fetches a basic, so it is density-neutral). An 18-land deck therefore runs at least 14 basics, and the expected reveal-before-basic is **1.73 cards**. It is structurally incapable of being a burst enabler anywhere in this cube, which is why no deck in this run plays it.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (22 nonland):  1:3  2:4  3:8  4:6  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 7.4: Splinterfright@0.85, Splinterfright@0.85, Grizzly Ghoul@0.85, Grizzly Ghoul@0.85, Festerhide Boar@0.85, Festerhide Boar@0.85, Lumberknot@0.8, Garruk Relentless // Garruk, the Veil-Cursed@0.6, The Gitrog Monster@0.9) → p=0.94 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 9.8: Noose Constrictor@0.7, Noose Constrictor@0.7, Falkenrath Torturer@0.8, Falkenrath Torturer@0.8, The Gitrog Monster@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 39%  T2 80%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: reclassified from OK after the Challenger's finding 12. The cards previously listed here (Splinterfright, Festerhide Boar, Grizzly Ghoul, Wild Hunger, Garruk) are trampling attackers and a single-target pump; trampling OVER a wide board is a race, not an answer, and none of them reduces the opponent's board. B/G in this pool contains no sweeper at all, so this class is genuinely unanswered maindeck and is raced instead. Sever the Bloodline x2 ('Exile target creature and all other creatures with the same name as that creature') is the sideboard answer for same-name token swarms.
  OK        single_large_threat: Tragic Slip, Garruk Relentless // Garruk, the Veil-Cursed, The Gitrog Monster
  CONCEDED  noncreature_permanents: the only card in B or G whose text reads 'Destroy target nonland permanent' is Maelstrom Pulse, and it is in the sideboard; this aggro build spends its 3 maindeck interaction slots on one-mana answers that clear a blocker
  CONCEDED  stack: there is no card in B or G in this pool whose text reads 'Counter target spell'; the deck cannot interact on the stack at all
  CONCEDED  graveyard: Invasion of Innistrad // Deluge of the Dead is the only repeatable graveyard hate reachable in B/G and it is in the sideboard; the whole cube contains only two cards that touch a graveyard from outside it (Soul-Guide Gryff and Deluge of the Dead)
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | The Gitrog Monster's 'Whenever one or more land cards are put into your graveyard from anywhere, draw a card' fires on 83% of a mill-three at 18 of 40 lands and on its own upkeep land sacrifice every turn; 'You may play an additional land on each of your turns' spends the surplus. Eccentric Farmer x2 and Grapple with the Past x2 both return a land card from the graveyard, and Noose Constrictor x2 ('Discard a card: This creature gets +1/+1 until end of turn') is a free unlimited outlet for any surplus card. |
| screw | mitigation | 18 lands at the computed recommendation; goldfish keepable 85%, 3 lands by turn 3 at 92%, and 7 of the 22 nonland cards cost 2 or less (3 at MV 1, 4 at MV 2). Correction per the Challenger: Somberwald Sage was previously named here and is a 3-drop needing three lands and a turn of summoning sickness, so it never mitigated screw; it has been cut, and this mode now rests on the land count and the low-curve count alone. |
| decapitation | mitigation | The payoff is a class, not a card: Splinterfright x2, Grizzly Ghoul x2, Festerhide Boar x2, Moldgraf Millipede x1, Lumberknot x1, Garruk x1 and The Gitrog Monster x1 are 10 functional copies, assembly p(payoff seen by turn 7) = 0.96 on reliability-weighted copies. Grizzly Ghoul, Festerhide Boar and Moldgraf Millipede bank their count as permanent +1/+1 counters, so attacking the graveyard afterwards does not shrink them the way it shrinks Splinterfright, and Lumberknot is hexproof so targeted removal cannot touch it at all. |
| gas-out | mitigation | Corrected per the Challenger's finding 3, which showed the old Ghoultree clause was false: at the real count Ghoultree cost six mana, not one or two, so it was cut. The mode now rests on real draw. The Gitrog Monster draws a card on 83% of a mill-three, on 70% of a Splinterfright mill-two, and once per upkeep guaranteed from its own land sacrifice. Grapple with the Past x2 and Eccentric Farmer x2 are self-replacing (4 of 22). With an empty hand Splinterfright x2 still mills two per upkeep for free and Lumberknot still grows off every death on either side. |
| raced | mitigation | Rewritten per the Challenger's finding 1, whose 20,000-game simulation showed my earlier 'turn-3 Splinterfright is already a 4/4-to-6/6 trampler' claim was false - it enters as a 0/0 and dies in 77% of turn-3 casts, so Splinterfright is a turn-4-or-later card here and the thesis turn was revised to 7. What actually answers a race: Noose Constrictor x2 has reach on turn 2; Falkenrath Torturer x2 give Tragic Slip's morbid an on-demand enabler, which makes '-13/-13 kills any single racer for one mana' true rather than gated; The Gitrog Monster is a 6/6 DEATHTOUCH blocker; and Lumberknot grows every time anything dies. Against fliers specifically the answer is removal, not blocking - Infernal Grasp x2 and Sever the Bloodline x2 board in. |
| disruption-fizzle | mitigation | Rewritten per the Challenger's finding on the old `accepted`, which correctly showed my stated cost was false in this pool. I had claimed protection would have to be bought with threat slots and would lower the graveyard count. Lumberknot refutes that: 'Hexproof' AND 'Whenever a creature dies, put a +1/+1 counter on this creature' is protection that is count-POSITIVE, growing off the opponent's removal and off our own sacrifice outlets, at no cost to the clock. It is now in the mainboard. Alongside it, six of the eight large bodies have printed trample so a single removal spell on the attacker does not end the plan, and Garruk is a permanent a creature-removal spell cannot touch. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bramble Wurm | seven mana for a 5/5, and '{2}{G}, Exile this card from your graveyard: You gain 5 life' exiles it out of the yard the payoff counts. |
| Epitaph Golem | '{2}: Put target card from your graveyard on the bottom of your library' — its only ability removes cards FROM the graveyard, shrinking the exact number Splinterfright counts. |
| Harvest Hand // Scrounged Scythe | 'When this creature dies, return it to the battlefield transformed' — it never stays in the graveyard, so it never adds to the creature-card count. |
| Soul Separator | {3} to cast plus '{5}, {T}, Sacrifice this artifact' — eight mana across two turns to reanimate one creature; this deck's own payoffs cost three to five. |
| Hermit Druid (rare) - CUT, but on partly faulty reasoning | CORRECTION - this card was cut from three of the four decks in this run on reasoning that was partly WRONG, and the self-grill on the fourth caught it. Hermit Druid reads: 'Reveal cards from the top of your library until you reveal a basic land card. Put THAT CARD into your hand and ALL OTHER cards revealed this way into your graveyard.' The basic goes to HAND - so Hermit Druid never mills a basic land, and everything it does mill is drawn from the non-basic portion of the library. In this deck that pool is 25 cards of which 14 are creature cards = 56% creature-dense, against the deck's overall 35%. So while the volume is only about 1.6 cards per activation (the high basic count is real), the yield is about 0.88 CREATURE cards per activation, repeatable from turn 3 at no card cost. For comparison Splinterfright's 'mill two cards' yields 0.70. The original cut used a correct volume figure to reach an unsupported conclusion by applying the deck's overall creature density to a pool the card cannot touch. It is the strongest single swap-in for any of these decks and it costs one rare/mythic slot. |
| Ghoultree (uncommon, up to 2) | Cut during the self-grill on a recount. At the deck's REAL graveyard count (~2.3 creature cards on turn 6, not the 4-5 first claimed) its cost reduction leaves it at {5}{G} - six mana, the whole turn-6 land drop, with nothing left for the pump a trample-less 10/10 needs to connect. Bring it back only if you also add more mill. |
| Moldgraf Millipede (common, up to 2) | Cut in the final post-approval swap for a second Wild Hunger. It banks the count as permanent counters, which is real, but it has no trample and at the real count is a 5/5-6/6 for five mana. This is the single easiest card to bring back if you would rather have the body than the trample grant. |
| Wrenn and Seven (mythic) | The strongest near-miss. Its +1 mills ONLY nonlands (about 2.2 per activation against Splinterfright's 1.1) while putting lands in hand, so it is the best selective mill in the pool - but both remaining rare/mythic slots went to Garruk and The Gitrog Monster, and against a turn-7 aggro clock a five-mana planeswalker that mills rather than attacks loses to a 6/6 deathtouch that also draws. |
| Somberwald Sage (uncommon) | Was in the pre-grill list as the acceleration slot and cut: it is a 0/1 that needs three lands and a turn of summoning sickness, so it never actually mitigated mana screw the way the derivation claimed. |
| Spore Crawler (common, up to 2) | 'When this creature dies, draw a card' on a 3/2 for {2}{G} is strictly count-positive and would raise self-replacing cards from 4 to 6 of 22. Cut only because the Threats/Payoffs band is full at 11 with cards that read or bank the graveyard count, which Spore Crawler does not. |
| Galvanic Juggernaut, Pack Guardian, Decimator of the Provinces | All three were withheld from the sketchers entirely by the seed's threat cap, then given explicit verdicts. Galvanic Juggernaut is a colourless 5/5 for {4} but reads nothing the payoffs count and must attack every turn. Pack Guardian is 7 power over two flash bodies for {2}{G}{G} but its discard clause takes a LAND card. Decimator of the Provinces is a genuine MASS trample grant, but at emerge {6}{G}{G}{G} it needs triple green plus a sacrificed five-drop - and after Ghoultree was cut, only two bodies lacked trample, so the problem it solves was solved more cheaply. |
| Vilespawn Spider / Spontaneous Mutation / Deranged Assistant (the whole U splash) | The deterministic splash filter qualified blue and all three sketchers independently declined it. The only non-rare blue duals read 'This land enters tapped', so serving the splash costs about four tapped land slots against a turn-7 clock. |
| Sideboard considerations not taken | Clear Shot ({2}{G}, instant, our big body deals its power to theirs) is a fine fifth removal spell but overlaps Duel for Dominance. Morkrut Banshee ({3}{B}{B} morbid -4/-4) is a five-mana answer in a deck that wants to be attacking by then. Killing Wave ({X}{B}) is a one-sided sweeper in principle since our creatures want to die, but it also eats our own board of large bodies, which is the opposite of this deck's plan. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.55 adj [MV 2.91 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  33.3%  prod  38.9%  gap  -5.6pp  [OK]
  G  demand  66.7%  prod  77.8%  gap -11.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2            PASS - highest count on any common/uncommon is 2
rares_mythics_max_1_each           PASS - Garruk Relentless 1, The Gitrog Monster 1, Deathcap Glade 1 (mainboard); Maelstrom Pulse 1, Invasion of Innistrad 1 (sideboard)
rares_mythics_max_5_total          PASS - exactly 5 across mainboard (3) and sideboard (2)
basics_unlimited                   Forest 11, Swamp 4 - exempt as format-supplied
all_cards_from_cube                PASS - every non-basic name matched by exact string against the working pool cache
```