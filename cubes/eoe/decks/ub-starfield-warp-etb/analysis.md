---
deck_name: "ub-starfield-warp-etb"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-08-05T03:52:43Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)
```
9x Island                     Land
6x Swamp                      Land
2x Contaminated Aquifer       Land — UB dual
1x Watery Grave               Land — the only untapped-capable UB dual
```

### CREATURES (11)
```
CMC  Card                       Qty   Color  Role                                         Rar
  3  Codecracker Hound          x1   U      Payoff — warp {2}{U}; ETB selection, doubled to two cards U
  3  Faller's Faithful          x2   B      Payoff — ETB removal on a body; doubled it destroys two U
  3  Sinister Cryologist        x2   U      Payoff — warp {U}; ETB -3/-0, doubled to -6/-0 C
  4  Starfield Vocalist         x1   U      Payoff — the ETB doubler; hard-cast only     R
  5  Quantum Riddler            x1   U      Payoff — ETB draw doubles to two; 4/6 flier hard-cast M
  5  Starbreach Whale           x2   U      Payoff — warp {1}{U}; ETB surveil 2, doubled to 4; 3/5 flier hard-cast C
  6  Mechanozoa                 x2   U      Payoff — warp {2}{U}; ETB tap+stun, doubled to two stun counters C
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                       Qty   Color  Role                                         Rar
  1  Tragic Trajectory          x2   B      Interaction — {B} kill spell; every warp cast turns Void on U
  1  Zero Point Ballad          x1   B      Interaction — sweeper set at X=3, under Starfield Vocalist's toughness R
  2  Desculpting Blast          x1   U      Interaction — the only answer here to a resolved enchantment U
  4  Gravkill                   x1   B      Interaction — unconditional instant exile    C
```

### OTHER SPELLS (6)
```
CMC  Card                       Qty   Color  Role                                         Rar
  2  Cryogen Relic              x2   U      Payoff — ETB draw doubles to two; sacs for a third card + a stun C
  3  Dubious Delicacy           x2   B      Payoff — flash; ETB -3/-3 doubles to -6/-6, which kills U
  4  Uthros Scanship            x2   U      Payoff — ETB draw 2 discard 1; doubled it is net +2 cards U
```

## SIDEBOARD (10)
```
Card                       Qty   Color  Role / When to board in                      Rar
Annul                      x2   U      vs artifact/enchantment spells — cube artifact density 29.7% U
Virus Beetle               x2   B      vs control and combo — ETB discard, doubled to two cards off their hand C
Dauntless Scrapbot         x2   C      vs graveyard decks — exiles each opponent's graveyard U
Unravel                    x2   U      vs combo and oversized spells the ETB toolbox cannot answer U
Lost in Space              x1   U      vs a RESOLVED artifact — instant, and Annul only answers it on the stack C
Specimen Freighter         x1   U      vs a developed board — ETB bounces up to two creatures, doubled to four U
```

## ANALYSIS

### DECK IDENTITY

UB Warp-ETB value midrange. Starfield Vocalist reads "If a permanent entering the battlefield causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time" - so once it is HARD-CAST for {3}{U} and survives, every enter-the-battlefield trigger in the deck pays twice. Warp compounds it from the other side: a warp cast buys the ETB now for one or two mana, and the card returns from exile to be hard-cast later and pay the same ETB a second time. Nine of the 22 nonland cards carry a warp cost and 17 carry a trigger the doubler multiplies, so the same card can be worth four ETB resolutions. The deck buries the opponent in cards and answers, then closes around turn 9 with the accumulated hard-cast bodies - Mechanozoa 5/5, Quantum Riddler 4/6 flying, Starbreach Whale 3/5 flying.

### WHAT DOUBLING ACTUALLY PRODUCES

"Doubled" is not a synonym for "twice as good". Starfield Vocalist makes the trigger resolve a second time, drawbacks included, and the table below is what that literally yields:

