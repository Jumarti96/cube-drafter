---
deck_name: "wu-tempo-spellslinger"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WU"
format: "40-card"
built_at: "2026-08-04T04:29:39Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
9x Island                basic
6x Plains                basic
2x Idyllic Beachfront    ({T}: Add {W} or {U}.)
```

### CREATURES (15)
```
CMC  Card                  Qty   Color  Role                                           Rar
  1  Illvoi Galeblade      x1    U      fuel (no-target 1-drop)                        C
  2  Illvoi Operative      x2    U      threat/payoff                                  C
  2  Station Monitor       x2    WU     engine (second-spell trigger)                  U
  3  Cosmogrand Zenith     x1    W      engine (second-spell trigger)                  M
  3  Illvoi Infiltrator    x2    U      threat/payoff                                  U
  3  Sinister Cryologist   x2    U      interaction / warp enabler                     C
  3  Uthros Psionicist     x2    U      engine (cost reducer)                          U
  4  Sunstar Lightsmith    x2    W      engine (second-spell trigger + draw)           U
  5  Gigastorm Titan       x1    U      conditional beater / flood outlet              U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                  Qty   Color  Role                                           Rar
  1  Focus Fire            x2    W      interaction (combat removal)                   C
  1  Honor                 x2    W      fuel (cantrip)                                 U
  2  Desculpting Blast     x2    U      interaction (bounce)                           U
  2  Mental Modulation     x2    U      interaction (tempo cantrip / attack enabler)   C
