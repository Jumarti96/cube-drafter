---
deck_name: "bw-control-aristocrats"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BW"
format: "40-card"
built_at: "2026-07-09T22:02:56Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  9x Swamp
  4x Plains
  2x Sunlit Marsh          BW dual, enters tapped
  1x Mishra's Factory      Colorless manland; animates into a 2/2, dodges sorcery-speed sweepers
```

### CREATURES (11)
```
CMC  Card                       Qty   Color  Role                                Rar
  1  Festering Goblin           x2    B      Sac fodder, -1/-1 on death          C
  2  Whitemane Lion             x2    W      Flash rebuy / cheap fodder          C
  3  Phyrexian Ghoul            x1    B      Sac outlet (pump)                   C
  3  Auramancer                 x1    W      Rebuys Oversold Cemetery from GY    C
  3  Phyrexian Rager            x2    B      Value fodder (draws a card on ETB)  C
  3  Lieutenant Kirtar          x1    W      Self-sac removal, evasive body      R
  3  Undead Gladiator           x1    B      Renewable fodder (discard->return)  U
  4  Yawgmoth, Thran Physician  x1    B      Core engine: outlet+removal+draw    M
  4  Mindslicer                 x1    B      Symmetric discard (empty-hand plan) R
  4  Faceless Butcher           x1    B      Temporary exile removal (see note)  U
  6  Necrosavant                x1    B      Recursive top-end sac payoff        U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                    Qty   Color  Role                                Rar
  1  Swords to Plowshares     x2   W      Premium removal                      U
  2  Terror                   x2   B      Removal                              C
  2  Chainer's Edict          x1   B      Edict removal + late flashback       U
  4  Wrath of God             x1   W      Board wipe / reset                   R
  4  Battle Screech           x1   W      Token generator + flashback          U
  5  Urborg Uprising          x1   B      Graveyard recursion + card draw      C
```

### OTHER SPELLS (2)
```
CMC  Card                    Qty   Color  Role                                Rar
  2  Oversold Cemetery       x1    B      Graveyard recursion engine           R
  2  Zombie Infestation      x1    B      Repeatable fodder (discard2->2/2)    U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                Rar
Radiant's Judgment       x1    W     Anti-big-creature removal, cycles       C
Ichor Slick              x1    B     Cheap removal/cantrip vs aggro          C
Congregate               x1    W     Lifegain vs aggro/burn                  U
Renewed Faith            x1    W     Lifegain + cantrip vs aggro/burn        C
Night // Day             x1    BW    Removal or team pump vs sweeper decks   U
Gerrard's Verdict        x1    BW    Discard + lifegain vs control/combo     U
Cackling Fiend           x1    B     Extra discard body vs control/combo     C
Tormod's Crypt           x1    C     Graveyard hate vs Reanimator/GY decks   U
Phyrexian Debaser        x1    B     Extra removal-on-a-stick vs aggro       C
Duress                   x1    B     Extra proactive disruption              C
```

## ANALYSIS

Yawgmoth, Thran Physician and Oversold Cemetery form the engine: every cheap creature that trades or dies becomes free removal, a card, and eventually a rebought threat. Lieutenant Kirtar and Wrath of God give the deck real answers so it can survive to the mid-game, while Mindslicer turns a naturally-emptying hand into a one-sided Wheel of Fate against the opponent. Battle Screech, Zombie Infestation, and Undead Gladiator keep the sac-fodder supply from running dry, and Necrosavant provides a recursive finisher for games that go long.

**The core loop.** Yawgmoth turns any spare body into a `-1/-1 counter + a card` for 1 life and a sacrifice — no mana required. Festering Goblin, Phyrexian Rager, and Whitemane Lion are the cheapest fodder; Oversold Cemetery (4+ creatures in your graveyard) rebuys whichever one you need most, and Auramancer rebuys Oversold Cemetery itself if it's ever discarded or destroyed. This is a genuine engine, not a pile of synergy — it functions off just Yawgmoth and one dead creature.

**The empty-hand plan.** Yawgmoth's second mode (`{B}{B}, Discard a card: Proliferate`) and proactive discard naturally strip your own hand down. Mindslicer punishes that state: sacrifice it (via Yawgmoth or Phyrexian Ghoul) when your hand is already empty or down to a land, and only the opponent loses their grip.

**Two correctness notes from the build's self-grill pass:**
- *Lieutenant Kirtar is not a general sac outlet* — its ability reads `{1}{W}, Sacrifice Lieutenant Kirtar: Exile target attacking creature`. It can only sacrifice itself. Treat it as a one-shot removal spell on an evasive 2-power flying body, not as fodder-consumption for the Yawgmoth engine.
- *Do not feed Faceless Butcher to your own sac outlets.* Its full text is `When this creature enters, exile another target creature. When this creature leaves the battlefield, return the exiled card to the battlefield under its owner's control.` Sacrificing it to Yawgmoth/Phyrexian Ghoul/Necrosavant hands the opponent their creature back. Best used as a static blocker/attacker, or bounced (not sacrificed) via Whitemane Lion if you need to reuse the ETB.

