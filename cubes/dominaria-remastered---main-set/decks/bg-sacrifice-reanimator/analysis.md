---
deck_name: "bg-sacrifice-reanimator"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BG"
format: "40-card"
built_at: "2026-07-09T21:50:53Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
11x Swamp
3x  Forest
2x  Haunted Mire         BG dual, enters tapped
```

### CREATURES (16)
```
CMC  Card                       Qty   Color  Role                        Rar
  1  Birds of Paradise          x1    G      Ramp/fixing                 R
  1  Festering Goblin           x2    B      Fodder/death-trig removal   C
  3  Phyrexian Ghoul            x2    B      Sac outlet/pump             C
  3  Urborg Syphon-Mage         x1    B      Discard outlet/drain        C
  3  Penumbra Bobcat            x2    G      Fodder/death-trig token     C
  4  Faceless Butcher           x1    B      Removal (temp exile)        U
  4  Yawgmoth, Thran Physician  x1    B      Engine keystone             M
  4  Mindslicer                 x1    B      Payoff/disruption on death  R
  4  Gamekeeper                 x2    G      Fodder/death-trig dig       U
  4  Phyrexian Debaser          x1    B      Removal via self-sac        C
  5  Spiritmonger               x1    BG     Threat/reanimation target   U
  6  Necrosavant                x1    B      Payoff/self-recurring       U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                  Qty   Color  Role                       Rar
  1  Entomb                x1    B      Enabler - GY tutor         R
  2  Terror                x2    B      Removal                    C
  2  Chainer's Edict       x2    B      Removal (edict+flashback)  U
  4  Dread Return          x1    B      Reanimation spell          U
```

### OTHER SPELLS (2)
```
CMC  Card                Qty   Color  Role                        Rar
  2  Oversold Cemetery    x1    B      Engine keystone             R
  2  Zombie Infestation   x1    B      Engine - token via discard  U
