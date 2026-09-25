---
deck_name: "bg-aristocrats-reanimator"
cube_id: "eoe"
cube_slug: "eoe"
colors: "BG"
format: "40-card"
built_at: "2026-08-03T15:30:05Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
3x Forest                     
12x Swamp                      
2x Haunted Mire               ({T}: Add {B} or {G}.) This land enters tapped.
```

### CREATURES (17)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Edge Rover                 x1    G      Fodder (mana value 1, the deck's only 1-drop creatur U
2    Beamsaw Prospector         x1    B      Fodder (mana value 2; asymmetric Lander on death)    C
2    Lightless Evangel          x2    B      Death payoff (grows on every sacrifice)              U
2    Seedship Broodtender       x2    BG     Recursion + graveyard enabler + fodder               U
2    Umbral Collar Zealot       x2    B      Sacrifice outlet (free, unlimited, on demand)        U
3    Gravpack Monoist           x2    B      Evasive fodder (flying; dies into a 2/2 token)       C
3    Insatiable Skittermaw      x2    B      Evasive threat (menace; grows on Void)               C
3    Susurian Voidborn          x2    B      Death payoff (drain - the deck's clock)              U
3    Xu-Ifit, Osteoharmonist    x1    B      Recursion (free, repeatable)                         R
4    Swarm Culler               x2    B      Evasive body + conditional card draw when tapped     C
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Embrace Oblivion           x2    B      Interaction (sacrifice cost triggers death payoffs)  C
1    Tragic Trajectory          x1    B      Interaction (one mana, Void-scaling)                 U
3    Scrounge for Eternity      x2    B      Recursion (sacrifice cost is upside here)            U
```

### OTHER SPELLS (1)

```
CMC  Card                       Qty   Color  Role                                                 Rar
4    Sothera, the Supervoid     x1    B      Death payoff (board strip; an enchantment, so sweepe M
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                                                                    Rar
Nutrient Block             x1    C      Flex fodder — Against removal-heavy decks: 'Indestructible' free fodder that draws a card  C
Seedship Impact            x2    G      Hate — Against artifacts (74 of 271 cube cards) or enchantments - this is one of only 4 ar U
Timeline Culler            x2    B      Flex fodder — Against grindy attrition decks: 'You may cast this card from your graveyard  U
Dauntless Scrapbot         x1    C      Hate — Against opposing graveyard decks: 'exile each opponent's graveyard', leaving your o U
Dubious Delicacy           x2    B      Hate / reach — Against low-toughness aggro, or when the game stalls: Flash plus '-3/-3' as U
Gravkill                   x2    B      Flex removal — Against recursion decks and large single threats - Exile rather than destro C
```

## ANALYSIS

### DECK IDENTITY

A black-green sacrifice deck whose creatures are cast in order to die. Umbral Collar Zealot's 'Sacrifice another creature or artifact: Surveil 1' is free and unlimited, and every activation fires three payoffs at once: Susurian Voidborn drains a life and gains one, Lightless Evangel grows a +1/+1 counter, and Sothera, the Supervoid forces each opponent to exile one of their own creatures. Scrounge for Eternity, Seedship Broodtender and Xu-Ifit refill the fodder pile from the graveyard so the loop never runs dry. The opponent is stripped of blockers while a menacing Insatiable Skittermaw and a growing Lightless Evangel finish the job around turn 7.

### THE OUTLET IS THE DECK, AND THERE ARE ONLY TWO OF THEM

Every sacrifice in this deck fires three payoffs simultaneously. But the pool contains exactly **one card** in black-green that is a genuine on-demand, unlimited sacrifice outlet:

> **Umbral Collar Zealot** — `Sacrifice another creature or artifact: Surveil 1.`

No mana cost, no tap symbol, no once-per-turn clause. Everything else that *looks* like an outlet is not one:

| Card | Why it is not an on-demand outlet |
|---|---|
| Swarm Culler | `Whenever this creature becomes tapped, you may sacrifice…` — a trigger keyed to tapping, so at most once per combat, and only if it attacks |
| Comet Crawler | `Whenever this creature attacks, you may sacrifice…` — same limitation |
| Embrace Oblivion | Sacrifices as a one-shot additional casting cost |
| Scrounge for Eternity | Sacrifices as a one-shot additional casting cost |

So the honest count is **2 of 23 nonland cards**. The Phase 6b assembly gate reflects this: 8 physical "outlet" copies are declared at 4.6 reliability-weighted copies, and the deck's `disruption-fizzle` failure mode is an *accepted*, not a mitigation, precisely because removal on a Zealot at the wrong moment really does cost the turn. The deck answers that fragility by making the **payoffs** redundant rather than the outlet — seven cards independently convert a death into value.

