---
deck_name: "w-lifegain-trigger-tall"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "W"
format: "40-card"
built_at: "2026-08-28T02:54:16Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x14  Plains
  x2   Sunlit Marsh                                 WB dual (Land - Plains Swamp), enters tapped
```

### CREATURES (16)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Lunarch Veteran // Luminous Phantom          x2    W     engine                         C
  1  Thraben Inspector                            x2    W     enabler                        C
  2  Ambitious Farmhand // Seasoned Cathar        x2    W     engine                         U
  2  Cathar Commando                              x2    W     interaction                    C
  2  Niblis of the Urn                            x2    W     threat                         U
  2  Twinblade Geist // Twinblade Invocation      x2    W     threat                         U
  2  Voice of the Blessed                         x1    W     payoff                         R
  3  Thalia, Heretic Cathar                       x1    W     threat                         R
  4  Gisela, the Broken Blade                     x1    W     payoff                         M
  4  Odric, Lunarch Marshal                       x1    W     payoff                         R
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Gather the Townsfolk                         x1    W     enabler                        C
  2  Valorous Stance                              x2    W     interaction                    U
  3  Lingering Souls                              x2    W     enabler                        U
```

### OTHER SPELLS (3)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Gryff's Boon                                 x2    W     threat                         U
  3  Wedding Announcement // Wedding Festivity    x1    W     engine                         R
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Angelic Purge                                x2    W     hate: noncreature permanents                   C
Bound by Moonsilver                          x1    W     flex: single large threat / transform decks    C
Drogskol Shieldmate                          x1    W     flex: fast aggro                               C
Fiend Hunter                                 x1    W     hate: single large threat                      U
Faith Unbroken                               x1    W     hate: any creature (unconditional exile)       U
Slayer of the Wicked                         x2    W     hate: tribal creature decks                    U
Soul-Guide Gryff                             x2    W     hate: graveyard                                C
```

## ANALYSIS

### DECK IDENTITY

A mono-white aggro deck that wins with combat damage only -- there is no drain effect anywhere in the 40. Voice of the Blessed reads 'whenever you gain life, put a +1/+1 counter on this creature', counting gain EVENTS rather than amounts, and this build turns it into an evasive attacker rather than a value engine. Two Lunarch Veteran convert every body that enters into a counter, and every LIFELINK source converts attacking itself into counters. Odric, Lunarch Marshal is the card that makes that scale: he broadcasts any keyword one creature has to the whole team, so a single Gisela or a transformed Seasoned Cathar turns an alpha strike into one gain event PER ATTACKING CREATURE -- he is the only multiplier of event count in the pool. Voice gains flying and vigilance at four counters and indestructible at ten; Gryff's Boon, two Niblis of the Urn and Odric's shared flying make sure the damage is unblocked before it gets there.


### THE ONE FACT THE WHOLE DECK IS BUILT ON

Voice of the Blessed reads "Whenever you gain life, put a +1/+1 counter on this creature." It counts life-gain
**events**, not amounts. Ten separate one-point gains is ten counters; a single ten-point gain is one. Every
slot in this deck is chosen against that reading, and it is why a card like Apothecary Geist — "you gain 3
life" — was cut: three life is worth exactly as much to this payoff as a 1/1 token entering the battlefield,
and the token also attacks.

Two engines feed it. **Lunarch Veteran** turns every body that enters into an event: 20 of the 24 nonland cards
put at least one creature onto the battlefield. **Lifelink** turns attacking itself into events — and this is
where Odric, Lunarch Marshal earns a rare slot. His text shares any keyword one creature has with the entire
team, so a single Gisela or a transformed Seasoned Cathar makes every attacking creature lifelink, which is one
gain event *per attacker per combat*. He is the only card in the pool that multiplies the event count rather
than adding to it.

| Keyword source Odric can broadcast | Copies |
|---|---|
| Gisela, the Broken Blade (flying, first strike, lifelink) | 1 |
| Ambitious Farmhand // Seasoned Cathar (lifelink, after Coven) | 2 |
| Niblis of the Urn (flying) | 2 |
| Twinblade Geist (double strike) | 2 |
| Gryff's Boon (flying) | 2 |
| Thalia, Heretic Cathar (first strike) | 1 |
| Voice of the Blessed at 4+ counters (flying, vigilance) | 1 |

### WHY TWO SUNLIT MARSH IN A DECK WITH NO BLACK CARDS

This looked like a mistake and it is not. The shape judge noticed that Lingering Souls' "Flashback {1}{B}" is
dead in a 16-Plains deck, making it a three-mana two-body card rather than a four-body one — in a deck whose
payoff counts bodies entering. Two Sunlit Marsh fix that. Measured tapped-aware over the 40:

| | 16 Plains | 14 Plains + 2 Sunlit Marsh |
|---|---|---|
| P(castable {W}{W} on turn 2, on the play) | 91.84% | 91.67% |
| P(a black source by turn 5, on the play) | 0% | 48% |

The cost is 0.17pp — inside rounding — because "two or more lands but zero Plains" requires drawing both
Marsh and none of 14 Plains. Evolving Wilds was considered and rejected on a specific mechanism: it fetches
"a basic land card", and with no basic Swamp in this deck it could only ever fetch a Plains, so it would buy
no black access at all while still entering tapped.

### THE HONEST WEAKNESS

The deck has almost no removal. Valorous Stance's kill mode requires "toughness 4 or greater", which covers
41 of the cube's 166 creatures — 24.7%. The other 122 creatures cannot be answered by anything in the
mainboard; Niblis of the Urn taps a blocker but does not remove it. This is declared rather than hidden, and
the sideboard carries Faith Unbroken (unconditional exile at any size), Fiend Hunter and Bound by Moonsilver
for the matchups where it bites.

The second cost is structural and was accepted knowingly: repairing the deck during the grill traded two
one-drops for better cards, dropping the turn-1 play rate from 86% to 76%. There is no fix in this pool — the
only mono-white one-drops that exist are Gryff's Boon (already at two copies) and a conditional combat trick.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:6  2:12  3:4  4:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.45: Odric, Lunarch Marshal@0.85, Gryff's Boon@0.8, Gryff's Boon@0.8) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.8: Wedding Announcement // Wedding Festivity@0.8) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 76%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: This deck has no mass removal and does not want any: its own plan is to present the wider board and fly over. The cube's only white sweepers (Vanquish the Horde at {6}{W}{W}, Archangel Avacyn) are rares outside the five-card budget AND would kill this deck's own 1/1 tokens, which are simultaneously its damage and its gain events. Against a go-wide opponent the answer is the clock plus evasion: 6 one-drops and 12 two-drops of 24 nonland cards, and Odric, Lunarch Marshal broadcasting flying from any single flier -- of which the deck runs 8 sources -- so a ground stall does not stop the attack. Two Niblis of the Urn additionally tap a blocker each on attack. (Rewritten at Phase 9 round 2: the previous concession named Subjugator Angel, which the F3 repair removed from the sideboard, and quoted a pre-repair curve.)
  OK        single_large_threat: Valorous Stance, Niblis of the Urn, Thalia, Heretic Cathar
  OK        noncreature_permanents: Cathar Commando
  CONCEDED  stack: White in this cube contains no counterspells at any rarity, so nothing in mono-white can interact on the stack; the deck answers permanents after they resolve, with 2 Valorous Stance and 2 Cathar Commando ('{1}, Sacrifice this creature: Destroy target artifact or enchantment').
  CONCEDED  graveyard: No maindeck graveyard interaction: the cube's white graveyard hate is Soul-Guide Gryff at {4}{W}, which is both blank against roughly half the field and far above this aggro deck's curve, so two copies are sideboarded instead against the 75-card graveyard theme.
```

