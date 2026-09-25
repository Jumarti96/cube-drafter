---
deck_name: "wu-lockdown-and-skies"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UW"
format: "40-card"
built_at: "2026-08-17T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x9   Island                  basic
  x6   Plains                  basic
  x1   Adarkar Wastes          nonbasic, untapped, 1 damage
  x2   Idyllic Beachfront      Plains Island, enters tapped
```

### CREATURES (5)

```
CMC  Card                    Qty   Color  Role                                      Rar
  3  Soaring Drake           x1    U      Threat — evasive clock                    C
  4  Talas Lookout           x2    U      Threat — evasive clock, self-replacing    C
  5  Sphinx of Clear Skies   x1    U      Threat — primary finisher                 M
  6  Djinn of the Fountain   x1    U      Threat — resilient finisher               U
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                    Qty   Color  Role                                      Rar
  2  Artillery Blast         x2    W      Interaction — instant-speed spot removal  C
  2  Essence Scatter         x2    U      Interaction — counterspell                C
  2  Impulse                 x2    U      Engine — card selection                   C
  2  Silver Scrutiny         x1    U      Engine — scaling refuel                   R
  3  Ertai's Scorn           x2    U      Interaction — counterspell                U
  3  Stall for Time          x2    W      Engine — tempo + draw                     C
