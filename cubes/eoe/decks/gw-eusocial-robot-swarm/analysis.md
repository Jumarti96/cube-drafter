---
deck_name: "gw-eusocial-robot-swarm"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GW"
format: "40-card"
built_at: "2026-08-03T17:20:05Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
9x Forest                Basic - Lander fetch target
5x Plains                Basic - Lander fetch target
2x Radiant Grove         The only free GW dual; enters tapped
```

### CREATURES (10)

```
CMC  Card                  Qty   Color  Role                                                      Rar
  2  Dockworker Drone      x2    W      Token body; enters with a +1/+1 counter                   C
  3  Cosmogrand Zenith     x1    W      Two Soldier tokens per second spell                       M
  3  Galactic Wayfarer     x2    G      Accelerant: 3/3 + Lander                                  C
  3  Rayblade Trooper      x2    W      Counter + token on a counter-creature death               U
  4  Seedship Agrarian     x2    G      Repeatable Lander on tap; grows on landfall               U
  5  Exalted Sunborn       x1    W      DOUBLER: twice as many tokens, always                     M
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                  Qty   Color  Role                                                      Rar
  1  Sami's Curiosity      x2    G      Accelerant: MV1 Lander                                    C
  2  Biosynthic Burst      x2    G      Reach + indestructible + a counter, at instant speed      C
  3  Emergency Eject       x1    W      Instant: destroys any nonland permanent                   U
```

### OTHER SPELLS (9)

```
CMC  Card                  Qty   Color  Role                                                      Rar
  2  Lumen-Class Frigate   x1    W      ANTHEM: other creatures get +1/+1 at Station 2+           R
  3  Banishing Light       x2    W      Exiles any nonland permanent                              C
  3  Bioengineered Future  x1    G      ENGINE: creatures enter with counters per land            R
  3  Larval Scoutlander    x2    G      Accelerant: two land ETBs at once                         U
  4  Loading Zone          x1    G      ENGINE: doubles every counter, including charge counters  R
  5  Eusocial Engineering  x2    G      PRIMARY PAYOFF: a Robot per land ETB                      U
```

## SIDEBOARD (10)

```
Card                  Qty   Color  Role / When to board in                                   Rar
Seedship Impact       x2    G      Artifact/ench answer vs 74 artifacts (29.7%)              U
Dauntless Scrapbot    x2    C      Graveyard exile vs 31 GY cards (12.5%)                    U
Shattered Wings       x2    G      Artifact/ench/flier vs 56 evasion cards (22.5%)           C
Skystinger            x1    G      3/3 reach; +5/+0 when it blocks a flier                   C
All-Fates Stalker     x2    W      Exiles a creature; warp {1}{W}                            U
Beyond the Quiet      x1    W      Asymmetric reset: we rebuild off enchantments+Landers     R
```

## ANALYSIS

### DECK IDENTITY

Selesnya landfall token swarm. Eusocial Engineering turns every land ETB into a 2/2 Robot, and Lander tokens manufacture those ETBs on demand at instant speed for {2}. Exalted Sunborn doubles every token created under your control - the Robots AND the Landers themselves, so one Sami's Curiosity becomes two Landers and one land drop becomes two Robots. Bioengineered Future then makes each of those Robots enter with a +1/+1 counter for every land that entered this turn - and because Eusocial Engineering's Robot is created BY the land ETB, it is always created after that land is already on the battlefield, so the counter is never zero. Loading Zone doubles every one of those counters and every Station charge counter, which turns Lumen-Class Frigate's board-wide anthem on off a single tap. The Lander package doubles as the manabase, because 'search your library for a basic land card' fetches either basic and this colour pair has exactly one free dual.

### ONE LANDER, FOUR ROBOTS

The reason this deck exists in white rather than mono-green is a single mythic:

**Exalted Sunborn** — *"If one or more tokens would be created under your control, twice that many of those tokens are created instead."*

There is no token-type restriction in that sentence. **A Lander is a token.** So the doubling compounds through the engine rather than sitting at the end of it:

```
Sami's Curiosity ({G})            → 1 Lander
  … with Exalted Sunborn          → 2 Landers
  crack both ({2} each)           → 2 land ETBs
  … each triggers Eusocial Eng.   → 2 Robots
  … doubled again by Sunborn      → 4 Robots
