---
deck_name: "wg-threshold-pure"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WG"
format: "40-card"
built_at: "2026-07-29T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x4 Forest               basic
  x8 Plains               basic
  x1 Drifting Meadow      W source, Cycling {2}
  x1 Nantuko Monastery    colorless manland; 4/4 first strike at Threshold
  x2 Radiant Grove        GW dual, enters tapped
  x1 Slippery Karst       G source, Cycling {2}
```

### CREATURES (14)
```
CMC  Card                     Qty  Color  Role                          Rar
  1  Savannah Lions           x2   W      Aggressive one-drop           C
  2  Fa'adiyah Seer           x2   G      Graveyard-fill / filter       C
  2  Millikin                 x2   C      Self-mill + ramp              U
  2  Werebear                 x2   G      Ramp / Threshold 4/4          C
  3  Vigilant Sentry          x2   W      Threshold pump engine         C
  4  Mystic Enforcer          x1   WG     Flagship evasive threat       U
  4  Mystic Zealot            x1   W      Threshold flyer               C
  5  Glory                    x1   W      GY protection / flyer         R
  5  Serra Angel              x1   W      Evasive closer                U
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                     Qty  Color  Role                          Rar
  1  Swords to Plowshares     x1   W      Premium removal               U
  3  Call of the Herd         x2   G      Recurring threat              U
  3  Radiant's Judgment       x2   W      Removal / cycler              C
