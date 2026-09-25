---
deck_name: "wb-cleric-aristocrats"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-19T19:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
x4   Plains                   basic
x2   Sunlit Marsh             WB dual, enters tapped
x9   Swamp                    basic
x1   Caves of Koilos          WB dual, untapped, 1 damage per colored tap
```

### CREATURES (17)

```
CMC  Card                            Qty   Color  Role                       Rar
  1  Cult Conscript                 x2    B      Enabler                    U
  1  Evolved Sleeper                x1    B      Threat                     R
  2  Elas il-Kor, Sadistic Pilgrim  x1    WB     Payoff                     U
  2  Phyrexian Missionary           x2    W      Enabler                    U
  2  Phyrexian Vivisector           x1    B      Payoff                     C
  2  Resolute Reinforcements        x2    W      Enabler                    U
  2  Shadow-Rite Priest             x1    B      Payoff                     R
  3  Braids, Arisen Nightmare       x1    B      Engine                     R
  3  Gibbering Barricade            x2    B      Engine                     C
  4  Phyrexian Warhorse             x2    B      Engine                     C
  4  Wingmantle Chaplain            x2    W      Enabler                    U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                            Qty   Color  Role                       Rar
  1  Bone Splinters                 x2    B      Interaction                C
  1  Cut Down                       x2    B      Interaction                U
  2  Destroy Evil                   x1    W      Interaction                C
```

### OTHER SPELLS (2)

```
CMC  Card                            Qty   Color  Role                       Rar
  2  Weatherlight Compleated        x1    C      Payoff                     M
  3  Braids's Frightful Return      x1    B      Engine                     U
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                                Rar
Benalish Sleeper                x2    W      Interaction - Against the 7 ward/hexproof creatures in C
      Against the 7 ward/hexproof creatures in the cube that targeted removal cannot reach - kicked for {B} it reads 'each player sacrifices a creature of their choice'. The symmetric half is upside: our own sacrifice triggers Elas il-Kor, Weatherlight Compleated and Phyrexian Vivisector, and satisfies Cult Conscript's recursion clause.
Knight of Dusk's Shadow         x2    B      Threat - Against lifegain decks - 'Your opponents can' U
      Against lifegain decks - 'Your opponents can't gain life' shuts off a 22-card, 8.9%-density class, which is the single thing that undoes an incremental drain plan.
Extinguish the Light            x2    B      Interaction - Against the 28 of 157 pool creatures tha C
      Against the 28 of 157 pool creatures that neither Cut Down (total power+toughness 5 or less) nor Destroy Evil (toughness 4 or greater) can hit - a 4/3 is missed by both. Also the only planeswalker answer in the 50.
Prayer of Binding               x2    W      Interaction - Against artifacts (15 in the cube, 6.1%) U
      Against artifacts (15 in the cube, 6.1%) - the mainboard's only noncreature answer is Destroy Evil's enchantment mode. Chosen over Leyline Binding, which has the same flash-exile-any-nonland-permanent effect at the same effective cost with 2 basic land types, because Prayer is uncommon and the 5 rare slots are fully spent.
Sengir Connoisseur              x2    B      Threat - Against the evasion class - 51 cards at 20.6% U
      Against the evasion class - 51 cards at 20.6% density, the largest in the cube, and 41 of the 51 have flying. 'Flying. Whenever one or more other creatures die, put a +1/+1 counter on this creature' is a flying blocker that grows off the deck's own sacrifice engine, which is the only way this shell contests the air.
