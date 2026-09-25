---
deck_name: "bg-morcants-eyes-detonation"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BG"
format: "40-card"
built_at: "2026-08-09T23:55:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x6   Forest                   basic
  x6   Swamp                    basic
  x2   Eclipsed Realms          enters untapped; name Elf -> pays for 19 of 23 nonland cards AND for the Eyes activation
  x2   Haunted Mire             BG dual, enters tapped
  x1   Overgrown Tomb           BG dual, untapped for 2 life (rare slot)
```

### CREATURES (14)

```
CMC  Card                                             Qty   Color  Role                                Rar
  2  Lys Alana Dignitary                              x2    G      Engine/Infrastructure               U
  2  Lys Alana Informant                              x1    G      Engine/Infrastructure               C
  2  Scarblade Scout                                  x2    B      Engine/Infrastructure               C
  3  Eclipsed Elf                                     x2    BG     Engine/Infrastructure               U
  3  Morcant's Loyalist                               x2    BG     Converter/Body                      U
  3  Trystan, Callous Cultivator // Trystan, Penitent Culler x1    C      Engine/Infrastructure               R
  4  Dawnhand Eulogist                                x2    B      Converter/Body                      C
  4  Moon-Vigil Adherents                             x2    G      Threat/Payoff                       U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                                             Qty   Color  Role                                Rar
  2  Midnight Tilling                                 x2    G      Engine/Infrastructure               C
  2  Nameless Inversion                               x2    B      Interaction                         U
  3  Unforgiving Aim                                  x1    G      Interaction                         C
  6  Trystan's Command                                x1    BG     Threat/Payoff                       R
```

### OTHER SPELLS (3)

```
CMC  Card                                             Qty   Color  Role                                Rar
  2  Morcant's Eyes                                   x2    G      Threat/Payoff                       U
  4  Mirrormind Crown                                 x1    C      Engine/Infrastructure               R
