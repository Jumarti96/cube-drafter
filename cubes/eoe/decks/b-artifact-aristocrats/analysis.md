---
deck_name: "b-artifact-aristocrats"
cube_id: "eoe"
cube_slug: "eoe"
colors: "B"
format: "40-card"
built_at: "2026-08-05T04:00:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  17x Swamp                    Basic land, taps for {B}
```

### CREATURES (16)

```
CMC  Card                        Qty   Color  Role                            Rar
  2  Beamsaw Prospector         x2    B      Enabler/Fodder                  C
  2  Lightless Evangel          x2    B      Payload/Payoff                  U
  2  Umbral Collar Zealot       x2    B      Engine/Outlet                   U
  2  Virus Beetle               x2    B      Interaction/Disruption          C
  3  Comet Crawler              x1    B      Payload/Payoff                  C
  3  Gravpack Monoist           x1    B      Enabler/Fodder                  C
  3  Susurian Voidborn          x2    B      Payload/Payoff                  U
  4  Elegy Acolyte              x1    B      Payload/Payoff                  R
  4  Gravblade Heavy            x1    B      Standalone Threat               C
  4  Swarm Culler               x2    B      Engine/Outlet                   C
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                        Qty   Color  Role                            Rar
  1  Embrace Oblivion           x1    B      Interaction/Disruption          C
  1  Tragic Trajectory          x2    B      Interaction/Disruption          U
  3  Decode Transmissions       x2    B      Infrastructure/Consistency      C
```

### OTHER SPELLS (2)

```
CMC  Card                        Qty   Color  Role                            Rar
  4  Entropic Battlecruiser     x1    B      Payload/Payoff                  R
  4  Sothera, the Supervoid     x1    B      Payload/Payoff                  M
