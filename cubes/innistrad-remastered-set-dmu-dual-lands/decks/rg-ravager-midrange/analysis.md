---
deck_name: "rg-ravager-midrange"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "RG"
format: "40-card"
built_at: "2026-08-26T19:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  x7   Forest                                           basic
  x6   Mountain                                         basic
  x2   Evolving Wilds                                   fetches a tapped basic; untapped any-colour source from next turn
  x2   Wooded Ridgeline                                 RG dual, always enters tapped (common)
```

### CREATURES (14)
```
CMC  Card                                             Qty   Color  Role                           Rar
2    Duskwatch Recruiter // Krallenhorde Howler       x2    G      Body + repeatable dig          U
2    Mayor of Avabruck // Howlpack Alpha              x1    G      Anthem: pumps 10, feeds 4 remo R
2    Scorned Villager // Moonscarred Werewolf         x2    G      Mana dork Werewolf             C
3    Geier Reach Bandit // Vildin-Pack Alpha          x2    R      3-power haste front face       U
3    Shrill Howler // Howling Chorus                  x1    G      Evasive 3/1, no flip needed    U
3    Tireless Tracker                                 x1    G      Lands into cards + counters    R
4    Huntmaster of the Fells // Ravager of the Fells  x1    RG     Body + token + 2 life          R
4    Pack Guardian                                    x2    G      Two bodies, flash, land sink   U
4    Smoldering Werewolf // Erupting Dreadwolf        x2    R      Body + two-target ping         U
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                                             Qty   Color  Role                           Rar
2    Abrade                                           x2    R      Removal / only artifact answer U
2    Moonlight Hunt                                   x2    G      Uncapped scaling removal       U
3    Clear Shot                                       x2    G      Removal that keeps the body    U
3    Savage Alliance                                  x1    R      Modal sweep / trample push     U
```

### OTHER SPELLS (2)
```
CMC  Card                                             Qty   Color  Role                           Rar
4    Arlinn Kord // Arlinn, Embraced by the Moon      x1    RG     Token + reach + anthem         M
4    Garruk Relentless // Garruk, the Veil-Cursed     x1    G      Removal or body, every turn    M
```

## SIDEBOARD (10)
```
Card                                             Qty   Color  Role / When to board in
Lightning Axe                                    x2    R      [U] Against a creature too large for the maindeck suite - Abrade caps at 3 damage and Clear Shot is capped by your own creature's power. 5 damage for {R} is the cheapest hard answer in the colours.
Fiery Temper                                     x2    R      [U] Against fliers and planeswalkers - 58 evasion cards in the cube (20.9%) and, verified at Phase 9, ZERO of the seven mainboard removal spells can target a planeswalker. 'deals 3 damage to any target' is the only answer to either. Its Madness {R} is also live off Lightning Axe's 'discard a card' additional cost when both are boarded in.
Ambush Viper                                     x2    G      [C] Against big-creature midrange and reanimator - flash deathtouch trades with any body in the cube regardless of size.
Duel for Dominance                               x2    G      [C] Against fast aggro - the cheapest removal green offers here, and the Coven clause is live on a board with 12 differently-sized bodies.
Hanweir Watchkeep // Bane of Hanweir             x2    R      [C] Against fast aggro - a 1/5 Defender that blanks two-power attackers, and it is a Werewolf so it still feeds Moonlight Hunt's count.
```

## ANALYSIS

### DECK IDENTITY

A red-green midrange deck that plays Werewolves for their front faces and pays for the privilege in removal. It is the only one of the three Werewolf builds that expects never to transform, and it says so: seven mainboard removal cards mean a spell is cast almost every turn, and the upkeep clause 'if no spells were cast last turn' is therefore off by the deck's own choice. What it buys instead is seven double-duty permanents - Huntmaster of the Fells, Garruk Relentless, Arlinn Kord, Tireless Tracker, Duskwatch Recruiter x2 and Pack Guardian x2 - every one of which leaves behind more than one thing, plus Mayor of Avabruck, whose transform-free front face raises the power of the board AND of the four removal spells that read creature power. It wins by having a better board and more cards from turn four onward, and any flip that happens is a bonus rather than a step in the plan.

### THE BUILD THAT REFUSES THE MECHANIC

Every flip Werewolf reads *At the beginning of each upkeep, if no spells were cast last turn,
transform this creature.* The Howlpack Anthem build routes around that clause; the Silent Moon build
commits to it. This one does the third thing: it **switches the clause off on purpose** and takes the
mana it saves in removal.

Seven of the 23 nonland cards are removal spells — 30.4%, the highest interaction density of the
three builds, and 0.4pp over the midrange band. Casting one almost every turn means the upkeep
condition is essentially never met. That is not a cost the deck pays reluctantly; it is the trade the
deck is built on. What it buys is that **every Werewolf here is priced as a front face**, plus seven
permanents that each leave behind more than one thing:

| Card | Thing one | Thing two |
|---|---|---|
| Huntmaster of the Fells | 2/2 body | 2/2 Wolf token + 2 life |
| Garruk Relentless | 3 damage to a creature | or a 2/2 Wolf, every turn |
| Arlinn Kord | 2/2 Wolf token | back-face 3 damage to any target |
| Tireless Tracker | 3/2 body | a Clue per land, and counters |
| Duskwatch Recruiter ×2 | 2/2 body | `{2}{G}`: dig three for a creature |
| Pack Guardian ×2 | 4/3 flash body | a 2/2 Wolf off a spare land |

### THE ANTHEM THAT IS ALSO A REMOVAL SPELL

The most interesting number in this deck came out of the Phase 9 grill. **Four of the seven removal
spells read creature *power***, not a fixed damage figure:

- Moonlight Hunt ×2 — "Each creature you control that's a Wolf or a Werewolf deals damage equal to
  **its power**"
- Clear Shot ×2 — "It deals damage equal to **its power** to target creature you don't control"

Mayor of Avabruck's **front** face — "Other Human creatures you control get +1/+1", needing no
transform at all — pumps 8 of the 23 nonland cards, and **7 of those 8 are also Werewolf-typed**. So
the anthem raises combat damage *and* the output of four of the seven removal spells at once. The
card it replaced, Hanweir Garrison, made 1/1 red **Human** tokens read by **0** of the seven. Same
rare slot, strictly more work.

The same logic replaced Villagers of Estwald with Shrill Howler: identical cost and colour, but a
third power point that adds +1 damage to each of four removal spells — and it is the deck's only
evasive body against a cube that is 20.9% evasion. Between them the two swaps also *raised* the
Wolf/Werewolf count Moonlight Hunt reads, from 12 to **13 of 23**.

Honest cost of both: Mayor is a 1/1 and Shrill Howler a 3/1, so the deck now fields two 1-toughness
bodies where it previously had none — into a cube whose 1-damage effects its own wide-board coverage
already names.

### THE MANA, AND A MEASUREMENT I GOT WRONG

This deck carries a double pip in **both** colours at four mana — Smoldering Werewolf ×2 at
`{2}{R}{R}` and Pack Guardian ×2 at `{2}{G}{G}`. Simulated at 200k iterations, conditional on making
four land drops:

| Configuration | `{2}{R}{R}` t4 | `{2}{G}{G}` t4 | `{G}` t2 | `{R}` t2 |
|---|---|---|---|---|
| 8 Forest / 7 Mountain / 2 Ridgeline | 77.9% | 85.3% | 87.6% | 83.5% |
| **7 / 6 / 2 Ridgeline / 2 Evolving Wilds (built)** | **86.8%** | **92.0%** | **93.0%** | **90.1%** |

Worth recording how the second row got there, because it did not go smoothly. Evolving Wilds was
never seeded at all — lands are excluded from all three seed bands by design — so the grill surfaced
it as the largest absence. I then **rejected it on a simulation that was broken**: my harness
sequenced Wooded Ridgeline early but never credited Evolving Wilds with resolving, so a single copy
contributed zero mana sources. The Challenger showed my 48.7% figure was reproducible only by
modelling the card as producing no mana ever. Re-run correctly, it improves every column, and the
tempo objection collapses too — with **0 of 23 nonland cards at MV 1**, a turn-1 tapped land misses
nothing. It also gives Tireless Tracker two landfall triggers from one land slot, and it is a land
card Pack Guardian can discard for a free 2/2.

### WHAT THIS DECK CANNOT DO

Verified against oracle text across all 305 pool cards rather than assumed:

- **0 of 7** mainboard removal spells can target a planeswalker. Abrade, Moonlight Hunt, Clear Shot
  and Garruk's 0 all read "target creature"; none of Savage Alliance's three modes has a planeswalker
  clause. The pool contains 7 planeswalkers. Fiery Temper in the sideboard is the only answer.
- **0** graveyard hate exists in red or green, against the cube's largest threat class at 27.1%.
- **0** enchantment removal exists in red or green.
- **0** one-drops, so the turn-1 play rate is 0% — the price of Abrade and Moonlight Hunt occupying
  the cheap slots.

The sideboard is five kinds of removal and a wall, and that is pool-forced rather than lazy: what a
red-green sideboard can *buy* in this cube is removal and bodies. Within that, one interaction is
worth knowing — Fiery Temper's Madness `{R}` is live off Lightning Axe's "discard a card" additional
cost, so boarding both turns the Axe's card loss into a free 3-damage spell.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  2:9  3:7  4:7
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  value_engine: 8 copies (effective 7.6: Pack Guardian@0.8, Pack Guardian@0.8) → p=0.95 (need ≥ 0.75)
  PASS  removal: 9 copies (effective 7.4: Moonlight Hunt@0.8, Moonlight Hunt@0.8, Clear Shot@0.8, Clear Shot@0.8, Smoldering Werewolf // Erupting Dreadwolf@0.6, Smoldering Werewolf // Erupting Dreadwolf@0.6) → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 87%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Savage Alliance, Smoldering Werewolf // Erupting Dreadwolf
  OK        single_large_threat: Moonlight Hunt, Clear Shot
  OK        noncreature_permanents: Abrade
  CONCEDED  stack: Red and green in this pool contain no counterspells or stack interaction of any kind. This deck's substitute is density: seven mainboard removal cards mean an opposing threat is usually answered after it resolves rather than before.
  CONCEDED  graveyard: Verified against oracle text: the cube's only graveyard hate is Soul-Guide Gryff (white) and Invasion of Innistrad (black); neither is castable in R or G. Against the cube's 75 graveyard cards (27.1%, the largest single class) this deck has no interaction at all and must win on board.
```

