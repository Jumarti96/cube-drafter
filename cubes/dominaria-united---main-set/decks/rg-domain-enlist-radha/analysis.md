---
deck_name: "rg-domain-enlist-radha"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "RG"
format: "40-card"
built_at: "2026-08-20T16:18:28Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)
### LANDS (17)
```
x2   Wooded Ridgeline           RG dual, tapped - Mountain + Forest types
x2   Sacred Peaks               R source, tapped - adds the Plains type
x2   Haunted Mire               G source, tapped - the only non-Portal Swamp type
x2   Tangled Islet              G source, tapped - adds the Island type
x1   Radiant Grove              G source, tapped - adds the Plains type
x1   Molten Tributary           R source, tapped - adds the Island type
x1   Karplusan Forest           only untapped-capable RG dual; 0 basic land types
x1   Thran Portal               wildcard Domain type; untapped on 2 or fewer other lands
x2   Forest                     basic
x2   Mountain                   basic
x1   Plaza of Heroes            protects a legendary creature; 0 basic land types
```
### CREATURES (12)
```
CMC  Card                       Qty  Color  Role                                   Rar
  2  Nishoba Brawler            x2   G      PAYOFF (0.6) — Domain-scaled trampler, U
  2  Sprouting Goblin           x1   R      Domain fixer when kicked; its land-sac U
  2  Yavimaya Steelcrusher      x2   R      Enlist body (0.8, only 2 power) + the  C
  3  Llanowar Greenwidow        x1   G      PAYOFF (0.6) - 4/3 reach trample; high R
  4  Coalition Warbrute         x2   R      PAYOFF — Enlist + unconditional trampl C
  4  Radha, Coalition Warlord   x2   RG     ENABLER/ENGINE — the tap trigger; enli U
  4  Rulik Mons, Warren Chief   x1   RG     Threat + Domain flow (weighted 0.5 — a U
  5  Linebreaker Baloth         x1   G      PAYOFF (0.7) — Enlist + conditional ev U
```
### INSTANTS & SORCERIES (9)
```
CMC  Card                       Qty  Color  Role                                   Rar
  1  Gaea's Might               x2   G      Reach — one-mana copy of the PUMP half C
  1  Tail Swipe                 x1   G      Interaction — one-mana fight for an ov U
  2  Bite Down                  x2   G      Interaction — removal priced off the d C
  2  Lightning Strike           x2   R      Interaction — clears the ground blocke C
  2  Smash to Dust              x1   R      Interaction — modal; the maindeck wide C
  5  Slimefoot's Survey         x1   G      ENABLER (0.9) - the only card in the p U
```
### OTHER SPELLS (2)
```
CMC  Card                       Qty  Color  Role                                   Rar
  3  The Weatherseed Treaty     x2   G      PAYOFF (0.7) — Read ahead to III for ' U
```
## SIDEBOARD (10)
```
Card                       Qty  Color  Role / When to board in                Rar
Broken Wings               x2   G      artifact/enchantment/flyer removal     C
Magnigoth Sentry           x2   G      4/4 reach vs the 51-card evasion class C
Jaya's Firenado            x1   R      5 damage removal that needs no creatur C
Territorial Maro           x2   G      8/8 at Domain 4 for five mana, vs grin U
Hexbane Tortoise           x2   G      extra Enlist body with ward {2} vs rem C
Twinferno                  x1   R      double strike; the only multiplier for U
```
## ANALYSIS
### DECK IDENTITY

Red-green Domain beatdown built on one interaction. Radha, Coalition Warlord reads "Domain -
Whenever Radha becomes tapped, another target creature you control gets +X/+X until end of turn,
where X is the number of basic land types among lands you control." Because enlist TAPS a
nonattacking creature, enlisting Radha pays twice: her 3 power transfers to the attacker AND the
trigger fires, and it may target that same attacker, since "another" only excludes Radha herself.
At Domain 4 a Coalition Warbrute attacks as a 10/8 trampler. The manabase is therefore the payoff.

### THE MANABASE IS THE PAYOFF

Seven common typed duals in this cube each carry TWO basic land types on one card while still
producing red or green - Wooded Ridgeline is "Land - Mountain Forest", Haunted Mire is
"Land - Swamp Forest", Molten Tributary is "Land - Island Mountain". Domain 5 is therefore
reachable without spending a single rare slot on fixing. Ten of the seventeen lands enter tapped,
which is the price, and it is affordable for a specific oracle-grounded reason: Coalition Warbrute
costs four and has no haste, so the earliest enlist-Radha swing is turn 6 in ANY build of this
archetype. Tapped lands cost nothing before the turn the deck is trying to win on.

