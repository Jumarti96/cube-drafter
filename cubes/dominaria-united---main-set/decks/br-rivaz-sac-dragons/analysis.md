---
deck_name: "br-rivaz-sac-dragons"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-08-19T20:07:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  9x Mountain                 Red source
  5x Swamp                    Black source
  2x Geothermal Bog           BR dual, enters tapped
  1x Sulfurous Springs        BR dual, untapped (1 damage)
```

### CREATURES (16)

```
CMC  Card                          Qty   Color  Role                                      Rar
  1  Cult Conscript                x2    B      Recursive sacrifice fodder                U
  1  Phoenix Chick                 x2    R      Evasive 1-drop / recursive fodder         U
  1  Shivan Devastator             x1    R      Scalable haste Dragon finisher            M
  2  Splatter Goblin               x2    B      Fodder whose death shrinks a blocker      C
  3  Lagomos, Hand of Hatred       x2    BR     Free sacrifice fodder every combat        U
  3  Rivaz of the Claw             x1    BR     Menace body; Dragon ramp + graveyard rec  R
  3  Squee, Dubious Monarch        x1    R      Haste threat / renewable token fodder     R
  4  Dragon Whelp                  x2    R      Dragon flier / mana sink                  U
  4  Garna, Bloodfist of Keld      x2    BR     Converts creature deaths into cards or r  U
  6  Ragefire Hellkite             x1    R      Kill mechanism — double-strike flier      R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                          Qty   Color  Role                                      Rar
  1  Bone Splinters                x1    B      Unconditional kill for the large threats  C
  1  Cut Down                      x1    B      One-mana instant answer to early blocker  U
  2  Lightning Strike              x2    R      Removal / reach to the face               C
  2  Thrill of Possibility         x1    R      Screw insurance: digs to the third land   C
  2  Twinferno                     x2    R      Grants double strike to any evasive atta  U
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                    Rar
Extinguish the Light          x2    B      SINGLE LARGE THREAT  C
Flowstone Infusion            x2    R      WIDE BOARDS + EVASION  C
Jaya's Firenado               x2    R      SINGLE LARGE THREAT  C
Pilfer                        x2    B      STACK-ADJACENT / SLOW DECKS  C
Smash to Dust                 x2    R      NONCREATURE PERMANENTS + WIDE BOARDS  C
```

## ANALYSIS

### DECK IDENTITY

Black-red sacrifice aggro that uses the cube's four Dragon cards as an evasive top-end. Cheap disposable bodies (Lagomos tokens, Cult Conscript, Splatter Goblin, Squee's Goblins) apply early pressure and then become ammunition: Ragefire Hellkite's attack trigger turns a spare creature into double strike, and Twinferno grants the same double strike to any of the six evasive attackers at instant speed. Garna, Bloodfist of Keld converts every death into a card or reach damage, and Rivaz of the Claw is a menace body that sometimes accelerates a Dragon out a turn early or recasts one from the graveyard.

### THE FOUR-DRAGON PROBLEM

This deck is built around a tribe the cube barely contains. Dominaria United here holds exactly **four Dragon-typed cards** — Dragon Whelp, Ragefire Hellkite, Shivan Devastator, and Rith, Liberated Primeval — and Rith is GRW, so a black-red deck can field at most **four Dragon creature spells** (2 Dragon Whelp, 1 Ragefire Hellkite, 1 Shivan Devastator). That is 4 of 23 nonland cards, or 17.4%.

Everything about how this list is built follows from that number. It is not a tribal deck with a Dragon subtheme; it is a black-red sacrifice aggro deck whose top end happens to be the Dragons, and the honest framing is that the tribe supplies the finishers, not the engine.

### RIVAZ, STATED AS A COUNT RATHER THAN A FLAVOUR

Rivaz of the Claw is the card the archetype is named for, and it is the card this list is most careful about. Its abilities read:

> {T}: Add two mana in any combination of colors. Spend this mana only to cast Dragon creature spells.
> Once during each of your turns, you may cast a Dragon creature spell from your graveyard.

Against this list, the first ability can pay for **4 of 23 nonland cards (17.4%)** and is blank on every other turn. Dragon *tokens* are created, not cast, so nothing token-shaped is inside that count. The second ability needs a Dragon already in the graveyard, and exactly **1 of 23 nonland cards** (Thrill of Possibility) can put one there on purpose.

So Rivaz is included at its floor: a 3-mana 3/3 with menace, which is a perfectly reasonable aggro three-drop, with a turn-3-into-turn-4-Hellkite line as upside on a minority of draws. The independent shape judge in this build actually voted to **cut Rivaz entirely** on exactly this reasoning, and it was right about the card in isolation. It was overruled only because this deck exists alongside a separate mono-red Dragon build, and the reasoning for that override is recorded in full in the build derivation rather than hidden.

### WHERE THE DAMAGE ACTUALLY COMES FROM

The kill mechanism is Ragefire Hellkite:

> Flying
> Whenever this creature attacks, you may sacrifice another creature. If you do, this creature gains double strike until end of turn.

Ten evasive damage in one swing, for the price of a creature that was going to die anyway. The list is built so that price is always payable. **7 of 23 nonland cards** produce a disposable body — 2 Lagomos, Hand of Hatred, 2 Cult Conscript, 2 Splatter Goblin, 1 Squee, Dubious Monarch — and two of those renew a body every single combat at no card cost:

| Card | The free body |
|---|---|
| Lagomos, Hand of Hatred | "At the beginning of combat on your turn, create a 2/1 red Elemental creature token with trample and haste. Sacrifice it at the beginning of the next end step." |
| Squee, Dubious Monarch | "Whenever Squee attacks, create a 1/1 red Goblin creature token that's tapped and attacking." |

Lagomos is the cleanest fit in the deck. Its token is sacrificed at end step whether or not the Hellkite eats it, so feeding the kill mechanism is genuinely free, every turn, forever.

The probability of holding at least one enabler by turn 6 is **0.92**.

### THE REPAIR THAT MATTERED

The first version of this list failed its own self-grill on a finding worth recording: the thesis named double strike as the kill mechanism, but that text existed on **one 6-mana rare** the copy cap forbids doubling. Reaching it on the stated goldfish turn happened in roughly one game in seven.

Two copies of Twinferno fixed it —

> Target creature you control gains double strike until end of turn.

— taking the mechanism from 1 of 23 nonland cards to **3 of 23**, and from one carrier to **six** (Ragefire Hellkite, Shivan Devastator, 2 Dragon Whelp, 2 Phoenix Chick all have flying). Twinferno is an uncommon, so it cost nothing against the five-card rare budget.

That still only reaches p≈0.64–0.70 by turn 6 depending on the model, which is below the 0.75 assembly threshold. Rather than relabel the role to make the gate go green, the thesis was revised to match what the deck actually does: **the kill mechanism is evasive Dragon damage** (6 payoff copies, effective 5.2, p=0.84), **amplified by double strike when available**. Double strike is deliberately not declared as an assembly engine, because the deck wins without it.

### GARNA IS THE QUIET ENGINE

> Whenever another creature you control dies, draw a card if it was attacking. Otherwise, Garna deals 1 damage to each opponent.

Both halves are live here, and the split matters more than it looks. The Hellkite's sacrifice happens *during the attack step with attackers declared*, so it draws a card. The Lagomos token dies at *end step*, not attacking, so it pings for 1. A deck that sacrifices a creature nearly every turn turns Garna into either a card or a point of reach on nearly every turn, which is why it is the only maindeck answer to running out of gas.

### A TENSION WORTH KNOWING ABOUT

Squee's graveyard recursion costs "exiling four other cards from your graveyard." **6 of 23 nonland copies want cards to stay in that graveyard**: 2 Phoenix Chick and 2 Cult Conscript both return themselves from it, and Rivaz's recast clause targets the 4 Dragon copies. These recursion sub-plans compete for the same resource and cannot all be used in one game. Squee stays — it is the renewable fodder the plan runs on — but when you have a Phoenix Chick and a Cult Conscript in the yard, recasting Squee is usually the worse line.

### WHAT THIS DECK CANNOT DO

Three of the five threat classes are conceded, and two of those concessions are forced by the cube rather than chosen:

- **Graveyard** — the cube contains **zero** graveyard-hate cards. No deck in any colour can answer this class, and the cube's graveyard density is 32 cards (13%). This is the single largest unanswerable threat in the format.
- **Stack** — black and red hold no counterspells anywhere in this cube.
- **Noncreature permanents** — conceded on cost, not absence. Chaotic Transformation is a real mono-red answer, but it is a rare against a fully spent budget and a six-mana sorcery in a deck whose goldfish turn is six.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:7  2:7  3:4  4:4  6:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.2: Phoenix Chick@0.6, Phoenix Chick@0.6) → p=0.84 (need ≥ 0.75)
  PASS  enabler: 7 copies → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 76%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: The deck has no sweeper and cannot add one: every mass-damage effect available in these colours (The Elder Dragon War chapter I, Smash to Dust) also kills this list's own Lagomos tokens, Cult Conscripts and Splatter Goblins, which are the sacrifice fuel the kill mechanism runs on. The plan against a wide board is to fly over it.
  OK        single_large_threat: Bone Splinters, Cut Down, Lightning Strike
  CONCEDED  noncreature_permanents: Conceded on cost, not on absence. These colours DO contain an answer -- Chaotic Transformation, mono-red, exiles a target artifact, enchantment, planeswalker, creature and land -- but it is a rare against a rare/mythic budget already fully spent on the Dragon package, and at {5}{R} it is a six-mana sorcery in a deck whose goldfish turn is six. The cheaper option, Smash to Dust, answers only artifacts (15 cards in a 266-card cube) and is a blank against most opponents, so it is sideboarded rather than maindecked.
  CONCEDED  stack: These colours contain no counterspells anywhere in this cube, so stack interaction is not purchasable at any slot cost; the deck answers resolved threats with removal or a faster clock, and Pilfer is sideboarded for proactive hand disruption.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards (dossier structural_census: GY hate = 0), so no deck in any colour can answer this class. The concession is forced by the pool.
```

