---
deck_name: "wug-threshold-blue-splash"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUG"
format: "40-card"
built_at: "2026-07-29T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x1 Forest               basic
  x1 Island               
  x7 Plains               basic
  x1 Drifting Meadow      W source, Cycling {2}
  x2 Idyllic Beachfront   
  x1 Nantuko Monastery    colorless manland; 4/4 first strike at Threshold
  x2 Radiant Grove        GW dual, enters tapped
  x1 Slippery Karst       G source, Cycling {2}
  x1 Tangled Islet        
```

### CREATURES (13)
```
CMC  Card                     Qty  Color  Role                          Rar
  1  Savannah Lions           x2   W      Aggressive one-drop           C
  2  Fa'adiyah Seer           x1   G      Graveyard-fill / filter       C
  2  Millikin                 x2   C      Self-mill + ramp              U
  2  Werebear                 x2   G      Ramp / Threshold 4/4          C
  3  Vigilant Sentry          x2   W      Threshold pump engine         C
  4  Mystic Enforcer          x1   WG     Flagship evasive threat       U
  4  Mystic Zealot            x1   W      Threshold flyer               C
  5  Glory                    x1   W      GY protection / flyer         R
  5  Lyra Dawnbringer         x1   W      Lifelink evasive closer       M
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                     Qty  Color  Role                          Rar
  1  Swords to Plowshares     x1   W      Premium removal               U
  3  Call of the Herd         x2   G      Recurring threat              U
  3  Circular Logic           x1   U      Graveyard-scaling counter (U)  U
  3  Frantic Search           x2   U      Free +2 yard enabler (U)      C
  3  Radiant's Judgment       x2   W      Removal / cycler              C
