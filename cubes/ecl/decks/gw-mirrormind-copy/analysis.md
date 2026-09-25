---
deck_name: "gw-mirrormind-copy"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GW"
format: "40-card"
built_at: "2026-08-09T16:33:27Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x2    Forest                         2 of the 4 green sources; only 3 cards need a hard G
x12   Plains                         12 of the 14 white sources (86% pip demand)
x1    Evolving Wilds                 fetches a basic tapped; the 5th green source when needed
x2    Radiant Grove                  GW dual, always enters tapped
```

### CREATURES (10)

```
CMC  Card                           Qty   Color  Role                           Rar
1    Goldmeadow Nomad               x2    W      Trigger from the graveyard     C
1    Kinsbaile Aspirant             x1    W      Turn-1 Kithkin; equip target   U
2    Eclipsed Kithkin               x2    WG     Only card selection; digs 4    U
3    Flock Impostor                 x2    W      Maindeck flier; changeling Kit U
4    Champion of the Clachan        x1    W      Equip target; static anthem    R
4    Gallant Fowlknight             x2    W      Team pump + Kithkin first stri C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                           Qty   Color  Role                           Rar
1    Blossoming Defense             x2    G      Hexproof for the equipped body U
3    Brigid's Command               x1    WG     Crown-free copy effect; 2 mode R
3    Crib Swap                      x2    W      Unconditional exile            U
3    Protective Response            x2    W      Convoked removal               U
```

### OTHER SPELLS (6)

```
CMC  Card                           Qty   Color  Role                           Rar
2    Stalactite Dagger              x1    C      Cheap trigger; spare equip tar C
3    Ajani, Outland Chaperone       x1    W      Free trigger; survives wipes   M
3    Clachan Festival               x2    W      The only DOUBLE-copy trigger   U
4    Mirrormind Crown               x1    C      The redirect: tokens become co R
5    Kinbinding                     x1    W      Free per-turn trigger; backup  R
```

## SIDEBOARD (10)

```
Card                           Qty   Color  Role / When to board in                        Rar
Unforgiving Aim                x2    G      vs fliers (41-card evasion class) and vs encha C
Chomping Changeling            x2    G      vs artifacts/enchantments; a changeling body,  U
Pyrrhic Strike                 x2    W      vs artifacts, enchantments AND creatures MV>=3 U
Liminal Hold                   x2    W      vs any problem nonland permanent; WHITE, chose C
Rooftop Percher                x2    C      vs graveyard decks (39-card class), which also C
```

## ANALYSIS

### DECK IDENTITY

A GW Kithkin go-wide deck with a Mirrormind Crown copy-engine CEILING. When the Crown is attached to Champion of the Clachan, the first token event each turn becomes copies of a 4/5 Kithkin lord, and because each copy carries the static 'Other Kithkin you control get +1/+1' the copies pump each other and the whole token board -- quadratic damage off a linear token engine. Clachan Festival's two-token ETB converts one redirect into TWO copies. That is the ceiling, not the plan: the full assembly needs two singletons and lands in roughly 9-12% of games (see crown_singleton_ledger). The other ~88% is a Kithkin go-wide deck that kills with an anthem stack -- Champion, Kinbinding and Gallant Fowlknight x2 -- over a board fed by 8 token producers.

### THE ENGINE, AND WHAT IT ACTUALLY COSTS

`Mirrormind Crown`: *"As long as this Equipment is attached to a creature, the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature."* Attached to `Champion of the Clachan`, every copy is a 4/5 Kithkin Knight carrying the **static** *"Other Kithkin you control get +1/+1"* — so the copies pump each other **and** the token board.

With k Champions and t other Kithkin, each Champion is (3+k)/(4+k) and each token is (1+k)/(1+k). Two Champions plus five 1/1 Kithkin tokens is 2× 5/6 + 5× 3/3 = **25 power off one trigger**. That is quadratic damage from a linear token engine, and it is why the equip target has to be a *lord* rather than a big body.

`Clachan Festival` is the deck's best trigger for a precise textual reason: *"create **two** … tokens"* is **one event producing two tokens**, and the Crown says *"that many"* — so it yields **two copies**. It is the only card in the deck that does; `Brigid's Command`'s two token modes resolve as *sequential* events and yield one.

