---
deck_name: "b-zombie-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-08-31T21:21:04Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x17  Swamp
```

### CREATURES (15)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Gravecrawler                                 x1    B     Fodder — recasts itself from t R
  2  Blood Artist                                 x2    B     Payoff — turns every death on  U
  2  Butcher Ghoul                                x2    B     Fodder — undying gives one car C
  2  Olivia's Dragoon                             x2    B     Enabler — free unlimited disca C
  3  Demonic Taskmaster                           x2    B     Threat — 4/3 flier whose force U
  3  Falkenrath Torturer                          x2    B     Engine — the deck's ONLY free  C
  3  Morbid Opportunist                           x2    B     Engine — draws a card on every U
  4  Bloodline Keeper // Lord of Lineage          x1    B     Engine — a 2/2 flier every tur M
  8  Distended Mindbender                         x1    C     Threat — Emerge {5}{B}{B} redu R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Tragic Slip                                  x2    B     Interaction — morbid is always C
  1  Village Rites                                x2    B     Engine — sacrifice outlet that C
  4  Gisa's Bidding                               x2    B     Fodder — two 2/2 Zombies; madn C
  5  Edgar's Awakening                            x1    B     Payoff — the Reanimator residu U
```

### OTHER SPELLS (1)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  The Meathook Massacre                        x1    B     Payoff — drain on every death, M
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Eaten Alive                                  x2    B     Hate — exile removal that also answers planesw C
Killing Wave                                 x1    B     Hate — symmetric sweeper this deck profits fro U
Infernal Grasp                               x1    B     Hate — unconditional removal: vs decks with a  U
Murderous Compulsion                         x2    B     Flex — cheap madness-castable removal: vs crea C
Skirsdag High Priest                         x1    B     Flex — 5/5 flying Demons from a wide board: ON R
Archghoul of Thraben                         x1    B     Flex — Zombie card advantage: vs grindy decks; U
Sever the Bloodline                          x2    B     Hate — exile answers recursion: vs disturb / u U
```

## ANALYSIS

### DECK IDENTITY

Mono-black aristocrats: a low-curve deck where every body is worth something when it dies. Falkenrath Torturer sacrifices for free and without limit, Demonic Taskmaster sacrifices for free every upkeep whether you like it or not, and Village Rites turns a dying body into two cards. Blood Artist and The Meathook Massacre convert each death into drain while Morbid Opportunist converts it into cards. The clock is not the drain, though - it is 8 flying power across two Demonic Taskmasters plus a 2/2 flier every turn from Bloodline Keeper, with the drain as the reach that finishes. Seventeen Swamps, no fixing, no rare spent on mana. Edgar's Awakening is the Reanimator residue and it earns its slot only because Demonic Taskmaster (4/3) and Distended Mindbender (5/5) gave the deck something worth returning - before them the biggest creature in the list had 2 power.

### DECK IDENTITY

Mono-black aristocrats: a low-curve deck where every body is worth something when it dies. Falkenrath Torturer sacrifices for free and without limit, Demonic Taskmaster sacrifices for free every upkeep whether you like it or not, and Village Rites turns a dying body into two cards. Blood Artist and The Meathook Massacre convert each death into drain while Morbid Opportunist converts it into cards. The clock is not the drain, though - it is 8 flying power across two Demonic Taskmasters plus a 2/2 flier every turn from Bloodline Keeper, with the drain as the reach that finishes. Seventeen Swamps, no fixing, no rare spent on mana. Edgar's Awakening is the Reanimator residue and it earns its slot only because Demonic Taskmaster (4/3) and Distended Mindbender (5/5) gave the deck something worth returning - before them the biggest creature in the list had 2 power.

### THE ARITHMETIC THAT REBUILT THIS DECK

The first version of this list was a Blood Artist drain deck. A pool-blind critic killed it with one count: Blood Artist reads `Whenever this creature or another creature dies, target player loses 1 life and you gain 1 life` — **one life per death** — so a single copy needs 20 death events to kill, and the critic counted the whole 40-card deck as able to produce only 19.

The rebuild did not argue with that. It changed what the clock is:

| | Before | After |
|---|---|---|
| Printed power | 13 | **31** |
| Flying power | 0 | **11 unconditional**, +8 grantable |
| Free unlimited sacrifice outlets | 1 card | 2 cards |
| Discard outlets | 0 | 2 (Gisa's Bidding's madness went from inert to live) |
| Max power of any creature | 2 | **5** |

That last row is why Edgar's Awakening survived at all. Returning a 2-power creature for five mana is unplayable; returning a 4/3 flier or a 5/5 is fine.

**Then the Phase 9 Challenger showed the 19 was wrong too.** Recounted: the floor is **22** (Butcher Ghoul ×2 at two lives each, Gisa's Bidding ×2 at two tokens each, ten other creature copies, three more bodies, one Edgar's Awakening rebuy). And there is no ceiling at all — `Gravecrawler` reads `You may cast this card from your graveyard as long as you control a Zombie`, and with any Zombie out plus **Falkenrath Torturer** (`Sacrifice a creature:` — no mana, no tap, no cap), that is **one death per {B}**. With both Blood Artists and The Meathook Massacre on the battlefield each loop iteration drains 3, so six black mana is 18 damage in a single turn.

So the drain is **mana-limited, not card-limited**. It stays demoted from clock to reach — but for a different reason than the original one: both unbounded engines (Gravecrawler, Bloodline Keeper) are **single copies**, 2 of 23 cards. When they show up the deck kills with drain; when they don't it kills in the air.

### WHY DEMONIC TASKMASTER IS THE BEST CARD HERE

`Flying. At the beginning of your upkeep, sacrifice a creature other than this creature.`

In most decks that's a drawback you pay for a 4/3 flier. In this one it's the engine: a **free, mandatory, recurring death trigger every single turn**, feeding Blood Artist ×2, The Meathook Massacre and Morbid Opportunist ×2 at zero mana and zero cards. Two copies are 8 of the deck's 11 unconditional flying power.

Two honest notes. Its text says "a creature **other than** this creature," so on an empty board the trigger simply does nothing — it never eats itself. But with two out it demands two bodies per upkeep, and the only *repeatable free* suppliers are Bloodline Keeper and Gravecrawler, both singletons. Butcher Ghoul's undying and the four Gisa's Bidding tokens buffer several turns; past that, two Taskmasters will start eating your 0/1 Blood Artists. That's a real cost of the second copy, accepted for the flying power.

### THE FIFTH RARE SLOT

This deck is by far the most rarity-efficient of the four — its whole engine (Falkenrath Torturer, Village Rites, Butcher Ghoul, Morbid Opportunist, Demonic Taskmaster, Gisa's Bidding, Blood Artist) is commons and uncommons. It ran at 4 of 5 rares through the build.

The last slot went to **Distended Mindbender**, on a specific argument from the Phase 9 absence audit: `Emerge {5}{B}{B}` reduced by a sacrificed Demonic Taskmaster costs **{2}{B}{B}** for a 5/5 whose cast trigger strips a card of mana value 3 or less *and* one of mana value 4 or greater — and **3 of this cube's 4 sweepers cost 4 or more** (Vanquish the Horde 8, Archangel Avacyn 5, Smoldering Werewolf 4). A resolved sweeper is the one thing that beats a wide aristocrats board, so that strip converts the deck's only *accepted* failure mode into a *mitigated* one. If you'd rather have the slot back, swapping it for a second Abundant Maw costs only the sweeper pre-emption.

### A CORRECTION I OWE THE RECORD

An earlier version of this analysis described Ormendahl, Profane Prince as a "9/7 flying lifelink indestructible haste finisher." **The cube data carries no power or toughness for Ormendahl** — only the line `Flying, lifelink, indestructible, haste`. The 9/7 came from memory, not from the pool, which is exactly the failure the build rules exist to prevent. Westvale Abbey was cut for unrelated reasons (it taps for `{C}` only in a deck with three double-black cards, and its transform needs five creatures and six lands at once), but the fabricated body is withdrawn regardless.

### CARDS CONSIDERED BUT NOT INCLUDED - a swap guide

The generated section below covers Phase 5A. These are the closer calls.

**Rares and mythics** (budget now spent exactly: Gravecrawler, Distended Mindbender, The Meathook Massacre, Bloodline Keeper, Skirsdag High Priest):

| Card | What it would do here |
|---|---|
| Sorin, Imperious Bloodlord | `+1: You may sacrifice a Vampire. When you do, Sorin deals 3 damage to any target and you gain 3 life` — a free repeatable sacrifice outlet **and** 3 reach a turn. 6 Vampire creature copies plus Bloodline Keeper's tokens support it. The first card to add if you raise the cap. |
| Invasion of Innistrad | Flash `-13/-13` removal, then two Zombies and a repeatable graveyard-exile Zombie factory on the back. Also the only mono-black answer to the conceded graveyard class. |
| Captivating Vampire | `Other Vampire creatures you control get +1/+1` covers 7 Vampire cards and lifts Blood Artist off 0/1 — but misses Demonic Taskmaster, which carries the clock, and its tap-five ability is unpayable. |
| Voldaren Bloodcaster | A 2/1 flier making Blood on every nontoken death; its transform needs five Blood and this list makes none. |
| Griselbrand | The biggest reanimation target in black, but the enabling count is 3 of 23 and it's a mythic. |

**Commons and uncommons** — free swaps:

| Card | Trade-off |
|---|---|
| Abundant Maw | The card Distended Mindbender replaced. Same 4-mana emerge off a Taskmaster, 6/4 and a 3-point drain instead of a 5/5 and a two-card strip. Take it if you'd rather have reach than sweeper protection. |
| Sanitarium Skeleton | `{2}{B}: Return this card from your graveyard to your hand` — renewable fodder, but four mana per death event where Butcher Ghoul's undying is free. |
| Ghoulish Procession | A 2/2 on every nontoken death. Note the token has **decayed**: it can't block and dies when it attacks. Right shape for this deck, wrong once per turn and nontoken-gated. |
| Haunted Dead | Two bodies per recursion and a third unbounded death engine, plus its discard cost enables madness. A genuine near-miss; it lost to curve. |
| Asylum Visitor | A 3/1 for two off an Olivia's Dragoon discard, and a second madness payoff to justify the outlets. Cheapest way to raise the aggressive floor. |
| Crawl from the Cellar | Two rebuys from one card against 15 creature copies, at a fraction of Edgar's Awakening's five mana. |
| Indulgent Aristocrat | `{2}, Sacrifice a creature` against Falkenrath Torturer's zero — the two-mana tax is what lost it the slot. |
| Decimator of the Provinces | Worth knowing why it's *not* here: it is a 7/7 with **trample and haste**, and haste is otherwise unavailable to any black card in this cube. It's excluded purely because `Emerge {6}{G}{G}{G}` has green pips a mono-black deck cannot pay. |

**Sideboard near-misses:** a second Killing Wave (only 1 is legal), Sever the Bloodline's flashback making it effectively four answers across two cards, and Demonic Taskmaster as a boarded clock against control — already maindecked here.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:5  2:7  3:6  4:3  5:1  8:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  sacrifice_outlet: 6 copies (effective 4.6: Demonic Taskmaster@0.8, Demonic Taskmaster@0.8, Village Rites@0.5, Village Rites@0.5) → p=0.80 (need ≥ 0.75)
  PASS  death_payoff: 5 copies → p=0.82 (need ≥ 0.75)
  PASS  fodder: 6 copies (effective 5.4: Bloodline Keeper // Lord of Lineage@0.8, Gravecrawler@0.6) → p=0.85 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 67%  T2 96%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre
  OK        single_large_threat: Tragic Slip
  CONCEDED  noncreature_permanents: Mono-black in this pool answers neither artifacts nor enchantments - the dossier's probes return zero mono-black matches for both and an oracle sweep of the black slice confirms it. The only answers in the cube are red or white, and taking either abandons the mono-black identity this build path was chosen for.
  CONCEDED  stack: The cube has no counterspell density worth maindecking against, and black has no answer to the stack at any rate.
  CONCEDED  graveyard: No maindeck graveyard interaction, and it would be actively counterproductive: this deck's Butcher Ghoul, Gravecrawler and Edgar's Awakening all read its own graveyard. Sever the Bloodline x2 is boarded to exile the recursive CREATURES an opposing graveyard deck presents, which is the half of the class that actually attacks.
```

