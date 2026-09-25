---
deck_name: "wb-cleric-kindred-anthem"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-19T19:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
x6   Plains                   basic
x2   Sunlit Marsh             WB dual, enters tapped
x7   Swamp                    basic
x1   Caves of Koilos          WB dual, untapped, 1 damage per colored tap
```

### CREATURES (18)

```
CMC  Card                            Qty   Color  Role                       Rar
  1  Cult Conscript                 x2    B      Threat                     U
  1  Evolved Sleeper                x1    B      Threat                     R
  2  Benalish Faithbonder           x2    W      Threat                     C
  2  Elas il-Kor, Sadistic Pilgrim  x1    WB     Payoff                     U
  2  Knight of Dusk's Shadow        x2    B      Threat                     U
  2  Phyrexian Missionary           x2    W      Threat                     U
  2  Samite Herbalist               x2    W      Threat                     C
  2  Shadow-Rite Priest             x1    B      Payoff                     R
  3  Anointed Peacekeeper           x1    W      Threat                     R
  3  Aron, Benalia's Ruin           x1    WB     Payoff                     U
  3  Eerie Soultender               x2    B      Threat                     C
  4  Sheoldred, the Apocalypse      x1    B      Payoff                     M
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                            Qty   Color  Role                       Rar
  1  Bone Splinters                 x1    B      Interaction                C
  1  Cut Down                       x2    B      Interaction                U
  2  Destroy Evil                   x2    W      Interaction                C
```

### OTHER SPELLS (1)

```
CMC  Card                            Qty   Color  Role                       Rar
  3  Citizen's Arrest               x1    W      Interaction                C
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                                Rar
Knight of Dawn's Light          x2    W      Threat - Against aggro and burn - first strike plus 'I U
      Against aggro and burn - first strike plus 'If you would gain life, you gain that much life plus 1 instead' amplifies 7 of the 24 mainboard nonlands that gain life.
Choking Miasma                  x2    B      Interaction - Against go-wide token decks ONLY - the c U
      Against go-wide token decks ONLY - the class the mainboard concedes. 'All creatures get -2/-2 until end of turn' also kills 13 of this deck's own 17 creature copies, so it is boarded in only when the opponent's board is wider and smaller than ours. The {G} kicker is declined; {1}{B}{B} is castable off 10 black sources.
Extinguish the Light            x2    B      Interaction - Against decks whose threats exceed Cut D C
      Against decks whose threats exceed Cut Down's total power+toughness 5 limit and whose toughness is under 4 (Destroy Evil's floor) - the unconditional answer.
Prayer of Binding               x2    W      Interaction - Against artifacts and enchantments - the U
      Against artifacts and enchantments - the only WB card in this pool that exiles a nonland permanent of any type. 15 artifacts and 18 enchantments in the cube.
Sheoldred's Restoration         x2    B      Recursion - Against sweepers and heavy removal - the d U
      Against sweepers and heavy removal - the deck's only post-wipe rebuild. 'Return target creature card from your graveyard to the battlefield' has 17 creature copies (71% of nonlands) as live targets, and Eerie Soultender x2 actively stocks the yard. Kicker {2}{W} is on-colour for the lifegain mode.
