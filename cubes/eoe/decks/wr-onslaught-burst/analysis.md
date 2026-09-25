---
deck_name: "wr-onslaught-burst"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WR"
format: "40-card"
built_at: "2026-08-03T04:35:07Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  6x Plains          Basic land, {W}
  8x Mountain        Basic land, {R}
  1x Sacred Foundry  WR dual; pay 2 life or enters tapped
  2x Sacred Peaks    WR dual; enters tapped
```

### CREATURES (13)

```
CMC  Card                      Qty   Color  Role                                  Rar
  1  Kavaron Harrier           x1    R      Per-combat token producer             U
  1  Slagdrill Scrapper        x2    R      Munitions sacrifice outlet / draw     C
  2  Honored Knight-Captain    x2    W      Token producer                        U
  3  Weftstalker Ardent        x2    R      Non-combat reach engine               U
  4  Memorial Team Leader      x2    R      Persistent anthem                     U
  4  Red Tiger Mechan          x1    R      Haste artifact body / Munitions fuel  C
  4  Sami, Ship's Engineer     x1    RW     End-step token producer               U
  4  Tannuk, Steadfast Second  x1    R      Haste granter / warp enabler          M
  5  Exalted Sunborn           x1    W      Token doubler                         M
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                   Qty   Color  Role                                                    Rar
  1  Devastating Onslaught  x1    R      Burst finisher (kill mechanism)                         M
  1  Plasma Bolt            x2    R      Reach / removal                                         C
  1  Reroute Systems        x1    W      Protect the Onslaught target / tapped-creature removal  U
  3  Emergency Eject        x1    W      Unconditional permanent answer                          U
```

### OTHER SPELLS (5)

```
CMC  Card                   Qty   Color  Role                                       Rar
  2  Melded Moxite          x2    R      Card filter / Munitions fuel / late token  C
  2  Weapons Manufacturing  x1    R      Munitions engine                           R
  4  Wedgelight Rammer      x2    W      Token producer / premier Onslaught target  U
