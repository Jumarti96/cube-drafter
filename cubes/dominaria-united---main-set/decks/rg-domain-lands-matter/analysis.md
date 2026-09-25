---
deck_name: "rg-domain-lands-matter"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-08-18T20:42:09Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  6x Forest                    G, Forest type
  1x Geothermal Bog            R; Swamp Mountain adds Swamp, the fifth type
  1x Haunted Mire              G; Swamp Forest, the deck's second Swamp source
  2x Molten Tributary          R; Island Mountain adds Island
  2x Mountain                  R, Mountain type
  2x Radiant Grove             G or W; Forest Plains adds Plains and is a splash source
  1x Sacred Peaks              R or W; Mountain Plains adds Plains and is a splash source
  2x Tangled Islet             G; Forest Island adds Island
```

### CREATURES (16)

```
CMC  Card                      Qty   Color  Role                                           Rar
  1  Shivan Devastator         x1    R      Threat — {X}{R} flying haste, X +1/+1 counters M
  2  Nishoba Brawler           x2    G      Payoff — power = basic land types; a 4/3 tram… U
  2  Radha's Firebrand         x1    R      Evasion — attacking, a smaller creature can't… R
  2  Sprouting Goblin          x2    R      Enabler — kicked, tutors any basic-typed land… U
  2  Yavimaya Iconoclast       x2    G      Threat — 3/2 trample two-drop; kicked {R} for… U
  3  Llanowar Greenwidow       x1    G      Threat — 4/3 reach trample; self-recurring at… R
  4  Rulik Mons, Warren Chief  x2    RG     Threat/Enabler — 3/3 menace; on attack puts a… U
  5  Meria's Outrider          x2    R      Payoff — reach; ETB deals Domain-many damage … C
  5  Territorial Maro          x2    G      Payoff — P/T each twice the basic land type c… U
  6  Briar Hydra               x1    G      Threat — 6/6 trample; combat damage adds Doma… R
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                      Qty   Color  Role                                           Rar
  1  Gaea's Might              x2    G      Payoff — {G} instant, +Domain/+Domain; the de… C
  2  Bite Down                 x2    G      Interaction — our oversized creature deals it… C
  2  Lightning Strike          x2    R      Interaction — 3 damage any target, including … C
```

### OTHER SPELLS (1)

```
CMC  Card                      Qty   Color  Role                                           Rar
  6  Leyline Binding           x1    W      Interaction (W splash) — flash exile any nonl… R
