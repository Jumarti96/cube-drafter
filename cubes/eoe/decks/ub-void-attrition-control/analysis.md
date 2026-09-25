---
deck_name: "ub-void-attrition-control"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-08-05T03:31:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
8x Swamp                      Land
7x Island                     Land
2x Contaminated Aquifer       Land — UB dual
1x Watery Grave               Land — the only untapped-capable UB dual
```

### CREATURES (9)
```
CMC  Card                       Qty   Color  Role                                         Rar
  3  Sinister Cryologist        x2   U      Engine — warp {U}: cheapest Void switch + ETB -3/-0 C
  4  Elegy Acolyte              x1   B      Engine — lifelink stabiliser, free 2/2 every Void end step R
  5  Quantum Riddler            x1   U      Threat — 4/6 flier; warp {1}{U} = draw + Void switch M
  5  Starbreach Whale           x2   U      Engine — warp {1}{U}: surveil 2 + Void; 3/5 flier hard-cast C
  5  Voidforged Titan           x2   B      Engine — 5/4 blocker with a recurring Void draw U
  7  Starwinder                 x1   U      Threat — 7/7 finisher that refuels itself    R
```

### INSTANTS & SORCERIES (12)
```
CMC  Card                       Qty   Color  Role                                         Rar
  1  Tragic Trajectory          x2   B      Interaction — {B} kill spell once Void is on U
  1  Zero Point Ballad          x1   B      Interaction — scalable sweeper               R
  2  Hymn of the Faller         x2   B      Engine — Void draw-two for two mana          U
  3  Decode Transmissions       x2   B      Engine — Void draw-two plus the deck's only reach C
  3  Unravel                    x2   U      Interaction — hard counter                   U
  4  Gravkill                   x2   B      Interaction — unconditional instant exile    C
  6  Singularity Rupture        x1   BU     Interaction — the hard reset                 R
```

### OTHER SPELLS (1)
```
CMC  Card                       Qty   Color  Role                                         Rar
  2  Cryogen Relic              x1   U      Engine — draws on enter AND on sacrifice; instant-speed Void switch C
