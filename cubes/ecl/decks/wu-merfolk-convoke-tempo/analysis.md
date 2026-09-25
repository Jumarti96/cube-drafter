---
deck_name: "wu-merfolk-convoke-tempo"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WU"
format: "40-card"
built_at: "2026-08-09T17:58:15Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  11x Island                   basic
  3x Plains                   basic
  2x Idyllic Beachfront       WU dual, always enters tapped
  1x Eclipsed Realms          taps for {C}; any colour only for Merfolk spells
  1x Hallowed Fountain        WU dual, may pay 2 life to enter untapped (R)
```

### CREATURES (17)

```
CMC  Card                              Qty   Color  Role                                    Rar
2    Deepchannel Duelist               x2    WU     Mana/Convoke Fuel                       U
2    Deepway Navigator                 x1    WU     Mana/Convoke Fuel                       R
2    Silvergill Mentor                 x1    U      Mana/Convoke Fuel                       U
3    Glamermite                        x2    U      Mana/Convoke Fuel                       C
3    Glen Elendra Guardian             x1    U      Interaction                             R
3    Silvergill Peddler                x2    U      Threat/Payoff                           C
4    Champions of the Shoal            x1    U      Interaction                             R
4    Pestered Wellguard                x2    U      Threat/Payoff                           U
4    Tanufel Rimespeaker               x2    U      Threat/Payoff                           U
4    Wanderwine Distracter             x1    U      Threat/Payoff                           C
5    Disruptor of Currents             x1    U      Interaction                             R
5    Merrow Skyswimmer                 x1    WU     Mana/Convoke Fuel                       C
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                              Qty   Color  Role                                    Rar
3    Crib Swap                         x1    W      Interaction                             U
4    Temporal Cleansing                x2    U      Interaction                             C
5    Unexpected Assistance             x2    U      Threat/Payoff                           C
```

## SIDEBOARD (10)

```
Card                              Qty   Color  Role / When to board in                       Rar
Spell Snare                       x1    U      Flex: stack interaction                       U
Wild Unraveling                   x1    U      Flex: stack interaction                       C
Swat Away                         x2    U      Flex: catch-all tuck                          U
Rooftop Percher                   x2    C      Hate: graveyard                               C
Keep Out                          x2    W      Hate: enchantments                            C
Pyrrhic Strike                    x2    W      Hate: artifacts + enchantments + fatties      U
```

## ANALYSIS

### DECK IDENTITY

A WU Merfolk midrange deck that pays for its spells with its creatures. Convoke turns the board into mana, and because convoke reduces what you PAY but not the spell's mana value - its reminder text says a tapped creature 'pays for {1} or one mana of that creature's color', which is a payment method, not the 'costs {N} less to cast' language of a reduction - every convoke spell here is still mana value 4 or more on the stack. That is what switches on Tanufel Rimespeaker's 'Whenever you cast a spell with mana value 4 or greater, draw a card', which reads on 12 of the 22 nonland cards. The same tap that pays for the spell also fires the 'becomes tapped' Merfolk: Silvergill Peddler loots, Pestered Wellguard makes a flying Faerie, Wanderwine Distracter shrinks a blocker, Champions of the Shoal stuns one. Three of the six convoke copies are instant-or-flash speed (Unexpected Assistance x2, Disruptor of Currents), so part of this happens on the opponent's turn - and the rest of the opponent's-turn plan is carried by Glamermite x2, Glen Elendra Guardian and Deepway Navigator, all of which have flash, and Deepchannel Duelist, Deepway Navigator and Glamermite untap the board so it can pay again or block.

### THE ONE RULE THAT MAKES THIS DECK WORK

Convoke says: *"Each creature you tap while casting this spell **pays for** {1} or one mana of that creature's color."* That is a **payment method**, not a cost reduction. Compare the pool's actual cost-reducer, Swat Away: *"This spell **costs {2} less to cast** if a creature is attacking you."* Different vocabulary, different rule.

The consequence: a convoke spell keeps its printed mana value on the stack no matter how many creatures paid for it. So **Tanufel Rimespeaker** — *"Whenever you cast a spell with mana value 4 or greater, draw a card"* — sees a fully board-funded Unexpected Assistance as a mana-value-5 spell and draws you a card, even if you tapped zero lands.

**12 of the 22 nonland cards in this list are mana value 4 or greater.** That is the number the whole deck is built on, and it was verified independently by both grill agents.

| Layer | Cards | Count |
|---|---|---|
| Convoke copies | Temporal Cleansing ×2, Disruptor of Currents, Unexpected Assistance ×2, Merrow Skyswimmer | 6 of 22 |
| …of those, mana value 4+ | all six | 6 of 6 |
| …of those, instant or flash speed | Unexpected Assistance ×2, Disruptor of Currents | 3 of 6 |
| Mana value 4+ (Rimespeaker's denominator) | see above | 12 of 22 |
| "Becomes tapped" payoffs | Silvergill Peddler ×2, Pestered Wellguard ×2, Wanderwine Distracter, Champions of the Shoal | 6 of 22 |

So a single Unexpected Assistance cast on the opponent's end step, paid for by tapping four creatures, can simultaneously: draw three cards, draw a fourth off Rimespeaker, loot with Silvergill Peddler, make a flying Faerie with Pestered Wellguard, and shrink an attacker by 3 with Wanderwine Distracter. The mana came from the board and the board got wider doing it.

### WHAT THE GRILL CHANGED

This deck was rebuilt substantially at Phase 9. The Challenger raised nine blocking findings and **every one was implemented — none was contested.** The three that changed the most:

- **Zero of 14 creatures had vigilance**, in a deck whose thesis requires creatures untapped on the opponent's turn to convoke. Merrow Skyswimmer (`"Flying, vigilance"`) went in.
- **The `disruption-fizzle` failure mode was mechanically backwards.** It claimed a countered convoke spell "leaves an untapped board." Convoking *taps* the board — that is the mechanic. Only the *lands* are untapped. Glamermite ×2 (`"Flash // …Untap target creature"`) went in as a real refund.
- **Tributary Vaulter had been harvested from the very sketch that was rejected for converting tap triggers into damage.** Its `+2/+0` is an aggro effect in a controller deck. Wanderwine Distracter replaced it — the same becomes-tapped axis pointed at defence, on a 4/3 instead of a 1/3, and at mana value 4 so it also feeds Rimespeaker.

The cut of Harmonized Crescendo freed the fifth rare for **Glen Elendra Guardian**, which moved the `stack` class from CONCEDED to answered — a flash 3/4 flier that is also convoke fuel.

### PLAY PATTERN

Hold up mana on turns 4+. On the opponent's end step, decide between Unexpected Assistance (refuel) and Disruptor of Currents (a 3/3 body plus a bounce). Either way you tap creatures, which fires the becomes-tapped triggers, and either way Rimespeaker draws. Then Deepchannel Duelist's `"At the beginning of your end step, untap target Merfolk you control"` — note *your* end step, so it comes back up before the opponent's turn, not after — plus Glamermite's flash untap put bodies back for blocking.

**Sequencing trap worth knowing:** Champions of the Shoal's `"behold a Merfolk and exile it"` should almost always be paid by revealing a Merfolk **from hand**, not by exiling one off the battlefield. In this deck a creature on the battlefield is mana.

### THE HONEST WEAKNESS

Goldfish keepable is **78% against an 80% threshold**, and turn-1 play rate is 0%. The first draft waved this away by claiming convoke made the deck cheaper than the simulator scored it. That was wrong and the Challenger caught it: convoke pays with *creatures you tap*, and an opening hand has no creatures on the battlefield, so convoke does nothing at the keep decision.

The real position: a two-land hand here is keepable only if it also contains a two-drop body to start the convoke chain. Reaching 80% means adding one-drops — the pool has them — but the only ones that help are non-convoke cards, and two of them would drop the mana-value-4+ count from 12 of 22 to 10, a 17% cut to the denominator Rimespeaker reads on. That trades the engine for the metric. The compensating figure is three lands by turn 3 at **92%**, which is what a turn-8 clock actually needs.

### MANA NOTE

White is deliberately over-supplied: 6 sources against only 4 white pips (a −18.5pp gap). That reads wrong until you see *where* the pips are — 2 of the 4 sit on Deepchannel Duelist, a `{W}{U}` two-drop that starts the convoke chain, so the redundancy is buying turn-2 consistency rather than raw pip coverage. Cutting a Plains for an Island would improve both gaps on paper; it would also make the deck's earliest play less reliable.

Eclipsed Realms is capped at **1**, not 2. Naming Merfolk, its any-colour mode is live for only 13 of the 22 nonland cards — Tanufel Rimespeaker is an Elemental Wizard, Glamermite and Glen Elendra Guardian are Faeries, and the instants and sorceries have no creature type at all. In the sibling aggro deck the same land covers 20 of 23, which is why that build runs two.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  2:4  3:6  4:8  5:4
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 9.75: Champions of the Shoal@0.75) → p=0.98 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.7: Deepway Navigator@0.8, Disruptor of Currents@0.9) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 78% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 58%  T3 92%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper is castable in these colours - the cube holds 2 sweepers and both are red-identity (Ashling's Command, Soul Immolation). Against a genuinely wide board this deck stalls the ground with Tanufel Rimespeaker (2/4), Silvergill Peddler (2/3) and Champions of the Shoal (4/6), stuns the best attacker each turn with Champions' 'tap up to one target creature and put a stun counter on it', and shrinks one attacker per convoke payment with Wanderwine Distracter's '-3/-0'. It cannot answer six creatures at once and does not pretend to. Mitigating would mean maindecking Winnowing at mana value 6, which asks each player to keep only one creature type - this deck IS one creature type, but so is every other tribal deck in a cube with eight tribes of four or more, so it is a symmetric card the opponent often survives just as well, and it would cost the fifth rare slot.
  OK        single_large_threat: Crib Swap, Temporal Cleansing, Champions of the Shoal, Disruptor of Currents
  OK        noncreature_permanents: Temporal Cleansing, Disruptor of Currents
  OK        stack: Glen Elendra Guardian
  CONCEDED  graveyard: Graveyard interaction is the cube's densest class at 39 cards, and a W/U answer does exist - Rooftop Percher, 'exile up to two target cards from graveyards'. It is conceded mainboard rather than absent from the pool: at mana value 5 with no convoke it competes directly with this deck's own mana-value-5 convoke spells for the same turn, and unlike them it neither draws a card nor answers a permanent. It is boarded in from the sideboard against the reanimator and recursion decks.
```

