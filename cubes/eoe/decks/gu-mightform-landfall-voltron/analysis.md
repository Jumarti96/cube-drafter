---
deck_name: "gu-mightform-landfall-voltron"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UG"
format: "40-card"
built_at: "2026-08-07T18:05:51Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x9   Forest                 
  x5   Island                 
  x2   Tangled Islet          UG dual, enters tapped
```

### CREATURES (14)

```
CMC  Card                  Qty   Color  Role                            Rar
  2  Biomechan Engineer    x2    UG     2-drop body + Lander            U
  2  Frenzied Baloth       x1    G      Trample/haste + uncounterable   R
  2  Genemorph Imago       x1    UG     Landfall: base 6/6, flies       R
  2  Steelswarm Operator   x2    U      Pays the Lander crack cost      U
  3  Galactic Wayfarer     x2    G      Body + Lander                   C
  4  Icecave Crasher       x1    G      4/4 trample, grows on landfall  C
  4  Icetill Explorer      x1    G      Extra land drop each turn       R
  4  Mightform Harmonizer  x1    G      Landfall: DOUBLE power          R
  4  Seedship Agrarian     x2    G      Payoff + renewable Lander       U
  4  Starfield Vocalist    x1    U      Doubles every landfall          R
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                     Qty   Color  Role                          Rar
  1  Sami's Curiosity         x2    G      Banked land entry, {G}        C
  2  Biosynthic Burst         x2    G      Indestructible + trample      C
  2  Consult the Star Charts  x1    U      Digs for the 1-of pieces      R
  2  Divert Disaster          x2    U      Soft counter, or a Lander     C
  2  Seedship Impact          x1    G      Artifact/ench. kill + Lander  U
```

### OTHER SPELLS (2)

```
CMC  Card                Qty   Color  Role                      Rar
  3  Larval Scoutlander  x2    G      Two land entries at once  U
