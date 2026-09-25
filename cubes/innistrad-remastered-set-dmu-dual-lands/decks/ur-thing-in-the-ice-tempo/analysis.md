---
deck_name: "ur-thing-in-the-ice-tempo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-08-26T00:26:45Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
6x Island
6x Mountain
2x Molten Tributary   ({T}: Add {U} or {R}.) This land enters tapped.
1x Stormcarved Coast  This land enters tapped unless you control two or more other lands. {T}: Add {U} or {R}.
```

### CREATURES (9)

```
CMC  Card                                       Qty  Color  Role    Rar
  1  Delver of Secrets // Insectile Aberration  x2   C      threat  C
  2  Festival Crasher                           x2   R      threat  C
  2  Thermo-Alchemist                           x2   R      threat  U
  2  Thing in the Ice // Awoken Horror          x1   C      threat  R
  3  Wandering Mind                             x2   RU     body    U
```

### INSTANTS & SORCERIES (16)

```
CMC  Card                Qty  Color  Role         Rar
  1  Ancestral Anger     x2   R      engine       C
  1  Faithless Looting   x2   R      engine       C
  1  Lightning Axe       x2   R      interaction  U
  1  Silent Departure    x2   U      interaction  C
  1  Syncopate           x2   U      interaction  C
  2  Abrade              x2   R      interaction  U
  2  Galvanic Iteration  x1   RU     engine       R
  2  Think Twice         x2   U      engine       C
  4  Memory Deluge       x1   U      engine       R
