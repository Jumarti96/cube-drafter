---
deck_name: "wb-aristocrats-drain"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-08-30T20:33:18Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x2   Plains
  x12  Swamp
  x2   Sunlit Marsh                                 WB dual (Land - Plains Swamp), enters tapped
```

### CREATURES (12)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Gravecrawler                                 x1    B     enabler                        R
  1  Indulgent Aristocrat                         x1    B     engine                         U
  2  Blood Artist                                 x2    B     payoff                         U
  2  Butcher Ghoul                                x1    B     enabler                        C
  2  Siege Zombie                                 x2    B     payoff                         C
  3  Demonic Taskmaster                           x1    B     engine                         U
  3  Falkenrath Torturer                          x2    B     engine                         C
  3  Morbid Opportunist                           x1    B     infrastructure                 U
  4  Bloodline Keeper // Lord of Lineage          x1    B     enabler                        M
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Tragic Slip                                  x2    B     interaction                    C
  1  Village Rites                                x2    B     engine                         C
  2  Collective Brutality                         x1    B     interaction                    R
  2  Infernal Grasp                               x1    B     interaction                    U
  3  Lingering Souls                              x2    W     enabler                        U
```

### OTHER SPELLS (4)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Ghoulish Procession                          x2    B     enabler                        U
  2  The Meathook Massacre                        x1    B     payoff                         M
  3  Sorin, Imperious Bloodlord                   x1    B     threat                         M
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Eaten Alive                                  x1    B     hate: recursive threats                        C
Killing Wave                                 x1    B     hate: wide boards                              U
Cathar Commando                              x2    W     hate: noncreature permanents                   C
Infernal Grasp                               x1    B     hate: single large threat                      U
Angelic Purge                                x1    W     hate: noncreature permanents / any creature    C
Gluttonous Guest                             x2    B     flex: fast aggro                               C
Gisa's Bidding                               x1    B     flex: grindy attrition                         C
Sever the Bloodline                          x1    B     hate: wide boards / recursion                  U
```

## ANALYSIS

### DECK IDENTITY

A black-primary WB aristocrats deck that kills WITHOUT ATTACKING. Blood Artist reads 'whenever this creature or another creature dies, target player loses 1 life and you gain 1 life' -- note 'another creature', not 'another creature you control', so the deck's own removal drains too. The Meathook Massacre adds 'whenever a creature you control dies, each opponent loses 1 life' on an ENCHANTMENT that creature removal cannot touch, and two Siege Zombie add a third drain that needs no sacrifice at all: 'Tap three untapped creatures you control: Each opponent loses 1 life.' No blocker interacts with any of it. The deck's job is to make creatures die on demand and keep replacing them. Falkenrath Torturer sacrifices for ZERO mana; Demonic Taskmaster supplies a guaranteed free death every upkeep with no outlet needed at all; Village Rites does it at instant speed while drawing two. The fodder regenerates itself: Butcher Ghoul returns via undying, Gravecrawler recasts from the graveyard for {B} while any Zombie is out, Ghoulish Procession makes a fresh Zombie every turn something dies, and Bloodline Keeper makes a 2/2 every turn from an empty hand. Life gain here is the BYPRODUCT of the drain, not the plan.


### HOW THIS DECK KILLS WITHOUT ATTACKING

Blood Artist reads "Whenever this creature **or another creature** dies, target player loses 1 life and you
gain 1 life." Not "another creature you control" — *any* creature, on either side of the board. That single
word is why this deck's removal doubles as reach and why it is happy to trade in combat it never needed to
enter.

Three drains stack, and they fail in different ways, which is the point:

| Drain | Trigger | What answers it |
|---|---|---|
| Blood Artist ×2 | any creature dying | creature removal |
| The Meathook Massacre | your creatures dying | nothing — it is an enchantment |
| Siege Zombie ×2 | tapping three creatures | creature removal, but it needs no sacrifice |

Siege Zombie is the one that nearly got away. It reads "Tap three untapped creatures you control: Each
opponent loses 1 life" — a repeatable, zero-mana, non-combat drain, which is this deck's literal win
condition — and the Phase 5A seed missed it entirely. Its synergy clusters are Tokens and Tribal, its
structural role is Engine/Outlet, and its "Life Drain" label lives in a field the seed query does not read,
so all three seed bands passed over it. The grill caught it. It is now two copies, and it *composes* with the
sacrifice engine rather than competing: tap three creatures to drain, then sacrifice those same three for
three more Blood Artist triggers.

### THE DEATH ECONOMY

The deck's currency is creature deaths, and it buys them at four different prices:

- **Free, on demand** — Falkenrath Torturer: "Sacrifice a creature: This creature gains flying until end of
  turn." No mana in the cost, unlimited activations. This is what makes the deck close to uninterruptible:
  in response to any removal spell, the whole board converts to drain triggers before it resolves.
- **Free, automatic** — Demonic Taskmaster: "At the beginning of your upkeep, sacrifice a creature other than
  this creature." A guaranteed death every turn needing no outlet at all. Note the cost: it is *mandatory*,
  so on a board of Taskmaster plus one payoff it eats the payoff.
- **One mana, at instant speed, drawing two** — Village Rites.
- **Two mana, plus counters on Vampires** — Indulgent Aristocrat.

The fodder regenerates faster than it is spent. Butcher Ghoul returns via undying; Gravecrawler recasts from
the graveyard for {B} while any of the deck's 6 Zombie sources is out; Ghoulish Procession makes a fresh
Zombie every turn a nontoken creature dies; Bloodline Keeper makes a 2/2 every turn from an empty hand.

### THE HARD GATE THAT RESHAPED THE DECK

Phase 6b's assembly check failed on first run, and the failure was structural rather than a mistake. With
only three drain-payoff *cards* the effective count was 3.5 and P(seen by turn 8) came to 0.7467 against a
0.75 threshold. The pool caps that roster absolutely: Blood Artist is uncommon so two is the legal maximum,
and The Meathook Massacre is mythic so one is. There is no fourth Blood Artist to find.

The repair could have been to re-weight the three existing payoffs upward until the number cleared. That
would have been fraud — the same three cards with a bigger number attached. Instead the payoff roster was
broadened with cards that genuinely produce opponent life loss, and the discounts were applied *downward*:
6 physical copies producing 4.95 effective, a 17.5% haircut. The gate now reads 0.87.

A second gate was missing entirely and the grill found it: the deck's identity rests on sacrifice outlets,
but no outlet role was ever declared, so it was never checked. Measured retroactively it sat at p=0.690 —
below threshold. Adding Indulgent Aristocrat to the maindeck and gating the role properly brings it to 0.85.

### WHY FOUR WHITE SOURCES IN A 92%-BLACK DECK

White carries exactly two mainboard cards — Lingering Souls ×2, four bodies across two casts, the densest
fodder in the pool — and its second cast is black anyway. Four white sources of sixteen gives 70% access by
the tenth card. The reason it is not three is the sideboard: every artifact and enchantment answer legal in
these colours is white, and the cube contains only six such answers in total.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (24 nonland):  1:6  2:10  3:7  4:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5: The Meathook Massacre@0.9, Siege Zombie@0.75, Siege Zombie@0.75, Sorin, Imperious Bloodlord@0.6) → p=0.87 (need ≥ 0.75)
  PASS  outlet: 6 copies (effective 4.75: Indulgent Aristocrat@0.85, Village Rites@0.5, Village Rites@0.5, Demonic Taskmaster@0.9) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.6: Gravecrawler@0.8, Bloodline Keeper // Lord of Lineage@0.8) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 74%  T2 98%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre, Tragic Slip
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  CONCEDED  noncreature_permanents: No maindeck answer exists. The cube contains only 4 artifact answers and 2 enchantment answers in total; THREE of the four artifact answers are white (Angelic Purge, Cathar Commando, Hopeful Initiate) and the fourth is red (Abrade), while BOTH enchantment answers are white -- so in these colours every available answer costs {W}. In a deck whose pip demand is 92% black off four white sources, maindecking a {W} answer would be a card uncastable more often than the threat appears. The sideboard carries 2 Cathar Commando ('Flash. {1}, Sacrifice this creature: Destroy target artifact or enchantment') plus 1 Angelic Purge, and the four white sources exist substantially to make them castable after boarding.
  CONCEDED  stack: White and black in this cube contain no counterspells at any rarity, so nothing in these colours can interact on the stack. The deck answers permanents after they resolve, with 2 Tragic Slip, Infernal Grasp and Collective Brutality -- whose first mode, 'target opponent reveals their hand. You choose an instant or sorcery card from it. That player discards that card', is the closest thing to proactive stack interaction available in W/B.
  CONCEDED  graveyard: No maindeck graveyard interaction, and the exposure runs in BOTH directions. This deck depends on its own graveyard -- Gravecrawler recurs from it, Lingering Souls flashes back from it, Butcher Ghoul returns via undying -- in a cube where 75 cards (27%) interact with graveyards. The decisive fact, verified against dossier.structural_census.graveyard_hate, is that this list is EMPTY: the cube contains no dedicated graveyard hate at all, so there is nothing meaningful to board against and nothing meaningful to fear. The only W/B card that touches an opposing graveyard is Soul-Guide Gryff at {4}{W}, uncastable off four white sources. Eaten Alive and Sever the Bloodline both EXILE rather than destroy and are the sideboard's answer to recursive threats.
```

