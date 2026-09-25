---
deck_name: "wubrg-legacy-weapon-attrition"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WUBRG"
format: "40-card"
built_at: "2026-08-02T18:22:13Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
2x   Contaminated Aquifer      Land — U/B
1x   Forest                    Land — basic, untapped G, Nature's Lore target
1x   Geothermal Bog            Land — B/R
2x   Idyllic Beachfront        Land — W/U
1x   Island                    Land — basic, untapped U
1x   Maze of Ith               Land — free repeatable combat answer (no mana ability)
2x   Molten Tributary          Land — U/R
1x   Plains                    Land — basic, untapped W for turn-1 Swords to Plowshares
1x   Radiant Grove             Land — G/W (Forest card)
1x   Sacred Peaks              Land — R/W
2x   Sunlit Marsh              Land — W/B
2x   Tangled Islet             Land — G/U (Forest card)
1x   Wooded Ridgeline          Land — R/G (Forest card)
```

### CREATURES (8)

```
CMC  Card                      Qty   Color Role                                                                                              Rar
  1  Birds of Paradise         x1    G     Engine — turn-1 any-colour fixing                                                                 R
  4  Floodgate                 x1    U     Interaction — one-sided sweeper (all own creatures blue or flying)                                U
  4  Thieving Magpie           x2    U     Engine — evasive body that draws on damage                                                        U
  5  Peregrine Drake           x1    U     Engine — untaps five lands, halves the gap to the 12-mana turn                                    C
  5  Sol'kanar the Swamp King  x1    BRU   Threat — 5/5 clock, swampwalk upside                                                              R
  5  Tatyova, Benthic Druid    x2    GU    Engine — legend; every land drop draws a card                                                     U
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                      Qty   Color Role                                                                                              Rar
  1  Swords to Plowshares      x2    W     Interaction — 1-mana unconditional exile                                                          U
  2  Chainer's Edict           x2    B     Interaction — edict, live vs any board; Flashback = 2 answers                                     U
  2  Nature's Lore             x2    G     Engine — fetches a typed dual (Forest card)                                                       U
  2  Snap                      x1    U     Interaction — free bounce; 'Untap up to two lands' refunds its own cost                           C
  3  Recoil                    x2    BU    Interaction — any-permanent answer + discard; also triggers own Floodgate                         U
  4  Fire // Ice               x2    RU    Interaction — two castable halves                                                                 U
```

### OTHER SPELLS (3)

```
CMC  Card                      Qty   Color Role                                                                                              Rar
  1  Wild Growth               x2    G     Engine — net mana on any land                                                                     C
  7  Legacy Weapon             x1    C     Payoff — inevitability engine (repeatable exile)                                                  M
