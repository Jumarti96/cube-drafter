---
deck_name: "gub-station-fortress"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GUB"
format: "40-card"
built_at: "2026-08-06T02:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
5x Swamp                    Land — black source (52.4% of pips)
4x Island                   Land — blue source
3x Forest                   Land — green source; over-served on purpose for the accelerant package
2x Haunted Mire             Land — B/G dual, enters tapped; the only free B/G fixing in the cube
2x Tangled Islet            Land — G/U dual, enters tapped
1x Contaminated Aquifer     Land — U/B dual, enters tapped
1x Watery Grave             Land — U/B, untapped for 2 life; the 6th and last rare slot, spent on the only negative-gap colour
```

### CREATURES (9)
```
CMC  Card                    Qty  Color  Role                                                                                                                                                                                 Rar
  2  Seedship Broodtender    x1   BG     Fuel — MV2 2/3 (toughness>power); ETB mill 3; sacrifices to return a creature or Spacecraft from the graveyard to the BATTLEFIELD, charge-loss insurance                             U
  3  Cloudsculpt Technician  x2   U      Fuel — 1/4 flier, 2/4 with an artifact out and still toughness>power; earliest 4-toughness air blocker                                                                               C
  3  Nanoform Sentinel       x2   U      Accelerant — 'Whenever this creature becomes tapped, untap another target permanent': untaps the body that just stationed, so it blocks anyway, or frees it for a second activation  C
  4  Swarm Culler            x2   B      Fuel — 2/4 flier; the Station tap itself triggers its sacrifice-for-a-card                                                                                                           C
  4  Tapestry Warden         x2   G      Accelerant — stations by toughness rather than power, and assigns combat damage the same way; a 3/4 vigilance body that is itself fuel                                               U
```

### INSTANTS & SORCERIES (5)
```
CMC  Card               Qty  Color  Role                                                                                                                                     Rar
  1  Zero Point Ballad  x1   B      Interaction — sweeper; X=1 is free, X=2/X=3 also kills our own Nanoform Sentinel x2 (3/2), un-crossed Spacecraft are immune at any X     R
  2  Depressurize       x1   B      Interaction — -3/-0 then destroy if power <= 0; the 2-mana play on a two-land keep                                                       C
  4  Gravkill           x2   B      Interaction — exile target creature or Spacecraft; the only answer to an opposing charged Spacecraft                                     C
  4  Vote Out           x1   B      Interaction — unconditional 'Destroy target creature'; Convoke is optional, so it never has to compete with Station for untapped bodies  U
```

### OTHER SPELLS (8)
```
CMC  Card                    Qty  Color  Role                                                                                                                                                                  Rar
  1  Synthesizer Labship     x1   U      Payoff — {U} 4/4; its 2+ tier needs ONE tap and animates another artifact into a 2/2 flier each combat, which is itself Station fuel                                  R
  2  Wurmwall Sweeper        x2   C      Payoff — lowest becomes-a-creature threshold in the pool (4+); ETB surveil 2; colourless so it casts off two tapped duals                                             C
  3  Fell Gravship           x2   B      Payoff — becomes a 3/2 flying lifelink creature at 8+; ETB mill 3 then return a creature or Spacecraft card to hand                                                   U
  3  Sledge-Class Seedship   x1   G      Payoff — becomes a 4/5 flier at 7+; each attack deploys a creature from hand free                                                                                     R
  4  Entropic Battlecruiser  x1   B      Payoff — printed 3/10 but a NONCREATURE artifact until 8+, so it cannot block before then; at 8+ a flying deathtouch body, and under Warden one tap of it charges 10  R
  4  Loading Zone            x1   G      Accelerant — doubles every charge counter placed; Warp {G} for a one-shot double                                                                                      R
