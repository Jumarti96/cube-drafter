---
deck_name: "bg-perfection-midrange"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BG"
format: "40-card"
built_at: "2026-08-09T22:45:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x6   Forest                   basic
  x6   Swamp                    basic
  x2   Eclipsed Realms          enters untapped; name Elf -> any colour for 21 of 23 nonland cards
  x2   Haunted Mire             BG dual, enters tapped
  x1   Overgrown Tomb           BG dual, untapped for 2 life (rare slot)
```

### CREATURES (19)

```
CMC  Card                                             Qty   Color  Role                                Rar
  2  Creakwood Safewright                             x2    B      Threat/Payoff                       U
  2  Lys Alana Informant                              x2    G      Enabler/Infrastructure              C
  2  Scarblade Scout                                  x2    B      Enabler/Infrastructure              C
  3  Eclipsed Elf                                     x2    BG     Enabler/Infrastructure              U
  3  Morcant's Loyalist                               x2    BG     Threat/Payoff                       U
  3  Trystan, Callous Cultivator // Trystan, Penitent Culler x1    C      Threat/Payoff                       R
  3  Vinebred Brawler                                 x2    G      Threat/Payoff                       U
  4  Champions of the Perfect                         x1    G      Threat/Payoff                       R
  4  Dawnhand Eulogist                                x2    B      Threat/Payoff                       C
  4  High Perfect Morcant                             x1    BG     Threat/Payoff                       R
  4  Moon-Vigil Adherents                             x1    G      Threat/Payoff                       U
  5  Gloom Ripper                                     x1    B      Threat/Payoff                       R
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                                             Qty   Color  Role                                Rar
  2  Bogslither's Embrace                             x1    B      Interaction                         C
  2  Nameless Inversion                               x2    B      Interaction                         U
  2  Unbury                                           x1    B      Enabler/Infrastructure              U
