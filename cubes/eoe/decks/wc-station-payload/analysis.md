---
deck_name: "wc-station-payload"
cube_id: "eoe"
cube_slug: "eoe"
colors: "W"
format: "40-card"
built_at: "2026-08-03T04:47:03Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  16x Plains              Basic land, untapped, {W}
  1x Secluded Starforge  Colourless utility land; {5},{T} makes a 2/2 Robot
```

### CREATURES (5)

```
CMC  Card                     Qty   Color  Role                                     Rar
  2  Dockworker Drone         x1    W      Station fuel (enters with a counter)     C
  2  Sunstar Chaplain         x1    W      Tapped-creature counter engine           R
  3  Brightspear Zealot       x2    W      Vigilance body: attacks AND Stations     C
  3  Flight-Deck Coordinator  x1    W      Station fuel / tapped-creature lifegain  C
```

### INSTANTS & SORCERIES (9)

```
CMC  Card             Qty   Color  Role                                    Rar
  1  Focus Fire       x2    W      Scaling removal                         C
  1  Honor            x2    W      Card economy / permanent Station value  U
  3  Emergency Eject  x2    W      Instant permanent answer                U
  3  Zealous Display  x2    W      Pre-Station counter spike               C
  4  Radiant Strike   x1    W      Artifact and tapped-creature removal    C
```

### OTHER SPELLS (9)

```
CMC  Card                           Qty   Color  Role                                     Rar
  2  Lumen-Class Frigate            x1    W      Station-rate multiplier / anthem         R
  2  Wurmwall Sweeper               x2    C      Cheap Spacecraft payload (4+ threshold)  C
  3  Banishing Light                x2    W      Unconditional permanent answer           C
  4  Wedgelight Rammer              x2    W      Spacecraft payload / token producer      U
  5  Dawnsire, Sunstar Dreadnought  x1    C      Payload (kill mechanism)                 M
  7  Pinnacle Kill-Ship             x1    C      Removal (ETB 10 damage)                  C
