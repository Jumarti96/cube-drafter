---
deck_name: "ub-vohar-tempo-attrition"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-08-19T19:24:25Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x7   Swamp                       Basic land, untapped, on-colour
  x5   Island                      Basic land, untapped, on-colour
  x2   Contaminated Aquifer        ({T}: Add {U} or {B}.) This land enters tapped.
  x1   Molten Tributary            ({T}: Add {U} or {R}.) This land enters tapped.
  x1   Sunlit Marsh                ({T}: Add {W} or {B}.) This land enters tapped.
  x1   Tangled Islet               ({T}: Add {G} or {U}.) This land enters tapped.
```

### CREATURES (12)

```
CMC  Card                        Qty   Color Role                                                                            Rar
  2  Vohar, Vodalian Desecrator  x2    UB    payoff (engine, Merfolk)                                                        U
  2  Volshe Tideturner           x2    U     restricted ramp (Merfolk body)                                                  C
  3  Braids, Arisen Nightmare    x1    B     engine (repeatable card advantage)                                              R
  3  Haughty Djinn               x1    U     threat (evasive)                                                                R
  3  Voda Sea Scavenger          x2    U     selection (Merfolk body)                                                        C
  4  Ertai Resurrected           x1    UB    interaction (flash, modal)                                                      R
  4  Sheoldred, the Apocalypse   x1    B     threat (closer)                                                                 M
  4  Talas Lookout               x2    U     threat (evasive, replaces itself)                                               C
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                        Qty   Color Role                                                                            Rar
  1  Cut Down                    x2    B     interaction                                                                     U
  1  Rona's Vortex               x2    U     interaction                                                                     U
  2  Tribute to Urborg           x2    B     interaction                                                                     C
  3  Shadow Prophecy             x1    B     selection (Domain)                                                              C
  4  Extinguish the Light        x2    B     interaction                                                                     C
```

### OTHER SPELLS (2)

```
CMC  Card                        Qty   Color Role                                                                            Rar
  2  Founding the Third Path     x1    U     engine (spell rebuy)                                                            U
  4  The Phasing of Zhalfir      x1    U     interaction (answers resolved nonland permanents)                               R
