---
deck_name: "brg-tutor-toolbox-reanimator"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BRG"
format: "40-card"
built_at: "2026-07-09T23:59:01Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
6x Swamp
2x Mountain
1x Forest
1x Geothermal Bog        BR dual, enters tapped
1x Haunted Mire          BG dual, enters tapped
1x Wooded Ridgeline      RG dual, enters tapped
1x Darigaaz's Caldera    BRG tri-land, bounce a non-Lair land on ETB
1x Polluted Mire         B source, enters tapped, Cycling {2}
1x Smoldering Crater     R source, enters tapped, Cycling {2}
1x Slippery Karst        G source, enters tapped, Cycling {2}
1x Terminal Moraine      Colorless, sac to fetch any basic
```

### CREATURES (10)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Mogg War Marshal        x1    R      Fodder / early board presence      C
  2  Werebear                x1    G      G-splash fixing, threshold payoff   C
  3  Phyrexian Ghoul         x2    B      Sacrifice outlet                   C
  3  Phyrexian Rager         x1    B      Cantripping fodder                 C
  4  Gamekeeper              x1    G      Cheat enabler + payoff              U
  4  Flametongue Kavu        x1    R      Removal-on-a-body                  U
  5  Spiritmonger            x1    BG     Castable beater / cheat target      U
  6  Necrosavant             x1    B      Self-recurring reanimator threat    U
  6  Worldgorger Dragon      x1    R      Marquee cheat/reanimation payload   M
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Vampiric Tutor          x1    B      Universal tutor                    M
  1  Entomb                  x1    B      Instant graveyard enabler           R
  1  Worldly Tutor           x1    G      Sets up Gamekeeper / finds a bomb  R
  1  Chain Lightning         x2    R      Cheap interaction/reach            C
  2  Terror                  x2    B      Unconditional-ish removal          C
  2  Chainer's Edict         x1    B      Edict removal, flashback           U
  3  Life // Death           x1    BG     Second reanimation spell           U
  4  Dread Return            x1    B      Reanimation spell                  U
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                              Rar
  2  Zombie Infestation       x2    B      Discard outlet + fodder            U
  4  Sneak Attack             x1    R      Repeatable cheat engine             M
```

## SIDEBOARD (10)
```
Card                   Qty   Color  Role / When to board in                 Rar
Tormod's Crypt         x1    C      Vs mirror / opposing graveyard decks   U
Duress                 x1    B      Vs control/combo, protects the engine  C
Dark Withering         x1    B      Madness {B} via our discard outlets    U
Faceless Butcher       x1    B      Vs decks with one big untouchable      U
Icy Manipulator        x1    C      Protects a landed bomb, vs aggro       U
Solar Blast            x1    R      Reach/removal vs aggro, cycles late    C
Ichor Slick            x1    B      Vs small aggro creatures, cycles late  C
Assault // Battery     x1    GR     Cheap flexible burn or a 3/3 body      U
Wall of Junk           x1    C      Reusable chump blocker vs aggro        U
Chainer's Edict        x1    B      2nd copy, vs hexproof/protection       U
```

## ANALYSIS

Vampiric Tutor and Worldly Tutor find whatever piece is missing; Entomb instantly stocks the graveyard with Worldgorger Dragon or Spiritmonger for Dread Return / Life//Death / Necrosavant to reanimate. Sneak Attack cheats creatures straight from hand, and the signature toolbox line — Worldly Tutor sets a creature on top of the library, then Phyrexian Ghoul sacrifices Gamekeeper to reveal-and-cheat that exact card into play for free — ties the whole shell together. Five precious rare/mythic slots go entirely to engine pieces (two tutors, Entomb, Sneak Attack, Worldgorger Dragon); every big body backing them up is a common or uncommon.

