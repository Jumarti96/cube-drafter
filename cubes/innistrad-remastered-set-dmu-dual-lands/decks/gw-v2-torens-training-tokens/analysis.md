---
deck_name: "gw-v2-torens-training-tokens"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-08-31T03:03:30Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x5   Forest
  x9   Plains
  x2   Radiant Grove                                Forest Plains, taps for GW, enters tapped
```

### CREATURES (18)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Hopeful Initiate                             x1    W     Threat                         R
  1  Thraben Inspector                            x2    W     Threat                         C
  2  Ambitious Farmhand // Seasoned Cathar        x2    W     Threat                         U
  2  Cathar Commando                              x2    W     Threat                         C
  2  Duskwatch Recruiter // Krallenhorde Howler   x1    G     Engine                         U
  2  Hamlet Captain                               x2    G     Threat                         U
  2  Metallic Mimic                               x1    C     Engine                         R
  2  Twinblade Geist // Twinblade Invocation      x1    W     Threat                         U
  3  Crusader of Odric                            x2    W     Threat                         C
  3  Dauntless Cathar                             x2    W     Threat                         C
  3  Torens, Fist of the Angels                   x1    WG    Engine                         R
  4  Intrepid Provisioner                         x1    G     Threat                         C
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Duel for Dominance                           x1    G     Interaction                    C
  2  Travel Preparations                          x2    G     Payoff                         U
  3  Clear Shot                                   x1    G     Interaction                    U
```

### OTHER SPELLS (2)

```
CMC  Card                                         Qty   Color Role                           Rar
  3  Wedding Announcement // Wedding Festivity    x1    W     Engine                         R
  5  Cathars' Crusade                             x1    W     Payoff                         R
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Valorous Stance                              x2    W     Flex:                                          U
Angelic Purge                                x2    W     Flex:                                          C
Fiend Hunter                                 x2    W     Flex:                                          U
Slayer of the Wicked                         x2    W     Hate:                                          U
Soul-Guide Gryff                             x2    W     Hate:                                          C
```

## ANALYSIS

### DECK IDENTITY

GW creature-density aggro that converts board width into permanent size. Eighteen creature cards on a sixteen-land curve keep a body on the table every turn from one onward; Travel Preparations (two copies, four castings through flashback) and the two training creatures put permanent +1/+1 counters on the attackers, and Metallic Mimic naming Human makes sixteen of those eighteen creature copies - plus every token the deck makes - ENTER a size larger. Torens, Fist of the Angels and Cathars' Crusade are the amplifiers rather than the plan: Torens turns each of the eighteen creature spells into a second training body, and Crusade converts every creature entering into counters across the whole board, but the deck is built so that a turn-six kill does not wait on either. The counters are deliberately distributed unevenly, because both of the archetype's named mechanics read power gaps - training wants 'another creature with greater power' and coven wants 'three or more creatures with different powers'.

### DECK IDENTITY

GW creature-density aggro that converts board width into permanent size. Eighteen creature cards on a sixteen-land curve keep a body on the table every turn from one onward; Travel Preparations (two copies, four castings through flashback) and the two training creatures put permanent +1/+1 counters on the attackers, and Metallic Mimic naming Human makes sixteen of those eighteen creature copies - plus every token the deck makes - ENTER a size larger. Torens, Fist of the Angels and Cathars' Crusade are the amplifiers rather than the plan: Torens turns each of the eighteen creature spells into a second training body, and Crusade converts every creature entering into counters across the whole board, but the deck is built so that a turn-six kill does not wait on either. The counters are deliberately distributed unevenly, because both of the archetype's named mechanics read power gaps - training wants 'another creature with greater power' and coven wants 'three or more creatures with different powers'.

### HOW THE THREE MECHANICS ACTUALLY INTERLOCK

The archetype's two named mechanics are both **power-gap** readers, and this is the single fact that shaped every build decision:

- Training: *"Whenever this creature attacks with another creature with **greater power**, put a +1/+1 counter on this creature."*
- Coven: *"If you control three or more creatures with **different powers**."*

Both are switched **off** by flat, symmetric pumping and switched **on** by uneven pumping. That is why `Travel Preparations` ("Put a +1/+1 counter on each of up to **two** target creatures") is a keystone here and `Intangible Virtue` is not in the deck at all: Virtue reads "Creature **tokens** you control get +1/+1", which lifts the 1/1 tokens to 2/2 against a 2/2 Torens and stops Torens training entirely. `Wedding Announcement`'s flip side, "Creatures you control get +1/+1", is symmetric across the whole board and therefore preserves every gap — it is the correct anthem for this shell and Virtue is the trap.

