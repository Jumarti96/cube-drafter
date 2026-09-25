---
deck_name: "bg-domain-bonerattle"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BG"
format: "40-card"
built_at: "2026-08-19T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  6x Forest                 
  6x Swamp                  
  1x Contaminated Aquifer   UB dual (Island Swamp), enters tapped
  2x Haunted Mire           BG dual (Swamp Forest), enters tapped
  1x Radiant Grove          
  1x Sunlit Marsh           WB dual (Plains Swamp), enters tapped
  1x Tangled Islet
```

### CREATURES (11)

```
CMC  Card                 Qty  Color  Role            Rar
2    Urborg Lhurgoyf      x1   G      Threat/Enabler  R
3    Deathbloom Gardener  x1   G      Engine/Ramp     C
3    Eerie Soultender     x2   B      Engine/Enabler  C
3    Uurg, Spawn of Turg  x2   BG     Engine/Enabler  U
4    Monstrous War-Leech  x1   B      Threat          U
6    Bortuk Bonerattle    x2   BG     Threat/Payoff   U
7    Mossbeard Ancient    x2   G      Threat          U
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                     Qty  Color  Role                 Rar
1    Bone Splinters           x1   B      Interaction/Enabler  C
1    Cut Down                 x2   B      Interaction          U
2    Tear Asunder             x2   G      Interaction          U
3    Shadow Prophecy          x2   B      Engine/Enabler       C
4    Sheoldred's Restoration  x2   B      Engine/Payoff        U
5    Slimefoot's Survey       x1   G      Engine/Ramp          U
```

### OTHER SPELLS (1)

```
CMC  Card                Qty  Color  Role           Rar
5    The Cruelty of Gix  x1   B      Engine/Payoff  R
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in                                                                                                                                                                                                                                                                                                               Rar
Bite Down                x2   G      Flex — Against decks with a single large threat — 'Target creature you control deals damage equal to its power to target creature or planeswalker you don't control' turns a resolved 7/7 Mossbeard Ancient into repeatable removal at no card cost.                                                                                  C
Broken Wings             x2   G      Hate — Answers three cube threat classes with one card — 'Destroy target artifact, enchantment, or creature with flying' covers 15 artifacts, 18 enchantments and the flying half of the 51-card evasion class.                                                                                                                       C
Choking Miasma           x2   B      Hate — Against wide token boards (Tokens is the cube's 2nd-largest cluster at 38 cards). 'All creatures get -2/-2 until end of turn' — of this deck's own creatures it kills Deathbloom Gardener and Eerie Soultender x2, so board those out; Uurg, Bortuk and Mossbeard Ancient all survive.                                         U
Drag to the Bottom       x1   B      Hate — Against go-wide decks. 'Each creature gets -X/-X until end of turn, where X is 1 plus the number of basic land types among lands you control' — realistically -4/-4 at this manabase's modal three types and -5/-5 at four; Mossbeard Ancient survives either, Bortuk and Uurg do not.                                         R
Magnigoth Sentry         x2   G      Hate — A 4/4 for 4 whose entire oracle text is 'Reach' — it BLOCKS the cube's 51-card evasion class rather than killing it, and it is the slot where the mainboard's accepted 'raced' weakness gets reversed.                                                                                                                         C
Nemata, Primeval Warden  x1   BG     Hate — PROPHYLAXIS against the cube's 32 graveyard-interaction cards, not an answer to a stocked yard: 'If a creature an opponent controls would die, exile it instead' is a replacement effect on FUTURE deaths, so board it in before an opposing graveyard deck fills up, not after. It does not touch this deck's own graveyard.  R
```

## ANALYSIS

### DECK IDENTITY

A B/G domain-ramp midrange deck that treats its manabase as a scaling term. Deathbloom Gardener, Slimefoot's Survey and 18 lands power out mana value 6-7 bodies, while Eerie Soultender, Shadow Prophecy, a kicked Urborg Lhurgoyf and Uurg's upkeep surveil stock the graveyard alongside them. From there the fat reaches the battlefield by whichever route is open: hard-cast it, return it with Sheoldred's Restoration (Mossbeard Ancient's 'When this creature enters, you gain 5 life' refunds 5 of the 7 life the unkicked spell charges, so a 7/7 trample costs a net 2 life), put it back with The Cruelty of Gix chapter III, which has no mana-value cap, or return the cheap half with Bortuk Bonerattle's domain clause. Monstrous War-Leech reads the same graveyard off the cast side, so the plan survives every reanimation spell being answered. The manabase is built to raise the basic-land-type count that Bortuk, Shadow Prophecy, Slimefoot's Survey and sideboard Drag to the Bottom all read - but that count is a distribution, not a constant, and the deck is built to function at its MODAL three types rather than its ceiling of four.

### THE MANABASE IS A SPELL

Most decks pick lands to cast spells. This one picks lands to *power* spells. Four cards read the same property — **"the number of basic land types among lands you control"**:

| Card | What the count does |
|---|---|
| Bortuk Bonerattle ×2 | Returns a creature from the graveyard to the **battlefield** if its MV ≤ the count; otherwise to hand |
| Shadow Prophecy ×2 | Looks at that many cards, keeps 2, **bins the rest** |
| Slimefoot's Survey | Digs that many cards after fetching |
| Drag to the Bottom (SB) | −X/−X where X = 1 + the count |

So the land slots were chosen from a **census of the pool's `type_line`s**, not from colour alone. Ten duals in the cube carry basic land types; four of them tap for a B/G colour *and* add a type this deck lacks. The build takes three of them:

```
Swamp x6, Forest x6            → Swamp, Forest
Haunted Mire x2   (Swamp Forest)  → both core types on one land
Sunlit Marsh x1   (Plains Swamp)  → taps {B}, adds PLAINS
Radiant Grove x1  (Forest Plains) → taps {G}, adds PLAINS
Contaminated Aquifer x1 (Island Swamp) → taps {B}, adds ISLAND
Tangled Islet x1  (Forest Island) → taps {G}, adds ISLAND
```

**Thran Portal, the card that looks purpose-built for this, is deliberately absent.** Its type line is `Land — Gate` — it carries no basic land type of its own, and *"This land is the chosen type in addition to its other types"* means the only mana it makes is whatever the type you pick grants. Choosing Mountain to reach a fifth type turns it into a land that taps for red. Crystal Grotto carries no type at all.

**The count is a distribution, not a constant.** Plains and Island each come from only 2 of 18 lands. Simulated over this manabase, the turn-6 four-type rate is ~45% with Slimefoot's Survey and ~29% without it; three types is the other common state. Every reliability weight in this build is stated against **three**, so the deck is designed to function below its ceiling rather than assuming it.

### WHY MOSSBEARD ANCIENT AND NOT A "BETTER" FATTY

Sheoldred's Restoration unkicked reads *"you **lose** that much life"* — the returned card's mana value. On a 7-drop that is 7 life, which sounds unplayable. Mossbeard Ancient's own ETB reads *"When this creature enters, **you gain 5 life**."*

Net cost of a reanimated Mossbeard Ancient: **2 life for a 7/7 trample.** That single interaction is why the deck's top end is a 7-mana uncommon rather than a rare bomb, and it does not work with any other creature in these colours.

### FOUR ROUTES, DELIBERATELY DIFFERENT SHAPES

The graveyard is spent by four mechanically distinct card types, which is what makes the plan hard to answer with one card:

1. **A sorcery** — Sheoldred's Restoration ×2.
2. **A saga chapter with no mana-value cap** — The Cruelty of Gix. Read ahead lets it enter on chapter III, and unlike Bortuk it can return a MV-7 Mossbeard Ancient. It also reads *"a graveyard"*, not *your* graveyard.
3. **A creature ETB, domain-gated** — Bortuk Bonerattle ×2, which at three types reaches 6 of the 11 creature cards and at worst still reads *"put it into your hand."* It is never a blank.
4. **No reanimation at all** — Monstrous War-Leech's *"power and toughness are each equal to the greatest mana value among cards in your graveyard"* reads the yard off the **cast** side.

And under all four sits the least glamorous route: **just cast it.** 18 lands plus Deathbloom Gardener and Slimefoot's Survey reach seven mana about 69% of the time by turn 7. The reanimation package accelerates the plan; it is not the plan.

### THE HONEST WEAKNESS

This deck is slow on purpose and it will lose to a fast clock. Its turn-1 play rate is 45%, it runs five interaction spells, and its thesis turn is six. The cheap bodies that would fix that — Nishoba Brawler at two mana, Floriferous Vinewall, Magnigoth Sentry — occupy exactly the slots that currently hold the ramp and self-mill without which the MV 6–7 top end is neither castable nor reachable. That trade is recorded as an **accepted** failure mode rather than a mitigated one, and Magnigoth Sentry ×2 plus Broken Wings ×2 sit in the sideboard for the games where it should be reversed.

One environmental note: the cube's graveyard-hate probe matches **zero cards in any colour**. Nemata, Primeval Warden is the closest thing the pool offers, and its *"If a creature an opponent controls would die, exile it instead"* is a replacement effect on **future** deaths — prophylaxis against a graveyard deck, not an answer to one that has already assembled.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:3  2:3  3:7  4:3  5:2  6:2  7:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.75: The Cruelty of Gix@0.8, Bortuk Bonerattle@0.55, Bortuk Bonerattle@0.55, Monstrous War-Leech@0.85) → p=0.81 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.1: Shadow Prophecy@0.9, Shadow Prophecy@0.9, Uurg, Spawn of Turg@0.8, Uurg, Spawn of Turg@0.8, Urborg Lhurgoyf@0.9, Bone Splinters@0.8) → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 45%  T2 79%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: The two sweepers this deck can cast are both symmetric and both worse for it than for a go-wide opponent. Drag to the Bottom ('Each creature gets -X/-X until end of turn, where X is 1 plus the number of basic land types among lands you control') is -4/-4 at this manabase's modal three basic land types, which kills Deathbloom Gardener, Eerie Soultender x2, Uurg x2, Urborg Lhurgoyf and Bortuk Bonerattle x2 - 8 of the 22 nonland cards, including the entire ramp and self-mill package. Choking Miasma at -2/-2 kills Deathbloom Gardener and Eerie Soultender x2. Maindecking either would cost the acceleration and graveyard-filling that make the MV 6-7 top end reachable at all; both sit in the sideboard for the matchups where that trade is correct.
  OK        single_large_threat: Tear Asunder, Cut Down, Bone Splinters
  OK        noncreature_permanents: Tear Asunder
  CONCEDED  stack: No card in B or G in this cube counters a spell; the pool's only counterspells (Negate, Essence Scatter, Ertai's Scorn, Protect the Negotiators) are blue. Mitigating would mean a third colour on a manabase whose land slots are already doing double duty as the basic-land-type count Bortuk Bonerattle, Shadow Prophecy, Slimefoot's Survey and Drag to the Bottom all read.
  CONCEDED  graveyard: The cube contains zero graveyard hate in any colour (dossier structural_census: gy_hate = 0). The closest effect in the pool, Nemata, Primeval Warden's 'If a creature an opponent controls would die, exile it instead', is a replacement effect on FUTURE opposing deaths - it is prophylaxis, not a way to attack a graveyard that is already stocked, so it cannot answer a resolved graveyard plan. It is in the sideboard on that narrower basis.
```
- No WARN-tier structural flag was raised on the final list - curve, assembly, goldfish and coverage all return PASS - so this array is intentionally empty. (An earlier revision did carry a goldfish WARN at 78% keepable; it was repaired by the manabase and curve changes rather than answered with a response line, and the final sim returns 82%.)

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands are the deck's scaling term, not dead cards: the basic-land-type count that Bortuk Bonerattle, Shadow Prophecy and Slimefoot's Survey all read goes UP with more lands in play. Beyond that, Uurg's '{B}{G}, Sacrifice a land: You gain 2 life' converts surplus lands into life while its own 'power is equal to the number of land cards in your graveyard' grows from doing it, and Slimefoot's Survey turns a flooded draw step into two typed lands plus a dig. |
| screw | mitigation | Deathbloom Gardener ('{T}: Add one mana of any color') and Slimefoot's Survey ('Search your library for up to two land cards that each have a basic land type, put them onto the battlefield tapped') are the acceleration; 18 lands give a 92% chance of 3 lands by turn 3 and 82% keepable hands. 5 of 22 nonland cards cost 2 or less (Cut Down x2, Bone Splinters, Tear Asunder x2 unkicked) plus Urborg Lhurgoyf at {1}{G}, so a two-land hand still interacts while it digs. |
| decapitation | mitigation | The payoff role holds 6 copies across 4 names (Sheoldred's Restoration x2, The Cruelty of Gix, Bortuk Bonerattle x2, Monstrous War-Leech), assembly p=0.81 by turn 6, and the routes are structurally different: Restoration is a sorcery, Cruelty is a saga chapter with no mana-value cap, Bortuk is a creature ETB, and Monstrous War-Leech reads the graveyard off the CAST side and needs no reanimation at all. Answering any one class does not answer the others. Above all, the deck can simply HARD-CAST Mossbeard Ancient off 18 lands plus two accelerants - the reanimation is an accelerant of the plan, not the plan. |
| gas-out | mitigation | Shadow Prophecy x2 put up to two cards into hand each; Uurg's 'At the beginning of your upkeep, surveil 1' is a free per-turn selection engine that never runs out; Bortuk Bonerattle is card advantage even in its worst case, since when the target exceeds the domain count it reads 'put it into your hand'; Eerie Soultender x2 convert their own corpses into a creature card in hand for {4}{B}; and The Cruelty of Gix chapter II is an unrestricted 'Search your library for a card, put that card into your hand'. The deck's late top-decks are 6-7 mana value bodies it can actually cast. |
| raced | accepted | This deck loses to a fast enough clock and mitigating it would cost the deck its identity. Its interaction is 5 cards and its thesis turn is 6; the cheap defensive bodies that would fix the early turns - Floriferous Vinewall's 0/2 defender, Magnigoth Sentry's 4/4 reach, Nishoba Brawler's 2-mana body, Gibbering Barricade's 2/4 - all occupy slots currently holding the ramp and self-mill without which the MV 6-7 top end is neither castable nor reachable. The goldfish sim's 45% turn-1 play rate is the measured price of that choice. Magnigoth Sentry x2 and Broken Wings x2 are in the sideboard for the matchups where the trade should be reversed; the mainboard is built to beat decks that give it turn six. |
| disruption-fizzle | mitigation | The critical turn is a 4-mana Sheoldred's Restoration on a binned Mossbeard Ancient. If it is answered, the Mossbeard is still in the graveyard - nothing in the deck exiles it, and Sheoldred's Restoration's own 'Exile Sheoldred's Restoration' exiles only itself - so the second Restoration, The Cruelty of Gix chapter III (no mana-value cap), a Bortuk that at worst returns it to HAND for a hard cast off 18 lands, or a Monstrous War-Leech reading that same MV 7 all retry off the identical graveyard. The plan retries rather than folding. Honest disclosure: the Challenger measured the un-repaired list's turn-4 version of this line at 6%; the repair doubled the mill package from 3 effects to 6 (Eerie Soultender x2, Urborg Lhurgoyf, Shadow Prophecy x2, Uurg x2's surveil) and added an uncapped third route, and the deck's real primary line remains hard-casting the Ancient off its own ramp. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Serra Paragon | Mythic W. Its 'cast a permanent spell with mana value 3 or less from your graveyard' clause is the wrong shape for a deck whose reanimation targets are MV 5-7, and it would require a white source in a manabase already spending land slots on basic land TYPES for domain. |
| Silverback Elder | {2}{G}{G}{G} on a THIN-fixing two-colour manabase that also runs 2 tapped duals and colourless domain lands. GGG on turn 5 is not castable at the source count this deck can afford. |
| Briar Hydra | 'Whenever this creature deals combat damage to a player, put X +1/+1 counters on target creature you control' — a 6-mana rare whose payoff needs it to connect first; Defiler of Vigor at 5 mana puts counters on the whole board off every green permanent instead. |
| Tyrannical Pitlord | 6/6 flier, but 'When this creature leaves the battlefield, sacrifice the chosen creature' turns every removal spell the opponent draws into a two-for-one against a deck whose bodies are its whole plan, and it costs one of only 5 rare/mythic slots. |
| Nemata, Primeval Warden | 'If a creature an opponent controls would die, exile it instead' actively fights this deck's own The Cruelty of Gix chapter III ('Put target creature card from A graveyard onto the battlefield'), which reads opponents' graveyards. |
| Drag to the Bottom | Domain sweeper for -X/-X where X = 1 + basic land types; at 3 types that is -4/-4, which kills this deck's own Cult Conscript, Eerie Soultender, Deathbloom Gardener, Floriferous Vinewall and Uurg. Choking Miasma at -2/-2 is the version this list's larger bodies survive. |
| Threats Undetected | 'Search your library for up to four creature cards with different powers... An opponent chooses two of those cards' — the opponent picks which two you keep, and this deck's creature powers cluster at 4-7, so it often cannot even find four different powers. |
| Llanowar Loamspeaker | '{T}: Add one mana of any color' is real ramp, but it is a rare and Deathbloom Gardener does the same job at common with deathtouch attached. |
| Leaf-Crowned Visionary | 'Other Elves you control get +1/+1' and its draw trigger needs Elf spells; this list runs 2 Elves (Deathbloom Gardener), so 2 of 23 nonland cards would turn it on. |
| Quirion Beastcaller | A +1/+1-counters payoff, not a graveyard one; the rare slot is worth more on the reanimation package. |
| The Weatherseed Treaty | Chapter I fetches a basic land, which serves domain, but chapters II and III are a 1/1 Saproling and a combat trick — two of three chapters do nothing for a deck that wins with 6-7 power bodies. |
| Yavimaya Sojourner | 'Domain - This spell costs {1} less to cast for each basic land type among lands you control' on a 4/6 vanilla body: at 3 types it is a 5-mana 4/6, worse than Elfhame Wurm's 5/4 vigilance trample at the same cost. |
| Sunbathing Rootwalla / Nishoba Brawler | Domain creatures whose scaling tops out around the number of basic land types (3-4 here); the deck's threat slots are better spent on bodies that are already 5/4 or 7/7 without a domain count. |
| Broken Wings | 'Destroy target artifact, enchantment, or creature with flying' is narrower than kicked Tear Asunder ('exile target nonland permanent'), which the deck already runs; it belongs in the sideboard. |
| Braids's Frightful Return | Chapter II returns a creature card to HAND, which is what Urborg Repossession does for one mana instead of three; and chapter I's 'You may sacrifice a creature' competes with Bone Splinters for the same bodies. |
| Gibbering Barricade | A repeatable sacrifice outlet, but this deck's graveyard filling comes from surveil, mill and land-fetching rather than from creatures dying, and a 2/4 defender does not advance a plan built on 5/4-and-larger attackers. |
| Balduvian Atrocity | Its reanimation clause needs the {R} kicker, which is off-colour here; unkicked it is a vanilla 2/3 menace. |
| Rivaz of the Claw | 'you may cast a Dragon creature spell from your graveyard' — 0 of the pool's 3 Dragons are castable in B/G. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.55   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.07 adj [MV 3.55 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  58.1%  prod  55.6%  gap  +2.5pp  [OK]
  G  demand  41.9%  prod  55.6%  gap -13.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 (need 40)
[PASS] 1b sideboard size — 10 (need 10)
[PASS] 2 exact-name membership — all 27 distinct names found
[PASS] 3 copy limits — all within per-rarity caps (basics exempt)
[PASS] 3b rare/mythic cap (<=5) — 4: Drag to the Bottom x1, Nemata, Primeval Warden x1, The Cruelty of Gix x1, Urborg Lhurgoyf x1
[PASS] 4 colour usability (best_mode) — all nonland cards usable in BG; off-cast modes: none
[PASS] 5 splash cap — splashed cards: none; per-splash-colour counts {} (splash_colors=[])
[PASS] 5-selftest validator rejects a known-bad card (Serra Paragon) — fixture correctly identified as an illegal splash
```
