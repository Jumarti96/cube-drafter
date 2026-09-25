---
deck_name: "wb-wingmantle-drain"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-19T14:00:57Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x7  Plains                   basic, format-supplied
  x7  Swamp                    basic, format-supplied
  x2  Sunlit Marsh             WB dual, enters tapped; carries both basic land types
  x1  Caves of Koilos          WB dual, untapped, 1 damage per coloured tap
```

### CREATURES (15)

```
CMC  Card                           Qty  Col  Role                                           Rar
  1  Clockwork Drawbridge           x2   W    Enabler - defender count plus repeatable tapper C
  1  Walking Bulwark                x1   C    Payoff/Engine - converts defenders into attackers U
  2  Blight Pile                    x2   B    Payoff - non-combat inevitability drain        U
  2  Elas il-Kor, Sadistic Pilgrim  x1   BW   Engine - converts creature ETBs and deaths into life and drain U
  3  Gibbering Barricade            x2   B    Enabler/Engine - defender count plus repeatable draw outlet C
  4  Wingmantle Chaplain            x2   W    Payoff - primary clock generator               U
  4  Shield-Wall Sentinel           x2   C    Enabler/Infrastructure - defender count plus defender tutor C
  4  Sheoldred, the Apocalypse      x1   B    Threat/Engine - deathtouch wall plus symmetric draw drain M
  4  Serra Paragon                  x1   W    Threat/Engine - flying body plus per-turn permanent recursion M
  5  Serra Redeemer                 x1   W    Threat - flying blocker and Bird multiplier    R
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                           Qty  Col  Role                                           Rar
  1  Cut Down                       x2   B    Interaction - cheap instant removal            U
  2  Destroy Evil                   x1   W    Interaction - large-creature or enchantment removal C
  3  Choking Miasma                 x2   B    Interaction - one-sided sweeper; all 11 defenders survive U
```

### OTHER SPELLS (3)

```
CMC  Card                           Qty  Col  Role                                           Rar
  3  Citizen's Arrest               x2   W    Interaction - exile creature or planeswalker   C
  4  Prayer of Binding              x1   W    Interaction - flash exile any nonland permanent U
