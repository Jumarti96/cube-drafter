---
deck_name: "wg-enchantress-zur-toolbox"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WG"
format: "40-card"
built_at: "2026-07-09T22:48:08Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  5x Plains
  4x Forest
  2x Radiant Grove          WG dual, enters tapped
  2x Idyllic Beachfront     WU dual, enters tapped (splash support)
  2x Sunlit Marsh           WB dual, enters tapped (splash support)
  1x Contaminated Aquifer   UB dual, enters tapped (splash support)
```

### CREATURES (10)
```
CMC  Card                    Qty   Color  Role                                Rar
  1  Savannah Lions          x2    W      Efficient body / aura carrier      C
  1  Birds of Paradise       x1    G      Ramp + any-color fixing            R
  3  Mesa Enchantress        x2    W      Draw engine                        U
  3  Auramancer              x2    W      Enchantment recursion              C
  4  Voice of All            x1    W      Protected threat / aura carrier    U
  4  Zur the Enchanter       x1    BUW    Keystone: enchantment tutor-cheat  R
  5  Serra Angel             x1    W      Evasive finisher / aura carrier    U
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                    Qty   Color  Role                                Rar
  1  Swords to Plowshares    x2    W      Premium removal                    U
  1  Enlightened Tutor       x1    W      Finds Zur / Sylvan Library / Squirrel Nest  R
  3  Sevinne's Reclamation   x1    W      Recursion, MV<=3 permanents        R
  3  Radiant's Judgment      x1    W      Conditional removal + cycling      C
```

### OTHER SPELLS (9)
```
CMC  Card                    Qty   Color  Role                                Rar
  1  Wild Growth             x2    G      Ramp / Zur target (MV1)            C
  2  Sylvan Library          x1    G      Draw engine / Zur target (MV2)     M
  2  Pacifism                x2    W      Removal + Enchantress trigger      C
  3  Squirrel Nest           x2    G      Token engine / Zur target (MV3)    U
  3  Seton's Desire          x1    G      Aura payoff / Zur target (MV3)     C
  3  Griffin Guide           x1    W      Evasion aura, leaves a token       U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                 Rar
