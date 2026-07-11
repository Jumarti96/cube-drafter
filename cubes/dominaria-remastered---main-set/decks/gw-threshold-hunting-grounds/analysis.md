---
deck_name: "gw-threshold-hunting-grounds"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-09T22:36:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
5x Forest
6x Plains
2x Radiant Grove         GW dual, enters tapped
1x Nantuko Monastery     Colorless; becomes a 4/4 first-strike Threshold creature-land
1x Slippery Karst        G, enters tapped, Cycling {2} -- feeds the graveyard when flooded
1x Drifting Meadow       W, enters tapped, Cycling {2} -- feeds the graveyard when flooded
```

### CREATURES (14)
```
CMC  Card                    Qty   Color  Role                                    Rar
  2  Werebear                x2    G      Mana dork early; 5/5 threshold beater   C
  2  Fa'adiyah Seer          x2    G      Repeatable looter, core GY-fill engine  C
  3  Vigilant Sentry         x2    W      Threshold: repeatable combat-trick body C
  3  Terravore               x1    G      Scales with land cards in all GYs       U
  4  Mystic Enforcer         x2    GW     Premier payoff: pro-black 7/7 flier     U
  4  Mystic Zealot           x2    W      Threshold: evasive beater               C
  5  Battlefield Scrounger   x1    G      Threshold: repeatable +3/+3 pump        C
  5  Glory                   x1    W      GY-activated team protection            R
  6  Nut Collector           x1    G      Squirrel engine + Threshold anthem      M
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                    Qty   Color  Role                                    Rar
  1  Swords to Plowshares    x1    W      Premium unconditional removal           U
  3  Sevinne's Reclamation   x1    W      Recursion: rebuys Hunting Grounds/      R
                                          Divine Sacrament/Werebear (MV<=3)
  3  Radiant's Judgment      x2    W      Removal (power 4+), cycles when dead    C
  3  Primal Boost            x2    G      Combat trick or cycle for a card        C
```

### OTHER SPELLS (4)
```
CMC  Card                    Qty   Color  Role                                    Rar
  2  Hunting Grounds         x1    GW     Keystone: cheats creatures in at        M
                                          threshold
  2  Pacifism                x1    W      Flexible removal aura                   C
  3  Divine Sacrament        x1    W      White anthem, bigger at threshold       R
  3  Seton's Desire          x1    G      Aura pump; forces blocks at threshold   C
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                     Rar
Tormod's Crypt          x1    C      GY hate vs opposing reanimator/GY decks     U
Break Asunder           x2    G      Artifact/enchantment answer; cycles when    C
                                    dead
Sandstorm               x1    G      Anti-aggro sweep vs small attackers         C
Renewed Faith           x2    W      Lifegain vs aggro/burn; cycles when dead    C
Giant Spider            x2    G      Reach blocker vs flying-heavy decks         C
Pacifism                x1    W      2nd copy -- extra removal vs problem        C
                                    threats
