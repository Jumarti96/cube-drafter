---
deck_name: "ur-flashback-storm"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-07-09T00:59:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
5x Island
9x Mountain
1x Molten Tributary       UR dual, enters tapped
1x Evolving Wilds         Fetches either basic
```

### CREATURES (8)
```
CMC  Card                                    Qty   Color  Role                                    Rar
  1  Delver of Secrets // Insectile Aberration x2   U     Evasive clock, library-flip payoff        C
  2  Thermo-Alchemist                         x2   R     Repeatable ping engine, untaps on I/S      U
  2  Festival Crasher                         x1   R     Spell-triggered pump threat                C
  2  Thing in the Ice // Awoken Horror        x1   U     Defensive wall -> one-sided bounce wrath   R
  5  Docent of Perfection // Final Iteration  x1   U     Token engine, flips into Wizard anthem     R
  8  Bedlam Reveler                           x1   R     Hand refill; GY-count cost reduction       R
```

### INSTANTS & SORCERIES (14)
```
CMC  Card                    Qty   Color  Role                                    Rar
  1  Faithless Looting       x2    R      GY fuel + hand filtering, flashback 2R      C
  1  Lightning Axe           x2    R      Cheap removal, discard cost enables Madness U
  2  Galvanic Iteration      x1    UR     Combo engine - copies next I/S spell        R
  2  Think Twice             x1    U      Always-live cantrip, flashback 2U           C
  2  Abrade                  x2    R      Flex removal (creature or artifact)         U
  3  Fiery Temper            x2    R      Burn/removal, Madness R                     U
  5  Seize the Storm         x2    R      GY-scaling finisher token, flashback 6R     C
  6  Rise from the Tides     x1    U      Zombie army finisher                        U
  7  Temporal Mastery        x1    U      Extra-turn haymaker, Miracle 1U             M
```

### OTHER SPELLS (2)
```
CMC  Card                    Qty   Color  Role                                    Rar
  3  Burning Vengeance        x2    R      Flashback-triggered damage engine           U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                  Rar
