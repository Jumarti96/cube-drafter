---
deck_name: "b-station-rush"
cube_id: "eoe"
cube_slug: "eoe"
colors: "B"
format: "40-card"
built_at: "2026-08-05T03:25:58Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  18x Swamp                    Basic land, taps for {B}
```

### CREATURES (10)

```
CMC  Card                        Qty   Color  Role                            Rar
  1  Monoist Sentry             x2    B      Enabler/Fodder                  U
  2  Sunset Saboteur            x1    B      Enabler/Fodder                  R
  2  Virus Beetle               x2    B      Interaction/Disruption          C
  4  Elegy Acolyte              x1    B      Enabler/Fodder                  R
  5  Voidforged Titan           x1    B      Enabler/Fodder                  U
  6  Anticausal Vestige         x1    C      Enabler/Fodder                  R
  9  Bygone Colossus            x2    C      Enabler/Fodder                  U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                        Qty   Color  Role                            Rar
  2  Depressurize               x2    B      Interaction/Disruption          C
  3  Scrounge for Eternity      x1    B      Payload/Payoff                  U
  3  Temporal Intervention      x2    B      Interaction/Disruption          C
  4  Gravkill                   x1    B      Interaction/Disruption          C
```

### OTHER SPELLS (6)

```
CMC  Card                        Qty   Color  Role                            Rar
  2  Wurmwall Sweeper           x1    C      Payload/Payoff                  C
  3  Fell Gravship              x2    B      Payload/Payoff                  U
  4  Entropic Battlecruiser     x1    B      Payload/Payoff                  R
  5  Susurian Dirgecraft        x2    B      Payload/Payoff                  U
