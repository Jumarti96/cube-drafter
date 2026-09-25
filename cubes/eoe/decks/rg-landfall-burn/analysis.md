---
deck_name: "rg-landfall-burn"
cube_id: "eoe"
cube_slug: "eoe"
colors: "RG"
format: "40-card"
built_at: "2026-08-07T01:07:16Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  7x Forest                   Land — basic, Lander-fetchable
  6x Mountain                 Land — basic, Lander-fetchable
  2x Wooded Ridgeline         Land — RG dual, enters tapped
  1x Stomping Ground          Land — untapped-capable RG dual (2 life)
```

### CREATURES (12)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  2  Biotech Specialist          x1    GR     Payoff — 2 damage per artifact sacrificed; makes its own Lander R
  2  Remnant Elemental           x1    R      Body — 0/4 reach blocker, +2/+0 per landfall                  U
  2  Terrapact Intimidator       x1    R      Body — 2 Landers or a 4/3, opponent's choice                  U
  3  Tannuk, Memorial Ensign     x2    GR     Payoff — 1 damage per landfall; 2nd landfall each turn draws  U
  3  Weftstalker Ardent          x2    R      Payoff — 1 damage to each opponent per creature/artifact ETB  U
  4  Icetill Explorer            x1    G      Body/Engine — extra land drop each turn; plays lands from graveyard R
  4  Kav Landseeker              x2    R      Body — 4/3 menace; Lander that self-sacrifices next end step  C
  4  Seedship Agrarian           x2    G      Engine — repeatable Lander on tap; grows on landfall          U
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  1  Plasma Bolt                 x2    R      Interaction — 2-3 damage, any target (reach)                  C
  1  Sami's Curiosity            x2    G      Engine — 1-mana stored Lander                                 C
  2  Invasive Maneuvers          x2    R      Interaction — instant, 3 damage (5 with a Spacecraft out)     U
  3  Lithobraking                x2    R      Interaction — Lander + optional 2 damage to each creature     U
  4  Orbital Plunge              x1    R      Interaction — 6 damage to a creature, excess makes a Lander   C
```

### OTHER SPELLS (3)
```
CMC  Card                        Qty   Color  Role                                                          Rar
  3  Larval Scoutlander          x2    G      Engine — sacrifice a Lander for TWO basics = double landfall  U
  5  Eusocial Engineering        x1    G      Engine — landfall makes a 2/2 Robot artifact creature token   U
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                       Rar
Drill Too Deep              x1    R      vs artifacts — targeted and NON-symmetric, unlike Ruinous Rampage's sweep C
Remnant Elemental           x1    R      vs fast aggro — a second 0/4 reach wall on turn 2             U
Seedship Impact             x2    G      vs artifacts/enchantments — instant, and makes a Lander off MV<=2 U
Cut Propulsion              x1    R      vs fliers — 'if that creature has flying, it deals twice that much damage to itself' U
Dauntless Scrapbot          x1    C      vs graveyard decks — exiles each opponent's graveyard, still makes a Lander U
Ruinous Rampage             x1    R      vs control/lifegain — '3 damage to each opponent' as pure reach U
Shattered Wings             x2    G      vs artifacts, enchantments, AND fliers — the only RG card answering all three C
Territorial Bruntar         x1    R      vs control/grind — 6/6 reach, landfall impulse draw           U
```

## ANALYSIS

### DECK IDENTITY

RG Landfall Burn. The engine is the Lander token — an artifact that sacrifices itself to fetch a basic land — which this deck converts into damage three separate times: Weftstalker Ardent pings 1 to each opponent when the Lander ENTERS, Biotech Specialist pings 2 when it is SACRIFICED, and Tannuk, Memorial Ensign pings 1 (and draws on the second such trigger each turn) when the fetched land ENTERS. Icetill Explorer supplies Tannuk's second landfall for zero mana every turn via its extra land drop. A modest ground board of Kavu and green bodies holds the table while the pings accumulate, and Plasma Bolt closes the last few points.

### THE LANDER TRIPLE-DIP

