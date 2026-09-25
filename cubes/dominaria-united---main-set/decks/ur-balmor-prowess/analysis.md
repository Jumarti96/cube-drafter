---
deck_name: "ur-balmor-prowess"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-08-15T03:23:35Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
Island                         x6   ({T}: Add {U}.)
Mountain                       x6   ({T}: Add {R}.)
Molten Tributary               x2   ({T}: Add {U} or {R}.) This land enters tapped.
Shivan Reef                    x1   {T}: Add {C}. {T}: Add {U} or {R}. This land deals 1 damage...
```

### CREATURES (11)
```
CMC  Card                           Qty  Colr Role                               Rar
  1  Phoenix Chick                  x2   R    Payoff — recursive evasive clock   U
  2  Balmor, Battlemage Captain     x2   UR   Payoff — team pump per spell       U
  2  Electrostatic Infantry         x2   R    Payoff — permanent counters        U
  2  Ghitu Amplifier                x2   R    Payoff — +2/+0 burst; kicker bounce C
  2  Haunting Figment               x1   U    Engine — unblockable carrier       C
  2  Volshe Tideturner              x2   U    Engine — extra spell per turn      C
```

### INSTANTS & SORCERIES (13)
```
CMC  Card                           Qty  Colr Role                               Rar
  1  Flowstone Infusion             x2   R    Interaction — 1-mana removal       C
  1  Shore Up                       x1   U    Engine — hexproof, untap, trigger  C
  1  Timely Interference            x2   U    Interaction — cantrip trigger      C
  2  Essence Scatter                x1   U    Interaction — counter creature     C
  2  Impede Momentum                x1   U    Interaction — tap + 3 stun         C
  2  Impulse                        x2   U    Engine — selection + trigger       C
  2  Lightning Strike               x2   R    Interaction — removal + reach      C
  2  Thrill of Possibility          x2   R    Engine — instant refuel + trigger  C
```

### OTHER SPELLS (1)
```
CMC  Card                           Qty  Colr Role                               Rar
  2  Founding the Third Path        x1   U    Engine — free cast, GY copy        U
