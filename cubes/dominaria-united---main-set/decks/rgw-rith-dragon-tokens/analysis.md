---
deck_name: "rgw-rith-dragon-tokens"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RGW"
format: "40-card"
built_at: "2026-08-19T20:35:28Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  4x Forest                   Green source
  3x Mountain                 Red source
  2x Plains                   White source
  2x Radiant Grove            GW dual, enters tapped
  2x Sacred Peaks             RW dual, enters tapped
  2x Wooded Ridgeline         RG dual, enters tapped
  1x Crystal Grotto           Scry 1 on entry; colour costs {1} extra, so not a turn-5 enabler
  1x Karplusan Forest         RG dual, untapped (1 damage)
```

### CREATURES (12)

```
CMC  Card                          Qty   Color  Role                                      Rar
  1  Shivan Devastator             x1    R      Scalable flying-haste Dragon; gains ward  M
  2  Nishoba Brawler               x2    G      Cheap high-power body: Bite Down and Tai  U
  2  Sprouting Goblin              x2    R      Kicked, fetches a basic-typed land; late  U
  3  Deathbloom Gardener           x2    G      Any-colour mana on a deathtouch body: th  C
  4  Magnigoth Sentry              x2    G      4/4 reach: the deck's only profitable bl  C
  5  Rith, Liberated Primeval      x1    WRG    Payoff: 5/5 flier making a 4/4 Dragon pe  M
  5  Territorial Maro              x2    G      Domain body sized to basic land types: t  U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                          Qty   Color  Role                                      Rar
  1  Tail Swipe                    x2    G      One-mana fight with +1/+1; the defender   U
  2  Bite Down                     x2    G      Uncapped damage assignment from a big bo  C
  2  Lightning Strike              x2    R      Turn-2 unconditional interaction; overki  C
  3  Scout the Wilderness          x2    G      Puts a chosen basic onto the BATTLEFIELD  C
  5  Jaya's Firenado               x1    R      5 damage overshoots any toughness-4-or-l  C