```

## SIDEBOARD (10)

```
Card                           Qty  Col  Role / When to board in                        Rar
Runic Shot                     x2   W    vs attacking decks - kills a tapped creature; Drawbridge makes targets U
Artillery Blast                x2   W    vs evasion (51 cards in cube) - Domain X=3 at instant speed C
Sheoldred's Restoration        x2   B    vs sweepers and removal-heavy - returns Chaplain to the BATTLEFIELD U
Extinguish the Light           x2   B    vs big creatures and planeswalkers - unconditional instant kill C
Phyrexian Missionary           x1   W    vs aggro - 2/3 lifelink blocker; kicked returns a creature to hand U
Destroy Evil                   x1   W    vs enchantments - the ONLY answer in W/B to an 18-card class C
```

## ANALYSIS

### DECK IDENTITY

A WB Defenders control deck that treats the defender count itself as the resource being scaled. Eleven defender bodies across six cards hold the ground while two payoffs convert that count into a win: Wingmantle Chaplain, which has Defender and therefore counts itself, turning every subsequent defender ETB into a 1/1 flying Bird; and Blight Pile, whose {2}{B},{T} drains each opponent for the number of defenders controlled, requiring no combat at all. Eight interaction spells buy the turns needed to reach that count, Choking Miasma sweeps a board that all eleven defenders survive, and Shield-Wall Sentinel makes the two-of payoffs findable. The deck wins in the air or through a stalled board, and does not care which.

### HOW THE TWO KILLS SCALE

Both win conditions read the same number — creatures with defender you control — but they convert it
differently, and that is the whole reason this deck runs two of them.

Wingmantle Chaplain has Defender, so it counts *itself*. Its ETB is never a blank:

| Other defenders out | Birds from the ETB |
|---|---|
| 0 | 1 |
| 2 | 3 |
| 3 | 4 |
| 4 | 5 |

and every defender that lands afterwards adds one more Bird per Chaplain in play. Blight Pile converts
the same count without combat at all:

| Defenders | Blight Pile x1 | Blight Pile x2 |
|---|---|---|
| 3 | 3/turn — 7 turns | 6/turn — 4 turns |
| 4 | 4/turn — 5 turns | 8/turn — 3 turns |
| 5 | 5/turn — 4 turns | 10/turn — 2 turns |

The deck holds 11 defender copies across six cards, and every one of the six W/B-castable defenders in
this cube is here at its maximum count — there is no twelfth defender to add.

### THE BIRD TOKENS ARE NOT DEFENDERS, AND THAT IS THE POINT

The single most load-bearing piece of oracle text in the deck is a negative. Chaplain creates "a 1/1
white Bird creature token with **flying**" — the token has no Defender. Three separate cards depend on
that:

- Gibbering Barricade's "Sacrifice a creature: You gain 1 life and draw a card" costs **zero** defender
  count when a Bird pays it, so the draw engine never shrinks either kill.
- Elas il-Kor drains 1 for each Bird that dies and gains 1 for each that enters.
- The Birds can attack, which no other creature in the deck can do without paying Walking Bulwark's {2}.

The shape judge flagged Gibbering Barricade as a weak keystone precisely because it assumed the
sacrifice cost eats defenders. It does not — but only because of a word in a token's text.

### THE ARCHETYPE'S STRUCTURAL WEAKNESS, AND WHAT IT COST TO FIX

A board of ground defenders cannot block a flier, and evasion is this cube's largest threat class at
51 cards / 20.6%. The first draft of this deck accepted that and justified it by claiming Sheoldred
contests the air. Sheoldred's oracle text is "Deathtouch / Whenever you draw a card, you gain 2 life /
Whenever an opponent draws a card, they lose 2 life" — no flying, no reach. The self-grill caught it,
and the deck now answers the class three ways instead of one bad sentence:

| Answer | Mechanism | Count against the cube |
|---|---|---|
| Choking Miasma x2 | "All creatures get -2/-2" | kills 15 of 46 evasive creatures; **all 11** defender copies survive |
| Serra Paragon | 3/4 Flying | an actual air blocker that also rebuilds |
| Serra Redeemer | 2/4 Flying | blocks, and makes each 1/1 Bird a 3/3 flier |
| Artillery Blast x2 (SB) | Domain X=3 to a tapped creature | kills 32 of 46 evasive creatures |

Choking Miasma is the interesting one: it is a *one-sided* sweeper here. Of 15 creature cards, 14
survive; only Elas il-Kor dies. Its honest cost is that it also kills every Bird, so it is a
behind-on-board card, not an ahead-on-Birds card.

### TWO CARDS THE CUBE'S CENSUS CANNOT SEE

The dossier's sweeper probe lists 6 cards, and a regex for "destroy all creatures" is why. Two threats
this deck must respect are invisible to it:

- **Drag to the Bottom** — "Each creature gets -X/-X, where X is 1 plus the number of basic land types
  among lands **you** control." That is the *caster's* lands, so the size is set by the opponent's
  manabase, not this deck's: a two-basic-type black deck casts it as −3/−3, which kills **9 of the 11**
  defender copies here (only Gibbering Barricade ×2 at 2/4 lives); a three-type deck makes it −4/−4 and
  kills all eleven. This is the card to play around, and it is black, so mirror-ish decks have it.
- **Smash to Dust** — a red *common* whose second mode reads "Destroy target creature with defender".
  A dedicated hoser for this entire archetype, available at 2 copies to any red drafter.

### WHAT THE DECK SIMPLY CANNOT DO

Graveyard interaction is the cube's second-largest class (32 cards / 13.0%) and there is **no**
graveyard hate anywhere in the pool, in any colour — conceded on equal terms with the field. Artifacts
(15 cards) have no W or B answer at all; Prayer of Binding's "exile target nonland permanent" is the
deck's only one, at a single copy. Neither gap is fixable in these colours.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:5  2:4  3:6  4:7  5:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.9: Blight Pile@0.9, Blight Pile@0.9, Walking Bulwark@0.5, Serra Redeemer@0.6) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 6.6: Shield-Wall Sentinel@0.85, Shield-Wall Sentinel@0.85, Elas il-Kor, Sadistic Pilgrim@0.4, Serra Paragon@0.5) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 65%  T2 91%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Choking Miasma, Clockwork Drawbridge, Gibbering Barricade, Blight Pile, Shield-Wall Sentinel, Wingmantle Chaplain, Sheoldred, the Apocalypse
  OK        single_large_threat: Citizen's Arrest, Destroy Evil, Prayer of Binding, Cut Down, Sheoldred, the Apocalypse
  OK        noncreature_permanents: Prayer of Binding, Destroy Evil, Citizen's Arrest
  CONCEDED  stack: W/B has no counterspell in this pool; the deck answers threats after they resolve with 8 interaction spells rather than on the stack, and its own win engines are permanents that must resolve anyway.
  CONCEDED  graveyard: The cube dossier reports 0 graveyard-hate cards in the entire pool, and an independent scan of every W/B/colourless-castable card in the working pool found none; no deck in any colour can answer this class, so conceding it costs nothing relative to the field.
```

