---
deck_name: "wub-blink-value"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-07-10T22:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
4x Plains
3x Island
3x Swamp
2x Idyllic Beachfront    UW dual, enters tapped
2x Contaminated Aquifer  UB dual, enters tapped
2x Sunlit Marsh          WB dual, enters tapped
```

### CREATURES (14)
```
CMC  Card                    Qty   Color  Role                                              Rar
  2  Whitemane Lion          x2    W      Blink enabler / rebuy                             C
  2  Cloud of Faeries        x2    U      Cheap ETB flyer / fodder                           C
  3  Man-o'-War              x2    U      Tempo removal ETB                                  C
  3  Phyrexian Rager         x2    B      Card advantage ETB                                 C
  4  Faceless Butcher        x2    B      Removal ETB (premium)                              U
  4  Sawtooth Loon           x1    UW     Recursion ETB / filter                             U
  4  Body Snatcher           x1    B      Discard-cost reanimation payoff (death trigger, NOT removal)  R
  5  Peregrine Drake         x1    U      Ramp/tempo ETB                                     C
  5  Serra Angel             x1    W      Top-end finisher (no ETB)                          U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                    Qty   Color  Role                                              Rar
  1  Swords to Plowshares    x2    W      Premium removal                                    U
  2  Momentary Blink         x2    W      Core blink enabler                                 C
  2  Chainer's Edict         x2    B      Edict removal, flashback                            U
  4  Wrath of God            x1    W      Board wipe / reset                                  R
  1  Vampiric Tutor          x1    B      Consistency tool                                    M
  5  Force of Will           x1    U      Free protection                                     M
```

### OTHER SPELLS (1)
```
CMC  Card                    Qty   Color  Role                                              Rar
  4  Umbilicus               x1    C      Engine — repeatable bounce                          R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                    Rar
