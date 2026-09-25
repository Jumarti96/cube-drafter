---
deck_name: "gw-counters-station"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GW"
format: "40-card"
built_at: "2026-08-02T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x10  Forest          Basic
x5  Plains          Basic
x2  Radiant Grove   GW dual, enters tapped
```

### CREATURES (10)

```
CMC  Card                 Qty  Color  Role                                                              Rar
  2  Broodguard Elite     x2   G      Fuel - X counters scale station power; LTB relocates them         U
  2  Pulsar Squadron Ace  x2   W      Fuel + selection - digs 5 for a Spacecraft, else counters itself  U
  3  Skystinger           x2   G      Fuel + reach blocker vs the 22.5% evasion class                   C
  4  Drix Fatemaker       x2   G      Fuel - counter + board-wide trample                               C
  5  Germinating Wurm     x2   G      Fuel - 5 power for {1}{G} on warp, the densest station payment    C
```

### INSTANTS & SORCERIES (3)

```
CMC  Card              Qty  Color  Role                                                          Rar
  2  Biosynthic Burst  x2   G      Interaction - untap enables a second Station; indestructible  C
  3  Emergency Eject   x1   W      Interaction - instant unconditional nonland destroy           U
```

### OTHER SPELLS (10)

```
CMC  Card                     Qty  Color  Role                                                          Rar
  1  Seam Rip                 x1   W      Interaction - 1-mana exile of a nonland permanent MV<=2       U
  2  Lumen-Class Frigate      x1   W      PAYOFF - 2+ anthem raises every future station payment        R
  2  Wurmwall Sweeper         x2   C      PAYOFF - cheapest threshold 4+; ETB surveil 2                 C
  3  Banishing Light          x1   W      Interaction - unconditional nonland exile                     C
  3  Larval Scoutlander       x1   G      PAYOFF - 7+ flier at MV3; ETB fetches two basics              U
  3  Sledge-Class Seedship    x1   G      PAYOFF - 7+ flier; attacks deploy a creature from hand        R
  3  Tezzeret, Cruel Captain  x1   C      ENGINE - free repeatable untap = a second Station every turn  M
  4  Loading Zone             x1   G      ENGINE - doubles charge counters as well as +1/+1 counters    R
  5  Atmospheric Greenhouse   x1   G      PAYOFF - ETB counter on each creature; 8+ flying trample      U
