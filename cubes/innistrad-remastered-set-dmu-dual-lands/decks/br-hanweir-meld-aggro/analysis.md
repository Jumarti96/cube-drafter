---
deck_name: "br-hanweir-meld-aggro"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "RB"
format: "40-card"
built_at: "2026-08-31T17:02:22Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x10  Mountain
  x2   Swamp
  x2   Evolving Wilds                               fetches a basic
  x2   Geothermal Bog                               Swamp Mountain, taps for BR, enters tapped
  x1   Hanweir Battlements                          taps for R
```

### CREATURES (18)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Falkenrath Gorger                            x1    R     Threat/Payoff                  R
  1  Village Messenger // Moonrise Intruder       x2    R     Threat/Payoff                  C
  1  Voldaren Epicure                             x2    R     Threat/Payoff                  C
  2  Blood Petal Celebrant                        x2    R     Threat/Payoff                  C
  2  Bloodtithe Harvester                         x2    BR    Interaction                    U
  2  Furyblade Vampire                            x2    R     Threat/Payoff                  U
  2  Graf Rats                                    x2    B     Threat/Payoff                  U
  3  Hanweir Garrison                             x1    R     Threat/Payoff                  R
  3  Stromkirk Occultist                          x2    R     Threat/Payoff                  U
  5  Midnight Scavengers                          x2    B     Threat/Payoff                  C
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Lightning Axe                                x2    R     Interaction                    U
  3  Fiery Temper                                 x2    R     Interaction                    U
```

### OTHER SPELLS (1)

```
CMC  Card                                         Qty   Color Role                           Rar
  3  Stensia Masquerade                           x1    R     Threat/Payoff                  U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Killing Wave                                 x1    B     Flex: vs indestructible or hexproof threats -  U
Abrade                                       x2    R     Hate: vs artifacts and equipment - 24 artifact U
Infernal Grasp                               x2    B     Hate: vs single large threats this deck's dama U
Savage Alliance                              x2    R     Hate: vs go-wide token decks - the third escal U
Invasion of Innistrad // Deluge of the Dead  x1    B     Hate: vs graveyard decks - 75 graveyard cards, R
Olivia Voldaren                              x1    BR    Flex: vs grindy creature decks that go long -  M
Sever the Bloodline                          x1    B     Hate: vs recursive and undying threats and tok U
```

## ANALYSIS

### DECK IDENTITY

A red-black aggro deck that uses two of the cube's three meld pairs as its top end instead of paying for one. Eight one-mana and eight two-mana cards apply pressure from turn 1; Hanweir Garrison lands on turn 3 - in the 22.5% of games it is drawn that early - and adds two attacking Human tokens every combat. The meld pieces cost this deck almost nothing to run: Hanweir Battlements occupies a land slot rather than a spell slot, and Graf Rats and Midnight Scavengers are an uncommon and a common, so the pool rules allow two copies of each - the only meld pair in the cube that can be doubled. Stated plainly, because the archetype label invites the opposite reading: a meld actually executes by turn 6 in roughly 17% of games (see pair_assembly_counts), and the deck is built to win the other 83% as a red aggro deck. Hanweir Garrison is a complete card that never needs to meld, Stensia Masquerade gives the whole attacking board first strike, and both meld results - a 7/4 trample haste that makes two 3/2 attackers per swing, and a 5/6 haste menace that grants the rest of the board +1/+0 and menace - are upgrades to the same go-wide plan rather than a different one.

### THE MELD NUMBERS, HONESTLY

The archetype label invites the reading that this is a deck that melds. It is not; it is a red aggro
deck that sometimes melds, and the difference is worth stating in numbers rather than adjectives.
Hypergeometric, N=40, 13 cards seen (opening seven plus six draws at the thesis turn, on the play):

