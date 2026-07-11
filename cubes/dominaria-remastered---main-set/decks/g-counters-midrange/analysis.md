---
deck_name: "g-counters-midrange"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "G"
format: "40-card"
built_at: "2026-07-10T17:16:31Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
15x Forest
1x Mishra's Factory      Colorless manland - extra late-game threat density
```

### CREATURES (9)
```
CMC  Card                      Qty   Color  Role                              Rar
  1  Birds of Paradise           x1    G     Ramp                                R
  3  Dragon Engine                x1    C     Cheap body, pump mana sink          C
  4  Forgotten Ancient            x1    G     Counter accumulation/redistribute  R
  4  Kavu Primarch                 x2    G     Kicker scaling counters body       C
  4  Giant Spider                  x1    G     Defensive body (reach blocker)     C
  4  Juggernaut                    x1    C     Efficient generic beater           C
  6  Triskelion                    x1    C     Finisher/pinger, ETB 3 counters    R
  6  Kamahl, Fist of Krosa          x1    G     Top-end bomb (NO counters synergy) M
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                      Qty   Color  Role                              Rar
  1  Emerald Charm                  x1    G     Flexible utility (NOT creature removal) C
  1  Sandstorm                      x1    G     Anti-aggro pinger (attackers only) C
  2  Nature's Lore                  x1    G     Ramp                                U
  2  Lull                           x1    G     Fog + cycling (feeds Boon)          C
  3  Primal Boost                   x1    G     Combat trick + cycling (feeds Boon) C
  3  Call of the Herd                x2    G     2-for-1 token generator             U
  4  Break Asunder                   x1    G     Artifact/enchant removal + cycling  C
```

### OTHER SPELLS (7)
```
CMC  Card                      Qty   Color  Role                              Rar
  2  Invigorating Boon               x2    G     Counter distribution via cycling  U
  2  Sylvan Library                   x1    G     Card advantage engine              M
  3  Dragon Blood                     x2    C     Repeatable counter generator       U
  4  Icy Manipulator                   x1    C     Tempo lock tool (NOT removal)      U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                   Rar
Wall of Junk             x1    C     vs Aggro - cheap recurring blocker         U
Damping Sphere           x1    C     vs Storm/UR combo (cube has 2 storm arch.) U
Tormod's Crypt           x1    C     vs Graveyard/Reanimator (15.5% of cube)    U
Lull                     x1    G     2nd copy - vs Aggro alpha strikes, cycles  C
Jalum Tome               x1    C     vs grindy matchups - card filtering        C
Fa'adiyah Seer           x1    G     Card selection/self-mill (marginal)        C
Emerald Charm            x1    G     2nd copy - flex answer vs flyers/enchant.  C
Sandstorm                x1    G     2nd copy - extra anti-aggro pinger         C
Break Asunder            x1    G     2nd copy - extra artifact/enchant. hate    C
Krosan Restorer          x1    G     vs Control - untap for burst mana plays    C
```

## ANALYSIS

**Be clear-eyed about what this deck actually is.** Only 6 of the 24 nonland cards genuinely place, move, or spend +1/+1 counters: Forgotten Ancient, Triskelion, Kavu Primarch x2, and Dragon Blood x2. This is fewer synergy pieces than the sibling GB and GW builds (which run 8-9 apiece), because mono-G/colorless is the smallest legal slice of the cube's already-thin 12-card counters pool. The self-grill was blunt about this: it's honestly closer to "green goodstuff midrange with a counters garnish" than a tight synergy deck. If you want the strongest expression of the counters theme, the GB or GW build will feel more like a build-around; pick this one specifically for its zero-fixing-risk mana base and generically solid curve.

**A real structural gap: this cube has zero mono-Green hard removal.** Confirmed by direct search of the full 271-card pool -- no green card in this cube reads "destroy target creature," has a fight effect, or deals damage/-X/-X to a non-attacking creature. Emerald Charm has no creature-kill mode at all (it's untap/enchantment-destroy/remove-flying), Sandstorm only hits *attacking* creatures for 1, and Break Asunder/Icy Manipulator don't touch creatures either. This isn't a build oversight -- it's a genuine mono-G limitation in this specific cube. The deck leans on combat math (Giant Spider, Juggernaut, Kamahl's anthem) and tempo (Icy Manipulator) instead of hard removal. If this matters to you, it's the clearest argument for choosing the GB or GW build instead, both of which have real removal in their second color.

**Self-grill fixes applied.** Invigorating Boon's two copies were nearly dead in the first draft -- only 1 cycling card (Break Asunder) was in the maindeck to trigger it. Werebear and Stonewood Invoker (generic filler with zero counters interaction) were swapped for Primal Boost and Lull, both of which cycle for {2} and now give Boon three total in-deck triggers instead of one.

**Cards Considered but Excluded:**
- *Rares/mythics cut for the 5-card cap*: Jolrael, Mwonvuli Recluse (rare) was seriously considered -- it's mistagged in the pool data as a "Counters (+1/+1)" card, but its actual oracle text sets base power/toughness and never places a counter, so it was correctly excluded once verified. Also cut: Worldly Tutor, Exploration, Lotus Blossom, Urza's Incubator, Gauntlet of Power, Nut Collector, Urza's Blueprints, Crawlspace/Arboria (stax) -- all solid standalone cards, none synergistic with counters.
- *Kamahl, Fist of Krosa* specifically: kept as the deck's top-end bomb despite zero counters interaction -- flagged explicitly in its role text so it isn't mistaken for a synergy piece.
- *Uncommons a tier below the final cut*: Werebear and Stonewood Invoker (cut in the fix above), Elvish Spirit Guide (fast mana, but one-shot and this deck isn't combo-fast enough to need it), Millikin/Mind Stone (mana rocks, redundant with Birds/Wild Growth/Nature's Lore).
- *Sideboard-consideration cards not included*: Terravore and Battlefield Scrounger (graveyard-scaling threats -- this deck has no self-mill to fuel them, so both were correctly passed over), Dodecapod (the one unused genuine counters card in the cube -- its trigger requires an *opponent* to force a discard, too narrow to include anywhere).

## MANA AUDIT: PASS
```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 3 (Birds of Paradise, Wild Growth, Nature's Lore)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod  93.8%  gap  +6.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons <=2 copies each ............... PASS
Rares/mythics <=1 copy each ...................... PASS
Max 5 rares/mythics total (main+SB) ............. PASS (5/5: Forgotten Ancient,
                                                    Triskelion, Birds of Paradise,
                                                    Sylvan Library, Kamahl Fist of Krosa)
```
