---
deck_name: "ur-spellslinger-copy-tempo"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-08-20T05:16:20Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
6x Mountain          R source; red is 17 of the 27 coloured pips, every one of them a single pip
5x Island            U source; blue is the lighter colour by pip count but carries both of the deck's double pips
2x Crystal Grotto    untapped, scry 1 on entry, and '{1},{T}: Add one mana of any color'; the second copy was added to serve Haughty Djinn's {1}{U}{U} on turn 3
2x Molten Tributary  Island Mountain: the UR dual, enters tapped, carries both basic types
1x Shivan Reef       the pool's only UNTAPPED UR dual (rare); {T}: Add {U} or {R}, 1 damage
```

### CREATURES (12)

```
CMC  Card                        Qty   Color  Role                                                                                                                                                            Rar
  1  Phoenix Chick               x1    R      Threat — 1/1 flying haste that returns from the graveyard when you attack with three or more creatures                                                          U
  1  Shivan Devastator           x1    R      Threat — {X}{R} flying haste with X counters; the mana sink that closes regardless of spell count                                                               M
  2  Balmor, Battlemage Captain  x2    RU     Payoff — the kill mechanism: every instant or sorcery gives the team +1/+0 and TRAMPLE, so blockers cannot absorb it                                            U
  2  Electrostatic Infantry      x2    R      Payoff — trample body that gains a PERMANENT +1/+1 counter on each instant or sorcery                                                                           U
  2  Ghitu Amplifier             x2    R      Payoff — +2/+0 per instant or sorcery; kicked {2}{U} bounces an opposing creature on entry                                                                      C
  2  Haunting Figment            x2    U      Threat — unblockable on any turn an instant or sorcery was cast, which is most turns here                                                                       C
  3  Haughty Djinn               x1    U      Engine — 'Instant and sorcery spells you cast cost {1} less'; a 4-toughness flier whose power grows with the graveyard                                          R
  3  Keldon Flamesage            x1    R      Payoff — on attack it exiles an instant or sorcery of mana value <= its power and lets you CAST it for free; a real cast, so it fires every payoff in the deck  R
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                   Qty   Color  Role                                                                                                                                   Rar
  1  Flowstone Infusion     x2    R      Interaction — {R} for +2/-2: the cheapest possible payoff trigger, and it kills an X/2 blocker                                         C
  1  Timely Interference    x2    U      Interaction — {U} to shrink a blocker and DRAW a card; a payoff trigger that replaces itself                                           C
  2  Fires of Victory       x2    R      Interaction — damage equal to cards in hand; kicked {2}{U} it also draws                                                               U
  2  Impulse                x1    U      Infrastructure — look at four, take one; a payoff trigger that finds the missing piece                                                 C
  2  Lightning Strike       x2    R      Interaction — 3 damage to ANY target: removal that is also reach, and a payoff trigger                                                 C
  2  Thrill of Possibility  x1    R      Infrastructure — discard one draw two; fills the graveyard for Haughty Djinn while digging                                             C
  2  Twinferno              x1    R      Payoff — mode 2 grants a Balmor-pumped trampler double strike, which is the burst turn; mode 1's copy is NOT cast and adds no trigger  U
