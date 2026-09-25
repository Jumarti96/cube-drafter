---
deck_name: "br-blight-impulse-aggro"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BR"
format: "40-card"
built_at: "2026-08-11T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x9  Mountain        basic
  x5  Swamp           basic
  x1  Blood Crypt     BR dual, shock - pay 2 life or enters tapped
  x2  Geothermal Bog  BR dual, enters tapped
```

### CREATURES (16)

```
CMC  Card                  Qty  Color  Role               Rar
  1  Bile-Vial Boggart     x2   B      Enabler/Fodder     C
  2  Boggart Cursecrafter  x2   BR     Payload/Payoff     U
  2  Scuzzback Scrounger   x1   R      Engine/Outlet      R
  2  Warren Torchmaster    x2   R      Enabler/Fodder     U
  3  Brambleback Brute     x1   R      Standalone Threat  C
  3  Retched Wretch        x1   B      Enabler/Fodder     U
  3  Shadow Urchin         x1   BR     Payload/Payoff     R
  3  Sizzling Changeling   x2   R      Enabler/Fodder     U
  3  Sting-Slinger         x2   R      Payload/Payoff     U
  4  Sourbread Auntie      x2   R      Enabler/Fodder     U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card               Qty  Color  Role           Rar
  1  Cinder Strike      x2   R      Interaction    C
  1  Requiting Hex      x1   B      Interaction    U
  3  Burning Curiosity  x2   R      Engine/Outlet  C
