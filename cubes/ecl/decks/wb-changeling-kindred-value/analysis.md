---
deck_name: "wb-changeling-kindred-value"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WB"
format: "40-card"
built_at: "2026-08-11T04:11:33Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x8   Plains                     basic
  x5   Swamp                      basic
  x2   Evolving Wilds             fetches a basic, enters tapped
  x2   Sunlit Marsh               BW dual, enters tapped
```

### CREATURES (16)

```
CMC  Card                       Qty  Col  Role                               Rar
  1  Kinsbaile Aspirant         x2   W    payoff                             U
  2  Creakwood Safewright       x2   B    threat                             U
  2  Kinscaer Sentry            x1   W    payoff                             R
  3  Flock Impostor             x2   W    enabler                            U
  3  Prideful Feastling         x2   WB   enabler                            C
  3  Reluctant Dounguard        x2   W    threat                             C
  4  Champion of the Clachan    x1   W    payoff                             R
  4  Champion of the Weird      x1   B    threat                             R
  4  Gallant Fowlknight         x1   W    payoff                             C
  4  Graveshifter               x2   B    enabler                            U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                       Qty  Col  Role                               Rar
  1  Requiting Hex              x1   B    interaction                        U
  2  Nameless Inversion         x2   B    interaction                        U
  3  Crib Swap                  x2   W    interaction                        U
```

### OTHER SPELLS (2)

```
CMC  Card                       Qty  Col  Role                               Rar
  2  Stalactite Dagger          x1   C    enabler                            C
  3  Clachan Festival           x1   W    payoff                             U