```

### OTHER SPELLS (6)

```
CMC  Card                    Qty   Color  Role                                      Rar
  3  Citizen's Arrest        x2    W      Interaction — exile removal               C
  3  Temporary Lockdown      x1    W      Interaction — asymmetric sweeper          R
  4  Prayer of Binding       x2    W      Interaction — flash exile catch-all       U
  4  The Phasing of Zhalfir  x1    U      Interaction — repeatable answer + wrath   R
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                              Rar
Runic Shot              x2    W      Interaction — unconditional removal of a tapped creature — In vs decks with large evasive threats: Artillery Blast caps at 3 damage, so this covers the 19 of 51 evasion cards in the cube with toughness 4 or greater. Destroys outright regardless of size for {W}.  [U]
Destroy Evil            x2    W      Interaction — enchantment/large-creature removal — In vs enchantment decks (18 in cube; only 3 enchantment answers exist cube-wide and this is the only one in U or W) and vs fatties: 'Destroy target creature with toughness 4 or greater.'  [C]
Impede Momentum         x2    U      Interaction — tap + stun — In vs a single large threat I cannot destroy (Tyrannical Pitlord 6/6, Writhing Necromass 5/5): three stun counters take it off the table for three untap steps, and it supplies the tapped-creature condition Artillery Blast and Runic Shot both require.  [C]
Negate                  x2    U      Interaction — counterspell — Against the cube's 18 enchantments and 6 sweepers; in vs any deck whose key cards are Sagas, Temporary Lockdown, or the enchantment removal aimed at my exile suite.  [C]
Tolarian Geyser         x2    U      Interaction — bounce + draw — In vs Auras and Equipment (Voltron/Equipment cluster) and vs enter-the-battlefield value creatures; resets an equipped or enchanted threat and replaces itself.  [C]
```

## ANALYSIS

### DECK IDENTITY

A UW draw-go control deck that answers permanently rather than temporarily. Twelve of its twenty-two nonland cards interact, and every mass answer is asymmetric by construction: Temporary Lockdown exiles all nonland permanents of mana value 2 or less, and 0 of this list's 11 nonland permanents sit at or below that line. Once the board is stripped, five evasive fliers totalling 17 power in the air convert an empty battlefield into a two-to-three swing clock. It wins by making the opponent's board disappear into exile - where this cube's 32 graveyard-interaction cards cannot reach it - and then flying over the wreckage.

### THE SWEEPER IS ONE-SIDED BY CONSTRUCTION

Temporary Lockdown reads "exile each nonland permanent with mana value 2 or less until this enchantment leaves the battlefield." That is only a sweeper worth a rare slot if your own board is above the line. This list contains **11 nonland permanent copies and 0 of them have mana value 2 or less**:

| Card | MV |
|---|---|
| Soaring Drake | 3 |
| Temporary Lockdown (itself) | 3 |
| Citizen's Arrest ×2 | 3 |
| Talas Lookout ×2 | 4 |
| The Phasing of Zhalfir | 4 |
| Prayer of Binding ×2 | 4 |
| Sphinx of Clear Skies | 5 |
| Djinn of the Fountain | 6 |

This is why Stenn, Paranoid Partisan (a mana-value-2 legend) was cut despite being the exact cost-reducer a draw-go deck wants: this deck's own anchor sweeper exiles it. The same test disqualified Clockwork Drawbridge and Tura Kennerüd's mana-value-0 Soldier tokens.

### THE TAP-THEN-KILL CHAIN

Artillery Blast reads "Domain — deals X damage to target **tapped** creature, where X is 1 plus the number of basic land types among lands you control." This deck controls **2 of 5 basic land types** (Plains, Island — Idyllic Beachfront's type line is `Land — Plains Island` and supplies both in one slot), so X = 3.

The condition is supplied in-deck. Stall for Time is an Instant reading "Tap up to two target creatures… Draw a card." Both cards are instants and both run 2 copies, so a single end-step can tap a blocker and then kill it. After sideboarding, Impede Momentum ×2 and Runic Shot ×2 extend the chain to **4 enablers and 4 payoffs**.

Against the cube specifically: Artillery Blast at X=3 kills **32 of the 51 evasion cards** in the cube (those with printed toughness 3 or less), at instant speed, exactly when they are tapped from attacking. Sideboard Runic Shot ("Destroy target tapped creature" — no size limit) covers the complementary **19 of 51** with toughness 4 or greater. Between the two boards, the cube's single largest threat class is fully answered.

### EXILE IS THE POINT, NOT A COINCIDENCE

Every mass and spot answer in this deck says *exile*: Temporary Lockdown, Citizen's Arrest ×2, Prayer of Binding ×2. This matters twice over in this specific cube.

First, the cube contains **32 graveyard-interaction cards (13% density)** — reanimation, flashback, and recursion. A destroyed threat is a rebuyable threat; an exiled one is not.

Second, the exiling permanents themselves are nearly unanswerable here. The dossier's threat profile counts exactly **3 enchantment answers in the entire 266-card cube** — Destroy Evil, Silverback Elder, Tear Asunder — a density of 1.2%. A resolved Citizen's Arrest is, in this environment, functionally permanent.

The cost of that choice is stated rather than hidden: this deck has no answer to an opponent's graveyard and no dedicated artifact removal, both of which are recorded as concessions below.

### WHAT THE MANA IS ACTUALLY DOING

White is deliberately over-supplied. Blue demands **21 of 33 pips (63.6%)** and gets **12 of 18 sources (66.7%)**; white demands **12 of 33 (36.4%)** and gets **9 of 18 (50.0%)**. The reason is timing, not volume — white's double pips are front-loaded and clustered on one turn (Temporary Lockdown {1}{W}{W} and Citizen's Arrest ×2 {1}{W}{W}, all turn 3), while blue's double pips spread across turns 3 to 6 (Ertai's Scorn, The Phasing of Zhalfir, Talas Lookout, Sphinx of Clear Skies, Djinn of the Fountain). Adarkar Wastes is the only untapped WU dual in the pool and is worth one of the five rare slots for exactly that turn-3 collision.

### THE PHASING OF ZHALFIR IS THREE CARDS

Read ahead lets you choose which chapter to start on, and this saga's chapters do unrelated things. Cast it on chapter I and it is a two-turn soft lock — "Another target nonland permanent phases out. It can't phase in for as long as you control this Saga" — answering a permanent no other card in these colours can touch. Cast it directly on chapter III and it is an untelegraphed "Destroy all creatures". It is the only card in the deck that appears in three of the five coverage classes.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  2:7  3:8  4:5  5:1  6:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 5 copies → p=0.88 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.2: Artillery Blast@0.6, Artillery Blast@0.6) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 0%  T2 82%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Temporary Lockdown, The Phasing of Zhalfir
  OK        single_large_threat: Citizen's Arrest, Prayer of Binding, Essence Scatter, Ertai's Scorn, The Phasing of Zhalfir
  OK        noncreature_permanents: Prayer of Binding, The Phasing of Zhalfir, Temporary Lockdown, Ertai's Scorn
  OK        stack: Essence Scatter, Ertai's Scorn
  CONCEDED  graveyard: No card in U or W in this pool exiles cards from an opponent's graveyard (verified against oracle text; dossier structural census reports 0 graveyard hate cube-wide). This deck answers recursive threats on the battlefield with exile instead - Citizen's Arrest, Prayer of Binding and Temporary Lockdown all say 'exile', so an answered threat never reaches the graveyard to be rebought.
```

