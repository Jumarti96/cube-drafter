---
deck_name: "bg-aristocrats-emerge"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BG"
format: "40-card"
built_at: "2026-08-27T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  1x Deathcap Glade              BG dual, untapped with two other lands
  5x Forest                      
  2x Haunted Mire                BG dual, enters tapped
  10x Swamp                       
```

### CREATURES (15)

```
CMC  Card                        Qty   Color  Role                                                                                     Rar
  1  Young Wolf                  x1    G      Undying fodder — two deaths from one card                                                C
  2  Blood Artist                x2    B      Drain payoff — the kill mechanism                                                        U
  2  Butcher Ghoul               x2    B      Undying fodder — two deaths from one card                                                C
  3  Falkenrath Torturer         x2    B      Free repeatable sacrifice outlet                                                         C
  3  Morbid Opportunist          x2    B      Death payoff — converts the stream into cards                                            U
  8  Abundant Maw                x2    C      Emerge payoff — drains 3 on cast                                                         C
  8  Ghoultree                   x2    G      Fodder — mana-value-8 body cast for 2-4 / 10-10 beater                                   U
  8  It of the Horrid Swarm      x1    C      Emerge payoff — two Insect tokens = two more drain triggers; single {G} off a Ghoultree  C
 10  Decimator of the Provinces  x1    C      Emerge payoff — converts a wide board into lethal                                        R
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                        Qty   Color  Role                                                                                     Rar
  1  Eaten Alive                 x1    B      Interaction — exile removal, sacrifice as cost                                           C
  1  Tragic Slip                 x2    B      Interaction — morbid removal, always live here                                           C
  2  Infernal Grasp              x2    B      Interaction — unconditional removal                                                      U
  3  Maelstrom Pulse             x1    BG     Interaction — the only artifact/enchantment answer in these colours                      R
```

### OTHER SPELLS (1)

```
CMC  Card                        Qty   Color  Role                                                                                     Rar
  2  The Meathook Massacre       x1    B      Drain payoff + scalable sweeper                                                          M
