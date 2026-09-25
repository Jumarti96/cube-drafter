---
deck_name: "rg-enlist-damage-cannon"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-08-20T16:50:41Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)
### LANDS (17)
```
x12  Mountain                   basic
x2   Wooded Ridgeline           RG dual, enters tapped
x1   Karplusan Forest           the only untapped-capable RG dual in the pool
x1   Forest                     basic - splash source
x1   Crystal Grotto             scry 1 on entry; {1} for any colour, to cast the splash
```
### CREATURES (16)
```
CMC  Card                       Qty  Color  Role                                   Rar
  1  Phoenix Chick              x1   R      Enabler (0.3) - outlet fodder that rec U
  1  Shivan Devastator          x1   R      Enabler - the ONLY hasty donor above 2 M
  1  Viashino Branchrider       x2   R      Enabler (0.4) - the only one-drop; 1 p C
  2  Radha's Firebrand          x1   R      Enabler - 3 power for two mana, the be R
  2  Yavimaya Steelcrusher      x2   R      Enabler (0.6) - 2-power enlist body; s C
  3  Balduvian Berserker        x2   R      PAYOFF - the damage projector: enlist  U
  3  Flowstone Kavu             x1   R      Enabler (0.6) - 2-power donor, menace  C
  3  Squee, Dubious Monarch     x1   R      Enabler (0.7) - 2-power hasty donor; i R
  4  Coalition Warbrute         x2   R      Enabler - 3-power donor and the trampl C
  5  Hurler Cyclops             x2   R      PAYOFF - the outlet (no tap symbol in  U
  6  Ragefire Hellkite          x1   R      PAYOFF (0.6) - second outlet, but only R
```
### INSTANTS & SORCERIES (6)
```
CMC  Card                       Qty  Color  Role                                   Rar
  1  Tail Swipe                 x1   G      Interaction - one-mana fight priced of U
  2  Colossal Growth            x2   G      Reach - the death-trigger multiplier ( C
  2  Lightning Strike           x2   R      Interaction - any-target damage on the C
  2  Thrill of Possibility      x1   R      Residual - the deck's only card select C
```
### OTHER SPELLS (1)
```
CMC  Card                       Qty  Color  Role                                   Rar
  1  Hammerhand                 x1   R      Enabler (0.5) - haste removes the summ C
```
## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                Rar
Broken Wings               x2   G      artifact/enchantment/flyer removal (sp C
Jaya's Firenado            x2   R      5 damage, the only answer above 3 dama C
Dragon Whelp               x2   R      a 2/3 flier that blocks the cube's 51- U
Flowstone Infusion         x2   R      +2/-2; two copies self-kill an inflate C
Smash to Dust              x1   R      artifact removal / 1 damage to each op C
Furious Bellow             x1   R      +3/+0 at INSTANT speed, the only multi C
```
## ANALYSIS
### DECK IDENTITY

A red aggro deck whose distinguishing reach is a two-card damage cannon. Balduvian Berserker reads
"Enlist ... / When this creature dies, it deals damage equal to its power to any target." Enlist
inflates its power as it attacks, and a sacrifice outlet then fires that inflated number at ANY
TARGET, so blockers are irrelevant and the deck kills through a board stall the other builds of
this archetype cannot break. Below that line it is a sixteen-creature red aggro list with menace,
trample and flying, closing on any-target damage.

### THE LINE, AND THE ONE MISSING SYMBOL

The cleanest kill uses one card twice, and it hinges on a symbol that is absent:

| Step | Result |
|---|---|
| Balduvian Berserker attacks | 1/3 |
| enlist Hurler Cyclops (a 5/4) - the Cyclops taps | 6/3 |
| Hurler Cyclops' ability is "{1}, Sacrifice another creature" - **no tap symbol in the cost** | still activatable while tapped |
| {1}: sacrifice the Berserker to that same Cyclops | 6 damage to any target, +1 from the Cyclops |

Enlist adds POWER only, which is why the Berserker becomes 6/3 rather than 6/7. A kicked Colossal
Growth first ("+4/+4 and gains trample and haste") makes it 10 to the face for four mana total.

### THE HONEST NUMBER

This line needs two different pieces at once - a projector and an outlet - and the deck should not
pretend otherwise:

| Piece | Copies | P(at least one by turn 6, 13 cards seen) |
|---|---|---|
| projector (Balduvian Berserker) | 2 | 0.5500 |
| outlet (Hurler Cyclops x2, Ragefire Hellkite x1) | 3 | 0.7039 |
| **both** | - | **0.3766** |

A two-piece requirement at 2 and 3 copies in a 40-card deck cannot reach a 0.75 assembly gate by
turn 6 at any sane deck size; that is arithmetic, not a build flaw. The assembly role is therefore
declared as what the deck actually assembles - any-target damage that bypasses blockers, 7 copies
across 4 names at 6.0 effective, p=0.88 - and the 37.7% is published rather than hidden inside a
merged role. Thrill of Possibility was added to raise it; the list previously had zero card
selection.

### THE OUTLET IS A POOL CEILING

Exactly **two card names in the entire 452-card pool can sacrifice another creature in red or
green**: Hurler Cyclops and Ragefire Hellkite, for three copies total. Everything else is
self-sacrifice (Yavimaya Steelcrusher's "{1}, Sacrifice this creature"), sacrifices a land
(Sprouting Goblin), or sits in black. No card swap raises that number without leaving these
colours, which is why the decapitation failure mode is accepted rather than mitigated.

### WHY GREEN IS A SPLASH AND NOT A COLOUR

Pip demand is 23 red to 3 green. Green earns exactly three names - Colossal Growth x2 (the largest
single addition to the death-trigger number, +4 kicked), Tail Swipe x1, and Broken Wings x2 in the
board - on five sources. Note that Viashino Branchrider is **not** a splash card despite printing
green: its base cost is {R} and the {2}{G} kicker never has to be paid.

### WHERE THE LINE ACTUALLY FAILS

Removal on the Berserker is usually good for this deck - "When this creature dies" fires whatever
kills it, so an opponent's removal spell completes the kill at full inflated power. The exception
is precise: enlist's "When you do, add its power" is a **reflexive trigger**, and the opponent
holds priority while it is on the stack. Removal cast in that one window kills a 1/3 for 1 damage
with the donor already tapped. Bounce is worse still - Rona's Vortex returns the creature to hand
and gives no death trigger at all. There is no answer to either in these colours.
### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:6  2:8  3:4  4:2  5:2  6:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6: Lightning Strike@0.7, Lightning Strike@0.7, Ragefire Hellkite@0.6) → p=0.88 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 8.6: Yavimaya Steelcrusher@0.6, Yavimaya Steelcrusher@0.6, Flowstone Kavu@0.6, Viashino Branchrider@0.4, Viashino Branchrider@0.4, Phoenix Chick@0.3, Squee, Dubious Monarch@0.7, Hammerhand@0.5, Thrill of Possibility@0.5) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 73%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-red at common/uncommon offers no maindeck sweeper, and Hurler Cyclops' 1-damage ping costs a creature per activation so it does not scale against a wide board. Smash to Dust ('deals 1 damage to each creature your opponents control') is held in the sideboard for token decks.
  OK        single_large_threat: Lightning Strike, Tail Swipe, Balduvian Berserker
  OK        noncreature_permanents: Yavimaya Steelcrusher
  CONCEDED  stack: The pool contains no red or green counterspell; interacting on the stack is unavailable to these colours at any cost.
  CONCEDED  graveyard: The cube dossier reports 0 graveyard-hate cards cube-wide, so no colour in this environment answers this class.
```
- No WARN-tier flags: curve (aggro) PASS with a 1:6 2:8 3:4 4:2 5:2 6:1 distribution, and goldfish PASS at 87% keepable.
- ROLE DEFINITION REVISED after the grill. The assembly payoff role previously merged the projector and the outlet into one bucket, which let each substitute for the other - and they cannot, because the marquee line needs both at once. The role is now declared as what the deck actually assembles: any-target damage that bypasses blockers (7 copies, 6.0 effective, p=0.88). The honest joint probability of the two-piece line, 37.7% by turn 6, is published as a count-dependent verdict instead.
- Disclosure: the OUTLET half of the pipeline is a POOL CEILING - exactly two card names in red or green across the entire 452-entry working pool can sacrifice another creature (Hurler Cyclops, Ragefire Hellkite), for 3 copies total. No card swap raises it without leaving these colours.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two mana sinks are printed on cards in the list: Flowstone Kavu's '{R}: This creature gets +1/-1 until end of turn' (2 copies) and Viashino Branchrider's '{2}{R}: This creature gets +2/+0 until end of turn' (2 copies). Hurler Cyclops' outlet costs {1} per activation and has no tap symbol, so surplus mana does convert into repeated activations - but CORRECTED after the grill: the binding constraint is BODIES, not mana, and 'another death trigger' is false for 15 of the 16 creatures, since only Balduvian Berserker has a dies-trigger. Each extra activation is 1 damage plus a creature spent. |
| screw | mitigation | 6 of 23 nonland cards cost one mana and only 2 of 17 lands enter tapped - though CORRECTED after the grill, only 4 of those are genuine turn-1 plays, since Tail Swipe is {G} on 5 green sources and Hammerhand is an Aura needing a creature already on the battlefield. which is why The goldfish check reports 73% of hands making a turn-1 play by mana value - the highest of the four builds of this archetype - with 87% keepable openers and 88% reaching three lands by turn 3. The near-mono-red manabase is what buys this. |
| decapitation | accepted | The outlet half of the pipeline CANNOT be made redundant: only two card names in the entire 452-entry pool sacrifice another creature in red or green, so the deck holds 3 outlet copies and that is the ceiling. Mitigating would mean leaving red-green for black, where Bone Splinters and Gibbering Barricade live - which is a different deck, not a better version of this one. What the deck does buy instead is redundancy on the PROJECTOR half: Balduvian Berserker x2 plus Hurler Cyclops' own 1-damage ping plus Lightning Strike x2 all point at 'any target', so losing the Berserker costs the big hit, not the plan. Recount after repair: any-target damage sources are 7 copies across 4 names (Balduvian Berserker x2, Hurler Cyclops x2, Lightning Strike x2, Ragefire Hellkite x1), 6.0 effective, p=0.88. |
| gas-out | mitigation | The two recurring bodies in the pool are both here: Phoenix Chick returns from the graveyard for {R}{R} whenever you attack with three or more creatures, and Squee, Dubious Monarch can be cast from the graveyard for {3}{R} plus exiling four other cards, and makes a Goblin token on every attack. Both refill the sacrifice fodder that Hurler Cyclops consumes, so the outlet does not run dry when the hand does. |
| raced | accepted | The deck spends its own creatures as ammunition, so it is structurally bad at blocking - Phoenix Chick literally reads 'This creature can't block', and sacrificing a blocker to the Cyclops is the deck's main line. Mitigating would mean defensive bodies, and a defensive body is a body not being converted into face damage, which is the entire thesis. The deck instead races on the any-target axis: Balduvian Berserker's death trigger, Hurler Cyclops' ping and Lightning Strike x2 all reach the opponent's face regardless of board state. |
| disruption-fizzle | accepted | CORRECTED after the grill; the earlier version was rules-wrong. Enlist reads 'you may tap a nonattacking creature you control ... WHEN YOU DO, add its power to this creature's until end of turn' - the power addition is a REFLEXIVE TRIGGER, and players receive priority while it is on the stack. Removal cast in that window kills a 1/3 Balduvian Berserker for 1 damage, and the donor is already tapped, so the enlist is spent for nothing. The earlier claim that 'the opponent's removal spell becomes the outlet' is true only for removal cast AFTER the reflexive trigger resolves, or at any other point in the turn - in those windows the Berserker does die at full inflated power and the trigger fires for the whole amount. Mitigating the bad window would mean protection, and a scan of the 452-entry pool finds no protection effect castable in mono-red: Plaza of Heroes protects only legendary creatures and the Berserker is not legendary, and every exile-or-bounce answer that beats the line outright sits outside red. Accepting this costs the deck nothing it can buy back without leaving its colour. Two further corrections to the earlier census: the pool's exile answers are NOT all white - Tear Asunder is black-green and Chaotic Transformation is mono-red - and the earlier entry named bounce as a hole without ever counting it, when Rona's Vortex is a one-mana blue instant that blanks the projector at the moment of the kill. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|---|---|
| Linebreaker Baloth | 'Enlist ... / can't be blocked by creatures with power 2 or less' - 4 power is the best green donation available, but {3}{G}{G} is uncastable in a deck running green as a 3-name splash on 5 sources. |
| Mossbeard Ancient | A 7/7 trample would be the single largest enlist donation in the pool, turning the Berserker into an 8-power death trigger - but {5}{G}{G} is far outside a splash and outside a turn-6 goldfish. |
| Elfhame Wurm | 'Vigilance, trample' 5/4 - 5 power of donation, but {4}{G} is a green CORE cost, and vigilance does not help enlist, which requires a NONattacking creature. |
| Hexbane Tortoise | A 3-power enlist body with ward {2}, but {2}{G} is a green core cost this splash cannot support. |
| Bite Down | 'Target creature you control deals damage equal to its power to target creature or planeswalker you don't control' - it could legally REPLACE Tail Swipe rather than be a fourth green name, and it hits planeswalkers. Kept out anyway: Tail Swipe costs one mana to Bite Down's two and adds +1/+1, and the fight-back damage is nearly free here, since a Berserker that dies fighting still fires its trigger. |
| Magnigoth Sentry | A 4/4 reach body would be the best green enlist fodder at a castable cost, but it is a fourth green name and the splash cap is full. |
| Keldon Flamesage | 'look at the top X cards, where X is this creature's power' - at 6 instants/sorceries of 23 nonland cards the trigger hits 57.7% of the time, so it is genuinely live. Excluded purely on the rare budget: after the grill repairs all FIVE rare/mythic slots are spent (Karplusan Forest, Radha's Firebrand, Ragefire Hellkite, Shivan Devastator, Squee), and each of those buys either a sacrifice outlet, a donor the deck structurally lacks, or the only untapped dual. |
| Flowstone Infusion | 'Target creature gets +2/-2' - TWO copies on a Berserker make it 9/-1 after enlisting a 4-power body, killing it with an inflated trigger; kept in the sideboard because the line needs both copies and is worse than simply using Hurler Cyclops. |
| Barkweave Crusher | A 2/5 enlist body is the most durable in the pool, but {3}{G} is a green core cost outside this splash. |
| Nishoba Brawler | 'Domain - power is equal to the number of basic land types' - this manabase carries only Mountain and Forest, so it would be a 2/3, and it is green besides. |
| Goblin Picker | '{R}, {T}, Discard a card: Draw a card' - the same 2-power donation as Yavimaya Steelcrusher at the same cost, with repeatable selection instead of an artifact clause that is dead against roughly 94% of boards (artifacts are 15 of 247 cube cards). Kept out because it loses Enlist on the body, and Enlist bodies are 6 of 16 creatures here. |
| Molten Monstrosity | 'costs {X} less to cast, where X is the greatest power among creatures you control. / Trample' - with a Hurler Cyclops resolved it is a 5/5 trample for {2}{R}, but it needs the big body already down, so it does nothing about the 37.7% two-piece assembly problem. |
| Rona's Vortex (opposing card, listed for play-around) | '{U}: Return target creature or planeswalker you don't control to its owner's hand' - the single most relevant card in the cube AGAINST this deck: a one-mana instant that blanks the projector at the moment of the kill, and unlike removal it gives no death trigger. There is no answer to it in these colours. |
| Furious Bellow | '+3/+0 and gains first strike ... Scry 1' - moved to the SIDEBOARD after the grill. It is the only multiplier in red castable at INSTANT speed, which is the one window Colossal Growth (kicked, and green) cannot reach; first strike is still irrelevant on a body about to be sacrificed. |
| Twinferno | 'gains double strike' doubles COMBAT damage only - the Berserker's death trigger is not combat damage, so it scales 0 of the deck's 2 payoff names. Cut from the sideboard entirely after the grill: 2 of 10 board slots on an effect this build itself prices at zero. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.03 adj [MV 2.52 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod  94.1%  gap  +5.9pp  [OK]

Splash Check: [PASS]
  G  2 card(s), max CMC 1  sources 5/3  [OK]
```
## RESTRICTIONS COMPLIANCE
```
PASS   1a mainboard count == 40   got 40
PASS   1b sideboard count == 10   got 10
PASS   2 exact-name membership in working pool   missing: []
PASS   3 copy limits vs card_pool_rules
PASS   4 colour usability via effective_cost.best_mode   unusable: []
PASS   5 splash cap <= 3 per colour and in splash_candidates
PASS   6 rare/mythic total <= 5 (user cap)   got 5: ['Karplusan Forest', "Radha's Firebrand", 'Ragefire Hellkite', 'Shivan Devastator', 'Squee, Dubious Monarch']
```
