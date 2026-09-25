---
deck_name: "wb-syphon-verdict"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-07-31T02:42:56Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  8x Plains                 basic land
  7x Swamp                  basic land
  2x Sunlit Marsh           WB dual, enters tapped
  1x Isolated Chapel        WB dual, untapped w/ Plains or Swamp
```

### CREATURES (11)
```
CMC  Card                          Qty  Color  Role                          Rar
  2  Cleric of the Forward Order   x2  W      Lifegain body                 C
  2  Spectral Lynx                 x1  W      Resilient threat (regen)      U
  3  Phyrexian Rager               x1  B      Card advantage body           C
  3  Royal Assassin                x1  B      Repeatable removal            R
  3  Undead Gladiator              x1  B      Recursion / cycle             U
  3  Urborg Syphon-Mage            x1  B      Repeatable drain + lifegain   C
  4  Faceless Butcher              x1  B      Removal on a body             U
  4  Voice of All                  x1  W      Evasive protected Angel       U
  5  Lyra Dawnbringer              x1  W      Lifelink finisher + anthem    M
  5  Serra Angel                   x1  W      Evasive Angel beater          U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Duress                        x1  B      Hand disruption               C
  1  Swords to Plowshares          x1  W      Premium removal               U
  2  Chainer's Edict               x1  B      Edict removal + flashback     U
  2  Gerrard's Verdict             x1  BW     Discard + lifegain            U
  2  Terror                        x1  B      Cheap removal                 C
  3  Ichor Slick                   x1  B      Modal removal / cycle         C
  3  Renewed Faith                 x1  W      Lifegain / cantrip            C
  4  Congregate                    x1  W      Mass lifegain                 U
```

### OTHER SPELLS (3)
```
CMC  Card                          Qty  Color  Role                          Rar
  1  Spirit Link                   x1  W      Lifegain aura                 C
  3  Jalum Tome                    x1  C      Discard outlet / card filter  C
  4  Test of Endurance             x1  W      Alt-win payoff                M
