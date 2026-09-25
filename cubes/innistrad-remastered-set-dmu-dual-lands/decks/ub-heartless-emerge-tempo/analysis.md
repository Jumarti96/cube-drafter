---
deck_name: "ub-heartless-emerge-tempo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UB"
format: "40-card"
built_at: "2026-08-27T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  2x Contaminated Aquifer            UB dual, enters tapped
  8x Island                          
  8x Swamp                           
```

### CREATURES (14)

```
CMC  Card                            Qty   Color  Role                                                   Rar
  3  Biolume Egg // Biolume Serpent  x2    U      Recursive emerge fodder (MV 3)                         U
  4  Haunted Dead                    x2    B      Recursive emerge fodder (MV 4)                         U
  4  Mist Raven                      x2    U      Tempo interaction / emerge fodder (MV 4)               U
  4  Tower Geist                     x2    U      Emerge fodder (MV 4) / evasive clock / card advantage  C
  7  Wretched Gryff                  x2    C      Emerge payoff — evasive clock + card                   C
  8  Abundant Maw                    x2    C      Emerge payoff — reach / drain                          C
  8  Distended Mindbender            x1    C      Emerge payoff — hand disruption                        R
  8  Elder Deep-Fiend                x1    C      Emerge payoff — flash tempo blowout                    R
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                            Qty   Color  Role                                                   Rar
  1  Syncopate                       x1    U      Interaction — scaling counterspell                     C
  1  Tragic Slip                     x2    B      Interaction — morbid removal                           C
  1  Village Rites                   x1    B      Engine — free sacrifice outlet / card advantage        C
  2  Infernal Grasp                  x1    B      Interaction — unconditional removal                    U
  4  Memory Deluge                   x1    U      Infrastructure — card advantage                        R
  4  Sever the Bloodline             x1    B      Interaction — wide-board answer                        U
```

### OTHER SPELLS (1)

```
CMC  Card                            Qty   Color  Role                                                   Rar
  2  Heartless Summoning             x1    B      Engine — cost reducer                                  R
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Rar  Role                            When to board in
Compelling Deterrence           x2    U      U    Bounce                          vs artifacts/enchantments — the only U/B interaction with those classes is bouncing them; also resets a transformed DFC
Murderous Compulsion            x2    B      C    Removal                         vs creature decks that attack — an attacking creature is tapped, so 'destroy target tapped creature' is live on the defensive turn without needing any other card; Elder Deep-Fiend's tap-four is an occasional bonus, not the premise
Imprisoned in the Moon          x2    U      C    Catch-all answer                vs planeswalkers, indestructible/recursive creatures and utility lands — turns the permanent into a colorless land with no abilities
Geistcatcher's Rig              x1    C      U    Anti-flier / MV-6 fodder        vs the cube's 58-card evasion class — 4 damage to a flier, and a MV 6 body that pays an entire emerge cost
Sever the Bloodline             x1    B      U    Wide-board answer               vs token decks — exiles all creatures sharing a name, with flashback
Morkrut Banshee                 x1    B      U    Removal on a mana-value-5 body  vs creature decks — morbid 'target creature gets -4/-4' is live off any emerge sacrifice or Village Rites, and at mana value 5 it is the deck's largest emerge payment, taking Elder Deep-Fiend to {U}{U} with no Heartless Summoning needed
Collective Brutality            x1    B      R    Hand attack / drain             vs control and lifegain decks — escalate strips an instant, shrinks a creature and drains 2
```

## ANALYSIS

### DECK IDENTITY

A two-colour tempo deck that treats its own creatures as mana. Every mid-curve body it plays is priced as future fuel: emerge reduces an Eldrazi's cost by the sacrificed creature's mana value, so a Mist Raven or Tower Geist that already bounced a blocker or drew a card converts on turn four or five into a 5/6 that taps the opponent's board, a 6/4 that drains three, or a 3/4 flier that replaces itself. Heartless Summoning accelerates both halves at once, cutting {2} from the fodder on the way down and {2} from the Eldrazi on the way up. The deck wins by never trading down — the sacrifice is a cost already paid, so the bodies it loses are bodies it had finished using.

### THE EMERGE PRICE TABLE

Emerge reduces the emerge cost by the sacrificed creature's mana value, **generic first, floored at zero**. Two consequences drive every card choice in this deck:

1. **Coloured pips are irreducible.** No amount of fodder makes `Elder Deep-Fiend` cost less than `{U}{U}`.
2. **A token discounts nothing.** Tokens have mana value 0, so the usual aristocrats instinct — flood the board with bodies — is actively wrong here. What you want is a creature whose *mana value* is high relative to what it cost you to deploy.

Mana to emerge each Eldrazi, by the mana value of the creature sacrificed, shown **without / with** `Heartless Summoning`:

| Fodder (mana value) | Wretched Gryff | Abundant Maw | Elder Deep-Fiend | Distended Mindbender |
|---|---|---|---|---|
| Biolume Egg (3) | 3 / 1 | 4 / 2 | 4 / 2 | 4 / 2 |
| Tower Geist, Mist Raven, Haunted Dead (4) | **2 / 1** | **3 / 1** | **3 / 2** | **3 / 2** |
| Morkrut Banshee — sideboard (5) | 1 / 1 | 2 / 1 | 2 / 2 | 2 / 2 |
| Geistcatcher's Rig — sideboard (6) | 1 / 1 | 1 / 1 | 2 / 2 | 2 / 2 |

The mana-value-4 row is the deck. Six of the eight fodder bodies sit on it, which is why the curve clusters so hard at four.

### HEARTLESS SUMMONING IS A DOUBLE ACCELERANT — AND ITS COST IS ALMOST ZERO HERE

`Heartless Summoning` reads *"Creature spells you cast cost {2} less to cast. Creatures you control get -1/-1."* Emerge is an alternative cost, and cost reductions apply to the total after alternative costs, so the `{2}` comes off the emerge cost as well as off the hard cast. It discounts **14 of the 22 nonland cards (63.6%)** and it accelerates *both* halves of the plan at once — `Tower Geist` deploys for `{1}{U}` and then emerges `Wretched Gryff` for `{U}`.

The drawback is what makes this list look the way it does. Of the creatures whose power and toughness the pool records, **not one dies to -1/-1**: Tower Geist 2/2, Mist Raven 2/2, Haunted Dead 2/2, Wretched Gryff 3/4, Abundant Maw 6/4, Elder Deep-Fiend 5/6, Distended Mindbender 5/5. The only casualty is the 1/1 Spirit token `Haunted Dead` makes. That is not luck — several strong cards were cut precisely because they die to it, including `Gravecrawler` (2/1), `Nebelgast Herald` (2/1), `Metallic Mimic` (2/1) and `Blood Artist` (0/1).

One honest gap: `Biolume Egg // Biolume Serpent` has no power or toughness recorded in the working pool, because transform double-faced cards store those fields as null. It is the one body whose survival under -1/-1 cannot be verified from the data this build was made from. Its front face has Defender and is not part of the clock either way.