| Card | ETB | Doubled result |
|---|---|---|
| Cryogen Relic | draw a card | **2 cards** — but only the *enter* half. The "or leaves the battlefield" half is not doubled, because nothing entered to cause it |
| Codecracker Hound | look at top 2, one to hand, one to graveyard | two separate look-twos: **2 to hand, 2 to graveyard** |
| Uthros Scanship | draw two, then discard a card | **4 drawn and 2 discarded — net +2**, not four |
| Sinister Cryologist | −3/−0 until end of turn | **−6/−0**, which blanks an attacker and *kills nothing* |
| Dubious Delicacy | −3/−3 until end of turn | **−6/−6**, which *does* kill |
| Faller's Faithful | destroy up to one other creature | **two creatures** — and the drawback doubles too, so both undamaged targets draw their controller two cards, up to **four cards** handed over |
| Mechanozoa | tap + a stun counter | the second tap does nothing, but the **second stun counter** does: two missed untap steps |
| Starbreach Whale | surveil 2 | two sequential surveil 2s, not one surveil 4 |
| Quantum Riddler | draw a card | **2 cards** |

Faller's Faithful's price is opt-in, not mandatory: the oracle says "destroy **up to one** other target creature," so the second, doubled instance may legally choose no target when the extra kill isn't worth two cards.

