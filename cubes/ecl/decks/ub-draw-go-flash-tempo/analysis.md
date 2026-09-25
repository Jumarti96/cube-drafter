---
deck_name: "ub-draw-go-flash-tempo"
cube_id: "ecl"
cube_slug: "ecl"
colors: "UB"
format: "40-card"
built_at: "2026-08-09T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  8x Island                untapped blue source
  5x Swamp                 untapped black source
  2x Contaminated Aquifer  UB dual, enters tapped
  2x Eclipsed Realms       {C}, or any colour for Faerie spells (17 of 23 nonland cards)
```

### CREATURES (15)

```
CMC  Card                    Qty   Color  Role                                                                                                                        Rar
  1  Flitterwing Nuisance    x1    U      1-mana evasive body (2/2 flier entering with a -1/-1 counter); late-game mana sink converting connecting fliers into cards  R
  2  Bitterbloom Bearer      x1    B      flash 1/1 flier that creates a 1/1 flying Faerie every upkeep                                                               M
  2  Glamer Gifter           x2    U      flash 1/2 flier; ETB sets a creature to base 4/4 (pump a flier, or shrink an opposing 5/5)                                  U
  2  Unwelcome Sprite        x2    U      opponent-turn payoff (surveil 2) on a 2/1 flying body                                                                       U
  3  Glamermite              x2    U      flash 2/2 flier; ETB taps a blocker or untaps a creature                                                                    C
  3  Glen Elendra Guardian   x1    U      flash 3/4 flier whose {1}{U} activation counters a noncreature spell                                                        R
  3  Voracious Tome-Skimmer  x2    UB     the pipeline payoff; draws a card per opponent-turn cast on a 2/3 flier                                                     U
  4  Dream Seizer            x2    B      3/2 flier; ETB blight 1 makes each opponent discard                                                                         C
  4  Nightmare Sower         x2    B      opponent-turn payoff (-1/-1 counter) on a 2/3 flying lifelink body                                                          U
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                Qty   Color  Role                                                               Rar
  1  Requiting Hex       x1    B      1-mana instant removal for creatures mana value 2 or less          U
  1  Spell Snare         x2    U      1-mana counter for mana-value-2 spells                             U
  2  Nameless Inversion  x2    B      2-mana instant removal (+3/-3)                                     U
  2  Wild Unraveling     x1    U      unconditional counterspell                                         C
  4  Swat Away           x1    U      tucks a spell or a resolved creature; {U}{U} while being attacked  U
```

### OTHER SPELLS (1)

```
CMC  Card             Qty   Color  Role                                                                 Rar
  2  Noggle the Mind  x1    U      flash Aura; blanks any creature to a vanilla 1/1 regardless of size  U