```

## SIDEBOARD (10)
```
Card                       Qty   Color  Role / When to board in                      Rar
Annul                      x2   U      vs artifact/enchantment spells — cube artifact density 29.7% U
Thaumaton Torpedo          x1   C      vs a RESOLVED noncreature permanent — the pool's only true destroy in these colours C
Divert Disaster            x2   U      vs faster decks — a two-mana tax counter for turns Unravel is too slow C
Dauntless Scrapbot         x2   C      vs graveyard decks — exiles each opponent's graveyard U
Dubious Delicacy           x1   B      vs the fastest starts — flash -3/-3, then sac for 3 life or 3 damage U
Temporal Intervention      x2   B      vs control mirrors and combo — {B} hand disruption once Void is on C
```

## ANALYSIS

### DECK IDENTITY

UB Void attrition control. Eight pieces of interaction trade one-for-one while the Void card-advantage suite — Hymn of the Faller x2, Decode Transmissions x2 and Voidforged Titan x2 — turns each of those exchanges into an extra card, because "a nonland permanent left the battlefield this turn" is exactly what a removal spell does. On turns with no exchange to make, Sinister Cryologist warps for {U}, Starbreach Whale for {1}{U}, or Cryogen Relic is sacrificed at instant speed to switch Void on without needing an opposing target at all. Warp exiles those creatures at your own end step, so they buy an ETB and a Void switch now and return as a 2/3 and a 3/5 flier later. Singularity Rupture or Zero Point Ballad resets any board the one-for-ones lost to, and a hard-cast Quantum Riddler or Starwinder closes from the stabilised position around turn 10.

### THE THESIS IS A COUNT, NOT A SLOGAN

"Removal and card advantage are the same resource here" is testable. Void reads "if a nonland permanent left the battlefield this turn **or a spell was warped this turn**" — so every removal spell that resolves, and every warp cast, upgrades the deck's draw spells for the rest of that turn.

| Void payoffs in this list | Copies |
|---|---|
| Tragic Trajectory (−2/−2 becomes −10/−10) | 2 |
| Hymn of the Faller (draw 1 becomes draw 2) | 2 |
| Decode Transmissions (you lose 2 becomes they lose 2) | 2 |
| Voidforged Titan (draw a card at end step) | 2 |
| Elegy Acolyte (create a 2/2 Robot at end step) | 1 |
| **Total** | **9 of 22 nonland cards** |

| Void switches | Copies |
|---|---|
| Warp casts: Sinister Cryologist ×2, Starbreach Whale ×2, Quantum Riddler, Starwinder | 6 |
| Cryogen Relic (sacrifice — no opposing target needed, instant speed) | 1 |
| Gravkill (unconditional exile) | 2 |
| Tragic Trajectory (only unaided against toughness ≤2) | 2 |
| **Total** | **11 of 22 nonland cards** |

### THE SWEEPERS DO NOT FEED THE TITAN — A TRAP THIS DECK AVOIDS

It is tempting to count Singularity Rupture and Zero Point Ballad as Void switches for Voidforged Titan. They are not. The Titan's trigger is "**At the beginning of your end step**, if…" — it must be on the battlefield when the end step begins. Rupture is "Destroy all creatures," which includes yours; Zero Point Ballad at X ≥ 4 kills a toughness-4 Titan. Both sweepers kill the Titan before it can ever see the trigger.

What the sweepers *do* enable is Void for spells cast **later that same turn** — a post-Rupture Hymn of the Faller is a genuine draw-two — and for a Voidforged Titan hard-cast on a subsequent turn.

The same qualification applies to Zero Point Ballad's supposed asymmetry. At X=5 it kills Voidforged Titan ×2, Starbreach Whale ×2 and Sinister Cryologist ×2 of this deck's own 7 creature copies. Its real distinctness from Rupture is not that it is one-sided — it is that it can be cast **small and early** (X=2 for three mana against a turn-3 aggro board) where Rupture's six mana cannot.

### WHY CRYOGEN RELIC IS THE MOST IMPORTANT COMMON IN THE DECK

Every other Void switch has a precondition. The 6 warp casts are sorcery speed, from hand, and cost a card in hand. The removal spells need a legal opposing permanent — and after this deck resolves its own Rupture, there are none.

Cryogen Relic ({1}{U}, common): "When this artifact enters **or leaves the battlefield, draw a card**. {1}{U}, **Sacrifice this artifact**: Put a stun counter on up to one target tapped creature." It draws on the way in, draws again on the way out, needs no opposing permanent, and works at instant speed — including in your own second main phase to arm the Titan's end-step trigger on a turn where nothing else happened. It is a zero-net-card Void switch, which nothing else in the legal pool is.

### WHAT WARP ACTUALLY BUYS

Warp reads "…**Exile this creature at the beginning of the next end step**, then you may cast it from exile on a later turn." Cast in your main phase, the next end step is your own, that same turn. So a warped creature resolves its ETB, satisfies "a spell was warped this turn" all turn, and returns to be hard-cast from exile later — but it **does not block** and does not attack. Nothing in this deck's defensive plan counts a warped body as a blocker; the blockers are the hard-cast Voidforged Titan (5/4), Elegy Acolyte (4/4 lifelink), and a hard-cast Starbreach Whale (3/5 flier).

### THE CLOCK, GOLDFISHED

Quantum Riddler is the primary finisher: warp it for {1}{U} early to draw a card and switch Void on, then hard-cast the 4/6 flier **from exile** for {3}{U}{U} on turn 5 without it ever occupying a card in hand. Five swings at 4 in the air is 20. Decode Transmissions ×2 under Void contributes 4 more to the face, and a hard-cast Starwinder from turn 8 adds 7 per connection while its trigger — "whenever a creature *you control* deals combat damage" — converts each Riddler connection into 4 fresh cards.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:3  2:3  3:6  4:3  5:5  6:1  7:1
Assembly (thesis turn 10, 17 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.6: Zero Point Ballad@0.8, Starwinder@0.8) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10.2: Tragic Trajectory@0.6, Tragic Trajectory@0.6) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 46%  T2 77%  T3 96%
Coverage:  [PASS]
  OK        wide_boards: Singularity Rupture, Zero Point Ballad, Elegy Acolyte
  OK        single_large_threat: Gravkill, Unravel, Singularity Rupture
  CONCEDED  noncreature_permanents: Corrected after an oracle scan of the whole pool: a true destroy DOES exist in these colours - Thaumaton Torpedo ({1} colourless, '{6}, {T}, Sacrifice this artifact: Destroy target nonland permanent') - and it is in the sideboard. It is conceded from the maindeck on its price: {1} to cast plus {6} to activate is seven mana total, which only an 18-land control deck can reach and only around turn 8. The alternatives are strictly temporary (Desculpting Blast bounces; Lost in Space lets the OWNER choose top or bottom, so a competent opponent redraws it). Annul x2 also boards in to answer the 29.7% artifact class on the stack.
  OK        stack: Unravel
  CONCEDED  graveyard: The maindeck's own plan mills the opponent (Singularity Rupture) and self-mills (Starbreach Whale surveil 2, Hymn of the Faller surveil 1), so a maindeck graveyard-hate card would fight the deck's own Rupture line. Dauntless Scrapbot x2 boards in against the 12.45% of the cube that interacts with graveyards.
```

