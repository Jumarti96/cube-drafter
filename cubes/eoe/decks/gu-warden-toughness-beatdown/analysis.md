---
deck_name: "gu-warden-toughness-beatdown"
cube_id: "eoe"
cube_slug: "eoe"
colors: "GU"
format: "40-card"
built_at: "2026-08-06T02:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
8x Forest                   Land — green source (61.5% of pips)
6x Island                   Land — blue source
2x Tangled Islet            Land — G/U dual, enters tapped
1x Breeding Pool            Land — G/U, untapped for 2 life; the only untapped-capable dual for this pair
```

### CREATURES (14)
```
CMC  Card                    Qty  Color  Role                                                                                                                                                                                                                                                                      Rar
  1  Gene Pollinator         x1   G      Threat/fixer — 1/2 billing 2 under Warden; '{T}, Tap an untapped permanent you control: Add one mana of any color' covers the GG and UU casts                                                                                                                             C
  2  Eumidian Terrabotanist  x1   G      Threat — {1}{G} 2/3, the turn-2 body; bills 3                                                                                                                                                                                                                             U
  3  Cloudsculpt Technician  x2   U      Threat — 1/4 FLIER billing 4 in the air from turn 3; under Warden it bills 4 whether or not its +1/+0 is live, so the artifact clause is upside, not a requirement                                                                                                        C
  3  Illvoi Infiltrator      x2   U      Threat — 1/3 billing 3, and 'can't be blocked if you've cast two or more spells this turn' is unconditional evasion that beats gang-blocking; 'whenever this creature deals combat damage to a player, draw a card'. The payoff Uthros Psionicist's discount was missing  U
  3  Uthros Psionicist       x2   U      Threat — 2/4 billing 4; 'The second spell you cast each turn costs {2} less to cast' pays for the double-spell turns                                                                                                                                                      U
  4  Drix Fatemaker          x2   G      Delivery — 'Each creature you control with a +1/+1 counter on it has trample'; ETB places the counter. Without trample a 4-toughness attacker is chump-blocked for zero regardless of Warden. Warp {1}{G}                                                                 C
  4  Ouroboroid              x1   G      Threat/amplifier — 'put X +1/+1 counters on each creature you control, where X is this creature's power' every combat, and it grows itself so X compounds; needs no cards from hand                                                                                       M
  4  Tapestry Warden         x2   G      PAYOFF — 'assigns combat damage equal to its toughness rather than its power'. The only card in the 271-card cube with this clause; its own 3/4 body bills 4                                                                                                              U
  5  Quantum Riddler         x1   U      Threat — 4/6 FLIER billing 6, the largest Warden target in the pool; ETB draws, and 'as long as you have one or fewer cards in hand ... you draw that many cards plus one' answers this deck's empty-hand turns; Warp {1}{U}                                              M
```

### INSTANTS & SORCERIES (2)
```
CMC  Card              Qty  Color  Role                                                                                                                                                                                                                                             Rar
  2  Biosynthic Burst  x2   G      Delivery/protection — '+1/+1 counter ... gains reach, trample, and indestructible until end of turn. Untap it': grants trample itself, so it delivers with zero Drix in play, and indestructible answers the cube's 5 sweepers at instant speed  C
```

### OTHER SPELLS (7)
```
CMC  Card                   Qty  Color  Role                                                                                                                                                                                                                                                                                                                                      Rar
  1  Cryoshatter            x2   U      Interaction — {U} aura; '-5/-0' blanks the biggest blocker immediately, and 'when enchanted creature becomes tapped or is dealt damage, destroy it' kills any creature that attacks or blocks                                                                                                                                             C
  1  Meltstrider's Resolve  x2   G      Interaction/amplifier — the ONLY card in the pool whose pump raises toughness without raising power: '+0/+2' WIDENS the gap Warden reads, adding 2 damage. 'Can't be blocked by more than one creature' stops gang-chumping. Its ETB fight deals damage equal to POWER, so with these low-power bodies the fight is a bonus, not removal  U
  3  Bioengineered Future   x1   G      Engine — 'Each creature you control enters with an additional +1/+1 counter on it FOR EACH LAND THAT ENTERED the battlefield under your control this turn'. Conditional: it places nothing on a turn no land enters, which is why it is weighted below a full copy                                                                        R
  3  Terrasymbiosis         x1   G      Engine — 'Whenever you put one or more +1/+1 counters on a creature you control, you may draw that many cards' against 6 counter-placing copies in this list, doubled by Loading Zone; the answer to the flood and gas-out modes                                                                                                          R
  4  Loading Zone           x1   G      Engine — doubles every counter placed on a creature; Warp {G} deploys it for one mana on a full turn                                                                                                                                                                                                                                      R
