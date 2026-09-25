---
deck_name: "rg-landfall-go-wide"
cube_id: "eoe"
cube_slug: "eoe"
colors: "RG"
format: "40-card"
built_at: "2026-08-07T01:58:43Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  10x Forest                   Land — basic, Lander-fetchable
  4x Mountain                 Land — basic, Lander-fetchable
  2x Wooded Ridgeline         Land — RG dual, enters tapped
  1x Stomping Ground          Land — untapped-capable RG dual (2 life)
```

### CREATURES (12)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  2  Remnant Elemental           x2    R      Body — 0/4 REACH at MV 2; landfall gives it +2/+0, so it blocks early and attacks late U
  2  Terrapact Intimidator       x2    R      Body — Kavu; two Landers, or a 4/3 (opponent chooses)         U
  3  Galactic Wayfarer           x2    G      Body — 3/3 plus a Lander                                      C
  3  Tannuk, Memorial Ensign     x1    GR     Engine — landfall pings, and the SECOND landfall each turn draws a card U
  4  Drix Fatemaker              x1    G      Payoff — grants TRAMPLE to every creature with a +1/+1 counter C
  4  Icetill Explorer            x1    G      Enabler — an extra land drop every turn; plays lands from the graveyard R
  4  Seedship Agrarian           x2    G      Converter — Lander on tap; +1/+1 counter on every landfall    U
  7  Glacier Godmaw              x1    G      Finisher — landfall gives the team +1/+1, vigilance and haste U
```

### INSTANTS & SORCERIES (6)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  1  Sami's Curiosity            x2    G      Enabler — 1-mana stored landfall trigger                      C
  2  Invasive Maneuvers          x2    R      Interaction — instant, 3 damage to a creature                 U
  3  Bombard                     x1    R      Interaction — instant, 4 damage to a creature                 C
  4  Orbital Plunge              x1    R      Interaction — 6 damage to a creature, excess makes a Lander   C
```

### OTHER SPELLS (5)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  3  Bioengineered Future        x1    G      Converter — ETB Lander; creatures enter with +1/+1 per land dropped this turn R
  3  Larval Scoutlander          x2    G      Enabler — sacrifice a Lander for TWO basics = two landfall triggers U
  5  Eusocial Engineering        x2    G      Converter — landfall makes a 2/2 Robot artifact creature token U
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                       Rar
Plasma Bolt                 x2    R      vs aggro and planeswalkers — '2 damage to any target', 3 with Void C
Seedship Impact             x2    G      vs artifacts/enchantments (29.7% artifact density) — instant, and makes a Lander U
Cut Propulsion              x1    R      vs fliers — doubled damage against the cube's 22.5% evasion class U
Dauntless Scrapbot          x1    C      vs graveyard decks — exiles each opponent's graveyard, still makes a Lander U
Shattered Wings             x2    G      vs artifacts, enchantments, or fliers — the only RG card answering all three C
Terrasymbiosis              x1    G      vs control — draws a card for every counter placed, once per turn R
Loading Zone                x1    G      vs grindy mirrors — doubles every counter this deck produces  R
```

## ANALYSIS

### DECK IDENTITY

RG Landfall Go-Wide Counters. Where the burn build converts each land into damage, this one converts each land into a PERMANENT. Eusocial Engineering turns every landfall into a 2/2 Robot artifact creature token; Bioengineered Future makes every creature enter with an extra +1/+1 counter for each land that entered that turn - and the two compound, because the Robot is created BY the land entering and so catches that same land's counter. Seedship Agrarian grows on landfall and manufactures more Landers whenever it taps. Drix Fatemaker grants trample to every creature carrying a counter, so a wall of chump blockers cannot blank the attack, and Glacier Godmaw cashes the whole board in one turn - its landfall trigger gives the team +1/+1, vigilance and haste. Tannuk, Memorial Ensign converts the second landfall each turn into a card, which is this deck's only draw engine.

### THE COMPOUNDING NOBODY WROTE DOWN

`Bioengineered Future` and `Eusocial Engineering` were printed independently, but they chain in a way
neither card mentions:

> Eusocial Engineering: *"Landfall — Whenever a land you control enters, create a 2/2 colorless Robot artifact creature token."*
> Bioengineered Future: *"Each creature you control enters with an additional +1/+1 counter on it for each land that entered the battlefield under your control this turn."*

