---
deck_name: "b-exactly-thirteen-combo-control"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-07-09T20:01:04Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

Mono-black combo-control built around a validated 2-card kill: Tree of Perdition (0/13 Defender — "{T}: Exchange target opponent's life total with this creature's toughness") sets an opponent to exactly 13 on demand; Triskaidekaphobia ("At the beginning of your upkeep... each player with exactly 13 life loses the game") kills them on the resulting upkeep. Activate Tree in response to your own Triskaidekaphobia trigger — it resolves first, locking the target at 13 before the trigger checks. The backup plan is a dense black removal/death-trigger shell (Blood Artist, Morbid Opportunist, a wall of morbid-enabled removal) that grinds independently if the combo is slow or disrupted.

### LANDS (16)

```
16x Swamp
```

### CREATURES (9)

```
CMC  Card                    Qty   Color  Role                              Rar
  1  Sanitarium Skeleton     x1    B      Recursive chump, feeds morbid     C
  2  Blood Artist            x2    B      Drain engine on any death         U
  2  Butcher Ghoul           x1    B      Undying blocker, feeds morbid x2  C
  3  Morbid Opportunist      x2    B      Card draw off creature deaths     U
  4  Tree of Perdition       x1    B      Combo piece A - sets foe to 13    M
  5  Morkrut Banshee         x1    B      ETB removal on a 4/4 body         U
  5  Epitaph Golem           x1    C      Durable blocker, GY utility       C
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                    Qty   Color  Role                              Rar
  1  Tragic Slip             x2    B      Removal, morbid = -13/-13         C
  1  Eaten Alive             x1    B      Exile removal (creature/PW)       C
  2  Infernal Grasp          x2    B      Unconditional removal             U
  2  Murderous Compulsion    x1    B      Removal (tapped), madness         C
  2  Collective Brutality    x1    B      Modal discard/removal/drain       R
  4  Sever the Bloodline     x1    B      Exile + copies, flashback         U
```

### OTHER SPELLS (7)

```
CMC  Card                              Qty   Color  Role                          Rar
  2  The Meathook Massacre              x1    B      Sweeper + drain engine        M
  3  Cryptolith Fragment // Aurora      x2    C      Ramp/drain, flips to finisher U
  3  Sorin, Imperious Bloodlord         x1    B      Removal/value planeswalker    M
  4  Triskaidekaphobia                  x2    B      Combo piece B - kill at 13    U
  4  Invasion of Innistrad // Deluge    x1    C      Flash removal (-13/-13)       R
```

## SIDEBOARD (10)

```
Card                                Qty   Color  Role / When to board in            Rar
Killing Wave                        x1    B      vs. go-wide aggro/tokens           U
Village Rites                       x1    B      Protect a creature / instant value C
Ghoulish Procession                 x2    B      vs. aggro/attrition, replaces bodies U
Asylum Visitor                      x2    B      vs. control/grindy mirrors          U
Boarded Window                      x1    C      vs. aggro/burn (damage reduction)   U
Wild-Field Scarecrow                x2    C      vs. aggro (extra blocker + lands)   C
Chalice of Life // Chalice of Death x1    C      vs. aggro/burn (lifegain buffer)    U
```

## ANALYSIS

**Slot allocation.** Macro-Archetype: Control. Projected avg MV 2.71. Lands: 16 (40% of N=40) — mono-color needs no fixing buffer, and the low curve (nothing above 5, half the deck at CMC<=2) lets a control shell run lean; the mana audit confirms 16/16 recommended, PASS. Of the 24 nonland slots: Interaction 11 cards (45.8%) — sweepers/removal/disruption (Meathook Massacre, Collective Brutality, Invasion of Innistrad, Tragic Slip x2, Infernal Grasp x2, Murderous Compulsion, Eaten Alive, Sever the Bloodline, Morkrut Banshee), slightly above the 35-45% reference band because this deck has almost no independent "threats" — removal density has to cover for that. Payoffs 3 cards (12.5%) — Tree of Perdition + Triskaidekaphobia x2, the actual win condition. Engine/Infrastructure 10 cards (41.7%) — Cryptolith Fragment x2, Sorin, Blood Artist x2, Morbid Opportunist x2, and the recursive/undying blocker suite (Sanitarium Skeleton, Butcher Ghoul, Epitaph Golem); this runs above the 10-20% reference band because in this build the blockers *are* the engine — every one of them dies profitably into Blood Artist/Morbid Opportunist/morbid triggers rather than just soaking damage.

**Combo legality, verified.** Two independent Proposer/Challenger grill passes confirmed the timing: Tree's tap ability is activated, not triggered, so it can be put on the stack in response to Triskaidekaphobia's upkeep trigger and resolves first (LIFO) — the opponent is at exactly 13 by the time the trigger's check happens. Defender restricts attacking only, not activated abilities. Two caveats worth flagging for play:
- The ability is an *exchange*, not a set-effect — after it resolves, Tree's toughness becomes whatever the opponent's old life total was, so it's a one-shot per activation, not a repeatable "reset to 13" engine, unless something else restores its toughness (nothing in this 40 does).
- **Summoning sickness applies**: Tree cannot activate its tap ability the turn it enters — it must survive untouched to your *next* upkeep. With only 1 copy and no tutors anywhere in this cube's black pool, Tree is the deck's single point of failure; treat it as a high-priority protect target once it resolves.
- Sequence around **The Meathook Massacre**: its ETB "-X/-X until end of turn" will temporarily drop Tree's toughness below 13 for the rest of that turn if both are in play — don't try to combo off on the same turn Meathook resolves.

