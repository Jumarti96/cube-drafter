---
deck_name: "ub-sheoldred-attrition"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-08-17T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x8   Island                      basic
  x5   Swamp                       basic
  x2   Contaminated Aquifer        Island Swamp, enters tapped
  x2   Geothermal Bog              Swamp Mountain, enters tapped
```

### CREATURES (6)

```
CMC  Card                        Qty   Color  Role                                             Rar
  2  Vohar, Vodalian Desecrator  x1    BU     Engine — repeatable filtering + graveyard rebuy  U
  3  Haughty Djinn               x1    U      Threat — evasive clock + cost reducer            R
  4  Ertai Resurrected           x1    BU     Interaction — flash catch-all + body             R
  4  Sheoldred, the Apocalypse   x1    B      Threat — primary inevitability engine            M
  7  Tolarian Terror             x2    U      Threat — self-discounting finisher               C
```

### INSTANTS & SORCERIES (15)

```
CMC  Card                        Qty   Color  Role                                             Rar
  1  Cut Down                    x2    B      Interaction — one-mana removal                   U
  1  Rona's Vortex               x2    U      Interaction — bounce, kicked to library bottom   U
  2  Essence Scatter             x2    U      Interaction — counterspell                       C
  2  Impulse                     x2    U      Engine — card selection                          C
  2  Silver Scrutiny             x1    U      Engine — scaling refuel                          R
  2  Tribute to Urborg           x2    B      Interaction — scaling -X/-X removal              C
  3  Shadow Prophecy             x1    B      Engine — instant-speed double dig                C
  4  Drag to the Bottom          x1    B      Interaction — scaling sweeper                    R
  4  Extinguish the Light        x2    B      Interaction — unconditional removal              C
```

### OTHER SPELLS (2)

```
CMC  Card                        Qty   Color  Role                                             Rar
  2  Founding the Third Path     x2    U      Engine - free spells + graveyard fuel            U
