---
deck_name: "wb-orzhov-superfriends-control"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-20T16:19:27Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x7  Plains          basic
  x7  Swamp           basic
  x2  Crystal Grotto  untapped; scry 1 on ETB; {1},{T}: any colour
  x2  Sunlit Marsh    WB dual, enters tapped (the only tapped lands in the deck)
```

### CREATURES (11)

```
CMC  Card                       Qty  Color  Role                                  Rar
  1  Clockwork Drawbridge       x1   W      T1 defender + repeatable tap          C
  1  Walking Bulwark            x2   C      Defender; walls attack for toughness  U
  2  Blight Pile                x2   B      Wincon: drains X = defenders          U
  3  Gibbering Barricade        x2   B      Defender 2/4 + repeatable draw        C
  4  Serra Paragon              x1   W      Rebuys Liliana from graveyard         M
  4  Sheoldred, the Apocalypse  x1   B      Finisher: drain on draws              M
  4  Wingmantle Chaplain        x2   W      Defender to flier converter           U
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                  Qty  Color  Role                         Rar
  1  Cut Down              x2   B      Removal, 1 mana              U
  2  Destroy Evil          x1   W      Big creature or enchantment  C
  4  Extinguish the Light  x1   B      Creature or planeswalker     C
```

### OTHER SPELLS (7)

```
CMC  Card                       Qty  Color  Role                         Rar
  3  Citizen's Arrest           x2   W      Exile creature or walker     C
  3  Liliana of the Veil        x1   B      Walker: edict + discard      M
  4  Karn, Living Legacy        x1   C      Walker: dig + Powerstones    M
  4  Prayer of Binding          x2   W      Flash, any nonland perm      U
  5  Urza Assembles the Titans  x1   W      Keystone: dig/deploy/double  R
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in      Rar
Battlefly Swarm          x2   B      vs fliers (51 cards)         C
Runic Shot               x1   W      vs decks that must attack    U
Destroy Evil             x1   W      vs enchantments (18 cards)   C
Knight of Dusk's Shadow  x2   B      vs lifegain (22 cards)       U
Phyrexian Missionary     x1   W      Recovers MV-4 creatures      U
Tribute to Urborg        x1   B      vs fast aggro, instant       C
Griffin Protector        x2   W      vs fliers; grows off tokens  C
```

## ANALYSIS

### DECK IDENTITY

A two-colour Orzhov control deck that solves the Superfriends problem sideways. The 5-rare/mythic cap allows only two planeswalkers here, so instead of chasing a third the deck buys REDUNDANCY: Serra Paragon rebuys Liliana of the Veil from the graveyard ('cast a permanent spell with mana value 3 or less from your graveyard'), which is the only way in this pool to have a walker answered and get it back. It stabilises behind the deepest removal suite the cube offers in two colours, then wins without ever attacking: nine creatures with defender wall off the ground while Blight Pile drains for X equal to that defender count, Wingmantle Chaplain converts the same wall into a flying board, and Sheoldred, the Apocalypse turns every opposing draw step into 2 life. Urza Assembles the Titans digs for, free-deploys and double-activates the walkers on top of that plan.

### THE PROBLEM THIS DECK SOLVES SIDEWAYS

Only two of the pool's four planeswalkers are castable in W/B: Liliana of the Veil ({1}{B}{B}) and the colourless Karn, Living Legacy ({4}). Ajani needs a hard green pip and Jaya needs {R}{R}. With a 5-card rare/mythic cap and Urza Assembles the Titans consuming one slot, a W/B Superfriends deck cannot buy a third walker at any price.

So this build stops trying to add walkers and buys **redundancy** instead.

**Serra Paragon** — "Once during each of your turns, you may play a land from your graveyard or **cast a permanent spell with mana value 3 or less from your graveyard**." Liliana of the Veil is a MV-3 permanent. A full scan of all 271 pool cards confirms this is the **only** effect in the cube that returns an answered planeswalker. That single line is why Serra Paragon holds the fifth rare slot instead of Plaza of Heroes.

The rebuy set is broader than Liliana alone — 10 of the 22 nonland cards are legal targets:

| Card | MV |
|---|---|
| Liliana of the Veil | 3 |
| Citizen's Arrest x2 | 3 |
| Gibbering Barricade x2 | 3 |
| Blight Pile x2 | 2 |
| Walking Bulwark x2 | 1 |
| Clockwork Drawbridge | 1 |

And what it pointedly does **not** reach: Prayer of Binding and Wingmantle Chaplain (MV 4), Sheoldred and Karn (MV 4), Urza (MV 5), and Extinguish the Light — which fails on both counts, being MV 4 *and* an instant rather than a permanent.

### THE WIN CONDITION NEVER ATTACKS

**Blight Pile**: "{2}{B}, {T}: Each opponent loses X life, where **X is the number of creatures with defender you control**."

That is a damage source that requires no combat, cannot be blocked, and — once the permanent has resolved — cannot be countered. For a deck whose blockers exist to keep planeswalkers alive, a kill that lets every blocker stay home is exactly the right shape. The defender census:

| Defender | Cost | P/T | Qty |
|---|---|---|---|
| Clockwork Drawbridge | {W} | 0/3 | 1 |
| Walking Bulwark | {1} | 0/3 | 2 |
| Blight Pile | {1}{B} | 3/3 | 2 |
| Gibbering Barricade | {2}{B} | 2/4 | 2 |
| Wingmantle Chaplain | {3}{W} | 0/3 | 2 |

Nine defenders across 22 nonland cards. Blight Pile counts itself, so a lone Pile drains 1 — which is why it is weighted 0.7 rather than 1.0 in the structural assembly check. With three other defenders resolved it drains 4 a turn; two Piles with four other defenders drain 12.

Two other cards multiply that same body count:

- **Wingmantle Chaplain** — "create a 1/1 white Bird creature token with flying **for each creature with defender you control**", plus a second clause triggering whenever another defender enters. It has Defender itself, so it counts itself: entering onto three defenders makes four Birds.
- **Walking Bulwark** — "{2}: … target creature with defender gains haste, can attack as though it didn't have defender, and **assigns combat damage equal to its toughness rather than its power**." This converts the wall into an attack force. Gibbering Barricade attacks for 4; everything else for 3.

### THE UNIFORM TOUGHNESS-3 WALL

An accident of card selection turns out to be one of this deck's better properties. Every single defender has toughness 3 or better. Against the cube's six sweepers:

| Sweeper | Effect | Defenders killed (of 9) |
|---|---|---|
| Choking Miasma | All creatures get -2/-2 | **0** |
| The Elder Dragon War (Ch. I) | 2 damage to each creature | **0** |
| Temporal Firestorm | 5 damage to each creature | 9 |
| Karn's Sylex | Destroy each nonland permanent MV ≤ X | scales |

Real board-wipe exposure is 2 of 6 sweepers, not the 3 of 6 an earlier version of this analysis assumed. The two cheap, commonly-played sweepers in the environment kill nothing.

### WHAT THE GRILL CHANGED, AND WHY IT MATTERS

Two repairs from the Phase 9 self-grill materially improved this list rather than merely correcting its paperwork.

**Gibbering Barricade was originally excluded, on bad reasoning.** The stated veto was that "{2}{B}, Sacrifice a creature: You gain 1 life and draw a card" lowers Blight Pile's X. That fails twice: the ability is *optional* — what you buy unconditionally is a 2/4 Defender at common — and the deck manufactures **non-defender fodder by design**, because Wingmantle Chaplain's Bird tokens have flying but not Defender. Sacrificing a Bird lowers X by exactly 0. Worse, the same build was simultaneously running Benalish Sleeper in the sideboard, whose kicked sacrifice is *mandatory*. The principle had been applied backwards.

Adding it took the defender census from 8 to 9, the Serra Paragon rebuy set from 8 to 10, and repeatable card-draw sources from 1 to 3 — against a mana audit that reports `cantrip_count: 0`, meaning this deck has no incidental card draw whatsoever.

**The 18th land had silently eaten a defender.** Shield-Wall Sentinel was cut from 2 copies to 1 to make room for the extra land, which dropped the defender count from the 9 the shape judge actually approved down to 8 — an 11% haircut on Blight Pile's X and Wingmantle's Bird yield, recorded nowhere. The repair restored it.

Both changes also cleared a structural WARN: goldfish keepable moved from exactly 80% (on the floor) to 84%, and average mana value from 2.955 to 2.864.

### THE CARD THAT BEATS THIS DECK, AND WHY NOTHING FLAGGED IT

**Smash to Dust** is a common at {1}{R}: "Choose one — • Destroy target artifact. • **Destroy target creature with defender.** • deals 1 damage to each creature your opponents control."

Every one of this deck's nine defenders is a legal target for mode 2, and Walking Bulwark x2 are Artifact Creatures, so they are legal for mode 1 as well. Any red opponent may run two copies. The cube dossier's threat profile has no "defender hate" category, so nothing in the automated analysis surfaces it — a deck whose entire finisher is a creature type is obliged to name the environment's dedicated answer to that type, and this is it. There is no W/B answer.

### THE MANA IS THE PAYOFF FOR STAYING TWO COLOURS

16 of 18 lands enter untapped — only Sunlit Marsh x2 are taplands. Fourteen basics give nine unconditional sources of each colour, which comfortably supports six double-pip costs ({3}{W}{W} Urza, {2}{W}{W} Serra Paragon, {1}{W}{W} Citizen's Arrest, {1}{B}{B} Liliana, {2}{B}{B} Sheoldred, {2}{B}{B} Extinguish the Light). Compare the three-colour Mardu build, where six of seventeen lands enter tapped and a turn-4 Jaya is genuinely unreliable.

The deck runs 18 lands against a computed recommendation of 17. The grounds: `land_target`'s only acceleration input is `accel_count`, which sees one card here and is structurally blind to **repeatable activated abilities**. This deck wants to spend mana every turn on Blight Pile's {2}{B}, Clockwork Drawbridge's {2}{W}, Gibbering Barricade's {2}{B} and Walking Bulwark's {2} — four sinks the curve never sees.

Karn's Powerstones are unusually live here for the same reason. "{T}: Add {C}. This mana can't be spent to cast a nonartifact spell" restricts *casting*, not paying activation costs — so a Powerstone fully funds Walking Bulwark's {2} and the generic portion of every other sink, and can also cast Walking Bulwark x2 outright.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (22 nonland):  1:5  2:3  3:5  4:8  5:1
Assembly (thesis turn 10, 17 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.4: Blight Pile@0.7, Blight Pile@0.7) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.6: Walking Bulwark@0.8, Walking Bulwark@0.8) → p=0.95 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 67%  T2 89%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Wingmantle Chaplain, Gibbering Barricade, Clockwork Drawbridge, Walking Bulwark, Blight Pile
  OK        single_large_threat: Citizen's Arrest, Extinguish the Light, Prayer of Binding, Destroy Evil, Liliana of the Veil
  OK        noncreature_permanents: Prayer of Binding, Destroy Evil, Citizen's Arrest
  CONCEDED  stack: No counterspell exists in W/B in this pool; the only counters are blue (Protect the Negotiators {1}{U}, Ertai Resurrected {2}{U}{B}). This deck answers resolved permanents instead of the stack.
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards in the entire cube; the only card whose oracle text exiles an opponent's graveyard is Vohar, Vodalian Desecrator ({U}{B}), which is off-colour. No W/B answer exists at any rarity.
```