The whole deck rests on one observation about a token. A Lander is *an artifact that sacrifices itself
to fetch a land*, which means a single Lander passes through three distinct game events, and this deck
has a payoff keyed to each one:

| Event | Card | Oracle clause | Damage |
|---|---|---|---|
| The Lander ENTERS | Weftstalker Ardent | "Whenever another creature or artifact you control enters, this creature deals 1 damage to each opponent." | 1 |
| The Lander is SACRIFICED | Biotech Specialist | "Whenever you sacrifice an artifact, this creature deals 2 damage to target opponent." | 2 |
| The fetched land ENTERS | Tannuk, Memorial Ensign | "Landfall - Whenever a land you control enters, Tannuk deals 1 damage to each opponent." | 1 |

With all three out, one Lander is **4 damage for {2}**, and the land it fetched is still a land drop.
Nothing in the deck says "Lander matters" - the synergy is entirely emergent from three unrelated
trigger conditions happening to describe the same token.

### THE SECOND-LANDFALL CLAUSE IS THE REAL ENGINE

Tannuk's second sentence is the one that wins long games: "If this is the second time this ability has
resolved this turn, draw a card." A land drop alone never reaches it. Three cards do:

- **Icetill Explorer** - "You may play an additional land on each of your turns." A second land drop for
  zero mana, every turn. Its "You may play lands from your graveyard" plus its own landfall mill means
  it partially refuels itself, though that loop cannot start itself - it needs a land milled first.
- **Larval Scoutlander** - "sacrifice a land or Lander... search your library for up to two basic land
  cards, put them onto the battlefield tapped." Two land ETBs from one card: Tannuk's draw clause off a
  single three-mana play, plus the Lander sacrifice triggers Biotech Specialist.
- Any Lander cracked on a turn you also made your land drop.

### GALACTIC WAYFARER'S SUCCESSOR AND THE DOUBLE-TRIGGER BODIES

Several creatures trigger Weftstalker Ardent *twice* on one card, because the body and the token are two
separate objects entering. Eusocial Engineering compounds this: it converts every landfall into a 2/2
Robot artifact creature token, which is another Weftstalker trigger, more Biotech fodder, and a body -
all off an event 16 lands and 14 nonland cards already fire.

### A NOTE ON WHAT THE MANABASE CANNOT DO

Landers fetch **basic land cards** only. Stomping Ground and Wooded Ridgeline are `Land - Mountain
Forest`: they have the land *types*, but no `Basic` supertype, so no Lander can ever find them. 13 of
the 16 lands are fetchable. The practical consequence is that the deck's fixing improves as the game
goes long only in the colour it already has too much of, which is why green is deliberately
over-supplied (10 sources vs 44.8% of pips) - the two `{G}{G}` costs are the real constraint.

### PLAY PATTERN

Do not crack Landers on curve. A Lander held is a land drop *stored at instant speed*, and its value is
highest on a turn you have already made your land drop (turning on Tannuk's draw) or in response to
removal aimed at Tannuk (banking the trigger before the payoff dies). The deck's worst draws are the
ones that spend turns 3-5 cracking Landers for mana it did not need.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Tempo):  [PASS]
  MV distribution (24 nonland):  1:4  2:5  3:8  4:6  5:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 5 copies (effective 4.8: Biotech Specialist@0.8) → p=0.83 (need ≥ 0.75)
  PASS  enabler: 14 copies (effective 13: Terrapact Intimidator@0.5, Orbital Plunge@0.5) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 80% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 55%  T2 89%  T3 97%
