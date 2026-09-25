---
deck_name: "gu-high-tide-big-mana"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GU"
format: "40-card"
built_at: "2026-07-31T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  2x Forest    basic — green ramp support
  9x Island    basic — High Tide + Gauntlet fuel
  1x Hinterland Harbor    GU dual, untapped if you control a Forest or Island
  1x Mishra's Factory    colorless manland; extra body / artifact when animated
  1x Slippery Karst    taps for G; Cycling {2} — flood insurance
  1x Terminal Moraine    taps for C; sac to fetch a basic Island or Forest
  2x Tangled Islet    GU dual (Forest Island) — carries the Island subtype, so High Tide sees it
```

### CREATURES (10)
```
CMC  Card                       Qty  Color  Role                           Rar
  1  Birds of Paradise          x1  G      Ramp + any-color fixing        R
  2  Cloud of Faeries           x1  U      Untap two lands + cycle        C
  2  Stonewood Invoker          x1  G      Green mana-sink finisher       C
  3  Krosan Restorer            x1  G      Untap lands (threshold)        C
  3  Man-o'-War                 x1  U      Tempo bounce                   C
  4  Thieving Magpie            x1  U      Evasive card advantage         U
  4  Urza, Lord High Artificer  x1  U      Mana engine + free-cast chain  M
  5  Glintwing Invoker          x1  U      Mana-sink finisher (flying)    C
  5  Peregrine Drake            x1  U      Untap five lands               C
  7  Aven Fateshaper            x1  U      Evasive top-end + scry sink    U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                       Qty  Color  Role                           Rar
  1  High Tide                  x2  U      Mana multiplier (Islands)      U
  2  Counterspell               x1  U      Permission                     C
  2  Nature's Lore              x1  G      Ramp                           U
  3  Circular Logic             x1  U      Permission / madness           U
  3  Frantic Search             x1  U      Untap three + dig              C
  4  Deep Analysis              x1  U      Card advantage + flashback     C
  4  Fact or Fiction            x1  U      Card advantage                 U
  4  Turnabout                  x1  U      Untap all your lands           U
