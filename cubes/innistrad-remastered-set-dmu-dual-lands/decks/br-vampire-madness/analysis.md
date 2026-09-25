---
deck_name: "br-vampire-madness"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-08-26T01:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x9   Mountain                             
  x5   Swamp                                
  x2   Geothermal Bog                       BR dual, enters tapped
  x1   Haunted Ridge                        BR dual, untapped with 2+ other lands
```

### CREATURES (16)

```
CMC  Card                                       Qty   Color  Role                            Rar
  1  Falkenrath Gorger                          x1    R      engine-threat                   R
  1  Voldaren Epicure                           x2    R      threat                          C
  2  Asylum Visitor                             x2    B      threat                          U
  2  Bloodtithe Harvester                       x2    BR     threat                          U
  2  Furyblade Vampire                          x2    R      threat                          U
  2  Olivia's Dragoon                           x2    B      engine                          C
  3  Bloodmad Vampire                           x2    R      threat                          C
  3  Stromkirk Occultist                        x2    R      threat                          U
  4  Bloodhall Priest                           x1    BR     threat                          R
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                                       Qty   Color  Role                            Rar
  1  Lightning Axe                              x1    R      interaction                     U
  1  Tragic Slip                                x2    B      interaction                     C
  3  Fiery Temper                               x2    R      interaction                     U
```

### OTHER SPELLS (2)

```
CMC  Card                                       Qty   Color  Role                            Rar
  3  Stensia Masquerade                         x2    R      payoff                          U