### FOUR RULES FACTS THAT DECIDED CARD SELECTION

All four were independently verified by both grill agents against oracle text:

| Fact | Consequence for this deck |
|---|---|
| *"attached to a **creature**"* gates the whole redirect | With no creature, the Crown does nothing. A token source alone does **not** restart the combo after a wipe — `Stalactite Dagger` is in the list partly because its ETB token is a spare equip target. |
| Copies are **created**, not cast | A Champion copy never pays *"behold a Kithkin and exile it"*, and its leaves-the-battlefield clause returns nothing. |
| *"one or more … that many"* | A two-token event yields two copies; a **second** token source that turn is wasted. |
| Enters-with-counters is **copiable** | `Bristlebane Battler` is excluded outright — every copy would arrive under five −1/−1 counters. |

### THE HONEST NUMBER: THIS IS A GO-WIDE DECK WITH A COMBO CEILING

The self-grill forced this into the open, and the record now leads with it rather than burying it.

| Event | Probability by turn 7 |
|---|---|
| Crown drawn | **0.350** (0.325 on the play) |
| Crown **and** Champion — the plan the copy math describes | **0.117** |
| Crown + Champion + a resolvable free trigger | **0.093** |

So the advertised combo happens in roughly **one game in nine**. The Crown is 1 of only **2 GW-legal copy effects in the entire 282-card pool** (the other, `Brigid's Command`, is already here), so the rare cap makes redundancy impossible by construction.

What carries the other ~88% is an anthem stack over a token board: `Champion of the Clachan`, `Kinbinding`, and `Gallant Fowlknight` ×2, fed by **8 of 23** nonland cards that make tokens.

### THE ASSEMBLY GATE, AND A REPAIR THAT OVERSHOT

Phase 6b's assembly check **failed** at p=0.69 — the payoff class was four singleton rares. The first repair added `Gallant Fowlknight` ×2 and `Timid Shieldbearer` ×2, reaching p=0.93.

The grill then showed that repair overshot by ~4.6×. The gate's passing floor is an effective weight of **3.8**, and `Mirrormind Crown` (1.0) + `Gallant Fowlknight` ×2 (1.0 each) + `Champion` (0.8) hits **exactly 3.8**. `Timid Shieldbearer` ×2 were surplus, and I had charged their cost to the gate. Cutting them dropped the payoff slot from 26.1% to **17.4%** and still passes at p=0.86.

Those two freed slots became **`Flock Impostor` ×2** — which mattered more than the anthems did, because the deck previously had **zero fliers, zero reach and zero trample** across every creature card, against the cube's **41-card (15.8%) evasion class**. The `raced` failure mode had been logged as *accepted* on the grounds that fixing it would break the assembly gate; that cost recomputed to **zero**, so the acceptance was false and is now a real mitigation.

### WHY THE SIDEBOARD IS WHITER THAN IT LOOKS

