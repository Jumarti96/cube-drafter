---
deck_name: "br-blight-drain-reach"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BR"
format: "40-card"
built_at: "2026-08-09T22:49:21Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x6  Mountain        Land  [C]
x6  Swamp           Land  [C]
x2  Evolving Wilds  Land (fixing)  [C]
x2  Geothermal Bog  Land (BR dual, tapped)  [C]
x1  Blood Crypt     Land (untapped-capable BR dual)  [R]
```

### CREATURES (11)

```
CMC  Card                                               Qty  Color  Role
  1  Bile-Vial Boggart                                  x2   B      Fodder  [C]
  2  Boggart Cursecrafter                               x2   BR     Payoff (drain) / deathtouch wall  [U]
  2  Warren Torchmaster                                 x2   R      Free per-turn blight outlet  [U]
  3  Elder Auntie                                       x1   R      Fodder (two bodies)  [C]
  3  Grub, Storied Matriarch // Grub, Notorious Auntie  x1   C      Recursion + repeatable death triggers  [R]
  3  Shadow Urchin                                      x1   BR     Free blight outlet / card advantage  [R]
  3  Sting-Slinger                                      x2   R      Payoff + repeatable outlet  [U]
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                  Qty  Color  Role
  1  Cinder Strike         x2   R      Interaction (blight-costed)  [C]
  1  Requiting Hex         x2   B      Interaction (blight-costed)  [U]
  2  Bogslither's Embrace  x2   B      Interaction (exile)  [C]
  3  Blight Rot            x2   B      Interaction (counter-based removal, feeds Tarfire without consuming own board)  [C]
```

### OTHER SPELLS (4)

```
CMC  Card              Qty  Color  Role
  2  Lasting Tarfire   x2   R      Payoff (reach)  [U]
  3  Boggart Mischief  x2   B      Payoff (drain) + token generator  [U]
