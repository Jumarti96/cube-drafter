---
deck_name: "rg-vivid-prismatic-big-mana"
cube_id: "ecl"
cube_slug: "ecl"
colors: "RG"
format: "40-card"
built_at: "2026-08-10T20:27:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
  8x Forest
  6x Mountain
  2x Evolving Wilds   fixing
  2x Wooded Ridgeline   RG dual
```

### CREATURES (14)
```
CMC  Card                       Qty   Color  Role                                                 Rar
  2  Bloom Tender               x1    G      Engine/Infra — colour-count-to-mana converter        M
  2  Explosive Prodigy          x2    R      Interaction — scaling removal on a red body          U
  3  Elder Auntie               x2    R      Engine/Infra — permanent colour-adder (black token)… C
  3  Gangly Stompling           x2    RG     Threat — efficient trampler; both core colours on o… C
  4  Squawkroaster              x2    R      Threat — Vivid clock (double strike)                 U
  6  Prismabasher               x2    G      Threat — finisher / team pump                        U
  7  Aurora Awakener            x1    G      Threat — top end / refuel                            M
  7  Wildvine Pummeler          x2    G      Threat — discounted oversized body                   C
```
### INSTANTS & SORCERIES (4)
```
CMC  Card                       Qty   Color  Role                                                 Rar
  2  Sear                       x2    R      Interaction — removal                                U
  3  Unforgiving Aim            x1    G      Interaction — modal answer (flyers / enchantments /… C
  4  Feed the Flames            x1    R      Interaction — removal (exile)                        C
```
### OTHER SPELLS (4)
```
CMC  Card                       Qty   Color  Role                                                 Rar
  2  Puca's Eye                 x1    C      Engine/Infra — colour-adder + cantrip                U
  2  Shimmerwilds Growth        x2    G      Engine/Infra — permanent colour-adder on a land + g… U
  4  Prismatic Undercurrents    x1    G      Engine/Infra — card advantage + extra land drop      U
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                  Rar
Blossoming Defense          x2    G      Protection — vs. targeted-removal decks threatening Bloom Tender or… U
Giantfall                   x1    R      Artifact removal / fight — vs. artifact decks; the fight mode is li… U
Chomping Changeling         x2    G      Artifact/enchantment answer on a body — vs. the 11 artifacts / 21 e… U
Dawn's Light Archer         x1    G      Flash reach blocker — vs. the cube's 41 evasive cards — ambushes a … C
Luminollusk                 x2    G      Deathtouch blocker + lifegain — vs. fast aggro / when being raced    U
Rooftop Percher             x2    C      Graveyard hate + flying blocker — vs. graveyard decks (39 GY cards … C
```

## ANALYSIS

### DECK IDENTITY

RG Vivid/Prismatic Big Mana. The deck plays a two-colour manabase but manufactures a THREE-to-four-colour battlefield. The correction that shaped this list: Vivid counts colours among PERMANENTS, and lands are colourless - so red and green are not free, they must be standing on the battlefield as nonland permanents. Elder Auntie ('create a 1/1 black and red Goblin creature token') is the pool's only permanent, unconditional, no-upkeep colour adder and it supplies red and black at once; Puca's Eye becomes a chosen colour on ETB; Shimmerwilds Growth makes an enchanted land a chosen colour. Every 'Vivid' card then reads off that number - at the realistic 3 colours Bloom Tender taps for three, Wildvine Pummeler costs {3}{G} for a 6/5 reach-trample, Squawkroaster is a 3/4 double striker for {3}{R}, and Prismabasher enters as a 6/6 giving up to three creatures +3/+3. Four colours is the ceiling, not the default. The 'big mana' here comes from cost reduction and a mana-multiplying dork, not from Treasure tokens, which are colourless and would contribute nothing to the resource the deck actually cares about.

### THE CORRECTION THAT SHAPED THIS DECK

The first version of this list was built on a false premise, and the self-grill caught it. Every Vivid card reads *"the number of colors among **permanents** you control"*. **Lands are colourless permanents.** A Forest is not green; a Mountain is not red; Wooded Ridgeline's type line reads `Land — Mountain Forest`, which grants land *types*, not colours. So red and green are not free — they have to be standing on the battlefield as coloured nonland permanents.

In the pre-grill list, red permanents were **4 of 22 nonland cards** (Sear and Feed the Flames are instants; they never sit on the battlefield). Roughly one game in three the "2-colour floor" was really a 1-colour floor through turn 4. The repair — Elder Auntie ×2, Gangly Stompling 1→2, Explosive Prodigy 1→2 — took red permanents to **8 of 22**.

### THE COLOUR LADDER

| Step | Card | Oracle mechanism | Colour added |
|---|---|---|---|
| base | Gangly Stompling, Elder Auntie, Squawkroaster, Prismabasher… | coloured nonland permanents | R + G |
| 3rd | **Elder Auntie** ×2 | "create a 1/1 **black and red** Goblin creature token" | **B** — permanent, unconditional, no upkeep |
| 4th | **Shimmerwilds Growth** ×2 | "Enchanted land is the chosen color" | any chosen (name W or U) |
| 4th/5th | **Puca's Eye** ×1 | "This artifact becomes the chosen color" | any chosen |
| cond. | Unforgiving Aim | "a 2/2 **black and green** Elf creature token" — but it is *Choose one*, so this mode is never simultaneous with removal | B, conditionally |

Elder Auntie is the find of this build. It is the **only** card in the legal pool that adds a colour permanently, unconditionally, and with no upkeep — and it adds black *while itself supplying red*, the colour the deck was structurally short of. It also puts two bodies on the board for one card, which is exactly what Prismabasher's *"up to X target creatures you control get +X/+X"* wants.

### WHAT THE NUMBERS ACTUALLY ARE

The honest price of this engine is **three colours, not four.** Monte Carlo over 30,000 shuffles of this exact 40 (run independently during the grill) gives a mean colour count of **2.90 at turn 4** and **3.34 at turn 6**, with P(≥3 colours) = 0.65 / **0.82** and P(≥4) = 0.26 / 0.43 — with no per-turn payment required.

So read every payoff at 3, with 4 as the ceiling:

| Card | At 2 colours | **At 3 (realistic)** | At 4 (ceiling) |
|---|---|---|---|
| Wildvine Pummeler | {4}{G} 6/5 | **{3}{G} 6/5 reach trample** | {2}{G} 6/5 |
| Squawkroaster | 2/4 double strike | **3/4 double strike = 6 dmg/swing** | 4/4 = 8 dmg/swing |
| Prismabasher | 6/6, +2/+2 to two | **6/6, +3/+3 to three** | 6/6, +4/+4 to four |
| Bloom Tender | taps for 2 | **taps for 3** | taps for 4 |
| Explosive Prodigy | 2 damage | **3 damage for {1}{R}** | 4 damage |

### WHY THERE ARE NO TREASURES IN A "TREASURE" ARCHETYPE

The brief named Treasure explicitly, and this build runs zero Treasure makers. The mechanism is decisive and not a matter of taste: **Treasure tokens are colourless artifacts.** They add 0 to the number that 11 of this list's 22 nonland cards read from. Flamekin Gildweaver, Noggle Robber, Reckless Ransacking and Scuzzback Scrounger all ramp — and all leave the deck's actual resource untouched. Treasure belongs to the Raiding Schemes build (deck 2 of this set), where the payoff is spell copies rather than colour count.

### THE RARE BUDGET IS 3 SLOTS UNDER

This list uses **2 of the 5** permitted rare/mythic slots (Bloom Tender, Aurora Awakener). That is not a mistake and not a cap problem — it is the strongest evidence that this archetype was the right pick under your constraint. The Vivid engine and four of its five payoffs are commons and uncommons. If you want to spend the idle budget, the single best card is **Champion of the Path** ({3}{R} rare, 7/3): *"Whenever another Elemental you control enters, it deals damage equal to its power to each opponent"* — Elementals plus changelings are **8 of the 14 creatures**, and a Prismabasher entering would be 6 to the face on top of its pump. It was declined because it is a *different axis* from the colour count, not because it is weak.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (midrange):  [WARN]
  MV distribution (22 nonland):  2:8  3:5  4:4  6:2  7:3
  WARN  Above thesis turn: share of nonland cards with MV > 6 is 14% (max 10%)
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.3: Squawkroaster@0.8, Squawkroaster@0.8, Aurora Awakener@0.7) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.6: Shimmerwilds Growth@0.9, Shimmerwilds Growth@0.9, Bloom Tender@0.8) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 86%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in these colours in this pool (the cube has 2 sweepers total, in R and UR); the answer to a wide board here is a bigger board - Prismabasher's '+X/+X to up to X creatures' plus trample on Wildvine Pummeler, Prismabasher and Gangly Stompling makes chump blocks non-lethal.
  OK        single_large_threat: Feed the Flames, Sear, Explosive Prodigy
  OK        noncreature_permanents: Unforgiving Aim
  CONCEDED  stack: Neither red nor green in this pool contains a counterspell; the list interacts on the battlefield instead and accepts that its spells resolve or do not.
  CONCEDED  graveyard: The cube census reports 0 dedicated graveyard hate and the RG pool contains none maindeckable; Rooftop Percher ('exile up to two target cards from graveyards') is a colourless answer held in the sideboard because a 5-mana 3/3 is a poor rate against non-graveyard decks.
```

- curve WARN (share of nonland cards with MV > 6 is 14%, max 10%): 3 of 22 nonland cards have printed MV > 6 - Wildvine Pummeler x2 and Aurora Awakener x1. Wildvine Pummeler's oracle reads 'Vivid - This spell costs {1} less to cast for each color among permanents you control', so at this deck's realistic 3 colours it is cast for {3}{G} = 4 mana, not 7. The curve check reads printed mana value, which overstates this list's top end by 2 cards. Genuine seven-mana cards: 1 of 22 = 4.5%, inside the 10% cap. Deviation accepted.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands become mana for the deck's scaling top end: Wildvine Pummeler and Aurora Awakener are castable at any excess, and Shimmerwilds Growth turns a redundant land into an extra mana every time it taps. Prismatic Undercurrents ('You may play an additional land on each of your turns') converts a flooded hand into board development rather than dead cards. |
| screw | mitigation | Keepable two-landers are hands with Bloom Tender (2 mana, taps for 2-3), Puca's Eye (2 mana, replaces itself) or Elder Auntie (3 mana, two bodies). Evolving Wilds x2 and 14 basics of 18 lands keep the colours honest, and the structural goldfish check measures 84% keepable hands with 3 lands by turn 3 in 92% of games. |
| decapitation | mitigation | There is no single key card: the colour climb has 5 unconditional adders across 3 different card types (creature, aura, artifact), so answering one does not stop it. If Bloom Tender is killed on sight the deck still reaches 3 colours off Elder Auntie alone and casts Wildvine Pummeler a turn later off lands. Blossoming Defense x2 in the sideboard ('gets +2/+2 and gains hexproof until end of turn') is the dedicated answer against removal-dense opponents. |
| gas-out | mitigation | Net-positive / self-replacing cards, recounted honestly: Puca's Eye x1 ('draw a card'), Prismatic Undercurrents x1 ('search your library for up to X basic land cards... put them into your hand' - 3 cards at 3 colours, and the deck runs 14 basics so X is always findable), Aurora Awakener x1 ('put any number of those permanent cards onto the battlefield') = 3 of 22 nonland cards. Prismatic Undercurrents was added specifically to fix this mode after the Phase 9 grill found the pre-repair numerator inflated. Elder Auntie also converts one card into two bodies, which is board advantage rather than card advantage. |
| raced | accepted | The list has no lifegain maindeck and its cheapest creature is a 2-mana 1/1. Mitigating would mean maindecking Luminollusk ('deathtouch' + 'gain life equal to the number of colors') over a Prismabasher or a Wildvine Pummeler, which costs the deck exactly the oversized-body density the judge picked this build for. Against the cube's 41 evasive cards (16% density) the concession is real; Luminollusk x2, Rooftop Percher x2 (flying) and Dawn's Light Archer (flash reach) are in the sideboard specifically to be brought in when the race is the matchup. |
| disruption-fizzle | mitigation | The critical turn is a Prismabasher alpha strike. If Prismabasher is answered mid-turn the board it was pumping is still 4-8 power of trample across Gangly Stompling x2 and Squawkroaster x2; if it is answered on sight the deck has a second copy and two Wildvine Pummelers that need no support. Because the plan is a sequence of independently-castable bodies rather than a single chained turn, one piece of interaction costs a turn, not the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Raiding Schemes | 'Each noncreature spell you cast has conspire' — this list runs 5 noncreature spells of 23; conspire also demands tapping two untapped creatures, which competes directly with Bloom Tender and Springleaf Drum for the same untapped bodies. Wrong build (that is pipeline #1). |
| Vibrance | Both ETB clauses require {R}{R} or {G}{G} spent; a Vivid deck's mana comes from any-colour sources (Bloom Tender, Firdoch Core, Great Forest Druid), which do pay hybrid but make the 5-drop compete with Prismabasher for the same turn. Mythic budget is better spent on Aurora Awakener. |
| Lavaleaper | 'Whenever a player taps a basic land for mana, that player adds one mana of any type that land produced' — symmetric, and this deck's mana comes from any-colour dorks and duals rather than basics; only 10 of 17 lands are basics. Rare budget better spent elsewhere. |
| Scuzzback Scrounger | Treasure tokens are colorless artifacts, so they add ZERO to the Vivid colour count — the resource this deck is actually short of. Rare slot too. |
| Flamekin Gildweaver / Noggle Robber / Reckless Ransacking | Same mechanism: all make Treasure, and Treasure is colourless — it ramps but does not raise the number of colors among permanents, which is what every Vivid card reads. |
| Sapling Nursery | 'Affinity for Forests' — this deck runs 6 Forests of 17 lands, so it costs {2}{G}{G} at best, and its 3/4 Treefolk are colourless-irrelevant to Vivid. Rare slot; belongs in pipeline #3. |
| Mutable Explorer | The Mutavault token is a colourless land — it adds no colour to the Vivid count, and the 1/1 body is below rate. Rare slot. |
| Goliath Daydreamer | 'Whenever you cast an instant or sorcery spell from your hand, exile that card with a dream counter' — this list runs 4 instants/sorceries of 23 nonlands; too thin a denominator, and it costs a rare. |
| Spinerock Tyrant | 6/6 flying mythic, but its copy trigger keys off instants/sorceries with a single target — 4 of 23 nonlands qualify. Mythic budget goes to Aurora Awakener, whose Vivid trigger keys off the resource this deck maximizes. |
| Collective Inferno | 'Double all damage that sources you control of the chosen type would deal' — needs a single dominant creature type; this deck's creatures span Elemental/Elf/Giant/Treefolk/Scarecrow/Shapeshifter with no type above 4 of 15. Rare slot. |
| Soul Immolation | 'blight X. X can't be greater than the greatest toughness among creatures you control' — the cost is -1/-1 counters on your own board, which fights the Prismabasher alpha strike. Mythic slot. |
| Moon-Vigil Adherents | 0/0 that grows with creatures + creature cards in graveyard; this deck neither self-mills nor goes wide (15 creatures, no sacrifice outlet), so it is routinely a 4-drop 4/4 or worse. |
| Enraged Flamecaster | 'Whenever you cast a spell with mana value 4 or greater, this creature deals 2 damage to each opponent' — 7 of 23 nonlands are MV4+ at printed cost, but Wildvine Pummeler's Vivid discount does NOT lower mana value, so the count holds; still a worse 3-drop than Squawkroaster in a deck that needs board presence. |
| Eclipsed Realms | '{T}: Add one mana of any color. Spend this mana only to cast a spell of the chosen type' — this deck has no dominant creature type to choose, so it is effectively a colourless land. |
| Celestial Reunion | {X}{G} tutor to hand — mythic slot for a card that costs a full turn and adds no colour; Aurora Awakener and Bloom Tender are the better mythics. |
| Bristlebane Battler | Enters with five -1/-1 counters and needs other creatures entering to shed them; this deck plays 15 creatures but few per turn, so it is a 2-mana 0/0-to-2/2 for several turns. Rare slot. |
| Blossoming Defense | Protection for a single creature; considered as decapitation insurance for Bloom Tender, but it is a blank when no key permanent is under threat — moved to the sideboard instead. |
| Gathering Stone | 'Spells you cast of the chosen type cost {1} less' — requires a dominant creature type; no type exceeds 4 of 15 creatures here. |
| Mirrormind Crown | Token-copy payoff needs a token-generation engine; this deck creates tokens on exactly 2 cards (Elder Auntie's Goblin, Unforgiving Aim's Elf mode). Rare slot. |
| Foraging Wickermaw | CUT IN THE PHASE 9 REPAIR. '{1}: Add one mana of any color. This creature becomes that color until end of turn. Activate only once each turn.' — mana-neutral, taxed {1} every turn, and the colour expires at end of turn. It had been counted simultaneously as ramp, as a colour adder and as card advantage ('surveil 1' draws zero cards); it is none of the three. Elder Auntie does the colour job permanently for free. |
| Puca's Eye (2nd copy) | Reduced from 2 copies to 1. Its second half — '{3}, {T}: Draw a card. Activate only if there are five colors among permanents you control' — is dead text: this list reaches 3 colours reliably and 4 as a ceiling, so the card is paid for as a 2-mana cantrip that adds one colour. |
| Chomping Changeling | Moved to the sideboard (both copies). A 1/2 for 3 whose taxonomic role is Interaction, not Threat; maindecking it flipped the interaction slot above its band. The cube holds 11 artifacts (4.2%), so a dedicated artifact answer belongs in the board. |
| Champion of the Path | SIDEBOARD/BUDGET CONSIDERATION. 'Whenever another Elemental you control enters, it deals damage equal to its power to each opponent' — Elementals plus changelings are 8 of this list's 14 creatures, and Prismabasher entering would be 6 to the face. Excluded because it is a different axis from the colour count (it would spend a free rare to amplify damage trample and double strike already deliver) and because its additional cost is 'behold an Elemental and exile it'. The single strongest card to add if the rare budget is opened up. |
| Vibrance | BUDGET CONSIDERATION. Mythic slot is free. Both ETB clauses require {R}{R} or {G}{G} specifically spent, and it does not touch the colour count at all — the resource 9 of 22 nonland cards read from. |
| Lavaleaper | BUDGET CONSIDERATION. 'Whenever a player taps a basic land for mana, that player adds one mana of any type that land produced' — symmetric, and it adds no colour. 14 of 18 lands are basics so the ramp is real, but a rare slot buys more elsewhere. |
| Sourbread Auntie | The closest miss. '{2}{R}{R} ... you may blight 2. If you do, create two 1/1 black and red Goblin creature tokens.' — same black-adding mechanism as Elder Auntie on a 4/3 body with 3 bodies per card. Excluded on the {R}{R} cost: this list has 12 G pips against 9 R and only 8 red sources, so a double-red 4-drop competes with Squawkroaster for the same turn and the same red. |
| Eclipsed Realms | '{T}: Add one mana of any color. Spend this mana only to cast a spell of the chosen type' — naming Elemental covers 8 of the 14 creatures but 0 of the 6 interaction spells (Sear, Feed the Flames and Unforgiving Aim are not creatures of any type), so on removal turns it is a colourless land. |
| Great Forest Druid | Cut from the sideboard in the Phase 9 repair: '{T}: Add one mana of any color' adds mana but changes no permanent's colour, so it feeds none of the 9 colour-count readers, and a proactive mana dork answers no threat class in a 10-card reactive board. |
| Springleaf Drum / Firdoch Core | Both are colourless permanents. They accelerate, but they add 0 to the number of colours among permanents — the resource 9 of this list's 22 nonland cards read from. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.64   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.85 adj [MV 3.64 vs 2.5, 4 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  G  demand  57.1%  prod  55.6%  gap  +1.5pp  [OK]
  R  demand  42.9%  prod  44.4%  gap  -1.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Every card is drawn from the ecl cube mainboard as loaded into working_pool.json - validator check 2 (exact-name membership) PASS.
[PASS] Commons/uncommons capped at 2 copies, rares/mythics at 1 - validator check 3 PASS with the copies_policy translated to {per_rarity: {common:2, uncommon:2, rare:1, mythic:1}}. Note: the validator initially defaulted to 4 copies because get_max_copies takes a copies_policy shape, not the card_pool_rules shape; it was caught by running it against a known-bad 3-copy-mythic fixture before trusting it.
[PASS] Rare/mythic total across mainboard + sideboard: 2 (Bloom Tender mythic, Aurora Awakener mythic) against a cap of 5. Three rare/mythic slots are deliberately UNUSED - see the analysis.
[PASS] Basic lands (Forest x8, Mountain x6) are format-supplied and exempt from copy limits.
[PASS] No splash: splash_colors = [] and no card in the list has a colour identity outside {R, G} - validator checks 4 and 5 PASS.
```