The Robot is **created by the land entering**, so it enters *after* that land — and therefore catches
that same land's counter. Every landfall makes a 3/3, not a 2/2. Drop two lands in a turn (Icetill
Explorer, or a Lander cracked after your land drop) and each Robot is a 4/4.

`Larval Scoutlander` is the extreme case: *"search your library for up to two basic land cards, put
them onto the battlefield tapped"* — two lands at once, off one card, for three mana. That is two
Robots, each entering as a 4/4, plus two `Seedship Agrarian` counters, plus `Tannuk`'s second-landfall
draw. One card, seven triggers.

### WHY TRAMPLE IS NOT A LUXURY

A go-wide deck's natural loss is to a wider defence — every 2/2 Robot chump-blocks for a turn.
`Drix Fatemaker` reads *"Each creature you control with a +1/+1 counter on it has trample."* Counter
sources are 6 of 23 nonland cards, so this is conditional, and honestly so: the Robots only qualify
while `Bioengineered Future` (1 copy) is on the battlefield. When both are out, the alpha strike goes
through a wall; when only Drix is out, it doesn't.

### THE ENGINE'S REAL CEILING IS 14

Every Lander and every `Larval Scoutlander` search reads **"basic land card."** This deck runs 14
basics (Forest ×10, Mountain ×4). `Stomping Ground` and `Wooded Ridgeline` are `Land — Mountain
Forest` — land *types*, not basic land *cards* — so they can never be fetched. Fourteen is the hard
fuel gauge on the whole engine, and long games do approach it.

### THE RED TWO-DROP GATE

All six MV-2 cards cost `{1}{R}`, against only 5 lands that produce red on the turn they arrive
(Mountain ×4, plus `Stomping Ground` if you pay 2 life — `Wooded Ridgeline` always enters tapped).
P(at least one red source by turn 2 on the play) ≈ 69%. This is the disclosed price of closing the
evasion gap with `Remnant Elemental`, and it is why the deck's turn-2 play rate is 83% rather than 86%.

### PLAY PATTERN

Sequence land drop **before** cracking a Lander whenever `Tannuk` is out — the second landfall in a
turn is the one that draws. Hold `Larval Scoutlander` until `Eusocial Engineering` or
`Bioengineered Future` is on the battlefield; cast on an empty board it is a 3-mana ramp spell that
does not even leave a creature, since it is *"an artifact creature at 7+"* and nothing else.
The deck's worst matchups are the fast ones: 4 interaction cards of 23 and a 35% turn-1 play rate mean
it accepts losing races it never got to start.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:2  2:6  3:7  4:5  5:2  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 7 copies → p=0.94 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9: Terrapact Intimidator@0.5, Orbital Plunge@0.5) → p=0.98 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 35%  T2 83%  T3 97%
Coverage:  [PASS]
  CONCEDED  wide_boards: This deck has no sweeper and I am not adding one: Lithobraking deals 2 to EACH creature, and this list's own board is 2/2 Robot tokens and X/2-X/3 bodies, so it would kill more of mine than theirs. The answer to a wide board here is to be wider AND bigger - Eusocial Engineering x2 adds a 2/2 every landfall, Bioengineered Future and Seedship Agrarian add counters on top, Drix Fatemaker grants trample to every countered creature so a token wall cannot chump-block the alpha strike, and Glacier Godmaw's landfall trigger wins the race outright by giving the team +1/+1, vigilance and haste
  OK        single_large_threat: Orbital Plunge, Bombard
  CONCEDED  noncreature_permanents: RG's answers are Seedship Impact and Shattered Wings, both sideboard - the mainboard cannot spare a slot that is blank against creature decks, and this deck's own board grows past most noncreature threats
  CONCEDED  stack: no counterspell or stack interaction exists in red or green in this pool; the deck develops through disruption instead
  CONCEDED  graveyard: graveyard text is 12.45% of the cube and no cube deck is built purely on it; Dauntless Scrapbot answers it from the sideboard rather than costing a maindeck slot that is blank against the other ~87%
