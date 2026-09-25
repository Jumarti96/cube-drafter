---
deck_name: "gu-hydromancer-copy"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GU"
format: "40-card"
built_at: "2026-08-18T23:22:30Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x2   Crystal Grotto             When this land enters, scry 1. {T}: Add {C}. {1}, {T
  x8   Forest                     basic
  x3   Island                     basic
  x2   Tangled Islet              ({T}: Add {G} or {U}.) This land enters tapped.
  x1   Yavimaya Coast             {T}: Add {C}. {T}: Add {G} or {U}. This land deals 1
```

### CREATURES (13)

```
CMC Card                       Qty   Color  Role                             Rar
2   Leaf-Crowned Visionary     x1    G      Payload/Payoff + Engine/Outlet   R
2   Llanowar Loamspeaker       x1    G      Infrastructure/Consistency       R
2   Quirion Beastcaller        x1    G      Payload/Payoff                   R
2   Vineshaper Prodigy         x2    G      Payload/Payoff                   C
2   Yavimaya Iconoclast        x2    G      Payload/Payoff                   U
3   Deathbloom Gardener        x2    G      Infrastructure/Consistency       C
3   Elvish Hydromancer         x2    G      Payload/Payoff                   U
4   Nael, Avizoa Aeronaut      x2    GU     Payload/Payoff                   U
```

### INSTANTS & SORCERIES (11)

```
CMC Card                       Qty   Color  Role                             Rar
1   Shore Up                   x1    U      Interaction/Disruption           C
1   Tail Swipe                 x2    G      Interaction/Disruption           U
2   Bite Down                  x2    G      Interaction/Disruption           C
2   Essence Scatter            x2    U      Interaction/Disruption           C
2   Impulse                    x2    U      Infrastructure/Consistency       C
2   Joint Exploration          x2    U      Infrastructure/Consistency       U
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                      Rar
Impede Momentum            x1    U      Interaction/Disruption â€” vs a single large C
Negate                     x2    U      Interaction/Disruption â€” vs sagas, sweeper C
Snarespinner               x2    G      Interaction/Disruption â€” vs cheap fliers — C
Broken Wings               x2    G      Interaction/Disruption â€” vs fliers, artifa C
Llanowar Greenwidow        x1    G      Payload/Payoff â€” vs aggro — a 4/3 reach tr R
Magnigoth Sentry           x2    G      Interaction/Disruption â€” vs decks whose cl C
```

## ANALYSIS
### DECK IDENTITY
A Simic Elf midrange deck that grinds on card advantage and has a ceiling nothing else in the cube matches. The floor, and the real plan: twelve Elf spells under Leaf-Crowned Visionary's +1/+1 anthem and its pay-{G}-draw-a-card trigger, two 2/4 fliers that filter on every connection, and six pieces of interaction. The ceiling: Elvish Hydromancer kicked creates a token copy of a creature you control, and because the Visionary is NOT legendary, copying it stacks the anthem to +2/+2 and gives a second, independent draw trigger per Elf spell. Stated honestly after the Phase 9 grill — that kicked cost is {2}{G} plus {3}{U} = SEVEN mana, not six, and the doubled trigger then wants two separate {G} payments, so it is an upside the deck reaches sometimes, not a combo it assembles on a clock.
**The headline interaction is real, and it is more expensive than it looks.** Leaf-Crowned Visionary is NOT legendary, so a token copy of it coexists with the original: the anthem stacks to +2/+2 on other Elves and each copy offers its own draw trigger on every Elf spell. Elvish Hydromancer kicked makes that copy. What the first draft of this deck got wrong — and the self-grill caught — is the price: {2}{G} plus kicker {3}{U} is **seven** mana, not six, and the doubled draw then wants two separate {G} payments on top. From a 16-land base, seven lands by turn 7 is roughly a 27% proposition on lands alone.

**So the deck is built to win without it.** The floor is what you play most games: twelve Elf spells under a single anthem, two 2/4 fliers that filter two cards on every connection, four cantrips, and seven pieces of interaction. The Hydromancer copy is the ceiling, and it is reached often enough to matter — but the deck does not tap out on turn 7 hoping for it.

**Why land_target's answer needed a caveat.** The formula computes average mana value from printed `mana_cost`, and kicker costs never appear there. It sees a 2.21-average-MV deck and returns 16 lands, having never seen the seven-mana card the deck is named after. That is recorded explicitly in `land_math.known_limit_of_this_number` rather than papered over by hand-adjusting the count.

**Threats Undetected looks like the tutor this deck wants and is not.** 'Search your library for up to four creature cards with different powers... An opponent chooses two of those cards.' This maindeck has only three distinct printed creature powers, so it reveals three, the opponent shuffles two, and you keep one card of *their* choosing — never the singleton lord you were looking for. It was cut for Quirion Beastcaller.

**Shore Up is the least glamorous card here and one of the most important.** The Hydromancer's copy trigger is mandatory and *targeted*: kill the target in response and the trigger fizzles after you have spent seven mana. Before the grill this deck had zero cards that protect a permanent. One mana for hexproof-and-untap is the whole answer.

| Card | What it looks like | What it actually does here |
|---|---|---|
| Nael, Avizoa Aeronaut | a Domain payoff | X is fixed at 2 (Forest + Island); the five-type draw never fires. It is a 2/4 flier that filters two cards per hit |
| Yavimaya Iconoclast | a kicker card | {R} kicker is dead in Simic; it is here as a 3/2 trample Elf for two |
| Tangled Islet | fixing | enters tapped — fine for a deck whose first proactive turn is turn 2 |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:3  2:15  3:4  4:2
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.2: Elvish Hydromancer@0.6, Elvish Hydromancer@0.6, Nael, Avizoa Aeronaut@0.7, Nael, Avizoa Aeronaut@0.7, Quirion Beastcaller@0.6) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 12 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 47%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper is available in G/U in this pool — the cube's 6 sweepers are in other colours. Against a wide board the deck blocks with 2/4 fliers and deathtouch and wins the long game on cards; Bite Down picks off the single largest attacker.
  OK        single_large_threat: Bite Down, Tail Swipe, Essence Scatter, Deathbloom Gardener
  CONCEDED  noncreature_permanents: The maindeck cannot touch a resolved noncreature permanent at all — Essence Scatter is 'Counter target creature spell'. Broken Wings x2 and Negate x2 are the boarded answers, 4 of the 10 sideboard slots; Tear Asunder was cut in the Phase 9 repair because its base mode is a near-subset of Broken Wings' targets and 6 of 10 slots on a 12.4% class was too many.
  OK        stack: Essence Scatter
  CONCEDED  graveyard: The dossier reports 0 graveyard-hate cards in the entire cube, so no colour can cover this class.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Llanowar Loamspeaker's '{T}: Target land you control becomes a 3/3 Elemental creature with haste until end of turn' turns a surplus land into an attacker; Leaf-Crowned Visionary's 'you may pay {G}. If you do, draw a card' turns spare mana into cards off 12 of the 24 nonland cards; and the deck's top end is a seven-mana kicked Hydromancer, so extra lands are what the ceiling costs rather than dead draws. |
| screw | mitigation | Sixteen lands plus four cards that replace themselves and dig: Impulse x2 ('look at the top four cards... put one of them into your hand') and Joint Exploration x2 ('Scry 2, then draw a card'), backed by Crystal Grotto x2 which scry on entry. Only 2 of the 24 nonland cards cost more than three mana. Corrected from a pre-grill draft that said seventeen lands and 23 nonland cards, and that wrongly credited Threats Undetected (which searches for creature cards only) and kicked Joint Exploration (which puts a land 'from your hand' onto the battlefield — it accelerates a land you already have rather than finding one). The goldfish check reports 84% keepable and 84% three lands by turn 3. |
| decapitation | mitigation | The Visionary is a singleton and the deck is explicitly built to win without it: 12 Elf bodies, two 2/4 fliers, Quirion Beastcaller whose death trigger 'distribute X +1/+1 counters among any number of target creatures you control' keeps its investment on the board, and a kicked Hydromancer that copies Nael instead. Impulse x2 and Joint Exploration x2 dig toward it; Shore Up ('gains hexproof until end of turn') protects it from targeted removal. Corrected from a pre-grill draft that claimed Threats Undetected 'searches for it directly' — the opponent chooses which cards are shuffled back, so it cannot deliver a named singleton — and that claimed Essence Scatter protects against a counter-war, which 'Counter target creature spell' does not do. |
| gas-out | mitigation | This is the card-advantage deck of the four: the Visionary's per-Elf draw off 12 of 24 nonland cards, a second copy of that trigger if the Hydromancer resolves kicked, Nael x2 filtering two cards on every connection, Impulse x2, Joint Exploration x2, kicked Vineshaper Prodigy x2 ('look at the top three cards... put one of them into your hand') and Crystal Grotto x2's enter-scry. Nine of the 24 nonland cards draw or dig (Visionary 1, Impulse 2, Joint Exploration 2, Nael 2, kicked Vineshaper Prodigy 2) — recounted down from ten after Threats Undetected was cut. |
| raced | accepted | A goldfish turn of 7 against a cube whose evasion class is 51 cards (20.7% density) means the fast decks act first. Mitigating properly would mean maindecking anti-air bodies and cutting selection and interaction — and the selection is what turns a singleton Visionary and a two-of Hydromancer into a game plan rather than a hope. The deck accepts being the slowest of the four builds in exchange for being the only one that draws extra cards, and boards in Snarespinner x2 (a 2-mana 1/3 reach that becomes 3/3 blocking a flier), Magnigoth Sentry x2 and Impede Momentum against the decks that actually race. |
| disruption-fizzle | mitigation | Stated correctly after the grill: the Hydromancer's ETB is NOT optional and it targets — 'When this creature enters, if it was kicked, create a token that's a copy of target creature you control' — so removing the copy target in response fizzles the trigger after the full seven mana is spent, and the body resolves as a bare 3/2 Elf. Shore Up ('Target creature you control gets +1/+1 and gains hexproof until end of turn. Untap it') is in the maindeck for exactly that one-mana blowout, and it is the only card in the 24 that protects a permanent. Essence Scatter x2 answers the creature that punishes the tap-out but is 'Counter target creature spell' and does NOT protect against a counter-war — Negate x2 is boarded in for that. If the whole turn is answered, the deck's floor is unaffected: a second Hydromancer, 12 Elf bodies and two fliers remain. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Tatyova, Steward of Tides | 'Whenever a land you control enters, IF YOU CONTROL SEVEN OR MORE LANDS...' — this deck's land target is 17 but it is trying to act on turns 4-6, when it controls four to six lands. The trigger is off for most of the game, and 'Land creatures you control have flying' matters only alongside Llanowar Loamspeaker's animation, a 1-of. EXCLUDE. |
| Ivy, Gleeful Spellthief | 'Whenever a player casts a spell that targets ONLY A SINGLE CREATURE other than Ivy, you may copy that spell' — this list has 4 of 24 nonland cards that target a single creature (Bite Down x2, Tail Swipe x2), and half of those are the opponent's removal aimed at a creature I would rather keep. A rare slot for a 2/1. EXCLUDE. |
| Vodalian Mindsinger | 'gain control of target creature with power less than this creature's power' — a 2/2 base, so unkicked it steals nothing; the {1}{G} kicker makes it a 4/4 that steals a 3-power creature for {2}{U}{U}{G}, five mana of very demanding pips in a two-colour deck. EXCLUDE. |
| Pixie Illusionist | {U} 1/1 flier; '{T}: Target land you control becomes the basic land type of your choice until end of turn' is a domain enabler and this deck runs no domain cards. Its {3}{G} kicker for two counters is four mana for a 3/3 flier. EXCLUDE. |
| Negate | 'Counter target noncreature spell' — the cube's threat profile is creature-dense (51 evasion cards, mostly creatures); Essence Scatter answers more of it. SIDEBOARD. |
| Impede Momentum | 'Tap target creature and put three stun counters on it' — sorcery-speed pseudo-removal that never actually removes; a tier below Bite Down at the same cost. SIDEBOARD-CONSIDERATION. |
| Threats Undetected | A genuine two-for-one, but it is a rare and the 5-rare budget is spent on the Visionary, Loamspeaker, Beastcaller, Yavimaya Coast and Aether Channeler. SIDEBOARD-CONSIDERATION. |
| Linebreaker Baloth | {3}{G}{G} 4/5 — the double-green pip in a two-colour deck that also wants {3}{U} for the Hydromancer kicker makes MV5 awkward. SIDEBOARD-CONSIDERATION. |
| Hexbane Tortoise | Enlist adds a nonattacking creature's POWER, and this deck's spare bodies are 1/1 mana Elves; it is a 3/2 ward-{2} body with a mostly-dead ability. EXCLUDE. |
| Bog Badger | A vanilla 3/3 (kicker {B} unavailable) that is not an Elf, so it neither triggers the draw nor takes the anthem. EXCLUDE. |
| Colossal Growth | +3/+3 for {1}{G}; the red kicker that made it a finisher in the Gruul build is unavailable, and a midrange deck at 20-30% interaction wants removal over a pump spell. EXCLUDE. |
| Magnigoth Sentry | {3}{G} 4/4 reach — a fine blocker, but this deck already answers fliers with Nael, Soaring Drake and Llanowar Greenwidow. SIDEBOARD. |
| Meria's Outrider / Radha, Coalition Warlord / Queen Allenal of Ruadach / Meria, Scholar of Antiquity | Elves whose costs include {R} or {W}{W}, or (Meria) whose abilities need artifacts this deck does not play. EXCLUDE. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.21   Ramp cards: 5   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.22 adj [MV 2.21 vs 2.5, 5 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  66.7%  prod  81.2%  gap -14.5pp  [OK]
  U  demand  33.3%  prod  50.0%  gap -16.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1 mainboard size  40 vs 40
  [PASS] 1 sideboard size  10 vs 10
  [PASS] 2 exact-name membership  []
  [PASS] 3 copy limits  []
  [PASS] 3b rare/mythic cap <=5  5 rares/mythics: ['Leaf-Crowned Visionary', 'Llanowar Greenwidow', 'Llanowar Loamspeaker', 'Quirion Beastcaller', 'Yavimaya Coast']
  [PASS] 4 colour usability via best_mode  []
  [PASS] 5 splash cap  []
```
