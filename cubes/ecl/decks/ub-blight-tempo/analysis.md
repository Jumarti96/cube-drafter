---
deck_name: "ub-blight-tempo"
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
  6x Island                untapped blue source
  7x Swamp                 untapped black source
  2x Contaminated Aquifer  UB dual, enters tapped
  2x Evolving Wilds        fetches a basic; smooths the deck's two opposing double costs
```

### CREATURES (14)

```
CMC  Card                    Qty   Color  Role                                                                                                                Rar
  1  Flitterwing Nuisance    x1    U      the deck's only 1-drop; a {U} flier that turns a connecting board into cards                                        R
  2  Bitterbloom Bearer      x1    B      flash 1/1 flier making a free 1/1 flying token every upkeep for the blight costs to consume                         M
  2  Loch Mare               x1    U      a 4/5 that enters as a 1/2; each counter removed is a card drawn or a tap-and-stun                                  M
  2  Unwelcome Sprite        x1    U      2/1 flier; surveil 2 on an opponent-turn cast                                                                       U
  3  Glamermite              x1    U      flash 2/2 flier; ETB taps a blocker or untaps a creature                                                            C
  3  Glen Elendra Guardian   x1    U      flash 3/4 flier; each counter removed is a countered noncreature spell, and Gutsplitter Gang reloads it every turn  R
  3  Heirloom Auntie         x2    B      a 4/4 entering as a 2/2; it sheds a counter and surveils each time another creature dies                            C
  3  Voracious Tome-Skimmer  x2    UB     2/3 flier that draws on an opponent-turn cast                                                                       U
  4  Gutsplitter Gang        x1    B      a {3}{B} 6/6 whose main-phase blight 2 is free every turn                                                           U
  4  Nightmare Sower         x2    B      2/3 flying lifelink; every opponent-turn cast puts a -1/-1 counter on a creature                                    U
  6  Deceit                  x1    UB     evoked for two mana it bounces any resolved nonland permanent; hard-cast a 5/5                                      M
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                  Qty   Color  Role                                                                                    Rar
  1  Requiting Hex         x1    B      1-mana instant removal; its optional blight grants 2 life but does not reduce its cost  U
  2  Bogslither's Embrace  x2    B      unconditional exile for {1}{B} when the blight 1 lands on a token                       C
  2  Nameless Inversion    x2    B      instant +3/-3                                                                           U
  2  Wild Unraveling       x1    U      a {U}{U} counterspell when the blight 2 lands on a token or Gutsplitter Gang            C
  3  Blight Rot            x2    B      instant, four -1/-1 counters; kills through indestructible                              C
  4  Swat Away             x1    U      the only card in the pool that reads target spell OR creature                           U
