---
deck_name: "ub-rupture-control"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-08-04T17:20:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  1x Watery Grave  As this land enters, you may pay 2 life. If you don't, it enters tapped.
  2x Contaminated Aquifer  This land enters tapped.
  7x Swamp
  8x Island
```

### CREATURES (6)

```
CMC  Card                         Qty   Color  Role                                  Rar
  3  Alpharael, Dreaming Acolyte   x2    UB     Turn-3 discard outlet                 U
  3  Xu-Ifit, Osteoharmonist       x1    B      Reanimation engine (payoff)           R
  6  Mechanozoa                    x1    U      Finisher / reanimation target         C
  9  Bygone Colossus               x2    C      Finisher / reanimation target         U
```

### INSTANTS & SORCERIES (12)

```
CMC  Card                         Qty   Color  Role                                  Rar
  1  Zero Point Ballad             x1    B      Scalable wrath + reanimator           R
  2  Divert Disaster               x2    U      Cheap counter                         C
  2  Hymn of the Faller            x1    B      Cantrip fill                          U
  3  Unravel                       x2    U      Hard counter                          U
  4  Gravkill                      x2    B      Exile removal                         C
  4  Lost in Space                 x1    U      Answer to a resolved artifact         C
  4  Scour for Scrap               x2    U      Tutor for the payload (artifact)      U
  6  Singularity Rupture           x1    UB     Wrath + bulk self-mill                R
```

### OTHER SPELLS (4)

```
CMC  Card                         Qty   Color  Role                                  Rar
  2  Wurmwall Sweeper              x1    C      Cheap surveil / Station body          C
  3  Fell Gravship                 x2    B      Self-mill + rebuy                     U
  4  Uthros Scanship               x1    U      Unconditional discard outlet          U
