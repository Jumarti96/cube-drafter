---
deck_name: "wu-tap-trigger-convoke"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WU"
format: "40-card"
built_at: "2026-08-11T04:13:03Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x8   Island                     Basic
  x5   Plains                     Basic
  x2   Evolving Wilds             Fetches a basic tapped
  x2   Idyllic Beachfront         WU dual, enters tapped
```

### CREATURES (17)

```
CMC  Card                              Qty   Color  Role                                            Rar
2    Deepchannel Duelist               x2    WU     Merfolk lord + end-step untap                   U
2    Deepway Navigator                 x1    WU     Flash mass-untap; anthem on a wide attack       R
2    Encumbered Reejerey               x2    W      Grows 2/1 to 5/4 by being tapped                U
2    Silvergill Mentor                 x2    U      Two bodies for two mana                         U
3    Meanders Guide                    x2    W      Free tap-event on attack + MV<=3 recursion      U
3    Silvergill Peddler                x1    U      Loot on every tap                               C
4    Pestered Wellguard                x2    U      A flying Faerie each time it taps               U
4    Wanderwine Distracter             x2    U      4/3; -3/-0 to a creature each time it taps      C
5    Disruptor of Currents             x1    U      Flash convoke body; bounces any nonland permanent  R
5    Merrow Skyswimmer                 x2    WU     Convoke flier + token; vigilance                C
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                              Qty   Color  Role                                            Rar
3    Protective Response               x2    W      Convoke instant removal                         U
3    Thirst for Identity               x1    U      Net +2 draw; discount fed by 17/23 creatures    U
6    Harmonized Crescendo              x1    U      Convoke refuel off the Merfolk board            R
```

### OTHER SPELLS (2)

```
CMC  Card                              Qty   Color  Role                                            Rar
1    Springleaf Drum                   x2    C      Ramp + fixing + free tap-trigger                U
```

## SIDEBOARD (10)

```
Card                        Qty   Color  Role / When to board in                                                                 Rar
Spell Snare                 x2    U      Counters MV-2 spells — vs decks whose key plays cost two; MV2 is the pool's largest bucket at 72/260  U
Crib Swap                   x2    W      Unconditional exile; a Merfolk card via changeling — vs recursive or indestructible threats the maindeck cannot answer  U
Pyrrhic Strike              x2    W      Artifact/enchantment/MV3+ creature removal — vs the cube's 11 artifacts + 21 enchantments, or a large single threat  U
Sygg's Command              x1    WU     Copies a Merfolk + a tempo or draw mode — vs grindy decks where a second copy of a tap-trigger body wins the long game  R
Champions of the Shoal      x1    U      Repeatable tapper/stunner on a 4/6 — vs a single large ground threat; its behold-exile cost is worth paying deliberately  R
Rooftop Percher             x2    C      Graveyard hate on a 3/3 changeling flier — vs the cube's 39-card graveyard theme, its largest at 15% density  C
```

## ANALYSIS

### DECK IDENTITY

A W/U Merfolk tempo deck that treats convoke's cost as its engine rather than its price. Convoke reads 'Each creature you tap while casting this spell pays for {1} or one mana of that creature's color', and 7 of this deck's 17 creature cards read 'Whenever this creature becomes tapped' — so paying for a spell also loots (Silvergill Peddler), manufactures a flying Faerie (Pestered Wellguard), strips 3 power off a blocker (Wanderwine Distracter), or removes a -1/-1 counter from a 5/4 body (Encumbered Reejerey). The tension is real and stated: a creature that attacked stays tapped through the opponent's turn, so the deck does NOT convert its attacking board on their turn — the instant-speed window belongs to the 2 vigilance creatures, whatever Deepchannel Duelist untapped at end step, and a flashed Deepway Navigator. The primary convoke window is my own main phases, and Meanders Guide's attack trigger ('you may tap another untapped Merfolk you control') is the one free tap-event that costs no card and no combat step.

### THE CENTRAL MECHANIC, STATED PRECISELY

Convoke reads *"Each creature you tap while casting this spell pays for {1} or one mana of that creature's color."* Tapping is a **cost paid while casting** — it happens before the spell resolves, and before anyone can respond. Two consequences drive this whole deck:

1. **The tap-triggers are not conditional on the spell resolving.** A countered Harmonized Crescendo still leaves the Faerie token from Pestered Wellguard, the -3/-0 from Wanderwine Distracter, and the loot from Silvergill Peddler. This is the deck's answer to being interacted with on its key turn.
2. **Convoke can pay coloured pips, not just generic.** Every creature in this deck is white, blue, or both, so the {U}{U} on Harmonized Crescendo and Disruptor of Currents is payable by tapping blue Merfolk directly. The mana audit measures colour demand from printed mana costs and therefore *overstates* what this deck actually needs from its lands.

### THE TENSION I AM NOT HIDING

A creature that attacks becomes tapped, and it stays tapped through the opponent's entire turn — it untaps in **my** untap step. So the popular framing of this archetype ("attack, then convoke on their turn with the same board") is simply false, and an earlier draft of this deck was built on that false premise until the self-grill caught it.

What is actually available to convoke at instant speed on the opponent's turn:

| Source | Copies | Mechanism |
|---|---|---|
| Vigilance | 2 | Merrow Skyswimmer — attacks without tapping |
| End-step untap | 2 | Deepchannel Duelist — one Merfolk each, at my end step |
| Flash mass-untap | 1 | Deepway Navigator — untaps each other Merfolk |
| Held back | varies | any creature that simply did not attack |

That is a real but bounded window. **The primary convoke window is my own main phases**, and the deck is built to accept that: 4 of the 6 convoke copies are instant or flash so they *can* be held, but the deck does not depend on it.

### WHY MEANDERS GUIDE IS THE QUIET BEST CARD

*"Whenever this creature attacks, you may tap another untapped Merfolk you control. When you do, return target creature card with mana value 3 or less from your graveyard to the battlefield."*

It is the only free tap-event in the deck — it costs no card and no mana, and it happens **on the attack**, the one moment when tapping a creature is otherwise pure cost. Tapping Pestered Wellguard with it makes a Faerie; tapping Silvergill Peddler loots; tapping Encumbered Reejerey grows it. And the recursion rider is live on **10 of 17 creature copies**, which is what keeps the deck's hand from mattering as much as its graveyard.

### THE CURVE IS AN ILLUSION

| Printed MV | Cards | Realistic cost with 3-4 bodies |
|---|---|---|
| Harmonized Crescendo — 6 | 1 | {U}{U} or less |
| Merrow Skyswimmer — 5 | 2 | 1-2 mana |
| Disruptor of Currents — 5 | 1 | {U}{U} or less |
| Protective Response — 3 | 2 | often free |

`deck_audit.land_target` computes from printed mana value and returned 17 lands. That number is honest for a deck that might draw no creatures, but on a normal board this deck is casting its top end for one or two mana. I built to the tool's number rather than deviating, because the failure case the land count protects against — a creature-light opening hand — is exactly the case where convoke does nothing.

### WHAT THE GRILL CHANGED

The self-grill was not cosmetic here. Two findings were substantive errors of mine:

- **Winnowing was cut.** I had called it a one-sided wrath having checked only my own board. In this cube 43% of cards carry a Tribal/Kindred tag, 139 of 168 pool creatures have two or more creature subtypes, and 13 are changelings that survive it unconditionally. Against a mono-tribe opponent it kills nothing.
- **The attack/convoke timing error above**, which had been load-bearing in the deck's stated identity.

The repairs added Wanderwine Distracter x2, Meanders Guide x2, Thirst for Identity x1 and Disruptor of Currents x1, and moved Crib Swap x2 to the sideboard.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:2  2:7  3:6  4:4  5:3  6:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 9: Encumbered Reejerey@0.75, Encumbered Reejerey@0.75, Deepchannel Duelist@0.9, Deepchannel Duelist@0.9, Silvergill Peddler@0.9, Deepway Navigator@0.8) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 11.4: Meanders Guide@0.85, Meanders Guide@0.85, Silvergill Mentor@0.85, Silvergill Mentor@0.85) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 37%  T2 89%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: The pool contains exactly 2 sweepers (dossier.structural_census: Ashling's Command, Soul Immolation), both outside W/U, so no W/U card removes an opposing wide board. Winnowing was cut precisely because it is not one: 43% of this cube carries a Tribal/Kindred tag and 13 pool creatures are changelings, so an opponent's board typically shares a creature type and Winnowing kills zero. This deck goes over a wide board instead of through it - Pestered Wellguard x2 manufactures flying Faerie tokens on every tap, Merrow Skyswimmer x2 flies, and Wanderwine Distracter x2 subtracts 3 power from a blocker each time it taps. Mitigating would cost both remaining mythic slots (Morningtide's Light, Curious Colossus) and roughly 1.0 average mana value, which moves land_target from 17 to 18 and blunts the proactive clock this build was selected for.
  OK        single_large_threat: Protective Response, Disruptor of Currents, Wanderwine Distracter
  OK        noncreature_permanents: Disruptor of Currents
  CONCEDED  stack: No mainboard counterspell: mana held up is better spent convoking at instant speed, and Spell Snare x2 is boarded in when an opposing deck rewards holding {U} - MV2 is the pool's largest bucket at 72 of 260 nonland cards.
  CONCEDED  graveyard: The pool gives W/U no mainboard graveyard answer that is also a body or a tempo play; Rooftop Percher x2 ('exile up to two target cards from graveyards') is in the sideboard for the cube's 39-card graveyard theme, the cube's largest at 15% density.
```

