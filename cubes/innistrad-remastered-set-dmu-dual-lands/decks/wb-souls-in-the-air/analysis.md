---
deck_name: "wb-souls-in-the-air"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-08-27T01:09:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  7x Plains                                       basic
  6x Swamp                                        basic
  2x Evolving Wilds                               fetches a basic, enters tapped
  1x Shattered Sanctum                            W/B dual, untapped with 2+ other lands
  1x Sunlit Marsh                                 W/B dual, enters tapped
```

### CREATURES (7)
```
CMC  Card                                       Qty   Color  Role                         Rar
  2  Cathar Commando                             x1    W      Interaction/Disruption       C
  2  Siege Zombie                                x1    B      Payload/Payoff               C
  3  Crusader of Odric                           x1    W      Payload/Payoff               C
  3  Dauntless Cathar                            x1    W      Enabler/Fodder               C
  4  Haunted Dead                                x2    B      Enabler/Fodder               U
  4  Odric, Lunarch Marshal                      x1    W      Payload/Payoff               R
```

### INSTANTS & SORCERIES (12)
```
CMC  Card                                       Qty   Color  Role                         Rar
  1  Eaten Alive                                 x1    B      Interaction/Disruption       C
  1  Tragic Slip                                 x2    B      Interaction/Disruption       C
  1  Village Rites                               x1    B      Infrastructure/Consistency   C
  2  Gather the Townsfolk                        x2    W      Enabler/Fodder               C
  2  Infernal Grasp                              x2    B      Interaction/Disruption       U
  3  Lingering Souls                             x2    W      Enabler/Fodder               U
  3  Rally the Peasants                          x2    W      Payload/Payoff               U
```

### OTHER SPELLS (4)
```
CMC  Card                                       Qty   Color  Role                         Rar
  2  Intangible Virtue                           x2    W      Payload/Payoff               U
  3  Cathar's Call                               x1    W      Engine/Outlet                U
  3  Wedding Announcement // Wedding Festivity   x1    W      Engine/Outlet                R
