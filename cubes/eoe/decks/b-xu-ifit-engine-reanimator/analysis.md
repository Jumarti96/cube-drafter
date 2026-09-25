---
deck_name: "b-xu-ifit-engine-reanimator"
cube_id: "eoe"
cube_slug: "eoe"
colors: "B"
format: "40-card"
built_at: "2026-09-04T01:11:22Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x2   Forest
  x13  Swamp
  x2   Haunted Mire                                 Swamp Forest, taps for BG, enters tapped
```

### CREATURES (11)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Seedship Broodtender                         x2    BG    engine                         U
  2  Timeline Culler                              x2    B     threat                         U
  2  Umbral Collar Zealot                         x2    B     engine                         U
  3  Xu-Ifit, Osteoharmonist                      x1    B     engine                         R
  4  Elegy Acolyte                                x1    B     threat                         R
  5  Voidforged Titan                             x1    B     threat                         U
  9  Bygone Colossus                              x2    C     threat                         U
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Embrace Oblivion                             x2    B     interaction                    C
  1  Tragic Trajectory                            x2    B     interaction                    U
  2  Hymn of the Faller                           x1    B     engine                         U
  3  Scrounge for Eternity                        x2    B     payoff                         U
```

### OTHER SPELLS (5)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Nutrient Block                               x1    C     engine                         C
  2  Wurmwall Sweeper                             x1    C     engine                         C
  3  Dubious Delicacy                             x1    B     interaction                    U
  3  Fell Gravship                                x2    B     engine                         U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Thaumaton Torpedo                            x2    C     hate: Against the artifact decks — threat_prof C
