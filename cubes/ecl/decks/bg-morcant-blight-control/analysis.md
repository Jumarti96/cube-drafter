---
deck_name: "bg-morcant-blight-control"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BG"
format: "40-card"
built_at: "2026-08-10T02:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x4   Forest                   basic
  x8   Swamp                    basic
  x2   Eclipsed Realms          enters untapped; Elf mode serves only the 14 Elf cards, {C} mode covers generic
  x2   Haunted Mire             BG dual, enters tapped
  x1   Overgrown Tomb           BG dual, untapped for 2 life (rare slot)
```

### CREATURES (16)

```
CMC  Card                                             Qty   Color  Role                                Rar
  1  Dawnhand Dissident                               x1    B      Engine/Infrastructure               R
  1  Virulent Emissary                                x2    G      Body/Elf count                      U
  2  Creakwood Safewright                             x1    B      Threat/Payoff                       U
  2  Lys Alana Informant                              x2    G      Body/Elf count                      C
  3  Eclipsed Elf                                     x1    BG     Body/Elf count                      U
  3  Gnarlbark Elm                                    x2    B      Interaction                         U
  3  Morcant's Loyalist                               x2    BG     Body/Elf count                      U
  4  Champions of the Perfect                         x1    G      Threat/Payoff                       R
  4  High Perfect Morcant                             x1    BG     Threat/Payoff                       R
  5  Blighted Blackthorn                              x2    B      Engine/Infrastructure               C
  5  Gloom Ripper                                     x1    B      Threat/Payoff                       R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                             Qty   Color  Role                                Rar
  1  Requiting Hex                                    x1    B      Interaction                         U
  2  Bogslither's Embrace                             x2    B      Interaction                         C
  2  Nameless Inversion                               x2    B      Interaction                         U
  3  Blight Rot                                       x2    B      Interaction                         C
