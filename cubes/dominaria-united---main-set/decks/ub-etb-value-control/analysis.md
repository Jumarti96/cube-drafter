---
deck_name: "ub-etb-value-control"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-08-18T20:07:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
x9  Island                   Basic
x7  Swamp                    Basic
x2  Contaminated Aquifer     UB dual, enters tapped
```

### CREATURES (10)

```
CMC  Card                       Qty   Color  Role                                    Rar
3    Aether Channeler           x1    U      Modal ETB                               R
3    Phyrexian Rager            x2    B      Self-replacing ETB body                 C
4    Ertai Resurrected          x1    BU     Flash counter-or-kill on a body         R
4    Micromancer                x2    U      Removal tutor on a 3/3                  U
4    Sheoldred, the Apocalypse  x1    B      Finisher - drains every opposing draw   M
5    Frostfist Strider          x2    U      Stabilizer - ETB tap + stun             U
7    Tolarian Terror            x1    U      Finisher - graveyard-scaled 5/5 ward 2  C
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                  Qty   Color  Role                    Rar
1    Cut Down              x2    B      1-mana removal          U
1    Rona's Vortex         x2    U      1-mana bounce           U
2    Essence Scatter       x2    U      Counter creature spell  C
3    Ertai's Scorn         x2    U      Scaling hard counter    U
3    Phyrexian Espionage   x1    U      Draw two                C
4    Extinguish the Light  x2    B      Unconditional removal   C
```

### OTHER SPELLS (1)

```
CMC  Card           Qty   Color  Role                        Rar
4    Golden Argosy  x1    C      Optional ETB re-buy engine  R
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                          Rar
Impede Momentum          x2    U      vs a single large threat you cannot Cut Down                     C
Knight of Dusk's Shadow  x1    B      vs the cube's 22-card lifegain class - shuts it off entirely     U
Negate                   x2    U      vs sweepers, sagas, resolved-noncreature threats                 C
Pilfer                   x2    B      vs artifacts/enchantments - strip from hand before they resolve  C
Tribute to Urborg        x2    B      vs x/2 aggro curves; kicked it scales off the graveyard          C
Drag to the Bottom       x1    B      vs wide boards - domain sweeper at X=3                           R
```

## ANALYSIS

### DECK IDENTITY

UB ETB Value-Control. Ten unconditional answers buy time while every creature in the list replaces or displaces a card the turn it enters - Phyrexian Rager 'you draw a card', Micromancer fetches a one-mana answer, Frostfist Strider taps and stuns the best attacker, Ertai Resurrected counters or kills at flash speed. Golden Argosy is the deck's only blink source and turns those enters triggers into a repeatable resource, but the thesis deliberately does not depend on it. Sheoldred, the Apocalypse and a graveyard-discounted Tolarian Terror close the game once the opponent is out of resources.


### KEY OBSERVATIONS

**This is the build where the interaction and the engine are literally the same cards.** Every creature in the list answers something or draws something the turn it enters, which is why the slot table reads 45.5% Engine against a 10-20% control band. That deviation is structural, not a labelling choice - reclassifying Ertai Resurrected and Frostfist Strider x2 into Interaction produces 59.1% / 31.8%, out of band on both sides. The shape *is* the thesis.

**Ertai Resurrected does not draw you a card.** Its oracle reads *"Counter target spell... **Its controller** draws a card"* and *"Destroy another target creature or planeswalker. **Its controller** draws a card."* The controller of the countered spell is the opponent. Ertai is a 2-for-2 with a 3/2 body attached, and it is deliberately excluded from the gas-out count. The upside: with Sheoldred out, *"Whenever an opponent draws a card, they lose 2 life"* turns Ertai's drawback into 2 free damage.

**What this deck cannot do, stated plainly.** Three of its four "permanent answers" read *creature or planeswalker* only. Post-resolution it has exactly one card that touches an artifact or enchantment - Aether Channeler's *"Return another target nonland permanent to its owner's hand"* - and that is a bounce. This is a pool limit, not a build error: there is **no blue or black artifact or enchantment destruction anywhere in this cube**. The class is handled before resolution instead, by 3 maindeck counters (Ertai's Scorn x2, Ertai Resurrected) plus Negate x2 and Pilfer x2 from the board - 7 answers against the cube's 33 artifacts and enchantments.

**The Argosy blink has a defensive cost this deck feels more than the UW build does.** *"Return them to the battlefield **tapped**... at the beginning of the next end step"* means every creature you crew with is unavailable as a blocker through the opponent's whole following turn. In a deck that has already **accepted** losing to fast starts, activating the engine is a real choice, not free value.

| Count-dependent verdict | Numerator / denominator |
|---|---|
| Tolarian Terror's cost reducer | 11 of 22 nonland cards are instants or sorceries; a control deck has 4-6 in the yard by turn 8, making it a {2}{U}-{3}{U} 5/5 |
| Micromancer's fetch targets | 4 of 22 (Cut Down x2, Rona's Vortex x2) - all removal, and 4 targets keep both copies live |
| Golden Argosy Crew 1 | 10 of 10 creature cards have power 1 or more |
| Sheoldred's opponent-draw trigger | 1 of 22 cards forces an opposing draw (Ertai); the bulk of the value is their natural draw step |
| Drag to the Bottom (SB) domain X | Basic land types controlled = 2 (Island, Swamp; Contaminated Aquifer is `Land - Island Swamp` and carries both), so X = 3 |

**Knight of Dusk's Shadow is a one-card answer to a whole threat class.** The cube has 22 lifegain cards (8.9% density) and this deck's clock is among the slowest in the format. *"Your opponents can't gain life"* is a static lock, not a tax - one uncommon sideboard slot turns off the entire class.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:4  2:2  3:6  4:7  5:2  7:1
Assembly (thesis turn 10, 17 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.7: Tolarian Terror@0.7) → p=0.81 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.5: Golden Argosy@0.5) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 57%  T2 76%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper. Every sweeper legal in UB is rare or mythic (Drag to the Bottom, Karn's Sylex, The Phasing of Zhalfir) and the 5-rare cap is spent on Sheoldred, Ertai Resurrected, Aether Channeler, Golden Argosy and the sideboard Drag to the Bottom. Maindeck the deck trades one-for-one with Cut Down x2, Extinguish the Light x2 and Tribute to Urborg from the board rather than sweeping; Drag to the Bottom is the sideboard answer.
  OK        single_large_threat: Extinguish the Light, Rona's Vortex, Essence Scatter, Ertai's Scorn, Ertai Resurrected, Frostfist Strider
  CONCEDED  noncreature_permanents: Post-resolution, this deck cannot answer an artifact or enchantment. Ertai Resurrected ('Destroy another target creature or planeswalker'), Extinguish the Light ('Destroy target creature or planeswalker') and Rona's Vortex ('Return target creature or planeswalker you don't control') all read creature-or-planeswalker only; the sole exception is Aether Channeler x1 ('Return another target nonland permanent to its owner's hand'), a bounce rather than an answer. This is a pool limit, not a build choice: the dossier's artifact-removal probe returns 0 mono-colour hits in U and the enchantment probe 0 in U, and threat_profile artifact/enchantment answers are BG/G/R and BG/G/W only - there is no U or B artifact or enchantment destruction anywhere in this cube. The class is instead answered BEFORE it resolves, two different ways. On the stack: Ertai's Scorn x2 ('Counter target spell') + Ertai Resurrected x1 = 3 maindeck answers, plus Negate x2 from the sideboard = 5 counter-magic answers. From the hand: Pilfer x2 from the sideboard ('Target opponent reveals their hand. You choose a nonland card from it. That player discards that card') - hand disruption, not counter-magic. Total 7 pre-resolution answers against the cube's 33 artifacts and enchantments.
  OK        stack: Essence Scatter, Ertai's Scorn, Ertai Resurrected
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census gy_hate = 0), so no answer to the 32 graveyard-interaction cards exists in the pool for any deck. This deck is itself a graveyard-user (Tolarian Terror scales off instants and sorceries in the yard), so the absence cuts both ways.
```

