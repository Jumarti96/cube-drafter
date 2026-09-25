---
deck_name: "wu-merfolk-tap-trigger-aggro"
cube_id: "ecl"
cube_slug: "ecl"
colors: "WU"
format: "40-card"
built_at: "2026-08-09T17:19:31Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  7x Plains                   basic
  5x Island                   basic
  2x Eclipsed Realms          taps for {C}; any colour only for Merfolk spells
  2x Idyllic Beachfront       WU dual, always enters tapped
  1x Hallowed Fountain        WU dual, may pay 2 life to enter untapped (R)
```

### CREATURES (18)

```
CMC  Card                              Qty   Color  Role                                    Rar
1    Wanderbrine Trapper               x2    W      Enabler/Outlet                          U
2    Deepchannel Duelist               x2    WU     Threat/Payoff                           U
2    Deepway Navigator                 x1    WU     Threat/Payoff                           R
2    Encumbered Reejerey               x1    W      Threat/Payoff                           U
2    Silvergill Mentor                 x2    U      Threat/Payoff                           U
2    Sygg, Wanderwine Wisdom // Sygg…  x1    C      Threat/Payoff                           R
2    Wanderbrine Preacher              x1    W      Threat/Payoff                           C
3    Adept Watershaper                 x1    W      Threat/Payoff                           R
3    Meanders Guide                    x1    W      Threat/Payoff                           U
3    Silvergill Peddler                x1    U      Threat/Payoff                           C
3    Tributary Vaulter                 x2    W      Threat/Payoff                           C
4    Champions of the Shoal            x1    U      Threat/Payoff                           R
4    Pestered Wellguard                x2    U      Threat/Payoff                           U
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                              Qty   Color  Role                                    Rar
3    Crib Swap                         x2    W      Interaction                             U
3    Protective Response               x1    W      Interaction                             U
```

### OTHER SPELLS (2)

```
CMC  Card                              Qty   Color  Role                                    Rar
1    Springleaf Drum                   x2    C      Engine/Infrastructure                   U
```

## SIDEBOARD (10)

```
Card                              Qty   Color  Role / When to board in                       Rar
Rooftop Percher                   x2    C      Hate: graveyard                               C
Keep Out                          x2    W      Hate: enchantments                            C
Pyrrhic Strike                    x2    W      Hate: artifacts + enchantments + fatties      U
Spell Snare                       x2    U      Flex: stack interaction                       U
Glamermite                        x2    U      Flex: answers evasion                         C
```

## ANALYSIS

### DECK IDENTITY

A WU Merfolk aggro deck in which combat itself is the engine. Attacking taps creatures, and this list holds 8 'whenever this creature becomes tapped' copies across 6 distinct Merfolk (Encumbered Reejerey, Wanderbrine Preacher, Silvergill Peddler, Tributary Vaulter x2, Pestered Wellguard x2, Champions of the Shoal), so every attack fires free value on top of its damage. Adept Watershaper's 'Other tapped creatures you control have indestructible' removes the usual cost of attacking with small bodies, so the deck can attack with everything every turn regardless of the block. The build was locked under a reach-and-evasion lens: the triggers are spent on flying tokens, unblockability and tapping down blockers rather than on grindy value, so the damage the free taps generate actually connects.

### HOW THE ENGINE ACTUALLY WORKS

The deck's whole claim rests on a fact that is easy to state wrong, so state it precisely: **attacking taps a creature, and tapping is what fires the payoff.** Untapping does not. This matters because two of the deck's best cards — Deepchannel Duelist and Deepway Navigator — are *untappers*, and it is tempting to describe them as trigger engines. They are not. They are the cards that let a tapped board come back to defend, and that let a creature be tapped a second time by something else.

So the list carries two separate things:

| Layer | Cards | Copies |
|---|---|---|
| **Becomes-tapped payoffs** | Encumbered Reejerey, Wanderbrine Preacher, Silvergill Peddler, Tributary Vaulter x2, Pestered Wellguard x2, Champions of the Shoal | 8 copies / 6 names |
| **Repeatable non-combat tap outlets** | Springleaf Drum x2, Wanderbrine Trapper x2 | 4 |
| **Combat-gated tap outlet** | Meanders Guide | 1 |
| **One-shot tap outlet** | Protective Response (convoke) | 1 |
| **Untappers (enable a second tap, fire nothing themselves)** | Deepchannel Duelist x2, Deepway Navigator | 3 |

The four repeatable outlets are what make the deck function on turns where attacking is bad. Springleaf Drum taps Silvergill Peddler at instant speed: you loot and you get a mana. Wanderbrine Trapper taps a payoff *and* taps down the blocker you were worried about, for one mana.

### THE INTERACTION WORTH KNOWING

**Adept Watershaper plus attacking is the deck.** `Other tapped creatures you control have indestructible` covers 17 of the 18 creature copies the moment they attack — the only exclusion is Watershaper itself. A 1/3 Tributary Vaulter attacking into a 5/5 is normally a mistake; here it deals its damage, fires its trigger, and does not die. The block math that usually restrains a deck of 2/1s and 1/3s simply does not apply.

Two honest limits: indestructible does nothing against **exile** or **-X/-X**, and it does nothing while **blocking**, because blockers do not tap.

### THE DECAPITATION ANSWER THE GRILL FOUND

Adept Watershaper is a rare and rares are capped at one copy, so the first draft of this deck accepted decapitation as unmitigable. That was wrong, and the Phase 9 Challenger caught it: **Meanders Guide is an uncommon that reads `return target creature card with mana value 3 or less from your graveyard to the battlefield`, and Adept Watershaper costs exactly 3.** 15 of the 18 creature copies are within its range. The keystone is rebuyable at zero rare cost — this was the single best finding of the grill and it changed the list.

### SEQUENCING NOTE

Deepway Navigator has flash. The strong line is to attack with everything, let blocks and damage resolve, and *then* flash it in during the second main phase or on the opponent's turn — `When this creature enters, untap each other Merfolk you control` turns an all-out attack into an all-out attack that still has blockers. Its anthem clause (`as long as you attacked with three or more Merfolk this turn`) is checked continuously, so it is live for the rest of that turn even though Navigator was not itself in the attack.

### THE 5-RARE BUDGET

The cap is spent as: Adept Watershaper, Deepway Navigator, Champions of the Shoal, Sygg, and **Hallowed Fountain**. Spending the fifth slot on a *land* is a real decision and deserves defending: this deck has three `{W}{U}` two-drops (Deepchannel Duelist x2, Deepway Navigator) plus Sygg at mana value 2, and Hallowed Fountain is the only WU dual in the entire pool that can enter untapped. The other two duals always enter tapped. Because the cap is fully spent mainboard, **the sideboard contains zero rares by construction** — every sideboard card had to be a common or uncommon.

### DATA GAP, DISCLOSED

Sygg has `mana_cost: null` in the cube data, as do all 7 double-faced cards in this cube — power and toughness are null too. The mana audit was run with an explicit `{W}{U}` proxy rather than silently dropping the card. Recomputed sensitivity: a true cost of `{1}{U}` shifts the W:U split by 1.7pp and `{1}{W}` by 2.5pp. Neither changes the 17-land count, and neither pushes a colour gap past the 15pp threshold. No claim is made anywhere about Sygg's body size, because the data does not support one.

### NARROWEST MARGIN

The blue colour gap is **-12.9pp** (demand 40.0%, production 52.9%). That is inside the 15pp threshold and the audit passes, but it is the tightest number in the build, and it widened from -8.9pp when the Phase 9 repairs swapped two blue cards for two white ones. If this list is iterated further in white, the manabase needs revisiting before anything else does.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:4  2:8  3:8  4:3
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 14 copies (effective 12.85: Champions of the Shoal@0.75, Deepway Navigator@0.6, Sygg, Wanderwine Wisdom // Sygg, Wanderbrine Shield@0.8, Meanders Guide@0.7) → p=0.99 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.5: Protective Response@0.5) → p=0.88 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 59%  T2 96%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in this list. Adept Watershaper's 'Other tapped creatures you control have indestructible' means this deck never needs to block profitably - it races, and Wanderbrine Trapper plus Champions of the Shoal remove exactly one blocker per turn. Adding a sweeper would mean cutting attackers, which is the clock the whole thesis rests on.
  OK        single_large_threat: Crib Swap, Protective Response, Champions of the Shoal
  CONCEDED  noncreature_permanents: Mainboard carries no artifact/enchantment answer; Keep Out's 'Destroy target enchantment' mode is a sideboard card. Maindecking it would trade an attacker for a mode that is blank against the cube's creature decks.
  CONCEDED  stack: No mainboard counterspell. This deck taps out on its own turn to add bodies; holding up Spell Snare directly contradicts the curve-out the turn-5 goldfish requires. Spell Snare is in the sideboard for the matchups where that trade is correct.
  CONCEDED  graveyard: Graveyard interaction is the cube's densest class (39 cards, density 0.150) and the pool DOES contain a W/U-castable answer - Rooftop Percher, 'exile up to two target cards from graveyards' - so scarcity is not the reason. (The dossier's graveyard_hate probe returns an empty list; per census_caveat that 0-match is a probe failure, not a fact, and it is not relied on here.) The real cost is the slot: Rooftop Percher costs {5} against this list's 2.435 average mana value and a turn-5 thesis, so maindecking 2 copies adds two cards above the curve at exactly the turn the deck is meant to be lethal. It is therefore conceded mainboard and answered from the sideboard, where it is boarded in against the grindy decks whose plan makes the extra turn affordable.
```

