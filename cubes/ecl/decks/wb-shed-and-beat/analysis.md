---
deck_name: "wb-shed-and-beat"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WB"
format: "40-card"
built_at: "2026-08-10T04:09:51Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
x7   Plains
x7   Swamp
x2   Sunlit Marsh  dual; enters tapped
```

### CREATURES (18)

```
CMC  Card                          Qty  Color  Role            Rar
  1  Bile-Vial Boggart             x1   B      Enabler/Fodder  C
  1  Moonshadow                    x1   B      Payload/Payoff  M
  2  Abigale, Eloquent First-Year  x1   BW     Payload/Payoff  R
  2  Burdened Stoneback            x2   W      Payload/Payoff  U
  2  Creakwood Safewright          x2   B      Payload/Payoff  U
  2  Encumbered Reejerey           x2   W      Payload/Payoff  U
  2  Kinscaer Sentry               x1   W      Payload/Payoff  R
  2  Rhys, the Evermore            x1   W      Engine/Outlet   R
  3  Adept Watershaper             x1   W      Payload/Payoff  R
  3  Heirloom Auntie               x1   B      Payload/Payoff  C
  3  Moonlit Lamenter              x1   W      Engine/Outlet   U
  3  Reluctant Dounguard           x2   W      Payload/Payoff  C
  3  Retched Wretch                x2   B      Payload/Payoff  U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                  Qty  Color  Role                    Rar
  1  Requiting Hex         x2   B      Interaction/Disruption  U
  2  Bogslither's Embrace  x1   B      Interaction/Disruption  C
  2  Nameless Inversion    x1   B      Interaction/Disruption  U
  3  Crib Swap             x2   W      Interaction/Disruption  U