```

## SIDEBOARD (10)

```
Card                 Qty   Color  Role / When to board in                                                                                                    Rar
Spell Snare          x2    U      Decks whose key cards cluster at mana value 2; also the cheapest way to hold up an opponent-turn cast.                     U
Blossombind          x2    U      Creatures too large for the -1/-1 suite; the cube holds only 4 enchantment answers, so it stays on the battlefield.        C
Dream Seizer         x1    B      Control and combo, to strip the key card before committing to the board.                                                   C
Temporal Cleansing   x2    U      Decks whose key artifact or enchantment must be answered for good; Deceit only bounces it back to hand.                    C
Blighted Blackthorn  x1    B      Grindy matchups and ground aggro; the 3/7 body blocks almost everything in the cube.                                       C
Rooftop Percher      x2    C      Any graveyard deck — the cube's densest threat class at 39 cards / 15%, against which the cube censuses 0 dedicated hate.  C
```

## ANALYSIS

### DECK IDENTITY

A UB attrition deck built on the pool's blight mechanic. Several of its answers have an additional cost that puts -1/-1 counters on one of YOUR creatures — Bogslither's Embrace exiles any creature for {1}{B} instead of {4}{B}, Wild Unraveling counters a spell for {U}{U} instead of {1}{U}{U}. The deck supplies bodies that make that cost free: Bitterbloom Bearer manufactures a disposable 1/1 token every upkeep, Gutsplitter Gang is a 6/6 that can absorb two blight-2s, and Glen Elendra Guardian converts every counter it receives into a counterspell. The same -1/-1 mechanic is aimed at the opponent through Blight Rot and Nightmare Sower's repeating trigger until their board is gone, and two or three surviving fliers close the game.

### THE DISCOUNT, HONESTLY SIZED

The pitch for this deck is that blight costs are free. That is true of **3 copies out of 10 interaction cards**, and the grill forced that number down from what I first claimed:

| Card | Printed | With blight | Saved |
|---|---|---|---|
| Bogslither's Embrace ×2 | `{4}{B}` | `{1}{B}` | 3 each |
| Wild Unraveling | `{1}{U}{U}` | `{U}{U}` | 1 |
| Requiting Hex | `{B}` | `{B}` | **0** — its blight is optional and grants 2 life, it does not reduce the cost |

Seven mana across a game, not a wholesale rewrite of the curve.

### WHERE THE COUNTERS GO — AND WHERE THEY MUST NOT

This is the part that took two rounds to get right. Of the five bodies originally called "counter sinks", only **two actually convert** a counter into anything:

- **Loch Mare** — `{1}{U}, Remove a counter from this creature: Draw a card` — converts
- **Glen Elendra Guardian** — `{1}{U}, Remove a counter…: Counter target noncreature spell` — converts
- **Heirloom Auntie** — `Whenever another creature you control dies, surveil 1, then remove a -1/-1 counter` — the surveil is bound to the *death*, not the counter. It **absorbs**, it does not convert
- **Flitterwing Nuisance** — a 2/2 already carrying one counter. A second **kills it**

And blight *2* is lethal to more of them than it helps: Loch Mare (1/2), both Heirloom Auntie (2/2) and Flitterwing (1/1) all die to it. Only Glen Elendra Guardian survives at 0/1 — and converts all three counters into three counterspells.

### THE LOOP THAT FIXES IT

The repair was to stop aiming blight at cards the deck wants, and manufacture something disposable:

1. **Bitterbloom Bearer**, upkeep: `create a 1/1 blue and black Faerie creature token with flying`
2. **Gutsplitter Gang**, first main phase: `you may blight 2` — two counters onto that 1/1, which dies
3. That death is "another creature you control dies" → **both Heirloom Auntie** copies `surveil 1, then remove a -1/-1 counter`

Upkeep precedes first main phase, so the token is always there when the Gang's trigger resolves. One card of investment, repeating every turn, and Gutsplitter Gang's 3-life penalty is never paid while the Bearer lives.

Four honest bounds: it needs three specific permanents; there is one copy each of Bearer and Gang; each Auntie only has two counters to shed before the loop degrades to surveil-only; and feeding the token to the Gang forgoes one point of evasive damage per turn.

### WHY THERE IS NO SWEEPER

Darkness Descends is the pool's only UB mass effect and it is in **neither board**. `Put two -1/-1 counters on each creature` kills **9 of this deck's 14 creature copies** — Loch Mare and both Aunties included, because they are a 1/2 and 2/2 on the battlefield, not the 4/5 and 4/4 on the card — and leaves every survivor at 0 power. Against this list it is closer to a one-sided wrath for the opponent.

### PLAY PATTERN

Hold mana up from turn two. Ten of the 23 nonland cards are castable on the opponent's turn, and each one triggers Nightmare Sower (a −1/−1 counter), Voracious Tome-Skimmer (a card) and Unwelcome Sprite (surveil 2). Deceit is normally a two-mana `Evoke {U/B}{U/B}` answer to a resolved artifact or enchantment — the one class the mainboard would otherwise concede — not a 6-drop.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:8  3:8  4:4  6:1
Assembly (thesis turn 10, 17 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.1: Loch Mare@0.95, Glen Elendra Guardian@0.95, Nightmare Sower@0.9, Nightmare Sower@0.9, Heirloom Auntie@0.7, Heirloom Auntie@0.7) → p=0.90 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10.3: Bitterbloom Bearer@0.95, Gutsplitter Gang@0.9, Requiting Hex@0.9, Wild Unraveling@0.75, Bogslither's Embrace@0.9, Bogslither's Embrace@0.9) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 31%  T2 89%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: GRILL-CORRECTED. The pool's only UB sweeper is Darkness Descends ('Put two -1/-1 counters on each creature'), and the grill established it kills 9 of this deck's 14 creature copies — including Loch Mare (a 1/2 on board, not the printed 4/5) and both Heirloom Auntie (2/2, not 4/4) — and leaves all 5 survivors at 0 power. It was cut from the mainboard for exactly that reason. The deck instead answers a wide board one creature at a time with 7 removal spells, and blocks it with Gutsplitter Gang (6/6) and a Bitterbloom Bearer token every upkeep.
  OK        single_large_threat: Bogslither's Embrace, Swat Away, Deceit, Blight Rot, Nameless Inversion
  OK        noncreature_permanents: Deceit, Wild Unraveling, Swat Away, Glen Elendra Guardian
  OK        stack: Wild Unraveling, Swat Away, Glen Elendra Guardian
  CONCEDED  graveyard: Graveyard interaction is the cube's densest threat class at 15% (39 cards) and the cube censuses 0 dedicated graveyard hate. The mainboard is a 23-card removal-and-sink shell whose curve tops at 4 and has no slot for a 5-mana answer; Rooftop Percher x2 ('exile up to two target cards from graveyards') carries it from the sideboard on a 3/3 flying body.
```
All four checks returned PASS; there are no WARN flags to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | The two true counter-converters are mana sinks. Loch Mare: '{1}{U}, Remove a counter from this creature: Draw a card' and '{2}{U}, Remove two counters: Tap target creature. Put a stun counter on it' — up to three activations. Glen Elendra Guardian: '{1}{U}, Remove a counter: Counter target noncreature spell' — and because Gutsplitter Gang reloads counters onto it every turn, this one is genuinely repeatable rather than one-shot. Deceit also absorbs a flooded turn as a hard-cast 5/5 instead of a 2-mana evoke. |
| screw | mitigation | The curve is flat — {1:2, 2:8, 3:8, 4:4, 6:1} with only Deceit above 4, and Deceit is normally cast for {U/B}{U/B} via evoke. The blight package helps directly: Wild Unraveling for {U}{U} instead of {1}{U}{U} and Bogslither's Embrace for {1}{B} instead of {4}{B} are both castable a turn early on a short land count, provided a blight target exists — which after the grill repair means a Bitterbloom Bearer token or Gutsplitter Gang, not a card the deck wants to keep. Goldfish reports 86% keepable, 88% three lands by turn 3, 89% play-by-turn-2. Contaminated Aquifer x2 and Evolving Wilds x2 fix the two opposing double costs. |
| decapitation | mitigation | There is no single key card. The counter-converting role is 2 copies across 2 cards (Loch Mare, Glen Elendra Guardian) and the blight-target role is 2 more (Bitterbloom Bearer, Gutsplitter Gang); the structural check puts P(seeing a payoff-role card by turn 10) at 0.90 across 6 copies. GRILL-CORRECTED: that 0.90 is the PAYOFF role's figure and includes Nightmare Sower x2, which is not a sink — the sink-specific probability, recomputed hypergeometrically for 4 copies in 40 with 17 seen, is 0.90 as well. If every converter is answered, the blight package simply reverts to printed cost — Wild Unraveling for {1}{U}{U}, Bogslither's Embrace for {4}{B} — which is worse but never blank, and the 9 flying bodies and 10 answers are untouched. |
| gas-out | mitigation | Four Cards: Net-Positive sources. Loch Mare converts three counters into three cards. Voracious Tome-Skimmer x2 draws on each of the 10 opponent-turn casts in the list. Heirloom Auntie x2 surveils on every creature death — and after the grill repair the deck manufactures one of those every turn, because Gutsplitter Gang's blight 2 kills the Bitterbloom Bearer token. Unwelcome Sprite surveils 2 per opponent-turn cast. Glen Elendra Guardian's counter mode also reads 'Its controller draws a card', which is a cost, not a benefit — stated here so it is not miscounted as card advantage. |
| raced | mitigation | GRILL-CORRECTED — the original entry claimed Heirloom Auntie was a 4/4 ground blocker and Loch Mare a 4/5, which is false: they arrive as a 2/2 and a 1/2 by their own enters-with-counters text. The real blockers are Gutsplitter Gang, a {3}{B} 6/6, and a 1/1 flying chump blocker from Bitterbloom Bearer every upkeep. Nightmare Sower x2 is 2/3 flying LIFELINK and its trigger shrinks an attacker every opponent turn; Requiting Hex gains 2 life when its optional blight is paid. Stated cost, per the grill: Bitterbloom Bearer's 'you lose 1 life' is unconditional and uncapped, and any turn Gutsplitter Gang's blight is declined costs 3 more — this deck pays life to stay on its plan, which is a real price while being raced. |
| disruption-fizzle | accepted | The deck holds 3 stack answers (Wild Unraveling, Swat Away, Glen Elendra Guardian) and its critical interactions are single removal spells rather than a chain, so the exposure is narrow but real: the one Deceit is the deck's only answer to a resolved artifact or enchantment, and if it is countered the class reverts to being conceded. Mitigating means maindecking Temporal Cleansing over a removal spell or a body — and Temporal Cleansing is a sorcery, which costs the deck the held-up-mana posture that makes Nightmare Sower and Voracious Tome-Skimmer work at all. That is the identity cost, stated: this build keeps its answers at instant speed and accepts that one class rests on one card, with Temporal Cleansing x2 in the sideboard for the matchups where that is not good enough. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Moonshadow | Mythic. A {B} 7/7 menace that 'enters with six -1/-1 counters' and sheds ONE per event where a permanent card hits your graveyard. This list supplies Evolving Wilds x2 plus incidental creature deaths — six separate events to unlock it, which is slower than the deck's fliers already are. |
| Retched Wretch | 'When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield ... and it loses all abilities.' The rebought body is vanilla and can no longer recur, so it is one extra 4/2, not a recursion engine. |
| Creakwood Safewright | A 5/5 for {1}{B} entering with three -1/-1 counters, but it only sheds them 'if there is an Elf card in your graveyard' — this deck runs 0 Elves, so the counters never come off. |
| Gnarlbark Elm | '{2}{B}, Remove two counters from this creature: Target creature gets -2/-2 until end of turn. Activate only as a sorcery.' — 3 mana for -2/-2 at sorcery speed is the weakest counter-sink in the pool, and sorcery speed fights the Nightmare Sower trigger. |
| Blighted Blackthorn | 'Whenever this creature enters or attacks, you may blight 2. If you do, you draw a card and lose 1 life.' — a genuine repeating draw engine, but at MV 5 it pushed avg MV to 3.0 and land_target to 18 lands, which does not fit a 40-card deck. Moved to the sideboard. |
| Eclipsed Realms | Naming Faerie its coloured mana pays for only 12 of the 23 nonland cards; the 11 it misses are the deck's spine (Loch Mare, Heirloom Auntie x2, Bile-Vial Boggart, Requiting Hex, Wild Unraveling, Bogslither's Embrace, Blight Rot x2, Darkness Descends, Swat Away). A deck holding instants up cannot run a land that half the time taps only for {C}. |
| Swat Away (2nd copy) | Reduced from 2 copies to 1 during the shape-judge resolution: 'costs {2} less to cast if a creature is attacking you' rewards a board state a controller is trying to avoid, so at full price it is a 4-mana answer. |
| Dose of Dawnglow | 'Return target creature card from your graveyard to the battlefield. Then if it isn't your main phase, blight 2.' — reanimation at MV 5, and the blight 2 rider is upside here, but the deck's creatures are small enough that returning one is rarely worth 5 mana. |
| Illusion Spinners | A 4/3 flier with pseudo-flash, but at MV 5 it breaks the curve that keeps this list at 17 lands, and the deck's plan is answering the board rather than presenting the biggest body. |
| Thirst for Identity | 'Draw three cards. Then discard two cards unless you discard a creature card.' — real instant refuel, but the counter-sinks (Loch Mare, Flitterwing Nuisance, Heirloom Auntie x2) already convert the deck's own -1/-1 counters into cards without spending a slot. |
| Spell Snare | 'Counter target spell with mana value 2' — the cheapest opponent-turn trigger available, but it is castable only when the opponent presents an MV-exactly-2 spell, which is the narrow-window profile the locked 'flexible toolbox' lens was chosen to avoid. It sits in the sideboard. |
| Scarblade Scout | A {1}{B} 2/2 lifelink that mills two — the mill would feed Moonshadow, but Moonshadow is not in the list, so it is a vanilla body with no counter interaction. |
| Bile-Vial Boggart | Cut entirely during the grill. Its death trigger ('put a -1/-1 counter on up to one target creature') is on-mechanic, but as a blight target it dies to blight 1 and produces one counter once. Bitterbloom Bearer produces a disposable body EVERY upkeep for the same slot. |
| Darkness Descends | Cut from BOTH boards during the grill. 'Put two -1/-1 counters on each creature' — my original mainboard verdict used printed power and toughness for creatures that enter with counters and was wrong: on the realistic board it kills 9 of this deck's 14 creature copies, including Loch Mare (a 1/2, not the printed 4/5) and both Heirloom Auntie (2/2, not 4/4), and leaves all 5 survivors at 0 power. It is anti-symmetric for this deck. |
| Emptiness | Mythic, and a genuinely one-sided three-counter kill for two mana via 'Evoke {W/B}{W/B}' — but its color_identity is ['B','W']. This is a two-colour UB build; a white-identity card is not a swap to make silently. |
| Boggart Mischief | 'you may blight 1. If you do, create two 1/1 black and red Goblin creature tokens' turns one blight into two disposable bodies — but once, at mana value 3. Bitterbloom Bearer produces one every upkeep for the same slot. |
| Dawnhand Dissident | Rare. A 1-mana repeatable blight outlet that also exiles from graveyards, but the graveyard mode costs 'Blight 2', which has one profitable target in this list, and the rare/mythic budget is spent 5 of 5. |
| Scarblade's Malice | Cut from the sideboard during the grill: it answers a large ground creature only by blocking it, and does nothing against the cube's 41-card evasion class. Replaced by Blossombind, which locks down any creature regardless of size. |
| Auntie's Sentence | Modal discard or -2/-2 at sorcery speed; both modes are weaker than what the sideboard slots now hold, and sorcery speed fights the held-up-mana posture. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 2.78 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  60.9%  prod  52.9%  gap  +8.0pp  [OK]
  U  demand  39.1%  prod  47.1%  gap  -8.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
