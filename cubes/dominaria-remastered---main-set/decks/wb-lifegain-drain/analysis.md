---
deck_name: "wb-lifegain-drain"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-07-10T05:02:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  10x Plains
  3x  Swamp
  1x  Sunlit Marsh          WB dual, enters tapped
  1x  Drifting Meadow       W source, cycles late
  1x  Polluted Mire         B source, cycles late
```

### CREATURES (10)
```
CMC  Card                          Qty   Color  Role                          Rar
  2  Cleric of the Forward Order    x2    W      Early lifegain body          C
  3  Mesa Enchantress               x1    W      Draws off enchantment casts  U
  3  Urborg Syphon-Mage             x1    B      Repeatable drain engine      C
  3  Auramancer                     x1    W      Rebuys Spirit Link/No Mercy  C
  3  Phyrexian Rager                x2    B      Card advantage body          C
  5  Lyra Dawnbringer               x1    W      Lifelink flyer / anthem      M
  6  Kjeldoran Gargoyle             x1    W      Evasive damage-to-life       C
  7  Serra Avatar                   x1    W      P/T = life total finisher    M
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                          Qty   Color  Role                          Rar
  1  Swords to Plowshares           x2    W      Premium removal              U
  2  Terror                         x2    B      Removal                      C
  2  Gerrard's Verdict              x1    WB     Discard + conditional gain   U
  3  Renewed Faith                  x2    W      Burst lifegain / cycling     C
  4  Congregate                     x2    W      Scaling burst lifegain       U
  4  Wrath of God                   x1    W      Board wipe                   R
