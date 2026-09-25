---
deck_name: "ur-robot-swarm"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UR"
format: "40-card"
built_at: "2026-08-06T02:30:38Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x8  Island                   basic
  x2  Molten Tributary         ({T}: Add {U} or {R}.) This land enters tapped.
  x6  Mountain                 basic
```

### CREATURES (14)

```
CMC Card                       Qty   Color  Role                                           Rar
1   Kavaron Harrier            x2    R      carrier (1-drop)                               U  
1   Rust Harvester             x1    R      carrier/evasive (menace)                       R  
2   Mechan Navigator           x2    U      carrier + card selection                       U  
2   Oreplate Pangolin          x2    R      carrier (grows to survive combat)              C  
2   Steelswarm Operator        x2    U      carrier/evasive (flying) + artifact ramp       U  
3   Dauntless Scrapbot         x2    C      carrier (colourless) + graveyard hate          U  
3   Virulent Silencer          x2    C      payoff                                         U  
4   Survey Mechan              x1    C      carrier/evasive (flying) + untargetable (hexproof) U  
```

### INSTANTS & SORCERIES (5)

```
CMC Card                       Qty   Color  Role                                           Rar
1   Plasma Bolt                x2    R      interaction (blocker removal)                  C  
3   Cut Propulsion             x1    R      interaction (large / flying blocker)           U  
4   Scour for Scrap            x2    U      payoff tutor                                   U  
```

### OTHER SPELLS (5)

```
CMC Card                       Qty   Color  Role                                           Rar
1   Atomic Microsizer          x2    U      evasion engine (manufactured unblockable)      U  
1   Synthesizer Labship        x1    U      evasion engine (animates a noncreature artifact into a flying carrier) R  
2   Cryogen Relic              x2    U      card advantage + Labship animation target      C  
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                              Rar
Annul                      x1    U      vs artifact/enchantment spells on the stack          U  
Drill Too Deep             x2    R      vs artifacts & Spacecraft (29.7% artifact density)   C  
Illvoi Light Jammer        x2    U      protects a resolved Silencer at instant speed        C  
Invasive Maneuvers         x2    R      vs creatures; deals 5 with Synthesizer Labship out   U  
Bombard                    x2    R      vs mid-size blockers                                 C  
Cut Propulsion             x1    R      vs single large / flying threat (22.5% evasion density) U  
```

## ANALYSIS

### DECK IDENTITY

UR Poison Robots. Fourteen nontoken artifact creatures attack every turn and Virulent Silencer converts each of their connects into two poison counters -- four with both copies out -- so three to five connects end the game regardless of the opponent's life total, lifegain, or blockers' size. Atomic Microsizer manufactures an unblockable attacker on demand and Synthesizer Labship animates a noncreature artifact into a 2/2 flier each combat, turning otherwise poison-inert permanents into carriers. Scour for Scrap is the only redundancy the cube offers for its single poison payoff, and red burn exists purely to delete the blocker standing in front of a carrier.

**The whole archetype rests on one card.** Virulent Silencer is the only card in all 271 cube cards whose text contains the word "poison" -- verified by an independent scan during the grill. There is no proliferate, no second toxic source, and no way to raise the count except by connecting. Everything below follows from that.

**The two-copy lever.** Silencer is uncommon, so the pool rules allow 2 copies. That is the single biggest decision in the build:

| Silencers on battlefield | Poison per carrier-connect | Connects needed to kill |
|---|---|---|
| 1 | 2 | 5 |
| 2 | 4 | 3 |

Because the trigger reads "Whenever a nontoken artifact creature you control deals combat damage to a player" -- not "once each turn" -- three carriers connecting in one attack step is three separate triggers. With both Silencers out, a single profitable alpha strike with three carriers is 12 poison, which is lethal from zero.

**Tokens are a trap, and the cube is full of them.** The word "nontoken" disqualifies every token-maker in the pool. Mechan Assembler, Pinnacle Emissary, Wedgelight Rammer, Melded Moxite, Weapons Manufacturing, and even Kavaron Harrier's own attack trigger all produce artifact creature tokens that give **zero** poison. In a cube whose deepest artifact tribe is Robot at 30 members, most of which are token-adjacent, this single word removes a large fraction of the apparently-synergistic cards. Kavaron Harrier is still in the deck -- but for its {R} 2/1 body, and its token is treated purely as a blocker-absorber.

**Damage amount is irrelevant, which changes what "good" means.** Silencer gives two poison whether the carrier hits for 1 or for 9. Three consequences shape the list:
- Atomic Microsizer's drawback is not a drawback. Its text sets the target to "base power and toughness 1/1" -- shrinking your own attacker to 1/1 costs nothing when the payoff ignores power. It is a one-mana unconditional "can't be blocked."
- Survey Mechan, a 1/3, is a **full-rate** carrier. Flying plus hexproof means neither blockers nor targeted removal can stop it, and its low power is free.
- Every pump spell in red -- Rig for War, Full Bore, Molecular Modifier -- is worth exactly zero to the clock, and all were cut. So was Cryoshatter, whose -5/-0 leaves the blocker on the battlefield still blocking.

**Synthesizer Labship converts dead permanents into carriers.** Its 2+ ability makes "one other target artifact you control" a 2/2 artifact creature with flying until end of turn. Pointed at Cryogen Relic or an Atomic Microsizer, it turns a permanent that can never deal combat damage into a flying nontoken artifact creature -- a full poison carrier, every combat, for free. Of this deck's 19 artifacts, 5 are noncreature and would otherwise contribute nothing to the kill. It is also the deck's only Spacecraft, which is what turns on the sideboarded Invasive Maneuvers' "5 damage instead if you control a Spacecraft" clause.

**Why the thesis turn is 8 and not 5.** This is the deck's honest weak point. The cube contains exactly one poison payoff (2-copy cap) and exactly one artifact tutor reachable in U/R -- Scour for Scrap (2-copy cap). The redundancy ceiling is therefore 4 cards in 40, which reaches only 77% to be seen by 15 cards drawn. No card choice fixes this; it is a property of the pool. The list responds by making the turns before the payoff arrives productive: 16 of 24 nonland cards cost 2 or less, so the board is already three or four carriers deep when the Silencer lands, and poison never decays.

**The mana is the real cost of two colours.** The dossier reports zero untapped-capable dual lands for any colour pair in this cube. Molten Tributary is the only free UR dual and it enters tapped, so 14 of the 16 lands are basics. Red's demand is front-loaded (five of the eight one-drops want {R} on turn 1) against six untapped Mountains, which is the tightest constraint in the deck and the main reason Path B exists as a mono-coloured alternative.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:8  2:8  3:5  4:3
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  payoff: 4 copies (effective 3.7: Scour for Scrap@0.85, Scour for Scrap@0.85) → p=0.77 (need ≥ 0.75)
  PASS  enabler: 15 copies (effective 13.5: Steelswarm Operator@0.8, Steelswarm Operator@0.8, Atomic Microsizer@0.7, Atomic Microsizer@0.7, Synthesizer Labship@0.5) → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 80%  T2 98%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in U/R at this curve; Atomic Microsizer's 'That creature can't be blocked this turn' and Synthesizer Labship's flying grant go through a wide board rather than answering it, and poison ignores how much damage is dealt.
  OK        single_large_threat: Cut Propulsion, Plasma Bolt
  CONCEDED  noncreature_permanents: No mainboard answer; a noncreature permanent that does not block does not stop a poison connect. Drill Too Deep x2 is sideboarded in when the opponent's permanents actually interact.
  CONCEDED  stack: Proactive aggro; holding counterspell mana would cost a deployment turn, which is the deck's whole plan. Annul comes in from the sideboard.
  OK        graveyard: Dauntless Scrapbot
```

