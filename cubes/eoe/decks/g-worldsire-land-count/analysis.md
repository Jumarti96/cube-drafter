---
deck_name: "g-worldsire-land-count"
cube_id: "eoe"
cube_slug: "eoe"
colors: "G"
format: "40-card"
built_at: "2026-08-03T16:31:46Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
7x Forest                   Basic - the only Lander-fetchable land; name 1
2x Haunted Mire             Swamp Forest, tapped - name 4
2x Radiant Grove            Forest Plains, tapped - name 2
2x Tangled Islet            Forest Island, tapped - name 3
2x Wooded Ridgeline         Mountain Forest, tapped - name 5
1x Breeding Pool            Forest Island, untapped for 2 life - name 7
1x Stomping Ground          Mountain Forest, untapped for 2 life - name 6
```

### CREATURES (12)

```
CMC  Card                     Qty   Color  Role                                                      Rar
  4  Icecave Crasher          x2    G      Threat: 4/4 trample, landfall pump                        C
  4  Icetill Explorer         x1    G      Ramp: extra land drop + GY lands                          R
  4  Seedship Agrarian        x2    G      Ramp: repeatable Lander on tap                            U
  5  Harmonious Grovestrider  x2    G      PRIMARY PAYOFF: P/T = land count                          U
  6  Anticausal Vestige       x1    C      Payoff: cheat in a permanent MV <= lands                  R
  7  Fungal Colossus          x2    G      PAYOFF: cost = 7 minus distinct land names                C
  7  Glacier Godmaw           x1    G      Top-end: Lander + team anthem on landfall                 U
  8  Famished Worldsire       x1    G      Top-end: devour lands, refill off top                     M
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                     Qty   Color  Role                                                      Rar
  1  Sami's Curiosity         x2    G      Ramp: MV1 Lander                                          C
  2  Close Encounter          x2    G      Removal scaled by our own power                           U
  2  Seedship Impact          x2    G      Answer: artifact/ench + Lander                            U
  3  Diplomatic Relations     x1    G      Instant-speed bite                                        C
  3  Shattered Wings          x2    G      Answer: artifact/ench/flier                               C
