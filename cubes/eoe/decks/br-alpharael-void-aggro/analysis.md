---
deck_name: "br-alpharael-void-aggro"
cube_id: "eoe"
cube_slug: "eoe"
colors: "BR"
format: "40-card"
built_at: "2026-08-04T14:40:22Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
 3x Mountain                 
11x Swamp                    
 1x Command Bridge           any colour, enters tapped
 2x Geothermal Bog           BR dual, enters tapped
```

### CREATURES (18)

```
CMC  Card                     Qty  Color  Role                                                                  Rar
  1  Slagdrill Scrapper       x2   R      Engine — sacrifices a LAND to switch Void on, and draws               C
  2  Beamsaw Prospector       x2   B      Fodder — death makes a Lander token                                   C
  2  Timeline Culler          x2   B      Warp switch — haste body, 2 warp casts per copy (hand + graveyard)    U
  2  Umbral Collar Zealot     x2   B      Engine — free repeatable sac outlet = Void switch                     U
  3  Gravpack Monoist         x2   B      Fodder — flier whose death makes a 2/2 Robot                          C
  3  Insatiable Skittermaw    x1   B      Payoff — menace, grows on Void                                        C
  3  Susurian Voidborn        x2   B      Warp switch — drains on every death                                   U
  3  Xu-Ifit, Osteoharmonist  x1   B      Engine — repeatable reanimation, rebuilds fodder                      R
  4  Elegy Acolyte            x1   B      Engine — Void end-step token, next turn sac fodder                    R
  4  Interceptor Mechan       x2   BR     Payoff — flier, ETB regrowth, grows on Void                           U
  5  Alpharael, Stonechosen   x1   B      Payoff — Void attack trigger halves life                              M
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                     Qty  Color  Role                                                                  Rar
  1  Embrace Oblivion         x1   B      Interaction — sacrifice is a COST, so the switch is on before combat  C
  1  Plasma Bolt              x2   R      Interaction/reach — Void upgrades to 3 damage, can go face            C
  1  Tragic Trajectory        x2   B      Interaction — Void upgrades to -10/-10                                U
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in
Drill Too Deep           x2   R      Destroy a resolved artifact — The only on-colour answer to a resolved artifact, against a cube that is 30% artifacts (74 of 249). Its other mode ('Put five charge counters on target Spacecraft or Planet you control') is dead here — this deck runs neither. [C]
Dauntless Scrapbot       x2   C      Graveyard exile — Against reanimation and graveyard-recast decks. Narrow, because this deck's own graveyard feeds Xu-Ifit and Timeline Culler's graveyard warp. Its Lander is fodder and its body is a 3/1. [U]
Lithobraking             x1   R      2-damage sweeper (symmetric) — Against go-wide token boards only, and at one copy rather than two: 'deals 2 damage to each creature' kills 14 of this deck's 23 nonland copies plus every Robot and Lander token. Its own optional artifact sacrifice is a Void switch, which is the only reason it is playable here at all. [U]
Ruinous Rampage          x2   R      Reach OR one-sided artifact sweep — Mode 1 ('deals 3 damage to each opponent') against decks that stabilise the ground — it ignores blockers and pairs with the halvings. Mode 2 ('Exile all artifacts with mana value 3 or less') against artifact decks; note it would also exile this deck's own Slagdrill Scrapper, Interceptor Mechan and every token, so the modes are matchup-exclusive. [U]
Scrounge for Eternity    x1   B      Reanimates Alpharael WITH its abilities — Against removal-heavy decks. It is the only card in the pool that returns Alpharael functional — Xu-Ifit returns creatures as 'a Skeleton ... [that] has no abilities', i.e. with the halving trigger deleted. Its sacrifice is an additional COST, so it also flips Void in the main phase, and it leaves a Lander behind. [U]
Temporal Intervention    x2   B      Void-discounted targeted discard — Against combo and control. 'Void — This spell costs {2} less to cast' makes it a one-mana proactive Duress on any live-switch turn. It is this deck's substitute for a counterspell, since B and R have none in this pool. [C]
```

## ANALYSIS

### DECK IDENTITY

B/R aggro whose kill is a single line of text: Alpharael, Stonechosen — 'Void — Whenever Alpharael ATTACKS, if a nonland permanent left the battlefield this turn or a spell was warped this turn, defending player loses half their life, rounded up.' The trigger is on attacking, not on connecting, so blocking or chumping Alpharael does not stop it — only removal before attackers are declared does. Two attacks take an opponent from 20 to 10 to 5, and two Void-boosted Plasma Bolts finish from there. Everything else exists to guarantee the Void condition is true at the moment attackers are declared, which this deck does three ways: warp casts (Timeline Culler and Susurian Voidborn for {B}), a free repeatable sacrifice outlet (Umbral Collar Zealot, no mana in its cost), and Slagdrill Scrapper, whose fodder is a LAND rather than a creature. Embrace Oblivion flips the switch as an additional COST on a main-phase spell, which removes the timing subtlety entirely.

### THE ARITHMETIC OF HALVING

Alpharael, Stonechosen: *"Void — Whenever Alpharael attacks, if a nonland permanent left the battlefield this turn or a spell was warped this turn, defending player loses half their life, rounded up."*

| Connection | Opponent's life |
|---|---|
| start | 20 |
| 1st | 10 |
| 2nd | 5 |
| 3rd | 3 |
| 4th | 2 |
| 5th | 1 |

Two things follow immediately, and they shape the whole build.

**First, the halving never kills.** It asymptotes at 1. The deck needs real damage to finish, which is why Plasma Bolt is mainboard at two copies: after two connections the opponent is at 5, and two Void-boosted Plasma Bolts are 6 to the face. That is the actual kill, and it is why a burn spell sits in an aggro deck's removal slots.

**Second — and this is counter-intuitive for an aggro deck — chip damage before Alpharael lands is bad.** Halving 20 removes 15. Halving 10 removes only 7. Racing ahead of your own payoff throws away the payoff. This deck deliberately does *not* try to be the fastest B/R aggro deck available; the shape judge rejected the low-curve explosive build on exactly this ground.

### VOID IS A PROPERTY OF THE DECK, NOT OF THE BOARD

The condition has two independent switches, and this list runs both:

**Switch A — warp.** Casting any warp spell that turn satisfies "a spell was warped this turn." Timeline Culler at {B} and Susurian Voidborn at {B} are one-mana switches. Timeline Culler is worth reading carefully: *"You may cast this card from your graveyard using its warp ability."* That is **three uses per copy** — warped from hand, warped again from the graveyard, then hard-cast from exile — not an infinite loop, because warp exiles the creature at the next end step, so the graveyard cast sends it to exile rather than back to the yard.

**Switch B — a permanent leaving.** Umbral Collar Zealot's *"Sacrifice another creature or artifact: Surveil 1"* has **no mana in its cost** and no tap symbol, so it is repeatable and free. What makes it genuinely free rather than a tax on the board is that this deck manufactures its own fodder:

| Source | What it leaves behind |
|---|---|
| Elegy Acolyte | a 2/2 Robot at each end step Void is live |
| Gravpack Monoist | a 2/2 Robot when it dies |
| Beamsaw Prospector | a Lander token when it dies |
| Xu-Ifit, Osteoharmonist | a Skeleton from the graveyard, every turn, for {T} |

Elegy Acolyte closes the loop: Void live on turn N → token at end of turn N → that token is the free sacrifice on turn N+1 → Void live on turn N+1. The engine bootstraps off any single warp cast and then sustains itself.

### THE TIMING THAT MATTERS

Alpharael's trigger has an **intervening-if** clause, which means the condition is checked when the trigger would be put on the stack — the moment attackers are declared. **Flip the switch in the beginning-of-combat step, before declaring attackers.** Sacrificing after attackers are declared is too late; the trigger has already failed to trigger.

This is not a pedantic point. It is exactly why Kavaron Harrier — a card that otherwise looks like a perfect fit — is not in this deck: its token is sacrificed *"at end of combat"*, strictly later than the check, so it can never enable Alpharael's own trigger on any turn.

One consolation on the other side: because the condition never mentions Alpharael, killing Alpharael in response to the trigger does **not** stop the halving. The condition is re-checked on resolution, but "a nonland permanent left the battlefield this turn" is, if anything, *more* true once Alpharael has died.

### WHY THE ENGINE BAND IS BLOWN OUT

The structural checks flag this deck's Engine & Infrastructure allocation at 34.8% against an Aggro band of 0–10%. That is not a slip. In an ordinary aggro deck, "engine" cards are value accretion competing with threats. Here the eight cards in that bucket — Umbral Collar Zealot ×2, Elegy Acolyte, Xu-Ifit, Gravpack Monoist ×2, Beamsaw Prospector ×2 — **are the kill mechanism**. An aggro deck that spent those slots on more creatures would attack with a bigger board and a dead Alpharael trigger. The shape judge credited exactly this reasoning.

### THE RED HALF IS SMALLER THAN IT LOOKS

Six red pips out of thirty. Only Plasma Bolt ×2 ({R}), Roving Actuator ×2 ({3}{R}) and Interceptor Mechan ×2 ({2}{B}{R}) want red at all, and none of them before turn 3. That is why the manabase is 11 Swamp / 3 Mountain / 2 Geothermal Bog / 1 Command Bridge rather than a true two-colour split — and why Nova Hellkite, a genuinely strong {3}{R}{R} card, is not in the deck. Six red sources do not cast a double-red five-drop on curve.

### ROVING ACTUATOR'S REAL COUNT

*"Void — When this creature enters, if [Void], exile up to one target instant or sorcery card with mana value 2 or less from your graveyard. Copy it. You may cast the copy without paying its mana cost."* Qualifying targets in this list are Tragic Trajectory ×2 and Plasma Bolt ×2 — **4 of 23 nonland copies**, and all four must already be in the graveyard. It is declared at reliability weight 0.7 in the assembly check for that reason. It is a 3/4 artifact body first and a Void-gated flashback second.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (23 nonland):  1:7  2:6  3:6  4:3  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 9.2: Plasma Bolt@0.8, Plasma Bolt@0.8, Susurian Voidborn@0.8, Susurian Voidborn@0.8) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10.7: Elegy Acolyte@0.7) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 76%  T2 97%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. Mitigating means maindecking a symmetric one, and Lithobraking's 'deals 2 damage to each creature' kills 14 of this deck's 23 nonland copies plus every Robot and Lander token, leaving 5 — and those tokens ARE the Void switch, so the sweeper turns off the kill mechanism it was boarded in to protect. Ruinous Rampage x2 (one mode reads 'deals 3 damage to each opponent', which is reach that ignores blockers) and Lithobraking x1 sit in the sideboard for the matchups where width actually races.
  OK        single_large_threat: Tragic Trajectory, Embrace Oblivion, Plasma Bolt
  CONCEDED  noncreature_permanents: The mainboard has no artifact or enchantment answer, against a cube that is 30% artifacts. Drill Too Deep x2 covers ARTIFACTS from the sideboard ('Destroy target artifact') but it does NOT answer enchantments, and neither does anything else available: the cube's only enchantment-removal card is green (Seedship Impact), outside B/R entirely. So enchantments (16 cards, 6.4% of the cube) are answered by 0 of this deck's 50 cards, and that is a pool ceiling rather than a build choice. Maindecking Drill Too Deep would cost a fodder body, and fodder is the resource the kill mechanism runs on.
  CONCEDED  stack: Black and red have no counterspell in this pool. The deck instead attacks the hand: Temporal Intervention x2 in the sideboard reads 'Target opponent reveals their hand. You choose a nonland card from it. That player discards that card' and its Void clause makes it cost {2} less, so it is a one-mana proactive answer on any turn the switch is live.
  CONCEDED  graveyard: No mainboard graveyard hate, and this deck actively wants graveyards to matter: Xu-Ifit reanimates from it, Timeline Culler can be warp-cast out of it, and Embrace Oblivion fills it. Dauntless Scrapbot x2 is in the sideboard and comes in only against recursion decks faster than a turn-6 clock.
```

