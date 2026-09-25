---
deck_name: "bw-westvale-demon-tokens"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-08-27T01:20:35Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x7   Swamp                  
  x6   Plains                 
  x2   Sunlit Marsh           WB dual, enters tapped
  x1   Evolving Wilds         Fetches a basic tapped
  x1   Westvale Abbey // Ormendahl, Profane Prince Payoff LAND - sac five for a 9/7
```

### CREATURES (10)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  1  Gravecrawler                                x1   B      Recurring death for {B} - morbid enabler R
  2  Butcher Ghoul                               x1   B      Two bodies per card (undying)            C
  2  Siege Zombie                                x2   B      Payoff - tap three bodies for damage     C
  2  Skirsdag High Priest                        x1   B      Payoff - tap two bodies for a 5/5 flier  R
  3  Falkenrath Torturer                         x2   B      FREE sac outlet - turns on morbid        C
  4  Bloodline Keeper // Lord of Lineage         x1   B      Width engine - free 2/2 flier each turn  M
  4  Mausoleum Guard                             x2   W      Width - dies into two flying Spirits     U
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  1  Tragic Slip                                 x2   B      Removal - morbid -13/-13                 C
  2  Gather the Townsfolk                        x2   W      Width - two Humans for two mana          C
  2  Infernal Grasp                              x1   B      Removal - unconditional                  U
  3  Lingering Souls                             x2   W      Width - four flying bodies per card      U
  3  Rally the Peasants                          x1   W      Payoff - width into damage, instant      U
```

### OTHER SPELLS (5)

```
CMC  Card                                    Qty  Color  Role                                     Rar
  2  Ghoulish Procession                         x1   B      Width - refills after a Westvale activation U
  2  Intangible Virtue                           x2   W      Token anthem AND vigilance enabler       U
  3  Cathar's Call                               x1   W      Width engine - a Human each end step + vigilance U
  3  Wedding Announcement // Wedding Festivity   x1   W      Width engine - a Human each end step     R
```

## SIDEBOARD (10)

```
Card                                        Qty  Color  Role / When to board in                  Rar
Soul-Guide Gryff                            x2   W      Graveyard hate (cube is 27% GY)          C
Cathar Commando                             x2   W      Artifact + enchantment removal           C
Sever the Bloodline                         x2   B      Exiles a creature and every copy of it   U
Valorous Stance                             x2   W      Protect a keystone or kill a fatty       U
Angelic Purge                               x2   W      Unconditional exile, paid with a spare token C
```

## ANALYSIS

### DECK IDENTITY

White-Black go-wide Aristocrats that wins by conversion, not by drain. It floods the board with 1/1 tokens and then cashes that width in three ways whose costs all read "tap" or "sacrifice" rather than "attack": Skirsdag High Priest turns two spare bodies plus any death into a 5/5 flying Demon, Siege Zombie turns three spare bodies into damage with nothing dying at all, and Westvale Abbey turns five bodies into a 9/7 flying lifelink indestructible Ormendahl. Intangible Virtue is the hinge — it gives every token vigilance, so the same creatures attack and still untap to pay those costs. Blood Artist and The Meathook Massacre are deliberately absent: this is the combat build of the archetype, not the drain build.

### THE VIGILANCE INTERACTION IS THE WHOLE DECK

Read the three payoff costs next to each other and the problem is obvious:

| Payoff | Cost | Creatures locked up |
|---|---|---|
| Skirsdag High Priest | {T}, Tap two untapped creatures you control | 3 (itself + two) |
| Siege Zombie | Tap three untapped creatures you control | 3 |
| Westvale Abbey | {5}, {T}, Sacrifice five creatures | 5, permanently |

Every one of them competes with the attack step for the same bodies. A token that attacked is tapped, and a tapped token cannot be tapped again. Without a fix, this deck must choose each turn between attacking and activating.

Intangible Virtue is the fix, and the +1/+1 is the smaller half of the card: "Creature tokens you control get +1/+1 **and have vigilance**." With it out, a board of six tokens attacks for 12, stays untapped, and then taps three for Siege Zombie and two more for a 5/5 Demon in the same turn. That is why it is a 2-of rather than a 1-of, and why it goes in ahead of larger anthems like Cathars' Crusade.