```

## SIDEBOARD (10)
```
Card                           Qty  Colr Role / When to board in                                    Rar
Negate                         x2   U    vs control, sweeper decks and enchantment decks — counters The Elder Dragon War, The Phasing of Zhalfir, Temporal Firestorm, Karn's Sylex, Temporary Lockdown and removal aimed at Balmor C
Ertai's Scorn                  x1   U    vs bomb rares the deck cannot otherwise beat — 'Counter target spell' is unconditional U
Essence Scatter                x1   U    vs creature-dense decks; the second copy of the maindeck answer to an out-sizing body C
Smash to Dust                  x2   R    vs artifact decks (15 artifacts in cube) or go-wide tokens (38-card Tokens cluster) — 'deals 1 damage to each creature your opponents control' is the deck's only wide-board answer C
Aether Channeler               x1   U    vs resolved noncreature permanents — 'Return another target nonland permanent to its owner's hand' is the only U/R answer to a resolved Temporary Lockdown, Citizen's Arrest or Prayer of Binding, and bouncing Lockdown returns the exiled team R
Impede Momentum                x1   U    vs a body too large to burn — taps and stuns for three turns without needing damage C
Shivan Devastator              x1   R    vs control or long games — {X}{R} flying haste is an evasive mana sink and reach when the ground stalls M
Jaya, Fiery Negotiator         x1   R    vs sweeper decks — '+1: Create a 1/1 red Monk creature token with prowess' rebuilds the board the pump needs M
```

## ANALYSIS

### DECK IDENTITY

A UR spellslinger tempo deck that converts cheap instants and sorceries directly into combat damage. Balmor, Battlemage Captain turns every spell into a team-wide +1/+0 with trample, and Electrostatic Infantry and Ghitu Amplifier convert the same triggers into a growing single threat, so the deck has three separate ways to cash a spell into damage. Eleven bodies give the pump something to land on and thirteen instants and sorceries fire it, with Volshe Tideturner and Founding the Third Path each buying an extra cast on the lethal turns. It kills on turn 5 through chump blockers rather than around them.

### WHY EVERY ANSWER IS ALSO A CLOCK

The band deviation that defines this build is 32% of nonland cards in Interaction against a
25–35% tempo band — nominally in band, but the reason it can sit at the top of it without
diluting the clock is mechanical, not stylistic. Balmor, Battlemage Captain reads "Whenever you
cast an instant or sorcery spell, creatures you control get +1/+0 and gain trample until end of
turn." In a normal tempo deck a removal spell spends a card and a turn that could have been a
threat. Here the same removal spell also swings the whole board. 13 of the 25 nonland cards are
instants or sorceries, and every one of them is simultaneously an answer and a pump.

Trample is the load-bearing word. A +1/+0 anthem is easy to blank by chump-blocking with a token;
trample means the excess crosses over. Against the cube's 38-card Tokens cluster that distinction
is the difference between a stalled board and a lethal one.

### THE THREE-PAYOFF SPINE

The deck runs three distinct cast-trigger payoffs at two copies each, and they fail in different
ways on purpose:

| Card | Trigger | Persists? | Fails to |
|---|---|---|---|
| Balmor, Battlemage Captain | Whole team +1/+0, trample | No — until end of turn | Removal on sight |
| Electrostatic Infantry | +1/+1 counter on itself | **Yes** — counters are permanent | Chump blocks (until it out-sizes them) |
| Ghitu Amplifier | +2/+0 on itself | No — until end of turn | Removal, and it needs to connect |

Electrostatic Infantry is the one that survives a spell-light draw, because its growth banks
across turns rather than evaporating at end of turn. Ghitu Amplifier is the one that turns a
single spell into the largest single-body burst. Balmor is the one that wins through a wide
board. Drawing any of the six is a game; drawing two is usually lethal a turn early.

Assembly probability across the payoff cluster is 0.89 by the thesis turn — computed with
Haunting Figment declared at reliability weight 0.7, because its clause grants evasion only and
generates no pump, so it is a partial substitute rather than a full copy.

### THE MANA BASE COSTS A RARE ON PURPOSE

The pool restriction caps the deck at 5 rare-or-mythic cards. One of those slots goes to a land.
Shivan Reef ("{T}: Add {C}. {T}: Add {U} or {R}. This land deals 1 damage to you") is the only
untapped UR dual in the cube; Molten Tributary, the common alternative, enters tapped. Balmor
costs {U}{R} and wants to land on turn 2, and the turn-4 and turn-5 double-spell turns are where
the deck actually kills — a tapped land on either turn costs a full pump increment. 13 of the 15
lands enter untapped as a result.

Crystal Grotto was rejected despite being free: its untapped tap produces {C}, and coloured mana
costs an extra {1}. It casts neither the turn-1 Phoenix Chick nor the turn-2 Balmor, which is
the entire early curve.

### KNOWN THIN SPOTS

Two threat classes are conceded in writing rather than papered over. **Wide boards:** zero of the
25 nonland cards affect more than one opposing creature — a scan of all 25 oracle texts for "each
creature" or "all creatures" returns nothing. The plan is the sideboard's Smash to Dust x2.
**Graveyard:** the cube contains no graveyard hate in any colour, so this is a pool-level absence,
not a colour choice.

The sideboard also carries Aether Channeler specifically because the cube's Temporary Lockdown
("exile each nonland permanent with mana value 2 or less") exiles literally every nonland
permanent in this deck — the curve tops out at MV 2. Bouncing the Lockdown returns the whole
team.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (25 nonland):  1:7  2:18
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.7: Haunting Figment@0.7) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 13 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 80%
  play by turn: T1 77%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Zero of the 25 nonland cards affect more than one opposing creature; every maindeck answer (Lightning Strike, Flowstone Infusion, Impede Momentum, Essence Scatter) is single-target. Mitigating in the maindeck would mean running Smash to Dust's 1-damage sweep over a cast-trigger body, subtracting from the spell density and board width the kill mechanism needs. The plan is the sideboard: Smash to Dust x2, 'deals 1 damage to each creature your opponents control'.
  OK        single_large_threat: Essence Scatter, Impede Momentum
  CONCEDED  noncreature_permanents: Neither U nor R in this pool destroys or exiles an artifact or enchantment on the battlefield; the maindeck answers them only on the stack. The sideboard covers the class by bounce and by artifact destruction: Aether Channeler ('Return another target nonland permanent to its owner's hand') and Smash to Dust ('Destroy target artifact').
  OK        stack: Essence Scatter
  CONCEDED  graveyard: The cube contains zero graveyard hate in any colour (dossier structural_census), so this is a pool-level absence rather than a colour choice; the turn-5 clock is the answer to graveyard decks.
```