- Interaction 21.7% vs a 25-35% tempo band: accepted, not repaired. The Challenger's approval round identified the only in-band swap (Crib Swap x1 over Thirst for Identity x1) and recommended against it, because it would revert net-positive draw from 2 of 23 to 1 of 23. A verified card-economy repair outranks a 3.3pp percentage.

- Threats/Payoffs 39.1% vs a 10-18% band: accepted on the grounds the shape judge credited and the Challenger endorsed — convoke makes creature bodies part of the mana base, so the threat count and the mana count are the same number.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Silvergill Peddler reads 'Whenever this creature becomes tapped, draw a card, then discard a card' — every attack and every convoke converts a surplus land in hand into a fresh card. Thirst for Identity turns 3 mana into a net +2. And convoke is structurally anti-flood: 6 of 23 nonland cards can be paid with creatures instead of lands, so the 5th and 6th land are never needed to cast anything. |
| screw | mitigation | 9 of 23 nonland cards cost 2 or less (Springleaf Drum x2 at 1; Silvergill Mentor x2, Encumbered Reejerey x2, Deepchannel Duelist x2, Deepway Navigator x1 at 2). Springleaf Drum ('{T}, Tap an untapped creature you control: Add one mana of any color') is a 1-mana accelerant that also fixes. Convoke means a 6-MV Harmonized Crescendo is castable off 2 lands plus 4 bodies. The Phase 6b goldfish simulation measured 83% keepable hands and 88% on 3 lands by turn 3; that report ships with this deck as structural_checks. |
| decapitation | mitigation | No singleton is load-bearing. The engine is 7 tap-trigger copies spread across 4 different cards, so answering any one card removes at most 2 of 7. Deepway Navigator, the only mass-untapper, is a multiplier rather than a requirement — Deepchannel Duelist x2 untaps one Merfolk per end step and Meanders Guide x2 supplies a free tap-event on attack, so the clock functions without it. |
| gas-out | mitigation | Counted against resource_exchange: 2 of 23 nonland cards are net-positive draw (Harmonized Crescendo x1, which on a turn-5 board of 5 Merfolk permanents draws 4-5; Thirst for Identity x1, net +2 because its 'unless you discard a creature card' clause is fed by 17 of 23 creature cards), plus 1 self-replacing looter (Silvergill Peddler). Board-side, Pestered Wellguard x2 is net-positive in permanents, and Meanders Guide x2 rebuys a creature of MV 3 or less on every attack — recursion live on 10 of 17 creature copies — so an empty hand still adds a body per turn. |
| raced | accepted | Against the cube's fastest clocks this deck can lose the race, and I am not fixing it. The available W/U mitigations are Wanderbrine Preacher ('Whenever this creature becomes tapped, you gain 2 life') and cheap blockers like Gravelgill Scoundrel; both cost the thing the shape judge picked this build for, since a 2/2 lifegain body does not advance a turn-6 clock, and swapping two threat slots for them turns the proactive-clock build into the interaction-dense build the judge ranked third. Wanderwine Distracter x2 is the partial answer that does NOT cost the clock — a 4/3 that also subtracts 3 power from an attacker each time it taps — and was added for exactly this reason during the grill. |
| disruption-fizzle | mitigation | Convoke taps creatures as a COST while casting, so the 'Whenever this creature becomes tapped' triggers go on the stack and resolve even if the spell they paid for is countered — a countered Harmonized Crescendo still leaves the Faerie from Pestered Wellguard, the -3/-0 from Wanderwine Distracter, and the loot from Silvergill Peddler. The plan is also not committed on a single main phase: 4 of the 6 convoke copies are instant or flash, so it can be executed on the opponent's end step rather than into open mana. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Kinbinding | 'Creatures you control get +X/+X, where X is the number of creatures that entered the battlefield under your control this turn' rewards a one-turn token dump, but this build's damage comes from repeated tap-triggers across turns, not a single alpha strike — it is the keystone of deck 2, not this one. |
| Ajani, Outland Chaperone | '+1: Create a 1/1 green and white Kithkin creature token' makes off-tribe Kithkin tokens, which break the type-uniformity that Winnowing and Harmonized Crescendo pay off; and it is a mythic against a 5-card rare budget. |
| Clachan Festival | Two Kithkin tokens for {2}{W} is efficient convoke fodder, but Kithkin tokens do not share a type with the Merfolk board, so Winnowing would sacrifice them and Harmonized Crescendo would not count them. |
| Glen Elendra's Answer | 'Counter all spells your opponents control and all abilities' is a mythic blowout, but this deck taps out proactively to convoke and rarely holds {2}{U}{U} up; it also spends a mythic slot the engine rares need more. |
| Mirrorform | 'Each nonland permanent you control becomes a copy of target non-Aura permanent' is a mythic finisher, but it wants a wide board AND a large target on the battlefield; this deck's boards are wide and small, and the mythic slot is contested. |
| Loch Mare | A 4/5 for {1}{U} with counter-removal card draw is raw rate, but it has zero interaction with tapping or convoke payoff and would consume one of five rare/mythic slots. |
| Champion of the Clachan | 'Other Kithkin you control get +1/+1' — this deck contains 0 Kithkin; the lord is blank. |
| Thoughtweft Imbuer | 'Whenever a creature you control attacks alone, it gets +X/+X... where X is the number of Kithkin you control' — attacking alone is the opposite of go-wide and X would be 0 here. |
| Timid Shieldbearer | '{4}{W}: Creatures you control get +1/+1 until end of turn' is a mana sink, but at {4}{W} it competes directly with convoke for the same untapped creatures and mana on the turn it matters. |
| Kulrath Mystic / Tanufel Rimespeaker | Both trigger on 'a spell with mana value 4 or greater'; 8 of the 23 nonland cards in this list have MV 4+, and convoke reduces what I pay but not the printed mana value — the trigger works, but a 2-mana 2/4 that needs a 4-drop first is slower than the tap-trigger bodies at the same cost. |
| Illusion Spinners | 'This creature has hexproof as long as it's untapped' anti-synergizes with a deck whose whole plan is tapping its own creatures. |
| Rimefire Torque | 'Remove three charge counters: When you next cast an instant or sorcery spell this turn, copy it' is a real payoff, but it needs three chosen-type permanents to enter first and costs a rare slot the engine needs. |
| Curious Colossus | A 7/7 mythic that shuts off an opponent's board, but {5}{W}{W} is uncastable-by-convoke on the turns this deck wants to act and it is a single large threat in a go-wide shell. |
| Morningtide's Light | 'return those cards to the battlefield tapped' would re-trigger my own ETBs, but returning them TAPPED does not re-arm them for convoke, and it is a mythic. |
| Blossombind | 'When this Aura enters, tap enchanted creature. Enchanted creature can't become untapped' — as removal it is fine, but 'can't become untapped' on my own creature would permanently disable a tap-trigger body, so it is opponent-only and weaker than Crib Swap. |
| Swat Away | 'costs {2} less to cast if a creature is attacking you' — this deck is the beatdown, so the discount is off most of the time; Protective Response and Crib Swap answer creatures more reliably. |
| Shore Lurker / Stratosoarer / Shinestriker | Fine blue/white bodies, but none has a tap-trigger, convoke, or a token, so they are pure filler in a shell where every slot can instead fire the engine. |
| Hallowed Fountain | The only untapped WU dual, but it is a rare; spending 1 of 5 rare slots on a land that saves roughly one tempo point loses to spending it on Harmonized Crescendo or Winnowing. Idyllic Beachfront x2 plus Eclipsed Realms x2 cover the same fixing at common/uncommon. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.09   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.45 adj [MV 3.09 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  62.5%  prod  58.8%  gap  +3.7pp  [OK]
  W  demand  37.5%  prod  41.2%  gap  -3.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  base: cube_mainboard only — every card verified by exact name against the working pool
  commons_uncommons_max_2: PASS — no common or uncommon exceeds 2 copies
  rares_mythics_max_1_each: PASS — all 5 rare cards are singletons
  rares_mythics_max_5_total: PASS — exactly 5/5: Deepway Navigator, Disruptor of Currents, Harmonized Crescendo (mainboard) + Champions of the Shoal, Sygg's Command (sideboard). Zero mythics used.
  basics_unlimited: PASS — Plains x5, Island x8 are format-supplied and exempt
  colour_legality: PASS — every nonland card usable in W/U via effective_cost.best_mode; zero off-identity modes needed
  splash: PASS — splash_colors empty; zero off-core nonland cards
```
