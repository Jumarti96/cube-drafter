---
deck_name: "ur-entry-ping-tempo"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UR"
format: "40-card"
built_at: "2026-08-04T04:34:54Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
 5x Island                    
 9x Mountain                  
 1x Command Bridge            any colour, enters tapped
 2x Molten Tributary          UR dual, enters tapped
```

### CREATURES (14)

```
CMC  Card                      Qty  Color  Role                                                    Rar
  1  Kavaron Harrier           x2   R      Enabler — recurring artifact entry each combat          U
  3  Sinister Cryologist       x2   U      Enabler — 1-mana warp, ETB -3/-0                        C
  3  Weftstalker Ardent        x2   R      Payoff — ETB ping engine                                U
  4  Red Tiger Mechan          x2   R      Enabler — warp haste artifact                           C
  4  Starfield Vocalist        x1   U      Payoff — ETB trigger doubler                            R
  4  Tannuk, Steadfast Second  x1   R      Engine — blanket haste granter                          M
  5  Nova Hellkite             x1   R      Payoff — evasive haste finisher                         R
  5  Starbreach Whale          x1   U      Engine — evasive body + surveil 2, warp {1}{U}          C
  6  Anticausal Vestige        x1   C      Engine — LTB draw + free permanent                      R
  6  Mechanozoa                x1   U      Engine — warp 5/5, ETB tap+stun                         C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                      Qty  Color  Role                                                    Rar
  1  Plasma Bolt               x2   R      Interaction — burn, Void 3 dmg                          C
  2  Invasive Maneuvers        x2   R      Interaction — 3 dmg                                     U
  3  Lithobraking              x2   R      Interaction — instant-speed 2-dmg sweep + Lander entry  U
  4  Orbital Plunge            x1   R      Interaction — 6 dmg + Lander entry                      C
```

### OTHER SPELLS (2)

```
CMC  Card                      Qty  Color  Role                                                    Rar
  2  Cryogen Relic             x2   U      Engine — artifact, draws on enter and leave             C
