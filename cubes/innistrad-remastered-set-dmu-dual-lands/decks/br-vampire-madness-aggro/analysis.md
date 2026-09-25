---
deck_name: "br-vampire-madness-aggro"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-08-26T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  x9 Mountain
  x4 Swamp
  x2 Geothermal Bog   BR dual, enters tapped
  x1 Haunted Ridge   BR dual, enters tapped unless you control 2+ other lands
```

### CREATURES (16)
```
CMC  Card                  Qty   Color  Role                                           Rar
  1  Falkenrath Gorger     x1    R      Payoff - madness amplifier                     R
  1  Vexing Devil          x1    R      Threat - turn-1 4 damage or 4/3                R
  1  Voldaren Epicure      x2    R      Threat - 1-drop Vampire, Blood outlet          C
  2  Asylum Visitor        x2    B      Threat - madness 3/1, hellbent draw            U
  2  Bloodtithe Harvester  x2    BR     Threat/Interaction - Blood on ETB, -X/-X sac   U
  2  Furyblade Vampire     x2    R      Engine - free combat-step outlet, 4/2 trample  U
  2  Olivia's Dragoon      x2    B      Engine - free unlimited discard outlet         C
  3  Bloodmad Vampire      x2    R      Threat - madness 4/1 that grows                C
  3  Stromkirk Occultist   x2    R      Threat - madness 3/2 trample, impulse draw     U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                  Qty   Color  Role                                           Rar
  1  Faithless Looting     x2    R      Engine - outlet, rebuyable from graveyard      C
  1  Lightning Axe         x2    R      Interaction - discard outlet + 5 damage        U
  3  Fiery Temper          x2    R      Interaction/Reach - madness {R} for 3 damage   U
```

### OTHER SPELLS (2)
```
CMC  Card                  Qty   Color  Role                                           Rar
  3  Stensia Masquerade    x2    R      Payoff - first strike + Vampire counters       U
