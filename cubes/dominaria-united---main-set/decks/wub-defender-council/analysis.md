---
deck_name: "wub-defender-council"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-08-19T14:12:38Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x4  Plains                   basic, format-supplied
  x4  Island                   basic, format-supplied
  x3  Swamp                    basic, format-supplied
  x2  Idyllic Beachfront       WU dual, enters tapped; carries Plains AND Island types
  x2  Sunlit Marsh             WB dual, enters tapped; carries Plains AND Swamp types
  x2  Contaminated Aquifer     UB dual, enters tapped; carries Island AND Swamp types
```

### CREATURES (16)

```
CMC  Card                           Qty  Col  Role                                           Rar
  1  Clockwork Drawbridge           x2   W    Engine - defender count plus a repeatable tapper C
  1  Walking Bulwark                x2   C    Engine - converts defenders into attackers by toughness U
  2  Coral Colony                   x2   U    Payoff - mill; the axis that lifegain cannot blunt U
  2  Blight Pile                    x2   B    Payoff - non-combat drain that ignores blockers U
  3  Academy Wall                   x2   U    Engine - 0/5 wall, the largest blocker in the archetype, plus a loot trigger C
  3  Gibbering Barricade            x2   B    Enabler/Engine - defender count plus the only repeatable card conversion (Birds into cards) C
  4  Wingmantle Chaplain            x2   W    Payoff - primary clock; the only payoff that puts power on the battlefield U
  4  Shield-Wall Sentinel           x2   C    Infrastructure - defender count plus a tutor for any of the three payoffs C
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                           Qty  Col  Role                                           Rar
  1  Cut Down                       x2   B    Interaction - one-mana instant removal         U
  1  Rona's Vortex                  x2   U    Interaction - kicked, bottoms a permanent rather than bouncing it U
  2  Destroy Evil                   x1   W    Interaction - large-creature or enchantment removal C
  2  Essence Scatter                x1   U    Interaction - the mainboard stack answer       C
```

### OTHER SPELLS (1)

```
CMC  Card                           Qty  Col  Role                                           Rar
  6  Leyline Binding                x1   W    Interaction - Domain-3 flash exile for {2}{W}; the deck's only rare R