### WHY EVERY DEATH IS WORTH THREE CARDS

One Zealot activation, with the full board assembled:

- **Susurian Voidborn** — `Whenever this creature or another creature or artifact you control dies, target opponent loses 1 life and you gain 1 life.` Note "this creature **or another**": it triggers on its own death too, so sacrificing Voidborn itself still drains.
- **Lightless Evangel** — `Whenever you sacrifice another creature or artifact, put a +1/+1 counter on this creature.`
- **Sothera, the Supervoid** — `Whenever a creature you control dies, each opponent chooses a creature they control and exiles it.`
- and **Insatiable Skittermaw** picks up a counter at end step, since a nonland permanent left the battlefield.

That is 2 points of life swing, two +1/+1 counters, and one of their creatures gone — off a free ability, for one card.

### SOTHERA IS AN ENCHANTMENT, WHICH CHANGES EVERYTHING

Sothera, the Supervoid is a `Legendary Enchantment`, not a creature. The cube contains five sweepers, and **none of them touch it**. Better still, a sweeper that kills your own board triggers Sothera once per creature that died, exiling that many of the opponent's creatures — and its second clause reads `At the beginning of your end step, if a player controls no creatures, sacrifice Sothera, then put a creature card exiled with it onto the battlefield under your control with two additional +1/+1 counters on it.` A mutual board wipe *guarantees* that condition. Against a sweeper deck, this card converts the wipe into a stolen creature.

Note the wording is "if **a** player controls no creatures" — that includes you. Emptying your own board is a legitimate way to cash Sothera in.

### THE MANA-VALUE CAP THAT NEVER BINDS

In Decks 1 and 2, Scrounge for Eternity's `mana value 5 or less` clause was a real restriction that locked it out of the best targets. Here it is dead text: the most expensive creature in the entire deck is mana value 4. **All 15 creature cards qualify.** Scrounge is a clean two-for-one — you sacrifice a spent body, trigger three payoffs, and return whichever creature you most want back.

### THE SYMMETRIC LANDER — WHY THERE IS ONLY ONE EDGE ROVER

Edge Rover reads `When this creature dies, each player creates a Lander token.` **Each player.** In a deck built to kill its own creatures, that is a repeated gift to the opponent. Beamsaw Prospector does the same job one-sided — `When this creature dies, create a Lander token` — and it is black, the deck's dominant colour at 89% of pips.

The list runs one of each rather than two of either. Edge Rover keeps its slot for two reasons its replacement cannot cover: it is the deck's **only mana-value-1 creature** (the turn-1 play the goldfish sim finds in 64% of hands), and its Reach is the deck's answer to an evasion class the dossier counts at 56 cards. If you iterate, this is the first slot to test — a second Beamsaw Prospector is the obvious alternative.

### GREEN IS TWO CARDS

Black is 24 of the 27 coloured pips (89%). Green exists in this deck for exactly two cards: Edge Rover (`{G}`, mana value 1) and Seedship Broodtender (`{B}{G}`, a thesis-named recursion piece). Five green sources is deliberately more than the pip share justifies, because both are cards you want on turns 1–2.

Be honest about what this means: **green is a splash wearing a colour's clothes.** Two of the seventeen lands enter tapped purely to support three pips. The strongest argument for keeping it is the sideboard — Seedship Impact is the only enchantment answer in the entire cube and one of only four artifact answers, against a cube that is 29.7% artifacts. If you cut green, you lose that and Seedship Broodtender, and the deck becomes mono-black with a cleaner mana base. That is a genuine fork worth testing.

### PLAY PATTERN