```

One green mana and four generic, from a common sorcery, becomes four 2/2 artifact creatures — and with Bioengineered Future out they are 3/3s or larger. **12 of the 24 nonland cards create a token under your control**, so Sunborn is live on half the deck.

One honest exclusion from that count: **Emergency Eject** reads *"**Its controller** creates a Lander token."* Used as removal on an opponent's permanent, the Lander goes to *them*. It is not part of the doubled twelve.

### THE ORDERING THAT MAKES BIOENGINEERED FUTURE UNCONDITIONAL

*"Each creature you control enters with an additional +1/+1 counter on it for each land that entered the battlefield under your control this turn."*

For most decks this is a sequencing puzzle — you must play the land before the creature. Here it is automatic, and both grill agents verified the reasoning independently:

Eusocial Engineering's Robot is created **by** the land ETB. The land entering is the *trigger condition*; the Robot is created when that trigger *resolves*, which is strictly after the land is already on the battlefield. So at the moment a Robot enters, the count of lands that entered this turn is **never zero**. Every Robot is a 3/3 floor — and on a Larval Scoutlander turn, where *"up to two basic land cards"* arrive together before either Landfall trigger resolves, both Robots enter as **4/4s**.

The clause also counts lands *historically* (*"entered … this turn"*), so it holds even if the land is destroyed in response.

### LOADING ZONE DOUBLES THE OTHER KIND OF COUNTER

*"If one or more counters would be put on a creature, Spacecraft, or Planet you control, twice that many of each of those kinds of counters are put on it instead."*

The obvious half is that it doubles all 10 counter-placing effects in the list. The sharper half is **charge** counters. Station reads *"Put charge counters equal to its power on this Spacecraft"* — so with Loading Zone out:

- Tapping **any 1-power creature** puts Lumen-Class Frigate at 2+, turning on *"Other creatures you control get +1/+1"* permanently, for free.
- Two taps of a 3/3 Galactic Wayfarer put **Larval Scoutlander** at 12 — well past its 7+ Flying threshold.

Loading Zone replaced Drix Fatemaker after the self-grill produced a count I couldn't rebut: Fatemaker grants trample only to creatures *with a +1/+1 counter*, the 2/2 Robots have no counter of their own, and only **2 of 24** cards put counters on the whole board. The trample clause was reaching four to six bodies, not the swarm.

### THE MANABASE IS THE FIXING PACKAGE

G/W has exactly **one** free dual in this cube — Radiant Grove, a common that enters tapped. There is no G/W shockland. That would normally be disqualifying for a two-colour deck. It isn't here, because the Lander reads *"search your library for a **basic land** card"* — unrestricted as to which — and **14 of 16 lands are basics**. Larval Scoutlander's *"up to two basic land cards"* can fetch one Forest and one Plains off a single card.

Two qualifications the grill forced into the record, both true:

1. **The fix is a turn behind.** The Lander costs {2} to crack and the fetched land *"enters tapped."*
2. **It cannot fix turn three.** Bioengineered Future ({1}{G}{G}) is the deck's one double-pip card with **no warp mode** — Eusocial Engineering ({1}{G}) and Exalted Sunborn ({1}{W}) both sidestep their doubles — and only 2 of 24 nonlands make a Lander before turn 3. P(2+ green sources by turn 3 on the play) is 0.667. The Forest count went from 7 to 9 in response.

Note the small irony: **Radiant Grove, the deck's own fixing land, is the one land the fixing package cannot find** — it is `Land — Forest Plains`, not `Basic Land`.

### WHAT THIS DECK GIVES UP

The `raced` mode is **accepted**, and the first draft's excuse for it was wrong. It claimed cheap interaction would require cutting Lander accelerants; the grill refuted that by naming three one-mana in-colour answers (Hardlight Containment, Seam Rip, Focus Fire). The real cost is narrower and is now stated as such: the rare budget is spent 6 of 6 on cards that make or double the board, and every one-mana answer added is a slot not spent on a token producer — which is what the turn-6 clock is made of. Against the fastest starts the deck blocks with 2/2 Robots until the anthem or the counters make those blocks profitable, and a hand without a two-drop loses.

### ONE CAVEAT ON THE EVASION FIX

Biosynthic Burst grants reach *"until end of turn"* on an instant, not on a body. It answers a flier by being cast in the opponent's declare-attackers step so a ground creature can then block — a combat trick, not a permanent air defence. The gap against the cube's 56 evasion cards is **narrowed, not closed**; Skystinger and Shattered Wings in the sideboard are the real fix when that matchup shows up.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:2  2:5  3:11  4:3  5:3
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 9.6: Lumen-Class Frigate@0.8, Cosmogrand Zenith@0.8) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 8 copies (effective 7.8: Larval Scoutlander@0.9, Larval Scoutlander@0.9) → p=0.94 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 34%  T2 80%  T3 96%
Coverage:  [PASS]
  CONCEDED  wide_boards: Neither green nor white in this cube offers a mainboard-castable sweeper this deck wants: the only one in colour, Beyond the Quiet ('Exile all creatures and Spacecraft'), is symmetric and would exile the token swarm that IS the win condition. It is in the sideboard precisely because the asymmetry only appears in matchups where our board is already outclassed. Mainboard, the answer to a wide board is to be wider - Eusocial Engineering x2 make a Robot per land ETB, Exalted Sunborn doubles every one, and Lumen-Class Frigate anthems the result.
  OK        single_large_threat: Banishing Light, Emergency Eject, Biosynthic Burst
  OK        noncreature_permanents: Banishing Light, Emergency Eject
  CONCEDED  stack: The G/W slice of this cube contains zero counterspells and zero hand disruption; the deck answers stack-based plans with a turn-6 clock instead.
  CONCEDED  graveyard: No mainboard graveyard answer; Dauntless Scrapbot x2 ('exile each opponent's graveyard') is a sideboard swap against the cube's 31 graveyard-interaction cards (dossier.threat_profile.graveyard_interaction.count, density 0.1245). The earlier figure of 27 could not be reproduced by the grill and is withdrawn.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | A surplus land is a 2/2 Robot from each Eusocial Engineering, doubled to two by Exalted Sunborn, entering with a +1/+1 counter per land that arrived this turn off Bioengineered Future, and a +1/+1 counter on each Seedship Agrarian. Larval Scoutlander x2 convert a spare land into two more ETBs. There is no dead land in this deck once Eusocial Engineering has resolved. |
| screw | mitigation | The Lander package is the fixing rather than the manabase: a Lander reads 'search your library for a BASIC land card', which fetches EITHER Forest or Plains, and 14 of the 16 lands are basics. Larval Scoutlander searches for 'up to two basic land cards', so one copy can take one Forest and one Plains. 11 green and 7 white sources against a 17/11 pip split. Eusocial Engineering and Exalted Sunborn both carry a SINGLE-pip warp cost ({1}{G} and {1}{W}) that sidesteps their doubles entirely. Stated qualification from the grill, which the record owns: Bioengineered Future ({1}{G}{G}) is the one double-pip card with no warp mode, only 2 of 24 nonlands (Sami's Curiosity x2) make a Lander before turn 3, and the Lander's fix costs {2} and arrives TAPPED - so the package cannot fix a turn-three double-green. The Forest count was raised from 7 to 9 in response. |
| decapitation | mitigation | Eusocial Engineering is a 2-of and P(at least one in the 13 cards seen by turn 6) is 0.55, which the record states rather than hides - so the deck does not depend on it. Other token sources verified present: Cosmogrand Zenith (two Soldiers per second spell), Rayblade Trooper x2 (a Soldier whenever a nontoken counter-carrying creature dies), Seedship Agrarian x2 (a Lander every time they tap, including when tapped to Station), Galactic Wayfarer x2 and Sami's Curiosity x2 (a Lander each). Exalted Sunborn doubles whichever of them is on the battlefield rather than depending on any one, and Loading Zone doubles the counters whichever body is carrying them. |
| gas-out | mitigation | The deck's card advantage is board rather than hand: Eusocial Engineering, Seedship Agrarian and Cosmogrand Zenith all produce permanents without spending a card, and Bioengineered Future makes each of those permanents bigger. Rayblade Trooper converts a dead counter-creature into a fresh token. When the hand is empty the mana still converts into Landers, and each Lander converts into a land ETB and therefore a Robot. |
| raced | accepted | The deck keeps 5 interaction cards, only 3 of which are removal, and its own clock does not start before the first Eusocial Engineering resolves. The premise stated in the first draft - that adding cheap interaction would REQUIRE cutting the Lander accelerants - was refuted during the grill and is withdrawn: Hardlight Containment ({W}, unconditional creature exile), Seam Rip ({W}, exiles a nonland permanent of mana value 2 or less) and Focus Fire ({W}) are all one-mana and in colour. The honest cost is narrower: Hardlight Containment and the other rare-slot answers compete for a rare budget already spent 6 of 6 on cards that make or double the board, and every one-mana answer added is a slot not spent on a token producer, which is what the turn-6 clock is made of. The concrete loss path accepted: against the fastest starts the deck blocks with 2/2 Robots until Lumen-Class Frigate's anthem or Bioengineered Future's counters make those blocks profitable, and a hand without a two-drop loses. |
| disruption-fizzle | mitigation | There is no single critical turn. Lander activations are independent {2} abilities usable at instant speed and spreadable across turns, and the Robots accrue one land at a time rather than in one burst. Both engine pieces carry warp - Eusocial Engineering {1}{G} and Exalted Sunborn {1}{W} - so each can be deployed early for one turn of value and recast later from exile, which means an answer held for the engine turn misses it. Reroute Systems in the sideboard grants indestructible at instant speed for {W}. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Command Bridge (C) | The only other G/W fixer, and the shape judge's explicit finding: 'sacrifice it unless you tap an untapped permanent you control' taxes exactly the turns this deck attacks with everything and holds up {2} to crack a Lander. THIN fixing is answered by the Lander package instead, which fetches either basic. |
| Auxiliary Boosters (C) | Makes a 2/2 Robot and grants flying, but Equip {3} is a full turn of an aggro deck's mana to move the evasion anywhere else. Flagged as a weak keystone by the shape judge. |
| Haliya, Ascendant Cadet (U) | 'Whenever one or more creatures you control with +1/+1 counters on them deal combat damage to a player, draw a card' is a genuine card-advantage engine for a counters deck, but {2}{G}{W}{W} is mana value 5 with a double-white pip in a colour pair whose only free dual enters tapped. |
| Dyadrine, Synthesis Amalgam (R) | 'Whenever you attack, you may remove a +1/+1 counter from each of two creatures you control. If you do, draw a card and create a 2/2 colorless Robot artifact creature token' costs two counters per Robot, which fights Bioengineered Future and Drix Fatemaker - both of which want the counters to stay on. |
| Terrasymbiosis (R) | 'Whenever you put one or more +1/+1 counters on a creature you control, you may draw that many cards. Do this only once each turn.' The once-per-turn clamp means it draws roughly one card a turn in this deck, and it competes for a rare slot with Bioengineered Future, which puts the counters there in the first place. |
| Ouroboroid (M) | 'put X +1/+1 counters on each creature you control, where X is this creature's power' is exponential across a wide board, but it starts as a 1/3 that must survive a combat step, which is exactly what a token deck's opponent is set up to kill. |
| Loading Zone (R) | Doubling counters would compound with Bioengineered Future, but it does nothing on an empty board and this build already spends 4 of 6 rare slots on cards that make or double the board itself. |
| Glacier Godmaw (U) | 'Landfall - creatures you control get +1/+1 and gain vigilance and haste' is the best possible anthem for a token swarm, and its ETB makes a Lander. Cut on curve alone: at {5}{G}{G} it is mana value 7 in a deck whose top end is 5 and whose goldfish turn is 6. |
| Icecave Crasher (C) / Harmonious Grovestrider (U) | Both are strong single bodies that scale on lands, but neither makes a token nor cares about the width this deck generates, and 13 of the 24 nonland slots are already committed to token production. |
| Sunstar Expansionist (U) | 'When this creature enters, IF AN OPPONENT CONTROLS MORE LANDS THAN YOU, create a Lander token.' The condition is checked on resolution and this deck plays a land every turn plus Landers on top, so it is usually behind on nothing - the Lander half is frequently blank. Its landfall +1/+0 is a fine but small payoff. |
| Edge Rover (U) | A {G} 2/2 with reach would be the cheapest blocker in a deck whose 'raced' mode is accepted, but 'When this creature dies, EACH PLAYER creates a Lander token' hands the opponent the same acceleration this deck is built on. |
| Wedgelight Rammer (U) / Knight Luminary (C) | Both make a token on ETB, but at mana value 4 they compete with Seedship Agrarian, which makes a Lander EVERY time it taps rather than once. |
| Beyond the Quiet (R) | Sideboard consideration, and it made the sideboard. 'Exile all creatures and Spacecraft' is symmetric and would exile the swarm that IS this deck's win condition; it is boarded in only against decks whose board already outclasses ours, where the asymmetry is that we rebuild off Eusocial Engineering (an enchantment) and uncracked Landers and they do not. |
| Focus Fire (C) / Radiant Strike (C) | Sideboard considerations. Focus Fire scales with our own board ('X is 2 plus the number of creatures and/or Spacecraft you control') but only hits an attacking or blocking creature; Radiant Strike only hits a TAPPED creature. All-Fates Stalker exiles a creature unconditionally and leaves a 2/3 body, so it took the slots. |
| Zealous Display (C) | 'Creatures you control get +2/+0 until end of turn' is a genuine finisher for a wide board, but this deck already runs a permanent anthem (Lumen-Class Frigate) and a permanent counter engine (Bioengineered Future), and a one-shot pump costs a card that could have been another token. |
| Drix Fatemaker (C) | Cut during the grill on a count: 'Each creature you control with a +1/+1 counter on it has trample' only reaches the 2/2 Robot swarm when a mass-counter effect is out, and only 2 of 24 nonland cards put counters on the whole board. Replaced by Loading Zone. |
| Honored Knight-Captain (U) | Cut during the grill. '{4}{W}{W}, Sacrifice this creature: Search your library for an EQUIPMENT card' - this deck runs 0 Equipment across 50 cards, so half the card is uncastable-to-effect. |
| Hardlight Containment (R) / Seam Rip (U) / Focus Fire (C) | The grill correctly refuted the claim that cheap interaction was unavailable: all three are one mana and in colour, and Hardlight Containment is unconditional creature exile whose 'enchant artifact you control' cost is fed by Landers, Robot tokens, Dockworker Drone and Lumen-Class Frigate. They lose to the rare budget (6 of 6 spent) and to the token-producer count, not to availability - the first place to look when iterating. |
| Luxknight Breacher (C) | 'This creature enters with a +1/+1 counter on it for each other creature and/or artifact you control' counts exactly the two nouns this deck manufactures - Landers are artifacts and Robots are artifact creatures. A genuinely strong absence; excluded on curve, since MV4 is already the Seedship Agrarian and Loading Zone slot. |
| Honor (U) | 'Put a +1/+1 counter on target creature. Draw a card.' One mana, replaces itself, and is the cheapest possible second spell for Cosmogrand Zenith. The deck's cantrip count is 0, so this is the natural fix if the list wants card flow; it lost the slots to Biosynthic Burst, which also grants reach and indestructible. |
| Meltstrider Eulogist (U) | 'Whenever a creature you control with a +1/+1 counter on it dies, draw a card' - note it has NO nontoken clause, unlike Rayblade Trooper, so it fires on counter-carrying Robot TOKENS that Rayblade Trooper misses. Excluded on slots, not mechanism. |
| Atmospheric Greenhouse (U) | 'When this Spacecraft enters, put a +1/+1 counter on each creature you control' is a third mass-counter effect, which is exactly what the Drix Fatemaker finding said the deck lacked - but at MV5 it would be a fourth card in a top end already holding three. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.0   Ramp cards: 10   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.00 adj [MV 3.0 vs 2.5, 10 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  60.7%  prod  68.8%  gap  -8.1pp  [OK]
  W  demand  39.3%  prod  43.8%  gap  -4.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies: PASS
rares/mythics max 1 copy: PASS
max 6 rare+mythic cards across mainboard+sideboard: PASS - 6 used, exactly at the cap: Lumen-Class Frigate, Bioengineered Future, Cosmogrand Zenith, Exalted Sunborn and Loading Zone (mainboard) plus Beyond the Quiet (sideboard)
basic lands unlimited (format-supplied): PASS - 9 Forest, 5 Plains
all cards from cube mainboard: PASS
colour usability within G/W (effective_cost.best_mode): PASS
splash cap: PASS - no splash colours
```