| Line | Copies | Drawn by T6 | **Executed by T6** |
|---|---|---|---|
| Graf Rats + Midnight Scavengers -> Chittering Host | 2 + 2 | 29.2% | **~12.5%** |
| Hanweir Garrison + Hanweir Battlements -> Hanweir, the Writhing Township | 1 + 1 | 10.0% | **~5.4%** |
| Either meld | | 37.0% | **~17%** |

Drawn is not executed, and the gap is where the two mechanical traps in this archetype live.

**The Hanweir meld is a six-land play, not a five-land play.** Tapping Hanweir Battlements is part of
the cost of its own activation, and Battlements produces only {C}. The {3}{R}{R} therefore has to come
from five *other* untapped lands. Six lands at 17 lands is a turn-6 event.

**Midnight Scavengers cast in main phase one has already missed that turn's meld.** Graf Rats reads
"At the beginning of combat on your turn" — a step that is gone by the time a {4}{B} creature resolves
in main phase 1. Chittering Host arrives the turn *after* Scavengers lands.

Both of these moved the thesis turn from 5 to 6 during the build. Neither is a reason not to run the
pairs — Hanweir Garrison is a complete card that never needs to meld, and Graf Rats and Midnight
Scavengers are a fine 2-drop and a fine 5-drop — but a deck that claims a meld plan and delivers it
one game in six should say so.

### WHY THIS PAIR AND NOT THE OTHER TWO

The pool rules cap rares and mythics at one copy. Three of the cube's five meld halves are rares or
mythics, so the Gisela/Bruna and Hanweir pairs can only ever be 1-of-plus-1-of. Graf Rats is uncommon
and Midnight Scavengers is common, so this is the only meld pair in the cube that can be run at two
copies each — roughly 2.9x more assemblable than either singleton pair at any point in the game. That
asymmetry is the entire reason this deck is two colours rather than mono-red, and it is a real cost:
6 black cards supported by 4 direct black sources of 17 lands.

### THE MADNESS SUB-ENGINE

Falkenrath Gorger reads "Each Vampire creature card you own that isn't on the battlefield has madness.
The madness cost is equal to its mana cost." Note what that does and does not buy: the cost is equal,
not reduced, so the benefit is that a discarded Vampire stops being card loss and gains instant speed,
not that it gets cheaper. The relevant counts against this list:

| | Count |
|---|---|
| Creature cards | 18 of 23 nonland |
| Vampire creature cards | 11 of 18 (61%) |
| Vampires Gorger actually turns on (it cannot grant madness to itself while it is the source) | 10 of 18 (56%) |
| Cards with printed madness | 4 of 23 (Fiery Temper x2, Stromkirk Occultist x2) |
| Discard outlets | 10 of 23 - Lightning Axe x2, Furyblade Vampire x2, and 6 Blood-token sources |

The Blood-token count is six, not four: Voldaren Epicure x2 and Bloodtithe Harvester x2 make one on
entry, and Blood Petal Celebrant x2 makes one on death.

The honest limit: Gorger is 1 of 40, so he is in the first 13 cards 32.5% of the time. In the other
67.5%, Lightning Axe's "discard a card or pay {5}" is fed for free by only 4 of 23 nonland cards, and
this deck's hand is normally empty by turn 4 — so Lightning Axe is sometimes {R} plus {5}, not {R}.

### WHAT STENSIA MASQUERADE IS DOING HERE

It replaced Mass Hysteria at the grill stage, and the swap is the clearest example in this build of a
count beating an adjective. Mass Hysteria was bought to let Hanweir Garrison attack the turn it lands;
both cards are 1-ofs, so that line is live in 10.0% of games, and Hanweir Battlements already carries
"{R}, {T}: Target creature gains haste until end of turn." A capped rare slot was buying a 1-of
duplicate of a 1-of land's ability.

