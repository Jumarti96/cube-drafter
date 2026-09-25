---
deck_name: "ubg-terravore-graveyard-lands"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UBG"
format: "40-card"
built_at: "2026-07-31T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  4x Forest    basic
  3x Island    basic
  1x Hinterland Harbor    GU dual, untapped if you control a Forest or Island
  1x Mishra's Factory    colorless manland; resilient extra attacker
  1x Polluted Mire    taps for B (splash); Cycling {2} — bins the land for Terravore + a 3rd black source
  1x Remote Isle    taps for U; Cycling {2} — bins the land for Terravore
  1x Slippery Karst    taps for G; Cycling {2} — bins the land itself for Terravore
  1x Terminal Moraine    taps for C; sac to fetch a basic and put a land in the graveyard
  1x Woodland Cemetery    BG dual, untapped if you control a Swamp or Forest
  2x Tangled Islet    GU dual (Forest Island), enters tapped
  1x Haunted Mire    BG dual, enters tapped
```

### CREATURES (8)
```
CMC  Card                       Qty  Color  Role                           Rar
  1  Birds of Paradise          x1  G      Ramp + 3-color fixing          R
  2  Aquamoeba                  x1  U      Beater + discard outlet (GY fill) C
  2  Millikin                   x1  C      Self-mill + ramp (Terravore fuel) U
  2  Werebear                   x1  G      Threshold beater + ramp        C
  3  Man-o'-War                 x1  U      Tempo bounce                   C
  3  Terravore                  x1  G      Graveyard-lands trampler (payoff) U
  4  Aven Fisher                x1  U      Flier, replaces itself         C
  4  Thieving Magpie            x1  U      Evasive card advantage         U
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                       Qty  Color  Role                           Rar
  1  Crop Rotation              x1  G      Sac-land-to-GY + land tutor    U
  2  Chainer's Edict            x1  B      Edict removal (B splash)       U
  2  Counterspell               x1  U      Permission                     C
  2  Nature's Lore              x1  G      Ramp                           U
  2  Snap                       x1  U      Tempo bounce + untap           C
  3  Call of the Herd           x1  G      Resilient token threat (flashback) U
  3  Circular Logic             x1  U      Permission (graveyard-scaled)  U
  3  Frantic Search             x1  U      Dig + discard lands to GY      C
  3  Life // Death              x1  BG     Land-animation alpha finisher (B splash) U
  3  Primal Boost               x1  G      Combat trick or cycle          C
  5  Urborg Uprising            x1  B      Recursion + draw (B splash)    C
