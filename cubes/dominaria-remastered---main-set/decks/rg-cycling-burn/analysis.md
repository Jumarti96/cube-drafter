---
deck_name: "rg-cycling-burn"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-07-10T00:20:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
Qty  Card                Note
2x   Wooded Ridgeline    RG dual, enters tapped
2x   Smoldering Crater   R cycling land, enters tapped
2x   Slippery Karst      G cycling land, enters tapped
1x   Mishra's Factory    Colorless manland, resilient threat
6x   Mountain
2x   Forest
```

### CREATURES (11)
```
CMC  Card                       Qty   Color  Role                          Rar
  1  Grim Lavamancer            x1    R      Graveyard payoff / reach     R
  2  Jolrael, Mwonvuli Recluse  x1    G      Card-advantage engine        R
  1  Birds of Paradise         x1    G      Ramp / fixing                 R
  3  Gempalm Incinerator       x2    R      Cycler / conditional removal  U
  4  Flametongue Kavu          x2    R      Removal on a body             U
  2  Werebear                  x2    G      Mana dork / Threshold beater  C
  2  Radha, Heir to Keld       x1    GR     Fixing / aggressive body      U
  2  Mogg War Marshal          x1    R      Goblin fodder / token engine  C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card              Qty   Color  Role                     Rar
  1  Spark Spray       x2    R      Cycler / early reach     C
  4  Solar Blast       x2    R      Cycler / mid removal     C
  1  Chain Lightning   x2    R      Efficient burn           C
  6  Fireblast         x1    R      Free reach / finisher    U
  3  Primal Boost      x2    G      Cycler / combat trick    C
```

### OTHER SPELLS (5)
```
CMC  Card              Qty   Color  Role                              Rar
  2  Lightning Rift    x2    R      Keystone — cycle-trigger burn     U
  2  Invigorating Boon x2    G      Keystone — cycle-trigger counters U
  3  Sulfuric Vortex   x1    R      Burn engine / anti-lifegain       R