```

## SIDEBOARD (10)

```
Card                 Qty  Color  Role / When to board in                                                                                                                                                                                                                                                                                         Rar
Blight Rot           x2   B      vs anything that races us and vs the cube's evasion cluster (41 cards, 15.8% density — the largest measured threat class). 'Put four -1/-1 counters on target creature' is instant-speed and answers 129 of the cube's 168 creatures; it can also be aimed at our own Retched Wretch to arm its return trigger  C
Protective Response  x2   W      vs wide boards and vs decks that attack into us — 'Convoke. Destroy target attacking or blocking creature'; convoke makes it near-free once the board is wide                                                                                                                                                   U
Pyrrhic Strike       x2   W      vs artifacts and enchantments (11 artifacts + 21 enchantments in the cube) — 'you may blight 2 ... choose one, or BOTH if the additional cost was paid: destroy target artifact or enchantment; destroy target creature with mana value 3 or greater', and the blight lands on a shedder                        U
Darkness Descends    x2   B      vs token swarms ONLY — 'Put two -1/-1 counters on each creature' also shrinks our own blighted bodies, so it comes in only when the opponent's board is x/1 and x/2 tokens                                                                                                                                      U
Rooftop Percher      x2   C      vs graveyard decks (39 cards, 15.0% density) — 'exile up to two target cards from graveyards. You gain 3 life'; colourless so always castable, and changeling makes it an Elf card for Creakwood Safewright when it dies                                                                                        C
```

## ANALYSIS

### DECK IDENTITY

A W/B aggro deck that buys above-rate bodies with -1/-1 counters and then takes the counters back. Stated at true sizes, because the counters are real: Encumbered Reejerey costs {1}{W} and enters as a 2/1, then removes a counter every time it becomes tapped — which is every attack — so it swings as a 3/2, then 4/3, then 5/4 while it is already killing you. Burdened Stoneback enters as a 2/2 and converts each counter into indestructibility for an attacker; Creakwood Safewright enters as a 2/2 and becomes a 5/5 one counter per end step once any Elf card reaches the graveyard; Reluctant Dounguard sheds every time another creature enters. Rhys, the Evermore clears a whole creature's counters in one activation. The removal suite runs the same trick in reverse: Requiting Hex and Bogslither's Embrace discount themselves by placing a counter, and Crib Swap and Nameless Inversion are changelings, so casting them buries an Elf card and switches Creakwood Safewright on for the rest of the game.

### THE COUNTERS ARE THE PRICE, NOT THE PROBLEM

Every headline body in this deck is two or three mana above rate, and every one of them is smaller than its printed stats when it lands. Stated honestly:

| Card | Cost | Printed | **Enters as** | How it sheds |
|---|---|---|---|---|
| Encumbered Reejerey | `{1}{W}` | 5/4 | **2/1** | one counter *whenever it becomes tapped* — i.e. every attack |
| Creakwood Safewright | `{1}{B}` | 5/5 | **2/2** | one per end step, once an Elf card is in the graveyard |
| Burdened Stoneback | `{1}{W}` | 4/4 | **2/2** | `{1}{W}` per counter, sorcery speed |
| Reluctant Dounguard | `{2}{W}` | 4/4 | **2/2** | one whenever another creature you control enters |
| Moonshadow | `{B}` | 7/7 | **1/1** | one per permanent card put into your graveyard |

So Encumbered Reejerey attacks as a 2/1 on turn 2, a 3/2 on turn 3, a 4/3 on turn 4 and a 5/4 on turn 5 — which is exactly the thesis turn. The deck is not cheating on rate; it is *financing* it, and the shed triggers are the repayment schedule.

### THE CHANGELING TRICK THAT TURNS ON CREAKWOOD SAFEWRIGHT

Creakwood Safewright reads "at the beginning of your end step, **if there is an Elf card in your graveyard**…" Printed Elves in this list are only Creakwood Safewright ×2 and Rhys ×1.

But **Crib Swap** and **Nameless Inversion** are Kindred Instants with "Changeling (This card is every creature type.)" — a characteristic-defining ability that applies **in every zone**, including the graveyard. Casting a Crib Swap therefore buries an Elf card and switches on both Safewrights permanently. That makes the Elf denominator **6 of 24 nonland cards, three of which bury themselves on resolution**.

### THE SINKS RELOAD

Burdened Stoneback and Moonlit Lamenter both read "Remove **a counter**" — not "a -1/-1 counter". Their own supply is finite (Stoneback enters with two, Lamenter with exactly one, so Lamenter draws precisely one card in its life). But the deck's own blight spells put counters back: blighting Moonlit Lamenter with a Requiting Hex converts a removal spell into an extra card, and blighting Burdened Stoneback buys another indestructible activation. The blight cost is not a tax here — it is a reload.

### WHAT THIS DECK IS BAD AT, WITHOUT HEDGING

Two things, both stated in the failure-mode table as **accepted** rather than papered over:

1. **It cannot block its way out of a race.** Burdened Stoneback's indestructible grant is "Activate only as a sorcery", so it can never be used in the opponent's combat. Adept Watershaper reads "Other **tapped** creatures you control have indestructible" — and blocking does not tap. On turns 3–4 the 4/4s are 2/2s.
2. **It runs out of cards.** Moonlit Lamenter is the only card that draws one, and because it enters with a single counter it draws exactly one, ever — 1 of 24 nonland cards, once. The plan is that the game is decided before the hand empties.

### THE MANA IS THE WORST IN THE CUBE

Sunlit Marsh is the **only** W/B dual in the entire 277-card pool, and it enters tapped. Every other guild pair has a shockland; W/B does not. That single fact is why the green splash was declined, why the base is a symmetric 9 white / 9 black, and why every two-drop in the list is single-pip.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (24 nonland):  1:4  2:11  3:9
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 8.6: Creakwood Safewright@0.6, Creakwood Safewright@0.6, Moonshadow@0.4) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 8.95: Requiting Hex@0.85, Requiting Hex@0.85, Bogslither's Embrace@0.85, Burdened Stoneback@0.7, Burdened Stoneback@0.7) → p=0.95 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 54%  T2 96%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: This mainboard has no sweeper. The only W/B option is Darkness Descends, and 'Put two -1/-1 counters on EACH creature' is worse for this deck than for almost any other in the cube: Encumbered Reejerey enters with three counters and is a 2/1 before it sheds, so a symmetric two-counter effect kills the deck's own best cards. Mitigating maindeck would mean cutting the undercosted bodies that ARE the thesis. Protective Response x2 (convoke) and Darkness Descends x2 cover the class from the sideboard, the latter only against x/1 and x/2 token boards.
  OK        single_large_threat: Bogslither's Embrace, Crib Swap, Nameless Inversion
  CONCEDED  noncreature_permanents: White does have a real answer — Pyrrhic Strike ('destroy target artifact or enchantment', and BOTH modes if the blight 2 is paid) — but it is a reactive card that does nothing against a creature deck, and this list has 24 nonland slots against a goldfish turn of 5. Mitigating maindeck costs a body every time. Pyrrhic Strike x2 covers artifacts (11 cards, 4.2%) and enchantments (21 cards, 8.1%) from the sideboard; Keep Out x2 was cut from the board during the grill because Pyrrhic Strike already reads 'artifact OR enchantment' and the slots were needed for the evasion class.
  CONCEDED  stack: This cube's only counterspells are blue (Wild Unraveling, Glen Elendra Guardian); W/B cannot interact on the stack. Mitigating would mean abandoning the pipeline's colours. The substitute is speed: the deck's goldfish turn is 5, so a reactive opponent gets fewer turns in which stack interaction matters.
  CONCEDED  graveyard: No maindeck graveyard answer exists in W/B outside Dawnhand Dissident (a rare that does nothing in an aggro shell) and Rooftop Percher at {5}, which is two full turns past this deck's curve ceiling of 3. Mitigating maindeck would mean a 5-mana card in a deck whose whole thesis is above-rate two-drops. Rooftop Percher x2 covers it from the sideboard.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Corrected from the first draft, which called these 'three repeating mana sinks' — they are not. Burdened Stoneback enters with two counters and its ability reads 'Remove a counter', so it is 2 activations per copy; Moonlit Lamenter enters with ONE counter, so it draws exactly one card ever. Only Rhys is genuinely repeating, at sorcery speed and costing its own attack. What makes the sink real is a composition: both read 'Remove A COUNTER', not 'a -1/-1 counter', so the deck's own blight spells RELOAD them — blighting Moonlit Lamenter with Requiting Hex turns a removal spell into an extra card, and blighting Burdened Stoneback buys another indestructible activation. Kinscaer Sentry also converts a flooded turn into a free body ('you may put a creature card with mana value X or less from your hand onto the battlefield tapped and attacking'), and 13 of 13 creature card entries are MV 3 or less. The land count is 16 rather than 17 for this reason. |
| screw | mitigation | 15 of 24 nonland cards cost 2 or less and nothing costs more than 3, so a two-land hand casts the deck's best cards on curve. Goldfish sim over 1000 hands: 85% keepable, 84% have 3 lands by turn 3, 96% make a turn-2 play and 54% make a turn-1 play after the curve repair added Moonshadow and Bile-Vial Boggart. |
| decapitation | mitigation | There is no single key card. The payoff role is 10 copies across 6 cards, and the four that need nothing else on the battlefield — Encumbered Reejerey x2 (sheds on its own tap) and Burdened Stoneback x2 (sheds for its own mana) — function alone. Stated honestly: the other six copies (Creakwood Safewright x2, Reluctant Dounguard x2, Heirloom Auntie x1, Moonshadow x1) shed only when something else enters, dies, or hits the graveyard, so with no board they remain 2/2-and-smaller bodies rather than doing nothing. |
| gas-out | accepted | This deck runs out of cards and knows it. By oracle text the only genuine card draw is Moonlit Lamenter x1, and because it enters with exactly one counter it draws exactly one card in its life — 1 of 24 nonland cards, once. Everything else refills the board rather than the hand: Retched Wretch x2 returning itself, Kinscaer Sentry putting a creature from hand onto the battlefield (mana advantage, not card advantage), Heirloom Auntie surveilling (selection, not advantage). Mitigating means cutting a two-mana above-rate body for Reaping Willow at MV 4 or Moonlit Lamenter's second copy, which raises the curve ceiling past 3 and directly slows the turn-5 goldfish that is the entire reason to play this build rather than the B/R grind build of the same archetype. The cost is paid deliberately. |
| raced | accepted | Rewritten after the grill proved the first version oracle-impossible. This deck cannot block its way out of a race and should stop claiming it can: Burdened Stoneback's indestructible grant is 'Activate only as a sorcery', so it can never be used during the opponent's combat; Adept Watershaper's grant reads 'Other TAPPED creatures you control have indestructible' and blocking does not tap, so it is off entirely on defence; and Heirloom Auntie, Reluctant Dounguard and Burdened Stoneback are all 2/2s on the turns a race is decided, not the 4/4s they eventually become. What the deck actually has against a racer is 6 maindeck interaction spells at MV 1-3, Abigale's 'Flying, first strike, lifelink', Requiting Hex x2 gaining 2 life apiece, and its own clock. Mitigating properly means maindecking lifelink blockers (Prideful Feastling, a 2/3) or Blight Rot at MV 3 in place of above-rate attackers, which trades the turn-5 kill for the ability to survive to turn 8 — i.e. it rebuilds the B/R grind deck in the wrong colours. The cost is accepted; Blight Rot x2 and Protective Response x2 come in from the sideboard instead. |
| disruption-fizzle | mitigation | There is no critical turn and no assembly step — the deck plays a creature and attacks. The one interactable line is a Rhys activation, and because it is sorcery-speed the opponent must hold removal in advance rather than responding to it. If Rhys dies the counters simply stay on, and the bodies are still 2/1 and 2/2 attackers that Encumbered Reejerey and Reluctant Dounguard shed off on their own over the following two turns — which is the true statement of this deck's floor, and the number the rest of this record is now written to match. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bristlebane Battler (the declined green splash) | 6/6 for {1}{G} and it sheds 'whenever another creature you control enters', which this deck's 18 creature copies feed better than any other deck in the cube. Declined by all three independent sketchers on the same mechanism: every green source available to a W/B deck (Radiant Grove, Haunted Mire, Evolving Wilds) enters tapped, W/B is the only guild pair in this cube with no shockland, and the card enters with FIVE counters — five shed triggers before it is a 6/6, against a goldfish turn of 5. |
| Kinsbaile Aspirant | Cut by the shape judge as a weak keystone: 'As an additional cost to cast this spell, behold a Kithkin or pay {2}' means it costs {2}{W} on turn 1 with no Kithkin on board or in hand, so it is not a one-drop, and Kithkin cards available to this list were only 3 of 24. Its slots went to Adept Watershaper and the interaction count. |
| Mudbutton Cursetosser | 'When this creature dies, destroy target creature an opponent controls with power 2 or less' answers 74 of the cube's 168 creatures, and it is an MV-1 body. Declined on its own additional cost: 'behold a Goblin or pay {2}' against a Goblin denominator of just 3 copies here (Retched Wretch x2, Heirloom Auntie x1) makes it a 3-mana 2/1 in most hands. |
| Reaping Willow | '{1}{W/B}, Remove two counters from this creature: Return target creature card with mana value 3 or less from your graveyard to the battlefield.' 100% of this deck's 13 creature card entries are MV 3 or less, so its recursion covers everything, and lifelink would patch the accepted raced mode. Declined because MV 4 breaks the curve ceiling of 3 that the whole build is priced on — it is the first card to add if you are willing to become a midrange deck. |
| Prideful Feastling | {2}{W/B} 2/3 changeling lifelink — castable off either colour, an Elf card in the graveyard for Creakwood Safewright, and lifelink against racing. Declined because a 2/3 is below the above-rate-body standard the thesis is built on; it would compete directly with a 4/4 Reluctant Dounguard at the same cost. |
| Keep Out | Was in the sideboard at 2 copies and cut during the grill. 'Deals 4 damage to target tapped creature' OR 'Destroy target enchantment' — but Pyrrhic Strike already reads 'Destroy target artifact or enchantment', so 4 of 10 board slots pointed at the same 8.1%-density class while the 15.8%-density evasion class had none. Replaced by Blight Rot x2. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color.' Tapping your own creature at instant speed triggers Encumbered Reejerey's shed off-combat and switches on Adept Watershaper during the opponent's turn. Declined on the numerator: only 2 of 24 cards have a tap-shed, and the deck's mana is already 9/9 symmetric with a PASS audit. |
| Iron-Shield Elf | {1}{B} 3/1 Elf Warrior. Adds to the 6-of-24 Elf-card denominator Creakwood Safewright needs, and unlike Crib Swap it can reach the graveyard as a traded body rather than costing a removal spell. Declined because 'Discard a card: This creature gains indestructible until end of turn. TAP IT' is anti-synergy with attacking, and a 3/1 dies to everything. |
| Evershrike's Gift / Hovel Hurler / Bark of Doran | The evasion package from the rejected 'most reach & evasion' sketch. The judge's grounds: it spends 6 of 23 nonland slots on non-bodies to grant flying to a board with 4 fewer creatures to grant it to, and both flight outlets are sorcery-locked, so the reach arrives only on turns you were attacking anyway. |
| Slumbering Walker / Unbury / Dose of Dawnglow | The recursion package from the rejected 'most resilient to sweepers' sketch. The judge's grounds: all are sorcery-speed or end-step rebuild effects, so 22% engine buys turn-6-and-later insurance at the cost of the turn-5 clock the thesis locks in. |
| Gutsplitter Gang | {3}{B} 6/6 with 'At the beginning of your first main phase, you may blight 2. If you don't, you lose 3 life.' A free recurring blight-2 needs roughly two free shed triggers per turn to absorb; this deck's realistic rate is one to two, and it is MV 4 against a curve ceiling of 3. It is the right card in the B/R grind build, not here. |
| Darkness Descends (maindeck) | Sideboard-only at 2 copies. 'Put two -1/-1 counters on each creature' is worse for this deck than almost any other in the cube — Encumbered Reejerey is a 2/1 before it sheds, so the deck's own best card dies to its own sweeper. Boarded in only against x/1 and x/2 token boards. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 17 recommended  [PASS]
Avg CMC:     2.21   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.39 adj [MV 2.21 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  47.8%  prod  56.2%  gap  -8.4pp  [OK]
  W  demand  52.2%  prod  56.2%  gap  -4.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] mainboard_count: 40 == 40
[PASS] sideboard_count: 10 == 10
[PASS] exact_name_membership: all names found in working pool
[PASS] copy_limits: all within card_pool_rules (basics exempt)
[PASS] rare_mythic_cap_5: 5 rare/mythic across MB+SB: ['Abigale, Eloquent First-Year', 'Adept Watershaper', 'Kinscaer Sentry', 'Moonshadow', 'Rhys, the Evermore']
[PASS] colour_usability: all nonland cards usable in ['W', 'B']+[]; off-normal modes: {'Moonshadow': 'cast', 'Bile-Vial Boggart': 'cast', 'Encumbered Reejerey': 'cast', 'Burdened Stoneback': 'cast', 'Creakwood Safewright': 'cast', 'Kinscaer Sentry': 'cast', 'Abigale, Eloquent First-Year': 'cast', 'Reluctant Dounguard': 'cast', 'Retched Wretch': 'cast', 'Heirloom Auntie': 'cast', 'Adept Watershaper': 'cast', 'Rhys, the Evermore': 'cast', 'Moonlit Lamenter': 'cast', 'Requiting Hex': 'cast', "Bogslither's Embrace": 'cast', 'Nameless Inversion': 'cast', 'Crib Swap': 'cast', 'Pyrrhic Strike': 'cast', 'Rooftop Percher': 'cast', 'Protective Response': 'cast', 'Darkness Descends': 'cast', 'Blight Rot': 'cast'}
[PASS] splash_cap: splash cards used: [] (splash_colors=[])
```
