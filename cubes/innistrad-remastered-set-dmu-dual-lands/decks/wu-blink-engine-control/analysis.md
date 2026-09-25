---
deck_name: "wu-blink-engine-control"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-08-27T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Idyllic Beachfront          WU dual, always enters tapped
  8x Island
  8x Plains
```

### CREATURES (15)

```
CMC  Card                                     Qty   Color  Role                                       Rar
  1  Thraben Inspector                        x2    W      Engine: a Clue per blink                   C
  3  Fiend Hunter                             x2    W      Interaction: re-pointable exile            U
  3  Spell Queller                            x1    UW     Interaction: flash counter (never blink)   R
  3  Stitched Mangler                         x2    U      Interaction: tap that survives untap       C
  4  Mist Raven                               x2    U      Interaction: bounce per blink              U
  4  Restoration Angel                        x1    W      Engine: flash one-shot blink (non-Angel)   R
  4  Tower Geist                              x2    U      Engine: a card per blink                   C
  6  Deadeye Navigator                        x1    U      Engine: {1}{U} blink, instant speed        R
  6  Subjugator Angel                         x2    W      Threat: Falter lock via Deadeye            U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                                     Qty   Color  Role                                       Rar
  1  Essence Flux                             x2    U      Engine: 1-mana instant blink               C
  2  Valorous Stance                          x2    W      Interaction: modal protect / kill          U
  3  Cackling Counterpart                     x1    U      Engine: instant-speed token copy           U
  4  Memory Deluge                            x1    U      Engine: digs for the singleton engines     R
```

### OTHER SPELLS (1)

```
CMC  Card                                     Qty   Color  Role                                       Rar
  5  Conjurer's Closet                        x1    C      Engine: free blink each end step           R
