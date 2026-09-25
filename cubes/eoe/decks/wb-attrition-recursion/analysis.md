---
deck_name: "wb-attrition-recursion"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WB"
format: "40-card"
built_at: "2026-08-04T19:10:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  1x Godless Shrine  As this land enters, you may pay 2 life. If you don't, it enters tapped.
  2x Sunlit Marsh  This land enters tapped.
  11x Swamp
  2x Plains
```

### CREATURES (13)

```
CMC  Card                          Qty   Color  Role                                       Rar
  1  Hullcarver                     x2    B      MV-1 deathtouch blocker / Scout fodder     C
  1  Monoist Sentry                 x2    B      MV-1 creature / 4-power blocker            U
  2  Syr Vondam, Sunstar Exemplar   x1    WB     Grows on every death/exile                 R
  2  Umbral Collar Zealot           x2    B      Free repeatable sac outlet                 U
  3  Gravpack Monoist               x2    B      Death-token fodder (flying)                C
  3  Susurian Voidborn              x2    B      Drain on every death                       U
  3  Xu-Ifit, Osteoharmonist        x1    B      Uncapped repeatable rebuild                R
  4  Elegy Acolyte                  x1    B      Closer + card draw + creature tokens       R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                          Qty   Color  Role                                       Rar
  1  Embrace Oblivion               x2    B      1-mana removal (sac is upside)             C
  1  Tragic Trajectory              x2    B      1-mana removal (Void)                      U
  1  Zero Point Ballad              x1    B      Sweeper (symmetry is upside)               R
  3  Scout for Survivors            x2    W      Mass rebuild (up to three 1-drops)         U
