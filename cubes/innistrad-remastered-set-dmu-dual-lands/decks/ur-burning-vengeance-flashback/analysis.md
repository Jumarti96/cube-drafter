---
deck_name: "ur-burning-vengeance-flashback"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-08-26T00:27:31Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
5x Island
7x Mountain
1x Evolving Wilds     {T}, Sacrifice this land: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle.
2x Molten Tributary   ({T}: Add {U} or {R}.) This land enters tapped.
1x Stormcarved Coast  This land enters tapped unless you control two or more other lands. {T}: Add {U} or {R}.
```

### CREATURES (5)

```
CMC  Card                               Qty  Color  Role     Rar
  1  Lantern Bearer // Lanterns' Lift   x2   C      enabler  C
  2  Thermo-Alchemist                   x2   R      payoff   U
  2  Thing in the Ice // Awoken Horror  x1   C      payoff   R
```

### INSTANTS & SORCERIES (17)

```
CMC  Card                  Qty  Color  Role         Rar
  1  Faithless Looting     x2   R      enabler      C
  1  Lightning Axe         x2   R      interaction  U
  1  Silent Departure      x2   U      interaction  C
  2  Abrade                x2   R      interaction  U
  2  Galvanic Iteration    x1   RU     engine       R
  2  Think Twice           x2   U      enabler      C
  3  Fiery Temper          x2   R      interaction  U
  4  Mystic Retrieval      x2   U      enabler      U
  5  Alchemist's Greeting  x1   R      interaction  C
  5  Seize the Storm       x1   R      payoff       C
```

### OTHER SPELLS (2)

```
CMC  Card               Qty  Color  Role    Rar
  3  Burning Vengeance  x2   R      payoff  U