```

## SIDEBOARD (10)

```
Card                       Qty  Col  Rar  Role / When to board in
Bogslither's Embrace       x2   B    C   vs a single large threat that must be exiled rather than shrunk (Curious Colossus, Sunderflock, the Champions cycle)
Keep Out                   x1   W    C   vs the cube's 41-card evasion suite (15.8% density) - 'deals 4 damage to target tapped creature' kills an attacking flier at instant speed, and its second mode 'Destroy target enchantment' answers the 21-enchantment class
Pyrrhic Strike             x2   W    U   vs artifact (11) or enchantment (21) decks; with blight 2 paid it answers a noncreature permanent AND a creature of MV 3+ in one card
Liminal Hold               x2   W    C   vs planeswalkers and any nonland permanent this deck otherwise cannot touch (Oko, Ajani, Kinbinding, Sapling Nursery)
Rooftop Percher            x2   C    C   vs graveyard/recursion decks (39 graveyard-interaction cards in this cube, 15% density) - a 3/3 flier that exiles two graveyard cards on entry
Winnowing                  x1   W    R   vs type-DIVERSE go-wide boards only (token swarms, multi-tribe piles). Choosing my own changeling means I sacrifice nothing; but against a mono-tribe opponent their board shares a type with itself and this whiffs - do NOT board it in against dedicated Kithkin/Merfolk/Elf/Goblin decks
```

## ANALYSIS

### DECK IDENTITY

A W/B creature deck whose fuel is that every changeling card is EVERY creature type at once. That single fact does three jobs here: it makes the 'behold' additional costs on Kinsbaile Aspirant, Champion of the Clachan and Champion of the Weird free (any changeling card revealed from hand or chosen on board pays a Kithkin OR Goblin behold), it makes the Kithkin-specific payoffs board-wide (Champion of the Clachan's 'Other Kithkin you control get +1/+1' and Gallant Fowlknight's 'Kithkin creatures you control also gain first strike' each reach 12 of the 15 other creature cards in this list), and it turns Nameless Inversion and Crib Swap - both printed as Kindred Instant - Shapeshifter with changeling - into removal spells that simultaneously serve as behold fodder from hand and as Elf cards in the graveyard for Creakwood Safewright. The deck curves out with bodies that are above rate because someone else paid their cost, then closes with an anthemed, first-striking board around turn 6.

### WHY THIS DECK EXISTS: ONE WORD DOING FOUR JOBS

`Changeling (This card is every creature type.)` is not a tribal keyword here — it is a universal key. Ten of the 23 nonland cards in this list carry it, and each of those ten simultaneously:

1. **Pays any behold cost.** Behold reads *"choose a X you control **or reveal an X card from your hand**"*. A changeling card in hand is a Kithkin, a Goblin, an Elf and a Merfolk at once, so it pays Kinsbaile Aspirant's Kithkin behold and Champion of the Weird's Goblin behold from the same card. Kinsbaile Aspirant's behold is fed by **17 of the 23 nonland cards** (10 changeling cards + 7 printed Kithkin: Kinsbaile Aspirant x2, Kinscaer Sentry, Reluctant Dounguard x2, Gallant Fowlknight, Champion of the Clachan).
2. **Receives every Kithkin payoff.** Champion of the Clachan's *"Other Kithkin you control get +1/+1"* reaches **12 of the 15 other creature cards**; Gallant Fowlknight's *"Kithkin creatures you control also gain first strike"* reaches **13 of the 16**. The only misses are Creakwood Safewright x2 (Elf Warrior) and Champion of the Weird (Goblin Berserker).
3. **Is an Elf card in the graveyard.** Creakwood Safewright sheds a -1/-1 counter each end step *"if there is an Elf card in your graveyard"* — **12 of the 23 nonland cards** can be that Elf card, and Nameless Inversion and Crib Swap put themselves there the moment you use them.
4. **Is still a card that does its job.** Nameless Inversion and Crib Swap are printed `Kindred Instant — Shapeshifter`. They are removal spells that happen to be changelings, not changelings that happen to be blank.

### THE CENTRAL TRICK: REMOVAL THAT PAYS ITS OWN TAXES

The reason W/B is the right home for this archetype rather than the deepest-changeling colours is that W/B is the only pair where the *interaction* is also the changeling density. Four of the five interaction slots — Nameless Inversion x2 and Crib Swap x2 — are Shapeshifter cards. Holding them up on turn 3 is simultaneously holding up removal AND holding up behold fodder for a turn-4 Champion. That is why the interaction slot sits at 21.7% (inside the midrange 20–30% band) without the deck feeling light on answers: those slots are counted once but work twice.

### WHAT THE BRIEF GOT WRONG (ORACLE-CHECKED)

| Claim | What the oracle text actually says |
|---|---|
| "18 changelings" | **16** cards in the cube are themselves changelings. Stalactite Dagger and Personify only *create* changeling tokens — they cannot be revealed to pay behold and are not Shapeshifter-typed. |
| "Winnowing is a one-sided wrath" | Half true, and it is why Winnowing is in the sideboard rather than the maindeck. Choosing my own changeling means every creature I control shares a type with it, so I sacrifice nothing. But this cube's opponents are *tribal* — against a mono-Kithkin or mono-Merfolk board their chosen creature shares a type with the rest of their board and the card does nothing. Board it in against type-diverse piles only. |
| "Eclipsed Realms / Dawn-Blessed Pennant" | Neither can name Shapeshifter. Their list is *"Elemental, Elf, Faerie, Giant, Goblin, Kithkin, Merfolk, or Treefolk"*. They still work with changelings, but they fix and trigger only for the changeling half of the deck — which is why Eclipsed Realms was cut from a manabase carrying 12 W pips and 8 B pips. |

### THE CURVE, TURN BY TURN

| Turn | Play | Why it is above rate |
|---|---|---|
| 1 | Kinsbaile Aspirant, revealing a changeling from hand | A {W} 2/1 instead of a 3-mana 2/1 — 89% of opening sevens contain one of the 10 changeling cards |
| 2 | Creakwood Safewright | A {1}{B} 5/5 that starts as a 2/2 and grows every end step off any changeling in the yard |
| 3 | Reluctant Dounguard | A 4/4 for three; the next two creature ETBs strip its counters, and this deck plays 16 creature cards |
| 4 | Champion of the Clachan (flash) or Champion of the Weird | A 4/5 whole-board anthem, or a 5/5, for four — someone else paid the cost |
| 5–6 | Gallant Fowlknight, alpha strike | +1/+0 to everything and first strike on 13 of 16 creature cards |

### MANA: THE ONE REAL COMPROMISE

W/B has exactly **one free dual in the entire cube** — Sunlit Marsh, which enters tapped — plus a rare shockland the 5-rare cap cannot afford. The manabase is therefore 8 Plains, 5 Swamp, Sunlit Marsh x2 and Evolving Wilds x2, and it survives only because the deck is almost entirely single-pip: 12 W pips and 8 B pips across 23 nonland cards, with Prideful Feastling's {2}{W/B} hybrid payable by either. The mana audit lands at 58.8% W production against 60.0% demand. This is the price of the archetype's best changeling density, and it is paid honestly rather than papered over with a third colour.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:6  3:9  4:5
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.5: Champion of the Clachan@0.8, Kinscaer Sentry@0.7) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 13 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 46%  T2 88%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Gallant Fowlknight, Champion of the Clachan, Clachan Festival
  OK        single_large_threat: Crib Swap, Nameless Inversion, Requiting Hex
  CONCEDED  noncreature_permanents: All 6 mainboard interaction slots are creature answers: the cube's noncreature permanent density is low (11 artifacts = 4.2%, 21 enchantments = 8.1% of 277 cards) and the goldfish turn is 6, so Pyrrhic Strike x2 and Liminal Hold x2 sit in the sideboard instead of taxing the maindeck curve.
  CONCEDED  stack: No card with color identity within W/B in this pool counters a spell; this deck interacts only on the battlefield and accepts that a resolved spell must be answered after it lands.
  CONCEDED  graveyard: Rooftop Percher x2 is sideboarded rather than maindecked: at 5 mana it is above this build's curve, and maindecking it would cost a 3-drop threat slot in a list whose kill turn is 6.
```

