---
deck_name: "gb-yawgmoth-proliferate-counters"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BG"
format: "40-card"
built_at: "2026-07-10T17:15:28Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
7x Swamp
7x Forest
1x Woodland Cemetery    BG dual, enters tapped unless you control Swamp/Forest
1x Haunted Mire         BG dual, enters tapped
```

### CREATURES (13)
```
CMC  Card                      Qty   Color  Role                              Rar
  1  Festering Goblin            x2    B     Yawgmoth fodder, dies for value    C
  1  Birds of Paradise           x1    G     Ramp/fixing                        R
  4  Yawgmoth, Thran Physician    x1    B     Proliferate + sac outlet engine    M
  4  Forgotten Ancient            x1    G     Counter accumulation/redistribute  R
  4  Phyrexian Scuta               x2    B     Kicker scaling counters body       U
  4  Kavu Primarch                 x2    G     Kicker scaling counters body       C
  4  Faceless Butcher              x1    B     Removal on a body*                 U
  5  Spiritmonger                  x1    BG    Grows via combat, regenerates      U
  5  Street Wraith                 x1    B     Free cycler, feeds Boon             C
  6  Triskelion                    x1    C     Finisher/pinger, ETB 3 counters    R
```
*Never sacrifice Faceless Butcher to Yawgmoth while its exiled creature still matters -- its leaves-battlefield trigger returns it to the opponent.

### INSTANTS & SORCERIES (6)
```
CMC  Card                      Qty   Color  Role                              Rar
  1  Nature's Lore                 x1    G     Ramp/fixing (fetches Forest sub.)  U
  2  Terror                        x2    B     Removal (nonartifact/nonblack)     C
  2  Call of the Herd              x2    G     2-for-1 token fodder (flashback)   U
  3  Ichor Slick                   x1    B     Unconditional -3/-3, cycles        C
```

### OTHER SPELLS (5)
```
CMC  Card                      Qty   Color  Role                              Rar
  2  Invigorating Boon             x2    G     Counter distribution via cycling  U
  3  Dragon Blood                  x2    C     Repeatable counter generator      U
  3  Squirrel Nest                 x1    G     Repeatable token/fodder engine     U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                 Rar
Tormod's Crypt           x1    C     vs Graveyard/Reanimator (15.5% of cube)  U
Duress                   x1    B     vs Control/Combo - strip key spell       C
Chainer's Edict          x1    B     vs hexproof/indestructible threats      U
Icy Manipulator          x1    C     vs Aggro - repeatable tempo tap          U
Wall of Junk             x1    C     vs Aggro - cheap recurring blocker       U
Break Asunder            x1    G     vs Artifacts/Enchantments, cycles       C
Cackling Fiend           x1    B     vs Control/Combo - proactive discard    C
Zombie Infestation       x1    B     vs removal-heavy - resilient fodder     U
Jalum Tome               x1    C     vs grindy matchups - card filtering     C
Damping Sphere           x1    C     vs Storm/UR combo (cube has 2 storm archetypes) U
```

## ANALYSIS

**How the engine actually works.** Yawgmoth is the sole proliferate source in the entire 271-card cube -- there is no redundancy for it. When it resolves, its `{B}{B}, discard a card: Proliferate` line adds counters to *every* permanent already carrying one: it grows Forgotten Ancient (more counters to redistribute at upkeep), tops up Triskelion for another ping, and advances Phyrexian Scuta/Kavu Primarch. Forgotten Ancient's upkeep trigger is the actual redistribution engine even without Yawgmoth in play -- it accrues a counter off *any* player's spell and can dump the pile onto Triskelion for a burst of direct damage, which is the core "soak and release" pattern from the original archetype brief.

**Sac-fodder discipline matters.** Yawgmoth's `pay 1 life, sacrifice another creature` is a free-standing removal+draw engine on its own, independent of the counters subtheme -- Festering Goblin (dies for -1/-1), Call of the Herd's tokens, and Squirrel Nest's endless 1/1s are all "safe" sac targets since none of them do anything on death you don't want. Faceless Butcher is the one creature you should be reluctant to feed it, since doing so hands the exiled card back (see the mainboard note).

**Self-grill fixes applied.** The initial build had Invigorating Boon (x2) as a near-dead card -- its trigger needs *any* player to cycle, and the first draft ran zero cycling cards in the maindeck. Street Wraith was added and one Chainer's Edict swapped for Ichor Slick, both of which cycle for {2}, giving Boon two real in-deck triggers instead of depending entirely on the opponent. Ichor Slick also plugs a real hole: Terror can't touch black or artifact creatures, and this cube's Aristocrats/Sacrifice (9.2%) and Artifacts (10.3%) clusters are exactly the matchups where that would have mattered.

**Cards Considered but Excluded:**
- *Rares/mythics cut for the 5-card cap*: Sylvan Library (mythic) -- excellent card advantage, but generic rather than counters-synergistic, and the cap was better spent elsewhere. Also cut: Royal Assassin, No Mercy, Kamahl Fist of Krosa, Nut Collector, Exploration, Worldly Tutor, Gauntlet of Power -- all strong standalone cards, all off the counters plan.
- *Vampiric Tutor* specifically: seriously considered as a 5th rare to reliably find Yawgmoth, but Woodland Cemetery's mana fixing was judged more valuable in a THIN-fixing 2-color deck (only 2 duals exist for BG in this cube).
- *Uncommons a tier below the final cut*: Zombie Infestation and Dodecapod (both sideboard/excluded fodder-ish cards) -- Zombie Infestation is a fine plan-B token engine but slower than Squirrel Nest; Dodecapod's counters only trigger if an *opponent* forces a discard, too narrow for maindeck play.
- *Sideboard-consideration cards not included*: Royal Assassin (would need a rare slot), Faceless Butcher's 2nd copy (redundant with the caution note above), Nightscape Familiar (cost reduction, marginal).

## MANA AUDIT: PASS
```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.12   Ramp cards: 2 (Birds of Paradise, Nature's Lore -- audit
             tool's automated ramp_count showed 0 due to a tag-matching quirk;
             both cards are confirmed ramp/fixing by oracle text)

Color Balance (core):  [PASS]
  B  demand  53.8%  prod  56.2%  gap  -2.4pp  [OK]
  G  demand  46.2%  prod  56.2%  gap -10.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons <=2 copies each ............... PASS
Rares/mythics <=1 copy each ...................... PASS
Max 5 rares/mythics total (main+SB) ............. PASS (5/5: Yawgmoth, Forgotten
                                                    Ancient, Triskelion, Birds of
                                                    Paradise, Woodland Cemetery)
```
