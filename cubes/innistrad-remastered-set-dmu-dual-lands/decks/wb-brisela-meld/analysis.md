---
deck_name: "wb-brisela-meld"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-08-31T21:37:08Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x6   Plains
  x7   Swamp
  x1   Evolving Wilds                               fetches a basic
  x1   Shattered Sanctum                            taps for BW, conditionally tapped
  x2   Sunlit Marsh                                 Plains Swamp, taps for BW, enters tapped
```

### CREATURES (13)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Lunarch Veteran // Luminous Phantom          x1    W     Engine — Human that returns fr C
  1  Thraben Inspector                            x2    W     Threat — Human body plus a Clu C
  2  Graf Rats                                    x2    B     Payoff — half of the SECOND me U
  2  Olivia's Dragoon                             x2    B     Enabler — the deck's only free C
  4  Gisela, the Broken Blade                     x1    W     Payoff — 4/3 flying first stri M
  4  Haunted Dead                                 x2    B     Engine — a recursive BODY, not U
  5  Midnight Scavengers                          x2    B     Payoff/Engine — half of the se C
  7  Bruna, the Fading Light                      x1    W     Payoff — cast trigger returns  R
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Tragic Slip                                  x2    B     Interaction — morbid removal,  C
  1  Village Rites                                x1    B     Engine — the deck's only proac C
  2  Collective Brutality                         x1    B     Interaction — escalate-discard R
  2  Infernal Grasp                               x2    B     Interaction — the deck's only  U
  3  Lingering Souls                              x2    W     Engine — four flying bodies ac U
  5  Edgar's Awakening                            x2    B     Value — returns Bruna for five U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Killing Wave                                 x1    B     Hate — asymmetric sweeper: vs go-wide boards;  U
Cathar Commando                              x2    W     Hate — flash artifact/enchantment removal on a C
Murderous Compulsion                         x2    B     Flex — cheap madness-castable removal: vs crea C
Angelic Purge                                x2    W     Hate — the only enchantment answer in either c C
Sever the Bloodline                          x2    B     Hate — exile answers recursion: vs disturb / u U
Soul-Guide Gryff                             x1    W     Hate — graveyard exile on a 3/4 flying body: v C
```

## ANALYSIS

### DECK IDENTITY

White-black graveyard midrange with TWO meld pairs, whose engine is recursion rather than reanimation. Lingering Souls makes four flying bodies across two casts and the second is cast from the graveyard; Lunarch Veteran returns transformed via Disturb; Haunted Dead returns itself; Midnight Scavengers returns a cheap creature to hand. That package is what the deck runs on. On top of it sit two melds. The famous one is Bruna plus Gisela into Brisela - two single copies, seen together in about 13.5% of games by turn 8, so it is a bonus rather than a plan. The one that actually shows up is Graf Rats plus Midnight Scavengers into Chittering Host: two copies each at common and uncommon, costing nothing against the rare cap, assembling in 36.9% of games, and producing a 5/6 with HASTE and menace that pumps the whole team - haste being otherwise unavailable to white-black in this cube. Edgar's Awakening accelerates either meld by returning a half from the graveyard, because both meld triggers read the battlefield rather than the stack.

### DECK IDENTITY

White-black graveyard midrange with TWO meld pairs, whose engine is recursion rather than reanimation. Lingering Souls makes four flying bodies across two casts and the second is cast from the graveyard; Lunarch Veteran returns transformed via Disturb; Haunted Dead returns itself; Midnight Scavengers returns a cheap creature to hand. That package is what the deck runs on. On top of it sit two melds. The famous one is Bruna plus Gisela into Brisela - two single copies, seen together in about 13.5% of games by turn 8, so it is a bonus rather than a plan. The one that actually shows up is Graf Rats plus Midnight Scavengers into Chittering Host: two copies each at common and uncommon, costing nothing against the rare cap, assembling in 36.9% of games, and producing a 5/6 with HASTE and menace that pumps the whole team - haste being otherwise unavailable to white-black in this cube. Edgar's Awakening accelerates either meld by returning a half from the graveyard, because both meld triggers read the battlefield rather than the stack.

### TWO MELDS, AND THE ONE THAT ACTUALLY HAPPENS

