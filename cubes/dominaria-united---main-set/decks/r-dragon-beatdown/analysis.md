---
deck_name: "r-dragon-beatdown"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "R"
format: "40-card"
built_at: "2026-08-19T20:17:13Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  17x Mountain                 Red source
```

### CREATURES (12)

```
CMC  Card                          Qty   Color  Role                                      Rar
  1  Phoenix Chick                 x2    R      Turn-1 flying haste clock; returns from   U
  1  Shivan Devastator             x1    R      Scalable flying-haste Dragon finisher     M
  2  Electrostatic Infantry        x2    R      Trampling threat that grows on every ins  U
  2  Radha's Firebrand             x1    R      Repeatable pseudo-evasion: strips a smal  R
  3  Flowstone Kavu                x2    R      Menace body with a pump sink              C
  4  Defiler of Instinct           x1    R      Reach engine: pings on every red permane  R
  4  Dragon Whelp                  x2    R      Dragon flier / mana sink                  U
  6  Ragefire Hellkite             x1    R      Top-end Dragon: 5/3 flier, double strike  R
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                          Qty   Color  Role                                      Rar
  2  Furious Bellow                x2    R      +3/+0 and first strike wins a block; scr  C
  2  Lightning Strike              x2    R      Removal or the last 3 points to the face  C
  2  Thrill of Possibility         x2    R      Digs to the top-end and converts flood i  C
  2  Twinferno                     x1    R      Double strike doubles an evasive attacke  U
  5  Jaya's Firenado               x1    R      Answer to a blocker this deck cannot bur  C
