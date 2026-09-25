---
deck_name: "bg-tracker-clue-grind"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-08-28T05:20:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Evolving Wilds               TWO land entries per copy; the sac is a Gitrog draw
  2x Haunted Mire                 BG dual, enters tapped; NOT basic
  9x Forest                       
  5x Swamp                        
```

### CREATURES (10)

```
CMC  Card                             Qty   Color  Role                                Rar
  1  Groundskeeper                    x2    G      Basic-land recursion / mana sink    U
  2  Noose Constrictor                x2    G      Reach body + free discard outlet    U
  3  Eccentric Farmer                 x2    G      Mill 3 + land card to hand          C
  3  Tireless Tracker                 x1    G      Pipeline payoff - Clue per land en  R
  4  Lumberknot                       x2    G      Hexproof clock, grows on every dea  U
  5  The Gitrog Monster               x1    BG     The only true extra land drop in B  M
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                             Qty   Color  Role                                Rar
  1  Eaten Alive                      x1    B      Exile - answers a creature OR a pl  C
  1  Killing Wave                     x1    B      Scalable sweeper - the wide-board   U
  1  Tragic Slip                      x2    B      One-mana removal, morbid live       C
  2  Grapple with the Past            x1    G      Instant mill + rebuy a killed engi  C
  2  Infernal Grasp                   x2    B      Unconditional removal               U
  2  Murderous Compulsion             x1    B      Removal; madness live off Noose Co  C
  3  Maelstrom Pulse                  x1    BG     Catch-all noncreature answer        R
```

### OTHER SPELLS (3)

```
CMC  Card                             Qty   Color  Role                                Rar
  3  Ulvenwald Mysteries              x2    G      Clue engine that removal can't tou  U
  5  Wrenn and Seven                  x1    G      Mass land entries + land-count bod  M