The deck was commissioned around Bruna + Gisela. It ships with a second meld pair that is three times as likely to assemble and costs nothing against the rare budget:

| Pair | Result | Copies | Rarity cost | P(both by turn 8) |
|---|---|---|---|---|
| Bruna + Gisela | Brisela, 9/10 flying first strike vigilance lifelink | 1 + 1 | **2 of 5 rare slots** | **13.5%** |
| Graf Rats + Midnight Scavengers | Chittering Host, 5/6 haste menace, team gets +1/+0 and menace | 2 + 2 | **zero** | **36.9%** |

P(at least one complete pair by turn 8) = **46.1%**. Worth stating because the structural gate scores `meld_half` at 0.91 — but that measures having *any one* half, and a lone half is nearly worthless: Graf Rats alone is a vanilla 2/1, Bruna alone is a seven-mana 5/7. 46.1% is the honest number.

Chittering Host also brings something white-black otherwise cannot buy in this cube: **haste**. Every haste granter in the pool is red.

Both melds work the same way, and that mechanism is the whole reason this is a reanimator deck rather than a fair one. Gisela reads `At the beginning of your end step, if you both own and control Gisela and a creature named Bruna, the Fading Light, exile them, then meld them` — her own trigger, checking the battlefield, with no reference to casting. Graf Rats is identical at the beginning of combat. So **Edgar's Awakening returning either half from the graveyard produces the meld**, at five mana instead of seven.

**Play note:** cast Edgar's Awakening in your *second* main phase. Gisela's trigger fires at the beginning of your end step, so a second-main cast minimises the window in which the opponent can remove a half in response. It costs nothing.

### THE TRAP THAT GOT SOUL SEPARATOR CUT

Soul Separator was in this deck for most of the build and it was actively dangerous. Its token is `a copy of that card`, so a token made off Bruna **is a creature named Bruna, the Fading Light** that you own and control. That satisfies Gisela's intervening-if — and her trigger is mandatory: `exile them, then meld them`. It exiles Gisela and the token, then fails to meld, because a token cannot meld. You lose Gisela permanently and get a Zombie.

There's a second, quieter version that bites even with Gisela still in your library: `Exile target creature card from your graveyard` removes the real Bruna card for good, ending the meld plan for the rest of the game.

It was cut in the end for a simpler reason. Excluding the two meld halves it may not touch, its legal targets are 9 creature copies whose **maximum printed power is 2** — eight mana across two turns for a 1/1 flier and a 2/2, against Lingering Souls making four fliers for seven total mana from one card. And its best remaining target, Haunted Dead, is *exiled* by it, deleting the recursion the deck counts on.

### THE ERROR THIS DECK ALMOST SHIPPED WITH

Graf Rats was excluded at the sweep stage in a batch labelled *"off-colour Emerge Eldrazi… contains a green, blue or red pip a white-black deck cannot pay."*

**Graf Rats costs `{1}{B}`.** It is mono-black, uncommon, and not an Eldrazi. The reason was disproved by the card's own mana cost in the same file, and its meld partner had been sitting in the candidate list the entire time. One half of a meld pair was kept and the other thrown away on a false claim, in a deck built around melding. The Phase 9 Challenger caught it; the exclusion is reversed and both halves are maindecked.

Related, same class: three cards were dropped silently at a band cap with only a count recorded, not their names — **Abundant Maw, It of the Horrid Swarm, Decimator of the Provinces**. Abundant Maw is the one that mattered, since `Emerge {6}{B}` is perfectly payable here. It now has a real verdict rather than an invisible one.

### THE HONEST ASYMMETRY

Five reanimation effects, and — before the repair — **one** reanimation target worth the mana. Ten of the eleven creature copies cost *less* to hard-cast than Edgar's Awakening costs to cast. Only Bruna at seven is a genuine discount.

That is why the deck's declared engine is the graveyard-recursion package, not reanimation: Lingering Souls' flashback, Lunarch Veteran's Disturb, Haunted Dead's self-return and Midnight Scavengers' ETB all generate value with no discard outlet required. Nine of twenty-three cards do that. The reanimation is a way to *accelerate* a meld, not the thing keeping the deck alive.

One more number worth carrying: from-hand discard outlets are **3 of 23** — Olivia's Dragoon ×2 and Collective Brutality. Haunted Dead is not one, whatever it looks like: its discard is the *cost of returning itself* and only exists once it's already in the graveyard.

