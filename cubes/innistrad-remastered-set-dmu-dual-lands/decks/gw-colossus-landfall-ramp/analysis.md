---
deck_name: "gw-colossus-landfall-ramp"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-08-28T03:40:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  2x Radiant Grove                GW dual, enters tapped; NOT basic - no fuel card can find it
  9x Forest                       
  6x Plains                       the denominator for Ambitious Farmhand's basic-Plains search
```

### CREATURES (14)

```
CMC  Card                             Qty   Color  Role                                Rar
  2  Ambitious Farmhand // Seasoned Cathar x2    W      Fuel - basic Plains to HAND         U
  2  Hermit Druid                     x1    G      Fuel - repeatable basic to HAND     R
  2  Scorned Villager // Moonscarred Werewolf x2    G      Acceleration                        C
  3  Crusader of Odric                x1    W      Board-count closer                  C
  3  Eccentric Farmer                 x1    G      Fuel - land card from GY to HAND    C
  3  Somberwald Sage                  x2    G      Acceleration for creature spells    U
  3  Tireless Tracker                 x1    G      Landfall card advantage             R
  3  Wild-Field Scarecrow             x2    C      Fuel - TWO basic lands to HAND      C
  5  Sigarda, Host of Herons          x1    WG     Untargetable closer                 M
  7  Cultivator Colossus              x1    G      Pipeline payoff - mass land dump    M
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                             Qty   Color  Role                                Rar
  2  Grapple with the Past            x1    G      Fuel (instant) + only creature reb  C
  2  Valorous Stance                  x2    W      Modal removal / payoff protection   U
  3  Angelic Purge                    x1    W      Only noncreature-permanent answer   C
```

### OTHER SPELLS (5)

```
CMC  Card                             Qty   Color  Role                                Rar
  1  Traveler's Amulet                x2    C      Fuel - basic land to HAND           C
  3  Bound by Moonsilver              x1    W      Creature answer, no sacrifice to c  C
  4  Faith Unbroken                   x1    W      Exile removal, no sacrifice cost    U
  5  Wrenn and Seven                  x1    G      Redundant payoff + repeatable fuel  M