```

## SIDEBOARD (10)

```
Card                        Qty   Color  Role / When to board in                                       Rar
Thaumaton Torpedo          x2    C      vs enchantments (16 cube cards) and the 52 non-Spacecraft ar  C
Depressurize               x2    B      vs go-wide and cheap aggressive starts                        C
Dauntless Scrapbot         x2    C      vs graveyard decks (31 cube cards / 12                        U
Dubious Delicacy           x2    B      vs decks with one key creature, and in any grind where the l  U
Vote Out                   x2    B      vs decks with one key creature or a flier the deck cannot bl  U
```

## ANALYSIS

### DECK IDENTITY

Mono-black artifact aristocrats. Susurian Voidborn drains 1 life every time a creature or artifact you control DIES, and Lightless Evangel puts a +1/+1 counter on itself every time you SACRIFICE one — note the wording differs, and Voidborn is the broader trigger. Because every sacrifice is also a death, a single free outlet advances the drain and the clock at once, which means the opponent cannot interact with one without feeding the other. Umbral Collar Zealot and Swarm Culler are those outlets, and Beamsaw Prospector, Gravpack Monoist and Virus Beetle are expendable fodder that replace themselves on death. Sothera, the Supervoid turns the same death trigger into a repeatable one-sided edict, which is how a clock with no evasion gets through. Entropic Battlecruiser is demoted here to a conditional finisher: below 8 charge counters it is a noncreature artifact that neither attacks nor blocks and only converts this list's 2 discard sources into 3 life each, but 8 counters are more reachable in THIS build than in either other because the deck runs 16 creature cards and Station has no once-per-turn limit.

### TWO CARDS, ONE EVENT

The kill is a pair of triggers that fire off the *same* action, which is what makes the deck hard to interact with:

- **Susurian Voidborn** — `Whenever this creature or another creature or artifact you control **dies**, target opponent loses 1 life and you gain 1 life.`
- **Lightless Evangel** — `Whenever you **sacrifice** another creature or artifact, put a +1/+1 counter on this creature.`

Note the wording difference, because it matters: Voidborn triggers on **dies** (combat trades, chump blocks, opposing removal, *and* sacrifices), while Evangel triggers only on **sacrifice**. Voidborn is strictly the broader trigger. Every sacrifice is a death, so one outlet activation fires both — the drain and the clock advance together.

The consequence: **the opponent cannot interact with the drain without feeding the clock, and cannot interact with the clock without feeding the drain.** Their removal spell aimed at a Lightless Evangel, answered by sacrificing it in response, is still a Voidborn drain.

### THE OUTLET IS THE DECK

> **Umbral Collar Zealot** — `Sacrifice another creature or artifact: Surveil 1.`

The dossier's structural census reports **5 sacrifice outlets in the 276-card pool, of which 2 are free**. Scanning oracle text directly, Umbral Collar Zealot is the only card in the cube with an activated ability whose entire cost is a sacrifice with **no mana and no `{T}`** — meaning unlimited activations per turn, at instant speed, from the turn it lands. (Memorial Vault is mana-free but requires `{T}`, so once per turn and never the turn it arrives, and it accepts artifacts only — which would exclude 14 of this deck's 16 creature copies.)

That single property is why it runs at 2 copies and why the whole build exists. Fodder available to it: **17 of 23 nonland copies**, plus every token the deck manufactures.

The self-grill found the deck was running only **one** of those two, at 2 copies, while omitting the other entirely. **Swarm Culler** is the second:

> `Flying / Whenever this creature becomes tapped, you may sacrifice another creature or artifact. **If you do, draw a card.**`

That single word — *draw* — changes the engine's economics. Before, every Zealot activation ate a real card. Now four of the deck's six sacrifice-consumer copies replace what they eat, and it's a **2/4 flier** in a cube whose evasion class is 56 cards (22.5%).

**The honest dependency:** Lightless Evangel keys on *sacrifice*, so its growth is bounded by the cards that can cause one — Umbral Collar Zealot ×2 and Swarm Culler ×2 (repeatable), Comet Crawler ×1 (per attack), Embrace Oblivion ×1 (once). That's **6 of 23 nonland copies, 4 of them repeatable** — up from 2 before the grill. Killing a Zealot still slows this deck more than killing an Evangel does.

### THE COUNT I GOT WRONG BY 3×

An earlier draft of this record claimed **"17 of 23 nonland cards"** were available as fodder. That's arithmetically right and analytically worthless: 10 of those 17 are Lightless Evangel, Susurian Voidborn, Comet Crawler, Elegy Acolyte, Umbral Collar Zealot and the Battlecruiser — **the engine itself**. Feeding them to your own outlet dismantles the thing being fed.

The true expendable set is **5 of 23**: Beamsaw Prospector ×2, Virus Beetle ×2, Gravpack Monoist ×1 — plus the death-tokens they leave (2 Landers, 1 Robot) and Elegy Acolyte's Void Robots. Against ~6 consumer copies, that was genuinely oversubscribed. The fix was on both sides: **cut consumers** (−1 Comet Crawler, −1 Embrace Oblivion) and **make the remaining ones card-neutral** (+2 Swarm Culler).

### FODDER THAT REPLACES ITSELF

| Card | Cost | What it leaves behind |
|---|---|---|
| Beamsaw Prospector ×2 | `{1}{B}` | `When this creature dies, create a Lander token` — an artifact, so itself legal fodder, *and* a land fetch |
| Gravpack Monoist ×1 | `{2}{B}` | `create a tapped 2/2 colorless Robot artifact creature token` — dies into a *bigger* body |
| Elegy Acolyte ×1 | `{2}{B}{B}` | A free 2/2 Robot at **every** end step Void was live |

**Correction worth stating:** an earlier draft of this record counted five self-replacing fodder cards by including Virus Beetle ×2. Virus Beetle has **no death trigger** — it pays for itself up front through its ETB discard. The honest count of fodder that leaves a body behind is **3 of 23**.

A second correction, on the mana base: the audit reports `accel_count: 2` from the Beamsaw Prospectors, and an earlier draft built a narrative on it ("this is why the land target adjusted downward"). That's a **tagger artifact**, not real acceleration — the creature must *die*, and only then does the Lander cost `{2}`, a tap, and its own sacrifice to fetch a **tapped** basic. The land recommendation is 17 with or without the accel reading, so the outcome stands and the reasoning is withdrawn.

### THE BLOCKER THE DECK ACTUALLY HAS

Lightless Evangel is a **ground creature with no evasion** — no trample, no menace, no flying — and the deck simultaneously sacrifices its other attackers. A single chump blocker holds it off indefinitely. The grill flagged this as unaddressed, and it was.

Two cards answer it now:

- **Sothera, the Supervoid** — `Whenever a creature you control dies, each opponent chooses a creature they control and exiles it.` A repeatable, one-sided edict on the deck's **most frequent event**. It removes the chump blocker as a byproduct of the engine already running. Its second clause is upside, not a drawback: `sacrifice Sothera, then put a creature card exiled with it onto the battlefield under your control with two additional +1/+1 counters on it`.
- **Gravblade Heavy** — `As long as you control an artifact, this creature gets +1/+0 and has deathtouch.` A **4/4 deathtouch** for `{3}{B}`, live off Virus Beetle ×2, the Landers, the Robots and the Battlecruiser itself.

Sothera was originally excluded on a *process* ground — it appeared in no sketch's keystone package. That isn't a card-quality argument, and the grill was right to reject it.

### WHAT THE BATTLECRUISER ACTUALLY DOES HERE — AND WHAT IT DOESN'T

This is the third and weakest of the three uses of the constraint card, and two claims made about it in an earlier draft of this analysis were **false**:

1. ~~"A 3/10 wall that blocks anything in the cube."~~ **It cannot block.** `It's an artifact creature at 8+` — below 8 charge counters a Spacecraft is a noncreature artifact. It does not block and it does not attack.
2. ~~"Nothing in the cube's 249 nonland cards has 10 power."~~ **False.** `Dawnsire, Sunstar Dreadnought` is 20/20 and `Extinguisher Battleship` is 10/10 — and Extinguisher Battleship at its own 5+ threshold is a 10/10 with flying and trample that beats a 3/10 outright. The defensible version: 2 of 249 nonland pool cards beat a 3/10 in combat, and both must be Stationed first.

The real case for the card here is the **8+ mode**, which is more reachable in this build than in either other one. The deck runs **16 creature cards** and Station has no once-per-turn limit, so a single main phase tapping Umbral Collar Zealot (3 power), Elegy Acolyte (4) and Comet Crawler (2) banks **9 counters**. At 8+ it is a flying deathtouch attacker dealing 3 combat damage plus 3 more from its own attack-trigger discard converting through the 1+ line — **6 per turn**.

Below 8, its only function is converting this list's 2 discard sources (Virus Beetle ×2) into 3 life each. **Ceiling: 6 life.**

### THE REMOVAL SUITE IS ALSO THE ENGINE

- **Embrace Oblivion** `{B}` — `As an additional cost to cast this spell, sacrifice an artifact or creature. Destroy target creature or Spacecraft.` One-mana unconditional removal whose "drawback" is a Voidborn drain and an Evangel counter. Uncastable on an empty board — that's the price.
- **Tragic Trajectory** `{B}` — `-2/-2` base, `-10/-10` with Void. Void here is a **sacrifice check**, and this deck sacrifices at will for free. Sacrifice a Lander in the pre-combat main, then cast Trajectory for `-10/-10`: total cost `{B}` plus a spare token, *and* the sacrifice drains 1 and grows the Evangel. This is the best interaction between the engine and the removal suite in the list.

**Void note:** the deck runs zero warp cards beyond Susurian Voidborn's own `Warp {B}`, so the "or a spell was warped this turn" half of Void is near-dead text. Void in this deck is a sacrifice check, full stop. Void-caring cards: Elegy Acolyte, Decode Transmissions ×2, Tragic Trajectory ×2 — **5 of 23 nonland copies.**

### HOW THIS ACTUALLY REACHES 20 — AND WHY IT ISN'T THE DRAIN

The grill did the arithmetic and it doesn't come out the way the archetype name suggests. At 1 life per death, one Susurian Voidborn needs **20 deaths**; two need **10**. With 5 expendable copies plus their tokens, the realistic count is **5–8 death events by turn 9** — so drain contributes roughly **5–10 of the 20**, not all of it.

**The kill is combat, accelerated by drain.** In order:

1. **Lightless Evangel** — a 2/2 that has watched six sacrifices attacks as an **8/8**.
2. **Sothera** clears the blocker that would otherwise stop it, on the same trigger.
3. **Comet Crawler** swings as a 4/3 lifelinker; **Elegy Acolyte** is a 4/4 lifelink drawing on every connect; **Gravblade Heavy** is a 4/4 deathtouch.
4. **Decode Transmissions ×2** adds 4 points that need no attack at all, and the Battlecruiser line adds up to 6.

The record originally framed this as "two cards working off the same event" producing the kill. The truer statement is narrower and still good: the two cards working off the same event mean **the opponent cannot interact with either half without feeding the other**, and combat closes.

### PLAY PATTERN NOTES

- **Hold the Zealot activation until it's needed.** It's instant-speed and free — using it in response to removal converts their card into two of your triggers. There's almost never a reason to activate on your own turn unless you're enabling Void for Tragic Trajectory or Hymn of the Faller.
- **Sequence Void before the payoff.** Sacrifice first, *then* cast Tragic Trajectory for `-10/-10` or Hymn of the Faller for two cards.
- **The Zealot cannot save itself.** Its cost reads `Sacrifice **another** creature or artifact`. Against removal aimed at the Zealot, Swarm Culler is the backup outlet.
- **Chump blocking is not a loss here.** Every blocked creature dying is a Voidborn drain, an Evangel counter, and — with Sothera out — an opposing creature exiled. Against a wide board this deck trades down on purpose.
- **Station off Swarm Culler.** Tapping Swarm Culler to put a charge counter on the Battlecruiser also fires its sacrifice-and-draw trigger. One action, three effects.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:8  3:6  4:6
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 7: Sothera, the Supervoid@0.8, Elegy Acolyte@0.6, Comet Crawler@0.6, Decode Transmissions@0.3, Decode Transmissions@0.3, Entropic Battlecruiser@0.4) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 9.9: Virus Beetle@0.9, Virus Beetle@0.9, Elegy Acolyte@0.6, Embrace Oblivion@0.5) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 50%  T2 96%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Sothera, the Supervoid, Gravblade Heavy, Tragic Trajectory
  OK        single_large_threat: Tragic Trajectory, Embrace Oblivion, Gravblade Heavy, Sothera, the Supervoid
  CONCEDED  noncreature_permanents: No mainboard answer to a noncreature permanent that is not a Spacecraft. Embrace Oblivion reads 'creature or Spacecraft', reaching 22 of the cube's 74 artifacts and none of its 16 enchantments — together 36% of the cube's permanents. The dossier's artifact_answers census reports ZERO black cards in the entire 276-card pool, so this is a colour-level gap rather than a build choice. Thaumaton Torpedo is the only card that covers the class and it sits in the sideboard, where its real cost ({1} to cast plus {6} to activate, because the {3} discount requires attacking with a Spacecraft) is payable in a matchup that warrants it rather than dead in every other.
  CONCEDED  stack: Black has no counterspell in this cube, and this build does not even run Temporal Intervention — its slots are committed to bodies that feed the sacrifice engine. The deck accepts that a key spell can be answered and relies on redundancy: both named halves of the kill run 2 copies each, and the structural gate counts 10 payoff copies at 7.0 effective, so no single answer stops the drain.
  CONCEDED  graveyard: The deck runs no mainboard recursion, so opposing graveyard hate is blank against it — it concedes the class by being immune to it rather than by lacking an answer. The cube's 31 graveyard-interaction cards are answered from the sideboard by Dauntless Scrapbot x2 ('exile each opponent's graveyard'), which is one-sided and doubles as a Lander-token fodder generator.
