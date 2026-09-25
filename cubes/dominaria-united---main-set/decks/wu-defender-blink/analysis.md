---
deck_name: "wu-defender-blink"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-08-18T20:54:12Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x9  Plains                   Basic
x6  Island                   Basic
x2  Idyllic Beachfront       WU dual, enters tapped
```

### CREATURES (16)

```
CMC  Card                  Qty   Color  Role                                                                   Rar
1    Clockwork Drawbridge  x2    W      Engine - 1-mana defender + repeatable tapper                           C
1    Walking Bulwark       x2    C      Engine - lets defenders attack for toughness                           U
2    Coral Colony          x2    U      Engine - power-1 crewer + defender-scaled mill                         U
3    Academy Wall          x2    U      Engine - 0/5 defender, biggest Bulwark attacker                        C
3    Aether Channeler      x1    U      Engine - power-2 crewer, Bird maker, modal ETB                         R
3    Charismatic Vanguard  x2    W      Payoff - team pump; the Argosy-free clock                              C
4    Shield-Wall Sentinel  x2    C      Engine - power-1 crewer + tutors any defender                          C
4    Wingmantle Chaplain   x2    W      Payoff - a Bird per defender, on entry and on every defender entering  U
5    Serra Redeemer        x1    W      Payoff - two permanent counters on every power-2-or-less entry         R
```

### INSTANTS & SORCERIES (2)

```
CMC  Card     Qty   Color  Role                                                 Rar
2    Impulse  x2    U      Infrastructure - digs 4 deep, triggers Academy Wall  C
```

### OTHER SPELLS (5)

```
CMC  Card                 Qty   Color  Role                                                       Rar
3    Citizen's Arrest     x2    W      Interaction - unconditional exile                          C
4    Golden Argosy        x1    C      Engine - the blink loop (accelerant, not prerequisite)     R
4    Karn, Living Legacy  x1    C      Engine - digs for the 1-of Argosy; Powerstones pay for it  M
4    Prayer of Binding    x1    W      Interaction - flash exile any nonland permanent            U
```

## SIDEBOARD (10)

```
Card                  Qty   Color  Role / When to board in                                               Rar
Destroy Evil          x2    W      vs enchantments and toughness-4+ blockers                             C
Essence Scatter       x2    U      vs single large creature threats                                      C
Impede Momentum       x2    U      vs a single large threat - three-turn delay                           C
Negate                x2    U      vs sweepers and Disenchant effects - name Smash to Dust specifically  C
Anointed Peacekeeper  x1    W      vs combo/control - name their key card                                R
Stall for Time        x1    W      vs go-wide races; replaces itself                                     C
```

## ANALYSIS

### DECK IDENTITY

UW Defender-Blink. Wingmantle Chaplain reads 'When this creature enters, create a 1/1 white Bird creature token with flying FOR EACH creature with defender you control' and 'Whenever another creature you control with defender enters, create a 1/1 white Bird creature token with flying' - so a wall board converts directly into a flying army. Serra Redeemer turns each Bird into a 3/3 on entry, since every Bird and every defender in the list is power 2 or less. Golden Argosy is an ACCELERANT, not a prerequisite: crewing with a power-1 defender and attacking exiles and returns the whole crew, re-firing Chaplain's enters trigger for a second Bird batch each combat. Because Argosy is a 1-of under the rare cap that no tutor in this deck can find, the deck is deliberately built to win without it - Charismatic Vanguard's team pump and Walking Bulwark's toughness-attacks close Argosy-free games around turn 9, and Argosy moves that to turn 7.


### KEY OBSERVATIONS

**This is the most mechanically unusual of the four builds, and its engine is exact.** Wingmantle Chaplain converts a wall board into a flying army: *"create a 1/1 white Bird creature token with flying **for each** creature with defender you control."* The deck runs **12 defender bodies across 6 distinct cards** — and a full pool sweep confirmed that is **every defender in W/U/colourless the cube contains**, all at their 2-copy cap. There is no seventh defender to add.

**Five oracle sub-checks the grill verified on the Argosy loop, all of which hold:**

| Question | Verified answer |
|---|---|
| Does Crew work with Defender creatures? | Yes — *"Tap any number of creatures you control with total power 1 or more"*. Tapping is not attacking. |
| Can Wingmantle Chaplain (0/3) crew? | Not alone — but it can be *part* of the crew alongside a power-1 body, and it **must** be, or the return only fires its second ability for 1 Bird instead of N. |
| Does Chaplain's ETB re-fire on return? | Yes — return from exile is a new object entering, and the whole crew returns **simultaneously**, so the "for each defender" count sees the full board with no shrinkage. |
| Does the second ability also trigger? | Yes — permanents entering simultaneously with the source do trigger its "whenever another creature enters" ability, so each other returning defender adds a Bird. |
| Do Serra Redeemer's counters survive the blink? | **No** — the returned creature is a new object. But Redeemer *re-triggers* on the return, so counters are re-applied in full. Counters on **Bird tokens** persist permanently, because Birds never crew. |

**The correction that mattered most.** An earlier version of this record claimed a single crewer could not crew on consecutive turns because the crew returns tapped. That is **false**: the crew returns tapped at *your own* end step and untaps in *your next* untap step. It can crew again immediately. The real cost is that the crew cannot **block** during the opponent's turn — which is a genuine cost for a wall deck, and still the right reason to run four crewers.

**Why Golden Argosy is deliberately not the plan.** It is a 1-of under the rare cap, P(seen by turn 8) = 0.375, Shield-Wall Sentinel's tutor finds *"a creature card with defender"* and Argosy is a Vehicle, and the cube contains no other card that blinks another creature. So the deck was rebuilt to win without it: Chaplain makes its Bird batch on cast, Charismatic Vanguard's *"{4}{W}: Creatures you control get +1/+1"* turns 7 Birds into +7 damage, and Walking Bulwark lets a 0/5 Academy Wall attack for 5. Argosy-free kill band: turn 7 fast / turn 8 median with the pump / **turn 9** median without — which is the thesis turn.

**Walking Bulwark's real ceiling.** *"{2}: ... assigns combat damage equal to its toughness rather than its power. Activate only as a sorcery."* One target per activation, main phase only. The deck's 42 total defender toughness is a deck-wide sum, not a turn: an 8-land turn buys 4 activations on the biggest bodies for about **18**, and those bodies are then tapped and cannot block.

**The card to play around.** Smash to Dust (`{1}{R}`) reads *"Destroy target artifact / Destroy target creature with defender / deals 1 damage to each creature your opponents control"* — one card that kills Golden Argosy, or a defender, or **wipes the entire Bird board**. It hits all three of this deck's axes and is the single best hoser against it in the cube. Negate ×2 boards in specifically for it.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  1:4  2:4  3:7  4:7  5:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.4: Shield-Wall Sentinel@0.7, Shield-Wall Sentinel@0.7) → p=0.94 (need ≥ 0.75)
  PASS  crewer: 8 copies → p=0.97 (need ≥ 0.75)
  PASS  defender_base: 12 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 59%  T2 86%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Clockwork Drawbridge, Academy Wall, Coral Colony, Walking Bulwark, Wingmantle Chaplain, Charismatic Vanguard
  OK        single_large_threat: Citizen's Arrest, Prayer of Binding, Aether Channeler
  OK        noncreature_permanents: Prayer of Binding, Aether Channeler
  CONCEDED  stack: Zero maindeck counterspells. The deck must resolve 12 defender bodies plus a 4-mana Vehicle to assemble, so every maindeck slot held open for a reactive spell is a turn the engine is not being built. Negate x2 and Essence Scatter x2 come in from the board, specifically for the Disenchant-on-Golden-Argosy and sweeper cases the shape judge identified as this build's real disruption exposure.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census gy_hate = 0), so no answer to the 32 graveyard-interaction cards exists in the pool for any deck.
```

