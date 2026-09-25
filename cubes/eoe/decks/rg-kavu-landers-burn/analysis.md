---
deck_name: "rg-kavu-landers-burn"
cube_id: "eoe"
cube_slug: "eoe"
colors: "RG"
format: "40-card"
built_at: "2026-08-07T02:22:26Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  9x Mountain                 Land — basic, Lander-fetchable
  4x Forest                   Land — basic, Lander-fetchable
  2x Wooded Ridgeline         Land — RG dual, enters tapped
  1x Stomping Ground          Land — untapped-capable RG dual (2 life)
```

### CREATURES (15)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  1  Kavaron Harrier             x1    R      Body — MV1; each attack pays {2} for a token that ENTERS (Weftstalker) and is SACRIFICED (Biotech) U
  2  Biotech Specialist          x1    GR     Payoff — 2 damage per artifact sacrificed; makes its own Lander R
  2  Remnant Elemental           x1    R      Body — 0/4 REACH; landfall gives it +2/+0                     U
  2  Terrapact Intimidator       x2    R      Kavu — two Landers, or a 4/3 (opponent chooses)               U
  3  Galactic Wayfarer           x1    G      Body — 3/3 plus a Lander (two Weftstalker triggers)           C
  3  Possibility Technician      x1    R      Engine — Kavu; every Kavu ETB exiles a card you may play      R
  3  Tannuk, Memorial Ensign     x2    GR     Payoff — Kavu; 1 damage per landfall, 2nd landfall each turn draws U
  3  Weftstalker Ardent          x2    R      Payoff — 1 damage to each opponent per creature/artifact ETB  U
  4  Kav Landseeker              x2    R      Kavu — 4/3 MENACE; a Lander that self-sacrifices next end step C
  4  Memorial Team Leader        x2    R      Kavu — anthem, +1/+0 to the team during your turn             U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  1  Plasma Bolt                 x2    R      Interaction/reach — 2-3 damage, any target                    C
  1  Sami's Curiosity            x2    G      Enabler — 1-mana stored Lander for the triple-dip             C
  2  Invasive Maneuvers          x2    R      Interaction — instant, 3 damage to a creature                 U
  3  Bombard                     x1    R      Interaction — instant, 4 damage to a creature                 C
  3  Ruinous Rampage             x2    R      Reach — 3 damage to each opponent, uninteractable by blockers U
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                       Rar
Seedship Impact             x2    G      vs artifacts/enchantments (29.7% artifact density) — instant, and makes a Lander U
Cut Propulsion              x2    R      vs fliers — doubled damage against the cube's 22.5% evasion class U
Dauntless Scrapbot          x1    C      vs graveyard decks — exiles each opponent's graveyard, still makes a Lander U
Lithobraking                x2    R      vs go-wide token decks — a Lander plus 2 damage to each creature; the sacrifice is optional U
Shattered Wings             x1    G      vs artifacts, enchantments, or fliers — the only RG card answering all three C
Tannuk, Steadfast Second    x1    R      vs grindy boards — global haste plus warp {2}{R} on every red creature in hand M
Kavaron Skywarden           x1    R      vs fliers and aggro — 4/5 reach, and still a Kavu for Possibility Technician C
```

## ANALYSIS

### DECK IDENTITY

RG Kavu-heavy Landers & Burn. The engine is the Lander triple-dip: a Lander is an artifact that sacrifices itself to fetch a basic land, so one token can trigger Weftstalker Ardent as it ENTERS, Biotech Specialist as it is SACRIFICED, and Tannuk, Memorial Ensign as the fetched land ENTERS. That engine is genuinely redundant - 8 producers feeding four payoff mechanisms at 2 copies each. Layered on top, 9 of the 24 nonland cards are Kavu, which makes Possibility Technician a live card engine when it is on the battlefield and gives Memorial Team Leader's anthem a wide board to pump. The deck wins through the half of the table the opponent cannot block: menace 4/3s under the anthem, pings that ignore the board, and Ruinous Rampage x2 for six damage no blocker interacts with. See kavu_engine_honesty for what the tribal half does and does not deliver.

### READ THIS FIRST: THE TRIBAL HALF DOES NOT DO WHAT THE NAME SUGGESTS

This deck was built to test a specific idea — *maximize Kavu count so `Possibility Technician`
becomes a real card-advantage engine*. The self-grill measured it, and the honest answer is no:

| Question | Answer |
|---|---|
| Mainboard cards with **Kavu-referencing oracle text** | **1 of 24** — `Possibility Technician` |
| Copies of it allowed by the pool rules | **1** (rare cap) |
| P(it is on the battlefield by turn 6) | **0.28** |
| Is `Memorial Team Leader` tribal? | **No** — *"During your turn, other creatures you control get +1/+0."* No Kavu clause. |
| Is `Tannuk, Memorial Ensign` tribal? | It **is** a Kavu, but it cares about *lands*, not about Kavu. |

So there is no second engine. There is one engine — the Lander triple-dip — plus a good 3/3 that
sometimes draws several cards. **What rescues the deck is that the tribal tax is near zero:** the 9
Kavu are the aggro cards this shell wants regardless (a two-mana 4/3, two 4/3 menace bodies, a
two-copy anthem), so holding the count cost nothing. If you iterate on this list, do it by improving
the burn engine, not by adding Kavu.

### THE ENGINE THAT IS REAL

A Lander is *an artifact that sacrifices itself to fetch a basic land*, so one token passes through
three separate game events, and this deck has a payoff on each:

| Event | Card | Damage |
|---|---|---|
| Lander ENTERS | Weftstalker Ardent ×2 — *"Whenever another creature or artifact you control enters, this creature deals 1 damage to each opponent."* | 1 each |
| Lander is SACRIFICED | Biotech Specialist — *"Whenever you sacrifice an artifact, this creature deals 2 damage to target opponent."* | 2 |
| Fetched land ENTERS | Tannuk, Memorial Ensign ×2 — *"Landfall — ... deals 1 damage to each opponent. If this is the second time this ability has resolved this turn, draw a card."* | 1 each |

Eight producers feed four payoff mechanisms at two copies each. *That* is the redundancy the deck
actually has.

### KAVARON HARRIER IS THE BEST CARD IN THE DECK PER MANA

*"Whenever this creature attacks, you may pay {2}. If you do, create a 2/2 colorless Robot artifact
creature token that's tapped and attacking. **Sacrifice that token at end of combat.**"*

Read that against the table above: the token **enters** (Weftstalker trigger) and is **sacrificed as
an artifact** (Biotech trigger) — *every combat*, from a one-mana card, with the sacrifice built in so
you never have to find the mana to crack anything. It replaced `Frontline War-Rager`, whose oracle
touched none of the four damage mechanisms.

### KAV LANDSEEKER'S "DRAWBACK" IS THE POINT

*"At the beginning of the end step on your next turn, sacrifice that token."* In a deck that wants to
crack Landers this reads as a clock you must beat. Here it is a **guarantee**: the Biotech Specialist
trigger fires whether or not you ever find the `{2}`, and it fires even if the Kavu itself was killed
in response — the delayed trigger is on the token, not the creature.

### WARP IS MOSTLY A TRAP HERE

Five copies carry warp (`Weftstalker Ardent` ×2, `Memorial Team Leader` ×2, `Possibility Technician`),
and the mainboard has **zero haste**. A creature warped on your turn without haste is exiled at your
*own* end step before it can attack or block. Concretely:
- **Weftstalker Ardent for `{R}` on turn 1 deals zero** — its trigger needs *another* permanent to
  enter while it is out, and you have no mana left.
- **Memorial Team Leader for `{1}{R}` is the one that works** — an anthem is a static ability, so it
  applies during the turn it is out.
`Tannuk, Steadfast Second` in the sideboard is what fixes this: global haste plus warp `{2}{R}` on
every red creature card in hand.

### PLAY PATTERN

