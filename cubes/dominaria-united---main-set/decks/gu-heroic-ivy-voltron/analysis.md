---
deck_name: "gu-heroic-ivy-voltron"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GUr"
format: "40-card"
built_at: "2026-08-20T00:42:22Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
6x Island            U source, Island type for Domain
4x Forest            G source, Forest type for Domain
2x Molten Tributary  red source carrying the Mountain type
2x Wooded Ridgeline  red source carrying the Mountain type
1x Tangled Islet     GU dual carrying BOTH Forest and Island types
1x Yavimaya Coast    the only UNTAPPED GU dual in the pool; {T}: Add {G} or {U}, 1 damage
```

### CREATURES (10)

```
CMC  Card                     Qty   Color  Role                                                                                                        Rar
  1  Pixie Illusionist        x2    U      Threat — 1-mana flier; {T} sets a land's basic type for Domain                                              C
  2  Haunting Figment         x2    U      Threat — unblockable on any turn you cast an instant/sorcery                                                C
  2  Ivy, Gleeful Spellthief  x1    GU     Payoff — copy engine / evasive kill-piece                                                                   R
  2  Nishoba Brawler          x1    G      Threat — Domain trample body                                                                                U
  2  Yavimaya Iconoclast      x2    G      Threat — 3/2 trample; kicker {R} adds +1/+1 and haste                                                       U
  3  Haughty Djinn            x1    U      Threat — flier whose power = instants/sorceries in your graveyard; cuts {1} off 11 of the 24 nonland cards  R
  3  Soaring Drake            x1    U      Threat — 2/3 flier, second air body for the copied pump                                                     C
```

### INSTANTS & SORCERIES (12)

```
CMC  Card                 Qty   Color  Role                                                                                             Rar
  1  Gaea's Might         x2    G      Payoff — Domain pump, doubled onto Ivy                                                           C
  1  Shore Up             x2    U      Interaction — hexproof + doubled +1/+1 at instant speed                                          C
  1  Timely Interference  x1    U      Engine — {U}: shrink a blocker and draw; the Ivy copy is a FULL copy, so it draws a second card  C
  2  Colossal Growth      x2    G      Payoff — largest doubled pump; kicker {R} is upside, not the plan                                C
  2  Essence Scatter      x1    U      Interaction — answers the blocker that walls the ground half                                     C
  2  Negate               x2    U      Interaction — answers removal and sweepers aimed at the clock                                    C
  2  Twinferno            x2    R      Payoff (SPLASH R) — double strike on a non-Ivy body, copied onto Ivy                             U
```

### OTHER SPELLS (2)

```
CMC  Card             Qty   Color  Role                                                                                   Rar
  1  Combat Research  x2    U      Engine — Aura copy becomes a token on legendary Ivy: +1/+1, ward {1}, draw on connect  U
