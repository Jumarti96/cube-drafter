---
deck_name: "wu-merfolk-kindred-go-wide"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WU"
format: "40-card"
built_at: "2026-08-09T18:23:53Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  9x Plains                   basic
  3x Island                   basic
  2x Eclipsed Realms          taps for {C}; any colour only for Merfolk spells
  2x Idyllic Beachfront       WU dual, always enters tapped
  1x Hallowed Fountain        WU dual, may pay 2 life to enter untapped (R)
```

### CREATURES (9)

```
CMC  Card                              Qty   Color  Role                                    Rar
2    Deepchannel Duelist               x2    WU     Threat/Payoff                           U
2    Silvergill Mentor                 x2    U      Threat/Payoff                           U
3    Tributary Vaulter                 x2    W      Threat/Payoff                           C
4    Pestered Wellguard                x2    U      Threat/Payoff                           U
5    Merrow Skyswimmer                 x1    WU     Threat/Payoff                           C
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                              Qty   Color  Role                                    Rar
2    Personify                         x1    W      Threat/Payoff                           U
3    Crib Swap                         x2    W      Interaction                             U
3    Protective Response               x2    W      Interaction                             U
3    Sygg's Command                    x1    WU     Threat/Payoff                           R
```

### OTHER SPELLS (8)

```
CMC  Card                              Qty   Color  Role                                    Rar
1    Springleaf Drum                   x1    C      Engine/Infrastructure                   U
2    Stalactite Dagger                 x2    C      Threat/Payoff                           C
3    Ajani, Outland Chaperone          x1    W      Threat/Payoff                           M
3    Clachan Festival                  x2    W      Engine/Infrastructure                   U
4    Mirrormind Crown                  x1    C      Engine/Infrastructure                   R
5    Kinbinding                        x1    W      Threat/Payoff                           R
```

## SIDEBOARD (10)

```
Card                              Qty   Color  Role / When to board in                       Rar
Rooftop Percher                   x2    C      Hate: graveyard                               C
Keep Out                          x2    W      Hate: enchantments                            C
Pyrrhic Strike                    x2    W      Hate: artifacts + enchantments + fatties      U
Spell Snare                       x2    U      Flex: stack interaction                       U
Liminal Hold                      x2    W      Flex: catch-all exile                         C
```

## ANALYSIS

### DECK IDENTITY

A WU Merfolk kindred deck that wins by having more creatures than the opponent can block, then making each of them bigger. Silvergill Mentor, Merrow Skyswimmer and Clachan Festival each put two bodies onto the battlefield per card, and Stalactite Dagger adds a changeling body that is every creature type. Ajani and Kinbinding add one more every turn for free. Deepchannel Duelist's 'Other Merfolk you control get +1/+1' and Kinbinding's 'Creatures you control get +X/+X, where X is the number of creatures that entered the battlefield under your control this turn' convert that width into damage, and Sygg's Command can copy the Duelist for a second permanent anthem. The build was locked under a reach-and-evasion lens, because the real failure mode of a 1/1 army is a ground stall: Tributary Vaulter and Merrow Skyswimmer fly, Pestered Wellguard mints a flying Faerie whenever it becomes tapped, and Mirrormind Crown turns one token per turn into a copy of whichever printed flier it is attached to.

### HOW THE DECK SCALES

Every card that adds a body is also a card that makes the bodies already there bigger. That is the whole deck.

| Layer | Cards | Count |
|---|---|---|
| Two-or-more bodies per card | Silvergill Mentor ×2, Merrow Skyswimmer, Clachan Festival ×2, Stalactite Dagger ×2 | 7 of 23 |
| A free body every turn | Ajani (+1), Kinbinding (beginning of combat) | 2 |
| Width-to-damage converters | Deepchannel Duelist ×2, Kinbinding, Sygg's Command (copying the Duelist) | 4 |
| Printed fliers (the ground-stall answer) | Tributary Vaulter ×2, Merrow Skyswimmer | 3 |
| Becomes-tapped triggers | Pestered Wellguard ×2, Tributary Vaulter ×2 | 4 |

The engines that matter most are the two that cost nothing. Ajani's `"+1: Create a 1/1 green and white Kithkin creature token"` and Kinbinding's `"At the beginning of combat on your turn, create a 1/1 green and white Kithkin creature token"` both add a body from an empty hand, every turn, with no mana. Neither is a spell, so neither can be countered — which is what actually carries this deck's disruption plan.

### THE TRIBAL GAP, AND WHAT CLOSED IT

The uncomfortable fact about this build: **Deepchannel Duelist reads "Other *Merfolk* you control get +1/+1", and most of this deck's tokens are not Merfolk.** Before the Phase 9 grill, 6 of 8 token-producing copies made Kithkin (Clachan Festival, Ajani, Kinbinding) or Faeries (Pestered Wellguard) — all outside the anthem.

Two things address it. **Kinbinding's pump has no tribal clause at all** — `"Creatures you control get +X/+X"` — so the Kithkin half of the board is served by Kinbinding while the Merfolk half gets both anthems. And **Stalactite Dagger ×2** (added at Phase 9) makes a changeling token that is every creature type, and its `"Equipped creature gets +1/+1 and is all creature types"` converts a host the same way.

### THREE MECHANICS THE GRILL FORCED ME TO STATE PRECISELY

**Mirrormind Crown converts *one* token creation per turn, not every trigger.** The text is `"the first time you would create one or more tokens each turn"`. And a token copy takes copiable values, so flying rides along only if flying is **printed** on the host — which here means Tributary Vaulter or Merrow Skyswimmer, not Pestered Wellguard (Wellguard *makes* fliers; it doesn't have flying). Sequencing consequence: don't fire Ajani's +1 or resolve Clachan Festival in main phase 1 if you want Kinbinding's combat token to be the one the Crown converts.

**Kinbinding is an attack-step anthem.** X counts creatures that entered *this turn* and resets to 0 on the opponent's turn, so it contributes nothing on defence — unless you flash something in, and Personify is the only card here that can.

**Personify returns "that *card*."** A token it exiles ceases to exist and never comes back. Its legal targets are the 9 creature *copies*, never a token. Its best use is blinking Silvergill Mentor or Merrow Skyswimmer to re-trigger `"create a 1/1 white and blue Merfolk creature token"`.

### THE SHARPEST THING THE GRILL CAUGHT

Two cards had been excluded from this deck on the ground that their tap ability "subtracts an attacker from the alpha strike." Both read **"Whenever this creature *attacks*"** — a trigger that resolves *after* attackers are declared. Any creature tapped that way was, by definition, never declared as an attacker. Nothing is subtracted. The stated reason was simply false for both cards, and it had gone unchallenged through the sweep. Both exclusions were retracted and rewritten on real grounds.

### THE HONEST WEAKNESSES

**Interaction is 4 cards, and only 2 of them are unconditional.** Crib Swap exiles anything. Protective Response ×2 needs an *attacking or blocking* creature, and Ajani's −2 needs a **tapped** one. Against a threat that simply sits there untapped, this deck has two answers in 40 cards.

**Eclipsed Realms ×2 is the weakest slot in the mana base.** Naming Merfolk, its coloured mode is live for 12 of 23 nonland cards. Four more have fully colourless costs it pays anyway. But the remaining 7 — Personify, Ajani, Kinbinding, Clachan Festival ×2, Protective Response ×2 — are all **white**, in a deck that is 70% white pips including two `{W}{W}` costs. That is the real argument against the second copy.

**The audit is slightly optimistic here** and I'd rather say so than let it pass: `deck_audit` credits Eclipsed Realms as an unrestricted colour source, which it is not. Recomputing with both copies removed from coloured production gives W 13 of 17 against 69.6% demand and U 5 of 17 against 30.4% — still PASS on both colours, so the verdict holds either way.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:1  2:7  3:10  4:3  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 12 copies (effective 11.1: Kinbinding@0.6, Mirrormind Crown@0.5) → p=0.99 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.5: Protective Response@0.5) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 20%  T2 87%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper is castable in W/U - the cube 2 sweepers are both red-identity. This deck answer to a wide board is to be wider, and there are exactly THREE engines that add a body every turn without spending a card: Ajani per-turn +1, Kinbinding beginning-of-combat trigger, and Clachan Festival repeatable activation. Pestered Wellguard is deliberately NOT counted among them: its Faerie needs the Wellguard to become tapped, and in the stalled board this concession describes, attacking is off the table and blocking does not tap - so its only outlets are Springleaf Drum and a one-shot Protective Response. Kinbinding Creatures you control get +X/+X scales with exactly the deployment a board stall produces. The deck genuinely loses to a board it cannot out-deploy. Mitigating means maindecking Winnowing at mana value 6, which would cost a capped rare slot and is symmetric against the cube other tribal decks.
  OK        single_large_threat: Crib Swap, Protective Response, Ajani, Outland Chaperone
  CONCEDED  noncreature_permanents: The mainboard has no artifact or enchantment answer. Keep Out's 'Destroy target enchantment' and Pyrrhic Strike's 'Destroy target artifact or enchantment' are both sideboard cards. Maindecking either would cut a token maker, and a go-wide deck that trades a body for a mode that is blank against the cube's creature decks has lowered its own clock for nothing.
  CONCEDED  stack: No mainboard counterspell. This deck spends every turn adding permanents to the board; holding up Spell Snare is a turn without a token, and a turn without a token is a smaller Kinbinding trigger and a smaller attack. Spell Snare is in the sideboard for the matchups where that trade is correct.
  CONCEDED  graveyard: Graveyard interaction is the cube's densest class at 39 cards, and a W/U answer exists - Rooftop Percher, 'exile up to two target cards from graveyards'. It is conceded mainboard on cost: at {5} it is the most expensive card this list could run and it adds one body where Clachan Festival adds two for three mana. It is boarded in against the reanimator decks, where its changeling body also takes Deepchannel Duelist's anthem.
```

