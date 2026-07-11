---
deck_name: "gitrog-wrenn-lands-matter"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-07-09T02:13:45Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
10x Forest
 4x Swamp
 1x Haunted Mire         BG dual, enters tapped
 1x Evolving Wilds       Basic fetch; also a 2nd land-drop event for Tracker
```

### CREATURES (15)
```
CMC  Card                                   Qty   Color  Role                             Rar
  1  Groundskeeper                          x1    G      Land recursion engine            U
  1  Young Wolf                             x1    G      Resilient 1-drop / fodder        C
  2  Scorned Villager // Moonscarred Werewolf x1    G      Mono-G mana dork                 C
  2  Noose Constrictor                      x1    G      Looting / GY fuel, reach         U
  2  Duskwatch Recruiter // Krallenhorde Howler x1    G      Creature tutor engine            U
  3  Splinterfright                         x1    G      GY-creature-count payoff         U
  3  Eccentric Farmer                       x1    G      Self-mill + land recursion       C
  3  Tireless Tracker                       x1    G      Landfall card-advantage engine   R
  3  Somberwald Sage                        x1    G      Ritual mana (creatures only)     U
  3  Morbid Opportunist                     x1    B      Attrition-to-cards engine        U
  4  Grizzly Ghoul                          x1    BG     Counters payoff / value body     U
  4  Lumberknot                             x1    G      GY-scaling hexproof beater       U
  5  The Gitrog Monster                     x1    BG     Keystone: land drops + draw      M
  5  Moldgraf Millipede                     x1    G      Self-mill beater w/ counters     C
  8  Ghoultree                              x1    G      Cost-reduced top-end beater      U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                                   Qty   Color  Role                             Rar
  1  Traverse the Ulvenwald                 x1    G      Land/creature tutor              R
  1  Tragic Slip                            x1    B      Cheap removal                    C
  1  Eaten Alive                            x1    B      Sac-cost exile removal           C
  2  Grapple with the Past                  x1    G      Self-mill + recursion            C
  2  Infernal Grasp                         x1    B      Unconditional removal            U
  2  Murderous Compulsion                   x1    B      Conditional removal + madness    C
  3  Maelstrom Pulse                        x1    BG     Universal removal                R
  5  Spider Spawning                        x1    G      Token payoff / flashback         U
```

### OTHER SPELLS (1)
```
CMC  Card                                   Qty   Color  Role                             Rar
  5  Wrenn and Seven                        x1    G      Keystone: land recursion PW      M
