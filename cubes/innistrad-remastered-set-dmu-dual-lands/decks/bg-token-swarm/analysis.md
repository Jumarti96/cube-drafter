---
deck_name: "bg-token-swarm"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-07-09T02:37:42Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
CMC  Card             Qty  Color  Role                                  Rar
  0  Forest           x8   G      Basic Forest                          B
  0  Swamp            x4   B      Basic Swamp                           B
  0  Island           x1   U      U splash source, Vilespawn activation B
  0  Haunted Mire     x2   BG     BG dual, enters tapped                C
  0  Evolving Wilds   x1   C      Fetch basic, fills GY for Delirium    C
```

### CREATURES (13)
```
CMC  Card                    Qty  Color  Role                          Rar
  1  Young Wolf              x1   G      Sac fodder, undying            C
  2  Hermit Druid            x1   G      Primary self-mill engine       R
  2  Noose Constrictor       x1   G      Reach, discard outlet          U
  2  Vilespawn Spider        x1   GU     Mill engine, token payoff      U
  3  Eccentric Farmer        x2   G      ETB mill 3, land return        C
  3  Morbid Opportunist      x1   B      Death trigger draw             U
  3  Splinterfright          x2   G      Growing threat, mills 2/upkeep U
  4  Haunted Dead            x1   B      Token + GY recursion           U
  5  Moldgraf Millipede      x2   G      ETB mill 3, grows with yard    C
  8  Ghoultree               x1   G      Undercosted 10/10 beater       U
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                   Qty  Color  Role                          Rar
  1  Deadly Allure          x1   BG     Deathtouch lure, flashback     U
  1  Eaten Alive            x1   B      Exile removal, sac outlet      C
  1  Tragic Slip            x2   B      1-mana morbid removal          C
  1  Traverse the Ulvenwald x1   G      Land fetch, delirium tutor     R
  1  Village Rites          x1   B      Sac draw 2                     C
  2  Grapple with the Past  x2   G      Mill 3 + GY recursion          C
  2  Infernal Grasp         x1   B      Unconditional destroy          U
  5  Spider Spawning        x1   BG     Token swarm, flashback         U
```

### OTHER SPELLS (1)
```
CMC  Card              Qty  Color  Role                     Rar
  3  Soul Separator    x1   C      GY to token copier       U