```

## SIDEBOARD (10)

```
Card                                             Qty   Color  Role / When to board in                             Rar
Requiting Hex                                    x2    B      Flex — cheap removal vs aggro                       U
Bogslither's Embrace                             x1    B      Flex — second unconditional exile                   C
Chomping Changeling                              x1    G      Hate — artifacts / enchantments                     U
Dawn's Light Archer                              x2    G      Flex — anti-evasion blocker                         C
Unforgiving Aim                                  x2    G      Hate — fliers / enchantments                        C
Rooftop Percher                                  x2    C      Hate — graveyard                                    C
```

## ANALYSIS

### DECK IDENTITY

A BG Elf aggro deck whose creatures are priced as though the graveyard requirement were hard, and which makes it trivial. Creakwood Safewright is a 5/5 body for {1}{B} that enters with three -1/-1 counters and removes one per end step 'if there is an Elf card in your graveyard' — cast on turn 2 it attacks as a 3/3 on turn 3 and reaches 5/5 at the end of turn 4. Scarblade Scout, Lys Alana Informant, Dawnhand Eulogist and Trystan put Elf cards there as a side effect of being bodies you wanted to play anyway, and Nameless Inversion is a changeling removal spell that flips the switch simply by being cast. Morcant's Loyalist converts the resulting board of undercosted Elves into lethal, Champions of the Perfect turns every subsequent creature spell into a card, and Gloom Ripper — whose X counts Elves on the battlefield PLUS Elf cards in the graveyard — turns a stalled attack into a kill. The graveyard here is a switch, not an engine: it is on by turn 2 and never turns off.


### THE SWITCH, COUNTED

The whole deck is priced off one binary clause. Four different cards read *"if there is an Elf card in your graveyard"* or count Elf cards there, and the condition is satisfied by **21 of the 40 cards in this list** ending up in the yard by any means. It is flipped by 9 enabler copies, one of which — Nameless Inversion — cannot fail: it is a Kindred Instant with changeling, so casting it *is* putting an Elf card in your graveyard.

| Payoff | What the switch buys | Copies |
|---|---|---|
| Creakwood Safewright | 5/5 body for {1}{B} (3/3 on T3, 5/5 at end of T4) | 2 |
| Dawnhand Eulogist | 4-point life swing per copy, no combat needed | 2 |
| Morcant's Loyalist | anthem across 18 other creature copies + rebuy on death | 2 |
| Trystan | 2 life per Cultivator flip, 2 drain per Culler flip | 1 |
| Gloom Ripper | X = Elves on board + Elf cards in yard | 1 |
| Moon-Vigil Adherents | +1/+1 per creature you control AND per creature card in the yard | 1 |

### WHY THE ENABLERS ARE NOT A TAX

The Engine/Infrastructure slot runs 7 of 23 nonland cards (30.4%) against an aggro band of 0-10%. That deviation is the deck, not a flaw in it: six of those seven are attacking Elf bodies (Lys Alana Informant 3/1, Scarblade Scout 2/2 lifelink, Eclipsed Elf 3/2), each pumped by Morcant's Loyalist and each counted by Gloom Ripper's X. Only Unbury is a non-body. A conventional aggro deck pays for its card selection in tempo; this one is paid in Elf count twice over.

### ECLIPSED REALMS IS A BETTER DUAL THAN THE RARE ONE

Eclipsed Realms names a creature type and then taps for *"one mana of any color. Spend this mana only to cast a spell of the chosen type."* With Elf named, that pays coloured costs for **21 of the 23 nonland cards** — every card except Bogslither's Embrace and Unbury — and unlike Haunted Mire it enters untapped. Two copies of an uncommon do more work here than Overgrown Tomb, which costs one of only five rare slots for the privilege of paying 2 life.

### PLAY PATTERN

Turn 2 is Creakwood Safewright or a mill body; turn 3 is Morcant's Loyalist, which retroactively makes every previous two-drop a real threat. From turn 4 the deck is attacking with 3/3s and 4/4s that cost two mana, and it has two ways to finish through a stalled board that do not require winning combat: Dawnhand Eulogist drains 2 per copy on entry, and Gloom Ripper at five mana turns one attacker into a lethal one while stripping the blocker's toughness. Champions of the Perfect is the concession to attrition — behold and exile an Elf, get a 6/6 that draws a card off each of the 18 remaining creature copies, and get the exiled card back when it leaves.

### AGAINST THE REST OF THE CUBE

The cube's largest threat classes are evasion (41 cards, 15.8%) and graveyard interaction (39 cards, 15.0%). This deck answers neither from the mainboard by design — it has no flier and no reach, and its own graveyard is its resource. Both are sideboard problems: Dawn's Light Archer x2 (Flash, Reach) and Rooftop Percher x2. Sweepers are almost absent from this cube (2 cards, 0.77%), which is the main reason a go-wide ground deck is a defensible competitive choice here.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  2:10  3:7  4:5  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies → p=0.96 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 7.46: Scarblade Scout@0.78, Scarblade Scout@0.78, Dawnhand Eulogist@0.9, Dawnhand Eulogist@0.9, Lys Alana Informant@0.6, Lys Alana Informant@0.6, Trystan, Callous Cultivator // Trystan, Penitent Culler@0.9) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 90%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: High Perfect Morcant, Gloom Ripper, Nameless Inversion
  OK        single_large_threat: Bogslither's Embrace, Gloom Ripper, Nameless Inversion
  CONCEDED  noncreature_permanents: Zero mainboard answers; the cube's artifact density is 4.2% (11 cards) and enchantment density 8.1% (21 cards), and both classes are answered from the sideboard by Chomping Changeling ('destroy up to one target artifact or enchantment') and Unforgiving Aim x2 ('Destroy target enchantment') — maindecking situational answers would cost the threat density the turn-6 clock depends on.
  CONCEDED  stack: The BG portion of this cube contains no counterspells at all, so no mainboard or sideboard answer exists; the deck's response to being countered is redundancy — 21 of its 23 nonland cards are Elf cards and 10 of the 23 cost two or less, so it rebuilds rather than protects.
  CONCEDED  graveyard: This deck's own graveyard is its primary resource — 6 distinct cards / 9 copies read it (Creakwood Safewright x2, Morcant's Loyalist x2, Dawnhand Eulogist x2, Trystan, Gloom Ripper, Moon-Vigil Adherents) — so mainboard graveyard hate is anti-synergistic; Rooftop Percher x2 ('exile up to two target cards from graveyards') is held in the sideboard for the graveyard mirror, which the dossier sizes at 39 cards / 15.0% density.
```

