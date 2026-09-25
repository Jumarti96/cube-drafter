---
deck_name: "bg-broodtender-reanimator"
cube_id: "eoe"
cube_slug: "eoe"
colors: "BG"
format: "40-card"
built_at: "2026-08-07T17:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
3x   Forest                        
12x  Swamp                         
2x   Haunted Mire                  ({T}: Add {B} or {G}.) This land enters tapped.
```

### CREATURES (11)

```
CMC  Card                          Qty  Color  Role                              Rar
  2  Seedship Broodtender          x2   BG     Engine/Outlet                     U
  2  Timeline Culler               x1   B      Enabler/Fodder                    U
  2  Umbral Collar Zealot          x2   B      Engine/Outlet                     U
  3  Xu-Ifit, Osteoharmonist       x1   B      Engine/Outlet                     R
  5  Voidforged Titan              x2   B      Payload/Payoff                    U
  6  Monoist Circuit-Feeder        x1   B      Payload/Payoff                    U
  9  Bygone Colossus               x2   C      Payload/Payoff                    U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                          Qty  Color  Role                              Rar
  1  Embrace Oblivion              x2   B      Interaction/Disruption            C
  1  Tragic Trajectory             x2   B      Interaction/Disruption            U
  1  Zero Point Ballad             x1   B      Interaction/Disruption            R
  2  Hymn of the Faller            x2   B      Infrastructure/Consistency        U
  3  Scrounge for Eternity         x2   B      Engine/Outlet                     U
```

### OTHER SPELLS (3)

```
CMC  Card                          Qty  Color  Role                              Rar
  2  Wurmwall Sweeper              x1   C      Infrastructure/Consistency        C
  3  Fell Gravship                 x2   B      Infrastructure/Consistency        U