- Curve and goldfish both returned PASS on the repaired list; no WARN flags to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Thrill of Possibility x2 ('As an additional cost to cast this spell, discard a card. Draw two cards.') converts a surplus land into two cards at instant speed, and Impulse x2 bottoms three cards to find action. Volshe Tideturner x2 turns an extra land drop into a second cast per turn rather than a dead card, and Founding the Third Path's chapter I casts a spell without paying its mana cost. |
| screw | mitigation | The curve is 7 cards at MV 1 and 18 at MV 2 with nothing above 2, so a two-land hand casts a spell every turn from turn 1 and reaches the payoff on turn 2. Impulse and Timely Interference both dig at one to two mana; goldfish reports 80% keepable hands and 77% turn-1 plays. |
| decapitation | mitigation | Balmor is answered on sight in every game, so the list runs three distinct cast-trigger payoffs at 2 copies each — Balmor x2, Electrostatic Infantry x2 (whose +1/+1 counters are permanent, so it keeps the damage it accrued) and Ghitu Amplifier x2 — 6 of 25 nonland cards. Shore Up grants hexproof at instant speed for one mana in response to targeted removal, and is itself a trigger. |
| gas-out | mitigation | CORRECTED after the grill: the pre-repair record wrongly claimed Thrill of Possibility was net +1 card; its own additional-cost line makes it net 0. The list's true ledger is 1 of 25 net-positive (Founding the Third Path, whose chapter I casts one of this deck's 13 instants/sorceries — all MV 1 or 2, so 13 of 13 live — without paying its mana cost, and whose chapter III exiles and copies a spell from the graveyard for a second free cast) plus 6 of 25 self-replacing filtering (Impulse x2, Timely Interference x2, Thrill of Possibility x2). The remaining exposure is accepted: a deeper draw package would have to displace cast-trigger bodies or the spells that fire them, which is the density the kill mechanism is built on. |
| raced | accepted | The list has exactly one reach card (Lightning Strike, 'deals 3 damage to any target') and no lifegain, so against a faster clock it must win the race rather than survive it. Mitigating would mean adding blockers or lifegain, and every defensive body is a card that does not fire the Balmor trigger — it would cost the deck the spell density the kill mechanism is built on. Reach is also not purchasable in this pool: every other red burn spell (Jaya's Firenado, Fires of Victory, Smash to Dust) reads 'creature or planeswalker' only. The 8 interaction slots are the concession: cheap enough to answer the opposing clock on curve while still pumping. |
| disruption-fizzle | mitigation | The lethal turn is not a single spell but a sequence of two or three one-and-two-mana spells, so a counterspell removes one increment of pump rather than the plan. If the pumped body is removed mid-combat, Shore Up (hexproof, instant, one mana) protects it, and Electrostatic Infantry's accrued counters persist through the turn cycle so the damage is not lost. Phoenix Chick returns from the graveyard when attacking with three or more creatures, so a removal spell aimed at it is temporary. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Raff, Weatherlight Stalwart | {W}{U} — best_mode([U,R],[]) returns None; W is a cast-time pip on a two-drop with no colourless mode, and 2-3 splash sources of 16 lands cannot deliver it on turn 2. |
| Vohar, Vodalian Desecrator | {U}{B} — same off-colour cast pip on a two-drop; its {T} loot is also too slow for a turn-5 clock. |
| Ivy, Gleeful Spellthief | {G}{U} — off-colour cast pip, and its copy trigger requires spells that target a single creature, which is a minority of this list's interaction. |
| Rona, Sheoldred's Faithful | {1}{U}{B}{B} — double off-colour pip at 4 MV; past this deck's curve even before the splash problem. |
| Tura Kennerüd, Skyknight | {2}{W}{U}{U} — 5 MV with an off-colour pip; its Soldier tokens are the right effect at the wrong cost for a turn-5 clock. |
| Haughty Djinn | Its power counts instants and sorceries in the graveyard — a Path B payoff. This build casts spells to pump the team, not to grow one body, and would spend a rare slot on it. |
| Cosmic Epiphany | 6 MV draw scaled to the graveyard; the deck wins on turn 5 and never reaches a turn where this is castable. |
| Tolarian Terror | 'costs {1} less for each instant and sorcery card in your graveyard' — needs 4+ spells already in the yard to be on-curve, which is a turn-6 state this build does not plan to reach. |
| Vesuvan Duplimancy | Its trigger requires spells that target a single artifact or creature you control; only 5 of this list's instants/sorceries qualify, and it is a mythic against a 5-card rare budget. |
| Jaya's Firenado | 5 MV for 'deals 5 damage to target creature or planeswalker' — above the curve, and cannot go to the face. |
| Sphinx of Clear Skies | Mythic 5-drop; its Domain trigger scales with basic land types, and this deck runs two. |
| Defiler of Dreams | Discounts blue permanent spells; 8 of the 24 nonland slots are blue permanents here, and it costs {3}{U}{U} plus a rare slot. |
| Defiler of Instinct | Discounts red permanent spells and pings on each; this list's red cards are mostly instants and sorceries, which it does not see. |
| Shivan Devastator — maindeck-excluded, boarded | Mythic X-creature with no cast-trigger, so it does nothing with Balmor and was excluded from the maindeck. It earns a sideboard slot instead: {X}{R} flying haste is an evasive mana sink and the deck's only reach when the ground stalls against control. |
| Ragefire Hellkite | 6 MV; its double-strike trigger costs a creature sacrifice, which subtracts a Balmor pump target. |
| Frostfist Strider | {3}{U}{U} 4/4 with a stun ETB — a fine tempo body but 5 MV, one turn past the clock. |
| Dragon Whelp | No cast-trigger; its firebreathing competes with casting spells for the same mana. |
| Hurler Cyclops | 5 MV sacrifice outlet; sacrificing creatures shrinks the board Balmor pumps. |
| Goblin Picker | 2/2 with a rummage ability but no cast-trigger; Academy Wall does the same filtering off spells already being cast. |
| Yavimaya Steelcrusher | Artifact removal on a body, but no cast-trigger; belongs in the sideboard discussion, not the main. |
| Academy Loremaster | 'At the beginning of each player's draw step, that player may draw an additional card' — symmetric, and the {2} tax hits this deck's own multi-spell turns hardest. |
| Vodalian Hexcatcher | Merfolk lord; the UR pool contains exactly 1 other Merfolk (Volshe Tideturner), so its anthem reaches at most one body. |
| Jhoira, Ageless Innovator | Puts artifact cards onto the battlefield from hand; this list contains 0 artifacts. |
| Squee, Dubious Monarch | Recursive token-maker, but no cast-trigger and a rare slot; Phoenix Chick provides recursion at one mana instead of three. |
| The Elder Dragon War | Chapter I 'deals 2 damage to each creature and each opponent' would kill Balmor (1/3 survives), Electrostatic Infantry (1/2), Ghitu Amplifier (1/2) and Phoenix Chick (1/1) — it is a sweeper aimed at this deck's own board. |
| Meteorite | 5 MV artifact for 2 damage and fixing; too slow, and this deck's fixing need is a single pair already covered by Molten Tributary and Crystal Grotto. |
| Salvaged Manaworker | Any-colour fixing on a 1/3 body, but this deck needs only U and R and the mana base already supplies both. |
| Founding the Third Path — ADDED at Phase 9 | Originally excluded here on the ground that its mill chapters feed graveyard-count payoffs this build does not run. The self-grill overturned that: chapter I ('cast an instant or sorcery spell with mana value 1 or 2 from your hand without paying its mana cost') is live on 13 of the 13 instants and sorceries in this list, and both chapters I and III are casts, so each is a Balmor trigger. It is the only genuine net-positive card source available in UR without a rare slot. Now in the mainboard at 1 copy. |
| Furious Bellow — CUT at Phase 9 | Added during the build as on-demand interaction replacing two conditional counterspells. The grill showed the premise was false: '+3/+0 and first strike' buffs a creature you control, so 0 of its 2 copies answered an opposing permanent. Both cut. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 15 recommended  [PASS]
Avg CMC:     1.72   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.71 adj [MV 1.72 vs 2.5, 4 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  R  demand  51.9%  prod  60.0%  gap  -8.1pp  [OK]
  U  demand  48.1%  prod  60.0%  gap -11.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2      PASS — no name exceeds 2 copies (basics exempt).
rares_mythics_max_1          PASS — Shivan Reef 1, Aether Channeler 1, Shivan Devastator 1, Jaya 1.
rare_mythic_budget_5         PASS — 4 of 5 used (Shivan Reef mainboard; Aether Channeler, Shivan Devastator, Jaya, Fiery Negotiator sideboard).
all_cards_in_cube            PASS — every name matched by exact string against the working pool cache.
colour_usability             PASS — effective_cost.best_mode(card, ['U','R'], []) returned non-None for every nonland card; no off-identity inclusions.
splash_cap                   PASS — splash_colors is empty, 0 splashed cards.
```
