---
deck_name: "g-dark-depths-turbo-combo"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GB"
format: "40-card"
built_at: "2026-07-10T17:15:21Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
12x Forest
2x Haunted Mire          BG dual, enters tapped — dedicated fixing for the B splash
1x Dark Depths          Win condition: 10 ice counters, sac for Marit Lage (20/20 flying, indestructible)
```

### CREATURES (8)
```
CMC  Card                     Qty   Color  Role                                        Rar
  1  Birds of Paradise       x1   G      T1 mana dork, fixes any color               R
  2  Werebear                x2   G      Ramp; becomes a 4/4+ at threshold           C
  2  Wall of Junk            x1   C      Reusable blocker, bounces off block         U
  2  Fa'adiyah Seer          x2   G      Land filter / card selection                C
  3  Krosan Restorer         x2   G      Untap engine, funds Dark Depths' cost       C
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                     Qty   Color  Role                                        Rar
  1  Crop Rotation           x2   G      Primary Dark Depths tutor                   U
  1  Vampiric Tutor          x1   B      Flexible instant-speed tutor                M
  1  Emerald Charm           x2   G      Untap / enchantment removal / anti-fly      C
  2  Nature's Lore           x2   G      Ramp/fixing, fetches a Forest to the battlefieldU
  2  Lull                    x2   G      Fog protection, cycles when dead            C
  3  Call of the Herd        x2   G      Recurring 3/3 body (flashback)              U
```

### OTHER SPELLS (6)
```
CMC  Card                     Qty   Color  Role                                        Rar
  1  Wild Growth             x2   G      Ramp aura                                   C
  1  Exploration             x1   G      Extra land drop each turn                   R
  2  Mind Stone              x1   C      Ramp, cantrips late                         C
  2  Sylvan Library          x1   G      Card selection engine                       M
  3  Squirrel Nest           x1   G      Repeatable token generator                  U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                   Rar
Tormod's Crypt          x2     C      Graveyard hate (reanimator/flashback)     U
Break Asunder           x2     G      Answers artifacts/enchantments, cycles    C
Sandstorm               x2     G      Anti-token/small-creature aggro           C
Duress                  x2     B      Strips removal/counterspells vs control   C
Ichor Slick             x1     B      Cheap removal vs. aggro creatures         C
Icy Manipulator         x1     C      Tempo tap-down vs. aggro                  U
```

## ANALYSIS

**Mana math for the combo:** Dark Depths needs 30 total mana ({3}x10) spread over the game, plus 1 land sacrificed to Crop Rotation. With Krosan Restorer's threshold ability (untap up to 3 lands) and Wild Growth (+1 extra G per tap), a 15-land base functionally produces well above its raw count once the graveyard fills. Threshold (7+ cards in graveyard) is reachable via Crop Rotation's sacrifice, Lull's cycling, Emerald Charm's cycling-adjacent flexibility, and normal attrition -- Werebear and Krosan Restorer both key off it.

**Why Wall of Junk over Terravore:** the Phase 9 Challenger flagged Terravore (P/T = lands in all graveyards) as under-supported -- only Crop Rotation reliably feeds a land to a graveyard, and only twice. Wall of Junk is a strictly more reliable inclusion for the deck's actual job (survive to turn 10+), since it never dies in combat.

**The Black splash is a deliberate, audited risk.** Vampiric Tutor is the only Black card in the maindeck. It relies on Birds of Paradise plus 2x Haunted Mire (added after the grill flagged the original build had zero dedicated Black sources) -- 2 of the 3 sources the audit tool wants, hence the remaining WARN. This is acceptable because Vampiric Tutor is an instant with no on-curve timing requirement, and the deck has three other card-selection effects (Crop Rotation, Sylvan Library, Fa'adiyah Seer) that don't need Black at all.

**Cards Considered but Excluded**

- *Rares/mythics cut for the 5-card cap:* Kamahl, Fist of Krosa (mythic finisher -- too slow/greedy for a combo shell); Forgotten Ancient and Jolrael, Mwonvuli Recluse (rares -- better suited to a value-grind plan than turbo combo); Woodland Cemetery and Gemstone Mine (would firm up the B splash but cost a 6th rare slot); Maze of Ith (excellent, went to the Ramp Midrange build instead); Triskelion, Jester's Cap, Umbilicus, Crawlspace (all rare, no clear slot).
- *Uncommons a tier below the cut:* Millikin (ramp + incidental self-mill for Terravore -- redundant once Terravore was cut); Icy Manipulator (strong, but the maindeck prioritized fog/tutoring over tempo -- moved to sideboard); Damping Sphere (better as anti-combo tech, sits in the Ramp Midrange sideboard instead).
- *Sideboard-consideration cards not included:* Elvish Spirit Guide (free fast mana vs. control -- viable swap-in for Ichor Slick in grindy matchups); Jalum Tome (card filtering, too slow at competitive speed); Dodecapod (discard-matters payoff, no support here).

## MANA AUDIT: WARN
```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  15 / 14 recommended  [PASS]
Avg CMC:     1.84   Ramp cards: 10

Color Balance (core):  [PASS]
  G  demand 100.0%  prod  93.3%  gap  +6.7pp  [OK]

Splash Check: [WARN]
  B  1 card(s), max CMC 1  sources 2/3  [WARN]
  WARN  B  actual 2 < required 3
```

## RESTRICTIONS COMPLIANCE
```
Commons: max 2 copies each .......................... PASS
Uncommons: max 2 copies each ........................ PASS
Rares/Mythics: max 1 copy each ...................... PASS
Max 5 rares/mythics total (main+SB) ................. PASS
  -> Dark Depths (M), Exploration (R), Vampiric Tutor (M),
     Birds of Paradise (R), Sylvan Library (M)  [exactly 5]
```