- No WARN-tier flags to respond to — curve, assembly, goldfish and coverage all returned PASS, both on the first run and after the Phase 9 repair.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Trystan is a repeatable one-mana sink every single turn: 'At the beginning of your first main phase, you may pay {B}. If you do, transform Trystan' and the reverse face pays {G}, each transform milling three and the Penitent Culler face draining two. Unbury is an instant-speed two-mana sink that turns a flooded turn into two cards: 'Return two target creature cards that share a creature type from your graveyard to your hand' — 20 of the 23 nonland copies are Elf creatures, so the two-card mode is live whenever two have been binned. Eclipsed Elf x2 filters a flooded draw: 'look at the top four cards of your library. You may reveal an Elf, Swamp, or Forest card from among them and put it into your hand.' |
| screw | mitigation | 10 of the 23 nonland cards cost two or less and the goldfish check reports 86% keepable hands with 3 lands by turn 3 in 88%. On two lands the deck still deploys Creakwood Safewright ({1}{B}), Scarblade Scout, Lys Alana Informant, Nameless Inversion and Unbury. Eclipsed Elf digs four deep specifically for lands: 'reveal an Elf, Swamp, or Forest card from among them and put it into your hand' — 6 Swamps and 6 Forests are live hits. |
| decapitation | mitigation | There is no single key piece — the graveyard switch is flipped by 9 enabler copies and read by 9 payoff copies. The nearest thing to a linchpin, Morcant's Loyalist, replaces itself when answered: 'When this creature dies, return another target Elf card from your graveyard to your hand.' Both Creakwood Safewright and Morcant's Loyalist are run at 2 copies precisely so that removal on sight is a one-for-one trade, not a plan-ending answer. |
| gas-out | mitigation | Champions of the Perfect is the deck's true draw engine: 'Whenever you cast a creature spell, draw a card' — 20 of the 23 nonland copies are creature spells, so every subsequent deployment replaces itself. Unbury is a two-mana instant draw-two off a graveyard the deck is already filling ('Return two target creature cards that share a creature type'). Morcant's Loyalist x2 and Eclipsed Elf x2 are replacements rather than net gains — the Loyalist has already died when it returns 'another target Elf card', so it is card-neutral, not +1. Beyond hand size, the graveyard itself is the reserve: Dawnhand Eulogist's drain and Gloom Ripper's X both scale off cards already milled. |
| raced | accepted | The mainboard has zero flying blockers and zero reach creatures against the cube's 41 evasion cards (15.8% density, concentrated in U at 13 and W at 5). Mitigating means maindecking Dawn's Light Archer x2 ('Flash, Reach') in place of two ground threats, which would cut exactly the turn-2/turn-3 board presence that makes the two-drops outclass their cost by turn 3 — the deck's entire clock and the reason the shape judge picked this build over the reach-and-evasion sketch. The two Archers are held in the sideboard and come in against any flier deck. On the ground the deck is favoured on rate but not uniquely so: Bristlebane Battler ({1}{G}, 6/6 trample ward {2}) exists in the same pool and was declined only because it is a Kithkin and sits outside all four Elf-conditional payoffs. |
| disruption-fizzle | mitigation | The deck has no critical turn to disrupt. Its damage is incremental from turn 3 across 13 threat copies rather than concentrated in one assembly turn, so a counterspell or a removal spell aimed at any single attacker trades one-for-one and leaves the rest of the board attacking. Gloom Ripper is the closest thing to a critical spell, and its trigger — 'target creature you control gets +X/+0 ... where X is the number of Elves you control plus the number of Elf cards in your graveyard' — is an ETB on a 4/4 body, so answering the trigger still leaves a 4/4, and the deck wins without ever casting it. Corroborating the low exposure: the cube contains 2 sweepers total (0.77%) and no BG counterspells. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bloodline Bidding | 'Return all creature cards of the chosen type from your graveyard to the battlefield' at {6}{B}{B} — a genuine payoff, but this build's thesis turn is 6 on combat damage; an eight-mana sorcery is the P3 build's plan, not this one's. |
| Lluwen, Imperfect Naturalist | 'mill four cards, then you may put a creature or land card from among the milled cards on top of your library' — real self-mill, but its token half needs {2}{B/G}{B/G}{B/G} plus a discarded land and counts LAND cards, not Elf cards; it costs a rare slot for a body that does not advance the Elf count. |
| Bloom Tender | 'For each color among permanents you control, add one mana of that color' — in a two-colour deck it taps for at most {B}{G}, a mythic slot spent on a Llanowar Elf; the five rare/mythic budget buys more from Gloom Ripper or Morcant. |
| Dawnhand Dissident | '{T}, Blight 1: Surveil 1' — a one-mana repeatable enabler, but its cast-from-exile clause needs 'removing three counters from among creatures you control', and this list runs only 4 mainboard cards that reliably carry -1/-1 counters; a rare slot for a tapper. |
| Moonshadow | 'This creature enters with six -1/-1 counters on it' and sheds one per permanent card put into a graveyard — a 7/7 for {B} on paper, but it counts PERMANENT cards from anywhere, and this list mills only ~2.6 permanents per activation; a mythic slot for a creature that spends 3-4 turns as a 1/1. |
| Formidable Speaker | 'you may discard a card. If you do, search your library for a creature card' — a tutor plus a discard outlet, but it fetches to hand at sorcery speed on a 2/4 for three; the rare slot competes directly with Gloom Ripper's game-ending combat swing. |
| Selfless Safewright | 'Other permanents you control of that type gain hexproof and indestructible until end of turn' — the best sweeper answer in the identity, but at {3}{G}{G} with convoke it is a rare slot spent on protection, and the dossier counts only 2 sweepers in the whole cube. |
| Darkness Descends | 'Put two -1/-1 counters on each creature' — symmetrical, and this deck's own board is a wide field of x/1s and x/2s (Lys Alana Informant 3/1, Iron-Shield Elf 3/1, Vinebred Brawler 4/2); it kills more of mine than theirs. |
| Blight Rot | 'Put four -1/-1 counters on target creature' at {2}{B} sorcery-speed-equivalent instant — strictly worse than Bogslither's Embrace's unconditional exile for one less mana in this list. |
| Dose of Dawnglow | 'Return target creature card from your graveyard to the battlefield' at {4}{B} — real reanimation, but this deck's milled Elves top out around 4 mana of value, so paying 5 to rebuy a 3-drop is worse than Unbury at 2. |
| Dawn-Blessed Pennant | '{2}, {T}, Sacrifice this artifact: Return target card of the chosen type from your graveyard to your hand' — one-shot recursion for 3 total mana off a do-nothing turn-1 artifact; Unbury does it for 2 at instant speed and can return two. |
| Virulent Emissary | 'Deathtouch / Whenever another creature you control enters, you gain 1 life' — a fine blocker, but the lifegain is incidental to a deck whose reach comes from Dawnhand Eulogist's drain, and a 1/1 body does not carry Morcant's Loyalist's +1/+1. |
| Moonglove Extractor | 'Whenever this creature attacks, you draw a card and lose 1 life' — card advantage on a 2/1 for three that must attack profitably; the same slot as Vinebred Brawler's 4/2 must-be-blocked, which advances the clock instead. |
| Gathering Stone | 'Spells you cast of the chosen type cost {1} less' — 22 of the 24 nonland cards in the eventual list are Elf-typed, so the discount is live, but at {4} it costs two full turns of tempo in a deck whose curve tops at 5 and whose thesis turn is 6. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color' — real acceleration, but it taps the very Elves whose job is attacking and adds nothing to the Elf count in any zone. |
| Foraging Wickermaw | 'When this creature enters, surveil 1' plus a mana ability — a colourless Scarecrow, so milling it or playing it adds zero to the Elf-cards-in-graveyard count that four of this deck's payoffs read. |
| Mornsong Aria | 'Players can't draw cards or gain life' — symmetric hate that turns off this deck's own Champions of the Perfect draw and Dawnhand Eulogist / Scarblade Scout lifegain; a rare slot spent working against the list. |
| Mutable Explorer | 'create a tapped Mutavault token' — a changeling body plus a land, but the token taps for {C} only, which does not cast a single {B} or {G} pip in this deck. |
| Bristlebane Battler | 'enters with five -1/-1 counters ... Whenever another creature you control enters ... remove a -1/-1 counter' — a 6/6 for two in the abstract, but it is a Kithkin, so it is neither pumped by Morcant's Loyalist nor counted by any Elf payoff, and it costs a rare slot. |
| Champion of the Weird | 'behold a Goblin and exile it' — the deck contains zero Goblins, so the additional cost cannot be paid from the board and requires revealing a Goblin card from hand; uncastable here. |
| Celestial Reunion | 'behold two creatures of that type ... Search your library for a creature card with mana value X or less' — a real tutor, but at {X}{G} plus beholding two Elves it costs 4-5 mana to put a 2-drop onto the battlefield, and it is a mythic slot. |
| Boggart Mischief | 'Whenever a Goblin creature you control dies, each opponent loses 1 life' — the deck plays zero Goblins; the drain trigger is blank. |
| Rooftop Percher | 'exile up to two target cards from graveyards' — it exiles from ANY graveyard including your own, and a 5-mana 3/3 flier is off this curve; it belongs in the sideboard against a graveyard mirror, if anywhere. |
| Dundoolin Weaver | 'if you control three or more creatures, return target permanent card from your graveyard to your hand' — conditional recursion on a 2/1 Kithkin that no Elf payoff counts; Graveshifter is unconditional and is an Elf card. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.49 adj [MV 2.87 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  60.0%  prod  58.8%  gap  +1.2pp  [OK]
  G  demand  40.0%  prod  58.8%  gap -18.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
copy_limits:           PASS — commons/uncommons at most 2; rares/mythics at most 1 each.
rare_mythic_budget:    5 of 5 used, at the cap: Trystan, High Perfect Morcant, Gloom Ripper, Champions of the Perfect (all mainboard spells) and Overgrown Tomb (mainboard land). The sideboard contains zero rares.
bogslither_split:      Bogslither's Embrace is a common: 1 mainboard + 1 sideboard = 2 total, within the 2-copy limit.
basics:                Swamp 6 + Forest 6 — format-supplied, exempt from copy limits.
colour_legality:       All distinct nonland cards return a usable mode from effective_cost.best_mode(card, ['B','G'], []); none is included on an off-identity alternate mode.
```