```

## SIDEBOARD (10)

```
Card                           Qty  Col  Role / When to board in                        Rar
Artillery Blast                x2   W    vs evasion - Domain X=4 here, but the REAL reason over Runic Shot (which is 1 mana and destroys outright) is that this is an INSTANT: you cannot kill an attacking flier mid-combat with a sorcery C
Negate                         x2   U    vs sweepers - the 16-defender board is the entire plan and a resolved wrath undoes all three payoffs at once C
Sheoldred's Restoration        x2   B    vs removal-heavy decks - returns Wingmantle Chaplain to the BATTLEFIELD, re-firing its per-defender ETB. Cost stated: {3}{B} sorcery, 7 mana and two pips if kicked, or 4 life unkicked in a deck with no mainboard lifegain U
Stall for Time                 x1   W    vs aggro - taps two at instant speed, cantrips, and makes the tapped targets Artillery Blast needs C
Prayer of Binding              x1   W    vs artifacts and enchantments - the deck's second 'exile any nonland permanent', moved here in the grill repair U
Serra Paragon                  x1   W    vs fliers - a real 3/4 flying blocker where the maindeck has no flier above 1 toughness; recurs 10 of the 23 nonland cards M
Serra Redeemer                 x1   W    vs grindy decks rather than fast ones - it is a 5-drop behind a 4-drop Chaplain, so the Bird upgrade realistically lands turn 6+; against a genuine race it is too slow and Serra Paragon is the better board-in R
```

## ANALYSIS

### DECK IDENTITY

The three-colour Defenders build, and the reason to play it is a single number. WUB can cast 8 of the 9 defenders in this cube - every one except the green Floriferous Vinewall - and this list plays ALL EIGHT at two copies each for 16 defender bodies, where any two-colour build tops out at 12. That is the maximum any deck in this cube can field. All three payoffs read that number: Wingmantle Chaplain makes one 1/1 flying Bird per defender when it enters and one for every defender after, Blight Pile drains for it, and Coral Colony mills for it. The second reason is Domain: the three common duals each carry two basic land types, so all three types are online, which turns Leyline Binding into a {2}{W} flash catch-all. The price is six tapped lands out of seventeen, zero double-pip cards, and an interaction count of 7 of 23 - below the control floor, and the deliberate trade for the extra bodies.

### WHAT THE THIRD COLOUR ACTUALLY BUYS

Two things, both quantifiable, and it is worth being precise about the first because it is easy to
overstate.

**More defenders.** WUB can cast 8 of the 9 defenders in this cube — every one except the green
Floriferous Vinewall — and this list plays **all eight at two copies each = 16 bodies**, against a
hard ceiling of 12 for any two-colour build. That is the maximum any deck in this cube can field.

I did not get there on the first pass. The build initially cut Gibbering Barricade, reasoning that its
`Sacrifice a creature` cost "lowers the number the deck exists to raise." The self-grill refuted that
on oracle text: Wingmantle Chaplain's tokens are `1/1 white Bird creature token with flying` — **no
Defender** — so Birds feed the sacrifice at zero cost to the count. That is the identical rebuttal I
had already made and verified in the WB build; I applied it there and then accepted the opposite
reasoning here without re-checking. Barricade went back in.

That matters more here than in any other build because **all three payoffs read the same number**:

| Payoff | What X does |
|---|---|
| Wingmantle Chaplain | one 1/1 flying Bird per defender, on ETB and on every later defender ETB |
| Blight Pile | `{2}{B}, {T}: Each opponent loses X life` |
| Coral Colony | `{1}{U}, {T}: Target player mills X cards` |

Going from 14 to 16 bodies is +2 to all three simultaneously.

**Domain.** The three common duals each carry **two** basic land types — Idyllic Beachfront is
`Land — Plains Island`, Sunlit Marsh is `Land — Plains Swamp`, Contaminated Aquifer is
`Land — Island Swamp` — so any two of them guarantee all three types. Domain = 3, which means:

- **Leyline Binding costs `{2}{W}`** instead of `{5}{W}` — a three-mana flash exile of any nonland permanent, the most efficient answer in the deck.
- **Artillery Blast deals 4** instead of 3 — the difference between killing a 3- and a 4-toughness creature.

One caveat worth stating rather than burying: Domain reduces the **cost paid, not the mana value**.
Leyline Binding is still mana value 6, which is why the curve shows a 6-drop and why the land-count
computation saw a higher average than the deck really plays to.

### WHAT IT COSTS

**Six tapped lands out of seventeen** — the highest of the four builds — **zero double-pip cards**, and
**interaction at 7 of 23 = 30.4%, which is 4.6pp below the control floor**. That last one is the direct
price of the sixteenth and fifteenth defender: Destroy Evil ×1 and Prayer of Binding ×1 came out to fit
Gibbering Barricade ×2. This deck answers fewer things than its two-colour siblings and leans harder on
simply blocking. It also drops Academy Wall's trigger rate to 6 of 23 — the worst of the four — because
the cards cut were instants.
That second constraint is expensive and specific: Citizen's Arrest (`{1}{W}{W}`), Choking Miasma
(`{1}{B}{B}`) and Extinguish the Light (`{2}{B}{B}`) are all strong in the two-colour lists and all
unplayable here. Every one of the 23 mainboard nonland cards has at most one coloured pip.

Choking Miasma is doubly excluded, and the reason is a count rather than a preference: this deck's
primary clock is 1/1 Bird tokens, and `All creatures get -2/-2` kills every one of them. **The card
that is a maindeck include in two of these four decks is actively anti-synergy in this one.**

### THE SLOT ACCOUNTING, RESTATED HONESTLY

The shape judge caught something worth repeating. My first accounting filed Blight Pile and Coral
Colony under "Engine," which made Threats/Payoffs read a tidy 8.7% — comfortably in the 5–10% control
band. But under the deck's own thesis those two cards *are* win conditions. Booked honestly:

| Slot | Count | % of nonland | Band |
|---|---|---|---|
| Interaction | 7 | **30.4%** | **declared deviation** (35–45%) |
| Threats/Payoffs | 6 | **26.1%** | **declared deviation** (5–10%) |
| Engine & Infrastructure | 10 | **43.5%** | **declared deviation** (10–20%) |

The overshoot is structural to the archetype — every payoff here is also a defender body, so a card
that wins the game necessarily occupies a creature slot too — but it is an overshoot, and filing it
elsewhere would have made the band look clean without changing a single card.

### WHERE THIS BUILD SITS AMONG THE FOUR

| | WB | WU | UB | **WUB** |
|---|---|---|---|---|
| Defender bodies | 11 | 12 | 12 | **16** |
| Payoffs | 2 | 2 | 2 | **3** |
| One-sided sweeper | yes | no | yes | **no** (kills own Birds) |
| Maindeck fliers | Paragon + Redeemer | Paragon + Redeemer | none | Birds only |
| Tapped lands | 2 | 2 | 2 | **6** |
| Interaction | 34.8% | 39.1% | 39.1% | **30.4%** |
| Double-pip cards allowed | yes | yes | yes | **no** |

It is the most decapitation-resistant of the four — three payoffs at two copies each, all fetchable by
Shield-Wall Sentinel since all three have Defender — and the most vulnerable to a sweeper, because
every one of the three kills reads the same board.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:8  2:6  3:4  4:4  6:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 6.2: Blight Pile@0.9, Blight Pile@0.9, Coral Colony@0.7, Coral Colony@0.7, Walking Bulwark@0.5, Walking Bulwark@0.5) → p=0.92 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.7: Shield-Wall Sentinel@0.85, Shield-Wall Sentinel@0.85) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 82%  T2 97%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Clockwork Drawbridge, Academy Wall, Coral Colony, Blight Pile, Gibbering Barricade, Shield-Wall Sentinel, Wingmantle Chaplain, Walking Bulwark
  OK        single_large_threat: Leyline Binding, Destroy Evil, Rona's Vortex, Cut Down
  OK        noncreature_permanents: Leyline Binding, Destroy Evil
  OK        stack: Essence Scatter
  CONCEDED  graveyard: The pool contains zero graveyard hate in any colour, so no deck can answer this class. This build's exposure is the lowest of the three that run Coral Colony, because mill is the third-priority activation behind the Bird clock and the drain - the deck usually wins without ever filling the opponent's graveyard, and against a graveyard deck the correct line is simply never to activate the mill.
```