```

## SIDEBOARD (10)
```
Card                 Qty  Color  Role / When to board in                                                                                                                                                      Rar
Seedship Impact      x2   G      Instant-speed artifact/enchantment removal for turns the deck cannot tap out; Lander token off MV<=2 targets                                                                 U
Dauntless Scrapbot   x1   C      One-sided 'exile each opponent's graveyard' vs the 31 graveyard-interaction cards in this cube; does not turn off our own Fell Gravship                                      U
Dubious Delicacy     x2   B      Flash -3/-3 then a 3-life drain vs go-wide boards; being an artifact it is also the only genuinely expendable sacrifice fodder in the 50                                     U
Shattered Wings      x2   G      Artifact/enchantment/flier removal — 74 artifacts + 16 enchantments cube-wide; also answers a crossed-threshold Spacecraft two ways at once                                  C
Seedship Agrarian    x1   G      Board in vs grindy decks — 'Whenever this creature becomes tapped, create a Lander token' makes a free artifact per Station activation, feeding the sacrifice outlets        U
Tractor Beam         x1   U      Steals an opposing Spacecraft with its charge counters intact — the Station mirror and single-large-threat answer                                                            U
Susurian Dirgecraft  x1   B      Non-targeted answer — 'each opponent sacrifices a nontoken creature of their choice' beats ward/hexproof that all 5 maindeck interaction copies cannot touch; also a payoff  U
```

## ANALYSIS

### DECK IDENTITY

Golgari-blue Station Fortress. Cheap creatures whose toughness exceeds their power hold the ground while doubling as Station fuel, and Spacecraft cross their charge-counter thresholds to attack as evasive artifact creatures. Three accelerants make that happen on schedule rather than eventually: Tapestry Warden makes every fat-butt body station for its toughness instead of its power, Nanoform Sentinel untaps the body that just stationed so it either blocks anyway or charges twice, and Loading Zone doubles every counter placed. Synthesizer Labship's 2+ tier needs a single tap and animates a spare artifact into a flier each combat, giving the deck a clock from turn three instead of turn six.

### HOW THE KILL ACTUALLY ASSEMBLES

Station is the load-bearing text and it is worth reading closely: *"Tap another creature you control:
Put charge counters equal to its power on this Spacecraft. Station only as a sorcery. It's an artifact
creature at N+."* Three things follow that shape this whole deck.

**It costs no mana.** So from turn four onward the deck casts a spell *and* charges a Spacecraft in the
same turn. That is why an 18-land count is not a liability here: a surplus land never competes with the
plan for a turn.

**It is an ability, not a spell.** No counterspell in the cube can answer the critical turn, and because
it is sorcery-only the activation can be held until after an opponent has spent their instant.

**Charge counters persist.** Removal aimed at a fuel creature costs the *next* charge, never the previous
ones — which is why the deck can afford fuel bodies that die.

The activation math, by fuel body:

| Body | Un-Wardened charge | Under Tapestry Warden | With Loading Zone too |
|---|---|---|---|
| Cloudsculpt Technician 1/4 (2/4 with an artifact) | 2 | 4 | 8 |
| Swarm Culler 2/4 | 2 | 4 | 8 |
| Seedship Broodtender 2/3 | 2 | 3 | 6 |
| Nanoform Sentinel 3/2 | 3 | 3 (no gain — power exceeds toughness) | 6 |
| Tapestry Warden 3/4 | 3 | 4 | 8 |
| Entropic Battlecruiser 3/10 (once a creature at 8+) | 3 | 10 | 20 |

Thresholds in this list are 2+ (Synthesizer Labship), 4+ (Wurmwall Sweeper), 7+ (Sledge-Class Seedship)
and 8+ (Fell Gravship, Entropic Battlecruiser). So one Wardened tap of a 4-toughness body crosses 2+ and
4+; two crosses 7+ and 8+; one Wardened tap with Loading Zone out crosses everything except 8+ on the nose.

### THE TRAP THIS ARCHETYPE SETS, AND THE THREE CARDS THAT FALL INTO IT

Tapestry Warden's clauses fire only on creatures whose **toughness exceeds power**. That makes a whole
class of ordinary-looking upgrades actively harmful, and three cards in this cube read like archetype
staples while quietly switching the Warden off:

| Card | Text | Why it breaks the condition |
|---|---|---|
| Emissary Escort | "gets +X/+0, where X is the greatest mana value among other artifacts you control" | 8 of this deck's 11 artifact copies are at mana value 3–4, so the 0/4 becomes a 4/4 and toughness stops exceeding power |
| Genemorph Imago | landfall sets a creature to "base power and toughness 3/3" (or 6/6) | Setting base P/T to an *equal* value destroys the condition on whatever it "helps" |
| Gravblade Heavy | "As long as you control an artifact, this creature gets +1/+0 and has deathtouch" | A 3/4 becomes a 4/4 on almost every turn past two — unreliable fuel precisely because its buff is reliable |

Contrast Cloudsculpt Technician, which has the same shape of pump (`+1/+0`) but starts at 1/4, so it
becomes a 2/4 and stays eligible. The rule of thumb this deck is built on: **+1/+1 counters and
toughness-favouring buffs are safe; flat power pumps are not.**

### WHY THIS IS NOT THE PURE "ATTACK WITH BUTTS" DECK

The archetype's obvious reading is that Tapestry Warden's *first* clause is the payoff — fat bodies
attacking for their back number. The problem is a count: that clause exists on exactly **one card in all
271**, capped at 2 copies, so P(seeing one by turn four, ten cards deep) is about 43%. Building the kill
on it means the kill is absent in most games.

This deck is built on Warden's *second* clause instead. Station appears on 14 G/U/B-castable Spacecraft,
so the kill has redundancy the first clause cannot have — and Warden becomes a card that makes a working
plan roughly twice as fast rather than a card the plan cannot function without. The Phase 6b assembly
gate reflects that split: payoff 7 copies at p=0.93 and fuel 9 copies at p=0.97 both pass, and the
accelerant role passes separately at p=0.82.

### PLAY-PATTERN NOTES

- **Zero Point Ballad wants X=1.** At X=2 it kills your own Nanoform Sentinel ×2 (3/2), which are two of
  the five accelerant copies. Cast it at X=2 or X=3 only as a deliberate trade for survival. Un-crossed
  Spacecraft are noncreature artifacts and immune at any X.
- **Entropic Battlecruiser is not an early wall.** Its own text says *"It's an artifact creature at 8+"* —
  before that it cannot block at all. It is in the deck as the best charge battery in the pool (one
  Wardened tap places 10) and for its 1+ drain tier, not as a 3/10 blocker.
- **Nanoform Sentinel's untap is once per turn per copy**, so two copies buy at most two recovered
  blockers *or* two extra activations in a turn, not both.
- **Sledge-Class Seedship's attack trigger** puts a creature from hand onto the battlefield for free —
  that body is immediately available as Station fuel next turn, so a single crossed Seedship compounds.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:2  2:4  3:7  4:9
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 7 copies → p=0.93 (need ≥ 0.75)
  PASS  fuel: 9 copies → p=0.97 (need ≥ 0.75)
  PASS  accelerant: 5 copies (effective 4.6: Loading Zone@0.6) → p=0.82 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 33%  T2 79%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Zero Point Ballad, Cloudsculpt Technician, Swarm Culler
  OK        single_large_threat: Gravkill, Vote Out, Depressurize
  OK        noncreature_permanents: Gravkill
  CONCEDED  stack: No stack interaction anywhere in the 50, main or side. This deck taps out every turn from 2 onward to deploy a Spacecraft and then station it at sorcery speed, so mana held for a counter is mana the thesis turn needs - and that argument does not stop applying after sideboarding, which is why Annul x2 was cut from the sideboard rather than kept as a token gesture. The cost of mitigating is a slot that only functions on turns this deck deliberately does not have.
  CONCEDED  graveyard: No maindeck graveyard hate: the cube holds exactly one graveyard-hate card and this deck's own plan uses its graveyard (Fell Gravship returns a creature or Spacecraft from it). Dauntless Scrapbot is sideboarded for the 31 graveyard-interaction cards.
```

