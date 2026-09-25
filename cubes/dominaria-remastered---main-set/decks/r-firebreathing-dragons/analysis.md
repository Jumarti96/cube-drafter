---
deck_name: "r-firebreathing-dragons"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "R"
format: "40-card"
built_at: "2026-08-02T17:39:50Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  18x Mountain
```

### CREATURES (14)

```
CMC  Card                  Qty  Color  Role                                                                                                                                                       Rar
  2  Mogg War Marshal      x2   R      Threat                                                                                                                                                     C
  2  Subterranean Scout    x2   R      Threat (evasion enabler)                                                                                                                                   C
  3  Dragon Engine         x2   C      Payoff (mana sink)                                                                                                                                         C
  3  Suq'Ata Lancer        x1   R      Threat                                                                                                                                                     C
  4  Dragon Whelp          x2   R      Payoff (evasive sink)                                                                                                                                      U
  4  Flametongue Kavu      x1   R      Interaction                                                                                                                                                U
  5  Avarax                x2   R      Payoff (half-rate sink)                                                                                                                                    C
  5  Siege-Gang Commander  x1   R      Payoff (board-independent reach)                                                                                                                           R
  6  Shivan Dragon         x1   R      Payoff (kill mechanism)                                                                                                                                    R
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                  Qty  Color  Role                                                                                                                                                       Rar
  1  Chain Lightning       x2   R      Interaction / reach                                                                                                                                        C
  1  Gamble                x1   R      Infrastructure                                                                                                                                             R
  1  Spark Spray           x1   R      Interaction / reach                                                                                                                                        C
  6  Fireblast             x2   R      Reach                                                                                                                                                      U