```

## SIDEBOARD (10)

```
Card                                       Qty   Color  Role / When to board in                    Rar
Abrade                                     x2    R      hate — artifacts                           U
Collective Brutality                       x1    B      flex — stack / combo / lifegain            R
Infernal Grasp                             x2    B      hate — single_large_threat                 U
Murderous Compulsion                       x2    B      flex — creature decks                      C
Gluttonous Guest                           x1    B      flex — faster aggro                        C
Savage Alliance                            x2    R      hate — wide_boards                         U
```

## ANALYSIS

### DECK IDENTITY

A BR Vampire aggro deck that deploys more power per mana than its curve should allow. Fifteen of its sixteen creature cards are Vampires, so Stensia Masquerade's 'Attacking creatures you control have first strike' and its per-Vampire +1/+1 counter trigger cover essentially the whole board. Madness does two distinct jobs here and they should not be conflated: seven of twenty-three nonland cards are cast at a genuine DISCOUNT via madness (Bloodmad Vampire x2 and Stromkirk Occultist x2 at {1}{R} instead of {2}{R}, Fiery Temper x2 at {R} instead of {1}{R}{R}, Bloodhall Priest at {1}{B}{R} instead of {2}{B}{R}); Falkenrath Gorger adds no discount at all — its text reads 'The madness cost is equal to its mana cost' — but it converts every discarded Vampire from a lost card into a cast spell, which is card RETENTION. Olivia's Dragoon supplies the only free, unlimited, repeatable discard outlet in the pool, so the discard cost the mechanic demands is paid for zero mana.

### THE TWO JOBS OF MADNESS — AND WHY THEY ARE NOT THE SAME NUMBER

The most common way to misread this deck is to treat "madness density" as one statistic. It is two, and they differ by a factor of three.

| Measure | Count | What it means |
|---|---|---|
| Natively madness-castable | 9 of 23 nonland (39.1%) | Cards with a printed Madness line |
| Madness-castable with Falkenrath Gorger out | 20 of 23 (87.0%) | Gorger grants madness to all 16 Vampire creature cards |
| Actually **discounted** by madness | 7 of 23 (30.4%) | Cards whose madness cost is *lower* than their mana cost |

Falkenrath Gorger reads "The madness cost is **equal to** its mana cost." It therefore buys **zero tempo**. What it buys is *card retention*: with Gorger on the battlefield, discarding a Vampire to Olivia's Dragoon stops being a cost and becomes a deployment. The tempo comes from a different, smaller set — Bloodmad Vampire and Stromkirk Occultist at `{1}{R}` instead of `{2}{R}`, Fiery Temper at `{R}` instead of `{1}{R}{R}`, and Bloodhall Priest at `{1}{B}{R}` instead of `{2}{B}{R}`. Note that Asylum Visitor and Stensia Masquerade are madness-castable but **not** discounted; their madness costs equal their mana costs too.

The practical consequence: Gorger is not a "make my deck cheaper" card, it is a "make my discard outlet free" card, and it is only worth its rare slot because Olivia's Dragoon exists.

### THE FREE OUTLET IS THE WHOLE DECK

Every madness card is a dead rate without a discard outlet, and outlets are not fungible. Checked against every discard effect in black or red in this pool:

- **Olivia's Dragoon** — "Discard a card: This creature gains flying until end of turn." No mana. No once-per-turn cap. No limit. It is the *only* card in the pool of this shape.
- **Furyblade Vampire** — free, but capped at once per combat ("At the beginning of combat on your turn").
- **Lightning Axe** — one shot, tied to casting a removal spell.
- **Blood tokens** — "{1}, {T}, Discard a card, Sacrifice this token" — mana-taxed and single-use.

That asymmetry is why the two Engine slots are both Olivia's Dragoon and why the structural gate weights the Blood outlets at 0.4 and Furyblade at 0.7 rather than counting them as full copies.

### THE TRIBE IS 100% — WHICH IS RARER THAN IT SOUNDS

All **16 of 16** creature cards in this list are Vampires. That is not decoration: it means Stensia Masquerade's counter trigger, Falkenrath Gorger's madness grant, and (had they been included) Captivating Vampire's anthem and Voldaren Ambusher's X all read the *entire* creature base with no dead cards. The pre-grill list ran Vexing Devil, a `{R}` 4/3 — the single largest body-per-mana in the pool — and cutting it for tribal purity was the correct call precisely because it was the one card all of those clauses skipped.

### WHAT THIS DECK CANNOT DO

Stated plainly, because three of the five coverage classes are conceded:

- **No graveyard hate at all.** Verified against oracle text, not just the census: every graveyard-touching card in black or red in this pool is self-serving (flashback, recursion). The cube is 27% graveyard cards. This deck's answer is the clock, and that is the whole answer.
- **No enchantment removal**, mainboard or sideboard. The cube holds only 2 enchantment answers in 277 cards, both white. Symmetrically, this is *why* Stensia Masquerade is safe: the opponent almost certainly cannot remove it either.
- **No counterspells.** Black and red have none in this pool. The blue decks hold Syncopate, Geistlight Snare and Mausoleum Wanderer, which is what the instant-speed madness deployment off Olivia's Dragoon plays around.

### RARE BUDGET: 4 OF 5 SPENT, DELIBERATELY

Falkenrath Gorger, Bloodhall Priest and Haunted Ridge in the mainboard; Collective Brutality in the sideboard. The fifth slot is left unspent rather than forced. The remaining rare Vampires all fail a specific test against *this* list: Captivating Vampire is `{1}{B}{B}` against 67.9% red pip demand on 8 black sources; Bloodline Keeper and Olivia Voldaren are four-drops whose first meaningful action lands on turn 5 or 6, at or past the goldfish turn.

If you want to iterate, that unspent slot is the natural place to start — see CARDS CONSIDERED BUT EXCLUDED below.


### COUNT-DEPENDENT VERDICTS

Every card whose value is a function of how many others qualify, decided against **this** list.

| Card | Verdict | Count |
|---|---|---|
| Stensia Masquerade | INCLUDE x2 | All 16 creature cards in the final mainboard are Vampires (16/16 = 100%), so 'Whenever a Vampire you control deals combat damage to a player, put a +1/+1 counter on it' fires off the entire creature base. Its own madness cost {2}{R} equals its mana cost, so it is madness-castable but not discounted. |
| Falkenrath Gorger | INCLUDE x1 | Grants madness to all 16 Vampire creature cards. This is card RETENTION, not tempo: the oracle reads 'The madness cost is equal to its mana cost', so those 16 get no discount — a discarded Vampire becomes a cast spell instead of a lost card. Madness-CASTABLE density goes from 9 of 23 nonland cards (39.1%) natively to 20 of 23 (87.0%) while Gorger is on the battlefield — the 20 being 16 Vampire creature cards plus Stensia Masquerade x2 and Fiery Temper x2; the three Gorger cannot reach are Lightning Axe and Tragic Slip x2. Madness-DISCOUNTED density is a separate and smaller number: 7 of 23 (30.4%), and Gorger does not change it. |
| Voldaren Bloodcaster // Bloodbat Summoner | CUT (post-grill) | Initially included for its front face (a {1}{B} 2/1 flier). Cut during grill resolution: the Proposer named it the single hardest card in the deck to defend, since its five-Blood flip is not reachable (this list makes 2-3 Blood per game) and its death-trigger clause wants creatures to die, which an all-in attacker does not want. Cutting it restored Bloodmad Vampire to x2 and lifted the assembly gate's weighted payoff count from 4.0 (p=0.72, FAIL) back to 4.5 (p=0.76, PASS). |
| Voldaren Ambusher | CUT | X = Vampires you control; a realistic turn-4 board is 3, so 3 damage. Cut because the trigger reads 'if an opponent lost life this turn', which is off in exactly the games where removal is needed (a board stall where nothing has connected). The 5 interaction slots go to unconditional effects instead. |
| Neonate's Rush | CUT | The count is favourable — all 16 creature cards are Vampires, so the {1} discount is live whenever any creature is on the battlefield. Cut on effect size, not count: 1 damage to a creature kills almost nothing in this cube, where 42 of the creatures have toughness 4 or more. |
| Captivating Vampire | CUT | Anthem would cover all 16 Vampire creature cards — the best count of any lord in the pool. Cut on mana, not count: {1}{B}{B} against 67.9% red pip demand on 8 black sources, only 5 of which are untapped-on-arrival, makes a turn-3 cast unreliable. |
| Bloodline Keeper // Lord of Lineage | CUT | Flip gate 'five or more Vampires' is reachable with 16 Vampire cards. Cut on tempo, per the judge's weak-keystone finding: cast turn 4, first token turn 5, that token attacks turn 6 — one turn past the goldfish turn of 5. |
| Sorin, Imperious Bloodlord | CUT | -3 hits a Vampire from hand at 16 of 23 nonland cards (69.6%). Cut because a 3-mana permanent that adds no body the turn it resolves is off-lens for lowest-curve/most-explosive, and it is a mythic against a budget better spent on Bloodhall Priest and Haunted Ridge. |
| Olivia Voldaren | CUT | Cut on cost, not count: 4 mana for the body, and the {3}{B}{B} steal mode is not castable on 8 black sources; it also arrives past the goldfish turn of 5. |
| Indulgent Aristocrat | CUT | '+1/+1 counter on each Vampire' would cover all 16 Vampire cards. Cut because each activation costs {2} plus a sacrificed creature, and this list keeps no spare bodies — all 16 creatures attack. |
| Restless Bloodseeker // Bloodsoaked Reveler | CUT | 'if you gained life this turn' — the final mainboard contains ZERO lifegain sources: no lifelink, no drain, no life-gain trigger. Numerator 0 of 23. Its Blood engine never turns on. |
| Blood Artist | CUT | CORRECTED after the grill: the earlier claim that the list contains no sacrifice outlet was false — Bloodtithe Harvester x2 reads '{T}, Sacrifice this creature: Target creature gets -X/-X'. The surviving count is that only 2 of 23 nonland cards can put a creature in the graveyard on demand, and as the beatdown this deck does not otherwise choose when its creatures die. |
| Metallic Mimic | CUT | CORRECTED after the grill: the earlier verdict claimed Mimic 'is not a Vampire' and misses Stensia Masquerade. That misread the oracle — 'As this creature enters, choose a creature type. This creature IS the chosen type in addition to its other types' — so naming Vampire, it WOULD trigger the counter. The Gorger half of the objection stands: the type is chosen on entry, so the card in hand is not a Vampire card and gains no madness. Cut on the rare/mythic budget. |
| Bedlam Reveler | CUT | Cost reducer: '{1} less for each instant and sorcery card in your graveyard'. This list holds 5 instants/sorceries (Tragic Slip x2, Lightning Axe x1, Fiery Temper x2) of 23 nonland cards. With all five in the graveyard it still costs {1}{R}{R} at the earliest, on a deck that wants to have won by then. |
| Heartless Summoning | CUT | CORRECTED after the grill. Cost reducer with a strong numerator — 16 of 23 nonland cards are creature spells. Cut on the side effect: 'Creatures you control get -1/-1' outright KILLS Voldaren Epicure x2 (1/1), Bloodmad Vampire x2 (4/1) and Asylum Visitor x2 (3/1) — 6 of the 16 creature slots, not the 5 previously stated, because a 1/1 becomes a 0/0 and dies rather than shrinking. |
| Festival Crasher | CUT | '+2/+0 whenever you cast an instant or sorcery' against 5 instants/sorceries in 23 nonland cards (21.7%). It is a 1/3 on most turns, and it is not a Vampire, so it misses Stensia Masquerade's counter trigger and Falkenrath Gorger's madness grant. |
| Thermo-Alchemist | CUT | Same 5-of-23 (21.7%) instant/sorcery denominator, and it is a Defender — it can never deal combat damage, which is the only event Stensia Masquerade's counter trigger reads. |
| Vexing Devil | CUT (post-grill) | It was 1 of 18 creature cards that is not a Vampire — the only body excluded from Stensia Masquerade's Vampire-only counter clause and from Falkenrath Gorger's Vampire-only madness grant. Cut during grill resolution; the freed rare slot went to Haunted Ridge. |
| Tragic Slip | INCLUDE x2 (added post-grill) | 'Morbid — That creature gets -13/-13 until end of turn instead if a creature died this turn.' Answers all 12 toughness-6+ and all 42 toughness-4+ creatures in this cube — a class the pre-grill mainboard answered 0 times in 40 cards. Morbid is switched on by the deck's own payoff: Stensia Masquerade gives attackers first strike, so a blocked attacker kills the blocker before damage-back, and Tragic Slip is an instant castable after first-strike damage in that same combat. 16 attacking creatures means a creature dies in most combats. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:6  2:8  3:8  4:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 4.5: Bloodmad Vampire@0.5, Bloodmad Vampire@0.5, Stromkirk Occultist@0.5, Stromkirk Occultist@0.5, Bloodhall Priest@0.5) → p=0.76 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 6: Furyblade Vampire@0.7, Furyblade Vampire@0.7, Voldaren Epicure@0.4, Voldaren Epicure@0.4, Bloodtithe Harvester@0.4, Bloodtithe Harvester@0.4) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 73%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper exists in this shape; Stensia Masquerade's 'Attacking creatures you control have first strike' wins the crack-back against equal-sized token boards, and Savage Alliance x2 ('deals 1 damage to each creature target opponent controls') is the sideboard answer.
  OK        single_large_threat: Tragic Slip, Lightning Axe, Bloodtithe Harvester, Fiery Temper
  CONCEDED  noncreature_permanents: BR has no mainboard artifact or enchantment removal in this list; Abrade x2 ('Destroy target artifact') is boarded in, and enchantments are unanswerable in these colours at any point.
  CONCEDED  stack: Black and red hold no counterspells in this pool; the deck races instead, and Collective Brutality's 'You choose an instant or sorcery card from it. That player discards that card' is the sideboard proxy.
  CONCEDED  graveyard: Verified against oracle text: every graveyard-touching BR card in this pool is self-serving (flashback/recursion). There is no BR answer to an opponent's graveyard at all, so the class is unanswerable rather than merely unboarded.
```