Chrome Companion                             x1    C     hate: Against a single recurring threat rather C
Depressurize                                 x1    B     flex: Against the fastest clocks — 'Target cre C
Virus Beetle                                 x1    B     hate: Against decks holding a single key answe C
Archenemy's Charm                            x1    B     flex: Against decks presenting one must-answer R
Dauntless Scrapbot                           x2    C     hate: Against any deck using its own graveyard U
Temporal Intervention                        x1    B     flex: Against combo and control — 'Void — This C
Susurian Dirgecraft                          x1    B     flex: Against a board this deck's targeted rem U
```

## ANALYSIS

### DECK IDENTITY

A mono-black attrition deck that treats its own graveyard as a second hand. Xu-Ifit, Osteoharmonist is the only reanimator in these colours with no mana-value cap and no mana cost, but the identity is stated WITH its tax rather than around it: the ability reads "Return target creature card from your graveyard to the battlefield. It's a Skeleton in addition to its other types and has no abilities." Of the creature cards Xu-Ifit can return here, only Bygone Colossus loses nothing, because its entire printed text is a warp cost that functions from hand or exile and never from play. Every other target comes back as a vanilla body. That is still a free threat every turn, but it is value, not a combo. Seedship Broodtender and Fell Gravship mill three on entry, Wurmwall Sweeper surveils two for {2} in any colour, and Umbral Collar Zealot turns any spare permanent into a surveil for free, which is simultaneously the deck's yard-fill and how it pays the sacrifice costs on Scrounge for Eternity and Embrace Oblivion.

### DECK IDENTITY

A mono-black attrition deck that treats its own graveyard as a second hand. Xu-Ifit, Osteoharmonist is the only reanimator in these colours with no mana-value cap and no mana cost, but the identity is stated WITH its tax rather than around it: the ability reads "Return target creature card from your graveyard to the battlefield. It's a Skeleton in addition to its other types and has no abilities." Of the creature cards Xu-Ifit can return here, only Bygone Colossus loses nothing, because its entire printed text is a warp cost that functions from hand or exile and never from play. Every other target comes back as a vanilla body. That is still a free threat every turn, but it is value, not a combo. Seedship Broodtender and Fell Gravship mill three on entry, Wurmwall Sweeper surveils two for {2} in any colour, and Umbral Collar Zealot turns any spare permanent into a surveil for free, which is simultaneously the deck's yard-fill and how it pays the sacrifice costs on Scrounge for Eternity and Embrace Oblivion.

### THE ENGINE, AND WHAT IT ACTUALLY COSTS

Xu-Ifit, Osteoharmonist is the reason this deck exists and the reason it has a ceiling. The ability is free, repeatable and uncapped — but it ends `has no abilities`, and that clause is not decoration. Of the 14 creature-or-Spacecraft cards in the list, Xu-Ifit can legally return 11 creature cards, and exactly one of them loses nothing:

| Reanimated by Xu-Ifit | Printed | What comes back | Text lost |
|---|---|---|---|
| Bygone Colossus | 9/9, `Warp {3}` | 9/9 | nothing — the warp cost only functions from hand or exile |
| Voidforged Titan | 5/4, Void draw | 5/4 | the card draw |
| Elegy Acolyte | 4/4 lifelink, draw, tokens | 4/4 | lifelink, the draw, the Void tokens |
| Umbral Collar Zealot | 3/2, free sac outlet | 3/2 | the sac outlet |
| Seedship Broodtender | 2/3, mill 3, reanimate | 2/3 | both abilities |

So the honest statement of the plan is: Xu-Ifit is a free threat every turn that becomes a *combo* only when it points at a Bygone Colossus. Everything else it returns is a body, and bodies are still how this deck wins a grind.

### FELL GRAVSHIP CANNOT BE REANIMATED BY ITS OWN ENGINE

A trap worth writing down: Fell Gravship is an `Artifact — Spacecraft`, not a creature card. Xu-Ifit reads `target creature card`, so it can never return one. The cards that can are Scrounge for Eternity and Seedship Broodtender, both of which read `creature or Spacecraft card` — which is precisely why they stay in the list even though Scrounge is capped at mana value 5. The same clause is why Wurmwall Sweeper, a Spacecraft at mana value 2, is a live target for three different cards here.

### THE TIMELINE CULLER LOOP

Timeline Culler is the only card in the deck that is better in the graveyard than in hand, and the loop is tighter than it first looks:

1. Warp it **from the graveyard** for `{B}` and 2 life — `You may cast this card from your graveyard using its warp ability.`
2. Attack with the 2/2 haste.
3. **Before your end step**, sacrifice it — to Umbral Collar Zealot for a free surveil, or as the additional cost on Embrace Oblivion or Scrounge for Eternity.

Because you sacrificed it, it goes back to the **graveyard** rather than being exiled by the warp trigger, and the whole thing repeats next turn. One card, and it is simultaneously a recurring 2-power clock, a renewable sacrifice cost, and a Void enabler for `{B}`.

### WHY THE GREEN SPLASH SURVIVED TWO ATTEMPTS TO CUT IT

Both the skeleton critic and the mana audit pushed against 2 Seedship Broodtender off 4 green sources, and the objection is fair — a `{B}{G}` two-drop is live only about 70% of the time by turn 4 on that count. It stays for one structural reason: Seedship Broodtender's `{3}{B}{G}, Sacrifice this creature: Return target creature or Spacecraft card from your graveyard to the battlefield` has **no mana-value cap**, and Xu-Ifit is a single copy under the rare limit. Without green, uncapped reanimation is 1 physical copy in 40 and the Phase 6b assembly check fails outright. With it, reanimation is 7 weighted copies across four cards and the gate passes at p=0.77. The colour risk is written into the `screw` failure mode rather than argued away.

### WHAT BEATS THIS DECK

Not a counterspell — the critical action is an activated ability. What beats it is a single colourless graveyard-exile effect, and this cube has them at commons and uncommons that any deck can splash. The mainboard's answer is refill speed rather than protection: 8 weighted yard-filler copies rebuild from empty, and Timeline Culler recurs itself regardless. The deck loses a turn to a graveyard wipe. It does not lose the game to one.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:5  2:8  3:6  4:1  5:1  9:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  reanimator: 7 copies (effective 4.3: Scrounge for Eternity@0.7, Scrounge for Eternity@0.7, Seedship Broodtender@0.45, Seedship Broodtender@0.45, Fell Gravship@0.5, Fell Gravship@0.5) → p=0.77 (need ≥ 0.75)
  PASS  yard_filler: 8 copies (effective 6.4: Wurmwall Sweeper@0.9, Seedship Broodtender@0.8, Seedship Broodtender@0.8, Umbral Collar Zealot@0.7, Umbral Collar Zealot@0.7, Hymn of the Faller@0.5) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 70%  T2 97%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Elegy Acolyte, Tragic Trajectory, Dubious Delicacy
  OK        single_large_threat: Embrace Oblivion, Tragic Trajectory, Dubious Delicacy
  CONCEDED  noncreature_permanents: Unanswered in the MAINBOARD at an acceptable cost — this is a claim about the deck, not the pool. The mainboard's removal (Embrace Oblivion 'Destroy target creature or Spacecraft', Dubious Delicacy '-3/-3', Tragic Trajectory '-2/-2 / -10/-10') stops at creatures and Spacecraft, so a non-Spacecraft artifact or any enchantment is unanswered game one. The pool DOES contain an answer in these colours and it is in the sideboard at 2 copies: Thaumaton Torpedo, {1} colorless common, '{6}, {T}, Sacrifice this artifact: Destroy target nonland permanent.' It is boarded rather than maindecked because its activation is {6} and the discount clause requires attacking with a Spacecraft. Supporting pool probes, cited rather than asserted: dossier.pool_limits records 'Artifact-removal probe (destroy/exile target artifact...) matched 0 mono-colour cards in: B, U' and 'Enchantment-removal probe (destroy/exile target enchantment...) matched 0 mono-colour cards in: B, R, U, W' — and per dossier.census_caveat those zeroes prove nothing about the pool, which is exactly why the concession above is scoped to the mainboard and names the counterexample the probes missed.
  CONCEDED  stack: Unanswered in the mainboard and in these colours; the deck's answer to a spell is to answer the permanent afterwards. Probe cited rather than asserted: cube_search.search_pool(pool, color_identity=['B'], splash_color_identity=['G'], oracle_pattern=r'[Cc]ounter target (spell|instant|sorcery|creature spell|noncreature spell)') -> 0 rows. Per dossier.census_caveat a 0-row probe is not proof of absence, so the operative claim is the weaker one: no counterspell is in this mainboard, and mitigating would require the blue splash the Phase 3 deterministic splash filter did not select (U scored total top-3 cluster overlap 3 against G's 7).
  CONCEDED  graveyard: Unanswered in the mainboard, deliberately, and answered from the sideboard at 3 copies (Dauntless Scrapbot x2, Chrome Companion x1). Probe cited rather than asserted: cube_search.search_pool(pool, color_identity=['B'], splash_color_identity=['G'], oracle_pattern=r'exile .{0,40}graveyard|graveyard.{0,40}(exile|bottom of)') -> 3 rows: Chrome Companion, Dauntless Scrapbot, Timeline Culler. Timeline Culler is a false positive — its 'exile' clause is its own warp, not graveyard interaction — so the pool offers this deck exactly two real answers and both are in the board. The cost of maindecking one: at 23 nonland cards this list already runs 8 weighted yard-filler copies and 7 weighted reanimation copies as non-optional infrastructure, and a maindeck graveyard-hate slot is blank against every deck in the cube that does not use its yard (87.5% of the cube by threat_profile, 31 of 249 nonland cards interact with graveyards). Trading an engine slot for a card that is dead in most matchups is the identity cost this concession accepts.
```