A 20,000-trial simulation over this exact manabase, sequencing to maximise Domain, on the play:

| Turn | mean Domain | P(Domain >= 4) | P(Domain = 5) |
|---|---|---|---|
| 4 | 3.69 | 60.5% | - |
| 5 | 3.86 | 67.9% | - |
| 6 (thesis turn) | 4.02 | 74.1% | 33.4% |
| 7 | 4.15 | 79.4% | - |

So 4 is the honest pricing number, with the qualifier the deck must own: in roughly a quarter of
games the +4/+4 figures are +3/+3 or worse.

### THE SAME CARD IS WORTH DOUBLE HERE

Gaea's Might reads "+1/+1 until end of turn for each basic land type among lands you control."
In the pure funnel build of this archetype - a two-basic-type manabase - it is a one-mana +2/+2.
Here it is +4/+4. Nothing about the card changed; the ten typed duals did. That is the clearest
statement of what this deck is buying with its tapped lands.

### THE KILL, STEP BY STEP

Enlist adds POWER ONLY, and Radha's trigger adds +X/+X, so the arithmetic is asymmetric:

| Step | Coalition Warbrute |
|---|---|
| base | 3/4 |
| enlist Radha (+3 power) | 6/4 |
| Radha's tap trigger at Domain 4 | 10/8 trample |
| plus Gaea's Might | 14/12 trample |

Radha also fires by merely ATTACKING, because she has no vigilance and declaring her as an
attacker taps her - so a disrupted enlist line is not a dead Radha.

### WHAT LLANOWAR GREENWIDOW FIXES

At {2}{G} for a 4/3 with reach and trample it is three things at once: the only maindeck block
against the cube's largest threat class (evasion, 51 cards at 20.7% density), the highest-power
enlist fodder in the list, and a threat that returns from the graveyard for {3}{G} at Domain 4
("This ability costs {1} less to activate for each basic land type among lands you control"),
which is this deck's only recursion against the cube's six sweepers.

### MATCHUP NOTE

The class this deck cannot touch is graveyard - 32 cards at 13% density, and the dossier reports
the cube's only graveyard-hate card is blue. Stack interaction is likewise unavailable: the pool
contains no red or green counterspell at any cost.
### STRUCTURAL CHECKS
```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:10  3:3  4:5  5:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 5.9: Linebreaker Baloth@0.7, Nishoba Brawler@0.6, Nishoba Brawler@0.6, The Weatherseed Treaty@0.7, The Weatherseed Treaty@0.7, Llanowar Greenwidow@0.6) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 6.6: Yavimaya Steelcrusher@0.8, Yavimaya Steelcrusher@0.8, Sprouting Goblin@0.6, Slimefoot's Survey@0.9, Rulik Mons, Warren Chief@0.5, Gaea's Might@0.5, Gaea's Might@0.5) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 89%
  play by turn: T1 47%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Smash to Dust
  OK        single_large_threat: Bite Down, Tail Swipe, Lightning Strike
  OK        noncreature_permanents: Yavimaya Steelcrusher, Smash to Dust
  CONCEDED  stack: The pool contains no red or green counterspell; interacting on the stack is unavailable to this colour pair at any cost.
  CONCEDED  graveyard: The cube dossier reports 0 graveyard-hate cards cube-wide, so no colour in this environment answers this class.
```
- No WARN-tier flags: curve PASS (midrange) and goldfish PASS on the Phase 6b run.
- Land count is now 17 against a computed recommendation of 17 - zero deviation. The earlier +1 deviation closed itself when Slimefoot's Survey and Llanowar Greenwidow raised the average mana value from 2.609 to 2.696 during grill repair.
- Disclosure (Challenger F10): Gaea's Might x2 carries taxonomic_profile.structural_roles [Interaction/Disruption], but this build files both copies under Flex rather than Interaction, because its oracle text is a pump effect and not an answer. Counted by its tag instead, Interaction would be 8 of 23 = 34.8%, above the midrange ceiling of 30%. The build stands by the placement and records the divergence from the taxonomy rather than leaving it silent.

