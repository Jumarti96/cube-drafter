---
deck_name: "bg-nemata-saproling-grind"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BG"
format: "40-card"
built_at: "2026-07-11T08:06:32Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

# BG Nemata Saproling Grind

Black-green removal-dense midrange built around Nemata, Primeval Warden: while she's out, every opposing creature you kill is exiled (incidental graveyard hate) and banks you a 1/1 Saproling, which converts into card draw ({1}{B}, sac two: draw) or combat pumps. Below her, an own-side death engine — Phyrexian Vivisector, Sengir Connoisseur, Quirion Beastcaller, Gibbering Barricade — grinds value from every trade, Braids and Liliana strip resources every turn, and Tyrannical Pitlord closes the game in the air.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
10x Swamp
 4x Forest
 2x Haunted Mire          BG dual, enters tapped
```

### CREATURES (16)
```
CMC  Card                      Qty   Color  Role                                          Rar
  1  Cult Conscript            x2    B      Recursive fodder                              U
  2  Quirion Beastcaller       x1    G      Grows on casts; death distributes counters    R
  2  Phyrexian Vivisector      x2    B      Death-trigger scry engine                     C
  3  Phyrexian Rager           x2    B      Fodder body that replaces itself (ETB draw)   C
  3  Deathbloom Gardener       x2    G      Deathtouch blocker + any-color mana           C
  3  Gibbering Barricade       x1    B      Cheap repeatable sac outlet: draw             C
  3  Uurg, Spawn of Turg       x1    BG     Surveil engine; grows off milled lands        U
  3  Braids, Arisen Nightmare  x1    B      End-step sac engine / card advantage          R
  4  Nemata, Primeval Warden   x1    BG     Keystone: exiles opposing deaths, Saprolings  R
  5  Sengir Connoisseur        x2    B      Death-counter flyer payoff                    U
  6  Tyrannical Pitlord        x1    B      Finisher; LTB rider guarantees death trigger  R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                      Qty   Color  Role                                          Rar
  1  Bone Splinters            x2    B      Removal / sacrifice outlet                    C
  1  Cut Down                  x2    B      Cheap removal                                 U
  2  Tear Asunder              x2    G      Kicked: exile any nonland permanent           U
  4  Extinguish the Light      x1    B      Unconditional removal (feeds Nemata exile)    C
```

### OTHER SPELLS (1)
```
CMC  Card                      Qty   Color  Role                                          Rar
  3  Liliana of the Veil       x1    B      Discard + edicts (edict kills feed Nemata)    M
