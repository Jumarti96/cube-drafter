---
deck_name: "rg-goblin-convoke-sacrifice-aggro"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-07-09T23:42:45Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  9x Mountain
  4x Forest
  2x Wooded Ridgeline       RG common dual, enters tapped
  1x Mishra's Factory       Colorless manland, resilient threat
```

### CREATURES (16)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Skirk Prospector        x2    R      Sac-for-mana on Goblins    C
  2  Mogg War Marshal        x2    R      Token generator (3 bodies) C
  2  Subterranean Scout      x1    R      Evasion enabler            C
  3  Pashalik Mons           x1    R      Goblin-death payoff/reach  R
  3  Goblin Matron           x1    R      Toolbox tutor              C
  3  Goblin Medics           x1    R      Pinger (triggers on tap)   C
  3  Penumbra Bobcat         x2    G      Value 2-for-1 body         C
  3  Gempalm Incinerator     x2    R      Scaling removal/cantrip    U
  4  Kavu Primarch           x2    G      Convoke payoff             C
  4  Flametongue Kavu        x1    R      Removal + body             U
  5  Siege-Gang Commander    x1    R      Premier payoff/finisher    R
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                    Qty   Color  Role                       Rar
  1  Chain Lightning         x2    R      Early reach/removal        C
  4  Empty the Warrens       x2    R      Storm-scaled tokens        C
  4  Saproling Symbiosis     x1    G      Doubles board width        R
  4  Solar Blast             x1    R      Removal/cantrip            C
```

### OTHER SPELLS (2)
```
CMC  Card                    Qty   Color  Role                       Rar
  3  Squirrel Nest           x2    G      Persistent token engine    U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in        Rar
Tormod's Crypt          x1    -      Vs. graveyard/reanimator        U
Icy Manipulator         x1    -      Vs. big stabilizing threats     U
Crawlspace              x1    -      Vs. aggro/go-wide mirrors       R
Damping Sphere          x1    -      Vs. storm/ritual combo          U
Decimate                x1    RG     Vs. problematic permanents      R
Spark Spray             x1    R      Vs. X/1 swarms                  C
Sandstorm               x1    G      Vs. token/go-wide mirrors       C
Emerald Charm           x1    G      Vs. enchantment locks/fliers    C
Flametongue Kavu        x1    R      Vs. grindier matchups           U
Goblin Medics           x1    R      Vs. attrition matchups          C
```

## ANALYSIS

A Goblin-tribal go-wide plan: cheap Goblins (Mogg War Marshal, Skirk Prospector) and token-doublers (Squirrel Nest, Saproling Symbiosis) flood the board, Pashalik Mons and Siege-Gang Commander turn dying/sacrificed Goblins into direct damage, and Kavu Primarch converts the leftover width into a free-or-cheap convoked threat. Interaction (Chain Lightning, Flametongue Kavu, Gempalm Incinerator, Solar Blast) keeps the attack lane clear while the deck races.

**Two overlapping subplans, not one unified engine.** All three sacrifice outlets - Skirk Prospector, Siege-Gang Commander's ability, and Pashalik Mons's ability - read "Sacrifice a Goblin." That means Squirrel Nest's Squirrels, Saproling Symbiosis's Saprolings, and Penumbra Bobcat's Cat token never feed the sac-for-damage engine; they exist purely to widen the board for Kavu Primarch's convoke and for raw combat math. The deck is really "Goblin Sac Aggro" layered with a "generic Tokens/Convoke" subplan, not one aristocrats engine. This is fine mechanically (both subplans point at the same win condition) but worth knowing when sequencing: don't expect to sac a Squirrel to Siege-Gang Commander.

**Goblin Medics + convoke is a real (if narrow) interaction.** Tapping Goblin Medics to help pay Kavu Primarch's convoke cost triggers its "whenever this creature becomes tapped" ping for 1 damage - a free ding on top of the mana savings.

**Gempalm Incinerator scales with your own board.** Cycling it deals damage equal to Goblins on the battlefield - with Mogg War Marshal, Pashalik Mons tokens, and Siege-Gang Commander's tokens in play, this routinely kills 3-4 toughness creatures for a cantrip's cost.