```

## SIDEBOARD (10)
```
Card              Qty   Color  Role / When to board in                          Rar
Tormod's Crypt    x1    C      Graveyard hate — vs recursion/Threshold decks    U
Break Asunder     x1    G      Artifact/enchantment answer, cycles             C
Slice and Dice    x1    R      Anti-go-wide sweeper, cycles                    U
Lull              x1    G      One-shot fog, cycles — vs alpha-strike aggro    C
Goblin Medics     x1    R      Repeatable 1-dmg ping — vs X/1 token swarms     C
Icy Manipulator   x1    C      Tempo lock — vs must-answer big threats         U
Emerald Charm     x1    G      Flexible modal — untap/enchant removal/anti-fly C
Crawlspace        x1    C      Caps attackers at 2 — vs wide aggro             R
Undying Rage      x1    R      Resilient aura, returns to hand — vs control    C
Wild Dogs         x1    G      Early blocker, cycles away when dead            C
```

## ANALYSIS

**Color correction.** The archetype brief this deck was built from claimed "WR" as the color identity, but that was wrong: Invigorating Boon's oracle text confirms it is Green ("Whenever a player cycles a card, you may put a +1/+1 counter on target creature"), not White or Red. Cross-checking every suggested core card against its actual `colors` field showed the true keystone pair — Lightning Rift (R) and Invigorating Boon (G) — sits in Gruul, and Gruul also holds the deepest well of on-color cyclers in the pool (6 Green, 5 Red, versus 3 White, 3 Black, 2 Blue). The deck was built RG on that basis, confirmed with the user before construction.

**Trigger density.** Excluding the two keystones, the mainboard runs 12 genuine `Cycling {cost}` cards: Spark Spray x2, Solar Blast x2, Gempalm Incinerator x2, Primal Boost x2, Smoldering Crater x2, Slippery Karst x2. That's 30% of the 40-card deck able to fire Lightning Rift and/or Invigorating Boon on demand, and cycling triggers off *either* player's cycle, so Rift/Boon are live even on the draw before your own hand needs to cycle.

**Downstream synergy chain.** Every cycle discards a card to the graveyard, which does double duty: it feeds Grim Lavamancer's "exile two cards from your graveyard" activation, and pushes Werebear toward its Threshold flip (+3/+3 at 7+ cards in graveyard) far faster than a normal deck would hit that number. Cycling is also a genuine draw step, so it counts toward Jolrael's "second card drawn this turn" trigger — with 12 cyclers plus 2 hardcast draw spells in the 40, Jolrael reliably converts a turn's second cycle into a 2/2 Cat token from the midgame on.

**Post-grill fix.** The self-grill Challenger flagged that Gempalm Incinerator's cycle-triggered removal ("X damage where X = Goblins on the battlefield") was decorative with zero other Goblins in the original 40 — cycling it only ever dealt 0. Penumbra Bobcat (a body with no cycling tie and no engine interaction) was cut for Mogg War Marshal, whose "enters or dies, create a 1/1 Goblin" ability gives Gempalm Incinerator a real X to work with while staying a common (no rarity-cap cost). The same swap was mirrored in the sideboard: Damping Sphere was cut for Goblin Medics, since this cube's dominant clusters (Tribal/Kindred 17.9%, Graveyard 16.7%, Enchantress 12.5%, Aristocrats/Sacrifice 10.3%, Artifacts 10.0%) don't include a storm/ritual shell for Damping Sphere to tax, whereas Goblin Medics' repeatable 1-damage ping is a real answer to the X/1 token swarms that Aristocrats/Tokens decks actually run.

**Self-damage risk.** Sulfuric Vortex (2 damage to *each* player's upkeep) and Fireblast (sacrifice two Mountains for 4 free damage) both cost the pilot real life. This is a deliberate racing plan, not an oversight — the deck's own burn output should close games before the Vortex clock matters, and Vortex's lifegain-shutoff clause is a genuine plus against Renewed Faith mirrors and other lifegain strategies in the pool. Sequence Fireblast for the kill turn rather than early tempo plays when life total is a concern.

**Mana base.** 15 lands (of which 4 are cycling lands that are never truly dead draws) plus Birds of Paradise as a pseudo-land support a curve topping at CMC 4 (plus one CMC-6 Fireblast that's almost always cast for free). R:G pip demand is 67.9%/32.1%; land production sits at 66.7%/40.0% R/G, comfortably covering both colors with a slight excess on Green as insurance for Werebear/Invigorating Boon's double-G-adjacent costs.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (Grim Lavamancer, Jolrael, Birds of Paradise, Sulfuric Vortex, and sideboard Crawlspace filled all 5 slots):
- Sylvan Library (mythic, G) — premium card-advantage engine; cut purely on budget, not power level. First card back in if the cap were raised.
- Siege-Gang Commander (rare, R) — genuine Goblin-tribal synergy with Mogg War Marshal, was the closest competitor to Sulfuric Vortex/Crawlspace for the last rare slot.
- Worldly Tutor (rare, G) — would tutor for Jolrael, but redundant once Rift/Boon already run at 2 copies each.
- Exploration (rare, G) — generic extra-land ramp, no cycling tie.
- Decimate (rare, GR) — strong 4-mode removal, redundant with the existing burn/removal suite.
- Kamahl, Fist of Krosa (mythic, G) / Shivan Dragon (rare, R) — generic top-end finishers, outclassed here by Flametongue Kavu and the burn plan's existing reach.
- Gemstone Mine (rare, colorless land) — any-color fixing unnecessary in a clean 2-color manabase.

**Uncommons a tier below the chosen includes:**
- Squirrel Nest (G) — token engine, too slow for this curve.
- Deadapult (R) — repeatable damage engine, but needs a Zombie sub-theme this deck doesn't run.
- Storm Entity (R) — scales with same-turn spell count; this isn't a storm-density shell.
- Nature's Lore (G) — ramp, redundant with Birds of Paradise/Radha.
- Damping Sphere (C, uncommon) — cut during the grill for lacking a real target in this cube's metagame (see above).

**Sideboard-consideration cards that didn't make the 10:**
- Macetail Hystrodon (R, common) — the one on-color true cycler not in the 50-card build; a 7-mana hardcast beater or a 3-mana cycle. Good late-game SB swap vs. control if games go long.
- Elvish Aberration (G, common) — Forestcycling fixes mana but is a weak standalone body; low priority.
- Squirrel Nest / Seton's Desire (G) — slower value pieces, deprioritized against the observed aggressive/tribal metagame.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.44   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  32.1%  prod  40.0%  gap  -7.9pp  [OK]
  R  demand  67.9%  prod  66.7%  gap  +1.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons/uncommons max 2 copies each ............. PASS
Rares/mythics max 1 copy each .................... PASS
Max 5 rares/mythics total (main + sideboard) ..... PASS (5/5 — Grim Lavamancer, Jolrael Mwonvuli Recluse, Birds of Paradise, Sulfuric Vortex, Crawlspace)
```