```

## SIDEBOARD (10)

```
Card                                             Qty   Color  Role / When to board in                             Rar
Requiting Hex                                    x2    B      Flex — cheap removal vs aggro                       U
Creakwood Safewright                             x2    B      Flex — two-mana 5/5 blocker vs aggro; also an Elf card that feeds X when milled U
Chomping Changeling                              x2    G      Hate — artifacts / enchantments                     U
Dawn's Light Archer                              x2    G      Flex — anti-evasion blocker                         C
Rooftop Percher                                  x2    C      Hate — graveyard                                    C
```

## ANALYSIS

### DECK IDENTITY

A BG Elf self-mill combo deck that spends five or six turns turning its library into a number and then cashes that number in once. Morcant's Eyes reads '{4}{G}{G}, Sacrifice this enchantment: Create X 2/2 black and green Elf creature tokens, where X is the number of Elf cards in your graveyard' — and 19 of the 40 cards in this list are Elf cards, including Morcant's Eyes itself, which is a Kindred Enchantment - Elf and whose sacrifice is part of the activation cost, so it is already in the graveyard and counting itself when the ability resolves. Ten enabler copies bin cards for free while developing the board, and Lys Alana Dignitary's '{T}: Add {G}{G}. Activate only if there is an Elf card in your graveyard' is switched on by the same mill. The finish is Mirrormind Crown: 'the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature' — attached to Dawnhand Eulogist, the X tokens arrive as X Eulogists, each of which reads 'each opponent loses 2 life', so the detonation deals 2X on resolution rather than waiting a turn cycle for summoning-sick tokens to attack. Moon-Vigil Adherents is a second, slower win condition reading an overlapping graveyard without needing the Eyes at all.


### THE NUMBER, AND WHAT IT ACTUALLY IS

Everything in this deck exists to make one variable large. Morcant's Eyes reads *"Create X 2/2 black and green Elf creature tokens, where X is the number of Elf cards in your graveyard"*, and **19 of the 40 cards in this list are Elf cards** — a count that includes the two Morcant's Eyes themselves (Kindred Enchantment — Elf), Trystan's Command (Kindred Sorcery — Elf) and both Nameless Inversion (changeling). Two consequences most builds of this card miss:

1. **The Eyes counts itself.** *"Sacrifice this enchantment"* is part of the activation **cost**, so the Eyes is already in the graveyard when the ability resolves. X is one higher than the board suggests, and destroying the enchantment in response to the activation does nothing at all.
2. **Eclipsed Realms pays for the activation.** Its mana may be spent *"to cast a spell of the chosen type **or activate an ability of a source of the chosen type**."* Naming Elf, and with Morcant's Eyes being an Elf card, both copies feed the `{4}{G}{G}` directly — an uncommon land doing rare-land work.

Simulated under optimistic assumptions (13 cards seen by turn 7, every enabler cast, every surveil binned): **mean X = 5.79, median 6, P(X≥6) = 0.548**.

### THE HONEST TIMING

There is **no haste anywhere in this cube's BG cards**, and Trystan's Command's *"Untap them"* is not haste. Turn 7 is the **activation** turn, not the kill turn — a wave of summoning-sick 2/2s waits a full turn cycle, and that window is exactly where Darkness Descends (`{2}{B}{B}`, uncommon, 2 copies in the pool, *"Put two -1/-1 counters on each creature"*) kills the entire payoff. Hexproof and indestructible answer neither: it does not target, and this set's own reminder text is explicit — *"If its toughness is 0 or less, it still dies."*

### MIRRORMIND CROWN IS THE ACTUAL KILL

Which is why the deck runs an artifact. Mirrormind Crown: *"the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature."* Attached to **Dawnhand Eulogist**, the Eyes' X tokens arrive as X Eulogists, and each one's *"When this creature enters... each opponent loses 2 life"* triggers on the same resolution — **2X life loss before the opponent ever regains priority**, bypassing summoning sickness, blockers and the sweeper simultaneously. At the simulated median that is 12 damage plus six 3/3 menace bodies.

Disclosed cost: X Eulogist copies also mill 3X. At X ≥ 7 you will bin most of what remains of your library. This is a kill-turn line only, never a value play.

Artifact removal in this cube is **4 cards / 1.54% density** — the thinnest answer class in the environment — so the Crown itself is close to unanswerable.

### WHY THE THREAT SLOT IS OVER BAND

Threats/Payoffs runs 5 of 23 (21.7%) against a 5–15% combo band. That is not a preference, it is a gate: at three payoff copies the structural assembly check returned P(payoff seen by turn 7) = 0.66 against a 0.75 threshold — a HARD failure. Moon-Vigil Adherents ×2 was promoted into the payoff slot at a declared reliability weight of 0.6 (it reads an *overlapping*, not identical, resource — *"each creature you control and each creature card in your graveyard"*, and 5 of the 19 Elf cards are noncreature), which brings the check to 0.79.

### WHAT DOESN'T GO IN, AND WHY

The shape judge rejected the "resilient" sketch specifically because Stoic Grove-Guide's *"Exile this card from your graveyard"* trades X for a single 2/2. That rule is applied here with one honest caveat: Morcant's Loyalist's death trigger and Trystan's Command's mode 2 do pull cards out of the yard, but each replaces what it removes, and X is locked the moment the Eyes' ability is on the stack. Trystan, Penitent Culler's *"you may exile an Elf card from your graveyard"* is optional and is **declined by default** in this deck — a play-pattern rule, not a card choice.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (23 nonland):  2:11  3:6  4:5  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.2: Moon-Vigil Adherents@0.6, Moon-Vigil Adherents@0.6) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 8.6: Lys Alana Informant@0.6, Morcant's Eyes@0.5, Morcant's Eyes@0.5) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 92%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Trystan's Command, Morcant's Eyes, Nameless Inversion
  OK        single_large_threat: Nameless Inversion, Trystan's Command
  OK        noncreature_permanents: Trystan's Command, Unforgiving Aim
  CONCEDED  stack: The BG portion of this cube contains no counterspells at all, so no mainboard or sideboard answer exists. A combo deck cannot protect its payoff here; the answer is duplication — 2 Morcant's Eyes plus Trystan's Command's 'Return one or two target permanent cards from your graveyard to your hand' means the payoff exists in three places, and Moon-Vigil Adherents wins without it.
  CONCEDED  graveyard: This deck's graveyard IS its win condition — X literally counts Elf cards there — so mainboard graveyard hate would be self-destructive; Rooftop Percher x2 is held in the sideboard for the graveyard mirror, which the dossier sizes at 39 cards / 15.0% density.
```