### THE SACRIFICE IS A COST, NOT A TRIGGER

The single most important play pattern here is a rules detail rather than a card. Emerge's sacrifice is **part of the spell's cost, paid on announcement**. An opponent who responds to the emerge announcement by killing the fodder creature has spent a card and stopped nothing — the Eldrazi is already on the stack and its cast trigger is already guaranteed.

This makes the deck's key turn far more resilient than a comparable sacrifice-outlet deck. It also means the cast triggers fire **through counterspells**: `Distended Mindbender` strips two cards from the opponent's hand even if the 5/5 itself is countered, and `Wretched Gryff` still draws.

The corollary is that the fodder must be killed *before* you announce. That is what makes `Biolume Egg` and `Haunted Dead` valuable beyond their mana value — they come back.

### WHAT THIS DECK CANNOT DO

Worth stating plainly, because it shapes sideboarding. A direct query over every U/B-usable card in this cube returns **zero** effects that destroy or exile an artifact or an enchantment. Not few — zero. The cube contains 24 artifacts (8.7%) and 25 enchantments (9.0%). Bouncing them with `Compelling Deterrence` is the only interaction that exists, which is why two copies sit in the sideboard for a card that would otherwise be unplayable.

The graveyard class is worse. Graveyard interaction is the cube's **largest** theme at 75 cards (27.1%), and U/B's only repeatable answer is the back face of a Siege you must first defeat in combat. There is no fix, and the deck accepts it partly because its own `Haunted Dead` recursion would be caught in the crossfire of any symmetric answer.

### PLAY PATTERN

The deck wants to spend turns two through four deploying a mana-value-3 or -4 body and holding up interaction, then convert. `Elder Deep-Fiend` has **flash**, so the strongest sequence is to pass with mana up, and either counter something with `Syncopate` or, at the opponent's end step or in their declare-attackers step, emerge the Deep-Fiend and tap four permanents. Tapping four blockers before your own attack and tapping four attackers before damage are the same card.

