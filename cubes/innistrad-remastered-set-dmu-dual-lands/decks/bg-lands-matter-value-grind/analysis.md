---
deck_name: "bg-lands-matter-value-grind"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-07-09T16:42:54Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

A grindy Black-Green midrange deck where land recursion doubles as card advantage. Groundskeeper, Grapple with the Past, and Eccentric Farmer keep cycling lands between graveyard and hand, feeding The Gitrog Monster's "land into graveyard = draw a card" trigger and Wrenn and Seven's land-focused loyalty abilities. Every extra land drop also lights up Tireless Tracker's Clues and grows Cultivator Colossus, while the self-mill package (Splinterfright, Moldgraf Millipede, Spider Spawning) turns the same graveyard fuel into a second win condition if the land engine gets interrupted.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  7x Forest
  4x Swamp
  2x Haunted Mire        BG dual, enters tapped
  2x Evolving Wilds      Fetches any basic; sac feeds Gitrog's GY trigger
  1x Deathcap Glade      BG dual (rare), untapped from turn 3 on
```

### CREATURES (12)

```
CMC  Card                              Qty  Color  Role                        Rar
  1  Groundskeeper                     x2   G      Land recursion engine        U
  1  Young Wolf                        x1   G      Resilient sac fodder         C
  2  Duskwatch Recruiter // Howler     x1   C      Card selection/consistency   U
  3  Eccentric Farmer                  x1   G      Self-mill + land recursion   C
  3  Morbid Opportunist                x1   B      Draw on creature death       U
  3  Somberwald Sage                   x1   G      Ramp (creature spells only)  U
  3  Splinterfright                    x1   G      Graveyard payoff threat      U
  3  Tireless Tracker                  x1   G      Landfall payoff              R
  5  Moldgraf Millipede                x1   G      Graveyard payoff threat      C
  5  The Gitrog Monster                x1   BG     Keystone engine/payoff       M
  7  Cultivator Colossus               x1   G      Mass finisher                M
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                       Qty  Color  Role                          Rar
  1  Crawl from the Cellar      x1   B      Creature recursion (flashback) C
  1  Eaten Alive                x1   B      Sac-cost exile removal         C
  1  Tragic Slip                x2   B      Cheap removal, morbid upside   C
  1  Village Rites              x1   B      Sac for cards / protect value  C
  2  Grapple with the Past      x2   G      Self-mill + land/creature rec. C
  2  Infernal Grasp             x1   B      Unconditional removal          U
  2  Murderous Compulsion       x1   B      Removal (tapped only)          C
  5  Spider Spawning            x1   G      Token payoff off GY size       U
```

### OTHER SPELLS (2)

```
CMC  Card                Qty  Color  Role                                Rar
  1  Abundant Growth      x1   G      Cantrip + any-color fixing          C
  5  Wrenn and Seven      x1   G      Keystone engine/payoff (walker)     M
```

## SIDEBOARD (10)

```
Card                    Qty  Color  Role / When to board in              Rar
Killing Wave            x2   B      Symmetric sweeper vs aggro/go-wide    U
Butcher Ghoul           x1   B      Resilient swap vs removal-heavy decks C
Duel for Dominance      x1   G      Extra removal vs big/evasive threats  C
Noose Constrictor       x1   G      Reach body vs flyers                 U
Boarded Window          x1   C      Anti-aggro speed bump                U
Clear Shot              x1   G      Extra removal, one-directional       U
Sever the Bloodline     x1   B      Anti-tribal/legend, exiles copies    U
Sanitarium Skeleton     x1   B      Resilient swap vs removal-heavy decks C
Geistcatcher's Rig      x1   C      Dedicated anti-flying removal        U
```

## ANALYSIS

**The engine loop.** Groundskeeper (x2) returns basic lands from graveyard to hand; Grapple with the Past (x2) mills 3 and can grab a land or creature back; Eccentric Farmer mills 3 on ETB and does the same. That's 5 dedicated pieces recycling lands, each replay triggering The Gitrog Monster's "land card into graveyard, draw" and Tireless Tracker's landfall investigate. Evolving Wilds doubles as a Gitrog trigger (sacrificing it puts a land in the graveyard) and a landfall trigger (fetching a basic onto the battlefield) in the same activation.

**Self-mill volume.** Grapple with the Past (x2, mill 3 each), Eccentric Farmer (mill 3), Moldgraf Millipede (mill 3), and Splinterfright (mill 2 every upkeep) can put 8-11+ cards in the graveyard by turn 5-6 without any wasted resources -- most of what's milled is a land you can recur or a creature that fuels Splinterfright/Moldgraf's power or Spider Spawning's token count.

**Somberwald Sage's ramp is creature-only.** Its "any one color, creature spells only" mana accelerates into Gitrog Monster, Cultivator Colossus, and Moldgraf Millipede, but cannot help cast Wrenn and Seven (a planeswalker) -- worth remembering when sequencing a turn.

**Curve.** 9 one-drops, 5 two-drops, 5 three-drops, 4 five-drops, 1 seven-drop. Avg MV 2.54. The five-and-up cluster (Gitrog, Wrenn, Moldgraf Millipede, Spider Spawning, Cultivator Colossus) is real top-end density for a 40-card deck, but the abundance of cheap recursion (7 one-mana spells/creatures) keeps the early turns from being empty.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (deck uses exactly 5: Gitrog Monster, Wrenn and Seven, Tireless Tracker, Cultivator Colossus, Deathcap Glade): Maelstrom Pulse (strictly better removal than Murderous Compulsion), Garruk Relentless // Garruk, the Veil-Cursed (excellent BG value walker, graveyard-scaling ultimate), Collective Brutality (flexible removal/discard/drain), Hermit Druid (explosive but combo-leaning, less fair-midrange fit), Traverse the Ulvenwald (Lands-Matter-tagged tutor), The Meathook Massacre, Sorin, Imperious Bloodlord, Skirsdag High Priest, Gravecrawler, Cryptolith Rite, Griselbrand (no dedicated reanimator package to support it).

**Uncommons/commons a tier below the final cut** (both flagged during self-grill review and swapped out): Wild-Field Scarecrow (fetches lands to hand from the library, not the actual recursion pipeline -- cut for Abundant Growth's mana-fixing cantrip), Archghoul of Thraben (its Zombie-death trigger has no support once Butcher Ghoul moved to sideboard -- cut for Crawl from the Cellar's cleaner recursion). Also considered: Traveler's Amulet (redundant with Groundskeeper/Grapple), Ghoulish Procession, Ecstatic Awakener // Awoken Demon.

**Sideboard considerations not included**: Epitaph Golem (its ability reads "put target card from your graveyard on the bottom of your library" -- it cannot touch an opponent's graveyard, so it doesn't actually function as graveyard hate against opposing recursion decks; cut in favor of a second Killing Wave), Ambush Viper (flash deathtouch blocker, reasonable generic tech but lower priority than the sweeper), Helvault (rare, would need to displace one of the 5 used slots).

## MANA AUDIT: PASS

```
-- Mana Audit: PASS --------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.54   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  33.3%  prod  43.8%  gap -10.5pp  [OK]
  G  demand  66.7%  prod  62.5%  gap  +4.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons/uncommons <= 2 copies each:               PASS
Rares/mythics <= 1 copy each:                     PASS
Max 5 rares/mythics total (main+SB):              PASS - exactly 5 used
  (Cultivator Colossus, Deathcap Glade, The Gitrog Monster,
   Tireless Tracker, Wrenn and Seven)
All cards within BG color identity:               PASS
Deck size: mainboard=40, sideboard=10             PASS
```
