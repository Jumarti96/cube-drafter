---
deck_name: "gu-lander-ramp-control"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UG"
format: "40-card"
built_at: "2026-08-07T18:26:08Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x6   Forest                 
  x8   Island                 
  x1   Breeding Pool          UG dual, untapped for 2 life
  x2   Tangled Islet          UG dual, enters tapped
```

### CREATURES (8)

```
CMC  Card                     Qty   Color  Role                           Rar
  2  Biomechan Engineer       x2    UG     2-drop body + ETB Lander       U
  4  Icetill Explorer         x1    G      Extra land drop each turn      R
  4  Starfield Vocalist       x1    U      Doubles every ETB trigger      R
  5  Harmonious Grovestrider  x2    G      FINISHER: P/T = lands, Ward 2  U
  5  Quantum Riddler          x1    U      4/6 flier, draws on entry      M
  7  Glacier Godmaw           x1    G      Trample + Lander + team haste  U
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                     Qty   Color  Role                          Rar
  1  Sami's Curiosity         x2    G      Lander + 2 life, {G}          C
  2  Consult the Star Charts  x1    U      Dig X = your land count       R
  2  Desculpting Blast        x2    U      Bounce any nonland permanent  U
  2  Divert Disaster          x2    U      Soft counter, or a Lander     C
  2  Seedship Impact          x1    G      Artifact/ench. kill + Lander  U
  3  Unravel                  x2    U      Hard counter                  U
```

### OTHER SPELLS (5)

```
CMC  Card                     Qty   Color  Role                            Rar
  1  Cryoshatter              x2    U      Hard removal, {U}               C
  4  Uthros Scanship          x2    U      ETB draw 2 (4 doubled)          U
  8  Extinguisher Battleship  x1    C      Sweeper: 4 dmg all (8 doubled)  R
```

## SIDEBOARD (10)

```
Card                   Qty   Color  Role / When to board in                  Rar
Annul                  x2    U      Counter artifact/ench. spell (74 cards)  U
Dauntless Scrapbot     x2    C      Graveyard exile + Lander (12.5%)         U
Shattered Wings        x2    G      Artifacts/ench./fliers (29.7%+22.5%)     C
Skystinger             x2    G      Blocks fliers (22.5% evasion)            C
Pull Through the Weft  x2    G      Rebuild after a sweeper                  U
```

## ANALYSIS

### DECK IDENTITY

Blue-green Lander ramp control. The Lander package and Icetill Explorer's extra land drop build toward a high land count while nine counters, bounce and auras hold the board. Starfield Vocalist is used here for something the other two builds of this archetype cannot: it doubles triggers caused by a permanent ENTERING the battlefield, which in a control shell means ETB value rather than landfall - Uthros Scanship draws four and discards two, Extinguisher Battleship destroys two noncreature permanents and deals 8 damage to each creature, Glacier Godmaw makes two Landers. The game ends with Harmonious Grovestrider, whose power and toughness equal the number of lands you control - the deck's own resource turned into the clock - with Glacier Godmaw supplying the trample it needs to actually connect.


### THE SAME KEYSTONE, A COMPLETELY DIFFERENT JOB

`Starfield Vocalist` reads *"If a permanent entering the battlefield causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time."* The other two builds of this archetype use it on **landfall**. This one uses it on **enter-the-battlefield value**, which is a bigger lever in a control shell:

| Card | Undoubled | Doubled |
|---|---|---|
| `Uthros Scanship` | draw 2, discard 1 | draw 4, discard 2 (net +2 cards) |
| `Extinguisher Battleship` | destroy 1 permanent, 4 damage to each creature | destroy 2, **8 damage to each creature** |
| `Glacier Godmaw` | 1 Lander | 2 Landers |
| `Quantum Riddler` | draw 1 | draw 2 |

**A correction worth stating plainly:** my first draft of this deck claimed "each Lander-maker makes two Landers." That is false. `Sami's Curiosity`, `Divert Disaster` and `Seedship Impact` create Landers as a **spell effect**, not a triggered ability, so Vocalist does nothing for them. Only the ETB Lander-makers double. The real count is **8 of 23 nonland cards** carry a trigger Vocalist doubles — still the most of the three builds, but not what I first wrote.

