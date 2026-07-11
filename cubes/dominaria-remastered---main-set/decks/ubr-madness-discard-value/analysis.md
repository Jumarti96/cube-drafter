---
deck_name: "ubr-madness-discard-value"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-09T19:20:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
5x Island
6x Swamp
2x Crosis's Catacombs   UBR tri-land, sacrifice unless you return a non-Lair land
1x Geothermal Bog       BR dual, enters tapped
2x Contaminated Aquifer UB dual, enters tapped
```

### CREATURES (10)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Grim Lavamancer         x1    R      Graveyard-fueled reach/removal  R
  2  Aquamoeba               x2    U      Discard outlet / combat-trick   C
  3  Urborg Syphon-Mage      x2    B      Repeatable drain + discard      C
  3  Undead Gladiator        x1    B      Discard-based recursion/cycle   U
  3  Vexing Sphinx           x1    U      Payoff engine (keystone)        R
  3  Man-o'-War               x1    U      Tempo removal creature          C
  3  Phyrexian Rager         x1    B      Card advantage body             C
  4  Mindslicer               x1    B      Payoff finisher (keystone)      R
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Obsessive Search        x2    U      Cantrip / madness enabler       C
  1  Gamble                  x1    R      Tutor / discard outlet          R
  2  Terror                  x1    B      Efficient removal (nonblack)    C
  3  Circular Logic          x2    U      Counterspell (keystone)         U
  3  Ichor Slick             x1    B      Flexible removal/cycle/madness  C
  3  Frantic Search          x2    U      Free filtering / feeds discard  C
  6  Dark Withering          x2    B      Removal via madness             U
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                          Rar
  2  Zombie Infestation      x2    B      Discard outlet + token engine   U
  3  Jalum Tome              x1    C      Repeatable looter               C
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in           Rar
Duress                  x1    B      Hand disruption vs control/combo    C
Tormod's Crypt          x1    C      Graveyard hate vs opposing GY decks U
Counterspell            x1    U      Generic answer vs bombs/combo       C
Recoil                  x1    BU     Bounce+discard vs sticky threats    U
Chainer's Edict         x1    B      Edict vs hexproof/protection        U
Royal Assassin          x1    B      Repeatable removal vs big creatures R
Street Wraith           x1    B      Free filtering / late beater        C
Nightscape Familiar     x1    B      Cost reduction + regen body         C
Spark Spray             x1    R      Cheap reach/removal vs aggro        C
Solar Blast             x1    R      Reach/removal vs aggro/PWs          C
```

## ANALYSIS

**Macro-Archetype: Midrange (control-leaning). Projected Avg MV: 2.75** (matches mana audit exactly).

