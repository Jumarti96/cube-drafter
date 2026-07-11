---
deck_name: "ur-high-tide-control-combo"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-07-10T03:54:28Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
10x Island
 4x Mountain
 1x Molten Tributary       UR dual, Island-typed (triggers High Tide), enters untapped
```

### CREATURES (6)
```
CMC  Card                Qty   Color  Role                              Rar
  2  Cloud of Faeries      x2    U      Free flier, untaps 2 lands on ETB   C
  3  Man-o'-War             x2    U      Tempo bounce / defensive answer      C
  5  Peregrine Drake       x2    U      Free flier, untaps 5 lands on ETB   C
```

### INSTANTS & SORCERIES (18)
```
CMC  Card                Qty   Color  Role                              Rar
  1  High Tide             x1    U      Core mana-doubling engine           U
  1  Mystical Tutor         x1    U      Tutors any instant/sorcery to top   R
  1  Obsessive Search       x1    U      1-mana cantrip                      C
  2  Grapeshot              x1    R      Storm kill spell                    C
  2  Last Chance            x1    R      Extra-turn finisher                 M
  2  Snap                   x1    U      Free bounce + untap 2 lands         C
  2  Impulse                x2    U      Digs for combo pieces               C
  2  Counterspell           x2    U      Protects the combo turn             C
  3  Frantic Search         x1    U      Free loot + untap 3 lands           C
  4  Empty the Warrens      x1    R      Storm token finisher                C
  4  Turnabout              x1    U      Mass untap/mana engine              U
  4  Deep Analysis          x1    U      Card advantage w/ flashback         C
  4  Fire // Ice            x2    RU     Flexible removal / tempo+draw       U
  3  Stroke of Genius       x1    U      X-cost card draw payoff             R
  5  Force of Will          x1    U      Free counterspell, protects turn    M
```

### OTHER SPELLS (1)
```
CMC  Card                Qty   Color  Role                              Rar
  2  Helm of Awakening      x1    C      Discounts the whole combo turn      R
```

## SIDEBOARD (10)
```
Card                Qty   Color  Role / When to board in           Rar
Tormod's Crypt        x1    C      vs Reanimator/Flashback graveyard decks   U
Damping Sphere        x1    C      vs opposing storm/ritual mirrors -- see caveat below   U
Icy Manipulator       x1    C      vs aggro/big creatures, buys time     U
Circular Logic        x1    U      vs control/attrition, scales w/ GY    U
Fact or Fiction       x1    U      vs control, card-advantage upgrade    U
Chain Lightning       x1    R      vs aggro, cheap reach                 C
Solar Blast           x1    R      vs aggro/creatures, cycles when dead  C
Spark Spray           x1    R      vs aggro, cheap early interaction     C
Wall of Junk          x1    C      vs aggro, reusable chump blocker      U
Ovinize               x1    U      vs midrange/big creatures             C
```

## ANALYSIS

**The kill lines.** Two distinct finishers exist because this pool has no
"win on its own" storm payoff (no Tendrils of Agony analog):
1. Grapeshot for reach/direct damage, scaling with storm count.
2. Empty the Warrens into Last Chance -- the tokens summoning-sick this
   turn are NOT sick on the bonus turn Last Chance grants (no
   opposing turn intervenes), so this is a legal, reliable attack
   for lethal even without a huge Grapeshot storm count. This line
   is more consistent than raw Grapeshot damage.

**Storm count math.** Only three 1-mana spells exist to pad storm
cheaply pre-Grapeshot (High Tide, Mystical Tutor, Obsessive Search).
There is no fast mana/ritual in UR anywhere in this pool -- the
untap suite (Snap/Frantic Search/Cloud of Faeries/Peregrine Drake/
Turnabout) IS the acceleration, each net-free or net-positive on
mana once High Tide is active. Expect the realistic kill turn to
lean on Empty the Warrens + Last Chance rather than a 15+ storm
Grapeshot, especially against any interaction.

**Known fragile points (flagged during the self-grill, kept anyway):**
- Snap requires a legal creature target -- it is uncastable on a
  fully empty board. Usually fine once Cloud of Faeries/Peregrine
  Drake/Man-o'-War are down, or against any opposing creature.
- Helm of Awakening discounts spells for BOTH players -- it speeds
  up the combo turn but also cheapens the opponent's counterspells/
  removal used to answer it. Net positive since the pilot casts far
  more spells per turn, but not a one-sided effect.
- Damping Sphere (sideboard) caps land production at 1 mana per tap
  and taxes multi-spell turns -- this hurts the pilot's OWN
  High-Tide-doubled Islands and storm turn just as much as an
  opponent's. Only board it in when planning to abandon the combo
  for a grindy counter-magic plan that game, not alongside the
  normal kill line.

**Rare/mythic budget.** Exactly 5 across the full 50 cards (Stroke
of Genius, Last Chance, Helm of Awakening, Mystical Tutor, Force of
Will) -- zero slack left; the sideboard is entirely common/uncommon
by necessity.

**Cards considered but excluded:**

| Card | Rarity | Reason excluded |
|---|---|---|
| Lotus Blossom | Rare | Lost the R/M budget fight -- too slow (builds counters over turns) for a turbo plan next to Helm/Tutor/Force/Stroke/Last Chance |
| Overmaster | Rare | Solid protection+cantrip, but Force of Will already covers protection; cut for budget |
| Time Stretch | Mythic | 10 mana is very hard to reach even with High Tide; Last Chance does the "extra turn" job for 2 mana instead |
| Storm Entity | Uncommon | Cut in the self-grill -- has no Storm keyword itself, doesn't advance the mana engine, answerable by any blocker/removal |
| Coal Stoker | Common | Cut in the self-grill -- nets a mana loss (spend 4, get RRR back) and produces red the deck barely needs |
| Mind Stone | Common | Cut in the self-grill -- colorless-only, doesn't feed High Tide; replaced by Impulse which digs for actual pieces |
| Millikin | Uncommon | Same issue as Mind Stone (colorless ramp, no Island synergy), plus unnecessary self-mill |
| Elvish Spirit Guide | Uncommon | Off-color (green) -- the pool copy only produces G, which this deck has no use for |
| Jester's Cap | Rare | Interesting sideboard tech vs. combo mirrors but no room in the R/M budget |
| Mystic Remora / Grim Lavamancer | Rare | Fine grindy value cards, but off-plan for a turbo combo shell and no R/M budget left |
| Confiscate / Floodgate | Uncommon | Considered for sideboard control tools; too slow/narrow next to the 10 slots chosen |

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.8   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  19.4%  prod  33.3%  gap -13.9pp  [OK]
  U  demand  80.6%  prod  73.3%  gap  +7.3pp  [OK]

Splash: none.
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: all <=2 copies
[PASS] Rares/mythics: all <=1 copy
[PASS] Total rares/mythics (main + sideboard): 5 / 5 max
[PASS] All 34 unique cards verified present in cube pool by exact name
[PASS] All color identities within UR
```