Attack with `Kavaron Harrier` every turn you can spare `{2}`. Sequence land drop *before* cracking a
Lander when Tannuk is out — the second landfall is the one that draws. Hold `Ruinous Rampage`: six
damage across two copies is board-independent, and it is how this deck beats a board it cannot get
through. The MV-2 slot sits at exactly its 25% floor, so if you swap cards, swap at MV 2.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Aggro):  [PASS]
  MV distribution (24 nonland):  1:5  2:6  3:9  4:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 10 copies (effective 9.6: Biotech Specialist@0.8, Possibility Technician@0.8) → p=0.97 (need ≥ 0.75)
  PASS  enabler: 9 copies (effective 7.5: Terrapact Intimidator@0.5, Terrapact Intimidator@0.5, Kavaron Harrier@0.5) → p=0.93 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 65%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: The mainboard runs no sweeper. CORRECTED per grill finding F12, which was listed as implemented in the first Resolution Table but whose text was never actually changed - that was my error. The honest census: Lithobraking deals 2 to each creature, and only 3 of the 15 creature copies die to it (Terrapact Intimidator x2 at 2/1 and Kavaron Harrier at 2/1); 12 of 15 survive. Its Lander is also created FIRST and its sacrifice is optional, so the Lander is a Weftstalker Ardent trigger on entry and the sacrifice is a Biotech Specialist trigger - it is a considerably better maindeck card here than the earlier concession admitted. It stays in the SIDEBOARD on the meta rather than on the card: cube sweeper density is 2.0% (5 of 249 cards), so a maindeck sweeper is dead in most matchups, and the locked lens is 'most reach & evasion' where the plan against a board is to go around it - Kav Landseeker x2 has MENACE, Ruinous Rampage x2 reads '3 damage to each opponent' and cannot be blocked at all, and Tannuk and Weftstalker deal damage that ignores the board entirely.
  OK        single_large_threat: Bombard, Invasive Maneuvers, Plasma Bolt
  CONCEDED  noncreature_permanents: RG's answers are Seedship Impact and Shattered Wings, both sideboard - a maindeck slot spent on a noncreature answer is a slot not pressuring, and this build's margin is a threat plus a ping every turn
  CONCEDED  stack: no counterspell or stack interaction exists in red or green in this pool; the deck races instead
  CONCEDED  graveyard: graveyard text is 12.45% of the cube; Dauntless Scrapbot answers it from the sideboard, and it is not a Kavu so maindecking it would also cost a Possibility Technician trigger