```

### OTHER SPELLS (2)

```
CMC  Card                  Qty  Color  Role                                                                                                                                                       Rar
  3  Sulfuric Vortex       x1   R      Engine (board-independent clock)                                                                                                                           R
  5  Gauntlet of Power     x1   C      Engine (pipeline anchor)                                                                                                                                   M
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Role / When to board in                                                                                                                                    Rar
Tormod's Crypt        x2   C      Hate - graveyard - vs Reanimator, Flashback/GY-Cast, Threshold and Self-Mill decks.                                                                        U
Slice and Dice        x2   R      Hate - wide boards - vs Goblins and Tokens - 21 token-generating cards in the pool - and only alongside the burn plan, since it wipes your own board too.  U
Icy Manipulator       x2   C      Flex - repeatable interaction - vs midrange decks with 4+ toughness creatures; out vs decks that go under it.                                              U
Solar Blast           x2   R      Flex - removal - vs creature decks; out vs control where the burn should point at the face.                                                                C
Macetail Hystrodon    x1   R      Flex - grindy threat - vs ground-based midrange mirrors; out vs anything faster than turn 6.                                                               C
Wall of Junk          x1   C      Hate - being raced - vs Goblins, Tokens and any go-wide aggro deck.                                                                                        U
```

## ANALYSIS

### DECK IDENTITY

Mono-red aggro that attacks in the air and finishes with burn. Shivan Dragon is the thesis in one card - 'Flying // {R}: This creature gets +1/+0 until end of turn' is the only unbounded per-mana pump in mono-red, and it is already evasive, so surplus mana converts directly into unblocked damage. Dragon Whelp doubles the flying pump on a cheaper body and Dragon Engine supplies a colourless, genuinely unbounded sink; Fireblast, Chain Lightning, Siege-Gang Commander and Sulfuric Vortex supply damage that does not need a creature to attack. Gauntlet of Power naming red doubles all 18 Mountains and anthems 12 of the 14 creature copies, but it is a 1-of mythic that is only 26.2% to be seen by turn 5, so the deck is built to function on basics alone and Gamble exists to find it.

### MONO-RED IS THE WEAKEST OF THE FOUR COLOURS FOR THIS ARCHETYPE, AND THIS BUILD SAYS SO

The archetype brief listed `Shivan Dragon`, `Dragon Whelp` and `Avarax` as red's firebreathing mana sinks. Read against their own oracle text, only one of the three survives:

| Card | Oracle | Verdict as a mana sink |
|---|---|---|
| Shivan Dragon | "{R}: This creature gets +1/+0 until end of turn" | **Genuine and unbounded.** But a rare — 1 copy. |
| Dragon Whelp | "…If this ability has been activated **four or more times this turn, sacrifice this creature**" | **Capped.** Three safe activations per turn, then it dies. Weighted 0.4. |
| Avarax | "**{1}{R}**: This creature gets +1/+0" | **Half rate.** Two mana per point, and no evasion. Weighted 0.5. |

With only those, the mana-sink role sat at **2.8 effective copies — P(seen by turn 5) = 0.58**, well under the 0.75 assembly gate. `Dragon Engine` ×2 ("{2}: This creature gets +1/+0 until end of turn" — colourless, untapped, unbounded) was added specifically to reach **4.8 effective, p = 0.78**. That is the honest shape of mono-red big mana in this cube: it needs a colourless artifact creature to have enough sinks at all.

### THE ANCHOR FIGHTS ONE OF ITS OWN CARDS

The most interesting thing the self-grill found is that `Gauntlet of Power` **turns off** `Subterranean Scout`:

> Subterranean Scout: "When this creature enters, target creature **with power 2 or less** can't be blocked this turn."
> Gauntlet of Power: "Creatures of the chosen color get **+1/+1**."

Legal targets among the deck's 14 creature copies: **10 without Gauntlet, but only 4 with it** — the anthem pushes Suq'Ata Lancer, Dragon Whelp and the Scout itself above the threshold, and only the two colourless Dragon Engines and the 2/2 Mogg War Marshals stay eligible. `Shivan Dragon` at 5/5 is never a legal target at all.

The Scouts stayed at 2 copies anyway, for a counted reason: Gauntlet is a mythic 1-of and is only **26.2%** to be seen by turn 5, so the 10-target case is what actually happens in roughly three games in four. But the record now states this as the cost it is, not the synergy I originally wrote it up as.

### GAMBLE EXISTS BECAUSE OF THAT 26.2%

The Specific Constraint asked for a Gauntlet deck. In a 40-card deck a mythic 1-of is seen by turn 5 about a quarter of the time, and there is no second mana-doubler in red or colourless anywhere in this cube — I checked every red and colourless card in the pool. The only lever available is a tutor, and red has exactly one: `Gamble` ("Search your library for a card, put that card into your hand, discard a card at random"). Its risk is real and now counted rather than hand-waved: cast from a four-card hand, the random discard throws away the card just fetched **one time in four**.

### THE KILL MATH, CORRECTED TWICE

Both of my original kill lines were wrong, and the grill caught both:

1. The turn-5 line spent "4 mana on Fireblast's printed cost." `Fireblast` costs **{4}{R}{R} = 6**, and the turn didn't have it.
2. The turn-6 line cast `Shivan Dragon` and attacked with it the same turn. Shivan Dragon has **no haste**, and nothing in the deck grants it any.

The corrected lines:

- **Turn 5 (no Gauntlet):** `Dragon Whelp` from turn 4 attacks as a 2/3 flier. Tap 5 Mountains — 1 into `Chain Lightning` (3), 1 into a Whelp pump (3 in the air), and `Fireblast` for **zero mana** by sacrificing two already-tapped Mountains (4). **10 damage**, at the cost of dropping to 3 lands.
- **Turn 7 (no Gauntlet):** `Shivan Dragon` cast turn 6 attacks turn 7. Tap 7 Mountains — 1 to `Chain Lightning` (3), 6 into "{R}:" activations for an 11/5 flier, then `Fireblast` sacrifices two Mountains *after* they've been tapped for mana (4). **18 damage.**

### THE LAND COUNT ARGUMENT I LOST

I originally ran 17 lands and justified it by excluding `Fireblast` ×2 from the average-mana-value term — "it's cast for free off two Mountains." The Challenger showed that takes only the favourable half of a two-sided card: `land_target` has no term for land *destruction*, so a spell that saves mana **and eats two Mountains** was being scored solely for the saving. Casting both copies puts the deck on 13 operating lands.

It measured the cost rather than arguing it:

| | 17 lands | 18 lands |
|---|---|---|
| P(≥6 lands by turn 6) | 50.4% | **59.2%** |
| P(≥7 lands by turn 7) | 35.5% | **44.6%** |

Those are the two turns the whole plan is built around. I took the 18th land, cutting a `Suq'Ata Lancer` — the only threat in the list touching neither gated structure, since it's a Human Knight and so can't feed `Siege-Gang Commander`'s "Sacrifice a Goblin". Land deviation is now **zero**.