```

### OTHER SPELLS (2)

```
CMC  Card              Qty  Color  Role            Rar
  3  Boggart Mischief  x2   B      Payload/Payoff  U
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Rar  Role / When to board in
Dawnhand Dissident    x1   B      R    Against the cube's graveyard decks (39 cards, 15.0% density - the second-largest threat class). '{T}, Blight 2: Exile target card from a graveyard' is repeatable one-mana exile whose activation cost is this deck's own engine.
Bogslither's Embrace  x1   B      C    Against a single recursive or indestructible threat damage cannot answer. 'Exile target creature'; the cost reads 'blight 1 OR pay {3}', so it is still castable on an empty board.
Giantfall             x2   R      U    Against artifact decks. 'Destroy target artifact' is one of only 4 artifact answers in the cube and one of only 2 in B/R; the other mode fights with your own power-4 bodies.
Hexing Squelcher      x1   R      R    Against removal-dense decks. The reason is 'Other creatures you control have Ward-Pay 2 life', which taxes every spot removal spell aimed at the board. The 'Spells you control can't be countered' half is a bonus that covers only 2 cards cube-wide (0.7%), not the grounds for the slot.
Nameless Inversion    x2   B      U    Against 3-toughness creatures and against tribal decks. '+3/-3 and loses all creature types until end of turn' both removes the body and blanks a Kindred payoff; the cube has 22 tribes with 4 or more members (dossier.tribal_rosters); the dossier summary prints only the top 8.
Sear                  x2   R      U    Against evasive or oversized creatures. 'Sear deals 4 damage to target creature or planeswalker' is the deck's only unconditional damage-based answer that does not need a creature of your own to blight; evasion is the cube's largest threat class at 41 cards (15.8%).
Darkness Descends     x1   B      U    Against go-wide token or small-creature decks. 'Put two -1/-1 counters on each creature' is symmetric, but every Goblin of yours it kills is a Boggart Cursecrafter ping, a Boggart Mischief drain and a Shadow Urchin exile, and Retched Wretch returns from the counters it applies.
```

## ANALYSIS

### DECK IDENTITY

A B/R Goblin aggro deck that treats 'blight' as a free sacrifice outlet. Putting a -1/-1 counter on a 1/1 Goblin token kills it via state-based action at no mana cost, and this deck runs 8 such tokens plus 18 blight-capable cards out of 23 nonland cards. Each of those deaths pays three ways at once: Shadow Urchin exiles cards off the top of the library that you may play until your next end step (the play-from-exile impulse value the build is anchored to), Boggart Cursecrafter deals 1 to each opponent, and Boggart Mischief drains 1. Sting-Slinger turns the same blight into a mana-only reach outlet that never has to attack, so the deck closes through a board stall as well as over it.

### THE CORE LOOP, STATED PRECISELY

Blight is written as a *cost* on this cube's cards — "put a -1/-1 counter on a creature you control". Read as a cost it looks like a drawback. Read as a **sacrifice outlet** it is the engine of this deck, because a -1/-1 counter on a 1/1 Goblin token makes it a 0/0 and it dies to state-based action immediately, at no mana cost, at no card cost, at whatever speed the blight source operates.

One blighted token pays four times:

| Trigger | Oracle | Payment |
|---|---|---|
| Shadow Urchin | "Whenever a creature you control with one or more counters on it dies, exile **that many** cards from the top of your library. Until your next end step, you may play those cards." | 1 impulse card (2 if the token was blighted twice) |
| Boggart Cursecrafter x2 | "Whenever another Goblin you control dies, this creature deals 1 damage to each opponent." | 1 damage each |
| Boggart Mischief x2 | "Whenever a Goblin creature you control dies, each opponent loses 1 life and you gain 1 life." | 1 drain each |
| The blight source itself | e.g. Sting-Slinger's "This creature deals 2 damage to each opponent" | 2 damage |

With one Cursecrafter and one Mischief on board, a single Sting-Slinger activation is **4 damage plus a card**, from a permanent that never attacks. That is the whole reason this build won the shape judge over the two faster sketches: it closes through a board stall, not only over one.

### WHY "EXILE THAT MANY CARDS" IS THE LOAD-BEARING WORD

Shadow Urchin scales with counters, not with deaths. Sourbread Auntie's "you may blight 2" puts **two** counters on **one** creature; dropped on a 1/1 token that is one death but a **two-card** exile. The corollary runs the other way too, and it is why Chaos Spewer stayed out despite being the largest three-drop available: blight 2 on one body is one Cursecrafter ping and one Mischief drain, where two separate blight-1s would be two of each.

### THE EMPTY-BOARD HOLE, AND WHY BILE-VIAL BOGGART IS IN

Boggart Mischief reads "you may blight 1. **If you do**, create two 1/1 Goblin tokens." Blight 1 requires a creature you control to take the counter. On an empty board Mischief makes **nothing** — a three-mana enchantment that does not affect the battlefield. The pre-grill list ran zero creatures at mana value 1, which meant the deck's best token engine was live only when something else had already stuck. Bile-Vial Boggart x2 fixes that at the cheapest possible slot, and its death trigger — "put a -1/-1 counter on up to one target creature" — chains into a second token kill. The measured effect: turn-1 play rate went from 48% to 63%.

Note that Sourbread Auntie does **not** have this problem: its trigger resolves with itself already on the battlefield, so it can blight itself (4/3 to 2/1) and still make both tokens. This distinction is what defeated the grill's "Elder Auntie is the only unconditional token maker" finding.

### PLAY PATTERN

- **T1–2**: Bile-Vial Boggart, then Warren Torchmaster / Scuzzback Scrounger / Boggart Cursecrafter. Torchmaster and Scrounger are the two *free repeating* blight sources — every turn from here you get a blight without spending a card.
- **T3**: Boggart Mischief (two tokens) or Shadow Urchin. From this turn the loop is live.
- **T4+**: Sourbread Auntie adds two more tokens and a 4/3. Sting-Slinger converts spare mana into face damage indefinitely.
- **The line to look for**: blight a token with Warren Torchmaster at beginning of combat (free), *then* attack with Shadow Urchin (which blights again, mandatory). Two deaths in one turn is 2 Cursecrafter pings, 2 Mischief drains, 2 impulse cards.

### THE HONEST WEAKNESSES

**The deck has no flier.** Dream Seizer was the only one and it was cut in the grill as a non-Goblin four-drop that triggers neither payoff. Brambleback Brute's "Target creature can't block this turn" is now the entire evasion package, and it is capped at two activations for the game by its own two counters. Against a stalled board the deck relies on Sting-Slinger and the drain triggers, which is by design — but it means an opposing flier race is a genuine problem.

**Enchantments are unanswerable.** Zero B or R cards in the cube can destroy or exile an enchantment. 21 enchantments exist (8.1%). There is no fix inside these colours.

**Blight is a real cost when you have no tokens.** Every blight source can legally target your own real creature, and several must (Shadow Urchin's attack trigger says "blight 1" with no "may"). With an empty token supply the deck begins shrinking its own board. Keeping a token available is the actual skill test of piloting this list.

### RARE BUDGET

The 5-card rare/mythic cap is spent exactly: **Shadow Urchin** (the payoff), **Scuzzback Scrounger** (free blight + the Treasure that lets you cast what you impulsed), **Blood Crypt** (the cube's only untapped-capable B/R dual — a land costs a rare here), **Hexing Squelcher** and **Dawnhand Dissident** in the sideboard. Grub, Storied Matriarch and Grub's Command are the two rares most worth trying if you want to re-spend the budget.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:5  2:5  3:11  4:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.2: Boggart Cursecrafter@0.8, Boggart Cursecrafter@0.8, Boggart Mischief@0.8, Boggart Mischief@0.8) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 14.9: Retched Wretch@0.8, Cinder Strike@0.7, Cinder Strike@0.7, Requiting Hex@0.7) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 63%  T2 92%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The cube does contain a B-castable sweeper - Darkness Descends, 'Put two -1/-1 counters on each creature' - so this is a choice, not an absence. It is not maindecked because {2}{B}{B} sits behind only 8 black sources of 17 lands and because it kills this deck's own 8 Goblin tokens and its 2/2 and 3/2 bodies; the deck's plan is to BE the wide board. The maindeck answer to a wider board is to convert a stall into noncombat damage through Sting-Slinger x2 and Boggart Cursecrafter x2, neither of which requires attacking. Darkness Descends x1 is in the sideboard for the matchups where the opponent is the wider board.
  OK        single_large_threat: Cinder Strike, Boggart Cursecrafter, Brambleback Brute
  CONCEDED  noncreature_permanents: The dossier's enchantment_answers list contains zero B or R cards, so enchantments (21 cards, 8.1% of the cube) are genuinely unanswerable in these colours. The only B/R artifact answers are Giantfall and Grub's Command, and artifacts are 11 cards (4.2%), so a maindeck slot would be blank in most matchups; Giantfall x2 is in the sideboard instead.
  CONCEDED  stack: B/R has no counterspells in this cube. The answer to the stack is the clock: a turn-6 goldfish means a control deck must have its answer on time. Note the counted reality - only 2 counterspells exist cube-wide (0.7%), so the stack is a small threat class here rather than an ignored one.
  CONCEDED  graveyard: The maindeck concedes graveyard interaction entirely: both graveyard answers this deck can cast are too narrow or too slow for a turn-6 aggro maindeck. Dawnhand Dissident x1 is in the sideboard for the class, which is real and large (39 cards, 15.0% density). Correction to the earlier draft of this concession: the dossier's 'GY hate: 0' line is a probe artifact, not an absence - the pool tags both Dawnhand Dissident and Rooftop Percher as graveyard hate.
```
_No WARN-tier flags were raised; all four structural checks passed._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Surplus lands become damage through Sting-Slinger x2 ('{1}{R}, {T}, Blight 1: This creature deals 2 damage to each opponent'), a mana-only outlet that needs no card from hand. Burning Curiosity x2 converts a flooded turn into two or three fresh cards off the top ('exile the top three cards instead' when the blight is paid). Brambleback Brute's activation is NOT counted here - it deals no damage, is sorcery-speed, and is capped at two activations for the game by its own two counters. |
| `screw` | mitigation | Keepable on two lands: 10 of the 23 nonland cards cost 1 or 2 mana (Cinder Strike x2, Requiting Hex x1, Bile-Vial Boggart x2, Warren Torchmaster x2, Scuzzback Scrounger x1, Boggart Cursecrafter x2), and 14 of the 17 lands enter untapped unconditionally so a two-lander still curves. Scuzzback Scrounger's Treasure ('At the beginning of your first main phase, you may blight 1. If you do, create a Treasure token') is a third mana on turn 3. The goldfish check reports 87% keepable hands, 88% on three lands by turn 3, and a 63% turn-1 play rate. |
| `decapitation` | mitigation | Shadow Urchin is a singleton (rare limit), so the deck is deliberately not built to need it: the damage half of the kill mechanism runs entirely on Boggart Cursecrafter x2 and Boggart Mischief x2, and the impulse half has two further independent sources - Burning Curiosity x2 and Sizzling Changeling x2 both exile-and-play with no Urchin on the battlefield. Losing the Urchin costs card flow, not the win condition. |
| `gas-out` | mitigation | The deck's premise is refuelling off the top rather than from hand. Net-positive or self-replacing cards: Burning Curiosity x2 (exile 2-3, play them), Sizzling Changeling x2 (exile 1 on death), Shadow Urchin x1 (exile per counter on every counter-laden death, unbounded across a game), Scuzzback Scrounger x1 (a Treasure every first main phase), Boggart Mischief x2 (two bodies for one card) = 8 of 23 nonland cards. An empty hand with a board is this deck's normal operating state, not its failure state. |
| `raced` | accepted | Against the fastest clocks in the cube this deck's only lifegain is Boggart Mischief's incidental 1 per Goblin death and Requiting Hex's 2, and Blood Crypt costs 2 life to enter untapped. Mitigating properly would mean maindecking blockers or lifelink over token-makers, which would cut the Goblin count that Boggart Cursecrafter x2 and Boggart Mischief x2 are counted against (14 of 16 creature cards) and would break the kill mechanism outright. The chosen answer is to be the faster deck - a 63% turn-1 play rate and a curve of 5/5/11/2 - and to use Boggart Cursecrafter's deathtouch as the defensive body. |
| `disruption-fizzle` | mitigation | There is no single critical turn to interact with - the kill mechanism is a per-turn loop rather than a combo turn. If a blight-kill is answered mid-chain, the blight sources are all repeatable at no card cost: Warren Torchmaster x2 blight every combat, Scuzzback Scrounger every first main phase, Shadow Urchin on every attack (mandatory, no 'may'), and Sting-Slinger's blight sits inside an activated cost that can legally target Sting-Slinger itself. The loop retries next turn at zero card cost. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Goliath Daydreamer | 'Whenever you cast an instant or sorcery spell FROM YOUR HAND, exile that card with a dream counter' - this list runs 5 instants/sorceries out of 23 nonland cards, and the trigger never fires off the impulsed cards that are the deck's whole card flow. It anchors Deck B instead; here it would also consume 1 of the 5 rare slots, which are now fully spent. |
| End-Blaze Epiphany | 'deals X damage to target creature. When that creature dies this turn, exile a number of cards from the top of your library equal to ITS POWER' - the payoff scales off the opponent's creature's power, not anything this deck controls; at X=3 for 4 mana it is worse removal than Sear at 2. Rare budget goes elsewhere. |
| Kulrath Zealot | '{5}{R}... exile the top card of your library' - a single impulse card for six mana. This deck's projected avg MV is already at the top of the aggro band; a 6-drop that impulses ONE card is strictly worse per mana than Burning Curiosity. |
| Dawnhand Dissident | 'you may cast creature spells from among cards you own exiled with this creature by removing three counters from among creatures you control' - it exiles from GRAVEYARDS, not your library, and the three-counter cost competes directly with Shadow Urchin, which needs the counters to stay on creatures until they die. Anti-synergy, not synergy. |
| Taster of Wares | 'target opponent reveals X cards from their hand, where X is the number of Goblins you control' - X is 0 on an empty board and this list only reliably has Goblins from turn 3 onward; it is a hand-attack card, not an impulse engine, and costs a rare slot. |
| Sanar, Innovative First-Year | 'reveal cards... until you reveal X nonland cards, where X is the number of colors among permanents you control' - X caps at 2 in a two-color deck, and it requires {R}{R}/{U/R}{U/R} at four mana. It anchors Deck C; here it costs a rare slot for the weakest version of its own effect. |
| Spinerock Tyrant | 'Whenever you cast an instant or sorcery spell with a single target, you may copy it' - only 5 of the 23 nonland cards here are instants/sorceries and only 3 of those have a single target; a five-mana mythic 6/6 whose trigger fires on 3/23 of the deck is a Deck B card. |
| Soul Immolation | 'blight X. X can't be greater than the greatest toughness among creatures you control... deals X damage to each opponent and each creature they control' - the blight all goes on ONE creature, so at X=4 it kills your own 4-toughness creature outright rather than distributing counters; it is a sweeper, and this deck is the creature deck. |
| Darkness Descends | 'Put two -1/-1 counters on EACH creature' - symmetric; it wipes this deck's own 1/1 Goblin tokens and 2/2s. The Shadow Urchin triggers do not pay for losing the board. |
| Champion of the Weird | 'As an additional cost to cast this spell, behold a Goblin and EXILE it' - a permanent card-disadvantage cost, and 'Pay 1 life, Blight 2: Target opponent blights 2' does nothing against a creatureless opponent. Rare budget goes to Shadow Urchin and Blood Crypt. |
| Grub, Storied Matriarch | 'Whenever Grub attacks, you may blight 1. If you do, create a tapped and attacking token that's a copy of the blighted creature' - genuinely on-plan and the closest cut, but it requires paying {R} then {B} on separate main phases to flip to the attacking side, so it is a turn-5-at-earliest engine on a turn-6 goldfish clock, and it costs the last rare slot. |
| Hexing Squelcher | 'Spells you control can't be countered' - the dossier threat_profile shows counterspells concentrated in U; this is a sideboard card against one matchup, not a maindeck 2-drop, and it is a rare. |
| Mornsong Aria | 'Players can't draw cards or gain life' - symmetric lock that shuts off this deck's own Gristle Glutton loot, Blighted Blackthorn draw, and Boggart Mischief lifegain. Wrong deck. |
| Moonshadow | 'This creature enters with six -1/-1 counters on it. Whenever one or more permanent cards are put into your graveyard from anywhere while this creature has a -1/-1 counter on it, remove a -1/-1 counter' - a 1/1 for one that needs six permanent cards in the yard to become a 7/7; this deck exiles its cards rather than milling them, so it fills the graveyard far too slowly. |
| Bitterbloom Bearer | 'At the beginning of your upkeep, you lose 1 life and create a 1/1 blue and black Faerie creature token' - a real token engine for blight fodder, but {B}{B} in a deck with 8 black sources out of 17 lands is unreliable on turn 2, and it is a mythic against the 5-card budget, which is now fully spent. |
| Meek Attack | '{1}{R}: You may put a creature card with total power and toughness 5 or less from your hand onto the battlefield... sacrifice that creature' - a real sacrifice outlet, but it sacrifices creatures WITHOUT counters, so it does not trigger Shadow Urchin; and it is a mythic. |
| Lavaleaper | 'Whenever a player taps a basic land for mana, that player ADDS one mana of any type that land produced' - doubles basic-land mana, which would let you cast every impulsed card, but it is symmetric and this deck runs only 14 basics out of 17 lands. Rare budget is at 5 of 5. |
| Collective Inferno | 'Double all damage that sources you control of the chosen type would deal' - a five-mana do-nothing enchantment; it needs a board already dealing damage, which is the turn you were winning anyway. |
| Bloodline Bidding | '{6}{B}{B}... Return all creature cards of the chosen type from your graveyard to the battlefield' - eight mana in a deck whose land count is built for a turn-6 kill. |
| Boulder Dash | 'deals 2 damage to any target and 1 damage to any other target' - solid, but Sear at 2 mana for 4 damage and Cinder Strike at 1 mana for 4 damage both kill more of this cube's relevant creatures per mana. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color' - real acceleration, but it taps the creatures this deck needs attacking, and the deck already gets Treasures off Scuzzback Scrounger and Reckless Ransacking. |
| Mudbutton Cursetosser | 'When this creature dies, destroy target creature an opponent controls with power 2 or less' - the death trigger is fine, but it dies WITHOUT a counter unless you blight it, and a 2/1 that can't block is worse fodder than a 1/1 token that costs no card. |
| Feed the Flames | 'deals 5 damage to target creature. If that creature would die this turn, exile it instead' - four mana for removal in a deck already running Sear, Cinder Strike, Requiting Hex and Bogslither's Embrace at one to two mana. |
| Enraged Flamecaster | 'Whenever you cast a spell with mana value 4 or greater, this creature deals 2 damage to each opponent' - only 4 of the 23 nonland cards in this list have MV 4 or greater. A Deck B card. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.26 adj [MV 2.43 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  30.8%  prod  47.1%  gap -16.3pp  [OK]
  R  demand  69.2%  prod  70.6%  gap  -1.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard (ecl), 277 unique cards
[PASS] copy_limits: commons/uncommons max 2, rares/mythics max 1 - verified by cube_search.get_max_copies against every card in mainboard + sideboard: PASS
[PASS] rare_mythic_budget: 5 of the allowed 5 used: Shadow Urchin (MB), Scuzzback Scrounger (MB), Blood Crypt (MB land), Hexing Squelcher (SB), Dawnhand Dissident (SB). At cap.
[PASS] basics: Mountain x9 + Swamp x5 are format-supplied and exempt from copy limits
[PASS] colour_legality: every nonland card returns a usable mode from effective_cost.best_mode(card, ['B','R'], []): PASS, all 21 distinct nonland cards resolve as a normal 'cast'
[PASS] splash: splash_colors = [], splash_candidates = [] - no splashed cards
```