- curve PASS (aggro 1:6 2:8 3:8 4:1) — no flags raised. The single 4-drop is Bloodhall Priest, castable for {1}{B}{R} via madness.
- goldfish PASS (keepable 87%, 3 lands by T3 88%, play by T1 73% / T2 97% / T3 99%) — no flags raised.
- Interaction at 21.7% is above the 10-15% aggro band. Accepted and grounded: the Phase 6b coverage gate found the pre-grill list answered the single_large_threat class zero times, and Tragic Slip x2 is the only 1-mana answer in the pool to the cube's 12 toughness-6+ creatures.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus mana converts into cards through the Blood tokens' '{1}, {T}, Discard a card, Sacrifice this token: Draw a card', sourced from 4 of 23 nonland cards (Voldaren Epicure x2, Bloodtithe Harvester x2) — a mana sink that simultaneously draws a card and triggers madness. Furyblade Vampire's combat discard converts a dead card into +3/+0 at no mana cost, which is card conversion rather than a mana sink and is not counted here. |
| screw | mitigation | Six 1-drops and eight 2-drops make two-land hands functional: the goldfish sim reports 97% play-by-turn-2 and an 87% keepable rate. Only two of seventeen lands enter tapped. Madness is cheaper than hardcast for exactly the four cards whose madness cost is lower than their mana cost (Bloodmad Vampire {1}{R} vs {2}{R}, Stromkirk Occultist {1}{R} vs {2}{R}, Fiery Temper {R} vs {1}{R}{R}, Bloodhall Priest {1}{B}{R} vs {2}{B}{R}), so a short-on-mana hand can still deploy a threat. |
| decapitation | mitigation | Stensia Masquerade answered on sight costs the counter accrual, not the deck: all 16 creatures still attack, and Bloodmad Vampire ('put a +1/+1 counter on it') and Stromkirk Occultist ('exile the top card ... you may play that card') carry their own growth and card flow. There are two copies, and it is an enchantment — the cube contains only 2 enchantment answers in 277 cards (0.72%), both white. |
| gas-out | mitigation | Three self-replacing sources keep the hand live: Stromkirk Occultist exiles and lets you play the top card on every connection; Asylum Visitor reads 'if that player has no cards in hand, you draw a card' — it turns the empty hand this deck produces INTO card flow; and every Blood token is a stored draw. Bloodhall Priest goes the other way, converting the empty hand into 2 damage per attack. |
| raced | accepted | Against the cube's fastest clocks this deck has no lifegain and no mainboard blocker — Gluttonous Guest (1/4) sits in the sideboard. Mitigating would mean maindecking defensive bodies, which directly contradicts a lowest-curve/most-explosive shape where every creature slot is an attacker; the deck instead relies on being the faster clock (goldfish turn 5) and on Tragic Slip / Fiery Temper / Lightning Axe removing the opposing threat rather than blocking it. |
| disruption-fizzle | mitigation | There is no single critical turn to interact with — the plan is incremental board development, so a removal spell mid-curve costs one Vampire out of sixteen. Black and red hold no counterspells, so the only stack interaction this deck plays around is blue: Syncopate ('Counter target spell unless its controller pays {X}'), Geistlight Snare and Mausoleum Wanderer. Against those, madness deployment happens at instant speed off Olivia's Dragoon, so threats can be held and deployed after the opponent commits mana. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| The Meathook Massacre | 'When The Meathook Massacre enters, each creature gets -X/-X until end of turn' is symmetric, and this list's core bodies are Voldaren Epicure 1/1, Indulgent Aristocrat 1/1, Blood Artist 0/1, Bloodmad Vampire 4/1, Asylum Visitor 3/1 and Blood Petal Celebrant 2/1 — X=1 wipes six of the deck's own creature slots. Mythic; the drain half belongs to the aristocrats build, not this one. |
| Skirsdag High Priest | '{T}, Tap two untapped creatures you control: Create a 5/5 black Demon' costs three bodies' attacks each activation — it competes directly with the attack step this deck wins through, and consumes a rare slot. |
| Gravecrawler | 'You may cast this card from your graveyard as long as you control a Zombie.' The only Zombies this build can produce come from Gisa's Bidding; the recursion clause is off for most of the game, leaving a 1-mana 2/1 that can't block, at rare cost. |
| Hanweir Garrison | 'Whenever this creature attacks, create two 1/1 red Human creature tokens that are tapped and attacking.' Genuinely strong, but the tokens are Humans, not Vampires — they miss Stensia Masquerade's counter trigger, Captivating Vampire's anthem and Voldaren Ambusher's X. Rare slot better spent on a Vampire. |
| Reforge the Soul | 'Each player discards their hand, then draws seven cards' refills the opponent symmetrically at a point when this deck's own hand is deliberately empty — it undoes the attrition the discard plan creates. Rare. |
| Invasion of Innistrad // Deluge of the Dead | '-13/-13' at four mana is good removal, but the deck already has Murderous Compulsion, Infernal Grasp, Tragic Slip, Lightning Axe and Fiery Temper below four mana; the rare slot buys nothing the curve does not already cover. |
| Mirrorwing Dragon | 5-mana 4/5 whose text copies opponents' spells too; it sits two turns above this deck's goldfish curve and is a mythic. |
| Zealous Conscripts | 5-mana 3/3 haste with a one-turn steal — a midrange tempo card, above this aggro curve, and a rare. |
| Tree of Perdition | 'Defender. {T}: Exchange target opponent's life total with this creature's toughness.' A 4-mana defender that never attacks, in a deck whose payoff triggers only on combat damage. Mythic. |
| Emrakul, the Promised End | {13}. Uncastable at 17 lands on a turn-5 clock. |
| Essence Flux | U splash candidate. 'Exile target creature you control, then return it to the battlefield under your control' — this deck has one meaningful ETB Vampire chain (Voldaren Epicure/Bloodtithe Harvester's Blood tokens) and paying {U} plus a card for one extra Blood token is worse than any 1-mana card already in the slice. |
| Gisa and Geralf | U splash candidate at {2}{U}{B}. Its text reads Zombies ('you may cast a Zombie creature card from your graveyard'); this deck contains no Zombie cards, only Zombie tokens from Gisa's Bidding, which are not cards. |
| Makeshift Mauler | U splash candidate. 'As an additional cost to cast this spell, exile a creature card from your graveyard' for a 4-mana 4/5 Zombie — off-tribe, off-curve, and it competes with the graveyard this deck's madness cards fill. |
| Edgar Markov | Outside the seed's colour gate (BRW vs. core BR) and not a U splash candidate, so it never entered the seed. Separately: 'Eminence — ... if Edgar is in the command zone or on the battlefield' has no command zone in a 40-card deck, making it a 6-mana {3}{R}{W}{B} hardcast with no BRW land in the pool. Built as its own deck (P4) instead. |
| Markov Waltzer | Outside core BR ({2}{R}{W}) and not a U splash candidate. A 4-mana 1/3 whose 'up to two target creatures you control each get +1/+0' is below rate for a competitive aggro slot even if the W were free. |

Seed candidates that reached the sketchers but did not make the final list:

| Card | Verdict | Reason |
|---|---|---|
| Alchemist's Greeting | CUT | Madness {1}{R} for 4 damage is on-plan, but hardcast {4}{R} is uncastable on a turn-5 clock and Interaction already sits at 5 of 23 (21.7%), above the aggro band. |
| Collective Defiance | CUT | Reach is real, but escalate wants 4 mana to use two modes — one turn past the thesis — and it is a rare against a budget already spent. |
| Chandra, Dressed to Kill | CUT | A 3-mana permanent that adds no body the turn it lands is off-lens for lowest-curve/most-explosive; also a mythic. |
| Village Rites | CUT | 'As an additional cost to cast this spell, sacrifice a creature' is unpayable by a deck attacking with all 16 of its creatures. |
| Uncaged Fury | CUT | Double strike partly duplicates Stensia Masquerade's first strike, and a trick that does nothing on an empty board is off-plan with interaction already over band. |
| Gisa's Bidding | CUT | Two bodies off one discard is on-plan, but {2}{B}{B} against 67.9% red pip demand on 8 black sources is the same cost objection recorded for Captivating Vampire. |
| Falkenrath Torturer | CUT | 'Sacrifice a creature: This creature gains flying' — the deck runs no death triggers worth feeding and keeps no spare bodies, the same ground as Indulgent Aristocrat. |
| Voldaren Duelist | CUT | 4 MV, above the curve, and Falkenrath Gorger grants it madness at a cost EQUAL to its mana cost, so there is no discount to justify the slot. |
| Ancestral Anger | CUT | A cantrip trick that adds no body, with interaction already over band. |
| Blood Petal Celebrant | CUT | 'First strike as long as it's attacking' is wholly redundant with Stensia Masquerade's blanket first strike on attackers. Its death trigger would be a 5th Blood source, which is the half the original cut did not price. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.17   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.44 adj [MV 2.17 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  32.1%  prod  47.1%  gap -15.0pp  [OK]
  R  demand  67.9%  prod  70.6%  gap  -2.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool rules: commons/uncommons up to 2 copies; rares/mythics 1 copy.
Extra build constraint: at most 5 rare-or-mythic CARDS across mainboard + sideboard.
Basic lands: format-supplied, unlimited.

  [PASS] Mainboard = 40 (required 40)
  [PASS] Sideboard = 10 (required 10)
  [PASS] Every card exists in the cube mainboard by exact name
  [PASS] Copy limits obeyed (verified via cube_search.get_max_copies with a per_rarity policy)
  [PASS] Rare/mythic cards used: 4 of 5 -> Falkenrath Gorger, Bloodhall Priest, Haunted Ridge, Collective Brutality
  [PASS] Every nonland card usable in B/R (effective_cost.best_mode)
  [PASS] Splash cap: 0 splash colour(s), 0 splash cards used

```