```

## SIDEBOARD (10)

```
Card                Qty   Color  Role / When to board in                  Rar
Annul               x2    U      Counter artifact/ench. spell (74 cards)  U
Seedship Impact     x1    G      Artifact/ench. kill + Lander             U
Dauntless Scrapbot  x2    C      Graveyard exile + Lander (12.5%)         U
Shattered Wings     x2    G      Artifacts/ench./fliers (29.7%+22.5%)     C
Skystinger          x2    G      Blocks fliers (22.5% evasion)            C
Unravel             x1    U      Hard counter; only sweeper answer        U
```

## ANALYSIS

### DECK IDENTITY

Blue-green Landfall Voltron. Every land entering the battlefield makes one creature bigger. Genemorph Imago sets a creature's base power and toughness to 3/3, or 6/6 once you control six lands, and because its trigger says 'target creature' it may target ITSELF - so the setter and the evasive delivery body are the same flying card. Mightform Harmonizer then doubles that power on every land entry, and Starfield Vocalist makes each landfall trigger fire an additional time, so a single land entry doubles power twice. Lander tokens, Larval Scoutlander and Icetill Explorer supply the entries; Steelswarm Operator pays for them; Frenzied Baloth makes the whole creature suite uncounterable and stops damage prevention on the lethal swing.


### THE FLOOR AND THE CEILING, STATED SEPARATELY

This deck has two very different games, and the honest thing is to give both numbers.

**The ceiling.** With `Genemorph Imago` and `Mightform Harmonizer` both on board at six lands, one land entry sets a creature to base 6/6 and then doubles its power **twice** (Starfield Vocalist makes the landfall trigger fire an additional time): 6 → 12 → **24 power**, on a flier. Two land entries in the turn takes it to 96. That wins on the spot.

**The floor.** Both of those cards are rares, and the pool restriction caps rares at one copy each. The probability of drawing **both** by turn 6 is **8.5%**. Restricting the payoff role to just those two gives an assembly probability of **p = 0.49** — a failure against the structural gate's 0.75 floor.

So the deck is built to win without them. The payoff role is six functional copies — `Genemorph Imago`, `Mightform Harmonizer`, `Seedship Agrarian ×2`, `Icecave Crasher`, `Frenzied Baloth` — at **p = 0.82**. That floor is a linear beatdown: a 4/4 trampler that grows +1/+0 per land entry, and a 3/3 that gains a permanent +1/+1 counter per land entry. It is slower and much less exciting, and it is what happens in most games.

| Payoff set | Weighted copies | P(assembled by T6) |
|---|---|---|
| The multiplicative kill (Imago + Mightform only) | 2.0 | **0.487** — fails the gate |
| The linear floor (all six) | 4.9 | **0.817** — passes |

### WHY STEELSWARM OPERATOR IS IN A DECK WITH NO OTHER ARTIFACTS

Every Lander reads `{2}, {T}, Sacrifice this token`. Thirteen of the 24 nonland cards *make* Landers, and before the grill **zero** reduced the cost of *cashing* them — on the turn you cast a 4-drop, you crack nothing. `Steelswarm Operator`'s second ability is *"{T}: Add {U}{U}. Spend this mana only to activate abilities of artifact sources."* A Lander is an artifact and its crack is an activated ability of an artifact source, so one Operator converts a banked Lander into a land entry every turn for free. It is a mana card that reads like an artifact-deck card and is neither.

### WHAT THE GRILL CHANGED

The Challenger's central finding was that my first thesis revision passed the structural gate by **widening the definition of a payoff** rather than by adding redundancy — I had written that the floor was "a landfall trigger makes one creature lethal-sized," and `Icecave Crasher`'s +1/+0 plainly does not do that. That was a fair charge. The predicate is now written to match what the cards actually do, and the 0.49 sits in the record next to the 0.82 instead of being absorbed by it.

| Change | Why |
|---|---|
| +`Seedship Impact` (main + board) | It is the **only** enchantment answer in the entire 249-card cube, it is an uncommon, and it makes a Lander — so it costs zero land entries to run. |
| `Seedship Agrarian` 1 → 2 | A straight build error: two are legal and it is the only card that is both payoff and enabler. |
| `Icecave Crasher` 2 → 1 | The shape judge had already called these threat slots unjustified, and the gate does not need the sixth copy. |

### THE HONEST WEAKNESSES

- **Two accepted failure modes.** `gas-out` (3 of 24 card-positive, two of which need 8 mana or a kicker) and `raced` (the blockers *are* the combo pieces). Both are accepted rather than mitigated because every fix costs land entries, and a land entry is a payoff trigger here.
- **Sweepers.** Three of the cube's five are destroy-based and two deal damage; `Biosynthic Burst`'s indestructible saves **one** creature from any of them. Nothing in UG protects the board.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (24 nonland):  1:2  2:12  3:4  4:6
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.9: Seedship Agrarian@0.8, Seedship Agrarian@0.8, Icecave Crasher@0.7, Frenzied Baloth@0.6) → p=0.82 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 12.9: Larval Scoutlander@0.8, Larval Scoutlander@0.8, Icetill Explorer@0.9, Seedship Agrarian@0.9, Seedship Agrarian@0.9, Steelswarm Operator@0.7, Steelswarm Operator@0.7, Divert Disaster@0.4, Divert Disaster@0.4, Seedship Impact@0.4) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 34%  T2 93%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Icecave Crasher, Frenzied Baloth, Biosynthic Burst, Genemorph Imago
  OK        single_large_threat: Genemorph Imago, Divert Disaster, Biosynthic Burst
  OK        noncreature_permanents: Seedship Impact
  OK        stack: Divert Disaster, Frenzied Baloth
  CONCEDED  graveyard: No mainboard graveyard answer; at 12.5% cube density (31 of 249) it does not earn a maindeck slot in a 24-nonland deck built around a six-land threshold. Answered from the sideboard with Dauntless Scrapbot x2, which exiles each OPPONENT'S graveyard only - so it never turns off Icetill Explorer's 'You may play lands from your graveyard' - and also creates a Lander, so boarding it costs zero land entries.
```

