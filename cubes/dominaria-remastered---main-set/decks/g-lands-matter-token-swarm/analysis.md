---
deck_name: "g-lands-matter-token-swarm"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "G"
format: "40-card"
built_at: "2026-07-10T17:21:31Z"
mana_audit_status: "WARN"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
14x Forest
 2x Mishra's Factory
```

### CREATURES (10)
```
CMC  Card                     Qty  Color  Role                    Rar
  2  Fa'adiyah Seer           x2   G      Card filter + grave fill  C
  3  Penumbra Bobcat          x2   G      Dies into 2/1 token      C
  3  Terravore                x2   G      Grave-scaled beater       U
  3  Krosan Restorer          x1   G      Land untapper             C
  6  Kamahl, Fist of Krosa    x1   G      Finisher: animate + pump  M
  6  Symbiotic Beast          x1   G      4 insects on death        C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                     Qty  Color  Role                    Rar
  1  Crop Rotation            x1   G      Land tutor, instant       U
  1  Emerald Charm            x2   G      Enchant removal / untap   C
  2  Nature's Lore            x2   G      Forest ramp               U
  3  Call of the Herd         x2   G      3/3 token + flashback     U
  3  Primal Boost             x1   G      Pump + cycling            C
  4  Saproling Symbiosis      x1   G      Mass token payoff         R
```

### OTHER SPELLS (5)
```
CMC  Card                     Qty  Color  Role                    Rar
  1  Exploration              x1   G      Extra land drop engine    R
  1  Wild Growth              x2   G      Land enchant ramp         C
  2  Sylvan Library           x1   G      Card selection engine     M
  3  Squirrel Nest            x2   G      Engine: land -> squirrel  U
```

## SIDEBOARD (10)
```
Card                     Qty  Color  Role / When to board in     Rar
Tormod's Crypt           x2   C      Graveyard exile; vs reanimator  U
Sandstorm                x2   G      1 dmg to attackers; vs aggro    C
Break Asunder            x2   G      Artifact/enchant kill; cycling  C
Lull                     x2   G      Fog + cycling; vs aggro races   C
Deadwood Treefolk        x1   G      Recursion; vs removal-heavy     U
Elvish Spirit Guide      x1   G      Exile for G; race fast decks    U
```

## ANALYSIS

Macro-Archetype: Midrange | Projected Avg MV: 2.6

Strategy: Ramp to 3 mana on turn 2, deploy Squirrel Nest on turn 3, then convert every untap step into a 1/1 Squirrel. Krosan Restorer doubles Nest output (untap the enchanted land). When the board hits 5+ creatures, Saproling Symbiosis doubles it. Kamahl's overrun (+3/+3 + trample to all) closes the game.

Key interactions:
- Exploration + Nature's Lore: play 2+ Forests per turn, accelerating to 6 mana by turn 4
- Fa'adiyah Seer to Krosan Restorer: Seer fills graveyard for threshold (7 cards), Restorer untaps 3 lands for 3 extra Squirrels per cycle
- Crop Rotation to Mishra's Factory: instant-speed manland at end of opponent's turn, then animate and swing
- Saproling Symbiosis with flash (pay 2 more): combat blowout on blocking step, doubling blockers or creating lethal attackers
- Symbiotic Beast + Saproling Symbiosis: 4/4 dies into 4 insects; Symbiosis counts all creatures you control

Cycling payoffs (5 cycling cards across main + side):
  Primal Boost, Lull x2, Break Asunder x2 -- each cycles for 2, filling graveyard for threshold while digging.

Matchup notes:
- Vs aggro: board Lull + Sandstorm; race with Elvish Spirit Guide
- Vs control: board Deadwood Treefolk (recursion); cycle dead cards
- Vs graveyard: board Tormod's Crypt x2 (exile their yard)
- Vs artifacts/enchantments: board Break Asunder x2

### Cards Considered but Excluded

Rares/mythics cut (5-card limit):
- Jolrael, Mwonvuli Recluse (rare, CMC 2): creates 2/2 Cats on second draw. Cut because the deck lacks consistent multi-draw to trigger it reliably. Fa'adiyah Seer + Sylvan Library could enable it, but it competes with Saproling Symbiosis for the rare slot and Saproling is the higher-impact payoff.
- Birds of Paradise (rare, CMC 1): flying mana dork. Cut because Wild Growth + Nature's Lore are more durable ramp options and don't consume a rare slot.
- Forgotten Ancient (rare, CMC 4): grows from spells and moves counters. Cut because this deck plays mostly permanents, not spells.
- Crawlspace (rare, CMC 3): limits attackers to 2 per combat. Cut because this deck wants to go wide itself -- anti-go-wide defense is a non-bo.
- Nut Collector (mythic, CMC 6): creates squirrels each upkeep, pumps squirrels at threshold. Cut because Kamahl fills the same CMC slot with team pump and trample instead of squirrel-only +2/+2.

Uncommons cut (strong fits, tier below includes):
- Invigorating Boon (CMC 2): +1/+1 counters on cycling. Cut because cycling count dropped from 6 to 5 after revisions, and it costs an uncommon slot that Nature's Lore and Call of the Herd already fill at 2 copies each.
- Thran Golem (CMC 5): gets flying/first strike/trample when enchanted. Cut because the deck's auras (Wild Growth, Squirrel Nest) enchant lands, not creatures -- Golem never triggers.
- Elvish Aberration (CMC 6): taps for GGG, forestcycling. Cut because Symbiotic Beast at the same CMC provides more immediate board impact (4 tokens on death vs mana ability).

Sideboard considerations:
- Seton's Desire (CMC 3): +2/+2 aura with threshold lure. Decent for pushing damage through stalled boards, but Primal Boost does the same job at instant speed with cycling.
- Damping Sphere (CMC 2): anti-storm, anti-big-mana. Cut because the cube has only 2 storm cards -- a dead draw in 95% of matchups.
- Hermetic Study (CMC 2): enchant land for ping damage. Cut because it requires blue splash and doesn't advance the token plan.

## MANA AUDIT: WARN
```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.58   Ramp cards: 0
Color Balance (core):  [WARN]
  G  demand 100.0%  prod 87.5%  gap +12.5pp  [WARN]
Note: This WARN is a false positive. The deck is mono-G with 14 Forests + 2 Mishra's Factory. All 29 pips are G. 14 green sources in 40 cards exceeds Karsten thresholds. Mishra's Factory produces colorless which still pays for cycling costs, flashback, and Kamahl's pump. 6 ramp cards further ensure consistency.
```

## RESTRICTIONS COMPLIANCE
```
Commons: max 2 copies        PASS
Uncommons: max 2 copies      PASS
Rares: max 1 copy            PASS
Mythics: max 1 copy          PASS
Rares+Mythics total <= 5     PASS (4/5)
All cards in cube pool       PASS
```
