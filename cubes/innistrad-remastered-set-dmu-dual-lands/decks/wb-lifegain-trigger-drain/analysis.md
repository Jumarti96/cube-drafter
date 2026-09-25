---
deck_name: "wb-lifegain-trigger-drain"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-08-28T02:16:18Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x7   Plains
  x6   Swamp
  x1   Evolving Wilds                               fetches a basic of either colour, enters tapped
  x2   Sunlit Marsh                                 WB dual (Land - Plains Swamp), enters tapped
```

### CREATURES (13)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Indulgent Aristocrat                         x2    B     engine                         U
  1  Lunarch Veteran // Luminous Phantom          x2    W     engine                         C
  2  Blood Artist                                 x2    B     payoff                         U
  2  Cathar Commando                              x1    W     interaction                    C
  2  Fleshtaker                                   x2    WB    engine                         U
  2  Voice of the Blessed                         x1    W     payoff                         R
  3  Falkenrath Torturer                          x1    B     engine                         C
  4  Bloodline Keeper // Lord of Lineage          x1    B     engine                         M
  4  Mausoleum Guard                              x1    W     enabler                        U
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Tragic Slip                                  x2    B     interaction                    C
  1  Village Rites                                x1    B     infrastructure                 C
  2  Infernal Grasp                               x2    B     interaction                    U
  2  Valorous Stance                              x1    W     interaction                    U
  3  Lingering Souls                              x2    W     enabler                        U
```

