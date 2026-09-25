---
deck_name: "w-u-tap-trigger-tempo"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WU"
format: "40-card"
built_at: "2026-08-03T00:16:55Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
8x Island                           
4x Plains                           
2x Idyllic Beachfront               the only WU dual in the pool (enters tapped)
1x Command Bridge                   any colour; its 'tap an untapped permanent' clause is a COST here, not upside
1x Secluded Starforge               enters untapped; taps X artifacts as a repeatable multi-trigger outlet
```

### CREATURES (10)

```
CMC  Card                             Qty  Col Role                                                               Rar
---------------------------------------------------------------------------------------------------------------------
  2  Mechan Navigator                 x2   U   Engine — loots whenever it becomes tapped, i.e. on every Station   U
  2  Mechan Shieldmate                x2   U   Engine — 3 power for two mana is the best Station battery in blue; C
  2  Starfighter Pilot                x2   W   Engine — surveils whenever it becomes tapped                       C
  2  Sunstar Chaplain                 x1   W   Engine — the deck's only +1/+1 counter source, and an instant-spee R
  3  Nanoform Sentinel                x2   U   Engine — 3-power artifact creature; untaps a body that already Sta C
  3  Virulent Silencer                x1   C   Threat/Payoff — 2 poison per connecting nontoken artifact creature U
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                             Qty  Col Role                                                               Rar
---------------------------------------------------------------------------------------------------------------------
  1  Reroute Systems                  x2   W   Interaction — the deck's REAL protection: indestructible at instan U
  2  Divert Disaster                  x2   U   Interaction — the stack answer; if they pay the {2}, we get a Land C
  2  Mental Modulation                x2   U   Interaction — {U} on our turn: taps a creature (ours or theirs) AN C
```

### OTHER SPELLS (8)

```
CMC  Card                             Qty  Col Role                                                               Rar
---------------------------------------------------------------------------------------------------------------------
  1  Cryoshatter                      x2   U   Interaction — 1-mana Pacifism that upgrades to a kill when the cre C
  1  Hardlight Containment            x1   W   Interaction — 1-mana exile; 13 of 24 artifact hosts, though killin R
  1  Synthesizer Labship              x1   U   Threat/Payoff — 1-mana Spacecraft; 2+ animates an artifact into a  R
  2  Lumen-Class Frigate              x1   W   Threat/Payoff — 2+ anthem takes both fliers to 3/3; NOT a blocker, R
  2  Wurmwall Sweeper                 x2   C   Threat/Payoff — the realistic clock: 4+ makes it a 2/2 flier; ETB  C
  3  Tezzeret, Cruel Captain          x1   C   Engine — a FREE untap every turn with no once-per-turn cap, and a  M