_No WARN-tier structural flags were raised; all four checks returned PASS._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable mana sinks turn surplus lands into action: Blight Pile '{2}{B}, {T}: Each opponent loses X life', Clockwork Drawbridge '{2}{W}, {T}: Tap target creature', and Walking Bulwark '{2}: ... target creature with defender ... can attack as though it didn't have defender'. Gibbering Barricade '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' converts surplus bodies into fresh cards. A flooded board is this deck's preferred state, not its failure state. |
| screw | mitigation | Five one-mana cards (Clockwork Drawbridge x2, Walking Bulwark x1, Cut Down x2) and four two-mana cards (Blight Pile x2, Elas il-Kor x1, Destroy Evil x1) mean a two-land hand casts a defender on turn 1 and interacts on turn 1-2. The structural gate's goldfish simulation (build_output.structural_checks.goldfish) reports keepable_rate 0.841 and 3 lands by turn 3 at 88% on 1000 hands at seed 0. |
| decapitation | mitigation | The deck has two independent kills, so answering one does not answer the plan. If Wingmantle Chaplain is removed on sight, Blight Pile x2 wins with no combat; if Blight Pile is removed, Chaplain's Birds win in the air. Shield-Wall Sentinel x2 'search your library for a creature card with defender' fetches whichever half was answered, and Sheoldred's Restoration x2 in the sideboard returns a dead one to the battlefield, which re-fires Chaplain's per-defender ETB. |
| gas-out | mitigation | Gibbering Barricade x2 is a repeatable net-positive draw engine ('You gain 1 life and draw a card'), fed by Bird tokens. That stream is BOUNDED, not unbounded, per GRILL FINDING F8: Chaplain's second ability reads 'Whenever ANOTHER creature you control with defender enters', so Birds are capped by the 11 defender copies in the list plus whatever Shield-Wall Sentinel fetches. Beyond it, Sheoldred, the Apocalypse turns each Barricade draw into 2 life and each opponent draw into 2 damage, Shield-Wall Sentinel x2 is self-replacing (body plus a card from library), and Serra Paragon recurs one permanent of mana value 3 or less per turn from the graveyard - 10 of 23 nonland cards qualify. |
| raced | mitigation | REWRITTEN per GRILL FINDING F1, which correctly showed the previous acceptance rested on a false claim: Sheoldred, the Apocalypse's oracle text is 'Deathtouch / Whenever you draw a card, you gain 2 life / Whenever an opponent draws a card, they lose 2 life' - it has neither flying nor reach and cannot block a flier. This cube's largest threat class is evasion (51 cards, 20.6% of the pool) and a board of ground Defenders structurally cannot block it. The deck now answers the class three ways rather than accepting it. Choking Miasma x2 'All creatures get -2/-2 until end of turn' is a one-sided sweeper here: all 11 defender copies survive and only Elas il-Kor dies, while it kills the majority of the cube's evasive creatures, which are overwhelmingly small fliers. Serra Paragon is a 3/4 'Flying' body that actually contests the air and rebuilds afterwards. Serra Redeemer is a 2/4 'Flying' blocker that also turns each 1/1 Bird into a 3/3 flier, converting the race rather than merely surviving it. The sideboard adds Artillery Blast x2 (X = 3 damage to a tapped creature) and Runic Shot x2 (destroy target tapped creature), both of which hit attackers, since attackers are tapped by definition. |
| disruption-fizzle | mitigation | The critical turn is the Wingmantle Chaplain ETB. If it is countered or killed with the trigger on the stack, the Birds never arrive - but the defender board itself persists untouched, and Blight Pile's drain is an activated ability reading that same board, with no cast trigger to interact with. The plan retries rather than folds: Shield-Wall Sentinel finds the second Chaplain, and every defender already in play still counts for the replacement copy's ETB, so the second attempt is strictly larger than the first. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' is symmetric: it would exile my own Clockwork Drawbridge (1), Walking Bulwark (1), Blight Pile (2) and Elas il-Kor (2) — 4 of the deck's defender/payoff cards sit at MV<=2. Anti-synergy, not a fit. |
| Liliana of the Veil | '+1: Each player discards a card' is symmetric and this deck wants to keep cards; '-2: Target player sacrifices a creature' is edict removal that opposing decks dodge with tokens. Rare budget better spent on Sheoldred and Serra Redeemer. |
| Leyline Binding | Domain cost reduction scales with basic land types: this two-colour list has exactly 2 (Plains, Swamp), so it costs {3}{W}. Prayer of Binding does the same job at {3}{W} with flash and 2 life, at uncommon and off the rare budget. |
| Ratadrabik of Urborg | 'Whenever another legendary creature you control dies, create a token copy' — this list runs 1 legendary creature (Elas il-Kor) out of 23 nonland cards. Denominator too small to be an engine. |
| Anointed Peacekeeper | Naming a card taxes exactly one card in the opponent's deck; a 3/3 vigilance body does not raise the defender count, so it contributes nothing to Wingmantle Chaplain or Blight Pile's X. |
| Braids, Arisen Nightmare | Requires sacrificing a permanent each end step to draw; the deck's expendable permanents are Bird tokens, which Braids' own text does not distinguish, but the opponent chooses whether to pay — unreliable next to Gibbering Barricade's unconditional draw. |
| Aron, Benalia's Ruin | '{W}{B}, {T}, Sacrifice another creature: Put a +1/+1 counter on each creature you control' is a real Bird-fodder anthem, but {W}{W}{B} is a triple-pip 3-drop in a THIN-fixing two-colour deck and it competes with Elas il-Kor for the same gold slot. |
| Floriferous Vinewall | A green defender ({1}{G}); outside core_colors W/B and this deck's splash evaluation returned no splash. It would raise the defender count but not on WB mana. |
| Coral Colony | A blue defender and a third payoff ('mills X where X is the number of creatures you control with defender'). Off-colour for WB; it is the anchor of the separately-built WU and UB lists. |
| Academy Wall | Its loot trigger requires casting an instant or sorcery; more importantly it is blue and outside core_colors. The 0/5 body would be the best blocker in the archetype on WU mana. |
| Benalish Sleeper | Kicked, 'each player sacrifices a creature of their choice' is symmetric — this deck controls Bird tokens the opponent does not, but the opponent also chooses their worst creature, making it a poor removal rate. |
| Take Up the Shield | A one-shot combat trick; this deck wins by accumulating defenders and activating engines, not by winning a single combat step. Slot goes to permanent-based removal. |
| Vanquisher's Axe | '+2/+0' does nothing for Walking Bulwark's damage substitution, which assigns combat damage 'equal to its toughness rather than its power' — the pump is literally not read on an attacking wall. |
| Adarkar Wastes | An untapped WU dual (rare). Off-pair for WB and would spend a rare-budget slot on fixing for a colour this deck does not play. |
| Urborg Repossession | Raised by the grill as a 1-mana rebuy ({B} common; the {1}{G} kicker is unpayable so it is core-legal). Rejected because it returns a creature to HAND, while Sheoldred's Restoration returns it to the BATTLEFIELD - and only the battlefield version re-fires Wingmantle Chaplain's per-defender ETB. Same finding, strictly better card. |
| Griffin Protector | 'Flying / Whenever another creature you control enters, this creature gets +1/+1 until end of turn' - on a Chaplain turn it becomes a (2+N)/(3+N) flier. Rejected because the evasion problem is already answered three ways (Choking Miasma x2, Serra Paragon, Serra Redeemer) and the pump is until-end-of-turn only, so it does not hold the air across turns. |
| Archangel of Wrath | A 3/4 'Flying, lifelink' castable for {2}{W}{W} with both kickers declined. Rejected because it would be a 5th rare/mythic spent purely on an air blocker the deck already has in Serra Paragon (3/4 flying) at the same cost, and Paragon additionally recurs 10 of 23 nonland cards. |
| Knight of Dusk's Shadow | 'Your opponents can't gain life' answers the cube's 22-card lifegain class and protects the Blight Pile drain clock specifically. Cut from the sideboard in the grill repair to make room for Sheoldred's Restoration x2, which answers a BLOCKING finding (no battlefield rebuild against the cube's 6 sweepers) rather than an unflagged matchup. |
| Drag to the Bottom | ORACLE PRECISION (corrected): 'X is 1 plus the number of basic land types among lands YOU control' counts the CASTER's lands - the opponent's - not this deck's. My earlier note wrongly computed X from this deck's own manabase. Against an opposing two-basic-type black deck it is -3/-3, which kills 9 of this deck's 11 defender copies (only Gibbering Barricade x2 at 2/4 survives); against a three-type deck it is -4/-4 and kills all 11. It is the sweeper this deck must play AROUND, not play - and the dossier's sweeper probe does not list it, since a -X/-X effect is invisible to a 'destroy all creatures' regex. |
| Smash to Dust | Not a candidate (red), but recorded as the archetype's dedicated hoser: its second mode is literally 'Destroy target creature with defender', at common with 2 copies available to any red drafter. |
| Bone Splinters | Shortlisted during the sweep but did not make the final list; the slot went to a card the grill showed was more load-bearing. Original note: 'As an additional cost to cast this spell, sacrifice a creature. Destroy target creature.' — one-mana unconditional removal whose sacrifice cost is paid by an expendable Bird token. |
| Phyrexian Rager | Shortlisted during the sweep but did not make the final list; the slot went to a card the grill showed was more load-bearing. Original note: 'When this creature enters, you draw a card and you lose 1 life.' — self-replacing 2/2 body that keeps the grind going. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.37 adj [MV 2.78 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  46.4%  prod  58.8%  gap -12.4pp  [OK]
  W  demand  53.6%  prod  58.8%  gap  -5.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2                        PASS - no card exceeds 2 copies counting mainboard and sideboard jointly; verified by cube_search.get_max_copies against per_rarity {common:2, uncommon:2, rare:1, mythic:1}.
rares_mythics_max_1_copy                       PASS - Sheoldred x1, Serra Paragon x1, Serra Redeemer x1, Caves of Koilos x1.
rares_mythics_max_5_total_MB_plus_SB           PASS - 4 total (Sheoldred mythic, Serra Paragon mythic, Serra Redeemer rare, Caves of Koilos rare). Sideboard contains 0 rares or mythics. One slot unspent.
all_cards_from_cube_pool                       PASS - every name matched by exact string against the working pool cache.
basics_format_supplied                         Plains x7 and Swamp x7 are format-supplied; the cube list contains no basics.
colour_usability                               PASS - every nonland card returns a non-None effective_cost.best_mode against core_colors [W,B] with an empty splash. Three cards print off the core axis and are legal by mode, not identity: Runic Shot ({U,W}, unpayable {U} kicker, cast for {W}), Choking Miasma ({B,G}, unpayable {G} kicker, cast for {1}{B}{B}), and Sheoldred's Restoration ({B,W}, both modes payable in core).
```