Coverage:  [PASS]
  OK        wide_boards: Lithobraking
  OK        single_large_threat: Orbital Plunge, Invasive Maneuvers
  CONCEDED  noncreature_permanents: RG's only pool answers are Seedship Impact, Shattered Wings and Drill Too Deep; all three are sideboard flex because the mainboard cannot spare a slot that does nothing against creature decks
  CONCEDED  stack: no counterspell or stack interaction exists in red or green in this pool; the deck races instead
  CONCEDED  graveyard: graveyard text sits on 12.45% of the cube and no cube deck is built purely on it; a maindeck hate card is blank against the other ~87%, so Dauntless Scrapbot (exile each opponent's graveyard, plus a Lander) answers it from the sideboard instead
```

Phase 6b now returns PASS on all four checks with the correct Title-case 'Tempo' archetype key, so there is no WARN to respond to. Recorded for the file: the pre-grill run passed a lowercase 'tempo'. deck_checks.CURVE_BANDS is keyed 'Aggro'/'Tempo'/'Midrange'/'Control'/'Combo', so the lowercase key made .get() return an empty band list - the curve check silently tested nothing and reported a false PASS. Re-run correctly it WARNed (MV-2 share 12% vs a 20% minimum), and the deck was repaired to 20.8% rather than the WARN being explained away.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands are the deck's payoff, not its problem: Tannuk, Memorial Ensign reads 'Whenever a land you control enters, Tannuk deals 1 damage to each opponent', so every surplus land is a point of reach. Icetill Explorer's 'You may play an additional land on each of your turns' converts a second land in hand into Tannuk's draw clause the same turn, and its 'You may play lands from your graveyard' means a milled land is still a land drop. Remnant Elemental (+2/+0) and Seedship Agrarian (+1/+1 counter) also scale off the same event. |
| screw | mitigation | 16 lands - now exactly the computed recommendation - plus 11 nonland copies that manufacture a land drop. Sami's Curiosity costs {G} and banks a Lander castable off a 2-land keep; Larval Scoutlander at {2}{G} converts one Lander into two basics. The Phase 6b goldfish sim over 1000 hands reports 80% keepable and 84% with 3 lands by turn 3. Per grill finding F8, Terrapact Intimidator has been struck from this reasoning: its own weak-keystone resolution establishes that the opponent chooses whether it makes Landers at all, so it cannot be leaned on as screw insurance. |
| decapitation | mitigation | The kill mechanism is spread across three different cards keyed to three different events, 5 copies total: Tannuk, Memorial Ensign x2 (land ETB), Weftstalker Ardent x2 (creature/artifact ETB), Biotech Specialist x1 (artifact sacrifice). Removing any one leaves the other two converting the same Landers, and Eusocial Engineering x1 is an enchantment, so creature removal does not touch the token engine at all. Per grill finding F7, the earlier claim that Weftstalker's warp lets it be redeployed from exile after being answered has been struck as an oracle misread - warp only reaches exile via its own end-step trigger; a Weftstalker that is answered goes to the graveyard. |
| gas-out | mitigation | CORRECTED per grill finding F3. The honest resource_exchange census over the 24 nonland copies is: 'Board: Sacrifice-Cost' 4, and 'Cards: Net-Positive' ZERO. The earlier claim of 3 of 24 Cards:Net-Positive was fabricated - Tannuk and Icetill Explorer both carry resource_exchange: []. The mitigation therefore rests on two oracle-grounded mechanisms rather than on a taxonomy count. First, draw: Tannuk x2 reads 'If this is the second time this ability has resolved this turn, draw a card', and Icetill Explorer x1's 'You may play an additional land on each of your turns' supplies that second landfall for zero mana; Larval Scoutlander x2 reaches it off a single card by fetching two basics. Second, and carrying the heavier load: 11 nonland copies leave a Lander on the battlefield and Eusocial Engineering makes a token on every landfall - stored action that survives an empty hand, since each banked Lander is a future land drop plus a Weftstalker trigger plus a Biotech trigger plus a Tannuk trigger. This is the deck's weakest axis, and Territorial Bruntar x1 sits in the sideboard as the dedicated answer to it. |
| raced | mitigation | 8 of 24 nonland copies interact: Plasma Bolt x2, Invasive Maneuvers x2 (instant, and 5 damage while either Larval Scoutlander is out, since it is an Artifact - Spacecraft), Lithobraking x2, Orbital Plunge x1, and Remnant Elemental x1 (0/4 reach, which walls both ground aggro and the cube's 22.5% evasion class). Invasive Maneuvers at MV 2 is the F1 repair and means the first interactive turn is now turn 2 rather than turn 3. Lithobraking's 'deals 2 damage to each creature' is symmetric but near one-sided here: of the 12 creature copies in the list only Terrapact Intimidator (2/1) dies to it, and Eusocial Engineering's 2/2 Robot tokens also die - but the clause reads 'you MAY sacrifice an artifact', so firing the sweep is a choice, not a liability. |
| disruption-fizzle | mitigation | There is no single critical turn to interact with — the damage arrives one trigger at a time across many turns, so a counterspell or a removal spell answers one ping, not the plan. Concretely: Larval Scoutlander only sacrifices its Lander on resolution, so removing it in response costs the Lander nothing; and a Lander already on the battlefield can be cracked at instant speed in response to removal aimed at Tannuk, banking the landfall trigger before the payoff dies. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Glacier Godmaw | {5}{G}{G} for the ETB Lander plus a landfall team pump - 7 mana is three turns past this deck's thesis turn; the Lander engine wants to have won by then. |
| Famished Worldsire | {5}{G}{G}{G} mythic. Devour land 3 sacrifices lands, which is anti-synergy with a deck whose payoff triggers on lands ENTERING, and 8 mana never arrives. |
| Bioengineered Future | Rare. 'Each creature you control enters with an additional +1/+1 counter for each land that entered this turn' is a counters payoff, not a damage payoff - it competes for a rare slot with Biotech Specialist and Icetill Explorer, which produce damage directly. |
| Mightform Harmonizer | Rare. 'Landfall - double the power of target creature' needs a big creature already attacking; this deck's damage comes from triggers, not from one large body. |
| Eusocial Engineering | {3}{G}{G} for a 2/2 Robot per landfall - board width, not damage. It is the P3 payoff, and at 5 mana it does not advance the burn clock. |
| Tannuk, Steadfast Second | Mythic. 'Other creatures you control have haste' and warp {2}{R} on artifacts/red creatures is an aggro-tempo effect; it adds no landfall or Lander trigger and would consume the scarcest rare slot. |
| Nova Hellkite | Rare 4/5 flier for {3}{R}{R} with a 1-damage ETB - a good card that shares no cluster with the Lander engine and costs a rare slot. |
| Sledge-Class Seedship | Rare. Station 7 to become a creature and 'put a creature card from your hand onto the battlefield' on attack - a ramp-into-fatties payoff; this deck's creatures cost 1-4 and do not need cheating in. |
| Eumidian Terrabotanist | 'Landfall - you gain 1 life.' A landfall payoff whose payout is life, not damage; a burn deck racing does not convert life into wins. |
| Frontline War-Rager | 'At the beginning of your end step, if you control two or more tapped creatures, put a +1/+1 counter on this creature.' A Kavu but a counters payoff - the tapped-creature condition rewards attacking wide, which is P2's plan. |
| Memorial Team Leader | 'During your turn, other creatures you control get +1/+0' - an anthem is a combat-damage multiplier; this list's damage is 12 of 23 nonland cards' worth of triggers, not attack steps. |
| Vaultguard Trooper | {4}{R} 5/5: discard your hand to draw two. A five-mana Kavu with no Lander or landfall text; the discard is a real cost when the hand holds Landers-to-be. |
| Kavaron Skywarden | {4}{R} 4/5 reach with a Void +1/+1 counter clause - a fine blocker but five mana with no engine text. |
| Molecular Modifier | {2}{R} Kavu giving one creature +1/+0 and first strike each combat - a combat trick body in a deck that wins outside combat. |
| Harmonious Grovestrider | {3}{G}{G} */* equal to lands you control with ward {2}. Scales with land COUNT, but this deck's Landers convert into lands slowly (2 mana each); it is a 4/4-5/5 for 5 most games. |
| Fungal Colossus | 'Costs {X} less where X is the number of differently named lands you control.' Landers fetch BASIC lands, so this deck's differently-named land count is roughly 3-4 (Mountain, Forest, Wooded Ridgeline, Stomping Ground) - a 7-mana card discounted to 3-4, not to 0. |
| Survey Mechan | The {10} sacrifice ability 'costs {X} less where X is the number of differently named lands you control' - same count as above, roughly 3-4 differently named lands, leaving a 6-7 mana activation. |
| All-Fates Scroll | '{7}, {T}, Sacrifice: Draw X cards, where X is the number of differently named lands you control' - same 3-4 count problem, and 7 mana is unreachable. |
| Cut Propulsion | 'Target creature deals damage to itself equal to its power' - fails against the 0-1 power utility creatures and X/X-with-counters bodies this cube runs; Bombard's flat 4 is more reliable. |
| Close Encounter | Damage equal to the power of a creature you control - this deck's creatures are 2-3 power, so it is a conditional 2-3 damage requiring a board. |
| Nutrient Block | {1} Food that draws on death - a sacrificeable artifact that feeds Biotech Specialist, but it produces no land and so no Tannuk trigger; the Lander does both. |
| Zookeeper Mechan | {1}{R} 1/3 that taps for {R} - ramp, but this deck's ramp is Landers, which also trigger the payoff. A mana rock triggers nothing. |
| Gene Pollinator | {G} 1/2 mana dork requiring you to tap another permanent - the tap cost competes with attacking and with stationing Seedship Agrarian. |
| Command Bridge | Any-color land that 'sacrifice it unless you tap an untapped permanent you control' on entry - the tax hits on the exact turns this deck wants its permanents untapped. |
| Evendo, Waking Haven | Mythic Planet land, enters tapped, {T}: Add {G}; the 12+ charge-counter payoff needs stationing 12 power. A tapped mono-green land plus a rare slot. |
| Kavaron, Memorial World | Mythic Planet land, enters tapped, {T}: Add {R}; the 12+ ability sacrifices a LAND to make a 2/2 - anti-synergy with a landfall deck, plus a rare slot. |
| Secluded Starforge | Rare land that taps only for {C} in a deck with {R}{R} and {G}{G} costs; the {5} Robot ability is unreachable on a 17-land manabase. |
| Warmaker Gunship | Rare Spacecraft: ETB damage equal to the number of artifacts you control. Landers are artifacts, but they are made and cracked one at a time - the artifact count at any moment is 1-2. |
| Weapons Manufacturing | Rare: 'Whenever a NONTOKEN artifact you control enters, create a Munitions token.' Landers are TOKENS, so this deck's primary artifact source does not trigger it: 0 of the 13 Lander-producing effects qualify. |
| Rust Harvester | Rare: '{2}, {T}, Exile an artifact card from your graveyard' - Lander tokens cease to exist when sacrificed and never reach the graveyard as cards, so this list has 0 artifact CARDS that die to fuel it. |
| Pull Through the Weft | {3}{G}{G} to rebuy permanents and lands from the graveyard - five mana of pure card advantage in a deck trying to close by turn 7. |
| Full Bore | +3/+2 and (if warped) trample+haste - a combat trick; this deck has 2 warp cards and wins outside combat. |
| Shattered Wings | {2}{G} sorcery-speed artifact/enchantment/flier removal. Seedship Impact does the same job for {1}{G} at instant speed AND makes a Lander. |
| Diplomatic Relations | A fight effect needing a big creature; this deck's creatures are 2-4 power and it prefers unconditional burn. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.79   Ramp cards: 11   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.45 adj [MV 2.79 vs 2.5, 11 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  44.8%  prod  62.5%  gap -17.7pp  [OK]
  R  demand  55.2%  prod  56.2%  gap  -1.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool: every card is in the eoe cube mainboard (Phase 5C check 2: exact-name membership PASS)
[PASS] copies: commons/uncommons <= 2, rares/mythics <= 1 (Phase 5C check 3 PASS, verified via cube_search.get_max_copies with per_rarity policy)
[PASS] rare_mythic_cap: 3 of the permitted 6 used: Biotech Specialist (rare), Icetill Explorer (rare), Stomping Ground (rare). The sideboard adds none.
[PASS] colors: all 24 nonland cards usable in RG via effective_cost.best_mode (Phase 5C check 4 PASS); no off-identity inclusions
[PASS] splash: splash_colors = [], so check 5 is vacuously satisfied
[PASS] basics: Mountain x6 + Forest x7 — format-supplied, exempt from copy limits
[PASS] deck_size: 24 nonland + 16 land = 40 mainboard; 10 sideboard
```