```

### OTHER SPELLS (2)

```
CMC  Card                          Qty   Color  Role                                      Rar
  4  The Elder Dragon War          x1    R      Three-for-one: sweep, loot, and a 4/4 fl  R
  6  Leyline Binding               x1    W      Domain-discounted flash exile for what d  R
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                    Rar
Broken Wings                  x2    G      NONCREATURE PERMANENTS + EVASION  C
Destroy Evil                  x2    W      NONCREATURE PERMANENTS + SINGLE LARGE THREAT  C
Hexbane Tortoise              x2    G      RACED  C
Prayer of Binding             x2    W      CATCH-ALL  U
Smash to Dust                 x2    R      WIDE BOARDS  C
```

## ANALYSIS

### DECK IDENTITY

Naya midrange that turns removal into Dragons. Rith, Liberated Primeval makes a 4/4 flying Dragon at end step whenever an opponent's creature was dealt damage beyond lethal, so this deck's interaction suite is chosen to OVERKILL rather than to answer exactly: Bite Down and Tail Swipe point a 3-to-6-power green body at a small blocker with no lethal cap, Jaya's Firenado deals 5, and Lightning Strike deals 3 to anything. Mana creatures and a basic-land tutor make the {2}{R}{G}{W} turn-5 deployment real off a base where six lands enter tapped, and Rith's ward {2} protects the other Dragons once they land.

### THE ENGINE IS EXCESS DAMAGE, NOT REMOVAL

Rith's trigger is narrower than it looks, and it is the single fact the whole deck is built around:

> At the beginning of your end step, if a creature or planeswalker an opponent controlled was dealt **excess damage** this turn, create a 4/4 red Dragon creature token with flying.

Excess damage means damage *beyond what was lethal*. That has a sharp consequence: **exile effects and exactly-lethal removal do not turn the engine on.** A deck that answers every threat cleanly and efficiently gets zero Dragons.

So the interaction suite is deliberately wasteful. Seven of the eight interaction slots overkill by construction:

| Card | Damage | Why it overshoots |
|---|---|---|
| Bite Down x2 | = your creature's power | *"Target creature you control deals damage equal to its power"* - no lethal cap at all, so a 6/6 pointed at a 2/2 deals 6 where 2 was needed |
| Tail Swipe x2 | = your creature's power +1 | A fight, with *"+1/+1 until end of turn"* applied first, for one mana |
| Lightning Strike x2 | 3 fixed | Overkills any X/1 or X/2, and can go to the face |
| Jaya's Firenado x1 | 5 fixed | Overshoots any creature with toughness 4 or less |

Only Leyline Binding is a pure answer that generates nothing.

Two mechanical notes that are easy to get backwards, both of which cost this deck a card during its build:

- **A fight is not combat.** The Step-0 judge correctly rejected a rival build for routing its excess damage through combat, since the defender simply declines to block. That reasoning got mis-transferred to Tail Swipe, which is a *fight* - the defender has no say. Tail Swipe was cut for a bad reason and put back after the self-grill caught it.
- **Trample never produces excess damage.** Trample assigns exactly lethal to the blocker and carries the remainder to the player. Nishoba Brawler's trample is damage routing, not an engine piece; its job is to be 3 power for 2 mana so the fight spells have ammunition.

### THE FIGHT SPELLS AND THEIR AMMUNITION

Every large green creature does double duty: a clock, and a payload. **6 of 23 nonland cards are power-3-or-greater** at the deck's target Domain of 3 - 2 Territorial Maro (6/6), 2 Magnigoth Sentry (4/4), 2 Nishoba Brawler (3/3) - plus Rith itself and Shivan Devastator.

The number that matters for Tail Swipe specifically, since a fight is two-way: **zero of those six dies to a 2-power fight-back.** That is why the "it's risky" objection to Tail Swipe doesn't survive contact with this particular list.

### DOMAIN IS NOT AS RELIABLE AS IT LOOKS

Three cards scale with basic land types: Territorial Maro, Nishoba Brawler and Leyline Binding. It's tempting to say Domain 3 is automatic because 14 of 17 lands carry a basic land type - but that's the wrong denominator. Forest-type and Mountain-type are abundant; the bottleneck is **Plains-type, on 6 of 17 lands** (2 Plains, 2 Radiant Grove, 2 Sacred Peaks).

Simulated over 30,000 draws:

| Turn | P(Domain >= 3) |
|---|---|
| 4 | 0.768 |
| 5 | 0.815 |
| 7 | 0.892 |

So roughly **one game in five**, on the turn you cast it, Territorial Maro is a 4/4 for five and Leyline Binding costs {3}{W} instead of {2}{W}. That's encoded honestly as 0.82 reliability weights in the assembly check rather than papered over, and 2 Scout the Wilderness are in the deck specifically to fetch the missing type by name.

Note also which lands contribute **nothing** to Domain: Karplusan Forest and Crystal Grotto both read plain `Land` with no type. Worth checking the type line rather than the name.

### THE MANA TRAP THAT ALMOST SHIPPED

Crystal Grotto looks like white fixing. It is not - not on the turn that matters:

> {T}: Add {C}. // {1}, {T}: Add one mana of any color.

The coloured mode consumes the land's own tap **and** an extra {1}, so it is **net minus one mana**. On exactly five lands with a Grotto as your only white source, you tap four for 4, feed {1} into the Grotto, and end at **4 mana for a 5-drop**. Rith is uncastable in precisely the case the white sources were counted for.

The first draft of this deck counted both Grottos among its "7 white sources" and justified over-supplying white on the grounds that Rith needs one {W} on turn 5 with no second chance. The self-grill caught the contradiction. One Grotto became a second Plains, and the honest count is now **6 true untapped-cost white sources** plus 2 Deathbloom Gardener (*"{T}: Add one mana of any color"* - a genuine source), for 8 real enablers. Salvaged Manaworker was cut for the same reason: *"{1}: Add one mana of any color"* has no tap symbol and costs a mana, so it is a filter, not a source.

White still sits far above its 7.7% pip share, and that remains intentional: proportional pip math measures *volume*, but Rith needs one white mana on one specific turn.

### THE HONEST PROBLEM: RITH IS A SINGLETON

Rith is a mythic, so exactly **one copy in 40** is legal. Probability of drawing it by the turn-7 thesis turn: **0.30**.

That number determines how the deck must be read. The assembly check passes at p=0.96, but it passes on the **9-copy threat suite**, not on Rith. The strict reading - recorded next to the verdict rather than left implicit - is *"this deck functions as green midrange without Rith,"* which the body genuinely supports: two 6/6s, two 4/4 reach bodies, two tramplers and Shivan Devastator behind eight interaction spells. It does **not** mean the Rith engine assembles. It can't be made to; one copy is the legal maximum.

### THE BIGGEST DEVIATION, AND WHY IT'S FORCED

Engine & Infrastructure is **26.1% of nonland cards against a 0% band** for midrange - the largest deviation across all three Dragon decks, and recorded rather than smoothed.

The justification is mechanical: the payoff is a **{2}{R}{G}{W} five-drop** cast off a base where **six of seventeen lands enter tapped**. Those taplands are forced by the pool, not chosen - the only untapped nonbasic duals in these colours are Karplusan Forest (taken, and worth one of the five rare slots for exactly that reason), Thran Portal and Plaza of Heroes, and the latter two are rares against a budget already full.

The composition of that slot was also wrong in the first draft and got fixed: Floriferous Vinewall puts a land in **hand**, which helps you hit a land drop but does not accelerate to turn 5, and as a 0/2 it dies to your own Elder Dragon War. Scout the Wilderness puts a **chosen basic onto the battlefield**, which is both real acceleration and the answer to the Plains-type bottleneck above.

### THE ELDER DRAGON WAR IS ON THE WRONG SIDE OF ITS OWN CHAPTER I

> I - This Saga deals 2 damage to each creature and each opponent.

Symmetric, and this deck loses the exchange: **3 of 23 nonland cards die to it** - 2 Deathbloom Gardener (1/1) and Shivan Devastator whenever cast for X of 2 or less. (That was 5 before the Vinewalls were cut.) Those are the mana creatures the turn-5 line depends on.

Read Ahead is the mitigation - *"Choose a chapter and start with that many lore counters"* - so the default is to start on chapter III for an immediate 4/4 flying Dragon. The three chapters are **mutually exclusive in a given game**: you cannot have the chapter II loot *and* the chapter III Dragon off one copy.

### WHAT THIS DECK CAN AND CANNOT ANSWER

Unlike the two red builds, this one covers most of the board without conceding: **wide boards** (Elder Dragon War chapter I), **single large threats** (Bite Down, Jaya's Firenado, Leyline Binding) and **noncreature permanents** (Leyline Binding's unconditional flash exile) are all genuinely answered.

Two classes remain conceded, both forced:

- **Stack** - all six "counter target" cards in the 271-card pool are blue.
- **Graveyard** - the cube contains **zero** graveyard-hate cards in any colour, against a 32-card graveyard class.

And the deck cannot protect Rith on the turn it matters. The only purchasable protection in RGW is Take Up the Shield; buying it would cost a slot from the seven-card excess-damage suite that is the entire reason to cast Rith, leaving a protected Dragon-maker with nothing to trigger it. Rith's own ward {2} taxing the first answer is the extent of the insurance.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:8  3:4  4:3  5:4  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.18: The Elder Dragon War@0.9, Territorial Maro@0.82, Territorial Maro@0.82, Nishoba Brawler@0.82, Nishoba Brawler@0.82) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 7 copies → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 48%  T2 94%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: The Elder Dragon War
  OK        single_large_threat: Bite Down, Jaya's Firenado, Leyline Binding
  OK        noncreature_permanents: Leyline Binding
  CONCEDED  stack: Red, green and white hold no counterspells anywhere in this cube - all six 'counter target' cards in the 271-card pool are blue-identity - so stack interaction is not purchasable at any slot cost. The nearest available effect is Leyline Binding's flash 'exile target nonland permanent an opponent controls', which answers a threat after it resolves rather than on the stack.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards (dossier structural_census: GY hate = 0, independently confirmed by a full 271-card oracle sweep), so no deck in any colour can answer this class. The concession is forced by the pool.
```

