---
deck_name: "wu-changeling-convoke-control"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WU"
format: "40-card"
built_at: "2026-08-11T05:26:40Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  x7   Island                     basic
  x6   Plains                     basic
  x2   Evolving Wilds             fetches a basic, enters tapped
  x1   Hallowed Fountain          UW dual, enters tapped
  x2   Idyllic Beachfront         UW dual, enters tapped
```

### CREATURES (12)

```
CMC  Card                       Qty  Col  Role                               Rar
  2  Deepchannel Duelist        x2   WU   engine                             U
  2  Silvergill Mentor          x1   U    engine                             U
  3  Flock Impostor             x2   W    threat                             U
  3  Silvergill Peddler         x1   U    engine                             C
  3  Tributary Vaulter          x1   W    engine                             C
  4  Champions of the Shoal     x1   U    engine                             R
  4  Pestered Wellguard         x2   U    engine                             U
  5  Disruptor of Currents      x1   U    threat                             R
  5  Omni-Changeling            x1   U    threat                             U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                       Qty  Col  Role                               Rar
  1  Spell Snare                x1   U    interaction                        U
  3  Crib Swap                  x2   W    interaction                        U
  3  Protective Response        x2   W    interaction                        U
  4  Temporal Cleansing         x2   U    interaction                        C
  6  Harmonized Crescendo       x1   U    engine                             R
  6  Winnowing                  x1   W    interaction                        R
```

### OTHER SPELLS (1)

```
CMC  Card                       Qty  Col  Role                               Rar
  3  Firdoch Core               x1   C    engine                             C