```

## SIDEBOARD (10)

```
Card                      Qty  Color  Role / When to board in
Annul                     x2   U      Artifact/enchantment counter — Against the cube's 74 artifacts and 16 enchantments, on the stack — Spacecraft/Station decks, Weapons Manufacturing, Banishing Light, Tractor Beam [U]
Drill Too Deep            x2   R      Destroy a resolved artifact — The only on-colour answer to an artifact that has already resolved; comes in whenever the opponent's plan hangs on a Spacecraft, an Equipment or a Planet [C]
Cut Propulsion            x2   R      Big-creature removal — Against 5+ power ground threats and any flier (doubled damage vs flying), where the mainboard's 6-damage ceiling is one copy [U]
Dauntless Scrapbot        x2   C      Graveyard exile — Against the cube's 31 graveyard-interaction cards — Reanimator, Xu-Ifit, Scrounge for Eternity, Chorale of the Void. Its body plus its Lander are two entries, so boarding it costs no clock. [U]
Unravel                   x2   U      Hard counter with a draw rider — Against warp, kicker and cost-reduction decks, where 'if the amount of mana spent to cast that spell was less than its mana value, you draw a card' is live [U]
```

## ANALYSIS

### DECK IDENTITY

U/R warp tempo that turns the battlefield-entry itself into the win condition. Weftstalker Ardent — 'Whenever another creature or artifact you control enters, this creature deals 1 damage to each opponent' — converts every body the deck deploys into uninteractable reach damage that no blocker stops, and Warp ('cast for its warp cost, exile at the beginning of the next end step, then cast it from exile on a later turn') makes 11 of the 23 nonland copies enter the battlefield twice from one card. Kavaron Harrier turns that from a finite resource into a recurring one, manufacturing a fresh artifact entry every combat for {2}. Starfield Vocalist doubles every entry-caused trigger when it lands, and Tannuk, Steadfast Second grants the whole board haste so each entry is also a combat hit; cheap burn and an instant-speed Lithobraking sweep keep the ground clear while the pings accumulate.

### HOW THE ENGINE ACTUALLY MATHS OUT

Warp is not a discount mechanic here — it is an **entry-count multiplier**. The reminder text is "You may cast this card from your hand for its warp cost. Exile this creature at the beginning of the next end step, then you may cast it from exile on a later turn." One card therefore produces two battlefield entries, and Weftstalker Ardent charges the opponent for each one.

Damage per entry, by board state:

| Board | Damage per creature/artifact entering |
|---|---|
| 1 Weftstalker Ardent | 1 |
| 2 Weftstalker Ardent | 2 (each Ardent sees the other's entry too) |
| 1 Ardent + Starfield Vocalist | 2 |
| 2 Ardent + Starfield Vocalist | 4 |

Starfield Vocalist reads "If a permanent entering the battlefield causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time." Two consequences are easy to get wrong and are worth stating plainly:

- It **does** double Weftstalker Ardent's ping, Nova Hellkite's ETB damage, Sinister Cryologist's -3/-0, Mechanozoa's tap+stun, Starbreach Whale's surveil, and the *enters* half of Cryogen Relic.
- It **does not** double Anticausal Vestige's leave trigger, nor the *leaves* half of Cryogen Relic. Those are leave-the-battlefield events; nothing enters to cause them.

### THE RECURRING-ENTRY PROBLEM, AND KAVARON HARRIER

Warp gives each card a second entry, but two is still a finite number: at 11 warp copies the deck has a hard ceiling on scheduled entries. Kavaron Harrier is the only card in the pool that breaks that ceiling — "Whenever this creature attacks, you may pay {2}. If you do, create a 2/2 colorless Robot artifact creature token that's tapped and attacking. Sacrifice that token at end of combat." That is one artifact entry **every combat, forever**, for mana rather than cards. Three things fall out of one activation:

1. The token entering is an Ardent trigger (2 damage with Vocalist).
2. The token attacks as a 2/2 the turn it is made.
3. It is sacrificed at end of combat — a nonland permanent leaving the battlefield, which switches Plasma Bolt's Void clause on for the rest of the turn.

### VOID IS FREE HERE

Three red cards in this cube carry a `Void —` clause and one of them is mainboard: Plasma Bolt, "deals 2 damage to any target. Void — deals 3 damage instead if a nonland permanent left the battlefield this turn or a spell was warped this turn." This deck satisfies that condition on almost every turn it does anything: 11 of 23 nonland copies are warp cards, every warp body exiles at end step, Kavaron Harrier sacrifices a token each combat, Cryogen Relic sacrifices itself, and Lithobraking sacrifices an artifact. Plasma Bolt is priced as a 3-damage one-mana burn spell.

### WHY 17 LANDS AND NOT 18

`deck_audit.land_target` disagrees with itself here, and correctly so. Fed the deck's **printed** average mana value of 3.13 it returns 18; fed the **warp-effective** 2.087 it returns 16. Neither is wrong — the deck's real curve depends on whether a given copy is being warped or hard-cast, and it does both across a game. 17 is the midpoint and sits within 1 of each. The same split explains both curve WARNs on the structural report: read at printed cost the deck looks top-heavy, read at warp cost it is 8 one-drops and 8 two-drops.

### THE LITHOBRAKING CAVEAT

Lithobraking ("Create a Lander token. Then you may sacrifice an artifact. When you do, Lithobraking deals 2 damage to each creature") is close to one-sided in this deck but not actually one-sided: 12 of the 14 mainboard creature copies have toughness 3 or more and survive, but **Kavaron Harrier is a 2/1** and dies, as does the Robot token it makes. Because the sacrifice is optional and the card is an instant, the Lander half can be taken alone when the sweep is not wanted — but do not board it in on autopilot alongside a Harrier-heavy draw.

### MATCHUP NOTE

The deck concedes three of the five threat classes in the mainboard (noncreature permanents, stack, graveyard) in exchange for entry density. In a cube that is 30% artifacts by card count, the artifact answers really do matter, which is why four of the ten sideboard slots (Annul x2, Drill Too Deep x2) split between countering the spell and destroying the resolved permanent. Against non-artifact creature decks, both pairs come out for Cut Propulsion x2 and Dauntless Scrapbot x2.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Tempo):  [WARN]
  MV distribution (23 nonland):  1:4  2:4  3:6  4:5  5:2  6:2
  WARN  MV 2 share: share 17% below band minimum 20%
  WARN  MV 4+ share: share 39% above band maximum 30%
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5: Mechanozoa@0.8, Kavaron Harrier@0.6, Kavaron Harrier@0.6) → p=0.82 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.7: Anticausal Vestige@0.7) → p=0.91 (need ≥ 0.75)
  PASS  engine: 6 copies (effective 5.5: Mechanozoa@0.8, Anticausal Vestige@0.7) → p=0.85 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 56%  T2 87%  T3 98%
Coverage:  [PASS]
  OK        wide_boards: Lithobraking, Orbital Plunge
  OK        single_large_threat: Orbital Plunge, Mechanozoa, Invasive Maneuvers, Nova Hellkite
  CONCEDED  noncreature_permanents: The U/R mainboard has no artifact or enchantment answer. Annul x2 (counters the spell) and Drill Too Deep x2 (destroys a resolved artifact) cover the cube's 74 artifacts and 16 enchantments from the sideboard; maindecking them would cost an entry body and Annul is a dead card against the cube's creature decks.
  CONCEDED  stack: No mainboard counterspell. The deck is proactive and wants its mana deployed on its own turn; holding up Unravel costs an entry that turn, which is one to two damage off the clock. Unravel x2 is in the sideboard.
  CONCEDED  graveyard: No mainboard graveyard hate. The cube has 31 graveyard-interaction cards but only a minority are recursion engines fast enough to outrace a turn-6 clock. Dauntless Scrapbot x2 (colorless, 'exile each opponent's graveyard') is in the sideboard and is itself two artifact/creature entries, so boarding it costs no clock.
```

