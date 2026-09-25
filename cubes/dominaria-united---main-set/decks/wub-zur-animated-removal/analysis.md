---
deck_name: "wub-zur-animated-removal"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-08-20T01:22:26Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  1x Caves of Koilos          WB painland, enters UNTAPPED. The single rare spent on mana
  2x Contaminated Aquifer     UB dual, enters tapped. Land - Island Swamp (2 Domain types)
  2x Idyllic Beachfront       WU dual, enters tapped. Land - Plains Island (2 Domain types)
  3x Island                   Basic. Domain type: Island
  4x Plains                   Basic. Domain type: Plains
  2x Sunlit Marsh             WB dual, enters tapped. Land - Plains Swamp (2 Domain types)
  3x Swamp                    Basic. Domain type: Swamp
```

### CREATURES (5)

```
CMC  Card                            Qty   Color  Role                                          Rar
  2  Phyrexian Missionary            x2    W      Lifelink blocker / Zur rebuy (kicked)         U
  3  Zur, Eternal Schemer            x1    WUB    Engine / Payoff - animates enchantments       M
  4  Serra Paragon                   x1    W      Engine - per-turn recursion of MV<=3 permanents, Zur included M
  4  Sheoldred, the Apocalypse       x1    B      Standalone threat / draw tax                  M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                            Qty   Color  Role                                          Rar
  1  Cut Down                        x2    B      Interaction (early curve)                     U
  2  Destroy Evil                    x2    W      Interaction (fat creature or enchantment)     C
  2  Impulse                         x2    U      Card selection - digs 4 deep for the 1-of Zur C
  4  Sheoldred's Restoration         x1    B      Zur rebuy - returns a creature to the BATTLEFIELD U
