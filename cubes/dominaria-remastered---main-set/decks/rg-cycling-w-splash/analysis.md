---
deck_name: "rg-cycling-w-splash"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "RGW"
format: "40-card"
built_at: "2026-07-10T00:00:36Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  4x Mountain
  4x Forest
  2x Smoldering Crater      R cycling land, enters tapped, Cycling {2}
  2x Slippery Karst         G cycling land, enters tapped, Cycling {2}
  1x Drifting Meadow        W cycling land (splash), enters tapped, Cycling {2}
  1x Wooded Ridgeline       GR dual, enters tapped
  1x Radiant Grove          GW dual, enters tapped
  1x Sacred Peaks           RW dual, enters tapped
```

### CREATURES (13)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Wild Dogs               x1    G      1-mana 3/3 (control-swap risk*)    C
  1  Birds of Paradise       x1    G      Mana fixing/ramp for W splash      R
  1  Grim Lavamancer         x1    R      Exiles GY cyclers for 2 dmg        R
  2  Jolrael, Mwonvuli Recluse x1  G      2nd cycle-draw -> 2/2 Cat token    R
  2  Radha, Heir to Keld     x2    GR     Curve creature, G/RR ramp          U
  2  Werebear                x2    G      Mana dork -> Threshold 5/5         C
  2  Mogg War Marshal        x1    R      2 bodies for Invigorating Boon     C
  3  Gempalm Incinerator     x2    R      Cycler; X dmg per Goblin           U
  4  Flametongue Kavu        x1    R      ETB 4 dmg to a creature            U
  7  Macetail Hystrodon      x1    R      Cycler; hasty first-strike top-end C
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Spark Spray             x1    R      Cheapest cycler; 1 dmg burn        C
  1  Swords to Plowshares    x1    W      Splash premium removal             U
  3  Primal Boost            x2    G      Cycler; +4/+4 combat trick         C
  3  Radiant's Judgment      x1    W      Splash removal cycler              C
  4  Solar Blast             x1    R      Cycler; 3 dmg burn                 C
  4  Decimate                x1    GR     4-for-1 removal                    R
```

### OTHER SPELLS (4)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Lightning Rift          x2    R      Keystone: cycle -> 2 dmg           U
  2  Invigorating Boon       x2    G      Keystone: cycle -> +1/+1 counter   U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Tormod's Crypt          x2    C      Vs. graveyard/reanimator/Threshold   U
