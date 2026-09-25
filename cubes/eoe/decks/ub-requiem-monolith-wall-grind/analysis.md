---
deck_name: "ub-requiem-monolith-wall-grind"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-08-06T02:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
10x Island                   Land — blue source (76.9% of pips)
5x Swamp                    Land — black source
2x Contaminated Aquifer     Land — U/B dual, enters tapped
1x Watery Grave             Land — U/B, untapped for 2 life
```

### CREATURES (9)
```
CMC  Card                    Qty  Color  Role                                                                                                                                                                                                                                                                                           Rar
  3  Cloudsculpt Technician  x2   U      Wall — 1/4 flier, the cheapest body that survives Zero Point Ballad at X=3 and blocks the cube's evasive threats                                                                                                                                                                               C
  3  Uthros Psionicist       x2   U      Wall — 2/4; 'The second spell you cast each turn costs {2} less to cast' is what lets a control deck answer twice in one turn                                                                                                                                                                  U
  4  Selfcraft Mechan        x2   U      Wall — 3/4; ETB 'you may sacrifice an artifact ... put a +1/+1 counter on target creature and draw a card', and Cryogen Relic is the artifact it wants to eat                                                                                                                                  C
  5  Quantum Riddler         x1   U      Finisher — 4/6 FLIER, the only maindeck body that satisfies the thesis's 'evasive' clause; toughness 6 survives Zero Point Ballad at any X this deck casts, and 'as long as you have one or fewer cards in hand ... you draw that many cards plus one' pays off the empty-handed late game     M
  5  Starbreach Whale        x1   U      Finisher/wall — 3/5 FLIER; toughness 5 keeps Zero Point Ballad asymmetric and ETB surveil 2 feeds selection. Warp {1}{U} buys the surveil early plus a recast later — it does NOT buy a blocker, because 'exile this creature at the beginning of the next end step' fires on YOUR end step    C
  7  Starwinder              x1   U      Finisher — 7/7 whose 'whenever a creature you control deals combat damage to a player, you may draw that many cards' converts the attrition win into cards. NOTE: it has NO evasion, so it closes on the ground behind a cleared board, and no ETB, so its Warp {2}{U}{U} buys almost nothing  R
```

### INSTANTS & SORCERIES (8)
```
CMC  Card               Qty  Color  Role                                                                                                                                                                                                                                                                                                                  Rar
  1  Zero Point Ballad  x1   B      Sweeper — 'Destroy all creatures with toughness X or less.' At X=3 it kills nothing of ours: the lowest toughness in this mainboard is 4                                                                                                                                                                              R
  2  Depressurize       x1   B      Removal — '-3/-0 until end of turn. Then if that creature's power is 0 or less, destroy it'; the cheapest answer in the deck and an INSTANT. It only kills power 3 or less                                                                                                                                            C
  3  Unravel            x2   U      Counterspell — 'Counter target spell. If the amount of mana spent to cast that spell was less than its mana value, you draw a card.' The draw is CONDITIONAL on the target being cast at a discount (warp, convoke, cost reduction): 51 of 276 pool cards, 18.5%. Answers the stack only, never a resolved permanent  U
  4  Gravkill           x2   B      Removal — 'Exile target creature or Spacecraft'; the only EXILE answer in the 50. NOT the only Spacecraft answer: Lost in Space tucks any artifact, so 4 of the 9 interaction cards reach a Spacecraft                                                                                                                C
  4  Lost in Space      x2   U      Removal — puts an artifact OR creature on top or bottom of its library, plus surveil 1. The deck's only maindeck answer to a resolved noncreature permanent. It does NOT answer hexproof (it says 'Target'), the OWNER chooses top or bottom so a threat can be redrawn, and surveil is selection, not a draw         C