```

## SIDEBOARD (10)

```
Card                             Qty  Col Role / When to board in                                                Rar
--------------------------------------------------------------------------------------------------------------------
Annul                            x2   U   Hate — artifacts and enchantments | vs the 74-card artifact class and  U
Focus Fire                       x1   W   Flex — the raced answer | vs fast aggro; X is 2 plus 15 creatures/Spac C
Chrome Companion                 x1   C   Hate — graveyard | vs the 31-card graveyard class; repeatable, and a b C
Desculpting Blast                x1   U   Flex — tempo bounce | vs a single large threat; makes a flying blocker U
Banishing Light                  x2   W   Hate — noncreature permanents | vs resolved enchantments and bombs tha C
Emergency Eject                  x2   W   Hate — noncreature permanents | instant-speed answer to any nonland pe U
Radiant Strike                   x1   W   Hate — artifacts | vs artifact decks; also kills a tapped creature     C
```

## ANALYSIS

### DECK IDENTITY

A WU tempo deck in which tapping your own creatures is the engine, the removal trigger, and the clock at once. Station is a cost that taps a creature WITHOUT using that creature's {T} symbol, so summoning-sick bodies qualify - it is a free, repeatable, sorcery-speed tap button. Every tap fires Mechan Navigator (loot), Nanoform Sentinel (untap another permanent, worth exactly one extra Station per turn), Starfighter Pilot (surveil 1) and banks charge counters. The same tapping arms this pool's tapped-matters removal: Cryoshatter destroys the creature it enchants the moment that creature becomes tapped. The honest problem with the plan is that the fliers it produces are 2/2s, so the damage clock is slow; Virulent Silencer fixes that by converting each connection into two poison counters, and 10 poison arrives in three connects where 20 damage needs five. Tezzeret, Cruel Captain supplies a free untap every turn with no once-per-turn cap. Divert Disaster is the only stack interaction available to any build in this series.

### THE CLOCK WAS THE PROBLEM, AND POISON IS THE FIX

The grill's hardest finding was that this deck's `thesis_turn` had no derivation behind it. The structural goldfish check models keepable hands, turn-3 lands and play-by-turn — it has **no damage model at all**, so its PASS was never evidence for a clock.

Counted from oracle text, the pre-repair kill was:

| Source | Damage |
|---|---|
| Wurmwall Sweeper at 4+ | 2 (flying) |
| Second Wurmwall Sweeper at 4+ | 2 (flying) |
| Synthesizer Labship animation | 2 (flying), **one per combat** |
| Lumen-Class Frigate 2+ | +1 each |

That is 4–6 evasive damage a turn, starting around turn 6 — lethal around **turn 11–13**, not 8. And there is a structural tax nobody had stated: **Station's cost is *"Tap another creature you control"*, so every creature spent on Station is a creature that cannot attack that turn.** The deck converts creature power into thresholds at a loss.

**Virulent Silencer** changes the finish line instead of the speed: *"Whenever a nontoken artifact creature you control deals combat damage to a player, that player gets two poison counters."* **9 of 24** nonland cards can be a connecting nontoken artifact creature. Two online Sweepers now deal 4 damage **and 4 poison** per turn — and **10 poison arrives in three connects where 20 damage needs five.**

The thesis turn still moved from 8 to 9. That is the honest number.

### TEZZERET IS NANOFORM SENTINEL WITHOUT THE CAP

Nanoform Sentinel's untap is real but bounded: *"Whenever this creature becomes tapped, untap another target permanent. **This ability triggers only once each turn.**"* One extra Station per turn, and only if the Sentinel itself gets tapped first.

Tezzeret, Cruel Captain does the same job with none of the conditions:

> *"Whenever an artifact you control enters, put a loyalty counter on Tezzeret. / **0: Untap target artifact or creature. If it's an artifact creature, put a +1/+1 counter on it.**"*

Free, every turn, no cap, and from a permanent that creature removal cannot touch. **13 of 24** nonland cards are artifacts, so the loyalty trigger fires on more than half the deck's draws, and **7 of 24** are artifact *creatures* that also collect a +1/+1 counter.

That last clause matters more than it looks: before the repair, **Sunstar Chaplain was the only +1/+1 counter source in the entire deck**, and its tap ability — the thing that arms Cryoshatter — costs a counter it can only make once per turn, at end step, *after* the window it was supposed to fund. Tezzeret feeds it independently.

### THE 9-COUNTER LINE, VERIFIED

Station is sorcery-speed but carries **no** once-per-turn clause of its own. So with a Spacecraft, a Nanoform Sentinel, and any 3-power body (Mechan Shieldmate, another Sentinel, Sunstar Chaplain):

```
Precombat main:
  Station the 3-power creature      -> +3 counters
  Station the Sentinel itself       -> +3 counters, its trigger fires
    trigger: untap the 3-power creature   ("only once each turn" spent here)
  Station the 3-power creature again -> +3 counters
  = 9 counters from two creatures
