---
deck_name: "ub-alpharael-void-halver"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-08-05T03:12:27Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
9x Swamp                      Land
5x Island                     Land
2x Contaminated Aquifer       Land — UB dual
1x Watery Grave               Land — untapped-capable UB dual
```

### CREATURES (13)
```
CMC  Card                       Qty   Color  Role                                         Rar
  2  Timeline Culler            x2   B      Engine — haste, so the only warp body that attacks U
  3  Insatiable Skittermaw      x2   B      Payoff — Void-growing evasive clock          C
  3  Sinister Cryologist        x2   U      Engine — warp {U}: ETB -3/-0 + Void switch   C
  3  Susurian Voidborn          x2   B      Engine — warp {B}: cheapest black Void switch U
  4  Elegy Acolyte              x1   B      Payoff — lifelink body + Void token maker    R
  5  Alpharael, Stonechosen     x1   B      Payoff — the kill                            M
  5  Quantum Riddler            x1   U      Payoff — 4/6 flier hard-cast; warp {1}{U} buys draw + Void M
  5  Starbreach Whale           x2   U      Payoff — 3/5 flier hard-cast; warp {1}{U} buys ETB + Void C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                       Qty   Color  Role                                         Rar
  1  Tragic Trajectory          x2   B      Interaction — Void payoff removal            U
  2  Depressurize               x2   B      Interaction — instant removal                C
  2  Hymn of the Faller         x1   B      Engine — Void-scaled draw                    U
  3  Decode Transmissions       x1   B      Engine — Void-scaled draw + the deck's only reach C
  3  Unravel                    x1   U      Interaction — hard counter (sole mainboard stack coverage) U
  4  Gravkill                   x2   B      Interaction — unconditional exile            C
```

### OTHER SPELLS (1)
```
CMC  Card                       Qty   Color  Role                                         Rar
  1  Hylderblade                x1   B      Payoff — Void free-attach pump               U
