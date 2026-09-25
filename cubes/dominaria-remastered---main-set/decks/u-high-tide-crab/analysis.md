---
deck_name: "u-high-tide-crab"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "U"
format: "40-card"
built_at: "2026-08-02T17:39:50Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  17x Island
```

### CREATURES (5)

```
CMC  Card               Qty  Color  Role                                                                                                                                                       Rar
  2  Cloud of Faeries   x1   U      Engine (untap)                                                                                                                                             C
  3  Horseshoe Crab     x2   U      Payoff (primary sink)                                                                                                                                      C
  5  Glintwing Invoker  x1   U      Payoff (one-card sink)                                                                                                                                     C
  5  Peregrine Drake    x1   U      Engine (untap)                                                                                                                                             C
```

### INSTANTS & SORCERIES (14)

```
CMC  Card               Qty  Color  Role                                                                                                                                                       Rar
  1  High Tide          x2   U      Engine (mana multiplier)                                                                                                                                   U
  2  Counterspell       x2   U      Interaction                                                                                                                                                C
  2  Impulse            x2   U      Infrastructure (multiplier access)                                                                                                                         C
  2  Snap               x2   U      Interaction                                                                                                                                                C
  3  Frantic Search     x2   U      Engine (untap + selection)                                                                                                                                 C
  3  Stroke of Genius   x1   U      Payoff (third route)                                                                                                                                       R
  4  Turnabout          x2   U      Engine (untap)                                                                                                                                             U
  5  Force of Will      x1   U      Interaction                                                                                                                                                M
```

### OTHER SPELLS (4)

```
CMC  Card               Qty  Color  Role                                                                                                                                                       Rar
  2  Helm of Awakening  x1   C      Engine (third multiplier route)                                                                                                                            R
  2  Hermetic Study     x2   U      Payoff (primary sink)                                                                                                                                      C
  5  Gauntlet of Power  x1   C      Engine (pipeline anchor)                                                                                                                                   M
