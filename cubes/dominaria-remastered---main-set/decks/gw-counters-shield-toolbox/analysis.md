---
deck_name: "gw-counters-shield-toolbox"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-10T17:11:34Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
7x Forest
8x Plains
1x Radiant Grove        True GW dual, enters tapped
1x Nantuko Monastery     Colorless manland only (does NOT fix G/W) - becomes a
                         4/4 first strike Insect Monk at Threshold (7+ card GY)
```

### CREATURES (8)
```
CMC  Card                      Qty   Color  Role                              Rar
  1  Birds of Paradise          x1    G     Ramp/fixing                        R
  4  Forgotten Ancient          x1    G     Counter accumulation/redistribute  R
  4  Kavu Primarch               x1    G     Kicker scaling counters body       C
  5  Phantom Flock               x2    W     ETB 3 counters, prevention shield  C
  5  Serra Angel                 x1    W     Efficient flying/vigilance beater  U
  6  Triskelion                  x1    C     Finisher/pinger, ETB 3 counters    R
  7  Phantom Nishoba              x1    GW    ETB 7 counters, shield, lifegain   R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                      Qty   Color  Role                              Rar
  1  Swords to Plowshares        x2    W     Premium removal                    U
  2  Wax // Wane                  x1    GW    Combat trick / enchant. removal   U
  3  Primal Boost                 x1    G     Combat trick, cycles into Boon    C
  3  Radiant's Judgment           x1    W     Removal (power 4+), cycles        C
  4  Break Asunder                x1    G     Artifact/enchant removal, cycles  C
  4  Battle Screech               x1    W     2-for-1 flying tokens (flashback) U
```

### OTHER SPELLS (8)
```
CMC  Card                      Qty   Color  Role                              Rar
  1  Wild Growth                  x1    G     Ramp                              C
  2  Invigorating Boon            x2    G     Counter distribution via cycling  U
  2  Pacifism                     x2    W     Soft removal (can't attack/block) C
  3  Dragon Blood                 x2    C     Repeatable counter generator      U
  3  Squirrel Nest                x1    G     Repeatable token engine           U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                   Rar
Wrath of God             x1    W     vs go-wide Aggro (CAUTION: kills your      R
                                       own shielded creatures too - board only
                                       when already behind on board)
Tormod's Crypt            x1    C     vs Graveyard/Reanimator (15.5% of cube)   U
Damping Sphere            x1    C     vs Storm/UR combo (cube has 2 storm arch.) U
Icy Manipulator           x1    C     vs Aggro - repeatable tempo tap           U
Sun Clasp                 x1    W     vs problem creature - pump + bounce out   C
Whitemane Lion            x1    W     Bounce/rebuy a shielded threat post-removal C
Renewed Faith             x1    W     vs Aggro/Burn - lifegain, cycles          C
Radiant's Judgment        x1    W     2nd copy - vs big creatures, cycles       C
Emerald Charm             x1    G     Flexible - untap/enchant. hate/anti-fly   C
Nomad Decoy               x1    W     vs Aggro - tempo tap, upgrades w/ Threshold C
```

## ANALYSIS

**How the shields actually recharge.** Phantom Flock and Phantom Nishoba both read "if damage would be dealt to this creature, prevent that damage. Remove a +1/+1 counter from this creature" -- each counter is a one-time damage-prevention charge, not a permanent ability. Forgotten Ancient's upkeep trigger ("move any number of +1/+1 counters from this creature onto other creatures") is the fastest way to top them back up, and Dragon Blood's `{3},{T}: put a +1/+1 counter on target creature` is the reliable, mana-gated backup that doesn't depend on anything else happening first. Between the two, a Nishoba or Flock can realistically survive more than one combat per game -- but neither engine is fast, so expect to play defense (removal, Pacifism, Whitemane Lion tempo plays) while the recharge sources come online.

**Self-grill fixes applied.** The initial build ran Giant Spider (zero synergy, vanilla reach blocker) and only 2 in-deck cycling triggers for Invigorating Boon's two copies, on a mana base that was flagged as borderline-thin (16 lands with several double-pip costs, one of the two "duals" not actually producing colored mana). Giant Spider was swapped for Radiant's Judgment -- real removal *and* a third cycling trigger -- and one Kavu Primarch copy was cut (its 8-mana kicked cost is the weakest link in the curve) to bump the deck to 17 lands. Nantuko Monastery's role was also relabeled: it only taps for colorless mana normally, so it does not fix G/W the way a true dual would.

**Cards Considered but Excluded:**
- *Rares/mythics cut for the 5-card cap*: Sylvan Library (mythic, generic card advantage), Lyra Dawnbringer (mythic, strong but zero counters synergy), Windborn Muse (rare, stax-oriented, off-plan), Hunting Grounds (mythic gold card, too build-around-y on top of an already-thin package), Test of Endurance (mythic alt-win-con, off-plan), Divine Sacrament (rare anthem, marginal fit), Enlightened Tutor/Worldly Tutor/Exploration (rares, generic value over synergy).
- *Wrath of God* specifically: kept as the deck's 5th rare, but only in the sideboard, since it actively destroys your own shielded threats (prevention only stops damage, not destroy effects) -- board it in only as a last-resort reset against go-wide aggro, never proactively.
- *Uncommons a tier below the final cut*: Mesa Enchantress (draws off enchantment casts, but the deck only runs 5-6 enchantments), Griffin Guide (token+aura, redundant with Battle Screech/Squirrel Nest), Lieutenant Kirtar (sac-outlet removal, would've needed another rare slot).
- *Sideboard-consideration cards not included*: Congregate (life-drain payoff, too slow), Improvised Armor (card draw equipment, marginal), Vigilant Sentry (threshold buff, needs graveyard support this deck doesn't have).

## MANA AUDIT: PASS
```
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.17   Ramp cards: 2 (Birds of Paradise, Wild Growth)

Color Balance (core):  [PASS]
  G  demand  46.4%  prod  47.1%  gap  -0.7pp  [OK]
  W  demand  53.6%  prod  52.9%  gap  +0.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons <=2 copies each ............... PASS
Rares/mythics <=1 copy each ...................... PASS
Max 5 rares/mythics total (main+SB) ............. PASS (5/5: Phantom Nishoba,
                                                    Forgotten Ancient, Triskelion,
                                                    Birds of Paradise, Wrath of God)
```
