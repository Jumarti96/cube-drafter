---
deck_name: "bg-bloodline-bidding"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BG"
format: "40-card"
built_at: "2026-08-10T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  7x Swamp
  4x Forest
  2x Eclipsed Realms                                          any colour for Elf spells (17 of 23 nonlands), else {C}
  2x Evolving Wilds                                           fetches a basic tapped; also mills a land for Lluwen
  2x Haunted Mire                                             BG dual, enters tapped
```

### CREATURES (15)

```
CMC  Card                                                     Qty  Color  Role                        Rar
  2  Creakwood Safewright                                     x2   B      Enabler/Fodder              U
  2  Lluwen, Imperfect Naturalist                             x1   BG     Enabler/Fodder              R
  2  Lys Alana Dignitary                                      x2   G      Infrastructure/Consistency  U
  2  Lys Alana Informant                                      x2   G      Enabler/Fodder              C
  2  Scarblade Scout                                          x2   B      Enabler/Fodder              C
  3  Moonglove Extractor                                      x1   B      Infrastructure/Consistency  C
  3  Trystan, Callous Cultivator // Trystan, Penitent Culler  x1   G      Engine/Outlet               R
  3  Twilight Diviner                                         x1   B      Engine/Outlet               R
  4  Moon-Vigil Adherents                                     x2   G      Payload/Payoff              U
  5  Gloom Ripper                                             x1   B      Payload/Payoff              R
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                                     Qty  Color  Role                        Rar
  2  Bogslither's Embrace                                     x1   B      Interaction/Disruption      C
  2  Midnight Tilling                                         x2   G      Enabler/Fodder              C
  2  Nameless Inversion                                       x2   B      Interaction/Disruption      U
  5  Dose of Dawnglow                                         x2   B      Payload/Payoff              U
  8  Bloodline Bidding                                        x1   B      Payload/Payoff              R