- Curve, assembly, goldfish and coverage all returned PASS; no WARN flags to answer.

- Slot bands: Interaction 8/22 = 36.4% (inside the 35-45% control band). Threats/Payoffs 2/22 = 9.1% (inside the 5-10% band) - exactly two hard-cast finishers, Starwinder and Quantum Riddler.

- Engine & Infrastructure 12/22 = 54.5% against a 10-20% band. This is the largest deviation in the run and it carries the grounds the shape judge credited when it picked this build: in this pool the Void card-advantage spells ARE the attrition win condition rather than support for one. Elegy Acolyte and Cryogen Relic are counted here rather than as threats or interaction because each was added to answer a specific gap the grill identified - the raced failure mode and the need for a Void switch that requires no opposing permanent - not to add a clock.

- Land count 18, built exactly to deck_audit.land_target(40, 3.50, 0) = 18. No deviation.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | An 18-land control deck expects to flood, and the top of the curve absorbs it: Zero Point Ballad is {X}{B}, so every surplus land raises X (at X=6 it wipes AND returns a creature card put into a graveyard this way to the battlefield under your control), and every warped creature returns from exile to be hard-cast for full value later. Seven of the 22 nonland cards cost 5 or more (Quantum Riddler, Voidforged Titan x2, Starbreach Whale x2, Singularity Rupture, Starwinder). |
| screw | mitigation | Six of 22 nonland cards cost 1-2 mana (Tragic Trajectory x2, Zero Point Ballad cast small, Hymn of the Faller x2, Cryogen Relic), and Sinister Cryologist warps for a single {U}. Goldfish check: 81% keepable, three lands by turn 3 in 92% of hands - the highest turn-3 land figure of the four builds in this run, which is what 18 lands buys. |
| decapitation | mitigation | There is no single key piece. The two sweepers are different cards for different boards - not because Zero Point Ballad is one-sided (at X>=5 it kills 6 of this deck's own 7 creature copies) but because it can be cast small and early at X=2 for three mana where Singularity Rupture's six mana cannot. The two finishers sit on different axes (Starwinder a 7/7 ground body, Quantum Riddler a 4/6 flier), and the card-advantage engine is spread across 7 copies (Hymn x2, Decode x2, Voidforged Titan x2, Cryogen Relic). Answering any one costs the opponent a card while the deck draws another. |
| gas-out | mitigation | This is the mode the deck is built to win. Seven of 22 nonland cards are dedicated draw: Hymn of the Faller x2 drawing two under Void, Decode Transmissions x2 drawing two and draining two, Voidforged Titan x2 drawing every Void end step, and Cryogen Relic drawing on both entry and sacrifice. Quantum Riddler's 'as long as you have one or fewer cards in hand ... you draw that many cards plus one' is live in exactly the empty-hand state this mode describes, Starwinder draws a card per point of combat damage any creature deals, and Elegy Acolyte draws whenever your creatures connect. The 6 warp copies are additionally cards spent once and still castable from exile later. |
| raced | mitigation | Elegy Acolyte is the maindeck answer: a 4-mana 4/4 LIFELINK body that also creates a free 2/2 Robot blocker at the beginning of every end step Void is on, which is 11 of 22 nonland cards. Behind it, Voidforged Titan x2 is a 5/4 wall and Zero Point Ballad can be cast at X=2 for three mana against a turn-3 board. Dubious Delicacy boards in as flash -3/-3 that then sacrifices for 3 life. What remains accepted: warp buys no blocker at all - a warped creature is exiled at your own end step - so the deck's turn-1-to-3 defence is removal, not bodies, and cheap defensive creatures would have to come out of either the interaction suite or the draw suite, which are jointly the attrition win condition named in the thesis. |
| disruption-fizzle | mitigation | The critical turn is a sweeper resolving, and it is protected structurally rather than by one card: Unravel x2 ('Counter target spell') answers the opposing counterspell or the post-sweeper threat, and the deck holds two structurally different sweepers at different costs so a countered Rupture does not end the plan. Because the win condition is card advantage rather than one assembled turn, there is no combo turn to interact with at all. The earlier draft of this reasoning claimed every forced exchange draws a card off Voidforged Titan; that overstates a 2-of, and the corrected claim is that it does so on the turns a Titan is on the battlefield. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Chorale of the Void | Its attack trigger reanimates from the DEFENDING player's graveyard, so it needs their graveyard stocked AND a creature of yours to enchant that survives to attack; it belongs to the Rupture/Chorale build, not to draw-go. |
| Insatiable Skittermaw | A 2/2 menace that grows only at YOUR end step under Void; a control deck that casts Singularity Rupture would sweep it away with everything else. |
| Hylderblade | '+3/+1' with a free Void attach targeting 'creature you control' - this build fields 7 creature copies of 22 nonland cards and actively plans to have an empty battlefield after a sweeper, so the attach has no target on exactly the turns that matter. |
| Timeline Culler | A 2/2 haste body is a tempo card; the recurring {B} warp is real, but the body does nothing for a deck whose plan is to have no creatures when the sweeper resolves. |
| Bygone Colossus | 'Warp {3}' for a 9/9 - but a warped creature is exiled at the beginning of your own end step, so the 9/9 never attacks or blocks. As a Void switch it costs {3} where Sinister Cryologist costs {U}. |
| Anticausal Vestige | Warp {4} is the most expensive Void switch in the pool, and its leaves-the-battlefield payoff wants a ramp shell this deck does not have. |
| Perigee Beckoner | Warp {1}{B} on a 4/5, but its ETB targets 'another target creature you control' - it is blank whenever the board is empty, which is the state this deck's sweepers create. |
| Sothera, the Supervoid | Mythic; 'Whenever a creature you control dies, each opponent ... exiles it' needs your own creatures dying, and this deck's plan is to have none. |
| Xu-Ifit, Osteoharmonist | Reanimates as a Skeleton 'with no abilities' - it cannot bring back Starwinder's draw trigger or Quantum Riddler's flying, which is the only reason to reanimate here. |
| Mouth of the Storm | {6}{U} 6/6 flier with ward 2 and a mass -3/-0 ETB - a real finisher, but 7 MV pushes the land count up and Starwinder already occupies the top of the curve at 7. |
| Annul | Counters only artifact or enchantment spells; the cube's threat profile is creature-dense, so it is a sideboard card. |
| Cryoshatter | Destroys only 'when enchanted creature becomes tapped or is dealt damage' - an opposing creature taps on the OPPONENT's turn, and -5/-0 does not stop it from blocking. |
| Mm'menon, the Right Hand | 'You may cast artifact spells from the top of your library' - this list runs 3 artifact copies of 22 nonland cards (Voidforged Titan x2, Cryogen Relic), so the ability sees a card roughly one turn in seven, and it costs a rare the build has no room for at 6 of 6. |
| Consult the Star Charts | {1}{U} kickable dig, but a rare in a build whose 6 rare slots are already spent on two sweepers, a finisher, a mythic and the dual. |
| Uthros, Titanic Godcore | Enters tapped, produces only {U}, and its 12+ Station payoff scales with artifacts, of which this deck runs 3 copies - and Station needs creatures to tap, of which it runs 7. |
| Susur Secundi, Void Altar | Enters tapped, mono-B, and its 12+ ability sacrifices creatures - a deck with 5 creature copies cannot feed it. |
| Depressurize | Cut in the grill repair. '-3/-0 ... then if that creature's power is 0 or less, destroy it' only destroys creatures with power 3 or less, against a cube whose evasion class is 56 cards (22.5%); the structural gate already discounted both copies to weight 0.6. Its two slots became Cryogen Relic and Elegy Acolyte. |
| Cerebral Download | 'Surveil X, where X is the number of artifacts you control. Then draw three cards.' X scales only the surveil, and with 3 artifact copies in 22 nonland cards X is 0 on most casts - so it is a 5-mana instant-speed draw-three with a decorative rider. It was the card cut when the re-derived land target moved to 18. |
| Lost in Space | Cut from the sideboard in the grill repair: 'Target artifact or creature's OWNER puts it on their choice of the top or bottom of their library' - the owner chooses, so against a card worth answering they pick top and redraw it. A four-mana Time Walk, not an answer. Its slot became Thaumaton Torpedo. |
| Desculpting Blast | 'Return target nonland permanent to its owner's hand' - the cheapest UB answer to a noncreature permanent and an instant-speed Void switch that needs no opposing target, but bounce is temporary against a recastable artifact. |
| Timeline Culler | 'You may cast this card from your graveyard using its warp ability' would be a Void switch costing no card from hand - but it must BE binned first, and this deck's only mill is surveil 1 x2 and surveil 2 x2 with no discard outlet, so binning a specific 2-of is unreliable. Hard-cast it is a 2/2 haste with no role on a board this deck plans to keep empty. |
| Faller's Faithful | 'When this creature enters, destroy up to one other target creature. If that creature wasn't dealt damage this turn, ITS CONTROLLER DRAWS TWO CARDS.' Removal plus a body that self-enables Void, but refunding two cards is backwards in an attrition mirror this deck intends to win on card count. |
| Alpharael, Stonechosen | The alternative use of the sixth rare/mythic slot. Its halving trigger requires it to ATTACK, and this deck's plan is an empty battlefield after a sweeper rather than a creature surviving to a combat step; Elegy Acolyte took the slot because it defends instead. |
| Vote Out | 'Convoke / Destroy target creature' - Gravkill is strictly better here: instant speed and it exiles, and convoke is near-dead with 7 creature copies in 22 nonland cards. |
| Mechanozoa | Cut from the sideboard in the grill repair. Its ETB puts ONE stun counter on the target, which means the creature misses exactly one untap step - one turn of tempo, not two. Its slot became Dubious Delicacy, which answers the raced mode instead. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.5   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.33 adj [MV 3.5 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  51.7%  prod  61.1%  gap  -9.4pp  [OK]
  U  demand  48.3%  prod  55.6%  gap  -7.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons / uncommons, max 2 copies each ......... PASS (no card exceeds 2)
Rares / mythics, max 1 copy each ............... PASS
Rares + mythics, max 6 total (MB + SB) ......... PASS - 6 of 6 used, at cap:
    Quantum Riddler (M)         mainboard
    Elegy Acolyte (R)           mainboard
    Singularity Rupture (R)     mainboard
    Starwinder (R)              mainboard
    Zero Point Ballad (R)       mainboard
    Watery Grave (R)            mainboard
    (the sideboard is built entirely from commons and uncommons)
Basic lands unlimited .......................... Swamp 8, Island 7
All cards from cube mainboard .................. PASS (exact-name match, 40 + 10)
Colour usability within U/B .................... PASS (effective_cost.best_mode non-None for every nonland)
```