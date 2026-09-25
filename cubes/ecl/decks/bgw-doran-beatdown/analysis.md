---
deck_name: "bgw-doran-beatdown"
cube_id: "ecl"
cube_slug: "ecl"
colors: "BGW"
format: "40-card"
built_at: "2026-08-11T18:05:10Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
2x Forest                   Land — basic
3x Plains                   Land — basic
2x Swamp                    Land — basic
2x Evolving Wilds           Land — basic fetch
2x Haunted Mire             Land — BG dual
1x Overgrown Tomb           Land — BG untapped-capable
2x Radiant Grove            Land — GW dual
2x Sunlit Marsh             Land — WB dual
1x Temple Garden            Land — GW untapped-capable
```

### CREATURES (11)

```
CMC  Card                         Qty   Color  Role                                                       Rar
2    Great Forest Druid           x2    G      Enabler — gap+4 body / any-color fixer                     C
3    Formidable Speaker           x1    G      Enabler — gap+2 body / creature tutor for Doran            R
3    Moonlit Lamenter             x2    W      Enabler — gap+3 body / counter-to-card draw                U
4    Doran, Besieged by Time      x1    BGW    Payoff — kill mechanism                                    R
4    Reaping Willow               x2    BW     Enabler — gap+3 lifelink body / recursion                  U
5    Blighted Blackthorn          x2    B      Enabler — gap+4 body / repeatable draw                     C
5    Slumbering Walker            x1    W      Enabler — gap+3 body / repeatable recursion                R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                         Qty   Color  Role                                                       Rar
1    Blossoming Defense           x2    G      Interaction — gap-neutral protection for the 1-of Doran    U
2    Bogslither's Embrace         x2    B      Interaction — unconditional exile                          C
2    Nameless Inversion           x1    B      Interaction — instant-speed -3 toughness                   U
3    Pyrrhic Strike               x1    W      Interaction — modal artifact/enchantment + mv>=3 creature  U
4    Darkness Descends            x1    B      Interaction — asymmetric sweeper                           U
```

### OTHER SPELLS (5)

```
CMC  Card                         Qty   Color  Role                                                       Rar
2    Bark of Doran                x2    W      Payoff — damage converter                                  U
3    Gilt-Leaf's Embrace          x2    G      Payoff — trample enabler; makes the converted damage connect C
4    Gathering Stone              x1    C      Engine — names Treefolk: discounts 9/23 nonlands, digs for Doran U
```

## SIDEBOARD (10)

```
Card                         Qty   Color  Role / When to board in                                        Rar
Keep Out                     x1    W      vs tapped attackers / enchantments                             C
Chomping Changeling          x2    G      vs artifacts (11) / enchantments (21), on a gap+1 body         U
Crib Swap                    x2    W      vs single large threats — unconditional exile                  U
Unforgiving Aim              x2    G      vs evasion (41 cube cards) / enchantments                      C
Darkness Descends            x1    B      vs wide boards — 2nd copy                                      U
Rooftop Percher              x2    C      vs graveyard (39 cube cards); also a 3/3 flying blocker        C
```

## ANALYSIS

### DECK IDENTITY

BGW toughness-matters midrange. Every creature in the deck has toughness far exceeding its power (0/4, 2/5, 3/6, 3/7, 4/7), so the early turns are spent blocking profitably while the board builds. Two cards then convert that defensive stat line into lethal offence: Doran, Besieged by Time discounts every such creature spell by {1} and pumps each attacker or blocker by its power/toughness gap, and Bark of Doran makes an equipped gap creature assign combat damage equal to its toughness rather than its power. Because Doran's bonus is +X/+X it preserves the gap, so the two stack multiplicatively, and Gilt-Leaf's Embrace supplies the trample that stops a 1/1 from absorbing the whole attack. Between deployment and the kill the deck grinds: the -1/-1 counters it pays as costs are fuel for Moonlit Lamenter's draw, Reaping Willow's and Slumbering Walker's recursion, and Blighted Blackthorn's attack-trigger card draw.


### THE CONVERSION MATH

Doran's pump is **+X/+X**, not a power-toughness swap. That single detail is what makes the deck
work, because +X/+X leaves the gap `toughness - power` unchanged — which means Bark of Doran's
condition (*"as long as equipped creature's toughness is greater than its power"*) never turns off
after Doran's trigger resolves. The two payoffs compound instead of overlapping:

| Creature | Base | + Bark (+0/+1) | Gap | Doran trigger | Attacks as | Assigns |
|---|---|---|---|---|---|---|
| Blighted Blackthorn | 3/7 | 3/8 | 5 | +5/+5 | 8/13 | **13** |
| Doran, Besieged by Time | 0/5 | 0/6 | 6 | +6/+6 | 6/12 | **12** |
| Great Forest Druid | 0/4 | 0/5 | 5 | +5/+5 | 5/10 | **10** |
| Slumbering Walker | 4/7 | 4/8 | 4 | +4/+4 | 8/12 | **12** |
| Moonlit Lamenter | 2/5 | 2/6 | 4 | +4/+4 | 6/10 | **10** |

A two-mana mana creature that hits for 10 is not a rationalisation — it is the deck.

### BLIGHT IS AN ASSET, NOT A COST

Six cards in this list put -1/-1 counters on a creature *you* control as a cost or effect
(Bogslither's Embrace x2, Pyrrhic Strike x1, Blighted Blackthorn x2, Darkness Descends x1). In most
decks that is a tax. Here it is upside twice over:

1. **-1/-1 counters reduce power and toughness equally, so the gap survives them.** All 11 creature
   copies keep their Doran and Bark eligibility no matter how many counters they carry.
2. **5 of the 11 creature copies convert counters into value** — Moonlit Lamenter x2
   (*"Remove a counter from this creature: Draw a card"*), Reaping Willow x2 (*"Remove two counters:
   Return target creature card with mana value 3 or less from your graveyard to the battlefield"*),
   and Slumbering Walker x1 (*"remove a counter... return target creature card with power 2 or
   less"*). Blighting your own Lamenter is drawing a card at a discount.

**Darkness Descends is the sharpest expression of this.** *"Put two -1/-1 counters on each
creature"* is symmetric on paper and one-sided in practice: **11 of 11** of this deck's creature
copies survive it with their gaps intact (the lowest survivor is Great Forest Druid at 0/4 -> -2/2),
while the cube's aggressive decks are built on 1/1s, 2/1s and 2/2s. It simultaneously loads Moonlit
Lamenter with extra draws and Reaping Willow with extra reanimations.

### THE TRAMPLE PROBLEM, AND WHY GILT-LEAF'S EMBRACE IS IN

The first build of this deck ran no trample, on the reasoning that Gilt-Leaf's Embrace's **+2/+0
cancels exactly against Doran's +X/+X** — a 0/4 becomes a 2/4, gap 2 instead of 4, so net power is
unchanged. That arithmetic is correct and it was the wrong conclusion. With **0 of 11** creatures
having trample, flying or menace, and **74 of 161** creatures in this cube having power 2 or less, a
13-damage attacker is absorbed by any chump blocker for zero. Eleven trampling damage beats thirteen
blocked damage every time. The +2/+0 still leaves toughness > power on **10 of the 11** creature
copies (only Formidable Speaker, 2/4 -> 4/4, zeroes out), so both payoffs stay live.

**Play pattern:** hold it for flash on the alpha-strike turn. The trample and indestructible are an
enters-trigger lasting until end of turn; only the +2/+0 is permanent, so deploying it early is a
permanent -2 to Doran's pump with no trample to show for it.

### KEY COUNTS

| Claim | Count against this list |
|---|---|
| Doran's {1} discount | 11 of 11 creature cards have toughness > power |
| Bark of Doran's damage swap | live on 11 of 11 creature cards |
| Gathering Stone naming Treefolk | 10 of 23 nonland cards discounted and dug for (Nameless Inversion counts — changeling) |
| Gilt-Leaf's Embrace keeps the gap | 10 of 11 creature copies |
| Slumbering Walker's "power 2 or less" | returns 6 of 11 creature copies (misses Reaping Willow and Blighted Blackthorn at power 3) |
| Reaping Willow's "mana value 3 or less" | returns 5 of 11; cannot return Doran at mv 4 |
| Blight-cost feed | 6 cards supply counters; 5 of 11 creatures convert them to value |
| Refuel density (gas-out) | 8 of 23 nonland cards produce cards or bodies after resolving |
| Thoughtweft Imbuer rejected | its trigger scales with Kithkin; this list runs 0 Kithkin of 23 nonlands |

### MANA — THE PRICE OF THE THIRD COLOUR

Doran costs {1}{W}{B}{G} and this cube has no untapped-capable duals outside two rares. **8 of the
17 lands enter tapped** (Sunlit Marsh x2, Haunted Mire x2, Radiant Grove x2 all read "This land
enters tapped"; Evolving Wilds x2 fetch tapped). Two of the five rare/mythic slots are spent on
Overgrown Tomb and Temple Garden purely to own the only untapped-capable duals in the identity.
That tapped-land density is the stated reason the thesis turn was revised from 6 to 7 — this deck
does not reliably cast a four-mana three-colour legend on turn 4.

The pip demand lands exactly even at **W 8 / B 8 / G 8** (33.3% each), with Reaping Willow's three
{W/B} hybrid pips payable from either side.

### WHAT BEATS THIS DECK

Fliers. The cube's largest threat class is evasion at **41 cards (15.8% density)**, and this
mainboard has zero fliers and zero reach — a flying deck simply goes over a wall of large ground
bodies. That is an accepted failure mode, not an oversight: mitigating it in the mainboard means
cutting the toughness density the entire thesis converts into damage. The answer lives in the
sideboard (Unforgiving Aim x2, Rooftop Percher x2 as a 3/3 flying blocker), and the mainboard's five
removal spells do still answer fliers once they have resolved.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:7  3:6  4:5  5:3
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4: Formidable Speaker@0.6, Gathering Stone@0.4) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 10 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 30%  T2 88%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Darkness Descends
  OK        single_large_threat: Bogslither's Embrace, Pyrrhic Strike, Nameless Inversion
  OK        noncreature_permanents: Pyrrhic Strike
  CONCEDED  stack: No card in B/G/W in this pool counters a spell; this deck answers resolved permanents with Bogslither's Embrace and Pyrrhic Strike instead of contesting the stack.
  CONCEDED  graveyard: No graveyard hate exists in B/G/W in this pool (dossier structural_census: 0); the colourless Rooftop Percher carries the answer from the sideboard rather than costing a mainboard slot.
```