- No WARN flags - curve, assembly, goldfish and coverage all PASS.

- THESIS REVISED 8 -> 9, disclosed: the first gate run certified turn 8 while OMITTING Golden Argosy from every assembly role. Argosy is a 1-of (P(seen by turn 8) = 0.375), Shield-Wall Sentinel searches for 'a creature card with defender' and Argosy is a Vehicle, so the deck's own tutors cannot find it, and the grill's pool sweep confirmed the cube contains NO other card that blinks another creature. The repair was to give the Argosy-free games a real clock (Charismatic Vanguard x2, Karn Living Legacy to dig) and to restate the thesis so Argosy is an accelerant. Golden Argosy is deliberately NOT declared as an assembly role, because the revised thesis does not require it.

- ORACLE CORRECTION carried from the grill: an earlier version of this record claimed 'a single crewer cannot crew on consecutive turns because the crew returns tapped'. That is FALSE. The crew returns tapped at your OWN end step and untaps in your NEXT untap step, so one body can crew turn after turn. The real cost is that the crew cannot block during the opponent's turn - which is why four crewers are still correct, but on the blocking-cost ground, not the false one.

- BAND DEVIATION, restated honestly: Engine & Infrastructure is 65.2% against a 40-50% combo band, but the 'engine IS the payoff's numerator' argument only covers 11 of 23 cards (47.8%, in band). The 4 cards that push it over - Aether Channeler, Karn Living Legacy, Impulse x2 - are card selection, justified separately as the answer to the 1-of-Argosy access problem, not by Chaplain's count. Interaction at 13.0% is inside its band.

