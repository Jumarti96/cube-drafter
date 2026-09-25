---
deck_name: "gu-uthros-artifact-mana-control"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GU"
format: "40-card"
built_at: "2026-08-07T01:42:56Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
10x Island                     basic
4x Forest                     basic
1x Breeding Pool              ({T}: Add {G} or {U}.) As this land enters, you may pay 2 life. If you
1x Tangled Islet              ({T}: Add {G} or {U}.) This land enters tapped.
1x Uthros, Titanic Godcore    This land enters tapped. {T}: Add {U}. Station (Tap another creature y
```

### CREATURES (5)
```
CMC  Card                       Qty   Color Role                                      Rar
  1  Gene Pollinator            x1    G     Mana fixing                               C
  3  Galactic Wayfarer          x2    G     Ramp body                                 C
  5  Mm'menon, the Right Hand   x1    U     Engine glue / cast off top                R
  7  Mouth of the Storm         x1    U     Evasive finisher                          U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                       Qty   Color Role                                      Rar
  1  Annul                      x1    U     Counterspell (artifact/enchantment)       U
  2  Divert Disaster            x2    U     Soft counter + Lander                     C
  2  Seedship Impact            x2    G     Artifact/enchantment removal              U
  3  Unravel                    x2    U     Hard counter                              U
  4  Lost in Space              x1    U     Catch-all answer (library tuck)           C
  5  Cerebral Download          x1    U     Refuel                                    U
```

### OTHER SPELLS (9)
```
CMC  Card                       Qty   Color Role                                      Rar
  2  Cryogen Relic              x2    U     Cantrip artifact (draws twice)            C
  3  All-Fates Scroll           x2    C     Mana rock / late refuel                   U
  3  Tezzeret, Cruel Captain    x1    C     Engine multiplier (untaps the Elevator)   M
  5  The Eternity Elevator      x1    C     Mana engine                               R
  7  Pinnacle Kill-Ship         x2    C     Payoff / removal                          C
  8  Extinguisher Battleship    x1    C     Primary payoff / sweeper                  R
```

## SIDEBOARD (10)
```
Card                       Qty   Color Role / When to board in                                                        Rar
Annul                      x1    U     Second copy against artifact-dense openings; 90 of 271 cube cards are artifacts or enchantments (33%). U
Dauntless Scrapbot         x2    C     Against Reanimator / Self-Mill / Graveyard decks (31 graveyard cards, 12% density); colourless, so it never strains the GU manabase. U
Shattered Wings            x2    G     Against the cube's 74 artifact cards (30% density), its 16 enchantments, and fliers - the green half of the answer suite. C
Scour for Scrap            x1    U     Against grindy control mirrors - tutors Extinguisher Battleship or The Eternity Elevator, or rebuys one from the graveyard. U
Tractor Beam               x2    U     Against a single large threat this deck would rather steal than answer - 'You control enchanted permanent', and it enchants Spacecraft as well as creatures. U
Mechanozoa                 x2    U     Against aggro - Warp {2}{U} puts a three-mana body down that taps an attacker and stun-counters it, then it returns later as a 5/5. C
```

## ANALYSIS

### DECK IDENTITY

A green-blue artifact-mana control deck. Blue counterspells and bounce hold the early game while a mana engine assembles underneath: The Eternity Elevator adds {C}{C}{C} every turn, Tezzeret, Cruel Captain untaps it for a second activation, All-Fates Scroll and Gene Pollinator fix, and Mm'menon turns every artifact into a blue source for casting off the top of the library. The mana is then spent on a colourless and blue top end that interacts as it lands - Extinguisher Battleship destroys a noncreature permanent and deals 4 damage to each creature, Pinnacle Kill-Ship deals 10 to a creature, and Mouth of the Storm blanks the opposing attack step for a turn behind Ward {2}. Uthros, Titanic Godcore is the ceiling rather than the plan: an Island that becomes 'Add {U} for each artifact you control' if the game ever reaches 12 charge counters.

### THE ENGINE, AND WHAT ACTUALLY MULTIPLIES MANA

This deck's pitch is a mana engine, so it is worth separating the pieces that genuinely produce more mana than they cost from the ones that only look like they do.

| Card | What it actually adds per turn | Caveat |
|---|---|---|
| The Eternity Elevator | **+3 colourless**, every turn, from turn 6 | Costs {5}, so it pays for itself on turn two of its life |
| Tezzeret, Cruel Captain (0 ability) | **+3 more** when pointed at the Elevator | Once per turn, and only while Tezzeret lives |
| All-Fates Scroll | +1 of any colour | The fixing is the point, not the acceleration |
| Gene Pollinator | +1 of any colour | Costs tapping *another* untapped permanent, so it is net 0 off a land |
| Mm'menon | {U} from each artifact | **Restricted**: "Spend this mana only to cast a spell from anywhere other than your hand" |
| Uthros, Titanic Godcore | {U} | Only "for each artifact you control" at **12** charge counters |

Tezzeret is the card the self-grill added, and it is the one that changes the shape. The Elevator plus Tezzeret's untap is six colourless mana a turn out of two cards, which is what turns turn 6 into an eight-mana turn without a single extra land. Tezzeret also defends itself: *"Whenever an artifact you control enters, put a loyalty counter on Tezzeret"*, and nine of the twenty-three nonland cards here are artifacts.

Mm'menon deserves the caveat spelled out, because the ability reads much better than it plays. The mana it grants is *"Spend this mana only to cast a spell from anywhere other than your hand."* It cannot cast anything in your hand. It exists to pay for the line immediately above it — *"You may cast artifact spells from the top of your library"* — and for nothing else in this list. That is a real ability, but it is a self-contained subplan, not general acceleration, which is why the assembly gate weights it at 0.7.

### UTHROS IS A LOTTERY TICKET, AND THAT IS FINE

The pipeline is named after Uthros, Titanic Godcore, so it deserves an honest verdict rather than a flattering one. Its payoff mode needs **12 charge counters**. Station puts counters equal to the tapped creature's power, and this deck's creatures are Galactic Wayfarer 3/3 ×2, Gene Pollinator 1/2, Mm'menon 3/4 and Mouth of the Storm 6/6. Reaching 12 is four or more separate sorcery-speed activations in most games.

It stays anyway, and the reason is structural rather than sentimental: it occupies a **land slot**. Its floor is a tapped Island that still counts as one of the deck's thirteen blue sources. A land slot is the cheapest place in a 40-card deck to hold a ceiling, because the alternative in that slot is just a basic. The assembly gate weights it 0.3 and the deck functions at that weight.

### THE SWEEPER IS NOT ONE-SIDED HERE — THE ASYMMETRY IS ELSEWHERE

Extinguisher Battleship deals 4 damage to *each* creature. In this build, own creatures that survive: Mouth of the Storm (6/6). Own creatures that die: Gene Pollinator, Galactic Wayfarer ×2, Mm'menon. That is **1 of 5** — much worse than the Station build of this same archetype, where 5 of 9 survive.

The real asymmetry is that this deck's engine is not made of creatures. The Eternity Elevator, All-Fates Scroll ×2, Cryogen Relic ×2 and Tezzeret are **6 of the deck's 9 artifacts**, and none of them takes a point of damage from its own sweeper. So the Battleship is a reset button pressed from behind — it wipes the board, keeps the mana engine intact, and leaves a 10/10 flying trample body once Stationed to 5.

### THE ONLY BUILD THAT ANSWERS THE STACK

Of the four builds of this archetype, this is the only one that can declare the `stack` coverage class rather than concede it. That is not a design preference — it is a pool fact. Annul, Divert Disaster and Unravel are the cube's counterspells and all three are blue. Every green build of Big Mana in this cube concedes the stack by construction.

Unravel's rider is worth noting for the mirror: *"If the amount of mana spent to cast that spell was less than its mana value, you draw a card."* That clause is live against exactly the other builds of this archetype — a Warp-cast Bygone Colossus (paid {3}, mana value 9) or a discounted Fungal Colossus both trigger it.

### WHAT THIS DECK PAYS FOR ITS COLOURS

GU is the only two-colour pair here with a real fixing story, and "real" means exactly two: Breeding Pool and Tangled Islet are the *only* lands in the entire cube that produce both G and U. Everything else in the manabase is a basic. That is why green is deliberately over-supplied (6 sources against 26.3% demand) while blue is tuned tight (13 sources against 73.7%): every green card in the deck is single-pip, while Unravel asks for {U}{U} twice. Over-supplying the cheap colour and tuning the expensive one is the correct shape when the fixing count is 2.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:2  2:6  3:7  4:1  5:3  7:3  8:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 4 copies → p=0.79 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 9.6: Mm'menon, the Right Hand@0.7, Tezzeret, Cruel Captain@0.8, Gene Pollinator@0.8, Uthros, Titanic Godcore@0.3) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 31%  T2 85%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Extinguisher Battleship
  OK        single_large_threat: Pinnacle Kill-Ship, Lost in Space, Mouth of the Storm
  OK        noncreature_permanents: Seedship Impact, Extinguisher Battleship, Annul
  OK        stack: Annul, Divert Disaster, Unravel
  CONCEDED  graveyard: No maindeck graveyard interaction; Dauntless Scrapbot's 'exile each opponent's graveyard' is held in the sideboard at two copies, and its colourless cost means it boards in without straining a two-colour manabase.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands are the resource this deck converts best. All-Fates Scroll reads '{7}, {T}, Sacrifice this artifact: Draw X cards, where X is the number of differently named lands you control' - a five-card refuel at this manabase's five names. Cerebral Download at {4}{U} and the two {7} Pinnacle Kill-Ships mean there is always something to spend a ninth and tenth land on, and Uthros, Titanic Godcore turns extra Station activations into mana rather than nothing. |
| screw | mitigation | Ten acceleration and fixing cards, the highest count of the four builds, and the cheap end of them is castable on two lands: Gene Pollinator at {G}, Annul at {U}, Divert Disaster at {1}{U}, Seedship Impact at {1}{G}. The goldfish check measures 83% keepable and 88% for three lands by turn 3. The specific screw risk here is colour rather than count - Uthros and Tangled Islet both enter tapped, so a hand whose only blue is Uthros is a turn behind. |
| decapitation | mitigation | Both halves are redundant. On the payoff side, 4 copies reach P=0.79 by turn 8, and all four are colourless or single-pip so no one answer covers them. On the engine side, The Eternity Elevator, All-Fates Scroll x2, Cryogen Relic x2, Gene Pollinator, Tezzeret and Uthros are eight separate mana or card sources, and Mm'menon is the only one that is a creature and therefore the only one that dies to creature removal. Notably the deck's own Extinguisher Battleship sweep leaves 6 of its 9 artifacts untouched. |
| gas-out | mitigation | Cards tagged 'Cards: Net-Positive' in this mainboard: 4 of 23 (Cerebral Download - 'draw three cards'; All-Fates Scroll x2 - the sacrifice draw; Cryogen Relic x2 counted as self-replacing twice over, since it draws on entering AND on leaving). Mm'menon adds a further angle without a tag: 'You may cast artifact spells from the top of your library' turns the library into extra hand, and its artifact-mana clause exists to pay for exactly those casts. Tezzeret is a fifth: it survives on its own passive and produces mana every turn without being cast again. |
| raced | accepted | Goldfish turn 8 is the slowest of the four builds in this archetype, and the cube's evasion class is 56 cards at 22.5% density. Against the fastest draws this deck is not favoured before it stabilises. Mitigating would mean cutting engine density for early blockers, which pushes the eight-mana turn later and dismantles the thesis; the cheap interaction that IS here (Annul, Divert Disaster, Seedship Impact) answers permanents rather than buying life, and the deck's only creature above 3 toughness before turn 6 is Mm'menon. The concession is made in the sideboard instead: Mechanozoa x2, whose Warp {2}{U} lands a three-mana body that taps an attacker and stun-counters it, and Tractor Beam x2, which takes the opposing threat rather than trading with it. |
| disruption-fizzle | mitigation | Uniquely among these four builds, this one can protect its own critical turn rather than only rebuilding after it. Annul, Divert Disaster x2 and Unravel x2 are five counterspells that can be held up on the turn the Battleship or Mouth of the Storm resolves, and Mouth of the Storm additionally carries Ward {2}. Because Station is sorcery-speed and the Spacecraft are permanents rather than a chain, an answered payoff costs a turn rather than the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Evendo, Waking Haven | Land - Planet, at 12 counters '{G}, {T}: Add {G} for each creature you control'. A mythic that enters tapped and needs 12 charge counters; running two Planets means two tapped lands and two mythic budget slots against a 6-card cap. |
| The Endstone | {7} 'Whenever you play a land or cast a spell, draw a card' is the best engine text in the pool, but 'At the beginning of your end step, your life total becomes half your starting life total' caps you at 10 and then does nothing - a control deck's life total is a resource it is spending elsewhere. |
| Quantum Riddler | {3}{U}{U} 4/6 flier with Warp {1}{U} and an extra-card draw clause - a real card, but a mythic competing with Uthros for the capped budget, and this build's draw is already Cerebral Download and Starwinder. |
| Weftwalking | {4}{U}{U} mythic; 'The first spell each player casts during each of their turns may be cast without paying its mana cost' is SYMMETRIC and this deck is the slower one - the opponent uses it first every turn. |
| Bygone Colossus | {9} 9/9 with Warp {3}; a fine body, but this build wins with the Battleship's sweeper ETB and Mouth of the Storm's flying clock, and a vanilla 9/9 does not interact. |
| Specimen Freighter | {5}{U} ETB 'return up to two target non-Spacecraft creatures to their owners' hands' - tempo, not an answer; the returned creatures are recast against a deck that wants the game to go long. |
| Glacier Godmaw | {5}{G}{G} - double green in a two-colour deck whose blue half carries {U}{U} counterspells; the pip clash is the reason, not the card. |
| Harmonious Grovestrider | {3}{G}{G} - same double-green pip clash, and this build wants its five-drops to be engines rather than bodies. |
| Famished Worldsire | {5}{G}{G}{G} - triple green is uncastable off a manabase that must also support {U}{U} and colourless {7}-{8} casts. |
| Dawnsire, Sunstar Dreadnought | Its damage trigger needs 10 charge counters and flying needs 20; this deck's Station fodder tops out around 4 power, so 10 counters is three activations away. |
| Emissary Escort | {1}{U} 0/4 that 'gets +X/+0, where X is the greatest mana value among other artifacts you control' - a rare spent on a body, and this build wins with the artifacts themselves rather than by attacking with a 0/4. |
| Synthesizer Labship | {U} Spacecraft that animates an artifact into a 2/2 flier each combat - cute, but a rare, and animating The Eternity Elevator to attack turns off the mana it exists to produce. |
| Thrumming Hivepool | 'Affinity for Slivers' with 0 Slivers in the pool besides its own tokens. |
| Loading Zone | Doubles counters on Spacecraft and Planets, which would halve Uthros's 12-counter requirement - genuinely strong here, but it is a rare and the budget is fully committed to the mana engine and the top end. |
| Mechan Assembler | {4}{U} 4/4 making a 2/2 Robot whenever another artifact enters - a token engine for an artifact-aggro build, not for a deck whose artifacts are two mana rocks and two Spacecraft. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.61   Ramp cards: 10   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.19 adj [MV 3.61 vs 2.5, 10 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  26.3%  prod  35.3%  gap  -9.0pp  [OK]
  U  demand  73.7%  prod  76.5%  gap  -2.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
copy_limits:           PASS - every common/uncommon at most 2 copies, every rare/mythic at most 1, checked against cube_search pool quantities.
rare_mythic_budget:    6 of 6 used, exactly at cap: The Eternity Elevator, Mm'menon the Right Hand, Tezzeret Cruel Captain (mythic), Extinguisher Battleship, Breeding Pool (land), Uthros Titanic Godcore (mythic land). Starwinder was cut in the Phase 9 repair round to make room for Tezzeret. Sideboard adds none.
basics:                10 Island and 4 Forest, format-supplied and exempt from copy limits.
colour:                Every nonland card usable in core_colors ['G','U'] via effective_cost.best_mode. splash_colors is empty - both colours are core.
1_counts:              PASS (mainboard 40, sideboard 10)
2_exact_name_membership: PASS
3_copy_limits:         PASS
4_colour_usability_best_mode: PASS
5_splash_cap:          PASS (no splashed cards)
6_rare_mythic_budget:  PASS (6/6, exactly at cap)
```