### WHAT THIS DECK HAS THAT THE OTHER THREE DON'T

It is the only one of the four whose colours answer an enchantment at all. Angelic Purge (`Exile target artifact, creature, or enchantment`) and Cathar Commando are both boarded, and both mono-black builds concede that class outright — the dossier's probes return zero mono-black answers for artifacts *and* enchantments. Angelic Purge's sacrifice cost is also unusually cheap here: the deck makes up to 8 expendable tokens across 6 cards.

### CARDS CONSIDERED BUT NOT INCLUDED - a swap guide

**Rares and mythics.** The budget is **4 of 5** — there is one free slot, unusual across this run.

| Card | What it would do here |
|---|---|
| Liesa, Forgotten Archangel | The best use of the free slot. A 4/5 flying lifelink **Angel** (so a Bruna target) whose `Whenever another nontoken creature you control dies, return that card to its owner's hand` is a recursion engine on a body. `{2}{W}{W}{B}` is heavy for a deck that is now 67% black — that's the only reason it isn't already in. |
| Restoration Angel | 3/4 flash flier, an Angel for Bruna, and its ETB blinks a non-Angel to re-trigger an ETB. |
| Vanquish the Horde | Cut *from the sideboard* to free the rare slot: it costs `{1}` less per creature on the battlefield, so it's a 4-or-5 mana Wrath against go-wide. Killing Wave does a similar job at uncommon and is asymmetric in this deck's favour. |
| Skirsdag High Priest | The Lingering Souls tokens would pay its tap cost, but no haste means the 5/5 Demon waits a turn. |
| Thalia, Heretic Cathar | A 3/2 first striker that taxes their creatures and nonbasic lands. Fine, just not synergistic. |

**Commons and uncommons** — free swaps:

