---
deck_name: "g-marit-lage-fortress-ramp"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "G"
format: "40-card"
built_at: "2026-07-31T17:35:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
  14x Forest                  Land — basic, doubled by Gauntlet of Power, fetchable by Nature's Lore
  1x Dark Depths             Payoff — win condition
```

### CREATURES (9)

```
CMC  Card                        Qty  Color  Role                                                  Rar
  1  Birds of Paradise           x1   G      Ramp — turn-one accelerant                            R
  2  Fa'adiyah Seer              x2   G      Find — repeatable land-only draw; Dark Depths is a l  C
  2  Werebear                    x2   G      Ramp + blocker — mana dork, 4/4 at Threshold          C
  3  Krosan Restorer             x2   G      Engine — untaps one land, three at Threshold          C
  6  Elvish Aberration           x2   G      Engine — {T}: Add {G}{G}{G}; forestcycles into a For  C
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                        Qty  Color  Role                                                  Rar
  1  Crop Rotation               x2   G      Tutor — puts Dark Depths onto the battlefield at ins  U
  1  Emerald Charm               x2   G      Interaction — untaps a land, or destroys a non-Aura   C
  2  Lull                        x1   G      Interaction — fog; cycles when the board is safe      C
  2  Nature's Lore               x2   G      Ramp — Forest onto the battlefield untapped           U
  3  Call of the Herd            x2   G      Backup threat — four 3/3 bodies across two cards via  U
```

### OTHER SPELLS (7)

```
CMC  Card                        Qty  Color  Role                                                  Rar
  1  Exploration                 x1   G      Ramp — an extra land drop every turn                  R
  1  Wild Growth                 x2   G      Ramp — +1 mana from one enchanted land                C
  2  Mind Stone                  x2   C      Ramp — colourless mana; sacrifices for a card when f  C
  2  Sylvan Library              x1   G      Find — two extra cards every draw step                M
  5  Gauntlet of Power           x1   C      Engine — doubles every basic Forest permanently       M
