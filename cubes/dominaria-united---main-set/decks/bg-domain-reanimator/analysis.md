---
deck_name: "bg-domain-reanimator"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BG"
format: "40-card"
built_at: "2026-07-11T02:27:04Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

# bg-domain-reanimator — BG Domain Reanimator

Black-green attrition midrange that stocks its own graveyard (Eerie Soultender mill, Shadow Prophecy binning, Liliana of the Veil discard, Uurg surveil) and then rebuys the best of it: Bortuk Bonerattle reanimates any creature with mana value at or below your basic land type count, The Cruelty of Gix chapter III reanimates from any graveyard, and Urborg Repossession / Eerie Soultender return cards to hand. Three off-pair typed duals plus Slimefoot's Survey push domain to 4–5, at which point Bortuk returns Sheoldred directly to play and Drag to the Bottom becomes a −5/−5 sweep the recursion package shrugs off.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  5x Swamp
  5x Forest
  2x Haunted Mire            Swamp Forest, enters tapped (core BG)
  1x Contaminated Aquifer    Island Swamp, enters tapped (3rd domain type)
  1x Geothermal Bog          Swamp Mountain, enters tapped (4th domain type)
  1x Radiant Grove           Forest Plains, enters tapped (5th domain type)
  1x Crystal Grotto          Any color + scry 1 (no basic type)