```

### OTHER SPELLS (3)

```
CMC  Card                          Qty   Color  Role                                      Rar
  1  Hammerhand                    x2    R      Makes a blocker unable to block and gran  C
  4  The Elder Dragon War          x1    R      Read-ahead to III for a 4/4 flying Drago  R
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                    Rar
Coalition Warbrute            x2    R      RACED  C
Flowstone Infusion            x2    R      EVASION  C
In Thrall to the Pit          x2    R      LETHAL PUSH (not removal)  C
Jaya's Firenado               x1    R      SINGLE LARGE THREAT  C
Smash to Dust                 x2    R      NONCREATURE PERMANENTS + WIDE BOARDS  C
Twinferno                     x1    R      STALLED BOARD  U
```

## ANALYSIS

### DECK IDENTITY

Mono-red Dragon beatdown that wins in the air and finishes from an empty board. Cheap evasive bodies (Phoenix Chick, Flowstone Kavu's menace, Radha's Firebrand stripping blockers) start the clock, the Dragon top-end takes over from turn 4 (Dragon Whelp, a read-ahead Elder Dragon War token, Shivan Devastator sized to the mana available, Ragefire Hellkite), and Lightning Strike plus Defiler of Instinct's per-spell ping deliver the last points regardless of the board. Seventeen untapped Mountains mean the deck never stumbles on colour.

### "DRAGON BEATDOWN" IS A FLAVOUR LABEL HERE, NOT A MECHANISM

This is the most important thing to know about this deck, and the Phase 9 Challenger established it by sweeping all 271 cards in the legal pool: **zero mono-red cards reward the Dragon creature type.** The only kindred payoff in the whole cube is Rivaz of the Claw, which is {1}{B}{R} and outside this identity. The `Tribal/Kindred` tag sitting on Dragon Whelp, Ragefire Hellkite and The Elder Dragon War is decorative in a mono-red shell.

So this deck does not win because four of its cards are Dragons. It wins because **8 of its 12 creature copies evade** — 6 flying (2 Phoenix Chick, 2 Dragon Whelp, Shivan Devastator, Ragefire Hellkite) and 2 menace (Flowstone Kavu) — and because it has 6 points of face-capable burn to finish from an empty board. The Dragons are here because they are the best evasive bodies red has, not because they share a type line.

That reframing changed one real decision. The shape judge kept Ragefire Hellkite partly on the grounds that "the cube holds only four Dragon cards," which turned out to be inert. The ground that survived audit is narrower and stronger: **Ragefire Hellkite is the only evasive body above 4 mana available to mono-red.** The alternatives at 5+ are Molten Monstrosity (5/5 trample, no evasion), Meria's Outrider (4/4 reach) and Hurler Cyclops (5/4, no evasion). Cut the Hellkite and the biggest flier in the deck is a 2/3 Dragon Whelp.

### THE MANABASE IS THE WHOLE ARGUMENT FOR THIS BUILD

Seventeen basic Mountains. Zero lands enter tapped. Zero colour risk.

That sounds like a non-decision, but it is the reason this build exists as a distinct deck from the black-red one. Four cards demand {R}{R} at four mana — Dragon Whelp, The Elder Dragon War, Defiler of Instinct — and Ragefire Hellkite wants {4}{R}{R}. Crystal Grotto and Plaza of Heroes were both cut on a single line of oracle text: their unconditional ability is `{T}: Add {C}`, and colourless mana cannot pay a coloured pip. In a mono-colour deck a basic Mountain is strictly better than a land that taxes you for colour.

The mana audit reads 100% demand against 100% production, gap 0.0pp — the only perfect colour balance across the three Dragon decks.

### DEFILER OF INSTINCT IS THE HIGHEST-DENSITY ENGINE IN ANY OF THE THREE BUILDS

> Whenever you cast a red permanent spell, this creature deals 1 damage to any target.

Red permanent spells in this list: **15 of 23 nonland cards (65.2%)** — 12 creature copies, The Elder Dragon War, and both Hammerhands. The same 15 also get its pip discount ("Those spells cost {R} less to cast if you paid life this way").

One correction worth recording, because the first draft of this analysis got it wrong: Defiler is **not** empty-board reach. Its trigger reads "*this creature* deals 1 damage," so it must itself be on the battlefield, and it is a creature. The genuine empty-board reach in this deck is 2 cards of 23 — both Lightning Strikes.

### THE ELDER DRAGON WAR IS THREE CARDS, AND YOU USUALLY ONLY GET ONE

> Read ahead (Choose a chapter and start with that many lore counters. Skipped chapters don't trigger. Sacrifice after III.)
> I — This Saga deals 2 damage to each creature and each opponent.
> II — Discard any number of cards, then draw that many cards.
> III — Create a 4/4 red Dragon creature token with flying.

Read Ahead means you pick one entry point and skip everything before it. That makes this a genuinely modal card — and it means the three modes are **mutually exclusive in a given game**, which is easy to double-count when writing up a deck.

Chapter I is also **symmetric**, and this deck is on the wrong side of it. **5 of the 13 threat cards die to your own chapter I**: 2 Phoenix Chick (1/1), 2 Electrostatic Infantry (1/2), and Radha's Firebrand (3/1) — plus Shivan Devastator whenever it was cast for X ≤ 2, since it is printed 0/0. Chapter III for an immediate 4/4 flier is the default line; chapter I is for boards where the opponent loses more than you do.

### RAGEFIRE HELLKITE'S RIDER IS UPSIDE, NOT AN ENGINE

> Whenever this creature attacks, you may sacrifice another creature. If you do, this creature gains double strike until end of turn.

In the black-red build this is the deck's whole plan, fed by free renewable tokens. Here it is not, and the count says why. There are 11 other creature copies, but **6 of those 11 are themselves evasive attackers** — sacrificing one costs the clock the deck is trying to run. The honest figure is **3 non-costly fodder copies of 23 (13.0%)**: the two Phoenix Chicks, whose graveyard return triggers on the same "attack with three or more creatures" state in which the Hellkite is already attacking, and the single Elder Dragon War token.

The trigger is a "may." Treat it as a bonus on turns where a spent Phoenix Chick happens to be lying around, and cast the Hellkite as a 5/3 flier the rest of the time.

### WHAT THIS DECK STRUCTURALLY CANNOT ANSWER

Three classes, all forced by the pool rather than chosen:

| Class | Size in cube | Why it is unanswerable in mono-red |
|---|---|---|
| Graveyard | 32 cards (13.0%) | **Zero graveyard-hate cards exist anywhere in the cube**, in any colour. |
| Lifegain | 22 cards (8.9%) | The pool's only "opponents can't gain life" effect is Knight of Dusk's Shadow, which is black. |
| Enchantments | 18 cards (7.3%) | The pool's three enchantment answers are W, G and BG. Mono-red has exactly one — Chaotic Transformation — and it is a rare at {5}{R} against a budget already at 5 of 5. |

The enchantment gap has teeth: Citizen's Arrest, Leyline Binding, Prayer of Binding and Temporary Lockdown all exile this deck's threats, and there is no answer to any of them.

### THE ABSENCE AUDIT CAME BACK EMPTY, WHICH IS ITSELF THE FINDING

The Phase 9 Challenger enumerated every mono-red and colourless card in the pool not already in the 50 — 11 and 17 respectively — and found an oracle-grounded count against each one. Balduvian Berserker's death trigger returns 1 damage at power 1. Rundvelt Hordemaster's two abilities both key on Goblins, and the deck runs zero. Hero's Heirloom's trample-and-haste clause needs a legendary creature, and the deck runs zero. Meria's Outrider's Domain trigger scales with basic land types, and 17 Mountains is exactly one.

Its conclusion: **the mono-red pool is exhausted.** Every legal copy of every playable mono-red card is either in this 50 or has a stated reason it is not. That is a real constraint on iterating this deck — the swaps available are within the 50, not from outside it.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:5  2:10  3:2  4:4  5:1  6:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.3: Phoenix Chick@0.7, Phoenix Chick@0.7, The Elder Dragon War@0.9) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 6 copies → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 68%  T2 98%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: The Elder Dragon War
  OK        single_large_threat: Jaya's Firenado, Lightning Strike
  CONCEDED  noncreature_permanents: Conceded on COST, not absence. Mono-red does contain an answer: Chaotic Transformation exiles a target artifact, enchantment, planeswalker, creature and land. But it is a rare against a rare/mythic budget already at exactly 5 of 5, and at {5}{R} it is a six-mana sorcery in a deck whose goldfish turn is five. The cheaper option, Smash to Dust, answers only artifacts and is sideboarded. The largest genuinely unpurchasable class is enchantments (18 cards, 7.3%): the pool's three enchantment answers are W, G and BG, so mono-red has none at or below 5 mana.
  CONCEDED  stack: Mono-red contains no counterspells anywhere in this cube, so stack interaction is not purchasable at any slot cost; the deck answers a resolved threat with burn or a faster clock.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards (dossier structural_census: GY hate = 0), so no deck in any colour can answer this class. The concession is forced by the pool.
```

