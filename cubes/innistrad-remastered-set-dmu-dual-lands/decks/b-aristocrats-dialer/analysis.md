---
deck_name: "b-aristocrats-dialer"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-08-31T21:09:40Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x17  Swamp
```

### CREATURES (13)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Gravecrawler                                 x1    B     Enabler/Fodder                 R
  2  Blood Artist                                 x2    B     Engine/Outlet                  U
  2  Butcher Ghoul                                x2    B     Enabler/Fodder                 C
  2  Restless Bloodseeker // Bloodsoaked Reveler  x1    B     Engine/Outlet                  U
  2  Siege Zombie                                 x2    B     Engine/Outlet                  C
  3  Falkenrath Torturer                          x2    B     Engine/Outlet                  C
  4  Haunted Dead                                 x2    B     Enabler/Fodder                 U
  4  Tree of Perdition                            x1    B     Payload/Payoff                 M
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Killing Wave                                 x1    B     Interaction/Disruption         U
  1  Tragic Slip                                  x1    B     Interaction/Disruption         C
  1  Village Rites                                x1    B     Enabler/Fodder                 C
  2  Collective Brutality                         x1    B     Interaction/Disruption         R
```

### OTHER SPELLS (6)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Ghoulish Procession                          x1    B     Enabler/Fodder                 U
  2  The Meathook Massacre                        x1    B     Payload/Payoff                 M
  4  Demonmail Hauberk                            x1    C     Engine/Outlet                  U
  4  Invasion of Innistrad // Deluge of the Dead  x1    B     Interaction/Disruption         R
  4  Triskaidekaphobia                            x2    B     Payload/Payoff                 U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Crawl from the Cellar                        x1    B     Infrastructure/Consistency: vs removal-heavy d C