Cathar's Call is the same effect on a smaller scale — it grants vigilance to the creature it enchants and makes a Human every end step.

**The count:** 11 of the 23 nonland cards generate creature tokens — Lingering Souls ×2, Gather the Townsfolk ×2, Mausoleum Guard ×2, Cathar's Call, Wedding Announcement, Bloodline Keeper, Ghoulish Procession and Skirsdag High Priest. Westvale Abbey adds a twelfth from the land slot.

### WHY WESTVALE ABBEY IS A FREE ROLL, AND WHAT IT COSTS

Westvale Abbey is a Land, so it occupies a land slot rather than a spell slot. In a deck that already wants 17 lands, the payoff is effectively free — and it is close to unanswerable, because the cube contains essentially nothing that interacts with a land.

The cost is real and worth stating: it taps only for {C}. In a two-colour deck at 17 lands, that leaves 16 coloured sources against a nearly even pip split, which is why the base runs 7 Swamp, 6 Plains, 2 Sunlit Marsh and an Evolving Wilds and still lands at a ±0.7 percentage-point colour gap.

Its activation is also the most demanding line in the deck — five simultaneous bodies **and** five mana — which is why the structural gate counts it at a 0.5 reliability weight rather than as a full payoff copy.

### THE SIMULTANEITY TEST, AND WHY RECURSION IS NOT WIDTH

The grill proposed swapping Bloodline Keeper for Gravecrawler on the grounds that Bloodline Keeper's flip clause ("Activate only if you control five or more Vampires") is dead here — which it is, with only four nontoken Vampires in the list. That argument was declined on a count.

All three payoffs consume **simultaneous** creatures. Bloodline Keeper's "{T}: Create a 2/2 black Vampire creature token with flying" adds a net-new body every turn at zero mana, so its bodies *accumulate* toward five. Gravecrawler recurs the same body after it dies and never raises simultaneous width above one. They are not substitutes, and the deck runs both — Bloodline Keeper for accumulation, Gravecrawler for the cheap repeatable death that switches Skirsdag High Priest's morbid clause on for a single black mana.

The card that did get cut on this test was one of my own: Voldaren Bloodcaster triggers on "another **nontoken** creature you control dies," and this deck's deaths are overwhelmingly *token* deaths — Westvale Abbey sacrifices five, mostly tokens, and Falkenrath Torturer eats tokens. Its trigger is mostly off, and it was spending a rare slot.

### FALKENRATH TORTURER IS INFRASTRUCTURE, NOT VALUE

Skirsdag High Priest reads "Activate only if a creature died this turn." Without a free sacrifice outlet, the deck's primary payoff is switched off on every turn combat does not kill something — which, against a defensive opponent, is most turns. Falkenrath Torturer's "Sacrifice a creature: This creature gains flying until end of turn" costs no mana and can be activated at will, so a single 1/1 token turns the Demon factory on every turn. That is why the Engine slot runs at 13% against a 0–10% aggro band: this is a hard requirement, not a value package.

Its "If the sacrificed creature was a Human, put a +1/+1 counter on this creature" clause is also live constantly — Gather the Townsfolk, Cathar's Call, Wedding Announcement and Westvale Abbey all make **Human** tokens.

### RARITY BUDGET

All five rare/mythic slots are spent in the mainboard; the sideboard uses none.

| Card | Rarity | What the slot buys |
|---|---|---|
| Westvale Abbey // Ormendahl, Profane Prince | R | The payoff that costs a land slot instead of a spell slot |
| Skirsdag High Priest | R | A 5/5 flying Demon every turn from two spare bodies |
| Bloodline Keeper | M | A free 2/2 flier every turn — the accumulation engine (unflipped mode only) |
| Wedding Announcement | R | A free Human every end step, or a card |
| Gravecrawler | R | A one-mana repeatable death to switch on Skirsdag's morbid clause |

Cathars' Crusade was the strongest rare left on the table: against roughly twenty token entries onto a 5–8 wide board it is the largest raw payoff in the pool. It was declined because it is a rare at MV 5 and all five slots are committed to cards the assembly math depends on.

