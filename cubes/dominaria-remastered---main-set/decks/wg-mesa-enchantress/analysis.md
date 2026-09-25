---
deck_name: "wg-mesa-enchantress"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WG"
format: "40-card"
built_at: "2026-07-30T01:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x5  Forest               
  x7  Plains               
  x1  Drifting Meadow      W, enters tapped, cycling
  x1  Nantuko Monastery    C, threshold 4/4 manland
  x2  Radiant Grove        WG dual, enters tapped
  x1  Slippery Karst       G, enters tapped, cycling
```

### CREATURES (10)
```
CMC  Card                       Qty  Color  Role                          Rar
  1  Birds of Paradise          x1  G      Ramp / fixing                 R
  2  Jolrael, Mwonvuli Recluse  x1  G      Draw-to-tokens payoff         R
  2  Werebear                   x1  G      Mana dork / threshold beater  C
  3  Auramancer                 x1  W      Enchantment recursion         C
  3  Mesa Enchantress           x2  W      Enchantress draw engine       U
  3  Terravore                  x1  G      Threshold beater              U
  4  Mystic Enforcer            x1  GW     Threshold flyer finisher      U
  4  Voice of All               x1  W      Evasive protection threat     U
  5  Serra Angel                x1  W      Air finisher                  U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                       Qty  Color  Role                          Rar
  1  Emerald Charm              x1  G      Modal utility                 C
  1  Enlightened Tutor          x1  W      Enchantment tutor             R
  1  Swords to Plowshares       x1  W      Premium removal               U
  2  Wax // Wane                x1  GW     Trick / enchantment removal   U
  3  Radiant's Judgment         x1  W      Removal / cycling             C
  3  Sevinne's Reclamation      x1  W      Permanent recursion           R
```

### OTHER SPELLS (7)
```
CMC  Card                       Qty  Color  Role                          Rar
  1  Spirit Link                x1  W      Lifegain aura                 C
  1  Wild Growth                x1  G      Ramp aura                     C
  2  Pacifism                   x1  W      Removal aura                  C
  2  Sylvan Library             x1  G      Card-advantage engine         M
  3  Griffin Guide              x1  W      Evasion aura                  U
  3  Seton's Desire             x1  G      Pump/threshold aura           C
  3  Squirrel Nest              x1  G      Token engine                  U
```

## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                 Rar
Tormod's Crypt             x1  C      Graveyard hate — vs graveyard decks     U
Remedy                     x1  W      Damage prevention — vs burn/alpha strike  C
Call of the Herd           x1  G      Recurring threat — vs removal-heavy/control  U
Nomad Decoy                x1  W      Tapper vs big creatures — vs big-creature decks  C
Renewed Faith              x1  W      Lifegain / cycling — vs aggro/burn      C
Battle Screech             x1  W      Go-wide flyers — vs control (go wide)   U
Break Asunder              x1  G      Artifact/enchantment removal — vs artifacts/enchantments  C
Congregate                 x1  W      Anti-aggro lifegain — vs aggro/burn     U
Giant Spider               x1  G      Anti-air blocker — vs fliers/aggro      C
Phantom Flock              x1  W      Resilient flyer — vs burn/aggro fliers  C
```

## ANALYSIS

### DECK IDENTITY
A WG value-midrange built around Mesa Enchantress (x2) and Sylvan Library. Every enchantment cast refunds a card via Mesa; Sylvan Library and Jolrael convert that card advantage into a widening Squirrel/Cat token board. Enlightened Tutor and Sevinne's Reclamation add engine consistency and recursion; the deck grinds opponents out through combat with flyers (Serra Angel, Mystic Enforcer) and tokens.

The deck's engine is deliberately redundant against removal: two Mesa Enchantress plus Sylvan Library mean the card-draw motor rarely dies to a single answer, and Sevinne's Reclamation / Auramancer rebuy an enchantment or engine that does get killed. Jolrael, Mwonvuli Recluse is the quiet payoff — every "draw your second card" (which Sylvan Library alone supplies each turn) drops a 2/2 Cat, so the same card advantage that keeps the hand full also builds the board.