- No WARN-tier structural flags were raised on the final list - curve, assembly, goldfish and coverage all return PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Xu-Ifit's reanimation costs NO MANA at all - '{T}: Return target creature card from your graveyard to the battlefield' - so a flooded hand still deploys a threat every turn as long as the graveyard holds a creature card. The deck's card advantage lives in the yard, which is exactly the resource flood does not touch, and Umbral Collar Zealot is a second zero-mana outlet. (An earlier draft led with Scrounge for Eternity's Lander token; that clause is struck, because 'Search your library for a basic land card' converts mana into a FURTHER land and cannot mitigate flood.) |
| `screw` | mitigation | Keepable two-land hands are real: 13 of 23 nonland cards cost 2 or less (Nutrient Block, Tragic Trajectory x2, Embrace Oblivion x2, Umbral Collar Zealot x2, Seedship Broodtender x2, Timeline Culler x2, Wurmwall Sweeper, Hymn of the Faller), and the goldfish check returns 87% keepable with 88% on three lands by turn 3. COLOUR screw is a separate and real exposure the first draft did not state: 4 green sources support 2 Seedship Broodtender, which are 2 of the 8 weighted yard-filler copies and 2 of the 7 weighted reanimation copies, so a green-source-free draw costs a quarter of the redundancy on both axes. It is accepted because the alternative - cutting green - drops uncapped reanimation from 3 physical copies to 1 and fails the assembly gate. Digging out is thin: Hymn of the Faller is the only card selection in the list. |
| `decapitation` | mitigation | Xu-Ifit answered on sight is survivable because reanimation is declared as 7 weighted copies across four different cards: Scrounge for Eternity x2 returns anything MV<=5, Seedship Broodtender x2 returns anything at all for {3}{B}{G}, and Fell Gravship x2 return a creature or Spacecraft card to hand. The assembly gate passes at p=0.77 on that redundancy rather than on Xu-Ifit alone. |
| `gas-out` | mitigation | The refuel is the graveyard, not the library. Counted against the deck array's tags: cards carrying a Cards: label are Voidforged Titan x1 (Net-Positive), Fell Gravship x2 (Self-Replacing) and Hymn of the Faller x1 (Net-Positive) = 4, plus Nutrient Block ('When this artifact is put into a graveyard from the battlefield, draw a card'), which carries no Cards: tag but plainly replaces itself = 5 mainboard cards that replace themselves. On top of that Timeline Culler x2 recast THEMSELVES from the graveyard for {B}, Elegy Acolyte draws on any successful attack, and Xu-Ifit converts the yard into board every turn for free. (Elegy Acolyte carries no Cards: tag - its tags are Lifegain, Tokens, Engine/Outlet, Payload/Payoff, Card Draw, Token Generation - and an earlier draft both claimed it did and mis-assigned Hymn of the Faller to the unlabelled side.) |
| `raced` | accepted | Against the fastest clocks in this cube the deck is behind on turns 1-3 and its own kill does not arrive until turn 6. Mitigating would mean trading the 2-drop engine slots (Umbral Collar Zealot, Seedship Broodtender, Wurmwall Sweeper) for cheap aggressive bodies or lifegain - but those are precisely the cards that fill the graveyard, and the assembly gate's 8 weighted yard-filler copies would collapse. The deck would stop being a reanimator. The cost is accepted and pushed to the sideboard: Depressurize is the dedicated anti-aggro board-in, and Elegy Acolyte's lifelink plus Fell Gravship's 8+ lifelink mode are the only life-swing in the mainboard. |
| `disruption-fizzle` | mitigation | Two vectors, both answered. (1) The critical turn is an Xu-Ifit ACTIVATION, not a spell: it is an activated ability, so no counterspell can stop it, and if Xu-Ifit is removed in response the ability has already resolved. If the reanimated body is then answered, the creature card goes back to the graveyard and Xu-Ifit returns it again next turn at no mana cost - the plan retries rather than folds. (2) The vector that actually threatens this deck is OPPOSING GRAVEYARD HATE: threat_profile.graveyard_interaction is 31 cards / 12.45% of the cube, and colourless exile effects exist that any deck can splash - this deck's own sideboard runs two of them. A single 'exile each opponent's graveyard' ETB deletes the resource deck_identity calls a second hand. The mainboard answer is refill speed: Wurmwall Sweeper ({2}, 'surveil 2', colourless), Hymn of the Faller ({1}{B}, 'Surveil 1, then you draw a card'), Fell Gravship x2 and Seedship Broodtender x2 ('mill three cards' each) and Umbral Collar Zealot x2 (free repeatable surveil) are 8 weighted copies that rebuild a yard from empty, and Timeline Culler recurs itself for {B} regardless. The deck loses a turn to a graveyard wipe; it does not lose the game to one. [Sizing corrected: this 12.45% is threat_profile.graveyard_interaction, which counts every card that USES a graveyard, several of them this deck's own. The right key for OPPOSING hate is dossier.structural_census.graveyard_hate, which lists one card (Dauntless Scrapbot); a hand probe finds one more the census missed (Chrome Companion). Dedicated graveyard hate is roughly 2 of 249 nonland cards, so this threat is smaller than the figure implies - the error was in this deck's favour.] |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Sunset Saboteur | 'Whenever this creature attacks, put a +1/+1 counter on target creature an opponent controls' — the attack trigger buffs the OPPONENT'S board, an anti-synergy that gets worse the longer this grindy deck goes; and it is a rare competing for a 5-slot budget the engine already claims. |
| The Endstone | 'At the beginning of your end step, your life total becomes half your starting life total, rounded up' locks you at 10 life every turn — a fatal clock for a deck with no lifegain plan and a {7} mythic against the rare cap. |
| Monoist Sentry | 'Defender' — a 4/1 that cannot attack. It is a legal Xu-Ifit target and cheap fodder, but reanimating a Defender advances no clock, and the deck already runs 15 permanents that can pay a sacrifice cost. |

## MANA AUDIT: WARN

```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.33 adj [MV 2.87 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [WARN]
  B  demand 100.0%  prod  88.2%  gap +11.8pp  [WARN]

Flags:
  WARN  B  gap +11.8pp

Splash Check: [PASS]
  G  2 card(s), max CMC 0  sources 4/3  [OK]
```

## RESTRICTIONS COMPLIANCE

```

```