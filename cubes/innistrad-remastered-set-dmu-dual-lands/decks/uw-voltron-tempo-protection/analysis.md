---
deck_name: "uw-voltron-tempo-protection"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-07-09T15:12:05Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
11x Plains
 3x Island
 1x Idyllic Beachfront    WU dual, enters tapped
```

### CREATURES (11)
```
CMC  Card                                    Qty  Color  Role                            Rar
  1  Mausoleum Wanderer                       x1   U      Protection body / soft counter  R
  1  Thraben Inspector                        x1   W      Consistency chassis             C
  1  Lunarch Veteran // Luminous Phantom      x1   W      Recursive lifegain chassis      C
  1  Lantern Bearer // Lanterns' Lift         x1   U      Evasive chassis / Spirit synergy C
  2  Twinblade Geist // Twinblade Invocation  x2   W      Core payoff (double strike)     U
  2  Niblis of the Urn                        x2   W      Evasive attacker / tapper       U
  3  Spell Queller                            x1   WU     Protection / tempo              R
  3  Harvest Hand // Scrounged Scythe         x1   C      Resilient chassis/payoff        C
  4  Restoration Angel                        x1   W      Protection / value              R
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                Qty  Color  Role                    Rar
  1  Essence Flux        x1   U      Protection (blink)      C
  1  Syncopate            x1   U      Interaction (counter)   C
  1  Silent Departure     x1   U      Interaction (bounce)    C
  2  Valorous Stance      x2   W      Protection / removal    U
```

### OTHER SPELLS (9)
```
CMC  Card                                    Qty  Color  Role                          Rar
  1  Neglected Heirloom // Ashmouth Blade     x2   C      Core payoff (equipment)       U
  1  Gryff's Boon                             x2   W      Core payoff (recursive aura)  U
  1  Stitcher's Graft                         x1   C      Core payoff (equipment)       R
  2  Lunarch Mantle                           x2   W      Core payoff (pump + evasion)  C
  4  Faith Unbroken                           x2   W      Core payoff / removal         U
```

## SIDEBOARD (10)
```
Card                    Qty  Color  Role / When to board in                    Rar
Cathar Commando         x1   W      vs. artifacts/enchantments                 C
Angelic Purge           x1   W      vs. indestructible/hard-to-answer threats  C
Fiend Hunter            x1   W      vs. big/evasive creatures                  U
Slayer of the Wicked    x1   W      vs. Vampires/Werewolves/Zombies            U
Boarded Window          x1   C      vs. aggro                                  U
Drogskol Shieldmate     x1   W      vs. aggro                                  C
Soul-Guide Gryff        x1   W      vs. graveyard/flashback/reanimator         C
Summary Dismissal       x1   U      vs. combo/storm                            U
Compelling Deterrence   x1   U      generic tempo bounce                       U
Memory Deluge           x1   U      vs. control/grind                         R
```

## ANALYSIS

**Redundancy against the 2-for-1.** The archetype's core risk is a removal spell eating a creature and its attached payoff in one shot. This build stacks four independent dodges: (1) Gryff's Boon recurs itself from the graveyard for {3}{W}; (2) Twinblade Geist and Lantern Bearer both disturb into a second, aura-form threat; (3) Harvest Hand converts itself into a permanent Equipment on death; (4) equipment in general (Neglected Heirloom, Stitcher's Graft) survives the creature's death outright and just needs a cheap re-equip. Between these, 7 of the 9 payoff slots have some form of resilience built in — the deck rarely loses a full turn's investment to a single removal spell.

**Protection density.** Counting hybrid pieces, the real "don't let my guy die" package is 8 cards, not the bare 5 pure-interaction spells: Spell Queller and Restoration Angel are flash bodies that double as answers, Faith Unbroken is a removal spell stapled to a pump aura, and Mausoleum Wanderer taxes/counters removal outright.

**Mana base.** 25 nonland pips: 16 W / 6 U (72.7% / 27.3%). 15 lands = 12 W sources / 4 U sources (80.0% / 26.7%) — production tracks demand within a few points on both colors, and U is intentionally slightly over-provided since 3 of the 5 protection spells (Essence Flux, Syncopate, Spell Queller) want to be live as early as turn 1-3.

**Curve.** Avg CMC 1.84, with 13 cards at 1 mana. This supports the "curve out a body, then stack a cheap aura/equipment same turn or next" pattern — e.g. turn 1 Lantern Bearer, turn 2 Gryff's Boon + attack for 2 flying.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget** (4 used in mainboard + Memory Deluge in sideboard left no room for more):
- Deserted Beach — strictly better WU dual than Idyllic Beachfront (untapped after turn 2), but spending a 6th rare slot on a land wasn't worth it over Memory Deluge's sideboard utility.
- Gisela, the Broken Blade — a huge flying/first strike/lifelink equip target, but a full rare slot for a card that doesn't advance the payoff redundancy plan.
- Odric, Lunarch Marshal — keyword-sharing is strong in a go-wide shell, less impactful when only one creature usually carries the keywords.
- Thing in the Ice // Awoken Horror — powerful reset button, but transforming bounces our own suited-up creature too, stripping its auras/equipment; better as a sideboard-only card than a rare-budget mainboard slot.
- Wedding Announcement // Wedding Festivity / Cathars' Crusade — token/go-wide payoffs; off-plan for a single-threat Voltron shell.

**Uncommons a tier below the chosen includes:**
- Butcher's Cleaver — good stats (+3/+0, lifelink vs. Humans) but Equip {3} is slow next to Stitcher's Graft and Neglected Heirloom.
- Demonmail Hauberk — huge stat boost, but "Equip — Sacrifice a creature" is clunky without dedicated fodder.
- Mist Raven — fine flying tempo bounce, redundant with the bounce/protection suite already present.
- Ambitious Farmhand // Seasoned Cathar — decent fixing/late-game body, cut to keep the curve low.

**Sideboard-consideration cards not chosen:**
- Bound by Moonsilver — alternate lockdown answer to Angelic Purge, weaker since it doesn't remove the threat permanently.
- Geistlight Snare — cheaper counterspell than Summary Dismissal in a Spirit/enchantment-heavy hand, but narrower.
- Avacynian Priest — redundant tapper effect, Niblis of the Urn already covers this role on an evasive body.
- Imprisoned in the Moon — enchantment-based lockdown, held back by requiring an enchantment removal answer if it also needs to hit a land.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 15 recommended  [PASS]
Avg CMC:     1.84   Ramp cards: 0

Color Balance (core):  [PASS]
  U  demand  27.3%  prod  26.7%  gap  +0.6pp  [OK]
  W  demand  72.7%  prod  80.0%  gap  -7.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: all <= 2 copies
[PASS] Rares/mythics: all = 1 copy each
[PASS] Max 5 rares/mythics total (main+SB): exactly 5 used
       (Spell Queller, Restoration Angel, Mausoleum Wanderer,
        Stitcher's Graft -- mainboard; Memory Deluge -- sideboard)
[PASS] All 50 cards verified present in cube working pool by exact name
```