```

Phase 6b returns PASS on all four checks. Recorded for the file: the first run FAILED the coverage gate for a harness reason rather than a deck reason - I declared an 'evasion' class, and deck_checks.THREAT_CLASSES accepts only its five canonical classes, so an unknown key is a hard failure. Evasion is now recorded in the narrative coverage block instead, where it belongs, and the checked declaration uses only the five canonical classes. A second repair followed the Phase 9 grill: Frontline War-Rager x1 became Kavaron Harrier x1, moving a card from the 10-deep MV-3 hump to MV 1. Final curve 1:5 2:6 3:9 4:4, avg MV 2.50, turn-1 castability 65% and turn-2 95%. Note per grill finding F7 that the MV-2 band sits at exactly 25.0% against a 25% floor - it passes because curve_check tests share < min_share, so there is zero margin and any MV-2 card swapped upward flags immediately.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Every surplus land is damage: Tannuk, Memorial Ensign x2 reads 'Whenever a land you control enters, Tannuk deals 1 damage to each opponent', and the second one in a turn draws a card. Remnant Elemental turns each land into +2/+0. CORRECTED after grill finding F10, which showed the earlier claim that '8 of the nonland cards bank a Lander' was soft: of the 8 Lander producers, Terrapact Intimidator x2 is opponent-elective and Kav Landseeker x2 self-destructs at the next end step, so only 4 copies (Sami's Curiosity x2, Biotech Specialist, Galactic Wayfarer) bank an indefinitely-storable mana sink. Kavaron Harrier's 'you may pay {2}' on each attack is the other repeatable sink, and it converts surplus mana into two damage triggers rather than a land. |
| screw | mitigation | 16 lands - exactly the computed recommendation - plus 8 nonland copies that manufacture a land drop. Sami's Curiosity costs {G} and banks a Lander off a two-land keep. The Phase 6b goldfish sim over 1000 hands reports 84% keepable, 84% with 3 lands by turn 3, and 94.7% castability by turn 2. The honest caveat: 23 of the 29 pips are red against 12 red sources, so the deck's screw risk is colour-screw on green far more than land-screw - and green is over-supplied at 7 sources for 6 pips precisely to cover it. |
| decapitation | mitigation | There is no single key card. The damage comes from four different mechanisms at 2 copies each: Tannuk, Memorial Ensign (land ETB), Weftstalker Ardent (creature/artifact ETB), Memorial Team Leader (combat anthem) and Ruinous Rampage (uninteractable face damage). Answering any one leaves the other three. Possibility Technician x1 and Biotech Specialist x1 are the singletons, and both are amplifiers rather than the plan - the deck's clock functions without either. |
| gas-out | mitigation | RE-SCOPED after grill finding F3. Possibility Technician is the named answer and its trigger density is real - 9 of 24 nonland cards are Kavu - but it is a 1-copy rare available in about 1 game in 4 by the thesis turn, so it is a bonus, not a plan. The load is carried instead by Tannuk, Memorial Ensign x2, whose second-landfall draw is reachable on demand (make your land drop, then crack a banked Lander), and by the fact that the deck empties its hand onto a board that keeps generating triggers. Honest limit, unchanged: the resource_exchange census shows 0 Cards: Net-Positive across the 24 nonland copies. The pool's printed answer, Slagdrill Scrapper ('{2}, {T}, Sacrifice another artifact or land: Draw a card'), was surfaced by the grill's absence audit and NOT taken - the MV-2 band is at exactly its 25% floor and every available cut would flag the curve. That is a disclosed weakness, not an oversight. |
| raced | mitigation | This deck is usually the aggressor: turn-2 castability is 94.7% and the goldfish turn is 6, the second-fastest of the four builds. It also interacts with 5 of the 24 nonland cards, and Remnant Elemental's 0/4 REACH body walls both ground aggro and the cube's 22.5% evasion class at MV 2. Against a faster start the trump is Ruinous Rampage x2 - six damage that arrives regardless of who controls the board - which means this deck wins races it is behind on more often than its board suggests. |
| disruption-fizzle | mitigation | There is no critical turn to interact with - the damage arrives one trigger and one attack at a time across four or five turns, so a counterspell or a removal spell answers one ping, not the plan. Two concrete redundancies: Kav Landseeker's Lander sacrifice is a delayed trigger that fires at the end step whether or not you have mana, so removing the creature in response does not stop the Biotech Specialist damage; and Ruinous Rampage needs no board at all, so a completely answered battlefield still loses the opponent 6 life from two cards. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Icetill Explorer | Rare. 'You may play an additional land on each of your turns' is the best Tannuk enabler in the pool, but it is {2}{G}{G} in a build whose green is a support splash for Landers only - the Kavu curve is red-dominant and cannot support double green. |
| Eusocial Engineering | {3}{G}{G} for a 2/2 Robot per landfall - board width rather than damage, and the same double-green problem. It is the P3 payoff. |
| Bioengineered Future | Rare, {1}{G}{G}. A counters payoff whose value scales with creatures ENTERING; this build's damage comes from triggers, and the double green does not fit. |
| Remnant Elemental | 0/4 reach for {1}{R} with landfall +2/+0. A fine blocker, but Kavaron Skywarden is a 4/5 reach body that is ALSO a Kavu, so it does the same job while feeding Possibility Technician. |
| Seedship Agrarian | 'Whenever this creature becomes tapped, create a Lander token' is a superb Lander engine, but it is a green 4-drop competing directly with the Kavu 4-slot (Kav Landseeker, Memorial Team Leader) that this build is paying for. |
| Glacier Godmaw | {5}{G}{G} - seven mana and double green, three turns past this build's thesis turn. |
| Territorial Bruntar | 6/6 reach for {4}{R}{R} with a landfall impulse draw. Card advantage, but Possibility Technician supplies that at 3 mana here and Vaultguard Trooper backs it up. |
| Nova Hellkite | Rare 4/5 flier - a strong standalone threat that is not a Kavu, so it triggers 0 of Possibility Technician's exiles and costs a rare slot. |
| Devastating Onslaught | Mythic {X}{X}{R}: token copies 'sacrificed at the beginning of the next end step'. Temporary bodies do not build a Kavu board. |
| Tezzeret, Cruel Captain | Mythic whose loyalty needs artifacts ENTERING. This build's artifacts are Lander tokens, which do qualify, but its abilities untap and tutor artifacts rather than adding Kavu or damage. |
| Thrumming Hivepool | Rare, 'Affinity for Slivers'. 0 Slivers, so it costs {6} and its anthem applies to 0 cards. |
| Weapons Manufacturing | Rare: 'Whenever a NONTOKEN artifact you control enters.' Every artifact this build makes is a Lander TOKEN. 0 qualify. |
| Rust Harvester | Rare needing 'an artifact CARD in your graveyard' - Lander tokens cease to exist and never become cards. |
| Memorial Vault | Rare: '{T}, Sacrifice another artifact' would eat the Landers the burn engine needs to crack for value. |
| Warmaker Gunship | Rare Spacecraft: ETB damage equal to 'the number of artifacts you control', which is 1-2 at any moment since Landers are cracked as they are made. |
| Pain for All | Rare Aura. Auras are card disadvantage against removal, and 'Whenever enchanted creature is dealt damage' rewards being blocked, which a menace-and-anthem board avoids. |
| Mightform Harmonizer | Rare. 'Landfall - double the power of target creature' pumps one body; Memorial Team Leader's anthem pumps the whole Kavu board. |
| Terrasymbiosis | Rare. 'Whenever you put one or more +1/+1 counters on a creature you control, draw that many cards' - this build has 2-3 counter sources, not the 8 the P3 counters build runs. |
| Loading Zone | Rare counter-doubler with very few counters to double here. |
| Ouroboroid | Mythic {2}{G}{G} - double green, and a counters payoff rather than a damage one. |
| Famished Worldsire | Mythic 8-drop whose 'Devour land 3' sacrifices lands, anti-synergy with a landfall payoff. |
| Edge Rover | {G} 2/2 whose death gives EACH player a Lander - symmetric, and it is not a Kavu. |
| Dauntless Scrapbot | Colourless 3/1 with graveyard hate and a Lander - not a Kavu, so it triggers 0 Possibility Technician exiles. Sideboard material. |
| Seedship Impact | {1}{G} instant artifact/enchantment removal - sideboard; the mainboard cannot spare a slot that is blank against creature decks. |
| Shattered Wings | {2}{G} sorcery-speed removal. Sideboard flex for the same reason. |
| Cut Propulsion | 'Target creature deals damage to itself equal to its power' - fails against low-power blockers; Bombard's flat 4 is more reliable maindeck. |
| Full Bore | +3/+2 and trample+haste on a warped creature. A trick; this build's warp count is low without Tannuk, Steadfast Second on the battlefield. |
| Kavaron Harrier | {R} 2/1 whose attack token is 'sacrificed at end of combat'. Temporary width, and it is a Robot, not a Kavu - 0 Possibility Technician triggers. |
| Red Tiger Mechan | 3/3 haste for 4 with warp {1}{R} - efficient, but a Robot Cat, so it feeds 0 of the tribal payoffs this build is paying for. |
| Oreplate Pangolin | 2/2 whose counters need artifacts entering; the Landers here are cracked immediately for landfall rather than accumulated. |
| Zookeeper Mechan | {1}{R} 1/3 that taps for {R} - ramp in a deck whose Landers already ramp, and not a Kavu. |
| Secluded Starforge | Rare land tapping only for {C} against {R}{R} and {G} costs. |
| Kavaron, Memorial World | Mythic Planet land that enters tapped and whose 12+ ability sacrifices a LAND - anti-synergy with a landfall payoff, plus a mythic slot. |
| Command Bridge | 'sacrifice it unless you tap an untapped permanent you control' - taxes exactly the turns an aggro board wants to attack. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.5   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.00 adj [MV 2.5 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  20.7%  prod  43.8%  gap -23.1pp  [OK]
  R  demand  79.3%  prod  75.0%  gap  +4.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool: every card is in the eoe cube mainboard (Phase 5C check 2 PASS)
[PASS] copies: commons/uncommons <= 2, rares/mythics <= 1 (Phase 5C check 3 PASS)
[PASS] rare_mythic_cap: 4 of the permitted 6 used: Possibility Technician (rare, main), Biotech Specialist (rare, main), Stomping Ground (rare, main), Tannuk Steadfast Second (mythic, sideboard). Two slots remain unused - deliberately, since the pool's remaining rares do not fit a red aggro curve.
[PASS] colors: all 24 nonland cards usable in RG via effective_cost.best_mode (Phase 5C check 4 PASS)
[PASS] splash: splash_colors = [], so check 5 is vacuously satisfied
[PASS] basics: Mountain x9 + Forest x4 - format-supplied, exempt from copy limits
[PASS] deck_size: 24 nonland + 16 land = 40 mainboard; 10 sideboard
```