```

## SIDEBOARD (10)

```
Card               Qty  Color  Role / When to board in                                                                                                                                    Rar
Tormod's Crypt     x2   C      Hate - graveyard - vs Reanimator, Flashback/GY-Cast, Threshold and Self-Mill decks.                                                                        U
Confiscate         x2   U      Hate - noncreature permanents - vs Opposition, Sulfuric Vortex, Sneak Attack, an opposing Gauntlet of Power, and any artifact- or enchantment-heavy deck.  U
Circular Logic     x2   U      Flex - permission 4 and 5 - vs combo and control; out vs creature aggro.                                                                                   U
Man-o'-War         x2   U      Flex - tempo blocker - vs creature decks; out vs control.                                                                                                  C
Floodgate          x2   U      Hate - wide boards - vs Goblins, Tokens and any go-wide ground deck - 21 token generators in the pool.                                                     U
```

## ANALYSIS

### DECK IDENTITY

Mono-blue combo that multiplies Islands and cashes them in for damage. High Tide and Gauntlet of Power are both per-Island mana multipliers and they STACK - with both resolved, one basic Island taps for three blue - and Helm of Awakening is a third, different route to the same place, discounting every untap effect until it is net-positive on its own. Turnabout, Frantic Search, Snap, Peregrine Drake and Cloud of Faeries then untap those Islands so the same lands are tapped several times in one turn. The mana is spent on Horseshoe Crab wearing Hermetic Study - '{U}: Untap this creature' plus '{T}: This creature deals 1 damage to any target' is one damage per blue mana with no ceiling - with Glintwing Invoker and Stroke of Genius as structurally different backups. Blue is also the only colour in this cube with real permission, so the combo turn is protected by Counterspell x2 and a free Force of Will.

### THREE MULTIPLIERS, NOT ONE

This is the only one of the four decks where the Gauntlet has partners. `High Tide` and `Gauntlet of Power` are both per-Island mana multipliers, they trigger on the same event, and neither is a copy of the other — so they **add independently**:

| | An Island taps for |
|---|---|
| Base | {U} |
| + High Tide ("whenever a player taps an **Island** for mana, that player adds an additional {U}") | {U}{U} |
| + Gauntlet naming blue ("whenever a **basic** land is tapped for mana of the chosen color…") | {U}{U}{U} |

And `High Tide` is an *uncommon* — so unlike the other three builds, the deck runs **two** copies of a doubler that costs one mana and is live on turn 1, where Gauntlet is a five-mana mythic singleton.

### THE THIRD MULTIPLIER IS A CARD I ALMOST THREW AWAY

My first sweep rejected `Helm of Awakening` with the reason "it's symmetrical." That is a property of the card in isolation, which is exactly the kind of reason this build process forbids — and the self-grill caught it. The count that actually matters:

**With no multiplier resolved, six of this deck's engine cards produce exactly zero net mana.**

| Card | Cost | Untaps | Net (bare) | Net (under Helm) |
|---|---|---|---|---|
| Peregrine Drake | {4}{U} = 5 | 5 lands | **0** | **+1** |
| Cloud of Faeries | {1}{U} = 2 | 2 lands | **0** | **+1** |
| Frantic Search | {2}{U} = 3 | 3 lands | **0** | **+1** |
| Snap | {1}{U} = 2 | 2 lands | **0** | **+1** |
| Turnabout | {2}{U}{U} = 4 | all 6 | +2 | **+3** |

"Spells cost {1} less to cast" turns every untap effect net-positive *without any High Tide at all*. It is a second, independent way to start the engine — not a cost reducer.

This mattered because my original `mana_engine` assembly role lumped untappers and multipliers together and passed at p = 0.99. Restricted to the cards that genuinely multiply, it was **2.6 effective copies, p = 0.583 — a failing gate hidden inside a passing aggregate.** With Helm plus `Impulse` ×2 for access, the role now reads 4.6 effective, **p = 0.80.**

### THE KILL, STEP BY STEP

Turn 6, no Gauntlet, with `Horseshoe Crab` (turn 3) and `Hermetic Study` (turn 4) already down and six Islands in play:

| Step | Action | Floating |
|---|---|---|
| 1 | Tap Island #1 for {U}, cast `High Tide` | 0 |
| 2 | Tap the remaining 5 Islands — {U}{U} each | 10 |
| 3 | Cast `Turnabout` ({2}{U}{U}), choose land, **untap all 6** | 6 |
| 4 | Tap all 6 Islands again — {U}{U} each | 18 |
| 5 | Crab taps for 1 damage (free), then {U} to untap, ×18 | — |

**19 damage.** Two details that make it legal and are easy to get wrong: `High Tide` reads "until end of turn," so the re-tapped Islands still double after the Turnabout untap; and the Crab's *first* tap costs nothing, which is where the nineteenth point comes from.

### THE NUMBER THE GATE DOESN'T MEASURE

Every structural check on this deck passes, several of them comfortably. That is not the same as the turn-6 kill being likely, and it's worth saying plainly:

The line above needs **four specific 2-ofs** — `High Tide`, `Turnabout`, `Horseshoe Crab`, `Hermetic Study` — by turn 6. P(a given 2-of in 13 cards) = **0.4867**, so the joint probability of the full advertised line is roughly **5.6% of games**.

The assembly gate asks whether each *role* is available, not whether one specific four-card conjunction is. The backups don't close that gap on turn 6 either — `Glintwing Invoker` at 18 floating mana buys two activations, a 9/9 flier, not a kill; `Stroke of Genius` at 18 doesn't deck a fresh library. **The kill mechanism is delivered on turn 6; the modal game is not.** The backups turn turn 6 into a dominant board and turn 8 into a win. `Helm of Awakening` and `Impulse` ×2 exist to raise the multiplier half of that conjunction.

### THE ONLY DECK OF THE FOUR THAT CAN PROTECT ITS PLAN

Blue is the only colour in this cube with real permission, and it changes the failure profile completely. Where the black, green and red builds all concede the `stack` threat class outright, this deck answers it with cards: `Counterspell` ×2 plus `Force of Will`, whose alternative cost — "pay 1 life and **exile a blue card from your hand**" — is always payable, because **21 of the 23** nonland cards are blue.

That's also why `disruption-fizzle` is a mitigation here rather than an acceptance: the combo turn is a chain of instants, the opponent must interact on the stack, and Force of Will protects it for zero mana on the turn every land is committed.

### THREE CARDS, THREE LAND PROPERTIES — AND ONE TRAP

| Land | High Tide sees it? | Gauntlet sees it? |
|---|---|---|
| Island (basic) | ✅ Island type | ✅ Basic supertype |
| Contaminated Aquifer / Idyllic Beachfront / Molten Tributary / Tangled Islet | ✅ Island type | ❌ not basic |
| **Remote Isle** | ❌ type line is plain "Land" | ❌ not basic |

`Remote Isle` is the trap: it looks like a blue utility land, but its type line is `Land`, not `Land — Island`, so it triggers **neither** multiplier — and it enters tapped on top of that. The four Island-typed duals at least get half the engine, but all four enter tapped, which costs a turn in a deck racing to turn 6.

### FLOODING IS CLOSE TO A WIN CONDITION

The opposite of the other three decks: every extra Island here is **2–3 extra mana**, not 1, and all three sinks are unbounded. That's also the stated reason this deck runs 17 lands where the formula recommends 16 — and I checked that justification against the one I got wrong in the mono-red build, where I treated `Fireblast` as free while ignoring that it *destroys* two lands. Nothing in this deck destroys, sacrifices or discounts a land, so there is no hidden second side here.

### SIDEBOARD NOTE

`Confiscate` ×2 is in the board because the grill refuted my own concession. I had written that "a permanent that has already resolved cannot be answered" — false: "Enchant permanent // **You control enchanted permanent**" answers *any* resolved noncreature permanent, and that class is 24 artifacts plus 33 enchantments = **23.75% of the cube**, against which the deck previously had zero answers after resolution.

`Floodgate` ×2's damage is also stated correctly here after a correction: "half the number of Islands **you control**" is a *battlefield* count, not a deck count, so at the turns it's relevant (4–6 Islands in play) it deals **2–3** to each nonblue ground creature — enough for the 1/1 tokens it's boarded against, not the 8 I first claimed. It hits none of this deck's own creatures, all five of which are blue.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (23 nonland):  1:2  2:10  3:5  4:2  5:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  multiplier_access: 6 copies (effective 4.6: Gauntlet of Power@0.6, Impulse@0.5, Impulse@0.5) → p=0.80 (need ≥ 0.75)
  PASS  untap: 8 copies → p=0.94 (need ≥ 0.75)
  PASS  sink: 6 copies (effective 4.5: Horseshoe Crab@0.7, Horseshoe Crab@0.7, Hermetic Study@0.7, Hermetic Study@0.7, Glintwing Invoker@0.7) → p=0.79 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 37%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The maindeck has no sweeper. Floodgate ('When this creature leaves the battlefield, it deals damage to each nonblue creature without flying equal to half the number of Islands you control, rounded down') is a genuine sweeper for a 17-Island deck - up to 8 damage to each nonblue ground creature, and it hits 0 of this deck's own 8 creature copies because all 8 are blue - and is held in the sideboard because it is a 0/5 Defender that does nothing until it leaves the battlefield. Maindeck the class is not answered but out-raced: the Horseshoe Crab plus Hermetic Study sink deals one damage per {U} to ANY target, so a wide board is a resource to shoot down rather than a board to survive, and Stroke of Genius does not care about the battlefield at all.
  OK        single_large_threat: Snap, Counterspell, Force of Will
  CONCEDED  noncreature_permanents: Conceded MAINDECK only, and the earlier version of this concession was wrong: it claimed 'a permanent that has already resolved cannot be answered', which the grill refuted from oracle text. Confiscate ('Enchant permanent // You control enchanted permanent') answers ANY resolved noncreature permanent, it is a mono-blue uncommon, and it costs no rarity budget - it is now in the sideboard at 2 copies against a class that is 23.75% of the cube (24 artifacts + 33 enchantments). The genuine maindeck concession is narrower: blue has no artifact or enchantment DESTRUCTION in this pool (all 5 artifact answers and all 4 enchantment answers are G/W/multicolour), so maindeck the plan is to stop it resolving with Counterspell x2 and Force of Will, and Confiscate comes in post-board where a six-mana answer is affordable.
  OK        stack: Counterspell, Force of Will
  CONCEDED  graveyard: Tormod's Crypt is the only graveyard hate card in the entire cube and it is held in the sideboard; a {0} artifact that does nothing against non-graveyard decks would cost a combo piece in a 23-card nonland list where every slot is engine, sink or permission.
```

