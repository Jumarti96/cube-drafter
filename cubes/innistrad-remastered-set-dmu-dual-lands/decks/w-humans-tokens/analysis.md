---
deck_name: "mono-w-humans-tokens"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "W"
format: "40-card"
built_at: "2026-07-08T20:26:34Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
16x Plains            Mono-color deck — no nonbasic W land exists in this pool; basics are strictly correct here.
```

### CREATURES (15)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Thraben Inspector        x2    W      Curve filler / Clue consistency  C
  1  Lunarch Veteran          x1    W      1-drop lifegain, disturb value   C
  2  Ambitious Farmhand       x1    W      Land tutor, flips to lifelink    U
  2  Cathar Commando          x1    W      Flash body + artifact/ench hate  C
  3  Crusader of Odric        x2    W      Payoff (P/T = creature count)    C
  3  Dauntless Cathar         x2    W      GY-value token generator         C
  3  Thalia, Heretic Cathar   x1    W      Aggressive disruption            R
  4  Inspiring Captain        x2    W      Team pump ETB payoff             C
  4  Mausoleum Guard          x2    W      Dies -> 2 flying tokens          U
  4  Odric, Lunarch Marshal   x1    W      Payoff (keyword sharing)         R
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Gather the Townsfolk     x2    W      Token generator                  C
  2  Valorous Stance          x1    W      Interaction (protect/removal)    U
  3  Angelic Purge            x1    W      Sac-cost exile removal           C
```

### OTHER SPELLS (5)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Intangible Virtue        x2    W      Token anthem payoff              U
  3  Wedding Announcement     x1    W      Token gen + team anthem (flip)   R
  3  Butcher's Cleaver        x1    C      Equipment finisher (Human lifelink) U
  5  Cathars' Crusade         x1    W      Go-wide counters engine finisher R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Slayer of the Wicked     x1    W      vs. Vampire/Werewolf/Zombie decks    U
Fiend Hunter              x1    W      More exile removal, grindy matchups  U
Soul-Guide Gryff          x1    W      Graveyard/flashback/reanimator hate  C
Bound by Moonsilver       x1    W      Removal + stops werewolf transform   C
Faith Unbroken            x1    W      Exile removal vs. control/big stuff  U
Avacynian Priest          x1    W      Repeatable tapper vs. non-Human      C
Restoration Angel         x1    W      Flash flying upgrade, re-trigger ETBs R
Mentor of the Meek        x1    W      Card draw engine vs. control/grind   U
Twinblade Geist           x1    W      Evasive double-strike clock          U
Niblis of the Urn         x1    W      Flying tapper, opens attack lanes    U
```

## ANALYSIS

**Curve & density.** CMC distribution: 3 @ 1, 7 @ 2, 8 @ 3, 5 @ 4, 1 @ 5 (avg 2.75). Only Gather the Townsfolk makes tokens immediately off the cast; Dauntless Cathar and Mausoleum Guard convert deaths into bodies, so the deck's width comes from bodies-plus-bursts rather than a pure turn-1-3 swarm — it plays more like a payoff-dense go-wide midrange-aggro than hyper-aggro. That's an intentional trade for interaction density at "competitive" power level. This build started with 9 cards clustered on turn 3 and was rebalanced during self-grill review (Fiend Hunter moved to sideboard, Cathar Commando moved to mainboard) to shift one slot down to turn 2.

**Cathars' Crusade math.** Every creature ETB (including token ETBs) triggers a +1/+1 counter on the whole board. With Gather the Townsfolk (2 tokens) or Mausoleum Guard (2 tokens on death) resolving after Crusade is down, a single card can add 2+ counters to every creature you control simultaneously — this is the deck's actual "combo" turn.

**Human density for Butcher's Cleaver.** All 15 mainboard creature slots are Human-typed, so the Cleaver's lifelink clause is live on the entire creature base, not a narrow condition.

**Odric's keyword pool.** The team can source first strike (Thalia), vigilance (Intangible Virtue tokens), and lifelink (Cleaver, Ambitious Farmhand's flipped back face) — Odric spreads whichever of these is present across every creature each combat, so drawing any two of those pieces alongside Odric creates a real keyword-soup swarm.

**Wedding Announcement tension.** Its token mode only fires if you did *not* attack with 2+ creatures that turn — on your biggest attack turns it draws a card instead of adding a body. Both modes are good, but don't count on it as a reliable width source during alpha-strike turns.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- Gisela, the Broken Blade (M) — strong flying/first strike/lifelink body, but Angel-typed and off-plan (doesn't scale with creature count or tokens); budget better spent on Cathars' Crusade/Odric.
- Bruna, the Fading Light (R) / Brisela, Voice of Nightmares (M) — 7cmc and 11cmc meld pieces; far too slow for a 40-card aggro curve.
- Voice of the Blessed (R) — lifegain-into-counters payoff, but keys off lifegain triggers rather than creature/token count; off-theme.
- Hopeful Initiate (R) — decent Training/artifact-enchantment removal, redundant with Fiend Hunter/Angelic Purge; would have been a fine 5th rare/mythic if either Restoration Angel or a mainboard rare were cut instead.
- Vanquish the Horde (R) — symmetrical board wipe; actively anti-synergistic with our own token board.

**Uncommons/commons a tier below the chosen includes:**
- Cathar's Call (U) — vigilance + recurring token aura; strong but redundant with Wedding Announcement's token generation at the same 3cmc slot.
- Gryff's Boon (U) / Lunarch Mantle (C) — cheap evasion/pump auras with recursion or sac synergy; solid Voltron-package pieces if pivoting toward the Equipment/Aura build instead.
- Apothecary Geist (C) — lifegain flier, but conditional on controlling another Spirit; thin support in this build.
- Drogskol Shieldmate (C) — flash +0/+1 team pump; more defensive than this deck wants.
- Subjugator Angel (U) — 6cmc tap-all effect; too slow for the curve.

**Sideboard-consideration cards that didn't make the final 10:**
- Guardian of Pilgrims (C) — generic +1/+1 EOT body; cut for Mentor of the Meek's real card-advantage engine (most of the deck is power <=2).
- Cathar's Call, Gryff's Boon, Lunarch Mantle — good "pivot to Voltron" sideboard swaps if more resilience against removal-heavy decks is wanted post-board.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.75   Ramp cards: 0

Color Balance (core):  [PASS]
  W  demand   0.0%*  prod 100.0%  gap -100.0pp  [OK]
  *demand shows 0% due to a working-pool-cache field gap (mana_cost isn't
  cached in the Phase 0 working pool), but this is mono-color — every
  nonland card is W or colorless, so 100% W land production is
  unambiguously correct regardless of the pip-count artifact.
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons at <=2 copies each - verified, no violations
[PASS] Rares/mythics at 1 copy each - verified, no violations
[PASS] Max 5 rares/mythics total (main+SB) - 4 mainboard + 1 sideboard = 5
[PASS] All cards within mono-W or colorless identity
[PASS] Cube membership - all 27 unique cards verified in working pool by exact name
```