```

## SIDEBOARD (10)

```
Card                        Qty   Color  Rar  Role                                When to board in
Sever the Bloodline         x2    B      U    Wide-board / exile answer           vs token and duplicate-heavy decks, and vs recursive threats — exile-by-name answers a swarm, and exile beats anything that returns from the graveyard
Deadly Allure               x2    B      U    Removal-by-trade                    vs single large threats — deathtouch plus 'must be blocked this turn if able' forces the trade, and the {G} flashback makes it two answers in one card
Ambush Viper                x2    G      C    Removal-by-trade                    vs aggressive creature decks — flash deathtouch at two mana trades with anything, and the body is drain fuel afterwards
Skirsdag High Priest        x1    B      R    Threat engine                       vs grindy or controlling decks — morbid 'Create a 5/5 black Demon creature token with flying' is live every turn in a deck that kills its own creatures, and it converts a stalled board into a clock
Geistcatcher's Rig          x1    C      U    Anti-flier / mana-value-6 fodder    vs decks with FLIERS specifically — 'deal 4 damage to target creature with flying'. Stated precisely: the cube's 58-card 'evasion' class also contains equipment, auras, menace and trample, none of which this answers, so the true denominator is materially smaller than 58. It is also a colourless mana-value-6 emerge battery: sacrificed to Abundant Maw it erases the full {6} generic exactly as a Ghoultree does.
Morkrut Banshee             x1    B      U    Removal on a mana-value-5 body      vs creature decks — morbid 'target creature gets -4/-4' is live off any Falkenrath Torturer activation, and at mana value 5 it is the deck's second-largest emerge payment after Ghoultree
Village Rites               x1    B      C    Card draw off the sacrifice engine  vs grindy and attrition decks — 'sacrifice a creature. Draw two cards' at instant speed, where the sacrifice is itself a Blood Artist trigger and an undying body comes straight back; it is the direct answer to the mainboard's thin card draw
```

## ANALYSIS

### DECK IDENTITY

This deck does not need to connect to win. Blood Artist and The Meathook Massacre turn every creature death into life loss, free sacrifice outlets keep the stream running, and undying bodies mean most of those deaths cost no cards at all. Emerge is folded into the same engine rather than bolted on top: emerge's sacrifice is part of the spell's cost, so casting Abundant Maw is simultaneously a drain trigger, a card, and a 6/4 that drains three more on the way down. Ghoultree is the bridge between the two halves — cast cheap off a graveyard the deck fills by killing its own creatures, and worth mana value 8 when eaten, which turns Abundant Maw into a one-mana spell.

### THE SACRIFICE IS NOT A COST HERE

Every other emerge deck pays something to cast an Eldrazi: a body leaves the battlefield. This one gets paid for it.

Emerge's sacrifice is part of the spell's **cost**, paid on announcement — which means it is a creature dying, which means it triggers everything this deck is built on at once:

- `Blood Artist` — *"Whenever this creature or another creature dies, target player loses 1 life and you gain 1 life."*
- `The Meathook Massacre` — *"Whenever a creature you control dies, each opponent loses 1 life."*
- `Morbid Opportunist` — *"Whenever one or more other creatures die, draw a card."*
- `Tragic Slip`'s morbid — *"-13/-13 ... if a creature died this turn."*

So casting `Abundant Maw` is simultaneously a drain trigger, a card, a live `Tragic Slip`, and a 6/4 that drains three more on the cast trigger. The deck is paid three or four times for doing the thing it had to do anyway.

### THE BRIDGE BETWEEN THE TWO HALVES

`Ghoultree` is what connects the drain deck to the Eldrazi deck. *"This spell costs {1} less to cast for each creature card in your graveyard"* — and this deck fills its own graveyard by design rather than by milling: `Falkenrath Torturer` ×2 sacrifice for free, `Butcher Ghoul` and `Young Wolf` die twice each via undying, and every emerge cast puts a body there.

Its **mana value stays 8**. So:

| Sacrifice (mana value) | Abundant Maw `{6}{B}` | It of the Horrid Swarm `{6}{G}` | Decimator `{6}{G}{G}{G}` |
|---|---|---|---|
| **Ghoultree (8)** | **`{B}` = 1** | **`{G}` = 1** | **`{G}{G}{G}` = 3** |
| Morbid Opportunist / Falkenrath Torturer (3) | `{3}{B}` = 4 | `{3}{G}` = 4 | `{3}{G}{G}{G}` = 6 |
| Butcher Ghoul (2) | `{4}{B}` = 5 | `{4}{G}` = 5 | `{4}{G}{G}{G}` = 7 |
| Young Wolf (1), tokens (0) | 6–7 | 6–7 | 8–9 |

A one-mana `Abundant Maw` that drains three and leaves a 6/4 is the best rate in any of the four decks. Note also what the table shows about **tokens**: at mana value 0 they discount nothing at all. In this deck they are drain fuel and chump blockers, never emerge fodder — which is the opposite of the usual aristocrats instinct.

### THE CHEAPEST DECK OF THE FOUR

Eleven of the 22 nonland cards cost two mana or less, and the entire drain core — `Blood Artist`, `Tragic Slip`, `Butcher Ghoul`, `Young Wolf`, `Eaten Alive`, `The Meathook Massacre` at X=0 — operates on one or two lands. That shows up in the goldfish numbers, which are the best of the four builds: a play on turn one in **59%** of hands and turn two in **96%**.

It is also why this deck can afford to run **zero acceleration** (`accel_count` = 0). It does not need mana creatures because it does not need much mana.

### DECIMATOR IS THE CONDITIONAL CARD, AND THAT IS DELIBERATE

`Decimator of the Provinces` needs `{G}{G}{G}` off a base with **8 green sources of 18** in a deck that is 72% black by production. By turn seven you have seen roughly eight lands, about 3.6 of them green — so triple green is close to a coin flip.

That is stated rather than hidden. `Decimator` is the "if the green is there" closer. The emerge cards the mana is actually built for are `Abundant Maw` ×2 and `It of the Horrid Swarm`, each needing exactly **one** pip off a `Ghoultree`. The deck does not depend on `Decimator`; it depends on draining, and `Decimator` is what converts a stalled board into lethal on the games where the green cooperates.

### THE ONLY DECK OF THE FOUR THAT SPENDS A RARE SLOT ON A LAND

`Deathcap Glade` is the one untapped-capable black-green dual in the pool, and it costs one of the five rare/mythic slots. That is a real trade and worth defending explicitly: this deck's black requirement starts on **turn one** (`Tragic Slip`, `Eaten Alive`), and an always-tapped dual misses exactly those turns. In a deck whose whole advantage is being the cheapest of the four, a land that enters untapped is worth more than a fifth spell.

### WHAT THE KILL LOOKS LIKE WHEN INTERACTED WITH

Uniquely among the four builds, this deck has no critical turn to disrupt. The kill is incremental — one life at a time across many small deaths — so there is no announcement window an opponent can answer. Where a single turn does matter, the rules protect it: killing the fodder in response to an emerge announcement accomplishes nothing, because the sacrifice was already paid, *and it still triggered `Blood Artist` on the way*.

The piece most worth answering is `Blood Artist`, and it is redundant in kind rather than in copies: `The Meathook Massacre` is the same effect on an **enchantment**, which creature removal cannot touch, and `Morbid Opportunist` gives a third, different payoff for the same trigger. An opponent has to answer three different card types to turn the engine off.

### COUNT-DEPENDENT VERDICTS

Every card whose value is a function of how many others qualify, decided against **this** list (22 nonland cards) rather than in the abstract.

| Card | Verdict | Count against this list |
|---|---|---|
| Killing Wave | CUT | 'For each creature, its controller sacrifices it unless they pay X life.' This is the one deck of the four where the symmetry genuinely favours the caster: drain payoffs are 3 of 22 (Blood Artist x2, The Meathook Massacre), so every creature that dies on either side is a point of life loss. CUT anyway on a different count: the deck's own board is 5 expendable bodies plus tokens against an opponent who simply pays the life with a small board, and at X large enough to matter the caster is paying too. It is a finisher for a deck with a wider board than this one has. |
| Ghoultree | INCLUDE | INCLUDE. RECOUNTED: 'costs {1} less to cast for each creature card in your graveyard' — creature copies are 15 of 22 nonland cards (not 12 as first recorded), so the discount is better fed than the earlier note claimed. This deck fills its own graveyard by design rather than by milling: Falkenrath Torturer x2 sacrifice for free, Butcher Ghoul and Young Wolf die twice each via undying, and every emerge cast puts a body there. By turn 5 a realistic graveyard holds 3-5 creature cards, so expect {4}{G} to {2}{G}. Included for its mana value of 8, which is unchanged by the discount and turns Abundant Maw into a one-mana spell. |
| Indulgent Aristocrat | CUT | CUT. RECOUNTED: Vampires are 4 of 22 (Blood Artist x2, Falkenrath Torturer x2), NOT 0 as first recorded, so 'Put a +1/+1 counter on each Vampire you control' is a real effect on four bodies and this is a one-mana lifelink creature rather than the blank the earlier note implied. It still loses, on the outlet: its activation costs {2} where Falkenrath Torturer's costs nothing, and in a deck that wins by draining rather than by attacking, +1/+1 counters on creatures whose job is to die do not advance the plan. |
| Captivating Vampire | CUT | CUT. RECOUNTED: Vampires are 4 of 22, not 0, so 'Other Vampire creatures you control get +1/+1' is live on three other bodies. The steal still requires tapping FIVE untapped Vampires, which 4 copies cannot reach, and a lord effect is worth little to a deck whose creatures are sacrifice fodder. It is also a rare against a budget at 5 of 5. |
| Bloodline Keeper // Lord of Lineage | CUT | CUT. RECOUNTED: Vampires are 4 of 22, not 0, so it needs one more to transform rather than five from scratch, and it makes a 2/2 flier per turn which is genuine drain fuel. CUT on the rarity budget: it is a mythic and all five slots are spent on The Meathook Massacre, Decimator, Maelstrom Pulse, Deathcap Glade and Skirsdag High Priest. |
| Sorin, Imperious Bloodlord | CUT | CUT. RECOUNTED: Vampires are 4 of 22, not 0, so '+1: You may sacrifice a Vampire' and '-3: You may put a Vampire creature card from your hand onto the battlefield' are both live rather than blank. CUT on the rarity budget — mythic, budget at 5 of 5 — and because the -3 has only four legal targets in the list. |
| Voldaren Bloodcaster // Bloodbat Summoner | CUT | CUT. RECOUNTED: it is itself a Vampire, taking the count to 5 if played. The front half is live — it makes a Blood token per nontoken creature death, and nontoken deaths are frequent here. CUT on the transform: five Blood tokens is a high bar, and Blood tokens are ARTIFACTS rather than creatures, so unlike this deck's other outputs they are not sacrifice fodder for the drain engine. Rare, budget at 5 of 5. |
| Gravecrawler | CUT | CUT. RECOUNTED: Zombies are 4 copies across 2 names (Butcher Ghoul x2 and Ghoultree x2, a Zombie Treefolk), so 'You may cast this card from your graveyard as long as you control a Zombie' is live more often than in the other three builds — this is the best Gravecrawler home of the four. CUT purely on the rarity budget: it is a rare and all five slots are spent. It is the first card I would add if a slot came free. |
| Archghoul of Thraben | CUT | CUT. RECOUNTED: Zombies are 4 copies of 22, which is thin for a card whose only function is Zombie deaths and Zombie digs. |
| Metallic Mimic | CUT | CUT. RECOUNTED: the largest single creature type is a THREE-WAY TIE at 4 copies each — Vampire, Zombie and Eldrazi — not Zombie alone as first recorded. Naming any of the three puts a counter on four cards. CUT anyway: a 2/1 that adds +1/+1 counters does not advance a plan that wins by creatures dying, and counters actively turn OFF undying ('if it had no +1/+1 counters on it'). |
| Splinterfright | CUT | CUT. RECOUNTED: power and toughness equal creature cards in the graveyard — 15 of 22 are creatures and this deck fills its yard, so it would often be a 3/3 to 5/5 for three. CUT because its upkeep self-mill fights the emerge plan: milling Abundant Maw or Decimator strands the payoff, and unlike Deck B this list has no graveyard-to-hand recursion to get them back. |
| Moldgraf Millipede | CUT | Same graveyard-count scaling and the same problem, plus five mana on a curve whose whole point is that it operates at one to three. |
| Spider Spawning | CUT | A 1/2 Spider per creature card in the graveyard — a good numerator here, but {4}{G} demands green mana this black-primary base is not built to produce on a specific turn, and 1/2 bodies add drain triggers less efficiently than the undying package already does. |
| Lumberknot | CUT | 'Whenever a creature dies, put a +1/+1 counter on this creature' with hexproof — creature deaths in this deck are frequent, so this is the one build where Lumberknot would actually grow. CUT because it is a win-by-combat card in a deck that wins by drain: a hexproof 6/6 does not close a game the opponent is stabilising at 4 life any faster than Blood Artist already is. |
| Second Harvest | CUT | 'For each token you control, create a token that's a copy of that permanent' — tokens come only from It of the Horrid Swarm's cast trigger (two Insects, once), so the count is 0 on nearly every turn. |
| Cryptolith Rite | CUT | CUT. RECOUNTED: creature copies are 15 of 22, so it would produce mana. CUT because this is a two-colour deck whose curve tops out at three real mana; the fixing problem Rite solves is Deck C's, not this one's, and tapping bodies for mana competes with sacrificing them. |
| Heartless Summoning | CUT | CUT. RECOUNTED: 'Creature spells you cast cost {2} less' applies to 15 of 22 cards. CUT decisively on the cost side: 'Creatures you control get -1/-1' kills Blood Artist (0/1) outright — the deck's central payoff — kills Young Wolf and every 1/1 token, and neuters the undying package by pre-empting it. In this deck the accelerant destroys the payoff. |
| Traverse the Ulvenwald | CUT | Delirium needs four card types in the graveyard; this list has creature, land, instant (Tragic Slip x2, Infernal Grasp x2) and sorcery (Eaten Alive, Maelstrom Pulse), so four types is genuinely reachable. CUT on the rarity budget rather than the count — it is a rare, and Deathcap Glade and Maelstrom Pulse are better uses of a slot in a deck with no other fixing and no other artifact answer. |
| Tireless Tracker | CUT | One Clue per land drop, roughly 4 by turn 5 at two mana each. A rare against a spent budget, and Morbid Opportunist draws cards off a trigger this deck causes rather than off land drops. |
| Wrenn and Seven | CUT | Its -3 Treefolk sizes to land count, about 5 by turn 5; mythic against a spent budget. |
| Cultivator Colossus | CUT | Power and toughness equal lands you control, and {4}{G}{G}{G} is three green pips on an 8-green-source base — the same requirement as Decimator, which is already the deck's hardest cast. |
| Mayor of Avabruck // Howlpack Alpha | CUT | CUT. RECOUNTED: Humans are 2 of 22 (Morbid Opportunist x2, not 1 as first recorded) and Wolves/Werewolves 1 of 22 (Young Wolf). Both faces remain near-blank, and it is a rare against a spent budget. |
| Hamlet Captain | CUT | CUT. RECOUNTED: Humans are 2 of 22. |
| Dawnhart Disciple | CUT | CUT. RECOUNTED: Humans are 2 of 22. |
| Intrepid Provisioner | CUT | CUT. RECOUNTED: Humans are 2 of 22. |
| Howlpack Resurgence | CUT | Wolves and Werewolves 1 of 22 (Young Wolf). |
| Moonlight Hunt | CUT | Damage equal to the power of each Wolf or Werewolf you control — 1 of 22, and Young Wolf's power is 1. |
| Duel for Dominance | CUT | Coven needs three creatures with different powers, which this list satisfies (Blood Artist 0/1, Young Wolf 1/1, Ghoultree 10/10). CUT because the six mainboard interaction slots went to unconditional removal and the only artifact answer, and because the fight half needs a large creature while this deck's bodies are deliberately small. |
| Duskwatch Recruiter // Krallenhorde Howler | CUT | CUT. RECOUNTED: its back face reduces creature spells, which are 15 of 22, but the transform requires that no spells were cast last turn, which a deck deploying a one- or two-mana body every turn does not achieve. |

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (midrange):  [WARN]
  MV distribution (22 nonland):  1:4  2:7  3:5  8:5  10:1
  WARN  Above thesis turn: share of nonland cards with MV > 7 is 27% (max 10%)
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies → p=0.93 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 6.5: Butcher Ghoul@0.5, Butcher Ghoul@0.5, Young Wolf@0.5, Morbid Opportunist@0.5, Morbid Opportunist@0.5) → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 59%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: The Meathook Massacre, Maelstrom Pulse
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Eaten Alive
  OK        noncreature_permanents: Maelstrom Pulse
  CONCEDED  stack: Verified rather than assumed: a case-insensitive probe for 'counter target' across the whole 300-card cube returns 4 cards, and all 4 are mono-blue (Mausoleum Wanderer, Syncopate, Geistlight Snare, Overcharged Amalgam). Black-green therefore has no counterspell available at any rarity — an availability fact, not a slot choice. The deck's substitute is pre-emptive rather than reactive: six removal spells that answer threats after they resolve, and it accepts that a resolved combo or sweeper cannot be stopped on the stack.
  CONCEDED  graveyard: Verified and stronger than a colour restriction: a case-insensitive probe across the whole cube finds exactly ONE card that exiles from an opponent's graveyard — Invasion of Innistrad // Deluge of the Dead — and it is a rare, against a rarity budget spent to 5 of 5. No deck in this cube in any colour has more than one option, so a 27.1%-density graveyard field is effectively uncontested for everyone. Unusually for this build the concession is cheap: unlike Deck B, this deck's own graveyard is not its engine, so a symmetric answer would not have hurt it — there simply is not one to play.
```

