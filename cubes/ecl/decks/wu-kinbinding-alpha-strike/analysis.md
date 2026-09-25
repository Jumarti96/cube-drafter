---
deck_name: "wu-kinbinding-alpha-strike"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WU"
format: "40-card"
built_at: "2026-08-11T04:37:52Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x5   Island                     Basic
  x7   Plains                     Basic
  x2   Evolving Wilds             Fetches a basic tapped
  x1   Hallowed Fountain          The pool's only untapped-capable WU dual
  x2   Idyllic Beachfront         WU dual, enters tapped
```

### CREATURES (10)

```
CMC  Card                              Qty   Color  Role                                            Rar
2    Deepchannel Duelist               x2    WU     Merfolk lord + end-step untap                   U
2    Glamer Gifter                     x2    U      Flash flier: raises X on their turn, sets a token to base 4/4  U
2    Silvergill Mentor                 x2    U      Two bodies for two mana                         U
4    Pestered Wellguard                x2    U      A flying Faerie each time it taps               U
5    Merrow Skyswimmer                 x2    WU     Convoke flier + token; vigilance                C
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                              Qty   Color  Role                                            Rar
2    Personify                         x2    W      Instant: two creatures enter (+2 to X); blanks removal  U
3    Protective Response               x2    W      Convoke instant removal                         U
4    Morningtide's Light               x1    W      Clears every blocker for one attack and prevents the crack-back  M
```

### OTHER SPELLS (8)

```
CMC  Card                              Qty   Color  Role                                            Rar
1    Springleaf Drum                   x1    C      Taps a token for mana; Stalactite Dagger gives it a turn-2 target  U
2    Stalactite Dagger                 x2    C      Makes a changeling token; equipped creature is all creature types  C
3    Ajani, Outland Chaperone          x1    W      A body every turn; -2 kills a tapped creature   M
3    Clachan Festival                  x2    W      Two tokens on entry + a repeatable token sink   U
5    Kinbinding                        x1    W      The kill: self-fuelling +X/+X anthem            R
5    Lofty Dreams                      x1    U      Convoke aura; draws a card and grants flying    U
```

## SIDEBOARD (10)

```
Card                        Qty   Color  Role / When to board in                                                                 Rar
Crib Swap                   x2    W      Unconditional exile removal — vs a threat the maindeck cannot profitably block or race  U
Eclipsed Merrow             x2    WU     A body that also digs 4 for a Merfolk, Plains or Island — vs grindy decks, over Clachan Festival — this is the deck's only card selection  U
Pyrrhic Strike              x2    W      Artifact/enchantment/MV3+ creature removal — vs the cube's 11 artifacts + 21 enchantments, or a large blocker  U
Sygg's Command              x1    WU     Copies a Merfolk token + a tempo or draw mode — vs grindy decks where the maindeck's zero card advantage is exposed  R
Liminal Hold                x1    W      Exiles any nonland permanent an opponent controls — vs a noncreature permanent, the class the maindeck concedes  C
Rooftop Percher             x2    C      Graveyard hate on a 3/3 changeling flier — vs the cube's 39-card graveyard theme, its largest at 15% density  C
```

## ANALYSIS

### DECK IDENTITY

A W/U token-swarm aggro deck that converts one turn's worth of bodies into lethal. Kinbinding reads 'Creatures you control get +X/+X, where X is the number of creatures that entered the battlefield under your control this turn' and 'At the beginning of combat on your turn, create a 1/1 green and white Kithkin creature token' — the second clause guarantees X is at least 1 in every one of my combats with no other cards in play, and 14 of 23 nonland cards put at least one more body onto the battlefield. The load-bearing rules fact is that convoke is a COST rather than an activated ability, so summoning-sick tokens created this turn are legal convoke fodder — the deck convokes with the bodies that cannot attack and attacks with the ones that can, which is why the tap-vs-attack tension that constrains a tap-trigger build barely exists here. Because a 1/1 swarm is answered by blockers rather than by removal, the deck carries Morningtide's Light to exile every blocker for exactly one attack, and points the anthem at evasion where it can.

### THE ONE RULE THAT MAKES THIS DECK WORK

**Convoke is a cost, not an activated ability.** Summoning sickness stops a creature from attacking and from using abilities with the tap symbol; it does not stop a creature from being tapped to pay a cost. So every token created this turn — Kinbinding's beginning-of-combat Kithkin, Clachan Festival's two, Ajani's one, Personify's Shapeshifter, Stalactite Dagger's changeling — is legal convoke fodder **on the turn it is made**, and it was never going to attack anyway.

That is why the tap-vs-attack tension which constrains the tap-trigger build barely exists here. This deck convokes with the bodies that cannot attack and attacks with the ones that can.

### KINBINDING IS NOT A BUILD-AROUND — IT BUILDS AROUND ITSELF

*"Creatures you control get +X/+X, where X is the number of creatures that entered the battlefield under your control this turn"* would be a fragile card on its own. The second line fixes it: *"At the beginning of combat on your turn, create a 1/1 green and white Kithkin creature token."* X is **at least 1 in every one of your combats with no other cards in play**, and the token that sets X is created before damage. From there, 14 of 23 nonland cards put at least one more body onto the battlefield.

| Cards that raise X mid-combat | Timing | X added |
|---|---|---|
| Kinbinding itself | beginning of combat | +1 |
| Personify | instant | +2 |
| Glamer Gifter | flash | +1 |
| Clachan Festival activation | {4}{W}, any time | +1 |

Personify is the standout: for two mana at instant speed it exiles and returns one of your own creatures *and* makes a Shapeshifter, so it adds **two** to X after blockers are declared, and in the same motion it blanks a removal spell aimed at the creature it exiles.

### WHERE THE GRILL CAUGHT ME

The Challenger found an oracle contradiction inside my own reasoning, and it is worth stating plainly rather than burying:

> I had written that against a fast deck, "Kinbinding's anthem wins combat rather than avoiding it: a board of 1/1s that all become 3/3s blocks profitably."

That is false. X counts creatures that entered **this turn**, and the token clause fires only *"At the beginning of combat on your turn."* On the opponent's turn, X is 0 and my blockers are 1/1s. The fix is Glamer Gifter — a **flash** creature, so it enters on their turn (X becomes at least 1) and its ETB sets a token to *base power and toughness 4/4*, which is a real blocker rather than a wishful one.

Two smaller corrections from the same pass: I had claimed the pool contains no white sweeper, when **Winnowing** is exactly that (it is still not in the deck, but now for the correct reason — it would sacrifice my own Kithkin and Faerie tokens); and I had written that Kinbinding's {W}{W} was convoke-payable, when Kinbinding has no convoke at all.

### THE THESIS TURN MOVED FROM 5 TO 6, AND THAT IS THE HONEST NUMBER

Kinbinding costs {3}{W}{W}. Cast it on five lands and you are tapped out, so its own combat token is the only creature entering that turn: **X = 1**, a team +1/+1. A large X needs Kinbinding *already* on the battlefield. The real sequence is turn 5 Kinbinding, turn 6 dump two or three bodies and swing with a +3/+3-or-better team. Rather than keep a turn-5 claim the curve does not support, the thesis turn was revised to 6 and the structural gate re-run against it.

### WHAT THIS DECK GIVES UP

Net-positive card draw in the mainboard: **0 of 23**. Lofty Dreams replaces itself and nothing else refuels. That is a deliberate trade — every slot that draws a card is a slot that does not make a creature enter, and X is a count of creatures entering. The substitute is permanent-based: Clachan Festival, Ajani and Kinbinding each manufacture a body from a permanent that an empty hand does not affect. Against grindy decks, Eclipsed Merrow ×2 comes in over Clachan Festival — a body that also digs four cards deep and hits on 20 of the 40 mainboard cards.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:1  2:10  3:5  4:3  5:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 11 copies (effective 10.5: Ajani, Outland Chaperone@0.9, Deepchannel Duelist@0.9, Deepchannel Duelist@0.9, Morningtide's Light@0.8) → p=0.98 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.7: Silvergill Mentor@0.85, Silvergill Mentor@0.85) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 20%  T2 92%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Morningtide's Light, Protective Response
  OK        single_large_threat: Protective Response, Ajani, Outland Chaperone, Morningtide's Light
  CONCEDED  noncreature_permanents: Zero mainboard answers to a noncreature permanent. Every W/U option in the pool (Temporal Cleansing, Disruptor of Currents, Wanderwine Farewell) costs 4-7 printed mana and none makes a creature enter, so each would both raise the land target and subtract from Kinbinding's X. Liminal Hold x1 ('exile up to one target nonland permanent an opponent controls') is in the sideboard for the matchups where it matters.
  CONCEDED  stack: No counterspell in either board. An aggro deck that taps out every turn to deploy bodies cannot hold {U} up, and the sideboard slot that would hold Spell Snare is spent on Eclipsed Merrow x2, which answers the card-economy hole the grill identified as the more likely way this deck loses.
  CONCEDED  graveyard: No mainboard graveyard answer; Rooftop Percher x2 is in the sideboard against the cube's 39-card graveyard theme, its largest at 15% density.
```