```

## SIDEBOARD (10)

```
Card                                     Qty   Color  Role / When to board in                     Rar
Syncopate                                x2    U      Combo / control mirrors; exiles             C
Cathar Commando                          x2    W      Artifacts (24) / enchantments (25)          C
Angelic Purge                            x1    W      Catch-all exile, any permanent type         C
Bound by Moonsilver                      x1    W      Recursive threats; stops transform          C
Geistlight Snare                         x1    U      Extra counter; discounted by SB enchantments U
Imprisoned in the Moon                   x1    U      The cube's 7 planeswalkers                  C
Soul-Guide Gryff                         x2    W      Graveyard decks (27% of cube)               C
```

## ANALYSIS

### DECK IDENTITY

A WU blink-engine control deck built on two engines with DIFFERENT timing, which is what decides their targets. Deadeye Navigator grants a soulbonded pair "{1}{U}: Exile this creature, then return it to the battlefield under your control" at INSTANT speed, so it can re-trigger Subjugator Angel ("tap all creatures your opponents control") during the opponent's upkeep, where the tap actually holds through their turn - that is the Falter lock. Conjurer's Closet triggers "at the beginning of your end step", so a tap it produced would be erased by the opponent's untap step; its correct targets are the value ETBs - Tower Geist (a card), Thraben Inspector (a Clue), Mist Raven (a bounce), Fiend Hunter (a re-pointed exile) - and Stitched Mangler, whose "That creature doesn't untap during its controller's next untap step" is the one tap effect in these colours that survives end-step timing. The deck survives to turn 9 on Fiend Hunter, Stitched Mangler, Valorous Stance and Spell Queller, assembles an engine, and closes with the accumulated fliers.

### KEY OBSERVATIONS

**The two engines have different timing, and that decides their targets.** This is the single most
important thing to know when piloting the deck, and it was caught in the grill after being stated
wrongly in the first draft. Conjurer's Closet triggers "at the beginning of your end step" — so any
tap effect it produces is erased by the opponent's untap step before it can stop a block or an
attack. Deadeye Navigator's "{1}{U}: Exile this creature, then return it" is an **activated ability
at instant speed**, so it can be fired in the opponent's upkeep, where a tap holds for their whole
turn.

| Engine | Timing | Correct targets |
|---|---|---|
| Conjurer's Closet | your end step | Tower Geist (a card), Thraben Inspector (a Clue), Mist Raven (a bounce), Fiend Hunter (a re-pointed exile), Stitched Mangler (a lasting tap) |
| Deadeye Navigator | instant speed | all of the above, **plus** Subjugator Angel — this is the Falter lock |

**Stitched Mangler is the deck's most underrated card.** "That creature doesn't untap during its
controller's next untap step" is the only tap effect in these colours that survives the Closet's
end-step timing. Blinked every turn it locks one opposing creature out of the game permanently.
It entered the deck through the grill: it had been swept out under a reason that was factually
false of it.

**Two piloting traps.** (1) **Never blink Spell Queller.** "When this creature leaves the
battlefield, the exiled card's owner may cast that card without paying its mana cost" — it is 1 of
the 12 non-Angel creature copies, and it is the one Restoration Angel and Conjurer's Closet must
never target. (2) **Restoration Angel cannot blink Subjugator Angel.** "exile target **non-Angel**
creature you control" — of 15 creature copies, 3 are Angels, so it has 12 legal targets and 11
desirable ones.

**The rare cap shaped this deck more than any other decision.** Five slots, all mainboard:
Conjurer's Closet, Deadeye Navigator, Restoration Angel, Memory Deluge, Spell Queller. Both engines
are hard singletons, which is why Memory Deluge earns a slot as a dig, and why the sideboard is
necessarily all commons and uncommons. The cube's only untapped WU dual is also a rare and was
declined; two copies of the *common* Idyllic Beachfront do the fixing instead, which costs nothing
but a tapped land in a deck that plans to turn 9 anyway.

**Ten of 22 nonland cards carry a double or split-colour pip.** After the grill computed on-curve
castability rather than reading the aggregate ratio, the basics were rebalanced from 7 Plains /
9 Island to 8/8, lifting "3 lands and 2 white sources by turn 3" from 64.4% to 70.6% on the play.

**Known soft spot.** The goldfish check is a WARN at 79.6% keepable against an 80% threshold —
a genuine miss, not a tie. Three six-drops and six four-drops on 18 lands is what a turn-9 thesis
costs. Think Twice is the cheapest fix and is named in the excluded list.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (22 nonland):  1:4  2:2  3:6  4:6  5:1  6:3
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 3.7: Restoration Angel@0.5, Essence Flux@0.4, Essence Flux@0.4, Cackling Counterpart@0.4) → p=0.79 (need ≥ 0.75)
  PASS  enabler: 12 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 55%  T2 76%  T3 96%
Coverage:  [PASS]
  OK        wide_boards: Subjugator Angel
  OK        single_large_threat: Fiend Hunter, Mist Raven, Valorous Stance
  CONCEDED  noncreature_permanents: 0 of 22 nonland cards answer a RESOLVED artifact or enchantment. Spell Queller exiles a spell on the stack, not a permanent. The cube holds 49 such permanents (24 artifacts + 25 enchantments = 17.7% of 277 nonland cards). Conceded maindeck because the rare cap is fully spent on the two singleton engines plus the cards that find and protect them; 2x Cathar Commando and 1x Angelic Purge board in.
  OK        stack: Spell Queller
  CONCEDED  graveyard: No maindeck graveyard answer against a cube whose graveyard-interaction density is 75 of 277 nonland cards (27.1%), its largest threat class. 2x Soul-Guide Gryff board in; blinked by Conjurer's Closet its 'exile up to one target card from a graveyard' becomes per-turn graveyard attrition, which is why it is a boarded upgrade rather than a maindeck tax.
```

