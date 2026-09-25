---
deck_name: "wu-counters-go-wide"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WU"
format: "40-card"
built_at: "2026-08-04T04:57:50Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
12x Plains               basic
3x Island               basic
2x Idyllic Beachfront   ({T}: Add {W} or {U}.)
```

### CREATURES (14)
```
CMC  Card                 Qty   Color  Role                                              Rar
  2  Dockworker Drone     x2    W      threat (pre-countered 2-drop)                     C
  2  Illvoi Operative     x2    U      payoff (second-spell -> counter)                  C
  2  Station Monitor      x2    WU     payoff (second-spell -> flier)                    U
  3  Cosmogrand Zenith    x1    W      payoff (second-spell -> board)                    M
  3  Rayblade Trooper     x2    W      threat (counter placer / death-to-token)          U
  4  Knight Luminary      x1    W      threat (body + token)                             C
  4  Luxknight Breacher   x1    W      threat (scales with board width)                  C
  4  Sunstar Lightsmith   x2    W      engine (payoff + draw)                            U
  5  Exalted Sunborn      x1    W      threat (token doubler / evasive top end)          M
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                 Qty   Color  Role                                              Rar
  1  Focus Fire           x2    W      interaction (combat removal, scales with width)   C
  1  Honor                x2    W      fuel (one-mana cantrip + counter)                 U
  2  Mental Modulation    x2    U      fuel (one-mana cantrip + attack enabler)          C
  3  Zealous Display      x2    W      finisher (mass pump)                              C
```

### OTHER SPELLS (1)
```
CMC  Card                 Qty   Color  Role                                              Rar
  3  Banishing Light      x1    W      interaction (catch-all exile)                     C