```

## SIDEBOARD (10)

```
Card               Qty  Color  Role / When to board in
Sear               x2   R      Hate: single large threat / fliers — vs decks with 4+ toughness threats or evasive finishers — it covers the hole in Requiting Hex's 'mana value 2 or less' clause  [U]
Giantfall          x1   R      Hate: artifacts — vs Equipment or mana-rock decks (11 artifacts, 4.2% density)  [U]
Tweeze             x2   R      Flex: damage any target — vs X/3 evasive creatures, or when extra reach closes the game  [C]
Heirloom Auntie    x1   B      Flex: attrition body — vs grindy midrange where a self-repairing 4/4 Goblin outclasses a burn spell  [C]
Darkness Descends  x2   B      Hate: wide boards — vs token/go-wide decks; it also places counters (turning on Lasting Tarfire) and every Goblin it kills triggers this deck's own drains  [U]
Rooftop Percher    x2   C      Hate: graveyard — vs recursion decks — 39 graveyard-interaction cards, 15.0% of the cube, the largest class in the threat profile; changeling also makes it a Goblin for Cursecrafter and Mischief  [C]
```

## ANALYSIS

### DECK IDENTITY

BR Goblin Aristocrats, rebuilt around the fact that this cube contains ZERO sacrifice outlets — no card in the 282-card pool reads "Sacrifice a creature:". The substitute is blight N (put N -1/-1 counters on a creature you control), which kills a 1/1 Goblin token on demand. The deck converts every blight into damage three ways at once: Lasting Tarfire deals 2 to each opponent at any end step in which a counter was placed, Sting-Slinger turns its own blight activation into 2 damage, and Boggart Cursecrafter plus Boggart Mischief convert the consumed Goblin into 1 damage and 1 drain. Every removal spell is chosen to pay the engine — Cinder Strike, Requiting Hex, Bogslither's Embrace and Blight Rot all place a counter — so an answer and an engine activation cost one card.

### HOW THE ENGINE WORKS

The cube has no sacrifice outlet, so the aristocrats loop runs on blight instead. A blight 1 on a 1/1 Goblin token makes it 0/0 and it dies as a state-based action, which is a sacrifice in everything but name. That single action pays four different bills at once:

| Trigger | Source | Payment |
|---|---|---|
| a counter was placed | Lasting Tarfire | 2 damage to each opponent at end step |
| the outlet itself | Sting-Slinger | 2 damage to each opponent |
| a Goblin died | Boggart Cursecrafter | 1 damage to each opponent |
| a Goblin died | Boggart Mischief | each opponent loses 1, you gain 1 |

Two details make the engine cheaper than it looks. First, Lasting Tarfire reads "if you put a counter on **a** creature this turn" — any creature, including an opponent's. That is why Blight Rot is maindecked over a burn spell: its four counters remove a blocker AND arm Tarfire without spending one of your own bodies. Second, Tarfire triggers at *each* end step, not just yours, so holding Requiting Hex up on the opponent's turn buys a second 2 damage in the same turn cycle.

Grub, Notorious Auntie is the most compact version of the loop: "Whenever Grub attacks, you may blight 1. If you do, create a tapped and attacking token that's a copy of the blighted creature, except it has 'At the beginning of the end step, sacrifice this token.'" Blight a 1/1 Goblin token and it dies immediately (death trigger one), while the copy it spawned sacrifices itself at end step (death trigger two) — two Goblin deaths per attack, for no mana and no cards.

### COUNT-DEPENDENT VERDICTS

- Boggart Cursecrafter reads 'Whenever another GOBLIN you control dies'. Goblin bodies in this mainboard: Bile-Vial Boggart x2, Boggart Cursecrafter x2, Warren Torchmaster x2, Sting-Slinger x2, Elder Auntie x1, Grub x1 = 10 Goblin creature CARDS, plus 5 Goblin TOKENS (Elder Auntie 1, Boggart Mischief 2 each x2) = 15 Goblin bodies. Shadow Urchin is an Ouphe and is deliberately not counted. INCLUDE.
- Boggart Mischief reads 'Whenever a GOBLIN creature you control dies' — not 'another' — so its own two ETB tokens feed it. Same 15-body denominator. INCLUDE.
- Lasting Tarfire reads 'if you put a counter on A creature this turn' — any creature, not only yours. Cards in this list that place a counter: Cinder Strike x2, Requiting Hex x2, Bogslither's Embrace x2, Blight Rot x2, Sting-Slinger x2, Warren Torchmaster x2, Bile-Vial Boggart x2 (on death), Boggart Mischief x2 (on ETB), Shadow Urchin, Grub = 18 of the 23 nonland cards. INCLUDE.
- Free per-turn blight enablers — outlets costing no mana and no card, so Lasting Tarfire is live without spending anything: Warren Torchmaster x2, Shadow Urchin, Grub = 4 of 23. This is the count the Phase 9 Challenger raised (it was 3 of 24, all singleton rares under a full rare cap) and it is the reason Warren Torchmaster x2 was added.
- Blight targets: 11 creature cards plus up to 5 tokens. Blight Rot is deliberately included because it places its four counters on an OPPONENT's creature, so it fires Lasting Tarfire without consuming any of those 16 bodies.
- Damage per turn cycle: Lasting Tarfire 2 + Sting-Slinger 2 = 4 with only those two in play. Adding Boggart Cursecrafter and Boggart Mischief and killing one Goblin token brings it to 6, but that requires four permanents plus a token, not two. At 4 per cycle from a turn 3-4 assembly, 20 life falls on turn 8-9; Lasting Tarfire triggering at EACH end step (an instant-speed Requiting Hex on the opponent's turn buys a second 2) is what pulls it back to the recorded thesis turn of 8.

### SLOT ALLOCATION

| Slot | Count | % | Rationale |
|---|---|---|---|
| lands | 17 | 42.5% | computed by deck_audit.land_target from avg MV 2.130 and accel 0; raw target 16.507 rounds to 17. Not read off a table. |
| interaction | 8 | 34.8% | Cinder Strike x2, Requiting Hex x2, Bogslither's Embrace x2, Blight Rot x2 — the 35% overrun of the Midrange 20-30% band that the shape judge explicitly credited this build for. Every one of the eight places a -1/-1 counter, so each is simultaneously an answer and a Lasting Tarfire activation; the overrun is double-counted work, not dilution. |
| threats_payoffs | 15 | 65.2% | Midrange absorbs the Engine budget into Threats/Payoffs. 8 payoff copies (Lasting Tarfire x2, Sting-Slinger x2, Boggart Cursecrafter x2, Boggart Mischief x2), 4 free per-turn blight outlets (Warren Torchmaster x2, Shadow Urchin, Grub), 3 fodder bodies (Bile-Vial Boggart x2, Elder Auntie). Each is simultaneously a body and ammunition. |
| engine_infra | 0 | 0% | absorbed per the Midrange note; no standalone engine slot is bought |

### MANA DERIVATION

- Land target after FILL: {"base_lands": 17, "base_p_window": 0.7945, "avg_mv": 2.130434782608696, "reference_avg_mv": 2.5, "accel": 0, "adjustment": -0.493, "raw_target": 16.507, "clamped": false, "recommended_land_count": 17, "p_window_at_recommended": 0.7945}
- Deviation: none — built to 17, the post-FILL recommendation. The pre-FILL call returned 16 because the projected list contained Scuzzback Scrounger (accel 1); that card was cut during the Phase 9 repair, accel fell to 0, and the recommendation moved to 17. The count was adopted rather than argued with.
- Composition: 5 of the 17 lands are tapped-capable: Geothermal Bog x2 ('This land enters tapped'), Evolving Wilds x2 (fetches a basic tapped), and Blood Crypt if the 2 life is declined. Blood Crypt is the only untapped-capable BR dual in the pool. Evolving Wilds runs at its full 2 copies: the earlier note held it to 1 on the grounds that a tapped turn-one land costs a one-drop, but the repaired list has 6 one-drops rather than 8, and the goldfish sim answers the concern empirically — 86% keepable hands and 88% reaching three lands by turn 3, both improved over the 16-land version.
- Pips: {"B": 12, "R": 11, "hybrid_B/R": 1} → B 52.2% / R 47.8%
- Sources: 6 Swamp + Blood Crypt + Geothermal Bog x2 = 9 black sources; 6 Mountain + Blood Crypt + Geothermal Bog x2 = 9 red. Evolving Wilds is deliberately NOT counted as a source of both colours — it fetches one basic of one colour, chosen on resolution, which is how deck_audit.land_color_production treats it. 9/17 = 52.9% production against 52.2% B and 47.8% R demand.
- Data gap: Grub, Storied Matriarch // Grub, Notorious Auntie has mana_cost null in the enriched data (a transforming double-faced card, cmc 3.0, colour identity B,R). Its pips are excluded from the count above rather than guessed: the IRON RULE forbids inventing a cost the pool does not state.

### BUILD SELECTION (Phase 5B sketch → judge → lock)

**Archetype family:** midrange — The locked thesis's default_role is 'controller' (the drains are inevitability engines, not a clock), but the include-candidate curve tops at 3 with a 2.13 average MV and the Goblins are simultaneously bodies and ammunition — the Midrange 'threats pull double duty' shape. Competitive intent breaks the control/midrange tie toward midrange.

**Chosen lens:** most flexible toolbox

**Judge grounds:** Its one band overrun (Interaction 35%) is the only deviation in the field paid for by the thesis rather than excused around it: the blight-costed removal spells are simultaneously answers and Lasting Tarfire triggers. Its blight-target-hygiene note was the only sketch to address the mechanism's real failure mode — an answer stranded with no legal blight target.

**Rejected builds:**

- *most threat-dense / aggressive* (24 nonland: Interaction 25%/6, Threats-Payoffs 75%/18, Engine 0%) — Judge: it nominates Boneclub Berserker as 'the clock' and converts token width into combat lethality, but the thesis states 'Goblin tokens are ammunition, not a clock'; every token spent attacking is a token not fed to Sting-Slinger or Mischief, and the double-duty defence for a 75% Threats slot is real for three cards, not eighteen.
- *most grindy value* (23 nonland: Interaction 30%/7, Threats-Payoffs 39%/9, Engine 30%/7) — Judge: correct instinct and honest accounting, but it spends a declared 30% Engine column on cards that convert blight into CARDS when the thesis says blight must convert into DAMAGE; at competitive power it buys resilience already earned elsewhere and risks the drip finishing past turn 8.

**Weak keystones flagged by the judge, and their resolution:**

- **Bogslither's Embrace** — flag: 'blight 1 OR pay {3}' — the mode is mandatory, the counter is not; with no legal blight target it is a 5-mana exile that contributes nothing to Lasting Tarfire. Resolution: KEPT, with the count: this list runs 11 creature cards plus up to 5 tokens, and the board is empty only on turns 1-2, before Bogslither's Embrace is castable at all. It is additionally declared at reliability weight 0.8 in the Phase 6b assembly check with this exact mechanism as its stated why.
- **Nameless Inversion** — flag: 'returnable by Grub' was unsupported inside that sketch, whose only Grub effect was Grub's Command. Resolution: The claim would be true of this list — Grub, Storied Matriarch is maindecked and Nameless Inversion has changeling, so it is a Goblin card in the graveyard. But Nameless Inversion was CUT: its removal places no counter, so it fails the property the build was selected for, and the eight interaction slots went to counter-placing spells instead.

**Harvested from rejected builds:**

- Warren Torchmaster (from *most threat-dense / aggressive*) — free per-turn blight outlet — taken into the same double-duty Threats/Payoffs slot, not a new role
- Shadow Urchin (from *most grindy value*) — free per-attack blight outlet whose counter-death clause refuels the deck — a Threats/Payoffs body, not a new Engine column
- Grub, Storied Matriarch // Grub, Notorious Auntie (from *most grindy value*) — recursion plus a repeatable per-attack death trigger — a Threats/Payoffs body
- Elder Auntie (from *most threat-dense / aggressive*) — two Goblin bodies per card, the ammunition slot

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:6  2:8  3:9
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.8: Lasting Tarfire@0.9, Lasting Tarfire@0.9) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 15 copies (effective 13.8: Cinder Strike@0.8, Cinder Strike@0.8, Requiting Hex@0.8, Requiting Hex@0.8, Bogslither's Embrace@0.8, Bogslither's Embrace@0.8) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 70%  T2 96%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Boggart Cursecrafter, Bile-Vial Boggart, Blight Rot, Cinder Strike
  OK        single_large_threat: Bogslither's Embrace, Blight Rot
  CONCEDED  noncreature_permanents: Of the 99 BR-legal cards in the pool, none destroys or exiles an enchantment — the dossier's enchantment answers are green, green-blue and white only — and the sole artifact answer in these colours is Giantfall ('Destroy target artifact'), which is held in the sideboard because the cube contains 11 artifacts at 4.2% density. Maindecking it would spend an engine slot on a class present in fewer than 1 card in 20.
  CONCEDED  stack: Black and red contain no counterspells or stack interaction in this pool; the deck answers a countered or discarded engine piece with redundancy — 8 payoff copies across four different cards, two of which are enchantments that most creature removal cannot touch.
  CONCEDED  graveyard: The only graveyard hate available to these colours is Rooftop Percher, a colourless five-drop whose exile clause does not advance the damage engine; it is held in the sideboard rather than maindecked.
```