```

### OTHER SPELLS (4)
```
CMC  Card                       Qty  Color  Role                           Rar
  1  Wild Growth                x1  G      Ramp                           C
  3  Jalum Tome                 x1  C      Repeatable loot (GY fill)      C
  3  Seton's Desire             x1  G      Threshold combat aura          C
  3  Squirrel Nest              x1  G      Token clock on a land          U
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in                            Rar
Tormod's Crypt           x1  C      GY hate: vs a faster reanimator/threshold deck (one-shot; also exiles your own yard) U
Giant Spider             x1  G      Reach blocker: vs the cube's 42 fliers and ground aggro C
Lull                     x1  G      Fog: vs an aggro alpha strike; cycles when dead    C
Break Asunder            x1  G      Artifact/ench removal: vs artifact/enchantment decks (Voltron, enchantress) C
Man-o'-War               x1  U      Tempo bounce: vs creature-heavy matchups           C
Counterspell             x1  U      Permission: vs control/combo                       C
Wall of Junk             x1  C      Recurring blocker: vs aggro ground swarm           U
Emerald Charm            x1  G      Flex: vs evasion (strip flying), non-Aura enchantments, or an untap trick C
Deep Analysis            x1  U      Card advantage: vs grindy control; flashback for a second draw-2 C
Maze of Ith              x1  C      Defensive land: vs a big single attacker; Crop Rotation target R
```

## ANALYSIS
### DECK IDENTITY
GU Terravore graveyard-lands tempo with a light black splash. Self-mill and land-sacrifice (Millikin, Crop Rotation, Terminal Moraine, Polluted Mire) plus cyclers stock lands into graveyards, growing Terravore into a real threat by turn 4-5 alongside threshold beaters (Werebear, Seton's Desire) and a Squirrel Nest token clock. Bounce and permission (Man-o'-War, Snap, Counterspell, Circular Logic) plus a black splash for Chainer's Edict (edict removal) and Urborg Uprising (recursion) protect and rebuild the clock, and Life // Death animates all your lands for a lethal alpha swing.

**Terravore is a mid-game threat, not a turn-3 nut draw — and that is honest.** Its size equals land cards in all graveyards, and this deck has 5 reliable land-to-graveyard enablers: Crop Rotation (sac a land), Terminal Moraine (sac itself), and three Cycling lands (Slippery Karst, Remote Isle, Polluted Mire) that discard the land itself. Each nets +1 and costs tempo, so a realistic turn-3-4 Terravore is ~2-4 power and becomes a large trampler by turn 5-6. The deck's clock is really a turn-5 threshold-tempo clock (matching the assembly check's thesis turn), backed by evasive Thieving Magpie/Aven Fisher and the token engine while the graveyard fills.

**Threshold is the payoff the whole engine feeds.** Roughly 9 cards fill the graveyard (Millikin mill, Jalum Tome loot, Frantic Search discard, Aquamoeba discard outlet, three cyclers, Chainer's flashback, dead creatures), so 7+ cards is reliably online by turn 4-5. That flips Werebear to a 4/4, switches on Seton's Desire's lure, and turns Circular Logic into a near-hard counter (tax = {1} per graveyard card). Call of the Herd replaced Battlefield Scrounger precisely because Scrounger's pump bottoms three graveyard cards and would fight this engine.

**The black splash is minimal and each card does something GU cannot.** Exactly three single-pip black cards on four sources (Woodland Cemetery, Haunted Mire, Polluted Mire + Birds of Paradise): Chainer's Edict is non-targeted removal for the hexproof/oversized threats that brick the deck's bounce and counters; Urborg Uprising rebuys the beaters the deck deliberately dumps into the yard; and Life // Death is the finisher. Note Life // Death is a SORCERY — the land-animation alpha is powerful but sorcery-speed and telegraphed, so it wants a clear board or a protected turn, not a surprise end-step swing.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:3  2:7  3:10  4:2  5:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies → p=0.90 (need ≥ 0.75)
  PASS  enabler: 7 copies → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 45%  T2 91%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Squirrel Nest, Life // Death, Man-o'-War
  OK        single_large_threat: Chainer's Edict, Man-o'-War, Snap, Counterspell, Circular Logic
  OK        noncreature_permanents: Counterspell, Circular Logic
  OK        stack: Counterspell, Circular Logic
  CONCEDED  graveyard: Deck relies on its own graveyard (Terravore/threshold/Urborg Uprising); no maindeck GY hate. Vs a faster reanimator it races and can board Tormod's Crypt as a one-shot.
```
- curve PASS — low tempo curve (avg MV 2.6); the cluster at MV3 (Terravore, Squirrel Nest, Battlefield-replacement Call of the Herd, threshold pieces) is the on-plan body count.
- goldfish PASS — keepable 86%, 3 lands by turn 3 at 88%.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Excess lands GROW the payoff: Terravore's P/T = land cards in all graveyards, and Slippery Karst/Remote Isle/Polluted Mire Cycling {2}, Crop Rotation, and Terminal Moraine all convert surplus lands into graveyard lands (bigger Terravore) plus a card or fixing. Squirrel Nest and Millikin also sink extra mana. Never dead. |
| screw | mitigation | Low curve (avg MV 2.6) and 4 real accelerants (Birds of Paradise, Wild Growth, Nature's Lore, Werebear) keep two-land hands functional; goldfish keepable 86%, 3 lands by T3 88%. Cheap threats (Terravore, Werebear, Call of the Herd) deploy on time. |
| decapitation | mitigation | Terravore answered on sight still leaves Werebear, Call of the Herd (two bodies via flashback), Thieving Magpie, Aven Fisher, and Squirrel Nest as threats, and Urborg Uprising ('return up to two creature cards from your graveyard') rebuys a killed beater. No single removal turns the clock off. |
| gas-out | mitigation | Refuel from Frantic Search, Jalum Tome (repeatable loot), Thieving Magpie, Aven Fisher (dies: draw), Urborg Uprising (recur + draw), and Squirrel Nest converting mana into board. An empty hand refills while the graveyard grows Terravore. |
| raced | mitigation | This deck is the aggressor (goldfish t5): a growing Terravore plus Chainer's Edict, Man-o'-War/Snap tempo, and Counterspell let it disrupt the opposing clock, while threshold blockers (Werebear) and Life // Death chumps stabilize if behind. |
| disruption-fizzle | mitigation | The clock is not one fragile turn: threats are redundant and cheap, Urborg Uprising rebuys an answered threat, and Counterspell/Circular Logic protect the key swing. Life // Death is a sorcery-speed alpha, so it is deployed on a protected or clear board rather than as a surprise — one interaction spell trades without ending the plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Battlefield Scrounger | Cut post-grill for Call of the Herd: its threshold pump bottoms 3 graveyard cards, shrinking Terravore and risking dropping below the 7-card threshold — it cannibalizes the exact resource the engine builds. |
| Fa'adiyah Seer | Looks like graveyard fuel but its oracle keeps LANDS in hand and discards only nonlands, so it does NOT grow Terravore's land-in-graveyard count; excluded. |
| Nut Collector (M) | Threshold Squirrel payoff, but 6 mana is off the turn-5 tempo curve and it would spend a rare/mythic slot the fixing needs more. |
| Oversold Cemetery (R) / Dread Return / Entomb | A dedicated black reanimator package would blow the 3-card B-splash cap and pull the deck off its GU tempo plan. |
| Krosan Restorer / Exploration (R) | Threshold untap-ramp and extra land drops help lands-matter generally but don't put lands in the graveyard; off the lean tempo plan (Exploration also costs a cap slot better spent on fixing). |
| Kamahl, Fist of Krosa (M) | Overrun finisher, but off the cheap curve and a cap slot; Life // Death is the in-budget land-animation finisher. |
| High Tide / Urza, Lord High Artificer | The Deck B big-mana engine — off-theme for a graveyard-lands tempo clock. |
| Dark Depths (M) | No Hexmage/Stage enabler in pool; 30 mana to make the token — not viable, and a cap slot. |
| Gemstone Mine (R) / Maze of Ith (R, mainboard) | Rare fixing/utility lands; Maze of Ith is kept in the SIDEBOARD as a Crop Rotation target vs big attackers, and the maindeck base uses Woodland Cemetery/Haunted Mire/Polluted Mire instead. |


## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.85 adj [MV 2.61 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  54.5%  prod  58.8%  gap  -4.3pp  [OK]
  U  demand  45.5%  prod  41.2%  gap  +4.3pp  [OK]

Splash Check: [PASS]
  B  3 card(s), max CMC 5  sources 3/3  [OK]
```


## RESTRICTIONS COMPLIANCE
```
  Deck size: 40 mainboard — PASS
  Sideboard size: 10 — PASS
  Copy limits (common/uncommon <=2, rare/mythic <=1): PASS (2x Tangled Islet; 2x Man-o'-War & 2x Counterspell across boards; all else 1x; basics unlimited)
  Rare/mythic total <=5 (incl lands): 4/5 — Birds of Paradise, Woodland Cemetery, Hinterland Harbor + Maze of Ith[SB] — PASS
  Black splash <=3 cards: 3/3 — Chainer's Edict, Urborg Uprising, Life // Death; 3 B sources — PASS
  Colors within GU + B splash (usable mode): PASS
  All cards from cube pool: PASS
```