Stensia Masquerade's "Attacking creatures you control have first strike" applies to every body the
deck attacks with — 18 creature cards, plus two 1/1 Humans per Hanweir Garrison attack, plus two 3/2
Eldrazi Horrors per melded-Hanweir attack. On a board of 1/1 and 2/1 tokens, team-wide first strike
inverts nearly every combat this deck currently loses. It is uncommon, so it costs nothing against the
5-rare cap, and its "Madness {2}{R}" is payable off 10 of 23 nonland cards.

### WHAT THE COLOURS COST

Red is 78% of the pip demand and black 22%, which makes the black half of the deck the fragile part:
4 direct black sources of 17 lands supporting a {1}{B} two-drop, a {4}{B} five-drop and a {B}{R}
two-drop. Two of those four sources (Geothermal Bog) enter tapped. This is the price of the doubled
meld pair and it is paid knowingly.

The other price is graveyard hate. Red and black CAN answer graveyards in this pool — Invasion of
Innistrad // Deluge of the Dead reads "{2}{B}: Exile target card from a graveyard" — but at {2}{B}{B}
against four black sources it is not a maindeck card, so it sits in the sideboard for the matchups
that justify it. Against a cube that is 27% graveyard cards, that is the single largest structural
weakness of the red-black version of this archetype, and the strongest argument for the white-black
build over this one.

### PLAY NOTES

- Do not hold Graf Rats back once Midnight Scavengers is on the battlefield. The meld trigger reads
  "exile them, then meld them" - mandatory, at the beginning of your combat. Plan the turn around
  Chittering Host's "other creatures you control get +1/+0 and gain menace until end of turn".
- Both meld lines are fizzleable. The Battlements activation eats removal in response, and so does the
  Graf Rats trigger - a triggered ability uses the stack. The Graf Rats line is in fact the worse one
  to hold, because the trigger is mandatory, so you cannot decline it to play around held-up removal.
  Nothing in red or black in this pool grants hexproof or indestructible, so this is unmitigable rather
  than merely expensive; the answer is threat redundancy, not protection.
- Hanweir Garrison's tokens enter tapped and attacking. They cannot crew a Vehicle or pay a tap cost on
  the turn they arrive - this is why Skirsdag High Priest and Honeymoon Hearse are both absent.
- Village Messenger's transform clause ("if no spells were cast last turn") will essentially never fire
  for you. It is in the deck as a one-mana haste body, not as a Werewolf.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:7  2:8  3:6  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  early_attacker: 13 copies → p=0.99 (need ≥ 0.75)
  PASS  removal: 6 copies (effective 5: Bloodtithe Harvester@0.5, Bloodtithe Harvester@0.5) → p=0.82 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 78%  T2 95%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. The plan is to be faster: 11 creature cards are castable by turn 2 and the goldfish clock is turn 5-6, so an opposing wide board usually arrives after the race is decided, and Chittering Host's 'other creatures you control get +1/+0 and gain menace' pushes our own board through blockers rather than removing theirs. Savage Alliance x2 ('1 damage to each creature target opponent controls') and Killing Wave are the sideboard answers for the matchups where that race is unfavourable.
  OK        single_large_threat: Lightning Axe, Bloodtithe Harvester, Fiery Temper
  CONCEDED  noncreature_permanents: No mainboard artifact or enchantment removal. Artifact density is 24 cards (8.7%) and enchantment density 25 cards (9.0%); at a turn-6 thesis a reactive slot that answers a permanent is worse than a threat that shortens the game by a turn. Abrade x2 is the sideboard response and is never dead there because its first mode is 3 damage to a creature.
  CONCEDED  stack: No counterspells exist in red or black in this pool. The discard-based stack interaction that does exist (Collective Brutality) is rare, and the five rare/mythic slots are spent on Hanweir Garrison, Hanweir Battlements, Falkenrath Gorger, Olivia Voldaren and Invasion of Innistrad. The deck's substitute is tempo: a turn-1 threat and a hand emptied by turn 4 mean countermagic trades down against cards that have already resolved.
  CONCEDED  graveyard: RETRACTED AND CORRECTED at Phase 9. An earlier version of this declaration claimed graveyard hate was 'UNANSWERABLE IN THESE COLOURS' on the basis of a pool scan. That claim was false, and my own scan had in fact surfaced the counterexample: Invasion of Innistrad // Deluge of the Dead has colour identity [B] and reads '{2}{B}: Exile target card from a graveyard' - repeatable, opponent-facing graveyard exile inside this deck's colours. The class is therefore answerable, and the honest label is UNANSWERED IN THE MAINBOARD AT AN ACCEPTABLE COST, not unanswerable. Two costs, both real: the card is {2}{B}{B} against 4 direct black sources of 17 lands in a deck whose black pip demand is 22%, so it is a turn-5-or-later play rather than a curve card; and it is rare, so it consumes one of the five capped rare/mythic slots. It is played as a sideboard slot against the cube's 75 graveyard cards (27.1%, the largest threat class in the cube), where those two costs are paid deliberately in the matchup that justifies them.