```

## SIDEBOARD (10)
```
Card                                        Qty   Color  Rar  Role / When to board in
Collective Brutality                        x1    B      R    vs control and combo, where W/B fields no counterspell: 'Target opponent reveals their hand. You choose an instant or sorcery card from it. That player discards that card' is this colour pair's only proactive answer to a spell before it is cast.
Valorous Stance                             x2    W      U    primarily on its second mode - 'Destroy target creature with toughness 4 or greater' answers the large ground wall a token board cannot fight through. The indestructible mode also saves Odric or an anthem carrier from targeted removal; the cube has only 4 sweepers, so that is the minor use.
Angelic Purge                               x2    W      C    vs the cube's 24 artifacts and 25 enchantments: 'Exile target artifact, creature, or enchantment'; a spare token pays the sacrifice cost, which this deck's 13 token-making copies always supply.
Invasion of Innistrad // Deluge of the Dead x1    B      R    vs graveyard decks (75 cards, 27% of the cube): the back face's '{2}{B}: Exile target card from a graveyard. If it was a creature card, create a 2/2 black Zombie creature token' is repeatable hate that also adds bodies; the front face is flash -13/-13 removal.
Sever the Bloodline                         x2    B      U    vs token/go-wide and recursion decks: 'Exile target creature and all other creatures with the same name as that creature' removes a whole token type at once, and exile beats undying and graveyard recursion.
Slayer of the Wicked                        x2    W      U    vs the cube's three largest non-Human tribes (Vampire 23, Zombie 15, Werewolf 13 = 51 cards): a 3/2 body plus 'you may destroy target Vampire, Werewolf, or Zombie'.
```

## ANALYSIS

### DECK IDENTITY

A W/B token-aggro deck that wins in the air. Nine of its twenty-three nonland copies (six distinct cards) make creature tokens, and it converts that width into damage with seven payoff copies: two Intangible Virtue, two Rally the Peasants, Crusader of Odric, Odric Lunarch Marshal, and Wedding Announcement's Wedding Festivity side. Lingering Souls at two copies supplies eight of the deck's eleven flying Spirit bodies across four casts, and Odric then reads those Spirits and grants the ENTIRE board flying every combat, so the ground half of the swarm attacks over blockers too. Black supplies five removal spells, Village Rites to turn a dying token into two cards, and Siege Zombie as a damage source that needs no combat at all.

### THE ODRIC LINE — WHY THIS BEATS A GROUND STALL

Odric, Lunarch Marshal reads *"At the beginning of each combat, creatures you control gain first strike until end of turn if a creature you control has first strike. The same is true for flying, deathtouch, double strike, haste, hexproof, indestructible, lifelink, menace, reach, skulk, trample, and vigilance."* Two of those keywords are already everywhere in this list:

- **flying** — 5 of the 23 nonland copies make flying Spirit tokens (Lingering Souls x2, Haunted Dead x2, Dauntless Cathar), 11 Spirits in total. One resolved Lingering Souls satisfies the condition permanently.
- **vigilance** — Intangible Virtue grants it to every creature token, and Odric then re-grants it to the 7 nontoken creature copies that Intangible Virtue's *"Creature **tokens** you control"* wording cannot reach.

The consequence is that the ground half of the board — Gather the Townsfolk's Humans, Wedding Announcement's Humans, Crusader of Odric, Siege Zombie — stops being blockable at all. A four-mana 3/3 turning a six-body board into six unblockable attackers is a bigger swing than any single anthem in this cube.

### THE VIGILANCE / SIEGE ZOMBIE INTERACTION

This one was wrong in two earlier drafts of this deck and the self-grill caught it both times, so it is worth stating precisely. Siege Zombie's cost is *"Tap three untapped creatures you control"* — a cost paid by tapping OTHER creatures, not a `{T}` symbol on Siege Zombie itself, so summoning sickness never gates it. Intangible Virtue gives every token **vigilance**, so a token that attacks does not tap. The two therefore do not compete: the same three tokens attack for damage AND pay Siege Zombie's cost in the same turn. The 1 life per activation is *additive* to combat damage, not traded against it.

That matters because it is the deck's only damage source that ignores blockers, lifegain and board stalls entirely — 1 of 23 nonland copies, and the sole mainboard answer to the `wide_boards` threat class.

### WHY THE ANTHEM COUNT IS FIVE, NOT TWO

The obvious reading of a token deck is "play the anthems". The count that actually matters here is how many cards convert board width into lethal damage, and the wording splits them into two groups:

| Card | Copies | Pumps | Applies to |
|---|---|---|---|
| Intangible Virtue | 2 | +1/+1 and vigilance | creature **tokens** only |
| Wedding Festivity | 1 | +1/+1 | **all** creatures |
| Rally the Peasants | 2 | +2/+0 until end of turn | **all** creatures |
| Crusader of Odric | 1 | is itself the board width | n/a |
| Odric, Lunarch Marshal | 1 | shares keywords | **all** creatures |

Three of the seven are not token-restricted, which is exactly why Crusader of Odric — a nontoken `*/*` — belongs in the deck. An earlier draft cut it on the claim that "both anthems only pump tokens", which was false about three of the five payoff copies then in the list.

### THE EMERGE TRAP

The archetype brief that seeded this build recommended Decimator of the Provinces as a go-wide finisher. Its emerge cost is *"reduced by that creature's mana value"*, and **a creature token's mana value is 0**. Sacrificing a 1/1 Spirit reduces `{6}{G}{G}{G}` by nothing. In a token deck emerge is not a discount at all — it is a nine-mana spell with three off-colour pips. The same arithmetic kills It of the Horrid Swarm. Both are recorded as excluded with that mechanism rather than as "too expensive".

### MANA NOTE — WHAT THE AUDIT CANNOT SEE

The printed pip split is 14 white / 9 black (61/39), but Lingering Souls' `Flashback {1}{B}` adds one black pip per copy of real demand that `mana_cost` does not carry, putting true demand at 14W/11B (56/44). The land base is built to the true figure — 7 Plains, 6 Swamp, Shattered Sanctum, Sunlit Marsh, 2 Evolving Wilds — which is why the audit reports a black *surplus* of 8pp rather than a deficit. Reading only the audit's number here would have produced a manabase that could not flash back the deck's single most important card.

### SLOT ALLOCATION

Nonland cards: **23**

| Slot | % of nonland | Count | Rationale |
|---|---|---|---|
| Interaction | 26.1% | 6 | Eaten Alive, Tragic Slip x2, Infernal Grasp x2, Cathar Commando. Above the 10-15% aggro band by 11.1pp and the deviation is deliberate: the kill mechanism is 'damage goes over the top of ground blockers', so the plan's single structural weakness is one large flier or a toughness-4+ wall, and Eaten Alive is additionally the deck's only answer to the 7 planeswalkers in the pool. Cutting to band would leave the air lane closeable by one card. |
| Threats/Payoffs | 60.9% | 14 | Gather the Townsfolk x2, Intangible Virtue x2, Crusader of Odric, Dauntless Cathar, Lingering Souls x2, Rally the Peasants x2, Haunted Dead x2, Odric Lunarch Marshal, Siege Zombie. Above the 45-55% band by 5.9pp. Disclosed deviation, thesis-grounded: in this pipeline the width and the payoffs are the same physical cards - a token maker is a threat, and the anthems that multiply it are payoffs - so booking each card exactly once still lands the bucket high. The alternative is to book generators twice, which is the arithmetic error this row replaces. |
| Engine & Infrastructure | 13.0% | 3 | Cathar's Call, Wedding Announcement, Village Rites. Above the 0-10% band by 3pp. Grounded: without Village Rites the list has no card draw at all, and Cathar's Call plus Wedding Announcement are the only two sources that make a body every turn with no further mana. |

*6 + 14 + 3 = 23 = nonland_total, recomputed from the deck array after the round-2 repair (-1 Mausoleum Guard, +1 Siege Zombie).*

### LAND & PIP MATH

- **Land target trace:** `{"base_lands": 17, "base_window": [2, 4], "base_p_window": 0.7945, "avg_mv": 2.4347826086956523, "reference_avg_mv": 2.5, "accel": 1, "adjustment": -0.254, "raw_target": 16.746, "clamped": false, "recommended_land_count": 17, "p_window_at_recommended": 0.7945}`
- **Recount after FILL:** Recomputed after each repair. Round-1 repair: avg MV 2.522, accel 1 -> 17. Round-2 repair: avg MV 2.435, accel 1 -> 17. The count never moved off the target the list was built to.
- **Deviation:** none - built to 17
- **Composition:** Shattered Sanctum is now in the list: 'This land enters tapped unless you control two or more other lands. {T}: Add {W} or {B}.' Per dossier.duals_by_pair.WB it is the pair's only untapped-capable dual, untapped from turn 3 onward. It costs one of the five rare/mythic slots, freed by cutting Bloodline Keeper (mythic) and Skirsdag High Priest (rare) from the mainboard. Sunlit Marsh is 'Land - Plains Swamp' with 'This land enters tapped' unconditionally and is now down to 1 copy. Evolving Wilds x2 produce no mana themselves; the mana audit does not credit them as coloured sources and this record adopts that convention (Challenger finding 10). Westvale Abbey was declined: it taps for {C} only, which this list's 23 coloured pips cannot afford at 17 lands.
- **Pips:** 14 white pips and 9 black pips (61% / 39%) across the 23 nonland cards. Lingering Souls' flashback is {1}{B} - ONE black pip - so two copies add 2 further black pips of real demand that mana_cost does not carry, putting true demand at 14W/11B (56/44). (The previous version of this field said 4 and 15W/12B; the Challenger caught the doubling and it is corrected here.) Land split: 7 Plains, 6 Swamp, 1 Shattered Sanctum, 1 Sunlit Marsh, 2 Evolving Wilds = 17. Using the audit's convention - Evolving Wilds not credited as a coloured source - production is 9 white / 8 black, a gap of 8.0pp on each colour, inside the 15pp tolerance. The list has no double-pip card at all, which is why 6 Swamps suffice for eleven points of black demand.

### COUNT-DEPENDENT VERDICTS

| Card | Verdict | Count against this list |
|---|---|---|
| Intangible Virtue | INCLUDE x2 | 9 of the 23 nonland copies across 6 distinct cards create creature tokens: Gather the Townsfolk x2, Lingering Souls x2, Dauntless Cathar, Haunted Dead x2, Cathar's Call, Wedding Announcement. Those nine cards produce at least 17 token bodies over a game, 11 of them flying Spirits. The anthem applies to every one of them. |
| Rally the Peasants | INCLUDE x2 | Damage added equals 2 x attackers. With 17+ token bodies produced and a thesis-turn board of 5-7 creatures, one cast adds 10-14 damage in a single combat step. |
| Crusader of Odric | INCLUDE x1 (reversed at Phase 9 round 1) | The original cut claimed '2 of the 2 static payoffs give it nothing'. That denominator was wrong: of the 7 payoff copies, exactly 3 are NOT token-restricted - Rally the Peasants x2 ('Creatures you control get +2/+0 until end of turn') and Wedding Festivity ('Creatures you control get +1/+1'). On a 5-7 creature board it is a 6/6 to 8/8 for {2}{W} and it costs no rare slot. |
| Odric, Lunarch Marshal | INCLUDE x1 (added at Phase 9 round 1) | 'creatures you control gain first strike until end of turn if a creature you control has first strike. The same is true for flying...' The flying condition is met by 5 of the 23 nonland copies (Lingering Souls x2, Haunted Dead x2, Dauntless Cathar - all produce flying Spirits), so on essentially any board past turn 3 the entire team flies. It also re-grants vigilance to the 7 nontoken creature copies Intangible Virtue cannot reach. |
| Siege Zombie | INCLUDE x1 (reversed at Phase 9 round 2) | My earlier cut, and its restated version, were both wrong and the Challenger showed why: Intangible Virtue grants tokens VIGILANCE, so an attacking token never taps and is still untapped to pay 'Tap three untapped creatures you control' in the same turn. The damage is additive, not traded. Against this list: on a 6-body board that is 2 damage per turn that no blocker, no lifegain and no fog interacts with, and after Blood Artist was cut the deck's non-combat damage sources went to 0 of 23. It is also the sole mainboard answer to the wide_boards coverage class, which was CONCEDED before it went in and is now covered. |
| Cathars' Crusade | CUT | {3}{W}{W} is 5 mana; 0 of the 23 nonland cards cost 5 and only 3 cost 4, so it sits a full mana above the ceiling this 17-land list was built to. The rare budget is also 5 of 5 spent. |
| Mentor of the Meek | CUT | 11 of 23 nonland copies make or are power-2-or-less creatures, so the trigger rate is high, but each draw costs {1}. Village Rites draws two for {B} plus one token, a strictly better rate against the same fodder denominator. |
| Voldaren Bloodcaster // Bloodbat Summoner | CUT | It triggers only on NONTOKEN creature deaths and needs five Blood tokens at once to transform; the final mainboard holds 7 nontoken creature copies, so transforming needs five of seven to die. Blood tokens are artifacts, so no anthem in this list pumps them. |
| Ghoulish Procession | CUT | Triggers once each turn on NONTOKEN creature deaths - 7 of 23 nonland copies qualify - and the 2/2 it makes has decayed ('can't block. When it attacks, sacrifice it at end of combat'), so it never accumulates the board width the seven payoff copies multiply. |
| Strength of Arms | CUT | The token clause needs an Equipment; this mainboard contains 0 Equipment out of 23 nonland cards. |
| Morbid Opportunist | CUT | Its once-per-turn draw would be live most turns given 17+ token bodies, but Village Rites converts the same dying token into TWO cards at instant speed for {B} rather than one card at 3 mana as a 1/3 body. |
| Gravecrawler | CUT | Recursion requires controlling a Zombie. The final mainboard has 3 Zombie copies (Siege Zombie, Haunted Dead x2) of 23 and creates 0 Zombie tokens, so the clause is live only while one of those 3 is on the battlefield. |
| Indulgent Aristocrat | CUT | '+1/+1 counter on each Vampire you control' - the final mainboard has 0 Vampire cards, since Blood Artist and Bloodline Keeper were both cut. |
| Captivating Vampire | CUT | Same denominator: 0 Vampire cards in the mainboard. |
| Lunarch Veteran // Luminous Phantom | CUT | 17+ creature ETBs make its lifegain trigger frequent, but 0 of the 23 nonland cards pay off lifegain. |
| Metallic Mimic | CUT | Naming Spirit would hit 11 of the roughly 17 tokens produced (Lingering Souls 8, Haunted Dead 2, Dauntless Cathar 1). The two earlier figures for this - 12, then 16 - were both wrong; 11 is the count against the final list. The cut stands only on the rare budget: 5 of 5 slots are spent. |
| Angel's Tomb | CUT | Creature ETBs are plentiful (17+), so the animate would be live most turns, but the resulting 3/3 is not a creature token, so Intangible Virtue x2 does not pump it - and Odric already gives every real body flying. |
| Demonic Taskmaster | CUT | Its upkeep eats one body per turn, and each body is worth base power plus 1 or 2 under the anthems and flies under Odric - it taxes exactly the resource the seven payoff copies multiply. |
| Cryptolith Rite | CUT (splash declined) | It would let 17+ token bodies tap for mana, but the final list took 0 green sources, so castable copies = 0. |
| Join the Dance | CUT (splash declined) | Same ceiling: 0 green sources in the final 17-land base. |
| Torens, Fist of the Angels | CUT (splash declined) | 7 of 23 nonland cards are creature spells (30%), so the trigger rate would be real, but 0 green sources means 0 castable copies. |
| Voice of the Blessed | CUT | Lifegain triggers in the final mainboard: 0 (Blood Artist was cut). It needs four counters to fly. |
| Skirsdag High Priest | CUT (reversed at Phase 9 round 1) | Morbid plus two untapped creatures gave it an assembly reliability weight of 0.5, the lowest in the list. At the same rare cost, Odric's flying grant applies to every body on the board rather than adding one 5/5, and carries a 0.8 weight. |
| Bloodline Keeper // Lord of Lineage | CUT (reversed at Phase 9 round 1) | It was the list's only {2}{B}{B} card while black printed-pip demand is 9 of 23 (39%); at 8 black sources in 17 lands the double pip was the worst-supported cost in the deck. Cutting it freed the slot Shattered Sanctum uses. |
| Mausoleum Guard | CUT (reversed at Phase 9 round 2) | Cut to make room for Siege Zombie. Count: at 4 mana with a 0.7 reliability weight it was the most expensive and least reliable of the 7 enabler copies, and its two flying Spirits are redundant with Odric, which grants flying to the whole board off any one of the 5 remaining Spirit-producing copies. |

### OTHER SLICE VERDICTS

| Card | Verdict | Grounds |
|---|---|---|
| Cathar's Call | INCLUDE x1 (added at Phase 9) | Challenger absence A3. 'At the beginning of your end step, create a 1/1 white Human creature token' with no per-body mana cost. It is the third of only three cards that make a body every turn without further mana, and the Engine bucket sat at the band floor (2 of 23) before it. |
| Eaten Alive | INCLUDE x1 (added at Phase 9) | Challenger absence A1 and finding 14. 'Exile target creature or planeswalker' for {B} once a spare token pays the additional cost, which 9 token-making copies supply. It is the list's only exile removal (Infernal Grasp destroys, Tragic Slip is -X/-X) and its only answer to the pool's 7 planeswalkers across all 50 cards. |
| Village Rites | INCLUDE x1 (added at Phase 9) | Challenger absence A4. The list had 0 draw spells in 23 nonland cards. 'sacrifice a creature. Draw two cards' at instant speed converts a token about to be swept into two cards and turns on morbid for Tragic Slip x2 the same turn. |
| Gisa's Bidding | CUT | {2}{B}{B} is double-black against 8 of 23 printed black pips (35%) and 7 black sources in 17 lands. Two 2/2 tokens for four mana is also the worst mana-per-body rate among the eight token makers - Lingering Souls makes four bodies for three mana plus a {1}{B} flashback. |
| Thraben Inspector | CUT | Challenger absence A8, contested. Its Clue is an ARTIFACT token, so neither Intangible Virtue pumps it and Odric does not grant it flying; as a 1/2 it is 1 of 23 slots for one point of board width. The turn-1 play rate it would have improved is already 48% after the repair, and goldfish keepable is 86%. |
| Fiend Hunter | CUT | {1}{W}{W} on turn three competes with Lingering Souls, Rally the Peasants and Wedding Announcement, all {2}{W}, in a list with 10 white sources; and 'When this creature leaves the battlefield, return the exiled card' gives the creature back, which a token deck's chump-blocks make likely. |
| Thalia, Heretic Cathar | CUT | Rare, and the 5 rare/mythic slots are spent. Her tax also adds 0 to board width, the quantity the seven payoff copies multiply. |
| Ecstatic Awakener // Awoken Demon | CUT | '{2}{B}, Sacrifice another creature: Draw a card' costs 3 mana per activation and eats a body worth base+1 or base+2 under the anthems. Village Rites does the same conversion for {B} and draws two. |
| Fleshtaker | CUT | {W}{B} on turn two demands both colours from a base with 10 white and 7 black sources, and its pump is on itself - one body - while all seven payoff copies pump the whole board. |
| Blood Artist | CUT (was in the pre-grill list) | Cut to make room for Odric and Crusader of Odric. Its drain is 1 per death, while Odric converts 5-7 bodies into evasive attackers every combat. The cut removes the only Vampire from the list, which is why Indulgent Aristocrat and Captivating Vampire now read 0 as their denominator. |

### SKELETON SELECTION (Phase 5B Step 0)

- **Archetype family:** aggro — Locked thesis default_role = aggressor, and the damage comes from breadth of permanents (token makers plus flat-cost anthems) rather than a clock protected by disruption - the slice's interaction is removal to clear blockers, which is aggro's use of it, not tempo's.
- **Chosen:** Sketch 2 — lens `most reach & evasion`
- **Judge grounds:** Only build that pairs named black removal (Infernal Grasp x2, Tragic Slip x1) answering 'the one blocker' with genuine added evasion (Bloodline Keeper's flying Vampires, Skirsdag High Priest's flying Demon) reinforcing the thesis line 'damage goes over the top of ground blockers', while keeping the Lingering Souls / Intangible Virtue / Wedding Festivity spine intact.
- **Rejected** (`lowest-curve / most explosive`, family aggro): Its keystone package named zero removal, so the thesis clause 'black supplies removal for the one blocker' had nothing attached; it also listed Collective Brutality in its rare budget after its own deviation note said it was cut.
- **Rejected** (`most resilient to sweepers`, family aggro): Real and thesis-consistent plan, but it spent Interaction 17.4% and Engine 13% on anti-wrath insurance the goldfish scenario never tests, at zero added evasion beyond the baseline Lingering Souls.
- **Harvested from rejected builds:** Mausoleum Guard (from `most resilient to sweepers`, Enabler/Fodder); Dauntless Cathar (from `most resilient to sweepers`, Enabler/Fodder); Collective Brutality (from `lowest-curve / most explosive`, Interaction/Disruption)
- **Weak keystones:** none

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:8  3:8  4:3
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.2: Odric, Lunarch Marshal@0.8, Crusader of Odric@0.8, Wedding Announcement // Wedding Festivity@0.6) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.5: Cathar's Call@0.8, Dauntless Cathar@0.7) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 50%  T2 93%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Siege Zombie
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Eaten Alive
  OK        noncreature_permanents: Cathar Commando
  CONCEDED  stack: W/B fields no counterspell in this pool, so nothing can be declared here; the clock is the answer - the thesis presents lethal on turn six. Collective Brutality's hand-disruption mode is the nearest proactive substitute and sits in the sideboard.
  CONCEDED  graveyard: The pool does contain graveyard answers - Soul-Guide Gryff ('When this creature enters, exile up to one target card from a graveyard') and Invasion of Innistrad's back face ('{2}{B}: Exile target card from a graveyard') - so this is a cost concession, not an absence one. The cheapest of them costs five mana in a list whose curve tops at four and whose thesis turn is six. The class is answered from the sideboard, where Invasion of Innistrad and Sever the Bloodline x2 (which exiles) sit.
```

- No WARN-tier flags after both Phase 9 repairs: curve PASS (1:4 2:8 3:8 4:3 across 23 nonland) and goldfish PASS (84% keepable, 89% three lands by turn 3, T1 play 50%, T2 93%).
- Assembly history: FAILED first at payoff p=0.58 on 3 copies; repaired with Rally the Peasants x2 to p=0.80; the round-1 grill repair added Odric (0.8) and Crusader of Odric (0.8) taking it to p=0.89 on 7 copies / 6.2 effective, where it remains after round 2. Enabler moved from 9 copies / 8.2 effective to 8 / 7.5 (p=0.93) when Mausoleum Guard was cut for Siege Zombie, still well clear of the 0.75 threshold.
- Coverage improved during the grill: wide_boards was CONCEDED in both pre-grill versions and is now covered outright by Siege Zombie ('Tap three untapped creatures you control: Each opponent loses 1 life'), which the two Intangible Virtues make free by granting tokens vigilance.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three mana sinks convert surplus lands into bodies or damage: Cathar's Call makes a 1/1 every end step for no further mana once attached; Dauntless Cathar's '{1}{W}, Exile this card from your graveyard: Create a 1/1 white Spirit creature token with flying'; and Lingering Souls' {1}{B} flashback, twice. Siege Zombie is a fourth outlet that needs no mana at all. Haunted Dead's '{1}{B}, Discard two cards' is a fifth but weaker one - only 5 of 23 nonland copies are cards this deck is happy to discard (Lingering Souls x2, Dauntless Cathar, Haunted Dead x2), so it is counted at that rate rather than claimed outright. |
| screw | mitigation | 12 of the 23 nonland cards cost 2 or less, so a two-land hand still deploys Eaten Alive, Tragic Slip, Siege Zombie, Village Rites, Cathar Commando, Gather the Townsfolk or Intangible Virtue on curve. Goldfish: 84% keepable, 89% three-lands-by-turn-3, 50% turn-1 play. Evolving Wilds x2 fetch whichever basic is missing. |
| decapitation | mitigation | The conversion step is redundant seven ways: Intangible Virtue x2 (static enchantments), Rally the Peasants x2 (instants), Crusader of Odric, Odric Lunarch Marshal and Wedding Festivity. No single answer removes the ability to turn width into lethal, and the token makers are 6 separate cards across 9 copies. Siege Zombie is a further line that does not need the combat step at all. |
| gas-out | mitigation | Village Rites ('sacrifice a creature. Draw two cards') is the dedicated refuel and is fed by 9 token-making copies. Lingering Souls x2 are each two casts from one card; Wedding Announcement's 'If you attacked with two or more creatures this turn, draw a card' is a condition this board meets by default; and Cathar's Call makes a body every turn from an empty hand. |
| raced | mitigation | Five removal spells (Tragic Slip x2 with morbid -13/-13, Infernal Grasp x2, Eaten Alive) answer the opposing clock's largest body, and Intangible Virtue grants every token vigilance so the board attacks and still blocks on the same turn - and, per the Challenger's correction, those same untapped tokens then pay Siege Zombie's cost for additive damage. The cost is priced: Infernal Grasp x2 takes 4 life off the racer's own total, which is why the sideboard carries no further life-loss removal. |
| disruption-fizzle | accepted | The critical turn is the Rally the Peasants alpha strike, and instant-speed removal in response can shrink the swing below lethal. Mitigating properly would mean maindecking Valorous Stance in place of a token maker or a payoff, cutting the board width that is this deck's identity; Valorous Stance x2 sits in the sideboard instead. The cost of accepting is bounded: Intangible Virtue x2, Wedding Festivity and Odric are static, so a fizzled Rally loses one turn of extra damage rather than the plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Chittering Host | Has no mana cost - it is the meld of Graf Rats and Midnight Scavengers ('exile them, then meld them into Chittering Host'). It cannot be cast from a deck and is not a real inclusion. |
| Decimator of the Provinces | Emerge is {6}{G}{G}{G}, three green pips outside the W/B core and outside the named splash_candidates; and emerge is 'reduced by that creature's mana value', which is 0 for a creature token, so a go-wide board discounts it by nothing. Hard cast is {10}. |
| It of the Horrid Swarm | Emerge {6}{G} is off-core and, as above, a sacrificed token reduces it by 0; hard cast {8} for a 4/4 plus two 1/1s is unreachable at this deck's land count. |
| Soul Separator | {3} to cast plus '{5}, {T}, Sacrifice this artifact' is 8 mana across two turns, and it 'Exile[s] target creature card from your graveyard' - creature tokens cease to exist rather than becoming graveyard cards, so this pipeline supplies it with almost nothing. |
| The Meathook Massacre | X is chosen by the caster, so at X=0 it is a {B}{B} permanent whose 'Whenever a creature you control dies, each opponent loses 1 life' drains off this list's 9 token-making copies. That count is real and the earlier 'symmetric' reason did not run it. The cut stands on the rare budget alone: the 5 rare/mythic slots are spent on Wedding Announcement, Odric Lunarch Marshal, Shattered Sanctum, Invasion of Innistrad and Collective Brutality. At X>=1 it also kills the 1/1 tokens, which are 11 of the roughly 17 bodies this list makes. |
| Killing Wave | 'For each creature, its controller sacrifices it unless they pay X life' - each player pays X per creature, and with 9 token-making copies producing 17 or more bodies this deck pays the most life at the table by a wide margin. The final list also runs no Blood Artist, so 0 of 23 nonland cards convert a mass death into drain. |
| Sorin, Imperious Bloodlord | Both +1 abilities affect exactly one creature and the -3 requires a Vampire creature card in hand; nothing on the card scales with board width, and it would consume one of five rare/mythic slots. |
| Liesa, Forgotten Archangel | {2}{W}{W}{B} is five mana with three coloured pips including a WW requirement, above the curve this build's land count supports, and it costs one of five rare/mythic slots. |
| Restoration Angel | The earlier 'no ETB triggers worth re-using' reason was wrong: Haunted Dead x2 reads 'When this creature enters, create a 1/1 white Spirit creature token with flying'. The cut stands on the rare budget - 5 of 5 rare/mythic slots are spent - and on the count that blinking 1 of 23 nonland cards for four mana is one token, while Odric Lunarch Marshal at the same {3}{W} puts every body in the list into the air. |
| Faith Unbroken | Aura-based exile - 'exile target creature an opponent controls until this Aura leaves the battlefield' - hands the creature back when the aura is answered, and at {3}{W} it is the slowest removal in the slice. |
| Heartless Summoning | 'Creatures you control get -1/-1' kills every 1/1 token this pipeline makes on arrival; the {2} discount applies only to creature SPELLS, not to the token makers that are sorceries and enchantments. |
| Archangel Avacyn // Avacyn, the Purifier | Castable here for {3}{W}{W} (its [R,W] identity comes only from the back face), but the back face reads 'it deals 3 damage to each other creature and each opponent' and transforms on the death of any non-Angel creature you control - which in this list is every one of the 17 or more token bodies. It would wipe its own team. It is also a mythic, and the 5 rare/mythic slots are spent. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.26 adj [MV 2.43 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  39.1%  prod  47.1%  gap  -8.0pp  [OK]
  W  demand  60.9%  prod  52.9%  gap  +8.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] base: cube_mainboard mainboard only
[PASS] copy_limits: commons/uncommons max 2 each, rares/mythics max 1 each - verified by _tmp_validate_build.py check 3 against cube_search.get_max_copies with per_rarity policy
[PASS] rare_mythic_cap: 5 total MB+SB. Used exactly 5: Wedding Announcement // Wedding Festivity (R, MB), Odric, Lunarch Marshal (R, MB), Shattered Sanctum (R, MB land), Invasion of Innistrad // Deluge of the Dead (R, SB), Collective Brutality (R, SB).
[PASS] basics: Plains 7 / Swamp 6 - format-supplied, exempt from copy limits, not present in the cube list
[PASS] colour_usability: every nonland card returns a non-None effective_cost.best_mode against core_colors [W,B] with splash_colors []. Rally the Peasants has printed color_identity [R,W] but is cast for {2}{W}; its {2}{R} flashback is simply unavailable and is never counted as a mode this deck uses.
[PASS] splash: splash_colors = [] in the final deck; all three Phase 3 green candidates declined at FILL.
[PASS] deck_size: 40 mainboard (23 nonland + 17 land), 10 sideboard
```