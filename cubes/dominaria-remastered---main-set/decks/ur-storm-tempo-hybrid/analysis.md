---
deck_name: "ur-storm-tempo-hybrid"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-10T02:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
8x Island
6x Mountain
1x Molten Tributary    UR common dual, enters tapped
```

### CREATURES (7)
```
CMC  Card                    Qty   Color  Role                                Rar
  1  Grim Lavamancer         x1    R      Repeatable reach/removal            R
  2  Storm Entity             x2    R      Payoff/threat — scales w/ storm     U
  2  Cloud of Faeries         x2    U      Mana-neutral untap + flyer          C
  3  Gempalm Incinerator      x1    R      Cycling removal, scales w/ goblins  U
  5  Peregrine Drake          x1    U      Untaps 5 lands, big mana swing      C
```

### INSTANTS & SORCERIES (17)
```
CMC  Card                    Qty   Color  Role                                Rar
  1  High Tide                x2    U      Doubles Island mana this turn       U
  1  Mystical Tutor           x1    U      Tutors combo piece to top           R
  1  Overmaster                x1    R      Uncounterable + cantrip protect     R
  2  Grapeshot                x2    R      Storm burn finisher                 C
  2  Snap                     x2    U      Bounce + untap 2 lands               C
  2  Counterspell             x2    U      Hard counter                         C
  2  Fire // Ice              x1    RU     Modal removal or tap+cantrip         U
  3  Frantic Search           x2    U      Filters + untaps 3 lands             C
  4  Empty the Warrens        x2    R      Storm token finisher                 C
  4  Turnabout                x1    U      Mass land-untap, 2nd spell wave      U
  5  Force of Will            x1    U      Free counter (protection)            M
```

### OTHER SPELLS (1)
```
CMC  Card                    Qty   Color  Role                                Rar
  2  Helm of Awakening        x1    C      Global cost reduction                R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                          Rar
Tormod's Crypt          x1    C      Graveyard hate — vs Reanimator/Flashback/GY       U
Damping Sphere          x1    C      Anti-combo/ramp hate — vs opposing combo decks    U
                                      ONLY alongside cutting your own High Tide plan