```

## SIDEBOARD (10)

```
Card                        Qty   Color  Role / When to board in                              Rar
Battlefly Swarm             x2    B      Defence - one-mana flying deathtouch blocker — In vs the cube 30 flying creatures. For {B} it blocks any flier and {B}: gains deathtouch kills it regardless of size.  [C]
Negate                      x2    U      Interaction — counterspell — Against the cube's 18 enchantments and 6 sweepers; in vs any deck whose key cards are Sagas or noncreature permanents that my creature removal cannot touch.  [C]
Academy Wall                x2    U      Defence — ground blocker + filtering — In vs ground aggro. My mainboard removal is all black and does not care about flying, so this only has to cover the ground, which a 0/5 defender does.  [C]
Ertai's Scorn               x2    U      Interaction — unconditional counterspell — In vs control mirrors and vs decks whose threats are noncreature; 'costs {U} less if an opponent cast two or more spells this turn' makes it cheapest exactly against the decks that try to go over the top.  [U]
Talas Lookout               x2    U      Threat — evasive clock, self-replacing — In vs control mirrors and grindy midrange where spot removal is dead: a 3/2 flier that replaces itself when it trades adds a clock without adding a dead card.  [C]
```

## ANALYSIS

### DECK IDENTITY

A UB reactive-attrition control deck. Twelve of its twenty-three nonland cards are removal or counterspells across seven distinct names, stripping the board one-for-one until Drag to the Bottom resets it - and because the mana base runs Geothermal Bog for a third basic land type, that reset is -4/-4, killing 133 of the cube's 157 creatures. The graveyard those spells leave behind is fuel rather than waste: Founding the Third Path mills four at a time, discounting Tolarian Terror toward a three-mana 5/5 with ward 2 and setting Haughty Djinn's power. Sheoldred, the Apocalypse closes from the other side, turning the opponent's own draw step into 2 damage a turn behind a 4/5 deathtouch wall.

### THE MANA BASE IS A SPELL

The single most consequential card in this list is a common land. `Drag to the Bottom` reads "Domain — Each creature gets -X/-X until end of turn, where X is 1 plus the number of basic land types among lands you control." A plain Island/Swamp base gives 2 basic types and X = 3. `Geothermal Bog`'s type line is `Land — Swamp Mountain` and it taps for "{B} or {R}" — so it replaces a basic Swamp with **zero black-source loss** while adding a third basic type.

Measured against the cube by script:

| Domain count | Drag to the Bottom | Cube creatures killed |
|---|---|---|
| 2 basic types (Island, Swamp) | −3/−3 | 106 of 157 (68%) |
| **3 basic types (+ Geothermal Bog)** | **−4/−4** | **133 of 157 (85%)** |
| 4 basic types (+ Tangled Islet too) | −5/−5 | not pursued — needs two specific 2-copy commons on the battlefield at once, and 6 of 17 lands entering tapped |

Two stated costs, not hidden: four of seventeen lands now enter tapped, and at −4/−4 this deck's own `Haughty Djinn` (a `*/4`) dies to its own sweeper — own-board survival goes from 4 of 6 creature copies to 3 of 6. `Sheoldred` (4/5) and both `Tolarian Terror` (5/5) still live through it.

### THE GRAVEYARD IS THE ENGINE AND THE THREAT, AND THEY ARE THE SAME CARDS

Fifteen of the twenty-three nonland cards are instants or sorceries. Three cards in the list read directly off that number:

- `Tolarian Terror` — "costs {1} less to cast for each instant and sorcery card in your graveyard"
- `Haughty Djinn` — "power is equal to the number of instant and sorcery cards in your graveyard"
- `Tribute to Urborg` kicked — "an additional -1/-1 until end of turn for each instant and sorcery card in your graveyard"

And one card actively manufactures that resource. `Founding the Third Path` is a two-mana uncommon whose chapter II reads "Target player mills four cards" — aimed at yourself, that is roughly 2–3 qualifying cards, which is simultaneously a {2}–{3} discount on *each* Tolarian Terror and +2–3 power on the Djinn. Its chapter I ("You may cast an instant or sorcery spell with mana value 1 or 2 from your hand without paying its mana cost") hits **11 of the 15** instants and sorceries in this list, and its chapter III copies one back out of the graveyard.

That is unusual for a control deck. Filtering is normally pure overhead — cards spent to find other cards. Here every card binned is also a discount and a point of power.

**A correction worth recording:** an earlier draft of this deck's derivation credited `Shadow Prophecy` with the same graveyard-filling job. It does not do that job at 2 basic land types — "Put up to two of them into your hand and the rest into your graveyard" leaves a remainder of exactly zero when X = 2. It bins one card only once a Geothermal Bog is out. The claim was false, the Challenger caught it, and the card was cut from 2 copies to 1.

### WHAT THIS DECK ANSWERS, AND WHAT IT SIMPLY CANNOT

Twelve interaction cards across seven distinct names, so no single answer is load-bearing. `Cut Down` at one mana kills 87 of the cube's 157 creatures (55%). `Extinguish the Light` and `Ertai Resurrected` are unconditional and both hit planeswalkers. Black removal does not care about flying, which matters in a cube where evasion is the largest threat class at 51 cards (20.7%).

The gap is honest and structural. **No mono-blue or mono-black card in this pool destroys or exiles a resolved artifact or enchantment** — the cube's artifact-answer roster is BG/G/R only and its enchantment-answer roster is BG/G/W only. Against the 15 artifacts and 18 enchantments in this cube, this deck's only recourse is to counter them before they resolve, which is what `Negate` ×2 is doing in the sideboard. Mitigating properly would mean leaving UB.

### WHY FOUR THREATS AND NOT TWO

The shape judge cut `Liliana of the Veil` from the winning sketch on the grounds that "+1: Each player discards a card" is symmetric against a deck holding twelve answers — it is structurally the player with the fuller hand. That left the build with `Sheoldred` as a lone finisher, which is a decapitation risk with no answer.

The freed mythic slot bought a second and third threat instead: `Haughty Djinn` as the rare and `Tolarian Terror` ×2 at common, which cost nothing against the five-card rare budget. The clock is now four bodies across three names. Answering Sheoldred leaves two Terrors and a Djinn to win the same game a turn or two later — which is exactly why the thesis turn is 9 rather than 6.

### THE RARE BUDGET FAVOURED THIS PIPELINE

Worth noting against the sibling UW build: **every land in this deck is a common**. `Contaminated Aquifer` and `Geothermal Bog` are both commons, so the entire mana base costs zero of the five rare/mythic slots. The UW build had to spend one on `Adarkar Wastes` because it is the pool's only untapped WU dual. All five of this deck's rare slots are spells that act: `Sheoldred`, `Drag to the Bottom`, `Ertai Resurrected`, `Silver Scrutiny`, `Haughty Djinn`.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:4  2:10  3:2  4:5  7:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.8: Haughty Djinn@0.8) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 9.2: Cut Down@0.6, Cut Down@0.6, Tribute to Urborg@0.6, Tribute to Urborg@0.6, Rona's Vortex@0.7, Rona's Vortex@0.7, Essence Scatter@0.7, Essence Scatter@0.7) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 56%  T2 97%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Drag to the Bottom, Tolarian Terror
  OK        single_large_threat: Extinguish the Light, Rona's Vortex, Ertai Resurrected, Essence Scatter
  CONCEDED  noncreature_permanents: Partial by necessity. Planeswalkers ARE answered - Extinguish the Light ('Destroy target creature or planeswalker'), Ertai Resurrected ('Destroy another target creature or planeswalker') and kicked Rona's Vortex (to the bottom of the library). Resolved artifacts and enchantments are not: the dossier's artifact-answer roster is BG/G/R only and its enchantment-answer roster is BG/G/W only, so no mono-blue or mono-black card in this pool destroys or exiles either. The pre-resolution answer is sideboard Negate x2; mitigating post-resolution would require leaving UB.
  OK        stack: Essence Scatter, Ertai Resurrected
  CONCEDED  graveyard: No card in U or B in this pool exiles cards from an opponent's graveyard (verified against oracle text; the dossier structural census reports 0 graveyard hate cube-wide). Kicked Rona's Vortex is the closest analogue - it puts a permanent on the bottom of its owner's library rather than into the graveyard, denying recursion for the single most important threat.
```

