---
deck_name: "ur-champion-etb-cannon"
cube_id: "ecl"
cube_slug: "ecl"
colors: "UR"
format: "40-card"
built_at: "2026-08-09T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  5x Island                 
  8x Mountain               
  2x Eclipsed Realms        taps for {C}; any colour restricted to the chosen type (Elemental)
  2x Molten Tributary       UR dual, enters tapped
  1x Steam Vents            UR dual, untapped for 2 life
```

### CREATURES (14)

```
CMC  Card                                     Qty   Color  Role                       Rar
  2  Ashling, Rekindled // Ashling, Rimebound x1    R      engine-threat              R
  3  Eclipsed Flamekin                        x2    UR     engine-threat              U
  3  Enraged Flamecaster                      x1    R      threat                     C
  3  Flaring Cinder                           x2    UR     engine-threat              C
  4  Champion of the Path                     x1    R      payoff                     R
  4  Flamekin Gildweaver                      x2    R      threat                     C
  4  Twinflame Travelers                      x2    UR     payoff                     U
  6  Kulrath Zealot                           x2    R      threat                     C
  9  Sunderflock                              x1    U      finisher                   R
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                     Qty   Color  Role                       Rar
  2  Sear                                     x2    R      interaction                U
  3  Tweeze                                   x1    R      interaction                C
  4  Feed the Flames                          x1    R      interaction                C
  4  Kindle the Inner Flame                   x2    R      payoff                     U
  4  Temporal Cleansing                       x1    U      interaction                C
  5  Ashling's Command                        x1    UR     interaction                R