Damping Sphere          x1    C      Anti-combo/ritual tax, caps big-mana lands  U
```

## ANALYSIS

**Macro-Archetype: Midrange. Projected Avg MV: 3.12.**

A GW Midrange build anchored on Hunting Grounds -- a mythic enchantment that does nothing until your graveyard hits seven cards, then turns into a free "put a creature from hand onto the battlefield" trigger every time an opponent casts a spell. Twelve Threshold cards convert from unassuming curve-fillers into real bombs once the yard is stocked (Mystic Enforcer becomes a 7/7 pro-black flier for 4, Divine Sacrament and Nut Collector become team-wide anthems). The graveyard fills itself through Fa'adiyah Seer's forced discards, Slippery Karst/Drifting Meadow's optional cycling, and Radiant's Judgment/Primal Boost's cycling mode -- then Sevinne's Reclamation and Glory turn that same graveyard into a second resource, rebuying Hunting Grounds itself or handing the team color protection from the grave.

**Slot allocation:**
- Lands: 16 (40.0% of N=40) -- standard Midrange target; the plan needs to hit land drops on curve to deploy Threshold payoffs and still have mana up for Sevinne's Reclamation/Hunting Grounds triggers.
- Threats/Payoffs: 18 of 24 nonland (75%) -- Midrange folds Engine/Infra into Threats, and this is a deliberate specific-constraint build where the payoffs *are* the plan; almost every creature and enchantment either is a Threshold card or turns the graveyard into value (Sevinne's, Glory).
- Interaction: 4 of 24 nonland (16.7%) -- below the 20-30% Midrange band, and worth stating plainly rather than hiding. This was 12.5% before the self-grill review flagged it; Nomad Decoy (a narrow tempo tapper with no real board impact) was traded for a maindeck Pacifism to close some of the gap. Pushing further would mean cutting a Threshold payoff, which runs against the "build around Threshold" brief. The sideboard carries 4 more answers (2nd Pacifism, Damping Sphere, Tormod's Crypt, 2x Giant Spider as a reach wall) to shore this up against removal-light or grindy matchups post-board.
- Land modifiers: 2 mana sources <=2cmc (Werebear x2) implies a -0.5 land nudge; no true cantrips, no relevant MDFCs. Baseline 16 stayed at 16 since the mana_audit tool's constructed-land-target formula already lands there -- confirmed by land_count matching recommended_land_count exactly.

**Threshold math.** With Fa'adiyah Seer (2), Slippery Karst/Drifting Meadow cycling (2), Radiant's Judgment cycling (2), Primal Boost cycling (2), plus ordinary attrition (creatures dying, spells resolving), the deck has 8 explicit optional/repeatable graveyard-fill sources before counting combat losses. In practice this reaches 7+ cards by turn 4-5 in most games -- fast enough that Hunting Grounds and the creature payoffs are live for the back half of the game, which is when this deck wants to be doing its work.

**Sevinne's Reclamation targets.** Confirmed legal (MV<=3) recursion targets in this list: Hunting Grounds (2), Werebear (2), Fa'adiyah Seer (2), Divine Sacrament (3), Terravore (3), Vigilant Sentry (3), Seton's Desire (3). Rebuying Hunting Grounds after removal is the single best use -- it turns a 2-for-1 loss back into your engine being online, and the flashback mode (cast a copy for {4}{W}) means the second copy can rebuy something else the same turn.

**Battlefield Scrounger self-sabotage.** Its activation puts 3 cards from the graveyard on the bottom of the library. If the yard is sitting at exactly 7-9 cards, using it can drop you back under the Threshold line and shut off every other payoff until the yard refills. This is a real in-game sequencing trap, not a construction flaw -- hold the activation until the graveyard has real padding (10+) or you're using it as a finishing blow.

**Terravore fix.** The original build ran 16 basics/duals with no cycling lands, meaning nothing ever reliably put a land card into a graveyard -- Terravore's stat line ("land cards in all graveyards") would have started most games at 0/0-2/2. Swapping one Forest for Slippery Karst and one Plains for Drifting Meadow keeps the color count identical (G:8/W:9 sources unchanged) while giving Terravore an actual growth engine and adding two more optional graveyard-fill sources.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (all confirmed GW/colorless-legal in the pool):
- Birds of Paradise (R) -- excellent ramp/fixing, but the deck's curve doesn't need acceleration as much as it needs the graveyard-synergy payoffs; cut in favor of Sevinne's Reclamation.
- Maze of Ith (R) -- strong defensive utility land for a grindy midrange plan; cut for budget, good swap-in target if the meta turns aggressive.
- Wrath of God (R) -- a real sideboard-caliber reset button vs. go-wide decks, but this deck's own board (small Threshold creatures pre-flip) is also vulnerable to it; cut for rare budget, reconsider for a dedicated anti-aggro plan.
- Windborn Muse / Serra Angel / Lyra Dawnbringer / Sylvan Library / Kamahl, Fist of Krosa -- all fine bodies/engines but not Threshold- or graveyard-specific; passed over to keep the rare slots on-theme.
- Worldly Tutor / Enlightened Tutor -- could find a key piece, but redundant value once Hunting Grounds/Divine Sacrament are already maindeck at 1 copy each.

**Uncommons/commons a tier below the chosen includes:**
- Nomad Decoy (C) -- was in the initial build; cut during the self-grill review for a maindeck Pacifism once the review flagged the deck as interaction-light. Good re-add if you want more tempo and less removal.
- Millikin (U, colorless) -- repeatable self-mill + mana rock; flagged by the review as a strong enabler that didn't make the cut. Consider over Terravore or Battlefield Scrounger for a more consistent (if less flashy) graveyard engine.
- Gamekeeper (U) -- dies into a self-mill + "cheat a creature into play" trigger, very on-theme with the Hunting Grounds plan; a good swap-in for Nut Collector if you want a cheaper, faster payoff.
- Auramancer (C) -- rebuys Divine Sacrament, Hunting Grounds, or Seton's Desire from the graveyard if one gets destroyed; a fine redundancy piece if you find yourself losing enchantments to removal.
- Squirrel Nest (U) -- direct synergy with Nut Collector's anthem, but a slow enchantment-only token engine that competes with the deck's curve; sideboard/bench candidate.
- Krosan Restorer (C) -- untap-lands Threshold payoff; cut for a tighter, higher-impact creature count.

**Sideboard-tier considerations not included:**
- Emerald Charm (C) -- modal flex (untap / enchantment removal / remove flying); a reasonable alternate to Break Asunder if you want flexibility over raw power.
- Congregate (U) -- lifegain-matters payoff, off-theme for this build; Renewed Faith already covers the anti-aggro lifegain slot more cheaply.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ------------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.12   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  45.5%  prod  50.0%  gap  -4.5pp  [OK]
  W  demand  54.5%  prod  56.2%  gap  -1.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: no card exceeds 2 copies (verified per-card against the pool)
[PASS] Rares/mythics: each of the 5 included is exactly 1 copy
[PASS] Max 5 rares/mythics total across mainboard+sideboard: exactly 5
       (Hunting Grounds, Nut Collector, Divine Sacrament, Glory, Sevinne's Reclamation)
       -- all 5 in mainboard, 0 in sideboard
[PASS] Every card verified to exist in the cube's working pool by exact name
[PASS] Every nonland card's color_identity is a subset of {G, W}; no splash color present
```
