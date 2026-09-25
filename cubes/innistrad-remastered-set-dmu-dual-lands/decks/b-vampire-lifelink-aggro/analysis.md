---
deck_name: "b-vampire-lifelink-aggro"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-08-30T20:58:54Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x16  Swamp
```

### CREATURES (19)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Ecstatic Awakener // Awoken Demon            x1    B     engine                         C
  1  Indulgent Aristocrat                         x2    B     threat                         U
  2  Asylum Visitor                               x2    B     threat                         U
  2  Blood Artist                                 x2    B     payoff                         U
  2  Metallic Mimic                               x1    C     payoff                         R
  2  Olivia's Dragoon                             x2    B     threat                         C
  2  Restless Bloodseeker // Bloodsoaked Reveler  x2    B     threat                         U
  2  Voldaren Bloodcaster // Bloodbat Summoner    x1    B     threat                         R
  3  Captivating Vampire                          x1    B     payoff                         R
  3  Falkenrath Torturer                          x2    B     threat                         C
  3  Gluttonous Guest                             x2    B     threat                         C
  4  Bloodline Keeper // Lord of Lineage          x1    B     payoff                         M
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Tragic Slip                                  x2    B     interaction                    C
  2  Infernal Grasp                               x1    B     interaction                    U
```

### OTHER SPELLS (2)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Cobbled Wings                                x1    C     engine                         C
  3  Sorin, Imperious Bloodlord                   x1    B     payoff                         M
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Eaten Alive                                  x2    B     hate: recursive threats / planeswalkers        C
Village Rites                                x2    B     flex: removal-heavy decks                      C
Infernal Grasp                               x1    B     hate: single large threat                      U
Murderous Compulsion                         x1    B     hate: attacking decks                          C
Siege Zombie                                 x1    B     flex: board stalls                             C
Morbid Opportunist                           x1    B     flex: grindy attrition decks                   U
Sever the Bloodline                          x1    B     hate: wide boards / recursion                  U
Morkrut Banshee                              x1    B     flex: midrange creature decks                  U
```

## ANALYSIS

### DECK IDENTITY

A mono-black Vampire tribal aggro deck that wins with combat damage from a lord-pumped, LIFELINKING board. 17 of the 24 nonland cards are printed Vampires -- 18 counting Metallic Mimic naming Vampire -- and that density is the whole design, because three separate cards read it: Captivating Vampire ('Other Vampire creatures you control get +1/+1'), Bloodline Keeper's flip ('Activate only if you control five or more Vampires', whose back face gives 'Other Vampire creatures you control get +2/+2'), and Sorin's '-3: You may put a Vampire creature card from your hand onto the battlefield'. The lifegain is a race-winning tool rather than a value engine: Indulgent Aristocrat has lifelink on a one-drop, and Sorin's '+1: Target creature you control gains deathtouch and lifelink until end of turn. If it's a Vampire, put a +1/+1 counter on it' grants it to any attacker while growing it. Blood Artist closes the loop -- 'whenever this creature OR ANOTHER CREATURE dies, target player loses 1 life and you gain 1 life' -- so attacking into blockers is profitable rather than a cost, and their creatures dying to our removal drains them too.


### 17 IS NOT A PREFERENCE, IT IS THE SUPPLY

Three cards in this deck read raw Vampire count, and nothing else in the build matters as much:

| Card | The clause that reads the count |
|---|---|
| Captivating Vampire | "Other Vampire creatures you control get +1/+1" |
| Bloodline Keeper | "{B}: Transform this creature. Activate only if you control five or more Vampires" |
| Sorin, Imperious Bloodlord | "-3: You may put a Vampire creature card from your hand onto the battlefield" |

**17 of the 24 nonland cards are printed Vampires — 18 counting Metallic Mimic, which names Vampire and
becomes one.** That is not a design preference. The cube contains 23 Vampires, of which exactly **ten are
mono-black**, and this deck plays all ten at their maximum legal copy count. There is no legal mono-black
build with more Vampires than this one, and every build with fewer spent slots on non-Vampires — which is
precisely the trade both rejected sketches made, at 15 and 16, and were rejected for.

That fact also disposes of the deck's most eye-catching number. The threats slot reads 79% against a 45–55%
band, which looks alarming until you notice the three aggro bands sum to a **maximum of 80%** — they
presuppose a fourth ramp/fixing bucket. This deck has zero ramp and sixteen basics of one type, so it
structurally cannot spend that bucket; interaction sits at 12.5% and engine at 4%, both inside band, and the
residual is forced arithmetically. The honest caveat is that "threat" flatters six of those copies: Blood
Artist is 0/1, Restless Bloodseeker 1/3, Gluttonous Guest 1/4. This is closer to a dozen clocks plus six
bodies that only become clocks once a lord lands.

### WHY 16 SWAMPS AND NOTHING ELSE

This is the only one of these four decks with a completely trivial mana base, and it is deliberate. The
binding requirements are **{1}{B}{B} on turn three** (Captivating Vampire) and **{2}{B}{B} plus a {B}
activation on turn four** (cast and flip Bloodline Keeper).

The deterministic splash filter qualified red and named three genuinely playable cards — Stensia Masquerade
in particular is a real tribal payoff. All three independent sketchers declined it anyway, and the grill
showed the case is stronger than any of us first argued: the cube's only two black-red duals are Geothermal
Bog, which enters tapped unconditionally, and Haunted Ridge, which is a **rare** and therefore unplayable
against a rare budget already spent at 5 of 5. That leaves **one** usable red source, always tapped, attacking
the exact double-black consistency the splash would be serving. And Olivia Voldaren is a mythic, so playing it
would have been an outright cap violation.

### THE AXIS THE BUILD GOT WRONG

The deck's weakest measured axis is evasion, and the first version of this list did not see it. Natively
evasive bodies: **2 of 20 creature copies (10%)** — Voldaren Bloodcaster and Bloodline Keeper — against a cube
the dossier measures at 58 evasion cards, **20.9% density**. Two anthems only convert to damage if bodies
connect.

The deck's other two flying routes both charge rent every turn:

- Olivia's Dragoon — "Discard a card: This creature gains flying until end of turn" — costs a card.
- Falkenrath Torturer — "Sacrifice a creature: This creature gains flying until end of turn" — costs a body,
  and that body is almost always a Vampire, shrinking the very count the whole deck multiplies.

Cobbled Wings ("Equipped creature has flying. Equip {1}") grants it once and keeps granting it, is colourless
so it adds no pressure to the double-black curve, and is a common so it costs nothing against the full rare
cap. It had been seen by **no seed band** and evaluated nowhere in the build until the grill found it.

### PLAY PATTERN

Tragic Slip is a one-mana unconditional kill here rather than a conditional trick: its morbid clause needs a
creature to have died this turn, and Falkenrath Torturer supplies one for **zero mana at instant speed**.

Attacking into blockers is profitable rather than a cost, because Blood Artist reads "whenever this creature
**or another creature** dies" — with no controller restriction. Their blocker dying drains them. That single
omitted word is also the deck's entire answer to a go-wide opponent, since it runs no sweeper and does not
want one.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:5  2:12  3:6  4:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.45: Bloodline Keeper // Lord of Lineage@0.85, Sorin, Imperious Bloodlord@0.85, Metallic Mimic@0.75) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 15 copies (effective 14.4: Ecstatic Awakener // Awoken Demon@0.7, Cobbled Wings@0.7) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 70%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper, and the deck does not want one: its own plan is the wider board -- 19 creature copies of 24 nonlands. The cube's mass removal is 4 sweepers in ~300 cards (1.4% density) and none is black at a rarity this deck can afford against a fully spent 5-rare cap. Against a go-wide opponent the answer is Blood Artist: 'whenever this creature OR ANOTHER CREATURE dies, target player loses 1 life and you gain 1 life' has no controller restriction, so a mutual board stall bleeds THEM -- plus a lord-pumped board that simply outsizes 1/1s. Sever the Bloodline is sideboarded to exile a token swarm in one card. (Corrected at Phase 9: this entry previously also named Killing Wave, which was cut from the sideboard because it was being boarded into precisely the matchup where THIS deck has the wider board and therefore pays the larger per-creature life tax.)
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  CONCEDED  noncreature_permanents: HARD, UNFIXABLE in this colour. The cube holds 24 artifacts and 25 enchantments, and every answer that exists is white (Angelic Purge, Cathar Commando, Hopeful Initiate) or red (Abrade). Mono-black has ZERO at any rarity, so no maindeck or sideboard card can address the class. The only remedy would be abandoning mono-black, which would cost the {1}{B}{B} turn-3 and {2}{B}{B} turn-4 consistency the lords require -- the deck's entire reason for being mono-coloured.
  CONCEDED  stack: Black in this cube contains no counterspells at any rarity; the deck answers permanents after they resolve with 2 Tragic Slip and Infernal Grasp.
  CONCEDED  graveyard: No graveyard interaction on either board, and none is required: dossier.structural_census.graveyard_hate is an EMPTY list, meaning the cube contains no dedicated graveyard hate for any deck. Recursive threats are covered by the sideboarded Eaten Alive and Sever the Bloodline, both of which EXILE.
```