_No WARN-tier structural flags were raised; all four checks returned PASS._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable mana sinks convert surplus lands into progress: Blight Pile '{2}{B}, {T}: Each opponent loses X life', Coral Colony '{1}{U}, {T}: Target player mills X cards', and Clockwork Drawbridge '{2}{W}, {T}: Tap target creature'. Walking Bulwark '{2}' per creature scales without limit. With 14 defenders the flood turns are when the deck fires two or three of these in one turn. |
| screw | mitigation | Eight one-mana cards - the most of any of the four builds - Clockwork Drawbridge x2, Walking Bulwark x2, Cut Down x2, Rona's Vortex x2, plus seven two-mana cards. The goldfish simulation reports keepable 85%, 3 lands by turn 3 at 88%, and a turn-1 play in 82% of games, the highest of the four. The real risk in three colours is colour rather than count, and the mitigation is structural: every mainboard card is single-pip, and the three common duals each supply two of the three colours. |
| decapitation | mitigation | Three payoffs at two copies each, sharing no card: Wingmantle Chaplain's Birds, Blight Pile's drain, Coral Colony's mill. Shield-Wall Sentinel x2 'search your library for a creature card with defender' fetches any of the three, since all three have Defender. Answering one payoff on sight leaves two, and the 14 defender bodies that feed them are untouched. This is the most decapitation-resistant of the four builds simply because it runs the most payoffs. |
| gas-out | mitigation | Academy Wall x2 filters on 7 of 23 nonland cards, and Shield-Wall Sentinel x2 is self-replacing - a body plus a card from library. The structural answer is stronger than either: two of the three win conditions are ACTIVATED ABILITIES on resolved permanents, so once Blight Pile or Coral Colony is on the battlefield an empty hand still wins. The deck does not need to keep drawing to convert. |
| raced | accepted | The cube's largest threat class is evasion at 50 opposing cards, and ground defenders cannot block a flier. This build's answer is better than the UB list's and worse than the WB list's: Wingmantle Chaplain's 1/1 flying Birds do block, and at 14 defenders the Chaplain makes more of them than in any other build, but they are 1/1s and trade down. There is no maindeck flier with more than 1 toughness. Mitigating properly would mean maindecking Serra Paragon and Serra Redeemer over defenders, and every defender cut reduces all THREE payoffs at once - a strictly larger cost here than in the two-colour builds, where only two payoffs read the count. That is the identity cost, and it is why both fliers are in the sideboard instead, alongside Artillery Blast x2 at Domain 4. |
| disruption-fizzle | mitigation | The critical turn is the Wingmantle Chaplain ETB, and if it is countered the Birds never arrive - but two of the three kills do not route through it at all. Blight Pile and Coral Colony are activated abilities reading a board that a countered Chaplain leaves entirely intact, with no cast trigger to interact with. Essence Scatter protects the critical cast, Shield-Wall Sentinel finds the second Chaplain, and that second copy's ETB counts every defender already in play, so the retry is strictly larger than the first attempt. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Floriferous Vinewall | The ninth defender, and the only one WUB cannot cast: {1}{G} is outside core_colors with an empty splash. |
| Citizen's Arrest | 'exile target creature or planeswalker an opponent controls' at {1}{W}{W}. Excluded purely on the manabase: this build runs ZERO double-pip cards, because six of its seventeen lands enter tapped and it needs three colours online. It is a maindeck 2-of in both the WB and WU lists. |
| Choking Miasma | Doubly excluded. It is {1}{B}{B}, a double pip this manabase cannot support - and more fundamentally 'All creatures get -2/-2' kills every 1/1 Bird token, and Birds are THIS build's primary clock rather than a secondary axis. The card that is a maindeck include in the WB and UB lists is actively anti-synergy here. |
| Extinguish the Light | 'Destroy target creature or planeswalker' at {2}{B}{B} - unconditional and excellent, but double-black on a three-colour base with only 7 black sources. |
| Sheoldred, the Apocalypse | {2}{B}{B}, double-black. A 4/5 deathtouch blocker and an independent clock, but the pip cost is exactly what this manabase forbids; it anchors the WB and UB lists instead. |
| Ertai Resurrected | {2}{U}{B} - two coloured pips in two different colours, which on a six-tapped-land three-colour base is harder than a double pip in one. It is the UB list's flexible answer; here Essence Scatter and Leyline Binding cover the same ground on single pips. |
| Elas il-Kor, Sadistic Pilgrim | {W}{B} - two coloured pips on turn 2, which this manabase cannot reliably support given six tapped lands. Its lifegain-and-drain-per-creature would otherwise scale well with 14 defenders and a Bird stream. |
| Adarkar Wastes | An untapped W/U dual. Rejected because it would spend one of the five rare/mythic slots on fixing for a deck whose plan reaches turn 8 anyway - the winning sketch's clean 1-rare budget is what left four slots for the sideboard. |
| Caves of Koilos | An untapped W/B dual. Same reasoning as Adarkar Wastes: a rare slot spent on fixing rather than on Serra Paragon or Serra Redeemer, both of which answer the deck's declared air weakness. |
| Impede Momentum | 'Tap target creature and put three stun counters on it.' Strong, and a tapped-target maker, but it is a sorcery; with only 9 interaction slots on a three-colour base the deck preferred instants and the two flash exile enchantments. |
| Impulse | 'Look at the top four cards of your library.' Would help find the missing colour on a six-tapped-land base, but every maindeck slot here comes out of the 14 defenders, and a card that adds 0 to all three payoff counts is the wrong trade in the build whose entire thesis is that number. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' would exile this deck's own Clockwork Drawbridge (1), Walking Bulwark (1), Coral Colony (2) and Blight Pile (2) - 8 of the 14 defender copies, including two of the three payoffs. |
| The Phasing of Zhalfir | Chapter III 'Destroy all creatures' erases the board all three payoffs read simultaneously - the single worst effect against this deck, not a card for it. |
| Karn's Sylex | Colourless and castable, but any X large enough to answer the real artifact/enchantment targets (mana value 3-4) destroys all 14 defenders. Recorded because it is the pool's only colourless mass answer, not recommended. |
| Smash to Dust | Not a candidate (red), but recorded across all four builds: its second mode is 'Destroy target creature with defender' - a dedicated hoser for this archetype at common, 2 copies available to any red drafter. |
| Drag to the Bottom | Not a candidate (its {2}{B}{B} is double-black anyway), but recorded as the sweeper this deck most fears. ORACLE PRECISION: 'Each creature gets -X/-X ... where X is 1 plus the number of basic land types among lands YOU control' - the caster's lands, i.e. the OPPONENT'S. A two-colour black deck casting it gets -3/-3; a Domain deck gets -4/-4 or more. At -3/-3 it kills 12 of this deck's 14 defender copies (all but Academy Wall x2 at 0/5) plus every 1/1 Bird; at -4/-4 it still leaves only Academy Wall. It is the single worst card against this archetype in the cube. |
| Shadow Prophecy | 'Domain - Look at the top X cards of your library, where X is the number of basic land types among lands you control. Put up to two of them into your hand...' At Domain 3 that is look-3-take-2, the only genuine 2-for-1 available in these colours, and it is a single-pip instant that would also raise Academy Wall's trigger rate. CONTESTED on slot grounds: interaction is already 4.6pp below the floor after adding Gibbering Barricade x2. This is the first card to try if the list wants more gas. |
| Jodahs Codex | 'Domain - {5}, {T}: Draw a card. This ability costs {1} less to activate for each basic land type among lands you control.' At Domain 3 that is {2},{T}: Draw a card, repeatable, on a colourless card that costs the manabase nothing. Rejected on the 5-mana deploy cost against a curve topping at 4, but it is the strongest flood-and-gas-out answer the grill surfaced. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.20 adj [MV 2.35 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  31.6%  prod  41.2%  gap  -9.6pp  [OK]
  U  demand  36.8%  prod  47.1%  gap -10.3pp  [OK]
  W  demand  31.6%  prod  47.1%  gap -15.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2                        PASS - no card exceeds 2 copies counting mainboard and sideboard jointly; verified by cube_search.get_max_copies against per_rarity {common:2, uncommon:2, rare:1, mythic:1}.
rares_mythics_max_1_copy                       PASS - Leyline Binding x1, Serra Paragon x1, Serra Redeemer x1.
rares_mythics_max_5_total_MB_plus_SB           PASS - 3 total (Leyline Binding rare mainboard; Serra Paragon mythic and Serra Redeemer rare in the sideboard). Two slots unspent. No rare land is run.
all_cards_from_cube_pool                       PASS - every name matched by exact string against the working pool cache.
basics_format_supplied                         Plains x5, Island x3 and Swamp x3 are format-supplied; the cube list contains no basics.
colour_usability                               PASS - every nonland card returns a non-None effective_cost.best_mode against core_colors [W,U,B] with an empty splash. Rona's Vortex prints {B,U} and both its cast mode and its {2}{B} kicker are payable here; Runic Shot and Stall for Time (sideboard) likewise have kickers payable in these colours.
```
