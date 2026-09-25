---
deck_name: "wu-wingmantle-mill"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-08-19T14:00:57Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x9  Plains                   basic, format-supplied
  x5  Island                   basic, format-supplied
  x2  Idyllic Beachfront       WU dual, enters tapped; carries both basic land types (Artillery Blast Domain)
  x1  Adarkar Wastes           WU dual, untapped, 1 damage per coloured tap
```

### CREATURES (14)

```
CMC  Card                           Qty  Col  Role                                           Rar
  1  Clockwork Drawbridge           x2   W    Enabler - defender count plus repeatable tapper C
  1  Walking Bulwark                x2   C    Payoff/Engine - converts defenders into attackers by toughness U
  2  Coral Colony                   x2   U    Payoff - non-combat mill kill                  U
  3  Academy Wall                   x2   U    Enabler/Engine - 0/5 wall, largest in the archetype, plus loot trigger C
  4  Wingmantle Chaplain            x2   W    Payoff - primary clock generator               U
  4  Shield-Wall Sentinel           x2   C    Enabler/Infrastructure - defender count plus defender tutor C
  4  Serra Paragon                  x1   W    Threat/Engine - flying body plus per-turn permanent recursion M
  5  Serra Redeemer                 x1   W    Threat - flying blocker and Bird multiplier    R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                           Qty  Col  Role                                           Rar
  1  Shore Up                       x1   U    Interaction - hexproof protection; also untaps Coral Colony for a 2nd mill C
  2  Impede Momentum                x1   U    Interaction - tap plus three stun counters, and makes a tapped target C
  2  Artillery Blast                x2   W    Interaction - Domain X=3 damage to a tapped creature C
  2  Destroy Evil                   x1   W    Interaction - large-creature or enchantment removal C
  2  Essence Scatter                x1   U    Interaction - counters a creature spell; the mainboard stack answer C
  3  Stall for Time                 x1   W    Interaction - taps two at instant speed, cantrips, makes tapped targets C
```

### OTHER SPELLS (2)

```
CMC  Card                           Qty  Col  Role                                           Rar
  3  Citizen's Arrest               x2   W    Interaction - exile creature or planeswalker   C