```

### OTHER SPELLS (2)

```
CMC  Card                     Qty   Color  Role                                                      Rar
  3  Larval Scoutlander       x2    G      Ramp: two basics at once                                  U
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                   Rar
Meltstrider's Resolve    x2    G      {G} fight aura vs creature decks                          U
Thaumaton Torpedo        x2    C      Answers any nonland permanent; vs 74 artifacts            C
Biosynthic Burst         x1    G      Indestructible + untap; protects the key body             C
Dauntless Scrapbot       x2    C      Graveyard exile vs 28 opposing GY cards                   U
Skystinger               x2    G      Reach blocker vs 52 opposing evasion cards                C
Extinguisher Battleship  x1    C      Sweeper vs wide boards; 7/12 of our creature copies live  R
```

## ANALYSIS

### DECK IDENTITY

Mono-green land-count midrange. The number of lands on the battlefield is the scaling variable: Harmonious Grovestrider's power and toughness literally equal it, Anticausal Vestige cheats a permanent whose mana value is at most that number onto the battlefield, and Famished Worldsire devours lands for triple +1/+1 counters and then refills them off the top of the library. The manabase deliberately runs SEVEN differently named lands that all produce green, which drops Fungal Colossus's floor from {6}{G} to {G}. Landers, Seedship Agrarian and Larval Scoutlander accelerate the count while Seedship Impact, Shattered Wings and Close Encounter keep the board clear enough for the fatties to close.

### THE MANABASE *IS* THE PAYOFF

Seven differently named lands, all producing {G}:

| Land | Type line | Qty | Enters |
|---|---|---|---|
| Forest | `Basic Land — Forest` | 7 | untapped |
| Radiant Grove | `Land — Forest Plains` | 2 | tapped |
| Tangled Islet | `Land — Forest Island` | 2 | tapped |
| Haunted Mire | `Land — Swamp Forest` | 2 | tapped |
| Wooded Ridgeline | `Land — Mountain Forest` | 2 | tapped |
| Stomping Ground | `Land — Mountain Forest` | 1 | pay 2 life or tapped |
| Breeding Pool | `Land — Forest Island` | 1 | pay 2 life or tapped |

Fungal Colossus reads *"This spell costs {X} less to cast, where X is the number of differently named lands you control."* At 7 names the printed {6}{G} bottoms out at **{G}** — a 5/5 for one mana. At 5 names it is {1}{G}; at 4, {2}{G}; at 3, {3}{G}.

Note that **Stomping Ground and Wooded Ridgeline share a type line but not a name**, and the same is true of Breeding Pool and Tangled Islet. The payoff counts names, so the shocks each add a full point of discount *and* fix the deck's worst structural problem at the same time — they are the only two lands here that can come in untapped in the mid-game.

That pair was not in the first draft of this deck. The self-grill simulated the 5-name version over 20,000 games with a land-drop policy that always preferred a new name and found a mean of **3.02 distinct names by turn 6**, with P(≥4 names) = **30.3%** — meaning the deck's own identity sentence was true in under a third of games. The structural cause is worth naming: **9 of the 10 acceleration copies fetch only basics**, because both the Lander token and Larval Scoutlander read *"search your library for a **basic** land card."* The whole ramp package adds Forests — a name already counted — and never advances X. Only the manabase itself can.

### FOUR INDEPENDENT USES OF ONE NUMBER

| Card | How it reads the land count |
|---|---|
| Harmonious Grovestrider ×2 | *"power and toughness are each equal to the number of lands you control"* — ward 2 on top |
| Fungal Colossus ×2 | *"costs {X} less… differently named lands"* — the count as a discount |
| Anticausal Vestige ×1 | *"put a permanent card with mana value less than or equal to the number of lands you control from your hand onto the battlefield"* — the count as a cheat-in threshold |
| Famished Worldsire ×1 | *"Devour land 3… three times that many +1/+1 counters"* then *"look at the top X cards, where X is this creature's power"* — the count as raw material |

Because these read the same number through four different clauses, no single answer switches the deck off. Grovestrider carries ward 2 and Worldsire ward 3, so even the answers that exist cost extra.

### ANTICAUSAL VESTIGE, RECOUNTED

The grill caught this one and the corrected number is the honest one. The mainboard holds **14 nonland permanent copies**, 13 excluding the Vestige itself. What it can cheat in, by land count:

- **5 lands** — 9 of 13
- **6 lands** — 9 of 13
- **7 lands** — 12 of 13 (Fungal Colossus ×2 and Glacier Godmaw all have **mana value 7** — the cost reduction does not lower mana value)
- **8 lands** — 13 of 13 (Famished Worldsire, MV 8)

Warp {4} is the key line: warping it exiles it at the beginning of the next end step, and *that* is a leave-the-battlefield event, so the trigger fires on the turn you cast it. Four mana on turn 4–5 to draw a card and put a real threat onto the battlefield, with the 7/5 body still available to hard-cast from exile later.

### SEEDSHIP AGRARIAN + LARVAL SCOUTLANDER IS THE ENGINE

Seedship Agrarian reads *"Whenever this creature **becomes tapped**, create a Lander token."* It is the only repeatable Lander source in the pool — every other accelerant here fires once. Larval Scoutlander's Station ability reads *"Tap another creature you control"*, which is a free, sorcery-speed tap outlet that mints a Lander every turn without attacking. And Larval Scoutlander's own ETB cost is *"you may sacrifice a land or **Lander**"* — so Agrarian directly feeds the one sacrifice cost in the mainboard. Meanwhile Agrarian's landfall clause puts a permanent +1/+1 counter on itself with every land that arrives.

### WHAT THIS DECK GIVES UP

The `raced` failure mode is **accepted**, not mitigated, and it is worth being blunt about the cost: the mainboard has **no creature below mana value 4** and **no reach or flying at all**, against a cube whose evasion class is 52 opposing cards. Eight of seventeen lands enter tapped unconditionally. Game one against the fastest starts in the cube is a real loss path. Skystinger ×2 and Extinguisher Battleship come in for games two and three; game one is conceded to the curve-out.

The alternative — cutting the tapped duals — deletes the distinct-land-names thesis the whole deck is built on. That is why it is accepted rather than fixed.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:4  3:5  4:5  5:2  6:1  7:3  8:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.8: Anticausal Vestige@0.8) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 8.5: Larval Scoutlander@0.9, Larval Scoutlander@0.9, Icetill Explorer@0.7, Seedship Impact@0.5, Seedship Impact@0.5) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 37%  T2 80%  T3 96%
Coverage:  [PASS]
  CONCEDED  wide_boards: There is no GREEN sweeper anywhere in this cube. The one colourless sweeper the pool offers, Extinguisher Battleship ({8}, 'this Spacecraft deals 4 damage to each creature'), is castable here and is in the sideboard - 7 of this deck's 12 mainboard creature copies survive 4 damage - but at {8} it is a matchup swap, not a mainboard slot in a list whose curve already carries five cards at MV 7+. Mainboard, the deck answers wide boards by out-sizing them: Harmonious Grovestrider (P/T = land count, ward 2), Fungal Colossus 5/5 and Glacier Godmaw 6/6 trample all block or attack profitably into any number of small bodies.
  OK        single_large_threat: Close Encounter, Diplomatic Relations, Shattered Wings
  OK        noncreature_permanents: Seedship Impact, Shattered Wings
  CONCEDED  stack: Mono-green in this cube contains zero counterspells and zero hand disruption; the deck answers stack-based plans by presenting ward-protected bodies (Harmonious Grovestrider ward 2, Famished Worldsire ward 3) that cost extra to interact with.
  CONCEDED  graveyard: No mainboard graveyard answer; Dauntless Scrapbot x2 (exile each opponent graveyard) is a sideboard swap. Denominator corrected during the grill: the cube has 31 graveyard-interaction cards, 3 of which this deck itself plays (Dauntless Scrapbot, Icetill Explorer, Shattered Wings), so 28 oppose.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Flood is the win condition. Harmonious Grovestrider x2 are literally as big as the land count; Anticausal Vestige cheats in a permanent whose mana value is at most that count; Fungal Colossus costs {X} less per differently named land; Icecave Crasher x2 and Glacier Godmaw convert each extra land ETB into combat stats. Famished Worldsire additionally eats surplus lands for three +1/+1 counters each and then replaces them off the top. |
| screw | mitigation | Every one of the 17 lands produces {G}, so there is no colour screw at all - only land-count screw. Stomping Ground and Breeding Pool can enter untapped for 2 life, which is the deck's only way to deploy on curve through a tapped-land draw. Sami's Curiosity x2 at {G} and Larval Scoutlander x2 ('search your library for up to two basic land cards') dig toward more lands, and 7 of 17 lands are basic Forests so a Lander never bricks. |
| decapitation | mitigation | There is no single key card. The assembly gate counts 9 payoff copies across five different scaling mechanisms - land count (Harmonious Grovestrider x2), distinct land names (Fungal Colossus x2), landfall (Icecave Crasher x2, Glacier Godmaw), land-count-gated cheat-in (Anticausal Vestige) and land devour (Famished Worldsire). Grovestrider carries ward 2 and Worldsire ward 3, so answering them costs extra mana on top of a card. |
| gas-out | mitigation | Anticausal Vestige draws a card and deploys a permanent from hand for free when it leaves the battlefield, and its warp {4} means that happens on the turn it is cast; it can then be recast from exile later as a 7/5. Icetill Explorer mills lands and replays them from the graveyard. Seedship Agrarian x2 are a renewable resource rather than a one-shot. Famished Worldsire looks at the top X cards where X is its own power - which is why it is cast only with lands to devour, since devouring zero leaves it a 0/0 that dies and looks at zero cards. |
| raced | accepted | With 17 lands - 8 of which enter tapped unconditionally - and an average mana value near 3.9, this deck is structurally slower than any aggro start in the cube, and the mainboard has no creature below mana value 4 and no reach or flying at all. Mitigating would mean cutting the tapped duals, which are exactly what makes Fungal Colossus a one- or two-mana 5/5 and what the whole distinct-land-names thesis is built on, or lowering the top end, which removes the bodies that win the game. The stated cost of accepting: game one the deck can simply lose to a curve-out before turn 7, and its only in-mainboard brake is Icecave Crasher x2 (4/4 trample) arriving on turn 4. Skystinger x2 and Extinguisher Battleship come in from the sideboard for games two and three; game one is conceded to the fastest starts. |
| disruption-fizzle | mitigation | No turn in this deck is a single combo stack; each threat stands alone, so there is nothing to fizzle. If the critical turn is interacted with, Harmonious Grovestrider's ward 2 and Famished Worldsire's ward 3 tax the interaction with extra mana on top of the card, and both are in the mainboard. Seedship Agrarian x2 rebuild the Lander engine after any single answer because their trigger is 'whenever this creature becomes tapped' rather than a one-shot ETB. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Survey Mechan (U) | '{10}, Sacrifice this creature ... costs {X} less to activate, where X is the number of differently named lands you control.' At this list's 5 distinct names the activation still costs {5} PLUS sacrificing the body. The shape judge flagged the assigned role as oversold; cut rather than re-justified. |
| All-Fates Scroll (U) | '{7}, {T}, Sacrifice this artifact: Draw X cards, where X is the number of differently named lands you control.' At 5 names that is 7 mana for 5 cards, at sorcery speed, on a turn the deck would rather deploy a threat. The {T}: add one mana half is real, but a colourless rock in a deck with 28 green pips is poor fixing. |
| Terrasymbiosis (R) + Bioengineered Future (R) | The judge's finding: each is inert without the other, and Bioengineered Future only pays off on creatures entering AFTER a land drop the same turn. Two of six rare slots on a sequencing-dependent two-card pairing. |
| Frenzied Baloth (R) | Uncounterable trample-haste 3/2, but nothing in its text scales with lands, so it burns a rare slot on a body that gets no better as the land count climbs. |
| Ouroboroid (M) | 'put X +1/+1 counters on each creature you control, where X is this creature's power' grows exponentially, but it starts as a 1/3 and needs to survive two combat steps in a deck whose threats are already the largest bodies on the table. |
| Mightform Harmonizer (R) | Doubling power per landfall is lethal with trample, but this list's biggest bodies (Harmonious Grovestrider, Fungal Colossus) have no trample, so the doubled power is absorbed by a single chump block. |
| Sledge-Class Seedship (R) | 'Whenever this Spacecraft attacks, you may put a creature card from your hand onto the battlefield' would cheat in Fungal Colossus and Glacier Godmaw for free, but it only becomes a creature at Station 7+, which needs 7 total power tapped before it can ever attack. |
| Command Bridge (C) | It would be a 6th differently named land and add {G} via 'add one mana of any color', but 'sacrifice it unless you tap an untapped permanent you control' taxes the turn it enters, and a 6th name only helps on the turns all six are already on the battlefield. |
| Breeding Pool (R) / Stomping Ground (R) | Untapped-capable duals that would each add a distinct land name without the tempo cost, but each spends one of six rare/mythic slots on a land in a deck whose green pips are already fully covered by 17 green-producing lands. |
| Eusocial Engineering (U) | 'Landfall - create a 2/2 colorless Robot' is a fine engine, but at {3}{G}{G} in a curve already carrying two 5-drops and five cards at MV 7+, and this build wins by body size rather than board width. |
| Lashwhip Predator (U) | 5/7 reach for {4}{G}{G}, discounted to {2}{G}{G} against three or more opposing creatures. Cut on curve: the 6-slot is where Anticausal Vestige earns more, since the Vestige scales with the land count and the Predator does not. |
| Tapestry Warden (U) | 'creatures with toughness greater than power assign combat damage equal to toughness' is a strong static, but only 1 of the 12 creature copies in this list (Icetill Explorer 2/4) has toughness greater than power, so it modifies almost nothing here. |
| Bygone Colossus (U) | 9/9 for {9}, warp {3}. The warp body is real, but it never returns to the battlefield permanently without paying {9}, and this list already has four cards at MV 7+. |
| Blooming Stinger (C) | Sideboard consideration. Deathtouch on a 2/2 trades with a large threat, but Meltstrider's Resolve does the same job at {G} and puts the fight on our terms with a 5/5 or larger. |
| Pull Through the Weft (U) | 'return up to two target land cards from your graveyard to the battlefield tapped' needs land CARDS in the graveyard. Only Icetill Explorer's landfall mill puts them there, and it is a single copy. |
| Galactic Wayfarer (C) | Cut for Seedship Agrarian on the grill's mechanism: 'When this creature enters, create a Lander token' fires exactly once, where Agrarian's 'whenever this creature becomes tapped' is renewable and is fed for free by Larval Scoutlander x2's Station ability. |
| Edge Rover (U) | Absence-audit candidate: a {G} 2/2 with reach would be the mainboard's only pre-turn-4 blocker and its only reach, which is exactly what the accepted 'raced' mode gives up. Rejected because 'When this creature dies, EACH PLAYER creates a Lander token' hands the opponent the same acceleration this deck is built on. |
| Broodguard Elite (U) | Absence-audit candidate: an {X}{G}{G} sink, and this list has no scaling mana outlet at 8+ lands beyond cracking a Lander for {2}. Rejected on curve - the 23 nonland slots are already 5 cards at MV 7+, and an X-spell competes with those on the same turns. |
| Pinnacle Kill-Ship (C) | Absence-audit candidate: '{7} ... deals 10 damage to up to one target creature' is unconditional removal that needs no creature of our own. Rejected on curve: at MV 7 it would be the sixth card at 7+, and Close Encounter x2 already answer a large threat for {1}{G} once any body is out. |
| Bioengineered Future (R) | Absence-audit candidate as a solo include. Rejected because the last rare slot went to Extinguisher Battleship, which answers wide boards - a class this deck otherwise concedes entirely - where Bioengineered Future only improves a board the deck is already winning. |
| Biosynthic Burst (C), 2nd copy | Sideboard consideration. Indestructible does beat all 5 cube sweepers, but 5 of 249 is a 2.0%-density class; the slot went to Thaumaton Torpedo against the 74-artifact class at 29.7%. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.91   Ramp cards: 10   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 3.91 vs 2.5, 10 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies: PASS
rares/mythics max 1 copy: PASS
max 6 rare+mythic cards across mainboard+sideboard: PASS - 6 used, exactly at the cap: Icetill Explorer, Anticausal Vestige, Famished Worldsire, Stomping Ground, Breeding Pool (all mainboard) and Extinguisher Battleship (sideboard)
basic lands unlimited (format-supplied): PASS - 7 Forest
all cards from cube mainboard: PASS
colour usability within G (effective_cost.best_mode): PASS
splash cap: PASS - no splash colours
```