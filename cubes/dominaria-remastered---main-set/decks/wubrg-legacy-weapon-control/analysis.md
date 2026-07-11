---
deck_name: "wubrg-legacy-weapon-control"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUBRG"
format: "40-card"
built_at: "2026-07-10T19:56:38Z"
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
1x Gemstone Mine           Any color, 3 charges then sacrifices
1x Terminal Moraine        Fetches a basic, thins the deck
```

### CREATURES (8)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Birds of Paradise       x1    G      T1 ramp/any-color fixing   R
  3  Man-o'-War               x1    U      Tempo bounce + body        C
  3  Mesa Enchantress         x1    W      Draw off enchantment casts U
  4  Zur the Enchanter        x1    WUB    Evasive aura tutor         R
  4  Flametongue Kavu         x1    R      ETB removal + body         U
  4  Faceless Butcher         x1    B      ETB exile removal + body   U
  4  Thieving Magpie          x1    U      Evasive card advantage     U
  5  Serra Angel              x1    W      Evasive finisher           U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Swords to Plowshares     x1    W      Premium creature removal   U
  1  Chain Lightning          x1    R      Burn removal / reach       C
  2  Counterspell             x1    U      Hard counter                C
  2  Terror                   x1    B      Removal (nonartifact/blk)  C
  2  Chainer's Edict          x1    B      Edict removal + flashback  U
  2  Impulse                  x1    U      Card selection              C
  4  Fire // Ice              x1    RU     Flexible removal/cantrip   U
  4  Deep Analysis            x1    U      Draw 2, flashback later    C
  4  Fact or Fiction          x1    U      Card advantage engine       U
```

