---
deck_name: "r-aggro-goblins"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "R"
format: "40-card"
built_at: "2026-07-09T21:25:49Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  15x Mountain
   1x Mishra's Factory     Colorless manland; resilient extra threat
```

### CREATURES (19)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Grim Lavamancer         x1    R      Repeatable reach engine    R
  1  Skirk Prospector        x2    R      Sac outlet / emergency ramp C
  2  Mogg War Marshal        x2    R      Token engine (ETB+dies)    C
  2  Subterranean Scout      x2    R      Evasion enabler            C
  3  Gempalm Incinerator     x2    R      Cycling scaling removal    U
  3  Goblin Matron           x2    R      Goblin tutor               C
  3  Goblin Medics           x1    R      Passive reach              C
  3  Pashalik Mons           x1    R      Keystone payoff (burn)     R
  4  Flametongue Kavu        x2    R      ETB removal on a body      U
  4  Juggernaut              x2    C      Must-attack beater         C
  4  Ridgetop Raptor         x1    R      Double strike finisher     C
  5  Siege-Gang Commander    x1    R      Keystone payoff (tokens)   R
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Chain Lightning         x2    R      Efficient burn/removal     C
  4  Empty the Warrens       x1    R      Token payoff / sac fodder  C
  6  Fireblast               x1    R      Free alpha-strike burn     U
```

### OTHER SPELLS (1)
```
CMC  Card                    Qty   Color  Role                       Rar
  3  Sulfuric Vortex         x1    R      Reach + anti-lifegain      R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in           Rar
Tormod's Crypt          x2    C      Graveyard hate vs GY strategies    U
Damping Sphere          x1    C      Hate vs ramp/Storm decks           U
Crawlspace              x1    C      Stax vs faster aggro racing us     R
Icy Manipulator         x2    C      Tap down bombs/blockers            U
Solar Blast             x2    R      Flexible extra burn/reach          C
Fireblast               x1    R      Extra reach vs high-life decks     U
Slice and Dice          x1    R      Sweeper vs go-wide mirrors         U
```

## ANALYSIS

**Goblin tutor correction:** Goblin Matron can only fetch cards with the Goblin creature type -- Skirk Prospector, Mogg War Marshal, Subterranean Scout, Gempalm Incinerator, Goblin Medics, Pashalik Mons, Siege-Gang Commander, or the second Matron. It cannot fetch Sulfuric Vortex (an Enchantment, not a Goblin card) -- plan Matron activations accordingly.

**Token math:** across a full resolution, Mogg War Marshal (ETB + dies), Siege-Gang Commander (3 on ETB), Empty the Warrens (2), and Pashalik Mons' repeatable {3}{R} ability can put 9+ disposable Goblin bodies on the board over a game -- all of which are simultaneously Skirk Prospector mana, Pashalik Mons damage triggers, and Siege-Gang/Pashalik sac fuel.

**Rarity budget is maxed:** exactly 5 of 5 allowed rare/mythic copies are in use (Grim Lavamancer, Pashalik Mons, Sulfuric Vortex, Siege-Gang Commander mainboard; Crawlspace sideboard). Any future rare upgrade (e.g. Triskelion) requires cutting one of these five first.

**Curve reality check (from self-grill):** only 9/24 nonland cards (37.5%) sit at 1-2 CMC; 13/24 are 3-4 CMC. This is a heavier curve than a textbook low-curve burn deck -- a fair consequence of the cube having only 10 true Goblin creatures, forcing generic 4-drops (Juggernaut, Flametongue Kavu, Ridgetop Raptor) to round out the list. The 16 lands (40% of N, above the nominal 30-35% Aggro reference range) is the correct call for this actual curve, not a deviation needing correction; functionally this plays more like a red tempo/burn-tokens midrange deck than a pure low-curve aggro deck, and should be sequenced/mulliganed accordingly.

**Fireblast's alt-cost needs actual Mountains:** sacrificing "two Mountains" for the free cast specifically checks the basic land type -- Mishra's Factory doesn't count. With 15 Mountains in the base this is rarely a constraint, but hold it for a genuine lethal turn rather than early plays.

**Sulfuric Vortex is a two-way clock:** it also shuts off the cube's lifegain answers (several exist in the wider pool per the earlier environment scan), so once it resolves the game is on a hard countdown for both players -- sequence it when you're ahead on damage race, not behind.

### Cards Considered but Excluded

**Off-color, dropped with the black splash:** Dralnu's Crusade, Deadapult, Festering Goblin, Goblin Turncoat -- all require {B} and were cut entirely when the mono-R path was chosen over the R/B aristocrats line.

**Rares/mythics cut by the 5-card cap:**
- Cryptic Gateway (rare) -- cheats Goblins into play by tapping two creatures sharing a type, but does nothing the turn it's cast and only has one real expensive target (Siege-Gang, a single copy) in this build; better suited to a toolbox/ramp Goblins shell.
- Urza's Incubator (mythic) -- cuts Goblin costs by {2}, but this curve is already cheap (goblins already cost 1-3), so the effect is marginal and it's a do-nothing play on the turn it lands.
- Triskelion (rare) -- strong removal/finisher engine, cut for CMC (6) and rarity budget; best upgrade candidate if a rare slot opens up.
- Shivan Dragon (rare) -- efficient flyer, but a 6-mana top-end doesn't fit this curve.
- Gamble (rare) -- real card selection, but the random-discard downside is too swingy for a 24-spell shell with no redundancy to spare.
- Also considered and passed on: Worldgorger Dragon, Sneak Attack, Gauntlet of Power, Helm of Awakening, Lotus Blossom, Urza's Blueprints, Umbilicus, Jester's Cap, Last Chance -- all either off-theme or too slow for this pipeline.

**Uncommons a tier below the chosen includes:**
- Dragon Whelp, Dodecapod -- solid 4-drop bodies that lost the slot to Flametongue Kavu / Juggernaut / Ridgetop Raptor.
- Valduk, Keeper of the Flame; Thran Golem -- both want an Auras/Equipment subtheme this deck doesn't run.
- Storm Entity -- needs spell density this list doesn't have.
- Wall of Junk -- defensive stats don't fit an attacking plan.

**Sideboard-consideration cards not included:**
- Spark Spray (common) -- cheap instant-speed burn/cantrip; a reasonable 25th-spell swap-in over Ridgetop Raptor or Empty the Warrens if the curve needs to come down further.
- Lightning Rift, Grapeshot -- payoffs that need more cycling/spell density than this list runs; not worth a slot without that support.
- Jester's Cap -- strong meta-tech vs a known opposing decklist, but would have cost a precious rare slot already spent elsewhere.
- Dragon Blood, Dragon Engine, Ember Beast, Avarax, Macetail Hystrodon, Suq'Ata Lancer, Millikin, Coal Stoker, Ornithopter -- marginal filler, none clearly better than a current include.

## MANA AUDIT: PASS
```
Mana Audit: PASS
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.88   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand 100.0%  prod  93.8%  gap  +6.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: all at or under 2 copies each (verified per-card)
[PASS] Rares/mythics: all at 1 copy each (Grim Lavamancer, Pashalik Mons,
       Sulfuric Vortex, Siege-Gang Commander, Crawlspace)
[PASS] Max 5 rares/mythics total across mainboard + sideboard: exactly 5/5
[PASS] All 24 non-basic card names verified against working pool cache by
       exact name (Challenger agent independently re-confirmed)
```
