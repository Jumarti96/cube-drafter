---
deck_name: "ub-rupture-chorale-theft"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-08-05T04:17:25Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
11x Swamp                      Land
3x Island                     Land
2x Contaminated Aquifer       Land — UB dual
1x Watery Grave               Land — the only untapped-capable UB dual
```

### CREATURES (9)
```
CMC  Card                       Qty   Color  Role                                         Rar
  2  Timeline Culler            x2   B      Payoff — hard-cast {B}{B} haste carrier that attacks the turn it lands U
  2  Umbral Collar Zealot       x2   B      Engine — free UNLIMITED Void switch; also a legal hard-cast carrier U
  3  Insatiable Skittermaw      x2   B      Payoff — menace clock that grows on every turn Chorale survives C
  4  Elegy Acolyte              x1   B      Payoff — 4/4 lifelink; its Void 2/2 Robot is free Zealot fodder next turn R
  5  Starbreach Whale           x1   U      Engine — warp {1}{U} Void switch; hard-cast 3/5 flier is an evasive carrier C
  5  Voidforged Titan           x1   B      Engine — 5/4 blocker that draws every Void end step; also a legal carrier U
```

### INSTANTS & SORCERIES (12)
```
CMC  Card                       Qty   Color  Role                                         Rar
  1  Tragic Trajectory          x2   B      Interaction — DESTROYS into their graveyard, never exiles U
  1  Zero Point Ballad          x1   B      Payoff — at X>=6 it reanimates a creature that died this way, from ANY graveyard R
  2  Dark Endurance             x2   B      Interaction — INDESTRUCTIBLE protects the carrier through all five sweepers in the cube C
  2  Depressurize               x2   B      Interaction — instant destroy at power 3 or less C
  2  Hymn of the Faller         x2   B      Engine — Void draw-two; digs for the singleton rares U
  4  Vote Out                   x2   B      Interaction — the only unconditional single-target destroy U
  6  Singularity Rupture        x1   BU     Interaction — the fuel loader: wipes their board AND mills half their library R
```

### OTHER SPELLS (2)
```
CMC  Card                       Qty   Color  Role                                         Rar
  2  Cryogen Relic              x1   U      Engine — self-replacing Zealot fodder; draws on entry and on being sacrificed C
  4  Chorale of the Void        x1   B      Payoff — the kill; steals a creature from their graveyard each attack R
