---
deck_name: "bg-gitrog-selfmill"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-08-28T02:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Evolving Wilds               fetches a basic; the sacrifice is a Gitrog draw
  2x Haunted Mire                 BG dual, enters tapped
  10x Forest                       
  4x Swamp                        
```

### CREATURES (13)

```
CMC  Card                             Qty   Color  Role                                Rar
  1  Groundskeeper                    x2    G      Basic-land recursion engine         U
  2  Hermit Druid                     x1    G      Repeatable bulk self-mill           R
  2  Noose Constrictor                x2    G      Free discard outlet / reach body    U
  3  Eccentric Farmer                 x2    G      Self-mill + land recursion          C
  3  Splinterfright                   x2    G      Graveyard-scaling beater + self-mi  U
  3  Tireless Tracker                 x1    G      Landfall card advantage             R
  5  The Gitrog Monster               x1    BG     Pipeline payoff / card engine       M
  8  Ghoultree                        x2    G      Discounted finisher                 U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                             Qty   Color  Role                                Rar
  1  Tragic Slip                      x2    B      One-mana removal                    C
  2  Grapple with the Past            x2    G      Instant self-mill + rebuy           C
  2  Infernal Grasp                   x2    B      Unconditional removal               U
  3  Maelstrom Pulse                  x1    BG     Catch-all removal                   R
  5  Spider Spawning                  x2    G      Wide-board finisher, twice          U
```

## SIDEBOARD (10)

```
Card                             Qty   Color  Role / When to board in                  Rar
Sever the Bloodline              x2    B      vs. recursion/tokens - exile, flashback   U
Murderous Compulsion             x2    B      vs. aggro that must attack; madness live  C
Ambush Viper                     x2    G      vs. fast starts - flash deathtouch        C
Clear Shot                       x2    G      vs. fliers/large threats once scaled      U
Killing Wave                     x1    B      vs. wide token boards                     U
The Meathook Massacre            x1    B      vs. Vampire/Zombie aggro - scalable swee  M
```

## ANALYSIS

### DECK IDENTITY

BG Gitrog self-mill. The Gitrog Monster converts every land that reaches the graveyard into a card - its own upkeep sacrifice, both Evolving Wilds, every land the mill turns up, and every land discarded to Noose Constrictor - while Groundskeeper rebuys the basics it eats so the loop keeps paying. The mill is not incidental: it is the same action that sizes the win condition, because Splinterfright, Ghoultree and Spider Spawning all read creature cards in the graveyard. The deck kills with a 10/10 Ghoultree cast for three or four mana, or with a Spider Spawning board, behind five pieces of unconditional removal.


### THE LANDS-MATTER ENGINE, AS A LOOP

The deck's core loop is four cards deep and every step is oracle-grounded:

1. The Gitrog Monster: "At the beginning of your upkeep, sacrifice The Gitrog Monster unless you sacrifice a land." The sacrifice is not a drawback here - it is step one.
2. Same card: "Whenever one or more land cards are put into your graveyard from anywhere, draw a card." The land you just sacrificed triggers this. Gitrog pays for itself every upkeep.
3. Groundskeeper: "{1}{G}: Return target basic land card from your graveyard to your hand." 14 of the 18 lands are basics, so ~78% of what Gitrog eats comes straight back.
4. Same card, back to Gitrog: "You may play an additional land on each of your turns." The returned basic is replayed for free alongside the normal land drop, and Tireless Tracker investigates on both.

The phrase that makes the deck is **"from anywhere"**. It covers the upkeep sacrifice, both Evolving Wilds, every land turned up by the mill package, and - critically - Noose Constrictor's "Discard a card" outlet. At 18 lands of 40, a random discard is a Gitrog draw 45% of the time, at zero mana, with no limit per turn.

### THE COUNT THAT SIZES THE DECK

Every finisher in this list reads the same number: **creature cards in your graveyard**. The denominator is 13 of 40.

| Card | What it reads | At 4 creature cards in the yard |
|---|---|---|
| Splinterfright | P/T = creature cards in graveyard | 4/4 trample for 3 mana |
| Ghoultree | costs {1} less per creature card in graveyard | a 10/10 for {3}{G} |
| Spider Spawning | one 1/2 reach Spider per creature card in graveyard | four blockers, then four more off Flashback {6}{B} |

Nine mill or dig effects feed that count: Splinterfright x2 (upkeep mill 2), Eccentric Farmer x2 (mill 3), Grapple with the Past x2 (mill 3), Hermit Druid (reveal-until-basic, ~2.9 cards per activation at 14 basics), and Noose Constrictor x2 (unbounded discard). That is why the deck can afford only 7 dedicated threat slots - each of them is worth several cards' worth of pressure once the count is up.

### WHY THE MILL IS NOT A LIABILITY

Self-mill decks normally fear decking and fear having their engine answered. Neither applies. The Gitrog Monster is a singleton and *will* be killed on sight - which is exactly why it is classified as the card-flow engine and not the win condition. The kill lives in the graveyard, and targeted removal cannot touch a graveyard. Grapple with the Past ("return a creature or land card from your graveyard to your hand") is the rebuy when Gitrog does die.

### A DOSSIER CORRECTION

`dossier.structural_census` reports **GY hate: 0** for this cube. That probe is wrong, and it matters for a deck whose whole plan is a graveyard. Sever the Bloodline reads "Exile target creature and all other creatures with the same name as that creature" - exile, not destroy - and Invasion of Innistrad's back face reads "{2}{B}: Exile target card from a graveyard." Against a cube with 27.1% graveyard density, that is the sideboard's most important slot, and it is why Sever the Bloodline is boarded at 2 copies rather than 1.

### PLAY PATTERN

Turns 1-2 are Groundskeeper, Tragic Slip, Grapple with the Past or Hermit Druid - 11 of the 22 nonland cards cost two or less, which is why 87% of opening hands are keepable. Turn 3 is Splinterfright or Tireless Tracker (note: Splinterfright cast on an empty graveyard enters as a 0/0 and dies; it wants one mill effect to have resolved first). Turn 5 is The Gitrog Monster, and from there the deck draws two to three cards a turn. The kill is a discounted Ghoultree or a Spider Spawning board around turn 6.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:4  2:7  3:6  5:3  8:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 5.6: Ghoultree@0.6, Ghoultree@0.6, Spider Spawning@0.7, Spider Spawning@0.7) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 9.8: Hermit Druid@0.8, Groundskeeper@0.7, Groundskeeper@0.7, Noose Constrictor@0.8, Noose Constrictor@0.8, Evolving Wilds@0.5, Evolving Wilds@0.5) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 53%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Maelstrom Pulse, Spider Spawning
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Maelstrom Pulse
  OK        noncreature_permanents: Maelstrom Pulse
  CONCEDED  stack: No card in the BG pool of this cube counters a spell; this deck answers the permanent a spell makes rather than the spell itself.
  CONCEDED  graveyard: Our own graveyard is the win condition, so mainboard graveyard hate would attack our own resource; Sever the Bloodline x2 ('Exile target creature and all other creatures with the same name') is boarded in when an opponent's recursion matters.
```