```

## SIDEBOARD (10)
```
Card                  Qty   Color  Role / When to board in                                                                                                                                                                               Rar
Abrade                x2    R      Artifact answer / 3 damage - vs the cube's 24 artifacts - Equipment, Vehicles and the Clue/Blood engines the mainboard has no answer to                                                               U
Infernal Grasp        x2    B      Unconditional removal - vs single large or evasive threats the burn suite cannot kill - the cube fields 58 evasion cards                                                                              U
Savage Alliance       x2    R      Anti-wide micro-sweeper - vs the cube's 35 token-producing cards - the escalate mode deals 1 damage to each creature the opponent controls, and 65 of the cube's 166 creatures have toughness 1 or 2  U
Gluttonous Guest      x2    B      Anti-race blocker + Blood outlet - vs decks that race - a 1/4 Vampire body is the only thing in these colours that survives an early attack step, and it banks a Blood token                          C
Collective Brutality  x1    B      Hand disruption / drain - vs control and combo - strip the sweeper or the combo piece; the drain mode wins races and the escalate cost is itself an outlet                                            R
Collective Defiance   x1    R      Reach / mass madness trigger - vs lifegain decks that blunt the race - 3 to the face plus 4 to a creature on one card, and the wheel mode can target you as a mass madness trigger                    R
```

## ANALYSIS

### DECK IDENTITY

Black-red madness aggro. Ten of the twenty-four nonland cards carry a printed madness cost, and twelve outlet cards across six names fire them: Olivia's Dragoon's free unlimited 'Discard a card', Furyblade Vampire's free combat-step discard, Faithless Looting (which rebuys itself from the graveyard with Flashback {2}{R}), Lightning Axe's additional cost, and four Blood tokens. Fifteen of the twenty-four nonland cards are Vampires, so Falkenrath Gorger extends the rebate to eight further cards that do not already have it, and Stensia Masquerade turns every connection into a permanent +1/+1 counter behind first strike. The clock is a turn-5 goldfish carried by 8 one-drops and 8 two-drops at an average mana value of exactly 2.0.

### THE MADNESS MATH

Madness is a cost rebate, and a rebate is only worth building around when the set of cards it rebates is large and the outlets that trigger it are free. Both counts are stated against this list:

| Quantity | Count | Share of 24 nonland |
|---|---|---|
| Cards with a printed madness cost | 10 | 41.7% |
| Vampire cards (Falkenrath Gorger's grant) | 15 | 62.5% |
| Cards Gorger newly makes madness-live (marginal grant) | 8 | 33.3% |
| Madness-live cards with Gorger on the battlefield | 18 | 75.0% |
| Discard-outlet cards | 12 (6 names) | 50.0% |
| — of those, free and repeatable | 4 (2 names) | 16.7% |

The crucial distinction is that **Gorger's grant is cost-equal, not a discount** — "The madness cost is equal to its mana cost." What it buys is *instant-speed, off-curve deployment*, not cheaper spells. The actual mana savings come from the printed madness costs, and only three names are genuinely discounted:

| Card | Printed | Madness | Saving |
|---|---|---|---|
| Fiery Temper | {1}{R}{R} | {R} | 2 mana |
| Bloodmad Vampire | {2}{R} | {1}{R} | 1 mana |
| Stromkirk Occultist | {2}{R} | {1}{R} | 1 mana |
| Asylum Visitor | {1}{B} | {1}{B} | none — buys instant speed |
| Stensia Masquerade | {2}{R} | {2}{R} | none — buys instant speed |

### THE LINE THAT DEFINES THE DECK

Turn 2, Olivia's Dragoon in play, holding Fiery Temper. Its "Discard a card: This creature gains flying until end of turn" costs nothing and has no once-per-turn clause, so on the opponent's end step you discard Fiery Temper and cast it for **{R}** instead of {1}{R}{R}. One black mana that was doing nothing has become 3 damage at instant speed, and the Dragoon is a 2/2 flier for the turn. Repeat with Bloodmad Vampire and a 4/1 arrives for {1}{R} at instant speed — a body the opponent could not play around.

### WHY FAITHLESS LOOTING IS THE OUTLET THAT MATTERS

The deck's one accepted failure mode is `disruption-fizzle`: a removal spell aimed at the outlet. Four of the six outlet cards are creatures, which is exactly what the cube's removal answers. Faithless Looting's `Flashback {2}{R}` makes it **the only outlet in the black-red pool that fires from the graveyard** — the one outlet a creature-removal spell cannot pre-empt. It was missed on the first build and added at Phase 9.

### THE MANA BASE COSTS A RARE, DELIBERATELY

The 5-rare budget is fully spent, and one of the five slots went to a *land*. Haunted Ridge ("enters tapped unless you control two or more other lands") is the only black-red dual in the cube that enters untapped from turn 3 onward; Geothermal Bog, the common alternative, always enters tapped. Taking it moved red production from 62.5% to 75.0% against 78.6% demand, closing the gap from +16.1pp (a FAIL) through +9.8pp to +3.6pp. In a deck whose goldfish turn is 5, a tapped land is a lost turn — that is what the rare slot bought.

### WHAT THIS DECK CANNOT DO

Three of the five threat classes are conceded maindeck, and the reasons are pool-imposed rather than choices:

- **The stack** — black and red cast no counterspell anywhere in this 300-card cube.
- **Graveyards** — the cube contains *zero* graveyard hate in any colour, while 27% of its cards interact with graveyards. There is nothing to buy at any price.
- **Enchantments** — the cube's only two enchantment answers are both white. The 25 cube enchantments have no answer in these colours.

The sideboard covers what can be covered: Abrade for the 24 artifacts, Savage Alliance for the 35 token-producing cards, Gluttonous Guest as the only body in black-red that survives an early attack step.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (24 nonland):  1:8  2:8  3:8
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  madness_payoff: 10 copies → p=0.97 (need ≥ 0.75)
  PASS  discard_outlet: 12 copies (effective 10: Lightning Axe@0.6, Lightning Axe@0.6, Voldaren Epicure@0.7, Voldaren Epicure@0.7, Bloodtithe Harvester@0.7, Bloodtithe Harvester@0.7) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 83%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper exists in this build, and the previous concession's reasoning was wrong: Stensia Masquerade's 'Attacking creatures you control have first strike' only applies when THIS deck attacks, which is not the case being conceded. The honest concession is that 24 nonland slots at avg MV 2.0 are all spent on the clock, and the cube's 35 token-producing cards are answered from the sideboard by Savage Alliance x2 ('deals 1 damage to each creature target opponent controls') rather than maindeck.
  OK        single_large_threat: Lightning Axe, Bloodtithe Harvester, Fiery Temper
  CONCEDED  noncreature_permanents: The mainboard carries no artifact or enchantment answer. Abrade ('Destroy target artifact') covers the artifact half from the sideboard; the cube gives black and red no enchantment removal at all (dossier enchantment_answers = 2 cards, both white), so no maindeck answer to that half is purchasable. Conceded to keep all 24 nonland slots on the clock.
  CONCEDED  stack: Black and red cast no counterspells anywhere in this cube. The deck interacts on the battlefield and on the opponent's life total instead.
  CONCEDED  graveyard: The cube contains zero graveyard hate in any colour (dossier structural_census: GY hate = 0 of 300 cards), so there is no maindeck answer available to buy. 27% of the cube interacts with graveyards; this deck races those decks rather than answering them.
```