### OTHER SPELLS (3)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  The Meathook Massacre                        x1    B     payoff                         M
  3  Sorin, Imperious Bloodlord                   x1    B     payoff                         M
  3  Wedding Announcement // Wedding Festivity    x1    W     engine                         R
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Cathar Commando                              x1    W     hate: noncreature permanents                   C
Angelic Purge                                x2    W     hate: noncreature permanents                   C
Bound by Moonsilver                          x1    W     flex: single large threat / transform decks    C
Gluttonous Guest                             x1    B     flex: fast aggro                               C
Sever the Bloodline                          x1    B     hate: wide boards / recursive threats          U
Slayer of the Wicked                         x2    W     hate: tribal creature decks                    U
Soul-Guide Gryff                             x2    W     hate: graveyard                                C
```

## ANALYSIS

### DECK IDENTITY

A white-black midrange deck that treats life gain as a COUNTER, not as a cushion. Voice of the Blessed reads 'whenever you gain life, put a +1/+1 counter on this creature' — it counts gain EVENTS, not amounts, so the deck is built to fire many one-point triggers per turn rather than a few large ones. Lunarch Veteran ('whenever another creature you control enters, you gain 1 life') converts every token into a counter, and Lingering Souls converts one card into four of them. The same board feeds a second, non-combat clock: Blood Artist and The Meathook Massacre convert creature deaths into direct life loss, and four sacrifice outlets (2 Indulgent Aristocrat, 2 Fleshtaker) mean the deck chooses when those deaths happen. Fleshtaker sits on both halves at once ('whenever you sacrifice another creature, you gain 1 life and scry 1'). The two clocks converge: every sacrifice is simultaneously a drain trigger and a Voice counter.


### HOW THE TWO CLOCKS CONVERGE

The whole deck rests on one observation about the payoff's oracle text. Voice of the Blessed reads
"Whenever you gain life, put a +1/+1 counter on this creature" — it counts life-gain **events**, not
amounts. Ten separate one-point gains is ten counters; a single ten-point gain is one. That inverts the
usual instinct about a lifegain deck: a card that gains 5 life at once is worth less here than a card
that gains 1 life five times.

Every slot is chosen against that reading. The table below counts, against this exact 24-card nonland
list, how many separate gain events each source can produce per turn cycle.

| Source | Oracle basis | Events per turn cycle |
|---|---|---|
| Lunarch Veteran x2 | "Whenever another creature you control enters, you gain 1 life" | 1 per creature entering — Lingering Souls alone is 2, or 4 across both casts |
| Blood Artist x2 | "Whenever this creature or another creature dies... you gain 1 life" | 1 per death, either side of the board |
| Fleshtaker x2 | "Whenever you sacrifice another creature, you gain 1 life and scry 1" | 1 per sacrifice, and the deck sacrifices at will |
| Indulgent Aristocrat x2 | Lifelink on a 1/1 | 1 per combat connection |
| The Meathook Massacre | "Whenever a creature an opponent controls dies, you gain 1 life" | 1 per opposing death, including to our own removal |
| Sorin | "+1: Target creature you control gains deathtouch and lifelink" | 1 per turn, on any body |

Ten of the twenty-four nonland cards produce gain events. Four counters — the threshold where Voice
gains flying and vigilance — is one busy turn, not a long game.

The second clock runs off the same board. Blood Artist and The Meathook Massacre convert creature
**deaths** into life loss, and six sacrifice outlets mean the deck decides when those deaths happen:
2 Indulgent Aristocrat at {2}, 2 Fleshtaker at {1}, Falkenrath Torturer at **{0}**, and Village Rites at
{B} at instant speed. The free outlet is what makes the two clocks one clock — a single Lingering Souls
becomes four sacrifices, which is four Blood Artist drains **and** four Voice counters, for no mana.

### THE CARD THAT LOOKS RIGHT AND ISN'T

Liesa, Forgotten Archangel is one of the strongest raw cards in these colours — a 4/5 flying lifelink
body for five that recurs your dead creatures. She is deliberately absent. Her third line reads "If a
creature an opponent controls would die, exile it instead," which switches off Blood Artist on every
opposing creature and switches off The Meathook Massacre's "whenever a creature an opponent controls
dies, you gain 1 life" entirely. In a deck whose second clock is powered by deaths on both sides of the
board, she taxes the plan she appears to support. This was surfaced by the independent shape judge as a
weakness in a competing build, and applied here.

### WHAT THE MANA BASE COST

The anchor payoff costs {W}{W} on turn two, but implementing the grill's sacrifice-outlet findings pushed
the deck's pip split to 41.4% white / 58.6% black. Both available fixers enter tapped — Sunlit Marsh
says so outright, and Evolving Wilds fetches tapped — so the only untapped white source on turn two is a
Plains. Tapped-aware enumeration over the final 40:

| Land base | P(castable {W}{W} on T2, on the play) | P(untapped black on T1, on the play) |
|---|---|---|
| 7 Plains / 2 Marsh / 7 Swamp | 58.0% | 77.1% |
| 6 Plains / 2 Marsh / 2 Wilds / 6 Swamp | 60.5% | 71.1% |
| **7 Plains / 2 Marsh / 1 Wilds / 6 Swamp (final)** | **63.4%** | **71.1%** |
| 8 Plains / 2 Marsh / 6 Swamp | 65.2% | 71.1% |

The last row is the best white number available and it was rejected: 10 white sources of 16 is 62.5%
production against 41.4% demand, a 21.1pp gap, past the point where the audit asks for rebalancing. The
final base buys 5.4pp on the anchor's on-curve cast for 6.0pp of turn-one black. That is a real cost and
it is worth naming: two copies of Indulgent Aristocrat genuinely want turn-one black, while Tragic Slip
and Village Rites are instants that do not.

The clean fix does exist and is priced out of reach — Shattered Sanctum is the pair's untapped-capable
dual, and it is a rare against a five-card rare budget already spent on five spells.

### PLAY PATTERN

Tragic Slip is functionally unconditional removal in this deck, not a conditional trick. Its morbid
clause ("-13/-13 instead if a creature died this turn") needs a death, and Falkenrath Torturer supplies
one for zero mana at instant speed. A one-mana kill-anything is a rate no other card in these colours
matches.

The Meathook Massacre is a finisher, not a stabiliser. At X=2 it kills most of this deck's own board —
which, with two Blood Artist in play, is the point: twelve creature copies dying is twelve drain
triggers. Cast it to end a game, not to survive one.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:7  2:10  3:5  4:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.55: The Meathook Massacre@0.85, Sorin, Imperious Bloodlord@0.7) → p=0.82 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 11.6: Bloodline Keeper // Lord of Lineage@0.8, Wedding Announcement // Wedding Festivity@0.8) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 74%  T2 96%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre
  OK        single_large_threat: Infernal Grasp, Valorous Stance, Tragic Slip
  OK        noncreature_permanents: Cathar Commando
  CONCEDED  stack: White and black in this cube contain no counterspells at any rarity, so nothing in these colours can interact on the stack; the deck answers resolved permanents afterwards with Infernal Grasp, Tragic Slip and Valorous Stance instead.
  CONCEDED  graveyard: No maindeck graveyard interaction: the cube's graveyard hate lives in cards (Soul-Guide Gryff, Epitaph Golem, Sever the Bloodline) that are blank against roughly half the field, so they are sideboarded rather than maindecked against a 74-card graveyard-themed cube.
```