```

## SIDEBOARD (10)

```
Card                                     Qty   Color  Role / When to board in                                     Rar
Rooftop Percher                          x2    C      Against any graveyard deck                                  C
Spell Snare                              x2    U      Against decks whose key card costs 2                        U
Cinder Strike                            x2    R      Against fast starts                                         C
Giantfall                                x2    R      Against artifacts (11 in the cube; one of only 4 artifact   U
Rimekin Recluse                          x2    U      Against auras, equipment and single oversized creatures     U
```

## ANALYSIS

### DECK IDENTITY

A UR Elementals midrange deck that wins by making creatures enter the battlefield rather than by attacking with them. Champion of the Path reads 'Whenever another Elemental you control enters, it deals damage equal to its power to each opponent' — so a Kulrath Zealot arriving is 6 to the face through any number of blockers, and Twinflame Travelers doubles it to 12. Thirteen of the twenty-two nonland cards are Elemental bodies and ten of those thirteen have power 3 or greater, so the average trigger is worth real damage. Most of those bodies also arrive with a card attached, so the deck plays a fair midrange game and Champion upgrades it into a burn deck. Kindle the Inner Flame and Ashling's Command manufacture extra Elementals entering on demand.

This deck deals damage with the **enter-the-battlefield step**, not the combat step. Champion of the
Path reads "Whenever another Elemental you control enters, it deals damage equal to its power to each opponent" —
so the relevant statistic is not the curve, it is the **power** of what enters.

| Elemental body | Power | Champion trigger | With Twinflame Travelers |
|---|---|---|---|
| Kulrath Zealot ×2 | 6 | 6 | 12 |
| Sunderflock | 5 | 5 | 10 |
| Flamekin Gildweaver ×2 | 4 | 4 | 8 |
| Flaring Cinder ×2 | 3 | 3 | 6 |
| Twinflame Travelers ×2 | 3 | 3 | — |
| Enraged Flamecaster | 3 | 3 | 6 |
| Eclipsed Flamekin ×2 | 1 | 1 | 2 |

**10 of the 13** non-Champion Elemental bodies have power 3 or greater. That table is also why two cards a
reader might expect are absent: Squawkroaster and Explosive Prodigy are both governed by Vivid, counting colours
among permanents you control, and this deck plays exactly two colours — so they enter for 2 and 1 damage
respectively, where Flamekin Gildweaver at the same mana value enters for 4.

### The 1-of problem, and what was done about it

Champion of the Path is a rare, so the pool rules cap it at **one copy in forty**. That is the archetype's
defining weakness and it drove three separate decisions. The Step-0 judge picked the "flexible toolbox" build
specifically because it was the only one carrying card *selection* toward the anchor — Ashling's loot, Tweeze's
rider, and Eclipsed Flamekin looking four cards deep, where **31 of the 40** mainboard cards are a legal reveal.
The Phase 6b assembly check then **failed outright** at p=0.72 against a 0.75 floor, and was repaired by moving
Kindle the Inner Flame to two copies: a token copy of an Elemental *is* an Elemental entering, so it is a genuine
second source of the payoff event rather than a reclassification. And the self-grill's absence audit added
Enraged Flamecaster as the one card in these colours that deals face damage with no Champion at all.

### Sunderflock is a one-sided Plague Wind here

"Return all non-Elemental creatures to their owners' hands" — this deck's creature count is **13 Elementals and
zero non-Elementals**, so the sweep never touches your own board. Its mana value 9 is nominal: the cost falls by
the greatest Elemental mana value you control, so behind a Kulrath Zealot it costs {1}{U}{U}, and it enters for
another 5 damage on the way down.

### Where the deck is soft

No mainboard counterspell and no mainboard graveyard answer, against a cube whose largest threat class is
graveyard interaction at 39 of 277 cards. Both are bought back after board, and Rooftop Percher does it while
staying on-plan — Changeling makes it an Elemental, so it is simultaneously the hate card and a 3-power Champion
trigger. The deck also has no one-drops and only three two-drops, which the goldfish simulation flags; that is a
deliberate consequence of damage scaling with power, since a cheap 1-power body makes the payoff worse at the
same time as it makes the curve better.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  2:3  3:6  4:9  5:1  6:2  9:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.3: Champion of the Path@0.7, Kindle the Inner Flame@0.8, Kindle the Inner Flame@0.8) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 12.6: Sunderflock@0.6) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 76% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 53%  T3 92%
Coverage:  [PASS]
  OK        wide_boards: Ashling's Command, Sunderflock
  OK        single_large_threat: Feed the Flames, Sear, Temporal Cleansing, Sunderflock
  OK        noncreature_permanents: Temporal Cleansing
  CONCEDED  stack: No mainboard counterspell. A midrange deck that must spend each turn deploying an Elemental cannot also hold mana up, and every Elemental it deploys is a Champion of the Path trigger it would be giving up. Spell Snare comes in from the sideboard.
  CONCEDED  graveyard: No mainboard graveyard answer exists in U or R. Rooftop Percher comes in from the sideboard, and because Changeling makes it an Elemental it is simultaneously the answer and a 3-power Champion of the Path trigger.
```

- curve PASS: MV distribution over the 22 nonland cards is 2:3 3:6 4:9 5:1 6:2 9:1.

- assembly initially FAILED and was repaired, not rationalized. The first list had 4 payoff copies (effective 3.5) for p=0.72 against a 0.75 floor, because Champion of the Path is capped at one copy by the rare rules. The repair added a second Kindle the Inner Flame — a genuine functional copy, since its token copy of an Elemental is another Elemental entering — and cut Stratosoarer. Payoff is now 5 copies, effective 4.3, p=0.80. Both discounted copies carry a mechanism: Champion at 0.7 (single copy, and its behold-and-exile additional cost makes it uncastable with no second Elemental available), Kindle at 0.8 (it copies a creature already on the battlefield, and its flashback separately requires beholding three Elementals, so it is dead twice over from an empty board).

- goldfish WARN (keepable 76%, threshold 80%): accepted. The deck has no one-drops and only three two-drops, because a midrange Elemental shell whose damage equals the power of what enters cannot profitably spend early slots on small bodies. The same simulation reports 3 lands by turn 3 at 92% and a turn-3 play at 92%, which is what the turn-7 thesis depends on.

- accel_count note: deck_audit reports 5 accelerants, but two of those are Kulrath Zealot, whose 'Basic landcycling {1}{R}' puts a land in HAND rather than mana on the battlefield. True acceleration is Ashling plus Flamekin Gildweaver x2 = 3. This is non-material to the build: land_target(40, 3.909, accel) returns 18 for every accel value from 2 to 6, so the 18-land count is robust to the miscount.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Kulrath Zealot x2 turns a flooded turn into a card ('exile the top card of your library. Until the end of your next turn, you may play that card') and its 'Basic landcycling {1}{R}' lets a land-heavy hand trade the Zealot for the land it needs. Flaring Cinder x2 loot on entry and again on every mana-value-4-or-greater cast. Ashling loots on entry and on each transform INTO Ashling, Rekindled — that is every second flip, not every transform, since flipping to Rimebound does not loot. Kindle the Inner Flame's flashback is a two-mana graveyard sink that converts spare mana into another Elemental entering. |
| screw | mitigation | Kulrath Zealot's basic landcycling finds one of 13 basics for two mana; Eclipsed Flamekin x2 looks four deep and can reveal an Island or a Mountain (16 of the 18 lands qualify by type line) as well as an Elemental; Flamekin Gildweaver's Treasure replaces a missing land on turn 4. Two-land hands holding a landcycler or an Eclipsed Flamekin are keepable. |
| decapitation | mitigation | Champion of the Path is a single copy — the rare cap allows no more — and it will be answered on sight, so the deck is built not to need it. Stated to the recount: 10 of the 13 non-Champion Elemental body copies have an enter-the-battlefield ability worth a card on its own (Eclipsed Flamekin x2 dig four, Flaring Cinder x2 loot, Kulrath Zealot x2 exile-and-play the top card, Flamekin Gildweaver x2 make a Treasure, Sunderflock bounces the opposing board, Ashling loots). The three exceptions are Twinflame Travelers x2, which have no enter trigger at all — they are a 3/3 flier plus a static doubler — and Enraged Flamecaster, whose value is a cast trigger rather than an enter trigger. Sunderflock's is additionally conditional on 'if you cast it'. Beyond that value, two things survive Champion's removal specifically as DAMAGE: Enraged Flamecaster, whose 'Whenever you cast a spell with mana value 4 or greater, this creature deals 2 damage to each opponent' fires off 13 of the 22 nonland cards and needs no Champion at all, and Twinflame Travelers, which doubles every Elemental trigger in the deck whether or not Champion is on the battlefield. Without Champion the board is still two 6/5s, two 4/3 tramplers and a 5/5 flier behind a one-sided Sunderflock sweep. Losing Champion costs the upgrade, not the game plan. |
| gas-out | mitigation | By resource_exchange the mainboard holds Cards-tagged cards in Kulrath Zealot x2 (Self-Replacing) and Flaring Cinder x2 (loot on entry); functionally the refuel is Ashling's Command's 'Target player draws two cards' mode, Kindle the Inner Flame's flashback (a second cast from the graveyard), Eclipsed Flamekin x2 putting a card in hand, and Tweeze's rider. The deck is also built so that an empty hand still has a board, because its cards leave value behind when they enter rather than when they are held. |
| raced | accepted | The cube's fastest threat class is evasion at 41 of 277 cards (16%), and this deck has only three two-drops and no one-drops, with 6 interaction cards. Against a fast evasive draw it can lose before turn 7. Mitigating would mean filling the early slots with small Elementals — but damage under Champion of the Path equals the entering creature's power, so a 1-power two-drop makes the payoff strictly worse at the same time as it makes the curve better; that is the exact trade that cut Explosive Prodigy. The pool does contain one Elemental one-drop above that floor, Soulbright Seeker at 2 power, so the honest statement is that the cheap bodies are weak here rather than uniformly 1 power. The board answers the mode instead with Cinder Strike x2 and Rimekin Recluse x2. |
| disruption-fizzle | mitigation | The critical turn is a single Elemental resolving, not a chain, so there is nothing to break in sequence. If the big Elemental is countered the payoff waits for the next one, and 13 of the 22 nonland cards are Elemental bodies. If the payoff itself is removed mid-turn, the Elementals that already entered keep their own enter-the-battlefield value — the deck loses the damage, not the turn. Kindle the Inner Flame's flashback means a countered copy effect can be re-bought from the graveyard for {1}{R}. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Enraged Flamecaster | 'Whenever you cast a spell with mana value 4 or greater, this creature deals 2 damage to each opponent' — the payoff of a different pipeline. This deck's damage keys off Elementals ENTERING, not off casting cost, and it would pull the build back toward the mana-value shell. |
| Kulrath Mystic | Same objection: its trigger condition is casting a mana-value-4-or-greater spell, and its output is a combat pump rather than the blocker-proof damage this pipeline is built on. |
| Tanufel Rimespeaker | Also a mana-value-4-or-greater trigger; the card advantage is real but this deck draws off enter-the-battlefield abilities (Kulrath Zealot, Shinestriker, Flaring Cinder) instead. |
| Mirrormind Crown | 'the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature' genuinely composes with Flamekin Gildweaver's Treasure to make Elemental copies — but it costs a rare slot plus 4 mana plus {2} to equip before it does anything, and Champion of the Path already needs one of only 5 rare slots. |
| Meek Attack | '{1}{R}: You may put a creature card with total power and toughness 5 or less from your hand onto the battlefield' — a repeatable way to make Elementals enter, but the 5-total cap excludes every Elemental in this deck worth flickering: Kulrath Zealot is 11, Champion of the Path 10, Flamekin Gildweaver 7, Twinflame Travelers 6. Only Explosive Prodigy (2) and Summit Sentinel (4) qualify, for 1 damage each. |
| Mirrorform | Mythic, 'Each nonland permanent you control becomes a copy of target non-Aura permanent' — copies do not ENTER, they become, so it produces no Champion of the Path triggers at all. |
| Spinerock Tyrant | A 6/6 flier for five is the second-biggest body in the colours, but it is a Dragon, not an Elemental — it triggers Champion never, and Twinflame Travelers does not double its ability. |
| Goliath Daydreamer | A Giant Wizard, so outside the Elemental tribe entirely; its dream-counter engine also wants a high instant/sorcery count this creature deck does not have. |
| Squawkroaster | 'Vivid — Squawkroaster's power is equal to the number of colors among permanents you control' — in a two-colour deck that is a 2-power Elemental, so it enters for 2 damage under Champion where Flamekin Gildweaver enters for 4 at the same mana value. |
| Summit Sentinel | A 1-power Elemental is 1 damage under Champion; the enter-the-battlefield shell wants power on the board, not a 1/3 that pays off on death. |
| Soulbright Seeker | A one-mana 2/1 Elemental, but it has no enter-the-battlefield ability, so it contributes 2 damage once and nothing thereafter. |
| Flame-Chain Mauler | No enter trigger and only 2 power; the menace pump is off-plan for a deck whose damage bypasses blockers entirely. |
| Changeling Wayfinder | A changeling Elemental with an enter trigger, but 1 power means 1 damage and the trigger only fetches a basic to hand — Eclipsed Flamekin digs four cards deep for Champion of the Path instead. |
| Firdoch Core | A changeling Kindred Artifact, so not a creature entering — it produces no Champion trigger unless {4} is paid to animate it, and animation is not entering. |
| Glen Elendra's Answer | Mythic mass counter; reactive, off-tribe, and a rare slot this deck cannot spare with Champion of the Path mandatory. |
| Collective Inferno | 'Double all damage that sources you control of the chosen type would deal' naming Elemental would double every Champion trigger — a real multiplier, but it is a rare and the 5-slot budget is already spent on Champion, Ashling's Command, Sunderflock, Lavaleaper and Steam Vents. |
| Spell Snare | Maindeck counters fight a midrange deck's need to spend every turn deploying an Elemental; held for the sideboard. |
| Wild Unraveling | Same objection, and the blight-2 alternative cost puts -1/-1 counters on the Elementals whose power IS the damage under Champion. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.91   Ramp cards: 5   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.05 adj [MV 3.91 vs 2.5, 5 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  R  demand  72.7%  prod  66.7%  gap  +6.0pp  [OK]
  U  demand  27.3%  prod  50.0%  gap -22.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                cube_mainboard — every card is in cubes/ecl mainboard.csv (277 unique cards)
copy_limits:         PASS — no common or uncommon above 2 copies, no rare above 1. Basic lands (Mountain x8, Island x5) are format-supplied and exempt.
rare_mythic_cap:     PASS — exactly 5 of 5 used, all mainboard: Ashling Rekindled // Ashling Rimebound, Champion of the Path, Sunderflock, Ashling's Command, Steam Vents. The sideboard contains zero rares or mythics.
colour_identity:     PASS — every nonland card is usable in {U, R} via effective_cost.best_mode; no splash.
deck_size:           PASS — 40 mainboard (22 nonland + 18 lands), 10 sideboard.
```
