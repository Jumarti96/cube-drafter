---
deck_name: "brg-all-in-aristocrats"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BRG"
format: "40-card"
built_at: "2026-07-09T21:55:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
4x Swamp
2x Mountain
2x Darigaaz's Caldera     BRG bounce-land (return a land to hand on ETB)
2x Geothermal Bog         BR dual, enters tapped
2x Haunted Mire           BG dual, enters tapped
2x Wooded Ridgeline       RG dual, enters tapped
2x Terminal Moraine       Colorless, sac to fetch a basic
```

### CREATURES (16)
```
CMC  Card                        Qty   Color  Role                                    Rar
  1  Festering Goblin            x2    B      Cheap fodder, death-trigger -1/-1         C
  1  Skirk Prospector            x2    R      Goblin sac outlet for mana                 C
  2  Mogg War Marshal            x2    R      Two bodies from one card, fodder engine    C
  3  Pyre Zombie                 x1    BR     Self-sacrificing recursive reach threat    R
  3  Penumbra Bobcat             x2    G      Dies into a 2/1 token, self-replacing      C
  4  Yawgmoth, Thran Physician   x1    B      Sac outlet + removal + draw (keystone)     M
  4  Mindslicer                  x1    B      Death-trigger symmetric discard finisher   R
  4  Flametongue Kavu            x2    R      Removal on a body, becomes fodder after    U
  4  Gamekeeper                  x1    G      Death-trigger dig/cheat, fills graveyard   U
  5  Siege-Gang Commander        x1    R      3 bodies on ETB + cheap sac-for-reach       R
  6  Necrosavant                 x1    B      Recursive sac-fueled top-end threat        U
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                        Qty   Color  Role                                    Rar
  1  Chain Lightning              x2    R      Efficient burn/removal                     C
  2  Terror                       x1    B      Efficient removal (nonblack only)          C
  2  Chainer's Edict              x1    B      Edict removal with flashback               U
  4  Dread Return                 x1    B      Reanimation; flashback sacs 3 creatures    U