```

## SIDEBOARD (10)
```
Card                 Qty  Color  Role / When to board in                                                                                                                                                                                         Rar
Desculpting Blast    x1   U      Bounce any nonland permanent — the only sideboard answer that reaches the cube's 22 Spacecraft and 6 Planets, which Cryoshatter (Enchant creature) cannot touch                                                 U
Illvoi Light Jammer  x2   U      Protects Tapestry Warden from targeted removal — 'Flash ... That creature gains hexproof until end of turn', and its +1/+2 widens toughness over power rather than closing it. Board in vs removal-heavy decks  C
Seedship Impact      x2   G      Instant-speed artifact/enchantment removal for turns the deck cannot tap out                                                                                                                                    U
Shattered Wings      x2   G      Artifact/enchantment/flier removal — 74 artifacts (29.7% density) + 16 enchantments cube-wide, and this deck's only answer to a crewed opposing Spacecraft                                                      C
Unravel              x2   U      Counter target spell — vs the cube's 5 sweepers and its expensive single-large-threat top ends                                                                                                                  U
Survey Mechan        x1   C      'Flying / Hexproof' 1/3 billing 3 in the air and untargetable — the clock a removal deck cannot answer                                                                                                          U
```

## ANALYSIS

### DECK IDENTITY

Simic Toughness Beatdown. 12 of this deck's 14 creature copies have toughness greater than power, and two Tapestry Wardens let every one of them assign combat damage equal to that back number - the qualifying board totals 44 toughness against 22 power, so the payoff exactly doubles its damage. Because that clause exists on only one card in the cube, the deck carries a second route to the same place: +1/+1 counters raise power and toughness equally, and Meltstrider's Resolve raises toughness alone, so the bodies get lethal whether or not a Warden ever arrives. Drix Fatemaker gives every countered creature trample and Meltstrider's Resolve stops gang-blocking, which is how the damage survives a chump block; Terrasymbiosis turns the counter package into cards.

### THE ONE-CARD ARCHETYPE, AND WHAT IT COSTS

Tapestry Warden is the only card in all 271 cube cards whose text reads *"assigns combat damage equal
to its toughness rather than its power."* At two copies in a 40-card deck, P(seeing one by turn six,
thirteen cards deep) is about **48%**. Roughly half this deck's games never see the card the archetype
is named after.

That single number dictates the whole build. It is why the deck carries a **second, independent route
to lethal damage** — +1/+1 counters raise power and toughness equally, and Meltstrider's Resolve raises
toughness alone, so the bodies get big enough to win by ordinary means while *staying* eligible for
Warden if it shows up later. The two routes are additive, not alternative.

The payoff's value when it does arrive is easy to state exactly. The twelve qualifying creature copies
total **44 toughness against 22 power** — Tapestry Warden precisely **doubles** this board's damage.

| Body | Normal damage | Under Warden |
|---|---|---|
| Cloudsculpt Technician 1/4 (flying) | 1 | **4** |
| Uthros Psionicist 2/4 | 2 | **4** |
| Illvoi Infiltrator 1/3 (unblockable conditionally) | 1 | **3** |
| Quantum Riddler 4/6 (flying) | 4 | **6** |
| Tapestry Warden 3/4 (itself) | 3 | **4** |
| Gene Pollinator 1/2 | 1 | **2** |
| Eumidian Terrabotanist 2/3 | 2 | **3** |
| Ouroboroid 1/3 | 1 | **3** |

### THE TRAP: NINE CARDS THAT LOOK LIKE THE ARCHETYPE AND TURN IT OFF

Warden's clauses fire only where **toughness exceeds power**. So any effect that raises power without
matching it in toughness, or sets base power and toughness to an equal value, is not a buff — it is a
switch that turns the deck off. Nine pool cards fall into this trap:

| Card | Text | Why it breaks the payoff |
|---|---|---|
| Broodguard Elite | "enters with X +1/+1 counters on it" on a 0/0 | Becomes an **X/X** — power equals toughness, so the payoff never reads it |
| Emissary Escort | "gets +X/+0, where X is the greatest mana value among other artifacts" | 0/4 becomes 4/4 |
| Genemorph Imago | landfall sets a creature to "base power and toughness 3/3" | Setting base P/T *equal* destroys the condition on whatever it "helps" |
| Meltstrider's Gear | "+2/+1 and has reach" | Closes the gap by one every time; a 3/4 becomes 5/5 |
| Harmonious Grovestrider | P/T "each equal to the number of lands you control" | Equal by construction |
| Mouth of the Storm / Mechanozoa / Intrepid Tenderfoot / Illvoi Operative | 6/6, 5/5, 2/2, 2/1 | Equal or power-favouring |

The mirror image is the deck's best card, and it is the only one of its kind in the pool:
**Meltstrider's Resolve** grants *"+0/+2"* — toughness only. It is the sole pump in the cube that
**widens** the gap Warden reads, adding 2 damage rather than eroding the condition. It also reads
*"can't be blocked by more than one creature"*, which stops the gang-block that trample only partly
answers. (Its ETB fight deals damage equal to **power**, and this deck's bodies have power 1–4, so
the fight is incidental — it is not removal.)

### WHY TRAMPLE IS NOT OPTIONAL

A 1/4 attacking for 4 is still worth exactly zero against a 1/1 chump block. That is why the delivery
package is declared as its own assembly role rather than treated as value: Drix Fatemaker grants
trample to *"each creature you control with a +1/+1 counter on it"*, and Biosynthic Burst grants it
directly at instant speed. Bioengineered Future's counter-per-land-drop turns the trample on for
creatures as they arrive — though note its real text is conditional (*"for each land that entered the
battlefield under your control this turn"*), so on a landless turn it does nothing.

### PLAY-PATTERN NOTES

- **Ouroboroid compounds and needs no cards.** X equals its own power and it counters itself, so
  unaided it goes 1 → 2 → 4 → 8, and Loading Zone doubles each step. An empty hand with Ouroboroid on
  board is still a rising clock — which is why the gas-out mode is mitigated rather than accepted.
- **Cloudsculpt Technician's artifact pump is irrelevant under Warden.** Only 3 of the 23 nonland cards
  are artifacts, so the +1/+0 is often not live — and it does not matter: a 1/4 and a 2/4 both bill 4.
- **Cryoshatter is real removal, not just a shrink.** *"-5/-0"* blanks the biggest blocker immediately,
  and *"when enchanted creature becomes tapped or is dealt damage, destroy it"* kills anything that
  subsequently attacks or blocks. In a deck attacking every turn, that trigger is not speculative.
- **Two GG cards and one UU card off 11 and 9 sources**, with two of three duals entering tapped, is
  the genuinely uncomfortable part of the mana. Gene Pollinator is the card covering it.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:5  2:3  3:8  4:6  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  damage_amplifier: 6 copies (effective 4.5: Bioengineered Future@0.5, Meltstrider's Resolve@0.5, Meltstrider's Resolve@0.5) → p=0.79 (need ≥ 0.75)
  PASS  delivery: 6 copies (effective 5: Meltstrider's Resolve@0.5, Meltstrider's Resolve@0.5) → p=0.82 (need ≥ 0.75)
  PASS  toughness_bodies: 12 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 68%  T2 89%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Cloudsculpt Technician, Uthros Psionicist, Ouroboroid, Quantum Riddler
  OK        single_large_threat: Cryoshatter, Biosynthic Burst
  CONCEDED  noncreature_permanents: G/U's only artifact/enchantment answers in the pool are Shattered Wings and Seedship Impact, and both are dead cards against the roughly 70% of cube decks whose threats are creatures. Maindecking them in a 24-slot aggro shell would cost two of the twelve toughness bodies that the payoff reads, which is the deck's identity. Both are sideboarded at 2 copies each.
  CONCEDED  stack: No maindeck counterspell. This deck's goldfish turn is 6 and it spends every turn from 1 to 5 deploying a body or a counter source; Unravel at {1}{U}{U} requires holding three mana on a turn the curve has already committed. Unravel x2 is sideboarded for the matchups where the trade is correct.
  CONCEDED  graveyard: No graveyard hate main or side. The cube holds 31 graveyard-interaction cards but only 1 graveyard-hate card, and the one-sided option (Dauntless Scrapbot) is colourless-castable but would occupy a sideboard slot this deck needs for protecting its single payoff card - the 2 Illvoi Light Jammer are the higher-value use of that space given the payoff exists on 2 cards.
```