- The curve WARN recorded before Phase 9 (MV 4+ at 26% against the 20% Aggro ceiling) CLEARED after the repairs. Cutting Roving Actuator x2 (MV 4) and Insatiable Skittermaw x1 for Slagdrill Scrapper x2 (MV 1) and Embrace Oblivion x1 (MV 1) moved the distribution to 1:7 / 2:6 / 3:6 / 4:3 / 5:1 — MV 4+ is now 4 of 23 = 17.4%, inside the band. All four structural checks now PASS with no WARN to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Slagdrill Scrapper x2 is the flood answer and the Void switch in one card: '{2}, {T}, Sacrifice another artifact or LAND: Draw a card' converts a surplus land into a card AND a leave-the-battlefield event. Xu-Ifit is a mana-free repeatable sink that turns spare turns into bodies. Beamsaw Prospector's Lander ('{2}, {T}, Sacrifice this token: Search your library for a basic land card') is itself a switch. Timeline Culler's third use is a hard cast from exile at {B}{B} — a genuine mana sink, though NOT a warp cast and therefore not a switch. |
| screw | mitigation | Stating the basis explicitly, because this count was wrong twice before. At PRINTED mana value, 13 of the 23 nonland copies cost two or less (the curve reads MV 1: 7, MV 2: 6). At the price the deck ACTUALLY pays — i.e. counting warp costs — it is 15 of 23, because Susurian Voidborn x2 prints at {2}{B} but is cast for warp {B}. The cards are Tragic Trajectory x2 ({B}), Plasma Bolt x2 ({R}), Slagdrill Scrapper x2 ({R}), Embrace Oblivion x1 ({B}), Umbral Collar Zealot x2 ({1}{B}), Beamsaw Prospector x2 ({1}{B}), Timeline Culler x2 (warp {B} plus 2 life) and Susurian Voidborn x2 (warp {B}). Every land is untapped or a tapped dual, and 88% of simulated hands reach 3 lands by turn 3, 87% are keepable, 76% have a turn-1 play. Only Alpharael at {3}{B}{B} needs five lands. |
| decapitation | mitigation | Alpharael is one mythic and will be answered on sight; 'Ward—Discard a card at random' taxes the answer without stopping it. The deck is built so the rest of the list is not a pile of enablers with nothing to enable: 6 of 23 nonland copies convert the same Void condition into damage with Alpharael gone — Insatiable Skittermaw x1 (menace, +1/+1 every live-switch end step), Interceptor Mechan x2 (flying, same counter), Plasma Bolt x2 (3 damage to any target, including the face) — plus Susurian Voidborn x2 draining 1 per death and Gravpack Monoist x2 flying. The honest limit, which the grill made me state: Xu-Ifit can return Alpharael from the graveyard but only as 'a Skeleton ... [that] has no abilities' — a 3/3 body with the halving trigger deleted. The only card in the pool that returns it functional is Scrounge for Eternity, which is in the sideboard for exactly this reason. |
| gas-out | mitigation | Cards: Net-Positive / Self-Replacing copies: Slagdrill Scrapper x2 (draws off a spare land), Interceptor Mechan x2 ('return target artifact or creature card from your graveyard to your hand'), Gravpack Monoist x2 and Beamsaw Prospector x2 (each leaves a second permanent behind on death), Elegy Acolyte x1 (draws on any connection, plus a token every live-switch end step) = 9 of 23 nonland copies. Xu-Ifit x1 converts an empty hand into a body every turn from the graveyard alone, which is the specific answer to running out of cards while still needing a permanent to sacrifice. |
| raced | accepted | Accepted. The kill is an attack trigger on a five-mana creature, so the deck cannot win before turn 5, and its dedicated removal is 3 of 23 copies. Mitigating means maindecking a symmetric sweeper, and Lithobraking's '2 damage to each creature' kills 14 of this deck's own 23 nonland copies plus every token — and those tokens ARE the Void switch, so the sweeper turns off the kill mechanism. Cutting fodder for more removal leaves Alpharael attacking with a dead trigger. The judge's point compounds it: racing back is actively wrong here, because halving 20 removes 15 while halving 10 removes only 7, so the deck wants the opponent at a high life total when Alpharael attacks. Lithobraking x1 and Ruinous Rampage x2 in the sideboard are the concession. |
| disruption-fizzle | mitigation | SEQUENCING FIRST, because the whole deck depends on it: Alpharael's ability is an intervening-if attack trigger, so the Void condition is checked the instant attackers are declared. The switch must therefore be flipped in the precombat main phase or the beginning-of-combat step, BEFORE attackers are declared — never in response to the attack, and never after blockers are known. If Void is false when attackers are declared, the trigger does not go on the stack at all and nothing later in the turn can retrieve it.
With that stated correctly, the mode is well covered because the condition has three independent switches and an opponent must break all of them on the same turn: (1) warp casts — Timeline Culler x2 and Susurian Voidborn x2, 6 warp events across a game; (2) Umbral Collar Zealot x2, free and repeatable, sacrificing any spare permanent; (3) Slagdrill Scrapper x2, whose fodder is a LAND, so it works with an empty board. Embrace Oblivion x1 flips the switch as an additional COST on a main-phase spell, which cannot be mistimed and also kills a creature.
Once the trigger IS on the stack, removal on Alpharael in response does not stop the halving: the intervening-if is rechecked on resolution, but the condition asks only whether a nonland permanent left the battlefield or a spell was warped this turn — still true, and made more true by Alpharael's own death. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Kavaron Harrier | Its token is sacrificed 'at end of combat', but Alpharael's Void check happens when the attack trigger would be PUT ON THE STACK — the instant attackers are declared, before any player gets priority. The leave-the-battlefield event always arrives after the check has already failed, and 'this turn' resets before the next attack, so it can never enable Alpharael's own trigger. The shape judge caught this, and the Phase 9 grill confirmed the same trap had been reintroduced in the deck's own failure-mode text. |
| Hylderblade | 'Equipped creature gets +3/+1 / Void — attach this Equipment to target creature you control' with Equip {4} — the free attach is itself gated on Void already being live, so it rides the switch rather than being one, and it needs a surviving creature to carry it. |
| Voidforged Titan | 'Void — At the beginning of your end step ... you draw a card and lose 1 life' on a {4}{B} 5/4 — a real Void payoff but the slowest card in the list, and cutting it took the deck from 16 to the land_target-recommended 17 lands. |
| Chorale of the Void | 'Whenever enchanted creature attacks, put target creature card from defending player's graveyard onto the battlefield' — it needs creatures in the OPPONENT's graveyard, a count this deck cannot control, and its own Void clause sacrifices it when the switch is off. |
| Decode Transmissions | 'Void — instead you draw two cards and each opponent loses 2 life' is genuinely on-plan reach, but at {2}{B} sorcery speed it competes with the fodder bodies that make the switch live in the first place; the deck already runs 4 Void-scaled spells. |
| Hymn of the Faller | 'Surveil 1, then you draw a card and lose 1 life. Void — draw another card' — card flow rather than board, and this deck's card advantage already comes from Interceptor Mechan's regrowth and Xu-Ifit's reanimation, both of which also produce fodder. |
| Temporal Intervention | Sideboard — 'Void — This spell costs {2} less to cast if [Void]' plus targeted discard makes it a one-mana proactive answer, but game one this deck would rather deploy a body. |
| Comet Crawler | 'Whenever this creature attacks, you may sacrifice another creature or artifact. If you do, this creature gets +2/+0' — an attack-gated sacrifice outlet, strictly worse than Umbral Collar Zealot's free, any-time, any-number activation for switching Void on. |
| Lightless Evangel | 'Whenever you sacrifice another creature or artifact, put a +1/+1 counter on this creature' — a payoff for the sacrifice loop rather than part of it; the slots went to fodder that replaces itself. |
| Virus Beetle | 'When this creature enters, each opponent discards a card' on a 1/1 artifact body is fine fodder, but Beamsaw Prospector and Gravpack Monoist each leave a second permanent behind when they die, which is worth more to a deck that needs a permanent to leave the battlefield every turn. |
| Nova Hellkite | A {3}{R}{R} 4/5 flying haste is a strong card but the red half of this deck is 6 pips of 30; double red on turn 5 off 6 red sources is not castable often enough to build around. |
| Tannuk, Steadfast Second | 'Artifact cards and red creature cards in your hand have warp {2}{R}' — artifact cards in this list are 4 of 23 (Interceptor Mechan x2, Roving Actuator x2) and red creature cards are 2 of 23, so the grant is live on 6 of 23 at above their printed cost; it belongs in the mono-red build, not here. |
| Anticausal Vestige | Warp {4} for a 7/5 that draws and free-drops on its own exile is colourless and castable, but this deck's four-mana slot is where Alpharael needs to be developing the board, and the Vestige's exile is one Void switch for four mana when Timeline Culler does it for one. |
| Sothera, the Supervoid | 'Whenever a creature you control dies, each opponent chooses a creature they control and exiles it' is a strong sacrifice payoff, but its end-step clause sacrifices it whenever a player controls no creatures, and against an empty opposing board this deck would be sacrificing its own enchantment while attacking. |
| Zero Point Ballad | 'Destroy all creatures with toughness X or less' is symmetric and would destroy this deck's own fodder — and the fodder IS the Void switch, so the sweeper turns off the kill mechanism. |
| Mutinous Massacre | {3}{B}{B}{R}{R} is uncastable on a 17-land B-primary manabase with 6 red sources; also symmetric against this deck's own board. |
| Drill Too Deep | Sideboard — '• Destroy target artifact' is the only on-colour answer to a resolved artifact, against a cube that is 30% artifacts. |
| Ruinous Rampage | Sideboard — '• deals 3 damage to each opponent' is reach that ignores blockers entirely and '• Exile all artifacts with mana value 3 or less' is a one-sided sweeper against the cube's artifact decks. |
| Lithobraking | Sideboard — 'you may sacrifice an artifact. When you do, deals 2 damage to each creature' — the sacrifice is itself a Void switch, but 2 damage kills this deck's own Beamsaw Prospector, Gravpack Monoist and Umbral Collar Zealot, so it only comes in against go-wide boards. |
| Dauntless Scrapbot | Sideboard — 'exile each opponent's graveyard' against the cube's recursion decks; note this deck's own graveyard is a resource (Xu-Ifit, Timeline Culler, Roving Actuator), so it is boarded in narrowly. |
| Roving Actuator | Its Void ETB is double-gated — it needs the switch already live AND a qualifying instant or sorcery with mana value 2 or less already in the graveyard, and qualifying targets were only 4 of 23 nonland copies. At MV 4 it was also the main contributor to the curve WARN, which cleared when it was cut. |
| Comet Crawler | 'Whenever this creature attacks, you may sacrifice another creature or artifact' looks like a third Void switch and is not one: the sacrifice happens on resolution of an ATTACK trigger, strictly after Alpharael's own intervening-if has already been checked. Kavaron Harrier's failure in a different costume. |
| Weftstalker Ardent | Warp {R} is the cheapest warp cost in the whole B/R pool and it would convert this deck's token output into reach — but it wants red on turn 1 against 6 red sources of 17, and the mana cannot support it. |
| Nova Hellkite | A {3}{R}{R} 4/5 flying haste is strong but uncastable on curve here: 6 red sources of 17 do not produce double red on turn 5. |
| Lightless Evangel | 'Whenever you sacrifice another creature or artifact, put a +1/+1 counter on this creature' rewards the sacrifice loop rather than being part of it; it does not widen the fodder base, which was the actual scarcity. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.35   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.87 adj [MV 2.35 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  80.0%  prod  82.4%  gap  -2.4pp  [OK]
  R  demand  20.0%  prod  35.3%  gap -15.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons and uncommons max 2 copies — No card exceeds its rarity multiplier; verified by cube_search.get_max_copies
[PASS] Rares and mythics max 1 copy — All three rare/mythic cards are singletons
[PASS] Max 6 rare/mythic cards across mainboard + sideboard — 3 used: Alpharael, Stonechosen (M), Elegy Acolyte (R), Xu-Ifit, Osteoharmonist (R). Sideboard uses zero; 3 slots left unused. The grill verified that leaving them unused is defensible: no B/R rare or mythic outside the deck contains a Void clause, and the three that carry a warp cost are all red-intensive against 6 red sources.
[PASS] All cards from the eoe cube mainboard — Exact-name match against the working pool; basics are format-supplied
[PASS] 40-card mainboard, 10-card sideboard — 40 / 10
```
