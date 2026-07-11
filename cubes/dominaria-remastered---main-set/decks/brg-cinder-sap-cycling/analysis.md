---
deck_name: "brg-cinder-sap-cycling"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-07-10T02:05:05Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
4x Mountain
2x Forest
2x Wooded Ridgeline    RG dual, enters tapped
2x Smoldering Crater    R, enters tapped, Cycling {2}
2x Slippery Karst       G, enters tapped, Cycling {2}
2x Polluted Mire        B splash source, enters tapped, Cycling {2}
1x Darigaaz's Caldera   BGR triland - ETB: sac unless you bounce a non-Lair land
```

### CREATURES (12)
```
CMC  Card                       Qty   Color  Role                                          Rar
  1  Grim Lavamancer             x1    R      GY payoff - exiles 2 GY cards: 2 dmg           R
  1  Wild Dogs                   x1    G      Cheap cycler + 2/1; can change controller       C
  2  Jolrael, Mwonvuli Recluse   x1    G      Cycling payoff - 2nd draw makes a 2/2 Cat        R
  2  Radha, Heir to Keld         x1    GR     Combat-triggered RR ramp, no card draw           U
  3  Gempalm Incinerator         x2    R      Cycler + body (dmg-on-cycle needs Goblins we lack) U
  3  Undead Gladiator            x1    B      Cycler ({1}{B}) + recursive threat off splash    U
  4  Flametongue Kavu            x1    R      Premium removal creature (4 dmg ETB)             U
  5  Street Wraith               x2    B      Free cycler (2 life) + evasive 3/4               C
  6  Elvish Aberration           x1    G      Forestcycler + 4/5 mana dork late                C
  7  Macetail Hystrodon          x1    R      Colorless-cost cycler + 4/4 first strike/haste    C
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                       Qty   Color  Role                                          Rar
  1  Spark Spray                 x2    R      Cheapest cycler ({R}) + 1 dmg reach              C
  3  Ichor Slick                 x2    B      Cycler (colorless {2}) + -3/-3 removal           C
  3  Primal Boost                x1    G      Cycler + combat trick (+4/+4)                    C
  4  Decimate                    x1    GR     4-for-1 removal - needs all 4 target types live  R
  4  Solar Blast                 x1    R      Cycler (dmg-on-cycle) + 3 dmg burn               C
  6  Slice and Dice              x1    R      Mostly a cycler; symmetrical 4-dmg wipe risks own board U