```

## SIDEBOARD (10)

```
Card                       Qty  Col  Rar  Role / When to board in
Spell Snare                x1   U    U   second copy vs decks whose key cards cost exactly 2 - a one-mana answer that does not cost a convoke body
Keep Out                   x1   W    C   second copy vs the 41-card evasion suite and vs enchantment decks - 'deals 4 damage to target tapped creature' kills an attacking flier, or 'Destroy target enchantment'
Personify                  x1   W    U   vs targeted removal - 'Exile target creature you control, then return that card to the battlefield under its owner's control. Create a 1/1 colorless Shapeshifter creature token with changeling' saves the target in response, re-triggers its enter ability (Champions of the Shoal's tap-and-stun, Silvergill Mentor's token, Disruptor of Currents' bounce), and leaves behind a changeling that is a Merfolk for the anthem
Silvergill Mentor          x1   U    U   vs aggro - second copy. 'behold a Merfolk or pay {2} ~ When this creature enters, create a 1/1 white and blue Merfolk creature token' is two Merfolk bodies for two mana, which are two extra convoke payments and two more Harmonized Crescendo draws
Eclipsed Merrow            x2   WU   U   vs slower decks and on the draw - 'look at the top four cards of your library. You may reveal a Merfolk, Plains, or Island card from among them and put it into your hand' hits either half of the deck out of a 2/3 body
Liminal Hold               x2   W    C   vs planeswalkers, artifacts (11) and enchantments (21) - 'exile up to one target nonland permanent an opponent controls until this enchantment leaves the battlefield' is the deck's only permanent-agnostic exile
Rooftop Percher            x2   C    C   vs graveyard/recursion decks (39 graveyard-interaction cards in this cube, 15% density) - and it is a changeling, so it is a Merfolk for Deepchannel Duelist's anthem and for Harmonized Crescendo while it hates
```

## ANALYSIS

### DECK IDENTITY

A W/U control deck whose engine is a rules interaction rather than a card. Convoke says 'Each creature you tap while casting this spell pays for {1} or one mana of that creature's color' - it is a repeatable outlet for tapping my OWN creatures, and this colour pair pays for exactly that. Champions of the Shoal reads 'Whenever this creature enters or becomes tapped, tap up to one target creature and put a stun counter on it'; Pestered Wellguard reads 'Whenever this creature becomes tapped, create a 1/1 blue and black Faerie creature token with flying'; Silvergill Peddler reads 'Whenever this creature becomes tapped, draw a card, then discard a card'; Tributary Vaulter reads 'Whenever this creature becomes tapped, another target Merfolk you control gets +2/+0'. So every convoke spell this deck casts is ALSO a free activation of those triggers, and Deepchannel Duelist's 'At the beginning of your end step, untap target Merfolk you control' re-arms one of them each turn. The changelings are what make the type-matters half airtight: all 12 creature cards in this list are Merfolk - 9 printed and 3 by changeling - so Deepchannel Duelist's 'Other Merfolk you control get +1/+1' is a whole-board anthem, Harmonized Crescendo naming Merfolk draws for every one of them, and Winnowing choosing any of my creatures kills nothing of mine.

### THE ENGINE IS A RULES INTERACTION, NOT A CARD

Convoke reads: *"Each creature you tap while casting this spell pays for {1} or one mana of that creature's color."* Read it as a **repeatable outlet for tapping your own creatures**, and W/U turns out to be full of cards that pay you for exactly that:

| Card | Trigger |
|---|---|
| Champions of the Shoal | *"Whenever this creature **enters or becomes tapped**, tap up to one target creature and put a stun counter on it."* |
| Pestered Wellguard | *"Whenever this creature **becomes tapped**, create a 1/1 blue and black Faerie creature token with flying."* |
| Silvergill Peddler | *"Whenever this creature **becomes tapped**, draw a card, then discard a card."* |
| Tributary Vaulter | *"Whenever this creature **becomes tapped**, another target Merfolk you control gets +2/+0 until end of turn."* |

**8 of the 22 nonland cards have Convoke** (6 distinct: Protective Response ×2, Temporal Cleansing ×2, Winnowing, Omni-Changeling, Disruptor of Currents, Harmonized Crescendo). Every one of them, cast by tapping creatures, is *also* a free activation of one of those five trigger bodies. Then Deepchannel Duelist — *"At the beginning of your end step, untap target Merfolk you control"* — re-arms one every turn, so the outlet does not run down.

This engine costs zero extra cards. It is the same cards doing two things.

### WHY THE CHANGELINGS MATTER HERE — THE 12-OF-12

**All 12 creature cards in this list are Merfolk.** Nine are printed Merfolk; three (Flock Impostor ×2, Omni-Changeling) are changelings and therefore every creature type. That single fact does three jobs at once:

- **Winnowing** — *"you choose a creature that player controls; then each player sacrifices all other creatures they control that don't share a creature type with the chosen creature."* Choosing **any** of my creatures keeps my entire board. I don't even need a changeling in play, which makes this the most reliable Winnowing of the four builds in this series.
- **Deepchannel Duelist** — *"Other Merfolk you control get +1/+1"* is a whole-board anthem rather than a tribal subset.
- **Harmonized Crescendo** naming Merfolk counts *permanents*, so it sees all 12 creature cards, Silvergill Mentor's Merfolk token, and **Firdoch Core** — a changeling artifact, therefore a Merfolk permanent even while it is not a creature. A representative turn-7 board of four creatures plus Firdoch Core draws 5.

Note what is **not** counted: Pestered Wellguard's tokens are **Faeries**, not Merfolk. They are convoke fuel and blockers, not Crescendo draws.

### TWO HONEST CAVEATS

**Crib Swap has a real anti-synergy.** *"Exile target creature. Its controller creates a 1/1 colorless Shapeshifter creature token with changeling."* Pointed at an opponent's creature, it hands **them** a changeling — and a changeling shares a type with whatever creature I later choose for them under Winnowing, so that 1/1 always survives my sweeper. It is still the best removal in these colours; just expect one surviving 1/1.

**Omni-Changeling is a 0/0.** It only lives by entering as a copy of a creature already on the battlefield. On an empty board it dies to state-based actions and contributes nothing to the 12-of-12 count. The assembly check discounts it to 0.7 reliability for that reason, and the tribal counts above should be read as *12 of 12 once it has a target*.

### THE COST OF THE ENGINE

Convoke creates a vulnerability the other three builds don't have: **tapping creatures to pay for a spell means that if the spell is answered, the board is tapped out and the mana is gone.** That is why `disruption-fizzle` is recorded as **accepted** rather than mitigated — holding up real mana instead of convoking is simply not playing the deck. Flock Impostor ×2 and Disruptor of Currents both have Flash, which is the partial hedge: a turn held open is not a wasted one.

### WHAT THE GRILL CHANGED

Three things, two of which were my errors:

1. The goldfish check first warned at **79% keepable** against an 80% floor. I tested three curve variants rather than accepting the WARN and took the cheapest fix — −1 Merrow Skyswimmer (MV 5), +1 Silvergill Mentor (MV 2) — which moved keepable to 82% and turn-2 play rate from 50% to 59% without costing a changeling.
2. I had credited the shape judge with approving slot allocations it never saw. The judge signed off on the *sketch's* numbers (threats 8.7%, engine 21.7%); the built deck runs 18.2% and 45.5% because **I** allocated the 7 nonland slots the sketch left unassigned. Both deviations are now defended on their own grounds.
3. The Challenger found **Silvergill Peddler** — a `{2}{U}` 2/3 Merfolk whose *"becomes tapped, draw a card, then discard a card"* is the cleanest convoke payoff in the pool and was in zero of 22 slots. It replaced one Tributary Vaulter, whose +2/+0 is a racing effect this reactive build wants least.

This is also the only one of the four decks that spends the full **5-of-5 rare budget**, and one of those rares is a *land* — Hallowed Fountain, the only W/U dual that can enter untapped, bought because this is the highest-curve build of the series at 3.45 average mana value and 18 lands.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:1  2:3  3:9  4:5  5:2  6:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.4: Winnowing@0.8, Harmonized Crescendo@0.8, Champions of the Shoal@0.8) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.7: Omni-Changeling@0.7) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 18%  T2 59%  T3 94%
Coverage:  [PASS]
  OK        wide_boards: Winnowing
  OK        single_large_threat: Crib Swap, Protective Response, Temporal Cleansing
  OK        noncreature_permanents: Temporal Cleansing
  OK        stack: Spell Snare
  CONCEDED  graveyard: Rooftop Percher x2 is sideboarded rather than maindecked: at 5 mana it competes directly with the turn the deck wants to spend deploying a convoke body, and its graveyard hate is dead in the matchups that are not the 39-card recursion shell.
```