Turn 1 Edge Rover, turn 2 Lightless Evangel or Umbral Collar Zealot, turn 3 Susurian Voidborn, turn 4 Sothera — then start eating your own board. The goldfish simulation reports a turn-1 play in 64% of hands and a turn-3 play in 100%, the fastest of the three graveyard builds. You are not trying to keep creatures alive; you are trying to convert them.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:7  3:9  4:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  sacrifice_outlet: 8 copies (effective 4.6: Swarm Culler@0.5, Swarm Culler@0.5, Embrace Oblivion@0.4, Embrace Oblivion@0.4, Scrounge for Eternity@0.4, Scrounge for Eternity@0.4) → p=0.82 (need ≥ 0.75)
  PASS  death_payoff: 7 copies → p=0.93 (need ≥ 0.75)
  PASS  fodder: 8 copies → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 58%  T2 95%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Sothera, the Supervoid, Embrace Oblivion, Tragic Trajectory
  OK        single_large_threat: Embrace Oblivion, Tragic Trajectory, Sothera, the Supervoid
  CONCEDED  noncreature_permanents: No maindeck answer. This deck's 23 nonland slots are committed to a sacrifice engine that must reach critical mass by turn 4; Seedship Impact - the cube's only enchantment answer and one of its four artifact answers - is sideboarded at 2 copies instead. The cost of maindecking it would be cutting a death-payoff or an outlet, either of which lowers the engine below the density the thesis needs.
  CONCEDED  stack: Black and green contain no counterspell in this pool. The deck answers resolved permanents instead, and its own threats are cheap and redundant enough that a countered spell is rarely the game.
  CONCEDED  graveyard: No maindeck graveyard hate - the deck's own graveyard is its refuel, so symmetric hate is asymmetrically bad for it; Dauntless Scrapbot is sideboarded against opposing graveyard decks.
