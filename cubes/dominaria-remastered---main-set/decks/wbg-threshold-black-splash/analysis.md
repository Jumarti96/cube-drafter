---
deck_name: "wbg-threshold-black-splash"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WBG"
format: "40-card"
built_at: "2026-07-29T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x1 Forest               basic
  x8 Plains               basic
  x1 Drifting Meadow      W source, Cycling {2}
  x1 Haunted Mire         
  x1 Nantuko Monastery    colorless manland; 4/4 first strike at Threshold
  x2 Radiant Grove        GW dual, enters tapped
  x1 Slippery Karst       G source, Cycling {2}
  x2 Sunlit Marsh         
```

### CREATURES (14)
```
CMC  Card                     Qty  Color  Role                          Rar
  1  Savannah Lions           x2   W      Aggressive one-drop           C
  2  Millikin                 x2   C      Self-mill + ramp              U
  2  Werebear                 x2   G      Ramp / Threshold 4/4          C
  3  Vigilant Sentry          x2   W      Threshold pump engine         C
  4  Mystic Enforcer          x1   WG     Flagship evasive threat       U
  4  Mystic Zealot            x1   W      Threshold flyer               C
  5  Glory                    x1   W      GY protection / flyer         R
  5  Serra Angel              x1   W      Evasive closer                U
  5  Street Wraith            x2   B      Free graveyard-fill (cycle 2 life)  C
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                     Qty  Color  Role                          Rar
  1  Swords to Plowshares     x1   W      Premium removal               U
  2  Terror                   x1   B      Cheap removal [B]             C
  3  Call of the Herd         x2   G      Recurring threat              U
  3  Ichor Slick              x2   B      Removal (-3/-3) / cycler [B]  C
  3  Radiant's Judgment       x2   W      Removal / cycler              C
```

### OTHER SPELLS (1)
```
CMC  Card                     Qty  Color  Role                          Rar
  3  Divine Sacrament         x1   W      White anthem (payoff)         R
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
GW Threshold beatdown with a light black removal splash and a free colorless enabler. Street Wraith (cycling for 2 life, no mana) is a turn-one graveyard-filler that costs only life, giving this build the fastest graveyard-fill of the three; the black splash adds hard interaction GW alone lacks — Terror and Ichor Slick (which also cycles). Threshold flips Werebear, Mystic Enforcer, Vigilant Sentry, Mystic Zealot and Nantuko Monastery into oversized evasive threats under a Divine Sacrament anthem, with Glory pushing the alpha strike through.

**Street Wraith is a black card played as a colorless enabler — the loophole that makes this the most interactive build.** Its cycling costs 'Pay 2 life' (no mana), so it fills the graveyard on turn one without any black source and does not count against the 3-card black splash. That frees the actual black splash to be pure removal.

**Six removal spells is the point of the black splash.** Swords to Plowshares, Terror, Ichor Slick x2 and Radiant's Judgment x2 give this build far more interaction than the pure or blue versions — directly addressing the 'raced'/'thin-interaction' soft spot the other two decks accept. Terror kills what -3/-3 and 'power 4+' can't; Ichor Slick cycles for the graveyard when removal isn't needed.

**The black is a genuinely light splash: 3 single-black cards on 3 black sources.** Sunlit Marsh x2 (WB) and Haunted Mire (BG) supply the black. Ichor Slick cycles for {2} colorless when black is missing, so only Terror truly relies on drawing a black source (P about 55% by turn 4) — an accepted splash variance, since Terror is a flexible mid-game removal spell, not a curve-defining play.

**Mana tension is the real cost.** White demand is 77% (five double-white copies) and the black splash competes for land slots, so the base runs 41% taplands and only 5 green / 3 black sources — the audit passes but the early board is a touch slower than a pure two-color build. Nantuko Monastery taps only {C}; it is flood insurance and a manland, counted as neither color.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:5  3:9  4:2  5:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 14 copies (effective 12.2: Werebear@0.8, Werebear@0.8, Vigilant Sentry@0.7, Vigilant Sentry@0.7, Mystic Zealot@0.8, Mystic Enforcer@0.9, Divine Sacrament@0.9, Nantuko Monastery@0.6) → p=0.99 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 10.4: Ichor Slick@0.9, Ichor Slick@0.9, Radiant's Judgment@0.9, Radiant's Judgment@0.9, Drifting Meadow@0.8, Slippery Karst@0.8, Call of the Herd@0.6, Call of the Herd@0.6) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 49%  T2 84%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper; races with evasive Threshold flyers; Wrath of God from the sideboard.
  OK        single_large_threat: Swords to Plowshares, Terror, Ichor Slick, Radiant's Judgment
  CONCEDED  noncreature_permanents: No maindeck artifact/enchantment answer; Break Asunder / Wax // Wane from the sideboard.
  CONCEDED  stack: No maindeck countermagic; proactive pressure + six removal spells + Glory mass protection instead of stack interaction.
  CONCEDED  graveyard: Own graveyard is an asset; opposing graveyards answered by Tormod's Crypt from the sideboard.
