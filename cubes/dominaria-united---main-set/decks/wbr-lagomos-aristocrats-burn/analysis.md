---
deck_name: "wbr-lagomos-aristocrats-burn"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WBR"
format: "40-card"
built_at: "2026-08-19T03:56:38Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  4x Mountain                 basic
  3x Swamp                    basic
  2x Crystal Grotto           untapped, scry 1 on entry, {1} for any colour
  2x Geothermal Bog           B/R dual, enters tapped (Swamp Mountain)
  1x Plaza of Heroes          untapped, any colour for legendary spells / among legends; protects a legend for {3}
  2x Sacred Peaks             R/W dual, enters tapped (Mountain Plains)
  1x Sulfurous Springs        untapped B/R painland - 1 damage per coloured tap
  2x Sunlit Marsh             W/B dual, enters tapped (Plains Swamp)
```

### CREATURES (15)

```
CMC  Card                            Qty   Color  Role                        Rar
  1  Cult Conscript                  x2    B      recursive-fodder            U
  2  Elas il-Kor, Sadistic Pilgrim   x2    WB     death-payoff/drain          U
  3  Balduvian Berserker             x2    R      death-payoff (burn on death)  U
  3  Braids, Arisen Nightmare        x1    B      engine-draw/drain           R
  3  Lagomos, Hand of Hatred         x2    BR     free-death engine           U
  3  Squee, Dubious Monarch          x1    R      recursive legend            R
  4  Garna, Bloodfist of Keld        x2    BR     death-payoff (card on combat deaths, damage on sacrificed deaths)  U
  4  Ratadrabik of Urborg            x1    WB     payoff-primary              R
  5  Hurler Cyclops                  x2    R      sac outlet -> direct damage  U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                            Qty   Color  Role                        Rar
  1  Bone Splinters                  x2    B      removal + guaranteed death  C
  1  Cut Down                        x2    B      removal                     U
  2  Lightning Strike                x2    R      removal + face reach        C