```

## SIDEBOARD (10)

```
Card                Qty  Color  Role / When to board in                                              Rar
Focus Fire          x1   W      Cheap combat removal that scales with Spacecraft                     C
Seedship Impact     x2   G      Instant artifact/enchantment removal - 29.7% artifact cube           U
Dauntless Scrapbot  x2   C      Graveyard hate; also 3 power of station fuel                         U
Shattered Wings     x1   G      Artifact / enchantment / flier removal                               C
Radiant Strike      x2   W      Artifact / tapped-creature removal + 3 life vs the race              C
Lashwhip Predator   x2   G      Wide boards - a 4-mana 5/7 reach when the opponent has 3+ creatures  U
```

## ANALYSIS

### DECK IDENTITY

GW Counters into Station. Station reads "Tap another creature you control: Put charge counters equal to its power on this Spacecraft", so every +1/+1 counter this deck places is Spacecraft fuel rather than just a bigger body. The cost is tapping a creature, NOT a {T} symbol on that creature, so summoning sickness does not prevent it and a body can station the turn it lands - which is what makes the warp shell work, since a warped creature is exiled at your own next end step and Station is a main-phase sorcery-speed action that happens first. Loading Zone doubles charge counters too, so one warped Germinating Wurm (5 power for {1}{G}) stationed under a warped Loading Zone is 10 charge counters from a three-mana, two-card investment - enough to clear Sledge-Class Seedship's 7+ threshold in a single activation. Below its threshold a Spacecraft is an artifact and not a creature, so the creature removal that dominates this cube cannot target it at all.

### THE RULES DETAIL THE WHOLE DECK RESTS ON

Station reads: **"Tap another creature you control: Put charge counters equal to its power on this Spacecraft. Station only as a sorcery."**

The cost is the English phrase *"Tap another creature you control"* - there is **no `{T}` symbol** anywhere in it. That matters enormously. Summoning sickness stops a creature from activating abilities *of that creature* whose cost includes `{T}`; here the ability belongs to the **Spacecraft**, and the creature is merely a cost being paid. So a creature can be tapped for Station **the turn it arrives**.

Verified mechanically rather than assumed: scanning all 23 nonland mainboard cards for the literal string `{T}` returns exactly one hit - inside Emergency Eject's Lander reminder text - and zero hits in any Station line.

This is load-bearing because **4 of the 10 creature copies have warp**, and warp reads *"Exile this creature at the beginning of the next end step."* A warp cast happens at sorcery speed on your own turn, so that end step is **your own**. The creature's entire life is one main phase. If summoning sickness applied to Station, every warp body would produce zero charge counters and the deck's two-mana curve would collapse.

The same fact has a downside I got wrong before the grill caught it: **a warped creature can never block.** It is exiled before the opponent's turn begins. That is why Skystinger x2 are maindecked as real blockers.

### THE MARQUEE LINE, AND ITS HONEST FREQUENCY

| Turn | Play | Charge |
|---|---|---|
| 2-3 | Any hull - 4 of the 6 Spacecraft cost MV <= 3 | - |
| n | Warp Loading Zone for `{G}` | - |
| n | Warp Germinating Wurm for `{1}{G}` - a 5/5 | - |
| n | Station: tap the Wurm, 5 power, **doubled to 10** | Sledge-Class Seedship clears 7+ |

Three mana and two cards for a 4/5 flier that then deploys a creature from hand on every attack. The honest caveat, which the grill forced into the record: that exact line needs the 1-of Loading Zone, so it appears roughly a quarter of the time by turn 4. The deck's floor is the assembly check - **p = 0.85** to see a payoff hull and **p = 0.99** to see fuel by turn 6.

### WHY A SPACECRAFT IS SAFER THAN A CREATURE

Below its threshold a Spacecraft is an `Artifact - Spacecraft`, not a creature. Every piece of creature removal in the cube is blank against it while it charges. Scanning the 276 unique pool cards for anything that answers an artifact or a nonland permanent gives **12 cards, 4.3% density**.

Two of those twelve are genuine blowouts and are recorded rather than hidden: **Ruinous Rampage** exiles all artifacts of mana value 3 or less - that is **4 of this deck's 6 Spacecraft copies** - and **Pinnacle Starcage** exiles all artifacts and creatures of mana value 2 or less, hitting **3 of 6**. Charge counters are cumulative and survive damage and destruction, but they leave with the hull on an exile effect.

### THE COUNTS

| Quantity | Count |
|---|---|
| Spacecraft (the payoff class) | **6 of 23** |
| ...at MV <= 3 | **4 of 6** |
| Creatures (the fuel) | **10 of 23** |
| Nonland cards feeding Focus Fire's X (sideboard) | **15 of 23** - it counts Spacecraft too, even below threshold |
| Nonland cards at MV <= 2 | **10 of 23** |
| Cards that draw a card | **0 of 23** - see gas-out |
| Creatures with toughness > power | **2 of 10** - why Tapestry Warden is excluded |
| Distinct thresholds among the hulls | **5** (2+, 4+, 7+, 8+, 12+) |

### TEZZERET IS A SECOND STATION EVERY TURN

Tezzeret, Cruel Captain: *"Whenever an artifact you control enters, put a loyalty counter on Tezzeret. 0: Untap target artifact or creature. If it's an artifact creature, put a +1/+1 counter on it."*

The 0 ability is free and repeatable, so it untaps a creature that has already paid a Station cost - a second activation every turn, permanently, which is the effect Biosynthic Burst provides once for two mana. Its loyalty grows off the 6 Spacecraft, which are artifacts. Note the -3 mode (*"Search your library for an artifact card with mana value 1 or less"*) is **blank in this deck**: 0 of 23 nonland cards are artifacts at MV 1 or less.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:1  2:9  3:7  4:3  5:3
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.5: Lumen-Class Frigate@0.5) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 12: Biosynthic Burst@0.5, Biosynthic Burst@0.5) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 15%  T2 91%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in green or white in this pool except Beyond the Quiet ('Exile all creatures and Spacecraft'), which would exile this deck's own Spacecraft - the win condition itself. A wide opposing board is answered by going over the top: a Spacecraft past its threshold has flying and the ground board cannot block it. Lashwhip Predator ('This spell costs {2} less to cast if your opponents control three or more creatures. Reach', 5/7) is the sideboard response.
  OK        single_large_threat: Banishing Light, Emergency Eject
  OK        noncreature_permanents: Banishing Light, Emergency Eject, Seam Rip
  CONCEDED  stack: Green and white contain no counterspell in this pool; the cube holds exactly 2 counterspells in 271 cards (0.7% density).
  CONCEDED  graveyard: No GW mainboard graveyard answer exists in this pool; Dauntless Scrapbot ('exile each opponent's graveyard') is a sideboard slot that is also 3 power of station fuel.
```