### WHAT THE DECK CANNOT ANSWER

Three coverage classes are conceded. The stack and graveyard concessions are pool facts — neither white nor black has a counterspell anywhere in the cube, and the dossier's structural census reports zero graveyard hate. The third is a deliberate trade: the only artifact and enchantment answers legal in these colours, Angelic Purge and Cathar Commando, both cost a permanent sacrificed in addition to the card. This deck's permanents are the resource its three payoffs consume, so maindecking them would mean spending width to answer a permanent — the exact trade the pipeline exists to avoid. Both sit in the sideboard, where the matchup justifies the price.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:3  2:10  3:7  4:3
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.8: Skirsdag High Priest@0.8, Westvale Abbey // Ormendahl, Profane Prince@0.5, Rally the Peasants@0.9, Bloodline Keeper // Lord of Lineage@0.6) → p=0.81 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.5: Wedding Announcement // Wedding Festivity@0.8, Cathar's Call@0.7) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 44%  T2 94%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Tragic Slip, Infernal Grasp
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  CONCEDED  noncreature_permanents: The only artifact/enchantment answers legal in these colours are Angelic Purge and Cathar Commando, and both are in the sideboard rather than the maindeck: each costs a card AND a permanent sacrificed, and this deck's permanents are the resource its three payoffs consume. Maindecking them would be spending width to answer a permanent, which is the exact trade the pipeline exists to avoid.
  CONCEDED  stack: Neither W nor B offers a counterspell anywhere in this pool. The deck answers permanents after they resolve.
  CONCEDED  graveyard: The dossier's structural census reports 0 graveyard-hate cards cube-wide; Soul-Guide Gryff is the pool's only clean answer in these colours and is a 5-mana one-shot, so it is sideboarded.
