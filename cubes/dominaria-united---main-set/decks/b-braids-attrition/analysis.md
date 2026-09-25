---
deck_name: "b-braids-attrition"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "B"
format: "40-card"
built_at: "2026-08-14T03:49:48Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x17 Swamp  basic
```

### CREATURES (14)

```
CMC  Card                       Qty  Color  Role            Rar
  1  Cult Conscript             x2   B      Enabler/Fodder  U
  2  Blight Pile                x2   B      Payload/Payoff  U
  2  Phyrexian Vivisector       x2   B      Payload/Payoff  C
  2  Splatter Goblin            x2   B      Enabler/Fodder  C
  3  Braids, Arisen Nightmare   x1   B      Engine/Outlet   R
  3  Gibbering Barricade        x2   B      Engine/Outlet   C
  4  Sheoldred, the Apocalypse  x1   B      Payload/Payoff  M
  5  Sengir Connoisseur         x2   B      Payload/Payoff  U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                  Qty  Color  Role                    Rar
  1  Bone Splinters        x2   B      Interaction/Disruption  C
  1  Cut Down              x1   B      Interaction/Disruption  U
  4  Drag to the Bottom    x1   B      Interaction/Disruption  R
  4  Extinguish the Light  x1   B      Interaction/Disruption  C
```

### OTHER SPELLS (4)

```
CMC  Card                       Qty  Color  Role            Rar
  3  Braids's Frightful Return  x2   B      Engine/Outlet   U
  3  Liliana of the Veil        x1   B      Payload/Payoff  M
  5  The Cruelty of Gix         x1   B      Engine/Outlet   R
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in
Battlefly Swarm          x2   B      Interaction/Fodder — vs. the flying half of the cube's 51-card evasion class (31 of the 51 have flying). 'Flying / {B}: This creature gains deathtouch until end of turn' blocks and kills any flier regardless of size for one mana, and it is still sacrifice fodder afterwards.  [C]
Knight of Dusk's Shadow  x2   B      Threat/Interaction — vs. the cube's lifegain class: 'Your opponents can't gain life' turns the whole class off. Counted opponent-facing, that class is 18 cards, not the 22 the dossier reports — 4 of the 22 (Extinguish the Light, Gibbering Barricade, Sheoldred, and this card itself) are cards this deck runs.  [U]
Pilfer                   x2   B      Interaction/Disruption — vs. decks with a single unanswerable bomb or a combo piece — 'Target opponent reveals their hand. You choose a nonland card from it. That player discards that card' takes it before it is ever cast. This is also the deck's only answer to the artifact and enchantment classes, which mono-black cannot remove once resolved: take them from hand instead.  [C]
Toxic Abomination        x2   B      Interaction/Fodder — vs. fast ground aggro, the matchup failure_modes.raced concedes. A {1}{B} 3/2 is the cheapest black body that blocks and kills a 2- or 3-power attacker; the maindeck's own 2-drops are 2/1s and 2/2s. Its 'you lose 2 life' is why it is not maindeck, and is acceptable in the exact matchup where the alternative is dying on turn 6.  [C]
Tattered Apparition      x2   B      Interaction/Threat — vs. flying decks and in races generally: 'Flying / {1}{B}: This creature gets +1/+1 until end of turn' is both a blocker for the class the maindeck concedes and an evasive mana sink in a flood. Boarded in alongside Battlefly Swarm, these take the anti-race slot count from 2 of 10 to 4 of 10.  [C]
```

## ANALYSIS

### DECK IDENTITY

A mono-black attrition deck that wins by making every exchange asymmetric. Braids, Arisen Nightmare and Braids's Frightful Return present the opponent a choice where both branches favour us; Liliana of the Veil strips hand and board on a clock; The Cruelty of Gix and Gibbering Barricade convert the deck's own dying bodies into cards. Blight Pile turns the deck's Defenders into a mana-only clock that needs no board and no card, and Drag to the Bottom is the only mass-removal effect mono-black can cast in this cube. Sheoldred, the Apocalypse turns the resulting card-advantage lead into a life-total lead, and Sengir Connoisseur grows into an evasive finisher off the same deaths. The manabase is 17 Swamps: this is the one pipeline in the cube whose payoffs are all double-black, and buying perfect mana is the structural argument for playing it.


### THE PRICE AND THE PURCHASE

Every deck built from this pipeline pays the same price - mono-colour means no fixing, no utility lands, and no second colour's answers - and the purchase is a single number: **8 copies across the list cost double black or heavier**, and all 8 are castable on curve every game. Braids on turn 3, Liliana on turn 3, Sheoldred on turn 4, Drag to the Bottom on turn 4, Sengir Connoisseur and The Cruelty of Gix on turn 5. No two-colour deck in this cube can promise that; the B/W deck's Aron is a turn-3 play in a minority of games and the B/R deck over-serves red by 20.6 percentage points just to cast one card.

The Phase 6b goldfish check reflects it: **86% keepable hands, 3 lands by turn 3 in 88%, a 100% turn-3 play rate** - the best numbers of the four decks built from this cube.

### WHY BRAIDS IS NOT A SYMMETRICAL CARD

> At the beginning of your end step, you may sacrifice an artifact, creature, enchantment, land, or planeswalker. If you do, each opponent may sacrifice a permanent of their choice that shares a card type with it. For each opponent who doesn't, that player loses 2 life and you draw a card.

It reads symmetrical and is not, for three reasons this deck is built to exploit:

1. **We choose the card type.** Sacrificing a land when the opponent is on 4 lands is a different card from sacrificing a creature when their board is empty. The deck runs 4 of the 5 sacrificeable types.
2. **Our sacrifice is often free value.** Splatter Goblin's death removes an X/1; Phyrexian Vivisector scries; Blight Pile and Gibbering Barricade are Defenders we were not attacking with anyway. The opponent's sacrifice is a real card.
3. **Both branches are good for us.** If they sacrifice, their board shrinks. If they don't, we draw and they lose 2 - and Sheoldred turns that draw into 2 more life.

### THE DEFENDER CLOCK

The Phase 9 grill found that this deck had been excluding its own best card on a misreading. Blight Pile reads:

> Defender / {2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control.

The tap symbol is **Blight Pile's own** - the Gibbering Barricades are never tapped, so they can be sacrifice outlets and X-count simultaneously. And Blight Pile has Defender itself, so it counts toward its own X. With Blight Pile x2 and Gibbering Barricade x2 on the battlefield, **each Blight Pile drains 4 per turn for {2}{B}**, spending no card and no creature. In a deck whose stated failure mode was having nothing to do with surplus mana, that is the whole answer - and it is a second, uninteractive win condition that does not care whether the opponent's board is empty or enormous.

### THE HOLE THIS DECK CANNOT FILL

An oracle-text scan of every mono-black card in the pool returns **exactly one** card that even mentions artifacts or enchantments, and it is Braids itself. Against the cube's 15 artifacts and 18 enchantments the deck's entire maindeck answer is to sacrifice one of its own to Braids and make the opponent match the type - a real answer, but one the opponent chooses the target for.

The grill corrected one thing about how that gap was described: **colour is not the binding constraint.** Karn's Sylex is colourless, costs {3}, and destroys each nonland permanent with mana value X or less - castable off 17 Swamps. It is excluded on the mythic cap and on symmetry (all 23 nonland cards here are MV 5 or less), not because black cannot reach it. The sideboard answers the class the only proactive way the colour allows: Pilfer x2, taking the card from hand before it is ever cast.

That gap is the structural cost of the perfect manabase, and it is why this pipeline was flagged at strategy selection as edict-control rather than aristocrats. Only **4 of the 23 nonland cards** (Cult Conscript x2, Splatter Goblin x2) are pure self-sacrifice fodder; the deaths that carry this deck are mostly the opponent's.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:5  2:6  3:6  4:3  5:3
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.8: Liliana of the Veil@0.8) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 4 copies → p=0.81 (need ≥ 0.75)
  PASS  outlet: 8 copies (effective 6.1: Braids, Arisen Nightmare@0.7, Braids's Frightful Return@0.5, Braids's Frightful Return@0.5, The Cruelty of Gix@0.4) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 67%  T2 95%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Drag to the Bottom, Splatter Goblin, Cut Down, Liliana of the Veil
  OK        single_large_threat: Bone Splinters, Extinguish the Light, Liliana of the Veil
  CONCEDED  noncreature_permanents: Mono-black has ZERO artifact or enchantment removal anywhere in this cube. An oracle-text scan of every mono-black card in the pool returns exactly one card that even mentions those types, and it is Braids, Arisen Nightmare's own symmetric sacrifice. CORRECTED after the Phase 9 grill: the binding constraint is NOT colour. Karn's Sylex is colourless, costs {3}, is castable off 17 Swamps, and reads '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less' - a genuine answer to both classes. It is excluded on the 5-card rare/mythic cap (fully spent on Braids, Liliana, Sheoldred, The Cruelty of Gix and Drag to the Bottom) and on symmetry: all 23 of this list's nonland cards have mana value 5 or less, so any X large enough to answer a real threat destroys our own board too. Mainboard, the class is answered only by sacrificing an artifact or enchantment to Braids and forcing a type match, which the opponent chooses the target for. From the sideboard, Pilfer x2 takes the card from hand before it is ever cast - the only proactive answer the colour has.
  CONCEDED  stack: Black has no counterspell anywhere in this cube. This deck answers threats after they resolve, which is what its removal suite and Braids/Liliana are for; the compensating advantage is that it never has to hold mana up, so every turn is spent developing.
  CONCEDED  graveyard: dossier.structural_census reports 0 graveyard-hate cards in the entire cube, so no colour can answer this class at all. Against the cube's 32 graveyard cards this deck relies on Liliana's +1 and The Cruelty of Gix chapter I stripping the card before it is ever cast.
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | REWRITTEN after the Phase 9 grill marked the previous version UNSATISFIED, and the reason it was right is worth stating: the old mitigation named Cult Conscript as a mana sink that 'rebuys a body' for {1}{B}, but its full text reads 'Activate only if a non-Skeleton creature died under your control this turn' and Cult Conscript is itself a Creature - Skeleton Warrior. Sacrificing a Conscript to Gibbering Barricade does NOT enable its own return, so in the exact state the flood mode describes - surplus mana, empty hand, thin board - that loop is dead. The repaired answer is Blight Pile x2: '{2}{B}, {T}: Each opponent loses X life, where X is the number of creatures with defender you control', which needs no card, no creature sacrificed and no board beyond itself, and which counts itself plus Gibbering Barricade x2 for X = 4 per activation. Alongside it: Gibbering Barricade x2 ({2}{B} per card drawn while creatures remain) and Cult Conscript x2 as a conditional sink whose gate is now stated rather than elided. |
| screw | mitigation | Perfect mana is this pipeline's whole structural argument: 17 Swamps means colour screw is impossible and only land COUNT can fail. CORRECTED after the grill: the previous version claimed 11 of 23 cards are castable off two lands, counting Bone Splinters x2 - which reads 'As an additional cost to cast this spell, sacrifice a creature' and is uncastable with an empty board, the normal state on turns 1-2. The unconditional figure is 9 of 23. The Phase 6b goldfish check still carries the mode: 86% keepable hands, 3 lands by turn 3 in 88% of hands, 95% turn-2 and 100% turn-3 play rates - the best figures of any of the four decks built from this cube. |
| decapitation | mitigation | No single card is the plan. The payoff role is 7 copies across 5 different cards (Braids x1, Liliana x1, Sheoldred x1, Blight Pile x2, Phyrexian Vivisector x2) and the outlet role is 8 copies across 4 cards, with P(payoff by turn 9) = 0.95 and P(outlet) = 0.93. Braids's Frightful Return chapter II ('Return target creature card from your graveyard to your hand') and The Cruelty of Gix chapter III ('Put target creature card from a graveyard onto the battlefield under your control') both rebuy an answered threat, and The Cruelty of Gix chapter II tutors a replacement outright. |
| gas-out | mitigation | This is the deck's strongest axis and the count is specific, with one elision the grill correctly caught now removed: Braids, Arisen Nightmare draws at each end step the opponent declines to match; Gibbering Barricade x2 draws a card per sacrifice for {2}{B}; Braids's Frightful Return x2 returns a creature (II) and draws (III); The Cruelty of Gix tutors any card (II); Phyrexian Vivisector x2 scries on every death; and Cult Conscript x2 returns itself from the graveyard for {1}{B} - but ONLY after a non-Skeleton creature has died that turn, which is a real gate and is no longer described as 'mana alone'. That is 10 of 23 nonland cards that keep producing after the hand empties, and Sheoldred converts each of those draws into 2 life. |
| raced | accepted | This is the deck's real weakness and it is accepted rather than papered over. The maindeck's only flying blockers are Sengir Connoisseur x2 at {3}{B}{B}, against 31 flying cards in the cube's 51-card evasion class - a figure the Phase 9 grill independently verified - and the deck's own clock is a turn-9 goldfish, the slowest of the four built from this cube. Mitigating properly would mean adding cheap defensive bodies in place of Braids's Frightful Return or Gibbering Barricade, which are the two cards that make the attrition plan work at all; a mono-black deck that trades its engine for blockers stops being an attrition deck and becomes a worse aggro deck with no reach. What DID change after the grill is the sideboard: it previously spent 4 of 10 slots (Eerie Soultender x2, Phyrexian Rager x2) reinforcing attrition, the axis this deck is already best on, while giving the conceded losing matchup 2. Those four slots now hold Tattered Apparition x2 ('Flying / {1}{B}: +1/+1') and Toxic Abomination x2 (a {1}{B} 3/2 ground wall), taking the anti-race count from 2 of 10 to 6 of 10 - of which 4 (Battlefly Swarm x2, Tattered Apparition x2) specifically block fliers and 2 (Toxic Abomination x2) block the ground. |
| disruption-fizzle | mitigation | There is no critical turn to disrupt. The deck has no combo turn and no assembly requirement - Braids, Braids's Frightful Return and The Cruelty of Gix each generate value in isolation the turn after they land, and none of them targets or needs a second piece on the battlefield. A removal spell aimed at any one of them costs the opponent a card for a card while the other 22 continue; a counterspell does not exist in this cube for the opponent to hold. The mechanism that makes this true is Braids's own text: the ability is a triggered ability at the beginning of your end step with no target, so there is no window in which responding to it prevents the value. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Shadow Prophecy | Domain — 'Look at the top X cards of your library, where X is the number of basic land types among lands you control.' A mono-black 17-Swamp manabase has exactly 1 basic land type, so X is 1: look at one card, keep up to one, lose 2 life, for {2}{B}. This is the single clearest count-based exclusion in the deck. |
| Defiler of Flesh | Its cost reduction applies to BLACK PERMANENT spells only; 18 of this list's 23 nonland cards are black permanents (78.3%) — a count corrected upward by the Phase 9 grill from an earlier claim of 15, and stated against our own exclusion. It is excluded on the 5-card rare/mythic cap, and on the shape judge's grounds that a life-payment tempo engine works against a plan that wants to reach turn 9. |
| Evolved Sleeper | A strong 1-mana mana sink, but it has zero sacrifice or death interaction and would spend a capped rare slot. The shape judge flagged it as a weak keystone in the rejected threat-dense sketch for exactly this reason. |
| Shadow-Rite Priest | '{3}{B}{B}, {T}, Sacrifice another Cleric: Search your library for a black creature card' — the final list runs 0 other Clerics, so the ability has no legal fuel. The shape judge flagged this in the rejected toolbox sketch and the count confirms it. |
| Tyrannical Pitlord | 'When this creature leaves the battlefield, sacrifice the chosen creature' — a 6-mana rare that makes our own board worse when answered, in a deck whose curve tops at 5. |
| Writhing Necromass | 'This spell costs {1} less to cast for each creature card in your graveyard.' The list runs 14 creature copies across 8 names of 23 nonland cards; a realistic mid-game graveyard holds 2-3, making it a 4-5 mana vanilla deathtouch body with no death or sacrifice text. |
| Relic of Legends / Salvaged Manaworker / Crystal Grotto | Colourless mana sources were rejected on composition: 8 copies across the list cost double black or heavier, so every colourless source directly threatens an on-curve Braids, Liliana, Sheoldred, Extinguish the Light, Drag to the Bottom, Sengir Connoisseur or The Cruelty of Gix. 17 Swamps is the correct manabase, not a lazy one. |
| Golden Argosy | 'Whenever Golden Argosy attacks, exile each creature that crewed it this turn. Return them to the battlefield tapped ... at the beginning of the next end step' — the creatures are EXILED, not killed, so it triggers 0 of this deck's death payoffs, and it costs a capped rare slot. |
| The Raven Man | Was in the pre-grill mainboard. 'At the beginning of each end step, if a player discarded a card this turn, create a 1/1 black Bird creature token with flying' — the maindeck had exactly 3 discard sources (Liliana x1, Braids's Frightful Return x2), which is why it was already declared at reliability weight 0.6. It gave up its capped rare slot to Drag to the Bottom, which needs no enabler. |
| Weatherlight Compleated | EXCLUDED ON THE MYTHIC CAP ALONE, and the earlier reason given for it was wrong. Its full text is 'Whenever a creature you control dies, put a phyresis counter on it. Then draw a card if it has seven or more phyresis counters on it. If it doesn't, SCRY 1', plus Flying and a clause making it a 5/5 Phyrexian creature at four counters. It has the same scry-1-per-death floor as Phyrexian Vivisector at the same mana value, with a 5/5 flying upside — a strict upgrade on a card this deck runs two of, and the only card in the castable pool that addresses the raced weakness. The 5 rare/mythic slots are fully spent; that is the only reason it is out. |
| Karn's Sylex | '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less' would be mono-black's ONLY artifact and enchantment answer, and it is colourless so 17 Swamps casts it — colour is not what excludes it. It is out on the mythic cap and on symmetry: all 23 nonland cards in this list are mana value 5 or less, so any X large enough to answer a real threat destroys our own board. |
| Eerie Soultender | Was in the pre-grill sideboard. '{4}{B}, Exile this card from your graveyard: Return another target creature card from your graveyard to your hand' is real recursion at 5 mana per activation. Cut because the sideboard was spending 4 of 10 slots (with Phyrexian Rager x2) on attrition, the axis this deck is already strongest on, while the matchup it concedes losing got 2. Those slots went to Tattered Apparition x2 and Toxic Abomination x2. |
| Phyrexian Rager | Was in the pre-grill sideboard. 'When this creature enters, you draw a card and you lose 1 life' is a self-replacing body, but see Eerie Soultender: the sideboard needed those slots for the conceded race matchup, not for more card advantage in the matchup this deck already wins. |
| Shadow-Rite Priest | '{3}{B}{B}, {T}, Sacrifice another Cleric: Search your library for a black creature card' — the final list runs 0 Clerics among its 8 creature names, so the ability has no legal fuel. The shape judge flagged this in the rejected toolbox sketch and the count confirms it. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.7   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.27 adj [MV 2.7 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1. mainboard count == 40  -- got 40
  [PASS] 1. sideboard count == 10  -- got 10
  [PASS] 2. every name exists in working pool (exact match)  -- []
  [PASS] 3. copy counts obey card_pool_rules
  [PASS] 3b. <=5 rares/mythics across MB+SB  -- 5: Braids, Arisen Nightmare x1 (rare), Drag to the Bottom x1 (rare), Liliana of the Veil x1 (mythic), Sheoldred, the Apocalypse x1 (mythic), The Cruelty of Gix x1 (rare)
  [PASS] 4. every nonland usable in core+splash (best_mode)  -- []
  [PASS] 5. <=3 cards per splash colour, all in splash_candidates  -- splash_colors=[] used=[]
  [PASS] 6. land count within 1 of recommendation  -- have 17, recommended 17
```
