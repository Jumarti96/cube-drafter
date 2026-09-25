---
deck_name: "wb-spacecraft-rebuy-reanimator"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WB"
format: "40-card"
built_at: "2026-09-04T01:11:23Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x7   Plains
  x7   Swamp
  x1   Godless Shrine                               Plains Swamp, taps for BW, enters tapped
  x2   Sunlit Marsh                                 Plains Swamp, taps for BW, enters tapped
```

### CREATURES (5)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Umbral Collar Zealot                         x2    B     engine                         U
  5  Astelli Reclaimer                            x1    W     engine                         R
  5  Syr Vondam, the Lucent                       x1    WB    residual                       U
  6  Anticausal Vestige                           x1    C     residual                       R
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Embrace Oblivion                             x1    B     interaction                    C
  1  Tragic Trajectory                            x1    B     interaction                    U
  1  Zero Point Ballad                            x1    B     interaction                    R
  3  Emergency Eject                              x2    W     interaction                    U
  3  Scrounge for Eternity                        x2    B     engine                         U
  4  Gravkill                                     x1    B     interaction                    C
```

### OTHER SPELLS (10)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Nutrient Block                               x1    C     residual                       C
  1  Seam Rip                                     x1    W     interaction                    U
  2  Wurmwall Sweeper                             x2    C     engine                         C
  3  Banishing Light                              x2    W     interaction                    C
  3  Fell Gravship                                x2    B     engine                         U
  6  Rescue Skiff                                 x2    W     payoff                         U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Dauntless Scrapbot                           x2    C     hate: Against any deck using its own graveyard U
