---
deck_name: "wb-blight-reanimator"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WB"
format: "40-card"
built_at: "2026-08-10T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  10x Swamp
  3x Plains
  2x Evolving Wilds        fetches a basic tapped
  2x Sunlit Marsh          WB dual, enters tapped - the ONLY WB dual in the cube
```

### CREATURES (16)

```
CMC  Card                  Qty  Color  Role                        Rar
  2  Creakwood Safewright  x2   B      Payload/Payoff              U
  2  Encumbered Reejerey   x2   W      Payload/Payoff              U
  2  Foraging Wickermaw    x1   C      Infrastructure/Consistency  C
  2  Rhys, the Evermore    x1   W      Engine/Outlet               R
  2  Scarblade Scout       x2   B      Enabler/Fodder              C
  3  Heirloom Auntie       x2   B      Enabler/Fodder              C
  3  Twilight Diviner      x1   B      Payload/Payoff              R
  4  Gutsplitter Gang      x1   B      Engine/Outlet               U
  4  Reaping Willow        x2   BW     Payload/Payoff              U
  5  Blighted Blackthorn   x2   B      Engine/Outlet               C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                  Qty  Color  Role                        Rar
  1  Requiting Hex         x1   B      Interaction/Disruption      U
  2  Nameless Inversion    x2   B      Interaction/Disruption      U
  3  Crib Swap             x2   W      Interaction/Disruption      U
  5  Dose of Dawnglow      x2   B      Payload/Payoff              U
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Role / When to board in
Blight Rot            x2   B      Against any single creature the maindeck cannot answer. 'Put four -1/-1 counters on target creature' is unconditional at instant speed, where Requiting Hex caps at mana value 2. Pointed at your own spent Reaping Willow it is also a full reload.  [C]
Protective Response   x2   W      Against aggro and evasive threats - 'Convoke ... Destroy target attacking or blocking creature' kills an attacking flier at instant speed, and convoke lets a tapped-out board still cast it.  [U]
Pyrrhic Strike        x1   W      Against artifact/enchantment decks and large creatures - 'If this spell's additional cost was paid, choose both instead: Destroy target artifact or enchantment / Destroy target creature with mana value 3 or greater', and the blight 2 additional cost reloads a Reaping Willow.  [U]
Liminal Hold          x2   W      Catch-all for noncreature permanents - 21 enchantments and 11 artifacts in the cube; 'exile up to one target nonland permanent an opponent controls until this enchantment leaves the battlefield' also answers any creature.  [C]
Rooftop Percher       x2   C      Against graveyard decks - 39 cube cards interact with graveyards; 'exile up to two target cards from graveyards' on a 3/3 flier that also blocks the cube's 41-card evasion class.  [C]
Winnowing             x1   W      Against go-wide token boards. 'For each player, you choose a creature that player controls. Then each player sacrifices all other creatures they control that don't share a creature type with the chosen creature they control.' Convoke is paid by this deck's own bodies. Note it is NOT free for this deck - it sacrifices most of this board too - but it does not interact with -1/-1 counters, which a symmetric counter sweeper does, and this deck's creatures are all carrying counters.  [R]
```

## ANALYSIS

### DECK IDENTITY

A black-primary, white-secondary attrition deck built on a single oracle observation: the reanimation in these colours is capped at "mana value 3 or less", and mana value is the one statistic that -1/-1 counters do not change. This cube's blighted creatures are therefore permanently legal targets that are far larger than their cost - Creakwood Safewright is a 5/5 card for two mana, Encumbered Reejerey a 5/4. Eleven of the sixteen creature copies are inside Reaping Willow's cap. Blighted Blackthorn and Gutsplitter Gang re-arm a spent Reaping Willow by blighting it, turning its one-shot activation into a recurring one, and Dose of Dawnglow is the uncapped escape hatch that returns anything at instant speed. The deck wins by attrition: every removal spell the opponent spends is refunded from the graveyard.

### THE CAP THAT ISN'T A CAP

The archetype brief called this "Reanimator", which normally means cheating something huge into play. This cube does not let you do that - `Reaping Willow`, `Meanders Guide` and `Emptiness` all read *"mana value 3 or less"*, and `Slumbering Walker` reads *"power 2 or less"*. What makes the deck work is that the cube also prints creatures that enter with -1/-1 counters: big base stats sold at a small mana value.

`Creakwood Safewright` is a **5/5 card for {1}{B}**. `Encumbered Reejerey` is a **5/4 card for {1}{W}**. Both are mana value 2, so `Reaping Willow`'s cap returns them forever. **11 of the 16 creature copies** in this list are inside that cap.

The distinction that decides the build is *which* statistic each reanimator caps on. Mana value is printed on the card and is identical in every zone. Power is not - **-1/-1 counters only exist on the battlefield**, so a `Creakwood Safewright` sitting in the graveyard is a 5/5, not a 2/2. That is why `Slumbering Walker` was cut despite being named in the original thesis: its *"power 2 or less"* clause cannot legally target a single blighted body in this list.

**Be honest about the tempo cost of this plan.** On the turn they are cast these creatures are small: `Creakwood Safewright` arrives as a **2/2**, `Encumbered Reejerey` as a **2/1**, `Reaping Willow` as a **1/4**. They are correctly-priced *reanimation targets*, not efficient beaters. `Creakwood Safewright` sheds one counter per end step and only *"if there is an Elf card in your graveyard"* - a condition met by 10 of the 23 nonland copies here, but usually not on turn two. `Rhys, the Evermore` exists in the list precisely to short-circuit that: *"{W}, {T}: Remove any number of counters from target creature you control"* turns a blighted 2/2 into a 5/5 in one activation.

### BLIGHT AS A RESOURCE, NOT A COST

`Reaping Willow` enters with exactly two -1/-1 counters and its ability costs *"Remove two counters from this creature."* Read alone that is one activation per copy - an engine that fires once is not an engine. What converts it is that **blight puts counters on a creature *you* control**, so the deck's own blight effects reload it:

| Blight source (6 copies) | Reload quality |
|---|---|
| Blighted Blackthorn x2 - *"Whenever this creature enters or attacks, you may blight 2. If you do, you draw a card and lose 1 life."* | Repeatable every attack, and draws a card doing it |
| Gutsplitter Gang x1 - *"At the beginning of your first main phase, you may blight 2. If you don't, you lose 3 life."* | Repeatable every upkeep, free, on a 6/6 with no entry counters |
| Requiting Hex x1 - optional blight 1 | Half a reload attached to removal |
| Dose of Dawnglow x2 - *"Then if it isn't your main phase, blight 2"* | Conditional; only fires when cast at instant speed |

The same inversion runs through the sideboard: `Pyrrhic Strike` and `Blight Rot` both put counters where this deck wants them.

### WHAT TWILIGHT DIVINER ACTUALLY DOES

It is tempting to read *"create a token that's a copy of one of them"* as producing a clean, full-sized body. It does not. A copy uses the card's **printed** characteristics, and *"This creature enters with three -1/-1 counters on it"* is printed text - so the token copies that ability and applies it as it enters. A token copy of `Creakwood Safewright` is a **2/2**, not a 5/5.

The Diviner is still worth its slot: it is a free extra body on every reanimation, once each turn, and copying a card with no entry-counter clause (`Scarblade Scout`, `Foraging Wickermaw`, `Twilight Diviner` itself) is clean. But it doubles *bodies*, not *stats*, and the deck's clock is priced accordingly.

### PLAY PATTERN AND THE ACTUAL CLOCK

| Turn | Line |
|---|---|
| 2 | Creakwood Safewright or Encumbered Reejerey - a 2/2 or 2/1 that will grow, or Scarblade Scout to mill two |
| 3 | Heirloom Auntie, or Twilight Diviner for surveil 2 |
| 4 | Reaping Willow (a 1/4 lifelinker on arrival), or Gutsplitter Gang as a clean 6/6 |
| 5 | Rhys removes counters from a Safewright, making it a 5/5 immediately; or activate Willow |
| 6-7 | Blighted Blackthorn attacks, blights the spent Willow, draws; Willow re-activates |
| 8 | Two or three five-power bodies plus a recurring engine the opponent cannot profitably remove |

The honest clock: this deck does not present twenty power on turn six. It presents two or three bodies that each require an answer, refunds every answer from the graveyard, and wins because the opponent runs out of removal first. That is what `default_role: controller` means here.

### WHERE THIS LIST IS GENUINELY WEAK

The mana is the real cost. WB is the cube's thinnest colour pair - `Sunlit Marsh` is the *only* WB dual and it enters tapped, there is no shockland, and with `Evolving Wilds` x2 also arriving tapped, 4 of 17 lands cost a tempo turn in a deck whose curve pivots on turn two. Second, the deck cannot play a symmetric -1/-1 sweeper at all: 8 of its 16 creature copies already carry counters, so `Darkness Descends` would kill more of this board than the opponent's - `Winnowing` is the sideboard answer instead, because sacrificing by creature type does not interact with counters. Third, card draw is two copies of one card.

### A NOTE ON THE WHITE HALF

After the Phase 9 repairs cut Eirdu, this stopped being an even two-colour deck. Black demand is 75% of the coloured pips and the base is 10 Swamps to 3 Plains, leaving five white sources for `Encumbered Reejerey` at {1}{W} and `Crib Swap` at {2}{W}. That is thin, and it is deliberate: pushing to four or five Plains was tested and drives the black gap to a WARN and then a FAIL. Treat white as a secondary colour that arrives on turn three or four, not as a colour you can rely on for a turn-two play.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:1  2:10  3:5  4:3  5:4
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.2: Reaping Willow@0.7, Reaping Willow@0.7, Twilight Diviner@0.8) → p=0.81 (need ≥ 0.75)
  PASS  enabler: 5 copies → p=0.87 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 20%  T2 93%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper, and the deck cannot safely play a symmetric -1/-1 sweeper at all: 8 of its 16 creature copies already carry -1/-1 counters, so Darkness Descends would kill 9 of them including every two-drop. Winnowing is the sideboard answer instead - not because it spares this deck's board (naming Creakwood Safewright still sacrifices Encumbered Reejerey, Reaping Willow, Heirloom Auntie, Blighted Blackthorn, Gutsplitter Gang and Foraging Wickermaw) but because it does not interact with counters at all, so it is a real one-sided effect against a wide board of small creatures where a counter-based sweeper is not.
  OK        single_large_threat: Crib Swap, Nameless Inversion
  CONCEDED  noncreature_permanents: Zero maindeck answers after Pyrrhic Strike moved to the sideboard; artifacts are 4.2% and enchantments 8.1% of the cube. Liminal Hold x2 and Pyrrhic Strike come in from the sideboard.
  CONCEDED  stack: W and B have no countermagic in this cube. The deck's answer to a countered spell is that its threats are recursive - a countered creature is still a creature card in the graveyard, which is exactly where Reaping Willow and Dose of Dawnglow read from.
  CONCEDED  graveyard: The cube has zero dedicated graveyard hate by census; the only exilers are Rooftop Percher and Dawnhand Dissident. Rooftop Percher x2 is in the sideboard for the mirror.
```