```

## ANALYSIS

### DECK IDENTITY

A WB aristocrats deck that uses Clerics as its fodder and blocking layer rather than as a tribe. Seventeen creatures plus a stream of tokens feed five kinds of sacrifice outlet - Phyrexian Warhorse at {1}, Gibbering Barricade at {2}{B} for a card, Braids, Arisen Nightmare for free at end step, Braids's Frightful Return chapter I, and Bone Splinters as removal - and every death is converted into value by six payoff cards. Elas il-Kor turns deaths directly into opponent life loss and is the single best draw in the deck, but it is a 1-of Legendary, so the deck is built to grind on Weatherlight Compleated's per-death counters, Gibbering Barricade's card, Phyrexian Vivisector's scry and Braids's draw-or-drain even when Elas never appears. Four Defender bodies (Gibbering Barricade x2, Wingmantle Chaplain x2) hold the ground while Wingmantle turns them into flying Birds - the deck's only answer to a cube whose largest threat class is 51 evasive creatures. Six Cleric cards (a seventh on demand via Evolved Sleeper) honour the constraint without the deck depending on the type.


**How this differs from the Cleric kindred build.** Both decks are WB and both honour the Cleric brief, but they answer it differently and the card evaluations genuinely invert between them. The kindred deck treats Clerics as a tribe and needs the type on as many bodies as possible; this deck treats them as the fodder and blocking layer and needs bodies that *want to die*. Three cards show the inversion cleanly:

| Card | Kindred build | Aristocrats build | Why |
|---|---|---|---|
| Resolute Reinforcements | EXCLUDE | INCLUDE x2 | The anthem reads "Other Clerics" and the sac cost reads "Sacrifice another Cleric", so its Soldier token is worthless there. Here every outlet reads "Sacrifice a creature", so the token is full-value fodder. |
| Wingmantle Chaplain | EXCLUDE | INCLUDE x2 | `for each creature with defender you control` counts 0 other defenders in the kindred deck (exactly 1 Bird, second trigger never fires) and 4 defender cards here (1-4 Birds, plus one per later defender). |
| Bone Splinters | 1 copy | 2 copies | There, each cast removes one of only 10 anthem bodies. Here the sacrifice is the *point*: it triggers Elas, Weatherlight and Vivisector and satisfies Cult Conscript's recursion clause. |

Same pool, same colours, opposite verdicts — because the denominators differ.

**The thesis was revised mid-build, and disclosed.** The Phase 3 pitch called this an Elas il-Kor drain deck. Elas is a single Legendary copy seen 37.5% of the time by turn 8; declaring it as the assembly role would have failed the structural gate outright. So the declared engine is what the deck actually assembles — a sacrifice **outlet** (9 copies, effective 7.3, p=0.95) plus a **death payoff** (8 copies, effective 7.6, p=0.96). Elas remains the best draw and the fastest kill, but the deck grinds perfectly well on Weatherlight's counters, Barricade's cards and Braids's draw-or-drain without it.

**Phyrexian Warhorse is the card the whole build rests on.** The self-grill scanned every WB-legal card's oracle text for sacrifice costs and confirmed there is no cheaper or more repeatable outlet anywhere in the pool. `{1}, Sacrifice another creature` can be activated arbitrarily many times per turn, which is what turns a pile of 1/1 tokens into a real drain clock. Aron, Benalia's Ruin is the only comparable outlet and it is excluded here on a mana count, not a power one: `{W}{W}{B}` to cast and `{W}{B}` to activate is unpayable off the 7 white sources this build's 68%-black pip split supports. It plays in the kindred deck instead, whose pips are near-even.

**Weatherlight Compleated was found by the grill, not by any sketcher.** None of the three build sketches proposed it. It costs `{2}` with zero coloured pips on a mana base already 68% black, matches Phyrexian Vivisector's per-death scry, and at four phyresis counters becomes a 5/5 flier — this deck's only evasive threat in a cube whose largest class is 51 evasive creatures at 20.6% density. It spent the fifth and last rare slot, which is why Sheoldred, the Apocalypse is not here.

**Where this deck is weakest.** Its goldfish turn is 8 and it explicitly does not race — that acceptance is recorded rather than papered over. Shadow-Rite Priest is the hardest card in the list to justify and both grill agents said so independently: its anthem hits only 5 of the other 16 creature copies here, versus 10 of 17 in the kindred build. It earns its slot on the stated Cleric constraint and as a 2-mana body, not on power. And the land count sits on a rounding boundary — see the disclosure in the mana section.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (24 nonland):  1:7  2:9  3:4  4:4
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  sac_outlet: 9 copies (effective 7.3: Bone Splinters@0.7, Bone Splinters@0.7, Braids's Frightful Return@0.5, Shadow-Rite Priest@0.4) → p=0.95 (need ≥ 0.75)
  PASS  death_payoff: 8 copies (effective 7.6: Cult Conscript@0.8, Cult Conscript@0.8) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 80%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. Two symmetric options are castable here by usable mode - Drag to the Bottom ({2}{B}{B}, 'Each creature gets -X/-X') and Choking Miasma (printed color_identity B/G because of a {G} kicker, but its cast cost is {1}{B}{B} with black-only cost pips, so it is castable with the kicker declined). Both would kill this deck's own fodder base, and that fodder base is the engine feeding every sacrifice outlet. The deck answers wide boards by attrition instead: 5 single-target removal copies, 4 Defender bodies (Gibbering Barricade x2, Wingmantle Chaplain x2) that block without trading, and bodies that generate value when they die.
  OK        single_large_threat: Bone Splinters, Destroy Evil, Elas il-Kor, Sadistic Pilgrim, Cut Down
  OK        noncreature_permanents: Destroy Evil, Braids, Arisen Nightmare, Braids's Frightful Return
  CONCEDED  stack: WB has no counterspell in this pool. This deck runs no stack interaction at all and accepts it; the sideboard answers permanents after they resolve (Prayer of Binding) rather than on the stack.
  CONCEDED  graveyard: Verified by oracle-text scan of the full working pool: zero cards in this cube exile a graveyard. Every 'exile ... graveyard' string in the 271-card pool is a self-referential activation cost or self-recursion clause. The class cannot be covered by any deck here, not just this one.
```