- EVASION recorded explicitly: the cube's largest threat class is evasion (51 cards, 20.7% density), and the structural gate's coverage schema has only five fixed classes with no evasion slot, so it is documented here rather than left silent. This deck's answers: the Birds are themselves 1/1 FLIERS that block, Serra Redeemer is a 2/4 flier, Citizen's Arrest x2 and Prayer of Binding exile unconditionally, and Stall for Time boards in.

- PLAY CAVEATS, all three load-bearing: (1) never crew Golden Argosy with a Bird token - a token exiled by Argosy ceases to exist and never returns; (2) Wingmantle Chaplain must itself be part of the crew or the return only fires its second ability for ONE Bird instead of N; (3) removing the crewer in response to Crew leaves the Vehicle animated and attacking, but the attack trigger then finds nothing to exile and the ENTIRE Bird payoff for that turn is lost.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Six of the 23 nonland cards carry a repeatable mana-consuming activated ability: Walking Bulwark x2 ('{2}: ... target creature with defender ... assigns combat damage equal to its toughness'), Coral Colony x2 ('{1}{U}, {T}: Target player mills X cards') and Clockwork Drawbridge x2 ('{2}{W}, {T}: Tap target creature'). Charismatic Vanguard x2 adds an unbounded '{4}{W}: Creatures you control get +1/+1 until end of turn' - the ideal flood sink for a board of Birds - and Karn, Living Legacy's '-1: Pay any amount of mana. Look at that many cards' scales with every spare land. Golden Argosy's crew costs no mana at all. |
| screw | mitigation | Eight of the 23 nonland cards cost two or less (Clockwork Drawbridge x2, Walking Bulwark x2, Coral Colony x2, Impulse x2), and six copies need no coloured mana at all (Walking Bulwark x2, Shield-Wall Sentinel x2, Golden Argosy, Karn Living Legacy). Clockwork Drawbridge on turn 1 and Coral Colony on turn 2 are real plays off two lands; Impulse x2 digs four deep. Goldfish: 84% keepable, 88% reach three lands by turn 3. |
| decapitation | mitigation | Golden Argosy answered on sight was the explicit design target of the revision, and the deck is now built to not care: Wingmantle Chaplain x2 makes its Bird batch on cast with no blink at all, and Shield-Wall Sentinel x2 can tutor a replacement Chaplain (Chaplain IS a creature card with defender). Charismatic Vanguard x2 and Walking Bulwark x2 are two independent Argosy-free closers. The exposure is also small in this cube: artifact answers are 5 of 247 cards (2.0%) and 3 of those 5 are green. Realistic Walking Bulwark output, stated honestly: {2} per creature, sorcery-speed only, so an 8-land turn buys 4 activations on the highest-toughness bodies for about 18 damage - NOT the 42 deck-wide toughness sum. |
| gas-out | mitigation | Eight of the 23 nonland cards are net-positive or self-replacing: Academy Wall x2 ('Whenever you cast an instant or sorcery spell, you may draw a card. If you do, discard a card'), Impulse x2, Aether Channeler's 'Draw a card' mode, Shield-Wall Sentinel x2 (fetches a card), and Karn, Living Legacy's '-1' dig. More fundamentally the resource is a BOARD of walls and Birds rather than a hand - once Chaplain is down, every subsequent defender prints a Bird for free. |
| raced | accepted | The deck's clock does not start until Chaplain lands, and its attackers are 1/1 fliers. Against a genuinely fast start it can lose first. Mitigating means cutting defender bodies for cheap interaction - but Wingmantle Chaplain's payoff is a literal COUNT of those bodies, so every removal spell added shrinks the Bird output per trigger, and there is no card in the pool to trade for: a full sweep confirmed the cube contains exactly 9 defenders, of which all 6 that are W/U/colourless are already in this deck at their 2-copy cap. That is the identity cost. The hedge that does not cost the count: 12 blockers with 42 total toughness, the best raw defensive base assemblable in this cube; Stall for Time and Impede Momentum x2 come in from the board. |
| disruption-fizzle | mitigation | The exile-and-return is a triggered ability off attacking, not a stack object an opponent can counter, and Crew's 'This Vehicle becomes an artifact creature until end of turn' survives the crewer being removed - the Vehicle still attacks for 3. Stated honestly, the real exposure the grill found: if the crewer is removed IN RESPONSE to Crew, the attack trigger finds nothing to exile and the whole Bird payoff for that turn is lost. The cube's single best hoser is Smash to Dust ({1}{R}: 'Destroy target artifact / Destroy target creature with defender / deals 1 damage to each creature your opponents control') - one card that can kill Argosy, kill a defender, or wipe the entire Bird board. Negate x2 boards in specifically for it. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Runic Shot | 'Destroy target tapped creature' - dedicated tappers fell to 2 of 23 nonland cards once Impede Momentum moved to the sideboard, so the condition was no longer reliably self-supplied. Clockwork Drawbridge x2 still enables it if you want it back. |
| Automatic Librarian | 'When this creature enters, scry 2' - both grill agents named it the weakest card in the list: not a defender (no Chaplain count, no Chaplain trigger, no Walking Bulwark target) and power 3, so it is the one creature Serra Redeemer does not pump. |
| Impede Momentum (maindeck copy) | 'Tap target creature and put three stun counters on it' - a real three-turn delay, but it does not build the board and the maindeck slot went to Charismatic Vanguard. Both copies live in the sideboard. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' - actively anti-synergistic here: it exiles this deck's own Clockwork Drawbridge x2 (MV 1), Walking Bulwark x2 (MV 1), Coral Colony x2 (MV 2) AND every Bird token (MV 0). A rare slot that hurts this deck more than most opponents. |
| Leyline Binding | 'Domain - This spell costs {1} less to cast for each basic land type among lands you control' - this manabase has exactly 2 basic land types (Plains, Island; Idyllic Beachfront is 'Land - Plains Island' and adds none), so it costs {3}{W} - identical to Prayer of Binding, which is also Flash, also exiles any nonland permanent, gains 2 life, and is an UNCOMMON rather than a rare. |
| Frostfist Strider | 'When this creature enters, tap target creature an opponent controls and put a stun counter on it' - the only card besides Chaplain whose ETB is worth re-firing on the Argosy loop, and it crews alone at power 4. Cut because {3}{U}{U} is a real stretch on 8 U sources and it adds nothing to Chaplain's defender count. |
| Resolute Reinforcements | 'Flash / When this creature enters, create a 1/1 white Soldier creature token' - two power-1 bodies for two mana, both legal crewers and both Serra Redeemer targets. Cut because neither body has Defender, so Chaplain's numerator is unchanged. |
| Captain's Call | 'Create three 1/1 white Soldier creature tokens' - the highest Serra Redeemer trigger density available (three bodies, six counters off one card). Cut because it is a sorcery with no Defender and it is close to dead without Redeemer, which is a 1-of. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' - this list contains zero MV-1 instants or sorceries after Runic Shot was cut, so the tutor finds nothing. 0 of 23. |
| Raff, Weatherlight Stalwart | 'Whenever you cast an instant or sorcery spell, you may tap two untapped creatures you control. If you do, draw a card' - only 2 of 23 nonland cards (Impulse x2) are instants or sorceries, so the draw trigger is near-dead. Charismatic Vanguard does the pump job with a cheaper body. |
| Love Song of Night and Day | Chapter II makes a Bird and III adds counters, both on-theme - but chapter I is 'You and target opponent each draw two cards', handing symmetric card advantage to a deck trying to race you, for one Bird and two counters over three turns. |
| Griffin Protector | 'Whenever another creature you control enters, this creature gets +1/+1 until end of turn' - the Argosy crew returns at the beginning of the next end step, AFTER combat damage, so the pump is always spent in a phase with no attack. Recommended by the original archetype analysis; mechanically dead with this engine. |
| Academy Loremaster | 'At the beginning of each player's draw step, that player may draw an additional card. If they do, spells they cast this turn cost {2} more' - anti-synergy with a deck that must deploy 12 bodies; the tax hits its own development. |
| Weatherlight Compleated | The pool's only other Vehicle, but it has NO Crew ability - it animates only via 'four or more phyresis counters' accrued from 'Whenever a creature you control dies', which a 12-defender board does not supply. It cannot substitute for Golden Argosy. |
| Crystal Grotto | '{T}: Add {C}' is its only free mode; coloured mana costs an extra {1}. This list has {W}{W} costs (Serra Redeemer, Citizen's Arrest x2), so a colourless source is the wrong land at 17. |
| Adarkar Wastes / Plaza of Heroes | Both are rare lands. The 5-rare budget is spent entirely on spells; Idyllic Beachfront x2 is the pool's only non-rare free WU dual and the audit passes at 17/17 without them. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.33 adj [MV 2.87 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  35.0%  prod  47.1%  gap -12.1pp  [OK]
  W  demand  65.0%  prod  64.7%  gap  +0.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies     PASS
rares/mythics max 1 copy           PASS
max 5 rares+mythics total (MB+SB)  PASS - exactly 5/5: Serra Redeemer, Golden Argosy, Aether Channeler, Karn Living Legacy (M) (MB) + Anointed Peacekeeper (SB)
all cards from cube mainboard      PASS - exact-name membership verified
colour usability in W/U            PASS - effective_cost.best_mode returned a usable mode for every distinct nonland card
basic lands (format-supplied, exempt) PASS - 9 Plains, 6 Island
```