### OTHER SPELLS (6)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Spirit Link              x1    W      Lifegain aura, Zur target  C
  2  Pacifism                 x1    W      Removal aura, Zur target   C
  2  Lotus Blossom            x1    C      Delayed any-color ramp     R
  2  Mind Stone                x1    C      Ramp, cashes in for card   C
  3  Griffin Guide             x1    W      +2/+2 flying, leaves token U
  7  Legacy Weapon             x1    C      Repeatable WUBRG exile     M
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in         Rar
Tormod's Crypt           x1    C      Graveyard/reanimator/flashback  U
Duress                   x1    B      Hand disruption vs control/combo C
Damping Sphere           x1    C      Anti-storm/ritual/fast mana     U
Circular Logic           x1    U      Extra counter, scales w/ GY     U
Radiant's Judgment       x1    W      Big-creature removal, cycles    C
Orim's Thunder           x1    W      Artifact/enchant removal+kick   C
Break Asunder            x1    G      Artifact/enchant removal, cyc.  C
Solar Blast              x1    R      Extra reach/removal, cycles     C
Renewed Faith            x1    W      Lifegain vs aggro, cycles       C
Congregate               x1    W      Life swing vs aggro/burn        U
```

## ANALYSIS

**Legacy Weapon is a removal engine, not the win condition.** It has no power/toughness — it clears the way while Zur, Serra Angel, Thieving Magpie, or a Griffin-Guided body actually closes the game. Framing it purely as a "win condition" (as an early draft of this deck's role text did) overstates what it does; the self-grill caught this.

**The five Lair lands are fixing, not ramp.** Each reads "sacrifice this unless you return a non-Lair land you control to its owner's hand" — playing one as your very first land drop (no other land in play) sacrifices it for nothing, and even a "successful" activation costs a land drop's worth of tempo since you're bouncing, not adding. They're best played from turn 2+ once a basic or dual is already down. The 5 basics exist partly to give the Lair lands something safe to bounce.

**Manabase deliberately overrides pip-proportional land counts.** Casting-cost pip demand skews blue-heavy (10 of 28 pips) and green-light (1 pip, Birds of Paradise only), but land production is a flat 6 sources per color (17 lands: 5 Lair + 5 duals + 5 basics + Gemstone Mine). This is intentional — Legacy Weapon's activation needs one of each color regardless of casting-cost skew, so the manabase is built for that flat demand rather than the spell-cost demand curve.

**Enchantment density fixes a real self-grill finding.** The first build only ran one enchantment (Pacifism), which meant Zur's tutor and Mesa Enchantress's draw trigger would whiff most games after turn one. Swapping in Spirit Link and Griffin Guide (for Icy Manipulator and Frantic Search) gives both cards 3 real targets/triggers and improves the curve (CMC-4 cluster down from 8 cards to 7, avg CMC 3.04 to 2.91).

**Gemstone Mine and Lotus Blossom are finite/slow, not durable.** Gemstone Mine sacrifices itself after 3 activations; Lotus Blossom produces only one color per use and does nothing the turn it enters. Neither is a repeatable "any color every turn" source — Legacy Weapon activations will be occasional high-value plays in grindy games, not a reliable every-turn engine.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap:** all four remaining wedge legends were considered as alternates to the fixing-rares package but didn't make this build — Sol'kanar the Swamp King (BRU, 5cmc), Rith, the Awakener (GRW, 6cmc), Arcades Sabboth (GUW, 8cmc, double-pipped and upkeep-taxed — hardest to support even with full fixing), Xira Arien (BRG, 3cmc). Also cut: Absorb (UW counterspell+lifegain, would've been excellent but there was no rare slot left), Decimate, Spinal Embrace, Phantom Nishoba, Exploration, Urza Lord High Artificer, Gauntlet of Power (only pumps one chosen color — weak in a true 5c shell), and the 5 rare check-lands (Isolated Chapel, Sulfur Falls, Woodland Cemetery, Clifftop Retreat, Hinterland Harbor) — all duplicate pairs already covered by the common duals, so they'd cost rare slots for zero marginal fixing.

**Uncommons a tier below the final cut:** Icy Manipulator and Frantic Search (both cut in the self-grill revision, still fine includes if you want more tempo/filtering over threat density), gold removal (Recoil, Stand // Deliver), Sawtooth Loon, Pyre Zombie, Spiritmonger (BG, strong body but off the WUBRG-wide interaction plan), Tatyova Benthic Druid, Tiana Ship's Caretaker.

**Sideboard-consideration cards not included:** Wax // Wane, Night // Day, Illusion // Reality, Pain // Suffering, Assault // Battery, Order // Chaos, Spite // Malice (any of the gold split cards could sub in for a sideboard slot targeting a specific matchup), Momentary Blink (protects an ETB creature or resets Faceless Butcher's exile if it's about to die), Emerald Charm (cheap green flex answer).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 0*

Color Balance (core):  [PASS]
  B  demand 17.9%  prod 35.3%  gap -17.4pp  [OK]
  G  demand  3.6%  prod 35.3%  gap -31.7pp  [OK]
  R  demand 10.7%  prod 35.3%  gap -24.6pp  [OK]
  U  demand 35.7%  prod 35.3%  gap  +0.4pp  [OK]
  W  demand 32.1%  prod 35.3%  gap  -3.2pp  [OK]

*Ramp cards: 0 is a tool artifact — the ramp detector looks for an
exact "ramp" tag, and Birds of Paradise/Lotus Blossom/Mind Stone are
tagged "Mana Dork"/"Mana Rock"/"Mana Ramp" instead. All three are
functional acceleration; the land-count recommendation (16) would
likely be 1-2 lower if the tool counted them.
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Pool membership: all 45 non-basic cards verified in working_pool
[PASS] Copy limits: every card at 1 copy (within C/U x2, R/M x1 caps)
[PASS] Rare/mythic cap: 5/5 used - Legacy Weapon (M), Zur the Enchanter,
       Birds of Paradise, Lotus Blossom, Gemstone Mine (all R)
[PASS] Color identity: all cards within WUBRG, no splash
```