GOLDFISH [WARN] - keepable 78% against an 80% threshold, T1 play 0%. Accepted, and the earlier waiver is WITHDRAWN as wrong. That waiver claimed the shortfall was a simulator artefact because convoke lowers effective costs. It does not: convoke pays with 'creatures you tap', and an opening hand has no creatures on the battlefield, so convoke changes nothing at the keep decision. failure_modes.screw had this right and structural_responses had it wrong; the two are now consistent. The 2pp shortfall is accepted on a stated cost. Reaching 80% means adding one-drops, and the Challenger is correct that the pool has them (Springleaf Drum, Wanderbrine Trapper), so T1 0% is a choice rather than the archetype - but both are non-convoke cards, and adding two of them would drop the mana-value-4+ count from 12 of 22 to 10 of 22, a 17% cut to the denominator that Tanufel Rimespeaker's 'Whenever you cast a spell with mana value 4 or greater, draw a card' reads on. That trades the engine for the metric. The compensating figure is three lands by turn 3 at 92%, which is what a turn-8 thesis actually needs. CURVE [PASS] - no response needed.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Excess lands become convoke spells cast at full price without tapping the board, which is strictly better: Unexpected Assistance x2 ('Convoke // Draw three cards, then discard a card') turns surplus mana into cards while leaving every creature untapped to block. Silvergill Peddler x2 ('Whenever this creature becomes tapped, draw a card, then discard a card') loots away flooded draws on every tap. CORRECTED: an earlier draft also named Harmonized Crescendo here, which the Phase 9 repair cut from the list. Convoke means a flooded hand and a screwed hand want the same cards. |
| `screw` | mitigation | Convoke is the screw mitigation: 6 of the 22 nonland cards can be paid for with creatures instead of lands, so a stalled land count still casts Temporal Cleansing and Unexpected Assistance. Three lands by turn 3 in 92% of hands. Hallowed Fountain, Idyllic Beachfront x2 and Eclipsed Realms mean colour screw is rarer than land screw. The honest cost, and the reason keepable sits at 77.7%, is that a two-land hand is only keepable here if it also has a two-drop body to start the convoke chain - convoke pays with creatures you tap, and an opening hand has none on the battlefield. CORRECTED: an earlier draft said 7 of 22 convoke copies and 77%. |
| `decapitation` | accepted | Tanufel Rimespeaker is the card that makes this deck different from a pile of Merfolk, and it is 2 copies of an uncommon - it cannot be a 3rd or 4th copy under the pool rules. Killed on sight, the deck loses its card-advantage engine and becomes a slow tempo deck that still bounces and stuns but no longer out-draws anyone. Mitigating would mean maindecking counterspells to protect it, and the deck cannot do that: its mana is its creature board, and convoke pays only for the spell being cast, so it cannot be held up as generic mana to represent a counter. That is the identity cost - a convoke deck structurally cannot protect its own engine. |
| `gas-out` | mitigation | resource_exchange Cards: Net-Positive in this list is Unexpected Assistance x2 ('Draw three cards, then discard a card'). The repeatable draw engines are Tanufel Rimespeaker x2, which draws off 12 of the 22 nonland cards, and Silvergill Peddler x2, which loots on every convoke payment. Pestered Wellguard x2 refills the board rather than the hand, making a 1/1 flying Faerie per tap, and Glen Elendra Guardian's counter reads 'Its controller draws a card' - a symmetric refill that still nets you the answer. An empty hand still draws two or three cards a turn cycle once Rimespeaker is down. CORRECTED: the '12 of 22' figure here was 11 of 22 before the Phase 9 repairs raised it. |
| `raced` | accepted | Against the fastest clocks in the threat profile this deck is genuinely behind on tempo: avg mana value 3.5, 18 lands, no one-drops, and its first meaningful turn is 3. It blocks with Tanufel Rimespeaker (2/4), Silvergill Peddler (2/3) and Champions of the Shoal (4/6), stuns one attacker per turn, and bounces with Disruptor of Currents at flash speed - but it will lose races it does not interact in. Mitigating would mean lowering the curve, which directly removes the mana-value-4+ casts that Tanufel Rimespeaker exists to draw off. The deck's whole advantage is that its spells are expensive on the stack and cheap in practice; making them cheap on the stack too would delete the engine. |
| `disruption-fizzle` | mitigation | REWRITTEN after the Phase 9 grill marked this mode UNSATISFIED. The earlier text claimed a countered convoke spell 'still leaves mana and an untapped board', which is backwards: convoke's own reminder text says 'Each creature you tap while casting this spell pays for {1}', so convoking taps the board - that is the mechanic. What is true is that the LANDS are untapped, since the creatures paid. The board is refunded by three flash effects rather than the one the earlier draft named: Glamermite x2 ('Flash // ... Untap target creature'), added in Phase 9 precisely for this, and Deepway Navigator ('Flash // When this creature enters, untap each other Merfolk you control'), which is a full refund but a one-shot ETB on a single rare. Deepchannel Duelist's untap is explicitly NOT counted here: it untaps one target Merfolk at YOUR end step, too late for the turn a spell was answered. Beyond the refund, every payoff in this deck is a permanent rather than a one-shot chain, so an answered spell delays the plan rather than ending it. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Winnowing | Convoke sweeper: 'each player sacrifices all other creatures they control that don't share a creature type with the chosen creature'. This deck's own board is one tribe so it survives - but so does any other tribal deck in a cube with 8 tribes of 4+, and it costs a rare slot at MV 6. |
| Omni-Changeling | Convoke copy-any-creature, but a 0/0 that must find something worth copying; in a deck whose own best bodies are 2/2s and a 4/6, it is usually a worse Merfolk than the card it copies. |
| Lofty Dreams | Convoke aura, +2/+2 and flying with an ETB cantrip - an aura invites a two-for-one, and this list already has flying on Tributary Vaulter, Shore Lurker, Merrow Skyswimmer, Unwelcome Sprite and Pestered Wellguard's tokens. |
| Sun-Dappled Celebrant | Convoke 5/6 with vigilance - vigilance means attacking never taps it, so it fires no tap trigger, and it has no text beyond the body. |
| Encumbered Reejerey | A 5/4 that sheds a -1/-1 counter per tap; strong when combat taps it every turn, but this build taps its creatures to PAY for spells, and the mana is needed on the turns Reejerey would otherwise be growing. |
| Wanderbrine Trapper | '{1}, {T}, Tap another untapped creature you control' competes with convoke for the same untapped creatures - in this build every tapped creature is mana that was not spent on a spell. |
| Wanderbrine Preacher | 'gain 2 life' on tap; the aggro build wants it against a race, but this deck's life total is protected by bounce and stun instead, and the slot is worth more as a card-advantage body. |
| Meanders Guide | Its recursion is gated on 'whenever this creature attacks', and this build attacks far less often than Path A - the tap outlet it offers is one this deck already has 21 copies of. |
| Gravelgill Scoundrel | CORRECTED REASON. The earlier ground said its vigilance means it 'never becomes tapped by attacking, so it fires no tap trigger' - but this card has no becomes-tapped trigger at all; the wrong clause was tested. Its real text is 'Vigilance // Whenever this creature attacks, you may tap another untapped creature you control. If you do, this creature can't be blocked this turn.' It is excluded because Merrow Skyswimmer fills the vigilance slot while also carrying convoke, flying and mana value 5 for Rimespeaker. |
| Springleaf Drum | CORRECTED REASON. The earlier ground - that it 'does exactly what convoke does' - is wrong twice: convoke's mana is locked to the spell being cast, whereas the Drum adds one mana of any colour usable on the 16 of 22 nonland cards that have no convoke; and the '21 copies' figure quoted was the pool-wide convoke availability, not this deck's, which is 6. It is genuinely excluded on a different ground: adding it would drop the mana-value-4+ count from 12 of 22 to 11, cutting the denominator Tanufel Rimespeaker reads on. |
| Glen Elendra's Answer | 'Counter all spells your opponents control and all abilities' is a mythic slot for a card whose value scales with the opponent holding up multiple spells; the deck's 5-rare budget is better spent on cards that also affect the board. |
| Glen Elendra Guardian | Flash 3/4 flier that counters a noncreature spell by removing a counter - a fine card, but it costs a rare slot and this list already runs Spell Snare and Swat Away for the stack. |
| Mirrorform | 'Each nonland permanent you control becomes a copy of target non-Aura permanent' at {4}{U}{U} - a mythic slot for an effect with no convoke and no tap synergy. |
| Rimefire Torque | Copies an instant or sorcery after three charge counters from tribal ETBs; the deck has the ETBs, but a rare slot plus three turns of setup is slower than the convoke plan it would be copying. |
| Illusion Spinners | 'Hexproof as long as it's untapped' is anti-synergy in a deck that taps its own creatures to convoke - the protection is off exactly when the deck is doing its thing. |
| Thirst for Identity | 'Draw three cards. Then discard two cards unless you discard a creature card' - real refuel, but Unexpected Assistance draws three at instant speed for a cost the board pays. |
| Wild Unraveling | CORRECTED REASON, AND MOVED TO THE SIDEBOARD. The earlier ground claimed the blight cost shrinks your own convoke bodies; the oracle text reads 'blight 2 OR PAY {1}', so the blight is never compulsory. It is a hard counter for an effective {1}{U}{U} at common, and it now splits the sideboard's stack slot with Spell Snare. |
| Run Away Together | Must return a creature you control as well; this deck does not want its convoke fodder bounced. |
| Rime Chill | 'Tap up to two target creatures. Put a stun counter on each' with a Vivid discount for colours among permanents - this is a 2-colour deck, so the discount is {2} off a {6}{U} spell. |
| Sygg, Wanderwine Wisdom // Sygg, Wanderbrine Shield | Unblockable body and a conditional draw grant - excellent in the aggro build where combat damage is the plan, but this deck wins on card advantage and bounce, so a rare slot buys more from Harmonized Crescendo or Disruptor of Currents. |
| Personify | Blinks your own creature and makes a changeling token; the blink returns the creature untapped, which is a convoke refund - but at {1}{W} for one creature it is worse than Deepway Navigator untapping the whole board. |
| Kithkeeper | 'Tap three untapped creatures you control: +3/+0 and flying' is a genuine tap outlet but costs {6}{W}, and its Vivid token count keys off colours among permanents - 2 here. |
| Stratosoarer | A 3/5 flier with basic landcycling; the body is fine but it is an Elemental, outside Deepchannel Duelist's Merfolk anthem and Deepway Navigator's untap. |
| Shinestriker | 'Vivid - draw cards equal to the number of colors among permanents you control' at {4}{U}{U} draws 2 in a two-colour deck. |
| Noggle the Mind | Strips a creature's abilities and makes it a 1/1 - answers a bomb, but leaves a body on the board, and this deck prefers Crib Swap's exile or Temporal Cleansing's library tuck. |
| Blossombind | 'Enchanted creature can't become untapped' - permanent lockdown for 2 mana; a real sideboard card, but the mainboard wants its 2-drops to be bodies that can convoke. |
| Spiral into Solitude | Pacifism whose exile mode costs {1}{W} plus a -1/-1 counter on your own creature - shrinking a convoke body to answer a threat is a bad trade in this build. |
| Foraging Wickermaw | Surveil 1 plus a mana ability, but a Scarecrow artifact creature outside every Merfolk lord in the list. |
| Flock Impostor | Changeling flash flier that bounces your own creature; the changeling body does take Deepchannel Duelist's anthem, but its ETB is a tempo loss in a deck that wants bodies to stay put and convoke. |
| Gathering Stone | 'Spells you cast of the chosen type cost {1} less' - naming Merfolk, but convoke already discounts the same spells with creatures, and at MV 4 the discount arrives after the curve it would help. |
| Harmonized Crescendo | CUT IN PHASE 9. 'Draw a card for each permanent you control of that type' is anti-correlated with need: at mana value 6 it is the best Tanufel Rimespeaker trigger in the pool, but the games this deck loses are games where its board has been eaten, and that is exactly when Crescendo draws one or two. It was weighted 0.7 for that reason, and the freed rare slot went to Glen Elendra Guardian. |
| Tributary Vaulter | CUT IN PHASE 9. It was harvested from the sketch that was rejected for converting tap triggers into damage, and its trigger - 'another target Merfolk you control gets +2/+0' - is exactly that conversion, in a deck whose default_role is controller with a turn-8 thesis. Replaced by Wanderwine Distracter on the same axis pointed at defence. |
| Protective Response | CUT IN PHASE 9. At mana value 3 it is the only convoke copy below 4, so it is the one convoke spell that does not also draw off Tanufel Rimespeaker; and 'destroy target attacking or blocking creature' has no legal target on turns neither player commits to combat. |
| Wanderwine Farewell | At {5}{U}{U} it is mana value 7 - the best Rimespeaker trigger available and a genuine two-for-one that replaces the bodies it taps. Excluded on curve: this list already sits at avg mana value 3.545 with 18 lands, and a seventh mana value would push the land target past 18. (A coverage concession previously described this card's effect as though it were in the deck; that phantom claim has been removed.) |
| Eclipsed Merrow | A 2/3 for three hybrid pips that digs four cards deep for a Merfolk, Plains or Island. Excluded because it is mana value 3 and so does not trigger Tanufel Rimespeaker, and this build's consistency comes from Unexpected Assistance and Silvergill Peddler instead. |
| Shore Lurker | A 3/3 flier at exactly mana value 4, so it does trigger Rimespeaker, and it is a Merfolk. The closest card to making the list; it lost the slot to Merrow Skyswimmer, which adds vigilance and convoke on top of the flying. |
| Kulrath Mystic | The pool's second mana-value-4-matters payoff: '+2/+0 and gains vigilance until end of turn'. Excluded because the vigilance is granted only until end of turn and only on a cast, so it cannot be planned around the way Merrow Skyswimmer's printed vigilance can, and it adds no card advantage. |
| Unwelcome Sprite | 'Whenever you cast a spell during an opponent's turn, surveil 2' rewards the instant-speed half of the plan, and this list has 3 instant-or-flash convoke copies plus Glen Elendra Guardian. Excluded as card selection rather than card advantage in a deck that already runs Silvergill Peddler x2 for filtering. |
| Liminal Hold | The only hard W/U exile answer to any nonland permanent at common, at mana value 4 so it triggers Rimespeaker. Excluded because it is an enchantment - the exile is undone if it leaves - and the cube holds 21 enchantments, meaning enchantment removal is live against it. |
| Rimekin Recluse | A 3/2 with an ETB bounce at mana value 3. Excluded because it is an Elemental Wizard, outside Deepchannel Duelist's anthem and every behold cost, and Disruptor of Currents does the same job with flash and convoke attached. |
| Adept Watershaper | 'Other tapped creatures you control have indestructible' is unusually good here because this deck taps its own board by design and concedes the wide-boards class. Excluded because the fifth rare slot went to Glen Elendra Guardian, which repairs the conceded stack class instead - and because it is the defining keystone of the sibling aggro build, where attacking makes it work harder. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.55   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.40 adj [MV 3.55 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand  85.2%  prod  77.8%  gap  +7.4pp  [OK]
  W  demand  14.8%  prod  33.3%  gap -18.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1a mainboard size                40 == 40
  [PASS] 1b sideboard size                10 == 10
  [PASS] 2 exact-name membership          missing=[]
  [PASS] 3 copy limits                    violations=[]
  [PASS] 3b rare/mythic cap <=5           total=5 -> ['Champions of the Shoal', 'Deepway Navigator', 'Disruptor of Currents', 'Glen Elendra Guardian', 'Hallowed Fountain']
  [PASS] 4 colour usability               unusable=[]
  [PASS] 5 splash cap                     no splash colors
  [PASS] user constraint: max 5 rares/mythics across mainboard + sideboard
  [PASS] basic lands treated as format-supplied and exempt from copy limits
```
