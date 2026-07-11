---
deck_name: "gw-anthem-go-wide-tokens"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-09T23:51:25Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
9x Plains
5x Forest
2x Radiant Grove          GW dual, enters tapped
```

### CREATURES (8)
```
CMC  Card                        Qty   Color  Role                          Rar
  1  Icatian Javelineers          x1    W      Early body / reach pinger      C
  1  Savannah Lions                x2    W      Aggro curve filler             C
  2  Jolrael, Mwonvuli Recluse     x1    G      Token engine / finisher        R
  4  Kavu Primarch                 x2    G      Convoke width payoff           C
  6  Nut Collector                 x1    G      Squirrel engine / payoff       M
  3  Penumbra Bobcat                x1    G      Token fodder / value creature  C
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                        Qty   Color  Role                          Rar
  1  Swords to Plowshares          x2    W      Premium removal                U
  1  Enlightened Tutor             x1    W      Consistency tutor              R
  3  Call of the Herd              x2    G      Token payoff (+flashback)      U
  3  Radiant's Judgment            x1    W      Big-creature removal / cycle   C
  4  Battle Screech                x2    W      Token payoff (+flashback)      U
  4  Congregate                    x1    W      Life payoff / finisher         U
  4  Saproling Symbiosis           x1    G      Mass token payoff              R
