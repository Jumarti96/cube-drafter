---
deck_name: "wub-zur-saga-chapters"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-08-20T01:22:06Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  1x Caves of Koilos          WB painland, enters UNTAPPED. The single rare spent on mana
  2x Contaminated Aquifer     UB dual, enters tapped -- the pool's only UB land
  2x Idyllic Beachfront       WU dual, enters tapped
  2x Island                   Basic U source
  4x Plains                   Basic W source
  2x Sunlit Marsh             WB dual, enters tapped
  4x Swamp                    Basic B source
```

### CREATURES (5)

```
CMC  Card                            Qty   Color  Role                                          Rar
  2  Phyrexian Missionary            x2    W      Lifelink blocker / Zur rebuy (kicked)         U
  3  Zur, Eternal Schemer            x1    WUB    Engine / Payoff - animates Sagas and enchantments M
  4  Serra Paragon                   x1    W      Standalone clock / recursion of MV<=3 permanents M
  4  Sheoldred, the Apocalypse       x1    B      Standalone clock / draw tax                   M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                            Qty   Color  Role                                          Rar
  1  Cut Down                        x2    B      Interaction (early curve)                     U
  1  Runic Shot                      x1    W      Interaction - answers the mid-size creature band U
  2  Destroy Evil                    x2    W      Interaction (fat creature or enchantment)     C
  2  Impulse                         x2    U      Card selection - digs for the 1-of Zur        C