```

## SIDEBOARD (10)

```
Card                      Qty   Color Role / When to board in                                                                           Rar
Orim's Thunder            x2    W     vs ARTIFACTS (24) + ENCHANTMENTS (33) — destroys either; Kicker {R} also burns a creature         C
Pacifism                  x1    W     vs EVASION (42 evasive creatures) — grounds a flier without killing it                            C
Slice and Dice            x1    R     vs WIDE BOARDS where Floodgate is too slow — Tokens is 21 cube cards                              U
Spite // Malice           x2    BU    vs STACK — Spite counters a noncreature spell for a single {U}; Malice kills a nonblack creature  U
Terror                    x2    B     vs CREATURES — live against 84 of 120 unique cube creatures (70%)                                 C
Tormod's Crypt            x2    C     vs GRAVEYARD (45 cube cards, 18.75%) — the cube's only graveyard hate; {0} to cast                U
```

## ANALYSIS

### DECK IDENTITY

A true five-colour attrition control deck. It answers cheaply and card-neutrally on the way to seven mana, then deploys Legacy Weapon as an inevitability engine that converts every surplus turn into 'Exile target permanent' and cannot be permanently answered, because it shuffles itself back into the library from anywhere. Legacy Weapon does not reduce a life total; the clock is Sol'kanar the Swamp King plus Thieving Magpie x2, with Tatyova, Benthic Druid turning an 18-land manabase into a draw engine. The manabase is the price of admission: 14 of 18 lands enter tapped, paid deliberately because nothing else in this pool produces WUBRG simultaneously.

### WHAT FIVE COLOURS ACTUALLY BUYS HERE

This cube has **no domain, converge, or sunburst payoff**. Sweeping all 276 unique pool cards for "domain", "converge", "sunburst", "basic land types among" and "each color" returns exactly two hits, and both are *fixing* rather than payoff: Birds of Paradise and Gemstone Mine. Five colours therefore buys **access**, not a bonus.

More pointedly, the cube's "five-colour legends" are really four different three-colour wedges. Only one card in the pool demands WUBRG at all:

| Legend | Cost | Wedge |
|---|---|---|
| Xira Arien | {B}{R}{G} | Jund |
| Zur the Enchanter | {1}{W}{U}{B} | Esper |
| Sol'kanar the Swamp King | {2}{U}{B}{R} | Grixis |
| Rith, the Awakener | {3}{R}{G}{W} | Naya |
| Arcades Sabboth | {2}{G}{G}{W}{W}{U}{U} | Bant |
| **Legacy Weapon** | {7}, then {W}{U}{B}{R}{G} | **WUBRG** |

So this deck is built around the one card that genuinely rewards the manabase, and Legacy Weapon is honestly an **inevitability engine, not a kill mechanism** — nothing in its text reduces a life total. The clock is named separately: Sol'kanar the Swamp King, Thieving Magpie x2, and Tatyova, Benthic Druid x2.

### THE BINDING CONSTRAINT IS RARITY, NOT MANA

The dossier reports 1-2 "free" duals per colour pair, which reads as thin fixing. That count is of *distinct cards*. At two copies per common there are **20 dual-tapland copies available across the ten pairs**, all common. Fixing is deep; what is scarce is rarity budget. Nearly every marquee card in this archetype is rare — Birds of Paradise, Gemstone Mine, Lotus Blossom, Exploration, Sylvan Library, all five check-lands, and every legend except Tatyova and Radha — against a cap of **five rare/mythic cards total**.

The finished deck spends only **4 of the 5**. The fifth was deliberately left unspent rather than adding a card the derivation argues against.

### FLOODGATE IS ONE-SIDED IN THIS EXACT DECK

The first draft ran Slice and Dice as its wide-board answer. Counting it against the actual list: *"deals 4 damage to each creature"* kills **5 of the deck's 6 creatures**, including three of the copies the assembly check depends on. Floodgate replaces it:

> "When this creature leaves the battlefield, it deals damage to each **nonblue** creature **without flying** equal to half the number of Islands you control, rounded down."

Counting Island-typed lands in this manabase — Contaminated Aquifer x2, Idyllic Beachfront x2, Molten Tributary x2, Tangled Islet x2, Island x1 = **9 Islands, so 4 damage**. And every creature in the deck is blue or flying (Birds of Paradise flies; Sol'kanar, Tatyova x2, Thieving Magpie x2, Peregrine Drake and Floodgate itself are all blue), so **0 of 6 are legal targets for its own trigger**. Recoil and Snap both return a permanent to hand, so either can bounce your own Floodgate to fire it on demand.

### THE TYPED-DUAL DETAIL THAT CHANGES NATURE'S LORE

The ten common duals are *typed* — `Land — Forest Plains`, `Land — Island Swamp`, and so on. That makes them legal targets for Nature's Lore (*"Search your library for a **Forest card**"*): Tangled Islet, Wooded Ridgeline and Radiant Grove all count, giving **5 Forest cards in 18 lands**. It also means Terminal Moraine is *not* interchangeable with it — Terminal Moraine searches for *"a **basic** land card"*, and the duals lack the Basic supertype.

### THE COST THAT IS NOT PAID

14 of 18 lands read *"This land enters tapped."* That is why the goldfish check flags a 73% keepable rate against an 80% threshold, and it is not fixable in this pool: the only untapped any-colour land is Gemstone Mine, whose *"If there are no mining counters on this land, sacrifice it"* clause retires it after three activations — well before a turn-9 engine comes online. Three untapped basics (Plains, Island, Forest) exist purely so that a turn-1 Swords to Plowshares, Wild Growth or Birds of Paradise is possible at all. Against the cube's fastest decks this deck is simply a turn behind, and that is accepted rather than mitigated, because the alternative costs the five-colour access that is the entire point.


### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:5  2:5  3:2  4:5  5:4  7:1
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.6: Thieving Magpie@0.6, Thieving Magpie@0.6, Tatyova, Benthic Druid@0.7, Tatyova, Benthic Druid@0.7) → p=0.86 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.8: Peregrine Drake@0.8) → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 73% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 52%  T2 87%  T3 94%
Coverage:  [PASS]
  OK        wide_boards: Floodgate, Recoil
  OK        single_large_threat: Swords to Plowshares, Chainer's Edict, Maze of Ith
  OK        noncreature_permanents: Recoil, Legacy Weapon
  CONCEDED  stack: Maindeck slots go to answers that are live against a resolved board, because 5 of the cube's 271 cards are counter effects while 120 are creatures. Spite // Malice x2 ({3}{U}, a single blue pip) is sideboarded for the matchups where the stack matters; the earlier double-pip justification was wrong and has been withdrawn.
  CONCEDED  graveyard: Tormod's Crypt is sideboarded rather than maindecked because only part of the cube is graveyard-based; maindeck slots go to universally live answers.
```