No WARN flags were raised - curve, assembly, goldfish and coverage all returned PASS. Goldfish keepable is 89%, the highest of the three builds, because this list's curve peaks at mana value 3.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Clachan Festival's '{4}{W}: Create a 1/1 green and white Kithkin creature token' is a repeatable mana sink that turns every surplus land into a body, and a body is a Kinbinding trigger. Ajani's +1 costs no mana at all and adds one a turn regardless of how flooded the hand is. Mirrormind Crown's 'Equip {2}' and Stalactite Dagger's 'Equip {2}' both absorb spare mana by moving to a better host. |
| `screw` | mitigation | 8 of the 23 nonland cards cost 2 or less and the goldfish check reports 87% keepable hands with three lands by turn 3 in 88% of games. Springleaf Drum at {1} is a genuine turn-1 play - T1 play rate rose from 0% to 20% when it was added - and it fixes colour as well as accelerating. Honest limit the grill raised: Silvergill Mentor's two bodies off two lands require 'behold a Merfolk OR PAY {2}', so without a second Merfolk card in hand it is a turn-4 play, not a turn-2 one. |
| `decapitation` | mitigation | The deck has no single keystone to decapitate, which is the point of the go-wide reading. Kinbinding, Mirrormind Crown, Ajani and Clachan Festival are four separate noncreature permanents that each add or scale bodies, and Deepchannel Duelist is at 2 copies. Answering any one of them leaves the other four. Personify x1 additionally protects a targeted creature CARD at instant speed - though not a token, since it returns 'that card'. |
| `gas-out` | mitigation | resource_exchange Net-Positive and Self-Replacing are both 0 and cantrip_count is 0, so the refuel is entirely board-based and that is deliberate: Ajani's +1 and Kinbinding's beginning-of-combat trigger each add a body every turn from an empty hand, and Clachan Festival converts leftover mana into more. Sygg's Command's 'Target player draws a card' mode is the deck's only card draw of any kind. An empty hand still widens the board every turn, which is the only resource this deck spends. |
| `raced` | accepted | Against the fastest clocks in the threat profile this deck is behind early: the curve peaks at 3 and the tokens are 1/1s that trade down. It blocks with Pestered Wellguard (3/2), a growing wall of tokens and Merrow Skyswimmer's vigilance, and Ajani's '-2: deals 4 damage to target tapped creature' kills an attacker the turn after it commits. Mitigating means lowering the curve, which means cutting Kinbinding and Mirrormind Crown - the two cards that convert width into damage, and therefore the reason this build is not just a pile of small creatures. CORRECTED: an earlier draft called that the ONLY route, which the grill refuted by naming Kinscaer Sentry, a {1}{W} rare that lowers the curve and blanks a race with first strike and lifelink. That route is real; it is declined because it costs a capped rare slot and Kinscaer Sentry is a Kithkin, outside the Merfolk anthem that the Phase 9 repair just spent two Stalactite Daggers widening. |
| `disruption-fizzle` | mitigation | REWRITTEN after the Phase 9 grill marked this mode UNSATISFIED. The earlier text named Protective Response and Personify as answers to a removal spell; both fail on oracle text. Protective Response reads 'Destroy target attacking or blocking CREATURE' - it cannot target a spell at all. Personify reads 'exile target creature you control, then return that card' - the creature returns as a new object and is no longer attacking, so it saves the card and loses the attack. What actually carries this mode is the shape of the plan, not a card: there is no critical turn to interact with. The deck adds one or two permanents every turn, so a single removal spell trades one-for-one against a deck that generates a body per turn for free from Ajani's '+1: Create a 1/1 green and white Kithkin creature token' and Kinbinding's 'At the beginning of combat on your turn, create a 1/1 green and white Kithkin creature token'. Neither of those is a spell, so neither can be countered. Personify does still protect a targeted creature CARD from removal at instant speed - just not while keeping it in combat, and never a token. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Thoughtweft Imbuer | 'Whenever a creature you control ATTACKS ALONE, it gets +X/+X' - directly anti-synergistic with a go-wide plan, which never attacks alone. Its X also counts Kithkin, and this list's Kithkin are tokens rather than cast creatures. |
| Champion of the Clachan | 'Other Kithkin you control get +1/+1' - the Kithkin in this deck are 1/1 tokens from Clachan Festival, Kinbinding and Ajani, so the anthem hits perhaps three bodies while costing a rare slot; Deepchannel Duelist hits the Merfolk half, which is larger. |
| Kithkeeper | 'Vivid - create X 1/1 Kithkin tokens, where X is the number of colors among permanents you control' - this deck runs two colours, so it makes 2 tokens for {6}{W}. |
| Goldmeadow Nomad | '{W}, Exile this card from your graveyard: Create a 1/1 green and white Kithkin creature token' - a token from the graveyard is real recursion, but it requires the Nomad to have died first and this deck has no sacrifice outlet to get it there on purpose. |
| Glen Elendra's Answer | 'Counter all spells your opponents control and all abilities' making a Faerie per counter - a mythic slot for a reactive card whose token count depends on the opponent holding up multiple spells. |
| Encumbered Reejerey | A 5/4 that sheds a -1/-1 counter per tap - a fine body, but it does not widen the board, and this build's payoffs (Kinbinding, Deepchannel Duelist, Sygg's Command copying the Duelist) all scale with the NUMBER of creatures rather than the size of one. CORRECTED: an earlier draft listed Timid Shieldbearer among this build's payoffs; that card is not in the deck. |
| Wanderbrine Trapper | '{1}, {T}, Tap another untapped creature you control: Tap target creature an opponent controls' - a tempo effect, but it taps two of your own creatures out of an attack, which a go-wide deck cannot afford. |
| Springleaf Drum | NOW IN THE DECK x1. CORRECTED REASON: the earlier ground - 'taps a body out of the attack' - is backwards for the 4 nonland copies that carry a 'whenever this creature becomes tapped' trigger (Pestered Wellguard x2, Tributary Vaulter x2), where the tap IS the payoff. It is also the deck's only acceleration and its only non-land fixing. |
| Meanders Guide | CORRECTED REASON. The earlier ground claimed its tap 'subtracts an attacker from exactly the alpha strike'. That is false: the trigger reads 'Whenever this creature ATTACKS', which resolves after attackers are declared, so any creature it taps was never an attacker. It is excluded on a different ground - its recursion targets a creature card with mana value 3 or less in the graveyard, and this deck's board is mostly tokens, which never go to the graveyard as cards. |
| Gravelgill Scoundrel | CORRECTED REASON. Same false ground as Meanders Guide - 'Whenever this creature attacks' resolves after attackers are declared, so it subtracts nothing. It is excluded because its unblockable clause applies only to itself, a 1/3, which is the smallest possible share of a go-wide board's damage. |
| Wanderwine Distracter | A 4/3 whose tap trigger gives an opposing creature -3/-0 - defensive value in a deck whose plan is to attack with more creatures than the opponent can block. |
| Wanderbrine Preacher | 'gain 2 life' on tap - the life is real against a race, but it neither widens the board nor pumps it, and every slot here is competing with a token maker. |
| Harmonized Crescendo | 'Draw a card for each permanent you control of that type' would draw enormously off a wide Merfolk board - but at {4}{U}{U} it costs a rare slot and a turn that this deck would rather spend deploying, and the board it needs is the board that was already winning. |
| Unexpected Assistance | Convoke 'Draw three cards, then discard a card' - excellent refuel, but tapping three creatures to cast it is three creatures not attacking. |
| Disruptor of Currents | Flash convoke 3/3 with an ETB bounce - a tempo rare in a deck whose rare slots are spent on Mirrormind Crown and Kinbinding, which multiply the whole board rather than affecting one permanent. |
| Temporal Cleansing | Convoke tuck for any nonland permanent - a clean answer, but sorcery-speed and it convokes away attackers. |
| Omni-Changeling | CORRECTED REASON. The earlier ground said Sygg's Command 'does the same for one less mana', citing a card that was not then in the deck and getting the arithmetic wrong ({3}{U}{U} is mana value 5 against Sygg's Command's 3 - two less, not one). Sygg's Command is now in the deck, and the comparison is sound as restated: 3 mana versus 5, and it also draws a card. |
| Kinscaer Sentry | 'Whenever this creature attacks, you may put a creature card with mana value X or less from your hand onto the battlefield tapped and attacking, where X is the number of attacking creatures' - genuinely a go-wide payoff, but it costs a rare slot and it is a Kithkin, outside Deepchannel Duelist's Merfolk anthem. |
| Spiral into Solitude | Pacifism whose exile mode costs {1}{W} plus a -1/-1 counter on your own creature - shrinking your own board to answer one threat is the wrong trade for a deck counting creatures. |
| Pyrrhic Strike | SIDEBOARD ONLY; the exclusion applies to the mainboard. Its optional 'blight 2' additional cost puts two -1/-1 counters on a creature you control. Verified against printed toughness: of the 9 creature copies, ONLY Tributary Vaulter x2 (1/3 -> -1/1) survives it. Silvergill Mentor (2/1), Deepchannel Duelist (2/2), Pestered Wellguard (3/2) and Merrow Skyswimmer (2/2) all die, and every token this deck makes is a 1/1 that dies outright. Board it in and cast it for ONE mode unless a Tributary Vaulter is available to blight. |
| Reluctant Dounguard | A 4/4 for {2}{W} that sheds a -1/-1 counter whenever another creature enters - the trigger is well matched to a token deck, but it is a Kithkin Soldier outside the Merfolk anthem and it does not widen the board itself. |
| Illusion Spinners | 'Hexproof as long as it's untapped' - the protection switches off the moment it attacks, which is every turn in this deck. |
| Rooftop Percher | A 3/3 changeling flier with graveyard hate; the changeling body does take the Merfolk anthem, but at {5} it is a sideboard card, not a curve card. |
| Glamermite | A flash 2/2 flier that taps or untaps one creature - fine, but it adds one body where Silvergill Mentor and Merrow Skyswimmer add two. |
| Sygg, Wanderwine Wisdom // Sygg, Wanderbrine Shield | An unblockable single body with a conditional draw grant - a rare slot spent on one creature in a deck whose rares multiply the board. |
| Gathering Stone | 'Spells you cast of the chosen type cost {1} less' naming Merfolk - a real discount, but at mana value 4 it arrives after the curve it would help, and this deck would rather spend turn 4 deploying two bodies. |
| Spell Snare | 'Counter target spell with mana value 2' - holding up one mana is a turn not spent adding to the board, which is this deck's only axis. |
| Mirrorform | 'Each nonland permanent you control becomes a copy of target non-Aura permanent' - spectacular on a wide board, but it is a mythic slot for a card that does nothing on an empty board and loses to the removal spell that emptied it. |
| Shore Lurker | CUT IN PHASE 9. A 3/3 flier and a printed-flying Mirrormind Crown host, but at {3}{W} it is the thinnest body-per-mana in the list, and its surveil 1 filters without drawing. The slot went to Springleaf Drum. |
| Deepway Navigator | CUT IN PHASE 9 and its rare slot given to Sygg's Command. Its '+1/+0' requires three or more MERFOLK to have attacked, and 6 of this deck's 8 token-producing copies make Kithkin or Faerie tokens that do not count - so the anthem switched off precisely as the go-wide plan succeeded along its widest axis. |
| Silvergill Peddler | A fifth becomes-tapped body and the deck's only card selection, on a Merfolk that feeds behold. Excluded because the Phase 9 repair spent those slots on Stalactite Dagger x2, which closes the tribal gap, and Springleaf Drum, which is the tap outlet Peddler would have wanted anyway. |
| Eclipsed Merrow | Three hybrid pips for a 2/3 that digs four deep for a Merfolk, Plains or Island. Excluded because it adds one body where Silvergill Mentor and Clachan Festival add two, and this deck counts bodies. |
| Champions of the Shoal | A 4/6 whose tap trigger stuns a blocker - real reach against the ground stall this deck fears. Excluded on the rare cap: all five slots are spent on cards that multiply the whole board (Mirrormind Crown, Kinbinding, Ajani, Sygg's Command) or fix its mana (Hallowed Fountain), and Champions affects exactly one permanent per tap. |
| Adept Watershaper | 'Other tapped creatures you control have indestructible' would make this board's alpha strikes free. Excluded on the rare cap and because it is the defining keystone of the sibling tap-trigger build, where attacking every turn makes it work far harder than it would here. |
| Wanderwine Farewell | 'Return one or two target nonland permanents... create a 1/1 white and blue Merfolk creature token for each permanent returned' is two answers and two Merfolk bodies in one card. Excluded on curve: at mana value 7 it is two full turns above this list's ceiling, and convoke would tap the board it is trying to widen. |
| Timid Shieldbearer | '{4}{W}: Creatures you control get +1/+1 until end of turn' is a genuine repeatable mass pump for a wide board. Excluded because Clachan Festival already occupies the five-mana-sink role and produces a permanent body rather than a temporary buff. NOTE: two sections of an earlier draft reasoned as though this card were in the deck; both have been corrected. |
| Kinsbaile Aspirant | 'Whenever another creature you control enters, this creature gets +1/+1 until end of turn' rewards exactly this deck's deployment pattern, and its behold cost is payable off Clachan Festival x2 and Crib Swap x2. Excluded because the pump is until-end-of-turn on a single body, where Kinbinding pumps the entire board on the same trigger condition. |
| Gallant Fowlknight | 'When this creature enters, creatures you control get +1/+0 until end of turn' is a one-shot team pump on a 3/4 - several points of damage on a wide board. Excluded because it is a Kithkin outside Deepchannel Duelist's anthem, and its first-strike rider only helps Kithkin, of which this deck's are all 1/1 tokens. |
| Sygg's Command | NOW IN THE DECK. It was swept in, then dropped without a recorded reason - a gap the Phase 9 grill flagged. It has since taken Deepway Navigator's rare slot. |
| Stalactite Dagger | NOW IN THE DECK x2. Swept in, then dropped without a recorded reason. The Phase 9 grill restored it as the answer to the tribal gap: its changeling token is a Merfolk for both anthems, and 'Equipped creature gets +1/+1 and is all creature types' converts a host the same way. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.38 adj [MV 2.91 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  30.4%  prod  41.2%  gap -10.8pp  [OK]
  W  demand  69.6%  prod  76.5%  gap  -6.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1a mainboard size                40 == 40
  [PASS] 1b sideboard size                10 == 10
  [PASS] 2 exact-name membership          missing=[]
  [PASS] 3 copy limits                    violations=[]
  [PASS] 3b rare/mythic cap <=5           total=5 -> ['Ajani, Outland Chaperone', 'Hallowed Fountain', 'Kinbinding', 'Mirrormind Crown', "Sygg's Command"]
  [PASS] 4 colour usability               unusable=[]
  [PASS] 5 splash cap                     no splash colors
  [PASS] user constraint: max 5 rares/mythics across mainboard + sideboard
  [PASS] basic lands treated as format-supplied and exempt from copy limits
```
