---
deck_name: "ub-wall-colony-defenders"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-08-14T23:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
9x Swamp
6x Island
2x Contaminated Aquifer   UB dual, enters tapped
```

### CREATURES (13)

```
CMC  Card                          Qty   Color  Role                              Rar
1    Walking Bulwark               x2    C      Engine/Attack-unlock (defender)   U
2    Blight Pile                   x2    B      Threat/Payoff (defender)          U
2    Coral Colony                  x2    U      Engine/Mill wincon (defender)     U
3    Academy Wall                  x2    U      Engine/Card-flow (defender)       C
3    Gibbering Barricade           x2    B      Engine/Defender body (defender)   C
4    Sheoldred, the Apocalypse     x1    B      Threat/Payoff                     M
4    Shield-Wall Sentinel          x2    C      Engine/Defender tutor (defender)  C
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                          Qty   Color  Role                              Rar
1    Cut Down                      x2    B      Interaction                       U
1    Shore Up                      x2    U      Interaction/Protect + untap the drainC
2    Essence Scatter               x1    U      Interaction                       C
2    Tribute to Urborg             x2    B      Interaction                       C
3    Phyrexian Espionage           x1    U      Engine/Card draw                  C
4    Extinguish the Light          x2    B      Interaction                       C
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                         Rar
Battlefly Swarm               x2    B      Sideboard/Anti-flier                            C
Impede Momentum               x2    U      Sideboard/Anti-evasive                          C
Negate                        x2    U      Sideboard/Stack                                 C
Aether Channeler              x1    U      Sideboard/Permanent-answer                      R
Choking Miasma                x2    B      Sideboard/Asymmetric sweeper                    U
Liliana of the Veil           x1    B      Sideboard/Non-targeted removal                  M
```

## ANALYSIS
### DECK IDENTITY
A Dimir control deck whose board is its clock. Twelve creatures with Defender wall the ground while two outlets read that same number as X: Blight Pile's '{2}{B}, {T}: Each opponent loses X life' and Coral Colony's '{1}{U}, {T}: Target player mills X cards'. Neither needs to attack, so the deck never has to win a combat step it is built to refuse. Walking Bulwark is the third axis - it grants a defender haste and lets it attack assigning damage equal to its TOUGHNESS, turning 4- and 5-toughness walls into a lethal alpha strike when the drain math falls a turn short.

### THE ONLY NUMBER THAT MATTERS

Both win conditions read the same variable. Blight Pile: *"{2}{B}, {T}: Each opponent loses X life,
where X is the number of creatures with defender you control."* Coral Colony: *"{1}{U}, {T}: Target
player mills X cards, where X is the number of creatures you control with defender."* X is the
deck.

**This mainboard runs 12 creatures with Defender out of 23 nonland cards, and 12 is the pool's
hard ceiling.** The entire cube contains nine cards with Defender; three of them are off-colour
(Clockwork Drawbridge and Wingmantle Chaplain are white, Floriferous Vinewall is green). The six
castable in UB are all in this list at the maximum legal 2 copies each. There is no thirteenth
defender to add — the count-dependent thesis is running at the pool's theoretical maximum.

| Defender | Qty | Cost | Toughness |
|---|---|---|---|
| Walking Bulwark | 2 | {1} | 3 |
| Blight Pile | 2 | {1}{B} | 3 |
| Coral Colony | 2 | {1}{U} | 4 |
| Academy Wall | 2 | {2}{U} | 5 |
| Gibbering Barricade | 2 | {2}{B} | 4 |
| Shield-Wall Sentinel | 2 | {4} | 3 |

### THE CLOCK, AT THE HONEST MEDIAN

The grill's sharpest finding was that my first draft claimed "a realistic turn-7 board of 5-6
defenders." That is a 32.5%-to-12.0% outcome, not the median. Recomputed on this list:
**E[defenders drawn] = 3.90 by turn 7 and 4.50 by turn 9**, and drawn is an upper bound on
deployed.

The thesis turn survives the correction, but for a different reason than I first gave — **X grows**.
A Blight Pile cast on turn 2 and activated from turn 4 at X = 2, 3, 3, 4, 4, 4 is cumulative
2, 5, 8, 12, 16, **20 by turn 9**, off a single copy at median board size. The deck does not need
the 10-12-per-turn double-Pile draw to be on schedule; that draw is the fast game, not the plan.

### THE THREE AXES COMPETE FOR THE SAME BODIES

A subtlety worth stating because it is easy to miss: **attacking taps the wall.** Any Blight Pile
or Coral Colony you send in as a Walking Bulwark attacker forfeits its `{T}` activation that turn.
The axes are independent in the sense that answering one does not answer the others — but they are
not additive on the same turn, and the Bulwark alpha strike is the one turn this deck cannot block.

Walking Bulwark's cost curve, from the actual toughness census (44 total across 12 defenders):

| Walls unlocked | Mana | Max damage |
|---|---|---|
| 2 | {4} | 10 |
| 3 | {6} | 14 |
| 4 | {8} | 18 |

Compare two Blight Pile activations: **{2}{B} + {2}{B} = 6 mana for 12 unblockable, uninteractable
life loss.** Bulwark is strictly worse than the drain when the drain is available. Its job is to
close the last few points and to exist as a kill this deck still has when both Piles are gone.

### SHORE UP IS THE BEST CARD IN THE DECK AND IT IS A COMMON

Added during the grill. *"Target creature you control gets +1/+1 and gains hexproof until end of
turn. **Untap it.**"* Two jobs on one `{U}` instant:

1. **It doubles the clock.** Blight Pile is a `{T}` ability — one activation per turn. Shore Up
   untaps it. At the median X of 4 that is +4 life loss for one mana, a 100% increase on the turn.
   It is live on all four tap outlets in the deck (Blight Pile ×2, Coral Colony ×2).
2. **It answers the deck's one real vulnerability.** Blight Pile is summoning-sick the turn it
   lands, so it can be removed at sorcery speed before it ever activates. Hexproof at instant speed
   is the direct answer, and it costs `{U}` rather than the `{1}{U}{U}` a counterspell would.

### GIBBERING BARRICADE IS IN FOR THE BODY, NOT THE ABILITY

The shape judge flagged this and it is worth repeating in the open: *"{2}{B}, Sacrifice a creature:
You gain 1 life and draw a card"* **reduces the very number both win conditions read.** At a
6-defender board, one sacrifice costs 1 damage per Pile activation and 1 mill per Colony activation
— permanently, for one card and one life. That is a bad trade and it gets worse the longer the game
goes, which is exactly the axis this deck wins on.

It is still correctly included, because the alternative is worse: cutting it takes the defender
count from **12 to 10**, which is −17% on X for every activation of both win conditions for the
rest of the game, and there is no thirteenth defender to replace it with. It is a `{2}{B}` 2/4 that
ties for the second-best Walking Bulwark target. The ability is retained only as an escape valve —
saving a creature already dying to targeted removal, where X was going to drop anyway.

### CHOKING MIASMA IS THE PERFECT SIDEBOARD CARD FOR THIS EXACT DECK

*"All creatures get -2/-2 until end of turn."* Checked against this deck's own toughness census:
Blight Pile 3/3, Walking Bulwark 0/3, Coral Colony 1/4, Academy Wall 0/5, Gibbering Barricade 2/4,
Shield-Wall Sentinel 1/3, Sheoldred 4/5 — **all 13 creatures survive, X is unchanged**, while it
kills 61 of the cube's 157 unique creatures on toughness alone.

Note it is in the deck for its **unkicked** mode. Its printed colour identity is B/G because of
*"Kicker {G}"*, but the `{G}` is permanently declined and it is cast at `{1}{B}{B}`.

Contrast Drag to the Bottom, which is why a rare slot went unspent: at domain X = 3 on this
manabase, its -3/-3 kills **6 of this deck's own 12 defenders**, including both Blight Piles.

### WHAT THIS DECK CANNOT DO

**The air.** Twelve ground walls block none of the cube's 51 evasion cards (20.7% density) — this
is the deck's structural hole and the sideboard spends four slots on it (Battlefly Swarm ×2, whose
`{B}`: deathtouch lets a 1/1 trade with any flier, and Impede Momentum ×2 for three turns of
stun). **Lifegain is deliberately unanswered**: 22 cube cards gain life, which directly fights a
drain clock, but Knight of Dusk's Shadow was cut to make room for the air package — evasion is 51
cards to lifegain's 22, and the larger class wins the slots.

**Resolved noncreature permanents.** Blue and black in this cube have no destroy-artifact or
destroy-enchantment effect at all; bounce is the only answer, boarded as Aether Channeler.

**Smash to Dust.** `{1}{R}`, common, 2 copies in the cube: *"Destroy target creature with defender."*
A printed hoser aimed at exactly this deck, and these colours have no answer to it.

### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:6  2:7  3:5  4:5
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 4.9: Coral Colony@0.6, Coral Colony@0.6, Walking Bulwark@0.5, Walking Bulwark@0.5, Sheoldred, the Apocalypse@0.7) → p=0.88 (need ≥ 0.75)
  PASS  enabler: 10 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 71%  T2 97%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Academy Wall, Gibbering Barricade, Coral Colony, Shield-Wall Sentinel, Blight Pile
  OK        single_large_threat: Extinguish the Light, Essence Scatter, Tribute to Urborg, Sheoldred, the Apocalypse
  CONCEDED  noncreature_permanents: Blue and black in this cube contain no 'destroy or exile target artifact/enchantment' effect, so a resolved one cannot be removed by the mainboard; the only post-resolution answer in these colours is bounce, boarded as Aether Channeler ('Return another target nonland permanent to its owner's hand'). Maindecking it would cost a defender slot, and every defender slot is +1 to the X that both win conditions multiply against.
  OK        stack: Essence Scatter
  CONCEDED  graveyard: A probe across the entire cube pool found no card in any colour that exiles or otherwise attacks an opponent's graveyard; this threat class is unanswerable by every deck in this environment.
```
- No WARN-tier flags: curve and goldfish both returned PASS.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This deck is close to flood-proof by construction: its win conditions are ACTIVATED abilities that consume mana every turn forever. Blight Pile is {2}{B} per activation, Coral Colony is {1}{U} per activation, Walking Bulwark is {2} per creature unlocked, Gibbering Barricade is {2}{B} per use, and Shield-Wall Sentinel converts a flooded draw into a defender. A 10-land board is 2 Pile activations plus a Colony in one turn. |
| screw | mitigation | 13 of the 23 nonland cards cost 2 or less (Walking Bulwark x2 and Cut Down x2 and Shore Up x2 at MV1, Coral Colony x2 and Blight Pile x2 and Tribute to Urborg x2 and Essence Scatter x1 at MV2), and a two-land hand still deploys a wall on turns 1-2 that buys the turns needed to find land three. The goldfish simulation reports 86% keepable hands and 88% three-lands-by-turn-3. Blight Pile at {1}{B} means the win condition itself is a two-drop. |
| decapitation | mitigation | RESTATED AT SINGLE-COPY AVAILABILITY per Challenger finding 6, which correctly showed every quantity in my first draft assumed drawing BOTH copies of a 2-of (P is about 0.135 by turn 9). The mechanism is redundant and the axes are real, but here are the honest numbers. Axis 1: Blight Pile x2, and P(zero Pile AND zero Shield-Wall Sentinel by turn 9) is about 0.138 - roughly one game in seven has no drain and no tutor for one. Axis 2: ONE Coral Colony at median X of 4 against a ~33-card library is about 8 turns, not 3; two Colonies at X=6 is the three-turn line and that requires both copies. Axis 3: ONE Walking Bulwark still unlocks as many walls as you can pay {2} each for, so it is not copy-gated, but the 18-damage figure assumes both Academy Walls (5 toughness each) are on board. UNDISCLOSED CONFLICT, now disclosed: attacking TAPS the wall, so any Blight Pile or Coral Colony sent in as a Bulwark attacker forfeits its {T} activation that turn - the axes compete for the same bodies and cannot simply be summed. Shore Up x2 is the cheapest structural answer to all of this: it protects the one Pile you do have with hexproof and untaps it for a second activation. |
| gas-out | mitigation | Academy Wall x2 loots on 10 of 23 nonland cards (Cut Down 2, Tribute to Urborg 2, Extinguish the Light 2, Shore Up 2, Essence Scatter 1, Phyrexian Espionage 1 = 10), Phyrexian Espionage draws two unconditionally, Gibbering Barricade x2 draws a card when it must be used, and Sheoldred gains 2 life on every one of those draws. More fundamentally an empty hand is not a loss state here: the win conditions are permanents on the battlefield with repeatable abilities, so a hellbent turn 12 still drains for 6. |
| raced | mitigation | Racing this deck on the ground is the matchup it is built to win - 12 blockers with toughness 3, 3, 4, 4, 5 and 3 across the six defender cards, plus Sheoldred's 4/5 deathtouch body, plus Extinguish the Light x2 gaining 3 life each against a cheap threat. The real racing risk is the air, which is stated honestly under disruption-fizzle and answered from the sideboard: Battlefly Swarm x2 ('Flying / {B}: This creature gains deathtouch until end of turn') and Impede Momentum x2 ('Tap target creature and put three stun counters on it') are four dedicated air answers, raised from two per Challenger finding 8. |
| disruption-fizzle | mitigation | CONVERTED FROM 'accepted' TO 'mitigation' per Challenger finding 2, which correctly showed my stated cost was false - I claimed any mitigation would cost -1 Interaction or -1 defender, and it does not. The critical turn is a Blight Pile activation, and the specific vulnerability is real: Blight Pile is a {T} ability, so it is summoning-sick the turn it lands and answerable at sorcery speed before it ever activates. The mitigation is Shore Up x2 ('Target creature you control gets +1/+1 and gains hexproof until end of turn. Untap it.'): for {U} at instant speed it makes the Pile an illegal target for removal, and on the turns nobody interacts it instead untaps the Pile for a second activation. It cost 1 Essence Scatter and 1 Phyrexian Espionage, not a defender - the defender count is unchanged at 12. I considered and declined the Challenger's proposed -2 Essence Scatter / +2 Ertai's Scorn swap ('Counter target spell', a strict superset of Essence Scatter's creature-only text): its real cost, which the Challenger itself identified, is {U}{U} on only 8 blue sources of 17, against a deck that also wants {1}{U} free every turn for Coral Colony - and Ertai's Scorn does not answer a removal spell aimed at a Pile that has already resolved, which Shore Up does. Noncreature-spell answers remain boarded as Negate x2. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Knight of Dusk's Shadow | CUT IN PHASE 9 from the sideboard. 'Your opponents can't gain life' is the answer to the class that most directly invalidates a drain clock (22 cube cards, 8.9% density), but the slots went to the air package instead: evasion is 51 cards and twelve ground walls block none of them. This is the first card to bring back if the local metagame is lifegain-heavy. |
| Ertai Resurrected | CUT IN PHASE 9 from the sideboard for Impede Momentum. Flash counter-or-destroy is genuinely flexible and it is the only card in the colours that can counter an activated or triggered ability, but at {2}{U}{B} it answers one thing once, where two Impede Momentum answer two evasive attackers for three turns each against the cube's largest threat class. |
| Braids, Arisen Nightmare | CUT IN PHASE 9. Its 'you may sacrifice an artifact, creature, enchantment, land, or planeswalker' is the same anti-synergy the judge flagged on Gibbering Barricade - sacrificing a defender lowers X on both win conditions. Saccing lands instead is fine, but a grind engine that fights its own deck is not worth a rare slot here. |
| Rona's Vortex | CUT IN PHASE 9 from the sideboard. A {U} bounce that kicks to bottom-of-library is a clean answer to one evasive threat, but Impede Momentum's three stun counters buy three turns for the same mana without the card going back to a hand that can recast it. |
| Founding the Third Path | CUT AT THE JUDGE'S OBJECTION. Chapter I free-casts an instant or sorcery of mana value 1 or 2, and only 7 of the 23 nonland cards qualify; chapter II's mill four is strictly worse than one Coral Colony activation at X=5-6. Decisively, it adds 0 to the defender count, so both slots were -2 to X. |
| Tolarian Terror | Costs {1} less per INSTANT AND SORCERY card in the graveyard; this list runs 9 of 23. It has no Defender, so a slot spent on it is -1 to X on both win conditions - the cheap fat is not free here, it is paid for in clock. |
| Writhing Necromass | Costs {1} less per CREATURE card in the graveyard and this deck is 13 creatures of 23, so the discount is real. Rejected for the same reason as Tolarian Terror: no Defender, so it is -1 to X, and this deck does not actually want its creatures in the graveyard - it wants them on the battlefield being counted. |
| Drag to the Bottom | This is why a rare slot is left unspent. At domain X = 3 on this manabase (Island + Swamp = 2 basic types; Contaminated Aquifer is Land - Island Swamp and supplies both, not a third), its -3/-3 kills 6 of this deck's own 12 defenders: both Blight Piles (3/3), both Walking Bulwarks (0/3) and both Shield-Wall Sentinels (1/3) - the entire primary win condition. |
| The Phasing of Zhalfir | Chapters I and II phase out a nonland permanent, which is a fine answer, but read ahead cannot prevent reaching chapter III - 'Destroy all creatures' - which kills the twelve defenders that ARE the win condition. |
| Karn's Sylex | '{X}, {T}, Exile: Destroy each nonland permanent with mana value X or less.' At any X large enough to matter it eats this deck's own board: X=2 alone kills Walking Bulwark (MV1), Coral Colony (MV2) and Blight Pile (MV2). |
| Tyrannical Pitlord | Named as a keystone by the rejected 'proactive finisher' sketch and rejected by the judge: a 6/6 flier that does not have Defender, does not raise X, and whose chosen creature still cannot attack without a separate Walking Bulwark activation - and when it leaves the battlefield you sacrifice that creature, which is -1 to X. |
| Wingmantle Chaplain | The archetype's dream card - 'create a 1/1 white Bird creature token with flying for each creature with defender you control', which would both scale with X and answer the air. It is {3}{W} and there is no white source in this manabase; the splash filter correctly rejected white. |
| Clockwork Drawbridge / Floriferous Vinewall | The cube's other two defenders. White and green respectively, so neither is castable in UB. Their absence is why 12 is the hard ceiling on X rather than a choice. |
| Ertai's Scorn | The grill proposed -2 Essence Scatter / +2 Ertai's Scorn as a slot-neutral upgrade ('Counter target spell' is a superset of 'Counter target creature spell'). Declined on mana: {U}{U} on only 8 blue sources of 17, against a deck that also wants {1}{U} free every turn for Coral Colony - and Ertai's Scorn cannot answer a removal spell aimed at a Blight Pile that has already resolved, which Shore Up can. |
| Silver Scrutiny | A scaling flood sink at {X}{U}{U} that touches no creature, so it does not fight the deck. It loses its slot because this deck's flood mitigation is already structural - every win condition is an activated ability that eats surplus mana forever. |
| Tidepool Turtle | A 2/5 body with the right toughness for a wall deck, but it does NOT have Defender, so it adds nothing to X, and '{2}{U}: Scry 1' competes for the same mana as a Blight Pile activation. |
| Vohar, Vodalian Desecrator | A repeatable looter, but its drain clause requires discarding an instant or sorcery and this list runs only 9 of 23; more decisively it is a 1/2 with no Defender in a deck where every creature slot is a unit of clock. |
| Crystal Grotto | Excluded from the manabase. Its {1} tax on coloured mana competes directly with the activated abilities that ARE this deck's clock - a land that makes Blight Pile cost {3}{B} in practice is a land that shrinks the clock. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.15 adj [MV 2.39 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  63.6%  prod  64.7%  gap  -1.1pp  [OK]
  U  demand  36.4%  prod  47.1%  gap -10.7pp  [OK]
```


## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard only - every card verified present in working_pool by exact name
commons_uncommons: max 2 copies each - Blight Pile 2, Walking Bulwark 2, Coral Colony 2, Academy Wall 2, Gibbering Barricade 2, Shield-Wall Sentinel 2, Cut Down 2, Tribute to Urborg 2, Extinguish the Light 2, Shore Up 2, Contaminated Aquifer 2, Battlefly Swarm 2, Impede Momentum 2, Choking Miasma 2, Negate 2, Phyrexian Espionage 1, Essence Scatter 1 - all at or under the cap
rares_mythics: max 1 copy each - Sheoldred, the Apocalypse 1 (mainboard); Liliana of the Veil 1, Aether Channeler 1 (sideboard)
rare_mythic_total_cap: 3 of 5 used (Sheoldred mainboard; Liliana of the Veil and Aether Channeler sideboard). REWRITTEN per Challenger finding 4, which correctly objected that the first version justified the unspent slots by naming only 3 rares and generalising. I ran the actual scan: there are 30 UB-castable rares/mythics in the pool (the Challenger's own estimate of 24 was itself low). Spending one of them on Liliana of the Veil is the direct result of that finding - her '-2: Target player sacrifices a creature' is NON-TARGETED, the only thing in these colours that answers a ward or hexproof creature, and a planeswalker behind twelve 3-to-5-toughness blockers is close to unassailable. Of the remaining 27: seven destroy or shrink this deck's own board (Drag to the Bottom -3/-3 kills 6 of 12 defenders, The Phasing of Zhalfir III destroys all creatures, Karn's Sylex at any useful X eats the same board, Braids and Shadow-Rite Priest and Golden Argosy and Tyrannical Pitlord all sacrifice or exile creatures); eleven are payoffs for archetypes this deck is not (Haughty Djinn, Cosmic Epiphany, Vodalian Hexcatcher, Vesuvan Duplimancy, Defiler of Dreams, Defiler of Flesh, Academy Loremaster, The Cruelty of Gix, The Raven Man, Evolved Sleeper, Sphinx of Clear Skies); three are lands or mana rocks this 17-land two-colour base does not want (Plaza of Heroes, Thran Portal, Timeless Lotus); and the genuinely arguable remainder is Ertai Resurrected, Silver Scrutiny, Karn Living Legacy, Weatherlight Compleated, Vodalian Mindsinger and Stronghold Arena - each a fine card that would have to displace a sideboard slot currently answering a named threat class (evasion 51 cards, noncreature permanents 33, sweepers 6). Two slots stay unspent because the cap is a maximum, not a target, and no remaining candidate beats the class-coverage card it would replace.
basics: format-supplied, unlimited - 9 Swamp, 6 Island
```