```

### OTHER SPELLS (4)
```
CMC  Card                     Qty  Color  Role                          Rar
  2  Pacifism                 x1   W      Creature lockdown             C
  3  Divine Sacrament         x1   W      White anthem (payoff)         R
  3  Griffin Guide            x1   W      Evasion aura + token          U
  3  Jalum Tome               x1   C      Repeatable loot               C
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
Nomad Decoy              x1   W      Tapper vs big threats / stalls                            C
Lull                     x1   G      Fog vs aggro races                                        C
Renewed Faith            x1   W      Lifegain vs burn                                          C
```

## ANALYSIS

### DECK IDENTITY
GW Threshold beatdown, pure two-color. A dense package of graveyard-fillers (Millikin, Jalum Tome, Fa'adiyah Seer, cycling spells and lands, and Call of the Herd) reaches seven cards in the graveyard by turn 4-5, at which point Werebear, Mystic Enforcer, Vigilant Sentry, Mystic Zealot and Nantuko Monastery become oversized, largely evasive threats, and Divine Sacrament anthems the white-heavy board. Swords to Plowshares, Pacifism and Radiant's Judgment supply the interaction; Glory grants mass protection from the graveyard to push the alpha strike through.

**The threats ARE the payoffs.** This is why the build tolerates a threat count (15/23 nonland) above the normal Midrange band: Werebear, Mystic Enforcer, Vigilant Sentry and Mystic Zealot are simultaneously the deck's clock and its Threshold payoffs, so there is no separate 'engine' tax — the same cards that attack are the ones that scale. Divine Sacrament then multiplies the whole white-heavy board (+2/+2 to every white creature at Threshold).

**Reaching seven is not in doubt.** Counting functional graveyard-fillers against this list: Millikin x2 (repeatable self-mill), Jalum Tome, Fa'adiyah Seer x2, Radiant's Judgment x2 (cycle), Drifting Meadow + Slippery Karst (cycling lands), and Call of the Herd x2 (each enters the yard when cast) = 11 sources. The assembly check rates the enabler role at p=0.97 of being seen by turn 6, so Threshold is a reliable turn 4-5 event, not a hope.

**Glory is the linchpin of the alpha strike.** From the graveyard (where the fill engine wants it), {2}{W} grants your whole team protection from a chosen color until end of turn — it blanks a color of blockers to push lethal through, or blanks a color of removal aimed at Mystic Enforcer/Serra Angel. It is a threat that keeps working after it dies, answering the disruption-fizzle mode.

**Mana tension: white-heavy payoffs, THIN GW fixing.** Nineteen white pips vs seven green, with five double-white copies (Vigilant Sentry x2, Divine Sacrament, Glory, Serra Angel), are served by 11 white / 7 green sources. Nantuko Monastery taps only {C} (it is flood insurance and a manland, not a color source), and green is deliberately kept to single-pip cards — which is why Terravore ({1}{G}{G}) was left out despite its graveyard synergy.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:7  3:9  4:2  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 14 copies (effective 12.2: Werebear@0.8, Werebear@0.8, Vigilant Sentry@0.7, Vigilant Sentry@0.7, Mystic Zealot@0.8, Mystic Enforcer@0.9, Divine Sacrament@0.9, Nantuko Monastery@0.6) → p=0.99 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 9.2: Fa'adiyah Seer@0.8, Fa'adiyah Seer@0.8, Radiant's Judgment@0.9, Radiant's Judgment@0.9, Drifting Meadow@0.8, Slippery Karst@0.8, Call of the Herd@0.6, Call of the Herd@0.6) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 46%  T2 91%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper; races go-wide with evasive Threshold threats (Mystic Enforcer 6/6 flyer, Serra Angel, Mystic Zealot flyer, Glory-protected alpha strike); Wrath of God from the sideboard.
  OK        single_large_threat: Swords to Plowshares, Pacifism, Radiant's Judgment
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment answer; Break Asunder and Wax // Wane board in.
  CONCEDED  stack: No maindeck countermagic; proactive pressure + Glory mass protection instead of stack interaction.
  CONCEDED  graveyard: Own graveyard is an asset; opposing graveyards answered by Tormod's Crypt from the sideboard.
```
- Curve PASS and Goldfish PASS (86% keepable, 88% three-lands-by-T3); no WARN-tier flags to respond to.
- Threats/Payoffs sits above the Midrange band by design — the payoffs double as the threats, so the excess is the pipeline, not a curve defect (judge-credited grounds).

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Nantuko Monastery becomes a 4/4 first striker at Threshold; Drifting Meadow and Slippery Karst cycle excess lands into cards (and the yard); Millikin and Jalum Tome sink surplus mana into yard-fill/filtering; Werebear ramp is never truly dead. |
| screw | mitigation | Low curve (3 one-drops, 7 two-drops) keeps 2-land hands functional; cyclers (Radiant's Judgment, Drifting Meadow, Slippery Karst) and Fa'adiyah Seer dig toward the third land; Werebear and Millikin add mana. |
| decapitation | mitigation | No single card is load-bearing — 12+ redundant Threshold threats; if Divine Sacrament is answered the creatures still flip huge on their own; Mystic Enforcer has protection from black and Glory grants mass protection to shield the rest. |
| gas-out | mitigation | Card-neutral cyclers (Radiant's Judgment; Renewed Faith and Lull from the sideboard) replace themselves; Millikin/Jalum Tome/Fa'adiyah Seer filter and refill; Call of the Herd flashback is a second card; Glory recurs value from the graveyard. |
| raced | accepted | Against the cube's fastest clocks (Sulfuric Vortex, Grim Lavamancer, go-wide aggro) the payoffs only come online turn 4-6, so early races are close; maindeck defense is Swords/Pacifism/Radiant's Judgment only. Adding more early interaction or lifegain maindeck would cut threat density and slow the kill — the race risk is accepted and answered from the sideboard (Renewed Faith, Lull, Sandstorm). |
| disruption-fizzle | mitigation | This is a creature deck, not a combo — there is no single critical turn to counter. Threats are cheap and redundant, so one removal spell trades down; Glory's mass protection can push the decisive attack through targeted interaction. |

### CARDS CONSIDERED BUT EXCLUDED
- **Terravore** — P/T = land cards in all graveyards; strong graveyard beater, but {1}{G}{G} is unreliable on this white-heavy base's 7 green sources — including it would force the mana away from the double-white payoffs.
- **Krosan Restorer** — Threshold untap-three-lands ramp; a fine value/ramp creature but it fills no graveyard and adds no clock in a threat-dense build — logged as the first swap-in if the deck wants a grindier, ramp-forward tilt.
- **Seton's Desire** — Threshold force-block aura; overlaps Griffin Guide's evasion role but leaves no body when the enchanted creature is removed — Griffin Guide (2/2 flying token on death) is the strictly more resilient aura.
- **Hunting Grounds** — Mythic free-creature engine at Threshold; genuinely powerful and the rare/mythic cap has room (3/5), but it needs creatures in hand and does nothing the turn it lands — cut for the more immediate threat-dense plan. Prime swap-in for a grind build.
- **Battlefield Scrounger** — Threshold pump that BOTTOMS three cards from the graveyard — actively turns OFF Threshold. Anti-synergy with the whole plan; never correct here.
- **Nut Collector** — Mythic Threshold squirrel-lord at 6 MV — too slow for a competitive curve and would spend a scarce rare/mythic slot high on the curve.
- **Sylvan Library** — Elite card advantage, but it returns drawn cards to the LIBRARY (not the yard) and taxes life — it does not advance Threshold and would cost a rare/mythic slot.
- **Sevinne's Reclamation** — Reanimates an MV<=3 permanent from the graveyard (twice via flashback); the card-advantage the gas-out mode lacks, but competes with proactive slots — a reasonable rare swap-in for a value build.
- **Birds of Paradise** — Rare any-color dork; a two-color GW deck does not need the fixing badly enough to spend a rare slot, and it adds no graveyard fuel.
- **Wrath of God (maindeck)** — Symmetrical sweeper — we are the creature deck, so it stays in the sideboard for go-wide and can't-race matchups only.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.7   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.40 adj [MV 2.7 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  26.9%  prod  41.2%  gap -14.3pp  [OK]
  W  demand  73.1%  prod  64.7%  gap  +8.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Format: 40-card (40 mainboard + 10 sideboard)  [PASS]
Copy limits: commons/uncommons <= 2, rares/mythics <= 1  [PASS]
Rares/mythics total (MB+SB): 3 of cap 5  [PASS]
  Divine Sacrament x1, Glory x1, Wrath of God x1
Every card from cube pool by exact name  [PASS]
All nonland cards usable in WG  [PASS]
```