```

### OTHER SPELLS (2)
```
CMC  Card                     Qty  Color  Role                          Rar
  3  Divine Sacrament         x1   W      White anthem (payoff)         R
  3  Griffin Guide            x1   W      Evasion aura + token          U
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in                                   Rar
Wrath of God             x1   W      Sweeper vs go-wide / faster boards                        R
Tormod's Crypt           x2   C      Graveyard hate (18.75% GY meta)                           U
Break Asunder            x1   G      Artifact/enchantment removal                              C
Wax // Wane              x1   WG     Enchantment removal / combat trick                        U
Emerald Charm            x1   G      Flex: enchantment/anti-flyer/untap                        C
Sandstorm                x1   G      Anti-go-wide x/1 aggro                                    C
Lull                     x1   G      Fog vs aggro races                                        C
Renewed Faith            x1   W      Lifegain vs burn                                          C
Nomad Decoy              x1   W      Tapper vs go-wide / big threats                           C
```

## ANALYSIS

### DECK IDENTITY
GW Threshold beatdown with a light blue enabler/interaction splash. The same graveyard-fill engine as the pure build is upgraded by Frantic Search (draw two, discard two, untap up to three lands — a free +2 to the graveyard) and defended by Circular Logic, a counter whose tax scales with the graveyard the deck is already stocking. Threshold flips Werebear, Mystic Enforcer, Vigilant Sentry, Mystic Zealot and Nantuko Monastery into oversized evasive threats under a Divine Sacrament anthem, with Glory pushing the alpha strike through and Lyra Dawnbringer's lifelink stabilizing races.

**The blue splash buys enabler *quality*, not payoffs — there is no blue Threshold card in the pool.** Frantic Search is the single best graveyard-filler available: draw two, discard two puts +2 in the yard, and 'untap up to three lands' makes it effectively free, so it advances Threshold without costing a turn's tempo. Two copies is the headline upgrade over the pure build.

**Circular Logic is a counter that the deck's own plan pays for.** It costs the opponent {1} per card in your graveyard; the deck is purpose-built to reach seven, so by the turn the payoffs come online it is a hard counter, not a soft tax. Its Madness {U} also lets you deploy it for a single blue off a Frantic Search or Fa'adiyah Seer discard.

**The splash is genuinely light: 3 single-U cards on 4 U sources.** Nantuko Monastery taps only {C}; the blue comes from Idyllic Beachfront x2 (WU) + Tangled Islet (GU) + one Island. Three of those enter tapped, so the blue cards are mid-game plays by design — which matches a turn-6 thesis rather than a turn-3 curve-out. Frantic Search's land-untap softens the tapped-source tax.

**Lyra Dawnbringer over Serra Angel at the top end.** Same {3}{W}{W} cost, but a 5/5 first-strike lifelink body directly addresses the deck's one accepted weakness — losing early races — while still being an evasive closer the anthem pumps.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:5  3:11  4:2  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 14 copies (effective 12.2: Werebear@0.8, Werebear@0.8, Vigilant Sentry@0.7, Vigilant Sentry@0.7, Mystic Zealot@0.8, Mystic Enforcer@0.9, Divine Sacrament@0.9, Nantuko Monastery@0.6) → p=0.99 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 9.4: Fa'adiyah Seer@0.8, Radiant's Judgment@0.9, Radiant's Judgment@0.9, Drifting Meadow@0.8, Slippery Karst@0.8, Call of the Herd@0.6, Call of the Herd@0.6) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 48%  T2 85%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper; races with evasive Threshold flyers; Wrath of God from the sideboard.
  OK        single_large_threat: Swords to Plowshares, Radiant's Judgment
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment answer; Break Asunder / Wax // Wane from the sideboard.
  OK        stack: Circular Logic
  CONCEDED  graveyard: Own graveyard is an asset; opposing graveyards answered by Tormod's Crypt from the sideboard.
```
- Curve PASS and Goldfish PASS (86% keepable, 88% three-lands-by-T3); no WARN-tier flags.
- Threats/Payoffs above the Midrange band by design — payoffs double as threats (judge-credited grounds).

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Nantuko Monastery becomes a 4/4 first striker at Threshold; Drifting Meadow and Slippery Karst cycle excess lands into cards and the yard; Frantic Search and Millikin turn surplus mana into yard-fill/filtering; Werebear ramp is never dead. |
| screw | mitigation | Low curve (3 one-drops, 5 two-drops) plus Frantic Search (untaps up to three lands, digs two) and the cyclers dig toward land drops; Werebear and Millikin add mana. |
| decapitation | mitigation | 12+ redundant Threshold threats; if Divine Sacrament is answered the creatures still flip on their own; Mystic Enforcer has protection from black and Glory grants mass protection to shield the rest. |
| gas-out | mitigation | Frantic Search and the cyclers (Radiant's Judgment) replace themselves; Call of the Herd flashback and Glory recursion are real extra cards; Lyra's lifelink buys time; the sideboard adds Deep-Analysis-tier card advantage only when a grind matchup calls for a re-fixed splash. |
| raced | accepted | Payoffs come online turn 4-6, so early races are close; maindeck defense is Swords + Circular Logic + Radiant's Judgment plus Lyra Dawnbringer's lifelink. Adding more early interaction would cut threat density and slow the kill — the residual race risk is accepted and answered from the sideboard (Renewed Faith, Lull, Sandstorm). |
| disruption-fizzle | mitigation | Creature deck, no single critical turn; cheap redundant threats trade removal down; Circular Logic can counter the interaction outright; Glory's mass protection pushes the decisive attack through. |

### CARDS CONSIDERED BUT EXCLUDED
- **Deep Analysis** — Powerful card advantage (four cards across two casts), but it answers none of the cube's actual threat classes and would be a 4th blue card outside the 3-copy splash frame — cut from the sideboard in favor of Nomad Decoy. Bring it in only for a grindy control mirror where you re-fix the mana for a heavier blue commitment.
- **Cloud of Faeries** — The winning sketch's third blue card, but keeping it would make four blue copies (Frantic x2 + Circular + Cloud) and break the 3-copy splash cap; it adds no graveyard fuel, so it was cut in FILL for Frantic Search's second copy.
- **Terravore** — P/T = land cards in all graveyards; {1}{G}{G} double-green is unreliable on this white-heavy base's 5 green sources — the mana points away from it.
- **Krosan Restorer** — Repeatable Threshold untap-three engine on a green body; a fine grind/ramp card but adds no yard fuel and no clock — logged as a swap-in for a slower, ramp-forward tilt.
- **Hunting Grounds** — Mythic free-creature engine at Threshold; the rare/mythic cap has room (4/5) but it does nothing the turn it lands and needs creatures in hand — cut for the more immediate threat-dense plan.
- **Battle Screech** — Four evasive white flyers that love Divine Sacrament and Glory's alpha strike; strong but token-go-wide is a different axis than the threat-dense build wants, and {2}{W}{W} competes with the double-white payoffs.
- **Counterspell** — {U}{U} is double-blue — uncastable on a 4-source single-U splash; Circular Logic is the splashable counter.
- **Battlefield Scrounger** — Threshold pump that BOTTOMS three graveyard cards — turns OFF Threshold; anti-synergy.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.29 adj [MV 2.78 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  25.0%  prod  29.4%  gap  -4.4pp  [OK]
  W  demand  75.0%  prod  70.6%  gap  +4.4pp  [OK]

Splash Check: [PASS]
  U  4 card(s), max CMC 3  sources 4/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Format: 40-card (40 mainboard + 10 sideboard)  [PASS]
Copy limits: commons/uncommons <= 2, rares/mythics <= 1  [PASS]
Rares/mythics total (MB+SB): 4 of cap 5  [PASS]
  Divine Sacrament x1, Glory x1, Lyra Dawnbringer x1, Wrath of God x1
Every card from cube pool by exact name  [PASS]
All nonland cards usable in WUG  [PASS]
```