### THE FINISHER, AND THE HOLE IT HAD

`Harmonious Grovestrider` is *"Ward {2}"* and *"power and toughness are each equal to the number of lands you control."* On 17 lands plus Landers it is a 15/15 or larger by turn 8. Every land you draw — the thing that normally makes a control deck lose — is +1/+1 on the clock and +1 to `Consult the Star Charts`' X.

It also has **no trample and no evasion**, which the grill caught and I had not: a 15/15 is stopped indefinitely by any 1/1, in a cube whose artifact density is 29.7% and where Lander, Drone and Robot tokens are everywhere. The deck as first built named a finisher that could not finish. `Glacier Godmaw` fixes it at the same mana value `Mouth of the Storm` occupied, with printed trample, an ETB Lander, and a landfall team-pump — all doubled.

### WHAT THE GRILL CHANGED

This was the deck the grill improved most, and two of the four blocking findings were things I should have caught:

| Change | Why |
|---|---|
| +`Extinguisher Battleship` | I wrote that no card in UG answers the cube's sweeper class. I never checked **colourless**. This is a `{8}` colourless 10/10 that *is* one of the cube's five sweepers, and `Harmonious Grovestrider` Stations it past its `5+ | Flying, trample` mode in one tap. It is what the spare rare slot was for. |
| +`Cryoshatter ×2` | The deck had **zero** ways to destroy a resolved creature — 4 counters, 2 bounce, 1 owner-choice tuck, 1 artifact-only destroy, 1 temporary −3/−0. |
| `Mouth of the Storm` → `Glacier Godmaw` | Same 7 mana. One blanks an attack for a turn and kills nothing; the other gives the deck its only trample. |
| Sideboard: `Cerebral Download` → `Pull Through the Weft ×2` | Cerebral Download answered no threat class in the cube. Pull Through the Weft rebuilds after a sweeper and puts two lands back — straight onto Grovestrider's power. |

Assembly went from p=0.77 to **p=0.85**, and the turn-1 play rate from 32% to **58%**.

### THE HONEST WEAKNESSES

- **Slot bands.** Threats sit at 21.7% against a 5–10% control band. The Challenger reproduced the gate's arithmetic and confirmed the band is **mathematically unreachable** at 40 cards and turn 8 — 17.4% is the floor. But the increment above that floor is my judgment, not the gate's, and it's recorded that way.
- **`raced` is accepted, not mitigated.** The first *body* arrives on turn 2, and `Uthros Scanship` cannot block at all until 8 charge counters. Fixing it means cutting counters, and interaction is already at the floor of its band.
- **The graveyard class is conceded** to the sideboard.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:4  2:8  3:2  4:4  5:3  7:1  8:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.7: Quantum Riddler@0.9, Extinguisher Battleship@0.8) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 9.6: Icetill Explorer@0.9, Consult the Star Charts@0.9, Glacier Godmaw@0.6, Divert Disaster@0.4, Divert Disaster@0.4, Seedship Impact@0.4) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 58%  T2 96%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Extinguisher Battleship, Glacier Godmaw, Harmonious Grovestrider
  OK        single_large_threat: Cryoshatter, Desculpting Blast, Unravel, Divert Disaster, Extinguisher Battleship
  OK        noncreature_permanents: Seedship Impact, Desculpting Blast, Extinguisher Battleship, Unravel, Divert Disaster
  OK        stack: Unravel, Divert Disaster
  CONCEDED  graveyard: No mainboard graveyard answer; at 12.5% cube density (31 of 249) it does not earn one of 23 nonland slots. Answered from the sideboard with Dauntless Scrapbot x2, which exiles each OPPONENT'S graveyard only - so it never turns off Icetill Explorer's 'You may play lands from your graveyard' - and creates a Lander.