### WHAT SIEGE-GANG COMMANDER REPLACED, AND WHY

`Grim Lavamancer` was in the first list as "repeatable damage from turn one." That's impossible under its own oracle: "{R}, **{T}**, Exile **two cards from your graveyard**" needs the creature not to be summoning-sick *and* two cards in a graveyard that, on turn 1, holds zero. Fuel count across the whole deck: **1 of 22** nonland cards puts a card in the graveyard other than by resolving. Realistic output is 1–2 activations a game.

`Siege-Gang Commander` does the same job properly: four bodies from one card (all red, all anthemed), plus "{1}{R}, Sacrifice a Goblin: This creature deals 2 damage to any target" fed by up to **12 Goblin bodies** across a game — 11 activations while keeping the engine, since the twelfth body is Siege-Gang itself.

### THE HONEST WEAKNESSES

Three curve WARN flags, all accepted: MV-2 at 18% against a 25% minimum, MV-4+ at 45% against 20%, and MV>5 at 14% against 10%. Red's cheap slots in this cube mostly fail their own counts — `Storm Entity` needs other spells cast that turn (only 4 of the other 21 cards cost 1), `Lightning Rift` needs cyclers (1 in the mainboard), `Grapeshot` needs a storm count above 1.

Card economy is the thinnest of the four decks: **0 of 22 net-positive, 1 of 22 self-replacing**. And after the repair, `Sulfuric Vortex` is the *only* permanent that deals damage with no board at all — `Siege-Gang Commander` doesn't substitute, because "Sacrifice a Goblin" is board-dependent by its own text.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (22 nonland):  1:4  2:4  3:4  4:3  5:4  6:3
  WARN  MV 2 share: share 18% below band minimum 25%
  WARN  MV 4+ share: share 45% above band maximum 20%
  WARN  Above thesis turn: share of nonland cards with MV > 5 is 14% (max 10%)
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 11 copies (effective 8.8: Dragon Whelp@0.4, Dragon Whelp@0.4, Avarax@0.5, Avarax@0.5) → p=0.95 (need ≥ 0.75)
  PASS  mana_sink: 7 copies (effective 4.8: Dragon Whelp@0.4, Dragon Whelp@0.4, Avarax@0.5, Avarax@0.5) → p=0.78 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 61%  T2 89%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Red's only sweeper in this pool is Slice and Dice ('deals 4 damage to each creature'), and it is held in the sideboard because it would kill 13 of this deck's own 15 creature copies. Maindeck the class is raced rather than answered, and this deck is unusually well suited to that: Sulfuric Vortex deals 2 per upkeep regardless of the board, Fireblast x2 needs no board at all ('You may sacrifice two Mountains rather than pay this spell's mana cost'), and Shivan Dragon and Dragon Whelp x2 fly over the ground entirely.
  OK        single_large_threat: Flametongue Kavu, Chain Lightning, Fireblast
  CONCEDED  noncreature_permanents: The cube's 5 artifact answers and 4 enchantment answers are all G/W/multicolour; mono-red has zero. A resolved noncreature permanent must be raced - which is what this deck does anyway, and the sideboard has no legal answer to add.
  CONCEDED  stack: Red has no counterspell in this pool. The only stack interaction available is Overmaster ('The next instant or sorcery spell you cast this turn can't be countered'), which protects exactly one spell and would cost both a card slot and one of the 5 rare/mythic slots that Gauntlet, Shivan Dragon, Grim Lavamancer, Sulfuric Vortex and Crawlspace already fill. The substitute is a clock fast enough that a counterspell trades down on tempo.
  CONCEDED  graveyard: Tormod's Crypt is the only graveyard hate card in the entire cube and it is held in the sideboard; maindecking a {0} artifact that does nothing against the majority of cube decks would cost a threat slot in a deck whose plan is to end the game on turn 5.
```

- Three curve WARN flags, all accepted with mechanism-grounded responses. None is a HARD gate.

- curve WARN 'MV 2 share 18% below band minimum 25%': mono-red's two-drops in this pool are Storm Entity, Subterranean Scout, Mogg War Marshal, Grapeshot, Lightning Rift and Lightning Reflexes. Three of the six fail their own counts in this list - Storm Entity ('+1/+1 counter for each OTHER spell cast this turn'; only 4 of the other 21 nonland cards cost 1 mana), Lightning Rift ('whenever a player cycles a card'; 1 cycler in the mainboard) and Grapeshot (storm count realistically 1, so 2 damage total). Lightning Reflexes is an Aura and a 2-for-1 against removal. The deck runs the two that function unconditionally, at 2 copies each; there is no third two-drop in the colour that is not worse than the four-drop it would replace.

- curve WARN 'MV 4+ share 45% above band maximum 20%': this is the honest shape of a colour whose only unbounded sink costs {4}{R}{R}. Note that the earlier version of this response discounted Fireblast x2 as 'effectively zero mana' - the Challenger showed that argument is a one-sided read of a two-sided card, since land_target has no term for the two Mountains it destroys, and the same reasoning was withdrawn from the land count. So the 10 MV-4+ cards are counted at face value here: Dragon Whelp x2, Flametongue Kavu, Avarax x2, Shivan Dragon, Gauntlet of Power, Siege-Gang Commander, Fireblast x2. The deviation is accepted, not explained away.

- curve WARN 'Above thesis turn: MV > 5 is 14% (max 10%)': the three cards are Shivan Dragon and Fireblast x2. Shivan Dragon at {4}{R}{R} is the thesis's named kill mechanism and the only unbounded per-mana pump in mono-red; removing it to satisfy the band would remove the deck's reason to exist. Fireblast is the deck's only reach that functions through a sweeper.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three unbounded sinks turn surplus lands into damage: Shivan Dragon ('{R}: +1/+0'), Dragon Whelp x2 ('{R}: +1/+0', to a safe cap of three per turn) and Dragon Engine x2 ('{2}: +1/+0'), plus Avarax x2 at half rate. Spark Spray cycles for {R}. Siege-Gang Commander's '{1}{R}, Sacrifice a Goblin: This creature deals 2 damage to any target' is fed by up to 12 Goblin bodies across a game (see count_dependent_verdicts), so it converts surplus mana into damage repeatedly. Fireblast is the exception that proves the rule - it converts two SURPLUS Mountains directly into 4 damage. |
| screw | mitigation | Three of the 22 nonland cards cost 1 (Gamble, Chain Lightning x2 - four copies across three names) and three cost 2 (Mogg War Marshal x2, Subterranean Scout x2 - four copies), so a two-land hand has eight castable copies. goldfish_sim reports 84% keepable and 88% for three lands by turn 3 over 1000 hands at 18 lands. Spark Spray's 'Cycling {R}' digs at the cheapest possible rate, and Gamble's 'Search your library for a card, put that card into your hand' can simply fetch a Mountain. |
| decapitation | mitigation | Shivan Dragon is a 1-of and is not the single point of failure. Dragon Whelp x2 is the same flying-pump effect on a cheaper body, Dragon Engine x2 is the same unbounded sink in colourless, and Avarax's 'search your library for a card named Avarax' means the first copy fetches the second. If Gauntlet is answered the 18 Mountains still pay for every activation at half rate. Damage that needs no creature on the battlefield: Sulfuric Vortex ('At the beginning of each player's upkeep, this enchantment deals 2 damage to that player'), Fireblast x2 (4 each, castable off two Mountains with an empty board) and Chain Lightning x2 (3 each, from hand). |
| gas-out | mitigation | Counted honestly: 'Cards: Net-Positive' = 0 of 22, 'Cards: Self-Replacing' = 1 of 22 (Spark Spray's 'Cycling {R}'), plus Avarax x2 which fetch each other and Gamble which converts any card into the specific card needed. This is the thinnest card economy of the four decks built, and the answer is that the deck does not need a full hand: Sulfuric Vortex deals 2 per upkeep from an empty hand and an empty board, Siege-Gang Commander arrives as four bodies from one card, and Shivan Dragon, Dragon Whelp and Dragon Engine turn topdecked Mountains into damage. |
| raced | accepted | Sulfuric Vortex reads 'deals 2 damage to THAT player' at each player's upkeep - it damages this deck as fast as the opponent, and Fireblast's alternative cost sacrifices two lands. Against a faster clock this deck can lose a race it accelerated. Mitigating means cutting Sulfuric Vortex, which after the Phase 9 repair is the ONLY permanent in the list that deals damage with no board at all (1 of 22 - Siege-Gang Commander does not substitute, because 'Sacrifice a Goblin' is board-dependent by its own oracle) and is the deck's only answer to the 9 lifegain cards elsewhere in the cube ('If a player would gain life, that player gains no life instead'). That trade would remove the deck's ability to win through a sweeper, which is the thing the chosen lens was selected to provide. Wall of Junk is the sideboard partial answer: a 0/7 Defender for {2} that returns to hand and blocks every combat. |
| disruption-fizzle | mitigation | The kill turn is a chain of {R} activations at instant speed in the damage step, not one spell, so a counterspell has nothing to counter. Removal in response to the attack loses the mana already spent - mono-red has no protection spell in this pool - so the answer is redundancy: two separate flying pump bodies (Shivan Dragon, Dragon Whelp x2), a colourless third sink (Dragon Engine x2), and 5 burn cards that deal their damage from the hand regardless of what is on the battlefield. Fireblast in particular resolves for zero mana, so it cannot be answered by tapping the deck out. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Siege-Gang Commander | 'When this creature enters, create three 1/1 red Goblin creature tokens // {1}{R}, Sacrifice a Goblin: This creature deals 2 damage to any target' is a genuine mana sink AND reach - but it costs one of only 5 rare/mythic slots, which Gauntlet, Shivan Dragon, Grim Lavamancer, Sulfuric Vortex and Crawlspace already fill. THE FIRST CARD TO TRY IF YOU WANT TO SWAP A RARE. |
| Pashalik Mons | 'Whenever Pashalik Mons or another Goblin you control dies, Pashalik Mons deals 1 damage to any target' - Goblin copies in this list are 4 of 23 nonland cards (Mogg War Marshal x2 plus its tokens, Subterranean Scout x2), so the death trigger fires perhaps twice a game. Rare slot. |
| Sneak Attack | '{R}: You may put a creature card from your hand onto the battlefield. That creature gains haste. Sacrifice the creature at the beginning of the next end step' - the biggest creature in this list is a 5/5 Shivan Dragon; cheating in a 5/5 for {R} and losing it is not worth a mythic slot when the deck can simply cast it. |
| Worldgorger Dragon | 'When this creature enters, exile all other permanents you control' - it exiles the 17 Mountains that Gauntlet of Power exists to double. Actively anti-synergistic with the locked pipeline. Mythic slot. |
| Triskelion | A {6} 4/4 that pings for 3 total; it competes with Shivan Dragon at the top of the curve and converts no surplus mana. Rare slot. |
| Gamble | 'Search your library for a card, put that card into your hand, discard a card at random' - it would find Gauntlet or Shivan Dragon, but the random discard can throw away the card it just fetched. Rare slot, and the risk is on the deck's two most important 1-ofs. |
| Overmaster | 'The next instant or sorcery spell you cast this turn can't be countered. Draw a card' protects exactly one spell; this deck's key permanents are creatures and an artifact, which it does not protect at all. Rare slot. |
| Storm Entity | 'This creature enters with a +1/+1 counter on it for each OTHER spell cast this turn' - only 4 of the other 22 nonland cards cost 1 mana, so on a realistic turn it is a 1/1 or 2/2 haste. Cut for Mogg War Marshal, which is unconditionally two bodies. |
| Grapeshot | 'Grapeshot deals 1 damage to any target. // Storm' - with 23 nonland cards and no rituals, the storm count on the turn it is cast is typically 1, i.e. 2 damage total. |
| Empty the Warrens | Same storm count as Grapeshot: 1 by the turn it is cast, so 4 Goblins for 4 mana. Slower than simply attacking. |
| Lightning Rift | 'Whenever a player cycles a card, you may pay {1}. If you do, this enchantment deals 2 damage to any target' - cycling cards in this mainboard number 1 of 23 (Spark Spray). The engine has no fuel. |
| Gempalm Incinerator | 'deal X damage to target creature, where X is the number of Goblins on the battlefield' - Goblins in this list are Mogg War Marshal x2, its tokens, and Subterranean Scout x2, so X is realistically 1-2. |
| Ridgetop Raptor | A 2/1 double striker for {4}; double strike doubles a pump, but red's only pump effects here are on OTHER creatures (Shivan Dragon, Dragon Whelp, Avarax all pump themselves), so the synergy never fires. |
| Valduk, Keeper of the Flame | 'for each Aura and Equipment attached to Valduk, create a 3/1 red Elemental' - this list runs 0 Auras and 0 Equipment out of 23 nonland cards. Dead text. |
| Undying Rage | 'Enchanted creature gets +2/+2 and can't block' - an Aura is a 2-for-1 against removal, and the pump is a one-time +2 where Shivan Dragon's '{R}:' scales with the mana the archetype is built to generate. |
| Lightning Reflexes | '+1/+0 and has first strike' for {1}{R} - the same Aura card-disadvantage problem for a smaller effect. |
| Ember Beast | 'This creature can't attack or block alone' - a 3/4 for {2}{R} whose restriction is exactly wrong for a deck that wants a single large evasive attacker. |
| Skirk Prospector | 'Sacrifice a Goblin: Add {R}' - it needs another Goblin already on the battlefield to accelerate at all, and this list runs Goblins as bodies to attack with, not as fuel. |
| Goblin Matron | 'search your library for a Goblin card' - Goblin cards in this list are Mogg War Marshal x2 and Subterranean Scout x2, i.e. it fetches a 1/1 or a 2/1. |
| Goblin Medics | 'Whenever this creature becomes tapped, it deals 1 damage to any target' - one damage per attack on a 1/1 body is a worse Grim Lavamancer with none of the reach. |
| Coal Stoker | 'When this creature enters, if you cast it from your hand, add {R}{R}{R}' is a 4-mana 3/3 that refunds 3 - real acceleration, but this deck's problem is not reaching 5 mana, it is having enough unbounded sinks to spend 10 on. |
| Mind Stone | '{T}: Add {C}' - 28 of 28 pips in this deck are {R}, and colourless mana cannot pay Shivan Dragon's '{R}:', Dragon Whelp's '{R}:' or Grim Lavamancer's '{R}'. |
| Juggernaut | A 5/3 for {4} that 'attacks each combat if able' - colourless, so Gauntlet's anthem never touches it, and the forced attack hands the opponent free blocks. |
| Mishra's Factory | Produces {C} against 28 red pips, and it is neither basic (no Gauntlet double) nor a Mountain (so Fireblast cannot sacrifice it). |
| Smoldering Crater | 'This land enters tapped' breaks a turn-2 curve, it forfeits the Gauntlet double, and it is not a Mountain so Fireblast's alternative cost cannot use it. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.36   Ramp cards: 1   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.81 adj [MV 3.36 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                                       cube_mainboard only - every card verified by exact name against working_pool.json
commons_uncommons_max_2                    PASS - highest count is 2
rares_mythics_max_1_each                   PASS
rares_mythics_max_5_total_MB_plus_SB       PASS at exactly 5/5 - all five are mainboard after the Phase 9 repair: Gauntlet of Power (mythic), Shivan Dragon (rare), Siege-Gang Commander (rare), Sulfuric Vortex (rare), Gamble (rare). The sideboard is entirely commons and uncommons. No headroom.
basics                                     Mountain x18 - format-supplied, exempt from copy limits
colour                                     core_colors ['R'], splash_colors [] - every nonland card returns a non-null effective_cost.best_mode(card, ['R'], []) in normal cast mode
```