- Threats/Payoffs 60.9% vs a 45-55% band: accepted on the grounds all three sketchers gave and the judge credited — a body is the anthem's scaling variable and the convoke mana at once. The overshoot fell from 73.9% to 60.9% during the grill as removal and card selection were added.

- Engine & Infrastructure 26.1% vs a 0-10% band: accepted, with the honest note that 'engine' is the wrong label for these four cards. Stalactite Dagger makes a body and fixes an anthem's coverage, Merrow Skyswimmer is a convoke flier with a token attached, and Lofty Dreams replaces itself — none is a slot that fails to advance the clock, which is the situation the band is written for.

- Interaction returned to band (13.0%) during the grill via Morningtide's Light, which was added to fix wide-board coverage and fixed the proportional row as a side effect.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two repeatable land-to-body sinks: Clachan Festival's '{4}{W}: Create a 1/1 green and white Kithkin creature token' (no sorcery-speed restriction, so it can be activated on either turn) and Ajani's '+1: Create a 1/1 green and white Kithkin creature token' for free every turn. Each activation is another creature entering, which is another point of Kinbinding's X. Lofty Dreams replaces itself on entry. |
| screw | mitigation | 11 of 23 nonland cards cost 2 or less. Hallowed Fountain is in the list precisely so a two-land hand is more often a functional one — it is the pool's only untapped-capable WU dual. Convoke lets Merrow Skyswimmer and Lofty Dreams (both printed MV 5) be cast off two lands and a few tokens. Springleaf Drum x1 accelerates from turn 3 onward — honestly stated: the deck has no 1-MV creature, so a turn-1 Drum has nothing to tap until a body lands, which Stalactite Dagger at MV 2 now provides. The Phase 6b goldfish simulation measured 85% keepable hands and 88% on 3 lands by turn 3. |
| decapitation | mitigation | Kinbinding is a singleton and cannot be a playset under the 1-copy rare cap, so the deck is built not to need it: Ajani produces a body every turn independently, Clachan Festival x2 does the same from an enchantment, and the damage does not require the anthem — 4 of 10 creature cards fly, Pestered Wellguard adds evasive bodies on its own, and Morningtide's Light converts any board into unblocked damage for a turn. Losing Kinbinding lowers the ceiling; it does not remove the win condition. |
| gas-out | accepted | Net-positive draw is 0 of 23 mainboard cards; Lofty Dreams x1 only replaces itself. The grill defeated my first justification for this — I had claimed any fix must cost a slot that makes a creature enter, which is false, because Eclipsed Merrow is both a creature and card selection. The real reason it is in the sideboard rather than the mainboard is narrower: against a turn-6 clock, a 3-mana 2/3 that draws no cards is worse than a token-maker, since X counts bodies and not cards. Against the grindy decks where card economy actually decides the game, Eclipsed Merrow x2 comes in over Clachan Festival. The mainboard's substitute for card advantage is permanent-based recursion — Clachan Festival x2, Ajani and Kinbinding each manufacture a body per turn from permanents an empty hand does not affect. |
| raced | mitigation | Stated correctly after the grill overturned my first answer. Kinbinding gives NO defensive pump: X counts creatures that entered this turn and its token clause fires only 'At the beginning of combat on your turn', so on the opponent's turn X is 0. The mitigation is instant-speed instead. Glamer Gifter x2 ('Flash // Flying // When this creature enters, choose up to one other target creature. Until end of turn, that creature has base power and toughness 4/4 and gains all creature types') both raises X on their turn and turns a 1/1 token into a base 4/4 blocker. Personify x2 adds two creatures at instant speed. Protective Response x2 destroys an attacking creature for convoke. Ajani's '-2: Ajani deals 4 damage to target tapped creature' answers an attacker after it has tapped. |
| disruption-fizzle | mitigation | Personify x2 is the answer on the critical turn: at instant speed for two mana it reads 'Exile target creature you control, then return that card to the battlefield under its owner's control' — blanking a targeted removal spell in response — while simultaneously adding TWO creatures entering this turn to Kinbinding's X. The plan is also distributed rather than single-turn: Kinbinding creates a token every combat, so a fizzled alpha strike reloads for the next one, and the convoke costs paid in summoning-sick tokens cost nothing that could have attacked. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Tributary Vaulter | Cut during the grill. 'Whenever this creature becomes tapped, another target Merfolk you control gets +2/+0' — of the token types this deck makes, the Kithkin (Clachan Festival, Kinbinding, Ajani) and Faerie (Pestered Wellguard) tokens are not Merfolk, so its payoff half misfires against the deck's most numerous bodies. The flying half alone did not justify {2}{W}. |
| Flock Impostor | Cut during the grill. 'return up to one other target creature you control to its owner's hand' rebuys an ETB, but only 4 of the creature copies have an ETB worth rebuying and both cost mana to replay — and on the alpha-strike turn the bounce REMOVES a body, which is a direct subtraction from Kinbinding's X. |
| Kinsbaile Aspirant | Rejected by the shape judge. 'Whenever another creature you control enters, this creature gets +1/+1 until end of turn' pumps only ITSELF — it converts the flood into damage on one body, not across the swarm, which is precisely what Kinbinding already does better. Its 'behold a Kithkin or pay {2}' cost also undercuts a turn-1 play. |
| Goldmeadow Nomad | Rejected by the shape judge as a post-sweeper engine. '{W}, EXILE this card from your graveyard: Create a 1/1 green and white Kithkin creature token. Activate only as a sorcery' is a single one-shot conversion, not repeatable, and cannot respond to anything. Clachan Festival and Kinbinding are enchantments and rebuild better. |
| Winnowing | A white convoke sweeper and a genuine candidate, declined on two counts: it is a rare against a budget already at 5/5, and its 'each player sacrifices all other creatures they control that don't share a creature type with the chosen creature' would sacrifice this deck's own Kithkin and Faerie tokens, which are the majority of its board. |
| Harmonized Crescendo | The obvious fix for this deck's 0-of-23 net-positive draw, declined because it is a rare against a 5/5 budget already spent on Kinbinding, Ajani, Morningtide's Light, Hallowed Fountain and Sygg's Command — and at {4}{U}{U} it competes with the turn the anthem wants to resolve. |
| Kinscaer Sentry | 'Whenever this creature attacks, you may put a creature card with mana value X or less from your hand onto the battlefield tapped and attacking' would put a creature onto the battlefield DURING the alpha strike, adding to X across the whole team. Declined only because it is a rare and the budget is at 5/5; the first card to try if a rare slot is freed. |
| Champions of the Shoal | Cut from the sideboard during the grill as a redundant rare: its 'tap up to one target creature and put a stun counter on it' overlaps Sygg's Command's fourth mode, and its 'behold a Merfolk and exile it' cost removes a body from a deck whose kill is a count of bodies. |
| Spell Snare | Cut from the sideboard for Eclipsed Merrow. The stack is a real class this deck concedes, but a deck that taps out every turn to deploy bodies rarely has {U} available, and card economy is the more likely way this deck actually loses. |
| Wanderbrine Trapper | '{1}, {T}, Tap another untapped creature you control: Tap target creature an opponent controls' converts summoning-sick tokens into blocker removal, and it is the pool's only 1-MV W/U creature. Left out because it costs two of my own untapped bodies to subtract one of theirs, and Morningtide's Light answers the whole blocker problem in one card. |
| Encumbered Reejerey | A 5/4 for {1}{W} that sheds a -1/-1 counter on every tap would grow fast in a deck that taps its own creatures. Left out because it makes no creature enter, so it contributes nothing to Kinbinding's X — it is the right card for the tap-trigger build, not this one. |
| Timid Shieldbearer | '{4}{W}: Creatures you control get +1/+1 until end of turn' is a second anthem, but at {4}{W} per activation it competes with deploying bodies on exactly the turns X should be growing, and it pumps without adding to X. |
| Mirrormind Crown | 'the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature' turns Kinbinding's combat token into a copy of the best creature. A real engine, but {4} plus {2} to equip is six mana before it does anything — far outside a turn-6 clock, and a rare against a full budget. |
| Gallant Fowlknight | 'When this creature enters, creatures you control get +1/+0 until end of turn' is an unconditional team pump plus its own +1 to X. A close call against the cards kept; it lost the slot to Morningtide's Light, which answers blockers outright rather than pushing 1 extra damage through them. |
| Thoughtweft Imbuer | 'Whenever a creature you control attacks alone, it gets +X/+X' — attacking alone is the exact opposite of this deck's plan. |
| Champion of the Clachan | 'Other Kithkin you control get +1/+1' would pump the Kithkin tokens, but its 'behold a Kithkin and exile it' cost removes one of those same tokens, and it is a rare against a full budget. |
| Omni-Changeling | Convoke and changeling look on-theme, but 'You may have this creature enter as a copy of any creature on the battlefield' is a 0/0 when there is nothing worth copying, and this deck's best creatures are 2/2s. |
| Sun-Dappled Celebrant | A convoke 5/6 with vigilance is a fine body, but it makes no token and adds only itself to Kinbinding's X — one body for six printed mana in a deck that buys bodies two at a time. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.45 adj [MV 2.96 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  43.5%  prod  47.1%  gap  -3.6pp  [OK]
  W  demand  56.5%  prod  58.8%  gap  -2.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  base: cube_mainboard only — every card verified by exact name against the working pool
  commons_uncommons_max_2: PASS — no common or uncommon exceeds 2 copies
  rares_mythics_max_1_each: PASS — all 5 rare/mythic cards are singletons
  rares_mythics_max_5_total: PASS — exactly 5/5: Ajani Outland Chaperone (M), Morningtide's Light (M), Kinbinding (R), Hallowed Fountain (R) in the mainboard + Sygg's Command (R) in the sideboard
  basics_unlimited: PASS — Plains x7, Island x5 are format-supplied and exempt
  colour_legality: PASS — every nonland card usable in W/U via effective_cost.best_mode. Kithkin tokens are green-and-white and Faerie tokens are blue-and-black, but a token's colour is not a deckbuilding constraint.
  splash: PASS — splash_colors empty; zero off-core nonland cards
```
