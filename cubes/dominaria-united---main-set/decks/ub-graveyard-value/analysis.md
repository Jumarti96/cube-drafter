---
deck_name: "ub-graveyard-value"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-11T16:34:38Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
 3x Island
 9x Swamp
 2x Contaminated Aquifer     UB dual (typed Island Swamp), enters tapped
 2x Crystal Grotto           Scry 1 on ETB; {T}: {C} or {1},{T}: any color
```

### CREATURES (14)
```
CMC  Card                        Qty   Color  Role                                      Rar
  1  Cult Conscript              x2    B      Recursive 1-drop; rebuys from yard        U
  2  Vohar, Vodalian Desecrator  x1    UB     Loot engine — fills yard every turn       U
  3  Eerie Soultender            x2    B      Mill 3 on ETB; yard-exile rebuys creature C
  3  Phyrexian Rager             x2    B      Card advantage body / premium sac fodder  C
  3  Braids, Arisen Nightmare    x1    B      Sac engine — fodder into cards + drain    R
  4  Talas Lookout               x1    U      Flyer; death fills hand + yard            C
  4  Monstrous War-Leech         x2    B      Payoff — kicked mill 4; P/T = top MV      U
  4  Sheoldred, the Apocalypse   x1    B      Standalone bomb; stabilizes attrition     M
  7  Writhing Necromass          x2    B      Payoff — {1} less per creature in yard    C
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                        Qty   Color  Role                                      Rar
  1  Bone Splinters              x2    B      Removal; sacrifice feeds the yard         C
  1  Cut Down                    x2    B      Cheap removal                             U
  2  Tribute to Urborg           x1    B      Early removal; kicked scales late         C
  3  Phyrexian Espionage         x1    U      Draw 2; kicked adds discard               C
  4  Extinguish the Light        x2    B      Hard removal for big threats              C