- curve WARN (27% of nonland cards have MV > 7, max 10%): accepted. The six flagged cards are Ghoultree x2 (MV 8), Abundant Maw x2 (8), It of the Horrid Swarm (8) and Decimator of the Provinces (10), and none is paid at printed cost — the emerge cards are cast for 1-4 mana by sacrificing a body, and Ghoultree for 2-4 once creatures start dying. This build trips the flag least of the four (27% against Deck C's 36%) precisely because its drain half is genuinely cheap: 11 of 22 nonland cards cost two mana or less.
- goldfish PASS (keepable 87%, needs 80%): the best of the four builds, and it is a direct consequence of the archetype rather than luck — a play on turn 1 in 59% of hands and turn 2 in 96%, because the drain engine's core operates at one and two mana. This is the deck that most reliably does something on the turns the other three spend setting up.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | The drain engine is mana-hungry in a way the curve hides, and every sink named here is MAINBOARD: Eaten Alive has a {3}{B} alternative cost so surplus mana buys removal without spending a body, The Meathook Massacre is an X spell that scales with every extra land, and emerge's generic component is paid in mana, so a surplus land is the difference between Abundant Maw off a Ghoultree and Abundant Maw off a Butcher Ghoul. (The earlier version also cited Sever the Bloodline's flashback, which is a sideboard card and should not have carried a mainboard mitigation.) |
| screw | mitigation | This is the cheapest of the four builds — eleven of 22 nonland cards cost two mana or less, and the entire drain core (Blood Artist, Tragic Slip, Butcher Ghoul, Young Wolf, Eaten Alive, The Meathook Massacre at X=0) operates on one to two lands. A two-land hand is genuinely functional here rather than merely keepable, which is why the deck can afford to carry zero acceleration. |
| decapitation | mitigation | Blood Artist is the piece most likely to be answered on sight, and it is redundant across card types rather than merely across copies: a second Blood Artist, plus The Meathook Massacre, whose 'Whenever a creature you control dies, each opponent loses 1 life' is on an ENCHANTMENT that creature removal cannot touch, plus Morbid Opportunist x2 as a third, different payoff for the same trigger. Answering any one leaves two other kinds running. Stated precisely rather than loosely: Meathook is NOT the same effect as Blood Artist — Blood Artist reads 'this creature or another creature dies' with no controller restriction and so fires on the opponent's creatures too, while Meathook drains only on YOUR creatures dying and merely gains you life on theirs. It is redundancy for the deck's own sacrifices, which is the main line, not a strict copy. |
| gas-out | mitigation | Morbid Opportunist x2 is the answer and it is built into the plan rather than bolted on: 'Whenever one or more other creatures die, draw a card' fires off the deck's own free sacrifices, so the engine that wins the game is also the engine that refills the hand. Cards that are Net-Positive or Self-Replacing are 5 of 22 (Morbid Opportunist x2 plus the three undying bodies, which return without being redrawn) — corrected upward from the 4 first recorded. Ghoultree also gets cheaper the longer the game runs. This is the thinnest mode in the deck and it is stated as such: the draw is capped at one card per turn by Morbid Opportunist's own text, which is why Village Rites is in the sideboard for grindy matchups. |
| raced | mitigation | Six removal spells at one to three mana, the cheapest curve of the four builds, and a life-swing top end: Abundant Maw's 'target opponent loses 3 life and you gain 3 life' is a six-point swing on cast, and Blood Artist gains a life on every death including the opponent's creatures. The Meathook Massacre doubles as a sweeper at X=2 or 3 against a wide aggressive board while still draining. |
| disruption-fizzle | mitigation | Uniquely among the four, this deck's critical turn is not a single turn. The kill is incremental — one life at a time across many small deaths — so there is no announcement window for an opponent to interact with. Where a single turn does matter (an emerge cast), the rules protect it: the sacrifice is part of the spell's COST, paid on announcement, so removal aimed at the fodder in response accomplishes nothing, and it still triggers Blood Artist on the way. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Gryff, Elder Deep-Fiend | Emerge cost is {5}{U} and {5}{U}{U}; core_colors locked to [B,G] at Phase 3, so the emerge mode is uncastable and only the generic {7}/{8} hardcast remains. Colour ceiling fixed by an earlier phase. |
| Chittering Host | Has no mana cost — it exists only as the meld of Graf Rats and Midnight Scavengers, so it cannot be cast or included as a deck card. |
| Emrakul, the Promised End | Mana value 13 reduced by graveyard card types still costs 8-9 mana; a drain deck kills well before that, and Emrakul competes for nothing this list wants. |
| Griselbrand | {4}{B}{B}{B}{B} — four black pips on a mana base that must also produce {G}{G}{G} for Decimator. The pip demand, not the effect, rules it out. |
| Unnatural Growth | {1}{G}{G}{G}{G} — four green pips alongside Distended Mindbender's {B}{B} is not supportable on a two-colour 40-card base. |
| Bloodmad Vampire, Stensia Masquerade, Ancestral Anger | Splash candidates, declined. All three are red cards requiring a third colour purely for combat tricks and a Vampire-tribal enchantment; the deck's Vampire count does not support Stensia Masquerade, and a red splash would cost land slots a {B}{B} plus {G}{G}{G} base cannot spare. |
| Epitaph Golem | Anti-synergistic with the graveyard payoffs: '{2}: Put target card from your graveyard on the bottom of your library' shrinks the creature-card count that Ghoultree, Splinterfright, Spider Spawning and Moldgraf Millipede all read. |
| The Gitrog Monster, Tree of Perdition, Helvault, Tamiyo's Journal, Stitcher's Graft | Mythic and rare cards competing for the five-card rarity budget without advancing the drain plan: The Gitrog Monster's upkeep land sacrifice fights the deck's own land drops, Tree of Perdition is a defender that never attacks or sacrifices profitably, and Helvault, Tamiyo's Journal and Stitcher's Graft do not drain, sacrifice, or answer a threat. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 19 recommended  [PASS]
Avg CMC:     3.77   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.69 adj [MV 3.77 vs 2.5, 0 accel, scaled N/60]  ->  19 lands  (P(2-4 in 7) = 0.774)

Color Balance (core):  [PASS]
  B  demand  80.0%  prod  72.2%  gap  +7.8pp  [OK]
  G  demand  20.0%  prod  44.4%  gap -24.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  - Commons/uncommons max 2 copies each — highest count anywhere across mainboard + sideboard is 2. At the cap: Blood Artist, Falkenrath Torturer, Butcher Ghoul, Morbid Opportunist, Ghoultree, Abundant Maw, Tragic Slip, Infernal Grasp (mainboard) and Sever the Bloodline, Deadly Allure, Ambush Viper (sideboard). At 1 copy: Young Wolf, It of the Horrid Swarm, Eaten Alive, Morkrut Banshee, Village Rites, Geistcatcher's Rig, and the two common Haunted Mire duals are at 2. Verified with cube_search.get_max_copies driven by a per_rarity copies policy, itself confirmed against known-bad fixtures: PASS
  - Rares/mythics max 1 copy each — The Meathook Massacre 1, Decimator of the Provinces 1, Maelstrom Pulse 1, Deathcap Glade 1 (mainboard), Skirsdag High Priest 1 (sideboard): PASS
  - Max 5 rare/mythic cards total across mainboard + sideboard — exactly 5 (4 mainboard + 1 sideboard). Note that one of the five is a LAND, Deathcap Glade, which is the only build of the four to spend a slot that way; the reason is in land_math.composition_notes: PASS, at cap
  - All cards drawn from the cube mainboard pool; basic lands format-supplied and exempt: PASS
  - Mainboard 40 cards, sideboard 10 cards as requested: PASS
```