**Fodder density math.** Between Battle Screech (2 bodies, 4 with flashback once you control 3 untapped white creatures), Zombie Infestation (discard 2 -> 2/2, repeatable), Undead Gladiator (discard a card -> returns to hand every upkeep), and Urborg Uprising (returns up to 2 creatures from graveyard + draws a card), the deck can refill its own graveyard-to-battlefield loop multiple times per game even after Wrath of God resets the board — the fodder is cheap and expendable, while Yawgmoth, Oversold Cemetery, and Necrosavant (all comparatively insulated from a symmetric wipe if held back) are what rebuild afterward.

**Sequencing Wrath of God.** Because your own creatures are mostly 1-3 mana replaceable fodder, Wrath trades up more often than it trades down — hold Yawgmoth and Necrosavant in hand until after you've wiped, then rebuild off Oversold Cemetery's graveyard recursion.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (mainboard already spends all 5 on Yawgmoth, Oversold Cemetery, Lieutenant Kirtar, Mindslicer, Wrath of God): Isolated Chapel (strictly better BW dual than Sunlit Marsh, but the budget didn't have room — Sunlit Marsh was the correct budget-conscious pick), Body Snatcher (reanimator payoff, off-plan for this build), Chainer, Dementia Master (bigger reanimator finisher, redundant with Necrosavant's role), Royal Assassin (repeatable removal engine), Divine Sacrament (white anthem — better suited to a heavier token build), Sevinne's Reclamation, Entomb, Vampiric Tutor, Enlightened Tutor (all strong but none essential to function), Glory, Windborn Muse, Nantuko Shade, No Mercy, Test of Endurance, Dark Depths, Gemstone Mine, Maze of Ith.

**Uncommons/commons a tier below the chosen includes:** Dread Return (reanimation redundant with the Necrosavant/Oversold Cemetery package — a reasonable swap-in if you want more graveyard reanimation over the current curve-filling creatures), Griffin Guide and Spirit Link (aura value engines, but 2-for-1 risk against removal-heavy pools), Mesa Enchantress (only 2 enchantments in the current 75 — not enough density to justify the slot), Sun Clasp/Twisted Experiment (same aura risk), Icatian Javelineers and Savannah Lions (vanilla curve-fillers, cut for synergy density), Wretched Anurid (actively excluded — `Whenever another creature enters, you lose 1 life` directly punishes this deck's own token/fodder plan), Vigilant Sentry/Mystic Zealot (Threshold payoffs; graveyard isn't reliably deep enough early to trigger them consistently).

**Sideboard-consideration cards not included:** Improvised Armor (cycling aura, flex anti-aggro pump), Street Wraith (near-free cantrip body), Nightscape Familiar (narrow — only discounts blue/red spells, irrelevant here), a second Duress or Chainer's Edict copy (both under the 2-copy cap and available if you want to lean harder into control/combo matchups).

**Off-plan note:** the original archetype brief's cross-tag mention of Spinal Embrace doesn't apply here — its color identity is B/U, not B/W, so it was never a legal candidate for this build.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.79   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  66.7%  prod  68.8%  gap  -2.1pp  [OK]
  W  demand  33.3%  prod  37.5%  gap  -4.2pp  [OK]
```

Slot allocation: Lands 16 (40% of N=40, Midrange band 38-42%). Non-land 24: Creatures 14 (58.3%), Other Spells 2 (8.3%), Instants/Sorceries 8 (33.3%). Per the Midrange note, Engine & Infrastructure has no separate budget here — Yawgmoth, Oversold Cemetery, Necrosavant, Phyrexian Rager, Auramancer, Undead Gladiator, and Zombie Infestation all pull double duty as both threats and engine pieces. Land count modifiers: cantrips 0 (no true 1-mana cantrips run), mana rocks 0 (none included), MDFCs 0 (none in pool) — baseline 16 stands unmodified.

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons up to 2 copies each — verified, max observed is 2 (Festering Goblin, Whitemane Lion, Phyrexian Rager, Swords to Plowshares, Terror, Sunlit Marsh)
[PASS] Rares/mythics up to 1 copy each — verified, all 5 at exactly 1 copy
[PASS] Max 5 rares/mythics total across mainboard + sideboard — exactly 5: Lieutenant Kirtar, Yawgmoth Thran Physician, Mindslicer, Oversold Cemetery, Wrath of God (sideboard has 0 rares/mythics)
```