- No WARN-tier flags to respond to: curve PASS (MV distribution 1:1, 2:10, 3:5, 4:3, 5:4) and goldfish PASS (85% keepable against an 80% threshold, 88% reach 3 lands by turn 3). Caveat recorded from Phase 9 finding F9: the goldfish simulation counts lands, not untapped lands, and 4 of this deck's 17 lands enter tapped, so the reported 93% turn-2 play rate overstates the real rate of a turn-2 blighted body.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable mana sinks turn surplus lands into board and cards. Reaping Willow's '{1}{W/B}, Remove two counters from this creature: Return target creature card with mana value 3 or less from your graveyard to the battlefield' is two mana for a five-power card whenever it is loaded, and 11 of the 16 creature copies are inside its cap. Rhys, the Evermore's '{W}, {T}: Remove any number of counters from target creature you control' converts a spare white mana into stats. Foraging Wickermaw's '{1}: Add one mana of any color' turns an excess land into fixing in the cube's worst colour pair. |
| screw | mitigation | 10 of 23 nonlands cost two or less and the goldfish sim returns 85% keepable hands with 88% reaching three lands by turn 3. Stated honestly: the two-mana plays are NOT large on arrival - Creakwood Safewright is a 2/2 and Encumbered Reejerey a 2/1 - so a screwed hand is not saved by their size. What it is saved by is that they are cheap and they grow without further investment: Encumbered Reejerey sheds a counter every time it becomes tapped, which includes attacking, and Rhys at {1}{W} removes every counter at once. Scarblade Scout at {1}{B} still fills the graveyard on two lands, and Evolving Wilds x2 plus Foraging Wickermaw find the missing colour. |
| decapitation | mitigation | Reaping Willow answered on sight leaves four other payoff copies reading the same graveyard: Dose of Dawnglow x2 reanimates at instant speed with no mana-value cap at all, and Twilight Diviner adds a body to whatever returns. The blighted bodies are not dependent on the engine either - Creakwood Safewright and Encumbered Reejerey are 5/5 and 5/4 cards that win games once their counters shed, and Gutsplitter Gang is a 6/6 that enters clean with no counters. |
| gas-out | mitigation | Blighted Blackthorn x2 is the refuel and it is repeatable: 'Whenever this creature enters or attacks, you may blight 2. If you do, you draw a card and lose 1 life' draws every combat, and the blight it pays is spent reloading Reaping Willow rather than wasted. Beyond it the deck refuels from the graveyard rather than the hand - Reaping Willow and Dose of Dawnglow both turn an empty hand into a body, and Heirloom Auntie's 'Whenever another creature you control dies, surveil 1' keeps stocking that graveyard through combat. Honest limit: 2 of 23 nonlands draw cards, and both are the same card, so a game where Blighted Blackthorn never appears is a game played off the top. |
| raced | accepted | This deck is slower than the cube's fastest starts, its two-drops arrive as 2/2s and 2/1s rather than as the five-power bodies their printed stats suggest, and 4 of 17 lands enter tapped. Mitigating in the maindeck would cost the deck's identity in a specific way: the interaction slots would come out of the 9 Engine cards, and those are the only cards that either put a creature into the graveyard before turn 3 or re-arm Reaping Willow - producing exactly the empty-graveyard brick and the one-shot engine that the Engine deviation and Phase 9 finding F4 exist to prevent. The genuine defence is blocking: Reaping Willow is a lifelinker that reaches 3/6, Blighted Blackthorn is a 3/7, Gutsplitter Gang a 6/6. The cost is paid post-board with Protective Response x2 and Blight Rot x2. |
| disruption-fizzle | mitigation | The critical turn here is a Reaping Willow activation, and it is unusually hard to disrupt: it is an activated ability, not a spell, so countermagic cannot touch it, and if the Willow is removed with the ability on the stack the ability still resolves. If the RETURNED creature is killed it goes back to the graveyard and becomes a legal target again - the resource is not consumed, which is the whole reason this deck beats removal-heavy opponents. The real exposure is removal on Blighted Blackthorn, the primary re-armer; the mitigation is that it is now two copies rather than one, and Gutsplitter Gang provides a third, independent, every-upkeep reload that costs no mana and no card. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Slumbering Walker | Named in the original archetype thesis but it does NOT work here: its cap is 'power 2 or less', and -1/-1 counters exist only on the battlefield, so a creature card in the GRAVEYARD has its printed power — Creakwood Safewright is a 5/5 there, not a 2/2. It cannot return a single one of this deck's blighted bodies, and it would cost a rare slot to do nothing. |
| Emptiness | Its reanimation clause is 'if {W}{W} was spent to cast it' and its removal clause 'if {B}{B} was spent'. Evoke {W/B}{W/B} pays neither, so an evoked Emptiness triggers nothing at all; hard-casting at mana value 6 for a capped return is off-curve for a mythic slot. |
| Meanders Guide | 'you may tap another untapped Merfolk you control' — only 2 of the 16 creature copies in this list are Merfolk (Encumbered Reejerey x2), so the reanimation is live in a minority of board states. It was a keystone in two rejected sketches and is the first card to add if the Merfolk count rises. |
| Eclipsed Realms | 'Spend this mana only to cast a spell of the chosen type.' This deck's creature types are scattered across Merfolk, Treefolk, Goblin, Elf and Scarecrow; the best single naming is Elf, reaching 10 of the 23 nonland copies, and the type is locked as the land enters. In the sibling BG Elf deck the identical land reaches 17 of 23, which is the bar it has to clear. |
| Reluctant Dounguard | A 4/4-base blighted body at mana value 3 whose counters shed 'whenever another creature you control enters' - which reanimation does. Cut to make room for Dose of Dawnglow x2 at the Phase 6b assembly gate; it is the smallest of the blighted bodies and the only one at mana value 3 rather than 2. |
| Bogslither's Embrace | 'Exile target creature' for {1}{B}, cut for Dose of Dawnglow. Redundant with Crib Swap x2, which exiles at instant speed and leaves a changeling card in the graveyard. |
| Retched Wretch | 'When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield ... and it loses all abilities' — genuine self-recursion, but the returned body is a vanilla 4/2 and the deck already has 6 payoff copies competing for the same slots. |
| Burdened Stoneback | 4/4 base at mana value 2 with '{1}{W}, Remove a counter: Target creature gains indestructible' — a real card, but its counter-removal competes with Reaping Willow for the same counters, and every counter it spends is one Blighted Blackthorn has to re-apply. |
| Moonlit Lamenter | '{1}{W}, Remove a counter from this creature: Draw a card' on a 2/5 — but it enters with only one counter, so it is one card, once. Blighted Blackthorn draws repeatedly. |
| Graveshifter | 'you may return target creature card from your graveyard to your hand' with no cap — but returning to HAND undoes the self-mill this deck spends turns creating, and it costs {3}{B} to then recast the body. |
| Unbury | Same objection: it returns creature cards to hand, not to the battlefield, taking them out of the zone Reaping Willow and Dose of Dawnglow read from. |
| Dawn-Blessed Pennant | 'Return target card of the chosen type from your graveyard to your hand' — but this deck has no dominant creature type to name; the best naming reaches 6 of 23 nonlands, the same problem that excluded Eclipsed Realms. |
| Shore Lurker | 'When this creature enters, surveil 1' on a 3/3 flier for {3}{W} — a fine card, but Foraging Wickermaw gives the same surveil for 2 mana AND fixes the colours, which this pair needs more than a flier. |
| Prideful Feastling / Flock Impostor | Changeling bodies that would raise the Merfolk count for Meanders Guide, but neither mills, blights, nor reanimates — they only matter as a package with Meanders Guide, which was itself excluded on the Merfolk count. |
| Personify | 'Exile target creature you control, then return that card to the battlefield' — this RESETS a blighted creature's counters back on, which is backwards: this deck spends its effort shedding them. |
| Goldmeadow Nomad / Evershrike's Gift | Both recur themselves from the graveyard, but into a 1/1 token and a +1/+0 aura respectively — far below the 5/5 bodies this deck's reanimation is aimed at. |
| Darkness Descends | Maindeck it is a liability against creature-light draws, but it is genuinely asymmetric in this deck's favour and is in the SIDEBOARD: 'put two -1/-1 counters on each creature' leaves a 5/5 as a 3/3 while killing tokens outright. |
| Spiral into Solitude | '{1}{W}, Blight 1, Sacrifice this Aura: Exile enchanted creature' — a two-card, two-turn answer where Crib Swap exiles immediately for the same mana. |
| Bark of Doran | 'it assigns combat damage equal to its toughness rather than its power' is a real fit for blighted bodies with high toughness (Reaping Willow 3/6, Blighted Blackthorn 3/7), but it is an Equipment that does nothing on an empty board in a deck already at 16 creatures. |
| Ajani, Outland Chaperone / Morningtide's Light / Kinbinding / Winnowing / Curious Colossus | All rare or mythic W cards with no graveyard or blight text; none advances the reanimation thesis, and the 5-rare budget is better spent on Twilight Diviner, Rhys and Eirdu. |
| Moonshadow | 7/7 for {B}, but 'Whenever ONE OR MORE permanent cards are put into your graveyard ... remove A -1/-1 counter' is one counter per event, so it needs six separate mill events; this deck has only 4 mill/surveil sources. |
| Gutsplitter Gang | 6/6 for {3}{B} whose 'blight 2' would reload Reaping Willow, but at mana value 4 it is outside every capped reanimator's reach — it can only ever come back off Dose of Dawnglow. |
| Eirdu, Carrier of Dawn // Isilu, Carrier of Twilight | CUT at Phase 9. Persist returns a creature only 'if it had no -1/-1 counters on it', and 8 of the 16 creature copies here enter WITH counters, so the grant is inert on half the board. It was also the deck's only double-coloured cost ({W}{W}) in the cube's thinnest colour pair. Cutting it removed both problems and freed the slots the blight engine needed. |
| Darkness Descends | CUT from the sideboard at Phase 9 and it is a trap here, not merely weak: computed on printed stats it looks asymmetric in this deck's favour, but this deck's creatures are already carrying counters. 'Put two -1/-1 counters on each creature' kills 9 of its own 16 creature copies, including every two-drop. Winnowing replaces it because sacrificing by shared creature type does not interact with counters at all. |
| Moonshadow | Mana value 1, so it is the cheapest legal Reaping Willow target in the pool, and 'whenever one or more permanent cards are put into your graveyard from anywhere' is fed by creature deaths as well as mill. Declined because it needs six separate shed events against this deck's 6 mill/surveil copies, and because reanimating it returns it with all six counters again. |
| Dawnhand Dissident | '{T}, Blight 1: Surveil 1' is simultaneously repeatable self-mill and a repeatable Willow reload at mana value 1. Genuinely close; declined because it blights only 1 where Reaping Willow's cost is two counters, so it takes two full turns to enable one activation. |
| Retched Wretch | 'When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield' turns surplus blight into free recursion, but the returned body 'loses all abilities' and is a vanilla 4/2; the slot went to a blight source instead, which the engine needed more. |
| Dawnhand Eulogist | 'When this creature enters, mill three cards' is the largest single self-mill available and its Elf clause is live off 10 of 23 nonland copies. Declined at mana value 4 in a deck that already sits at avg MV 2.96 and needed its remaining slots for blight rather than fuel. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.96   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.45 adj [MV 2.96 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  75.0%  prod  70.6%  gap  +4.4pp  [OK]
  W  demand  25.0%  prod  29.4%  gap  -4.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1 deck size - mainboard 40 (want 40)
[PASS] 1 sideboard size - sideboard 10 (want 10)
[PASS] 2 exact-name membership - all 24 entries found
[PASS] 3 copy limits - all within card_pool_rules
[PASS] 4 colour usability (best_mode) - all nonland cards usable in ['W', 'B']+[]
[PASS] 5 splash cap - no splash colours declared
[PASS] 6 rare/mythic budget <=5 - 3 used: ['Rhys, the Evermore x1', 'Twilight Diviner x1', 'Winnowing x1']
```
