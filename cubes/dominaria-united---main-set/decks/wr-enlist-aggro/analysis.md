---
deck_name: "wr-enlist-aggro"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WR"
format: "40-card"
built_at: "2026-07-11T02:26:04Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

# DECK: wr-enlist-aggro | 40-card | WR | 40 cards

White-red Soldiers & Go-Wide Tokens aggro built around the enlist mechanic: cheap token producers generate spare bodies that get tapped by enlist attackers (Argivian Cavalier, Guardian of New Benalia, Yavimaya Steelcrusher, Coalition Skyknight) for oversized hits, while Baird, Argivian Recruiter converts every enlist attack into yet another Soldier. Valiant Veteran, Tori D'Avenant, and Heroic Charge cash the accumulated width in for lethal.

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
7x Plains
6x Mountain
2x Sacred Peaks          RW dual, enters tapped
```

### CREATURES (18)
```
CMC  Card                        Qty   Color  Role                                          Rar
  1  Phoenix Chick               x2    R      Recursive evasive 1-drop                      U
  2  Resolute Reinforcements     x2    W      Two bodies at flash speed; enlist fuel        U
  2  Yavimaya Steelcrusher       x2    R      Enlist attacker + artifact removal            C
  2  Valiant Veteran             x1    W      Soldier lord anthem                           R
  2  Guardian of New Benalia     x1    W      Enlist attacker + scry 2 selection            R
  2  Baird, Argivian Recruiter   x2    RW     Token engine (enlist guarantees trigger)      U
  3  Argivian Cavalier           x2    W      Enlist attacker + Soldier token               C
  3  Keldon Strike Team          x2    R      Kicked: 3 bodies + team haste                 C
  3  Squee, Dubious Monarch      x1    R      Recursive token-making attacker               R
  4  Tori D'Avenant, Fury Rider  x1    RW     Go-wide attack payoff                         U
  4  Coalition Skyknight         x1    W      Evasive enlist finisher (flying over stalls)  U
  5  Defiler of Faith            x1    W      Top-end token engine                          R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                        Qty   Color  Role                                          Rar
  2  Lightning Strike            x2    R      Removal                                       C
  3  Hurloon Battle Hymn         x1    R      Removal + lifegain kicker                     U
  4  Captain's Call              x2    W      Three Soldier tokens                          C
  4  Heroic Charge               x2    W      Go-wide pump finisher                         C
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                            Rar
Destroy Evil                x2    W      Enchantment removal + big-toughness answer         C
Smash to Dust               x2    R      Artifact hate + sweep vs opposing X/1 swarms       C
Prayer of Binding           x2    W      Flexible exile answer for bombs                    U
Hurloon Battle Hymn         x1    R      Extra removal vs big creatures                     U
Cleaving Skyrider           x1    W      Flash flyer; kicked burn scales with attackers     U
Citizen's Arrest            x1    W      Exile the blocker or bomb stalling the board       C
Anointed Peacekeeper        x1    W      Tax the sweeper/removal in slow matchups           R
```

## ANALYSIS

**The Baird lock.** Enlist's power boost lasts "until end of turn", and Baird, Argivian Recruiter triggers "at the beginning of your end step, if you control a creature with power greater than its base power". Any enlist attack (or a Heroic Charge / Tori D'Avenant pump) therefore guarantees a Soldier every turn — the deck's engine converts combat itself into board growth.

**Enlist math.** Six enlist attackers (2x Yavimaya Steelcrusher, Guardian of New Benalia, 2x Argivian Cavalier, Coalition Skyknight) are fed by nine token-producing cards (2x Resolute Reinforcements, 2x Argivian Cavalier, 2x Keldon Strike Team kicked, 2x Captain's Call, Squee per attack, plus Baird and Defiler of Faith). Keldon Strike Team's haste clause matters twice over: enlist requires the tapped creature to be free of summoning sickness, so freshly kicked Soldiers can be enlisted the same turn.

**Soldier typal density.** Every token this deck makes except Squee's Goblins is a white 1/1 Soldier, and Resolute Reinforcements, Guardian of New Benalia, and Baird are Soldiers themselves — Valiant Veteran's anthem typically pumps 4-8 bodies by mid-game, and its graveyard mode (exile: +1/+1 counter on each Soldier) gives late-game inevitability through removal.

**Phoenix Chick recursion.** "Whenever you attack with three or more creatures" is trivially true here, so Phoenix Chick effectively cannot be killed profitably — every wide attack offers a {R}{R} rebuy tapped and attacking.

**Defiler of Faith discount.** 17 of the deck's white pips sit on permanent spells, so Defiler's "pay 2 life: white permanent spells cost {W} less" accelerates the swarm while stapling a Soldier onto every white creature cast afterward.

**What kills this deck.** Temporary Lockdown (exiles everything MV 2 or less) hits most of the board; The Elder Dragon War chapter I sweeps the tokens. Anointed Peacekeeper (side) pre-taxes the named sweeper, and the deck's answer otherwise is speed plus rebuild velocity (Captain's Call, Valiant Veteran's exile mode, Squee recursion).

**Kicker pips.** Kicked casts add up to 3 extra W (Keldon Strike Team x2, Hurloon Battle Hymn) and 2 extra R (Heroic Charge x2) beyond audited pip demand — covered by 9 W / 8 R sources, an accepted cost flagged in the grill.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap** (mainboard candidates, in rough order of closeness):
- Shivan Devastator (M) — flexible X-cost hasty flyer; pure rate, zero synergy with tokens/enlist. Swap in over Squee if you prefer raw threat quality.
- Serra Redeemer (R) — two +1/+1 counters on every small body is on-theme; lost the 5-drop slot to Defiler of Faith, which makes bodies rather than sizing them.
- Jaya, Fiery Negotiator (M) — prowess token per turn + card advantage; slower than the deck wants but the best grind engine we cut.
- Danitha, Benalia's Hope (R) and Ragefire Hellkite (R) — strong standalone top-end, off-plan.
- Temporary Lockdown (R) — sideboard-worthy vs other go-wide decks but exiles our own tokens; anti-synergy killed it.

**Uncommons/commons a tier below the chosen includes:**
- Benalish Faithbonder (C) — a seventh enlist body; the 2-drop slot was already at ten cards.
- Knight of Dawn's Light (U) — fine aggressive 2-drop, no token/enlist text.
- Join Forces (U) — untap + pump combos with enlist (untap the enlisted body), but a trick that needs the board to already be winning.
- Coalition Warbrute (C) — the original 4-drop enlist finisher; swapped for Coalition Skyknight during the grill because flying beats trample against gummed-up boards.
- Love Song of Night and Day (U) — token + counters saga, but symmetrical card draw helps the opponent.

**Sideboard considerations that missed the cut:**
- Artillery Blast (C) — cheap removal but only hits tapped creatures and Domain-scaled (we run two basic types).
- Take Up the Shield (C) — protects a lord from removal; too reactive for a proactive deck.
- Charismatic Vanguard (C) — the original stall-breaker slot; {4}{W} activations proved unrealistic on 15 lands, replaced by Citizen's Arrest.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.76   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  43.8%  prod  53.3%  gap  -9.5pp  [OK]
  W  demand  56.2%  prod  60.0%  gap  -3.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons max 2 copies each (across main + side)
[PASS] Rares/mythics max 1 copy each
[PASS] Max 5 rares/mythics total across main + side: 5/5 used
       (Valiant Veteran, Guardian of New Benalia, Squee, Dubious Monarch,
        Defiler of Faith, Anointed Peacekeeper)
[PASS] All cards from cube mainboard (basic lands exempt)
[PASS] Color identity within W/R for all cards
```
