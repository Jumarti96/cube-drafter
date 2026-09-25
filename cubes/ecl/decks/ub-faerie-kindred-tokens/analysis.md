---
deck_name: "ub-faerie-kindred-tokens"
cube_id: "ecl"
cube_slug: "ecl"
colors: "UB"
format: "40-card"
built_at: "2026-08-09T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  9x Island                untapped blue source
  4x Swamp                 untapped black source
  2x Contaminated Aquifer  UB dual, enters tapped
  2x Eclipsed Realms       {C}, or any colour for Faerie spells (15 of 23 nonland cards)
```

### CREATURES (13)

```
CMC  Card                    Qty   Color  Role                                                                                        Rar
  1  Flitterwing Nuisance    x1    U      the only 1-drop; a {U} flying Faerie that converts a connecting board into cards            R
  2  Bitterbloom Bearer      x1    B      flash 1/1 flier making a 1/1 flying Faerie every upkeep                                     M
  2  Glamer Gifter           x2    U      flash 1/2 Faerie flier; ETB sets a 1/1 token to base 4/4 and grants all creature types      U
  2  Unwelcome Sprite        x2    U      2/1 Faerie flier; surveil 2 on an opponent-turn cast                                        U
  3  Glamermite              x2    U      flash 2/2 Faerie flier; ETB taps a blocker or untaps Pestered Wellguard for a second token  C
  3  Voracious Tome-Skimmer  x2    UB     2/3 Faerie flier; draws on an opponent-turn cast                                            U
  4  Nightmare Sower         x1    B      2/3 Faerie flier with lifelink; -1/-1 counter on an opponent-turn cast                      U
  4  Pestered Wellguard      x2    U      makes a 1/1 flying Faerie whenever it becomes tapped (attack OR convoke)                    U
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                   Qty   Color  Role                                                          Rar
  2  Nameless Inversion     x2    B      instant +3/-3; a changeling, so it is itself a Faerie spell   U
  4  Glen Elendra's Answer  x1    U      counters everything on the stack, a Faerie token per counter  M
  6  Harmonized Crescendo   x1    U      convoke instant drawing one card per Faerie permanent         R
```

### OTHER SPELLS (6)

```
CMC  Card                  Qty   Color  Role                                                                                       Rar
  1  Dawn-Blessed Pennant  x1    C      naming Faerie: 1 life per Faerie entering; sacrifice to rebuy a Faerie from the graveyard  U
  2  Stalactite Dagger     x1    C      makes a changeling token on ETB; equipped creature is all creature types                   C
  3  Firdoch Core          x2    C      a Faerie by changeling that taps for any colour and becomes a 4/4 for {4}                  C
  4  Gathering Stone       x2    C      naming Faerie: Faerie spells cost {1} less, plus an upkeep dig                             U
