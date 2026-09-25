---
deck_name: "b-void-drain"
cube_id: "eoe"
cube_slug: "eoe"
colors: "B"
format: "40-card"
built_at: "2026-08-05T03:51:24Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  17x Swamp                    Basic land, taps for {B}
```

### CREATURES (11)

```
CMC  Card                        Qty   Color  Role                            Rar
  2  Timeline Culler            x2    B      Engine/Outlet                   U
  2  Umbral Collar Zealot       x1    B      Engine/Outlet                   U
  2  Virus Beetle               x2    B      Engine/Outlet                   C
  3  Susurian Voidborn          x2    B      Payload/Payoff                  U
  4  Elegy Acolyte              x1    B      Payload/Payoff                  R
  4  Swarm Culler               x2    B      Engine/Outlet                   C
  5  Alpharael, Stonechosen     x1    B      Payload/Payoff                  M
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                        Qty   Color  Role                            Rar
  1  Embrace Oblivion           x2    B      Interaction/Disruption          C
  1  Tragic Trajectory          x1    B      Interaction/Disruption          U
  3  Decode Transmissions       x2    B      Engine/Outlet                   C
  3  Temporal Intervention      x2    B      Engine/Outlet                   C
  4  Gravkill                   x1    B      Interaction/Disruption          C
```

### OTHER SPELLS (4)

```
CMC  Card                        Qty   Color  Role                            Rar
  1  Nutrient Block             x2    C      Enabler/Fodder                  C
  3  Dubious Delicacy           x1    B      Interaction/Disruption          U
  4  Entropic Battlecruiser     x1    B      Payload/Payoff                  R