```

### OTHER SPELLS (1)

```
CMC  Card                     Qty   Color  Role                                                                                                                                                                                                                                           Rar
  2  Founding the Third Path  x1    U      Engine — chapter I CASTS a mana-value 1 or 2 instant free (all 11 of this deck's spells qualify) and chapter III CASTS a copy from the graveyard; unlike Twinferno and Najal, both of those are real casts and therefore real payoff triggers  U
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                                                                                                                           Rar
Essence Scatter         x2    U      vs single large threats — counter target creature spell, and still a payoff trigger                                                               C
Impulse                 x1    U      vs grindy decks — second copy                                                                                                                     C
Jaya's Firenado         x1    R      vs large single threats — 5 damage to a creature or planeswalker, which the maindeck burn cannot kill                                             C
Jaya, Fiery Negotiator  x1    R      vs decks that go long — a four-mana engine that makes prowess tokens and refills, for the games where the clock stalls                            M
Negate                  x2    U      vs the cube's 6 sweepers and vs targeted removal aimed at Balmor                                                                                  C
Smash to Dust           x2    R      vs artifacts (15 in the cube) and vs go-wide — 'Destroy target artifact' or '1 damage to each creature your opponents control'                    C
Volshe Tideturner       x1    U      vs decks that punish tapping out — '{T}: Add {U}. Spend this mana only to cast an instant or sorcery spell or a kicked spell', and a 1/3 blocker  C
```

## ANALYSIS

### DECK IDENTITY

Blue-red spell-copy tempo. This is the GENERAL copy build rather than the creature-targeting one: the payoffs are creatures that read 'whenever you cast an instant or sorcery spell', and the kill is Balmor, Battlemage Captain turning each cast into +1/+0 and TRAMPLE for the whole team, so eleven cheap spells convert directly into damage that chump blockers cannot absorb. Lightning Strike x2 is the only reach -- 6 of the 20 damage needed -- because Fires of Victory reads 'target creature or planeswalker' and cannot be pointed at a player; everything else comes through combat. The critical rules fact the build is honest about: a copy made by Twinferno is NOT cast, so it never re-triggers Balmor, Electrostatic Infantry or Ghitu Amplifier -- it multiplies one spell's effect, not the deck's trigger count. The same test cuts the other way and the build follows it there too: Keldon Flamesage and Founding the Third Path both CAST their free spells, so both add real triggers, which is why they replaced Najal, the Storm Runner and the second Twinferno.

### THE RULES FACT THAT SHAPES THE WHOLE DECK

Twinferno says *"When you cast your next instant or sorcery spell this turn, copy that spell."*
Najal, the Storm Runner says *"…when you next cast an instant or sorcery spell this turn, copy it."*

**Those copies are not cast.** They are put onto the stack as copies, so they never trigger
Balmor, Battlemage Captain, Electrostatic Infantry, Ghitu Amplifier or Haunting Figment — every one
of which reads *"whenever you **cast** an instant or sorcery spell."*

Three independent sketchers reached that conclusion separately and the shape judge treated it as
binding. It is the difference between a deck that thinks it doubles its trigger count and one that
knows it doubles a single spell's *effect*. Twinferno is booked accordingly: at weight 0.6 in the
structural gate, and its role narrowed to the mode that actually multiplies the clock —
*"Target creature you control gains double strike until end of turn"* on a trampling,
Balmor-pumped Electrostatic Infantry.

### BALMOR IS THE KILL, AND IT IS THE COUNT

*"Whenever you cast an instant or sorcery spell, creatures you control get +1/+0 and gain trample
until end of turn."* The **trample** is the part that matters. A board of 1/2s and 2/1s pumped by
two spells is not stopped by a chump blocker — the damage goes through. So the deck's clock is
literally its spell count multiplied by its body count.

| Claim | Count against this list |
|---|---|
| Instants and sorceries — the base number every payoff keys off | 11 of 24 nonland cards |
| Creature cards | 12 of 24 |
| Payoffs that read "whenever you cast an instant or sorcery spell" | 8 of 24 (Balmor ×2, Electrostatic Infantry ×2, Ghitu Amplifier ×2, Haunting Figment ×2) |
| Cards discounted by Haughty Djinn's "cost {1} less" | 11 of 24 |
| Cards costing 1 or 2 mana | 22 of 24 |
| Rare/mythic budget | 5 of 5 used |

The 11-spells-to-12-bodies split is deliberate. Balmor's anthem is worthless with no creatures; the creatures are
weak with no spells. The two rival builds the shape judge rejected sat at 13 spells / 10 bodies and
13 spells / 8 bodies — the second of which had only about five attackers behind an anthem-based
kill, which is why it lost.

### HAUGHTY DJINN IS A COST REDUCER, NOT A BEATER

Its power equals instants and sorceries **in your graveyard**. With 11 in the deck and roughly three
or four cast by turn 5 or 6, it attacks as a 3/4 or 4/4 flier on the thesis turn — and on turn 3,
when it lands, it is frequently a 0/4 or 1/4. The shape judge flagged the "evasive beater" framing
as unsupported and it is corrected here: the Djinn earns its slot on
*"Instant and sorcery spells you cast cost {1} less to cast"*, which discounts **11 of 24** cards
and is what lets the deck double-spell a turn early. The 4 toughness keeps it alive; the power is
late upside.

### BALMOR AT TWO COPIES, AND WHY

Balmor is legendary, so a second copy on the battlefield is dead. It is still run at 2 — the maximum
for an uncommon — and the reasoning is that the second copy is a dead *permanent*, not a dead
*card*: it is the deck's kill mechanism, and drawing it on curve matters more than the legend-rule
collision. It is declared at weight 0.85 in the structural gate with that mechanism written out
rather than assumed away. The rejected 1-of-Balmor build was, in the judge's words, "one removal
spell from having no kill mechanism at all."

### TWO CARDS THAT LOOKED LIKE ENGINE PIECES AND WEREN'T

The same "is it *cast*?" test that condemns Twinferno's copy mode cuts two more ways, and the build
got both of them wrong before review caught them.

**Najal, the Storm Runner** reads *"You may cast **sorcery** spells as though they had flash."* Every
single instant-or-sorcery in this deck is an **Instant** — the clause grants literally nothing, on
0 of 11 spells. It was cut for **Keldon Flamesage**, whose attack trigger exiles an instant or
sorcery of mana value ≤ its power and says *"You may **cast** the exiled card without paying its mana
cost."* At power 2, all 11 of the deck's spells are eligible, and because it is a real cast it fires
Balmor, Electrostatic Infantry and Ghitu Amplifier and switches on Haunting Figment. That is exactly
what Najal's copy mode could never do.

**Founding the Third Path** was rejected on the grounds that "it triggers no payoff itself." That was
the rule applied backwards. Chapter I *casts* a mana-value 1 or 2 spell for free — and all 11 of this
deck's spells qualify — while chapter III *casts* a copy from the graveyard. It is the one card in the
pool that manufactures extra **casts** rather than extra copies, which makes it the strict opposite of
the card it replaced (the second Twinferno).

### WHAT THIS DECK DELIBERATELY CANNOT DO

Three of the five coverage classes are conceded, and each is a real cost rather than a shrug — with
two precision corrections that review forced, because the first drafts overstated them into
absolutes:

- **No mainboard counterspell.** Holding a counter open on turns 2–4 costs a payoff trigger that
  turn, and a trigger is a point of trampling damage across the whole board. Four counterspells sit
  in the sideboard for the matchups where that trade flips.
- **No sweeper that clears a real board.** A one-sided sweeper *does* exist in these colours — Smash
  to Dust's third mode deals 1 damage to each creature an opponent controls, and two copies are in
  the sideboard. What does not exist is one that kills anything bigger: the only real sweeper deals
  5 damage to *each* creature, which would wipe this deck's entire 1-and-2-toughness payoff shell,
  and the kicker that would spare one creature costs seven mana against a curve topping at five.
- **No enchantment answer worth the mana.** The pool does contain one in-colour — a six-mana red
  sorcery that exiles a permanent of each type — so this is a cost, not an absence. Six mana is
  unreachable on a 16-land curve topping at five, and it would have spent the one free rare slot,
  which went to Keldon Flamesage instead. The class is genuinely scarce regardless: 18 enchantments
  in the cube against 3 answers, all white or green.

The fourth honest weakness is `raced`, and here the first draft was simply wrong. It claimed
"Lightning Strike and Fires of Victory pointed at the face" as the reach package — but Fires of
Victory reads *"deals damage to target **creature or planeswalker**"* and cannot be aimed at a
player. Real burn to the face is **Lightning Strike ×2 = 6 of the 20 damage needed**; everything
else has to come through combat, which is what Balmor's trample clause is for. The blockers were
understated in the other direction: 11 of the 12 creature cards *can* block — only Phoenix Chick
reads "This creature can't block" — and Balmor is a 1/3 flier. What the deck genuinely lacks is a
cheap defensive body it is willing to spend a slot on, and that is the locked lens' choice, not an
oversight.

### PLAY PATTERN

Turn 1 Phoenix Chick or a land. Turn 2 Balmor or Electrostatic Infantry. Turn 3 a second body plus a
one-mana spell — Flowstone Infusion or Timely Interference — which pumps the team and either kills an
X/2 blocker or draws a card. From turn 4 the deck double-spells: each cast is +1/+0 and trample on
everything, Haunting Figment stops being blockable, and Electrostatic Infantry keeps a permanent
counter from every one. Shivan Devastator is the release valve when the spell count fails —
{X}{R} with flying and haste closes from any amount of surplus mana and cares about nothing else in
the deck.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  1:6  2:16  3:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.3: Balmor, Battlemage Captain@0.85, Balmor, Battlemage Captain@0.85, Haunting Figment@0.8, Haunting Figment@0.8) → p=0.93 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 11.3: Twinferno@0.6, Founding the Third Path@0.7) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 72%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: There is no mainboard sweeper. Precision, on a Challenger correction: it is NOT true that no one-sided sweeper exists in these colours -- the sideboard already holds two copies of a two-mana red card whose third mode deals 1 damage to each creature an opponent controls. What is true is that the only card that sweeps a real board is symmetric: it deals 5 damage to EACH creature, which would kill this deck's entire 1-and-2-toughness payoff shell, and the kicker that would spare one creature first costs seven mana against a curve that tops at five. So the concession is a plan cost, not an absence: the go-wide answer is boarded in rather than maindecked because a 1-damage sweeper is dead against half the cube.
  OK        single_large_threat: Lightning Strike, Fires of Victory, Flowstone Infusion, Ghitu Amplifier
  CONCEDED  noncreature_permanents: This is a plan cost, not an absence, and the earlier wording overstated it. The pool does contain an in-colour enchantment answer -- a six-mana red sorcery that exiles up to one target artifact, creature, enchantment, planeswalker and land -- and the sideboard artifact answer costs two. Both are declined for cost, not availability: six mana is unreachable on a 16-land curve topping at five, and it would spend the deck's single free rare slot, which went to a payoff creature instead. The dossier does independently record only 3 enchantment answers cube-wide, all white or green, so the class is genuinely scarce. The mainboard response is to be faster than the permanent matters.
  CONCEDED  stack: No mainboard counterspell, by design. This is the locked lens: the shape judge picked the proactive build precisely because holding a counter open on turns 2 through 4 costs the payoff trigger that turn, and every trigger is a point of trampling damage across the whole board. Four counterspells sit in the sideboard for the matchups where that trade flips.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census: gy hate = 0), so there is nothing to buy; the deck races the 32 graveyard-interaction cards instead.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Shivan Devastator is an {X}{R} flier with haste that enters with X +1/+1 counters -- an uncapped mana sink that turns every surplus land into damage on the turn it lands. Ghitu Amplifier's kicker {2}{U} and Fires of Victory's kicker {2}{U} both convert extra mana into value, and (This entry previously cited Najal's per-combat {2} as a fourth sink; Najal was cut in the Phase 9 repair, and the replacement first written here -- Keldon Flamesage's enlist and Crystal Grotto's mana ability -- was struck in turn because enlist costs no mana and Crystal Grotto is a mana SOURCE, not a sink. Flood stands on the three citations above.) |
| screw | mitigation | 22 of the 24 nonland cards cost one or two mana, and Haughty Djinn's 'Instant and sorcery spells you cast cost {1} less to cast' effectively lowers half the deck by a mana once it lands. Flowstone Infusion ({R}), Timely Interference ({U}) and Phoenix Chick ({R}) all cast off a single coloured source, and Shivan Devastator is castable from {X}=1 upward, so it is never stranded (X=0 is a 0/0 that dies immediately, so 1 is the functional floor). Haughty Djinn's cost reduction is NOT cited here: it costs {1}{U}{U}, which is a poor thing to lean on when the failure mode is not having mana. |
| decapitation | mitigation | Balmor is the kill mechanism and it is run at 2 copies -- the maximum for an uncommon -- so removal on the first does not end the plan. Behind it, Electrostatic Infantry x2 keep permanent +1/+1 counters that survive Balmor's death, and Shivan Devastator plus Phoenix Chick are threats that ignore the spell count entirely. |
| gas-out | mitigation | Impulse, Thrill of Possibility ('draw two cards') and Timely Interference x2 ('Draw a card') are four card sources of 24, and each is ALSO a payoff trigger, so refuelling and attacking are the same action. Fires of Victory kicked {2}{U} draws while it removes. Phoenix Chick returns itself from the graveyard whenever you attack with three or more creatures, which a 12-creature list does routinely. |
| raced | accepted | This deck has no lifegain and no mainboard sweeper, and it must win the race rather than survive it. Two corrections to how that was first stated, both forced by a Challenger reading of the oracle text. First, the REACH is Lightning Strike x2 and nothing else: Fires of Victory reads 'deals damage to target creature or planeswalker', so it cannot be pointed at a player, and the earlier version of this entry named it as reach. Real burn to the face is 6 of the 20 damage needed; the rest must come through combat, which is what Balmor's trample clause is for. Second, the blockers were understated: 11 of the 12 creature cards CAN block -- only Phoenix Chick reads 'This creature can't block' -- and Balmor is a 1/3 flier while Haughty Djinn is a */4 flier. What the deck genuinely lacks is a cheap defensive body it is willing to spend a slot on. Mitigating would mean maindecking Volshe Tideturner's 1/3 or Academy Wall's 0/5, and every such slot is a body that does not attack, which is exactly what the locked 'most proactive clock' lens rejects. Volshe Tideturner sits in the sideboard for that matchup. |
| disruption-fizzle | mitigation | The trigger suite is 11 instants and sorceries deep across seven different cards, so a countered spell is replaced next turn rather than ending the plan. Electrostatic Infantry's counters are permanent, so a disrupted turn does not reset the clock the way a pump-based deck's would. The third mechanism was REPLACED on a Challenger finding: the earlier version cited Najal's 'You may cast sorcery spells as though they had flash', which is a null in this deck because 0 of its 12 spells were sorceries -- every one is an Instant. Najal was cut for Keldon Flamesage, whose 'You may cast the exiled card without paying its mana cost' replaces a countered spell with a free one, and Founding the Third Path, whose chapter I does the same from hand. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Ivy, Gleeful Spellthief | Green-blue; outside this build's identity. It is the payoff of the three sibling decks and copies spells that target a single creature, which is a different mechanism from copying instants and sorceries generally. |
| Vesuvan Duplimancy | Blue and castable here, but it copies the PERMANENT a spell targets, and this list's spells target opposing creatures and players rather than its own board -- the clause 'targets only a single artifact or creature you control' would fire on almost nothing. |
| Jhoira, Ageless Innovator | RARE {U}{R}; it cheats artifacts into play and this list runs zero artifacts, so its activated ability does nothing. |
| Combat Research | An Aura, not an instant or sorcery, so it triggers none of Balmor, Electrostatic Infantry, Ghitu Amplifier, Djinn of the Fountain or Academy Wall. |
| Goblin Picker | A looter at {R},{T}, discard; the rate is worse than Thrill of Possibility and it does not count as an instant or sorcery cast. |
| Dragon Whelp | {2}{R}{R} 2/3 flier with a repeatable pump, but a double-red four-drop in a manabase that also needs {U}{U} for Haughty Djinn. |
| Ragefire Hellkite | RARE six-mana 5/3 flier whose double strike clause requires sacrificing another creature; this list runs few creatures and no sacrifice payoff. |
| Hurler Cyclops | {3}{R}{R} 5/4 that pings for 1 by sacrificing another creature; this list has 8 creatures and no token generation, so the outlet has almost nothing to eat. |
| Coalition Warbrute | A 3/4 trample four-drop with enlist; a vanilla body that triggers nothing in a deck whose payoffs all read 'whenever you cast an instant or sorcery'. |
| Molten Monstrosity | Costs {X} less where X is your greatest power; this list's biggest printed power is 5 (Najal), so it is realistically a six-mana 5/5 with no evasion. |
| Smash to Dust | A sorcery whose modes destroy an artifact, kill a defender, or deal 1 to each opposing creature; against this cube's 15 artifacts and 10 defenders it is a sideboard card, not a maindeck one. |
| Impede Momentum | A sorcery-speed tap-and-stun; in a deck that wants to hold up instants, a sorcery that does not affect the board permanently costs the tempo it buys. |
| Sphinx of Clear Skies | MYTHIC five-mana 5/5 flier; its Domain trigger reveals X cards where X is basic land types, and a UR manabase reaches only two. |
| Voda Sea Scavenger | Domain ETB looks at X cards for X basic land types; UR caps that at two. |
| Talas Lookout | {2}{U}{U} 3/2 flier that replaces itself on death, but the double blue is a real cost alongside Haughty Djinn's {U}{U} on a two-colour 17-land manabase. |
| Karplusan Forest | A GR painland; green is not in this identity. |
| Plaza of Heroes | RARE land that taps for {C} or for colour only toward legendary spells; this list has few legendary cards and 24 coloured pips. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.83   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.23 adj [MV 1.83 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  63.0%  prod  68.8%  gap  -5.8pp  [OK]
  U  demand  37.0%  prod  62.5%  gap -25.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 == 40
[PASS] 1b sideboard size — 10 == 10
[PASS] 2 exact-name membership — missing: []
[PASS] 3 copy limits — violations: []
[PASS] 3b rare/mythic budget — 5 rare+mythic of max 5
[PASS] 4 colour usability via best_mode — unusable: [] ; non-normal modes: {}
[PASS] 5a splash cards in candidate list — off-list: []
[PASS] 5b splash cap <=3 per colour — 0 splash cards: []
```
