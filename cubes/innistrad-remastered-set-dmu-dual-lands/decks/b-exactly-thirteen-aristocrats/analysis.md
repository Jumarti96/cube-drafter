---
deck_name: "b-exactly-thirteen-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-07-09T19:58:49Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  15x Swamp
  1x  Westvale Abbey // Ormendahl, Profane Prince   Colorless utility; sac 5 creatures -> indestructible flying lifelink finisher
```

### CREATURES (15)
```
CMC  Card                                          Qty   Color  Role                                    Rar
  1  Sanitarium Skeleton                           x1    B      Recursive sac fodder ({2}{B} rebuy)      C
  1  Indulgent Aristocrat                          x2    B      Sac outlet, lifelink, Vampire pump       U
  1  Ecstatic Awakener // Awoken Demon             x1    C      Sac outlet + loot, flips to a Demon      C
  2  Skirsdag High Priest                          x1    B      Taps 2 creatures -> 5/5 flying Demon     R
  2  Butcher Ghoul                                 x1    B      Undying fodder (dies twice)              C
  2  Blood Artist                                  x2    B      Drain 1 / gain 1 on any death            U
  2  Restless Bloodseeker // Bloodsoaked Reveler   x2    C      Blood tokens off lifegain; late drain    U
  3  Desperate Farmer // Depraved Harvester        x1    C      Lifelink fodder, upgrades on a death     C
  3  Morbid Opportunist                            x2    B      Draw a card on deaths (once/turn)        U
  3  Falkenrath Torturer                           x1    B      Free repeatable sac outlet + evasion     C
  4  Tree of Perdition                             x1    B      Combo piece -- sets opponent to 13 life  M
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                                          Qty   Color  Role                                    Rar
  1  Tragic Slip                                   x2    B      Removal; -13/-13 with morbid             C
  1  Village Rites                                 x1    B      Sac outlet, draw 2                       C
  2  Infernal Grasp                                x1    B      Unconditional removal                    U
```

### OTHER SPELLS (5)
```
CMC  Card                                          Qty   Color  Role                                    Rar
  2  The Meathook Massacre                         x1    B      Board wipe + permanent drain engine      M
  3  Cryptolith Fragment // Aurora of Emrakul      x1    C      Mana rock, drains 1/activation, flips    U
  3  Sorin, Imperious Bloodlord                    x1    B      Vampire lord, Vampire sac outlet, reach  M
  4  Triskaidekaphobia                             x2    B      Combo piece -- kills at exactly 13 life  U