- No WARN-tier flags: curve, assembly, goldfish and coverage all returned PASS, so no deviation response is owed. The Threats/Payoffs row sits 1.5pp above the 45-55% band; the judge credited that deviation as thesis-grounded and it is recorded in slot_allocation.

- Assembly p-value model disclosed after finding F7: deck_checks.p_at_least_one computes 1-(1-copies/deck_size)^cards_seen, a binomial (with-replacement) form, which is more pessimistic than the hypergeometric values an independent recount produces (0.87 vs 0.91 for payoff, 0.86 vs 0.90 for enabler). Both models clear the 0.75 threshold, so the PASS is unaffected; the reported figures are the module's, not hand-computed.

- Largest unanswerable threat classes, stated rather than left to the maindeck coverage section: ENCHANTMENTS (18 cards, 7.3%) - the pool's only enchantment answers are W, G and BG, so mono-red has none at or below 5 mana, and Citizen's Arrest / Leyline Binding / Prayer of Binding / Temporary Lockdown all exile this deck's threats. LIFEGAIN (22 cards, 8.9%) - the pool's only 'opponents can't gain life' card is Knight of Dusk's Shadow, which is black. GRAVEYARD (32 cards, 13.0%) - zero graveyard hate exists anywhere in the cube. All three are forced by the pool, not builder choices.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Shivan Devastator is {X}{R} and 'enters with X +1/+1 counters on it', so every land past the fifth becomes power on a flying haste body. Dragon Whelp's '{R}: This creature gets +1/+0 until end of turn' is a second repeatable sink, and Thrill of Possibility converts a surplus land in hand into two cards. |
| screw | mitigation | 15 of 23 nonland cards cost 1 or 2 mana, and all 17 lands are untapped Mountains with zero colour risk, so a two-land hand still curves out through turn 2. Thrill of Possibility ('discard a card. Draw two cards.') digs for land 3. Goldfish simulation over 1000 hands: 87% keepable, 88% reach 3 lands by turn 3. |
| decapitation | mitigation | No single card is the plan: 7 functional payoff copies (effective 6.3) across Ragefire Hellkite, Shivan Devastator, 2 Dragon Whelp, 2 Phoenix Chick and The Elder Dragon War give p=0.87 of an evasive threat by turn 5. Empty-board reach is 2 cards of 23, not 3 (corrected per finding F9): 2 Lightning Strike 'deal 3 damage to any target' with no permanent required. Defiler of Instinct was previously miscounted here - its trigger reads 'THIS CREATURE deals 1 damage to any target', so it must itself be on the battlefield and is not empty-board reach. |
| gas-out | mitigation | 2 Thrill of Possibility draw two each; Phoenix Chick returns itself from the graveyard for {R}{R} rather than a card; and Shivan Devastator converts a flooded hand of lands into a lethal body, which is the practical answer to running out of spells. The Elder Dragon War chapter II ('Discard any number of cards, then draw that many') also refuels - but per finding F8 this is disclosed as MUTUALLY EXCLUSIVE with the same copy's chapter III Dragon token, because read ahead means 'Choose a chapter and start with that many lore counters' and 'Skipped chapters don't trigger'. That one card cannot be both the payoff and the refuel in the same game, and it is counted as a payoff first. |
| raced | accepted | This deck has 3 interaction slots and gains no life, so against the cube's fastest white Soldier-token and Goblin draws it is relying on being the faster deck rather than on surviving. Mitigating would mean maindecking Coalition Warbrute or a second Jaya's Firenado over evasive threats, which lowers the flier count that makes the turn-5 goldfish real and converts the deck into a midrange list that loses to the decks it currently beats. Those cards are in the sideboard precisely so the trade is made only when the matchup demands it. |
| disruption-fizzle | mitigation | The critical turn is an evasive attack, not a combo. If the attacker is removed in response to a pump spell the loss is one card, and the deck simply attacks with the next flier; there are 7 payoff copies. Hammerhand's 'target creature can't block this turn' resolves on cast and its effect is independent of the enchanted creature surviving, and Twinferno's double strike is an instant that can be held until after blockers are declared. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Rivaz of the Claw | Costs {1}{B}{R}; black is outside this deck's mono-red identity, which is the whole point of this build (zero fixing risk, 17 untapped Mountains). |
| Squee, Dubious Monarch | A strong 3-mana haste threat, but the 5-card rare/mythic cap is fully spent on Shivan Devastator, Ragefire Hellkite, The Elder Dragon War, Defiler of Instinct and Radha's Firebrand — all of which either are Dragons or push evasive damage, which Squee does not. |
| Jaya, Fiery Negotiator | Its +1 makes 1/1 ground Monk tokens with no haste and no evasion; against this deck's turn-5 goldfish that is a grind plan, and it would cost a rare slot held by an actual Dragon. |
| Weatherlight Compleated | Becomes a creature only at four or more phyresis counters, accrued one per creature of yours that dies — it requires losing four creatures before it attacks, which is the opposite of an aggressor's plan. |
| Keldon Flamesage | 'look at the top X cards... You may exile an instant or sorcery card with mana value X or less' — this list runs 8 instants/sorceries of 23 nonland cards, and the trigger needs the Flamesage to attack and survive first. |
| Rundvelt Hordemaster | 'Other Goblins you control get +1/+1' and its death trigger only hits Goblin cards; this list runs 0 other Goblins, so both abilities are blank. |
| Hurler Cyclops | '{1}, Sacrifice another creature: deals 1 damage to any target' converts a body worth several points of evasive damage into 1 damage; this deck has no token generator to feed it (unlike the BR build). |
| Karn's Sylex / Karn, Living Legacy / Golden Argosy | Colourless mythics/rares with no Dragon or evasion content; each would consume one of the 5 rare slots the Dragon package already fills. |
| Molten Monstrosity | 'costs {X} less to cast, where X is the greatest power among creatures you control' — it needs a big creature already resolved, which is the problem it was meant to solve. |
| Meria's Outrider | Its Domain trigger deals damage equal to the number of basic land types you control; a mono-red deck controls exactly one, so it is a 5-mana 4/4 that pings for 1. |
| Crystal Grotto / Plaza of Heroes | Both tap for {C} unconditionally; colourless mana cannot pay the {R}{R} on Dragon Whelp, The Elder Dragon War, Defiler of Instinct or Ragefire Hellkite, so a basic Mountain is strictly better here. |
| Goblin Picker | A {R},{T},discard looter is card-neutral and costs a turn of board development; Thrill of Possibility does the same job at instant speed without occupying a creature slot. |
| Yotia Declares War | ADDED after Challenger finding F11 (a completeness gap in the original sweep). A mono-red uncommon Saga in the same slot as The Elder Dragon War, but chapter II ('Tap any number of untapped artifacts you control') and chapter III ('target artifact you control becomes an artifact creature with base power and toughness 4/4') are both blank against 0 artifacts of 23 nonland cards, and chapter I's 0/2 Ornithopter adds no clock. |
| Vanquisher's Axe | CONTESTED absence from the grill. 'Equipped creature gets +2/+0. Equip {2}.' The Challenger argued a permanent, re-equippable pump beats a one-shot trick across 8 of 12 evasive creature copies and survives a board wipe. Declined: it costs {1} plus {2} equip before adding any damage, arriving a turn later than a turn-5 goldfish allows, whereas Furious Bellow adds +3/+0 at instant speed for 2 mana and scries. The resilience argument is accepted on its merits; the clock is the reason it loses. |
| Balduvian Berserker | 'When this creature dies, it deals damage equal to its power to any target' is the only card in the pool that makes Ragefire Hellkite's sacrifice card-positive, but at power 1 the death trigger returns 1 damage and a 1/3 with no evasion adds nothing to a plan where 8 of 12 bodies evade. |
| Hero's Heirloom | 'As long as equipped creature is legendary, it has trample and haste' - this list holds 0 legendary creatures of 12 creature copies, so it is a strictly worse, costlier Vanquisher's Axe. |
| Chaotic Transformation | The only mono-red answer to an enchantment in the entire pool, but a rare at {5}{R} against a rare/mythic budget already at exactly 5 of 5, and a six-mana sorcery in a deck whose goldfish turn is five. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.03 adj [MV 2.52 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 (expected 40)
[PASS] 1b sideboard size — 10 (expected 10)
[PASS] 2 exact-name membership in working pool — missing=[]
[PASS] 3 copy limits vs card_pool_rules — all within limits
[PASS] 3b rare/mythic budget <= 5 — 5 — Defiler of Instinct x1 (rare), Radha's Firebrand x1 (rare), Ragefire Hellkite x1 (rare), Shivan Devastator x1 (mythic), The Elder Dragon War x1 (rare)
[PASS] 4 every nonland usable in core+splash — unusable=[]
[PASS] 5 splash cap (<=3 per splash colour) — no splash colours declared
```