```

## SIDEBOARD (10)
```
Card                       Qty   Color  Role / When to board in                      Rar
Annul                      x2   U      vs artifact/enchantment spells — cube artifact density 29.7% U
Zero Point Ballad          x1   B      vs go-wide boards                            R
Dauntless Scrapbot         x2   C      vs graveyard decks — exiles each opponent's graveyard U
Dubious Delicacy           x1   B      vs fast clocks — flash -3/-3, the only in-colour lifegain, and a Void switch when sacrificed U
Unravel                    x1   U      vs combo / oversized spells                  U
Lost in Space              x1   U      vs a RESOLVED artifact, which Annul cannot answer C
Mechanozoa                 x2   U      vs a single large threat — tap + stun, hard-casts as a 5/5 C
```

## ANALYSIS

### DECK IDENTITY

UB Warp-Void tempo. Cheap Warp costs — Sinister Cryologist for {U}, Susurian Voidborn for {B}, Timeline Culler for {B} plus 2 life, Starbreach Whale and Quantum Riddler for {1}{U} — buy an ETB trigger AND satisfy "a spell was warped this turn" for every Void ability that turn, at no card cost, because warp exiles the creature to be hard-cast later rather than losing it. Read the timing precisely: a warped creature is exiled at the beginning of your own end step that same turn, so it does not block and (absent haste) does not attack — warp is a one-mana down-payment on a 3-to-5 mana-value threat, not a discounted body. Alpharael, Stonechosen converts the permanently-on Void condition into the kill: each attack halves the defending player's life rounded up, a sequence that does reach zero because half of 1 rounded up is 1. The standing board that carries the combat damage is Insatiable Skittermaw x2, Elegy Acolyte, a hard-cast Timeline Culler x2 and a self-attaching Hylderblade.

### THE HALVING MATH, EXACTLY

Alpharael reads "defending player loses half their life, rounded up." That rounds toward the kill, not away from it, so the sequence terminates:

| Attack | Life before | Loses | Life after |
|---|---|---|---|
| 1 | 20 | 10 | 10 |
| 2 | 10 | 5 | 5 |
| 3 | 5 | 3 | 2 |
| 4 | 2 | 1 | 1 |
| 5 | 1 | 1 | **0** |

Five attacks with zero combat damage. That is too slow for a turn-8 thesis, which is exactly why this build was chosen over the two card-advantage-leaning sketches: it buys the combat damage that shortens the tail. From 20, one Alpharael connection (3 power, 6/4 with Hylderblade) plus the halving gives 20 -> 10 -> 4 (halve to 5, then 3 more from a Skittermaw) -> 0 in three attack steps. Decode Transmissions' Void mode ("each opponent loses 2 life") removes another whole step from the 3 -> 2 -> 1 -> 0 tail.

### THE VOID CONDITION IS OVER-SUPPLIED ON PURPOSE

Void reads "if a nonland permanent left the battlefield this turn **or a spell was warped this turn**." That second clause is what makes this deck work: it costs no card and no board presence.

| Category | Cards | Copies |
|---|---|---|
| Warp bodies (unconditional switches) | Sinister Cryologist, Timeline Culler, Susurian Voidborn, Starbreach Whale, Quantum Riddler | 9 |
| Removal that unconditionally removes a permanent | Gravkill | 2 |
| Removal that removes a permanent conditionally | Depressurize (power-gated), Tragic Trajectory (toughness-gated unaided) | 4 |
| **Total possible switches** | | **15 of 23 nonland cards** |

The unconditional floor is 11 of 23. No single enabler is load-bearing, which is why the deck does not fold to one counterspell on the critical turn.

### WHAT WARP ACTUALLY BUYS (read the exile timing carefully)

Warp reads "You may cast this card from your hand for its warp cost. **Exile this creature at the beginning of the next end step**, then you may cast it from exile on a later turn." Cast in your main phase, the next end step is *your own*, that same turn. So a warped creature:

- **does** resolve its enter-the-battlefield trigger,
- **does** satisfy "a spell was warped this turn" for every Void ability that turn,
- **does** come back to be hard-cast at full value later,
- **does not** survive to block on the opponent's turn, and
- **does not** attack, unless it has haste.

That last exception is the whole reason Timeline Culler is in this deck at two copies: "Haste / … Warp—{B}, Pay 2 life" makes it the only warp body in the list that adds combat damage on the turn it is warped.

So the honest accounting of the Threats bucket: Starbreach Whale x2 and Quantum Riddler x1 sit there because their **hard-cast** modes are a 3/5 flier and a 4/6 flier for five mana, and their warp mode is a one- or two-mana down-payment that pays out an ETB and a Void switch immediately. The deck's standing board on any given turn is Insatiable Skittermaw x2, Elegy Acolyte, hard-cast Timeline Cullers, Alpharael, and whatever warp creature has been re-cast from exile.

### TIMING NOTE ON END-STEP VOID TRIGGERS

Insatiable Skittermaw, Hylderblade and Elegy Acolyte all check Void "at the beginning of your end step" — the same window in which a warped creature is exiled. The ordering never matters: "a spell was warped this turn" became true the moment the warp spell was cast, so the intervening-if is already satisfied regardless of which trigger resolves first.

The corollary is that Hylderblade is **not** a combat trick. Its free attach happens after combat, so it is a next-turn pump. Its real value is that it re-attaches for zero mana every turn Void is on: if the equipped creature is killed, the Equipment walks to the next body without ever paying Equip {4}.

### WHY CRYOSHATTER IS NOT IN THIS DECK

Cryoshatter ({U}, "Enchanted creature gets -5/-0. When enchanted creature becomes tapped or is dealt damage, destroy it") looks like a one-mana answer that also arms Void. It does neither reliably. An opposing creature taps on the *opponent's* turn, so the permanent leaves the battlefield on the wrong turn to arm your attack — Void is checked per-turn. And -5/-0 does not stop a creature from blocking, and a creature that blocks is never tapped.

### COUNT-DEPENDENT VERDICTS (recomputed against the final list)

- Hylderblade's Void attach targets "creature you control": this mainboard fields **13 creature copies of 23 nonland cards**. INCLUDE at 1 — a second copy competes for the same attach window rather than adding one.
- Susurian Voidborn's drain triggers on "this creature or another creature or artifact you control dies": **13 of 23** nonland copies can trigger it. Its role here is nevertheless the {B} Warp cost, not the drain — warp exiles rather than kills it, so the warp mode never triggers itself.
- Decode Transmissions and Hymn of the Faller are both live off the same 15 switches; card-advantage suite is **3 of 23** nonland cards, deliberately lean for an aggressor.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:3  2:5  3:8  4:3  5:4
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.8: Hylderblade@0.8) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 15 copies (effective 13.4: Depressurize@0.6, Depressurize@0.6, Tragic Trajectory@0.6, Tragic Trajectory@0.6) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 48%  T2 85%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Elegy Acolyte
  OK        single_large_threat: Gravkill, Tragic Trajectory, Unravel
  CONCEDED  noncreature_permanents: Verified against oracle text rather than the dossier probe: UB does hold answers - Desculpting Blast ({1}{U}, 'Return target nonland permanent to its owner's hand') and Lost in Space ({3}{U}, tuck). Both bounce or tuck rather than destroy, so neither permanently answers a recastable artifact; the maindeck spends its slots on the clock and boards in Annul x2 plus Lost in Space x1 against the cube's 29.7% artifact density.
  OK        stack: Unravel
  CONCEDED  graveyard: Every maindeck slot is a Void switch, a Void payoff or removal that feeds both; a maindeck graveyard-hate card would be the only card in the list that does none of the three. Dauntless Scrapbot x2 ('exile each opponent's graveyard') boards in against the 12.45% of the cube that interacts with graveyards.
```