```

## SIDEBOARD (10)

```
Card                    Qty  Color  Role / When to board in                               Rar
Compelling Deterrence   x2   U      vs resolved enchantments (9% of cube)                 U
Fiery Temper            x2   R      vs low-toughness aggro; reach to the face             U
Imprisoned in the Moon  x2   U      vs planeswalkers and untouchable creatures            C
Savage Alliance         x2   R      vs go-wide token boards                               U
Stitched Mangler        x1   U      vs a single big blocker; a Horror, survives our flip  C
Overcharged Amalgam     x1   U      vs one-spell decks; a Horror, survives our flip       R
```

## ANALYSIS

### DECK IDENTITY

A UR spell-density tempo deck. It deploys a one- or two-mana flip threat and then spends every turn casting cheap instants and sorceries that do double duty: each one answers something or draws something AND advances a flip counter. Sixteen of the 25 nonland cards are instants or sorceries (64%), which is the single number every payoff in the deck reads -- Delver of Secrets flips at 40% per upkeep, Thing in the Ice transforms on the fourth cast, Thermo-Alchemist untaps on each one, and Festival Crasher grows. Awoken Horror's transform returns all non-Horror creatures to hand; only 3 of this deck's 9 creature copies are Horrors, so the flip is a genuine one-sided board wipe that ALSO costs the controller their own Delvers, Thermo-Alchemists and Festival Crashers. That cost is accepted, not designed around -- see failure_modes.

### ONE NUMBER RUNS THE WHOLE DECK

Sixteen of the 25 nonland cards are instants or sorceries — **64% of the nonland slots, 40% of the
40-card library**. Every payoff in the deck reads that same number, which is why the interaction
suite and the engine are not competing for space here: a removal spell held for the opponent's turn
is also an ice counter, a Delver flip, a Thermo untap and a Festival Crasher pump.

| Payoff | What it reads | Against this list |
|---|---|---|
| Delver of Secrets | top card is an instant/sorcery | 40.0% per upkeep → **78.4% flipped by turn 4** |
| Thing in the Ice | four instant/sorcery casts | 16 of 25 nonland qualify |
| Thermo-Alchemist | untaps on each instant/sorcery | pings twice per turn cycle at two spells |
| Festival Crasher | +2/+0 per instant/sorcery | same 64% denominator, at 2 mana |

Seven payoff copies is 10 points above the tempo band's 10–18%. That is not a preference — at
five copies the structural assembly check returned **p = 0.68 against a 0.75 floor, a FAIL**.
Adding Festival Crasher ×2 took it to **p = 0.80**. The band lost to the gate.

### THE FLIP IS NOT ONE-SIDED, AND THIS DECK PAYS FOR IT

Awoken Horror's trigger reads *"return all **non-Horror** creatures to their owners' hands."*
It is worth being blunt about who that hits:

| Creature | Type line | On the flip |
|---|---|---|
| Thing in the Ice // Awoken Horror | Creature — Horror | **survives** |
| Wandering Mind ×2 | Creature — Horror | **survives** |
| Delver of Secrets ×2 | Creature — Human Wizard | bounced |
| Thermo-Alchemist ×2 | Creature — Human Shaman | bounced |
| Festival Crasher ×2 | Creature — Devil | bounced |

**3 of 9 creature copies survive (33%).** A *flipped* Delver comes back as an unflipped one and
needs another 40% upkeep to transform again. The flip is still strongly net-positive — it wipes the
opponent's entire board and leaves a large attacker — but it costs real tempo, and the mitigation is
structural rather than clever: every bounced card costs 2 mana or less to redeploy.

An earlier version of this build tried to dodge that cost by loading up on Horror-typed bodies. It
does not work: the two best Horror options in these colours, Docent of Perfection and Stromkirk
Occultist, fail for unrelated reasons (below), and chasing the creature type produced a worse deck
than accepting the bounce.

### THE TRAP: DOCENT OF PERFECTION AND THING IN THE ICE UNDO EACH OTHER

This looks like the obvious pairing — two spell-count flip threats — and it is a trap.

- Docent of Perfection is a **Creature — Insect Horror**. It is *not itself a Wizard.*
- Its transform needs three or more Wizards. The only Wizards available are Delver of Secrets ×2
  and Docent's own *"1/1 blue Human Wizard"* tokens.
- Every one of those is **non-Horror**. So an Awoken Horror flip returns both Delvers to hand and
  bounces the Wizard tokens — which, being tokens, then cease to exist.

**After the Thing in the Ice flip, the surviving Wizard count is 0 of 3.** The deck's two most
expensive payoffs actively reset each other, and at 5 mana in a 1.68-average, 15-land deck Docent
was also the only card in the list above four mana. It was cut and its rare slot went to Memory
Deluge, which is an instant — so the cut *raised* the spell count from 15 to 16 and Delver's flip
rate from 37.5% to 40%.

### FIFTEEN LANDS IS THE REAL NUMBER, AND IT IS TIGHT

`land_target(40, 1.68, 6)` returns 15, and the deck was built to it rather than rounded up. The
honest caveat: the goldfish check lands at **exactly 80% keepable against an 80% floor**. That is
inside sampling error of failing. Twelve of the 25 nonland cards cost exactly one mana, which is
what makes a two-land hand functional, but this deck genuinely cannot afford a tapped land it does
not need — which is why Evolving Wilds is absent and Molten Tributary is capped at 2.

### PLAY PATTERN

Turn 1 is Delver of Secrets or a one-mana spell. Turns 2–4 the deck deploys a second threat and
holds up Syncopate, spending spells on the opponent's turn wherever possible — an instant cast in
their end step is a full ice counter that costs no tempo. The flip turn is the decision point: with
Galvanic Iteration in hand, the fourth spell can be copied so the transform and a second effect land
together. Note precisely what that does and does not do — casting the fourth spell is what removes
the last ice counter; Iteration's *copy* is put on the stack rather than cast, so it removes no
counter of its own. It buys a doubled effect on the flip turn, not a faster flip. After the flip, expect to spend a turn redeploying — that is the price, and it is paid
against an empty opposing board.

The worst matchup is a fast evasive draw. The cube has 58 evasive creatures (20.9%) and this deck
has no lifegain, no maindeck sweeper and two Defenders. It does not stabilise; it races, and the
`raced` failure mode states exactly what mitigating that would cost.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (25 nonland):  1:12  2:10  3:2  4:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 4.6: Delver of Secrets // Insectile Aberration@0.6, Delver of Secrets // Insectile Aberration@0.6, Thing in the Ice // Awoken Horror@0.6, Thermo-Alchemist@0.8, Thermo-Alchemist@0.8, Festival Crasher@0.6, Festival Crasher@0.6) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 16 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 80%
  play by turn: T1 93%  T2 100%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Rests on a single mainboard card -- Thing in the Ice, 1 of 40, which needs four instant/sorcery casts first and only bounces rather than kills. Savage Alliance x2 in the sideboard is the real answer; maindecking a sweeper would cost the spell density every payoff in the deck reads.
  OK        single_large_threat: Lightning Axe, Abrade
  OK        noncreature_permanents: Abrade
  OK        stack: Syncopate
  CONCEDED  graveyard: The cube contains zero graveyard hate (dossier structural_census graveyard_hate = 0), so no answer exists in the pool for any colour to board in.
```

