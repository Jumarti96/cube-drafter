---
deck_name: "u-warp-tide-control"
cube_id: "eoe"
cube_slug: "eoe"
colors: "U"
format: "40-card"
built_at: "2026-08-04T05:04:55Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (21 spells + 19 lands = 40)

### LANDS (19)

```
19x Island                   
```

### CREATURES (10)

```
CMC  Card                     Qty  Color  Role                                                                      Rar
  3  Sinister Cryologist      x2   U      Warp body — warp {U}, ETB -3/-0                                           C
  4  Starfield Vocalist       x1   U      Engine — doubles ETB triggers only                                        R
  5  Quantum Riddler          x1   U      Payoff — evasive finisher + draw upgrade                                  M
  5  Starbreach Whale         x2   U      Warp body — flying 3/5, warp {1}{U}                                       C
  6  Anticausal Vestige       x1   C      Engine — warp {4}: 7/5 for a turn, then its OWN exile draws + free-drops  R
  6  Mechanozoa               x2   U      Warp body — 5/5, ETB tap+stun                                             C
  7  Starwinder               x1   U      Payoff — 7/7, draws on combat damage                                      R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                     Qty  Color  Role                                                                      Rar
  2  Consult the Star Charts  x1   U      Engine — land-scaled instant selection                                    R
  2  Desculpting Blast        x1   U      Interaction — bounce any nonland permanent                                U
  2  Divert Disaster          x2   U      Interaction — soft counter + Lander                                       C
  2  Mental Modulation        x2   U      Interaction — tap (turns on Cryoshatter) + cantrip                        C
  4  Lost in Space            x1   U      Interaction — tuck artifact or creature                                   C
```

### OTHER SPELLS (4)

```
CMC  Card                     Qty  Color  Role                                                                      Rar
  1  Cryoshatter              x2   U      Interaction — 1-mana removal (needs the creature to tap or take damage)   C
  2  Cryogen Relic            x2   U      Engine — draws on enter and on leave                                      C
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in
Annul                    x2   U      Artifact/enchantment counter — Against the cube's 74 artifacts (30% of the cube) and 16 enchantments; out against mono-creature decks [U]
Dauntless Scrapbot       x2   C      Graveyard exile — Against genuine graveyard recursion. The cube's graveyard-interaction census is 31 cards, but that count includes pure surveil and selection effects (this deck runs two of them itself), so the real target class is smaller: reanimation and graveyard-recast decks. Colourless, so castable regardless of matchup. [U]
Unravel                  x2   U      Hard counter with a draw rider — Against warp, kicker and cost-reduction decks, where 'if the amount of mana spent to cast that spell was less than its mana value, you draw a card' is live — including the mirror [U]
Specimen Freighter       x2   U      Double bounce — Against go-wide token boards and against decks whose plan is one huge Stationed Spacecraft; the mainboard concedes wide boards [U]
Mouth of the Storm       x2   U      Pseudo-sweeper on a 6/6 flier — Against aggressive creature decks; 'creatures your opponents control get -3/-0 until your next turn' blanks an alpha strike, and ward {2} protects the body [U]
```

## ANALYSIS

### DECK IDENTITY

Mono-blue warp control. Warp reads 'cast this card from your hand for its warp cost, exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn' — so 9 of the 21 nonland copies buy a body 1-3 mana below printed cost for exactly one turn cycle, block or fire an ETB, and then wait in exile to be re-cast at full price later. That discount is the whole point: it lets a control deck field a 5/5 on turn 3 and a 3/5 flier on turn 2 while still holding up answers. Anticausal Vestige is a standalone value card on the same axis — warp it for {4} and its own end-step exile draws a card and free-drops a permanent from hand. Cryogen Relic pays on both entering and leaving. Eight dedicated answers hold the ground and Quantum Riddler, Starwinder and a hard-cast Mechanozoa close it. 19 Islands: zero tapped lands, zero colour screw.

### THE SYNERGY THAT ISN'T — AND WHY THIS LIST STILL WORKS

This deck was originally built around a loop that does not exist, and the honest version of that story is more useful than a clean one.

The pitch was: warp exiles a creature at the end step, that is a leave-the-battlefield event, and **Anticausal Vestige** turns leave-events into cards and free permanents. Read the card:

> "**When this creature leaves the battlefield**, draw a card, then you may put a permanent card with mana value less than or equal to the number of lands you control from your hand onto the battlefield tapped."

*This creature.* It sees its own exile and nothing else. Nine of the twenty-one nonland copies here are non-Vestige warp cards, and **zero of those nine** produce a Vestige trigger.

Nor can the pool fix it. The mechanic that pays off "a nonland permanent left the battlefield this turn" is **Void**, and every one of the cube's 14 Void cards is black or red. There is no blue or colourless card that converts another permanent's leave event into anything. The Warp-and-leave-value deck this cube supports is the B/R one, not this one.

A second, smaller version of the same mistake sits one layer down. **Starfield Vocalist** reads "If a permanent **entering** the battlefield causes a triggered ability of a permanent you control to trigger…". Vestige's ability is a *leave* trigger — the permanent entering is its result, not its cause — so Vocalist does not double it either, nor Cryogen Relic's "or leaves" half. Vocalist is still fine here (it doubles five real ETB triggers) but it is a good card, not a combo piece, and it is weighted 0.6 in the assembly check for exactly that reason.

### WHAT THE DECK ACTUALLY DOES

Warp is a **cost discount attached to a one-turn rental**. Nine copies enter 1–3 mana below printed cost, do their job for one turn cycle, and then wait in exile to be re-cast at full price later:

| Card | Printed | Warp | Discount | What you get for the discount |
|---|---|---|---|---|
| Sinister Cryologist | 3 | {U} = 1 | −2 | 2/3 body + a blanked attacker |
| Starbreach Whale | 5 | {1}{U} = 2 | −3 | 3/5 **flier** + surveil 2 |
| Starfield Vocalist | 4 | {1}{U} = 2 | −2 | 3/4 body + doubled ETBs |
| Quantum Riddler | 5 | {1}{U} = 2 | −3 | a card, then a 4/6 flier later |
| Mechanozoa | 6 | {2}{U} = 3 | −3 | 5/5 + a two-turn tap-down |
| Starwinder | 7 | {2}{U}{U} = 4 | −3 | 7/7 blocker four turns early |
| Anticausal Vestige | 6 | {4} = 4 | −2 | 7/5 for a turn, a card, a free permanent |

That is the whole engine, and it is a genuinely good one for a control deck: it lets you field a 5/5 on turn 3 and a 3/5 flier on turn 2 *while still holding up answers*, which no ordinary control curve can do. The printed average mana value is 3.43; the warp-effective average is **2.19**.

### THE MANA IS THE ARGUMENT

Nineteen basic Islands. Zero tapped lands, zero conditional lands, zero colour screw. Compare the U/R build of this same archetype, whose only dual is a tapped common because **this cube contains no U/R shockland at all**. Going mono-coloured costs the black and red Void payoffs — but Void was never available to blue anyway, so the price is lower than it looks.

The 19th land is worth defending precisely, because one of its two original justifications was wrong. Anticausal Vestige's clause caps at "mana value less than or equal to the number of lands you control", and the highest-mana-value permanent in the deck is Starwinder at 7 — so the clause is **fully unbound from seven lands onward**, and the 18th and 19th land raise a ceiling nothing reaches. The land stands on the other ground alone: at 18 Islands the goldfish simulation returned 79% keepable hands against an 80% floor. At 19 it is 86%.

### A SMALL INTERACTION WORTH KNOWING

**Cryoshatter** reads "Enchanted creature gets −5/−0. When enchanted creature **becomes tapped** or is dealt damage, destroy it." Against a creature that simply sits there, it is only a −5/−0 aura. **Mental Modulation** ("Tap target artifact or creature. Draw a card.", and it costs {1} less on your turn) is the switch: for one mana you tap the enchanted creature and kill it, and draw a card doing it. Mental Modulation also manufactures the "target **tapped** creature" that Cryogen Relic's stun ability requires. Two commons that are unremarkable apart and a removal spell together.

### THE MATCHUP THE DECK LOSES