```

## SIDEBOARD (10)
```
Card                  Qty   Color  Role / When to board in                        Rar
Annul                 x2    U      SB: counter artifact/enchantment spell         U
Seam Rip              x2    W      SB: cheap exile MV<=2                          U
Banishing Light       x2    W      SB: catch-all exile                            C
Dauntless Scrapbot    x2    C      SB: graveyard exile                            U
Unravel               x2    U      SB: universal counter                          U
```

## ANALYSIS

### DECK IDENTITY

WU Tempo Spellslinger. The deck converts cheap spells into permanent board advantage: on every turn it casts a second spell, Illvoi Operative and Sunstar Lightsmith each grow a +1/+1 counter, Station Monitor adds a flying Drone, Cosmogrand Zenith adds two bodies or pumps the whole team, and Sunstar Lightsmith replaces the card it just spent. Uthros Psionicist makes the second spell cost {2} less and Sinister Cryologist's Warp cost turns one card into two spell-casts on two different turns, so the turn-3-onward double-spell is a routine rather than an aspiration. It closes with Illvoi Infiltrator, which is unblockable on any two-spell turn and draws a card every time it connects, backed by a Gigastorm Titan that arrives as a 4/4 for {1}{U} once any other spell has been cast that turn.

### HOW THE DECK ACTUALLY WINS

The deck does not win by casting expensive spells. It wins by casting *two cheap ones every turn* and collecting a tax from each pair. The relevant arithmetic is not the curve - it is the cast count.

| Turn | Mana | A representative double-spell line | Triggers collected |
|---|---|---|---|
| 2 | 2 | Illvoi Operative | 0 |
| 3 | 3 | Honor + Station Monitor | 1 |
| 4 | 4 | Sinister Cryologist warped for {U} + Sunstar Lightsmith | 1 (+1 card) |
| 5 | 5 | Mental Modulation for {U} + Cosmogrand Zenith | 1 |
| 6 | 6 | Focus Fire + Illvoi Infiltrator, then attack unblockable | 1 (+1 card on connect) |

That is the goldfish-6 line, and every card in it is a common or uncommon.

### THE COUNT THAT SHAPED THE FINAL LIST

The self-grill turned on a single number. The thesis needs a second spell on turns 3, 4, 5 and 6 - **eight spell-casts**. On the play the deck sees 12 cards by turn 6, and at 17 lands in 40 that is **6.9 nonland cards**. Six point nine cards cannot make eight casts.

Uthros Psionicist fixes the *mana* cost of the second spell. Nothing in the original list fixed the *card* cost. Warp does:

> "You may cast this card from your hand for its warp cost. Exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn."

One card, two casts, on two different turns. Sinister Cryologist warped for {U} is a one-mana spell that shrinks a blocker by -3/-0 *and* banks a 3-mana 2/3 for later. Brightspear Zealot, which it replaced, benefited from the second spell without ever helping cast one. That is the whole trade: **two beneficiaries out, two enablers in.**

### THE TURN-1 PROBLEM

The grill found a second flaw worth recording, because it is invisible from a curve chart. The original list had five one-mana spells and **zero** turn-one plays on the play. Every cheap spell needed a target that did not yet exist:

- Honor - "Put a +1/+1 counter on target creature"
- Mental Modulation - "Tap target artifact or creature"
- Focus Fire - "target attacking or blocking creature"

Illvoi Galeblade ("{U} Flash Flying") is the only one-mana W/U spell in the entire 276-card pool that requires no target at all. Moving it from the sideboard took the no-target turn-1 rate from roughly 0% to 44.2%.

### WHY GIGASTORM TITAN IS A ONE-OF

Its text reads "This spell costs {3} less to cast **if you've cast another spell this turn**." That makes it a 4/4 for {1}{U} - but it also means the Titan can only ever be the *beneficiary* of a double-spell turn, never the enabler. It cannot be the first spell that turns the engine on. One copy is retained as the flood outlet: when the discount is unavailable, {4}{U} is exactly what a flooded hand can pay.

### THE MANA IS THIN AND THE DECK IS BUILT AROUND IT

The cube has exactly **one** free WU dual - Idyllic Beachfront, which enters tapped - and **zero** untapped-capable WU duals. So the deck contains exactly one WU-costed card (Station Monitor) and **no card anywhere with two pips of the same colour**. One source of each colour suffices at every point on the curve. This is also why Unravel ({1}{U}{U}) is a sideboard card: it is the only card in all 50 that asks for a double pip, and boarding it in is the one change that strains the manabase.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:5  2:8  3:7  4:2  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.6: Illvoi Infiltrator@0.8, Illvoi Infiltrator@0.8) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 12: Honor@0.9, Honor@0.9, Focus Fire@0.6, Focus Fire@0.6) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 59%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Uthros Psionicist, Station Monitor, Focus Fire, Sinister Cryologist
  OK        single_large_threat: Desculpting Blast, Focus Fire, Mental Modulation, Sinister Cryologist
  OK        noncreature_permanents: Desculpting Blast
  CONCEDED  stack: Zero mainboard counterspells: holding mana open to counter directly contradicts the locked 'most proactive clock' lens, whose plan spends every point of mana double-spelling on its own turn; Annul and Unravel sit in the sideboard for matchups where that trade is worth making.
  CONCEDED  graveyard: No mainboard graveyard interaction; the clock wins on board and does not care what is in an opponent's graveyard, and the cube's graveyard-hate census is 1 card total, so dedicating a maindeck slot to it costs a second-spell fuel card for a matchup-specific effect.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana converts to cards or board without an extra land drop: Sunstar Lightsmith x2 draws on every second spell, Illvoi Infiltrator x2 draws on every connect, Gigastorm Titan is a 4/4 whose full {4}{U} price is exactly what a flooded hand can pay when its {3} discount is unavailable, and Sinister Cryologist's banked exile copy is a 3-mana 2/3 waiting to be cast. Honor and Mental Modulation both replace themselves, so an extra land is spent rather than stranded. |
| screw | mitigation | Curve is 5x MV1, 8x MV2, 7x MV3, 2x MV4, 1x MV5 across 23 nonland cards, so a two-land hand casts real spells: Illvoi Galeblade {U}, Sinister Cryologist warped for {U}, Illvoi Operative and Station Monitor are all castable on one or two lands, and the first two require no target at all. The goldfish sim reports 86% keepable hands, 96% playing a spell by turn 2 and 89% hitting a third land by turn 3. No card in the deck costs two pips of one colour. |
| decapitation | mitigation | There is no single key piece. The second-spell trigger lives on four different cards across 7 copies (Illvoi Operative x2, Station Monitor x2, Sunstar Lightsmith x2, Cosmogrand Zenith), and the assembly check reports p=0.96 of seeing a payoff by turn 6. Killing any one of them does not stop the others, and Brightspear Zealot and Gigastorm Titan read on the spell count directly rather than on a permanent. |
| gas-out | mitigation | 4 distinct cards / 8 copies are self-replacing or net-positive: Honor x2 (Put a +1/+1 counter on target creature. Draw a card.), Mental Modulation x2 (Tap target artifact or creature. Draw a card.), Sunstar Lightsmith x2 and Illvoi Infiltrator x2, which are recurring draw engines rather than one-shots. Sinister Cryologist x2 adds a fifth distinct card that is card-neutral rather than card-positive: its Warp cost buys a spell-cast without spending the card, which is banked for a full cast later. Sunstar Lightsmith in particular converts the very act of double-spelling into a replacement card, so the engine partly refuels itself. |
| raced | accepted | With 8 interaction cards and no lifegain the deck will lose some races outright. Mitigating means cutting cast-trigger payoffs for defensive cards, which is precisely the trade the locked 'most proactive clock' lens rejects: the deck's answer to a race is to be the faster deck, and every slot moved to defence pushes the goldfish turn past 6 and unmakes the thesis. The sideboard holds Seam Rip x2 (exile target nonland permanent with mana value 2 or less) for the games where that trade is worth making. |
| disruption-fizzle | mitigation | The critical turn is not a chain. Because the payoffs trigger on the SECOND spell EACH TURN, having one spell countered on a double-spell turn costs one trigger, not the game, and the next turn re-arms for free. Uthros Psionicist's {2} discount makes the fallback double-spell cheap enough to re-attempt immediately, Sinister Cryologist's Warp gives a one-mana spell that cannot be mana-denied, and Desculpting Blast can bounce the permanent that interfered. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Brightspear Zealot | RARE/MYTHIC-INDEPENDENT CUT (common). Cut in the Phase 9 repair: 'gets +2/+0 as long as you've cast two or more spells this turn' benefits from the trigger but supplies no spell-cast, and the deck needed casts, not beneficiaries — it must make 8 casts by turn 6 from only ~6.9 nonland cards seen. Replaced by Sinister Cryologist, whose Warp cost turns one card into two casts. The strongest single swap-back candidate if the deck ever wants more raw board presence. |
| Gigastorm Titan (2nd copy) | Cut to 1 copy in the Phase 9 repair. 'Costs {3} less to cast if you've cast another spell this turn' means it can only ever be the BENEFICIARY of a double-spell turn, never the enabler; at printed MV 5 two copies also pushed avg MV to 2.565 and the land count with it. One copy retained as the flood outlet. |
| Dual-Sun Technique | A keystone of the winning sketch that did not survive FILL. {1}{W} instant giving double strike, drawing only 'if it has a +1/+1 counter on it'. 5 of the 23 nonland cards place a +1/+1 counter (Illvoi Operative x2 and Sunstar Lightsmith x2 on themselves, Cosmogrand Zenith's counter mode, plus Honor x2), so the draw rider is live on a minority of boards AND requires the counter to already sit on the specific creature targeted. It is also the only card in the slice with no board presence of its own. |
| Divert Disaster | Judge-rejected on oracle grounds and not re-added: a counterspell cast on the OPPONENT's turn is the first spell of that turn and triggers zero of this deck's 9 second-spell payoffs. It answers the stack, which is exactly why it belongs in the sideboard conversation rather than the maindeck. |
| Consult the Star Charts | RARE cut. {1}{U} 'look at the top X cards, where X is the number of lands you control' — real selection, but the Engine & Infrastructure slot was full at 7 and adding it would widen a slot, re-blending the build the shape judge rejected. Mental Modulation does the same job for {U} on my turn while also tapping a blocker. |
| Quantum Riddler | MYTHIC cut (1 of the 5 unused rare/mythic slots). Warp {1}{U} makes it a two-mana second spell that replaces itself, then a 4/6 flier later — the Challenger named it a genuine absence. Excluded because its full MV 5 pushes avg MV back up and the deck already holds 17 lands against a computed target of 16. The single best candidate for spending a rare slot if you want a higher top end. |
| Starbreach Whale | Warp {1}{U}, then a 3/5 flier with 'surveil 2' on entry. Functionally the closest common alternative to Gigastorm Titan's slot and strictly better as an ENABLER (it can be the first spell of a double-spell turn, which the Titan cannot). Excluded only because Illvoi Galeblade took the vacated slot as the deck's sole no-target one-drop. |
| Knight Luminary | Warp {1}{W} for a spell that leaves a permanent 1/1 Soldier token behind even after the warped body is exiled. Excluded on colour weight, not power: this build runs 36% white pips and 8 white sources, and Knight Luminary wants {1}{W} on turn 2 far more reliably than the manabase supports. |
| Codecracker Hound | Warp {2}{U} is not a discount — the value is two casts and two 'look at the top two cards' selections from one card. Excluded because at 3 mana per cast it is the most expensive way this deck can buy a second spell; Sinister Cryologist buys the same second cast for {U}. |
| Starfield Vocalist | RARE cut. 'If a permanent entering the battlefield causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time.' Every payoff in this deck is a CAST trigger, not an ETB trigger: 0 of the 9 second-spell payoffs would be doubled. Zero text in this deck. |
| Command Bridge | The cube's only any-colour land, and it fixes the THIN WU mana on paper. Rejected on composition: 'This land enters tapped. When this land enters, sacrifice it unless you tap an untapped permanent you control' means it eats itself on turn 1 and taxes a permanent thereafter — both fight a plan that spends every point of mana double-spelling. |
| Haliya, Guided by Light | RARE cut. Warp {W} is the cheapest warp in white, but her text is a static lifegain trigger plus 'draw a card if you've gained 3 or more life this turn' — the deck has no other lifegain, so warping her produces a spell and nothing else, and her full cast needs {2}{W} in a 36%-white manabase. |
| Lightstall Inquisitor | RARE cut. A {W} 2/1 vigilance whose ETB lets each opponent exile a card and PLAY it (taxed {1}). It hands the opponent access to a card they had not drawn yet, which is a real cost against a cube where 74 of 249 nonland cards are artifacts they may be happy to deploy. |
| Hardlight Containment | RARE cut. '{W} Enchant artifact you control' — a one-mana exile effect, but it requires an artifact ALREADY on the battlefield. This deck's only artifacts are Station Monitor's Drone tokens, which need a double-spell turn to exist first. The dependency runs the wrong way. |
| Mechan Navigator | {1}{U} 2/1 'Whenever this creature becomes tapped, draw a card, then discard a card.' Loots rather than draws, and the deck's problem identified in the grill was CARD COUNT (8 casts needed from ~6.9 cards), which a rummage does not fix. |
| Pinnacle Emissary | RARE. Its Warp {U/R} hybrid makes it castable in mono-blue, so it is NOT a splash card — it is legal in the core pool. Excluded on function: 'Whenever you cast an artifact spell, create a 1/1 Drone' and this deck runs zero artifact spells (Station Monitor's Drones are tokens, not spells). 0 of 23 nonland cards would trigger it. |
| Roving Actuator | The deterministic splash filter named it as the only qualifying R candidate. Rejected because {3}{R} is uncastable on 17 W/U lands: the cube has 1 free UR dual and 2 free WR duals, none untapped-capable. |
| Beyond the Quiet (sideboard consideration) | RARE. '{3}{W}{W} Exile all creatures and Spacecraft' is the cube's best sweeper and is in-colour, but this deck is the one being swept — 15 of its 23 nonland cards are creatures. It is a card for the opposing archetype, not this one. |
| Radiant Strike (sideboard consideration) | {3}{W} 'Destroy target artifact or tapped creature. You gain 3 life.' Answers the cube's 74 artifacts, but at 4 mana it is the most expensive artifact answer available; Annul counters the same artifacts for {U} and doubles as second-spell fuel, so Annul x2 took the slots. |
| Cryoshatter (sideboard consideration) | {U} aura, -5/-0 and 'destroy it' when the enchanted creature becomes tapped or is dealt damage. Cheap answer to one large creature, but it is a sorcery-speed conditional kill; Seam Rip exiles outright for the same one mana against the MV<=2 threats this deck actually fears. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 0   Cantrips: 3
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.65 adj [MV 2.39 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand  64.0%  prod  64.7%  gap  -0.7pp  [OK]
  W  demand  36.0%  prod  47.1%  gap -11.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
base                                          cube_mainboard — every card verified by exact name against the working pool cache
commons_uncommons_max_2                       PASS — no card exceeds 2 copies
rares_mythics_max_1                           PASS — Cosmogrand Zenith is the only rare/mythic, at 1 copy
max_6_rares_mythics_total_MB_plus_SB          PASS - 1 of 6 used (Cosmogrand Zenith, mythic). 5 unused: this archetype's best cards are commons and uncommons available at 2 copies each, and 2-of consistency in a 40-card deck beats a 1-of rare for a deck whose thesis is repeating the same double-spell turn.
basics                                        Island x9, Plains x6 - format-supplied, exempt from copy limits
colour_identity                               PASS — every nonland card usable in W/U via effective_cost.best_mode; zero off-identity inclusions, zero alternate-mode inclusions
splash                                        PASS — splash_colors empty in the final build; the deterministic filter named Roving Actuator as an R candidate, rejected because {3}{R} is uncastable on 17 W/U lands
```