Decode Transmissions                         x2    B     flex: In any grindy matchup — 'You draw two ca C
Temporal Intervention                        x1    B     flex: Against combo and the control mirror — ' C
All-Fates Stalker                            x2    W     flex: Against a single large threat — 'When th U
Radiant Strike                               x2    W     hate: Against the artifact decks — threat_prof C
Beyond the Quiet                             x1    W     flex: Against wide creature decks the one-for- R
```

## ANALYSIS

### DECK IDENTITY

A white-black control deck whose recursion targets are PERMANENTS, not just bodies — and the claim is made at the size it actually holds. Rescue Skiff reads 'return target creature OR ENCHANTMENT card from your graveyard to the battlefield' with no mana-value cap, and Astelli Reclaimer reads 'return target NONCREATURE, nonland permanent card'. Between them the deck rebuys its own answers as well as its threats, but only 3 of its 9 answers are permanents: Banishing Light x2 and Seam Rip. That is a three-card edge, not a whole-suite one. It is still the sharpest line in the list, because Banishing Light exiles 'until this enchantment leaves the battlefield' — a Banishing Light already in the graveyard has released its prisoner, so returning it exiles a NEW permanent. White supplies the unconditional removal black cannot: Emergency Eject destroys any nonland permanent, Banishing Light and Seam Rip exile. The deck answers everything, rebuys the answers it can, and attacks with whatever it has recurred.

### DECK IDENTITY

A white-black control deck whose recursion targets are PERMANENTS, not just bodies — and the claim is made at the size it actually holds. Rescue Skiff reads 'return target creature OR ENCHANTMENT card from your graveyard to the battlefield' with no mana-value cap, and Astelli Reclaimer reads 'return target NONCREATURE, nonland permanent card'. Between them the deck rebuys its own answers as well as its threats, but only 3 of its 9 answers are permanents: Banishing Light x2 and Seam Rip. That is a three-card edge, not a whole-suite one. It is still the sharpest line in the list, because Banishing Light exiles 'until this enchantment leaves the battlefield' — a Banishing Light already in the graveyard has released its prisoner, so returning it exiles a NEW permanent. White supplies the unconditional removal black cannot: Emergency Eject destroys any nonland permanent, Banishing Light and Seam Rip exile. The deck answers everything, rebuys the answers it can, and attacks with whatever it has recurred.

### THE BANISHING LIGHT LOOP — THE ONE LINE THAT IS UNIQUE TO THIS DECK

Banishing Light reads `exile target nonland permanent an opponent controls **until this enchantment leaves the battlefield**`. Read that clause backwards: a Banishing Light sitting in your graveyard has, by definition, already left the battlefield — so its prisoner is already free and the card owes nothing. Returning it therefore exiles a **new** permanent.

Three cards in this list can do that:

| Returns Banishing Light | Cost | Also returns |
|---|---|---|
| Rescue Skiff | `{5}{W}` | any creature or enchantment card, no mana-value cap |
| Astelli Reclaimer, hard-cast | `{3}{W}{W}` (X=5) | any noncreature nonland permanent at MV ≤ 5 |
| Astelli Reclaimer, warped | `{2}{W}` (X=3) | the same 8 targets — see below |

That is a removal spell this deck casts more than once, and it is the sharpest thing the white half buys.

### WARPING ASTELLI RECLAIMER LOSES NOTHING

`Warp {2}{W}` sets X to 3 instead of 5. Every legal target in this deck is at mana value 3 or less — Wurmwall Sweeper (2), Fell Gravship (3), Nutrient Block (1), Banishing Light (3), Seam Rip (1). **The hard cast buys zero extra reach.** The only reason to pay five is to keep the 5/4 flier permanently; if you want the trigger, warp is strictly cheaper. This is not a compromise mode.

### THE CLAIM I AM NOT MAKING

Rescue Skiff becomes a 5/6 flier at Station 10+. Charge counters equal the tapped creature's power, and this deck's creature powers are 5, 7, 4, 3, 3 — reaching ten means tapping essentially the whole creature suite while a six-mana Spacecraft has already been cast. **The Station clock is disclaimed.** Rescue Skiff is a reanimation spell attached to a 5/6 blocker, and the deck's actual clock is Syr Vondam, the Lucent handing deathtouch to whatever has been recurred.

One real Station line does survive: Syr Vondam's `+1/+0` lasts *until end of turn* and Station is sorcery-speed, so attacking with Vondam and holding a body back lets that body Station for one extra counter after combat.

### WHERE THE REBUY THESIS STOPS

Six of the nine answers are instants and sorceries, and nothing in this deck can return them. The recursion edge covers **3 of 9 answers** — Banishing Light ×2 and Seam Rip. It is a three-card edge and the identity above says so rather than implying the whole suite is rebuyable.

### WHAT THIS DECK IS FOR, RELATIVE TO THE OTHERS IN THIS CUBE

Black alone cannot answer a non-Spacecraft artifact or any enchantment — that is 90 of the cube's 249 nonland cards, 36.1%, untouchable. This deck exists because Emergency Eject, Banishing Light and Seam Rip do answer them, and because Rescue Skiff can then buy two of those three back.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:5  2:4  3:8  4:1  5:2  6:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  reanimator: 7 copies (effective 4.6: Rescue Skiff@0.9, Rescue Skiff@0.9, Scrounge for Eternity@0.7, Scrounge for Eternity@0.7, Astelli Reclaimer@0.6, Fell Gravship@0.4, Fell Gravship@0.4) → p=0.84 (need ≥ 0.75)
  PASS  yard_filler: 7 copies (effective 6.1: Umbral Collar Zealot@0.8, Umbral Collar Zealot@0.8, Zero Point Ballad@0.5) → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 66%  T2 92%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Zero Point Ballad, Syr Vondam, the Lucent
  OK        single_large_threat: Emergency Eject, Banishing Light, Gravkill, Seam Rip, Tragic Trajectory, Embrace Oblivion
  OK        noncreature_permanents: Emergency Eject, Banishing Light, Seam Rip
  CONCEDED  stack: Unanswered in this deck's LEGAL pool, and the remedy is narrower than a first draft claimed. Probe cited and actually run: cube_search.search_pool(pool, color_identity=['W','B'], splash_color_identity=['U'], oracle_pattern=r'[Cc]ounter target (spell|instant|sorcery|creature spell|noncreature spell)') -> 2 rows: Divert Disaster and Unravel. Both are blue and neither is one of the three cards the Phase 3 splash filter named (Mechan Navigator, Alpharael Dreaming Acolyte, Scour for Scrap); a splash colour admits only its named candidates, so Phase 5C check 5 would reject either. The claim is therefore about this deck's legal pool, not the cube: the cube HAS counterspells and this deck cannot play them. What the deck does instead answers PERMANENTS ONLY — Emergency Eject 'Destroy target nonland permanent', Banishing Light and Seam Rip exile. Against an opposing instant or sorcery (a sweeper, a burn spell, a draw spell) exactly 0 of 23 mainboard cards interact before it resolves; the pool's hand disruption (Temporal Intervention) is in the sideboard. Pattern caveat: this regex would miss 'counter it unless...' phrasings, so 2 is a floor.
  CONCEDED  graveyard: Unanswered in the mainboard, deliberately, and answered from the sideboard at 2 copies (Dauntless Scrapbot). Probe cited and actually run: cube_search.search_pool(pool, color_identity=['W','B'], splash_color_identity=['U'], oracle_pattern=r'exile .{0,40}graveyard|graveyard.{0,40}(exile|bottom of)') -> 3 rows: Chrome Companion, Dauntless Scrapbot, Timeline Culler. Timeline Culler is a false positive — its 'exile' clause is its own warp, not graveyard interaction — so the pool offers this deck exactly two real answers. The cost of maindecking one: this is a 23-card nonland control list already carrying 9 interaction slots and 7 weighted yard-filler copies, and a maindeck graveyard-hate card is blank against the 87.5% of the cube that does not use its yard (31 of 249 nonland cards interact with graveyards per threat_profile). Pattern caveat: this regex would miss library-shuffle and 'put into its owner's library' hate.
```

