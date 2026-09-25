---
deck_name: "ug-marit-lage-rotation-ramp"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UG"
format: "40-card"
built_at: "2026-07-31T16:20:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  8x Island                  Land — blue source / High Tide fuel
  5x Forest                  Land — green source / Nature's Lore target
  2x Tangled Islet           Land — Forest Island dual
  1x Dark Depths             Payoff — win condition
```

### CREATURES (4)

```
CMC  Card                        Qty  Color  Role                                                  Rar
  3  Krosan Restorer             x2   G      Engine — repeatable land untap                        C
  5  Peregrine Drake             x2   U      Engine — untap five lands / flying blocker            C
```

### INSTANTS & SORCERIES (17)

```
CMC  Card                        Qty  Color  Role                                                  Rar
  1  Crop Rotation               x2   G      Tutor — finds Dark Depths                             U
  1  High Tide                   x2   U      Engine — Island mana multiplier                       U
  1  Mystical Tutor              x1   U      Tutor — fetches Crop Rotation (a third virtual copy)  R
  2  Counterspell                x2   U      Interaction — protect the assembly                    C
  2  Impulse                     x1   U      Selection — digs for Dark Depths                      C
  2  Nature's Lore               x2   G      Ramp — Forest onto battlefield                        U
  2  Snap                        x2   U      Interaction — free bounce + untap two lands           C
  3  Frantic Search              x2   U      Engine — free untap + dig + graveyard fill            C
  4  Turnabout                   x2   U      Engine — untap all your lands                         U
  5  Force of Will               x1   U      Interaction — zero-mana protection                    M
```

### OTHER SPELLS (3)

```
CMC  Card                        Qty  Color  Role                                                  Rar
  1  Exploration                 x1   G      Ramp — extra land drop each turn                      R
  1  Wild Growth                 x2   G      Ramp — +1 mana from one enchanted land                C
