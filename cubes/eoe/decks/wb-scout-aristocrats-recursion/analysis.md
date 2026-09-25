---
deck_name: "wb-scout-aristocrats-recursion"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WB"
format: "40-card"
built_at: "2026-09-04T01:11:23Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)

```
  x7   Plains
  x5   Swamp
  x1   Godless Shrine                               Plains Swamp, taps for BW, enters tapped
  x2   Sunlit Marsh                                 Plains Swamp, taps for BW, enters tapped
```

### CREATURES (18)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Hullcarver                                   x2    B     residual                       C
  1  Starport Security                            x2    W     residual                       C
  2  Beamsaw Prospector                           x2    B     residual                       C
  2  Dockworker Drone                             x2    W     residual                       C
  2  Lightless Evangel                            x2    B     payoff                         U
  2  Starfighter Pilot                            x2    W     engine                         C
  2  Sunstar Chaplain                             x1    W     payoff                         R
  2  Syr Vondam, Sunstar Exemplar                 x1    WB    payoff                         R
  2  Umbral Collar Zealot                         x2    B     engine                         U
  3  Rayblade Trooper                             x2    W     payoff                         U
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Focus Fire                                   x1    W     interaction                    C
  1  Honor                                        x2    W     engine                         U
  1  Tragic Trajectory                            x2    B     interaction                    U
  3  Scout for Survivors                          x2    W     payoff                         U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Depressurize                                 x2    B     flex: Against blockers this deck's 1/1s and 2/ C
