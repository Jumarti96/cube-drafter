---
deck_name: "br-yawgmoth-value-sacrifice"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-09T21:31:43Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  11x Swamp
  3x  Mountain
  2x  Geothermal Bog        BR dual, enters tapped
```

### CREATURES (18)
```
CMC  Card                       Qty   Color  Role                              Rar
  1  Skirk Prospector           x2    R      Cheap sac outlet / ritual         C
  1  Festering Goblin           x2    B      Fodder + death-trigger removal    C
  2  Mogg War Marshal           x2    R      Fodder generator (2 bodies)       C
  3  Phyrexian Ghoul            x2    B      Sac outlet / finisher pump        C
  3  Urborg Syphon-Mage         x2    B      Discard/drain outlet              C
  3  Phyrexian Rager            x1    B      Card-neutral fodder               C
  3  Pyre Zombie                x1    BR     Recurring outlet / reach          R
  4  Yawgmoth, Thran Physician  x1    B      Central engine — sac + removal + draw  M
  4  Mindslicer                 x1    B      Disruption death-trigger payoff   R
  4  Phyrexian Debaser          x2    B      Removal + fodder                  C
  5  Siege-Gang Commander       x1    R      Top-end payoff — tokens + reach   R
  6  Necrosavant                x1    B      Recursive top-end threat          U
```

### INSTANTS & SORCERIES (2)
```
CMC  Card                       Qty   Color  Role                              Rar
  2  Chainer's Edict            x1    B      Forced-sac removal, flashback     U
  4  Dread Return                x1    B      Reanimation payoff                U
```

### OTHER SPELLS (4)
```
CMC  Card                       Qty   Color  Role                              Rar
  2  Oversold Cemetery          x1    B      Recursion engine — rebuys fodder  R
  2  Zombie Infestation         x2    B      Token engine / discard outlet     U
  3  Deadapult                  x1    R      Reach sac outlet (Zombie synergy) U
```

## SIDEBOARD (10)
```
Card                       Qty   Color  Role / When to board in           Rar
Tormod's Crypt             x1    C      Vs. opposing graveyard/reanimator decks  U
Flametongue Kavu           x2    R      Vs. bigger creatures, removal-light matchups  U
Duress                     x2    B      Vs. control / combo                U
Terror                     x2    B      Vs. aggro, extra removal density   C
Slice and Dice             x1    R      Vs. token swarm / go-wide aggro     U
Dark Withering             x1    B      Flex removal, Madness pairs w/ discard outlets  U
Faceless Butcher           x1    B      Flex tempo removal on a body        U
```

## ANALYSIS

**The engine loop.** Yawgmoth needs bodies, and this deck has five distinct
sacrifice outlets that can feed him for free or near-free (Phyrexian Ghoul x2,
Phyrexian Debaser x2, Skirk Prospector x2, Necrosavant's own activation, Dread
Return's flashback). 18 of the 24 nonland cards are creatures, so hitting
Oversold Cemetery's four-creatures-in-graveyard threshold is easy through
ordinary combat trades alone — the two discard outlets (Zombie Infestation,
Urborg Syphon-Mage) accelerate it further by letting you post creatures to
the yard directly from hand when flooded.

**Fodder that never whiffs.** Every cheap creature in the curve leaves something
behind when it dies: Festering Goblin gives -1/-1, Mogg War Marshal makes a
second Goblin token (even on its own death, from the "enters or dies" clause),
and Phyrexian Debaser converts itself into -2/-2 removal. That means Yawgmoth
sacrifices are rarely a pure loss of board presence — you're trading a card
for a card's worth of value on top of the counter and the draw.

**Double-red tension (flagged in grill).** Siege-Gang Commander's activated
ability costs {1}{R} and Pyre Zombie's sac-for-damage line costs {1}{R}{R} —
the only two double-red demands in the deck — against just 5 red sources (2
Geothermal Bog + 3 Mountain) in a 74/26 B/R manabase. Both cards are fully
castable off a single red source; it's specifically the red-hungry activated
abilities that will sometimes sit unusable. Skirk Prospector's Goblin-sac-for-R
ability is the built-in release valve for this — sac a spare Goblin token to
turn on Siege-Gang Commander's ping even without a second red source in play.

**Mindslicer sequencing.** Mindslicer is symmetrical — sac or trade it away
while you're still holding a full grip and you can lose the exchange. It wants
to die after Zombie Infestation or Urborg Syphon-Mage has already thinned your
hand, or when you're already ahead on board and a mutual wipe favors you.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:** The deck is built at the full 5-rare/
mythic ceiling (Yawgmoth, Oversold Cemetery, Siege-Gang Commander, Pyre
Zombie, Mindslicer), so every other rare/mythic in the Aristocrats/Sacrifice
slice had to be passed over. The closest cut was Pashalik Mons (R,
"Whenever Pashalik Mons or another Goblin you control dies, deals 1 damage to
any target; {3}{R}, Sacrifice a Goblin: create two Goblins") — it triggers off
every Goblin death in this list (Mogg War Marshal tokens, Skirk Prospector,
Siege-Gang tokens, Festering Goblin is a Zombie Goblin) and is arguably a
tighter fit than Mindslicer for this specific build. If you want to try it,
swap it in for Mindslicer directly — same rarity, no cap impact. Other rares
considered and passed over: Body Snatcher, Chainer, Dementia Master,
Worldgorger Dragon (all strong but push the deck toward a straight
reanimator plan rather than the sac-engine plan), Grim Lavamancer and
Royal Assassin (generically good but no Aristocrats tie-in), Vampiric
Tutor and Entomb (better suited to a combo-reanimator build than this
grindy value shell).

**Uncommons a tier below the chosen includes:** Goblin Turncoat (B common,
sac a Goblin to regenerate) is on-theme but lower-impact than the fodder
already in the 75. Gempalm Incinerator and Goblin Matron support the
Goblin sub-theme but aren't tagged Aristocrats/Sacrifice specifically and
compete with Deadapult/Skirk Prospector for a similar role. Ichor Slick
was close competition for the sideboard removal slots ultimately given to
Dark Withering/Terror.

**Sideboard-consideration cards not included:** Wall of Junk (pure defensive
brake, doesn't generate sac fodder or die for value — off-plan for this
deck's philosophy), Icy Manipulator and Damping Sphere (colorless
utility/tax effects, considered for control/combo matchups but Duress covers
that lane more proactively), Solar Blast and Spark Spray (extra burn,
redundant with Flametongue Kavu/Terror already in the 10).

**Pilot notes on the sideboard.** Slice and Dice is a symmetrical sweeper —
this deck's own board is full of 1- and 2-toughness Goblin/Zombie tokens, so
it should only come in when you're specifically racing a faster go-wide deck
and can afford to reset the board (or just cycle it). Faceless Butcher has the
classic anti-synergy with a sacrifice-heavy shell: sac your own Butcher to
Yawgmoth or Phyrexian Ghoul and the exiled opposing creature comes back —
worth remembering in-game, not a reason to cut it from the 75.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  74.2%  prod  81.2%  gap  -7.0pp  [OK]
  R  demand  25.8%  prod  31.2%  gap  -5.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons — no card exceeds 2 copies (main+SB combined)
[PASS] Rares/mythics — each of the 5 (Yawgmoth, Oversold Cemetery,
       Siege-Gang Commander, Pyre Zombie, Mindslicer) appears exactly once
[PASS] Max 5 rares/mythics total across main+sideboard — exactly 5, all in
       mainboard, 0 in sideboard (at the cap, no headroom remaining)
```