- Curve, assembly, goldfish and coverage all returned PASS both before and after the Phase 9 repair; no WARN flags were raised, so no deviation response is owed.

- Recorded thesis revision: Elas il-Kor is a 1-of Legendary at p=0.375 by turn 8 and is therefore NOT declared as the assembly role. The declared roles are sac_outlet (9 copies, effective 7.3, p=0.95) and death_payoff (8 copies, effective 7.6, p=0.96). This is a disclosed revision, not an assembly role omitted to pass a gate.

- Reliability discounts are declared PER COPY in both roles after the grill found the earlier declaration applied Bone Splinters' 0.7 discount to one copy while the deck ran two.

- Slot allocation deviates from the Midrange band on Threats (79.2% vs 30-40%); grounds are recorded in slot_allocation. Interaction at 20.8% is inside its band.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Every outlet is a mana sink that converts surplus lands into value: Phyrexian Warhorse x2 at {1} per activation, Gibbering Barricade x2 at {2}{B} to draw a card, Cult Conscript x2 rebuying itself for {1}{B}, Evolved Sleeper's {1}{B}{B} line, and Shadow-Rite Priest's {3}{B}{B} tutor. Braids, Arisen Nightmare draws or drains 2 every end step at no mana cost at all. |
| screw | mitigation | 16 of the 24 nonland cards cost 2 or less and 7 cost 1, so a two-land hand operates: Cult Conscript, Cut Down, Bone Splinters and Evolved Sleeper are all castable off a single Swamp. The goldfish simulation returned 84% keepable hands, 84% on three lands by turn 3, and an 80% turn-1 play rate. (Corrected in the grill: the earlier entry cited Samite Herbalist's scry as a dig, but that card is cut and its trigger had no enabler in the list anyway.) |
| decapitation | mitigation | The thesis revision IS the mitigation: the deck does not depend on Elas il-Kor. If it is answered on sight, deaths still generate value from 7 other payoff copies - Weatherlight Compleated accruing counters toward a 5/5 flier, Gibbering Barricade x2 drawing, Phyrexian Vivisector scrying, Braids, Arisen Nightmare drawing or draining 2, and Cult Conscript x2 recurring. Braids's Frightful Return chapter II returns any creature card from the graveyard to hand, including Elas itself. (Corrected in the grill round: Sheoldred's Restoration was named here but has since been cut from the sideboard, so it is no longer cited.) |
| gas-out | mitigation | Five card-generating effects across 6 copies: Gibbering Barricade x2 ('You gain 1 life and draw a card' per sacrifice), Braids, Arisen Nightmare (a card every end step the opponent declines to sacrifice), Weatherlight Compleated (a card per death once it has seven counters), Phyrexian Missionary x2 kicked for {1}{B} (returns a creature card from the graveyard to hand), and Braids's Frightful Return chapter II. Cult Conscript x2 is not card advantage but is a renewable body costing no card, which is the same thing for a deck whose resource is fodder. |
| raced | accepted | Against the cube's fastest clocks this deck is the slower one and does not attempt to race: its goldfish turn is 8 against an evasion class of 51 creatures at 20.6% density, 41 of them fliers. What it does instead is block and grind - 4 Defender bodies (Gibbering Barricade x2, Wingmantle Chaplain x2) hold the ground, Wingmantle's Birds provide the only flying blockers, Phyrexian Missionary x2 is a 2/3 lifelink, Elas il-Kor's deathtouch makes any block unprofitable, and 5 removal copies buy time. Sengir Connoisseur x2 is boarded specifically for this class. Mitigating properly in the mainboard would mean cutting the outlets and the fodder for cheap evasive threats, which is the Cleric-kindred aggro build, not this one - the cost of racing is this deck's entire engine. |
| disruption-fizzle | mitigation | There is no critical turn to interact with - the drain accrues one trigger at a time across many turns rather than in a single combo turn, so a counterspell or removal spell mid-sequence costs one trigger, not the plan. The outlets are spread across 5 distinct cards and 9 copies, so answering any one leaves the rest. The deepest single point of failure is having no outlet at all, which the assembly gate measures at p=0.95 by turn 8. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Sheoldred, the Apocalypse | MYTHIC, cut for the 5-card cap - and the single best swap if that cap is ever relaxed. Raised by the grill as the best use of the then-unspent 5th rare slot; the slot went to Weatherlight Compleated instead because Weatherlight composes with all 9 sacrifice-outlet copies while Sheoldred's drain needs nothing from the fodder base. |
| Aron, Benalia's Ruin | Excluded on a mana count, not a power one. A genuinely strong repeatable outlet, but {W}{W}{B} to cast and {W}{B} to activate is unpayable at a reasonable rate off the 7 white sources this build's 68%-black pip split produces. It is in the Cleric kindred deck instead. |
| Samite Herbalist | Cut during the grill after verification: 'Whenever this creature becomes tapped' has ZERO enablers in this list - 0 of the 24 nonlands have enlist and 0 tap a creature you control - so the trigger only fires when it attacks as a 2/1. Its two slots went to Wingmantle Chaplain, which kept the printed-Cleric count at 6. |
| Ratadrabik of Urborg | RARE, cut for the 5-card cap. It is the only card in the pool that would make a second Elas il-Kor worth running, since it copies a Legendary creature that dies as a non-legendary 2/2 Zombie token. The first rare to consider if the budget grows and a second Elas is wanted. |
| Splatter Goblin | 'When this creature dies, target creature an opponent controls gets -1/-1' is a ONE-SHOT death trigger. Phyrexian Vivisector and Weatherlight Compleated both trigger on EVERY creature death; with 9 outlet copies the repeatable payoff outscales the one-shot one. |
| Phyrexian Rager | Sideboard/flex consideration. 'When this creature enters, you draw a card and you lose 1 life' - a 2/2 that replaces itself and then dies into 8 payoff copies. Genuinely close to Wingmantle Chaplain for the slot; Wingmantle won because it is a Cleric AND supplies the only flying blockers. |
| Blight Pile | '{2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control' - with 4 defender cards here, X would be 1-3 repeatable without combat. Genuinely tempting; it is the payoff the Cleric Walls build is constructed around instead, and adding it here would pull this deck toward that one. |
| Sengir Connoisseur (sideboard consideration) | In the sideboard. 'Flying. Whenever one or more other creatures die, put a +1/+1 counter on this creature' - a flying blocker that grows off the deck's own engine, boarded against the 20.6% evasion class. Off-curve at MV 5 for a list topping out at 4, which is why it is not mainboard. |
| Sheoldred's Restoration | Sideboard consideration, cut in the grill. It answers sweepers, which are only 6 cards at 2.4% density - the thinnest class in the whole threat profile. Its two slots went to Sengir Connoisseur, which answers the largest class instead. |
| Citizen's Arrest | Cut on the pip math. {1}{W}{W} is unsupportable off 7 white sources in a 68%-black deck. Extinguish the Light does the unconditional-removal job from the sideboard at {2}{B}{B}, which this base casts comfortably. |
| Liliana of the Veil | MYTHIC, cut for the 5-card cap. Its -2 edict is a fine sacrifice-adjacent answer, but the +1 symmetric discard is a genuine tax on a deck that wants to hold outlets and fodder, and the shape judge flagged the same thing when rejecting the toolbox sketch. |
| Eerie Soultender | Cut. The {4}{B} exile-recursion is a five-mana sorcery-speed effect competing for exactly the turns the deck wants to spend on outlet activations, and its mill-three has no payoff in this list. Its slot went to Phyrexian Vivisector, whose scry triggers on every death rather than once. |
| Leyline Binding | RARE, cut for the 5-card cap. With Plains, Swamp and Sunlit Marsh (Land - Plains Swamp) the deck has 2 basic land types, so it costs {3}{W} - identical to Prayer of Binding, which is uncommon and took the sideboard slot instead. |
| Captain's Call | Three 1/1 Soldier tokens on one card, all legal food for 8 of the 9 outlet copies. Lost the slot to Resolute Reinforcements, which gives 2 bodies for 2 mana instead of 3 for 4 and has flash; at MV 4 this build already has 4 cards competing. |
| Crystal Grotto | Excluded from the land base. 16 of the 24 nonland cards cost 2 or less and want a colored pip on turn 1 or 2; Crystal Grotto's free mode adds only {C} and its colored mode costs {1}. |
| Drag to the Bottom / Choking Miasma | The two symmetric sweepers castable in these colours. Both are excluded from the mainboard because they kill this deck's own fodder base, which IS the engine - Choking Miasma's -2/-2 alone kills 8 of the 17 creature copies plus every token. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.21   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.55 adj [MV 2.21 vs 2.5, 1 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  68.0%  prod  75.0%  gap  -7.0pp  [OK]
  W  demand  32.0%  prod  43.8%  gap -11.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Rule                                                        Result
1a mainboard count == 40  -- got 40                         PASS
1b sideboard count == 10  -- got 10                         PASS
2 every name exists in working pool (exact match)  -- []    PASS
3 copy counts obey card_pool_rules  -- []                   PASS
3b rares+mythics MB+SB <= 5  -- got 4: ['Braids, Arisen Nig PASS
4 every nonland usable in core+splash (best_mode)  -- []    PASS
5 no splash colors declared - splash cap vacuous            PASS

card_pool_rules: commons/uncommons max 2, rares/mythics max 1
extra constraint : max 5 rares+mythics across mainboard + sideboard
rares/mythics used (5 of 5): Braids, Arisen Nightmare, Caves of Koilos, Evolved Sleeper, Shadow-Rite Priest, Weatherlight Compleated
```