Syncopate               x2    U      vs combo/ramp - tax counter, exiles      C
Summary Dismissal       x1    U      vs storm/spell-heavy mirrors - sweeper   U
Alchemist's Greeting    x2    R      vs mid/big creatures - 4 dmg removal     C
Boarded Window          x1    C      vs aggro - blunts attackers              U
Wandering Mind          x2    UR     vs control/grind - card selection        U
Mystic Retrieval        x1    U      vs attrition - rebuy removal spells      U
Savage Alliance         x1    R      vs go-wide/tokens - sweep mode           U
```

## ANALYSIS

This is a UR spells-matter deck built on a graveyard/flashback value engine with a bonus extra-turn combo finisher. The headline play — Galvanic Iteration copying a Miracled Temporal Mastery — nets TWO extra turns from a single draw step (both the original and the copy resolve independently), but the deck doesn't depend on assembling that 2-card combo to win. Thermo-Alchemist, Docent of Perfection, and Burning Vengeance turn every instant/sorcery cast (including flashback recasts) into incremental damage or board presence, while Seize the Storm and Rise from the Tides convert a stocked graveyard into a late finisher. Faithless Looting and Think Twice keep the engine fed.

**Slot allocation.** Macro-Archetype: Midrange. Projected Avg MV: 2.92.
- Lands: 16 (40% of N=40) — Midrange target is 38-42%; this deck's top end (Temporal Mastery, Rise from the Tides, Bedlam Reveler pre-reduction) wants reliable access to 5-7 mana, so it sits at the high end of the band rather than trimming for tempo.
- Interaction: 6 of 24 non-land (25%) — within Midrange's 20-30% band. Lightning Axe/Abrade/Fiery Temper clear the board while the engine assembles.
- Threats/Payoffs (absorbing Engine & Infrastructure, per Midrange convention): 18 of 24 (75%). Midrange doesn't reserve a separate engine budget — most payoffs here double as engines (Thermo-Alchemist, Docent, Burning Vengeance, Bedlam Reveler all generate value passively on top of being threats).
- Land count modifiers: cantrips — 2 copies of Faithless Looting qualify as 1-mana filter spells, short of the 3-copy threshold for a -1 adjustment, so 0 applied. Mana dorks/rocks: none available in UR — 0. MDFCs: none in this cube — 0. Final: 16 lands (unchanged from baseline).

**Mana base.** Pip demand across the 24 non-land cards: 20 R pips (66.7%), 10 U pips (33.3%). Strict proportional split would be ~11 R / 5 U sources; instead this build runs 10 R / 6 U (9 Mountain + Molten Tributary vs. 5 Island + Molten Tributary) to keep the double-blue top end (Docent {3}{U}{U}, Temporal Mastery {5}{U}{U} hardcast) safely castable. Audit gap is +4.2pp R / -4.2pp U, both well under the 10pp WARN threshold — PASS. The pool's only other UR dual, Stormcarved Coast, is rare-rarity and was deliberately left out rather than spending one of the 5 rare/mythic slots on fixing the audit already passes without it.

**The combo, precisely.** Galvanic Iteration says "when you next cast an instant or sorcery spell this turn, copy that spell." Cast it, then Miracle Temporal Mastery ({1}{U}) off the following draw step: the copy is created and both the original and the copy independently resolve "take an extra turn after this one" — the copy's own "exile Temporal Mastery" clause fizzles harmlessly since a copy isn't a card. Net result: two extra turns from one draw, not one. The deck does not depend on drawing this 2-card combo — it has three independent win angles if the combo never comes together: (1) Thermo-Alchemist/Burning Vengeance grind damage, (2) Docent's token/anthem engine, (3) Seize the Storm/Rise from the Tides as a graveyard-scaling finisher.

**Framing correction from the self-grill.** No card in this cube carries the literal Storm keyword, and there is no Ritual/fast-mana effect anywhere in the pool — "Storm" only appears as a loose taxonomic tag on Galvanic Iteration and Reforge the Soul. This deck is more accurately described as a flashback/graveyard-value shell with a bonus extra-turn combo, not a true storm-count combo deck. Kept the working title for continuity with the original brief, but the mechanical picture is worth stating plainly.

**Known soft spots.** (1) Delver of Secrets flips off 14/40 = 35% instant/sorcery density in the deck, below the ~45-50% that makes Delver flip reliably — it will underperform its usual reputation, though flashback recasts add extra "cast an instant/sorcery" events over a game even without raising the raw card count. (2) Only 8 creatures (20%) — the deck can be raced by fast starts before Thermo-Alchemist/Thing in the Ice come online; Boarded Window is sideboarded specifically for this. (3) Docent of Perfection's flip needs 3 Wizards under your control; Docent itself is an Insect Horror (not a Wizard), so you need Delver + 2 tokens, or 3 tokens from 3 spells cast in a turn — a real but not trivial bar.

**Cards Considered but Excluded**

*Rares/mythics cut by the 5-card cap* (the 5 kept were Thing in the Ice, Docent of Perfection, Bedlam Reveler, Galvanic Iteration, Temporal Mastery):
- **Chandra, Dressed to Kill** (M) — cheap reach/card-advantage walker; lost out to combo-critical rares.
- **Jace, Unraveler of Secrets** (M) — strong control card draw/bounce; same reasoning, and this deck leans proactive rather than controlling.
- **Mirrorwing Dragon** (M) — tagged Spellslinger but its copy trigger only fires on spells that target itself; doesn't actually support this plan (confirmed by oracle-text check during the self-grill).
- **Hullbreaker Horror** (R) — a genuine alternative to Bedlam Reveler (rewards casting/flashback-recasting spells more directly). Passed on it because Bedlam Reveler's hand-refill is what this low-curve deck needs after dumping resources, and Hullbreaker's {5}{U}{U} hardcast is harder to reliably deploy. Worth revisiting for a more controlling build.
- **Memory Deluge** (R) — excellent card selection + flashback rebuy; lost out purely to the rare cap, no functional knock against it.
- **Reforge the Soul** (R) — symmetrical wheel; too risky refilling the opponent's hand in a proactive deck.
- **Stormcarved Coast** (R, land) — 2nd UR dual; the mana base passes audit without spending a rare slot on it.

*Uncommons/commons a tier below the chosen includes:*
- **Silent Departure** (C) — cheap flashback bounce; lost the slot to the denser removal suite and Think Twice.
- **Reckless Scholar** (C) — repeatable loot engine; redundant with Faithless Looting + Think Twice already covering filtering.
- **Tower Geist** (C) — card-selection flyer; solid but the curve favored staying lean.
- **Cobbled Lancer / Covetous Castaway / Grizzled Angler / Aberrant Researcher** — self-mill/graveyard enablers; the yard already fills fast enough via Looting, flashback casts, and combat without dedicated mill.

*Sideboard-consideration cards that didn't make the final 10:*
- **Neonate's Rush** (C) — minor removal + cantrip; lost to Alchemist's Greeting/Savage Alliance for matchup-specific impact.
- **Geistlight Snare** (U) — conditional soft counter; Syncopate covers that role more reliably.
- **Compelling Deterrence** (U) — bounce spell; redundant with the maindeck's existing tempo tools.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.92   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  66.7%  prod  62.5%  gap  +4.2pp  [OK]
  U  demand  33.3%  prod  37.5%  gap  -4.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons <= 2 copies each - verified, no card exceeds cap
[PASS] Rares/mythics <= 1 copy each - all 5 are singletons
[PASS] Max 5 rares/mythics total (main+SB) - exactly 5: Thing in the Ice,
       Docent of Perfection, Bedlam Reveler, Galvanic Iteration, Temporal
       Mastery
[PASS] No excluded cards - exclusion list was empty
```
