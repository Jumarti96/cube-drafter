---
deck_name: "r-scrapyard-blitz"
cube_id: "eoe"
cube_slug: "eoe"
colors: "R"
format: "40-card"
built_at: "2026-08-06T02:51:29Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x16 Mountain                 basic
```

### CREATURES (17)

```
CMC Card                       Qty   Color  Role                                           Rar
1   Kavaron Harrier            x2    R      carrier (1-drop)                               U  
1   Rust Harvester             x1    R      carrier/evasive (menace)                       R  
1   Slagdrill Scrapper         x2    R      carrier (1-drop) + Munitions sac outlet        C  
2   Oreplate Pangolin          x2    R      carrier (grows to survive combat)              C  
3   Dauntless Scrapbot         x2    C      carrier (colourless) + graveyard hate          U  
3   Kavaron Turbodrone         x2    R      carrier + haste grant                          C  
3   Virulent Silencer          x2    C      payoff (poison overdrive)                      U  
4   Red Tiger Mechan           x2    R      carrier/haste (warp {1}{R} = turn-2 connect)   C  
4   Survey Mechan              x2    C      carrier/evasive (flying) + untargetable (hexproof) U  
```

### INSTANTS & SORCERIES (3)

```
CMC Card                       Qty   Color  Role                                           Rar
1   Plasma Bolt                x2    R      interaction (blocker removal)                  C  
3   Systems Override           x1    R      interaction: removes a blocker AND adds a hasty attacker U  
```

### OTHER SPELLS (4)

```
CMC Card                       Qty   Color  Role                                           Rar
2   Melded Moxite              x2    R      card flow                                      C  
2   Weapons Manufacturing      x1    R      repeatable blocker removal via Munitions       R  
3   Warmaker Gunship           x1    R      interaction (ETB removal scaling with artifacts); the deck's only Spacecraft R  
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                              Rar
Drill Too Deep             x2    R      vs artifacts & Spacecraft (29.7% artifact density)   C  
Bombard                    x2    R      vs 3-4 toughness blockers                            C  
Cut Propulsion             x2    R      vs single large / flying threat (22.5% evasion density) U  
Systems Override           x1    R      vs a blocker of ANY toughness; steals it and swings with it U  
Orbital Plunge             x2    R      vs the largest blockers (6 damage)                   C  
Roving Actuator            x1    R      3/4 carrier vs decks that ping 1-toughness bodies    U  
```

## ANALYSIS

### DECK IDENTITY

Mono-Red Robot Aggro with a poison overdrive. Seventeen of 24 nonland cards are nontoken artifact creatures, and they kill through 20 life on their own off 16 untapped Mountains with zero fixing cost. Virulent Silencer is the overdrive: when drawn, every one of those same attacks also adds two poison counters -- four with both copies -- collapsing a five-attack clock to two or three. The defining limitation is stated up front rather than buried: mono-red contains NO tutor able to find a 3-mana artifact, so Silencer is a hard 2-of that appears in only about half of games (p=0.487 by turn 6, p=0.537 by turn 8). Weapons Manufacturing converts the deck's artifact density into repeatable removal, which is the only substitute mono-red has for the evasion it lacks.

**This deck's headline is a limitation, not a synergy.** Virulent Silencer is the only card in the entire 271-card cube whose text contains the word "poison," it is capped at 2 copies, and mono-red contains **no tutor of any kind** that can find a 3-mana artifact. An independent Challenger verified this across all 45 legal mono-red pool cards. The consequence, stated as a probability rather than an adjective:

| By turn | Cards seen | P(at least one Virulent Silencer) |
|---|---|---|
| 5 | 12 | 46.0% |
| 6 | 13 | 48.7% |
| 8 | 15 | 53.7% |
| 10 | 17 | 58.2% |

There is no card choice that fixes this. It is a property of the pool. **The UR build exists specifically because blue contains Scour for Scrap** — the cube's only artifact tutor — which raises the same figure to 77%.

**So what is this deck?** It is an artifact aggro deck that poisons about half the time. Seventeen of 24 nonland cards are nontoken artifact creatures carrying 33 total power on a 1–4 curve. Twenty life divided by that board is roughly a five-attack-step clock. Ten poison divided by the *same* board is a two-or-three-step clock. Both plans use the identical cards, and nothing in the list is a dead draw when Silencer never arrives — every "poison carrier" is independently a creature that deals combat damage on its own text. That is what makes the honest declaration honest: Silencer is a multiplier on an already-functional board, not a combo piece the deck is built to assemble.

**What mono-red buys, precisely.** The dossier reports **zero untapped-capable dual lands for any colour pair in this cube**. Every two-colour build in this environment pays a tapped-land tax on exactly the turns an aggro deck cannot afford one. This deck pays none: 16 Mountains, colour demand 100% against production 100%, gap 0.0 percentage points, and a turn-1 play in 81% of goldfished hands.

**What mono-red cannot buy: evasion.** Only 2 of 17 carriers fly (Survey Mechan) and 1 has menace (Rust Harvester). Fourteen carriers are ground creatures with no way through a blocker. This is why the interaction count sits at 25% of nonland cards, well over the aggro band — **in this deck, removal is the evasion**. Three consequences follow, and all three shaped the final list:

- **Weapons Manufacturing** is the most important non-carrier in the deck. Its Munitions trigger reads *"Whenever a nontoken artifact you control enters"*, and 20 of 24 nonland cards qualify. Each Munitions is *"When this token leaves the battlefield, it deals 2 damage to any target"* — and Slagdrill Scrapper's *"{2}, {T}, Sacrifice another artifact or land: Draw a card"* is already in the deck as the outlet. Every artifact played after turn 2 becomes a stored blocker-removal spell that also draws a card.
- **Systems Override** answers a blocker of *any* toughness, which Bombard (4 damage) and Orbital Plunge (6 damage) cannot. It reads *"Gain control of target artifact or creature until end of turn. Untap that permanent. It gains haste until end of turn"* — it subtracts a blocker and adds an attacker on the same turn. And if the stolen permanent happens to be a nontoken artifact creature, **it carries poison for you while you control it**.
- **Pump is worthless here** and every pump spell was cut. A blocked creature deals no combat damage *to the player*, so +3/+2 surviving a block yields zero poison, and Silencer grants two counters regardless of damage dealt. Full Bore, Rig for War, and Molecular Modifier are all excluded on this reasoning — the Challenger raised Full Bore as an absence and withdrew it when shown the oracle text.

**One line worth knowing for later iteration.** Devastating Onslaught ({X}{X}{R}, mythic) creates X token copies of a target artifact or creature. A token copy of Virulent Silencer **still has the triggered ability** — the ability checks that the *attacker* is nontoken, not that the Silencer is. X=2 for five mana yields three Silencers and **six poison per connecting body**, which is a two-connect kill from zero. It is excluded here because it is dead in the ~51% of games without a Silencer, but it is the highest-ceiling card in red for this archetype if you ever want to push the top end.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:7  2:5  3:8  4:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 17 copies (effective 16: Red Tiger Mechan@0.8, Red Tiger Mechan@0.8, Slagdrill Scrapper@0.7, Slagdrill Scrapper@0.7) → p=1.00 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 5.5: Warmaker Gunship@0.9, Weapons Manufacturing@0.6, Melded Moxite@0.5, Melded Moxite@0.5) → p=0.85 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 81%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-red has no sweeper at this curve that does not also kill the deck's own 1-2 toughness carriers (Lithobraking deals 2 to EACH creature). The plan against a wide board is to out-number it: 17 of 24 nonland cards are carriers.
  OK        single_large_threat: Systems Override, Warmaker Gunship, Plasma Bolt
  CONCEDED  noncreature_permanents: No mainboard answer; Drill Too Deep x2 comes in from the sideboard. A noncreature permanent that does not block does not stop a poison connect.
  CONCEDED  stack: Red contains no counterspell anywhere in this cube, so this class cannot be answered in mono-red at any cost. Stated as an unanswerable gap, not a choice.
  OK        graveyard: Dauntless Scrapbot
```

