---
deck_name: "br-lasting-tarfire"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BR"
format: "40-card"
built_at: "2026-08-10T03:44:09Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x9   Mountain
x6   Swamp
x1   Blood Crypt     dual; untapped for 2 life, else tapped
x1   Geothermal Bog  dual; enters tapped
```

### CREATURES (10)

```
CMC  Card                 Qty  Color  Role            Rar
  2  Gristle Glutton      x2   R      Engine/Outlet   C
  2  Scuzzback Scrounger  x1   R      Engine/Outlet   R
  2  Warren Torchmaster   x2   R      Engine/Outlet   U
  3  Chaos Spewer         x2   BR     Payload/Payoff  C
  3  Shadow Urchin        x1   BR     Payload/Payoff  R
  3  Sting-Slinger        x2   R      Payload/Payoff  U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                  Qty  Color  Role                    Rar
  1  Cinder Strike         x2   R      Interaction/Disruption  C
  1  Requiting Hex         x2   B      Interaction/Disruption  U
  2  Bogslither's Embrace  x2   B      Interaction/Disruption  C
  3  Burning Curiosity     x2   R      Engine/Outlet           C
  5  Soul Immolation       x1   R      Payload/Payoff          M
```

### OTHER SPELLS (4)

```
CMC  Card              Qty  Color  Role            Rar
  2  Lasting Tarfire   x2   R      Payload/Payoff  U
  3  Boggart Mischief  x2   B      Payload/Payoff  U
