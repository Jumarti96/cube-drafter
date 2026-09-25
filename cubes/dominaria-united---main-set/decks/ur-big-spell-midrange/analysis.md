---
deck_name: "ur-big-spell-midrange"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-11T16:45:32Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  5x Island
  6x Mountain
  2x Crystal Grotto           Any-color (activated) + scry, enters untapped
  2x Molten Tributary         UR dual, enters tapped
  1x Shivan Reef              UR painland, enters untapped
```

### CREATURES (10)

```
CMC  Card                       Qty   Color  Role                                      Rar
  2  Balmor, Battlemage Captain x1    RU     Early flier: team pump on I/S cast        U
  2  Electrostatic Infantry     x1    R      Growing trample enlist body               U
  2  Ghitu Amplifier            x1    R      Early body / kicked bounce tempo          C
  3  Keldon Flamesage           x1    R      Keystone: free-cast big I/S on attack     R
  4  Coalition Warbrute         x2    R      Trample beater / enlist fodder when home  C
  5  Najal, the Storm Runner    x2    RU     Keystone: flash sorceries + attack copy   U
  6  Djinn of the Fountain      x1    U      Modal payoff flier                        U
  7  Tolarian Terror            x1    U      Discounted 5/5 ward finisher              C
```

### INSTANTS & SORCERIES (12)

```
CMC  Card                       Qty   Color  Role                                      Rar
  2  Fires of Victory           x1    R      Scaling removal + kicked draw             U
  2  Impulse                    x2    U      Card selection                            C
  2  Lightning Strike           x2    R      Cheap removal                             C
  2  Thrill of Possibility      x2    R      Instant refuel                            C
  2  Twinferno                  x2    R      Spell copy / double strike                U
  5  Jaya's Firenado            x2    R      Big removal (copy target)                 C
  6  Chaotic Transformation     x1    R      Flexible exile removal (copy target)      R
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty   Color  Role                                      Rar
  4  Jaya, Fiery Negotiator     x1    R      Keystone: token engine + copy emblem      M
  4  The Elder Dragon War       x1    R      Sweep + loot + dragon finisher            R
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                   Rar
Flowstone Infusion         x2    R      Cheap removal vs x/2s                     C
Essence Scatter            x2    U      Counter creature bombs                    C
Impede Momentum            x1    U      Pseudo-removal for fatties                C
Negate                     x2    U      Vs control / noncreature bombs            C
Smash to Dust              x2    R      Artifact hate / mini-sweep                C
Frostfist Strider          x1    U      Extra tempo body vs aggro                 U
```

## ANALYSIS

**Deck identity.** UR midrange that wins by doubling haymakers. Three keystones drive it: Najal, the Storm Runner (sorceries gain flash; pay 2 on attack to copy your next instant/sorcery), Keldon Flamesage (attack: look at top X = its power, free-cast an instant/sorcery with MV ≤ X), and Jaya, Fiery Negotiator (prowess tokens, impulse draw, and a copy-twice emblem). Twinferno's copy mode and Najal's fork turn Jaya's Firenado into 10 damage across two targets and Chaotic Transformation into a multi-permanent exile. It uses the full 5-card rare/mythic budget.

**The Flamesage line (know the math).** Flamesage is a base 2/2, so unaided it only free-casts MV ≤ 2. The big-spell mode needs its enlist to tap an untapped, non-attacking body with power 3+ — an idle Coalition Warbrute makes X = 7, enough for a free Firenado (MV 5) or Chaotic Transformation (MV 6). Both attack triggers stack: order them so enlist pumps before X is counted. Twinferno copies also work on Flamesage's free-cast — a free copied Firenado is the deck's best value line.

**Copy timing.** Twinferno and Najal's fork are forward-only: cast them before the haymaker, never after. Hard-cast Twinferno + Firenado is 7 mana — an endgame play on 16 lands, not a midgame one. Najal's flash clause lets you do all of this at instant speed, including flashing Chaotic Transformation on the opponent's end step.

**Grill outcomes applied.** The Challenger confirmed all three keystone rules interactions work, then flagged the early game: only 2 creature two-drops and double-U strain at MV 5. Frostfist Strider (main) became Balmor, Battlemage Captain and one Ghitu Amplifier became Electrostatic Infantry — cheaper spell payoffs that also grow into enlist fodder for Flamesage's X.

**Sequencing warning.** The Elder Dragon War's chapter I deals 2 to each creature including yours — it kills Jaya's Monk tokens, Flamesage, and un-pumped two-drops. Use read ahead to start at chapter II (loot) or III (4/4 Dragon) whenever your own board matters.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget (5/5 used):**
- Haughty Djinn / Cosmic Epiphany / Silver Scrutiny — on-plan blue engines, blocked purely by the cap; the first candidates if you free a slot (Chaotic Transformation is the highest-variance current holder — the opponent gets a random same-type permanent back).
- Shivan Devastator — flood insurance, but this deck wants spell mana, not an X-creature.
- Ragefire Hellkite — big body with sacrifice synergy the deck doesn't have.

**Strong uncommons a tier below the chosen includes:**
- Founding the Third Path — chapter III can flashback-copy a Firenado from the graveyard; the strongest card that didn't make the 24.
- Battlewing Mystic — refuel body, but discarding a hand of haymakers is a real cost here.
- Dragon Whelp — curve-filler flier with no spell synergy.
- Volshe Tideturner — would help cast double-spell turns but the audit showed the base holds without it.

**Sideboard-consideration cards that missed the 10:**
- Jaya's Firenado #2 is already main; Meteorite (2 damage + fixing) was the alternate artifact answer considered.
- Ertai's Scorn — third counterspell if control dominates.
- Academy Wall — anti-aggro blocker/looter if your pod is fast.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.42   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  68.8%  prod  68.8%  gap  +0.0pp  [OK]
  U  demand  31.2%  prod  62.5%  gap -31.3pp  [OK]

Pip demand: R 22 / U 10 (69% / 31%)
Production: 11 R-sources, 10 U-sources of 16 lands
```

## RESTRICTIONS COMPLIANCE

```
[PASS] All cards from cube mainboard pool (verified vs working pool; basics exempt)
[PASS] Commons <= 2 copies each (max used: 2)
[PASS] Uncommons <= 2 copies each (max used: 2; Frostfist Strider 1 side only)
[PASS] Rares/mythics <= 1 copy each
[PASS] Max 5 rares/mythics total main+side: 5 used
       (Keldon Flamesage, Jaya Fiery Negotiator, The Elder Dragon War,
        Chaotic Transformation, Shivan Reef)
[PASS] Color identity within UR for all nonland cards
[PASS] Mainboard 40 cards / Sideboard 10 cards
```