_No WARN-tier structural flags were raised: curve, assembly, goldfish and coverage all returned PASS._


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Three mana sinks that need no cards in hand: Bloodline Keeper's '{T}: Create a 2/2 black Vampire creature token with flying' (free, every turn); Indulgent Aristocrat's '{2}, Sacrifice a creature: Put a +1/+1 counter on each Vampire you control', which converts spare mana and a spare body into a permanent team-wide pump; and Cobbled Wings' 'Equip {1}', which re-arms flying onto a fresh body after a trade. Ecstatic Awakener's '{2}{B}, Sacrifice another creature: Draw a card' is a fourth. Sorin also ticks up every turn regardless. CORRECTED at Phase 9 round 2 per Challenger R3: the previous text claimed Awakener turns flood into 'cards AND A LARGER BODY'. The bundle contains no back-face oracle text for Awoken Demon, so that half was never verifiable and is withdrawn -- the card is claimed here only for the draw. |
| `screw` | mitigation | The curve is 5 one-drops and 12 two-drops of 24 nonland cards, with a single card above MV 3 (Bloodline Keeper at 4) -- CORRECTED at Phase 9 round 2 per Challenger R1, which caught this entry still quoting the pre-repair 6-and-11 while structural_checks.curve in the same bundle already read {1:5, 2:12}. The structural gate measured keepable hands at 85% against the 0.80 threshold, a play by turn two in 99% of hands and by turn three in 100%. Asylum Visitor also converts a stalled, empty-handed turn into cards: 'At the beginning of each player's upkeep, if that player has no cards in hand, you draw a card and you lose 1 life.' HONEST DISCLOSURE, recorded at the Challenger's insistence rather than the flattering figure: the headline turn-1 rate of 70% understates the real cost of the Phase 9 swap, because TWO of the five one-drops are Tragic Slip, an instant rather than a turn-1 play. Turn-one BODIES fell from 4 copies to 3, so P(a turn-1 creature) is 44.8% on the play and 49.8% on the draw -- down from 55.2% / 60.7%, a ~10pp drop, twice the headline number. |
| `decapitation` | mitigation | The lords are removal magnets and the deck is built so that losing one does not lose the game. The pump that matters most is a COUNTER, not a static ability: Indulgent Aristocrat's '{2}, Sacrifice a creature: Put a +1/+1 counter on each Vampire you control' and Sorin's '+1: ...If it's a Vampire, put a +1/+1 counter on it' both leave stats that killing a lord cannot remove, as does Metallic Mimic's counter on every Vampire that entered after it. Sorin himself is a planeswalker, which creature removal cannot touch, and his -3 redeploys a Vampire from hand. Payoff redundancy is 6 copies across 5 cards. |
| `gas-out` | mitigation | Four distinct refuel effects, corrected at Phase 9 round 2 for copy counts (Challenger R2): Asylum Visitor x2 draws whenever either player is empty-handed; Ecstatic Awakener x1 (NOT x2 -- one copy was cut for Cobbled Wings) converts a spent creature into a card for {2}{B}; Voldaren Bloodcaster's Blood tokens ('{1}, {T}, Discard a card, Sacrifice this token: Draw a card') filter dead draws; and Olivia's Dragoon x2 provides the free repeatable 'Discard a card' outlet that makes both the Blood tokens and the deck's Madness cards live. Decisively, Bloodline Keeper produces a body every turn from an EMPTY hand, which is the mode's actual question. |
| `raced` | mitigation | This deck is built to win races rather than survive them. Indulgent Aristocrat has lifelink on turn one; Sorin's +1 grants deathtouch AND lifelink to any attacker every turn; and Blood Artist's 'whenever this creature or another creature dies, target player loses 1 life and you gain 1 life' is a two-point swing on every trade -- including on THEIR creatures dying, since the text is not restricted to creatures you control. A lord-pumped lifelink attack swings the race by its full damage twice over. Gluttonous Guest is a {2}{B} 1/4 that also blocks the cube's small aggressive creatures while the lords come online. |
| `disruption-fizzle` | accepted | REVISED at Phase 9. The critical turn is an alpha strike, and one well-timed removal spell on a lord before combat genuinely costs this deck a turn of damage. Both grill agents independently verified the core claim against the pool: regexing every black-legal card for hexproof, indestructible, protection or counterspell returns only Emrakul at {13} (uncastable here) and Westvale Abbey's melded back face -- there is NO protection granter and NO counterspell in mono-black in this cube at any rarity. What mitigating it WOULD cost is the deck's identity, and the arithmetic is harsher than I first wrote: the cube's only black-red duals are Geothermal Bog (common, enters tapped unconditionally) and Haunted Ridge (RARE -- unplayable against a cap already at 5/5), so a splash means ONE usable red source that always enters tapped, against {1}{B}{B} on turn 3 and {2}{B}{B} plus {B} on turn 4. CORRECTION per Challenger F13 and the Proposer, who both caught the same overstatement: my earlier phrasing 'cannot be mitigated by card choice' was FALSE, and contradicted by this deck's own sideboard. 2 Village Rites are boarded precisely for this -- in response to removal, cash the doomed creature for two cards. That does not save the attack, so the mode is not solved, but it is partially mitigated. The honest reading is accepted-with-residual-mitigation, not a clean acceptance. The damage is also distributed: 17 Vampire copies means the board still attacks without any single lord, and the pumps that matter most are +1/+1 COUNTERS (Indulgent Aristocrat, Sorin, Metallic Mimic) which survive the lord dying. |


### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Gryff, Elder Deep-Fiend, It of the Horrid Swarm, Decimator of the Provinces, Emrakul, the Promised End, Griselbrand, Abundant Maw, Distended Mindbender | Emerge Eldrazi and eight-plus-mana cards this aggro deck cannot cast: Wretched Gryff, Elder Deep-Fiend, It of the Horrid Swarm and Decimator of the Provinces all demand blue or green emerge pips this deck does not produce, leaving a {7}-{10} generic hard-cast; Emrakul at {13} and Griselbrand at {4}{B}{B}{B}{B} are uncastable inside a turn-6 clock; Abundant Maw's emerge {6}{B} is payable but spends a Vampire from a tribal board to buy a non-Vampire body, which is a net loss to every lord in the deck; Distended Mindbender is eight mana of hand disruption in a deck that wins by attacking. |
| Heartless Summoning, Triskaidekaphobia, Cryptolith Fragment // Aurora of Emrakul, Tree of Perdition | Actively hostile to this deck's own board: Heartless Summoning's 'Creatures you control get -1/-1' kills Indulgent Aristocrat, Blood Artist, Voldaren Bloodcaster and every 1/1 token this tribal deck deploys; Triskaidekaphobia's 'each player with exactly 13 life loses the game' is a hazard for a deck that gains life via lifelink; Cryptolith Fragment drains US as well as them; Tree of Perdition overwrites the life totals an aggressive deck has already reduced. |
| Lupine Prototype, Angel's Tomb, Neglected Heirloom // Ashmouth Blade | CORRECTED REASONS (Challenger F4). These three were swept under 'no tribal relevance, no evasion and no life gain', which their oracle text falsifies, and each reads a QUANTITY of other cards, so cutting them at 5A on an adjective was doubly wrong. Recounted against the finished list: LUPINE PROTOTYPE ({2} 5/5) reads 'This creature can't attack or block unless a player has no cards in hand' -- the same empty-hand quantity 2 Asylum Visitor read, and 2 Olivia's Dragoon can empty our own hand for free. Cut anyway on a real mechanism: the condition is SYMMETRIC and not self-satisfiable, since we cannot force the opponent's hand empty, so a 5/5 that cannot attack on most turns is not a clock. ANGEL'S TOMB ({3}) reads 'Whenever a creature you control enters, you may have this artifact become a 3/3 white Angel artifact creature with flying' -- it DOES fly, and the creature-ETB rate is 20 of 24. Cut on the rate instead: it is a three-mana permanent that deals no damage the turn it lands and is not a creature on the opponent's turn, so it neither blocks nor counts as a Vampire. NEGLECTED HEIRLOOM ({1}) reads 'When equipped creature transforms, transform this Equipment' -- a transform count, and this deck runs 5 transforming permanents of 24. Cut on rate: +1/+1 for two mana of setup does not move a board that two lords already pump. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.67 adj [MV 2.12 vs 2.5, 1 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
       card_pool_rules: {"base": "cube_mainboard", "multipliers": {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}, "only_from": {}, "excluded": []}
[PASS] commons_uncommons_max_2: PASS -- verified by cube_search.get_max_copies for every name on both boards, including the cross-board Infernal Grasp (1 main + 1 side = 2, at the uncommon cap).
[PASS] rares_mythics_max_1: PASS -- every rare/mythic appears exactly once.
[PASS] rares_mythics_max_5_total: PASS -- exactly 5: Captivating Vampire (R), Metallic Mimic (R), Voldaren Bloodcaster (R), Bloodline Keeper (M), Sorin Imperious Bloodlord (M). Sideboard contains ZERO.
[PASS] basics_unlimited: PASS -- 16 Swamps are format-supplied and exempt.
[PASS] all_cards_from_cube: PASS -- exact-name match against the working pool for all 50 cards.
[PASS] colour_legality: PASS -- the deck is mono-black; every nonland card is black or colourless (Metallic Mimic). Zero splash cards played.
```