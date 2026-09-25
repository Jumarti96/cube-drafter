---
deck_name: "br-shadow-urchin"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BR"
format: "40-card"
built_at: "2026-08-10T03:44:09Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x10  Swamp
x4   Mountain
x2   Geothermal Bog  dual; enters tapped
x1   Blood Crypt     dual; untapped for 2 life, else tapped
```

### CREATURES (15)

```
CMC  Card                                               Qty  Color  Role            Rar
  1  Dawnhand Dissident                                 x1   B      Engine/Outlet   R
  2  Gristle Glutton                                    x2   R      Engine/Outlet   C
  3  Chaos Spewer                                       x2   BR     Payload/Payoff  C
  3  Grub, Storied Matriarch // Grub, Notorious Auntie  x1   C      Payload/Payoff  R
  3  Heirloom Auntie                                    x2   B      Payload/Payoff  C
  3  Retched Wretch                                     x2   B      Payload/Payoff  U
  3  Shadow Urchin                                      x1   BR     Payload/Payoff  R
  4  Gutsplitter Gang                                   x2   B      Payload/Payoff  U
  5  Blighted Blackthorn                                x2   B      Payload/Payoff  C
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                  Qty  Color  Role                    Rar
  2  Bogslither's Embrace  x2   B      Interaction/Disruption  C
  2  Nameless Inversion    x1   B      Interaction/Disruption  U
  2  Sear                  x2   R      Interaction/Disruption  U
  3  Burning Curiosity     x1   R      Engine/Outlet           C
```

### OTHER SPELLS (2)

```
CMC  Card              Qty  Color  Role            Rar
  3  Boggart Mischief  x2   B      Payload/Payoff  U
