---
deck_name: "ur-spell-velocity-tempo"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-11T16:37:46Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
 10x Island
  2x Mountain
  1x Crystal Grotto           Any-color (activated) + scry, enters untapped
  2x Molten Tributary         UR dual, enters tapped
  1x Shivan Reef              UR painland, enters untapped
```

### CREATURES (8)

```
CMC  Card                       Qty   Color  Role                                     Rar
  2  Haunting Figment           x2    U      Evasive clock on spell turns             C
  3  Academy Wall               x2    U      Blocker + loot engine on I/S cast        C
  3  Haughty Djinn              x1    U      Keystone: scaling flier + spell discount R
  6  Djinn of the Fountain      x1    U      Modal payoff flier                       U
  7  Tolarian Terror            x2    U      Discounted 5/5 ward finisher             C
```

### INSTANTS & SORCERIES (14)

```
CMC  Card                       Qty   Color  Role                                     Rar
  1  Timely Interference        x2    U      1-mana cantrip trigger                   C
  2  Essence Scatter            x2    U      Counter creature bombs                   C
  2  Impulse                    x2    U      Card selection                           C
  2  Lightning Strike           x2    R      Removal / reach                          C
  2  Silver Scrutiny            x1    U      Refuel draw X (flash if X<=3)            R
  2  Thrill of Possibility      x2    R      Instant refuel + GY fill                 C
  3  Ertai's Scorn              x2    U      Discounted hard counter                  U
  6  Cosmic Epiphany            x1    U      Keystone: massive refuel draw            R
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty   Color  Role                                     Rar
  2  Founding the Third Path    x2    U      Free cast + mill + GY recast engine      U
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                  Rar
Flowstone Infusion         x2    R      Cheap removal vs x/2s                    C
Impede Momentum            x2    U      Pseudo-removal for fatties               C
Negate                     x2    U      Vs control / noncreature bombs           C
Smash to Dust              x2    R      Artifact hate / mini-sweep               C
The Phasing of Zhalfir     x1    U      Lock/reset vs big-creature midrange      R
Frostfist Strider          x1    U      Tempo threat vs midrange                 U
```

## ANALYSIS

**Deck identity.** Blue-heavy UR tempo built on spell velocity: 16 maindeck instants/sorceries (plus Founding the Third Path) fill the graveyard to power three payoff axes — Haughty Djinn (power = instants/sorceries in yard, plus a systemic 1-mana discount), Tolarian Terror (routinely a 2-4 mana 5/5 ward by midgame), and Cosmic Epiphany (draw 5-8 in one spell). Counterspells protect the tempo lead; evasive and warded bodies close. Red is a 4-pip splash purely for Lightning Strike (the pool's only clean cheap removal in these colors) and Thrill of Possibility (the pool's best graveyard-filling refuel).

**Grill outcomes applied.** The Challenger's must-fix cut Micromancer (a 4-mana tutor whose only maindeck 1-MV target was Timely Interference) for a second Ertai's Scorn — an instant that feeds every payoff and frequently costs UU or less. The free 5th rare/mythic slot went to Shivan Reef over the second Crystal Grotto, speeding up the splash (hypergeometric check: ~85% red by turn 3 for four non-essential red spells).

**Clock math.** Real attackers number only six (2 Figment, Haughty Djinn, Djinn of the Fountain, 2 Terror) — thin but resilient: ward 2, flying, and graveyard scaling make every threat a 2-for-1 against removal, and Cosmic Epiphany rebuys the next wave. If your pod punishes slow clocks, the first swap is Djinn of the Fountain (the deck's clunkiest card — 6 mana, no discount, no immediate impact) for Balmor, Battlemage Captain or Electrostatic Infantry.

**Internal frictions worth knowing.** Founding the Third Path's chapter III exiles the copied spell, permanently shrinking Djinn/Terror/Epiphany by one — usually worth it, but check the math before copying. Silver Scrutiny only has flash at X≤3; the big reload is sorcery-speed. The Phasing of Zhalfir's chapter III hands the opponent 2/2s — board it in against big-creature midrange (phase out a fatty twice, then reset), never against token swarms.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget (5/5 used):**
- Vesuvan Duplimancy — copy payoff, but the deck runs almost no single-target spells aimed at its own creatures.
- Academy Loremaster — symmetric draw helps the opponent break parity first; too risky for tempo.
- Defiler of Dreams — powerful engine but 5 mana and the deck is only ~35% blue permanents.
- Sphinx of Clear Skies — domain payoff in a 2-color deck (2 basic types) is half strength.

**Strong uncommons a tier below the chosen includes:**
- Balmor, Battlemage Captain / Electrostatic Infantry — the aggro-speed alternatives; first in if you want a faster clock (see Clock math above).
- Battlewing Mystic — refuel body, but discarding your hand fights the counterspell plan.
- Talas Lookout — the Challenger's second-choice Micromancer replacement; a 4-drop that does nothing until it dies.
- Volshe Tideturner — ramp only toward instants/sorceries; the curve didn't need it after the Djinn discount.

**Sideboard-consideration cards that missed the 10:**
- Frostfist Strider #2 — a second copy is legal if midrange grind dominates your pod.
- Jaya's Firenado — 5-damage answer; Impede Momentum covers the slot cheaper.
- Coral Colony — defender mill is an alternate axis, but off-plan here.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.88   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  13.3%  prod  37.5%  gap -24.2pp  [OK]
  U  demand  86.7%  prod  87.5%  gap  -0.8pp  [OK]

Pip demand: U 26 / R 4 (87% / 13%)
Production: 14 U-sources, 6 R-sources of 16 lands
```

## RESTRICTIONS COMPLIANCE

```
[PASS] All cards from cube mainboard pool (verified vs working pool; basics exempt)
[PASS] Commons <= 2 copies each (max used: 2)
[PASS] Uncommons <= 2 copies each (max used: 2)
[PASS] Rares/mythics <= 1 copy each
[PASS] Max 5 rares/mythics total main+side: 5 used
       (Haughty Djinn, Silver Scrutiny, Cosmic Epiphany, Shivan Reef, The Phasing of Zhalfir)
[PASS] Color identity within UR for all nonland cards
[PASS] Mainboard 40 cards / Sideboard 10 cards
```