`Murderous Compulsion` in the sideboard reads *"Destroy target tapped creature"* and is boarded on its own merits — attacking creatures are tapped — but it does combine with that Deep-Fiend line.

### COUNT-DEPENDENT VERDICTS

Every card whose value is a function of how many others qualify, decided against **this** list (22 nonland cards) rather than in the abstract.

| Card | Verdict | Count against this list |
|---|---|---|
| Heartless Summoning | INCLUDE | RECOUNTED at Phase 9 round 2. 'Creature spells you cast cost {2} less to cast' applies to 14 of the 22 nonland cards (Biolume Egg x2, Tower Geist x2, Mist Raven x2, Haunted Dead x2, Wretched Gryff x2, Abundant Maw x2, Elder Deep-Fiend, Distended Mindbender) = 63.6%. It discounts both halves of the plan: Tower Geist drops to {1}{U}, and with an MV-4 sacrifice Wretched Gryff emerges for {U}, Elder Deep-Fiend for {U}{U}, Abundant Maw for {B}. Cost side: 'Creatures you control get -1/-1' kills nothing in this list among the creatures whose power/toughness the working pool records (Tower Geist 2/2, Mist Raven 2/2, Haunted Dead 2/2, Wretched Gryff 3/4, Abundant Maw 6/4, Elder Deep-Fiend 5/6, Distended Mindbender 5/5) — the only casualty is the 1/1 Spirit token Haunted Dead creates. Biolume Egg's printed power/toughness is not recorded in the working pool (transform DFC), so it is the one body I cannot verify survives; its front face has Defender and is not part of the clock either way. |
| Gravecrawler | CUT | RECOUNTED: 'You may cast this card from your graveyard as long as you control a Zombie' — Zombie cards in this list are 2 of 22 (Haunted Dead x2 only; Makeshift Mauler was cut at Phase 9). The count is half what was first recorded, so the CUT is stronger, not weaker. At MV 1 it also discounts only 1 generic mana off an emerge cost, and as a 2/1 it dies outright to Heartless Summoning's -1/-1. |
| Compelling Deterrence | CUT from mainboard, INCLUDE x2 in sideboard | RECOUNTED: the discard rider needs a Zombie — 2 of 22 cards, not 4. Without it the card is a two-mana bounce, which Mist Raven already provides stapled to an MV-4 body. It earns its sideboard slot on a different axis — bounce is the only U/B interaction with artifacts and enchantments. |
| Nebelgast Herald | CUT | RECOUNTED: 'Whenever this creature or another Spirit you control enters' — nontoken Spirits are now 2 of 22, because Tower Geist is a Creature — Spirit, plus the two 1/1 Spirit tokens from Haunted Dead. So the trigger is live more often than first recorded (its own ETB plus up to 4). The CUT stands on the body, not the count: Nebelgast Herald is a 2/1 and dies outright to Heartless Summoning's -1/-1, and this deck's 22 slots have no room for a card whose ceiling is tapping one blocker. |
| Geistlight Snare | CUT | RECOUNTED: it costs {1} less if you control a Spirit and a further {1} less if you control an enchantment — once per condition, not per permanent. Nontoken Spirits are 2 of 22 (Tower Geist x2) and enchantments 1 of 22 (Heartless Summoning), so with one of each on the battlefield it is {U}, better than first recorded. CUT anyway: both reducers are conditional permanents that must already have resolved, and the effect is 'counter target spell unless its controller pays {3}', a tax the opponent simply pays on the turn that matters. |
| Spontaneous Mutation | CUT | X = cards in your graveyard. This list has no dedicated self-mill and 22 nonland cards; through turn 4 the graveyard holds roughly 0-3 cards, so -X/-0 kills nothing and does not stop a trampler or a blocker. |
| Thing in the Ice // Awoken Horror | CUT | Needs four instant/sorcery casts to remove all ice counters; instants and sorceries here are 7 of 22 = 31.8%, putting the flip past the thesis turn of 7. On flipping it returns all non-Horror creatures to hand, which would bounce this deck's own Eldrazi. |
| Delver of Secrets // Insectile Aberration | CUT | Flip rate equals instant/sorcery density: 7 of 22 nonland cards = 31.8% per upkeep. A 1/1 that flips less than a third of the time is not a competitive clock, and at MV 1 it is near-worthless emerge fodder. |
| Gisa and Geralf | CUT | RECOUNTED at Phase 9 round 2: 'you may cast a Zombie creature spell from your graveyard' — Zombie cards are 2 of 22, not 4. Also costs a rare slot against a five-card budget already fully allocated. |
| Necroduality | CUT | RECOUNTED: copies each nontoken Zombie that enters — 2 of 22 qualify, not 4, and it is a mythic against a five-card rarity budget. |
| Archghoul of Thraben | CUT | RECOUNTED: triggers on Zombie deaths and digs only for Zombies — 2 of 22 on both halves. |
| Bladestitched Skaab | CUT | RECOUNTED: 'Other Zombies you control get +1/+0' — 2 of 22 cards, and +1/+0 on two bodies does not advance a plan that wins with 5/6 and 6/4 Eldrazi. |
| Metallic Mimic | CUT | RECOUNTED: counters go only on the chosen type, and the largest single creature type in this list is now ELDRAZI at 6 of 22 (Wretched Gryff x2, Abundant Maw x2, Elder Deep-Fiend, Distended Mindbender), not Zombie at 4 as first recorded. Naming Eldrazi would add a +1/+1 counter to each emerge creature — real, but marginal on bodies that are already 5/6 and 6/4. CUT on the body instead: Metallic Mimic is a 2/1 and dies outright to Heartless Summoning's -1/-1. |
| Captivating Vampire | CUT | Vampires in this list: 0 of 22. Both its lord ability and its five-Vampire steal are blank. |
| Bloodline Keeper // Lord of Lineage | CUT | Vampires in this list: 0 of 22, so it must build to five from its own tokens before transforming; also a mythic against the rarity budget. |
| Battleground Geist | CUT | RECOUNTED: 'Other Spirit creatures you control get +1/+0' — nontoken Spirits are 2 of 22 (Tower Geist x2), not 0, since Tower Geist is a Creature — Spirit. CUT on rate: five mana for a 3/3 flier that gives +1/+0 to two bodies is off-plan in a deck whose five-mana turns are spent emerging. |
| Docent of Perfection // Final Iteration | CUT | Wizards in this list: 0 of 22; instants and sorceries 7 of 22, so it needs three separate spell casts to flip. |
| Indulgent Aristocrat | CUT | Vampires in this list: 0 of 22, so its +1/+1 payoff is blank; the residual sacrifice outlet costs {2} per activation, competing directly with the emerge cost for the same mana. |
| Sorin, Imperious Bloodlord | CUT | Vampires in this list: 0 of 22 — its second and third abilities are blank; mythic against the rarity budget. |

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (tempo):  [WARN]
  MV distribution (22 nonland):  1:4  2:2  3:2  4:8  7:2  8:4
  WARN  Above thesis turn: share of nonland cards with MV > 7 is 18% (max 10%)
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies → p=0.90 (need ≥ 0.75)
  PASS  enabler: 8 copies → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [WARN]
  keepable 71% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 55%  T2 78%  T3 90%