```

### OTHER SPELLS (4)
```
CMC  Card                       Qty  Color  Role                           Rar
  1  Exploration                x1  G      Extra land drops               R
  1  Wild Growth                x1  G      Ramp multiplier                C
  2  Mind Stone                 x1  C      Ramp / cantrip / artifact for Urza C
  5  Gauntlet of Power          x1  C      Mana multiplier (basics)       M
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in                            Rar
Tormod's Crypt           x1  C      GY hate: vs graveyard/reanimator/threshold (cube GY density 18.75%) U
Floodgate                x1  U      Sweeper: vs go-wide/aggro — its damage misses your blue creatures and fliers U
Giant Spider             x1  G      Reach blocker: vs the cube's 42 fliers and ground aggro (bring both copies) C
Giant Spider             x1  G      Reach blocker: 2nd copy vs fliers/aggro            C
Lull                     x1  G      Fog: vs an aggro alpha strike; cycles when dead    C
Break Asunder            x1  G      Artifact/ench removal: vs resolved problem permanents (opposing Gauntlet, Icy Manipulator, Arboria) C
Counterspell             x1  U      Permission: vs control/combo mirrors               C
Circular Logic           x1  U      Permission: vs control/combo; late-game hard counter U
Man-o'-War               x1  U      Tempo bounce: vs creature aggro/tempo              C
Wall of Junk             x1  C      Recurring blocker: vs aggro ground swarm           U
```

## ANALYSIS
### DECK IDENTITY
GU High Tide big-mana. Green ramp (Birds of Paradise, Wild Growth, Nature's Lore, Exploration) bridges into a blue-heavy Island base that High Tide and Gauntlet of Power turn explosive; untap-lands effects (Peregrine Drake, Turnabout, Frantic Search, Cloud of Faeries, Krosan Restorer) refund the mana for one overwhelming turn. That mana sinks into Urza, Lord High Artificer's '{5}: exile the top card and cast it free' chain, or into Glintwing/Stonewood Invoker and Aven Fateshaper to deploy a lethal board faster than the opponent can answer, with Counterspell and Circular Logic protecting the turn.

**The two-multiplier math is the engine.** With High Tide up, each of the 11 Islands (9 basic + 2 Tangled Islet) taps for {U}{U}; add a blue Gauntlet of Power and each of the 9 basic Islands taps for {U}{U}{U}. Turnabout ('untap all tapped permanents of the chosen type') or Peregrine Drake ('untap up to five lands') then refunds that mana, so a single untapper on a High-Tide turn nets a huge blue pool — enough for Urza's repeated '{5}: exile the top card, cast it free' chain or an 8-mana uncounterable Invoker swing.

**Payoff redundancy solves the singleton problem.** Urza is a mythic 1-of, so the deck cannot rely on drawing it: the win is spread across five interchangeable mana sinks — Urza, Glintwing Invoker ({7}{U}: +3/+3 flying), Stonewood Invoker ({7}{G}: +5/+5), Aven Fateshaper, and Thieving Magpie. That redundancy is what gives the assembly check p=0.82 of seeing a payoff by turn 6, and why decapitation is a mitigation, not an accepted risk.

**The kill is a grindy board-deploy, not a storm burst — by constraint.** The pool's true High-Tide overflow payoffs (Stroke of Genius, Sylvan Library, Mystic Remora) are all locked out by the 5 rare/mythic cap, and there is no on-color storm finisher. So the deck converts its mana into permanents and card advantage (Urza's free-cast chain, Invokers, Fact or Fiction/Deep Analysis) rather than a one-shot X-spell. This is a documented ceiling of the pool under the restriction, not a build error.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:5  2:5  3:4  4:5  5:3  7:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 5 copies → p=0.82 (need ≥ 0.75)
  PASS  mana_engine: 11 copies (effective 10.6: Krosan Restorer@0.6) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 63%  T2 91%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Glintwing Invoker, Gauntlet of Power, Man-o'-War
  OK        single_large_threat: Man-o'-War, Counterspell, Circular Logic
  OK        noncreature_permanents: Counterspell, Circular Logic
  OK        stack: Counterspell, Circular Logic
  CONCEDED  graveyard: No maindeck GY hate; deck out-values and boards Tormod's Crypt vs reanimator/threshold.
```
- curve PASS — combo curve accepted; the cluster at 4-5 (Gauntlet, Peregrine Drake, Glintwing Invoker, Urza) and the lone 7 (Aven Fateshaper) are the mana sinks the ramp/untap engine feeds.
- goldfish PASS — keepable 83%, 3 lands by turn 3 at 88%; no response needed.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Excess lands ARE the win condition: more Islands = more High Tide + Gauntlet mana. Surplus also feeds Turnabout/Peregrine Drake refunds, Slippery Karst/Cloud of Faeries Cycling {2}, Mind Stone sac-draw, and Urza's '{5}: exile top card, cast it free' sink. Never dead. |
| screw | mitigation | 11 accelerants (Birds, Wild Growth, Nature's Lore, Mind Stone, Exploration + the untappers) plus cyclers dig toward lands; goldfish keepable 83%, 3 lands by T3 88%. Green ramp online early bridges to the blue base. |
| decapitation | mitigation | Both engine and payoff are redundant: Urza answered on sight still leaves Glintwing/Stonewood Invoker, Aven Fateshaper, Thieving Magpie as mana sinks, and 2x High Tide / Gauntlet / the untappers are interchangeable. No single removal turns the deck off. |
| gas-out | mitigation | Refuel density: Fact or Fiction, Deep Analysis (+ flashback), Frantic Search, Cloud of Faeries (cycle), Aven Fateshaper (scry 4), and Urza's {5} free-cast chain turn surplus mana into cards. An empty hand refills the same turn the engine fires. |
| raced | accepted | The deck must assemble a mana turn, so it stabilizes slower than pure aggro; maindecking more early blockers/removal would dilute the ~15-piece engine that is the win condition. Cost accepted: pre-board vs the fastest starts the deck is behind, relying on Man-o'-War tempo and Counterspell; the aggro plan is post-board (Floodgate, 2x Giant Spider, Lull, Wall of Junk). |
| disruption-fizzle | mitigation | Counterspell and Circular Logic protect the key turn; the engine is cheap and redundant enough to retry next turn (2x High Tide {U}, untappers), and Urza's mana can be spent incrementally rather than all-in, so one interaction spell trades without ending the plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Snap | Cut post-grill for a 2nd High Tide — Snap untaps only 2 lands and is the weakest untapper; a second copy of the namesake multiplier matters more. |
| Elvish Aberration | Cut post-grill for Turnabout — its {T}: Add {G}{G}{G} doesn't feed the blue High Tide plan, while Turnabout untaps ALL your lands for the biggest refund available. |
| Arcanis the Omnipotent (R) | A mana-fed draw engine, but Urza already provides the {5} mana sink; excluded by the 5 rare/mythic cap. |
| Stroke of Genius (R) | The ideal High Tide X-draw payoff, but rare-cap-locked (would require cutting Urza/Gauntlet/Birds/Exploration/Hinterland). |
| Sylvan Library / Mystic Remora / Vexing Sphinx (M/R) | Premium card-advantage engines, all excluded by the 5 rare/mythic cap; the gas plan is built from Fact or Fiction / Deep Analysis / Frantic Search instead. |
| Kamahl, Fist of Krosa (M) | Overrun finisher, but would be a 6th rare/mythic; the Invokers are the in-budget mana sinks. |
| Ornithopter / Millikin / Dragon Engine | Colorless artifacts to tap for Urza's {U}, but Urza functions here as the {5} free-cast sink without them; adding filler artifacts dilutes the engine. |
| Ovinomancer (SB) | Repeatable removal, but its ETB returns three of your own basic lands — directly anti-synergistic with the land-count/High Tide plan; replaced in the SB by a 2nd Giant Spider vs the cube's 42 fliers. |
| Dark Depths (M) | No Vampire Hexmage/Thespian's Stage in pool; 30 mana to make the token. Not a competitive kill, and a cap slot. |
| Tatyova, Benthic Druid | The incremental-landfall payoff of Deck A; this build wins with a burst mana turn, not per-land value, so Tatyova is off-plan here. |


## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 11   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.17 adj [MV 3.0 vs 2.5, 11 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  24.0%  prod  35.3%  gap -11.3pp  [OK]
  U  demand  76.0%  prod  70.6%  gap  +5.4pp  [OK]
```


## RESTRICTIONS COMPLIANCE
```
  Deck size: 40 mainboard — PASS
  Sideboard size: 10 — PASS
  Copy limits (common/uncommon <=2, rare/mythic <=1): PASS (2x High Tide, 2x Tangled Islet, 2x Giant Spider[SB]; cross-board 2x Counterspell/Circular Logic/Man-o'-War; basics unlimited)
  Rare/mythic total <=5 (incl lands): 5/5 — Urza, Gauntlet of Power, Birds of Paradise, Exploration, Hinterland Harbor — PASS
  Colors within GU (usable mode): PASS — all cards GU/colorless-castable
  All cards from cube pool: PASS
```
