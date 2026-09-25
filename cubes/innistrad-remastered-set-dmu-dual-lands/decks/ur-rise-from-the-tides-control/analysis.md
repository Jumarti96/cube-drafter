---
deck_name: "ur-rise-from-the-tides-control"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-08-26T00:30:31Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
7x Island
7x Mountain
2x Molten Tributary   ({T}: Add {U} or {R}.) This land enters tapped.
1x Stormcarved Coast  This land enters tapped unless you control two or more other lands. {T}: Add {U} or {R}.
```

### CREATURES (4)

```
CMC  Card                Qty  Color  Role    Rar
  2  Deranged Assistant  x2   U      engine  C
  2  Thermo-Alchemist    x2   R      payoff  U
```

### INSTANTS & SORCERIES (18)

```
CMC  Card                 Qty  Color  Role         Rar
  1  Faithless Looting    x2   R      engine       C
  1  Lightning Axe        x2   R      interaction  U
  1  Syncopate            x2   U      interaction  C
  2  Abrade               x2   R      interaction  U
  2  Think Twice          x2   U      engine       C
  3  Fiery Temper         x2   R      interaction  U
  3  Forbidden Alchemy    x2   U      engine       C
  5  Seize the Storm      x2   R      payoff       C
  6  Rise from the Tides  x2   U      payoff       U
```

### OTHER SPELLS (1)

```
CMC  Card                                    Qty  Color  Role    Rar
  2  Soulcipher Board // Cipherbound Spirit  x1   C      engine  U