Tormod's Crypt          x1    C      Vs. Reanimator/flashback GY strategies      U
Duress                  x1    B      Vs. control/combo holding answers           C
Terror                  x1    B      Vs. aggro — cheap universal removal         C
Circular Logic          x1    U      Vs. control/combo, scales w/ GY             U
Counterspell            x1    U      Vs. control/combo, unconditional            C
Radiant's Judgment      x2    W      Vs. big creatures (power 4+)                C
Pacifism               x1    W      Flexible catch-all removal                   C
Icy Manipulator        x1    C      Vs. slower/ramp decks, tempo                 U
Damping Sphere         x1    C      Vs. fast mana / storm / combo                U
```

## ANALYSIS

**Self-grill resolution.** Two independent agents (Proposer/Challenger) reviewed this list against the full working pool. The Challenger's one must-fix was a mislabeled role on Body Snatcher — its ETB is a *cost* (discard a creature or it's exiled), not removal; the trigger that actually returns value is its death trigger (reanimates the discarded creature). The role above is corrected. Practically, this means Body Snatcher plays best as a one-time value piece — cast it once for the discard/reanimate sequence — rather than a repeat blink target, since rebuying it via Momentary Blink or Umbilicus costs you a card each time instead of generating one. The Challenger also flagged that 16 lands with avg CMC 2.92 and no true ramp is slightly greedy for a 3-color 40-card deck; the automated audit still PASSes at 16, so it's left as-is, but if games feel mana-hungry in practice, cutting Serra Angel for a 17th land is the cleanest adjustment. The sideboard's original build skewed 4-of-10 toward control/combo answers with no aggro-specific removal; Terror replaces the second Duress to cover that gap.

**The core loop.** Whitemane Lion (flash, bounce a creature you control) and Momentary Blink (exile-and-return, flashback) are the two enablers that make this deck run. Both can rebuy Man-o'-War (bounce a blocker), Phyrexian Rager (draw a card), or Faceless Butcher (re-exile a creature) for another round of value. Faceless Butcher is the single best blink target in the deck: blinking it lets you swap which creature is exiled without ever giving the original target back, effectively "reloading" your removal.

**Umbilicus is a double-edged engine.** Its upkeep trigger is symmetric — every player chooses whether to pay 2 life or bounce a permanent, not just you. Against another creature-based deck this can occasionally hand the opponent a rebuy too. It's best when your own board is full of cheap ETB creatures happy to be bounced (this deck) and the opponent's board is full of static threats that don't want to leave and re-enter — Wrath of God targets, planeswalkers, or nonland permanents they'd rather keep in play.

**Wrath of God tension.** A symmetrical sweeper in a go-wide value deck is an intentional trade-off: it kills our own board too, but because every creature here is cheap (2-3 mana) and has usually already banked its ETB value before the wipe, the asymmetry favors us in practice — we rebuild off Man-o'-War/Phyrexian Rager/Whitemane Lion far faster than most decks reload after a board wipe.

**Mana base.** Pip demand: 11 W / 8 U / 11 B (36.7% / 26.7% / 36.7%). Land sources: 8 W / 7 U / 7 B — the automated audit reports color_balance_status PASS with all three colors within a few points of demand. No tri-land (e.g. Dromar's Cavern) is used; its "sacrifice unless you bounce a non-Lair land" cost is a real tempo tax at only 16 lands, and the three tapped duals already connect all three colors pairwise.

### Cards Considered but Excluded

**Rares/mythics cut due to the 5-card limit** (the mainboard already spends all 5 slots on Body Snatcher, Wrath of God, Vampiric Tutor, Force of Will, Umbilicus):
- **Royal Assassin** (B) — repeatable removal, but no ETB text means blinking it is dead value, and it would have displaced a stronger rare.
- **Absorb** (UW) — counterspell + lifegain, generically strong but redundant with Force of Will's protection role.
- **Windborn Muse** (W) — taxing effect, solid vs. aggro but no synergy tie-in.
- **No Mercy** (B) — powerful defensive enchantment, but doesn't interact with the blink plan at all.
- **Denizen of the Deep** (U) — bounces your whole board on ETB (huge blink synergy on paper), but at 8 CMC it's far too slow for a 40-card competitive shell.
- **Sevinne's Reclamation, Lieutenant Kirtar, Chainer Dementia Master, Zur the Enchanter, Stroke of Genius, Mystic Remora, Mystical Tutor, Vexing Sphinx, Lyra Dawnbringer, Serra Avatar, Test of Endurance, Urza Lord High Artificer** — all considered, none clearly outperformed the chosen five for this shell.

**Uncommons/commons a tier below the chosen includes:**
- **Thieving Magpie** (U) — good repeatable card draw, but zero ETB trigger; cut for tighter synergy density.
- **Cackling Fiend** (B) — does carry the Blink/ETB tag (discard on ETB) and is arguably a *better* blink target than Body Snatcher since rebuying it is pure upside. Strong swap-in candidate if you want tighter blink synergy over Body Snatcher's reanimation package.
- **Wormfang Drake** (U) — tagged Blink/ETB, but its "exile a creature until Wormfang Drake leaves" mechanic strands a creature out of play for as long as the Drake survives — a trap for a deck trying to generate immediate value.
- **Sun Clasp** (W) — a genuine repeatable rebuy engine (aura, {W}: return enchanted creature to hand), cut mainly for 2-for-1 removal risk; a reasonable include if you want more resilient recursion than Momentary Blink's one-shot.
- **Voice of All, Auramancer, Phyrexian Scuta, Fact or Fiction, Deep Analysis, Recoil, Stand // Deliver, Necrosavant, Dread Return, Ovinomancer** — all fine role-players, none made the final cut over the chosen removal/card-advantage suite.

**Sideboard-consideration cards not included:**
- **Congregate, Twisted Experiment** — alternate anti-aggro tech if Terror/Radiant's Judgment prove insufficient.
- **Dark Withering, Spite // Malice** — situational removal/counter hybrids, clunky mana costs.
- **Enlightened Tutor, Entomb** — could fetch Umbilicus or set up graveyard synergies, but not needed given the deck's existing consistency package.

## MANA AUDIT: PASS
```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.92   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  36.7%  prod  43.8%  gap  -7.1pp  [OK]
  U  demand  26.7%  prod  43.8%  gap -17.1pp  [OK]
  W  demand  36.7%  prod  50.0%  gap -13.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons <= 2 copies each: PASS (all 45 non-rare card slots checked)
Rares/mythics <= 1 copy each: PASS (Body Snatcher, Wrath of God, Vampiric Tutor, Force of Will, Umbilicus)
Custom cap - max 5 rares/mythics total (main+SB): PASS (exactly 5, all in mainboard)
All 50 cards verified present in working pool by exact name: PASS
```