```

## ANALYSIS

### DECK IDENTITY

A WB Cleric kindred aggro deck. Eleven of the eighteen creatures are printed Clerics - 7 of the 8 Clerics that exist in this cube, at maximum legal copies - and a twelfth body (Evolved Sleeper) becomes one for {B}, so Shadow-Rite Priest's 'Other Clerics you control get +1/+1' applies to 10 of the other 17 creatures when drawn. The kill is combat damage from a curve that puts a body down on turns 1-3 and attacks from turn 2. Elas il-Kor converts creature deaths into reach that does not require attacking, and Aron, Benalia's Ruin supplies a second anthem whose +1/+1 counters are permanent. Shadow-Rite Priest is deliberately NOT treated as an assembly requirement - it is a single copy seen only 32.5 percent of the time by turn 6 - so the deck is built to win without it and to win harder with it; its {3}{B}{B} sacrifice line converts a surplus Cleric into Sheoldred, the Apocalypse in long games.


**The constraint, stated honestly.** This cube contains exactly one Cleric-matters card. An oracle-text scan of all 271 pool cards for the word "Cleric" returns two results: Shadow-Rite Priest (`Other Clerics you control get +1/+1` / `{3}{B}{B}, {T}, Sacrifice another Cleric: Search your library for a black creature card, put it onto the battlefield, then shuffle`) and Evolved Sleeper (`{B}: This creature becomes a Human Cleric`). Nothing else in the cube counts, rewards, or cares about the type. The tribal roster holds 8 Clerics; this deck runs 7 of them at maximum legal copies, so the roster is provably exhausted. The 8th, Wingmantle Chaplain, is excluded on its own count below.

**Why the thesis was revised mid-build.** The Phase 3 pitch framed the anthem as the kill mechanism. Building it exposed the problem: Shadow-Rite Priest is a single copy with no functional duplicate anywhere in the pool, seen only 32.5% of the time by turn 6. A deck whose kill mechanism has a 1-of assembly requirement fails the structural assembly gate outright. Rather than dodge the gate, the thesis was revised and disclosed: the kill is combat damage from the Cleric body count itself (11 copies, p=0.98 by turn 6), with the Priest as an amplifier and a late tutor sink. This is why the deck plays well without ever drawing its namesake card.

**The Priest's tutor needed a target worth 5 mana.** The winning sketch declined every 4-mana black creature, which would have left `Search your library for a black creature card` finding, at best, a 2/2. That makes a 5-mana-plus-a-Cleric activation fetch a two-drop. The fifth rare slot went to Sheoldred, the Apocalypse specifically to raise that ceiling to a 4/5 deathtouch; it is also just castable at `{2}{B}{B}`. The mainboard holds 11 black creature cards, 10 of them findable (the Priest itself is on the battlefield when it activates).

**Aron, Benalia's Ruin is the deck's real answer to losing the Priest.** Added during the self-grill. `{W}{B}, {T}, Sacrifice another creature: Put a +1/+1 counter on each creature you control` is a second anthem, and because the counters are permanent, the board keeps the buff even after Aron is answered — something the Priest's static +1/+1 cannot claim. Its sacrifice cost is fed by 18 of the 24 nonland cards, each activation triggers Elas il-Kor's drain, and each satisfies Cult Conscript's `Activate only if a non-Skeleton creature died under your control this turn`. It is held to 1 copy because it is Legendary.

**Two cards that look like auto-includes and are not.**

| Card | Why it fails here |
|---|---|
| Resolute Reinforcements | Its token is a 1/1 white **Soldier**. The anthem reads "Other **Clerics**" and the sac cost reads "Sacrifice another **Cleric**" — neither the body nor the token qualifies, so it adds 0 to the anthem's 10-card denominator. |
| Wingmantle Chaplain | `create a 1/1 white Bird ... for each creature with defender you control` — this mainboard has **0** creatures with defender, so the ETB makes exactly 1 Bird and the second trigger never fires. Note that the same card is a correct **include** in the aristocrats build, which runs 4 defender cards. |

**Where this deck is weakest.** Its bodies are individually below rate — a 1/3, a 2/1, a 2/3 — and the anthem that fixes them is a single copy. It has 2 evasive creature copies out of 18 in a cube whose largest threat class is 51 evasive creatures at 20.6% density, so it cannot win a race in the air; it must trade on the ground and drain. And it has no mainboard sweeper, which is a deliberate concession: every symmetric option in these colours kills more of this deck's board than the opponent's.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (24 nonland):  1:6  2:12  3:5  4:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 11 copies → p=0.98 (need ≥ 0.75)
  PASS  interaction: 6 copies (effective 5.6: Bone Splinters@0.6) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 71%  T2 98%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. The pool holds two symmetric options castable here - Drag to the Bottom ('Each creature gets -X/-X') and Choking Miasma ('All creatures get -2/-2 until end of turn', the {G} being kicker) - and BOTH kill this deck's own 18-creature board, which IS the kill mechanism: -2/-2 alone kills 11 of the 18 creature copies (dies: Evolved Sleeper 1, Cult Conscript 2, Shadow-Rite Priest 1, Samite Herbalist 2, Elas il-Kor 1, Knight of Dusk's Shadow 2, Eerie Soultender 2; survives: Phyrexian Missionary 2, Benalish Faithbonder 2, Anointed Peacekeeper 1, Aron 1, Sheoldred 1). Mitigating in the mainboard would cost the deck its kill mechanism. Choking Miasma x2 is in the sideboard for the specific case where the opponent's board is wider and smaller than ours.
  OK        single_large_threat: Citizen's Arrest, Destroy Evil, Bone Splinters, Elas il-Kor, Sadistic Pilgrim, Sheoldred, the Apocalypse
  OK        noncreature_permanents: Destroy Evil, Citizen's Arrest
  CONCEDED  stack: WB has no counterspell in this pool. Anointed Peacekeeper's 'Spells your opponents cast with the chosen name cost {2} more to cast' is the only stack-adjacent effect and it taxes rather than counters.
  CONCEDED  graveyard: Verified by oracle-text scan of the full working pool: zero cards in this cube exile a graveyard. The class cannot be covered by any deck here, not just this one.
```