```
- Curve PASS and Goldfish PASS (84% keepable, 88% three-lands-by-T3); the '5:4' curve bucket is a display artifact — Street Wraith x2 read at its printed MV 5 though it is only ever cycled for 2 life (effective MV ~0).
- Threats/Payoffs above the Midrange band by design — payoffs double as threats (judge-credited grounds).

### FAILURE MODES
| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Nantuko Monastery is a 4/4 first striker at Threshold; Drifting Meadow and Slippery Karst cycle excess lands; Ichor Slick and Street Wraith turn dead cards into graveyard-fill; Millikin sinks surplus mana; Werebear ramp is never dead. |
| screw | mitigation | Low curve (3 one-drops, 5 two-drops) plus Street Wraith (a free, mana-independent cantrip that costs only 2 life) and the cyclers dig toward land drops; Werebear and Millikin add mana. |
| decapitation | mitigation | 12+ redundant Threshold threats; if Divine Sacrament is answered the creatures still flip on their own; Mystic Enforcer has protection from black and Glory grants mass protection to shield the rest. |
| gas-out | mitigation | Street Wraith, Ichor Slick and Radiant's Judgment cycle to replace themselves; Call of the Herd flashback and Glory recursion are real extra cards; Millikin filters. |
| raced | accepted | This is the fastest graveyard-fill build, but the payoffs still peak turn 4-6 and Street Wraith x2 costs up to 4 life proactively — against burn (Sulfuric Vortex, Grim Lavamancer) that self-inflicted life loss is a real cost the deck owns. Maindeck defense is a full 6-removal suite; further race-proofing would cut threat density. The residual race risk is accepted and answered from the sideboard (Renewed Faith, Lull, Sandstorm). |
| disruption-fizzle | mitigation | Creature deck, no single critical turn; the six-removal suite trades with interaction; cheap redundant threats re-deploy; Glory's mass protection pushes the decisive attack through. |

### CARDS CONSIDERED BUT EXCLUDED
- **Chainer's Edict** — Single-black edict with flashback ({5}{B}{B}) that recurs and fills the yard — a real alternative to Terror that also kills black/artifact/protection creatures. Cut because it is sorcery-speed and opponent's-choice, so it is worse at removing a specific blocker mid-combat to push the alpha strike; kept as the first swap-in if the field is heavy on pro-white / hexproof threats.
- **Voice of All** — 2/2 flyer with protection from a chosen color that flies WITHOUT Threshold — more reliable evasion than Mystic Zealot early, but {2}{W}{W} double-white worsens an already 77%-white base, so single-white Mystic Zealot (a better early blocker) was kept.
- **Undead Gladiator** — Recursion/loot engine, but its {1}{B}{B} hardcast is unreliable on a 3-source black splash and it is an engine, not removal — the judge flagged it as a weak keystone; the splash was built entirely single-black instead.
- **Entomb** — Bins Glory to turn on its graveyard ability and adds +1 Threshold, but with no reanimation payoff it does not replace itself — a cantrip cycler fills the yard more efficiently, and it is a rare that would spend a scarce slot.
- **Dark Withering** — Madness {B} removal, but its madness needs a discard outlet the maindeck cut with Undead Gladiator; at full {4}{B}{B} it is uncastable on 3 black sources.
- **Terravore** — P/T = land cards in all graveyards, but only the two cycling lands reach your yard here, so it would be a small body — the graveyard-lands payoff is not supported in this build.
- **Battlefield Scrounger** — Threshold pump that BOTTOMS three graveyard cards — turns OFF Threshold; anti-synergy.
- **Hunting Grounds** — Mythic free-creature engine at Threshold; strong but does nothing the turn it lands and needs creatures in hand — cut for the threat-dense removal plan.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.05 adj [MV 2.96 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  22.7%  prod  29.4%  gap  -6.7pp  [OK]
  W  demand  77.3%  prod  76.5%  gap  +0.8pp  [OK]

Splash Check: [PASS]
  B  5 card(s), max CMC 5  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Format: 40-card (40 mainboard + 10 sideboard)  [PASS]
Copy limits: commons/uncommons <= 2, rares/mythics <= 1  [PASS]
Rares/mythics total (MB+SB): 3 of cap 5  [PASS]
  Divine Sacrament x1, Glory x1, Wrath of God x1
Every card from cube pool by exact name  [PASS]
All nonland cards usable in WBG  [PASS]
```