```

## SIDEBOARD (10)

```
Card                      Qty   Color  Role / When to board in                                      Rar
Broken Wings              x2    G      Answer — artifact / enchantment / flier | vs artifact, ench… C
Magnigoth Sentry          x2    G      Blocker — 4/4 reach | vs flier-based aggro that goes over o… C
Jaya's Firenado           x2    R      Removal — 5 damage to a creature or planeswalker, scry 1 | … C
Tail Swipe                x2    G      Removal — fight, +1/+1 in your main phase | vs creature dec… U
Flowstone Infusion        x2    R      Removal — {R} instant, target creature gets +2/-2 | vs x/1 … C
```

## ANALYSIS

### DECK IDENTITY

Gruul Domain beatdown. This is the interpretation of 'lands matter' that Dominaria United was actually designed around: the deck does not care what is in its graveyard, it cares how many distinct basic land types are on its battlefield, because that number is literally the size of its creatures. Nishoba Brawler's power is the count, Territorial Maro's power and toughness are each twice the count, Gaea's Might is a one-mana pump equal to the count, and Meria's Outrider throws the count at the opponent's face on arrival, unblockably. Nine of the seventeen lands are typed duals bought for their type line rather than their colour, and three of them incidentally produce white, which is what lets Leyline Binding into the deck as a one-card splash costing {1}{W} at Domain 4. Sprouting Goblin ties the two halves together: kicked it tutors whichever basic land type is missing - it never whiffs, because all 17 lands here carry one - and its '{R}, {T}, Sacrifice a land: Draw a card' converts the deck's redundant Forests into the only card advantage the colours offer.

### THE DECK IS A NUMBER, AND HERE IS THE NUMBER

Twelve of the twenty-three nonland cards reference the Domain count — nine have their size or output set by it, three have a cost reduced by it. So the honest question is not "is Territorial Maro good" but "what is Domain, actually, on turn six." That was simulated over 20,000 shuffles of this exact 40-card list (on the draw, one land drop per turn chosen to maximise distinct types), and independently reproduced by the Phase 9 Challenger on 40,000 shuffles:

| Turn | mean Domain | P(≥3) | P(≥4) | P(=5) |
|---|---|---|---|---|
| 2 | 3.11 | 81.4% | 34.1% | 0.0% |
| 3 | 3.53 | 86.7% | 56.4% | 12.8% |
| 4 | 3.71 | 90.6% | 63.2% | 18.8% |
| 5 | 3.85 | 93.4% | 69.5% | 23.2% |
| **6** | **3.98** | **95.4%** | **75.0%** | **27.8%** |
| 8 | 4.19 | 98.0% | 84.2% | 37.5% |

Read every card against that column. On turn 6 the deck is casting:

- **Nishoba Brawler** — a 4/3 trample for two (and a 3/3 or better on turn *two* 81% of the time)
- **Territorial Maro** — an 8/8 for five, or bigger, three games in four
- **Meria's Outrider** — four unpreventable damage plus a 4/4 reach body
- **Gaea's Might** — +4/+4 for one mana at instant speed
- **Leyline Binding** — a `{1}{W}` flash exile instead of a `{5}{W}` one

The number that matters most is P(≥3) at turn 2 = **81.4%**. That is what makes a two-drop deck out of a manabase where nine of seventeen lands enter tapped: the types arrive faster than the mana does.

### CRYSTAL GROTTO IS THE WORST LAND IN THIS DECK

This is the cleanest decision in the build and it runs directly against the usual heuristic. Crystal Grotto enters **untapped**, scries, and fixes every colour — in any other deck in this cube it is a fine land. Its type line is bare `Land`.

Domain counts *basic land types among lands you control*. A land with no basic land type contributes exactly **0** to the number that sizes twelve of the deck's twenty-three nonland cards. Putting one in over a typed dual turns Territorial Maro from an 8/8 into a 6/6, Nishoba Brawler from a 4/3 into a 3/3, and Meria's Outrider from 4 damage into 3 — permanently, in every game it's drawn — in exchange for one tempo point, once.

Nine of seventeen lands entering tapped is the archetype's entry fee, not a mistake. **Every typed dual in Dominaria United enters tapped.** There is no way to buy a basic land type in this cube without buying a tempo point, and after the Phase 9 repair, all nine tapped lands in this deck are there for their type line — not one is in for its colours.

### THE SWAP THAT WAS SITTING IN PLAIN SIGHT

The pre-grill list ran Wooded Ridgeline (`Land — Mountain Forest`) as its RG dual. It was the one tapped land in the deck buying **no new type** — Forest and Mountain were already covered by basics. It was declined to add a second Swamp source on the grounds that doing so "would make ten of seventeen lands enter tapped."

That ground priced an *addition* when the correct move was a *swap*. Wooded Ridgeline was already entering tapped. Exchanging it for Haunted Mire (`Land — Swamp Forest`, taps for `{G}`) cost nothing at all and bought:

| | before | after |
|---|---|---|
| Lands entering tapped | 9 | **9** |
| Green sources | 11 | **11** |
| Swamp sources | 1 | **2** |
| Turn-6 mean Domain | 3.78 | **3.98** |
| Turn-6 P(Domain ≥ 4) | 67.7% | **75.0%** |
| Turn-6 P(Domain = 5) | 16.8% | **27.8%** |

### SPROUTING GOBLIN IS A DIFFERENT CARD IN THIS DECK

`When this creature enters, if it was kicked, search your library for a land card with a basic land type, reveal it, put it into your hand.`

In most decks that clause is a hedge — it whiffs on utility lands and it fetches to hand rather than the battlefield. Here, **all 17 of 17 lands carry a basic land type**, so it never whiffs, and more importantly it *chooses*: it goes and gets whichever of the five types the board is missing. It is a tutor for the deck's central number.

Its second ability, `{R}, {T}, Sacrifice a land: Draw a card`, is the deck's **only** card draw — and the sacrifice is nearly free because the deck's redundancy is deliberately lopsided. Eleven lands supply Forest and six supply Mountain, against three Plains, four Island and two Swamp, so there is almost always a duplicate to feed the outlet without lowering Domain by a single point.

### WHERE THIS DECK IS GENUINELY VULNERABLE

Two places, both stated rather than papered over.

**Turn one.** Only 8 of 17 lands enter untapped, and the deck has three one-mana cards. The goldfish sim puts the turn-1 play rate at roughly 47% — against 96% on turn two and 98% on turn three. The tapped burden costs turn one and then essentially nothing, which is survivable for a deck whose thesis turn is 6.

**Answering a noncreature permanent.** Leyline Binding is the *only* mainboard card that can, it is a single copy, and all three of its white sources enter tapped. The Challenger simulated joint availability — a white source in play and enough mana after the Domain discount — at 60.7% on turn 4, 65.4% on turn 5 and **69.4% on turn 6**. The splash is kept because it costs literally zero land slots (Radiant Grove and Sacred Peaks are in the deck for the Plains type regardless), not because three sources is reliable. Roughly one game in three, this deck simply has no answer to an opposing enchantment or artifact until it sideboards.

### ONE OBJECTION I COULDN'T FULLY ANSWER

The Proposer named Shivan Devastator as the deck's weakest inclusion, and the argument is a fair one: it spends the only mythic slot on a card that touches Domain not at all, at a rate of n+1 mana for an n/n, in a deck where Territorial Maro is an 8/8 for five three games in four. Meanwhile Thran Portal — `As this land enters, choose a basic land type` — is the single best Domain land in the cube and was declined for exactly the rare/mythic budget Shivan Devastator is consuming.

The counter-argument is real but not overwhelming: Shivan Devastator is the deck's only flier, its only haste threat, and the reason no hand in this deck is uncastable. If you iterate on this list, that is the first swap to test.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:3  2:11  3:1  4:2  5:4  6:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies → p=0.96 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 11.7: Sprouting Goblin@0.85, Sprouting Goblin@0.85, Rulik Mons, Warren Chief@0.5, Rulik Mons, Warren Chief@0.5) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 46%  T2 95%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper exists in RG at common or uncommon; Smash to Dust's third mode deals 1 damage to each opposing creature, which kills x/1s only and was cut from the sideboard entirely during the Phase 9 grill because Broken Wings already covers its artifact mode. The mainboard answer to a wide board is size rather than removal: Territorial Maro is an 8/8 at Domain 4, Nishoba Brawler a 4/3 trample, Briar Hydra a 6/6 trample, and Gaea's Might turns any block into a blowout. Mitigating properly would mean maindecking a card that deals 1 over a Domain payoff, which trades the deck's clock for an effect that answers nothing this cube actually presents.
  OK        single_large_threat: Leyline Binding, Bite Down, Lightning Strike
  OK        noncreature_permanents: Leyline Binding
  CONCEDED  stack: RG holds no counterspell in this cube, so the deck answers permanents after they resolve via Leyline Binding's flash exile and races everything else.
  CONCEDED  graveyard: RG has no graveyard-interaction card of any kind in this cube - the only functional answer, Nemata, Primeval Warden, is black-green. The deck concedes the class entirely and relies on a turn-6 clock to end the game before a graveyard deck's recursion compounds.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This deck is the one build of the four for which a surplus land is straightforwardly good: every land that adds a new basic land type is +1 power on Nishoba Brawler, +2/+2 on Territorial Maro, +1 damage on Meria's Outrider and +1/+1 on Gaea's Might, all at once. Beyond that, surplus mana has three sinks — Radha's Firebrand's Domain-discounted '{5}{R}: gets +2/+2' (which costs {1}{R} at Domain 4), Shivan Devastator cast for a large X, and Llanowar Greenwidow's graveyard recursion at {3}{G}. The 17th land is never a dead card here. |
| screw | mitigation | Fourteen of the 23 nonland cards cost two mana or less (Gaea's Might x2, Shivan Devastator at X=1, Nishoba Brawler x2, Yavimaya Iconoclast x2, Radha's Firebrand x1, Lightning Strike x2, Bite Down x2, Sprouting Goblin x2), and Shivan Devastator is castable for literally any amount of mana, so no hand is uncastable. Sprouting Goblin kicked tutors the exact land the hand is missing. The goldfish simulation reports 82% keepable hands and 88% on three lands by turn three. CORRECTED after the grill: the earlier text said eleven while enumerating fourteen - fourteen is right. The honest weakness is not screw but tapped lands: nine of seventeen enter tapped, so a two-land opener is frequently a turn behind on mana even when it is not short of lands. |
| decapitation | mitigation | There is no key card to answer — the payoff is distributed across nine copies (Nishoba Brawler x2, Territorial Maro x2, Meria's Outrider x2, Gaea's Might x2, Briar Hydra x1) and the thing that actually makes them large is the land base, which is nearly unanswerable in this cube. Killing any single threat leaves the Domain count untouched, so the replacement arrives the same size. Llanowar Greenwidow additionally returns itself from the graveyard for {3}{G} at Domain 4. |
| gas-out | mitigation | REVISED from an ACCEPTED after the Phase 9 grill, because the accepted's stated cost turned out to be false. The pre-grill list had zero mainboard card draw and claimed that mitigating would require maindecking Jodah's Codex or cutting a payoff. The Challenger correctly showed that Sprouting Goblin's '{R}, {T}, Sacrifice a land: Draw a card' is a repeatable draw outlet costing an ENGINE slot rather than a payoff slot, so the mitigation was available all along at no cost to the clock. With Sprouting Goblin x2 in the list the deck has 2 of 23 nonland cards that draw repeatably, plus Meria's Outrider x2 as a body-plus-damage two-for-one, and the fuel is the deck's own redundancy: 11 Forest-type and 7 Mountain-type sources against 3 Plains and 4 Island means there is nearly always a duplicate land to sacrifice without lowering Domain. The structural backstop remains that this deck's late topdecks do not decay - its worst turn-10 draw is still an 8/8 for five or four damage to the face, because the payoffs are sized by the battlefield rather than by mana spent. |
| raced | mitigation | The deck races well and does not need to interact to do it. Nishoba Brawler is a 3/3 or 4/3 trample on turn two 80% of the time by the simulation, Yavimaya Iconoclast is a 3/2 trample (4/3 haste when kicked), and Meria's Outrider's ETB damage goes to the face regardless of the board — it is the only source of unpreventable reach in the deck and it arrives at four damage on average. Against decks that block rather than race, Radha's Firebrand's 'target creature defending player controls with power less than this creature's power can't block this turn' and Rulik Mons's menace force damage through. |
| disruption-fizzle | mitigation | There is no critical turn and no chain to disrupt. The Domain count is assembled by playing lands, which no card in this cube meaningfully interacts with, and each payoff is independently castable — killing a Nishoba Brawler in response to a Gaea's Might costs two cards but changes nothing structurally, because the next threat is the same size. The one genuinely fragile line is Meria's Outrider's ETB, which is a trigger rather than a chain: removal in response still leaves the damage dealt. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Crystal Grotto | The only untapped fixing land in the pool, and rejected outright: its type line is bare 'Land', so it adds nothing to Domain. In a deck where 9 of 23 nonland cards scale with the basic-land-type count, a land that contributes zero to that count is the worst land available regardless of how smoothly it casts spells. |
| Haunted Mire | Land — Swamp Forest, taps for G. Would give a second Swamp source and raise the Domain-5 rate above 16.8%, declined on a stated tempo cost: it would make ten of seventeen lands enter tapped in a deck whose thesis turn is 6. |
| Contaminated Aquifer / Sunlit Marsh / Idyllic Beachfront | All carry useful basic land types but produce no R or G mana at all — pure tempo loss in a deck with zero blue, black or white pips beyond the single Leyline Binding. |
| Karplusan Forest | RARE. The untapped RG painland would relieve the tapped-land burden, but it carries no basic land type and every rare slot is spent on spells. |
| Thran Portal | RARE. 'As this land enters, choose a basic land type' is the single best Domain land in the cube — it can be the missing fifth type on demand — but it costs one of only five rare/mythic slots and enters tapped unless you control two or fewer other lands. |
| Silverback Elder | MYTHIC, cut for the 5-card budget. A 5/7 for five whose creature-cast trigger can 'put a land card from among them onto the battlefield tapped' would be a genuine Domain assembler, but {2}{G}{G}{G} is a triple green pip on a manabase where nine of seventeen lands were bought for their type line rather than their colour. |
| Defiler of Vigor | RARE, cut for the 5-card budget. A 6/6 trample for five that pumps the team on every green permanent, but it competes directly with Territorial Maro, which is an 8/8 for the same cost here. |
| Herd Migration | RARE, cut for the 5-card budget and on curve: 'Create a 3/3 green Beast creature token for each basic land type' is roughly four 3/3s, but at seven mana it is two turns past this deck's thesis turn. |
| Quirion Beastcaller / Llanowar Loamspeaker / Radha, Coalition Warlord | Loamspeaker and Beastcaller are rares cut against the budget; Radha, Coalition Warlord is an uncommon whose Domain trigger only fires 'whenever Radha becomes tapped', which requires attacking with a 3/3 into a format full of larger bodies. |
| Slimefoot's Survey | Uncommon, and the most painful cut. 'Search your library for up to two land cards that each have a basic land type, put them onto the battlefield tapped' is the single most reliable Domain assembler in the pool, but at five mana it competes with Territorial Maro and Meria's Outrider for the same slot, and two more five-drops pushed the average mana value past 3.1 and the land target to 18. |
| The Weatherseed Treaty | Uncommon. Chapter I searches for a BASIC land card, and this deck runs only basic Forests and Mountains — types it already has — so the chapter that looks like Domain assembly adds nothing to the count here. |
| Sunbathing Rootwalla / Yavimaya Sojourner | Both scale with Domain, and both were cut on rate: Rootwalla's '{3}{G}: +1/+1 for each basic land type' costs four mana to make a 2/2 into a roughly 6/6 for one turn, and Sojourner is a 4/6 with no evasion for about {2}{G} — neither pressures a life total the way the included payoffs do. |
| Jodah's Codex | Uncommon artifact whose draw ability 'costs {1} less to activate for each basic land type' — free to activate at Domain 5. It is the only card advantage the colours offer, and it was cut because a five-mana do-nothing artifact is the opposite of an aggro deck's turn five. Its absence is why the gas-out failure mode is an accepted rather than a mitigation. |
| Deathbloom Gardener / Salvaged Manaworker / Meteorite | Mana creatures and rocks fix colours, which this deck does not need — it needs basic land TYPES, and none of these three has a type line. |
| Broken Wings / Smash to Dust / Magnigoth Sentry / Jaya's Firenado / Tail Swipe | Sideboard considerations. Broken Wings answers three classes at once and Magnigoth Sentry is a 4/4 reach blocker; between them they address evasion, the cube's largest threat class at 51 cards / 21%. Smash to Dust's third mode deals 1 damage to each opposing creature, which is a token answer rather than a sweeper — the reason it is not maindecked. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.28 adj [MV 2.96 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  61.5%  prod  64.7%  gap  -3.2pp  [OK]
  R  demand  38.5%  prod  35.3%  gap  +3.2pp  [OK]

Splash Check: [PASS]
  W  1 card(s), max CMC 6  sources 3/3  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: every card drawn from the cube's mainboard
[PASS] commons / uncommons: maximum 2 copies (combined mainboard + sideboard)
[PASS] rares / mythics: maximum 1 copy
[PASS] maximum 5 rare+mythic cards across both boards: 5 used - Briar Hydra (R), Leyline Binding (R), Llanowar Greenwidow (R), Radha's Firebrand (R), Shivan Devastator (M)
[PASS] basic lands: unlimited, rarity-exempt (format-supplied)
[PASS] mainboard = 40 cards; sideboard = 10 cards
[PASS] colour usability: every nonland card usable within core colours RG + splash W
```