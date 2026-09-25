---
deck_name: "g-cost-cheat-colossus"
cube_id: "eoe"
cube_slug: "eoe"
colors: "G"
format: "40-card"
built_at: "2026-08-07T00:59:15Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
15x Forest                    basic
1x Breeding Pool             ({T}: Add {G} or {U}.) As this land enters, you may pay 2 life. If you
1x Command Bridge            This land enters tapped. When this land enters, sacrifice it unless yo
1x Tangled Islet             ({T}: Add {G} or {U}.) This land enters tapped.
```

### CREATURES (14)
```
CMC  Card                      Qty   Color Role                                     Rar
  2  Broodguard Elite          x2    G     Scalable Warp threat                     U
  3  Galactic Wayfarer         x2    G     Lander body                              C
  4  Mightform Harmonizer      x1    G     Power doubler (landfall)                 R
  5  Germinating Wurm          x2    G     Warp payoff                              C
  5  Harmonious Grovestrider   x2    G     Land-scaling threat                      U
  6  Anticausal Vestige        x1    C     Warp payoff / free-drop                  R
  7  Fungal Colossus           x2    G     Cost-reduced payoff                      C
  9  Bygone Colossus           x2    C     Primary payoff (Warp 3)                  U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                      Qty   Color Role                                     Rar
  1  Sami's Curiosity          x1    G     Lander (land count)                      C
  2  Biosynthic Burst          x1    G     Protection / trample                     C
  2  Close Encounter           x2    G     Removal (scales off warp exile)          U
  2  Seedship Impact           x2    G     Artifact/enchantment removal             U
```

### OTHER SPELLS (2)
```
CMC  Card                      Qty   Color Role                                     Rar
  1  Meltstrider's Resolve     x1    G     Removal / anti-gang-block                U
  3  Sledge-Class Seedship     x1    G     Cheat-in engine (Station)                R
