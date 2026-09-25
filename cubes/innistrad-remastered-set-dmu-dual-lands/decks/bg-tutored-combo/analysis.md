---
deck_name: "bg-tutored-combo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-08-31T21:34:08Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x6   Forest
  x6   Swamp
  x2   Evolving Wilds                               fetches a basic
  x2   Haunted Mire                                 Swamp Forest, taps for BG, enters tapped
```

### CREATURES (13)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Blood Artist                                 x2    B     Engine/Outlet                  U
  2  Butcher Ghoul                                x2    B     Enabler/Fodder                 C
  2  Duskwatch Recruiter // Krallenhorde Howler   x2    G     Infrastructure/Consistency     U
  2  Scorned Villager // Moonscarred Werewolf     x2    G     Infrastructure/Consistency     C
  3  Eccentric Farmer                             x2    G     Infrastructure/Consistency     C
  3  Splinterfright                               x2    G     Payload/Payoff                 U
  4  Tree of Perdition                            x1    B     Payload/Payoff                 M
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Tragic Slip                                  x2    B     Interaction/Disruption         C
  1  Traverse the Ulvenwald                       x1    G     Infrastructure/Consistency     R
  2  Collective Brutality                         x1    B     Interaction/Disruption         R
  2  Grapple with the Past                        x2    G     Infrastructure/Consistency     C
  3  Eldritch Evolution                           x1    G     Infrastructure/Consistency     R
  3  Maelstrom Pulse                              x1    BG    Interaction/Disruption         R
```

### OTHER SPELLS (3)

```
CMC  Card                                         Qty   Color Role                           Rar
  3  Cryptolith Fragment // Aurora of Emrakul     x1    C     Infrastructure/Consistency     U
  4  Triskaidekaphobia                            x2    B     Payload/Payoff                 U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Crawl from the Cellar                        x1    B     Infrastructure/Consistency: vs removal-heavy d C
Ambush Viper                                 x2    G     Interaction/Disruption: vs ground aggro. 'Flas C
Infernal Grasp                               x2    B     Interaction/Disruption: vs single large threat U
Murderous Compulsion                         x2    B     Interaction/Disruption: vs creature-dense aggr C
Gluttonous Guest                             x2    B     Infrastructure/Consistency: vs aggro. A 1/4 fo C
Sever the Bloodline                          x1    B     Interaction/Disruption: vs token strategies. ' U
```

## ANALYSIS

### DECK IDENTITY

The Exactly Thirteen combo built as a search engine, with the search pointed where it can actually reach. Tree of Perdition ('{T}: Exchange target opponent's life total with this creature's toughness', printed 0/13) sets an opponent to exactly 13 and Triskaidekaphobia ends the game on the next upkeep. Tree is a single mythic copy, and green is in this deck for one reason: Eldritch Evolution sacrifices a mana-value-2 body and puts Tree ONTO THE BATTLEFIELD, with Butcher Ghoul's undying returning the fodder so the tutor costs no card. What green cannot do is find the other half - every search effect in this pool names a creature or a land, and Triskaidekaphobia is an enchantment. The deck answers that with two copies of the enchantment, a self-mill package that turns Splinterfright into an independent win condition, and the honest admission that this is the slowest of the four builds because it spends its slots on search rather than on speed.

### DECK IDENTITY

The Exactly Thirteen combo built as a search engine, with the search pointed where it can actually reach. Tree of Perdition ('{T}: Exchange target opponent's life total with this creature's toughness', printed 0/13) sets an opponent to exactly 13 and Triskaidekaphobia ends the game on the next upkeep. Tree is a single mythic copy, and green is in this deck for one reason: Eldritch Evolution sacrifices a mana-value-2 body and puts Tree ONTO THE BATTLEFIELD, with Butcher Ghoul's undying returning the fodder so the tutor costs no card. What green cannot do is find the other half - every search effect in this pool names a creature or a land, and Triskaidekaphobia is an enchantment. The deck answers that with two copies of the enchantment, a self-mill package that turns Splinterfright into an independent win condition, and the honest admission that this is the slowest of the four builds because it spends its slots on search rather than on speed.

### THE FINDING THAT REBUILT THIS DECK

The first draft of this list spent three of its five rare/mythic slots on tutors. The pool-blind skeleton critic killed it in one paragraph:

> Eldritch Evolution searches for "a **creature** card." Garruk's −1 searches for "a **creature** card." Traverse's delirium mode searches for "a **creature or land** card." **Triskaidekaphobia is an Enchantment.** Nothing in this slice tutors an enchantment.