```

## SIDEBOARD (10)

```
Card                             Qty   Color  Role / When to board in                  Rar
Ambush Viper                     x2    G      vs. Vampire (23) / Werewolf (13) aggro -  C
Clear Shot                       x2    G      vs. large threats and fliers once Lumber  U
Sever the Bloodline              x2    B      vs. recursive and DUPLICATED creatures -  U
Collective Brutality             x1    B      vs. combo/control - the only hand disrup  R
Murderous Compulsion             x1    B      vs. decks that must attack; 2nd copy      C
Wild-Field Scarecrow             x1    C      vs. colour screw and attrition - two bas  C
Morbid Opportunist               x1    B      vs. creature mirrors - draws on the rais  U
```

## ANALYSIS

### DECK IDENTITY

BG Clue-grind attrition. Lands here are a card-advantage tax base, not a win condition: Tireless Tracker banks a Clue for every land that ENTERS, The Gitrog Monster supplies the only genuine extra land drop in BG, and both Evolving Wilds turn one land drop into two entries. Because the Tracker is a rarity-capped singleton, the deck deliberately runs two engines that read no land at all - Ulvenwald Mysteries, an enchantment that investigates on creature deaths and so survives the removal aimed at the Tracker, and Noose Constrictor, whose free discard outlet converts flooded lands into growth. Eight removal spells hold the board while the cards pile up, and the game ends on a hexproof Lumberknot that has collected a counter for every creature either player lost.


### WHAT THIS CUBE ACTUALLY SUPPORTS, AND WHAT IT DOESN'T

The grill surfaced a fact worth putting at the top, because it reframes the whole archetype: **Tireless Tracker is the only card in all 305 pool cards whose oracle text contains the word "landfall."** It is a rare, so the pool rules cap it at one copy. This cube does not support a landfall deck. What it supports is **land-card recursion** - effects that move a land card between graveyard, hand and battlefield - and that is what this list is built on.

The honest numbers, recomputed during the self-grill rather than asserted:

| quantity | first claim | actual (20,000-iteration sim) |
|---|---|---|
| land entries by end of turn 8 | 11-13 | **6.9 mean** |
| Clues from Tireless Tracker by turn 8 | 11-13 | **0.88 mean** |
| games with zero Tracker Clues by turn 8 | - | **70.2%** |
| P(Tireless Tracker seen by turn 8) | - | **35.0%** |

The arithmetic is unavoidable: by turn 8 on the play you have seen 14 cards, and 14 x 18/40 = 6.3 lands. The first version of this deck routed almost all of its card advantage through a single rare that is absent from two games in three. The rebuild fixed that, and it is the reason the list looks less like a landfall deck than you might expect.

### THE THREE ENGINES, AND WHY ONLY ONE OF THEM READS A LAND

| Engine | Reads | Copies | Survives creature removal? |
|---|---|---|---|
| Tireless Tracker | land ENTRIES | 1 (rarity-capped) | no |
| Ulvenwald Mysteries | creature DEATHS | 2 | **yes - it is an enchantment** |
| Noose Constrictor | cards in HAND | 2 | no, but it is a 2-drop |

Ulvenwald Mysteries is the quiet centrepiece. *"Whenever a nontoken creature you control dies, investigate"* pays off the deck's own removal-heavy game plan, and because it is an enchantment the removal aimed at the Tracker cannot touch it. Its second clause, *"Whenever you sacrifice a Clue, create a 1/1 white Human Soldier creature token,"* means cracking a Clue also leaves a blocker - which is how an attrition deck can afford to spend {2} on card draw during a race.

### DROP vs ENTRY - the distinction that decides what belongs here

Tireless Tracker reads *"Whenever a land you control **enters**."* Not "whenever you play a land." That splits the pool's lands-matter cards into three groups, and only two of them are worth slots:

- **Extra land DROP** (one card in all of BG): The Gitrog Monster, *"You may play an additional land on each of your turns."*
- **Extra land ENTRY without using a drop**: Wrenn and Seven's *"0: Put any number of land cards from your hand onto the battlefield tapped"*, and Evolving Wilds, where the Wilds enters and then fetches a basic that also enters - **two entries off one land drop**, which is why both copies are in despite producing no mana.
- **Land card to HAND, which is neither**: Wild-Field Scarecrow, Traveler's Amulet, Groundskeeper, Eccentric Farmer. These only matter when you have a spare drop to spend them on.

That last group is why Groundskeeper is a 2-of and not a 4-of-equivalent: it is only live once a basic is in the graveyard, and this deck's whole supply of that is Eccentric Farmer x2, Grapple with the Past, and Gitrog's upkeep sacrifice.

### THE CLOCK IS UNANSWERABLE BY REMOVAL, NOT UNANSWERABLE

Lumberknot is *"Hexproof"* and *"Whenever a creature dies, put a +1/+1 counter on this creature"* - it counts every creature dying, on both sides, and this deck manufactures 8 of those with removal. Targeted removal cannot touch it. It is worth being precise about the limit, though: hexproof stops targeting, not sacrifice effects or mass -X/-X. This deck's own Killing Wave answers a Lumberknot cleanly, and Killing Wave is an uncommon any opponent can also run two of.

### WHAT THIS DECK SIMPLY DOES NOT DO

Two classes are conceded rather than half-answered, and both concessions were verified against the pool rather than assumed:

- **Stack**: no card in this cube's BG pool counters a spell. Collective Brutality's hand disruption is the nearest thing and it is proactive.
- **Graveyard**: BG has **no** graveyard hate here. Scanning every BG and colourless card for an exile-from-graveyard effect returns only Soul Separator (8 mana total, one target) and Bramble Wurm exiling itself. Sever the Bloodline is in the sideboard for recursive and duplicated CREATURES on the battlefield - the only occurrence of the word "graveyard" in its text is its own flashback reminder. Against the cube's largest threat class (75 cards, 27.1% density) this deck does not interact, it just tries to be ahead on cards.

### PLAY PATTERN

Turn 1-2 is Groundskeeper, Tragic Slip, Eaten Alive or Noose Constrictor - 12 of the 22 nonland cards cost two or less, which is why 88% of opening hands are keepable. Turn 3 is Tireless Tracker or Eccentric Farmer, turn 4 Lumberknot or Ulvenwald Mysteries. From there the deck answers everything it can and banks Clues; Gitrog on turn 5 doubles the land-drop rate and turns its own upkeep tax into a card. The game ends with a Lumberknot that has been quietly collecting a counter for every creature either player has lost since turn 3.

### TWO PRECISION NOTES FROM THE GRILL

`Eaten Alive` widens the noncreature-permanent coverage class for the pool's **7 planeswalkers only** - its text is "Exile target creature or planeswalker," so the cube's 24 artifacts and 25 enchantments still rest on `Maelstrom Pulse` alone. That is a pool limit, not a build choice: the dossier's threat profile shows artifact answers exist only in red and white and enchantment answers only in white, so BG has nothing to add at any slot count.

And `Noose Constrictor`'s discard outlet gives "+1/+1 **until end of turn**" - it converts a flooded land into a temporary pump, not a permanent counter. It is a mana sink and a madness enabler, not a growth engine like Lumberknot.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:6  2:6  3:6  4:2  5:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.4: Tireless Tracker@0.8, Wrenn and Seven@0.8, The Gitrog Monster@0.8) → p=0.83 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 9.4: Groundskeeper@0.7, Groundskeeper@0.7, Ulvenwald Mysteries@0.7, Ulvenwald Mysteries@0.7, Noose Constrictor@0.8, Noose Constrictor@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 67%  T2 93%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Killing Wave, Maelstrom Pulse
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Murderous Compulsion, Eaten Alive, Maelstrom Pulse
  OK        noncreature_permanents: Maelstrom Pulse, Eaten Alive
  CONCEDED  stack: No card in the BG pool of this cube counters a spell; this deck answers the permanent a spell makes rather than the spell itself. Collective Brutality's 'Target opponent reveals their hand. You choose an instant or sorcery card from it. That player discards that card' is the nearest thing and is proactive, not reactive.
  CONCEDED  graveyard: BG has NO graveyard hate in this pool - verified by scanning every BG and colourless card for an exile-from-graveyard effect; the only hits are Soul Separator (8 mana total, single target) and Bramble Wurm self-exiling. Sever the Bloodline is NOT a graveyard answer: the only occurrence of the word graveyard in its text is its own flashback reminder. It is boarded against recursive and duplicated CREATURES, on the battlefield. Against the cube's 27.1%-density graveyard class this deck simply does not interact, and exiling creatures with Sever the Bloodline and Eaten Alive is the nearest available substitute.
```