```

## SIDEBOARD (10)

```
Card                   Qty   Color  Role / When to board in                                                                                                                      Rar
Blight Rot             x2    B      Board in when the opponent's threats exceed mana value 2 (green/white creature decks, Treefolk, Giants) so Requiting Hex is dead.            C
Darkness Descends      x2    B      Wide ground boards (Goblins, Warriors, Kithkin, token swarms). Kills 10 of your own 15 creatures, so board it in only when behind on board.  U
Temporal Cleansing     x2    U      Board in against decks with a key artifact or enchantment (Gathering Stone, Boggart Mischief, Mornsong Aria, Voltron auras).                 C
Disruptor of Currents  x1    U      Resolved artifacts, enchantments or a stuck bomb permanent; convoke off 15 creatures makes it a 2-3 mana flash play.                         R
Rooftop Percher        x2    C      Board in against any graveyard deck (the cube's densest threat class, 39 cards / 15%): Reanimator, Self-Mill, Flashback/GY-Cast.             C
Deceit                 x1    UB     Board in against combo or control where stripping the single key card matters more than a body; evoke for {B}{B} to take a nonland card.     M
```

## ANALYSIS

### DECK IDENTITY

A UB draw-go flier deck. Every creature in the mainboard has flying, and the three 'whenever you cast a spell during an opponent's turn' Faeries (Unwelcome Sprite, Voracious Tome-Skimmer, Nightmare Sower — 6 copies) convert held-up mana into card selection, cards, and incremental removal. The deck holds mana open and spends it on the opponent's turn with 8 instant-speed answers and 6 flash creatures, so interaction and engine are the same action rather than competing for slots. It wins in the air behind that interaction, on a clock that starts turn 1 and closes around turn 7.

### HOW THE DECK ACTUALLY PLAYS

The load-bearing fact is that **interaction and engine are the same action here.** Fourteen of the 23 nonland cards — 8 instant-speed answers plus 6 flash creatures — are castable on the opponent's turn, and every one of them fires whichever of the 6 opponent-turn payoff copies is on the battlefield. Holding mana open is therefore never a blank turn, which is the usual tax a draw-go deck pays.

| Opponent-turn cast | What the payoff converts it into |
|---|---|
| Any of the 14 | Unwelcome Sprite: surveil 2 |
| Any of the 14 | Voracious Tome-Skimmer: pay 1 life, draw a card |
| Any of the 14 | Nightmare Sower: a -1/-1 counter on any creature |

**Every mainboard creature flies — 15 of 15.** That is the whole kill mechanism, and it is why cards a generic UB deck would want (Mischievous Sneakling, Loch Mare, Silvergill Peddler) are absent: a ground body advances none of the 20 damage.

### THE BLIGHT LOOP NOBODY PLANNED

The deck has an interaction the sketchers did not design and the grill surfaced. Four cards put -1/-1 counters on **your own** creature as a cost or a rider — Requiting Hex (`you may blight 1`), Wild Unraveling (`blight 2 or pay {1}`), and Dream Seizer x2 (`you may blight 1`). Glen Elendra Guardian is base **3/4** and its ability reads `{1}{U}, Remove a counter from this creature: Counter target noncreature spell.` So those blight riders, which look like pure downside, are **reloads**: Guardian survives three counters, turning a one-shot counterspell into up to four. Point every optional blight at the Guardian, never at a 2/1 Sprite.

The same logic runs in reverse in the sideboard: when Darkness Descends resolves it puts two counters on Guardian, handing it two extra activations on the turn you most need them.

### PLAY PATTERN

Lead on a flier, then stop developing on your own turn. From turn 3 onward the default is: attack, pass with mana up, and spend it on their turn. Requiting Hex and Spell Snare are the cheapest triggers; Noggle the Mind is the answer held for the creature the other removal cannot touch — `Nameless Inversion` misses 64 of the pool's 168 creatures on toughness alone, and `Requiting Hex` misses 113 of 168 on mana value.

### KNOWN SOFT SPOT

Ten of the 15 creatures have toughness 2 or less. Against the cube's wide ground tribes the deck is racing, not blocking, and the sideboard is where that gets addressed — Darkness Descends is the only sweeper in the pool a UB deck can cast, and it is deliberately not maindecked because it kills 10 of your own 15 creatures.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (23 nonland):  1:4  2:9  3:5  4:5
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.8: Nightmare Sower@0.9, Nightmare Sower@0.9) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 14 copies (effective 12.2: Spell Snare@0.5, Spell Snare@0.5, Requiting Hex@0.8, Noggle the Mind@0.95, Nameless Inversion@0.9, Nameless Inversion@0.9, Wild Unraveling@0.7, Swat Away@0.95) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 59%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: CORRECTED after the grill: the pool DOES contain a black sweeper — Darkness Descends {2}{B}{B}, 'Put two -1/-1 counters on each creature'. It is conceded in the MAINBOARD, not in the pool: two -1/-1 counters kill 10 of this deck's own 15 creatures and leave only 5 fliers standing, so maindecking it would cost the deck the very board the thesis converts into 20 damage in the air. It is a sideboard card here, boarded in against the cube's wide ground tribes (Goblins 21, Warriors 23, Kithkin 19).
  OK        single_large_threat: Noggle the Mind, Swat Away, Nameless Inversion, Requiting Hex
  CONCEDED  noncreature_permanents: CORRECTED after the grill: no MAINBOARD card answers a resolved noncreature permanent, but the pool is not empty in these colours — Temporal Cleansing ({3}{U}, tucks a nonland permanent), Disruptor of Currents ({3}{U}{U}, flash, bounces a nonland permanent) and Wanderwine Farewell ({5}{U}{U}) are all mono-blue. All three are sorcery-speed or 5+ mana; putting any in the mainboard costs a held-up-mana turn, which is the deck's core posture, so they sit in the sideboard. The mainboard's answer is to counter the permanent on the stack (Spell Snare, Wild Unraveling, Swat Away, Glen Elendra Guardian).
  OK        stack: Spell Snare, Wild Unraveling, Swat Away, Glen Elendra Guardian
  CONCEDED  graveyard: Graveyard interaction is the cube's densest threat class at 15% (39 cards) and the cube contains 0 dedicated graveyard-hate cards by census. The mainboard has no room for a 5-mana answer inside a 23-nonland tempo shell whose curve tops at 4; the plan is to be faster than a graveyard deck's payoff turn, and Rooftop Percher x2 ('exile up to two target cards from graveyards') carries it from the sideboard on a 3/3 flying body.
```
All four checks returned PASS; there are no WARN flags to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Bitterbloom Bearer carries this mode outright: 'At the beginning of your upkeep, you lose 1 life and create a 1/1 blue and black Faerie creature token with flying' — a body every turn with no card spent, regardless of what is drawn. Two mana sinks add to it, with the grill's correction applied: Glen Elendra Guardian's '{1}{U}, Remove a counter from this creature: Counter target noncreature spell' is REPEATABLE because the list's 4 blight sources (Requiting Hex, Wild Unraveling, Dream Seizer x2) reload counters onto its 3/4 body, while Flitterwing Nuisance's '{2}{U}, Remove a counter' is a ONE-shot — it is 2/2 and a second counter kills it. |
| screw | mitigation | The deck is keepable on two lands: 4 of 23 nonland cards cost 1 and 9 cost 2, and both Contaminated Aquifer ('Add {U} or {B}') and Eclipsed Realms produce two colours, so the second land is rarely the wrong one. Goldfish reports 87% keepable and 96% play-by-turn-2. Corrected after the grill: only ONE of the four 1-drops is a creature (Flitterwing Nuisance) — the other three are reactive instants — so a two-land hand deploys a turn-1 flier 1 time in 23 draws, not 5. The mode passes on the goldfish numbers, not on a turn-1 body. |
| decapitation | mitigation | There is no single key card. The opponent-turn payoff is spread across 6 copies of three different cards (Unwelcome Sprite x2, Voracious Tome-Skimmer x2, Nightmare Sower x2) and the assembly check puts P(seen by turn 7) at 0.89. Killing any one costs the opponent a removal spell and leaves the flying clock intact, because the other 9 fliers deal damage without any trigger at all. |
| gas-out | mitigation | Voracious Tome-Skimmer x2 is the refuel: 'Whenever you cast a spell during an opponent's turn, you may pay 1 life. If you do, draw a card' — Cards: Net-Positive, firing on each of the 8 instant-speed answers and 6 flash creatures (14 of 23 nonland cards). Unwelcome Sprite x2 surveils 2 per opponent-turn cast, converting dead draws into gas. Bitterbloom Bearer produces a body per turn with no card spent. Against an empty hand the deck still has a board that flies. |
| raced | accepted | The cube's fastest clocks are wide ground tribes (Goblins 21, Warriors 23, Kithkin 19 in the tribal rosters). Corrected after the grill on two counts: 10 of the 15 mainboard creatures have toughness 2 or less (not 6), so they die to almost any ground attacker they block; and the earlier claim that flying creatures cannot block the ground was unsupported — no oracle text says so, and Nightmare Sower's 2/3 lifelink body blocks a ground creature perfectly well. What remains is the real cost: mitigating properly means maindecking ground blockers or a sweeper, and every such card is a card that does not fly and therefore advances none of the 20 damage the thesis deals in the air; Darkness Descends specifically would kill 10 of my own 15 creatures. The concession is priced into the sideboard as a MASS effect after the grill showed single-target cards cannot answer a threat class defined by creature count — Darkness Descends x2 ('Put two -1/-1 counters on each creature') plus Blight Rot x2 for the single large attacker. |
| disruption-fizzle | mitigation | The critical turn is a combat step, not a spell, so there is no chain to interrupt. If the opponent counters or removes the flier being cast, the deck loses one body from a board of many: 15 creatures across 9 different cards. The swing turn itself is protected by 4 stack answers — Spell Snare x2, Wild Unraveling, Swat Away — plus Glen Elendra Guardian's 'Counter target noncreature spell', which answers instant-speed removal aimed at the attacking board. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Maralen, Fae Ascendant | Color identity {2}{B}{G}{U} — green is not in core_colors and no splash qualified, so it is uncastable here. |
| Disruptor of Currents | Rare, {3}{U}{U} flash bounce-on-a-body — a real fit, but the rare/mythic budget is 5 and it is the 6th-best of the R/M options at the highest cost. |
| Harmonized Crescendo | Rare instant, 'Draw a card for each permanent you control of that type' — rewards a wide board this build does not build; the Faerie count on board is typically 2-3, so it draws 2-3 for 6 mana. |
| Mirrorform | Mythic 6-mana instant; the deck's average board is small evasive bodies, so copying one produces no lethal turn, and it costs a scarce rare/mythic slot. |
| Rimefire Torque | Rare; needs three Faerie ETBs to charge before copying one instant — the build plays 12-13 Faeries but the artifact contributes nothing to the board or the clock while charging. |
| Champions of the Shoal | Rare Merfolk; 'behold a Merfolk and exile it' additional cost, and the deck runs 0 other Merfolk, so the cost cannot be paid without exiling the card itself. |
| Sunderflock | Rare, {7}{U}{U} reduced by the greatest Elemental mana value you control; the deck runs 0 Elementals, so the reduction is 0 and it costs 9. |
| Twilight Diviner | Rare; its copy trigger requires creatures that 'entered or were cast from a graveyard' — this build has no reanimation, so the trigger is blank. |
| Gloom Ripper | Rare; X = Elves you control plus Elf cards in your graveyard — the deck runs 0 Elves, so X is 0 except off Scarblade's Malice tokens. |
| Kulrath Mystic | 'Whenever you cast a spell with mana value 4 or greater' — 4 of the 23 nonland cards in this list are MV 4+, so it triggers on under a fifth of the deck. |
| Tanufel Rimespeaker | Same MV-4-or-greater denominator: 4 of 23 nonland cards qualify; a 2/4 for 4 that draws off a sixth of the deck does not beat a flier at that cost. |
| Pestered Wellguard | 'Whenever this creature becomes tapped, create a 1/1 blue and black Faerie' — a ground 3/2 that wants to attack, which fights draw-go; it is the Deck B build's engine, not this one's. |
| Omni-Changeling | 5-mana convoke copy effect; the best creature on the board is usually the opponent's, and tapping fliers to convoke undoes the draw-go posture. |
| Rime Chill | 'Vivid — costs {1} less for each color among permanents you control' — this deck reaches 2 colors, so it costs {4}{U} for a tap-two-and-draw. |
| Shinestriker | Vivid draw scales with colors among permanents; at 2 colors it draws 2 for 6 mana. |
| Deceit | Mythic {4}{U/B}{U/B} with 'Evoke {U/B}{U/B}' — evoking for 2 gets one mode and sacrifices the 5/5, and it spends a rare/mythic slot the counterspell suite needs more. |
| Dream Harvest | Rare 7-mana sorcery; sorcery speed contradicts the opponent-turn payoffs, which is the entire pipeline. |
| Silvergill Peddler | 'Whenever this creature becomes tapped, draw a card, then discard a card' — a ground 2/3 with no evasion; loots only by attacking or being convoked. |
| Glen Elendra's Answer | Cut from the mainboard during the grill: 'Create a 1/1 blue and black Faerie creature token with flying for each spell and ability countered this way' produces nothing against an empty stack, so it is a conditional blowout rather than a clock; it also spends one of the 5 capped rare/mythic slots on a stack-answer role already filled 4 deep. |
| Scarblade's Malice | Cut from the sideboard during the grill: 'Target creature you control gains deathtouch and lifelink until end of turn' answers exactly one creature, and the threat class it was boarded against (the cube's wide ground tribes — Goblins 21, Warriors 23, Kithkin 19) is defined by creature count. Replaced by a mass effect. |
| Thirst for Identity | Instant draw-3; 15 of the 23 nonland cards are creatures so its discard clause usually reads 'discard one'. Excluded because the engine slot is already 7 of 23 (30.4%), at the tempo band ceiling — adding it means cutting a flier, and every flier is the kill mechanism. |
| Mischievous Sneakling | 'Changeling / Flash' — a 2/2 flash body that is a Faerie, but it has no flying, so it advances 0 of the 20 damage the thesis deals in the air. |
| Dawnhand Dissident | Repeatable graveyard exile, but its activation cost is 'Blight 2' onto your own creature and 10 of the 15 mainboard creatures have toughness 2 or less, so each exile costs a flier — plus it consumes one of the 5 capped rare/mythic slots. |
| Bogslither's Embrace | 'Exile target creature' for 2 mana answers all 168 pool creatures, but it is a Sorcery: 0 of the 6 opponent-turn payoff copies trigger off it. |
| Barbed Bloodletter | Flash Equipment granting +1/+2 would lift 10 of 15 creatures out of the toughness-2 band, but the mainboard is exactly 40 and the only available cut is a flier. |
| Evolving Wilds | Its own oracle does not enter tapped — the FETCHED land does ('put it onto the battlefield tapped'). The real cost is producing no mana the turn it is cracked, which a draw-go deck holding up Spell Snare cannot afford; the deck is 2 colours with 4 nonbasic fixers already. |
| Blossombind | Sorcery-speed Aura — no flash clause, so it cannot be cast on the opponent's turn and triggers none of the three payoffs. |
| Temporal Cleansing | Sorcery — same reason; the payoffs read 'during an opponent's turn' and a sorcery can never satisfy them. |
| Auntie's Sentence | Sorcery; its -2/-2 mode is strictly slower than Nameless Inversion's instant +3/-3 at the same cost. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color' — tapping a flier to ramp is exactly the tempo cost draw-go cannot pay. |
| Stratosoarer | 5-mana 3/5 flier with basic landcycling; the flier is castable at sorcery speed only and the deck already has Illusion Spinners at 5 with pseudo-flash. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.19 adj [MV 2.48 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  37.5%  prod  47.1%  gap  -9.6pp  [OK]
  U  demand  62.5%  prod  64.7%  gap  -2.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
1a mainboard size                  PASS  40 (want 40)
1b sideboard size                  PASS  10 (want 10)
2 exact-name membership            PASS  all 25 names found
3 copy limits                      PASS  all within rarity multipliers
3b rare+mythic total <= 5          PASS  5 used: [('Glen Elendra Guardian', 1, 'rare'), ('Disruptor of Currents', 1, 'rare'), ('Deceit', 1, 'mythic'), ('Bitterbloom Bearer', 1, 'mythic'), ('Flitterwing Nuisance', 1, 'rare')]
4 colour usability (best_mode)     PASS  all nonland cards usable in UB; off-normal modes: {'Glen Elendra Guardian': 'cast', 'Blight Rot': 'cast', 'Rooftop Percher': 'cast', 'Disruptor of Currents': 'cast', 'Noggle the Mind': 'cast', 'Deceit': 'cast', 'Swat Away': 'cast', 'Voracious Tome-Skimmer': 'cast', 'Glamer Gifter': 'cast', 'Requiting Hex': 'cast', 'Spell Snare': 'cast', 'Nameless Inversion': 'cast', 'Unwelcome Sprite': 'cast', 'Bitterbloom Bearer': 'cast', 'Darkness Descends': 'cast', 'Wild Unraveling': 'cast', 'Flitterwing Nuisance': 'cast', 'Glamermite': 'cast', 'Temporal Cleansing': 'cast', 'Dream Seizer': 'cast', 'Nightmare Sower': 'cast'}
5 splash cap                       PASS  splash_colors=[] -> vacuously satisfied
```