```

## SIDEBOARD (10)

```
Card                        Qty   Color Role / When to board in                                                         Rar
Negate                      x2    U     hate: sweepers + noncreature permanents - vs. the cube's 6 sweepers (all non... C
Choking Miasma              x2    B     hate: wide boards - vs. token and go-wide decks only - 'All creatures get -2... U
Essence Scatter             x2    U     hate: creature decks - vs. creature decks whose threats outclass the removal... C
Impulse                     x2    U     flex: consistency - vs. grindy matchups - the maindeck runs 0 cantrips, so t... C
Pilfer                      x1    B     flex: hand disruption - vs. decks holding a specific answer or threat this d... C
Tolarian Terror             x1    U     flex: late-game threat - vs. grindy control matchups - with 10 instants and ... C
```

## ANALYSIS

### DECK IDENTITY

A Dimir control deck that answers everything and wins late off a graveyard engine. Vohar, Vodalian Desecrator is the named payoff and is genuinely two cards in one: '{T}: Draw a card, then discard a card' converts flooded lands into selection while filling the graveyard, and '{2}, Sacrifice Vohar: You may cast target instant or sorcery card from your graveyard this turn' rebuys the best answer already spent. Around it sits the deepest removal suite these colours offer in this cube - Cut Down answers 87 of the cube's 157 unique creature cards, Extinguish the Light is unconditional, and a kicked Rona's Vortex bottoms any creature regardless of size or ward. The Phasing of Zhalfir is modal via read ahead: started at chapter I it permanently removes any nonland permanent, started at chapter III it is a four-mana 'Destroy all creatures'. That one card is why this build concedes only a single coverage class - the graveyard, which no deck in this cube can answer. The manabase runs three off-colour common duals purely for their land types, putting all five basic land types in a two-colour deck. This build is CONTROL, not tempo: every Dimir dual in this cube enters tapped, so the colours cannot support the curve the archetype's name suggests, and the deck plays to that fact rather than against it.

### THIS IS A CONTROL DECK, AND THAT IS THE HONEST ANSWER TO "MERFOLK TEMPO"

The Dimir branch has the best card quality of the three builds and the worst manabase for the archetype's name. **Every Dimir dual land in Dominaria United enters tapped** — `Contaminated Aquifer` is the only one at any rarity, and there is no untapped alternative to buy even with the full rare budget. A tempo deck cannot be built on that.

So this build stops fighting the fact. It is pinned as **control**, and it uses what U/B actually has: the deepest removal suite in the cube.

| Removal | Cost | What it answers |
|---|---|---|
| Cut Down ×2 | {B} | **87 of the cube's 157 unique creature cards** (55%) have printed power+toughness ≤ 5 |
| Extinguish the Light ×2 | {2}{B}{B} | Unconditional; **95 of 157** (61%) have MV ≤ 3, so the 3-life rider is live more often than not |
| Rona's Vortex ×2 | {U}, kicked {2}{B} | The kicked mode bottoms the creature — the only answer in these colours that ignores size, indestructibility and ward-on-resolution |
| Tribute to Urborg ×2 | {1}{B}, kicked {1}{U} | −2/−2 base, scaling −1/−1 per instant/sorcery in the graveyard |
| Ertai Resurrected | {2}{U}{B} | Flash; counters a **spell, activated ability, or triggered ability**, or destroys a creature/planeswalker |
| The Phasing of Zhalfir | {2}{U}{U} | Modal — see below |

That is 10 of 23 nonland cards, 43.5%, at the top of the Control band. The enabler role assembles at **p = 0.99** by turn 9.

### THE CARD THAT CLOSED TWO HOLES AT ONCE

`The Phasing of Zhalfir` was not in the original build. It came out of the grill, and it is worth understanding why it is better than it looks.

Read ahead lets you **choose the starting chapter**. That makes one card two completely different spells:

- **Started at chapter I:** *"Another target nonland permanent phases out. It can't phase in for as long as you control this Saga."* That is permanent removal for an artifact or enchantment — a class blue and black have **zero** answers to in this cube. All 8 artifact/enchantment answers in Dominaria United sit in BG/G/R/W.
- **Started at chapter III:** *"Destroy all creatures."* A four-mana wrath.

Before it, this deck conceded three of the five coverage classes. After it, it concedes **one** — the graveyard, and the cube contains zero graveyard hate in any colour, so no deck in this environment covers that.

I had originally written the concession as "blue and black have zero recourse except the stack." That was too strong, and the grill caught it.

### THE DOMAIN MANABASE, THIRD TIME

Same trick as deck 2, and it is cheapest here. `Contaminated Aquifer` is `Land — Island Swamp`, so the deck's only true dual already supplies **two** of the five basic land types by itself. Three more commons finish the set:

- `Molten Tributary` (`Island Mountain`) → Mountain, taps {U}
- `Tangled Islet` (`Forest Island`) → Forest, taps {U}
- `Sunlit Marsh` (`Plains Swamp`) → Plains, taps {B}

Domain ceiling **X = 5** with only **5 of 17** lands entering tapped — better than deck 2's 7. It upgrades `Voda Sea Scavenger` ×2 and `Shadow Prophecy`, at zero rare cost.

**Typical is 2–3, not 5.** Island appears on 9 of 17 lands and Swamp on 10 of 17, so X = 2 is near-guaranteed — but Mountain, Forest and Plains each come from a single 1-of, so X = 5 needs all three singletons down at once and is rare.

### VOHAR IS TWO CARDS THAT COMPETE, AND THAT IS FINE

*"{T}: Draw a card, then discard a card"* — note the **then discard**. This is card-*neutral* selection, not card advantage. What it actually does is convert flooded lands into playables and stock the graveyard.

*"{2}, Sacrifice Vohar: You may cast target instant or sorcery card from your graveyard this turn"* — **9 of 23** nonland cards are legal targets, and Vohar's own looting is what put several of them there.

Sacrificing ends the looting, so the two abilities genuinely compete. Three things make that acceptable, each as a count: Vohar is a 2-of so the deck can cash one and keep the other; the abilities are sequential rather than exclusive (loot for several turns, then rebuy); and `Braids, Arisen Nightmare`'s sacrifice clause names "creature", so a Vohar you were going to eat anyway becomes *"that player loses 2 life and you draw a card."*

### THE THREAT COUNT IS A GATE OUTPUT, NOT A PREFERENCE

The Control band wants Threats/Payoffs at 5–10% — for 23 nonland cards, that is 2 cards. At exactly 2 threats the payoff role assembles at **p = 0.628**, which fails the hard 0.75 assembly gate outright.

So the deck runs 4 (17.4%), and the repair card is `Talas Lookout` ×2 — a **common**, so it costs nothing from the 5-rare budget, it flies, and its death trigger puts one card in hand and one in the graveyard, feeding both `Haughty Djinn`'s power and Vohar's rebuy pool. With it: **p = 0.79**.

The grill pointed out that one copy already passes at p = 0.7586 and the second is technically surplus. I kept both: clearing a hard threshold by 0.009 is a rounding error away from failing, not a margin. That is a judgment call, and it is recorded as one.

### WHAT THE GRILL CORRECTED

Three blocking findings, all of them mine:

1. I wrote that blue's only double-pip demand was a single `Haughty Djinn`. `Talas Lookout` is **{2}{U}{U} and runs at 2 copies** — the very card added to fix the assembly gate. The manabase was rebalanced (`Haunted Mire` → `Tangled Islet`, keeping the Forest type while moving a source from black to blue).
2. The noncreature-permanent concession was falsified by pool oracle text, as above.
3. My "p = 0.71 at the band ceiling" figure was computed with my own reliability weights silently dropped. The true value is **0.628** — which makes the band deviation *more* justified, not less.

### PLAY PATTERN

Turn 1 `Cut Down` or `Rona's Vortex` — 57% of hands have a turn-1 play. Turns 2–5 answer everything on curve while `Vohar` loots away excess lands. `Braids` and `Founding the Third Path` grind ahead on cards. `Sheoldred` lands around turn 4–6 and turns the deck's own draw into a clock while draining the opponent's. `The Phasing of Zhalfir` handles whatever the removal cannot. The goldfish is turn 9 and the deck is content to go longer.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (23 nonland):  1:4  2:7  3:5  4:7
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.7: Haughty Djinn@0.7) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.3: Tribute to Urborg@0.8, Tribute to Urborg@0.8, The Phasing of Zhalfir@0.7) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 90%
  play by turn: T1 57%  T2 93%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: The Phasing of Zhalfir
  OK        single_large_threat: Extinguish the Light, Rona's Vortex, Ertai Resurrected
  OK        noncreature_permanents: The Phasing of Zhalfir
  OK        stack: Ertai Resurrected
  CONCEDED  graveyard: The cube dossier structural census reports 0 graveyard-hate cards in the entire cube, so no deck in this environment can answer this class; conceding it costs nothing that was available.