```

## SIDEBOARD (10)

```
Card                    Qty  Color  Role / When to board in                     Rar
Syncopate               x2   U      vs combo/big-mana; exiles                   C
Compelling Deterrence   x2   U      vs resolved enchantments (9% of cube)       U
Geistlight Snare        x2   U      vs decks that must resolve one spell        U
Imprisoned in the Moon  x1   U      vs planeswalkers and untouchable creatures  C
Savage Alliance         x2   R      vs go-wide token boards                     U
Bedlam Reveler          x1   R      vs grindy attrition decks; refuel           R
```

## ANALYSIS

### DECK IDENTITY

A UR flashback-burn control deck. It trades cheap removal for the opponent's early board while its own card-flow spells fill the graveyard with flashback and disturb cards. Burning Vengeance then converts each of those graveyard casts into 2 damage to the face, and Thermo-Alchemist untaps on every instant or sorcery for a repeatable ping. Twelve mainboard copies are castable from the graveyard -- nine of them for three mana or less -- so the same cards that answer threats and draw cards are also the ones that deal the damage. Seize the Storm and a flipped Awoken Horror are the closers when the incremental clock needs help.

### THE DAMAGE IS THE CARD FLOW

The thing that makes this build work is that its damage source and its card-draw suite are the
same 12 cards. Burning Vengeance reads *"Whenever you cast a spell from your graveyard, this
enchantment deals 2 damage to any target"* — it does not care what the spell does, only where it
was cast from. So every cantrip, every rebuy and every bounce spell in the list is also two points
of reach.

| Graveyard-castable card | Copies | Graveyard cost | Also does |
|---|---|---|---|
| Faithless Looting | 2 | Flashback {2}{R} | draw 2, discard 2 |
| Think Twice | 2 | Flashback {2}{U} | draw a card |
| Mystic Retrieval | 2 | Flashback {2}{R} | rebuys any instant/sorcery |
| Lantern Bearer // Lanterns' Lift | 2 | Disturb {2}{U} | a flying aura, +1/+1 |
| Galvanic Iteration | 1 | Flashback {1}{U}{R} | copies the next spell |
| Silent Departure | 2 | Flashback {4}{U} | bounces a creature |
| Seize the Storm | 1 | Flashback {6}{R} | a second huge token |
| **Total** | **12** | **9 of them cost 3 or less** | |

Twelve copies at 2 damage each is 24 damage from the engine alone, spread across a long game —
before Thermo-Alchemist, which untaps on 17 of the 24 nonland cards (70.8%) and so pings for
several a turn once a second spell is castable.

### THREE TRAPS THIS DECK AVOIDS, AND WHY

**Madness does not trigger Burning Vengeance.** Fiery Temper and Alchemist's Greeting both read
*"Madness {cost}"*, and a madness card is cast **from exile**, not from the graveyard. They are in
the deck as cheap removal — 3 damage for {R} and 4 damage for {1}{R} off a discard — and they are
counted nowhere as engine triggers.

**Cobbled Lancer does not trigger it either.** Its graveyard line is *"{3}{U}, Exile this card from
your graveyard: Draw a card"* — an activated ability, not a cast. It looks like a flashback card
and is not one. Cut for that reason.

**Awoken Horror does not bounce itself.** The flip trigger reads *"return all **non-Horror**
creatures to their owners' hands."* Awoken Horror is a Horror, so it stays; Thermo-Alchemist (a
Human Shaman) does not. That is a real cost, and the mitigation is structural rather than clever —
Thermo-Alchemist is held at 2 copies and costs {1}{R}, so redeploying after a one-sided board wipe
is a two-mana operation.

### LIGHTNING AXE'S COST IS AN ASSET HERE

*"As an additional cost to cast this spell, discard a card or pay {5}."* In most decks that is a
tax. In this one, 11 of the 24 nonland cards **want** to be in the graveyard, and three more
(Fiery Temper x2, Alchemist's Greeting) get cheaper when discarded. Discarding Fiery Temper to
Lightning Axe is 5 damage to a creature and 3 damage anywhere for {R} plus {R}.

### SEIZE THE STORM COUNTS EXILED CARDS TOO

The token's P/T is *"the number of instant and sorcery cards in your graveyard **plus the number of
cards with flashback you own in exile**."* Flashback exiles the card on resolution, which normally
means spent fuel is gone — here it keeps counting. A Seize the Storm cast on turn 7, after five or
six flashbacks have already resolved and exiled, is a trampler in the 8-to-12 range.

### PLAY PATTERN

Turns 1–3 are removal and Faithless Looting; the goal is to reach turn 3 with Burning Vengeance
resolved and two or three flashback cards in the yard. From turn 4 the deck stops casting from hand
where it can and starts casting from the graveyard, because those casts are strictly better — same
effect, plus 2 damage. Thing in the Ice is the one card that changes the sequencing: hold Galvanic
Iteration to copy the fourth spell so the flip and a second effect land on the same turn.

The matchup this deck is worst against is a fast evasive draw — 58 of the cube's 300 cards have
evasion (20.9%) and the two Defenders plus nine removal spells are the whole answer. The matchup it
is best against is anything grindy: only **2 of the cube's 305 cards** touch a graveyard at all (Soul-Guide Gryff and Invasion of Innistrad // Deluge of the Dead), and both are off-colour for UR, so almost
nothing in the environment interacts with this engine. Note that is a density argument, not an impossibility one — the
dossier's automated hate probe reports zero, but a zero-match probe proves nothing and these two cards are real.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (24 nonland):  1:8  2:8  3:4  4:2  5:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.9: Thermo-Alchemist@0.8, Thermo-Alchemist@0.8, Seize the Storm@0.7, Thing in the Ice // Awoken Horror@0.6) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 9 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 82%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: The maindeck interaction is all single-target (Abrade, Lightning Axe, Fiery Temper, Alchemist's Greeting, Silent Departure); Savage Alliance x2 is the sideboard answer, and Awoken Horror's 'return all non-Horror creatures to their owners' hands' is the maindeck reset.
  OK        single_large_threat: Lightning Axe, Alchemist's Greeting, Abrade, Silent Departure, Thing in the Ice // Awoken Horror
  OK        noncreature_permanents: Abrade
  CONCEDED  stack: No maindeck counterspells - the build is proactive and spends its mana on graveyard casts; Syncopate x2 and Geistlight Snare x2 are the sideboard answer.
  CONCEDED  graveyard: The cube contains zero graveyard hate (dossier structural_census graveyard_hate = 0), so no answer exists in the pool for any colour to board in.
```

