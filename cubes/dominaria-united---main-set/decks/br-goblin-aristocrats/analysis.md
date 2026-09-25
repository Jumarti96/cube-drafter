---
deck_name: "br-goblin-aristocrats"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-08-18T22:37:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  7x Mountain                 
  7x Swamp                    
  2x Geothermal Bog           BR dual, enters tapped
  1x Sulfurous Springs        BR dual, untapped, 1 damage per coloured activation
```

### CREATURES (18)

```
CMC  Card                       Qty   Color  Role                       Rar
  1  Cult Conscript             x2    B      Payoff                     U
  1  Phoenix Chick              x1    R      Payoff                     U
  2  Goblin Picker              x2    R      Payoff                     C
  2  Rundvelt Hordemaster       x1    R      Payoff                     R
  2  Splatter Goblin            x2    B      Payoff                     C
  2  Sprouting Goblin           x2    R      Payoff                     U
  3  Balduvian Atrocity         x1    B      Payoff                     U
  3  Braids, Arisen Nightmare   x1    B      Payoff                     R
  3  Lagomos, Hand of Hatred    x2    BR     Engine                     U
  3  Squee, Dubious Monarch     x1    R      Payoff                     R
  4  Garna, Bloodfist of Keld   x2    BR     Payoff                     U
  4  Sheoldred, the Apocalypse  x1    B      Payoff                     M
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                       Qty   Color  Role                       Rar
  1  Bone Splinters             x2    B      Interaction                C
  2  Lightning Strike           x2    R      Interaction                C
  4  Extinguish the Light       x1    B      Interaction                C
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in
Battlefly Swarm            x2    B      [C] Interaction: Against the 51-card evasion class (20.7% of the cube) - a {B} flier whose '{B}: This creature gains deathtouch until end of turn' trades up with any flier, and it is still a one-drop body to sacrifice afterwards.
Knight of Dusk's Shadow    x2    B      [U] Hate: Against the 22-card lifegain class (Archangel of Wrath, Mesa Cavalier, Prayer of Binding, Sol'Kanar) - 'Your opponents can't gain life' switches all of them off, printed on a 2/2 menace attacker so the slot never costs tempo.
Pilfer                     x2    B      [C] Interaction: Against control and against the cube's 6 sweepers - 'Target opponent reveals their hand. You choose a nonland card from it' strips the wrath before we commit the board, which is the only answer B/R has to a class it cannot counter.
Smash to Dust              x2    R      [C] Hate: Against the 15-card artifact class (Vanquisher's Axe, Hero's Heirloom, Golden Argosy, Karn's Sylex) and against go-wide token decks - mode 3 is 'deals 1 damage to each creature your opponents control'.
Hurloon Battle Hymn        x1    R      [U] Interaction: Against 4-toughness midrange bodies that Lightning Strike misses (Coalition Warbrute, Linebreaker Baloth, Magnigoth Sentry) and against planeswalkers - 'deals 4 damage to target creature or planeswalker' at instant speed.
Extinguish the Light       x1    B      [C] Interaction: The second copy comes in against decks whose threats exceed total power+toughness 5 or that play planeswalkers - 'Destroy target creature or planeswalker' is unconditional.
```

## ANALYSIS

### DECK IDENTITY

A Rakdos aggro deck that treats its own Goblins as ammunition. Rundvelt Hordemaster lords the seven other Goblin bodies (+1/+1) while Lagomos, Hand of Hatred manufactures a free creature and a guaranteed death every combat; Bone Splinters and Braids, Arisen Nightmare convert those bodies into removal and cards. Garna, Bloodfist of Keld is the payoff that makes every death matter - a card when we are attacking, damage to the opponent when we are not - and Sheoldred turns that card flow into a life swing. The build was chosen for resilience: a sweeper resets the opponent's board but converts ours into fuel, because Cult Conscript, Squee, Phoenix Chick and Balduvian Atrocity all rebuild from the graveyard.

### THE BINDING FACT: DOMINARIA UNITED HAS SIX GOBLINS

Before anything else, the constraint that shapes every decision in this list. The DMU main set contains exactly six distinct Goblin cards:

| Goblin | Rarity | Copies available | Cost | Colours |
|---|---|---|---|---|
| Goblin Picker | C | 2 | {1}{R} | R |
| Sprouting Goblin | U | 2 | {1}{R} | R (green kicker) |
| Splatter Goblin | C | 2 | {1}{B} | B |
| Rulik Mons, Warren Chief | U | 2 | {1}{R}{G}{G} | RG |
| Rundvelt Hordemaster | R | 1 | {1}{R} | R |
| Squee, Dubious Monarch | R | 1 | {2}{R} | R |

Rakdos is the colour pair that reaches the most Goblin *bodies* without a mana cost: adding black buys Splatter Goblin x2 rather than buying a colour tax, and it is the only pair where the added Goblin is itself a death trigger. This list plays 8 Goblin cards — every Goblin in B/R at full copies.

### READING RUNDVELT HORDEMASTER HONESTLY

Hordemaster has two abilities and they are not equally good in a 40-card deck.

- **The lord clause** — *"Other Goblins you control get +1/+1"* — applies to **7 of the 18 creature cards** (Squee, Splatter Goblin x2, Goblin Picker x2, Sprouting Goblin x2) plus every 1/1 red Goblin token Squee makes on attack. This is real and it is why Hordemaster is in the deck.
- **The death clause** — *"exile the top card of your library. If it's a Goblin creature card, you may cast that card"* — hits **8 of 40 cards, a 20% success rate per trigger.** That is a bonus, not a plan. No slot in this list is justified by it, and the deck's card economy is routed through Braids, Garna and Goblin Picker instead.

Stating this plainly matters because the natural build-around instinct — flood the deck with Goblins to raise the hit rate — is not available. The ceiling is 8 Goblin cards and it is already at the ceiling.

### THE ENGINE THAT DOES NOT NEED GOBLINS

The deck's actual reliability comes from a second layer that triggers on *any* creature dying:

- **Lagomos, Hand of Hatred** — *"At the beginning of combat on your turn, create a 2/1 red Elemental creature token with trample and haste. Sacrifice it at the beginning of the next end step."* A free body and a **guaranteed death every single turn cycle**, costing zero cards. It is the metronome the rest of the deck is built on.
- **Garna, Bloodfist of Keld** — *"Whenever another creature you control dies, draw a card if it was attacking. Otherwise, Garna deals 1 damage to each opponent."* Garna converts Lagomos's token into a card when we are attacking and into damage when we are not. There is no board state in which the Lagomos + Garna pair does nothing.
- **Cult Conscript** — *"{1}{B}: Return this card from your graveyard to the battlefield. Activate only if a non-Skeleton creature died under your control this turn."* Lagomos alone satisfies that condition on every one of our turns, unconditionally.

Note the honest limit: Lagomos's token is a **2/1 red Elemental**, not a Goblin. It does not gain Hordemaster's +1/+1 and it does **not** trigger Hordemaster's exile clause. That distinction is why the failure-mode entries below name Garna and not Hordemaster.

### KEY PLAY PATTERN — THE BONE SPLINTERS BLOWOUT

Bone Splinters is the cheapest card in the deck and the most instructive. *"As an additional cost to cast this spell, sacrifice a creature. Destroy target creature."* The additional cost is paid on announcement, so when the opponent removes the sacrifice target in response, the cost is already paid and the deaths still happen. The best line is:

1. Attack with Lagomos's 2/1 Elemental token (it is going to be sacrificed at end step regardless).
2. Second main phase: cast Bone Splinters, sacrificing the token that was about to die anyway.
3. Garna sees the death — the token *was* attacking, so we **draw a card**.
4. The opponent's creature is destroyed.

That sequence spends one card and one mana to kill a creature and draw a card, from a body that cost nothing. Sacrificing a Splatter Goblin instead adds *"target creature an opponent controls gets -1/-1"*, which combines with Bone Splinters to answer two creatures with one card.

### FEEDING THE SACRIFICE COSTS (counts against this list)

| Cost | Requirement | Fed by |
|---|---|---|
| Bone Splinters x2 | Sacrifice a creature | 18 of 23 nonland cards are creatures, plus two free token streams |
| Braids, Arisen Nightmare | Sacrifice any permanent at end step | 18 creatures + 17 lands = 35 of 40 cards |
| Cult Conscript x2 | A non-Skeleton died this turn | 16 of 18 creature cards, and Lagomos guarantees it |
| Squee graveyard cast | Exile 4 other graveyard cards | Goblin Picker's loot + on-plan creature deaths |
| Phoenix Chick | Attack with 3+ creatures | 18 creature cards + Squee token + Lagomos token |

### WHY SHEOLDRED IS THE FIFTH RARE

The pool restriction allows 5 rare/mythic cards. Four are obvious: Hordemaster and Squee are the archetype, Braids is the only three-mana repeatable free sacrifice outlet, and Sulfurous Springs is the only untapped BR dual (Geothermal Bog enters tapped, which costs an aggro deck a turn). The fifth went to Sheoldred over Liliana of the Veil, The Raven Man and Defiler of Flesh on a count: **8 of the 23 nonland cards draw a card on their own** (Goblin Picker x2, Sprouting Goblin x2, Braids, Garna x2, Balduvian Atrocity), so *"Whenever you draw a card, you gain 2 life"* fires off this deck's own engine rather than needing an external draw spell — and a 4/5 deathtouch body is simultaneously the ground-blocking answer to the racing problem this colour pair otherwise has.

### THE UNANSWERED CLASS

Worth knowing before you sideboard: **neither black nor red answers an enchantment anywhere in this cube.** The dossier's enchantment-answer census is three cards total — one BG, one G, one W. Against Citizen's Arrest, Prayer of Binding, Temporary Lockdown or Leyline Binding, this deck's only plan is to have already won or to have stripped the card with Pilfer. That is a property of the colour pair, not of this build.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:5  2:9  3:5  4:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.4: Garna, Bloodfist of Keld@0.85, Garna, Bloodfist of Keld@0.85, Balduvian Atrocity@0.7) → p=0.93 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 11.7: Lagomos, Hand of Hatred@0.85, Lagomos, Hand of Hatred@0.85) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 63%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper exists in B/R at this rarity; the deck answers width by being wider (Squee's per-attack Goblin token + Lagomos's per-combat Elemental + Hordemaster's +1/+1) and by racing. Smash to Dust x2 in the sideboard ('deals 1 damage to each creature your opponents control') is the post-board answer.
  OK        single_large_threat: Bone Splinters, Extinguish the Light, Sheoldred, the Apocalypse
  CONCEDED  noncreature_permanents: The dossier's enchantment_answers census lists 3 cards cube-wide (BG 1, G 1, W 1) - neither mono-black nor mono-red answers an enchantment at all, so no build in these colours can cover this class. Artifacts are covered post-board by Smash to Dust x2 ('Destroy target artifact').
  CONCEDED  stack: There is no counterspell in black or red in this pool. The deck's substitute is proactive disruption: Pilfer x2 in the sideboard strips the answer before it is held up.
  CONCEDED  graveyard: The dossier's structural census reports 0 graveyard-hate cards in the entire cube, so no build can cover this class. The deck instead exploits graveyards itself (Squee's {3}{R} graveyard cast, Cult Conscript's recursion, Phoenix Chick's {R}{R} return, Balduvian Atrocity's reanimation).
```

_No WARN-tier structural flags were raised; there is nothing to respond to._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Goblin Picker x2 ('{R}, {T}, Discard a card: Draw a card') and Sprouting Goblin x2 ('{R}, {T}, Sacrifice a land: Draw a card') each convert a surplus land directly into a new card, and both are 2/2 Goblin bodies that Hordemaster lords while doing it. Squee's graveyard cast ({3}{R}) is a mana sink that rebuys a threat with no card in hand. |
| screw | mitigation | Keepable on two lands: 5 of the 23 nonland cards cost one mana (Cult Conscript x2, Bone Splinters x2, Phoenix Chick) and 9 cost two, so a 2-land hand casts on curve for three turns. The goldfish simulation reports 87% keepable and 88% chance of 3 lands by turn 3. Cult Conscript's '{1}{B}: Return this card from your graveyard to the battlefield' and Phoenix Chick's {R}{R} return also give a mana-light hand a repeatable use for two and three lands. |
| decapitation | mitigation | The plan does not depend on Rundvelt Hordemaster surviving. If it is answered on sight, the deck is still 18 creatures with Garna, Bloodfist of Keld ('Whenever another creature you control dies, draw a card if it was attacking. Otherwise, Garna deals 1 damage to each opponent') as an independent death payoff, Sheoldred as a standalone 4/5 deathtouch clock, and Squee ('You may cast this card from your graveyard by paying {3}{R}') plus Phoenix Chick and Cult Conscript as threats that answer their own removal. |
| gas-out | mitigation | Net-positive / self-replacing card count in this list: Goblin Picker x2 (loot), Sprouting Goblin x2 (land-to-card), Braids x1 ('that player loses 2 life and you draw a card' every end step), Garna x2 (draw on every attacking death), Balduvian Atrocity x1 (rebuys a creature from the graveyard) = 8 of 23 nonland cards refuel, and Sheoldred converts each of those draws into 2 life. Plus three recursive threats that cost zero cards: Squee's graveyard cast, Cult Conscript's '{1}{B}: Return this card from your graveyard', and Phoenix Chick's {R}{R} return. |
| raced | mitigation | The deck now runs Phoenix Chick ('Flying, haste ... Whenever you attack with three or more creatures, you may pay {R}{R}. If you do, return this card from your graveyard to the battlefield tapped and attacking with a +1/+1 counter on it') as a one-mana evasive clock that recurs for free, and Sheoldred, the Apocalypse ('Deathtouch', 4/5) as a ground blocker that trades with anything while its 'Whenever an opponent draws a card, they lose 2 life' clause runs an independent clock. Against the cube's 51-card evasion class the deck also boards Battlefly Swarm x2 ('{B}: This creature gains deathtouch until end of turn'). This replaces the pre-grill 'accepted', whose stated identity cost (dropping below 7 other Goblins) was falsified: the card cut for Phoenix Chick was Hurler Cyclops, which is not a Goblin. |
| disruption-fizzle | mitigation | The deck has no critical turn to interact with - it is not a combo. The nearest thing is Bone Splinters answered in response by removing its sacrifice target; Bone Splinters then fizzles for lack of a legal target, but the sacrifice cost is already paid, and that death still triggers Garna, Bloodfist of Keld ('Whenever another creature you control dies...'), which triggers on ANY creature. It does NOT automatically trigger Hordemaster (whose clause requires the dying creature be a Goblin - 7 of 17 creature cards) or Splatter Goblin (which triggers only when it is itself the fodder - 2 of 17). More generally, 18 creature cards across MV 1-4 means removing any one of them costs the opponent a card and does not stop the clock. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Rulik Mons, Warren Chief | RARES/OFF-COLOUR - a Goblin, but {1}{R}{G}{G} puts two green pips outside core_colors [B,R]. It is the anchor of the Gruul build instead. |
| Liliana of the Veil | RARE/MYTHIC CUT (5-card cap) - '-2: Target player sacrifices a creature' is repeatable edict removal and our graveyard is an asset, but all five rare slots are spent (Hordemaster, Squee, Braids, Sheoldred, Sulfurous Springs). This is the first card to try if you drop Sulfurous Springs back to a basic. |
| The Raven Man | RARE/MYTHIC CUT (5-card cap) - 'At the beginning of each end step, if a player discarded a card this turn, create a 1/1 black Bird creature token with flying' composes with Goblin Picker x2 ('{R}, {T}, Discard a card: Draw a card') for a flier per turn, which would also patch the evasion gap. Lost only to the rare budget. |
| Evolved Sleeper | RARE/MYTHIC CUT (5-card cap) - a one-drop mana sink that scales to a 3/3 deathtouch and draws; no death, Goblin, or sacrifice text, so it lost the slot to Sheoldred. |
| Defiler of Flesh | RARE/MYTHIC CUT (5-card cap) - 'Whenever you cast a black permanent spell, target creature you control gets +1/+1 and gains menace' pays off 8 of the 23 nonland cards (the black permanents), which is under 35% of the list, and {2}{B}{B} competes with Sheoldred at the same cost and colour demand. |
| Ragefire Hellkite | RARE/MYTHIC CUT (5-card cap) - 'Whenever this creature attacks, you may sacrifice another creature. If you do, this creature gains double strike' turns a token into 10 evasive damage, but {4}{R}{R} is two mana past this deck's top end and the goldfish turn is 6. |
| Defiler of Instinct | RARE/MYTHIC CUT - 'Whenever you cast a red permanent spell, this creature deals 1 damage to any target' pays off only 7 of the 23 nonland cards here (the red permanents); it belongs in the mono-red build, not this one. |
| Weatherlight Compleated | RARE/MYTHIC CUT - the shape judge flagged it as a weak keystone and the read holds: 'As long as Weatherlight Compleated has four or more phyresis counters on it, it's a Phyrexian creature' means four of our creatures must die before it is a body at all. |
| Hurler Cyclops | STRONG UNCOMMON, ONE TIER BELOW - '{1}, Sacrifice another creature: This creature deals 1 damage to any target' is the pool's best repeatable sacrifice outlet, but at {3}{R}{R} it is the only 5-drop in a turn-6 deck. Braids fills the same outlet role three mana earlier. Bring it back if the metagame slows down. |
| Phyrexian Vivisector | STRONG COMMON, ONE TIER BELOW - 'Whenever a creature you control dies, scry 1' is selection, not card advantage; Balduvian Atrocity occupies the same body slot and converts a graveyard Goblin into an extra attack plus a guaranteed second death. |
| Balduvian Berserker | 'When this creature dies, it deals damage equal to its power to any target' with a printed power of 1 - a death payoff that delivers 1 damage. Lightning Strike deals 3 for the same two mana. |
| Cut Down | SIDEBOARD CONSIDERATION - 'Destroy target creature with total power and toughness 5 or less' is the cheapest answer in the pool, but it is blank against Sheoldred (9), Tyrannical Pitlord (12), Ragefire Hellkite (8) and Writhing Necromass (10). Board it in against low-curve aggro. |
| Sengir Connoisseur | SIDEBOARD CONSIDERATION - 'Flying / Whenever one or more other creatures die, put a +1/+1 counter on this creature' is a real evasive finisher off our own deaths, but {3}{B}{B} is a five-drop in a deck with 10 black sources. Board it in for grindy, ground-stalled matchups. |
| Gibbering Barricade | SIDEBOARD CONSIDERATION - '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' is a sac outlet on a 2/4 defender; a defensive body an aggro deck does not want maindeck, but a reasonable board card against faster aggro. |
| Aggressive Sabotage | SIDEBOARD CONSIDERATION - kicked, 'Target player discards two cards... it deals 3 damage to that player' is disruption plus reach, but Pilfer costs two less and takes the specific card we fear. |
| Braids's Frightful Return | Chapter I is a sacrifice outlet, but a 3-turn Saga is slower than Bone Splinters and Braids at the same or lower cost. |
| Toxic Abomination | A 3/2 for {1}{B} but 'you lose 2 life' on entry with no death or Goblin relevance; Splatter Goblin and Cult Conscript are better two-drops for this plan. |
| Writhing Necromass | Cost reduction scales with creature cards in the graveyard, but this deck sacrifices tokens (which cease to exist) as often as cards, and a 7-drop overshoots a turn-6 clock. |
| Tyrannical Pitlord | 'When this creature leaves the battlefield, sacrifice the chosen creature' is anti-synergy with a deck that wants to choose which of its creatures die. |
| Phyrexian Rager | 'When this creature enters, you draw a card and you lose 1 life' replaces itself, but 0 of its lines carry a death trigger, Goblin type, or sacrifice payoff. |
| Crystal Grotto | MANA - 'When this land enters, scry 1. {T}: Add {C}. {1}, {T}: Add one mana of any color' does not cast a turn-1 {B} one-drop, and the deck has five of them. |
| Sol'Kanar the Tainted | {2}{U}{B}{R} requires blue, outside core_colors. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.53 adj [MV 2.35 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  53.1%  prod  58.8%  gap  -5.7pp  [OK]
  R  demand  46.9%  prod  58.8%  gap -11.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                              cube_mainboard, dominaria-united---main-set
commons_uncommons_max_2:           PASS - no name exceeds 2 copies across mainboard + sideboard; Extinguish the Light is 1 MB + 1 SB = 2.
rares_mythics_max_1_each:          PASS - each at 1 copy.
rares_mythics_max_5_total:         PASS - 5 of 5 used (Rundvelt Hordemaster, Squee Dubious Monarch, Braids Arisen Nightmare, Sheoldred the Apocalypse, Sulfurous Springs).
basics_unlimited:                  Mountain 7, Swamp 7 - format-supplied, rarity-exempt.
colour_legality:                   All 19 distinct nonland cards return a usable mode within core_colors [B,R] via effective_cost.best_mode; 0 off-identity inclusions.
```
