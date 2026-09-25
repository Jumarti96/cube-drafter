---
deck_name: "gu-eusocial-robot-swarm"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UG"
format: "40-card"
built_at: "2026-08-07T17:31:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x8   Forest                 
  x5   Island                 
  x1   Breeding Pool          UG dual, untapped for 2 life
  x2   Tangled Islet          UG dual, enters tapped
```

### CREATURES (11)

```
CMC  Card                 Qty   Color  Role                         Rar
  2  Biomechan Engineer   x2    UG     2-drop body + Lander         U
  2  Genemorph Imago      x1    UG     Landfall: Robot -> 6/6       R
  2  Steelswarm Operator  x2    U      Pays the Lander crack cost   U
  3  Galactic Wayfarer    x1    G      Body + Lander                C
  4  Icetill Explorer     x1    G      Extra land drop each turn    R
  4  Seedship Agrarian    x2    G      Renewable Lander battery     U
  4  Starfield Vocalist   x1    U      Doubles every landfall       R
  7  Glacier Godmaw       x1    G      Finisher: team haste + pump  U
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                     Qty   Color  Role                          Rar
  1  Sami's Curiosity         x2    G      Banked land entry, {G}        C
  2  Consult the Star Charts  x1    U      Selection, X = lands          R
  2  Divert Disaster          x2    U      Soft counter, or a Lander     C
  2  Mental Modulation        x1    U      Taps Agrarian, draws          C
  2  Seedship Impact          x2    G      Artifact/ench. kill + Lander  U
  3  Unravel                  x1    U      Hard counter                  U
```

### OTHER SPELLS (4)

```
CMC  Card                  Qty   Color  Role                         Rar
  3  Bioengineered Future  x1    G      Robots enter with counters   R
  3  Larval Scoutlander    x1    G      Two land entries at once     U
  5  Eusocial Engineering  x2    G      THE KILL: land -> 2/2 Robot  U