- Assembly PASS was reached by revising the thesis BEFORE running the gate. At Phase 9 the Challenger demonstrated that the first revision still passed by WIDENING the payoff predicate - only 2 of the 6 credited copies met the stated 'lethal-sized' wording. The predicate was rewritten to what the cards actually do, and the narrow multiplicative probability (p=0.4867, FAIL) is now published alongside the floor (p=0.8171, PASS) instead of being absorbed.
- Curve PASS and Goldfish PASS (keepable 82% against an 80% floor; 3 lands by turn 3 = 84%).
- Coverage: after adding Seedship Impact at Phase 9, noncreature_permanents is a COVERED class rather than a concession. Only graveyard remains conceded, answered from the sideboard.
- Three slot bands are exceeded (Threats +10pp, Engine +4.2pp, Interaction +0.8pp). The Threats rationale was rewritten - the earlier 'the gate forces it' claim was false and is withdrawn.
- Record note: the bundle's audit is not reproducible from the deck array alone, because deck_audit detects ramp only by tagger tag and the array shipped without tags. The saved deck.json includes tags.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Extra lands are the payoff, not a surplus. Every land entering triggers Genemorph Imago (base 3/3, or 6/6 at six lands), Mightform Harmonizer (double power), Icecave Crasher (+1/+0) and Seedship Agrarian x2 (+1/+1 counter). The SIXTH land is a threshold rather than a spare - it is what upgrades Genemorph Imago's base setting to 6/6. Biomechan Engineer x2's '{8}: Draw two cards and create a 2/2 colorless Robot artifact creature token' is the repeatable mana sink for genuinely excess lands; an earlier draft omitted it, which was the deck's best flood outlet. |
| screw | mitigation | Two-land hands are keepable on Sami's Curiosity ({G}, 'Create a Lander token') and Biomechan Engineer ({G}{U}, ETB Lander); 13 of 24 nonland copies fetch a basic, and Steelswarm Operator ({1}{U}) then pays the {2} crack cost for free. Goldfish measures 82% keepable and 84% to have three lands by turn 3. |
| decapitation | mitigation | The whole point of the pre-gate thesis revision. No single card is required: the payoff role carries 6 functional copies at p=0.81, so Mightform Harmonizer answered on sight drops the kill from a multiplicative burst to a linear one (Icecave Crasher's +1/+0 per entry, Seedship Agrarian's permanent counters) rather than removing it. Frenzied Baloth's 'Creature spells you control can't be countered' means the pieces at least resolve, and Biosynthic Burst x2 gives instant-speed indestructible in response to targeted removal. |
| gas-out | accepted | 3 of 24 nonland copies are card-positive: kicked Consult the Star Charts ('put two of those cards into your hand instead') and Biomechan Engineer x2's '{8}: Draw two cards'. Two of those three need 8 mana or a kicker, so the practical figure is worse than 3. Mitigating would mean cutting land-entry cards for draw spells, and in this deck a land entry IS a payoff trigger - it feeds 6 of 24 payoff copies - so buying cards directly reduces the power the kill is made of. What partially offsets it: the deck wins from a small board (Genemorph Imago plus one land entry at six lands is already a 6/6 flier), and Seedship Agrarian x2 keeps making Landers from an empty hand whenever it is tapped. Accepted, not solved: against a control deck that trades one-for-one and goes long, this deck loses on cards. |
| raced | accepted | This deck's blockers ARE its combo pieces, so blocking risks the kill. Statlines verified against the pool: Genemorph Imago 1/3 flying, Icecave Crasher 4/4, Frenzied Baloth 3/2, Seedship Agrarian 3/3, Galactic Wayfarer 3/3, Biomechan Engineer 2/2, Icetill Explorer 2/4. Larval Scoutlander is NOT a blocker - it is an 'Artifact - Spacecraft' and 'an artifact creature at 7+', and Station reads 'Tap another creature you control', so charging it costs a blocker. Mitigating means adding defensive bodies in place of land-entry cards, which lengthens the goldfish turn the whole build is organised around; the deck buys turn-6 speed by paying for a worse race. Biosynthic Burst can make a surprise blocker that survives, and Skystinger x2 is the sideboard correction against the cube's 22.5% evasion density. |
| disruption-fizzle | mitigation | Frenzied Baloth answers the counterspell half outright - 'This spell can't be countered' and 'Creature spells you control can't be countered', covering 14 of 24 nonland copies - and 'Combat damage can't be prevented' is 1 of 24, the only fog answer in the list. The removal half is answered by Biosynthic Burst x2 at instant speed ('indestructible until end of turn'), which also supplies trample on the same card, so the protection spell and the evasion enabler do not compete for mana on the swing turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Breeding Pool | The only untapped-capable UG dual, but it is not a basic land, so Lander tokens ('Search your library for a basic land card') cannot fetch it - and it would spend the 6th rare slot that Frenzied Baloth uses to make the whole creature suite uncounterable. |
| Eusocial Engineering | 'Landfall - create a 2/2 colorless Robot artifact creature token' is the OTHER build of this archetype (a go-wide swarm). Splitting slots between a token swarm and a single-creature Voltron kill halves both; this deck commits to the Voltron half. |
| Glacier Godmaw | 7 mana for a 6/6 trample plus team haste. The goldfish turn here is 6, so a 7-drop arrives after the kill window; its team-pump also rewards a wide board this deck does not build. |
| Bioengineered Future | Its counter clause is a static replacement effect, so Starfield Vocalist does not double it, and it scales a WIDE board of entering creatures - this deck attacks with one creature. |
| Unravel | Maindeck cut: the deck's own Frenzied Baloth already reads 'Creature spells you control can't be countered', so the protection a hard counter would buy is partly redundant. Kept as a 1-of sideboard card for non-creature threats. |
| Seedship Impact | Maindeck cut in favour of Biosynthic Burst x2. A Voltron kill loses to its creature dying, not to an opposing artifact; artifact removal moves to the sideboard where the cube's 29.7% artifact density is answered with Shattered Wings x2 and Annul x2. |
| Drix Fatemaker | 'Each creature you control with a +1/+1 counter on it has trample' - a trample granter, but only 3 of 24 nonland cards in this list put +1/+1 counters on creatures (Biosynthic Burst x2, Seedship Agrarian x1), and Biosynthic Burst already grants trample directly on the same card. |
| Meltstrider's Resolve | 'can't be blocked by more than one creature' helps a trampler, but its ETB fight clause ('enchanted creature fights up to one target creature') risks the single combo creature before it is pumped, and an Aura is card disadvantage when the creature is removed in response. |
| Atomic Microsizer | 'choose up to one target creature. That creature can't be blocked this turn and has base power and toughness 1/1' - targeting your own attacker to make it unblockable also sets its base to 1/1, which is exactly the number Mightform Harmonizer would then be doubling. |
| Harmonious Grovestrider | 'power and toughness are each equal to the number of lands you control' with Ward {2}, but it has neither trample nor evasion, so a single chump blocker stops the whole kill. |
| Codecracker Hound | 'look at the top two cards ... Put one into your hand' - real selection for a three-singleton combo, but a 2-card dig is thin next to Consult the Star Charts' X = lands (6-8 by the kill turn), and the slot was worth more as a fourth payoff copy. |
| Tractor Beam | {2}{U}{U} in a deck with 7 blue sources; P(2 blue by turn 5) is roughly 54%, and stealing a creature does not advance a kill that comes from one of your own. |
| Loading Zone | 'twice that many of each of those kinds of counters' doubles counters, not triggers. 3 of 24 nonland cards in this list put +1/+1 counters on creatures. EXCLUDE - and it would be a 7th rare. |
| Moonlit Meditation | Copies tokens once per turn; this deck creates Lander tokens as fuel, not as threats, and it would be a 7th rare. |
| Famished Worldsire | Mythic 8-drop whose 'Devour land 3' sacrifices the lands the landfall payoffs need on the battlefield, and it arrives two turns after the goldfish window. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     2.58   Ramp cards: 15   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -2.39 adj [MV 2.58 vs 2.5, 15 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  G  demand  70.0%  prod  68.8%  gap  +1.2pp  [OK]
  U  demand  30.0%  prod  43.8%  gap -13.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                            cube_mainboard
commons_uncommons_max_2:         PASS
rares_mythics_max_1:             PASS
rare_mythic_total_cap_6:         PASS - exactly 6: Mightform Harmonizer, Genemorph Imago, Starfield Vocalist, Frenzied Baloth, Icetill Explorer, Consult the Star Charts. Sideboard is entirely commons/uncommons.
all_cards_in_cube:               PASS - exact-name match against the working pool cache
colour_legality:                 PASS - effective_cost.best_mode(card, [U,G], []) non-None for all 50
basics:                          format-supplied, exempt from copy limits
```