- No WARN-tier flags returned. Curve PASS (1:6, 2:8, 3:9 — no card above mana value 3). Goldfish PASS: 86% keepable hands against the 80% threshold, 88% reaching three lands by turn 3.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands convert to damage through Sting-Slinger x2 ('{1}{R}, {T}, Blight 1: This creature deals 2 damage to each opponent'), a repeatable two-mana damage outlet that needs no new cards, and through Grub's two transform clauses ('At the beginning of your first main phase, you may pay {R} / {B}. If you do, transform Grub'), which are per-turn mana sinks that re-arm its attack-copy trigger. Evolving Wilds x2 also turns a surplus land into a shuffle. |
| screw | mitigation | Six of the 23 nonland cards cost one mana (Bile-Vial Boggart x2, Cinder Strike x2, Requiting Hex x2) and eight cost two, so a two-land hand deploys a body or an answer on each of the first three turns and can cast Lasting Tarfire on turn 2. The goldfish sim reports 86% keepable hands and 88% reaching three lands by turn 3 — the deck's entire curve stops at mana value 3, so it never needs a fourth land. |
| decapitation | mitigation | There is no single key card: the kill mechanism is spread across 8 copies of four different cards. Two of them, Lasting Tarfire and Boggart Mischief, are enchantments, and the dossier's enchantment-answer census contains only 4 cards cube-wide, in green, green-blue and white — meaning no black or red deck in this cube can remove half the engine at all. |
| gas-out | mitigation | Refuel comes from Shadow Urchin ('Whenever a creature you control with one or more counters on it dies, exile that many cards from the top of your library. Until your next end step, you may play those cards') — a deck whose plan is killing its own counter-laden creatures triggers it on its own operation — and from Grub, Storied Matriarch ('return up to one target Goblin card from your graveyard to your hand'), which rebuys spent fodder each time it transforms back. The mainboard holds 12 Goblin cards for Grub to return. |
| raced | mitigation | Boggart Cursecrafter is a {B}{R} 2/3 with deathtouch, which trades with any attacker in the cube regardless of size; Boggart Mischief gains 1 life per Goblin death while draining, and Requiting Hex gains 2 more, so the engine's own operation moves the race. Against the 41-card evasion class (15.8% of the cube) the maindeck answer is Blight Rot ('Put four -1/-1 counters on target creature', killing 135 of the pool's 168 distinct creatures) with Sear x2 and Tweeze x2 boarded. |
| disruption-fizzle | accepted | The deck has no protection and no stack interaction — black and red offer none in this pool. Mitigating would mean maindecking Hexing Squelcher ('Spells you control can't be countered / Other creatures you control have Ward—Pay 2 life'), which is a real card here (it is a Goblin, so it feeds the drains, and its ward taxes all removal, not only counterspells) but costs a rare slot and a Threats/Payoffs slot for a 2/2 that places no counter and makes no token — displacing a payoff or an enabler against the 95% of the cube that is not a counterspell deck. The plan's answer to one piece of interaction is that no single turn is critical: the engine deals 4-6 per turn cycle rather than in one burst, so losing any one activation costs damage, not the game. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Soul Immolation | Mythic; 'blight X ... deals X damage to each opponent and each creature they control' — X is capped by the greatest toughness among creatures you control, and this deck's board is 1/1 tokens and 2/3s, so X is realistically 3-4 for five mana, and it kills the deck's own engine board's counterparts only on their side but costs the blight up front on one creature. |
| Spinerock Tyrant | Mythic 6/6 flier with wither for {3}{R}{R}; copies single-target instants/sorceries. This deck runs 8 single-target burn/removal copies out of 24 nonland, but it is a five-drop in a deck whose land count is built for a 2.3 average MV, and it competes for the 5-rare cap against engine pieces. |
| Champion of the Weird | Rare 5/5 for {3}{B}; 'Pay 1 life, Blight 2: Target opponent blights 2' is a repeatable outlet, but the additional cost 'behold a Goblin and exile it' removes a Goblin from the battlefield or hand, which subtracts ammunition from the drains rather than adding it. |
| Taster of Wares | Rare; ETB exiles a card from the opponent's hand where X = number of Goblins you control. Hand disruption does not advance a damage-engine clock, and it competes for the 5-rare cap. |
| Hexing Squelcher | Rare; 'Spells you control can't be countered / Other creatures you control have Ward—Pay 2 life.' Protection is real, but the cube's threat_profile shows counterspells are a single-colour narrow class; better as a sideboard consideration than a maindeck rare slot. |
| Gutsplitter Gang | 6/6 for {3}{B} with a forced 'blight 2 or lose 3 life' each first main phase. The blight 2 is an engine trigger, but only ONE of the deck's two drains cares about the counter itself (Lasting Tarfire); a blight 2 that does not kill a 1/1 wastes half of it, and the forced trigger keeps consuming board when you want the board wide. |
| Boggart Prankster | 'Whenever you attack, target attacking Goblin you control gets +1/+0 until end of turn.' — a combat-damage payoff; this build wins by non-combat damage and its tokens are ammunition rather than attackers. |
| Blighted Blackthorn | 'Whenever this creature enters or attacks, you may blight 2. If you do, you draw a card and lose 1 life.' — a genuine blight outlet with card draw, but {4}{B} is two mana above this deck's curve ceiling. |
| Dream Seizer | 'When this creature enters, you may blight 1. If you do, each opponent discards a card.' — a one-shot blight trigger on a 3/2 flier for {3}{B}; the discard does not advance the damage clock and the body is worse than the four-drops already in the list. |
| Feed the Flames | 'deals 5 damage to target creature' for {3}{R} — strictly a bigger, slower Sear; the deck wants its four-mana turns for double-spelling engine pieces. |
| Darkness Descends | 'Put two -1/-1 counters on each creature.' — symmetric; it wipes this deck's own 1/1 token ammunition and its Cursecrafter (2/3) alongside the opponent's board. |
| Bitterbloom Bearer | Mythic; makes a 1/1 Faerie each upkeep — a repeatable token stream, but the tokens are Faeries, not Goblins, so Boggart Cursecrafter and Boggart Mischief (both read 'Goblin ... dies') see 0 of them. |
| Meek Attack | Mythic; '{1}{R}: put a creature card with total power and toughness 5 or less from your hand onto the battlefield ... sacrifice that creature' at end step. This IS a sacrifice outlet, but it only sacrifices creatures it put onto the battlefield from hand, so it does not consume the token board the drains are fed by. |
| Mirrormind Crown | Rare Equipment; doubles the first token creation each turn into copies of the equipped creature. Six total mana (cast + equip) before it does anything, against a 5-rare cap and a curve topping at four. |
| Collective Inferno | Rare; 'Double all damage that sources you control of the chosen type would deal.' Naming Goblin doubles Sting-Slinger and Boggart Cursecrafter, but NOT Lasting Tarfire or Boggart Mischief (an Enchantment and a life-loss effect respectively); {3}{R}{R} for a partial multiplier. |
| Barbed Bloodletter | Grants wither, so combat damage places counters and turns on Lasting Tarfire — but it needs a creature to connect in combat, and this build's creatures are ammunition rather than attackers. |
| Moonshadow | Mythic 7/7 for {B} that enters with six -1/-1 counters and only sheds them when permanent cards hit your graveyard. This deck's dying tokens are tokens, not cards, so they do not shrink it. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.13   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.49 adj [MV 2.13 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  52.2%  prod  52.9%  gap  -0.7pp  [OK]
  R  demand  47.8%  prod  52.9%  gap  -5.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
check1_mainboard_count: PASS (40/40)
check1_sideboard_count: PASS (10/10)
check2_membership: PASS
check3_copy_limits: PASS
check3b_rare_mythic_cap: PASS (3/5) [('Shadow Urchin', 'rare'), ('Grub, Storied Matriarch // Grub, Notorious Auntie', 'rare'), ('Blood Crypt', 'rare')]
check4_colour_usability: PASS
check5_splash: PASS (no splash colours declared)
```