```

## SIDEBOARD (10)
```
Card                      Qty   Color  Role / When to board in                       Rar
Choking Miasma            x1    B      Sweeper vs go-wide (kicked: keep a counter)   U
Pilfer                    x2    B      Discard vs control/combo                      C
Broken Wings              x2    G      Artifact/enchantment/flyer answer             C
Urborg Repossession       x1    B      Recursion + lifegain vs grind                 C
Tail Swipe                x1    G      Cheap fight removal vs small aggro            U
Snarespinner              x1    G      Anti-flyer wall                               C
Writhing Necromass        x1    B      Cheap fatty vs midrange (GY discount)         C
Battle-Rage Blessing      x1    B      Protect Nemata/Sengir from removal            C
```

## ANALYSIS

**Every removal spell is two cards with Nemata out.** Kill a creature and Nemata's replacement effect exiles it (it never hits their graveyard — free hate against recursion decks) and mints a Saproling. Two kills = {1}{B}: draw a card. Liliana's -2 and Braids's end-step trigger scale this: every opposing sacrifice becomes an exile plus a Saproling.

**Braids and Nemata are a closed value loop.** Braids wants a spare permanent to sacrifice each end step; Nemata manufactures Saprolings out of your removal. Sacrificing a Saproling to Braids turns each dead opposing creature into "opponent sacrifices, or loses 2 and you draw" — and your own sacrificed token still triggers Vivisector and Sengir Connoisseur.

**Know which triggers turn off.** Nemata *exiles* opposing creatures instead of letting them die, so opposing deaths stop feeding Sengir Connoisseur while she's out. Your own creatures still die normally — the Vivisector/Sengir/Beastcaller engine runs entirely on your side of the trades. Tear Asunder exiles directly and never makes a Saproling; it's for problem permanents, not value.

**The deck does not fold to Nemata being answered.** She is one rare copy; the fallback plan is honest BG attrition: seven removal spells plus Liliana and Braids, recursive bodies (Cult Conscript, Phyrexian Rager's replacement draw), and Sengir Connoisseur growing over every trade. Nemata upgrades the engine; she isn't the only engine. Post-board, Battle-Rage Blessing protects her (or Sengir) for one mana.

**Tyrannical Pitlord reads like a drawback and plays like a plan.** Choose a spare Conscript or Rager: you get a 6/6 flying trample plus a 5-power flier immediately. When the Pitlord eventually dies, the chosen creature dies too — triggering Vivisector scries, a Sengir counter, and re-enabling Cult Conscript's return that turn.

**Quirion Beastcaller banks combat math.** With 16 creature spells it grows fast, and sacrificing it to Bone Splinters, Braids or Gibbering Barricade at instant speed moves every counter onto Sengir Connoisseur or Uurg — removal-proof stat compounding.

**Mana note:** pips are 79% black / 21% green and the land base matches (12 B / 6 G sources; +3.8pp black gap, within tolerance). Deathbloom Gardener covers the double-green kicker on Tear Asunder and accelerates Nemata/Pitlord by a turn. Uurg's {B}{B}{G} on turn 3 is the only strained cast.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap:**
- Drag to the Bottom — held a sideboard rare slot until the grill: in two colors it maxes at -3/-3 (Haunted Mire adds no third basic type) and sweeps your own Saprolings; Choking Miasma covers the job at uncommon. Re-add over Choking Miasma only if your meta is all token swarms.
- Sheoldred, the Apocalypse — the alternative to Braids for the fifth slot: symmetry-free grind engine that punishes your own Rager/Barricade draws' life loss too. A defensible swap for Tyrannical Pitlord if you prefer engine over finisher.
- The Cruelty of Gix — tutor/reanimate saga; strong but slow, and Nemata exiling enemy creatures thins its reanimation targets.
- Llanowar Greenwidow / Briar Hydra — green rares that reward domain counts a two-color deck can't deliver.

**Strong uncommons/commons a tier below the includes:**
- Splatter Goblin — cut at the grill for Braids; its -1/-1 death rider is still a fine 24th card if you want a 17th creature.
- Bite Down — cut for Extinguish the Light: fight removal needs a big body you often lack early; Extinguish is unconditional at instant speed.
- Bortuk Bonerattle — 6-MV domain reanimator; with only 2 basic types it usually returns creatures to hand, not battlefield.
- Balduvian Atrocity — BR-identity (kicker {R}); illegal in straight BG, listed so you don't reach for it when iterating.
- Eerie Soultender — mill-3 body that would fuel Uurg/Necromass/Urborg Repossession if you lean harder into the graveyard; the second Phyrexian Rager won on immediate card advantage.
- Toxic Abomination — the fodder slot went to Phyrexian Rager (replaces itself) in a deck this grindy.

**Sideboard-consideration cards:** Battlefly Swarm (evasive chip damage vs empty boards), Hexbane Tortoise (ward body vs spot removal), Floriferous Vinewall (early wall + land smoothing vs aggro), Crystal Grotto (over 1 Swamp for easier green access at negligible cost).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.67   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  78.8%  prod  75.0%  gap  +3.8pp  [OK]
  G  demand  21.2%  prod  37.5%  gap -16.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] All cards from cube mainboard pool (verified vs working pool; basics exempt)
[PASS] Commons/uncommons <= 2 copies each (checked across main + sideboard)
[PASS] Rares/mythics <= 1 copy each
[PASS] Max 5 rares/mythics total: exactly 5 (Nemata, Primeval Warden; Quirion
       Beastcaller; Braids, Arisen Nightmare; Liliana of the Veil; Tyrannical Pitlord)
[PASS] All color identities within B/G
[PASS] Mana audit PASS (16 lands, color balance OK)
```
