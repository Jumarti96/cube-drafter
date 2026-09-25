---
deck_name: "r-goblin-aggro"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "R"
format: "40-card"
built_at: "2026-08-18T22:56:14Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  16x Mountain                 
```

### CREATURES (18)

```
CMC  Card                       Qty   Color  Role                       Rar
  1  Phoenix Chick              x2    R      Threat                     U
  1  Shivan Devastator          x1    R      Threat                     M
  1  Viashino Branchrider       x2    R      Threat                     C
  2  Goblin Picker              x2    R      Threat                     C
  2  Radha's Firebrand          x1    R      Threat                     R
  2  Rundvelt Hordemaster       x1    R      Payoff                     R
  2  Sprouting Goblin           x2    R      Threat                     U
  2  Yavimaya Steelcrusher      x2    R      Threat                     C
  3  Flowstone Kavu             x2    R      Threat                     C
  3  Squee, Dubious Monarch     x1    R      Payoff                     R
  4  Defiler of Instinct        x1    R      Payoff                     R
  4  Dragon Whelp               x1    R      Threat                     U
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                       Qty   Color  Role                       Rar
  2  Lightning Strike           x2    R      Interaction                C
  3  Hurloon Battle Hymn        x2    R      Interaction                U
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty   Color  Role                       Rar
  1  Hammerhand                 x2    R      Interaction                C
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in
Flowstone Infusion         x2    R      [C] Interaction: Against X/1 and X/2 decks - 'Target creature gets +2/-2 until end of turn' for {R} is the cheapest instant-speed answer in the colour, and it doubles as a combat trick on our own attacker.
Smash to Dust              x2    R      [C] Hate: Against the 15-card artifact class (Vanquisher's Axe, Hero's Heirloom, Golden Argosy, Karn's Sylex, Weatherlight Compleated) and against go-wide token decks - mode 3 is 'deals 1 damage to each creature your opponents control'.
Thrill of Possibility      x2    R      [C] Infrastructure: Against control and grindy midrange, where the deck's own gas runs out first - 'discard a card, draw two cards' at instant speed converts a flooded or dead card into two live ones.
Dragon Whelp               x1    R      [U] Threat: The second copy comes in against the 51-card evasion class (20.7% of the cube) - a 2/3 flier that blocks their fliers and turns surplus mana into damage via '{R}: This creature gets +1/+0'.
Jaya's Firenado            x2    R      [C] Interaction: Against the pool's largest bodies, which 3 damage does not answer - 'deals 5 damage to target creature or planeswalker' kills Sheoldred, Tyrannical Pitlord, Silverback Elder, Mossbeard Ancient and every planeswalker in the cube.
Meria's Outrider           x1    R      [C] Interaction: Against decks whose whole clock is in the air - a 4/4 with Reach for {4}{R} walls anything the cube flies at us. Note its Domain trigger deals exactly 1 damage here (mono-red controls one basic land type); it is boarded for the body, not the trigger.
```

## ANALYSIS

### DECK IDENTITY

A mono-red aggro deck built on the fastest curve Dominaria United allows: seven cards at mana value one and ten two-drops, so Rundvelt Hordemaster lands on turn two onto a board that is already attacking. All six mono-red Goblins are played at full copies and the lord makes each of them a 3/3, while Phoenix Chick, Viashino Branchrider and Squee provide haste from the first turn onward. Defiler of Instinct converts the deck's own permanent density into free damage, and Shivan Devastator is the single card that turns surplus lands into a flying finisher. The mana is flawless - sixteen Mountains, zero taplands, zero colour risk - which is the whole reason this build exists next to the Rakdos one.

### WHY MONO-RED AT ALL, GIVEN IT PLAYS FEWER GOBLINS

This build is the one that gives something up on purpose. Dominaria United contains 6 Goblin cards; only 4 names are mono-red, so Rundvelt Hordemaster lords **5 other Goblin cards** here (Squee, Goblin Picker x2, Sprouting Goblin x2) instead of the 7 the Rakdos build gets. What it buys is a mana base with no compromise at all:

| Build | Lands | Taplands | Rare slots spent on mana | Colour gap |
|---|---|---|---|---|
| Mono-red | 16 Mountain | 0 | 0 of 5 | 0.0pp |
| Rakdos | 17 | 2 | 1 of 5 | 5.7 / 11.9pp |

Zero of the five rare/mythic slots go to the mana base, so **all five are spent on spells**: Rundvelt Hordemaster, Squee, Shivan Devastator, Radha's Firebrand, Defiler of Instinct.

### THE CURVE, STATED HONESTLY

The list has 7 cards at mana value 1. Only **4 of the 24 nonland cards are turn-1 creature deployments** — Phoenix Chick x2 and Viashino Branchrider x2. Hammerhand reads *"Enchant creature"* and does nothing in an opening hand with no body; Shivan Devastator is a printed 0/0 whose text is *"enters with X +1/+1 counters on it"*, so cast for one mana it is X=0 and dies to state-based action.

**Four is the pool ceiling.** Phoenix Chick and Viashino Branchrider are the only one-mana creatures in mono-red in this cube. The goldfish simulator reports an 82% turn-1 play rate because it counts all 7 mana-value-1 cards as plays.

### DEFILER OF INSTINCT IS THE REAL PAYOFF

Rundvelt Hordemaster is the archetype anchor, but Defiler of Instinct is the card that scales with the whole list:

> *"As an additional cost to cast red permanent spells, you may pay 2 life. Those spells cost {R} less to cast if you paid life this way. / Whenever you cast a red permanent spell, this creature deals 1 damage to any target."*

Red permanent spells in this deck: **20 of the 24 nonland cards (83%)** — 18 creatures plus Hammerhand x2. Both halves of the card fire off more than four fifths of the list. The cost reduction is what lets a five-land hand deploy two spells in a turn, and the ping is a slow but genuine second damage source that does not care about blockers.

### WHAT THIS DECK'S REACH ACTUALLY IS

Worth being precise about, because it is easy to get wrong: **only 3 of the 24 nonland cards can point damage at the opponent's face** — Lightning Strike x2 (*"deals 3 damage to any target"*) and Defiler of Instinct's per-spell ping. Hurloon Battle Hymn reads *"deals 4 damage to target creature or planeswalker"* and **cannot target a player**. It is removal, not reach.

This deck's win condition is **combat damage**. Burn is how it clears the blocker, not a second plan. Do not hold Hurloon Battle Hymn expecting to point it at a face.

### DEAD TEXT YOU SHOULD KNOW ABOUT

Two cards in this list carry abilities that are inert in mono-red, and both are included for the rest of the card:

| Card | Dead text | Why it is still in |
|---|---|---|
| Radha's Firebrand | Domain activation costs {5}{R} minus {1} per basic land type; mono-red has exactly 1 of 5, so it costs {4}{R} | A two-mana 3/1 whose attack trigger makes every 1- and 2-power blocker unable to block it |
| Sprouting Goblin | Kicker {G} land-fetch is unpayable with 0 green sources | It is 2 of the 5 other-Goblin bodies Hordemaster lords, and *"{R}, {T}, Sacrifice a land: Draw a card"* is live |

The same caveat applies to the automated mana audit: it credits this deck 2 "acceleration" cards from Sprouting Goblin's kicked land-fetch. That credit is **unearned**, and the land math in this file is recomputed at zero acceleration (which returns the same answer, 16).

### THE ACCEPTED WEAKNESS

There is not a single card-advantage spell in the 24. Goblin Picker loots (card-neutral), Sprouting Goblin trades a land for a card (card-neutral, resource-negative), and nothing draws. That is accepted, not solved: maindecking Thrill of Possibility x2 and Keldon Flamesage would cost three body slots out of the 18 the shape judge selected this build for, turning the fastest curve in the pool into a worse version of the Rakdos deck. **Thrill of Possibility x2 sits in the sideboard** for the matchups where card flow actually decides the game — and Jaya, Fiery Negotiator is the rare-for-rare swap (against Radha's Firebrand) if you want to rebuild this as a slower deck.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (24 nonland):  1:7  2:10  3:5  4:2
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.6: Shivan Devastator@0.6) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 14 copies (effective 13.6: Hammerhand@0.8, Hammerhand@0.8) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 82%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-red's only sweeper-shaped card in this pool is Smash to Dust's third mode ('deals 1 damage to each creature your opponents control'), which is a sideboard card because its other two modes are dead game one. Maindeck, the deck answers width by racing: 7 one-drops and 10 two-drops put the goldfish at turn 5, ahead of when a wide board assembles.
  CONCEDED  single_large_threat: Every removal spell mono-red has in this pool is damage-based and caps at 4 (Hurloon Battle Hymn); a creature with toughness 5 or more - Sheoldred (4/5), Tyrannical Pitlord (6/6), Mossbeard Ancient (7/7), Silverback Elder (5/7) - cannot be destroyed maindeck. Mitigating would mean maindecking Jaya's Firenado x2 at {4}{R}, which is a five-mana sorcery in a deck whose whole thesis is a turn-5 clock off a seven-one-drop curve. The plan is instead to attack past the body in the air (Phoenix Chick x2, Dragon Whelp, Shivan Devastator) or to have already dealt lethal. Jaya's Firenado x2 ('deals 5 damage to target creature or planeswalker') is the post-board answer.
  OK        noncreature_permanents: Yavimaya Steelcrusher
  CONCEDED  stack: There is no counterspell in red in this pool, and unlike the Rakdos build this deck has no discard either. The substitute is speed: the deck is trying to end the game before a held-up answer matters.
  CONCEDED  graveyard: The dossier's structural census reports 0 graveyard-hate cards in the entire cube, so no build can cover this class. The deck instead uses graveyards itself (Phoenix Chick's {R}{R} return, Squee's {3}{R} graveyard cast).
```

_No WARN-tier structural flags were raised; there is nothing to respond to._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Shivan Devastator ('{X}{R} ... enters with X +1/+1 counters on it', flying and haste) is an uncapped mana sink that turns every land past the fourth into damage in the air. Behind it, Goblin Picker x2 ('{R}, {T}, Discard a card: Draw a card') swaps a surplus land for a new card, Sprouting Goblin x2 ('{R}, {T}, Sacrifice a land: Draw a card') converts the land itself into a card, Viashino Branchrider x2 ('{2}{R}: This creature gets +2/+0') and Dragon Whelp ('{R}: This creature gets +1/+0') are per-turn sinks, and Phoenix Chick's {R}{R} return is a mana-only rebuy. |
| screw | mitigation | This is the deck's strongest axis. 7 of the 24 nonland cards cost one mana and 10 cost two, so a two-land hand operates fully through turn three; the goldfish simulation reports 85% keepable, an 82% chance of a turn-1 play and 99% by turn 2. There are no double-coloured costs below mana value 4 (only Defiler of Instinct and Dragon Whelp, both {2}{R}{R}) and no colour risk at all - all 16 lands are Mountains. Caveat carried from the curve verdict: only 4 of those 7 one-mana cards are creatures. |
| decapitation | mitigation | Rundvelt Hordemaster is a 1/1 and will be killed on sight; the deck is built so that this is a tempo loss, not a game loss. Removing it costs the other 5 Goblins +1/+1 but leaves 18 creature cards, including three threats that answer their own removal (Phoenix Chick's 'return this card from your graveyard to the battlefield tapped and attacking', Squee's '{3}{R} ... rather than paying its mana cost', and Shivan Devastator, which can simply be recast for a larger X). Defiler of Instinct is an independent damage engine that has nothing to do with Goblins and fires off 20 of the 24 nonland cards. |
| gas-out | accepted | This is the build's real weakness and it is accepted, not solved. Net-positive card count in this list is 0: Goblin Picker loots (card-neutral), Sprouting Goblin trades a land for a card (card-neutral, resource-negative), and there is not a single draw spell in the 24. Mitigating would mean maindecking Thrill of Possibility x2 and Keldon Flamesage, which costs three body slots out of the 18 that the shape judge selected this build for - it would convert the fastest curve in the pool into a worse version of the Rakdos deck, which already does card flow better via Braids and Garna. The identity cost is the entire reason to pick mono-red over Rakdos. The partial hedges that do not cost a slot: Phoenix Chick x2 and Squee rebuy themselves from the graveyard for mana only. Thrill of Possibility x2 is in the sideboard for the matchups where this actually decides the game. |
| raced | mitigation | The deck is the fast side of most races: the goldfish simulation reports a turn-1 play in 82% of hands and 99% by turn 2, with a goldfish turn of 5. In the air it has 4 attackers (Phoenix Chick x2, Dragon Whelp, Shivan Devastator) but - stated precisely, correcting an earlier overclaim - only 2 air BLOCKERS, because Phoenix Chick's oracle reads 'This creature can't block'; the blockers are Dragon Whelp (2/3 flying) and Shivan Devastator when cast for X of 1 or more. On the ground it has 4 removal spells (Lightning Strike x2 'deals 3 damage to any target', Hurloon Battle Hymn x2 'deals 4 damage to target creature or planeswalker') that can be aimed at the opposing clock; note that only Lightning Strike can be redirected to the opponent's face. Board plan against the cube's 51-card evasion class (20.7%): Dragon Whelp (2nd copy) and Meria's Outrider, the only red Reach creature in the pool. |
| disruption-fizzle | mitigation | There is no critical turn to disrupt - the deck has no combo and no single card it must resolve. The one genuine two-for-one risk is Hammerhand, an Aura: removing the enchanted creature in response leaves the Aura with no legal target and it never resolves. That is why Hammerhand is capped at 2 copies and why its own enters-trigger ('target creature can't block this turn') targets independently of the enchant target, so the blocker-removal half can be pointed at the opponent's creature even in the turn it is cast. Every other card in the list is a standalone body or a damage spell. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Splatter Goblin | OFF-COLOUR - a Goblin, but {1}{B}. Cutting it is the specific price mono-red pays: Hordemaster lords 5 other Goblins here instead of 7. It is in the Rakdos build. |
| Rulik Mons, Warren Chief | OFF-COLOUR - a Goblin, but {1}{R}{G}{G}. It is the anchor of the Gruul build. |
| Jaya, Fiery Negotiator | RARE/MYTHIC CUT (5-card cap) - '+1: Create a 1/1 red Monk creature token with prowess' plus '-1: Exile the top two cards of your library... You may play that card this turn' is the best card-advantage engine mono-red has, and it directly answers this build's accepted gas-out weakness. It lost the slot because {2}{R}{R} is a four-mana do-nothing turn in a deck whose thesis turn is 5, and because the Monk tokens are not Goblins so Hordemaster does not lord them. This is the FIRST card to try if you want to slow the deck down one notch. |
| Keldon Flamesage | RARE/MYTHIC CUT (5-card cap) - 'Whenever this creature attacks, look at the top X cards of your library, where X is this creature's power... You may cast the exiled card without paying its mana cost' is free card advantage on an attacking body. It only finds instants and sorceries, and this list runs 4 of 24 nonland cards that qualify (17%), so it would hit on well under a fifth of attacks. |
| The Elder Dragon War | RARE/MYTHIC CUT - chapter I is 'deals 2 damage to each creature and each opponent', which is symmetric and kills this deck's own Goblin Pickers, Sprouting Goblins, Viashino Branchriders, Phoenix Chicks and Squee tokens. The shape judge flagged it for exactly this. The 4/4 Dragon arrives at chapter III, past the goldfish turn. |
| Ragefire Hellkite | RARE/MYTHIC CUT - a 5/3 flier, but {4}{R}{R} is two mana past this build's top end, and its double-strike clause requires sacrificing another creature, which a deck with no sacrifice outlet pays full card price for. |
| Chaotic Transformation | RARE/MYTHIC CUT - a six-mana catch-all exile that replaces what it removes; far too slow for a turn-5 clock. |
| Electrostatic Infantry | STRONG UNCOMMON, ONE TIER BELOW - 'Whenever you cast an instant or sorcery spell, put a +1/+1 counter on this creature' pays off 4 of the 24 nonland cards in this list (17%). A 1/2 body whose only text fires on under a fifth of the deck loses the two-drop slot to a Goblin. It is the payoff for a spellslinger build, not this one. |
| Keldon Strike Team | The shape judge flagged its assigned role: 'As long as this creature entered this turn, creatures you control have haste' is a one-shot turn-of-entry effect, not a standing anthem. With its {1}{W} kicker unpayable in mono-red it is a 3/1 for three with no Goblin type. Flowstone Kavu took the slot. |
| Balduvian Berserker | 'When this creature dies, it deals damage equal to its power to any target' with a printed power of 1 - a death payoff that delivers 1 damage, and this deck has no sacrifice outlet to choose when it dies. |
| Coalition Warbrute | A 3/4 trample enlist body for {3}{R}, but four mana for a creature with no evasion, no haste and no Goblin type does not fit a seven-one-drop curve. |
| Twinferno | STRONG UNCOMMON - 'Target creature you control gains double strike until end of turn' is a real finisher on a pumped attacker, but it is a pure trick: it does nothing without a board, and the explosive build would rather have a body. |
| Furious Bellow | SIDEBOARD CONSIDERATION - '+3/+0 and first strike, Scry 1' wins any combat against the cube's 4-toughness ground creatures for two mana. Cut for Flowstone Infusion, which kills a creature outright rather than only winning one combat. |
| Hurler Cyclops | SIDEBOARD CONSIDERATION - a 5/4 for {3}{R}{R} with '{1}, Sacrifice another creature: This creature deals 1 damage to any target'. Board it in for stalled-ground matchups where the deck needs to convert a clogged board into reach; five mana is otherwise off-plan. |
| Molten Monstrosity | 'This spell costs {X} less to cast, where X is the greatest power among creatures you control' - the greatest power in this list is 4 (Defiler of Instinct), so it costs {3}{R} at best and only once a 4-power creature has already survived. A 5/5 vanilla trample at that price is worse than the cards already in the slot. |
| Meria's Outrider | SIDEBOARD ONLY - its Domain trigger deals damage equal to basic land types among lands you control, which is exactly 1 in a mono-red deck. It is boarded purely as a 4/4 Reach wall against the cube's 51-card evasion class, never for the trigger. |
| Smash to Dust | SIDEBOARD ONLY - two of its three modes (destroy an artifact, destroy a creature with defender) are dead against most game-one opponents. It is the deck's artifact answer and its anti-token sweep, boarded not maindecked. |
| Crystal Grotto / Thran Portal / Plaza of Heroes | MANA - every colourless-producing land in the pool is strictly worse than a Mountain in a deck with 26 red pips and zero off-colour cards. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.08   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.89 adj [MV 2.08 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                              cube_mainboard, dominaria-united---main-set
commons_uncommons_max_2:           PASS - no name exceeds 2 copies across mainboard + sideboard; Dragon Whelp is 1 MB + 1 SB = 2.
rares_mythics_max_1_each:          PASS - each at 1 copy.
rares_mythics_max_5_total:         PASS - 5 of 5 used (Rundvelt Hordemaster, Squee Dubious Monarch, Shivan Devastator, Radha's Firebrand, Defiler of Instinct). Zero rare slots spent on the mana base.
basics_unlimited:                  Mountain 16 - format-supplied, rarity-exempt.
colour_legality:                   All 21 distinct nonland cards return a usable mode within core_colors [R] via effective_cost.best_mode; every off-colour kicker in the list (Sprouting Goblin {G}, Viashino Branchrider {2}{G}, Hurloon Battle Hymn {W}) is declined, which is a legal cast mode.
```
