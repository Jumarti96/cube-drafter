---
deck_name: "brg-lands-in-the-bin"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BRG"
format: "40-card"
built_at: "2026-08-18T16:23:37Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  1x Crystal Grotto             scry 1, {1},{T}: any colour
  2x Forest                     G
  2x Geothermal Bog             BR dual (Swamp Mountain), enters tapped
  2x Haunted Mire               BG dual (Swamp Forest), enters tapped
  2x Mountain                   R
  6x Swamp                      B
  2x Wooded Ridgeline           RG dual (Mountain Forest), enters tapped
```

### CREATURES (11)

```
CMC  Card                       Qty   Color  Role                                           Rar
  2  Goblin Picker              x2    R      Engine — {R},{T}, Discard a card: Draw a card  C
  2  Sprouting Goblin           x2    R      Engine — {R},{T}, Sac a land: Draw a card      U
  2  Yavimaya Iconoclast        x1    G      Threat - 3/2 trample two-drop; kicked {R} for… U
  3  Braids, Arisen Nightmare   x1    B      Engine — end-step land sacrifice into draw/dr… R
  3  Uurg, Spawn of Turg        x2    BG     Payoff — power = land cards in your graveyard… U
  4  Nemata, Primeval Warden    x1    BG     Threat/Answer - exiles opposing creatures tha… R
  4  Sheoldred, the Apocalypse  x1    B      Threat — 4/5 deathtouch; drain on every draw   M
  4  Soul of Windgrace          x1    BRG    Payoff/Engine — replays lands from graveyard;… M
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                       Qty   Color  Role                                           Rar
  1  Cut Down                   x2    B      Interaction — 1-mana instant removal           U
  1  Urborg Repossession        x2    B      Payoff — kicked, returns a land AND a creatur… C
  2  Lightning Strike           x2    R      Interaction — 3 damage any target              C
  2  Tear Asunder               x1    G      Interaction — modal exile (kicked: any nonlan… U
  2  Thrill of Possibility      x2    R      Engine — discard a land, draw two              C
  3  Shadow Prophecy            x1    B      Engine - instant-speed dig that bins the rema… C
  4  Extinguish the Light       x1    B      Interaction — unconditional creature/PW remov… C
```

### OTHER SPELLS (1)

```
CMC  Card                       Qty   Color  Role                                           Rar
  3  Liliana of the Veil        x1    B      Interaction — symmetric discard (bins our lan… M
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                                      Rar
Broken Wings               x2    G      Answer - artifact / enchantment / flier | vs artifact, ench… C
Tear Asunder               x1    G      Answer - exile any nonland permanent when kicked | vs resil… U
Choking Miasma             x2    B      Sweeper - all creatures -2/-2 | vs go-wide token boards (To… U
Smash to Dust              x1    R      Answer - modal: destroy artifact / destroy defender / 1 dmg… C
Snarespinner               x2    G      Blocker - reach, +2/+0 when blocking a flier | vs flier-bas… C
Extinguish the Light       x1    B      Answer - unconditional destroy creature or planeswalker | v… C
Knight of Dusk's Shadow    x1    B      Hate - 'Your opponents can't gain life' | vs the cube's 22-… U
```

## ANALYSIS

### DECK IDENTITY

Jund grindy-value midrange whose engine is the conversion of surplus lands into cards. Twelve of the twenty-three nonland cards can put a land into the graveyard - Sprouting Goblin and Goblin Picker as repeatable tap outlets, Thrill of Possibility and Shadow Prophecy at instant speed, Braids at every end step, Liliana every turn, Soul of Windgrace at will, Uurg on every upkeep - and every land that reaches the bin is a point of power on Uurg, Spawn of Turg, whose power is literally the count of land cards in your graveyard. Soul of Windgrace and Urborg Repossession recycle those same lands back into play or into hand, so the resource is rented rather than spent. The game ends with combat damage from a 4-7 power Uurg, a 5/4 Soul of Windgrace that rebuys a land on every attack, and Sheoldred draining two life on each of the deck's many draws, backed by seven pieces of removal and Nemata, Primeval Warden exiling everything that dies on the other side of the table.

### HOW BIG IS UURG, ACTUALLY?

The whole deck rests on one number, so it is worth computing rather than asserting. Uurg's power is the count of land cards in your graveyard, and this list has twelve of twenty-three nonland cards that can put one there. Their rates differ sharply:

| Source | Copies | Lands binned per use | Repeatable? |
|---|---|---|---|
| Uurg's own upkeep surveil | 2 | 0.425 (17 lands / 40 cards) | yes, every upkeep |
| Uurg's `{B}{G}, Sacrifice a land` | 2 | 1 | yes, mana-limited |
| Sprouting Goblin `{R}, {T}, Sacrifice a land` | 2 | 1 | yes, once per turn each |
| Goblin Picker `{R}, {T}, Discard a card` | 2 | 1 if holding a land | yes, once per turn each |
| Thrill of Possibility | 2 | 1 if holding a land | no |
| Shadow Prophecy | 1 | bins 1 card, 0.425 lands | no |
| Braids end-step sacrifice | 1 | 1 | yes, every end step |
| Liliana `+1` | 1 | 1 if holding a land | yes, every turn |
| Soul of Windgrace `{1}{R}, Discard a land card` | 1 | 1 | yes, mana-limited |

A realistic line: Uurg lands on turn 3 as a **0/5** or **1/5**. It is a wall, not a threat, and the deck is honest about that in its `raced` failure mode. From turn 4 a single Sprouting Goblin activation per turn plus the upkeep surveil adds roughly 1.4 lands per turn, so Uurg is a **3/5 on turn 5**, a **4/5 on turn 6** and a **6/5 on turn 7** — which is the thesis turn. With Braids also on the battlefield that curve steepens by a full point per turn.

The important structural point is that **toughness 5 is fixed**. Uurg blocks profitably from the moment it lands regardless of how empty the graveyard is, so the ramp-up period is not dead time — it is the defensive phase the removal suite is built to extend.

### THE DECK'S CENTRAL TENSION: SOUL OF WINDGRACE SHRINKS UURG

Soul of Windgrace's attack trigger — "you may put a land card from a graveyard onto the battlefield tapped under your control" — **removes** a land from the graveyard, costing Uurg a point of power, while its `{1}{R}` ability puts one back. The two are not automatically in balance, and the trigger says *may*.

The correct play pattern is therefore: **decline the Soul trigger when Uurg is your clock**, take it when it is not (when you need the land drop, when Uurg is dead, or when the land coming back is your fourth colour source). This is the single most common misplay available in the deck and it is a genuine choice, not a synergy.

Urborg Repossession has the same shape and the same answer: kicked, it returns a land *and* a creature to hand, trading one point of Uurg power for two cards.

### WHY DOMAIN WAS DECLINED

Dominaria United's lands-matter cards are overwhelmingly **Domain** — basic land types on the battlefield — rather than lands in the graveyard. This deck deliberately does not play that game. The cube offers five commons that would each add an off-colour basic land type while still producing an on-colour mana (Contaminated Aquifer, Sunlit Marsh, Sacred Peaks, Radiant Grove, Tangled Islet), so Domain 4 or 5 is reachable without spending a rare slot.

It was declined on a count, not on impossibility: after the Phase 9 repairs exactly **1 of 23** nonland cards scales with Domain (Shadow Prophecy), and the deck's white and blue pip totals are both **0**, so each such land would enter tapped and produce one colour that is unspendable here. The price of buying +1 Domain is a seventh tapped land out of seventeen, to improve one card by one look. Every heavier Domain payoff — Bortuk Bonerattle, Territorial Maro, Nishoba Brawler, Drag to the Bottom — was cut on the same arithmetic.

The opposite trade is a real deck, and it is a different one: the Domain-forward Jund build in this same cube.

### SHEOLDRED IS NOT A GENERIC BOMB HERE

Sheoldred, the Apocalypse asks "how often do you draw a card?" This list answers with **9 of 23** nonland cards that draw beyond the draw step, five of them repeatable: Thrill of Possibility x2 (two draws each), Goblin Picker x2, Sprouting Goblin x2, Braids, Soul of Windgrace, Nemata. A turn in which you untap with Sheoldred, both Goblins and a spare `{R}{R}` gains 6 life across the draw step and two activations. Her deathtouch also matters structurally: with Uurg's 5 toughness she gives the deck two blockers no ground creature in the cube profitably attacks into.

### WHAT THE SIDEBOARD IS ACTUALLY BUILT AGAINST

The dossier's threat profile for this cube ranks evasion first at **51 cards / 21%** — by a wide margin the largest class — and this deck's mainboard has exactly one card with reach or flying (Nemata). Five of the ten sideboard slots address that axis directly: Broken Wings x2 destroys a flier outright, Snarespinner x2 blocks as a 3/3 against one, and Nemata's reach is already maindeck.

The second-largest class is graveyard interaction at **32 cards / 13%**, and the pre-grill build had no answer to it at all. Nemata, Primeval Warden fixed that in the mainboard: "If a creature an opponent controls would die, exile it instead" shuts off every reanimation and recursion effect on the other side of the table while building a Saproling board for us. It is the only functional graveyard answer in BRG, which is why it was worth displacing a rare for.

Knight of Dusk's Shadow answers the lifegain class (22 cards / 8.9%) with "Your opponents can't gain life" — a class this deck previously could not interact with at any rarity.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:10  3:5  4:4
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.4: Urborg Repossession@0.7, Urborg Repossession@0.7) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 7.4: Sprouting Goblin@0.8, Sprouting Goblin@0.8, Goblin Picker@0.8, Goblin Picker@0.8, Braids, Arisen Nightmare@0.8, Liliana of the Veil@0.8, Shadow Prophecy@0.6) → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 57%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper: Choking Miasma's symmetric -2/-2 would kill four of the deck's eleven bodies (Sprouting Goblin 2/2 x2, Goblin Picker 2/2 x2), both repeatable land-conversion outlets, so it is sideboarded; mainboard the deck blocks behind Uurg's fixed 5 toughness, Sheoldred's 4/5 deathtouch and Nemata's 3/4 reach, which also converts each opposing death into a Saproling blocker.
  OK        single_large_threat: Extinguish the Light, Tear Asunder, Liliana of the Veil
  OK        noncreature_permanents: Tear Asunder, Liliana of the Veil
  CONCEDED  stack: BRG holds no counterspell in this cube, so the deck answers permanents after they resolve via Extinguish the Light, Tear Asunder and Liliana of the Veil rather than on the stack.
  OK        graveyard: Nemata, Primeval Warden
```

No WARN-tier structural flags were raised, so there are no structural responses to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Flood is inverted into the win condition. Twelve of the 23 nonland cards turn a surplus land into a resource: Sprouting Goblin x2 and Goblin Picker x2 are repeatable tap outlets, Thrill of Possibility x2 discards one at instant speed for two cards, Shadow Prophecy x1 bins the remainder of its own dig, Braids sacrifices one every end step for a card or 2 life, Liliana's +1 discards one every turn, Soul of Windgrace's '{1}{R}, Discard a land card: Draw a card' converts one at will, and Uurg's own '{B}{G}, Sacrifice a land' plus its upkeep surveil feed the same pile. Every land that reaches the graveyard is +1 power on Uurg. The 17th land was kept above the tag-derived 16 for exactly this reason. |
| screw | mitigation | Keepable two-land hands are supported by a 4/10/5/4 curve whose entire bottom half costs one or two mana: Cut Down x2, Urborg Repossession x2, Lightning Strike x2, Tear Asunder x1, Sprouting Goblin x2, Goblin Picker x2, Thrill of Possibility x2 and Yavimaya Iconoclast x1 = 14 of 23 nonland cards castable off two lands. Digging out is Sprouting Goblin's kicked 'search your library for a land card with a basic land type... put it into your hand' and Crystal Grotto's enters-scry. The goldfish simulation reports 86% keepable hands and 88% on three lands by turn three, both above threshold. |
| decapitation | mitigation | No single card is load-bearing. The payoff role runs 5 copies (Uurg x2, Soul of Windgrace x1, Urborg Repossession x2), effective 4.4 after reliability weighting, p=0.80 by turn 7. Soul of Windgrace answers removal on itself with '{2}{B}, Discard a land card: Soul of Windgrace gains indestructible until end of turn' - protection paid for with the same surplus lands the deck is already hoarding, so being targeted grows Uurg. Nemata, Primeval Warden replaces every opposing creature death with a Saproling, so trades leave us with bodies. |
| gas-out | mitigation | The deck refuels from the resource it has most of. Cards that are Net-Positive or Self-Replacing in this list: Thrill of Possibility x2 (net +1 each), Urborg Repossession x2 (two cards back when kicked), Shadow Prophecy x1 (net +1 at instant speed), Braids x1 (repeatable draw), Sprouting Goblin x2 and Goblin Picker x2 (repeatable conversion of a dead land into a live card), Soul of Windgrace x1 (repeatable draw), Nemata x1 (sacrifice two Saprolings to draw) = 12 of 23 nonland cards. CORRECTED after the grill: with a genuinely empty hand only ONE outlet still functions, not two - Goblin Picker's '{R}, {T}, Discard a card: Draw a card' has no card to discard, while Sprouting Goblin's 'Sacrifice a land' is paid from the battlefield and keeps working. Hellbent, the deck draws one extra card a turn, not two. |
| raced | accepted | Against the cube's fastest clocks the deck is behind on the first three turns and accepts it. Uurg is a 0/5 on an empty graveyard, so the primary threat does not threaten until the engine has run for two turns. Mitigating this fully would mean cutting the conversion outlets for vanilla beaters, which removes the very cards that make Uurg large and reduces the deck to a generic Jund pile with no reason to be built around lands - the identity cost is the whole thesis. The grill's partial mitigation was taken rather than dismissed: Yavimaya Iconoclast (3/2 trample for two, kicked for +1/+1 and haste) was added so the deck has a two-mana body that attacks on turn three without tapping for the engine. CORRECTED after the grill: the earlier claim that Uurg's 5 toughness 'walls every ground creature in the cube' is false - the BRG slice alone holds 8 ground bodies at 5 or more power (Mossbeard Ancient 7/7 trample, Defiler of Vigor 6/6 trample, Briar Hydra 6/6 trample, Territorial Maro, Molten Monstrosity 5/5 trample, Elfhame Wurm, Writhing Necromass, Hurler Cyclops), five of them with trample. Uurg walls the small and medium ground; the top end is answered by Extinguish the Light, Tear Asunder kicked, and Liliana's edict. |
| disruption-fizzle | mitigation | The engine has no critical turn to interact with — it is a set of independent one-mana-at-a-time activations rather than a chain. Killing Sprouting Goblin in response to its activation still leaves the land sacrificed and the card drawn (the cost is paid on activation), and there are three more redundant outlets on the battlefield or in hand. The only card whose loss compounds is Soul of Windgrace, which protects itself with '{2}{B}, Discard a land card: Soul of Windgrace gains indestructible until end of turn' — and that protection is itself paid for in binned lands, so being interacted with grows Uurg. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Serra Paragon | MYTHIC, off-colour. 'you may play a land from your graveyard' is the single best lands-in-the-bin payoff in the cube, but {2}{W}{W} is a double white pip and no BRG land in this pool produces W — it is not splashable at any land count. |
| Nemata, Primeval Warden | RARE, cut for the 5-card budget. 'If a creature an opponent controls would die, exile it instead' is the only functional graveyard hate available to BRG; its absence is why the graveyard coverage class is conceded. |
| Defiler of Vigor | RARE, cut for the 5-card budget. A 6/6 trample for {3}{G}{G} is the strongest top-end body in green, but green is the tertiary colour here at 5 of 33 pips and 7 sources — {G}{G} on turn five is not reliably castable. |
| Squee, Dubious Monarch | RARE, cut for the 5-card budget AND anti-synergistic: recasting it from the graveyard requires 'exiling four other cards from your graveyard', which would strip the very lands Uurg's power counts. |
| Llanowar Loamspeaker | RARE, cut for the 5-card budget. '{T}: Add one mana of any color' would fix the THIN three-colour base, but the mana audit already returns PASS on all three colours without it. |
| Drag to the Bottom | RARE, cut for the 5-card budget, and Domain-gated: 'each creature gets -X/-X where X is 1 plus the number of basic land types' is only -4/-4 here, at 4 mana, symmetric against our own 2/2 outlets. |
| The Cruelty of Gix | RARE, cut for the 5-card budget. Chapter III reanimates from any graveyard, but at {3}{B}{B} with a three-turn clock it is far slower than Urborg Repossession at {B}. |
| Bortuk Bonerattle | Uncommon, strong fit a tier below. Its reanimation is Domain-gated to 'mana value less than or equal to the number of basic land types', which this deck caps at 3 permanently, and 6 mana is two full turns past the thesis curve. |
| Shadow Prophecy | Uncommon-tier fit, cut on the same Domain cap: 'Look at the top X cards where X is the number of basic land types' is only 3 here, so it bins exactly one card and nets one, for 3 mana and 2 life. |
| The Weatherseed Treaty | Uncommon, cut on curve. Chapter I fetching a basic to the battlefield is real land supply, but the deck already runs 17 lands and needs its three-drops to affect the board immediately. |
| Phyrexian Rager | Cut during FILL to make room for Urborg Repossession x2 when the Phase 6b assembly gate failed at 3 payoff copies. Its card draw is generic; Urborg Repossession draws from the graveyard, which is where this deck's resources actually live. |
| Yavimaya Iconoclast | A 3/2 trample for two is efficient, but the locked lens is grindy value and it contributes nothing to the land-graveyard engine — 0 of its abilities interact with lands or the graveyard. |
| Rulik Mons, Warren Chief | Puts a land from the LIBRARY onto the battlefield, which is the opposite direction from the thesis; it never bins a land, and {1}{R}{G}{G} is the hardest cost in the pool for this manabase. |
| Floriferous Vinewall / Inscribed Tablet | Both find a land and put it in hand, which is genuine engine fuel, but a 0/2 defender and a sacrificial artifact are both zero-impact draws at a competitive power level. |
| Choking Miasma | Sideboard consideration, not mainboard: 'All creatures get -2/-2' kills our own Sprouting Goblin, Goblin Picker (both 2/2) and Eerie Soultender (3/1) — 6 of our 12 mainboard bodies. |
| Broken Wings / Smash to Dust / Snarespinner | Sideboard considerations. Broken Wings answers three distinct classes (artifact, enchantment, flier) at once; evasion is 51 cards / 21% of the cube, the largest single threat class in the dossier. |
| Sulfurous Springs / Karplusan Forest | The two on-colour untapped painlands are RARES; taking either would consume a rare/mythic slot that is worth more on a spell. Six enters-tapped commons carry the fixing instead. |
| Thran Portal | RARE. 'As this land enters, choose a basic land type' is the only card in the pool that could push this deck's Domain count from 3 to 4 — not worth a rare slot when every Domain payoff was already cut. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.39   Ramp cards: 3   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.65 adj [MV 2.39 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  55.9%  prod  64.7%  gap  -8.8pp  [OK]
  G  demand  17.6%  prod  41.2%  gap -23.6pp  [OK]
  R  demand  26.5%  prod  41.2%  gap -14.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: every card drawn from the cube's mainboard
[PASS] commons / uncommons: maximum 2 copies (combined mainboard + sideboard)
[PASS] rares / mythics: maximum 1 copy
[PASS] maximum 5 rare+mythic cards across both boards: 5 used - Braids, Arisen Nightmare (R), Liliana of the Veil (M), Nemata, Primeval Warden (R), Sheoldred, the Apocalypse (M), Soul of Windgrace (M)
[PASS] basic lands: unlimited, rarity-exempt (format-supplied)
[PASS] mainboard = 40 cards; sideboard = 10 cards
[PASS] colour usability: every nonland card usable within core colours BRG (no splash)
```