```

## SIDEBOARD (10)

```
Card                        Qty  Color  Role / When to board in                                                          Rar
Tormod's Crypt              x2   C      Graveyard hate — vs the cube's 45 graveyard cards — flashback, threshold, reanim  U
Sandstorm                   x2   G      Anti-go-wide — vs token and Goblin decks whose bodies are x/1                     C
Lull                        x1   G      Second fog — vs decks that can kill on one alpha strike                           C
Break Asunder               x2   G      Artifact/enchantment removal — vs the cube's 24 artifacts and 33 enchantments —   C
Giant Spider                x2   G      Anti-flier blocker — vs the cube's 42 evasion cards — reach walls both ground an  C
Icy Manipulator             x1   C      Repeatable single-large-threat answer — vs any creature bigger than a 4/4 Werebe  U
```

## ANALYSIS

### DECK IDENTITY

A mono-green ramp-combo whose only win condition is Dark Depths, and the only one of the three builds that both finds it and cannot protect it. Crop Rotation x2 puts the single mythic land onto the battlefield at instant speed for one green mana, and Fa'adiyah Seer x2 plus Sylvan Library dig for it every turn — green is the only colour in this cube that can search for a land at all. The thirty mana comes from breadth rather than burst: Gauntlet of Power doubles every basic Forest permanently, Elvish Aberration taps for three, Wild Growth and Werebear and Birds of Paradise each add one, and Krosan Restorer untaps up to three lands a turn once Threshold is on. There is no counterspell in green in this pool, which matters less than it looks: the {3} activation is an ability, not a spell, so there is no stack window to defend — the deck defends its life total with Werebear, Call of the Herd and Lull instead.

### GREEN IS THE ONLY COLOUR THAT CAN FIND THE CARD

The whole reason this deck exists in green is one line of text. Crop Rotation: "As an additional cost to cast this spell, sacrifice a land. Search your library for a land card, put that card onto the battlefield, then shuffle." It is the only card in the entire 276-card pool that searches the library for a **nonbasic** land — Terminal Moraine reads "a basic land card" and Mystical Tutor reads "an instant or sorcery card", neither of which can touch Dark Depths.

Stacked with Fa'adiyah Seer, whose "Draw a card and reveal it. If it isn't a land card, discard it" keeps Dark Depths precisely because Dark Depths *is* a land, and with Sylvan Library's two extra cards every draw step, the assembly gate lands at **p = 0.84 by turn 9** — the highest of the three builds, and comfortably above the mono-blue build's 0.79.

### THE MANA IS BREADTH, NOT BURST

Green has no Turnabout, no Peregrine Drake, no High Tide. It cannot produce thirty mana in one turn and it does not try. What it has instead is a wide, permanent base:

| Source | Copies | Mana per turn once online |
|---|---|---|
| Basic Forest under Gauntlet of Power | 14 | 2 each |
| Elvish Aberration | 2 | 3 each |
| Wild Growth (on a Gauntlet'd Forest) | 2 | 1 each |
| Krosan Restorer at Threshold | 2 | up to 6 each |
| Werebear / Birds of Paradise / Mind Stone | 5 | 1 each |

On an eight-Forest board with Gauntlet resolved that is 16 mana from lands alone — five ice counters a turn. Two such turns plus the chip damage from turns five and six finishes the ten.

### KROSAN RESTORER IS AN UNTAPPER, NOT A MANA ELF

Worth stating plainly because two of the three sketchers and the shape judge all got this wrong: the oracle is "{T}: Untap target land. / Threshold — {T}: Untap up to three target lands." There is no "{T}: Add {G}" clause; that is Werebear. The consequence is that Restorer's output *scales with what your lands are worth* — untapping three basic Forests under Gauntlet of Power is **+6 mana a turn from a three-drop**, which is the largest repeatable mana effect in the deck and better than the mana-elf reading it was mistaken for.

### WHY ARBORIA IS NOT HERE

One sketcher built its entire plan around Arboria — "Creatures can't attack a player unless that player cast a spell or put a nontoken permanent onto the battlefield during their last turn" — on the theory that activating Dark Depths is neither, so combo turns become attack-proof turns. The theory is wrong on the same line of text. **Playing a land is putting a nontoken permanent onto the battlefield.** This deck makes a land drop nearly every turn and two with Exploration; Crop Rotation and Nature's Lore both "put that card onto the battlefield" as well. Arboria would be switched off on almost every turn that mattered, and worse, it is symmetric on the win condition — it can stop your own Marit Lage from attacking an opponent who simply passes.

### THE HONEST WEAKNESS

Mono-green in this pool has **zero** cards that destroy or exile a creature, and **zero** counterspells. Against a single threat bigger than a 4/4 Werebear the deck has no answer at all — it blocks, fogs, and hopes. That is the price of being the build that can actually find its win condition, and it is stated in the coverage declaration rather than hidden.

### THE GOLDFISH, ACTUALLY COMPUTED

The self-grill's sharpest finding was that turn 9 had been asserted and never calculated — and the whole skeleton selection was graded on it. So it was calculated: a 20,000-trial mana goldfish on the final list, on the draw, no mulligans, no interaction, and deliberately conservative in that it banks no floating mana between turns.

| | |
|---|---|
| Games assembling Marit Lage within 20 turns | 96.8% |
| Turn the 30th mana is paid | median **9**, 25th pct 8, mean 10.2 |
| P(assembled by turn 8) | 28.0% |
| P(assembled by turn 9) | 52.4% |
| P(assembled by turn 11) | 76.2% |

Turn 9 is the median, so the locked thesis turn holds — but the spread is wide, and the 75th percentile is turn 11. This is the slowest of the three builds and the number says so.

The grill's Challenger did not take that table on trust — it wrote and ran a second, independent simulation of the same list. The two agree on the number that matters: median turn **9** and 25th percentile turn **8**, with the Challenger's model running slightly optimistic across the tail (99.6% assembled within 20 turns against 96.8%, 58.4% by turn 9 against 52.4%) as its greedier casting heuristic predicts. Two independently written models converging on the same median is the strongest verification any of the three decks in this set has for its thesis turn.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (25 nonland):  1:8  2:10  3:4  5:1  6:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff_access: 8 copies (effective 4.3: Crop Rotation@0.85, Crop Rotation@0.85, Fa'adiyah Seer@0.4, Fa'adiyah Seer@0.4, Sylvan Library@0.5, Mind Stone@0.15, Mind Stone@0.15) → p=0.84 (need ≥ 0.75)
  PASS  mana_engine: 15 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 85%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-green in this pool has exactly one sweeper — Sandstorm, 'deals 1 damage to each attacking creature' — and it only kills toughness-1 bodies and only while they attack. Maindecking it would cost a ramp or find slot in a build the judge selected for delivering on turn 9, so both copies sit in the sideboard.
  CONCEDED  single_large_threat: Mono-green in this pool contains ZERO cards that destroy or exile a creature. Not one. The mainboard's answer is to block: Werebear x2 is a 4/4 at Threshold, Call of the Herd x2 makes four 3/3 bodies across two cards via flashback, and Lull prevents all combat damage for a turn. Against the pool's 10 creatures with power 5 or greater that is not an answer. The true cost of mitigating is ONE UNCOMMON SIDEBOARD SLOT, not a rare slot: Icy Manipulator ({4}, uncommon, colourless, '{1}, {T}: Tap target artifact, creature, or land') is legal here and spends none of the 5 rare/mythic budget — it is in the sideboard rather than the mainboard because {4} plus {1} every turn is roughly one and a half ice-counter activations, which a build selected on the fastest-goldfish lens cannot pay in every matchup.
  OK        noncreature_permanents: Emerald Charm
  CONCEDED  stack: Green has no counterspell in this pool. This costs the deck less than it would cost the other two builds, because Dark Depths' '{3}: Remove an ice counter' is an activated ability that uses no stack window an opponent can counter — there is nothing to protect. What is genuinely unprotected is the resolution of Gauntlet of Power and Exploration, and mono-green cannot buy that protection at any price.
  CONCEDED  graveyard: No green card in this pool answers a graveyard. Tormod's Crypt ({0}, 'Exile target player's graveyard') is colourless and boards in against the cube's 45 graveyard cards; maindecking it would spend a slot that is blank against every deck without a graveyard theme.
```