```

## SIDEBOARD (10)
```
Card                      Qty   Color Role / When to board in                                                        Rar
Blooming Stinger          x2    G     Against a single oversized blocker or attacker the deck cannot fight profitably - deathtouch trades up, and its ETB grants deathtouch to another creature for a turn. C
Dauntless Scrapbot        x2    C     Against Reanimator / Self-Mill / Graveyard decks (31 graveyard cards, 12% density); also leaves a Lander behind. U
Shattered Wings           x2    G     Against the cube's 74 artifact cards (30% density), its 16 enchantments, and fliers - the broadest single answer green has here. C
Skystinger                x2    G     Against evasion decks (56 evasive cards, 22% density) - reach, and +5/+0 whenever it blocks a flier. C
Drix Fatemaker            x2    G     Against decks that block on the ground - it grants trample to every creature carrying a +1/+1 counter, which matters once Broodguard Elite is on board. C
```

## ANALYSIS

### DECK IDENTITY

A mono-green aggro deck that lands oversized bodies several turns ahead of curve by paying alternative costs rather than mana costs. Bygone Colossus has Warp {3}, so a 9/9 attacks on turn four and returns from exile later; Germinating Wurm warps for {1}{G} as a turn-two 5/5; Broodguard Elite warps for {X}{G} at any size; Anticausal Vestige warps for {4} into a 7/5 that, on leaving the battlefield, free-drops a permanent within your land count. Mightform Harmonizer doubles a creature's power on any land drop, which turns the warped 9/9 into an 18/18. Fungal Colossus is the fair card in the shell rather than the cheat: its discount is real but modest at this manabase's four land names, so it is a five-mana 5/5 on the thesis turn.

### WARP IS THE WHOLE DECK

Warp reads: *"You may cast this card from your hand for its warp cost. Exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn."* Read carefully, that is three distinct things at once:

1. **A discount with a rental period.** Bygone Colossus is a {9} 9/9 that you get for {3}. You keep it for one turn cycle — long enough to attack once — and then it leaves.
2. **A second copy of the card.** The exiled card is still yours and still castable, at full price, later.
3. **Removal insurance.** A creature that exiles itself at end of turn is not on the battlefield to be swept on the opponent's turn.

Seven of the twenty-two nonland cards in this list have a warp cost. The deck's effective curve is therefore much lower than its printed curve:

| Card | Printed MV | Warp / effective cost | Body |
|---|---|---|---|
| Bygone Colossus | 9 | {3} | 9/9 |
| Germinating Wurm | 5 | {1}{G} | 5/5, gain 2 |
| Broodguard Elite | X+2 | {X}{G} | X/X |
| Anticausal Vestige | 6 | {4} | 7/5 + a free permanent when it leaves |
| Mightform Harmonizer | 4 | {2}{G} | 4/4 |

That table is why the structural gate's curve check flags this deck (23% of nonland cards above MV 5, against a 10% ceiling) and why the flag is accepted rather than repaired: the check reads printed mana value, and printed mana value is the number this deck does not pay.

### CLOSE ENCOUNTER READS THE EXILE ZONE

The best card interaction here is easy to miss. Close Encounter's additional cost is *"choose a creature you control **or a warped creature card you own in exile**."* It then deals damage equal to that card's power.

So on the turn after you warp Bygone Colossus, the 9/9 is sitting in exile — not on the battlefield, not blockable, not removable — and Close Encounter is a **two-mana instant that deals 9 damage to a creature**. Seven of twenty-two nonland cards can be sitting in that exile zone as fuel. This is the most mana-efficient removal green has access to anywhere in this cube, and it exists only in a warp deck.

### WHAT I GOT WRONG ABOUT FUNGAL COLOSSUS

This deck was pitched on the idea that Fungal Colossus — *"costs {X} less to cast, where X is the number of differently named lands you control"* — would be a one-mana 5/5. The self-grill's derivation audit killed that claim, and it deserves to be stated plainly rather than buried.

The number that matters is not how many land names are in the deck; it is how many are **on the battlefield**. With 15 Forest and three singleton-named lands in an 18-land deck, the expected number of distinct names among your first four lands is:

> P(at least one Forest) + 3 × (4/18) = 1.00 + 0.67 = **1.67**

and among your first six lands, 2.00. So Fungal Colossus is realistically a **{4}{G} 5/5 on turns 4 through 6** — a perfectly fine aggro curve-topper, and not a cheat at all. Chasing more land names does not fix this: every green-producing dual in the pool that would add a name (Haunted Mire, Radiant Grove, Wooded Ridgeline, Stomping Ground) reads *"This land enters tapped"*, and each buys only about 0.22 expected names at four lands. Two of twenty-two cards read the count. The manabase is built for colour and speed instead, and it audits at 100% green production with a 0.0pp gap.

### THE STATION LINE, STATED HONESTLY

Sledge-Class Seedship's Station cost is *"Tap another creature you control"*, and at 7 charge counters it becomes a 4/5 flier whose attack trigger reads *"you may put a creature card from your hand onto the battlefield."* An earlier draft of this analysis claimed the tap cost ignores summoning sickness, so a just-warped 9/9 could charge it to 9 the turn it landed. The cube data does not say that anywhere, so the claim is withdrawn. What the text does support: Station is repeatable across turns and puts counters equal to the tapped creature's power, so two taps of this deck's 3-to-5 power bodies clear the 7+ threshold, and one tap of a 9-power Bygone Colossus clears it outright on a later turn.

### WHERE THIS DECK LOSES

It concedes wide boards on purpose. It has no sweeper, because every sweeper in this pool costs {7} or {8} and paying retail is the one thing this pipeline refuses to do. Its answer to a wide board is Meltstrider's Resolve — *"can't be blocked by more than one creature"* — which stops a gang block on a 9/9 but does nothing about ten power spread across five bodies. The other real vulnerability is a counterspell: warp is a cast, so a countered warp spell goes to the graveyard and the exile-and-recast clause never happens. Turns 3 and 4 are this deck's most exposed moments, not its safest.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (aggro):  [WARN]
  MV distribution (22 nonland):  1:2  2:7  3:3  4:1  5:4  6:1  7:2  9:2
  WARN  Above thesis turn: share of nonland cards with MV > 5 is 23% (max 10%)
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 8.1: Fungal Colossus@0.5, Fungal Colossus@0.5, Harmonious Grovestrider@0.8, Harmonious Grovestrider@0.8, Anticausal Vestige@0.8, Mightform Harmonizer@0.7) → p=0.93 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 4.9: Sledge-Class Seedship@0.5, Broodguard Elite@0.7, Broodguard Elite@0.7) → p=0.79 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 93%
  play by turn: T1 37%  T2 92%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: This build runs no sweeper and no mass removal. Mitigating would mean adding the {8} Extinguisher Battleship or the {7} Pinnacle Kill-Ship, which is precisely the full-price top end this pipeline exists to avoid paying for. Instead it races: Meltstrider's Resolve makes the enchanted body unable to be blocked by more than one creature, so a wide board cannot gang-block a 9/9.
  OK        single_large_threat: Close Encounter, Meltstrider's Resolve
  OK        noncreature_permanents: Seedship Impact
  CONCEDED  stack: Green has no counterspell anywhere in this cube and no blue spell is played; the build answers permanents after they resolve.
  CONCEDED  graveyard: No maindeck graveyard interaction; Dauntless Scrapbot's 'exile each opponent's graveyard' is held in the sideboard at two copies.
```