- No WARN flags on the final list. Curve, assembly, goldfish and coverage all returned PASS: MV distribution 2:9 3:7 4:7 against the Midrange bands of MV2 >= 15% (39.1%) and MV6+ <= 10% (0%); value_engine p=0.95 and removal p=0.94 against the 0.75 assembly threshold; 84% keepable hands.
- The 0% turn-1 play rate is recorded rather than flagged, because no structural check tests it for Midrange. There is no one-drop in the deck, and that is the deliberate cost of spending the cheap slots on Abrade x2 and Moonlight Hunt x2. The pool's only one-mana interactive card in these colours is Lightning Axe, which is in the sideboard.
- Interaction at 30.4% is 0.4pp ABOVE the 20-30% band, restated as an overrun after the Phase 9 Challenger noted the original wording read as if it were inside.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | The best-covered mode of the three decks, because two cards convert lands directly into resources rather than merely consuming mana. Tireless Tracker: 'Landfall - Whenever a land you control enters, investigate' turns every surplus land into a Clue and then a card, and 'Whenever you sacrifice a Clue, put a +1/+1 counter on this creature' turns the same lands into a threat. Pack Guardian x2: 'you may discard a land card. If you do, create a 2/2 green Wolf creature token' converts a dead land in hand into a body. Duskwatch Recruiter x2 adds '{2}{G}: Look at the top three cards of your library' as a repeatable sink. That is FIVE of 23 nonland cards - corrected at Phase 9 from a miscounted 'six'. |
| screw | mitigation | Eight of the 23 nonland cards cost exactly 2 and the curve tops at 4, so a two-land hand casts a spell on turn two and a three-land hand operates fully. Scorned Villager x2 ('{T}: Add {G}') bridges to the four-drops. The goldfish sim over 1000 hands returns 84% keepable against the 80% threshold. Honest caveat: with zero one-drops the turn-1 play rate is 0%, which is the price of the removal-dense configuration and is why this build's thesis turn is 7. |
| decapitation | mitigation | This deck has no key card to answer on sight, which is the whole point of the grindy-value lens. Seven independent permanents each generate cards or bodies on their own: Huntmaster of the Fells, Garruk Relentless, Arlinn Kord, Tireless Tracker, Duskwatch Recruiter x2 and Pack Guardian x2. Removing any one leaves six. (Corrected in the Phase 9 approval round from 'eight, leaves seven' - Hanweir Garrison was one of the named permanents and was cut during the repair.) The assembly check reflects it: value_engine is 8 copies at 7.6 effective, p=0.95 against a 0.75 threshold. |
| gas-out | mitigation | Three separate refills, none of which is a spell that must be drawn: Tireless Tracker's Clues turn lands into cards, Duskwatch Recruiter x2 turns spare mana into creature cards, and Garruk's back-face '-1: Sacrifice a creature. If you do, search your library for a creature card, reveal it, put it into your hand' converts a spent body into a fresh threat - fed by the 14 nontoken creature cards in the list. Hanweir Garrison additionally replaces its own body twice per attack. |
| raced | accepted | Rewritten at Phase 9 from a mitigation to an accepted, because the original overstated its own evidence. It claimed Huntmaster gives 'a four-point swing on one card' by pairing 'you gain 2 life' with Ravager's 'deals 2 damage to target opponent' - but Ravager's damage is gated on 'Whenever this creature transforms into Ravager of the Fells', and this is the deck that turns transforms off by design. The live figure is TWO points, not four. What the deck actually has against a fast clock is seven removal spells at 30.4% of nonland slots, four of them at two mana - but the honest cost is that 4 of those 7 (Moonlight Hunt x2, Clear Shot x2) require a creature you control, and are therefore weakest in exactly the state being raced describes. Mitigating properly would mean trading the power-reading removal for unconditional burn, which costs the deck the interaction density that is its identity, and adding one-drops, which the pool offers only as Lightning Axe - already in the board. The 0% turn-1 play rate is the same cost seen from the other side. |
| disruption-fizzle | accepted | There is no critical turn to fizzle - this deck has no combo turn and no single stack interaction that decides the game, so the mode as literally defined does not bind. Its real analogue, identified by the Phase 9 Challenger and adopted here, is that 4 of the 7 removal spells (Moonlight Hunt x2, Clear Shot x2) require a creature you control, so an opponent who clears the board first blanks more than half the interaction suite in one action. The cost of mitigating: replacing them with unconditional burn means giving up the two removal spells that cost no card because the board pays, which is the specific efficiency the grindy-value lens was chosen for. The second half - that the deck cannot steal a game it is behind in - would need a haymaker, and the pool's candidates all cost a rare slot the five value engines need plus a 5+ MV curve slot in a deck whose 17-land count is computed against a 4-MV ceiling. The earlier version of this entry named Mirrorwing Dragon and Cultivator Colossus as those candidates; both had been dropped from the seed by a CMC-sorted band cap and never read, so they are removed from the claim rather than cited unexamined. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Lunarch Veteran // Luminous Phantom, Strength of Arms, Ambitious Farmhand // Seasoned Cathar | The three qualifying white splash candidates. None is a Wolf or a Werewolf, so none is counted by Howlpack Resurgence, Howlpack Alpha, Moonlight Hunt, Runebound Wolf or Kruin Outlaw's menace - and a third colour would take land slots from a deck that already needs {1}{R}{R}, {2}{G}{G} and {2}{R}{G} on curve. |
| Dawnhart Disciple, Hamlet Captain, Intrepid Provisioner | Human-tribal pumps. Every Werewolf here is a Human on its front face, so these are genuinely live before a flip - but they turn off the moment a Werewolf transforms, and every anthem and count payoff in this pipeline reads Wolf/Werewolf instead. |
| Festerhide Boar, Lumberknot, Bramble Wurm, Abundant Maw, It of the Horrid Swarm, Decimator of the Provinces, Vexing Devil, Helvault, Zealous Conscripts, Wrenn and Seven | Generic beaters and top-end that carry no Wolf or Werewolf type. Several are individually strong, but they neither raise the count the payoffs multiply nor fit a curve that wants to be doing something on every turn from two onward - and four of them would also consume the 5-card rare/mythic budget the payoffs need. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 2.91 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  62.1%  prod  52.9%  gap  +9.2pp  [OK]
  R  demand  37.9%  prod  47.1%  gap  -9.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] commons_uncommons_max_2: PASS - every distinct name checked against cube_search.get_max_copies with per_rarity {common:2, uncommon:2, rare:1, mythic:1}. Highest count of any common/uncommon is 2.
  [PASS] rares_mythics_max_1: PASS - all five rare/mythic cards appear exactly once.
  [PASS] rare_mythic_total_max_5: PASS - exactly 5 across mainboard and sideboard: Huntmaster of the Fells // Ravager of the Fells, Garruk Relentless // Garruk, the Veil-Cursed, Arlinn Kord // Arlinn, Embraced by the Moon, Tireless Tracker and Hanweir Garrison. All five are mainboard; the sideboard contains zero rares by necessity.
  [PASS] basics_unlimited: PASS - Forest x8 and Mountain x7 are format-supplied and exempt.
  [PASS] all_cards_in_pool: PASS - every name matched the working pool cache by exact string.
  [PASS] colour_usability: PASS - effective_cost.best_mode returned a usable mode in [R,G] for every nonland card. Garruk Relentless // Garruk, the Veil-Cursed has printed color_identity [B,G] but mana_cost {3}{G} and no black mana requirement on either face; best_mode stamps it 'cast', so it is a core-colour card rather than a splash.
  [PASS] splash_cap: PASS - the white splash qualified at Phase 3 but zero of its three candidates were included, so no card requires the splash colour.
```