```

### OTHER SPELLS (11)

```
CMC  Card                            Qty   Color  Role                                          Rar
  2  Founding the Third Path         x2    U      Saga - free spell, mill, flashback; 2/2 animated U
  3  Braids's Frightful Return       x2    B      Saga - discard, creature recursion, drain; 3/3 animated U
  3  Citizen's Arrest                x2    W      Removal + 3/3 animation target                C
  3  Love Song of Night and Day      x2    W      Saga - draw, flier, counters; 3/3 animated    U
  4  Prayer of Binding               x2    W      Removal + 4/4 animation target                U
  5  The Cruelty of Gix              x1    B      Saga - discard, tutor, reanimate; 5/5 animated R
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                                                   Rar
Artillery Blast                 x1    W      Removal - Against evasion decks -- the cube's largest threat class at 51 cards / 20.7% density. Domain sets X = 1 + 3 = 4 off this deck's Plains/Island/Swamp, at instant speed. Honest limit: 'target tapped creature' means it answers attackers, not blockers. C
Essence Scatter                 x2    U      Counterspell - Against the cube's large creature top-end (Tyrannical Pitlord 6/6, Sphinx of Clear Skies 5/5, Tolarian Terror 5/5), which outclasses a 3/3 animated Saga. C
Knight of Dusk's Shadow         x1    B      Hate bear - Against the cube's lifegain class (22 cards, 8.9% density). 'Your opponents can't gain life' is the pool's only such effect, and a turn-10 control clock is exactly what opposing lifegain taxes. U
Negate                          x2    U      Counterspell - Against the cube's 18 enchantments and 15 artifacts. Note the mainboard is not blank against artifacts -- Prayer of Binding reads 'exile up to one target nonland permanent an opponent controls' -- but it is 2 copies at four mana; Negate answers the spell for two. It also answers all 6 of the cube's sweepers, every one of which is a noncreature spell, which matters for a deck that commits permanents to the board. C
Choking Miasma                  x2    B      Sweeper - The deck's answer to the conceded wide_boards class, and now its only sweeper of any kind after The Phasing of Zhalfir was cut. Board in against go-wide token boards. U
Extinguish the Light            x2    B      Removal - Against midrange and superfriends. Kept out of the mainboard because {2}{B}{B} would be a third double-black card alongside Sheoldred and The Cruelty of Gix; board it in when the matchup needs unconditional 'Destroy target creature or planeswalker' more than a clean curve. C
```

## ANALYSIS

### DECK IDENTITY

WUB control that plays seven Sagas for their chapters, then cashes the survivors in as creatures. The chapters do the work first -- The Cruelty of Gix strips a threat, tutors any card in the deck and reanimates; Founding the Third Path free-casts and rebuys spells; Braids's Frightful Return recurs creatures and drains; Love Song of Night and Day draws -- and Zur converts the enchantments that are still on the battlefield into deathtouch, lifelink, hexproof bodies sized by mana value. The honest shape of that plan is that Sagas expire: 'Sacrifice after III' is printed on all seven, so the durable half of the animation package is Citizen's Arrest x2 and Prayer of Binding x2, and a Saga's life as a body is fixed at the moment it enters -- lore counters are added automatically after each of your draw steps and cannot be stopped, so the only lever is which chapter you read it into. Sheoldred and Serra Paragon are the two clocks that win the games where Zur never shows up.


### WHAT THIS DECK IS, AND WHERE THE RARE BUDGET WENT

Of three sibling Zur builds from this pool, this is the one that plays the **Sagas for their chapters**
and treats the bodies as a second use. The restriction allows five rare/mythic cards total, and they
went to: **Zur** (mandatory), **The Cruelty of Gix** (the archetype's best Saga), **Sheoldred** and
**Serra Paragon** (two clocks that win without Zur), and **Caves of Koilos** — the only untapped
nonbasic land the deck can afford.

That last slot is not a rounding error. Every other WUB land available at common **enters tapped**,
and both painlands are rares. Spending a fifth of the restriction's entire power budget on a land is
the direct, visible cost of a three-colour deck under this cap.

### THE SAGA TIMER — STATE IT BEFORE ANYTHING ELSE

Every Saga in this deck prints **"Sacrifice after III."** That is the archetype's structural cost and
the grill was right that the first draft buried it. The honest split of the eleven animation targets:

| | Count | Behaviour |
|---|---|---|
| Permanent bodies | **4 of 11** | Citizen's Arrest x2, Prayer of Binding x2 |
| Bodies on a timer | **7 of 11** | The Cruelty of Gix, Founding the Third Path x2, Braids's Frightful Return x2, Love Song of Night and Day x2 |

And the window is **fixed at the moment the Saga enters**. "Add one after your draw step" is automatic
and cannot be stopped, so a Saga entering at chapter N is a Zur target for exactly `3 − N` of your draw
steps. You cannot stall one. The only lever is which chapter you read it into — which means chapter
value and body value are bought with the same decision, not both.

The structural gate prices this rather than narrating it: `animation_target` is declared at **11 raw
copies but 7.15 effective**, with the chapter-I Sagas at 0.6 and the copies this deck deliberately
enters at chapter II (The Cruelty of Gix, Braids's Frightful Return x2) at **0.25** — because those get
one opponent turn of body and zero attack steps. It still clears the threshold at p = 0.96.

### THE CRUELTY OF GIX IS A TUTOR, NOT A 5/5

The first draft claimed both, and they are mutually exclusive on the printed text. Read it into
chapter III and you reanimate immediately — then sacrifice it, so there is no body. Read it into
chapter II and you get `"Search your library for a card, put that card into your hand"` — an
**unconditional tutor**, and the only effect in any of the three sibling decks that finds Zur from the
*library* rather than the graveyard. The 5/5 exists only if you enter at chapter I and let it tick,
which costs the tutor's timing.

Play it as a tutor. That is what the 0.6 `zur_rebuy` weight prices, and it's why this deck reaches
Zur more reliably than its siblings despite being the slowest of the three.

### WHAT THE GRILL CUT, AND WHY IT MATTERS

**The Phasing of Zhalfir was in this deck and is not any more.** Three independent oracle-grounded
reasons, all found in Phase 9:

1. Chapters I and II read `"Another target nonland permanent phases out. It can't phase in for as long
   as you control this Saga"` — combined with `"Sacrifice after III"`, **chapter III hands both
   permanents back**. The removal was always temporary.
2. Chapter III reads `"Destroy all creatures. For each creature destroyed this way, its controller
   creates a 2/2 black Phyrexian creature token."` Against a board of 1/1 tokens that is an **upgrade
   for the opponent**. It was credited as the deck's wide-board answer; it isn't one. It also destroys
   Zur.
3. At `{2}{U}{U}` it was the least castable card in the deck — 48.6% on curve on the play.

Cutting it freed the rare slot that bought Caves of Koilos and removed blue's only double-pip demand.
This is the single clearest example in all three builds of why the grill gate exists: the shape judge
had *endorsed* this card, working from a sketch summary, with no reason to check the interaction
between two clauses printed on it.

### THE MANA IS THE REAL CONSTRAINT, AND THE AUDIT CANNOT SEE IT