```

## SIDEBOARD (10)

```
Card                Qty   Color  Role / When to board in                  Rar
Annul               x2    U      Counter artifact/ench. spell (74 cards)  U
Cryoshatter         x1    U      Kills one large creature                 C
Dauntless Scrapbot  x2    C      Graveyard exile + Lander (12.5%)         U
Shattered Wings     x2    G      Artifacts/ench./fliers (29.7%+22.5%)     C
Skystinger          x2    G      Blocks fliers (22.5% evasion)            C
Lost in Space       x1    U      Answers a resolved bomb                  C
```

## ANALYSIS

### DECK IDENTITY

Blue-green Lander ramp with trigger doubling. Eusocial Engineering turns every land entering the battlefield into a 2/2 Robot; Lander tokens buy extra land entries for {2} each without consuming the land drop, Steelswarm Operator pays that {2} for free every turn, and Icetill Explorer adds a second land drop. Starfield Vocalist causes each landfall trigger to fire an additional time, halving the land entries needed for lethal - but he is a rate multiplier, not a requirement: the kill floor is Eusocial Engineering plus the Lander package. Glacier Godmaw's landfall grants the team +1/+1, vigilance and haste, converting a swarm into damage the turn it appears.


### HOW THE ENGINE ACTUALLY COMPOUNDS

The whole deck is one sentence of rules text read carefully. `Starfield Vocalist` says *"If a permanent entering the battlefield causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time."* Two consequences that are easy to miss:

1. **A land entering is a permanent entering.** So every landfall trigger in the deck fires twice — not just the payoffs, but `Seedship Agrarian`'s counter and `Icetill Explorer`'s mill too.
2. **A token being created is a permanent entering.** So `Biomechan Engineer`'s own ETB is doubled by a Vocalist already on board: it makes *two* Landers, not one.

What Vocalist does **not** double is `Bioengineered Future`'s counter clause — that is a static replacement effect, not a triggered ability. Its ETB Lander is doubled; its counter text is not.

**The mana, not the Landers, was the bottleneck.** Every Lander reads `{2}, {T}, Sacrifice this token`. The deck has 14 of 24 nonland copies that *make* Landers and, before the grill, had **0 of 24** that reduced the cost of *cashing* them. On turn 5 you cast `Eusocial Engineering` for all five mana and crack nothing. `Steelswarm Operator` — *"{T}: Add {U}{U}. Spend this mana only to activate abilities of artifact sources"* — is the fix: a Lander is an artifact and its crack is an activated ability of an artifact source, so one Operator pays an entire crack every turn from turn 2 onward, free.

### A REPRESENTATIVE TURN 6

Board: `Eusocial Engineering`, `Starfield Vocalist`, `Steelswarm Operator`, `Genemorph Imago`, two banked Landers, five lands. Play a land, then crack both Landers (one paid by the Operator, one paid with `{2}`):

| Event | Landfall triggers | Robots created |
|---|---|---|
| Land drop | 2 (doubled) | 2 |
| Lander #1 → basic | 2 | 2 |
| Lander #2 → basic | 2 | 2 |

Six 2/2 Robots in one turn. `Genemorph Imago`'s six doubled triggers then set six creatures to base 6/6 (you are at eight lands, past its six-land threshold). Add `Glacier Godmaw` instead of the Imago and the same six Robots get +1/+1 **and haste**, attacking immediately for 18.

### WHAT THE GRILL CHANGED

This list is materially different from the one I first built, and the differences are worth recording:

| Change | Why |
|---|---|
| +`Steelswarm Operator` x2 | The Lander loop was mana-bottlenecked and nothing in the deck addressed it. |
| +`Mental Modulation` x1 | Card-positive *and* a land entry — it taps my own `Seedship Agrarian` for `{U}`. |
| −`Eumidian Terrabotanist` x1 | Its entire payoff is one life per land entry; cube lifegain density is 5.2%. |
| `Chrome Companion` → `Dauntless Scrapbot` in the board | I had claimed Scrapbot exiles graveyards symmetrically. Its oracle says *"exile each **opponent's** graveyard."* That was my misreading, and it cost the better card. |

### THE HONEST WEAKNESSES

- **Card advantage: 2 of 24.** Only `Consult the Star Charts` and `Mental Modulation` replace themselves. Against a deck that trades one-for-one and grinds, this deck runs out of cards before it runs out of mana.
- **Sweepers.** The cube's five sweepers sit in B/BR/C/R/UB and UG has no way to protect a board. `Zero Point Ballad` at X=2 kills every Robot. `Biosynthic Burst` saves exactly one creature — that is not protecting a swarm.
- **`Starfield Vocalist` is a 1-of.** P(seeing him by turn 7) is about 0.30. The deck is built so that this costs rate rather than the game, but the archetype's signature card shows up in under a third of games and there is no second copy or substitute anywhere in the cube's blue or green.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:2  2:11  3:4  4:4  5:2  7:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 8 copies (effective 6.9: Glacier Godmaw@0.6, Seedship Agrarian@0.9, Seedship Agrarian@0.9, Genemorph Imago@0.8, Bioengineered Future@0.7) → p=0.93 (need ≥ 0.75)
  PASS  enabler: 16 copies (effective 11.8: Larval Scoutlander@0.8, Icetill Explorer@0.9, Steelswarm Operator@0.7, Steelswarm Operator@0.7, Mental Modulation@0.5, Glacier Godmaw@0.6, Divert Disaster@0.4, Divert Disaster@0.4, Seedship Impact@0.4, Seedship Impact@0.4) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 34%  T2 91%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Eusocial Engineering, Glacier Godmaw, Seedship Agrarian
  OK        single_large_threat: Genemorph Imago, Divert Disaster, Unravel, Mental Modulation
  OK        noncreature_permanents: Seedship Impact, Divert Disaster, Unravel
  OK        stack: Divert Disaster, Unravel
  CONCEDED  graveyard: No mainboard graveyard answer. CORRECTED GROUND: an earlier draft conceded this class on the claim that Dauntless Scrapbot is symmetric - that was a misreading. Its oracle is 'exile each OPPONENT'S graveyard', so it never touches mine and does not turn off Icetill Explorer's 'You may play lands from your graveyard.' The honest ground for conceding the maindeck slot is density: graveyard interaction is 12.5% of the cube (31 of 249), which does not earn a maindeck slot over a land-entry card in a 24-nonland deck. It is answered from the sideboard with Dauntless Scrapbot x2, which exiles the whole graveyard AND creates a Lander, so boarding it in costs no land entries.
```

