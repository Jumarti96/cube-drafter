---
deck_name: "gwu-shanna-lifegain-control"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WUG"
format: "40-card"
built_at: "2026-08-18T21:14:19Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x4   Plains               basic W
x3   Island               basic U
x2   Forest               basic G
x2   Idyllic Beachfront   WU dual, enters tapped
x2   Radiant Grove        GW dual, enters tapped -- the ONLY green-white land in the cube
x1   Adarkar Wastes       WU dual, untapped; 1 damage per coloured tap (RARE)
x1   Crystal Grotto       scry 1 on ETB; any colour for {1}
x1   Tangled Islet        GU dual, enters tapped
x1   Yavimaya Coast       GU dual, untapped; 1 damage per coloured tap (RARE)
```

### CREATURES (12)

```
CMC  Card                      Qty   Color  Role                               Rar
  2  Phyrexian Missionary      x2    W      2/3 lifelink blocker               U
  2  Salvaged Manaworker       x2    C      Any colour, no pip to cast         C
  2  Samite Herbalist          x2    W      Gain 1 + scry per tap              C
  3  Academy Wall              x1    U      0/5 wall + loot                    C
  3  Mesa Cavalier             x2    W      Flier + 2 life (X-setter)          C
  3  Shanna, Purifying Blade   x1    GUW    PAYOFF: life -> cards              M
  4  Archangel of Wrath        x1    W      3/4 flying lifelink                R
  4  Serra Paragon             x1    W      Replays a permanent each turn      M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                      Qty   Color  Role                               Rar
  1  Shore Up                  x1    U      Hexproof; untaps Herbalist         C
  2  Destroy Evil              x1    W      Enchantment / big-creature kill    C
  2  Essence Scatter           x2    U      Counter a creature spell           C
  2  Impulse                   x1    U      Instant dig 4 for the 3rd colour   C
  2  Negate                    x2    U      Counter a noncreature spell        C
```

### OTHER SPELLS (4)

```
CMC  Card                      Qty   Color  Role                               Rar
  3  Citizen's Arrest          x2    W      Unconditional exile                C
  4  Prayer of Binding         x2    W      Flash exile + 2 life               U
