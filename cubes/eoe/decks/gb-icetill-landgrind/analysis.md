---
deck_name: "gb-icetill-landgrind"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GB"
format: "40-card"
built_at: "2026-08-07T18:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
11x  Forest                        
4x   Swamp                         
2x   Haunted Mire                  ({T}: Add {B} or {G}.) This land enters tapped.
```

### CREATURES (8)

```
CMC  Card                          Qty  Color  Role                              Rar
  2  Seedship Broodtender          x2   BG     Infrastructure/Consistency        U
  3  Galactic Wayfarer             x2   G      Engine/Outlet                     C
  4  Icetill Explorer              x1   G      Engine/Outlet                     R
  5  Harmonious Grovestrider       x2   G      Payload/Payoff                    U
  7  Glacier Godmaw                x1   G      Payload/Payoff                    U
```

### INSTANTS & SORCERIES (12)

```
CMC  Card                          Qty  Color  Role                              Rar
  1  Sami's Curiosity              x2   G      Engine/Outlet                     C
  1  Tragic Trajectory             x2   B      Interaction/Disruption            U
  2  Hymn of the Faller            x2   B      Infrastructure/Consistency        U
  3  Scrounge for Eternity         x2   B      Infrastructure/Consistency        U
  3  Shattered Wings               x2   G      Interaction/Disruption            C
  4  Vote Out                      x1   B      Interaction/Disruption            U
  5  Pull Through the Weft         x1   G      Infrastructure/Consistency        U
```

### OTHER SPELLS (3)

```
CMC  Card                          Qty  Color  Role                              Rar
  3  Larval Scoutlander            x1   G      Engine/Outlet                     U
  5  Eusocial Engineering          x2   G      Payload/Payoff                    U
```

## SIDEBOARD (10)

```
Card                          Qty  Color  Role / When to board in                                   Rar
Embrace Oblivion              x2   B      vs decks whose key permanent must die on turn one or two  C
Seedship Impact               x2   G      vs artifacts and enchantments - the pool's only enchantme U
Dauntless Scrapbot            x2   C      vs graveyard decks - exiles each opponent's graveyard and U
Skystinger                    x2   G      vs fliers - evasion is 22.5% of the cube (56 cards) and t C
Gravkill                      x2   B      vs death-trigger or recursive threats and stationed Space C
```

## ANALYSIS

### DECK IDENTITY

GB Icetill Land-Grind. Icetill Explorer is the engine: 'You may play an additional land on each of your turns. You may play lands from your graveyard. Landfall - Whenever a land you control enters, mill a card.' Each extra land drop mills a card, each milled land becomes a future land drop, and each of those mills again, so self-mill and land accumulation compound into one another instead of trading off. The land count IS the win condition. Harmonious Grovestrider's 'power and toughness are each equal to the number of lands you control' is a Ward-2 clock that grows with no further investment; Eusocial Engineering turns EVERY landfall trigger into a 2/2 Robot artifact creature token, which is simultaneously board width, convoke fuel for Vote Out, a target for Glacier Godmaw's team-wide '+1/+1 and gain vigilance and haste', and the deck's only free sacrifice fodder. Larval Scoutlander puts two basics onto the battlefield off one card, and because it is a Spacecraft it makes the 'or Spacecraft card' clause on Scrounge for Eternity and Seedship Broodtender live rather than dead text.

**The engine is a loop that eats its own output.** Icetill Explorer reads `You may play an additional land on each of your turns. // You may play lands from your graveyard. // Landfall — Whenever a land you control enters, mill a card.` Read those three lines together: the extra land drop mills a card, a milled land is a card you may now play, and playing it mills again. Self-mill and land accumulation normally trade against each other — here they compound. Everything else in the deck is a way to convert the resulting land count into something lethal.

**What one land entering actually does in this deck:**

| Trigger source | Effect per land |
|---|---|
| Harmonious Grovestrider | permanently +1/+1 (`power and toughness are each equal to the number of lands you control`) |
| Eusocial Engineering ×2 | a 2/2 Robot artifact creature token, each |
| Glacier Godmaw | the whole team gets +1/+1 and **vigilance and haste** |
| Icetill Explorer | mill 1 — which is another future land drop |

A single cracked Lander on a developed board is therefore two 2/2 bodies, a permanent Grovestrider counter, a team-wide pump with haste, and a card into the yard.

**Two oracle traps the Phase 9 grill caught, both of which changed the list:**