```

The Challenger walked this step by step and confirmed it. Two caveats it added, both fair:

- Wurmwall Sweeper's **only** tier is `4+`. Counters 5 through 9 on a single Sweeper do **nothing**. The line is worth making across two Spacecraft, or toward Synthesizer Labship's `9+ | Flying, vigilance` (a 4/4 flier).
- Every creature in the line ends **tapped**, so none of them attacks that turn. Thresholds and damage compete for the same bodies.

### WHAT THE GRILL CHANGED

Nine BLOCKING findings. Three were oracle misreadings propping up structural claims, and those are the ones worth recording:

| Claim I made | What the oracle text actually says |
|---|---|
| "Lumen-Class Frigate (3/5)" blocks against wide boards | It is an *Artifact — Spacecraft*, **not a creature until 12+**. It cannot block on exactly the turns the concession covers |
| "Station is a cost and cannot be responded to" | Station is an **activated ability** — colon, uses the stack. The tap cost cannot be undone, but the counters arrive only on resolution |
| Command Bridge's "tap an untapped permanent" clause is upside — it fires a Navigator trigger | **Inverted.** Station already taps for free *and* banks counters, so the Bridge yields zero incremental triggers and forfeits 2–3 counters. One copy cut for Secluded Starforge, which enters untapped |

And three were counts: Hardlight Containment's hosts are **13 of 24** (I wrote 9, then 11 in the same sentence, omitting Nanoform Sentinel); Cryoshatter's on-demand enablers are **3 of 24, only 2 unconditional** (Cryogen Relic needs an *already-tapped* target, so it can't start the chain); and both slot-allocation figures were wrong in opposite directions.

The deck's real protection turned out to be a card already in it and never cited: **Reroute Systems**, *"Target artifact or creature gains indestructible until end of turn"* — which covers a below-threshold Spacecraft for one mana. It went to two copies.

The approval round then caught two knock-on errors the repairs themselves created: raising Reroute Systems to ×2 pushed **Interaction to 37.5%**, a third undeclared band overrun, and cutting Cryogen Relic ×2 moved Hardlight Containment's host count from 13 down to **11 of 24**. Both are now declared. That is the cost of repairing a list mid-audit — every count whose denominator moved has to be recomputed, not carried forward.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (tempo):  [PASS]
  MV distribution (24 nonland):  1:6  2:14  3:4
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.15: Synthesizer Labship@0.9, Wurmwall Sweeper@0.8, Wurmwall Sweeper@0.8, Lumen-Class Frigate@0.85, Virulent Silencer@0.8) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 10.9: Tezzeret, Cruel Captain@0.9) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 70%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in W or U in this pool that this curve can cast. The deck answers width one card at a time with Cryoshatter x2, Mental Modulation x2 and Divert Disaster x2, and blocks with Mechan Shieldmate x2 (3/2 defender), Nanoform Sentinel x2 (3/2) and Virulent Silencer (2/3). Lumen-Class Frigate is NOT among the blockers: it is an Artifact - Spacecraft and does not become a creature until 12+ charge counters, which no line here reaches.
  OK        single_large_threat: Hardlight Containment, Cryoshatter, Divert Disaster
  CONCEDED  noncreature_permanents: No mainboard answer to a resolved noncreature permanent - Divert Disaster answers it on the stack instead, which is the tempo shell's preferred timing. Annul x2, Banishing Light x2 and Emergency Eject x2 board in against artifact and enchantment decks.
  OK        stack: Divert Disaster
  CONCEDED  graveyard: The cube's graveyard class is 12.5% density and mostly value recursion rather than a combo kill, so the mainboard spends no slot on it; Chrome Companion ('{2}, {T}: Put target card from a graveyard on the bottom of its owner's library') boards in as repeatable hate, and it is a becomes-tapped body in the main plan too.
```