- All four structural checks PASS. Recorded for continuity: the pre-grill report FAILED assembly at p=0.64, and the first repair passed at p=0.88 only by over-crediting two role members. The final state passes at 0.82 and 0.85 on corrected weights with the thesis turn moved to 7.
- Curve PASS with a 5/3/8/6/1 spread across MV 1-5. The single 5-drop is Quantum Riddler. Avg MV 2.78 against 17 lands is what the land_target trace was solved for.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Terrasymbiosis is the flood outlet: 'Whenever you put one or more +1/+1 counters on a creature you control, you may draw that many cards' fires off 6 counter-placing copies and is doubled by Loading Zone, so surplus mana spent on a creature also buys cards. Quantum Riddler adds 'as long as you have one or fewer cards in hand, if you would draw one or more cards, you draw that many cards plus one instead'. Ouroboroid converts nothing but needs nothing - it grows the board from an empty hand every combat. An earlier draft ACCEPTED this mode on the false grounds that no rare slot was free for Terrasymbiosis; two were. |
| screw | mitigation | Five cards at mana value 1 (Gene Pollinator, Cryoshatter x2, Meltstrider's Resolve x2) and three at 2 mean a two-land hand has real plays. Gene Pollinator's '{T}, Tap an untapped permanent you control: Add one mana of any color' is the specific fix for the two GG and one UU casts. Breeding Pool enters untapped for 2 life when tempo matters. The goldfish sim measures keepable at 86% and a play by turn 2 in 89% of hands. |
| decapitation | accepted | The payoff can be answered and there is no maindeck protection, because the payoff does not exist in quantity: 1 of 271 cube cards, capped at 2 copies, so P(one by turn 6) is about 48%. Mitigating in the maindeck means Illvoi Light Jammer x2, which drops the threat count from 12 of 23 (52.2%) to 10 of 23 (43.5%) - below the 45% aggro floor - in a deck whose payoff counts bodies. That is the identity cost. The deck is instead built so decapitation is survivable: the counter package and Meltstrider's Resolve are a full second route that never mentions Warden, Biosynthic Burst x2 grants indestructible at instant speed, and Illvoi Light Jammer x2 sits in the sideboard for known-removal matchups. |
| gas-out | mitigation | Terrasymbiosis converts the counter package into cards off 6 placing copies. Quantum Riddler draws on entry and then draws an EXTRA card on every draw while you hold one or fewer cards - a clause that switches on precisely in the empty-hand state this mode describes. Illvoi Infiltrator x2 read 'whenever this creature deals combat damage to a player, draw a card' and are unblockable on any turn you cast two spells. And Ouroboroid needs no cards at all: 'put X +1/+1 counters on each creature you control, where X is this creature's power', growing itself so X compounds. An earlier draft accepted this mode with a card-flow census of 1 of 23 and a cost that did not exist; the real figure now is four distinct sources. |
| raced | mitigation | Every creature here blocks well, which is the point of a toughness shell: 14 of 14 creature copies have toughness 2 or more and 7 have toughness 4 or more. 3 copies fly, covering evasive threats. Biosynthic Burst is an instant granting 'indestructible until end of turn. Untap it', so a creature can block, survive anything, and still be available. Cryoshatter x2 answer the biggest attacker for one mana - '-5/-0' immediately, then 'when enchanted creature becomes tapped or is dealt damage, destroy it' the moment it attacks or blocks. |
| disruption-fizzle | mitigation | The critical turn is an attack, not a spell, so there is no stack to interact with. If a blocker-turned-attacker is removed mid-combat, Biosynthic Burst x2 answer at instant speed with a counter plus 'indestructible until end of turn. Untap it' - saving the creature and switching Drix Fatemaker's trample on for it in the same combat. If Drix Fatemaker is answered to restore chump blocking, Biosynthic Burst grants trample by itself and Meltstrider's Resolve x2's 'can't be blocked by more than one creature' limits the chump to a single body; counters already placed persist, and a second Drix is in the deck. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Broodguard Elite | {X}{G}{G} 0/0 that 'enters with X +1/+1 counters on it' - an X/X with power EQUAL to toughness, which Tapestry Warden's clause never reads. Looks like an archetype card, invisible to the payoff. The shape judge flagged it independently as a central-trap risk. |
| Emissary Escort | {1}{U} 0/4 that 'gets +X/+0, where X is the greatest mana value among other artifacts you control'. A flat power pump - the one shape that switches the payoff off. With this list's artifacts at mana value 1-4, X reaches 4 and the 0/4 becomes a 4/4. |
| Genemorph Imago | {G}{U} 1/3 flier whose landfall sets a creature to 'base power and toughness 3/3' (or 6/6). Setting base P/T to an EQUAL value destroys toughness>power on whatever it targets - a rare slot for an anti-synergy. |
| Meltstrider's Gear | {G} Equipment granting '+2/+1 and reach'. +2/+1 closes the gap by one every time: a 3/4 becomes a 5/5 and stops being a legal Warden target. Two of the three sketchers excluded it for this reason. Contrast Meltstrider's RESOLVE (+0/+2), which is in the deck. |
| Harmonious Grovestrider | {3}{G}{G} whose 'power and toughness are each equal to the number of lands you control' - equal by construction, never a Warden target. |
| Mouth of the Storm / Mechanozoa / Intrepid Tenderfoot / Illvoi Operative | All excluded on the same mechanism: 6/6, 5/5, 2/2 and 2/1 respectively. Equal or power-favouring P/T, so the payoff does not read them. |
| Atmospheric Greenhouse | CUT POST-GRILL. Its 'put a +1/+1 counter on each creature you control' is board-wide but ONE-SHOT - roughly 4 extra damage once, which is not a route to lethal. It was the marginal card carrying a previously-failing assembly gate, and it was the only 5-drop in a build whose lens is lowest-curve. The Challenger's suggested swap to Terrasymbiosis was taken. |
| Atmospheric Greenhouse (the trample claim) | Recorded separately because two sketchers claimed it grants trample. It does not - that text is Drix Fatemaker's. Its own 'Flying, trample' applies only to itself at 8+ charge counters. |
| Lashwhip Predator | {4}{G}{G} 5/7 is the largest back number in G/U and was still cut. At 6 mana it is off-curve for a 17-land build at avg MV 2.78, and its 'Reach' is a BLOCKING ability that does nothing to make a ground 5/7 connect - the shape judge flagged that reach-as-evasion conflation. Its cost reduction triggers precisely when three or more opposing creatures exist, i.e. exactly when it gets chump-blocked. |
| Starbreach Whale | {4}{U} 3/5 flier billing 5, and a COMMON - it costs no rare budget, which an earlier draft of this record wrongly implied. Cut purely on curve: at 5 mana it competes with Quantum Riddler, which bills 6 and draws. The cheapest real addition if this deck is rebuilt one mana higher. |
| Icetill Explorer | {2}{G}{G} 2/4, rare, genuinely toughness>power, and 'You may play an additional land on each of your turns' does multiply Bioengineered Future's per-turn counter output. Contested against the budget: the 6 rare/mythic slots are now fully spent, and Terrasymbiosis and Quantum Riddler each do more for the two failure modes that were accepted. |
| Starfield Vocalist | {3}{U} 3/4, rare - doubles ETB triggers, which would double Drix Fatemaker's counter. Contested on the same full budget. |
| Sledge-Class Seedship | {2}{G} 4/5 Spacecraft, rare - the only card that would use Tapestry Warden's SECOND clause ('stations permanents using its toughness rather than its power'). Genuinely interesting and genuinely contested: it is a rare and the budget is 6 of 6. Path B (the sibling G/U/B build) is where that clause is the whole plan. |
| Mm'menon, the Right Hand | {3}{U}{U} 3/4 flier, rare - its artifact-casting and artifact-mana text keys off a density this deck does not have: 3 of 23 nonland cards are artifacts. |
| Selfcraft Mechan | CUT POST-GRILL. A 3/4 billing 4, and it does draw off a fed sacrifice cost - the Challenger was right that the gas-out census wrongly omitted it. Cut anyway because Illvoi Infiltrator at 3 mana bills 3 with unconditional evasion and a draw-on-damage trigger, which serves an aggro shell better than a 4-mana ground body. |
| Mental Modulation | CUT POST-GRILL. Tapping a blocker plus a card for {U} was fine, and it combos with Cryoshatter's 'becomes tapped' trigger. Cut for Meltstrider's Resolve, which pumps toughness (the number being billed), stops gang-blocking, and fights. |
| Virulent Silencer | {3} 2/3 giving two poison counters when a nontoken ARTIFACT creature connects. Only 3 of 23 nonland copies are artifacts here, so reaching 10 poison needs 5 connections from a 3-card subset - a second win condition competing with the first. |
| Survey Mechan | {4} 1/3 flying hexproof billing 3 - untargetable, the ideal answer to a 2-copy payoff. Cut from the maindeck at 4 mana for 3 damage; kept in the sideboard for removal-heavy matchups. |
| Unravel / Divert Disaster | Counterspells were maindecked by the rejected sweeper-resilient sketch. Rejected here: this build commits mana every turn from 1 to 5, so holding {1}{U}{U} fights its own curve. Unravel x2 sideboarded for the cube's 5 sweepers. |
| Shattered Wings / Seedship Impact | G/U's only artifact/enchantment answers. Both dead against the majority of cube decks whose threats are creatures, so maindecking them would cost toughness bodies. Sideboarded at 2 each - the declared coverage concession for noncreature permanents. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.04 adj [MV 2.78 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand  61.5%  prod  64.7%  gap  -3.2pp  [OK]
  U  demand  38.5%  prod  52.9%  gap -14.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Base = cube mainboard only
        all 40 mainboard + 10 sideboard cards matched by exact name in the working pool; basics are format-supplied
[PASS] Commons/uncommons max 2 copies
        no common or uncommon exceeds 2 copies across mainboard + sideboard combined
[PASS] Rares/mythics max 1 copy
        Quantum Riddler, Ouroboroid, Bioengineered Future, Loading Zone, Terrasymbiosis, Breeding Pool - 1 copy each
[PASS] Max 6 rares/mythics total (main + side)
        exactly 6 of 6 used, all in the mainboard; 0 in the sideboard. An earlier draft spent only 4 and then cited the budget as the reason for excluding Quantum Riddler and Terrasymbiosis - both are now in the deck
[PASS] Colour identity within G/U
        effective_cost.best_mode returned a usable non-None mode for every nonland card; no off-normal modes needed
[PASS] Basic lands unrestricted
        8 Forest, 6 Island - format-supplied, exempt from copy limits
```