### FAILURE MODES
| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two sinks are printed on cards in the list. Sprouting Goblin's '{R}, {T}, Sacrifice a land: Draw a card' (2 copies) turns a surplus land into a card - though only ever an UNTYPED surplus land, since sacrificing a typed dual would shrink Domain. Rulik Mons' attack trigger converts a topdecked land into a free tapped land drop, and when it whiffs it makes a 1/1 Goblin instead, so a flooded topdeck still produces a body. CORRECTED after the grill: a +1/+1-per-surplus-land framing would be wrong, because Domain counts basic land TYPES, not lands, and caps at 5 - at nine lands in play the simulation puts Domain at 5 in 85.3% of games, past which further lands add nothing at all. Conversely the sacrifice outlet is safer than first stated: at nine lands a Domain-neutral sacrifice target exists in 100% of states, so Sprouting Goblin's outlet is fully live rather than a last resort once the game goes long. |
| screw | accepted | This is the deck's real weakness and it is bought deliberately. 10 of 17 lands enter tapped, so a two-land hand is effectively a one-land hand for a turn, and the goldfish check reports only 48% of hands making a turn-1 play. Mitigating would mean cutting typed duals for untapped basics - which is precisely the resource the kill mechanism is denominated in, since Radha's X, Nishoba Brawler's power and Gaea's Might all read 'for each basic land type'. Trading Domain for speed converts this deck into Deck A, which is a different deck rather than a better version of this one. 85% of openers are keepable and 88% reach three lands by turn 3. |
| decapitation | mitigation | Radha is 2 copies and answering her on sight is the obvious line, so the pump half of her payoff is deliberately duplicated on three other card names: Gaea's Might x2 ('+1/+1 for each basic land type'), The Weatherseed Treaty x2 (chapter III, '+X/+X and gains trample'), and Nishoba Brawler x2, whose power is the same Domain number without needing Radha at all. Payoff copies total 7 across 4 names at 5.3 effective, p=0.84. |
| gas-out | mitigation | The deck refuels off lands rather than off card draw, which is what a Domain shell is for. Sprouting Goblin ('{R}, {T}, Sacrifice a land: Draw a card', 2 copies) and Rulik Mons ('look at the top card of your library. If it's a land card, you may put it onto the battlefield tapped', 2 copies) both convert late-game lands into action, and The Weatherseed Treaty x2 is a three-card sequence off one card. In resource_exchange terms the list carries 2 Cards: Self-Replacing effects and turns every excess land into +1/+1 across the Domain suite. |
| raced | accepted | Against the cube's fastest clocks this deck is behind on tempo by construction - 10 tapped lands and a turn-6 goldfish mean it will be taking damage for four turns. It buys back what it can with blocking bodies (Nishoba Brawler at */3, Rulik Mons 3/3, Coalition Warbrute 3/4) and with Smash to Dust's 'deals 1 damage to each creature your opponents control' against the go-wide starts, but mitigating properly would mean untapped lands and one-drops, which is the same trade the screw entry refuses: it would delete Domain, and Domain IS the damage. |
| disruption-fizzle | mitigation | CORRECTED after the grill - the earlier version asserted that the pool held zero red-green-legal protection, which is false for THIS deck because it runs legendary creatures. Plaza of Heroes is now in the manabase: '{3}, {T}, Exile this land: Target legendary creature gains hexproof and indestructible until end of turn' - a colourless land that answers the exact disruption this mode describes (removal aimed at Radha) at zero colour cost, across the 3 legendary creatures in the list (Radha x2, Rulik Mons x1). The slot was taken from a basic Forest rather than from Karplusan Forest, so the deck keeps its only untapped-capable red-green dual, and Forest is the most abundant Domain type at 9 sources, so the Domain count is unaffected. Two further layers of redundancy: Radha's trigger also fires when she merely ATTACKS, since she has no vigilance, so a disrupted enlist line can still be converted on a later turn; and The Weatherseed Treaty delivers +X/+X and trample from a permanent already on the battlefield. Residual exposure, stated plainly: enlist reads 'As this creature attacks, you may tap a nonattacking creature', so the tap resolves during the DECLARATION of attackers - removal aimed at the attacking enlister in response to the reflexive trigger still costs both the attacker and Radha's tapped-and-spent turn, and Plaza of Heroes costs {3} plus the land itself to prevent it. |

### CARDS CONSIDERED BUT EXCLUDED
| Card | Reason |
|---|---|
| Territorial Maro | 'power and toughness are each equal to TWICE the number of basic land types' - an 8/8 for five at Domain 4, but it has no Enlist and no evasion, so it does not advance the Radha kill; kept in the sideboard for grindier matchups. |
| Meria's Outrider | 'Reach / Domain - deals damage to each opponent equal to the number of basic land types' - four points of reach, but cut for Linebreaker Baloth because the deck needed a fifth Enlist body more than a one-shot four damage. |
| Broken Wings | 'Destroy target artifact, enchantment, or creature with flying' - the widest answer in the pool, but it answers no GROUND blocker, which is the class that actually stands in front of a trampling Domain body; moved to the sideboard. |
| Keldon Flamesage | 'look at the top X cards, where X is this creature's power' - and the enlist-Radha stack does make X large. Excluded purely on the rare budget: this list runs 8 instants/sorceries of 23 nonland cards (69.4% to hit in the top five), so the trigger is genuinely live, but all four spent rare slots buy Domain or protect the legendary creatures, and a 2/3 body does neither. |
| Yavimaya Sojourner | 'This spell costs {1} less to cast for each basic land type' - still {3}{G} at Domain 4 for a 4/6 with no evasion and no Enlist. |
| Sunbathing Rootwalla | '{3}{G}: this creature gets +1/+1 for each basic land type. Activate only once each turn' - four mana for a one-shot pump on a 2/2 with no evasion; Gaea's Might does the same for one mana. |
| Briar Hydra | 'Domain - Whenever this creature deals combat damage to a player, put X +1/+1 counters on target creature' - a 6/6 trample rare, but its payoff only starts AFTER it has already connected, one turn past this deck's goldfish. |
| Floriferous Vinewall | 'Defender / look at the top six cards ... reveal a land card ... put it into your hand' - finds a land but is a 0/2 defender, so it contributes 0 power as enlist fodder and cannot attack. |
| Deathbloom Gardener | 'Deathtouch / {T}: Add one mana of any color' - fixes colour but adds no basic land TYPE, so it does nothing for Domain, which is what this deck's damage is denominated in. |
| Hammerhand | 'target creature can't block this turn ... has haste' - strong in the pure funnel build, but this deck's trample and menace already beat single blockers and it wants its one-drops to be Gaea's Might instead. |
| Crystal Grotto | '{T}: Add {C}. {1}, {T}: Add one mana of any color' - it carries no basic land type at all, so in a Domain deck it is strictly worse than any of the seven common typed duals. |
| Off-colour basics (Plains, Island, Swamp) | Running off-colour basics as Domain fodder was rejected: the typed duals reach the same five types while still producing red or green, so an off-colour basic would be a land that makes unusable mana. |
| Yavimaya Iconoclast | 3 power and trample for {1}{G} makes it better enlist FODDER than Yavimaya Steelcrusher, but its oracle text contains no Enlist - swapping both Steelcrushers would cut the deck from 5 enlist bodies to 3, and the kill mechanism requires an enlist attacker on board on the thesis turn. |
| Twinferno | 'Target creature you control gains double strike' would turn the turn-six 10/8 Warbrute into 20 trample damage, the only multiplier in the pool for a plan that concentrates everything on one attacker - the maindeck had no slot for it, so it is in the sideboard. |
| Colossal Growth | Kicked it is a flat +4/+4 with trample and haste, DOMAIN-INDEPENDENT - the direct hedge on the ~26% of games where this manabase is at Domain 3 or worse and Gaea's Might shrinks with it. Cut only because the flex band was full. |
| Hero's Heirloom | 'As long as equipped creature is legendary, it has trample and haste' - haste would let Radha be enlisted the turn she resolves, removing the summoning-sickness clause that sets the thesis turn at 6. One equipment across 3 legends is too thin, and it is a blank topdeck with no legend out. |
| Geothermal Bog | 'Land - Swamp Mountain' is a legal Domain land and a red source, but Haunted Mire already supplies the Swamp type on a GREEN source, and this list's pip demand is 60.7% green. |
| Contaminated Aquifer / Idyllic Beachfront / Sunlit Marsh | All three carry two basic land types, but none produces red or green - they would be lands that make unusable mana in exchange for a Domain type, and the seven red-green-producing typed duals already reach all five types. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.7   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.40 adj [MV 2.7 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  60.7%  prod  58.8%  gap  +1.9pp  [OK]
  R  demand  39.3%  prod  47.1%  gap  -7.8pp  [OK]
```
## RESTRICTIONS COMPLIANCE
```
PASS   1a mainboard count == 40   got 40
PASS   1b sideboard count == 10   got 10
PASS   2 exact-name membership in working pool   missing: []
PASS   3 copy limits vs card_pool_rules
PASS   4 colour usability via effective_cost.best_mode   unusable: []
PASS   5 splash cap <= 3 per colour and in splash_candidates
PASS   6 rare/mythic total <= 5 (user cap)   got 4: ['Karplusan Forest', 'Llanowar Greenwidow', 'Plaza of Heroes', 'Thran Portal']
```