```

## SIDEBOARD (10)

```
Card                Qty  Color  Role / When to board in                                                                                                                                                      Rar
Dawnhand Dissident  x1   B      vs graveyard decks (39 cards, 15.0% density) — repeatable '{T}, Blight 2: Exile target card from a graveyard' at 1 mana, and the blight is itself a Lasting Tarfire enabler  R
Boulder Dash        x2   R      vs wide token boards — kills two x/1 or x/2 bodies for 2 mana on 11 red sources, and can go to the face                                                                      U
Giantfall           x2   R      vs artifact decks (11 artifacts in cube, 4.2% density) — 'Destroy target artifact'; mode 1 stays live otherwise                                                              U
Sear                x2   R      vs evasive fliers and planeswalkers (evasion density 15.8%, 41 cards)                                                                                                        U
Blight Rot          x2   B      vs single large threats — instant-speed four -1/-1 counters, and the only removal that satisfies Lasting Tarfire off an OPPONENT's creature                                  C
Darkness Descends   x1   B      vs the widest token boards only; symmetric, and it kills our own 4 Goblin tokens, so 1 copy not 2                                                                            U
```

## ANALYSIS

### DECK IDENTITY

A two-colour B/R blight deck whose damage comes off triggers rather than the combat step. Lasting Tarfire converts any -1/-1 counter placed during a turn into 2 damage at each end step, and the list is built so that a counter gets placed at zero card cost on every one of your own turns — Warren Torchmaster at the beginning of combat on your turn, Scuzzback Scrounger at the beginning of your first main phase, and Gristle Glutton via an untimed tap ability. The opponent's end-step trigger is a bonus, not a guarantee: 6 of the 23 nonland cards can place a counter during the opponent's turn (Gristle Glutton x2 and Sting-Slinger x2, whose tap abilities carry no timing restriction and must be activated before their end step begins, and Requiting Hex x2 at instant speed). Every interaction spell in the deck pays its discount by placing that same counter, so removal and clock are the same card. The undercosted blight bodies (Chaos Spewer 5/4 for two) are the landing pads for those counters and a real ground clock underneath the burn.

### THE CLOCK, COUNTED HONESTLY

Lasting Tarfire reads "At the beginning of **each** end step, if you put a counter on a creature this turn, this enchantment deals 2 damage to each opponent." The word doing the work is *each* — the trigger exists on both players' end steps. But it is an intervening-if: the condition is checked when the trigger would go on the stack, so a counter placed *after* the opponent's end step begins is too late.

That splits the deck's blight sources into two classes:

| Class | Cards | Count | Tarfire value |
|---|---|---|---|
| Your turn only | Warren Torchmaster (beginning of combat **on your turn**), Scuzzback Scrounger (**your** first main phase), Chaos Spewer (ETB), Shadow Urchin (on attack), Cinder Strike, Bogslither's Embrace, Burning Curiosity, Soul Immolation, Boggart Mischief | 15 of 23 | 2 damage per Tarfire per turn |
| Either turn | Gristle Glutton (untimed tap ability), Sting-Slinger (untimed tap ability), Requiting Hex (instant) | 6 of 23 | the second 2 damage per Tarfire per turn cycle |

With both Tarfires out and a Gristle Glutton untapped, the correct line is to activate it during the opponent's **upkeep or draw step**, not in response to their end step. That is 8 damage per turn cycle from two two-mana enchantments and a one-mana activation, without attacking once.

### WHY THE INTERACTION IS FREE

All six maindeck removal spells discount themselves by placing the counter Lasting Tarfire wants:

- Cinder Strike — `{R}` for **4 damage** to a creature when the blight is paid
- Requiting Hex — `{B}` instant, destroy MV ≤ 2, **gain 2 life**
- Bogslither's Embrace — `{1}{B}` **unconditional exile** (or `{1}{B}` + `{3}` with no creature)

That MV ≤ 2 clause on Requiting Hex looks narrow until you check it against this cube: the blight archetype's best bodies are Creakwood Safewright (5/5 for `{1}{B}`), Encumbered Reejerey (5/4 for `{1}{W}`), Burdened Stoneback (4/4 for `{1}{W}`), Bristlebane Battler (6/6 for `{1}{G}`) and Loch Mare (4/5 for `{1}{U}`). A one-mana instant that kills a 5/5 is not narrow here.

### SOUL IMMOLATION'S REAL RATE

"Blight X. X can't be greater than the greatest toughness among creatures you control." The tempting read is that Blighted Blackthorn (3/7) or Hovel Hurler (6/7) makes this a 7-point burn spell. Neither is in this list. The greatest printed toughness here is **4** (Chaos Spewer 5/4, Shadow Urchin 3/4), and both are frequently smaller — Chaos Spewer is a 3/2 if you take the blight-2 mode, Shadow Urchin shrinks itself every attack. So this is a 5-mana **one-sided sweeper**: 3–4 damage to the opponent and 3–4 to each of their creatures. That is still one of only **2 sweepers in the entire 277-card cube**, which is why it holds its mythic slot.

### THE STRUCTURAL COST THIS DECK ACCEPTS

Cutting Heirloom Auntie during the grill left the list with **zero counter-removal**. Every -1/-1 counter this deck places on its own creatures is permanent. That is survivable because 21 of 23 nonland cards place counters and only 10 are creature cards, so the counters mostly go onto bodies that were already going to trade — but it is the reason Retched Wretch ("if it had a -1/-1 counter on it, return it to the battlefield") is the first card to add if you want to iterate on this list.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:9  3:9  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.3: Boggart Mischief@0.85, Boggart Mischief@0.85, Soul Immolation@0.6) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 13.6: Shadow Urchin@0.8, Cinder Strike@0.85, Cinder Strike@0.85, Requiting Hex@0.85, Requiting Hex@0.85, Burning Curiosity@0.85, Burning Curiosity@0.85, Bogslither's Embrace@0.85, Bogslither's Embrace@0.85, Chaos Spewer@0.5, Chaos Spewer@0.5) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 56%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Soul Immolation, Boggart Mischief
  OK        single_large_threat: Bogslither's Embrace, Cinder Strike, Soul Immolation
  CONCEDED  noncreature_permanents: B/R in this cube has no enchantment answer at any rarity — all four enchantment-removal cards in the pool are G/UG/W/W — and only sideboard artifact removal (Giantfall). Mitigating would mean splashing white through Sunlit Marsh or Sacred Peaks, every copy of which enters tapped, costing the goldfish-6 clock the deck is built on.
  CONCEDED  stack: This cube's only counterspells are blue (Wild Unraveling, Glen Elendra Guardian); B/R cannot interact on the stack. Mitigating would mean abandoning red for blue and with it Lasting Tarfire, Sting-Slinger and Soul Immolation — the entire kill mechanism. The substitute is redundancy: Lasting Tarfire x2, Sting-Slinger x2 and Boggart Mischief x2 are three separate damage sources across two card types.
  CONCEDED  graveyard: The only repeatable graveyard answer in B/R is Dawnhand Dissident, a rare; maindecking it would consume the last of the 5 rare/mythic slots on a 1/2 body that does nothing against the 5 of 8 cube decks with no graveyard theme, so it is a sideboard card. Mitigating maindeck would cost the deck a rare slot it spends on Blood Crypt's untapped mana.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two mana sinks convert surplus lands into the clock every turn: Sting-Slinger ('{1}{R}, {T}, Blight 1: This creature deals 2 damage to each opponent') and Gristle Glutton ('{T}, Blight 1: Discard a card. If you do, draw a card'), which also filters the flood itself. Burning Curiosity x2 ('exile the top three cards instead. Until the end of your next turn, you may play those cards') turns a surplus land turn into three new cards, and Soul Immolation absorbs a fifth land as a one-sided sweeper. Bounded honestly: both tap sinks are once per turn each and are paid in -1/-1 counters off a 10-creature board, so the outlet is capped by board toughness, not by mana. |
| screw | mitigation | 4 of 23 nonland cards cost 1 and 9 cost 2, so a two-land hand deploys on curve; Scuzzback Scrounger ('At the beginning of your first main phase, you may blight 1. If you do, create a Treasure token') is a 2-drop, so its first Treasure arrives on turn 3 and every turn after. Goldfish sim over 1000 hands: 88% keepable, 88% have 3 lands by turn 3. |
| decapitation | mitigation | The kill is spread over two card types and six cards: Lasting Tarfire x2 and Boggart Mischief x2 (enchantments), Sting-Slinger x2 (creature). No single removal spell takes the clock offline, and this cube's only four enchantment-removal cards are G/UG/W/W — a B/R-facing opponent in this cube usually has no answer to the enchantments at all. |
| gas-out | mitigation | The 0-of-23 card-advantage hole the first draft conceded was filled rather than accepted: Burning Curiosity x2 ('As an additional cost to cast this spell, you may blight 1 ... Exile the top two cards of your library. If this spell's additional cost was paid, exile the top three cards instead. Until the end of your next turn, you may play those cards') is a net +2 on the same blight template the deck already pays, and Shadow Urchin x1 ('exile that many cards from the top of your library. Until your next end step, you may play those cards') scales with the counters the deck manufactures. Gristle Glutton x2 is selection, not advantage, and is not counted as such. Backstop: 4 of the damage sources (Lasting Tarfire x2, Boggart Mischief x2) are permanents that keep dealing damage from an empty hand. |
| raced | mitigation | Against this cube's fastest clocks (threat_profile evasion density 15.8%, 41 cards) the deck has 6 maindeck interaction spells at 1-2 mana, all of which also advance the clock; Requiting Hex x2 gains 2 life when the blight is paid and Boggart Mischief gains 1 life per Goblin death. Sear x2 and Blight Rot x2 come in from the sideboard against the flier decks specifically. |
| disruption-fizzle | mitigation | There is no critical turn to interact with — the engine is a per-turn trigger, not an assembled combo. If the opponent answers one Lasting Tarfire the other still fires, and if they remove the creature holding the -1/-1 counters, the next blight source simply names a different creature. The only true fizzle is having no creature at all to receive a counter, which is why 14 of the 23 nonland cards put a permanent on the battlefield, and why Bogslither's Embrace keeps its 'or pay {3}' escape hatch. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Retched Wretch | 'When this creature dies, if it had a -1/-1 counter on it, return it to the battlefield... and it loses all abilities.' The strongest excluded card and the one whose exclusion costs the most: with Heirloom Auntie cut this list has ZERO counter-removal of any kind, so a blighted body stays blighted, and Retched Wretch is the only pool card that converts a lethal blight into a re-entry. Excluded on slot arithmetic — all 23 nonland slots are either a Lasting Tarfire enabler, a payoff, or removal, so it costs one of those. |
| Boggart Cursecrafter | 'Deathtouch. Whenever another Goblin you control dies, this creature deals 1 damage to each opponent.' The Goblin denominator holds (9 of 10 creature cards are Goblins), but the cube's structural census records 0 sacrifice outlets, so Goblins only die in combat, and {B}{R} is the hardest cast in the deck on a 71%-red pip split. Its slot went to Burning Curiosity. |
| Heirloom Auntie | 'Enters with two -1/-1 counters. Whenever another creature you control dies, surveil 1, then remove a -1/-1 counter from this creature.' A 2/2 on entry that only grows on creature deaths; with 0 sacrifice outlets in the cube it grows only from combat losses, and the deck needed the slot for card advantage. |
| Burning Curiosity was included; Eclipsed Boggart was not | Eclipsed Boggart ({B/R}{B/R}{B/R}, 'look at the top four cards... reveal a Goblin, Swamp, or Mountain card... put it into your hand') hits 9 Goblin nonland cards + 15 basics = 24 of 40 cards, on fully hybrid pips. Excluded because Burning Curiosity nets +2 cards for one card at MV 3 versus Eclipsed Boggart's +1 at MV 3, and the deck already runs 21 of 23 blight-referencing cards that want the cheaper slot. |
| Bile-Vial Boggart | 'When this creature dies, put a -1/-1 counter on up to one target creature.' A turn-1 Goblin body that would make the six blight-cost spells live a turn earlier, and its death places a counter on an OPPONENT's creature. Excluded because the four one-mana slots are already occupied by Cinder Strike x2 and Requiting Hex x2, which are removal and enablers at once. |
| Elder Auntie | 'When this creature enters, create a 1/1 black and red Goblin creature token.' Two Goblin bodies per card for the Boggart Mischief drain. Excluded because a 2/2-plus-1/1 for three does not advance the Lasting Tarfire clock, and MV 3 is the deck's most contested slot (9 of 23 cards). |
| Brambleback Brute | '4/5, enters with two -1/-1 counters. {1}{R}, Remove a counter: Target creature can't block this turn.' The only renewable counter sink in B/R and the largest toughness at 3 mana, which would raise Soul Immolation's X cap from 3-4 to 5. Excluded because it consumes the counters Lasting Tarfire wants placed rather than placing them. |
| Sourbread Auntie | 'When this creature enters, you may blight 2. If you do, create two 1/1 black and red Goblin creature tokens.' Boggart Mischief's payload on a 4/3. Excluded on mana: {2}{R}{R} on 11 red sources, and it would be the deck's only 4-drop in a curve that currently runs 1:4 / 2:9 / 3:9 / 5:1. |
| Moonshadow | 'Enters with six -1/-1 counters... remove one whenever permanent cards are put into your graveyard.' Six counters need six permanent-card graveyard events; this list has 2 repeatable permanent-to-graveyard sources (Gristle Glutton discards, creature deaths), so it spends four-plus turns as a 1/1 — and it would consume the last rare/mythic slot, which is now fully spent. |
| Creakwood Safewright | 5/5 for {1}{B}, but it sheds only 'if there is an Elf card in your graveyard'; this list runs 0 Elf cards in the mainboard, so it never sheds and is a permanent 2/2. |
| Rooftop Percher | Considered for the sideboard's graveyard slot ('exile up to two target cards from graveyards'), and cut during the grill: it answers 2 of 39 graveyard cards, once, for {5}, on a curve that tops out at 5 with a single card. Dawnhand Dissident does the same job repeatedly for 1 mana. |
| Grub, Storied Matriarch // Grub, Notorious Auntie | 'Whenever Grub attacks, you may blight 1. If you do, create a tapped and attacking token copy of the blighted creature.' A real blight payoff, but it needs a full turn cycle of paying {R} then {B} before the blight face is online, and it costs a rare slot — all 5 of which are now spent. |
| Blood Crypt was included; Evolving Wilds and Eclipsed Realms were not | Evolving Wilds enters tapped AND fetches tapped — two lost tempo turns against a goldfish-6 clock. Eclipsed Realms adds coloured mana only for one chosen creature type: naming Goblin covers 9 of 23 nonland cards and leaves Lasting Tarfire, Cinder Strike, Requiting Hex, Bogslither's Embrace, Burning Curiosity, Shadow Urchin and Soul Immolation on {C}. |
| Mornsong Aria | Sideboard consideration: 'Players can't draw cards or gain life' is the only answer in B/R to the cube's 13 lifegain cards. Excluded because it is a rare and all 5 rare/mythic slots are spent, and because it would also blank Gristle Glutton's 'Discard a card. If you do, draw a card' and Burning Curiosity is unaffected but Blighted Blackthorn-style draws would be. |
| Darkness Descends (2nd copy) | 'Put two -1/-1 counters on each creature.' Kept at 1 in the sideboard rather than 2: it kills all 4 of the deck's own Goblin tokens and every already-blighted body, and {2}{B}{B} is the tightest cast in the 50 on 8 black sources. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.37 adj [MV 2.35 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  28.6%  prod  47.1%  gap -18.5pp  [OK]
  R  demand  71.4%  prod  64.7%  gap  +6.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] mainboard_count: 40 == 40
[PASS] sideboard_count: 10 == 10
[PASS] exact_name_membership: all names found in working pool
[PASS] copy_limits: all within card_pool_rules (basics exempt)
[PASS] rare_mythic_cap_5: 5 rare/mythic across MB+SB: ['Blood Crypt', 'Dawnhand Dissident', 'Scuzzback Scrounger', 'Shadow Urchin', 'Soul Immolation']
[PASS] colour_usability: all nonland cards usable in ['B', 'R']+[]; off-normal modes: {'Lasting Tarfire': 'cast', 'Sting-Slinger': 'cast', 'Boggart Mischief': 'cast', 'Chaos Spewer': 'cast', 'Shadow Urchin': 'cast', 'Soul Immolation': 'cast', 'Warren Torchmaster': 'cast', 'Gristle Glutton': 'cast', 'Scuzzback Scrounger': 'cast', 'Burning Curiosity': 'cast', 'Cinder Strike': 'cast', 'Requiting Hex': 'cast', "Bogslither's Embrace": 'cast', 'Giantfall': 'cast', 'Dawnhand Dissident': 'cast', 'Boulder Dash': 'cast', 'Darkness Descends': 'cast', 'Blight Rot': 'cast', 'Sear': 'cast'}
[PASS] splash_cap: splash cards used: [] (splash_colors=[])
```