- No WARN-tier flags were raised: curve and goldfish both returned PASS (curve 1:3 2:6 3:9 4:5; goldfish 86% keepable, 88% three-lands-by-turn-3, T3 play rate 98%).


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana has four sinks that need no extra cards: Clachan Festival's '{4}{W}: Create a 1/1 green and white Kithkin creature token' converts every excess land into an anthem-eligible body indefinitely; Stalactite Dagger's 'Equip {2}' re-attaches the +1/+1-and-all-creature-types buff every turn; Champion of the Clachan has Flash, so a land-heavy turn holds up a 4/5 instead of wasting mana; and Kinscaer Sentry's attack trigger deploys a creature card from hand for free. Evolving Wilds x2 also thins two lands out of the library. |
| screw | mitigation | 9 of the 23 nonland cards cost 1 or 2 mana (MV1: Kinsbaile Aspirant x2, Requiting Hex; MV2: Kinscaer Sentry, Creakwood Safewright x2, Stalactite Dagger, Nameless Inversion x2), so two-land hands deploy on curve. Creakwood Safewright specifically is a {1}{B} that grows into a 5/5 unaided. The goldfish check measured 86% keepable hands and 88% three-lands-by-turn-3 over 1000 hands. |
| decapitation | mitigation | Champion of the Clachan is the only anthem, but it is a multiplier rather than the plan: if it is answered on sight, Gallant Fowlknight still grants first strike to 12 of the 15 other creature cards, and the deck's bodies are already above rate without any anthem - Creakwood Safewright is a 5/5 for two mana, Reluctant Dounguard a 4/4 for three, Champion of the Weird a 5/5 for four. Champion of the Clachan also returns its exiled behold card when it leaves the battlefield, so answering it refunds a card. |
| gas-out | mitigation | Graveshifter x2 are the only cards tagged Cards: Net-Positive in this mainboard (2 of 23), so the deck does not plan to out-draw anyone; instead it converts hand to board by turn 5 and then generates board without cards. Three mechanisms do that on an empty hand: Clachan Festival's '{4}{W}: Create a 1/1 green and white Kithkin creature token' makes a fresh anthem-eligible attacker every turn from mana alone; Graveshifter's 'you may return target creature card from your graveyard to your hand' recurs the best creature already spent; and Kinscaer Sentry's 'put a creature card with mana value X or less from your hand onto the battlefield tapped and attacking' deploys the card Graveshifter returned without paying for it. Champion of the Weird's 'Pay 1 life, Blight 2: Target opponent blights 2' is a card-free repeatable ability but it is board attrition (two -1/-1 counters on a creature the opponent controls), NOT damage or life loss - it shrinks blockers rather than closing the game. |
| raced | mitigation | Against the cube's fast clocks the deck blocks profitably rather than racing: Prideful Feastling x2 is a 2/3 lifelink, Kinscaer Sentry is first strike + lifelink, Creakwood Safewright grows to a 5/5, Reluctant Dounguard to a 4/4, and Champion of the Clachan is a 4/5 that can be flashed in as a surprise blocker. Requiting Hex answers any creature of mana value 2 or less for one mana, which covers the cube's one- and two-drop aggro starts. |
| disruption-fizzle | mitigation | The critical turn is the alpha strike. Three things make it survive interaction on that turn: Champion of the Clachan has Flash, so the anthem is deployed at the opponent's end step where sorcery-speed removal cannot pre-empt it; Flock Impostor x2 has Flash plus 'return up to one other target creature you control to its owner's hand', which saves a targeted creature from removal in response and rebuys its ETB; and the kill is distributed rather than concentrated - Gallant Fowlknight's first strike reaches 13 of the 16 creature cards, so answering any single creature removes one attacker from a board of five or six, not the plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Gathering Stone | UNCOMMON, a tier below the includes. Naming Shapeshifter, 'Spells you cast of the chosen type cost {1} less' discounts only the 10 Shapeshifter-typed cards of the 23 nonland cards, and its upkeep dig reveals only those same 10. Four mana for zero board impact and a 10/23 hit rate does not fit a build whose kill turn is 6. The strongest single swap-in if the deck is retuned toward a slower value build. |
| Dawn-Blessed Pennant | UNCOMMON. Naming Kithkin its trigger fires on 13 of the 16 creature cards entering - a high count - but the payoff is 1 life per trigger, which does not advance a turn-6 combat kill. Note it cannot name Shapeshifter: its list is 'Elemental, Elf, Faerie, Giant, Goblin, Kithkin, Merfolk, or Treefolk'. |
| Boggart Mischief | UNCOMMON. 'Whenever a Goblin creature you control dies, each opponent loses 1 life and you gain 1 life' covers only the 6 changeling creature cards plus Champion of the Weird = 7 of the 16 creature cards, for 3 mana that adds nothing to the board beyond two 1/1s. |
| Eclipsed Realms | UNCOMMON land. Naming Kithkin it produces coloured mana only for the 10 changeling cards; the other 13 nonland cards see it as a colourless land in a deck with 12 W pips and 8 B pips. Would be correct in a build with more than 14 changeling cards. |
| Springleaf Drum | UNCOMMON. '{T}, Tap an untapped creature you control: Add one mana of any color' fixes off creature density, but tapping a creature fights the alpha-strike plan and the mana audit already returned PASS at 12 W / 9 B sources without it. |
| Protective Response | UNCOMMON. 'Convoke ~ Destroy target attacking or blocking creature' is efficient, but it was cut in Phase 9 for Clachan Festival: interaction was above the midrange floor at 6 of 23 and the deck needed another body-generator more than a fifth creature answer. |
| Shore Lurker | COMMON. A 3/3 flier with ETB surveil 1 - considered for the sideboard against the cube's 41-card evasion suite, but cut in Phase 9 because it is a body, not an answer; Keep Out's 'deals 4 damage to target tapped creature' actually kills an attacking flier. |
| Mudbutton Cursetosser | UNCOMMON. 'behold a Goblin or pay {2}' plus a death-trigger kill on a creature with power 2 or less. Raises Champion of the Weird's printed-Goblin feed from 10/22 to 11/22, but it is a Goblin Warlock rather than a Kithkin, so it subtracts from Champion of the Clachan's anthem (12/15 -> 12/16) and Gallant Fowlknight's first-strike count, and 'This creature can't block' fights the raced plan. |
| Dawnhand Eulogist | COMMON. 'mill three cards. Then if there is an Elf card in your graveyard, each opponent loses 2 life and you gain 2 life' composes with Creakwood Safewright, but that condition is already live off 12 of the 23 nonland cards, and a 4-mana 3/3 is below the rate of the 4-drops already here (4/5 anthem, 5/5, 3/4 team-pump). |
| Scarblade Scout | COMMON. A {1}{B} 2/2 lifelink whose ETB mills two, feeding Creakwood Safewright - but it is an Elf Scout, not a Kithkin, so it shrinks the denominator of both Kithkin payoffs. |
| Timid Shieldbearer | COMMON. A printed Kithkin 2/2 for two with '{4}{W}: Creatures you control get +1/+1 until end of turn'. MV1-2 already holds 9 of 23 nonland cards and Creakwood Safewright is a strictly larger two-drop (5/5 base) in the same slot. |
| Goldmeadow Nomad | COMMON. '{W}, Exile this card from your graveyard: Create a 1/1 green and white Kithkin creature token' is graveyard-resilient Kithkin fodder, but a 1/2 body does not attack into this cube's 2/1s and 4/4s and Kinsbaile Aspirant already fills the one-drop slot at 2 copies. |
| Bloodline Bidding | RARE. 'Convoke ~ Choose a creature type. Return all creature cards of the chosen type from your graveyard to the battlefield' is a genuine changeling payoff, but at 8 mana it needs a full board to convoke AND a stocked graveyard; this list has no self-mill, so the graveyard is only what removal put there. |
| Thoughtweft Imbuer | 'Whenever a creature you control attacks alone, it gets +X/+X where X is the number of Kithkin you control' - the Kithkin count is the whole board here, but 'attacks alone' is anti-synergy with a go-wide changeling board. |
| Boggart Prankster | 'Whenever you attack, target attacking Goblin you control gets +1/+0' - all changelings are Goblins, but a 1/3 body for {1}{B} giving +1/+0 to one creature is below the rate of the behold two-drops. |
| Gloom Ripper | RARE. ETB X = Elves I control + Elf cards in graveyard; with 12 changeling creatures X is real, but 5 mana for a 4/4 and a one-shot pump loses the rare slot to Champion of the Weird's 5/5-for-4. |
| Rhys, the Evermore | RARE. '{W},{T}: Remove any number of counters from target creature you control' is a strong engine with the blight creatures, but this build runs only 2 counter-creatures, so the ability is live on 2 of 23 nonland cards. |
| Twilight Diviner | RARE. Its copy trigger requires creatures that 'entered or were cast from a graveyard'; this list has no reanimation loop, so the trigger is near-dead. |
| Ajani, Outland Chaperone | MYTHIC. +1 makes a 1/1 Kithkin token per turn, but a 3-mana planeswalker that does not affect the board immediately is too slow for a competitive creature deck, and it costs a rare slot. |
| Kinbinding | RARE. 'Creatures you control get +X/+X where X is the number of creatures that entered this turn' - a real go-wide payoff, but 5 mana for a do-nothing-on-cast enchantment is the wrong end of this curve. |
| Eirdu, Carrier of Dawn // Isilu, Carrier of Twilight | MYTHIC. 'Creature spells you cast have convoke' is powerful, but at 5 MV it arrives after the board is already built, and its transforming face has no printed mana cost for the pip math. |
| Emptiness | MYTHIC. 6 MV Elemental Incarnation; the evoke mode {W/B}{W/B} gives a one-shot reanimate or -3/-3, which is a worse rare slot than a permanent 4-mana 5/5. |
| Curious Colossus | MYTHIC. 7 MV; the deck's curve tops at 6 with a convoked Winnowing. |
| Mirrormind Crown | RARE. Token-copy engine, but the deck makes at most a few 1/1 changeling tokens per game, and 4 mana + equip {2} is too slow. |
| Adept Watershaper | RARE. 'Other tapped creatures you control have indestructible' protects a convoking/attacking board, but it is a 3-mana 3/4 that does nothing on an empty board. |
| Gutsplitter Gang | 'At the beginning of your first main phase, you may blight 2. If you don't, you lose 3 life' - a 6/6 for 4 whose upkeep tax shrinks the changeling board this deck is trying to widen. |
| Encumbered Reejerey | 5/4 for {1}{W} with three -1/-1 counters that shed only when it becomes tapped - it must attack or convoke three times before it is above rate, which is slower than Reluctant Dounguard's creature-ETB shedding in this list. |
| Darkness Descends | 'Put two -1/-1 counters on each creature' is symmetric and this deck's board is wider than the opponent's; it kills more of my changelings than theirs. |
| Mornsong Aria | RARE. 'Players can't draw cards or gain life' turns off Prideful Feastling's lifelink, Dawn-Blessed Pennant, Rooftop Percher, Boggart Mischief and Moonglove Extractor - five of this deck's own cards. |
| Foraging Wickermaw | '{1}: Add one mana of any color' fixes, but Springleaf Drum does it for one mana less and Firdoch Core does it for free while being a changeling. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.7   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.27 adj [MV 2.7 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  40.0%  prod  41.2%  gap  -1.2pp  [OK]
  W  demand  60.0%  prod  58.8%  gap  +1.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base                   cube_mainboard (ecl)
[PASS] copies                 All commons/uncommons at or under 2 copies; all rares/mythics at 1. Basics (Plains x8, Swamp x5) exempt as format-supplied.
[PASS] rare_mythic_cap        4 of the allowed 5 used: Champion of the Clachan (MB), Champion of the Weird (MB), Kinscaer Sentry (MB), Winnowing (SB). One slot deliberately left unused.
[PASS] colour                 Every nonland card is castable in W/B; effective_cost.best_mode returned a usable mode for all 21 distinct nonland names across mainboard and sideboard.
[PASS] splash                 None declared; splash_colors = [], splash_candidates = [].
```