```

## SIDEBOARD (10)

```
Card                     Qty   Color  Role / When to board in                                       Rar
Dauntless Scrapbot       x2    C      Graveyard decks (31 cards / 12.5% of cube)                    U
All-Fates Stalker        x2    W      Creature decks; exile plus a body                             U
Thaumaton Torpedo        x2    C      Noncreature permanents; discounted after a Spacecraft attack  C
Radiant Strike           x1    W      Second artifact answer; 3 life vs racing decks                C
Seam Rip                 x1    W      Fast decks; one-mana exile of a cheap threat                  U
Extinguisher Battleship  x1    C      Creature decks; sweeper plus a Spacecraft payload             R
Rescue Skiff             x1    W      Attrition decks; rebuy a creature or enchantment              U
```

## ANALYSIS

### DECK IDENTITY

Tokens as fuel rather than as the kill. Station reads 'Tap another creature you control: Put charge counters equal to its power on this Spacecraft. Station ONLY AS A SORCERY' - it is an ability of the Spacecraft whose cost is a tap, so it costs no mana, summoning-sick creatures are legal fuel, and an instant-heavy control shell can charge every turn and still hold up answers. Two consequences the Phase 9 grill sharpened. First, because Station is sorcery-speed in YOUR main phase, Zealous Display resolves before you Station and every body then charges for its boosted power - +2 charge counters per body for three mana, the largest counter spike in the pool. Second, Dawnsire's 10+ mode reads 'Whenever you ATTACK', which needs an attacker, and a tapped attacker cannot Station - so Brightspear Zealot's vigilance is what makes the intermediate mode payable at all. Lumen-Class Frigate at 2 counters raises what every other body Stations for, permanently. Dawnsire at 20+ is a 20/20 flier that ends the game in one swing.

### THE RULE THE WHOLE DECK IS BUILT ON, AND THE ONE I GOT WRONG

Station reads *"Tap another creature you control: Put charge counters equal to its power on this Spacecraft. **Station only as a sorcery.**"* Three consequences drive every card choice here:

1. **It costs no mana** — only a tap and a sorcery-speed window. So a reactive, instant-heavy shell is fully compatible with charging every single turn. You Station in a main phase and still hold up answers. This is what made `most reactive attrition` the winning skeleton.
2. **Charge counters equal the tapped creature's POWER.** Power-per-mana is therefore the entire selection criterion for the fuel slots — a 1/1 pays 1, Sunstar Chaplain pays 3.
3. **Summoning sickness is irrelevant**, because the tap is a cost of the *Spacecraft's* ability, not the creature's.

I got a fourth consequence wrong, and the Phase 9 Challenger caught it. Because Station is sorcery-speed **in your own main phase**, a pump spell resolves *first* and every body then charges for its **boosted** power. I had excluded **Zealous Display** reasoning it was blank in a deck that taps instead of attacking — while one entry away I had correctly rejected Dual-Sun Adepts *because* its pump had to resolve before the Station. Same interaction, opposite conclusions. Zealous Display is now in at ×2: `Creatures you control get +2/+0` is **+2 charge counters per body for three mana**, the largest counter spike in the pool.

### THE VIGILANCE PROBLEM

Dawnsire's intermediate mode reads *"**10+** | Whenever you **attack**, Dawnsire deals 100 damage to up to one target creature or planeswalker."* That needs an attacker — and an attacker is tapped, so it cannot Station that turn. Before Phase 9 this list had **0 of 9 creature copies with vigilance**, which meant every turn you fired the 100-damage trigger you forfeited that body's charge counters.

**Brightspear Zealot ×2** fixes it exactly: declare it as an attacker (vigilance, so it does not tap) → the `Whenever you attack` trigger fires → in the **postcombat main phase**, which is a legal sorcery window, tap the still-untapped Zealot as the Station cost. Attack and Station in the same turn. The Challenger verified this line independently.

### THE STATION ARITHMETIC (verified by both Phase 9 agents, from printed power)

| Body | base power | counters | with Frigate anthem |
|---|---|---|---|
| Dockworker Drone (enters with a +1/+1 counter) | 2 | 2 | 3 |
| Robot token (Wedgelight Rammer / Starforge) | 2 | 2 | 3 |
| Brightspear Zealot | 2 | 2 | 3 |
| Wurmwall Sweeper (once flipped at 4+) | 2 | 2 | 3 |
| Sunstar Chaplain | 3 | 3 | 4 |
| Flight-Deck Coordinator | 3 | 3 | 4 |

Goldfish, on the play: T3 Frigate + Honor on the Drone, Station once → **3 counters, anthem live**. T4 Wurmwall Sweeper + Sunstar Chaplain, Station the Drone → Sweeper flips at 4+ and becomes fuel itself. T5 cast Dawnsire, Station three bodies → **11 counters, 10+ met on turn 5**. T6 Zealous Display + Brightspear Zealot (two spells, so the Zealot's own +2/+0 is also live) → **+25 → 36 counters**, Dawnsire is a 20/20 flier and swings for lethal.

**Lethal on turn 6 unopposed**, so the locked `thesis_turn` of 8 is conservative, not optimistic — turn 8 is what you get once real mana goes to the seven interaction slots and you lose a body or two.

### WHERE THIS DECK IS HONESTLY WEAK

- **Access, not arithmetic.** Dawnsire is 1 card of 40 and the mainboard has no tutor. The Phase 9 repair raised P(seeing a payload whose threshold this deck can actually *reach*) from **35.0% to 73.7%** by adding Wurmwall Sweeper ×2 at a 4+ threshold — but a flipped Sweeper is a 2/2 (3 anthemed, 5 under Zealous Display). It is a grind clock. **The turn-6 lethal still rides on the 1-of mythic.**
- **The slot profile reads midrange, not control.** Disclosed plainly: Interaction 30.4% (4.6pp under the control floor), Threats/Payoffs 26.1% (16.1pp over), Engine 43.5% (23.5pp over). The grounds are real — in a Station deck the fuel *is* the win resource, since charge counters are denominated in power on the battlefield — but the numbers are what they are, and an earlier version of this table hid them behind a "Band residual" label. It does not any more.
- **Racing.** Accepted, not mitigated. Turns 2–5 are spent deploying small bodies that tap instead of blocking. Brightspear Zealot's 2/4 vigilance is the one free improvement; beyond that, fixing it would mean cutting fuel, which is the resource the kill is denominated in.

### THE ONE AUDIT NUMBER THAT IS WRONG

`accel_count` reads 4 (ramp 2 + cantrip 2). The ramp 2 is a false positive: Emergency Eject carries a Land Fetch tag, but its oracle reads *"**Its controller** creates a Lander token"* — the Lander goes to the **opponent**. This card ramps the other player. The Challenger re-ran the land target with the tag stripped and got 17 either way, so nothing downstream changes; it is recorded as wrong rather than silently accepted.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (control):  [PASS]
  MV distribution (23 nonland):  1:4  2:5  3:9  4:3  5:1  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.1: Pinnacle Kill-Ship@0.8, Lumen-Class Frigate@0.9, Wedgelight Rammer@0.8, Wedgelight Rammer@0.8, Wurmwall Sweeper@0.9, Wurmwall Sweeper@0.9) → p=0.92 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 8.2: Zealous Display@0.7, Zealous Display@0.7, Honor@0.9, Honor@0.9) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 89% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 58%  T2 93%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Focus Fire, Sunstar Chaplain
  OK        single_large_threat: Pinnacle Kill-Ship, Banishing Light, Emergency Eject
  OK        noncreature_permanents: Banishing Light, Emergency Eject, Radiant Strike
  CONCEDED  stack: White has no counterspell in this pool. The deck's substitute is that its payload is a permanent that must be answered on the battlefield rather than a spell that resolves once - and Dawnsire at 10+ threatens 100 damage to a creature every attack, so a reactive opponent must find a specific answer rather than trading.
  CONCEDED  graveyard: The mainboard runs no graveyard interaction: the 7 interaction slots are all aimed at permanents on the battlefield, which is what threatens a deck that needs to reach turn 8. The class is answered from the sideboard by Dauntless Scrapbot x2, which exiles each opponent graveyard on entry and leaves a 3/1 body that is itself Station fuel - so it is not a dead draw in the matchups where the class does not appear. Chrome Companion x2 was cut from the sideboard at Phase 9 per finding F8, which showed 4 of 10 slots aimed at a 12.45% class while the declared worst matchup got 2.
```


### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Secluded Starforge's `{5}, {T}: Create a 2/2 colorless Robot artifact creature token` is an unqualified repeatable sink that manufactures Station fuel from surplus mana. Honor x2 converts spare mana into a card plus permanent Station value. Zealous Display x2 turns three spare mana into +2 charge counters per body. Scope correction from Challenger finding F14: the Starforge's OTHER ability, `{2}, {T}, Tap X untapped artifacts you control: Target creature gets +X/+0`, is only net-positive when paid with NONCREATURE artifacts - tapping an artifact creature to pay it trades one charge counter for one. The 5 Spacecraft copies below their thresholds are the legal fuel for it. |
| screw | mitigation | Every coloured cost in the 23 nonland cards is a single {W} - after cutting Honored Knight-Captain there is no {W}{W} anywhere, cast or activated - and 16 of the 17 lands produce {W} untapped. Nine of the 23 nonland cards cost one or two mana (corrected from a self-inconsistent figure of six cards / seven copies per Challenger finding F12). The one real screw case is drawing Secluded Starforge as an early land, since it pays no {W}. |
| decapitation | mitigation | Dawnsire is the only 20-power kill and that is the accepted shape of a control deck, but the fallback is now one this list can actually reach. Corrected at Phase 9 per Challenger finding F13, which caught the previous entry claiming Pinnacle Kill-Ship's 7+ flier as a backup while skeleton_selection simultaneously disclaimed it ('no charge counter is ever deliberately spent on it') - both could not be true. The real backup is Wurmwall Sweeper x2 at a 4+ threshold, cleared the turn after it lands off two 2-power bodies. All of Dawnsire, Pinnacle Kill-Ship, Lumen-Class Frigate, Wedgelight Rammer and Wurmwall Sweeper read `Artifact - Spacecraft`, so every one of them is a NONCREATURE artifact below its threshold and creature removal cannot pre-empt any of them. |
| gas-out | mitigation | REPAIRED at Phase 9. The earlier entry conceded that 0 of 23 nonland cards were tagged Cards: Net-Positive or Self-Replacing, and Challenger finding F9 correctly identified that the pool answers this. Honor x2 (`Put a +1/+1 counter on target creature. Draw a card.`) is self-replacing AND its counter is permanent Station value - it raises one body's charge contribution by 1 for the rest of the game, which no other cantrip in mono-white does. Board economy remains: Wedgelight Rammer x2 each give two permanents from one card, and Secluded Starforge's `{5}, {T}: Create a 2/2 colorless Robot` manufactures fuel from surplus mana every turn. |
| raced | accepted | This is the deck's worst matchup and mitigating it fully would destroy the plan: cutting Station fuel for larger blockers directly lowers the charge counters per turn, which is the resource the entire kill is denominated in. What the Phase 9 repair DID buy, because it was free on the same slots: Brightspear Zealot x2 is a 2/4 with vigilance, so it blocks a ground attacker AND still pays a Station cost in the same turn - previously 0 of 9 creature copies had vigilance. The sideboard was also rebalanced per finding F8, which showed 4 of 10 slots aimed at a 12.45% graveyard class while the declared worst matchup got 2: graveyard is now 2 of 10 and anti-race is 5 of 10. |
| disruption-fizzle | mitigation | The critical turn is not a single turn - charge counters are permanent and accumulate across turns, so interaction aimed at any one Station turn costs counters, not the plan. There is no spell to counter: Station is an activated ability with no mana cost, so a counterspell-based opponent has no window on it at all. The one genuine answer is exiling or destroying Dawnsire itself, which is the decapitation case handled above. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Pinnacle Starcage | ETB exiles ALL artifacts and creatures with mana value 2 or less; token creatures have mana value 0 and Wurmwall Sweeper is mana value 2, so it exiles this deck's own Station fuel and one of its own Spacecraft. |
| Beyond the Quiet | Exiles all creatures and Spacecraft — it destroys this build's payload and its fuel in the same breath. |
| Adagia, Windswept Bastion | Its copy ability needs 12+ charge counters on the Planet itself; every Station tap spent charging Adagia is a tap not spent charging Dawnsire, and the land enters tapped. |
| The Eternity Elevator | {T}: Add {C}{C}{C} is real ramp, but its payoff line needs 20+ charge counters on itself, which competes directly with Dawnsire for the same finite supply of Station taps. |
| Devastating Onslaught | Requires {R} — outside this build's colours. |
| Moonlit Meditation | Requires {U} — outside this build's colours. |
| Synthesizer Labship | Requires {U} — outside this build's colours, though its 2+ threshold is the kind of cheap flip this build wants. |
| Thrumming Hivepool | Affinity for Slivers; this deck runs 0 Sliver cards, so it always costs the full {6}. |
| Bygone Colossus | 9/9 for {9}, warp {3} — the warp body exiles at the next end step, so it can Station only once before leaving; a 9-power one-shot tap is real but a whole card for 9 charge counters that arrive a turn late. |
| Dyadrine, Synthesis Amalgam | Requires {G} — outside this build's colours. |
| Infinite Guideline Station | Creates a Robot per MULTICOLORED permanent; this build runs 0 multicolored cards, so its ETB and its attack draw are both blank. |
| Anticausal Vestige | 7/5 for {6}, warp {4}, with a leaves-the-battlefield draw and cheat-into-play — powerful, but its body is only useful to this build as a single Station tap and it competes with Dawnsire for the same turn. |
| Astelli Reclaimer | Returns a noncreature nonland permanent from the graveyard scaled to mana spent; a fine rebuy but it consumes one of only 6 rare/mythic slots that the Spacecraft payload package needs. |
| Survey Mechan | Flying hexproof 1/3 with a {10} sacrifice ability discounted by differently-named lands; this build runs 1 differently-named nonbasic land, so the discount is near-zero. |
| Sami, Ship's Engineer | Requires {R} — outside this build's colours, though its end-step token off two tapped creatures would fit Stationing perfectly. |
| Starfighter Pilot | Surveil 1 whenever it becomes tapped pairs with Stationing, but a 2/2 for {1}{W} that only filters is a worse Station body than Dockworker Drone, which enters with a counter and therefore Stations for 2 immediately. |
| Pulsar Squadron Ace | Looks at the top five for a Spacecraft card; this build runs enough Spacecraft that the dig hits, but the card itself contributes 1 power of Station fuel and no threshold progress. |
| Dual-Sun Adepts | '{5}: Creatures you control get +1/+1 until end of turn.' The reasoning that excluded it was correct and is worth keeping: it only converts into charge counters if the pump resolves before the sorcery-speed Station, and at {5} per activation that consumes the whole turn's mana. Zealous Display does the same job for {2}{W} at +2/+0 instead of +1/+1, which is why the Phase 9 repair took Zealous Display and not this. |
| Starport Security | A one-mana artifact creature, cut at Phase 9 for slots. Station puts charge counters equal to POWER, so a 1/1 pays 1 (2 under the anthem) - the lowest power-per-mana in the fuel set. Its {3}{W},{T} tap-down also competes with Station for the same single tap each turn, so it is a flood outlet rather than free value. |
| Honored Knight-Captain | Two bodies from one two-mana card is real anthem leverage, since the Frigate pays per BODY rather than per card. Cut at Phase 9 for slots, and its second half was dead anyway: '{4}{W}{W}, Sacrifice this creature: Search your library for an Equipment card' finds nothing in a list with 0 Equipment, and it was the only {W}{W} cost in the deck. |
| Knight Luminary | Printed 3/2 with an ETB 1/1 Soldier and Warp {1}{W} - so 4 power across two bodies, 6 under the Frigate anthem, from one common, at 1.50 power per mana warped on turn 2. The Phase 9 Challenger caught that my earlier exclusion text claimed it 'Stations for about 2', which contradicts its printed power. The correct reason it is not in the list is slot pressure from the Phase 9 additions, not the false figure I originally gave. Strong swap-back candidate. |
| Starfighter Pilot | A printed 2/2 for {1}{W} whose 'whenever this creature becomes tapped, surveil 1' fires on every Station tap, every turn. My earlier exclusion called it 'a worse Station body than Dockworker Drone' - false, they are identical on that criterion at 2 power for the same cost. The real differentiator is that Dockworker Drone's +1/+1 counter turns on other cards; the surveil is otherwise free selection this deck could use. |
| Pulsar Squadron Ace | 'Look at the top five cards of your library. You may reveal a Spacecraft card from among them and put it into your hand.' The deck runs 7 Spacecraft copies, so the dig is live, and it answers the real access problem - Dawnsire is 1 of 40. Contested at Phase 9 in favour of adding a genuinely REACHABLE second payload (Wurmwall Sweeper at 4+) rather than digging harder for thresholds the deck cannot clear. If you want the mythic more often rather than a redundant payload, this is the swap. |
| Lightstall Inquisitor | A {W} 2/1 with vigilance - the highest power-per-mana body in the mono-white pool, and vigilance is exactly what Dawnsire's 'whenever you attack' mode needs. Contested at Phase 9 on its ETB: 'each opponent exiles a card from their hand and may play that card for as long as it remains exiled' hands the opponent access to a card in a deck whose plan is surviving to turn 8. Brightspear Zealot buys the same vigilance at common with 4 toughness instead of 1. |
| Sunstar Expansionist | 2/3 for {1}{W} with 'Landfall - whenever a land you control enters, this creature gets +1/+0 until end of turn', which would be 3 power to Station on any turn you make a land drop. Contested at Phase 9: it needs the land drop resolved before the sorcery-speed Station, which is the same main-phase window Zealous Display now occupies, and Zealous Display raises EVERY body by 2 rather than one body by 1. |
| Tezzeret, Cruel Captain | '0: Untap target artifact or creature' would allow a second Station tap from the same body. It is a LOYALTY ability, so once per turn - roughly 2 to 4 extra counters for a scarce rare slot. Its +1/+1 rider needs an artifact CREATURE, and the Frigate is not one until 12+ and Dawnsire not until 20+, so on the turns that matter it hits only a Dockworker Drone. Its -3 fetches an artifact with mana value 1 or less, of which this list runs 0. |
| Cosmogrand Zenith | 'Whenever you cast your second spell each turn' cannot fire on the turn this deck casts its {5} payload, because it is tapped out by construction - which is exactly the turn two rejected sketches leaned on it for. With only 4 of 23 nonland cards at one mana, double-spell turns are the exception in a shell holding up instants. |
| Chrome Companion | 'Whenever this creature becomes tapped, you gain 1 life' is free value in a deck that taps a creature every turn to Station, and its {2},{T} bottoms a graveyard card. Cut from the sideboard at Phase 9 per finding F8: it was 2 of 4 slots aimed at a 12.45% graveyard class while the deck's self-declared worst matchup (racing) had 2 of 10. Its own {T} ability also competes with Station for the single tap. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.23 adj [MV 2.83 vs 2.5, 4 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  W  demand 100.0%  prod  94.1%  gap  +5.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Base = cube mainboard only ........................................ PASS
Commons/uncommons max 2 copies each (mainboard + sideboard) ....... PASS
Rares/mythics max 1 copy each ..................................... PASS
Max 6 rares+mythics across mainboard and sideboard ................ PASS (5/6: Dawnsire Sunstar Dreadnought M, Lumen-Class Frigate R, Sunstar Chaplain R, Secluded Starforge R mainboard; Extinguisher Battleship R sideboard)
All cards drawn from the eoe cube pool ............................ PASS
Basic lands format-supplied, unlimited ............................ PASS (16 Plains)
Mainboard = 40 cards .............................................. PASS
Sideboard = 10 cards .............................................. PASS
```