```

## SIDEBOARD (10)
```
Card                                   Qty   Color  Role / When to board in               Rar
Killing Wave                           x1    B      vs. go-wide token/tribal aggro         U
Sever the Bloodline                    x1    B      vs. tribal lords/legendary threats     U
Geistcatcher's Rig                     x1    C      vs. flier-heavy decks                  U
Boarded Window                         x1    C      vs. fast aggro                         U
Duel for Dominance                     x1    G      vs. hexproof/indestructible threats    C
Festerhide Boar                        x1    G      vs. aggro (big morbid blocker)         C
Bramble Wurm                           x1    G      vs. fliers/aggro (reach + lifegain)    C
Deadly Allure                          x1    B      vs. a single problem threat            U
Tragic Slip                            x1    B      extra removal density, grindy matchups C
Cobbled Wings                          x1    C      vs. ground stalls (evasion finisher)   C
```

## ANALYSIS

**The core loop.** Every self-mill effect (Eccentric Farmer, Grapple with the Past, Moldgraf Millipede's ETB, Splinterfright's upkeep trigger) puts lands into the graveyard, which The Gitrog Monster turns into a card each time. Groundskeeper, Grapple, Traverse the Ulvenwald, and Wrenn and Seven's +1/0 modes all buy those lands back, refueling extra land drops (Gitrog) and repeated landfall triggers (Tireless Tracker). This is a closed loop, not a one-shot value creature — it keeps compounding as long as the deck has lands left to cycle.

**Delirium payoff without a dedicated delirium package.** Traverse the Ulvenwald upgrades to a creature-or-land tutor once 4+ card types sit in the graveyard. With creatures, lands, instants, and sorceries all self-milling into the yard naturally (no artifacts/enchantments needed to hit 4 types), delirium turns on organically by turn 3-4 in most games without requiring dedicated support cards.

**Ghoultree math.** With roughly 3-5 creature cards in the graveyard by the midgame (self-mill plus natural attrition), Ghoultree comes down for {4}{G}-{2}{G} instead of {7}{G} — a real curve-topper, not a corner-case 8-drop.

**Rare/mythic budget spent entirely on the engine.** All 5 of the deck's rare/mythic slots (Gitrog, Wrenn and Seven, Traverse the Ulvenwald, Tireless Tracker, Maelstrom Pulse) are either a keystone payoff or the deck's only answer to noncreature permanents — none are "good stuff" riders. This was a deliberate tradeoff: the BG rare dual (Deathcap Glade) was cut in favor of a 5th engine/interaction piece, so the mana base leans on 1 common dual (Haunted Mire) + Evolving Wilds + basics. The audit still passes clean (gaps under 2pp both colors) because this is a 2-color, non-splash build.

**Matchup read.** This cube's dominant tags are aggro/tempo/removal/token/humans — a faster environment than this deck's grindy gameplan. The maindeck's 8-card interaction suite (6 removal spells + Morbid Opportunist's card draw off trades + Young Wolf's undying) is built to survive to the midgame; the sideboard adds a second, more targeted layer (Killing Wave/Sever the Bloodline vs. go-wide swarms, Geistcatcher's Rig/Bramble Wurm vs. fliers) for the matchups where 25% maindeck interaction isn't enough.

**Self-grill revision.** The first draft included Moonlight Hunt in the removal suite, but the Challenger agent flagged it as conditionally dead (it only triggers off a Wolf/Werewolf you control, and only 3 such permanents exist in the whole 40). It was swapped for Morbid Opportunist, which draws a card off any creature death — unconditional value instead of a card that can brick.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- *Garruk Relentless // Garruk, the Veil-Cursed* (BG mythic) — a strong gold planeswalker (sac-outlet tutor + GY-scaling pump) that lost out to Maelstrom Pulse's broader answer range. Best swap-in if you want more proactive value over interaction.
- *Cultivator Colossus* (G mythic) — a near-perfect lands-matter top-end payoff (P/T = lands you control, chains extra land drops into card draw), but a 7-mana card competing with Ghoultree for the curve-top slot; passed on for a lower curve.
- *Hermit Druid* (G rare) — best-in-pool self-mill engine on paper, but this build runs 14 basics out of 16 lands, so it would usually hit a basic almost immediately and mill very little. Only worth it if you rebuild the mana base around minimizing basics (a genuinely different sub-archetype).
- *Deathcap Glade* (BG rare dual) — strictly better fixing than Haunted Mire (conditionally untapped), but including it would mean cutting one of the 5 chosen rares/mythics for a land upgrade; the audit passes without it so it wasn't worth the tradeoff.
- *Griselbrand, Distended Mindbender, Collective Brutality, Eldritch Evolution, Skirsdag High Priest* — all strong B/G rares, but none advance the lands/graveyard plan as directly as the 5 chosen slots.

**Uncommons/commons a tier below the chosen includes:**
- *Vilespawn Spider* (GU uncommon) — the strongest self-mill engine outside BG, but it demands a blue splash for one card; cut to keep the mana base a clean 2-color build. Reconsider if you're willing to add Tangled Islet + a couple Islands.
- *Moonlight Hunt* (G uncommon) — cut from the mainboard in the self-grill pass (see above). Swapped for Morbid Opportunist.
- *Archghoul of Thraben, Haunted Dead, Falkenrath Torturer, Grizzled Angler // Grisly Anglerfish* — solid graveyard/self-mill uncommons, all mono-color, all reasonable 1-for-1 swaps if you want to reshuffle the creature base later.
- *Deranged Assistant, Reckless Scholar* (both mono-U) — good cheap self-mill/looting bodies, excluded only because they're off-color for a splash-free BG build.

**Sideboard-consideration cards not included:**
- *Collective Brutality* (B rare) — excellent flexible disruption (discard/removal/drain modes with escalate), but would have pushed the rare/mythic count to 6; passed over for commons/uncommons only in the SB.
- *Morkrut Banshee* (B uncommon) — a morbid removal-on-a-body creature, close alternative to Festerhide Boar for the anti-aggro slot.
- *Imprisoned in the Moon* (U common) — would answer problem enchantments/planeswalkers/lands, but is off-color for this build.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  29.6%  prod  31.2%  gap  -1.6pp  [OK]
  G  demand  70.4%  prod  68.8%  gap  +1.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: max 2 copies each -- only Tragic Slip repeats (1 MB + 1 SB = 2/2)
[PASS] Rares/mythics: max 1 copy each -- all 5 are singleton
[PASS] Max 5 rares/mythics total across MB+SB -- exactly 5/5 (Gitrog, Wrenn and Seven,
       Traverse the Ulvenwald, Tireless Tracker, Maelstrom Pulse)
[PASS] All 50 cards (40 MB + 10 SB) verified present in cube working pool by exact name
[PASS] All color identities within {B, G} -- no splash color used
```