That is correct, and it is a property of the pool, not a fixable oversight. Green can find Tree of Perdition; nothing in these colours can find the other half. Everything else about this build follows from accepting that rather than arguing with it:

- **Garruk Relentless was cut.** Its front face's only loyalty-lowering ability is "0: Garruk deals 3 damage to **target creature**" — against an empty board it can never reach 2 loyalty and never transforms, so the tutor mode depends on the opponent presenting a creature. Its back-face "−3: … get **+X/+X**" also raises Tree's toughness and would set the opponent to 13+X.
- **Somberwald Sage was cut.** "Spend this mana only to cast **creature spells**" cannot cast Triskaidekaphobia, and at mana value 3 it cannot make a mana-value-4 Tree arrive before turn 4 anyway. It accelerated zero turns.
- **The deck now says what it does:** it finds Tree, and it *draws* Triskaidekaphobia.

### WHAT ELDRITCH EVOLUTION ACTUALLY DOES HERE

This is the one keystone the critic conceded, and it is the reason the path exists.

"Search your library for a creature card with mana value **X or less, where X is 2 plus the sacrificed creature's mana value**. Put that card **onto the battlefield**."

Tree of Perdition is mana value 4, so the sacrifice must be mana value 2 or more. This list runs **12 such bodies out of 13 creature cards** — there is no mana-value-1 creature anywhere in it, so there is no dead-fodder failure mode. And the best fodder is Butcher Ghoul, whose undying returns it, making the tutor card-neutral: one card in, Tree on the battlefield, the body back.

### THE SECOND REPAIR: MAKING THE BACKUP PLAN REAL

The first attempt to answer "what if Triskaidekaphobia never shows up" was Splinterfright ×2 plus Tamiyo's Journal. The Phase 9 Challenger showed both were cosmetic:

| Card | The problem |
|---|---|
| Tamiyo's Journal | {5}, cast turn 5 at best, Clues at upkeeps 6/7/8 — **first tutor activation turn 8**, and the only Clue source in the deck is itself |
| Splinterfright | Only **1 of 24** nonland cards filled the graveyard, so it entered as a **0/0 and died to state-based actions before its own first upkeep** |
| Traverse's delirium | The Sorcery card type came from Maelstrom Pulse alone, because **Eldritch Evolution exiles itself** and Traverse cannot count itself |

The repairs were structural, not numerical. **Eccentric Farmer ×2** ("When this creature enters, **mill three cards**") took dedicated graveyard fill from 1 to 4 cards and is itself a mana-value-3 Evolution body. **Collective Brutality** replaced Tamiyo's Journal in the rare budget, giving a second Sorcery for delirium, the deck's only answer to the stack, and — genuinely useful for the kill — "Target opponent loses 2 life and you gain 2 life", an exact 2-step that turns an opponent on 15 into an opponent on exactly 13.

And **the thesis turn moved from 6 to 8 and is stated as such.** Two of the five cards holding the win-condition gate up could not function by turn 6. This is the slowest of the four builds of this archetype, and that is the price of the path: five rare slots and six nonland slots spent on search rather than on speed.

### THE MANA IS THE REAL TAX

Two colours on this cube costs more than it looks. The only non-rare B/G dual is Haunted Mire, which enters tapped, and Deathcap Glade is a rare against a budget already at 5 of 5. Measured over the actual 40:

| Gate | Probability |
|---|---|
| Three lands by turn 3 (on the play / on the draw) | 70.8% / 80.0% |
| `{1}{G}{G}` for Eldritch Evolution on turn 3 | 58.3% |
| …with both green sources **untapped** | 53.9% |
| `{3}{B}` for Tree or Triskaidekaphobia on turn 4 | 63.8% |

Eldritch Evolution is a turn-4 card in practice, not a turn-3 card. That is a second reason the thesis turn is 8 rather than 6, and it is stated rather than hidden behind the goldfish figure — note that the 84% "three lands by turn 3" in the structural report is conditioned on *kept* hands, and the unconditional number is 70.8%.

### WHAT GREEN BUYS BESIDES SEARCH

One thing, and it is the only reason this build answers a threat class the other three cannot: **Maelstrom Pulse**, "Destroy target nonland permanent and all other permanents with the same name." Mono-black in this cube has no artifact or enchantment answer at any rarity. This is the only deck of the four that has one.