The current power spread is deliberate: **6 copies at printed power 1, 5 at power 2, 5 at power 3**, plus `Crusader of Odric` x2 at a variable `*/*`. Three distinct powers is the default board state, not something the deck has to work for, so coven on `Duel for Dominance` and on `Ambitious Farmhand`'s transform is live from about turn three onward.

### THE COUNTS THAT DECIDE THE DECK

| Card | The count | Effect |
|---|---|---|
| Metallic Mimic (naming Human) | 16 of 18 creature copies are Humans, plus every token | Every Human deployed *after* Mimic enters one size larger, permanently |
| Torens, Fist of the Angels | 18 of 24 nonland cards are creature spells | 18 live triggers; each token is itself a Human with training |
| Hopeful Initiate | 10 of 18 creature copies have printed power 2+ | Training fires on a clear majority of attacks; 12 of 18 counting Crusader of Odric |
| Duskwatch Recruiter | 18 of 24 nonland cards are creature cards | A three-card dig whiffs about 1.6% of the time |
| Crusader of Odric | 4-6 creatures on a representative turn-5 board | A 4/4 to 6/6 for three mana, larger with Torens out |
| Cathars' Crusade | Every creature card + every token entering | The largest counter engine in the deck, and the reason it is worth a 5-drop slot |

### WHAT THIS DECK GIVES UP

Two concessions are worth naming before you play it.

**Mainboard creature removal is two cards** — `Duel for Dominance` and `Clear Shot`. `Cathar Commando` and `Hopeful Initiate` answer only artifacts and enchantments. The real answer to a large creature is to race it or to board in `Fiend Hunter` and `Valorous Stance`. Note that `Clear Shot` was chosen over a second `Duel for Dominance` at the grill: Duel is a *fight*, so your own attacker takes the damage back, and this deck's printed power ceiling is 3.

**There are zero fliers and zero reach in the mainboard**, against a cube whose evasion class is 58 of 277 nonland cards (20.9%). `Soul-Guide Gryff` x2 in the sideboard is a 3/4 flier and is the answer to both that class and the graveyard class — it is also the only graveyard hate in the entire GW pool, so the slot is forced and happens to be dual-purpose.

### THE ONE IRREPLACEABLE CARD

`Torens` is a singleton under the one-copy rare limit and nothing else in the pool makes a body per creature spell, so he cannot be made redundant. The deck was rebuilt specifically so that this does not matter: the turn-six clock is 18 creature cards plus four `Travel Preparations` castings plus `Metallic Mimic`, none of which depend on him. He is the best draw in the deck, not the deck.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:3  2:12  3:7  4:1  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  cheap_body: 15 copies → p=1.00 (need ≥ 0.75)
  PASS  growth_engine: 7 copies (effective 6.4: Metallic Mimic@0.8, Duel for Dominance@0.6) → p=0.90 (need ≥ 0.75)
  PASS  wide_payoff: 6 copies → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 86%
  play by turn: T1 47%  T2 95%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Duel for Dominance, Cathars' Crusade, Crusader of Odric
  OK        single_large_threat: Clear Shot, Duel for Dominance, Travel Preparations, Cathars' Crusade
  OK        noncreature_permanents: Cathar Commando, Hopeful Initiate
  CONCEDED  stack: GW has no counterspell in this cube; the deck answers a countered spell by having 18 creature cards, so no single spell is load-bearing enough to be worth holding up mana for.
  CONCEDED  graveyard: No mainboard graveyard interaction — Soul-Guide Gryff x2 is the sideboard answer, and boarding it in is the plan against the cube's 74 graveyard-cluster cards.