The mana audit reports PASS on aggregate colour share. That measure is structurally blind to **double
pips**, which is where a three-colour tapland deck actually fails. A colour-aware simulation of the
final list, on the play:

| Card | Cost | On curve |
|---|---|---|
| Zur, Eternal Schemer T3 | `{W}{U}{B}` | ~64% |
| Citizen's Arrest T3 | `{1}{W}{W}` | ~63% |
| Serra Paragon T4 | `{2}{W}{W}` | ~60% |
| Sheoldred T4 | `{2}{B}{B}` | ~61% |
| The Cruelty of Gix T5 | `{3}{B}{B}` | ~51% |

Those are the true numbers, against a goldfish "played by turn 3" figure of 99% that counts **lands
only**. Plan around it: this deck is often a turn later than its curve suggests, which is part of why
the thesis turn is 10 rather than 8.

### PLAY PATTERN

Trade early with Cut Down and Destroy Evil, use Runic Shot on whatever attacked you last turn, and
let the Sagas accrue. Read The Cruelty of Gix into chapter II to find whichever piece the game is
missing — Zur if you are ahead, Sheoldred if you are behind. Serra Paragon is the late-game engine:
she rebuys spent Sagas from the graveyard at mana value 2 or 3 and re-runs their chapters, which is the
one place the Saga timer works *for* you rather than against you. Animate only Citizen's Arrests and
Prayers of Binding if you need a body that will still be there next turn.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (23 nonland):  1:3  2:8  3:7  4:4  5:1
Assembly (thesis turn 10, 17 cards seen):  [PASS]
  PASS  threat: 6 copies → p=0.94 (need ≥ 0.75)
  PASS  animation_target: 11 copies (effective 7.15: Founding the Third Path@0.6, Founding the Third Path@0.6, Love Song of Night and Day@0.6, Love Song of Night and Day@0.6, The Cruelty of Gix@0.25, Braids's Frightful Return@0.25, Braids's Frightful Return@0.25) → p=0.96 (need ≥ 0.75)
  PASS  removal: 9 copies → p=0.99 (need ≥ 0.75)
  PASS  zur_rebuy: 6 copies (effective 3.8: Braids's Frightful Return@0.7, Braids's Frightful Return@0.7, Phyrexian Missionary@0.5, Phyrexian Missionary@0.5, Serra Paragon@0.8, The Cruelty of Gix@0.6) → p=0.82 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 42%  T2 92%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The build originally credited The Phasing of Zhalfir here and that was wrong on the oracle text: chapter III reads 'Destroy all creatures. For each creature destroyed this way, its controller creates a 2/2 black Phyrexian creature token' -- against a board of 1/1 and 2/2 tokens that is a net upgrade for the opponent, not an answer. The card has been cut. The deck now has no mainboard sweeper: mitigating would mean maindecking Choking Miasma at {1}{B}{B}, making black a third double-pip demand alongside Sheoldred {2}{B}{B} and The Cruelty of Gix {3}{B}{B} on a manabase with 8 black sources. Choking Miasma x2 boards in instead, and is near-one-sided because 9 of the 11 animation targets are 3/3 or larger when animated.
  OK        single_large_threat: Citizen's Arrest, Prayer of Binding, Destroy Evil, Runic Shot
  OK        noncreature_permanents: Prayer of Binding, Destroy Evil
  CONCEDED  stack: The list runs no mainboard counterspells. This build's answers are permanents that Zur later animates, and every counterspell slot would be a card that can never become a body -- which is the whole thesis. The Cruelty of Gix chapter I ('Target opponent reveals their hand. You choose a creature or planeswalker card from it. That player discards that card') strips the threat pre-emptively instead, when the Saga is read into chapter I. Negate x2 and Essence Scatter x2 board in, and Negate answers all 6 of the cube's sweepers because every one of them is a noncreature spell.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census: GY hate = 0; independently confirmed by a full 271-card pool scan in the grill), so the class is unanswerable by construction rather than by omission. Partial mitigation only: Citizen's Arrest and Prayer of Binding exile rather than destroy, denying recursion targets, and The Cruelty of Gix chapter III ('Put target creature card from a graveyard onto the battlefield under your control') removes one card from an opposing graveyard and turns it into a threat -- a single 1-of chapter, not coverage of the class.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Zur's '{1}{W}: Target non-Aura enchantment you control becomes a creature' is a repeatable mana sink with 11 legal targets (The Cruelty of Gix 1, Prayer of Binding 2, Citizen's Arrest 2, Braids's Frightful Return 2, Love Song of Night and Day 2, Founding the Third Path 2). It is NOT unbounded, and the earlier claim that it was has been corrected: 7 of those 11 are Sagas carrying 'Sacrifice after III', so the sink shrinks as the game goes long and only Citizen's Arrest x2 and Prayer of Binding x2 are permanently available. Serra Paragon converts flood directly -- 'you may play a land from your graveyard' -- and also recasts spent Sagas from the graveyard, which is what actually refills the sink. Impulse x2 bottoms three cards per cast, and The Cruelty of Gix chapter II turns a spare five mana into any card in the deck. |
