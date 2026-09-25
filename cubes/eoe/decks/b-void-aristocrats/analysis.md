---
deck_name: "b-void-aristocrats"
cube_id: "eoe"
cube_slug: "eoe"
colors: "B"
format: "40-card"
built_at: "2026-08-07T17:55:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
17x  Swamp                         
```

### CREATURES (13)

```
CMC  Card                          Qty  Color  Role                              Rar
  2  Lightless Evangel             x1   B      Payload/Payoff                    U
  2  Timeline Culler               x2   B      Enabler/Fodder                    U
  2  Umbral Collar Zealot          x2   B      Engine/Outlet                     U
  3  Insatiable Skittermaw         x1   B      Payload/Payoff                    C
  3  Susurian Voidborn             x2   B      Payload/Payoff                    U
  3  Xu-Ifit, Osteoharmonist       x1   B      Engine/Outlet                     R
  4  Elegy Acolyte                 x1   B      Payload/Payoff                    R
  4  Swarm Culler                  x2   B      Engine/Outlet                     C
  5  Alpharael, Stonechosen        x1   B      Payload/Payoff                    M
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                          Qty  Color  Role                              Rar
  1  Embrace Oblivion              x2   B      Interaction/Disruption            C
  1  Tragic Trajectory             x2   B      Interaction/Disruption            U
  2  Hymn of the Faller            x2   B      Infrastructure/Consistency        U
  3  Scrounge for Eternity         x2   B      Engine/Outlet                     U
```

### OTHER SPELLS (2)

```
CMC  Card                          Qty  Color  Role                              Rar
  3  Dubious Delicacy              x1   B      Interaction/Disruption            U
  4  Sothera, the Supervoid        x1   B      Payload/Payoff                    M
```

## SIDEBOARD (10)

```
Card                          Qty  Color  Role / When to board in                                   Rar
Zero Point Ballad             x1   B      vs wide creature boards; X is chosen and the dead bodies  R
Virus Beetle                  x2   B      vs combo and control when a BODY is wanted as well - a 1/ C
Dauntless Scrapbot            x2   C      vs graveyard decks - one-shot exile of each opponent's gr U
Temporal Intervention         x2   B      vs combo and control - a ONE-mana targeted discard here,  C
Gravkill                      x2   B      vs recursive or death-trigger threats and stationed Space C
Vote Out                      x1   B      vs a single large or high-toughness threat Tragic Traject U
```

## ANALYSIS

### DECK IDENTITY

Mono-Black Void Aristocrats. Every permanent here is disposable and every death is paid for twice. Umbral Collar Zealot's 'Sacrifice another creature or artifact: Surveil 1' is free and unlimited, so a permanent can become a death trigger at any time for zero mana - which drains through Susurian Voidborn ('target opponent loses 1 life and you gain 1 life'), grows Lightless Evangel, forces an edict through Sothera, and satisfies the Void condition that upgrades Tragic Trajectory from -2/-2 to -10/-10 and switches on Insatiable Skittermaw, Elegy Acolyte's end-step Robot and Alpharael's halve-their-life attack trigger. Xu-Ifit, Osteoharmonist closes the loop: '{T}: Return target creature card from your graveyard to the battlefield' costs nothing, so from turn four the deck manufactures a fresh body every turn purely to eat it, and Timeline Culler recasts itself out of the graveyard for {B} forever. PLAY-PATTERN WARNING: Sothera's end-step clause reads 'if A PLAYER controls no creatures' - that includes us. A line that sacrifices our own last creature to turn on Tragic Trajectory or Alpharael will sacrifice Sothera at our own end step, and returns nothing if Sothera has not exiled anything yet.

**The whole deck is a rules observation about one line of text.** Umbral Collar Zealot reads `Sacrifice another creature or artifact: Surveil 1` — no mana symbol, no tap symbol, no once-per-turn clause. It is a **free, unlimited** sacrifice outlet, and in this cube that single card is what makes an aristocrats deck possible at all. Everything else is built to give it something to eat and to charge admission when it does.

**Void is not a bonus here, it is the baseline.** Five mainboard cards key on "a nonland permanent left the battlefield this turn or a spell was warped this turn", and Umbral Collar Zealot satisfies the first clause for zero mana at instant speed while Timeline Culler satisfies the second without spending a permanent at all:

| Card | Off | On (Void) |
|---|---|---|
| Tragic Trajectory | `-2/-2` | **`-10/-10`** for `{B}` |
| Insatiable Skittermaw | 2/2 menace | grows every end step |
| Elegy Acolyte | 4/4 lifelink | + a 2/2 Robot every end step |
| Alpharael, Stonechosen | 3/3 ward | **defending player loses half their life** |
| Temporal Intervention (SB) | `{2}{B}` | **`{B}`** targeted discard |

**The Xu-Ifit engine is a zero-card loop.** `{T}: Return target creature card from your graveyard to the battlefield. It's a Skeleton in addition to its other types and has no abilities.` The ability-stripping that makes Xu-Ifit awkward in most decks is irrelevant here, because the returned body's only job is to die: it costs no mana and no card, Umbral Collar Zealot eats it for free, and that single sacrifice simultaneously drains 1 through each Susurian Voidborn, forces an edict through Sothera, grows Lightless Evangel, and switches on all five Void cards above. Twelve of the 23 nonland cards are creatures, so there is almost always a target.