```

## SIDEBOARD (10)
```
Card                 Qty   Color  Role / When to board in                           Rar
Seam Rip             x2    W      SB: cheap exile MV<=2                             U
Banishing Light      x1    W      interaction (catch-all exile)                     C
Dauntless Scrapbot   x2    C      SB: graveyard exile                               U
Emergency Eject      x1    W      SB: unconditional permanent removal               U
All-Fates Stalker    x2    W      SB: creature exile                                U
Radiant Strike       x2    W      SB: artifact removal + lifegain                   C
```

## ANALYSIS

### DECK IDENTITY

WU Counters Go-Wide. This build spends its second spell each turn on BOARD rather than on cards: Cosmogrand Zenith makes two 1/1 Soldiers or puts a +1/+1 counter on every creature, Station Monitor adds a 1/1 flying Drone, and Sunstar Lightsmith grows while replacing the card that triggered it. Around that engine sit permanent-counter placers - Rayblade Trooper, Dockworker Drone, Honor and Luxknight Breacher, which enters with a counter for each other creature and artifact you already control - so the board grows in two dimensions at once. Exalted Sunborn doubles every token the engine makes, and two copies of Zealous Display convert the accumulated width into lethal in a single attack step.

### THE DECK GROWS IN TWO DIMENSIONS

The tempo build spends its second spell on cards. This one spends it on board, and the reason it holds up is that it grows along two axes at once - **width** and **size** - using the same trigger.

| Axis | Source | Per second spell |
|---|---|---|
| Width | Cosmogrand Zenith token mode | two 1/1 Soldiers |
| Width | Station Monitor | one 1/1 flying Drone |
| Size | Cosmogrand Zenith counter mode | +1/+1 on every creature |
| Size | Illvoi Operative, Sunstar Lightsmith | +1/+1 on themselves |

Cosmogrand Zenith being *modal* is what makes it the anchor rather than a redundancy: it goes wide from an empty board and it converts wide into lethal once bodies exist. You choose the axis the board is short on.

### THE MULTIPLIER AND ITS DENOMINATOR

Exalted Sunborn reads "If one or more tokens would be created under your control, **twice that many** of those tokens are created instead." That is only worth a mythic slot if the deck actually makes tokens, so here is the count: **6 of the 23 nonland cards create tokens**, and three of them do it *repeatedly* - Cosmogrand Zenith and both Station Monitors fire every turn the second spell resolves. With Sunborn out, one second spell is four Soldiers, or two fliers, or both.

That count is also what settled the deck's one band deviation. Threats/Payoffs originally sat at 56.5%, 1.5pp over the aggro band, and the defence was that trimming a card would delete a token source. The self-grill found the flaw in that defence: **Luxknight Breacher is the one threat of the thirteen that makes no token at all**, so cutting it fixed the band and cost the multiplier's denominator nothing. The slot went to the second Zealous Display - see below.

### A JUDGE FINDING, RECOUNTED

The shape judge flagged Rayblade Trooper in the *rejected* sweeper-resilient sketch, and the objection was correct there: its trigger reads "Whenever a **nontoken** creature you control **with a +1/+1 counter on it** dies," and that build's board was mostly tokens, which are excluded outright.

The card is harvested here anyway, because the denominator is different. **13 of the 23 nonland cards place a +1/+1 counter on a nontoken creature** - Cosmogrand Zenith's counter mode, Honor x2, Rayblade Trooper x2 itself, Dockworker Drone x2 (which *enters* with one and is itself nontoken), Luxknight Breacher, and Illvoi Operative x2 / Sunstar Lightsmith x2 which counter themselves every turn. The limit still stands and is worth knowing at the table: **Zenith's Soldiers and Station Monitor's Drones never trigger it.**

### WHY THIS BUILD IS 77% WHITE

That is not a preference, it is the manabase. The cube has exactly one free WU dual - Idyllic Beachfront, which enters tapped - so an even W/U split is unbuildable. This deck answers by confining blue to three cards (Station Monitor, Illvoi Operative, Mental Modulation), none of which wants blue before turn 2, and running 14 white sources against 5 blue.

The cost is stated plainly in the coverage declaration: **every counterspell in the pool is blue**, so the stack is conceded and stays conceded even after boarding.

### THE COUNTERS ARE THE INSURANCE

The thing that makes this build harder to dismantle than its curve suggests is that most of its investment is *permanent*. Counters from Honor, Rayblade Trooper, Dockworker Drone and Luxknight Breacher stay on the creatures after the engine is answered, and Dockworker Drone explicitly moves its counters to another creature when it dies. Killing Cosmogrand Zenith on sight stops the future; it does not refund the past.

### THE FINISHER THAT WAS ALMOST A ONE-OF

The deck identity names Zealous Display as the step that converts width into lethal. The first build ran **one copy**, and justified it by saying the computed 17th land had taken the slot.

The self-grill checked that claim and it was false. P(seeing a single copy by thesis turn 7 on the play) is 13/40 = **32.5%** - the deck was naming its win condition and then failing to find it in two games of three. And re-running the land model on a list with the second copy restored and one Luxknight Breacher cut returns **17 lands anyway**. The trade was never forced; it was an unexamined assumption.

The corrected line: two Zealous Display raise the finisher to **55.0%**, drop the MV4 shelf, and bring Threats/Payoffs from 56.5% back inside the aggro band - all at once, because Luxknight Breacher happened to be the only non-token threat in the slot.

### WHAT THE BLUE SPLIT ACTUALLY COSTS

The aggregate colour gaps look comfortable (-5.5pp white, -6.3pp blue), but the aggregate is not what you play against. Six of the 23 nonland cards want blue, blue sources number five, and two of those five enter tapped. P(a blue source among the eight cards seen by turn 2 on the play) is **0.694** - so Station Monitor, a two-drop payoff whose whole value is being early, is off-colour on turn 2 in roughly **31%** of games.

That is accepted rather than fixed. Every blue card is a single pip at MV2, there is no {U}{U} anywhere in the mainboard, and evening the split would mean cutting white sources that twenty pips depend on in order to serve six.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:8  3:6  4:4  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies → p=0.93 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 8: Honor@0.9, Honor@0.9, Focus Fire@0.6, Focus Fire@0.6, Rayblade Trooper@0.8, Rayblade Trooper@0.8, Zealous Display@0.7, Zealous Display@0.7) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 57%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Cosmogrand Zenith, Focus Fire, Luxknight Breacher, Zealous Display
  OK        single_large_threat: Banishing Light, Focus Fire, Mental Modulation
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: Zero mainboard counterspells. This build runs 20 white pips against 6 blue (76.9% / 23.1%) and every counterspell in the pool is blue: Annul at {U} and Unravel at {1}{U}{U}. On 5 blue sources (3 Island + 2 Idyllic Beachfront) a maindeck counterspell is a card that sits in hand, and holding mana open also contradicts an aggro plan whose token math only compounds if the second spell is cast every turn.
  CONCEDED  graveyard: Zero mainboard graveyard interaction. The clock wins on board and does not care what sits in an opponent's graveyard; a maindeck slot here would cost a token-maker, which is the resource Cosmogrand Zenith and Exalted Sunborn multiply. Dauntless Scrapbot x2 answers the class from the sideboard.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana converts to cards or board with no land drop attached: Sunstar Lightsmith x2 draws a card on every second spell, and Honor x2 and Mental Modulation x2 both read 'Draw a card', so an excess land is spent rather than stranded. Focus Fire at {W} and Zealous Display at {2}{W} are cheap enough that a flooded turn still casts two spells and keeps the trigger live, and Luxknight Breacher and Exalted Sunborn give a flooded hand genuine four- and five-mana sinks. |
| screw | mitigation | Curve is 4x MV1, 8x MV2, 5x MV3, 5x MV4, 1x MV5 across 23 nonland cards, and 20 of 26 pips are white against 14 white sources, so a two-land white hand functions: Honor {W}, Focus Fire {W}, Dockworker Drone {1}{W} and Illvoi Operative {1}{U} are all castable on two lands. The goldfish sim reports 85% keepable hands, 93% playing a spell by turn 2 and 88% hitting a third land by turn 3. Exalted Sunborn is the only double-pip card and it is white. |
| decapitation | mitigation | The second-spell trigger lives on 4 distinct cards across 7 copies (Cosmogrand Zenith, Station Monitor x2, Illvoi Operative x2, Sunstar Lightsmith x2) and the assembly check reports p=0.93 of seeing a payoff by turn 7. More importantly the board this deck builds is PERMANENT: +1/+1 counters from Honor, Dockworker Drone, Rayblade Trooper and Luxknight Breacher stay on the creatures after the engine dies, and Dockworker Drone explicitly moves its counters to another creature when it dies. Answering the engine does not undo the board it already made. |
| gas-out | mitigation | 3 distinct cards / 6 copies are self-replacing: Honor x2 ('Put a +1/+1 counter on target creature. Draw a card.'), Mental Modulation x2 ('Tap target artifact or creature. Draw a card.') and Sunstar Lightsmith x2, which draws on every second spell and is therefore a recurring source rather than a one-shot. Beyond card draw, this build's specific answer to an empty hand is that its engine generates resources WITHOUT cards: Cosmogrand Zenith and Station Monitor manufacture bodies from the same second spell every turn, so a topdecked one-mana Honor is still two bodies and a card. |
| raced | accepted | With 3 interaction cards and only Exalted Sunborn's lifelink for life gain, the deck loses races against a faster start. Mitigating means cutting token-makers for defensive spells, and every token-maker cut shrinks the denominator that Exalted Sunborn doubles and Zealous Display converts - the plan is to build a board the opponent cannot attack into, not to answer their board. The sideboard holds Seam Rip x2 (exile a nonland permanent of mana value 2 or less) and All-Fates Stalker x2 for the games where trading the multiplier for answers is correct. |
| disruption-fizzle | mitigation | The critical turn is the Zealous Display attack, and after the Phase 9 repair there are 2 copies rather than 1, raising P(seeing one by thesis turn 7) from 0.325 to 0.550. Beyond redundancy the attack is rarely all-or-nothing: the +1/+1 counters placed by Honor, Rayblade Trooper, Dockworker Drone and Luxknight Breacher are permanent, and Dockworker Drone's 'When this creature dies, put its counters on target creature you control' relocates them rather than losing them - so a blanked alpha strike leaves the board intact and the same attack is live the following turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Luxknight Breacher (2nd copy) | Cut in the Phase 9 repair to make room for the second Zealous Display. 'Enters with a +1/+1 counter on it for each other creature and/or artifact you control' is genuinely strong here (a 6/6 for four mana on a turn-5 board), but it is the ONLY one of the build's original 13 threats that creates no token, so cutting it fixed the Threats/Payoffs band deviation (56.5% -> 52.2%) at zero cost to Exalted Sunborn's denominator. The most natural swap-back if you would rather have the bigger body than the second finisher. |
| Reroute Systems | Cut from the sideboard in the Phase 9 repair. Its damage mode ('deals 2 damage to target tapped creature') duplicated Radiant Strike's tapped-creature clause at a worse rate, and its indestructible mode saves one creature from only 3 of the cube's 5 census sweepers - the other two deal damage, which indestructible does not stop. Replaced by Emergency Eject. |
| Auxiliary Boosters | {4}{W} Equipment that makes its own 2/2 Robot carrier and grants +1/+2 and flying. Genuinely sweeper-proof (it is neither a creature nor a Spacecraft) and a token source Exalted Sunborn doubles. Excluded on curve: at MV5 it is the deepest card the lowest-curve lens would tolerate, and the MV4-and-above shelf already holds 5 cards. |
| Dual-Sun Adepts | Judge-flagged weak keystone in the rejected reach sketch: '{5}: Creatures you control get +1/+1 until end of turn' is live for at most a turn or two at 17 lands and competes with casting the second spell. The printed double strike is real but does not need a slot in a build whose pump is Zealous Display. |
| Dual-Sun Technique | {1}{W} instant granting double strike and drawing 'if it has a +1/+1 counter on it'. 13 of 23 nonland cards place a +1/+1 counter on a nontoken creature, so the rider is live in most game states past turn 3 - but it is a trick with no board presence, and Zealous Display pumps the whole team for the same three mana. |
| Moonlit Meditation | RARE cut. 'The first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of enchanted permanent' is a genuine engine with Station Monitor or Cosmogrand Zenith. Excluded because it is an Aura on a permanent you control: it is a two-card combo where one half dies to any removal, and it replaces the FIRST token event each turn only, so it does not stack with Exalted Sunborn as cleanly as it appears. |
| Dawnstrike Vanguard | {5}{W} 4/5 lifelink whose end-step trigger puts a +1/+1 counter on each OTHER creature if you control two or more tapped creatures - a natural fit with a wide attacking board. Cut on curve alone: at MV6 it is one turn past the goldfish-7 line in a deck that already carries four MV4 cards and a five-drop. |
| Weftblade Enhancer | {5}{W} with Warp {2}{W}, putting a +1/+1 counter on each of up to two target creatures. The Warp mode is a three-mana counter spell that later becomes a 3/4 - real value, but three mana for two counters is worse than Cosmogrand Zenith putting a counter on EVERY creature for free off a trigger the deck is already generating. |
| Wedgelight Rammer | {3}{W} Spacecraft making a 2/2 Robot token on entry. A fine token source that Exalted Sunborn doubles, but Spacecraft are explicitly hit by the cube's exile-all-creatures-and-Spacecraft sweeper, and at MV4 it deepens a shelf that already holds four cards. |
| Starport Security | {W} 1/1 whose tap ability costs {3}{W} (or {1}{W} with a counter on a creature you control). One mana for a body is on-curve, but the activation is a four-mana or two-mana tap effect, and this deck would rather spend those mana casting a second spell than tapping one blocker. |
| Flight-Deck Coordinator | {2}{W} 3/3 gaining 2 life at end step if you control two or more tapped creatures. A fine body, but the lifegain rider is the wrong axis for a build whose 'raced' failure mode is explicitly accepted rather than mitigated - two life a turn does not change a race this deck is choosing not to fight. |
| Illvoi Infiltrator | The tempo build's finisher. Excluded here because it is a 1/3 whose value is card draw off connecting, and this build's blue is 5 sources for three cards; adding a fourth blue card at {2}{U} strains a manabase deliberately weighted 14-to-5 in white. |
| Brightspear Zealot | {2}{W} 2/4 vigilance that attacks as a 4/4 on double-spell turns. In-colour and on-curve, but it benefits from the trigger without producing a token or a counter, so it does not feed Exalted Sunborn's denominator or Luxknight Breacher's count - the two cards that scale with everything else in the list. |
| Annul (sideboard consideration) | {U} counter for artifact or enchantment spells, and the cube is 29.7% artifacts. Rejected on mana, not on power: this build runs 5 blue sources, so a one-mana blue instant that must be held up on the opponent's turn is unreliable. Radiant Strike answers the same class in white, where the deck has 14 sources. |
| Unravel (sideboard consideration) | {1}{U}{U} is the only double-blue cost in the pool worth wanting, and this build has 5 blue sources. Unplayable here, whereas it is a real sideboard card in the blue-weighted tempo build. |
| Pinnacle Starcage (sideboard consideration) | RARE. 'Exile all artifacts and creatures with mana value 2 or less' is a one-sided sweeper against a low-curve deck - but this IS the low-curve deck: 12 of its 23 nonland cards are MV2 or less. It would exile more of my board than theirs. |
| Beyond the Quiet (sideboard consideration) | RARE. '{3}{W}{W} Exile all creatures and Spacecraft' is the cube's strongest sweeper and is in-colour, but 15 of this deck's 23 nonland cards are creatures. It is a card for the deck playing against this one. |
| Lumen-Class Frigate | RARE cut, raised as an absence by the Phase 9 Challenger and previously judge-flagged. '2+ \| Other creatures you control get +1/+1' is a permanent anthem for two mana, and the Challenger counted 15 of 15 creatures able to station it (13 with printed power 2+, plus Dockworker Drone which enters with a counter). Excluded because Station is sorcery-speed and taps a creature you control, so charging it competes directly with attacking in a deck whose entire plan is attacking - and it is offline on the turn a rebuilt board most needs it. The strongest single candidate for one of the 4 unused rare/mythic slots if you want a permanent anthem instead of a one-shot pump. |
| Sunstar Chaplain | RARE cut, raised as an absence by the Phase 9 Challenger. A 3/2 for {1}{W} - larger than every other two-drop in the list - whose end-step trigger is a cardless recurring counter source, and whose second mode taps a blocker on the alpha-strike turn. Excluded because '{2}, Remove a +1/+1 counter from a creature you control' EATS the permanent counters that are this build's stated decapitation insurance, and its trigger requires two or more TAPPED creatures, which rewards having already attacked rather than building the board. |
| Honored Knight-Captain | Raised as an absence by the Phase 9 Challenger with a real count: the MV2 slot holds 8 cards and NOT ONE of them makes a token, while token count is the denominator Exalted Sunborn doubles. 'When this creature enters, create a 1/1 white Human Soldier creature token' is two bodies for two mana, three with Sunborn out, and it adds 2 rather than 1 to every Luxknight Breacher tally. Excluded only because the Phase 9 repair had already spent its swap on the finisher; this is the best remaining upgrade at MV2. |
| Uthros Psionicist | The archetype's cost reducer and the fifth of only five cards in the entire 276-card cube whose text mentions the second spell - this deck runs the other four. Excluded on mana, not on power: at {2}{U} it would take blue cards from 6 of 23 to 8 of 23 on a manabase with 5 blue sources, two of which enter tapped (P of a blue source by turn 2 is already only 0.694). The Challenger named it for completeness and explicitly did not recommend it. |
| Scout for Survivors | Reads like a rebuild spell for a go-wide deck, but the Challenger's oracle check kills it: 'Return up to three target creature cards with total mana value 3 or less' - this deck's cheapest creature is MV2, so two of them already exceed the cap. It returns one creature, not three. |
| Starfield Vocalist | RARE. 'If a permanent entering the battlefield causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time.' The second-spell abilities are CAST triggers, not permanent-ETB triggers, so it does not double any of this deck's 7 payoff copies. Zero text here, and blue besides. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.57   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.24 adj [MV 2.57 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  23.1%  prod  29.4%  gap  -6.3pp  [OK]
  W  demand  76.9%  prod  82.4%  gap  -5.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
base                                          cube_mainboard - every card verified by exact name against the working pool cache
commons_uncommons_max_2                       PASS - no card exceeds 2 copies (Banishing Light is 1 mainboard + 1 sideboard = 2 total, at the common limit)
rares_mythics_max_1                           PASS - Cosmogrand Zenith x1 and Exalted Sunborn x1, both mythic
max_6_rares_mythics_total_MB_plus_SB          PASS - 2 of 6 used (Cosmogrand Zenith and Exalted Sunborn, both mythic). The 4 unused slots are a deliberate mainboard AND sideboard choice, stated separately for each (Challenger finding F7): in the sideboard, the classes it answers - artifacts at 29.7% and graveyard at 12.45% - are answered at 2 copies each by commons and uncommons, and a sideboard that must reliably FIND its answer prefers 2 commons to 1 rare. In the mainboard, the two serious rare candidates (Lumen-Class Frigate, Sunstar Chaplain) are recorded with their counts under CARDS CONSIDERED BUT EXCLUDED rather than silently passed over; both were rejected on a stated mechanism, not on budget.
basics                                        Plains x12, Island x3 - format-supplied, exempt from copy limits
colour_identity                               PASS - every nonland card usable in W/U via effective_cost.best_mode; zero off-identity inclusions
splash                                        PASS - splash_colors empty; the deterministic filter's only R candidate (Roving Actuator) is uncastable on a 5-blue-source, 14-white-source manabase with zero red sources
```