- The goldfish check initially returned WARN at 79% keepable against an 80% threshold. Rather than accept it I ran three curve variants and took the cheapest fix: -1 Merrow Skyswimmer (mana value 5), +1 Silvergill Mentor (mana value 2), which took keepable to 82% and the turn-2 play rate from 50% to 59% while keeping Omni-Changeling and therefore the changeling count at 6. All four checks then PASSed with no WARN flags.

- Curve is the highest of the four builds, which is why the land count is 18 rather than 17 - convoke discounts the top end in practice but land_target reasons from printed mana value.

- Recorded for honesty after the Phase 9 grill: two of this build's three off-band slot categories (threats 18.2%, engine 45.5%) are deviations I introduced when allocating the 7 nonland slots the winning sketch left unassigned. The judge credited the sketch's declared figures (8.7% and 21.7%), not these. The grounds for both now stand on their own in slot_allocation rather than borrowing the judge's authority.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana is the one thing this deck never wastes, because convoke means spells can be cast with creatures INSTEAD of mana - so a flooded turn casts a spell off lands and still leaves the creatures untapped, or casts two. Beyond that, Firdoch Core's '{4}: This artifact becomes a 4/4 artifact creature until end of turn' is a repeatable sink that also adds a Merfolk body, and Harmonized Crescendo converts a long game into cards at a rate that scales with the board. |
| screw | mitigation | 18 lands - the highest count of the four builds - plus Evolving Wilds x2 and Firdoch Core's '{T}: Add one mana of any color'. Convoke is itself screw insurance: Protective Response, Temporal Cleansing, Winnowing, Harmonized Crescendo, Omni-Changeling and Disruptor of Currents can all be cast on fewer lands than their printed cost if creatures are available. After the Phase 6b repair the goldfish check measures 82% keepable hands and 92% three-lands-by-turn-3. |
| decapitation | mitigation | No single card carries the deck. Champions of the Shoal returns its exiled behold card when it leaves the battlefield, so answering it is not a two-for-one; Deepchannel Duelist runs at 2 copies so the anthem and the untap are redundant; and the tap-trigger engine has three independent members (Champions of the Shoal, Pestered Wellguard x2, Tributary Vaulter x2 - 5 copies across 3 cards), any one of which turns convoke into value on its own. |
| gas-out | mitigation | Harmonized Crescendo naming Merfolk is the refuel and it scales with exactly the thing this deck accumulates - on a board of four creatures plus Firdoch Core it draws 5, for an effective cost convoke pushes well below {4}{U}{U}. Silvergill Peddler loots every time a convoke spell taps it, which is card selection that costs no card and no mana. Pestered Wellguard x2 generates a 1/1 flier every time it is tapped, a card-free source of both blockers and future convoke payments, and Silvergill Mentor brings a second body with it. |
| raced | mitigation | This is the deck in the series built to block. Champions of the Shoal is a 4/6 that taps and stuns an attacker the turn it lands and again every time it is tapped; Tributary Vaulter is a 1/3 flier; Silvergill Peddler is a 2/3; Flock Impostor x2 has Flash and flying, so it ambushes an attacker at instant speed; Disruptor of Currents has Flash plus 'return up to one other target nonland permanent to its owner's hand'. Protective Response x2 destroys an attacking or blocking creature at instant speed for as little as zero mana with convoke. Spell Snare answers the cube's two-drops on the stack. |
| disruption-fizzle | accepted | The critical turn is a convoked Winnowing or Harmonized Crescendo, and convoke creates a specific vulnerability the other three builds do not have: tapping creatures to pay for the spell means that if the spell is countered or fizzles, the board is tapped out AND the mana is gone. A removal spell in response to the last convoke tap can even reduce the mana available mid-cast. Mitigating this would mean holding up real mana instead of convoking, which is to say not playing the deck's engine at all - the entire thesis is that tapping creatures IS the resource. The deck accepts that its best turns are also its most exposed ones, and leans on Flock Impostor x2 and Disruptor of Currents having Flash so that a turn held open is not a wasted one. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Wanderwine Distracter | COMMON. A 4/3 Merfolk Wizard whose 'Whenever this creature becomes tapped, target creature an opponent controls gets -3/-0 until end of turn' is a repeatable combat-neutraliser off every convoke cast - genuinely strong here. Excluded because it would be a SIXTH card at mana value 4 in the highest-curve build of the four, working directly against the Phase 6b repair that moved keepable hands from 79% to 82%. |
| Wanderbrine Preacher | COMMON. A {1}{W} 2/2 whose 'Whenever this creature becomes tapped, you gain 2 life' is the cheapest tap-trigger in the pool and would improve the curve. Excluded because its trigger produces life rather than cards or board, and the raced mitigation already names five blockers. |
| Unexpected Assistance | COMMON. 'Convoke ~ Draw three cards, then discard a card' - convoke-fuelled card advantage, but flat where Harmonized Crescendo scales with the board this deck accumulates, and the engine slot is already at 45.5% of nonland cards. |
| Wanderwine Farewell | UNCOMMON. 'Convoke ~ Return one or two target nonland permanents to their owners hands. Then if you control a Merfolk, create a 1/1 white and blue Merfolk creature token for each' - manufactures Merfolk for both the anthem and Harmonized Crescendo, but at 7 printed mana it is two turns past the thesis turn even with convoke. |
| Deepway Navigator | RARE. 'When this creature enters, untap each other Merfolk you control' is a FULL-board untap where Deepchannel Duelist untaps one, which would multiply the whole tap-trigger engine. Excluded only because the rare budget is fully spent at 5 of 5; this is the first card to add if a rare slot frees up. |
| Sygg’s Command | RARE. Its 'Tap target creature. Put a stun counter on it' mode duplicates Champions of the Shoal at instant speed and its Merfolk-copy mode is on-theme, but the rare budget is fully spent. |
| Meanders Guide | UNCOMMON. 'Whenever this creature attacks, you may tap another untapped Merfolk you control. When you do, return target creature card with mana value 3 or less from your graveyard to the battlefield' - a tap payoff, but gated on ATTACKING, which a controller with a 4-card threat suite does rarely. |
| Merrow Skyswimmer | COMMON. 'Convoke ~ Flying, vigilance ~ When this creature enters, create a 1/1 white and blue Merfolk creature token' - two Merfolk bodies with evasion and vigilance, and vigilance specifically means it can attack AND still be tapped for convoke... except it cannot, because attacking already taps it. It was in the list until Phase 6b, then cut for Silvergill Mentor when the goldfish check warned at 79% keepable: at mana value 5 it was the most expensive card that was not a payoff. |
| Champion of the Clachan | RARE. A 4/5 flash body whose 'Other Kithkin you control get +1/+1' is a whole-board anthem in a Kithkin deck - but this build's creature base is 12 of 12 MERFOLK, and only the 2 changelings among them are also Kithkin, so the anthem would reach 2 of 12. Wrong tribe for this shell; it is the right card in the W/B build. |
| Kinsbaile Aspirant | UNCOMMON. A {W} 2/1 that grows on every creature ETB - a genuinely good one-drop, and its behold is paid by any changeling. Excluded because it is a Kithkin Citizen: it would not receive Deepchannel Duelist's Merfolk anthem, would not be counted by Harmonized Crescendo naming Merfolk, and would DIE to my own Winnowing when I choose a Merfolk. |
| Gallant Fowlknight | COMMON. Same problem - its first-strike clause is Kithkin-only, which reaches 2 of the 12 creature cards here. |
| Changeling Wayfinder | COMMON. A colourless changeling that fetches a basic. The closest cut: it would raise changeling density from 6 to 7 nonland cards. It lost to Silvergill Mentor and Firdoch Core because a 1/2 for three is the weakest convoke body in the slice and this build already runs 18 lands. |
| Rooftop Percher | COMMON. A 3/3 flying changeling with graveyard hate. Sideboarded rather than maindecked: at 5 mana it competes with the turn the deck wants to spend deploying a convoke body. |
| Personify | UNCOMMON. 'Exile target creature you control, then return that card to the battlefield... Create a 1/1 colorless Shapeshifter creature token with changeling' - saves a creature and re-triggers its ETB. Moved to the sideboard; it is reactive insurance rather than a maindeck effect. |
| Stalactite Dagger | COMMON. 'Equipped creature gets +1/+1 and is all creature types' would make a non-Merfolk into a Merfolk - but 12 of the 12 creature cards are already Merfolk, so the type-granting clause is live on 0 of them. |
| Eclipsed Merrow | UNCOMMON. A 2/3 whose ETB digs four for a Merfolk, Plains or Island. Sideboarded: it is a consistency card, and the maindeck wants its three-mana slots to be answers or tap-trigger bodies. |
| Gathering Stone | UNCOMMON. Naming Merfolk it would discount 12 of the 22 nonland cards and dig for them each upkeep. Excluded because convoke already discounts 8 of those 22, and a 4-mana artifact that affects no board would be the deck's worst turn-4. |
| Dawn-Blessed Pennant | UNCOMMON. Naming Merfolk, 'Whenever a permanent you control of the chosen type enters, you gain 1 life' triggers on 12 of 12 creature cards plus tokens - a high count, but 1 life per trigger does not advance an attrition plan that wins on cards. |
| Eclipsed Realms | UNCOMMON land. Naming Merfolk it produces any colour for 12 of the 22 nonland cards. Cut because this build's colour requirement is nearly even (12 W pips / 15 U pips) and it would be a colourless land for the other 10 cards, including Winnowing's {W}{W}. |
| Unexpected Assistance | COMMON. 'Convoke ~ Draw three cards, then discard a card' - a fine convoke card-advantage spell, but Harmonized Crescendo scales with the board this deck accumulates while this is flat, and the engine slot was already at 45.5%. |
| Lofty Dreams | UNCOMMON. 'Convoke ~ When this Aura enters, draw a card ~ Enchanted creature gets +2/+2 and has flying' - card-neutral evasion, but an Aura on a creature in a format with unconditional removal is a two-for-one waiting to happen. |
| Glen Elendra's Answer | MYTHIC. 'Counter all spells your opponents control and all abilities your opponents control' plus a Faerie token per counter - a genuine blowout, but it would take a rare slot the manabase needed, and it is dead unless the opponent has multiple things on the stack. |
| Sygg's Command | RARE. A modal Kindred Sorcery whose Merfolk-copy mode is on-theme, but at {1}{W}{U} choosing two of four it is a value card rather than an answer, and the rare budget was fully committed. |
| Kinbinding | RARE. 'Creatures you control get +X/+X where X is the number of creatures that entered this turn' plus a Kithkin token each combat - a go-wide payoff for a deck that does not go wide, and the token is a Kithkin, off-tribe here. |
| Thoughtweft Imbuer | UNCOMMON. Its 'attacks alone' pump counts Kithkin, which is 2 of the 12 creature cards, and attacking alone is the opposite of what a convoke deck wants to do with its board. |
| Sun-Dappled Celebrant | COMMON. A 5/6 vigilance with convoke - the biggest convoke body available, but it is a Treefolk Cleric, so it misses the Merfolk anthem, the Crescendo count, and would die to my own Winnowing. |
| Sunderflock | RARE. 'return all non-Elemental creatures to their owners' hands' would bounce my own board, since 0 of the 12 creature cards are Elementals unless a changeling is counted. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.45   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.10 adj [MV 3.45 vs 2.5, 1 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand  59.3%  prod  55.6%  gap  +3.7pp  [OK]
  W  demand  40.7%  prod  50.0%  gap  -9.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base                   cube_mainboard (ecl)
[PASS] copies                 All commons/uncommons at or under 2 copies across mainboard and sideboard combined; all rares at 1. Basics (Plains x6, Island x7) exempt as format-supplied.
[PASS] rare_mythic_cap        All 5 of the allowed 5 used, the only build in the series to spend the full budget: Winnowing, Harmonized Crescendo, Champions of the Shoal, Disruptor of Currents and the land Hallowed Fountain - all mainboard. The sideboard is entirely common/uncommon.
[PASS] colour                 Every nonland card is castable in W/U; effective_cost.best_mode returned a usable mode for all 20 distinct nonland names across mainboard and sideboard.
[PASS] splash                 None declared; splash_colors = [], splash_candidates = [].
```