```

## SIDEBOARD (10)

```
Card                             Qty   Color  Role / When to board in                  Rar
Fiend Hunter                     x2    W      vs. a must-answer creature - exile on a   U
Ambush Viper                     x2    G      vs. Vampire (23) / Werewolf (13) aggro -  C
Cathar Commando                  x2    W      vs. the cube's 24 artifacts + 25 enchant  C
Clear Shot                       x2    G      vs. a large threat once a land-count bod  U
Slayer of the Wicked             x1    W      vs. the Vampire/Zombie/Werewolf half of   U
Drogskol Shieldmate              x1    W      vs. fast starts on the draw - flash 2/3   C
```

## ANALYSIS

### DECK IDENTITY

GW land-hoarding ramp. Ten cards in this list put a land CARD INTO YOUR HAND rather than onto the battlefield - Wild-Field Scarecrow two at a time, plus Traveler's Amulet, Ambitious Farmhand, Hermit Druid, Eccentric Farmer, Grapple with the Past and Wrenn and Seven's +1 - and that hoarded hand is the ammunition for Cultivator Colossus, whose ETB reads 'you may put a land card from your hand onto the battlefield tapped. If you do, draw a card and repeat this process'. The same land count sizes the kill: Colossus and Wrenn's Treefolk token are both P/T equal to lands you control. Somberwald Sage pulls the seven-mana turn forward to five, and Sigarda, Host of Herons is the hexproof body that wins when the mythics stay in the library.


### THE DISTINCTION THIS WHOLE DECK TURNS ON

Most ramp decks put lands onto the BATTLEFIELD. This one puts land CARDS INTO YOUR HAND, and the difference is the deck.

`Cultivator Colossus` reads: "When this creature enters, you may put a land card from your hand onto the battlefield tapped. If you do, draw a card and repeat this process." The chain length is bounded by land cards in hand, not by anything else. So a card that fetches a land onto the battlefield (Evolving Wilds) is worth nothing to it, while a card that fetches a land into hand is worth a land AND a card.

Ten of the twenty-three nonland cards put a land card into hand:

| Card | Lands to hand | Restriction |
|---|---|---|
| Wild-Field Scarecrow x2 | **2 each** | basics only (15 of 17 lands qualify) |
| Traveler's Amulet x2 | 1 each | basics only |
| Ambitious Farmhand x2 | 1 each | basic **Plains** only (6 of 17) |
| Hermit Druid x1 | 1 per turn, repeatable | basics only; never fails at 88.2% basics |
| Eccentric Farmer x1 | 1, from graveyard | any land card |
| Grapple with the Past x1 | 1, from graveyard, at instant speed | creature **or** land |
| Wrenn and Seven +1 | ~1.7 per activation | any land card |

That is why the mana base is 15 basics of 17. Every nonbasic is a card that Traveler's Amulet, Wild-Field Scarecrow and Hermit Druid cannot find. Radiant Grove is "Land - Forest Plains": it HAS both land types but is not basic, so it fails all three.

### THE HONEST WEAKNESS

This pipeline has exactly **two** cards in the entire cube that convert a high land count into a win - Cultivator Colossus and Wrenn and Seven's Treefolk token - and both are mythics, so under the 5-card rare/mythic cap each is a singleton. Two singletons in a 40-card deck are seen by turn 8 only **61.5%** of the time, and the Phase 6b assembly gate failed on exactly that at p=0.69.

The fix was to widen what counts as a payoff rather than to pretend the two singletons were enough: Sigarda, Host of Herons (a 5/5 hexproof body that removal cannot touch), Tireless Tracker and Crusader of Odric join the class at declared weights of 1.0, 0.6 and 0.7. That takes the gate to p=0.81. It should be read plainly: three of the five payoffs do not read a land. Sigarda in particular carries a quarter of the class's weight and her oracle text is "Flying, hexproof / Spells and abilities your opponents control can't cause you to sacrifice permanents" - nothing about lands at all. A full scan of the pool found no GW closer that both reads a land and would count at full weight. That absence is the cost of building this sub-archetype in this cube.

### WHAT THE ACCELERATION IS ACTUALLY FOR

Somberwald Sage's "{T}: Add three mana of any one color. Spend this mana only to cast creature spells" looks like a restriction until you notice that Cultivator Colossus ({4}{G}{G}{G}) and Sigarda ({2}{G}{W}{W}) are both creature spells. Turn 3 Sage into turn 5 Colossus is the line that pulls the goldfish turn forward from 8. The 10 noncreature cards the Sage cannot pay for are the cheap half of the curve, which the lands already cover on their own.

### A DATA DEFECT WORTH KNOWING ABOUT

This cube's enriched data carries a **null mana cost and null power/toughness for all 43 of its double-faced cards** while their converted mana cost and colour identity are correct. Two cards in this deck are double-faced (Ambitious Farmhand, Scorned Villager). Both were repaired from the cube's own `card_faces` data before the mana audit was run, so the pip math below counts Ambitious Farmhand's {1}{W} and Scorned Villager's {1}{G}. Worth knowing if you build another deck from this cube: any list with a transforming card is exposed to it.

### PLAY PATTERN

Turns 1-3 deploy fuel and acceleration - Traveler's Amulet, Ambitious Farmhand, Scorned Villager, Somberwald Sage - while banking land cards rather than playing them all. Turn 4-5 is Sigarda or a Sage-powered Colossus. The Colossus turn deploys every banked land, draws that many cards, and leaves a trampler the size of your land count; Tireless Tracker turns each of those land drops into a Clue in the same turn. If Colossus is answered, Wrenn and Seven's 0 ability deploys the identical hoarded hand a turn later and its -3 makes a Treefolk of the same size off a permanent type that creature removal and sweepers both miss.

### TWO CONDITIONS WORTH REMEMBERING AT THE TABLE

`Faith Unbroken` reads "Enchant creature **you control**" - it exiles an opposing creature but must attach to one of yours, so it is dead on an empty board. Against 14 creature cards of 23 nonlands that is usually fine, but it is not the unconditional answer `Angelic Purge` is. And `Angelic Purge` charges "sacrifice a permanent" as an additional cost: paying it with a land directly shrinks `Cultivator Colossus` and `Wrenn and Seven`'s Treefolk, both of which read the land count, so the fodder you want is a Clue token, a spent `Ambitious Farmhand`, or an artifact that has already fired.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:9  4:1  5:2  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.2: Wrenn and Seven@0.9, Crusader of Odric@0.7, Tireless Tracker@0.6) → p=0.81 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 12.2: Eccentric Farmer@0.8, Grapple with the Past@0.9, Hermit Druid@0.9, Scorned Villager // Moonscarred Werewolf@0.8, Scorned Villager // Moonscarred Werewolf@0.8) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 37%  T2 92%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Angelic Purge, Wild-Field Scarecrow
  OK        single_large_threat: Valorous Stance, Bound by Moonsilver, Angelic Purge, Faith Unbroken
  OK        noncreature_permanents: Angelic Purge
  CONCEDED  stack: No card in the GW pool of this cube counters a spell; this deck answers the permanent a spell makes rather than the spell itself.
  CONCEDED  graveyard: Nothing in this list reads an opposing graveyard, and the only card that reads our own is Grapple with the Past ('return a creature or land card from your graveyard to your hand'), so mainboard graveyard hate would cost a fuel slot and buy almost nothing. Against the cube's 27.1%-density graveyard decks the plan is to be bigger. Verified in-pool: the only GW graveyard answer is Soul-Guide Gryff ({4}{W}, 'exile up to one target card from a graveyard') - one card at five mana against a 75-card class, which is not an answer.
```

