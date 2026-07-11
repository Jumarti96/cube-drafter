---
deck_name: "ug-kicker-value"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UG"
format: "40-card"
built_at: "2026-07-11T02:24:55Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
6x Island
5x Forest
2x Tangled Islet          GU dual (Forest Island), enters tapped
2x Crystal Grotto         Scry 1 on entry; {1},{T}: any color — funds the R splash
```

### CREATURES (15)

```
CMC  Card                    Qty   Color  Role                                Rar
  1  Shivan Devastator       x1    R      X-threat finisher (any-color ramp)  M
  2  Volshe Tideturner       x2    U      Kicker ritual                       C
  2  Salvaged Manaworker     x2    C      Any-color ramp                      C
  2  Llanowar Loamspeaker    x1    G      Any-color ramp / land animation     R
  2  Vineshaper Prodigy      x2    G      Kicker card-selection body          C
  3  Deathbloom Gardener     x2    G      Any-color ramp                      C
  3  Elvish Hydromancer      x2    G      Kicker payoff (copy)                U
  3  Vodalian Mindsinger     x1    U      Kicker payoff (steal)               R
  5  Silverback Elder        x1    G      Top-end engine threat               M
  7  Tolarian Terror         x1    U      Discounted late threat              C
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                    Qty   Color  Role                                Rar
  2  Silver Scrutiny         x1    U      X-draw mana sink                    R
  2  Impulse                 x2    U      Card selection                      C
  2  Joint Exploration       x2    U      Card selection / land drop (kicker) U
  2  Essence Scatter         x2    U      Counter creature                    C
  2  Bite Down               x2    G      Removal (fight)                     C
  2  Impede Momentum         x1    U      Tempo tap-down                      C
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                Rar
Broken Wings            x2    G      Artifacts, enchantments, fliers        C
Negate                  x2    U      vs control, sagas, planeswalkers       C
Snarespinner            x2    G      vs flier aggro                         C
Impede Momentum         x1    U      vs big-creature decks                  C
Frostfist Strider       x2    U      Grindy threat + ETB tempo              U
Tail Swipe              x1    G      vs small aggro                         U
```

## ANALYSIS

**Deck identity.** Simic value midrange built around DMU's kicker engine. Seven any-color/ritual mana sources (2 Volshe Tideturner, 2 Salvaged Manaworker, 2 Deathbloom Gardener, 1 Llanowar Loamspeaker, plus 2 Crystal Grotto in the manabase) fund seven kicker spells (2 Joint Exploration, 2 Vineshaper Prodigy, 2 Elvish Hydromancer, 1 Vodalian Mindsinger) and two X-sinks (Silver Scrutiny, Shivan Devastator). The red splash is exactly two cards — Shivan Devastator (one R pip, cast off any-color ramp) and Vodalian Mindsinger's {1}{R} kicker — deliberately kept off the kicker ritual: Volshe Tideturner's mana only pays for instants, sorceries, and kicked spells, so Devastator is funded by the dorks and Grotto, never by Tideturner.

**Key lines.**
- Turn 2 Tideturner or Manaworker → turn 3 kicked Joint Exploration (scry 2, draw, extra land) or kicked Vineshaper Prodigy is the deck's engine start.
- Elvish Hydromancer kicked ({3}{U}) copying Silverback Elder or a large Shivan Devastator is the marquee value play; even copying Deathbloom Gardener doubles ramp.
- Vodalian Mindsinger double-kicked (needs {1}{R} + {1}{G} from any-color sources) is a 5/5 that steals the opponent's best creature with power ≤ 5 — usually game-winning tempo.
- Silver Scrutiny at flash speed (X ≤ 3) plays around counterspells; late game X = 5+ refuels.
- Bite Down scales with kicked bodies: a double-kicked Mindsinger (power 5) or grown Devastator kills almost anything one-sided.

**Grill outcome.** The Challenger confirmed legality on all checks and pipeline viability. Two revisions were applied from its findings: 2x Nishoba Brawler → 2x Vineshaper Prodigy (the deck's two basic land types capped Brawler at 2 power; Prodigy is an on-pipeline kicker card Volshe can fund), and sideboard 2x Territorial Maro → 2x Frostfist Strider (Maro was a hard-capped 4/4 vanilla here). The final Challenger confirmation pass was interrupted by a session limit; the swaps were the Challenger's own recommendations and were mechanically re-verified (cube membership, copy counts, rare cap, color identity) by the build validator.

**Cards Considered but Excluded.**
- *Rares/mythics cut by the 5-card cap:* Threats Undetected (creature toolbox tutor — the premier 6th card if you swap out Llanowar Loamspeaker), Briar Hydra (domain finisher, weaker at 2 basic types), Ivy, Gleeful Spellthief (wants a targeting-spells build), Haughty Djinn and Cosmic Epiphany (want a dedicated spellslinger shell), Aether Channeler (flexible but off-pipeline), Quirion Beastcaller (creature-count payoff, low creature velocity here), Vesuvan Duplimancy (mythic, needs targeting density), Sphinx of Clear Skies (mythic domain draw, capped here), Yavimaya Coast (untapped GU rare land — first swap-in if you free a rare slot).
- *Strong uncommons a tier below the includes:* Nael, Avizoa Aeronaut (domain draw capped at 2–3), Tatyova, Steward of Tides (lands-matter payoff without lands theme), Ertai's Scorn (conditional Cancel; Negate covers the sideboard role unconditionally), Pixie Illusionist (kicker body, but its land-typing matters only for domain), Sunbathing Rootwalla (mana sink, but fragile 1-toughness early), Protect the Negotiators (UW — off-identity).
- *Sideboard considerations that missed the cut:* Micromancer (no 1-MV instant/sorcery targets in pool worth fetching), Shore Up (protection, but the deck defends with counters), Academy Wall (loot engine vs grind, too slow at competitive), Coral Colony (defender mill plan, off-pipeline).

**Matchup notes.** Weakest against resolved noncreature permanents (no mainboard answer — Broken Wings comes in vs artifacts/enchantments) and wide token starts (Snarespinner/Tail Swipe help). Strongest in grindy creature mirrors where Mindsinger, Hydromancer copies, and Scrutiny out-value fair decks.

## MANA AUDIT: WARN

```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  50.0%  prod  60.0%  gap -10.0pp  [OK]
  U  demand  50.0%  prod  66.7%  gap -16.7pp  [OK]

Splash Check: [WARN]
  R  1 card(s), max CMC 1  sources 2/3  [WARN]
  WARN  R  actual 2 < required 3
```

The WARN is the splash check: only 2 land sources (Crystal Grotto x2) produce R against a required 3. Accepted deliberately — the splash is 1 mainboard card plus an optional kicker, and 5 non-land any-color producers (not counted by the audit) also pay it. The audit's `ramp_count: 0` reads a "ramp" tag the pool doesn't use; the deck actually runs 5 any-color mana creatures plus 2 conditional rituals.

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons limited to 2 copies each (max used: 2)
[PASS] Uncommons limited to 2 copies each (max used: 2)
[PASS] Rares/mythics limited to 1 copy each
[PASS] Max 5 rares/mythics across mainboard + sideboard (5/5 used:
       Llanowar Loamspeaker, Silver Scrutiny, Vodalian Mindsinger,
       Shivan Devastator, Silverback Elder — sideboard contains 0)
[PASS] All cards present in cube mainboard pool (verified vs working pool)
[PASS] Color identity within G/U core + declared R splash (2 splash cards)
```