```

- Assembly initially FAILED on a declared token_engine role at p=0.39. Repaired by revising the thesis rather than adding cards. CORRECTION after Phase 9: the justification originally given - that the pool holds no functional equivalent - is FALSE as stated. Cathar's Call ({2}{W}, uncommon, no rare cost) reads 'Enchanted creature has vigilance and "At the beginning of your end step, create a 1/1 white Human creature token"', which is an unconditional repeating token engine in exactly that role, and Mayor of Avabruck's back face makes a 2/2 Wolf every end step. The true narrow claim is only that nothing else makes a token PER CREATURE SPELL. Cathar's Call is not in the deck because it is a three-mana aura that does nothing on resolution and is a two-for-one into any removal spell - a reason of cost, not of non-existence. The gate outcome is unchanged and the revised thesis stands on its own evidence: 18 creature cards, four Travel Preparations castings, Metallic Mimic and Hamlet Captain x2 deliver the turn-six clock with Torens absent. Re-run after repair: growth_engine p=0.90, wide_payoff p=0.88, cheap_body p=1.00.
- Engine & Infrastructure is 33% against an aggro band of 0-10%. The reclassification defence was tested at Phase 9 and it fails - no split of these 24 cards satisfies both bands. See slot_allocation.engine_infrastructure for the accepted grounds.
- Curve WARN-tier: none raised. MV distribution 1:3 2:12 3:7 4:1 5:1 passed the aggro curve check unmodified.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Duskwatch Recruiter's '{2}{G}: Look at the top three cards of your library. You may reveal a creature card from among them and put it into your hand' is the deck's only repeatable mana sink and hits at ~98% (18 of 24 nonland cards are creature cards). Thraben Inspector x2 bank a Clue each ('{2}, Sacrifice this token: Draw a card'). Travel Preparations' Flashback {1}{W} gives every copy a second, later use, so a flooded turn five still adds two permanent counters. Cathars' Crusade is a genuine five-mana sink. CORRECTION after Phase 9: an earlier version of this entry called Hopeful Initiate a '5+-mana sink' - its ability is {2}{W}, three mana, and it needs a legal artifact or enchantment target, so it is not a flood outlet. P(2-4 lands in an opening 7) = 0.790. |
| `screw` | mitigation | Ambitious Farmhand x2 'search your library for a basic Plains card' fixes the white-heavy requirement from a two-mana body. Three one-drops and thirteen two-drops mean a two-land hand is genuinely keepable - the goldfish check reports 84% keepable hands and a first play by turn 2 in 96% of them. |
| `decapitation` | accepted | Torens is answered on sight and cannot be replaced - it is a singleton under the 1-copy rare limit and nothing else in the pool makes a body per creature spell. Mitigating this would mean building around a redundant engine, which in this pool means abandoning the archetype the user asked for. The cost is accepted deliberately, and the thesis was revised so that losing Torens costs amplification rather than the win condition: the turn-six clock is 18 creature cards plus four Travel Preparations castings plus Metallic Mimic, none of which depend on him. See structural_responses for the correction to the supporting claim. |
| `gas-out` | mitigation | Cards giving a second use: Thraben Inspector x2 (a Clue each), Travel Preparations x2 (flashback), Dauntless Cathar x2 (a flying Spirit token from the graveyard - a body, not a card), Twinblade Geist (Disturb), Wedding Announcement = 9 of 24 nonland cards. CORRECTION after Phase 9: the earlier count of 10 was wrong, and the claim that Wedding Announcement 'draws a card at end of every turn' is contradicted by its own text - 'Then if this enchantment has three or more invitation counters on it, transform it', and the back face Wedding Festivity is 'Creatures you control get +1/+1' with no draw clause. It draws at most three cards, then becomes a permanent anthem. Duskwatch Recruiter is the real refuel: a repeatable {2}{G} dig for a creature card. |
| `raced` | mitigation | Against the cube's fastest clocks (Vampire and Werewolf aggro out of the 23- and 13-card tribal rosters), this deck blocks profitably: Duel for Dominance x2 is an instant-speed fight that also grows the survivor, Cathar Commando has flash, and Hamlet Captain x2 pump on BLOCK as well as attack ('Whenever this creature attacks or blocks'). Slayer of the Wicked x2 in the board destroys a Vampire, Werewolf or Zombie on an ETB. |
| `disruption-fizzle` | mitigation | No single turn is critical - the deck places counters incrementally across every combat step rather than in one payoff turn, so interaction on any one turn costs a few points of damage rather than the plan. The one exception is a sweeper resolving into a wide board; Twinblade Geist x2 (Disturb {2}{W}) and Dauntless Cathar x2 ('{1}{W}, Exile this card from your graveyard: Create a 1/1 white Spirit creature token with flying') rebuild from the graveyard afterwards, and Valorous Stance x2 in the sideboard grants indestructible in response. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Moonlight Hunt | Tribal removal, not graveyard value — the earlier batch filing was wrong. 'Each creature you control that's a Wolf or a Werewolf deals damage equal to its power to that creature': this mainboard controls 0 Wolves and 0 Werewolves, so it deals 0 damage. |
| Tireless Tracker | Rare-slot budget (5 total). Its counters come from '{2}, Sacrifice this token: Draw a card' — a 2-mana-per-counter rate that competes with casting creatures for Torens triggers on an aggro curve. |
| Archangel Avacyn // Avacyn, the Purifier | Mythic-slot budget. 'creatures you control gain indestructible until end of turn' is the best sweeper answer in the pool, but at {3}{W}{W} it lands the turn this deck wants to be winning. |
| Sigarda, Host of Herons | Mythic-slot budget. 'Flying, hexproof' 5/5 is a Path-C Voltron carrier; it contributes no tokens and no counters to a go-wide plan. |
| Thalia, Heretic Cathar | Rare-slot budget. 'Creatures and nonbasic lands your opponents control enter tapped' taxes the opponent but places no counter and makes no token. |
| Restoration Angel | Rare-slot budget. Its blink clause rereads ETB triggers, but this list's value is in token *count*, not in re-triggering enters abilities. |
| Odric, Lunarch Marshal | Rare-slot budget (5/5 spent). Correction after Phase 9: keyword donors DO exist here — double strike on Twinblade Geist, trample on Intrepid Provisioner, flash on Cathar Commando, lifelink on the flipped Seasoned Cathar — so the earlier 'no donors' half of this reason was false. It is cut purely because it is the sixth rare in a deck allowed five. |
| Wrenn and Seven | Mythic-slot budget and off-thesis: its abilities read land counts, not creature counts. |
| Garruk Relentless // Garruk, the Veil-Cursed | Mythic-slot budget. Makes one 2/2 per turn — slower than Torens, which makes one per creature spell. |
| Festerhide Boar | Corrected after Phase 9 — the original reason was wrong twice: morbid reads 'if a creature died this turn' (ANY creature, including combat deaths and the opponent's), and the deck does hold a sacrifice ability in Cathar Commando ('{1}, Sacrifice this creature'). The real cut reason is tribe: it is a Creature - Boar, so it is missed by Metallic Mimic (named Human), Hamlet Captain ('other Humans') and Intrepid Provisioner ('another target Human') simultaneously, and it competes for the single 4-slot against Intrepid Provisioner, which is a Human with trample. |
| Lumberknot | {2}{G}{G} for a 1/1 that starts with zero counters and only grows on creature deaths. On the turn it lands it is the worst body in the deck by four mana; this list has 15 creature copies with printed power 1 or higher at half the cost. |
| Ulvenwald Mysteries | Corrected after Phase 9 — the original reason ('the swarm is tokens') was written against the pre-critique token list and is inverted for the finished one: 18 of 24 nonland cards are nontoken creature cards, so the trigger is live. Cut on rate, not on trigger count: each body costs a creature death PLUS {2} to crack the Clue, about one 1/1 per five mana, and it adds a third card to a 3-slot already six deep in a deck whose curve tops at five. |
| Shrill Howler // Howling Chorus | 3/1 whose evasion clause reads power comparisons and whose transform costs {5}{G} — unreachable on this curve, and it neither makes tokens nor places counters. |
| Decimator of the Provinces | Emerge {6}{G}{G}{G}: sacrificing a 1/1 token reduces it only to eight mana. The +2/+2 trample finish is real but the deck is dead or winning by then. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.38   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.83 adj [MV 2.38 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  36.0%  prod  43.8%  gap  -7.8pp  [OK]
  W  demand  64.0%  prod  68.8%  gap  -4.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] base: cube_mainboard only - every name verified by exact string match against working_pool.json (Phase 5C check 2, PASS)
[PASS] commons_uncommons_max_2: PASS - highest count is 2
[PASS] rares_mythics_max_1_each: PASS - Hopeful Initiate 1, Metallic Mimic 1, Torens 1, Wedding Announcement 1, Cathars' Crusade 1
[PASS] rares_mythics_max_5_total_MB_plus_SB: PASS at exactly 5/5 - all five in the mainboard (Hopeful Initiate, Metallic Mimic, Torens, Wedding Announcement, Cathars' Crusade), zero in the sideboard. No headroom: both Phase 9 swaps were uncommon-for-uncommon (Duskwatch Recruiter for Twinblade Geist, Clear Shot for Duel for Dominance). Independently verified by both Phase 9 agents.
[INFO] basics: Plains x9, Forest x5 - format-supplied, exempt from copy limits. Radiant Grove x2 is a COMMON nonbasic and legal at 2.
[INFO] colour: core_colors ['G','W'], splash_colors [] - every nonland card returns a non-null effective_cost.best_mode(card, ['G','W'], []) in normal cast mode. Three cards have off-identity backs or flashback costs that are never paid (Twinblade Geist, Ambitious Farmhand, Wedding Announcement are all mono-white on the front); no off-identity inclusions.
```