```

### OTHER SPELLS (6)
```
CMC  Card                        Qty   Color  Role                          Rar
  2  Pacifism                      x2    W      Removal                        C
  3  Squirrel Nest                 x2    G      Recurring token engine         U
  3  Divine Sacrament              x1    W      Anthem / payoff                R
  3  Griffin Guide                 x1    W      Evasion enabler / death-token   U
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in           Rar
Tormod's Crypt                 x1    C      Graveyard hate; vs threshold/flashback/reanimator  U
Damping Sphere                 x1    C      Anti-ramp/storm; vs big-mana or spell-chain decks   U
Renewed Faith                  x1    W      Life gain + cycling; vs aggro/burn                  C
Sun Clasp                      x1    W      Protects key threat from removal; vs removal-heavy  C
Emerald Charm                  x1    G      Modal: untap / enchantment removal / anti-flying    C
Wax // Wane                    x1    GW     Combat trick or enchantment removal; flex           U
Lull                           x1    G      Fog + cycle; vs alpha-strike / bigger boards         C
Auramancer                     x1    W      Rebuys destroyed anthem/engine enchantment           C
Nomad Decoy                    x1    W      Taps down a blocker/attacker; tempo                  C
Radiant's Judgment             x1    W      2nd copy; vs decks full of power-4+ threats          C
```

## ANALYSIS

A green-white token swarm that wins by going wide faster than the opponent can answer it. Squirrel Nest, flashback Battle Screech, and flashback Call of the Herd generate a stream of cheap bodies; Divine Sacrament and Saproling Symbiosis convert that width into real damage, while Jolrael and Nut Collector keep refilling the board turn after turn. Kavu Primarch cashes the width in directly via convoke, and Congregate turns an unblocked board into a life-total blowout. A lean removal suite (Swords to Plowshares, Pacifism, Radiant's Judgment) buys the time needed to assemble the swarm, with Enlightened Tutor smoothing draws toward the key payoff enchantments.

**Threshold sub-theme runs underneath the token plan.** Divine Sacrament, Nut Collector, and Nomad Decoy all key off "seven or more cards in your graveyard." The deck naturally fills the yard via Battle Screech/Call of the Herd flashback (each card visits the graveyard once before its second cast) and Radiant's Judgment/Renewed Faith cycling, so threshold is a realistic late-game upgrade, not a dead clause, even though it isn't a build-around.

**Anthem color mismatch.** Divine Sacrament reads "White creatures get +1/+1," but the bulk of this deck's token output is green (Squirrel Nest, Nut Collector, Saproling Symbiosis, Jolrael, Call of the Herd all make green tokens). Only Battle Screech's Birds, Griffin Guide's Griffin, Savannah Lions, and Icatian Javelineers are white. It was kept because the pool has no cheaper colorless/GW-neutral anthem within the rare budget (Gauntlet of Power and Kamahl's activated pump both cost a rare/mythic slot and are strictly worse fits), and it still meaningfully boosts the early white aggro plan (Savannah Lions into Battle Screech tokens). Don't expect it to buff a board of Squirrels.

**Kavu Primarch math.** Convoke lets any subset of your board pay for its {3}{G} cost (or {7}{G} kicked for a 7/7). With even 3 tokens out, it's castable for as little as {G} plus tapped creatures, meaning a turn where you've made 3+ tokens can often follow up with a hardcast or even kicked Primarch the same turn if you have the mana, since convoke doesn't cost mana at all for the tapped portion.

**Congregate math.** At a board of 6 total creatures (both players combined), Congregate gains 12 life, a real swing against aggressive decks, and the reason a Renewed Faith backup lives in the board rather than a second copy of Congregate itself (redundant scaling effects are weaker than one flat-rate one).

**Curve note.** 8 of 24 nonland cards sit at CMC 3 (Call of the Herd x2, Squirrel Nest x2, Divine Sacrament, Penumbra Bobcat, Griffin Guide, Radiant's Judgment) versus only 3 at CMC 2, so turn 3 will often have multiple competing plays while turn 2 can be light. This was flagged by the Challenger agent as a real but non-fatal variance source, not a rebuild trigger.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- Windborn Muse (R) — best pure interaction piece in GW ("Creatures can't attack you unless their controller pays {2} for each attacker"); would be the top swap-in if you free a rare slot, especially vs. aggro mirrors.
- Sylvan Library (M) — strong card advantage engine, but the life-payment cost fights this deck's low-life aggressive plan.
- Lyra Dawnbringer (M) — powerful body but Angel-tribal, no token synergy.
- Phantom Nishoba (R) — 7cmc, too slow for this curve.
- Wrath of God (R) — actively anti-synergistic; kills our own board.
- Birds of Paradise (R) — ramp/fixing not needed in a clean 2-color build.
- Hunting Grounds (M) — needs 7+ cards in graveyard to turn on; too conditional to justify a slot over the locked-in payoffs.
- Crawlspace (R) — good anti-aggro (caps attackers at 2), reasonable sideboard alternative to Windborn Muse if you want a cheaper rare.
- Sevinne's Reclamation (R), Worldly Tutor (R), Lieutenant Kirtar (R), Forgotten Ancient (R) — solid value/utility rares, all lost out purely to budget triage, not power level.

**Uncommons a tier below the chosen includes:**
- Terravore — "power/toughness equal to lands in all graveyards"; strong ceiling but needs external land-graveyard fuel this deck doesn't generate reliably.
- Mystic Enforcer — solid GW gold body (protection from black, +3/+3 flying at threshold) but contributes nothing to the token plan.
- Mesa Enchantress — draws a card per enchantment cast; interesting with the ~6 enchantments in this list but too few to reliably trigger.
- Whitemane Lion — flexible flash 2/2, but no ETB payoff to rebuy in this build.
- Icy Manipulator (uncommon, colorless) — repeatable tap-down; a fine sideboard option vs. control if you want to cut Damping Sphere or Tormod's Crypt for a non-hate slot.
- Orim's Thunder — artifact/enchantment removal (kicker needs red, so it's a plain "destroy" in this deck); a sideboard alternative to Wax // Wane if you want a harder answer instead of a flexible one.

**Sideboard-consideration cards that didn't make the 10:**
Windborn Muse and Crawlspace (above, budget-gated), Icy Manipulator and Orim's Thunder (above, redundant with Wax // Wane / Emerald Charm's modes).

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.75   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  41.4%  prod  43.8%  gap  -2.4pp  [OK]
  W  demand  58.6%  prod  68.8%  gap -10.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons up to 2 copies each - no violations
[PASS] Uncommons up to 2 copies each - no violations
[PASS] Rares/mythics up to 1 copy each - no violations
[PASS] Max 5 rares/mythics total (main+SB) - exactly 5/5 used
       (Divine Sacrament, Jolrael, Saproling Symbiosis, Nut Collector, Enlightened Tutor)
```