- No WARN flags. run_structural_checks returned overall PASS on the final list: curve PASS (MV distribution 1:2 2:10 3:5 4:2 5:4), assembly PASS on all three roles (multiplier_access effective 4.6 p=0.80; untap 8 copies p=0.94; sink effective 4.5 p=0.79), goldfish PASS (87% keepable, the highest of the four decks), coverage PASS with two classes answered by cards rather than conceded.

- Recorded because it matters more than the flags: the assembly gate passing is NOT the same as the turn-6 kill being likely. See land_math.honest_probability - the full advertised line needs four specific 2-ofs and is roughly 5.6% of games. The gate measures role availability, not conjunction.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This is the one deck of the four where flooding approaches a win condition: every extra Island is 2-3 extra mana under the stacked multipliers, and the sinks are unbounded - Horseshoe Crab plus Hermetic Study converts each {U} into a point of damage, Glintwing Invoker's '{7}{U}: +3/+3' repeats within a turn, and Stroke of Genius is literally '{X}{2}{U}: Target player draws X cards'. Cloud of Faeries cycles for {2} when the engine is already assembled. |
| screw | mitigation | 10 of 23 nonland cards cost exactly 2 and 2 cost 1, so a two-land hand deploys High Tide, Counterspell, Snap, Helm of Awakening or Impulse on curve. goldfish_sim reports 87% keepable - the best of the four decks - and 88% for three lands by turn 3 over 1000 hands. Impulse x2 ('Look at the top four cards') and Frantic Search x2 ('draw two cards, then discard two') dig for the third land. |
| decapitation | mitigation | Three structurally different sinks, which is why this build was picked over the other two sketches. If the Horseshoe Crab is killed, Hermetic Study reads 'Enchant creature' and can go on any body as a one-ping-per-turn clock, and Glintwing Invoker needs no second card. If both are answered, Stroke of Genius needs nothing on the battlefield. On the mana side the same redundancy now exists: if Gauntlet is answered there are still High Tide x2 and Helm of Awakening, which is exactly what the Phase 9 repair added. Counterspell x2 and Force of Will protect whichever piece matters. |
| gas-out | mitigation | Frantic Search x2 is card-neutral rather than card-positive, Cloud of Faeries cycles, and Impulse x2 is genuine selection, so 'Cards: Self-Replacing' is 5 of 23. The structural answer is better than the count suggests: Stroke of Genius targets ANY player, so with the engine assembled it can be aimed at ITSELF for an arbitrary refill rather than at the opponent for the kill - the same card doing gas-out duty and win-condition duty depending on which the game needs. |
| raced | accepted | Turn 6 is a slow clock, the maindeck runs 5 creature copies of which only Peregrine Drake and Cloud of Faeries block meaningfully in the air, and Horseshoe Crab is a 1/3 that wants to be untapping rather than blocking. Against the cube's fastest starts this deck can die before the combo turn. Mitigating means maindecking Man-o'-War x2 and Floodgate x2 - both of which are in the sideboard for exactly this - and every one of those slots comes out of the 12-card engine, which pushes the kill turn later and makes the race worse rather than better. The cost of mitigating is the kill turn itself. Blue does at least get to interact on the way: Counterspell x2, Force of Will and Snap x2 are all live against an aggro start, which is more than the other three decks can say. |
| disruption-fizzle | mitigation | This is the deck built to answer this mode, and it is the reason blue is the only pipeline of the four with real protection. The combo turn is a chain of instants, so the opponent must interact on the stack - and Counterspell x2 plus Force of Will (free, via 'pay 1 life and exile a blue card from your hand') protect it at zero mana cost on the critical turn. If the chain is broken mid-sequence the lands are spent but the pieces are not: High Tide x2, Turnabout x2 and Helm of Awakening mean the same sequence can be re-run next turn, and Horseshoe Crab plus Hermetic Study stay on the battlefield through a countered spell. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Time Stretch | 'Target player takes two extra turns after this one' at {8}{U}{U} is the archetype's dream card, but it costs a mythic slot and does not itself win - it buys turns for a kill the deck can already assemble in one. The five rare/mythic slots go to Gauntlet, Force of Will, Stroke of Genius, Mystical Tutor and Mystic Remora. |
| Arcanis the Omnipotent | '{T}: Draw three cards' is a genuine engine with untap effects (Turnabout can untap creatures), but at {3}{U}{U}{U} it lands on the thesis turn itself, and it costs a rare slot. It is the strongest card in the pool for a SLOWER blue deck than this one. |
| Urza, Lord High Artificer | 'Tap an untapped artifact you control: Add {U}' - artifacts in this list number 1 of 23 (Gauntlet of Power), so the mana ability is nearly dead, and the Construct token would be a 1/1. Mythic slot. |
| Opposition | 'Tap an untapped creature you control: Tap target artifact, creature, or land' - this list runs 6 creature copies, most of which want to be tapping for the combo rather than for Opposition. Rare slot. |
| Denizen of the Deep | An 11/11 for {6}{U}{U} whose ETB 'return each other creature you control to its owner's hand' would bounce the Horseshoe Crab that is the deck's kill. Actively anti-synergistic. Rare slot. |
| Vexing Sphinx | 'Cumulative upkeep - Discard a card' on a 4/4 flier is a fine clock, but this deck's plan is a one-turn combo, not a four-turn beatdown, and the discard competes with holding Force of Will's exile cost. Rare slot. |
| Helm of Awakening | 'Spells cost {1} less to cast' is symmetrical and would help the opponent's counterspells as much as this deck's chain; it also costs a rare slot in a deck already at 5/5. |
| Lotus Blossom | 'At the beginning of your upkeep, you may put a petal counter' - four turns to match what one Island produces under both multipliers. Rare slot. |
| Impulse | 'Look at the top four cards of your library. Put one of them into your hand' is real selection, but it was the card cut to take the land count from 16 to 17, because in this deck an Island is worth two to three mana and the land count IS the engine. |
| Fact or Fiction | 'An OPPONENT separates those cards into two piles' - in a deck with a two-card combo the opponent simply splits the Crab from the Study, and at {3}{U} it costs the turn it is cast. |
| Deep Analysis | 'Target player draws two cards' plus a {1}{U} flashback is good card advantage, but this deck wins by assembling a specific engine, and Mystical Tutor plus the deck's own untap-and-draw cards find the missing piece faster than raw card volume. |
| Obsessive Search | 'Draw a card' for {U} with Madness {U} - the madness mode needs a discard outlet, and this list has 2 of 23 (Frantic Search x2). Below the rate the slot demands. |
| Aven Fateshaper | '{4}{U}: Look at the top four cards of your library, then put them back in any order' is a mana sink, but it only reorders - it draws nothing, so it converts mana into information rather than into a win. |
| Thieving Magpie | 'Whenever this creature deals damage to an opponent, draw a card' needs combat damage to connect repeatedly, which is a beatdown plan this combo deck is not running. |
| Aven Fisher | A 2/2 flier that replaces itself on death - fine value, but this deck's creature slots are the combo (Horseshoe Crab, Glintwing Invoker) and the untap engine (Peregrine Drake, Cloud of Faeries). |
| Confiscate | 'You control enchanted permanent' at {4}{U}{U} is the most powerful answer blue has to a resolved permanent, but six mana on the thesis turn is the whole combo turn spent on one answer. |
| Ovinomancer | 'sacrifice it unless you return three basic lands you control to their owner's hand' - returning three Islands to hand is catastrophic for a deck whose entire engine is Islands in play. |
| Wormfang Drake | 'sacrifice it unless you exile a creature you control other than this creature' would exile the Horseshoe Crab. Anti-synergistic with the kill. |
| Aquamoeba | 'Discard a card: Switch this creature's power and toughness' - a free discard outlet, but this deck has no madness cards and no graveyard payoff, so it discards for nothing. |
| Veiled Serpent | 'it becomes a 4/4 Serpent creature with "This creature can't attack unless defending player controls an Island"' - the attack restriction depends on the OPPONENT running Islands, which is a matchup lottery this deck cannot fix. |
| Leaden Fists | 'Enchanted creature gets +3/+3 and doesn't untap during its controller's untap step' - the drawback clause is the opposite of what a deck built on untapping wants. |
| Millikin | '{T}, Mill a card: Add {C}' - colourless mana pays none of Horseshoe Crab's '{U}:', and the random mill can bury the 1-of Stroke of Genius or Gauntlet in a deck with no recursion. |
| Mind Stone | '{T}: Add {C}' - 27 of 27 pips are {U}, and colourless mana cannot pay the Crab's '{U}:' untap, which is the card the whole deck is built to feed. |
| Icy Manipulator | '{1}, {T}: Tap target artifact, creature, or land' is repeatable interaction, but blue already has Counterspell, Force of Will, Snap and Ovinize, and MV4 competes with Peregrine Drake for the same turn. |
| Remote Isle | Its type line is plain 'Land', NOT 'Land - Island' - so it triggers NEITHER High Tide (which needs the Island land type) NOR Gauntlet (which needs the Basic supertype). It also enters tapped. It is strictly worse than an Island here in both clauses. |
| Contaminated Aquifer / Idyllic Beachfront / Molten Tributary / Tangled Islet | All four ARE Islands by land type, so High Tide would see them - but none carries the Basic supertype, so Gauntlet never doubles them, and every one reads 'This land enters tapped'. Half the multiplier for a turn of tempo. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.56 adj [MV 2.83 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                                       cube_mainboard only - every card verified by exact name against working_pool.json
commons_uncommons_max_2                    PASS - highest count is 2
rares_mythics_max_1_each                   PASS
rares_mythics_max_5_total_MB_plus_SB       PASS at 4/5 - MB: Gauntlet of Power (mythic), Force of Will (mythic), Stroke of Genius (rare), Helm of Awakening (rare). The sideboard is entirely commons and uncommons. This is the only one of the four decks with UNSPENT rarity headroom, and it is unspent deliberately: Mystical Tutor and Mystic Remora were both cut during the Phase 9 repair, and no remaining rare in the pool improves this list more than the commons and uncommons already in it. Spending a slot for its own sake is not a reason.
basics                                     Island x17 - format-supplied, exempt from copy limits
colour                                     core_colors ['U'], splash_colors [] - every nonland card returns a non-null effective_cost.best_mode(card, ['U'], []) in normal cast mode
```