```

## SIDEBOARD (10)

```
Card                      Qty   Color  Role / When to board in                        Rar
Academy Wall              x1    U      fast aggressive starts -- In as the second cop C
Broken Wings              x2    G      fliers, artifacts and enchantments -- three th C
Impede Momentum           x2    U      a large creature this deck cannot kill -- In a C
Impulse                   x1    U      a three-colour draw that misses its third colo C
Protect the Negotiators   x2    U      combo turns and one-spell win conditions -- In U
Stall for Time            x2    W      fast starts, and an empty hand -- In against a C
```

## ANALYSIS

### DECK IDENTITY

GWU lifegain control -- more honestly, WU control with a green mana suite that exists to cast exactly one card. Two 0/5-class walls and four lifelink bodies hold the ground while four counterspells and five exile-or-destroy effects answer what resolves, and Shanna, Purifying Blade converts a turn's lifegain into cards at the end step. It is the only build of the four that can interact on the stack, and the only one whose payoff turns life into a genuine second resource rather than into extra attack steps. Two things are true and must be said in the same breath: Shanna is a 1-of with no tutor and no redundancy anywhere in the cube, so she appears in roughly a third of games; and green carries ONE of the deck's 27 coloured pips -- hers. In the games she does not show up, this is a legal, functional WU control deck that has paid a three-colour tax for nothing.


### THE CORRECTION THAT MATTERS MOST

The build originally claimed this deck's central synergy was free: hold mana up for a counterspell,
and if the counter is not needed, spend the same mana on Shanna's draw. **Both grill agents
independently showed that is false, and it is worth stating precisely why.**

```
Shanna, Purifying Blade -- "At the beginning of YOUR end step, you may pay {X}.
If you do, draw X cards. X can't be greater than the amount of life you gained this turn."
```

Paying {X} happens at *your* end step and taps your lands. Lands untap at *your* next untap step.
So on every turn you pay a large X, you are **tapped out through the whole of the opponent's next
turn** — which is exactly when Essence Scatter and Negate get cast. The two uses are mutually
exclusive. The original derivation scored "8 of 23 cards whose held-up mana is never wasted"; the
correct figure is **0**.

What survives is real but weaker: mana held during the opponent's turn N, if unspent, untaps and is
available on **your turn N+1**, where it can be paid into X. That is a one-turn lag, not
simultaneity. Play accordingly — every big Shanna activation is a decision to take cards *instead of*
interaction on the following turn.

The same error applied to Prayer of Binding. Flashed on the opponent's turn (which is when a
controller wants it), its 2 life is gained outside the window Shanna's trigger checks and adds
**nothing** to X. It is now weighted 0.5 as a lifegain source for that reason.

### WHAT X ACTUALLY IS, TURN BY TURN

Two mechanical facts set the ceiling. Lifelink triggers on damage dealt to *blockers* too, so an
attacking lifelink body gains its full power whether or not it gets through — X is not fragile.
And Salvaged Manaworker is mana-**neutral** ({1}: add one mana), so available mana equals lands.

| Turn | Board | Life gained | X |
|---|---|---|---|
| 5 (5 lands) | Shanna alone attacking | 3 | **3** for {3}, 2 mana left over |
| 6 (6 lands) | Shanna + one lifelink body | 5-6 | **4-5** holding interaction, 6 tapped out |
| 7 (7 lands) | Shanna + Archangel + Missionary | 8 | **mana-capped at 5-7**, not lifegain-capped |

From turn 7 onward the binding constraint is mana, not lifegain — which is precisely the flooded
state, and why this deck has the best flood profile of the four. Three cards for three mana with no
card spent is well above rate. But note the flip side: **X is 0 on exactly the turns Shanna cannot
attack.** The payoff scales a board you already control; it does not rescue a losing one.

### GREEN IS ONE PIP

This is the honest headline. After the grill repair cut Floriferous Vinewall, green carries **exactly
one of the deck's 27 coloured pips** — Shanna's. The proportional model says run 0.6 green sources.
The deck runs **7**, because proportional math is the wrong tool for a single *critical* pip: Shanna
is the whole pipeline, she is a 1-of, and she is uncastable without green.

Said without euphemism: **seven of this deck's seventeen lands can produce a colour that one card in
forty needs.** And Shanna is drawn by turn 7 in about 35% of games, with green-white-blue all
available around 89% by then — a joint ~29% before anyone aims removal at her.

So the fair description is *WU control with a green mana suite for one mythic*. Why accept that?
Because there is no alternative that keeps the thesis. Shanna is the only card in this cube outside
black that converts life into cards; the other one, Stronghold Arena, needs black, and the splash
filter rejected black outright (7 qualifying candidates against a 3-card ceiling). There is no WU
Shanna. Green at one pip is the entry fee, not a design preference.

And in the ~65% of games she never appears, this is still a functional WU control deck: 9 interaction
spells, two 0/5-class walls, and three evasive lifelink bodies that never need a green source.

### WHAT THREE COLOURS COST, ITEMISED

| Cost | Detail |
|---|---|
| Rare slots on lands | **2 of 5** — Adarkar Wastes and Yavimaya Coast. No other build in this set spent even one |
| Lands entering tapped | **5 of 17** |
| Lands that cost life | **2** painlands, in the deck built around its life total |
| Engine band deviation | 43.5% against a 10-20% band; 4 of those 10 slots are mana-tax, not control tools |

### PLAY PATTERN

Block early and do not race. The 0/5 Academy Wall and the 2/3 lifelink Missionaries exist to buy the
turns five tapped lands cost you. Deploy Shanna only when you can protect her — Shore Up is one mana
for hexproof and it also re-taps Samite Herbalist for a second lifegain trigger in the same turn.
Once she is live, the decision every turn is the one described above: cards now, or interaction next
turn. Against a deck that can kill you through a 0/5, take the interaction.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (23 nonland):  1:1  2:12  3:6  4:4
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 4 copies → p=0.77 (need ≥ 0.75)
  PASS  lifegain_source: 11 copies (effective 9.2: Samite Herbalist@0.8, Samite Herbalist@0.8, Prayer of Binding@0.5, Prayer of Binding@0.5, Serra Paragon@0.6) → p=0.97 (need ≥ 0.75)
  PASS  colour_fixing: 11 copies (effective 9.7: Impulse@0.5, Crystal Grotto@0.7, Idyllic Beachfront@0.9, Idyllic Beachfront@0.9, Tangled Islet@0.9, Radiant Grove@0.9, Radiant Grove@0.9) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 18%  T2 95%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper is castable in GWU in this pool: the cube's six sweepers are Choking Miasma (BG), Karn's Sylex (colourless but symmetric), Smash to Dust (R), Temporal Firestorm (R), The Elder Dragon War (R) and The Phasing of Zhalfir (U) -- and The Phasing of Zhalfir phases out ALL nonland permanents including Shanna and every lifelink body. This deck answers a wide board by not letting it develop: Essence Scatter x2 counters creature spells on the stack, Academy Wall (0/5 defender) blocks the ground, and Citizen's Arrest x2 exiles the one body that matters most. A second Academy Wall and Stall for Time x2 ('Tap up to two target creatures ... Draw a card') come in from the sideboard. Mitigating maindeck would mean playing a sweeper that removes our own payoff.
  OK        single_large_threat: Citizen's Arrest, Prayer of Binding, Essence Scatter, Destroy Evil
  OK        noncreature_permanents: Prayer of Binding, Destroy Evil, Negate
  OK        stack: Essence Scatter, Negate
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour, verified against oracle text: every 'exile ... graveyard' clause in the pool is a self-exile activation cost or a graveyard user. No deck in this pool can cover this class.
```