- Curve PASS, Assembly PASS, Goldfish PASS and Coverage PASS - no WARN-tier flag was raised. The Phase 6 mana audit did return WARN (green gap +11.1pp) after the grill repairs shifted the list greener; the basics were rebalanced from 8 Forest / 6 Swamp to 9 / 5 and the audit re-run to PASS at +/-5.6pp. That is a composition change, not a land-count change - the count stayed at 18.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Stated with the honest split rather than as a blanket claim. With Tireless Tracker on the battlefield a surplus land is a Clue, i.e. a card - but the Tracker is a rare capped at one copy and is seen in only 35% of games by turn 8, so it cannot be the whole answer. The primary flood sink is Noose Constrictor x2: 'Discard a card: This creature gets +1/+1 until end of turn' is a free, repeatable, instant-speed discard outlet that converts a surplus land into a +1/+1 until end of turn at zero mana, with no rare dependency, and it turns on Murderous Compulsion's Madness {1}{B}. Groundskeeper x2 is the secondary sink, and it is now genuinely enabled - Eccentric Farmer x2 and Grapple with the Past put basics in the graveyard independently of The Gitrog Monster. |
| screw | mitigation | Two-land hands keep on the cheap half: Groundskeeper {G} x2, Tragic Slip {B} x2, Eaten Alive {B} x1, Killing Wave {X}{B} x1, Infernal Grasp {1}{B} x2, Noose Constrictor {1}{G} x2, Murderous Compulsion {1}{B} x1 and Grapple with the Past {1}{G} x1 are 12 of the 22 nonland cards at two mana or less. Digging out is Eccentric Farmer x2 and Grapple with the Past ('return a creature or land card from your graveyard to your hand') plus both Evolving Wilds. Structural goldfish: 88% keepable, 92% on three lands by turn 3. |
| decapitation | mitigation | Tireless Tracker is a singleton creature and will be killed on sight, so the deck does not depend on it. Ulvenwald Mysteries x2 is an ENCHANTMENT ('Whenever a nontoken creature you control dies, investigate') and is untouched by creature removal - it even profits from the Tracker dying. Wrenn and Seven is a planeswalker, so creature removal and sweepers both miss it. Grapple with the Past ('return a creature or land card from your graveyard to your hand', 28 of 40 cards are legal targets) rebuys a killed Tracker or Gitrog. The clock, Lumberknot x2, has hexproof: it is unanswerable by TARGETED removal - not unanswerable outright, since sacrifice effects and mass -X/-X still reach it, including this deck's own Killing Wave. |
| gas-out | mitigation | Counted correctly rather than generously: cards that actually produce a card or a Clue are Tireless Tracker, The Gitrog Monster, Wrenn and Seven, Ulvenwald Mysteries x2, Eccentric Farmer x2 and Grapple with the Past - 8 of 22 nonland cards, of which 5 are not rarity-capped singletons. Groundskeeper and the land-search effects are deliberately NOT counted here: they return lands, not cards. An empty hand with two Clues in play is two cards on demand, and Ulvenwald Mysteries keeps making more off the deck's own removal. |
| raced | accepted | The thesis turn is 8 and the cube's Vampire (23) and Werewolf (13) rosters plus a 58-card, 20.9%-density evasion class can kill first. This build spends 8 of 22 nonland slots on removal and has three reach bodies (Noose Constrictor x2 and Wrenn's Treefolk token) rather than the one it had before the grill, but it still has no flier and no lifegain. Cutting engine for more cheap blockers would leave a deck that survives to turn 10 with nothing to convert with - the engines ARE the win condition. The cost is named rather than hedged: this deck can lose to a curve-out before its Clues matter. The sideboard answers it - Ambush Viper x2, Clear Shot x2 and the second Murderous Compulsion are 5 of the 10 sideboard cards. |
| disruption-fizzle | mitigation | There is no single critical turn to disrupt - that is the point of an attrition plan, and it is the mode this deck is structurally best against. The earlier version of this entry claimed 'the Clue count only goes up'; that premise is withdrawn, because the recomputed Clue count is 0.88 by turn 8. What actually holds is redundancy of KIND: the three engines read three different resources (land entries, creature deaths, cards in hand), so a single piece of disruption cannot turn all three off, and Ulvenwald Mysteries x2 sits on a permanent type the cube's removal barely touches. Grapple with the Past is the recovery card. What folds is a counterspell on a key turn, and coverage.stack concedes that outright - no card in this cube's BG pool counters a spell. |