**Slot allocation.** Macro-Archetype: Combo (tutor-driven engine that assembles a specific "creature in play" state), Projected Avg MV: 2.78. Lands: 17 (42.5% of N=40) — deliberately above the skill's Combo baseline (30-36%) because this is a 3-color cube shell with zero rituals or fast mana to compensate; the color-aware mana-audit tool itself only required 16, so the 17th land is a 1-card conservative buffer against a manabase where nearly half the non-basics enter tapped, not a strict mathematical necessity. Engine/Consistency: 9 cards (39.1% of 23 nonland) — two 1-mana tutors, Entomb, Sneak Attack, 2x Zombie Infestation, 2x Phyrexian Ghoul, Gamekeeper. Interaction: 6 cards (26.1%) — enough removal density to survive to the payoff turns without displacing engine pieces. Threats/Payoffs: 8 cards (34.8%) — Worldgorger Dragon, Dread Return, Life//Death, Necrosavant, Spiritmonger, Mogg War Marshal, Phyrexian Rager, Werebear; several of these double as both the reanimation delivery mechanism and the actual win condition, which is why Threats sits above a "pure" Combo deck's usual 5-15% range.

**Mana base derivation.** Core-color (B/R) pip count: B=15, R=8 (65.2% / 34.8%). Land production: B=10, R=6, G=5 sources out of 17 lands. G is technically a splash (Worldly Tutor, Gamekeeper, Werebear as single-G cards, plus Life//Death and Spiritmonger touching G) but earns 5 dedicated sources rather than the guideline 2-3, because 5 distinct cards need it rather than the usual 1-3 for a "true" splash — the mana audit's splash_requirements formula only flagged a 3-source minimum, so 5 is comfortably ahead of the requirement. Cantrip/rock modifiers: 0 — this deck has no true cantrips (Vampiric Tutor and Entomb are card-selection, not card-draw, so they don't replace themselves) and no persistent mana rocks, hence no downward land adjustment despite the Combo classification.

**The Worldly Tutor to Gamekeeper to Phyrexian Ghoul line, spelled out.** Cast Worldly Tutor ("Search your library for a creature card, reveal it, then shuffle and put the card on top") targeting Worldgorger Dragon or Spiritmonger. Later, sacrifice Gamekeeper to Phyrexian Ghoul ("Sacrifice a creature: This creature gets +2/+2 until end of turn"). Gamekeeper's death trigger ("reveal cards from the top of your library until you reveal a creature card. Put that card onto the battlefield") hits the tutored card immediately — a completely free cheat-into-play with zero graveyard or discard dependency, functioning as a second, independent axis alongside the Entomb/Dread Return and Sneak Attack lines.

**Necrosavant's real cost is BB, not BBB, most of the time.** Its printed casting cost is {3}{B}{B}{B}, but the deck rarely hard-casts it — Entomb or a discard outlet puts it in the graveyard, after which its own ability ("{3}{B}{B}, Sacrifice a creature: Return this card from your graveyard to the battlefield") brings it back for one fewer black pip and doesn't require summoning-sickness-free mana on curve. The self-grill flagged that 10/17 B sources makes reliable BBB access harder than the aggregate pip math implies — worth knowing, but low-stakes since BBB hard-casting is the backup line, not the primary one.

**Dark Withering (SB) is a trap unless discarded.** At {6} to hard-cast it's overcosted removal, but its Madness cost is just {B} — trigger it off Zombie Infestation's discard-two or Ichor Slick's own madness-adjacent cycling, and it becomes efficient unconditional removal exactly when the deck is already doing what it wants to do anyway.

**Self-grill outcome.** Both a Proposer and a Challenger agent independently verified all 50 cards against cube membership, oracle text, and card_pool_rules compliance (exactly 5 rares/mythics — Vampiric Tutor, Entomb, Worldly Tutor, Sneak Attack, Worldgorger Dragon — spent entirely in the mainboard, 0 left for the sideboard; no card exceeds its rarity's copy cap; Chainer's Edict's 1 main + 1 sideboard = 2 total was independently recomputed and confirmed within the uncommon cap). The Challenger's verdict: "This pipeline can achieve its stated win condition with the available card pool" — no re-evaluation to a different Phase 3 path was triggered. One fix was applied post-grill: Damping Sphere was swapped for Assault // Battery in the sideboard, because the Challenger correctly noted Damping Sphere's storm-tax and land-tax clauses have essentially no targets in a cube confirmed to lack ritual/fast-mana or big-mana lands, whereas Assault // Battery is on-color, cheap, flexible burn-or-a-body that's live in almost every matchup.

**Cards Considered but Excluded.**

*Rares/mythics cut by the 5-card budget:* Chainer, Dementia Master (R) and Body Snatcher (R) — both keystone reanimation payoffs from the original archetype brief, cut because keeping both tutors + Entomb + Sneak Attack + Worldgorger Dragon left no room; Dread Return and Life//Death absorb their role at uncommon cost instead. Gamble (R) — third tutor effect, redundant with Vampiric Tutor/Worldly Tutor once budget was tight. Xira Arien (R, exactly BRG) and Pyre Zombie (R, BR) — both on-color and thematically live (Pyre Zombie is a sac outlet with self-recursion), genuinely close cuts. Yawgmoth, Thran Physician (M) and Sylvan Library (M) — powerful but not core to the cheat/reanimate plan. Oversold Cemetery (R) — graveyard-to-hand engine, redundant with the deck's tutoring. Shivan Dragon (R) and Siege-Gang Commander (R) — solid on-color bodies, but Worldgorger Dragon/Necrosavant/Spiritmonger already cover that slot at lower rarity cost. Denizen of the Deep (R, U), Arcanis the Omnipotent (R, U), and Phantom Nishoba (R, GW) — flagged in the archetype brief as "textbook targets," and genuinely castable-regardless-of-color reanimation/cheat targets since Entomb/Dread Return/Sneak Attack don't care about a card's color — but excluded on both budget grounds and consistency grounds: a truly off-color (U or W) bomb is a dead card if drawn before it's cheated in, and the BRG-legal fatty package was judged sufficient without taking that risk. Serra Avatar (M) was excluded for a mechanical reason, not budget: its own text shuffles it back into its owner's library when put into a graveyard "from anywhere," which defeats Entomb/discard-based reanimation outright.

*Uncommons a tier below the chosen includes:* Deadwood Treefolk (G, 3/6) — a fine reanimation target, but its Vanishing clock actively works against a card whose whole point is to stick around. Undying Rage (R) — single-target graveyard recursion, narrower than the deck's other recursion tools. Undead Gladiator (B) — looting + recursion-to-hand, close miss against Phyrexian Rager for the fodder slot. Squirrel Nest (G) — a token engine, not directly on-plan.

*Sideboard-consideration cards not included:* Sandstorm (G, common) — 1-damage anti-swarm sweeper, would answer aggressive token strategies but is very low-impact. Gempalm Incinerator (R, uncommon) — cycling removal scaled to Goblins on board; playable given Mogg War Marshal's tokens are Goblins, but too conditional to beat out Ichor Slick/Solar Blast. Break Asunder (G, common) — artifact/enchantment removal with cycling; held back since no specific artifact/enchantment-heavy matchup was identified as a priority threat.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  65.2%  prod  58.8%  gap  +6.4pp  [OK]
  R  demand  34.8%  prod  35.3%  gap  -0.5pp  [OK]

Splash Check: [PASS]
  G  4 card(s), max CMC 4  sources 5/3  [OK]
```

## RESTRICTIONS COMPLIANCE
```
PASS - Commons/uncommons: no card exceeds 2 copies (verified across main+sideboard combined)
PASS - Rares/mythics: no card exceeds 1 copy
PASS - Max 5 rares/mythics total (main+SB): exactly 5 used -
    Vampiric Tutor, Entomb, Worldly Tutor, Sneak Attack, Worldgorger Dragon
    (all mainboard; sideboard is 0 rares/mythics)
PASS - All 50 cards verified present in the cube pool by exact name
PASS - Self-grill (Proposer + Challenger): no phantom inclusions, no oracle-text/
  role mismatches, no unresolved contamination - verdict "ship" (1 post-grill
  swap applied: Damping Sphere -> Assault // Battery in the sideboard)
```