```

### OTHER SPELLS (2)

```
CMC  Card                            Qty   Color  Role                        Rar
  2  Hero's Heirloom                 x2    C      legends payoff: trample + haste  U
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                       Rar
Destroy Evil                    x2    W      enchantment / toughness-4+ answer             C
Knight of Dusk's Shadow         x2    B      opponents can't gain life - protects the drain clock  U
Choking Miasma                  x2    B      sweeper vs wide boards (kicker declined)      U
Hurloon Battle Hymn             x2    R      4 damage to a creature or planeswalker        U
Prayer of Binding               x2    W      flash exile of ANY nonland permanent (evader / artifact / enchantment)  U
```

## ANALYSIS

### DECK IDENTITY

Mardu legends aristocrats-burn. Bodies die on purpose and every death is converted into damage the opponent cannot block. Lagomos, Hand of Hatred manufactures a free death every single turn - it makes a 2/1 trample-haste Elemental at the beginning of combat and sacrifices it at the next end step - while Hurler Cyclops turns any spare creature into 1 damage at any target for {1}, with no per-turn limit, and Bone Splinters buys an unconditional kill with a death attached. Elas il-Kor drains 1 for each death, Garna, Bloodfist of Keld draws a card when an attacking creature dies and deals 1 to each opponent when a non-attacking one does, and Balduvian Berserker's own death is a burn spell. Ratadrabik of Urborg keeps the fuel coming: every legendary creature that dies returns as a non-legendary 2/2 Zombie copy that keeps its abilities, and Hero's Heirloom gives any of the 9 legendary creature copies trample and haste the turn it lands.

### ONE FREE DEATH EVERY TURN, FOR NO CARDS

The engine that makes this deck work is a single line of text on Lagomos, Hand of Hatred: `At the beginning of combat on your turn, create a 2/1 red Elemental creature token with trample and haste. Sacrifice it at the beginning of the next end step.` Every turn, with no card spent and no outlet needed, this deck gets a hasty trampling attacker AND a guaranteed creature death.

That one death is worth a surprising amount, because it is a **non-attacking** death. The token attacks during combat, but it is sacrificed at the beginning of the *end step*, when combat is long over and it is no longer an attacking creature. That distinction is exactly what Garna, Bloodfist of Keld keys on: `Whenever another creature you control dies, draw a card if it was attacking. Otherwise, Garna deals 1 damage to each opponent.` So the free Elemental routes to Garna's **damage** branch, not its draw branch, every single turn.

Stacked on the same death event: Elas il-Kor's `each opponent loses 1 life`, and if the dying thing was legendary, Ratadrabik's Zombie copy.

**A correction the grill forced, worth stating plainly:** the deck runs 2 Lagomos but only ever gets **one** free death per turn, because Lagomos is legendary and the legend rule allows only one on the battlefield. The second copy is redundancy for drawing one, not a doubling of the rate. The same applies to the two Elas il-Kor and the two Garna.

### THE DEATH LEDGER

| Death source | Cost | Rate |
|---|---|---|
| Lagomos Elemental | free | 1 per turn, guaranteed |
| Hurler Cyclops | {1} + a body | unlimited per turn |
| Bone Splinters | {B} + a body | one-shot, but kills anything |
| Braids, Arisen Nightmare | free | 1 per turn, your end step only |
| Combat | — | whatever the opponent blocks |

| Death payoff | What each death is worth |
|---|---|
| Elas il-Kor, Sadistic Pilgrim | 1 life from each opponent |
| Garna, Bloodfist of Keld | 1 damage to each opponent (sacrificed) or a card (attacking) |
| Ratadrabik of Urborg | a non-legendary 2/2 Zombie copy, if the dying creature was legendary |
| Balduvian Berserker | damage equal to its power, when it is the one dying |

### WHY BONE SPLINTERS OVER SPLATTER GOBLIN

The grill produced a count that changed the list: of the cube's 157 creatures, **42 (26.8%)** can be killed by neither Cut Down (`total power and toughness 5 or less`) nor Lightning Strike (3 damage) — Sheoldred, Tyrannical Pitlord, Archangel of Wrath, Rith, Sphinx of Clear Skies and 37 others. Bone Splinters is unconditional and kills every one of them, and its `sacrifice a creature` additional cost is not a drawback here: it is a fourth guaranteed non-attacking death, feeding Elas, Garna and Ratadrabik at the same time it answers the threat. Splatter Goblin, whose death trigger is only `-1/-1 until end of turn`, was the list's own lowest-weighted payoff and made way.

### THE LEGENDS-MATTER PROBLEM, HONESTLY

This is a Mardu deck, and Mardu is not where the legends payoffs live. Across the entire 247-card nonland pool there are exactly **three** legends payoffs castable in W/B/R: Ratadrabik of Urborg, Hero's Heirloom, and Plaza of Heroes. The deck runs all three — Ratadrabik ×1, Hero's Heirloom ×2, Plaza ×1 — which is the maximum the pool allows. Everything else legendary in the list is legendary *incidentally*.

Hero's Heirloom earned its slots on a count: 9 of the 15 creature copies (60%) are legendary, so `As long as equipped creature is legendary, it has trample and haste` is live more often than not, and Equipment stays on the battlefield when the equipped creature dies — which this deck arranges deliberately.

### THE MANA IS BUILT AROUND TWO DOUBLE-RED CASTS

Garna at `{1}{B}{R}{R}` on turn 4 and Hurler Cyclops at `{3}{R}{R}` on turn 5 are the only double-pip costs, and both are red. That is why red gets 12 of 17 sources and why a rare slot went to a *land*: Sulfurous Springs is the only source in the deck that produces B or R **untapped**, and 6 of the other 16 lands enter tapped.

White, by contrast, is deliberately starved: 3 pips across 2 card names (Elas il-Kor and Ratadrabik), never doubled. Aron, Benalia's Ruin (`{W}{W}{B}`) and Tori D'Avenant (`{1}{R}{R}{W}`) were both cut for exactly that reason — either would have forced white to be a real colour and broken the red-black core.

### FOUR CONCEDED COVERAGE CLASSES — AND WHY THAT IS NOT SLOPPINESS

This deck maindecks answers to one of the five threat classes and concedes four. Two of those concessions are properties of the *cube*, not of the deck: no card castable in W/B/R can counter an opponent's spell (all six counterspells in the cube require `{U}`), and the cube contains no graveyard hate at all. The other two are density decisions — the sideboard holds Prayer of Binding ×2 and Destroy Evil ×2 for noncreature permanents, and Choking Miasma ×2 for wide boards, because artifacts and enchantments are 6.1% and 7.3% of the cube and a 23-slot aggro deck cannot afford to maindeck for them.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (23 nonland):  1:6  2:6  3:6  4:3  5:2
  WARN  MV 4+ share: share 22% above band maximum 20%
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  death_payoff: 7 copies (effective 6.2: Balduvian Berserker@0.6, Balduvian Berserker@0.6) → p=0.89 (need ≥ 0.75)
  PASS  death_engine: 7 copies (effective 5.8: Bone Splinters@0.5, Bone Splinters@0.5, Braids, Arisen Nightmare@0.8) → p=0.87 (need ≥ 0.75)
  PASS  legend_fodder: 8 copies → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 72%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Choking Miasma ({1}{B}{B}, uncommon Sorcery, castable in W/B/R with its {G} kicker declined) is the reachable sweeper and it is held in the sideboard rather than the maindeck. Recounted against the final list, 'All creatures get -2/-2 until end of turn' kills 5 of this deck's 15 creatures (Cult Conscript x2, Elas il-Kor x2, Squee) - a third of the board - and this deck is normally the player who is AHEAD on board, so a symmetric sweeper is a card wanted only in games where the race has already gone wrong. Maindeck the deck races width instead: Lagomos, Hand of Hatred manufactures one free 2/1 trample-haste attacker every turn, Elas il-Kor and Garna convert every trade into damage a blocker cannot prevent, and Hurler Cyclops converts each spare body into 1 damage at any target with no per-turn limit.
  OK        single_large_threat: Bone Splinters, Elas il-Kor, Sadistic Pilgrim, Hurler Cyclops, Cut Down, Lightning Strike
  CONCEDED  noncreature_permanents: The only maindeck reach to a nonland permanent is Lightning Strike, whose 'any target' includes planeswalkers but not artifacts or enchantments. The sideboard answers the class properly - Prayer of Binding x2 exiles ANY nonland permanent at flash speed and Destroy Evil x2 destroys an enchantment - and they are boarded rather than maindecked because the cube's artifact density is 15 of 247 nonland cards (6.1%) and its enchantment density 18 of 247 (7.3%), so maindecking them would spend 4 of only 23 aggro slots on classes appearing in fewer than one card in thirteen.
  CONCEDED  stack: Stated precisely: no card castable in W/B/R can counter an OPPONENT'S SPELL. All six 'Counter target ...' effects in this cube - Essence Scatter, Negate, Ertai's Scorn, Protect the Negotiators, Vodalian Hexcatcher and Ertai Resurrected - require {U}. Ward is technically a counter effect and does exist in these colours, including on this deck's own Ratadrabik of Urborg, but ward taxes answers aimed at our permanents; it is not proactive stack interaction. The deck's answer is to present a lethal clock the opponent must respond to on our schedule rather than theirs.
  CONCEDED  graveyard: Stated precisely: this cube contains no graveyard HATE - no card exiles, disrupts or shrinks an opponent's graveyard. Two cards do reach into a graveyard, but to steal from it rather than answer it: The Cruelty of Gix chapter III ('Put target creature card from a graveyard onto the battlefield under your control') and Soul of Windgrace ('you may put a land card from a graveyard onto the battlefield tapped under your control'). The cube's 32-card graveyard-interaction class (13.0%) therefore cannot be disrupted by any deck in this cube, so it is raced on board rather than interacted with.
```

