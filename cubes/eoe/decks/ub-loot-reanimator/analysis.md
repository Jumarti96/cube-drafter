---
deck_name: "ub-loot-reanimator"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-08-04T16:05:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  1x Watery Grave  As this land enters, you may pay 2 life. If you don't, it enters tapped.
  2x Contaminated Aquifer  This land enters tapped.
  7x Swamp
  8x Island
```

### CREATURES (10)

```
CMC  Card                         Qty   Color  Role                                        Rar
  2  Mechan Navigator              x2    U      Repeatable discard outlet                   U
  3  Alpharael, Dreaming Acolyte   x2    UB     Discard outlet (bins artifact)              U
  3  Xu-Ifit, Osteoharmonist       x1    B      Reanimation engine (payoff)                 R
  5  Voidforged Titan              x1    B      MV-5 target / grindy body                   U
  6  Mechanozoa                    x2    U      Reanimation target / Warp threat            C
  9  Bygone Colossus               x2    C      Primary reanimation target                  U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                         Qty   Color  Role                                        Rar
  1  Tragic Trajectory             x1    B      One-mana removal (Void scales to -10/-10)   U
  1  Zero Point Ballad             x1    B      Scalable sweeper                            R
  2  Desculpting Blast             x1    U      Nonland-permanent answer                    U
  3  Scrounge for Eternity         x2    B      Backup reanimator (MV<=5)                   U
  3  Unravel                       x1    U      Counterspell                                U
  4  Gravkill                      x1    B      Exile removal                               C
  4  Scour for Scrap               x2    U      Tutor for the payload (artifact)            U
```

### OTHER SPELLS (3)

```
CMC  Card                         Qty   Color  Role                                        Rar
  3  Dubious Delicacy              x1    B      Flash removal / lifegain / artifact fodder  U
  4  Uthros Scanship               x2    U      Discard outlet                              U