- No WARN-tier flags: curve, assembly, goldfish and coverage all returned PASS after the grill repairs, so no deviation response is owed.

- Coverage class single_large_threat moved from OK-on-paper to OK-in-fact: finding F2 showed Cut Down and Lightning Strike answer 0 of the 42 pool creatures with total P+T >= 6 and toughness >= 4. Bone Splinters ('sacrifice a creature. Destroy target creature.') is now the declared unconditional answer.

- Coverage class noncreature_permanents is conceded on COST, not absence (finding F11): Chaotic Transformation is a mono-red answer in the pool, but it is a rare against a fully spent budget and a six-mana sorcery in a deck whose goldfish turn is six.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Shivan Devastator is {X}{R} and 'enters with X +1/+1 counters on it', so every land past the fifth becomes power on an evasive haste body. Dragon Whelp's '{R}: This creature gets +1/+0 until end of turn' is a repeatable sink, and Cult Conscript's '{1}{B}: Return this card from your graveyard to the battlefield' converts surplus mana into fresh sacrifice fodder. |
| screw | mitigation | 13 of 23 nonland cards are one- and two-drops that actually deploy on curve, so a two-land hand still develops through turn 3, and Thrill of Possibility ('discard a card. Draw two cards.') digs for the third land at instant speed. (Count corrected per finding F12: the raw 1-and-2-MV count is 14, but one of those is Shivan Devastator at {X}{R}, a 0/0 for two mana that contributes nothing to curving out, so the honest figure is 13.) Goldfish simulation over 1000 hands: 86% keepable, 88% reach 3 lands by turn 3. |
| decapitation | mitigation | Ragefire Hellkite answered on sight no longer ends the plan, and after finding F1 that is true in two independent ways. First, the threats are redundant: Shivan Devastator, 2 Dragon Whelp and 2 Phoenix Chick are independent evasive closers (5.2 weighted functional copies, p=0.84 by turn 6). Second, the MECHANISM no longer lives on the Hellkite - 2 Twinferno grant 'double strike until end of turn' to any of those six flying bodies. Rivaz can additionally recast a dead Dragon from the graveyard. |
| gas-out | mitigation | 8 of 23 nonland copies refuel or replace themselves (count corrected per finding F3, which showed the previous '6 of 23' reproduced to neither 8 by copies nor 5 by names): Garna x2 draws 'a card if it was attacking' on every sacrifice made during an attack, which is exactly when the Hellkite eats a body; Thrill of Possibility x1 draws two; Cult Conscript x2 and Phoenix Chick x2 return themselves from the graveyard for mana rather than a card; Squee x1 recasts itself for {3}{R}. |
| raced | accepted | The fastest clocks in this cube are the white Soldier-token and red Goblin decks. This list holds 4 interaction slots and gains no life. Mitigating would mean maindecking Extinguish the Light or Gibbering Barricade over threats, converting the deck from the aggressor into a midrange list that loses on speed the races it currently wins - and those defensive cards are blanks in the matchups this deck is favoured in. (Mechanism corrected per finding F6: the binding constraint is NOT a '16 threat' count - the Hellkite needs exactly one other creature per attack and Lagomos supplies it free every combat. The real cost of mitigating is the aggressor identity and the clock, not trigger liveness.) |
| disruption-fizzle | mitigation | The critical turn is the Hellkite attack. The trigger is optional - 'you may sacrifice another creature' - so if the intended fodder is removed in response the Hellkite still attacks as a 5/3 flier and loses only double strike, which Twinferno can then supply at instant speed for {1}{R}. Lagomos remakes a body 'at the beginning of combat on your turn', so the same attack is retried next turn at no card cost. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Knight of Dusk's Shadow | CUT POST-GRILL. The only maindeck creature that was neither disposable fodder with a death payoff nor an evasive closer; its 'Your opponents can't gain life' clause is live against 21 of 247 cube cards (8.5%), and its {1}{B} pump is duplicated by Dragon Whelp x2 and Cult Conscript x2. Both copies became Twinferno x2. |
| Rith, Liberated Primeval | Costs {2}{R}{G}{W}; requires two off-colour splashes (G and W), so it fails the single-off-colour splash test. It is the payoff of the separate RGW build. |
| The Elder Dragon War | A rare, and the 5-card rare/mythic budget is fully spent on Rivaz, Ragefire Hellkite, Shivan Devastator, Squee and Sulfurous Springs. Its chapter I ('2 damage to each creature and each opponent') is also symmetric against this list's 1- and 2-toughness fodder. |
| Rundvelt Hordemaster | Displaced by Rivaz for the last rare slot. 'Other Goblins you control get +1/+1' and its death trigger only hits Goblin cards; this list holds 3 Goblin-typed copies of 23 (13.0%), so its exile trigger hunts a library containing three Goblins. |
| Warhost's Frenzy | 'Creatures you control get +2/+0 until end of turn. If this spell was kicked, whenever a creature you control dies this turn, draw a card.' Genuinely on-plan, but kicked it costs {2}{R}{B} for a one-turn effect, and the death-to-cards job is already held by Garna x2 at no extra mana. The closest cut in the list. |
| Goblin Picker | '{R}, {T}, Discard a card: Draw a card.' Would raise the deliberate-graveyard-loading count from 1 of 23 to 3 of 23 and bin Phoenix Chick / Cult Conscript for their own return clauses — but it costs a body slot and the deck has no spare after the two grill repairs. |
| Battle-Rage Blessing | 'Target creature gains deathtouch and indestructible until end of turn.' The only protection available for a 1-of payoff, but it does not stop exile (Citizen's Arrest, Leyline Binding, Prayer of Binding) and costs a slot the interaction suite needs first. |
| Braids's Frightful Return | Chapter II ('Return target creature card from your graveyard to your hand') rebuys the Hellkite, but a 3-mana Saga that pays off on turn 5 is too slow for a deck whose curve tops at 14 one-and-two-drops. |
| Balduvian Atrocity | Kicked, it returns 'target creature card with mana value 3 or less from your graveyard to the battlefield… Sacrifice it at the beginning of the next end step' — a second Lagomos-shaped free sacrifice targeting the 9 of 23 MV<=3 creature copies. Excluded on rate (a 2/3 for 3-4 mana), not on the Dragon axis: it cannot rebuy a Dragon, since every Dragon here is MV 4 or greater. |
| Hammerhand | 'When this Aura enters, target creature can't block this turn. Enchanted creature gets +1/+1 and has haste.' An Aura is card disadvantage on a body this deck intends to sacrifice. |
| Liliana of the Veil | '+1: Each player discards a card' is symmetric and this deck empties its hand fastest; the -2 edict is worse than Bone Splinters against a chosen large threat. |
| Sheoldred, the Apocalypse | The highest-power card in these colours, but a 4-mana defensive engine in a list whose 5 rare slots are all spent on cards that attack or accelerate a Dragon. |
| Jaya, Fiery Negotiator | A 4-mana planeswalker making 1/1 Monk tokens is slower than the Dragon it would displace from the rare budget. |
| The Cruelty of Gix | Its reanimation is chapter III at {3}{B}{B}, arriving on turn 8 — four turns after the T4-Ragefire line this deck is built around. |
| Defiler of Flesh | 'Those spells cost {B} less to cast' reduces only black pips, and this list's black permanents are cheap two-drops where saving one pip rarely changes the turn. |
| Defiler of Instinct | Same clause for red permanents at {2}{R}{R}; competes with Ragefire Hellkite for the rare budget and does not fly. It is the flex rare of the mono-red build instead. |
| Tyrannical Pitlord | 'When this creature leaves the battlefield, sacrifice the chosen creature' — anti-synergy with a deck that deliberately sacrifices creatures, and a 6-drop competing with Ragefire. |
| Chaotic Transformation | The only mono-red answer to an enchantment in the pool, but a rare at {5}{R} — a six-mana sorcery in a deck whose goldfish turn is six, against a fully spent rare budget. |
| Writhing Necromass | 'costs {1} less to cast for each creature card in your graveyard' — a 7-drop needing a full graveyard, arriving well after the T6 goldfish turn. |
| Molten Monstrosity | 'costs {X} less to cast, where X is the greatest power among creatures you control' — needs a big creature already resolved, which is the problem it was meant to solve. |
| Shadow-Rite Priest | Its tutor requires 'Sacrifice another Cleric' and costs {3}{B}{B}; this list runs 0 other Clerics, so the ability is blank. |
| Sengir Connoisseur | '…put a +1/+1 counter on this creature. This ability triggers only once each turn' — a 5-mana 3/3 growing one counter per turn is too slow for a T6 clock. |
| Jaya's Firenado | 5 mana for 5 damage to a creature; at that cost the deck would rather deploy Ragefire Hellkite. Sideboarded instead. |
| In Thrall to the Pit | Threaten effects need a target worth stealing, and this deck already generates its own sacrifice fodder for free via Lagomos. |
| Weatherlight Compleated | Becomes a creature only at four or more phyresis counters, one per creature of yours that dies; the deck wants its deaths converted to damage now, not to a delayed draw. |
| Vanquisher's Axe / Hero's Heirloom | Equipment costs mana twice and this deck's creatures are deliberately expendable — buffing a body it plans to sacrifice is anti-synergy. |
| Salvaged Manaworker / Relic of Legends / Meteorite | Generic mana rocks; Rivaz already provides the only acceleration this curve needs, and a rock does not attack. |
| Evolved Sleeper | A mana-sink one-drop whose activations compete with holding up removal; the deck prefers bodies that die profitably. |
| The Raven Man | Its Bird tokens 'can't block' and only appear 'if a player discarded a card this turn'; this list holds exactly 1 discard enabler of 23 nonland cards (Thrill of Possibility), far too few to trigger it. |
| Crystal Grotto | '{T}: Add {C}' and '{1}, {T}: Add one mana of any color' — in a two-colour deck already holding three duals, a land that taxes coloured mana is worse than a basic. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.31 adj [MV 2.39 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  33.3%  prod  47.1%  gap -13.8pp  [OK]
  R  demand  66.7%  prod  70.6%  gap  -3.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 (expected 40)
[PASS] 1b sideboard size — 10 (expected 10)
[PASS] 2 exact-name membership in working pool — missing=[]
[PASS] 3 copy limits vs card_pool_rules — all within limits
[PASS] 3b rare/mythic budget <= 5 — 5 — Ragefire Hellkite x1 (rare), Rivaz of the Claw x1 (rare), Shivan Devastator x1 (mythic), Squee, Dubious Monarch x1 (rare), Sulfurous Springs x1 (rare)
[PASS] 4 every nonland usable in core+splash — unusable=[]
[PASS] 5 splash cap (<=3 per splash colour) — no splash colours declared
```