- All four structural checks now PASS, so no WARN response is owed. Recorded for continuity: the pre-repair report was WARN on goldfish (keepable 79% vs the 80% threshold). Adding Synthesizer Labship at {U} and Seedship Broodtender at {B}{G} lowered avg MV from 3.27 to 3.05 and filled the MV1-2 band, moving keepable to 84% and turn-2 play rate from 65% to 79% - without moving the land count, which remains exactly land_target's recommendation of 18.
- Curve note (MV 1:2 2:4 3:7 4:9): 9 of 22 nonland cards sit at mana value 4 and the check passes. The cluster is structural rather than lazy - Station is a mana-free ability, so from turn 4 onward the deck casts one 4-drop AND charges a Spacecraft in the same turn instead of needing a second spell's worth of mana.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Zero Point Ballad is an {X}{B} sorcery whose sweeper size scales with surplus mana, so the 8th and 9th land are still spells. Station costs no mana ('Tap another creature you control'), so a flooded turn casts a 4-drop AND charges a Spacecraft rather than choosing. Fell Gravship x2 ('mill three cards, then return a creature or Spacecraft card from your graveyard to your hand'), Wurmwall Sweeper x2 ('surveil 2') and Seedship Broodtender ('mill three cards') convert excess draws into selection. |
| screw | mitigation | Keepable two-land hands run on Synthesizer Labship at {U} - a 1-mana payoff whose 2+ tier needs a single tap - plus Wurmwall Sweeper x2 at {2} generic, colourless so it casts off two tapped duals, Depressurize at {1}{B}, and Zero Point Ballad castable at X=1. The five tapped duals plus Watery Grave each count as two colours, which is what holds a three-colour manabase together at 18 lands; the goldfish sim measures keepable at 84% and three lands by turn 3 at 92%. |
| decapitation | mitigation | No single key card: the kill spreads across 7 Spacecraft copies (p=0.93 by turn 7) and the accelerant role has 5 copies (p=0.82), so answering one of either leaves the other four. When a CHARGED Spacecraft is answered the counters are lost, and the specific insurance for that is Seedship Broodtender - '{3}{B}{G}, Sacrifice this creature: Return target creature or Spacecraft card from your graveyard to the battlefield' - which returns it to the battlefield rather than the hand; all 7 payoff copies are mana value 4 or less. Fell Gravship x2 rebuys to hand as the weaker backup. |
| gas-out | accepted | Unconditional card flow is 3 of 22 nonland cards (Fell Gravship x2 and Seedship Broodtender, all self-replacing rather than net-positive). Mitigating properly would mean maindecking Cerebral Download or Hymn of the Faller, and every slot for them comes out of either interaction (5 of 22 = 22.7%; cutting to 4 is 18.2%, under the 20% band) or the payoff count (7 of 22 = 31.8%; cutting to 6 is 27.3%, under the 30% band). The cost of mitigating is therefore breaking one of the two bands the structural gate checks, in a deck whose plan does not actually consume cards to advance: Station taps creatures already on the battlefield, so an empty hand still moves the kill forward every turn at zero card cost. Accepted, with Dubious Delicacy x2 and Seedship Agrarian sideboarded for grindy matchups where the extra fodder and Landers matter. |
| raced | mitigation | CORRECTED after the grill - the earlier claim of '8 four-toughness bodies from turn 2' was false, and Entropic Battlecruiser is not an early wall ('It's an artifact creature at 8+' means it cannot block before 8 counters). The accurate version: the first blocker is Seedship Broodtender at mana value 2 (2/3), followed at 3 by Cloudsculpt Technician x2 (1/4 or 2/4 fliers) and Nanoform Sentinel x2, then Swarm Culler x2 (2/4 fliers) at 4 - four of those seven copies fly, covering the cube's evasive threats. The block-or-station tension is answered mechanically rather than by assertion: Nanoform Sentinel x2 untap the body that just stationed, so it blocks on the opponent's turn anyway. Zero Point Ballad sweeps a fast board while our own un-crossed Spacecraft are noncreature artifacts and immune - but at X=2 or X=3 it also kills Nanoform Sentinel x2 (3/2), so against a real race it is cast at X=1 for free, and at X=2/X=3 only as a deliberate trade of 2 accelerant copies for survival. |
| disruption-fizzle | mitigation | The critical turn is a Station activation, and Station is an activated ability, not a spell - no counterspell in the cube answers it. Charge counters already placed persist through removal of the fuel creature, so removal aimed at a fuel body costs the next charge, never the previous ones. With 9 creature copies legal as fuel, one piece of interaction on the critical turn costs a charge rather than the plan; and because Station is sorcery-only the activation can be held until after the opponent has committed their instant. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Dawnsire, Sunstar Dreadnought | 20/20 Spacecraft whose creature threshold is 20+ charge counters. At this deck's realistic Station rate (one 4-to-10 charge per turn) that is turns of investment for a body; its 10+ tier ('Whenever you attack, deals 100 damage to up to one target creature') needs another attacker to already exist. Mythic, and one of only 6 rare/mythic slots. |
| Extinguisher Battleship | {8} for a 10/10 whose ETB 'deals 4 damage to each creature' kills this deck's own fuel bodies (18 of the 23 nonland cards in the built list are creatures or Spacecraft with toughness 4 or less at the time it would resolve). Uncastable curve and anti-synergistic. |
| The Eternity Elevator | {5} Spacecraft with a 20+ tier and no body; its '{T}: Add {C}{C}{C}' is real ramp but this deck's most expensive card is {5} and it has no colourless sink, so 3 colourless mana per turn buys nothing here. |
| Singularity Rupture | {3}{U}{B}{B} 'Destroy all creatures' — symmetric, and this deck's creature count (13) is higher than most decks it faces, so the sweeper is worse for us than for them. Zero Point Ballad does the asymmetric version for less. |
| Cosmogoyf | {B}{G} with power = 'the number of cards you own in exile' and toughness that plus 1. Toughness exceeds power by exactly 1 always, so it is Warden-legal, but the deck exiles cards only via Warp (4 cards in the list) and Gravkill — a 1/2 to 3/4 most games. Rare slot spent for a body the commons match. |
| Icetill Explorer | {2}{G}{G} 2/4 with extra land drops and lands from the graveyard. Genuinely toughness>power, but the deck runs 17 lands and no way to fill the graveyard with lands; the extra-land-drop text has nothing to draw on. Rare slot. |
| Genemorph Imago | {G}{U} 1/3 flier whose landfall sets a creature to base 3/3 or 6/6 — setting BASE power and toughness to an equal number DESTROYS toughness>power on the target, actively fighting Warden and Station-by-toughness. |
| Terrasymbiosis | {2}{G} draws when +1/+1 counters are placed, once per turn. Only 4 cards in this list place +1/+1 counters on creatures (Atmospheric Greenhouse, Selfcraft Mechan, Ouroboroid, Biosynthic Burst were candidates; 2 made the final list) — the trigger fires too rarely to spend a rare slot on. |
| Mightform Harmonizer | {2}{G}{G} 4/4 whose landfall 'double the power of target creature you control' — doubling POWER breaks toughness>power on the target, so it turns off both Warden clauses on whatever it pumps. |
| Ouroboroid (as a rare-slot competitor) | Included in the sketch slice, but as a mythic it competes directly with Sledge-Class Seedship and Entropic Battlecruiser for the 6-card rare/mythic budget; its counters are only relevant once it has survived a full turn cycle. |
| Gravblade Heavy | {3}{B} 3/4 that 'gets +1/+0 and has deathtouch' as long as you control an artifact. This deck controls an artifact on essentially every turn past 2 (10 of the 23 nonland cards are artifacts), so it is a 4/4 in practice — toughness NO LONGER exceeds power, making it unreliable Warden/Station fuel. Excluded for that specific reason. |
| Monoist Sentry | {B} 4/1 Defender — power exceeds toughness, so it is invisible to both Tapestry Warden clauses despite reading as a defensive card. |
| Mechan Shieldmate | {1}{U} 3/2 Defender — same reason: power exceeds toughness, and Defender does not help a deck that must eventually attack. |
| Watery Grave / Breeding Pool | The only untapped-capable duals for U/B and U/G, but both are rares. Each would consume one of the 6 rare/mythic slots that Spacecraft payoffs and Loading Zone need; the common tapped duals fill the same pairs at zero rare cost and this deck's curve tolerates tapped lands. |
| Virulent Silencer | {3} 2/3 giving two poison counters when a nontoken artifact creature connects. Reaching 10 poison needs 5 connections; the deck's nontoken artifact creature count that can attack is 4, so this is a second, slower win condition competing for slots with the primary one. |
| Weftwalking | {4}{U}{U} mythic refuelling seven cards and granting free first spells — powerful in the abstract but it empties the board investment this deck has already made (shuffling the graveyard away undoes Fell Gravship and Seedship Broodtender recursion) and costs a mythic slot. |
| Tractor Beam | {2}{U}{U} aura stealing a creature or Spacecraft — excellent against another Station deck, but it is a 4-mana do-nothing against decks with no permanent worth taking. Held as a sideboard consideration rather than a maindeck slot. |
| Annul | {U} 'Counter target artifact or enchantment spell' — 183 of the 271 cube cards are neither artifacts nor enchantments, so it is dead too often to maindeck. Sideboard consideration against artifact decks. |
| Unravel | {1}{U}{U} hard counter with a conditional draw. This deck taps out most turns to deploy Spacecraft and station, so holding up a counterspell fights its own curve. Sideboard consideration. |
| Dubious Delicacy | {2}{B} flash Food that gives -3/-3 and later drains 3. Fine card; a tier below the black removal already in the list (Gravkill exiles, Faller's Faithful trades and kills) at the same cost. Sideboard consideration. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.05   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.73 adj [MV 3.05 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  52.4%  prod  50.0%  gap  +2.4pp  [OK]
  G  demand  23.8%  prod  38.9%  gap -15.1pp  [OK]
  U  demand  23.8%  prod  44.4%  gap -20.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Base = cube mainboard only
        all 40 mainboard + 10 sideboard cards matched by exact name in the working pool; basics are format-supplied
[PASS] Commons/uncommons max 2 copies
        no common or uncommon exceeds 2 copies across mainboard + sideboard combined
[PASS] Rares/mythics max 1 copy
        Synthesizer Labship, Sledge-Class Seedship, Entropic Battlecruiser, Loading Zone, Zero Point Ballad, Watery Grave - 1 copy each
[PASS] Max 6 rares/mythics total (main + side)
        exactly 6 of 6 used, all in the mainboard; 0 in the sideboard
[PASS] Colour identity within G/U/B
        effective_cost.best_mode returned a usable non-None mode for every nonland card; no off-normal modes needed
[PASS] Basic lands unrestricted
        5 Swamp, 4 Island, 3 Forest - format-supplied, exempt from copy limits
```