---
deck_name: "rg-changeling-kindred-stompy"
cube_id: "ecl"
cube_slug: "ecl"
colors: "RG"
format: "40-card"
built_at: "2026-08-11T05:02:31Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x9   Forest                     basic
  x5   Mountain                   basic
  x1   Evolving Wilds             fetches a basic, enters tapped
  x2   Wooded Ridgeline           GR dual, enters tapped
```

### CREATURES (19)

```
CMC  Card                       Qty  Col  Role                               Rar
  2  Bristlebane Battler        x1   G    payoff                             R
  2  Flame-Chain Mauler         x1   R    threat                             C
  2  Lys Alana Dignitary        x2   G    enabler                            U
  2  Lys Alana Informant        x1   G    enabler                            C
  3  Changeling Wayfinder       x1   C    engine                             C
  3  Crossroads Watcher         x1   G    threat                             C
  3  Gangly Stompling           x2   RG   threat                             C
  3  Mutable Explorer           x1   G    enabler                            R
  3  Sizzling Changeling        x2   R    threat                             U
  3  Vinebred Brawler           x2   G    payoff                             U
  4  Bristlebane Outrider       x2   G    payoff                             U
  4  Champions of the Perfect   x1   G    payoff                             R
  4  Safewright Cavalry         x2   G    payoff                             C
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                       Qty  Col  Role                               Rar
  2  Giantfall                  x1   R    interaction                        U
  2  Sear                       x2   R    interaction                        U
```

### OTHER SPELLS (1)

```
CMC  Card                       Qty  Col  Role                               Rar
  3  Firdoch Core               x1   C    engine                             C