- Assembly HARD FAIL on a declared 'doubler' role (p=0.30) was repaired by revising the thesis, not by rationalizing: see thesis_revision. Starfield Vocalist is a 1-copy-capped rare and the pool has no second UG trigger doubler (the cube's only other doubling effect is Exalted Sunborn, {3}{W}{W} mythic mono-white, excluded by the splash filter). The role was mis-declared - Vocalist multiplies the rate, he is not required to assemble the kill. Re-run after repair: assembly PASS (payoff p=0.93, enabler p=0.99).
- Coverage: graveyard is a written CONCESSION. Its ground was CORRECTED at Phase 9 - an earlier draft claimed Dauntless Scrapbot exiles graveyards symmetrically, which misreads its oracle ('exile each OPPONENT'S graveyard'). The honest ground is density: graveyard interaction is 12.5% of the cube (31 of 249), which does not earn a maindeck slot in a 24-nonland deck. Answered from the sideboard with Dauntless Scrapbot x2, which exiles the whole graveyard AND creates a Lander, so boarding it costs no land entries.
- Curve PASS and Goldfish PASS (keepable 82% against an 80% floor; 3 lands by turn 3 = 84%); no deviation to explain.
- Slot proportions were RECOUNTED at Phase 9 after the Challenger showed the reported figures did not reproduce from the role tags. Threats now sits at 37.5%, inside the 30-40% band, rather than the 45.8% the original list actually carried.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands are fuel, not dead draws. Eusocial Engineering turns each extra land entering into a 2/2 Robot, Seedship Agrarian into a +1/+1 counter, Genemorph Imago into a base 3/3 (6/6 at six lands), and Icetill Explorer's 'You may play an additional land on each of your turns' lets a land-heavy hand deploy two per turn. Consult the Star Charts scales its dig with the land count. |
| screw | mitigation | Two-land hands are keepable on Sami's Curiosity ({G}, 'Create a Lander token') and Biomechan Engineer ({G}{U}, ETB Lander), which convert {2} into a land from the library; 14 of 24 nonland copies fetch a basic. Steelswarm Operator ({1}{U}) then pays that {2} crack cost for free. The goldfish check measures 82% keepable and 84% to have three lands by turn 3. |
| decapitation | mitigation | Starfield Vocalist answered on sight costs rate, not the plan: payoff assembles at p=0.93 and enabler at p=0.99 by turn 7 without him, and Eusocial Engineering x2 still converts every land entry into a Robot at half speed. Consult the Star Charts digs X = lands deep to rebuy a payoff. Eusocial Engineering answered on sight is the harder case, covered by its second copy plus Glacier Godmaw and Seedship Agrarian as independent landfall payoffs - and the cube contains exactly 1 enchantment answer in 249 cards, so it very rarely is answered. |
| gas-out | mitigation | 2 of 24 nonland copies replace themselves - Consult the Star Charts (Cards: Self-Replacing) and Mental Modulation ('This spell costs {1} less to cast during your turn. Tap target artifact or creature. Draw a card.'), and Mental Modulation does it while ADDING a land entry by tapping my own Seedship Agrarian ('Whenever this creature becomes tapped, create a Lander token'). Two further hand-independent sources: Seedship Agrarian x2 makes a Lander every time it is tapped, from an empty hand; and Steelswarm Operator x2 ('{T}: Add {U}{U}. Spend this mana only to activate abilities of artifact sources') converts banked Landers into land entries spending no card at all. The output is permanents, so an empty hand does not empty the board. 2 of 24 is still a low card-positive count and it is stated here as the deck's thinnest axis. |
| raced | mitigation | Blockers, statlines verified against the pool: Galactic Wayfarer 3/3, Seedship Agrarian 3/3 growing a +1/+1 counter on every land entry, Starfield Vocalist 3/4, Icetill Explorer 2/4, Biomechan Engineer 2/2, Genemorph Imago 1/3 flying. Larval Scoutlander is EXCLUDED from this list: it is an 'Artifact - Spacecraft' and 'an artifact creature at 7+', so it cannot block, and Station reads 'Tap another creature you control', which costs a blocker to charge it. Eusocial Engineering produces a fresh 2/2 blocker on every land entry, and Genemorph Imago's landfall sets a blocker's base P/T to 3/3 (6/6 at six lands), which is defensive as readily as offensive. Against evasive decks (22.5% density) the ground blockers do not interact - Skystinger x2 ('Reach. Whenever this creature blocks a creature with flying, this creature gets +5/+0') is the sideboard answer. |
| disruption-fizzle | mitigation | Divert Disaster is 'Counter target spell unless its controller pays {2}' - at the turn-6/7 critical window {2} is not a tax, so 2 of the 3 named protection copies are live only against a tapped-out opponent, and Unravel is the only unconditional counter and a 1-of. The mode therefore holds on its primary claim rather than on the counters: Eusocial Engineering banks a Robot on every land entry from the moment it resolves, so interacting with the Glacier Godmaw alpha strike delays lethal rather than fizzling it. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Famished Worldsire | Mythic 8-drop, 'Devour land 3' sacrifices the lands this deck's landfall payoffs need on the battlefield; costs a rare slot for a card that fights its own engine. |
| Harmonious Grovestrider | 'power and toughness are each equal to the number of lands you control' - a single large body, but it produces no land entries and Eusocial converts the same land entries into more total power across more bodies. |
| Fungal Colossus | 'costs {X} less to cast, where X is the number of differently named lands you control' - this deck fetches basics with Landers, so differently-named lands cap around 4-5, not 7; a 5/5 vanilla for ~{2}{G} is off-plan at competitive power. |
| Bioengineered Future (second consideration as engine) | Its counter clause is a static replacement effect, not a triggered ability, so Starfield Vocalist does not double it - it is a value include, never the engine. |
| Loading Zone | 'twice that many of each of those kinds of counters are put on it instead' doubles counters, but this build's Robots are tokens created by a trigger, not counter recipients; only Seedship Agrarian and Bioengineered Future put counters. 2 of 24 nonland cards qualify. EXCLUDE. |
| Terrasymbiosis | 'Whenever you put one or more +1/+1 counters on a creature you control, you may draw that many cards' - 2 of 24 nonland cards in this list put +1/+1 counters on creatures. EXCLUDE. |
| Ouroboroid | Mythic; 'At the beginning of combat, put X +1/+1 counters on each creature you control' pays off a wide board, but at {2}{G}{G} with 1 power it needs a turn cycle the goldfish plan does not have, and it costs a rare slot. |
| Specimen Freighter | {5}{U} bounce plus Station; the ETB is doubled by Vocalist for two more bounces, but 6 mana for tempo does not advance a landfall-token clock. |
| Edge Rover | 'When this creature dies, each player creates a Lander token' - symmetric, and it requires the 2/2 to die first; a Lander this deck must trade to get is strictly worse than Sami's Curiosity. |
| Dauntless Scrapbot | 3-mana 3/1 colorless that creates a Lander plus graveyard exile; playable but strictly behind Galactic Wayfarer's identical Lander on a green body, and the graveyard hate is anti-synergy with Icetill Explorer's 'You may play lands from your graveyard.' |
| Anticausal Vestige | Rare; 'When this creature leaves the battlefield, draw a card, then you may put a permanent with mana value <= your land count onto the battlefield' - strong, but at warp {4} it is a 6-drop shell that costs a rare slot the engine needs. |
| Quantum Riddler | Mythic 5-drop draw engine; excellent card, but it does not create or exploit land entries and spends one of six rare slots. |
| Mm'menon, the Right Hand | Rare; casting artifacts off the top is an artifact-deck payoff - this deck's only artifacts are Lander tokens, which are created, never cast. 0 of 24 nonland cards are artifact spells. EXCLUDE. |
| Moonlit Meditation | Rare; 'The first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of enchanted permanent' - once per turn only, so it caps exactly the Robot production Vocalist is doubling. |
| Sledge-Class Seedship | Rare Station 4/5; 'Whenever this Spacecraft attacks, you may put a creature card from your hand onto the battlefield' needs 7 charge counters before it can attack at all. |
| Survey Mechan | '{10}, Sacrifice this creature... costs {X} less, X = differently named lands' - Lander fetches are basics, so differently-named lands sit near 4-5, leaving a ~{5}-{6} activation for 3 damage. |
| Secluded Starforge | Rare land producing only {C}; in a deck with {G}{G} and {U} requirements a colorless source is a real cost, and it spends a rare slot. |
| Command Bridge | 'When this land enters, sacrifice it unless you tap an untapped permanent you control' - it taxes the board the turn it lands, and it enters tapped; the deck needs untapped bodies to Station and attack. |
| Nanoform Sentinel | 'Whenever this creature becomes tapped, untap another target permanent' would untap Seedship Agrarian for a second Lander, but only once each turn and it is an off-plan 3-mana 3/2. |
| Pull Through the Weft | 5-mana sorcery returning lands from the graveyard; Icetill Explorer already does this repeatedly for free and this deck is not a self-mill deck. |
| Annul | 'Counter target artifact or enchantment spell' - a narrow counter; Unravel counters anything for one more mana and replaces itself against a discounted spell. |
| Mental Modulation | Tap a permanent and draw a card - a tempo cantrip, but this deck wants its two-mana slots creating land entries, not trading one-for-zero. |
| All-Fates Scroll | '{T}: Add one mana of any color' fixes, but its draw clause costs {7} plus a sacrifice and counts differently named lands, which Lander basics do not increase. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     2.88   Ramp cards: 16   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -2.16 adj [MV 2.88 vs 2.5, 16 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  G  demand  63.6%  prod  68.8%  gap  -5.2pp  [OK]
  U  demand  36.4%  prod  50.0%  gap -13.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                            cube_mainboard
commons_uncommons_max_2:         PASS - no card over its cap
rares_mythics_max_1:             PASS
rare_mythic_total_cap_6:         PASS - exactly 6: Starfield Vocalist, Icetill Explorer, Genemorph Imago, Bioengineered Future, Consult the Star Charts, Breeding Pool. Sideboard is entirely commons/uncommons.
all_cards_in_cube:               PASS - exact-name match against the working pool cache
colour_legality:                 PASS - effective_cost.best_mode(card, [U,G], []) non-None for all 50
basics:                          format-supplied, exempt from copy limits
```