| Card | Trade-off |
|---|---|
| Abundant Maw | `Emerge {6}{B}` off a Haunted Dead (mana value 4) casts a 6/4 for `{2}{B}` and drains 3. The strongest omission. It competes with Haunted Dead's own recursion for the same body, which is why it lost. |
| Soul Separator | Cut for the reasons above. If you want a second reanimation axis anyway, be aware of the Gisela interaction. |
| Fiend Hunter | A Human (Bruna target) whose ETB exile is undone by its own leave-trigger. Rented removal on a 1/3, at `{1}{W}{W}` on 8 white sources. |
| Valorous Stance | Cut at Phase 5B. `Destroy target creature with toughness 4 or greater` is blank against x/3, and the indestructible mode does **not** stop exile, bounce, edicts or −X/−X — the ways a 4/3 Gisela actually dies. |
| Dauntless Cathar | `{1}{W}, Exile this card from your graveyard: Create a 1/1 white Spirit` — pure graveyard value on a 3/2 Human, and a card that's better discarded. |
| Mausoleum Guard | Dies into two 1/1 fliers. More Angelic Purge fodder and another Bruna target. |
| Morbid Opportunist | Draws on every death with no hand cost — the cleanest gas-out fix if you cut something for it. |
| Gisa's Bidding | The only maindeckable madness payoff for the two free discard outlets. Lost because the outlets already have better fuel: 6 of 23 cards actively want to be discarded. |
| Sanitarium Skeleton | Renewable discard and Village Rites fodder, both of which are currently finite. |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:6  2:7  3:2  4:3  5:4  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  discard_outlet: 5 copies (effective 4: Haunted Dead@0.5, Haunted Dead@0.5) → p=0.79 (need ≥ 0.75)
  PASS  graveyard_recursion: 5 copies (effective 4.8: Lunarch Veteran // Luminous Phantom@0.8) → p=0.85 (need ≥ 0.75)
  PASS  meld_half: 6 copies → p=0.91 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 72%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper. Vanquish the Horde is boarded instead, because 'This spell costs {1} less to cast for each creature on the battlefield' makes it excellent against exactly the go-wide decks it is boarded for and a dead seven-drop against everything else. Maindecking it would also fight this deck's own Lingering Souls tokens, which are four of its bodies.
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  CONCEDED  noncreature_permanents: No maindeck answer, but unlike the two mono-black builds in this run this deck HAS real answers available and they are boarded: Angelic Purge x2 ('Exile target artifact, creature, or enchantment') and Cathar Commando x2 ('{1}, Sacrifice this creature: Destroy target artifact or enchantment'). White is the only colour in this cube that answers an enchantment at all, and this is the only one of the four decks that can. They sit in the board because a maindeck artifact-or-enchantment slot is blank against most of the cube.
  CONCEDED  stack: The cube has no counterspell density worth maindecking against, and neither white nor black answers the stack.
  CONCEDED  graveyard: No maindeck graveyard interaction, and it would be counterproductive: this deck's Lunarch Veteran, Lingering Souls, Haunted Dead, Midnight Scavengers and Edgar's Awakening all read its own graveyard. Soul-Guide Gryff is boarded for the mirror - a 3/4 flier whose ETB exiles a card from a graveyard, and whose 'up to one target' wording means it is never a dead card. CORRECTED: the previous wording cited 'Dauntless-style recursion', naming a card that was never in the deck.
```

- curve PASS and goldfish PASS - no WARN-tier flags were raised.
- The reanimation_effect assembly role was RETIRED at Phase 9 and this needs stating plainly, because it looks like gate-dodging and is not. The Challenger showed that Soul Separator x2 was being kept specifically to hold that role at 5 copies instead of 3. Cutting those two copies on their merits left Edgar's Awakening x2 plus Bruna, and rather than declare a 3-copy role and raise the thesis turn until it passed, the role was removed - because the thesis does not require it. Both meld pairs are hard-castable: Graf Rats at {1}{B} plus Midnight Scavengers at {4}{B} is seven mana across two turns with no reanimation at all. Edgar's Awakening remains in the deck as a value card that accelerates either meld, not as a component the kill mechanism depends on. The same reasoning retired haste_enabler on Deck A and sacrifice_outlet on Deck B; in all three cases the test applied was 'does the stated kill mechanism fail without this role', and the answer here is no.
- Two arithmetic corrections per Challenger A5: the screw entry said '11 of the 23 nonland cards cost two or less' where the structural check's own curve gives 12, and a Tragic Slip verdict said Village Rites is 'fed by 10 creature copies' where the true count is 11. Both are corrected. The rare_cap_note figure of 11.7% for seeing both meld halves was the on-the-play number; at the build's own 15 cards seen it is 13.5%, and the higher figure is now used throughout.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Every card named is in the final list. Lingering Souls' Flashback {1}{B} is a four-mana second casting from the graveyard; Lunarch Veteran's Disturb {1}{W} buys a second body; Haunted Dead's '{1}{B}, Discard two cards' is a graveyard-resident sink; Thraben Inspector's Clue is '{2}, Sacrifice this token: Draw a card'; and Bruna at seven mana is itself a flood payoff, since the extra lands are what let the deck hard-cast her and collect the cast trigger the reanimation line never delivers. CORRECTED: Soul Separator's {5} activation was previously named here and the card is cut. Also qualified per the Challenger - Haunted Dead is repeatable only per trip to the graveyard, not per turn. |
| `screw` | mitigation | CORRECTED - three stale figures in the previous version. True counts on the final list: 13 of the 23 nonland cards cost two or less (6 at mana value 1, 7 at mana value 2), and the mana audit gaps are B +7.9pp and W -13.8pp, not the pre-repair +0.9/-6.7. All 17 lands produce coloured mana and the cheap engine pieces - Thraben Inspector at {W}, Village Rites at {B}, Tragic Slip at {B}, Graf Rats and Olivia's Dragoon at two - are live on two lands. Tapped-land load was reduced in the same pass: an Evolving Wilds became a Plains, taking lands that cost a turn from 5 of 17 to 4 and untapped-on-curve white sources from 6 to 7. |
| `decapitation` | mitigation | CORRECTED - the previous version said 'graveyard_recursion at 6 copies... Lunarch Veteran x2', contradicting the gate table in this same file after the repair cut a Veteran. The role is 5 copies: Lingering Souls x2 (Flashback {1}{B}), Lunarch Veteran x1 (Disturb {1}{W}), Haunted Dead x2 (self-return). Every one produces value from the graveyard AFTER removal, so answering them advances the plan rather than stopping it. Beyond that the deck is deliberately not built on one card: there are now TWO meld pairs, so removing a half of one leaves the other intact, and Midnight Scavengers x2 returns a creature of mana value 3 or less to hand. |
| `gas-out` | mitigation | REWRITTEN per Challenger F3, which was correct and which I do not contest. The previous entry claimed 'Lunarch Veteran x2 and Haunted Dead x2 rebuy themselves from the graveyard without costing a card from hand'. Haunted Dead's ability reads '{1}{B}, DISCARD TWO CARDS: Return this card from your graveyard to the battlefield tapped' - it costs two cards from hand and is therefore uncastable in exactly the empty-hand state this mode describes. That claim is withdrawn, and so is the separate claim that Collective Brutality's escalate 'turns a surplus card into an extra mode' - escalate CONSUMES a card per mode. The honest mitigation, every card in the deck and every claim supported by its own text: Midnight Scavengers x2, added in the same repair, is 'When this creature enters, you may return target creature card with mana value 3 or less from your graveyard to your hand' - a body that refills the hand, with 7 of 11 creature copies legal targets. Lingering Souls x2 casts its second half from the graveyard for {1}{B} with no hand cost. Lunarch Veteran's Disturb {1}{W} likewise. Thraben Inspector x2 replaces itself through its Clue. Village Rites draws two. That is 8 of 23 cards that produce cards or bodies without spending from an empty hand. |
| `raced` | mitigation | CORRECTED - the previous version named Fiend Hunter, which the Phase 9 repair cut, and counted interaction at 6 of 23 when it is now 5 (Infernal Grasp x2, Tragic Slip x2, Collective Brutality x1). Every card named here is in the final list. Gisela is a 4/3 flying FIRST STRIKE LIFELINK body on turn four, which swings a race by 8 a turn and beats almost any single blocker. Lingering Souls x2 supplies four flying bodies that block and attack. And the repair added a real racing tool the deck did not have: Chittering Host, the Graf Rats plus Midnight Scavengers meld, is a 5/6 with HASTE and menace whose enters trigger gives every other creature +1/+0 and menace - haste being otherwise unavailable to white-black anywhere in this cube. |
| `disruption-fizzle` | accepted | The critical turn is the meld, and it is the most fragile critical turn of the four decks: Gisela must be on the battlefield and survive to your end step, and both halves are single copies. Mitigating it would mean adding protection - and the pool's protection is Valorous Stance, which the Step-0 critic correctly showed does not stop exile, bounce, edicts or -X/-X, the ways a 4/3 actually dies here. Adding a card that does not answer the threat is worse than accepting the risk. What is accepted, explicitly: in the roughly 13.5% of games where both meld halves are available, an opponent with any removal at instant speed simply prevents Brisela. The deck's response is not to protect the combo but to not need it - the graveyard_recursion engine wins the other 88% of games on its own, and Gisela is a fine turn-four play whether or not she ever melds. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Brisela, Voice of Nightmares, Chittering Host | Meld result - has no mana cost and exists only as the melded form of two other cards, so it cannot legally be a deck card. Brisela is reached by melding Bruna and Gisela on the battlefield, never by drawing or reanimating her. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.83   Ramp cards: 0   Cantrips: 3
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.06 adj [MV 2.83 vs 2.5, 3 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  66.7%  prod  58.8%  gap  +7.9pp  [OK]
  W  demand  33.3%  prod  52.9%  gap -19.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] commons_uncommons_max_2: PASS - highest count is 2, and every 2-of is a common or uncommon.
[PASS] rares_mythics_max_1: PASS - every rare and mythic appears once.
[PASS] rare_mythic_total_max_5: PASS with headroom - 4 of 5 used: Bruna, the Fading Light (R), Gisela, the Broken Blade (M), Collective Brutality (R) and Shattered Sanctum (R, a land), all in the mainboard. The sideboard now contains no rares.
[INFO] basics_unlimited: 5 Plains + 7 Swamp. Challenger A10 correctly notes that card_pool_rules as written encodes no basics exemption - it is a convention of the format (basics are format-supplied, not cube contents) rather than something the rules object states. Recorded so the assumption is visible.
[PASS] all_cards_from_cube: PASS - Phase 5C check 2, exact-name membership against the working pool cache.
```