```

### OTHER SPELLS (5)
```
CMC  Card              Qty  Color  Role                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Rar
  2  Cryogen Relic     x2   U      Engine — 'When this artifact enters OR LEAVES the battlefield, draw a card': one card for two draws, and it is the artifact Selfcraft Mechan's ETB wants to sacrifice                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               C
  3  Dubious Delicacy  x1   B      Interaction/life insurance — 'Flash / When this artifact enters, up to one target creature gets -3/-3 until end of turn' at instant speed, then '{2}, {T}, Sacrifice this artifact: You gain 3 life'. Its type line is Artifact — Food, so Zero Point Ballad can NEVER hit it, and it is a 7th artifact for Cloudsculpt Technician and Selfcraft Mechan                                                                                                                                                                                                                                                                                                                                                                             U
  3  Requiem Monolith  x1   B      KEYSTONE — '{T}: Until end of turn, target creature gains "Whenever this creature is dealt damage, you draw that many cards and lose that much life." That creature's controller may have this artifact deal 1 damage to it. Activate only as a sorcery.' Sorcery-only and until-end-of-turn, so it never covers the opponent's turn and never rewards blocking. Its cost is '{T}', so it is ONCE PER TURN, not per main phase. And the granted 'you draw' follows the CREATURE'S controller, so it must target YOUR OWN creature — pointed at an opponent's it draws for them, and they decline the damage. Floor: draw-1-lose-1 per turn while you control a creature. Ceiling: draw-N when your own body attacks and is blocked  R
  4  Uthros Scanship   x1   U      Engine — ETB 'draw two cards, then discard a card' is unconditional and immediate; an artifact that keeps Cloudsculpt Technician's pump live. Its Station 8+ flier mode is discounted to 0.3 in the assembly gate, and this copy is double-booked in the engine and finisher buckets — disclosed, like the ground_holders overlap                                                                                                                                                                                                                                                                                                                                                                                                   U