```

## SIDEBOARD (10)

```
Card                Qty   Color  Role / When to board in                                               Rar
Drill Too Deep      x2    R      Artifact decks; 2-mana destroy, or 5 charge counters on a Spacecraft  C
Radiant Strike      x1    W      Artifact / tapped-creature removal with 3 life                        C
Banishing Light     x2    W      Any resolved bomb or enchantment                                      C
Invasive Maneuvers  x2    R      Creature decks; 5 damage with a Spacecraft out                        U
Seam Rip            x1    W      Cheap blockers and cheap permanents                                   U
Dauntless Scrapbot  x1    C      Graveyard decks (31 cards / 12.5% of cube)                            U
Warmaker Gunship    x1    R      Creature decks; ETB damage equal to artifacts controlled              R
```

## ANALYSIS

### DECK IDENTITY

Boros go-wide with two kill axes that are genuinely independent after the Phase 9 repair. Devastating Onslaught copies a permanent X times with haste for a one-turn alpha strike - and its best target is Wedgelight Rammer, because Onslaught's 'sacrifice THEM at the beginning of the next end step' covers only its own copies, so each copy's ETB 2/2 Robot survives. Weftstalker Ardent turns every creature or artifact entering into 1 damage to each opponent, so the same flood kills through a board that blocks perfectly. Weapons Manufacturing converts each of the deck's 8 nontoken artifacts into a Munitions token, and Slagdrill Scrapper is the outlet that cashes them: '{2}, {T}, Sacrifice another artifact or land: Draw a card' turns each Munitions into a card AND 2 damage to any target. Exalted Sunborn doubles every token layer; Memorial Team Leader is the deck's one persistent anthem and Tannuk gives the board haste.

### TWO KILL AXES, AND THE ONE THAT ALMOST WASN'T

The build was selected by the Phase 5B shape judge for having a second, redundant kill path — Devastating Onslaught reads *"Create X tokens that are copies of target **artifact or creature** you control"*, so it can copy a Munitions token from Weapons Manufacturing, and Onslaught's own *"Sacrifice them at the beginning of the next end step"* then fires each copy's *"When this token leaves the battlefield, it deals 2 damage to any target."* That line is real and the Proposer verified it from both cards' oracle text.

**But the Phase 9 Challenger found it was the only way this deck could ever make a Munitions token leave the battlefield.** It grepped all 40 cards: every sacrifice clause in the list was self-referential (*"Sacrifice **this** creature"*, *"Sacrifice **that** token"*, *"Sacrifice **them**"*). Zero free outlets. So in the ~90% of games where you don't assemble both singletons, Weapons Manufacturing was producing eight inert artifacts that did nothing but trigger Weftstalker Ardent once each on entry. The `decapitation` failure mode — which claimed the two axes were "independent by construction" — was false, because the axis it fell back on was gated behind the card it assumed had been answered.

The repair is **Slagdrill Scrapper ×2**: *"{2}, {T}, Sacrifice another artifact or land: Draw a card."* It is the only card in the W/R pool under two mana that sacrifices another permanent. Now each Munitions is a card **and** 2 damage to any target, and Slagdrill Scrapper is itself a nontoken artifact, so it makes a ninth Munitions on entry.

### WHY WEDGELIGHT RAMMER IS THE ONSLAUGHT TARGET

Onslaught's sacrifice clause is *"Sacrifice **them**"* — *them* is the Onslaught copies, not anything those copies create. Wedgelight Rammer's *"When this Spacecraft enters, create a 2/2 colorless Robot artifact creature token"* fires on every copy, and those Robots are **not** covered by the clause. At X=3 that is three surviving 2/2 Robots plus six Weftstalker Ardent triggers, from a spell that also swings with three hasty 3/4s. Copying Red Tiger Mechan instead gives nine blockable damage and leaves nothing behind.

The Challenger caught that this card was at one of its two legal copies. P(seeing it by the turn-6 thesis) went from **32.5% to 55.0%** with the second copy.

### COUNT-DEPENDENT VERDICTS (against the repaired 23 nonland cards)

| Card | Count |
|---|---|
| Weftstalker Ardent | *"Whenever another creature **or artifact** you control enters"* — **19 of 23** nonland cards trigger it. Only Plasma Bolt ×2, Emergency Eject (its Lander goes to the opponent) and Reroute Systems do not. |
| Weapons Manufacturing | *"Whenever a **nontoken** artifact you control enters"* — **8 of 23**: Red Tiger Mechan, Kavaron Harrier, Melded Moxite ×2, Wedgelight Rammer ×2, Slagdrill Scrapper ×2. |
| Memorial Team Leader | Added at Phase 9. Before it the list had **0 persistent anthems** — Zealous Display was until-end-of-turn only. On a board of six tokens, *"During your turn, other creatures you control get +1/+0"* is +6 damage per attack, permanently. |
| Onslaught + Weapons Manufacturing | The headline line needs both singletons: P(both in 13 cards by turn 6) = **10.0%**. It is a bonus, not the plan. Disclosed rather than sold. |
| Infinite Guideline Station | 1 multicolored card of 23 — both its triggers are blank. EXCLUDE. |

### THE MANA IS THE PRICE OF THE SECOND COLOUR

Three of 17 lands are nonbasic, and only Sacred Foundry can enter untapped (for 2 life). Sacred Peaks ×2 enter tapped unconditionally. The W production gap reads −18.3pp, which is **over**-supply, not a shortage: 9 W sources against a 34.6% pip share, deliberately, because Exalted Sunborn's `{3}{W}{W}` is the only double-white card and it is the doubler every axis runs through. The Challenger measured P(≥2 W sources by turn 5 on the play) at **79.1%**.

### WHAT THE REPAIR COST

Zealous Display ×2 was cut to fund the Munitions outlet and the anthem, and with it went the deck's only defensive combat trick — *"If it's not your turn, untap those creatures"* was the crack-back answer. `failure_modes.raced` records that loss rather than hiding it. The trade was correct: a defensive trick is worth less than making the second kill axis function at all.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:7  2:5  3:3  4:7  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.25: Weftstalker Ardent@0.9, Weftstalker Ardent@0.9, Exalted Sunborn@0.8, Weapons Manufacturing@0.85, Memorial Team Leader@0.9, Memorial Team Leader@0.9) → p=0.89 (need ≥ 0.75)
  PASS  enabler: 11 copies (effective 9.7: Kavaron Harrier@0.7, Melded Moxite@0.6, Melded Moxite@0.6, Sami, Ship's Engineer@0.8) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 79%  T2 96%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Plasma Bolt, Reroute Systems
  OK        single_large_threat: Emergency Eject
  OK        noncreature_permanents: Emergency Eject
  CONCEDED  stack: Neither white nor red has a counterspell in this pool; the deck's answer to a stack-based plan is Weftstalker Ardent's non-combat damage, which accrues whether or not the opponent holds up interaction and cannot be countered once the Ardent has resolved.
  CONCEDED  graveyard: The mainboard runs no graveyard interaction: every slot serves one of the two kill axes, and a hate piece would produce no Weftstalker Ardent trigger and no Onslaught target. The class is answered from the sideboard by Dauntless Scrapbot, which exiles each opponent's graveyard on entry and leaves a 3/1 nontoken ARTIFACT body - so even boarded in it makes a Munitions and triggers both axes.
```


### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Devastating Onslaught is an X-spell: `{X}{X}{R}` means every two surplus lands buy another copy of the target. Slagdrill Scrapper's `{2}, {T}, Sacrifice another artifact or land: Draw a card` is a repeatable sink that converts BOTH surplus lands and parked Munitions into cards. Kavaron Harrier's `you may pay {2}` on each attack and Melded Moxite's `{3}, Sacrifice this artifact` are two more. |
| screw | mitigation | Twelve of the twenty-three nonland cards cost two or less (corrected from an earlier figure of eight per Challenger finding F6), and five copies carry single-pip warp costs (Weftstalker Ardent x2 at {R}, Red Tiger Mechan at {1}{R}, Exalted Sunborn at {1}{W}), so a two-land hand still deploys. Tannuk additionally grants `warp {2}{R}` to every artifact card and red creature card in hand. |
| decapitation | mitigation | REPAIRED at Phase 9 - this claim was UNSATISFIED before. The Challenger proved the axes were not independent, because Munitions tokens have no self-sacrifice and the only card that made one leave the battlefield was Devastating Onslaught itself. Slagdrill Scrapper x2 (`{2}, {T}, Sacrifice another artifact or land: Draw a card`) is now the outlet, so if Onslaught is answered, Weapons Manufacturing still converts each of the 8 nontoken artifacts into a Munitions and each Munitions into a card plus 2 damage to any target. If the Ardents are answered instead, Onslaught still copies Wedgelight Rammer X times and each copy leaves a surviving 2/2 Robot. |
| gas-out | mitigation | Three sources. Melded Moxite x2 reads `you may discard a card. If you do, draw two cards` - net positive that also converts a dead card into two live ones. Slagdrill Scrapper x2 draws a card for every artifact or land sacrificed, and this deck manufactures artifacts continuously. Tannuk's blanket `warp {2}{R}` on artifacts and red creatures in hand means stalled cards are cheaper rather than stranded. |
| raced | accepted | Zealous Display's untap-on-the-crack-back clause was cut at Phase 9 to fund the Munitions outlet and the anthem, and with it went the deck's one dedicated defensive trick. That is a real loss and it is accepted rather than papered over: the alternative was leaving the second kill axis inert. What remains is genuine but offensive-leaning - Plasma Bolt deals 2 to ANY target (3 under Void) so it can point at the face and shorten the race rather than trade, Exalted Sunborn is a 4/5 flying lifelink body, Reroute Systems deals 2 damage to a tapped creature on the crack-back, and Weftstalker Ardent's damage accrues every turn regardless of who is attacking. |
| disruption-fizzle | mitigation | REPAIRED at Phase 9 - this was UNSATISFIED before, because the accepted-cost claim (that mitigating required 'protection over one of the eight nontoken artifacts') was false. Reroute Systems is a one-mana INSTANT: `Target artifact or creature gains indestructible until end of turn`. It commits to nothing in advance and its second mode deals 2 damage to a tapped creature, so it is never dead. Scope stated precisely, per the approval round: indestructible answers DESTROY-based and DAMAGE-based removal only. It does not stop exile, bounce, or a counterspell on Devastating Onslaught itself, and at one copy it is in hand on the kill turn about a third of the time. That residue is accepted, and the reason it is survivable is that the Weftstalker Ardent axis is not a single turn - 19 of 23 nonland cards trigger it, it accrues from turn 3 onward, and it cannot be countered once the Ardent has resolved. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Infinite Guideline Station | Creates a Robot for each MULTICOLORED permanent you control and draws per multicolored permanent on attack; this list runs 2 multicolored cards of 23 nonland, so both triggers are near-blank. Also a rare against a 6-card cap. |
| Sami, Wildcat Captain | Spells you cast have affinity for artifacts — real, but at {4}{R}{W} it is a six-drop in a deck goldfishing on turn 6, and it costs one of only 6 rare/mythic slots. |
| Ragost, Deft Gastronaut | Artifacts you control become Foods with '{2}, {T}, Sacrifice this artifact: You gain 3 life', and '{1}, {T}, Sacrifice a Food: Ragost deals 3 damage to each opponent'. Phase 9 correction: the earlier exclusion reason was invalid - it cited protecting 'Lumen-Class Frigate's anthem count', and that card is not in this deck. The real reason is the 6-card rare cap: Ragost is a rare and the mainboard already spends 5 (Devastating Onslaught, Exalted Sunborn, Tannuk, Weapons Manufacturing, Sacred Foundry) with the sixth on sideboard Warmaker Gunship. Ragost would be an excellent second Munitions outlet - {1}, tap, sacrifice a Munitions is 3 to each opponent PLUS the token's own 2 damage - and it is the first card to swap in if you free a rare slot. |
| Kavaron, Memorial World | Its token-and-haste ability needs 12+ charge counters and the land enters tapped; reaching 12 costs multiple turns of Station taps that would otherwise be attacks. |
| Nova Hellkite | 4/5 flying haste at {3}{R}{R} is a fine body but it is a standalone threat, not a token producer or a go-wide payoff, and it would consume a rare slot. |
| Terminal Velocity | Puts an artifact or creature onto the battlefield with haste and a sacrifice-at-end-step clause for {4}{R}{R} — six mana for one temporary body, versus Devastating Onslaught which makes X of them. |
| Memorial Vault | '{T}, Sacrifice another artifact: Exile the top X cards of your library, where X is one plus the mana value of the sacrificed artifact. You may play those cards this turn.' Phase 9 correction: the earlier exclusion reason cited an 'anthem count' that does not exist in this list. The real trade-off is that it is a rare against a full 6/6 cap, and Slagdrill Scrapper does the same sacrifice-outlet job at {R} instead of {3}{R} while drawing rather than exiling. |
| Rust Harvester | Its ping requires exiling an artifact card from your graveyard; token artifacts cease to exist rather than going to the graveyard, so this list's artifact-token density does not feed it. |
| Pinnacle Emissary | Requires {U} — outside the W/R colour identity of this build. |
| Moonlit Meditation | Requires {U} — outside this build's colours and the defining payoff of the separate W/U build. |
| Pinnacle Starcage | ETB exiles ALL artifacts and creatures with mana value 2 or less; token creatures have mana value 0, so it exiles this deck's own board. |
| Thrumming Hivepool | Affinity for Slivers; this deck runs 0 Sliver cards, so it always costs the full {6}. |
| Adagia, Windswept Bastion | Copy ability requires 12+ charge counters and the land enters tapped — far outside a turn-6 clock, and it worsens an already tapped-land-heavy two-colour base. |
| Secluded Starforge | {5},{T} for one 2/2 Robot, and it taps for {C} only, which cannot pay any coloured pip in a deck with {W}{W} and {R}{R} costs. |
| Dawnsire, Sunstar Dreadnought | Needs 10+ charge counters before any ability turns on; this is P4's payoff, and stationing taps the creatures this build wants attacking. |
| Beyond the Quiet | Exiles all creatures and Spacecraft — a symmetric sweeper that destroys the go-wide board it would be protecting. |
| Kav Landseeker | 4/3 menace with a Lander that gets sacrificed the following end step — a fine body, but it produces no permanent token and does not trigger on entry the way this build's producers do. |
| Systems Override | Steals a permanent for a turn and can put ten charge counters on a Spacecraft; a tempo card, not a token producer, and this build's Spacecraft count is 2 of 23 nonland. |
| Starwinder | {5}{U}{U}, warp {2}{U}{U} — outside this build's colours. |
| Zealous Display | 'Creatures you control get +2/+0 until end of turn. If it's not your turn, untap those creatures.' Cut at Phase 9: the Challenger noted it is the only card in the list that produces neither a permanent nor damage, so it triggers neither Weftstalker Ardent nor Weapons Manufacturing nor Oreplate Pangolin. Its untap clause was the deck's defensive trick and losing it is recorded honestly in failure_modes.raced. |
| Oreplate Pangolin | 'Whenever another artifact you control enters, you may pay {1}. If you do, put a +1/+1 counter on this creature.' Cut at Phase 9 for slots. The trigger is live - 11 of 23 nonland cards could put another artifact onto the battlefield - but it taxes {1} per trigger on a deck that already pays {2} per Kavaron Harrier token and {2} per Slagdrill Scrapper activation, and it is a single body rather than an engine. |
| Knight Luminary | 'When this creature enters, create a 1/1 white Human Soldier creature token. Warp {1}{W}.' Raised as a BLOCKING absence at Phase 9 and contested: its copies do leave surviving 1/1s past Devastating Onslaught's 'sacrifice them' clause, but that is the same job Wedgelight Rammer #2 was added to do, and Rammer's token is a 2/2 rather than a 1/1 AND Rammer is itself a nontoken artifact, so it feeds Weapons Manufacturing and Weftstalker Ardent where Knight Luminary feeds only the latter. |
| Focus Fire | 'Deals X damage to target attacking or blocking creature, where X is 2 plus the number of creatures and/or Spacecraft you control.' Genuinely the cheapest scaling interaction in W/R and it reads this deck's board directly. Not included because interaction is already above band at 17.4% after Reroute Systems was added for the disruption-fizzle repair; Focus Fire is the first card in if you want a fifth interaction slot. |
| Kavaron Turbodrone | '{T}: Target creature you control gets +1/+1 and gains haste until end of turn. Activate only as a sorcery.' A 3-mana 2/3 nontoken artifact - Munitions fuel and an Ardent trigger - with a repeatable haste grant backing up the single Tannuk. Lost the slot to Memorial Team Leader, whose anthem applies to the whole board rather than one creature. |
| Lumen-Class Frigate | '2+ | Other creatures you control get +1/+1' would be a two-mana permanent anthem and a nontoken artifact feeding Munitions. Excluded purely on the 6-card rare cap, which this build spends entirely on Devastating Onslaught, Exalted Sunborn, Tannuk, Weapons Manufacturing, Sacred Foundry and Warmaker Gunship. Memorial Team Leader is the uncommon substitute, at the cost of applying only during your turn. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.57   Ramp cards: 1   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.41 adj [MV 2.57 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  65.4%  prod  64.7%  gap  +0.7pp  [OK]
  W  demand  34.6%  prod  52.9%  gap -18.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Base = cube mainboard only ........................................ PASS
Commons/uncommons max 2 copies each (mainboard + sideboard) ....... PASS
Rares/mythics max 1 copy each ..................................... PASS
Max 6 rares+mythics across mainboard and sideboard ................ PASS (6/6: Devastating Onslaught M, Exalted Sunborn M, Tannuk Steadfast Second M, Weapons Manufacturing R, Sacred Foundry R mainboard; Warmaker Gunship R sideboard)
All cards drawn from the eoe cube pool ............................ PASS
Basic lands format-supplied, unlimited ............................ PASS (6 Plains, 8 Mountain)
Mainboard = 40 cards .............................................. PASS
Sideboard = 10 cards .............................................. PASS
```