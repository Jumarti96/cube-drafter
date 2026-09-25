---
deck_name: "gu-tatyova-landfall-value"
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
  6x Forest    basic
  4x Island    basic
  1x Hinterland Harbor    GU dual, untapped if you control a Forest or Island
  1x Mishra's Factory    colorless manland; extra body under Kamahl
  1x Remote Isle    taps for U; Cycling {2}
  1x Slippery Karst    taps for G; Cycling {2} — flood insurance + bins a land for Terravore
  1x Terminal Moraine    taps for C; sac to fetch a basic (triggers Tatyova)
  2x Tangled Islet    GU dual (Forest Island), enters tapped
```

### CREATURES (10)
```
CMC  Card                       Qty  Color  Role                           Rar
  1  Birds of Paradise          x1  G      Ramp + any-color fixing        R
  2  Werebear                   x1  G      Ramp dork / threshold beater   C
  3  Krosan Restorer            x1  G      Untap-lands ramp               C
  3  Man-o'-War                 x1  U      Tempo bounce on a body         C
  3  Terravore                  x1  G      Scaling beater (late)          U
  4  Aven Fisher                x1  U      Flier, replaces itself         C
  4  Thieving Magpie            x1  U      Evasive card advantage         U
  5  Tatyova, Benthic Druid     x1  GU     Landfall card+life engine      U
  6  Kamahl, Fist of Krosa      x1  G      Finisher / land-animating overrun M
  7  Aven Fateshaper            x1  U      Top-end flier + scry           U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                       Qty  Color  Role                           Rar
  1  Crop Rotation              x1  G      Land toolbox tutor             U
  2  Counterspell               x1  U      Permission                     C
  2  Nature's Lore              x1  G      Ramp + landfall trigger        U
  2  Snap                       x1  U      Tempo bounce + untap           C
  3  Circular Logic             x1  U      Scaling permission / madness   U
  3  Frantic Search             x1  U      Filtering + GY fill            C
  4  Break Asunder              x1  G      Artifact/enchantment removal   C
  4  Fact or Fiction            x1  U      Card advantage + GY fill       U