```

## SIDEBOARD (10)

```
Card                         Qty   Color  Role / When to board in                     Rar
Annul                         x2    U      vs artifacts/enchantments                   U
Chrome Companion              x2    C      Graveyard hate                              C
Dauntless Scrapbot            x1    C      Graveyard exile                             U
Divert Disaster               x2    U      Cheap counter                               C
Singularity Rupture           x1    UB     Wrath + self-mill                           R
Lost in Space                 x1    U      Answer to a resolved artifact               C
Starbreach Whale              x1    U      Flying blocker / turn-2 Warp surveil        C
```

## ANALYSIS

### DECK IDENTITY

U/B Loot-Reanimator. Blue's discard outlets - the only true ones in this cube - turn a nine-mana card into a turn-three play, and Xu-Ifit, Osteoharmonist then returns it from the graveyard for free, every turn, with no mana-value cap. Bygone Colossus is the correct payload because its entire text box is 'Warp {3}', so Xu-Ifit's 'has no abilities' clause strips nothing from it - a reanimated Colossus is a full-strength 9/9. Scour for Scrap tutors it on demand because it is an artifact card, which converts the plan from random self-mill into a deterministic two-card assembly: fetch at instant speed, discard next turn, reanimate the turn after.

### THE WARP TRAP — READ THIS BEFORE YOU PLAY THE DECK

`Bygone Colossus` has exactly one line of text: `Warp {3}`. It is tempting to read that as "a 9/9 for three mana." **It is not, and getting this wrong will cost you games.**

The reminder text reads *"Exile this creature at the beginning of the **next** end step, then you may cast it from exile on a later turn."* Warp is a sorcery-speed cast, so you cast it in your own main phase — which means "the next end step" is **your own end step, this turn.** The Colossus has no haste, so it cannot attack the turn it arrives. And it is exiled before your opponent ever untaps, so it never blocks either.

**A Warped Bygone Colossus does nothing.** It is not a fast threat. What Warp actually buys you here is narrow and worth knowing precisely:

- it **banks** the card in exile, where you may later hard-cast it for {9};
- it satisfies **Void** (*"a spell was warped this turn"*), turning `Tragic Trajectory` into −10/−10 for one mana;
- it gets a dead 9-drop out of a flooded hand.

Every *other* Warp creature in this cube has an enters trigger that Warp exists to buy — `Mechanozoa` taps and stuns a blocker, `Codecracker Hound` digs two. The Colossus has no trigger, which is exactly why it is the perfect *reanimation* target and a poor Warp card. **Its only real route to the battlefield is `Xu-Ifit`.**

This correction was found while building the B/G sibling deck and applied back here. An earlier version of this analysis claimed each Warp cast "buys one attack step." It does not. The deck's structural numbers were recomputed with `Bygone Colossus` weighted 0.15 instead of 0.6 and the assembly check still passes at p=0.80 — but it passes on `Scour for Scrap`, `Scrounge for Eternity` and hard-castable bodies, not on Warp.

### THE COLOSSUS IS STILL THE RIGHT PAYLOAD

Xu-Ifit's clause is *"It's a Skeleton in addition to its other types and **has no abilities**."* That is a real cost against almost every fat creature in the pool — a reanimated `Starwinder` loses its draw trigger, a reanimated `Mouth of the Storm` loses flying and Ward.

`Bygone Colossus`'s entire printed text box is an alternative **casting** cost, not a battlefield ability. There is nothing there to strip. A reanimated Colossus is a full-strength 9/9 — and at nine power it kills from 20 in three swings.

So the two facts fit together: the card is a bad Warp card *because* it has no abilities, and it is the best reanimation target in the cube *for the same reason*.

### THE REAL PROBLEM WAS NEVER REANIMATION — IT WAS ACCESS

The U/B reanimation suite in this cube is three cards deep: `Xu-Ifit, Osteoharmonist` plus two `Scrounge for Eternity`, and the Scrounges are capped at *"mana value 5 or less"* so they cannot touch the Colossus at all. The first version of this deck failed its structural assembly gate at p=0.49 for exactly that reason.

With Warp correctly discounted, the deck's routes to a large body are:

| Route | Cards | What it costs |
|---|---|---|
| Reanimate the Colossus | `Xu-Ifit` ×1 | free and repeatable, but needs the Colossus already binned |
| Rebuy the engine | `Scrounge for Eternity` ×2 | returns Xu-Ifit itself at MV 3 — the answer to removal |
| Tutor the payload | `Scour for Scrap` ×2 | finds it with certainty; still needs an outlet |
| Hard-cast a body | `Mechanozoa` ×2, `Voidforged Titan` ×1 | 6 and 5 mana, no graveyard needed |

Nine physical copies, 4.7 reliability-weighted, P(at least one by turn 6) = **0.80**.

### THE 25-POINT SWING

`Scour for Scrap` reads *"Search your library for an artifact card, reveal it, put it into your hand, then shuffle."* `Bygone Colossus` is an Artifact Creature — Robot Giant. The consistency arithmetic on the one card this deck is built around:

- 2 Colossus alone, 13 cards seen by turn 6: 1 − (27×26)/(40×39) = **0.550**
- 2 Colossus + 2 Scour for Scrap: 1 − (27×26×25×24)/(40×39×38×37) = **0.808**

This replaced two `Codecracker Hound`, whose *"look at the top two cards… put one into your hand and the other into your graveyard"* finds a specific 9-drop roughly 10% of the time. In a 40-card deck built around a 2-of, blind filtering is not a plan; a tutor is.

### WHY BLUE, NOT GREEN OR WHITE

Every colour in this cube can fill a graveyard. Only blue can put a *chosen* card there. Green's contribution is mill (`Seedship Broodtender`, `Icetill Explorer`) and white's is surveil (`Starfighter Pilot`) — both random with respect to a specific 9-drop. Blue has four true discard outlets, and this deck runs three of them at two copies each:

- `Alpharael, Dreaming Acolyte` — *"draw two cards. Then discard two cards **unless you discard an artifact card**."* The Colossus is an artifact card, so the punishment clause costs exactly one card and you are still net +1.
- `Uthros Scanship` — *"draw two cards, then discard a card."* Unconditional, no choice for the opponent.
- `Mechan Navigator` — *"Whenever this creature becomes tapped, draw a card, then discard a card."* Repeatable, and Uthros Scanship's Station (*"Tap another creature you control"*) triggers it at sorcery speed without ever attacking into a blocker.

Six from-hand discard outlets is the number that makes the tutor worth running.

### THE ONE-CARD SEAM IN THE ARMOUR

The deck's thinnest point, stated rather than hidden: against a resolved non-Spacecraft noncreature permanent — an Equipment, an Aura, a mana rock — the mainboard's entire answer is **`Desculpting Blast` ×1**, and it is a bounce, so it gives the card back. `Gravkill` reads *"creature or Spacecraft"* and cannot touch them; `Unravel` reads *"Counter target spell"* and does nothing after resolution. That class is 90 of 249 nonland cards in this cube (74 artifacts + 16 enchantments, 36.1%). U/B has no destroy-an-artifact effect at any rarity. The sideboard answers it with `Annul` ×2 (on the stack) and `Lost in Space` ×1 (the only U/B card that touches one after it resolves).

### ZERO POINT BALLAD CUTS BOTH WAYS, AND THAT'S FINE

*"Destroy all creatures with toughness X or less."* At the X = 2–3 an aggressive start demands, it kills 5 of this deck's own 10 creature cards. It is still correct at one copy for two reasons: it is the only sweeper U/B offers at any rarity, and every creature it kills of yours lands in **your graveyard** — precisely the zone Xu-Ifit converts back into board presence. A symmetric wrath is not symmetric when one player has a free recursion engine.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (22 nonland):  1:2  2:3  3:7  4:5  5:1  6:2  9:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 4.7: Scrounge for Eternity@0.5, Scrounge for Eternity@0.5, Bygone Colossus@0.15, Bygone Colossus@0.15, Mechanozoa@0.6, Mechanozoa@0.6, Scour for Scrap@0.6, Scour for Scrap@0.6) → p=0.80 (need ≥ 0.75)
  PASS  enabler: 6 copies (effective 5.6: Mechan Navigator@0.8, Mechan Navigator@0.8) → p=0.86 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 32%  T2 72%  T3 96%
Coverage:  [PASS]
  OK        wide_boards: Zero Point Ballad, Mechanozoa, Bygone Colossus
  OK        single_large_threat: Gravkill, Tragic Trajectory, Desculpting Blast, Unravel, Dubious Delicacy
  OK        noncreature_permanents: Desculpting Blast
  OK        stack: Unravel
  CONCEDED  graveyard: Neither blue nor black in this pool contains a mainboard-quality graveyard answer; the only two in the cube's colours are Chrome Companion and Dauntless Scrapbot, both colourless and both too passive to maindeck, so they are sideboard slots instead.
```