- No WARN-tier flags: curve PASS and goldfish PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Cryogen Relic x2 -- 'When this artifact enters or leaves the battlefield, draw a card' plus its own '{1}{U}, Sacrifice this artifact' turns surplus mana into 2 cards. Mechan Navigator x2 loots a surplus land away on every attack. Scour for Scrap x2 converts excess mana into the payoff at instant speed. |
| screw | mitigation | 16 of 24 nonland cards cost MV 2 or less (curve 1:8, 2:8, 3:5, 4:3), so a two-land hand still deploys carriers on turns 1-2; 14 of 16 lands are basics that always enter untapped. |
| decapitation | mitigation | Scour for Scrap x2 is an unconditional instant search that replaces an answered Virulent Silencer -- 4 functional payoff copies in 40. Survey Mechan's 'Hexproof' makes one carrier untargetable outright, and sideboard Illvoi Light Jammer x2 has Flash and grants hexproof at instant speed. The 14 carriers also kill by ordinary combat damage if both Silencers are exiled. |
| gas-out | mitigation | Cryogen Relic x2 is the deck's genuine card advantage: 'When this artifact enters or leaves the battlefield, draw a card' yields 2 cards from 1 slot, and its own sacrifice ability fires the leave-half. Counted honestly against this list: 2 of 24 nonland cards are net-card-positive; Mechan Navigator x2 is card SELECTION at net zero and is not claimed as refuel. |
| raced | accepted | The dossier lists 13 lifegain cards and only 5 sweepers (2.0% density). Poison ignores life totals entirely, so this deck cannot be raced on life -- but it CAN be raced on board, and mitigating that would mean adding defensive blockers, which directly subtracts from the carrier count that IS the clock. Every blocker added removes a poison trigger. |
| disruption-fizzle | mitigation | The kill is not a single turn -- poison counters are permanent and never reset, so removal on the critical attack step only delays the count, it does not undo the poison already banked. Atomic Microsizer survives creature removal because it is an Equipment and re-attaches to the next carrier for {2}; Synthesizer Labship is likewise a noncreature permanent. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Chrome Companion | Colourless 2/1 carrier, but its lifegain is inert against a plan that ignores life totals and its graveyard ability is redundant with Dauntless Scrapbot x2, which exiles the opponent's ENTIRE graveyard. Cut for Cryogen Relic and Survey Mechan during the grill. |
| Nanoform Sentinel | {2}{U} 3/2 carrier, but the untap trigger fires only once each turn and needs another permanent worth untapping; it was the weakest carrier by the build's own reliability weighting (0.8). Cut for Synthesizer Labship. |
| Emissary Escort | RARE. {1}{U} 0/4 that 'gets +X/+0, where X is the greatest mana value among other artifacts you control' -- it grants only power, never toughness, so the wrath-resilience it appears to offer is not in the card. Its rare slot was better spent on Synthesizer Labship. |
| Mechan Shieldmate | {1}{U} 3/2 with Defender that attacks only on turns an artifact entered -- a conditional attacker is an unreliable poison carrier, and poison rewards guaranteed connects over big bodies. |
| Slagdrill Scrapper | {R} 1/2 carrier whose '{2}, {T}, Sacrifice another artifact or land: Draw a card' taps it out of the attack; Mechan Navigator fills the card-flow role while still attacking. |
| Kavaron Turbodrone | {2}{R} 2/3 carrier, but its pump ability is 'Activate only as a sorcery' AND taps it, so it cannot both carry poison and pump in the same turn. |
| Zookeeper Mechan | {1}{R} 1/3 carrier that taps for {R}; cut because tapping for mana and attacking are exclusive, and at 8 Island / 6 Mountain the deck did not need the extra red source. |
| Pinnacle Emissary | RARE {1}{U}{R}. Its payoff creates 1/1 Drone TOKENS, and tokens explicitly give ZERO poison under Virulent Silencer. A rare slot for board presence only. |
| Mechan Assembler | {4}{U} creates 2/2 Robot TOKENS -- zero poison carriers -- and sits at 5 MV, off-curve for a deck that wants to be attacking by turn 3. |
| Melded Moxite | '{3}, Sacrifice this artifact: Create a tapped 2/2 colorless Robot artifact creature token' -- a token, so no poison; its loot mode is worse than Cryogen Relic's genuine net card. |
| Weapons Manufacturing | RARE {1}{R}. Munitions are artifact TOKENS with no creature type, so they never carry poison, and 2 damage per trigger is not this deck's clock. |
| Bygone Colossus | {9} 9/9 carrier; warping it for {3} exiles it at the next end step BEFORE it can attack, so the warp line yields zero connects. |
| Rig for War / Full Bore / Molecular Modifier | Pump and first-strike effects. Virulent Silencer grants 'two poison counters' regardless of damage dealt, and a BLOCKED creature deals no damage to the player at all -- so power and combat survivability advance the poison clock by exactly zero. |
| Cryoshatter | {U} Aura giving -5/-0 looks like 1-mana blocker removal, but the blocker REMAINS on the battlefield and still blocks; a blocked carrier connects with nobody and gives no poison. |
| Secluded Starforge | RARE land. Taps for {C} only, which worsens already-THIN UR fixing, and its '{5}, {T}: Create a 2/2 colorless Robot artifact creature token' makes tokens (no poison). |
| Ruinous Rampage | 'Exile all artifacts with mana value 3 or less' is symmetric and would exile 15 of this deck's own 19 artifacts; the 3-damage mode is not a poison clock. |
| Command Bridge | Any-colour fixing, but it enters tapped AND reads 'sacrifice it unless you tap an untapped permanent you control' -- it taxes the exact turns this deck needs to attack. |
| Tannuk, Steadfast Second | MYTHIC {2}{R}{R}; 'Other creatures you control have haste' is genuinely on-plan, but {R}{R} is unpayable on schedule with only 2 Molten Tributary as UR fixing. |
| Monoist Sentry / Hullcarver | Off-colour for the UR shell. Monoist Sentry additionally has Defender, so it could never attack and therefore never trigger Silencer at all. |
| Wurmwall Sweeper | SIDEBOARD CONSIDERATION. {2} Spacecraft that becomes a flying nontoken artifact creature at 4+ charge counters, but each Station tap costs an attack step -- roughly 4 poison paid up front for +2 poison/turn. Synthesizer Labship does the same job without the body tax. |
| Tezzeret, Cruel Captain | SIDEBOARD CONSIDERATION. MYTHIC {3}; loyalty-ramps off 19 of 24 artifacts and its 0 untaps a tapped carrier, but its -3 searches only for mana value 1 or less and therefore CANNOT find Virulent Silencer (MV 3). |
| Bombard / Invasive Maneuvers / Drill Too Deep / Annul / Illvoi Light Jammer | SIDEBOARD. All four are live answers but too matchup-narrow for the maindeck; Invasive Maneuvers in particular only reaches 5 damage 'if you control a Spacecraft', which requires Synthesizer Labship on the battlefield. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.12   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.17 adj [MV 2.12 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand  42.1%  prod  50.0%  gap  -7.9pp  [OK]
  U  demand  57.9%  prod  62.5%  gap  -4.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons_uncommons_max_2      PASS -- no card exceeds 2 copies (basics exempt)
rares_mythics_max_1          PASS -- Rust Harvester and Synthesizer Labship, 1 copy each
rare_mythic_budget_6         PASS -- 2 of 6 used (Rust Harvester, Synthesizer Labship)
all_cards_from_cube          PASS -- exact-name membership verified; Island/Mountain are format-supplied basics
mainboard_40_sideboard_10    PASS
colour_usability             PASS -- effective_cost.best_mode non-None for every nonland card in U/R
```