**Empty the Warrens' floor is 2 tokens, not more.** Storm copies it for each spell cast earlier that turn - cast alone it's just two 1/1s. It wants to be the last spell in a turn where Skirk Prospector or cheap removal already resolved.

**Sideboard caveats worth flagging to the pilot:**
- Decimate requires legal targets in all four categories (artifact, creature, enchantment, land) simultaneously - against a bare or artifact/enchantment-light board it may be uncastable unless you sacrifice one of your own permanents to enable it.
- Damping Sphere taxes your own Empty the Warrens and any turn you chain multiple cheap spells - it's a combo/storm answer, not a free include even in matchups where you'd otherwise want it.

### Cards Considered but Excluded

**Cut during the self-grill (was in the original build):**
- Radha, Heir to Keld (uncommon) - the Challenger agent caught that her actual oracle text ("Whenever Radha attacks, you may add {R}{R}. {T}: Add {G}.") has no card-draw despite the ramp-adjacent role initially assigned, and - more importantly - she's not a Goblin, so none of the three sac outlets or Gempalm Incinerator's X can ever see her. Cut in favor of a 16th land, which also fixed the mana audit's land-count recommendation exactly.

**Rares/mythics cut for the 5-card budget:**
- Jolrael, Mwonvuli Recluse (rare) - real Tokens payoff, but needs a "draw 2nd card each turn" enabler this list doesn't run reliably.
- Birds of Paradise (rare) - solid fixing/ramp, but the manabase didn't need it and every rare slot went to a direct payoff instead.
- Grim Lavamancer (rare) - repeatable removal, but wants graveyard fuel this low-curve aggro shell doesn't generate fast enough.
- Nut Collector (mythic) - Squirrel payoff for Squirrel Nest, but 6 CMC and a Threshold condition (7+ cards in yard) that won't reliably flip in a fast aggro game.
- Kamahl, Fist of Krosa (mythic) - a real overrun-style go-wide payoff ({2}{G}{G}{G}: creatures get +3/+3 trample), but too color-intensive and slow (6 CMC) for this curve.

**Uncommons a tier below the chosen includes:**
- Call of the Herd - 3/3 body plus a flashback copy later; a genuinely close call against Penumbra Bobcat/Gempalm Incinerator for a curve slot, worth testing as a swap-in.
- Valduk, Keeper of the Flame - strong token payoff but wants Auras/Equipment this list doesn't run.
- Deadapult - sac outlet, but keys off Zombies, the wrong tribe for this build.
- Assault // Battery - flexible burn/token split card, marginal upgrade candidate but didn't beat what's already at 4-5 CMC.

**Sideboard-consideration cards that didn't make the final 10:**
- Break Asunder (artifact/enchantment removal + cycling) - close alternative to Emerald Charm.
- Lull (fog effect, cycling) - alternative anti-swarm/combat-trick to Sandstorm.
- Symbiotic Beast (6 CMC, 4 tokens on death) - huge death payoff but too slow for this curve even as a sideboard plan.
- Overmaster / Jester's Cap (rares) - both interesting but would have required cutting one of the five rares already locked in.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.92   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  33.3%  prod  37.5%  gap  -4.2pp  [OK]
  R  demand  66.7%  prod  68.8%  gap  -2.1pp  [OK]

Splash Check: none (splash_colors = [])
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons <= 2 copies each - all common cards at 1 or 2 copies, none over
[PASS] Uncommons <= 2 copies each - Gempalm Incinerator (2/2), Squirrel Nest (2/2),
       Flametongue Kavu (2/2 across main+SB), Mishra's Factory (1/2), Tormod's Crypt (1/2),
       Icy Manipulator (1/2), Damping Sphere (1/2) - all within cap
[PASS] Rares/mythics <= 1 copy each - Pashalik Mons, Saproling Symbiosis,
       Siege-Gang Commander, Crawlspace, Decimate - all singleton
[PASS] Max 5 rares/mythics total (main + SB) - exactly 5/5
```