| screw | mitigation | 10 of 23 nonland cards cost 2 or less (Cut Down x2, Destroy Evil x2, Impulse x2, Founding the Third Path x2, Phyrexian Missionary x2) plus Runic Shot at 1, and Phyrexian Missionary is a 2/3 lifelink blocker that holds the ground on two lands. Read ahead is the Saga-specific mitigation: 'Choose a chapter and start with that many lore counters' means a Saga drawn late does not need three more turns -- Braids's Frightful Return can enter on chapter II for an immediate regrowth. The honest cost, per 'Skipped chapters don't trigger': entering high forfeits the earlier chapters AND shortens the card's life as an animation target. Goldfish reports 88% keepable and 91% for three lands by turn 3. |
| decapitation | mitigation | This build answers decapitation by not routing the whole kill through Zur. Sheoldred (4/5 deathtouch, 'Whenever an opponent draws a card, they lose 2 life') and Serra Paragon (3/4 flier) are clocks on their own oracle text and win the games where Zur is never drawn -- the majority, since Zur is a 1-of mythic the restriction caps at one copy. On top of that the list carries six weighted rebuy copies across four cards: Braids's Frightful Return x2 chapter II, Phyrexian Missionary x2 kicked, Serra Paragon recasting Zur (mana value 3) from the graveyard to the battlefield, and The Cruelty of Gix chapter II, the only effect in either sibling build that finds Zur from the LIBRARY. Effective 3.8 copies, p=0.82 by the thesis turn. Zur's animation also has no duration clause, so an enchantment animated before he dies stays a creature -- but note precisely what is lost: deathtouch, lifelink and hexproof come from a STATIC ability on Zur ('Enchantment creatures you control have...'), so the surviving body is a vanilla N/N once he is gone. |
| gas-out | mitigation | This is the build's strongest axis. 11 of 23 nonland cards generate or replace cards: Impulse x2, Love Song of Night and Day x2 chapter I ('You and target opponent each draw two cards'), Braids's Frightful Return x2 chapter III (which draws only if the opponent DECLINES to sacrifice -- their choice), Founding the Third Path x2 (chapter I free-casts a spell, chapter III copies one from the graveyard), Serra Paragon (a permanent recast from the graveyard every turn), The Cruelty of Gix (chapter II is an unconditional library tutor), and Sheoldred, which converts the opponent's refuelling into 2 life loss per card. Serra Paragon is doubly relevant here because a Saga that sacrificed itself after chapter III is in the graveyard at mana value 2 or 3, i.e. back in her range. |
| raced | mitigation | Evasion is the cube's largest threat class (51 cards, 20.7% density) and this deck's clock is turn 10, so racing is the real risk -- and it got WORSE in grill repair, because the mainboard wrath was cut. That was still correct: The Phasing of Zhalfir's chapter III reads 'For each creature destroyed this way, its controller creates a 2/2 black Phyrexian creature token', which against a wide token board upgrades the opponent's board rather than clearing it, and it destroyed Zur along with everything else. What remains is 9 pieces of interaction, now including Runic Shot for the mid-size band, plus lifegain to stabilise: Phyrexian Missionary x2 has printed 'Lifelink', Prayer of Binding gains 2 on entry, Sheoldred gains 2 per card drawn, and Zur-animated bodies have lifelink WHILE ZUR LIVES. Choking Miasma x2 is the sweeper out of the board. |
| disruption-fizzle | mitigation | Sagas resist interaction on the critical turn because their value is spread across chapters rather than concentrated in one resolution: a Saga that resolves has already banked one chapter before any answer arrives, and Read ahead lets you choose which. The Cruelty of Gix entered on chapter II is a tutor that has already resolved before removal matters. Zur's animation likewise has no duration clause, so killing him in response to the {1}{W} activation still leaves an animated body -- a vanilla one, per the decapitation entry. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Urza Assembles the Titans | MV 5 would animate to a 5/5, but chapter II reads 'You may put a planeswalker card with mana value 6 or less from your hand onto the battlefield' and the entire WUB pool contains exactly 2 planeswalkers (Liliana of the Veil, Karn, Living Legacy), both mythic. Running the Saga plus a planeswalker spends 2 of the 4 non-Zur rare slots on a two-card synergy that needs both in hand; chapter I only puts a card in hand if it is a planeswalker. |
| Liliana of the Veil | A mythic slot, and only reachable as an Urza Assembles payoff or on its own. Its '+1: Each player discards a card' is symmetric, which fights a control deck that wants to hold flash answers -- the shape judge rejected exactly this reasoning in the attrition sketch. |
| Karn, Living Legacy | The second half of the Urza Assembles package; a mythic slot for a 4-mana planeswalker whose +1 makes a Powerstone that 'can't be spent to cast a nonartifact spell', i.e. it does not help cast anything in this deck. |
| Leyline Binding | MV 6 is the single largest animation target in the pool, but it is a rare and this build's four non-Zur rare slots went to The Cruelty of Gix, The Phasing of Zhalfir, Sheoldred and Serra Paragon. It is the first card to try if you want to swap out a mythic. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' would also exile this deck's own Founding the Third Path x2 (MV 2) and Phyrexian Missionary x2 (MV 2) -- 4 of 23 nonland cards -- and it is a rare in a fully spent budget. |
| Stronghold Arena | Rejected as a weak keystone by the shape judge: the trigger requires 'whenever one or more creatures you control deal combat damage to a player', so it needs the Zur-animated board it is supposed to help assemble. Its kicker {G} is also uncastable in WUB, so the 'gain 3 life for each time it was kicked' clause is limited to the {W} half. |
| Ertai Resurrected | A flash counter-or-kill is genuinely strong in a control deck, but it is a rare competing with the two Sagas that define this build, and unlike them it is not an animation target. |
| Silver Scrutiny | 'Draw X cards' with flash at X<=3 is a fine control refuel, but it is a rare and the budget is spent; it also does nothing for the board, which is what a turn-10 deck is short of. |
| Vohar, Vodalian Desecrator | Cut from the winning sketch. '{T}: Draw a card, then discard a card' loops cards and bins permanents for Serra Paragon, but it is a 1/2 body and its drain rider only fires on discarding an instant or sorcery, of which this list runs 6 of 23. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' has only 2 legal targets in this list (Cut Down x2). Too thin for a 4-mana 3/3. |
| Aether Channeler | A rare in a spent budget; its three modes are all fine but none of them is an enchantment, so it contributes nothing to the animation plan. |
| Ratadrabik of Urborg | 'Whenever another legendary creature you control dies, create a token that's a copy of that creature' would protect the 1-of Zur, but it is a rare and the budget went to cards that also advance the Saga plan. |
| Extinguish the Light | Moved to the SIDEBOARD rather than cut. At {2}{B}{B} it would have made black this deck's third double-pip demand alongside Sheoldred {2}{B}{B} and The Cruelty of Gix {3}{B}{B}, on a manabase with 8 black sources and no untapped nonbasic. |
| Rona's Vortex | Cut for Founding the Third Path. Its 'Return target creature or planeswalker you don't control' is a targeted effect that only delays, and a control deck at thesis turn 10 would rather have a permanent that becomes a body. |
| Ertai's Scorn | 'Counter target spell' at {1}{U}{U} is the best hard counter available, but every counterspell slot is a card that can never become an animation target, and the deck's coverage declaration concedes the stack class deliberately for that reason. |
| Shadow Prophecy | Domain instant, X = 3 here: 'put up to two of them into your hand'. Cut in favour of Impulse, which looks at four cards -- the deck's selection job is finding one specific 1-of (Zur) and depth beats width for that. |
| Phyrexian Espionage | 'Draw two cards', kicked for a discard, and 4 damage with Sheoldred out -- but at MV 3 it competes with six MV-3 permanents that Zur can animate. |
| Crystal Grotto | Deliberately not played despite being a common. '{1}, {T}: Add one mana of any color' taxes coloured mana one generic, so it is not a free coloured source; basics were preferred. (This was learned the hard way on the sibling build, where the mana audit was counting it as an untaxed source in all five colours.) |
| Caves of Koilos | Untapped WB painland, and this deck has double-W and double-B demands that badly want it -- but it is a RARE and all five rare slots went to spells. This is the direct, stated cost of buying both The Cruelty of Gix and The Phasing of Zhalfir. |
| Adarkar Wastes | Untapped WU painland; would help cast The Phasing of Zhalfir {2}{U}{U}. Same reason: rare, budget spent. |
| Thran Portal | Would fix all three colours and is untapped early, but it is a rare, its mana abilities cost an additional 1 life, and it is only conditionally untapped ('enters tapped unless you control two or fewer other lands'). |
| Plaza of Heroes | '{T}: Add one mana of any color. Spend this mana only to cast a legendary spell' would fix Zur specifically, and its exile ability grants a legendary creature hexproof and indestructible. A rare; budget spent. |
| The World Spell | Costs {5}{G}{G}; green is not castable in this deck's colours at all. |
| Vesuvan Duplimancy | Triggers only on 'a spell that targets only a single artifact or creature you control'. This list runs 0 such spells. |
| Combat Research | An Aura. Zur's ability reads 'Target NON-AURA enchantment', so it is explicitly excluded from the animation plan. |
| Sphinx of Clear Skies | A mythic 5/5 flier that does not interact with enchantments or Sagas; the budget is better spent on the two Sagas that define the archetype. |
| Tolarian Terror | 'costs {1} less for each instant and sorcery card in your graveyard' -- this list runs 6 instants/sorceries and does not self-mill, so it lands turn 7+ at best. |
| Braids, Arisen Nightmare | Its end-step trigger wants to sacrifice permanents; this deck's Sagas and enchantments are its threats, so feeding Braids fights the animation plan. |
| Anointed Peacekeeper | A rare 3/3 that taxes one named card; the budget went to cards that generate chapters. |
| Archangel of Wrath | A rare 3/4 flier with lifelink; a fine body, but it is not an enchantment and does not advance the Saga plan. |
| Karn's Sylex | 'Destroy each nonland permanent with mana value X or less' is symmetric mass removal that eats this deck's own Sagas and enchantments; also a mythic. |
| Drag to the Bottom | Domain sweeper giving -X/-X where X = 1 + basic land types = 4 here; it kills this deck's own 3/3 and 4/4 animated bodies as readily as the opponent's, and The Phasing of Zhalfir already supplies a wrath. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.03 adj [MV 2.65 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  30.0%  prod  52.9%  gap -22.9pp  [OK]
  U  demand  16.7%  prod  35.3%  gap -18.6pp  [OK]
  W  demand  53.3%  prod  52.9%  gap  +0.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons up to 2 copies each
        Max common count is 2 (Citizen's Arrest 2, Destroy Evil 2, Impulse 2, Negate 2, Essence Scatter 2, Extinguish the Light 2); Artillery Blast appears once.
[PASS] Uncommons up to 2 copies each
        Max uncommon count is 2 (Phyrexian Missionary 2, Founding the Third Path 2, Braids's Frightful Return 2, Love Song of Night and Day 2, Prayer of Binding 2, Cut Down 2, Choking Miasma 2); Runic Shot and Knight of Dusk's Shadow appear once each.
[PASS] Rares/mythics up to 1 copy each
        All five rare/mythic cards appear exactly once.
[PASS] Max 5 rares/mythics total across mainboard + sideboard
        Exactly 5: Zur, Eternal Schemer (M), Sheoldred, the Apocalypse (M), Serra Paragon (M), The Cruelty of Gix (R), Caves of Koilos (R). The sideboard is entirely commons/uncommons as a direct consequence.
[PASS] All cards from the cube mainboard pool
        Phase 5C check 2 verified every name by exact string match against the working pool; 0 phantoms. Independently re-verified by the Challenger against all 271 pool entries.
[PASS] 40-card mainboard, 10-card sideboard
        40 and 10 exactly.
```