### CARDS CONSIDERED BUT EXCLUDED

| Cards | Reason |
|---|---|
| Wild-Field Scarecrow (from the mainboard) | CUT IN THE GRILL, and worth reading before you swap it back. The build originally ran 2 copies and described them as 'TWO extra land drops'. That is wrong: the oracle text is '{2}, Sacrifice this creature: Search your library for up to two basic land cards, reveal them, put them into your HAND'. Cards in hand are neither land drops nor land entries, and Tireless Tracker reads 'Whenever a land you control ENTERS'. It costs {3} to cast plus {2} to sacrifice - five mana across two turns for two land cards - in a deck that has already drawn 6.3 lands by turn 8. It is screw insurance, which is why one copy is in the sideboard rather than two in the maindeck. |
| Traveler's Amulet | '{1}, Sacrifice this artifact: Search your library for a basic land card... put it into your hand' - the same function as Wild-Field Scarecrow at 2 total mana for 1 basic instead of 5 for 2, so it is the more efficient version of an effect this deck decided it did not want. It puts a card in HAND, not onto the battlefield, so it produces a Tracker Clue only on a turn you already had a spare land drop - which requires The Gitrog Monster, a 1-of mythic online in roughly 30% of games by turn 8. |
| Abundant Growth | 'When this Aura enters, draw a card' plus 'Enchanted land has "{T}: Add one mana of any color"' - it would be this deck's only cantrip (the audit reports cantrip_count 0) and would flatten the +5.6pp green gap. Cut because it adds no land entry, no body and no answer, in a list where every one of those three is doing more work. It is the correct swap if the mana ever feels awkward. |
| The Meathook Massacre, Garruk Relentless // Garruk, the Veil-Cursed, Traverse the Ulvenwald, Cultivator Colossus, Deathcap Glade | RARE/MYTHIC BUDGET. All five slots are spent on Tireless Tracker, The Gitrog Monster, Wrenn and Seven, Maelstrom Pulse and Collective Brutality. The Meathook Massacre is strictly better than Killing Wave as a sweeper ('each creature gets -X/-X' plus drain on every death) and is the first card in if the cap is ever raised. Garruk Relentless is repeatable removal on a permanent, which is exactly what an attrition deck wants. Traverse the Ulvenwald's delirium is live here (6 card types available against the 4 needed) and it is cut purely on the cap. Cultivator Colossus was rejected at the shape-judge stage for inverting the thesis - this deck's lands are a tax base, not a win condition. |
| Blood Artist | A GENUINE NEAR-MISS, and it was originally cut on a wrong reason. It was banded with the Vampire-count cards, but its oracle text - 'Whenever this creature OR ANOTHER CREATURE dies, target player loses 1 life and you gain 1 life' - reads no Vampire count and no sacrifice outlet. It reads the same both-sides death rate the deck credits Lumberknot for: 8 removal spells plus 10 creature cards plus the opponent's board. It lost the slot to Noose Constrictor, which fills the same inevitability role AND supplies the reach body and discard outlet the deck was missing - but if you want a second inevitability source, this is it. |
| Spore Crawler | 'When this creature dies, draw a card' on a 3/2 body - a card that replaces itself and is simultaneously an Ulvenwald Mysteries investigate, a Lumberknot counter and a Tragic Slip morbid enabler. Recorded because it never entered the Phase 5A seed at all: its synergy clusters are Aristocrats/Sacrifice, which this pipeline does not contain, and its only structural role is Enabler/Fodder, so it missed the cluster band and both role bands. A seed-query artifact, not a judgement - and a real option for the death-rate slots. |
| Splinterfright, Moldgraf Millipede, Ghoultree, Spider Spawning | GRAVEYARD-COUNT BAND. All read creature cards in your graveyard. Unlike the Gitrog self-mill deck built earlier in this series, this list has only 3 mill effects (Eccentric Farmer x2, Grapple with the Past) and 10 creature cards, so the graveyard holds roughly 2-3 creature cards by turn 8. These are the payoffs of a different lands-matter sub-archetype, not this one. |
| Gravecrawler, Archghoul of Thraben, Captivating Vampire, Bloodline Keeper // Lord of Lineage, Sorin, Imperious Bloodlord, Indulgent Aristocrat, Voldaren Bloodcaster // Bloodbat Summoner, Metallic Mimic, Mayor of Avabruck // Howlpack Alpha, Hamlet Captain | TRIBAL-COUNT BAND. Zombies in this mainboard: 0 of 10 creature cards. Vampires: 0 of 10. Humans: 4 of 10 (Eccentric Farmer x2, Groundskeeper x2 - Tireless Tracker is a Human Scout, making 5). Wolves and Werewolves: 0. Metallic Mimic's best chosen type would be a 5-card tribe of Farmers and Groundskeepers, none of which the deck wants bigger. |
| Village Rites, Ecstatic Awakener // Awoken Demon, Falkenrath Torturer, Demonic Taskmaster, Eldritch Evolution, Young Wolf, Butcher Ghoul | FREE SACRIFICE OUTLETS AND THEIR FODDER - declined on a count. Spare bodies in this list: 0-1. The creatures are two hexproof threats, two reach blockers, a 1/1 engine and one-shot ETB bodies; none is expendable, and Ulvenwald Mysteries already converts the deaths that DO happen (combat and removal) into Clues without needing an outlet. |
| Heartless Summoning, Somberwald Sage, Cryptolith Rite, Duskwatch Recruiter // Krallenhorde Howler | CREATURE-DENSITY BAND. Creature cards are 10 of 22 nonland (45%). Heartless Summoning's 'Creatures you control get -1/-1' kills nothing here but shrinks Lumberknot's counters and the 1/1 Soldier tokens Ulvenwald Mysteries makes; Cryptolith Rite wants a wide board this deck never builds; Somberwald Sage's creature-only mana is dead for 12 of 22 nonland cards. |
| Hopeful Initiate, Ambitious Farmhand // Seasoned Cathar, Torens, Fist of the Angels | THE W SPLASH, DECLINED. All three qualified deterministically at Phase 3 - W won the tie-break on lowest total CMC (6, vs U 8 and R 10). But Ambitious Farmhand searches for 'a basic Plains card' and this list runs 0 Plains; Torens is {1}{G}{W} and makes a token per CREATURE spell against 10 creature cards of 22; and Hopeful Initiate's Training needs an attacker with greater power in a deck that does not attack before turn 8. splash_colors stays on record as ['W'] with 0 cards played. |
| Travel Preparations, Gryff's Boon, Aim High, Wild Hunger, Blazing Torch, Stitcher's Graft, Boarded Window, Helvault, Geistcatcher's Rig, Angel's Tomb, Lupine Prototype, Epitaph Golem, Soul Separator | PUMP, EQUIPMENT AND COLOURLESS-ARTIFACT BANDS. Note one correction carried out of the grill: Travel Preparations was originally banded as a 'temporary pump', which is wrong - 'Put a +1/+1 counter on each of up to two target creatures' is permanent, and Counters (+1/+1) is one of this pipeline's three clusters. The valid ground is that its Flashback {1}{W} is outside core BG. The rest read no land, no land entry, no Clue and no card drawn. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 17 recommended  [PASS]
Avg CMC:     2.45   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.07 adj [MV 2.45 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  33.3%  prod  38.9%  gap  -5.6pp  [OK]
  G  demand  66.7%  prod  61.1%  gap  +5.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Base: cube mainboard only          PASS  all 23 non-basic names matched by exact string
Commons/uncommons max 2 copies     PASS  no name over its cube_search.get_max_copies limit
Rares/mythics max 1 copy           PASS
Max 5 rare+mythic across MB+SB     PASS  5/5 used: Tireless Tracker (R), The Gitrog Monster (M),
                                         Wrenn and Seven (M), Maelstrom Pulse (R) mainboard,
                                         Collective Brutality (R) sideboard
Basic lands (format-supplied)      PASS  14 basics, exempt from copy limits
Colour usability (core B/G)        PASS  effective_cost.best_mode non-None for every nonland
Splash cap (<=3 named W cards)     PASS  W splash qualified at Phase 3; 0 splash cards played
Deck size 40 mainboard / 10 side   PASS
```