- goldfish WARN (keepable 79.6% against an 80.0% threshold - CORRECTED from the earlier prose, which rendered this as 'exactly 80%'; it is below the threshold, which is why the check is a WARN and not a PASS). Accepted, not repaired. The cause is the curve: 3 six-drops and 6 four-drops against 18 lands, which is what a turn-9 controller thesis requires. Lowering the curve to raise keepability would mean cutting Subjugator Angel or Deadeye Navigator, i.e. cutting the kill mechanism to improve a mulligan statistic.
- The cheapest available repair was named and declined, per grill F-8: Think Twice ({1}{U}, common, up to 2 copies, in include_candidates) would add two MV-2 cards and two graveyard-based second uses at zero rare cost. It was not taken because the two nonland slots freed in the Phase 9 repair went to Stitched Mangler x2, which resolves a BLOCKING finding (the deck's only tap effect that survives the Conjurer's Closet end-step timing). Think Twice is recorded as the first card to add if this deck is iterated for consistency rather than for the engine.
- Mitigating facts that do hold: 3 lands by turn 3 is 92%, and Thraben Inspector x2 at {W} converts a slow keep at one mana. Memory Deluge and Tower Geist x2 cost 4, so they refuel a slow game rather than rescuing a slow keep - stated explicitly because the earlier response cited all three as if equivalent.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Deadeye Navigator's '{1}{U}: Exile this creature, then return it' can be activated repeatedly in one turn; Memory Deluge's 'Look at the top X cards of your library, where X is the amount of mana spent to cast this spell' scales without limit, with flashback {5}{U}{U} as a second sink; Cackling Counterpart's flashback {5}{U}{U} is a third; Thraben Inspector's Clue ('{2}, Sacrifice this token: Draw a card') a fourth. |
| `screw` | accepted | The deck keeps 6 cards at MV 2 or less of 22 nonland (Essence Flux x2, Thraben Inspector x2, Valorous Stance x2 - CORRECTED from a stated 4) and the goldfish check reports 79.6% keepable against an 80% threshold. Mitigating would mean adding cheap interaction at the cost of the six-drop finishers or the engines themselves, which is the kill mechanism. The deck accepts a higher mulligan rate as the price of a turn-9 inevitability plan; 3 lands by turn 3 is 92%, so the failure is hand quality, not mana. |
| `decapitation` | mitigation | Both named engines are one-of, so redundancy is layered rather than duplicated: Restoration Angel is a flash one-shot blink, 2x Essence Flux are one-mana instant blinks, and Cackling Counterpart copies an ETB body outright - 6 functional payoff copies at effective 3.7 after honest weighting. Valorous Stance ('Target creature gains indestructible until end of turn') protects Deadeye Navigator, and Conjurer's Closet is an artifact, so creature removal cannot answer it at all. Disclosed limit: indestructible answers destroy and damage only, not exile, bounce or a counterspell. |
| `gas-out` | mitigation | Memory Deluge ('Put two of them into your hand') with flashback, Tower Geist x2 ('Put one of them into your hand'), Thraben Inspector x2 (a Clue each). Once either engine is online the deck stops needing cards from the top: blinking Tower Geist draws every turn, so gas-out and engine-assembly are the same problem. |
| `raced` | accepted | With 3 six-drops, 6 four-drops and an 18-land base this deck cannot win a damage race. Mitigating would mean lowering the curve below what the engines cost, which removes the thesis. CORRECTED per grill F-11: the earlier entry cited '4 sweepers, 1.4% of 300' as a reason the slowness is safe. The density is 4 of 277 nonland cards, and the inference ran backwards - sweeper scarcity is a reason the go-wide alternative is UNDER-punished, i.e. a reason the environment rewards the plan this build rejected. The acceptance stands on its own terms: Fiend Hunter, Mist Raven and Stitched Mangler buy the turns rather than winning them, and buying turns is what a turn-9 thesis is for. |
| `disruption-fizzle` | mitigation | The critical turn is casting a 5- or 6-mana engine into open mana. Spell Queller ('Flash / When this creature enters, exile target spell with mana value 4 or less') answers the counterspell on the way; Restoration Angel and 2x Essence Flux are instant-speed, so a targeted removal spell aimed at Deadeye Navigator can be answered by blinking it in response. Conjurer's Closet resolving is itself the fallback - it needs no creature to already be on the battlefield. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Nebelgast Herald | Cut in the grill. 'Whenever this creature or another Spirit you control enters, tap target creature an opponent controls' - but a tap produced at the beginning of your end step is erased by the opponent's untap step, and after the cut this list holds only 4 Spirit copies of 15 creatures. Stitched Mangler took both slots. |
| Spectral Shepherd | Cut at FILL when land_target returned 18 (not 17). '{1}{U}: Return target Spirit you control to its owner's HAND' is mana-negative and only reaches the 4 Spirits in the list. |
| Helvault | Its mass return only fires 'when Helvault is put into a graveyard from the battlefield'. The only WU enabler is Cathar Commando - a 3-card, 2-turn, one-shot sequence costing a rare slot. |
| Deserted Beach | The cube's only untapped-capable WU dual, but it is a RARE and the cap is full at 5/5, all spent on the two singleton engines plus the cards that find and protect them. Two common Idyllic Beachfront were taken instead; always-tapped is near-costless at a turn-9 thesis. |
| Cathars' Crusade, Jace Unraveler of Secrets, Wedding Announcement, Thalia Heretic Cathar, Overcharged Amalgam, Necroduality, Tamiyo's Journal | Rares and mythics cut purely on the 5-card cap. Overcharged Amalgam ('Exploit ... counter target spell, activated ability, or triggered ability') was the closest call - a flash counter on a blinkable body - but it buys no engine consistency, which is what the fifth slot went to (Memory Deluge). |
| Mentor of the Meek | 'Whenever another creature you control with power 2 or less enters, you may pay {1}... draw a card' qualifies on 11 of 15 creature copies (73.3%) - the strongest count in the cut pile. Cut because the {1} tax competes with Deadeye Navigator's own {1}{U} activation on the same turns. |
| Ambitious Farmhand // Seasoned Cathar | 'When this creature enters, you may search your library for a basic Plains card... put it into your hand' - a genuine repeat-on-re-entry ETB and a direct fix for the white-source problem. Cut because it fetches to HAND, not the battlefield, and the mana was fixed for free by rebalancing the basics to 8/8 instead. |
| Think Twice | 'Draw a card. Flashback {2}{U}' - the cheapest available repair for the goldfish WARN (79.6% keepable). Not taken because the two freed slots went to Stitched Mangler, which resolved a blocking finding. This is the first card to add if iterating for consistency. |
| Geistcatcher's Rig, Faith Unbroken, Angel's Tomb, Drogskol Shieldmate | The strongest tier-below includes. Geistcatcher's Rig is repeatable removal but MV 6 into a curve with 3 six-drops. Faith Unbroken is an Aura, so 0 of the 3 blink engines can touch it. Angel's Tomb's 'until end of turn' off an end-step trigger produces a 3/3 that can never attack. Drogskol Shieldmate's +0/+1 across a 1-3 creature board is near-blank. |
| Slayer of the Wicked | 'you may destroy target Vampire, Werewolf, or Zombie' - 51 of the cube's 166 creatures (30.7%). A blink engine would repeat it, but it is blank 69% of the time where Mist Raven and Fiend Hunter are unconditional. |
| Avacynian Priest | '{1}, {T}: Tap target non-Human creature' - 113 of 166 cube creatures (68%) are non-Human, a fine rate. Cut because it has no enters-the-battlefield trigger at all, so it gains nothing from 11 engine slots in a deck whose thesis is repeating ETBs. |
| Lunarch Veteran // Luminous Phantom | 'Whenever another creature you control enters, you gain 1 life' - 15 creature copies plus every blink re-entry, 20+ triggers. Cut because there is no lifegain payoff left in the deck to convert that into a win. |
| Zealous Conscripts, Wandering Mind | The red splash candidates, declined by all three sketchers. Wandering Mind's ETB reveals 'a noncreature, nonland card', so it structurally cannot find Deadeye Navigator or any ETB creature. Zealous Conscripts gains control 'until end of turn' and is a rare against a full cap. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.32   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.76 adj [MV 3.32 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  U  demand  54.8%  prod  55.6%  gap  -0.8pp  [OK]
  W  demand  45.2%  prod  55.6%  gap -10.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons / uncommons, max 2 copies ............ PASS  (no card above 2)
Rares / mythics, max 1 copy .................. PASS  (all 5 rares appear once)
Rare + mythic total across MB + SB, max 5 .... PASS  (exactly 5, all mainboard:
                                                     Conjurer's Closet, Deadeye Navigator,
                                                     Memory Deluge, Restoration Angel,
                                                     Spell Queller. Sideboard is all
                                                     commons/uncommons by necessity.)
All cards from the cube pool ................. PASS  (exact-name match; Plains/Island are
                                                     format-supplied basics)
Colour legality (W/U, no splash) ............. PASS  (effective_cost.best_mode non-None for
                                                     all nonland cards)
Mainboard size 40 / sideboard size 10 ........ PASS
```