```

## SIDEBOARD (10)

```
Card                       Qty  Col  Rar  Role / When to board in
Blossoming Defense         x1   G    U   vs spot-removal decks - one mana to save the oversized body the whole plan rides on, and +2/+2 can also steal a combat
Chomping Changeling        x2   G    U   vs artifact (11) or enchantment (21) decks - 'When this creature enters, destroy up to one target artifact or enchantment' on a changeling body, so the answer costs no tribal density
Unforgiving Aim            x2   G    C   vs the cube's 41-card evasion suite - 'Destroy target creature with flying' is this deck's only clean answer to a flier; the other modes destroy an enchantment or make a 2/2 Elf, so it is never dead
Feed the Flames            x2   R    C   vs high-toughness and recursive creatures - 33 of the cube's 168 creature cards have toughness 5 or greater and survive Sear's 4 damage; the 'exile it instead' clause also answers the recursion suite at the point of death
Rooftop Percher            x2   C    C   vs graveyard/recursion decks (39 graveyard-interaction cards in this cube, 15% density) - and being a changeling it is still an Elf for Vinebred Brawler and Safewright Cavalry while it hates
Selfless Safewright        x1   G    R   vs targeted removal, and as an alpha-strike blowout. 'Flash ~ Convoke ~ choose a creature type. Other permanents you control of that type gain hexproof and indestructible until end of turn' - choosing Elf covers 14 of the 19 creature cards (they are every type, or printed Elves). A regex probe finds at least 17 cards in this 277-card cube carrying targeted creature removal (a probe proves presence, never absence, so treat 17 as a floor); against those decks this both protects the board and turns any attack into a one-sided combat. It is NOT primarily a sweeper answer - this cube contains only 2 sweepers (Ashling's Command, Soul Immolation).
```

## ANALYSIS

### DECK IDENTITY

An R/G creature deck that buys statlines at a discount and then makes sure they connect. The discount comes from changelings: behold reads 'choose a X you control or reveal an X card from your hand', and a changeling is every creature type at once, so one card pays an Elf behold or a Goblin behold indifferently - which is what turns Champions of the Perfect into a 6/6 for four that also draws a card on every creature spell. The other discount is counter-shedding: Bristlebane Battler is a {1}{G} 6/6 trample that removes a -1/-1 counter every time another creature enters, and this list runs 19 creature cards to feed it. The evasion half is what separates this build from a generic green pile: Bristlebane Outrider cannot be blocked by creatures with power 2 or less, Safewright Cavalry cannot be blocked by more than one creature, Vinebred Brawler must be blocked and drags a blocker off someone else, and Flame-Chain Mauler buys menace with spare mana. 14 of the 19 creature cards are Elves, so Vinebred Brawler and Safewright Cavalry always have a target.

### TWO DISCOUNTS, ONE DECK

Every oversized body in this list is paid for by something other than mana.

**Discount one — behold.** *"Behold an Elf"* means *"choose an Elf you control or reveal an Elf card from your hand."* A changeling is every creature type, so it satisfies that clause, a Goblin behold, and an Elemental behold from the same card. **14 of the 19 creature cards** here are Elves — eight printed, six by changeling — which makes Champions of the Perfect a 6/6 for four that also reads *"Whenever you cast a creature spell, draw a card"*, and Lys Alana Dignitary a two-mana 2/3 instead of a four-mana one.

**Discount two — counter-shedding.** Bristlebane Battler is a `{1}{G}` **6/6 trample with ward {2}** that enters with five −1/−1 counters and removes one *"Whenever another creature you control enters."* There are **18 other creature cards** in the list. It is a two-mana card that becomes the biggest thing on the table by turn four or five without any dedicated support.

### THE PART THAT ISN'T JUST BIG GREEN CREATURES

A pile of large bodies loses to a pile of medium bodies that all block. This build was locked around the lens that fixes that — every four-drop carries a clause that makes blocking illegal or unprofitable:

| Card | The clause | What it beats |
|---|---|---|
| Bristlebane Outrider | "can't be blocked by creatures with power 2 or less" | Token swarms, 1/1s and 2/2s |
| Safewright Cavalry | "can't be blocked by more than one creature" | Gang blocks |
| Vinebred Brawler | "must be blocked if able" | Pulls the one good blocker off someone else |
| Flame-Chain Mauler | "{1}{R}: +1/+0 and gains menace" | Buys evasion with flood mana |
| Gangly Stompling / Bristlebane Battler | Trample | Chump blocks |

Note what Vinebred Brawler and Safewright Cavalry both need: *another target Elf you control*. That target exists on 14 of 19 creature cards precisely because changelings are Elves. In a non-changeling green deck those two cards are conditional; here they are not.

### THE MUTAVAULT DETAIL

Mutable Explorer makes *"a tapped Mutavault token — a land with '{T}: Add {C}' and '{1}: This token becomes a 2/2 creature with all creature types until end of turn.'"* That token is a **changeling land**: it is an extra mana source that does not cost a land slot, a body that survives a sweeper because it is only a creature when you choose, and — being all creature types — a legal Elf for both pump abilities and both behold costs the moment you animate it.

### WHAT THE GRILL CHANGED

Two things worth recording, because both were my errors:

1. I wrote the whole build rationale against **"16 creature cards"**. The real number is **19** — I had dropped Crossroads Watcher and both Bristlebane Outriders from my own count. Every dependent ratio moved (18 of 19, not 15 of 16). None of it flipped a decision, because the true density is *higher* than I claimed, but the recorded derivation was wrong as written.
2. The Challenger found **Lys Alana Informant** — a `{1}{G}` 3/1 printed Elf whose *"enters or dies, surveil 1"* switches on Lys Alana Dignitary's graveyard clause on both ends. It replaced one Flame-Chain Mauler and took the Elf count from 13 of 19 to 14 of 19.

### THE HONEST WEAKNESS

There is **no protection spell in the mainboard**. Blossoming Defense and Selfless Safewright are both one board-in away, and that is a real cost: a removal spell on the critical attack, or a sweeper on the turn the board assembles, takes the turn. Maindecking insurance would mean cutting a body, and every body cut is one fewer −1/−1 counter shed from Bristlebane Battler and one fewer trigger for Crossroads Watcher and Bristlebane Outrider. The deck's damage is a direct function of how many creatures it has deployed, so buying insurance shrinks the thing being insured. That is why `disruption-fizzle` is recorded as **accepted** rather than mitigated.

The manabase is the other compromise: **Wooded Ridgeline is the only free R/G dual in the entire cube and it enters tapped**, and unlike four other colour pairs, R/G has no shockland here — there is no untapped dual to buy even with a spare rare slot.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  2:8  3:10  4:5
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.5: Bristlebane Battler@0.7, Champions of the Perfect@0.8) → p=0.93 (need ≥ 0.75)
  PASS  enabler: 12 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 84%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Bristlebane Outrider, Safewright Cavalry
  OK        single_large_threat: Sear, Giantfall
  OK        noncreature_permanents: Giantfall
  CONCEDED  stack: No card with color identity within R/G in this pool counters a spell; this deck interacts only on the battlefield and accepts that a resolved spell must be answered after it lands.
  CONCEDED  graveyard: Rooftop Percher x2 is sideboarded rather than maindecked: at 5 mana it is above a curve that tops at 4, and a 3/3 flier is below the rate of the 4-drops it would displace in a deck whose plan is oversized bodies.
```

- No WARN-tier flags were raised. Curve reads 2:8 3:10 4:5 and returned PASS for aggro; goldfish 86% keepable, 88% three-lands-by-turn-3.

- Goldfish T1 play rate is 0%: the R/G slice contains no one-drop this build wants. The cheapest thing worth doing is Bristlebane Battler on turn 2, and the deck's plan is oversized bodies rather than an early clock, so the first play is deliberately turn 2 rather than turn 1.

- Coverage note recorded honestly: 'noncreature_permanents' passes on Giantfall, but Giantfall only destroys ARTIFACTS. The mainboard has no answer to an enchantment; Chomping Changeling x2 and Unforgiving Aim x2 are sideboarded for that class.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two repeatable sinks need no extra cards: Flame-Chain Mauler's '{1}{R}: This creature gets +1/+0 and gains menace until end of turn' converts every surplus land into evasive damage, and Safewright Cavalry's '{5}: Target Elf you control gets +2/+2 until end of turn' is a five-mana pump pointed at any of the 13 Elf creature cards. Firdoch Core's '{4}: This artifact becomes a 4/4 artifact creature until end of turn' turns the fixer into an attacker, and Mutable Explorer's Mutavault token is a land that becomes a 2/2 for {1}. |
| screw | mitigation | 8 of the 23 nonland cards cost two, so two-land hands act on curve. Lys Alana Dignitary x2 taps for {G}{G} once any of the 13 Elf cards is in the graveyard, Changeling Wayfinder fetches a basic to hand, Firdoch Core taps for any colour, and Mutable Explorer's Mutavault token is an extra land off a spell. The goldfish check measured 86% keepable hands and 88% three-lands-by-turn-3 over 1000 hands. |
| decapitation | mitigation | There is no single key card to answer: the plan is distributed across 8 payoff copies. Champions of the Perfect returns its exiled behold card when it leaves the battlefield, so killing it is not a two-for-one; Bristlebane Battler carries ward {2}, taxing the answer; and the deck's second-best draw is simply a different oversized body - Safewright Cavalry, Bristlebane Outrider and Gangly Stompling all attack profitably with no support. |
| gas-out | mitigation | Champions of the Perfect's 'Whenever you cast a creature spell, draw a card' is the refuel, and 19 of the 23 nonland cards are creature spells that trigger it. Sizzling Changeling x2 replaces itself when it trades ('exile the top card of your library. Until the end of your next turn, you may play that card'), Lys Alana Informant surveils on both entry and death, and Firdoch Core plus Safewright Cavalry's {5} ability convert a dead hand into board and damage without needing cards at all. |
| raced | mitigation | This deck blocks better than it races: Bristlebane Outrider is a 3/5, Lys Alana Dignitary a 2/3, Crossroads Watcher a 3/3, and Bristlebane Battler becomes a 6/6 with trample and ward {2}. Sear x2 answers any creature with toughness 4 or less at instant speed and Giantfall lets a 6/6 eat an attacker for two mana. The trade-off is that the deck has no lifegain, so a fast start that goes unanswered on turns 1-2 still puts it on a short clock. |
| disruption-fizzle | accepted | The critical turn is the alpha strike, and this build has NO protection spell in the mainboard - Blossoming Defense and Selfless Safewright are both sideboarded. A removal spell in response to an attack trigger, or a sweeper on the turn the board assembles, costs the whole turn. Mitigating it would mean maindecking Blossoming Defense over a body, and every body cut is one fewer -1/-1 counter shed from Bristlebane Battler and one fewer trigger for Crossroads Watcher and Bristlebane Outrider - the deck's damage output is a direct function of how many creatures it has deployed, so buying insurance shrinks the thing being insured. The concession is real and is why both protection cards are one board-in away. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Celestial Reunion | MYTHIC, and the closest rare-slot cut. 'choose a creature type and behold two creatures of that type ~ Search your library for a creature card with mana value X or less... If this spell's additional cost was paid and the revealed card is the chosen type, put that card onto the battlefield instead' - choosing Elf and beholding two changelings puts Champions of the Perfect (an Elf, MV 4) directly into play for {4}{G}, skipping its own behold-and-exile cost entirely. Excluded because a 5-mana sorcery that produces one body is a turn this aggro build cannot spare; it is the first card to add if the deck is retuned toward midrange. |
| Selfless Safewright | RARE. 'Flash ~ Convoke ~ choose a creature type. Other permanents you control of that type gain hexproof and indestructible until end of turn' - choosing Elf covers 13 of the 16 creature cards. Moved to the sideboard rather than the maindeck because it is a 5-mana card that adds nothing to the board on an empty table. |
| Moon-Vigil Adherents | UNCOMMON. 'Trample ~ This creature gets +1/+1 for each creature you control and each creature card in your graveyard' - genuinely enormous in a 16-creature deck, but {2}{G}{G} is the only double-green cost considered and it competes with the four-drops that carry evasion clauses this build was locked around. |
| Stalactite Dagger | COMMON. 'create a 1/1 colorless Shapeshifter creature token with changeling ~ Equipped creature gets +1/+1 and is all creature types' - it is the only card in the pool that turns a NON-changeling into every creature type, which would make Bristlebane Battler and Flame-Chain Mauler into Elves for the two pump abilities. Cut because 13 of the 16 creature cards are already Elves, so it would convert 3 of 16. |
| Chomping Changeling | UNCOMMON. A changeling body with 'destroy up to one target artifact or enchantment' on entry. Moved to the sideboard: a 1/2 for three is far below this deck's body rate, and the artifact half of its job is already covered maindeck by Giantfall. |
| Noggle Robber | UNCOMMON. 'When this creature enters or dies, create a Treasure token' on a 3/3 for three castable off either colour - good ramp and fixing, but it is a Noggle Rogue, so it is neither an Elf for the two pump effects nor a changeling for behold. |
| Great Forest Druid | COMMON. '{T}: Add one mana of any color' on an 0/4 - clean fixing, but the engine slot is capped at 2 by the locked skeleton and both slots went to changelings (Changeling Wayfinder, Firdoch Core) that also count for the tribal density. |
| Crossroads Watcher (second copy) | COMMON. Held at 1 copy rather than 2 purely to fit the 18-slot threat count; the second copy is the most natural addition if an interaction slot is cut. |
| Assert Perfection | COMMON. 'Target creature you control gets +1/+0 until end of turn. It deals damage equal to its power to up to one target creature an opponent controls' - a two-mana fight that a 6/6 turns into unconditional removal. Lost its slot to Giantfall, which does the same thing at instant speed AND has a 'Destroy target artifact' mode covering a whole threat class. |
| Bloom Tender | MYTHIC. 'Vivid - {T}: For each color among permanents you control, add one mana of that color' - in a two-colour deck that is two mana from a one-drop, which is real acceleration, but it costs a mythic slot for a 1/1 that does not attack. |
| Raiding Schemes | RARE. 'Each noncreature spell you cast has conspire' - this deck runs only 3 noncreature spells in 23 nonland cards, so the payoff is live on 3 of 23. |
| Spinerock Tyrant | MYTHIC. A 6/6 flier with wither that copies single-target instants and sorceries - the copy clause is live on 3 of the 23 nonland cards (Sear x2, Giantfall), and 5 mana is above this build's curve. |
| Lavaleaper | RARE. 'All creatures have haste' plus a symmetric basic-land mana doubler; the haste is real for a deck deploying 4-drops, but the mana clause helps the opponent equally and the rare slot is better spent on a body. |
| Sapling Nursery | RARE. 'Affinity for Forests ~ Landfall - Whenever a land you control enters, create a 3/4 green Treefolk creature token with reach' - a strong engine, but at an effective 6-8 mana with only 9 Forests it arrives after the goldfish turn. |
| Prismabasher | UNCOMMON. A 6/6 trample for six whose ETB pumps X creatures by +X/+X where X is the colour count - in a two-colour deck X is 2, so it is +2/+2 on two creatures for six mana. |
| Aurora Awakener | MYTHIC. A 7/7 trample for seven whose ETB reveals until X permanent cards where X is the colour count - X is 2 here, and seven mana is three turns past the kill window. |
| Boneclub Berserker | COMMON. '+2/+0 for each other Goblin you control' - every changeling is a Goblin, but this list runs only 7 changeling cards, so the count is 7 of 16 creature cards and a 2/4 base body does not attack. |
| Tend the Sprigs | COMMON. Ramp plus a conditional 3/4 Treefolk token at seven lands and/or Treefolk - the deck runs 17 lands and does not reach seven permanents of that description reliably before the kill turn. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.17 adj [MV 2.87 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  68.4%  prod  64.7%  gap  +3.7pp  [OK]
  R  demand  31.6%  prod  41.2%  gap  -9.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base                   cube_mainboard (ecl)
[PASS] copies                 All commons/uncommons at or under 2 copies; all rares at 1. Basics (Forest x9, Mountain x5) exempt as format-supplied.
[PASS] rare_mythic_cap        4 of the allowed 5 used: Bristlebane Battler, Mutable Explorer, Champions of the Perfect (mainboard) and Selfless Safewright (sideboard). One slot left unused.
[PASS] colour                 Every nonland card is castable in R/G; effective_cost.best_mode returned a usable mode for all 21 distinct nonland names across mainboard and sideboard.
[PASS] splash                 None declared; splash_colors = [], splash_candidates = [].
```
