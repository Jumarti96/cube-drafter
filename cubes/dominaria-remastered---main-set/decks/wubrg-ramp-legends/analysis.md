---
deck_name: "wubrg-ramp-legends"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUBRG"
format: "40-card"
built_at: "2026-08-02T18:48:52Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
2x   Contaminated Aquifer      Land — U/B, Sol'kanar's two scarcest pips
3x   Forest                    Land — basic, untapped turn-1 green
1x   Geothermal Bog            Land — B/R
1x   Haunted Mire              Land — B/G (Forest card)
1x   Idyllic Beachfront        Land — W/U
1x   Mishra's Factory          Land — colourless, becomes a 2/2 attacker
2x   Radiant Grove             Land — G/W (Forest card)
1x   Rith's Grove              Land — Lair R/G/W, exactly Rith's colours
1x   Sacred Peaks              Land — R/W
1x   Sunlit Marsh              Land — W/B
2x   Tangled Islet             Land — G/U (Forest card)
2x   Wooded Ridgeline          Land — R/G (Forest card)
```

### CREATURES (12)

```
CMC  Card                      Qty   Color Role                                                                                     Rar
  1  Birds of Paradise         x1    G     Engine — turn-1 any-colour fixing                                                        R
  2  Radha, Heir to Keld       x2    GR    Payoff — legend; ramps and attacks                                                       U
  4  Flametongue Kavu          x2    R     Interaction — 4 damage on ETB, stapled to a 4/2                                          U
  5  Peregrine Drake           x2    U     Engine — 'untap up to five lands' funds Kamahl's pump on the alpha turn                  C
  5  Sol'kanar the Swamp King  x1    BRU   Payoff — 5/5 evasive closer                                                              R
  5  Tatyova, Benthic Druid    x2    GU    Payoff — legend; every land entering draws a card                                        U
  6  Kamahl, Fist of Krosa     x1    G     Payoff — animates lands and pumps the team for lethal                                    M
  6  Rith, the Awakener        x1    GRW   Payoff — 6/6 flier; Saproling trigger on connection                                      R
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                      Qty   Color Role                                                                                     Rar
  1  Swords to Plowshares      x2    W     Interaction — 1-mana unconditional exile                                                 U
  2  Nature's Lore             x2    G     Engine — fetches 1 of 10 Forest cards; also a Tatyova trigger                            U
  3  Call of the Herd          x2    G     Payoff — 3/3 token, then Flashback {3}{G}: the only disruption-proof threat              U
  3  Life // Death             x1    BG    Payoff — animates lands for extra damage; Death rebuys a killed legend                   U
  4  Fire // Ice               x1    RU    Interaction — two castable halves                                                        U
```

### OTHER SPELLS (2)

```
CMC  Card                      Qty   Color Role                                                                                     Rar
  1  Exploration               x1    G     Engine — extra land drop; inverts the Lair bounce clause                                 R
  1  Wild Growth               x1    G     Engine — turn-1 green ramp on any land                                                   C