```

### OTHER SPELLS (4)

```
CMC  Card                          Qty   Color  Role                                       Rar
  1  Nutrient Block                 x1    C      Free fodder that replaces itself           C
  3  Banishing Light                x1    W      Nonland-permanent answer                   C
  4  Sothera, the Supervoid         x1    B      Death-trigger exile engine                 M
  6  Rescue Skiff                   x1    W      Rebuys Sothera itself                      U
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                    Rar
Chrome Companion               x2    C      Graveyard hate / artifact fodder           C
Dauntless Scrapbot             x1    C      One-shot graveyard exile                   U
Emergency Eject                x2    W      Destroy any nonland permanent              U
Seam Rip                       x1    W      Exile a cheap permanent                    U
Radiant Strike                 x2    W      Artifact / tapped-creature removal + life  C
Dubious Delicacy               x1    B      Flash removal + lifegain                   U
Swarm Culler                   x1    B      Flying blocker / sac-to-draw               C
```

## ANALYSIS

### DECK IDENTITY

W/B Attrition-Recursion. This is the aristocrats reading of the reanimator archetype: the graveyard matters because creatures keep going there, not because one enormous body is waiting in it. Umbral Collar Zealot is a free, repeatable sacrifice outlet, and every body it eats triggers Sothera, the Supervoid - 'Whenever a creature you control dies, each opponent chooses a creature they control and exiles it' - so your own creature deaths are one-sided removal. Gravpack Monoist and Elegy Acolyte replace the corpse with a fresh creature token, Susurian Voidborn drains a life per death, Syr Vondam grows on every one, and Xu-Ifit, Osteoharmonist recurs the fuel from the yard for zero mana every turn. Scout for Survivors rebuilds up to three one-drops at once. The kill is incremental: a board Sothera has exiled down to nothing, against a drain clock that never stops.

### THE GRAVEYARD MATTERS BECAUSE THINGS KEEP GOING THERE

The other three builds in this set treat the graveyard as a *container* — get one enormous body into it, then take it back out. This one treats the graveyard as a *by-product*. Nothing here is worth reanimating on its own; what matters is the rate at which creatures die.

The loop, stated exactly:

1. `Umbral Collar Zealot` — *"Sacrifice another creature or artifact: Surveil 1."* Free. No mana, no tap, unlimited activations per turn.
2. `Sothera, the Supervoid` — *"Whenever a creature you control dies, each opponent chooses a creature they control and exiles it."* Each sacrifice is a one-sided removal spell.
3. `Susurian Voidborn` ×2 — *"Whenever this creature or another creature or artifact you control dies, target opponent loses 1 life and you gain 1 life."* Each sacrifice is also two points of life swing.
4. `Gravpack Monoist` ×2 and `Elegy Acolyte` — replace the corpse with a fresh **2/2 Robot creature token**, so the loop costs no cards.
5. `Xu-Ifit, Osteoharmonist` — returns the corpse itself, every turn, for zero mana.

With a Zealot and any spare body, you exile one of their creatures per turn while gaining life and losing nothing.

### THE MISTAKE THAT ALMOST COST THIS DECK ITS BEST CARD

This build's grill was the most productive of the four, and the biggest finding was against **me**, not the deck.

All three Step-0 sketchers independently reported that `Scout for Survivors` could never return three creatures: *"Return up to three target creature cards with **total** mana value 3 or less"* caps the **sum**, so three bodies needs three one-drops — and, they said, `Hullcarver` is the only MV-1 creature card in W/B. I amended the deck's thesis around that.

It was false. The pool contains **four**:

| Card | Cost | Rarity | Body |
|---|---|---|---|
| `Hullcarver` | {B} | common | 1/1 deathtouch |
| `Monoist Sentry` | {B} | uncommon | **4/1 Defender** |
| `Starport Security` | {W} | common | 1/1 |
| `Lightstall Inquisitor` | {W} | rare | 2/1 |

The sketchers weren't wrong — they were right *about the card slice I gave them*, which omitted two of the four. I propagated a slice-bounded fact as a pool-wide one. `Monoist Sentry` ×2 went in, MV-1 creature cards went from 2 to 4 of 24, and `Scout for Survivors` returning **three bodies with a +1/+1 counter each for three mana** is live again. As a bonus, a 1-mana 4/1 is the largest early blocker available in these colours.

### A LANDER IS NOT A CREATURE

The second correction is a one-word oracle distinction with real consequences.

`Beamsaw Prospector` reads *"When this creature dies, create a **Lander token**"* — and a Lander is *"an **artifact** with '{2}, {T}, Sacrifice this token: Search your library for a basic land card…'"*. `Sothera` reads *"Whenever a **creature** you control dies."*

So sacrificing a Lander produces **no Sothera trigger**. I had counted `Beamsaw Prospector` as a self-replacing engine piece; it replaces itself with something the engine cannot see. It was cut, and `Gravpack Monoist` — whose token *is* a creature — went to two copies.

The distinction matters at the table too: a Lander still triggers `Susurian Voidborn`, which reads *"creature **or artifact**"*. Same board action, two different triggers, one word apart.

### ZERO POINT BALLAD IS A ONE-SIDED WRATH HERE

*"Destroy all creatures with toughness X or less."* At X=3 it kills **12 of this deck's 13 creature copies**. In the two U/B builds that is a straight cost. Here it is the engine's single best turn: twelve simultaneous `Sothera` exile triggers, twelve `Susurian Voidborn` drains, twelve `Syr Vondam` counters, and two free Robot tokens from the Gravpack Monoists — after which `Scout for Survivors` and `Xu-Ifit` rebuy the corpses.

**One trap, worth knowing before you cast it.** `Sothera`'s second clause reads *"At the beginning of your end step, **if a player controls no creatures**, sacrifice Sothera, then put a creature card exiled with it onto the battlefield under your control with two additional +1/+1 counters on it."* If the Ballad empties **both** boards, Sothera sacrifices itself that same end step. You get a creature back with two counters — but the engine leaves play, and `Rescue Skiff` is the only card in the deck that can return it (*"creature **or enchantment** card"*; `Xu-Ifit` and `Scout` both read "creature card" and cannot). Leave one body alive, or pick an X that spares one.

### WHY XU-IFIT'S DRAWBACK COSTS LESS HERE THAN ANYWHERE ELSE

*"It's a Skeleton in addition to its other types and **has no abilities**."* All 12 creature copies in this deck lose something when recurred — including a recurred Xu-Ifit, which loses its own tap ability.

But the loop doesn't care. `Sothera` triggers on *"a creature you control dies"*; `Susurian Voidborn` on *"this creature or another creature or artifact you control dies"*. Both key off the **death event**, not the creature's abilities. An inert Skeleton is full-value fodder. What you lose is only the dead creature's own replacement token — which is why the enabler weight is 0.8, not 1.0.

### THE FASTEST DECK OF THE FOUR

Ten of twenty-four nonland cards cost exactly one mana. The goldfish check reports **91% to have a turn-1 play** and 85% keepable hands — the best numbers in the set by a wide margin, and the reason this is the only one of the four builds that does *not* concede the race. It is also the only one that needed no reinterpretation of its land count: at avg MV 2.25 every card's printed cost is its played cost.

The thing it cannot do is protect its engine. White and black contain **zero** counterspells anywhere in this cube. A removal spell aimed at Sothera resolves, full stop. The answer is redundancy across five permanents rather than protection — which is a real difference, and it is stated as one.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:10  2:3  3:8  4:2  6:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.8: Elegy Acolyte@0.8) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 14 copies (effective 12.8: Embrace Oblivion@0.7, Embrace Oblivion@0.7, Xu-Ifit, Osteoharmonist@0.8, Scout for Survivors@0.8, Scout for Survivors@0.8) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 91%  T2 97%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Zero Point Ballad, Sothera, the Supervoid, Umbral Collar Zealot
  OK        single_large_threat: Embrace Oblivion, Tragic Trajectory, Banishing Light, Zero Point Ballad
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: White and black contain zero counterspells anywhere in this cube - the only four are blue (Annul, Divert Disaster, Unravel, and Consult the Star Charts is not one). A W/B deck cannot interact on the stack at any rarity, so the class is conceded rather than faked.
  CONCEDED  graveyard: Neither white nor black has a mainboard-quality graveyard answer here; Chrome Companion and Dauntless Scrapbot are colourless and go to the sideboard.
```