```

## SIDEBOARD (10)

```
Card                    Qty  Color  Role / When to board in                                                         Rar
Silent Departure        x2   U      vs a resolved threat; also a 1-mana card into the Rise count                    C
Compelling Deterrence   x2   U      vs resolved enchantments (9% of cube)                                           U
Imprisoned in the Moon  x2   U      vs planeswalkers and untouchable creatures                                      C
Savage Alliance         x2   R      vs go-wide boards; also self-target for trample                                 U
Memory Deluge           x1   U      vs grindy control; deepest card advantage                                       R
Summary Dismissal       x1   U      vs board wipes -- the only unconditional answer to Vanquish the Horde / Avacyn  U
```

## ANALYSIS

### DECK IDENTITY

A UR graveyard-count control deck. It spends its first five or six turns answering things with the cheapest interaction in the colours, and every one of those answers is simultaneously a card going into its own graveyard -- the attrition IS the win condition's counter. Rise from the Tides then converts the whole yard into a board in a single card: 18 of the 23 nonland cards are instants or sorceries (78.3%), the highest density of any build from this pool, and a turn-7 Rise is realistically 6-9 Zombies for 12-18 power. Seize the Storm reads the same resource as a backup, and Thermo-Alchemist is the one payoff that needs no graveyard at all. Three things to be clear-eyed about: Rise resolves on turn 7 but deals its first damage on turn 8, because the tokens enter tapped AND summoning sick; 6 of the 23 nonland cards carry a flashback the deck must usually DECLINE to cast, because flashback exiles the card out of the very count Rise reads; and random mill is worth only 0.45 of a Zombie per card, so casting cheap spells is the engine and milling is the supplement.

### THE ATTRITION IS THE COUNTER

Eighteen of the 23 nonland cards are instants or sorceries — **78.3%**, the highest density of any
deck built from this pool. That matters because Rise from the Tides reads *"for each instant and
sorcery card in your graveyard"*, and the fastest way to fill a graveyard with instants and sorceries
is simply to **cast** them. Every Lightning Axe that kills a creature and every Syncopate that
counters a spell is also one more Zombie later. The interaction suite and the win condition are the
same eighteen cards.

That is the whole reason this build exists as a separate deck rather than a swap into one of the
others.

### THE FLASHBACK TRAP

This is the single most important thing to know about piloting it.

| Card | Graveyard clause | Counts flashback cards in exile? |
|---|---|---|
| Seize the Storm | instants/sorceries in yard **+ flashback cards in exile** | ✅ |
| Rise from the Tides | instants/sorceries in yard | ❌ |

Flashback reads *"Then exile it."* A card you flash back **leaves your graveyard** — and Rise does not
count it any more. Seize the Storm was printed with the exile clause precisely to be immune to this;
Rise was not.

Six of the 23 nonland cards carry a flashback castable in these colours (Faithless Looting ×2, Think
Twice ×2, Seize the Storm ×2). **Do not flash any of them back before a Rise turn.** Each one you cast
is one fewer Zombie. The rule of thumb: flashback is a late-game mana sink for after Rise has already
resolved, or for games where Rise is not the plan.

The elegant exception is **Forbidden Alchemy**. Its flashback is `{6}{B}` — uncastable in UR. The half-
dead card that got cut from two of the other three decks for exactly that reason is the *ideal* fuel
here: it bins three cards at instant speed and is structurally incapable of exiling itself.

### MILL IS THE SUPPLEMENT, NOT THE ENGINE

Worth stating precisely, because it is easy to get wrong: a random mill reads the **whole library**,
which is 40 cards including 17 lands. So Deranged Assistant is worth **0.45 of a Zombie per
activation**, not 0.78. That is why the build runs only two random-mill outlets and instead spends its
slots on cheap spells worth exactly 1 apiece.

Soulcipher Board is the exception that earns its slot: *"Look at the top two cards of your library.
Put **one of them** into your graveyard"* — you choose, so it is worth a full 1.0 per activation, more
than twice Deranged Assistant's rate. (It will effectively never flip into Cipherbound Spirit; that
needs creature cards hitting your yard and this deck runs four creature copies.)

**Realistic turn-7 Rise: 6–9 Zombies, or 12–18 power.**

### IT RESOLVES ON SEVEN AND KILLS ON EIGHT

Rise's tokens enter **tapped**, and like any token made on your own turn they are also summoning sick.
Seize the Storm's Elemental has trample but no haste. So four of the six payoff copies do nothing at
all on the turn they resolve, and the opponent gets a full untapped turn against a board that cannot
even block.

There is no card in this pool that fixes that. Temporal Mastery looks like it does, but hard-casting it
is `{5}{U}{U}` — seven mana, turn 8 at the earliest, by which point the Zombies have untapped on their
own. The miracle line needs it drawn as the first card on the exact turn you hold eight lands: one card
in forty.

So the answer is the one this deck is actually built around: **survive that turn**. Eight copies of the
cheapest interaction in the colours, held up rather than spent, plus Thermo-Alchemist as a 0/3 body.
Plan for the kill on turn 8 and hold answers accordingly.

### THE TWO CARDS THAT BEAT IT

Of the cube's four sweepers, two erase a Zombie board outright: **Vanquish the Horde** (*"costs {1}
less to cast for each creature on the battlefield"* — against a ten-Zombie board it costs **{0}**) and
the back face of **Archangel Avacyn** (*"deals 3 damage to each other creature"*, which kills 2/2s).
Syncopate does not answer either, because the opponent simply pays. **Summary Dismissal** is in the
sideboard for exactly this and has no `{X}` to pay — board it in against white.

And a correction worth carrying: the automated hate probe for this cube reports zero graveyard
interaction, but that is a zero-match, not a fact. Two cards do exist — Soul-Guide Gryff and Invasion
of Innistrad // Deluge of the Dead — and Deluge is *repeatable* exile. Both are off-colour for UR so
this deck cannot board an answer, and at 2 of 305 cards it is very unlikely to matter. But this is the
deck in the pool that would mind most, so it is worth knowing rather than assuming.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:6  2:9  3:4  5:2  6:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.8: Rise from the Tides@0.8, Rise from the Tides@0.8, Seize the Storm@0.8, Seize the Storm@0.8, Thermo-Alchemist@0.8, Thermo-Alchemist@0.8) → p=0.83 (need ≥ 0.75)
  PASS  enabler: 17 copies (effective 15.7: Soulcipher Board // Cipherbound Spirit@0.7, Deranged Assistant@0.5, Deranged Assistant@0.5) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 71%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper. Against a wide board this deck's answer is to out-board it -- Rise from the Tides makes one 2/2 Zombie per instant or sorcery in the graveyard, which by turn 7 is typically larger than what it is facing. Savage Alliance x2 is the sideboard answer when that is not fast enough.
  OK        single_large_threat: Lightning Axe, Abrade, Fiery Temper
  OK        noncreature_permanents: Abrade
  OK        stack: Syncopate
  CONCEDED  graveyard: CORRECTED: the dossier's graveyard_hate probe returns an empty list, but that is a 0-match and the dossier's own census_caveat warns a 0-match proves nothing. Reading the pool directly, TWO cards interact with a graveyard: Soul-Guide Gryff ('exile up to one target card from a graveyard', {4}{W}) and Invasion of Innistrad // Deluge of the Dead ('{2}{B}: Exile target card from a graveyard', repeatable). Both are off-colour for [U,R], so this deck cannot board either -- but an opposing W or B deck can run them, and against THIS deck a repeatable exile is the single best card in the cube: three activations off Deluge removes 3 Zombies from a 6-9 board, 33-50%. The class is conceded because the density is 2 of 305 (0.7%) and neither is castable here, not because it does not exist.
```