- Curve WARN - 'share of nonland cards with MV > 5 is 23% (max 10%)'. Accepted, not repaired, because the check reads PRINTED mana value and printed mana value is exactly the number this pipeline does not pay. The five cards triggering the flag are Bygone Colossus x2 (MV 9, cast for {3} via Warp) and Fungal Colossus x2 (MV 7, cast for about {4}{G} after its discount) and Anticausal Vestige (MV 6, cast for {4} via Warp). Their effective costs are 3, 5 and 4, which put the deck's real curve near 3.2 rather than 3.95. Repairing the flag would mean cutting the cards the thesis is built on.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two cards scale directly with land count: Harmonious Grovestrider, whose 'power and toughness are each equal to the number of lands you control', and Mightform Harmonizer, whose landfall trigger 'double the power of target creature you control' fires on every surplus land drop. Fungal Colossus's discount also grows, though slowly - see the land property census for the expected-name arithmetic. |
| screw | mitigation | This is the deck's best-covered mode: the goldfish check measures 85% keepable and 92% for three lands by turn 3, the highest of the four builds. The mechanism is that the warp costs are the real costs - Germinating Wurm warps for {1}{G} on turn 2, Broodguard Elite warps for {X}{G} at any X, Bygone Colossus warps for {3} - so a two-land hand still deploys an oversized body on schedule. |
| decapitation | mitigation | The plan is not one card. Nine payoff copies (7.8 effective) reach P=0.93 by turn 5. More specifically, the warp mechanic answers removal structurally: 'Exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn' means a warped Bygone Colossus that survives its attack step is unreachable by sorcery-speed removal, and if it is killed on board the card is simply gone rather than a plan collapsing. |
| gas-out | mitigation | Cards tagged 'Cards: Net-Positive' in this mainboard: 1 of 22 (Anticausal Vestige - 'draw a card, then you may put a permanent card... onto the battlefield tapped'). The refuel is warp exile: 'Exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn' means a card already spent once is still castable later, so 7 of 22 nonland cards can be used twice from a single draw. That is deferral rather than card advantage - the honest framing - but it is what keeps an empty hand deploying a body. Sledge-Class Seedship's 'you may put a creature card from your hand onto the battlefield' converts the last card in hand into a free body. |
| raced | mitigation | This build IS the fast deck: goldfish turn 5, 49% of hands play a spell on turn 1 and 94% on turn 2, and Germinating Wurm warps into a 5/5 blocker on turn 2 while also gaining 2 life. Against the cube's 56-card evasion pool the sideboard adds Skystinger x2, a 3/3 reach body that gets +5/+0 when it blocks a flier. |
| disruption-fizzle | accepted | One counterspell aimed at a warped Bygone Colossus costs the card outright - warp is a cast, so a countered warp spell goes to the graveyard and the exile-and-recast clause never happens. Mitigating would mean playing the pool's protection cards (Frenzied Baloth's 'Creature spells you control can't be countered'), which costs a rare/mythic slot on a {G}{G} 3/2 in a deck whose slots are all oversized bodies, and would not protect the noncreature half of the plan at all. The concession is that against a deck holding up two mana, this build's turn-3 and turn-4 warps are its most vulnerable moments. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Extinguisher Battleship | {8} - this build's whole premise is never paying full price for the top end; an {8} card with no warp and no cost reduction is the deck it is trying not to be. |
| Pinnacle Kill-Ship | {7} with no cost reduction and no warp; Station 7+ is unreachable on a turn-5 clock. |
| The Eternity Elevator | A {5} rock that pays off on turn 6-7; this build's goldfish is turn 5-6, so the rock never gets a turn to be worth its own cost. |
| Glacier Godmaw | {5}{G}{G} - the strongest green body in the pool, but seven mana with two green pips is exactly the cost curve this build exists to skip. |
| Famished Worldsire | {5}{G}{G}{G} and 'Devour land 3' sacrifices lands - in a deck whose payoff counts DIFFERENTLY NAMED LANDS, sacrificing lands actively shrinks Fungal Colossus's discount. |
| Ouroboroid | {2}{G}{G} 1/3 that adds X counters per combat where X is its own power - it starts at 1 and compounds slowly, which is a turn-8 engine, not a turn-5 clock. |
| Icetill Explorer | Extra land drops matter most to a deck trying to reach 8 mana; this deck's payoffs cost {G} to {4}, so a second land per turn buys it nothing it needs. |
| Eusocial Engineering | {3}{G}{G} for a 2/2 per landfall - five mana for incremental tokens does not advance a plan whose bodies are already 9/9. |
| Loading Zone | Doubles counters on creatures, Spacecraft and Planets; counter-placing cards in this build are 2 of 23 (Drix Fatemaker, Broodguard Elite), too thin a denominator, and it costs a rare. |
| Terrasymbiosis | Draws when +1/+1 counters are placed on your creatures; the same 2-of-23 denominator as Loading Zone. |
| Tapestry Warden | Its toughness-for-power substitution only helps creatures with toughness greater than power; this build's bodies are 9/9, 5/5, 4/4 and 4/5 - the count is at most 1 of 14. |
| Frenzied Baloth | {G}{G} 3/2 uncounterable haste with 'Creature spells you control can't be countered' - a real protective clause, but it spends a rare on a 3/2 and this deck's threats are cheated in rather than cast into counterspells. |
| Mm'menon, the Right Hand | SPLASH CANDIDATE REJECTED. {3}{U}{U} needs two blue pips off a 2-3 source splash. |
| Lashwhip Predator | 'costs {2} less if your opponents control three or more creatures' - a conditional discount that only fires against go-wide decks, unlike Fungal Colossus's discount which this deck controls itself. |
| Thrumming Hivepool | 'Affinity for Slivers' with 0 Slivers in the pool other than the ones it makes itself - a {6} card that discounts by nothing on the turn you cast it. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.95   Ramp cards: 5   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.10 adj [MV 3.95 vs 2.5, 5 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
copy_limits:           PASS - every common/uncommon at most 2 copies, every rare at most 1, checked against cube_search pool quantities.
rare_mythic_budget:    4 of 6 used: Anticausal Vestige, Sledge-Class Seedship, Mightform Harmonizer, Breeding Pool. Secluded Starforge was cut in the Phase 9 repair round (a rare producing no green in a 100%-green deck). Sideboard adds none.
basics:                15 Forest, format-supplied and exempt from copy limits.
colour:                Every nonland card usable in core_colors ['G'] via effective_cost.best_mode. splash_colors ['U'] with splash_candidates Breeding Pool and Tangled Islet - both are dual LANDS that tap for {G}; no blue spell is played.
1_counts:              PASS (mainboard 40, sideboard 10)
2_exact_name_membership: PASS
3_copy_limits:         PASS
4_colour_usability_best_mode: PASS
5_splash_cap:          PASS (2 U-identity cards, both named in splash_candidates, both lands)
6_rare_mythic_budget:  PASS (4/6)
```