```

## SIDEBOARD (10)

```
Card                                                     Qty  Color  Role / When to board in
Requiting Hex                                            x2   B      Against fast low-curve aggro — 'Destroy target creature with mana value 2 or less' for {B}, plus 2 life, buys the turns this deck needs to reach turn 6.  [U]
Chomping Changeling                                      x2   G      Against artifact or enchantment decks — 11 artifacts and 21 enchantments in the cube; ETB 'destroy up to one target artifact or enchantment' on a changeling body that is still an Elf for Bloodline Bidding.  [U]
Dawn's Light Archer                                      x2   G      Against fliers and fast starts — evasion is the cube's largest threat class at 41 cards, and a 4/2 with 'Flash / Reach' ambushes an attacking flier at instant speed. It is also an Elf, so it is a Bloodline Bidding return target and a Convoke body, unlike a protection trick.  [C]
Unforgiving Aim                                          x2   G      Against fliers — evasion is the cube's densest threat class at 41 cards; 'Destroy target creature with flying' / 'Destroy target enchantment' / 'Create a 2/2 black and green Elf creature token' is never a dead card.  [C]
Rooftop Percher                                          x2   C      Against graveyard decks — 39 cube cards interact with graveyards; 'exile up to two target cards from graveyards' on a 3/3 flier that is a changeling, so it is still an Elf for Bloodline Bidding.  [C]
```

## ANALYSIS

### DECK IDENTITY

A black-green Elf self-mill deck whose graveyard is its real hand. Fourteen of the twenty-three nonland cards cost two or less and all fifteen creatures are Elves that mill on the way down, so by turn five the graveyard holds six to ten Elf creature cards while the board holds three or four bodies. The graveyard then has two exits. Dose of Dawnglow reanimates a single card at instant speed for five mana — the cube's only uncapped single-target reanimation. Bloodline Bidding empties the yard in one action, and Convoke means it costs lands-plus-bodies rather than eight mana: the same Elves that filled the graveyard tap to pay for the spell that returns them. Gloom Ripper and Moon-Vigil Adherents turn either board into lethal.

### THE CHANGELING MULTIPLIER

The archetype brief for this cube described a self-mill deck aiming Bloodline Bidding at a tribe. What it did not say is that the cube contains 14 changelings, and *Changeling (This card is every creature type)* means every one of them is an Elf. That is what makes Elf the correct name for Bidding rather than Goblin or Merfolk: the Elf pool is 27 true Elves plus 14 changelings, the deepest tribe in the cube by a wide margin once changelings are counted.

The effect shows up twice in this list. Nameless Inversion is a *Kindred Instant - Shapeshifter* with changeling, so a removal spell that has already done its job is still an Elf card sitting in the graveyard — it feeds Gloom Ripper's X, and it satisfies the *"if there is an Elf card in your graveyard"* clause on Creakwood Safewright and Lys Alana Dignitary. And in the sideboard, Chomping Changeling and Rooftop Percher are hate cards that cost the combo nothing, because boarding them in *adds* to Bidding's return pool rather than diluting it.

### WHY CONVOKE MAKES AN EIGHT-DROP A SIX-DROP

Bloodline Bidding reads {6}{B}{B}, which in a 17-land deck is a turn-8 card. Convoke changes the arithmetic completely: *"Each creature you tap while casting this spell pays for {1} or one mana of that creature's color."* Every Elf that filled the graveyard is still standing there, and it taps to pay for the spell that empties the graveyard. Five lands plus three bodies is eight mana. The deck is built so those bodies exist: 14 of 23 nonlands cost two or less.

The subtlety is *which* creatures to tap. Convoking with the finishers means Gloom Ripper and Moon-Vigil Adherents are tapped and cannot attack the turn the board arrives. The correct line is to Convoke with the spent mill bodies — a Scarblade Scout that has already milled is pure mana — and leave the finishers untapped.

### THE ECLIPSED REALMS READING

Eclipsed Realms says *"Add one mana of any color. Spend this mana only to cast a spell of the chosen type."* Naming Elf, it colour-fixes 17 of the 23 nonland copies, including both double costs on curve: Moon-Vigil Adherents is an Elf Druid and Gloom Ripper an Elf Assassin. The one card it cannot pay a coloured pip for is Bloodline Bidding itself, because Bidding is a plain Sorcery with no creature type — it contributes only {C} there. That single fact is why the deck runs two rather than four.

### PLAY PATTERN

| Turn | Line |
|---|---|
| 2 | Scarblade Scout or Lys Alana Informant or Creakwood Safewright — any two-drop that fills the yard |
| 3 | Trystan, then transform it every main phase from here for a free mill 3 per turn |
| 4 | Moon-Vigil Adherents, already a 5/5-plus trampler off four or five creature cards in the yard |
| 5 | Dose of Dawnglow on the best milled body, or hold it as an instant-speed response to removal |
| 6 | Bloodline Bidding naming Elf, Convoking with spent mill bodies; Gloom Ripper converts |

One timing note that is easy to get wrong: Twilight Diviner says *"Whenever one or more **other** creatures you control enter"* and *"triggers only **once each turn**."* It must already be on the battlefield before the reanimation resolves — a Diviner returned *by* Bidding enters alongside the others and copies nothing — and it makes exactly one token off a Bidding that returns eight.

### WHERE THIS LIST IS GENUINELY WEAK

Three maindeck interaction spells against a cube whose largest threat class is 41 evasive creatures, and Nameless Inversion's +3/-3 does not answer a 4-toughness flier at all. One card that draws. And Bloodline Bidding is unrecoverable once answered — no card in the pool rebuys a Sorcery. The deck's insurance is that six payoff copies read the same graveyard, so removing any one of them slows the clock rather than ending the game.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  2:14  3:3  4:2  5:3  8:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.6: Dose of Dawnglow@0.8, Dose of Dawnglow@0.8) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 9 copies → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 94%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in B or G in this cube (dossier lists only 2 sweepers, both R/UR); this deck answers a wide board by out-sizing it — Moon-Vigil Adherents 'gets +1/+1 for each creature you control and each creature card in your graveyard' with trample, so a full graveyard makes it bigger than any token swarm can block.
  OK        single_large_threat: Bogslither's Embrace, Gloom Ripper, Nameless Inversion
  CONCEDED  noncreature_permanents: Zero maindeck answers; artifacts are 4.2% and enchantments 8.1% of the cube, too thin to tax a combo deck's maindeck. Chomping Changeling x2 and Unforgiving Aim x2 come in from the sideboard.
  CONCEDED  stack: B and G have no countermagic in this cube; the deck's answer to being countered is that Bloodline Bidding is one of six payoff copies reading the same graveyard — Dose of Dawnglow x2 reanimates without it and Moon-Vigil Adherents wins without any reanimation at all.
  CONCEDED  graveyard: The cube has zero dedicated graveyard hate by census; the only exilers are Rooftop Percher and Dawnhand Dissident. Rooftop Percher x2 is in the sideboard for the mirror.
```