Graveyard remains conceded, and doubly so: the cube's structural census lists zero graveyard hate, the only usable answer is a rare against a spent budget, and this deck's own Splinterfright, Eccentric Farmer, Grapple with the Past and Traverse all read its graveyard. Hating it would cost more than it gains.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (24 nonland):  1:3  2:11  3:7  4:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  win_condition: 5 copies (effective 3.6: Splinterfright@0.6, Splinterfright@0.6, Cryptolith Fragment // Aurora of Emrakul@0.4) → p=0.76 (need ≥ 0.75)
  PASS  tree_access: 7 copies (effective 4.1: Eldritch Evolution@0.9, Duskwatch Recruiter // Krallenhorde Howler@0.5, Duskwatch Recruiter // Krallenhorde Howler@0.5, Traverse the Ulvenwald@0.4, Grapple with the Past@0.4, Grapple with the Past@0.4) → p=0.80 (need ≥ 0.75)
  PASS  graveyard_fill: 6 copies (effective 5.4: Splinterfright@0.7, Splinterfright@0.7) → p=0.89 (need ≥ 0.75)
  PASS  interaction: 4 copies → p=0.79 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 44%  T2 95%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Maelstrom Pulse
  OK        single_large_threat: Tragic Slip, Maelstrom Pulse, Collective Brutality
  OK        noncreature_permanents: Maelstrom Pulse
  OK        stack: Collective Brutality
  CONCEDED  graveyard: CONCEDED, and doubly forced. The cube's structural_census lists zero graveyard hate, and the pool's only usable answer - Invasion of Innistrad's '{2}{B}: Exile target card from a graveyard' - is a rare against a budget already fully spent at 5 on the search package and the noncreature answer. It is also the concession this deck should least want to withdraw: its own Splinterfright, Eccentric Farmer, Grapple with the Past and Traverse's delirium clause all read the graveyard, so symmetric hate would cost more than it gains.
```

- Curve PASSED. Distribution 1:3 2:11 3:7 4:3 across 24 nonland cards; nothing above mana value 4, which is what lets a 16-land two-colour deck function.
- Assembly PASSED on all four declared roles at thesis turn 8 (win_condition p=0.76, tree_access p=0.80, graveyard_fill p=0.89, interaction p=0.79).
- THE THESIS TURN MOVED FROM 6 TO 8, AND THIS IS THE MOST IMPORTANT LINE IN THIS RECORD. The Phase 9 Challenger established that the Step-0 repair had been accepted as a COUNT rather than tested against the thesis turn: Tamiyo's Journal's first tutor activation is turn 8, Splinterfright was a 0/0 dying on resolution because only 1 of 24 cards filled the graveyard, and Traverse's delirium was gated on a single Sorcery because Eldritch Evolution exiles itself. Two of the five cards holding the win_condition gate up could not function by turn 6. The response was to repair the deck AND to state the honest number: Tamiyo's Journal was cut for Collective Brutality, Eccentric Farmer x2 was added so Splinterfright and delirium both work, and the thesis turn was set to 8. This is the slowest of the four builds, and that is the price of the path: five rare slots and six nonland slots spent on search rather than on speed.
- Goldfish PASSED at 83% keepable against an 80% threshold. Note, recorded because the Challenger simulated it independently: the 84% figure for three lands by turn 3 is conditioned on KEPT hands; unconditionally it is 70.8% on the play and 80.0% on the draw, and the turn-3 {1}{G}{G} for Eldritch Evolution lands 58.3% of the time (53.9% with both green sources untapped). Eldritch Evolution is a turn-4 card in practice, which is part of why the thesis turn is 8.
- Coverage PASSED with ONE concession. This is the only build of the four that answers noncreature permanents, and after Collective Brutality was maindecked it is the only one that answers the stack. Graveyard remains conceded and the concession is doubly forced: the cube's structural_census lists zero graveyard hate, the pool's only usable answer is a rare against a spent budget, and this deck's own Splinterfright, Eccentric Farmer, Grapple with the Past and Traverse all read the graveyard.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Duskwatch Recruiter is a {2}{G} mana sink that converts every surplus land into three cards looked at and a creature found, every turn. Tamiyo's Journal turns excess mana into Clues and then into a tutor. Cryptolith Fragment x2 and Scorned Villager x2 make flooded hands castable rather than idle. At 16 lands with 14 of 24 nonland cards at mana value 2 or less, the flood tail is short. |
| `screw` | mitigation | 14 of 24 nonland cards cost 2 or less, and the deck's cheapest functional opening is a turn-2 Scorned Villager into a turn-3 four-mana turn. Evolving Wilds x2 and Cryptolith Fragment x2 fix the colours; Traverse the Ulvenwald without delirium still reads 'Search your library for a basic land card', which is exactly the mode a screwed hand wants. Goldfish reports 84% keepable and 85% reaching 3 lands by turn 3 — the lowest of the four builds, and the honest price of two colours on a cube whose only non-rare B/G dual enters tapped. |
| `decapitation` | mitigation | This build exists BECAUSE Tree of Perdition is one copy, and the Phase 9 Challenger's audit of that claim was accepted rather than argued with. Access that functions inside the thesis window: Eldritch Evolution (weight 0.9 - it puts Tree onto the battlefield off any of the 12 mana-value-2-or-greater bodies, and Butcher Ghoul's undying returns the fodder so the tutor is card-neutral), Duskwatch Recruiter x2 (0.5 each - repeatable {2}{G} digging against a 13-of-40 creature density), Traverse the Ulvenwald (0.4 - now that Eccentric Farmer x2 make delirium a real state), and Grapple with the Past x2 (0.4 each - recursion after Tree dies). Phase 6b measures this at p=0.80 at turn 8, and the turn was corrected from 6 to 8 precisely because the earlier figure counted a Tamiyo's Journal that fires on turn 8 and a delirium that could not switch on. If Tree is exiled outright, Splinterfright x2 wins without it. |
| `gas-out` | mitigation | Duskwatch Recruiter x2 is the engine: '{2}{G}: Look at the top three cards of your library. You may reveal a creature card from among them and put it into your hand' is repeatable selection at no card cost. Eccentric Farmer x2 and Grapple with the Past x2 both replace themselves in effect by returning a land or creature card from the graveyard. Collective Brutality 2-for-1s when escalated. Net-positive-card count: 3 of 24 (Grapple with the Past x2, and Duskwatch Recruiter as repeatable selection). |
| `raced` | accepted | A 16-land two-colour deck whose kill lands on turn 6 will sometimes lose to this cube's one-drop aggro decks before it assembles. Mitigating further would mean cutting search for blockers — but the search package IS this path's identity, and the whole reason it exists as a distinct build from the mono-black fortress is that it refuses to accept a 1-of mythic it cannot find. Trading tutors for walls collapses it into a worse version of that other deck. The concession is priced into the sideboard: Ambush Viper ('Flash. Deathtouch'), Murderous Compulsion x2, Gluttonous Guest x2 and Infernal Grasp are six anti-aggro cards, and Gluttonous Guest's 1/4 body is also a mana-value-3 Eldritch Evolution target that reaches mana value 5. |
| `disruption-fizzle` | mitigation | The critical turn is the upkeep on which Tree is activated in response to the Triskaidekaphobia trigger; Tree's ability carries no timing restriction, so the opponent must answer it at instant speed with the trigger already on the stack, and if they do the trigger still resolves and the game continues. Beyond that, this deck's answer to interaction is redundancy rather than protection: seven cards of tree_access mean removal on Tree is a delay, not a loss, and Grapple with the Past retrieves it from the graveyard at instant speed. The honest gap is the stack — this deck has no counterspell and no discard, which is why `stack` is written as a concession rather than glossed. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Eccentric Farmer | CUT AT 5A, RECOVERED AT PHASE 9. The original bucket reason ('a land in hand does not fix') never read the card's first clause. Oracle: 'When this creature enters, MILL THREE CARDS, then you may return a land card from your graveyard to your hand.' Graveyard fill is this deck's scarcest resource - before the repair only 1 of 24 nonland cards filled the yard, which is why Splinterfright was a 0/0 and why Traverse's delirium was unreachable. Two Farmers take it to 5 of 24, and at mana value 3 each is also Eldritch Evolution fodder reaching mana value 5. |
| Clear Shot | CORRECTED REASON. The earlier bucket said 'combat tricks that require an attacking or blocking creature'; the oracle requires neither: 'Target creature you control gets +1/+1 until end of turn. It deals damage equal to its power to target creature you don't control.' At instant speed on Ambush Viper (deathtouch, power 2 to 3) it kills anything. It is cut on a real count instead: this list's creature powers are 0 (Tree, Defender), * (Splinterfright, often 0-2 early), 2 (Duskwatch), 2 (Eccentric Farmer), 1 (Scorned Villager), 1 (Butcher Ghoul), 0 (Blood Artist) - so the damage it deals is 1-3 for {2}{G}, against Tragic Slip's -13/-13 for {B}. |
| Bramble Wurm | CORRECTED REASON. The earlier bucket said 'no life-total text', which is factually wrong about the card: 'When this creature enters, you gain 5 life' and '{2}{G}, Exile this card from your graveyard: You gain 5 life.' It is cut on the number instead: a 5-point step from 20 reaches 15, and 15 is not 13; Collective Brutality's exact -2/+2 and Blood Artist's -1/+1 are the steps this kill number needs, and {6}{G} is past the thesis turn at 16 lands. |
| Killing Wave | CORRECTED REASON. The earlier cut swept it into 'the mono-black aristocrats package', which is a misclassification: 'For each creature, its controller sacrifices it unless they pay X life' is a scalable sweeper AND an opponent-side life dial of a size the pilot chooses, and Tree of Perdition at 0/13 survives any X. It is cut because it is symmetric on a plan that loses at exactly 13: this list has 13 creature cards including two mana dorks and the combo piece, so declining to pay costs the board and paying costs the pilot's own life total. It is the strongest single swap candidate if the metagame is go-wide. |
| Noose Constrictor | CORRECTED REASON. The earlier bucket said 'green bodies with no tutor, ramp, sacrifice or life-total text', which misses the clause that matters: 'Discard a card: This creature gets +1/+1 until end of turn' is a free, unlimited, repeatable discard outlet — card types into the graveyard on demand, which is what delirium wants. It is cut on the count: this deck holds only 2 Sorceries (Maelstrom Pulse, Collective Brutality), so there is rarely a spare one to pitch. And the better version of the same fix is already in the list — Collective Brutality's 'Escalate—Discard a card' is itself an on-demand, CHOSEN card type into the graveyard, which beats both discarding at random and milling for the Sorcery leg. |
| Edgar's Awakening | CORRECTED REASON. The earlier bucket swept it into the aristocrats package; it is in fact the ONLY effect in the pool that returns Tree of Perdition to the BATTLEFIELD rather than to hand, which is the decapitation answer this whole path is built around. Cut on cost: at {3}{B}{B} it costs more than Tree itself, so the recursion turn is a do-nothing turn, where Grapple with the Past returns Tree to hand for {1}{G} at instant speed and Eldritch Evolution puts a fresh one into play for {1}{G}{G}. |
| Heartless Summoning | ANTI-SYNERGY: 'Creatures you control get -1/-1' makes Tree of Perdition a 0/12, so its exchange sets 12 and Triskaidekaphobia never fires; it also kills every 1-toughness Eldritch Evolution body in the list. |
| Griselbrand | 'Pay 7 life: Draw seven cards' is a 7-point self-dial and 20 - 7 is exactly 13, the number this deck's own enchantment kills for; {4}{B}{B}{B}{B} is also uncastable on a two-colour mana base. |
| Chalice of Life // Chalice of Death | The transform clause needs 'at least 10 life more than your starting life total' — 30 life, ten untouched activations — before the '{T}: Target player loses 5 life' side exists, against a turn-6 thesis; and gaining 1 at a time walks a pilot on 12 onto exactly 13. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.42   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.77 adj [MV 2.42 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  44.0%  prod  50.0%  gap  -6.0pp  [OK]
  G  demand  56.0%  prod  50.0%  gap  +6.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] commons/uncommons max 2 copies: PASS - highest count across the 50-card pool is 2; verified by Phase 5C check 3
[PASS] rares/mythics max 1 copy each: PASS - Tree of Perdition (M), Eldritch Evolution (R), Traverse the Ulvenwald (R), Maelstrom Pulse (R), Collective Brutality (R), one each, all mainboard
[PASS] max 5 rares/mythics across MB+SB: PASS - 5 used, all mainboard; sideboard contains zero rares or mythics. AT THE CAP. Tamiyo's Journal was cut from this budget at Phase 9 and Collective Brutality took the slot.
[PASS] cross-board copy totals: PASS - Infernal Grasp 0 mainboard + 2 sideboard = 2 (uncommon); Ambush Viper 0 + 2 = 2 (common); every other name is at or under its multiplier
[PASS] basic lands exempt (format-supplied): PASS - 6 Swamp + 6 Forest; Haunted Mire x2 and Evolving Wilds x2 are cube commons within the 2-copy limit
[PASS] all cards from the cube mainboard or basics: PASS - verified by Phase 5C check 2 (exact-name membership)
```