- All four structural checks report PASS after the Phase 9 repairs (curve, assembly, goldfish, coverage) — no WARN-tier flags remain to respond to. For the record, the repairs briefly pushed the goldfish keepable rate to exactly the 80% threshold when avg MV rose to 3.95; swapping one Gravkill (MV 4) for Tragic Trajectory (MV 1), an even exchange inside the Interaction slot, returned it to 82%.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Zero Point Ballad is '{X}{B}', so every surplus land raises the sweeper's ceiling - at X=6 (seven mana) it wraths and returns 'a creature card put into a graveyard this way to the battlefield under your control'. Bygone Colossus can be HARD-CAST for {9} as a permanent 9/9 - and with the Warp correction this is now the Colossus's only way to reach the battlefield without Xu-Ifit, which makes flooding out a genuine plan B rather than a consolation. Mechanozoa hard-casts at {4}{U}{U}, and Dubious Delicacy's '{2}, {T}, Sacrifice this artifact: Target opponent loses 3 life' is a repeatable sink. Four sinks, all scaling with excess lands. |
| screw | mitigation | 12 of 22 nonland cards cost 3 or less. The two-land keeps are the ones holding Mechan Navigator ({1}{U}) or Tragic Trajectory ({B}); from three lands, Uthros Scanship's 'draw two cards, then discard a card' and Alpharael's 'draw two cards' both dig, and Scour for Scrap is an instant that finds a card at end of turn. The goldfish check reports 82% keepable hands and 92% to reach three lands by turn 3. |
| decapitation | mitigation | Xu-Ifit answered on sight is survivable because it is not the only route to a threat. Scrounge for Eternity x2 returns Xu-Ifit ITSELF from the graveyard (mana value 3, inside its 'mana value 5 or less' cap) - that, not the Warp modes, is the deck's real answer to losing the engine. Beyond it: Mechanozoa x2 is hard-castable at {4}{U}{U} for a 5/5, Voidforged Titan at {4}{B} for a 5/4, and Scour for Scrap x2 finds the Colossus so a long game can hard-cast it for {9}. Stated plainly rather than overclaimed: Warp does NOT provide a graveyard-independent way to attack with the Colossus (see warp_correction), so the assembly check's 4.7 effective payoff copies lean on Scrounge, Scour and the hard-castable bodies, not on Warp. |
| gas-out | mitigation | 10 of 22 nonland cards are Cards: Net-Positive or Cards: Self-Replacing — Alpharael x2 (draw two, discard one artifact), Uthros Scanship x2 (draw two, discard one), Voidforged Titan (Void draws each end step), Mechan Navigator x2 (loot on every tap), Scour for Scrap x2 (replaces itself with a chosen artifact), Unravel (conditional draw). Xu-Ifit is itself a hand-independent engine: it converts the graveyard into board presence for zero cards per turn, so an empty hand is not an empty turn. |
| raced | accepted | The cube's evasion density is 22.5% (56 of 249 nonland cards) and this deck's first large body is turn 3 at the earliest via Warp {3} / Warp {2}{U}, or turn 4 via Xu-Ifit. The deck buys time three ways: Dubious Delicacy ('Flash / up to one target creature gets -3/-3 until end of turn' then '{2}, {T}, Sacrifice this artifact: You gain 3 life') is instant-speed removal plus a 3-life buffer; Zero Point Ballad scales as a sweeper; and Mechanozoa's ETB taps and stuns the best attacker. What remains genuinely accepted is the shape of the clock: the deck cannot deploy a relevant blocker before turn 3, and mitigating THAT would mean spending the turn-1 and turn-2 slots on cheap defensive bodies (Hullcarver, Monoist Sentry) instead of the discard outlets Mechan Navigator and Alpharael — and those outlets are the only reason a mana-value-9 card reaches the graveyard at all. Cutting them would not slow the deck down; it would delete the win condition. |
| disruption-fizzle | mitigation | Xu-Ifit's ability is 'Activate only as a sorcery', so it fires on your own turn with mana open - Unravel ({1}{U}{U}) protects the activation. If Xu-Ifit is removed in response, the graveyard is untouched: Scrounge for Eternity retries from the same yard for {2}{B}, and can return Xu-Ifit itself. What this deck does NOT have is a Warp-based bypass: a Warped Bygone Colossus is exiled at your own end step without attacking, so Warp is a card-banking and Void-enabling mode, not an alternate kill. The honest redundancy is that the reanimation can be retried from an intact graveyard, not that the plan has a second speed. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Rescue Skiff | White. 'return target creature or enchantment card from your graveyard to the battlefield' would return Bygone Colossus with abilities intact, but U/W fixing is Idyllic Beachfront x2 and nothing else — both read 'This land enters tapped', and there is no U/W shockland in the cube. A tapped-only third colour attacks the turn-3 {1}{B}{B} Xu-Ifit requirement this deck's thesis turn is gated on. |
| Scout for Survivors | White, and off-thesis regardless: 'creature cards with total mana value 3 or less' cannot return any of this deck's payoffs — 0 of the 6 reanimation targets in this list are MV 3 or less. |
| Astelli Reclaimer | White, and returns 'target noncreature, nonland permanent card' — it is not a creature reanimator at all; this deck runs 0 noncreature nonland permanents worth returning. |
| Seedship Broodtender | Requires {G}; its uncapped reanimation is the whole point of the B/G build, not this one. Splashing G would need Tangled Islet/Breeding Pool, i.e. a fourth colour pair. |
| Icetill Explorer | Requires {G}{G} — a double off-colour pip is not a splash under any reading. |
| Monoist Circuit-Feeder | 4/4 flier at MV 6 — strictly smaller than Mouth of the Storm (6/6 flier, same MV band) and its ETB scales with 'the number of artifacts you control', which is 8 of 24 nonland cards here, not enough to make the pump reliable. |
| Perigee Beckoner | 4/5 for {4}{B}; the ETB grants recursion to ANOTHER creature, and this deck's recursion is already free and repeatable via Xu-Ifit — a redundant, worse-bodied slot. |
| Hullcarver | 1/1 deathtouch for {B}. Real as a blocker and as sacrifice fodder, but it competes with Virus Beetle, which is the same body class with an added 'each opponent discards a card'. |
| Alpharael, Stonechosen | Mythic; 'defending player loses half their life, rounded up' is a real clock, but it costs {3}{B}{B} for a 3/3 that must connect, and the rare/mythic budget is better spent on the reanimation engine itself. |
| Sunset Saboteur | Rare 4/1 menace — an aggressive body, but 'Whenever this creature attacks, put a +1/+1 counter on target creature an opponent controls' actively grows the opposing board this removal-light deck must then answer. |
| Weftwalking | Mythic; 'shuffle your hand and graveyard into your library' undoes the entire graveyard this deck spent turns building — anti-synergy with the thesis. |
| Specimen Freighter | 'Whenever this Spacecraft attacks, defending player mills four cards' mills the OPPONENT, not you; at {5}{U} it is a 6-mana Spacecraft that must attack to do anything. |
| Codecracker Hound | 'look at the top two cards of your library. Put one into your hand and the other into your graveyard' — you do not choose what to bin from a selected set, you choose which of two blind cards to keep. It bins Bygone Colossus only when a Colossus is in the top two, roughly 10% per cast; Scour for Scrap finds it 100% of the time for one more mana. Cut in the Phase 9 grill. |
| Fell Gravship | 'mill three cards, THEN return a creature or Spacecraft card from your graveyard to your hand' has no 'may' and no 'target' — when the milled Colossus is the only creature card in the yard the trigger is mandatory and drags the payload back out of the zone the kill needs it in. Flagged by the Step-0 shape judge, cut entirely in the grill. |
| Starwinder | Rare 7/7 for {5}{U}{U}. Reanimated it is a 7/7 vanilla, but at MV 7 it is uncastable inside the turn-6 thesis window and it pushed the share of nonland cards above MV 6 to 14% against a 10% ceiling. Cut for Mechanozoa x2, which carried the assembly check from 0.66 to 0.76. |
| Archenemy's Charm | Rare, {B}{B}{B} against 10 black sources in 18 lands. Its mode 1 ('Exile target creature or planeswalker') is the same effect as Gravkill at {3}{B}, and the classes it is supposed to beat barely exist in this cube: 0 creatures with printed indestructible, 1 with hexproof, 5 with ward, out of 249 nonland cards. |
| Mouth of the Storm | 6/6 flier for {6}{U}, boarded as the answer to the 'raced' failure mode — but the deck runs 18 lands with accel_count 0 and a thesis turn of 6, so a seven-mana card arrives after the race is decided. Replaced with Starbreach Whale ({4}{U}, 3/5 flier, Warp {1}{U}). |
| Cerebral Download | 'Surveil X, where X is the number of artifacts you control.' Artifact CARDS total 10 of 22 nonland cards, but the number on the BATTLEFIELD on turn 5 is typically 1-2, so X = 1-2 for a five-mana instant. |
| Mm'menon, the Right Hand | Rare. 'You may cast artifact spells from the top of your library' — artifact cards are 10 of the 40 total cards, so the top of the library is a castable artifact 25% of the time. One of the two deliberately-unused rare slots. |
| Anticausal Vestige | Rare 7/5 colourless with Warp {4}; a genuine Xu-Ifit target and colourless so it costs the manabase nothing, but it is a fifth rare competing with Singularity Rupture for the sideboard wrath slot, and its LTB trigger ('put a permanent card with mana value less than or equal to the number of lands you control from your hand onto the battlefield') needs 9 lands to cheat in the Colossus — this deck runs 18 lands and would reach 9 around turn 9. |
| Timeline Culler | 'You may cast this card from your graveyard using its warp ability. Warp—{B}, Pay 2 life' is a permanent recurring Void switch. Real, but this list already turns Void on with 10 of 22 nonland cards, and the deck has exactly one Void-conditional card (Tragic Trajectory) to switch on. |
| Wurmwall Sweeper | {2} colourless 'surveil 2' with no return clause — strictly cleaner than Fell Gravship. Cut on the same reasoning that cut Codecracker Hound: surveil 2 bins a specific 9-drop only when it is in the top two, and the deck moved to tutor-plus-discard instead of blind filtering. |
| Hymn of the Faller | 'Surveil 1, then you draw a card and lose 1 life' with a Void rider for a second card. A fine 2-mana cantrip, but surveil 1 is the weakest binning rate in the pool and the Engine slot was already at 8 of 22 — a declared deviation that should not grow further. |
| Umbral Collar Zealot | 'Sacrifice another creature or artifact: Surveil 1' is free and repeatable, but it costs a permanent per activation. This deck's threats are 4 large bodies it will not sacrifice, and its 2 Scrounge for Eternity already compete for the same fodder — 13 of 22 nonland cards qualify as fodder, but each one spent is a card gone. |
| Sothera, the Supervoid | Mythic. 'Whenever a creature you control dies, each opponent chooses a creature they control and exiles it' needs your own creatures to die repeatedly; this list runs 0 free sacrifice outlets and a threat base it wants alive. That is the W/B aristocrats build's engine, not this one. |
| Chorale of the Void | Reanimates from 'defending player's graveyard', not yours — its output is a function of the opponent's creature deaths, so it is uncorrelated with this deck's 6 discard outlets and does nothing against an empty opposing yard. |
| Dawnsire, Sunstar Dreadnought | Mythic 20/20 at MV 5, and Scrounge for Eternity can legally return it ('creature or Spacecraft card with mana value 5 or less') — but it returns as a Spacecraft with zero charge counters and needs 20 to be a creature. Total power available to Station in one sorcery window across this whole mainboard is well under 20. |
| Extinguisher Battleship | 10/10 at MV 8, but it is a Spacecraft, not a creature card — Xu-Ifit returns 'target creature card' only, so the deck's primary reanimator cannot touch it. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 19 recommended  [PASS]
Avg CMC:     3.82   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.76 adj [MV 3.82 vs 2.5, 0 accel, scaled N/60]  ->  19 lands  (P(2-4 in 7) = 0.774)