```

## SIDEBOARD (10)
```
Card                          Qty  Color  Role / When to board in                              Rar
Tormod's Crypt                x2  C      vs graveyard decks (biggest cube theme)             U
Duress                        x1  B      extra hand disruption vs control/combo              C
Chainer's Edict               x1  B      2nd edict vs creature swarms / hexproof             U
Orim's Thunder                x2  W      vs artifacts & enchantments                         C
Radiant's Judgment            x1  W      vs power-4+ / big evasive threats                   C
Cackling Fiend                x1  B      vs control — discard on a body                      C
Wrath of God                  x1  W      vs go-wide/aggro swarm                              R
Dark Withering                x1  B      extra removal (destroy nonblack, madness)           U
```

## ANALYSIS

### DECK IDENTITY
Orzhov (WB) lifegain-drain attrition. Black removal, discard and a repeatable drain (Urborg Syphon-Mage) grind the opponent's board, hand and life total while white lifegain (Congregate, Spirit Link, Cleric, Renewed Faith, Gerrard's Verdict) climbs your own. Undead Gladiator and Gerrard's Verdict out-resource the long game; Lyra Dawnbringer closes as a lifelink beater and Test of Endurance is the 50-life inevitability the whole engine feeds.

**Urborg Syphon-Mage is a two-way life swing.** '{2}{B}, {T}, Discard a card: Each other player loses 2 life. You gain life equal to the life lost' widens the life gap by 4 per activation (−2 them, +2 you) and simultaneously feeds Test of Endurance; Jalum Tome and cycling cards keep it fed in the late game.

**Undead Gladiator + Syphon-Mage/Jalum Tome is a discard loop that never runs dry.** The Gladiator returns itself each upkeep for {1}{B}+a discard; that discard can be a land or a cycler, and the card you pitch to Syphon-Mage can be the Gladiator itself (bought back next turn). Jalum Tome ({2},{T}: draw then discard) is the repeatable outlet that also enables Ichor Slick's madness.

**Gerrard's Verdict is the best card in the shell.** 'Target player discards two cards. You gain 3 life for each land card discarded' is a 2-for-1 that, off a couple of lands, is a 6-life Test increment stapled to hand disruption — the drain and the lifegain halves of the deck in one card.

**Lyra turns the two Angels into lifelinkers.** Serra Angel and Voice of All become +1/+1 lifelink bodies under Lyra, so a stalled board still climbs life every combat toward the 50-life Test win.

**Fixing is the honest weak point.** Only three WB duals (1 untapped Isolated Chapel + 2 tapped Sunlit Marsh) support seven double-pip cards; the turn-3 BB drops (Royal Assassin, Undead Gladiator) are the cards most likely to sit a turn — an accepted cost of staying two-color under the rare cap.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:3  2:6  3:6  4:4  5:2  6:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies → p=0.87 (need ≥ 0.75)
  PASS  enabler: 8 copies → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 45%  T2 91%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper; single-target removal + Chainer's Edict (with flashback) trade for the biggest threats — Wrath of God boards in vs go-wide swarms.
  OK        single_large_threat: Swords to Plowshares, Terror, Chainer's Edict, Ichor Slick, Faceless Butcher, Royal Assassin
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment destruction; Duress proactively strips one from hand, Orim's Thunder available from the sideboard.
  CONCEDED  stack: No countermagic; Duress strips a key noncreature spell proactively, otherwise interaction resolves on the battlefield.
  CONCEDED  graveyard: No maindeck graveyard hate; Tormod's Crypt available from the sideboard.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Undead Gladiator, Ichor Slick, Renewed Faith and Jalum Tome cycle/filter excess lands into cards; Royal Assassin's {T} and Spectral Lynx's {B} regeneration convert spare mana into repeatable removal/a sticky threat; Urborg Syphon-Mage turns extra cards into drain. |
| screw | mitigation | Cheap single-pip interaction (Duress {B}, Terror {1}{B}, Swords {W}, Ichor Slick cycle {2}) keeps 2-land hands active; Undead Gladiator and Renewed Faith cycle toward lands; 18 lands + 3 WB duals stabilize the double-pip WW/BB top end (goldfish keepable 87%, 3-land-by-T3 94%). |
| decapitation | mitigation | Removal-dense grind with no single key card: answering one threat leaves Undead Gladiator recursion, Urborg Syphon-Mage drain and redundant win lines (Test of Endurance + Lyra); Spectral Lynx regenerates through targeted removal. |
| gas-out | mitigation | Phyrexian Rager (draw), Gerrard's Verdict (2-for-1), Undead Gladiator (recurs itself each upkeep), Ichor Slick / Renewed Faith (cycle) are self-replacing/net-positive refuels; Jalum Tome is a repeatable discard-outlet + card filter that also feeds the Syphon-Mage/Gladiator discard costs and enables Ichor Slick's madness; Urborg Syphon-Mage converts late dead cards into life-drain — the deck is built to never run out first. |
| raced | mitigation | Lifegain (Congregate, Spirit Link, Renewed Faith, Lyra lifelink, Syphon-Mage's gain) plus cheap removal (Swords, Terror, Chainer's Edict) out-stabilize aggro; Wrath of God boards in vs the fastest go-wide clocks. |
| disruption-fizzle | mitigation | The attrition plan is not one fragile turn: Duress proactively clears the opponent's interaction, and Chainer's Edict flashback + Undead Gladiator recursion mean a countered or removed piece is simply replaced next turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Serra Avatar | Mana-driven cut: {4}{W}{W}{W} is unreliable in a two-color base (~11 white sources); the WB build anchors on Test of Endurance + Lyra instead. Prime swap-in if the mana is pushed heavily white. |
| Vampiric Tutor | Finds Test of Endurance or any answer, but 'lose 2 life' fights the lifegain plan and it spends a scarce rare/mythic slot. |
| Yawgmoth, Thran Physician | Powerful sac/draw engine but an aristocrats payoff needing fodder the deck doesn't prioritize; 'Pay 1 life' per activation is anti-lifegain. |
| Wretched Anurid | 3/3 for 2 but 'Whenever another creature enters, you lose 1 life' actively fights the lifegain plan. |
| Flesh Reaver | 4/4 for 2 that deals its damage back to you — anti-lifegain. |
| Mindslicer | Symmetric hand-wipe rare; strong in dedicated control but the deck wants to keep its own grind cards; SB consideration. |
| Dark Withering | Destroy nonblack + madness, but needs a discard outlet to be efficient; SB removal option. |
| Isolated Chapel | Best untapped WB dual but a RARE land — included in the maindeck only because both colors run double-pip cards; it consumes one of the five rare/mythic slots. |
| Kjeldoran Gargoyle | Lifegain flyer cut for Jalum Tome during the grill — a 6-mana 3/3 is the top of the curve and slower than the deck wants; the discard-outlet engine served the grind thesis better. |
| Yawgmoth, Thran Physician | Premier BW attrition engine (draw + removal + discard outlet) but a mythic — the 5 rare/mythic slots are saturated; would require cutting Test of Endurance or Lyra. |
| Vampiric Tutor | Makes the Test/Lyra plan consistent but a mythic (cap-blocked) and 'lose 2 life' fights the 50-life plan. |
| No Mercy | Enchantment that hard-locks the race matchup, but a mythic outside the saturated rare cap; SB dream if a slot opens. |
| Mind Stone | Colorless accel + late cantrip smooths the double-pip curve, but adds {C} only — it does not fix the WW/BB colored-pip strain, so it lost the slot to on-color cards. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 17 recommended  [PASS]
Avg CMC:     2.82   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.43 adj [MV 2.82 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  44.8%  prod  55.6%  gap -10.8pp  [OK]
  W  demand  55.2%  prod  61.1%  gap  -5.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_max2: PASS
rares_mythics_max1: PASS
rares_mythics_total_max5: 5/5 PASS
WB_only: PASS
```