- curve PASS and goldfish PASS - no WARN-tier flags were raised.
- The Engine row sits at 35% against an aggro band of 0-10%. This is declared in slot_allocation rather than argued away: an aristocrats deck's sacrifice outlets and card-flow pieces are structurally engine cards, and the band table's aggro row assumes a deck whose creatures are the whole plan.
- The assembly check's sacrifice_outlet role was REWEIGHTED at Phase 9 per Challenger 3c: Village Rites x2 had been counted at full weight as an outlet, contradicting this record's own weak_keystones entry which had already accepted that Village Rites is one-shot. Reweighted to 0.5 each, the role falls from 5.6 to 4.6 effective copies and p from 0.86 to 0.80 - still above the 0.75 threshold, now on numbers that do not contradict themselves.
- Challenger 3b is recorded rather than repaired: Demonic Taskmaster x2 each demand a body on every one of your upkeeps, and the only repeatable free suppliers are Bloodline Keeper and Gravecrawler, both single copies. Butcher Ghoul x2 and the four Gisa's Bidding tokens buffer several turns, and every forced sacrifice feeds Blood Artist x2, The Meathook Massacre and Morbid Opportunist x2 - but with neither singleton on board, two Taskmasters will eventually eat the 0/1 Blood Artists. That is a real cost of running the second copy and it is accepted for the 4 flying power.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Bloodline Keeper's '{T}: Create a 2/2 black Vampire creature token with flying' is a per-turn mana-free sink that converts extra turns into bodies; Gravecrawler recasts from the graveyard for {B} every turn a Zombie is out; Distended Mindbender's 'Emerge {5}{B}{B}' turns a surplus turn into a 5/5 and a two-card strip; and Village Rites x2 turns a flooded board into cards. Morbid Opportunist x2 draws off every death a flooded board still causes. |
| `screw` | mitigation | All 17 lands are Swamps, so a two-land hand is never colour-screwed. CORRECTED per Challenger finding 4 - the previous entry claimed '13 of the 23 nonland cards cost 2 or less'; the structural check's own curve distribution gives 5 at mana value 1 and 7 at mana value 2, so the true count is 12 of 23. The two cheapest engine pieces, Olivia's Dragoon at {1}{B} and Village Rites at {B}, are both live on two lands. The mana audit reports a 0.0pp colour gap and P(2-4 lands in 7) = 0.7945. |
| `decapitation` | mitigation | There is no single key card - that is this deck's advantage over the two reanimator builds. The sacrifice outlets are 6 copies across three cards, the death payoffs 5 copies across three cards, and the fodder 6 copies across four cards. Losing any one is absorbed. Butcher Ghoul answers removal by returning, Gravecrawler answers it by recasting, and Bloodline Keeper replaces a killed token every turn. |
| `gas-out` | mitigation | CORRECTED per Challenger 3a - the previous entry claimed Morbid Opportunist 'triggers on every Falkenrath Torturer activation', which its own text forbids: 'Whenever one or more other creatures die, draw a card. THIS ABILITY TRIGGERS ONLY ONCE EACH TURN.' Ten sacrifices in a turn draw one card per Opportunist, capped at 2 per turn with both copies out. Corrected throughput: 2 cards per turn from Morbid Opportunist x2, plus 4 cards across Village Rites x2 ('sacrifice a creature. Draw two cards'), plus a free body every turn from Bloodline Keeper that costs no card at all. That is sufficient for a deck whose thesis turn is 6. |
| `raced` | mitigation | This is the only one of the four decks that is not simply losing races. Demonic Taskmaster x2 is 8 flying power on two three-drops, Bloodline Keeper adds an evasive 2/2 a turn, and Blood Artist x2 plus The Meathook Massacre drain on every trade, so blocking and trading still advances the clock. QUALIFIED per Challenger finding 4: Tragic Slip's morbid is 'trivially on' only on YOUR turn. At instant speed on the opponent's turn it requires Falkenrath Torturer specifically - 2 of 23 nonland cards - because Demonic Taskmaster's sacrifice fires only on your own upkeep. |
| `disruption-fizzle` | mitigation | UPGRADED from 'accepted' to 'mitigated' by the Phase 9 repair. The mode is a resolved sweeper on a wide board, which this deck cannot rebuild through in one turn. Distended Mindbender now pre-empts it: its cast trigger strips a nonland card of mana value 4 or greater, and 3 of this cube's 4 sweepers cost 4 or more (Vanquish the Horde 8, Archangel Avacyn 5, Smoldering Werewolf 4). Behind that, the structural answers remain - Butcher Ghoul returns via undying, Gravecrawler recasts from the graveyard for {B}, Bloodline Keeper rebuilds a body per turn, and every creature lost to a sweeper triggers Blood Artist x2 and The Meathook Massacre, so even a blowout drains the opponent on the way out. The residual risk, stated: the strip is one card in 40 and only helps if it resolves before the sweeper is cast. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Chittering Host | Meld result - this card has no mana cost and exists only as the melded form of two other cards, so it cannot legally be a deck card. |
| Decimator of the Provinces | CORRECTED (Challenger 5b): the previous batch reason claimed reanimating it 'delivers only a vanilla body because its payoff is a CAST trigger'. That is FALSE for this card - its last printed line is 'Trample, haste' on a 7/7, and haste is otherwise unavailable to any black card in this cube. The exclusion stands on the colour rule alone: Emerge {6}{G}{G}{G} contains green pips a mono-black deck cannot pay, and its printed {10} is uncastable, so Phase 5C check 4 excludes it by rule. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.7   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.07 adj [MV 2.7 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] commons_uncommons_max_2: PASS - highest count is 2, and every 2-of is a common or uncommon.
[PASS] rares_mythics_max_1: PASS - every rare and mythic appears once.
[PASS] rare_mythic_total_max_5: PASS - exactly 5: Gravecrawler (R), The Meathook Massacre (M), Bloodline Keeper (M) and Distended Mindbender (R) in the mainboard; Skirsdag High Priest (R) in the sideboard.
[INFO] basics_unlimited: 17 Swamp, format-supplied and exempt from copy limits.
[PASS] all_cards_from_cube: PASS - Phase 5C check 2, exact-name membership against the working pool cache.
```