```

### CREATURES (12)

```
CMC  Card                       Qty   Color  Role                                          Rar
  3  Eerie Soultender           x2    B      Mill 3 on ETB; late: exile to rebuy a body     C
  3  Deathbloom Gardener        x2    G      Any-color dork + deathtouch blocker            C
  3  Uurg, Spawn of Turg        x1    BG     Upkeep surveil engine; grows with binned lands U
  3  Llanowar Greenwidow        x1    G      Rebuys itself from yard at domain discount     R
  4  Sheoldred, the Apocalypse  x1    B      Bomb; the premier Bortuk target (domain 4)     M
  6  Bortuk Bonerattle          x2    BG     Reanimator when cast: MV <= land types to play U
  7  Writhing Necromass         x2    B      Discounted deathtouch body (-1 per creature)   C
  7  Mossbeard Ancient          x1    G      Trampler + 5 life; Cruelty-only reanim target  U
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                       Qty   Color  Role                                          Rar
  1  Cut Down                   x2    B      Early removal (power+toughness <= 5)           U
  1  Urborg Repossession        x2    B      Rebuy to hand + 2 life; kicked: 2 cards        C
  2  Tear Asunder               x1    G      Exile artifact/ench; kicked: any nonland       U
  3  Shadow Prophecy            x2    B      Domain instant dig; bins extras at domain 3+   C
  4  Drag to the Bottom         x1    B      Domain sweeper (-3/-3 base, -5/-5 fixed)       R
  4  Extinguish the Light       x1    B      Unconditional creature/planeswalker kill       C
  5  Slimefoot's Survey         x1    G      Fetches two TYPED lands; turns domain on       U
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty   Color  Role                                          Rar
  3  Liliana of the Veil        x1    B      Discard engine (fuels us, strips them) + edict M
  3  The Cruelty of Gix         x1    B      Saga: discard / tutor / reanimate ANY yard     R
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                              Rar
Choking Miasma          x2    B      Small sweep vs aggro; kicker saves ours              U
Broken Wings            x2    G      Artifacts, enchantments, fliers                      C
Pilfer                  x2    B      Targeted discard vs control/combo                    C
Snarespinner            x2    G      Cheap reach blocker vs fliers/aggro                  C
Tear Asunder            x1    G      2nd exile answer vs enchant/artifact decks           U
Extinguish the Light    x1    B      2nd unconditional kill vs big-threat decks           C
```

## ANALYSIS

**Slot allocation (Midrange, N=40).** Lands: 16 (40% of N=40) — inside the 38–42% midrange band; the deck has seven spells at MV 5+ and wants every land drop. Interaction: 6 of 24 nonland (25%) — mid-band. Threats/payoffs: 9 (37.5%) — in band. Graveyard engine/infrastructure: 9 (37.5%) — far above normal midrange engine share, justified because the engine IS the deck's requested identity: every mill/surveil/discard input feeds a rebuy output. Land modifiers: baseline 16, −0.5 for 2 producers (Deathbloom Gardener ×2), rounds back to 16 given five taplands. Projected Avg MV: 3.67.

**The grill changed this deck.** The Challenger's key finding: as originally built, the "reanimator" label outran the list — Bortuk's realistic range without fixing was MV ≤ 2–3 (domain floor is 2 on Swamp/Forest basics), Sheoldred needs domain 4, and the three off-pair duals are single copies. Fixes applied: Elfhame Wurm → **Slimefoot's Survey** (fetches two typed lands onto the battlefield — one cast usually jumps domain from 2–3 to 4–5, making Bortuk-into-Sheoldred and −5/−5 Drag real lines), and the sideboard's 2nd Mossbeard Ancient → 2nd Snarespinner (a 7-drop is not an anti-aggro card).

**Reanimation target map (memorize this).**
- Bortuk to battlefield, by domain: D3 — Eerie Soultender, Deathbloom Gardener, Uurg, Llanowar Greenwidow; D4 — + Sheoldred; D5 — everything MV ≤ 5.
- Bortuk NEVER puts Writhing Necromass, Mossbeard Ancient, or another Bortuk (MV 6–7) onto the battlefield — they go to hand. That is still fine for Necromass, which recasts cheaply off a stocked yard.
- Bortuk only triggers **when cast** — reanimating Bortuk with Cruelty III gives a vanilla body.
- The Cruelty of Gix chapter III (cast with read ahead for {3}{B}{B}) reanimates ANY creature from ANY graveyard — their dead bomb is often the best target.

**Key interactions.**
- Liliana's +1 is asymmetric here: our discards are fuel (Necromass discount, Urborg Repossession/Bortuk/Cruelty rebuys, Greenwidow self-recursion), theirs are pure loss. Discarding Sheoldred to Liliana then Bortuk-ing her back at domain 4 is the deck's signature line.
- Llanowar Greenwidow's rebuy costs {5}{G} at domain 2 but {2}{G}–{3}{G} after a Survey — a repeating attrition engine removal can't beat.
- Shadow Prophecy at domain 2 is just "look 2, take 2" — it only fills the yard at domain 3+; sequence it after typed duals when possible.
- Drag to the Bottom kills our own Gardeners/Soultenders — cast it from behind as a reset, not proactively; the rebuy package makes the trade profitable.

**Mana honesty (Challenger check 8).** Six mainboard spells cost {B}{B}+ (Uurg, Sheoldred, Cruelty, Liliana, Drag, Extinguish) on 10 black sources, and 5 of 16 lands enter tapped — turn-3 Liliana and turn-4 Sheoldred will each slip a turn in a real share of games. The audit's `ramp_count: 0` undercounts: both Deathbloom Gardeners are any-color producers that bridge exactly this gap. The off-pair duals' U/R/W sides are dead by design; they are mono-color taplands paying for domain.

**Cards Considered but Excluded**

*Rares/mythics cut by the 5-card limit* (at 5/5: Llanowar Greenwidow, Sheoldred, The Cruelty of Gix, Liliana of the Veil, Drag to the Bottom):
- Urborg Lhurgoyf — BGU kicker self-mill beater; third color pips and the rare cap kept it out. First rare in if you cut Greenwidow.
- Braids, Arisen Nightmare — strong attrition rare; edged out by Liliana for the discard synergy.
- Tyrannical Pitlord — 6-mana demon whose sacrifice clause fights the plan.
- Silverback Elder — mythic-grade engine but the deck casts too few creature spells to reliably trigger it.
- Herd Migration / other domain rares — belong to the 5c build, not this one.

*Strong uncommons/commons a tier below the chosen includes:*
- Sengir Connoisseur — 5-MV flier that grows on deaths; the Challenger's pick if you want a second midrange threat swap.
- Braids's Frightful Return — comparable to, not better than, Urborg Repossession per the grill.
- Monstrous War-Leech — needs a U splash to mill on entry; power/toughness reads the yard nicely but the kicker is off-color.
- Phyrexian Rager / Talas Lookout — honest value bodies that lost slots to the dedicated engine pieces.
- Gibbering Barricade — sac-outlet draw; consider over a Necromass in very grindy metas.
- Bone Splinters — efficient removal but card-negative in a deck without token fodder.
- Elfhame Wurm — cut by the grill for Slimefoot's Survey; a fine vanilla 5-drop if you want more raw bodies.

*Sideboard considerations that missed the cut:* Splatter Goblin (early blocker with death sting), Battle-Rage Blessing (protects Sheoldred from removal), Mossbeard Ancient 2nd copy (rejected by the grill as anti-aggro tech), Eerie Soultender 3rd/4th... not legal (max 2).

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.67   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  70.6%  prod  62.5%  gap  +8.1pp  [OK]
  G  demand  29.4%  prod  56.2%  gap -26.8pp  [OK]
```

Notes: full PASS — 16/16 lands, B gap +8.1pp within tolerance. See the "Mana honesty" section above for the double-black tension the summary number hides.

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: all 26 distinct non-basic names verified in working pool (Challenger check 1 + re-verified after revision)
[PASS] commons/uncommons at <= 2 copies each (recounted across both boards; Tear Asunder,
       Extinguish the Light at exactly 2 split across boards)
[PASS] rares/mythics at <= 1 copy each
[PASS] max 5 distinct rares/mythics across main+side: exactly 5/5
       (Llanowar Greenwidow, Sheoldred the Apocalypse, The Cruelty of Gix, Liliana of the Veil, Drag to the Bottom)
[PASS] no scryfall links in analysis.md
```