_No WARN-tier flags were raised: curve, assembly, goldfish and coverage all returned PASS, so there are no structural responses to record._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Shanna, Purifying Blade IS the flood outlet: 'you may pay {X}. If you do, draw X cards' converts every surplus land into a card at the end of each turn, capped only by that turn's lifegain -- and from turn 7 onward mana is the binding cap, not lifegain, which is precisely the flooded state. Salvaged Manaworker x2 and Academy Wall (a loot per instant or sorcery) give two more outlets. Caveat stated: the primary outlet is a 1-of that appears in about a third of games. |
| screw | mitigation | Thirteen of 23 nonland cards cost 2 or less. The specific screw risk here is COLOUR, not count, and it is answered with cards rather than lands: Salvaged Manaworker x2 produce any colour for {1} with no coloured pip to cast, Impulse digs four deep at instant speed, and Crystal Grotto scries on entry and taps for any colour. The goldfish sim reports 87% keepable hands and 88% with 3 lands by turn 3. |
| decapitation | mitigation | REPAIRED after the grill, where this mode was correctly marked UNSATISFIED for accepting on a false premise. It is true that no redundant payoff exists -- the cube's only other life-to-cards card is black -- but redundancy is not the only mitigation, and protection was sitting in the pool on-colour. Shore Up ({U}: 'Target creature you control gets +1/+1 and gains hexproof until end of turn. Untap it') is a one-mana answer to targeted removal aimed at Shanna, and its untap clause re-taps Samite Herbalist for a second lifegain trigger in the same turn. Beyond that the plan degrades rather than stops: Archangel of Wrath (3/4 flying lifelink), Serra Paragon (3/4 flier with recursion) and Mesa Cavalier x2 are a real WU beatdown plan that never needs a green source. |
| gas-out | mitigation | The payoff IS the refuel: Shanna draws X every end step for as long as she lives. Serra Paragon replays a permanent from the graveyard every turn (9 legal nonland targets plus all 17 lands), Academy Wall loots once per turn off the 7 instants and sorceries, and Impulse digs four deep. Of the four builds this is the only one whose engine gets better the longer the game runs. |
| raced | accepted | Five of 17 lands enter tapped and the cheapest interaction is a 2-mana counterspell, so against the cube's fastest starts this deck is behind on board through turn 3 by construction. What it has: four lifelink bodies that gain while blocking (Shanna, Archangel, Phyrexian Missionary x2), Academy Wall as a 0/5 that stops nearly every 2- and 3-drop, Citizen's Arrest x2 to exile the best attacker, and Essence Scatter x2 to counter threats on the stack. Mitigating properly would mean cheap removal and untapped lands -- and the untapped lands do not exist in this cube for these colours; the deck already spends two of its five rare slots on the only two that do. The sideboard brings a second Academy Wall and Stall for Time x2 ('Tap up to two target creatures ... Draw a card'). This is the matchup the deck is worst in and the mana base is the reason. |
| disruption-fizzle | mitigation | CORRECTED after the grill, which caught an oracle misread. There is no combo turn to disrupt -- Shanna's trigger fires every end step, so interacting with one activation costs a card to stop one draw. On protecting her specifically, the honest count is 2 cards, not 4: Essence Scatter reads 'Counter target CREATURE spell' and can never protect a creature we are casting or one already on the battlefield, so only Negate x2 can counter a removal spell aimed at her -- plus Shore Up, added in the repair, which grants hexproof for {U}. Prayer of Binding's flash lets the deck act on the opponent's turn without tapping out, with the caveat now stated in thesis_correction: on any turn X was paid, the deck IS tapped out for the opponent's turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Aether Channeler | Flexible, but none of its three modes gains life, and the rare slots are needed for mana. |
| Danitha, Benalia's Hope | Cut during the Phase 9 repair. A 4/4 first strike, vigilance, lifelink gains 4 per attack and still blocks -- but it spent 1 of only 5 rare slots on a card whose enter-the-battlefield clause has ZERO targets in this list: 'you may put an Aura or Equipment card from your hand or graveyard onto the battlefield attached to Danitha', and the deck runs 0 Auras and 0 Equipment. The slot went to Yavimaya Coast, the pool's only untapped green source other than a basic Forest. |
| Elas il-Kor, Sadistic Pilgrim | Requires {B}; see above. |
| Floriferous Vinewall | Cut during the Phase 9 repair, on the deck's own stated logic. It costs {1}{G}, and Llanowar Loamspeaker was excluded from this very deck with the reasoning that 'a fixer that requires the scarcest colour does not fix the actual problem'. Vinewall has exactly that flaw and was inconsistent to keep. Cutting it also removed the deck's last green card other than Shanna, which is why green is now literally 1 pip of 27. |
| Haughty Djinn | Its power scales with instants and sorceries in the graveyard; a fine card, but it does nothing for the lifegain payoff. |
| Herd Migration | {6}{G} for Beast tokens scaled by basic land types; with three basic types and 7 mana it is far outside a control deck's curve. |
| Ivy, Gleeful Spellthief | Copies spells that target a single creature; this deck's targeted spells are mostly its own combat tricks, and it is a rare against a budget spent on mana. |
| Joint Exploration | Cut. Scry 2 then draw; kicked {G} it puts a land from hand onto the battlefield -- but the kicker needs green, the colour the deck is trying to find, and unkicked it is a worse Impulse. |
| Karn's Sylex | Its static line stops players paying life for abilities, which turns off our own Adarkar Wastes and Yavimaya Coast. |
| King Darien XLVIII | {1}{G}{W} anthem for a deck with few creatures, and GW is the thinnest pair in the mana base (Radiant Grove is the only GW dual). |
| Knight of Dawn's Light | Cut, and it is the strongest excluded card for this specific payoff. 'If you would gain life, you gain that much life plus 1 instead' is +1 to Shanna's X on EVERY event -- Shanna attacking alone goes 3 to 4, a Shanna-plus-Archangel turn goes 6 to 8. It lost to the fixing and the walls that let a three-colour deck function at all. It is the first card to add if you find the mana smoother than expected. |
| Leaf-Crowned Visionary | An Elf lord; this list runs at most one other Elf. |
| Llanowar Loamspeaker | Cut despite being the best fixer in the pool on paper. '{T}: Add one mana of any color' on a {1}{G} body is excellent -- but it needs GREEN to cast, and green is the colour this deck most often lacks. Salvaged Manaworker x2 took the slots because {2} has no coloured pip at all. |
| Meteorite | Five mana for 2 damage and a rock. |
| Mossbeard Ancient | Cut on cost. 'When this creature enters, you gain 5 life' is the biggest single X-setter in the pool and would let Shanna draw 5 -- but at {5}{G}{G} it is seven mana with two green pips on a base with 7 green sources, five of which are tapped or taxed. This deck casts it on turn 9, not turn 7. |
| Plaza of Heroes | Rare land; a control deck needs unconditional fixing, and its any-colour mana is legendary-only. |
| Queen Allenal of Ruadach | {G}{W}{W} in a three-colour deck, and its power scales with a creature count this list does not have. |
| Raff, Weatherlight Stalwart | Cut. 'Whenever you cast an instant or sorcery spell, you may tap two untapped creatures you control. If you do, draw a card' is real card advantage, and tapping Samite Herbalist even gains life -- but it needs two untapped creatures, and this deck's creatures are 0/x walls it wants untapped to block and lifelink bodies it wants attacking. The requirement fights both halves of the deck. |
| Relic of Legends | Three mana for a rock in a deck that wants to hold up interaction from turn 3. |
| Scout the Wilderness | Not in the include list, but worth naming: it fetches a basic onto the battlefield tapped for {2}{G}. Same problem as Llanowar Loamspeaker and Joint Exploration's kicker -- it needs green to fix green. |
| Sheoldred, the Apocalypse | Requires {B}{B}. The Phase 3 splash filter found 7 qualifying black candidates for the Lifegain cluster, far above the 3-card ceiling, so black cannot be a bounded splash off a GWU core. |
| Silver Scrutiny | Cut on the rare budget. '{X}{U}{U}: Draw X cards', flash if X is 3 or less, is a second end-step mana sink competing with Shanna for exactly the same mana -- and all five rare slots are spent, TWO of them on lands. |
| Silverback Elder | Cut, and it was the shape judge's flagged weak keystone of the winning sketch. Two independent reasons. (1) Its 'choose one' text delivers fixing OR 4 life per trigger, never both. (2) Decisively, {2}{G}{G}{G} is three green pips in a deck that runs one green pip and 7 green sources. |
| Snarespinner | Cut from the sideboard during the repair. A {1}{G} 1/3 with reach that becomes a 3/3 when it blocks a flier answers the cube's deepest threat class -- but only by BLOCKING, never proactively, and Broken Wings destroys the same flier outright while also hitting artifacts and enchantments. |
| Stenn, Paranoid Partisan | Its discount names one noncreature card type; this deck's spells are split across instants, sorceries and enchantments. |
| Stronghold Arena | Requires {B}. Worth naming explicitly: it is the cube's other life-to-cards converter, and Shanna is the reason this deck does not need it -- but it is also unavailable. |
| Take Up the Shield | Cut from the mainboard. On Shanna it turns a 3-life attack into 4 and grants indestructible -- both +1 to X and protection. Shore Up won the slot instead: it costs one mana instead of two, grants HEXPROOF (which answers targeted removal, the actual decapitation risk) rather than indestructible, and its untap clause re-taps Samite Herbalist for a second lifegain trigger in the same turn. |
| Tatyova, Steward of Tides | {G}{G}{U} double-green in a deck whose green is the shallowest colour, and its payoff needs seven lands. |
| Tear Asunder | Cut from the sideboard during the repair. It exiles an artifact or enchantment for {1}{G} (the {1}{B} kicker that would let it exile any nonland permanent is out of colour and dead). Broken Wings replaced it: same green cost, covers artifacts AND enchantments AND fliers, which halved the sideboard's green count from 4 cards to 2 on a 7-source base. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' hits this deck's own two-drop fixers and lifegain bodies. |
| Thran Portal | Rare land that enters tapped once you control three other lands and charges 1 life per activation, on top of two painlands already. |
| Timeless Lotus | Five mana for a tapped rock is far too slow, and it is a mythic against a budget spent on lands and Shanna. |
| Tolarian Geyser | Cut. Bounce plus a card, and kicked {W} it gains 3 -- genuinely on-thesis. It lost the last flexible slot to Impulse, which costs one less, is an instant, and digs four deep for the missing colour, which is this deck's actual bottleneck. |
| Vodalian Hexcatcher | A Merfolk lord in a deck with no other Merfolk. |
| Weatherlight Compleated | Needs four creature deaths to become a creature; this deck wants its lifelink bodies alive. |
| Zur, Eternal Schemer | {W}{U}{B} -- needs black, and this list runs 0 non-Aura enchantments to animate. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.57   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.24 adj [MV 2.57 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand   3.7%  prod  41.2%  gap -37.5pp  [OK]
  U  demand  29.6%  prod  52.9%  gap -23.3pp  [OK]
  W  demand  66.7%  prod  58.8%  gap  +7.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool_base: cube_mainboard of dominaria-united---main-set only; all 28 distinct names verified by exact string match against the working pool cache.
[PASS] copy_limits: commons/uncommons <= 2, rares/mythics <= 1 -- verified against cube_search.get_max_copies with a per_rarity policy and cross-checked against each pool card's max_copies. All 28 names pass. Cards split across boards: Impulse 1+1=2, Mesa Cavalier 2+0=2, Academy Wall 1+1=2, all at their common limit. The FIRST sideboard draft failed this check (Impede Momentum at 3, Academy Wall at 4 across boards) and was corrected before Phase 6.
[PASS] rare_mythic_cap: 5 of 5 used, all mainboard: Shanna, Purifying Blade (mythic), Serra Paragon (mythic), Archangel of Wrath (rare), Adarkar Wastes (rare LAND), Yavimaya Coast (rare LAND). TWO of the five are lands -- no other build in this set spent even one. That is the clearest single price of playing three colours in this cube.
[PASS] basics: Plains x4, Island x3 and Forest x2 are format-supplied and exempt from copy limits.
[PASS] colour_usability: All 23 nonland cards return a non-None effective_cost.best_mode(card, ['G','W','U'], []). Two carry off-colour printed identities from kicker costs this deck cannot pay, and each is in for its base mode only with no plan resting on the kicked half: Archangel of Wrath (identity BRW; cast {2}{W}{W}, {B}/{R} kickers dead, so BOTH damage triggers never happen -- it is a 3/4 flying lifelink) and Phyrexian Missionary (identity BW; cast {1}{W}, {1}{B} kicker dead, so no graveyard recursion -- it is a 2/3 lifelink). The sideboard is fully in-colour after the repair replaced Tear Asunder (identity BG) with Broken Wings (mono-G).
```