`raced` is the one failure mode this deck accepts rather than mitigates. Its fastest interaction is one mana, its blockers arrive on turns 2–3, and its actual payoffs sit at mana value 5 and 7 against a thesis turn of 8. There is no mainboard sweeper because mono-blue has none in this pool: the only U-or-colourless sweeper is Extinguisher Battleship at eight mana, two turns past the thesis. Four of the ten sideboard slots (Mouth of the Storm ×2, Specimen Freighter ×2) exist for that matchup, and they cost six and seven mana — which is an honest description of the problem, not a solution to it.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (21 nonland):  1:2  2:8  3:2  4:2  5:3  6:3  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5: Mechanozoa@0.8, Mechanozoa@0.8, Starbreach Whale@0.7, Starbreach Whale@0.7) → p=0.87 (need ≥ 0.75)
  PASS  engine: 5 copies (effective 4.6: Starfield Vocalist@0.6) → p=0.84 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 37%  T2 95%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-blue has no sweeper in this pool. The deck answers width one permanent at a time with Desculpting Blast, Lost in Space and Mechanozoa's tap+stun while its 5-toughness bodies (Mechanozoa 5/5, Starbreach Whale 3/5, Quantum Riddler 4/6) block profitably. Mitigating would mean leaving mono-blue for a second colour, which forfeits the 100% untapped-source manabase that is this build's entire structural advantage over the U/R version. Specimen Freighter x2 ('return up to two target non-Spacecraft creatures to their owners' hands') and Mouth of the Storm x2 ('When this creature enters, creatures your opponents control get -3/-0 until your next turn') are in the sideboard.
  OK        single_large_threat: Cryoshatter, Lost in Space, Desculpting Blast, Mental Modulation
  OK        noncreature_permanents: Lost in Space, Desculpting Blast
  OK        stack: Divert Disaster
  CONCEDED  graveyard: No mainboard graveyard hate. Mono-blue's only graveyard answer in this pool is colourless (Dauntless Scrapbot), and maindecking a 3/1 for {3} whose body does nothing on plan costs a warp body. Dauntless Scrapbot x2 is in the sideboard.
```



### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Cryogen Relic's '{1}{U}, Sacrifice this artifact' is a repeatable mana sink that also draws via its own 'or leaves' trigger. Consult the Star Charts scales directly with flood — 'look at the top X cards of your library, where X is the number of lands you control' — and its kicker {1}{U} converts extra mana into a second card. Starwinder hard-casts at {5}{U}{U}, Mechanozoa at {4}{U}{U}, and every warp card sitting in exile is a second full-price spell waiting for exactly this mana. Anticausal Vestige's free-drop clause is a flood outlet only in the weak sense that it needs lands at all: it is unbound from 7 lands onward. |
| screw | mitigation | Every land is an untapped Island, so a two-land hand is always two usable mana — no tapped duals, no colour screw, no Command Bridge sacrifice clause. The one- and two-mana plays are Cryoshatter x2 ({U}), Sinister Cryologist x2 (warp {U}), Cryogen Relic x2, Desculpting Blast x2, Divert Disaster x2, Starbreach Whale x2 (warp {1}{U}) and Starfield Vocalist (warp {1}{U}) = 13 of 21 nonland copies. 94% of simulated hands reach 3 lands by turn 3; 81% are keepable. |
| decapitation | mitigation | There is no single key card, and after the Phase 9 thesis rewrite there is no claimed engine loop to decapitate. Card flow independent of Anticausal Vestige: Cryogen Relic x2 (two cards each), Quantum Riddler, Starwinder, Consult the Star Charts, Mental Modulation x2. If the Vestige is answered on sight the deck loses one card and one free permanent, not its plan — and the removal spell was spent on a 7/5 that was going to exile itself at end step anyway. |
| gas-out | mitigation | Cards: Net-Positive / Self-Replacing copies, counted strictly: Cryogen Relic x2 (draws on entering AND on leaving = 2 each), Quantum Riddler x1, Anticausal Vestige x1, Starwinder x1, Consult the Star Charts x1, Mental Modulation x2 (each replaces itself) = 8 of 21 nonland copies. Starbreach Whale's surveil and Divert Disaster's Lander are deliberately NOT counted — surveil draws zero cards, and the Lander appears only if the opponent chooses to pay the {2}. Quantum Riddler's 'one or fewer cards in hand' clause is the specific anti-gas-out valve: the emptier the hand, the more every draw becomes. |
| raced | accepted | Accepted. This deck's fastest interaction is Cryoshatter at one mana, and its blockers arrive on turns 2-3 (Starbreach Whale 3/5, Sinister Cryologist 2/3), but it has no sweeper and no lifegain, so a genuine turn-4 kill from the cube's aggressive red and white decks beats it before the engine turns over. Mitigating would mean maindecking Mouth of the Storm or Extinguisher Battleship at seven and eight mana — both arrive after the thesis turn — or leaving mono-blue for a second colour's removal, which forfeits the 19-untapped-source manabase that is this build's entire structural argument. The sideboard pays for it instead: Mouth of the Storm x2 and Specimen Freighter x2 are four of the ten slots. |
| disruption-fizzle | mitigation | The deck has no critical turn to interact with — value accrues one warp cycle at a time and each cycle is self-contained (cast for warp cost, block, exile at end step, draw). A counterspell aimed at Anticausal Vestige costs the opponent a card to stop a card; a removal spell aimed at a warp body kills something that was going to exile itself at end step anyway, and the ETB has already resolved. The one genuinely fragile line is hard-casting Starwinder at {5}{U}{U} into an open opponent, which is why Divert Disaster x2 is mainboard rather than sideboard. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Weftwalking | 'The first spell each player casts during each of their turns may be cast without paying its mana cost' is symmetric, and against the cube's aggressive decks the opponent's free spell is a threat while this deck's is an answer it would rather hold; the shuffle-and-draw-seven half also discards the warp cards sitting in exile-limbo. Mythic against a 6-card cap. |
| Cerebral Download | 'Surveil X, where X is the number of artifacts you control. Then draw three cards.' — only the surveil scales; artifacts in this list are 2 of 21 (Cryogen Relic x2), so it is a flat five-mana draw-three with a surveil-0-to-1 rider. The shape judge flagged the 'engine-scaled' claim as overstated. |
| Codecracker Hound | A {2}{U} 2/1 whose warp cost equals its printed cost, so warping buys a second ETB but no tempo; the two slots went to Divert Disaster x2, which lifted interaction from 31.8% to inside the Control 35-45% band. |
| Tractor Beam | 'You control enchanted permanent' is the strongest single answer available to mono-blue, but at {2}{U}{U} it was the marginal card when the goldfish keepable rate came in at 79% against an 80% floor; the 19th Island took it to 81%, and to 86% after the Phase 9 repairs. |
| Mm'menon, the Right Hand | 'You may cast artifact spells from the top of your library' — artifacts in this list are 3 of 21, so the top-of-library clause whiffs roughly six times in seven; it would also be a fifth rare. |
| Moonlit Meditation | 'The first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of enchanted permanent' — token-creating cards in this list are 1 of 21 (Divert Disaster's Lander), so the trigger has almost nothing to convert. |
| Mechan Assembler | 'Whenever another artifact you control enters, create a 2/2 Robot. This ability triggers only once each turn' — the once-per-turn clamp blocks Starfield Vocalist from doubling it, and other artifacts here are 3 of 21. |
| Emissary Escort | 'This creature gets +X/+0, where X is the greatest mana value among other artifacts you control' — other artifacts in this list are 3 of 21 with a top mana value of 4, so it is usually a 0/4 or a 4/4 that needs a specific board; a rare against the cap. |
| Bygone Colossus | Warp {3} for a 9/9 with no ETB and no LTB text — this deck's whole thesis is the value attached to entering and leaving, and the Colossus has neither clause. |
| Steelswarm Operator | Its mana is restricted to 'cast an artifact spell' and 'activate abilities of artifact sources'; artifact spells here are 3 of 21, so the ramp is stranded most turns. |
| Uthros Psionicist | 'The second spell you cast each turn costs {2} less' — this deck casts a second spell in a turn only from about turn 5 onward at an average warp-effective MV of 2.5, so the discount arrives after the turns it would have mattered. |
| Illvoi Galeblade | A {U} 1/1 flash flier that sacrifices for a card is fine filler, but it competes with Sinister Cryologist for the one-mana slot and Cryologist's warp banks a leave-the-battlefield event the thesis actually uses. |
| Pinnacle Kill-Ship | 'When this Spacecraft enters, it deals 10 damage to up to one target creature' at {7} is genuinely reachable here — it is a common (2 copies, no rare cost), mana value 7 is a legal Anticausal Vestige free-drop target, and Starfield Vocalist doubles the ETB. Excluded because the free-drop route requires having already drawn the single Vestige (1 of 21 copies) and the hard-cast route costs seven mana. An earlier version of this reason said the deck had 'no way to cheat it in', which contradicted this deck's own Vestige clause and was wrong. |
| Extinguisher Battleship | {8} for 'destroy target noncreature permanent. Then this Spacecraft deals 4 damage to each creature' is the ONLY sweeper reachable by a U or colourless deck in this pool, and it would answer the conceded wide_boards class. Excluded on cost alone: 8 mana off 19 lands arrives around turn 9, past the thesis turn of 8. Note that the 4 damage kills only Sinister Cryologist (2/3) of this deck's creature copies — Starbreach Whale is 3/5 and survives — so an earlier version of this reason, which claimed it killed the Whale, was wrong. |
| Nutrient Block | '{2}, {T}, Sacrifice this artifact: You gain 3 life' plus a draw on death is a fine artifact entry, but this deck has no artifact-count payoff (3 of 21) and lifegain does not advance a plan that wins by out-drawing. |
| Thaumaton Torpedo | '{6}, {T}, Sacrifice this artifact: Destroy target nonland permanent' — the discount clause needs a Spacecraft attack and this deck has 1 Spacecraft, so it is a six-mana activation on a one-mana rock. |
| Wurmwall Sweeper | A {2} colorless Spacecraft with 'surveil 2' on entry is an artifact entry with filtering, but Cryogen Relic at the same cost draws an actual card on both entering and leaving. |
| Selfcraft Mechan | 'you may sacrifice an artifact. When you do, put a +1/+1 counter on target creature and draw a card' — the artifacts it can eat are 3 of 21, and eating Cryogen Relic to draw a card is what Cryogen Relic already does for {1}{U}. |
| Cosmogoyf | {B}{G} — off-colour, and splashing it would forfeit the 100% untapped blue manabase that is the entire structural argument for building this pipeline mono-coloured. |
| Annul | Sideboard — 'Counter target artifact or enchantment spell' against the cube's 74 artifacts and 16 enchantments, but dead against its mono-creature decks. |
| Unravel | Sideboard — 'Counter target spell. If the amount of mana spent to cast that spell was less than its mana value, you draw a card' draws against every warp, kicker and cost-reduction deck in the cube. |
| Specimen Freighter | Sideboard — 'return up to two target non-Spacecraft creatures to their owners' hands' is a two-for-one tempo swing against go-wide boards, which the mainboard concedes. |
| Mouth of the Storm | Sideboard — 'When this creature enters, creatures your opponents control get -3/-0 until your next turn' is mono-blue's closest thing to a sweeper, on a 6/6 flier with ward {2}; seven mana is affordable off 19 lands but too slow for game one. |
| Uthros Scanship | 'draw two cards, then discard a card' on a {3}{U} Spacecraft is a net +1 card at four mana; the slot went to Mental Modulation x2 and Consult the Star Charts, which cost one and two mana and fix a cantrip count that was 0 of 21. |
| Dauntless Scrapbot | Sideboard — 'When this creature enters, exile each opponent's graveyard' is the only graveyard answer available to a mono-blue deck in this pool (it is colourless). Boarded against reanimation and graveyard-recast decks specifically; the cube's 31-card graveyard census overstates the target class because it counts pure surveil and selection effects, two of which this deck runs itself. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  19 / 18 recommended  [PASS]
Avg CMC:     3.43   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.91 adj [MV 3.43 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons and uncommons max 2 copies — No card exceeds its rarity multiplier; verified by cube_search.get_max_copies
[PASS] Rares and mythics max 1 copy — All four rare/mythic cards are singletons
[PASS] Max 6 rare/mythic cards across mainboard + sideboard — 5 used: Anticausal Vestige (R), Starfield Vocalist (R), Starwinder (R), Consult the Star Charts (R), Quantum Riddler (M). Sideboard uses zero; 1 slot left unused.
[PASS] All cards from the eoe cube mainboard — Exact-name match against the working pool; Islands are format-supplied
[PASS] 40-card mainboard, 10-card sideboard — 40 / 10
```