All four structural checks returned PASS with no WARN flags, so there are no `structural_responses` entries to record.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands convert to action through the Blood tokens and the impulse draw. Blood ('{1}, {T}, Discard a card, Sacrifice this token: Draw a card') turns a spare mana plus a dead card into a fresh card, and 4 Blood sources are in the list (Voldaren Epicure x2, Bloodtithe Harvester x2). Stromkirk Occultist x2 ('exile the top card of your library. Until end of turn, you may play that card') converts spare mana directly into extra spells. Faithless Looting's Flashback {2}{R} is a 3-mana sink that converts two flooded cards into two fresh ones from the graveyard. |
| screw | mitigation | 8 of 24 nonland cards cost one mana and 8 cost two, so a 2-land hand deploys on curve through turn 3. Three card names / six cards are cheaper cast for madness than for their printed cost - Fiery Temper ({R} vs {1}{R}{R}), Bloodmad Vampire ({1}{R} vs {2}{R}) and Stromkirk Occultist ({1}{R} vs {2}{R}) - so a stalled land drop still deploys. Asylum Visitor's madness {1}{B} and Stensia Masquerade's madness {2}{R} both EQUAL their printed costs and are not discounts; they buy instant speed, not mana. 16 lands with 12 red and 7 black sources supports the single-pip curve; every {1}{B}{B} and {2}{B}{B} card in the candidate pool was deliberately left out. |
| decapitation | mitigation | Falkenrath Gorger answered on sight costs the deck its Vampire-wide madness extension, not its engine: 10 of the 24 nonland cards carry printed madness of their own and fire off any outlet with no Gorger on the battlefield. This is why Gorger is not declared as an assembly role - see the thesis revision note. |
| gas-out | mitigation | Six cards replace themselves or refill: Stromkirk Occultist x2 ('exile the top card of your library. Until end of turn, you may play that card' on combat damage), Asylum Visitor x2 ('if that player has no cards in hand, you draw a card and you lose 1 life'), which switches ON exactly in the hellbent state an emptied hand creates, and Faithless Looting x2, whose Flashback {2}{R} refuels a second time from the graveyard. Four Blood tokens each convert a dead card into a live one. |
| raced | mitigation | The previous version of this entry claimed the deck 'blocks' and cited Blood Petal Celebrant and Stensia Masquerade, both of which grant first strike only while ATTACKING - it was wrong on oracle text and both cards are addressed. The real answer is removal plus two genuine blockers: 6 removal effects can be pointed at a racing creature (Fiery Temper x2 at 3 damage instant-speed for madness {R}, Lightning Axe x2 at 5 damage for {R}, Bloodtithe Harvester x2 whose '-X/-X where X is twice the number of Blood tokens you control' answers a large attacker), and Vexing Devil is a 4/3 body and Bloodtithe Harvester a 3/2 body that can actually block. Against the fastest clocks the deck also races on rate: 8 one-drops and avg MV 2.0 with a turn-5 goldfish. Gluttonous Guest x2 (1/4 Vampire, 'When this creature enters, create a Blood token') is the dedicated sideboard blocker for the matchups where racing is not enough. |
| disruption-fizzle | accepted | One removal spell aimed at the outlet on the critical turn sets the madness plan back a turn, and the deck has no protection spell. Mitigating with protection or a second recursion package would cost threat density the aggro clock is built on and push the goldfish past turn 5. The redundancy answer is quantitative: 12 outlet cards across 6 names, of which 4 cards across 2 names (Olivia's Dragoon x2, Furyblade Vampire x2) are free and repeatable, and Faithless Looting's Flashback {2}{R} is a rebuyable outlet that lives in the graveyard where creature removal cannot reach it - so no single removal spell turns the engine off. |

### CARDS CONSIDERED BUT EXCLUDED

The full Phase 5A partition lives in `sweep.json`; this is the curated view of the cuts a reader would ask about.

| Card(s) | Reason |
|---|---|
| Reforge the Soul | 'Each player discards their hand, then draws seven cards.' It is a mass madness trigger, but it refills the OPPONENT to seven at the exact point an aggro deck is ahead on board - it hands the defender the sweeper it was missing. |
| Haunted Dead | '{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield tapped.' A repeatable outlet, but it is a 4-mana 2/2 that returns TAPPED and is not a Vampire, so Falkenrath Gorger grants it nothing - the rate is attrition, not aggro. |
| The Meathook Massacre | 'each creature gets -X/-X until end of turn' is symmetric, and this deck's board is 1- and 2-toughness Vampires - it kills more of mine than theirs. |
| Bedlam Reveler | 'When this creature enters, discard your hand, then draw three cards.' Costs {6}{R}{R} reduced by instants and sorceries in the graveyard; this build is creature-dense, so the reduction denominator is small and the discard happens too late to matter. |
| Chandra, Dressed to Kill | Card advantage at three mana, but it competes directly with Falkenrath Gorger, Bloodhall Priest and Captivating Vampire for the 5-rare budget and advances no madness or Vampire count. |
| Edgar's Awakening | 'When you discard this card, you may pay {B}. When you do, return target creature card from your graveyard to your hand.' A genuine discard payoff, but the return is to HAND at sorcery speed - too slow for a turn-5 clock. |
| Skirsdag High Priest | 'Morbid - {T}, Tap two untapped creatures you control: Create a 5/5 black Demon.' Taps three attackers to make one token - it competes with attacking, which is this deck's kill mechanism. |
| Gravecrawler | 'You may cast this card from your graveyard as long as you control a Zombie.' This build runs Zombies only as Gisa's Bidding tokens, so the recursion clause is off most of the time, and it costs a rare slot. |
| Lupine Prototype | 2-mana 5/5 but 'can't attack or block unless a player has no cards in hand' - this build loots and re-deploys, so its own hand is rarely empty on its attack step. |
| Heartless Summoning | 'Creature spells you cast cost {2} less' but 'Creatures you control get -1/-1' - this list's payoff bodies are 1- and 2-toughness Vampires and its rebate is madness, which Summoning does not discount. |
| Gisa and Geralf, Tower Geist | The Phase 3 splash filter admitted these three blue cards by cluster overlap; all are 4-mana non-Vampires with no madness cost, and BR's only free fixing (2x Geothermal Bog, 2x Evolving Wilds) all enters or fetches tapped, which a turn-5 clock cannot pay for. Splash declined - no card is worth a third colour here. (Makeshift Mauler cut with the Zombie batch.) |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.0   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.00 adj [MV 2.0 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  21.4%  prod  43.8%  gap -22.4pp  [OK]
  R  demand  78.6%  prod  75.0%  gap  +3.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
  [PASS] commons/uncommons max 2 copies
         no common or uncommon exceeds 2 copies across mainboard + sideboard (Phase 5C check 3, verified against cube_search.get_max_copies)
  [PASS] rares/mythics max 1 copy
         all five rares appear once
  [PASS] max 5 rares/mythics total across mainboard + sideboard
         exactly 5: Falkenrath Gorger, Vexing Devil and Haunted Ridge (mainboard); Collective Brutality and Collective Defiance (sideboard). Budget fully spent.
  [PASS] all cards from the cube mainboard
         Phase 5C check 2 - every name matched by exact string against the working pool cache
  [PASS] basic lands format-supplied, unlimited
         9 Mountain, 4 Swamp
  [PASS] colour legality (core B/R, no splash used)
         Phase 5C checks 4 and 5 - every nonland card usable via effective_cost.best_mode in [B,R]; 0 splash cards played
```