Virus Beetle                                 x2    B     hate: Against control and combo — 'When this c C
Dauntless Scrapbot                           x2    C     hate: Against graveyard decks — threat_profile U
Emergency Eject                              x2    W     hate: Against artifacts and enchantments — thr U
Radiant Strike                               x2    W     hate: Against artifacts specifically — 'Destro C
```

## ANALYSIS

### DECK IDENTITY

A white-black go-wide aristocrats deck whose creatures are built to be spent, and whose graveyard use is smaller than its name suggests. Two cards return anything from a graveyard - Scout for Survivors x2, 2 of 25 nonland cards - and the honest description of the rest is a +1/+1-counters sacrifice deck that uses the yard as a buffer rather than as a second hand. What Scout actually does is printed narrowly: 'Return up to three target creature cards with TOTAL mana value 3 or less', so two mana-value-2 creatures are an illegal pair and every multi-body return routes through one of only four mana-value-1 copies. At its floor it returns one creature with a +1/+1 counter, which is 18 of 18 creature copies live. The counters it distributes are the real engine: Rayblade Trooper turns every counter-bearing nontoken death into a fresh 1/1, and Umbral Collar Zealot's free 'Sacrifice another creature or artifact: Surveil 1' converts the board into graveyard on demand. Beamsaw Prospector dies into a Lander and Dockworker Drone hands its counter onward, so feeding the outlet costs less board than it looks like it should - which is the answer to the objection that an aggro deck cannot afford to fill its own yard.

### DECK IDENTITY

A white-black go-wide aristocrats deck whose creatures are built to be spent, and whose graveyard use is smaller than its name suggests. Two cards return anything from a graveyard - Scout for Survivors x2, 2 of 25 nonland cards - and the honest description of the rest is a +1/+1-counters sacrifice deck that uses the yard as a buffer rather than as a second hand. What Scout actually does is printed narrowly: 'Return up to three target creature cards with TOTAL mana value 3 or less', so two mana-value-2 creatures are an illegal pair and every multi-body return routes through one of only four mana-value-1 copies. At its floor it returns one creature with a +1/+1 counter, which is 18 of 18 creature copies live. The counters it distributes are the real engine: Rayblade Trooper turns every counter-bearing nontoken death into a fresh 1/1, and Umbral Collar Zealot's free 'Sacrifice another creature or artifact: Surveil 1' converts the board into graveyard on demand. Beamsaw Prospector dies into a Lander and Dockworker Drone hands its counter onward, so feeding the outlet costs less board than it looks like it should - which is the answer to the objection that an aggro deck cannot afford to fill its own yard.

### THE MANA-VALUE CEILING IS THE WHOLE DECKBUILD

Scout for Survivors reads `total mana value 3 or less` across **all** targets, not per target. That one word does more to shape this list than any synergy:

| Return | Legal? | Why |
|---|---|---|
| three mana-value-1 creatures | yes (1+1+1 = 3) | needs three of only 4 such copies in the yard at once — decoration |
| one MV-1 + one MV-2 | yes (1+2 = 3) | the routine two-body mode |
| **two MV-2 creatures** | **NO (2+2 = 4)** | this is the trap |
| one MV-3 creature | yes | the floor, and 18 of 18 creature copies are inside it |

An earlier draft of this build claimed "eleven mana-value-2 creatures make the two-body mode routine." That was wrong, and both Phase 9 agents caught it independently. **Every** multi-body Scout routes through `Hullcarver` or `Starport Security` being in the graveyard. That is why four copies of two otherwise-thin 1-drops are in the deck: they are not there for their text, they are there for their mana value.

### THE OBJECTION THAT SHAPED THE LIST

The skeleton critic's sharpest point was that the engine fights the kill mechanism — an aggro deck has an empty graveyard on turn 3, so making Scout live means sacrificing the board it needs to attack with. That is true of a naive build. It is answered by which creatures are in the list:

- `Beamsaw Prospector` — `When this creature dies, create a Lander token.` A permanent for a permanent, and the Lander is itself legal fodder.
- `Dockworker Drone` — `When this creature dies, put its counters on target creature you control.` The counter survives the body.
- `Starfighter Pilot` — `Whenever this creature becomes tapped, surveil 1.` Fills the yard **without being sacrificed at all**, simply by attacking.

Four of the eighteen creature copies are free to feed `Umbral Collar Zealot`, and two more fill for nothing.

### RAYBLADE TROOPER IS THE SECOND RECURSION ENGINE

`Whenever a nontoken creature you control with a +1/+1 counter on it dies, create a 1/1 white Human Soldier creature token.` The counters are not incidental — there are **9 sources of them across 25 nonland cards**: `Scout for Survivors` ×2 (one on each returned card), Rayblade's own ETB ×2, `Dockworker Drone` ×2 (enters with one), `Sunstar Chaplain`, and `Honor` ×2. Scout returning two counter-bearing bodies is also two future Rayblade triggers.

### WHAT THIS DECK IS AND IS NOT

It is not the deepest graveyard deck in this run — **2 of 25 cards return anything from a yard**, and the identity above says so. What it is: the only build of the four whose recursion mostly happens on the *battlefield* rather than from the graveyard, which is why opposing graveyard hate costs it two Scouts rather than its whole plan.

### THE WEAKEST NUMBER, STATED

Goldfish keepable is **80.3% against an 80% threshold**, and the turn-3 three-land rate is 80.2%. Both pass, and 15 lands is the audit's own recommendation adopted rather than overridden — but they are the tightest structural numbers in the run, and `Honor` (`target creature`, uncastable on an empty board) is a slightly generous cantrip input to the land-count reduction that produced them.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (25 nonland):  1:9  2:12  3:4
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  yard_filler: 8 copies (effective 5.4: Umbral Collar Zealot@0.8, Umbral Collar Zealot@0.8, Honor@0.3, Honor@0.3, Beamsaw Prospector@0.6, Beamsaw Prospector@0.6) → p=0.87 (need ≥ 0.75)
  PASS  recursion: 8 copies (effective 4.8: Rayblade Trooper@0.6, Rayblade Trooper@0.6, Beamsaw Prospector@0.4, Beamsaw Prospector@0.4, Dockworker Drone@0.4, Dockworker Drone@0.4) → p=0.83 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 80%
  play by turn: T1 86%  T2 99%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Focus Fire, Tragic Trajectory, Syr Vondam, Sunstar Exemplar
  OK        single_large_threat: Tragic Trajectory, Focus Fire, Syr Vondam, Sunstar Exemplar
  CONCEDED  noncreature_permanents: Unanswered in the mainboard at an acceptable cost - a claim about this deck, not the pool, so no pool probe is owed. The mainboard's two removal spells are Tragic Trajectory ('Target creature gets -2/-2') and Focus Fire ('deals X damage to target ATTACKING OR BLOCKING creature'); both stop at creatures, so an artifact or enchantment is unanswered game one. The pool answers them in these colours in at least four ways and the sideboard carries the two best at four copies: Emergency Eject x2 ('Destroy target nonland permanent') and Radiant Strike x2 ('Destroy target artifact or tapped creature'). Two more exist in the pool and are named rather than omitted - Banishing Light ({2}{W}, 'exile target nonland permanent an opponent controls') and Seam Rip ({W}, same at mana value 2 or less) - both of which a Challenger correctly pointed out an earlier version of this concession failed to mention. They lose to Emergency Eject on instant speed, not on availability. Maindecking any of them is what is rejected: at 25 nonland cards on a 15-land base, every removal spell an aggro deck maindecks is a turn it is not adding to the board.
  CONCEDED  stack: Unanswered in this deck's legal pool. Probe cited and actually run: cube_search.search_pool(pool, color_identity=['W','B'], splash_color_identity=['R'], oracle_pattern=r'[Cc]ounter target (spell|instant|sorcery|creature spell|noncreature spell)') -> 0 rows. Per dossier.census_caveat a 0-row probe is not proof of absence, and this pattern would miss 'counter it unless...' phrasings, so the operative claim is the weaker one: no counterspell is playable in W, B or the named red splash candidates. The deck's substitute is speed plus Virus Beetle x2 from the sideboard ('each opponent discards a card'), which interacts with a spell while it is still in hand.
  CONCEDED  graveyard: Unanswered in the mainboard, deliberately, and answered from the sideboard at 2 copies (Dauntless Scrapbot). Probe cited and actually run: cube_search.search_pool(pool, color_identity=['W','B'], splash_color_identity=['R'], oracle_pattern=r'exile .{0,40}graveyard|graveyard.{0,40}(exile|bottom of)') -> 4 rows: Chrome Companion, Dauntless Scrapbot, Rust Harvester, Timeline Culler. TWO are false positives: Timeline Culler's 'exile' clause is its own warp, and Rust Harvester exiles an artifact card from YOUR OWN graveyard as a cost, which is self-fuel rather than hate (and it is a red splash candidate this build does not play). So the pool offers this deck exactly two real answers, Chrome Companion and Dauntless Scrapbot, and the stronger of the two is in the board. The cost of maindecking one: this is the widest, cheapest deck in the run and every non-creature slot is a turn not spent adding a body; a maindeck graveyard-hate card is also blank against the 87.5% of the cube that does not use its yard. Pattern caveat: this regex would miss library-shuffle hate.
```