```

## SIDEBOARD (10)

```
Card                                             Qty   Color  Role / When to board in                             Rar
Requiting Hex                                    x1    B      Flex — second one-mana removal vs aggro             U
Auntie's Sentence                                x2    B      Flex — hand disruption vs combo, or -2/-2 vs aggro  C
Chomping Changeling                              x2    G      Hate — artifacts / enchantments (changelings, so they raise the Elf count post-board) U
Unforgiving Aim                                  x2    G      Hate — fliers / enchantments                        C
Darkness Descends                                x1    B      Hate — wide boards; symmetric, boarded only when behind on board U
Rooftop Percher                                  x2    C      Hate — graveyard (changeling, so also an Elf body)  C
```

## ANALYSIS

### DECK IDENTITY

A BG attrition control deck with 12 Elf bodies and a counters-flavoured engine on top — and it is worth stating that honestly rather than overselling the engine. High Perfect Morcant reads 'Whenever High Perfect Morcant or another Elf you control enters, each opponent blights 1' and 'Tap three untapped Elves you control: Proliferate'. That is real but bounded: the OPPONENT chooses which of their creatures takes the counter, so each Elf entering is chip erosion aimed at their least valuable body rather than a removal spell, and against an empty opposing board the trigger does nothing. Proliferate can only deepen a counter that already exists — it cannot seed — so the nine interaction copies are what make it worth anything. What holds the deck together is the other direction: -1/-1 counters are a currency this deck SPENDS, because Blighted Blackthorn turns 'blight 2' into a card, Bogslither's Embrace's blight-1 additional cost lands on a Virulent Emissary or a Creakwood Safewright that sheds it, and Gnarlbark Elm is a removal spell whose magazine is counters sitting on itself. The game ends with Champions of the Perfect, Gloom Ripper, or a Creakwood Safewright that has grown to 5/5.


### THE HONEST VERSION OF THE ENGINE

This is the least graveyard-centric of the four Elf builds, and it is the one where the archetype's own marketing needs the most correction. High Perfect Morcant reads *"Whenever High Perfect Morcant or another Elf you control enters, each opponent blights 1"* and *"Tap three untapped Elves you control: Proliferate."* Three limits, all real:

1. **The opponent chooses.** Blight puts the -1/-1 counter on a creature *they* control, of *their* choosing — so an opponent with a 4/4 and a 1/1 puts it on the 4/4 every time. Each Elf entering is chip erosion aimed at their least valuable body, not a removal spell.
2. **Against an empty board it does nothing at all.**
3. **Proliferate cannot seed.** It only adds a counter where one of that kind already exists. It appears on exactly **one card in the entire 473-entry pool**, on a legend the rules allow one copy of, at a cost of three untapped Elves at sorcery speed — which competes directly with blocking.

So the nine interaction copies are not support for the engine; they are what makes the engine worth anything, by putting the first counter on something.

### COUNTERS AS CURRENCY, BOTH DIRECTIONS

What actually makes the deck cohere is that -1/-1 counters are something it **spends**, not just something it inflicts:

| Card | The blight it wants to pay |
|---|---|
| Blighted Blackthorn | *"you may blight 2. If you do, you draw a card and lose 1 life"* — at 3/7 it can blight **itself** three times and live |
| Bogslither's Embrace | *"blight 1 or pay {3}"* — the counter lands on a Virulent Emissary or a Creakwood Safewright that sheds it |
| Dawnhand Dissident | *"{T}, Blight 1: Surveil 1"* — repeatable, but only with another creature to absorb the counter |
| Gnarlbark Elm | removal whose magazine **is** counters sitting on itself |
| Requiting Hex | *"you may blight 1 … you gain 2 life"* — the drawback is the upside |

### THE ONE-DROP THAT FIXES THREE THINGS

Virulent Emissary (`{G}`, *"Deathtouch / Whenever another creature you control enters, you gain 1 life"*) was added in the self-grill and it repairs three separate problems at once: it makes Bogslither's Embrace payable at two mana on turn 2 (without a creature its additional cost is `{4}{B}`, not `{1}{B}`), it is a deathtouch blocker on turn 1 for a deck that wants to do nothing but interact until turn 4, and it is an Elf — so it fires Morcant's trigger and counts toward the three-untapped-Elves proliferate cost. The goldfish check moved from a turn-1 play in 20% of hands to **59%**.

### WHY DARKNESS DESCENDS IS IN THE SIDEBOARD

It was maindecked, and the self-grill killed it with a table. *"Put two -1/-1 counters on each creature"* against this board:

| | dies |
|---|---|
| Gnarlbark Elm ×2 (enters with two counters → 1/2) | yes |
| Lys Alana Informant ×2 (3/1) | yes |
| Morcant's Loyalist ×2 (3/2) | yes |
| Eclipsed Elf (3/2) | yes |
| Creakwood Safewright (enters as 2/2) | yes |
| Dawnhand Dissident (1/2) | yes |

**11 of 16 own creature copies, 9 of 12 Elves.** And Creakwood Safewright cannot save itself: its shed is *one* counter *at the beginning of your end step*, which never arrives — state-based actions kill it in your main phase. It is a sideboard card for when this deck is behind on board, where symmetry is upside.

### A CLASSIFICATION THIS DECK DEPENDS ON

Worth flagging for anyone tuning it: the interaction band (39.1%, inside 35–45%) counts Gnarlbark Elm ×2 as interaction rather than as bodies. That is defensible — the Elm is played for its `{2}{B}` activation and its 3/4 statline is incidental — but if you reclassify it, interaction falls to 7 of 23 = 30.4% and the deck is under the control band. The band pass is one judgment call deep, and you should know which one.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:4  2:7  3:7  4:2  5:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 4 copies → p=0.79 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.2: Blighted Blackthorn@0.7, Blighted Blackthorn@0.7, Dawnhand Dissident@0.8) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 59%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard answer to a developed multi-creature board. Darkness Descends was maindecked and has been moved to the sideboard, because the Phase 9 Challenger showed the claimed asymmetry is false: 'Put two -1/-1 counters on each creature' kills 11 of this deck's 16 creature copies and 9 of its 12 Elves, and Creakwood Safewright's shed is ONE counter at the beginning of your end step, which cannot pre-empt a state-based kill in your own main phase. It is boarded in only when this deck is behind on board, where symmetry is upside. High Perfect Morcant's 'each opponent blights 1' is board erosion the opponent aims themselves, not a wide-board answer.
  OK        single_large_threat: Bogslither's Embrace, Blight Rot, Nameless Inversion
  CONCEDED  noncreature_permanents: No mainboard answer. The cube's artifact density is 4.2% (11 cards) and enchantment density 8.1% (21 cards); both are answered from the sideboard by Chomping Changeling x2 ('destroy up to one target artifact or enchantment') and Unforgiving Aim x2 ('Destroy target enchantment'). This deck's mainboard interaction is 9 of 23 nonland cards and every slot is aimed at creatures, because the mechanic it is built on — -1/-1 counters — only interacts with creatures at all.
  CONCEDED  stack: The BG portion of this cube contains no counterspells at all, so no mainboard or sideboard answer exists. As a controller this deck's substitute is hand disruption in the board (Auntie's Sentence x2, 'Target opponent reveals their hand. You choose a nonland permanent card from it. That player discards that card') plus the fact that its own engine is distributed across 9 interaction copies rather than concentrated in one spell.
  CONCEDED  graveyard: The deck uses its own graveyard only lightly (Creakwood Safewright and Gloom Ripper read Elf cards there), so maindeck graveyard hate would be close to free — but at 5 mana Rooftop Percher is off this curve for a deck already holding up interaction. It is held in the sideboard at 2 copies against the graveyard class the dossier sizes at 39 cards / 15.0% density.
```