```

## SIDEBOARD (10)

```
Card                        Qty   Color  Role / When to board in                                       Rar
Hullcarver                 x2    B      vs fast clocks                                                C
Thaumaton Torpedo          x2    C      vs enchantments (16 cube cards) and the 52 non-Spacecraft ar  C
Depressurize               x2    B      vs go-wide and cheap aggressive starts                        C
Dauntless Scrapbot         x2    C      vs graveyard decks (31 cube cards / 12                        U
Scrounge for Eternity      x2    B      vs decks that answer Alpharael on sight                       U
```

## ANALYSIS

### DECK IDENTITY

Mono-black Void midrange. Alpharael, Stonechosen halves the opponent's life every time it attacks with Void active, and — corrected during the Phase 9 grill — that alone is lethal: from 20 life the remainders run 10, 5, 2, 1, 0 across five Void-active attacks, because at 1 life 'loses half their life, rounded up' takes the last point. The drain suite is therefore an accelerant rather than a mathematical necessity: Entropic Battlecruiser at a single charge counter converts each of the deck's four forced discards into 3 life loss, Decode Transmissions deals 2 with Void live, Dubious Delicacy deals 3 on demand, and Susurian Voidborn drains 1 per death. What makes any of it consistent is Timeline Culler, which can be re-warped from the graveyard for {B} and 2 life, so Void is effectively a repeatable mana ability rather than a condition the deck has to hope for.

### THE ARITHMETIC AT THE CENTRE OF THIS DECK — AND A CORRECTION

Alpharael, Stonechosen reads:

> `Void — Whenever Alpharael attacks, if a nonland permanent left the battlefield this turn or a spell was warped this turn, defending player loses half their life, rounded up.`

An earlier draft of this build asserted that halving **never reaches zero**, writing the sequence as 20 → 10 → 5 → 3 → 2 → 1. That was wrong, and the self-grill caught it: **that sequence tracks the amount *lost*, not the amount *remaining*.** Worked properly, losing `ceil(L/2)` each time:

| Attack | Loses | Remaining |
|---|---|---|
| 1 | 10 | 10 |
| 2 | 5 | 5 |
| 3 | 3 | **2** |
| 4 | 1 | 1 |
| 5 | 1 | **0** |

At 1 life, `ceil(1/2) = 1`. **Alpharael kills from 20 unaided in five Void-active attacks.** The rounding-up clause that looks like it guarantees a survivor is in fact what finishes the job.

This makes the deck *better* than the frame it was built on, and it changes the drain suite's job from mathematical necessity to **accelerant**. Three attacks leave the opponent at **2**, and the list carries far more than 2 points of non-combat damage:

| Source | Damage | Copies |
|---|---|---|
| Entropic Battlecruiser at 1+ counters, per discard | **3** | 4 deck-forced sources → up to 12 |
| Dubious Delicacy, `{2}, {T}, Sacrifice: Target opponent loses 3 life` | **3** | 1 |
| Decode Transmissions with Void, `each opponent loses 2 life` | **2** | 2 → 4 |
| Susurian Voidborn, per creature/artifact death | **1** | 2, off a 15-card fodder base |

**Three attacks plus a single Decode Transmissions is exact lethal**, and 7 of those points (Decode ×2 plus Dubious Delicacy) require no Battlecruiser at all.

### THE BATTLECRUISER NEEDS EXACTLY ONE COUNTER HERE

This is the same card as in the Station build, used at a completely different setting. There, the whole deck was engineered to reach **8** charge counters. Here it needs **one**.

> `1+ | Whenever an opponent discards a card, they lose 3 life.`

Station taps *another* creature — not a `{T}` in that creature's own cost — so a summoning-sick body works the turn it lands, and this list has 11 creature copies that can supply the single counter. **Deck-forced** discard sources: Virus Beetle ×2 and Temporal Intervention ×2 = 4 copies × 3 life = **12 points available** from a card most decks would read as a 4-mana do-nothing. (Alpharael's `Ward—Discard a card at random` is a fifth source, but it is paid at the *opponent's* election — the deck cannot schedule it, so it is not counted here.)

There is a second, elegant line the grill surfaced: **Swarm Culler**. Station's cost is *"Tap another creature you control"*, and Swarm Culler reads `Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card.` Stationing the Battlecruiser *off* Swarm Culler therefore switches the Spacecraft on, sacrifices a permanent, draws a card, and turns Void on — all in one action.

**Honest limitation, stated plainly:** the card's fourth line — `Whenever this Spacecraft attacks, each opponent discards a card` — is **dead text** under this plan. A Spacecraft below its threshold is an artifact, not a creature, so it cannot attack at 1–7 counters. Reaching 8 is possible (the 11 creature cards total 22 power), but it means tapping roughly three creatures that would otherwise be attacking alongside Alpharael. This build knowingly runs one of the card's four abilities and half of another.

### TIMELINE CULLER IS THE ENGINE, NOT A CREATURE

Void gates four distinct effects here — Alpharael's halving, Tragic Trajectory's `-10/-10`, Temporal Intervention's `{2}` discount, and Decode Transmissions' drain mode — totalling **6 of 23 nonland cards**. Every other enabler in the pool is one-shot. Timeline Culler is not:

> `Haste / You may cast this card from your graveyard using its warp ability. / Warp—{B}, Pay 2 life.`

From the turn the first copy hits the graveyard, **every attack step can have Void live for one black mana, indefinitely.** That converts Void from a condition the deck hopes for into something closer to a mana ability. It is also a hasty 2/2 that attacks on arrival, and its end-step self-exile is a *second*, independent Void event.

Getting the Culler into the graveyard is trivially easy — it self-exiles at end step after any warp cast, and Umbral Collar Zealot can sacrifice it for free.

### WHY TRAGIC TRAJECTORY IS IN THIS DECK AND NOT THE OTHER ONE

The identical card was **excluded** from the Station build. That is not inconsistency; it is the Counts Principle doing its job.

- **Station build:** Void enablers = 3 of 22 nonland cards. `-10/-10` is the exception; the card is a sorcery-speed `-2/-2` for `{B}`. **EXCLUDE.**
- **This build:** Void enablers = 16 copies at 12.0 effective weight, one of them free and repeatable. `-10/-10` is the *normal* mode. A one-mana unconditional kill spell. **INCLUDE.**

The card did not change. The denominator did.

One circularity worth naming: Trajectory turns Void on by killing something, but its own `-10/-10` mode is what *needs* Void — so it cannot bootstrap itself. The structural gate discounts both copies to 0.3 as enablers for exactly this reason.

### UMBRAL COLLAR ZEALOT — FREE IN MANA, NOT IN CARDS

> `Sacrifice another creature or artifact: Surveil 1.`

The dossier's structural census finds only **2 free sacrifice outlets in the entire 276-card pool**. This is one of them, and every activation makes a nonland permanent leave the battlefield — turning Void on at instant speed, for zero mana, in response to interaction.

The precise claim matters: the ability contains **no Void text**. Void is turned on by the *consequence*, not by the ability. And it is free in *mana*, not in *cards* — each activation eats a real permanent unless the fodder is a spent Virus Beetle, a self-exiling Timeline Culler, or a Nutrient Block that draws a card on its way to the graveyard. Before the grill repair, free fodder was 4 of 15 sacrificeable permanents; adding Nutrient Block ×2 raised it to **6 of 15**. That card-cost is also why the Zealot is a 1-of, not a 2-of.

### WHAT THE BATTLECRUISER DOES *NOT* DO HERE

Worth stating plainly, because the record originally overclaimed it: at 1–7 charge counters the Battlecruiser is an **artifact, not a creature**. It cannot attack, so its own fourth line — `Whenever this Spacecraft attacks, each opponent discards a card` — is **dead text** under this plan. It is purely a *converter* of externally supplied discards.

Reaching 8 is possible (the 11 creature copies total enough power), but it means tapping roughly three creatures that would otherwise be attacking alongside Alpharael — and Alpharael's halving does not care about board size. This build knowingly runs one of the card's four abilities and half of another. Its assembly weight was cut from 0.9 to 0.5 to reflect that.

### PLAY PATTERN NOTES

- **Sequence the Battlecruiser before the Beetles.** A Virus Beetle played before the Spacecraft has a counter on it is worth 0 life instead of 3. Station first, discard second.
- **Void is checked on resolution, not on declaration.** If the opponent kills your attacker in response to Alpharael's trigger, that death *is* the Void event — the trigger still resolves. This makes the critical attack turn unusually hard to fizzle.
- **Temporal Intervention is proactive, not reactive.** Black has no counterspell here. Against a known removal spell, strip it before it can be cast; you choose the card, not at random.
- **Budget the life.** Timeline Culler charges 2 per recursion, Decode Transmissions 2 per cast, Elegy Acolyte 1 per combat draw. Elegy's `Lifelink`, Dubious Delicacy's `You gain 3 life` and Nutrient Block ×2 are the offset — this deck can lose to its own value engine.
- **Embrace Oblivion is not a turn-1 play.** `As an additional cost to cast this spell, sacrifice an artifact or creature` makes it uncastable on an empty board, despite the `{B}` price tag. Nutrient Block at `{1}` is the actual turn-1 deploy.

### THE TENSION THIS BUILD DELIBERATELY DOES NOT RESOLVE

`gas-out` and `raced` are in direct conflict here. The deck's answer to running out of cards *is* life-cost card draw — Decode Transmissions, Timeline Culler's recursion, Elegy Acolyte's combat draw. Every one of those makes the racing problem worse. Mitigating the race properly would mean cutting the engine that makes the deck function at all.

This build resolves the tension toward attrition and says so in the failure-mode record rather than pretending both are covered. The grill repair helped on both axes at once: Swarm Culler ×2 and Nutrient Block ×2 replaced life-cost draw with **cost-free** draw (`If you do, draw a card` on a sacrifice; `When this artifact is put into a graveyard from the battlefield, draw a card`), which is why the card-positive count of 6 of 23 is now true rather than asserted. The sideboard covers the rest: Hullcarver ×2 — the only one-mana creature in mono-black, and deathtouch trades with anything — and Depressurize ×2 for instant-speed answers to cheap aggressive starts.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:5  2:5  3:7  4:5  5:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 3.7: Entropic Battlecruiser@0.5, Susurian Voidborn@0.5, Susurian Voidborn@0.5, Decode Transmissions@0.4, Decode Transmissions@0.4, Dubious Delicacy@0.4) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 12: Nutrient Block@0.9, Nutrient Block@0.9, Umbral Collar Zealot@0.8, Swarm Culler@0.8, Swarm Culler@0.8, Embrace Oblivion@0.7, Embrace Oblivion@0.7, Dubious Delicacy@0.7, Gravkill@0.6, Virus Beetle@0.4, Virus Beetle@0.4, Tragic Trajectory@0.3) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 69%  T2 95%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Zero Point Ballad is black's only sweeper and this deck cannot run it: 8 of its 11 creature cards have toughness 2 or less, so at any relevant X it destroys more of its own board than the opponent's. The deck instead trades one-for-one at one mana (Tragic Trajectory, Embrace Oblivion) and closes on a trigger that is indifferent to board size — Alpharael's halving does not care how many creatures the opponent controls.
  OK        single_large_threat: Gravkill, Tragic Trajectory, Embrace Oblivion, Dubious Delicacy
  CONCEDED  noncreature_permanents: No mainboard answer to a noncreature permanent that is not a Spacecraft. Gravkill and Embrace Oblivion both read 'creature or Spacecraft', reaching 22 of the cube's 74 artifacts and none of its 16 enchantments. The dossier's artifact_answers census reports ZERO black cards in the entire cube, so this is a colour-level gap rather than a build choice. Thaumaton Torpedo is the only card that covers the class and it is in the sideboard, where its true {6} activation cost (the {3} discount requires attacking with a Spacecraft, which this build's Battlecruiser cannot do) is payable in a matchup that warrants it rather than dead in every other.
  CONCEDED  stack: Black has no counterspell in this cube. Temporal Intervention ('Target opponent reveals their hand. You choose a nonland card from it. That player discards that card.') strips the answer before it can be cast, and at {B} with Void live it is cheap enough to do so proactively. Real stack interaction would require abandoning mono-black against a fixing census reporting 0 untapped-capable duals for every pair.
  OK        graveyard: Timeline Culler
```

- curve (Midrange): PASS with zero flags. avg MV 2.65, distribution 1:5 2:5 3:7 4:5 5:1. The gate genuinely ran — the Challenger independently verified that 'Midrange' matches a CURVE_BANDS key.

- assembly: PASS at thesis turn 8 (payoff p=0.77, enabler p=1.00). The payoff weights were LOWERED during the grill, not raised: Entropic Battlecruiser 0.9 -> 0.5 after the Challenger showed its own attack-discard clause is dead below the 8+ threshold. The gate still passes with the honest weight.

- assembly enabler roster: every one of the 16 copies is now individually named and weighted, in response to the grill finding that 5 copies previously carried an unexaminable weight of 1.0. Only Timeline Culler x2 and Susurian Voidborn x2 keep weight 1.0, and each states why: their warp cast satisfies Void with no board requirement at all.

- goldfish: PASS, no flag (87% keepable vs 80% required; 69% turn-1 play, the highest of the three builds).

- coverage: PASS with three written concessions and two answered classes.

- KILL ARITHMETIC CORRECTED: the pre-grill record asserted that Alpharael's halving 'never reaches zero'. It does — 20/10/5/2/1/0 across five Void-active attacks, because at 1 life ceil(1/2)=1. The error was tracking the amount lost rather than the amount remaining. This strengthens the deck rather than weakening it, and Alpharael's full payoff weight of 1.0 is now defensible on oracle grounds rather than in spite of them.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Timeline Culler is the specific flood outlet: 'You may cast this card from your graveyard using its warp ability. Warp—{B}, Pay 2 life' means a surplus land always converts into a hasty 2/2 and a live Void switch, every turn, for one mana, from the graveyard. Alongside it: Decode Transmissions x2 ('you draw two cards'), Swarm Culler x2 (draw on each sacrifice), Nutrient Block x2 (draw when it hits the graveyard), Elegy Acolyte (draws on every combat-damage turn) and Umbral Collar Zealot's free repeatable surveil all convert surplus mana or surplus permanents into selection. |
| screw | mitigation | The goldfish check reports 87% keepable hands, 88% for 3 lands by turn 3, and a 69% turn-1 play — the highest of the three builds. 10 of 23 nonland cards cost 2 or less, and the deck's cheapest plays are its most important: Nutrient Block costs {1}, Timeline Culler and Susurian Voidborn warp for {B}, Tragic Trajectory costs {B}, and Umbral Collar Zealot and Virus Beetle cost {1}{B}. Noted from the grill: Embrace Oblivion is NOT a keepable one-mana play, because 'As an additional cost to cast this spell, sacrifice an artifact or creature' makes it uncastable on an empty board. |
| decapitation | mitigation | Alpharael is a mythic capped at one copy and carries 'Ward—Discard a card at random', which taxes every targeted answer. Beyond that the payoff role is plural and mainboard: the structural gate counts 7 payoff copies at 3.7 effective — Entropic Battlecruiser at 0.5, Susurian Voidborn x2 at 0.5, Decode Transmissions x2 at 0.4, Dubious Delicacy at 0.4 — for p=0.77. The deck does not require Alpharael: three Void-active attacks leave the opponent at 2, and this list carries 7 points of Battlecruiser-independent direct damage (Decode Transmissions x2 at 2 each with Void, Dubious Delicacy at 3) that can close from there without any attack at all. From the sideboard, Scrounge for Eternity x2 returns any creature or Spacecraft of mana value 5 or less from the graveyard TO THE BATTLEFIELD — Alpharael is mana value 5 and the Battlecruiser is 4. |
| gas-out | mitigation | Rewritten during the grill; the previous entry named a card that was not in the deck (Voidforged Titan) and claimed a card-positive count of 6 when only 3 copies carried the tag. Both defects are now fixed with cards rather than prose. Card-positive or self-replacing copies: 6 of 23 nonland cards — Decode Transmissions x2 (Cards: Net-Positive, two cards each), Swarm Culler x2 ('Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card'), and Nutrient Block x2 ('When this artifact is put into a graveyard from the battlefield, draw a card'). On top of that, Timeline Culler is a card the deck never spends: 'You may cast this card from your graveyard using its warp ability' means an empty hand still produces a threat and a Void switch every turn for {B} and 2 life, and Elegy Acolyte draws on every combat-damage turn. |
| raced | accepted | The deck's own engine costs it life — Timeline Culler charges 2 per recursion, Decode Transmissions 2 per cast, Elegy Acolyte 1 per combat draw. Against the cube's fastest clocks that self-damage is real and the deck can lose to its own value engine. Mitigating properly would mean cutting the life-cost card draw, which IS the gas-out answer above: the two failure modes are in direct tension and this build resolves it toward attrition rather than pretending both are covered. What the deck accepts instead is partial: Elegy Acolyte's Lifelink, Dubious Delicacy's '{2}, {T}, Sacrifice this artifact: You gain 3 life', Nutrient Block x2's 3 life each, Swarm Culler's 2/4 flying body, and Susurian Voidborn's 'you gain 1 life' per death. From the sideboard, Hullcarver x2 ({B} deathtouch, the only one-mana creature in mono-black) blocks on turn 2 and trades with anything, and Depressurize x2 kills 104 of the pool's 139 creatures at instant speed. |
| disruption-fizzle | mitigation | The Void condition is checked on resolution and satisfied by a wide range of independent events — 16 enabler copies at 12.0 effective, and Umbral Collar Zealot's 'Sacrifice another creature or artifact: Surveil 1' carries no mana symbol and no {T}, so it fires for free at instant speed in response to interaction. If the opponent kills the creature whose death was going to enable Void, that death IS the Void event: Alpharael's trigger checks 'if a nonland permanent left the battlefield this turn' on resolution, so removal in response satisfies the condition rather than breaking it. The one genuine answer is removing Alpharael before it attacks, which Ward—Discard a card at random taxes. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Monoist Sentry | P1's best card is near-blank here. 'Defender' 4/1 is a Station battery, but this build only needs ONE counter on the Battlecruiser to switch on the 1+ drain, not eight — so its 4 power buys nothing, and a Defender cannot attack alongside Alpharael. |
| Bygone Colossus | Warp {3} for 9 power is the P1 threshold button. Here the 8+ threshold is not the plan, so its value collapses to 'a {3} Void turn-on that exiles itself' — a job Timeline Culler and Susurian Voidborn do for {B}. |
| Sunset Saboteur | 4/1 menace with Ward—Discard, a genuine discard trigger. Excluded on the rare/mythic budget: Alpharael (mythic), Entropic Battlecruiser (rare) and Elegy Acolyte (rare) are the load-bearing three, and Saboteur's mandatory 'Whenever this creature attacks, put a +1/+1 counter on target creature an opponent controls' IS live here, because unlike in P1 this deck actually attacks with its creatures. |
| Comet Crawler | 'Whenever this creature attacks, you may sacrifice another creature or artifact...' — a sacrifice outlet, but only on attack and only once per turn. Umbral Collar Zealot's outlet is free, repeatable, and works at instant speed on any turn. |
| Swarm Culler | 'Whenever this creature becomes tapped, you may sacrifice another creature or artifact. If you do, draw a card.' Genuinely strong, but at {3}{B} for a 2/4 it competes directly with the 4-drop slot where Alpharael's supporting removal needs to be. |
| Perigee Beckoner | Warp {1}{B} is a fine Void turn-on and 4/5 is a real body, but its ETB only matters with a second creature already deployed and the deck already runs cheaper Void enablers at {B}. |
| Sothera, the Supervoid | 'Whenever a creature you control dies, each opponent chooses a creature they control and exiles it.' This IS a sacrifice payoff and the deck does sacrifice creatures — but at {2}{B}{B} mythic it would take the last rare/mythic slot from Elegy Acolyte, whose Void clause both drains and manufactures the fodder Sothera would consume. |
| Chorale of the Void | 'Void — At the beginning of your end step, sacrifice this Aura unless a nonland permanent left the battlefield this turn or a spell was warped this turn.' The deck can meet that condition, but it is an Aura on a creature in a deck that sacrifices its own creatures, and it costs a rare slot. |
| Hylderblade | '+3/+1' on Alpharael is real, but Alpharael's damage is irrelevant — its Void trigger halves life regardless of power. Equip {4} for a stat boost the kill mechanism does not use. |
| Zero Point Ballad | 'Destroy all creatures with toughness X or less' is symmetric, and this deck's whole engine is small creatures (2/2s, 2/1s, 3/2) that it needs alive to sacrifice on its own terms. |
| Xu-Ifit, Osteoharmonist | '{T}: Return target creature card from your graveyard to the battlefield. It's a Skeleton in addition to its other types and HAS NO ABILITIES.' The recursion is real, but stripping abilities kills the point — a returned Susurian Voidborn or Elegy Acolyte comes back blank, so it recurs only bodies, which this deck already makes for free. |
| Voidforged Titan | 'Void — ... you draw a card and lose 1 life' is on-plan, but at {4}{B} for a 5/4 it is the deck's most expensive Void payoff, and Elegy Acolyte at {2}{B}{B} draws cards AND gains life AND makes fodder. |
| Scrounge for Eternity | Sacrifice-cost recursion that returns a creature or Spacecraft with MV 5 or less to the battlefield — this DOES hit Alpharael (MV 5) and the Battlecruiser (MV 4). Held as a sideboard consideration for removal-heavy matchups rather than maindecked, because the deck's engine already replaces its own bodies with tokens. |
| Dubious Delicacy | '{2}, {T}, Sacrifice this artifact: Target opponent loses 3 life' is reach and the ETB -3/-3 is removal. A genuine sideboard-consideration card; cut from the main only because the 3-drop slot is contested. |
| Anticausal Vestige | Warp {4} for 7 power with a leave-the-battlefield draw. Excluded on the rare budget and because this deck does not need 7 power for anything — it needs cheap, repeatable Void turn-ons. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.13 adj [MV 2.65 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard — every card verified present in the eoe working pool by exact name match
copy_limits: PASS — no common or uncommon exceeds 2 copies combined MB+SB; no rare or mythic exceeds 1
rare_mythic_budget: PASS — 3 of 6 used: Alpharael, Stonechosen (mythic, MB), Entropic Battlecruiser (rare, MB), Elegy Acolyte (rare, MB). All 10 sideboard cards are commons and uncommons.
colour_identity: PASS — all 20 distinct nonland cards usable in core_colors ['B'] via effective_cost.best_mode; every one returns mode 'cast'
basics: 17 Swamp — format-supplied, exempt from copy limits
deck_size: PASS — mainboard 40, sideboard 10
```
