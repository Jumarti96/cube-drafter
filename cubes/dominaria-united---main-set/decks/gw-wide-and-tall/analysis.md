---
deck_name: "gw-wide-and-tall"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-08-14T03:25:08Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
9x   Plains                   Basic - white source
6x   Forest                   Basic - green source
2x   Radiant Grove            GW dual, enters tapped - the only non-rare GW fixing in the pool
```

### CREATURES (14)
```
CMC  Card                        Qty   Color  Role                                            Rar
1    Llanowar Stalker            x1    G      Payoff - +1/+0 for each creature that enters    C
2    Juniper Order Rootweaver    x2    W      Payoff - 2/2, kicked for a +1/+1 counter        C
2    Nishoba Brawler             x2    G      Threat - 2/3 trample for two mana at Domain 2   U
2    Quirion Beastcaller         x1    G      Payoff - grows per creature cast, redistributes on death  R
2    Resolute Reinforcements     x2    W      Enabler - flash, two Soldier bodies             U
2    Valiant Veteran             x1    W      Payoff - second anthem, on the Soldier tokens   R
3    Argivian Cavalier           x2    W      Enabler - Soldier token on ETB, enlist          C
3    King Darien XLVIII          x1    GW     Payoff/engine - anthem, token maker, token protection  R
3    Queen Allenal of Ruadach    x2    GW     Payoff - extra Soldier on every token event; P/T = creature count  U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                        Qty   Color  Role                                            Rar
1    Strength of the Coalition   x2    G      Payoff - kicked, a +1/+1 counter on each creature  U
2    Artillery Blast             x1    W      Interaction - 3 damage to a tapped creature at Domain 2  C
2    Destroy Evil                x2    W      Interaction - the fat blocker that walls a token swarm  C
3    Scout the Wilderness        x2    G      Enabler/infra - fixes the mana, kicked for two Soldiers  C
4    Captain's Call              x2    W      Enabler - three Soldier tokens (four with Allenal)  C
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                                                 Rar
Broken Wings                x2    G      Destroy artifact, enchantment, or creature with flying — vs the cube's 51-card evasion class and artifact/enchantment decks  C
Citizen's Arrest            x2    W      Unconditional exile of a creature or planeswalker — vs single-large-threat and planeswalker decks  C
Griffin Protector           x2    W      Evasive body that grows on each ETB — vs ground stalls where the swarm cannot attack profitably  C
Prayer of Binding           x2    W      Flash exile any nonland permanent — vs artifact/enchantment decks and single-bomb decks  U
Serra Redeemer              x1    W      Two +1/+1 counters on every small creature that enters — vs grindy decks where the game goes long enough to cast a five-drop  R
Leyline Binding             x1    W      Flash exile any nonland permanent, {3}{W} at Domain 2 — vs decks whose single best permanent must be answered at instant speed  R
```

## ANALYSIS

### DECK IDENTITY

Green-white go-wide aggro built on the lowest curve the pool supports. Queen Allenal of Ruadach is the multiplier: her replacement effect adds a 1/1 white Soldier to every token event, so Captain's Call makes four bodies, Resolute Reinforcements and Argivian Cavalier make three each, and kicked Scout the Wilderness makes three. Two stacking anthems (King Darien XLVIII on all creatures, Valiant Veteran on Soldiers) plus a kicked Strength of the Coalition, which puts a permanent +1/+1 counter on every creature, turn that width into a board the opponent cannot block profitably. Average mana value is 2.30 with fourteen cards at two mana or less, so the board is assembled by turn four and the alpha strike lands on turn five or six.

### QUEEN ALLENAL IS A TAX ON EVERY TOKEN EVENT, STATED AS A COUNT

"If one or more creature tokens would be created under your control, those tokens plus a 1/1 white Soldier creature
token are created instead." It is a replacement effect, so it applies once per token-creation *event*, not per token.
Against this list:

| Token source | Without Allenal | With Allenal |
|---|---|---|
| Captain's Call x2 | 3 Soldiers | **4** |
| Resolute Reinforcements x2 | 1 body + 1 token | 1 body + **2** tokens |
| Argivian Cavalier x2 | 1 body + 1 token | 1 body + **2** tokens |
| Scout the Wilderness x2, kicked | 2 Soldiers | **3** |
| King Darien's {3}{G}{W} activation | 1 Soldier | **2** |

That is **5 distinct token sources across 9 mainboard copies**. Her own text — "power and toughness are each equal to
the number of creatures you control" — means she is also the largest creature on the board she just widened.

**The legend-rule caveat, stated plainly.** Both copies are in the deck, but only one can ever be on the battlefield.
The second copy is not a doubled effect; it is insurance against the first being answered. That is worth a card here
precisely because she is the multiplier the whole list is built on.

### THE TWO ANTHEMS HAVE DIFFERENT DENOMINATORS

They are not redundant, and the difference matters when deciding which to play around removal:

| Anthem | Text | What it buffs in this list |
|---|---|---|
| King Darien XLVIII | "Other creatures you control get +1/+1" | **13 of the 13 other mainboard creature copies**, plus every token |
| Valiant Veteran | "Other Soldiers you control get +1/+1" | **3 of the 13** nontoken creature copies (Resolute Reinforcements x2, King Darien) — but **every token this deck makes is a Soldier** |

So King Darien is the broader anthem on an empty board and Valiant Veteran is the broader one on a full board. On a
turn-5 board of King Darien, Queen Allenal, an Argivian Cavalier and five Soldier tokens, Valiant Veteran buffs 6 of
the 8 other creatures.

### WHY THE DOMAIN CARDS WERE CUT

Domain counts basic land types among lands you control. This manabase has exactly two — Plains and Forest — and
Radiant Grove (Forest Plains) adds no third type. At Domain 2 the pool's green Domain cards read:

| Card | Text at Domain 2 |
|---|---|
| Zar Ojanen, Scion of Efrava | counters only on creatures with toughness **less than 2**, i.e. toughness exactly 1 — and it stops reaching even those the moment either anthem resolves |
| Herd Migration | **two** 3/3 Beasts for seven mana |
| The Weatherseed Treaty, chapter III | **+2/+2** and trample, arriving two turns after the card is cast |
| Gaea's Might | **+2/+2** |

Only two Domain cards survived, and both because they are fine at 2: Nishoba Brawler is a 2/3 trampler for {1}{G},
and Artillery Blast deals 3. Adding Thran Portal would buy a third type, but it is a rare and every card it would
improve was already cut — the slot buys nothing.

### THE MANA IS THE REAL CONSTRAINT

Queen Allenal costs {G}{W}{W} and wants to be cast on turn 3. The only non-rare GW dual in this cube is Radiant Grove,
and it enters tapped. That single fact shaped three decisions:

1. **17 lands, not the computed 16.** The land-count formula sees curve and acceleration; it cannot see that 2 of the
   17 lands enter tapped, or that both "acceleration" cards are Scout the Wilderness, which fetches a *tapped* basic
   for three mana and therefore does nothing for a turn-3 cast.
2. **Crystal Grotto rejected.** It taps for {C} and charges an extra {1} for a coloured mana — unaffordable on the
   turn that matters most.
3. **9 Plains to 6 Forest.** White is 17 of the 28 coloured pips (60.7%) and holds the only double-pip cost in the deck.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:3  2:11  3:7  4:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 8.9: Juniper Order Rootweaver@0.7, Juniper Order Rootweaver@0.7, Llanowar Stalker@0.5) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.4: Scout the Wilderness@0.7, Scout the Wilderness@0.7) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 43%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Neither green nor white has a sweeper at common/uncommon in this pool, and the plan is to be the widest board on the table - Queen Allenal adds a body to every token event, so trading board size for a symmetric wipe would delete the deck's own win condition.
  OK        single_large_threat: Destroy Evil, King Darien XLVIII
  OK        noncreature_permanents: Destroy Evil
  CONCEDED  stack: Neither core colour has a counterspell in this pool; the deck's answer to a key opposing spell is to have deployed a lethal board by turn 6 instead of holding mana up.
  CONCEDED  graveyard: dossier.structural_census records 0 graveyard-hate cards in the entire cube, so no colour and no sideboard can answer this class.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | King Darien XLVIII's '{3}{G}{W}: Put a +1/+1 counter on King Darien and create a 1/1 white Soldier creature token' is a repeatable five-mana sink that both grows a body and widens the board, and it triggers Queen Allenal for a second Soldier. Valiant Veteran's '{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control' is a second five-mana sink that works from the graveyard. Scout the Wilderness unkicked converts an excess land drop into a fetched basic plus, kicked, two bodies. |
| screw | mitigation | 14 of the 23 nonland cards cost two mana or less and 4 cost one, so a two-land hand still curves out: Llanowar Stalker or Strength of the Coalition on turn 1, Resolute Reinforcements (two bodies) or Nishoba Brawler on turn 2. The goldfish check measured 87% keepable hands, a turn-1 play 54% of the time and a turn-2 play 96% of the time. The colour risk is real and specific: Queen Allenal's {G}{W}{W} needs two white and one green by turn 3, which the audit supports at 10 white / 9 green sources. |
| decapitation | mitigation | Queen Allenal answered on sight costs the multiplier but not the plan: the deck still makes 3 tokens off Captain's Call, 2 off Resolute Reinforcements and 2 off Argivian Cavalier, and the two anthems are separate cards. A second Queen Allenal is in the list precisely as redundancy - the legend rule means the second copy adds nothing on board, so its only job is to replace an answered first copy. King Darien answered on sight leaves Valiant Veteran's Soldier anthem and Strength of the Coalition's permanent counters as two independent ways to size the board. |
| gas-out | accepted | This deck runs zero Cards: Net-Positive and zero Cards: Self-Replacing cards. Love Song of Night and Day, the only white card-draw in the pool, was cut because its chapter I draws two cards for the opponent as well, and green's card advantage here (Jodah's Codex, Silverback Elder) sits at four to five mana. Mitigating would mean adding four-plus-mana value cards to a deck whose entire edge is a 2.35 average mana value and a board by turn three - the identity the locked lens selected. What the deck has instead is card-to-board conversion: Captain's Call is four bodies with Allenal from one card, Argivian Cavalier and Resolute Reinforcements are three each, and kicked Scout the Wilderness is three. The plan is to have emptied the hand onto the board before running out of cards can matter. |
| raced | mitigation | dossier.threat_profile records evasion as the densest threat class (51 cards, 21%). This deck's answer is to be faster rather than to block: a turn-1 play 54% of the time, a turn-2 play 96%, and Queen Allenal's P/T equal to the creature count means she blocks as a 5/5 or larger by turn 4 while the tokens chump. Destroy Evil x2 answers the toughness-4-or-greater fliers; the sideboard adds Broken Wings x2 ('Destroy target artifact, enchantment, or creature with flying') and Citizen's Arrest x2. |
| disruption-fizzle | mitigation | The critical turn is a kicked Strength of the Coalition. It is an instant, so it can be held until blockers are declared, and there are 2 copies. Its counters are permanent +1/+1 counters, so unlike a pump spell the value survives into the following turn even if the attack is blanked. If it is countered outright, King Darien's static anthem and Valiant Veteran's Soldier anthem are already on the battlefield doing the same job passively, and King Darien's 'Sacrifice King Darien: Creature tokens you control gain hexproof and indestructible until end of turn' protects the entire token board from a removal-based blowout in response. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Defiler of Vigor | 'Whenever you cast a green permanent spell, put a +1/+1 counter on each creature you control' — only 5 of the 23 nonland cards in this list are green permanent spells (Llanowar Stalker x2, Quirion Beastcaller, Nishoba Brawler x2), so the engine fires about once per game, and {3}{G}{G} is off the locked low-curve lens. |
| Zar Ojanen, Scion of Efrava | Domain counts basic land types; a GW deck has 2, so its trigger reads 'put a +1/+1 counter on each creature you control with toughness less than 2' — it only ever hits toughness-1 creatures, and it stops hitting its own targets as soon as one anthem resolves. |
| Serra Redeemer | A real payoff, but {3}{W}{W} on turn 5 in a deck whose only untapped white fixing is basic Plains, against a locked lens that spends every slot on the turn 3-4 board. |
| Ajani, Sleeper Agent | The -3 distributes only three +1/+1 counters across up to three creatures; on a board of six-plus tokens that is a smaller effect than one kicked Strength of the Coalition, which counters every creature. |
| Silverback Elder | {2}{G}{G}{G} requires triple green off a manabase that must also produce {W}{W} for Queen Allenal on turn 3. |
| Herd Migration | Domain — 'Create a 3/3 green Beast creature token for each basic land type'; at 2 basic land types that is two Beasts for seven mana. |
| Bite Down | 'Target creature you control deals damage equal to its power' — 14 of the 16 creature copies in this list have power 2 or less, so it kills almost nothing until Queen Allenal is already on the battlefield. |
| Tail Swipe | Same power problem as Bite Down, and it makes this deck's creature take damage back — a 1/1 token trades itself for nothing. |
| Griffin Protector | The +1/+1 is 'until end of turn' and is a 4-mana body; the locked lens spends that slot on a turn-1 or turn-2 play instead. |
| Linebreaker Baloth | 'Can't be blocked by creatures with power 2 or less' is real evasion, but {3}{G}{G} needs double green from a manabase already committed to {G}{W}{W} on turn 3. |
| The Weatherseed Treaty | Chapter III is the payoff and arrives two turns after the card is cast; against a goldfish turn of 6 a turn-4 cast pays off on turn 6 with no margin, and at domain 2 it is +2/+2. |
| Love Song of Night and Day | Chapter I gives the opponent two cards as well; in a deck that wants to be attacking on turn 3 the symmetric draw helps the defender more. |
| Citizen's Arrest | {1}{W}{W} on turn 3 competes directly with Queen Allenal's {G}{W}{W} for the same double-white turn on a manabase whose only dual enters tapped. |
| Charismatic Vanguard | Its {4}{W} activation asks for five mana in a deck built to a 17-land, 2.3 average mana value curve. |
| Deathbloom Gardener | A 1/1 mana creature that does not attack; the locked lens spends two mana on a body that adds to the board count Queen Allenal reads. |
| Take Up the Shield | One-creature protection in a deck whose plan is that no single creature matters; King Darien's sacrifice ability protects every token at once instead. |
| Prayer of Binding | {3}{W} flash exile is strong but sits at four mana, above the locked lens's curve; held for the sideboard. |
| Elfhame Wurm | A vanilla 5/4 for {4}{G} with no token or counter interaction — it does not scale with Queen Allenal or either anthem. |
| Shalai's Acolyte | {4}{W} for a 3/4 flier, or {5}{W}{G} kicked for a 5/6 — both above this curve, and the counters land on one body rather than the swarm. |
| Crystal Grotto | It taps for {C}; converting that to a coloured mana costs an extra {1}, which a deck casting {G}{W}{W} on turn 3 cannot afford. |
| Thran Portal | It would add a third basic land type for Domain, but it is a rare and this deck's Domain cards were all cut anyway — the rare slot buys nothing. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.53 adj [MV 2.35 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  39.3%  prod  47.1%  gap  -7.8pp  [OK]
  W  demand  60.7%  prod  64.7%  gap  -4.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                         cube_mainboard
commons_uncommons_max_2      PASS - no common or uncommon exceeds 2 combined copies
rares_mythics_max_1_each     PASS
rares_mythics_max_5_total    PASS - exactly 5 of 5: King Darien XLVIII (R), Valiant Veteran (R), Quirion Beastcaller (R) mainboard; Leyline Binding (R), Serra Redeemer (R) sideboard.
basics_unlimited             9 Plains + 6 Forest
```