```

## SIDEBOARD (10)

```
Card                   Qty   Color  Role / When to board in                                                                                                                             Rar
Requiting Hex          x2    B      Fast ground aggro (Goblins, Warriors, Kithkin), where the engines need two extra turns to come online.                                              U
Blight Rot             x2    B      Large ground blockers that wall the swarm and survive Nameless Inversion's -3 toughness.                                                            C
Glen Elendra Guardian  x1    U      Opposing sweepers and key noncreature bombs; also a large Faerie body against removal-light decks.                                                  R
Dream Seizer           x1    B      Control and combo, to strip the sweeper or key card before the engines commit to the board.                                                         C
Temporal Cleansing     x2    U      Decks built on a key artifact or enchantment; convoke off a wide token board makes it cheap.                                                        C
Rooftop Percher        x2    C      Any graveyard deck — the cube's densest threat class at 39 cards / 15%. Stays on-plan because Changeling makes it a Faerie for every count-reader.  C
```

## ANALYSIS

### DECK IDENTITY

A UB Faerie kindred token deck. Three engines manufacture 1/1 blue-and-black Faerie tokens with flying — Bitterbloom Bearer every upkeep, Pestered Wellguard every time it becomes tapped (attacking OR convoking), and Glen Elendra's Answer once per spell it counters. Five colourless permanents read the resulting Faerie count: Gathering Stone x2 discounts every Faerie spell and digs one off the top each upkeep, Dawn-Blessed Pennant drains a life per Faerie entering and later rebuys one from the graveyard, Stalactite Dagger adds a changeling body, and Firdoch Core x2 is itself a Faerie that taps for any colour and can become a 4/4. Because those engines are artifacts in a cube with only four artifact answers — none of them castable in blue or black — the deck's core is close to unanswerable.

### THE COUNT THAT RUNS THE DECK

Four permanents read "how many Faeries do you control", and the answer on this list is **15 of 23 nonland cards** — 65%.

| Reader | What it does with the count |
|---|---|
| Gathering Stone ×2 | Discounts all 15 by {1}, and digs one off the top every upkeep |
| Dawn-Blessed Pennant | 1 life per Faerie *permanent* entering — tokens included; sacrifices to rebuy a Faerie from the graveyard |
| Harmonized Crescendo | Draws one card per Faerie permanent — creature cards, Firdoch Core, and every 1/1 token |
| Eclipsed Realms ×2 | Its coloured mana pays for all 15 |

Two of those 15 are not obvious and both were confirmed against oracle text: **Nameless Inversion** is a `Kindred Instant — Shapeshifter` with `Changeling (This card is every creature type.)`, so a removal spell is a Faerie spell; and **Firdoch Core** is a `Kindred Artifact — Shapeshifter` with the same clause, so a mana rock is a Faerie permanent.

### PESTERED WELLGUARD IS NOT A COMBAT CARD

Its oracle is `Whenever this creature becomes tapped` — not "whenever it attacks." **Convoke taps creatures.** So casting Harmonized Crescendo by convoking Pestered Wellguard makes a Faerie *while paying for the spell that counts Faeries*. That is the deck's tightest loop, and it works at instant speed.

### WHY SEVEN ARTIFACTS IN AN AGGRO DECK

Not sweeper resilience — the cube has two sweepers at 0.77% density, which does not justify a third of the deck. The real reason is the mirror-image census: the cube contains **four artifact answers total (1.5%)**, in BR, R, UG and W. **Not one is castable in blue or black.** Six artifact permanents in that environment are, practically speaking, unremovable, and every one of them either reads or feeds the Faerie count.

### PLAY PATTERN

Lead on a count-reader, not a body — Dawn-Blessed Pennant or Firdoch Core turn 1–3 makes everything after it cheaper. Bitterbloom Bearer is the only card you want down early for its own sake, since every upkeep it misses is a flier you never get. Hold Glen Elendra's Answer for a turn the opponent commits two spells; against a single spell it counters one thing and makes one 1/1.

### KNOWN SOFT SPOT

The deck is 13 creature cards for 26 total printed power, maximum 3. It does not win a damage race; it wins by out-permanenting the opponent. Against the cube's fastest ground tribes the plan is to survive to turn 8, and the sideboard (Requiting Hex ×2, Blight Rot ×2) is where that gets bought.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:6  4:6  6:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.1: Gathering Stone@0.9, Gathering Stone@0.9, Dawn-Blessed Pennant@0.8, Harmonized Crescendo@0.7, Firdoch Core@0.9, Firdoch Core@0.9) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 11.3: Glen Elendra's Answer@0.4, Stalactite Dagger@0.9) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 38%  T2 92%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The only sweeper a UB deck can cast in this pool is Darkness Descends ('Put two -1/-1 counters on each creature'), and against this list it kills 9 of the 12 creature cards — every body with toughness 2 or less: Bitterbloom Bearer 1/1, Flitterwing Nuisance 2/2, Unwelcome Sprite 2/1 x2, Glamer Gifter 1/2 x2, Glamermite 2/2 x2, Pestered Wellguard 3/2 x2 — plus every 1/1 token. Only Voracious Tome-Skimmer x2 and Nightmare Sower survive. Maindecking it would erase the deck's own kill mechanism. The deck answers a wide board by flying over it and out-producing it: Bitterbloom Bearer makes a flier every upkeep and Pestered Wellguard makes one on every attack and every convoke tap.
  OK        single_large_threat: Nameless Inversion, Glamer Gifter, Glamermite, Nightmare Sower
  CONCEDED  noncreature_permanents: No mono-U or mono-B card in this cube DESTROYS a resolved artifact or enchantment — all four artifact answers (Giantfall BR, Grub's Command BR, Pyrrhic Strike R, Wistfulness UG) and all four enchantment answers (Keep Out G, Pyrrhic Strike R, Unforgiving Aim W, Wistfulness UG) are outside UB. The mainboard's only answer is Glen Elendra's Answer countering it on the stack; Temporal Cleansing x2 carries the class from the sideboard and is sorcery-speed, which is why it is not maindecked. The same 1.5% answer density is what makes this deck's own 6 artifact permanents nearly unanswerable in the other direction.
  OK        stack: Glen Elendra's Answer
  CONCEDED  graveyard: Graveyard interaction is the cube's densest threat class at 15% (39 cards) and the cube censuses 0 dedicated graveyard hate. The mainboard is a 23-card engine-and-token shell with no slot for a 5-mana answer; Rooftop Percher x2 ('exile up to two target cards from graveyards') carries it from the sideboard, and it is on-plan there because Changeling makes it a Faerie for every count in the deck.
```
All four checks returned PASS; there are no WARN flags to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three mana sinks turn surplus lands into board. Firdoch Core x2: '{4}: This artifact becomes a 4/4 artifact creature until end of turn' — the biggest body in the deck, on demand. Dawn-Blessed Pennant: '{2}, {T}, Sacrifice this artifact: Return target card of the chosen type from your graveyard to your hand' converts 2 mana into a Faerie card. Stalactite Dagger: 'Equip {2}' re-suits as creatures die. Bitterbloom Bearer also produces a flier every upkeep with no card and no mana spent, so a flooded turn is never blank. |
| screw | mitigation | Gathering Stone x2 is the screw answer as well as the payoff: 'Spells you cast of the chosen type cost {1} less to cast' cuts a mana off 15 of the 23 nonland cards, and 'at the beginning of your upkeep, look at the top card of your library. If it's a card of the chosen type, you may reveal it and put it into your hand' digs toward the tribe. Firdoch Core x2 adds two non-land mana sources. CORRECTED after the grill: the earlier claim that Eclipsed Realms covers the colour half of screw was oracle-unsupported — 'Spend this mana only to cast a spell of the chosen type' means it produces no usable {U} or {B} for Pestered Wellguard x2, Glen Elendra's Answer or Harmonized Crescendo. Contaminated Aquifer is the deck's only unrestricted dual. Goldfish reports 86% keepable and 92% play-by-turn-2. |
| decapitation | accepted | This deck has genuine key cards. Pestered Wellguard x2 and Bitterbloom Bearer are 3 copies of the two repeating token faucets, and if both are answered on sight the count-readers read a Faerie count that is barely there. Mitigating means either adding more token engines — the pool has no other repeating Faerie-token permanent in UB — or cutting count-readers for redundant bodies, which is exactly the Sketch-1 build the shape judge rejected for abandoning the payoff package. What is accepted is that against a removal-dense opponent this deck converts to a slow midrange flier deck and wins on the artifacts' incremental value instead of on tokens. Firdoch Core x2 partially offsets this: it is a Faerie permanent that no creature removal can answer, so the count never falls to zero. |
| gas-out | mitigation | Three Cards: Net-Positive engines refuel without spending a card. Gathering Stone x2: 'at the beginning of your upkeep, look at the top card of your library. If it's a card of the chosen type, you may reveal it and put it into your hand' — a free card off the top on 15 of 23 nonland cards. Harmonized Crescendo: 'Draw a card for each permanent you control of that type', convoked out with the board itself. Voracious Tome-Skimmer x2 draws on opponent-turn casts, of which the deck holds 9 of 23. And an empty hand still produces a flier every upkeep off Bitterbloom Bearer. |
| raced | accepted | Goldfish turn 8 is slow and the cube's fastest clocks are wide ground tribes (Goblins 21, Warriors 23, Kithkin 19). This deck's blockers are 1/1 fliers and its interaction is 3 cards. Mitigating means maindecking Requiting Hex and Blight Rot over count-readers — and every count-reader cut is the reason this build was chosen over the faster Sketch-1 shell. The cost is stated plainly: this build trades the early game for a board of artifacts that the cube's four artifact answers, none castable in UB, essentially cannot remove. The sideboard carries the answer instead: Requiting Hex x2 and Blight Rot x2 board in, and Nightmare Sower's flying lifelink body blocks and gains life in the mainboard. |
| disruption-fizzle | mitigation | There is no critical turn to interact with — the engines are permanents that tick every upkeep rather than a chain that must resolve. Glen Elendra's Answer is the one card that can be answered mid-plan, and its own text reads 'This spell can't be countered.' If a sweeper resolves, the 6 artifact permanents (Gathering Stone x2, Dawn-Blessed Pennant, Stalactite Dagger, Firdoch Core x2) all survive, and 3 of the 7 engine cards actively rebuild: Dawn-Blessed Pennant's sacrifice mode returns a Faerie card from the graveyard, and Firdoch Core x2 becomes a 4/4 body for {4} without needing a creature to have survived. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Mirrormind Crown | Rare. 'The first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature' — it costs {4} plus Equip {2} before doing anything, converts only once per turn, and against this deck's own bodies it upgrades a 1/1 token into a 2/3: a +1 power conversion for 6 mana. Cutting it freed the rare/mythic slot Flitterwing Nuisance now occupies. |
| Rimefire Torque | Rare. Its copy target must be an instant or sorcery, and this list holds 4 of 23 nonland cards that qualify (17%). It also needs three Faerie ETBs to charge before doing anything. |
| Mischievous Sneakling | 'Changeling / Flash' — a 2/2 that IS a Faerie for every count, but it has no flying, so it contributes 0 of the 20 damage the thesis deals in the air. Replaced 1:1 in the Faerie count by Glamer Gifter, which flies AND makes a 1/1 token a base 4/4. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color' — genuinely taps Pestered Wellguard off-combat for a token, but that reads 2 of the 13 creature cards, and it is 0 of the Faerie count of 15/23. Firdoch Core supplies the identical mana clause while being 2 of that count. |
| Dream Seizer | Cut from the mainboard for land math, not function: at 24 nonland cards avg MV was 2.9167 and land_target returned 18 lands, which does not fit 40 cards. It is a Faerie flier with hand disruption and sits in the sideboard. |
| Lofty Dreams | 'Enchanted creature gets +2/+2 and has flying' — every Faerie token this deck makes already flies, so the flying clause is dead on its own board; it reduces to a convoke +2/+2 aura that cantrips. |
| Illusion Spinners | A 4/3 flier is the biggest body available and its flash condition is met by 15 of 23 cards, but at MV 5 it pushes avg MV past what 17 lands support — the curve already carries 6 cards at MV 4 or more and raw_target is 16.993 against 17 built lands. |
| Omni-Changeling | 'Convoke // You may have this creature enter as a copy of any creature on the battlefield' — MV 5 on the same curve objection, and its best copy target on this board is a 2/3. |
| Graveshifter | A changeling that returns a creature card from the graveyard, but at MV 4 in a list already holding 6 cards at MV 4 or more, on a 2/2 body. |
| Unexpected Assistance | 'Convoke // Draw three cards, then discard a card' draws more reliably than Harmonized Crescendo and costs no rare slot — but the shape judge selected this whole build because it is the only one running all three named count-readers, and swapping Crescendo out reconstructs the sketch the judge rejected for running none. |
| Evolving Wilds | Its own oracle does not enter tapped — the FETCHED land does. The real cost is producing no mana the turn it is cracked, which this curve (6 cards at MV 4 or more) cannot afford. |
| Ashling's Command / Soul Immolation | The cube's only two sweepers, and both are outside UB (UR and R respectively) — noted here because the build's original engine justification leaned on 'sweeper resilience' before the grill re-grounded it on artifact-answer scarcity instead. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 2   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.01 adj [MV 2.87 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  27.8%  prod  41.2%  gap -13.4pp  [OK]
  U  demand  72.2%  prod  70.6%  gap  +1.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
