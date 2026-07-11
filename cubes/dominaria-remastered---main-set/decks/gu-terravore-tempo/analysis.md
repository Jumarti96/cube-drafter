---
deck_name: "gu-terravore-tempo"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GU"
format: "40-card"
built_at: "2026-07-10T17:47:25Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
4x Forest
2x Island
1x Hinterland Harbor      GU dual, enters tapped unless you control a Forest/Island
2x Tangled Islet          GU dual, Forest+Island subtypes, enters tapped
2x Remote Isle            U source; cycles -- direct Terravore fuel
2x Slippery Karst         G source; cycles -- direct Terravore fuel
2x Terminal Moraine       Colorless; sac to fetch a basic -- direct Terravore fuel
```

### CREATURES (14)

```
CMC  Card                     Qty   Color  Role                                Rar
  1  Wild Dogs                x1    G      Aggressive 1-drop; cycles for GY fuel C
  2  Aquamoeba                 x2    U      Flex attacker/blocker              C
  2  Cloud of Faeries          x1    U      Flying tempo body; untaps 2 lands  C
  2  Fa'adiyah Seer            x2    G      Card selection/consistency         C
  2  Werebear                  x2    G      Mana dork -> late beater           C
  2  Jolrael, Mwonvuli Recluse x1    G      Token engine (2nd draw/turn)       R
  3  Terravore                 x2    G      Primary payoff (lands in all GYs)  U
  3  Vexing Sphinx             x1    U      Flying threat + forced discard     R
  3  Man-o'-War                x2    U      Tempo bounce + body                C
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                    Qty   Color  Role                                Rar
  1  Crop Rotation            x2    G      Direct Terravore fuel (sac cost)   U
  1  Emerald Charm            x1    G      Flexible 1-mana interaction        C
  2  Snap                     x2    U      Free tempo bounce                  C
  2  Counterspell             x2    U      Hard counter                       C
  2  Ovinize                  x1    U      Cheap universal answer             C
  3  Call of the Herd         x1    G      2-for-1 beater (token + flashback) U