- No WARN flags were raised. Curve PASS, goldfish PASS (83% keepable against an 80% threshold, 89% to 3 lands by turn 3, 56% turn-1 play), assembly PASS on both roles (payoff 3.8 reliability-weighted copies p=0.80; enabler 9.2 weighted copies p=0.98), coverage PASS with two declared concessions.
- The curve shows nothing at mana value 5 or 6 and two cards at 7. That is Tolarian Terror x2 registering at its printed cost; with 15 instants and sorceries plus Founding the Third Path's mill, the real curve tops out around 4.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Silver Scrutiny is {X}{U}{U} reading 'Draw X cards', castable as though it had flash while X is 3 or less, so surplus lands become cards without leaving draw-go. Two kickers give spare mana a floor: Rona's Vortex {2}{B} upgrades bounce to library-bottom, Tribute to Urborg {1}{U} adds -1/-1 per instant and sorcery in the graveyard. Vohar's '{2}, Sacrifice Vohar: You may cast target instant or sorcery card from your graveyard this turn' is a late-game sink that rebuys the best answer already spent, and Tolarian Terror x2 at a printed {6}{U} genuinely wants the extra lands when the graveyard is thin. |
| screw | mitigation | Goldfish reports 83% keepable hands and 89% to 3 lands by turn 3 at 17 lands. Impulse x2 digs four deep at instant speed. Two-land hands are genuinely live because this build's interaction starts at one mana: Cut Down {B} and Rona's Vortex {U} are both real answers on turn 1, which is why goldfish reports a 56% turn-1 play rate. |
| decapitation | mitigation | Repaired at the list level rather than in prose. Cutting Liliana of the Veil freed the slot for a second and third threat, so the clock is 4 bodies across 3 distinct cards (Sheoldred, Haughty Djinn, Tolarian Terror x2) rather than one mythic. On the answer side no single removal spell is load-bearing: 12 interaction cards across 7 distinct names. |
| gas-out | mitigation | 8 of 23 nonland cards draw, replace themselves, or manufacture cards: Impulse x2, Founding the Third Path x2 (chapter I casts a spell for free, chapter III copies one from the graveyard), Shadow Prophecy, Silver Scrutiny, Vohar (repeatable every turn), and Ertai Resurrected leaves a 3/2 body behind its answer. Once Sheoldred is on the battlefield every one of those draws is also 2 life, so refuelling and stabilising are the same action. |
| raced | accepted | This deck is slower off the mark than the cube's aggro decks and mitigating it properly would cost the plan. Its cheap interaction is real - Cut Down at {B} kills 87 of the cube's 157 creatures and Rona's Vortex at {U} bounces anything - but Drag to the Bottom, the only true sweeper, does not arrive until turn 4, and the blockers (Tolarian Terror x2 at an effective 3-4 mana, Sheoldred 4/5) are all turn-4-and-later. Four of seventeen lands now enter tapped, which makes the early turns slower still. The cost of mitigating: the slots would have to come from the 12-card interaction suite that IS the locked kill mechanism, or from the 15 instants and sorceries that make Tolarian Terror and Haughty Djinn castable at all. Sideboard Battlefly Swarm x2 ({B}, 'Flying / {B}: This creature gains deathtouch until end of turn') and Academy Wall x2 are the boarded concessions, covering the air and the ground respectively. |
| disruption-fizzle | mitigation | There is no critical turn to disrupt; this is attrition, not a combo, and no card in the list carries a Cards: Extra-Cost or Board: Sacrifice-Cost dependency. The single most disruptable moment is resolving Sheoldred into an open board, and the answer is that the deck does not need her - Tolarian Terror x2 wins the same game more slowly. Ertai Resurrected ('Flash / Counter target spell, activated ability, or triggered ability') can protect the turn at instant speed while representing removal if it is not needed. |