1a mainboard size                  PASS  40 (want 40)
1b sideboard size                  PASS  10 (want 10)
2 exact-name membership            PASS  all 27 names found
3 copy limits                      PASS  all within rarity multipliers
3b rare+mythic total <= 5          PASS  5 used: [('Bitterbloom Bearer', 1, 'mythic'), ('Flitterwing Nuisance', 1, 'rare'), ('Glen Elendra Guardian', 1, 'rare'), ('Deceit', 1, 'mythic'), ('Loch Mare', 1, 'mythic')]
4 colour usability (best_mode)     PASS  all nonland cards usable in UB; off-normal modes: {'Nightmare Sower': 'cast', 'Unwelcome Sprite': 'cast', 'Gutsplitter Gang': 'cast', 'Temporal Cleansing': 'cast', 'Voracious Tome-Skimmer': 'cast', 'Bitterbloom Bearer': 'cast', "Bogslither's Embrace": 'cast', 'Flitterwing Nuisance': 'cast', 'Glamermite': 'cast', 'Blight Rot': 'cast', 'Nameless Inversion': 'cast', 'Wild Unraveling': 'cast', 'Glen Elendra Guardian': 'cast', 'Swat Away': 'cast', 'Dream Seizer': 'cast', 'Blighted Blackthorn': 'cast', 'Blossombind': 'cast', 'Heirloom Auntie': 'cast', 'Spell Snare': 'cast', 'Requiting Hex': 'cast', 'Deceit': 'cast', 'Loch Mare': 'cast', 'Rooftop Percher': 'cast'}
5 splash cap                       PASS  splash_colors=[] -> vacuously satisfied
```