- Curve PASS. MV distribution across 22 nonland cards: 1:5 2:3 3:5 4:8 5:1. The Control band requires MV 0-2 share >= 25%; this deck is at 8/22 = 36.4%.

- Assembly PASS on both roles. payoff p=0.86 with 4.4 effective copies (Blight Pile x2 discounted to 0.7 because it counts itself for X and drains only 1 alone); enabler p=0.95 with 7 copies / 6.6 effective (Walking Bulwark x2 discounted to 0.8 because its attack-conversion costs {2} per creature and is sorcery-speed only, though its defender BODY is unconditional).

- Goldfish now PASSES at 84% keepable. It initially sat at exactly 80%, on the floor, and was going to be accepted rather than repaired; the Phase 9 repairs (Shield-Wall Sentinel and one Extinguish the Light, both MV 4, out for Gibbering Barricade x2 at MV 3) lowered avg MV from 2.955 to 2.864 and lifted keepable to 84% as a side effect. Recording the original reasoning for the audit trail: keepable 80% sat exactly on the 80% floor. The mechanism is that this deck ran 10 of 22 nonland cards at MV 4 at that point - the defender package and the finishers all cost 4. After the Phase 9 repair the MV-4 count is 8 of 22 (Extinguish the Light, Prayer of Binding x2, Sheoldred, Karn, Wingmantle Chaplain x2, Serra Paragon) - so a fraction of opening hands are genuinely clunky. The response is to accept it rather than lower the curve, because every one of those MV-4 cards is either a locked rare or the specific card that makes Blight Pile lethal; cutting them cuts the win condition. The 18th land is part of the same response. 3 lands by turn 3 is 92%, which is the number that matters for a controller.