```

### OTHER SPELLS (2)
```
CMC  Card                        Qty   Color  Role                                      Rar
  3  Liliana of the Veil         x1    B      Attrition engine; our discards are fuel   M
  5  The Cruelty of Gix          x1    B      Discard / tutor / reanimate a finisher    R
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                       Rar
Pilfer                      x2    B      Strip bomb/sweeper vs control                 C
Tribute to Urborg           x1    B      Extra cheap removal vs aggro                  C
Battle-Rage Blessing        x1    B      Protect Sheoldred/Necromass vs removal        C
Braids's Frightful Return   x2    B      Sac saga: discard + creature rebuy vs grind   U
Gibbering Barricade         x2    B      0/4 wall vs aggro; sac outlet for value       C
Drag to the Bottom          x1    B      -3/-3 sweeper vs go-wide (domain capped at 2) R
Essence Scatter             x1    U      Counter an opposing bomb creature             C
```

## ANALYSIS

**What this deck actually is.** The grill relabeled it honestly: **graveyard-value midrange**, not pure "creature-count self-mill." The pool's only true creature-count payoffs are Writhing Necromass and Urborg Lhurgoyf — and Lhurgoyf (the archetype's nominal keystone) is *unplayable in UB*: its mana cost is {1}{G}, putting green in its color identity. What remains is a dense black attrition deck where every creature either replaces itself, wants to die, or gets cheaper because others died.

**The value loop.** Eerie Soultender mills three on entry; Talas Lookout converts death into selection plus a yard deposit; Bone Splinters and Braids turn spent bodies (Rager, Conscript) into removal and card draw; Liliana's symmetric +1 is asymmetric here because our discarded creatures grow Necromass's discount and War-Leech's ceiling. Cult Conscript is the deck's second hand — it returns from the yard for {1}{B} any turn another non-Skeleton creature died, which in this deck is most turns.

**Payoff math, with the honest caveat.** Necromass counts creature *quantity*: with 14 mainboard creatures (~35% density), each mill-3 averages one creature card, and trades/sacs add more — a {2–3}{B} 7/7 deathtouch by the midgame is the realistic norm. War-Leech reads a different number, greatest *mana value*: it's a 7/7 only once a Necromass (MV 7) or Cruelty of Gix (MV 5) hits the yard, otherwise a 3/3–4/4. Know the tension the grill flagged: reanimating Necromass with Cruelty chapter III *removes* the 7 from the yard and shrinks the Leech — sequence the payoffs deliberately.

**Grill fixes applied.** The Challenger approved with changes, all adopted: 1 Talas Lookout → 1 Vohar (Talas's {2}{U}{U} had only ~66% castability by turn 4 on the old 8-source blue base — the deck's worst mana failure; Vohar's single U+B pips are trivially castable and his loot is the pool's best yard-filler); 1 Phyrexian Espionage → 1 mainboard Tribute to Urborg (interaction was 17.5%, below the 20–30% midrange band; now 20%); the second Battle-Rage Blessing (weakest sideboard slot) → Braids's Frightful Return ×2; and 1 Island → 1 Swamp to close the black production gap (+12.5pp WARN → +6.3pp PASS).

**Play patterns.** Mulligan hands with no turn-1/2 action unless they hold double removal. Skip Cruelty of Gix to chapter III in the mid-game when a fatty is already binned; start at chapter I only against control. Braids wants a death-trigger creature (Talas) or a recursive one (Conscript) on the end step — never sacrifice a fresh Rager to her without a reason. Sheoldred plus Rager/Espionage draws is the stabilization line against aggro.

**Weak points to know about.** The two-drop slot is thin (Vohar, one Tribute); turns 1–2 are mostly reactive. Bone Splinters is dead with an empty board. The deck's failure mode is speed, not synergy — a fast start with evasion outraces the value loop, which is what the sideboard walls and sweeper are for.

### Cards Considered but Excluded

**Rejected on legality:**
- Urborg Lhurgoyf (R) — the archetype context's keystone, but {1}{G} in the mana cost means a BGU color identity. Not UB-legal, and it fails the splash rule (its roles are Standalone Threat/Enabler, not Payoff/Engine).

**Rares/mythics cut by the 5-card limit:**
- Ertai Resurrected (R) — flash interaction on a body; premium, but the budget went to engine mythics (Liliana, Sheoldred) that this grind shell leverages better.
- Evolved Sleeper (R) — scaling 1-drop mana sink; good but off-plan (no yard synergy).
- Tyrannical Pitlord (R) — win-more 6-drop that risks two-for-one-ing yourself.
- Shadow-Rite Priest (R) — Cleric tutor engine with only Soultender as another Cleric.
- The Raven Man (R) — discard payoff without a dedicated discard shell (only Liliana triggers it reliably).

**Uncommons that are strong fits, a tier below the includes:**
- Sengir Connoisseur — 5-mana flier that grows on deaths; the last cut for the Sheoldred slot-adjacent role.
- Braids's Frightful Return — mainboard candidate; landed in the sideboard where its grindy chapters shine post-board.
- Knight of Dusk's Shadow — solid beater, zero graveyard text.
- Coral Colony / Blight Pile — the defender package is too thin here (2–3 defenders) to power either.

**Sideboard considerations that missed the cut:**
- Battle-Rage Blessing #2 — cut by the grill as the weakest slot.
- Phyrexian Vivisector — scry-on-death is real but too marginal for a 10-card board.
- Toxic Abomination / Splatter Goblin — extra cheap fodder if the aggro matchups dominate; swap in for Pilfer copies.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.08   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  87.5%  prod  81.2%  gap  +6.3pp  [OK]
  U  demand  12.5%  prod  43.8%  gap -31.3pp  [OK]

Pip demand: 28 B / 4 U. Sources: 13 B / 7 U of 16 lands.
Optional kicker pips (War-Leech {U}, Espionage {1}{B}, Tribute {1}{U}) uncounted.
```

## RESTRICTIONS COMPLIANCE
```
[PASS] commons/uncommons max 2 copies each (main+side combined) — max observed 2
       (Tribute to Urborg: 1 main + 1 side = 2, common)
[PASS] rares/mythics max 1 copy each — Liliana of the Veil, Sheoldred the Apocalypse,
       Braids Arisen Nightmare, The Cruelty of Gix, Drag to the Bottom all x1
[PASS] max 5 rares/mythics total across main+side — exactly 5 (4 main + 1 side; 2 mythics)
[PASS] all cards from cube mainboard — verified by exact name against working pool
[PASS] color identity within UB — Urborg Lhurgoyf rejected during build for G identity
[PASS] challenger verification — APPROVE-WITH-CHANGES; all four recommendations applied
       (Vohar swap, mainboard Tribute, sideboard Braids's Frightful Return x2, land rebalance)
```
