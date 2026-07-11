---
deck_name: "br-griselbrand-reanimator"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-07-09T17:41:10Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  9x Swamp
  2x Mountain
  1x Haunted Ridge         BR dual, untapped once you control 2+ lands
  2x Geothermal Bog        BR dual, always enters tapped
  2x Evolving Wilds        Fetches any basic; fixing + deck-thinning
```

### CREATURES (11)
```
CMC  Card                    Qty   Color  Role                          Rar
  2  Blood Artist            x1    B      Aristocrats drain payoff      U
  2  Bloodtithe Harvester    x2    BR     Value 2-drop; Blood token is  U
                                           a 2nd discard outlet
  2  Asylum Visitor          x2    B      Looter/card advantage, Madness U
  2  Olivia's Dragoon        x2    B      Free repeatable discard outlet C
  4  Haunted Dead            x2    B      Self-recurring discard outlet U
                                           + flying token
  5  Midnight Scavengers     x1    B      GY recursion to hand (CMC<=3) C
  8  Griselbrand             x1    B      Payoff/finisher - draw-7      M
                                           engine, evasive lifelink
```

### INSTANTS & SORCERIES (12)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Faithless Looting       x2    R      Discard outlet/filter,        C
                                           flashback
  1  Lightning Axe           x2    R      Discard-cost removal          U
  2  Collective Brutality    x1    B      Discard outlet + flexible     R
                                           disruption (escalate)
  2  Infernal Grasp          x2    B      Unconditional removal         U
  3  Fiery Temper            x2    R      Removal, Madness-discounted   U
  5  Through the Breach      x1    R      Cheat Griselbrand into play   M
                                           (1-turn burst, sac'd at EOT)
  5  Edgar's Awakening       x2    B      Permanent reanimation from GY U
```

### OTHER SPELLS (1)
```
CMC  Card                    Qty   Color  Role                          Rar
  2  The Meathook Massacre   x1    B      Sweeper + drain payoff        M
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in          Rar
Tragic Slip             x2    B      Cheap removal, Morbid scales off  C
                                      the deck's own sac effects; vs
                                      aggro/tribal
Killing Wave            x2    B      Scalable sweeper vs go-wide       U
                                      tokens/aristocrats
Sever the Bloodline     x2    B      Exile answer to tribal lords/     U
                                      recursive threats; denies
                                      opposing reanimation targets too
Abrade                  x2    R      Flexible creature/artifact        U
                                      removal; vs equipment decks
Boarded Window          x2    C      Anti-aggro (-1/-0 to attackers);  U
                                      buys the extra turns the combo
                                      needs
```

## ANALYSIS

**The two lines to Griselbrand aren't equivalent - know which one you're playing.**
Through the Breach puts Griselbrand into play from hand for {4}{R}, but its own text
sacrifices the creature at the beginning of the next end step - it's a one-turn burst,
not a stable threat. You get one attack and however many "Pay 7 life: Draw seven cards"
activations your life total allows, then it's gone. Edgar's Awakening (x2) is the
permanent line: it returns a creature from the graveyard to the battlefield outright,
and stays there. If you've discarded Griselbrand, Edgar's Awakening is the reliable
path; Through the Breach is best used when Griselbrand is stuck in hand (or was
returned there via Edgar's Awakening's own discard-triggered ability, which recurs
a creature to hand, not itself, when Edgar's Awakening is discarded).

**Discard outlet count: ~9 independent ways to pitch Griselbrand.** Faithless
Looting x2, Lightning Axe x2 (discard as an additional cost), Collective Brutality x1
(escalate), Bloodtithe Harvester's Blood tokens x2 (discard+sac: draw), Olivia's
Dragoon x2 (free, repeatable, no mana), plus Haunted Dead x2 once it's already in the
yard. That redundancy means Griselbrand reaching the graveyard by turn 2-3 is the
median case, not the upside case.

**Madness is a real (if secondary) subtheme.** Fiery Temper and Asylum Visitor both
have Madness, so any of the discard outlets above turn them into a discounted
two-for-one instead of a pure cost. This wasn't the design's primary axis, but it's
free value riding on cards already in the 75.

**Mana base note:** the audit tool doesn't credit Evolving Wilds toward either color's
production (it only registers a color once the fetched land is known, which the
regex-based auditor can't see ahead of time), so the real B/R fixing is slightly
better than the already-passing audit numbers reflect.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap** (only 5 total allowed across main+SB, and this
deck already spends all 5 on Griselbrand, Through the Breach, Collective Brutality,
The Meathook Massacre, and Haunted Ridge):
- **Bloodhall Priest** (BR gold rare) - Madness {1}{B}{R}, deals 2 damage on ETB/attack
  if hellbent. Strong, on-theme, but would require cutting one of the 5 above.
- **Olivia Voldaren** (BR gold mythic) - repeatable removal/threat engine; excellent but
  off the core reanimator plan, would have displaced a combo piece.
- **Emrakul, the Promised End** (colorless mythic) - a second Through-the-Breach/
  Edgar's-Awakening target with a devastating ETB; considered as insurance if
  Griselbrand gets removed from the yard, cut purely for budget.
- **Vexing Devil**, **Chandra, Dressed to Kill** - good standalone cards, not
  synergy-critical enough to earn a cap slot over the above.

**Uncommons/commons a tier below the chosen includes** (good fits, cut for a tighter
slot, not a hard rule):
- **Murderous Compulsion** (B, Madness {1}{B}) - destroy target tapped creature;
  didn't make the cut over Infernal Grasp's unconditional removal, but is a strong
  swap-in if you want a second discard-triggered removal spell.
- **Alchemist's Greeting** (R, Madness {1}{R}) - 4 damage to a creature; similar
  profile to Fiery Temper but sorcery-speed and creature-only.
- **Stensia Masquerade** (R, Madness {2}{R}) - Vampire tribal pump; the deck runs 4
  Vampire creature types already (Bloodtithe Harvester, Asylum Visitor, Olivia's
  Dragoon) so this has more upside than it looks.
- **Gisa's Bidding** (B, Madness {2}{B}) - two 2/2 Zombies; a body-count option if the
  board needs more blockers.
- **Village Rites**, **Sanitarium Skeleton**, **Furyblade Vampire** - all reasonable
  value/fodder pieces that lost out to the current 24.

**Sideboard-consideration cards** (didn't make the 10, but relevant swap targets):
- **Eaten Alive** (B) - exile removal with a sac-cost discount; a strong swap for
  Tragic Slip specifically against indestructible/recursive threats or opposing
  reanimator mirrors.
- **Murderous Compulsion** - also playable as a SB slot vs. creature-heavy aggro if
  Boarded Window feels too passive.
- **Smoldering Werewolf**, **Voldaren Duelist** - tempo/evasion-denial creatures,
  considered for anti-flyer or race matchups, cut for more direct removal/sweeper
  effects instead.
- Note: this cube's pool has no dedicated graveyard-hate card in B/R (the only one
  in the whole 300-card pool, Soul-Guide Gryff, is White) - the sideboard's lack of
  graveyard hate is a pool limitation, not an oversight, and cuts both ways since this
  deck is itself graveyard-dependent.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  67.6%  prod  75.0%  gap  -7.4pp  [OK]
  R  demand  32.4%  prod  31.2%  gap  +1.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each - all at 1 or 2
[PASS] Rares/mythics <= 1 copy each - all singles
[PASS] Max 5 rares/mythics total (main+SB) - exactly 5:
       Griselbrand, Through the Breach, Collective Brutality,
       The Meathook Massacre, Haunted Ridge
```
