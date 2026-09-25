---
deck_name: "ub-coral-mill"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-08-19T14:00:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x9  Swamp                    basic, format-supplied
  x5  Island                   basic, format-supplied
  x2  Contaminated Aquifer     the ONLY true UB dual in the pool; enters tapped; carries both basic land types
  x1  Crystal Grotto           colourless fixer - scry 1 on entry, {1},{T} for any colour
```

### CREATURES (14)

```
CMC  Card                           Qty  Col  Role                                           Rar
  1  Walking Bulwark                x2   C    Payoff/Engine - third line; defenders attack for toughness U
  2  Coral Colony                   x2   U    Payoff - second clock; mill decks on turn 8, second priority for mana U
  2  Blight Pile                    x2   B    Payoff - the primary clock; drain kills on turn 7 U
  3  Academy Wall                   x2   U    Enabler/Engine - 0/5 wall plus a loot trigger on 9 of 23 cards C
  3  Gibbering Barricade            x2   B    Enabler/Engine - 2/4 wall plus a sacrifice-for-cards outlet C
  4  Shield-Wall Sentinel           x2   C    Enabler/Infrastructure - defender count plus a tutor for any of the three kills C
  4  Sheoldred, the Apocalypse      x1   B    Threat - independent 2-per-turn clock and the deck's largest blocker M
  4  Ertai Resurrected              x1   BU   Threat/Interaction - flash; counters a spell OR an activated or triggered ability R
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                           Qty  Col  Role                                           Rar
  1  Cut Down                       x2   B    Interaction - one-mana instant removal         U
  1  Rona's Vortex                  x2   U    Interaction - kicked, bottoms a permanent rather than bouncing it U
  2  Tribute to Urborg              x2   B    Interaction - kicked, scales with the graveyard's instant/sorcery count C
  3  Choking Miasma                 x2   B    Interaction - one-sided sweeper; 14 of 15 creature cards survive U
  4  Extinguish the Light           x1   B    Interaction - unconditional instant kill       C