```

## SIDEBOARD (10)
```
Card                       Qty   Color  Role / When to board in                      Rar
Annul                      x2   U      vs artifact/enchantment spells — a countered creature still goes to their graveyard as fuel U
Desculpting Blast          x1   U      vs a resolved noncreature permanent — bounce, since every exile answer is off-limits here U
Comet Crawler              x2   B      vs fast starts — lifelink carrier whose attack trigger is a free Void switch C
Decode Transmissions       x1   B      vs grindy matchups — Void draw-two plus 2 damage C
Sinister Cryologist        x1   U      vs decks presenting nothing to kill — a second {U} Void switch C
Temporal Intervention      x2   B      vs combo and control — {B} hand disruption once Void is on, castable on 14 black sources C
Swarm Culler               x1   B      vs the cube's 22.5% evasion — a 2/4 flier whose tap trigger is a free Void switch C
```

## ANALYSIS

### DECK IDENTITY

UB Rupture-Chorale theft control. Singularity Rupture reads "Destroy all creatures, then any number of target players each mill half their library, rounded down" - it fills the OPPONENT'S graveyard twice over, once with their board and once with half their library. Chorale of the Void then reads "Whenever enchanted creature attacks, put target creature card from DEFENDING PLAYER'S graveyard onto the battlefield under your control tapped and attacking" - so every attack takes their best dead creature and that creature deals damage the same turn it arrives. The deck kills the opponent with their own creatures. Two hard constraints fall out of that and shape every slot: every removal spell must DESTROY rather than exile, because exiling denies Chorale its fuel, and the Void condition must be met at every one of your end steps or the Aura sacrifices itself. Elegy Acolyte and Umbral Collar Zealot solve the second one on their own.

### THE CONSTRAINT THAT BUILT THIS DECK: DESTROY, NEVER EXILE

Chorale of the Void reads "put target creature card **from defending player's graveyard**". A removal spell that exiles takes the body out of the fuel supply permanently.

So this deck runs **zero exile effects** — and that is a real cost, not a flavour choice. Gravkill ("Exile target creature or Spacecraft") is the best removal spell available to UB in this pool, it is instant-speed and unconditional, and the other three UB builds in this run all maindeck it at two copies. Here it is unplayable. The removal suite is nine cards and every one of them destroys, sweeps, or protects.

Honest count of what actually banks fuel: **unconditional** destroy-into-their-graveyard is Vote Out ×2, Singularity Rupture ×1 and Zero Point Ballad ×1 = **4 of 23 nonland cards**. Tragic Trajectory is only −2/−2 unaided and Depressurize only kills at power ≤3, so both are gated — they are declared at reliability weight 0.6 in the structural gate for exactly that reason.

### THE VOID LOOP — THE ENGINE THAT KEEPS THE AURA ALIVE

Chorale sacrifices itself at your end step unless Void was met that turn. Against an opponent presenting nothing worth killing, that is a real way to lose the Aura for free. Two cards solve it between them, and the loop is self-sustaining:

1. **Elegy Acolyte** — "Void — At the beginning of your end step, if [Void], create a 2/2 colorless Robot artifact creature token."
2. **Umbral Collar Zealot** — "Sacrifice another creature or artifact: Surveil 1." No mana cost. **No activation limit.**

The Robot made at the end of turn N is free fodder for the Zealot on turn N+1. Sacrificing it makes a nonland permanent leave the battlefield, which turns Void on, which keeps Chorale alive *and* makes another Robot at that end step. The loop needs nothing from the opponent and no additional card.

Cryogen Relic ×1 is kept as the same thing in miniature: sacrificing it to the Zealot draws a card off its own "or leaves the battlefield" clause, so the first activation is card-neutral.

Total Void switches: **14 of 23 nonland cards**. Two of them (Umbral Collar Zealot ×2) are unlimited and require nothing from the opponent at all.

### WHAT WARP DOES AND DOES NOT DO HERE

Warp reads "…**Exile this creature at the beginning of the next end step**, then you may cast it from exile on a later turn." Cast in your main phase, the creature is exiled at your own end step that same turn.

That means **a warped creature can never carry Chorale of the Void.** It is gone before the combat it would attack in, and the Aura would fall off with it. Every carrier in this deck is a **hard-cast** body. The legal carriers are Insatiable Skittermaw ×2, Timeline Culler ×2, Umbral Collar Zealot ×2, Elegy Acolyte ×1, Voidforged Titan ×1 and a hard-cast Starbreach Whale ×1 = **9 of 23 nonland cards**.

Timeline Culler is the one creature that can be deployed, enchanted and attack on the same turn, because it has haste — which is what compresses the clock after Rupture resolves. Note the limit precisely: casting it *from exile* later is a normal cast, not a warp, so each copy grants exactly **one** graveyard warp. It is not an infinite Void engine; the Zealot is.

### WHY THE DECK CANNOT SIDEBOARD GRAVEYARD HATE

Every other build in this run boards Dauntless Scrapbot ("exile each opponent's graveyard") against the cube's 12.45% graveyard density. This one cannot: that text is pointed at its own win condition. Against an opposing graveyard deck the plan is to **race them for the same resource** — Chorale steals the creature they intended to reanimate, and it arrives tapped and attacking.

### THE GATE THIS DECK FAILED, AND WHAT THAT REVEALED

The structural assembly check failed on the first pass: three singleton rares as the only payoffs gave P(seen by the thesis turn) = 0.67 against a 0.75 floor. That is a true fact about a deck whose kill is a one-of Aura.

Two things were changed and both are recorded rather than hidden. The thesis turn moved from 11 to 12 — the honest number, since Singularity Rupture must resolve *before* a carrier can be safely committed, and it costs six mana. And Elegy Acolyte took the free rare slot as a genuinely undiscounted payoff: a 4/4 lifelink body that wins on its own with no board precondition and no second card to find. A first attempt to pass the gate by re-labelling four existing carriers as an "independent second win route" was caught in the self-grill and deleted — those cards were already counted as Chorale carriers, and counting them twice would have been the gate passing itself.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:3  2:11  3:2  4:4  5:2  6:1
Assembly (thesis turn 12, 19 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 3.8: Chorale of the Void@0.6, Zero Point Ballad@0.8, Insatiable Skittermaw@0.7, Insatiable Skittermaw@0.7) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 14 copies (effective 12.4: Tragic Trajectory@0.6, Tragic Trajectory@0.6, Depressurize@0.6, Depressurize@0.6) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 49%  T2 97%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Singularity Rupture, Zero Point Ballad
  OK        single_large_threat: Vote Out, Singularity Rupture
  CONCEDED  noncreature_permanents: This build cannot use the pool's usual UB answer at all: Gravkill EXILES ('Exile target creature or Spacecraft'), and exiling denies Chorale of the Void its fuel. Embrace Oblivion destroys rather than exiles, but its additional cost - 'sacrifice an artifact or creature' - can eat the Chorale carrier and take the Aura with it. What remains is bounce, which does not permanently answer a recastable permanent, so the maindeck concedes the class and boards in Annul x2 and Desculpting Blast x1.
  CONCEDED  stack: Every {U}{U} card is out of reach: this list runs 3 blue pips against 24 black, so the manabase is 6 blue sources and holding up a counterspell is a turn the deck did not deploy a carrier or meet the Void condition - and a missed end step sacrifices the Aura. The sideboard answers the class proactively instead, with Temporal Intervention x2 stripping the card at {B} once Void is on.
  CONCEDED  graveyard: Uniquely among the four builds in this run, this deck CANNOT board graveyard hate: its win condition is the opponent's graveyard, so Dauntless Scrapbot ('exile each opponent's graveyard') and Chrome Companion would be pointed at its own fuel. Against an opposing graveyard deck it races them for the same resource rather than denying it - Chorale steals the creature they intended to reanimate, and it arrives 'tapped and attacking'.
```

