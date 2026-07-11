---
deck_name: "wubrg-five-wedge-legends"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUBRG"
format: "40-card"
built_at: "2026-07-10T20:20:47Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
1x Plains                  Untapped W; Lair-land bounce target
1x Island                  Untapped U; Lair-land bounce target
1x Swamp                   Untapped B; Lair-land bounce target
1x Mountain                Untapped R; Lair-land bounce target
1x Forest                  Untapped G; Lair-land bounce target
1x Crosis's Catacombs      Lair land, taps for U/B/R
1x Darigaaz's Caldera      Lair land, taps for B/R/G
1x Dromar's Cavern         Lair land, taps for W/U/B
1x Rith's Grove            Lair land, taps for R/G/W
1x Treva's Ruins           Lair land, taps for G/U/W
1x Sunlit Marsh            BW dual, always enters tapped
1x Sacred Peaks            RW dual, always enters tapped
1x Molten Tributary        UR dual, always enters tapped
1x Haunted Mire            BG dual, always enters tapped
1x Tangled Islet           GU dual, always enters tapped
1x Idyllic Beachfront      UW dual, always enters tapped
1x Terminal Moraine        Fetches a basic, thins the deck
```

### CREATURES (14)
```
CMC  Card                    Qty   Color  Role                       Rar
  2  Radha, Heir to Keld      x1    GR     2-drop dork + attacker     U
  2  Werebear                 x1    G      2-drop dork, blocks/scales C
  2  Mogg War Marshal         x1    R      2 bodies for early defense C
  3  Xira Arien                x1    BGR    Cheapest legend, draw sink R
  4  Zur the Enchanter         x1    WUB    Evasive aura tutor         R
  4  Flametongue Kavu          x1    R      ETB removal + body         U
  4  Faceless Butcher          x1    B      ETB exile removal + body   U
  4  Voice of All               x1    W      Evasive, protection         U
  4  Thieving Magpie            x1    U      Evasive card advantage     U
  4  Kavu Primarch               x1    G      Flexible curve filler       C
  5  Sol'kanar the Swamp King   x1    UBR    Evasive legend, lifegain   R
  5  Spiritmonger                 x1    BG     Resilient 5/5              U
  6  Rith, the Awakener            x1    GRW    Legend, token snowball    R
  8  Arcades Sabboth                x1    GUW    High-risk top-end legend R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Swords to Plowshares      x1    W      Premium creature removal   U
  1  Chain Lightning            x1    R      Burn removal / reach       C
  2  Terror                      x1    B      Removal (nonartifact/blk)  C
  2  Counterspell                 x1    U      Protects the curve-out     C
  2  Impulse                       x1    U      Card selection              C
  2  Nature's Lore                  x1    G      Ramps a Forest-type land   U
  3  Call of the Herd                 x1    G      3/3 now + 3/3 flashback   U
```

### OTHER SPELLS (2)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Wild Growth               x1    G      Ramp aura, +1 G per tap     C
  2  Pacifism                   x1    W      Removal aura, Zur target    C
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in         Rar
Tormod's Crypt           x1    C      Graveyard/reanimator/flashback  U
Duress                   x1    B      Hand disruption vs control/combo C
Emerald Charm            x1    G      Flexible: untap/ench-kill/anti-fly C
Circular Logic           x1    U      Extra counter, scales w/ GY     U
Radiant's Judgment       x1    W      Big-creature removal, cycles    C
Orim's Thunder           x1    W      Artifact/enchant removal+kick   C
Break Asunder            x1    G      Artifact/enchant removal, cyc.  C
Solar Blast              x1    R      Extra reach/removal, cycles     C
Renewed Faith            x1    W      Lifegain vs aggro, cycles       C
Congregate               x1    W      Life swing vs aggro/burn        U
```

## ANALYSIS

**All five colors are touched by exactly 3 of the 5 legends** — a deliberate structural mirror of the 5 Lair lands, which are each tri-color and also touch every color exactly 3 times. This symmetry is why the manabase (6 sources per color, before basics) lines up so cleanly with 4 of the 5 payoffs.

