---
deck_name: "rw-coalition-enlist"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RW"
format: "40-card"
built_at: "2026-08-20T17:12:08Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)
### LANDS (17)
```
x2   Sacred Peaks               R/W dual, enters tapped - the only tapped lands in the deck
x2   Crystal Grotto             scry 1 on entry; {1} for any colour
x1   Plaza of Heroes            untapped colour for the 4 legends; {3} to exile it and protect one
x6   Mountain                   basic
x6   Plains                     basic
```
### CREATURES (16)
```
CMC  Card                       Qty  Color  Role                                   Rar
  2  Baird, Argivian Recruiter  x2   WR     PAYOFF - a Soldier every end step a cr U
  2  Guardian of New Benalia    x1   W      PAYOFF (0.8) - scry 2 whenever it enli R
  2  Resolute Reinforcements    x2   W      Enabler (0.8) - two untapped Soldier b U
  2  Valiant Veteran            x1   W      PAYOFF - static anthem: every Soldier  R
  2  Yavimaya Steelcrusher      x2   R      Enabler (0.8) - 2-power enlist body pl C
  3  Argivian Cavalier          x2   W      Enabler - enlist body arriving with a  C
  3  Charismatic Vanguard       x2   W      Enabler (0.7) - 3/2 Soldier: a real bl C
  3  Keldon Strike Team         x2   R      Enabler (0.7) - kicked: two Soldiers A C
  4  Tori D'Avenant, Fury Rider x2   WR     PAYOFF - mass +1/+1, trample to red at U
```
### INSTANTS & SORCERIES (5)
```
CMC  Card                       Qty  Color  Role                                   Rar
  2  Destroy Evil               x2   W      Interaction - modal: a toughness-4+ bl C
  2  Lightning Strike           x2   R      Interaction - removal or reach         C
  3  Hurloon Battle Hymn        x1   R      Interaction - 4 damage, the deck's lar U
```
### OTHER SPELLS (2)
```
CMC  Card                       Qty  Color  Role                                   Rar
  2  Hero's Heirloom            x2   C      Enabler - permanent re-attachable Bair U
```
## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                Rar
Citizen's Arrest           x2   W      exile a creature or planeswalker; the  C
Coalition Skyknight        x2   W      a FLYING enlist body; the deck's only  U
Smash to Dust              x2   R      artifact removal, or 1 damage to each  C
Heroic Charge              x2   W      kicked, the whole team gets +2/+1 and  C
Jaya's Firenado            x2   R      5 damage, the only answer in either bo C
```
## ANALYSIS
### DECK IDENTITY

The only build of this archetype that runs enlist as an ENGINE rather than as a combat trick,
because white is where the enlist payoffs actually live. Baird, Argivian Recruiter reads "At the
beginning of your end step, if you control a creature with power greater than its base power,
create a 1/1 white Soldier creature token" - enlist raises a creature above its base power, and the
boost lasts until end of turn, so it is still live when Baird checks. Valiant Veteran then makes
the loop unconditional: "Other Soldiers you control get +1/+1" is static, so every Soldier token
sits permanently above its base 1/1 and Baird fires at end step with no attack at all. Tori
D'Avenant closes, giving the whole team +1/+1 and handing red attackers the trample that makes
enlisted power unabsorbable.

### THIS DECK WAS BUILT AS RGW AND CUT TO RW DURING THE GRILL

The archetype was selected as a three-colour Coalition shell. The Phase 9 Challenger showed the
green half could not be cast, and the finding was decisive on three counts:

| Claim | Reality |
|---|---|
| green sources = 6 | **3.** Plaza of Heroes can never make green here - both its coloured modes are legendary-gated and the only legends are Baird {R}{W} and Tori {1}{R}{R}{W}. Crystal Grotto charges {1}. |
| a {1}{G} two-drop is on curve | castable **47.6%** of the time |
| green earns its slots | green supplied **zero enlist bodies** to an enlist deck; its two creatures were the build's own lowest-weighted enablers, at 0.6 and 0.5 |

The thesis - Baird, Tori, Guardian - was always red-white. Only the mana was wrong. Cutting green
took tapped lands from 4 of 17 to **2 of 17** and brought the colour split to 51.9% white / 48.1%
red. One honest qualification: it made Tori's {R}{R} marginally *harder*, since Karplusan Forest
went with it and red sources fell 12 to 11 (turn-4 castability 87.4% to 83.5%). Everything else
improved sharply.

### THE THREE KINDS OF BAIRD SWITCH

Baird's condition is "power greater than its base power" - and the cards that satisfy it are not
interchangeable. The first build counted ten of them and called that an engine; the grill showed
the count conflated three different durations:

| Kind | Cards | Copies |
|---|---|---|
| **Repeatable, no attack required** | Valiant Veteran, Hero's Heirloom | **3** |
| Repeatable, but must attack | Argivian Cavalier x2, Guardian of New Benalia, Yavimaya Steelcrusher x2 | 5 |
| Conditional | Tori D'Avenant x2 - "all OTHER attacking creatures", so a solo Tori makes nothing | 2 |

The RGW build had **zero** cards in the first row. That mattered more than the raw ten, because all
five enlist bodies are x/2 and enlist adds power only - an enlisting attacker that dies to a block
never reaches the end step. Valiant Veteran and Hero's Heirloom never expose anything to a blocker.

### VALIANT VETERAN IS THE ENGINE'S KEYSTONE

"Other Soldiers you control get +1/+1." Every token this deck makes is a **1/1 white Soldier**
token, produced by 4 of the 23 nonland cards, and **8 of the 16 creature copies are printed
Soldiers** - including Baird itself, which is a Human Soldier and therefore sits at 3/3 above its
own base 2/2. With Valiant Veteran on the battlefield Baird's trigger is self-satisfying.

### WHY DESTROY EVIL IS NOT ANTI-RACE INTERACTION

"Destroy target creature with toughness 4 or greater." Against the class that actually races you -
cheap small creatures - it is blank: **181 of the 254 cube creatures with numeric toughness (71.3%)
have toughness 3 or less** and cannot be targeted. It is in the deck for the blocker profile that
survives an enlisted 2/2 turned 4/2, and for its enchantment mode. The real anti-race package is
Charismatic Vanguard x2 (a 3/2 that blocks exactly what Destroy Evil cannot touch), Resolute
Reinforcements x2 (flash - two surprise blockers on the opponent's end step), and 3 of 23 as
unconditional removal.

### SHAPE NOTE

The curve is 14 of 23 nonland cards at mana value 2, 7 at 3, 2 at 4, and **zero one-drops** - a 0%
turn-1 play rate. That is bought deliberately: the payoffs are {R}{W} and {1}{R}{R}{W}, and a deck
that wants both on curve cannot also spend slots on one-mana plays that do not advance the loop.
It buys back a 95% turn-2 play rate.
### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  2:14  3:7  4:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.8: Guardian of New Benalia@0.8) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 10: Yavimaya Steelcrusher@0.8, Yavimaya Steelcrusher@0.8, Resolute Reinforcements@0.8, Resolute Reinforcements@0.8, Keldon Strike Team@0.7, Keldon Strike Team@0.7, Charismatic Vanguard@0.7, Charismatic Vanguard@0.7) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 95%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper: white's board wipes in this cube are Temporary Lockdown and Karn's Sylex, both rares that would eat two of the five rare slots. Smash to Dust ('deals 1 damage to each creature your opponents control') is held in the sideboard, where it also answers the artifact class.
  OK        single_large_threat: Destroy Evil, Hurloon Battle Hymn, Lightning Strike
  OK        noncreature_permanents: Destroy Evil, Yavimaya Steelcrusher
  CONCEDED  stack: The pool contains no counterspell in red or white; interacting on the stack is unavailable to this colour pair at any cost.
  CONCEDED  graveyard: The cube dossier reports 0 graveyard-hate cards cube-wide, so no colour in this environment answers this class.
```
- No WARN-tier flags: curve (midrange) PASS and goldfish PASS on the Phase 6b run.
- Band-classification disclosure: Charismatic Vanguard x2 and Hero's Heirloom x2 both carry taxonomic_profile.structural_roles of [Payload/Payoff] in the working pool, but this build files all four copies under the residual Bodies/fodder band rather than under Threats/Payoffs. Classified by the pool's own taxonomy the Threats band would read 12 of 23 = 52.2%, above the 40% midrange ceiling. The placement is defensible on oracle grounds - Hero's Heirloom is an Equipment with no body at all, and Charismatic Vanguard is carried as a 3/2 blocker and enlist donor rather than as a threat - but the disagreement between the taxonomy and the slot table is recorded here rather than left silent.
- Shape disclosure: the curve is 14 of 23 nonland cards at mana value 2, 7 at 3, 2 at 4, and ZERO one-drops. The curve check passes for midrange, but the 0% turn-1 play rate is a real property of the deck and is recorded as an accepted failure mode under 'screw'.
- COLOUR CHANGE: this deck was designed and shape-judged as RGW and was cut to RW during the Phase 9 grill, on a Challenger finding that green had three real sources for nine cards and supplied zero enlist bodies. The thesis, the chosen sketch and the judge's grounds all survive unchanged; only the manabase and the five green cards were replaced.
- Disclosure on Baird's enablers: the RGW version claimed Baird was 'live off 9 of 23 cards' and inferred that this made it an engine. The count reproduced but conflated three durations - one-shot ETB, attack-conditional, and repeatable. This list states the three categories separately and adds 3 copies of the category the RGW build had none of: unconditional, no-attack-required switches.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | CORRECTED after the grill - the RGW version asserted the deck had no mana sink at all, which was false even then. This list has three repeatable maindeck sinks: Hero's Heirloom x2 ('Equip {2}', re-attachable every turn and a permanent Baird switch), Charismatic Vanguard x2 ('{4}{W}: Creatures you control get +1/+1 until end of turn'), and Plaza of Heroes ('{3}, {T}, Exile this land: Target legendary creature gains hexproof and indestructible'). Two kickers also convert surplus mana directly: Keldon Strike Team's {1}{W} into two Soldiers and Hurloon Battle Hymn's {W} into 4 life. |
| screw | accepted | The deck runs ZERO one-drops - a 0% turn-1 play rate on the goldfish check - because the payoffs are Baird at {R}{W} and Tori at {1}{R}{R}{W} and a deck that wants both on curve cannot also spend slots on one-mana plays that do not advance the loop. What it buys back is density at two mana: 14 of 23 nonland cards cost exactly 2, so a keepable hand almost always has a turn-2 play (95%), 87% of openers are keepable and 88% reach three lands by turn 3. Cutting green also removed the deck's worse screw axis - COLOUR screw - by taking tapped lands from 4 to 2 and bringing the colour split to 51.9% white / 48.1% red. One honest qualification: the cut made Tori D'Avenant's {R}{R} marginally HARDER, not easier, because Karplusan Forest went with it and red sources fell from 12 to 11 - simulated {1}{R}{R}{W} on turn 4 moved from 87.4% to 83.5% conditional on four land drops. Everything else improved sharply ({1}{W} from 78.6% to 83.6%), so the trade is plainly correct, but it should not be claimed as an across-the-board improvement. |
| decapitation | mitigation | The engine is not one card and, after the grill repair, not even one KIND of card. Baird x2 makes the tokens; Valiant Veteran x1 makes them big enough to satisfy Baird with no combat; Tori x2 turns them into damage; and each of the three satisfies another's condition independently. Plaza of Heroes protects the legends directly: '{3}, {T}, Exile this land: Target legendary creature gains hexproof and indestructible until end of turn' covers all 4 of Baird x2 and Tori x2. Payoff copies total 6 across 4 names at 5.8 effective, p=0.87. |
| gas-out | mitigation | The deck refuels off its own turn cycle rather than off card draw. With Valiant Veteran or a Hero's Heirloom on the battlefield, Baird makes a Soldier at the beginning of EVERY end step with no attack required, so an empty hand still produces a body per turn. Guardian of New Benalia's 'Whenever this creature enlists a creature, scry 2' is the deck's card selection, and Argivian Cavalier x2, Resolute Reinforcements x2 and a kicked Keldon Strike Team x2 each turn one card into two or three bodies. |
| raced | mitigation | CORRECTED after the grill - the RGW version wrongly counted Destroy Evil as anti-race interaction, when 'toughness 4 or greater' is blank against 181 of 254 cube creatures (71.3%), and named a Nishoba Brawler that was usually a 2/3. The real anti-race package is: Charismatic Vanguard x2, a 3/2 body for {2}{W} that blocks the cheap creatures Destroy Evil cannot touch; Resolute Reinforcements x2, whose flash deploys two surprise blockers on the opponent's end step; and 3 of 23 nonland cards as genuinely unconditional removal (Lightning Strike x2, Hurloon Battle Hymn x1), the last of which also gains 4 life when kicked. The deck still concedes turn one unconditionally. |
| disruption-fizzle | mitigation | The kill turn does not route through a single trigger. Enlist reads 'As this creature attacks, you may tap a nonattacking creature you control', so the tap resolves during the declaration of attackers and removal in that window costs a body - but this deck's payoff does not depend on that boost at all: Valiant Veteran's anthem is static and satisfies Baird's check with no combat whatsoever, and Hero's Heirloom's +2/+1 persists on whatever it is attached to. Plaza of Heroes covers the harder case, protecting Baird or Tori themselves at instant speed for {3}. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|---|---|
| GREEN, as a whole colour | CUT AFTER THE GRILL. The RGW build ran Yavimaya Iconoclast x2, Nishoba Brawler x2 and Bite Down x1 on three real green sources: Plaza of Heroes cannot produce green here at all (its coloured modes are legendary-only and both legends are red-white), and Crystal Grotto charges {1} for coloured mana, so the usable count was Radiant Grove, Wooded Ridgeline and Karplusan Forest - two of which enter tapped. A {1}{G} two-drop was castable on curve 47.6% of the time. Decisively, green supplied ZERO enlist bodies to an enlist deck, and its two creatures were the build's own lowest-weighted enablers at 0.6 and 0.5. |
| Nishoba Brawler | 'Domain - power is equal to the number of basic land types among lands YOU CONTROL'. The RGW manabase contained three basic land types but Forest sat on only 2 of 17 lands, so simulation put average Domain at 2.42 on turn 4 and P(Domain >= 3) at 46% - it was a 2/3 in 69% of games, not the 3/3 first claimed. |
| Yavimaya Iconoclast | A 3-power donor whose kicked mode is a Baird switch, but it has no Enlist and it died with the green cut; its Baird switch was also a one-shot enters-the-battlefield trigger rather than a repeatable one. |
| King Darien XLVIII | 'Other creatures you control get +1/+1' would be a strictly better Valiant Veteran - a static anthem over EVERY creature rather than only Soldiers - but it costs {1}{G}{W} and green is cut. |
| Queen Allenal of Ruadach | 'those tokens plus a 1/1 white Soldier creature token are created instead' is the strongest token multiplier in the pool, but {G}{W}{W} is green and requires a colour this deck no longer plays. |
| Coalition Skyknight | 'Flying / Enlist' - the evasion enlist most wants, and the deck maindecks zero fliers or reach against a cube whose largest class is evasion at 51 cards. Held in the sideboard because {3}{W} is a four-drop and the four-slot belongs to Tori. |
| Hexbane Tortoise | A 3-power enlist body with ward {2}, the cheapest 3-power enlister in the pool - but green. |
| Coalition Warbrute | 'Enlist / Trample' - Tori already grants trample to red attackers, but only while Tori is attacking, which is a 2-of-23 condition; the real reason this is out is that {3}{R} competes with Tori for the four-slot on a two-colour curve that is already 14 cards at mana value 2. |
| Captain's Call | 'Create three 1/1 white Soldier creature tokens' - three enlist-fodder bodies and three Valiant Veteran targets for four mana, which is a real consideration; cut because it adds no power to any attack and the deck already makes Soldiers on bodies that also attack. |
| Citizen's Arrest | 'exile target creature or planeswalker an opponent controls' - the cleanest removal in the pool. Now genuinely castable (11 white sources, only 2 tapped lands in the deck), but held in the sideboard so the maindeck interaction stays proactive. |
| Heroic Charge | 'Creatures you control get +2/+1 ... those creatures also gain trample' - a go-wide finisher, but it answers nothing, so it is a sideboard card for boards that have gummed up rather than a maindeck slot. |
| Join Forces | 'Untap up to two target creatures. They each get +2/+2' - untapping does not recover a spent enlist, because the power was already added and the combat is over; it buys blockers, not extra enlists. |
| Wingmantle Chaplain | 'create a 1/1 white Bird creature token with flying FOR EACH creature with defender you control' - this list runs 0 creatures with defender out of 16 creature cards, so the trigger makes exactly zero tokens. |
| Serra Redeemer | 'Flying / Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature' - the strongest kind of Baird switch, since counters are PERMANENT: it triggers on 10 of the 16 creature copies and on every Soldier token from all 4 token-making names, turning a 1/1 into a 3/3 for good, and it is the only maindeck flier the deck could have against the cube's 51-card evasion class. TESTED, not assumed: swapping Charismatic Vanguard x2 to x1 for it keeps the mana audit at PASS and the midrange curve check at PASS with 17/17 lands. DECLINED anyway, because the only slot it fits is one of the two Charismatic Vanguards that the deck's raced mitigation is built on, and {3}{W}{W} is a five-drop on a curve that tops at four (48.3% unconditional castability on turn 5). This is the deck's most defensible one-card upgrade if you want the flier and will accept the softer anti-race package. |
| Anointed Peacekeeper | A 3/3 vigilance body for {2}{W} with a name-tax rider - a fine curve-neutral rare and a 3-power enlist donor, a class this deck is thin in. Excluded because its oracle composes with nothing in this pipeline: it is a good body, not a synergy. Note also that vigilance does NOT help enlist, which requires a NONattacking creature. |
| Temporary Lockdown | 'Exile each nonland permanent with mana value 2 or less' would close the conceded wide-boards class, but it is SYMMETRIC and would exile 11 of this deck's own 23 nonland cards plus every Soldier token (mana value 0). Unplayable here at any slot; the wide-boards concession stays conceded. |
| The two unspent rare slots | Left empty deliberately. Three of the five are spent (Guardian of New Benalia, Valiant Veteran, Plaza of Heroes) and every remaining red or white rare in the pool either breaks a curve that tops at four or composes with nothing in the pipeline. A rare slot is not a debt. |
| Argivian Phalanx | 'Affinity for creatures / Vigilance' on a 4/4 - cheap on a wide board, but vigilance does NOT help enlist, which requires a NONattacking creature, and a five-drop base cost is past this deck's curve. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.48   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.03 adj [MV 2.48 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  48.1%  prod  58.8%  gap -10.7pp  [OK]
  W  demand  51.9%  prod  58.8%  gap  -6.9pp  [OK]
```
## RESTRICTIONS COMPLIANCE
```
PASS   1a mainboard count == 40   got 40
PASS   1b sideboard count == 10   got 10
PASS   2 exact-name membership in working pool   missing: []
PASS   3 copy limits vs card_pool_rules
PASS   4 colour usability via effective_cost.best_mode   unusable: []
PASS   5 splash cap <= 3 per colour and in splash_candidates
PASS   6 rare/mythic total <= 5 (user cap)   got 3: ['Guardian of New Benalia', 'Plaza of Heroes', 'Valiant Veteran']
```