- Curve check PASSED for midrange, no WARN flag.
- Goldfish check PASSED (86% keepable vs the 80% threshold), no WARN flag. The T1 play rate is 15% because the deck runs a single one-drop; that is accepted because Station rewards deploying a body and a hull over a one-mana spell, and the T2 play rate is 91%.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Station's entire cost is "Tap another creature you control" - it contains no mana symbol - so a flooded board advances the win condition every turn for free. Broodguard Elite x2 ({X}{G}{G}, warp {X}{G}) is an X-spell that turns surplus lands directly into station power, and Tezzeret's "0: Untap target artifact or creature" gives a second free Station activation every turn regardless of mana. Larval Scoutlander's ETB converts a surplus land into two basics. |
| screw | mitigation | 10 of 23 nonland cards cost MV<=2, and four cards carry two-mana single-pip warp costs: Drix Fatemaker {1}{G}, Germinating Wurm {1}{G}, Broodguard Elite {X}{G}, and Loading Zone's warp {G}. Wurmwall Sweeper is {2} colourless and Tezzeret is {3} colourless, so the two cheapest engine pieces need no coloured mana at all. Only one card in the deck has a double pip (Broodguard Elite x2, whose warp mode is single-pip). Goldfish: 86% keepable openers, 3 lands by turn 3 in 88%. |
| decapitation | mitigation | There is no single key card: 6 Spacecraft spread across five distinct thresholds (Wurmwall Sweeper 4+ x2, Lumen-Class Frigate 2+/12+, Sledge-Class Seedship 7+, Larval Scoutlander 7+, Atmospheric Greenhouse 8+), and the assembly check gives p=0.85 of seeing a payoff copy by turn 6. The structural protection matters more: a Spacecraft below its threshold is "an artifact" and only "an artifact creature at N+", so creature removal cannot target it. Only 12 of the 276 unique cards in this pool (4.3%) can answer an artifact or a nonland permanent at all. |
| gas-out | mitigation | Pulsar Squadron Ace x2 is the answer and it costs the deck nothing in fuel, because it IS fuel: "When this creature enters, look at the top five cards of your library. You may reveal a Spacecraft card from among them and put it into your hand... If you didn't put a card into your hand this way, put a +1/+1 counter on this creature." With 6 of 23 nonland cards being Spacecraft the dig is live, and on a whiff it grows itself into a larger station payment. Beyond that the deck's stored resource is charge counters rather than cards: they are cumulative and nothing in any Station line removes them, so a card spent on a Station activation is banked on the battlefield instead of needing to be re-drawn, and Tezzeret's free every-turn untap converts that bank into a second activation per turn with no card spent. The deck still draws no cards - Tezzeret's -3 is blank here, since 0 of 23 nonland cards are artifacts at MV 1 or less - so this is a real but bounded mitigation. |
| raced | mitigation | Skystinger x2 are the maindeck blockers: "Reach. Whenever this creature blocks a creature with flying, this creature gets +5/+0 until end of turn" makes each an 8/3 blocker against the cube's 56-card (22.5%) evasion class, and a 3/3 wall otherwise. They are permanent bodies, unlike a warp cast, which is exiled at your own next end step and can never block. Seam Rip exiles a nonland permanent MV<=2 for {W}, the mana-value band the cube's fastest decks live in, and 10 of 23 nonland cards cost MV<=2. The sideboard adds Radiant Strike x2 (artifact or tapped creature, plus 3 life) and Lashwhip Predator x2. |
| disruption-fizzle | mitigation | Charge counters are cumulative and survive destruction and damage, so interaction aimed at one station turn costs one activation rather than the plan. A Spacecraft below threshold is not a creature, so instant-speed creature removal held for the key turn simply cannot target it. Biosynthic Burst answers removal aimed at the creature being stationed - "It gains reach, trample, and indestructible until end of turn. Untap it." - and the untap lets that creature pay a second Station cost the same turn. The honest limit: indestructible is not protection from exile, and two pool cards (Ruinous Rampage, exiling all artifacts of mana value 3 or less, and Pinnacle Starcage) would take 4 of 6 and 3 of 6 Spacecraft copies respectively, banked counters and all. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Wedgelight Rammer | The worst rate in the payoff class: 9 charge counters to unlock a 3/4, which is two counters MORE than Sledge-Class Seedship needs for a 4/5 at one lower mana value. Replaced by Larval Scoutlander (7+ for a 3/3 flier at MV3, in the deck's primary colour). |
| Sunstar Chaplain (rare) | Its end-step trigger needs "two or more tapped creatures" but a single Station activation taps exactly ONE creature, so the trigger is not self-fulfilling as claimed. Its other ability REMOVES a +1/+1 counter, which is fuel-negative in a deck where power IS the charge payment, and it strips the trample Drix Fatemaker grants. Cutting it freed the rare slot that Tezzeret now occupies. |
| Rayblade Trooper | A 2/2 needs two of its taps to clear Wurmwall Sweeper's 4+ threshold, where one Germinating Wurm or one self-targeted Drix Fatemaker does it alone; the slots went to higher-power fuel. |
| Dawnsire, Sunstar Dreadnought (mythic) | A 20/20 with "10+ | deals 100 damage" and "20+ | Flying", but this deck's largest single station payment is a doubled Germinating Wurm at 10 charge counters, so the 20+ flying mode is unreachable and the card is a {5} artifact that does nothing for roughly two full station cycles. |
| Extinguisher Battleship (rare) | A 10/10 flier at only 5+ is the best threshold-to-body rate in the pool, but at {8} it is uncastable by the turn-6 thesis on 17 lands, and its ETB "deals 4 damage to each creature" would sweep this deck's own 10 creatures. |
| The Seriema (rare) | A 5/5 at 7+ for MV3 is better payoff geometry than most hulls, but its ETB searches for a legendary creature and this deck runs ZERO legendary creatures, so the trigger is blank; {W}{W} is also a real cost on a manabase that is now 12 of 17 green-producing. |
| Pinnacle Kill-Ship | 7/7 flying at 7+ with a 10-damage ETB, but at {7} it arrives after the thesis turn on a 17-land deck. |
| Tapestry Warden | "Each creature you control with toughness greater than its power stations permanents using its toughness rather than its power" applies to only 2 of the 10 creatures in this list (Pulsar Squadron Ace x2 at 1/2), improving each by exactly 1 charge counter. |
| Ouroboroid (mythic) | Its mass counters WOULD be available to Station on the same turn - the postcombat main phase is a sorcery-speed window after beginning of combat - but it costs a mythic slot, asks {2}{G}{G} against a manabase with zero untapped duals, and offers only a 1/3 body; it anchors the sibling engine build instead. |
| Anticausal Vestige (rare) | 7 power for {4} on warp is the only single payment that clears the 8+/9+ tier alone, but at 1.75 power per mana it is worse than Germinating Wurm's 2.5 and costs a rare slot. |
| Dawnstrike Vanguard | "if you control two or more tapped creatures, put a +1/+1 counter on each creature you control other than this creature" is the board-wide version of the trigger this deck manufactures, but MV6 against a 2.91 average mana value is a full turn past the thesis. |
| Evendo, Waking Haven / Adagia, Windswept Bastion (mythic lands) | Planet lands with Station occupy a LAND slot and cannot be hit by artifact removal, and Loading Zone explicitly doubles counters on "a creature, Spacecraft, or Planet you control" - but both enter tapped and their 12+ payoffs are far beyond this deck's charge output. |
| Focus Fire (moved to sideboard) | "X is 2 plus the number of creatures and/or Spacecraft you control" scales beautifully here (15 of 23 nonland cards feed X), but it only hits an "attacking or blocking" creature, so it cannot answer a resolved threat that sits back - it does not belong in the maindeck's single-large-threat coverage. |
| Shattered Wings (moved to sideboard) | Artifact, enchantment or flier removal is exactly the right effect against this cube, but at sorcery speed it competes with deploying a hull on curve; Skystinger x2 now cover the flier axis from the maindeck by blocking. |
| Dyadrine, Synthesis Amalgam (rare) | Repeatable draw plus a 2/2 Robot body, but its draw removes "a +1/+1 counter from each of two creatures you control" - and in THIS deck a +1/+1 counter IS station fuel, so each card drawn costs two future charge counters. |
| Command Bridge (land) | Any-colour fixing, but it enters tapped and carries "sacrifice it unless you tap an untapped permanent you control" in a deck that is already 12 of 17 green-producing and needs untapped lands on its warp turns. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 2.91 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  72.7%  prod  70.6%  gap  +2.1pp  [OK]
  W  demand  27.3%  prod  41.2%  gap -13.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card exceeds 2 copies across mainboard and sideboard combined; basics are format-supplied and exempt.
rares_mythics_max_1: PASS - every rare/mythic is at 1 copy.
max_6_rares_mythics_total: PASS - 4 of 6 used: Loading Zone (R), Lumen-Class Frigate (R), Sledge-Class Seedship (R), Tezzeret, Cruel Captain (M). Zero rares in the sideboard; two slots left unspent rather than forcing a weak rare.
colour_identity: PASS - every nonland card returns non-None from effective_cost.best_mode(card, ['G','W'], []).
splash_cap: PASS - splash_colors = [], splash_candidates = [].
```