```

### OTHER SPELLS (4)
```
CMC  Card                          Qty   Color  Role                          Rar
  1  Spirit Link                    x2    W      Lifelink enabler aura        C
  4  No Mercy                       x1    B      Combat lockdown              M
  4  Test of Endurance              x1    W      Alt win-condition (50+ life) M
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in        Rar
Duress                         x1    B      Vs control/combo hand strip    C
Chainer's Edict                x1    B      Vs hexproof/protection threats U
Faceless Butcher                x1    B      Flex exile removal + body      U
Pacifism                       x2    W      Vs evasive/protected threats   C
Radiant's Judgment             x1    W      Vs big creatures, cycles       C
Whitemane Lion                 x1    W      Flash bounce, rebuy ETBs       C
Serra Angel                    x1    W      Extra pressure vs control      U
Tormod's Crypt                 x1    C      Vs graveyard strategies        U
Damping Sphere                 x1    C      Vs ritual/storm decks          U
```

## ANALYSIS

**The lifegain math.** Over a full game this deck can plausibly generate: Renewed Faith x2 (~+12), Congregate x2 (~+8-16, scales off *all* creatures on the battlefield, not just yours), Cleric of the Forward Order x2 (+4-6), Gerrard's Verdict (+0-6), repeated Urborg Syphon-Mage activations (+2 per activation), and ongoing Lyra Dawnbringer/Kjeldoran Gargoyle combat lifelink. That comfortably closes the 30-life gap from a starting 20 to Test of Endurance's 50 threshold if even half of it lands.

**No Mercy is the deck's best card in this shell specifically.** At a stabilized life total, "whenever a creature deals damage to you, destroy it" turns every attack into a one-sided trade -- it doesn't just protect the life total, it actively punishes opponents for attacking at all, which is exactly the deterrent this deck needs while Test of Endurance ticks toward 50.

**Enchantment recursion loop.** Auramancer can rebuy Spirit Link, No Mercy, or Test of Endurance from the graveyard -- meaning even if the win condition gets destroyed, it isn't gone for good. Mesa Enchantress (added during the self-grill review, see below) triggers off the same 4 enchantment spells (Spirit Link x2, No Mercy, Test of Endurance) for incidental card advantage.

**Known weakness: turns 1-3.** Only 10 of 24 nonland cards are creatures, and there's no 1-drop creature -- Spirit Link needs a creature to enchant, and it won't have one turn 1. The deck leans on Terror/Swords to Plowshares for early interaction and Wrath of God/No Mercy (both turn 4) to stabilize. This is a real vulnerability to fast aggro that the sideboard doesn't fully patch -- worth watching in playtesting.

**Self-grill revision.** The Proposer/Challenger review confirmed every single WB-legal card tagged Lifegain in the entire cube pool is already in this deck -- there was no better payoff sitting on the bench. The one accepted revision: swapped Jalum Tome (colorless artifact, no body) for Mesa Enchantress (creature body, same CMC, on-color card advantage) to shore up the thin early-game creature count the Challenger flagged. This kept the mana audit at PASS (W gap actually improved to +0.0pp).

**Sideboard note.** 5 of 10 sideboard slots are removal-shaped, which is somewhat redundant against a mainboard that already runs 6 removal pieces (Swords to Plowshares x2, Terror x2, Wrath of God, No Mercy). Damping Sphere is speculative anti-storm tech for a cube that isn't especially combo-heavy -- it's the most swappable slot if you want to trade it for a second Duress or more anti-aggro tech after a few games.

### Cards Considered but Excluded

**Rares/mythics cut due to the 5-card cap** (Test of Endurance, Serra Avatar, Lyra Dawnbringer, No Mercy, and Wrath of God used the full budget):
- **Royal Assassin** (R, "{T}: Destroy target tapped creature") -- a strong repeatable removal engine, but redundant with No Mercy's role once the life buffer is established.
- **Vampiric Tutor** (M, tutor for any card at the cost of 2 life) -- would find Test of Endurance/Wrath faster, but the life cost cuts against the plan and it does nothing to the board.
- **Windborn Muse** (R, taxes attackers {2} each) -- a strong anti-aggro stax piece that would have helped the turn 1-3 weakness noted above, but competed directly for the same budget slot as Wrath of God.
- **Isolated Chapel** (R, WB dual, untapped if you control a Plains or Swamp) -- would have meaningfully improved the manabase, but a land costing a rare/mythic slot wasn't worth it once No Mercy/Wrath were locked in; Sunlit Marsh + basics were judged sufficient (audit confirms PASS with 0.0pp W gap).
- **Sol'kanar the Swamp King** (R, from the original archetype suggestion) -- excluded for color reasons, not budget: its color identity is actually Grixis (B/R/U), not WB, so it's illegal in this build entirely.

**Uncommons a tier below the chosen includes:**
- **Voice of All** (U, protection from a chosen color) -- solid resilient body, lost out to Lyra/Kjeldoran Gargoyle/Serra Avatar for top-end creature slots; sits in reserve as a possible swap-in vs removal-heavy decks.
- **Undead Gladiator** (U, recursion/cycling) -- good value engine but didn't make the cut over Auramancer's more directly synergistic recursion.
- **Icy Manipulator** (U, tap target permanent) -- flexible tempo/pseudo-removal, considered for the interaction slot Wrath of God/No Mercy ultimately filled.
- **Mind Stone** (C, ramp/cantrip artifact) -- considered for a curve-smoothing slot, cut in favor of keeping the deck lean at 16 lands with no ramp package.

**Sideboard-consideration cards not selected:**
- **Icatian Javelineers, Nomad Decoy, Remedy** -- minor combat tricks/pings, didn't clear the bar over the exile/edict effects already in the SB.
- **Griffin Guide, Sun Clasp, Twisted Experiment** (auras) -- thematically close to Spirit Link but no lifegain text of their own; kept as bench options if a matchup calls for more Voltron-style pressure.

## MANA AUDIT: PASS
```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.04   Ramp cards: 0

Color Balance (core):  [PASS]
  W  demand  75.0%  prod  75.0%  gap  +0.0pp  [OK]
  B  demand  25.0%  prod  31.2%  gap  -6.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: max 2 copies each -- no violations (all at 1 or 2)
[PASS] Rares/mythics: max 1 copy each -- Lyra Dawnbringer, No Mercy, Serra Avatar,
       Test of Endurance, Wrath of God all at exactly 1 copy
[PASS] Max 5 rares/mythics total (main+SB): exactly 5, all mainboard, 0 in sideboard
[PASS] All 50 cards (40 main + 10 SB) verified against cube pool by exact name
```