```

Phase 6b returns PASS on all four checks. Recorded for the file: the first run WARNed on the Midrange curve - MV-2 share 9% against a 15% minimum, because Terrapact Intimidator x2 were the only two-drops in the list. Rather than write a response, the curve was repaired: Plasma Bolt x2 (MV 1) became Invasive Maneuvers x2 (MV 2, and a strictly better removal spell for a deck that does not need face damage), Intrepid Tenderfoot x2 came in at MV 2, and Kav Landseeker and Bombard each went to 1 copy. Final curve 1:2 2:6 3:6 4:6 5:2 7:1, MV-2 26.1%, and turn-2 castability rose from 75% to 86%. A second repair followed a Phase 5C copy-limit FAILURE: Invasive Maneuvers was briefly 2 mainboard plus 2 sideboard, i.e. 4 copies of an uncommon against a cap of 2; the sideboard pair became Plasma Bolt x2. A third repair followed the Phase 9 grill: Intrepid Tenderfoot x2 became Remnant Elemental x2 (evasion gap) and Kav Landseeker x1 became Tannuk, Memorial Ensign x1 (gas-out). Final curve 1:2 2:6 3:7 4:5 5:2 7:1, avg MV 3.13, and flying-or-reach among creature copies went from 0 to 2.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Flood is this deck's best draw, not its worst. Every payoff triggers on a LAND ENTERING: with Eusocial Engineering out the 18th land is a 2/2 Robot, with Seedship Agrarian it is a +1/+1 counter, with Bioengineered Future every creature entering that turn arrives bigger, with Tannuk, Memorial Ensign it is 1 damage (and the second one that turn draws a card), and with Glacier Godmaw it is +1/+1 and haste for the whole team. Icetill Explorer's 'You may play an additional land on each of your turns' consumes a second land from hand every turn, and its 'You may play lands from your graveyard' plus its own landfall mill means a milled land is still a land drop. REPAIRED per approval-round finding N1: the earlier entry ended by naming Intrepid Tenderfoot as the empty-hand mana sink, but that card was cut in the F4 repair. The correct sinks are already in the list and are strictly better: cracking a stored Lander costs {2} and converts surplus mana into a land entering - which is a Robot, a counter, a Tannuk trigger and a Godmaw pump at once - and Larval Scoutlander's Station clause absorbs surplus mana on top. |
| screw | mitigation | 17 lands - one above the computed 16 - plus 13 nonland copies that manufacture a land drop. Sami's Curiosity costs {G} and banks a Lander off a 2-land keep. The Phase 6b goldfish sim over 1000 hands reports 84% keepable and 88% with 3 lands by turn 3. The honest weak point is turn 1: only 2 of 23 nonland cards cost 1, so T1 castability is 35% - this deck accepts doing nothing on turn 1. |
| decapitation | mitigation | The conversion engine is spread across three cards keyed to the same event, 5 copies total: Eusocial Engineering x2 (a landfall makes a body), Seedship Agrarian x2 (a landfall makes a counter), Bioengineered Future x1 (a land drop makes every creature bigger). Two of the three are ENCHANTMENTS, so creature removal - the most common interaction in this cube - cannot touch them. CORRECTED per grill finding F5: the earlier claim that 'the pool contains exactly 1 enchantment-removal card in any colour' was false and was contradicted by this deck's own sideboard. An oracle scan of the working pool finds 5: Annul, Banishing Light, Seam Rip, Seedship Impact and Shattered Wings - the last of which is in this build's own sideboard. The density is still low and only 2 of the 5 are in colours a typical opponent plays alongside creature removal, but the mitigation now rests on the honest number. |
| gas-out | mitigation | The board is the resource, and there is now a draw engine. 14 of the 23 nonland cards put a land onto the battlefield, and Eusocial Engineering converts land drops into bodies without spending a card at all - an empty hand with Eusocial Engineering and a land drop is still a 2/2 per turn. Tannuk, Memorial Ensign x1, added on grill finding F2, draws a card on the second landfall each turn, which Larval Scoutlander x2 (two basics at once) and Icetill Explorer's extra land drop make routine. Honest limit: the resource_exchange census still shows 0 Cards: Net-Positive across the 23 nonland copies, so Tannuk is a single copy carrying that axis; Terrasymbiosis x1 sits in the sideboard as the dedicated answer for matchups where the enchantments get answered. |
| raced | accepted | This is the deck's real weakness and it is accepted, not mitigated. The mainboard runs 4 interaction cards of 23, turn-1 castability is 35%, and the thesis turn is 8 - the latest of the four builds. Against the cube's fastest starts this deck will sometimes simply lose before the engine matters. What mitigating would cost: every slot added is a slot that no longer converts a land into a permanent, which lowers the Glacier Godmaw ceiling that is the entire reason to build this deck rather than the burn version. Partial payback since the grill: Remnant Elemental x2 now gives two 0/4 REACH blockers at MV 2 that wall both ground aggro and the cube's 22.5% evasion class, which is a real improvement to the racing floor at zero cost to the plan, since they still convert every land drop into damage. |
| disruption-fizzle | mitigation | There is no single critical turn - the board compounds one land drop at a time across six to eight turns, so a counterspell or a removal spell sets the plan back one trigger, not to zero. Concretely: Larval Scoutlander's sacrifice is an ETB trigger, so removing the Spacecraft in response costs the Lander nothing; and the counters already placed by Bioengineered Future and Seedship Agrarian stay on the creatures permanently, so interaction aimed at the enchantment does not undo the board it already built. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Tannuk, Memorial Ensign | The landfall burn payoff. Its damage is 1 per landfall to the FACE, which does not build a board; this build converts landfall into permanents instead. It is the P1 payoff, not this one. |
| Weftstalker Ardent | '1 damage to each opponent' per creature/artifact ETB. Real reach in a token deck, but it is a damage payoff competing for slots with the counter payoffs that make the alpha strike lethal. |
| Biotech Specialist | Rare. 'Whenever you sacrifice an artifact, deals 2 damage to target opponent' - this deck cracks Landers for landfall, not for damage, and the rare slot is better spent on Loading Zone or Bioengineered Future. |
| Famished Worldsire | Mythic {5}{G}{G}{G}. 'Devour land 3' sacrifices lands, which is anti-synergy with a deck whose engine triggers on lands ENTERING, and 8 mana is three turns past the thesis turn. |
| Mightform Harmonizer | Rare. 'Landfall - double the power of target creature' pumps ONE creature; this deck's damage is spread across a wide board, so Glacier Godmaw's team pump is strictly the better landfall finisher. |
| Sledge-Class Seedship | Rare 4/5 Spacecraft. 'Station 7+' to become a creature, and its attack trigger cheats a creature from hand - this deck's creatures cost 1-5 and do not need cheating in. |
| Devastating Onslaught | Mythic {X}{X}{R}. X token copies that are 'sacrificed at the beginning of the next end step' - temporary width in a deck that wants counters to accumulate on permanents. |
| Thrumming Hivepool | Rare. 'Affinity for Slivers' and 'Slivers you control have double strike' - 0 Slivers in any RG build, so it costs {6} and its anthem applies to 0 cards. |
| Weapons Manufacturing | Rare: 'Whenever a NONTOKEN artifact you control enters.' Every artifact this deck makes is a token (Landers, Robots), so its trigger condition is the one thing the deck cannot produce. |
| Tezzeret, Cruel Captain | Mythic. Its loyalty grows off artifacts ENTERING, which Landers and Robot tokens do satisfy - but its abilities untap and tutor artifacts rather than adding to a counters-and-width board. |
| Dawnsire, Sunstar Dreadnought | Mythic 20/20. Station 10+ needs 10 total power tapped, which in a go-wide deck means not attacking for a turn with the whole board - the opposite of the plan. |
| Harmonious Grovestrider | {3}{G}{G} */* equal to lands you control with ward {2}. One large body; this deck's counters are spread across many, and it does not benefit from Bioengineered Future's per-creature counter. |
| Fungal Colossus | 'Costs {X} less where X is the number of differently named lands you control.' Landers fetch BASICS, so this deck's differently-named land count is about 4 - a 7-mana card discounted to 3, with no counter or token text. |
| Eumidian Terrabotanist | 'Landfall - you gain 1 life.' A landfall payoff whose payout is life, which does nothing for a board-development plan. |
| Remnant Elemental | 0/4 reach with 'Landfall - +2/+0 until end of turn'. A defensive body whose landfall payout is temporary; this deck wants landfall to leave permanents behind. |
| Icecave Crasher | 4/4 trample with a temporary +1/+0 per landfall. Same objection - Drix Fatemaker grants trample to the whole counter board instead of one creature. |
| Territorial Bruntar | 6/6 reach for 6 with a landfall impulse draw. Card advantage, but Terrasymbiosis draws off the counter engine for 3 mana and Meltstrider Eulogist draws off deaths. |
| Edge Rover | {G} 2/2 reach whose death gives EACH player a Lander - a symmetric landfall gift, and this deck's engine rewards the opponent's landfall payoffs too if they have any. |
| Dauntless Scrapbot | 3/1 colourless with graveyard hate and a Lander - fine, but it makes no counter and no token, and the 3-slot is contested by Galactic Wayfarer and Larval Scoutlander. |
| Seedship Impact | {1}{G} instant artifact/enchantment removal that makes a Lander on an MV<=2 target - a sideboard card; the mainboard cannot spare a slot that is blank against creature decks. |
| Shattered Wings | {2}{G} sorcery-speed artifact/enchantment/flier removal. Seedship Impact does the same job at instant speed for one less mana. |
| Ruinous Rampage | {1}{R}{R}: '3 damage to each opponent' or 'exile all artifacts with mana value 3 or less'. The second mode would exile this deck's own Landers AND its 2/2 Robot tokens - it is a board wipe pointed at itself. |
| Rust Harvester | Rare needing 'an artifact CARD in your graveyard'; Lander and Robot tokens cease to exist and never become cards. 0 fuel. |
| Molecular Modifier / Frontline War-Rager / Memorial Team Leader | The red Kavu package. Frontline War-Rager and Memorial Team Leader are real go-wide payoffs, but they are Kavu-tribal cards whose slots this build spends on green counter payoffs that scale with Loading Zone. |
| Nova Hellkite | Rare 4/5 flier for 5 - a strong standalone threat that shares no cluster with the counters-and-tokens engine and would cost a rare slot. |
| Possibility Technician | Rare. Its exile trigger needs Kavu; this build runs 2-3 Kavu at most, so it would draw a card roughly twice a game. |
| Meltstrider's Gear / Meltstrider's Resolve | Equipment and an Aura. Both concentrate stats on one creature; a go-wide board wants effects that touch every creature. |
| Secluded Starforge | Rare land taping only for {C} in a deck with {G}{G} costs (Bioengineered Future, Eusocial Engineering, Ouroboroid, Glacier Godmaw). Its {5} Robot ability is unreachable. |
| Evendo, Waking Haven | Mythic Planet land, enters tapped, taps for {G}; the 12+ payoff needs 12 stationed power. A tapped mono-colour land plus a mythic slot. |
| Kavaron, Memorial World | Mythic Planet land, enters tapped; its 12+ ability sacrifices a LAND to make a 2/2 - anti-synergy with a landfall deck. |
| Command Bridge | 'sacrifice it unless you tap an untapped permanent you control' - the tax lands on the turns this deck wants its creatures untapped to attack or to station. |
| Kavaron Harrier | {R} 2/1 whose attack token is 'sacrificed at end of combat' - temporary width, and it is the wrong colour weight for a {G}{G}-heavy build. |
| Virulent Silencer | 'Whenever a NONTOKEN ARTIFACT CREATURE you control deals combat damage' - this deck's artifact creatures are all tokens. 0 qualify. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.13   Ramp cards: 10   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.83 adj [MV 3.13 vs 2.5, 10 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  69.0%  prod  76.5%  gap  -7.5pp  [OK]
  R  demand  31.0%  prod  41.2%  gap -10.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool: every card is in the eoe cube mainboard (Phase 5C check 2 PASS)
[PASS] copies: commons/uncommons <= 2, rares/mythics <= 1 (Phase 5C check 3 PASS — this check CAUGHT a real violation mid-build: Invasive Maneuvers was briefly 2 main + 2 side)
[PASS] rare_mythic_cap: 5 of the permitted 6 used: Bioengineered Future (rare, main), Icetill Explorer (rare, main), Stomping Ground (rare, main), Loading Zone (rare, side), Terrasymbiosis (rare, side)
[PASS] colors: all 23 nonland cards usable in RG via effective_cost.best_mode (Phase 5C check 4 PASS)
[PASS] splash: splash_colors = [], so check 5 is vacuously satisfied
[PASS] basics: Forest x10 + Mountain x4 = 14 - format-supplied and exempt from copy limits, but note this is also the hard ceiling on the Lander engine, since every Lander and Larval Scoutlander can only find basics.
[PASS] deck_size: 23 nonland + 17 land = 40 mainboard; 10 sideboard
```