**Arcades Sabboth is a high-risk bonus, not a reliable plan.** Both self-grill agents independently confirmed the same thing: casting {2}{G}{G}{W}{W}{U}{U} needs 2 live G, 2 live W, and 2 live U sources simultaneously, out of only 6/7/7 total sources of those colors in the whole deck, and its recurring {G}{W}{U} upkeep tax competes with everything else you want to do that turn. With no any-color fixing by design (that budget went entirely to legends), this card will resolve in a minority of games. The deck's actual win conditions are Xira Arien (3), Zur (4), Sol'kanar (5), and Rith (6) — all of which need only single pips of their colors and are comfortably supported. Arcades stays in because the archetype is explicitly "one legend per wedge," but don't expect to reliably cast or protect it.

**The Lair lands are a tempo tax, not free ramp.** Each requires bouncing a non-Lair land back to hand on entry (or sacrificing itself for nothing if none is available) — playing one is land-count-neutral at best, and actively slows the path to 8 lands for Arcades. With only 12 non-Lair lands (6 duals + Terminal Moraine + 5 basics) feeding 5 Lair lands, drawing two Lair lands before a non-Lair land is in play risks a dead draw.

**Early-game defense was a real self-grill finding, now fixed.** The first build had only one creature at CMC 2 or less (a 1/1 Radha) and Terravore as a CMC-3 card that risked being a dead 0/0 if no land had yet hit a graveyard. Swapping Terravore and Coal Stoker for Mogg War Marshal (2 bodies for 2 mana) and Werebear (repeatable G ramp that also blocks) triples the deck's turn-2 creature count and gives it actual reason to call itself midrange rather than "reactive spells until turn 5."

**Nature's Lore is narrower than it sounds.** It can only fetch a card with the literal Forest subtype — in this deck that's Haunted Mire, Tangled Islet, or basic Forest. It's real ramp, but not a "fetch any fixing land" effect.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap:** Legacy Weapon (mythic — see the *Legacy Weapon Control* build), Gemstone Mine, Birds of Paradise, Lotus Blossom (all three any-color fixing rares — cutting them is what makes this build's Arcades Sabboth risk real; including any one of them would have meant cutting a legend and breaking the "one legend per wedge" premise). Also cut: Absorb, Decimate, Spinal Embrace, Phantom Nishoba, Exploration, Urza Lord High Artificer, Gauntlet of Power, and the 5 rare check-lands (duplicate pairs already covered by common duals).

**Uncommons a tier below the final cut:** Terravore and Coal Stoker (both cut in the self-grill revision — Terravore is still playable if you're comfortable with the "dead 0/0" variance, Coal Stoker if you want more one-shot burst over sustained ramp), Icy Manipulator, Tatyova Benthic Druid, Tiana Ship's Caretaker, Giant Spider.

**Sideboard-consideration cards not included:** the gold split cards (Wax // Wane, Night // Day, Illusion // Reality, Pain // Suffering, Assault // Battery, Order // Chaos, Spite // Malice), Momentary Blink, Damping Sphere (this build has less anti-combo need than Legacy Weapon Control since it isn't racing to assemble a slow engine).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.17   Ramp cards: 0*

Color Balance (core):  [PASS]
  B  demand 16.7%  prod 35.3%  gap -18.6pp  [OK]
  G  demand 26.2%  prod 35.3%  gap  -9.1pp  [OK]
  R  demand 16.7%  prod 35.3%  gap -18.6pp  [OK]
  U  demand 21.4%  prod 41.2%  gap -19.8pp  [OK]
  W  demand 19.0%  prod 41.2%  gap -22.2pp  [OK]

*Ramp cards: 0 is the same tool artifact noted in the first deck -
Radha, Werebear, Nature's Lore, and Wild Growth are all functional
ramp/fixing pieces tagged "Mana Ramp"/"Mana Dork" rather than exactly
"ramp", so the detector misses them.
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Pool membership: all 45 non-basic cards verified in working_pool
[PASS] Copy limits: every card at 1 copy (within C/U x2, R/M x1 caps)
[PASS] Rare/mythic cap: 5/5 used - Sol'kanar the Swamp King, Rith the
       Awakener, Arcades Sabboth, Xira Arien, Zur the Enchanter (all R)
[PASS] Color identity: all cards within WUBRG, no splash
```