1. **A Lander is not sacrifice fodder.** Its text is `{2}, {T}, Sacrifice this token: Search your library for a basic land card...` — it sacrifices *itself* as part of its own activation cost. There is no board state where a "spent Lander" is sitting around to feed something else. That killed the original justification for Embrace Oblivion (`As an additional cost to cast this spell, sacrifice an artifact or creature`), which moved to the sideboard.
2. **A Lander is not mana-screw insurance either.** Cracking one costs `{2}` on top of the spell that made it, so its activation cost scales with exactly the resource you're missing. Landers are flood conversion and ramp, and the `screw` failure mode now says so.

**Eusocial Engineering is the card that ties the deck together, and it was nearly missed.** It is the only card in the pool that turns a landfall trigger into a *permanent body*, and it solves three separate problems at once: it is the only free sacrifice fodder for Scrounge for Eternity, it is the only reason Vote Out's **convoke** is real (Lander tokens are noncreature artifacts and do **not** convoke), and it multiplies Glacier Godmaw's team pump, which otherwise fires on a board of about two creatures.

**Larval Scoutlander turns dead text live.** Scrounge for Eternity and Seedship Broodtender both read `return target creature **or Spacecraft** card` — four cards' worth of clause that was doing nothing, because the deck ran zero Spacecraft. Larval Scoutlander is a Spacecraft at mana value 3, inside Scrounge's `mana value 5 or less` window, and it puts *two* basics onto the battlefield off one card.

**The land census matters more here than in most decks.** Lander tokens fetch a **basic** land specifically, so of the 17 lands only the 15 basics are reachable — Haunted Mire is a nonbasic dual and can only come back via Pull Through the Weft's `return up to two target land cards from your graveyard`. And with only three differently-named lands in the deck, both Fungal Colossus (`costs {X} less... where X is the number of differently named lands you control`) and All-Fates Scroll (`Draw X cards, where X is the number of differently named lands`) cap out at X=3 and are excluded on that count.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:4  3:7  4:2  5:5  7:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  land_engine: 8 copies (effective 7.8: Scrounge for Eternity@0.9, Scrounge for Eternity@0.9) → p=0.95 (need ≥ 0.75)
  PASS  land_payoff: 5 copies → p=0.85 (need ≥ 0.75)
  PASS  recursion: 5 copies (effective 4.6: Seedship Broodtender@0.8, Seedship Broodtender@0.8) → p=0.82 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 81% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 54%  T2 80%  T3 96%
Coverage:  [PASS]
  CONCEDED  wide_boards: Correcting the pre-grill version of this entry, which claimed no castable sweeper exists: Extinguisher Battleship is colourless at {8} and Zero Point Ballad is black, so two are technically castable. Neither is taken. Zero Point Ballad at any X large enough to matter also destroys Seedship Broodtender (2/3), Galactic Wayfarer (3/3) and every 2/2 Robot token this deck makes; Extinguisher Battleship's 4 damage to each creature likewise kills those and costs eight mana in a deck whose curve tops at seven. The plan against a wide board is to out-size it: Harmonious Grovestrider is a */* equal to the land count, and Glacier Godmaw grants the whole team +1/+1 and vigilance on every landfall so it can attack and still block. Mitigating properly would trade a land-engine or land-payoff slot for a sweeper that kills our own tokens.
  OK        single_large_threat: Vote Out, Tragic Trajectory
  OK        noncreature_permanents: Shattered Wings
  CONCEDED  stack: A pool-wide search for 'counter target' returns three cards, all mono-blue. Neither green nor black has stack interaction here. The substitute is that the engine is distributed across eleven separate cards that make or replay lands, so answering any one slows the compounding without stopping it - plus Pull Through the Weft x2, which rebuys after the fact rather than protecting beforehand.
  CONCEDED  graveyard: Dauntless Scrapbot x2 in the sideboard exiles each opponent's graveyard and still leaves a Lander for landfall. Maindecking graveyard hate is actively wrong here because Icetill Explorer's 'You may play lands from your graveyard' makes our own graveyard a resource, so symmetrical hate costs us as much as the opponent.