1a mainboard size                  PASS  40 (want 40)
1b sideboard size                  PASS  10 (want 10)
2 exact-name membership            PASS  all 25 names found
3 copy limits                      PASS  all within rarity multipliers
3b rare+mythic total <= 5          PASS  5 used: [('Harmonized Crescendo', 1, 'rare'), ("Glen Elendra's Answer", 1, 'mythic'), ('Flitterwing Nuisance', 1, 'rare'), ('Glen Elendra Guardian', 1, 'rare'), ('Bitterbloom Bearer', 1, 'mythic')]
4 colour usability (best_mode)     PASS  all nonland cards usable in UB; off-normal modes: {'Glamermite': 'cast', 'Blight Rot': 'cast', 'Unwelcome Sprite': 'cast', 'Nameless Inversion': 'cast', 'Stalactite Dagger': 'cast', 'Temporal Cleansing': 'cast', 'Harmonized Crescendo': 'cast', 'Rooftop Percher': 'cast', 'Gathering Stone': 'cast', 'Dream Seizer': 'cast', 'Firdoch Core': 'cast', 'Voracious Tome-Skimmer': 'cast', "Glen Elendra's Answer": 'cast', 'Flitterwing Nuisance': 'cast', 'Dawn-Blessed Pennant': 'cast', 'Pestered Wellguard': 'cast', 'Requiting Hex': 'cast', 'Nightmare Sower': 'cast', 'Glen Elendra Guardian': 'cast', 'Bitterbloom Bearer': 'cast', 'Glamer Gifter': 'cast'}
5 splash cap                       PASS  splash_colors=[] -> vacuously satisfied
```
