---
deck_name: "ur-prowess-aggro"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-11T02:30:46Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
  4x Island
  7x Mountain
  1x Crystal Grotto           Any-color (activated) + scry, enters untapped
  2x Molten Tributary         UR dual, enters tapped
  1x Shivan Reef              UR painland, enters untapped
```

### CREATURES (13)

```
CMC  Card                       Qty   Color  Role                                   Rar
  1  Phoenix Chick              x2    R      1-drop evasive haste threat            U
  1  Shivan Devastator          x1    R      Scalable hasty flier / mana sink       M
  2  Balmor, Battlemage Captain x2    RU     Keystone: team pump on I/S cast        U
  2  Electrostatic Infantry     x2    R      Growing trample threat                 U
  2  Ghitu Amplifier            x2    R      Spell-cast pump / kicked bounce        C
  2  Haunting Figment           x2    U      Unblockable-on-cast threat             C
  3  Haughty Djinn              x1    U      Scaling flier + spell discount         R
  3  Squee, Dubious Monarch     x1    R      Recursive haste threat, token maker    R
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                       Qty   Color  Role                                   Rar
  1  Shore Up                   x1    U      Protection trick                       C
  1  Timely Interference        x2    U      1-mana cantrip trigger                 C
  2  Fires of Victory           x1    R      Scaling removal                        U
  2  Impulse                    x1    U      Card selection                         C
  2  Lightning Strike           x2    R      Removal / reach                        C
  2  Thrill of Possibility      x2    R      Instant-speed refuel                   C
  2  Twinferno                  x2    R      Double strike finisher / spell copy    U
```

### OTHER SPELLS (1)

```
CMC  Card                       Qty   Color  Role                                   Rar
  2  Founding the Third Path    x1    U      Free cast + GY recast engine           U
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                Rar
Flowstone Infusion         x2    R      Cheap removal vs x/2s                  C
Essence Scatter            x2    U      Counter bomb creatures                 C
Impede Momentum            x1    U      Lock down oversized blocker            C
Negate                     x2    U      Vs control / removal-heavy decks       C
Smash to Dust              x2    R      Artifact hate / go-wide mini-sweep     C
Jaya's Firenado            x1    R      Big-creature removal                   C
```

## ANALYSIS

**Deck identity.** UR Prowess Aggro built around Balmor, Battlemage Captain: every instant or sorcery cast pumps the whole team +1/+0 and grants trample. Six other creatures also pay you for casting spells — Electrostatic Infantry (permanent +1/+1 counters), Ghitu Amplifier (+2/+0), Haunting Figment (unblockable) — so the 12 cheap instant-speed spells each convert into 3-8 points of extra combat damage. Nearly every threat is evasive (flying, unblockable, or Balmor-granted trample), letting damage through regardless of board state. Goldfish curve: T1 Phoenix Chick, T2 Electrostatic Infantry, T3 Balmor + 1-mana instant swings for 6+ in the air; games close by turn 5-6.

**Trigger math.** All 11 instants/sorceries plus Founding the Third Path's chapter I (free-casts an MV 1-2 instant from hand — a second trigger for no mana) feed the five spell-cast payoff bodies. Haughty Djinn's discount frequently enables double-spell turns, which with Balmor on board is +2/+0 team-wide with trample — usually lethal reach.

**Honest interaction accounting (from the grill).** True removal is thin: Lightning Strike x2, Fires of Victory, and Jaya's Firenado in the side. The deck races rather than answers; against bomb-heavy pods, board in Essence Scatter/Impede Momentum and treat Twinferno's copy mode as a second Lightning Strike.

**Known tension.** Squee's graveyard recast exiles four cards and can shrink Haughty Djinn (power = instants/sorceries in your graveyard). Both are singleton late-game engines; in practice choose whichever wins the game state you're in.

**T1 red consistency.** Only 8 of 15 lands produce untapped red on turn 1 (~82% by turn 1 on the play), the cost of two tapped Molten Tributaries. Sequence taplands on turns you don't act.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget (4/5 used — one slot deliberately open):**
- Keldon Flamesage — on-theme rare (attack trigger free-casts an instant off the top); the open 5th slot's first candidate if you want more gas over consistency.
- Jaya, Fiery Negotiator — token engine + copy emblem; better in the big-spell midrange build than in a 25-spell aggro shell.
- Vesuvan Duplimancy — needs single-target spells aimed at your own creatures; only Shore Up/Twinferno qualify here.
- Jhoira, Ageless Innovator / Academy Loremaster — off-plan engines.

**Strong uncommons a tier below the chosen includes:**
- Battlewing Mystic — {1}{U} flyer, kicked = discard hand, draw 2; best refuel body if games go long; swaps with Haunting Figment.
- Combat Research — repeatable draw on an evasive creature but a 2-for-1 risk vs removal.
- Djinn of the Fountain — 6 mana is above this deck's ceiling.
- Dragon Whelp — fine beater, zero spell synergy.

**Sideboard-consideration cards that missed the 10:**
- Furious Bellow — cut from the mainboard in the grill for Founding the Third Path (trick vs. engine); first card back in vs decks with no removal.
- Frostfist Strider — good tempo body but 5 mana fights the curve.
- Ertai's Scorn — third counterspell if control is prevalent.
- Tolarian Terror — too slow for this build; belongs to the tempo/hybrid lists.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 15 recommended  [PASS]
Avg CMC:     1.84   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  60.7%  prod  73.3%  gap -12.6pp  [OK]
  U  demand  39.3%  prod  53.3%  gap -14.0pp  [OK]

Pip demand: R 17 / U 11 (61% / 39%)
Production: 11 R-sources, 8 U-sources of 15 lands
```

## RESTRICTIONS COMPLIANCE

```
[PASS] All cards from cube mainboard pool (verified vs working pool; basics exempt)
[PASS] Commons <= 2 copies each (max used: 2)
[PASS] Uncommons <= 2 copies each (max used: 2)
[PASS] Rares/mythics <= 1 copy each
[PASS] Max 5 rares/mythics total main+side: 4 used
       (Haughty Djinn, Squee Dubious Monarch, Shivan Devastator, Shivan Reef)
[PASS] Color identity within UR for all nonland cards
[PASS] Mainboard 40 cards / Sideboard 10 cards
```