```

### OTHER SPELLS (3)
```
CMC  Card                        Qty   Color  Role                                    Rar
  2  Oversold Cemetery            x1    B      Rebuys sac'd fodder once 4+ in graveyard   R
  2  Zombie Infestation           x2    B      Repeatable discard-2-for-a-token engine     U
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                Rar
Tormod's Crypt               x1    C      Graveyard hate vs. reanimator/flashback     U
Damping Sphere               x1    C      Anti-storm/fast-mana hate                   U
Icy Manipulator               x1    C      Tempo tool vs. aggro                        U
Dark Withering                x1    B      Extra removal (Madness {B} via Zombie Inf.) U
Slice and Dice                x1    R      Sweeper vs. token swarms/aggro mirrors      U
Faceless Butcher               x1    B      Extra big-threat removal                    U
Wall of Junk                 x1    C      Cheap recurring blocker vs. aggro           U
Life // Death                 x1    BG     Extra reanimation for grindy matchups       U
Chainer's Edict               x1    B      2nd copy for removal-heavy matchups         U
Gempalm Incinerator            x1    R      Scaling removal, cantrips if not needed     U
```

## ANALYSIS

Yawgmoth converts every death in the deck into a card and a -1/-1 counter; Mogg War Marshal, Zombie Infestation, Festering Goblin, and Penumbra Bobcat exist purely to feed him and Skirk Prospector/Necrosavant. Oversold Cemetery and Dread Return rebuy the fodder once four-plus creatures are in the yard, and Siege-Gang Commander/Flametongue Kavu turn removal and tokens into a closing burst of reach.

**Slot allocation.** Macro-Archetype: Midrange (53 of the 143 BRG synergy-cluster cards skew Midrange vs. 27 Aggro/22 Combo/13 Control). Lands: 16 (40% of N=40) - standard for 3-color midrange at avg CMC 2.67, confirmed exactly by the constructed-land-target formula. Nonland role mix: roughly 54% of the 24 spells are tagged Payload/Payoff, roughly 37% Interaction/Disruption - both run above the plain Midrange guidance band (30-40% / 20-30%), but that's because most of the fodder creatures (Festering Goblin, Flametongue Kavu, Mogg War Marshal) double as both roles via their death/ETB triggers, per the Midrange convention that threats should pull double duty rather than reserving a separate Engine budget.

**The sacrifice-outlet count matters more than raw creature count here.** There are 4 independent sac outlets that don't require a card to already be dying on its own: Yawgmoth (any creature), Skirk Prospector (Goblins only, for mana), Siege-Gang Commander (Goblins only, for reach), and Necrosavant (any creature, to rebuy itself). Pyre Zombie can only sacrifice itself - it's a recursive threat, not a general outlet, despite reading that way at a glance. Skirk Prospector sacrificing a Goblin token from Mogg War Marshal or Siege-Gang Commander is the deck's core "free" value loop: mana now, a body already converted into value earlier, and (once Siege-Gang is on board) 2 damage on demand.

**Graveyard threshold math.** Oversold Cemetery needs 4+ creature cards in the yard to activate. Between combat deaths, Zombie Infestation discards, and Gamekeeper's death-trigger mill, that threshold is typically live by turn 4-5 - right when Dread Return and Necrosavant also want fuel. Gamekeeper's own trigger is a dig-and-cheat effect (reveal until you hit a creature, put it into play, mill the rest) rather than reanimation - it's a graveyard filler for the other recursion pieces, not a recursion piece itself.

**Faceless Butcher (SB) caution.** Its exiled creature returns to the opponent when Faceless Butcher leaves the battlefield - including if you sacrifice it to Yawgmoth or Skirk Prospector. Board it in as a one-shot removal spell you intend to leave on the battlefield, not as extra sac fodder.

**Cards Considered but Excluded**

Rares/mythics cut for the 5-card cap (all confirmed BRG-legal and thematically strong): Chainer, Dementia Master (reanimator engine, lost out to the cheaper Dread Return/Necrosavant package), Body Snatcher (death-trigger reanimation, redundant with Gamekeeper's dig effect), Worldgorger Dragon (needs a dedicated blink/flicker shell we don't have - risk without payoff here), Grim Lavamancer (competes with our own graveyard plan for resources), Royal Assassin (strong but the removal suite was already deep enough), Woodland Cemetery (BG check-land, would have been a fine land slot but the rare budget went to spells instead), Saproling Symbiosis (token payoff, thinner than Siege-Gang at the same slot), Forgotten Ancient (counters engine, off-theme for the sac plan). Pashalik Mons was the original pick for the 5th rare slot but was swapped for Siege-Gang Commander during the self-grill: Siege-Gang deploys 3 bodies immediately on ETB and has a cheaper {1}{R} sac outlet, and it filled an empty 5-CMC curve slot.

Uncommons a tier below the chosen includes: Dralnu's Crusade (Goblin anthem, but our Goblin count is support-density, not a critical mass to build around), Squirrel Nest (token engine, too slow at land-drop speed), Deadwood Treefolk (double recursion but competes with Necrosavant's 6-drop slot and taxes the light G base further), Undead Gladiator (self-recursive discard-fed body, close call vs. Terror), Deadapult (Zombie-only sac outlet, too narrow a creature-type requirement), Call of the Herd (fine body+flashback but no sac synergy).

Sideboard-consideration cards that didn't make the 10: Crawlspace (rare, would have needed to displace a mainboard rare), Sulfuric Vortex (rare, race tool vs. lifegain decks), Elvish Aberration (ramp/fixing, marginal), Dodecapod (anti-discard tech, too narrow).

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.67   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  54.8%  prod  62.5%  gap  -7.7pp  [OK]
  R  demand  35.5%  prod  50.0%  gap -14.5pp  [OK]
  G  demand   9.7%  prod  37.5%  gap -27.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons: max 2 copies each                          PASS (highest count: 2)
Uncommons: max 2 copies each                         PASS (Chainer's Edict = 1 MB + 1 SB = 2 total)
Rares/mythics: max 1 copy each                       PASS (all rares/mythics are singletons)
Max 5 rares/mythics total (MB+SB combined)           PASS (5/5: Yawgmoth, Oversold Cemetery,
                                                            Pyre Zombie, Mindslicer, Siege-Gang Commander)
All card color identities within B/R/G               PASS (no off-color splash)
```