_All four structural checks returned PASS; no WARN flags to respond to._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Syncopate is an {X}{U} mana sink that scales with every extra land. Silent Departure's Flashback {4}{U}, Think Twice's Flashback {2}{U} and Memory Deluge's Flashback {5}{U}{U} turn surplus mana into a second cast of a card already spent -- which is also a second ice counter. Memory Deluge is the top-end a flooded hand deploys, at instant speed. The deck runs only 15 lands precisely so flooding is rare. |
| screw | mitigation | 22 of the 25 nonland cards cost 2 or less (curve 1:12, 2:10) and 12 cost exactly 1 -- Lightning Axe {R}, Silent Departure {U}, Syncopate {X}{U}, Faithless Looting {R}, Ancestral Anger {R} x2, Delver of Secrets {U} x2. A two-land hand casts a threat on turn 1 and interacts on turn 2. Faithless Looting's 'draw two cards, then discard two' digs for the third land. The goldfish check reports 80% keepable and a 93% turn-1 play rate -- and 80% is exactly the threshold floor, which is stated here rather than smoothed over. |
| decapitation | mitigation | Thing in the Ice is limited to 1 copy by the rare cap, so the deck was built never to depend on it. Six further copies read the same instant/sorcery resource in their own oracle text: Delver of Secrets x2 ('If an instant or sorcery card is revealed this way, transform'), Thermo-Alchemist x2 ('Whenever you cast an instant or sorcery spell, untap this creature') and Festival Crasher x2 ('Whenever you cast an instant or sorcery spell, this creature gets +2/+0'). The Phase 6b assembly check confirms P(a payoff seen by turn 6) = 0.80 on reliability-weighted copies. CORRECTION applied at Phase 9: an earlier draft also named Stromkirk Occultist here, whose oracle reads combat damage rather than spell count; it has since been cut from the deck entirely. |
| gas-out | mitigation | 8 of the 25 nonland cards are cast twice each (Think Twice x2, Faithless Looting x2, Silent Departure x2, Galvanic Iteration, Memory Deluge), and 4 more replace themselves on cast (Ancestral Anger x2 'Draw a card', Wandering Mind x2 'You may reveal a noncreature, nonland card from among them and put it into your hand'). Memory Deluge alone is two cards, then two more on flashback. The deck's hand empties fast by design and these are what refill it. |
| raced | accepted | This deck does not stabilise -- it races. Against the cube's 58 evasive creatures (20.9% density) it has 8 interaction copies and Awoken Horror's one-shot board reset, but no lifegain, no sweeper of its own, and only two Defenders. Mitigating would mean adding blockers and removal at the cost of the instant/sorcery density every payoff reads: dropping from 64% to roughly 45% spell density would cut Delver's per-upkeep rate from 40.0% to 27.5% and P(flip by turn 4) from 78.4% to 61.9%, and would slow Thing in the Ice by a full turn. The clock IS the defence, and that trade is refused. The cube's 15 lifegain cards (5.4%) are a second unanswered class for the same reason. |
| disruption-fizzle | mitigation | Syncopate x2 ('Counter target spell unless its controller pays {X}. If that spell is countered this way, exile it') is held up on the flip turn precisely for this, at the cost of 3 of 15 lands to hold X=2. And because the flip threshold is cumulative -- Thing in the Ice's oracle text has no clause that resets ice counters -- interaction delays the transform rather than fizzling it. CORRECTION applied: an earlier draft claimed Galvanic Iteration 'provides a second cast from one card, so a countered spell still leaves the ice counter it was cast for'. The second half is true for any countered spell (a countered spell was still cast, so the ice counter was already removed), but the first half is not: Iteration's copy is not cast and removes no counter. Iteration's real contribution here is one cast now and one more from the graveyard later. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Village Messenger // Moonrise Intruder, Hungry Ridgewolf, Runebound Wolf, Ulrich's Kindred, Geier Reach Bandit // Vildin-Pack Alpha, Hanweir Watchkeep // Bane of Hanweir, Conduit of Storms // Conduit of Emrakul, Kruin Outlaw // Terror of Kruin Pass | Werewolves transform only 'if no spells were cast last turn'. This deck is built to cast two or more spells per turn -- the werewolf flip condition is the exact inverse of the Thing in the Ice flip condition, so they can never be online together. |
| Forbidden Alchemy | Front half is a fine {2}{U} instant dig, but its Flashback {6}{B} is uncastable in [U,R] -- half a dead card, and a tempo deck at 16-17 lands cannot afford a three-mana spell whose ceiling it will never reach. Deck A cut it for the same reason. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 15 recommended  [PASS]
Avg CMC:     1.68   Ramp cards: 0   Cantrips: 6
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -2.09 adj [MV 1.68 vs 2.5, 6 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  R  demand  51.7%  prod  60.0%  gap  -8.3pp  [OK]
  U  demand  48.3%  prod  60.0%  gap -11.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS -- verified by Phase 5C check 3 against cube_search.get_max_copies
rares_mythics_max_1_each: PASS -- all five are single copies
max_5_rares_mythics_total: PASS -- exactly 5 of 5: Thing in the Ice // Awoken Horror (rare, main), Galvanic Iteration (rare, main), Memory Deluge (rare, main), Stormcarved Coast (rare, main, land), Overcharged Amalgam (rare, sideboard). No headroom remains.
all_cards_from_cube: PASS -- exact-name membership verified against the working pool cache
basics_unlimited: Island 6, Mountain 6 -- format-supplied, exempt
colour_legality: PASS -- every nonland card is on-colour by its printed identity; no alternate-mode admissions
```