```

## SIDEBOARD (10)

```
Card                      Qty   Color Role / When to board in                                                                  Rar
Chainer's Edict           x2    B     vs hexproof / recursive threats — sacrifice ignores protection; Flashback = 2 uses       U
Circular Logic            x2    U     vs STACK — the class conceded maindeck; a single blue pip, unlike Counterspell's {U}{U}  U
Orim's Thunder            x2    W     vs ARTIFACTS (24) + ENCHANTMENTS (33); Kicker {R} also burns a creature                  C
Slice and Dice            x2    R     vs WIDE BOARDS / Tokens (21 cube cards); Cycling {2}{R} when not needed                  U
Tormod's Crypt            x2    C     vs GRAVEYARD (45 cube cards, 18.75%) — the cube's only graveyard hate                    U
```

## ANALYSIS

### DECK IDENTITY

A five-colour green ramp midrange deck. Wild Growth, Nature's Lore, Birds of Paradise and Radha, Heir to Keld accelerate into gold legends two turns early: Rith, the Awakener as a 6/6 flier and Sol'kanar the Swamp King as a 5/5. Tatyova, Benthic Druid turns land drops into cards, and when Exploration is in play the Lair's 'sacrifice it unless you return a non-Lair land' clause becomes an advantage, since the returned land is replayed off the extra drop for a second Tatyova trigger. The kill is a pumped CREATURE board: Kamahl, Fist of Krosa's '{2}{G}{G}{G}: Creatures you control get +3/+3 and gain trample' on a board of Radha, Tatyova, Elephant tokens and Flametongue Kavu. Kamahl's land-animation and Life // Death add reach on top of that board rather than replacing it — animating lands cannot carry the kill alone, because every land tapped to pay for the animation and the pump is a land that cannot attack.

### THE KILL MECHANISM THIS DECK DOES NOT HAVE

The first version of this deck claimed it won by animating its own lands — Kamahl, Fist of Krosa's *"{G}: Target land becomes a 1/1 creature"* plus Life // Death's *"All lands you control become 1/1 creatures until end of turn"*, swinging with a board of lands. The self-grill refuted it with arithmetic, and the refutation held:

> Every land you tap to pay for the animation and the pump is a land that **cannot attack**. With **L** untapped lands and **k** animated lands attacking, Kamahl's route costs `{G}` per land plus `{2}{G}{G}{G}` for the pump, so `k ≤ L − k − 5`, i.e. **k ≤ (L−5)/2**. At eight lands that is **one** attacking land.
>
> Via Life // Death the whole turn costs 6 mana ({G} to animate all + 5 to pump), leaving **two** attackers at eight lands — and any land played that turn is summoning-sick anyway.

So the honest kill is a pumped **creature** board: Kamahl's *"Creatures you control get +3/+3 and gain trample"* on Radha, Tatyova, an Elephant token and a Flametongue Kavu is ~25 trample damage. Land animation is **reach on top of that board**, not a substitute for it. Peregrine Drake ×2 (*"untap up to five lands"*) is in the deck specifically because it is the only card in the pool that refunds the pump's cost on the turn it matters.

### THE ENGINE IS AN UPSIDE, NOT A BASELINE

The archetype's headline interaction is real and worth knowing:

> **Exploration** — *"You may play an additional land on each of your turns."* · **Rith's Grove** — *"sacrifice it unless you return a non-Lair land you control to its owner's hand."*
>
> With Exploration out, the returned land is replayed off the extra drop, and **Tatyova, Benthic Druid** triggers on both — two cards from one Lair.

But the rare cap allows exactly one Exploration, and the effective-land-count math allows exactly one Lair. P(both by turn 7) ≈ **11.7%**. This deck is therefore a green ramp deck that *sometimes* gets a spectacular engine, not an engine deck. Saying otherwise would be selling a 1-in-9 case as the plan.

### THE LAND COUNT IS 18, 17, AND 16 AT THE SAME TIME

Three different correct numbers, depending on what you're counting:

| Count | Value | Why |
|---|---|---|
| Land **cards** | 18 | what `deck.json` lists |
| Lands that **advance** the mana count | 17 | Rith's Grove swaps a land rather than adding one |
| Lands that produce **coloured** mana | 16 | Mishra's Factory taps only for `{C}` |

`land_target` recommends 17, which the middle number matches exactly. Only one Lair is run for precisely this reason — a second would have made the effective count 16. And a Rith's Grove played as your *first* land is simply sacrificed: there is no non-Lair land to return.

### WHY KROSAN RESTORER GOT CUT DESPITE BEING IN THE THESIS

Krosan Restorer's good mode reads *"Threshold — {T}: Untap up to three target lands. Activate only if there are seven or more cards in your graveyard."* Counting against this list: **0 of 40 cards** mill, cycle, discard, or have a flashback outlet that fills the yard proactively. Threshold is unreachable, so the card is a three-mana 1/2 that untaps **one** land. Peregrine Drake untaps **five** for one more mana and flies; Wild Growth does the early-ramp job for one mana. The thesis mechanism (untap lands to reach big mana ahead of schedule) is preserved — executed by cards whose text actually delivers it.

### THE LEGEND-RULE TAX NOBODY BUDGETS FOR

7 of the 22 nonland cards are legendary, across 5 distinct legends — but 4 of those copies are duplicates (Tatyova ×2, Radha ×2). P(drawing both copies of a given 2-of within 14 cards) ≈ 11.7% each, so in roughly a **quarter of games one of those four copies is a dead draw**. They stay anyway: they are the only legends in this pool that cost no rare budget, and the assembly check depends on their copy count. It is a real cost, priced in rather than ignored.


### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:5  2:4  3:3  4:3  5:5  6:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 7.8: Kamahl, Fist of Krosa@0.8, Tatyova, Benthic Druid@0.8, Tatyova, Benthic Druid@0.8, Radha, Heir to Keld@0.5, Radha, Heir to Keld@0.5, Life // Death@0.4) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.8: Peregrine Drake@0.9, Peregrine Drake@0.9) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 79% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 61%  T2 87%  T3 96%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper. Slice and Dice 'deals 4 damage to each creature' and would kill 12 of this deck's 14 creature copies; Floodgate and Sandstorm are equally symmetric here and Wrath of God is rare with the budget already at 5/5. Slice and Dice x2 is sideboarded for the token decks, where the trade is favourable.
  OK        single_large_threat: Swords to Plowshares, Flametongue Kavu, Fire // Ice
  CONCEDED  noncreature_permanents: Maindeck slots go to threats and ramp because the thesis is a turn-7 clock. The cube's 24 artifacts and 33 enchantments are answered from the sideboard by Orim's Thunder x2, which destroys either type.
  CONCEDED  stack: This deck taps out on its own turn from turn 2 onward to deploy ramp and threats, so holding counter mana would forfeit the goldfish-7 clock that is the thesis. The concession is paid for after game 1: Circular Logic x2 ({2}{U}, a single blue pip) is sideboarded.
  CONCEDED  graveyard: Tormod's Crypt x2 is sideboarded. Graveyard interaction is the cube's densest theme at 45 of 271 cards, so this is a real concession paid for after game 1.
```

