---
deck_name: "wb-persist-recursion"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WB"
format: "40-card"
built_at: "2026-08-10T04:37:32Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
x8   Plains
x8   Swamp
x2   Sunlit Marsh  dual; enters tapped
```

### CREATURES (13)

```
CMC  Card                                                  Qty  Color  Role            Rar
  2  Rhys, the Evermore                                    x1   W      Engine/Outlet   R
  2  Scarblade Scout                                       x1   B      Engine/Outlet   C
  3  Heirloom Auntie                                       x2   B      Enabler/Fodder  C
  3  Reluctant Dounguard                                   x2   W      Enabler/Fodder  C
  3  Retched Wretch                                        x2   B      Enabler/Fodder  U
  3  Twilight Diviner                                      x1   B      Engine/Outlet   R
  4  Graveshifter                                          x1   B      Engine/Outlet   U
  4  Reaping Willow                                        x2   BW     Payload/Payoff  U
  5  Eirdu, Carrier of Dawn // Isilu, Carrier of Twilight  x1   C      Payload/Payoff  M
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                  Qty  Color  Role                    Rar
  1  Requiting Hex         x2   B      Interaction/Disruption  U
  2  Nameless Inversion    x2   B      Interaction/Disruption  U
  3  Crib Swap             x2   W      Interaction/Disruption  U
  4  Perfect Intimidation  x1   B      Interaction/Disruption  U
  5  Dose of Dawnglow      x1   B      Engine/Outlet           U
  6  Winnowing             x1   W      Interaction/Disruption  R