Color Balance (core):  [PASS]
  B  demand  42.3%  prod  55.6%  gap -13.3pp  [OK]
  U  demand  57.7%  prod  61.1%  gap  -3.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] All cards from the eoe cube mainboard
       Phase 5C check 2 — every name matched by exact string against the working pool cache; 0 missing. Independently re-verified by the Challenger against the bundle's working_pool: 0 phantoms.
[PASS] Commons and uncommons: max 2 copies
       Phase 5C check 3 via cube_search.get_max_copies; no violation.
[PASS] Rares and mythics: max 1 copy
       Phase 5C check 3; all four rares are singletons.
[PASS] Max 6 rares/mythics total across mainboard + sideboard
       4 used — Xu-Ifit Osteoharmonist, Zero Point Ballad, Watery Grave (mainboard); Singularity Rupture (sideboard). 2 slots deliberately unused: the two remaining rare-quality options in these colours, Archenemy's Charm and Mm'menon the Right Hand, were rejected on oracle-grounded counts (see CARDS CONSIDERED BUT EXCLUDED).
[PASS] Basic lands unlimited (format-supplied)
       7 Swamp, 8 Island — exempt from copy limits.
[PASS] 40-card mainboard
       22 nonland + 18 land = 40.
[PASS] 10-card sideboard
       2+2+1+2+1+1+1 = 10.
[PASS] Colour identity U/B, no splash
       Phase 5C check 4 via effective_cost.best_mode — every nonland card returns a usable 'cast' mode in U/B; 0 unusable.
```