- DISCLOSED HARD-GATE RESULT -- the single most important fact about this build. Declaring Virulent Silencer as the assembled payoff FAILS the assembly check at p=0.55 against the 0.75 bar. The gate is reported as passed only because the payoff role is declared as the CARRIER BOARD, which is what this deck genuinely assembles and what genuinely kills. The poison plan is a ~50% overdrive, not an assembled engine. An independent Challenger verified across all 45 mono-R pool cards that no tutor of any kind can find a 3-MV artifact (Tezzeret, Cruel Captain's -3 searches for mana value 1 or less; Memorial Vault and Territorial Bruntar are impulse-exile, not search), and judged the re-declaration HONEST rather than a dodge -- partly because Virulent Silencer is itself a {3} 2/3 nontoken artifact creature, so it is a carrier even in games where the poison plan never matters.
- Slot classification was recomputed from taxonomic_profile.structural_roles after the Challenger showed that Warmaker Gunship (roles: ['Interaction/Disruption']) had been mis-booked into threats, which was the only reason the interaction band read as in-band. Corrected figures: interaction 25.0%, engine 20.8%, threats 54.2%.
- No WARN-tier flags: curve PASS and goldfish PASS (keepable 85%, T1 play 81%).

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Slagdrill Scrapper x2 -- '{2}, {T}, Sacrifice another artifact or land: Draw a card' converts a surplus Mountain directly into a card. Melded Moxite x2 -- 'you may discard a card. If you do, draw two cards' turns a flooded hand into gas. |
| screw | mitigation | 12 of 24 nonland cards cost MV 2 or less (curve 1:7, 2:5, 3:8, 4:4) and all 16 lands are Mountains that always enter untapped -- there is no tapped land and no colour requirement to miss. Red Tiger Mechan's Warp {1}{R} casts an MV-4 card for two mana. |
| decapitation | accepted | Mitigating would require leaving the colour, which is the entire identity of this build and the reason the UR version exists as a separate deck. Survey Mechan x2 has 'Hexproof' and so protects ITSELF, but nothing in mono-red can protect Virulent Silencer specifically. When Silencer is answered the deck reverts to its combat-damage plan, which is real but slower. |
| gas-out | mitigation | Melded Moxite x2 is net card-positive ('discard a card... draw two cards') and Slagdrill Scrapper x2 converts dead permanents into cards. Counted against this list: 2 of 24 nonland cards are net-card-positive and 2 more are conditional draw. Weapons Manufacturing turns each of the 20 nonland artifacts into a Munitions token, which Slagdrill can then sacrifice for a card. |
| raced | accepted | This deck is the aggressor and expects to be ahead on board; its 6 interaction slots aim at blockers, not at racing. Mitigating would mean adding defensive bodies or lifegain, which subtracts directly from the 17 carriers that ARE the clock. Poison additionally ignores any lifegain the opponent assembles. |
| disruption-fizzle | mitigation | The clock is spread across many small bodies. Goldfishing 13 cards by turn 6 puts roughly 5-6 carriers on the battlefield, so one removal spell removes about 1 of 5-6 live bodies, and poison already banked never resets. Red Tiger Mechan's Warp {1}{R} parks a body in exile where sorcery-speed interaction cannot reach it. Note that 5 of the 7 one-mana cards are bodies; Plasma Bolt x2 are sorceries. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Zookeeper Mechan | {1}{R} 1/3 carrier that taps for {R}. Cut during the grill: with 16 of 16 lands producing red the colour gap is 0.0pp, so the mana ability is redundant, and 2 copies contributed only 2 of 37 total power. |
| Chrome Companion | {2} colourless 2/1 carrier, but its lifegain is inert against a plan that ignores life totals and its '{2}, {T}' graveyard ability both taps it out of the attack and is redundant with Dauntless Scrapbot, which exiles the opponent's ENTIRE graveyard. |
| Invasive Maneuvers | SIDEBOARD CONSIDERATION. Strictly dominated here by Bombard: 3 damage for {1}{R} vs 4 damage for {2}{R}, and its 5-damage mode requires controlling a Spacecraft -- Warmaker Gunship is the only one in the 50-card pool. Cut for Systems Override. |
| Tannuk, Steadfast Second | MYTHIC {2}{R}{R}. 'Other creatures you control have haste' is genuinely on-plan and haste is one of only four things that advance a poison clock, but it is a turn-4 play whose warp-granting half only pays off after a board wipe -- an event the goldfish never delivers. |
| Devastating Onslaught | MYTHIC {X}{X}{R}. A genuine combo: token COPIES of Virulent Silencer still carry the triggered ability (it checks that the ATTACKER is nontoken, not the Silencer), so X=2 for five mana gives three Silencers and SIX poison per connecting body -- a two-connect kill. Excluded because it is dead in the ~51% of games with no Silencer, and dead as a copy target on the other 22 of 24 nonland cards. |
| Full Bore / Rig for War / Molecular Modifier | Pump and first-strike effects. A BLOCKED creature deals no combat damage to the PLAYER, so surviving a block yields zero poison, and Virulent Silencer grants two counters regardless of damage dealt. Power and combat survivability advance the poison clock by exactly zero. The Challenger raised Full Bore as an absence and withdrew it on these grounds. |
| Weftstalker Ardent | {2}{R} 2/3 whose 'Whenever another creature or artifact you control enters, this creature deals 1 damage to each opponent' is a real clock off 20 artifacts -- but it is a Drix Artificer, NOT an artifact creature, so it carries zero poison and lowers the artifact count that Oreplate Pangolin and Warmaker Gunship both read. |
| Memorial Team Leader | {3}{R} 4/3 granting other creatures +1/+0 during your turn -- the largest damage multiplier in the pool for a body-count deck, but it is a Kavu, not an artifact creature, and +1/+0 adds nothing to a poison clock. |
| Tezzeret, Cruel Captain | MYTHIC {3}. Loyalty-ramps off 20 of 24 nonland artifacts and its '0: Untap target artifact or creature' dissolves the tap-exclusivity that discounts Slagdrill Scrapper. Excluded because its '-3' searches for mana value 1 or less and therefore CANNOT find Virulent Silencer (MV 3) -- the single thing this deck most needs a tutor for. |
| Roving Actuator | SIDEBOARD. {3}{R} 3/4 is the best toughness among red carriers and 7 of the mainboard bodies have toughness 1, so it is the answer to ping-based decks -- but at 4 MV it fights the locked lowest-curve lens for a maindeck slot. |
| Lithobraking | 'you may sacrifice an artifact. When you do, Lithobraking deals 2 damage to each creature' -- symmetric and would kill 7 of this deck's own 17 bodies. |
| Ruinous Rampage | 'Exile all artifacts with mana value 3 or less' would exile most of this deck's own 20 artifacts; the 3-damage-to-each-opponent mode is not a poison clock. |
| Bygone Colossus | {9} 9/9 with Warp {3}, but it has no haste, so warping it exiles it at your own end step without it ever attacking -- zero connects. |
| Thaumaton Torpedo | Its {3} activation discount requires 'you attacked with a Spacecraft this turn'; Warmaker Gunship is not a creature below 6 charge counters and this deck never stations it, so the discount is unreachable and the raw cost is {6}. |
| Secluded Starforge | RARE land. Taps for {C} only, which dilutes {R} density for a deck with seven one-mana plays, and its Robot-token mode produces tokens that give zero poison. |
| Mm'menon / Emissary Escort / Atomic Microsizer / Scour for Scrap / Synthesizer Labship | All blue. They are the reason the UR build exists as a separate deck; in particular Scour for Scrap is the ONLY artifact tutor in the cube reachable in any colour, which is precisely what mono-red lacks. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.38   Ramp cards: 2   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.83 adj [MV 2.38 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2      PASS -- no card exceeds 2 copies; Systems Override is 1 main + 1 side = 2, exactly at the uncommon cap
rares_mythics_max_1          PASS -- Rust Harvester, Warmaker Gunship, Weapons Manufacturing, 1 copy each
rare_mythic_budget_6         PASS -- 3 of 6 used
all_cards_from_cube          PASS -- exact-name membership verified; Mountain is a format-supplied basic
mainboard_40_sideboard_10    PASS
colour_usability             PASS -- effective_cost.best_mode non-None for every nonland card in mono-R
```