```

## SIDEBOARD (10)

```
Card                 Qty  Color  Role / When to board in                                                                                                                                                                                                                                                                                                                 Rar
Keep Out             x1   W      vs enchantment decks specifically — 'Destroy target enchantment'; kept at 1 copy because Pyrrhic Strike x2 and Liminal Hold already answer that class                                                                                                                                                                                   C
Blight Rot           x2   B      vs the cube's largest measured threat class — evasion, 41 cards at 15.8% density. 'Put four -1/-1 counters on target creature' is instant-speed, kills toughness 4 or less, and costs our own board nothing                                                                                                                             C
Protective Response  x2   W      vs aggressive creature decks — 'Convoke. Destroy target attacking or blocking creature'; convoke is live off our own bodies and is the cheapest way to break up a race                                                                                                                                                                  U
Pyrrhic Strike       x2   W      vs artifacts (11 cards, 4.2%) and enchantments (21 cards, 8.1%) — 'you may blight 2 ... choose one, or BOTH if the additional cost was paid: destroy target artifact or enchantment; destroy target creature with mana value 3 or greater'. The blight is optional, which matters here: a self-inflicted counter would spend a persist  U
Liminal Hold         x1   W      vs any noncreature permanent the maindeck cannot touch — 'exile up to one target nonland permanent an opponent controls until this enchantment leaves the battlefield. You gain 2 life'                                                                                                                                                 C
Rooftop Percher      x2   C      vs graveyard decks (39 cards, 15.0%) — 'exile up to two target cards from graveyards. You gain 3 life'. Colourless so always castable at 18 lands, and because it does not enter with counters it is persist-legal under Isilu                                                                                                          C
```

## ANALYSIS

### DECK IDENTITY

A W/B control deck that answers the board with eight maindeck interaction cards at MV 1-6 — six of them cheap removal at MV 1-3 — and then wins because its own creatures stop staying dead. It is stated as removal-plus-recursion rather than as a persist deck, because the persist blanket is one card of forty: Isilu, Carrier of Twilight — the back face of Eirdu — grants every other nontoken creature persist, and it is the ceiling, not the floor. The floor is that Reaping Willow, Dose of Dawnglow, Graveshifter and Retched Wretch all rebuy creatures with no reference to Isilu at all. What makes the blight mechanic matter here is an inversion: persist reads 'When it dies, IF IT HAD NO -1/-1 COUNTERS ON IT, return it to the battlefield with a -1/-1 counter on it', so a counter is what SPENDS a persist. This is the one blight deck in the cube that does not want counters on its own creatures, and Rhys, the Evermore and Perfect Intimidation ('Remove all counters from target creature') are what refund a spent one. Winnowing is the payoff that ties both halves together — a symmetric sacrifice sweeper that is one-sided once Isilu is out, because everything we lose to it persists straight back.

### THE INVERSION

Every other blight deck in this cube treats a -1/-1 counter as a discount it pays and then sheds. This one treats it as **currency it must not spend**, because of one clause:

> Persist — "When it dies, **if it had no -1/-1 counters on it**, return it to the battlefield under its owner's control **with a -1/-1 counter on it**."

A counter is what *spends* a persist. So the deck's shedders are not there to make bodies bigger; they are there to make bodies **reusable**. And the two cards that matter most are the two that strip counters off an arbitrary creature:

- **Rhys, the Evermore** — `{W}, {T}: Remove any number of counters from target creature you control.` Repeatable, sorcery speed, costs Rhys's own attack.
- **Perfect Intimidation** — `Remove all counters from target creature.` One shot, but it also exiles two cards from the opponent's hand in the same casting, and it is the deck's only hand disruption.

That is **2 of 22** nonland cards. The rest of the persist-legality problem is solved by choosing creatures that never had counters in the first place.

### THE PERSIST-LEGALITY LEDGER

Isilu grants persist to **12** of the deck's 13 creature copies. Whether that does anything depends entirely on whether the creature is carrying a counter when it dies:

| | Cards | Count |
|---|---|---|
| **Persist-legal on arrival** | Rhys, Twilight Diviner, Graveshifter, Scarblade Scout, Retched Wretch ×2 | **6 of 12** |
| **Enter with counters — must shed first** | Reaping Willow ×2, Reluctant Dounguard ×2, Heirloom Auntie ×2 | **6 of 12** |

The six in the second row do it themselves: Reluctant Dounguard sheds "whenever another creature you control enters", Heirloom Auntie "whenever another creature you control dies". Both events are things a control deck causes constantly.

The card this ledger *removed* is instructive. Encumbered Reejerey, a 5/4 for two, was in the deck until the grill: persist returns it with one counter, its own replacement effect adds three more, and a 5/4 with four counters is **a 1/0 that dies on arrival**. The best body in the archetype is unplayable in the archetype's own control deck.

### RETCHED WRETCH IS PERSIST RUN BACKWARDS

> "When this creature dies, **if it had a -1/-1 counter on it**, return it to the battlefield under its owner's control and it loses all abilities."

Read the two conditions side by side: persist fires on *no* counters, Retched Wretch fires on *having* one. Under Isilu they chain:

1. Dies clean → **persist** returns it with a -1/-1 counter.
2. Dies again, now *with* a counter → **its own trigger** returns it as a vanilla 4/2.

Three bodies from one three-mana card, and two of those three returns are graveyard re-entries, which is exactly what **Twilight Diviner** wants: "Whenever one or more other creatures you control enter, **if they entered or were cast from a graveyard**, create a token that's a copy of one of them."

### WINNOWING IS A ONE-SIDED WRATH HERE

`{4}{W}{W}` sorcery, convoke: "For each player, you choose a creature that player controls. Then each player sacrifices all other creatures they control that don't share a creature type with the chosen creature they control."

It reads symmetric. It is not, for two independent reasons:

1. **A sacrifice is a death.** With Isilu on the battlefield every clean creature we lose to it persists straight back. Theirs stay dead.
2. **Graveshifter has changeling** — "This card is every creature type." Choose it as our creature and every other creature we control shares a type with it, so we sacrifice *nothing*.

Convoke off 13 creature copies makes a six-mana sorcery a turn-five play. This is the card that turned `wide_boards` from a conceded coverage class into an answered one — the only one of the four decks in this set that answers it maindeck.

### THE MANA-VALUE CEILING, AND THE TWO CARDS THAT BREAK IT

Every reanimation effect in W/B caps at "mana value 3 or less" — Reaping Willow and the rest. Eirdu is MV 5. So the deck's own win condition was, in the first draft, **unrebuyable by 0 of 23 cards**, in a shell whose decapitation plan concedes it will be answered.

**Dose of Dawnglow** ("Return target creature card from your graveyard to the battlefield", instant, no cap) and **Graveshifter** ("return target creature card from your graveyard to your hand", no cap) are the only two exceptions in the colour pair. Both are in the list for that single reason, and Dose of Dawnglow is deliberately held up on the turn Eirdu is expected to die.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (22 nonland):  1:2  2:4  3:9  4:4  5:2  6:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.2: Eirdu, Carrier of Dawn // Isilu, Carrier of Twilight@0.5, Twilight Diviner@0.7) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 9 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 33%  T2 76%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Winnowing
  OK        single_large_threat: Crib Swap, Nameless Inversion, Requiting Hex
  CONCEDED  noncreature_permanents: White has the answers — Pyrrhic Strike, Keep Out and Liminal Hold — but all three are reactive cards that do nothing against a creature deck, and this control shell already runs 8 of 22 nonland cards as interaction. Mitigating maindeck would displace a recursion piece from a package that is only 6 payoff copies deep. All three are in the sideboard, 4 slots of 10.
  CONCEDED  stack: This cube's only counterspells are blue (Wild Unraveling, Glen Elendra Guardian); W/B cannot interact on the stack at any rarity. Mitigating would mean abandoning the pipeline's colours and with them Isilu, Rhys and Reaping Willow — the entire kill mechanism. The substitute is that this deck does not care about resolving one spell: its board recurs, so a single resolved answer is not a permanent one.
  CONCEDED  graveyard: Graveyard hate is genuinely awkward here — this deck USES its own graveyard as the resource Reaping Willow, Dose of Dawnglow, Graveshifter and Twilight Diviner draw from, so a symmetric answer costs us more than the opponent. Mitigating maindeck would mean a card that fights our own engine. Rooftop Percher x2 covers the class from the sideboard, where it is also a persist-legal 3/3 flier.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Stated honestly after the grill corrected this entry twice. Exactly ONE effect repeats every turn: Rhys ('{W}, {T}: Remove any number of counters from target creature you control'). What makes that enough is a loop — but the loop is NOT Rhys reloading Reaping Willow, which the second grill round proved impossible: Reaping Willow's cost IS 'Remove two counters from this creature', so paying it leaves zero, and Rhys and Perfect Intimidation only remove counters, never add them. The real cycle runs the other way. Counters get ONTO Reaping Willow from three places in this list: persist itself returns it carrying three (its own two plus persist's one), Requiting Hex ('you may blight 1 ... put a -1/-1 counter on a creature you control'), and Dose of Dawnglow cast on an opponent's turn ('Then if it isn't your main phase, blight 2' — a mandatory two-counter reload, and Reaping Willow is the one creature that wants it). Rhys and Perfect Intimidation's role in that cycle is the LEFTOVER ODD COUNTER: a persist-returned Willow has three, spends two on a rebuy, and sits at one — not persist-legal until Rhys or Perfect Intimidation clears it, which restarts the cycle. Eirdu's front face ('Creature spells you cast have convoke') also means the 13 creature copies absorb the top of the curve when lands are the surplus. |
| screw | mitigation | 6 of 22 nonland cards cost 2 or less and the six cheap removal spells are all MV 1-3 (Winnowing at MV 6 and Perfect Intimidation at MV 4 are the other two interaction cards), so a stalled hand still interacts: Requiting Hex at {B}, Nameless Inversion at {1}{B}, Crib Swap at {2}{W}. 18 lands is the computed target for avg MV 3.14, and the goldfish sim over 1000 hands reports 86% keepable and 92% with 3 lands by turn 3 — the best land consistency of the four decks in this set, which is what an 18-land control deck is buying. |
| decapitation | mitigation | Eirdu is 1 of 40 and will be answered; the deck is built so that answering it removes the ceiling, not the floor. Isilu-independent recursion is 7 copies across 5 cards: Reaping Willow x2 (rebuy MV 3 or less), Dose of Dawnglow x1 (rebuy anything, at instant speed), Graveshifter x1 (return anything to hand), Retched Wretch x2 (returns itself whenever it dies with a counter, which the removal suite can supply), plus Rhys's own ETB granting persist to a single creature for a turn. And uniquely among the four, Eirdu itself is rebuyable: Dose of Dawnglow and Graveshifter are the only two W/B recursion effects with no mana-value cap, and both are in the list specifically for that. |
| gas-out | mitigation | This deck refuels from the graveyard rather than the library, which is why a low draw count is not the same problem it is in the W/B aggro build. Counted: 9 of 13 creature copies are MV 3 or less and therefore legal Reaping Willow targets; Dose of Dawnglow and Graveshifter have no cap at all; Twilight Diviner turns each graveyard re-entry into a free token copy; Heirloom Auntie x2 surveils on every creature death and Scarblade Scout mills two on entry, which is what stocks the yard the other five draw from. An empty hand with a full graveyard still produces a threat every turn. |
| raced | accepted | A goldfish turn of 9 with an average mana value of 3.14 and only 6 of 22 nonland cards at MV 2 or less means fast starts beat this deck. The sim makes a turn-1 play in 33% of hands and a turn-2 play in 76% — the worst early-game figures of the four builds. Mitigating maindeck means trading recursion pieces for cheap bodies, which converts this into the W/B aggro build of the same archetype and abandons the inevitability that is the only reason to choose this pipeline at all. The cost is paid explicitly. What the deck has is 8 maindeck answers at MV 1-6, Reaping Willow x2 as 3/6 lifelink walls, and Winnowing as a one-sided reset; Blight Rot x2 and Protective Response x2 come in from the sideboard. |
| disruption-fizzle | mitigation | Rewritten after the grill falsified the previous version. There is no critical turn: the most interactable moment is the Eirdu transform, and because 'At the beginning of your first main phase, you may pay {B}. If you do, transform Eirdu' happens at sorcery speed on your own turn, an opponent must hold removal in advance rather than respond to a trigger on the stack. Two claims from the previous draft are withdrawn as false — Eirdu has NO enters-the-battlefield trigger to rebuy, and Personify would have returned it front face up, switching the blanket off rather than protecting it. The real insurance is Dose of Dawnglow, the only instant in the deck that returns a creature of any mana value from the graveyard to the battlefield, which can be held up on the turn Eirdu is expected to die. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Encumbered Reejerey | The best body in the whole blight cluster — a 5/4 for {1}{W} — and it was in the locked skeleton until the grill killed it on rules. Persist returns a creature 'with a -1/-1 counter on it', and Encumbered Reejerey's own replacement effect puts three more back: 5/4 with four counters is a 1/0, dead to state-based actions the instant it returns, and it died with counters so it can never persist again. Both copies cut. It is the right card in the W/B aggro build, where it never has to survive a persist. |
| Personify | 'Exile target creature you control, then return that card to the battlefield.' Looks like a two-mana instant-speed persist refund and is not one: the returned card is a NEW OBJECT, so it re-applies its own enters-with-counters replacement effect — on Encumbered Reejerey it strips one counter and adds three. Worse, a transforming double-faced card returns FRONT FACE UP, so blinking Isilu switches the persist blanket off and re-charges you {B}. Both copies cut; Perfect Intimidation ('Remove ALL counters from target creature') does the job the deck actually needed. |
| Emptiness | The advertised line was: evoke it for {W/B}{W/B}, it is sacrificed, Isilu persists it back, the enters trigger fires a second time. That line does not exist. Both of its ETBs are intervening-if triggers on mana spent to CAST it ('if {W}{W} was spent to cast it'), and a persist return is not a cast — the persisted copy is a vanilla 2/4. Without that, it is a {4}{W/B}{W/B} 3/5 whose reanimation half still demands {W}{W}, and its mythic slot bought Winnowing instead. |
| Bogslither's Embrace | 'As an additional cost to cast this spell, blight 1 OR PAY {3}.' The blight is mandatory unless you pay, and in this deck a -1/-1 counter is what SPENDS a persist. It is therefore either a {4}{B} exile or a self-inflicted cost, where Crib Swap exiles for {2}{W} with no such clause and hands its token to the opponent. |
| Burdened Stoneback | '{1}{W}, Remove a counter from this creature: Target creature gains indestructible until end of turn.' It does self-clean, so it is a legitimate blight body — but granting indestructible works against a deck whose creatures want to die and come back. It is the right card in the W/B aggro build. |
| Slumbering Walker | 'At the beginning of your end step, you may remove a counter from this creature. When you do, return target creature card with POWER 2 OR LESS from your graveyard to the battlefield.' Free recursion every turn, but the printed power of every creature card in this list except Rhys is 3 or greater — 1 legal target of 13 creature copies. |
| Bloodline Bidding | 'Convoke. Choose a creature type. Return all creature cards of the chosen type from your graveyard to the battlefield.' The first draft rejected it on a false count (that the types were too scattered to return more than two); recounted, Soldier returns 4 — Encumbered Reejerey x2 'Merfolk Soldier' plus Reluctant Dounguard x2 'Kithkin Soldier' — and Cleric returns 3. It is cut on mana value instead: {6}{B}{B} even with convoke is a turn-8 play in a deck whose thesis turn is 9, and it would spend the fifth rare slot on a card that does nothing before then. |
| Clachan Festival | '{4}{W}: Create a 1/1 green and white Kithkin creature token.' A genuinely repeating mana sink — the flood answer the deck does not otherwise have — that also feeds convoke on both Winnowing and Eirdu's front face. Excluded because tokens do not persist ('Each other NONTOKEN creature'), so it makes bodies the deck's own engine cannot recycle, and at MV 3 it competes with Crib Swap and the three-mana self-cleaning bodies. |
| Moonlit Lamenter | '{1}{W}, Remove a counter from this creature: Draw a card.' The audit reports cantrip_count 0 and this list genuinely draws zero cards from its library — it refuels entirely from the graveyard. Excluded because it enters with exactly one counter, so it draws exactly one card in its life, and that counter is one Rhys activation the deck would rather spend refunding a persist. |
| Prideful Feastling | {2}{W/B} 2/3 changeling lifelink — persist-legal on arrival, castable off either colour, and a second changeling to make Winnowing trivially one-sided. Excluded on rate: a 2/3 with no ability beyond lifelink competes with Retched Wretch (4/2 that comes back twice) and Heirloom Auntie (4/4 that cleans itself) at the same cost. |
| Darkness Descends | Was in the sideboard at 2 copies and cut during the grill. 'Put two -1/-1 counters on each creature' disables persist on our OWN board — persist checks 'if it had no -1/-1 counters on it' — and it answers token swarms, a class the cube's threat profile does not actually measure. Its slots went to Blight Rot, which answers the 15.8%-density evasion class at instant speed and costs our board nothing. |
| Keep Out (2nd copy) | Kept at 1. With Pyrrhic Strike x2 ('Destroy target artifact or enchantment') and Liminal Hold already covering the class, a second Keep Out would have put 5 of 10 sideboard slots on artifacts plus enchantments — 32 cards, 12.3% of the cube — while the two largest measured classes (evasion 15.8%, graveyard 15.0%) had two slots each. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.14   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.85 adj [MV 3.14 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  65.0%  prod  55.6%  gap  +9.4pp  [OK]
  W  demand  35.0%  prod  55.6%  gap -20.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] mainboard_count: 40 == 40
[PASS] sideboard_count: 10 == 10
[PASS] exact_name_membership: all names found in working pool
[PASS] copy_limits: all within card_pool_rules (basics exempt)
[PASS] rare_mythic_cap_5: 4 rare/mythic across MB+SB: ['Eirdu, Carrier of Dawn // Isilu, Carrier of Twilight', 'Rhys, the Evermore', 'Twilight Diviner', 'Winnowing']
[PASS] colour_usability: all nonland cards usable in ['W', 'B']+[]; off-normal modes: {'Eirdu, Carrier of Dawn // Isilu, Carrier of Twilight': 'cast', 'Reaping Willow': 'cast', 'Rhys, the Evermore': 'cast', 'Twilight Diviner': 'cast', 'Dose of Dawnglow': 'cast', 'Graveshifter': 'cast', 'Scarblade Scout': 'cast', 'Retched Wretch': 'cast', 'Reluctant Dounguard': 'cast', 'Heirloom Auntie': 'cast', 'Winnowing': 'cast', 'Perfect Intimidation': 'cast', 'Requiting Hex': 'cast', 'Nameless Inversion': 'cast', 'Crib Swap': 'cast', 'Pyrrhic Strike': 'cast', 'Blight Rot': 'cast', 'Rooftop Percher': 'cast', 'Protective Response': 'cast', 'Liminal Hold': 'cast', 'Keep Out': 'cast'}
[PASS] splash_cap: splash cards used: [] (splash_colors=[])
```