```

## SIDEBOARD (10)

```
Card               Qty  Color  Role / When to board in                                                                                                                                                                                                                                                                                                                                                                                                                                                          Rar
Giantfall          x1   R      vs artifact decks (11 artifacts, 4.2% density); mode 1 fights with Chaos Spewer's 5 power otherwise                                                                                                                                                                                                                                                                                                                                                                              U
Blight Rot         x1   B      vs single large threats — instant-speed four -1/-1 counters, and it also feeds Shadow Urchin if aimed at our own dying body                                                                                                                                                                                                                                                                                                                                                      C
Taster of Wares    x1   B      vs control and combo — 'target opponent reveals X cards from their hand, where X is the number of Goblins you CONTROL'. X counts battlefield Goblins, not deck cards: on a developed board X is typically 2-3, drawn from 11 Goblin creature cards plus up to 4 Boggart Mischief tokens.                                                                                                                                                                                         R
Darkness Descends  x2   B      vs wide token boards — 'Put two -1/-1 counters on each creature'; our 3/7 and 5/4 bodies survive what 1/1s do not                                                                                                                                                                                                                                                                                                                                                                U
Feed the Flames    x1   R      vs decks with a single huge creature — '5 damage to target creature. If that creature would die this turn, exile it instead' answers recursion                                                                                                                                                                                                                                                                                                                                   C
Nightmare Sower    x2   B      vs evasive/racing decks (evasion density 15.8%, 41 cards) — a flying lifelink blocker. Its trigger reads 'Whenever you cast a spell during an opponent's turn, put a -1/-1 counter on up to one target creature' — that is NOT blight (the counter may go on an opponent's creature, so it does not reliably arm Shadow Urchin), and only 3 of 23 mainboard nonland cards are instants (Nameless Inversion x1, Sear x2); Blight Rot adds a 4th only when it is also boarded in.  U
Rooftop Percher    x2   C      vs graveyard decks — the cube's LARGEST threat class (39 cards, 15.0% density). 'When this creature enters, exile up to two target cards from graveyards. You gain 3 life.' Colourless so always castable; changeling makes the 3/3 flier a Goblin for Boggart Mischief, and the 3 life partly answers the conceded raced mode                                                                                                                                                   C
```

## ANALYSIS

### DECK IDENTITY

A black-primary, red-secondary blight midrange deck that treats -1/-1 counters as a currency rather than a drawback. Shadow Urchin turns every blighted body that dies into cards off the top of the library; Blighted Blackthorn draws a card every time it enters or attacks by paying blight 2; Heirloom Auntie enters as a 2/2 and walks itself back up to 4/4 while surveilling on every creature death. Gutsplitter Gang is the deck's mana-free counter faucet — a 6/6 for four whose 'blight 2 or lose 3 life' clause is pure profit here — and it is what lets Blighted Blackthorn draw without eating itself. Grub recurs a Goblin card from the graveyard every time it flips back to its front face, and its back face copies a blighted creature each attack. The removal suite is cheap and unconditional (Bogslither's Embrace exiles anything, Sear kills for two), and the deck wins around turn eight by simply having more bodies and more cards than the opponent.

### THE COUNTER LOOP, STATED AS A CHAIN

The deck's card advantage is not bolted on — it is the blight mechanic read as an economy:

1. **Gutsplitter Gang** — "At the beginning of your first main phase, you may blight 2. If you don't, you lose 3 life." A 6/6 for four that *pays you* to put two counters somewhere, every turn, untapped, for no mana.
2. Those counters go onto **Retched Wretch** ("if it had a -1/-1 counter on it, return it to the battlefield") or onto the Gang itself (6/6 absorbs three rounds).
3. When that body dies, **Shadow Urchin** fires: "exile that many cards from the top of your library. Until your next end step, you may play those cards."
4. **Boggart Mischief** drains for each Goblin that died on the way — and **11 of the 15 creature cards** in this mainboard are Goblins by type line.
5. **Grub** buys the dead Goblin back: "Whenever this creature enters **or transforms into** Grub, Storied Matriarch, return up to one target Goblin card from your graveyard to your hand." Because it triggers on *transforming*, paying `{R}` one turn and `{B}` the next recurs a Goblin every two turns, indefinitely.

### THE ONE CARD THAT FIGHTS ITSELF

Blighted Blackthorn is the deck's best card and its most misread one. "Whenever this creature enters or attacks, you may blight 2. If you do, you draw a card and lose 1 life."

The draw on attack requires **attacking**, so in any given turn a Blackthorn either walls the ground with its 7 toughness or draws — never both. And if it blights itself it goes 3/7 → 1/5 → -1/3 and dies on the fourth activation, capping self-fuelled draws at three.

That is precisely why Gutsplitter Gang was added during the grill. With a 6/6 on the battlefield, Blackthorn's blight 2 lands on the Gang instead, so Blackthorn keeps its 7 toughness *and* draws. The two cards are not independently good here; they are good because they solve each other.

### MANA: THE DFC THE AUDIT CANNOT SEE

| | Black | Red |
|---|---|---|
| Pips counted by the audit | 14 | 5 |
| True pips (Grub's front face is `{2}{B}`; the pool stores `mana_cost: null` for double-faced cards) | 15 | 5 |
| Sources of 17 lands | 13 (76.5%) | 7 (41.2%) |

Red is deliberately over-supplied against a 26% pip demand for one reason: both red spells (Gristle Glutton `{1}{R}`, Sear `{1}{R}`) are turn-2 plays, and a missing Mountain on turn 2 costs a whole turn in a deck whose first play is turn 2 in 84% of goldfish hands. There is also a hidden ongoing cost the audit does not model — Grub's transform cycle needs `{R}` one turn and `{B}` the next.

### WHAT THIS DECK LOSES TO

A genuinely fast draw, and it says so in the failure-mode table rather than hiding it. First play is turn 1 in only 20% of hands and 15 of 23 nonland cards cost 3 or more. The sideboard buys the matchup back with Nightmare Sower ×2 (flying lifelink), Rooftop Percher ×2 (3/3 flier, gain 3 life) and Blight Rot ×1 — but the maindeck answer is simply a turn-4 6/6.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:1  2:7  3:11  4:2  5:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.4: Boggart Mischief@0.85, Boggart Mischief@0.85, Grub, Storied Matriarch // Grub, Notorious Auntie@0.7) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 10.55: Chaos Spewer@0.5, Chaos Spewer@0.5, Bogslither's Embrace@0.85, Bogslither's Embrace@0.85, Burning Curiosity@0.85) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 20%  T2 84%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: This mainboard has no sweeper. B/R offers exactly two in the whole cube: Soul Immolation and Darkness Descends. Soul Immolation is genuinely castable here — X is bounded by the greatest toughness among creatures you control, and Chaos Spewer x2 (5/4) and Heirloom Auntie x2 (4/4) are base toughness 4, so X=4 without needing Blighted Blackthorn to survive — but it costs {3}{R}{R} off only 7 red sources in a 75%-black deck, which is the specific reason it is not run. Darkness Descends at {2}{B}{B} kills this deck's own Boggart Mischief tokens and every already-blighted body. Mitigating maindeck therefore costs either a card-advantage engine or a castable red double-pip on a black mana base; Darkness Descends x2 covers the class from the sideboard instead.
  OK        single_large_threat: Bogslither's Embrace, Sear, Nameless Inversion
  CONCEDED  noncreature_permanents: B/R in this cube has no enchantment answer at any rarity — all four enchantment-removal cards in the pool are G/UG/W/W — and only sideboard artifact removal (Giantfall x1, against a threat_profile artifact density of just 4.2%). Mitigating would mean splashing white or green through taplands, which a deck already running 2 Geothermal Bog cannot absorb.
  CONCEDED  stack: This cube's only counterspells are blue (Wild Unraveling, Glen Elendra Guardian). Mitigating would mean abandoning the B/R pipeline entirely. The substitute is Taster of Wares from the sideboard, which strips a card from hand before it can be cast.
  OK        graveyard: Dawnhand Dissident
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two untimed tap sinks turn a spare land turn into cards with no mana cost at all: Gristle Glutton x2 ('{T}, Blight 1: Discard a card. If you do, draw a card') and Dawnhand Dissident x1 ('{T}, Blight 1: Surveil 1'). Qualified honestly: those are a 1/3 and a 1/2, so self-targeting gives them 2 and 1 activations before they die — the sinks are only repeatable while another body exists to take the counter, which is why Gutsplitter Gang x2 (6/6) and Chaos Spewer x2 (5/4) matter here. Grub also absorbs surplus mana every turn, paying {R} then {B} to flip and return a Goblin card from the graveyard. |
| screw | mitigation | 8 of 23 nonland cards cost 2 or less, and 17 lands is the tool-computed target for avg MV 2.87. Goldfish sim over 1000 hands: 87% keepable and 88% have 3 lands by turn 3. Two-land hands are led by Dawnhand Dissident at {B} and Gristle Glutton and Sear at {1}{R}, all live on a stalled mana base. |
| decapitation | mitigation | Shadow Urchin is a 1-of and will be answered, so the refuel is deliberately not routed through it alone: Blighted Blackthorn x2 draws off its own enter and attack triggers, Burning Curiosity x1 exiles three playable cards, Grub returns a Goblin card from the graveyard every time it transforms to its front face, and Heirloom Auntie x2 surveils on every death. Four separate card-advantage sources across six copies. |
| gas-out | mitigation | Recounted after the approval round: 5 copies of genuine card advantage — Blighted Blackthorn x2 (draw per enter and per attack), Burning Curiosity x1 (exile three, playable), Shadow Urchin x1 (exile N playable when a countered creature dies), Grub x1 (repeatable Goblin recursion on transform). Retched Wretch x2 is deliberately NOT counted here — it returns bodies, not cards. Add 3 copies of selection (Gristle Glutton x2, Dawnhand Dissident x1) and Heirloom Auntie x2 surveilling on every creature death, and 10 of the 23 nonland cards replace themselves or better. |
| raced | accepted | This deck loses to a genuinely fast draw and cannot fix that without ceasing to be itself. Its first play is turn 2 in 84% of goldfish hands and turn 1 in only 20%, and 15 of 23 nonland cards cost 3 or more. Mitigating maindeck would mean cutting Blighted Blackthorn (MV 5) or Gutsplitter Gang (MV 4) — the two cards that make the turn-8 thesis work — for cheap interaction, which converts this into the aggro build of the same archetype rather than the grind build the judge selected. The cost is paid explicitly: Nightmare Sower x2 (flying lifelink blocker), Rooftop Percher x2 (3/3 flier, gain 3 life) and Blight Rot x1 come in from the sideboard against the fastest decks, and a turn-4 Gutsplitter Gang is a 6/6 wall. |
| disruption-fizzle | mitigation | There is no critical turn to disrupt — the deck has no assembly step and no combo; no card in the 40 references another by name. Its most interactable line is a Blighted Blackthorn attack trigger, and a removal spell in response still leaves the blight already paid and Shadow Urchin's death trigger live. If Boggart Mischief's ETB is answered before the tokens resolve, the enchantment's Goblin-death drain half remains on the battlefield permanently. Grub is the one card that can be caught mid-cycle: killed on the back face, it never returns to the front to recur a Goblin. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Lasting Tarfire | 'At the beginning of each end step, if you put a counter on a creature this turn, this enchantment deals 2 damage to each opponent.' The enabler base is genuinely there — 9 of 23 nonland cards place a counter repeatedly without spending a card (Gristle Glutton x2, Dawnhand Dissident x1, Gutsplitter Gang x2, plus the attack-gated Blighted Blackthorn x2, Shadow Urchin x1 and Grub's back face). The exclusion is pure slot arithmetic: 23 nonland slots, 15 of them creature bodies, a curve already peaking at MV 3 with 11 cards, and interaction at 5 of 23 = 21.7%, near the 20% band floor. It is the first card to add if you cut a body. It is also the payoff the separate B/R aggro build of this archetype is built around. |
| Moonglove Extractor | 'Whenever this creature attacks, you draw a card and lose 1 life.' Cut by the shape judge as a weak keystone: it has zero counter interaction and would read identically in a deck with no blight theme, so it does not satisfy the thesis clause 'card advantage that keys off those same counters'. Its two slots went to Burning Curiosity and Dawnhand Dissident, which draw BY paying blight. |
| Graveshifter | 'Changeling. When this creature enters, you may return target creature card from your graveyard to your hand.' A 4-mana 2/2 whose return goes to HAND, costing another full turn of mana before the body can carry a counter — it was self-discounted to 0.7 in the assembly check. Replaced 1-for-1 by Gutsplitter Gang at the same MV, the same single black pip and the same Goblin count, but a 6/6 body and two free counters every turn. |
| Twilight Diviner | 'Whenever one or more other creatures you control enter, if they entered or were CAST FROM A GRAVEYARD, create a token that's a copy of one of them.' The trigger has only 2 enablers in this list (Retched Wretch x2 returning to the battlefield); Graveshifter and Unbury return to hand, which does not qualify. A 3-mana 3/3 with a mostly-dead ability. The rare slot went to Grub, whose recursion has 12 targets. |
| Sizzling Changeling | 'Changeling. When this creature dies, exile the top card of your library. Until the end of your next turn, you may play that card.' A second death-to-cards converter that needs no counter at all, on a Goblin body. Excluded on slots — the MV-2 band already holds 7 of 23 cards and the deck's cheap slots are removal. |
| Bile-Vial Boggart | 'When this creature dies, put a -1/-1 counter on up to one target creature.' The list runs exactly 1 card at MV 1 (Dawnhand Dissident), and this would be a Goblin body that also gives Gristle Glutton and Dawnhand Dissident somewhere to dump counters instead of eating themselves. Excluded because at 40 cards its 1/1 body does not survive to block in a turn-8 deck; Gutsplitter Gang solves the same counter-dumping problem on a 6/6. |
| Cinder Strike | Considered as a 1-for-1 swap against Sear: same 4 damage for one less mana, and it PAYS the blight rather than ignoring it. Rejected on speed — Sear is an Instant and Cinder Strike is a Sorcery, and the mainboard is already down to 3 instants of 23 (Nameless Inversion x1, Sear x2). A midrange deck that cannot interact on the opponent's turn loses the tempo it is buying with its bodies. |
| Sting-Slinger | '{1}{R}, {T}, Blight 1: This creature deals 2 damage to each opponent.' The deck has 0 of 23 cards that damage the opponent outside combat and it concedes the raced mode, so this is a real gap. Excluded on the red mana: it wants {1}{R} every activation off 7 red sources in a 74%-black deck, and the MV-3 band already holds 11 of 23 cards. |
| Soul Immolation | 'blight X, X can't be greater than the greatest toughness among creatures you control ... deals X damage to each opponent and each creature they control.' X is 4 here off Chaos Spewer (5/4) or Heirloom Auntie (4/4) with no help needed, and it is one of only 2 sweepers in the whole 277-card cube — it would answer the conceded wide_boards class outright. Excluded on castability: {3}{R}{R} off 7 red sources in a deck whose black demand is 74%. |
| Moonshadow | 'Enters with six -1/-1 counters ... remove one whenever permanent cards are put into your graveyard from anywhere.' A 1-mana 7/7 in the abstract; in this list the repeatable permanent-to-graveyard sources are creature deaths plus Gristle Glutton's discard, so it spends the early turns as a 1/1 in a deck whose plan is to have the bigger board on turn 4. |
| Creakwood Safewright | 5/5 for {1}{B}, the best rate in the whole blight cluster, but it sheds only 'if there is an Elf card in your graveyard'. This mainboard runs exactly 1 Elf card (Dawnhand Dissident), so it is a permanent 2/2 unless that one card is milled. |
| Gnarlbark Elm | '{2}{B}, Remove two counters from this creature: Target creature gets -2/-2 until end of turn.' Rejected by the shape judge's reasoning at the build level: it SPENDS the counters that Shadow Urchin and Blighted Blackthorn are trying to bank, so its toolbox utility competes with the kill mechanism rather than funding it. |
| Dose of Dawnglow / Unbury | Reanimation and regrowth at 5 and 2 mana. Excluded because the deck's recursion is already on bodies that do it for free — Retched Wretch x2 returns itself and Grub returns a Goblin card every transform cycle — so a dedicated reanimation spell is a third copy of an effect the deck gets attached to creatures. |
| Nameless Inversion (2nd copy) | Kept at 1 rather than 2. '+3/-3 and loses all creature types' answers toughness 3 or less; the cube's blight bodies are mostly toughness 4+ (Chaos Spewer 5/4, Blighted Blackthorn 3/7, Encumbered Reejerey 5/4), so the second copy lost its slot to Grub. |
| Rooftop Percher (sideboard, contrast with the aggro build) | INCLUDED here at 2 copies, and deliberately so: it costs {5}, which the B/R aggro build of this same archetype could not afford on a goldfish-6 curve, but this deck tops out at MV 5 with 17 lands and a turn-8 thesis. It is the only graveyard-hate body in the whole B/R + colourless pool besides Dawnhand Dissident, against the cube's largest threat class (39 cards, 15.0%), and changeling makes it a Goblin for Boggart Mischief. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.33 adj [MV 2.87 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  73.7%  prod  76.5%  gap  -2.8pp  [OK]
  R  demand  26.3%  prod  41.2%  gap -14.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] mainboard_count: 40 == 40
[PASS] sideboard_count: 10 == 10
[PASS] exact_name_membership: all names found in working pool
[PASS] copy_limits: all within card_pool_rules (basics exempt)
[PASS] rare_mythic_cap_5: 5 rare/mythic across MB+SB: ['Blood Crypt', 'Dawnhand Dissident', 'Grub, Storied Matriarch // Grub, Notorious Auntie', 'Shadow Urchin', 'Taster of Wares']
[PASS] colour_usability: all nonland cards usable in ['B', 'R']+[]; off-normal modes: {'Shadow Urchin': 'cast', 'Blighted Blackthorn': 'cast', 'Heirloom Auntie': 'cast', 'Retched Wretch': 'cast', 'Chaos Spewer': 'cast', 'Boggart Mischief': 'cast', 'Gutsplitter Gang': 'cast', 'Grub, Storied Matriarch // Grub, Notorious Auntie': 'cast', 'Gristle Glutton': 'cast', 'Dawnhand Dissident': 'cast', 'Burning Curiosity': 'cast', "Bogslither's Embrace": 'cast', 'Nameless Inversion': 'cast', 'Sear': 'cast', 'Darkness Descends': 'cast', 'Blight Rot': 'cast', 'Giantfall': 'cast', 'Nightmare Sower': 'cast', 'Taster of Wares': 'cast', 'Feed the Flames': 'cast', 'Rooftop Percher': 'cast'}
[PASS] splash_cap: splash cards used: [] (splash_colors=[])
```