- Coverage PASS with two written concessions (stack, graveyard). Note the wide_boards declaration is NOT a sweeper - this deck has no sweeper available in W/B at common or uncommon. It answers a wide board by out-bodying it: 9 defenders plus Wingmantle Chaplain's Bird tokens block more attackers than the opponent can profitably send, which is a legitimate answer for a deck that never needs to attack.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This deck has the best flood resilience of the four builds because it has three REPEATABLE mana sinks rather than one: Blight Pile '{2}{B}, {T}: Each opponent loses X life', Clockwork Drawbridge '{2}{W}, {T}: Tap target creature', and Walking Bulwark '{2}: ... target creature with defender ... can attack as though it didn't have defender, and assigns combat damage equal to its toughness'. Karn's '-1: Pay any amount of mana. Look at that many cards...' is a fourth, uncapped one. Serra Paragon also converts a flooded graveyard back into value: 'you may play a land from your graveyard'. Crystal Grotto x2 scry on ETB. |
| screw | mitigation | 8 of the 22 nonland cards cost 2 or less (Cut Down x2, Walking Bulwark x2, Clockwork Drawbridge, Destroy Evil, Blight Pile x2), so a two-land hand deploys a defender on turn 1 and interacts on turn 1-2. The mana base is the cleanest of the four builds: 16 of 18 lands enter untapped, and with 14 basics plus Sunlit Marsh x2 there are 9 unconditional sources of each colour, so colour screw is close to eliminated - what remains is pure land-count screw. 3 lands by turn 3 is 92% per the goldfish check. |
| decapitation | mitigation | This is the mode this build is specifically constructed to answer, and it is why Serra Paragon holds the 5th rare slot instead of Plaza of Heroes. 'Once during each of your turns, you may... cast a permanent spell with mana value 3 or less from your graveyard' means Liliana of the Veil (MV 3) answered on sight comes BACK - the only such effect in the entire pool. The same clause rebuys Blight Pile (MV 2), Walking Bulwark (MV 1), Clockwork Drawbridge (MV 1) and Citizen's Arrest (MV 3): 10 of 22 nonland cards are recurrable. Beyond that, the deck's win condition is distributed rather than singular - Blight Pile x2, Sheoldred, Wingmantle Chaplain's Birds and Walking Bulwark's toughness-attacks are four separate ways to deal damage. |
| gas-out | mitigation | Repeatable card sources, counted: Karn's '-1: Pay any amount of mana. Look at that many cards...' is uncapped; Gibbering Barricade x2 ('{2}{B}, Sacrifice a creature: You gain 1 life and draw a card') are two more, and their cost is free here because Wingmantle Chaplain's Bird tokens are non-defender fodder that cost Blight Pile's X exactly 0 to sacrifice. That is 3 of 22 nonland cards, up from 1 before the Phase 9 repair - which matters because the mana audit reports cantrip_count: 0, so there is no incidental card draw in this list at all. Serra Paragon turns the graveyard into a second hand at one MV<=3 permanent per turn indefinitely; Urza chapter I scries 4; Sheoldred ('Whenever you draw a card, you gain 2 life') makes every draw step also stabilise. Beyond cards-in-hand, the deck is deliberately heavy on PERMANENTS that keep producing - Blight Pile and Clockwork Drawbridge generate value every turn from the battlefield rather than from the hand, which is the correct answer to gas-out for a control deck that expects to be hellbent by turn 10. |
| raced | accepted | The deck's clock is slow by design (goldfish 10) and it will lose to a fast start it does not wall off in time. It is built to survive rather than race: 9 defenders all of toughness 3 or better, 8 removal spells, and lifegain attached to Extinguish the Light, Prayer of Binding, Sheoldred and Serra Paragon. The specific hole is that all 9 DEFENDERS are ground blockers with no flying or reach, against a cube whose largest threat class is 51 evasive creatures at 20.6% density. The deck is not flier-blind, though: Serra Paragon's oracle text opens with 'Flying' (a 3/4 body), and Wingmantle Chaplain x2 each create '1/1 white Bird creature token[s] with flying' - a Chaplain entering onto three defenders makes 4 flying blockers. The sideboard adds 4 more anti-flier slots (Battlefly Swarm x2, a 1-mana flier with '{B}: This creature gains deathtouch until end of turn', and Griffin Protector x2, a 2/3 flier that grows off every Bird and defender that enters). REVISED STATEMENT OF COST after the Phase 9 grill: an earlier draft claimed mitigating further would mean 'cutting defenders for fliers', and the Challenger correctly showed that dichotomy is false - Serra Redeemer ({3}{W}{W}, 'Flying / Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature') would add flying and turn every 1/1 Bird into a 3/3, without cutting a single defender. The REAL cost is that Serra Redeemer is a RARE and all 5 rare/mythic slots are spent. The only cuttable one is a planeswalker, which would take a Superfriends deck down to ONE walker and collapse Urza's chapters II and III onto a single card. That is the identity cost, and it is why the exposure is accepted rather than mitigated. |
| disruption-fizzle | mitigation | There is no single critical turn. The kill is an activated ability on a permanent that has already resolved, so it cannot be countered on the stack, and it accrues incrementally - a Blight Pile activation that gets responded to still drained. The deck's two most important cards are both replaceable in a way nothing else in the pool is: Liliana comes back via Serra Paragon, and Blight Pile is a 2-of that Serra Paragon also rebuys. Prayer of Binding has Flash, so the deck can hold interaction up on a turn it would otherwise tap out. The one genuine fizzle risk is a sweeper resolving on a full defender board - see unanswered_threat_classes. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Plaza of Heroes | RARE, and it is in the Mardu build but not this one. Its any-colour ability only casts LEGENDARY spells: this deck has 3 legendary cards of 22 nonland, and Karn ({4}) needs no colour, so it would fix for 2. A two-colour base with 9 unconditional sources per colour does not need a rare land; the slot bought Sheoldred instead. |
| Temporary Lockdown | RARE. 'exile each nonland permanent with mana value 2 or less' would exile this deck's own Blight Pile x2 (MV2), Walking Bulwark x2 (MV1) and Clockwork Drawbridge (MV1) plus every Bird token - it exiles the win condition. |
| Jaya, Fiery Negotiator | The pool's third castable planeswalker, but {2}{R}{R} requires red. Adding red to reach a third walker would break the clean two-colour mana base that is this build's main advantage over the Mardu list. |
| Ajani, Sleeper Agent | '{1}{G}{G/W/P}{W}' - only the hybrid-Phyrexian pip is payable with life; the {G} is a hard green pip that a W/B base cannot produce. Genuinely uncastable here. |
| Ratadrabik of Urborg | RARE, and its trigger 'Whenever another legendary creature you control dies' fires on 1 of the 22 nonland cards (Sheoldred). No rare budget and almost no targets. |
| Braids, Arisen Nightmare | RARE. 'you may sacrifice an artifact, creature, enchantment, land, or planeswalker' - sacrificing a defender lowers Blight Pile's X, so the engine's cost fights this deck's win condition. |
| The Cruelty of Gix | RARE. A strong Saga, but the rare budget is spent and Ch.III ('Put target creature card from a graveyard onto the battlefield') wants a creature-heavy graveyard this deck does not build. |
| Gibbering Barricade | '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' - a defender, but sacrificing a defender to draw directly lowers Blight Pile's X. The cost fights the plan. |
| Braids's Frightful Return | Chapter I costs 'You may sacrifice a creature' - same conflict as Gibbering Barricade in a deck whose creature count IS its damage output. |
| Pilfer | 'Target opponent reveals their hand... discards that card.' It is a SORCERY, so Serra Paragon ('cast a permanent spell with mana value 3 or less') can never rebuy it - a card-neutral one-for-one in a deck whose entire redundancy plan is recursion. |
| Tribute to Urborg | '-2/-2 until end of turn' is the weakest removal in the colours and does not scale past turn 4; moved to the sideboard for aggro matchups only. |
| Bone Splinters | 'As an additional cost... sacrifice a creature' - sacrificing a defender to kill a creature lowers Blight Pile's X. Same conflict as Gibbering Barricade. |
| Benalish Sleeper | Kicked it is a symmetric edict; this deck's own defenders are the cheapest thing it would have to sacrifice, so it is a sideboard card for the specific hexproof/ward case rather than a maindeck answer. |
| Phyrexian Rager | 'you draw a card and you lose 1 life' - fine value, but a 2/2 without defender contributes nothing to Blight Pile's X, and the slot is better spent on a body that does both. |
| Mesa Cavalier / Griffin Protector / Coalition Skyknight | Evasive white bodies that would help against the 51-card flier class, but none has Defender, so none raises Blight Pile's X. Wingmantle Chaplain's Bird tokens fill the flying role while also being generated BY the defender count. |
| Love Song of Night and Day | Chapter I is 'You AND target opponent each draw two cards' - symmetric card draw is actively bad for a control deck that wins by resource denial, and Sheoldred punishing opponent draws makes it worse, not better, since it also refills their hand. |
| Shadow Prophecy | Domain - 'Look at the top X cards... where X is the number of basic land types among lands you control.' This W/B base reaches only 2 basic land types (Plains, Swamp), so X = 2. Weak, and including it would make a land-property census mandatory. |
| Runic Shot (maindeck) | 'Destroy target tapped creature' needs the opponent to attack; that is reliable once the wall is up but not on turns 1-3 when this deck is most vulnerable. Sideboard only. |
| Eerie Soultender / Sengir Connoisseur / Tattered Apparition | Black creatures with no Defender - they do not raise Blight Pile's X and this deck does not need attackers. |
| Inscribed Tablet / Automatic Librarian | Colourless value artifacts, but neither has Defender; Shield-Wall Sentinel occupies the same colourless-artifact-creature slot and does raise Blight Pile's X. |
| Aron, Benalia's Ruin | '{W}{B}, {T}, Sacrifice another creature' - a third sacrifice outlet whose cost lowers Blight Pile's X. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 17 recommended  [PASS]
Avg CMC:     2.86   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.31 adj [MV 2.86 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  46.2%  prod  61.1%  gap -14.9pp  [OK]
  W  demand  53.8%  prod  61.1%  gap  -7.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base_pool: cube_mainboard of dominaria-united---main-set only; every card verified by exact-name match against the working pool cache.
[PASS] common_uncommon_max_2: PASS - no common or uncommon exceeds 2 copies across mainboard + sideboard combined, verified programmatically via cube_search.get_max_copies with a per_rarity policy.
[PASS] rare_mythic_max_1_each: PASS - Urza Assembles the Titans, Liliana of the Veil, Karn Living Legacy, Serra Paragon, Sheoldred the Apocalypse are 1 copy each.
[PASS] rare_mythic_total_max_5: PASS - exactly 5: Urza Assembles the Titans (rare) plus four mythics (Liliana, Karn, Serra Paragon, Sheoldred). Zero rare/mythic cards in the sideboard. Plaza of Heroes and Temporary Lockdown were both available and were both deliberately declined - see count_dependent_verdicts.
[PASS] basics: Plains x7, Swamp x7 - format-supplied, exempt from copy limits.
[PASS] colour_legality: PASS - every nonland card returns a usable mode from effective_cost.best_mode(card, ['W','B'], []). Two sideboard cards print off-colour identities that come only from unpayable kickers: Runic Shot (UW, Kicker {U}) and Tribute to Urborg (BU, Kicker {1}{U}). Both are played in their mono-W and mono-B base modes respectively; neither kicker is counted on anywhere in this build.
```