- All four structural checks report PASS - curve, assembly, goldfish and coverage.

- This build's Phase 9 grill was the most productive of the run: five BLOCKING findings, all upheld. The most important was that the Step-0 thesis amendment rested on a false count - the card slice handed to the sketchers omitted two of the four mana-value-1 creature cards in W/B, so a slice-bounded statement was propagated as a pool-wide fact. The amendment was withdrawn, Monoist Sentry x2 added, and Scout for Survivors restored to its full role.

- The second most important was an oracle-text error of mine: a Lander token is an artifact, not a creature, so Beamsaw Prospector's death token produces no Sothera trigger. That card was cut rather than the claim restated, and Gravpack Monoist - whose token IS a creature - went to 2 copies.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Zero Point Ballad is '{X}{B}', so surplus lands raise the sweeper's ceiling in a deck that wants its own creatures to die. Rescue Skiff at {5}{W} is a 6-mana top end that returns Sothera. Umbral Collar Zealot's outlet costs no mana, so flooded turns still convert spare bodies into Sothera triggers and surveil - and surveil converts excess lands off the top into graveyard content for Scout for Survivors and Xu-Ifit. Nutrient Block's '{2}, {T}, Sacrifice this artifact: You gain 3 life' is a further mana sink that also draws a card. |
| screw | mitigation | This is by a wide margin the lowest curve of the four builds: 10 of 24 nonland cards cost exactly one mana and 13 cost two or less, so a two-land hand functions fully. The goldfish check reports 85% keepable hands, 91% to have a turn-1 play and 97% by turn 2. Every one-drop is mono-black and castable off a basic Swamp (Hullcarver {B}, Monoist Sentry {B}, Embrace Oblivion {B}, Tragic Trajectory {B}), so colour screw is a white problem only, and white's cheapest card is Scout for Survivors at three mana. |
| decapitation | mitigation | Sothera answered on sight is the real decapitation risk, and the deck has two independent recoveries: Rescue Skiff's 'return target creature or ENCHANTMENT card from your graveyard to the battlefield' is the only effect in the pool that can rebuy Sothera, and Susurian Voidborn x2 is an entirely separate damage axis that drains a life on every death whether Sothera is on the battlefield or not. If Xu-Ifit is the piece answered, Scout for Survivors x2 can return it (mana value 3, legal as a single target). Elegy Acolyte is a third, independent closer that needs neither. |
| gas-out | mitigation | The engine is designed to run on an empty hand, and after the Phase 9 repairs it also refills one. Umbral Collar Zealot's outlet costs no cards and no mana; Gravpack Monoist x2 and Elegy Acolyte replace themselves with creature tokens; Nutrient Block draws a card when the outlet eats it; Elegy Acolyte draws on every combat connection; and Xu-Ifit returns a creature card from the graveyard every turn for zero cards. Cards that generate value without being recast: Gravpack Monoist 2, Elegy Acolyte 1, Nutrient Block 1, Xu-Ifit 1, Sothera 1, Susurian Voidborn 2 = 8 of 24, of which 2 of 24 literally draw - up from 0 of 23 before the grill. |
| raced | mitigation | Alone among the four builds this one is not conceded on the race, and the repairs improved it. Monoist Sentry x2 is a 1-mana 4/1 Defender - the largest early blocker in the colours - and Hullcarver x2 is a 1-mana deathtouch blocker that trades with anything. Elegy Acolyte is a 4/4 LIFELINK body, Syr Vondam Sunstar Exemplar gains a life on every death, and Tragic Trajectory x2 plus Embrace Oblivion x2 are four pieces of one-mana removal. Against the cube's 22.5% evasion density (56 of 249 nonland cards) the flying Gravpack Monoist x2 hold the air while Sothera exiles evasive threats one per creature death; Swarm Culler (a 2/4 flier) is the sideboard reinforcement. |
| disruption-fizzle | accepted | There is no critical turn to interact with - that is the point of the archetype - but there is a critical PERMANENT, and the deck cannot protect it. White and black contain zero counterspells anywhere in this cube, so a removal spell aimed at Sothera or Xu-Ifit in response to the sacrifice activation simply resolves. Mitigating this would mean adding blue, and the fixing needed to hold up a counterspell in a deck whose curve peaks at one and two mana would slow the whole plan down - a third colour of tapped lands directly attacks the 91% turn-1-play rate that is this build's actual advantage over its three siblings. What the deck does instead is spread the plan across five permanents (Sothera, Xu-Ifit, Susurian Voidborn x2, Elegy Acolyte) so no single answer is decisive, and that is a redundancy answer, not a protection answer. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Archenemy's Charm | Rare at {B}{B}{B}, and unlike the U/B builds this deck's 14 black sources can cast it. Rejected on slot value: its exile mode duplicates Banishing Light and Embrace Oblivion, its graveyard-to-hand mode is redundant with three recursion spells already in the list, and its +1/+1 counter mode is worse than Syr Vondam growing for free. It would spend the last rare slot on a card whose three modes are each the fourth-best version of an effect already present. |
| Beyond the Quiet | Rare, 'Exile all creatures and Spacecraft'. Exile, not destroy — so it puts nothing in your graveyard, blanks Scout for Survivors and Xu-Ifit, and gives Sothera no death triggers. It is a sweeper that specifically turns this deck off. |
| Astelli Reclaimer | Rare 5/4 flier, but it returns 'target NONCREATURE, NONLAND permanent card' — in this list the only legal targets would be Sothera and Banishing Light. Five mana at rare cost for a two-card target pool. |
| Chorale of the Void | Rare. Reanimates from the 'defending player's graveyard', not yours, so it is uncorrelated with this deck's own resource base, and its Void clause requires a nonland permanent to have left the battlefield each turn or it self-sacrifices — which this deck can satisfy, but the payoff is still an opponent-dependent creature rather than a card of your own. |
| Faller's Faithful | 3/1 with 'destroy up to one other target creature. If that creature wasn't dealt damage this turn, its controller draws two cards' — real removal on a body, but handing an attrition opponent two cards is the worst possible cost in a deck whose whole plan is running them out of resources. |
| Vote Out | 'Convoke... Destroy target creature'. Convoke is genuinely good with a wide board, but at 4 mana it competes with Embrace Oblivion and Tragic Trajectory at 1, and tapping creatures to convoke means they cannot attack or be sacrificed that turn. |
| Gravkill | 'Exile target creature or Spacecraft' at {3}{B} — clean unconditional removal, but exile gives the opponent's graveyard decks nothing to work with while costing this deck three more mana than Tragic Trajectory, which the free sacrifice outlet upgrades to -10/-10 at will. |
| Depressurize | '-3/-0 until end of turn. Then if that creature's power is 0 or less, destroy it' — only kills power-3-or-less creatures, and the deck already runs four one-mana removal spells that are less conditional. |
| Comet Crawler | 'Lifelink / Whenever this creature attacks, you may sacrifice another creature or artifact. If you do, this creature gets +2/+0' — a sacrifice outlet, but one gated on attacking, where Umbral Collar Zealot's is free and usable at instant speed on any turn. |
| Dockworker Drone | 'This creature enters with a +1/+1 counter on it. When this creature dies, put its counters on target creature you control' — self-replacing value on death in white, but it moves counters rather than making a body, so it gives Sothera nothing extra and Beamsaw Prospector's Lander is strictly more fodder. |
| Honored Knight-Captain | 'When this creature enters, create a 1/1 white Human Soldier creature token' — two bodies from one card is exactly what a sacrifice deck wants, but at {1}{W} it competes for the deck's scarcest resource: only 6 of 17 lands produce white. |
| Knight Luminary | Same two-bodies-from-one-card virtue at {3}{W} with Warp {1}{W}, and the same white-source problem, at three more mana. |
| Rayblade Trooper | 'Whenever a nontoken creature you control with a +1/+1 counter on it dies, create a 1/1 white Human Soldier creature token' — a genuine fodder engine, but it requires the dying creature to have a counter, and this list has only Scout for Survivors and Syr Vondam distributing counters, so the trigger condition is met by a small fraction of deaths. |
| Starfighter Pilot | 'Whenever this creature becomes tapped, surveil 1' — yard-filling on a 2/2 for {1}{W}, but this deck fills its graveyard by sacrificing creatures rather than by milling, and the white slot is scarce. |
| Focus Fire | 'deals X damage to target attacking or blocking creature, where X is 2 plus the number of creatures and/or Spacecraft you control' — scales beautifully with a wide board, but only hits attacking or blocking creatures, so it cannot answer a threat proactively. |
| All-Fates Stalker | 'exile up to one target non-Assassin creature until this creature leaves the battlefield' — removal on a body, but the exile UNDOES itself when the Stalker dies, and this deck sacrifices its own creatures constantly, so it would repeatedly hand the threat back. |
| Dawnstrike Vanguard | 4/5 lifelink for {5}{W} that grows the team at end step if you control two or more tapped creatures — a fine top end, but six mana in a 17-land deck whose curve peaks at three, and white is the scarce colour. |
| Luxknight Breacher | 'This creature enters with a +1/+1 counter on it for each other creature and/or artifact you control' — scales with the wide board, but it is a vanilla body once it lands and contributes nothing to the sacrifice loop. |
| Wedgelight Rammer | 'When this Spacecraft enters, create a 2/2 colorless Robot artifact creature token' — two artifacts from one card is real fodder, but at {3}{W} it spends the scarce white slot on a card with no death trigger of its own. |
| Flight-Deck Coordinator | 'At the beginning of your end step, if you control two or more tapped creatures, you gain 2 life' — the tapped-creature condition wants an attacking deck, and this build's creatures are more often being sacrificed than attacking. |
| Bygone Colossus | The 9/9 that anchors both U/B builds. Excluded here on the thesis: this deck's recursion is Scout for Survivors ('mana value 3 or less'), Scrounge for Eternity ('mana value 5 or less') and Rescue Skiff, and only Xu-Ifit could return a mana-value-9 card. With no discard outlet anywhere in W/B, a {9} card would sit in hand as a blank. |
| Rescue Skiff (second copy) | A second Rescue Skiff would double the odds of rebuying Sothera, but at {5}{W} in a 17-land deck with 6 white sources, two copies of a six-mana white card is more top end than this curve supports. |
| Beamsaw Prospector | 'When this creature dies, create a Lander token' looks like free self-replacement, but a Lander is 'an artifact with {2}, {T}, Sacrifice this token: Search your library for a basic land card' - an ARTIFACT, not a creature. Sothera reads 'Whenever a CREATURE you control dies', so the replacement produces no Sothera trigger. Cut in the Phase 9 grill; Gravpack Monoist, whose token is a creature, went to 2 copies in its place. (It does still trigger Susurian Voidborn, which reads 'creature or artifact'.) |
| Syr Vondam, the Lucent | 'Deathtouch, lifelink / Whenever Syr Vondam enters or attacks, other creatures you control get +1/+0 and gain deathtouch until end of turn' is a genuine closer for a wide board. Cut on mana: {2}{W}{B}{B} against 5 white sources in 16 lands was the deck's greediest cast by a distance, and Elegy Acolyte ({2}{B}{B}, 4/4 lifelink) closes at the same rate while being mono-black and also drawing cards. |
| Scrounge for Eternity | 'sacrifice an artifact or creature. Return target creature or Spacecraft card with mana value 5 or less' - the sacrifice cost is a Sothera trigger and the Lander is fodder, so it fits. Cut for slot pressure once the grill added Monoist Sentry x2, Elegy Acolyte and Nutrient Block: the deck already runs Scout for Survivors x2, Xu-Ifit and Rescue Skiff, and a fourth recursion spell with no body was the weakest of the four. |
| Starport Security | {W} 1/1 artifact creature - one of the four mana-value-1 creature cards in W/B, so it would also enable Scout for Survivors' three-body mode. Excluded because it is WHITE, and white is this deck's scarce colour at 5 sources of 16 lands; Monoist Sentry does the same job on a basic Swamp with a 4/1 body instead of a 1/1. |
| Lightstall Inquisitor | {W} 2/1 rare, the fourth mana-value-1 creature card in the colours. Excluded twice over: it is white in a deck with 5 white sources, and the rare budget is at 6 of 6. |
| Elegy Acolyte (second copy) | Not possible - it is a rare, capped at 1 copy. Noted because a second copy would be the deck's best remaining upgrade if the copy limit allowed it. |
| Timeline Culler | 'You may cast this card from your graveyard using its warp ability. Warp-{B}, Pay 2 life' is a body that recurs itself without any recursion spell, giving a repeatable Sothera and Susurian Voidborn trigger for one mana. Genuinely close. Excluded because at {B}{B} it competes with the deck's 10 one-drops for the early turns, and it costs 2 life every time in a deck that also pays life to Zero Point Ballad, Godless Shrine and Elegy Acolyte. |
| Fell Gravship | 'mill three cards, then return a creature or Spacecraft card from your graveyard to your hand' fuels the recursion suite and is an artifact for the sacrifice outlet. Excluded because this deck fills its graveyard by sacrificing creatures, not by milling - the yard is never the bottleneck here, unlike in the two U/B builds. |
| Hymn of the Faller | 'Surveil 1, then you draw a card and lose 1 life' with a Void rider. Real card flow at two mana, and the deck's 8 of 24 Void enablers make the rider live. Excluded once Elegy Acolyte and Nutrient Block filled the draw hole the grill identified - and unlike Hymn, both of those also contribute a body or fodder to the loop. |
| Susurian Dirgecraft | 'each opponent sacrifices a nontoken creature of their choice' is the only non-targeted removal in the colours, useful against ward and hexproof. Excluded at {4}{B} in a deck whose curve peaks at three, and because Sothera already produces non-targeted exile once per creature death. |
| Lightless Evangel | 'Whenever you sacrifice another creature or artifact, put a +1/+1 counter on this creature' is a direct payoff for the loop, but a purely selfish one: the counters do nothing for Sothera, the drain or the rebuild, and Syr Vondam Sunstar Exemplar does the same job while also gaining life and destroying a permanent when it dies at power 4 or more. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 17 recommended  [PASS]
Avg CMC:     2.25   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.50 adj [MV 2.25 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  81.5%  prod  87.5%  gap  -6.0pp  [OK]
  W  demand  18.5%  prod  31.2%  gap -12.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] All cards from the eoe cube mainboard
       Phase 5C check 2 - every name matched by exact string against the working pool cache; 0 missing. Independently re-verified by the Challenger against the bundle's working_pool: 0 phantoms.
[PASS] Commons and uncommons: max 2 copies
       Phase 5C check 3 via cube_search.get_max_copies; no violation.
[PASS] Rares and mythics: max 1 copy
       Phase 5C check 3; all six are singletons.
[PASS] Max 6 rares/mythics total across mainboard + sideboard
       6 used - exactly at cap. Sothera the Supervoid (mythic), Syr Vondam Sunstar Exemplar, Elegy Acolyte, Xu-Ifit Osteoharmonist, Zero Point Ballad, Godless Shrine. The 10-card sideboard spends none, which is what makes running the sixth rare in the mainboard affordable.
[PASS] Basic lands unlimited (format-supplied)
       11 Swamp, 2 Plains - exempt from copy limits.
[PASS] 40-card mainboard
       24 nonland + 16 land = 40.
[PASS] 10-card sideboard
       2+1+2+1+2+1+1 = 10.
[PASS] Colour identity W/B, no splash
       Phase 5C check 4 via effective_cost.best_mode - every nonland card returns a usable 'cast' mode in W/B; 0 unusable.
```