**Self-13 risk — read this before piloting.** Triskaidekaphobia's check is symmetric: "each player with exactly 13 life loses the game" includes its controller, on their own upkeep, with no opt-out (both modes check first, then adjust). This deck runs real self-inflicted life-loss: Cryptolith Fragment ("each player loses 1 life" — you take this every activation), Infernal Grasp ("you lose 2 life" per cast, x2 copies), plus Blood Artist, The Meathook Massacre, Sorin, and Collective Brutality's drain mode moving your total in either direction. Running two Triskaidekaphobias means once either is on the battlefield, every one of your own upkeeps is live for this check. Track your life total precisely — especially after Cryptolith activations or an Infernal Grasp — and avoid ending a turn at exactly 13 before your own upkeep. Blood Artist's incidental +1 per death is your most reliable in-deck corrector; the sideboard's Chalice of Life is a second one worth bringing in for grindy games with heavy self-drain.

**Morbid math.** Tragic Slip and Morkrut Banshee only need *any* creature to have died that turn — yours or the opponent's. With Butcher Ghoul (dies + undying return = 2 death events off one card), Sanitarium Skeleton, Blood Artist, and five other removal spells all capable of producing a death before you cast Tragic Slip, morbid is live far more often than the raw enabler count suggests — sequence a cheap kill spell first in a turn to upgrade Tragic Slip to -13/-13 on the next threat.

**Land count note.** Both grill passes independently flagged 16 lands as slightly aggressive given the curve tops at two 5-drops and four 4-drops (including both combo pieces) — 17 would be the more conservative choice if this list underperforms on consistency in testing; 16 is the number that shipped because it matches the constructed-land-target formula's recommendation exactly and the deck has essentially no true ramp to lean on beyond Cryptolith Fragment's incidental fixing.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget** (Tree of Perdition, The Meathook Massacre, Sorin, Collective Brutality, and Invasion of Innistrad used the full allotment): Griselbrand (mythic — excluded largely for the self-13 risk above: paying 7 life is far too dangerous with Triskaidekaphobia live) / Distended Mindbender (rare, 8cmc emerge, heavy investment) / Tamiyo's Journal (rare, too slow) / Skirsdag High Priest, Voldaren Bloodcaster // Bloodbat Summoner, Captivating Vampire, Bloodline Keeper // Lord of Lineage, Gravecrawler, Metallic Mimic (rares — all pull toward a Vampire-tribal/aristocrats build, not this control shell) / Helvault, Conjurer's Closet, Stitcher's Graft (rares, marginal fit) / Emrakul, the Promised End (13cmc, uncastable here) / Heartless Summoning (rare — hard-excluded, not just budget-cut: its "-1/-1 to creatures you control" would drop Tree of Perdition to 0/12, breaking the exact-13 combo outright).

**Uncommons/commons a tier below the chosen includes:** Ecstatic Awakener // Awoken Demon (common — flagged by the Challenger agent as arguably a stronger include than Epitaph Golem: a proactive sac-outlet + card-draw engine vs. Epitaph Golem's marginal graveyard utility; worth testing as a swap) / Indulgent Aristocrat, Restless Bloodseeker // Bloodsoaked Reveler, Falkenrath Torturer (all fine sac-outlet pieces, better in a dedicated aristocrats build than this control-first shell) / Demonic Taskmaster (cut deliberately — its forced upkeep sacrifice could target Tree of Perdition if it's your only other creature) / Archghoul of Thraben (card selection, narrow).

**Sideboard-consideration cards that didn't make the final 10:** Gluttonous Guest, Gisa's Bidding, Siege Zombie (all reasonable anti-aggro/rebuild filler, cut for the stronger options above) / Sever the Bloodline and Murderous Compulsion were considered for the sideboard as a second copy of interaction but are already maindeck singles.

## MANA AUDIT: PASS

```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.71   Ramp cards: 0*

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]

* Cryptolith Fragment (x2) is tagged "Mana Rock" rather than the
  literal "ramp" tag the audit tool matches on; it functions as a
  mild ramp/fixing piece despite showing as 0 here.
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons <= 2 copies each - max observed: 2
       (Triskaidekaphobia, Cryptolith Fragment, Tragic Slip,
        Infernal Grasp, Blood Artist, Morbid Opportunist,
        Wild-Field Scarecrow, Ghoulish Procession, Asylum Visitor)
[PASS] Rares/mythics <= 1 copy each - all 5 at exactly 1 copy
[PASS] Max 5 rares/mythics total (main+SB) - exactly 5 used
       (Tree of Perdition M, The Meathook Massacre M,
        Sorin Imperious Bloodlord M, Collective Brutality R,
        Invasion of Innistrad R); sideboard has 0 rares/mythics
```
