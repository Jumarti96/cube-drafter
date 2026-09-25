---
deck_name: "br-blight-attrition"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BR"
format: "40-card"
built_at: "2026-08-10T00:32:19Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x9  Swamp           Land  [C]
x4  Mountain        Land  [C]
x2  Geothermal Bog  Land (BR dual, tapped)  [C]
x1  Blood Crypt     Land (untapped-capable BR dual)  [R]
x1  Evolving Wilds  Land; sacrificing it puts a land card in the yard, a live Moonshadow trigger  [C]
```

### CREATURES (15)

```
CMC  Card                  Qty  Color  Role
  1  Dawnhand Dissident    x1   B      The pool's only repeatable CROSS-BODY counter remover; also graveyard exile and an Elf card  [R]
  1  Moonshadow            x1   B      Apex threat: 7/7 menace for {B}, six counters to shed  [M]
  2  Creakwood Safewright  x2   B      Threat: 5/5 for two that repairs itself while an Elf card is in the yard; it is itself an Elf card  [U]
  2  Gristle Glutton       x2   R      Free every-turn blight source + loot; recharges the counter-spenders and draws  [C]
  3  Brambleback Brute     x2   R      Threat + counter-spender: one counter makes an attacker unblockable  [C]
  3  Gnarlbark Elm         x1   B      Threat + counter-spender: two counters become -2/-2  [U]
  3  Heirloom Auntie       x2   B      Threat: 4/4 that repairs itself on every creature death and surveils  [C]
  3  Retched Wretch        x1   B      Threat that returns when it dies carrying a counter  [U]
  4  Graveshifter          x2   B      Changeling CREATURE card + creature rebuy  [U]
  4  Gutsplitter Gang      x1   B      6/6 that enters with NO counters and manufactures 2 every turn for the spenders (held to 1 copy: at 2 the blight glut kills the deck's own 2-toughness bodies)  [U]
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                  Qty  Color  Role
  2  Bogslither's Embrace  x2   B      Interaction: unconditional exile; its blight loads a spender  [C]
  2  Nameless Inversion    x2   B      Interaction + a changeling Elf card for Creakwood Safewright  [U]
  2  Sear                  x2   R      Interaction: 4 damage  [U]
  4  Perfect Intimidation  x2   B      Payoff: removes ALL counters from target creature, or strips two cards, or both  [U]
```

## SIDEBOARD (10)

```
Card             Qty  Color  Role / When to board in
Giantfall        x2   R      Hate: artifacts — vs Equipment or mana-rock decks (11 artifacts, 4.2% density). Board mode one only alongside a full-size body - most of this deck's creatures arrive shrunken, so 'damage equal to its power' is small on arrival  [U]
Blight Rot       x2   B      Hate: large single threats — vs decks whose best creature has 4 or less toughness; four counters at instant speed  [C]
Feed the Flames  x2   R      Hate: recursive / oversized threats — vs decks whose threats come back - the exile clause is the only permanent answer in these colours  [C]
Nightmare Sower  x2   B      Flex: evasive lifelink blocker — vs fast aggro - it is the evasive blocker AND the lifegain the raced mode concedes the maindeck lacks, and its trigger fires off the deck's 5 instants  [U]
Rooftop Percher  x2   C      Hate: graveyard — vs recursion decks (39 graveyard-interaction cards, 15.0% of the cube); its changeling also makes it an Elf CREATURE card in your own yard  [C]
```

## ANALYSIS

### DECK IDENTITY

BR attrition, built on a pricing error the cube makes on purpose: it sells large creatures cheaply by making them ENTER with -1/-1 counters. Moonshadow is a 7/7 menace for a single black mana that arrives carrying six counters — so it is a 1/1 on turn one. Creakwood Safewright is a 5/5 for two that arrives as a 2/2. Heirloom Auntie is a 4/4 for three that arrives as a 2/2. The deck's whole job is to settle that debt, and it does so three ways: it removes counters outright (Perfect Intimidation removes ALL counters from a target creature — the only cross-body remover in the colours), it lets bodies repair themselves (Heirloom Auntie on every creature death, Moonshadow on every permanent card reaching the graveyard, Creakwood Safewright each end step while an Elf card is in the yard), and where a counter cannot be removed it is SPENT — Gnarlbark Elm turns two into -2/-2, Brambleback Brute turns one into an unblockable attacker, and Retched Wretch turns one into a free return from the graveyard. Gristle Glutton and Gutsplitter Gang manufacture the counters those spenders run on, for free, every turn.

### HOW THE ENGINE WORKS

The premise is a pricing error the cube makes on purpose. A 7/7 with menace is a six-drop; Moonshadow costs {B}. A 5/5 is a five-drop; Creakwood Safewright costs {1}{B}. The cube charges for the discount in -1/-1 counters, and this deck is built to collect the discount and then settle the debt cheaply.

There are four routes, running at different speeds:

| Route | Rate | Card |
|---|---|---|
| All at once, any creature | one shot | Perfect Intimidation — "Remove all counters from target creature" |
| Three at once, spread across your board | repeatable, as a cast cost | Dawnhand Dissident — "by removing three counters from among creatures you control" |
| Per creature death | one per death | Heirloom Auntie — "Whenever another creature you control dies, surveil 1, then remove a -1/-1 counter" |
| Per permanent card to the yard | one per event | Moonshadow — triggers "from anywhere", so a milled card, a dead creature, a discarded permanent or a sacrificed Evolving Wilds all count |
| Per end step | one per turn | Creakwood Safewright — conditional on an Elf card in the yard |

That last row is the interaction the deck is quietly built on. Creakwood Safewright's condition looks like a green-black clause stranded in a BR deck — until you count what an Elf card actually is here. Nameless Inversion and Graveshifter both have changeling, which makes them every creature type in every zone; Dawnhand Dissident is printed Elf Warlock; and Creakwood Safewright is itself printed Elf Warrior, so the first copy to die switches on the second. That is 7 of the 23 nonland cards, not the 2 this build originally claimed.

The other half of the plan is that counters which cannot be removed get SPENT. Gnarlbark Elm converts two into -2/-2; Brambleback Brute converts one into an unblockable attacker; Retched Wretch converts one into a free return from the graveyard. The version of this deck that went into the self-grill had six lifetime activations across those cards and no way to reload them — the counters they consumed were the counters they entered with. Gristle Glutton ("{T}, Blight 1: Discard a card. If you do, draw a card", free, every turn) and Gutsplitter Gang (a 6/6 that enters with no counters and makes two every first main phase) turn that finite stock into a flow.

### COUNT-DEPENDENT VERDICTS

- Creakwood Safewright reads 'At the beginning of your end step, if there is an ELF CARD in your graveyard and this creature has a -1/-1 counter on it, remove a -1/-1 counter.' Elf cards in this mainboard: Nameless Inversion x2 and Graveshifter x2 (both changeling, so every creature type), Creakwood Safewright x2 itself (printed Creature - Elf Warrior, so a dead or milled copy switches on the other), and Dawnhand Dissident x1 (Creature - Elf Warlock) = 7 of the 23 nonland cards. The Phase 9 Challenger caught that the original figure of 2 UNDERcounted this by missing Creakwood Safewright's own printed type. It is still declared at weight 0.8 in the assembly check because the first turn cycle can precede the first Elf card reaching the yard.
- Moonshadow reads 'Whenever one or more PERMANENT CARDS are put into your graveyard from anywhere while this creature has a -1/-1 counter on it, remove a -1/-1 counter.' Permanent cards in this deck: 16 creature cards + 17 lands = 33 of the 40; the 7 nonpermanents are Nameless Inversion x2, Bogslither's Embrace x2, Sear x1 and Perfect Intimidation x2. The trigger reads 'from anywhere', so a land sacrificed to Evolving Wilds, a creature dying, a permanent card binned by Heirloom Auntie's surveil, and a permanent card discarded to Gristle Glutton's loot all count. It still needs six such events, which is why it is declared at weight 0.6 and why Perfect Intimidation is maindecked at 2 copies as the one-shot alternative.
- Heirloom Auntie reads 'Whenever ANOTHER creature you control dies, surveil 1, then remove a -1/-1 counter from this creature.' Other creature cards in this mainboard, from a resolved Auntie's perspective: 15. It needs only two deaths to reach 4/4, and each surveil can bin a permanent card, which is simultaneously a Moonshadow trigger.
- THE COUNTER ECONOMY, stated as a flow rather than a stock — this is the count the Phase 9 Challenger's F5 and F6 were about. Counters ENTERING on a full deploy: Moonshadow 6, Creakwood Safewright 3 each (6), Heirloom Auntie 2 each (4), Gnarlbark Elm 2, Brambleback Brute 2 each (4) = 22 across 8 bodies. Five of the 14 nonland card names enter completely clean: Gutsplitter Gang, Graveshifter, Gristle Glutton, Retched Wretch and Dawnhand Dissident. RECURRING blight sources that manufacture counters for the spenders: Gristle Glutton x2 (free, no mana, every turn) and Gutsplitter Gang x2 (blight 2 every first main phase) = 4 cards producing up to 6 counters per turn. SPENDERS that convert a counter into value: Gnarlbark Elm x1 (two counters into -2/-2), Brambleback Brute x2 (one counter into an unblockable attacker), Retched Wretch x1 (one counter into a free return from the graveyard) = 4 cards. The pre-repair list had 6 lifetime activations and no recurring source; it now has an unbounded one.
- CROSS-BODY counter removal — removal that can take a counter off a creature other than itself. Perfect Intimidation x2 ('Remove all counters from target creature') and Dawnhand Dissident x1 ('you may cast creature spells from among cards you own exiled with this creature by removing three counters from among creatures you control') = 3 of the 40 cards. The pre-repair list had exactly 1, which was the Challenger's F2, and it was the only backstop for the four self-repair clocks. Dawnhand Dissident is declared at weight 0.7 because its removal is a COST attached to casting a creature it previously exiled, so it needs a prior turn spent on its blight-2 exile ability.
- REJECTED BY COUNT — Darkness Descends ('Put two -1/-1 counters on each creature'): symmetric, and 8 of this deck's 13 threat copies already enter carrying counters. Two more kill Creakwood Safewright, Heirloom Auntie and Gnarlbark Elm outright while an opponent's clean board survives at -2/-2. It is the only sweeper in these colours and it is unplayable in this specific deck.
- REJECTED BY COUNT — Boneclub Berserker ('+2/+0 for each other Goblin you control'): Goblin cards in this mainboard number 3 (Gristle Glutton x2, Retched Wretch x1), so the multiplier's denominator is 3 rather than the 17 it reaches in the go-wide build.
- REPAIR-ROUND COUNT — why Gutsplitter Gang is held to 1 copy rather than 2. Its blight 2 is mandatory-or-lose-3-life and puts both counters on a SINGLE creature you control. Creature names in this mainboard with 2 or less toughness: Creakwood Safewright (2/2 on arrival), Heirloom Auntie (2/2 on arrival), Gnarlbark Elm (1/2 on arrival), Graveshifter (2/2), Dawnhand Dissident (1/2), Retched Wretch (4/2) = 6 of the 10 creature names die outright to one blight 2. Sink capacity is about 4 counters per turn (Brambleback Brute x2 at {1}{R} for one each, Gnarlbark Elm at {2}{B} for two), which consumes an entire turn's mana at 17 lands. Two copies would fire 4 counters per turn against that — a one-sided partial Darkness Descends aimed at my own board, which is precisely the reason this same record rejects Darkness Descends. One copy generates 2 counters per turn against ~4 of sink capacity, which is the flow the spenders actually want.

### SLOT ALLOCATION

| Slot | Count | % | Rationale |
|---|---|---|---|
| lands | 17 | 42.5% | computed by deck_audit.land_target from avg MV 2.609 and accel 1; raw target 17.15 rounds to 17. |
| interaction | 8 | 34.8% | Nameless Inversion x2, Bogslither's Embrace x2, Sear x2, Perfect Intimidation x2 — above the Midrange 20-30% band. Two of the eight pay into the kill mechanism rather than competing with it: Bogslither's Embrace's blight cost loads a counter-spender, and Nameless Inversion is a changeling, so casting it puts an Elf card in the graveyard and switches on Creakwood Safewright's repair. Sear returned to 2 copies in the final repair round because cutting it to 1 had quietly dropped creature-removal density from 8 cards to 5 while the curve got slower. |
| threats_payoffs | 12 | 52.2% | Above the Midrange 30-40% band because the Midrange note absorbs the Engine budget into threats that pull double duty: Heirloom Auntie surveils, Gnarlbark Elm is removal, Brambleback Brute is evasion, Graveshifter is recursion, Gutsplitter Gang is the blight source. Each is a body first. |
| engine_infra | 3 | 13.0% | Gristle Glutton x2 and Dawnhand Dissident x1 — a deliberate deviation from the Midrange 0% line, and the Phase 9 Challenger is the reason for it. A 1/3 and a 1/2 are not threats; booking them as threats would misrepresent the curve, which is precisely the accounting error the Challenger flagged elsewhere in this record. They are the counter economy: Gristle Glutton is a free every-turn blight source with a loot attached, and Dawnhand Dissident is the pool's only repeatable cross-body counter remover. |

### MANA DERIVATION

- Land target after FILL: {"base_lands": 17, "base_p_window": 0.7945, "avg_mv": 2.6087, "reference_avg_mv": 2.5, "accel": 1, "adjustment": 0.145, "raw_target": 17.145, "clamped": false, "recommended_land_count": 17, "p_window_at_recommended": 0.7945}
- Deviation: none — built to 17, the computed recommendation.
- Composition: 4 of the 17 lands are tapped-capable (Geothermal Bog x2, Evolving Wilds, and Blood Crypt if the 2 life is declined), which a turn-8 controller can afford and neither aggro build could. Evolving Wilds is kept for a second reason beyond fixing: sacrificing it puts a LAND card into the graveyard, and a land card is a permanent card, so it is a live Moonshadow de-counter trigger that costs no card.
- Pips: {"B": 18, "R": 5} → B 78.3% / R 21.7%
- Sources: 9 Swamp + Blood Crypt + Geothermal Bog x2 = 12 black sources, 70.6% of 17; 4 Mountain + Blood Crypt + Geothermal Bog x2 = 7 red, 41.2%. Evolving Wilds is deliberately NOT counted in either figure — it fetches one basic of one colour, chosen on resolution, which is how deck_audit.land_color_production treats it. Red is over-served relative to its 21.7% demand on purpose: all three red cards want to be cast on curve rather than eventually, and Gristle Glutton at {1}{R} is the deck's free blight engine.
- Data gap: none — every card in this list has a printed mana_cost in the enriched data.

### BUILD SELECTION (Phase 5B sketch → judge → lock)

**Archetype family:** midrange — The locked pipeline's default_role is 'controller' and the win comes from out-grinding the opponent, but the threats are large creature bodies pulling double duty as blockers, win condition and value engine — the Midrange 'threats pull double duty' shape rather than a reactive control shell.

**Chosen lens:** most flexible toolbox

**Judge grounds:** It is the only build that supplies on-demand, mana-independent counter removal — Perfect Intimidation removes ALL counters (the single clean way to turn Moonshadow's six into a live 7/7 menace in one shot) and Gnarlbark Elm converts counters into repeatable -2/-2 — while its blight costs are routed onto Brambleback Brute and Gnarlbark Elm, the only bodies in any sketch that SPEND counters for value rather than merely waiting them off. The 39% Interaction overshoot is thesis-grounded because those answers pay into the kill mechanism.

**Rejected builds:**

- *most threat-dense / aggressive* (23 nonland: Interaction 30%/7, Threats-Payoffs 70%/16, Engine 0%) — Judge: it routes 100% of the unallocated band into bodies and then admits its own apex threat lands as a 1/1, so the 'answer a fresh oversized threat every turn' claim is not delivered by the quoted text — it is the build most dependent on counter removal and the one supplying the least of it, and its aggressive posture contradicts the locked controller role and goldfish 8.
- *most grindy value* (23 nonland: Interaction 30%/7, Threats-Payoffs 39%/9, Engine 30%/7) — Judge: it correctly identifies that graveyard traffic IS the de-countering resource, but buys that with a declared 30% Engine budget the Midrange note explicitly absorbs, dropping to 9 threats — and every de-counter it owns is passive and rate-limited (one per trigger, one per end step), so a Moonshadow at six counters is still several turns from mattering, with no Perfect Intimidation or Gnarlbark Elm to short-circuit it.

**Weak keystones flagged by the judge, and their resolution:**



**Harvested from rejected builds:**

- Brambleback Brute (from *most threat-dense / aggressive*) — a threat that spends its own counters for evasion — a Threats/Payoffs slot
- Retched Wretch (from *most threat-dense / aggressive*) — a body whose death-return makes trading with a counter-laden 4/2 free — a Threats/Payoffs slot
- Gristle Glutton (from *most grindy value (the graveyard-throughput idea)*) — added during the Phase 9 repair as the free recurring blight source — booked honestly in the Engine slot rather than smuggled into Threats

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:10  3:6  4:5
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 12 copies (effective 11: Moonshadow@0.6, Creakwood Safewright@0.8, Creakwood Safewright@0.8, Retched Wretch@0.8) → p=0.99 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.7: Dawnhand Dissident@0.7) → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 34%  T2 94%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: The deck carries no sweeper. Darkness Descends is the only one in these colours and this build rejects it by count: 8 of the 13 threat copies already enter carrying -1/-1 counters, so two more kill Creakwood Safewright, Heirloom Auntie, Gnarlbark Elm and Graveshifter outright while a clean opposing board survives at -2/-2. The single-target answers this deck does hold (Nameless Inversion x2, Sear x2, Bogslither's Embrace x2) answer one creature each and are not a wide-board answer, and saying otherwise would be the cheapest lie available. What the deck actually does against a wide board is refuse to trade down: Gutsplitter Gang is a 6/6, Moonshadow climbs to 7/7 menace, Creakwood Safewright to 5/5, Brambleback Brute is a 4/5 and Heirloom Auntie a 4/4, so individually small attackers cannot get through profitably while the six removal spells handle the one threat that outgrows them.
  OK        single_large_threat: Bogslither's Embrace, Sear, Gnarlbark Elm
  CONCEDED  noncreature_permanents: This mainboard contains no answer to an artifact or an enchantment. Of the 99 BR-legal cards in the pool, none destroys or exiles an enchantment at all - the dossier's enchantment answers are green, green-blue and white only, 4 cards total - and the sole artifact answer in these colours is Giantfall, held in the sideboard because the cube carries 11 artifacts at 4.2% density. The enchantment class is the larger one (21 cards, 8.1%) and is simply unanswerable in black and red; Perfect Intimidation's first mode, exiling two cards from an opponent's hand, is the only pre-emptive route to it and is maindecked at 2 copies.
  CONCEDED  stack: Black and red contain no counterspells or stack interaction in this pool. The deck's answer to a countered threat is redundancy - 13 creature copies across 9 names, plus Graveshifter x2 rebuying a creature card from the graveyard - so trading one threat for one piece of interaction is the exchange the attrition plan wants.
  OK        graveyard: Dawnhand Dissident
```

- No WARN-tier flags returned. Curve PASS for midrange. Goldfish PASS: keepable and three-lands-by-turn-3 both comfortably above threshold.
- The turn-1 play rate is the lowest of the three decks and is accepted rather than repaired. The only one-mana plays this build wants are Moonshadow, which does nothing on turn one regardless because it arrives as a 1/1, and Dawnhand Dissident, whose abilities need a target and a graveyard. A controller with a turn-8 thesis is not trying to use its first turn; it is trying to still be alive on its eighth.
- role_counts books 12 payoff + 7 enabler = 19 of the 23 nonland cards. The four unbooked cards are Bogslither's Embrace x2 and Sear x2, which are pure removal with no pipeline role. This gap is deliberate and is the answer to the Phase 9 Challenger's booking query: role_counts counts only the cards filling a pipeline payoff or enabler role, not every card in the deck, and padding it with generic removal would make the assembly probability read better than it is.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable sinks turn surplus mana and surplus lands into effects without spending a card: Brambleback Brute ('{1}{R}, Remove a counter from this creature: Target creature can't block this turn'), Gnarlbark Elm ('{2}{B}, Remove two counters from this creature: Target creature gets -2/-2 until end of turn'), and Dawnhand Dissident's tap abilities. All three also shed counters as they fire, so a flooded turn makes the board bigger. Gristle Glutton ('{T}, Blight 1: Discard a card. If you do, draw a card') converts a flooded draw step into a fresh card for no mana at all. |
| screw | mitigation | Nine of the 23 nonland cards cost two mana. Creakwood Safewright is a two-mana play that presents a 2/2 immediately and climbs toward 5/5 from the first end step an Elf card is in the yard, and Nameless Inversion, Bogslither's Embrace, Sear and Gristle Glutton are all two-mana plays. The goldfish sim reports 85% keepable hands and 88% reaching three lands by turn 3. |
| decapitation | mitigation | There is no single key card: 13 creature copies across 9 different names, plus Graveshifter x2 ('Changeling / When this creature enters, you may return target creature card from your graveyard to your hand'), which rebuys whichever body was answered and is itself a body. Retched Wretch returns to the battlefield on its own when it dies carrying a counter, and Gristle Glutton and Gutsplitter Gang now guarantee it has one. The Phase 9 Challenger correctly refuted the earlier version of this entry, which leaned on Unbury's two-card mode being 'always live' — Nameless Inversion is a Kindred Instant, not a creature card, so that claim was false; Unbury was cut and Graveshifter, an actual changeling creature card, replaced it. |
| gas-out | mitigation | Three independent routes, none of which depends on a counter surviving. Gristle Glutton x2 ('{T}, Blight 1: Discard a card. If you do, draw a card') costs no mana and works every turn — but it is FILTERING, not net card advantage: it trades a card for a card, so it fixes flood and finds the missing piece rather than growing the hand. The actual card advantage is Graveshifter x2 ('you may return target creature card from your graveyard to your hand'), which is a genuine +1 each, and Dawnhand Dissident, which casts creature cards it previously exiled from a graveyard. Heirloom Auntie x2 surveils on every creature death on top of that. The pre-repair version of this entry rested on Shadow Urchin, whose payout scales with the counters STILL ON the dying body — anti-correlated with a deck whose whole plan is removing them — and it was a 1-of rare; the Phase 9 Challenger identified that and it was cut. |
| raced | accepted | The maindeck has no lifegain and no evasive blocker, and its threats arrive shrunken — a turn-two Creakwood Safewright is a 2/2, not a 5/5 — so the first three turns present less board than either aggro build, and the 34% turn-one play rate is the lowest of the three decks. Mitigating would mean maindecking Nightmare Sower ({3}{B} 2/3 flying lifelink) or Rooftop Percher for its 3 life, and both would come out of the eight interaction slots that answer the opposing board outright, which is a better use against a real clock than gaining two or three life. Nightmare Sower x2 is boarded for exactly this matchup instead. The deck's maindeck answer to a fast start is six cheap creature-removal spells (Nameless Inversion x2, Sear x2, Bogslither's Embrace x2) — a count that briefly fell to five during the repair round and was restored. The accepted cost is that a hand with no early interaction loses to the fastest draws. |
| disruption-fizzle | mitigation | There is no critical turn to disrupt — the deck wins by accumulation, not by one combo turn. The card whose loss would sting most is Perfect Intimidation, and it is run at both legal copies rather than one, with Dawnhand Dissident as a second, repeatable route to the same job ('by removing three counters from among creatures you control'). The Phase 9 Challenger refuted the earlier version of this entry, which named Heirloom Auntie, Moonshadow and Creakwood Safewright as substitutes: all three read 'remove a -1/-1 counter from THIS creature' and are self-repair only. They are still four independent clocks that keep running through disruption, but they are not substitutes for cross-body removal, and the list no longer claims they are. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Lasting Tarfire | '2 damage to each opponent at each end step in which you put a counter on a creature' — a fine reach engine, but this build's counters go onto its own fat as a cost paid once at cast time, not as a repeatable per-turn activation, so the trigger is live far less often than in the drain build. |
| Sting-Slinger | '{1}{R}, {T}, Blight 1: deals 2 damage to each opponent' — repeatable reach, but it taps a 3/3 every turn in a deck whose plan is holding the ground with large bodies; the body is worth more blocking than the 2 damage. |
| Boggart Cursecrafter | 'Whenever another GOBLIN you control dies, this creature deals 1 damage to each opponent' — this build's fat is Treefolk, Elemental, Ouphe and Elf as often as Goblin, so the Goblin-only denominator is roughly half the creature count rather than nearly all of it. |
| Boggart Mischief | Same Goblin-only restriction on its drain trigger, and its two 1/1 tokens are not the body size this build wins with. |
| Boneclub Berserker | '+2/+0 for each other Goblin you control' — this deck fields large single bodies rather than a wide Goblin board, so the multiplier's denominator is small. |
| Darkness Descends | 'Put two -1/-1 counters on each creature.' Symmetric, and this deck's own creatures are already carrying counters they are trying to remove — it kills Creakwood Safewright, Heirloom Auntie, Gnarlbark Elm and Brambleback Brute outright while the opponent's clean board survives at -2/-2. |
| Bloodline Bidding | Rare; 'Choose a creature type. Return all creature cards of the chosen type from your graveyard to the battlefield' with convoke. A genuine attrition finisher, but this deck's creatures span six different types, so 'all cards of the chosen type' returns a fraction of the graveyard unless the changeling count is much higher. |
| Mornsong Aria | Rare; 'Players can't draw cards or gain life. At the beginning of each player's draw step, that player loses 3 life, searches their library for a card...' — symmetric, and it switches off Requiting Hex's life gain and Blighted Blackthorn's draw, two cards this build relies on. |
| Dawnhand Dissident | Rare 1/2; '{T}, Blight 1: Surveil 1' and a counter-based exile-cast engine. The card is real, but it wants counters spread across many creatures while this deck concentrates them on a few large bodies it is trying to un-shrink. |
| Soul Immolation | Mythic; 'blight X, X can't be greater than the greatest toughness among creatures you control. Deals X damage to each opponent and each creature they control.' — a strong one-sided sweeper here (X up to 7 off Moonshadow), but it costs a rare/mythic slot and puts X counters on a single creature you control, undoing the counter-removal the deck spent cards on. |
| Spinerock Tyrant | Mythic 6/6 flier with wither for five; the wither clause turns its damage into -1/-1 counters on the opponent's creatures, which is on-theme, but it competes for the rare cap against the recursion package. |
| Grub, Storied Matriarch // Grub, Notorious Auntie | Rare; its recursion returns 'a Goblin card', and this build's creature base is mostly non-Goblin, so the return clause has a small denominator here compared to the two Goblin builds. |
| Moonglove Extractor | 'Whenever this creature attacks, you draw a card and lose 1 life' — card advantage on a 2/1 body that cannot profitably attack into the midrange boards this deck is built to grind against. |
| Bitterbloom Bearer | Mythic; a 1/1 flier making a 1/1 Faerie each upkeep at the cost of 1 life per turn — a token stream, but this build wins with individually large bodies and the life loss runs the wrong way in a long game. |
| Iron-Shield Elf | 'Discard a card: This creature gains indestructible until end of turn. Tap it.' — indestructible does not save a creature from -1/-1 counters, which is the removal this format is densest in, and tapping it removes it from blocking. |
| Stalactite Dagger | Its changeling token would make every creature type available, but this deck's counter-removal payoffs care about Elf CARDS in the graveyard, and a token is not a card. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.02 adj [MV 2.61 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  73.9%  prod  70.6%  gap  +3.3pp  [OK]
  R  demand  26.1%  prod  41.2%  gap -15.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
check1_mainboard_count: PASS (40/40)
check1_sideboard_count: PASS (10/10)
check2_membership: PASS
check3_copy_limits: PASS
check3b_rare_mythic_cap: PASS (3/5) [('Moonshadow', 'mythic'), ('Dawnhand Dissident', 'rare'), ('Blood Crypt', 'rare')]
check4_colour_usability: PASS
check5_splash: PASS (no splash colours declared)
```