Coverage:  [PASS]
  OK        wide_boards: Sever the Bloodline, Elder Deep-Fiend
  OK        single_large_threat: Infernal Grasp, Tragic Slip, Mist Raven
  CONCEDED  noncreature_permanents: U/B in this pool contains no 'destroy or exile target artifact/enchantment' effect at all — a direct query over the U/B-usable pool returns zero cards, matching the dossier's artifact- and enchantment-removal probes. Bounce is the only available interaction, so the answer is boarded (Compelling Deterrence x2), not maindecked.
  OK        stack: Syncopate
  CONCEDED  graveyard: The only repeatable graveyard hate reachable in U/B is Deluge of the Dead, the back face of Invasion of Innistrad, which requires defeating a Siege first; Syncopate exiles only the single spell it counters. Against a 27%-density graveyard field this is a real gap. It is conceded rather than answered because a symmetric graveyard-exile effect would also strip Haunted Dead, whose '{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield tapped' is 2 of the 8 fodder bodies and the deck's only repeatable source of emerge fuel from an empty board.
```

- curve WARN (18% of nonland cards have MV > 7, max 10%): accepted. The four flagged cards are Abundant Maw x2, Elder Deep-Fiend and Distended Mindbender, whose printed MV of 8 is the number the curve check reads but never the number this deck pays — each is cast for 1-3 mana via emerge by sacrificing an MV 3-4 body. Lowering the flagged share would mean cutting emerge payoffs, which is the deck's entire kill mechanism and the specific reason the shape judge ranked this build first.
- goldfish WARN (keepable 71%, need 80%): accepted, same root cause. The simulator scores a hand holding an emerge creature as holding an uncastable 8-drop, because it reads printed mana value; in play those cards are the cheapest spells in the deck once any MV 3-4 body has resolved. The Phase 9 repair improved this measurably rather than only rhetorically — swapping Makeshift Mauler x2 for Tower Geist x2 and adding Village Rites moved keepable from 69% to 71% and a turn-1 play from 44% to 55%. The metrics the simulator computes without the mana-value distortion are healthy: 3 lands by turn 3 at 92%, a play by turn 2 in 78% of hands and by turn 3 in 90%.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Surplus lands are not dead: emerge costs are paid in mana, so a seventh land is a second Eldrazi in the same turn. Memory Deluge's flashback {5}{U}{U}, Haunted Dead's {1}{B} recursion and Syncopate's {X} all scale with excess mana, and Sever the Bloodline has flashback {5}{B}{B}. |
| screw | accepted | Two-land hands are keepable only when they hold a three-mana Biolume Egg or one- and two-mana interaction. The deck has essentially no acceleration — deck_audit.accel_count is 1, and that single card is Village Rites, which is a sacrifice outlet and a draw spell, not mana acceleration — and zero land-fetch. Mitigating would mean cutting fodder or an Eldrazi for Traveler's Amulet or Evolving Wilds: cards that discount no emerge cost and are not creatures, so they subtract from the fuel supply the entire kill mechanism runs on. |
| decapitation | mitigation | Heartless Summoning is an accelerant, not a prerequisite: without it Elder Deep-Fiend off an MV-4 body still costs {1}{U}{U} and Wretched Gryff {1}{U}, both castable on curve. Payoff redundancy is 6 cards across four names, and two of them (Wretched Gryff, Abundant Maw) are commons at 2 copies each, so no single answer removes the win condition. |
| gas-out | mitigation | Repaired at Phase 9; the original claim that 'an empty hand still produces emerge fuel every turn' was false, because Haunted Dead's recursion costs 'Discard two cards' and an empty hand cannot pay it. The honest mitigation is card count, not recursion: Cards: Net-Positive plus Cards: Self-Replacing is now 6 of 22 = 27.3% — Wretched Gryff x2 ('When you cast this spell, draw a card'), Tower Geist x2 ('look at the top two cards of your library. Put one of them into your hand'), Memory Deluge (two cards, then two more off flashback {5}{U}{U}), and Village Rites ('sacrifice a creature. Draw two cards'). Village Rites is also the deck's only sacrifice outlet other than emerge itself, which means Biolume Egg's free return ('When you sacrifice this creature, return it to the battlefield transformed') is now reachable without holding an Eldrazi — closing the circularity the Challenger identified. |
| raced | mitigation | Against the fastest clocks in the threat profile (evasion density 20.9%, 58 cards), the deck holds 7 interaction cards at 1-4 mana. Unconditional removal is 2 of 22 on its own (Infernal Grasp, Sever the Bloodline) — Tragic Slip x2 is conditional, reading -1/-1 unless a creature died this turn. Village Rites fixes exactly that: a one-mana free sacrifice outlet makes morbid available on demand, so the effective unconditional count is 4. Elder Deep-Fiend at flash speed reads 'tap up to four target permanents', a one-turn fog on the crucial attack, and Abundant Maw swings the race 6 points on cast. |
| disruption-fizzle | mitigation | The emerge turn is unusually resilient to interaction, and this is a rules property rather than a card: the sacrifice is part of emerge's COST, paid on announcement, so an opponent who kills the fodder creature in response has spent a card and stopped nothing — the Eldrazi is already on the stack. Only a counterspell answers the turn, and Syncopate plus the deck's own flash access (Elder Deep-Fiend) let it be attempted on the opponent's end step instead. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Decimator of the Provinces | Emerge cost is {6}{G}{G}{G}; core_colors locked to [U,B] at Phase 3, so the emerge mode is uncastable and only the {10} hardcast remains. Colour ceiling, not a guess about the eventual list. |
| It of the Horrid Swarm | Emerge {6}{G} is uncastable in [U,B]; the seed admits it only because its printed cost {8} is generic. An 8-mana 4/4 is not the plan. |
| Emrakul, the Promised End | COUNT (recorded at Phase 9): 'costs {1} less to cast for each card type among cards in your graveyard'. The finished list contains 5 card types (creature, instant, sorcery, enchantment, land), so the absolute floor is {8}; a realistic graveyard of 3-4 types leaves it at 9-10 mana. CUT: the emerge plan reaches its kill several turns sooner, and it is a mythic against a rarity budget that finished at 5 of 5. |
| Chittering Host | Has no mana cost — it exists only as the meld of Graf Rats and Midnight Scavengers, so it cannot be cast or included as a deck card. |
| Edgar's Awakening | Reanimation is anti-synergistic with every emerge Eldrazi here: their value is on 'When you cast this spell', which a battlefield-return never triggers. |
| Soul Separator | Same defect plus cost: {3} to play and {5} to activate to copy a graveyard Eldrazi, and the copy again misses the cast trigger. |
| Griselbrand | {4}{B}{B}{B}{B} — four black pips is uncastable on a two-colour mana base built to also support {U}{U} for Elder Deep-Fiend. |
| Vilespawn Spider | COUNT (recorded at Phase 9): its payoff creates 'a 1/1 green Insect creature token for each creature card in your graveyard', and creature cards are 14 of 22 nonland cards in the finished list — a genuinely favourable count the original reason failed to state. CUT anyway on two mechanisms that the count does not rescue: it needs {G}{U} as a splash card on turn two to matter, and the tokens it makes are mana value 0, so they discount no emerge cost. |
| Garruk Relentless // Garruk, the Veil-Cursed | COUNT (recorded at Phase 9): '-3: Creatures you control gain trample and get +X/+X until end of turn, where X is the number of creature cards in your graveyard' — creature cards are 14 of 22 in the finished list. CUT on the rarity budget rather than the count: it is a mythic, the budget finished at 5 of 5, and it is a green splash card on a two-colour mana base. |
| The Gitrog Monster | Splash candidate, mythic. The build constraint allows five rare/mythic cards total across mainboard and sideboard and the budget finished at 5 of 5; a green splash also demands land slots this two-colour mana base is not paying for. |
| Geistcatcher's Rig | CORRECTED at Phase 9 — originally batch-cut as colourless filler 'without answering a threat', which contradicts its own sideboard role. It DOES answer a threat: 'When this creature enters, you may have it deal 4 damage to target creature with flying' against a cube whose evasion class is 58 of 277 cards (20.9%), and at mana value 6 it is the largest emerge payment available to this deck. Cut from the MAINBOARD only, on cost — six mana is outside a tempo curve built to 18 lands — and boarded instead. |
| Jace, Unraveler of Secrets, Tamiyo's Journal, Helvault, Conjurer's Closet, Stitcher's Graft, Tree of Perdition | Rare/mythic cards competing for the five-card rarity budget that do not advance the emerge plan: none reduces an emerge cost, provides fodder, or answers a threat faster than the cheaper commons already in include_candidates. |
| Gisa's Bidding, Ghoulish Procession | Both produce only creature tokens. Emerge reduces its cost by the sacrificed creature's mana value and a token's mana value is 0, so token generation is worth nothing to this pipeline. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 19 recommended  [PASS]
Avg CMC:     4.18   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +2.07 adj [MV 4.18 vs 2.5, 1 accel, scaled N/60]  ->  19 lands  (P(2-4 in 7) = 0.774)

Color Balance (core):  [PASS]
  B  demand  42.1%  prod  55.6%  gap -13.5pp  [OK]
  U  demand  57.9%  prod  55.6%  gap  +2.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  - Commons/uncommons max 2 copies each — highest count anywhere across mainboard + sideboard is 2 (Biolume Egg, Tower Geist, Mist Raven, Haunted Dead, Wretched Gryff, Abundant Maw, Tragic Slip, Compelling Deterrence, Murderous Compulsion, Imprisoned in the Moon; and Sever the Bloodline at 1 mainboard + 1 sideboard). Morkrut Banshee, Geistcatcher's Rig, Village Rites, Infernal Grasp and Syncopate each appear once: PASS
  - Rares/mythics max 1 copy each — Elder Deep-Fiend 1, Distended Mindbender 1, Heartless Summoning 1, Memory Deluge 1, Collective Brutality 1: PASS
  - Max 5 rare/mythic cards total across mainboard + sideboard — exactly 5 (4 mainboard + 1 sideboard): PASS, at cap
  - All cards drawn from the cube mainboard pool; basic lands format-supplied and exempt: PASS
  - Mainboard 40 cards, sideboard 10 cards as requested: PASS
```