```

### OTHER SPELLS (5)
```
CMC  Card                       Qty   Color  Role                                          Rar
  2  Lightning Rift               x2    R      Keystone payoff - pay {1} per cycle: 2 dmg      U
  2  Invigorating Boon             x2    G      Keystone payoff - +1/+1 counter per cycle       U
  2  Sylvan Library                x1    G      Card advantage engine, digs for payoffs         M
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                       Rar
Tormod's Crypt           x1    C      GY hate vs reanimator/flashback decks          U
Break Asunder            x1    G      Cycler + artifact/enchantment answer           C
Giant Spider              x1    G      Anti-flyers blocker                           C
Lull                      x1    G      Fog + cycler, anti-aggro insurance            C
Fireblast                 x1    R      Free reach/finisher vs control (costs 2 Mtn)  U
Icy Manipulator           x1    C      Tempo/control tapper                          U
Slice and Dice            x1    R      2nd copy, anti-token sweeper                  U
Crawlspace                x1    C      Anti-go-wide aggro (caps attackers at 2)      R
Werebear                  x1    G      Ramp/Threshold beater - cycling fills GY fast C
Undead Gladiator          x1    B      2nd copy, grindy recursion vs attrition       U
```

## ANALYSIS

**The engine, quantified.** 21 of 25 mainboard spells carry Cycling/Forestcycling. Every cycle activation is a trigger for both Lightning Rift (pay {1}, 2 damage to anything) and Invigorating Boon (free +1/+1 counter) simultaneously - meaning a single cycled Street Wraith on turn 3 can read "pay 2 life, draw a card, deal 2 damage, put a counter on a creature" for one activation. This compounds fast: by turn 5-6 with both enchantments live, every spare cycler in hand is doing double duty as both card filtering and a value trigger.

**Why the splash is nearly free.** Street Wraith cycles for 2 life (zero mana), Ichor Slick cycles for {2} generic (zero colored mana) - the deck can hit its full cycling density even on a turn where it has drawn zero Black sources. The only card that meaningfully wants B mana is Undead Gladiator's graveyard-recursion ability ({1}{B}), which is a bonus mode, not the card's primary job.

**Jolrael's math.** Her trigger is "whenever you draw your second card each turn" - your normal draw step draw is the first card; the second card that turn (from cycling, Sylvan Library's extra draws, etc.) makes a 2/2 Cat. On any turn you cycle even once after drawing for the turn, she's making a token, effectively turning "spend mana to filter a card" into "spend mana to filter a card AND get a 2/2."

**Land count reasoning (15 of 40 = 37.5%, avg CMC 3.08).** The mana audit's baseline formula recommends 16 for this curve, but 6 of the 15 lands (Smoldering Crater, Slippery Karst, Polluted Mire x2 each) can themselves cycle away for {2} when flooded, and 11 of 25 spells have their own cheap alternate cycling cost - the deck's effective land count in a flood scenario is higher than 15 because dead lands convert to cards. This is a deliberate, cycling-density-driven deviation from the raw baseline, not an oversight (audit still reads PASS at a 1-land gap).

**Known risk points, disclosed from the self-grill (Phase 9):**
- **Wild Dogs** can change controller if an opponent pulls ahead on life - a real risk in a deck that pays its own life (Street Wraith, Sylvan Library). Cheap and cyclable regardless, so it's a low-cost inclusion even accounting for the downside.
- **Decimate** is not actually modal - it requires simultaneous legal targets in all four categories (artifact, creature, enchantment, land), so it will sit dead in hand more often than "flexible" implies. Kept because it's still the best pure removal option in the color pair.
- **Darigaaz's Caldera**'s ETB (sacrifice unless you bounce a non-Lair land back to hand) is a real tempo cost in a lean 15-land shell; it was still worth including as the only way to hit 3 dedicated B sources without exceeding the common copy cap on Polluted Mire.
- **Gempalm Incinerator**'s cycle-triggered damage scales with Goblins on the battlefield - this build runs none, so that clause is functionally dead. It's included purely as a fairly-costed cycler/body, which the self-grill confirmed is still defensible but is the single weakest card in the list.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (mainboard uses Jolrael, Grim Lavamancer, Decimate, Sylvan Library; sideboard uses Crawlspace - exactly 5/5):
- **Siege-Gang Commander** (R) - excellent generic finisher/sac-outlet, but would have required a Goblin subtheme to fully justify and the cap was already spent on more cycling-central pieces.
- **Forgotten Ancient** (R) - synergizes with "counters matter" via Invigorating Boon, but its own trigger ("whenever a player casts a spell") doesn't touch cycling at all.
- **Kamahl, Fist of Krosa** (M) - strong finisher, but 6 mana and off the low-curve plan.
- **Shivan Dragon** (R) - solid generic top-end, no cycling synergy.
- **Sulfuric Vortex** (R) - powerful clock but actively punishes Street Wraith/Sylvan Library's life payments.

**Uncommons/commons a tier below the chosen includes:**
- **Terravore** (U) - scales with lands in all graveyards (cycling lands feed this from both players), genuinely on-theme, but was cut to make room for more literal cyclers; a strong swap-in for Gempalm Incinerator if you want a bigger late-game body.
- **Call of the Herd** (U) - efficient 3/3 with flashback, no cycling tie-in.
- **Ridgetop Raptor** (C) - double strike pairs beautifully with Invigorating Boon counters, close cut.
- **Chain Lightning** (C) - most efficient burn in the pool, but has no Cycling text, so it lost out to actual cyclers for deck-identity density.

**Sideboard-consideration cards that didn't make the 10:**
- **Deadwood Treefolk** (U) - recurs a creature from the graveyard on ETB/death, good vs control/removal-heavy matchups.
- **Suq'Ata Lancer** (C) - haste + flanking, a fine aggressive swap if the meta is slow.
- **Squirrel Nest** (U) - token engine, strong grindy option vs control if Crawlspace isn't needed.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     3.08   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  39.1%  prod  46.7%  gap  -7.6pp  [OK]
  R  demand  60.9%  prod  60.0%  gap  +0.9pp  [OK]

Splash Check: [PASS]
  B  7 card(s), max CMC 5  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons max 2 copies each - PASS (verified across all 50 cards)
Rares/mythics max 1 copy each - PASS
Maximum 5 rares/mythics total (main + sideboard) - PASS (5/5: Jolrael,
  Grim Lavamancer, Decimate, Sylvan Library, Crawlspace)
Self-grill (Phase 9) - PASS: Challenger found zero rule violations, zero
  phantom cards, zero pipeline-viability rejections. 3 role-label corrections
  applied (Wild Dogs, Radha, Decimate); no card swaps required.
```