```

## SIDEBOARD (10)

```
Card                          Qty  Color  Role / When to board in                                   Rar
Chrome Companion              x2   C      vs graveyard decks and the mirror - repeatable, colourles C
Seedship Impact               x2   G      vs cheap artifacts/enchantments and Spacecraft decks; lea U
Dauntless Scrapbot            x2   C      vs graveyard decks - one-shot full exile of each opponent U
Shattered Wings               x2   G      vs artifacts, enchantments and fliers (artifacts 29.7% of C
Gravkill                      x2   B      vs recursive or death-trigger threats and stationed Space C
```

## ANALYSIS

### DECK IDENTITY

BG Broodtender Reanimator. The deck spends its early turns turning cheap permanents into graveyard cards, using Umbral Collar Zealot's free repeatable 'Sacrifice another creature or artifact: Surveil 1' alongside Seedship Broodtender's and Fell Gravship's 'mill three cards'. Once an oversized body is in the yard, Xu-Ifit, Osteoharmonist returns it for free every turn, Seedship Broodtender's uncapped {3}{B}{G} sacrifice ability returns anything, and Scrounge for Eternity returns the mana-value-5 bodies. The clock is a recurring 9/9 Bygone Colossus. The opponent's answers to a graveyard in this cube are Dauntless Scrapbot (one-shot) and Chrome Companion ('{2}, {T}: Put target card from a graveyard on the bottom of its owner's library', repeatable and colourless) - the latter is the real threat to this plan and is why the deck's own board runs two copies for the mirror.

**The engine is a rules interaction, not a card.** Xu-Ifit reads `{T}: Return target creature card from your graveyard to the battlefield. It's a Skeleton in addition to its other types and has no abilities.` Stripping abilities means the return is worth exactly the printed box, and the largest printed box reachable in these colours is Bygone Colossus at **9/9**. Xu-Ifit costs nothing to activate and untaps every turn, so the opponent must answer the 9/9 *every* turn, permanently, using cards. That asymmetry — one tap versus one removal spell, repeated — is the whole deck.

**Three oracle traps this build had to navigate, all of which cost a card:**

| Trap | Oracle text | Consequence |
|---|---|---|
| Warp is not a fast clock | Bygone Colossus: `Warp {3}` — "Exile this creature at the beginning of the **next end step**" | Cast at sorcery speed in your own main phase, the next end step is your own. It never attacks and never reaches the graveyard. Colossus is a mill target only. |
| Spacecraft are not creature cards | Xu-Ifit: "Return target **creature card**" | A Spacecraft in the graveyard is not a creature card — Station only makes it an artifact creature *on the battlefield*. Pinnacle Kill-Ship and Extinguisher Battleship are Seedship Broodtender targets exclusively. |
| Mana-value caps segment the suite | Scrounge for Eternity: "mana value **5 or less**" | Only Xu-Ifit and Seedship Broodtender reach Bygone Colossus (MV 9) or Monoist Circuit-Feeder (MV 6). This is why the assembly gate discounts those copies rather than counting them whole. |

**Void is free here.** Six mainboard cards' worth of text keys on "a nonland permanent left the battlefield this turn or a spell was warped this turn" — Tragic Trajectory ×2 (`-2/-2` becomes `-10/-10`), Hymn of the Faller ×2 (draw 1 becomes draw 2), Voidforged Titan ×2 (draws at end step). Umbral Collar Zealot's `Sacrifice another creature or artifact: Surveil 1` is a **free** activation with no tap symbol and no mana cost, so Void is live on any turn a spare permanent exists. 13 of the 23 nonland cards are creatures or artifacts that can be fed to it. Timeline Culler additionally satisfies the "spell was warped" half every time it is recast out of the graveyard for `{B}`.

**Timeline Culler is the deck's perpetual-motion fodder.** `You may cast this card from your graveyard using its warp ability. Warp—{B}, Pay 2 life.` Warp exiles it at the beginning of the next end step — but if you sacrifice it to Umbral Collar Zealot *before* that delayed trigger resolves, it goes to the graveyard instead of exile, and can be cast from there again next turn. That is a 2/2 haste attacker, a free sacrifice, a surveil, and a Void trigger, every turn, for {B} and 2 life.

**Why the deck is unpoliced.** Only 5 of the 276 pool cards exile a creature or permanent, and only 2 of those are black-legal — so a killed Colossus almost always goes back to the graveyard where Xu-Ifit can find it again. The real predator is not removal but Chrome Companion (`{2}, {T}: Put target card from a graveyard on the bottom of its owner's library`) — a colourless common every deck can run, repeatable every turn for two mana. It is the single card most likely to beat this deck, which is why two copies sit in this deck's own sideboard for the mirror.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:5  2:8  3:5  5:2  6:1  9:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  reanimator: 7 copies (effective 4.8: Scrounge for Eternity@0.5, Scrounge for Eternity@0.5, Fell Gravship@0.4, Fell Gravship@0.4) → p=0.81 (need ≥ 0.75)
  PASS  mill_enabler: 9 copies (effective 8: Hymn of the Faller@0.7, Hymn of the Faller@0.7, Wurmwall Sweeper@0.6) → p=0.94 (need ≥ 0.75)
  PASS  oversized_body: 5 copies (effective 4.8: Monoist Circuit-Feeder@0.8) → p=0.81 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 69%  T2 98%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Zero Point Ballad
  OK        single_large_threat: Embrace Oblivion, Tragic Trajectory, Zero Point Ballad
  CONCEDED  noncreature_permanents: Black offers no answer to a noncreature permanent in this pool beyond Embrace Oblivion's Spacecraft clause; green's Seedship Impact and Shattered Wings are the real answers and both sit in the sideboard. Maindecking either would cost a mill or body slot the assembly gate depends on, and would add green pips to a deck already at 92% black demand. Partial mainboard cover: Embrace Oblivion x2 destroys a Spacecraft, the cube's densest noncreature-permanent threat.
  CONCEDED  stack: Neither black nor green offers any counterspell or stack interaction in this pool. The deck answers a countered reanimation by redundancy - seven declared reanimator copies, of which only the two Scrounge for Eternity are spells; Xu-Ifit's and Seedship Broodtender's are activated abilities and cannot be countered by a counterspell.
  CONCEDED  graveyard: Two answers to an opposing graveyard exist for any deck in this cube - Dauntless Scrapbot (one-shot 'exile each opponent's graveyard') and Chrome Companion ('{2}, {T}: Put target card from a graveyard on the bottom of its owner's library', repeatable and colourless). Maindecking either would cost a self-mill slot in a deck whose whole plan is its own graveyard, so both are in the sideboard at 2 copies each.
```

- All Phase 6b checks PASS after the Phase 9 repairs; no WARN flags remain.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Excess mana converts to cards and bodies three ways, none relying on a free ability or a repeatable sacrifice: (1) Hymn of the Faller x2 - 'Surveil 1, then you draw a card and lose 1 life. Void - ... draw another card' - a 2-mana draw-2 on any turn the deck has sacrificed something; (2) Timeline Culler - 'You may cast this card from your graveyard using its warp ability. Warp-{B}, Pay 2 life' - a genuinely repeatable {B} sink every turn, because sacrificing it to Umbral Collar Zealot before the warp exile trigger resolves puts it back in the graveyard to cast again; (3) Bygone Colossus is hard-castable at {9} and Monoist Circuit-Feeder at {4}{B}{B} on a flooded board. Explicitly NOT claimed: Seedship Broodtender's {3}{B}{G} reads 'Sacrifice this creature' and is capped at 2 lifetime activations, and Umbral Collar Zealot's free outlet converts no mana at all. |
| screw | mitigation | Two-land hands are keepable because the working half of the curve is cheap: 13 of 23 nonland cards cost 1 or 2 (Tragic Trajectory x2, Embrace Oblivion x2, Zero Point Ballad at X=0-1, Seedship Broodtender x2, Umbral Collar Zealot x2, Hymn of the Faller x2, Wurmwall Sweeper, Timeline Culler). Hymn of the Faller x2 digs, and Scrounge for Eternity x2 each leave a Lander that fetches a basic of either colour onto the battlefield. |
| decapitation | mitigation | Xu-Ifit answered on sight leaves six more recursion copies: Seedship Broodtender x2 ({3}{B}{G}, no mana-value cap), Scrounge for Eternity x2 (mana value 5 or less), and Fell Gravship x2 returning a hard-castable body to hand. No single card is the plan. |
| gas-out | mitigation | Four Cards: Net-Positive / Self-Replacing effects refuel: Hymn of the Faller x2 ('you draw a card and lose 1 life', plus a second card whenever Void is live) and Fell Gravship x2 ('mill three cards, then return a creature or Spacecraft card from your graveyard to your hand'). Voidforged Titan x2 adds 'Void - ... you draw a card and lose 1 life' at end step on any turn a permanent left the battlefield. Beyond cards, the graveyard is the refuel: an empty hand still has Xu-Ifit turning a full yard into a body every turn for zero cards. |
| raced | accepted | The fastest clocks in this cube are the artifact-aggro decks (artifacts 29.7% density, evasion 22.5%). Cutting Thawbringer x2 at the Challenger's F9 removed the cheapest blocker, so the early defensive body is now Voidforged Titan (5/4 at {4}{B}) behind 5 pieces of one-to-three-mana interaction. Mitigating further would mean trading mill or body slots for blockers, which directly lowers the mill_enabler (8.0 effective) and oversized_body (5.0) counts the assembly gate depends on - it would cost the deck its kill mechanism. |
| disruption-fizzle | mitigation | Xu-Ifit's and Seedship Broodtender's reanimation are ACTIVATED abilities, not spells, and cannot be countered by a counterspell; only 2 of the 7 declared reanimator copies (Scrounge for Eternity) are stack-vulnerable. If the reanimated body is removed on the critical turn it returns to the graveyard and Xu-Ifit returns it again next turn - the pool contains only 5 exile-based answers across 276 cards, of which 2 are black-legal. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Extinguisher Battleship (R) | 'deals 4 damage to each creature' kills 11 of this deck's 13 creature copies including Xu-Ifit, and it arrives via Broodtender as a non-creature Spacecraft with 0 charge counters. Cut at the grill; Zero Point Ballad answers wide boards without the collateral because X is chosen and the bodies land in the graveyard. |
| Pinnacle Kill-Ship (C) | a Spacecraft card in the graveyard is not a creature card, so Xu-Ifit cannot return it, and at mana value 7 it is outside Scrounge for Eternity's cap - only 2 of the 7 reanimator copies reach it. |
| Susurian Dirgecraft (U) | opponent-chosen edict, which against any board of 2+ creatures removes their worst creature; and as a Spacecraft card Xu-Ifit cannot return it. |
| Anticausal Vestige (R) | 7/5 is the second-largest body in these colours, but at mana value 6 it is outside Scrounge for Eternity's 'mana value 5 or less' cap, so only 3 of the 7 reanimator copies reach it, and it would spend a sixth of the 6-card rare budget. |
| Sothera, the Supervoid (M) | 'Whenever a creature you control dies, each opponent chooses a creature they control and exiles it' is a death-trigger drain engine, not a reanimation engine - it belongs to the Void Aristocrats build, not this one. |
| Chorale of the Void (R) | returns a creature card from the DEFENDING PLAYER's graveyard, not yours, so it is not a reanimator for this deck's own milled bodies. |
| Icetill Explorer (R) | extra land drops and landfall mill are real, but at {2}{G}{G} it demands four green sources in a deck whose green pip count is 2 of 25. |
| Cosmogoyf (R) | power equals cards you own in EXILE; this deck's only exile source is Timeline Culler's warp, so it would be a 0/1 or 1/2 most games. |
| Thawbringer (C) | surveil 1 on entry and on death is the deck's weakest mill enabler (assembly weight 0.6) and it carried 2 of the deck's 4 green pips. Cut at the grill in favour of colourless surveil. |
| Beamsaw Prospector (C) | cheap Lander fodder, but its Lander comes off a DEATH trigger rather than on demand, so it does not fix mana in the turn you need it. |
| Decode Transmissions (C) | 'draw two cards and each opponent loses 2 life' with Void live is a fine refuel, but the drain half is a Void Aristocrats payoff; Hymn of the Faller does the drawing here for one less mana. |
| Susurian Voidborn (U) | converts every death into a 1-point drain, which is the Void Aristocrats win condition rather than this deck's; it does nothing to accelerate a 9/9 onto the battlefield. |
| Swarm Culler (C) | its 'becomes tapped' trigger keys on attacking or Stationing, and this build runs only 3 Spacecraft copies (Fell Gravship x2, Wurmwall Sweeper x1). |
| Archenemy's Charm (R) | {B}{B}{B} is a real cost at 14 black sources, and its graveyard mode returns cards to HAND - a Bygone Colossus in hand at {9} is a dead card. |
| Pull Through the Weft (U) | returns nonland permanents to HAND, not the battlefield; same dead-card problem as Archenemy's Charm, at {3}{G}{G} in a 2-green-pip deck. |
| Virus Beetle (C) | considered for the sideboard; a turn-2 opponent-chosen discard answers none of the threat classes the cube's threat profile enumerates (artifacts 29.7%, evasion 22.5%, graveyard 12.5%). |
| Gravkill (C) | sideboard rather than mainboard: 'Exile target creature or Spacecraft' at {3}{B} is the pool's only common exile removal, correct against death-trigger and recursive threats but overpriced as a maindeck answer. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 18 recommended  [PASS]
Avg CMC:     3.04   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.72 adj [MV 3.04 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  92.0%  prod  82.4%  gap  +9.6pp  [OK]
  G  demand   8.0%  prod  29.4%  gap -21.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card exceeds 2 copies
rares_mythics_max_1: PASS - Xu-Ifit x1, Zero Point Ballad x1
rare_mythic_total_max_6: PASS - 2 used (both mainboard); 0 mythics
basics_unlimited: 12 Swamp + 3 Forest, format-supplied
colours: PASS - all cards within BG core identity; no splash
```