```

## SIDEBOARD (10)

```
Card                         Qty   Color  Role / When to board in               Rar
Annul                         x2    U      Counter artifact/enchantment          U
Chrome Companion              x1    C      Repeatable graveyard hate             C
Dauntless Scrapbot            x1    C      One-shot graveyard exile              U
Lost in Space                 x1    U      Second answer to a resolved artifact  C
Tragic Trajectory             x2    B      One-mana removal (Void)               U
Desculpting Blast             x1    U      Instant-speed bounce                  U
Dubious Delicacy              x1    B      Flash removal + lifegain vs racing    U
Quantum Riddler               x1    U      Turn-2 Warp 4/6 flier vs aggro        M
```

## ANALYSIS

### DECK IDENTITY

U/B Rupture-Control. Two wraths ARE the deck, and both of them work for you twice. Singularity Rupture reads 'Destroy all creatures, then any number of target players each mill half their library' — 'any number of target players' includes you, so the card that empties the opponent's board simultaneously buries roughly a dozen of your own cards, which is exactly where a nine-mana 9/9 needs to be. Zero Point Ballad is the second sweeper and its own reanimator, and at X=6 it kills every relevant body in the cube while a toughness-9 Bygone Colossus walks through untouched. Xu-Ifit, Osteoharmonist then rebuilds alone from the yard the wraths stocked, and four counterspells protect the empty-board turns in between.

### THE WRATH THAT LOADS YOUR OWN GRAVEYARD

`Singularity Rupture` reads *"Destroy all creatures, then **any number of target players** each mill half their library, rounded down."* Almost every player reads that second clause as a way to mill the opponent. In this deck it is pointed at **yourself**.

By turn 6 the library is around 27 cards, so targeting yourself buries **13** — and 13 cards off the top of a deck containing two `Bygone Colossus` is a far better chance of finding one than any surveil in these colours. One card is a board wipe and the deck's largest self-mill effect simultaneously.

There is a sequencing cost, and it is worth stating plainly rather than discovering it mid-game: **`Xu-Ifit, Osteoharmonist` is a 2/3 creature, and "Destroy all creatures" destroys it.** Casting Rupture with Xu-Ifit already on the battlefield kills your own engine. The correct line is to hold Xu-Ifit until after the wrath — T6 Rupture, T7 Xu-Ifit, T8 first activation, T9 first attack, which is exactly the thesis turn with no slack. That is precisely why `Alpharael, Dreaming Acolyte` and `Uthros Scanship` matter so much here: the deck strongly prefers to have the Colossus binned and Xu-Ifit already online *before* it ever needs Rupture, using the sweeper as a reset rather than as the plan.

### THE WARP TRAP

`Bygone Colossus`'s entire text box is `Warp {3}`, and it is tempting to read that as "a 9/9 for three mana." It is not.

The reminder text reads *"Exile this creature at the beginning of the **next** end step."* Warp is a sorcery-speed cast, so you cast it in your own main phase and "the next end step" is **your own**. With no haste it cannot attack that turn, and it is exiled before your opponent untaps, so it never blocks. **A Warped Bygone Colossus does nothing** except bank the card in exile for a later {9} cast and satisfy Void.

That matters *less* for this deck than for its midrange sibling, and the reason is the clock. At thesis turn 9 on 18 lands, **hard-casting the Colossus for {9} is a real line here** — this is the one build in the set slow enough that nine mana actually arrives. `Scour for Scrap` finds it, and you cast it for full price.

Note the contrast with `Mechanozoa`: it has an enters trigger (*"tap target artifact or creature an opponent controls and put a stun counter on it"*) that resolves before the end-step exile, so its Warp buys a real effect even though it buys no body. Of the three Warp cards in this mainboard, only one does anything on the turn it is Warped.

An earlier version of this analysis credited the Colossus's Warp as a graveyard-independent way to attack. It is not, and the deck's assembly numbers were recomputed with it weighted 0.15 instead of 0.6 — the check still passes at p=0.76, on `Scour for Scrap`, the hard-cast, and `Mechanozoa`.

### THE SWEEPER YOUR OWN FINISHER SURVIVES

`Zero Point Ballad`: *"Destroy all creatures with toughness X or less."* At X=6 this is a seven-mana wrath — and `Bygone Colossus` has toughness **9**.

I checked that against the pool rather than assuming it: **only 9 of the 158 creatures in this cube have toughness 7 or more.** X=6 clears **94.3%** of the cube's creature base while your 9/9 walks through untouched. That is not a symmetric sweeper; it is a one-sided one that happens to be printed symmetrically.

The card's *other* half is nearly dead here and the deck runs it anyway. *"If X is 6 or more, return a creature card put into a graveyard **this way** to the battlefield"* returns only something the spell itself just killed — and at X=6 that means toughness 6 or less, which by construction **excludes the toughness-9 Colossus**. It can never reach this deck's finisher. It carries a payoff weight of 0.3 for exactly that reason.

### FIVE ARTIFACTS WAS NOT ENOUGH

The build's one BLOCKING grill finding was a counting problem, not a card-quality problem.

`Alpharael, Dreaming Acolyte` — *"draw two cards. Then discard two cards **unless you discard an artifact card**"* — was credited as the deck's turn-3 route to the graveyard. But the artifact-card count was **5 of 22**. On the other branch Alpharael is draw-two-discard-two: net zero, and you might not have the Colossus to pitch.

The fix was not to add more artifacts for their own sake, but to add cards that are *both* halves at once:

| Card | It bins | It is also an artifact card |
|---|---|---|
| `Uthros Scanship` | "draw two cards, then discard a card" — **no condition at all** | ✓ |
| `Wurmwall Sweeper` | "surveil 2" for {2} | ✓ |

Artifact cards went **5/22 → 7/22**, and the deck gained its first unconditional discard outlet — one that bins the Colossus with nothing else in hand.

### THE FAST LINE IS A 3.2% DRAW

The skeleton that won the Step-0 judging claimed a turn-5 first activation and "a two-turn margin" against the turn-9 thesis. Simulated against the actual 40-card list, that line requires the Colossus, Alpharael, and Xu-Ifit all to arrive on schedule:

| Line | Probability |
|---|---|
| Colossus in the first 9 cards | 40.6% |
| Colossus **and** Alpharael by turn 3 | 15.2% |
| …**and** Xu-Ifit by turn 4 | **3.2%** |

So the margin is not real, and this deck does not run on that line. It runs on the **converging** one: T3 Xu-Ifit → T4 `Scour for Scrap` at instant speed fetching the Colossus → T5 discard it and tap Xu-Ifit → attacks on T6, T7, T8 for 27. That lands on the thesis turn's shoulder, not two turns clear of it. Recorded here rather than papered over.

### FELL GRAVSHIP'S TRAP, AND WHY IT IS SURVIVABLE HERE

*"mill three cards, **then** return a creature or Spacecraft card from your graveyard to your hand"* — no "may", no "target". Mandatory. On turn 3 with an empty yard, measured over 200,000 shuffles of this list: mill-3 bins a Colossus **14.6%** of the time, and in **60.2%** of those the Colossus is the *only* legal return target, so the trigger pulls it straight back out.

My original defence of this card was wrong in scope — I justified a turn-3 credit with a turn-6 wrath argument. The honest defence is **latency, not avoidance**: the Colossus goes to *hand*, where `Alpharael` or `Uthros Scanship` re-bins it next turn. One extra card of delay, not a lost payload — and note that Warp is NOT the recovery here, per the Warp trap above. And from turn 6 onward, once either wrath has resolved, every creature that was on the battlefield is in a graveyard and the clause becomes a free choice.

### WHAT THIS DECK GENUINELY LOSES TO

A turn-4 kill. This is the slowest of the four builds and it says so in writing. The cube's evasion density is 22.5% (56 of 249 nonland cards) and the first wrath is not castable until turn 6. Mitigating that would mean spending Interaction slots on cheap creature removal instead of the four counterspells — and the counterspells are what protect the empty-board turns between a wrath resolving and the next Xu-Ifit activation, which is the exact window this archetype loses in. The sideboard carries the answer instead: `Quantum Riddler` deploys a **4/6 flier on turn 2** off `Warp {1}{U}`, and `Dubious Delicacy` is flash removal plus three life.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:1  2:4  3:7  4:6  6:2  9:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 3.4: Bygone Colossus@0.15, Bygone Colossus@0.15, Mechanozoa@0.6, Zero Point Ballad@0.3, Scour for Scrap@0.6, Scour for Scrap@0.6) → p=0.76 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7: Wurmwall Sweeper@0.6, Hymn of the Faller@0.5, Singularity Rupture@0.9) → p=0.95 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 19%  T2 71%  T3 96%
Coverage:  [PASS]
  OK        wide_boards: Singularity Rupture, Zero Point Ballad
  OK        single_large_threat: Gravkill, Unravel, Divert Disaster, Lost in Space
  OK        noncreature_permanents: Lost in Space
  OK        stack: Unravel, Divert Disaster
  CONCEDED  graveyard: U/B contains no mainboard-quality graveyard answer in this pool; Chrome Companion and Dauntless Scrapbot are colourless and too passive to maindeck, so they are sideboard slots.
```