```

_No WARN-tier structural flags were raised._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Surplus lands have three sinks. Hanweir Battlements' '{R}, {T}: Target creature gains haste until end of turn' is a repeatable use for a spare land and a spare red, and its '{3}{R}{R}, {T}' meld is a five-mana sink. SIX Blood-token sources - Voldaren Epicure x2, Bloodtithe Harvester x2 and Blood Petal Celebrant x2 ('When this creature dies, create a Blood token'), corrected from a previously stated four - each convert '{1}, {T}, Discard a card, Sacrifice this token' into a fresh card, and with Falkenrath Gorger out the discarded card is often a Vampire cast at instant speed off the same excess mana. Stated limit: two of the three sinks are the same single card, Hanweir Battlements, which is 1 of 40. |
| `screw` | mitigation | Eight of the 23 nonland cards cost one mana (Village Messenger x2, Voldaren Epicure x2, Lightning Axe x2, Falkenrath Gorger, Mass Hysteria) and eight more cost two, so a two-land hand deploys on curve for the first four turns. Seventeen lands with only two entering tapped, plus Evolving Wilds x2, keep colours reachable. The goldfish simulation reports 84% keepable and an 81% chance of a turn-1 play. |
| `decapitation` | mitigation | No single card is the deck: 16 of the 23 nonland cards are creatures and the melds are an upgrade on a board that is already attacking, not the plan itself. When a meld half is answered, Midnight Scavengers x2 returns 'target creature card with mana value 3 or less' - which covers both Graf Rats (MV 2) and Hanweir Garrison (MV 3), the two halves most likely to draw removal. The compulsory Graf Rats meld is the one real exposure: two bodies become one 5/6 that a single removal spell answers, and Chittering Host's board-wide '+1/+0 and gain menace' fires on entry, so the turn it forms is the turn to attack with everything rather than to hold back. |
| `gas-out` | mitigation | The deck's refuel is attached to attacking rather than to a card-draw slot. Stromkirk Occultist x2: 'Whenever this creature deals combat damage to a player, exile the top card of your library. Until end of turn, you may play that card.' Six Blood-token sources (corrected from four - Blood Petal Celebrant x2 also makes one on death) filter a dead card into a live one. Falkenrath Gorger turns every discard into an instant-speed Vampire deployment across 10 of 18 creature cards. Midnight Scavengers x2 return an MV 3-or-less creature from the graveyard on entry. That is 11 of 23 nonland cards that replace or recur a card. Sideboard note for the grindy matchups: Invasion of Innistrad's back face makes two 2/2 Zombie bodies when the Siege is defeated, which is a second wave a card-empty board otherwise lacks. |
| `raced` | mitigation | This deck is the fast clock rather than its victim: eight one-drops, an 81% turn-1 play rate, 18 creature cards, and six removal spells at MV 1-3 to clear the blocker in the way, now backed by Stensia Masquerade's 'Attacking creatures you control have first strike', which wins the combats a 1/1-and-2/1 board otherwise loses. Two costs stated rather than hidden. First, Lightning Axe is '{R} for 5 damage' only when the discard is free, and without Falkenrath Gorger on the battlefield only 4 of 23 nonland cards discard profitably (Fiery Temper x2 and Stromkirk Occultist x2 have printed madness); Gorger is in the first 13 cards 32.5% of the time, and the deck's hand is normally empty by turn 4, so the real cost is sometimes '{R} plus {5}'. Second, the cube's 15 lifegain cards are the class that most directly beats a damage race, and this deck's total non-combat reach is 10 damage across 4 of 23 nonland cards (Fiery Temper x2 at 3, Voldaren Epicure x2 at 1). |
| `disruption-fizzle` | accepted | The turn-6 meld turn is genuinely interactable and the deck does not insulate it. Removal on Hanweir Garrison in response to the {3}{R}{R} activation fizzles the meld and wastes five mana; the deck's only answer is Midnight Scavengers x2 returning Garrison from the graveyard a turn later. CORRECTION to an earlier claim in this entry: the Graf Rats line is NOT immune. Its meld is a triggered ability at the beginning of combat, and a triggered ability uses the stack - an opponent kills either half in response and nothing melds. It is in fact the worse of the two lines to hold, because the trigger is mandatory ('exile them, then meld them', not 'you may'), so the controller cannot decline it to play around held-up removal. The acceptance stands on its cost: mitigating would mean maindecking protection, and the pool offers none in these colours - I scanned it, and 9 cards carry hexproof, indestructible or shroud and not one is R/B-legal. The combat tricks that ARE available (Borrowed Hostility, Uncaged Fury) grant no hexproof, no indestructible and in Borrowed Hostility's case no toughness, so neither would have saved a Garrison from Infernal Grasp. The risk is not expensive to mitigate; in these colours it is unmitigable, and the deck's answer is redundancy of threats rather than protection of one. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Gryff, Elder Deep-Fiend, Abundant Maw, Distended Mindbender, Decimator of the Provinces, It of the Horrid Swarm | Emerge Eldrazi: every emerge cost needs {U}, {G} or {B}{B} on top of 5-6 generic ('Emerge {5}{U}', 'Emerge {6}{B}', 'Emerge {5}{B}{B}', 'Emerge {6}{G}{G}{G}'), and the printed costs are {7}-{10}. Uncastable on a 16-17 land RB aggro curve, and sacrificing a creature to cast one undoes the go-wide board. |
| Emrakul, the Promised End, Griselbrand, Through the Breach, Tree of Perdition, Mirrorwing Dragon, Triskaidekaphobia, Conjurer's Closet, Tamiyo's Journal, Helvault, Epitaph Golem, Soul Separator, Geistcatcher's Rig, Boarded Window, Heartless Summoning, Cryptolith Fragment // Aurora of Emrakul, Invasion of Innistrad // Deluge of the Dead | Too slow for a turn-5 goldfish: every one of these costs 3 or more mana for an effect that does not add power to the board or remove a blocker on the turn it lands. Heartless Summoning specifically kills every 1/1 Human token Hanweir Garrison makes ('Creatures you control get -1/-1'), and Through the Breach sacrifices the creature it cheats in, which would destroy a meld half. |
| Hungry Ridgewolf, Runebound Wolf, Ulrich's Kindred, Geier Reach Bandit // Vildin-Pack Alpha, Hanweir Watchkeep // Bane of Hanweir, Smoldering Werewolf // Erupting Dreadwolf, Kruin Outlaw // Terror of Kruin Pass, Conduit of Storms // Conduit of Emrakul | Werewolf and Wolf cards: the transform condition reads 'if no spells were cast last turn', which a deck running 8+ cheap removal and card-flow spells will essentially never meet. COUNT CORRECTED at Phase 9: the earlier reason said this list has 'zero Wolves', but Hungry Ridgewolf reads 'another Wolf OR WEREWOLF' and Runebound Wolf reads 'the number of Wolves AND WEREWOLVES you control', and the list runs 2 Werewolves (Village Messenger x2). The true count is 2 of 18 creature cards, which still does not support either card. Ulrich's Kindred's ability costs {3}{G}, off-identity. |
| Asylum Visitor, Restless Bloodseeker // Bloodsoaked Reveler, Voldaren Bloodcaster // Bloodbat Summoner, Gluttonous Guest, Bloodline Keeper // Lord of Lineage, Desperate Farmer // Depraved Harvester, Demonic Taskmaster, Archghoul of Thraben, Sanitarium Skeleton, Ecstatic Awakener // Awoken Demon, Morkrut Banshee, Galvanic Juggernaut, Lupine Prototype, Honeymoon Hearse, Angel's Tomb, Chalice of Life // Chalice of Death | CORRECTED at Phase 9. The original bucket reason - 'grindy or conditional value engines that do not add damage on the turn they are cast' - named a mechanism for only four of these cards and swept up count-dependent cards without counting them. Per card: Bloodline Keeper needs five Vampires to flip; Demonic Taskmaster's mandatory upkeep sacrifice would eat a meld half; Archghoul of Thraben only sees Zombie cards and this list has 0 of 18; Lupine Prototype 'can't attack or block unless a player has no cards in hand'; Asylum Visitor, Restless Bloodseeker, Gluttonous Guest and Desperate Farmer all need a condition (empty hand, lifegain this turn, a Blood sacrifice, another creature dying) that this deck does not reliably supply on the turn they are cast. TWO CARDS ARE RE-JUDGED ON COUNTS THEY SHOULD HAVE HAD AT 5A: Voldaren Bloodcaster ('Whenever this creature or another nontoken creature you control dies, create a Blood token') reads 18 nontoken creature cards and IS a repeatable Blood engine and therefore repeatable Falkenrath Gorger fuel - it is cut on the rare cap, which is fully spent, not on its rate. Honeymoon Hearse ('Tap two untapped creatures you control') reads a count of untapped bodies, and it is cut on the same anti-synergy already recorded for Skirsdag High Priest: Hanweir Garrison's Human tokens enter TAPPED and attacking, so they cannot crew it on the turn they arrive. Stensia Masquerade was ALSO cut in this bucket and that cut was wrong - it is count-dependent (11 of 18 Vampires, team-wide first strike, madness payable off 10 of 23 nonland cards) and it is now in the mainboard. |
| Deadly Allure, Edgar's Awakening, Alchemist's Greeting, Haunted Dead, Borrowed Hostility, Neglected Heirloom // Ashmouth Blade, Stitcher's Graft, Burning Vengeance, Wild-Field Scarecrow | Outclassed by an included slot-mate at the same or lower cost: Alchemist's Greeting at {4}{R} versus Lightning Axe at {R}; Edgar's Awakening at {3}{B}{B} versus Crawl from the Cellar at {B} in a deck with 4 direct black sources. Deadly Allure's flashback costs {G}, off-identity. Stitcher's Graft's 'doesn't untap during its controller's next untap step' is a direct anti-synergy with attacking every turn. SEVER THE BLOODLINE IS RE-JUDGED: the earlier reason ('outclassed by Infernal Grasp at {1}{B}') was wrong and is contradicted by this deck's own sideboard, where the card is played. Infernal Grasp destroys; Sever exiles and hits every creature with the same name, which is why it answers the cube's undying, disturb and flashback recursion and its token decks. It is out of the MAINBOARD on rate ({3}{B} for one exile against 4 direct black sources) and in the sideboard on function. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.22   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.37 adj [MV 2.22 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  22.2%  prod  23.5%  gap  -1.3pp  [OK]
  R  demand  77.8%  prod  70.6%  gap  +7.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```

```