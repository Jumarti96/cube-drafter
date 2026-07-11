---
deck_name: "ug-lands-matter-balanced-hybrid"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GU"
format: "40-card"
built_at: "2026-07-10T19:54:06Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
7x Forest
2x Island
1x Hinterland Harbor      GU dual, enters tapped unless you control a Forest/Island
2x Tangled Islet          GU dual, enters tapped
1x Remote Isle            U source, cycles when dead
1x Slippery Karst         G source, cycles when dead
2x Terminal Moraine       Colorless; sac to fetch a basic -- double duty: fixes + feeds Terravore
```

### CREATURES (11)

```
CMC  Card                    Qty   Color  Role                                Rar
  1  Birds of Paradise       x1    G      Fixing/acceleration                 R
  2  Fa'adiyah Seer          x2    G      One-way land filter (no choice)     C
  2  Werebear                x1    G      Mana dork -> late beater            C
  3  Man-o'-War              x2    U      Tempo bounce + body                 C
  3  Terravore               x2    G      Co-equal payoff (lands in all GYs)  U
  5  Tatyova, Benthic Druid  x2    GU     Co-equal payoff -- draw/life engine U
  6  Kamahl, Fist of Krosa   x1    G      Co-equal payoff -- finisher         M
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                    Qty   Color  Role                                Rar
  1  Crop Rotation           x2    G      Ramp + direct Terravore fuel        U
  2  Nature's Lore           x2    G      Ramp, triggers landfall             U
  2  Counterspell            x2    U      Hard counter                        C
  2  Snap                    x2    U      Free tempo bounce                   C