- curve WARN (MV 2 share 17% below the 20% floor; MV 4+ share 39% above the 30% ceiling): the check reads printed mana value. Recomputed at warp costs, the curve is MV1: 8 (Weftstalker Ardent x2, Kavaron Harrier x2, Sinister Cryologist x2, Plasma Bolt x2), MV2: 8 (Starfield Vocalist, Starbreach Whale, Cryogen Relic x2, Red Tiger Mechan x2, Invasive Maneuvers x2), MV3: 4 (Nova Hellkite, Mechanozoa, Lithobraking x2), MV4: 3 (Tannuk, Anticausal Vestige, Orbital Plunge) — 48 mana over 23 copies = 2.087 avg. MV 2 share becomes 35% and MV 4+ share becomes 13%, both inside the Tempo bands. Accepted.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Anticausal Vestige's leave trigger — 'you may put a permanent card with mana value less than or equal to the number of lands you control from your hand onto the battlefield tapped' — scales directly with surplus lands. Kavaron Harrier's 'you may pay {2}' every combat is a repeatable mana sink that converts flood into an artifact entry and 2 attacking power. Cryogen Relic's '{1}{U}, Sacrifice this artifact' turns spare mana into a stun plus its leave-trigger draw. Mechanozoa {4}{U}{U} and Anticausal Vestige {6} are real hard-cast sinks, and every warp card sitting in exile is a second spell to spend flood mana on. |
| screw | mitigation | 20 of the 23 nonland copies deploy for 3 mana or less at the cost the deck actually pays — only Tannuk, Anticausal Vestige and Orbital Plunge sit at 4. The one-mana plays are Weftstalker Ardent (warp {R}), Sinister Cryologist (warp {U}), Kavaron Harrier ({R}) and Plasma Bolt ({R}), so two-land hands still curve out. 88% of simulated hands reach 3 lands by turn 3 (goldfish turn3_land_rate 0.881), and 84% of hands are keepable. |
| decapitation | mitigation | Weftstalker Ardent is the reach engine at 2 copies, the legal maximum for an uncommon. When both are answered the deck still kills through combat: Nova Hellkite (flying, haste, 4/5), Starbreach Whale (flying 3/5), Mechanozoa (5/5 that stuns a blocker on entry), Kavaron Harrier x2 (a fresh 2/2 attacker every combat) and Tannuk's blanket haste grant. The thesis was revised so Starfield Vocalist is a multiplier, not a required piece — losing it lengthens the clock rather than ending it. |
| gas-out | mitigation | Cards: Net-Positive / Self-Replacing copies in this list: Cryogen Relic x2 (draws on entering AND on leaving = 2 cards each), Anticausal Vestige x1 (leave trigger draws a card and free-drops a permanent), Starbreach Whale x1 (surveil 2) = 4 of 23 nonland copies. On top of that, 11 of 23 copies are physically two plays from one card via warp, and Kavaron Harrier x2 generates a new artifact token every combat from mana alone, so the deck keeps producing entries after the hand is empty. |
| raced | mitigation | 11 of the 23 nonland copies interact with an attacking creature: Plasma Bolt x2 (2 damage, 3 with Void live), Invasive Maneuvers x2 (3 damage), Orbital Plunge x1 (6 damage), Lithobraking x2 (2 damage to each creature; it kills 12 of 14 own creature copies safely, Kavaron Harrier x2 at 2/1 being the exception, and the sacrifice is optional so the pilot picks the timing), Sinister Cryologist x2 (ETB -3/-0), Mechanozoa x1 (ETB tap + stun counter, buying two untap steps), Nova Hellkite x1 (ETB 1 damage). Against the cube's 5 sweepers, warp cards already exiled can be re-cast to rebuild — at full printed cost, not free. |
| disruption-fizzle | mitigation | There is no critical turn — damage accrues one entry at a time rather than in a single burst, so a counterspell or a removal spell delays the clock instead of breaking it. A warp body answered by removal has already fired its Ardent ping on entry, and cost 1-3 mana against the opponent's full-priced answer. The deck holds no mana up, so it never loses a turn to a failed critical action; that is the stated cost of conceding the stack class. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Pinnacle Emissary | 'Whenever you cast an artifact spell, create a 1/1 Drone' is live on 6 of 23 nonland cards (10 casts counting warp re-casts) — too thin to spend one of the six rare/mythic slots on; its real value is a one-mana 3/3 body, which commons already supply. |
| Quantum Riddler | 'As long as you have one or fewer cards in hand, if you would draw one or more cards, you draw that many cards plus one' rewards an empty hand, which fights a warp deck that wants cards in hand to warp; also a mythic against a 6-card cap. |
| Weapons Manufacturing | Its 'create a Munitions token' clause IS an artifact entering, so it would double the Ardent ping on the 6 of 23 nontoken artifact copies — but it converts to damage only while Weftstalker Ardent is already on the battlefield, and Ardent is 2 of 23 copies (P(seen by turn 6) = 0.4867). Kavaron Harrier does the same job without the dependency: it is itself an artifact entry and its token works with or without Ardent. Separately, the Munitions damage clause fires only 'When this token leaves the battlefield' and this list has 2 of 23 sacrifice outlets (Lithobraking x2) that can eat an artifact token. |
| Mental Modulation | 'Tap target artifact or creature. Draw a card.' is a tempo cantrip, not removal; the shape judge flagged it and cutting it lets all 7 interaction slots be hard removal or a sweep. |
| Memorial Team Leader | 'During your turn, other creatures you control get +1/+0' needs a board to convert, and the slots went to Kavaron Harrier x2 and Lithobraking x2, both of which produce an artifact entry the anthem does not. |
| Bombard | 'deals 4 damage to target creature' misses the 31 of 139 pool creatures with toughness 5 or more; Orbital Plunge deals 6 for one more mana and its Lander token is an extra artifact entry. |
| Possibility Technician | 'Whenever this creature or another Kavu you control enters, exile the top card of your library' — Kavu in this list: 3 of 23 (Tannuk, Memorial Team Leader x2). Too thin for a rare slot. |
| Full Bore | '+3/+2 until end of turn ... trample and haste if cast for its warp cost' is a one-shot combat pump that adds nothing to the entry-ping engine; the shape judge flagged it as the softest keystone. |
| Cosmogoyf | {B}{G} — off-colour for U/R, and the cube has zero U/B, U/G, R/B or R/G untapped duals, so running it would mean a two-colour splash on the cube's thinnest fixing. |
| Starwinder | Warp {2}{U}{U} for a 7/7 whose draw needs combat damage to connect; a seventh rare against the 6-card cap and above this deck's warp-effective curve of 2.09. |
| Mm'menon, the Right Hand | 'You may cast artifact spells from the top of your library' — artifacts in this list are 6 of 23, so the top-of-library clause whiffs most turns; rare-capped. |
| Bygone Colossus | Warp {3} for a 9/9 with no ETB and no LTB text — it contributes one Ardent ping and a Void switch, the same as a two-mana artifact, for three mana. |
| Mechan Assembler | 'Whenever another artifact you control enters, create a 2/2 Robot. This ability triggers only once each turn' — the once-per-turn clamp means Starfield Vocalist cannot double it, and it costs {4}{U} to start. |
| Specimen Freighter | {5}{U} for a bounce ETB is two mana above the deck's warp-effective curve; Mechanozoa does the same job at warp {2}{U}. |
| Nebula Dragon | 'When this creature enters, it deals 3 damage to any target' at {6}{R} with no warp cost — seven mana for one entry. |
| Oreplate Pangolin | 'Whenever another artifact you control enters, you may pay {1}' — artifacts are 6 of 23 here and the {1} tax competes with deploying another entry, which is what actually deals damage. |
| Codecracker Hound | Warp {2}{U} equals its printed cost, so warping it buys a second ETB but no tempo; Cryogen Relic draws on both entering AND leaving for the same two mana. |
| Uthros Scanship | Draw-two-discard-one on a {3}{U} Spacecraft is card-neutral-plus-one at four mana; the deck's Cards: Net-Positive slots are cheaper. |
| Devastating Onslaught | {X}{X}{R} to copy a creature is a mythic mana sink that wants a big board first; this deck's bodies are small and it cannot afford X≥3 before turn 7. |
| Kavaron Skywarden | 'Void — put a +1/+1 counter on this creature' at end step grows a 4/5 reach body slowly; {4}{R} with no warp cost is a five-mana entry in a deck whose entries cost one to three. |
| Roving Actuator | Its Void ETB copies 'target instant or sorcery card with mana value 2 or less from your graveyard' — qualifying targets in this list are Plasma Bolt x2, Invasive Maneuvers x2, Mental Modulation x2 = 6 of 23, but all must already be in the graveyard, so it is a turn-5+ card in a turn-6 deck. |
| Cut Propulsion | Sideboard only — 'target creature deals damage to itself equal to its power' is dead against the 0- and 1-power utility creatures a tempo deck faces early, but doubles against fliers. |
| Annul | Sideboard only — 'Counter target artifact or enchantment spell' answers 74 artifacts and 16 enchantments in this cube but is a dead card against its creature decks. |
| Dauntless Scrapbot | Sideboard only — 'exile each opponent's graveyard' answers the cube's 31 graveyard-interaction cards; colorless so it is castable in any matchup, but a 3/1 for {3} is below rate on plan. |
| Drill Too Deep | Sideboard — '• Destroy target artifact' is the only on-colour answer to a RESOLVED noncreature permanent in a cube with 74 artifacts; the mainboard concedes that class. |
| Unravel | Sideboard only — 'Counter target spell. If the amount of mana spent to cast that spell was less than its mana value, you draw a card' draws against every warp and cost-reduction deck in the cube, but holding {1}{U}{U} costs an entry on the deck's own turn. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 18 recommended  [PASS]
Avg CMC:     3.13   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.51 adj [MV 3.13 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  R  demand  68.0%  prod  70.6%  gap  -2.6pp  [OK]
  U  demand  32.0%  prod  47.1%  gap -15.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons and uncommons max 2 copies — No card exceeds its rarity multiplier; verified by cube_search.get_max_copies
[PASS] Rares and mythics max 1 copy — All four rare/mythic cards are singletons
[PASS] Max 6 rare/mythic cards across mainboard + sideboard — 4 used: Starfield Vocalist (R), Nova Hellkite (R), Anticausal Vestige (R), Tannuk, Steadfast Second (M). Sideboard uses zero; 2 slots deliberately left unused.
[PASS] All cards from the eoe cube mainboard — Exact-name match against the working pool; basics are format-supplied
[PASS] 40-card mainboard, 10-card sideboard — 40 / 10
```