Circular Logic          x1    U      Extra countermagic — vs control/slower decks      U
Solar Blast             x1    R      Flex removal/cycler — vs aggro                    C
Wall of Junk            x1    C      Anti-aggro blocker — vs aggressive creature decks U
Man-o'-War               x1    U      Extra tempo bounce — vs creature-heavy decks     C
Icy Manipulator         x1    C      Repeatable lockdown — vs Artifacts/Enchantress    U
Deep Analysis           x1    U      Card advantage — vs attrition/control             C
Impulse                 x1    U      Extra selection — vs grindy matchups              C
Mind Stone              x1    C      Extra ramp/draw — vs matchups needing big turns   C
```

## ANALYSIS

**Slot allocation.** Macro-Archetype: Tempo (with Combo overlay). Lands 15/40 = 37.5% — modestly below the generic constructed baseline (16), justified by 5 mana-neutral untap effects (Cloud of Faeries x2, Snap x2, Frantic Search x2, Peregrine Drake, Turnabout) acting as pseudo-lands, plus Helm of Awakening's blanket discount. Of the 25 nonland cards: ~9 Interaction (Counterspell, Snap, Fire//Ice, Grim Lavamancer, Gempalm Incinerator, Force of Will), ~7 Payoffs/Threats (Grapeshot, Empty the Warrens, Storm Entity, Peregrine Drake), ~9 Engine/Infrastructure (High Tide, Turnabout, Helm of Awakening, Mystical Tutor, Overmaster, Frantic Search, Cloud of Faeries) — a Tempo/Combo-hybrid spread, roughly matching the 25-35% Interaction / 10-18% Payoff / 20-30% Engine bands for Tempo with Combo's Engine weighting pulled up.

**The storm-count math.** On a High Tide turn, tapping all 8 Islands (with High Tide active) yields 16 blue mana instead of 8. A representative sequence: High Tide (spell 1) -> Cloud of Faeries (spell 2, untaps 2 lands, mana-neutral) -> Snap on your own creature or a blocker (spell 3, untaps 2 more lands) -> Frantic Search (spell 4, untaps 3 lands, mana-neutral) -> Turnabout targeting your own lands (spell 5, untaps everything) -> cast Empty the Warrens (spell 6, makes 4 Goblin tokens off Storm) -> Grapeshot (spell 7, deals 7 to the opponent's face, or 6 copies at other targets). Helm of Awakening shaves 1 generic off every one of those casts, meaningfully extending how many spells the same mana pool supports.

**Goblin sub-synergy.** Empty the Warrens' tokens feed Gempalm Incinerator's cycling ability (deals X damage where X = Goblins on the battlefield) — a storm turn that whiffs on lethal Grapeshot can still cycle Gempalm Incinerator into a bonus removal spell or extra reach.

**Snap's sequencing dependency.** Snap needs a legal creature target to resolve. On an empty board, target your own Cloud of Faeries or Storm Entity rather than holding it dead — this is a real but manageable constraint on the combo line, not a blocker to it.

**Matchup notes.** Against aggro, the plan is straightforward tempo: Counterspell/Snap/Grim Lavamancer/Fire-Ice buy time, Storm Entity and Peregrine Drake block in the air, and the storm plan is a bonus rather than the primary gameplan — board in Wall of Junk and Solar Blast. Against control, lean on Force of Will and Overmaster to force through the kill turn, and board in Circular Logic/Deep Analysis/Impulse for the grind. Against combo/ramp mirrors, Damping Sphere is a house — but only if you're willing to blunt your own High Tide turn too (it taxes every player's spells equally), so it's a genuine sideboarding trade-off, not a free include.

**Cards Considered but Excluded.**

The pool restriction (max 5 rares/mythics total, main+SB) was the binding constraint — the storm/combo shell alone had a longer rare wishlist than the budget allowed. Passed over for rarity-budget reasons: Sulfur Falls (a strictly-untapped UR dual vs. Molten Tributary's always-tapped — the single best swap candidate if a rare slot ever opens up), Gamble and Mystic Remora (alternate tutor/card-advantage engines), Lotus Blossom (a slower ritual than what's already included), Stroke of Genius and Time Stretch (alternate/backup finishers, but Time Stretch's CMC 10 doesn't fit this curve even with Helm of Awakening), Last Chance (an extra-turn combo piece, but its "lose the game" clause is a poor fit once the deck also wants to just grind via tempo), Siege-Gang Commander and Urza, Lord High Artificer (strong standalone payoffs that don't need the storm shell to function, competing for the same 5 slots), Vexing Sphinx and Sulfuric Vortex (aggressive rare payoffs outside this build's lane).

Uncommons a tier below the current includes: Fact or Fiction (a fine value spell, but 4 mana of card selection is steep for a low-curve tempo shell — Deep Analysis fills a similar sideboard role for less commitment), Millikin (redundant with Mind Stone as a colorless rock), Ovinize and Spark Spray (viable cheap interaction, first cuts if the maindeck needs more removal density).

Sideboard-tier considerations that didn't make the final 10: Skirk Prospector and Mogg War Marshal (a deeper Goblins sub-package if the meta rewards going wider off Empty the Warrens tokens), Aquamoeba (a cheap evasive-ish body, marginal upgrade over existing creatures), Wormfang Drake (needs a creature to exile, awkward without more bodies on board).

**Self-grill summary.** Proposer defended all 50 cards with oracle-text citations; Challenger independently verified cube membership (0 phantoms), restrictions (5/5 rare cap exact), and mana math (exact match), and did not invoke the "pipeline cannot achieve its win condition" trigger — the pipeline was confirmed viable. Challenger's findings (three role mislabels, Turnabout misplaced in the sideboard, Damping Sphere's self-synergy risk) were all applied to the list above: Turnabout moved from sideboard to mainboard (replacing Chain Lightning), Icy Manipulator added to sideboard to cover the Artifacts/Enchantress gap, and role labels/notes corrected accordingly.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  34.5%  prod  46.7%  gap -12.2pp  [OK]
  U  demand  65.5%  prod  60.0%  gap  +5.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: max 2 copies each — all within cap
[PASS] Rares/mythics: max 1 copy each — all within cap
[PASS] Max 5 rares/mythics total (main+SB): exactly 5
       (Force of Will, Mystical Tutor, Overmaster, Helm of Awakening, Grim Lavamancer)
       — all in mainboard, 0 in sideboard
```