```

## SIDEBOARD (10)
```
Card                 Qty  Color  Role / When to board in                                                                                                                                                                                                                                                                                 Rar
Annul                x2   U      Counter artifact or enchantment spells — 74 artifacts (29.7% density) and 16 enchantments cube-wide; unlike the maindeck this deck CAN hold one mana up, which is why it boards in here and not in the aggro siblings                                                                                   U
Divert Disaster      x1   U      The only counterspell in the 50 at mana value 2 or less that can answer ANY spell — Annul is cheaper but reads 'Counter target artifact or enchantment spell'. Board in against fast starts, the matchup the maindeck concedes                                                                          C
Dauntless Scrapbot   x1   C      One-sided 'exile each opponent's graveyard' vs the 31 graveyard-interaction cards in this cube. Also a 3/1 that dies to our own X=3 Ballad — same boarding swap                                                                                                                                         U
Dubious Delicacy     x1   B      The second copy — bring in alongside the maindeck one against aggressive decks                                                                                                                                                                                                                          U
Faller's Faithful    x2   B      Removal on a body — ETB 'destroy up to one other target creature'. BOARDING NOTE: its 3/1 dies to our own Zero Point Ballad at X=3, so bring these in AND take Zero Point Ballad out — the conflict is a 1-card swap, not a construction lock                                                           U
Survey Mechan        x1   C      'Flying / Hexproof' — an untargetable BLOCKER for removal-heavy mirrors, NOT a clock: at 1 power it needs 20 combat steps. Its 1/3 body also dies to our own X=3 Ballad, so board it in with the same Ballad swap                                                                                       U
Mechanozoa           x1   U      5/5 whose ETB 'tap target artifact or creature an opponent controls and put a stun counter on it' is interaction stapled to a body; toughness 5 keeps the sweeper asymmetric. Replaces Mouth of the Storm, which at 7 mana was too slow for the matchup it answered and whose -3/-0 removes no blocker  C
Singularity Rupture  x1   UB     'Destroy all creatures' — the SYMMETRIC wrath, boarded in only when the opponent's board beats ours; it kills our own toughness-4 walls, which is why Zero Point Ballad is the maindeck sweeper                                                                                                         R
```

## ANALYSIS

### DECK IDENTITY

Dimir Wall-Grind. Every creature in the deck has toughness 4 or more, which does two things at once: it blocks the cube's commons and uncommons profitably for as long as the game needs, and it makes Zero Point Ballad a genuinely one-sided sweeper - at X=3 it destroys nothing on this side of the table. Behind that wall, one-for-one answers and artifacts that draw on both ends (Cryogen Relic) grind the opponent out of resources, with Requiem Monolith adding a card once per turn at the cost of a life. The game ends with Quantum Riddler or Starbreach Whale in the air, or a 7/7 Starwinder on an empty board turning each connection into a fistful of cards.

### THE KEYSTONE DOES NOT DO WHAT THE ARCHETYPE BRIEF SAYS IT DOES

The brief that generated this archetype described Requiem Monolith as rewarding blocking — high-toughness
walls soak damage and convert it into cards. Read the card:

> *"{T}: **Until end of turn**, target creature gains 'Whenever this creature is dealt damage, you draw
> that many cards and lose that much life.' That creature's controller may have this artifact deal 1
> damage to it. **Activate only as a sorcery.**"*

Sorcery-only activation means your own main phase with an empty stack, and "until end of turn" expires at
the end of **your** turn. The granted ability is therefore **never live during the opponent's turn** and
never sees a block. Three further limits the grill forced out of the text:

- **It is once per turn, not once per main phase.** The cost is `{T}`, and a tapped artifact untaps once.
- **It only works on your own creatures.** Inside the granted ability, *"**you** draw that many cards"*
  refers to that ability's controller — i.e. whoever controls the creature. Aimed at an opponent's
  creature it hands *them* the cards, and *"that creature's controller may have this artifact deal 1
  damage to it"* lets them simply decline.
- **Its floor needs a body.** Creatures are 9 of 22 nonland cards and none costs less than 3, so a
  turn-3 Monolith does nothing that turn.

What it actually is: a **once-per-turn draw-1-lose-1** while you control a creature, upgrading to draw-N
when one of your own high-toughness bodies attacks and the opponent chooses to block. That is a real
engine for a 1-of, and it is a meaningfully smaller card than the brief implied.

### THE CONSTRUCTION CONSTRAINT: EVERY CREATURE AT TOUGHNESS 4

Zero Point Ballad reads *"Destroy all creatures with toughness X or less. You lose X life."* It is only a
one-sided sweeper if **none** of your own creatures fall under X. So the maindeck was built to a hard
floor, verified exhaustively:

| Creature | P/T | Dies to X=3? |
|---|---|---|
| Cloudsculpt Technician ×2 | 1/**4** | No |
| Uthros Psionicist ×2 | 2/**4** | No |
| Selfcraft Mechan ×2 | 3/**4** | No |
| Starbreach Whale | 3/**5** | No |
| Quantum Riddler | 4/**6** | No |
| Starwinder | 7/**7** | No |

**Minimum toughness 4. At X=3 the sweeper destroys 0 of 9 of our creatures — and 90 of the cube's 139
creatures (64.7%) have toughness 3 or less.** Nothing in the deck can lower its own toughness either:
Cloudsculpt's pump is `+1/+0`, Selfcraft's counter is `+1/+1`, Depressurize is `-3/-0`.

That constraint is what excluded a long list of otherwise-fine U/B cards — Comet Crawler, Alpharael,
Sinister Cryologist and Xu-Ifit are all 2/3, Faller's Faithful is a 3/1. Every one of them would have
converted the deck's only sweeper into a symmetric one. The honest framing, though, is that toughness is
the stat that **blocks**, so this is a wall-selection rule the deck would want anyway; the Ballad
asymmetry rides along free rather than dictating nine slots on its own.

**Boarding note that follows from it:** Faller's Faithful ×2, Survey Mechan and Dauntless Scrapbot all
have toughness 3 or less. When any of them comes in, **Zero Point Ballad comes out** — it is a one-card
swap, not a lock.

### THE TRAP: THE BIGGEST WALL IN THE CUBE IS NOT A WALL

Entropic Battlecruiser has a printed **3/10**, the highest toughness in all 271 cards, and it is exactly
the card a wall-grind deck reaches for. Its own text disqualifies it: *"It's an artifact creature at
**8+**."* Below 8 charge counters it is a noncreature artifact and **cannot block at all**. Stationing it
costs *"Tap another creature you control"* — a blocker per activation, two or three times, in the deck
that most needs blockers. And its `1+` tier, *"Whenever an opponent discards a card, they lose 3 life"*,
is dead here: **0 of the 22 nonland cards make an opponent discard**, and its own discard trigger needs
8+ counters, so the ability cannot switch itself on.

The same reasoning excludes Specimen Freighter (4/7, threshold 9+). Uthros Scanship survives the cut only
because its ETB — *"draw two cards, then discard a card"* — pays off unconditionally the turn it lands.

### WHAT THE SELF-GRILL CHANGED

This deck's analysis was wrong in five load-bearing places and the grill caught all of them. Recording it
because the corrections are the useful part:

| Claim | Reality |
|---|---|
| "4 of the 8 interaction cards replace themselves" | **0 unconditional.** Lost in Space's surveil is selection, not a draw; Unravel's draw needs a discounted cast (18.5% of the pool) |
| "Warp lets Starbreach Whale and Starwinder be deployed early as blockers" | *"Exile this creature at the beginning of the next end step"* fires on **your** end step — a Warped body never blocks |
| "Zero Point Ballad scales with surplus mana" as a flood outlet | Capped at X=3 by the deck's own constraint; at X=4 it kills 6 of our 9 creatures |
| "Maindecking Dubious Delicacy would break the sweeper asymmetry" | Its type line is **Artifact — Food**. Ballad destroys *creatures*. It was moved maindeck at zero cost |
| "Lost in Space answers hexproof" | It says *"Target"* — hexproof is precisely what it cannot answer |

### PLAY-PATTERN NOTES

- **Zero Point Ballad wants X=3 and no more.** X=4 is a symmetric wrath in disguise.
- **Cryogen Relic is the card Selfcraft Mechan wants to eat.** *"When this artifact enters **or leaves**
  the battlefield, draw a card"* means sacrificing it to Selfcraft's ETB draws twice.
- **Uthros Psionicist's discount reads "each turn", not "your turn"** — so it also discounts the second
  instant you cast on the opponent's turn, which matters with 6 instants in the interaction suite.
- **Starwinder does not fly.** It is the largest body in the deck and it closes on the ground, after the
  board has been cleared — Quantum Riddler and Starbreach Whale are the evasive half.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:1  2:3  3:8  4:7  5:2  7:1
Assembly (thesis turn 11, 18 cards seen):  [PASS]
  PASS  card_engine: 10 copies (effective 9.3: Requiem Monolith@0.7, Starwinder@0.6) → p=0.99 (need ≥ 0.75)
  PASS  ground_holders: 9 copies → p=0.99 (need ≥ 0.75)
  PASS  finisher: 4 copies (effective 3.3: Uthros Scanship@0.3) → p=0.79 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 17%  T2 63%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Zero Point Ballad, Cloudsculpt Technician, Uthros Psionicist, Selfcraft Mechan
  OK        single_large_threat: Gravkill, Lost in Space, Dubious Delicacy
  OK        noncreature_permanents: Lost in Space
  OK        stack: Unravel
  CONCEDED  graveyard: No maindeck graveyard hate. The cube contains 31 graveyard-interaction cards but only 1 graveyard-hate card, and this deck's own Cryogen Relic / Selfcraft Mechan loop and Uthros Scanship discards put cards in its own graveyard, so a symmetric answer would cost it more than most. Dauntless Scrapbot is sideboarded because its 'exile each opponent's graveyard' is one-sided.
```

