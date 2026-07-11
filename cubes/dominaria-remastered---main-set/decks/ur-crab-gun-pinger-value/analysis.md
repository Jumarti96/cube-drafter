---
deck_name: "ur-crab-gun-pinger-value"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-10T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
12x Island
 3x Mountain
 1x Molten Tributary    UR dual, enters tapped
 1x Sulfur Falls        UR dual, untapped w/ Island or Mountain
```

### CREATURES (7)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Grim Lavamancer         x1    R      Redundant repeatable pinger        R
  3  Horseshoe Crab          x2    U      Combo enabler (self-untap)         C
  3  Man-o'-War               x2    U      Tempo bounce on a body             C
  4  Flametongue Kavu        x2    R      Removal on a body                  U
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Chain Lightning         x2    R      Efficient burn / reach             C
  2  Counterspell            x2    U      Hard countermagic                  C
  2  Impulse                 x1    U      Card selection                     C
  2  Snap                    x2    U      Free bounce + land untap           C
  4  Deep Analysis           x1    U      Draw 2 + flashback                 C
  4  Fact or Fiction         x1    U      Card advantage                     U
  4  Fire // Ice             x1    UR     Flexible burn or tempo cantrip     U
  5  Force of Will           x1    U      Free countermagic                  M
```

### OTHER SPELLS (5)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Mystic Remora           x1    U      Early card draw engine             R
  2  Hermetic Study          x1    U      Combo payoff — damage engine       C
  2  Mind Stone              x1    C      Ramp toward the 4-drop cluster     C
  3  Quicksilver Dagger      x2    UR     Combo payoff — damage + draw       U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Tormod's Crypt          x1    C      Graveyard/Reanimator matchups          U
Spark Spray             x1    R      Cheap reach or cycle for value         C
Damping Sphere          x1    C      Anti-storm/ritual, taxes fetches       U
Wall of Junk            x1    C      Repeatable blocker vs aggro            U
Jester's Cap            x1    C      Anti-combo library disruption          R
Solar Blast             x1    R      Flexible burn/removal or cycle         C
Turnabout               x1    U      Mass tap-down vs go-wide boards        U
Confiscate              x1    U      Steal a bomb of any permanent type     U
Slice and Dice          x2    R      Board wipe vs go-wide aggro/tokens     U
```

## ANALYSIS

**Two engines, not one.** Horseshoe Crab pairs with Hermetic Study (any target) and Quicksilver Dagger (face + draw a card) — since both are single-target Auras, at most one is ever active on a given Crab at once, so running both isn't additive redundancy so much as insurance against one copy getting removed or stuck in hand. The self-grill flagged the original 2/2 split (2x Hermetic Study, 2x Quicksilver Dagger) as over-built relative to what the combo actually needs; this build trims to 1x Hermetic Study (freeing a slot for Mind Stone) while keeping Quicksilver Dagger at 2 copies, since Dagger is the card that actually needs the R splash to matter and losing a copy of it would make the R investment harder to justify.

**The R half is a real second color, not a splash.** Chain Lightning, Flametongue Kavu, and Grim Lavamancer don't touch the Crab engine at all — they're a standalone burn/removal suite that gives the deck a way to close games and answer threats independent of whether the combo ever comes together. This is deliberate: per the self-grill, the Crab+Aura package is a bonus, not the plan, so the deck needs a real second gameplan and gets one in the R burn suite. 5 of 17 lands produce R (29.4%) against 8 R pips of demand (28.6%) — tight but matched.

**Mind Stone's real job.** It doesn't produce colored mana, so it can't fund a Horseshoe Crab activation directly — its job is smoothing the path to the 4-CMC cluster (Flametongue Kavu, Fire // Ice, Fact or Fiction) and cantripping late via its sacrifice ability, which is exactly the gap identified when the deck ran 2x Hermetic Study instead.

**Sideboard revision.** The original 10 leaned hard into burn redundancy (2x Slice and Dice, 2x Solar Blast, 2x Spark Spray) that overlapped the maindeck's own R suite. This version trims Solar Blast and Spark Spray to 1 copy each and adds Confiscate (steal any bomb — creature, artifact, or enchantment) and Turnabout (mass tap-down vs. go-wide boards), giving the deck real answers to Tribal/Enchantress/Artifacts threats instead of a sixth burn spell that does the same thing as the fifth.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- *Denizen of the Deep*, *Vexing Sphinx*, *Stroke of Genius*, *Triskelion*, *Cryptic Gateway*, *Urza, Lord High Artificer* — all fine cards in isolation, but the deck's five rare/mythic slots (Sulfur Falls, Grim Lavamancer, Mystic Remora, Force of Will, Jester's Cap) were already spoken for by higher-priority effects, with Sulfur Falls in particular competing directly for that budget as a land rather than a spell.
- *Sulfuric Vortex* — tempting as a second win condition (2 damage to each player per upkeep, shuts off lifegain) but risky in a deck without a life-gain buffer of its own, and would have meant cutting Grim Lavamancer or Mystic Remora.

**Uncommons a tier below the chosen includes:**
- *Gempalm Incinerator* — its removal mode scales with Goblins on the battlefield, which this deck has zero of; only useful as a cycling spell here, outclassed by Chain Lightning at the same slot.
- A 2nd copy of *Icy Manipulator* was considered as another creature-independent tap-down piece but didn't make the cut over the burn suite, which better fits this deck's "pinger/value" identity than a third tap-down effect.

**Sideboard-consideration cards not included:**
- *Overmaster* — a cantrip that protects a spell from countermagic; too narrow and not worth a rare-adjacent slot in an uncommon-only remaining budget.
- A 2nd copy of *Damping Sphere* isn't legal (would exceed the format's card pool, single card counted once per the working pool) — considered but Tormod's Crypt covers the more common graveyard matchup better.

## MANA AUDIT: PASS
```
Land count: 17 (recommended 16) — PASS
Ramp count: 0
Average CMC: 2.65
Pip demand: U 20, R 8
Land color production: U 14, R 5
Color balance: U pip 71.4% vs prod 82.4% (gap -11.0) — OK
              R pip 28.6% vs prod 29.4% (gap -0.8) — OK
Splash colors: none (R treated as full core color)
Overall: PASS
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons at or under 2 copies each: PASS
Rares/mythics at exactly 1 copy each: PASS
Max 5 rares/mythics total (main+sideboard): PASS — exactly 5 used (Sulfur Falls,
  Grim Lavamancer, Mystic Remora, Force of Will, Jester's Cap).
```