- GOLDFISH WARN (keepable 73%, need 80%): accepted. Two mechanisms drive it. First, 14 of 18 lands read 'This land enters tapped'; an untapped five-colour base does not exist in this pool, since the only untapped any-colour land is Gemstone Mine and its 'sacrifice it' clause retires it before turn 9. Second, the curve is deliberately top-heavy (Legacy Weapon 7, Sol'kanar 5, Tatyova 5 x2, Peregrine Drake 5) because the thesis is a turn-9+ inevitability plan, not a curve-out. Mitigants in-list: 3 untapped basics (Plains, Island, Forest) make turn-1 Swords to Plowshares, Wild Growth and Birds of Paradise castable; Snap 'untaps up to two lands' so it costs no net mana; Peregrine Drake 'untaps up to five lands' to manufacture the activation turn.
- CURVE: PASS, no response required.
- ASSEMBLY: PASS at p=0.86. The first run FAILED at p=0.67 with three payoff copies, because the 5-rare cap forces every rare payoff to be a 1-of. The repair added functional copies at common/uncommon rarity (Thieving Magpie x2, later Tatyova x2) rather than revising the thesis turn or inflating any weight.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Legacy Weapon's '{W}{U}{B}{R}{G}: Exile target permanent' is an unbounded mana sink that converts every excess land into removal. Tatyova, Benthic Druid x2 ('Whenever a land you control enters, you gain 1 life and draw a card') turns the 18th, 19th and 20th land into cards rather than dead draws — with 18 lands in 40, roughly 45% of subsequent draws trigger her. Chainer's Edict's 'Flashback {5}{B}{B}' is a second use for late mana. |
| screw | mitigation | 3 of the 18 lands enter untapped (Plains, Island, Forest), so a turn-1 play off a two-land keep is possible: Swords to Plowshares needs the Plains, Wild Growth or Birds of Paradise the Forest. Nature's Lore x2 ('Search your library for a Forest card, put that card onto the battlefield') finds 1 of the 5 Forest cards, and Snap ('Untap up to two lands') lets a stalled turn interact for free. The earlier claim that Swords to Plowshares was generally turn-1 castable was wrong — before repair the deck had zero untapped white sources — and the Plains was added specifically to make it true. |
| decapitation | mitigation | Legacy Weapon cannot be permanently answered: 'If Legacy Weapon would be put into a graveyard from anywhere, reveal Legacy Weapon and shuffle it into its owner's library instead' — destruction, countering and milling all return it to the library to be redrawn. If it is exiled instead, the deck retains 5 other functional win-condition copies (Sol'kanar the Swamp King, Thieving Magpie x2, Tatyova, Benthic Druid x2), which is what carries the assembly check to p=0.86. |
| gas-out | mitigation | Genuinely net-positive card text, counted strictly: Tatyova, Benthic Druid x2 draw a card per land entering (18 lands plus Nature's Lore x2 as extra triggers), Thieving Magpie x2 draw on connection, and Chainer's Edict x2 give a second use via Flashback. That is 6 of 22 nonland cards (27%) that produce cards beyond themselves. The earlier claim of '8 of 22 Net-Positive or Self-Replacing' was wrong and is withdrawn: those cards carry resource_exchange: [] in the bundle, and Cycling '{2}, Discard this card: Draw a card' is card-neutral, not net-positive. |
| raced | accepted | The cube's fastest clocks are its 42 evasive creatures and the Goblin package; with 14 enters-tapped lands and a top-heavy curve this deck is routinely a turn behind for the first three turns and loses some races outright. Mitigating would mean cutting typed duals for basics, which would directly cost the simultaneous WUBRG availability that IS the archetype — in this pool a deck cannot both fix five colours and enter untapped. The cost of mitigating is the deck's identity. |
| disruption-fizzle | mitigation | The critical turn is a single cast of Legacy Weapon at {7}; there is no multi-card chain to interrupt. If the cast is countered, its own replacement clause shuffles it from the graveyard back into the library, so interaction delays it rather than removing it. Interaction aimed at Sol'kanar, a Magpie or a Tatyova mid-combat costs the opponent a card while the deck's 10 interaction spells continue to trade. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Arcades Sabboth | {2}{G}{G}{W}{W}{U}{U} is 8 mana and 'sacrifice Arcades Sabboth unless you pay {G}{W}{U}' every upkeep — uncastable at competitive power in 40 cards. |
| Gemstone Mine | RARE SLOT. The pool's only untapped any-colour land, but 'If there are no mining counters on this land, sacrifice it' retires it after three activations — before this deck's turn-9+ engine comes online. |
| Arcanis the Omnipotent | RARE SLOT. Cut during grill repair: {3}{U}{U}{U} against 9 blue sources, and the slot bought Tatyova, Benthic Druid x2 at uncommon instead — two bodies rather than one, at no rare cost. |
| Decimate | RARE SLOT. 'You can't cast this spell unless you have legal choices for all its targets' — needs an artifact AND a creature AND an enchantment AND a land simultaneously. |
| Rith, the Awakener | RARE SLOT. A 6/6 flier at {3}{R}{G}{W}, but the Saproling trigger needs combat damage plus {2}{G} on top; the rare budget bought fixing and Sol'kanar instead. |
| Xira Arien | RARE SLOT. '{B}{R}{G}, {T}: Target player draws a card' is a fine mana sink, but three specific pips per activation competes directly with Legacy Weapon's five. |
| Zur the Enchanter | RARE SLOT. Its trigger fetches enchantments of mana value 3 or less; this list runs 2 such cards (Wild Growth x2), so the tutor has almost nothing to find. Built as a separate deck instead. |
| Sylvan Library | RARE SLOT. 'pay 4 life' per extra card kept is a poor rate in a deck with no lifegain engine beyond Tatyova's incidental 1 per land. |
| Exploration | RARE SLOT. Extra land drops are worth little without a landfall payoff; this list has Tatyova x2 but no Lair-recursion plan. Built as a separate deck instead. |
| Urza, Lord High Artificer | MYTHIC SLOT. 'Tap an untapped artifact you control: Add {U}' scales with artifact count; this list runs 0 artifacts among its 22 nonland cards. |
| Yawgmoth, Thran Physician | MYTHIC SLOT. 'Pay 1 life, Sacrifice another creature' needs a creature surplus; this list runs 6 creatures total and needs all of them. |
| Lyra Dawnbringer | MYTHIC SLOT on a mono-white 5-drop with {W}{W} — the worst pip shape available for a five-colour base holding WUBRG open. |
| Chainer, Dementia Master | '{B}{B}{B}, Pay 3 life' is unpayable off 5 black sources in 18 lands. |
| Dark Depths | '{3}: Remove an ice counter' ten times is 30 mana, and these colours offer no proliferate or counter-removal support. |
| Kamahl, Fist of Krosa | {4}{G}{G} plus a {2}{G}{G}{G} activation — triple green is unreachable off 5 green sources. |
| Slice and Dice | MAINDECK CUT (kept in sideboard). 'deals 4 damage to each creature' kills 5 of this deck's 6 creatures, including 3 of the copies the assembly check depends on. Floodgate does the same job one-sidedly here. |
| Radiant's Judgment | 'Destroy target creature with power 4 or greater' is live against 21 of the cube's 120 unique creatures (17.5%). Chainer's Edict is live against any non-empty board and gives two answers per card via Flashback. |
| Ichor Slick | Cut for curve: at MV 3 it competed with Chainer's Edict at MV 2 for the same role, and the Madness {3}{B} rider is dead — 0 of 40 cards can discard it. |
| Deep Analysis | Cut to make room for payoff copies when the assembly check failed. It is the strongest remaining swap-back if you would rather have raw card draw than a second Tatyova. |
| Counterspell / Absorb | {U}{U} and {W}{U}{U} are hard to hold open in a base where 14 of 18 lands enter tapped; the single-pip Spite // Malice is sideboarded for the stack instead. |
| Helm of Awakening | Symmetric — 'Spells cost {1} less to cast' helps the opponent equally, and this deck is the one casting fewer, larger spells. |
| Werebear / Krosan Restorer | Threshold ('seven or more cards in your graveyard') is unreachable: 0 of the 22 nonland cards fill the graveyard proactively. |
| Ovinomancer | 'sacrifice it unless you return three basic lands you control' — this manabase runs exactly 3 basics and needs all of them untapped. |
| Terminal Moraine | Searches for 'a basic land card'; the ten common duals lack the Basic supertype, so it can only fetch true basics — strictly worse than Nature's Lore here. |
| Mind Stone / Millikin | Colourless acceleration helps cast Legacy Weapon's {7} but contributes nothing to its {W}{U}{B}{R}{G} activation, which is the half that actually gates the plan. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 17 recommended  [PASS]
Avg CMC:     3.09   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.21 adj [MV 3.09 vs 2.5, 6 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  16.1%  prod  27.8%  gap -11.7pp  [OK]
  G  demand  22.6%  prod  27.8%  gap  -5.2pp  [OK]
  R  demand   9.7%  prod  27.8%  gap -18.1pp  [OK]
  U  demand  45.2%  prod  50.0%  gap  -4.8pp  [OK]
  W  demand   6.5%  prod  38.9%  gap -32.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Deck size: mainboard 40 (22 nonland + 18 lands) - PASS
Sideboard: 10 - PASS
Every card exact-name present in working_pool - PASS
Copy limits (commons/uncommons max 2, rares/mythics max 1) - PASS
Rare/mythic total across MB+SB: 4 of max 5 - PASS (Legacy Weapon [mythic], Sol'kanar the Swamp King, Birds of Paradise, Maze of Ith)
Sideboard contains 0 rare/mythic cards - PASS
Basic lands (Plains x1, Island x1, Forest x1) exempt from copy limits - PASS
Colour usability via effective_cost.best_mode for all 5 core colours - PASS, all cards cast normally (no alternate-mode inclusions)
Splash: none (core = WUBRG) - N/A
```