- No WARN flags were raised. Curve PASS, goldfish PASS (85% keepable against an 80% threshold, 92% to reach 3 lands by turn 3), assembly PASS on both roles (payoff p=0.88, enabler p=0.96 on 7.2 reliability-weighted copies), coverage PASS with two declared concessions.
- Goldfish reports 0% turn-1 plays. This is by construction, not a defect: after moving Runic Shot to the sideboard the curve starts at mana value 2, and a draw-go control deck's turn 1 is a land and a pass.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Silver Scrutiny is {X}{U}{U} and reads 'Draw X cards', turning every surplus land directly into cards, and 'You may cast this spell as though it had flash if X is 3 or less' means it does so without breaking draw-go. Stall for Time's kicker {1}{U} adds a stun counter to each tapped creature for spare mana. Djinn of the Fountain at mana value 6 and Sphinx of Clear Skies at 5 mean the deck genuinely wants its 8th and 9th land. |
| screw | mitigation | The goldfish simulation reports 85% keepable hands and 92% to reach 3 lands by turn 3 at this 18-land count. Impulse x2 ('Look at the top four cards of your library. Put one of them into your hand') digs 4 deep for the third land at 2 mana at instant speed. Two-land hands are live because the deck's cheapest cards are real interaction: Essence Scatter, Impulse and Artillery Blast all cost 2. |
| decapitation | mitigation | There is no single key piece to answer. The kill mechanism is distributed across 12 interaction cards, and the exile permanents are close to unanswerable in this environment: the dossier threat_profile lists exactly 3 enchantment answers in the entire 266-card cube (Destroy Evil, Silverback Elder, Tear Asunder, density 0.0121), so a resolved Temporary Lockdown, Citizen's Arrest or Prayer of Binding faces 1.2% of the cube's cards. On the threat side the clock is 5 separate fliers, not one finisher. |
| gas-out | mitigation | 7 of 22 nonland cards replace themselves or draw: Silver Scrutiny ('Draw X cards'), Impulse x2, Stall for Time x2 ('Draw a card'), Talas Lookout x2 ('When this creature dies, look at the top two cards of your library. Put one of them into your hand and the other into your graveyard'). Talas Lookout is the load-bearing one - it is a threat that refuels when it trades, so racing it does not starve the deck. |
| raced | mitigation | Temporary Lockdown exiles exactly the aggro curve ('each nonland permanent with mana value 2 or less') and 0 of this list's 11 nonland permanents are hit by it. Artillery Blast x2 is an INSTANT that deals 3 damage to a tapped creature, killing 32 of the cube's 51 evasion cards (63%) during the attack itself rather than a turn later. Stall for Time x2 taps two attackers and draws; Prayer of Binding gains 2 life at flash speed. Honest cost, stated: Djinn of the Fountain at mana value 6 and Sphinx at 5 are dead cards in the opening hand of that matchup, and after moving Runic Shot to the sideboard this deck makes no turn-1 play at all. |
| disruption-fizzle | mitigation | The deck has no critical turn to disrupt - it is attrition, not a combo, so there is no single stack to fizzle. When the turn does matter (resolving Temporary Lockdown or The Phasing of Zhalfir into a developed board), Ertai's Scorn x2 counters the answer, and The Phasing of Zhalfir's Read ahead ('Choose a chapter and start with that many lore counters. Skipped chapters don't trigger') lets it be cast directly as chapter III, 'Destroy all creatures', rather than telegraphed over three turns. |

### COUNT-DEPENDENT VERDICTS

| Card | Verdict | Count against this list |
|---|---|---|
| Temporary Lockdown | INCLUDE | Its clause is 'exile each nonland permanent with mana value 2 or less'. This list contains 11 nonland permanent copies: Soaring Drake (MV 3), Talas Lookout x2 (MV 4), Sphinx of Clear Skies (MV 5), Djinn of the Fountain (MV 6), Temporary Lockdown itself (MV 3), The Phasing of Zhalfir (MV 4), Citizen's Arrest x2 (MV 3), Prayer of Binding x2 (MV 4). 0 of 11 have mana value 2 or less; the sweeper is one-sided by construction. Verified by script against the built list, not asserted. |
| Artillery Blast | INCLUDE x2 (replaced Runic Shot in the mainboard) | 'Domain - deals X damage to target tapped creature, where X is 1 plus the number of basic land types among lands you control.' This list controls 2 of 5 basic land types, so X = 3. Against the cube it kills 32 of the 51 evasion cards (63%), which have printed toughness 3 or less. Crucially its type_line is Instant, so it kills an attacker during the opponent's combat step; Runic Shot is a Sorcery and can only kill a creature that is still tapped a full turn cycle later. |
| Djinn of the Fountain | INCLUDE (1 copy) | Its trigger needs instants and sorceries: 11 of 22 nonland cards qualify (50%). |
| Sphinx of Clear Skies | INCLUDE, domain half discounted | Domain X = basic land types controlled = 2 of 5 (Plains, Island; Idyllic Beachfront supplies both). At X=2 the trigger nets exactly 1 card of the opponent's choosing. |
| Haughty Djinn | EXCLUDE (rare budget) | 'Flying / power equal to the number of instant and sorcery cards in your graveyard / Instant and sorcery spells you cast cost {1} less to cast.' Both halves key off this list's 11 of 22 instants and sorceries (50%), making it the best-matched blue rare in the pool for this shell. It is excluded solely by the hard 5-rare cap, which is fully spent on Temporary Lockdown, The Phasing of Zhalfir, Silver Scrutiny, Sphinx of Clear Skies and Adarkar Wastes. It is the first card to try if that cap is ever relaxed. |
| Leyline Binding | EXCLUDE | 'costs {1} less to cast for each basic land type among lands you control' - 2 basic types here, so {5}{W} becomes {3}{W}. Prayer of Binding is {3}{W}, also flash, also 'exile target nonland permanent', is uncommon (2 copies legal) and gains 2 life. Identical cost, strictly better availability. |
| Protect the Negotiators | EXCLUDE | 'Counter target spell unless its controller pays {1} for each creature you control' - this list runs 5 creatures across 40 cards, and a draw-go deck holding up counterspells typically controls 0-2 of them when it wants to counter. The tax is usually {0} to {2}. Ertai's Scorn counters unconditionally for the same 3 mana. |
| Cosmic Epiphany | EXCLUDE | 'Draw cards equal to the number of instant and sorcery cards in your graveyard' at {4}{U}{U}. With 11 instants/sorceries in 40 cards, by turn 6 the graveyard realistically holds 2-4, so it draws 2-4 for six mana. Silver Scrutiny draws 3 for five mana at flash speed. |
| Defiler of Dreams | EXCLUDE | 'Whenever you cast a blue permanent spell, draw a card' plus a {U} discount on blue permanent spells - this list runs 6 blue permanent spells of 22 nonlands (Soaring Drake, Talas Lookout x2, Sphinx, Djinn, The Phasing of Zhalfir), 27%. Both halves key off a class that is barely over a quarter of the deck, for {3}{U}{U}. |
| Tolarian Terror | EXCLUDE (identity) | 'costs {1} less to cast for each instant and sorcery card in your graveyard / Ward {2}' - 11 of 22 nonland cards qualify, so the discount is real and it would be a 5/5 ward {2} for three to four mana. Excluded on the thesis clause, not the count: it has no evasion keyword, and the locked kill mechanism is that EVASIVE fliers convert the emptied board. It is the payoff of a different pipeline entirely. |
| Tura Kennerud, Skyknight | EXCLUDE | 'Flying / Whenever you cast an instant or sorcery spell, create a 1/1 white Soldier' - 11 of 22 nonlands trigger it. Excluded on mana and on self-interference: {2}{W}{U}{U} needs both UU and W on turn 5 and only 3 of this deck's 18 lands produce either colour, and its Soldier tokens are mana value 0, so this deck's own Temporary Lockdown exiles them. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Protect the Negotiators | 'Counter target spell unless its controller pays {1} for each creature you control' — this list runs 9 creatures across 40 cards and typically has 0-2 on board when it matters, so the tax is usually {0}-{2}. Essence Scatter and Ertai's Scorn are unconditional. EXCLUDE. |
| Academy Loremaster | 'At the beginning of each player's draw step, that player may draw an additional card. If they do, spells they cast this turn cost {2} more' — symmetric, and the opponent chooses first each turn; a control deck holding instants is the side punished by its own tax. |
| Cosmic Epiphany | 'Draw cards equal to the number of instant and sorcery cards in your graveyard' at {4}{U}{U} — this list runs 13 instants/sorceries; on turn 6 the graveyard realistically holds 2-4, so it draws 2-4 for six mana. Silver Scrutiny does the same job at instant speed for less. EXCLUDE. |
| Defiler of Dreams | 'As an additional cost to cast blue permanent spells, you may pay 2 life... Whenever you cast a blue permanent spell, draw a card' — this list runs 6 blue permanent spells of 24 nonlands; the discount and the draw both trigger too rarely to pay {3}{U}{U}. EXCLUDE. |
| Tolarian Terror | 'costs {1} less to cast for each instant and sorcery card in your graveyard' — 13 instants/sorceries in this list, but this build spends its non-land slots on permanent-based answers (Lockdown, Arrest, Prayer, Phasing), so the graveyard fills slower than the P3 build it belongs to. Reserved for that deck. |
| Haughty Djinn | 'power equal to the number of instant and sorcery cards in your graveyard' — same count problem as Tolarian Terror in this build, and it costs a rare slot this deck needs for Temporary Lockdown. |
| Serra Redeemer | 'Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature' — this list runs 3 creatures with power ≤2 that enter after it; a go-wide payoff in a deck that does not go wide. |
| Defiler of Faith | 'Whenever you cast a white permanent spell, create a 1/1 white Soldier' — 6 white permanent spells in this list; a token engine sized for a creature deck. |
| Urza Assembles the Titans | 'You may put a planeswalker card with mana value 6 or less from your hand onto the battlefield' — this list runs 0 planeswalkers, so chapters II and III are blank. EXCLUDE. |
| Vesuvan Duplimancy | 'Whenever you cast a spell that targets only a single artifact or creature you control...' — this list runs 1 spell that targets its own creature; the trigger has almost no fuel. |
| Raff, Weatherlight Stalwart | 'you may tap two untapped creatures you control. If you do, draw a card' — requires two untapped creatures on a board this deck deliberately keeps empty. |
| Academy Wall | '0/5 Defender // Whenever you cast an instant or sorcery, you may draw a card. If you do, discard a card' — loots rather than draws, and a 0/5 defender does not advance a plan that wins by attacking in the air. |
| Impede Momentum | 'Tap target creature and put three stun counters on it' — sorcery-speed, and the creature stays on board where Citizen's Arrest and Prayer of Binding remove it outright. |
| Artillery Blast | 'Domain — deals X damage to target tapped creature, where X is 1 plus the number of basic land types' — 2 basic types in this two-colour list, so 3 damage, and only to a tapped creature. Runic Shot destroys outright for one mana. |
| Karn's Sylex | '{X}, {T}, Exile: Destroy each nonland permanent with mana value X or less' — a mythic slot for a sweeper that enters tapped and needs X mana on top; Temporary Lockdown and The Phasing of Zhalfir already occupy the sweeper role at lower cost. |
| Plaza of Heroes | '{T}: Add one mana of any color. Spend this mana only to cast a legendary spell' — this list runs 1 legendary card, and the rare budget is fully committed. |
| Thran Portal | 'As this land enters, choose a basic land type' — would raise Leyline Binding's domain count to 3 basic types, but costs a rare slot and 1 life per mana activation; the rare budget is spent on spells. |
| Frostfist Strider | 'Ward {2} // When this creature enters, tap target creature an opponent controls and put a stun counter on it' — a 4/4 for five that answers one creature temporarily; Prayer of Binding exiles for four at flash speed. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.14   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.85 adj [MV 3.14 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand  63.6%  prod  66.7%  gap  -3.1pp  [OK]
  W  demand  36.4%  prod  50.0%  gap -13.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [INFO] base: cube_mainboard only - every card verified by exact name against the working pool cache
  [PASS] commons_uncommons_max_2: PASS - no card exceeds 2 copies except basic lands
  [PASS] rares_mythics_max_1: PASS - all five rare/mythic cards are singletons
  [PASS] rare_mythic_total_max_5: PASS - exactly 5: Temporary Lockdown (R), The Phasing of Zhalfir (R), Silver Scrutiny (R), Adarkar Wastes (R), Sphinx of Clear Skies (M). Sideboard contains zero rares by design.
  [PASS] basics_unlimited: PASS - 9 Island, 6 Plains, format-supplied and exempt
  [PASS] colour_identity: PASS - every nonland card usable in UW via effective_cost.best_mode
```