No WARN flags were raised on either run - curve, assembly, goldfish and coverage all returned PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Excess lands are converted by Wanderbrine Trapper x2, whose '{1}, {T}, Tap another untapped creature you control' is a genuine mana sink that turns surplus mana into a tap trigger, and by Silvergill Peddler's 'draw a card, then discard a card' on every tap, which trades flooded draws for action. (Springleaf Drum was previously named here in error - it PRODUCES mana and costs none, so it converts surplus creatures, not surplus lands.) At 17 lands and avg MV 2.435 there is also no dead top-end to flood into: the highest mana value in the list is 4. |
| `screw` | mitigation | Two-land hands are keepable: 12 of the 23 nonland cards cost 2 or less (MV1 4 + MV2 8; this was 13 before the Phase 9 repair moved the curve, and the stale figure has been corrected). The goldfish check on the repaired list reports 87% keepable hands and three lands by turn 3 in 88% of games. Springleaf Drum ('Add one mana of any color') both accelerates and fixes off two lands, and Silvergill Peddler's loot digs. Hallowed Fountain, Idyllic Beachfront x2 and Eclipsed Realms x2 mean a two-land keep is very rarely colour-screwed. |
| `decapitation` | mitigation | Adept Watershaper is a single copy and cannot be doubled - it is a rare and rares are capped at 1. The Phase 9 grill found the answer the first draft missed: Meanders Guide x1, an UNCOMMON, reads 'return target creature card with mana value 3 or less from your graveyard to the battlefield', and Adept Watershaper is MV 3 - so the keystone is rebuyable at zero rare cost, along with 15 of the 18 creature copies. Failing that, the deck does not need Watershaper to win, only to win more cheaply: the 18-creature board with Deepchannel Duelist's anthem still presents a clock roughly a turn slower. |
| `gas-out` | mitigation | Silvergill Peddler ('draw a card, then discard a card' on every tap) and Sygg's granted 'Whenever this creature deals combat damage to a player or planeswalker, draw a card' are the refuel. Board-based refill matters more here: Pestered Wellguard makes a 1/1 flying Faerie on every tap and Silvergill Mentor arrives with a 1/1 Merfolk token, so an empty hand still adds power each turn. resource_exchange Cards: Net-Positive count in this list is 0 and Self-Replacing is 0 - this deck genuinely wins from the board, not from cards, which is why the token-per-tap effects carry the mode. |
| `raced` | mitigation | Against the fastest clocks in the threat profile (the 41-card evasion class and R/B aggro), Adept Watershaper's indestructible applies only to tapped creatures, so it does not help while blocking - but Champions of the Shoal is a 4/6 wall that also taps and stuns an attacker on arrival, Wanderbrine Trapper taps an attacker down pre-combat, and Crib Swap x2 exiles the biggest clock at instant speed. Tributary Vaulter (1/3 flier) and Pestered Wellguard's Faerie tokens block the evasive half. |
| `disruption-fizzle` | mitigation | The critical turn is an alpha strike, not a spell, so a counterspell has no target. A removal spell mid-combat is answered by Adept Watershaper making tapped attackers indestructible, and by Deepway Navigator's flash ('When this creature enters, untap each other Merfolk you control'), which can be held up to untap the team for blocks after an attack is disrupted. The plan retries next turn because the payoffs are permanents, not a one-shot chain. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Winnowing | Convoke tribal sweeper, but it makes each player sacrifice creatures not sharing a type with a chosen creature - this deck's board is already one tribe, so it mostly reads as a symmetric wipe that a go-wide opponent survives too; costs a rare slot at six mana in a turn-5 aggro deck. |
| Harmonized Crescendo | 'Draw a card for each permanent you control of that type' is real card advantage, but at {4}{U}{U} it is a top-end payoff for a grindy build, not a turn-5 clock; costs one of the 5 rare slots. |
| Disruptor of Currents | Flash convoke bounce on a 3/3 for {3}{U}{U} - a tempo card whose rare slot is better spent on Adept Watershaper or Deepway Navigator, which the kill mechanism actually depends on. |
| Wanderwine Farewell | {5}{U}{U} even with convoke; a seven-mana bounce spell does not advance a goldfish-turn-5 plan. |
| Unexpected Assistance | Convoke 'Draw three cards, then discard a card' is the best refuel in the colors, but at 5 MV it lifts avg MV and the aggro slot table gives Engine/Infra only 0-10%. |
| Lofty Dreams | Convoke aura granting +2/+2 and flying with an ETB cantrip - aura-based, so a removal spell two-for-ones the deck; this list already has flying on Tributary Vaulter and Pestered Wellguard's tokens. |
| Omni-Changeling | Convoke copy-any-creature, but a 0/0 that must find something worth copying; the deck's own best creatures are 2/2s and 4/6s, so it is a worse Merfolk than the cards it copies. |
| Sun-Dappled Celebrant | Convoke 5/6 vigilance - vigilance means attacking never taps it, so it generates zero tap triggers and is a pure body. |
| Kithkeeper | 'Tap three untapped creatures you control' is a genuine tap outlet, but the card costs {6}{W} and its Vivid token count keys off colors among permanents; this deck runs 2 colors, so it makes 2 tokens. |
| Illusion Spinners | 'Hexproof as long as it's untapped' is anti-synergy: this deck's plan taps its creatures every turn, so the protection is off exactly when it matters. |
| Blossombind | 'Enchanted creature can't become untapped and can't have counters put on it' - a removal aura, but the deck wants opposing creatures untapped is false; it is simply outclassed by Crib Swap at one more mana for exile. |
| Spiral into Solitude | Pacifism plus a blight-1 sacrifice to exile; the exile mode costs {1}{W} plus a -1/-1 counter on your own creature, which fights Encumbered Reejerey's counter-removal clock. |
| Pyrrhic Strike | 'Destroy target creature with mana value 3 or greater' misses the format's cheap creatures; the blight-2 additional cost puts counters on this deck's own board. |
| Liminal Hold | Catch-all exile for {3}{W}, but 4 MV in an aggro list and it is an enchantment, so it is undone by the pool's enchantment removal. |
| Loch Mare | A 4/5 for {1}{U} with three -1/-1 counters and two counter-removal abilities; it is not a Merfolk, so Deepchannel Duelist's lord, Deepway Navigator's untap and Meanders Guide's tap outlet all miss it - and it costs a mythic slot. |
| Rimefire Torque | Charge counters on tribal ETBs into an instant/sorcery copy; this list has 6 instants/sorceries out of 23 nonlands, so the payoff misses two thirds of the deck and costs a rare slot. |
| Stalactite Dagger | Makes a changeling token and grants all creature types, which does turn on Merfolk lords - but equip {2} plus the 2 to cast is 4 mana for +1/+1 and no tap trigger. |
| Personify | Blinks your own creature and makes a changeling token; the blink untaps nothing useful because the creature returns untapped only after leaving combat, and the deck has no ETB payoffs worth re-triggering. |
| Thirst for Identity | 'Draw three cards. Then discard two cards unless you discard a creature card' - good refuel, but Silvergill Peddler already loots for free on every attack. |
| Run Away Together | Symmetric bounce that must hit a creature you control; this deck does not want its own attackers returned. |
| Rimekin Recluse | 3/2 ETB bounce for {2}{U}, but it is an Elemental Wizard, not a Merfolk, so it is outside every lord and untap effect in the list. |
| Flock Impostor | Changeling flash flyer that bounces your own creature; the changeling body does get Deepchannel Duelist's +1/+1, but it has no tap trigger and its ETB is a tempo loss. |
| Glen Elendra's Answer | Counter all opposing spells and abilities - a mythic slot for a reactive card in a deck whose plan is to attack; the token count depends on the opponent holding up multiple spells. |
| Kinbinding | '+X/+X where X is the number of creatures that entered this turn' at {3}{W}{W} - the anthem for a token deck (Path C), not for a 13-creature aggro list that plays one or two creatures a turn. |
| Ajani, Outland Chaperone | '-2: deals 4 damage to target tapped creature' fits the tap theme, but the +1 makes Kithkin, not Merfolk, and a mythic slot at {1}{W}{W} competes with Adept Watershaper. |
| Timid Shieldbearer | '{4}{W}: Creatures you control get +1/+1 until end of turn' - a 5-mana activation in a deck that wants to spend mana on Springleaf Drum activations and removal. |
| Kinscaer Sentry | Attack trigger cheats a creature into play tapped and attacking - which is a tap trigger - but it is a Kithkin, outside every Merfolk lord, and costs a rare slot. |
| Gathering Stone | 'Spells you cast of the chosen type cost {1} less' - 13 of 23 nonland cards would be Merfolk spells, a real count, but at 4 MV the discount arrives after the curve it is meant to help. |
| Foraging Wickermaw | Surveil 1 and a mana ability, but it is a Scarecrow artifact creature outside the Merfolk lords and adds no tap trigger. |
| Appeal to Eirdu | Convoke +2/+1 combat trick - the convoke tap does fire triggers, but it is a pure trick with no board, and Riverguard's Reflexes does the same job for two mana while untapping. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.43 adj [MV 2.43 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  40.0%  prod  52.9%  gap -12.9pp  [OK]
  W  demand  60.0%  prod  64.7%  gap  -4.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1a mainboard size                40 == 40
  [PASS] 1b sideboard size                10 == 10
  [PASS] 2 exact-name membership          missing=[]
  [PASS] 3 copy limits                    violations=[]
  [PASS] 3b rare/mythic cap <=5           total=5 -> ['Adept Watershaper', 'Champions of the Shoal', 'Deepway Navigator', 'Hallowed Fountain', 'Sygg, Wanderwine Wisdom // Sygg, Wanderbrine Shield']
  [PASS] 4 colour usability               unusable=[]
  [PASS] 5 splash cap                     no splash colors
  [PASS] user constraint: max 5 rares/mythics across mainboard + sideboard
  [PASS] basic lands treated as format-supplied and exempt from copy limits
```