- No WARN-tier flags to respond to: curve PASS (MV distribution 2:14, 3:3, 4:2, 5:3, 8:1) and goldfish PASS (85% keepable against an 80% threshold, 88% reach 3 lands by turn 3).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Lluwen is the dedicated flood outlet: '{2}{B/G}{B/G}{B/G}, {T}, Discard a land card: Create a 1/1 black and green Worm creature token for each land card in your graveyard' — it eats an excess land as its cost and pays out per land already milled, and 17 of the 40 cards are lands so the graveyard reliably holds them. Bloodline Bidding at {6}{B}{B} is itself a flood outlet, because extra lands substitute for the Convoke bodies. Dose of Dawnglow at {4}{B} is a five-mana instant that a flooded hand can always deploy. |
| screw | mitigation | 14 of 23 nonlands cost two or less and the goldfish sim returns 85% keepable hands with 88% reaching three lands by turn 3. Two-land hands function: Scarblade Scout, Lys Alana Informant, Creakwood Safewright and Midnight Tilling are all two-mana plays that still fill the graveyard. Lys Alana Dignitary digs out — '{T}: Add {G}{G}. Activate only if there is an Elf card in your graveyard' turns any milled Elf into two extra mana, and its condition is met by 17 of 23 nonland copies. Evolving Wilds x2 and Eclipsed Realms x2 fix the colour half. |
| decapitation | mitigation | Bloodline Bidding answered on sight is survivable because it is one of six payoff copies reading the SAME graveyard. Dose of Dawnglow x2 reanimates without it. Moon-Vigil Adherents x2 'gets +1/+1 for each creature you control and each creature card in your graveyard' with trample — it needs no reanimation at all. Gloom Ripper's '+X/+0 ... where X is the number of Elves you control plus the number of Elf cards in your graveyard' converts an ordinary board into lethal with nothing returning. |
| gas-out | mitigation | This deck's refuel is the graveyard, not the hand: Bloodline Bidding turns an empty hand into every Elf creature card milled all game, and Dose of Dawnglow turns one card into the best creature already milled. Three cards replace themselves on the way there — Midnight Tilling ('Mill four cards, then you may return a permanent card from among them to your hand'), Lluwen ('you may put a creature or land card from among the milled cards on top of your library') and Moonglove Extractor ('Whenever this creature attacks, you draw a card and lose 1 life'). Moonglove Extractor is the deck's only true draw, and it is conditional on attacking profitably, so an empty hand before turn 5 with no payoff milled remains the real losing pattern. |
| raced | accepted | Against the cube's fastest starts this deck is behind. Evasion is the densest threat class at 41 cards (15.8%) and the mainboard carries only 3 interaction spells; Nameless Inversion's '+3/-3' does not answer a 4-toughness flier at all, and the deck has zero one-mana plays. Mitigating this in the maindeck would cost the deck's identity directly: interaction slots come out of the 14 Engine cards, and every mill body cut is simultaneously graveyard fuel, a Convoke body for Bidding, and one of the 15 Elf creature cards Bidding returns — cutting them pushes the turn-6 kill past turn 6 in three ways at once. The cost is paid in the sideboard instead: Requiting Hex x2 ('Destroy target creature with mana value 2 or less'), Unforgiving Aim x2 ('Destroy target creature with flying') and Dawn's Light Archer x2 (a 4/2 with flash and reach). |
| disruption-fizzle | mitigation | The critical turn meeting one piece of interaction is survivable in both directions. If Bidding is answered the graveyard is untouched, and Dose of Dawnglow or a Moon-Vigil Adherents cashes the same yard a turn later — nothing about the fizzle empties the resource. If a returned creature is removed in response to the finish, Twilight Diviner ('Whenever one or more other creatures you control enter, if they entered or were cast from a graveyard, create a token that's a copy of one of them') has already doubled the best body; note its text says 'other' and 'only once each turn', so it must be on the battlefield BEFORE the reanimation resolves. The genuine exposure is Convoke: a countered Bidding leaves the board tapped out, so the line is to Convoke with the mill bodies rather than the finishers whenever the mana allows. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Moonshadow | 7/7 for {B} but 'Whenever ONE OR MORE permanent cards are put into your graveyard ... remove A -1/-1 counter' — one counter per event, so it needs six separate mill events, not one big mill; too slow for a T6 goldfish and costs a mythic slot. |
| Dose of Dawnglow | The only uncapped single-target reanimation, but at {4}{B} instant it returns one creature where Bloodline Bidding returns every Elf; the deck's mill targets are 2-3 MV Elves that Bidding gets for free. |
| Bloom Tender | 'For each color among permanents you control, add one mana of that color' produces exactly {B}{G} in a two-colour deck — 2 mana from a mythic slot, against a 5-rare budget where Bidding, Gloom Ripper, Trystan, Twilight Diviner and a dual are worth more. |
| Bristlebane Battler | 6/6 for {1}{G} but it is a Kithkin, not an Elf — no Bidding return, no Gloom Ripper count; its counters come off only when other creatures enter, which the Bidding turn does once. |
| Formidable Speaker | Tutor-on-discard is real but it is a rare in a 5-rare budget and it finds one card where Unbury and Graveshifter rebuy from a graveyard the deck is already filling. |
| Darkness Descends | 'Put two -1/-1 counters on each creature' is symmetric — this deck's board after Bidding is wide and small, so it kills more of ours than theirs. |
| Boggart Mischief | 'Whenever a GOBLIN creature you control dies' — 0 of the 23 nonland cards in the built list are Goblins, so the drain clause is blank text here. |
| Heirloom Auntie | Surveil engine on creature death, but its counters only come off for its own benefit and it is a Goblin, so it contributes nothing to Bidding-for-Elf or Gloom Ripper's Elf count. |
| Retched Wretch | Self-returning body, but a Goblin — outside the chosen Bidding type — and the deck has no sacrifice outlet to loop it (dossier: 0 sac outlets in the cube). |
| Sapling Nursery | 'Affinity for Forests' and landfall Treefolk tokens want a Forest-heavy mono-green land base; this deck runs roughly half Swamps and duals, so the discount and the token type both miss. |
| Prismatic Undercurrents | 'Vivid — search for up to X basic lands, where X is the number of colors among permanents you control' caps at 2 in a two-colour deck. |
| Aurora Awakener | X = colours among permanents, which is 2 here; a 7-mana mythic that reveals 2 permanents does not beat Bidding as a top end. |
| Prismabasher / Wildvine Pummeler / Shimmercreep / Luminollusk | All Vivid/domain cards whose X is the number of colours among permanents — 2 in a BG deck, so each is paying full price for a two-colour payoff. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color' is real acceleration, but Bloodline Bidding's convoke already taps creatures for mana, and the Drum competes with convoke for the same untapped bodies. |
| Mornsong Aria | 'Players can't draw cards' turns off Champions of the Perfect and Midnight Tilling's card flow while the symmetric tutor helps a faster opponent more. |
| Iron-Shield Elf | 'Discard a card: gains indestructible' — a 3/1 Elf, but Selfless Safewright protects the whole board on the Bidding turn for the same purpose. |
| Dundoolin Weaver | 'if you control three or more creatures, return target permanent card from your graveyard to your hand' — a Kithkin, and the condition is unmet on the turns the deck most needs the rebuy. |
| Changeling Wayfinder | A colourless Elf via changeling, but its ETB only fetches a basic to hand; Eclipsed Elf finds an Elf OR a land from four cards for the same slot. |
| Chomping Changeling | Changeling Elf with artifact/enchantment removal ETB — a sideboard card, not a maindeck slot, since the cube's threat profile is creature-led. |
| Gnarlbark Elm | Repeatable -2/-2 is fine but it is a Treefolk, and two activations exhaust it; Blight Rot kills a bigger creature for one card. |
| Firdoch Core | A changeling artifact that taps for any colour, but it is not a creature until you pay {4}, so it does not convoke Bidding and is not returned by it. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.28 adj [MV 2.96 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  57.7%  prod  58.8%  gap  -1.1pp  [OK]
  G  demand  42.3%  prod  41.2%  gap  +1.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1 deck size - mainboard 40 (want 40)
[PASS] 1 sideboard size - sideboard 10 (want 10)
[PASS] 2 exact-name membership - all 25 entries found
[PASS] 3 copy limits - all within card_pool_rules
[PASS] 4 colour usability (best_mode) - all nonland cards usable in ['B', 'G']+[]
[PASS] 5 splash cap - no splash colours declared
[PASS] 6 rare/mythic budget <=5 - 5 used: ['Bloodline Bidding x1', 'Gloom Ripper x1', 'Lluwen, Imperfect Naturalist x1', 'Trystan, Callous Cultivator // Trystan, Penitent Culler x1', 'Twilight Diviner x1']
```