**Timeline Culler is the second perpetual-motion piece.** `You may cast this card from your graveyard using its warp ability. Warp—{B}, Pay 2 life.` Warp exiles it at the beginning of the next end step — but sacrificing it to Umbral Collar Zealot *before* that delayed trigger resolves sends it to the graveyard instead of exile, where it can be cast again next turn. `{B}` and 2 life buys a 2/2 haste attacker, a free sacrifice, a surveil, and a Void trigger, every single turn.

**A trap this deck must play around.** Sothera's second ability reads `At the beginning of your end step, if a player controls no creatures, sacrifice Sothera...`. **"A player" includes you.** The natural line — sacrifice your last creature to Umbral Collar Zealot to turn on Tragic Trajectory or Alpharael — will sacrifice Sothera at your own end step, and if Sothera hasn't exiled anything yet you get nothing back for it. Keep one body on the battlefield through your end step whenever Sothera is out.

**Why mono-black.** The shortlist named this pipeline BG, and green genuinely has cards this deck would like: Seedship Broodtender is both a sacrifice outlet and a reanimator, and Seedship Impact and Shattered Wings are two of the pool's nine answers to a noncreature permanent — which is exactly the coverage class this deck concedes. The mana overrode them. The cube contains **one** BG dual (Haunted Mire, enters tapped) and **zero** untapped-capable BG duals, while five cards here demand double black: Sothera, Alpharael, Elegy Acolyte, Xu-Ifit and Timeline Culler. Seventeen basic Swamps cast all of them on curve at a 0.0pp colour gap; a split base would not.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:7  3:7  4:4  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  sac_outlet: 9 copies (effective 6.5: Swarm Culler@0.8, Swarm Culler@0.8, Embrace Oblivion@0.6, Embrace Oblivion@0.6, Scrounge for Eternity@0.6, Scrounge for Eternity@0.6, Dubious Delicacy@0.5) → p=0.92 (need ≥ 0.75)
  PASS  death_payoff: 6 copies (effective 5.4: Lightless Evangel@0.8, Elegy Acolyte@0.8, Insatiable Skittermaw@0.8) → p=0.87 (need ≥ 0.75)
  PASS  fodder: 6 copies (effective 4.9: Xu-Ifit, Osteoharmonist@0.9, Scrounge for Eternity@0.7, Scrounge for Eternity@0.7, Elegy Acolyte@0.6) → p=0.84 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 62%  T2 96%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Sothera, the Supervoid, Umbral Collar Zealot
  OK        single_large_threat: Embrace Oblivion, Tragic Trajectory, Dubious Delicacy
  CONCEDED  noncreature_permanents: The pool contains nine cards that destroy or exile a noncreature permanent: four white, two green, one red, and two colourless that this deck cannot realistically activate (Thaumaton Torpedo's {6} activation discounts only if you attacked with a Spacecraft; Extinguisher Battleship costs {8}). Mono-black has none. Reaching the green ones would mean adding a second colour to a deck with six double-black pips across three payoffs. Partial mainboard cover: Embrace Oblivion x2 destroys a Spacecraft (22 of the pool's 74 artifacts) and sideboard Gravkill x2 exiles one.
  CONCEDED  stack: A pool-wide search for 'counter target' returns three cards, all mono-blue. Black has zero stack interaction here. The deck's substitute is proactive hand attack from the sideboard (Temporal Intervention x2 at effectively one mana, Virus Beetle x2) and a board it rebuilds from death triggers rather than protects.
  CONCEDED  graveyard: Dauntless Scrapbot ('exile each opponent's graveyard') is the sideboard answer at 2 copies. Maindecking graveyard hate would cost sacrifice fodder or a death payoff, and with Xu-Ifit now in the list this deck uses its own graveyard, so symmetrical hate is a cost to us as well.
```

- All Phase 6b checks PASS: curve PASS (MV distribution 1:4 2:7 3:7 4:4 5:1), assembly PASS at thesis turn 7 (sac_outlet 6.5 effective p=0.92, death_payoff 5.4 p=0.87, fodder 4.9 p=0.84), goldfish PASS (87% keepable), coverage PASS. No WARN flags.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Excess mana has four sinks, none of which is a free ability: Scrounge for Eternity x2 at {2}{B} plus the Lander's own {2} crack; Dubious Delicacy's '{2}, {T}, Sacrifice this artifact: Target opponent loses 3 life'; Alpharael at {3}{B}{B} and Elegy Acolyte at {2}{B}{B} as genuine top-end; and Timeline Culler's 'Warp-{B}, Pay 2 life' recast from the graveyard every turn. Explicitly NOT claimed: Umbral Collar Zealot and Swarm Culler both convert zero mana - Swarm Culler's trigger is 'whenever this creature becomes tapped', which costs nothing. |
| screw | mitigation | Eleven of the 23 nonland cards cost 1 or 2 (curve 1:4, 2:7), so a two-land hand has a full first three turns, and Hymn of the Faller x2 at {1}{B} digs. The mana base is 17 basic Swamps against 100% black demand, so colour screw is structurally impossible - only quantity. Explicitly NOT claimed: Scrounge for Eternity is a 3-mana sorcery that also demands a permanent as an additional cost, so it is not a screw mitigation. |
| decapitation | mitigation | There is no single key card. Three cards carry a literal dies-trigger (Susurian Voidborn x2, Sothera) and three more pay off the same activity through different triggers (Lightless Evangel on sacrifice, Insatiable Skittermaw and Elegy Acolyte on the Void condition), against nine sacrifice outlets spread across five distinct cards (Umbral Collar Zealot x2, Swarm Culler x2, Embrace Oblivion x2, Scrounge for Eternity x2, Dubious Delicacy). Killing a payoff on sight also feeds the remaining payoffs, since the dead creature is itself a death trigger. |
| gas-out | mitigation | Four refuel lines, and unlike the pre-grill version two of them are unconditional: Hymn of the Faller x2 ('Surveil 1, then you draw a card and lose 1 life' plus a second card whenever Void is live, which Umbral Collar Zealot supplies for free) is straight card advantage; Swarm Culler x2 converts a permanent into a card every turn it taps; Elegy Acolyte draws on combat damage and mints a 2/2 Robot each end step the engine runs; and Xu-Ifit turns the graveyard itself into a body every turn for zero cards. Timeline Culler recurs from the graveyard for {B}, so an empty hand still has a play. |
| raced | mitigation | This is the mode the build is best against. Susurian Voidborn gains 1 life on every creature or artifact death including our own creatures dying to opposing removal; Elegy Acolyte has lifelink; Dubious Delicacy gains 3 life; and Tragic Trajectory at {B} for -10/-10 answers the largest body in the cube for one mana whenever a permanent has already left the battlefield that turn, which Umbral Collar Zealot guarantees for free. |
| disruption-fizzle | accepted | The critical turn here is diffuse rather than singular, but a counterspell on Sothera or Alpharael on the turn it is cast is unanswerable: a pool-wide search for 'counter target' returns exactly three cards, all mono-blue, and black has none. Mitigating would require a second colour, which the colour_decision shows costs the mana consistency five double-black cards depend on. The partial cover is that the engine's floor - Umbral Collar Zealot plus Susurian Voidborn, both uncommons at two copies each - is cheap enough to redeploy the following turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Meltstrider Eulogist (U) | 'Whenever a creature you control with a +1/+1 counter on it dies, draw a card' - only Lightless Evangel and Insatiable Skittermaw acquire counters here, 2 of 23 nonland cards, and both are creatures the deck wants to keep alive. |
| Comet Crawler (C) | its sacrifice is attack-triggered only, so it cannot convert a permanent on the opponent's turn or on a turn it is held back to block. |
| Beamsaw Prospector (C) | good self-replacing fodder, but cut at the grill for Xu-Ifit and Timeline Culler, which supply a body every turn AND attack; its Lander also fixes mana this mono-colour deck does not need. |
| Gravpack Monoist (C) | dies into a 2/2 Robot, so it is two fodder bodies per card - cut for the same reason as Beamsaw Prospector, and its 2/1 flying body dies to everything. |
| Voidforged Titan (U) | its Void end-step draw is on-theme, but at {4}{B} it is the most expensive non-payoff against a curve that peaks at 3; Elegy Acolyte at {2}{B}{B} draws AND makes a body. |
| Nutrient Block (C) | one-mana artifact fodder that draws when it hits the graveyard, but any of the deck's six free-or-cost outlets already put it there, and the slot is better spent on fodder that also attacks. |
| Susurian Dirgecraft (U) | a second edict alongside Sothera, but at mana value 5 against a curve peaking at 3, and the sacrifice is opponent-chosen so it removes their worst creature. |
| Chorale of the Void (R) | steals from the DEFENDING player's graveyard, which is a reanimator effect for someone else's cards, not a payoff for this deck's own deaths. |
| Entropic Battlecruiser (R) | its discard-drain wants a discard subtheme; this deck's only discard is two sideboard cards, and at 3/10 it needs 8 charge counters before it attacks at all. |
| Archenemy's Charm (R) | {B}{B}{B} is castable in mono-black, but its three modes are exile-a-creature, return-to-hand and pump - none of which advance a plan built on things dying. |
| Seedship Broodtender (U) | a sacrifice outlet AND a reanimator in one card, and the archetype's signpost - excluded only by the mono-black mana decision, since {B}{G} plus a {3}{B}{G} activation is unreachable on 17 Swamps. |
| Seedship Impact (U) / Shattered Wings (C) | two of the pool's nine answers to a noncreature permanent, and the reason coverage.noncreature_permanents is conceded - both are green and unreachable in a mono-black base. |
| Chrome Companion (C) | considered for the sideboard as repeatable graveyard hate, but 4 of 10 board slots on the graveyard class over-invested against a 31-card dossier count that includes this deck's own cards; Dauntless Scrapbot x2 covers it. |
| Depressurize (C) | considered for the sideboard, but its '-3/-0' whiffs on any creature with power 4 or more, and the mainboard already has Tragic Trajectory at {B} for -10/-10. |
| Edge Rover (U) | a one-mana 2/2 with reach is excellent fodder, but 'each player creates a Lander token' hands the opponent a free ramp artifact, and it is green. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.61   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.15 adj [MV 2.61 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card exceeds 2 copies
rares_mythics_max_1: PASS - Xu-Ifit x1, Elegy Acolyte x1, Sothera x1, Alpharael x1, Zero Point Ballad x1
rare_mythic_total_max_6: PASS - 5 used (Xu-Ifit, Elegy Acolyte, Sothera, Alpharael mainboard; Zero Point Ballad sideboard)
basics_unlimited: 17 Swamp, format-supplied
colours: PASS - mono-black; every card's colour identity is B or colourless
```