- Curve PASS and Goldfish PASS - no WARN-tier flag was raised, so no response line is owed.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands are the engine, not dead cards. The Gitrog Monster draws on every land that reaches the graveyard 'from anywhere' - its own upkeep sacrifice, both Evolving Wilds, and any land pitched to Noose Constrictor's 'Discard a card' outlet, which fires an unbounded number of times per turn at zero mana. Groundskeeper x2 turns a surplus basic in the yard back into a card in hand for {1}{G}; 14 of 18 lands are basics. Tireless Tracker investigates on every land drop, and Gitrog's 'additional land on each of your turns' doubles that rate. |
| screw | mitigation | Two-land hands keep on the cheap half of the curve: Tragic Slip {B} x2, Groundskeeper {G} x2, Grapple with the Past {1}{G} x2, Infernal Grasp {1}{B} x2, Noose Constrictor {1}{G} x2 and Hermit Druid {1}{G} are 11 of the 22 nonland cards at two mana or less. Digging out is Hermit Druid ('reveal until you reveal a basic land card. Put that card into your hand'), Eccentric Farmer ('return a land card from your graveyard to your hand') and Grapple with the Past. Structural goldfish: 87% keepable, 92% on three lands by turn 3. |
| decapitation | mitigation | The Gitrog Monster is a singleton and will be answered on sight, which is why it is the card-flow engine and not the win condition. The kill is Ghoultree x2, Splinterfright x2 and Spider Spawning x2: six redundant payoffs that need no engine card on the battlefield, only cards in the graveyard, which targeted removal cannot reach. Grapple with the Past x2 ('return a creature or land card from your graveyard to your hand') rebuys Gitrog itself. |
| gas-out | mitigation | Net-positive or self-replacing cards in this list: The Gitrog Monster (a card per land to the graveyard), Grapple with the Past x2, Eccentric Farmer x2, Groundskeeper x2 (repeatable at {1}{G}), Hermit Druid (repeatable every turn for {G}), Tireless Tracker (a Clue per land drop) and Spider Spawning x2, whose 'Flashback {6}{B}' is cast from an empty hand. That is 11 of 22 nonland cards that draw, recur or store cards, and Spider Spawning's flashback is specifically the empty-hand card. |
| raced | accepted | Against the cube's fastest clocks - the Vampire (23 cards) and Werewolf (13) aggro rosters in dossier.threat_profile - this deck's first removal is turn 1-2 but its first reliable blocker is Noose Constrictor on turn 2 as a 2/2 with reach; Splinterfright cast turn 3 into an empty graveyard enters as a 0/0 and dies, because its own mill fires on the FOLLOWING upkeep. Mitigating further would mean cutting graveyard-scaling threats for cheap defensive bodies, which is exactly the trade that empties the graveyard those threats read - the deck would then have interaction and no win condition. The sideboard pays for this instead: Ambush Viper x2 ('Flash. Deathtouch'), Murderous Compulsion x2 and The Meathook Massacre are 5 of the 10 sideboard cards and all come in against aggro. |
| disruption-fizzle | mitigation | The critical turn is casting a discounted Ghoultree or a Spider Spawning. Neither depends on a permanent surviving: the graveyard is already stocked when the spell is cast, so a removal spell in response kills a body but does not shrink the next one - Ghoultree's second copy and Spider Spawning's 'Flashback {6}{B}' both retry the same plan from the same graveyard. What does fold is a counterspell, which the coverage declaration concedes outright: no card in this cube's BG pool counters a spell. |