- No WARN-tier flags: curve, assembly, goldfish and coverage all returned PASS after the grill repairs.

- READING OF THE ASSEMBLY PASS (Challenger finding F9): the payoff role is the 9-copy threat suite, not the Rith engine. p=0.96 means 'the deck functions as green midrange without Rith'. The Rith engine itself assembles at p=0.30, which is disclosed in count_dependent_verdicts and is not improvable - Rith is a mythic and 1 copy is the legal maximum.

- The Engine & Infrastructure row is 26.1% against a 0% band, down from 30.4%. It is recorded rather than smoothed: the payoff is a three-colour five-drop cast off six tapped duals that the pool forces, and the judge credited exactly this reasoning.

- Interaction is 34.8% against a 20-30% band. 7 of the 8 cards deal damage and so double as the excess-damage engine; the row was raised from 7 to 8 to repair an UNSATISFIED 'raced' mode.

- Assembly p-values come from deck_checks.p_at_least_one, which uses the binomial form 1-(1-copies/deck_size)^cards_seen; hypergeometric values are slightly higher. Both clear 0.75.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Shivan Devastator is {X}{R} and 'enters with X +1/+1 counters on it', turning surplus lands into an evasive haste body. Sprouting Goblin's '{R}, {T}, Sacrifice a land: Draw a card' is a repeatable outlet that consumes the surplus land itself. Note the honest limit: Territorial Maro and Nishoba Brawler scale with basic land TYPES, which cap at 3 here, so lands past the third type do nothing for them - the first two clauses carry this mode alone. |
| screw | mitigation | 6 of 23 nonland cards are acceleration or fixing - 2 Deathbloom Gardener add mana of any colour, 2 Scout the Wilderness put a chosen basic onto the battlefield, 2 Sprouting Goblin fetch a basic-typed land to hand when kicked - which is the single largest slot deviation in this deck and exists for exactly this reason. Goldfish simulation over 1000 hands: 84% keepable, 88% reach 3 lands by turn 3. |
| decapitation | mitigation | Rith answered on sight costs the engine but not the game: the payoff role is 9 copies at effective 8.02 (p=0.96 by turn 7), and without Rith the deck is a green midrange list of 2 Territorial Maro (6/6 at domain 3), 2 Magnigoth Sentry (4/4 reach), 2 Nishoba Brawler and Shivan Devastator backed by 8 interaction spells. Rith also carries 'ward {2}' on itself, taxing the first answer. |
| gas-out | mitigation | Rith is itself the refuel: 'At the beginning of your end step... create a 4/4 red Dragon creature token with flying' generates a threat per turn from an empty hand - board advantage rather than card advantage, which is the honest description. Beside it, 2 Sprouting Goblin offer a repeatable 'Sacrifice a land: Draw a card', and The Elder Dragon War chapter II is 'Discard any number of cards, then draw that many' - disclosed as mutually exclusive with its chapter III token under read ahead. Cantrip count is 0 and that is a real, stated weakness. |
| raced | mitigation | REPAIRED after the Challenger marked this UNSATISFIED. The previous entry claimed '6 of 23 nonland cards defend profitably' and counted 2 Floriferous Vinewall (0/2, dies to any 2-power attacker) and 2 Deathbloom Gardener (1/1 mana creatures the turn-5 line depends on) - an inflated count for cards that cannot do the job. The deck now has real early interaction instead: 4 of 23 nonland cards cost 1 or 2 mana and answer a creature (2 Tail Swipe at {G}, 2 Lightning Strike at {1}{R}), where previously the cheapest unconditional removal cost three. Turn-1 play rate rose from 20% to 48% in simulation. The genuinely profitable blockers are 2 Magnigoth Sentry (4/4 reach) - stated as 2 of 23, not 6 - and Hexbane Tortoise (3/2, ward {2}) is sideboarded for the matchups that demand more. The six enters-tapped lands remain a real tempo cost that this mitigation reduces rather than removes. |
| disruption-fizzle | accepted | The critical turn is casting Rith on turn 5 into open mana, and this deck cannot protect it. All six 'counter target' cards in the 271-card pool are blue-identity, and the only purchasable protection in RGW is Take Up the Shield ('gains lifelink and indestructible until end of turn') - King Darien XLVIII, Guardian of New Benalia and Plaza of Heroes are all rares against a budget at 5 of 5. What mitigating would cost is the engine itself: a slot from the seven-card excess-damage suite that is the entire reason Rith is worth casting, which would leave a protected Rith with nothing to trigger it. Accepted: Rith's own 'ward {2}' taxes the first answer, 8 other payoff copies re-present threats, and a turn-7 thesis absorbs one lost turn. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Floriferous Vinewall | CUT POST-GRILL. 'You may reveal a land card from among them and put it into your hand' puts a land in HAND, not onto the battlefield, so it helps hit a land drop but does not accelerate to turn 5; and as a 0/2 it dies to this deck's own Elder Dragon War chapter I. Both copies became Scout the Wilderness, which puts a chosen basic onto the battlefield. |
| Salvaged Manaworker | CUT POST-GRILL. Its oracle is '{1}: Add one mana of any color. Activate only once each turn' - there is no tap symbol and the ability costs {1}, so it is a mana FILTER that is net-zero, not a mana source. It cannot enable a turn-5 five-drop and was wrongly inflating the acceleration census. |
| Hurloon Battle Hymn | CUT POST-GRILL to make room for cheaper excess damage. 4 damage for {2}{R} does overkill most blockers, but Tail Swipe produces excess for {G} and Lightning Strike for {1}{R}, and this deck's problem was having no interaction before turn 3. |
| Snarespinner | CUT FROM SIDEBOARD. A 1/3 that reaches 3 power only 'whenever this creature blocks a creature with flying' merely trades with a 3/3 flier - a strictly worse version of the 4/4 reach Magnigoth Sentry already maindecked. Replaced by Hexbane Tortoise (3/2, ward {2}). |
| Ragefire Hellkite | A Dragon that would gain ward {2} from Rith, but {4}{R}{R} demands double red off 9 red sources of 17, and the rare/mythic budget is at exactly 5 of 5 including Karplusan Forest. (An earlier draft of this note cited the red-source count incorrectly; the budget ground is the load-bearing one and holds independently.) |
| Dragon Whelp | {2}{R}{R} for a 2/3 flier: the same double-red demand, and a 2-power body is poor fight ammunition in a deck whose Bite Down and Tail Swipe want 3+ power. (Red-source count corrected per Challenger finding F1; the 2-power ground is the load-bearing one.) |
| Rivaz of the Claw | {1}{B}{R} - black is outside this deck's RGW identity. |
| King Darien XLVIII | Proposed as a combat-based excess-damage enabler, but an anthem only widens an existing damage margin by 1 and does nothing when attacker power is at or below blocker toughness. Worse, combat excess needs the opponent to CHOOSE to block, which a defender facing a Rith trigger will decline. |
| Threats Undetected | 'An opponent chooses two of those cards' to shuffle away - card advantage, not a tutor, and naming Rith in the pile is exactly what tells the opponent which card to shuffle back. It would also cost a rare slot. |
| Gaea's Might | 'Domain - Target creature gets +1/+1 until end of turn for each basic land type among lands you control' is +3/+3 for one mana at domain 3, and it multiplies the MAGNITUDE of every fight rather than adding an enabler. The closest cut in the deck: it lost to Lightning Strike because the deck's failing was having no unconditional interaction before turn 3, and a pump spell does not answer a creature. |
| Colossal Growth | The domain-independent version of the same excess multiplier at {1}{G}, and therefore the hedge for the ~22% of games where domain stalls at 2 - but it is a second copy of an effect that lost its slot argument to interaction. |
| Artillery Blast | 4 damage for {1}{W} at domain 3, but it only hits TAPPED creatures, and white is the deck's scarcest colour at 6 untapped-cost sources of 17. |
| Thrill of Possibility | This deck's cantrip count is 0, so the card flow gap is real, but 'discard a card. Draw two cards' does not develop a board and this list wants its turns spent on bodies and fixing. |
| Elfhame Wurm | A 5/4 vigilance trample for {4}{G} is fine fight ammunition, but Territorial Maro at the same cost is a 6/6 at domain 3 and Magnigoth Sentry is a 4/4 with REACH a mana cheaper - and reach matters against a 51-card evasion class. |
| Prayer of Binding (maindeck) | 'Flash / exile up to one target nonland permanent' is a fine answer, but exile deals no damage and therefore never switches Rith's trigger on; the maindeck prefers damage-based removal that is also an engine. Kept in the sideboard for exactly the cases damage cannot solve. |
| Citizen's Arrest / Temporary Lockdown | Same reason - exile-based, so engine-inert - and both are sorcery-speed enchantments this deck's removal outclasses on tempo. |
| Anointed Peacekeeper | A rare tax effect that names a card; it neither generates excess damage nor advances a board plan built on large bodies, and the rare budget is at exactly 5 of 5 including lands. |
| Silverback Elder | The strongest pure value card in these colours, but {2}{G}{G}{G} is not castable in a deck whose 10 green sources are shared three ways. Declined explicitly rather than rationalized in. |
| Defiler of Vigor | {3}{G}{G} for a 6/6 trample, but GG plus a rare slot in a deck already stretching for {2}{R}{G}{W} on turn 5. |
| Briar Hydra | {5}{G} 6/6 trample whose Domain trigger needs combat damage to a PLAYER, not to a creature, so it generates no excess damage and does not turn Rith on. |
| Squee, Dubious Monarch | Adds attacker density, but attacker density feeds the COMBAT excess channel, which the opponent controls by declining blocks. It also costs a rare slot. |
| Plaza of Heroes / Thran Portal | Both are rare LANDS, and the max-5 rare/mythic cap counts lands - the error that made one rejected sketch illegal. Karplusan Forest was chosen over both as the only untapped nonbasic dual; Plaza taps for {C} unless a legendary spell is involved (this deck holds 1 legendary card) and Thran Portal taxes 1 life per activation. |
| Llanowar Loamspeaker | '{T}: Add one mana of any color' is exactly the fixing this deck wants, but it is a rare and the budget is full; Deathbloom Gardener is the common that does the same job on a deathtouch body. |
| Herd Migration / Slimefoot's Survey / The Weatherseed Treaty | Domain land-fetch payoffs at 5-7 mana. Scout the Wilderness does the load-bearing part of the job - 'Search your library for a basic land card, put it onto the battlefield tapped' with the type of your choosing - for {2}{G}. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.33 adj [MV 3.0 vs 2.5, 6 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  57.7%  prod  58.8%  gap  -1.1pp  [OK]
  R  demand  34.6%  prod  52.9%  gap -18.3pp  [OK]
  W  demand   7.7%  prod  41.2%  gap -33.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 (expected 40)
[PASS] 1b sideboard size — 10 (expected 10)
[PASS] 2 exact-name membership in working pool — missing=[]
[PASS] 3 copy limits vs card_pool_rules — all within limits
[PASS] 3b rare/mythic budget <= 5 — 5 — Karplusan Forest x1 (rare), Leyline Binding x1 (rare), Rith, Liberated Primeval x1 (mythic), Shivan Devastator x1 (mythic), The Elder Dragon War x1 (rare)
[PASS] 4 every nonland usable in core+splash — unusable=[]
[PASS] 5 splash cap (<=3 per splash colour) — no splash colours declared
```