**The Mesa fuel count (Counts Principle):** Mesa Enchantress draws on each enchantment cast, and 7 of the 23 nonland cards are enchantments (Sylvan Library, Squirrel Nest, Griffin Guide, Wild Growth, Pacifism, Spirit Link, Seton's Desire). That is a modest but real 30% density — enough to justify two copies of Mesa, though this pool simply does not contain a second enchantress (no Argothian/Verduran/Femeref/Eidolon), so the engine caps there.

**The 5 rare/mythic cap drove the build.** The pool offered ~20 rare/mythic candidates; the budget was spent on the card-advantage core (Sylvan Library, Enlightened Tutor, Jolrael, Sevinne's Reclamation) plus Birds of Paradise for fixing/ramp. That leaves the top-end all-uncommon (Serra Angel, Mystic Enforcer), and the entire 10-card sideboard is common/uncommon by necessity.

**Threshold as a free upside.** Five maindeck cards improve at seven-plus graveyard cards (Werebear, Mystic Enforcer, Terravore, Seton's Desire, Nantuko Monastery), fed passively by three cycling cards and natural land death. None require threshold to function, so it is upside rather than a dependency.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:6  2:5  3:9  4:2  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.25: Jolrael, Mwonvuli Recluse@0.85, Mystic Enforcer@0.7, Terravore@0.7) → p=0.91 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.9: Enlightened Tutor@0.9) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 71%  T2 93%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: A WG sweeper (Wrath of God) exists but is anti-synergistic with our own token board; we field 10+ creatures plus Squirrel/Cat/Griffin tokens. Plan vs wide boards: race in the air (Serra Angel, Mystic Enforcer, Voice of All) and chump with tokens while out-carding via Mesa/Sylvan.
  OK        single_large_threat: Swords to Plowshares, Pacifism, Radiant's Judgment
  OK        noncreature_permanents: Wax // Wane, Emerald Charm
  CONCEDED  stack: No WG countermagic; answer on resolution.
  CONCEDED  graveyard: No maindeck GY hate; Tormod's Crypt in board.
```
- Curve PASS (no flags).
- Goldfish PASS: 85% keepable, T3 land 88%.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Slippery Karst + Drifting Meadow cycle away for a card; Nantuko Monastery becomes a 4/4 at threshold; Sylvan Library + Mesa turn surplus draws into action; Squirrel Nest sinks mana into tokens. |
| screw | accepted | Two-land keepable rate is 85% (goldfish). Aggressive mulligans plus Birds/Wild Growth/Werebear ramp dig out, but the double-pip curve (WW/GG) means a hand stuck on one color of two lands is a real loss — mitigating further (more taplands / more dorks) would slow the clock and dilute the engine, costing the deck its grind identity. |
| decapitation | mitigation | Engine is redundant: Mesa x2 + Sylvan Library, and Sevinne's Reclamation / Auramancer rebuy an answered enchantment/engine; Enlightened Tutor re-finds Sylvan Library. No single-card decapitation. |
| gas-out | mitigation | Card economy is the deck's point: Sylvan Library (Cards: Net-Positive), Mesa x2 (Self-Replacing per enchantment), Jolrael + Squirrel Nest + Nantuko make bodies from nothing, Sevinne's flashback is a second card. The deck refuels itself. |
| raced | accepted | A symmetric sweeper (Wrath of God {2}{W}{W}) DOES exist in the WG pool, but it destroys our own Squirrel/Cat/Griffin token board and creatures — mitigating the raced matchup with mass removal would cost the deck its board-based grind identity. The non-symmetric option, Windborn Muse ({3}{W}, taxes attackers), would cost one of the 5 capped rare slots and cannot be sideboarded (SB is capped to common/uncommon). Accepted: we stay reactive with spot removal + lifegain (Swords, Pacifism, Radiant's Judgment, Spirit Link, SB Congregate/Remedy/Renewed Faith/Giant Spider) and race in the air, rather than warp the deck around mass removal it does not want. |
| disruption-fizzle | mitigation | No single critical turn — the plan is incremental card advantage, so one piece of interaction removes one enchantment/threat, not the plan. Sevinne's/Auramancer rebuy; the engine keeps drawing. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|------|--------|
| Test of Endurance | 'if you have 50+ life, you win' (mythic) — needs a dedicated lifegain shell this pool can't reliably build; costs a rare slot for a fringe alt-win. |
| Arboria | 'creatures can't attack a player unless that player cast a spell/nontoken this turn' (rare) — symmetric fog-lock fights our own aggression; costs a rare slot. |
| Serra Avatar | mythic */* = life total — huge but 7 mana and no evasion/haste; a rare slot better spent on Sylvan/Birds. |
| Lieutenant Kirtar | rare 2/2 flyer sac-removal — fine body but a rare slot loses to Birds/Jolrael in the 5-cap. |
| Glory | rare 3/3 flyer with GY protection ability — narrow; loses the rare-slot competition. |
| Improvised Armor | mv4 aura +2/+2 vigilance trample — too slow vs Griffin Guide at mv3 with better upside. |
| Krosan Restorer | threshold untap-3-lands — ramp only matters after threshold; too conditional early. |
| Battlefield Scrounger | self-mill-fuel body — anti-synergistic: pitching GY cards fights our own threshold payoffs. |
| Maze of Ith | rare utility land — strong but produces no mana in a THIN 2-color deck; and it's a rare slot. |
| Whitemane Lion | flash 2/2 bounce — cute enchantress re-buy (rebounce an enchanted creature) but tempo-negative here. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 3   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.59 adj [MV 2.43 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  41.9%  prod  47.1%  gap  -5.2pp  [OK]
  W  demand  58.1%  prod  58.8%  gap  -0.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Deck size 40                          PASS (23 nonland + 17 land)
All cards from cube pool              PASS
Commons/uncommons <= 2 copies         PASS (Mesa x2, Radiant Grove x2)
Rares/mythics <= 1 copy each          PASS
Max 5 rares/mythics total (main+SB)   PASS (exactly 5: Sylvan Library, Enlightened Tutor, Jolrael, Sevinne's Reclamation, Birds of Paradise; sideboard 0)
Colours within WG core                PASS (splash R declared, 0 cards played)
```