### CARDS CONSIDERED BUT EXCLUDED

| Cards | Reason |
|---|---|
| Cultivator Colossus, Wrenn and Seven, Garruk Relentless // Garruk, the Veil-Cursed, Traverse the Ulvenwald, Gravecrawler, Collective Brutality, Eldritch Evolution, Invasion of Innistrad // Deluge of the Dead, Deathcap Glade | RARE/MYTHIC BUDGET. All five slots are spent on The Gitrog Monster, Hermit Druid, Maelstrom Pulse, Tireless Tracker and The Meathook Massacre. Traverse the Ulvenwald in particular is cut NOT on its count - delirium is live at 4 of 4 card types in this list (creature 13, instant 6, sorcery 3, land 18) - but purely on the cap, and it is the first card to add if the cap is raised. Deathcap Glade was cut for the same reason: it spent a rare slot on the 18th land while black production already ran 8.3pp above its pip demand. |
| Moldgraf Millipede, Pack Guardian | Cut during the grill repair to make room for Noose Constrictor x2 and Tireless Tracker. Both are on-plan (Millipede: 'mill three cards, then put a +1/+1 counter on this creature for each creature card in your graveyard'; Pack Guardian: 'you may discard a land card. If you do, create a 2/2 green Wolf'), but at MV 5 and MV 4 they were the two most expensive ways this list bought graveyard throughput. These are the first swaps back in if the deck feels short on bodies. |
| Wretched Gryff, Abundant Maw, Distended Mindbender, Elder Deep-Fiend, It of the Horrid Swarm, Decimator of the Provinces | EMERGE BAND. 'You may cast this spell by sacrificing a creature and paying the emerge cost reduced by that creature's mana value.' The discount is real - It of the Horrid Swarm emerges for {G} off a Ghoultree - but sacrificeable creatures at MV 5 or more number 3 of 13 (Ghoultree x2, The Gitrog Monster), and all three are the win condition or the engine. Elder Deep-Fiend and Wretched Gryff also emerge for {U}{U} / {U}, outside core BG. (Chittering Host was originally binned here in error: its mana_cost is empty - it is a meld back face and cannot be cast at all.) |
| Epitaph Golem | '{2}: Put target card from your graveyard on the bottom of your library' removes the exact resource Splinterfright, Ghoultree and Spider Spawning count. Anti-synergy, not merely off-plan. |
| Falkenrath Torturer, Village Rites, Ecstatic Awakener // Awoken Demon, Demonic Taskmaster | FREE SACRIFICE OUTLETS - deliberately declined. Each would turn a body into a graveyard creature card, and Falkenrath Torturer would switch Tragic Slip x2 to its morbid '-13/-13' mode on demand. But the fodder denominator is 2 of 13 creature cards (Eccentric Farmer x2, ETB already spent): Groundskeeper x2 is the land-recursion engine, and Ghoultree x2 / Splinterfright x2 / The Gitrog Monster are the win condition. Noose Constrictor's free discard reaches the same graveyard effect at zero board cost. |
| Griselbrand | {4}{B}{B}{B}{B} for 'Pay 7 life: Draw seven cards' - a card-draw engine The Gitrog Monster already supplies at five mana, and a mythic against a full budget. |
| Blood Artist, Indulgent Aristocrat, Captivating Vampire, Bloodline Keeper // Lord of Lineage, Sorin, Imperious Bloodlord, Voldaren Bloodcaster // Bloodbat Summoner, Archghoul of Thraben | TRIBAL-COUNT BAND. Vampires in this mainboard: 0 of 13 creature cards (Bloodline Keeper's transform needs five, Captivating Vampire's steal needs five untapped). Zombies: 2 of 13, and both are Ghoultree, an 8-drop that arrives turn 5 at the earliest, so Archghoul's and Gravecrawler's Zombie clauses are effectively dead before the game is decided. |
| Soul Separator, Tamiyo's Journal, Helvault, Angel's Tomb, Boarded Window, Geistcatcher's Rig, Lupine Prototype | COLOURLESS ARTIFACT BAND. Soul Separator does read the graveyard ('Exile target creature card from your graveyard') but costs {3} plus a '{5}, {T}, Sacrifice' activation - 8 mana - and exiling a creature card shrinks Splinterfright and un-discounts Ghoultree. Lupine Prototype 'can't attack or block unless a player has no cards in hand' while Gitrog is refilling this deck's hand. The rest read no land, no graveyard card and no creature dying. |
| Triskaidekaphobia, Tree of Perdition, Chalice of Life // Chalice of Death, Cryptolith Fragment // Aurora of Emrakul | ALTERNATE LIFE-TOTAL CLOCKS. 'Each player with exactly 13 life loses the game'; 'Exchange target opponent's life total with this creature's toughness'; 'Target player loses 5 life'. None reads a land, a graveyard card or a creature dying - they replace the pipeline's kill mechanism rather than serve it. |
| Vilespawn Spider, Spontaneous Mutation, Deranged Assistant | THE U SPLASH, DECLINED. These three qualified deterministically as splash candidates at Phase 3. Vilespawn Spider's Insect-per-creature-card count duplicates Spider Spawning at a {G}{U} cost; Spontaneous Mutation's '-X/-0 where X is the number of cards in your graveyard' removes no creature. splash_colors stays on record as ['U'] with 0 cards played. |
| Wild-Field Scarecrow | SIDEBOARD CONSIDERATION, cut in the grill. '{2}, Sacrifice this creature: Search your library for up to two basic land cards... put them into your hand' is two Gitrog land drops off one card, but dossier.threat_profile enumerates no control class and colour screw is a maindeck problem, not an opposing threat. Its slot went to a second Clear Shot for the 20.9%-density evasion class. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.05   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.73 adj [MV 3.05 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  25.0%  prod  33.3%  gap  -8.3pp  [OK]
  G  demand  75.0%  prod  66.7%  gap  +8.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Base: cube mainboard only          PASS  all 23 non-basic names matched by exact string
Commons/uncommons max 2 copies     PASS  no name over its cube_search.get_max_copies limit
Rares/mythics max 1 copy           PASS
Max 5 rare+mythic across MB+SB     PASS  5/5 used: The Gitrog Monster (M), Hermit Druid (R),
                                         Maelstrom Pulse (R), Tireless Tracker (R),
                                         The Meathook Massacre (M, sideboard)
Basic lands (format-supplied)      PASS  14 basics, exempt from copy limits
Colour usability (core B/G)        PASS  effective_cost.best_mode non-None for every nonland
Splash cap (<=3 named U cards)     PASS  U splash qualified at Phase 3; 0 splash cards played
Deck size 40 mainboard / 10 side   PASS
```