Three things Starfield Vocalist explicitly does **not** double, all of which were tested and rejected during the build: leaves-the-battlefield triggers (Cryogen Relic's second half, Anticausal Vestige entirely), attack triggers (Specimen Freighter's mill, Starwinder's draw), and tap/Station triggers (Nanoform Sentinel).

### WHAT WARP ACTUALLY BUYS — AND WHAT IT DOES NOT

Warp reads "…**Exile this creature at the beginning of the next end step**, then you may cast it from exile on a later turn." Cast in your main phase, the next end step is your own, that same turn. A warped creature therefore resolves its ETB, keeps its card, and **never blocks and never attacks**.

This matters most in the wrong direction, and the deck is built around the correction: a warped Sinister Cryologist is **not** a defensive card. It is cast at sorcery speed on your own turn, its −3/−0 expires in your own end step before the opponent declares attackers, and the 2/3 body is already exiled. Its warp mode shrinks a *blocker* on your attack; the defensive 2/3 exists only on the hard-cast. Every defensive claim in this deck's failure modes names either a hard-cast body or Dubious Delicacy, which has **flash** and is the only permanent in the list that can be deployed on the opponent's turn.

### WHY ZERO POINT BALLAD IS MAINDECK AND SINGULARITY RUPTURE IS NOT

Both are sweepers in these colours; only one of them is compatible with a deck built around a single 3/4.

Singularity Rupture is "Destroy all creatures" — unconditional, and it kills Starfield Vocalist. Zero Point Ballad is "Destroy all creatures with **toughness X or less**", and X is yours to choose. Cast at X=3 for four mana:

| Survives | Dies |
|---|---|
| Starfield Vocalist 3/**4** | Codecracker Hound 2/1 |
| Starbreach Whale 3/**5** ×2 | Sinister Cryologist 2/3 ×2 |
| Quantum Riddler 4/**6** | Faller's Faithful 3/1 ×2 |
| Mechanozoa 5/**5** ×2 | |
| plus Cryogen Relic ×2 and Uthros Scanship ×2, which are artifacts, not creatures | |

Six of the eleven creature copies live, including the one card the build is assembled around, and four of the five that die are warp cards already sitting in exile to be re-cast.

### THE RARE BUDGET IS DELIBERATELY UNDERSPENT

Four of six rare/mythic slots are used. The two unspent slots are not an oversight — they are the consequence of the selection rule. Singularity Rupture kills the doubler. Starwinder and Elegy Acolyte have combat-damage triggers, which the doubler never touches. Anticausal Vestige's trigger is leaves-the-battlefield, explicitly outside what Vocalist doubles. Moonlit Meditation needs token makers, of which this list has zero. A rare that the doubler cannot multiply is competing on raw rate against commons that it can.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:3  2:3  3:7  4:4  5:3  6:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 7.5: Starfield Vocalist@0.7, Uthros Scanship@0.8) → p=0.96 (need ≥ 0.75)
  PASS  enabler: 9 copies → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 44%  T2 77%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Zero Point Ballad, Faller's Faithful
  OK        single_large_threat: Gravkill, Faller's Faithful, Mechanozoa
  OK        noncreature_permanents: Desculpting Blast
  CONCEDED  stack: The maindeck taps out on its own turn to deploy ETB permanents, which is the worst possible shell for holding up a counterspell - a countered opposing spell is also a turn this deck did not double a trigger. Unravel x2 boards in for the matchups where that trade is correct.
  CONCEDED  graveyard: Every maindeck slot is an ETB permanent, an ETB payoff or removal that protects them; a graveyard-hate card would be the only card in the list that feeds the doubler nothing. Dauntless Scrapbot x2 boards in. Note precisely what the doubler does for it: doubling 'exile each opponent's graveyard' is worth nothing, because the second resolution exiles an already-empty graveyard - only the 'Create a Lander token' half doubles.
```

- Curve, assembly, goldfish and coverage all returned PASS; no WARN flags to answer.

- Slot bands: Interaction 5/22 = 22.7%, inside the 20-30% midrange band. An earlier draft recorded this as 7 cards / 31.8% and wrote a defence for a band violation that did not exist; the count is corrected here.

- Threats/Payoffs 17/22 = 77.3% against a 30-40% band. This is the direct consequence of the midrange row's 'Engine & Infrastructure 0% (absorbed)' rule rather than a free choice: every engine in this deck IS a permanent with an enter-trigger, so the entire engine budget is spent inside the threats bucket by construction. Dubious Delicacy is counted here rather than as interaction because it is in the list as a doubled ETB, not as a removal spell.

- Land count 18, built exactly to deck_audit.land_target(40, 3.318, 0) = 18. No deviation.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands convert directly into the plan: every one of the 9 warp copies returns from exile to be HARD-CAST at full price later (Starbreach Whale {4}{U}, Mechanozoa {4}{U}{U}, Codecracker Hound {2}{U}, Sinister Cryologist {2}{U}, Quantum Riddler {3}{U}{U}), which is the second - and, with the doubler out, doubled - payout of the same card. Cryogen Relic's '{1}{U}, Sacrifice this artifact' turns a flooded turn into a card plus a stun counter, Dubious Delicacy's '{2}, {T}, Sacrifice this artifact: You gain 3 life' is a second sink, and Zero Point Ballad is {X}{B} so every extra land raises X. Five of the 22 nonland cards cost 5 or more. |
| screw | mitigation | Seven of 22 nonland cards are castable for one or two mana: Tragic Trajectory x2 at {B}, Zero Point Ballad cast small, Cryogen Relic x2 at {1}{U}, and the warp modes Sinister Cryologist {U}, Starbreach Whale {1}{U} and Quantum Riddler {1}{U}. Only 2 of the 18 lands enter tapped unconditionally. Goldfish check: 85% keepable, three lands by turn 3 in 92% of hands. |
| decapitation | accepted | Starfield Vocalist IS the key card and it will be answered on sight. What mitigating would cost: the only protection in these colours is a counterspell held up on the turn Vocalist is cast, and this deck taps out on its own turn to deploy ETB permanents - holding up Unravel is a turn that deployed nothing and doubled nothing, which is the opposite of the plan. So the deck is built to function WITHOUT the doubler: all 17 permanent-entering triggers pay once unaided, the 9 warp copies still pay theirs twice by warping and then hard-casting, and Vocalist is upside rather than a prerequisite. That is why its structural reliability weight is 0.7 rather than 1.0. |
| gas-out | mitigation | The deck's strongest axis. Dedicated draw among the 22 nonland cards: Cryogen Relic x2 (a card on entry, another on the way out), Uthros Scanship x2 (draw two discard one), Codecracker Hound x1 (a card to hand), Quantum Riddler x1 (a card on entry, plus 'as long as you have one or fewer cards in hand, if you would draw one or more cards, you draw that many cards plus one instead') = 6 of 22, every one of them a permanent-entering trigger the doubler multiplies. The 9 warp copies are additionally cards spent once and still castable from exile later. |
| raced | mitigation | Dubious Delicacy x2 is the answer and it is the only permanent in the list with FLASH, so it is the only one deployable on the opponent's turn: its ETB is -3/-3, doubled to -6/-6, which unlike Sinister Cryologist's -6/-0 actually kills. Behind it, Faller's Faithful x2 destroys a creature on arrival (two, doubled), Zero Point Ballad can be cast at X=2 or X=3 against an early board while sparing this deck's toughness-4-and-up bodies, and the hard-cast bodies are large: Mechanozoa 5/5, Quantum Riddler 4/6 flying, Starbreach Whale 3/5 flying, Starfield Vocalist 3/4. What is explicitly NOT claimed as defence: any warp mode. A warped creature is cast at sorcery speed and exiled at your own end step, so it neither blocks nor survives to the opponent's attack, and a warped Sinister Cryologist's -3/-0 has expired before attackers are even declared. |
| disruption-fizzle | mitigation | There is no single critical turn to interact with: the value is distributed across 17 permanent-entering triggers rather than assembled once, so a counterspell aimed at any one of them trades one-for-one against a deck drawing extra cards off the others. The one turn worth countering is the Vocalist hard-cast, and the response is to keep playing - without Vocalist every ETB still resolves once and the 9 warp copies still pay theirs twice. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Anticausal Vestige | 'When this creature LEAVES the battlefield, draw a card, then you may put a permanent card with mana value less than or equal to the number of lands you control from your hand onto the battlefield tapped.' Warp {4} makes it exile itself at end step and fire that trigger - but Starfield Vocalist doubles triggers caused by a permanent ENTERING, so this deck's own doubler does nothing for it, and it costs a rare. |
| Moonlit Meditation | 'The first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of enchanted permanent.' This build makes tokens on 0 of its 23 nonland cards, so the enabling clause never fires. It is also a rare. |
| Alpharael, Stonechosen | Its halving trigger requires it to ATTACK; this build's plan is repeated ETB value from creatures that are exiled at end step, not a combat step, and it is a mythic. |
| Singularity Rupture | 'Destroy all creatures' would kill Starfield Vocalist, which is the single card the whole build is assembled around. |
| Fell Gravship | ETB 'mill three cards, then return a creature or Spacecraft card from your graveyard to your hand' - doubled it is a real engine, but it needs a stocked graveyard on the first cast and this build has no self-mill outside Codecracker Hound and Starbreach Whale. |
| Divert Disaster | 'Counter target spell unless its controller pays {2}' - a soft counter is at its worst in a deck that taps out on its own turn to deploy ETB creatures. Kept as a sideboard card. |
| Elegy Acolyte | 4/4 lifelink with a Void token maker - strong, but it is a rare and this build's three rare slots are Starfield Vocalist, Quantum Riddler and Watery Grave, of which the first is non-negotiable. |
| Starwinder | 7/7 for {5}{U}{U} with a combat-damage draw trigger - a fine finisher, but its trigger is combat, not an ETB, so the deck's doubler does nothing for it, and it is a rare. |
| Cryoshatter | Destroys only 'when enchanted creature becomes tapped or is dealt damage' - an opposing creature taps on the OPPONENT's turn, and -5/-0 does not stop it from blocking. |
| Bygone Colossus | 'Warp {3}' for a 9/9 with no ETB at all - it gives the doubler nothing, and a warped creature is exiled at your own end step so the 9/9 never attacks or blocks. |
| Timeline Culler | A 2/2 haste with no ETB; the doubler is blank on it. |
| Susurian Voidborn | Warp {B} is cheap, but it has no ETB trigger - it is a Void switch only, and this build is paying its warp costs for the ETBs. |
| Vote Out | 'Convoke / Destroy target creature' at sorcery speed; Gravkill is instant and exiles, and this deck wants its mana open on the opponent's turn far less than it wants ETBs on its own. |
| Nanoform Sentinel | 'Whenever this creature becomes TAPPED, untap another target permanent' - a tap trigger, not an ETB, so the doubler is blank on it. |
| Selfcraft Mechan | Corrected exclusion grounds: it is an ARTIFACT Creature, so its ETB 'you may sacrifice an artifact' can always eat itself - fodder is 100%, not the artifact-count fraction first claimed. It is excluded on rate instead: a {3}{U} 3/4 whose doubled triggers eat itself and one other artifact is a worse use of a doubled trigger than Uthros Scanship or Cryogen Relic in the same slot. |
| Singularity Rupture | 'Destroy all creatures' is unconditional and kills Starfield Vocalist, the single card the build is assembled around. Zero Point Ballad took the sweeper slot instead because its X is chosen and X=3 sits under Vocalist's toughness 4. |
| Depressurize | Cut in the grill repair. Its best line here needed three specific cards (Vocalist x1, Sinister Cryologist x2, Depressurize x1) to reach a kill, and standalone it destroys only power 3 or less. It is also one of the few cards contributing nothing to the doubler in either direction; its slot went to Dubious Delicacy, which is itself a doubled trigger. |
| Mouth of the Storm | Cut from the sideboard in the grill repair. {6}{U} is seven mana, boarded in against go-wide aggro - the matchup least likely to reach turn 7 - and its doubled -6/-0 destroys nothing and does not stop a creature blocking. Its slot went to Lost in Space. |
| Hymn of the Faller | A two-mana draw-two on the many turns Void is live, but it is a sorcery, not a permanent entering the battlefield, so Starfield Vocalist multiplies it by nothing. In a deck whose selection rule is 'does the doubler touch it', it loses to cards the doubler touches. |
| Tractor Beam | 'You control enchanted permanent' is a permanent, card-advantageous answer that also swings the board by two - but the steal is a static ability, so the doubler adds nothing; only its redundant tap-on-enter would double. |
| Fell Gravship | Doubled, 'mill three cards, then return a creature or Spacecraft card from your graveyard to your hand' is mill 6 and TWO returns, which is a genuine doubler target. Excluded because it is a Spacecraft that this build never Stations to 8+, so it is a 2-mana artifact that only ever returns cards, and its two candidate slots went to Dubious Delicacy to close the raced gap. |
| Susurian Dirgecraft | 'Each opponent sacrifices a nontoken creature of their choice' is a rare non-targeted answer, doubled to two sacrifices - real value against the pool's ward and hexproof bodies. Excluded for the same Spacecraft reason as Fell Gravship, and at {4}{B} it competes with the deck's densest mana turn. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.32   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.09 adj [MV 3.32 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  32.0%  prod  50.0%  gap -18.0pp  [OK]
  U  demand  68.0%  prod  66.7%  gap  +1.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons / uncommons, max 2 copies each ......... PASS (no card exceeds 2)
Rares / mythics, max 1 copy each ............... PASS
Rares + mythics, max 6 total (MB + SB) ......... PASS - 4 of 6 used:
    Starfield Vocalist (R)      mainboard
    Quantum Riddler (M)         mainboard
    Zero Point Ballad (R)       mainboard
    Watery Grave (R)            mainboard
    (2 slots deliberately unspent - see the ANALYSIS section)
Basic lands unlimited .......................... Island 9, Swamp 6
All cards from cube mainboard .................. PASS (exact-name match, 40 + 10)
Colour usability within U/B .................... PASS (effective_cost.best_mode non-None for every nonland)
```