- No WARN flags were raised on the final list: curve, assembly, goldfish and coverage all returned PASS.
- THREE slot bands are exceeded and all three are declared with grounds in slot_allocation: Interaction 37.5% vs 25-35%, Engine & Infrastructure 41.7% vs 20-30%, Threats/Payoffs 20.8% vs 10-18%. The Interaction overrun is caused by the second Reroute Systems, which the grill required to clear an UNSATISFIED disruption-fizzle mode - reversing it to satisfy a band would be the wrong trade. The Engine overrun is structural: in this pipeline the engine cards ARE the Station fodder. All three figures were restated after the grill found the originals were miscounts.
- The thesis turn was REVISED from 8 to 9 rather than defended. The structural goldfish check models only keepable rate, turn-3 lands and play-by-turn - it contains no damage model, so its PASS was never evidence for the clock. Both grill agents independently computed that a board of 2/2 fliers reaches lethal damage around turn 11-13, not turn 8. The repair does both things the gate allows: it adds a functional payoff (Virulent Silencer, converting each connection into 2 poison, so 10 poison lands in 3 connects where 20 damage needs 5) AND states the revised turn openly. Standing caveat the Challenger raised and I accept: Virulent Silencer is a 1-of, so the poison clock is present in roughly 40% of games by the thesis turn.
- This is the only build in the series whose coverage declaration is not forced to concede the stack: Divert Disaster x2 is real, if soft, stack interaction.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Starfighter Pilot x2 surveils on every tap and Wurmwall Sweeper x2 surveil 2 on entry, binning surplus lands; Mechan Navigator x2 loots on every tap - 8 filtering effects across 24 nonland cards. Secluded Starforge's '{2}, {T}, Tap X untapped artifacts you control: Target creature gets +X/+0' is a repeatable mana sink that also fires the becomes-tapped triggers on however many artifact creatures it taps. Tezzeret's 0 ability costs nothing and does something every turn regardless of mana. |
| screw | mitigation | All 24 nonland cards cost MV <= 3 and 20 of 24 cost MV <= 2, and NO card costs more than one coloured pip, so a 2-land hand deploys on curve and colour screw needs a specific two-land failure rather than a general one. The goldfish check reports 84% keepable and 3 lands by turn 3 in 84% of games. Honest limit: 3 of the 16 lands still enter tapped (Idyllic Beachfront x2, Command Bridge x1), so the effective curve is slower than the mana values suggest - the cost of the thinnest fixing in the series, reduced from 4 tapped lands by the Secluded Starforge swap. |
| decapitation | mitigation | There is no single key card. The becomes-tapped engine has 6 copies across three names (Mechan Navigator x2, Nanoform Sentinel x2, Starfighter Pilot x2), the Spacecraft plan has 5 copies across 4 names, and Tezzeret provides the untap effect from a permanent that creature removal cannot touch. Charge counters already banked stay on the Spacecraft, so removing the creature that Stationed refunds nothing. |
| gas-out | mitigation | 8 of 24 nonland cards draw or filter - Mechan Navigator x2 (loot on every Station), Starfighter Pilot x2 (surveil on every Station), Wurmwall Sweeper x2 (surveil 2 on entry), Mental Modulation x2 (replaces itself while tapping). The honest limit the grill forced into the open: only 1 of those is NET card-positive. This is card QUALITY and selection, not card advantage, and against a dedicated draw engine the deck runs out first. What it substitutes is answer density - 8 interaction cards in 24 - and a Tezzeret whose 0 ability generates value from an empty hand. |
| raced | accepted | At 1.92 avg MV with 3 of 16 lands entering tapped, this deck is a full turn behind the two aggro builds in the series and its damage clock is 2/2 fliers. Mitigating would mean cutting the interaction suite for bodies, which is exactly the D1 build the shape judge rejected for deleting the counterspell half of the thesis. The concession is deliberate, and the repair addressed it two ways rather than one: Virulent Silencer changes the win condition from 20 damage to 10 poison, and Focus Fire ('X is 2 plus the number of creatures and/or Spacecraft you control' - 15 of 24 qualify) is now the board's dedicated answer to a fast clock, a slot the pre-grill sideboard spent 0 of 10 cards on. |
| disruption-fizzle | mitigation | REWRITTEN after the grill: the previous entry rested on 'Station is a cost and cannot be responded to', which is oracle-false. Station is written 'Tap another creature you control: Put charge counters equal to its power on this Spacecraft' - a colon, i.e. an ACTIVATED ABILITY that uses the stack. The tap cost cannot be undone, but the counters arrive only on resolution, so destroying the Spacecraft in response means they never exist. The real protection is Reroute Systems x2 - 'Target artifact or creature gains indestructible until end of turn' - which covers a below-threshold Spacecraft (an artifact) at instant speed for {W}. Hardlight Containment's ward {1} is a tax on top of that, and Divert Disaster x2 is a soft counter the opponent can pay through. Once the counters HAVE resolved they are permanent, and 5 Spacecraft copies across 4 names carry the same plan. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Pulsar Squadron Ace (U) | EXCLUDED ON A MISCOUNT, corrected here. 'Look at the top five cards of your library. You may reveal a Spacecraft card from among them and put it into your hand' - I first rejected it saying the deck had only 4 Spacecraft; it has 5 copies, so the hit rate is 50.7%, not 42.7%, and the miss mode is a 2/2 carrying a +1/+1 counter. It stays out only because the same MV-2 slot went to Virulent Silencer and Tezzeret. THE FIRST CARD TO ADD BACK when iterating. |
| Uthros Scanship (U) | CUT DURING THE GRILL. 'ETB draw two cards, then discard a card' is real, but it was the deck's only MV-4 card, its 8+ tier was already discounted to 0.6 as unreachable, and it never becomes a creature - so it contributed nothing to a clock the grill showed was far too slow. |
| Cryogen Relic (C) | CUT DURING THE GRILL x2. 'When this artifact enters or leaves the battlefield, draw a card' is two cards per card, but it is not a creature, so it is not Station fodder; its stun mode needs an ALREADY-TAPPED creature so it cannot start a Cryoshatter chain; and enchanting one with Hardlight Containment then sacrificing it hands the exiled creature back. |
| Quantum Riddler (M) | 'As long as you have one or fewer cards in hand, if you would draw one or more cards, you draw that many cards plus one instead' - the pool's best blue mythic, but this shell runs 8 filtering effects and is built to keep a full hand, so the condition is off most of the time. Also {3}{U}{U} on 11 blue sources. |
| Unravel (U) | 'Counter target spell. If the amount of mana spent to cast it was less than its mana value, you draw a card' is strictly better than Divert Disaster, but {1}{U}{U} with 11 blue sources and 3 of 16 lands entering tapped is not reliably castable on turn 3. The deck's one-pip rule is the concession the mana base demands. |
| Mm'menon, the Right Hand (R) | 'You may cast artifact spells from the top of your library' with 13 artifacts in 24 nonland cards is a genuine engine, but {3}{U}{U} is the same double-pip problem one mana worse. |
| Tractor Beam (U) | 'Enchant creature or Spacecraft / When this Aura enters, tap enchanted permanent. / You control enchanted permanent' is a Control Magic that ALSO taps what it steals - perfectly on theme, and it would fire Cryoshatter. Cut on {2}{U}{U}. |
| Specimen Freighter (U) | 'ETB return up to two target non-Spacecraft creatures to their owners' hands' is a huge tempo swing and its 9+ threshold is irrelevant, but {5}{U} is two mana past a curve that now tops at 3. |
| Mechan Assembler (U) | 'Whenever another artifact you control enters, create a 2/2 colorless Robot artifact creature token' would manufacture free Station fodder off 13 of 24 artifacts, and the token is a nontoken-artifact... no: the TOKEN is a token, so it does NOT trigger Virulent Silencer. Cut on cost ({4}{U}) and on that interaction. |
| Wedgelight Rammer (U) | 'ETB create a 2/2 colorless Robot artifact creature token' is the pool's only card that adds Station fodder for free, and the Challenger named it as a real absence. Cut on curve: at {3}{W} it competes with the 3-slot that Virulent Silencer and Tezzeret now occupy, and its own 9+ tier is unreachable. |
| Starport Security (C) | '{3}{W}, {T}: Tap another target creature' is a REPEATABLE Cryoshatter trigger, which is this deck's scarcest resource at 2 unconditional copies in 24. It costs {3}{W} baseline and only drops to {1}{W} with a +1/+1 counter out - and before Tezzeret was added this deck had exactly one counter source. With Tezzeret in, this is the second-best iteration add after Pulsar Squadron Ace. |
| Station Monitor (U), Illvoi Operative (C), Uthros Psionicist (U) | The 'second spell each turn' subtheme. Live here (20 of 24 nonland cards are MV <= 2) and Station Monitor's flying Drone tokens would be real chump-blockers - but every one competes with the becomes-tapped engine for the same slots, and the locked interaction-dense lens spends those slots on answers. |
| Cloudsculpt Technician (C), Illvoi Infiltrator (U), Starbreach Whale (C) | Blue's fliers. Reasonable bodies, but none has a becomes-tapped trigger, none is an artifact creature (so none triggers Virulent Silencer), and none is a Spacecraft - so none advances either half of the pipeline. |
| Selfcraft Mechan (C) | 'ETB you may sacrifice an artifact. When you do, put a +1/+1 counter on target creature and draw a card' - the sacrifice cost is fed by 13 of 24 artifacts, but at {3}{U} it trades away an artifact this deck would rather Station with or animate. |
| Dawnstrike Vanguard (U), Flight-Deck Coordinator (C) | The white end-step tapped payoffs. Cut because this build's payoffs are Spacecraft thresholds and poison, not board-wide counters, and at 10 creatures a board-wide pump is not worth a card. |
| Beyond the Quiet (R) | 'Exile all creatures and Spacecraft' - it would exile this deck's five ships and every charge counter banked on them. |
| SIDEBOARD CONSIDERATIONS: Unravel, Lost in Space, Seam Rip, Desculpting Blast 2nd copy, Dauntless Scrapbot | Lost in Space ('owner puts it on their choice of the top or bottom of their library') is the pool's only answer that beats both recursion and indestructible, and is the first board add if a resilient bomb matters more than the artifact class. Seam Rip is the cheapest answer to a resolved 1-2 MV engine and would partly un-concede the noncreature_permanents class. |
| NOTE ON THE COLOUR CHOICE | WU has 8 of the cube's 'becomes tapped' copies against WR's 4, and it is the only pair in the archetype with counterspells. It pays for that with the worst mana in the series: no untapped WU dual exists in this pool (dossier: WU total 1, untapped_capable 0), 3 of 16 lands enter tapped even after the Secluded Starforge swap, and no mainboard card may cost more than a single coloured pip. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     1.92   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.11 adj [MV 1.92 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  U  demand  65.0%  prod  68.8%  gap  -3.8pp  [OK]
  W  demand  35.0%  prod  43.8%  gap  -8.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base: cube mainboard only - all 40 mainboard and 10 sideboard cards matched by exact name against the working pool cache
commons_uncommons_max_2: PASS - no card exceeds 2 copies
rares_mythics_max_1: PASS - Hardlight Containment, Lumen-Class Frigate, Secluded Starforge, Sunstar Chaplain, Synthesizer Labship, Tezzeret Cruel Captain (mythic) at 1 copy each
rare_mythic_total_max_7: PASS - 6 used after the grill spent two idle slots on Tezzeret and Secluded Starforge; 1 remains unspent and the sideboard is entirely common/uncommon
basics_unlimited: Island x8, Plains x4 - format-supplied, exempt
```