```

## SIDEBOARD (10)
```
Card                                          Qty   Color  Role / When to board in                  Rar
Killing Wave                                  x1    B      Sweeper vs go-wide aggro/tokens           U
Sever the Bloodline                           x1    B      Exile hate vs recursion/token copies      U
Murderous Compulsion                          x1    B      Extra removal vs aggro (tapped creatures) C
Eaten Alive                                   x1    B      Exile removal vs indestructible/PWs       C
Morkrut Banshee                               x1    B      Removal + body vs midrange/control        U
Asylum Visitor                                x1    B      Card draw engine vs control/grindy games  U
Demonic Taskmaster                            x1    B      Evasive clock vs slower decks              U
Siege Zombie                                  x1    B      Repeatable reach vs stalled boards         C
Gluttonous Guest                              x1    B      Fodder + filtering vs attrition            C
Gisa's Bidding                                x1    B      Rebuilds board after a sweeper             C
```

## ANALYSIS

A mono-Black Aristocrats/Sacrifice Midrange deck. The primary plan is cheap fodder creatures feeding sacrifice outlets (Indulgent Aristocrat, Falkenrath Torturer, Ecstatic Awakener, Skirsdag High Priest) into a wall of death-trigger payoffs (Blood Artist, Morbid Opportunist, The Meathook Massacre, Restless Bloodseeker), grinding out games on card advantage and incremental drain. Riding on top of that engine is a two-card alternate win condition: Tree of Perdition (a 0/13 Defender) taps to set an opponent's life total to exactly 13, and Triskaidekaphobia kills any player sitting at exactly 13 life on its controller's upkeep. Westvale Abbey gives the deck a completely independent third finisher, transforming a wide board of expendable fodder into an indestructible flying lifelink threat.

**Combo execution -- the correct sequencing matters.** Triskaidekaphobia only triggers on *its controller's own* upkeep, not any upkeep. The tightest legal line: once both pieces are in play (and Tree is past summoning sickness -- it can't tap the turn it enters), wait until your own upkeep begins, let the Triskaidekaphobia trigger go on the stack, and *in response*, tap Tree of Perdition targeting the opponent. Tree's ability resolves first (LIFO), setting them to exactly 13, then Triskaidekaphobia resolves and they lose. This minimizes -- but doesn't eliminate -- the opponent's window: they still get one round of priority to respond with instant-speed lifegain/loss before the trigger resolves. Since Triskaidekaphobia is symmetric, watch your own life total too: Cryptolith Fragment's activation and Infernal Grasp's cost are the deck's only self-inflicted life loss, both small and optional/one-shot, so a careful pilot won't accidentally park themselves at 13.

**Slot allocation.** Classified as Midrange (2.21 avg CMC). Lands: 16 (40% of N=40) -- low curve, no card above CMC 4, matches the audit's own recommendation exactly. Of the 24 nonland slots: ~13 (54%) are dedicated Aristocrats engine (outlets + fodder + payoffs), 5 (21%) are the combo/finisher package (Tree, 2x Triskaidekaphobia, Sorin, Meathook), 4 (17%) are interaction (2x Tragic Slip, Infernal Grasp, and Meathook doing double duty as a wipe), 2 (8%) are infrastructure (Cryptolith Fragment, Village Rites). Interaction is intentionally light for a "Midrange" shell -- most of the answer density is deferred to the sideboard, which is a fine assumption for game 1 against an unknown field but worth knowing going in.

**Rare/mythic budget.** The 5-card cap is spent exactly: Tree of Perdition, Sorin, The Meathook Massacre, Skirsdag High Priest, and Westvale Abbey. This is why the deck stayed mono-Black rather than splashing green as the original archetype note suggested -- the cube's fixing for any color pair is THIN (one common + one rare dual per pair, no universal fixing), and every green splash candidate worth considering (Eldritch Evolution, Garruk Relentless, Grizzly Ghoul) would have cost a rare/mythic slot competing directly against the black bombs actually in the deck, for a splash that wasn't otherwise necessary.

**Known gap.** There's no artifact or enchantment removal anywhere in the 50 cards -- an inherent black-in-this-cube limitation, not a build oversight. If you hit a problematic equipment/enchantment lock piece, expect to grind through combat/removal on the creature carrying it instead.

### Cards Considered but Excluded

*Rares/mythics cut for the 5-card cap:* Gravecrawler (rare) -- free recastable Zombie fodder, excellent fit, but adding it meant cutting one of the five chosen rares/mythics; Voldaren Bloodcaster // Bloodbat Summoner (rare) -- strong death-trigger Blood-token engine, same conflict; Bloodline Keeper // Lord of Lineage (mythic) and Captivating Vampire (rare) -- Vampire lords, redundant with Sorin's role; Distended Mindbender (rare) -- powerful discard-on-a-body but CMC 8 (even via emerge) doesn't fit a 2.2-curve deck; Griselbrand (mythic) -- better suited to a reanimator shell than this one.

*Uncommons a tier below the chosen includes:* Ghoulish Procession -- the card actually cut this round in favor of Ecstatic Awakener; still a fine fodder-multiplier if you want more passive engine over another outlet. Archghoul of Thraben, Demonic Taskmaster (kept in sideboard only -- its forced upkeep sacrifice is real risk of accidentally saccing Tree of Perdition if it's your only other creature), Siege Zombie, Asylum Visitor, Gluttonous Guest (all sideboard-only, see below).

*Sideboard-consideration cards not included anywhere:* Chalice of Life // Chalice of Death (too slow, needs +10 life to flip), Soul Separator (5-mana activation, too clunky), Epitaph Golem (single-card graveyard hate, too narrow), Chittering Host / Abundant Maw (CMC 7-8 top-end that doesn't fit the curve).

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.21   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand 100.0%  prod  93.8%  gap  +6.2pp  [OK]
```
(Note: `ramp_count: 0` undercounts Cryptolith Fragment, which functions as a mana rock even though it isn't tagged "ramp" -- the tool's tag-based detection missed it. Not a build issue.)

## RESTRICTIONS COMPLIANCE
```
[PASS] All commons/uncommons at <=2 copies
[PASS] All rares/mythics at exactly 1 copy
[PASS] Total rares/mythics (main+side): 5 / 5 cap (Tree of Perdition, Sorin, Meathook Massacre, Skirsdag High Priest, Westvale Abbey)
[PASS] Every card verified present in the cube's working pool by exact name
[PASS] Every card's color identity is B or colorless -- no splash
```