- No WARN-tier structural flags were raised — curve, assembly, goldfish and coverage all return PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Three of the nine answers are instants (Emergency Eject x2, Gravkill), so an extra land is a turn where an answer is held up rather than a wasted draw, and the deck's top end is genuinely mana-hungry: Rescue Skiff x2 at {5}{W}, Anticausal Vestige at {6}, and Zero Point Ballad, whose X scales with every land drawn — at seven lands X=6 turns it into a wrath that also reanimates. Scrounge for Eternity's Lander token ('{2}, {T}, Sacrifice this token') is a mana sink that is also fodder and an Astelli Reclaimer target. (An earlier draft claimed excess lands convert into Station charge counters; that is false — Station reads 'Tap another creature you control' and costs no mana. Clause struck.) |
| `screw` | mitigation | 9 of 23 nonland cards cost 2 or less (Nutrient Block, Wurmwall Sweeper x2, Umbral Collar Zealot x2, Seam Rip, Tragic Trajectory, Embrace Oblivion, Zero Point Ballad at X=1), and the goldfish check clears its threshold. COLOUR screw is stated correctly here after an earlier draft got it wrong: the list has TWO multi-pip cards, not one — Astelli Reclaimer at {3}{W}{W} and Syr Vondam, the Lucent at {2}{W}{B}{B}, which is triple-pip. That is why the final rare slot went to Godless Shrine ('you may pay 2 life. If you don't, it enters tapped'), the only untapped WB dual in the cube: it takes white to 10 sources of 17 and gives the deck one dual that does not cost a tempo point. Digging out is thin - there are no mainboard cantrips, which is the price of spending the flexible slots on answers; Decode Transmissions x2 is the sideboard correction. |
| `decapitation` | mitigation | Reanimation is 7 weighted copies across four different cards, and critically they read DIFFERENT clauses, so no single answer type shuts the plan off: Rescue Skiff x2 returns creatures and enchantments uncapped, Astelli Reclaimer returns noncreature permanents, Scrounge for Eternity x2 returns creatures and Spacecraft at MV<=5, and Fell Gravship x2 return a card to hand. The assembly gate passes at p=0.84 on that redundancy. |
| `gas-out` | mitigation | The refuel is the graveyard, and the single point of failure is stated rather than hidden. Cards that replace themselves or convert a graveyard card into a battlefield permanent: Rescue Skiff x2, Astelli Reclaimer x1, Scrounge for Eternity x2, Fell Gravship x2 (which mill BEFORE they return, so they cannot whiff on an empty yard), Anticausal Vestige x1 (its leaves-the-battlefield trigger draws) and Nutrient Block x1 ('When this artifact is put into a graveyard from the battlefield, draw a card') = 9 of 23. The honest caveat the Challenger raised: 9 of those 9 are graveyard-conditional, so they share a failure point with the disruption-fizzle vector, and the mainboard has ZERO unconditional card draw. That is the reason Decode Transmissions x2 ('You draw two cards and lose 2 life') is in the sideboard rather than a fifth removal spell. |
| `raced` | accepted | The thesis turn is 8 and the deck's clock does not start until it has stabilised. The cost is stated after the Challenger showed an earlier version of this entry was not forced: it claimed 'its cheapest genuine removal is at 2 mana' while Embrace Oblivion ({B}) and Tragic Trajectory ({B}) sat cut on denominators that were wrong. Both are now in the mainboard, so the deck has two 1-mana answers and the claim is retired. What remains genuinely accepted: the deck still spends turns 1-2 on Wurmwall Sweeper and Umbral Collar Zealot rather than on the board, because those are 4 of its 7 weighted yard-filler copies, and mitigating that would mean trading the fill for cheap bodies — at which point nothing is in the graveyard and the four reanimation cards have no targets. The deck would stop being a reanimator. Pushed to the sideboard instead: All-Fates Stalker x2 is removal on a body, and Radiant Strike's 3 life plus Syr Vondam's lifelink are the only life-swing available. |
| `disruption-fizzle` | mitigation | Two vectors. (1) OPPOSING GRAVEYARD HATE is the one that actually threatens this deck - threat_profile.graveyard_interaction is 31 cards / 12.45% of the cube, including colourless effects any deck can splash (this deck's own sideboard runs two). A single 'exile each opponent's graveyard' ETB deletes what all four reanimation cards read from. The answer is refill speed, and the named cards are exactly the ones the Phase 6b assembly gate counts: Wurmwall Sweeper x2 ('When this Spacecraft enters, surveil 2'), Fell Gravship x2 ('mill three cards' - and they mill BEFORE they return, so they cannot whiff on an empty yard), Umbral Collar Zealot x2 ('Sacrifice another creature or artifact: Surveil 1' - free, no tap, repeatable, so it rebuilds from empty faster than any one-shot ETB) and Zero Point Ballad, which DESTROYS rather than exiles and therefore refills both graveyards = 7 weighted copies, matching assembly.yard_filler exactly. (An earlier draft of this entry named Starfighter Pilot x2, which was cut at Phase 9; the substance is unchanged because Umbral Collar Zealot replaced it in the same role and at a higher weight.) (2) The critical turn is a 6-mana Rescue Skiff. It cannot be countered in practice - the stack concession records that no counterspell is legally playable in this deck's pool - and if the Skiff is destroyed AFTER its ETB resolves, the reanimated permanent stays. If it is answered before, the retry is the second copy plus three other reanimation cards reading different clauses. Stated against my own interest: Scrounge for Eternity CANNOT rebuy Rescue Skiff, because the Skiff is mana value 6 and Scrounge caps at 5. [Sizing corrected: this 12.45% is threat_profile.graveyard_interaction, which counts every card that USES a graveyard, several of them this deck's own. The right key for OPPOSING hate is dossier.structural_census.graveyard_hate, which lists one card (Dauntless Scrapbot); a hand probe finds one more the census missed (Chrome Companion). Dedicated graveyard hate is roughly 2 of 249 nonland cards, so this threat is smaller than the figure implies - the error was in this deck's favour.] |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Requiem Monolith | A repeatable sorcery-speed draw-1-lose-1 for 3 mana, but it spends one of five rare slots on card flow in a deck whose card advantage is already Rescue Skiff and Fell Gravship returning permanents from the graveyard - a resource the Monolith does not touch. |
| Lightstall Inquisitor | 'each opponent EXILES a card from their hand AND MAY PLAY THAT CARD for as long as it remains exiled.' It does not strip the card, it merely taxes it {1} - so against a deck holding a single key answer it gives them permission to cast it rather than taking it away. A rare slot for a 2/1 with a tax rider. |
| Sunset Saboteur | 'Whenever this creature attacks, put a +1/+1 counter on target creature AN OPPONENT CONTROLS.' The attack trigger permanently grows the opposing board, which is the wrong direction for a deck that plans to win a long attrition game, and it is a rare competing for a 5-slot budget the reanimation engine already claims. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 2   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.17 adj [MV 3.0 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  54.5%  prod  58.8%  gap  -4.3pp  [OK]
  W  demand  45.5%  prod  58.8%  gap -13.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```

```