Killing Wave                                 x1    B     Interaction/Disruption: vs go-wide tribal. The U
Infernal Grasp                               x2    B     Interaction/Disruption: vs single large threat U
Murderous Compulsion                         x2    B     Interaction/Disruption: vs creature-dense aggr C
Gluttonous Guest                             x2    B     Infrastructure/Consistency: vs aggro. A 1/4 th C
Morbid Opportunist                           x1    B     Infrastructure/Consistency: vs grindy midrange U
Sever the Bloodline                          x1    B     Interaction/Disruption: vs token strategies. ' U
```

## ANALYSIS

### DECK IDENTITY

A mono-black sacrifice engine that treats a life total as a dial to be turned rather than a bar to be emptied. Blood Artist ('Whenever this creature or another creature dies, target player loses 1 life and you gain 1 life') fed by a free, unlimited sacrifice outlet is a step-size-1 effect that moves the opponent DOWN and the pilot UP by the same point — the only shape of drain that makes Triskaidekaphobia a win rather than a draw, because 'Each player with exactly 13 life loses the game' has no controller exemption. Siege Zombie is a second, structurally independent dial that consumes no fodder at all, so a removal spell on Blood Artist does not turn the deck off. Tree of Perdition is kept as the one-card shortcut to the same number, not as a requirement.

### DECK IDENTITY

A mono-black sacrifice engine that treats a life total as a dial to be turned rather than a bar to be emptied. Blood Artist ('Whenever this creature or another creature dies, target player loses 1 life and you gain 1 life') fed by a free, unlimited sacrifice outlet is a step-size-1 effect that moves the opponent DOWN and the pilot UP by the same point — the only shape of drain that makes Triskaidekaphobia a win rather than a draw, because 'Each player with exactly 13 life loses the game' has no controller exemption. Siege Zombie is a second, structurally independent dial that consumes no fodder at all, so a removal spell on Blood Artist does not turn the deck off. Tree of Perdition is kept as the one-card shortcut to the same number, not as a requirement.

### WHY THE DRAIN HAS TO BE ASYMMETRIC

Triskaidekaphobia reads "At the beginning of your upkeep, choose one — • Each player with exactly 13 life loses the game, then each player gains 1 life. • Each player with exactly 13 life loses the game, then each player loses 1 life."

Two clauses in that text govern the entire deck:

1. **"Each player" includes you.** There is no controller exemption.
2. **The loss check resolves BEFORE the life shift.** "…loses the game, *then* each player gains/loses 1 life." So if you are sitting on 13 at your own upkeep, choosing the gain mode does **not** save you — you have already lost. The mode is a tool for setting up a *future* upkeep, never an escape hatch on the current one.

That is why a symmetric drain is not good enough. Grind both players downward in lockstep and you reach a shared 13, which is a **draw**. Blood Artist is the answer because it moves the two totals in *opposite* directions: "target player loses 1 life **and you gain 1 life**." Seven triggers take an untouched opponent from 20 to exactly 13 while taking you to 27. The gap is the point.

### THE ENGINE, AND WHAT "RENEWABLE" ACTUALLY MEANS

The first draft of this deck was wrong about its own fodder, and the correction is worth stating plainly because it changed the build:

| Card | What it actually gives | Cost per drain trigger |
|---|---|---|
| Butcher Ghoul | Undying reads "if it had **no +1/+1 counters** on it, return it … **with a +1/+1 counter** on it" — the counter it returns with is the condition that blocks the next return. **Two deaths per copy, ever.** | {1}{B} for two |
| Gravecrawler | "You may cast this card from your graveyard **as long as you control a Zombie**" — 6 of the 12 creature cards here are Zombies, plus every Ghoulish Procession and Deluge of the Dead token. **Genuinely unbounded.** | **{B}** |
| Haunted Dead | "{1}{B}, Discard two cards: Return this card from your graveyard **to the battlefield**" — and the return is an *enter*, so it remakes its 1/1 flying Spirit. Two bodies per recursion. | {1}{B} **plus two cards** |
| Ghoulish Procession | "Whenever one or more **nontoken** creatures die" — token deaths do not retrigger it, so it is gated on a nontoken death each turn, not free. | gated, once per turn per copy |

Gravecrawler is what carries the loop, not Haunted Dead. Haunted Dead's two-card cost is real in a deck with two net-positive-card spells out of 23.

### PARITY: THE TRAP THAT ISN'T IN ANY RULEBOOK

Step size 1 only holds with **exactly one** drain permanent on the battlefield. With two Blood Artists, or one Blood Artist plus The Meathook Massacre, every death is −2 — and from 20 that runs 18 → 16 → 14 → 12, **skipping 13 entirely**.

Three fixes, all in the list:

- **Blood Artist's drain is targeted.** A surplus trigger can be pointed at *yourself* for a net-zero −1/+1, preserving odd parity and holding an opponent's already-set 13 in place. The Meathook Massacre has no such valve — its "each opponent loses 1 life" is mandatory and untargeted.
- **Siege Zombie is exactly 1 and consumes nothing.** "Tap three untapped creatures you control: Each opponent loses 1 life" moves the opponent by one, never moves you, and needs no fodder and no outlet.
- **Tree of Perdition ignores parity entirely** by setting the number outright.

### THE SECOND TRISKAIDEKAPHOBIA IS NOT JUST REDUNDANCY

With two copies on the battlefield, **two triggers go on the stack each upkeep and you order them.** Trigger one checks (nobody at 13) and shifts; trigger two checks again and kills. That widens the kill window from {13} to **{12, 13, 14}**: an opponent on 12 dies if you choose "gains 1 life" twice; an opponent on 14 dies if you choose "loses 1 life."

The same mechanism can kill **you**. A pilot on 12 choosing the gain mode is moved to exactly 13 before the second trigger's check, and the second trigger kills them. At 14 with the lose mode, likewise. Track your own total before you choose.

### WHAT THIS DECK CANNOT DO

One conceded class: **artifacts and enchantments.** Mono-black has no "destroy or exile target artifact or enchantment" effect at any rarity in this cube — the only pool answer is Maelstrom Pulse, which is B/G.

The graveyard and stack classes were conceded in an earlier draft and both concessions turned out to be wrong. Deluge of the Dead reads "{2}{B}: Exile target card from **a** graveyard" — unrestricted and repeatable, unlike Epitaph Golem and Soul Separator which both read "*your* graveyard" — and it answers this cube's densest threat class (graveyard interaction, 75 cards, density 0.271). Collective Brutality was sitting in the sideboard while the rare budget had an unspent slot. Both were fixed by maindecking the cards rather than by rewording the concession.

Defeating the Siege on Invasion of Innistrad is close to free here, which is the joke that makes it work: Ghoulish Procession's tokens have **decayed** — "can't block. When it attacks, sacrifice it at end of combat" — so they have to attack to do anything, and their forced sacrifice is itself a Blood Artist trigger.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (23 nonland):  1:4  2:10  3:2  4:7
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  win_condition: 8 copies (effective 5.7: Blood Artist@0.7, Blood Artist@0.7, Siege Zombie@0.6, Siege Zombie@0.6, The Meathook Massacre@0.5, Restless Bloodseeker // Bloodsoaked Reveler@0.6) → p=0.88 (need ≥ 0.75)
  PASS  sacrifice_outlet: 5 copies (effective 4: Village Rites@0.4, Killing Wave@0.6) → p=0.77 (need ≥ 0.75)
  PASS  fodder: 6 copies → p=0.90 (need ≥ 0.75)
  PASS  life_dial: 9 copies → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 61%  T2 98%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre, Killing Wave
  OK        single_large_threat: Tragic Slip, Invasion of Innistrad // Deluge of the Dead, Killing Wave
  CONCEDED  noncreature_permanents: Mono-black has no 'destroy or exile target artifact/enchantment' effect anywhere in this cube - the dossier probe found 0 in B and the only pool answer, Maelstrom Pulse, is B/G. This is now the deck's ONLY conceded class; the graveyard concession was withdrawn at Phase 9 when the Challenger showed it was factually wrong.
  OK        stack: Collective Brutality
  OK        graveyard: Invasion of Innistrad // Deluge of the Dead
```

