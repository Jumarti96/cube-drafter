---
deck_name: "g-dark-depths-ramp-midrange"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "G"
format: "40-card"
built_at: "2026-07-10T17:15:21Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
14x Forest
1x Maze of Ith          Untaps an attacker and prevents its combat damage — the pool's only real answer to a must-kill threat
1x Dark Depths          Top-end insurance win-con: sac for Marit Lage (20/20 flying, indestructible)
```

### CREATURES (10)
```
CMC  Card                     Qty   Color  Role                                        Rar
  1  Birds of Paradise       x1   G      T1 ramp/fixing                              R
  2  Werebear                x2   G      Ramp; becomes a 4/4+ at threshold           C
  2  Krosan Restorer         x2   G      Untap engine, late-game ramp                C
  2  Fa'adiyah Seer          x1   G      Card selection/filtering                    C
  3  Terravore               x2   G      Graveyard-fueled scaling beater             U
  4  Kavu Primarch           x1   G      Scalable beater (kicker/convoke)            C
  4  Giant Spider            x1   G      Reach blocker vs. evasive threats           C
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                     Qty   Color  Role                                        Rar
  1  Crop Rotation           x2   G      Tutors Dark Depths (or any land)            U
  1  Emerald Charm           x1   G      Untap / enchantment removal / anti-fly      C
  2  Nature's Lore           x2   G      Ramp/fixing, fetches a Forest               U
  3  Call of the Herd        x2   G      Two bodies from one card (flashback)        U
```

### OTHER SPELLS (7)
```
CMC  Card                     Qty   Color  Role                                        Rar
  1  Wild Growth             x2   G      Ramp aura                                   C
  1  Exploration             x1   G      Extra land drop each turn                   R
  2  Mind Stone              x1   C      Ramp, cantrips late                         C
  2  Sylvan Library          x1   G      Card advantage engine                       M
  3  Squirrel Nest           x1   G      Repeatable token generator                  U
  4  Icy Manipulator         x1   C      Tempo/pseudo-removal                        U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                   Rar
Tormod's Crypt          x1     C      Graveyard hate                            U
Break Asunder           x2     G      Answers artifacts/enchantments, cycles    C
Sandstorm               x2     G      Anti-aggro                                C
Wall of Junk            x2     C      Defensive wall vs. aggro                  U
Giant Spider            x1     G      Extra anti-flying tech (2nd copy)         C
Damping Sphere          x1     C      Hoses opposing fast-mana/combo decks      U
Primal Boost            x1     G      Combat trick / cycler                     C
```

## ANALYSIS

**Green has no removal in this cube -- verified twice.** Both grill agents independently scanned the full 462-entry pool for any green card with destroy/fight/-X/-X/damage-to-creature text and found zero. This shapes the whole build: Giant Spider and Maze of Ith aren't "nice to have," they're the only two answers to an evasive or must-kill threat that exist in the color at all.

**Why Maze of Ith over Forgotten Ancient:** the original build spent its 5th rare slot on Forgotten Ancient (grows off any spell cast). The Challenger correctly flagged this as weak specifically because it's dead against creature-heavy aggro -- exactly the matchup this deck is already worst against, given the total lack of removal. Maze of Ith directly patches that hole, costs a land slot rather than a spell slot, and is rarity-neutral (still 1 of 5 rares). Trade-off: it doesn't produce mana, so land count nudges to 16 and G production dips to 87.5% -- both land in WARN territory, not FAIL, and are worth it for a real defensive answer.

**Threshold payoffs:** Werebear (+3/+3) and Krosan Restorer (untap 3 lands) both want 7+ cards in the graveyard. Crop Rotation's sacrifice cost and Fa'adiyah Seer's discard mode are the only enablers -- thin, but the deck doesn't need threshold to function, it's upside on cards that are fine on rate anyway.

**Cards Considered but Excluded**

- *Rares/mythics cut for the 5-card cap:* Forgotten Ancient (swapped out for Maze of Ith per the Phase 9 grill -- see above); Jolrael, Mwonvuli Recluse (a strong alternative rare -- synergizes with the deck's draw package via Sylvan Library/Mind Stone/Fa'adiyah Seer, but the budget was full); Kamahl, Fist of Krosa and Triskelion (top-end finishers, no room); Vampiric Tutor (dropped intentionally to keep this build splash-free -- see the Turbo Combo build instead).
- *Uncommons a tier below the cut:* Millikin (ramp + self-mill, redundant with Mind Stone); Gamekeeper and Battlefield Scrounger (value-on-death/threshold creatures, weaker than Terravore/Kavu Primarch at the same slot); Deadwood Treefolk (vanishing clock, too fragile).
- *Sideboard-consideration cards not included:* Elvish Spirit Guide (free mana vs. control, marginal in a deck that isn't racing); Jalum Tome (too slow); Invigorating Boon (needs a critical mass of cycling this deck doesn't run).

## MANA AUDIT: WARN
```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  16 / 14 recommended  [WARN]
Avg CMC:     2.25   Ramp cards: 10

Color Balance (core):  [WARN]
  G  demand 100.0%  prod  87.5%  gap +12.5pp  [WARN]

Flags:
  WARN  G  gap +12.5pp
```

## RESTRICTIONS COMPLIANCE
```
Commons: max 2 copies each .......................... PASS
Uncommons: max 2 copies each ........................ PASS
Rares/Mythics: max 1 copy each ...................... PASS
Max 5 rares/mythics total (main+SB) ................. PASS
  -> Dark Depths (M), Exploration (R), Birds of Paradise (R),
     Maze of Ith (R), Sylvan Library (M)  [exactly 5]
```