- Curve and goldfish both returned PASS; no WARN flags to answer.

- Slot bands: Interaction 7/23 = 30.4% (inside the 25-35% tempo band). Threats/Payoffs 8/23 = 34.8%, an overshoot the shape judge credited on the grounds that halving alone needs five attacks, so the build must buy combat damage; of those 8 slots, Starbreach Whale x2 and Quantum Riddler x1 are themselves Warp {1}{U} Void switches and Skittermaw x2 / Hylderblade compound each Void turn, so 7 of 8 are paid for in thesis currency rather than generic beef.

- Engine & Infrastructure 8/23 = 34.8%, 4.8pp above the 20-30% band top. Its own ground, not inherited from the threats bucket: the eighth slot is Decode Transmissions, added in the grill repair because its Void mode is 'each opponent loses 2 life' - it is the deck's only non-combat reach, and it removes a whole attack step from the 3 -> 2 -> 1 -> 0 tail of the halving sequence.

- Land count 17 against a recommendation of 18. Ground: printed MV overstates this deck's real curve. Repricing the 9 warp cards at their warp costs gives an effective avg MV of 2.17 against the printed 3.00, and 17 is within 1 of the recommendation; the mana audit returns PASS at 17.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands convert into action three ways: every warped creature returns from exile to be hard-cast at full value on a later turn (9 of 23 nonland copies), Timeline Culler adds a second warp-turn per copy by warping out of the graveyard, and Hylderblade's Equip {4} becomes payable so the Equipment can be moved outside the end-step window. Correction to an earlier draft of this reasoning: Timeline Culler does NOT recur every turn indefinitely — warping it out of the graveyard sends it to exile, where only the full {B}{B} cast is available, so each copy supplies at most two warp-turns unless it dies again. |
| screw | mitigation | Eight of 23 nonland cards cost 1-2 mana (Tragic Trajectory x2, Hylderblade x1, Hymn of the Faller x1, Depressurize x2, Timeline Culler x2), and the Warp costs collapse the top of the curve for the purpose of casting SOMETHING: Starbreach Whale and Quantum Riddler are both two-mana plays via Warp {1}{U} despite printing at 5 MV, buying an ETB and a Void switch on two lands and returning the card to exile for a later hard-cast. A two-land hand therefore always has a play. Goldfish check: 86% keepable, three lands by turn 3 in 88% of hands. |
| decapitation | mitigation | Alpharael carries 'Ward-Discard a card at random', taxing the targeted removal spell that would answer him, and he is not the only clock: Insatiable Skittermaw x2 grows a +1/+1 counter every end step Void is on and has menace, Elegy Acolyte is a 4/4 lifelink that makes a 2/2 Robot every Void end step, and Timeline Culler x2 hard-cast for {B}{B} is a permanent 2/2 haste. Starbreach Whale x2 and Quantum Riddler join that board only when hard-cast for five mana - their warp mode is exiled at your own end step and never attacks. If Alpharael is answered the deck still kills by combat, just without the halving shortcut. |
| gas-out | mitigation | Card-neutral or better: Hymn of the Faller draws two under Void, Decode Transmissions draws two and drains two, Quantum Riddler draws on ETB and upgrades every subsequent draw at one-or-fewer cards in hand — exactly the empty-hand state this mode describes — and Elegy Acolyte draws a card on every turn its creatures connect. On top of that, all 9 warp copies are cards spent once and still castable from exile later, so nine of the 23 nonland cards are effectively played twice. |
| raced | mitigation | Six removal spells at MV 1-4 plus Sinister Cryologist's ETB -3/-0 keep the early board honest, and Elegy Acolyte's lifelink on a 4/4 body is the maindeck lifegain. Dubious Delicacy boards in as flash -3/-3 that also gains 3 (and, when sacrificed, is itself a Void switch). Two costs are accepted explicitly. First, warp buys no blockers: a warped creature is exiled at the beginning of your own end step, so Starbreach Whale is a 3/5 flier only when hard-cast for {4}{U}, and the deck's early defence is its removal, not its bodies. Second, no maindeck sweeper, because Zero Point Ballad's 'Destroy all creatures with toughness X or less' is symmetric against a clock that IS 13 creature copies; it stays in the sideboard. |
| disruption-fizzle | mitigation | The critical turn is an Alpharael attack, and the Void condition on it is over-supplied rather than single-threaded: 15 of 23 nonland cards can satisfy it and 11 of those do so unconditionally, so countering or removing any one enabler does not turn Void off for that turn. Timeline Culler additionally re-arms once from the graveyard for {B} plus 2 life. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Chorale of the Void | Void Aura whose attack trigger reanimates from the DEFENDING player's graveyard - it needs their graveyard stocked, which this build has no mill for. Belongs to the Rupture/Chorale build. |
| Starfield Vocalist | Doubles ETB-caused triggers only; the Void triggers here fire at end step and are not caused by a permanent entering, so it doubles 6 of this list's triggers, not the Void ones. Rare budget goes elsewhere. |
| Starwinder | 7/7 warp {2}{U}{U}; a 4-mana warp is too slow to be the Void switch on the turns this clock needs it, and it is a rare. |
| Singularity Rupture | 'Destroy all creatures' is symmetric and this build's clock IS its creatures. Belongs to the attrition build. |
| Zero Point Ballad | {X}{B} sweeper - same symmetry problem; kept as a sideboard consideration against go-wide decks. |
| Sothera, the Supervoid | Mythic; 'Whenever a creature you control dies, each opponent ... exiles' needs your own creatures dying, which this build actively avoids. |
| Xu-Ifit, Osteoharmonist | Reanimates as a vanilla Skeleton 'with no abilities' - it returns bodies, not Void payoffs, and costs a rare. |
| Embrace Oblivion | 'As an additional cost ... sacrifice an artifact or creature' - this deck runs 0 token makers and 0 spare artifacts; every sacrifice would eat a real threat. |
| Anticausal Vestige | Warp {4} is the most expensive Void switch here and its payoff ('put a permanent card with mana value <= lands you control ... onto the battlefield') wants a ramp shell this build does not have. |
| Lost in Space | {3}{U} tuck is a full mana above Gravkill for a temporary answer; loses the tempo race this build is running. |
| Illvoi Operative | 'Whenever you cast your second spell each turn' - a spellslinger payoff; this list casts 1.4 spells a turn on average, not 2. |
| Uthros Psionicist | 'The second spell you cast each turn costs {2} less' - same denominator problem as Illvoi Operative. |
| Annul | Counters only artifact or enchantment spells; the cube's threat_profile is creature-dense, so it is a sideboard card, not maindeck. |
| Mm'menon, the Right Hand | 'You may cast artifact spells from the top of your library' - this list runs 2 artifacts (Hylderblade, Voidforged Titan); a rare for a near-blank ability. |
| Uthros, Titanic Godcore | Enters tapped and its Station payoff needs 12 charge counters; a tapped mono-U land in a deck that wants untapped {B} on turn 1 for Tragic Trajectory. |
| Susur Secundi, Void Altar | Enters tapped, mono-B, and its 12+ Station ability sacrifices creatures - anti-synergy with a clock built from creatures. |
| Temporal Intervention | Cut in the grill repair. Its Void mode only discounts its own cost; it neither adds to the clock nor removes a permanent, so at thesis turn 8 it strips one card from an opponent who has drawn roughly eight. Its slot became Decode Transmissions. |
| Cryoshatter | Destroys only 'when enchanted creature becomes tapped or is dealt damage' — an opposing creature taps on the OPPONENT's turn, so the permanent leaves the battlefield on the wrong turn to arm Void, and -5/-0 does not stop it from blocking. |
| Faller's Faithful | 'When this creature enters, destroy up to one other target creature. If that creature wasn't dealt damage this turn, ITS CONTROLLER DRAWS TWO CARDS.' A 3-MV unconditional Void switch, but refunding two cards to the opponent works against an aggressor plan at thesis turn 8. |
| Voidforged Titan | 5/4 with 'Void — At the beginning of your end step ... you draw a card and lose 1 life' — genuinely on-plan, but at 5 printed MV against a curve that already carries four fives and an avg MV of 3.00 sitting one land under the recommendation. |
| Perigee Beckoner | A tenth cheap Warp switch (Warp {1}{B}) on a 4/5 blocker; excluded for the same 5-MV curve reason as Voidforged Titan. |
| Mechanozoa | Warp {2}{U} for a 5/5 with an ETB tap-and-stun; kept in the sideboard rather than the maindeck because the tap+stun answers a single large threat and is dead against a wide board. |
| Desculpting Blast | 'Return target nonland permanent to its owner's hand' — the pool's best UB answer to noncreature permanents and a 2-mana unconditional Void switch, but bounce is temporary and the maindeck spends its slots on the clock. |
| Vote Out | Convoke destroy; cut from the sideboard in the grill repair in favour of Dubious Delicacy, which answers the raced failure mode instead of duplicating removal the maindeck already has six copies of. |
| Chrome Companion | Cut from the sideboard in the grill repair: three of ten sideboard slots on graveyard hate over-invested against a 12.45% graveyard density, while the 29.7% artifact class had only counter-speed coverage. Its slot became Lost in Space. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 18 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.67 adj [MV 3.0 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  72.4%  prod  70.6%  gap  +1.8pp  [OK]
  U  demand  27.6%  prod  47.1%  gap -19.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons / uncommons, max 2 copies each ......... PASS (no card exceeds 2)
Rares / mythics, max 1 copy each ............... PASS
Rares + mythics, max 6 total (MB + SB) ......... PASS - 5 of 6 used:
    Alpharael, Stonechosen (M)  mainboard
    Quantum Riddler (M)         mainboard
    Elegy Acolyte (R)           mainboard
    Watery Grave (R)            mainboard
    Zero Point Ballad (R)       sideboard
Basic lands unlimited .......................... Swamp 9, Island 5
All cards from cube mainboard .................. PASS (exact-name match, 40 + 10)
Colour usability within U/B .................... PASS (effective_cost.best_mode non-None for every nonland)
```