```

- All Phase 6b checks PASS after two in-phase repairs and the Phase 9 rebuild: curve PASS (MV distribution 1:4 2:4 3:7 4:2 5:5 7:1), assembly PASS at thesis turn 7 (land_engine 7.8 effective p=0.95, land_payoff 5.0 p=0.85, recursion 4.6 p=0.82), goldfish PASS (81% keepable, T1 54% / T2 80%), coverage PASS.
- A declared `sacrifice_fodder` role was REMOVED rather than re-weighted after it failed at p=0.71. Grounds: it was over-declared. This deck's thesis is land count, and once Embrace Oblivion moved to the sideboard the only maindeck card carrying a sacrifice cost is Scrounge for Eternity x2 - a cost on 2 of 23 cards, not an engine role whose absence breaks the thesis. The removal was disclosed to the Challenger in the approval round, which ruled the reasoning holds and instructed that the role not be re-added. Dependency it asked to be recorded: this is only true while Eusocial Engineering is on the battlefield - if it is answered, Scrounge for Eternity x2's sacrifice cost falls back onto payoff creatures.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Flooding is this deck's win condition rather than its failure mode - that is the thesis. Every surplus land raises Harmonious Grovestrider's power by 1 ('power and toughness are each equal to the number of lands you control'), fires Eusocial Engineering for a 2/2 Robot artifact creature token, fires Glacier Godmaw's team-wide '+1/+1 and gain vigilance and haste until end of turn', and mills one card off Icetill Explorer's landfall. Pull Through the Weft converts a land that arrived too late back into two nonland permanents from the graveyard. |
| screw | mitigation | Eight of the 23 nonland cards cost 1 or 2 (curve 1:4, 2:4), and the ones genuinely castable while screwed are Sami's Curiosity x2, Tragic Trajectory x2 and Hymn of the Faller x2 - 6 of 23, with Hymn digging for the missing land. Narrowing that further at the grill's request: 4 of those 6 need {B} (Tragic Trajectory x2, Hymn of the Faller x2) off only 6 black sources of 17, so the genuinely colour-safe screw insurance is Sami's Curiosity x2 at {G} against 13 green sources. Explicitly NOT claimed, correcting the pre-grill text: a Lander is NOT screw insurance. Its oracle cost is '{2}, {T}, Sacrifice this token', so converting Sami's Curiosity into a land costs {G} plus {2} across two turns and a player missing lands cannot pay the {2}. Landers are flood conversion and ramp. Seedship Broodtender at {B}{G} is likewise not a reliable turn-two play off 6 black sources with the only dual entering tapped. |
| decapitation | accepted | Icetill Explorer is a genuine single point of failure and the deck runs exactly one copy, because the pool contains no second card with 'You may play an additional land' or 'You may play lands from your graveyard' - a pool-wide search returns it alone. Answering it does not stop the deck: Harmonious Grovestrider, Eusocial Engineering and Glacier Godmaw all scale off a normal land count, and seven Lander-producing cards keep that count climbing. What it removes is the compounding half of the thesis. Mitigating would mean finding a redundant copy that does not exist in this pool. |
| gas-out | mitigation | Real draw as well as recursion, which the pre-grill version lacked. (Caveat recorded at the grill: deck_audit still reports cantrip_count 0 because its probe does not match Hymn of the Faller's wording - the substance is real draw, but the metric does not register it.) Hymn of the Faller x2 - 'Surveil 1, then you draw a card and lose 1 life' plus a second card whenever a nonland permanent left the battlefield that turn, which a cracked Lander satisfies. Alongside it: Pull Through the Weft returns two nonland permanents to hand AND two lands to the battlefield off one card, Scrounge for Eternity x2 returns a mana-value-5-or-less body and leaves a Lander, and Icetill Explorer's 'You may play lands from your graveyard' means every land milled is a future land drop rather than a lost card. |
| raced | mitigation | Sami's Curiosity x2 gains 2 life each. Harmonious Grovestrider blocks as a */* equal to the land count - typically 6/6 or larger by turn six - and Glacier Godmaw's landfall grants vigilance, so the team can attack and still block. Eusocial Engineering manufactures a 2/2 blocker on every landfall trigger, which is several per turn once Landers flow. Against the cube's artifact-aggro decks (artifacts 29.7% density) Shattered Wings x2 answers an artifact or a flier. |
| disruption-fizzle | accepted | The deck has no single critical turn to protect and no stack interaction to protect it with - a pool-wide search for 'counter target' returns three cards, all mono-blue. What it has instead is a distributed engine: seven distinct cards - 10 copies - make or replay lands, and three more pay off doing so, so interacting with any one of them slows the compounding without stopping it. Mitigating would require a colour the deck does not play, which the mana base cannot support alongside {G}{G} on four cards. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Famished Worldsire (M) | 'Devour land 3' is the perfect flavour fit, but at {5}{G}{G}{G} it was the deck's only triple-pip cost against 13 green sources, the assembly gate weighted it 0.7, and at mana value 8 it fought a goldfish check that needed two curve repairs to clear 80% keepable. |
| Mightform Harmonizer (R) | 'landfall - double the power of target creature' is a genuine kill button on a large Grovestrider, but the slot went to Eusocial Engineering, which produces a body on the same trigger rather than a one-turn pump. |
| Icecave Crasher (C) | its landfall bonus is '+1/+0 until end of turn' on itself only - it converts land count into damage for one turn rather than permanently. |
| Seedship Agrarian (U) | full oracle is 'Whenever this creature becomes tapped, create a Lander token' AND 'Landfall - put a +1/+1 counter on this creature'. The second clause is a PERMANENT counter, better than Icecave Crasher's temporary pump, and 'becomes tapped' is satisfied by Vote Out's convoke as well as attacking. Cut for slots, not for weakness - the strongest card on this list. |
| Fungal Colossus (C) | 'costs {X} less to cast, where X is the number of differently named lands you control' - this deck has exactly three land names (Forest, Swamp, Haunted Mire), so the discount caps at {3} and it is a {3}{G} 5/5. |
| All-Fates Scroll (U) | 'Draw X cards, where X is the number of differently named lands you control' for a {7} activation, at X=3 in this deck - the same three-land-name census that excludes Fungal Colossus. |
| Anticausal Vestige (R) | 'When this creature leaves the battlefield, draw a card, then you may put a permanent card with mana value less than or equal to the number of lands you control from your hand onto the battlefield' scales off the exact resource this deck accumulates. Both roles it was proposed for are now filled: free sacrifice fodder by Eusocial Engineering's Robot tokens, card draw by Hymn of the Faller x2. At mana value 6 it would also re-break the goldfish check. |
| Bioengineered Future (R) | 'each creature you control enters with an additional +1/+1 counter for each land that entered this turn' is a real payoff with multiple land drops per turn, but the 23 nonland slots went to the five blocking repairs from the grill, all of which were uncommons or commons. |
| Xu-Ifit, Osteoharmonist (R) | excluded on mana, not power. At {1}{B}{B} it is the only double-black card considered in a deck where every other black card is single-pip and green demands {G}{G} on four cards; the base runs 6 black sources of 17. |
| Embrace Oblivion (C) | moved to the sideboard. 'As an additional cost to cast this spell, sacrifice an artifact or creature' has no free fodder in the maindeck configuration - a Lander sacrifices ITSELF as part of its own activation cost, so a spent Lander never exists to be eaten. |
| Eumidian Terrabotanist (U) | 'Landfall - you gain 1 life' is real in a deck with several triggers per turn, but the two-drop slot went to Hymn of the Faller, which digs as well as stabilizes. |
| Edge Rover (U) | a one-mana 2/2 with reach that dies into a Lander, but 'EACH PLAYER creates a Lander token' hands the opponent a free ramp artifact. |
| Beamsaw Prospector (C) | the pool's only asymmetric dies-into-a-Lander body, and the right card if the deck ran more sacrifice outlets; with Embrace Oblivion sideboarded there is only one sacrifice-cost card left maindeck. |
| Command Bridge (C, land) | considered as a third black source; it enters tapped AND reads 'sacrifice it unless you tap an untapped permanent you control', taxing exactly the turns this deck wants to deploy, and it is nonbasic so no Lander can fetch it. |
| Thawbringer (C) | considered for the sideboard; it answers no threat class in the cube's profile and is a 4/2 ground body at the same cost and colour as Galactic Wayfarer. The slot went to Skystinger, which answers evasion - 22.5% of the cube and otherwise unaddressed. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     3.17   Ramp cards: 7   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.27 adj [MV 3.17 vs 2.5, 7 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  28.1%  prod  35.3%  gap  -7.2pp  [OK]
  G  demand  71.9%  prod  76.5%  gap  -4.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2: PASS - no card exceeds 2 copies across both boards
rares_mythics_max_1: PASS - Icetill Explorer x1
rare_mythic_total_max_6: PASS - 1 used, 5 slots left unspent. The grill correctly notes that unspent rare slots convert to nothing; the reason they went unspent is that all five BLOCKING repairs resolved to uncommons and commons (Eusocial Engineering, Larval Scoutlander, Hymn of the Faller, Tragic Trajectory, Skystinger).
basics_unlimited: 11 Forest + 4 Swamp, format-supplied
colours: PASS - all cards within GB core identity; no splash
```
