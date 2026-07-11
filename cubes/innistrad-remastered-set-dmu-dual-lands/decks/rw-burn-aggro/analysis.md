---
deck_name: "rw-burn-aggro"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "RW"
format: "40-card"
built_at: "2026-07-08T20:14:41Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
  9x Mountain
  4x Plains
  2x Sacred Peaks           RW dual, enters tapped
```

### CREATURES (17)
```
CMC  Card                     Qty   Color  Role                                           Rar
  1  Thraben Inspector        x2    W      1-drop value creature (Clue = card advantage)   C
  1  Vexing Devil             x1    R      Premier aggressive 1-drop / alternate reach      R
  1  Voldaren Epicure         x2    R      1-drop pinger + card-selection enabler (Blood)   C
  2  Blood Petal Celebrant    x2    R      Aggressive 2-drop, first strike + Blood on death  C
  2  Cathar Commando          x1    W      Flash aggressive body + artifact/ench. answer     C
  2  Lightning Mauler         x2    R      Haste enabler via soulbond                        U
  3  Stromkirk Occultist      x2    R      Card-advantage clock, madness                     U
  3  Thalia, Heretic Cathar   x1    W      Tempo disruption (taxes opp.) + first-strike body  R
  3  Voldaren Ambusher        x1    R      Conditional removal creature                       U
  4  Restoration Angel        x1    W      Flash flying tempo/value, blinks ETB creatures      R
  4  Voldaren Duelist         x1    R      Haste beater + pseudo-removal (can't block)         C
  5  Zealous Conscripts       x1    R      Payoff/finisher: steals a blocker, swings lethal    R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                     Qty   Color  Role                                           Rar
  1  Lightning Axe            x2    R      Premium removal (discard-cost)                   U
  2  Abrade                   x2    R      Flexible removal (creature or artifact)           U
  2  Valorous Stance          x1    W      Modal protection/removal                          U
  3  Fiery Temper             x2    R      Burn/reach spell, doubles as removal (madness)     U
```

### OTHER SPELLS (1)
```
CMC  Card                     Qty   Color  Role                                           Rar
  3  Chandra, Dressed to Kill x1    R      Burn value engine: card advantage + direct dmg    M
```

## SIDEBOARD (10)
```
Card                     Qty   Color  Role / When to board in                              Rar
Angelic Purge            x2    W      Catch-all exile removal vs artifact/ench./big threats  C
Bound by Moonsilver      x2    W      Universal removal-aura; stops Werewolf transform       C
Faith Unbroken           x1    W      Exile removal for problem bombs                        U
Slayer of the Wicked     x2    W      Anti-tribal removal (Vampires/Werewolves/Zombies)       U
Savage Alliance          x1    R      Anti-token sweeper mode / flexible burn                U
Soul-Guide Gryff         x2    W      Graveyard hate + flying blocker vs flashback/aggro fliers C
```

## ANALYSIS

RW tempo-burn-aggro built around Zealous Conscripts as the closing payoff: a curve of efficient 1-3 drop beaters (Thraben Inspector, Vexing Devil, Voldaren Epicure, Blood Petal Celebrant, Lightning Mauler) clears the way with a dense removal/burn suite (Lightning Axe, Fiery Temper, Abrade, Valorous Stance, Chandra, Dressed to Kill), and Zealous Conscripts closes games by stealing the opponent's best remaining blocker, untapping it, and swinging with haste alongside the rest of the board.

**Macro-Archetype: Aggro/Tempo hybrid. Projected Avg MV: 2.28.**

Slot allocation (of N=40): Lands 15 (37.5%) — one above the independent mana-audit formula's recommendation of 16 (within the PASS tolerance of ±1), kept low because the curve tops out at Zealous Conscripts' 5 mana and 12 of 17 creatures cost 2 or less. Interaction-capable spells: 8 of 25 non-land cards (32%) — Lightning Axe, Abrade, Valorous Stance, Fiery Temper x2, Chandra (repeatable pings), plus Voldaren Ambusher and Cathar Commando as conditional creature-based answers. Dedicated threats: 17 creatures (68% of non-lands), the highest proportion of any build in this cube's deck set, reflecting the pure-aggro read on this sub-archetype relative to the Go-Wide Humans Tokens and Keyword-Soup Aggro paths not chosen.

**Curve and clock math.** 8 one-drops, 5 two-drops (creature), 3 three-drops, 2 four-drops, 1 five-drop among creatures — a genuinely low curve that can present lethal by turn 5-6 without Zealous Conscripts, which exists purely to close out games where the opponent has stabilized behind a single relevant blocker (the card explicitly wants a board state with exactly one problem creature left, which this deck's own removal suite is built to create).

**Haste package.** Lightning Mauler x2 (soulbond), Voldaren Duelist, and Zealous Conscripts all grant haste, letting freshly cast threats attack the same turn they land — this compounds with removal (Lightning Axe, Fiery Temper, Abrade) clearing blockers the same turn a hasty creature comes down, which is the deck's primary "explosive turn" pattern.

**Honest framing note.** This is not a pure burn-to-the-face plan — only Vexing Devil, Voldaren Epicure, Fiery Temper, and Chandra's activations can hit the opponent directly; Lightning Axe, Abrade, and Valorous Stance are creature/artifact-only. The win condition is combat damage from a wide, cheap creature suite, with burn as a secondary closer and Zealous Conscripts as the top-end blowout, consistent with the "Tempo Burn-Aggro" path chosen over the two other RW sub-archetypes considered (Go-Wide Humans Tokens, Keyword-Soup Aggro).

**Grill resolution.** One mainboard swap was made after the Proposer/Challenger self-grill: Dauntless Cathar x2 was cut for Stromkirk Occultist x2. Dauntless Cathar's payoff (exile from graveyard to make a 1/1 flier) is sorcery-speed graveyard recursion that does nothing on the turn it's cast and is off-plan for a deck trying to close games by turn 5-6; Stromkirk Occultist is a 3/2 trample body that immediately pressures the board and generates card advantage on any connection, with madness as a bonus discount if a discard outlet is ever live. This raised the deck's red pip demand (78.6% vs. 73.3% production) but the gap stayed within the color-balance PASS threshold.

### Cards Considered but Excluded

*Rares/mythics cut for the 5-card cap:*
- **Hanweir Garrison** — one of the archetype-context suggested payoffs (creates two attacking Human tokens on attack). Excluded because it rewards a go-wide board state this build doesn't build toward; it's the first card to bring in if pivoting toward the Go-Wide Humans Tokens path instead.
- **Odric, Lunarch Marshal** — the other archetype-context suggested payoff (shares keywords across the team). Excluded for the same reason as Hanweir Garrison — it wants a keyword-diverse wide board (the Keyword-Soup Aggro path), not a lean removal-backed clock.
- **Falkenrath Gorger** — grants madness to Vampire cards in hand. This deck runs several Vampires (Stromkirk Occultist, Voldaren Epicure, Blood Petal Celebrant, Voldaren Ambusher, Voldaren Duelist) but almost no discard outlets outside Lightning Axe and Fiery Temper's own madness cost, so the payoff would rarely trigger — a stronger fit for a dedicated BR madness shell.
- **Mass Hysteria** — grants haste to all creatures, which is symmetric (helps the opponent too) and largely redundant with the deck's own haste package (Lightning Mauler x2, Voldaren Duelist, Zealous Conscripts).
- **Sundown Pass** — a strictly better RW dual than Sacred Peaks in the late game (untapped once you control 2+ lands) but would have displaced a maindeck rare within the 5-card cap; Sacred Peaks was kept since fixing matters most on curve, and both duals produce the same colors.

*Uncommons a tier below the chosen includes:*
- **Furyblade Vampire** — a combat-only discard outlet; without a dedicated madness sub-plan (only 2 madness cards run: Stromkirk Occultist, Fiery Temper), it's text that rarely matters.
- **Markov Waltzer** — an RW gold Vampire uncommon, but its payoff wants other Vampires attacking together rather than a lean curve-out plan; would need more tribal density to earn a slot.
- **Fiend Hunter** — ETB exile removal that returns the exiled card if it dies, which is real downside against this deck's own removal-heavy opponents; Voldaren Ambusher was preferred as a cleaner conditional-removal creature.
- **Stensia Masquerade** — the pool's dedicated Vampire payoff (first strike + counters), deliberately excluded to keep this build's identity as removal-tempo rather than drifting toward a tribal Vampire plan.

*Sideboard-tier considerations not included:*
- **Uncaged Fury** — a double-strike/first-strike combat trick; useful but this build's sideboard prioritizes removal and graveyard hate over combat tricks.
- **Cathar's Call** — an aura that grants first strike and a Human token on death; too slow and vulnerable to the same removal this deck's opponents will already be holding.
- **Honeymoon Hearse** — a Vehicle that needs crew and doesn't fit the low-curve, removal-first sideboard plan.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.28   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  78.6%  prod  73.3%  gap  +5.3pp  [OK]
  W  demand  21.4%  prod  40.0%  gap -18.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: all at <=2 copies
[PASS] Rares/mythics: all at exactly 1 copy each
[PASS] Max 5 rares/mythics total (main+SB): 5/5 exactly
       (Vexing Devil, Thalia Heretic Cathar, Restoration Angel,
        Zealous Conscripts, Chandra Dressed to Kill)
```
