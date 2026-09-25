---
deck_name: "ub-terror-djinn-spells"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-08-14T22:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
10x Island
5x Swamp
2x Contaminated Aquifer   UB dual, enters tapped
```

### CREATURES (8)

```
CMC  Card                          Qty   Color  Role                              Rar
2    Haunting Figment              x2    U      Threat                            C
2    Vohar, Vodalian Desecrator    x2    UB     Engine/GY-fill                    U
3    Haughty Djinn                 x1    U      Threat/Payoff                     R
4    Ertai Resurrected             x1    UB     Threat/Interaction                R
7    Tolarian Terror               x2    U      Threat/Payoff                     C
```

### INSTANTS & SORCERIES (13)

```
CMC  Card                          Qty   Color  Role                              Rar
1    Cut Down                      x2    B      Interaction                       U
1    Rona's Vortex                 x2    U      Interaction                       U
2    Essence Scatter               x2    U      Interaction                       C
2    Impulse                       x2    U      Engine/Selection                  C
2    Tribute to Urborg             x2    B      Interaction                       C
3    Phyrexian Espionage           x2    U      Engine/Unconditional-fuel         C
6    Cosmic Epiphany               x1    U      Engine/Payoff                     R
```

### OTHER SPELLS (2)

```
CMC  Card                          Qty   Color  Role                              Rar
2    Founding the Third Path       x2    U      Engine/GY-fill                    U
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                         Rar
Knight of Dusk's Shadow       x1    B      Sideboard/Lifegain-hate                         U
Negate                        x2    U      Sideboard/Stack                                 C
Pilfer                        x1    B      Sideboard/Disruption                            C
Academy Wall                  x2    U      Sideboard/Anti-aggro                            C
Aether Channeler              x1    U      Sideboard/Permanent-answer                      R
Drag to the Bottom            x1    B      Sideboard/Sweeper                               R
Extinguish the Light          x2    B      Sideboard/Removal                               C
```

## ANALYSIS
### DECK IDENTITY
A Dimir tempo deck whose threats are priced by its own graveyard. Ten cheap instants and sorceries answer the opponent's board and, once spent, discount Tolarian Terror toward {1}{U} and grow Haughty Djinn's power. Founding the Third Path and Vohar actively bank instants and sorceries so the discount arrives on schedule rather than by accident. The kill is combat damage from a ward-2 5/5 Serpent and a scaling flier, protected by counterspells held up on the same turn the threat lands.

### HOW THE GRAVEYARD PRICES THE KILL

Tolarian Terror's printed cost is {6}{U}. Its oracle reads *"This spell costs {1} less to cast for
each instant and sorcery card in your graveyard"*, and the reduction only ever eats generic mana,
so the floor is {U}. **13 of the 23 nonland mainboard cards are instants or sorceries** (Cut Down 2,
Rona's Vortex 2, Tribute to Urborg 2, Essence Scatter 2, Impulse 2, Phyrexian Espionage 2,
Cosmic Epiphany 1). Founding the Third Path is an Enchantment - Saga and does **not** count itself.

| Instants/sorceries in yard | Tolarian Terror costs | Haughty Djinn is |
|---|---|---|
| 0 | {6}{U} | 0/4 |
| 2 | {4}{U} | 2/4 |
| 4 | {2}{U} | 4/4 |
| 5 | {1}{U} | 5/4 |
| 6+ | {U} | 6/4 or bigger |

Note what Haughty Djinn does and does not do: *"Instant and sorcery spells you cast cost {1} less"*
discounts 13 of 23 nonland cards, but Tolarian Terror is a **creature**, so the Djinn never makes a
Terror cheaper. The two payoffs read the same resource; only one of them feeds the other.

By turn 6 the deck has seen 13 cards, of which 13/40 x 13 = 4.2 are expected to be instants or
sorceries. Add Founding the Third Path chapter II (*"Target player mills four cards"*, aimed at
yourself - about 1.3 more at this density) and Vohar's per-turn loot, and a yard of 5-7 by the
thesis turn is the median rather than the good draw. That is a {1}{U} or {U} ward-2 5/5 with three
or four mana still open for Essence Scatter or a flashed Ertai Resurrected.

### THE INTERACTION SLOT IS THE ENGINE SLOT

This is the structural reason the deck exists. Cut Down, Rona's Vortex, Tribute to Urborg and
Essence Scatter are all answers, and every one of them that resolves is permanently -{1} on both
Terrors and +1/+0 on the Djinn. A tempo deck normally pays for its interaction in cards it does not
cast; here the interaction *is* the ramp. Tribute to Urborg is the purest expression: kicked for
{1}{U}, *"that creature gets an additional -1/-1 until end of turn for each instant and sorcery card
in your graveyard"* - with 5 in the yard it is -7/-7, priced off the same counter as the Terror it
is protecting.

### THE WEAKNESS THE GRILL FOUND, AND WHAT IT COST TO FIX

The Challenger's strongest finding was that the fuel was too reactive. Of the original 13 instants
and sorceries, **10 required an opponent-supplied target or trigger** - against a control or
permanent-based opponent that presents no creatures on turns 1-4, only 3 of 13 were castable, and
the discount engine simply never started. Cosmic Epiphany is circular in that spot: its yield is a
function of the very yard that failed to fill.

The repair was -2 Ertai's Scorn, +2 Phyrexian Espionage (*"Draw two cards"*, kicker {1}{B} to strip
a card). Board-independent fuel goes **3 of 13 to 5 of 13** with the denominator unchanged, and the
cost is real and worth naming: the mainboard gave up its only counterspell that answers a noncreature
spell. That answer now lives in the sideboard as Negate x2, which is what a sideboard is for.

### WHAT THIS DECK CANNOT DO

Two threat classes are conceded on verified grounds, not on hand-waving. **No card anywhere in this
cube attacks an opponent's graveyard** - a regex sweep of all 452 pool entries returns only cards
that use their own yard. And blue and black contain **zero** "destroy target artifact or enchantment"
effects, so a resolved noncreature permanent cannot be removed. That matters concretely: the cube
has four white enchantments that exile a creature on resolution (Citizen's Arrest, Leyline Binding,
Prayer of Binding, Temporary Lockdown), and each of them blanks a Tolarian Terror straight through
ward 2, because ward taxes targeting and the exile happens on an enters-the-battlefield trigger.
Bounce is the only post-resolution answer these colours have, which is why Aether Channeler
(*"Return another target nonland permanent to its owner's hand"*) earned a sideboard slot and the
fifth rare.

### SIDEBOARDING NOTE - BOARD THE MANA TOO

Extinguish the Light x2 and Drag to the Bottom x1 each cost {2}{B}{B} against a manabase built for
single-B (7 black sources). When any of them comes in, bring **-1 Island / +1 Swamp** with it,
taking black to 8 sources. Drag to the Bottom's domain count on this manabase is X = 3: the basic
land types available are Island and Swamp, and Contaminated Aquifer is `Land - Island Swamp`, so it
supplies both of those rather than a third. At -3/-3 it kills this deck's own Haunting Figment (2/1),
Vohar (1/2) and Ertai Resurrected (3/2) and spares Tolarian Terror (5/5) and Haughty Djinn (*/4) -
which is exactly why it is a boarded sweeper and not a maindeck one.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:4  2:12  3:3  4:1  6:1  7:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 5.5: Haunting Figment@0.6, Haunting Figment@0.6, Cosmic Epiphany@0.5, Ertai Resurrected@0.8) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 17 copies (effective 16.4: Vohar, Vodalian Desecrator@0.7, Vohar, Vodalian Desecrator@0.7) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 55%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The mainboard answers a wide board only one creature at a time (Cut Down, Tribute to Urborg, Essence Scatter); mitigating would mean maindecking Drag to the Bottom, whose -X/-X also kills this deck's own Haunting Figments and Vohars and does nothing to a single large threat. It is in the sideboard instead.
  OK        single_large_threat: Tribute to Urborg, Rona's Vortex, Essence Scatter, Ertai Resurrected
  CONCEDED  noncreature_permanents: Blue and black in this cube contain no 'destroy or exile target artifact/enchantment' effect, so the mainboard cannot remove a resolved one; it answers them on the stack with Ertai Resurrected ('Counter target spell, activated ability, or triggered ability'). Bounce is the colours' only post-resolution answer and it is a sideboard card: Aether Channeler ('Return another target nonland permanent to its owner's hand'), which is also the only way to free a Tolarian Terror exiled by one of the cube's four white exile-enchantments. Maindecking it would spend a Threats slot on a 2/1 that is blank in most matchups.
  OK        stack: Essence Scatter, Ertai Resurrected
  CONCEDED  graveyard: A probe across the entire cube pool found no card in any colour that exiles or otherwise attacks an opponent's graveyard; this threat class is unanswerable by every deck in this environment, not just this one.
```
- No WARN-tier flags: curve and goldfish both returned PASS.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands convert directly into spells, all of them mainboard: Cosmic Epiphany ({4}{U}{U}, draws 5-7 off a stocked yard) is the top-end sink; Rona's Vortex has a {2}{B} kicker that upgrades bounce to a permanent bottom-of-library answer; Tribute to Urborg has a {1}{U} kicker that turns -2/-2 into -7/-7; Phyrexian Espionage has a {1}{B} kicker that adds a discard; and Vohar's {T} loot turns every idle turn into a fresh card plus a banked instant. Five mana sinks across 23 nonland cards. |
| screw | mitigation | 8 distinct names / 16 copies of the 23 nonland cards cost 1 or 2 mana (Cut Down x2 MV1, Rona's Vortex x2 MV1, Haunting Figment x2 MV2, Tribute to Urborg x2 MV2, Essence Scatter x2 MV2, Impulse x2 MV2, Founding the Third Path x2 MV2, Vohar x2 MV2), so two-land hands function; Impulse x2 digs four deep for land three, and the goldfish simulation reports 87% keepable hands and 88% three-lands-by-turn-3. (Corrected per Challenger finding 10 - the earlier 'ten of the 23' matched neither the name count nor the copy count.) |
| decapitation | mitigation | The payoff is redundant rather than singular: Tolarian Terror x2 plus Haughty Djinn x1 plus Haunting Figment x2 plus Ertai Resurrected x1 is 6 physical threat cards (corrected per Challenger finding 4 - the earlier '7' came from the assembly payoff set, which also books Cosmic Epiphany from the Engine slot at weight 0.5). The assembly check returns p=0.85 of seeing a payoff by turn 6. Tolarian Terror also carries its own protection - 'Ward {2}' taxes every removal spell aimed at it - and Ertai Resurrected has flash, so it can be deployed with counterspell mana up. |
| gas-out | mitigation | Cosmic Epiphany is the designated refuel and it scales with the same resource as the kill - 'Draw cards equal to the number of instant and sorcery cards in your graveyard', which is 5-7 by turn 6. Vohar's '{T}: Draw a card, then discard a card' replaces a card every turn for free, Impulse x2 is self-replacing selection, and Founding the Third Path chapter III copies a spell already spent. Phyrexian Espionage x2 ('Draw two cards') is the second refuel and it is mainboard rather than boarded, which is a straight upgrade over the Silver Scrutiny it replaced. Consequence to state plainly: after the Phase 9 repair the SIDEBOARD has no dedicated refuel card - that slot bought the only post-resolution answer to a noncreature permanent (Aether Channeler), which is the correct trade but is a real cost in grindy boarded games. |
| raced | accepted | Against the cube's fastest clocks the mainboard has no sweeper and no lifegain, and the creature count is 6. Mitigating means maindecking Drag to the Bottom, whose 'each creature gets -X/-X' (X = 3 on this two-basic-type manabase) kills this deck's own Haunting Figments, Vohar and Ertai Resurrected, or maindecking Academy Wall's 0/5 defender body - and both cost the deck its identity as a proactive clock, since a slot spent on a wall is a slot not spent on an instant that prices down Tolarian Terror. The race is instead answered from the sideboard, where Drag to the Bottom x1 and Academy Wall x2 come in. |
| disruption-fizzle | mitigation | The critical turn is a Tolarian Terror landing with mana left over, which is what the cheap-interaction shape buys: Essence Scatter x2 ('Counter target creature spell') protects the deployment turn against the opposing blocker or racer, and Ertai Resurrected's flash ('Counter target spell, activated ability, or triggered ability') lets the answer be held up rather than committed. If the Terror is countered anyway the second copy costs the same discounted {1}{U}-{2}{U}, because a countered Terror goes to the graveyard as a CREATURE card and does not change the instant/sorcery count. Against noncreature disruption the answer is boarded: Negate x2. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Timely Interference | Legal in UB - best_mode returns a cast at {U} with the {1}{R} kicker declined - and a fine 1-mana cantrip instant that banks itself in the yard. It loses the slot to Phyrexian Espionage on being board-dependent at all ('Target creature gets -1/-0' is unqualified, so the deck's own 6 creatures satisfy it, but a board empty on both sides does not) and on its kicker being permanently dead off-colour where Espionage's {1}{B} is live. TOP ITERATION CANDIDATE. |
| Ertai's Scorn | CUT IN PHASE 9. {1}{U}{U} 'Counter target spell' was the only mainboard answer to a noncreature spell, but at MV 3 it was the most expensive card in an over-budget interaction slot, and its discount clause is opponent-controlled. Cut for Phyrexian Espionage to raise board-independent fuel from 3 of 13 to 5 of 13; the effect moved to the sideboard as Negate x2. |
| Silver Scrutiny | CUT IN PHASE 9 from the sideboard for Aether Channeler. A second refuel behind Cosmic Epiphany, where the deck's genuinely unanswered class was resolved noncreature permanents; spending the fifth rare on redundancy over a hole was the wrong trade. |
| Urborg Lhurgoyf | Named as a keystone in the archetype brief, but its oracle cost is {1}{G} with kicker {U} and/or {B} - a green card with BUG identity. Not castable in a two-colour UB deck at all. |
| Writhing Necromass | Cost reduction counts CREATURE cards in the graveyard. This list's yard is 13 instants and sorceries against 6 creature cards, so it would compete with Tolarian Terror for the same graveyard rather than share it - the two payoffs read different halves of the same resource and splitting a 40-card deck between them halves both. |
| Monstrous War-Leech | P/T equals the greatest mana value among cards in the yard. In a yard of MV 1-2 instants it is a 2/2 for {3}{B}, and its kicked mill four is aimed at a creature count this deck does not keep. |
| Eerie Soultender | Mills three, but the recursion clause returns only CREATURE cards from the graveyard - blank in a list whose graveyard value is instants and sorceries. |
| Djinn of the Fountain | 13 of 23 nonland cards trigger it and the exile-and-return mode is a genuine removal dodge, but at {4}{U}{U} it competes for the same turn as a discounted Tolarian Terror that costs a third as much and is two power bigger. |
| Rona, Sheoldred's Faithful | Drains on 13 of 23 nonland cards and recasts itself from the yard, which is real decapitation insurance. Rejected on mana only: {1}{U}{B}{B} is not payable on 7 black sources, and raising black to 9-10 would break the turn-3 {1}{U}{U} Haughty Djinn. It becomes live if the manabase is rebuilt around it. |
| Volshe Tideturner | The deck's accel_count is 0 and its {U} is spendable on 13 of 23 nonland cards plus two kicker costs, but the restriction excludes creature spells, so it accelerates neither Tolarian Terror nor Haughty Djinn - the two cards the thesis is named after. |
| Micromancer | Tutors an instant or sorcery with mana value exactly 1. This list runs 4 such copies (Cut Down x2, Rona's Vortex x2) of 23 nonland cards, so the tutor is live 4 of 23. |
| Talas Lookout | A 3-power flier that on death puts one card in hand and one in the yard, but {2}{U}{U} at MV 4 is a double-blue cost on the same turn the deck wants to deploy and hold up an answer. |
| Academy Wall | Kept in the SIDEBOARD, not the mainboard. Its loot keys off 13 of 23 nonland cards, but a Defender does not advance a kill mechanism that is combat damage; it comes in against the cube's fastest clocks where a 0/5 body brick-walls the ground. |
| Blight Pile | Drain scales with defenders you control; this mainboard runs 0 defenders across 23 nonland cards, so X = 0. |
| Vodalian Hexcatcher | Merfolk lord and sacrifice-a-Merfolk counter. This list runs 2 Merfolk (Vohar x2) of 23 nonland cards, and sacrificing Vohar trades the deck's only repeatable yard-filler for a tax effect. |
| The Phasing of Zhalfir | Chapter III destroys all creatures, which kills this deck's own Tolarian Terrors and Djinns; chapters I-II are a phase-out that the sideboard's Aether Channeler covers more cheaply and without the drawback. |
| Sheoldred, the Apocalypse | A 4/5 deathtouch that drains 2 per opponent draw is the strongest card in the colours, but at {2}{B}{B} on a 7-black-source manabase built for single-B it is not reliably castable, and it would consume a rare slot the deck spent on Haughty Djinn, Ertai Resurrected and Cosmic Epiphany - all of which read the graveyard the archetype is built on. |
| Liliana of the Veil | The +1 fills your own yard, but it is symmetric discard in a deck that wants to hold instants for the opponent's turn, and it costs a mythic slot against a hard 5-card rare/mythic cap already fully allocated. |
| Defiler of Dreams | Discounts blue PERMANENT spells; 9 of the 23 nonland cards are blue permanents, and the payoff resource here is instants and sorceries, which it does not touch. |
| Academy Loremaster | Its symmetric extra draw taxes SPELLS by {2} - it directly taxes the 13 of 23 instants and sorceries that are this deck's engine. |
| Crystal Grotto | Excluded from the manabase. It taps for {C} freely and needs an extra {1} for coloured mana, which is unpayable on the turn-3 {1}{U}{U} Haughty Djinn; the scry 1 does not compensate on a 17-land base with a hard double-blue requirement. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.20 adj [MV 2.65 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  25.0%  prod  41.2%  gap -16.2pp  [OK]
  U  demand  75.0%  prod  70.6%  gap  +4.4pp  [OK]
```


## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard only - every card verified present in working_pool by exact name
commons_uncommons: max 2 copies each - Tolarian Terror 2, Haunting Figment 2, Cut Down 2, Rona's Vortex 2, Tribute to Urborg 2, Essence Scatter 2, Impulse 2, Founding the Third Path 2, Vohar 2, Phyrexian Espionage 2, Contaminated Aquifer 2, Negate 2, Extinguish the Light 2, Academy Wall 2, Pilfer 1, Knight of Dusk's Shadow 1 - all at or under the cap
rares_mythics: max 1 copy each - Haughty Djinn 1, Ertai Resurrected 1, Cosmic Epiphany 1, Aether Channeler 1, Drag to the Bottom 1
rare_mythic_total_cap: 5 of 5 used (3 mainboard: Haughty Djinn, Ertai Resurrected, Cosmic Epiphany; 2 sideboard: Aether Channeler, Drag to the Bottom) - exactly at the user's cap
basics: format-supplied, unlimited - 10 Island, 5 Swamp
```