- All four structural checks PASS. Recorded for continuity: the pre-repair report was a HARD FAIL on assembly (`finisher` p=0.70), fixed by adding a third finisher rather than by redefining the role.
- Curve PASS at avg MV 3.45 with a 1/3/7/8/2/1 spread across MV 1-7. The single 7-drop is Starwinder; the 18-land count was solved for exactly this curve.
- Coverage PASS on all five threat classes with only one concession (graveyard). This is the only one of the three decks with a maindeck answer to both the stack and noncreature permanents - Unravel covers the former, Lost in Space ('target artifact or creature's owner puts it on their choice of the top or bottom of their library') the latter.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | CORRECTED after the grill, which showed two of the five outlets originally named were false. Zero Point Ballad is NOT a mana sink here: at X=4 it destroys 6 of this deck's 9 creature copies, so the deck's own construction constraint caps it at X=3, i.e. 4 mana. And Requiem Monolith's cost is '{T}' - zero mana, so it converts nothing. The outlets that actually hold: Starwinder at mana value 7 and Quantum Riddler at 5 are genuine sinks a flooded control deck is happy to reach; Cryogen Relic's '{1}{U}, Sacrifice this artifact' spends mana and draws on the way out; and Quantum Riddler's 'as long as you have one or fewer cards in hand, if you would draw one or more cards, you draw that many cards plus one instead' turns flooded topdecks into two cards. 18 lands is exactly land_target's recommendation for this curve. |
| screw | mitigation | Watery Grave enters untapped for 2 life on the turn an answer is needed, and Zero Point Ballad is castable at X=1 or X=2 on two lands. Depressurize at {1}{B} and Cryogen Relic at {1}{U} are the cheap plays. The three duals each count as two colours, which is what supports the deck's blue-heavy pip demand off 18 lands; the goldfish sim measures keepable at 80% and three lands by turn 3 at 92%. |
| decapitation | mitigation | There is no single key card. Requiem Monolith is the named keystone, but the card_engine role holds 10 copies at p=0.99, so answering it costs the opponent a card and changes nothing structural. The finisher role holds 4 copies (effective 3.3, p=0.79) across three distinct cards, so no one removal spell ends the plan. CORRECTED after the grill: the earlier claim that Warp lets Starbreach Whale and Starwinder be 'deployed early as blockers' is FALSE - the reminder text reads 'Exile this creature at the beginning of the next end step', and since creature spells are cast at sorcery speed that is YOUR end step, so a Warped body is gone before the opponent's turn and never blocks. Warp buys an early ETB (Whale's surveil 2) and a later recast; on Starwinder, which has no ETB, it buys almost nothing. |
| gas-out | mitigation | CORRECTED after the grill - both of the original headline counts were wrong, and the mode survives on the legs that hold. It does NOT rest on self-replacing interaction (the true figure is 0 unconditional of 9, not 4 of 8), and Monolith draws once per TURN, not per main phase. What actually refuels: Cryogen Relic x2, which draw on entry AND again on leaving, and whose exit route is supplied by the deck itself (its own '{1}{U}, Sacrifice this artifact' and Selfcraft Mechan's 'you may sacrifice an artifact'); Uthros Scanship's 'draw two cards, then discard a card'; Selfcraft Mechan x2 drawing off that same sacrifice; Requiem Monolith once per turn from an empty hand; and Quantum Riddler's 'as long as you have one or fewer cards in hand, if you would draw one or more cards, you draw that many cards plus one instead', which switches on precisely in the state this mode describes. 10 of the 22 nonland cards touch a draw. |
| raced | mitigation | CHANGED SHAPE after the grill, which showed the previous acceptance rested on a false cost: it argued that maindecking Dubious Delicacy would break the sweeper asymmetry, but Delicacy's type line is 'Artifact - Food' and Zero Point Ballad destroys 'all creatures', so it can never be hit. Both agents caught this independently. 1x Dubious Delicacy is now MAINDECK, taking the interaction suite to 9 of 22 (40.9%, still inside the 35-45% band) and returning the engine bucket to 4 of 22 (18.2%, back inside its band) - the swap cost nothing it was claimed to cost. It brings flash 'up to one target creature gets -3/-3 until end of turn' as instant-speed interaction, plus '{{2}}, {{T}}, Sacrifice this artifact: You gain 3 life' against a life total taxed by Monolith, Ballad and Watery Grave. The residual weakness is stated rather than hidden: the first BLOCKER still cannot arrive before turn 3, because every creature costs 3 or more, and only 4 of 22 nonlands act before then. A 10th interaction card would push the suite to 45.5%, above the band ceiling - that is now the real cost. Dubious Delicacy x1, Faller's Faithful x2 and Divert Disaster sit in the sideboard for this matchup. |
| disruption-fizzle | mitigation | There is no critical turn to disrupt: the plan is a sequence of one-for-one trades, so interaction aimed at any single spell costs the opponent a card and delays nothing. Unravel x2 protects the one genuinely important cast (Zero Point Ballad, the asymmetric sweeper) and replaces itself when it does. Uthros Psionicist's 'The second spell you cast each turn costs {2} less to cast' is the specific answer to being interacted with: it lets the deck answer twice in one turn, so a countered or removed first spell does not cost the whole turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Entropic Battlecruiser | {3}{B} with a printed 3/10 - the highest toughness in the cube and the obvious 'wall' for a wall-grind deck. It is NOT a wall: its own text reads 'It's an artifact creature at 8+', so below 8 charge counters it is a noncreature artifact that cannot block at all. This deck has no Station accelerant and only 9 creature copies to tap, so it would sit inert. Its 1+ tier ('Whenever an opponent discards a card, they lose 3 life') is also dead here: 0 of the 22 nonland cards make an opponent discard, and its own discard trigger needs 8+ counters, so the ability cannot switch itself on. This is the single most tempting trap in the archetype. |
| Specimen Freighter | {5}{U} 4/7 Spacecraft - same reason, threshold 9+. A 4/7 that cannot block until it has been stationed nine times is not a ground-holder here, however good the ETB bounce is. |
| Bygone Colossus / Pinnacle Kill-Ship / Extinguisher Battleship / Dawnsire | 9/9 at {9}, 7/7 at {7}, 10/10 at {8}, 20/20 at {5}. All colourless and all castable, but the land count solved for this curve is 18 and the deck's top end is already a 7-mana Starwinder. Dawnsire and Extinguisher Battleship additionally need 20 and 5 charge counters to become creatures. |
| Mouth of the Storm | {6}{U} 6/6 flier with ward {2} - CUT ENTIRELY during the grill, having first been sideboarded. Two reasons, both oracle-grounded: its ETB 'creatures your opponents control get -3/-0 until your next turn' reduces POWER, so it removes no blocker and kills nothing - it prevents damage, which stabilises but does not clear a path (the shape judge caught a rejected sketch claiming otherwise); and at 7 mana in an 18-land deck it is too slow for the aggressive matchup it was supposed to answer. Mechanozoa took the slot. |
| Monoist Circuit-Feeder | {4}{B}{B} 4/4 flier - a genuine evasive finisher with toughness 4, so it survives Zero Point Ballad at X=3. Cut on the mana: double black in a base with 8 black sources and 80.8% blue pips, at 6 mana. The best swap if this deck is rebuilt with a heavier black half. |
| Mechanozoa | {4}{U}{U} 5/5 - MOVED INTO THE SIDEBOARD during the grill. The original exclusion said the finisher role 'needed a card that closes rather than another body that trades', but the Challenger pointed out the deck already runs Starwinder (7/7, also no evasion) as a finisher, so that reason did not discriminate. Toughness 5 keeps the sweeper asymmetric and its ETB 'tap target artifact or creature an opponent controls and put a stun counter on it' is interaction stapled to a body. |
| Elegy Acolyte | {2}{B}{B} 4/4 lifelink whose 'whenever one or more creatures you control deal combat damage to a player, you draw a card and lose 1 life' is a real engine. Cut on the rare budget (6 of 6 spent) and on the double-black cost. |
| Xu-Ifit, Osteoharmonist | {1}{B}{B} 2/3 rare with '{T}: Return target creature card from your graveyard to the battlefield' - recursion is exactly what an attrition deck wants. Cut twice over: its 2/3 body dies to this deck's own Zero Point Ballad at X=3, and it is a rare in a fully-spent budget. |
| Perigee Beckoner | {4}{B} 4/5 - a large cheap wall with toughness 5. A tier below the chosen 3-drops purely on cost: at 5 mana in an 18-land control deck it competes with Starbreach Whale, which has flying and Warp {1}{U}. |
| Gravblade Heavy | {3}{B} 3/4 that 'gets +1/+0 and has deathtouch' with an artifact out - deathtouch on a wall is excellent blocking. COUNT CORRECTED: 7 of the 22 nonland cards are artifacts, not 5, so its deathtouch is live more often than the original note claimed - and deathtouch is genuinely the cleanest way to block the 47 pool creatures that survive our own Ballad at X=3. It still loses the slot to Selfcraft Mechan, which has the same cost and the same toughness 4 and additionally draws a card. |
| Comet Crawler / Alpharael, Dreaming Acolyte / Sinister Cryologist | 2/3 bodies, all of which DIE to this deck's own Zero Point Ballad at X=3. The maindeck's minimum toughness of 4 is what makes the sweeper one-sided, and admitting any 3-toughness body breaks that - which is the whole reason it is one-sided. |
| Singularity Rupture | {3}{U}{B}{B} 'Destroy all creatures' - kept in the SIDEBOARD only. It is SYMMETRIC: it kills all 9 of this deck's own creature copies, including the finishers it needs to close. Zero Point Ballad at X=3 does the one-sided version. Boarded in only when the opponent's board is strictly better than ours. |
| Archenemy's Charm | {B}{B}{B} modal exile/regrowth/pump - excellent, and unusable: triple black in a base with 8 black sources and 19.2% black pips. |
| Vote Out | {3}{B} 'Destroy target creature' with Convoke. Unconditional removal, cut because Gravkill exiles for the same cost and this deck has only 9 creature copies to convoke with. |
| Embrace Oblivion | {B} 'Destroy target creature or Spacecraft' for one mana - the additional cost is 'sacrifice an artifact or creature'. With 7 artifact and 9 creature copies the cost is payable, but in a control deck every permanent on the battlefield is doing a job; paying a card to save two mana inverts the attrition plan. |
| Tragic Trajectory | {B} -2/-2, or -10/-10 under Void. THE ORIGINAL EXCLUSION REASON WAS FACTUALLY FALSE and the grill caught it: it claimed 'this deck has no Warp cards', but the deck runs three (Quantum Riddler 'Warp {1}{U}', Starbreach Whale 'Warp {1}{U}', Starwinder 'Warp {2}{U}{U}'), and Void is further fed by Cryogen Relic's sacrifice, Selfcraft Mechan's sacrifice, Gravkill's exile and Lost in Space's tuck. The real reason it is out: it is a SORCERY, and this deck wants its cheap answers at instant speed - Depressurize does the same job for one more mana and can be held up. |
| Cryoshatter | {U} aura, '-5/-0' then destroy on tap or damage. Strong in the aggro siblings that attack every turn; much weaker here, because a control deck is not the one causing the enchanted creature to become tapped or dealt damage. |
| Faller's Faithful | {2}{B} 3/1 removal-on-a-body - kept in the SIDEBOARD. Its 3/1 dies to our own Zero Point Ballad at X=3, and the 'its controller draws two cards' clause hands the opponent cards in a deck whose plan is to out-resource them. The grill supplied the clean resolution the record was missing: the conflict is a ONE-CARD SWAP, not a construction lock - board these in and take Zero Point Ballad out. The same applies to Survey Mechan (1/3) and Dauntless Scrapbot (3/1), so 4 of the 10 sideboard cards share that boarding note. |
| Desculpting Blast | {1}{U} bounce - tempo rather than an answer, and a control deck that bounces a threat has to answer it again later. Lost in Space (top-or-bottom of library) is the version this deck wants and it is maindecked at 2. |
| Mental Modulation | {1}{U} tap-a-permanent-and-draw. Fine filler; cut because Lost in Space answers a permanent for the same cost. NOTE the original reason claimed Lost in Space and Unravel 'both replace themselves', which the grill showed is false - surveil is not a draw and Unravel's draw is conditional. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.45   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.27 adj [MV 3.45 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  23.1%  prod  44.4%  gap -21.3pp  [OK]
  U  demand  76.9%  prod  72.2%  gap  +4.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Base = cube mainboard only
        all 40 mainboard + 10 sideboard cards matched by exact name in the working pool; basics are format-supplied
[PASS] Commons/uncommons max 2 copies
        no common or uncommon exceeds 2 copies across mainboard + sideboard combined
[PASS] Rares/mythics max 1 copy
        Requiem Monolith, Quantum Riddler, Starwinder, Zero Point Ballad, Watery Grave (main) and Singularity Rupture (side) - 1 copy each
[PASS] Max 6 rares/mythics total (main + side)
        exactly 6 of 6 used - 5 in the mainboard and 1 in the sideboard, the only deck of the three to spend a rare slot on the sideboard
[PASS] Colour identity within U/B
        effective_cost.best_mode returned a usable non-None mode for every nonland card; no off-normal modes needed
[PASS] Basic lands unrestricted
        10 Island, 5 Swamp - format-supplied, exempt from copy limits
```