- No WARN-tier flags remain — curve and goldfish both PASS. The assembly HARD gate initially FAILED at 3 payoff copies (p=0.66) and was repaired by promoting Moon-Vigil Adherents x2 into the payoff role at weight 0.6, not by revising the thesis turn.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands are the kill. The critical turn needs six mana for '{4}{G}{G}, Sacrifice this enchantment', and Mirrormind Crown wants {4} to cast plus {2} to equip on earlier turns — so the seventh, eighth and ninth land are all enabling resources rather than dead draws. Lys Alana Dignitary's '{T}: Add {G}{G}' lets the detonation happen off five lands. Trystan is a one-mana-per-turn sink every turn ('At the beginning of your first main phase, you may pay {B}. If you do, transform Trystan', milling three each way — declining its optional 'you may exile an Elf card from your graveyard', which would shrink X). Eclipsed Elf x2 filters flooded draws: 'look at the top four cards of your library. You may reveal an Elf, Swamp, or Forest card from among them.' |
| screw | mitigation | 11 of the 23 nonland cards cost two or less and the four cheapest enablers are all castable on two lands — Midnight Tilling {1}{G}, Scarblade Scout {1}{B}, Lys Alana Informant {1}{G} and Morcant's Eyes itself {1}{G}. (Dawnhand Eulogist at {3}{B} and Trystan at 3 MV are not — the enabler suite is not uniformly two-land castable.) The goldfish check reports 86% keepable hands and 3 lands by turn 3 in 88%. Eclipsed Elf digs four deep naming Swamp and Forest explicitly. |
| decapitation | mitigation | The payoff exists in four places: Morcant's Eyes x2, Trystan's Command's 'Return one or two target permanent cards from your graveyard to your hand' (which rebuys a destroyed or milled Eyes — an enchantment is a permanent card), and Moon-Vigil Adherents x2, which wins off an overlapping graveyard without the Eyes ever resolving. Midnight Tilling's 'you may return a permanent card from among them to your hand' can also retrieve a milled Eyes, and can retrieve a milled Mirrormind Crown. |
| gas-out | mitigation | The deck does not need a hand to win — X counts cards already in the graveyard, so an empty hand plus six mana plus one Morcant's Eyes is still the kill. For refuel: Midnight Tilling x2 returns a permanent card from the four it mills (self-replacing), Eclipsed Elf x2 puts a card in hand from the top four, and Morcant's Loyalist x2 returns an Elf card on death — card-neutral, not net-positive, since the Loyalist itself has left the battlefield. The list carries no true draw engine; that is the disclosed price of running 10 enabler copies. |
| raced | accepted | This is a combo deck with a turn-7 activation facing a cube whose evasion class is 41 cards at 15.8% density; against the fastest starts it loses the race. Mitigating in the MAINBOARD means cutting enabler copies, and every enabler cut lowers X directly, so the mitigation makes the kill both later and smaller — that is the identity cost, and it is why the answers live in the sideboard instead. The board brings Dawn's Light Archer x2 ('Flash, Reach'), Requiting Hex x2 ('Destroy target creature with mana value 2 or less') and Creakwood Safewright x2, which is the honest correction to the earlier claim that no zero-cost option existed: at {1}{B} it is a 5/5 whose 'if there is an Elf card in your graveyard' uncounter condition is on essentially always here, it blocks the ground for free, AND it is an Elf card that feeds X when milled. |
| disruption-fizzle | mitigation | Two mechanisms, one oracle-exact and one that answers the real sweeper. First: 'Sacrifice this enchantment' is part of the ACTIVATION COST, so once the ability is on the stack the Eyes is already in the graveyard — destroying or exiling the enchantment in response accomplishes nothing, and it counts itself toward X. Second, and this corrects an earlier error in this record: the cube is NOT free of BG-castable mass removal. Darkness Descends ({2}{B}{B}, uncommon, 2 copies in the pool) reads 'Put two -1/-1 counters on each creature' and kills every 2/2 token outright; hexproof and indestructible answer neither, since it does not target and this set's own reminder text states 'If its toughness is 0 or less, it still dies.' The answer is therefore not protection but speed of effect: Mirrormind Crown attached to Dawnhand Eulogist converts the wave into X Eulogist copies, each of which reads 'each opponent loses 2 life' ON ENTRY — the damage happens as the Eyes ability resolves, before the opponent regains priority, so a sweeper on their turn arrives after the life total has already moved. Artifact removal in this cube is 4 cards at 1.54% density, the thinnest answer class in the environment, so the Crown itself is close to unanswerable. Cost disclosed: X Eulogist copies mill 3X, so at X of 7 or more you will mill most of what remains of your library — that is a kill-turn-only line, never a value play. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Lluwen, Imperfect Naturalist | 'mill four cards' is exactly the enabler this build wants, but its own token half counts LAND cards in the graveyard, not Elf cards, and costs {2}{B/G}{B/G}{B/G} plus a discarded land; a rare slot for an enabler whose payoff half is off-pipeline. |
| Mirrormind Crown | 'the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature' — it would convert X 2/2 Elves into X copies of a real creature, but at {4} plus {2} to equip it costs six mana on top of the Eyes' six, which does not fit a turn-7 goldfish. |
| Bloodline Bidding | 'Return all creature cards of the chosen type from your graveyard to the battlefield' at {6}{B}{B} — a competing payoff that reads the same graveyard; it is the P3 build's thesis, and running both split the deck's mana between two six-plus-mana sorceries. |
| Moonshadow | 'remove a -1/-1 counter' fires once per graveyard event, not once per card milled, so this deck's few large mill events shed only one counter each; a mythic slot for a creature that stays small in exactly the deck that mills most per spell. |
| Foraging Wickermaw | 'When this creature enters, surveil 1' plus a mana ability — but it is a Scarecrow, so milling it or playing it adds nothing to X, which counts only Elf cards. |
| Dawn-Blessed Pennant | '{2}, {T}, Sacrifice this artifact: Return target card of the chosen type from your graveyard to your hand' — recursion for 3 total mana off a turn-1 blank; Unbury does it for 2 at instant speed and can return two. |
| Gathering Stone | 'Spells you cast of the chosen type cost {1} less' would discount most of the list, but it does not discount Morcant's Eyes' activated ability — the six mana that actually gates the kill — and at {4} it costs the turn the deck should be milling. |
| Dundoolin Weaver | 'if you control three or more creatures, return target permanent card from your graveyard to your hand' — conditional, and as a Kithkin it adds nothing to X. |
| Celestial Reunion | 'Search your library for a creature card with mana value X or less' — a tutor, but Morcant's Eyes is an enchantment, so the one card this build most wants to find is the one card this cannot find. |
| Bloom Tender | 'For each color among permanents you control, add one mana of that color' taps for at most {B}{G} in a two-colour deck; Lys Alana Dignitary adds {G}{G} off a condition this deck switches on anyway, and costs no mythic slot. |
| Dose of Dawnglow | 'Return target creature card from your graveyard to the battlefield' at {4}{B} — five mana competing directly with the six-mana detonation on the same turns. |
| Iron-Shield Elf | 'Discard a card' does add an Elf card to the graveyard, but it costs a real card from hand in a build that already mills for free, and the ability taps the body. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.87   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.16 adj [MV 2.87 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  37.5%  prod  58.8%  gap -21.3pp  [OK]
  G  demand  62.5%  prod  58.8%  gap  +3.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
copy_limits:           PASS — commons/uncommons at most 2; rares/mythics at most 1 each.
rare_mythic_budget:    4 of 5 used: Trystan and Trystan's Command (mainboard spells), Mirrormind Crown (mainboard artifact), Overgrown Tomb (mainboard land). Sideboard contains zero rares. The 5th slot is left deliberately unspent: the remaining BG-legal rares and mythics in the pool are Gloom Ripper, High Perfect Morcant, Champions of the Perfect, Twilight Diviner, Bloodline Bidding, Formidable Speaker, Mutable Explorer, Dawnhand Dissident, Bristlebane Battler, Taster of Wares, Spry and Mighty, Mornsong Aria, Selfless Safewright, Sapling Nursery, Bloom Tender (M), Moonshadow (M), Bitterbloom Bearer (M), Celestial Reunion (M), Aurora Awakener (M) — of these the best fits are Twilight Diviner (surveil 2, a strictly deeper Lys Alana Informant) and Bloodline Bidding (a second cash-out, but it empties the graveyard the Eyes counts). Twilight Diviner is the recommended card for that slot if this deck is iterated on.
requiting_hex_split:   Requiting Hex is an uncommon: 0 mainboard + 2 sideboard = 2 total, at the limit.
unforgiving_aim_split: Unforgiving Aim is a common: 1 mainboard + 0 sideboard = 1 total.
basics:                Swamp 6 + Forest 6 — format-supplied, exempt from copy limits.
colour_legality:       All distinct nonland cards return a usable mode from effective_cost.best_mode(card, ['B','G'], []). Mirrormind Crown is colourless and legal in any identity.
```