```

### OTHER SPELLS (11)

```
CMC  Card                            Qty   Color  Role                                          Rar
  2  Founding the Third Path         x2    U      Engine + 2/2 animation target                 U
  3  Braids's Frightful Return       x2    B      Engine (rebuys Zur) + 3/3 animation target    U
  3  Citizen's Arrest                x2    W      Removal + 3/3 animation target                C
  3  Love Song of Night and Day      x2    W      Engine + 3/3 animation target                 U
  4  Prayer of Binding               x2    W      Removal + 4/4 animation target                U
  6  Leyline Binding                 x1    W      Removal + 6/6 animation target                R
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                                                   Rar
Artillery Blast                 x2    W      Removal - Against evasion decks -- the cube's largest threat class at 51 cards / 20.7% density. Domain sets X = 1 + 3 = 4 damage by this deck's own land census, and being an INSTANT it answers the attacker on the turn it taps. C
Essence Scatter                 x2    U      Counterspell - Against the cube's large creature top-end (Tyrannical Pitlord 6/6, Sphinx of Clear Skies 5/5, Tolarian Terror 5/5) that outclasses a 3/3 animated body. C
Knight of Dusk's Shadow         x1    B      Hate bear - Against the cube's lifegain class (22 cards, 8.9% density). 'Your opponents can't gain life' is the pool's only such effect, and this deck's incremental turn-8 clock is exactly what opposing lifegain taxes. Also a 2/2 menace body. U
Negate                          x2    U      Counterspell - Against the cube's 18 enchantments and 15 artifacts -- W/U/B has zero artifact removal anywhere in this cube, so countering the spell is the only clean answer. Also answers all 6 of the cube's sweepers, every one of which is a noncreature spell. C
Choking Miasma                  x2    B      Sweeper - Against go-wide token boards. 'All creatures get -2/-2' is near-one-sided here: 9 of the 11 animation targets are 3/3 or larger when animated and survive, as do Sheoldred (4/5), Serra Paragon (3/4), Phyrexian Missionary (2/3) and Zur (1/4 becomes -1/2, toughness 2). U
Extinguish the Light            x1    B      Removal - The deck's only unconditional 'Destroy target creature or planeswalker'; boards in against midrange and superfriends, where the exile-enchantments alone are too few. C
```

## ANALYSIS

### DECK IDENTITY

WUB Zur midrange that makes its removal and its threats the same eleven cards. Every exile-enchantment answers an opposing permanent when it enters and then, for {1}{W}, becomes a creature whose power and toughness equal its mana value -- a 3/3 Citizen's Arrest, a 4/4 Prayer of Binding, a 6/6 Leyline Binding -- each carrying deathtouch, lifelink and hexproof from Zur. Serra Paragon rebuys the mana-value-3-or-less half of that package once per turn (Zur himself included), and Sheoldred turns the symmetric draw on Love Song of Night and Day into four damage. The deck wins by presenting bodies that targeted removal cannot touch, blockers cannot profitably eat, and aggressive decks cannot race.


### THE BINDING CONSTRAINT IS RARITY, NOT COLOUR

The archetype brief recommended ten cards. Eight of them are rare or mythic (Leyline Binding,
Stronghold Arena, Vesuvan Duplimancy, The Phasing of Zhalfir, The Cruelty of Gix, Temporary
Lockdown, Urza Assembles the Titans, The World Spell) and Zur is a ninth. The restriction allows
**five**. So the deck is defined less by what it plays than by which four non-Zur rares it buys.

This build spends them on: **Leyline Binding** (the best animation target in the pool),
**Sheoldred, the Apocalypse** and **Serra Paragon** (standalone power that does not need Zur),
and **Caves of Koilos** (the only untapped dual). Everything else in the list is a common or
uncommon at up to two copies, which is why the animation package is eleven cards deep rather
than the three or four a rare-heavy version would manage.

Two of the brief's suggestions are unbuildable on their own terms and were cut outright:
**The World Spell** costs `{5}{G}{G}` and green is not castable here at all; **Urza Assembles the
Titans** has chapter II reading "put a planeswalker card with mana value 6 or less from your hand
onto the battlefield" and the entire WUB pool contains exactly **two** planeswalkers, both mythic.

### THE ANIMATION TABLE

Zur reads `{1}{W}: Target non-Aura enchantment you control becomes a creature in addition to its
other types and has base power and base toughness each equal to its mana value.` Because the body
is sized by *mana value*, not by what the card cost you, the deck's payoff scales with the
expensive half of its own removal suite:

| Enchantment | MV | Animated body | What it did on the way in |
|---|---|---|---|
| Leyline Binding | 6 | **6/6** | exile any nonland permanent, at flash speed, for `{2}{W}` |
| Prayer of Binding x2 | 4 | 4/4 | exile any nonland permanent, flash, gain 2 |
| Citizen's Arrest x2 | 3 | 3/3 | exile a creature or planeswalker |
| Braids's Frightful Return x2 | 3 | 3/3 | discard, graveyard return, drain |
| Love Song of Night and Day x2 | 3 | 3/3 | draw 2, a flier, +1/+1 counters |
| Founding the Third Path x2 | 2 | 2/2 | free spell, mill, flashback |

All eleven then carry `deathtouch, lifelink, and hexproof` from Zur's static ability. That
combination is why the clock is hard to interact with: hexproof turns off targeted removal,
deathtouch makes every block a trade down, and lifelink makes the race unwinnable.

**Leyline Binding is the standout, and the manabase is why.** Its Domain clause reduces it by one
per basic land type you control, and this cube's WUB duals are *typed* — Idyllic Beachfront is
`Land - Plains Island`, Sunlit Marsh is `Land - Plains Swamp`, Contaminated Aquifer is
`Land - Island Swamp`. Sixteen of the seventeen lands carry at least one basic type, so Domain 3
is routine and Leyline Binding costs `{2}{W}`. Its mana value stays 6 regardless, so a three-mana
flash removal spell becomes a 6/6.

### THE HONEST WEAKNESS: ZUR IS A 1-OF AND CANNOT BE ANYTHING ELSE

This deserves to be stated plainly rather than buried. Zur is a mythic, the restriction caps
mythics at one copy, and no card in the WUB pool tutors for him. Using the structural gate's own
formula, the probability of having drawn a single copy from a 40-card deck by turn 8 (fifteen
cards seen) is:

    1 - (1 - 1/40)^15 = 31.6%

No thesis turn fixes that — reaching the 0.75 gate on one copy would require seeing 55 cards.
So roughly two games in three, this is a WUB removal-and-value deck rather than a Zur deck. The
build is shaped around that fact rather than in denial of it:

- **All eleven enchantments function without him.** Five are removal on entry; six are Sagas whose
  chapters resolve on their own schedule. Losing Zur downgrades the deck; it does not blank it.
- **Five weighted rebuy effects** put him back: Braids's Frightful Return chapter II and Phyrexian
  Missionary's kicker both "return target creature card from your graveyard to your hand", and
  Serra Paragon casts "a permanent spell with mana value 3 or less from your graveyard" — Zur is
  mana value 3, so Serra Paragon returns him straight to the battlefield. The structural gate
  scores that package at p = 0.76.
- **Phyrexian Missionary carries printed lifelink**, so the "cannot be raced" plan has a source
  that does not depend on Zur being in play.

### THE SAGA TIMER — THE COST THIS ARCHETYPE ALWAYS PAYS

Six of the eleven animation targets are Sagas, and every Saga's own reminder text ends
**"Sacrifice after III."** Founding the Third Path x2, Braids's Frightful Return x2 and Love Song
of Night and Day x2 all remove themselves from the battlefield when their last chapter resolves.
So the honest split of the animation package is:

| | Count | Behaviour |
|---|---|---|
| Permanent bodies | **5 of 11** | Leyline Binding, Prayer of Binding x2, Citizen's Arrest x2 — these stay |
| Bodies on a timer | **6 of 11** | The six Saga copies — animation targets only while held below chapter III |

And the window is **fixed at the moment the Saga enters** — "Add one after your draw step" is
automatic and cannot be stopped, so a Saga entering at chapter N is a Zur target for exactly `3 − N`
of your draw steps. You cannot stall one; the only lever is which chapter you read it into.

This is priced into the structural gate rather than hidden: the `animation_target` role is declared
at 11 raw copies but only **7.9 effective** — the chapter-I Sagas (Founding the Third Path x2, Love
Song of Night and Day x2) at 0.6, and Braids's Frightful Return x2 at **0.25**, because this deck
deliberately reads Braids into chapter II for the Zur rebuy, which leaves one opponent turn of body
and zero attack steps. It still clears the assembly threshold at p = 0.96, and it clears it honestly.

Two practical consequences at the table. First, the Sagas are the *value* half of the deck and the
exile-enchantments are the *durable* half — if you need a body that will still be there in three
turns, animate a Citizen's Arrest or a Leyline Binding, not a Love Song. Second, chapter value and
body value are bought with the *same* decision — the entry chapter — so you cannot have both from one
copy.

One honesty note on rules: there is a well-known interaction claim that a Saga which is also a
creature escapes that sacrifice. That turns on a rules-engine clause rather than anything printed
on these cards, so it is outside what can be verified from oracle text here, and **this deck is
built so that nothing depends on it.** If the interaction works, the Saga bodies are better than
described above; if it does not, the deck is exactly as described.

### TWO INTERACTIONS WORTH KNOWING AT THE TABLE

**Sheoldred inverts Love Song of Night and Day.** Chapter I reads "You and target opponent each
draw two cards" — symmetric, and a liability in an aggressive build. With Sheoldred on the
battlefield ("Whenever you draw a card, you gain 2 life. Whenever an opponent draws a card, they
lose 2 life") the same chapter is **4 damage, 4 life and 2 cards**. The symmetry is the payoff.

**The animation is permanent.** Zur's activated ability has no duration clause — no "until end of
turn". Once an enchantment has been animated it stays a creature even after Zur dies; only the
deathtouch/lifelink/hexproof grant leaves with him. Practically: if the opponent holds removal for
Zur, activate anyway. You keep the body.

### WHAT THE GRILL CHANGED

The Challenger caught a real defect in the manabase. The mana audit was reporting green and red
production in a deck with no green or red cards, which traced to **Crystal Grotto** being counted
as a free source in all five colours when its oracle text actually reads `{1}, {T}: Add one mana of
any color` — coloured mana is taxed a generic. Cutting both Grottos for a basic Island and a basic
Swamp raised untapped, untaxed blue sources from 2 to 3 and black from 2 to 4, and moved
turn-3 Zur from roughly 42% to 56% in the Challenger's simulation. It also surfaced that Serra
Paragon rebuys Zur, which the original derivation had missed.

In the approval round the Challenger went further and audited my own reliability weights. It showed
that the Zur-rebuy gate was clearing **only** at exactly the weight I had given Phyrexian Missionary
(0.7); one step down to 0.65 and it failed. Its argument was sound — Missionary's rebuy mode costs
`{2}{W}{B}` against Braids's `{2}{B}`, it is a one-shot enters-the-battlefield trigger rather than an
on-demand one, and I had counted Missionary at full weight as a threat *and* again as a rebuy. So the
weight came down to 0.5 and **Sheoldred's Restoration** was added — "Return target creature card from
your graveyard to **the battlefield**", the only rebuy in the pool that skips the hand — replacing
Extinguish the Light at the same mana value so the land math did not move. The gate now passes at
p = 0.79 on honest weights rather than at 0.757 on a generous one.

### PLAY PATTERN

Trade early with Cut Down and Destroy Evil, land Zur on turn 4 (turn 3 is possible but wants a
specific three-colour draw), then start converting removal into attackers. Prayer of Binding and
Leyline Binding both have flash, so the default line is to hold mana, answer something on the
opponent's turn, and animate on your own. Against decks with sweepers, animate only what you need
— an un-animated enchantment is not a creature and does not die to `destroy all creatures`.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:7  4:5  6:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  threat: 5 copies → p=0.87 (need ≥ 0.75)
  PASS  animation_target: 11 copies (effective 7.9: Founding the Third Path@0.6, Founding the Third Path@0.6, Love Song of Night and Day@0.6, Love Song of Night and Day@0.6, Braids's Frightful Return@0.25, Braids's Frightful Return@0.25) → p=0.96 (need ≥ 0.75)
  PASS  removal: 9 copies → p=0.98 (need ≥ 0.75)
  PASS  zur_rebuy: 6 copies (effective 3.9: Braids's Frightful Return@0.7, Braids's Frightful Return@0.7, Phyrexian Missionary@0.5, Phyrexian Missionary@0.5, Serra Paragon@0.8, Sheoldred's Restoration@0.7) → p=0.79 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 29%  T2 90%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper exists in the list; the deck's blockers are deathtouch bodies (Sheoldred, and any Zur-animated enchantment) which trade up against one attacker per turn but cannot clear a wide board -- Choking Miasma x2 ('All creatures get -2/-2') boards in, and is near-one-sided because 9 of the 11 animation targets are 3/3 or larger when animated.
  OK        single_large_threat: Citizen's Arrest, Prayer of Binding, Leyline Binding
  OK        noncreature_permanents: Prayer of Binding, Leyline Binding, Destroy Evil
  CONCEDED  stack: The list runs no mainboard counterspells: the deck is permanent-based and answers threats after they resolve, by exiling them with Citizen's Arrest / Prayer of Binding / Leyline Binding, which also converts each answer into a body. Maindecking counterspells would cost animation targets, which are the win condition. Negate x2 and Essence Scatter x2 board in, and Negate answers all 6 of the cube's sweepers because every one of them is a noncreature spell.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards (dossier structural_census: GY hate = 0; independently confirmed by a full 271-card pool scan in the grill), so no maindeck answer exists in any colour -- the class is unanswerable by construction, not by omission. The deck's principal removal exiles rather than destroys (Citizen's Arrest, Prayer of Binding, Leyline Binding all read 'exile ... until this enchantment leaves the battlefield'), denying recursion targets in the first place.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Zur's '{1}{W}: Target non-Aura enchantment you control becomes a creature' is an unbounded repeatable mana sink -- every surplus land above four becomes another activation, and there are 11 legal targets in the list (Leyline Binding 1, Prayer of Binding 2, Citizen's Arrest 2, Founding the Third Path 2, Braids's Frightful Return 2, Love Song of Night and Day 2). Serra Paragon adds 'you may play a land from your graveyard' so flooded draws convert into recursion, and Impulse x2 bottoms three cards per cast. |
| screw | mitigation | 10 of 23 nonland cards cost 2 or less (Cut Down x2, Destroy Evil x2, Impulse x2, Founding the Third Path x2, Phyrexian Missionary x2), so two-land hands still act, and Phyrexian Missionary is a 2/3 lifelink blocker that holds the ground while the third land is found. The goldfish simulation reports 86% keepable hands and 91% for three lands by turn 3. |
| decapitation | mitigation | Zur is a 1-of mythic (the 5-rare cap forbids more), so the plan is deliberately built to degrade rather than collapse. First, all 11 enchantments function without him: five are removal on entry (Citizen's Arrest x2, Prayer of Binding x2, Leyline Binding) and six are Sagas whose chapters resolve regardless, leaving a WUB removal-value deck rather than a dead one. Second, the list carries six weighted Zur rebuys across four cards: Braids's Frightful Return x2 chapter II 'Return target creature card from your graveyard to your hand' (weight 0.7, on-demand via Read ahead); Phyrexian Missionary x2 kicked, same text (weight 0.5 -- the rebuy mode costs {2}{W}{B} across two colours and is a one-shot enters-the-battlefield trigger, so a Missionary cast on curve as a turn-2 blocker has spent it); Serra Paragon, which at 'cast a permanent spell with mana value 3 or less from your graveyard' recasts Zur (mana value 3) straight to the battlefield, repeatably (weight 0.8); and Sheoldred's Restoration, 'Return target creature card from your graveyard to the battlefield' -- the only effect in the list that skips the hand entirely (weight 0.7). Effective 3.9 copies, p=0.79 by the thesis turn. Third, Zur's animation carries no duration clause: once animated, an enchantment stays a creature permanently even after Zur leaves; only the deathtouch/lifelink/hexproof grant is lost. |
| gas-out | mitigation | 9 of 23 nonland cards are card-positive, self-replacing or recursive: Impulse x2 (selection), Love Song of Night and Day x2 chapter I 'You and target opponent each draw two cards', Braids's Frightful Return x2 chapter III (which draws only if the opponent DECLINES to sacrifice -- the oracle gives them the choice), Serra Paragon (a permanent recast from the graveyard every turn), and Founding the Third Path x2 chapter III (recopies an instant or sorcery from the graveyard). Sheoldred converts the opponent's own refuelling into 2 life loss per card drawn, and Sheoldred's Restoration turns a dead late-game draw into a returned threat. |
| raced | mitigation | Evasion is the cube's largest threat class (51 cards, 20.7% density), so lifegain is the racing answer rather than blockers. Zur grants lifelink to every animated enchantment, so a 4/4 Prayer of Binding swings a race by 8 per connection. Independently of Zur -- which matters because he is a 1-of -- Phyrexian Missionary x2 has PRINTED 'Lifelink' on a 2/3 body, Prayer of Binding gains 2 on entry, Sheoldred gains 2 per card drawn, and Sheoldred's Restoration kicked {2}{W} 'you gain life equal to that card's mana value' returns Sheoldred for 4 life. Deathtouch on every animated body means any single attacker trades down. |
| disruption-fizzle | mitigation | The critical turn is the animation turn, and it is unusually resilient because Zur's ability has no duration clause -- 'becomes a creature in addition to its other types' is permanent, so an opponent who removes Zur in response to the activation still leaves a permanently-animated body behind. The activation costs only {1}{W}, so it can be held up alongside a spell, and it can be repeated on multiple enchantments across multiple turns rather than requiring one all-in turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| The World Spell | Costs {5}{G}{G}; green is not castable in this deck's colours at all. |
| Urza Assembles the Titans | Chapter II 'put a planeswalker card with mana value 6 or less from your hand onto the battlefield' has exactly 2 planeswalkers in the whole WUB pool (Liliana of the Veil, Karn, Living Legacy), both mythic; running the Saga plus a planeswalker spends 2 of the 4 non-Zur rare slots on a two-card synergy needing both in hand. |
| Vesuvan Duplimancy | Triggers only on 'a spell that targets only a single artifact or creature you control'. This list runs 0 such spells, so a mythic slot buys a dead engine. |
| The Cruelty of Gix | MV 5 animates to a 5/5 and chapter II tutors any card (including Zur), but {3}{B}{B} demands double black on a manabase with 8 black sources and only one untapped nonbasic. It belongs to the Saga build, not the removal build. |
| The Phasing of Zhalfir | Chapter III 'Destroy all creatures' wipes this deck's own animated enchantment creatures and Zur; a wrath is anti-synergy in a build whose threats are permanents it spent mana animating. |
| Karn's Sylex | 'Destroy each nonland permanent with mana value X or less' is symmetric mass removal that eats this deck's own enchantments; also a mythic slot. |
| Tolarian Terror | 'costs {1} less for each instant and sorcery card in your graveyard' -- this list runs 5 instants and does not self-mill, so it lands turn 7+ at best, and a 5/5 vanilla does not advance the animation plan. |
| Haughty Djinn | Power equals instants/sorceries in the graveyard; this build is permanent-dense (16 of 23 nonlands are permanents), so the Djinn is a small body most games. |
| Combat Research | An Aura. Zur's ability reads 'Target NON-AURA enchantment', so it is explicitly excluded from the animation plan. |
| Drag to the Bottom | Domain sweeper giving -X/-X where X = 1 + basic land types = 4 here; it kills this deck's own 3/3 and 4/4 animated bodies as readily as the opponent's. |
| Sphinx of Clear Skies | Mythic slot for a 5/5 flier that does not interact with enchantments; the rare budget is better spent on animation targets and untapped fixing. |
| Wingmantle Chaplain | 'create a 1/1 Bird for each creature with defender you control' needs a defender sub-theme this list does not run (0 other defenders). |
| Braids, Arisen Nightmare | Its end-step trigger wants to sacrifice permanents; this deck's enchantments are its threats, so feeding Braids fights the animation plan. |
| Stenn, Paranoid Partisan | 'Spells you cast of the chosen type cost {1} less' naming Enchantment would discount 11 of 23 nonland cards, which is real -- but it is a rare slot competing directly with Leyline Binding and the manabase. |
| Timeless Lotus | Five-mana mana rock in a deck whose curve tops at 6 and whose problem is coloured sources on turns 3-4, not raw ramp on turn 6. |
| Shadow Prophecy | Domain instant, X = 3 by this deck's land census: 'look at the top 3 ... put up to two of them into your hand'. Cut in favour of Impulse, which looks at FOUR cards -- the deck's selection job is finding one specific 1-of (Zur), and depth beats width for that. It would also have been the 7th three-drop against 6 existing MV-3 animation targets, lowering the 11/23 animation-target density the thesis rests on. |
| Raff, Weatherlight Stalwart | 'Whenever you cast an instant or sorcery spell, you may tap two untapped creatures you control. If you do, draw a card' needs both a spell count and a board. This list runs 5 instants and 5 creature cards, and tapping two creatures fights the deck's plan of attacking with animated bodies. |
| Sheoldred's Restoration | 'Return target creature card from your graveyard to the battlefield' is a better Zur rebuy than the ones played, but it is a 4-mana sorcery that is blank on an empty graveyard, and the list runs only 5 creature cards, so its hit rate is gated on one of those 5 having already died. The 5 weighted rebuys already in the list clear the assembly gate at p=0.76. |
| Crystal Grotto | Cut during grill repair. '{1}, {T}: Add one mana of any color' taxes coloured mana one generic, so it is not a free coloured source; the mana audit was counting it as an untaxed source in all five colours. Replaced by Island + Swamp, which raised untapped-untaxed blue from 2 sources to 3 and black from 2 to 4. |
| Stronghold Arena | Cut as a weak keystone. 'Whenever one or more creatures you control deal combat damage to a player ... put the top card into your hand' is inert until Zur has already animated something, and at MV 2 it is also the smallest animation target (a 2/2). Its rare slot bought Caves of Koilos instead. |
| Elas il-Kor, Sadistic Pilgrim | 'Whenever another creature you control enters, you gain 1 life' does not fire on Zur animations -- animating an enchantment already on the battlefield is not a creature entering. Only 5 cards in the list would ever trigger it. Its slot went to Phyrexian Missionary, which supplies printed lifelink AND a Zur rebuy. |
| Rona's Vortex | Cut to make room for Zur redundancy. Its 'Return target creature or planeswalker you don't control' is a targeted effect, so despite the initial role note it does NOT answer hexproof threats; it answers indestructible ones, a class this cube barely contains. |
| Runic Shot | Cut from the sideboard. 'Destroy target tapped creature' on a SORCERY is blank against the pool's 8 defenders and against vigilance, and it can only fire the turn after an attack. Replaced by Artillery Blast, an instant dealing X = 4 by this deck's census. |
| Stall for Time | Cut from the sideboard for Knight of Dusk's Shadow: it buys a turn but answers no threat CLASS, whereas the cube's lifegain class is 22 cards / 8.9% density and this deck's incremental clock is exactly what lifegain taxes. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' would also exile this deck's own Founding the Third Path x2 (MV 2) and Phyrexian Missionary x2 (MV 2) -- 4 of 23 nonland cards. A rare slot for a symmetric sweeper in a permanent-based deck. |
| Liliana of the Veil | '+1: Each player discards a card' is symmetric in a deck that wants to hold flash enchantments, and '-2: Target player sacrifices a creature' is worse than the deck's exile effects against the single big threat. A mythic slot competing with Sheoldred and Serra Paragon. |
| Ertai Resurrected | Flash counter-or-kill is genuinely strong, but at 4 mana it is a rare slot competing directly with Leyline Binding, and unlike the enchantments it is not an animation target. |
| Adarkar Wastes | Untapped WU painland, and the deck's blue is its thinnest colour -- but it is a rare and the 5-rare cap was already spent. Caves of Koilos won the single land rare because W and B are the deck's two double-pip colours. |
| Plaza of Heroes | '{T}: Add one mana of any color. Spend this mana only to cast a legendary spell' would fix Zur specifically, and its '{3}, {T}, Exile: Target legendary creature gains hexproof and indestructible' would protect him -- but it is a rare and the cap is spent. |
| Thran Portal | Would add a 4th basic land type for Domain (cutting Leyline Binding to {1}{W}), but it is a rare, it is only conditionally untapped ('enters tapped unless you control two or fewer other lands'), and its mana abilities cost an additional 1 life. |
| Vohar, Vodalian Desecrator | '{T}: Draw a card, then discard a card' is a repeatable Sheoldred trigger and the only repeatable way to bin permanents for Serra Paragon, but it is a 1/2 body and the drain rider needs instants/sorceries, of which this list runs 5. |
| Eerie Soultender | 'mill three cards' loads the graveyard for Serra Paragon and its graveyard-activated half is a third Zur rebuy that works after the card itself has died -- a genuinely good fit, cut only for slot count at 23 nonlands. |
| Phyrexian Espionage | 'Draw two cards', kicked for a discard, and with Sheoldred out it is also 4 damage -- but at MV 3 it competes with the six MV-3 animation targets. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' has 2 legal targets in this list (Cut Down x2). Too thin to spend a slot on. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.44 adj [MV 2.83 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  27.6%  prod  47.1%  gap -19.5pp  [OK]
  U  demand  17.2%  prod  41.2%  gap -24.0pp  [OK]
  W  demand  55.2%  prod  52.9%  gap  +2.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons up to 2 copies each
        Max common count is 2 (Citizen's Arrest 2, Destroy Evil 2, Impulse 2, Negate 2, Essence Scatter 2, Artillery Blast 2). Extinguish the Light appears once, in the sideboard only.
[PASS] Uncommons up to 2 copies each
        Max uncommon count is 2 (Prayer of Binding 2, Founding the Third Path 2, Braids's Frightful Return 2, Love Song of Night and Day 2, Cut Down 2, Phyrexian Missionary 2, Choking Miasma 2); Sheoldred's Restoration and Knight of Dusk's Shadow appear once each.
[PASS] Rares/mythics up to 1 copy each
        All five rare/mythic cards appear exactly once.
[PASS] Max 5 rares/mythics total across mainboard + sideboard
        Exactly 5: Zur, Eternal Schemer (M), Sheoldred, the Apocalypse (M), Serra Paragon (M), Leyline Binding (R), Caves of Koilos (R). The sideboard is entirely commons/uncommons as a direct consequence.
[PASS] All cards from the cube mainboard pool
        Phase 5C check 2 verified every name by exact string match against the working pool; 0 phantoms. Independently re-verified by the Challenger against all 271 pool entries.
[PASS] 40-card mainboard, 10-card sideboard
        40 and 10 exactly.
```