Slice and Dice          x1    R      Vs. go-wide tokens (cycler sweeper)  U
Break Asunder           x1    G      Vs. artifacts/enchantments (cycler)  C
Wax // Wane             x1    GW     Flex: combat trick or ench. removal  U
Icy Manipulator         x1    C      Vs. single big/evasive threats       U
Damping Sphere          x1    C      Vs. fast mana/storm/ritual decks     U
Lull                    x1    G      Vs. alpha-strike aggro (cycler)      C
Improvised Armor        x1    W      Vs. aggro, defensive body (cycler)   U
Renewed Faith           x1    W      Vs. burn, lifegain (cycler)          C
```

## ANALYSIS

Every cycler in this deck is a two-mode card: draw a card now, or hold it as a threat/trick for later — and either way it triggers Lightning Rift (2 damage) and Invigorating Boon (+1/+1 counter) on the way past. Jolrael turns a second cycle-draw each turn into a 2/2 Cat, Grim Lavamancer turns the graveyard those discards pile into repeatable burn, and Werebear turns the same graveyard into a 5/5 mana dork. Birds of Paradise and three W duals carry a light two-spell White splash (Swords to Plowshares, Radiant's Judgment) without diluting the RG core.

**Macro-Archetype: Midrange. Projected Avg MV: 2.46.**

**Slot allocation.** Lands: 16 (40% of N=40) — Midrange baseline. Land modifiers: cantrips −0 (cycling is a discard-cost ability, not the Opt/Preordain-style cantrip the formula targets, so it doesn't apply); mana dorks −1 (Birds of Paradise, Radha x2, Werebear x2 = 5 sources at MV≤2, worth roughly one land per two dorks); MDFCs −0 (none in this pool). That nets to a suggested 15, but the deck keeps 16 for two reasons: the independent mana_audit tool's own recommendation (blind to the dork count) also lands on 16 given the avg CMC, and the extra land protects the W splash's 3 dedicated sources from getting crowded out. Of the 24 spells: Interaction ~29% (Decimate, Swords to Plowshares, Radiant's Judgment, Flametongue Kavu, Solar Blast, Spark Spray, Grim Lavamancer's repeatable ability); Threats/Payoffs ~46% (Jolrael, Gempalm Incinerator, Radha, Werebear, Wild Dogs, Macetail Hystrodon, Mogg War Marshal, Lightning Rift, Invigorating Boon, Primal Boost); the rest (Birds of Paradise) is pure fixing. Per the Midrange rule, there's no separate Engine budget — nearly every card here does double duty as both a cycler (engine fuel) and a threat or answer.

**Mana base.** 13 R pips / 12 G pips across core cards (52%/48%) against 8 R sources / 8 G sources (50%/50%) — both colors read "OK" in the audit, gap ≤2pp each. The 2-spell W splash (Swords to Plowshares, Radiant's Judgment) gets 3 dedicated sources (Drifting Meadow, Radiant Grove, Sacred Peaks) — both splash cards also cycle for value if the W doesn't show up, so the splash is never a genuinely dead draw. `ramp_count: 0` in the raw audit output undercounts the deck's actual acceleration — the tool checks for a literal "ramp" tag rather than "Mana Dork"/"Mana Ramp", so Birds of Paradise/Radha/Werebear don't register even though they functionally justify running 16 (not 17) lands at this curve.

**Cycling density.** 13 of the 40 cards can cycle: 5 lands (Smoldering Crater x2, Slippery Karst x2, Drifting Meadow) + 8 spells (Gempalm Incinerator x2, Macetail Hystrodon, Solar Blast, Spark Spray, Primal Boost x2, Radiant's Judgment). With both Lightning Rift copies and both Invigorating Boon copies live, every cycle is worth up to 4 damage/counters split across the two enchantments — in practice usually 1 of each unless you've drawn a duplicate. Grim Lavamancer and Werebear's Threshold both key off the same graveyard these 13 cards fill via their discard cost: after ~7 cycles (very achievable given the density), Werebear is a 5/5 for {G} and Grim Lavamancer has a standing pool of fuel for repeatable 2 damage.

**Jolrael's math.** Cycling is textually "draw a card," so any cycle activated after your draw step is your "second card that turn" and makes a 2/2 Cat — one Cat per turn regardless of how many extra cards you cycle past the second, since the trigger only fires once ("whenever you draw your second card each turn").

**Known real downside, not a bug.** Wild Dogs' upkeep trigger ("the player with the most life gains control of this creature") is a genuine risk against decks that race past you on life — several of the exact matchups this sideboard answers (lifegain, defensive W splash mirrors). It earns its slot as a 1-mana 3/3 in the more common case where this deck is ahead or even on life, but if that stops being true across your metagame, Skirk Prospector or a second Werebear are the cleanest 1-for-1 swaps.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget (deck uses 4 of 5: Jolrael, Grim Lavamancer, Birds of Paradise, Decimate):**
- Sylvan Library (mythic, G) — best pure card-advantage engine in the pool, but it's a generic bomb rather than a Cycling-specific payoff, and the life-payment cost fights an aggressive curve.
- Forgotten Ancient (rare, G) — genuinely on-theme with Invigorating Boon's counter-distribution plan (accumulates counters off any spell cast, redistributes them), but redundant with Invigorating Boon's own counter engine and not worth a 5th rare slot over the fixing/removal already included.
- Siege-Gang Commander (rare, R) — strong goblin/token payoff for Mogg War Marshal, but 5 mana is clunky in this curve and it doesn't touch cycling at all.
- Nut Collector (mythic, G) — Threshold payoff (squirrel anthem), but 6 mana and a slow token clock make it a worse Threshold card than Werebear for this shell.
- Enlightened Tutor (rare, W) — could fetch Lightning Rift/Invigorating Boon, but running 2 copies of each keystone already solves the consistency problem it would address, and it's an awkward W-splash 1-drop.

**Uncommons a tier below the chosen includes:**
- Valduk, Keeper of the Flame (R) — needs an Aura/Equipment package this deck doesn't run; Improvised Armor alone doesn't justify it.
- Goblin Matron (R) — tutors for Gempalm Incinerator/Mogg War Marshal, but the goblin package is only 3 cards deep, too thin to build around.
- Mystic Enforcer (GW) — strong Threshold flier with protection from black, but needing both G and W reliably is a bigger ask than the "light splash" design target for W.
- Terravore (G) — power/toughness = land cards in all graveyards, but this deck's cyclers discard mostly nonland cards, so it rarely gets big.
- Krosan Restorer (G) — fine land-untap/ramp utility, lost out to Werebear and Radha for curve slots.

**Sideboard-consideration cards that didn't make the final 10:**
- Wrath of God (rare, W) — a real anti-aggro/token sweeper, but {2}{W}{W} is too color-intensive for a 3-source splash; would need its own manabase package to be reliable.
- Fireblast (R) — free burn (sac 2 Mountains) is powerful reach, but costs real lands in a deck that already runs a tight 16.
- Sulfuric Vortex (rare, R) — burns both players every turn; strong vs. control/lifegain but the "no lifegain" clause fights this deck's own Renewed Faith-style answers if boarded in.
- Congregate (W) — cut from the sideboard during the grill: 4 of 10 slots were already anti-aggro/lifegain (Lull, Improvised Armor, Renewed Faith), and Congregate did nothing else; replaced with Icy Manipulator to cover the previously-missing anti-bomb/anti-evasive-threat gap.

## MANA AUDIT: PASS
```
Land count: 16 (recommended 16) — PASS
Avg CMC (nonland): 2.46
Pip demand (core R/G): R 13 (52%), G 12 (48%)
Land color production: R 8, G 8, W 3
Color balance: G pip 48% / prod 50% (gap -2.0, OK); R pip 52% / prod 50% (gap +2.0, OK) — PASS
Splash (W): 3 cards counted (2 spells + Drifting Meadow as a W source), max CMC 3, required sources 3, actual sources 3 — PASS
Overall: PASS
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons at <=2 copies each (basics exempt - unlimited supply, not part of the finite cube pool)
[PASS] Rares/mythics at <=1 copy each
[PASS] Max 5 rares/mythics total across main+SB - 4 used: Jolrael Mwonvuli Recluse, Grim Lavamancer, Birds of Paradise, Decimate
[PASS] All 40+10 cards verified present in cube pool by exact name (Phase 9 Challenger cube-membership check)
[PASS] All color identities subset of {R, G, W} or colorless
```
