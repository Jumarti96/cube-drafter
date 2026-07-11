---
deck_name: "b-aristocrats"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "B"
format: "40-card"
built_at: "2026-07-09T21:58:53Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
14 Swamp
2  Polluted Mire          Tapped B source, cycles late
```

### CREATURES (13)
```
CMC  Card                    Qty   Color  Role                           Rar
  1  Festering Goblin        x2    B      Fodder / -1/-1 removal         C
  3  Phyrexian Rager         x2    B      Card draw / Fodder             C
  3  Phyrexian Ghoul         x2    B      Sac outlet / Threat            C
  3  Urborg Syphon-Mage      x1    B      Discard outlet / Drain wincon  C
  3  Undead Gladiator        x1    B      Graveyard value / Fodder       U
  4  Phyrexian Debaser       x1    B      Removal / Fodder               C
  4  Faceless Butcher        x1    B      Exile removal                  U
  4  Yawgmoth, Thran Physician x1  B      Sac outlet / Card draw         M
  4  Mindslicer              x1    B      Hand disruption                R
  6  Necrosavant             x1    B      Recursive threat               U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                    Qty   Color  Role                           Rar
  1  Duress                  x2    B      Hand disruption                C
  2  Chainer's Edict         x2    B      Targeted removal               U
  2  Terror                  x1    B      Creature removal               C
  4  Dread Return            x2    B      Reanimation                    U
  6  Dark Withering          x1    B      Hard removal / Madness         U
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                           Rar
  2  Zombie Infestation      x2    B      Token engine                   U
  2  Oversold Cemetery       x1    B      Graveyard recursion            R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in        Rar
Ichor Slick             x2    B      -3/-3 removal                  C
Cackling Fiend          x2    B      Hand attack vs. control        C
Entomb                  x1    B      Graveyard tutor                R
Vampiric Tutor          x1    B      Tutor                          M
Urborg Uprising         x1    B      Graveyard recursion            C
Terror                  x1    B      Extra creature removal         C
Dark Withering          x1    B      Extra hard removal             U
Street Wraith           x1    B      Cycler / Reanimation target    C
```

## ANALYSIS

A grindy Mono-Black Aristocrats Midrange deck built around Yawgmoth, Thran Physician and Oversold Cemetery. The plan is to deploy cheap fodder, sacrifice it for value (Yawgmoth draws cards and removes threats; Phyrexian Ghoul grows; Dread Return reanimates), then recur the pieces with Oversold Cemetery and Necrosavant. Mindslicer provides a one-shot hand wipe once the opponent has more cards than you, and the removal suite keeps the board manageable while the engine comes online.

**Engine loops.** The deck's most powerful loops involve Yawgmoth: pay 1 life and sacrifice a creature to draw a card and shrink an opposing creature. With Zombie Infestation making 2/2 Zombies for two discards, you can convert dead lands into cards via Yawgmoth. Dread Return's flashback (sacrifice three creatures) is a natural payoff for the token plan, letting you reanimate Necrosavant, Yawgmoth, or Mindslicer directly. Oversold Cemetery turns every creature in your graveyard into a recurring resource once you have four there — easy to reach with the amount of self-sacrifice and discard.

**Mindslicer timing.** Mindslicer is a build-around. In this deck you want to dump your hand quickly (Zombie Infestation, cycling Polluted Mire, discarding to Yawgmoth) and then sacrifice Mindslicer to leave the opponent empty while you have a recursive board. It is weak if you play it without a plan, but it can lock games once the engine is active.

**Curve and proportions.** The deck runs 16 lands and an average non-land CMC of 2.92. Six four-drops is at the high end for a 40-card deck, but every four-drop is either removal (Debaser, Butcher, Dark Withering), reanimation (Dread Return), or a payoff (Yawgmoth, Mindslicer), so they pull double duty. The four one-drops (Festering Goblin x2, Duress x2) provide early interaction while the two- and three-drop slots generate value and fodder.

**Cards Considered but Excluded**
- *Rares/mythics cut by the 5-card cap:* Chainer, Dementia Master is a strong reanimator engine but costs 5 mana and competes with Yawgmoth for the mythic/rare slots; Body Snatcher is a clever reanimation creature but Dread Return fills the same role more efficiently; No Mercy is a defensive trump against creature decks but the mythic slot is better spent on Yawgmoth.
- *Uncommons a tier below:* Goblin Turncoat was cut because its sacrifice ability only works on Goblins, while the deck produces Zombie tokens; a second Faceless Butcher and a second Phyrexian Debaser were cut to reduce the four-drop glut even though both are strong.
- *Sideboard considerations:* Howl from Beyond was replaced by Street Wraith because a combat trick is weak in a grind deck; Flesh Reaver was excluded because its self-damage is dangerous in a deck that already pays life to Yawgmoth and Phyrexian Rager.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.92   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Only cards from cube mainboard (working pool)
[PASS] Commons/uncommons max 2 copies each
[PASS] Rares/mythics max 1 copy each
[PASS] Maximum 5 rares/mythics total across mainboard + sideboard (3 main + 2 side = 5)
[PASS] Color identity within mono-B
```