_No WARN-tier structural flags were raised: curve, assembly, goldfish and coverage all returned PASS._


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Three mana sinks that need no cards in hand: Gryff's Boon's '{3}{W}: Return this card from your graveyard to the battlefield attached to target creature', Twinblade Geist's 'Disturb {2}{W}' recasting it from the graveyard as an Aura granting double strike, and Ambitious Farmhand's 'Coven — {1}{W}{W}: Transform this creature'. Wedding Announcement additionally converts a flooded turn into a card or a body every end step. (Butcher's Cleaver's Equip {3} was a fourth sink and is struck here: the card was cut at Phase 9 round 2.) |
| `screw` | mitigation | This is the deck's strongest axis. The curve is 6 one-drops and 12 two-drops of 24 nonland cards, with two cards above MV 3 (Gisela and Odric, both MV 4). The structural gate measured keepable hands at 85% against the 0.80 threshold, a play on turn 1 in 76% of hands and on turn 2 in 99%. Two Ambitious Farmhand actively dig ('search your library for a basic Plains card' -- 14 basic Plains in the library), and two Thraben Inspector Clues convert a stalled hand into cards. (Figures restated at Phase 9 against the repaired list; the previous entry quoted a pre-repair curve and a turn-2 rate of 100% against a measured 99.5%.) |
| `decapitation` | mitigation | Voice of the Blessed being answered on sight is survivable because it is not the only threat -- it is one of 10 cards tagged threat or payoff, and the damage is distributed across 2 Niblis of the Urn, 2 Twinblade Geist, 2 Gryff's Boon, Gisela, Thalia, Odric and up to 6 flying tokens. Two Valorous Stance protect it directly ('target creature gains indestructible until end of turn'). Odric matters here specifically: once any single creature has flying he broadcasts it to the team, so removing the one evasive threat does not restore blocking. The judge's correction is respected: Voice only becomes self-protecting at TEN counters, not four, so it is treated as a threat that needs protecting rather than one that protects itself. |
| `gas-out` | mitigation | Four self-replacing effects: Thraben Inspector x2 investigating, Wedding Announcement drawing every end step once the board is wide, Lingering Souls as a second card's worth of bodies via Flashback (live in ~48% of games by turn 5 on the play, ~52% on the draw, thanks to the 2 Sunlit Marsh), and two graveyard rebuys that need no cards -- Gryff's Boon's {3}{W} return and Twinblade Geist's Disturb {2}{W}. An aggro deck's real answer to an empty hand is that the opponent is dead; the goldfish turn is 6. |
| `raced` | accepted | This deck expects to be the aggressor and has limited ability to win a race it is losing. Its lifelink is thin and mid-curve: Gisela at four mana and Seasoned Cathar behind Coven and {1}{W}{W} = 3 of 24 nonland cards, with no cheap way to swing a race back. What mitigating this would cost is the deck's identity: adding defensive bodies or lifegain-for-its-own-sake would dilute the one-and-two-drop density that is the entire reason this build was chosen over the two slower sketches, and gaining LARGE amounts of life is worth nothing to a payoff that counts events rather than amounts. The concession is bounded rather than open-ended: Drogskol Shieldmate ('Flash. When this creature enters, other creatures you control get +0/+1') is sideboarded as an ambush blocker, and Odric broadcasting Gisela's lifelink to the whole team is a genuine racing line. (Butcher's Cleaver was named here as a fourth lifelink source and is struck: cut at round 2.) |
| `disruption-fizzle` | mitigation | The critical turn here is an alpha strike, and it survives one piece of interaction because the damage is spread across many small bodies rather than concentrated in one. Two Valorous Stance answer removal aimed at the attacker at instant speed. TWO Niblis of the Urn ('whenever this creature attacks, you may tap target creature') remove a blocker DURING the attack, which a sorcery-speed answer cannot pre-empt, and Thalia, Heretic Cathar makes every blocker the opponent deploys arrive tapped, so a topdecked creature cannot break up the swing the turn it lands. (Count restored to two at Phase 9 round 2 with the second Niblis.) |


### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Cryptolith Fragment // Aurora of Emrakul | Cryptolith Fragment's '{T}: Add one mana of any color. Each player loses 1 life' drains THIS deck as well, working directly against a payoff that counts life GAINED and against Chalice of Life's 30-life flip. |
| Archangel Avacyn // Avacyn, the Purifier | Archangel Avacyn is a mythic whose back face is a liability for a token deck: 'When a non-Angel creature you control dies, transform' is not optional, and Avacyn, the Purifier then 'deals 3 damage to each other creature and each opponent' — wiping this deck's own 1/1 Spirits and Humans, which are the bodies its gain-event count depends on. |
| Crawl from the Cellar | Splash candidate declined: Crawl from the Cellar is a black creature-recursion sorcery whose Flashback is {3}{B}; it returns a creature to HAND rather than to the battlefield, so it produces no ETB trigger and no combat damage — it does not advance a combat-kill plan and does not justify a black source. |
| Demonmail Hauberk, Stitcher's Graft, Neglected Heirloom // Ashmouth Blade | Equipment and auras that grant neither lifelink nor evasion: this deck's payoff needs gain EVENTS and its kill needs an unblockable attacker, and a 2-for-1 risk on a single creature buys neither. Butcher's Cleaver (grants lifelink), Gryff's Boon and Lunarch Mantle (grant flying) and Twinblade Geist (double strike on a body) are kept for exactly those reasons; these grant none of them. |
| Harvest Hand // Scrounged Scythe | CORRECTED REASON (Challenger F7a). The original batch reason claimed this grants 'neither lifelink nor evasion' -- that is FALSE. Harvest Hand // Scrounged Scythe reads 'As long as equipped creature is a Human, it has MENACE (It can't be blocked except by two or more creatures)', and menace IS evasion. Its Human clause is also the identical count that justified harvesting Butcher's Cleaver at FILL (10 Human copies of 24). The honest count-based verdict against the finished list: menace on a 1/1 or 2/2 is far weaker evasion than the flying this deck already runs on Gryff's Boon x2, Niblis of the Urn, 4 Lingering Souls Spirit tokens and Gisela, and unlike Butcher's Cleaver it grants no LIFELINK, so it produces no gain event and does not advance the Voice of the Blessed count at all. CUT on that count, not on the false property. |
| Rally the Peasants | CORRECTED REASON (Challenger F7b). The original reason leaned on the adjective 'a dedicated combat trick slot does not earn here'. The mechanism half stands -- Rally the Peasants' 'Flashback {2}{R}' is unreachable in mono-white, so it is a one-shot {2}{W} spell. The count that was never taken: 'Creatures you control get +2/+0 until end of turn' scales with board width, and this deck presents 4-6 creatures plus up to 4 Lingering Souls Spirit tokens, so the effect is real (typically +8 to +12 damage). CUT anyway on a stated count: it is a one-shot with no board presence in a deck at 6 one-drops and 11 two-drops of 24 where every other slot leaves a permanent, and it produces no life-gain event, so it advances the payoff not at all. |
| Wild-Field Scarecrow, Geistcatcher's Rig, Epitaph Golem, Lupine Prototype, Galvanic Juggernaut | CORRECTED REASON (Challenger F7c, partial). The colourless-artifact batch was reasoned 'no bodies', which is false for 5 of its 11 members -- Wild-Field Scarecrow (1/4), Geistcatcher's Rig (4/5), Epitaph Golem (3/5), Lupine Prototype (5/5) and Galvanic Juggernaut (5/5) are artifact CREATURES. The accurate shared reason: all five are colourless bodies at MV 3-6 that produce no life-gain event and no evasion, in a mono-white aggro deck at avg MV 2.125 whose payoff counts gain events. Noted separately: Geistcatcher's Rig's 'you may have it deal 4 damage to target creature with flying' is the pool's only dedicated anti-flier effect and is a legitimate sideboard consideration against the cube's 58-card evasion class; it is not maindecked at {6}. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.08   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.23 adj [MV 2.08 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
       card_pool_rules: {"base": "cube_mainboard", "multipliers": {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}, "only_from": {}, "excluded": []}
[PASS] commons_uncommons_max_2: PASS -- verified by cube_search.get_max_copies for every name in mainboard + sideboard.
[PASS] rares_mythics_max_1: PASS -- every rare/mythic appears exactly once.
[PASS] rares_mythics_max_5_total: PASS -- exactly 5: Voice of the Blessed (R), Odric Lunarch Marshal (R), Thalia Heretic Cathar (R), Wedding Announcement (R), Gisela the Broken Blade (M). Sideboard contains ZERO rares/mythics. (Updated at Phase 9 round 2: Hopeful Initiate was cut and Odric took the slot.)
[PASS] basics_unlimited: PASS -- 14 Plains are format-supplied and exempt.
[PASS] all_cards_from_cube: PASS -- exact-name match against the working pool for all 50 cards.
[PASS] colour_legality: PASS -- every nonland card is castable in mono-white. ONE card prints an off-white colour identity and is core-castable rather than a splash: Lingering Souls (identity [B,W], cast for {2}{W}; its Flashback {1}{B} is an optional extra mode on a card already cast). Town Gossipmonger, the other such card, was cut at Phase 9, so validation_report now flags only Lingering Souls.
```