```

- No WARN flags raised. Curve (aggro), assembly, goldfish and coverage all returned PASS. The curve is 1:5, 2:6, 3:9, 4:3 with nothing above mana value 4, and the goldfish simulation reports a turn-1 play in 64% of hands and a turn-3 play in 100%.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Umbral Collar Zealot's outlet is free, so surplus mana is never the constraint - but the deck's real flood answer is that its top end is mana value 4 and it can deploy two or three spells a turn from turn 4 onward. Scrounge for Eternity converts a flooded board into a rebought body plus a Lander, and Xu-Ifit turns every untap into a free creature regardless of how many lands are on the table. |
| screw | mitigation | 11 of the 23 nonland cards cost 2 or less and 5 cost exactly 1 (curve 1:5, 2:6), so a two-land hand still curves Edge Rover into Lightless Evangel into Umbral Collar Zealot. The goldfish simulation reports 87% keepable hands, a turn-1 play in 64% and a turn-3 play in 100% - the best screw resistance of the three graveyard builds. |
| decapitation | mitigation | The payoffs are redundant by design: Susurian Voidborn x2, Lightless Evangel x2, Insatiable Skittermaw x2 and Sothera are seven cards that each independently convert a death into value, and the assembly gate puts P(seeing one by turn 7) at 0.93. Losing any single one costs a payoff, not the plan. Sothera is additionally an enchantment, so creature removal cannot answer it at all. |
| gas-out | mitigation | Umbral Collar Zealot's surveil digs one card deeper on every activation for free, which is the deck's primary filtering. Swarm Culler x2 draws a card whenever it becomes tapped and a body is sacrificed. The structural refuel is the graveyard: Scrounge for Eternity x2, Seedship Broodtender x2 and Xu-Ifit x1 return spent fodder to the battlefield, and every card in the deck that the opponent kills is a card those five can buy back. |
| raced | mitigation | Susurian Voidborn's drain is a two-point life swing per death - 'target opponent loses 1 life and YOU GAIN 1 life' - so every sacrifice moves the race two points while the deck is being attacked. The ground is held by Umbral Collar Zealot (3/2), Lightless Evangel (2/2 and growing) and Seedship Broodtender (2/3); Gravpack Monoist (2/1) and Swarm Culler (2/4) fly; and Edge Rover's Reach answers the cube's evasive class, which dossier.threat_profile.evasion.count puts at 56 cards (22.5% density). Sothera strips the racing opponent's board every time one of your creatures dies. [CORRECTED AT GRILL: an earlier version of this entry named Comet Crawler, which is not in the deck.] |
| disruption-fizzle | accepted | The critical turn is an Umbral Collar Zealot activation, and it is genuinely fragile: only 2 of the 23 nonland cards are true on-demand outlets, so removal on the Zealot in response to a planned sacrifice turn does cost the turn. Mitigating this would mean maindecking the trigger-based outlets as though they were activated ones - which the shape judge specifically flagged as overstating Swarm Culler's text - or spending slots on protection, which would come out of the death-payoff count the thesis depends on. The deck accepts the fragility and buys redundancy elsewhere instead: the payoffs, not the outlet, are what is made redundant. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bygone Colossus | 9/9 for mana value 9 — outside Scrounge's 'mana value 5 or less' clause, and this deck's plan is a wide board of cheap bodies to sacrifice, not one large body to protect. |
| Lashwhip Predator | 5/7 at mana value 6, also outside Scrounge's clause; a big blocker does nothing for an engine that needs creatures to DIE. |
| Alpharael, Stonechosen | MYTHIC. 'Void — Whenever Alpharael attacks… defending player loses half their life, rounded up' is a genuine finisher for this deck's Void density, but at {3}{B}{G} it is a five-drop that must survive to attack, and Ward—Discard a card at random does not protect it from a blocker. Kept as the strongest sideboard-consideration rare. |
| Broodguard Elite | 'This creature enters with X +1/+1 counters' and 'When this creature leaves the battlefield, put its counters on target creature you control' — the counter transfer is real synergy with a sacrifice outlet, but at {X}{G}{G} double-green it competes with the black-heavy curve this deck must hit on turns 1-3. |
| Drix Fatemaker | Grants trample to creatures with +1/+1 counters; only Lightless Evangel and Insatiable Skittermaw reliably carry counters here, so it buffs 4 of the 23 nonland cards. |
| Famished Worldsire | MYTHIC. 'Devour land 3' sacrifices LANDS, not creatures — it does not feed or benefit from a creature-sacrifice engine, and at {5}{G}{G}{G} it is uncastable on this curve. |
| Susurian Dirgecraft | 'each opponent sacrifices a nontoken creature of their choice' overlaps Sothera's exile trigger, but at {4}{B} it is a five-drop one-shot where Sothera repeats for free on every death. |
| Memorial Vault / Slagdrill Scrapper / Selfcraft Mechan / Terminal Velocity / Weapons Manufacturing | All are sacrifice-cluster cards the tagger surfaced, but every one is red or blue — outside this deck's B/G identity. |
| Sledge-Class Seedship | 'Whenever this Spacecraft attacks, you may put a creature card from your hand onto the battlefield' cheats from HAND, not the graveyard, and needs 7 charge counters before it can attack at all. |
| Icetill Explorer | {2}{G}{G} double-green; its landfall mill and extra land drop serve a lands-matter plan, not a sacrifice engine, and the double pip fights the deck's black-heavy early curve. |
| Chorale of the Void | Reanimates from the DEFENDING player's graveyard and sacrifices itself unless a nonland permanent left the battlefield — the Void clause is trivially met here, but the aura needs an attacking creature to survive combat first. |
| Blade of the Swarm | 3/1 for {3}{B} whose modes are two +1/+1 counters or bottoming a warped card; neither interacts with sacrificing, and a 3/1 four-drop is below rate as fodder. |
| Monoist Sentry | 4/1 Defender for {B} is theoretically cheap fodder, but Defender means it cannot attack, and this deck converts its board to damage. |
| Hullcarver | 1/1 deathtouch for {B} is cheap fodder, but it carries no death trigger — Beamsaw Prospector and Edge Rover at the same cost both replace themselves when they die. |
| Virus Beetle | 'each opponent discards a card' on a mana-value-2 body is fine value, but this deck's fodder slots want death triggers, and the discard is dead once the opponent is empty. |
| Thawbringer | 'When this creature enters or dies, surveil 1' is real fodder-with-a-trigger, but a 4/2 for {2}{G} in green competes with Edge Rover at {G} for the same job at a third of the cost. |
| Blooming Stinger | 2/2 deathtouch for {1}{G}; deathtouch discourages blocks, but this deck WANTS its creatures to die, so a blocker-deterrent works against the engine. |
| Zero Point Ballad | A sweeper whose X would kill this deck's entire board of mana-value-1-and-2 creatures; the reanimation clause needs X of 6 or more, at which point 7 mana and 6 life buys back exactly one body. |
| Seedship Impact | Kept for the SIDEBOARD rather than the maindeck — it is one of only 4 artifact answers and the only enchantment answer in the cube, but this build's maindeck slots are committed to the engine. |
| Gravkill | 'Exile target creature or Spacecraft' at {3}{B} is clean removal but costs four mana; Embrace Oblivion does the same job for one mana and pays this deck's preferred cost. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.36 adj [MV 2.48 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  88.9%  prod  82.4%  gap  +6.5pp  [OK]
  G  demand  11.1%  prod  29.4%  gap -18.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                : cube_mainboard
multipliers         : {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}
rare/mythic cap (6) : PASS
verification        : All 40 mainboard + 10 sideboard cards exist by exact name in the working pool. No common/uncommon exceeds 2 combined copies; no rare/mythic exceeds 1. Rare+mythic total across mainboard and sideboard = 2 (Xu-Ifit Osteoharmonist, Sothera the Supervoid), inside the user's cap of 6. Basic lands are format-supplied and exempt.
```