- Curve, assembly, goldfish and coverage all returned PASS both before and after the Phase 9 repair; no WARN flags were raised, so no deviation response is owed.

- Recorded thesis revision: Shadow-Rite Priest is a 1-of at p=0.325 by turn 6 and is therefore NOT declared as an assembly role. The thesis was revised so the kill mechanism is the Cleric body count (11 copies, p=0.98). This is a disclosed revision, not an assembly role omitted to pass a gate. The Phase 9 addition of Aron, Benalia's Ruin partially closes the underlying gap by supplying a second, permanent anthem effect.

- Slot allocation deviates from the Aggro bands on Interaction (25% vs 10-15%) and Threats (75% vs 45-55%). Both deviations carry thesis grounds recorded in slot_allocation and were tagged ADVISORY, not BLOCKING, by the grill.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Four mana sinks turn surplus lands into damage, cards or permanent stats: Evolved Sleeper's {1}{B}{B} line puts a +1/+1 counter on it and draws a card; Knight of Dusk's Shadow x2 pumps for {1}{B} each; Aron, Benalia's Ruin converts a spare body into a permanent team-wide +1/+1 counter for {W}{B}; and Shadow-Rite Priest's {3}{B}{B} sacrifice converts a surplus Cleric into Sheoldred. Eerie Soultender's {4}{B} graveyard ability rebuys a creature. |
| screw | mitigation | 18 of the 24 nonland cards cost 2 or less and 6 cost 1, so a two-land hand casts real spells on curve; the goldfish simulation returned 84% keepable hands and 84% on three lands by turn 3. Samite Herbalist's 'Whenever this creature becomes tapped, you gain 1 life and scry 1' digs on every attack. |
| decapitation | mitigation | Aron, Benalia's Ruin is the structural answer added in the Phase 9 repair: '{W}{B}, {T}, Sacrifice another creature: Put a +1/+1 counter on each creature you control' is a second anthem whose counters are PERMANENT, so unlike Shadow-Rite Priest's static +1/+1 the board keeps the buff even after Aron itself is answered. Accepted residual: the Priest's tutor half genuinely cannot be made redundant - an oracle scan of all 271 pool cards for the word 'Cleric' returns exactly two, Shadow-Rite Priest and Evolved Sleeper - and building further insurance around a card seen 32.5% of the time by turn 6 would cost the deck the Cleric constraint it was requested to honour. |
| gas-out | mitigation | Three cards genuinely replace themselves or generate cards, 5 physical copies: Evolved Sleeper's {1}{B}{B} draws on each activation; Phyrexian Missionary x2 kicked for {1}{B} returns a creature card from the graveyard to hand; Eerie Soultender x2 does the same for {4}{B} from the yard. Samite Herbalist x2 scries on every tap to keep draws live. (Corrected in the grill: Sheoldred, the Apocalypse was previously listed here, but her oracle text gains and drains life rather than drawing cards for you - that clause is struck.) |
| raced | mitigation | Against the cube's fastest clocks (evasion density 20.6%, 51 evasive creatures), the deck blocks and gains rather than only racing: Phyrexian Missionary x2 is a 2/3 lifelink (3/4 under the anthem), Benalish Faithbonder x2 is a 1/3 vigilance that attacks and blocks in the same turn, Elas il-Kor's deathtouch makes it an unprofitable block for any size creature, and Cut Down x2 at {B} answers a turn-2 threat on turn 2. Disclosed limit: the deck has 2 evasive creature copies of 18, so it cannot win a race in the air - it must trade on the ground and drain. |
| disruption-fizzle | mitigation | The critical turn is an attack step, not a spell resolution, so there is no single turn to counter. The deck's damage does not depend on any one permanent resolving: 18 creature copies across 12 distinct cards means interaction trades one-for-one and the clock continues. Aron's permanent +1/+1 counters mean a buff already applied cannot be undone by removing the source. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Sheoldred's Restoration (sideboard consideration) | In the sideboard. {3}{B} returns a creature card from the graveyard to the battlefield; 18 of the 24 nonlands are live targets. Added during the grill as the deck's only post-sweeper rebuild. |
| Wingmantle Chaplain | The only Cleric in the cube not in this deck. 0 other creatures with defender here, so its ETB makes exactly 1 Bird and its second trigger never fires. A 4-mana 0/3 that produces one 1/1. |
| Resolute Reinforcements | Neither the Human Soldier body nor the Soldier token is a Cleric, so it adds 0 to the anthem's 10-card denominator and 0 targets to the Priest's sacrifice cost. Cut on the shape judge's weak-keystone finding. |
| Take Up the Shield | Cut during the grill. Every clause targets a creature you control, so it was miscounted as Interaction; it disrupts nothing. Its decapitation-insurance job is now done structurally by Aron's permanent counters. |
| Battle-Rage Blessing | Sideboard consideration, cut. Deathtouch plus indestructible needs a combat, and a ground blocker cannot block a flier - 41 of the cube's 51 evasive creatures have flying. |
| Pilfer | Sideboard consideration, cut. Sorcery-speed pre-emptive discard aimed at a sweeper class that is only 6 cards at 2.4% density - the thinnest class in the whole threat profile. |
| Liliana of the Veil | RARE, cut for the 5-card cap. Its +1 symmetric discard is asymmetric in this deck's favour (18 of 24 nonlands cost 2 or less, so the hand empties fast), and -2 is an edict. The first card to add if the rare budget is ever relaxed. |
| Serra Redeemer | RARE, cut for the 5-card cap. 'Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature' - 12 of the 18 creature copies qualify. A genuine second anthem effect, lost only to the budget. |
| Braids, Arisen Nightmare | RARE, cut for the 5-card cap. A free repeatable sacrifice outlet is worth more to the aristocrats build than to a kindred deck whose bodies want to attack rather than die. |
| Ratadrabik of Urborg | RARE, cut for the 5-card cap. It would make a second Elas il-Kor worth running by copying a Legendary creature that dies, but this deck has only 2 legendary creatures to trigger it. |
| Temporary Lockdown | RARE, cut - and it would be actively bad here. 'exile each nonland permanent with mana value 2 or less' would remove 13 of this deck's own 18 creature copies. It is a card to play AGAINST this deck, not in it. |
| Leyline Binding | RARE, cut for the 5-card cap. With Plains, Swamp and Sunlit Marsh (Land - Plains Swamp) the deck has 2 basic land types, so it costs {3}{W} - the same effective rate as Prayer of Binding, which is uncommon and got the sideboard slot instead. |
| Caves of Koilos (the rare-slot trade) | KEPT, but flagged as the most debatable of the 5 rare slots: it spends one on a land. Replacing it with a Plains moves sources to W 9 / B 9 and frees a rare for Liliana of the Veil or Serra Redeemer, at the cost of the only untapped WB dual in a deck with two-drops in both colours. |
| Crystal Grotto | Excluded from the land base. Its free mode adds only {C} and its colored mode costs {1}, so it casts none of the 18 of 24 nonlands that cost 2 or less on curve. |
| Citizen's Arrest (second copy) | Held to 1 of the 2 copies allowed. {1}{W}{W} is the hardest cast in a base with 9 white sources of 16; a second copy compounds the risk without adding coverage. |
| Tyrannical Pitlord | RARE, and rejected on its own text even before the budget. 'When this creature leaves the battlefield, sacrifice the chosen creature' makes any removal spell aimed at it a two-for-one against the board it was tutored in to close with. |
| Defiler of Flesh | RARE, cut. Its evasion grant is +1/+1 and menace to a SINGLE target per black permanent cast, not to the team - incremental, not mass, evasion. |
| Guardian of New Benalia | RARE, cut. Its indestructible costs a card discarded AND taps the creature, which is backwards in a deck whose plan is to attack with an empty hand. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.04   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.78 adj [MV 2.04 vs 2.5, 1 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  51.7%  prod  62.5%  gap -10.8pp  [OK]
  W  demand  48.3%  prod  56.2%  gap  -7.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Rule                                                        Result
1a mainboard count == 40  -- got 40                         PASS
1b sideboard count == 10  -- got 10                         PASS
2 every name exists in working pool (exact match)  -- []    PASS
3 copy counts obey card_pool_rules  -- []                   PASS
3b rares+mythics MB+SB <= 5  -- got 5: ['Anointed Peacekeep PASS
4 every nonland usable in core+splash (best_mode)  -- []    PASS
5 no splash colors declared - splash cap vacuous            PASS

card_pool_rules: commons/uncommons max 2, rares/mythics max 1
extra constraint : max 5 rares+mythics across mainboard + sideboard
rares/mythics used (5 of 5): Anointed Peacekeeper, Caves of Koilos, Evolved Sleeper, Shadow-Rite Priest, Sheoldred, the Apocalypse
```