---
deck_name: "wub-no-mercy-hard-lockdown-b-splash"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-10T04:44:01Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  3x Plains
  4x Island
  1x Swamp
  2x Idyllic Beachfront    WU dual, enters tapped
  2x Sunlit Marsh          WB dual, enters tapped
  2x Contaminated Aquifer  UB dual, enters tapped
  2x Dromar's Cavern       WUB tri-land, bounces a land on ETB
  1x Maze of Ith           Non-mana utility land — fog + untap
```

### CREATURES (6)
```
CMC  Card                    Qty   Color  Role                     Rar
  2  Wall of Junk             x2    C      Recurring chump blocker  U
  3  Nomad Decoy              x2    W      Repeatable tapper        C
  4  Thieving Magpie          x1    U      Evasive card advantage   U
  5  Serra Angel              x1    W      Evasive finisher         U
```

### INSTANTS & SORCERIES (12)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Swords to Plowshares     x2    W      Premium exile removal        U
  2  Counterspell             x2    U      Protects the lock plan       C
  2  Impulse                  x2    U      Card selection                C
  2  Terror                   x2    B      Efficient splash removal     C
  3  Absorb                   x1    WU     Counter + lifegain buffer    R
  3  Radiant's Judgment       x1    W      Removal (power 4+) + cycle   C
  4  Fact or Fiction          x1    U      Card advantage engine        U
  4  Wrath of God             x1    W      Symmetrical board wipe       R
```

### OTHER SPELLS (5)
```
CMC  Card                    Qty   Color  Role                                Rar
  1  Mystic Remora            x1    U      Draw engine vs. noncreature spells R
  2  Pacifism                 x1    W      Universal "can't attack/block"     C
  4  Icy Manipulator          x2    C      Taps down attackers pre-combat     U
  4  No Mercy                 x1    B      Prison payoff — kills any creature M
                                            that deals you damage
```

## SIDEBOARD (10)
```
CMC  Card                    Qty   Color  Role / When to board in                Rar
  0  Tormod's Crypt           x1    C      Vs. Reanimator/flashback GY decks      C
  2  Chainer's Edict          x2    B      Edict for hexproof/protection threats  U
                                            our removal can't target
  2  Gerrard's Verdict        x1    WB     Discard+lifegain vs. control/combo     U
  3  Circular Logic           x1    U      Extra counter, control/combo mirrors   U
  3  Ovinomancer              x1    U      Unconditional removal (costly)         U
  3  Renewed Faith            x1    W      Flexible lifegain/cycling vs. aggro    C
  4  Congregate               x1    W      Lifegain vs. wide aggro boards         U
  4  Voice of All             x1    W      Protection-from-color finisher         U
  6  Dark Withering           x1    B      Extra removal, nonblack threats        U
```

## ANALYSIS

**The interaction-to-threat ratio is deliberately extreme, and that's the point.**
17 of 23 nonland cards (74%) are pure interaction/prison pieces — well above the
35-45% Control reference range. That's not an oversight: in a "make attacking
miserable" prison shell, the interaction *is* the win condition. Only Serra Angel
and Thieving Magpie exist purely to close games; everything else exists to make
sure the opponent never gets to play Magic. This is a deliberate deviation from
the Control baseline, not an error.

**No Mercy is upside, not a load-bearing requirement.** As a mythic singleton at
{2}{B}{B}, No Mercy is drawn in roughly 42% of games by turn ~10 and needs
double-black against only 7 dedicated B sources. The deck was built so it still
functions as a real control shell without ever seeing it: Wall of Junk, Icy
Manipulator, Nomad Decoy, and Maze of Ith already make attacking unprofitable on
their own, and Wrath of God covers the times a board gets away from you.

**The tap-lock micro-package.** Icy Manipulator and Nomad Decoy tapping an
attacker before combat, combined with Wall of Junk always being available to
chump and bounce itself back to hand, means the opponent is functionally never
able to attack profitably even before No Mercy ever hits the table — the mythic
is a bonus "punish" mode layered on top of a lock that already holds without it.