```

## SIDEBOARD (10)

```
Card                           Qty  Col  Role / When to board in                        Rar
Negate                         x1   U    vs sweepers and noncreature threats (note: cannot stop Karn's Sylex, an activated ability) C
Soaring Drake                  x1   U    vs evasion (51 cards, the cube's largest class) - a real flying blocker C
Prayer of Binding              x2   W    vs artifacts, enchantments and planeswalkers - flash, exiles any nonland permanent U
Rona's Vortex                  x2   U    vs a single large or hard-to-target threat - 1-mana instant bounce U
Protect the Negotiators        x2   U    vs combo or must-counter spells - taxes {1} per creature, 4-6 on a developed board U
Essence Scatter                x1   U    vs creature decks - second copy                C
Runic Shot                     x1   W    vs attacking decks - second copy; Impede Momentum and Drawbridge make targets U
```

## ANALYSIS

### DECK IDENTITY

A WU Defenders control deck built on twelve defender bodies - every defender the two colours can cast, each at its maximum two copies. Two payoffs read that count and convert it two different ways: Wingmantle Chaplain, which has Defender and counts itself, turning each subsequent defender ETB into a 1/1 flying Bird; and Coral Colony, whose {1}{U},{T} mills the opponent for the number of defenders controlled. At 40 cards that second line is not a consolation prize - on a normal one-defender-per-turn curve a single Coral Colony decks the opponent on turn 8 and two deck them on turn 6. Nine interaction spells and a counterspell buy the turns, Academy Wall's 0/5 body is the largest blocker the archetype has in any colour, and Shield-Wall Sentinel fetches whichever payoff the game is missing.

### TWO KILLS, AND THE MILL IS THE FASTER ONE

This deck has the same twelve-defender base as its WB sibling, but it converts the count very
differently. Both lines were simulated rather than asserted.

**The Bird clock.** Wingmantle Chaplain has Defender, so it counts itself and its ETB is never a
blank. Cast on turn 4 into three other defenders it makes 4 Birds; every later defender adds one
more. Attacking turns 5-8 for 4+5+6+7 deals **22 damage** — lethal on turn 8.

**The mill clock.** Coral Colony reads `{1}{U}, {T}: Target player mills X cards, where X is the
number of creatures you control with defender.` Against a 40-card opponent (33 in library after a
7-card opener, one draw per turn), with a Colony landing turn 2 and activating from turn 3:

| Turn | Defenders | Mill | Opponent library |
|---|---|---|---|
| 3 | 3 | 3 | 27 |
| 4 | 4 | 4 | 22 |
| 5 | 5 | 5 | 16 |
| 6 | 6 | 6 | 9 |
| 7 | 6 | 6 | 2 |
| 8 | 6 | 2 | **0** |

One Coral Colony decks them on **turn 8**. Two Colonies — 4 mana a turn to fire both — deck them on
**turn 6**, which is faster than the Birds. The shape judge flagged the mill as "a grind tax, not a
parallel win"; that was worth checking rather than accepting, and the arithmetic says otherwise.

### THE MILL HAS A COST THE CUBE MAKES REAL

Filling an opponent's graveyard is not free in *this* cube. The mill line puts 24-31 of their 40
cards into the yard by turn 8, and the pool contains **29 opponent-side cards that get stronger with
a full graveyard** — cost reducers (Tolarian Terror, Writhing Necromass), power-by-yard (Haughty
Djinn), draw-by-yard (Cosmic Epiphany), self-recursion (Cult Conscript, Squee), and about a dozen
reanimation spells. There is **zero graveyard hate in the entire pool, in any colour.**

So against graveyard decks the correct play is simply to never activate Coral Colony — legal, but it
means the deck has one win condition in those matchups, not two. This is the deck's real hidden
dependency and it is worth knowing before sideboarding.

### THE WALLS FIGHT EACH OTHER FOR TAPS

A subtle tension the card text creates: Walking Bulwark's attack mode taps the creature, and **4 of
the 12 defender copies have `{T}` in an activated cost** — Coral Colony ×2 and Clockwork Drawbridge
×2. Turning a Colony sideways forfeits that turn's mill. Bulwark's conflict-free targets are Academy
Wall (attacks as a **5**, its toughness) and Wingmantle Chaplain (as a 3), neither of which taps for
anything. The alpha-strike plan and the mill plan compete for the same permanents.

### WHY BLUE IS OVER-SUPPLIED

The audit shows blue produced at 47.1% against a pip demand of only 30.4% — a deliberate 16.7pp
overshoot. Raw pip demand is the wrong measure here: it reads **cast costs only**, and Coral
Colony's `{1}{U}` is an *activated* cost paid every turn from turn 3 onward. Eight blue sources is
what makes a turn-after-turn activation reliable; five would not.

### WHAT THIS COLOUR PAIR GIVES UP

The clearest difference from the WB build is that **W/U has no asymmetric sweeper.** The pool does
contain mass removal castable here — Temporary Lockdown (`exile each nonland permanent with mana
value 2 or less`) and Karn's Sylex — but both are symmetric against a deck whose payoffs count its
own permanents; Temporary Lockdown alone would exile 6 of the 12 defenders, including *both* Coral
Colonies. W/B gets Choking Miasma, which every one of its defenders survives. That asymmetry is the
single biggest card-quality gap between the two builds.

Two cards to play around, neither visible to the dossier's regex census: **Smash to Dust** (red
common) whose second mode is literally `Destroy target creature with defender`, and **Drag to the
Bottom**, a Domain −3/−3 sweeper that kills almost the whole board.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:5  2:7  3:5  4:5  5:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 5.4: Coral Colony@0.9, Coral Colony@0.9, Walking Bulwark@0.5, Walking Bulwark@0.5, Serra Redeemer@0.6) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.2: Shield-Wall Sentinel@0.85, Shield-Wall Sentinel@0.85, Serra Paragon@0.5) → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 66%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Clockwork Drawbridge, Academy Wall, Coral Colony, Shield-Wall Sentinel, Wingmantle Chaplain, Stall for Time
  OK        single_large_threat: Citizen's Arrest, Destroy Evil, Impede Momentum, Artillery Blast, Stall for Time
  OK        noncreature_permanents: Citizen's Arrest, Destroy Evil
  OK        stack: Essence Scatter
  CONCEDED  graveyard: The pool contains ZERO graveyard hate - the dossier reports none and an independent full-pool scan found only self-exile costs - so no deck in any colour can answer this class. But this list does NOT concede it on equal terms with the field, and that is stated rather than glossed: Coral Colony actively FILLS the opponent graveyard, putting 24-31 of their 40 cards there by turn 8, and 29 opponent-side cards in this cube get stronger with a full yard (cost reducers like Tolarian Terror and Writhing Necromass, power-by-yard like Haughty Djinn, self-recursion like Cult Conscript, and a dozen reanimation effects). The concession is therefore conditional: against graveyard decks the mill is simply not activated, which costs the deck its second kill in those matchups.
```

_No WARN-tier structural flags were raised; all four checks returned PASS._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two repeatable mana sinks convert surplus lands into progress: Coral Colony '{1}{U}, {T}: Target player mills X cards' every turn, and Clockwork Drawbridge '{2}{W}, {T}: Tap target creature'. Walking Bulwark '{2}: ... can attack as though it didn't have defender' is a third, and it scales with excess mana because it can be activated on multiple creatures in one turn. A flooded board is where the mill clock is fastest. |
| screw | mitigation | Five one-mana cards (Clockwork Drawbridge x2, Walking Bulwark x2, Runic Shot x1) and eight two-mana cards mean a two-land hand casts a defender on turn 1 and interacts on turn 2. The structural gate's goldfish simulation reports keepable_rate 0.86 and 3 lands by turn 3 at 88% on 1000 hands at seed 0 - the highest keepable rate of the four decks in this set, because the curve is the lowest. |
| decapitation | mitigation | Two independent kills that share no card. If Wingmantle Chaplain is answered on sight, Coral Colony x2 decks the opponent (turn 8 with one copy, turn 6 with two); if Coral Colony is answered, the Birds win in the air. Shield-Wall Sentinel x2 'search your library for a creature card with defender' fetches either half, and Serra Paragon recasts any dead permanent of mana value 3 or less - which includes Coral Colony (MV 2) but NOT Wingmantle Chaplain (MV 4). DISCLOSED per GRILL FINDING F1: this two-kill redundancy is matchup-conditional, not absolute. Against the cube's graveyard decks the correct play is to never activate the mill at all (see coverage_gaps_recorded.graveyard), and in exactly those matchups the deck has ONE kill, not two. |
| gas-out | mitigation | Academy Wall x2 'you may draw a card. If you do, discard a card' filters on 7 of 23 nonland cards, Shield-Wall Sentinel x2 is self-replacing (body plus a card from library), and Serra Paragon recurs one permanent of mana value 3 or less per turn - 10 of 23 nonland cards qualify. The deck's true anti-gas-out card is Coral Colony: once the mill clock is running it does not need to draw anything to win, because the win condition is an activated ability rather than a card that must be found. |
| raced | accepted | REWRITTEN per GRILL FINDING F3, which showed the previous acceptance rested on two false pool claims. It said 'W/U has NO sweeper available' and 'the only mass-removal effect in these colours is The Phasing of Zhalfir'. Both are false: Temporary Lockdown ({1}{W}{W}, mono-white) reads 'exile each nonland permanent with mana value 2 or less', and Karn's Sylex ({3}, colourless, so castable here) reads '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less'. Two rare/mythic slots are unspent, so neither was budget-blocked. The true cost is narrower and is stated here instead: Temporary Lockdown would exile 6 of this deck's own 12 defender copies - Clockwork Drawbridge x2 and Walking Bulwark x2 at MV 1, and BOTH Coral Colonies at MV 2, i.e. an entire win condition - and Karn's Sylex at any X that kills the opposing board kills 6 of ours too. A symmetric sweeper cannot be an answer for a deck whose two payoffs both count permanents it controls. What the grill also showed is that the old dichotomy (sweeper OR fliers) was false, and a third option costing zero defenders and zero rare slots exists: it has now been taken. Stall for Time ({2}{W} common instant) taps two attackers at instant speed and replaces itself, Shore Up ({U} common instant) protects a blocker, and the sideboard now carries Soaring Drake (2/3 Flying) as an actual flying body. What remains genuinely accepted is that against the cube's 51-card evasion class this deck answers threats one at a time rather than en masse, and that mitigating that fully would mean cutting defenders for fliers - every defender cut shrinks both Wingmantle Chaplain's Bird count and Coral Colony's mill X. That is the cost, and it is why this is a turn-8 deck rather than a turn-6 one. |
| disruption-fizzle | mitigation | CORRECTED per GRILL FINDING F2 and refined in the approval round. The original entry named Essence Scatter as protection for the Wingmantle Chaplain cast; its entire oracle text is 'Counter target creature spell', so it cannot answer a removal spell, sorcery, instant or enchantment aimed at the Chaplain, and at that point 0 of 23 mainboard nonland cards could. Shore Up was added: 'Target creature you control gets +1/+1 and gains hexproof until end of turn. Untap it.' PRECISE CLAIM, per the approval round: Shore Up targets a CREATURE, not a spell, so it protects the RESOLVED permanent from targeted removal - it does NOT protect the cast from a counterspell. Countermagic for the cast itself lives in the sideboard (Negate, Protect the Negotiators). Mainboard cards that can protect a resolved Chaplain or Coral Colony: 0 -> 1. The structural half of the mode was and remains sound: the two kills share no card, so disruption aimed at the Chaplain leaves the defender board untouched and Coral Colony's mill is an activated ability with no cast trigger to interact with. Shield-Wall Sentinel finds the second Chaplain, whose ETB counts every defender already in play and is therefore strictly larger than the first. Verified bonus: Shore Up's untap gives a second Colony activation in one turn - on turn 6 that is 5 of 6 mana for 12 mill, which pulls the one-Colony deck-out from turn 8 to TURN 7. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' is symmetric and would exile this deck's own Clockwork Drawbridge (1), Walking Bulwark (1) and Coral Colony (2) - three of its six defender cards sit at MV<=2. |
| The Phasing of Zhalfir | Chapter III reads 'Destroy all creatures', which destroys this deck's entire defender board and therefore both of its kill conditions at once. A sweeper is anti-synergy in a deck whose payoffs count permanents it controls. |
| Haughty Djinn | 'power is equal to the number of instant and sorcery cards in your graveyard' - a real flier, but it competes for a rare slot with Serra Paragon, which blocks the air AND rebuilds the board. |
| Silver Scrutiny | 'Draw X cards' at {X}{U}{U} is a mana sink, but this deck's mana is already committed every turn to Coral Colony's {1}{U} activation and Clockwork Drawbridge's {2}{W}; a sorcery-speed X-draw competes with the engines for the same mana. |
| Academy Loremaster | 'At the beginning of each player's draw step, that player may draw an additional card' is symmetric card advantage handed to an opponent whose deck is faster. A control deck holding the ground does not want to accelerate the opponent's access to threats. |
| Vodalian Hexcatcher | 'Other Merfolk you control get +1/+1' and 'Sacrifice a Merfolk: Counter target noncreature spell' - this list contains 0 Merfolk out of 23 nonland cards, so both abilities are blank. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' - this list runs 2 such cards (Rona's Vortex, Runic Shot), so the tutor has a 2-card denominator and the 4-mana 3/3 body is not otherwise on plan. |
| Stenn, Paranoid Partisan | 'Spells you cast of the chosen type cost {1} less' - naming instant would discount 8 of 23 nonland cards, a real number, but it is a legendary 2/2 with no Defender that advances neither payoff's count. |
| Tolarian Geyser | 'Return target creature to its owner's hand. Draw a card.' - sorcery speed makes it a tempo card in a deck that wants instant-speed answers; Rona's Vortex bounces for 1 mana at instant speed instead. |
| Blight Pile | A black defender and a third payoff ('each opponent loses X life'). Outside core_colors W/U; it anchors the separately-built WB and WUB lists. |
| Gibbering Barricade | A black defender with a sacrifice-for-cards outlet. Outside core_colors W/U. |
| Floriferous Vinewall | A green defender ({1}{G}); outside core_colors and the splash evaluation returned no splash. |
| Sheoldred, the Apocalypse | Off-colour for W/U (mono-black). It anchors the WB list. |
| Choking Miasma | The one-sided sweeper that made the WB list ('All creatures get -2/-2'; every defender survives). Its {1}{B}{B} cast mode is black, so it is uncastable here - this is the single biggest thing W/U gives up relative to W/B. |
| Take Up the Shield | A one-shot combat trick; this deck accumulates defenders and activates engines rather than winning a single combat step. |
| Vanquisher's Axe | '+2/+0' is literally not read on a wall attacking via Walking Bulwark, which 'assigns combat damage equal to its toughness rather than its power'. |
| Smash to Dust | Not a candidate (red), but recorded: its second mode is 'Destroy target creature with defender' - a dedicated hoser for this archetype, at common, 2 copies available to any red drafter. |
| Drag to the Bottom | ORACLE PRECISION (corrected): 'X is 1 plus the number of basic land types among lands YOU control' counts the CASTER's lands - the opponent's - not this deck's. My earlier note wrongly computed X from this deck's own manabase. Not a candidate (black), but recorded as the sweeper this deck must play around. Against an opposing two-basic-type deck it is -3/-3, killing 8 of this deck's 12 defender copies (Coral Colony x2 and Academy Wall x2 survive); at -4/-4 only Academy Wall x2 survives. |
| Founding the Third Path | Raised by the grill as a strong absence: chapter I casts an instant or sorcery of mana value 1 or 2 free, and 7 of 7 of this deck's instants/sorceries qualify. I first declined it on the grounds that chapter II worsens the graveyard-filling problem - the approval round showed that reasoning was WRONG, because chapter II reads 'TARGET PLAYER mills four cards' and can be aimed at yourself, which would instead feed Serra Paragon's graveyard recursion. The decline stands on the correct grounds: it is neither a defender nor interaction, and after the grill repair the interaction slot has no slack left (9 of 23 = 39.1%; cutting into it drops below the 35% floor). |
| Impulse | Raised by the grill: at x2 it would take Academy Wall's trigger denominator from 7/23 to 9/23. DECLINED because the Challenger's own analysis shows the two slots would have to come from interaction, dropping it to 30.4% - below the 35% control floor. |
| Karn's Sylex | Colourless, so castable here: '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less.' Recorded because my earlier claim that W/U has no mass removal was false. Not played: any X large enough to matter destroys 6 of this deck's own 12 defender copies. |
| Join Forces | 'Untap up to two target creatures. They each get +2/+2 until end of turn.' Untapping BOTH Coral Colonies would double a turn's mill outright. Rejected on rate against Shore Up - 3 mana versus 1, and no hexproof protection, which was the actual hole being filled. |
| Ertai's Scorn | A hard counter ('Counter target spell') and an upgrade on Essence Scatter in the abstract, but {1}{U}{U} demands double blue off 8 blue sources at 17 lands in a deck whose pip demand is 69.6% white. Essence Scatter's single {U} is the correct call. |
| Leyline Binding | Domain cost reduction scales with basic land types: this manabase has exactly 2, so it costs {3}{W} - identical to Prayer of Binding, which is uncommon, has flash, exiles any nonland permanent and gains 2 life. Prayer of Binding is strictly the better card here and costs no rare slot. |
| Aether Channeler | Shortlisted during the sweep but did not make the final list; the slot went to a card the grill showed was more load-bearing. Original note: 'choose one - Create a 1/1 white Bird creature token with flying. Return another target nonland permanent to its owner's hand. Draw a card.' - modal: removal, a body, or a cantrip depending on what the board needs. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.57   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.09 adj [MV 2.57 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  30.4%  prod  47.1%  gap -16.7pp  [OK]
  W  demand  69.6%  prod  70.6%  gap  -1.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2                        PASS - no card exceeds 2 copies counting mainboard and sideboard jointly (Runic Shot 1+1=2, Essence Scatter 1+1=2); verified by cube_search.get_max_copies against per_rarity {common:2, uncommon:2, rare:1, mythic:1}.
rares_mythics_max_1_copy                       PASS - Serra Paragon x1, Serra Redeemer x1, Adarkar Wastes x1.
rares_mythics_max_5_total_MB_plus_SB           PASS - 3 total (Serra Paragon mythic, Serra Redeemer rare, Adarkar Wastes rare). Sideboard contains 0 rares or mythics. Two slots unspent.
all_cards_from_cube_pool                       PASS - every name matched by exact string against the working pool cache.
basics_format_supplied                         Plains x9 and Island x5 are format-supplied; the cube list contains no basics.
colour_usability                               PASS - every nonland card returns a non-None effective_cost.best_mode against core_colors [W,U] with an empty splash. Two cards print off the core axis and are legal by mode: Runic Shot ({U,W}, its {U} kicker IS payable here, unlike in the WB list, so it may scry 2) and Rona's Vortex ({B,U}, cast for {U} with the {2}{B} kicker declined).
```