- GOLDFISH WARN (keepable 79%, need 80%): accepted. 13 of the 18 lands read 'This land enters tapped', and the curve carries five 5-drops and two 6-drops because the plan is to deploy gold legends. Mitigants in-list: 3 untapped basic Forests make a turn-1 Wild Growth, Exploration or Birds of Paradise live, and green is the only colour needed before turn 4; Nature's Lore x2 finds 1 of 10 Forest cards. Grill repair improved this from 78% and raised the turn-1 play rate from 51% to 61%, chiefly by adding the one-mana Wild Growth. (An earlier version of this response referred to a 'Wild-Growth-style green play' while Wild Growth was not in the deck; the grill caught that and the card is now actually present.)
- CURVE: PASS, no response required.
- ASSEMBLY: PASS at p=0.95 for payoffs and p=0.93 for enablers, at honest weights — Kamahl 0.8 for needing a second big-mana turn, Tatyova 0.8 for needing a land drop, Radha 0.5 as a 2/2, Life // Death 0.4 (downgraded from 0.5 after the grill showed land-animation needs a high land count AND untapped pump mana), Peregrine Drake 0.9 for being a one-shot ETB burst.
- LEGEND-RULE COST (not a gate, recorded as a known cost): 7 of the 22 nonland cards are legendary across 5 distinct legends, and 4 of those copies are duplicates (Tatyova x2, Radha x2). P(drawing both copies of a given 2-of within 14 cards) is about 11.7% each, so in roughly a quarter of games one of those four copies is a dead draw under the legend rule. The duplicates are kept anyway because they are the only free (non-rare) legends in the pool and the assembly check depends on their copy count.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | This deck wants the extra land. Tatyova, Benthic Druid x2 turn every land entering into a card; Kamahl, Fist of Krosa reads '{G}: Target land becomes a 1/1 creature until end of turn'; Life // Death's front half reads 'All lands you control become 1/1 creatures until end of turn'; and Mishra's Factory is itself a 2/2 for {1}. With Exploration out, a second land per turn is a second Tatyova trigger rather than a dead draw. Honest limit: the land-animation modes add reach to an existing board, they do not win alone — see disruption-fizzle. |
| screw | mitigation | Green is the only colour required before turn 4, and 11 of 18 lands produce it including 3 untapped basic Forests, so a two-land keep holding Wild Growth ({G}), Exploration ({G}) or Birds of Paradise ({G}) functions on turn 1 — the turn-1 play rate is 61%. Nature's Lore x2 finds 1 of 10 Forest cards, and Birds plus Radha, Heir to Keld x2 ('{T}: Add {G}') are three non-land mana sources. |
| decapitation | mitigation | There is no single key card. The payoff role holds 10 copies across 7 distinct cards (Rith, Sol'kanar, Kamahl, Tatyova x2, Radha x2, Life // Death, Call of the Herd x2), which is why assembly reads p=0.95. Answering Exploration on sight costs the opponent a card and slows the engine but does not stop it: Wild Growth, Nature's Lore, Birds and Peregrine Drake all still accelerate, and Tatyova still draws off the normal land drop. |
| gas-out | mitigation | Cards produced beyond themselves: Tatyova x2 draw one per land entering against 18 lands plus 2 Nature's Lore as extra triggers; Call of the Herd x2 each yield a second 3/3 from the graveyard via 'Flashback {3}{G}'; Fire // Ice's Ice half reads 'Draw a card'. That is 5 of 22 nonland cards, and the Tatyova pair scales with the deck's largest card type rather than being a fixed number of draws. |
| raced | accepted | With 13 enters-tapped lands, five 5-drops and two 6-drops, this deck is behind on board for the first three turns against the cube's fastest starts. Mitigating would mean trading the typed duals for basics and the six-drops for two-drops, which removes the five-colour access to Rith and Sol'kanar and leaves a generic mono-green deck — the mitigation cost is the archetype itself. Partial offsets already in-list: Tatyova's 'you gain 1 life' on each land drop, and Flametongue Kavu x2, which is removal on a 4/2 blocker. |
| disruption-fizzle | mitigation | Call of the Herd x2 is the specific answer: 'Create a 3/3 green Elephant creature token' and then 'Flashback {3}{G}' from the graveyard, so countering it, discarding it or killing the token still leaves a second 3/3 — it is the only threat in this pool that a single piece of interaction cannot remove from the game. Beyond it, the critical turn is a single cast rather than a chain, and the payoff role is 10 copies across 7 cards, so no one answer blanks the turn. An earlier version of this entry claimed Kamahl and Life // Death formed a backup route that 'does not depend on any creature surviving'; that was false — Kamahl is himself a Legendary Creature and both the animation and the pump are HIS activated abilities — and the claim is withdrawn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Legacy Weapon | MYTHIC SLOT. {7} to cast plus {W}{U}{B}{R}{G} per activation is 12 mana — outside this deck's turn-7 window. It is the payoff of the companion attrition build instead. |
| Sylvan Library | MYTHIC SLOT. 'pay 4 life' per extra card kept competes with Kamahl for the one mythic slot, and this deck already draws off Tatyova x2 without paying life. |
| Arcanis the Omnipotent | RARE SLOT. '{T}: Draw three cards' contains no clock; the shape judge flagged naming it a finisher as what pushed a rejected sketch past the turn-7 deadline. |
| Xira Arien | RARE SLOT. '{B}{R}{G}, {T}: Target player draws a card' is a fine mana sink, but three specific off-green pips per activation is the worst possible shape for a base with 5 sources each of B and R. |
| Jolrael, Mwonvuli Recluse | RARE SLOT. 'Whenever you draw your second card each turn' needs a second draw; outside a resolved Tatyova this deck draws once per turn. |
| Gemstone Mine | RARE SLOT. 'If there are no mining counters on this land, sacrifice it' — a land that removes itself fights a deck whose engine counts lands. |
| Lotus Blossom | RARE SLOT. Needs several upkeeps before it produces, then sacrifices itself; this deck's acceleration has to be live on turns 1-3. |
| Terravore | The judge's flagged weak keystone in the WINNING sketch. 'power and toughness equal to the number of land cards in all graveyards' — nothing in this engine puts lands in a graveyard; the Lairs bounce to HAND. REPLACED, not justified. |
| Krosan Restorer | Named in the thesis but CUT. 'Threshold — Activate only if there are seven or more cards in your graveyard' is fed by 0 of 40 cards here, so it untaps exactly one land for three mana. Peregrine Drake untaps five for four. |
| Thieving Magpie | Interim replacement for Terravore, then cut: {2}{U}{U} against 6 blue sources gives P(2+ blue by turn 4) = 47%. The final list carries no double-pip cost outside green. |
| Crop Rotation | Instant-speed Tatyova trigger, but it 'searches your library for a land card' only — it cannot find any spell, and sacrificing a land fights the land-count engine. |
| Elvish Aberration | The strongest card left on the table. '{T}: Add {G}{G}{G}' is exactly Kamahl's coloured pump cost and Forestcycling {2} hits 10 of 18 lands. It lost its slot to the four blocking grill repairs; it is the first card to try if you iterate. |
| Deep Analysis | Four cards from one slot via Flashback, but gas-out is already covered at 5 of 22 nonland cards and this deck would rather deploy a body on turn 4. |
| Frantic Search | Was the route to making Krosan Restorer's Threshold live; moot once Restorer was cut. |
| Spiritmonger | A 5-mana 6/6 that regenerates through sweepers and would FREE a rare slot by displacing Sol'kanar. Declined because it is not legendary and the locked intent is Five-Color Legends — an explicit trade, not an oversight. |
| Squirrel Nest | 'Enchanted land has {T}: Create a 1/1 green Squirrel' is a token engine, but at {1}{G}{G} on turn 3 it produces its first body on turn 4 and never affects the board that turn. |
| Werebear | Threshold again: 'seven or more cards in your graveyard' is unreachable in this list, leaving a 1/1 that taps for {G} — strictly worse than Radha, Heir to Keld, which is also a legend. |
| Counterspell | {U}{U} against 5 blue sources in a deck that taps out every turn from turn 2. Circular Logic ({2}{U}, single pip) is sideboarded for the stack instead. |
| Terror | Cut from the sideboard: Chainer's Edict already covers hexproof and recursive threats and, unlike Terror, can target black creatures at all. |
| Wrath of God | RARE SLOT, and it kills 12 of this deck's own 14 creature copies. Every sweeper in these colours is symmetric here; Slice and Dice is sideboarded for the token decks only. |
| Terminal Moraine | Searches for 'a basic land card'; the typed duals lack the Basic supertype, so it would fetch only the 3 Forests. |
| Cycling lands (Slippery Karst, Remote Isle, etc.) | Flood insurance and graveyard fuel, but each is a tapped land producing one colour; with 13 tapped lands already the keepable-hand rate could not absorb more. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 17 recommended  [PASS]
Avg CMC:     3.23   Ramp cards: 8   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.36 adj [MV 3.23 vs 2.5, 8 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand   6.1%  prod  27.8%  gap -21.7pp  [OK]
  G  demand  45.5%  prod  61.1%  gap -15.6pp  [OK]
  R  demand  21.2%  prod  27.8%  gap  -6.6pp  [OK]
  U  demand  18.2%  prod  27.8%  gap  -9.6pp  [OK]
  W  demand   9.1%  prod  33.3%  gap -24.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Deck size: mainboard 40 (22 nonland + 18 lands) - PASS
Sideboard: 10 - PASS
Every card exact-name present in working_pool - PASS
Copy limits (commons/uncommons max 2, rares/mythics max 1) - PASS
Rare/mythic total across MB+SB: 5 of max 5 - PASS (Exploration, Birds of Paradise, Kamahl Fist of Krosa [mythic], Rith the Awakener, Sol'kanar the Swamp King)
Sideboard contains 0 rare/mythic cards - PASS
Basic lands (Forest x3) exempt from copy limits - PASS
Colour usability via effective_cost.best_mode for all 5 core colours - PASS, all cards cast normally
Splash: none (core = WUBRG; the splash filter is vacuous when the core is all five colours) - N/A
```