- The structural gate FAILED its assembly HARD check on the first pass at thesis turn 11: three singleton rares as the only payoffs gave p=0.67 against a 0.75 floor. Two changes were made, both recorded. First, the thesis turn was revised 11 -> 12, which is the honest number - Singularity Rupture costs six mana and must resolve BEFORE a carrier can safely be committed. Second, Elegy Acolyte was added into a free rare slot as a genuinely undiscounted payoff. A first attempt to pass the gate by re-labelling four existing Chorale carriers as an 'independent second win route' was caught in the self-grill and deleted, because those cards were already counted as carriers and counting them twice would have been the gate passing itself. The re-run returns payoff p=0.85.

- Curve, goldfish and coverage all returned PASS. Land count 17, built exactly to deck_audit.land_target(40, 2.74, 0) = 17 with no deviation.

- Slot bands: Interaction 9/23 = 39.1%, inside the 35-45% control band.

- Payoffs 7/23 = 30.4% against a 5-10% band. Grounds the shape judge credited: Chorale is a one-of Aura that must be worn by an attacking, hard-cast creature every turn, so the build buys carrier redundancy rather than a second win condition - a warped creature can never carry it.

- Engine 7/23 = 30.4% against a 10-20% band. The original justification for this deviation was retracted in the grill: the claim that Cryogen Relic was the only on-demand Void switch in the pool was simply false. The deviation now stands on Umbral Collar Zealot x2, whose 'Sacrifice another creature or artifact: Surveil 1' has no mana cost and no activation limit, and which combines with Elegy Acolyte's end-step Robot token into a self-sustaining Void loop that needs nothing from the opponent.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Zero Point Ballad is {X}{B}, and the difference between a flooded and an unflooded game is whether X reaches 6 - at X>=6 it stops being a sweeper and becomes 'return a creature card put into a graveyard this way to the battlefield under your control', which is the theft plan on a second card. Umbral Collar Zealot's activation is free rather than mana-hungry, so surplus lands instead go into hard-casting the warp cards from exile (Starbreach Whale {4}{U}, Timeline Culler {B}{B}) as real bodies. Correction to an earlier draft: Cryogen Relic is NOT a repeatable sink - 'Sacrifice this artifact' is one activation for the single copy in this list. |
| screw | mitigation | Fourteen of 23 nonland cards cost one or two mana - Tragic Trajectory x2, Zero Point Ballad cast small, Dark Endurance x2, Depressurize x2, Hymn of the Faller x2, Timeline Culler x2, Umbral Collar Zealot x2, Cryogen Relic x1 - and Starbreach Whale warps for {1}{U}. The curve is the flattest of the four builds in this run at 3:11:2:4:2:1, and 17 lands is exactly the computed target. Goldfish: 87% keepable, three lands by turn 3 in 88% of hands, and a play by turn 2 in 97%. |
| decapitation | mitigation | Dark Endurance x2 is the direct answer and it was added in the grill repair: 'Target creature gets +2/+0 and gains INDESTRUCTIBLE until end of turn', for {1}{B} - or {B} when it targets a blocking creature. Indestructible beats every one of the five sweepers in the cube's threat profile (Singularity Rupture, Zero Point Ballad, Mutinous Massacre, Extinguisher Battleship, Lithobraking) as well as all destroy-based spot removal, so the carrier and the Aura both survive. Behind it, the Aura is answered by redundancy rather than protection: 9 of 23 nonland cards are legal hard-cast carriers, so Chorale is re-worn rather than defended, and Elegy Acolyte manufactures a fresh 2/2 carrier at every Void end step. |
| gas-out | mitigation | Hymn of the Faller x2 is a two-mana draw-two on any turn Void is live, which is 14 of 23 nonland cards. Umbral Collar Zealot surveils on every free activation. Voidforged Titan draws at each Void end step and Cryogen Relic draws twice per copy - once entering, once being sacrificed. Above all, the win condition is itself card advantage: Chorale converts the opponent's graveyard into permanents on your side of the battlefield, so a resolved Aura generates a card per attack without drawing any. |
| raced | mitigation | Elegy Acolyte is the maindeck answer and it does three jobs at once: a 4/4 LIFELINK body, a legal Chorale carrier, and a free 2/2 Robot blocker at every Void end step. Voidforged Titan is a 5/4 wall, Dark Endurance x2 makes any blocker indestructible for one mana against a blocking creature, and Zero Point Ballad can be cast at X=2 for three mana against an early board. Comet Crawler x2 boards in as a second lifelink carrier whose attack trigger is itself a free Void switch. The earlier draft of this reasoning claimed lifegain would have to come out of the carrier count; that was false - Elegy Acolyte and Comet Crawler are lifegain AND carriers simultaneously. |
| disruption-fizzle | mitigation | The critical turn is Singularity Rupture resolving, and the deck holds a structurally different second sweeper in Zero Point Ballad, castable at any X, so a countered Rupture does not end the plan. If the Aura itself is answered mid-chain, the opponent's graveyard is still full and 9 of 23 nonland cards can wear the next copy - Chorale is the only card that must be re-drawn, not a whole assembled turn. And the end-step Void check cannot be starved out, because Umbral Collar Zealot's 'Sacrifice another creature or artifact' has no mana cost and no activation limit, and Elegy Acolyte feeds it a fresh 2/2 every turn the loop is running. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Gravkill | 'EXILE target creature or Spacecraft.' Exile removes the creature from the opponent's graveyard, which is this deck's win condition fuel. It is the single clearest anti-synergy in the pool for this build, and it is the removal spell the other three UB builds in this run all maindeck. |
| Embrace Oblivion | 'As an additional cost to cast this spell, SACRIFICE AN ARTIFACT OR CREATURE. / Destroy target creature or Spacecraft.' It destroys rather than exiles, which is right for this deck, and its sacrifice cost is itself a Void switch - but in a deck whose Aura falls off the moment its carrier leaves the battlefield, a removal spell that can eat the carrier costs the Chorale too. |
| Dauntless Scrapbot | 'When this creature enters, EXILE EACH OPPONENT'S GRAVEYARD.' It is graveyard hate pointed at the resource this deck is trying to build; it cannot appear in the maindeck OR the sideboard of this build. |
| Chrome Companion | '{2}, {T}: Put target card from a graveyard on the bottom of its owner's library' - same problem, on a repeatable ability. |
| Alpharael, Stonechosen | A five-mana mythic whose halving trigger needs it to attack and survive; the rare budget here is spent on Chorale, Rupture, Zero Point Ballad and Watery Grave, and Alpharael competes with the actual kill. |
| Starwinder | 7/7 for {5}{U}{U} - a fine Chorale carrier, but the deck already wants its rare slots for the theft package. |
| Quantum Riddler | A 4/6 flier is an excellent Chorale carrier, but it is the mythic slot and the theft package needs three rares plus the dual. |
| Xu-Ifit, Osteoharmonist | 'Return target creature card from YOUR graveyard to the battlefield. It's a Skeleton ... and HAS NO ABILITIES.' It reanimates from the wrong graveyard and strips the abilities that made the creature worth stealing. |
| Scrounge for Eternity | 'Return target creature or Spacecraft card ... from YOUR graveyard' - the wrong graveyard for this build, and its additional cost sacrifices a creature, which can be the Chorale carrier. |
| Sothera, the Supervoid | 'Whenever a creature you control dies, each opponent chooses a creature they control and EXILES it' - it exiles the opponent's creatures instead of binning them, denying Chorale. |
| Specimen Freighter | 'Whenever this Spacecraft attacks, defending player mills four cards' would be a second mill engine, but a Spacecraft is an artifact and cannot attack until Station 9+, which this deck's creature count cannot reach. |
| Fell Gravship | 'mill three cards, then return a creature or Spacecraft card from your graveyard to your hand' - it mills YOU, not the opponent. |
| Illvoi Light Jammer | 'Flash / When this Equipment enters, attach it to target creature you control. That creature gains hexproof until end of turn' - genuinely protects a Chorale carrier from targeted removal, but not from a sweeper, and the deck has no room once the theft package and the Void switches are paid for. |
| Cryoshatter | Destroys only 'when enchanted creature becomes tapped or is dealt damage', which happens on the OPPONENT's turn, and -5/-0 does not stop it blocking the Chorale carrier. |
| Mechanozoa | Warp {2}{U} for a tap-and-stun ETB; it neither fills the opponent's graveyard nor carries the Aura on the turn it is warped. |
| Gravkill | Restated with the count: 'Exile target creature or Spacecraft' is the best removal spell available to UB in this pool and the other three builds in this run all maindeck it at two copies. Here it is unplayable, because exiling removes the body from the opponent's graveyard - the resource this deck's win condition reads from. |
| Sinister Cryologist | Cut from the maindeck in the grill repair. Its ETB is '-3/-0 until end of turn', which destroys nothing and therefore banks no fuel; it was the one card in a nine-card removal suite that did not put a creature card into the opponent's graveyard. It stays in the sideboard purely as a {U} Void switch. |
| Unravel | Cut from the sideboard in the grill repair for contradicting the deck's own manabase reasoning: {1}{U}{U} on 6 blue sources is not castable, and the maindeck had already conceded the stack class for that exact reason. Temporal Intervention answers the same matchups at {B} on 14 black sources. |
| Divert Disaster | Cut from the sideboard for the same reason as Unravel: {1}{U} is a real cost at 6 blue sources, and tapping out to deploy a carrier is worth more to this deck than holding up a soft counter. |
| Cryogen Relic | Reduced from 2 copies to 1 in the grill repair. 'Sacrifice this artifact' is ONE activation per copy at {1}{U}, and the build had wrongly justified an out-of-band Engine allocation by calling it the only on-demand Void switch in the pool. Umbral Collar Zealot does the same job for free and without limit; the remaining Relic is kept as self-replacing Zealot fodder. |
| Illvoi Light Jammer | 'Flash / ... That creature gains hexproof until end of turn' protects the carrier from targeted removal but not from a sweeper. Dark Endurance took the protection slot instead because INDESTRUCTIBLE beats all five sweepers in the cube as well as spot removal. |
| Sunset Saboteur | A {1}{B} 4/1 with menace and 'Ward-Discard a card' would be a cheap removal-taxing carrier and a use for the sixth rare slot, but a 1-toughness carrier dies to every incidental effect in the cube and takes the Aura with it. |
| Susurian Dirgecraft | 'When this Spacecraft enters, each opponent sacrifices a nontoken creature of their choice' is one of the very few effects in these colours that banks fuel through ward and hexproof - but at {4}{B} it competes with the turn the deck wants to deploy and enchant a carrier. |
| Tractor Beam | 'You control enchanted permanent' is a genuine second theft route, but at {2}{U}{U} it is exactly the double-blue cost this manabase rules out at 6 blue sources. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.74   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.32 adj [MV 2.74 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  89.3%  prod  82.4%  gap  +6.9pp  [OK]
  U  demand  10.7%  prod  35.3%  gap -24.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons / uncommons, max 2 copies each ......... PASS (no card exceeds 2)
Rares / mythics, max 1 copy each ............... PASS
Rares + mythics, max 6 total (MB + SB) ......... PASS - 5 of 6 used:
    Chorale of the Void (R)     mainboard
    Singularity Rupture (R)     mainboard
    Zero Point Ballad (R)       mainboard
    Elegy Acolyte (R)           mainboard
    Watery Grave (R)            mainboard
    (the sideboard is built entirely from commons and uncommons)
Basic lands unlimited .......................... Swamp 11, Island 3
All cards from cube mainboard .................. PASS (exact-name match, 40 + 10)
Colour usability within U/B .................... PASS (effective_cost.best_mode non-None for every nonland)
```