### COUNT-DEPENDENT VERDICTS

| Card | Verdict | Count against this list |
|---|---|---|
| Founding the Third Path | INCLUDE x2 (added in grill repair) | 'I - You may cast an instant or sorcery spell with mana value 1 or 2 from your hand without paying its mana cost' hits 11 of this list's 15 instants and sorceries (73%): Cut Down x2, Rona's Vortex x2, Tribute to Urborg x2, Essence Scatter x2, Impulse x2, Silver Scrutiny. 'II - Target player mills four cards' aimed at yourself is up to {4} off Tolarian Terror's printed {6}{U} and up to +4 power on Haughty Djinn from a two-mana card. 'III - Exile target instant or sorcery card from your graveyard. Copy it' rebuys the best of the spent answers without sacrificing a body, which is Vohar's function at no body cost. Uncommon, so 2 copies cost nothing against the 5-rare cap. |
| Tolarian Terror | INCLUDE x2 | 'This spell costs {1} less to cast for each instant and sorcery card in your graveyard.' This list runs 15 instants and sorceries of 23 nonland cards (65%), and Founding the Third Path x2 actively mills 4 more at a time. A control deck that has spent 3-4 answers by turn 5 casts a 5/5 with ward {2} for {3}{U} or {2}{U}. Common, so 2 copies cost nothing against the cap. |
| Haughty Djinn | INCLUDE (1 copy, rare slot 5 of 5) | 'power is equal to the number of instant and sorcery cards in your graveyard' and 'Instant and sorcery spells you cast cost {1} less to cast.' Both halves key off the same 15 of 23 instants and sorceries (65%) plus whatever Founding the Third Path mills. Stated cost: at 4 toughness it now DIES to this deck's own Drag to the Bottom whenever a Geothermal Bog is on the battlefield (-4/-4), which is the price of the domain upgrade. |
| Drag to the Bottom | INCLUDE | 'Each creature gets -X/-X, where X is 1 plus the number of basic land types among lands you control.' With Geothermal Bog on the battlefield this list controls 3 of 5 basic land types (Island, Swamp, Mountain), so X = 4. Verified by script against the cube: -4/-4 kills 133 of the 157 creatures in the cube (85%); without a Bog it is -3/-3 and kills 106 of 157 (68%). Against this deck's own board at -4/-4 it kills 3 of 6 creature copies (Ertai Resurrected 3/2, Vohar 1/2, Haughty Djinn */4) and leaves 3 standing (Sheoldred 4/5, Tolarian Terror x2 5/5). |
| Cut Down | INCLUDE x2 | 'Destroy target creature with total power and toughness 5 or less.' Verified by script against the cube: 87 of 157 creatures (55%) qualify. One mana for a majority of the format's creatures, and its conditionality is priced into the assembly check at weight 0.6. |
| Vohar, Vodalian Desecrator | INCLUDE | '{T}: Draw a card, then discard a card. If you discarded an instant or sorcery card this way, each opponent loses 1 life and you gain 1 life.' The drain condition hits when the discarded card is an instant or sorcery: 15 of 23 nonland cards qualify (65%). It also fills the graveyard that discounts Tolarian Terror and sizes Haughty Djinn, and every draw it makes is 2 life once Sheoldred is out. |
| Shadow Prophecy | INCLUDE x1 (cut from 2 in grill repair) | 'Look at the top X cards, where X is the number of basic land types among lands you control. Put up to two of them into your hand and the rest into your graveyard.' With a Geothermal Bog out, X = 3: look at 3, take 2, bin 1. Without one, X = 2: look at 2, take 2, bin 0 - which is why the earlier claim that this card fed the graveyard engine was false and has been corrected. Held at 1 copy because Founding the Third Path fills the graveyard role far better for one less mana. |
| Liliana of the Veil | EXCLUDE | '+1: Each player discards a card' is symmetric, and this list holds 12 interaction cards of 23 nonlands (52%) - it is structurally the player with the fuller hand of answers, so the symmetric discard costs this deck more. Cut on the shape judge's finding; the mythic slot went to a second threat. |
| Micromancer | EXCLUDE | 'search your library for an instant or sorcery card with mana value 1' - this list runs 4 mana-value-1 instants and sorceries of 23 nonland cards (Cut Down x2, Rona's Vortex x2). Paying four mana for a 3/3 that finds a one-mana removal spell is a losing rate for a deck whose problem is never finding removal - it runs 12 interaction cards already. |
| Monstrous War-Leech | EXCLUDE | 'power and toughness are each equal to the greatest mana value among cards in your graveyard.' This list's highest printed mana value outside Tolarian Terror is 4 (Extinguish the Light, Drag to the Bottom, Ertai Resurrected, Sheoldred), so it is realistically a 4/4 for four with no evasion, no ward and no ability. Tolarian Terror is a 5/5 with ward {2} for less. |
| Rona, Sheoldred's Faithful | EXCLUDE | 'Whenever you cast an instant or sorcery spell, each opponent loses 1 life' would trigger off 15 of 23 nonland cards (65%) - the effect is real. Excluded on mana: {1}{U}{B}{B} demands UBB on turn 4 on a base whose only free dual is a single common, against a turn-4 slot already contested by Sheoldred, Drag to the Bottom and Extinguish the Light. |
| Cosmic Epiphany | EXCLUDE | 'Draw cards equal to the number of instant and sorcery cards in your graveyard' at {4}{U}{U} would be a large draw here by turn 8 - but it costs a rare slot against a full cap, and Silver Scrutiny scales the same way at instant speed for less. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Liliana of the Veil | '+1: Each player discards a card' is symmetric, and a control deck holding answers is the side that loses more; '−2: Target player sacrifices a creature' lets the opponent choose. Costs a mythic slot the 5-rare cap needs for removal. |
| The Cruelty of Gix | 'III — Put target creature card from a graveyard onto the battlefield under your control' — three turns of setup for a reanimation the deck's own removal has been exiling nothing into; costs a rare slot. |
| Braids, Arisen Nightmare | 'you may sacrifice an artifact, creature, enchantment, land, or planeswalker. If you do, each opponent may sacrifice a permanent that shares a card type' — needs a steady stream of expendable permanents; a draw-go deck's board is deliberately empty. |
| Rona, Sheoldred's Faithful | 'Whenever you cast an instant or sorcery spell, each opponent loses 1 life' at {1}{U}{B}{B} — the triple-coloured cost is the problem, not the effect: UB fixing here is one free dual. |
| Academy Loremaster | 'At the beginning of each player's draw step, that player may draw an additional card. If they do, spells they cast this turn cost {2} more' — symmetric, and with Sheoldred the opponent simply declines the draw, turning off both halves. |
| Bone Splinters | 'As an additional cost to cast this spell, sacrifice a creature' — this deck's creature count is low and its creatures are the win condition; the cost is not fed. |
| Writhing Necromass | 'costs {1} less to cast for each creature card in your graveyard' — this deck runs few creatures, so the discount is small; Tolarian Terror keys off instants and sorceries instead, which this deck has in quantity. |
| Sengir Connoisseur | 'Whenever one or more other creatures die, put a +1/+1 counter on this creature' — a grow-by-attrition body in a deck that removes creatures by exile-equivalent bounce and -X/-X, and it starts as a 3/3 for five. |
| Tyrannical Pitlord | 'As this creature enters, choose another creature you control... When this creature leaves the battlefield, sacrifice the chosen creature' — requires a second creature on board and costs a rare slot; a control deck's board is empty. |
| The Raven Man | '{3}{B}, {T}: Each opponent discards a card. Activate only as a sorcery' — five mana per card of discard, and the token half needs a discard to have happened; too slow for a rare slot. |
| Monstrous War-Leech | 'power and toughness are each equal to the greatest mana value among cards in your graveyard' — this deck's top mana value is small, so the body is small; it also has no evasion. |
| Evolved Sleeper | Its final mode '{1}{B}{B}: put a +1/+1 counter on it, then you draw a card and you lose 1 life' is a real mana sink, but reaching it costs {B} + {1}{B} + {1}{B}{B} across turns on a 1/1 that any removal answers; costs a rare slot. |
| Choking Miasma | Cube-wide sweeper by the census, but it is a BG card and outside this identity. |
| Karn's Sylex | '{X}, {T}, Exile Karn's Sylex: Destroy each nonland permanent with mana value X or less' — enters tapped and needs X mana on top; a mythic slot for a slower version of a sweeper this deck already has in Drag to the Bottom. |
| Thran Portal | 'As this land enters, choose a basic land type' — would raise the domain count that sizes Drag to the Bottom and Shadow Prophecy, but costs a rare slot and 1 life per mana activation. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' - only 4 of 23 nonland cards qualify (Cut Down x2, Rona's Vortex x2); a four-mana 3/3 fetching a one-mana spell is a losing rate for a deck already running 12 interaction cards. |
| Monstrous War-Leech | 'power and toughness are each equal to the greatest mana value among cards in your graveyard' - this list's highest printed mana value outside Tolarian Terror is 4, so it is a vanilla 4/4 for four with no evasion or ward. |
| Phyrexian Rager | 'When this creature enters, you draw a card and you lose 1 life' - a fine turn-3 blocker, but adding it costs exactly the interaction or engine slot the raced acceptance already names as the price of mitigating. |
| Phyrexian Espionage | 'Draw two cards. If kicked, each opponent discards a card' - cut during grill repair to make room for Founding the Third Path, which produces cards AND graveyard fuel for one less mana. |
| Pilfer | 'Target opponent reveals their hand. You choose a nonland card from it' - cut from the sideboard for Battlefly Swarm; a sorcery-speed one-for-one against a cube whose census reports 0 rituals answers less than a one-mana flying deathtouch blocker does against its 30 flying creatures. |
| Tangled Islet | 'Land - Forest Island' - would add a fourth basic land type alongside Geothermal Bog's Mountain, taking Drag to the Bottom to -5/-5, but reaching that needs both 2-copy commons on the battlefield at once and would put 6 of 17 lands entering tapped. |
| Sunlit Marsh | 'Land - Plains Swamp' - mechanically interchangeable with Geothermal Bog for reaching a third basic type; only one such land is needed and running both doubles the tapped-land count for no additional Domain. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.37 adj [MV 2.78 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  48.4%  prod  52.9%  gap  -4.5pp  [OK]
  U  demand  51.6%  prod  58.8%  gap  -7.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [INFO] base: cube_mainboard only - every card verified by exact name against the working pool cache
  [PASS] commons_uncommons_max_2: PASS - no card exceeds 2 copies except basic lands
  [PASS] rares_mythics_max_1: PASS - all five rare/mythic cards are singletons
  [PASS] rare_mythic_total_max_5: PASS - exactly 5: Sheoldred, the Apocalypse (M), Haughty Djinn (R), Drag to the Bottom (R), Ertai Resurrected (R), Silver Scrutiny (R). All five are mainboard spells; the mana base costs zero rare slots because every land in it is a common. Sideboard contains zero rares.
  [PASS] basics_unlimited: PASS - 8 Island, 5 Swamp, format-supplied and exempt
  [PASS] colour_identity: PASS - every nonland card usable in UB via effective_cost.best_mode. Geothermal Bog's printed identity includes R, which this deck never spends; it is in the list as a Swamp that also carries a Mountain type.
```