```

### OTHER SPELLS (5)

```
CMC  Card                    Qty   Color  Role                                Rar
  1  Exploration             x1    G      Extra land drop per turn            R
  1  Wild Growth             x1    G      Cheap acceleration                  C
  2  Sylvan Library          x1    G      Card advantage engine               M
  3  Squirrel Nest           x2    G      Co-equal payoff -- token engine     U
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                     Rar
Tormod's Crypt          x1    C      Graveyard hate (also shrinks our own Terravore -- situational) U
Damping Sphere          x1    C      Anti-ritual/storm/multi-mana                U
Circular Logic          x2    U      Tax scales with OUR graveyard -- harder for opponent to beat late U
Icy Manipulator         x1    C      Repeatable tapper vs aggro/big threats      U
Wall of Junk            x1    C      Reusable blocker vs aggro                   U
Emerald Charm           x1    G      Flexible: untap/enchant removal/anti-flying C
Break Asunder           x1    G      Artifact/enchantment removal, cycles        C
Sandstorm               x1    G      Anti-token-swarm sweeper                    C
Floodgate               x1    U      Situational anti-ground-swarm sweeper       U
```

## ANALYSIS

All four Lands-Matter payoffs run as co-equal pieces of one shared engine: every land drop from Exploration, Nature's Lore, Crop Rotation, and Terminal Moraine simultaneously triggers Tatyova's draw, feeds Kamahl's mana, gives Squirrel Nest another target, and (via Crop Rotation/Terminal Moraine's sacrifice) fuels Terravore's graveyard count. No single payoff gets a dedicated support package -- instead, one pool of ramp/fixing/card-selection cashes in on whichever payoff draws well that game.

**Sub-archetype chosen (of 3 offered):** GU Balanced Hybrid -- deliberately runs all four Lands-Matter payoffs (Tatyova x2, Kamahl x1, Terravore x2, Squirrel Nest x2) as co-equal pieces rather than committing to one. Both self-grill agents confirmed this is real, functioning shared plumbing rather than four unrelated engines bolted together -- every land-drop effect triggers 2-3 payoffs at once -- but it's genuinely more diffuse than either sibling build: no single payoff gets dedicated backup beyond the shared ramp/fixing pool.

**Macro-Archetype: Midrange. Projected Avg MV: 2.46** (highest of the three builds, reflecting the fuller top end).

**Slot allocation:**
- Lands: 16 (40% of N=40) -- corrected up from an initial 15 (37.5%) after the Challenger flagged that count as sitting just under the Midrange 38% floor and under the audit's own recommendation. Cut 1x Ovinize (the weakest interaction card -- a one-turn debuff mischaracterized as an "answer," not real removal) to fund the 16th land.
- Interaction: 6 (25% of 24 nonland) -- within the 20-30% Midrange band (Counterspell, Man-o'-War, Snap). Note: this is all bounce/counter -- no permanent removal in the mainboard; enchantment/artifact answers live only in the sideboard.
- Threats/Payoffs + Engine (absorbed): 18 (75% of 24 nonland) -- well above the raw 30-40% Midrange guidance, but as with the ramp-value build, Engine/Infrastructure has no separate Midrange budget and is expected to fold into this bucket. Here it's even more concentrated than usual since 4 payoffs (7 slots) share 11 generic ramp/support slots with zero cards dedicated to any single payoff.

**Pip demand and mana base:** 23 green pips vs. 11 blue pips (69.7%/30.3% after the Ovinize cut) -- nearly identical to the ramp-value build's split, since the payoff mix draws from the same green-heavy core. Sources: 11 green, 6 blue out of 16 lands.

**Self-grill outcome:** Both agents independently re-verified the audit's pip counts and land production exactly (G23/U11 confirmed, avg CMC 2.46 confirmed). Real issues found and fixed: (1) Land count raised 15->16 (see above). (2) Circular Logic's sideboard role was corrected -- it does NOT get cheaper for us to cast; it makes the tax the opponent pays to push a spell through scale with our own graveyard, so it gets harder for them to beat over time. (3) Fa'adiyah Seer's role was corrected from "card selection" to "one-way land filter" -- its draw-then-discard-if-nonland ability offers no player choice.

**A structural honesty note from both agents:** Terravore is the thinnest-supported of the four payoffs here -- only Crop Rotation (x2) and Terminal Moraine (x2) reliably put lands in graveyards; Nature's Lore and plain land drops don't feed it at all. Expect Terravore to usually land as a solid 3/4-4/5 trampler rather than the house-sized threat it becomes in a deck built specifically around graveyard density (like the sibling Terravore Tempo build). Kamahl's GGG team-pump mode is also a mid-to-late-game mode more often than an early haymaker, given only 11 of 16 lands produce green. Neither breaks the deck -- both payoffs still function as solid midrange pieces even in their "fallback" modes.

**How this compares to its two siblings:** This is intentionally the "jack of all trades" build. The Ramp/Value Midrange deck (gu-ramp-value-midrange) plays Tatyova/Kamahl denser with dedicated ramp; the Terravore Tempo deck (gu-terravore-tempo) plays a much leaner, faster shell built entirely around graveyard density. This hybrid trades that focus for resilience -- losing any one payoff to removal doesn't collapse the plan, since the other three still run off the same shared land-engine.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (already spent on Kamahl, Exploration, Birds of Paradise, Hinterland Harbor, Sylvan Library):
- **Arcanis the Omnipotent** (rare) -- excellent grindy top-end, would have been the 6th pick if the budget allowed.
- **Jolrael, Mwonvuli Recluse** (rare) -- strong token-engine synergy with the deck's card-draw density, but the budget was already spent on more central payoffs/fixing.
- **Vexing Sphinx** (rare) -- a great aggressive flyer, but didn't fit this build's more controlling shell as well as it fit the tempo sibling.

**Uncommons/commons a tier below the chosen includes:**
- **Ovinize** -- cut this pass to make room for the 16th land; still a fine cheap combat trick if a swap is wanted later.
- **Elvish Aberration** (common) -- a fine top-end mana sink/cycler, cut for curve reasons.
- **Cloud of Faeries** (common) -- the flying tempo body used in the Terravore Tempo build; considered here too but the interaction suite was judged sufficient at 6 cards.

**Sideboard-consideration cards not included:**
- **Primal Boost** (common cycling pump) -- a flexible finisher/GY-fuel card used in the Terravore build; passed over here since this deck's payoffs don't need the extra combat push as much.
- **Ovinomancer** (uncommon) -- a bigger-creature answer, but its "bounce 3 basics" cost is a real risk with only 9 basics in this manabase.
- **2nd copy of Sandstorm or Floodgate** -- considered given anti-swarm redundancy, but a single copy of each was judged enough coverage.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.46   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  69.7%  prod  68.8%  gap  +0.9pp  [OK]
  U  demand  30.3%  prod  37.5%  gap  -7.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons/uncommons: all <=2 copies -- PASS
Rares/mythics: all <=1 copy each -- PASS
Max 5 rares/mythics total across mainboard+sideboard: exactly 5 (Kamahl, Exploration, Birds of Paradise, Hinterland Harbor, Sylvan Library) -- PASS
Sideboard: 0 additional rares/mythics -- PASS
All 40+10 cards confirmed to exist in the cube's working pool by exact name -- PASS
```
