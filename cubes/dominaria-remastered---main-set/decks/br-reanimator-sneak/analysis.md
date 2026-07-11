---
deck_name: "br-reanimator-sneak"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-10T02:12:18Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (26 spells + 14 lands = 40)

### LANDS (14)
```
  2x Geothermal Bog
  2x Mountain
  2x Polluted Mire
  1x Smoldering Crater
  6x Swamp
  1x Terminal Moraine
```

### CREATURES (12)
```
CMC  Card                      Qty  Color  Role                      Rar
  2   Millikin                   x2   C     Mana rock / self-mill     U
  3   Undead Gladiator           x2   B     Looting / recursion       U
  4   Flametongue Kavu           x1   R     Removal / ETB payoff      U
  4   Phyrexian Scuta            x1   B     Kicked big payoff         U
  5   Chainer, Dementia Master   x1   B     Reanimation engine / payoff R
  5   Street Wraith              x2   B     Cycling draw / GY fodder  C
  6   Shivan Dragon              x1   R     Big flying payoff         R
  7   Macetail Hystrodon         x2   R     Haste first-strike payoff C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                      Qty  Color  Role                      Rar
  1   Duress                     x2   B     Hand disruption           C
  1   Entomb                     x1   B     Graveyard tutor           R
  1   Gamble                     x1   R     Tutor / discard outlet    R
  2   Chainer's Edict            x1   B     Edict removal             U
  2   Terror                     x2   B     Creature removal          C
  4   Dread Return               x2   B     Reanimation spell         U
```

### OTHER SPELLS (5)
```
CMC  Card                      Qty  Color  Role                      Rar
  2   Mind Stone                 x2   C     Mana rock / card draw     C
  2   Zombie Infestation         x2   B     Discard outlet / token engine U
  4   Sneak Attack               x1   R     Cheat engine              M
```

## SIDEBOARD (10)
```
Card                      Qty  Color  Role / When to board in     Rar
Tormod's Crypt             x2   C     Graveyard hate               U
Damping Sphere             x2   C     Storm / combo hate           U
Wall of Junk               x2   C     Defensive blocker            U
Faceless Butcher           x2   B     Exile removal                U
Phyrexian Debaser          x2   B     Removal / sac outlet         C
```

## ANALYSIS

**Slot-allocation rationale.** The deck is classified as Combo/Reanimator. Lands are 14 (35% of 40) — on the lean end, but four ramp pieces (Mind Stone x2, Millikin x2) effectively lower the curve and the audit accepts this as PASS. Engine & infrastructure density is high because every reanimation spell, tutor, discard outlet, and ramp piece is part of the combo chain. Payoff density is intentionally pushed above the baseline Combo range because Sneak Attack and Dread Return are dead without a creature target; Shivan Dragon, Macetail Hystrodon, Phyrexian Scuta, and Flametongue Kavu give enough bodies. Interaction is a competitive 5 cards: Duress protects the combo, Terror and Chainer's Edict clear blockers or hatebears.

**Key play patterns.** Turn-one Entomb or Gamble sets up a turn-two Mind Stone / Millikin into a turn-three or -four Sneak Attack or Dread Return. Zombie Infestation tokens double as chump blockers and Dread Return flashback fuel. Chainer provides a repeatable reanimation angle that does not require the creature to be in hand. Macetail Hystrodon is especially strong when Sneaked because haste + first strike lets it attack immediately for 6 damage.

**Cards Considered but Excluded.** Rare/mythic slots were the tightest constraint. Worldgorger Dragon was cut because, without Animate Dead or another repeatable reanimation aura, it is mostly a board-clearing 7/7 rather than a game-ending combo. Vampiric Tutor and Mindslicer were strong mono-black candidates but lost to the BR engine pieces. Shivan Dragon took the last rare payoff slot over Siege-Gang Commander. Among uncommons, Necrosavant and Body Snatcher are excellent reanimator cards but were omitted to make room for red payoffs and the Sneak Attack package; they are prime swap candidates if you want more grind. Dragon Whelp was in an earlier draft but replaced by Phyrexian Scuta after the grill gate noted the Whelp's small body and RR cost. Sideboard-consideration cards not included: Ichor Slick (cheap removal), Cackling Fiend (hand disruption on a body), and Mishra's Factory (manland).

## MANA AUDIT: PASS
```
Land Count: 14 / 15 recommended [PASS]
Avg CMC: 3.19   Ramp cards: 4
Color Balance (core): [PASS]
  B  demand 76.7%  prod 71.4%  gap +5.3pp  [OK]
  R  demand 23.3%  prod 35.7%  gap -12.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Base: cube_mainboard — PASS
Commons/uncommons max 2 copies — PASS
Rares/mythics max 1 copy — PASS
Max 5 rares/mythics total — PASS (5/5)
All cards in working pool — PASS
```