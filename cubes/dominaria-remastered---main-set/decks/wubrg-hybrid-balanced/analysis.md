---
deck_name: "wubrg-hybrid-balanced"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUBRG"
format: "40-card"
built_at: "2026-07-10T21:30:28Z"
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

### CREATURES (11)
```
CMC  Card                      Qty  Color  Role                          Rar
  1  Birds of Paradise         x1   G      T1 any-color acceleration    R
  2  Radha, Heir to Keld       x1   GR     2-drop dork + attacker       U
  2  Mogg War Marshal          x1   R      2 bodies for early defense   C
  3  Mesa Enchantress          x1   W      Draw off hard-cast enchants  U
  3  Man-o'-War                x1   U      Tempo bounce + body          C
  4  Zur the Enchanter         x1   WUB    Evasive threat, ench. tutor  R
  4  Flametongue Kavu          x1   R      ETB removal + body           U
  4  Faceless Butcher          x1   B      ETB exile removal + body     U
  4  Thieving Magpie           x1   U      Evasive card advantage       U
  5  Sol'kanar the Swamp King  x1   UBR    Evasive legend, lifegain     R
  6  Rith, the Awakener        x1   GRW    Legend, token snowball       R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                    Qty  Color  Role                        Rar
  1  Swords to Plowshares    x1   W      Premium creature removal   U
  1  Chain Lightning         x1   R      Burn removal / reach       C
  2  Terror                  x1   B      Removal (nonartifact/blk)  C
  2  Counterspell            x1   U      Hard counter                C
  2  Chainer's Edict         x1   B      Edict removal + flashback  U
  2  Impulse                 x1   U      Card selection              C
  4  Fact or Fiction         x1   U      Card advantage engine       U
```

### OTHER SPELLS (5)
```
CMC  Card                    Qty  Color  Role                        Rar
  2  Pacifism                x1   W      Removal aura, Zur target    C
  2  Mind Stone               x1   C      Ramp, cashes in for card    C
  3  Griffin Guide             x1   W      +2/+2 flying, leaves token  U
  3  Call of the Herd           x1   G      3/3 now + 3/3 flashback    U
  7  Legacy Weapon                x1   C      Repeatable WUBRG exile      M
```

## SIDEBOARD (10)
```
Card                    Qty  Color  Role / When to board in          Rar
Tormod's Crypt           x1   C      Graveyard/reanimator/flashback  U
Duress                   x1   B      Hand disruption vs control/combo C
Damping Sphere           x1   C      Anti-storm/ritual/fast mana     U
Circular Logic           x1   U      Extra counter, scales w/ GY     U
Radiant's Judgment       x1   W      Big-creature removal, cycles    C
Orim's Thunder           x1   W      Artifact/enchant removal+kick   C
Break Asunder            x1   G      Artifact/enchant removal, cyc.  C
Solar Blast              x1   R      Extra reach/removal, cycles     C
Renewed Faith            x1   W      Lifegain vs aggro, cycles       C
Congregate               x1   W      Life swing vs aggro/burn        U
```

## ANALYSIS

**This build deliberately cuts Arcades Sabboth, Xira Arien, Gemstone Mine, and Lotus Blossom** to keep 3 legends (Zur/Sol'kanar/Rith) alongside Legacy Weapon and Birds of Paradise. Compared to the other two decks from this cube, it trades Five Wedge Legends' Xira Arien (cheap, low-risk) and Arcades Sabboth (near-unplayable in that build) for Legacy Weapon's grinding removal engine, and trades Legacy Weapon Control's Gemstone Mine/Lotus Blossom "any-color" redundancy for two more curve-topping threats.

**The Zur/Mesa Enchantress "synergy" doesn't actually work — caught in self-grill.** Zur's tutor text is "search your library for an enchantment card... put it onto the battlefield" — that's not casting it, so Mesa Enchantress's "whenever you cast an enchantment spell" never triggers off Zur. Mesa Enchantress only draws a card if Pacifism or Griffin Guide is hard-cast from hand, which happens in a minority of games with only 2 enchantments in the deck. The role text originally overstated this as a built-in combo; it's really just two solid, unrelated cards that happen to share a color.

**The "proactive early-game fix" is real but modest, not solved.** Radha (2/1) and Mogg War Marshal (1/1 + a token, or 2 tokens if echo goes unpaid) are a genuine improvement over a bare Birds-of-Paradise start, but neither profitably blocks much. The deck's actual early game leans on its 6 pieces of CMC<=2 interaction (Swords, Chain Lightning, Terror, Counterspell, Chainer's Edict, Pacifism) more than on board presence — a legitimate control-leaning plan, but don't expect these 2-drops to hold off real aggro pressure by themselves.

**`ramp_count: 0` undercounts real acceleration again.** Birds of Paradise, Mind Stone, and Radha are all functional ramp/fixing by the pool's own tagging; the audit tool's exact-tag-match heuristic misses all three, same tooling gap as the other two decks.

**Legacy Weapon's activation is easier to support here than in the Control build** — the manabase gives 6-7 sources per color out of 17 lands, same structure as the sibling decks, so once you're at 7-8 lands the WUBRG activation is realistic. Getting there is the question, same as always with this land base's Lair-land tempo tax.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap:** Arcades Sabboth and Xira Arien (the two legends not included — see *Five Wedge Legends* for both; Xira in particular would have been a low-risk, cheap addition if there were a 6th rare slot), Gemstone Mine and Lotus Blossom (the any-color fixing rares — see *Legacy Weapon Control*). Also cut: Absorb, Decimate, Spinal Embrace, Phantom Nishoba, Exploration, Urza Lord High Artificer, Gauntlet of Power, and the 5 rare check-lands (duplicate pairs already covered by common duals).

**Uncommons a tier below the final cut:** Werebear and Savannah Lions (alternate early-game bodies flagged by the self-grill as untried options — either could replace Radha or Mogg War Marshal for a slightly different early-game profile), Icy Manipulator, Spiritmonger, Terravore, Tatyova Benthic Druid, Tiana Ship's Caretaker.

**Sideboard-consideration cards not included:** the gold split cards (Wax // Wane, Night // Day, Illusion // Reality, Pain // Suffering, Assault // Battery, Order // Chaos, Spite // Malice), Momentary Blink, Emerald Charm.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 0*

Color Balance (core):  [PASS]
  B  demand 18.8%  prod 35.3%  gap -16.5pp  [OK]
  G  demand 12.5%  prod 35.3%  gap -22.8pp  [OK]
  R  demand 18.8%  prod 35.3%  gap -16.5pp  [OK]
  U  demand 28.1%  prod 41.2%  gap -13.1pp  [OK]
  W  demand 21.9%  prod 41.2%  gap -19.3pp  [OK]

*Ramp cards: 0 is the same tool artifact as the other two decks -
Birds of Paradise, Mind Stone, and Radha are all functional
acceleration tagged "Mana Dork"/"Mana Rock"/"Mana Ramp" rather than
exactly "ramp".
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Pool membership: all 45 non-basic cards verified in working_pool
[PASS] Copy limits: every card at 1 copy (within C/U x2, R/M x1 caps)
[PASS] Rare/mythic cap: 5/5 used - Legacy Weapon (M), Rith, Sol'kanar,
       Zur the Enchanter, Birds of Paradise (all R)
[PASS] Color identity: all cards within WUBRG, no splash
```