_No WARN-tier structural flags were raised: curve, assembly, goldfish and coverage all returned PASS._


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Excess lands convert into action through repeatable mana sinks that need no cards in hand: Bloodline Keeper's '{T}: Create a 2/2 black Vampire creature token with flying' (free, so the spare mana goes elsewhere), Indulgent Aristocrat's '{2}, Sacrifice a creature: Put a +1/+1 counter on each Vampire you control', and Fleshtaker's '{1}, Sacrifice another creature: This creature gets +2/+2 until end of turn'. Lingering Souls gives a flooded player a second use of a card already spent, via 'Flashback {1}{B}'. The Meathook Massacre is an X spell, so surplus lands scale it directly. (Corrected at Phase 9 round 2 per Challenger N1: the previous text named Mentor of the Meek, which this round cut.) |
| `screw` | mitigation | Keepable two-land hands are common because the curve is 7 one-drops and 10 two-drops of 24 nonland cards, with only 2 cards above MV 3 (Bloodline Keeper and Mausoleum Guard, both MV 4). Measured on the FINAL list by the structural gate: keepable 83% against a 0.80 threshold, 3 lands by turn 3 in 84% of hands, and a play by turn 2 in 96%. Digging out is thinner than it was: Village Rites ('sacrifice a creature. Draw two cards') is the only maindeck card that draws toward a land, and it requires a creature already on board. Evolving Wilds guarantees the second colour rather than the second land. (Corrected at Phase 9 round 2 per Challenger N2: the previous text named Thraben Inspector's Clue and Morbid Opportunist, both cut this round, and quoted pre-repair goldfish figures of 84%/97%.) |
| `decapitation` | mitigation | Voice of the Blessed being answered on sight does not end the game, because the deck runs a SECOND, independent clock that needs no creature to survive: Blood Artist and The Meathook Massacre drain from deaths, and the Meathook drain persists as an enchantment that removal aimed at creatures cannot touch. Valorous Stance ('target creature gains indestructible until end of turn') protects Voice from a destroy effect at instant speed, and Voice itself becomes indestructible at ten counters. |
| `gas-out` | mitigation | REVISED at Phase 9. Two draw engines (Mentor of the Meek, Morbid Opportunist) were traded for two sacrifice outlets (Falkenrath Torturer, Village Rites) on Challenger findings F1/F2, so this entry is restated against the list that actually exists. Four refuel effects remain and the strongest is now stronger: Village Rites ('As an additional cost to cast this spell, sacrifice a creature. Draw two cards') is two cards for {B} at instant speed; Wedding Announcement ('If you attacked with two or more creatures this turn, draw a card') draws every end step once the board is wide and otherwise makes a body; Lingering Souls is a second card's worth of bodies from a slot already spent, via 'Flashback {1}{B}'. Decisively, Bloodline Keeper's '{T}: Create a 2/2 black Vampire creature token with flying' answers the mode's actual question -- what happens when the hand is empty -- by producing a body, a Lunarch Veteran gain event and a Voice counter every turn indefinitely from zero cards in hand. |
| `raced` | mitigation | The cube's fastest clocks are creature decks (threat_profile shows only 4 sweepers in 300 cards, so boards stick and races are common). This deck is well-placed to win a race rather than lose one: Indulgent Aristocrat has lifelink, Sorin's +1 grants any creature deathtouch AND lifelink, and every Blood Artist trigger both drains the opponent and gains us life — a two-point life swing per creature death. The Meathook Massacre resets an aggressive board while draining. Gluttonous Guest (a {2}{B} 1/4) is sideboarded specifically for when racing is the wrong plan. |
| `disruption-fizzle` | mitigation | REVISED at Phase 9. The previous entry ACCEPTED this mode, arguing redundant outlets would cost the token count feeding Voice of the Blessed. The Challenger refuted that cost directly (F1/F2) and it was wrong: Falkenrath Torturer's 'Sacrifice a creature: This creature gains flying until end of turn' costs ZERO mana to activate, and Village Rites is an instant -- redundancy was available without thinning a single token. The deck now runs six sacrifice outlets: 2 Indulgent Aristocrat at {2}, 2 Fleshtaker at {1}, Falkenrath Torturer at {0}, Village Rites at {B} instant speed, and Cathar Commando sacrificing itself. Interaction aimed at an outlet cannot blow the deck out mid-chain: the free outlet converts every creature on board into Blood Artist and Meathook drain triggers in response, holding up no mana at all. |


### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Bruna, the Fading Light, Brisela, Voice of Nightmares | Meld package: 'exile them, then meld them into Brisela' requires BOTH Gisela ({2}{W}{W}) and Bruna ({5}{W}{W}) simultaneously in play — 11 mana across two cards, and Bruna alone consumes one of the five permitted rare/mythic slots. |
| Griselbrand, Emrakul, the Promised End | Eight-plus mana with heavy coloured requirements and no reanimation package in this build: 'Griselbrand {4}{B}{B}{B}{B}' and 'Emrakul {13}' are uncastable inside this deck's thesis turn. |
| Triskaidekaphobia, Cryptolith Fragment // Aurora of Emrakul | Actively fights the deck's own life total: Triskaidekaphobia's 'each player with exactly 13 life loses the game' is a hazard for a deck deliberately moving its own life total, and Cryptolith Fragment's '{T}: add one mana of any color. Each player loses 1 life' drains US as well, working against Chalice of Life's 30-life flip condition. |
| Tree of Perdition | Tree of Perdition's '{T}: exchange target opponent's life total with this creature's toughness' sets an opponent to 13 but gives THIS deck their old total — it overwrites the life total the Voice of the Blessed and Chalice plans are built on, and it is a mythic against a five-rare cap. |
| Stitcher's Graft, Neglected Heirloom // Ashmouth Blade, Harvest Hand // Scrounged Scythe, Twinblade Geist // Twinblade Invocation, Faith Unbroken, Lunarch Mantle, Demonmail Hauberk, Blazing Torch | Voltron auras and equipment: they concentrate value on one creature, and a sacrifice-and-drain deck that trades bodies freely hands opponents a two-for-one every time the enchanted creature is answered. Butcher's Cleaver and Gryff's Boon are kept because they grant lifelink and evasion respectively; these grant neither. |
| Heartless Summoning | Heartless Summoning's 'creatures you control get -1/-1' kills the 1/1 Spirit and Human tokens this deck's entire trigger count is built on. |
| Archangel Avacyn // Avacyn, the Purifier | Archangel Avacyn's back face is a liability for THIS deck specifically: 'When a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep' is not optional, and Avacyn, the Purifier then 'deals 3 damage to each other creature and each opponent' — in a build whose Voice-counter and Blood Artist counts are carried by 1/1 and 2/2 tokens, the transform is guaranteed (this deck sacrifices creatures deliberately) and it wipes its own board. It is also a mythic against a rare/mythic budget already fully spent on five cards that advance the thesis directly. |
| Festerhide Boar | Splash candidate declined: Festerhide Boar is a vanilla {3}{G} 3/3 (morbid counters aside) with no lifegain, sacrifice-outlet or drain text — it does not justify a green source in a two-colour mana base. |
| Captivating Vampire, Voldaren Bloodcaster // Bloodbat Summoner | CORRECTED REASON (Challenger F4/F5). Both are RARES cut on the five-card rare/mythic budget, NOT on a tribal-plan claim. Their counts against the finished list are in fact satisfied: Captivating Vampire's 'Other Vampire creatures you control get +1/+1' and 'Tap five untapped Vampires' see 6 nontoken Vampire cards in the FINISHED list (Indulgent Aristocrat x2, Blood Artist x2, Falkenrath Torturer, Bloodline Keeper) -- corrected from 5 at Phase 9 round 2 per Challenger N6 plus every 2/2 Vampire token the Keeper makes; Voldaren Bloodcaster's 'Whenever this creature or another nontoken creature you control dies, create a Blood token' sees 13 nontoken creature cards and four sacrifice outlets. Both are genuinely on-plan and are excluded only because all five permitted rare/mythic slots are spent on Voice of the Blessed, Bloodline Keeper, Wedding Announcement, Sorin and The Meathook Massacre. |
| Soul-Guide Gryff | CORRECTED REASON (Challenger F10). Soul-Guide Gryff is graveyard HATE, not graveyard recursion: 'When this creature enters, exile up to one target card from a graveyard.' It is excluded from the MAINBOARD because it is blank against roughly half the field at {4}{W}, and it is SIDEBOARDED at two copies against the cube's 75-card graveyard theme. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.08   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.73 adj [MV 2.08 vs 2.5, 1 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  58.6%  prod  50.0%  gap  +8.6pp  [OK]
  W  demand  41.4%  prod  56.2%  gap -14.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
       card_pool_rules: {"base": "cube_mainboard", "multipliers": {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}, "only_from": {}, "excluded": []}
[PASS] commons_uncommons_max_2: PASS — verified by cube_search.get_max_copies for every name in mainboard + sideboard.
[PASS] rares_mythics_max_1: PASS — every rare/mythic appears exactly once.
[PASS] rares_mythics_max_5_total: PASS — exactly 5: Voice of the Blessed (R), Wedding Announcement (R), Bloodline Keeper (M), Sorin Imperious Bloodlord (M), The Meathook Massacre (M). Sideboard contains ZERO rares/mythics. Shattered Sanctum (rare dual land) was excluded specifically to stay at 5.
[PASS] basics_unlimited: PASS — 7 Plains and 7 Swamp are format-supplied and exempt.
[PASS] all_cards_from_cube: PASS — exact-name match against the working pool for all 50 cards.
```