Terror                  x1    B      Vs. resilient creatures (splash)        C
Chainer's Edict         x1    B      Vs. hexproof/protection (splash)        U
Duress                  x1    B      Vs. control/combo (splash)              C
Wax // Wane             x1    GW     Vs. problem enchantments / combat trick U
Break Asunder           x1    G      Vs. artifacts/enchantments, cycles      C
Emerald Charm           x1    G      Flexible: non-Aura ench/untap/anti-fly  C
Giant Spider            x1    G      Vs. flyers                              C
Renewed Faith           x1    W      Vs. aggro, gain 6 + cycles              C
Congregate              x1    W      Vs. aggro, scales with board            U
Spirit Link             x1    W      Vs. aggro, lifegain aura                C
```

## ANALYSIS

Mesa Enchantress and Sylvan Library turn every enchantment you cast into a card, while Squirrel Nest and Wild Growth's auras keep the trigger firing cheaply. Zur the Enchanter is the payoff on top: attack once and pull any mana-value-3-or-less enchantment straight onto the battlefield — Sylvan Library, Squirrel Nest, or a Pacifism to answer a blocker. Auramancer and Sevinne's Reclamation loop the whole package back out of the graveyard, so losing a permanent to removal rarely sticks.

**Macro-Archetype: Midrange (value-engine subtype). Projected Avg MV: 2.38** (nonland spells only, confirmed by mana audit).

**Slot allocation:**
- Lands: 16 (40.0% of N=40) — mid-range midrange baseline (38-42%), pulled down slightly (raw calc landed at 15.5) by two cheap mana sources (Birds of Paradise + Wild Growth x2, MV<=2), but held at 16 rather than 15 because this is functionally a 4-color manabase (WG core + U/B splash) and the extra land buys consistency for the splash.
- Interaction: 5 cards, 20.8% of 24 nonland (Swords to Plowshares x2, Pacifism x2, Radiant's Judgment) — low end of the Midrange 20-30% band. This is intentional: Enlightened Tutor and Zur both function as tutors *for* Pacifism when needed, so the deck's effective interaction density is higher than the raw count shows.
- Threats/Payoffs + Infrastructure (absorbed into one bucket per the Midrange rule — Engine gets no separate budget here): 19 cards, 79.2% of 24. This is well above the generic Midrange guidance of 30-40% because in an Enchantress shell, nearly every card is *simultaneously* infrastructure and payoff — Squirrel Nest is both a token engine and a Zur target; Wild Growth is both ramp and a Zur target; Mesa Enchantress is both a draw engine and the namesake payoff. The reference proportions assume separable roles that this archetype structurally collapses into single cards, which is the entire thesis of "Enchantress" as a strategy.

**Mana source allocation (pip-based):** Core pips (W/G only, Zur's BUW cost excluded from core calc since it's the splash payload): 20 W / 9 G = 69% / 31%. Land production: W 11 sources / G 6 sources (68.8% / 31.3% of colored production) — a near-exact match. Splash: 3 U sources + 3 B sources (Idyllic Beachfront, Sunlit Marsh, Contaminated Aquifer, each pulling double duty as a W or G source too) support Zur's single 1U1B pip requirement, with Birds of Paradise as a 4th effective any-color source. Audit confirms PASS with zero flags.

**Key interaction — the Zur/Mesa Enchantress stack:** Zur's attack trigger fetches any enchantment MV<=3 directly onto the battlefield, skipping the cast step — which means it does **not** trigger Mesa Enchantress (that only fires on cast). The two engines are complementary, not stacked: Zur is a tutor-and-cheat effect for consistency (find Sylvan Library when you need cards, Squirrel Nest when you need blockers, Pacifism when you need removal), while Mesa Enchantress rewards the normal cast-heavy line (auras going onto creatures, Wild Growth onto lands). A typical grindy game plays Mesa Enchantress off curve, casts 2-3 cheap enchantments over the following turns for card advantage, and holds Zur as a late-game "tutor for whatever answers this specific board state" rather than a turn-4 auto-include.

**Auramancer/Sevinne's Reclamation loop:** both target the graveyard independently (no combo between them), but together they mean losing an enchantment to removal is rarely a real loss — Auramancer (MV3, x2) returns any one to hand, Sevinne's Reclamation (MV3) returns any permanent MV<=3 straight to the battlefield, and if cast *from* the graveyard (its own recursive clause) may copy itself, effectively rebuying two permanents at once late in a grindy game.

**Threshold cards that don't have support:** Seton's Desire's upside clause ("all creatures able to block enchanted creature do so" once 7+ cards are in the graveyard) will rarely turn on — this deck has no self-mill or heavy attrition plan. It's included purely for the base +2/+2 rate at common; the threshold clause is a bonus, not a build-around.

### Cards Considered but Excluded

**Rares/mythics cut solely for the 5-card cap** (all are legitimate Enchantress-cluster cards; swap in if you loosen the rare limit):
- **Divine Sacrament** (rare, W, MV3) — anthem for white creatures, threshold upgrades it further, triggers Mesa Enchantress, and is a Zur target. Best single upgrade candidate; would most cleanly replace Radiant's Judgment or Griffin Guide.
- **Mystic Remora** (rare, U, MV1) — explicitly named in the original archetype context; strong value engine and Zur target, but the deck already had a 2-drop-tutor (Sylvan Library) doing similar work and Remora's cumulative upkeep tax gets punishing if left unanswered.
- **Test of Endurance** (mythic, W, MV4) — alternate win condition (50 life = win), too slow/cute for a competitive 40, and redundant with the deck's actual gameplan.
- **Hunting Grounds** (mythic, GW, MV2) — named in the original archetype context, but the tagger classifies it under the Graveyard cluster (not Enchantress) and needs threshold (7+ GY cards) to do anything; this deck has no self-mill to enable it.
- **Wrath of God** (rare, W, MV4) — powerful sweeper, but kills your own Squirrel Nest tokens and creature-carried auras; better suited to a pure-control build than this one.
- **Windborn Muse** (rare, W, MV4) / **Worldly Tutor** (rare, G, MV1) — solid, but lower priority than the five chosen; Worldly Tutor finds creatures, and there's no single creature worth top-decking for.

**Uncommons/commons a tier below the chosen includes:**
- **Sun Clasp** (common, W, MV2) — Voltron aura (+1/+3, {W}: bounce enchanted creature to hand) that would enable an Auramancer-bounce loop for repeat ETB value; close cut against Pacifism/Griffin Guide for a mainboard slot.
- **Hermetic Study** / **Leaden Fists** (both U, common) — Zur-eligible combat auras, cut because hard-casting them would stretch the already-thin U splash further than it needs to go.
- **Whitemane Lion** (W, common) — flash + bounce-a-creature-you-control ETB; cute with Auramancer (replay it for another recursion trigger) but too narrow to earn a slot over a clean beater.
- **Battle Screech** (W, uncommon) — token generator that would support a wider board, cut for curve/slot reasons rather than power.
- **Invigorating Boon** (G, uncommon) — needs a cycling subtheme this deck doesn't run.

**Sideboard-consideration cards not included:**
- **Improvised Armor** (W, uncommon, MV4) — bigger aura (+2/+5) for grindy creature-vs-creature matchups.
- **Lull** / **Primal Boost** (G, common) — fog effect and combat trick w/ cycling, both viable vs. aggressive decks.
- **Confiscate** (U, uncommon, MV6) — steal effect, too slow/off-curve for this shell but a real answer to a single problem threat if the splash gets deeper support later.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.38   Ramp cards: 0*

Color Balance (core):  [PASS]
  G  demand  31.0%  prod  37.5%  gap  -6.5pp  [OK]
  W  demand  69.0%  prod  68.8%  gap  +0.2pp  [OK]

Splash (U/B): 3 sources each, PASS, no flags.

*Tooling note: the audit's ramp-detection looks for an exact "ramp" tag;
Birds of Paradise and Wild Growth are tagged "Mana Ramp" (mechanical_functions),
so they weren't counted here. Both self-grill agents flagged this as an
audit-tool naming mismatch, not a deck problem — actual ramp count is 3
(Birds of Paradise + Wild Growth x2).
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: max 2 copies each — verified across all 40 mainboard + 10 sideboard cards
[PASS] Rares/mythics: max 1 copy each — 5 unique rares/mythics, all singleton
[PASS] Max 5 rares/mythics total (mainboard + sideboard) — exactly 5 used
       (Zur the Enchanter, Sylvan Library, Enlightened Tutor, Birds of Paradise,
       Sevinne's Reclamation), all in mainboard, 0 in sideboard
```