- Curve PASSED. Combo has no fixed curve band beyond the thesis-turn top-end rule; the distribution is 1:4 2:10 3:2 4:7 across 23 nonland cards, with 14 of 23 at mana value 2 or less.
- Assembly PASSED on all four declared roles at thesis turn 7 (win_condition p=0.88, sacrifice_outlet p=0.77, fodder p=0.90, life_dial p=0.97). sacrifice_outlet is the binding constraint at 0.77 against a 0.75 threshold, and it is discounted honestly: Village Rites is weighted 0.4 as a one-shot rather than a repeatable outlet, Killing Wave 0.6 as a one-shot MASS outlet whose symmetry can hurt the pilot. This constraint is what fixed the Phase 9 repair: every candidate cut had to preserve an effective outlet count of at least 3.77, which is why Demonmail Hauberk and Village Rites survived cards that were individually stronger.
- The thesis turn is 7, not the 6 originally proposed. The Step-0 critic demonstrated arithmetically that no sequence in the earlier list produced seven drain triggers by the end of turn 5; that was accepted rather than argued with, and the fodder economy was rebuilt around {B}-per-trigger recursion instead of 4-mana-per-trigger recursion.
- Goldfish PASSED at 87% keepable against an 80% threshold, with 88% reaching 3 lands by turn 3.
- Coverage PASSED with ONE written concession. The pre-grill build carried three; the Challenger demonstrated that the graveyard concession was factually wrong (Deluge of the Dead reads 'a graveyard', not 'your graveyard') and that the stack concession was self-inflicted (Collective Brutality was sitting in the sideboard while the rare budget had an unspent slot). Both were withdrawn by maindecking the cards.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | The genuine mana sinks are Gravecrawler ('You may cast this card from your graveyard as long as you control a Zombie' - unbounded, {B} per drain trigger, and 6 of 12 creature cards are Zombies), Haunted Dead x2 ({1}{B} each to return themselves to the battlefield), Deluge of the Dead's repeatable '{2}{B}: Exile target card from a graveyard', and the two {X} spells (The Meathook Massacre, Killing Wave). Corrected at Phase 9: the earlier version of this entry also named Siege Zombie and Demonmail Hauberk, whose costs are 'Tap three untapped creatures' and 'Sacrifice a creature' - neither consumes mana, so neither absorbs a flood. |
| `screw` | mitigation | 14 of the 23 nonland cards cost 2 or less. The honest floor, corrected at Phase 9: a turn-1 Gravecrawler into a turn-2 Blood Artist is not yet a functioning dial, because the cheapest repeatable outlet is Falkenrath Torturer at {2}{B} on turn 3 - the turn-2 board is a drain payoff waiting for a way to feed it. Village Rites at {B} and Tragic Slip at {B} both operate on one land. At 17 lands, P(2-4 lands in the opening 7) is 0.7945 and the goldfish reports 87% keepable with 88% reaching 3 lands by turn 3. |
| `decapitation` | mitigation | This build exists BECAUSE the fortress version's single Tree of Perdition was a decapitation target. Here Tree is a shortcut, not a requirement, and there are two structurally independent kill routes: Blood Artist x2 driven by a sacrifice outlet, and Siege Zombie x2 which needs neither an outlet nor fodder nor Blood Artist. Removal on Blood Artist leaves Siege Zombie; removal on Siege Zombie leaves Blood Artist; removal on Falkenrath Torturer leaves Demonmail Hauberk, which is an artifact. The Phase 6b win_condition role carries 7 physical copies at 5.1 effective. |
| `gas-out` | mitigation | Net-positive-card count is 2 of 23 (Village Rites' 'Draw two cards' for one body; Collective Brutality 2-for-1s when escalated). Beyond cards, the deck refuels its BOARD from the graveyard without spending any: Gravecrawler recasts itself for {B}, Haunted Dead returns itself and remakes its Spirit token for {1}{B}, Butcher Ghoul returns once via undying, and Deluge of the Dead's graveyard-exile ability makes a 2/2 Zombie whenever it exiles a creature card. Ghoulish Procession adds a fresh 2/2 per turn - corrected at Phase 9, it is NOT 'from nothing': its trigger reads 'Whenever one or more NONTOKEN creatures die', so token deaths do not retrigger it and it is gated on a nontoken death each turn, which Gravecrawler supplies for {B}. |
| `raced` | accepted | Against this cube's fastest ground aggro the deck can die on turn 5-6 before seven drain triggers accumulate. Mitigating it further would mean maindecking blockers instead of fodder and outlets — but this deck's bodies are deliberately sacrificial, and a 1/1 Butcher Ghoul that is worth two Blood Artist triggers is worth more to the plan than a 1/4 wall that is worth none. Trading fodder for walls is the fortress build, which is built separately. The concession is priced into the sideboard: Gluttonous Guest x2 (a 1/4 that is ALSO fodder), Murderous Compulsion x2, Infernal Grasp and Wild-Field Scarecrow are six dedicated anti-aggro cards, and Killing Wave's second copy comes in as a sweeper that is simultaneously a mass Blood Artist trigger. |
| `disruption-fizzle` | mitigation | Rewritten at Phase 9; the earlier claim that the opponent has 'no window to respond' was unsupported by oracle text and is withdrawn - a free sacrifice outlet grants speed, not protection, and the opponent holds priority both on their own end step and in response to the Triskaidekaphobia trigger. What the deck actually has is three layers. (1) SPEED: Falkenrath Torturer's 'Sacrifice a creature:' has no mana or tap cost, so the 13 is set as late as the opponent's end step, minimising the window rather than eliminating it. (2) PROACTIVE DISRUPTION: Collective Brutality was maindecked specifically for this mode - 'You choose an instant or sorcery card from it. That player discards that card' removes the response before the turn arrives, and it is the only card in the 50 that touches the stack. (3) RETRY: nothing is lost if the chain is broken. The fodder is in the graveyard where Gravecrawler ({B}) and Haunted Dead ({1}{B}) retrieve it, both Blood Artists and both Siege Zombies remain, and the dial simply turns again next turn. A countered Triskaidekaphobia costs one of two copies. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Heartless Summoning | ANTI-SYNERGY twice over: 'Creatures you control get -1/-1' makes Tree of Perdition a 0/12 so its exchange sets 12 instead of 13 and Triskaidekaphobia never fires; and it kills this build's whole 1-toughness fodder base (Indulgent Aristocrat 1/1, Butcher Ghoul 1/1, Ecstatic Awakener 1/1, Blood Artist 0/1) on the spot. |
| Chalice of Life // Chalice of Death | '{T}: You gain 1 life. Then if you have at least 10 life more than your starting life total, transform' needs 30 life — ten untouched activations — before the '{T}: Target player loses 5 life' side exists. Gaining 1 at a time also means a pilot on 12 clicks straight onto exactly 13, which this deck's own Triskaidekaphobia kills them for. Blood Artist does the same lifegain job at 1 mana while also draining. |
| Griselbrand | 'Pay 7 life: Draw seven cards' is a 7-point self-dial and 20 - 7 is exactly 13, the number this deck's own enchantment kills for. {4}{B}{B}{B}{B} is also uncastable on a 16-17 land count, and it would eat a mythic slot from a budget of 5. |
| Midnight Scavengers | 'return target creature card with mana value 3 or less' — Tree of Perdition is mana value 4, so the single recursion target that matters is out of range. Crawl from the Cellar and Edgar's Awakening both do it without the restriction. |
| Asylum Visitor | 'if that player has no cards in hand, you draw a card and you lose 1 life' — in a deck with Village Rites and Blood token draw the hellbent condition is reached often, so this is a repeating 1-point self-dial toward the 13 that kills the pilot. The 3/1 body also dies to its own team's Meathook. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.14 adj [MV 2.52 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] commons/uncommons max 2 copies: PASS - highest count across the 50-card pool is 2; verified by Phase 5C check 3
[PASS] rares/mythics max 1 copy each: PASS - Tree of Perdition (M), The Meathook Massacre (M), Gravecrawler (R), Collective Brutality (R), Invasion of Innistrad (R), one each, all mainboard
[PASS] max 5 rares/mythics across MB+SB: PASS - 5 used, all mainboard; sideboard contains zero rares or mythics. AT THE CAP. The pre-grill build left one slot unspent while using 'the rare budget' as a cut reason five times, which the Challenger correctly called a void tiebreak; the slot is now spent on Invasion of Innistrad and those cuts were re-argued on mechanism.
[PASS] cross-board copy totals: PASS - Killing Wave is uncommon, 1 mainboard + 1 sideboard = 2
[PASS] basic lands exempt (format-supplied): PASS - 17 Swamps
[PASS] all cards from the cube mainboard or basics: PASS - verified by Phase 5C check 2 (exact-name membership)
```