```

- No WARN flags were raised: curve PASS (1:5 / 2:11 / 3:8) and goldfish PASS (84% keepable, 84% on three lands by turn 3), so no structural response was required.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Westvale Abbey is itself the flood sink and it sits in the land slot: '{5}, {T}, Pay 1 life: Create a 1/1 white and black Human Cleric creature token' converts every surplus land into another body even on turns the five-creature transform is unavailable. Lingering Souls' 'Flashback {1}{B}' rebuys two more fliers from the graveyard, Gravecrawler recasts from the graveyard for {B} whenever a Zombie is out, and Sanitarium-style free engines (Cathar's Call, Wedding Announcement, Bloodline Keeper) keep producing bodies with no mana at all, so extra lands are never the only thing a draw step offers. |
| screw | mitigation | 3 one-drops and 10 two-drops mean 13 of 23 nonland cards are castable on two lands, and the two-mana plays are the deck's best: Gather the Townsfolk makes two bodies and Intangible Virtue upgrades every token that follows. The goldfish check reports 86% keepable hands and 88% on three lands by turn 3 with a near-even 8 W-source / 9 B-source split, so colour screw is rare even though Westvale Abbey taps only for {C}. |
| decapitation | mitigation | The three payoffs are mechanically independent and sit in three different card types. Skirsdag High Priest is a creature, Westvale Abbey is a LAND, and Siege Zombie is a 2-of common. An opponent who answers the Priest still faces a land that turns five tokens into a 9/7 indestructible flier, and Rally the Peasants can convert the same board into damage in a single attack without any permanent surviving on our side. |
| gas-out | mitigation | Three permanents produce a body every turn for free once resolved - Cathar's Call, Wedding Announcement and Bloodline Keeper - so an empty hand still adds to the width count each turn. Three more cards refuel from the graveyard rather than the hand: Lingering Souls' Flashback {1}{B}, Gravecrawler's 'You may cast this card from your graveyard as long as you control a Zombie' (Zombie sources: Siege Zombie x2, Butcher Ghoul x1, and Ghoulish Procession's tokens), and Butcher Ghoul's undying. That is 7 of 23 nonland cards that produce a resource with an empty hand. |
| raced | accepted | This deck cannot reliably win a damage race it is behind in, and mitigating that would cost its identity. The lifegain package that would stabilise it - Blood Artist, Fleshtaker, Lunarch Veteran, lifelink bodies - is exactly the drain package the shape judge ruled out as reintroducing a plan this thesis disclaims, and two drain builds exist elsewhere in this queue to play that game. Confirmed by count: 0 of 23 nonland mainboard cards have any lifegain text. What this build has instead is speed and evasion - a turn-6 goldfish, Skirsdag High Priest's 5/5 flier and Ormendahl's 9/7 lifelink flier both attacking over a ground stall, and Siege Zombie dealing damage no blocker can interact with. The trade is deliberate. |
| disruption-fizzle | mitigation | The Westvale Abbey turn is the one genuinely critical turn, and removal in response to the activation does not fizzle it: activation costs are paid on announcement, so the five creatures are already sacrificed and the land transforms regardless of what is done in response. Ormendahl also enters with indestructible, which blanks destroy-based removal. If the Abbey line is unavailable at all, Skirsdag High Priest and Siege Zombie convert the same board incrementally instead, so no single turn has to succeed. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Gryff, Elder Deep-Fiend, Abundant Maw, Distended Mindbender, It of the Horrid Swarm, Decimator of the Provinces | Emerge sacrifices ONE creature to discount a single 7-10 MV body. This pipeline's kill mechanism is the opposite trade: keep a wide board and convert its WIDTH into damage through Skirsdag High Priest, Siege Zombie and Westvale Abbey. Spending the board to cast one Eldrazi is the anti-plan; three are also rares against a 5-rare cap. |
| Griselbrand, Gisela, the Broken Blade, Brisela, Voice of Nightmares, Bruna, the Fading Light, Liesa, Forgotten Archangel, Restoration Angel, Subjugator Angel | MV 4-9 rare/mythic single large bodies. This deck's rare budget is already committed to the width-conversion engines (Westvale Abbey, Skirsdag High Priest, Bloodline Keeper, Wedding Announcement), and a deck that wins by board width does not want its slots in one expensive creature. |
| Demonic Taskmaster, Tree of Perdition | Demonic Taskmaster's 'At the beginning of your upkeep, sacrifice a creature other than this creature' is MANDATORY, so it eats a token every turn whether or not that turn wants one — in a deck that hoards width to tap for Skirsdag High Priest and Siege Zombie, forced attrition of the board is a cost, not an outlet. Tree of Perdition is a 0/13 defender that adds a body which can never attack and whose one-shot life-swap does nothing to convert width into damage; it is also a mythic against a fully committed 5-rare budget. |
| Helvault | '{1}, {T}: Exile target creature you control' EXILES rather than kills, so it produces no death trigger, and it removes a body from the width count instead of converting it. '{7}, {T}' to answer an opposing creature is unreachable at this land count. |
| Heartless Summoning | 'Creatures you control get -1/-1' kills every 1/1 Human, Spirit and Soldier token this deck makes on the spot — it deletes the board this entire pipeline is built to assemble. |
| Invasion of Innistrad // Deluge of the Dead | Flash -13/-13 on the front and two 2/2 Zombies on the back is genuinely on-plan, but the back face is reachable only after the Siege is cast at MV 4, defended by the chosen opponent and then attacked down, and it would need a sixth rare slot against a hard cap of 5 already committed to the width-conversion engines. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.09 adj [MV 2.43 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  52.2%  prod  52.9%  gap  -0.7pp  [OK]
  W  demand  47.8%  prod  47.1%  gap  +0.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool base                         cube mainboard                                  PASS
Commons / uncommons  max 2 each   highest count in deck is 2                      PASS
Rares / mythics      max 1 each   all five are single copies                      PASS
Rares / mythics      max 5 TOTAL  5 of 5 used (mainboard); sideboard uses 0       PASS
  Westvale Abbey // Ormendahl Profane Prince (R, a LAND), Skirsdag High Priest (R),
  Bloodline Keeper // Lord of Lineage (M), Wedding Announcement (R), Gravecrawler (R)
All cards from the cube                                                           PASS
Basic lands (format-supplied)     Swamp x7, Plains x6                             PASS
Mainboard 40 / Sideboard 10                                                       PASS
Colour usability in [W, B]        every nonland card                              PASS
```
