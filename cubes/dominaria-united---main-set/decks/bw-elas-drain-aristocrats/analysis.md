---
deck_name: "bw-elas-drain-aristocrats"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-07-11T02:29:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

# BW Drain Aristocrats (Elas il-Kor/Aron)

White-black aristocrats midrange that wins without ever needing a big attack: Elas il-Kor, Sadistic Pilgrim converts every entering body into life and every dying body into opponent life loss, while Aron, Benalia's Ruin turns expendable creatures into permanent team-wide +1/+1 counters. Multi-body cards (Resolute Reinforcements, kicked Phyrexian Warhorse) double every trigger, Braids, Arisen Nightmare grinds card advantage from the same fodder, and Ratadrabik of Urborg turns the deck's dying legends into non-legendary 2/2 Zombie copies that keep the engine running.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
 7x Plains
 6x Swamp
 2x Sunlit Marsh          WB dual, enters tapped
 1x Caves of Koilos       WB painland (rare)
```

### CREATURES (18)
```
CMC  Card                          Qty   Color  Role                                        Rar
  1  Cult Conscript                x2    B      Recursive fodder                            U
  2  Elas il-Kor, Sadistic Pilgrim x2    WB     Keystone: drain on death, gain on ETB       U
  2  Benalish Sleeper              x2    W      Fodder body + kicked edict removal          C
  2  Phyrexian Vivisector          x2    B      Death-trigger scry engine                   C
  2  Resolute Reinforcements       x2    W      Flash two bodies: ETB gain + sac fuel       U
  2  Shadow-Rite Priest            x1    B      Cleric anthem + sac-to-tutor black creature R
  2  Phyrexian Missionary          x1    W      Lifelink Cleric; kicked: recur Elas/Aron    U
  3  Aron, Benalia's Ruin          x2    WB     Sac outlet: team-wide +1/+1 counters        U
  3  Braids, Arisen Nightmare      x1    B      End-step sac engine / card advantage        R
  4  Phyrexian Warhorse            x2    B      Kicked token maker + repeatable sac outlet  C
  4  Ratadrabik of Urborg          x1    WB     Legendary-death payoff: zombie copies       R
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                          Qty   Color  Role                                        Rar
  1  Bone Splinters                x2    B      Removal / sacrifice outlet                  C
  1  Cut Down                      x2    B      Cheap removal                               U
```

### OTHER SPELLS (2)
```
CMC  Card                          Qty   Color  Role                                        Rar
  3  Citizen's Arrest              x2    W      Catch-all exile removal                     C
```

## SIDEBOARD (10)
```
Card                      Qty   Color  Role / When to board in                       Rar
Pilfer                    x2    B      Discard vs control/combo                      C
Extinguish the Light      x2    B      Unconditional removal vs big threats          C
Destroy Evil              x2    W      Enchantment removal / big-toughness answer    C
Prayer of Binding         x1    W      Flash catch-all exile vs bombs                U
Battle-Rage Blessing      x1    B      Protect Elas/Aron from removal                C
Anointed Peacekeeper      x1    W      Tax key spell vs control/combo (also Cleric)  R
Gibbering Barricade       x1    B      Cheap repeatable sac outlet + wall vs aggro   C
```

## ANALYSIS

**The legend-rule trick is a feature, not a bug.** The deck runs two copies each of Elas il-Kor and Aron on purpose: with Ratadrabik of Urborg out, casting the second copy forces the legend rule, the old copy dies — draining opponents via Elas — and Ratadrabik replaces it with a non-legendary 2/2 Zombie copy that keeps its abilities. Two Elas effects draining in parallel ends games fast. The same works when Braids sacrifices a legend at end step.

**Trigger accounting:** 18 creature cards produce roughly 24 bodies (Resolute Reinforcements and kicked Phyrexian Warhorse bring a friend, and Missionary/Conscript recur). With Elas out, every body is 1 life on entry and 1 opponent life on exit — before Aron even converts a death into counters. A single Aron activation with five creatures out is +5/+5 of permanent stats for one fodder body.

**Benalish Sleeper kicked is a drain-positive edict:** you choose your own worst creature (triggering Elas), they lose their best of a choice — and a 3/1 body remains.

**Braids picks up the card-advantage slack:** the deck floods fodder faster than it can spend it on Aron; Braids's end step converts the excess into "each opponent sacrifices or you draw + they lose 2," stacking with Elas drains on your own sacrificed body.

**Shadow-Rite Priest is a toolbox at 2:** the anthem covers Elas, Missionary and boarded Anointed Peacekeeper; its late-game sac line (sacrifice a spare Cleric with Ratadrabik out) fetches any black creature — usually the second Elas or Ratadrabik itself.

**Curve note:** the deck tops out at 4 MV (avg 2.21). It cannot out-size opponents — it must out-value them. Keep bodies flowing and let the drains accumulate; against sweepers, Cult Conscript and Missionary rebuild for free.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap:**
- The Cruelty of Gix — was the fifth rare until the grill promoted Braids to the mainboard; still the best grind sideboard card if you'd rather have it than Anointed Peacekeeper.
- Liliana of the Veil — excellent here too (edicts + attrition), but the engine rares (Braids, Ratadrabik, Priest) plus the painland won the slots.
- Defiler of Faith — a 5/5 vigilance that manufactures a Soldier on every white permanent spell; the strongest single card that didn't fit, cut on curve height plus the cap.
- Serra Paragon — recurs Elas/Aron/Conscript from the graveyard every turn; premium in slower metas.
- Temporary Lockdown — deliberately excluded even from the sideboard: it exiles the deck's own sub-2-MV board.
- Sheoldred, the Apocalypse — raw power, no pipeline text.

**Strong uncommons a tier below the includes:**
- Argivian Cavalier — cut at the grill for Phyrexian Missionary + Braids; first card back in if you want a 25th body.
- Sheoldred's Restoration — kicked reanimation with lifegain; competes with Ratadrabik at 4.
- Wingmantle Chaplain / Sengir Connoisseur — real payoffs for adjacent (defender / counters) builds of this archetype.
- Samite Herbalist, Knight of Dawn's Light — lifegain-adjacent bodies without death text.

**Sideboard-consideration cards:** Toxic Abomination (raw fodder), Mesa Cavalier (flying body + life vs aggro), Take Up the Shield (protect Aron mid-activation chain).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.21   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  52.9%  prod  56.2%  gap  -3.3pp  [OK]
  W  demand  47.1%  prod  62.5%  gap -15.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] All cards from cube mainboard pool (verified vs working pool; basics exempt)
[PASS] Commons/uncommons <= 2 copies each (checked across main + sideboard)
[PASS] Rares/mythics <= 1 copy each
[PASS] Max 5 rares/mythics total: exactly 5 (Braids, Arisen Nightmare; Ratadrabik of
       Urborg; Shadow-Rite Priest; Caves of Koilos; Anointed Peacekeeper)
[PASS] All color identities within B/W
[PASS] Mana audit PASS (16 lands, color balance OK)
```