```

All four structural checks returned PASS, so there are no WARN-tier deviations to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Vohar x2 read '{T}: Draw a card, then discard a card', converting a drawn land into a new card every turn at no mana cost. Braids, Arisen Nightmare explicitly names 'land' among its sacrifice types, so a surplus land becomes 'that player loses 2 life and you draw a card' at each end step - fodder in this list is 12 creature copies, 2 enchantments and 17 lands. Sheoldred turns each of those extra draws into 2 life. Three of the four Engine copies are flood outlets. |
| `screw` | mitigation | 83% of hands are keepable and 89% reach 3 lands by turn 3, with a 56% turn-1 play rate off Cut Down x2 and Rona's Vortex x2 - both one-mana instants that interact from the first turn. Volshe Tideturner adds a restricted source from turn 3. The land count is 17, exactly the computed target, with no hedging in either direction. Honest limit: 5 of the 17 enter tapped, so a two-land hand containing two taplands is a real mulligan. |
| `decapitation` | mitigation | Vohar is a 2-of and the deck does not require it: the declared payoff role is the 4-copy threat suite (Sheoldred, Haughty Djinn, Talas Lookout x2) at p = 0.79 by turn 9, and the enabler role is the 10-copy answer suite at p = 0.99. Losing both Vohars costs the card-selection engine and the answer-rebuy; the deck still holds the deepest removal package in these colours plus Sheoldred and The Phasing of Zhalfir. Ertai Resurrected protects a key permanent at flash speed by countering the removal spell aimed at it. |
| `gas-out` | mitigation | CORRECTED after Phase 9 finding F10, which showed the earlier entry called Vohar a free draw. Vohar's text is 'Draw a card, then discard a card' - card-NEUTRAL selection, not gas. The honest ledger: 5 net-positive copies (Braids, Arisen Nightmare draws at each end step for a spare permanent; Shadow Prophecy 'put up to two of them into your hand'; Talas Lookout x2 draw on death; Founding the Third Path chapter I casts a free spell) plus 2 neutral loots from Vohar x2 that convert flood into playables and stock the graveyard. Sheoldred converts each resulting draw into 2 life, which is what lets the deck pay Shadow Prophecy's 2 life and still stabilise. The sideboard adds Impulse x2, which the maindeck lacks entirely - audit.cantrip_count is 0. |
| `raced` | accepted | A control deck with 5 taplands and a turn-9 thesis will be behind on board against the cube's fastest starts - the 51-card evasion class concentrated in R and W - through the first three turns of every game. It interacts rather than blocks early: Cut Down at one mana answers 87 of the cube's 157 unique creature cards, and Rona's Vortex at one mana answers any of them temporarily. Mitigating further would mean maindecking cheap defensive bodies (Coral Colony 1/4 Defender, Gibbering Barricade 2/4 Defender) or a maindeck symmetric sweeper, and both cost the thing this deck is built to do: the Defenders would displace unconditional answers the turn-9 plan requires, they are ground blockers against a cube whose fastest class is evasion, and a maindeck Choking Miasma ('All creatures get -2/-2') kills this deck's own Vohar 1/2, Voda Sea Scavenger 3/2 and Talas Lookout 3/2 - 7 of its 12 creature copies have toughness 2 or less. Choking Miasma x2 is held in the sideboard for the matchups where that trade is correct. |
| `disruption-fizzle` | mitigation | There is no single critical turn to interact with - the deck's plan is a sequence of one-for-one answers, so a counterspell aimed at any one of them costs one card and changes nothing structural. The specific insurance is Vohar's rebuy clause: '{2}, Sacrifice Vohar: You may cast target instant or sorcery card from your graveyard this turn' means an answer that was countered or spent is not gone, and 9 of 23 nonland cards are legal targets for it. Ertai Resurrected has Flash and its first mode counters 'target spell, activated ability, or triggered ability', which is the widest single answer in the deck. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sheoldred, the Apocalypse (MYTHIC) | INCLUDED, listed here only to record that it is the single best card available to these colours and consumes one of the five rare slots. 'Deathtouch / Whenever you draw a card, you gain 2 life. / Whenever an opponent draws a card, they lose 2 life.' If you rebuild this deck, cut it last. |
| The Cruelty of Gix (RARE) | Maindecked through the structural gate and CUT in the Phase 9 repair. Chapter I strips a creature or planeswalker from hand, chapter II tutors any card, chapter III reanimates a creature from ANY graveyard - the deck's only tutor and only reanimation. Lost its rare slot to The Phasing of Zhalfir because the deck had ZERO answers to a resolved artifact or enchantment against 33 such cards in the cube, and Phasing is a mana cheaper ({2}{U}{U} vs {3}{B}{B}). The closest cut in this build; take it back if you accept the noncreature-permanent hole. |
| Liliana of the Veil (MYTHIC) | The most powerful card in these colours after Sheoldred. Excluded on the shape judge's grounds: '+1: Each player discards a card' is symmetric, and this deck's plan is to hold up reactive answers, so the loyalty ability that is supposed to be the engine costs the controller more than the opponent in most games it wants to play. The -2 edict is genuinely strong; if you value that alone, it replaces Braids. |
| Drag to the Bottom (RARE) | 'Domain - Each creature gets -X/-X until end of turn, where X is 1 PLUS the number of basic land types among lands you control.' In THIS manabase (all five basic land types available, typically 2-3 realised) it is -3/-3 to -6/-6, materially better than the shape judge's analysis of the rejected sketch assumed. Excluded only on the rare budget being at 5 of 5. The first card to consider if you drop a rare. |
| Tyrannical Pitlord (RARE) | A 6/6 flying trample for {4}{B}{B}, but 'As this creature enters, choose another creature you control... When this creature leaves the battlefield, sacrifice the chosen creature.' In a deck with 12 creature copies, most of them 1/2s and 3/2s, the drawback is real and the body costs six mana in a build whose curve tops at four. |
| Rona, Sheoldred's Faithful | 'Whenever you cast an instant or sorcery spell, each opponent loses 1 life' fires on 10 of 23 nonland cards, and it recurs from the graveyard by discarding two cards. A strong uncommon a tier below the includes; excluded because {1}{U}{B}{B} is four pips of two colours at MV 4, which a base with 5 tapped lands cannot promise on curve. |
| Vodalian Hexcatcher (RARE) | The Merfolk lord, and this deck runs 6 Merfolk copies (Vohar x2, Volshe x2, Voda x2) so the anthem would reach 6 bodies. Excluded on the rare budget. Worth recording that the shape judge caught a sketch assigning it a 'protection' role - it has NO protection ability; its text is an anthem and a sacrifice-fuelled soft counter. |
| Vodalian Mindsinger (RARE) | A Merfolk, but BOTH its kickers ({1}{R} and {1}{G}) are unavailable in Dimir, so it is a {1}{U}{U} 2/2 whose steal clause reaches only power 0-1. The worst of the three colour pairs for this card. |
| Sphinx of Clear Skies (MYTHIC) | A 5/5 flier with ward 2 whose Domain trigger would look 2-3 deep here. Excluded on the rare budget, and the shape judge noted that in a deck with a graveyard engine it duplicates what a discounted Tolarian Terror does for zero rare cost. |
| Tolarian Terror | 'Costs {1} less to cast for each instant and sorcery card in your graveyard', 5/5 ward 2. With 10 instants and sorceries it is realistically a 2-3 mana 5/5 by turn 8. Kept in the SIDEBOARD rather than maindecked: its printed MV 7 distorts the land-count model, and the threat slot is already deviating from its band. Comes in for grindy control matchups. |
| Pilfer (2nd copy) | Cut to 1 in the Phase 9 repair. It was roled as combo hate, but the dossier's interaction_chains list is empty and threat_profile records no combo class - two of ten board slots were justified against a class the cube does not evidence. Kept at 1 as generic hand disruption. |
| Choking Miasma | In the SIDEBOARD, not the maindeck. 'All creatures get -2/-2' is the deck's answer to a wide board, but 7 of its own 12 creature copies have toughness 2 or less (Vohar 1/2 x2, Voda 3/2 x2, Ertai 3/2, Talas Lookout 3/2 x2), so maindecking it would answer the opponent by destroying this deck's own engine. |
| Cult Conscript / Eerie Soultender / Monstrous War-Leech | The graveyard-recursion package a more dedicated engine build would use. Excluded because this build's engine is spell rebuy (Vohar, Founding the Third Path), not creature recursion, and adding a second graveyard axis would dilute the removal count that is the actual reason to be in these colours. |
| Aggressive Sabotage / Braids's Frightful Return | Discard and sacrifice value at three mana. Both lost to the removal suite: against a cube whose largest threat class is 51 evasion cards, unconditional creature destruction beats symmetric discard. |
| Coral Colony / Gibbering Barricade | Defender bodies that would mitigate the accepted 'raced' exposure. Excluded with the cost stated: they would displace unconditional answers the turn-9 plan requires, and they are ground blockers against a cube whose fastest decks fly. |
| Geothermal Bog / Idyllic Beachfront / Haunted Mire | All three carry a basic land type the Domain package wants. Haunted Mire (Swamp Forest) was maindecked and SWAPPED OUT in the Phase 9 repair for Tangled Islet, which supplies the same Forest type while producing blue instead of black - the fix for a real pip-count error. Geothermal Bog duplicates Molten Tributary's Mountain on the black side; Idyllic Beachfront duplicates Sunlit Marsh's Plains on the blue side. Any of them is a reasonable substitution if you want to re-tilt the colours. |
| Crystal Grotto / Adarkar Wastes / Caves of Koilos | None carries a basic land type, so none contributes to Domain. Adarkar Wastes and Caves of Koilos are additionally rares that produce white. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.13 adj [MV 2.65 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  47.1%  prod  58.8%  gap -11.7pp  [OK]
  U  demand  52.9%  prod  52.9%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Pool base                : commons/uncommons max 2 copies, rares/mythics max 1 copy, base = cube mainboard, no exclusions.
[PASS] Rare/mythic cap          : 5 of 5 used (0 remaining)
                                  Braids, Arisen Nightmare (main, rare); Haughty Djinn (main, rare); Ertai Resurrected (main, rare); The Phasing of Zhalfir (main, rare); Sheoldred, the Apocalypse (main, mythic)
[PASS] Copy limits              : Verified by Phase 5C check 3 against cube_search.get_max_copies. Essence Scatter is 0 main + 2 side = 2, at the common cap; Talas Lookout 2 main; no card exceeds its rarity cap or its available pool copies.
[PASS] Basic lands              : Swamp x7 and Island x5 - format-supplied, exempt from copy limits. The three type-fixing duals are commons and count normally.
[PASS] All cards in cube        : Verified by Phase 5C check 2 (exact string match against the working pool cache).
[PASS] Colour usability         : every nonland card returns a usable mode from effective_cost.best_mode against core_colors ['U', 'B'] + splash []
[PASS] Deck / sideboard size    : mainboard 40 (23 spells + 17 lands); sideboard 10
```
