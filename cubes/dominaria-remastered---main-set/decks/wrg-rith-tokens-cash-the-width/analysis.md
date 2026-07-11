---
deck_name: "wrg-rith-tokens-cash-the-width"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GWR"
format: "40-card"
built_at: "2026-07-09T23:47:23Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  3x Plains
  4x Forest
  2x Mountain
  2x Radiant Grove         GW dual, enters tapped
  2x Sacred Peaks          RW dual, enters tapped
  2x Wooded Ridgeline      GR dual, enters tapped
  1x Rith's Grove          GRW tri-land — bounces a non-Lair land on ETB; never play as your first land
```

### CREATURES (11)
```
CMC  Card                    Qty   Color  Role                                      Rar
  2  Mogg War Marshal        x2    R      Token generator / curve filler            C
  2  Radha, Heir to Keld     x1    RG     Early body / ramps toward Primarch/Kamahl  U
  3  Pashalik Mons           x1    R      Goblin payoff + reach engine               R
  4  Flametongue Kavu        x2    R      Removal + body                             U
  4  Kavu Primarch           x2    G      Convoke payoff / width-to-power sink       C
  5  Siege-Gang Commander    x1    R      Token payoff + reach/removal               R
  6  Kamahl, Fist of Krosa   x1    G      Overrun finisher (color-agnostic)          M
  6  Rith, the Awakener      x1    GRW    Top-end finisher / token payoff            R
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                    Qty   Color  Role                                      Rar
  1  Swords to Plowshares    x2    W      Removal                                    U
  1  Chain Lightning         x2    R      Removal / reach                            C
  3  Call of the Herd        x2    G      Token generator, flashback value           U
  4  Battle Screech          x2    W      Token generator, flashback value           U
  4  Congregate              x1    W      Life payoff (cashes in width)              U
  4  Saproling Symbiosis     x1    G      Token payoff, scales with board width      R
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                                      Rar
  2  Pacifism                x1    W      Removal (lockdown)                         C
  3  Squirrel Nest            x2    G      Token engine (recurring)                   U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                    Rar