```

## SIDEBOARD (10)
```
Card                    Qty  Color  Role / When to board in                   Rar
Killing Wave            x1   B      Anti-go-wide, sacrifice sweeper           U
Blood Artist            x1   B      Drain engine vs aggro/stalls              U
Butcher Ghoul           x1   B      Early blocker, undying sac fodder         C
Boarded Window          x1   C      Anti-aggro, transforms to removal         U
Desperate Farmer        x1   B      Lifelink, transforms on creature death    C
Maelstrom Pulse         x1   BG     Catch-all permanent removal               R
Grizzly Ghoul           x1   BG     Trample, grows on creature death          U
Sever the Bloodline     x1   B      Exile sweeper with flashback              U
Epitaph Golem           x1   C      GY protection, return cards to library    C
Morkrut Banshee         x1   B      Morbid -4/-4 ETB on body                  U
```

## ANALYSIS

Self-mill density is 11 enablers (44% of non-lands): Hermit Druid, Splinterfright x2, Moldgraf Millipede x2, Eccentric Farmer x2, Grapple with the Past x2, Vilespawn Spider, and Noose Constrictor as a discard outlet. With this many enablers, the graveyard reliably stocks 6-10 creatures by turn 5, making Spider Spawning produce a lethal token army from a single cast -- and flashback provides a second wave.

The sacrifice sub-theme provides card advantage: Village Rites on a Spider token draws 2 cards while enabling Morbid for Tragic Slip's -13/-13 mode. Young Wolf's undying means it can be sacrificed twice (Village Rites, then Eaten Alive after it returns). Deadly Allure's flashback for G means every mill enabler that hits it in the graveyard effectively draws a second removal spell.

Vilespawn Spider serves a dual role: its 2/3 reach body blocks fliers (Noose Constrictor also provides reach), and its activated ability (2GU, sac: make insects equal to creatures in GY) is a second Spider Spawning effect. The singleton Island is fetched via Evolving Wilds or Traverse the Ulvenwald for this late-game activation only; the card functions perfectly without U as a mill engine + flying blocker.

Delirium for Traverse the Ulvenwald is enabled by the deck's card type diversity: creatures (13), instants/sorceries (10), artifact (Soul Separator), and lands in the graveyard (Evolving Wilds self-sacrifices, Haunted Mire milled or fetched). Once online, Traverse tutors any creature -- typically Hermit Druid to spike mill speed or Splinterfright for immediate pressure.

The deck operates on two axes that reinforce each other: the self-mill axis stocks the graveyard for Spider Spawning and Splinterfright, while the sacrifice axis converts those token bodies into cards (Village Rites, Morbid Opportunist) and removal (Eaten Alive, Tragic Slip). If the opponent removes your payoffs, the sacrifice engine keeps you in the game. If they answer the engine, the mill axis threatens to end the game with a single Spider Spawning cast.

### Cards Considered but Excluded

**Rares/mythics cut due to 5-card cap or strategic mismatch:**
- The Gitrog Monster (mythic, BG) -- powerful draw engine with self-mill synergy, but 5-drop that demands land sacrifice each upkeep; competes with Spider Spawning at the 5-slot
- Wrenn and Seven (mythic, G) -- lands-matter planeswalker, mills 4 on +1; cut for lower-curve enablers that mill more aggressively
- Garruk Relentless (mythic, BG) -- makes wolves, tutors on -1, ult scales with graveyard; extremely strong but mythic slot went to Traverse/Hermit Druid consistency over power ceiling
- Emrakul, the Promised End (mythic, C) -- 13-drop Eldrazi discounted by card types in GY; too inconsistent without dedicated Delirium engine; Ghoultree fills the undercosted beater role at uncommon
- Deathcap Glade (rare, BG) -- rare BG dual that enters untapped with 2+ other lands; skipped to save rare slots (3 rares currently used)
- Cryptolith Rite (rare, G) -- creatures tap for any color mana; strong with tokens but competes with Hermit Druid for the 2-drop slot and rare budget

**Uncommons considered but tier below chosen includes:**
- Gisa's Bidding -- 4-mana sorcery making 2 zombies with madness; Haunted Dead does similar work at the same CMC with better recursion
- Crawl from the Cellar -- returns creature from GY + zombie counter with flashback; cut from sideboard per grill as too narrow (only Haunted Dead as Zombie target)
- Archghoul of Thraben -- zombie death triggers draw; requires zombie density the deck does not have
- Groundskeeper -- recurs basic lands from GY; Eccentric Farmer already handles this at common with a body attached

**Sideboard consideration notes:**
- Murderous Compulsion, Ambush Viper, and Crawl from the Cellar were in the original sideboard but removed during the self-grill. Murderous Compulsion is too conditional (tapped-only); Ambush Viper lacks GY synergy; Crawl from the Cellar targets only one Zombie. Replaced with Butcher Ghoul (early blocker + sac fodder), Epitaph Golem (GY protection against exile-based hate), and Boarded Window (anti-aggro tool that transforms into a pseudo-wrath).
- The Innistrad card pool lacks artifact/enchantment removal in BG colors; Epitaph Golem serves as the closest GY-protection tool by returning key cards from graveyard to library bottom.

## MANA AUDIT: WARN
```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.67   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  36.4%  prod  37.5%  gap  -1.1pp  [OK]
  G  demand  63.6%  prod  62.5%  gap  +1.1pp  [OK]

Splash Check: [WARN]
  U  1 card(s), max CMC 0  sources 1/3  [WARN]
  WARN  U  actual 1 < required 3

Note: The U WARN is for Vilespawn Spider's late-game activated ability
(2GU), not a casting requirement. The card casts for 2G and is fully
functional without U. The singleton Island is fetchable via Evolving
Wilds and Traverse the Ulvenwald.
```

## RESTRICTIONS COMPLIANCE
```
common_max_2:      PASS (no common exceeds 2 copies)
uncommon_max_2:    PASS (Splinterfright 2x is max; all others 1x)
rare_mythic_max_1: PASS (Hermit Druid, Traverse, Maelstrom Pulse: 1x each)
max_5_rares_total: PASS (3 rares used out of 5 allowed)
pool_membership:   PASS (all 27 non-basic cards verified in working pool)
color_identity:    PASS (all cards within BG core + declared U splash)
```