- No WARN-tier structural flags were raised on the final list - curve, assembly, goldfish and coverage all return PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Rewritten at Phase 9 round 2: an earlier version named Cosmogrand Zenith as a mana sink and that card was cut, so the mitigation named a card not in the deck. The sinks that ARE in the list: Starport Security's '{3}{W}, {T}: Tap another target creature', which costs {1}{W} whenever a creature has a +1/+1 counter - and counter-sources number 9 of 25, so the discount is usually live; and Beamsaw Prospector's Lander token ('{2}, {T}, Sacrifice this token: Search your library for a basic land card'), which converts surplus mana into fodder. Most directly, at avg MV 1.80 on 15 lands this deck floods less than any other build in the run - it is drawing action, not lands, and the 15 is the audit's own recommendation rather than a choice. |
| `screw` | mitigation | 21 of 25 nonland cards cost 2 or less and the goldfish check clears its threshold with a high turn-1 play rate. Colour screw is mild by construction: exactly ONE multi-pip card (Syr Vondam, Sunstar Exemplar at {W}{B}), and it is gold rather than double-in-one-colour, which is the easiest shape to support - 10 white sources and 8 black across 15 lands, one of which (Godless Shrine) can enter untapped for 2 life. Card selection is Honor x2 and the Zealot's surveil rather than a true cantrip suite, which is the accepted cost of spending the flexible slots on bodies. |
| `decapitation` | mitigation | Recursion is declared as 8 weighted copies across four different cards reading four different clauses, so no single answer shuts it off: Scout for Survivors x2 returns up to three creatures from the graveyard, Rayblade Trooper x2 replaces a counter-bearing creature with a token as it dies, Beamsaw Prospector x2 replaces itself with a Lander, and Dockworker Drone x2 move their counters onward. The assembly gate passes at p=0.83 on that redundancy. Losing Umbral Collar Zealot is the real cost - it is the only free sacrifice outlet - but the deck still functions on combat deaths alone, which an attacking deck generates every turn. |
| `gas-out` | mitigation | Corrected at Phase 9, where this entry was the one UNSATISFIED failure mode. The list now has actual card draw: Honor x2 ('Put a +1/+1 counter on target creature. Draw a card') at one mana, where before there were 0 of 25 unconditional draws and the entry tried to accept that as a plan cost. On top of that, cards that produce more permanents than they cost, recounted exactly: Scout for Survivors x2 (one card into one to three bodies), Rayblade Trooper x2 (a token per counter-bearing nontoken death), Beamsaw Prospector x2 (a Lander per death) = 6, plus Starfighter Pilot x2 whose surveil converts draws into selection. An earlier draft claimed 9 and counted Dockworker Drone, which moves a counter and creates nothing - the assembly block already weights it 0.4 for exactly that reason. Against a genuinely long game this deck still runs out, which is why its thesis turn is 7. |
| `raced` | mitigation | This is the deck doing the racing: the curve is 9 cards at mana value 1, 12 at 2 and 4 at 3, with nothing above, on 15 lands. Focus Fire ('X is 2 plus the number of creatures and/or Spacecraft you control') is a 1-mana instant that wins the decisive combat step on a wide board. Two honest corrections to an earlier draft of this entry: Syr Vondam, Sunstar Exemplar has 'Vigilance, menace', NOT lifelink - the life comes from its death trigger ('put a +1/+1 counter on Syr Vondam and you gain 1 life'), which is a different and slower source. And the deck's own evasion is thin: of 18 creature copies exactly ONE has any evasion (Syr Vondam's menace), against a cube whose largest threat class is evasion at 56 cards / 22.49%. That gap is accepted rather than mitigated, because the fix - trading mana-value-1 and 2 bodies for mana-value-3 fliers such as Gravpack Monoist - would remove the cards Scout for Survivors is textually able to return. |
| `disruption-fizzle` | mitigation | The critical turn is a 3-mana Scout for Survivors, and it survives interaction unusually well: it is a sorcery whose value is already banked in the graveyard, so removal aimed at the board BEFORE it resolves makes Scout better rather than worse - every creature killed becomes another legal target. Opposing graveyard hate is the genuine threat at 31 of 249 cube cards (12.45%), and the answer is that most of this deck's recursion never touches the yard: Rayblade Trooper x2 and Beamsaw Prospector x2 and Dockworker Drone x2 all replace bodies from the BATTLEFIELD, and Syr Vondam, Sunstar Exemplar explicitly reads 'dies OR IS PUT INTO EXILE', so it keeps growing through exile-based hate. A graveyard wipe costs this deck its two Scouts; it does not cost it its board. [Sizing corrected: this 12.45% is threat_profile.graveyard_interaction, which counts every card that USES a graveyard, several of them this deck's own. The right key for OPPOSING hate is dossier.structural_census.graveyard_hate, which lists one card (Dauntless Scrapbot); a hand probe finds one more the census missed (Chrome Companion). Dedicated graveyard hate is roughly 2 of 249 nonland cards, so this threat is smaller than the figure implies - the error was in this deck's favour.] |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Sunset Saboteur | 'Whenever this creature attacks, put a +1/+1 counter on target creature AN OPPONENT CONTROLS.' A 4/1 menace 2-drop is exactly what this aggro shell wants, but the attack trigger permanently grows the blocker it is attacking into — the counter goes to THEM, and this deck attacks every turn. It is also a rare against a 5-slot budget. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 15 recommended  [PASS]
Avg CMC:     1.8   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.60 adj [MV 1.8 vs 2.5, 4 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  B  demand  42.3%  prod  53.3%  gap -11.0pp  [OK]
  W  demand  57.7%  prod  66.7%  gap  -9.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```

```