```

## SIDEBOARD (10)
```
Card               Qty   Color  Role / When to board in                Rar
Tormod's Crypt     x1    C      GY hate vs. reanimator/GY mirrors       U
Break Asunder      x1    G      Artifact/enchantment removal            C
Duress             x1    B      Hand disruption vs. combo/control       C
Sandstorm          x1    G      Anti-token/anti-aggro (1 dmg AoE)       C
Icy Manipulator    x1    C      Tempo tap-down vs. big threats          U
Ichor Slick        x1    B      Extra removal vs. aggro                 C
Wall of Junk       x1    C      Defensive blocker vs. aggro             U
Damping Sphere     x1    C      Anti-combo/storm tax                    U
Emerald Charm      x1    G      Flex: untap/enchant removal/anti-fly    C
Lull               x1    G      Fog vs. alpha strike                    C
```

## ANALYSIS

Cheap creatures die into sacrifice outlets (Phyrexian Ghoul, Yawgmoth, Phyrexian Debaser) for removal, pump, and card draw, while Oversold Cemetery rebuys the fodder once the graveyard fills up. Entomb, Dread Return, Gamekeeper, and Necrosavant give the deck a reanimator angle on top, letting it cheat Spiritmonger or loop Necrosavant back from the yard using the same fodder that feeds the sac outlets. Removal (Terror, Chainer's Edict, Faceless Butcher) and Mindslicer's symmetrical discard round out the interaction suite.

**Macro-Archetype: Midrange. Projected Avg MV: 2.92.**

**Slot allocation (N=40):**
- Lands: 16 (40% of N=40) — Midrange baseline; no reduction applied since Birds of Paradise is the only cheap mana source and doesn't clear the "2 dorks" modifier threshold.
- Interaction: 6 cards, 25% of 24 nonland (Terror x2, Chainer's Edict x2, Faceless Butcher, Mindslicer) — within the 20-30% Midrange band.
- Threats/Payoffs (absorbing Engine/Infrastructure per Midrange convention): 18 cards, 75% of 24 nonland — most of these double as engine pieces (sac outlets, death-trigger fodder, recursion), so Engine is not budgeted separately.

**Land count derivation:** Baseline 16 (40% of N=40). Modifiers: cantrips -0 (no 1-mana cantrips in the list), mana dorks -0 (only 1 dork - Birds of Paradise - below the 2-source threshold for the -0.5 modifier), MDFCs -0 (none in pool). Final: 16 lands.

**Mana source allocation:** 25 B pip-weighted demand vs. 6 G (81%/19% split, using the `colors` field as a proxy per the working-pool cache's available fields). Targeting 13 B sources / 5 G sources of 16 total lands: 11 Swamp + 3 Forest + 2 Haunted Mire (BG dual, enters tapped).

**The Necrosavant/Oversold Cemetery loop is the deck's grindy backbone.** Necrosavant returns itself from the graveyard for `{3}{B}{B}` + sacrificing a creature, entirely independent of Dread Return - meaning once it dies, any spare fodder body (a Festering Goblin, a Penumbra Bobcat token, a Zombie Infestation token) brings it back on your upkeep. Oversold Cemetery does the same job for everything else once the graveyard has 4+ creatures, which this deck hits reliably by turn 4-5 given 12 unique creatures plus Zombie Infestation/Entomb actively filling the yard.

**Fodder math:** death-trigger value pieces are Festering Goblin (2), Penumbra Bobcat (2), and Gamekeeper (2) - 6 cards that are never a pure two-for-one loss when sacrificed to Phyrexian Ghoul, Yawgmoth, or Necrosavant's own upkeep cost. Zombie Infestation adds unlimited token generation (at the cost of card economy) to keep outlets fed after the initial fodder is spent.

**Entomb's actual payoff is narrower than its power level suggests.** With only Spiritmonger as a true "big" reanimation target, Entomb mostly finds Necrosavant (redundant with its self-recursion) or sets up an early Dread Return. It over-performs when it finds Mindslicer or Gamekeeper for an early death trigger, but this is a build that could support a bigger reanimation target if one were swapped in later (see excluded cards below).

**Faceless Butcher should not be fed to your own sac outlets** - its oracle text returns the exiled creature to its owner when it leaves play by any means, including your own sacrifice effects. Treat it as a stay-in-play removal piece, not fodder.

**Mindslicer's symmetrical discard is asymmetric in practice here.** Because the deck's plan is to dump cards into play/graveyard rather than hold a full grip, Mindslicer's death trigger usually costs you less than a typical opponent's hand.

### Cards Considered but Excluded

**Rares/mythics cut due to the 5-card limit:**
- Chainer, Dementia Master (rare) - a genuinely tighter reanimator payoff than Mindslicer (repeatable reanimation from any graveyard for `{B}{B}{B}` + 3 life). If iterating on this list, swapping Mindslicer out for Chainer is the single highest-upside change available, at the cost of losing the symmetrical-discard disruption angle.
- Body Snatcher (rare) - ETB reanimation from any graveyard, but requires discarding a creature card as a cost or it gets exiled; needs a creature-heavy hand to function well.
- Saproling Symbiosis (rare) - flash token generator scaling off board state; strong but redundant with existing token generation (Penumbra Bobcat, Zombie Infestation).
- Royal Assassin (rare) - repeatable removal on tapped creatures; cut early to preserve rare budget for engine pieces over pure interaction.
- Vampiric Tutor / Sylvan Library (mythic) / Worldly Tutor (rare) - premium consistency pieces, but the budget was prioritized toward the Aristocrats/Sacrifice engine (Yawgmoth, Oversold Cemetery) plus one enabler (Entomb) and one ramp/fixing piece (Birds of Paradise).

**Uncommons/commons a tier below the chosen includes:**
- Life // Death (uncommon) - the Death half is a cheap, flexible reanimation spell (pay life equal to MV). A strong near-miss; consider it over a second Chainer's Edict or over Zombie Infestation if the deck wants more raw reanimation redundancy.
- Squirrel Nest (uncommon) - persistent token engine, cut in favor of Faceless Butcher to raise interaction density.
- Undead Gladiator, Deadwood Treefolk (uncommons) - extra recursion/looting, solid but a tier below the current 24 nonland slots.
- Symbiotic Beast (common) - 4 tokens on death is a huge sac payoff, but its 6cmc slot lost out to keeping Necrosavant as the lone top-end card for curve reasons.
- Werebear, Wild Dogs, Fa'adiyah Seer, Krosan Restorer, Street Wraith, Nightscape Familiar, Wretched Anurid - reasonable curve-fillers/self-mill support, none individually strong enough to beat out the current 24.

**Sideboard-consideration cards not included:** Crawlspace, Jester's Cap, Arboria, Umbilicus (all rare, would have required cutting a mainboard rare) were passed over for budget reasons rather than power level. Primal Boost was a viable combat-trick alternative to Emerald Charm's anti-flying mode.

**A note on data provenance:** during the self-grill, an independent Challenger pass flagged possible CMC/color inaccuracies on Yawgmoth, Dread Return, and Spiritmonger based on its own recollection. These were re-verified directly against this cube's cached Scryfall data: Yawgmoth and Dread Return are both `{2}{B}{B}` (CMC 4), and Spiritmonger is `{3}{B}{G}` (a true BG gold card in this cube, not mono-green) - all as listed above. No changes were needed.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.92   Ramp cards: 0 (tooling note: Birds of Paradise doesn't carry a literal "ramp" tag in this cube's data, so it isn't counted by the audit script's ramp detector - this doesn't affect the land count math, which already passed)

Color Balance (core):  [PASS]
  B  demand  80.6%  prod  81.2%  gap  -0.6pp  [OK]
  G  demand  19.4%  prod  31.2%  gap -11.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons max 2 copies each - max observed is 2 (Festering Goblin, Terror, Chainer's Edict, Phyrexian Ghoul, Penumbra Bobcat, Gamekeeper, Haunted Mire)
[PASS] Rares/mythics max 1 copy each - all 5 are singleton
[PASS] Max 5 rares/mythics total across main+SB - exactly 5: Birds of Paradise, Entomb, Oversold Cemetery, Yawgmoth Thran Physician, Mindslicer (0 in sideboard)
[PASS] All nonland cards within B/G color identity - Spiritmonger (BG) is the only gold card, confirmed via cube data
```