- Curve WARN - MV 4+ is 5 of 23 nonland cards (21.7%) against the Aggro band maximum of 20%. Accepted rather than corrected: the two cards over the line are Hurler Cyclops x2 at mana value 5, the locked build's primary reach outlet ('{1}, Sacrifice another creature: This creature deals 1 damage to any target' - uncapped, no per-turn limit). Cutting one to reach 4 of 23 (17.4%) would halve the only repeatable sacrifice-to-face converter in W/B/R and leave the last points of damage dependent on combat, which is precisely what the chosen 'most reach & evasion' lens exists to avoid. The other three cards at MV 4+ are Garna x2 and Ratadrabik, all named payoffs in the locked thesis. The MV 1 share (6 of 23 = 26.1%) and MV 2 share (6 of 23 = 26.1%) both clear their band minimums of 15% and 25%.

- DISCLOSURE, not a check response: the thesis_turn of 6 is a builder claim derived from the curve and the damage arithmetic, and it is used as evidence in the screw, raced and slot-allocation reasoning. deck_checks.goldfish_sim measures keepable-hand rate and land-drop rate only - it does not measure a clock - so no measurement in this record independently confirms the turn-6 figure.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable mana sinks turn surplus lands into action: Hurler Cyclops' '{1}, Sacrifice another creature: This creature deals 1 damage to any target' has no per-turn limit, Cult Conscript x2 rebuy themselves from the graveyard for {1}{B} every turn something died, and Hero's Heirloom's 'Equip {2}' moves the trample-and-haste bonus onto a fresh legend each turn. Squee, Dubious Monarch recasts itself from the graveyard for {3}{R} - stated with its real cost, which also requires exiling four other cards from the graveyard, and that competes with Cult Conscript for the same yard. Braids, Arisen Nightmare explicitly sacrifices 'an artifact, creature, enchantment, land, or planeswalker' at each end step so a surplus land can become a drawn card and 2 life loss - stated with its real limit, which is that each opponent MAY instead sacrifice a permanent sharing that card type, and against a land they usually will. Crystal Grotto x2 scry on entry. |
| screw | mitigation | 12 of 23 nonland cards cost 2 or less and 6 cost exactly 1. A two-land keep casts Cult Conscript, Cut Down, Bone Splinters, Lightning Strike, Elas il-Kor or Hero's Heirloom on curve. Red and black - the two colours carrying 91% of the pips - are on 12 and 10 of 17 sources respectively, and Sulfurous Springs provides both untapped. The goldfish simulation measured 86% keepable hands and 3 lands by turn 3 in 88%. |
| decapitation | mitigation | Ratadrabik of Urborg has ward {2} and Plaza of Heroes can give it hexproof and indestructible for {3}. It is not the plan on its own: excluding Ratadrabik itself, the death-payoff role holds 6 copies (5.2 effective) across Elas il-Kor x2, Garna x2 and Balduvian Berserker x2, none of which needs Ratadrabik to function; the full role including Ratadrabik is 7 copies / 6.2 effective at p=0.89 by turn 6. Killing the payoff slows the refill; it does not stop the damage. |
| gas-out | mitigation | Garna, Bloodfist of Keld draws a card on every attacking creature's death, which in an attacking deck is the common case; and the board refuels without the hand - Lagomos makes a free 2/1 every turn (one Lagomos at a time, per the legend rule), Cult Conscript x2 return for {1}{B}, Squee returns for {3}{R} plus exiling four graveyard cards, and Ratadrabik returns every dead legend as a Zombie copy. Lagomos also tutors ('{T}: Search your library for a card, put it into your hand') once five or more creatures have died in a turn; that is a real clause but a demanding one - five bodies and the mana to eat them - so it is recorded as upside, not as the plan. |
| raced | mitigation | This deck IS the fast clock - a stated turn-6 goldfish with 12 of 23 nonland cards at 2 mana or less. Against a faster one it has a deathtouch Elas il-Kor blocker that trades up (one at a time on the battlefield, per the legend rule, though the deck runs 2 copies), six one- and two-mana answers (Cut Down x2, Bone Splinters x2, Lightning Strike x2) and Hurler Cyclops, whose damage can be aimed at creatures instead of the face. Elas il-Kor also gains 1 life for every other creature entering, and the sideboard holds Hurloon Battle Hymn x2, which deals 4 to a creature or planeswalker - the 4 damage is reliable, the kicked 4 life needs a white source and is not. |
| disruption-fizzle | accepted | There is no combo turn, but there is a real concentration risk: no card castable in W/B/R anywhere in this cube can counter an opponent's spell, so the deck cannot protect a key turn on the stack at all. Mitigating that would mean adding blue - abandoning the Mardu identity and the red half of the reach package (Hurler Cyclops, Balduvian Berserker, Lightning Strike) the locked lens is built on - or spending more aggro slots on answers, which would push Interaction further past its band and slow the clock the plan depends on. The list accepts it. What blunts it rather than solving it: Plaza of Heroes can protect a legendary creature with hexproof and indestructible for {3}, and Lagomos regenerates a death every turn from a single permanent, so no single answer resets the engine. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Jaya, Fiery Negotiator | Legendary, but a legendary PLANESWALKER - Ratadrabik's trigger reads 'another legendary CREATURE you control dies', so she is not fodder, and she would spend one of only 5 rare/mythic slots. |
| Liliana of the Veil | Same reason as Jaya: a legendary planeswalker is not a Ratadrabik trigger, and her +1 symmetric discard empties an aggressive deck's own hand faster than the opponent's. |
| Rivaz of the Claw | Its mana ability and its graveyard recursion are both restricted to Dragon creature spells; the whole W/B/R pool contains 3 Dragon creature cards and this list runs 0, so both abilities are blank text here. |
| Astor, Bearer of Blades | Its ETB digs seven for an Equipment or Vehicle and its static gives Equipment equip {1}; this list runs 0 Equipment and 0 Vehicles, so the rare slot would buy a vanilla 4/4. |
| Danitha, Benalia's Hope | Legendary 4/4 with a strong body, but {4}{W} in a three-colour aristocrats deck whose curve tops out at 4 and whose white is the third colour; the rare slot is worth more on Ratadrabik or Sheoldred. |
| The Raven Man | Its token engine needs 'a player discarded a card this turn'; this list runs 0 repeatable discard outlets, so the trigger has no reliable enabler. |
| Tori D'Avenant, Fury Rider | {1}{R}{R}{W} demands double red plus white on turn 4 in a three-colour base whose red is the third-heaviest colour; its untap clause also only reads other WHITE attacking creatures, of which this list runs few. |
| Baird, Argivian Recruiter | Its end-step token needs 'a creature with power greater than its base power'; this deck's pump effects are sacrifice-driven and intermittent, so the condition is not reliably on. |
| Karn's Sylex | Symmetric sweeper that would destroy our own board of cheap creatures - the deck's whole plan is having creatures to sacrifice. |
| Karn, Living Legacy | Legendary planeswalker (not a Ratadrabik trigger), and a 4-mana card that produces colourless-restricted Powerstone mana this deck cannot spend on its coloured spells. |
| Golden Argosy | Legendary Vehicle, but it exiles the crew on attack and returns them at the next end step - the legends leave the battlefield without dying, so no death trigger fires anywhere in the deck. |
| Weatherlight Compleated | Legendary artifact with a genuine death trigger, but the 5-rare cap is spent and it accrues counters slowly rather than converting deaths into damage. |
| Temporary Lockdown | Exiles every nonland permanent with mana value 2 or less - a symmetric sweeper against a list whose fodder is concentrated at 1-2 mana. |
| Defiler of Flesh | Rare 4/4 with a black-permanent discount; not legendary, so it feeds no payoff, and it competes for a capped rare slot. |
| Defiler of Instinct | Rare 4/4 with a red-permanent discount; same objection as Defiler of Flesh, and {2}{R}{R} is the wrong shape for a three-colour base. |
| The Elder Dragon War | Rare Saga whose chapter sweeper hits our own board of small creatures as hard as the opponent's; also a capped rare slot. |
| Sengir Connoisseur | A real death payoff, but {3}{B}{B} for a creature that grows only once per turn is slower than this list's turn-6 goldfish allows. |
| Balduvian Atrocity | Its kicked reanimation returns a creature that is sacrificed at the next end step - real synergy, but the kicker is {R} on top of {2}{B} and the returned body is a one-shot rather than a repeatable engine. |
| Phoenix Chick | Recurs itself only when you attack with three or more creatures and pay {R}{R}; it also cannot block, which is the wrong trade for a deck that wants bodies available to sacrifice. |
| Squee, Dubious Monarch | Strong candidate - a legendary creature that recasts itself from the graveyard for repeated Ratadrabik triggers - but recasting costs {3}{R} plus exiling four other cards from the graveyard, and this list has no self-mill to fill it. |
| Blight Pile | Its drain scales with 'the number of creatures with defender you control'; this list runs 1 defender, so it would drain for 1 at a cost of {2}{B} and a tap. |
| Writhing Necromass | Cost reduction scales with creature cards in the graveyard, but Ratadrabik converts our dead legends into board presence rather than leaving them as graveyard fuel. |
| Jaya's Firenado | 5 damage for 5 mana is above this deck's curve; Lightning Strike and Hurloon Battle Hymn cover the same class for 2-3. |
| Hero's Heirloom | Grants +2/+1 plus trample and haste to a legend, but it creates no death and no trigger; the archetype's engine is deaths, not connecting with one large creature. |
| Relic of Legends | Fixes three colours and taps legends for mana, but this build's curve tops at 4 with 12 cards at 2 or less, so a 3-mana rock is a turn the deck would rather spend deploying a body. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.03 adj [MV 2.52 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  45.5%  prod  58.8%  gap -13.3pp  [OK]
  R  demand  45.5%  prod  70.6%  gap -25.1pp  [OK]
  W  demand   9.1%  prod  35.3%  gap -26.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card appears more than 2 times across mainboard and sideboard combined.
rares_mythics_max_1: PASS - Ratadrabik of Urborg, Squee Dubious Monarch, Braids Arisen Nightmare, Plaza of Heroes and Sulfurous Springs are 1 copy each.
rare_mythic_total_max_5: PASS - exactly 5 across mainboard and sideboard; the sideboard is entirely common and uncommon.
basics_unrestricted: Mountain x4, Swamp x3 - format-supplied and exempt from copy limits.
all_cards_from_cube: PASS - exact-name match against the working pool cache for all distinct cards.
colour_legality: PASS - effective_cost.best_mode returns a usable mode within W/B/R for every nonland card. Choking Miasma prints as B/G because of its Kicker {G}; it is played with the kicker declined, best_mode = {'mode':'cast','pips':['B','B'],'conditional':False}.
```