```

### OTHER SPELLS (5)
```
CMC  Card                       Qty  Color  Role                           Rar
  1  Exploration                x1  G      Extra land drops               R
  1  Wild Growth                x1  G      Ramp aura                      C
  2  Mind Stone                 x1  C      Ramp / late cantrip            C
  2  Sylvan Library             x1  G      Card-selection engine          M
  3  Squirrel Nest              x1  G      Token generator on a land      U
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in                            Rar
Tormod's Crypt           x1  C      GY hate: vs graveyard/reanimator/threshold (cube GY density 18.75%) U
Floodgate                x1  U      Sweeper: vs go-wide GROUND aggro (LTB damage to nonblue nonflyers = half your Islands) U
Giant Spider             x1  G      Blocker: vs fliers and ground aggro                C
Lull                     x1  G      Fog: vs an aggro alpha strike / lethal attack; cycles when dead C
Break Asunder            x1  G      Artifact/ench removal: vs artifact/enchantment-heavy (Voltron, enchantress, Umbilicus) C
Ovinomancer              x1  U      Repeatable removal: vs a single must-kill threat (Voltron / a lone fatty) U
Counterspell             x1  U      Permission: vs control/combo                       C
Deep Analysis            x1  U      Card advantage: vs grindy control mirror; flashback for a second draw-2 C
Illusion // Reality      x1  GU     Flex removal: vs artifacts + as a color/combat trick U
Emerald Charm            x1  G      Flex: vs evasion (strip flying), non-Aura enchantments, or an untap trick C
```

## ANALYSIS
### DECK IDENTITY
GU Lands-Matter value midrange. Ramp and extra land drops (Exploration, Birds of Paradise, Nature's Lore, Wild Growth) feed Tatyova, Benthic Druid, turning every land that enters into a card and a life. The deck grinds a card-advantage lead through redundant engines (Sylvan Library, Fact or Fiction, Thieving Magpie, Aven Fisher/Fateshaper) while GU permission (Counterspell, Circular Logic) and tempo bounce (Man-o'-War, Snap) hold the board, then closes with evasive fliers or Kamahl, Fist of Krosa's team +3/+3 trample overrun animating a flooded battlefield.

**The engine is intentionally redundant, not a single combo.** The thesis names Exploration + Tatyova, but neither is load-bearing alone: 6 payoff threats and 10 enablers give assembly p=0.90/0.98 by turn 7. A removal spell on Tatyova still leaves Sylvan Library, Fact or Fiction, Thieving Magpie, and the Aven fliers drawing cards, and Kamahl closes independently. This is why decapitation is a mitigation rather than an accepted risk.

**Every surplus land has a job — flood is a non-issue.** Excess lands convert to action four ways: Tatyova (draw+life per land), Squirrel Nest ({T}: make a 1/1 Squirrel), the cyclers Slippery Karst / Remote Isle (Cycling {2}), and Kamahl ({G}: animate a land as a 1/1, then {2}{G}{G}{G} to pump the team). Mind Stone and Sylvan Library also cash extra draws. The deck runs 17 lands (one over the computed 16) precisely because the flood downside is neutralized while the top end (Kamahl's GGG overrun, Aven Fateshaper) rewards hitting land drops.

**Removal is deliberately tempo-based, an accepted cost of GU in this cube.** The pool offers essentially no clean creature removal in green or blue, so the deck interacts with bounce (Man-o'-War, Snap) plus permission (Counterspell, Circular Logic) and races with lifegain. Ovinomancer — the only repeatable hard removal available — sits in the sideboard because its ETB bounces three of your own basics, fighting the land engine; it comes in only against decks with a single must-kill threat.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:6  3:6  4:4  5:1  6:1  7:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies → p=0.90 (need ≥ 0.75)
  PASS  enabler: 10 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 55%  T2 91%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Squirrel Nest, Kamahl, Fist of Krosa, Tatyova, Benthic Druid
  OK        single_large_threat: Man-o'-War, Snap, Counterspell, Circular Logic, Kamahl, Fist of Krosa
  OK        noncreature_permanents: Break Asunder, Counterspell, Circular Logic
  OK        stack: Counterspell, Circular Logic
  CONCEDED  graveyard: No dedicated GY hate main; boards Tormod's Crypt vs reanimator/threshold.
```
- curve PASS — no response needed; the 1-drop count (4) is ramp/enablers that enable the higher top end.
- goldfish PASS — keepable 85%, 3 lands by turn 3 at 88%; no response needed.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Surplus lands convert to action: Tatyova draws+gains per land; Squirrel Nest '{T}: Create a 1/1 Squirrel'; Kamahl '{G}: target land becomes a 1/1' + team overrun; Slippery Karst/Remote Isle Cycling {2}; Mind Stone sac-to-draw; Sylvan Library. Excess lands are never dead. |
| screw | mitigation | 7 accelerants (Birds T1 any-color, Wild Growth, Nature's Lore, Mind Stone, Werebear, Krosan Restorer, Exploration) plus cyclers and Fact or Fiction dig toward the third land. Goldfish keepable 85%, 3 lands by T3 88%. |
| decapitation | mitigation | Engine is redundant: Tatyova answered on sight still leaves Sylvan Library, Fact or Fiction, Thieving Magpie, Aven Fisher, Aven Fateshaper for cards and Kamahl as an independent finisher. No single removal turns the deck off. |
| gas-out | mitigation | High refuel density (Cards: Net-Positive/Self-Replacing): Tatyova (draw/land), Sylvan Library (draw two extra each turn), Fact or Fiction, Thieving Magpie, Aven Fisher (dies: draw), Aven Fateshaper (scry 4), plus Squirrel Nest turning mana into board. An empty hand refills within a turn of the engine. |
| raced | accepted | Maindecking more early blockers/removal to beat the fastest aggro would displace the ramp + card-advantage core that IS the win condition. Cost accepted: pre-board vs the fastest starts the deck is the beatdown's underdog, relying on Tatyova lifegain + Man-o'-War/Snap tempo; the aggro plan is a post-board job (Floodgate, Giant Spider, Lull). |
| disruption-fizzle | mitigation | The kill is not one fragile turn: evasive fliers (Thieving Magpie, Aven Fateshaper, Aven Fisher) each close independently of Kamahl, and the overrun can be protected by Counterspell/Circular Logic. One interaction spell trades and the engine draws the next threat. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Arcanis the Omnipotent (R) | Draw-3 engine, cut post-grill for Sylvan Library: 6-mana UUU strained ~8 U sources; Sylvan is a {1}{G} turn-2 engine that removes the pip risk. |
| Fa'adiyah Seer | Repeatable {T} draw-keep-only-lands, swapped for Fact or Fiction — tempo-negative and card-neutral vs FoF's instant card advantage + graveyard fill. |
| Force of Will (M) | Free counter, but the 5 rare/mythic slots went to Exploration/Birds/Kamahl/Sylvan Library/Hinterland Harbor. Would need to cut an engine piece. |
| Jolrael, Mwonvuli Recluse (R) | Second-draw token engine (this deck draws 2+ most turns) — strong but excluded by the 5 rare/mythic cap. |
| Vexing Sphinx / Mystic Remora (R) | Rare card-advantage pieces one tier below the chosen rares; both cost a cap slot the engine cards use better. |
| Gemstone Mine / Maze of Ith / Woodland Cemetery (R lands) | Rare fixing/utility lands, all excluded by the 5-cap (Hinterland Harbor is the one rare land the base can afford). |
| Dark Depths (M) | No Vampire Hexmage or Thespian's Stage in pool; removing 10 ice counters at {3} each = 30 mana. Not a competitive kill, and a cap slot. |
| High Tide / Peregrine Drake / Cloud of Faeries | Untap-lands mana bursts define the Deck B big-mana plan; here they are vanilla fliers with no mana sink to convert the burst into a win. |
| Ovinomancer | Repeatable hard removal, but its ETB bounces three of your own basics — kept to the sideboard where the land-engine tempo hit is acceptable, not maindeck. |
| Life // Death | Black half is off-color for the mono-GU core; the reanimation target pool is thin. |
| Juggernaut / Glintwing Invoker | Colorless/blue beaters with no land-engine synergy; evasive fliers and Kamahl close better and pull double duty. |


## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 7   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.55 adj [MV 2.96 vs 2.5, 7 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  58.6%  prod  58.8%  gap  -0.2pp  [OK]
  U  demand  41.4%  prod  47.1%  gap  -5.7pp  [OK]
```


## RESTRICTIONS COMPLIANCE
```
  Deck size: 40 mainboard — PASS
  Sideboard size: 10 — PASS
  Copy limits (common/uncommon <=2, rare/mythic <=1): PASS (only 2x Tangled Islet; all else 1x; basics unlimited)
  Rare/mythic total <=5 (incl lands): 5/5 — Kamahl, Sylvan Library, Exploration, Birds of Paradise, Hinterland Harbor — PASS
  Colors within GU (usable mode): PASS — all cards GU/colorless-castable
  All cards from cube pool: PASS
```