**Slot allocation:**
- Lands: 16 (40% of N=40) — sits at the high end of the Midrange 38-42% band; a grindy discard-attrition plan needs to reliably hit land drops for repeatable activated abilities (Urborg Syphon-Mage, Jalum Tome, Grim Lavamancer) rather than curve out fast. Modifiers: cantrips (Obsessive Search x2 is below the 3-card threshold for the -1 modifier -> 0), mana dorks/rocks (none -> 0), MDFCs (none -> 0). Final: 16, unmodified from baseline.
- Interaction: 7 cards (Terror, Circular Logic x2, Dark Withering x2, Ichor Slick, Man-o'-War) = 29.2% of nonland — within Midrange's 20-30% band.
- Threats/Payoffs + absorbed Engine: 17 cards = 70.8% of nonland — Midrange doesn't reserve a separate Engine budget per the build methodology; nearly every card here (Aquamoeba, Urborg Syphon-Mage, Vexing Sphinx, Mindslicer, Zombie Infestation, Jalum Tome, Obsessive Search, Frantic Search, Gamble) pulls double duty as both a threat and a value engine.

**Mana base:** 11 blue pips / 15 black pips (42.3% / 57.7%) among core UB cards. Targeting 9 blue sources / 11 black sources out of 16 lands — comfortably exceeds demand on both colors (negative gap = safe). Splash: 2 red cards (Gamble, Grim Lavamancer), both CMC 1, requiring 3 red sources; Crosis's Catacombs x2 + Geothermal Bog x1 = exactly 3, met precisely with zero dead slots dedicated purely to the splash.

**Madness math:** Exactly 4 madness cards exist in this cube pool — Obsessive Search, Circular Logic, Dark Withering, Ichor Slick — and all 4 are in the 40 (7 copies total, since Ichor Slick runs as a single). Discard outlets that can turn any of them into a madness cast: Aquamoeba (repeatable, instant-speed), Zombie Infestation (2-for-1 into a token), Jalum Tome (repeatable looter), Urborg Syphon-Mage (repeatable, also drains), Undead Gladiator (recursive), Frantic Search (forces 2 discards as a side effect), Gamble (random discard). That's 7 distinct outlet-cards backing 4 madness spells — real redundancy, not a one-shot synergy.

**Mindslicer sequencing:** the strongest lines happen when Mindslicer dies with 1-2 madness cards still in hand — the forced discard from its trigger lets you cast those off the discard for their reduced madness cost in the same moment your opponent loses their whole hand for free. Circular Logic in particular becomes a "free" counterspell off a Mindslicer trigger since you're discarding it anyway.

**Known weakness:** creature/threat density is thin — 8 unique creature cards, 10 total copies, supplemented only by Zombie Infestation's conditional 2/2 tokens (each costs 2 discards). This deck will often be racing on card/resource advantage rather than board presence, and can fall behind against decks that simply curve out with more bodies. It is a tunable ratio, not a structural failure — see swap candidates below if this becomes a problem in testing.

**Cards Considered but Excluded:**

*Rares/mythics cut for the 5-card cap* (mainboard uses Vexing Sphinx, Mindslicer, Gamble, Grim Lavamancer; sideboard uses Royal Assassin — exactly 5, no room left):
- Yawgmoth, Thran Physician (mythic) — a very strong sac-outlet/removal/draw engine, arguably a better rare-slot use than Grim Lavamancer for a pure UB build, but would require dropping the R splash entirely to free the identity fit.
- Oversold Cemetery (rare) — recurs small creatures from the graveyard, a strong direct fit for the "graveyard as resource" plan, cut purely on rare-count math.
- Chainer, Dementia Master / Body Snatcher / Worldgorger Dragon — a full Reanimator sub-package the deck deliberately did not pursue (rejected during strategy selection in favor of Control-Midrange Discard Value).
- Entomb, Vampiric Tutor, Mystical Tutor, Mystic Remora, Force of Will, Urza Lord High Artificer — all powerful, all off-plan or redundant with Gamble/Circular Logic, cut for budget.

*Strong commons/uncommons a tier below the chosen includes:*
- Deep Analysis (common) — draw 2 now, Flashback for a second draw later paying life; near-perfect discard fodder for this exact shell, arguably stronger than Ichor Slick or Jalum Tome as a pure value piece. First swap-in candidate if the deck feels short on gas.
- Fact or Fiction (uncommon) — raw card advantage, less discard-synergistic than Deep Analysis.
- Cackling Fiend (common) — ETB forces an opponent discard; a maindeckable disruption body, currently only represented by Recoil in the sideboard.
- A 2nd copy each of Man-o'-War and Phyrexian Rager — both are running as singles purely due to slot pressure, not power level; either is a reasonable +1 if a flex slot opens up.
- Millikin, Cloud of Faeries — minor self-mill/tempo pieces, didn't make the cut over the above.

*Sideboard-consideration cards not included:*
- Deep Analysis (as SB gas vs control/grindy matchups)
- Cackling Fiend (as SB disruption vs slower decks)
- Damping Sphere (anti-artifact/storm hate, no clear matchup target identified in this metagame yet)

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.75   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  57.7%  prod  68.8%  gap -11.1pp  [OK]
  U  demand  42.3%  prod  56.2%  gap -13.9pp  [OK]

Splash Check: [PASS]
  R  2 card(s), max CMC 1  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons at most 2 copies each
[PASS] Rares/mythics at most 1 copy each
[PASS] Max 5 rares/mythics total (main+SB): Vexing Sphinx, Mindslicer, Gamble, Grim Lavamancer (mainboard) + Royal Assassin (sideboard) = 5
```
