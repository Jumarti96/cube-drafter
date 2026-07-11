---
deck_name: "gu-ramp-value-midrange"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GU"
format: "40-card"
built_at: "2026-07-10T17:24:54Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
6x Forest
1x Island
1x Hinterland Harbor      GU dual, enters tapped unless you control a Forest/Island
2x Tangled Islet          GU dual, Forest+Island subtypes (Nature's Lore can fetch it), enters tapped
2x Remote Isle            U source, enters tapped, cycles when dead
1x Slippery Karst         G source, enters tapped, cycles when dead
2x Terminal Moraine       Colorless; sac to fetch a basic, double-triggers Tatyova
```

### CREATURES (11)

```
CMC  Card                    Qty   Color  Role                              Rar
  1  Birds of Paradise       x1    G      Fixing/acceleration                R
  2  Fa'adiyah Seer          x2    G      Card selection engine              C
  2  Werebear                x2    G      Mana dork -> late beater           C
  3  Man-o'-War              x2    U      Tempo bounce + body                C
  3  Terravore               x1    G      Secondary threat (lands in GYs)    U
  5  Tatyova, Benthic Druid  x2    GU     Primary payoff -- draw/life engine U
  6  Kamahl, Fist of Krosa   x1    G      Primary payoff -- finisher         M
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                    Qty   Color  Role                              Rar
  1  Crop Rotation           x2    G      Toolbox ramp, triggers landfall   U
  2  Nature's Lore           x2    G      Ramp/fixing, triggers landfall    U
  2  Counterspell            x2    U      Hard counter                      C
  2  Snap                    x2    U      Free tempo bounce                 C
```

### OTHER SPELLS (6)

```
CMC  Card                    Qty   Color  Role                              Rar
  1  Exploration             x1    G      Extra land drop per turn          R
  1  Wild Growth             x2    G      Cheap acceleration                 C
  2  Sylvan Library          x1    G      Card advantage engine              M
  3  Squirrel Nest           x2    G      Recurring token engine             U
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                     Rar
Tormod's Crypt          x1    C      Graveyard hate (reanimator/mill)            U
Damping Sphere          x1    C      Anti-ritual/storm (also taxes us mildly)    U
Circular Logic          x2    U      Scales w/ our GY; madness backup            U
Ovinize                 x1    U      Neutralizes any big creature                C
Icy Manipulator         x1    C      Repeatable tapper vs aggro                  U
Wall of Junk            x1    C      Reusable blocker vs aggro                   U
Emerald Charm           x1    G      Flexible: untap/enchant removal/anti-flying C
Break Asunder           x1    G      Artifact/enchantment removal, cycles        C
Sandstorm               x1    G      Anti-token-swarm sweeper                    C
```

## ANALYSIS

Ramp every extra land drop into a card via Tatyova, Benthic Druid, then close the game with Kamahl, Fist of Krosa animating and pumping the team (including any Squirrel Nest tokens). Exploration, Nature's Lore, Wild Growth, and Crop Rotation accelerate past curve while Sylvan Library and Fa'adiyah Seer keep the hand full of gas. Terravore rides along as a secondary beater that grows for free off cycling lands and Crop Rotation's sacrifice. Counterspell, Man-o'-War, and Snap give just enough GU tempo to protect the plan.

**Sub-archetype chosen (of 3 offered):** GU Ramp/Value Midrange -- the best-supported of the three Lands-Matter paths in this pool (Tatyova had 8 direct support cards, Kamahl 7, versus a much thinner ~6-8 real enablers for a dedicated Terravore-graveyard plan once generic reanimator noise is stripped out). Terravore rides along here as a bonus beater, not the plan.

**Macro-Archetype: Midrange. Projected Avg MV: 2.36** (from the mana audit, after the Tatyova/Krosan Restorer swap below).

**Slot allocation:**
- Lands: 15 (37.5% of N=40) -- a ramp shell can run leaner than the 38-42% Midrange baseline because Nature's Lore/Crop Rotation/Terminal Moraine functionally replace land drops, and Fa'adiyah Seer/Sylvan Library dig for the lands you still need.
  - Modifiers: baseline 16 (40%), -0 cantrips (none in pool), -1 for dorks/rocks (Birds of Paradise + 2x Wild Growth + 2x Werebear = 5 cheap MV<=2 mana sources, -0.5 per 2 ~= -1), -0 MDFC (none exist in this cube). Final: 15.
- Interaction: 6 (24% of 25 nonland) -- within the 20-30% Midrange band; light GU tempo (Counterspell/Man-o'-War/Snap) protects the ramp plan without crowding out payoffs.
- Threats/Payoffs + Engine (absorbed): 19 (76% of 25 nonland) -- well above the raw 30-40% Midrange guidance, but per the skill's own Midrange rule, Engine/Infrastructure has no separate budget and is expected to be absorbed into this bucket. A ramp-centric build inherently pushes more cards into this combined bucket (11 ramp/infra + 8 true payoffs at 2x Tatyova); isolating "pure payoffs" alone would read as 32% (Tatyova x2, Kamahl, Squirrel Nest x2, Terravore, Sylvan Library = 8/25).

**Pip demand and mana base:** 23 green pips vs. 10 blue pips across core-color cards (69.7% / 30.3%, after the 2nd Tatyova added a blue pip). Sources: 10 green (Hinterland Harbor, Tangled Islet x2, Slippery Karst, 6x Forest), 6 blue (Hinterland Harbor, Tangled Islet x2, Remote Isle x2, Island) out of 15 total lands. GU fixing in this cube is genuinely thin -- only 3 true GU duals exist in the whole pool (Hinterland Harbor + 2x Tangled Islet), and this list runs all of them.

**Self-grill outcome:** The Challenger agent flagged three real issues, all fixed in this final list: (1) Mishra's Factory contributed zero colored mana in an already U-light base -- swapped for a 2nd Remote Isle (U sources 5->6, still triggers Tatyova, still a land). (2) Ovinomancer's sideboard role ("anti-big-creature") required bouncing 3 basics, risky with only 7 basics in a 15-land base -- swapped for Ovinize, a clean 0/1-and-no-abilities answer with no drawback. (3) Circular Logic's stated sideboard rationale ("stronger vs graveyard decks") was corrected -- it scales off our own graveyard, not the opponent's; it's really a self-mill-synergy counter, not graveyard hate. The Challenger's claim that the audit's G-pip count looked wrong was independently re-verified against the ground-truth mana_cost fields and confirmed correct.

**Post-grill refinement:** Tatyova, Benthic Druid was bumped from 1 copy to 2. She is uncommon rarity (not rare/mythic), so the pool rules already allowed a 2nd copy at zero cost to the 5-rare/mythic budget -- and as the deck's single most important payoff (the entire ramp package feeds her), running only 1 of a legal 2 was leaving consistency on the table for free. Krosan Restorer (the weakest ramp piece; its Threshold half rarely came online) was cut to make room. The mana audit was re-run afterward and remained PASS, with color balance actually tightening slightly since the 2nd Tatyova adds a blue pip.

**Key interaction to know:** Tangled Islet is typed "Land -- Forest Island," so Nature's Lore (searches for a Forest) can fetch it as a second-copy-equivalent dual, not just a basic Forest.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (already spent on Kamahl, Exploration, Birds of Paradise, Hinterland Harbor, Sylvan Library):
- **Arcanis the Omnipotent** (rare, taps to draw three cards) -- excellent grindy top-end, would have been the 6th rare pick if the budget allowed.
- **Mystic Remora / Mystical Tutor / Worldly Tutor** (rares) -- strong but more at home in a dedicated combo/control shell than this ramp-midrange plan.
- **Force of Will** (mythic) -- too narrow/reactive for a proactive ramp deck without a deep blue card-quality suite to pitch.
- **Gemstone Mine** (rare land, any-color fixing) -- would have helped the thin U base, but the rare slot was better spent elsewhere.

**Uncommons/commons a tier below the chosen includes:**
- **Elvish Aberration** (common, taps for GGG + Forestcycling) -- a fine top-end mana sink/cycler, cut for curve reasons (already have enough 6-drops in Kamahl).
- **Elvish Spirit Guide** (uncommon, one-shot ritual) -- redundant with the dedicated dork/ramp package already at full count.
- **Jolrael, Mwonvuli Recluse** (rare -- didn't make the cut for budget reasons, but if a swap is wanted later, check her wolf-token synergy with Squirrel Nest).
- **2nd copy of Terravore** -- the pool has it; cutting Fa'adiyah Seer for it would make Terravore a true co-equal secondary payoff instead of a 1-of, at the cost of some card selection.

**Sideboard-consideration cards not included:**
- **Crawlspace / Arboria** (rares -- excluded from SB to preserve the 5-rare cap) -- both are strong anti-aggro stax pieces if the cap is ever renegotiated.
- **Leaden Fists** (common flash combat trick) -- solid flex slot if more proactive interaction is wanted over pure answers.
- **Deep Analysis / Fact or Fiction** (common/uncommon card advantage) -- considered as SB card-advantage upgrades vs. control mirrors, but the maindeck's Sylvan Library/Tatyova package was judged sufficient.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.36   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  69.7%  prod  66.7%  gap  +3.0pp  [OK]
  U  demand  30.3%  prod  40.0%  gap  -9.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons/uncommons: all <=2 copies -- PASS
Rares/mythics: all <=1 copy each -- PASS
Max 5 rares/mythics total across mainboard+sideboard: exactly 5 (Kamahl, Exploration, Birds of Paradise, Hinterland Harbor, Sylvan Library) -- PASS
Sideboard: 0 additional rares/mythics (budget fully allocated to mainboard) -- PASS
All 40+10 cards confirmed to exist in the cube's working pool by exact name -- PASS
```