The first sideboard was **6 of 10 green** against **4 dedicated green sources** — it would have turned a passing manabase into one that cannot cast its own sideboard in roughly a third of openers. `Dawn's Light Archer` ×2 became `Liminal Hold` ×2 (white), which also closes the conceded noncreature-permanent class. Counted precisely: 6 of 10 sideboard cards answer an **enchantment**, but only **4 of 10** answer an **artifact** — `Unforgiving Aim` has no artifact mode.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (23 nonland):  1:5  2:3  3:10  4:4  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.2: Brigid's Command@0.6, Champion of the Clachan@0.8, Kinbinding@0.8) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.8: Goldmeadow Nomad@0.9, Goldmeadow Nomad@0.9) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 59%  T2 87%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Kinbinding, Gallant Fowlknight, Protective Response
  OK        single_large_threat: Crib Swap, Protective Response, Blossoming Defense
  CONCEDED  noncreature_permanents: No maindeck artifact or enchantment removal. Answered post-board by Liminal Hold x2 ('exile up to one target nonland permanent an opponent controls'), Chomping Changeling x2 and Pyrrhic Strike x2 against a cube class of 32 of 277 cards (11.6%). Counted precisely: 6 of 10 sideboard cards answer an ENCHANTMENT, but only 4 of 10 answer an ARTIFACT -- Unforgiving Aim's three modes are flier-kill, enchantment-kill and a token, with no artifact mode.
  CONCEDED  stack: No counterspell exists in GW anywhere in this pool -- the cube's only counterspells are Spell Snare, Wild Unraveling and Glen Elendra Guardian, all mono-blue. This deck cannot protect the Crown from a counterspell; Blossoming Defense x2 protects the equipped CREATURE, which is the far more common line of attack.
  CONCEDED  graveyard: No maindeck graveyard hate, which also means Goldmeadow Nomad's graveyard activation is exposed to the cube's 39 graveyard-interaction cards. Rooftop Percher x2 is the sideboard answer, and it doubles as a flying blocker and a legal changeling equip target.