**Mana base.** 17 lands (42.5% of 40, within the 42-47% Control range). Pip
demand W 11 / U 12 (48%/52%) against land production W 9 / U 10 (53%/59% of 17
lands) — both comfortably oversupplied. The B splash (No Mercy, Terror x2) gets
7 dedicated sources (41% of lands) via Sunlit Marsh, Contaminated Aquifer,
Dromar's Cavern, and a Swamp — well above the double-black cost's practical
requirement, even though the tool's splash-sufficiency formula (built for
single-pip splashes) only asks for 3.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget** (the suggested core list alone
totaled 12 rares/mythics — over double the cap, forcing hard choices):
- Windborn Muse, Crawlspace — both excellent on-theme "attack tax" prison
  pieces; cut because the deck already runs 74% interaction and neither adds a
  win condition. Best swap-in target if you want to trade Mystic Remora's card
  advantage for more raw lockdown.
- Royal Assassin — strong with the Icy Manipulator/Nomad Decoy tap package
  (kills anything they tap down), but Swords to Plowshares/Terror/Radiant's
  Judgment already cover removal without spending a rare slot.
- Opposition, Umbilicus, Jester's Cap — all fit a different Prison sub-path
  (the tap-engine build) or a slower grind plan; didn't make the cut once No
  Mercy, Maze of Ith, Wrath, Remora, and Absorb were locked as the five.
- Vampiric Tutor, Enlightened Tutor — would meaningfully raise the odds of
  finding No Mercy on schedule, but each would cost one of the five rare slots
  currently doing double duty as removal/card draw.
- Lyra Dawnbringer — a much better top-end finisher than Serra Angel, held back
  purely by the rare cap.
- Isolated Chapel, Gemstone Mine — better fixing than what's in the final 17
  lands, but both are rares and the budget was already spent on spells.

**Uncommons a tier below the chosen includes:**
- Faceless Butcher — clean exile removal, but at {2}{B}{B} it doubles the
  deck's double-black demand for a splash color; cut to keep the B commitment
  to just No Mercy + Terror.
- Damping Sphere — a real Stax piece, but its tax effect cuts both ways and
  doesn't target creatures at all; less directly useful than Icy Manipulator
  here.
- Confiscate — a powerful Control Magic effect, but 6 mana is clunky in a deck
  this removal-dense.
- Momentary Blink — flexible utility, but nothing in the final 40 wants an ETB
  reset badly enough to earn the slot.

**Sideboard-consideration cards:**
- Orim's Thunder — the only artifact/enchantment answer in White, but its
  color_identity includes R (kicker cost), which fails the strict WU(B)
  identity check even though its base cost is castable off {2}{W} alone. This
  leaves the deck with no answer to opposing artifacts/enchantments — a real,
  acknowledged gap.
- Spirit Link — considered as a lifegain aura, but it falls off Wall of Junk
  the moment the wall bounces itself, killing the synergy.
- A second Voice of All or Circular Logic — both flexible enough to justify a
  2nd copy in a slower metagame; held at 1 to make room for matchup-specific
  tech.

## MANA AUDIT: PASS
```
Land count: 17 (recommended 16) — PASS
Ramp count: 0
Avg CMC (nonland): 2.70
Pip demand: W 11, U 12
Land color production: W 9, U 10, B 7
Color balance: PASS (W gap -5.1pp, U gap -6.6pp — both oversupplied)
Splash check (B): 3 splash cards, 3 required sources, 7 actual — PASS
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each — verified, no violations
[PASS] Rares/mythics <= 1 copy each — verified, no violations
[PASS] Max 5 rares/mythics total (main + sideboard) — exactly 5/5:
       No Mercy (M), Wrath of God (R), Absorb (R), Mystic Remora (R),
       Maze of Ith (R). Sideboard: 0 rares/mythics.
[PASS] All cards verified present in cube pool by exact name
```