- No WARN flags were raised by the Phase 6b gate -- all four checks returned PASS -- so there is nothing here to respond to. Recorded explicitly rather than left as an empty list, because the Challenger flagged an empty structural_responses as indistinguishable from an omission.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Syncopate is an {X}{U} sink that scales with every extra land. Seize the Storm's Flashback {6}{R} and Think Twice's Flashback {2}{U} convert surplus mana into a second cast, though the Think Twice flashback is priced against Rise (it exiles the card out of the count) and is normally held until Rise is already lethal. Rise itself at {5}{U} and Seize at {4}{R} are the top end a flooded hand deploys, and unlike the other three decks this one WANTS to reach six-plus lands. |
| screw | mitigation | 15 of the 23 nonland cards cost 2 or less (curve 1:6, 2:9) -- Lightning Axe {R} x2, Syncopate {X}{U} x2, Faithless Looting {R} x2, Abrade {1}{R} x2, Think Twice {1}{U} x2, Deranged Assistant {1}{U} x2, Galvanic Iteration {U}{R}. Faithless Looting digs on turn 1 and its discard is upside here. Deranged Assistant's '{T}, Mill a card: Add {C}' is a second source of the sixth mana. The goldfish check reports 86% keepable and 88% on three lands by turn 3 -- the healthiest numbers of the four decks, which is what 17 lands buys. |
| decapitation | mitigation | The win condition runs at 6 copies across three cards that fail differently: Rise from the Tides x2 (a board from the graveyard), Seize the Storm x2 (one body from the graveyard plus exile) and Thermo-Alchemist x2 (repeatable damage needing no graveyard at all). Answering the graveyard plan does not answer Thermo-Alchemist, and answering a creature does not answer a sorcery in hand. The Phase 6b assembly check confirms P(a payoff seen by turn 7) = 0.83 on reliability-weighted copies. |
| gas-out | mitigation | This is the most card-dense of the four decks: Think Twice x2 replaces itself on each of two casts, Forbidden Alchemy x2 selects one of four, Faithless Looting x2 draws two, and Memory Deluge in the sideboard is two cards then two more. More fundamentally the deck does not need to keep drawing to win -- Rise from the Tides converts cards it has ALREADY spent into a board, so an empty hand with a full graveyard is the position it is aiming for rather than the one it fears. |
| raced | accepted | This deck has 4 creature copies total (Thermo-Alchemist x2, Deranged Assistant x2) and only Thermo-Alchemist blocks meaningfully -- and Rise's Zombies enter TAPPED, so they cannot block on the crack-back turn either. Against the cube's 58 evasive creatures (20.9%) the plan is 8 copies of cheap interaction and nothing else until turn 7. Mitigating would mean maindecking blockers, which in a deck where 18 of 23 nonland cards are instants and sorceries directly shrinks the number Rise reads -- every creature added is one fewer Zombie. That trade is refused; the deck accepts being the slowest of the four and relies on trading one-for-one until the sorcery lands. |
| disruption-fizzle | mitigation | The graveyard is nearly uninteractable in this cube -- only 2 of 305 cards touch one (Soul-Guide Gryff and Invasion of Innistrad // Deluge of the Dead), and both are off-colour for [U,R], so the accumulated count is safe against almost every deck but not by rule. The critical turn is the Rise cast itself, and Syncopate x2 is held up for exactly that; Rise also runs at 2 copies plus 2 Seize the Storm reading the same yard, so a single counterspell costs one attempt rather than the game. The one genuine fizzle risk is self-inflicted and is a play-pattern rule rather than a card: do NOT flashback Faithless Looting or Think Twice before casting Rise, because flashback exiles the card and shrinks the count. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Thing in the Ice // Awoken Horror | TRAP in this build on its own oracle text: Awoken Horror 'returns all non-Horror creatures to their owners' hands'. Rise from the Tides' Zombies are non-Horror TOKENS, so the flip bounces them and they cease to exist -- it would destroy the exact board this deck spends six mana to make. It is deck B's payoff, not this one's. |
| Epitaph Golem | '{2}: Put target card from your graveyard on the bottom of your library' -- it actively empties the graveyard this deck is filling, shrinking Rise by one per activation. Anti-synergy, not utility. |
| Necroduality | 'Whenever a NONTOKEN Zombie you control enters, create a token that's a copy of that creature.' Every Zombie this deck makes is a token, so the trigger condition is never met -- 0 of the deck's Zombies qualify. |
| Village Messenger // Moonrise Intruder, Hungry Ridgewolf, Runebound Wolf, Ulrich's Kindred, Geier Reach Bandit // Vildin-Pack Alpha, Hanweir Watchkeep // Bane of Hanweir, Conduit of Storms // Conduit of Emrakul, Kruin Outlaw // Terror of Kruin Pass, Smoldering Werewolf // Erupting Dreadwolf | Werewolves transform only 'if no spells were cast last turn'. This deck casts one to three cheap spells every turn by design -- the flip condition is the exact inverse of the deck's engine. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.52   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.64 adj [MV 2.52 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  56.0%  prod  58.8%  gap  -2.8pp  [OK]
  U  demand  44.0%  prod  58.8%  gap -14.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS -- verified by Phase 5C check 3 against cube_search.get_max_copies
rares_mythics_max_1_each: PASS -- all three are single copies
max_5_rares_mythics_total: PASS -- only 3 of 5 used: Galvanic Iteration (rare, main), Stormcarved Coast (rare, main, land), Memory Deluge (rare, sideboard). Two rare slots are deliberately left unspent, which is unusual and worth stating: this archetype's best cards are an uncommon (Rise from the Tides) and a common (Seize the Storm), so the rare budget simply is not the binding constraint here the way it was for decks B and C.
all_cards_from_cube: PASS -- exact-name membership verified against the working pool cache
basics_unlimited: Island 7, Mountain 7 -- format-supplied, exempt
colour_legality: PASS -- every nonland card is on-colour by its printed identity. Forbidden Alchemy prints as [B,U] because of its {6}{B} flashback and is admitted for its {2}{U} front-face cast mode only; the flashback is uncastable here and is never counted.
```