```

- Curve PASS, Assembly PASS, Goldfish PASS, Coverage PASS. Phase 9 repairs improved assembly from p=0.77 to p=0.85 and the turn-1 play rate from 32% to 58%.
- Threats at 21.7% against a 5-10% control band: the Challenger independently reproduced the gate and confirmed the band is unreachable at this deck size and thesis turn - 17.4% is the arithmetic minimum. The increment from 17.4% to 21.7% is the Phase 9 addition of a trample body and a sweeper, and is a judgment call rather than gate-forced. Recorded as such rather than as forced.
- Engine & Infra at 39.1% against 10-20%: 5 of the 9 copies are draw/selection (21.7%, essentially in band); the other 4 are Lander ramp, which the three-slot framework has no bucket for. The ramp is the finisher's power stat.
- Coverage: after Phase 9, four of five classes are COVERED. Only graveyard is conceded, answered from the sideboard. wide_boards was previously carried by Mouth of the Storm's '-3/-0 until your next turn', which the record itself said kills nothing; Extinguisher Battleship replaced a fog with an actual mass-removal effect.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | The one deck of the three where flooding is close to free. Harmonious Grovestrider x2 reads 'power and toughness are each equal to the number of lands you control', so every surplus land is +1/+1 on the finisher; Consult the Star Charts digs X = lands; Icetill Explorer's 'You may play an additional land on each of your turns' plus 'You may play lands from your graveyard' turns a land-heavy draw into two drops a turn. |
| screw | mitigation | 17 lands is the computed target with zero deviation, and the goldfish check measures 88% to have three lands by turn 3 - the best of the three builds. Sami's Curiosity ({G}, and it gains 2 life) and Biomechan Engineer ({G}{U}) bank a Lander on a stumbled draw, and Cryoshatter and Divert Disaster are both castable on one and two lands respectively. Honest caveat: a Lander costs {2} MORE and returns a TAPPED basic, so it does not fix the turn you stumble. |
| decapitation | mitigation | Both primary finishers are Ward-protected - Harmonious Grovestrider Ward {2} - and Grovestrider is at 2 copies, its legal maximum. The payoff role assembles at p=0.85 without any single card, across four different cards. Starfield Vocalist answered on sight costs value, not the plan: every card in the deck functions fully undoubled, which is the correct measure of how load-bearing it is. |
| gas-out | mitigation | 4 of 23 nonland copies generate cards unconditionally: Uthros Scanship x2 ('draw two cards, then discard a card', doubled to net +2), Quantum Riddler ('When this creature enters, draw a card') and Consult the Star Charts. An earlier draft claimed 6 by counting Unravel x2, whose draw is conditional on 'the amount of mana spent ... was less than its mana value' - the Challenger measured that at 14.1% of the pool (39 of 276 names carry warp or a cost reduction), so it is a rider, not a card engine. 4 of 23 is still the best of the three builds. |
| raced | accepted | Nine interaction slots and a 17-land base mean a thin early board: Cryoshatter x2 and Divert Disaster x2 are the turn-1 and turn-2 plays, but the first BODY is a 2/2 Biomechan Engineer, and Uthros Scanship x2 is an 'Artifact - Spacecraft' that cannot block at all until 8 charge counters. Mitigating means cutting counters for cheap creatures, and interaction is already at 39.1%, the floor of its 35-45% band - cutting two would drop it below band and turn this into the midrange swarm build that is separately on the shortlist. The identity cost is the reason to pick this deck at all. Partial offsets: Glacier Godmaw's landfall grants the team vigilance so blockers can also attack, Quantum Riddler is a 4/6 flying wall, and Extinguisher Battleship's doubled ETB deals 8 damage to each creature, which is a reset against a wide fast board. Skystinger x2 is the boarded correction against the cube's 22.5% evasion density. |
| disruption-fizzle | mitigation | There is no single critical turn to disrupt - the deck wins by accumulating land count and card advantage, so an answer to any one piece delays rather than fizzles. Four counter copies (Unravel x2, Divert Disaster x2) protect the finisher on the turn it lands, and Ward {2} on Harmonious Grovestrider taxes removal on top of that. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Famished Worldsire | Mythic 8-drop; 'Devour land 3' sacrifices lands, and this build's finisher is Harmonious Grovestrider, whose 'power and toughness are each equal to the number of lands you control' is directly reduced by sacrificing them. The two payoffs fight. |
| Starwinder | Rare 7-drop 7/7; 'Whenever a creature you control deals combat damage to a player, you may draw that many cards' needs combat to convert, and this deck already has 2 Uthros Scanship drawing on ETB without attacking. Would also be a 6th rare with nothing left for the sideboard. |
| Anticausal Vestige | Rare; its trigger is 'When this creature LEAVES the battlefield', which Starfield Vocalist does NOT double - the doubler only applies to triggers caused by a permanent ENTERING. It is the one big blue-green body that gains nothing from the deck's centrepiece. |
| Fungal Colossus | 'costs {X} less to cast, where X is the number of differently named lands you control' - Landers fetch only basics, so differently-named lands cap at 4 here (Island, Forest, Tangled Islet, Breeding Pool). A 5/5 vanilla for about {2}{G} is fine but it has no ETB for Vocalist to double and no Ward. |
| Specimen Freighter | {5}{U} for 'return up to two target non-Spacecraft creatures to their owners' hands', doubled to four - genuinely powerful, but at 6 mana it competes with Mouth of the Storm, and Station means it is a 4/7 that cannot attack or block until 9 charge counters. |
| Mechanozoa | Maindeck cut, kept in the sideboard. {4}{U}{U} for a 5/5 with a doubled tap-and-stun; the UU alongside Unravel's UU and Quantum Riddler's UU is real strain on 11 blue sources. |
| Cerebral Download | Maindeck cut, kept in the sideboard. 'Surveil X, where X is the number of artifacts you control. Then draw three cards.' Draw three is strong, but X counts artifacts and this deck runs only 8 of 23 nonland copies that make artifact tokens, so the surveil is usually 0-2. |
| Steelswarm Operator | Excellent in the two aggressive builds because it pays a Lander's {2} crack cost, but this deck runs only 8 of 23 basic-fetchers and has 17 real lands, so it far more often has the {2} spare. The slot went to interaction. |
| Cryogen Relic | 'When this artifact enters or leaves the battlefield, draw a card' is two cards under the doubler, and it is the best pure-attrition card in the pool - cut only because the finisher count was already at the assembly floor (p=0.77) and could not afford another non-threat. |
| Selfcraft Mechan | 'you may sacrifice an artifact ... put a +1/+1 counter on target creature and draw a card' - the sacrifice is fed by 8 of 23 Lander-makers, but at {3}{U} for a conditional single card it is behind Uthros Scanship's unconditional draw two. |
| Codecracker Hound | ETB dig 2 doubled to dig 4, but 'the other into your graveyard' means it discards half of what it sees, and a 2/1 body is irrelevant in a deck whose blockers need to survive. |
| Starbreach Whale | 3/5 flier with a doubled surveil 4 - a fine card, but surveil is filtering rather than card advantage and this deck already runs 2 Uthros Scanship for real draw. |
| Annul | Maindeck cut, sideboard 2. 'Counter target artifact or enchantment spell' is narrow; Unravel counters anything for two more mana and Desculpting Blast answers the same permanents after they resolve. |
| Tractor Beam | {2}{U}{U} to steal a creature or Spacecraft permanently - powerful, but a third double-blue card alongside Unravel x2 and Quantum Riddler on 11 blue sources, and it is dead against a creatureless draw. |
| Larval Scoutlander | Two land entries from one card, which is load-bearing in the two aggressive builds - but this deck wants LANDS for Harmonious Grovestrider's power, and Larval Scoutlander's ETB asks you to 'sacrifice a land or Lander' first, which is a real cost when your finisher counts lands. |
| All-Fates Scroll | '{T}: Add one mana of any color' fixes and '{7}, {T}, Sacrifice: Draw X cards, where X is the number of differently named lands you control' - X caps at 4 here for the same basics-only reason as Fungal Colossus. |
| Survey Mechan | Hexproof flier whose activation 'costs {X} less, where X is the number of differently named lands you control' - same 4-land cap leaves roughly a {6} activation for 3 damage. |
| Drix Fatemaker | 'Each creature you control with a +1/+1 counter on it has trample' would fix the finisher's evasion problem, but Glacier Godmaw supplies printed trample on a body that is ALSO a payoff and an ETB Lander, so a dedicated trample granter is redundant once Godmaw is in. |
| Eusocial Engineering | 'Landfall - create a 2/2 colorless Robot artifact creature token', doubled to two per land drop, would genuinely fix the accepted raced mode with blockers that cost no counterspell slots. Excluded because it is the payoff of a different build from this same shortlist; putting it here blurs two decks. |
| Seedship Agrarian | Its 'Whenever this creature becomes tapped, create a Lander token' pairs with Station, but this deck runs Uthros Scanship as a sorcery-speed draw spell and never Stations it - there is no Station fodder loop to join. |
| Close Encounter | 'deals damage equal to the power of the chosen creature' is instant-speed hard removal for 2 mana with a 13-17 power Harmonious Grovestrider on board. Lost the slot to Cryoshatter only because Cryoshatter answers a creature the turn it arrives, without needing your own big body already in play. |
| Mouth of the Storm | Cut at Phase 9. 'creatures your opponents control get -3/-0 until your next turn' blanks an attack for a turn but kills nothing; at 7 mana the slot was better spent on Glacier Godmaw (same cost, printed trample, both triggers doubled) and Extinguisher Battleship (an actual sweeper). |
| Sinister Cryologist | Cut at Phase 9. A doubled -6/-0 is a fine combat trick, but the deck needed cards that DESTROY a resolved creature; before the repair 0 of 23 nonland copies could. Also: warping it for {U} exiles it at the next end step, so it never provides the blocker the raced entry had credited it with. |
| Lost in Space | Cut at Phase 9. 'the owner puts it on their choice of the top or bottom of their library' means the opponent chooses, so at 4 mana it is a tempo answer that can be redrawn immediately. |
| Galactic Wayfarer | Cut at Phase 9 to make room for Extinguisher Battleship. It was already at 1 copy against a cap of 2 and was the most-named cut target in the sideboard plan, which is a sign it was not earning a maindeck slot. |
| Cerebral Download | Cut from the sideboard at Phase 9: it answers zero threat classes in dossier.threat_profile, and its 'Surveil X, where X is the number of artifacts you control' is near-zero here because Landers are cracked and leave play. |
| Mechanozoa | Cut from the sideboard at Phase 9. A doubled tap-and-stun is real, but at {4}{U}{U} it strains 11 blue sources, and the class it answers is already covered by 5 maindeck copies. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.13   Ramp cards: 8   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.49 adj [MV 3.13 vs 2.5, 8 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  41.9%  prod  52.9%  gap -11.0pp  [OK]
  U  demand  58.1%  prod  64.7%  gap  -6.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base:                            cube_mainboard
commons_uncommons_max_2:         PASS
rares_mythics_max_1:             PASS
rare_mythic_total_cap_6:         PASS - exactly 6 after Phase 9: Starfield Vocalist, Icetill Explorer, Consult the Star Charts, Quantum Riddler, Breeding Pool, Extinguisher Battleship. The 6th slot was left unspent in the pre-grill draft; the Challenger correctly called that under-justified, since the sideboard was rare-free anyway and the slot therefore bought nothing. Sideboard remains entirely commons/uncommons.
all_cards_in_cube:               PASS - exact-name match against the working pool cache
colour_legality:                 PASS - effective_cost.best_mode(card, [U,G], []) non-None for all 50
basics:                          format-supplied, exempt from copy limits
```