```

## SIDEBOARD (10)

```
Card                        Qty   Color  Role / When to board in                                       Rar
Embrace Oblivion           x2    B      vs decks with a Spacecraft top-end                            C
Thaumaton Torpedo          x2    C      vs enchantments (16 cube cards) and the 52 non-Spacecraft ar  C
Chrome Companion           x1    C      vs fast clocks and recursion                                  C
Dauntless Scrapbot         x2    C      vs any deck using its graveyard (31 cube cards / 12           U
Faller's Faithful          x1    B      vs creature decks                                             U
Tezzeret, Cruel Captain    x1    C      vs attrition decks past turn 8                                M
Gravkill                   x1    B      second copy vs decks whose plan is one big creature or Space  C
```

## ANALYSIS

### DECK IDENTITY

Mono-black Station midrange built around Entropic Battlecruiser. The deck deploys unusually mana-efficient charge-counter batteries — Monoist Sentry is a 4-power Defender for {B} whose only job is to be tapped, Sunset Saboteur is another 4 power for {1}{B}, and Bygone Colossus warps in for {3} as a 9-power one-shot battery — to push the Battlecruiser past its 8+ threshold. At 8+ it is a 3/10 flying deathtouch attacker whose attack trigger forces a discard, which its own 1+ ability converts into 3 life loss: 6 damage per swing from a single permanent. Virus Beetle and Temporal Intervention supply four more discard triggers worth 3 life each while it is still at 1+, and Sunset Saboteur's Ward adds a fifth that costs no card. Because the payoff is capped at one copy, the same battery package also crosses the thresholds of Susurian Dirgecraft (7+), Fell Gravship (8+) and Wurmwall Sweeper (4+), and Scrounge for Eternity returns the Battlecruiser from the graveyard to the battlefield if it is answered.

### THE ORACLE-TEXT CORRECTION THAT DEFINES THIS DECK

The archetype brief that seeded this build described Entropic Battlecruiser as "a single-card anchor, not a shell," on the reasoning that only two cards in the cube force a discard. That reading stops at the `1+` line. The full text is:

- `1+ | Whenever an opponent discards a card, they lose 3 life.`
- `8+ | Flying, deathtouch` — **and** `Whenever this Spacecraft attacks, each opponent discards a card. Each opponent who can't loses 3 life.`

At eight charge counters the card **manufactures its own discards**. Each attack forces a discard, the `1+` clause converts that discard into 3 life loss, and a 3/10 flying deathtouch body connects for 3 more. That is 6 damage per turn from one permanent, repeatable, with an empty hand and no other discard outlet in the deck. The "only two discard cards exist" objection dissolves — the payoff is its own engine.

What the deck actually needs, therefore, is not discard density. It is **eight points of creature power to tap**.

### THE BATTERY MATH

Station reads `Tap another creature you control: Put charge counters equal to its power on this Spacecraft. Station only as a sorcery.` Three properties of that text are load-bearing and none of them is obvious:

1. **The cost taps *another* creature.** It is not a `{T}` symbol in that creature's own cost, so **summoning sickness does not apply** — a creature can be tapped for Station the turn it arrives.
2. **There is no once-per-turn limit.** Multiple creatures can be tapped in the same main phase.
3. **Counters are permanent.** Nothing in the cube removes them, and killing the battery after the ability has resolved does not undo a paid cost.

Against those rules, black's rates are absurd:

| Battery | Cost | Power → counters | Power per mana |
|---|---|---|---|
| Monoist Sentry | `{B}` | 4 | **4.0** |
| Sunset Saboteur | `{1}{B}` | 4 | 2.0 |
| Bygone Colossus | Warp `{3}` | **9** — clears 8+ alone | 3.0 |
| Anticausal Vestige | Warp `{4}` | 7 | 1.75 |
| Elegy Acolyte | `{2}{B}{B}` | 4 | 1.0 |
| Voidforged Titan | `{4}{B}` | 5 | 1.0 |

Monoist Sentry is a `Defender`, which in any other deck is a drawback. Here it is free: a Defender can never attack, and this card's entire job is to be tapped. Two of them cost `{B}{B}` total and bank exactly the eight counters required.

**The fastest line is turn 5.** T4 Entropic Battlecruiser. T5 warp Bygone Colossus for `{3}`, tap it for 9 counters, and attack — the Battlecruiser has been under your control since T4, so it is not summoning sick when it becomes a creature.

### WHY SUNSET SABOTEUR WAS WRONG TO CUT

This card was excluded in the first sweep on the grounds that its trigger grows the opponent's board. The grill caught the error and it is worth recording. The clause is `Whenever this creature **attacks**, put a +1/+1 counter on target creature an opponent controls.` A Station battery is tapped during your main phase and **never attacks**, so the drawback never fires. Meanwhile `Ward—Discard a card` forces an opponent discard every time they target it — a fifth discard trigger, worth 3 life off the Battlecruiser, that costs no card.

### THE SINGLETON PROBLEM, AND WHAT IT COST

The payoff is a rare, capped at one copy. One card in forty is seen ~35% of the time by turn 7. No weighting scheme fixes that; the first structural gate correctly reported payoff assembly at **p=0.44**.

The honest resolution was to admit that the deck's *functional* payoff role is broader than one card name: **any Spacecraft that crosses its Station threshold and attacks in the air**. The same batteries clear Susurian Dirgecraft (7+, 4/3 flier with an edict ETB), Fell Gravship (8+, flying lifelink) and Wurmwall Sweeper (4+, off a single Sentry tap). Weighted by clock ratio against the true payoff's 6 damage per swing, that lifts assembly to **p=0.77 — but only at turn 8, not turn 7.** The thesis turn was revised accordingly rather than the weights inflated.

Scrounge for Eternity is the other half of the answer: `Return target creature or Spacecraft card with mana value 5 or less from your graveyard to the battlefield.` The Battlecruiser is mana value 4, so this redeploys it into play, where Fell Gravship only returns it to hand for a further `{3}{B}`.

### WHY A SUB-THRESHOLD SPACECRAFT IS HARD TO KILL — AND WHERE THAT CLAIM BREAKS

Below 8 counters the Battlecruiser's type line is `Artifact — Spacecraft`. It is **not a creature**, so it is invisible to creature removal and to four of the cube's five sweepers during its entire setup.

That is a genuine structural advantage, but an earlier draft of this analysis overstated it as immunity, and this deck's own Gravkill (`Exile target creature or Spacecraft`) disproves that. Eleven cards in the 276-card pool do answer a sub-threshold Spacecraft: Beyond the Quiet (`Exile all creatures and Spacecraft`), Gravkill, Embrace Oblivion, Emergency Eject, Banishing Light, Radiant Strike, Drill Too Deep, Seedship Impact, Shattered Wings, Thaumaton Torpedo and Extinguisher Battleship. The deck's protection against those is redundancy and recursion, not invulnerability.

### PLAY PATTERN NOTES

- **Do not station greedily.** Counters are permanent, so there is no urgency to reach 8 before you can profitably attack. Holding a Monoist Sentry untapped as a 4/1 blocker for one extra turn is often correct against an aggressive start.
- **Wurmwall Sweeper's surveil 2 is a tutor in disguise.** Binning the Battlecruiser deliberately arms Scrounge for Eternity, which puts it directly onto the battlefield.
- **Temporal Intervention is the deck's only stack interaction.** Black has no counterspell in this cube. Against a known removal spell, strip it pre-emptively rather than saving the card for value — you choose the card, not at random.
- **Warp timing.** Bygone Colossus exiles at the beginning of the next end step. Warp it in your first main phase, station, then attack; the counters stay after the body leaves.

### WHY THE MV 6+ CURVE WARNING IS ACCEPTED

The structural gate flags `MV 6+ share: 14% above band maximum 10%`. The three offending cards are Anticausal Vestige (printed `{6}`) and Bygone Colossus x2 (printed `{9}`) — and **none of the three is ever cast at its printed cost in this deck.** They are cast for Warp `{4}` and Warp `{3}` respectively, which is the only reason they are in the list at all. Measured at the costs actually paid, the deck's MV 6+ share is 0%. The same distortion is why the land count is built to 18 rather than the recommended 19: at real cast costs the average mana value is 3.09, whose land target is exactly 18.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Midrange):  [WARN]
  MV distribution (22 nonland):  1:2  2:6  3:5  4:3  5:3  6:1  9:2
  WARN  MV 6+ share: share 14% above band maximum 10%
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 3.7: Susurian Dirgecraft@0.7, Susurian Dirgecraft@0.7, Fell Gravship@0.35, Fell Gravship@0.35, Wurmwall Sweeper@0.3, Scrounge for Eternity@0.3) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 8.3: Elegy Acolyte@0.8, Virus Beetle@0.25, Virus Beetle@0.25) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 36%  T2 90%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Zero Point Ballad ({X}{B}, 'Destroy all creatures with toughness X or less. You lose X life.') is black's only sweeper here, and it is genuinely asymmetric in this deck's favour — every Spacecraft below its threshold is a noncreature artifact and survives at any X, as do Bygone Colossus (9/9), Anticausal Vestige (7/5) and Voidforged Titan (5/4). It is still excluded, on a stated cost: at X=2 it kills Monoist Sentry x2, Sunset Saboteur and Virus Beetle x2 — five of the deck's eight batteries — and it would consume a fifth of the six-card rare/mythic budget for an effect the deck's own 3/10 flying deathtouch blocker already partly provides.
  OK        single_large_threat: Gravkill, Depressurize, Susurian Dirgecraft, Entropic Battlecruiser
  CONCEDED  noncreature_permanents: The mainboard has no answer to a noncreature permanent that is not a Spacecraft. Gravkill reads 'Exile target creature or Spacecraft', which reaches only 22 of the cube's 74 artifacts and none of its 16 enchantments. Mono-black in this pool offers exactly one card that covers the class — Thaumaton Torpedo ('Destroy target nonland permanent') — and its {6} activation only discounts to {3} 'if you attacked with a Spacecraft this turn', i.e. from the threshold turn onward. Maindecking two dead-until-turn-6 artifacts to cover a class the deck can often race is the cost being declined; both copies are in the sideboard instead.
  CONCEDED  stack: Black has no counterspell in this cube. Temporal Intervention ('Target opponent reveals their hand. You choose a nonland card from it. That player discards that card.') strips the answer pre-emptively instead, choosing the card rather than at random. Adding real stack interaction would require abandoning mono-black, and the fixing census reports 0 untapped-capable duals for every colour pair.
  CONCEDED  graveyard: This deck uses its OWN graveyard as the rebuy for its singleton payoff — Scrounge for Eternity returns it to the battlefield and Fell Gravship to hand — so symmetric graveyard hate would cost the deck its decapitation insurance. Answered one-sidedly from the sideboard instead: Dauntless Scrapbot x2 ('exile each opponent's graveyard') and Chrome Companion.
```

- curve (Midrange): WARN — 'MV 6+ share: 14% above band maximum 10%'. Accepted, not repaired. The 3 offending cards are Anticausal Vestige (printed {6}) and Bygone Colossus x2 (printed {9}), and none of the three is ever cast at its printed cost in this deck: they are cast for Warp {4} and Warp {3} respectively, which is the only reason they are in the list. Measured at the costs actually paid, the deck's MV 6+ share is 0%. The band is reading printed mana value on three cards that have a second, cheaper cast mode printed on them.

- assembly: PASS at thesis turn 8 (payoff p=0.77, enabler p=0.97). Reached by two changes the grill forced, not by weight inflation: real redundancy was added (Scrounge for Eternity), the inflated weights were LOWERED (Fell Gravship 0.5 to 0.35 after removing the circular rebuy justification, Wurmwall Sweeper 0.35 to 0.3), and the thesis turn was revised 7 to 8. Weights are now derived from clock ratio against the payoff's 6 damage per swing.

- goldfish: PASS, no flag (87% keepable vs 80% required).

- coverage: PASS with four written concessions, one of which (noncreature_permanents) was upgraded from a false OK during the grill.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Station has no mana cost, so a flooded board still converts: every untapped creature taps for counters each turn regardless of lands in hand. Wurmwall Sweeper's 'surveil 2', Fell Gravship's 'mill three cards, then return a creature or Spacecraft card from your graveyard to your hand', Voidforged Titan's and Elegy Acolyte's Void clauses, and Elegy Acolyte's 'you draw a card and lose 1 life' on combat damage all turn excess draws into selection or cards. Anticausal Vestige explicitly scales with flood: 'put a permanent card with mana value less than or equal to the number of lands you control from your hand onto the battlefield tapped' — at 4 lands that free-drops the mana-value-4 Entropic Battlecruiser. |
| screw | mitigation | The goldfish check reports 87% keepable hands and 92% for 3 lands by turn 3. Two-land hands function: Monoist Sentry ({B}), Virus Beetle ({1}{B}), Sunset Saboteur ({1}{B}), Wurmwall Sweeper ({2}) and Depressurize ({1}{B}) are all castable, and two Sentries deployed on two lands bank the full 8 counters the moment a Battlecruiser lands. 8 of 22 nonland cards cost 2 or less. |
| decapitation | mitigation | Corrected during the grill — the earlier claim that the Battlecruiser is 'invisible to every removal spell and every sweeper' was factually false, and this deck's own Gravkill ('Exile target creature or Spacecraft') disproves it. The accurate statement: a sub-threshold Spacecraft dodges the large majority of removal, because it is a noncreature artifact rather than a creature, but 11 of the 276 pool cards do answer it — Beyond the Quiet ('Exile all creatures and Spacecraft'), Gravkill, Embrace Oblivion, Emergency Eject, Banishing Light, Radiant Strike, Drill Too Deep, Seedship Impact, Shattered Wings, Thaumaton Torpedo and Extinguisher Battleship. Against those the deck has two real layers: (1) Scrounge for Eternity returns the mana-value-4 payoff from the graveyard to the BATTLEFIELD, and Fell Gravship x2 returns it to hand; (2) the payoff role is redundant by design — Susurian Dirgecraft (7+), Fell Gravship (8+) and Wurmwall Sweeper (4+) cross their thresholds off the identical battery package, which is why payoff assembly scores p=0.77 rather than the 0.44 a true singleton gives. |
| gas-out | mitigation | 6 card-positive or self-replacing effects across 22 nonland cards: Voidforged Titan ('you draw a card and lose 1 life', Cards: Net-Positive), Elegy Acolyte (draws on every combat-damage turn AND makes 2/2 Robot tokens off Void), Fell Gravship x2 (Cards: Self-Replacing — mill 3 then return a card to hand), Anticausal Vestige ('When this creature leaves the battlefield, draw a card', which fires on its own warp exile so warping it is guaranteed to replace itself), and Wurmwall Sweeper's surveil 2. More importantly the win condition does not consume cards: once at 8+, the Battlecruiser deals 6 per turn from an empty hand. |
| raced | mitigation | Rewritten during the grill; the previous 'accepted' claimed mitigation would cost the counter supply, which Elegy Acolyte refutes. Elegy Acolyte is 4 power of Station battery AND 'Lifelink' AND a card-draw engine AND a Void 2/2-Robot generator in one card, so the deck now mitigates racing without giving up a single point of counter supply. Alongside it: Depressurize x2 at instant speed holds the ground during setup, Susurian Dirgecraft's ETB edicts away a threat, the Battlecruiser is a 3/10 blocker even below threshold, and Fell Gravship gains lifelink at 8+. From the sideboard, Chrome Companion's 'Whenever this creature becomes tapped, you gain 1 life' triggers off Station itself and Faller's Faithful destroys a creature on arrival. |
| disruption-fizzle | mitigation | The threshold turn is uniquely hard to interact with. Station is an activated ability of the Spacecraft whose cost is only a tap, so there is no spell to counter; the tapped creature is a COST, so killing the battery in response does not undo it; and 'Put charge counters equal to its power' is permanent, so removal after the fact cannot strip counters already placed. The one real answer is removing the Battlecruiser at instant speed on the turn it crosses 8 and becomes a creature — that is the decapitation line above, covered by Scrounge for Eternity's return-to-battlefield and by the three redundant threshold Spacecraft. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Hullcarver | A {B} 1/1 with 'Deathtouch' is a fine early blocker, but as a battery it is worth 1 counter against Sunset Saboteur's 4 at one more mana. Cut for Sunset Saboteur during the grill repair. |
| Vote Out | 'Convoke ... Destroy target creature.' Convoke taps the same creatures Station needs, and Station is sorcery-speed on your own turn — so a turn spent convoking is a turn of banked counters foregone. Replaced by Faller's Faithful in the sideboard. |
| Dawnsire, Sunstar Dreadnought | Mythic Spacecraft needing 10+ counters for its damage ability and 20+ to be a creature. This deck's battery suite is built to reach 8; 20 needs a separate build, and it competes for the 6-rare budget. |
| Extinguisher Battleship | {8} to cast. Its 5+ threshold is the easiest in the pool, but an 8-mana card is uncastable on this curve, which already warns at MV 6+. |
| Pinnacle Kill-Ship | {7} for a Spacecraft whose ETB is removal — the same castability problem at a lower ceiling. |
| The Eternity Elevator | '{T}: Add {C}{C}{C}' is real ramp, but colourless mana casts none of {3}{B}, {1}{B} or {2}{B} on curve; the deck's pip demand is 100% black. |
| Tezzeret, Cruel Captain | '0: Untap target artifact or creature' doubles Station output per turn cycle and is genuinely on-plan, but the deck's measured bottleneck is the payoff (assembly p=0.77) not the enablers (p=0.97), and its -3 fetches 'an artifact card with mana value 1 or less' — which cannot find the mana-value-4 payoff. Sideboarded instead. |
| Zero Point Ballad | 'Destroy all creatures with toughness X or less' is genuinely asymmetric in this deck's favour — every sub-threshold Spacecraft survives at any X. Still excluded: at X=2 it kills Monoist Sentry x2, Sunset Saboteur and Virus Beetle x2, five of the deck's eight battery cards, and it would take the last rare/mythic slot. |
| Tragic Trajectory | Its -10/-10 mode requires Void, live off only 3 warp cards of 22 nonland here; without Void it is a sorcery-speed -2/-2 for {B}. Depressurize is an instant that kills anything with power 3 or less unconditionally. |
| Sothera, the Supervoid | Requires a steady stream of your own creatures dying. This deck taps creatures rather than sacrificing them, so the trigger count against this list is near zero. |
| Alpharael, Stonechosen | The payoff of a different pipeline (Void Drain). Its Void attack trigger is a separate win condition, not support for the Station plan, and at {3}{B}{B} it competes with the Battlecruiser's own curve slot. |
| Monoist Circuit-Feeder | Its ETB scales with 'the number of artifacts you control'. This list runs 13 artifact cards of 22 nonland, but typically only 3-4 are on the battlefield when a 6-drop resolves — roughly +4/-4 for six mana on a curve that already warns at MV 6+. |
| Requiem Monolith | 'That creature's controller may have this artifact deal 1 damage to it' — the opponent chooses whether to take the damage, so the draw clause is entirely under their control. |
| Thrumming Hivepool | 'Affinity for Slivers' and 'Slivers you control have double strike' — this list runs 0 Slivers of 22 nonland cards, so it costs a flat {6} and the static ability is blank. |
| Virulent Silencer | Reaching 10 poison needs 5 connections from nontoken artifact creatures. The list's artifact creatures are Monoist Sentry (Defender, cannot attack), Virus Beetle (1/1), Voidforged Titan and Bygone Colossus (exiles the turn it warps in) — 2 of 22 nonland cards realistically connect repeatedly. |
| Hylderblade | '+3/+1' is +3 counters per Station activation, permanently, which is real. But 'Equip {4}' competes directly with deploying threats on the deck's tight turns, and the free-attach clause needs Void, live off only 3 warp cards of 22. |
| Dubious Delicacy | A sideboard-consideration card. Its removal mode is a one-shot -3/-3 for {2}{B}; Depressurize kills anything with power 3 or less for {1}{B} at instant speed, and the deck runs two. |
| Umbral Collar Zealot | 3 power for {1}{B} against Sunset Saboteur's 4 power at the same cost, and its sacrifice-for-surveil outlet wants a sacrifice deck this is not. |
| Susur Secundi, Void Altar | A Planet that reads 'This land enters tapped' and needs 12+ counters for its ability. Entering tapped costs a full turn of tempo in a deck that wants the Battlecruiser on T4, and 12 counters is above this deck's ceiling. |
| Secluded Starforge | '{T}: Add {C}' only — a colourless source in a deck with 100% black pip demand. Its {5} Robot-token ability is far outside the curve. |
| Command Bridge | 'This land enters tapped. When this land enters, sacrifice it unless you tap an untapped permanent you control.' Any-colour fixing is worthless in mono-B, and the tap cost can eat a Station battery's activation. |
| Perigee Beckoner | 4/5 with Warp {1}{B} — a cheaper warp battery than Bygone Colossus, but only 4 power, which does not clear 8 alone. |
| Timeline Culler | 'Warp—{B}, Pay 2 life' recastable from the graveyard is excellent Void fuel, but it is a 2/2 — 2 counters per Station, the worst rate of any battery in the pool. |
| Archenemy's Charm | {B}{B}{B} instant with a strong exile mode, but triple-black on turn 3 is a real constraint and Gravkill exiles the same targets — including Spacecraft, which the Charm cannot touch — for one more mana. |
| Faller's Faithful | 'destroy up to one other target creature. If that creature wasn't dealt damage this turn, its controller draws two cards' — hands the opponent two cards. Kept in the sideboard, where the tempo is worth the card, rather than maindeck. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 19 recommended  [PASS]
Avg CMC:     3.64   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.52 adj [MV 3.64 vs 2.5, 0 accel, scaled N/60]  ->  19 lands  (P(2-4 in 7) = 0.774)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard — every card verified present in the eoe working pool by exact name match
copy_limits: PASS — no common or uncommon exceeds 2 copies combined MB+SB (Gravkill 1 MB + 1 SB = 2, at the cap); no rare or mythic exceeds 1
rare_mythic_budget: PASS — 5 of 6 used: Entropic Battlecruiser (rare, MB), Sunset Saboteur (rare, MB), Anticausal Vestige (rare, MB), Elegy Acolyte (rare, MB), Tezzeret, Cruel Captain (mythic, SB)
colour_identity: PASS — all 21 distinct nonland cards usable in core_colors ['B'] via effective_cost.best_mode; every one returns mode 'cast' (normal cast), so there are no off-identity inclusions
basics: 18 Swamp — format-supplied, exempt from copy limits
deck_size: PASS — mainboard 40, sideboard 10
```