_No WARN-tier structural flags were raised: curve, assembly, goldfish and coverage all returned PASS._


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | REGENERATED at Phase 9 round 2. The previous entry named Abundant Maw and Restless Bloodseeker, both cut in this same repair round -- and they were the deck's only cards above MV 4, so the curve now tops out at four with nothing above it. Four mana sinks remain and all four are in the list: Gravecrawler recasts from the graveyard for {B} every turn without limit ('You may cast this card from your graveyard as long as you control a Zombie'); Bloodline Keeper's '{T}: Create a 2/2 black Vampire creature token with flying' needs no mana at all; Indulgent Aristocrat's '{2}, Sacrifice a creature' converts a spare body into counters and a drain trigger; and Lingering Souls gives a flooded player a second use of a card already spent via 'Flashback {1}{B}'. Siege Zombie also converts a flooded board into damage for zero mana. |
| `screw` | mitigation | The curve is 6 one-drops and 10 two-drops of 24 nonland cards, and after the Phase 9 cuts there are now ZERO cards above MV 4 (the previous entry cited Abundant Maw as 'the single card above MV 4'; it was cut). The structural gate re-run on the final list measured keepable hands at 84.5% against the 0.80 threshold, three lands by turn three in 84% of hands, and a play by turn two in 98.2%. Village Rites at {B} digs two cards deep for one mana, and Morbid Opportunist draws every turn something dies. |
| `decapitation` | mitigation | There is no single key card. The drain role is held by 6 payoff copies across 4 different cards (Blood Artist x2, The Meathook Massacre, Siege Zombie x2, Sorin -- count corrected from '5 cards' at round 2), and The Meathook Massacre sits on an ENCHANTMENT that creature removal cannot answer at all. The outlet role is held by 6 copies across 4 cards: 2 Falkenrath Torturer (free), 2 Village Rites (instant speed), Indulgent Aristocrat and Demonic Taskmaster -- the last two added at Phase 9 and omitted from the previous version of this entry. The Torturer's activation costs zero mana, so removal aimed at it can be answered by sacrificing the whole board in response. The fodder role recurs by itself: Butcher Ghoul's undying, Gravecrawler from the graveyard, Ghoulish Procession replacing what dies, Bloodline Keeper making more from nothing. |
| `gas-out` | mitigation | REGENERATED at Phase 9 round 2. The previous entry claimed FOUR refuel effects and named Voldaren Bloodcaster, cut this round. The honest count is THREE: Village Rites x2 ('sacrifice a creature. Draw two cards') and Morbid Opportunist ('whenever one or more other creatures die, draw a card'). That is thin, and it is stated rather than padded. What actually answers this mode is not card draw but the two engines that need no cards in hand at all: Bloodline Keeper produces a body every turn from an empty hand, and Gravecrawler is a body per {B} from the graveyard indefinitely while any Zombie is out -- and this list runs 6 Zombie sources of 24. Demonic Taskmaster additionally converts those free bodies into a guaranteed drain trigger every upkeep with no card and no mana spent. |
| `raced` | mitigation | REVISED at Phase 9: the previous entry named Indulgent Aristocrat as a lifelink source while the card was on the SIDEBOARD, which the Challenger correctly marked UNSATISFIED. Indulgent Aristocrat is now in the MAINBOARD (it was moved to repair the outlet role), so the claim is true as written. This deck is well placed in a race: every Blood Artist trigger is a two-point swing (they lose 1, we gain 1), so the same sacrifices that advance the kill also climb our life total; Indulgent Aristocrat has lifelink and Sorin's +1 grants it to any creature; and The Meathook Massacre doubles as a scalable sweeper that resets an aggressive board while draining. Blood Artist reads 'this creature or another creature dies', so their creatures dying to our removal drains them too. Two Gluttonous Guest ({2}{B} 1/4) are sideboarded for the fastest starts. |
| `disruption-fizzle` | mitigation | The critical turn is a sacrifice chain and it is close to uninterruptible. Falkenrath Torturer's outlet costs ZERO mana and is an activated ability, so in response to any removal spell the board can be converted into drain triggers before the removal resolves -- the value is banked, not lost. Village Rites does the same at instant speed while replacing itself with two cards. What the deck cannot fight is a counterspell on the payoff itself, and neither white nor black has an answer to that in this cube; the mitigation is redundancy instead, at 6 payoff copies across 4 cards (count corrected from '5 cards' at round 2). The honest caveat: banking value in response works only when a payoff is ALREADY on the battlefield. |


### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Griselbrand | Griselbrand's {4}{B}{B}{B}{B} is eight mana with four black pips and its 'Pay 7 life: Draw seven cards' fights a deck whose payoff gains life; there is no reanimation package in this build to cheat it in. |
| Triskaidekaphobia, Cryptolith Fragment // Aurora of Emrakul | Actively hostile to a deck that deliberately moves its own life total in both directions: Triskaidekaphobia's 'each player with exactly 13 life loses the game' is a hazard rather than a plan, and Cryptolith Fragment's '{T}: Add one mana of any color. Each player loses 1 life' drains US as well. |
| Tree of Perdition | Tree of Perdition's '{T}: Exchange target opponent's life total with this creature's toughness' overwrites both life totals, which discards all the incremental drain this deck has already dealt and hands the opponent whatever total we had climbed to via Blood Artist. It is also a mythic against a five-card rare cap. |
| Archangel Avacyn // Avacyn, the Purifier | Archangel Avacyn's back face is not optional and is a liability for a token-and-sacrifice deck: 'When a non-Angel creature you control dies, transform Archangel Avacyn' triggers on our own sacrifices immediately, and Avacyn, the Purifier then 'deals 3 damage to each other creature and each opponent', wiping the 1/1 and 2/2 fodder the engine runs on. A mythic against a fully budgeted five rares. |
| Stitcher's Graft, Neglected Heirloom // Ashmouth Blade, Harvest Hand // Scrounged Scythe, Twinblade Geist // Twinblade Invocation, Blazing Torch | Equipment and auras that grant neither evasion nor lifelink nor a sacrifice trigger: this deck trades bodies constantly, so concentrating value on one creature hands the opponent a two-for-one every time. Demonmail Hauberk is kept in the slice because its equip cost IS a sacrifice; these are not. (Scope NARROWED at Phase 9 per Challenger F8 -- three cards were wrongly swept under this reason and are dispositioned separately below.) |
| Heartless Summoning | Heartless Summoning's 'Creatures you control get -1/-1' kills the 1/1 Spirit and Human tokens and the 1/1 undying bodies that this deck's entire fodder count is built on. |
| Vanquish the Horde | CORRECTED REASON (Challenger F7). Vanquish the Horde was swept into an adjectival batch, but its oracle reads a QUANTITY of other permanents: 'This spell costs {1} less to cast for each creature on the battlefield. Destroy all creatures.' Against the finished list the count is genuinely favourable -- this deck presents 4-6 creatures plus tokens, so it is often castable for 3-5 mana, and with Blood Artist or The Meathook Massacre out a symmetric wipe is a mass DRAIN rather than a loss. It is cut on two stated mechanisms instead: it costs {6}{W}{W}, i.e. TWO white pips off four white sources in a 92%-black deck, and it is a RARE against a five-card rare/mythic cap already fully spent on The Meathook Massacre, Gravecrawler, Sorin, Bloodline Keeper and Collective Brutality. |
| Gryff's Boon, Lunarch Mantle, Faith Unbroken | CORRECTED REASON (Challenger F8). These three were swept under 'grant neither evasion nor lifelink nor a sacrifice trigger', which their oracle text falsifies: Gryff's Boon grants FLYING (evasion); Lunarch Mantle grants '+2/+2 and "{1}, Sacrifice a permanent: This creature gains flying until end of turn"' (both evasion AND a sacrifice outlet -- the dossier's structural census lists it as an outlet); and Faith Unbroken is REMOVAL ('exile target creature an opponent controls until this Aura leaves the battlefield'), not a pump aura. The accurate shared reason: all three cost {W} in a deck with four white sources and 92% black pip demand, and none produces a creature DEATH, which is the only currency this deck's kill spends. Lunarch Mantle's outlet additionally dies with its host, unlike Falkenrath Torturer. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.84 adj [MV 2.12 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  92.3%  prod  87.5%  gap  +4.8pp  [OK]
  W  demand   7.7%  prod  25.0%  gap -17.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
       card_pool_rules: {"base": "cube_mainboard", "multipliers": {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}, "only_from": {}, "excluded": []}
[PASS] commons_uncommons_max_2: PASS -- verified by cube_search.get_max_copies for every name on both boards.
[PASS] rares_mythics_max_1: PASS -- every rare/mythic appears exactly once.
[PASS] rares_mythics_max_5_total: PASS -- exactly 5: Gravecrawler (R), Collective Brutality (R), The Meathook Massacre (M), Sorin Imperious Bloodlord (M), Bloodline Keeper (M). Sideboard contains ZERO rares/mythics. Updated at Phase 9: Voldaren Bloodcaster was cut and Collective Brutality took the slot.
[PASS] basics_unlimited: PASS -- 12 Swamp and 2 Plains are format-supplied and exempt.
[PASS] all_cards_from_cube: PASS -- exact-name match against the working pool for all 50 cards.
```