- No WARN flags in the final report - curve, assembly, goldfish and coverage all PASS.

- A first pass at 17 lands returned a goldfish WARN (78% keepable vs an 80% threshold). Repaired by building to the recommended 18 and cutting the second Tolarian Terror, not by accepting the deviation. Result: 81% keepable, 92% three lands by turn 3.

- SLOT-TABLE RECONCILIATION: the slot allocation counts Threats/Payoffs as 2 while the assembly check uses 4. The assembly denominator is the functional one - it includes Frostfist Strider x2, which is dual-classified into Engine in the slot table because its enters trigger is the value. Both numbers describe the same 22 cards; the assembly PASS (p=0.81) rests on the count of 4.

- BAND DEVIATION, stated as structural rather than as a labelling artifact: Engine & Infrastructure sits at 45.5% against a 10-20% control band, and Interaction at 45.45% is marginally ABOVE the 45% ceiling. Reclassifying does not fix it - moving Ertai Resurrected and Frostfist Strider x2 into Interaction gives 59.1% / 31.8%, out of band on both. The cause is that in this pipeline the interaction and the engine are physically the same cards.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Tolarian Terror is the flood outlet by construction - a 7-mana card that a flooded, spell-heavy game makes castable, with ward {2} taxing the answer. Micromancer x2 converts a surplus turn into a fetched Cut Down or Rona's Vortex. Golden Argosy needs no mana at all to crew, so extra lands convert into repeated enters triggers - at the cost, stated plainly, that 'Return them to the battlefield tapped ... at the beginning of the next end step' means each crewed creature is unavailable as a blocker through the opponent's following turn. Three of the 22 nonland cards are kicker mana-sinks: Rona's Vortex x2 ('Kicker {2}{B} ... put that permanent on the bottom of its owner's library instead') and Phyrexian Espionage x1 ('Kicker {1}{B} ... each opponent discards a card'). |
| screw | mitigation | Four of the 22 nonland cards cost one mana (Cut Down x2, Rona's Vortex x2) and two more cost two (Essence Scatter x2), so a 2-land hand still interacts on curve. Goldfish simulation: 81% keepable, 92% reach three lands by turn 3. Both Contaminated Aquifers produce either colour, so colour screw specifically is rarer than land screw. |
| decapitation | mitigation | There is no single key piece to answer - the thesis is explicitly 'no engine reliance'. Golden Argosy removed changes nothing structural (it is weighted 0.5 in the assembly check, not treated as required); Sheoldred removed leaves Tolarian Terror and two Frostfist Striders as finishers; every creature already paid for itself on entry. The deck's floor is ten answers plus eight bodies that traded up. |
| gas-out | mitigation | Phyrexian Rager x2 ('you draw a card and you lose 1 life'), Aether Channeler ('Draw a card' mode), Micromancer x2 (fetches a card), Phyrexian Espionage ('Draw two cards') = 6 of 22 nonland cards are Net-Positive or Self-Replacing. Golden Argosy re-buys the Rager and Micromancer triggers without spending a card. NOT counted here: Ertai Resurrected, whose 'Its controller draws a card' clause benefits the OPPONENT - it is a 2-for-2 with a body, not gas. |
| raced | accepted | With an avg MV of 3.23, 18 lands and no maindeck sweeper, the deck loses to a genuinely fast start that goes under the removal. Mitigating would mean maindecking Drag to the Bottom - the only UB sweeper available - which is a symmetric {2}{B}{B} sorcery at X = 1 + 2 basic land types = -3/-3, killing this deck's own Phyrexian Ragers (2/2), Aether Channeler (2/1), Micromancers (3/3) and Ertai Resurrected (3/2) while only Frostfist Strider (4/4) and Sheoldred (4/5) survive. That is the identity cost: the deck would be sweeping away its own engine. It is boarded, not maindecked. Extinguish the Light's 'you gain 3 life' clause and Frostfist Strider's 4/4 body are the partial hedge. |
| disruption-fizzle | mitigation | The deck has no critical turn to interact with - it deploys one answer or one body at a time and never needs a specific sequence. Ertai Resurrected has Flash, so it can be held until the opponent commits. If a counter is countered, the deck simply casts the next of its ten answers. This is the failure mode a no-engine controller is structurally immune to, which is the trade it makes for the slow clock. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Haughty Djinn | 'Instant and sorcery spells you cast cost {1} less' and power equal to instants/sorceries in the yard - 11 of 22 nonland cards qualify, so it would be a 3-mana 4/4-to-6/4 flier. Declined on identity, not on power: it is a rare, the cap is 5/5, and the only rare it could displace is Golden Argosy - the deck's ONLY blink source. Cutting it would remove the Blink/ETB archetype from a deck built around Blink/ETB. |
| Tolarian Terror (2nd copy) | Same graveyard-scaled cost reducer, 11 of 22 feeders. Cut for the 18th land after a first pass at 17 lands failed the goldfish check at 78% keepable. The strongest single upgrade if the manabase is ever revisited. |
| Shadow Prophecy | 'Domain - Look at the top X cards... Put up to two of them into your hand' - X = 2 in this two-type manabase, so it is an instant-speed draw-two for {2}{B}. Genuinely competitive with Phyrexian Espionage; cut because the 22 nonland slots went to answers. |
| Academy Wall | 'Defender / Whenever you cast an instant or sorcery spell, you may draw a card. If you do, discard a card' - triggered by 11 of 22 nonland cards, and a 0/5 body walls the fast starts the raced mode concedes to. The best non-rare answer to the accepted failure mode; cut for interaction density. |
| Founding the Third Path | Chapter I frees an instant/sorcery of MV 1-2 (6 of 22 qualify), II mills four to fuel Tolarian Terror, III copies an instant/sorcery from the yard (11 of 22 legal). Three live chapters, but a 2-mana saga that does nothing on the turn it lands is poor against the raced mode. |
| Vohar, Vodalian Desecrator | '{T}: Draw a card, then discard a card... each opponent loses 1 life' - a repeatable looter that fills the yard for Tolarian Terror and crews Argosy at power 1. Cut because a 1/2 that taps for value is too slow against the aggro decks this build already concedes to. |
| Automatic Librarian | 'When this creature enters, scry 2' - a colourless ETB body that adds zero pip strain to a 62/38 manabase running one dual. The most pip-neutral way to add ETB density; cut because scry is selection, not the card advantage this build's thesis is built on. |
| Impulse | 'Look at the top four cards of your library. Put one of them into your hand' - was in the sideboard until the grill showed the cube's 22-card lifegain class was entirely unanswered; swapped for Knight of Dusk's Shadow. |
| Sphinx of Clear Skies | 'Domain - Whenever this creature deals combat damage to a player, reveal the top X cards...' - X = 2 in a two-colour UB base and the OPPONENT splits the two cards, so the rider is near-nil. A mythic slot for a vanilla ward-2 flier. |
| Defiler of Dreams | 'Whenever you cast a blue permanent spell, draw a card' - but this list's blue permanents are 7 of 22 nonland cards; the other 15 are black cards, instants and sorceries. A rare slot for a trigger that fires on under a third of the deck. |
| Braids, Arisen Nightmare | 'you may sacrifice an artifact, creature, enchantment, land, or planeswalker... each opponent MAY sacrifice a permanent of their choice' - the opponent chooses, and a controller with 10 interaction spells has few expendable permanents to feed it. |
| Liliana of the Veil | '+1: Each player discards a card' is symmetric in a deck that wants a full grip, and '-2: Target player sacrifices a creature' lets the opponent choose. A mythic slot the 5-rare cap cannot spare. |
| Crystal Grotto | '{T}: Add {C}' is its only free mode - coloured mana costs an extra {1}. This deck has {U}{U} (Ertai's Scorn, Frostfist Strider) and {B}{B} (Sheoldred, Extinguish the Light) costs, so a colourless source is the wrong land. |
| Thran Portal / Plaza of Heroes | Both are rare lands. The 5-rare cap is spent entirely on spells; Contaminated Aquifer x2 is the pool's only free UB dual and covers the fixing on its own. |
| Karn's Sylex | '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less' - a real sweeper, but mythic, and it enters tapped and needs a full extra turn plus X mana. Drag to the Bottom does the job for one rare slot and four mana. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.23   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.97 adj [MV 3.23 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  37.9%  prod  50.0%  gap -12.1pp  [OK]
  U  demand  62.1%  prod  61.1%  gap  +1.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies     PASS
rares/mythics max 1 copy           PASS
max 5 rares+mythics total (MB+SB)  PASS - exactly 5/5: Sheoldred the Apocalypse (M), Ertai Resurrected, Aether Channeler, Golden Argosy (MB) + Drag to the Bottom (SB)
all cards from cube mainboard      PASS - exact-name membership verified
colour usability in U/B            PASS - effective_cost.best_mode returned a usable mode for every distinct nonland card
basic lands (format-supplied, exempt) PASS - 9 Island, 7 Swamp
```
