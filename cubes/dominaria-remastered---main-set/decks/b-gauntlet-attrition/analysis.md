---
deck_name: "b-gauntlet-attrition"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "B"
format: "40-card"
built_at: "2026-07-10T19:59:50Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
16x Swamp
```
All-basic by design — Gauntlet of Power's mana-doubling only triggers off basic lands.

### CREATURES (12)
```
CMC  Card                       Qty  Color  Role                                Rar
  1  Festering Goblin           x1   B      Sac fodder, minor removal on death  C
  2  Wretched Anurid            x1   B      Efficient 3/3 beater*               C
  2  Nantuko Shade              x1   B      Premier firebreathing mana sink     R
  3  Royal Assassin             x1   B      Repeatable removal engine           R
  3  Phyrexian Rager            x2   B      Card advantage body                 C
  3  Urborg Syphon-Mage         x1   B      Repeatable drain + discard outlet   C
  3  Undead Gladiator           x1   B      Resilient recursive zombie threat   U
  4  Cackling Fiend             x2   B      Discard disruption + on-curve body  C
  4  Yawgmoth, Thran Physician  x1   B      Sac engine + repeatable removal     M
  6  Necrosavant                x1   B      Recursive big-body finisher         U
```
\*Wretched Anurid loses you 1 life whenever any creature enters, including its own deck's Zombie Infestation tokens.

### INSTANTS & SORCERIES (9)
```
CMC  Card              Qty  Color  Role                                 Rar
  1  Howl from Beyond  x2   B      X-spell mana sink pump               C
  1  Vampiric Tutor    x1   B      Consistency: finds Gauntlet/answers  M
  2  Terror            x2   B      Efficient removal                    C
  2  Chainer's Edict   x2   B      Edict removal w/ flashback           U
  6  Dark Withering    x2   B      Hard removal, madness-discountable   U
```

### OTHER SPELLS (3)
```
CMC  Card                Qty  Color  Role                             Rar
  2  Zombie Infestation  x1   B      Repeatable threat gen + discard  U
  2  Mind Stone          x1   C      Maindeck ramp toward top end     C
  5  Gauntlet of Power   x1   C      Archetype anchor (symmetric)     M
```

## SIDEBOARD (10)
```
Card                 Qty  Color  Role / When to board in                 Rar
Duress               x1   B      Disruption vs Combo/Control             C
Ichor Slick          x2   B      Flexible removal vs Aggro/Tokens        C
Phyrexian Debaser    x1   B      Flying blocker + sac removal vs Fliers  C
Phyrexian Scuta      x1   B      Efficient body vs grindy matchups       U
Urborg Uprising      x1   B      Recursion + draw vs attrition/Control   C
Street Wraith        x1   B      Evasive threat vs mirror + free cycler  C
Hyalopterous Lemure  x1   B      Flex evasive threat                     C
Twisted Experiment   x1   B      Pseudo-removal vs X/1 toughness         C
Tormod's Crypt       x1   C      Graveyard hate                          U
```

## ANALYSIS

This is a removal-dense black midrange deck built around a Zombie/sacrifice-value subtheme (Cackling Fiend, Necrosavant, Undead Gladiator, Zombie Infestation, Urborg Syphon-Mage) that grinds toward the midgame, where Nantuko Shade and Howl from Beyond convert Gauntlet of Power's doubled Swamp mana directly into damage. Yawgmoth, Thran Physician is the sacrifice-engine finisher, and Vampiric Tutor provides consistency by finding Gauntlet or whatever answer the matchup calls for.

**Important caveat on Gauntlet of Power: it is symmetric.** Its oracle text reads "Creatures of the chosen color get +1/+1" and "Whenever a basic land is tapped for mana of the chosen color, its controller adds an additional one mana of that color" — neither clause is restricted to "you control." It boosts *any* player's black creatures and basic Swamps, not just this deck's. In this cube's 1v1 constructed context that's a minor risk (only relevant if the opponent also plays black basics), but it's a real property of the card that a "your payoff" framing would misstate.

**Self-grill revisions applied:** The Challenger agent flagged three real gaps in the first draft. (1) Zero maindeck ramp despite Mind Stone sitting legally available and unused in the pool — added it, cutting Phyrexian Ghoul (a mana-*free* pump ability that contributed nothing to the "spend extra mana" plan, just Zombie glue). (2) No graveyard hate anywhere in the 50-card bundle, a real gap given this deck's own graveyard density (madness, flashback, Necrosavant reanimation) invites graveyard mirrors — added Tormod's Crypt to the sideboard, trimming Phyrexian Scuta from x2 to x1 (the Challenger's own pick for "most replaceable" slot). (3) The Gauntlet symmetry above — kept the card as the named archetype anchor, but framed honestly rather than as a one-sided upside.

**Honest framing on "big mana":** this deck's actual payoff package for spending extra mana is thin — just Nantuko Shade and Howl from Beyond. Most of the deck's power comes from an efficient removal suite (7 removal/edict spells: Terror x2, Chainer's Edict x2, Royal Assassin, Dark Withering x2) and Zombie/sacrifice value, not from mana sinks. It plays more like a removal-forward midrange/attrition deck with a Gauntlet-of-Power accent than a true ramp-into-payoffs strategy — closer to Control-Midrange than pure Midrange by ratio (nearly half the nonland slots are reactive/disruptive rather than proactive threats).

**Madness/discard synergy:** Urborg Syphon-Mage, Undead Gladiator, and Zombie Infestation all discard cards as a cost, which turns on Dark Withering's Madness {B} — a real (if secondary) engine inside the removal suite.

### Cards Considered but Excluded

- **Rares/mythics cut by the 5-card cap:** Entomb, Oversold Cemetery, Body Snatcher, Mindslicer, No Mercy, Chainer, Dementia Master. Two are notable misses flagged during the grill as stronger synergy fits than at least one current inclusion, blocked only by the cap: Mindslicer (symmetric hand-discard ETB, would pair with the deck's dense madness/discard-outlet package) and Oversold Cemetery (would have been a strong recursive engine alongside Necrosavant/Undead Gladiator).
- **Uncommons/commons a tier below the cut:** Flesh Reaver (self-damage backlash risk in a race), Nightscape Familiar (its cost reduction only applies to blue/red spells, irrelevant in mono-black), Goblin Turncoat (needs more Goblins than this list runs), Evil Eye of Orms-by-Gore (initially considered for the sideboard, but its text locks down the *controller's own* other creatures from attacking — a trap for a deck with this many other attackers, not opponent-facing hate).
- **Sideboard-consideration cards not included:** Body Snatcher and Oversold Cemetery (both rare, cap-blocked); Twisted Experiment's aggressive alternative Seton's Desire-style auras were considered but cut for being too narrow.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.92   Ramp cards: 0 (tool doesn't tag Mind Stone as "ramp" by exact-string match — functionally it is)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons <=2 copies each:        PASS
Rares/mythics <=1 copy each:              PASS
Total rares/mythics (main+SB) <=5:        PASS (5/5 - Royal Assassin, Nantuko Shade,
                                            Yawgmoth Thran Physician, Vampiric Tutor,
                                            Gauntlet of Power; 0 in sideboard)
```