```

- curve (Midrange): PASS with zero flags. avg MV 2.65, distribution 1:3 2:8 3:6 4:6, nothing above mana value 4. The Challenger independently verified 'Midrange' matches a real CURVE_BANDS key, so the gate was armed.

- assembly: PASS at thesis turn 9 (payoff p=0.95, enabler p=0.99) — the highest of the three builds, and the only one that never required a thesis-turn revision. Both named halves of the kill run 2 copies.

- assembly enabler roster: re-declared after the grill showed the pre-repair count of 17 fodder cards wrongly treated 10 engine pieces as expendable. The honest expendable set is 5 of 23 plus tokens, and the roster now counts outlets and fodder separately with Embrace Oblivion at 0.5 because it CONSUMES fodder rather than supplying it.

- goldfish: PASS, no flag (87% keepable vs 80% required; 96% turn-2 play).

- coverage: PASS. wide_boards was upgraded from a written concession to an ANSWERED class by the grill repair — Sothera's repeatable one-sided edict plus Gravblade Heavy's 4/4 deathtouch plus Tragic Trajectory's Void -10/-10 now genuinely answer a wide board, which the pre-repair list could not do.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Both primary outlets cost zero mana — Umbral Collar Zealot's 'Sacrifice another creature or artifact: Surveil 1' and Swarm Culler's tap trigger — so flooding never stops the engine; the deck's central action is free. Decode Transmissions x2 draws two each, Swarm Culler x2 draws on every sacrifice, and Elegy Acolyte draws on every combat-damage turn. Corrected during the grill: the earlier claim that 'the Battlecruiser gives surplus mana a sink through Station' is oracle-false — Station's cost is 'Tap another creature you control' and contains no mana at all. |
| screw | mitigation | avg MV 2.65 with nothing above mana value 4, and 11 of 23 nonland copies costing 2 or less. The goldfish check reports 87% keepable hands, 88% for 3 lands by turn 3, and a 96% chance of a turn-2 play. Two-land hands are fully functional: Lightless Evangel, Umbral Collar Zealot, Beamsaw Prospector and Virus Beetle are all castable, and the engine's core interaction — sacrifice a Beamsaw Prospector to a Zealot — costs {1}{B} plus {1}{B}. |
| decapitation | mitigation | No singleton linchpin. Both named halves of the kill run 2 copies each (Lightless Evangel x2, Susurian Voidborn x2) and the structural gate counts 10 payoff copies at 7.0 effective for p=0.95, the highest of the three builds. Killing one Evangel does not stop the drain; killing one Voidborn does not stop the clock. Only 3 of the 6 rare/mythic slots are used precisely because nothing here needs to be a bomb. |
| gas-out | mitigation | Fodder that replaces itself plus outlets that replace the card they eat. Beamsaw Prospector x2: 'When this creature dies, create a Lander token' — the fodder becomes new fodder AND a land. Gravpack Monoist: dies into a 2/2 Robot. Elegy Acolyte's Void clause makes a free 2/2 Robot at the beginning of every end step a permanent left the battlefield, which here is most turns. Card-positive effects are now 4 of 23 nonland copies (Swarm Culler x2 'If you do, draw a card', Decode Transmissions x2 'you draw two cards'), up from 2 before the grill repair, plus Elegy Acolyte's combat draw. The engine keeps producing sacrifice triggers from a hand of zero cards. |
| raced | mitigation | Rewritten during the grill; the previous entry's only large-attacker answer was a claim that the Battlecruiser is 'a 3/10 blocker', which its own reminder text refutes — below 8 counters it is not a creature and cannot block at all. Real answers now in the mainboard: Gravblade Heavy is a 4/4 DEATHTOUCH blocker while you control an artifact — 3 of 23 nonland copies ARE artifacts on their own (Virus Beetle x2, Entropic Battlecruiser) and 3 more make artifact tokens on death (Beamsaw Prospector x2 makes Landers, Gravpack Monoist makes a Robot), plus Elegy Acolyte's Void Robots — so the condition is live from turn 2 onward and it stops any attacker profitably; Swarm Culler x2 is a 2/4 FLYING blocker against a cube whose evasion class is 56 cards / 22.5%; Comet Crawler and Elegy Acolyte both have Lifelink; Susurian Voidborn x2 gain 1 life on every death. Chump blocking is free value here rather than a loss, because each blocked creature dying is a Voidborn drain and, with Sothera out, an opposing creature exiled. From the sideboard, Depressurize x2 adds instant-speed removal and Dubious Delicacy x2 adds flash removal plus 3 life. |
| disruption-fizzle | mitigation | There is no critical turn to disrupt. The kill is incremental — 1 life per death, 1 counter per sacrifice — accumulated across many turns and many permanents rather than assembled on one turn. Umbral Collar Zealot's and Swarm Culler's outlets are free, so a removal spell aimed at any creature can be answered by sacrificing it in response, still collecting the Voidborn drain, the Evangel counter and, with Sothera out, an opposing creature exiled. One honest limit recorded during the grill: Umbral Collar Zealot reads 'Sacrifice ANOTHER creature or artifact', so it cannot save itself from targeted removal. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Alpharael, Stonechosen | The payoff of the Void Drain pipeline built in parallel from this same pool. Its halving trigger ignores blockers, which genuinely answers this deck's evasion problem — but importing it would collapse two of the three commissioned builds into one deck wearing two names. Sothera solves the same problem on-archetype. |
| Insatiable Skittermaw | 'Menace / Void — ... put a +1/+1 counter on this creature.' A second growing threat, but it grows once per turn at most while Lightless Evangel grows once per SACRIFICE — and this deck sacrifices multiple times a turn. Cut during the grill repair as the lowest-weight payoff at 0.5. |
| Faller's Faithful | 'destroy up to one other target creature. If that creature wasn't dealt damage this turn, its controller draws two cards' — hands the opponent two cards. Embrace Oblivion removes without the drawback for one mana. Cut during the grill repair. |
| Hymn of the Faller | 'Surveil 1, then you draw a card and lose 1 life' plus a Void extra card. Replaced by Decode Transmissions, which draws two and moves the life loss onto the opponent instead of onto you — a real difference in a deck whose win condition is opponent life loss. |
| Gravkill | 'Exile target creature or Spacecraft.' Unconditional and clean, but at {3}{B} it is the most expensive card the deck would run, and the repaired list answers large threats with Gravblade Heavy's deathtouch, Sothera's edict and Tragic Trajectory's Void -10/-10 instead. Vote Out covers it from the sideboard at an effective {B} via Convoke. |
| Nutrient Block | 'Indestructible / {2}, {T}, Sacrifice this artifact: You gain 3 life. / When this artifact is put into a graveyard from the battlefield, draw a card.' Excellent fodder, but the grill showed this deck's problem was sacrifice CONSUMERS exceeding fodder, not a fodder shortage — and as a sideboard card it answers no threat class in the dossier profile. Replaced by Vote Out. |
| Timeline Culler | 'Warp—{B}, Pay 2 life', recastable from the graveyard — sacrifice it, then warp it back for a repeatable Evangel counter and Voidborn drain from an empty hand. The strongest remaining swap. Excluded because at {B}{B} it competes for the same turn-2 slot as Lightless Evangel and Umbral Collar Zealot, both engine pieces this deck cannot afford to deploy late, and it costs 1 net life per loop alongside Decode Transmissions x2 at 2 life each. |
| Scrounge for Eternity | 'As an additional cost, sacrifice an artifact or creature. / Return target creature or Spacecraft card with mana value 5 or less from your graveyard to the battlefield. Then create a Lander token.' — four engine events on one card. A genuine iteration candidate; the grill repair had already spent six slots on the evasion and blocker problems ranked higher. |
| Xu-Ifit, Osteoharmonist | '{T}: Return target creature card from your graveyard to the battlefield. It's a Skeleton ... and HAS NO ABILITIES.' 11 of this deck's 16 creature copies are played for their text, so ability-stripped recursion returns blank bodies of cards the deck already makes as tokens for free. |
| Monoist Sentry | 'Defender' 4/1 for {B}. A 1-mana artifact creature that kills any 4-toughness attacker on the block is a real sideboard consideration, but Gravblade Heavy survives the block rather than trading and blocks profitably every turn instead of once. |
| Hullcarver | {B} 1/1 'Deathtouch' — the cheapest artifact body in the pool and a fine blocker. Gravblade Heavy fills the same role at 4/4 rather than 1/1, and the deck's constraint was consumers exceeding fodder, not a shortage of cheap bodies. |
| Bygone Colossus | Warp {3} for 9 power matters only when chasing the 8+ Station threshold as the primary plan, which this build does not. As fodder it is a 3-mana sacrifice the deck gets for one. |
| Zero Point Ballad | 'Destroy all creatures with toughness X or less.' 12 of this deck's 16 creature copies have toughness 3 or less; at any X that matters it kills more of its own board than the opponent's. |
| Chorale of the Void | A powerful reanimation Aura, but it enchants a creature in a deck that sacrifices its own creatures, and its Void clause makes it sacrifice itself on any turn the deck fails to make a permanent leave. |
| Susur Secundi, Void Altar | '{1}{B}, {T}, Pay 2 life, Sacrifice a creature: Draw cards equal to the sacrificed creature's power' is a real outlet on a land, but it reads 'This land enters tapped' and needs 12+ charge counters before the ability switches on — a threshold this build never approaches. |
| Monoist Circuit-Feeder | Its ETB scales with 'the number of artifacts you control', and this deck's artifacts are deliberately short-lived fodder — the board count when a 6-drop resolves is typically 2-3. |
| Thrumming Hivepool | 'Affinity for Slivers' with 0 Slivers in the list; a flat {6} for a blank static ability. |
| Requiem Monolith | 'That creature's controller may have this artifact deal 1 damage to it' — the opponent decides whether the draw clause happens. |
| Anticausal Vestige | Warp {4} for a 7/5 with a leave-the-battlefield draw. Real, but 7 power is not something this build converts into anything, and it would take a third of the rare/mythic budget. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.13 adj [MV 2.65 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube_mainboard — every card verified present in the eoe working pool by exact name match
copy_limits: PASS — no common or uncommon exceeds 2 copies combined MB+SB; no rare or mythic exceeds 1
rare_mythic_budget: PASS — 3 of 6 used: Entropic Battlecruiser (rare, MB), Elegy Acolyte (rare, MB), Sothera, the Supervoid (mythic, MB). All 10 sideboard cards are commons and uncommons.
colour_identity: PASS — all 20 distinct nonland cards usable in core_colors ['B'] via effective_cost.best_mode; every one returns mode 'cast'
basics: 17 Swamp — format-supplied, exempt from copy limits
deck_size: PASS — mainboard 40, sideboard 10
```
