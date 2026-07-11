---
deck_name: "ur-hard-storm"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-10T03:55:08Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (26 spells + 14 lands = 40)

### LANDS (14)
```
10x Island
 2x Mountain
 2x Molten Tributary       UR dual, enters tapped, Island-typed (triggers High Tide)
```

### CREATURES (5)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Storm Entity            x1    R      Backup finisher, scales w/ storm  U
  2  Cloud of Faeries        x2    U      Free-untap enabler (2 lands)      C
  5  Peregrine Drake         x2    U      Free-untap enabler (5 lands)      C
```

### INSTANTS & SORCERIES (20)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Overmaster              x1    R      Protects key spell + cantrip      R
  1  High Tide               x2    U      Core mana doubler                 U
  1  Obsessive Search        x2    U      1-mana cantrip/storm fodder       C
  1  Mystical Tutor          x1    U      Tutors combo piece to top         R
  1  Spark Spray             x1    R      Cheap reach/cantrip (cycling)     C
  2  Grapeshot               x2    R      Primary storm kill spell          C
  2  Counterspell            x2    U      Hard-counter protection           C
  2  Snap                    x2    U      Cheap bounce + untap 2 lands      C
  3  Stroke of Genius        x1    U      Card-draw/setup engine            R
  3  Frantic Search          x2    U      Free looter + untap 3 lands       C
  4  Empty the Warrens       x1    R      Backup storm payoff (tokens)      C
  4  Turnabout               x2    U      Mana/tempo untap engine           U
  5  Force of Will           x1    U      Free protection (alt cost)        M
```

### OTHER SPELLS (1)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Helm of Awakening       x1    C      Global cost reduction             R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Tormod's Crypt           x1    C      Graveyard hate                        U
Circular Logic           x2    U      Upgraded counter vs control           U
Solar Blast              x2    R      Reach/removal vs aggro                C
Icy Manipulator          x1    C      Repeatable tapper vs aggro            U
Man-o'-War               x1    U      Tempo bounce vs creature decks        C
Slice and Dice           x1    R      Sweeper vs token/aggro swarms         U
Ovinize                  x1    U      Cheap removal vs must-answer threats  C
Deep Analysis            x1    U      Card advantage vs control/attrition   C
```

## ANALYSIS

**The mana math:** with High Tide active, the 12 Island-typed sources (10 Island + 2 Molten Tributary) can produce up to 24 U from lands alone before a single untap effect resolves. Turnabout and Peregrine Drake then re-tap that same land base, so a clean draw can chain Obsessive Search into High Tide into Cloud of Faeries/Peregrine Drake into Turnabout into Grapeshot for lethal well before the deck runs out of gas. Helm of Awakening compounds this by shaving 1 off every spell in the chain (including the opponent's, which is a real, accepted symmetry cost).

**Rarity budget:** exactly 5 rares/mythics are used, all mainboard, 0 in the sideboard: Stroke of Genius, Force of Will, Overmaster, Mystical Tutor, Helm of Awakening. This was a deliberate cut from a much longer list of rare/mythic candidates (see below) to fit the 5-card cap while keeping the pieces that most directly enable or protect the combo turn.

**Known risk — Snap's dead-card window:** Snap requires a creature target. In games where neither player has a creature down yet, it has no legal cast. Turnabout doesn't share this weakness (it targets a player, not a permanent), so it's the more reliable of the two untap spells early; Snap is best held until either your own Cloud of Faeries/Peregrine Drake/Storm Entity or an opposing creature is in play.

**Known risk — Helm of Awakening cuts both ways:** the discount applies to the opponent's spells too, including their own counterspells and removal. It's still a net positive across a multi-spell storm turn, but it means the deck's protection package (Force of Will, Overmaster, Counterspell) is doing more work than Helm's flavor text implies.

**Empty the Warrens vs. Storm Entity as backups:** neither is a true same-turn substitute for Grapeshot. Empty the Warrens' tokens have no haste, so that plan wins on the following turn if Grapeshot is answered; Storm Entity hastes in immediately but still needs to connect in combat. Treat both as insurance, not a clean Plan B.

### Cards Considered but Excluded

- **Rares/mythics cut for the 5-card budget:** Lotus Blossom (rare) — too slow, needs an upkeep trigger to accrue counters before it does anything, a poor fit for a turn that wants immediate mana. Last Chance (mythic) — you lose the game at the end of the bonus turn, too narrow/high-variance for a 40-card single-deck field. Time Stretch (mythic) — CMC 10 is very unlikely to be reachable in practice and doesn't win by itself. Sulfur Falls (rare UR dual) — lost out to Stroke of Genius for the last rare slot; Molten Tributary covers the fixing need at common rarity instead. Gamble and Grim Lavamancer (both rare) were considered for the 5th slot but cut in favor of Stroke of Genius's higher ceiling as both a dig spell and an alternate win condition.
- **Off-color:** Elvish Spirit Guide was in the original archetype suggestion but produces green mana, which this UR deck has no use for — cut entirely rather than splashed.
- **Uncommons/commons a tier below the final cut:** Coal Stoker (net -1 mana after casting it — a real ritual should be neutral or positive), Fire // Ice (a fine flex card, but Overmaster/Counterspell covered the protection slot more cleanly), Mind Stone (cut during the self-grill in favor of Spark Spray — a cheaper, more storm-count-relevant cantrip in a deck whose whole plan is "untap effects pay for themselves").
- **Sideboard-consideration cards not included:** Damping Sphere was cut during the self-grill — its tax and mana-restriction effects are symmetric and would cripple this deck's own High Tide turn just as much as an opponent's, making it a trap include even against a mirror. Wall of Junk and Impulse were considered for grindy matchups but didn't make the final 10 sideboard slots.

## MANA AUDIT: WARN
```
── Mana Audit: WARN ────────────────────────────────────────
Land Count:  14 / 16 recommended  [WARN]
Avg CMC:     2.42   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  20.0%  prod  28.6%  gap  -8.6pp  [OK]
  U  demand  80.0%  prod  85.7%  gap  -5.7pp  [OK]
```

Note: the generic land-count formula doesn't detect this deck's untap-effect suite as "ramp" (it looks for a literal "ramp" tag that this cube's tagger doesn't use), so it recommends more lands than a deck this enabler-dense actually needs. 14 lands was chosen deliberately over the generic 16 to preserve spell density; color balance passes cleanly.

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons at most 2 copies each
[PASS] Rares/mythics at most 1 copy each
[PASS] Max 5 rares/mythics total across mainboard + sideboard
       (Stroke of Genius, Force of Will, Overmaster, Mystical Tutor,
        Helm of Awakening = 5, all mainboard, 0 in sideboard)
```