```

### OTHER SPELLS (2)

```
CMC  Card                    Qty   Color  Role                                Rar
  1  Invigorating Boon        x1    G      Rewards any cycling w/ +1/+1       U
  3  Squirrel Nest            x1    G      Recurring token engine             U
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                     Rar
Tormod's Crypt          x1    C      Anti-reanimator (also shrinks our own Terravore -- use with awareness) U
Damping Sphere          x1    C      Anti-ritual/storm/multi-mana                U
Circular Logic          x2    U      Scales w/ our GY; madness backup            U
Icy Manipulator         x1    C      Repeatable tapper vs aggro/big threats      U
Wall of Junk            x1    C      Reusable blocker vs aggro                   U
Break Asunder           x1    G      Artifact/enchantment removal, cycles        C
Sandstorm               x1    G      Anti-token-swarm sweeper                    C
Floodgate               x1    U      Situational anti-swarm (modest here -- only ~4 true Islands) U
Primal Boost            x1    G      Finisher trick; cycles for GY fuel + Boon   C
```

## ANALYSIS

Feed lands into every graveyard on the table -- cycling lands, Terminal Moraine's sacrifice, and Crop Rotation's sac cost all convert a land directly into Terravore's power and toughness -- while cheap efficient bodies and a tight GU tempo suite (Counterspell, Man-o'-War, Snap, Ovinize) keep the board and clock in your favor. Invigorating Boon turns every cycle (yours or the opponent's) into a free +1/+1 counter, and Jolrael/Squirrel Nest convert spare card draws and lands into extra bodies.

**Sub-archetype chosen (of 3 offered):** GU Terravore Tempo-Aggro -- the riskier of the three Lands-Matter paths (only ~7 cards in the whole pool are dedicated land-to-graveyard enablers: 2x Remote Isle, 2x Slippery Karst, 2x Terminal Moraine, 2x Crop Rotation), but Terravore counts lands in all graveyards, so it also grows passively off ambient land attrition across the whole game, not just our own dedicated package.

**Macro-Archetype: Tempo. Projected Avg MV: 2.12** (curve tops out at 3 CMC -- nothing higher in the whole 40).

**Slot allocation:**
- Lands: 15 (37.5% of N=40) -- slightly above the 30-34% Tempo baseline, corrected up from an initial 14 after the Challenger flagged the original count as genuinely tight for reliably hitting turn-3 land drops (5 different 3-drops: Terravore x2, Vexing Sphinx, Call of the Herd, Squirrel Nest). 4 of the 15 lands (2x Remote Isle, 2x Slippery Karst) are cycling lands that are never a dead late-game draw.
- Interaction: 8 (32% of 25 nonland) -- within the 25-35% Tempo band (Counterspell, Man-o'-War, Snap, Ovinize, Emerald Charm).
- Threats/Payoffs: 4 (16% of 25 nonland) -- within the 10-18% Tempo band on paper (Terravore x2, Vexing Sphinx, Call of the Herd), though several "Engine" creatures (Wild Dogs, Aquamoeba) are really just cheap bodies functioning as secondary threats -- the deck plays a bit more beatdown-forward than the strict bucket labels suggest.
- Engine/Infrastructure: 13 (52% of 25 nonland) -- above the 20-30% Tempo band, but this bucket houses the entire land-to-graveyard package (Crop Rotation x2), the card-selection/consistency suite (Fa'adiyah Seer x2, Werebear x2), and the token engines (Jolrael, Squirrel Nest, Invigorating Boon) that this specific payoff plan depends on more heavily than a generic Tempo shell would.

**Self-grill outcome:** Both agents confirmed cube membership, restrictions compliance, and color identity cleanly. The Challenger's accepted fixes, applied to this final list: (1) Stonewood Invoker (dead card in a low-curve deck -- its only ability is a {7}{G} mana sink) swapped for Cloud of Faeries (flying body + land untap that protects counterspell mana + cycles for GY fuel). (2) Added the 2nd Crop Rotation -- with only ~7 real dedicated land-to-graveyard enablers in the whole pool, running just 1 of 2 legal copies of the most direct one was an inconsistency. (3) Wild Dogs trimmed from 2 copies to 1 -- its upkeep trigger can hand the creature to the opponent if they're ever strictly ahead on life, a real drawback the original role text glossed over. (4) Land count raised 14->15 to reduce the risk of missing the turn-3 land drop this curve depends on; audit moved from WARN to PASS. (5) Fa'adiyah Seer's role was corrected -- it can only discard non-lands, so despite a "self-mill" framing it contributes zero direct Terravore fuel; it's a pure consistency piece. (6) Floodgate's sideboard role was corrected -- it scales off true Island-subtype count, and this manabase only has ~4 (2 Island + 2 Tangled Islet), so it's a modest, situational include rather than a strong "blue-heavy" sweeper.

**Key interaction to know:** Invigorating Boon triggers off any player's cycling, not just yours -- cycling lands you draw late still generate value even off an opponent's cycling activation, and every cycle (either side) is simultaneously Terravore fuel and a free counter.

**A live risk to play around:** Tormod's Crypt in the sideboard cuts both ways -- exiling a graveyard (yours or the opponent's) removes lands from the global count Terravore reads, shrinking your own payoff even while denying reanimation targets. Board it in only when the anti-reanimator upside clearly outweighs that cost.

### Cards Considered but Excluded

**Rares/mythics not used** (only 3 of the 5-card cap spent: Hinterland Harbor, Vexing Sphinx, Jolrael -- 2 slots deliberately left unspent to keep the curve honest and preserve sideboard flexibility):
- **Birds of Paradise** (rare) -- solid accelerant, but this build's curve tops at 3 and doesn't need the smoothing as much as the ramp-value build did.
- **Kamahl, Fist of Krosa / Sylvan Library** (mythic) -- both excellent, but a 6-drop finisher and a pure value engine work against a low-curve tempo plan's tight mana math.
- **Gemstone Mine / Maze of Ith** (rares) -- strong utility lands, left out to avoid diluting the cycling-land package's consistency.

**Uncommons/commons a tier below the chosen includes:**
- **Stonewood Invoker** -- cut this pass; a {7}{G}: +5/+5 mana sink is dead weight in a deck that never wants to spend 7 mana.
- **Obsessive Search** -- cut to make room for the 2nd Crop Rotation; still a fine cheap cantrip/madness piece if a swap is wanted later.
- **Penumbra Bobcat** (common, dies into a 2/1 token) -- a reasonable 2-for-1 body, considered as an alternate to Aquamoeba.
- **Horseshoe Crab** (common, untaps itself) -- a resilient blocker, passed over for more proactive options.

**Sideboard-consideration cards not included:**
- **Leaden Fists** (common flash combat trick/pump aura) -- a flex slot if more combat tricks are wanted over pure answers.
- **Hermetic Study** (common aura, gives a creature a ping ability) -- minor value engine, didn't make the cut over the current 10.
- **2nd copy of Floodgate** -- considered given how situational it is, but a single copy was judged enough given its modest ceiling here.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  54.8%  prod  60.0%  gap  -5.2pp  [OK]
  U  demand  45.2%  prod  46.7%  gap  -1.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons/uncommons: all <=2 copies -- PASS
Rares/mythics: all <=1 copy each -- PASS
Max 5 rares/mythics total across mainboard+sideboard: 3 used (Hinterland Harbor, Vexing Sphinx, Jolrael) -- 2 slots unspent -- PASS
Sideboard: 0 additional rares/mythics -- PASS
All 40+10 cards confirmed to exist in the cube's working pool by exact name -- PASS
```