```

- The Phase 6b assembly check initially FAILED at p=0.69 with a payoff class of Mirrormind Crown, Brigid's Command, Champion of the Clachan and Kinbinding (effective 3.2). Per the gate's instruction the fix was to add functional copies rather than revise the thesis turn -- revising instead would have needed a goldfish of roughly 10. Gallant Fowlknight x2 and Timid Shieldbearer x2 were added, taking payoff to p=0.93.
- A Phase 9 finding then showed that repair over-corrected by roughly 4.6x: the gate's own formula puts the passing floor at effective weight 3.8, which Crown + Gallant Fowlknight x2 + Champion meet exactly. Timid Shieldbearer x2 were cut as surplus, the payoff slot fell from 26.1% to 17.4%, and the class still passes at p=0.86. The two freed slots became Flock Impostor x2.
- No WARN-tier flags remain: curve, goldfish and coverage all PASS on the repaired list.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Clachan Festival x2's '{4}{W}: Create a 1/1 green and white Kithkin creature token' is the deck's only genuinely repeatable sink; Stalactite Dagger's and Mirrormind Crown's 'Equip {2}' are one-time-per-attach outlets rather than repeatable sinks, which is stated rather than glossed. Ajani's +1 adds a body for free every turn. |
| screw | mitigation | 17 lands, the computed target. The goldfish check on the FINAL list measures 87% keepable hands and 86.9% making a turn-2 play. That figure has been corrected twice: an early version rounded a pre-repair measurement to 94%, and a later one cited 92.4%, which was still the pre-repair value -- cutting Timid Shieldbearer x2 for Flock Impostor x2 moved two cards from MV 2 to MV 3 and took the turn-2 rate down to 86.9%. That drop is a real, disclosed cost of the Phase 9 repair, paid to buy the deck its first maindeck evasion. 8 of 23 nonland cards cost 2 or less. Eclipsed Kithkin x2 dig four deep for a Kithkin, Forest or Plains and cast off two Plains via their hybrid cost. The honest exposure is the top end: the Crown's {4} plus Equip {2} is a six-mana assembly, so a two-land hand plays out as a go-wide aggro deck and simply never combos. |
| decapitation | mitigation | The Crown answered on sight -- or, far more often, never drawn (p=0.350 by turn 7 on the draw, 0.325 on the play; the full Crown-plus-Champion assembly only 0.117) -- does not end the plan, because the Crown is a ceiling rather than a requirement. The fallback is SIX payoff cards, not seven: Champion of the Clachan's static anthem, Kinbinding's '+X/+X ... creatures that entered this turn', Gallant Fowlknight x2's team pump and Kithkin first strike, Brigid's Command, and the Crown itself. CORRECTED after a Phase 9 finding: earlier versions said 'seven payoff copies', which laundered the weighted effective value into a physical card count. The class is 6 cards at effective 5.2. If instead the equipped CREATURE is answered, the Crown stays on the battlefield and re-attaches for {2} to any of 10 creature cards or any token. |
| gas-out | mitigation | Stated as a real weakness: this deck contains ZERO card-draw effects in 23 nonland cards -- the only card selection is Eclipsed Kithkin x2's four-card dig. What it has instead is three sources that keep acting from an empty hand: Ajani's '+1: Create a 1/1 ... token', Clachan Festival x2's '{4}{W}: Create a 1/1 ... token', and Goldmeadow Nomad x2's '{W}, Exile this card from your graveyard: Create a 1/1 ... token'. CORRECTED after a Phase 9 finding: an earlier version listed four and claimed 'three of those four are non-creature permanents', which was false -- Timid Shieldbearer and Goldmeadow Nomad are both creature cards. Of the three now listed, TWO are non-creature permanents (Ajani a planeswalker, Clachan Festival an enchantment) and survive a wipe; Goldmeadow Nomad's activation survives for a different reason, because it fires from the graveyard. The pool does contain unused draw at common/uncommon -- Mistmeadow Council and Thoughtweft Charge -- declined only because every nonland slot is spent on the engine or the go-wide fallback. |
| raced | mitigation | CONVERTED from an 'accepted' after a Phase 9 finding showed the stated cost recomputed to ZERO. The old acceptance claimed maindecking blockers would re-open the assembly gate; in fact cutting the two payoff slots that were surplus to the gate leaves p=0.86, still passing, so the mitigation was free. Flock Impostor x2 ('Changeling ... Flash / Flying', {2}{W} 2/2) now gives the deck its first maindeck evasion against a 41-of-277 (15.8%) evasion class, and being changelings they are Kithkin -- inside Champion's anthem, behold fodder, and legal Crown equip targets. Reinforced post-board by Rooftop Percher x2 (3/3 flying). Residual honesty: this is still the slowest of the three Kithkin builds, with a six-mana assembly and a thesis turn of 7, so a fast evasive clock remains a bad matchup. |
| disruption-fizzle | mitigation | The combo turn's exposure is real and is named rather than waved away: Equip is SORCERY-SPEED, so Champion of the Clachan's Flash defers exposure to the opponent's turn but does not remove it on the turn the Crown is actually attached. Blossoming Defense x2 is the answer -- one green mana for 'gets +2/+2 and gains hexproof until end of turn' blanks targeted removal in that window, and hexproof beats exile-based removal where indestructible would not. If the combo turn is disrupted anyway, the Crown is a permanent that survives: it re-attaches for {2} next turn, and the six-card anthem fallback (effective weight 5.2) continues regardless. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bristlebane Battler | A terrible copy target, and the reason is a rules fact rather than a rate: 'This creature enters with five -1/-1 counters on it' is a copiable replacement effect, so EVERY token copy arrives as a 1/1. Copying it produces nothing. |
| Curious Colossus | A 7/7 whose ETB shrinks the opponent's whole board would re-trigger on every copy, but {5}{W}{W} is mana value 7 on top of the Crown's {4} plus Equip {2} -- 13 mana across two turns, against a goldfish of 7. |
| Adept Watershaper | Cut at the judge stage. 'Other TAPPED creatures you control have indestructible' only applies once attackers are declared, but the exposure window that actually matters is my own main phase while I am equipping and the creature is untapped. It also does nothing against exile, -X/-X or bounce. |
| Dundoolin Weaver | Cut at the judge stage. 'return target permanent card from your graveyard to your hand' rebuys a Crown that was drawn and killed, but does nothing in the ~65% of games where the Crown is never drawn -- it insures the wrong failure, is conditional on controlling three or more creatures, and each rebuy costs a recast {4} plus a fresh Equip {2}. |
| Kithkeeper | Its Vivid ETB makes tokens, but the Crown redirect is 'the FIRST time you would create one or more tokens each turn' -- by the time a 7-mana body resolves that redirect is usually already spent, so the copies would make plain 1/1s. |
| Mutable Explorer | 'create a tapped Mutavault token' makes a LAND token, not a creature entering, so it is not a Crown trigger at all -- and it costs a rare. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color' genuinely compresses the Crown's 6-mana assembly by a turn, but it taps the same bodies Protective Response needs for Convoke and the same body the Crown wants to attach to. |
| Personify | Two entries at instant speed is a fine Crown trigger, but the Crown only redirects the FIRST token event each turn, so the second entry is wasted on any turn the engine is online. |
| Brigid, Clachan's Heart // Brigid, Doun's Mind | The transform loop yields one token per two turns, and the back face's '{T}: Add X {G} or X {W}' ramp is real -- but it costs a rare against a budget already spent on the Crown, Kinbinding, Champion, Brigid's Command and Ajani. |
| Thoughtweft Lieutenant | Cut during FILL to make room for the anthem copies the assembly gate demanded; its trample grant targets one creature per trigger, where Gallant Fowlknight's first strike covers the whole Kithkin board. |
| Winnowing | A six-mana sorcery competing directly with the Crown's six-mana assembly for the same turn, and this deck has no typed-purity requirement to make it one-sided. |
| Temple Garden | The pool's only untapped-capable dual ('you may pay 2 life'), but the 5-rare budget is fully spent on the combo pieces, and at 13.6% green pip demand the fixing it buys is small. |
| Moon-Vigil Adherents | '+1/+1 for each creature you control and each creature card in your graveyard' is a genuine go-wide payoff, but it is a 0/0 that dies to any -X/-X effect and its {2}{G}{G} double-green fights an 86%-white pip demand. |
| Thoughtweft Imbuer | 'Whenever a creature you control attacks alone' is anti-correlated with a board of token copies, and a four-mana 0/5 adds no damage. |
| Crossroads Watcher | A 3/3 trampler that grows per entry, but it is a per-entry payoff in a deck whose payoff class needed CUMULATIVE anthems to pass the assembly gate. |
| Mistmeadow Council | 'When this creature enters, draw a card' would be the deck's only card draw and its copies would each draw, but at mana value 5 (4 with a Kithkin) it competes with the Crown's assembly turn. |
| Firdoch Core | Fixing plus a Kithkin card in hand plus a {4} animation, but at {3} it lands on the same turn the deck wants to be casting the Crown. |
| Gilt-Leaf's Embrace | Sideboard consideration: 'Flash ... gains trample and indestructible until end of turn' protects the equipped creature from destroy effects, but Blossoming Defense does the job for one mana instead of three and also beats exile via hexproof. |
| Keep Out | Sideboard consideration: 'deals 4 damage to target tapped creature' is dead against untapped blockers, and its enchantment mode is duplicated by Unforgiving Aim and Pyrrhic Strike, both already in the sideboard. |
| Liminal Hold | Sideboard consideration: 'exile up to one target nonland permanent an opponent controls' answers any permanent, but at four mana it competes with the Crown's assembly and Pyrrhic Strike answers the same class for three. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.7   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.27 adj [MV 2.7 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  13.6%  prod  23.5%  gap  -9.9pp  [OK]
  W  demand  86.4%  prod  82.4%  gap  +4.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies                       PASS  (17 distinct; 0 over cap)
rares/mythics max 1 copy each                        PASS  (5 distinct, all at qty 1)
max 5 rare+mythic across MB+SB                       PASS  (5/5: Ajani, Outland Chaperone, Brigid's Command, Champion of the Clachan, Kinbinding, Mirrormind Crown)
basic lands unlimited (format-supplied)              PASS  (Forest x2, Plains x12 -- exempt)
all cards from cube mainboard                        PASS  (exact-name match vs working_pool, 0 phantoms)
colour identity G/W, no splash                       PASS  (effective_cost.best_mode non-None for every nonland; splash list empty)
deck size 40 + sideboard 10                          PASS  (mainboard 40, sideboard 10)
any copy-limit violation                             NONE
```