```

## SIDEBOARD (10)

```
Card             Qty   Color  Role / When to board in                                                                                                          Rar
Bite Down        x2    G      vs a resolved blocker — the deck's ONLY creature removal; board-only because it targets two creatures and so never triggers Ivy  C
Broken Wings     x2    G      vs artifacts (15), enchantments (18) and fliers — destroy target artifact, enchantment, or creature with flying                  C
Essence Scatter  x1    U      vs single large threats — second copy                                                                                            C
Impulse          x1    U      vs grindy decks — digs four deep for Ivy or a trick                                                                              C
Snarespinner     x2    G      vs evasion (51 cards / 20.7% of cube) — reach; +2/+0 whenever it blocks a flier                                                  C
Tear Asunder     x2    G      vs noncreature permanents — exile target artifact or enchantment (answers a Citizen's Arrest / Leyline Binding on Ivy)           U
```

## ANALYSIS

### DECK IDENTITY

GU aggro built on Ivy, Gleeful Spellthief. Ivy copies any spell that targets only a single creature other than herself and the copy targets Ivy, so every beneficial one- or two-mana trick buffs a ground body AND a 2/1 flier. Eleven of the twenty-four nonland cards are such spells. Every non-Ivy creature in the list flies or tramples, and Haunting Figment goes unblockable on any turn an instant or sorcery was cast -- which is 9 of the 11 trigger spells, since Combat Research x2 are Auras rather than instants. Both halves of each doubled pump therefore convert to face damage rather than being chump-blocked. A two-card red splash (Twinferno x2) supplies the double-strike burst that closes on turn 5.

### HOW THE COPY ENGINE ACTUALLY WORKS

Ivy, Gleeful Spellthief reads: *"Whenever a player casts a spell that targets only a single creature
other than Ivy, you may copy that spell. The copy targets Ivy."* Three clauses in that sentence
decide the entire deck, and two of them cut against the obvious build.

**"only a single creature."** A spell with two targets never triggers her. That removes two cards a
reader would expect in a green trick deck: Tail Swipe (*"Choose target creature you control and
target creature you don't control"*) and Bite Down (*"Target creature you control deals damage equal
to its power to target creature or planeswalker you don't control"*). Both are fine cards; neither
is a Heroic card. Bite Down is in the sideboard as removal, not as a trigger.

**"The copy targets Ivy."** The copy is not optional in its targeting — it always points at Ivy. So
any spell you would aim at an *opponent's* creature becomes a spell aimed at your own 2/1 flier.
Impede Momentum would tap Ivy and put three stun counters on her; Flowstone Infusion (+2/-2) would
kill her outright; Rona's Vortex would bounce her to hand. The deck therefore runs almost no
targeted removal, which is the single biggest constraint on the archetype and the reason the
sideboard carries Bite Down and Broken Wings rather than cheaper spot removal.

The one exception is instructive. Timely Interference reads *"Target creature gets -1/-0 until end
of turn. Draw a card."* Aimed at an opposing blocker, the copy hits Ivy for -1/-0 — a real cost —
but because the copy is a **full copy of the spell**, it also draws a second card. One {U} for two
cards is worth a point of power for a turn, and cast on the opponent's end step it costs nothing at
all.

**"A copy of an Aura spell becomes a token."** This is the clause that makes Combat Research the
best card in the deck. Cast it on any non-Ivy creature and Ivy gets a *second* Combat Research as a
token, attached to her. Ivy is legendary, so that token reads +1/+1 and **ward {1}** on top of
*"Whenever this creature deals combat damage to a player, draw a card."* One blue mana turns a
fragile 2/1 into a warded 3/2 flier that replaces itself every time it connects, and enchants a
second attacker at the same time.

### THE COUNTS

| Claim | Count against this list |
|---|---|
| Cards that trigger Ivy | 11 of 24 nonland cards |
| Non-Ivy bodies for those spells to target | 9 of 24 |
| Non-Ivy bodies that fly, trample, or go unblockable | 9 of 9 |
| Ivy-triggers that are instants or sorceries (i.e. switch on Haunting Figment) | 9 of 11 — Combat Research x2 are Auras |
| Instants and sorceries total | 12 of 24 |
| Cards discounted by Haughty Djinn's *"cost {1} less"* | 12 of 24 |
| P(Ivy drawn among the 12 cards seen by turn 5, on the play) | 12/40 = 30.0% |

That last row is the honest weakness. Ivy is a rare, so one copy is the legal maximum, and no tutor
in this pool reaches her — Micromancer fetches only instants and sorceries with mana value 1, and
Threats Undetected lets the *opponent* choose which two of the four creatures to shuffle back. The
structural gate's assembly figure of 0.87 measures the probability of drawing *a payoff body*, not
of drawing the copy engine. Those are different numbers and both belong on the record. In the 70% of
games where Ivy is not there by turn 5, what remains is a legal on-curve GU flier-and-trample aggro
deck with nine evasive bodies and eleven cheap spells. The plan degrades; it does not collapse.

### WHY EVERY CREATURE EVADES

The shape judge picked this build over a faster one and a more resilient one on a single axis: what
fraction of non-Ivy bodies actually convert the *original* half of a doubled pump. A copied Colossal
Growth is +3/+3 on Ivy in the air and +3/+3 on a ground body — but only if that ground body can get
through. Pixie Illusionist, Soaring Drake and Haughty Djinn fly; Yavimaya Iconoclast and Nishoba
Brawler trample; Haunting Figment is *"can't be blocked as long as you've cast an instant or sorcery
spell this turn"*, which is exactly the turn you are casting the pump. Nine of nine convert. A build
with four blockable ground two-drops wastes half of every trick it casts.

### THE RED SPLASH IS TWO CARDS AND FOUR LANDS

Twinferno x2 is the whole splash. Its second mode — *"Target creature you control gains double
strike until end of turn"* — targets a single creature, so aimed at a ground body it gives **both**
that body and Ivy double strike. Layered on a doubled pump this is the turn-5 kill: a 5/4 flying Ivy
with double strike is ten damage from one two-mana instant.

The four red sources are Wooded Ridgeline x2 (Land — Mountain Forest) and Molten Tributary x2
(Land — Island Mountain), and they are chosen over the rare painlands for a second reason: they
carry the **Mountain** basic land type. That is what takes Domain from 2 to 3, which is what makes
Gaea's Might a +3/+3 rather than a +2/+2 and Nishoba Brawler a 3/3 rather than a 2/3. Crystal Grotto
was rejected precisely because it carries no basic land type and produces coloured mana only for
{1},{T} — useless in a deck that wants to hold up a one-mana trick. The probability that at least
one of the four Mountain-type lands appears in the ten cards seen by turn 4 on the play is
1 - C(36,10)/C(40,10) = **70.0%**.

The splash also quietly turns on two kickers on cards that are otherwise cast for free in green:
Colossal Growth's {R} (+4/+4 with trample and haste instead of +3/+3) and Yavimaya Iconoclast's {R}
(+1/+1 and haste). Neither is part of the turn-5 line; both are flood insurance.

### PLAY PATTERN

The deck wants a body down before Ivy, not after — Ivy's trigger is dead until a second creature
exists. Turn 1 Pixie Illusionist, turn 2 Ivy, turn 3 a two-drop plus Combat Research on it (Ivy
becomes a warded 3/2 drawing cards), turn 4 attack and hold Shore Up, turn 5 Twinferno plus a pump.
Against removal, Shore Up in response is a one-mana counterspell that also grows two creatures;
against a sweeper, Negate is the answer, and none of the cube's six sweepers is a creature spell.

### THE MATCHUP THE DECK CANNOT ANSWER

The cube holds 32 graveyard-interaction cards (12.96% density) and **zero graveyard hate in any
colour**. There is nothing to buy. Against a recursive deck this list races and hopes; the sideboard
spends its slots on the 51-card evasion class and the 33 artifacts-and-enchantments instead, because
those are classes green and blue can actually answer.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:9  2:13  3:2
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.3: Haunting Figment@0.8, Haunting Figment@0.8, Haughty Djinn@0.7) → p=0.87 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10.4: Twinferno@0.7, Twinferno@0.7) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 84%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mass removal exists in this 24-nonland list; adding one would cost a one-mana trick slot, and the deck's identity is winning the air race by turn 5 rather than stabilising.
  OK        single_large_threat: Essence Scatter, Timely Interference, Ivy, Gleeful Spellthief, Pixie Illusionist, Soaring Drake, Haughty Djinn
  CONCEDED  noncreature_permanents: No mainboard artifact/enchantment answer; Tear Asunder and Broken Wings sit in the sideboard because the cube's artifact (15) and enchantment (18) densities do not earn a maindeck slot ahead of a doubled pump.
  OK        stack: Negate, Essence Scatter
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census: gy hate = 0), so no answer exists to buy; the deck races the 32 graveyard-interaction cards instead.
```

- No WARN flags -- curve, assembly, goldfish and coverage all returned PASS, both before and after the Phase 9 repairs.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two genuine mana sinks convert surplus lands into stats: Colossal Growth's kicker {R} (+4/+4 with trample and haste) and Yavimaya Iconoclast's kicker {R} (+1/+1 and haste), both live on the 4 red sources. The refuel is Combat Research x2 (draw on combat damage) plus Timely Interference, whose Ivy copy draws a second card. NOT counted as flood insurance, on a Challenger finding: Nishoba Brawler's power is capped at the number of basic land TYPES (3 here), so lands 4 through 12 add nothing to it, and Pixie Illusionist's ability makes a land BECOME a type rather than gain one, so it nets a Domain type only when aimed at a land whose type is already duplicated. |
| screw | mitigation | 22 of the 24 nonland cards cost 1 or 2 mana; Pixie Illusionist ({U}), Combat Research ({U}), Shore Up ({U}) and Gaea's Might ({G}) are all castable off a single coloured source, so two-land hands function. |
| decapitation | mitigation | Shore Up x2 gives Ivy hexproof at instant speed; Combat Research grants ward {1} because Ivy is legendary; Negate x2 counters the removal. If Ivy still dies the list remains 9 evasive bodies plus 10 other trigger spells that simply stop doubling — the clock slows, it does not stop. |
| gas-out | mitigation | Combat Research x2 is the refuel -- 'Whenever this creature deals combat damage to a player, draw a card' -- and Ivy's reminder text '(A copy of an Aura spell becomes a token.)' means the copy is a second Aura, so a connecting Ivy plus an enchanted body draws two cards per attack. Timely Interference adds an unconditional cantrip whose Ivy copy is a FULL copy of the spell and therefore draws a second card: one {U} for two cards. Haughty Djinn cuts {1} off 12 of the 24 nonland cards, so the deck empties its hand onto the board a turn earlier instead of sitting on it. Honest denominator: dedicated refuel is 3 of 24 cards and 2 of the 3 are contingent on connecting. |
| raced | mitigation | Nishoba Brawler (*/3), Soaring Drake (2/3) and Haughty Djinn (*/4 flier) block early; Shore Up untaps a tapped blocker while pumping it; Essence Scatter counters the fastest single threat. Against the cube's 22 lifegain cards the deck relies on evasion rather than reach. |
| disruption-fizzle | mitigation | The Ivy-trigger suite is 11 cards deep, so a countered trick is replaced the following turn rather than ending the plan; Twinferno's first mode copies the NEXT spell, so a countered Twinferno costs only two mana and no board. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Tail Swipe | 'Choose target creature you control AND target creature you don't control' -- two targets, so it never triggers Ivy's 'targets only a single creature' clause. |
| Impede Momentum | Targets an opponent's creature; Ivy's copy would target Ivy and tap it with three stun counters. Anti-synergy. |
| Timely Interference | Targets a creature for -1/-0; Ivy's copy would shrink Ivy. |
| Flowstone Infusion | '+2/-2' -- Ivy is a 2/1, so the copy kills Ivy outright. |
| Rona's Vortex | Bounce aimed at a creature you don't control; the Ivy copy would return Ivy to hand. |
| Vesuvan Duplimancy | Four-mana enchantment that does not affect the board on the turn it lands; this build's thesis turn is 5, so it costs a full turn of clock. It is the payoff of a different pipeline (deck C). |
| Tatyova, Steward of Tides | Its trigger requires seven or more lands; this list runs 16 and wants to win by turn 5. |
| Silverback Elder | {2}{G}{G}{G} at five mana with GGG in a three-colour manabase; the deck's clock is finished before it casts. |
| Defiler of Vigor | Five mana 6/6; excellent card, but it is one of only five rare/mythic slots and does nothing for the Ivy trigger. |
| Sphinx of Clear Skies | Five-mana mythic finisher; the aggro plan does not reach turn five reliably enough to justify a rare slot. |
| Haughty Djinn | Power equals instants and sorceries in your graveyard; this list plays 12 instants/sorceries but casts them for value early, so the Djinn is a 1/4 or 2/4 on the turn it matters. |
| Academy Wall | 0/5 defender; it blocks well but contributes nothing to an evasive-clock plan. |
| Bog Badger | 3/3 for three with a kicker in black, an unsupported colour here. |
| Yavimaya Coast | GU painland, but it is a RARE and this build has five rare/mythic slots total; Tangled Islet is the common that does the same job and carries basic land types. |
| Plaza of Heroes | Rare land; its hexproof/indestructible ability protects Ivy, but it costs a rare slot and only taps for colour toward legendary spells. |
| Lightning Strike | Red splash is capped at three cards; Twinferno and Hammerhand buy more with the Ivy trigger than three damage does. |
| Vanquisher's Axe | +2/+0 equip {2}; Hero's Heirloom is strictly better on Ivy because of the legendary trample/haste clause, and the deck can only carry one equipment slot. |
| Take Up the Shield | {1}{W} would be an excellent Ivy trick, but white is a fourth colour and the splash budget is already spent on red's Twinferno. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     1.71   Ramp cards: 0   Cantrips: 3
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.55 adj [MV 1.71 vs 2.5, 3 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  G  demand  33.3%  prod  50.0%  gap -16.7pp  [OK]
  U  demand  66.7%  prod  62.5%  gap  +4.2pp  [OK]

Splash Check: [PASS]
  R  2 card(s), max CMC 2  sources 4/3  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 == 40
[PASS] 1b sideboard size — 10 == 10
[PASS] 2 exact-name membership — missing: []
[PASS] 3 copy limits — violations: []
[PASS] 3b rare/mythic budget — 3 rare+mythic of max 5
[PASS] 4 colour usability via best_mode — unusable: [] ; non-normal modes: {}
[PASS] 5a splash cards in candidate list — off-list: []
[PASS] 5b splash cap <=3 per colour — 2 splash cards: [('Twinferno', 2)]
```