- All four structural checks report PASS (curve, assembly, goldfish, coverage) - no WARN-tier flags remain.

- For the record, two earlier states were repaired: the first pass failed assembly at p=0.70 and failed coverage on a phantom card name (Annul was declared for the 'stack' class but lives in the sideboard); the Phase 9 grill then produced one BLOCKING finding (no unconditional discard outlet, with Alpharael's artifact feed at only 5 of 22), repaired by adding Uthros Scanship and Wurmwall Sweeper.

- The skeleton's claimed 'two-turn margin' does not survive measurement - the fast line is a 3.2% draw. The deck runs on the converging line instead and lands on the thesis turn, which is recorded in count_dependent_verdicts rather than papered over.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Zero Point Ballad is '{X}{B}', so every surplus land raises the sweeper's ceiling. Bygone Colossus can be hard-cast for {9} as a permanent 9/9 rather than a Warped one-shot, and Mechanozoa for {4}{U}{U}. Fell Gravship x2 and Wurmwall Sweeper carry 'Station (Tap another creature you control...)' and become artifact creatures at 8+ and 4+ charge counters respectively, so an idle board converts into flying bodies - noting honestly that Station costs creature taps rather than mana, so it is a board sink, not a mana sink. Three genuine mana sinks plus two Station outlets. (An earlier version of this entry credited Starbreach Whale with Station; its oracle has no Station clause - it is a Creature - Whale - and the claim was struck in the Phase 9 grill.) |
| screw | mitigation | 12 of 22 nonland cards cost 3 or less, and the deck is comfortable doing nothing early: the two-land keeps hold Wurmwall Sweeper ({2}, surveil 2) or Divert Disaster ({1}{U}, a counter that taxes for {2}). Scour for Scrap is an instant, so it can be held for whatever mana is available. The goldfish check reports 81% keepable hands and 92% to reach three lands by turn 3. |
| decapitation | mitigation | Xu-Ifit answered on sight leaves three things intact. Scour for Scrap x2 finds the Colossus with certainty ('Search your library for an artifact card, reveal it, put it into your hand'), and at thesis turn 9 on 18 lands this deck genuinely can HARD-CAST it for {9} - the slowest of the four builds is the one where that line is real. Mechanozoa is hard-castable at {4}{U}{U} for a 5/5. And four counterspells plus two wraths mean the deck can simply keep the board empty and win late. What is NOT a route, corrected from an earlier version of this record: Warping the Colossus for {3} does not deploy an attacker (see warp_correction), and Zero Point Ballad's reanimation rider caps the returned body's toughness at 6, so it can never reach a toughness-9 Colossus. |
| gas-out | mitigation | 10 of 22 nonland cards replace themselves or better - 6 unconditionally, 4 conditionally (split recorded in count_dependent_verdicts). More importantly, Singularity Rupture is the answer to running out of cards rather than a cause of it: with a library of about 27 on turn 6 it buries 13, and Xu-Ifit converts those into a body per turn at zero cards from hand, so an empty hand is the position this deck is built to win from. Disclosed sequencing cost, which the grill correctly flagged as missing: Rupture reads 'Destroy all creatures', and Xu-Ifit is a 2/3 creature, so casting Rupture with Xu-Ifit already deployed kills your own engine. The correct line is to hold Xu-Ifit and cast it AFTER the wrath - turn 6 Rupture, turn 7 Xu-Ifit, turn 8 first activation, turn 9 first attack. That is exactly the thesis turn, and it is why the Alpharael and Fell Gravship route matters: the deck prefers to have the Colossus in the yard and Xu-Ifit already online before it ever needs Rupture. |
| raced | accepted | This is the slowest of the four builds — thesis turn 9, first wrath at 6, first reanimation at 5 in the best case. Against the cube's 22.5% evasion density (56 of 249 nonland cards) it can be dead before Singularity Rupture is castable. What mitigating would cost: the deck would have to spend Interaction slots on cheap creature removal instead of the four counterspells, and the counterspells are what protect the empty-board turns between a wrath and the next Xu-Ifit activation — the exact window this archetype loses in. Zero Point Ballad at low X and Gravkill x2 are the compromise, and Tragic Trajectory x2 is the sideboard's answer. The clock is genuinely accepted, not hand-waved: a turn-4 kill beats this deck. |
| disruption-fizzle | mitigation | The critical turn is Singularity Rupture at {3}{U}{B}{B}, a sorcery cast into open mana - the honest exposure. Three things blunt it: Unravel x2 and Divert Disaster x2 can be held the turn before to strip the counterspell; Zero Point Ballad is a second wrath on an entirely different cost line ({X}{B}, castable from three mana upward); and the graveyard route does not depend on Rupture at all - Alpharael x2, Fell Gravship x2, Uthros Scanship and Wurmwall Sweeper fill the yard from turn 2-3, so a countered Rupture costs a card and a turn but not the plan. Xu-Ifit's own activation is 'Activate only as a sorcery' on your turn with mana open, protected by the same four counterspells. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Starwinder | 7/7 rare for {5}{U}{U}. Hard-cast it needs seven lands, unreachable before turn 7 on 18 lands; reanimated it loses 'Whenever a creature you control deals combat damage to a player, you may draw that many cards' to Xu-Ifit's no-abilities clause and is a vanilla 7/7 — two power less than Bygone Colossus for a whole rare slot. Mechanozoa takes the slot at zero rare cost. |
| Cerebral Download | 'Surveil X, where X is the number of artifacts you control.' Artifact permanents this deck actually controls on turn 5 are Fell Gravship x2 and, after a reanimation, a Colossus — typically 1-2. A five-mana draw-three with surveil 1 is not the yard-loader the slot needs. This was the shape judge's flag against a rejected sketch's keystone, applied to the winning sketch's own copy. |
| Archenemy's Charm | Rare at {B}{B}{B} against 11 black sources in 18 lands, in a deck whose turn-3 play is already {1}{B}{B}. Its exile mode duplicates Gravkill at {3}{B}, and the classes it beats barely exist here: 0 creatures with printed indestructible, 1 with hexproof, 5 with ward, out of 249 nonland cards. |
| Depressurize | '-3/-0 until end of turn. Then if that creature's power is 0 or less, destroy it' — a fine 2-mana answer to small bodies, but this deck already runs two wraths for exactly that class and Interaction was at the 45% band ceiling; the slot went to keeping Threats above the point where a single stranded Colossus loses the game. |
| Decode Transmissions | 'You draw two cards and lose 2 life' with a Void upgrade. Pure card draw with no graveyard interaction — under this pipeline the Engine residue is justified only because every card in it also loads the yard or finds the payload, and this one does neither. |
| Mouth of the Storm | 6/6 flier for {6}{U}; a legitimate body but at MV 7 it is a turn-7 play in a deck already committed to a {3}{U}{B}{B} turn-6 wrath, and reanimated it loses flying and Ward {2} to the no-abilities clause. |
| Monoist Circuit-Feeder | 4/4 flier at MV 6 whose ETB scales with 'the number of artifacts you control' — 5 artifact cards of 22 nonland cards, and 1-2 on the battlefield in practice. |
| Umbral Collar Zealot | 'Sacrifice another creature or artifact: Surveil 1' is free and repeatable, but this deck runs 3 creature-threats it will not sacrifice and has no token generator, so each activation costs a real permanent. |
| Swarm Culler | 'Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card' — a 2/4 flier with a sacrifice-fuelled draw, but the Threats row is already a declared deviation and this deck has nothing it wants to sacrifice. |
| Embrace Oblivion | 'sacrifice an artifact or creature. Destroy target creature or Spacecraft' — 1-mana removal, but the additional cost is a real permanent and this control build has only 5 artifact cards and 7 creature cards in the whole mainboard to pay it with. |
| Faller's Faithful | 3/1 with 'destroy up to one other target creature. If that creature wasn't dealt damage this turn, its controller draws two cards' — the two-card refund to the opponent is a genuine cost in a control deck whose plan is to run them out of resources. |
| Vote Out | 'Convoke... Destroy target creature'. Convoke wants a board of creatures; this deck runs 7 creature cards total and spends most turns with an empty battlefield by design. |
| Sinister Cryologist | 2/3 with ETB -3/-0 — a temporary combat effect, not removal, and this deck wants its interaction to answer permanently. |
| Mental Modulation | 'Tap target artifact or creature. Draw a card' at {U} on your turn — a tempo cantrip with no permanent answer attached, and no tap-matters payoff in this list to exploit it. |
| Sothera, the Supervoid | Mythic. 'Whenever a creature you control dies' needs your own creatures to die repeatedly; this list has 7 creature cards and 0 sacrifice outlets. |
| Dawnsire, Sunstar Dreadnought | Mythic 20/20 at MV 5, but it returns as a Spacecraft with zero charge counters and needs 20 to become a creature; total power available to Station in this list is far short of 20. |
| Rescue Skiff | White. 'return target creature or enchantment card from your graveyard to the battlefield' would return Bygone Colossus with abilities intact, but U/W fixing is Idyllic Beachfront x2, both 'This land enters tapped', and there is no U/W shockland — a third colour of tapped-only fixing cannot support a {3}{U}{B}{B} turn-6 wrath. |
| Scout for Survivors | White, and off-thesis regardless: 'creature cards with total mana value 3 or less' cannot return any of this deck's finishers — 0 of the 3 threats are MV 3 or less. |
| Seedship Broodtender | Requires {G}. Its uncapped reanimation is the B/G build's engine; splashing green would need Tangled Islet or Breeding Pool, i.e. a second off-colour pair on top of an already triple-pip curve. |
| Starbreach Whale | 3/5 flier with 'surveil 2' and 'Warp {1}{U}' — a real early blocker, but surveil 2 bins a specific 9-drop only when it is in the top two, and at {4}{U} it is three mana more than Wurmwall Sweeper for the identical ETB. Cut in the Phase 9 grill for Wurmwall Sweeper and Uthros Scanship, both of which are also ARTIFACT cards and so feed Alpharael's discard clause. Kept in mind as an anti-race sideboard option; Quantum Riddler's Warp {1}{U} 4/6 flier is strictly the larger body. |
| Susurian Dirgecraft | 'each opponent sacrifices a nontoken creature OF THEIR CHOICE' — the opponent picks, so against any board with a second body the protected threat is exactly the creature that does not die. The role it was boarded for (edict vs hexproof/ward) is contradicted by its own oracle, and the class is 6 creatures of 158 cube-wide anyway. Cut in the grill for Dubious Delicacy. |
| Codecracker Hound | 'look at the top two cards of your library. Put one into your hand and the other into your graveyard' is a guaranteed bin of one of two, better than surveil 1 — but in a deck that can tutor the payload with Scour for Scrap and bin it unconditionally with Uthros Scanship, blind selection from two cards is the worse rate, and it is not an artifact card so it does not feed Alpharael. |
| Timeline Culler | 'You may cast this card from your graveyard using its warp ability. Warp—{B}, Pay 2 life' is the only self-recurring card in U/B and a repeatable one-mana Void switch. Excluded on slot pressure rather than power: the deck has exactly one Void-conditional card in the mainboard (Hymn of the Faller x1), already turned on by 8 of 22 cards, so a dedicated Void enabler buys almost nothing here. |
| Voidforged Titan | 5/4 artifact creature whose Void trigger draws each end step off this deck's 8 of 22 enablers, and an artifact card for Alpharael. Excluded because the Threats row is already a declared 0.8-card deviation and it dies to the deck's own Zero Point Ballad at X=6 (toughness 4), where Bygone Colossus at toughness 9 does not. |
| Anticausal Vestige | Rare 7/5 colourless with Warp {4}, whose leave-the-battlefield trigger fires on its own Warp exile and can 'put a permanent card with mana value less than or equal to the number of lands you control from your hand onto the battlefield tapped' — on 9 lands that cheats Bygone Colossus (MV 9) in from hand with no graveyard at all. Genuinely tempting; excluded because 9 lands arrives around turn 9 on an 18-land deck, i.e. the thesis turn itself, so the line does not beat the ones already in the deck. |
| Consult the Star Charts | Rare instant, 'Look at the top X cards of your library, where X is the number of lands you control. Put one of those cards into your hand.' At 18 lands X is 6-9 by the critical turn, but it loads no graveyard — under this pipeline the oversized Engine row is justified only because every card in it also bins or tutors, and this one does neither. |
| Chorale of the Void | Reanimates from 'defending player's graveyard', not yours — uncorrelated with this deck's self-mill, and it requires attacking, which a control deck with 3 threats does rarely. |
| Scrounge for Eternity | The second reanimator in the colours, but 'creature or Spacecraft card with mana value 5 or less' cannot return Bygone Colossus (MV 9) or Mechanozoa (MV 6) — 0 of this deck's 3 finishers are legal targets. Its only real use here would be rebuying Xu-Ifit, and the sacrifice cost would have to come from a 3-threat board. |
| Extinguisher Battleship | 10/10 at MV 8 that also deals 4 to each creature, but it is an Artifact — Spacecraft, not a creature card, so Xu-Ifit ('Return target creature card') can never return it. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.82   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.43 adj [MV 3.82 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  44.4%  prod  55.6%  gap -11.2pp  [OK]
  U  demand  55.6%  prod  61.1%  gap  -5.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] All cards from the eoe cube mainboard
       Phase 5C check 2 — every name matched by exact string against the working pool cache; 0 missing.
[PASS] Commons and uncommons: max 2 copies
       Phase 5C check 3 via cube_search.get_max_copies; no violation.
[PASS] Rares and mythics: max 1 copy
       Phase 5C check 3; all four rares are singletons.
[PASS] Max 6 rares/mythics total across mainboard + sideboard
       5 used - Xu-Ifit Osteoharmonist, Singularity Rupture, Zero Point Ballad, Watery Grave (mainboard); Quantum Riddler (sideboard). 1 slot unused.
[PASS] Basic lands unlimited (format-supplied)
       7 Swamp, 8 Island - exempt from copy limits.
[PASS] 40-card mainboard
       22 nonland + 18 land = 40.
[PASS] 10-card sideboard
       2+2+1+1+2+1+1 = 10.
[PASS] Colour identity U/B, no splash
       Phase 5C check 4 via effective_cost.best_mode - every nonland card returns a usable 'cast' mode in U/B; 0 unusable. Independently re-verified by the Challenger.
```