```

## SIDEBOARD (10)

```
Card                        Qty  Color  Role / When to board in                                                          Rar
Maze of Ith                 x1   C      Recurring attacker blank (land) — vs creature aggro — swap for a Forest, since g  R
Tormod's Crypt              x2   C      Graveyard hate — vs the cube's 45 graveyard cards — flashback, threshold, reanim  U
Ovinize                     x1   U      Single-large-threat answer — vs a lone fatty, regenerator or protection-from-col  C
Circular Logic              x2   U      Scaling counterspell — vs control and combo — the deck's 17 of 24 self-binning i  U
Break Asunder               x2   G      Artifact/enchantment removal — vs the cube's 24 artifacts and 33 enchantments     C
Floodgate                   x2   U      Wall + delayed sweeper — vs creature decks — a 0/5 Defender that, on leaving the  U
```

## ANALYSIS

### DECK IDENTITY

A Simic ramp-combo whose only win condition is Dark Depths. The deck does not attempt a single explosive turn; because removed ice counters persist as board state, it pays the thirty mana of {3} activations in installments across turns six to eight. Crop Rotation x2 is the reason the plan is a plan rather than a draw-step lottery: it is the only card in these colours that searches the library for a land and puts it onto the battlefield, so it converts any spare land into the single mythic copy of Dark Depths. Everything else is either mana that becomes ice-counter activations (Krosan Restorer, Turnabout, High Tide, Peregrine Drake, Frantic Search, Snap, Wild Growth, Nature's Lore, Exploration) or the counter-magic that keeps the installment plan on schedule.

### THE MANA MATH, EXACTLY

Dark Depths asks for thirty mana and nothing in this pool shortens the bill — there is no counter-remover, no land-copier, no proliferate-in-reverse. So the whole deck is one arithmetic problem, and the key structural fact is that **removed ice counters persist**. That converts "generate 30 mana" into "generate 30 mana *eventually*", which is a completely different and far easier problem.

A representative installment schedule on 8–9 lands:

| Turn | Mana available | Sources | Counters removed | Remaining |
|---|---|---|---|---|
| 6 | 9 | 8 lands + 1 Wild Growth | 3 | 7 |
| 7 | 15 | 9 lands + Wild Growth + Krosan Restorer at Threshold (untap 3) + High Tide on 7 Islands | 5 | 2 |
| 8 | 12 | 9 lands + Restorer + Turnabout | 4 (2 needed) | 0 → Marit Lage |

Turn 8 swings for 20 in the air, indestructible.

### WHY GREEN, WHEN THE MANA IS BLUE

Twenty of the twenty-nine coloured pips are blue, and the burst turn is entirely blue. Green is here for exactly one reason and it is worth stating as a count: **Crop Rotation and Mystical Tutor are 3 of 24 nonland cards that can deterministically reach the single mythic copy of Dark Depths, and mono-blue has zero.** Mystical Tutor's oracle reads "Search your library for an instant or sorcery card" — it cannot touch a land, so in mono-blue it is a High Tide fetcher and nothing more. Crop Rotation's "Search your library for a land card, put that card onto the battlefield" is the entire reason this colour pair exists.

### TANGLED ISLET IS DOING FOUR JOBS

Its type line is `Land — Forest Island`. That single line means it is:

1. a blue source,
2. a green source,
3. an **Island** — so High Tide's "whenever a player taps an Island for mana" triggers off it,
4. a **Forest** — so Nature's Lore's "Search your library for a Forest card" can fetch it.

It is the only card in the deck with all four properties, and it is why the Island count stays at 10 of 16 land slots despite running five basic Forests.

### THE THRESHOLD COUNT

Krosan Restorer upgrades from "untap target land" to "untap up to three target lands" at seven cards in the graveyard. **17 of the 24 nonland cards are instants or sorceries that bin themselves on resolution**, Frantic Search x2 each discard two more, and Crop Rotation x2 each sacrifice a land into the yard. By the turn-6 installment window the deck has typically cast five or six cheap spells, so Threshold is live exactly when it starts to matter — and the same graveyard makes sideboarded Circular Logic a hard counter.

### WHAT THE DECK CANNOT DO

It has one win condition and no way to recur it from exile. It has four creatures worth blocking with. And Snap, two of its five interaction slots, cannot be cast at all against an opponent with no creature — real interaction against a control deck is 3 of 24 cards until the sideboard arrives. Those are stated plainly in the failure-mode table below rather than papered over.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (24 nonland):  1:8  2:7  3:4  4:2  5:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff_access: 7 copies (effective 4.3: Crop Rotation@0.85, Crop Rotation@0.85, Mystical Tutor@0.8, Impulse@0.3, Frantic Search@0.25, Frantic Search@0.25) → p=0.82 (need ≥ 0.75)
  PASS  mana_engine: 17 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 78%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The only mainboard creature answer is Snap x2 ('Return target creature to its owner's hand'), which handles one body. The pool's blue sweeper is Floodgate ({3}{U}, 'When this creature leaves the battlefield, it deals damage to each nonblue creature without flying equal to half the number of Islands you control'), and it is a sideboard card for two mechanism reasons: it kills this deck's own Krosan Restorer x2 (green, no flying), and maindecking a four-mana wall would cost a Crop Rotation / Mystical Tutor find-slot that a single-copy Dark Depths requires. Floodgate x2 sits in the sideboard.
  OK        single_large_threat: Snap, Counterspell, Force of Will
  CONCEDED  noncreature_permanents: Break Asunder ({2}{G}{G}, 'Destroy target artifact or enchantment') is the only U/G answer in this pool; four mana with two green pips against seven green sources would strand it in the many matchups with no target, so it is a sideboard card.
  OK        stack: Counterspell, Force of Will
  CONCEDED  graveyard: No U/G card in this pool answers a graveyard. Tormod's Crypt ({0}, 'Exile target player's graveyard') is colourless and boards in against the cube's 45 graveyard cards; maindecking it would spend a slot that is blank against every deck without a graveyard theme.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands ARE the win condition: Dark Depths reads '{3}: Remove an ice counter', so every land past the sixth is another fraction of an activation. A flooded hand is a hand that kills faster. Nature's Lore x2 additionally convert a spell into an extra land on the battlefield. (Crop Rotation does NOT do this - 'sacrifice a land... put that card onto the battlefield' is land-count neutral; it changes which land you have, not how many.) |
| screw | mitigation | Nine of the 24 nonland cards cost one or two mana and are castable off two lands: Crop Rotation x2 {G}, Wild Growth x2 {G}, Exploration {G}, High Tide x2 {U}, Impulse x2 {1}{U}. Wild Growth on the second land makes the third mana on turn two, Nature's Lore x2 turn the second land drop into a third, and Impulse x2 'look at the top four cards' digs for the missing land. Goldfish sim: 3 lands by turn 3 in 88% of hands. |
| decapitation | accepted | There is exactly one Dark Depths in the pool and nothing in these colours recurs a land from exile. If it is exiled the deck has no win condition. Mitigating would mean maindecking a second, unrelated finisher — Stroke of Genius or Time Stretch — which costs one of the four remaining rare/mythic slots and a card that is dead in every game where Dark Depths resolves, and would dilute the find-density that the locked 'redundant assembly' build is built on. The partial defence that IS taken: Dark Depths is a land, so it dodges every creature-removal and most spot removal in the cube, and Counterspell x2 plus Force of Will answer a targeted attempt on the stack. |
| gas-out | mitigation | The engine is mana, not cards. Once Dark Depths is on the battlefield, '{3}: Remove an ice counter' is a mana sink that works from a completely empty hand — nine lands with an empty hand still removes three counters per turn. The refuel that exists: Impulse x2 are self-replacing ('Put one of them into your hand'), and Frantic Search x2 'Draw two cards' while untapping three lands, so both are cast for free in the mana sense. |
| raced | accepted | The mainboard's only blockers are Peregrine Drake x2 (2/3 fliers) and Krosan Restorer x2; against the cube's fastest clocks the deck leans on Snap x2, Counterspell x2 and Force of Will. Mitigating in the mainboard - fogs, walls, or Floodgate - would cost the Crop Rotation / Mystical Tutor find-density that a single-copy Dark Depths requires, which is the exact axis the locked build was chosen on; Floodgate specifically would also kill this deck's own Krosan Restorer x2. The cost is paid in the sideboard instead: Floodgate x2, Ovinize, Maze of Ith are 4 of the 10 sideboard cards, all creature-facing. |
| disruption-fizzle | mitigation | Ice counters already removed persist as board state, so there is no single critical turn to interact with — the 30 mana is paid in installments across turns six to eight and a counterspell on any one of them costs one activation, not the plan. Force of Will's 'You may pay 1 life and exile a blue card from your hand rather than pay this spell's mana cost' is the one answer that costs zero of the mana the activations are made of, and Snap x2 untap two lands as they resolve, so interacting mid-chain does not cost tempo. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Helm of Awakening | 'Spells cost {1} less to cast' reduces SPELL costs only; Dark Depths' '{3}: Remove an ice counter' is an activated ability and is not discounted at all. The 30 mana is untouched. |
| Urza, Lord High Artificer | 'Tap an untapped artifact you control: Add {U}' needs an artifact count this list does not have: 4 of 23 nonland cards are artifacts. Also costs one of only 4 remaining rare/mythic slots. |
| Opposition | 'Tap an untapped creature you control: Tap target...' needs a wide board; this list runs 6 creatures, none of which make tokens. |
| Squirrel Nest | Makes 1/1s but adds nothing to the 30-mana requirement and does not find Dark Depths. |
| Kamahl, Fist of Krosa | '{G}: Target land becomes a 1/1 creature' - an alternate mana sink, but it competes for a rare/mythic slot with cards that actually accelerate. |
| Terravore | Power equals land cards in all graveyards; this deck only puts lands in the graveyard via one Crop Rotation sacrifice. |
| Stroke of Genius | 'Target player draws X cards' is a real alternate kill with big mana, but it is a rare and the 5 rare/mythic cap is already spent on acceleration and protection. |
| Time Stretch | {8}{U}{U} for two extra turns is 10 mana that could instead be three-and-a-third ice counters. |
| Horseshoe Crab | '{U}: Untap this creature' untaps a CREATURE, not a land - it produces no mana. |
| Emerald Charm | 'Untap target permanent' can untap one land for {G} - strictly worse than the blue untappers, which untap two to five. |
| Wormfang Drake | Can re-trigger Peregrine Drake's ETB, but 'sacrifice it unless you exile a creature you control' makes it a blank in the many hands with no other creature. |
| Hinterland Harbor | A rare UG dual, but Tangled Islet (common, 2 copies) fills the same role AND is an Island for High Tide; the rare slot is worth more elsewhere. |
| Mystic Remora | 'Cumulative upkeep {1}' competes for exactly the mana this deck is hoarding. |
| Crawlspace | 'No more than two creatures can attack you each combat' - real defence, but a rare slot, and Maze of Ith plus fogs cover the same axis cheaper. |
| Jalum Tome | '{2}, {T}: Draw a card, then discard a card' - loots and fills the graveyard, but two mana per activation is a direct tax on the counter budget. |
| Deadwood Treefolk | Vanishing 3 recursion of creatures; this deck's creatures are mana dorks whose recursion does not advance the 30-mana clock. |
| Gamekeeper | Reanimates a random creature on death; the creature suite here is dorks, so the payoff is a Birds of Paradise. |
| Ovinomancer | 'sacrifice it unless you return three basic lands you control' - returning three lands is the exact opposite of this deck's plan. |
| Denizen of the Deep | 'return each other creature you control to its owner's hand' would bounce our own mana dorks. |
| Arcanis the Omnipotent | {3}{U}{U}{U} triple-blue is a real cost in a two-colour deck and it draws cards rather than making mana. |
| Forgotten Ancient | +1/+1 counters do nothing for a deck whose only threat is a token that is already 20/20. |
| Nantuko Monastery | 'Threshold - {G}{W}' requires white; this deck cannot activate it, and its '{T}: Add {C}' is worse than a basic. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     2.38   Ramp cards: 14   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -2.49 adj [MV 2.38 vs 2.5, 14 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  G  demand  31.0%  prod  43.8%  gap -12.8pp  [OK]
  U  demand  69.0%  prod  62.5%  gap  +6.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a deck size: 40 == 40
[PASS] 1b sideboard size: 10 == 10
[PASS] 2 exact-name membership: missing=[]
[PASS] 3 copy limits: violations=[]
[PASS] 4 colour usability (best_mode): unusable=[] | usable_as={'Crop Rotation': 'cast', 'Mystical Tutor': 'cast', 'Impulse': 'cast', 'Frantic Search': 'cast', "Nature's Lore": 'cast', 'Wild Growth': 'cast', 'Exploration': 'cast', 'Krosan Restorer': 'cast', 'High Tide': 'cast', 'Turnabout': 'cast', 'Peregrine Drake': 'cast', 'Snap': 'cast', 'Counterspell': 'cast', 'Force of Will': 'cast', "Tormod's Crypt": 'cast', 'Break Asunder': 'cast', 'Floodgate': 'cast', 'Circular Logic': 'cast', 'Ovinize': 'cast'}
[PASS] 5 splash cap: over=[]
[PASS] 6 rare/mythic cap (user rule, <=5): 5 rare/mythic cards: Dark Depths, Exploration, Force of Will, Maze of Ith, Mystical Tutor
```