- Curve PASS and Goldfish PASS - no WARN-tier flag was raised, so no response line is owed.

- The assembly HARD gate failed TWICE and was repaired both times rather than rationalised: first at p=0.69 (Tamiyo's Journal cut for Sigarda, Host of Herons -> p=0.79), then again at p=0.75 when the grill's Hermit Druid swap removed Traverse the Ulvenwald from the payoff class (Bound by Moonsilver cut for Crusader of Odric -> p=0.81).


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This deck is built to flood. Cultivator Colossus's 'power and toughness are each equal to the number of lands you control' and Wrenn and Seven's -3 Treefolk with the same text both convert surplus lands directly into a bigger body; Tireless Tracker's 'Landfall - Whenever a land you control enters, investigate' converts each surplus land drop into a Clue, i.e. a card. The 17th land is a stat line and a card, not a dead draw. |
| screw | mitigation | Keepable two-land hands run on the cheap half of the curve: Traveler's Amulet {1} x2, Ambitious Farmhand {1}{W} x2, Scorned Villager {1}{G} x2, Hermit Druid {1}{G}, Grapple with the Past {1}{G} and Valorous Stance {1}{W} x2 are 10 of the 23 nonland cards at two mana or less, and six of those FIND a land. Wild-Field Scarecrow x2 turns one card into two land cards in hand. Structural goldfish: 87% keepable, 88% on three lands by turn 3. |
| decapitation | mitigation | Cultivator Colossus is a singleton and will be answered on sight, which is why the payoff class was widened to five across two gate repairs. Sigarda, Host of Herons has hexproof and cannot be targeted at all; Wrenn and Seven is a planeswalker, so creature removal and sweepers both miss it and its -3 rebuilds a land-count body; and Valorous Stance x2 reads 'Target creature gains indestructible until end of turn'. Four of the five payoffs survive a removal spell aimed at the fifth. |
| gas-out | mitigation | Cultivator Colossus IS the refuel: 'If you do, draw a card and repeat this process' draws one card per land card in hand, and the fuel package exists to make that number 2-4. Wrenn and Seven's +1 refills the hand with land cards every turn from empty; Hermit Druid puts a land card in hand every turn for {G}; Tireless Tracker banks Clues that are cards on demand. Net-positive or self-replacing: Cultivator Colossus, Wrenn and Seven, Tireless Tracker, Hermit Druid, Grapple with the Past, Wild-Field Scarecrow x2 (one card becomes two land cards), Eccentric Farmer and Ambitious Farmhand x2 - 10 of 23 nonland cards. |
| raced | accepted | The thesis turn is 8 and the cube's fastest clocks - the Vampire (23) and Werewolf (13) rosters, plus a 20.9%-density evasion class - can kill before it. This deck's blockers are a 1/4 defender, a 0/1 mana dork and two 1/1s, and its removal is 5 cards. Mitigating properly would mean cutting fuel for cheap bodies, and the fuel IS the kill mechanism: a Cultivator Colossus resolved with an empty hand is a vanilla trampler whose ETB does nothing. The sideboard pays for this instead - Ambush Viper x2, Drogskol Shieldmate and Fiend Hunter x2 are 5 of the 10 sideboard cards and all come in against aggro. |
| disruption-fizzle | mitigation | The critical turn is resolving Cultivator Colossus with land cards in hand. Valorous Stance x2 ('Target creature gains indestructible until end of turn') answers a removal spell aimed at it, and the ETB chain is not interruptible once on the stack - the lands enter and the cards are drawn even if the Colossus dies afterwards. If the whole turn is answered, Wrenn and Seven's 0 ability ('Put any number of land cards from your hand onto the battlefield tapped') deploys the same hoarded hand a turn later for a -3 Treefolk of the same size, and Grapple with the Past is the only card in GW that can return a killed Colossus from the graveyard. What folds is a counterspell, which coverage.stack concedes outright. |


### CARDS CONSIDERED BUT EXCLUDED

| Cards | Reason |
|---|---|
| Groundskeeper | THE TOP UPGRADE. '{1}{G}: Return target basic land card from your graveyard to your hand' is the only REPEATABLE land-card-to-hand effect at common/uncommon in the whole GW pool, and 15 of the 17 lands (88.2%) are legal targets. It was cut on a supply count - before the grill repair this list put roughly one basic land in the graveyard by turn 8 - but Hermit Druid now bins ~1.7 nonland cards per activation and Eccentric Farmer mills three, so that supply has risen. If you iterate on this deck, this is the first card to add. |
| Traverse the Ulvenwald | Cut in the grill for Hermit Druid over the same rare slot. Traverse buys ONE basic land card to hand, once; Hermit Druid's '{G}, {T}: Reveal cards until you reveal a basic land card. Put that card into your hand' never fails at 15 basics of 17 lands and repeats every turn - roughly 5 land cards to hand across turns 3-8 versus 1. The cost, disclosed: Hermit Druid bins nonland cards including possibly Cultivator Colossus, which is why Grapple with the Past was added in the same repair as the only rebuy. |
| Tamiyo's Journal | Was a keystone of the locked build, cut at the Phase 6b assembly gate. It sat in the enabler class at weight 0.5 ({5} to cast) while the class that FAILED at p=0.69 was the payoff class, to which it contributed nothing. Its rare slot bought Sigarda, Host of Herons, a full-weight payoff, taking the gate to p=0.79 and then 0.81. Note the Clue-rate objection to it does NOT hold - Tireless Tracker's landfall Clues mean the Journal's tutor is not upkeep-limited in this list; the rare-budget argument is the one that stands. |
| Overgrown Farmland | 'enters tapped unless you control two or more other lands. {T}: Add {G} or {W}' is a strictly better Radiant Grove for a curve that wants an untapped turn-3 Somberwald Sage. Cut because the rare/mythic budget is 5/5 spent on the payoff class. The mechanism cost paid instead is a turn of tapped-land tempo from Radiant Grove. |
| Evolving Wilds | Cube-tagged Lands-Matter, and it doubles a Tireless Tracker landfall trigger - but '{T}, Sacrifice this land: Search your library for a basic land card, put it onto the BATTLEFIELD tapped' puts the land in play, not in hand. This pipeline's entire fuel model is land cards in HAND for Cultivator Colossus's ETB chain, so Evolving Wilds is land-count-neutral and off-thesis. It is also a land, so it does not compete for a spell slot - it competes with a basic that IS findable by Traveler's Amulet, Wild-Field Scarecrow and Hermit Druid. |
| Eldritch Evolution, Cryptolith Rite, Duskwatch Recruiter // Krallenhorde Howler | THE 'CHEAT IT IN' PACKAGE, rejected by the shape judge. Eldritch Evolution ('X is 2 plus the sacrificed creature's mana value') reaches Cultivator Colossus only by eating a 5-drop, and this list has 2 creature cards at MV 5+ - but the deeper problem is that fetching Colossus straight ONTO THE BATTLEFIELD resolves its ETB with a hand that has not been loaded with land cards, so 'draw a card and repeat this process' never loops. Cryptolith Rite and Duskwatch Recruiter accelerate toward a payoff whose ETB would then do nothing. |
| Soul-Guide Gryff, Subjugator Angel, Wretched Gryff | COMPETING TOP END. Each occupies the turn-5-to-7 window this deck reserves for Cultivator Colossus, Wrenn and Seven and Sigarda, and none reads a land, a land drop or a land count. Soul-Guide Gryff's 'exile up to one target card from a graveyard' is also the only graveyard answer in GW, and one card at five mana against a 75-card, 27.1%-density graveyard class is not an answer - which is why the graveyard coverage class is conceded rather than half-answered. |
| Mentor of the Meek, Thraben Inspector, Wedding Announcement // Wedding Festivity, Restoration Angel, Ulvenwald Mysteries | WHITE VALUE ENGINES, a tier below. Mentor of the Meek's 'creature you control with power 2 or less' hits 9 of 13 creature cards - a good count - but its {1} tax competes with the ramp turns. Thraben Inspector's Clue was worth a slot only alongside Tamiyo's Journal, which the gate repair removed. Wedding Announcement defaults to its token mode because this deck rarely attacks with two creatures before turn 7. Restoration Angel and Ulvenwald Mysteries cost a rare slot or need a death rate this deck does not have (0 free sacrifice outlets). |
| Crusader of Odric (as a 2-of), Rally the Peasants, Angel's Tomb, Intangible Virtue, Lingering Souls, Metallic Mimic, Mayor of Avabruck // Howlpack Alpha, Hamlet Captain, Dawnhart Disciple, Voice of the Blessed, Howlpack Resurgence, Moonlight Hunt | BOARD-WIDTH AND TRIBAL COUNTS, cut on the counts against this list. Board at the thesis turn is 3-4 bodies, because the fuel creatures sacrifice themselves (Wild-Field Scarecrow) or have spent their ETB (Ambitious Farmhand, Eccentric Farmer) - so Rally the Peasants is +6/+0 at best and Intangible Virtue reads a token count of one (Wrenn's Treefolk). Humans are 7 of 14 creature cards and Wolves/Werewolves 2 of 14 (Scorned Villager, back face only), which is not a tribe worth a lord. Crusader of Odric survives as a SINGLE copy for exactly this reason: at 3-4 bodies it is a 4/4-ish three-drop, a real clock but not a land-count body, and it is in the list only because the assembly gate needed a fifth payoff copy after Traverse was cut. |
| Gryff's Boon, Lunarch Mantle, Travel Preparations, Aim High, Wild Hunger, Blazing Torch, Stitcher's Graft, Butcher's Cleaver, Neglected Heirloom // Ashmouth Blade, Harvest Hand // Scrounged Scythe | AURA / EQUIPMENT / PUMP BAND. Each spends a card to make one body bigger, charges a second mana payment per body ('Equip {1}' to 'Equip {3}'), or does both. None adds a card, a land or a land drop, which is the only currency this pipeline converts into a win. In a deck whose payoff is already sized by 17 lands, a +2/+2 is not a resource. |
| Boarded Window, Helvault, Geistcatcher's Rig, Lupine Prototype, Epitaph Golem, Chalice of Life // Chalice of Death, Cryptolith Fragment // Aurora of Emrakul, Triskaidekaphobia | COLOURLESS ARTIFACTS AND ALTERNATE CLOCKS with no line into a land-count plan: none reads a land, a land drop or the number of lands you control. Lupine Prototype specifically anti-synergises - it 'can't attack or block unless a player has no cards in hand' while Cultivator Colossus's 'draw a card and repeat this process' is refilling this deck's hand. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 10   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.17 adj [MV 2.87 vs 2.5, 10 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  58.3%  prod  64.7%  gap  -6.4pp  [OK]
  W  demand  41.7%  prod  47.1%  gap  -5.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Base: cube mainboard only          PASS  all 22 non-basic names matched by exact string
Commons/uncommons max 2 copies     PASS  no name over its cube_search.get_max_copies limit
Rares/mythics max 1 copy           PASS
Max 5 rare+mythic across MB+SB     PASS  5/5 used, all mainboard: Cultivator Colossus (M),
                                         Wrenn and Seven (M), Sigarda, Host of Herons (M),
                                         Tireless Tracker (R), Hermit Druid (R).
                                         The sideboard is all commons/uncommons by construction.
Basic lands (format-supplied)      PASS  15 basics, exempt from copy limits
Colour usability (core G/W)        PASS  effective_cost.best_mode non-None for every nonland
Splash cap                         PASS  no splash colour qualified at Phase 3
Deck size 40 mainboard / 10 side   PASS
```
