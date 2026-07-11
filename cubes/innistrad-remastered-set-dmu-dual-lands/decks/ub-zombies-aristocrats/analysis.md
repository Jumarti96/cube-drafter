---
deck_name: "ub-zombies-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UB"
format: "40-card"
built_at: "2026-07-07T23:10:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
10x Swamp
3x  Island
2x  Contaminated Aquifer     UB dual, always enters tapped
1x  Shipwreck Marsh          UB dual, untapped once you control 2+ lands
```

### CREATURES (13)
```
CMC  Card                    Qty   Color  Role                         Rar
  1  Gravecrawler             x1    B      Free recastable sac fodder   R
  2  Butcher Ghoul             x1    B      Undying fodder (dies twice)  C
  2  Bladestitched Skaab       x2    BU     Zombie anthem lord           U
  2  Blood Artist              x2    B      Drain 1/gain 1 on any death  U
  3  Archghoul of Thraben       x2    B      Card advantage off deaths    U
  4  Haunted Dead              x2    B      ETB token + GY recursion     U
  4  Drunau Corpse Trawler      x2    U      ETB token + deathtouch grant U
  5  Grimgrin, Corpse-Born      x1    BU     Payoff: sac outlet/removal   M
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                    Qty   Color  Role                         Rar
  1  Village Rites             x2    B      1-mana sac outlet, draw 2    C
  1  Tragic Slip               x2    B      Morbid removal (-13/-13)     C
  1  Eaten Alive                x1    B      Sac-cost exile removal       C
  2  Infernal Grasp             x2    B      Unconditional removal        U
  2  Murderous Compulsion       x1    B      Removal (tapped creatures)   C
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                         Rar
  2  Ghoulish Procession        x2    B      Free 2/2 Zombie on death     U
  2  The Meathook Massacre      x1    B      X-sweeper + drain engine     M
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in         Rar
Collective Brutality           x1    B      Flexible discard/drain/-2-2     R
Compelling Deterrence          x2    U      Tempo bounce vs combo/control    U
Ecstatic Awakener // Awoken Demon x1 B      2nd true sac outlet + draw      C
Essence Flux                   x1    U      Protect/rebuy a key ETB body     C
Killing Wave                   x2    B      Edict vs go-wide/hexproof        U
Sever the Bloodline            x1    B      Exiles a threat + all copies     U
Summary Dismissal              x1    U      Anti-combo/finisher protection   U
Syncopate                      x1    U      Cheap tempo counterspell         C
```

## ANALYSIS

Grimgrin, Corpse-Born is the payoff: it enters tapped and only untaps when you sacrifice a creature, growing a counter and destroying a blocker every attack. Gravecrawler, Village Rites, and a full suite of death-triggered engines (Ghoulish Procession, Archghoul of Thraben, Blood Artist, The Meathook Massacre) turn every death in the deck into card advantage, life swings, and fresh Zombie bodies. Bladestitched Skaab anthems the go-wide fodder base, and six efficient black removal spells keep the board clear while the engine spins up.

Macro-Archetype: Midrange. Projected/actual Avg MV: 2.29. Slot allocation (N=40): Lands 16 (40% of N) — Midrange baseline; Interaction 6 (25% of 24 non-lands) — efficient removal to protect the death-engine's tempo; Threats/Payoffs+Engine 18 (75% of 24 non-lands, Engine absorbed into Threats/Payoffs per Midrange convention — nearly every creature here also generates value on death or ETB). No cantrip/mana-dork/MDFC land modifiers applied (none present in this build).

**Sacrifice-outlet math.** After the self-grill, the mainboard runs exactly two true sacrifice outlets — Grimgrin's own ability and Village Rites — with Ecstatic Awakener // Awoken Demon in the sideboard as a third if a matchup calls for more resilience. Grimgrin needs to sacrifice something every turn just to untap, so having a second free outlet (Village Rites also draws two cards) meaningfully de-fragilizes the plan versus removal on Grimgrin itself.

**Death-payoff density.** Four cards convert deaths into direct value regardless of source — Blood Artist (drain 1/gain 1), Archghoul of Thraben (card selection), Ghoulish Procession (free 2/2 Zombie, once per turn), and The Meathook Massacre (drain trigger plus a one-time X-sweeper on ETB). With roughly 9-10 creature bodies expected to die over a typical game (fodder, combat, token deaths, Grimgrin sacrifices), these stack into a real damage/card clock independent of combat.

**Blood Artist is off-tribe on purpose.** It is a Vampire, not a Zombie — included anyway because its trigger is type-agnostic ("this creature or another creature dies") and it is the single best universal Aristocrats payoff available in UB for this pool. Bladestitched Skaab's anthem still only pumps Zombies, so Blood Artist itself does not get bigger, but it converts every Zombie death the deck already generates into a life swing.

**Rare/mythic budget: exactly 5/5 used.** Grimgrin (M), Gravecrawler (R), Shipwreck Marsh (R), and The Meathook Massacre (M) in the mainboard, plus Collective Brutality (R) in the sideboard. No headroom remains — any future swap-in of another rare/mythic requires cutting one of these five.

**Mana base is intentionally overweighted on blue relative to raw pip count.** Colored pip demand is 82% B / 18% U (23 B pips vs. 5 U pips across the 24 spells — only 5 distinct cards need blue at all: Grimgrin, Bladestitched Skaab, Drunau Corpse Trawler). Land production is 81% B / 37.5% U — babysitting blue above its pip share is deliberate: Grimgrin (the payoff) and Bladestitched Skaab (the turn-2 lord) both have hard UB requirements, so a bare-minimum blue count risked stranding the plan's two most important cards. This is why the audit shows a -19.6pp "gap" on U — that gap is production exceeding demand, i.e. safety margin, not a shortfall.

**Curve is intentionally low and two-heavy.** 8 of 24 spells sit at CMC 1, 9 at CMC 2 — this deck wants to be assembling its sacrifice loop by turn 2-3, not durdling into the midgame. The two 4-drops (Haunted Dead, Drunau Corpse Trawler) and the single 5-drop (Grimgrin) are the only cards asking to be cast past turn 3.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- Necroduality (M) — copies each nontoken Zombie's ETB; would be explosive with Drunau Corpse Trawler/Haunted Dead, but every rare slot was already earmarked for higher-priority pieces.
- Rooftop Storm (R) and Gisa and Geralf (R) — both anchor the "Value Engine" sub-archetype path that was not chosen; would want a reanimator/self-mill shell built around them instead of a bolt-on.
- Invasion of Innistrad // Deluge of the Dead (R) — flash removal that transforms into a recurring token engine; strong, but no rare slot left.
- Overcharged Amalgam (R) — flash flying exploit body with a one-shot counterspell attached; redundant with the interaction already in the 95.

**Uncommons/commons a tier below the chosen includes:**
- Wretched Throng (C) — self-tutors on death, but only functions if its other copy is still in the library; lower ceiling than Village Rites.
- Siege Zombie (C) — initially miscast as a "sac outlet" during the build; its actual text only taps three creatures (no sacrifice), so it does not feed Grimgrin or trigger morbid/death payoffs, and it competes with attacking for the same bodies. Cut after the self-grill review.
- Cobbled Lancer (U), Makeshift Mauler (C) — graveyard-cost bodies with low standalone impact; fine filler, not payoff-tier.
- Stitched Mangler (C) — a tempo tapper with no Zombie-specific payoff text; better suited to a tempo-leaning build than this aristocrats shell.
- Grizzly Ghoul (BG uncommon) — a real Zombie payoff (enters with a counter per creature that died this turn) but requires a green splash; not worth the manabase complexity for one card.

**Sideboard-consideration cards not included:**
- Silent Departure (C) — flashback bounce; lost out to Compelling Deterrence's zombie-triggered discard clause for the same slot type.
- Forbidden Alchemy (C) — card selection into the graveyard; largely redundant with Archghoul of Thraben's built-in filtering.
- A second Ecstatic Awakener // Awoken Demon — available if a metagame turns out to be removal-heavy enough to want a third true sac outlet.
- A second Eaten Alive — available if more exile-based removal is needed against indestructible/recursive threats.
- Gisa's Bidding (C) — two 2/2 Zombie tokens with Madness (pairs with Haunted Dead's discard-two ability); cut for space, viable swap-in.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.29   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  82.1%  prod  81.2%  gap  +0.9pp  [OK]
  U  demand  17.9%  prod  37.5%  gap -19.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each - no card exceeds 2 copies
[PASS] Rares/mythics <= 1 copy each - Grimgrin, Gravecrawler, Shipwreck Marsh, The Meathook Massacre, Collective Brutality each x1
[PASS] Max 5 rares/mythics total (main+SB) - exactly 5/5 used, no headroom
```