- No WARN-tier flags were raised: curve PASS (MV 1:2 2:7 3:6 4:5 5:3 against the Midrange bands) and goldfish PASS (82.7% keepable vs the 80% threshold, 88.1% three-lands-by-turn-3, 30.3% turn-1 play rate). No response required.

- Assembly required two repairs to clear the 0.75 hard gate. Gathering Stone was added as a weighted (0.4) payoff-finder, and the thesis turn was revised from 6 to 7 on the stated ground that 8 of 17 lands enter tapped. Final: payoff effective 4.0 -> p=0.7712.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana becomes cards or bodies rather than sitting idle: Moonlit Lamenter x2 ('{1}{W}, Remove a counter from this creature: Draw a card'), Blighted Blackthorn x2 ('Whenever this creature enters or attacks, you may blight 2. If you do, you draw a card'), Gathering Stone x1 (upkeep top-card to hand), and Reaping Willow x2 / Slumbering Walker x1, which spend mana rebuying creatures from the graveyard. Bark of Doran's Equip {1} is a further mana sink, and Evolving Wilds x2 thin the deck. |
| screw | mitigation | Great Forest Druid x2 ('{T}: Add one mana of any color') is a genuine two-mana any-colour source that turns a two-land hand into a three-mana turn three and fixes all three colours at once. The goldfish simulation over 1000 hands reports 82.7% keepable and 88.1% three-lands-by-turn-3. Evolving Wilds x2 convert a colour-screwed draw into the missing basic. |
| decapitation | mitigation | Doran is a legendary 1-of, so the deck deliberately carries a second, independent conversion axis: Bark of Doran x2 is an Equipment, so removal aimed at the creature leaves the Bark on the battlefield to re-equip for {1} — creature removal cannot answer it at all. Blossoming Defense x2 ('+2/+2 and gains hexproof') protects Doran through a targeted removal spell at instant speed for {G}, and is gap-neutral so it costs the payoffs nothing. Formidable Speaker ('search your library for a creature card') and Gathering Stone (upkeep dig, naming Treefolk) re-find Doran; Slumbering Walker's 'power 2 or less' rebuys him from the graveyard (Doran's power is 0). |
| gas-out | mitigation | 8 of 23 nonland cards produce cards or bodies after they have resolved: Blighted Blackthorn x2 draws on every attack, Moonlit Lamenter x2 draws per counter removed, Gathering Stone x1 puts a Treefolk from the top of the library into hand each upkeep, and Reaping Willow x2 and Slumbering Walker x1 rebuy creatures from the graveyard. An empty hand still has a board that refuels itself. |
| raced | accepted | The cube's fastest clocks are its 41 evasion cards (15.8% density, the largest threat class in the dossier), and this mainboard has zero fliers and zero reach — a flying deck races past a board of ground blockers no matter how large their toughness. Mitigating in the mainboard would mean cutting gap creatures for Unforgiving Aim and Rooftop Percher, and that toughness density is precisely what the thesis converts into damage; the deck would trade its win condition for its defence. The cost is paid in the sideboard instead, where Unforgiving Aim x2 and Rooftop Percher x2 (a 3/3 flier) come in against evasion decks. |
| disruption-fizzle | mitigation | The critical turn is the Bark equip plus attack. Blossoming Defense x2 answers a removal spell on that turn for one mana at instant speed while adding +2/+2 gap-neutrally. If the creature dies anyway, Bark of Doran is an Equipment and survives, re-attaching for {1} the following turn. Doran's trigger also reads 'attacks OR BLOCKS', so interaction that stops the attack does not stop the deck converting on the crack-back. The pool contains no counterspells in B/G/W, so the interaction being played around here is removal, not the stack. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Sapling Nursery | {6}{G}{G} with 'Affinity for Forests'; this three-color base runs about 4 Forests, so it costs 6 real mana for a landfall engine that then needs further land drops — the goldfish turn is 6, and the card does nothing on the turn it lands. |
| Spry and Mighty | X is 'the difference between the chosen creatures' powers', not the power/toughness gap; this deck's creatures cluster at power 0-3, so X is typically 2-3, not the 5+ the card implies. |
| Foraging Wickermaw | CUT IN REPAIR. Gap+2 is the smallest payload in the list (Bark'd + Doran it assigns only 7), and its '{1}: Add one mana of any color' is a colour filter, not acceleration — it adds no net mana, so it does not fix a two-land hand. |
| Luminollusk | 2/4 deathtouch gap+2 blocker; cut for Gathering Stone when the assembly gate needed a fourth payoff-finder, and its 4-mana slot competes directly with Doran. |
| Sun-Dappled Celebrant | 5/6 for six mana is gap+1 — the smallest gap-to-cost ratio of any Treefolk in the pool; convoke helps but a 6-drop that converts to only 7 damage under Bark is worse than a 2-drop 0/4 that converts to 10. |
| Thoughtweft Imbuer | STRONG-FIT UNCOMMON, ONE TIER BELOW. Gap+5 is the largest of any common/uncommon body in BGW, but its only ability reads 'where X is the number of Kithkin you control' and this list runs 0 Kithkin of 23 nonland cards — it is a vanilla 0/5 while every other body pulls double duty in fixing, draw or recursion. |
| Crib Swap | STRONG-FIT UNCOMMON, SIDEBOARDED INSTEAD. Instant-speed unconditional exile is better than Bogslither's Embrace's sorcery speed, but at {2}{W} versus {1}{B} it costs a turn of tempo in a deck already paying 8 tapped lands; it is in the sideboard for opposing bombs. |
| Adept Watershaper | RARE CUT FOR THE 5-CARD LIMIT. 'Other tapped creatures you control have indestructible' covers attackers, which are tapped — a genuine fit — but the rare budget went to Doran, the tutor, the recursion body and the two untapped duals. |
| Spry and Mighty | RARE CUT FOR THE 5-CARD LIMIT. X is 'the difference between the chosen creatures' powers', not the p/t gap; this list's powers cluster at 0-4 so X is typically 3-4, and cutting Formidable Speaker to make room drops assembly p to 0.71, below the hard gate. |
| Shimmercreep | 3/5 menace gap+2 with a 3-life drain; menace is the only evasion available on a gap body in black, but at five mana it competes with Blighted Blackthorn, which has a bigger gap and draws cards. |
| Bristlebane Outrider | Gap+2 with real evasion ('can't be blocked by creatures with power 2 or less'), but its own second clause '+2/+0 as long as another creature entered this turn' shrinks the gap to 0 on exactly the turns the deck deploys. |
| Personify | SIDEBOARD CONSIDERATION. Instant-speed blink fizzles removal on Doran and re-charges the entry counters on 5 of 11 creatures, but it is card disadvantage on an empty board and Blossoming Defense protects for one mana instead of two. |
| Tend the Sprigs | SIDEBOARD CONSIDERATION. Fixes and makes a 3/4 reach token — the only gap-positive reach body at common — but at sorcery speed for {2}{G} it is a turn spent not developing, and the sideboard's flying answers are cheaper. |
| Dawn-Blessed Pennant | SIDEBOARD CONSIDERATION. Naming Treefolk it returns Doran from the graveyard for a one-mana investment, but it competes with Gathering Stone for the same Treefolk-naming slot and Gathering Stone also discounts 10 of 23 nonlands. |
| Springleaf Drum | 'Tap an untapped creature you control: Add one mana of any color' fixes well, but it taps the blockers this deck needs untapped during the turns before Doran lands. |
| Assert Perfection | 'It deals damage equal to its power' — this deck's creatures have power 0-3 before combat triggers, and Doran's pump only fires on attack or block, so this removal spell reads as 1-4 damage at sorcery speed. |
| Pitiless Fists | The fight clause uses power, which is this deck's low stat outside combat; a 0/4 Great Forest Druid fights for 0 damage. |
| Moon-Vigil Adherents | Base 0/0 that grows to equal power and toughness (+1/+1 per creature), so its gap is always exactly 0 — it receives neither Doran's discount nor Doran's pump. |
| Burdened Stoneback | 4/4 that enters with two -1/-1 counters, i.e. a 2/2 — gap 0 at every counter count, so it is invisible to both of Doran's abilities. |
| Bristlebane Battler | 6/6 entering with five -1/-1 counters is a 1/1; gap 0 throughout, and its counter-removal wants a go-wide board this midrange deck does not build. |
| Champion of the Clachan | 4/5 gap+1 rare, but 'behold a Kithkin and exile it' as an additional cost — this deck runs 0 other Kithkin, so it is uncastable. Rare budget better spent elsewhere. |
| Champions of the Perfect | 'behold an Elf and exile it' — this deck runs 0 Elves, so the additional cost cannot be paid. |
| Thoughtweft Lieutenant | Triggers on 'this creature or another Kithkin you control enters'; with Thoughtweft Imbuer as the only other Kithkin, that is 2 of 23 nonland cards — the trigger is near-dead. |
| Lys Alana Dignitary | 'behold an Elf or pay {2}' and its mana ability needs 'an Elf card in your graveyard'; this deck runs 0 Elves, so it is a 2/3 for {3} with a dead ability. |
| Lluwen, Imperfect Naturalist | 1/3 gap+2 rare, but its Worm-token ability costs {2}{B/G}{B/G}{B/G} plus discarding a land and scales with lands in the graveyard, a count this deck does not build toward. |
| Dawnhand Dissident | 1/2 gap+1 rare whose payoff is casting exiled creature cards 'by removing three counters from among creatures you control' — competes with Moonlit Lamenter and Reaping Willow for the same counters. |
| Goldmeadow Nomad | 1/2 gap+1 whose graveyard ability makes a 1/1 token; a 1/1 has gap 0 and does nothing for the payoff. |
| Boggart Prankster | 1/3 gap+2 body, but its trigger pumps 'target attacking Goblin you control' and this deck runs 0 Goblins. |
| Gallant Fowlknight | 3/4 gap+1 whose ETB gives '+1/+0 until end of turn', which shrinks every gap on the board by 1 the turn Doran wants it widest. |
| Blight Rot | 'Put four -1/-1 counters on target creature' kills most things, but at sorcery speed for {2}{B} it is strictly worse here than Bogslither's Embrace's unconditional exile at {1}{B}. |
| Bloom Tender | Mythic fixer, but the 5-card rare/mythic budget is fully committed to Doran plus interaction; Great Forest Druid taps for any color at common and carries a gap+4 body. |
| Mirrormind Crown | Rare Equipment whose token-copy trigger needs the deck to be creating tokens; this build makes tokens only off Tend the Sprigs. |
| Eclipsed Realms | Its any-color mana is restricted to 'a spell of the chosen type'; naming Treefolk covers 4 of 23 nonland cards, so it is effectively a colorless land in a THIN three-color base. |
| Winnowing | Sacrifice-all-that-don't-share-a-type is symmetric, and this deck's creatures span Treefolk, Kithkin, Elemental, Merfolk and Shapeshifter — it would eat most of its own board. |
| Stalactite Dagger | '+1/+1' preserves the gap but adds nothing to it, and the deck already runs the two Bark of Doran that convert toughness directly. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.33 adj [MV 3.0 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  33.3%  prod  41.2%  gap  -7.9pp  [OK]
  G  demand  33.3%  prod  47.1%  gap -13.8pp  [OK]
  W  demand  33.3%  prod  47.1%  gap -13.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base = cube_mainboard: every card is from the ecl mainboard or is a format-supplied basic land.
[PASS] commons/uncommons max 2 copies: no card exceeds 2 across mainboard + sideboard.
[PASS] rares/mythics max 1 copy: all five are singletons.
[PASS] USER CONSTRAINT max 5 rare/mythic cards across MB+SB: exactly 5 - Doran, Besieged by Time; Formidable Speaker; Slumbering Walker; Overgrown Tomb; Temple Garden. The sideboard is therefore entirely commons and uncommons.
[PASS] Basic lands are format-supplied and exempt from copy limits: Plains x3, Swamp x2, Forest x2.
[PASS] Colour usability: every nonland card returns a usable mode under effective_cost.best_mode for core_colors B/G/W; no splash declared.
```