- No WARN-tier flags — curve and goldfish both PASS. The assembly HARD gate FAILED on the first run at 3 payoff copies (p=0.69) and was repaired by reclassifying Creakwood Safewright to Threat/Payoff, consistently in both the band check and the assembly check. See slot_allocation.threats_payoffs for the Challenger's correction to how that probability is computed and why the 4-copy configuration was nonetheless kept.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Gnarlbark Elm x2 is a repeatable removal activation at '{2}{B}, Remove two counters from this creature' whenever it has counters to spend; Blighted Blackthorn x2 draws a card on entry and on every attack ('you may blight 2. If you do, you draw a card and lose 1 life'), and at 3/7 it can absorb three of its own blights and survive; Champions of the Perfect draws on each of the 15 other creature spells in the list. High Perfect Morcant's proliferate is a mana-free sorcery-speed sink, though only a 1-of. CORRECTED: the earlier claim that 'Dawnhand Dissident surveils every turn for one tap' overstated its oracle — the cost is '{T}, Blight 1', a tap AND a -1/-1 counter on a creature you control, so as your only creature it self-destructs after two activations; with Virulent Emissary or Creakwood Safewright on board it is genuinely repeatable. |
| screw | mitigation | 11 of the 23 nonland cards cost two or less and 4 of them cost one — Dawnhand Dissident, Virulent Emissary x2 and Requiting Hex — which is why the goldfish check now reports an on-curve play by turn 1 in 59% of hands (it was 20% before the Phase 9 repair), 87% keepable and 3 lands by turn 3 in 88%. CORRECTED: the earlier version of this mode listed Bogslither's Embrace as a two-land play, which its oracle forbids — 'As an additional cost to cast this spell, blight 1 or pay {3}' means that with no creature on board it costs {4}{B}, not {1}{B}. That is exactly why Virulent Emissary x2 was added: a one-mana Elf on turn 1 makes both copies of Bogslither's Embrace real two-mana removal on turn 2. |
| decapitation | mitigation | High Perfect Morcant is a single copy and the pool allows no second, so the deck is built not to need it. The nine interaction copies are removal whether or not Morcant is on the battlefield, and three of the four payoff copies — Gloom Ripper, Champions of the Perfect, Creakwood Safewright — win the game without him. What dies with Morcant is the blight-and-proliferate engine, which accelerates the plan rather than being it. |
| gas-out | mitigation | Champions of the Perfect is a genuine repeatable draw engine: 'Whenever you cast a creature spell, draw a card', and 15 of the 23 nonland cards are creature spells other than itself. Its cost is priced honestly: 'behold an Elf and exile it' is card-neutral long-run because 'When this creature leaves the battlefield, return the exiled card to its owner's hand', but beholding from the battlefield removes one of the three bodies the proliferate cost needs, in the exact turn-4/5 window when the board is 1-2 Elves — the cost is tempo, not cards. Blighted Blackthorn x2 draws on entry and every attack. Morcant's Loyalist x2 returns an Elf card on death, card-neutral rather than net-positive. |
| raced | mitigation | Nine mainboard removal copies, a 3/7 Blighted Blackthorn wall, two deathtouch Virulent Emissary blockers on turn 1, and a Creakwood Safewright that grows toward 5/5. Unlike the aggro build, the timing works in this deck's favour: it has nothing to do on turns 1-4 except interact. CORRECTED IN PHASE 9: the earlier version of this mode named Darkness Descends as an 'unusually one-sided' reset, which is oracle-false — 'Put two -1/-1 counters on each creature' kills 11 of this deck's 16 creature copies and 9 of its 12 Elves, Creakwood Safewright's shed is one counter at the beginning of your end step and cannot pre-empt a same-turn state-based kill, and Gnarlbark Elm only 'reloads' if it has already spent its counters. Darkness Descends has been moved to the sideboard, where it is boarded in only when this deck is behind on board and the symmetry is upside. |
| disruption-fizzle | mitigation | There is no critical turn to disrupt. The plan is distributed across nine interaction copies and four independent payoff copies, and the closest thing to a combo turn — tapping three Elves for proliferate — costs no cards and can be repeated next turn. The cube contains no BG counterspells for either player and only 2 sweepers total at 0.77% density, so there is very little to fizzle against. |


### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Moonshadow | 'remove a -1/-1 counter' once per graveyard event on a {B} 7/7 — a real clock, but it is an Elemental: it neither triggers High Perfect Morcant's 'another Elf you control enters' nor can be tapped for the three-Elf proliferate cost, so the shape judge ruled it a clock running BESIDE the thesis rather than through it. |
| Bristlebane Battler | 'Whenever another creature you control enters while this creature has a -1/-1 counter on it, remove a -1/-1 counter' — a {1}{G} 6/6 on paper, but it is a Kithkin, outside every Elf-conditional effect in the deck, and its five counters need five separate creature ETBs before it is a real body. |
| Nightmare Sower | 'Whenever you cast a spell during an opponent's turn, put a -1/-1 counter on up to one target creature' — the counter engine is genuine, but only 4 of the deck's 9 interaction copies are instants (Blight Rot x2, Nameless Inversion x2), so it fires intermittently, and a Faerie does not count for Morcant. |
| Retched Wretch | 'When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield' — a genuine recursion loop with the deck's own blight effects, but it is a Goblin and it 'loses all abilities' on return, so the loop produces a vanilla 4/2 outside the tribe. |
| Gutsplitter Gang | 'At the beginning of your first main phase, you may blight 2. If you don't, you lose 3 life' — a 6/6 for four, but the blight is MANDATORY-or-pay-life every single turn, and this deck's -1/-1 counters are a resource it wants to place deliberately, not a tax it pays on upkeep. |
| Bile-Vial Boggart | 'When this creature dies, put a -1/-1 counter on up to one target creature' — one counter for a whole card, and as a Goblin it adds nothing to the 11 Elf creatures that drive the blight trigger and the proliferate cost. |
| Barbed Bloodletter | 'That creature gains wither until end of turn' — wither would turn combat damage into proliferate-able counters, but it lasts one turn from a flash Equipment, and this deck's creatures are blockers and value bodies rather than attackers. |
| Perfect Intimidation | 'Remove all counters from target creature' — reads as a fine mode until you notice this deck WANTS counters on opposing creatures; the mode that matters is the hand-exile half, which at {3}{B} sorcery speed is too slow for the board-control seat. |
| Dream Seizer | 'you may blight 1. If you do, each opponent discards a card' on a 3/2 flier — real value, but a Faerie again, and paying a -1/-1 counter for a random discard is the wrong direction for a deck that spends counters on removal. |
| Auntie's Sentence | 'Target creature gets -2/-2' or a targeted discard — flexible and cheap, but -2/-2 until end of turn leaves no counter behind for proliferate to grow, which is the one thing this deck's removal is supposed to do; held in the sideboard at 2 copies for the combo matchups where the discard mode matters. |
| Requiting Hex | 'Destroy target creature with mana value 2 or less' for {B} — excellent against fast starts, but a control deck facing a cube where most creatures cost 3 or more wants unconditional answers maindeck; 2 copies in the sideboard. |
| Lys Alana Dignitary | '{T}: Add {G}{G}. Activate only if there is an Elf card in your graveyard' — the shape judge flagged it directly: it is gated on an Elf card already in the graveyard, so it is not available on the turn the mana base most needs it, and this build's pip demand is 76% black anyway. |
| Selfless Safewright | 'Other permanents you control of that type gain hexproof and indestructible' — the best protection in the identity, but the rare/mythic budget is 5 of 5 and it does not answer the deck's own Darkness Descends, since indestructible does not save a creature reduced to 0 toughness. |
| Virulent Emissary | 'Deathtouch / Whenever another creature you control enters, you gain 1 life' — a fine one-drop Elf, but this build's one-mana slot is spent on Dawnhand Dissident, whose surveil-and-exile abilities are repeatable and on-mechanic. |
| Dawnhand Eulogist | 'mill three cards. Then if there is an Elf card in your graveyard, each opponent loses 2 life' — the drain is real reach, but this deck barely uses its own graveyard and the four-mana slot is spent on Champions of the Perfect, which draws cards instead. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.7   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.10 adj [MV 2.7 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  69.2%  prod  70.6%  gap  -1.4pp  [OK]
  G  demand  30.8%  prod  47.1%  gap -16.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
copy_limits:           PASS — commons/uncommons at most 2 (Requiting Hex 1 MB + 1 SB = 2; Darkness Descends 0 MB + 1 SB = 1); rares/mythics at most 1 each.
rare_mythic_budget:    5 of 5 used, at the cap: High Perfect Morcant, Gloom Ripper, Champions of the Perfect, Dawnhand Dissident (mainboard spells) and Overgrown Tomb (mainboard land). The sideboard contains zero rares.
basics:                Swamp 8 + Forest 4 — format-supplied, exempt from copy limits.
colour_legality:       All distinct nonland cards return a usable mode from effective_cost.best_mode(card, ['B','G'], []).
```
