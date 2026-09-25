---
deck_name: "rg-enlist-funnel"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-08-20T15:46:29Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)
### LANDS (17)
```
x1   Karplusan Forest           RG painland - the only untapped-capable RG dual in the pool
x2   Wooded Ridgeline           RG dual, enters tapped (Land - Mountain Forest)
x7   Mountain                   basic
x7   Forest                     basic
```
### CREATURES (13)
```
CMC  Card                       Qty  Color  Role                                   Rar
  1  Viashino Branchrider       x2   R      Threat — turn-1 hasty clock, later low C
  2  Yavimaya Iconoclast        x2   G      Threat — 2-mana 3/2 trample, 3-power e U
  3  Balduvian Berserker        x1   R      Threat — an ENLISTER (not fodder: base U
  3  Flowstone Kavu             x1   R      Threat — self-evading menace body and  C
  3  Hexbane Tortoise           x2   G      Threat — enlist body AND 3-power fodde C
  3  Keldon Flamesage           x1   R      Threat — 8th enlist body; attack trigg R
  4  Coalition Warbrute         x2   R      PAYOFF — the unconditional evasive enl C
  5  Linebreaker Baloth         x2   G      PAYOFF (weighted 0.7) — conditional ev U
```
### INSTANTS & SORCERIES (8)
```
CMC  Card                       Qty  Color  Role                                   Rar
  1  Gaea's Might               x2   G      Reach — 1-mana pump, +2/+2 at this dec C
  2  Bite Down                  x1   G      Interaction — turns the deck's oversiz C
  2  Colossal Growth            x2   G      Reach + PAYOFF (weighted 0.5) — kicked C
  2  Lightning Strike           x2   R      Interaction — removes a blocker or clo C
  2  Twinferno                  x1   R      Reach — the only card in the RG pool t U
```
### OTHER SPELLS (2)
```
CMC  Card                       Qty  Color  Role                                   Rar
  1  Hammerhand                 x2   R      Engine/Infra — ETB 'can't block this t C
```
## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                Rar
Broken Wings               x2   G      artifact/enchantment/flyer removal     C
Magnigoth Sentry           x2   G      4/4 reach vs the cube's 51-card evasio C
Smash to Dust              x2   R      artifact removal / 1 damage to each op C
Tail Swipe                 x2   G      1-mana fight removal for an oversized  U
Jaya's Firenado            x1   R      5 damage removal, the pool's only unco C
Twinferno                  x1   R      Reach — the only card in the RG pool t U
```
## ANALYSIS
### DECK IDENTITY

Red-green enlist beatdown that treats enlist as a power-funnel rather than a keyword. Enlist is
zero-sum by default - it taps a creature that could have attacked - so this build only ever funnels
into a body blockers cannot absorb: Coalition Warbrute's trample, Linebreaker Baloth's "can't be
blocked by creatures with power 2 or less", or a kicked Colossal Growth granting trample on demand.
Cheap three-power bodies (Yavimaya Iconoclast, Hexbane Tortoise) attack on turns two through four
and are then spent as fuel on the alpha turn, with Hammerhand removing the one blocker that would
otherwise eat it.

### THE CENTRAL PROBLEM: ENLIST IS ZERO-SUM

The reminder text is the whole archetype: "As this creature attacks, you may tap a nonattacking
creature you control without summoning sickness. When you do, add its power to this creature's
until end of turn." You surrender an attacker to grow another. Total power on the attack does not
change. Enlist only profits four ways, and this deck is built around the first two:

| Route | Cards in this list |
|---|---|
| Funnel into evasion | Coalition Warbrute x2 (trample), Linebreaker Baloth x2 (power<=2 can't block) |
| Manufacture the evasion | Colossal Growth x2 (kicked: "+4/+4 and gains trample and haste") |
| Tap a body that could not attack profitably | Balduvian Berserker (1/3), Hexbane Tortoise, Flowstone Kavu |
| Convert power to non-combat damage | Balduvian Berserker ("deals damage equal to its power to any target") |

### THE POOL CEILING

The most important structural fact about this archetype in this cube: **exactly two card names in
the entire 452-entry pool carry Enlist together with any evasion** - Coalition Warbrute and
Linebreaker Baloth - and both are capped at two copies. That is four payoff bodies, plus Colossal
Growth as the only effect that manufactures a sink on a creature already attacking. The Phase 6b
assembly check clears at p=0.7530 against a 0.75 threshold, a 0.3pp margin, and no card swap can
raise it without leaving red-green. Trample creatures without Enlist (Electrostatic Infantry,
Yavimaya Iconoclast, Elfhame Wurm) do not help: enlist adds power to *the attacking enlister*, so a
trampler that cannot enlist can never receive the funnel.

### TWINFERNO IS THE ONLY MULTIPLICATIVE REACH SPELL

Of the five pump effects available to red-green, four add a flat number. Twinferno's "Target
creature you control gains double strike until end of turn" is the only one that scales with what
enlist already did. On the thesis turn the modal attack is Coalition Warbrute (3 power, trample)
enlisting one of the four three-power bodies for 6 trampling power:

| Follow-up | Damage |
|---|---|
| none | 6 |
| Gaea's Might (Domain 2) | 8 |
| Colossal Growth, kicked | 10 |
| Twinferno | 12 |

### DOMAIN IS DELIBERATELY LEFT AT 2

Gaea's Might reads "+1/+1 until end of turn for each basic land type among lands you control." This
manabase has exactly two basic land types (Mountain, Forest - Wooded Ridgeline is Land - Mountain
Forest and adds no third), so it is a one-mana +2/+2, not +3/+3. Ten lands in the pool carry a
basic land type, and four of them make a colour this deck uses - Geothermal Bog, Haunted Mire,
Molten Tributary and Tangled Islet would each push Domain to 3 while still producing usable mana.
Every one of them enters tapped, and the only Domain payoff here is two copies of Gaea's Might, so
a tapped land drop costs more than +1/+1 twice is worth in a deck goldfishing on turn five.

### KELDON FLAMESAGE IS LIVE, WITH A NUMBER

Its trigger exiles "an instant or sorcery card with mana value X or less" where X is its power.
This list runs 8 instants and sorceries out of 23 nonland cards, and all 8 have mana value 2 or
less, so any X of 2 or more turns on the entire set. Enlisting a three-power body sets X to 5;
P(at least one of the 8 in the top five of a 40-card library) = 1 - C(32,5)/C(40,5) = 69.4%.

### MATCHUP NOTE

The cube's largest answerable threat class is evasion at 51 cards (20.6%), which this deck cannot
block on the ground - hence Magnigoth Sentry x2 and Broken Wings x2 in the board. The class it
cannot touch at all is graveyard (32 cards, 13%): the dossier reports zero graveyard-hate cards
cube-wide, so no colour in this environment answers it.
### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:6  2:8  3:5  4:2  5:2
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.4: Linebreaker Baloth@0.7, Linebreaker Baloth@0.7, Colossal Growth@0.5, Colossal Growth@0.5) → p=0.75 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 7.2: Balduvian Berserker@0.4, Viashino Branchrider@0.4, Viashino Branchrider@0.4, Hammerhand@0.5, Hammerhand@0.5) → p=0.91 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 72%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Red-green at common/uncommon in this pool offers no maindeck sweeper; the deck races instead, and Smash to Dust ('deals 1 damage to each creature your opponents control') is held in the sideboard for token decks.
  OK        single_large_threat: Bite Down, Lightning Strike, Balduvian Berserker
  CONCEDED  noncreature_permanents: No maindeck artifact or enchantment answer; Broken Wings and Smash to Dust are sideboard slots, because a 23-spell aggro list cannot spend maindeck cards on permanents only some opponents play.
  CONCEDED  stack: The pool contains no red or green counterspell; interacting on the stack is not available to this colour pair at any cost.
  CONCEDED  graveyard: The cube dossier reports 0 graveyard-hate cards cube-wide, so no colour can answer this class; the deck's clock is the only pressure available.
```
- No WARN-tier flags: curve PASS and goldfish PASS on the Phase 6b run.
- Assembly payoff clears at p=0.7530 against a 0.75 threshold - a 0.3pp margin. This is a POOL CEILING, not a build choice: exactly two card names in the entire working pool (Coalition Warbrute, Linebreaker Baloth) carry Enlist together with any evasion, both capped at 2 copies, and the only other way to make an enlisted body unabsorbable is Colossal Growth's kicked 'gains trample and haste'. No card swap can raise this number without leaving red-green.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands are converted by two mana sinks printed on cards already in the list: Flowstone Kavu's '{R}: This creature gets +1/-1 until end of turn' (1 copy) and Viashino Branchrider's '{2}{R}: This creature gets +2/+0 until end of turn' (2 copies). Both turn surplus mana into damage on the funnel turn, and Viashino Branchrider's {2}{G} kicker gives a late copy a 3/3 body instead of a 1/1. |
| screw | mitigation | 6 of 23 nonland cards cost one mana (Viashino Branchrider x2, Gaea's Might x2, Hammerhand x2) and 8 more cost two, so a two-land hand still deploys on curve; the structural goldfish check reports 87% keepable openers and 88% to reach three lands by turn 3. The deck runs ZERO card selection to dig out of a stumble - Furious Bellow's scry left with the Twinferno swap - so the low curve is doing all of the work here. |
| decapitation | mitigation | The payoff is not a single card: 7 functional payoff copies (Coalition Warbrute x2, Linebreaker Baloth x2, Flowstone Kavu x1, Colossal Growth x2) spread the evasive-sink role across four different card names, so answering any one on sight leaves the funnel intact. Colossal Growth in particular manufactures the sink on a body already in play. |
| gas-out | accepted | This list contains exactly 1 card tagged Cards: Net-Positive (Keldon Flamesage) and 0 tagged Cards: Self-Replacing; card selection is limited to that one Flamesage trigger. Mitigating would mean cutting threats for Thrill of Possibility or Sprouting Goblin, which costs the deck the thing the thesis needs most - a board wide enough that enlist has fodder to harvest. An aggro deck that empties its hand by turn 5 and has a 6/4 trampler attacking has spent its cards correctly. |
| raced | mitigation | Against the cube's fastest clocks the deck blocks and then converts: Flowstone Kavu (2/3) and Balduvian Berserker (1/3) have defensive toughness and can hold the ground on the turn they are not needed as fodder, while Hexbane Tortoise (3/2) trades rather than holds - its toughness is 2, and Balduvian Berserker's 'When this creature dies, it deals damage equal to its power to any target' means a trade in the race still points damage at the opponent's face. |
| disruption-fizzle | accepted | Enlist reads 'As this creature attacks, you may tap a nonattacking creature you control without summoning sickness' - the fodder is tapped during the DECLARATION of attackers, so removal aimed at the sink in response to the reflexive trigger costs both the sink and the tapped body's power: a clean 2-for-1 on the turn the deck is trying to win. Mitigating would mean leaving RG. A full scan of the 452-entry working pool finds ZERO protection effects legal in these colours - no hexproof, no indestructible, no protection-from, no regeneration; the only hits are Hexbane Tortoise's own ward {2} (a {2} tax, not protection) and the legendary-only Plaza of Heroes, and this list runs no legendary creature. The deck buys partial redundancy instead - 6 payoff copies across 3 card names, with Colossal Growth able to manufacture the sink at instant speed on a body already attacking - and accepts the 2-for-1 as the price of the colour pair. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|---|---|
| Radha, Coalition Warlord | Its tap trigger is the engine of Deck B; here the funnel plan does not build the Domain count that sets X, so it would be a 4-mana 3/3 with a +2/+2 rider. |
| Mossbeard Ancient | A 7/7 trample is ideal enlist fodder but costs {5}{G}{G}; against a goldfish turn of 5 it arrives two turns after the deck needs to have won. |
| Territorial Maro | 'power and toughness are each equal to twice the number of basic land types' — 6/6 for 5 only at three basic types, and this build's manabase is tuned for untapped RG rather than type breadth. |
| Squee, Dubious Monarch | 'Whenever Squee attacks, create a 1/1 red Goblin token that's tapped and attacking' — the token is created already attacking, so it can never be enlist fodder (enlist requires a nonattacking creature). |
| Phoenix Chick | 'Flying, haste / This creature can't block' — 1 power is the worst enlist fodder in the pool and it wants to attack every turn rather than stay back. |
| Shivan Devastator | Mythic X-creature; strong but one of only 5 rare/mythic slots, and a 0/0 base gives the funnel nothing until late X. |
| Defiler of Instinct | 'As an additional cost to cast red permanent spells, you may pay 2 life. Those spells cost {R} less' — this list runs 9 red permanent spells out of 23 nonland cards, and a rare slot is worth more on the manabase here. |
| Defiler of Vigor | 6/6 trample for {3}{G}{G} is excellent fodder, but {G}{G} at five with a tapped-dual manabase and only 5 rare slots loses to Linebreaker Baloth at the same role. |
| Hurler Cyclops | '{1}, Sacrifice another creature: deals 1 damage to any target' — the sacrifice plan is Deck C's; here every creature is enlist fodder and eating them shrinks the funnel. |
| Sprouting Goblin | '{R}, {T}, Sacrifice a land: Draw a card' plus a kicked land-fetch — card selection at the cost of tapping a 2-power body that enlist wants untapped. |
| Furious Bellow | '+3/+0 and gains first strike ... Scry 1' — first strike is worth little on a body that is already the largest creature in combat after enlisting. |
| Vanquisher's Axe | 'Equipped creature gets +2/+0. Equip {2}' — 1 mana plus 2 to equip for +2/+0 is worse per mana than Colossal Growth and competes with the same combat step. |
| Walking Bulwark | 'Defender / {2}: ... target creature with defender ... assigns combat damage equal to its toughness' — a 0/3 has 0 power, so it adds nothing when enlisted. |
| Yavimaya Sojourner | 'Domain — This spell costs {1} less to cast for each basic land type' — still {4}{G} at three types for a 4/6 with no evasion. |
| Broken Wings | 'Destroy target artifact, enchantment, or creature with flying' — narrow maindeck; held for the sideboard against the cube's flyers and artifacts. |
| Smash to Dust | Modal artifact/defender removal plus a 1-damage sweep; a sideboard card against the cube's artifact decks, not a maindeck slot in an aggro shell. |
| Barkweave Crusher | 'Enlist' on a 2/5 for {3}{G} - the most durable enlist body in the pool, but the Threats slot is full at 13 and a 2-power body is the thinnest enlist fodder among the four-drops; the strongest card left on the bench. |
| Elfhame Wurm | 'Vigilance, trample' 5/4 for {4}{G} - the highest-power enlist fodder available, but at five mana it competes with Linebreaker Baloth and vigilance does NOT help enlist, which requires a NONattacking creature. |
| Nishoba Brawler | 'Trample / Domain - power is equal to the number of basic land types among lands you control'. This manabase has exactly 2 basic land types, so it is a 2/3 trampler for {1}{G} - strictly worse than Yavimaya Iconoclast's 3/2 trample at the same cost. |
| Electrostatic Infantry | 'Trample / Whenever you cast an instant or sorcery spell, put a +1/+1 counter on this creature' - it has NO Enlist, so it can never RECEIVE funnelled power; it is a trampler, not a funnel sink. |
| Furious Bellow | '+3/+0 and gains first strike ... Scry 1' - cut for Twinferno, whose double strike MULTIPLIES enlisted power (6 trampling power becomes 12) where Furious Bellow adds a flat 3. |
| Dragon Whelp | 'Flying / {R}: This creature gets +1/+0' - flying is the best evasion in the pool, but Dragon Whelp has no Enlist and so cannot receive funnelled power; {R}{R} at four is also the hardest cost in the deck. |
| Squee, Dubious Monarch | 'Whenever Squee attacks, create a 1/1 red Goblin token that's tapped and ATTACKING' - a token created already attacking can never be enlist fodder, since enlist requires a NONattacking creature. |
| Quirion Beastcaller | 'When this creature dies, distribute X +1/+1 counters among any number of target creatures you control' - the pool's only card that softens a removal blowout, but it costs a rare slot and does not advance the funnel on the turn it matters. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.15 adj [MV 2.39 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  52.0%  prod  58.8%  gap  -6.8pp  [OK]
  R  demand  48.0%  prod  58.8%  gap -10.8pp  [OK]
```
## RESTRICTIONS COMPLIANCE
```
PASS   1a mainboard count == 40   got 40
PASS   1b sideboard count == 10   got 10
PASS   2 exact-name membership in working pool   missing: []
PASS   3 copy limits vs card_pool_rules
PASS   4 colour usability via effective_cost.best_mode   unusable: []
PASS   5 splash cap <= 3 per colour and in splash_candidates
PASS   6 rare/mythic total <= 5 (user cap)   got 2: ['Karplusan Forest', 'Keldon Flamesage']
```