Tormod's Crypt          x1    C      Graveyard hate vs. GY/flashback/reanimator  U
Radiant's Judgment      x2    W      Removal vs. power-4+ threats; cycles        C
Orim's Thunder          x2    W      Artifact/enchantment hate + reach (kicker)  C
Break Asunder           x1    G      2nd artifact/enchantment answer; cycles     C
Solar Blast             x2    R      Reach/removal vs. aggro; cycles for value   C
Sandstorm               x1    G      Anti-go-wide mirror sweeper (1 dmg/attacker) C
Renewed Faith           x1    W      Lifegain vs. aggro/burn; cycles             C
```

## ANALYSIS

**Slot allocation.** Macro-Archetype: Midrange. Projected Avg MV: 3.17. Lands: 16 (40% of N=40) — standard for 3-color Midrange with a CMC6 top end. Interaction: 7 (29% of 24 nonland) — within the 20-30% Midrange band. Threats/Payoffs: 17 (71% of nonland) — deviates well above the stated 30-40% guidance; justified because the Engine/Infra budget is deliberately absorbed into this bucket, since nearly every token generator here (Battle Screech, Squirrel Nest, Mogg War Marshal, Saproling Symbiosis) is simultaneously its own value engine. No ramp/cantrip modifiers applied (ramp_count=0, no cantrips in the 40), so the land count stays at the unmodified baseline.

**Mana base.** Pip demand: G 39.4% (13 pips) / R 33.3% (11 pips) / W 27.3% (9 pips), driven by Kamahl's GG and Radha's RG. Land sources: G9 / R7 / W8 across 16 lands, using 7 nonbasic fixers (three common taplands, one at each of GW/RW/GR, plus the single copy of Rith's Grove for GRW). Play Rith's Grove on turn 2 or later — its ETB requires bouncing a different non-Lair land you control, which is impossible as your first land drop.

**The self-grill caught a real design flaw.** The original build (per the archetype brief) included Divine Sacrament as the "go-wide anthem," but its text is "White creatures get +1/+1" — and this deck's actual token output is mostly red Goblins and green Elephants/Squirrels/Saprolings. Only Battle Screech's Birds and Rith itself are White, so the anthem would have been functionally dead against 80%+ of the board. It was replaced with Kamahl, Fist of Krosa, whose overrun ("Creatures you control get +3/+3 and gain trample") is color-blind and actually rewards the token base as built. Tradeoff: Kamahl's activation costs 2GGG on top of his own 6-mana body — with zero ramp in the deck, treat him as an occasional bomb rather than a reliable every-game engine, and sequence Radha (his one ramp source, tap: add G) early when you can.

**Kavu Primarch is the cleanest "cash-in" card in the deck** — convoke is color-blind (unlike Divine Sacrament was), so any mix of Goblin/Saproling/Elephant/Squirrel tokens can pay for a cheap 7/7 once kicked. Congregate's life total similarly counts creatures on the whole battlefield, not just yours — a genuine payoff for outnumbering the opponent, but not a "your side only" effect.

**Goblin sub-package.** Mogg War Marshal, Pashalik Mons, and Siege-Gang Commander are all typed Goblin, so Pashalik Mons's death-trigger (1 damage whenever a Goblin dies) and its sac-outlet fire off every other Goblin generator in the deck — a real internal synergy layer within the red half.

**Curve honesty.** CMC breakdown across the 24 spells: 1:4, 2:3, 3:4, 4:8, 5:1, 6:2. Only Mogg War Marshal and Radha are actual creature bodies at CMC1-2 (the other four 1-2 drops are removal spells) — this deck's early turns lean on interaction to survive, not board presence, and will feel clunkier than a pure aggro shell before turn 3.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget:** Divine Sacrament (replaced — see above), Jolrael, Mwonvuli Recluse (2cmc engine, but its "draw your second card each turn" trigger is dead text with zero card-draw support in this list), Nut Collector (mythic, upkeep Squirrel engine, but slow at CMC6 and competes directly with Rith/Kamahl for the same top-end slot without the immediate impact), Opposition (blue — outside the GWR identity entirely; the archetype brief's suggestion doesn't fit this build's colors and would require a 4th color splash with no blue fixing available).

**Uncommons/commons a tier below the chosen includes:** Empty the Warrens (named in the archetype brief, but without a Storm sub-package it's just two 1/1 Goblins for 4 mana — strictly worse than the maindecked token generators); Goblin Matron (solid Goblin tutor, but the deck doesn't need more consistency at the cost of a card-neutral 2/2); Penumbra Bobcat and Symbiotic Beast (fine value bodies, but neither clearly outperforms what's in the 40 at their CMC); Assault // Battery (worse rate than Call of the Herd on one side, worse than Chain Lightning on the other).

**Sideboard-consideration cards not included:** Windborn Muse (rare — budget-excluded, and its Ghostly Prison effect doesn't fit a proactive attacking plan); Wrath of God (rare — budget-excluded; would have been a strong anti-aggro/anti-mirror sweeper if the rare budget allowed it); a second copy of Congregate (life gain redundancy, capped by the deck already running 1 in the main); Icatian Javelineers (a pinger that answers X/1 token boards, considered as an alternative to Sandstorm but Sandstorm's board-wide sweep is more impactful in the actual mirror matchup).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.17   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  39.4%  prod  56.2%  gap -16.8pp  [OK]
  R  demand  33.3%  prod  43.8%  gap -10.5pp  [OK]
  W  demand  27.3%  prod  50.0%  gap -22.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
✓ Commons/uncommons: all ≤2 copies (verified per-card, no violations)
✓ Rares/mythics: all exactly 1 copy each
✓ Max 5 rares/mythics total (main+SB): 5/5 used
    Pashalik Mons (R), Saproling Symbiosis (R), Siege-Gang Commander (R),
    Rith, the Awakener (R), Kamahl, Fist of Krosa (M)
✓ All 50 card-slots verified present in cube working pool by exact name
```