_All four structural checks returned PASS; no WARN flags to respond to._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana has explicit graveyard-cast sinks, every one of which is also 2 damage off Burning Vengeance: Seize the Storm flashback {6}{R} for a second huge token, Silent Departure flashback {4}{U} x2, Mystic Retrieval {2}{R} x2 which rebuys a spell and then flashbacks itself, Lantern Bearer Disturb {2}{U} x2. Twelve mainboard copies are castable from the graveyard, so a flooded hand still has somewhere to put the mana. |
| screw | mitigation | 16 of the 24 nonland cards cost 2 or less (curve 1:8, 2:8) -- Faithless Looting {R}, Lightning Axe {R}, Silent Departure {U}, Lantern Bearer {U}, Thermo-Alchemist {1}{R}, Abrade {1}{R}, Think Twice {1}{U}, Galvanic Iteration {U}{R}, Thing in the Ice {1}{U}. Faithless Looting's 'draw two cards, then discard two' digs on turn 1 and its discard is upside here. Evolving Wilds finds whichever basic is missing. The goldfish check reports 84% keepable hands, 84% on three lands by turn 3, and an 82% turn-1 play rate. |
| decapitation | mitigation | Burning Vengeance runs at 2 copies, and the damage plan does not route through it exclusively: Thermo-Alchemist x2 pings without it, Seize the Storm makes a trampling body from the same graveyard, and Awoken Horror closes as a large attacker. Answering any one of the three leaves two. Mystic Retrieval x2 also rebuys any burn spell that was answered. |
| gas-out | mitigation | Twelve of the 24 nonland cards are cast twice each (11 flashback/disturb copies plus Galvanic Iteration), so the deck effectively draws 12 extra cards over a long game. Of those, the strictly card-positive ones are Think Twice x2 (a card on each of two casts) and Mystic Retrieval x2 (rebuys the best spell); Faithless Looting x2 is net-neutral but converts dead cards into live ones. Bedlam Reveler in the sideboard -- 'discard your hand, then draw three cards', costing {1} less per instant/sorcery in the graveyard, so 5 mana at three binned -- is the dedicated answer when the attrition matchup demands it. |
| raced | mitigation | Against the cube's fastest clocks (threat_profile evasion density 20.9%, 58 cards, concentrated in W and U fliers), the deck does not race back -- it blocks and trades cheaply. Both of its repeatable blockers are payoffs that carry the Defender keyword in their oracle text: Thermo-Alchemist x2 ('Defender') and Thing in the Ice x1 ('Defender'), backed by 9 interaction copies, 6 of which cost 2 or less. Awoken Horror's flip resets the entire opposing board once. The accepted cost of this posture is that the deck can never outrun a threat it cannot burn -- it must answer or stabilise. |
| disruption-fizzle | mitigation | The kill is incremental rather than a single critical turn -- one graveyard cast answered by a counterspell costs 2 damage, not the game, and the flashback card is exiled either way so nothing is lost that was not already spent. The one genuinely critical turn is the Awoken Horror flip; Galvanic Iteration can be held to copy the fourth spell so the flip and a second effect land together, and Syncopate x2 / Geistlight Snare x2 board in when the opponent's interaction is the problem. To be precise about which half does what: CASTING the fourth spell is what removes the last ice counter, while Iteration's copy is put on the stack rather than cast and removes no counter of its own -- it buys a doubled effect on the flip turn, not a faster flip. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Village Messenger // Moonrise Intruder, Hungry Ridgewolf, Runebound Wolf, Ulrich's Kindred, Geier Reach Bandit // Vildin-Pack Alpha, Hanweir Watchkeep // Bane of Hanweir, Conduit of Storms // Conduit of Emrakul, Smoldering Werewolf // Erupting Dreadwolf, Kruin Outlaw // Terror of Kruin Pass | Werewolves transform only 'if no spells were cast last turn' — anti-synergy with a deck that casts two-plus spells per turn; the flip side of the same clause even helps the OPPONENT flip them back. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.25   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.67 adj [MV 2.25 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  63.0%  prod  62.5%  gap  +0.5pp  [OK]
  U  demand  37.0%  prod  50.0%  gap -13.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS -- verified by Phase 5C check 3 against cube_search.get_max_copies
rares_mythics_max_1_each: PASS -- all four are single copies
max_5_rares_mythics_total: PASS -- 4 of 5 used: Thing in the Ice // Awoken Horror (rare, main), Galvanic Iteration (rare, main), Stormcarved Coast (rare, main, land), Bedlam Reveler (rare, sideboard). One rare slot is deliberately left unspent.
all_cards_from_cube: PASS -- exact-name membership verified against the working pool cache
basics_unlimited: Island 5, Mountain 7 -- format-supplied, exempt
colour_legality: PASS -- every nonland card is on-colour by its printed identity; after the Phase 9 cut of Forbidden Alchemy there are no alternate-mode admissions at all
```