- No WARN flags were raised by the structural gate on the final list — curve, assembly, goldfish and coverage all PASS. The slot-band deviations are recorded under slot_allocation, which the gate does not evaluate.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands ARE the win condition: Dark Depths reads '{3}: Remove an ice counter', so every land past the sixth is another fraction of an activation, and under Gauntlet of Power each surplus basic Forest is worth two. Nature's Lore x2 additionally convert a spell into an extra land on the battlefield, Mind Stone x2 sacrifice for a card ('{1}, {T}, Sacrifice this artifact: Draw a card'), and Emerald Charm x2 can 'Untap target permanent' to squeeze one more activation out of a board that is already deployed. |
| screw | mitigation | Eighteen of the 25 nonland cards cost two mana or less — the curve is 1:8, 2:10 — and every one of them is castable off a single Forest, because no card in the deck asks for more than one green pip. The two-land keeps are strong: Birds of Paradise on turn one, Wild Growth on turn two making the third mana, Nature's Lore x2 turning the second land drop into a third, and Fa'adiyah Seer x2 ('Draw a card and reveal it. If it isn't a land card, discard it') digging specifically for lands. Goldfish sim: 3 lands by turn 3 in 84% of hands, keepable 84%. |
| decapitation | accepted | There is exactly one Dark Depths and nothing in green recurs a land from exile. If it is exiled the deck's real win condition is gone and it is left attacking with Call of the Herd's four 3/3 tokens, which is a clock but not a competitive one. Mitigating would mean maindecking a second finisher — Kamahl, Fist of Krosa ('{2}{G}{G}{G}: Creatures you control get +3/+3 and gain trample') is the pool's candidate — and the rare/mythic cap of 5 is fully spent on Dark Depths, Exploration, Birds of Paradise, Gauntlet of Power and Sylvan Library, every one of which advances the primary plan. Buying a Plan B means giving up either the doubler, the acceleration or the digging that makes Plan A work. The partial defence that IS taken: Dark Depths is a land, so it dodges all creature removal, and only 1 of the 271 cube cards destroys a land. |
| gas-out | mitigation | The engine is mana, not cards: once Dark Depths is on the battlefield the '{3}' activation is a sink that works from a completely empty hand, and eight Forests under Gauntlet of Power is five activations a turn with no cards at all. The refuel that exists is repeatable rather than one-shot: Sylvan Library draws two extra every draw step, Fa'adiyah Seer x2 draw one per turn each, Mind Stone x2 sacrifice for a card, and Call of the Herd x2 each cast twice via 'Flashback {3}{G}'. |
| raced | mitigation | Unlike the two blue builds this one has real bodies: Werebear x2 (4/4 at Threshold), Call of the Herd x2 (four 3/3s across two cards), Birds of Paradise, Fa'adiyah Seer x2, Krosan Restorer x2 and Elvish Aberration x2 (4/5) are 9 creature cards in 40, plus Lull ('Prevent all combat damage that would be dealt this turn') to buy the exact turn the plan needs. The honest qualifier: 5 of those 9 have toughness 2 or less before Threshold, so the early blocking is thin. The sideboard is where that is paid: Giant Spider x2 (reach), Sandstorm x2, Icy Manipulator and a second Lull are 6 of the 10 sideboard cards. |
| disruption-fizzle | mitigation | This is the mode mono-green handles BEST of the three builds, and the reason is mechanical rather than defensive: Dark Depths' '{3}: Remove an ice counter' is an activated ability, and 0 of the 276 cards in this pool counter an activated ability - all five counterspells read 'Counter target spell'. The absence of counterspells in green therefore costs nothing here, because there is nothing on the stack to protect. Removed counters persist as board state, so the thirty mana is paid in installments across turns six to nine and interaction on any one of them costs one activation, not the plan. THE LIMIT OF THAT CLAIM, stated rather than glossed: 5 of the 271 cube cards reset the whole installment by moving Dark Depths itself - Recoil and Stand // Deliver ('Return target permanent to its owner's hand'), Umbilicus, Confiscate ('You control enchanted permanent') and Legacy Weapon ('Exile target permanent'). Bouncing Dark Depths after eight activations discards 24 mana, not one activation, and this deck has zero protection against that. What IS genuinely mitigated is the mana: it is deliberately spread across a land base (14), an Aura (2), artifacts (3) and creatures (9), so no single sweeper or artifact answer switches the clock off. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| High Tide | 'whenever a player taps an Island for mana' - this deck plays zero Islands, so 0 of its 17 land slots would trigger it. Blue-only anyway. |
| Turnabout | 'untap all tapped permanents of that type' is the pool's biggest mana burst, but it costs {2}{U}{U} and this build is mono-green. |
| Peregrine Drake | 'untap up to five lands' - the second biggest untapper in the pool, and again mono-blue only. |
| Frantic Search | Free untap plus two cards deep; {2}{U}, unavailable here. Green's untap effects are Krosan Restorer and Emerald Charm and that is all. |
| Counterspell | Green has no counterspell in this pool. The deck cannot protect its assembly on the stack at all - it defends the board instead. |
| Helm of Awakening | 'Spells cost {1} less to cast' - Dark Depths' '{3}: Remove an ice counter' is an activated ability, so 0 of the 30 mana is discounted. |
| Worldly Tutor | 'Search your library for a creature card' - it cannot find Dark Depths, which is a land, and a rare slot is worth more on Exploration or Gauntlet of Power. |
| Squirrel Nest | 'Enchanted land has {T}: Create a 1/1 green Squirrel' - it makes blockers but it also asks a land to tap for a token instead of for mana, which is the exact resource the deck is hoarding. |
| Jolrael, Mwonvuli Recluse | 'Whenever you draw your SECOND card each turn' - this deck's only repeatable draw is Fa'adiyah Seer, so the trigger is live on few turns, and it costs a capped rare slot. |
| Forgotten Ancient | +1/+1 counters do nothing for a deck whose threat is a token that is already 20/20. |
| Saproling Symbiosis | 'a 1/1 green Saproling for each creature you control' - this list runs mana dorks and walls, so the count it multiplies is small. |
| Deadwood Treefolk | Vanishing 3 recursion of creatures; the creatures here are dorks and walls whose recursion does not advance the 30-mana clock. |
| Gamekeeper | 'reveal cards from the top of your library until you reveal a creature card' - the creature suite is mana dorks, so the payoff is a Birds of Paradise. |
| Stonewood Invoker | '{7}{G}: gets +5/+5' - eight mana is two and two-thirds ice counters. |
| Kavu Primarch | A vanilla body with Kicker {4}; the kicker mana is better spent on counters. |
| Penumbra Bobcat | A 2/2 that leaves a 2/1; the deck wants blockers that survive, not trades. |
| Seton's Desire | An Aura; this deck has no creature worth enchanting. |
| Wild Dogs | 'the player with the most life gains control of this creature' - a deck that gains no life hands it over. |
| Nantuko Monastery | 'Threshold - {G}{W}' requires white, which this deck cannot pay; its '{T}: Add {C}' is strictly worse than a Forest. |
| Urza's Blueprints | '{T}: Draw a card' with 'Echo {6}' - twelve mana across two turns is four ice counters. |
| Triskelion | {6} for three pings; the mana buys two ice counters instead. |
| Jester's Cap | 'Search target player's library for three cards and exile them' answers a specific card, not a clock. |
| Damping Sphere | 'If a land is tapped for two or more mana, it produces {C} instead' - it would shut off this deck's own Wild Growth and Gauntlet of Power. |
| Umbilicus | 'return a permanent they control to its owner's hand' is symmetric and would bounce our own lands. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 14 recommended  [PASS]
Avg CMC:     2.28   Ramp cards: 16   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -2.96 adj [MV 2.28 vs 2.5, 16 accel, scaled N/60]  ->  14 lands  (P(2-4 in 7) = 0.753)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod  93.3%  gap  +6.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a deck size: 40 == 40
[PASS] 1b sideboard size: 10 == 10
[PASS] 2 exact-name membership: missing=[]
[PASS] 3 copy limits: violations=[]
[PASS] 4 colour usability (best_mode): unusable=[] | usable_as={'Crop Rotation': 'cast', "Fa'adiyah Seer": 'cast', 'Sylvan Library': 'cast', "Nature's Lore": 'cast', 'Wild Growth': 'cast', 'Exploration': 'cast', 'Birds of Paradise': 'cast', 'Werebear': 'cast', 'Krosan Restorer': 'cast', 'Mind Stone': 'cast', 'Gauntlet of Power': 'cast', 'Emerald Charm': 'cast', 'Lull': 'cast', 'Call of the Herd': 'cast', 'Elvish Aberration': 'cast', "Tormod's Crypt": 'cast', 'Break Asunder': 'cast', 'Sandstorm': 'cast', 'Giant Spider': 'cast', 'Icy Manipulator': 'cast'}
[PASS] 5 splash cap: over=[]
[PASS] 6 rare/mythic cap (user rule, <=5): 5 rare/mythic cards: Birds of Paradise, Dark Depths, Exploration, Gauntlet of Power, Sylvan Library
```