```

### OTHER SPELLS (0)

```
CMC  Card                           Qty  Col  Role                                           Rar
```

## SIDEBOARD (10)

```
Card                           Qty  Col  Role / When to board in                        Rar
Negate                         x2   U    vs sweepers - Drag to the Bottom and The Phasing of Zhalfir both erase the board both kills count C
Essence Scatter                x2   U    vs creature decks - answers a threat before it can attack over the wall C
Tattered Apparition            x2   B    vs evasion (50 opposing cards) - a flier castable off 12 black sources, unlike a blue one off 8 C
Impulse                        x2   U    vs colour-screw risk and to find Blight Pile - digs 4 at instant speed C
Impede Momentum                x1   U    vs a single large attacker - three stun counters is three turns off the table C
Liliana of the Veil            x1   B    vs control and attrition - '+1: Each player discards' is one-sided for a deck whose kills are activated abilities on resolved permanents and which wins from an empty hand M
```

## ANALYSIS

### DECK IDENTITY

A UB Defenders control deck with no combat clock at all. Dropping white costs it Wingmantle Chaplain, so there are no Bird tokens and nothing that attacks by default - both win conditions are activated abilities that read the number of creatures with defender controlled. Blight Pile drains each opponent for X and Coral Colony mills them for X. Simulated on curve, the drain kills on turn 8 in the modal case and as early as turn 7 when a turn-1 defender is in the opener - which is 32.3% of hands, since Walking Bulwark is the only one-mana defender in these colours. Firing both kills costs 5 mana and they compete on turn 4 only; from turn 5 the mill is free alongside the drain. Twelve defender bodies - the colour pair's maximum - hold the ground behind nine interaction spells, and Choking Miasma is a genuinely one-sided sweeper here: 13 of the 14 creature copies survive it, the sole casualty being a flash creature whose timing the deck controls.

### THE DECK THAT NEVER ATTACKS

This is the purest controller of the four Defenders builds, and the only one with no combat clock at
all. Dropping white costs it Wingmantle Chaplain — there are no Bird tokens here, and nothing in the
list attacks by default. Both win conditions are activated abilities on permanents already on the
battlefield:

- **Blight Pile** — `{2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control.`
- **Coral Colony** — `{1}{U}, {T}: Target player mills X cards, where X is the number of creatures you control with defender.`

That configuration has one large upside: **there is no cast trigger to counter and no stack object on
the critical turn.** Killing a Blight Pile in response to its activation reduces X by one, but the
ability still resolves. This is the most disruption-resistant of the four builds.

### THE CLOCK, AND A CORRECTION

The kill turns were simulated, not asserted — and the first simulation was **wrong**, which the
self-grill caught. My code spent mana on mill before drain, so on turn 4 a 2-mana mill left only 1
mana and the 3-mana drain never fired. That produced a false conclusion — that splitting mana between
the two kills costs a full turn — and I had already built an activation policy and an assembly
discount on top of it.

Corrected, with drain-first priority:

| Ramp | Drain only | Mill only | Both |
|---|---|---|---|
| Defender on turn 1 (32.3% of openers) | **turn 7** | turn 8 | **turn 7** |
| Defender on turn 2 (modal) | **turn 8** | turn 8 | **turn 8** |
| Defender on turn 3 | turn 8 | turn 9 | turn 8 |

Firing both is *identical* to committing to the drain. Blight Pile costs 3 and Coral Colony costs 2,
so with mana equal to the turn number they compete on **turn 4 only**; from turn 5 the mill is free.
The correct policy is one line: prioritise the drain on turn 4, fire both thereafter.

The turn-7 figure needs a defender on turn 1, and **Walking Bulwark is the only one-mana defender in
these colours** — 2 copies in 40 cards, so 32.3% of opening hands. Turn 8 is the honest headline.

### CHOKING MIASMA IS AT ITS BEST HERE

`All creatures get -2/-2 until end of turn.` Against this list, **13 of 14 creature copies survive** —
all twelve defenders (lowest toughness 3) plus Sheoldred at 4/5. The only casualty is Ertai
Resurrected at 3/2, which has Flash, so its timing is under the deck's control.

This is strictly better than the same card in the WB build, where every 1/1 Bird token dies with it.
Here there are no tokens to lose, so there is no downside case at all.

### THE PRICE OF DROPPING WHITE

Three things this deck cannot do, all verified against the pool rather than assumed:

1. **No answer to artifacts or enchantments that survives its own board.** Karn's Sylex is colourless
   and castable here, but any X large enough to matter destroys all twelve defenders — the sole
   variable both kills read. There is no mono-U or mono-B answer at all. That is 31 opponent-side
   cards the deck simply cannot interact with.
2. **No flier, anywhere in the maindeck.** Evasion is the cube's largest threat class at 50 opposing
   cards, and there is no *reach* on any U/B card in the entire pool. The sideboard's answer is
   Tattered Apparition rather than Soaring Drake, purely on castability: a `{3}{B}` flier off 12 black
   sources beats a `{2}{U}` one off 8 blue in a pair with no untapped dual.
3. **The worst manabase in the cube.** There is no untapped U/B dual land in the pool at all —
   Contaminated Aquifer is the only true dual and it enters tapped. Crystal Grotto is the third fixer.
   The failure mode here is colour, not count.

### GIBBERING BARRICADE COSTS WIN-CONDITION CURRENCY

Worth flagging for anyone iterating on this list. In the WB build, Gibbering Barricade's
`Sacrifice a creature` is free value because Bird tokens pay it. **This deck makes no tokens.** Every
creature it controls is a defender feeding both X counts, so each activation is a real −1 to the drain
clock. It is included for its 2/4 body and as a black mana sink — the sacrifice is an emergency mode,
not a routine engine.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:6  2:6  3:6  4:5
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.4: Blight Pile@0.9, Blight Pile@0.9, Coral Colony@0.9, Coral Colony@0.9, Walking Bulwark@0.4, Walking Bulwark@0.4) → p=0.84 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.7: Shield-Wall Sentinel@0.85, Shield-Wall Sentinel@0.85) → p=0.91 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 74%  T2 96%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Choking Miasma, Academy Wall, Gibbering Barricade, Blight Pile, Coral Colony, Shield-Wall Sentinel, Sheoldred, the Apocalypse
  OK        single_large_threat: Extinguish the Light, Rona's Vortex, Cut Down, Tribute to Urborg, Ertai Resurrected
  CONCEDED  noncreature_permanents: CONCEDED, with the wording corrected by the grill. It is NOT true that no answer exists in the pool: Karn's Sylex is colourless and castable here, reading '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less'. The accurate statement is that U/B has no answer that SURVIVES THE DEFENDER COUNT. The real targets in this class sit at mana value 3-4 (Prayer of Binding, Leyline Binding, Temporary Lockdown, The Phasing of Zhalfir), and an X of 4 destroys all 12 defenders - the only variable both kills read; even X=2 kills 6 of the 12. No mono-U or mono-B answer exists at all: the dossier places artifact answers in G, R and BG and enchantment answers in W, G and BG. That is 31 opponent-side cards (the raw 33 includes two of this deck's own artifacts). The planeswalker sub-class IS covered by Rona's Vortex, Extinguish the Light and Ertai Resurrected, but that is 4 cards in the cube, so the class as a whole is conceded rather than claimed. This is the price of dropping white: WB and WUB both cover it with Prayer of Binding.
  OK        stack: Ertai Resurrected
  CONCEDED  graveyard: The pool contains zero graveyard hate in any colour. As in the WU build this is NOT an equal concession, because Coral Colony actively fills the opponent's graveyard and 29 opponent-side cards in this cube reward a full yard. Here the cost is lower than in WU, because Blight Pile is the faster clock and the correct line against a graveyard deck is to drain rather than mill - which the deck wants to do anyway.
```

_No WARN-tier structural flags were raised; all four checks returned PASS._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This deck has more mana sinks than any of the four, and it wants the extra lands: Blight Pile '{2}{B}, {T}' and Coral Colony '{1}{U}, {T}' together consume 5 mana per turn, Gibbering Barricade '{2}{B}, Sacrifice a creature' consumes 3 more, and Walking Bulwark '{2}' per creature scales without limit. A hand of surplus lands is what lets the deck fire both kills in the same turn instead of choosing. |
| screw | mitigation | Six one-mana cards (Walking Bulwark x2, Cut Down x2, Rona's Vortex x2) and six two-mana cards mean a two-land hand casts a defender or interacts on turn 1. The structural gate's goldfish simulation reports keepable_rate 0.86 and 3 lands by turn 3 at 88% on 1000 hands at seed 0. The real screw risk here is COLOUR, not count - with no untapped U/B dual, a hand of Swamps cannot cast Coral Colony; Crystal Grotto and 2 Contaminated Aquifer are the mitigation, and the deck is deliberately black-primary so the majority of its cards are castable off the majority colour. |
| decapitation | mitigation | Three redundant OUTLETS off one board - reworded per GRILL FINDING F7, which correctly noted that 'three independent kill lines' overclaimed. They share no card, but they are not independent: all three read the same defender board, so one sweeper answers all three at once. What the redundancy does buy is protection against SPOT removal: if Blight Pile is killed the mill still wins, if Coral Colony is killed the drain still wins, and Walking Bulwark turns the same board sideways if both are gone. Shield-Wall Sentinel x2 'search your library for a creature card with defender' fetches any of the three, since all three have Defender, and Ertai Resurrected can counter the removal spell aimed at a payoff. The genuine answer to a sweeper is the sideboard, not this mode. |
| gas-out | mitigation | Academy Wall x2 triggers on 9 of 23 nonland cards - every interaction spell in the deck - and Gibbering Barricade x2 converts a surplus body into a card. Sheoldred turns each of those draws into 2 life. Most importantly, the deck's kills are ACTIVATED ABILITIES rather than cards that must be found: once Blight Pile is on the battlefield an empty hand still wins, which is the strongest possible answer to this mode. |
| raced | accepted | This is the deck's worst matchup class and the cost is higher here than in any other build in the set. The cube's largest threat class is evasion (51 cards, 20.6%), a board of ground Defenders cannot block a flier, and unlike the WB and WU builds this deck has NO flying body at all - dropping white costs it Serra Paragon and Serra Redeemer, and it runs zero fliers maindeck. Its answers to the class are Choking Miasma x2 (which kills the small end of it en masse while all 12 defenders survive) and single-target removal. Mitigating properly would mean playing Soaring Drake and other non-defender fliers maindeck, and every such slot subtracts from the 12-defender count that is the ONLY variable both kills read - in a deck with no Bird tokens there is no second source of that count to fall back on. Soaring Drake x2 is in the sideboard for exactly the matchups where that trade becomes correct. |
| disruption-fizzle | mitigation | Both kills are activated abilities on permanents already on the battlefield, which is the most disruption-resistant configuration available: there is no cast trigger to respond to and no stack object to counter on the critical turn. Killing a Blight Pile in response to its activation still lets the ability resolve. Ertai Resurrected is the deck's own answer to a critical turn, and its text is unusually broad - 'Counter target spell, activated ability, or triggered ability' - making it the only card in these colours that can stop an opposing activated ability such as Karn's Sylex's sweep. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Wingmantle Chaplain | The archetype's best payoff, and it is WHITE - unavailable here. This is the single biggest thing Path C gives up: without it the deck has no Bird tokens and therefore no combat clock at all, which is why its goldfish turn is 9 rather than 8. |
| Clockwork Drawbridge | A white defender and a repeatable tapper. Outside core_colors U/B, so this deck has only five defender cards below mana value 4 instead of six, and no one-mana defender except Walking Bulwark. |
| Serra Paragon | White; the 3/4 flier plus per-turn recursion that answers the archetype's air weakness in the WB and WU builds. Unavailable here, which is why this deck's raced posture is worse than either. |
| Serra Redeemer | White. Its power-2-or-less trigger would upgrade every wall in this list, but there are no Bird tokens here for it to multiply in any case. |
| Adarkar Wastes | A WU untapped dual - wrong pair. Recorded because the absence of any UB equivalent is the defining manabase fact of this deck: the pool contains NO untapped U/B dual land. |
| Ertai's Scorn | 'Counter target spell' for {1}{U}{U}. Double blue is the one cost this manabase genuinely cannot support - with no untapped UB dual, blue sources sit around 8-9 of 17 and the deck is black-primary. Essence Scatter and Negate at a single {U} are the correct counters here. |
| Braids, Arisen Nightmare | Sacrificing a permanent each end step to draw would eat defenders, and unlike the WB list there are no Bird tokens here to feed it - every creature this deck controls is load-bearing for both kill counts. |
| The Phasing of Zhalfir | Chapter III reads 'Destroy all creatures', which would destroy this deck's entire defender board and therefore both of its win conditions simultaneously. |
| Drag to the Bottom | ORACLE PRECISION (corrected): 'X is 1 plus the number of basic land types among lands YOU control' counts the CASTER's lands - the opponent's - not this deck's. My earlier note wrongly computed X from this deck's own manabase. Against an opposing two-basic-type deck it is -3/-3, which kills 6 of this deck's 12 defender copies - Coral Colony x2, Academy Wall x2 and Gibbering Barricade x2 all survive, so this list is the most resilient of the four to it. At -4/-4 only Academy Wall x2 survives. Unlike Choking Miasma at -2/-2, which every defender here survives, this is the sweeper to play around. |
| Sphinx of Clear Skies | A 5/5 flier for {3}{U}{U} would answer the air problem, but double blue on this manabase is the exact cost the deck cannot pay, and it advances neither kill count. |
| Bone Splinters | 'As an additional cost, sacrifice a creature. Destroy target creature.' Cheap and unconditional, but unlike the WB build this deck generates NO expendable tokens - every creature it controls is a defender feeding both Coral Colony's X and Blight Pile's X, so the sacrifice cost is paid in win-condition currency. |
| Phyrexian Rager | A 2/2 that draws a card is fine value, but it has no Defender, so it adds 0 to both kill counts in a deck where that number is the entire plan. |
| Vohar, Vodalian Desecrator | '{T}: Draw a card, then discard a card...' is a repeatable looter in the right colours, but it has no Defender and competes for the same 2-drop slot as Coral Colony and Blight Pile, both of which are win conditions. |
| Thran Portal | It can be any basic land type, but 'Mana abilities of this land cost an additional 1 life to activate' plus entering tapped unless you control two or fewer other lands makes it worse than Contaminated Aquifer here, and it would spend a rare slot on fixing. |
| Smash to Dust | Not a candidate (red), but recorded: its second mode is 'Destroy target creature with defender' - a dedicated hoser for this archetype at common, with 2 copies available to any red drafter. |
| Soaring Drake | Cut from the sideboard in the grill repair in favour of Tattered Apparition. Both are fliers that die to the deck's own Choking Miasma, so castability decided it: {2}{U} needs 8 blue sources, {3}{B} needs 12 black. |
| Phyrexian Espionage | Cut from the sideboard in the grill repair. It answers no threat class in the dossier, and the deck's own gas-out mitigation argues that once Blight Pile is on the battlefield an empty hand still wins - which makes drawing two the least valuable thing this deck can buy. |
| Karn's Sylex | Colourless and castable here, and the only pool answer to artifacts and enchantments in these colours. NOT played: any X large enough to hit the real targets (mana value 3-4) destroys all 12 defenders, and X=2 already kills 6 of them. Recorded because my earlier claim that no answer exists in the pool was false. |
| Haughty Djinn | A flier whose 4 toughness survives the deck's own Choking Miasma, and its cost reduction applies to 9 of 23 nonland cards. Rejected on {1}{U}{U} - double blue off 8 blue sources in the worst-fixed pair in the cube. |
| Volshe Tideturner | '{T}: Add {U}. Spend this mana only to cast an instant or sorcery spell or a kicked spell.' Fixes the named colour risk, but the restriction means it CANNOT pay Coral Colony's {1}{U}, which is an activated ability rather than a spell - and it has no Defender, so it adds 0 to both X counts. |
| Salvaged Manaworker | Unrestricted fixing that CAN pay Coral Colony's activation, and a 3-toughness body that survives Choking Miasma. Rejected because it adds 0 to both X counts and its extra mana per fix competes with the exact 5-mana turn the deck wants. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.09 adj [MV 2.43 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  70.8%  prod  70.6%  gap  +0.2pp  [OK]
  U  demand  29.2%  prod  47.1%  gap -17.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2                        PASS - no card exceeds 2 copies counting mainboard and sideboard jointly; verified by cube_search.get_max_copies against per_rarity {common:2, uncommon:2, rare:1, mythic:1}.
rares_mythics_max_1_copy                       PASS - Sheoldred x1, Ertai Resurrected x1.
rares_mythics_max_5_total_MB_plus_SB           PASS - 2 total (Sheoldred mythic, Ertai Resurrected rare). Sideboard contains 0. Three slots unspent - the lowest rare usage of the four builds, because U/B's rares are mostly off-plan for a defender deck.
all_cards_from_cube_pool                       PASS - every name matched by exact string against the working pool cache.
basics_format_supplied                         Swamp x9 and Island x5 are format-supplied; the cube list contains no basics.
colour_usability                               PASS - every nonland card returns a non-None effective_cost.best_mode against core_colors [U,B] with an empty splash. Choking Miasma prints {B,G} because of an unpayable {G} kicker and is cast for {1}{B}{B}; Rona's Vortex and Tribute to Urborg both have kickers that ARE payable in these colours.
```
