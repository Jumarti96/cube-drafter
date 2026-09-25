---
deck_name: "gw-kithkin-winnowing"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GW"
format: "40-card"
built_at: "2026-08-09T16:33:27Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x2    Forest                         2 of the 5 green sources; only 2 cards need a hard G
x11   Plains                         11 of the 14 white sources (91% pip demand)
x1    Evolving Wilds                 fetches a basic tapped; floats to either colour
x2    Radiant Grove                  GW dual, always enters tapped
x1    Temple Garden                  the pool's only untapped-capable dual (pay 2 life)
```

### CREATURES (12)

```
CMC  Card                           Qty   Color  Role                           Rar
1    Goldmeadow Nomad               x2    W      Returns as a token from the ya C
1    Kinsbaile Aspirant             x2    W      1-drop Kithkin; behold, no exi U
2    Eclipsed Kithkin               x2    WG     Hybrid body; digs 4 deep       U
2    Timid Shieldbearer             x2    W      Repeatable team anthem         C
4    Champion of the Clachan        x1    W      Static anthem; eats a token    R
4    Gallant Fowlknight             x2    W      Team pump + Kithkin first stri C
5    Mistmeadow Council             x1    G      Only card draw; Kithkin discou C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                           Qty   Color  Role                           Rar
3    Brigid's Command               x1    WG     Copies a Kithkin; 2 modes      R
3    Crib Swap                      x2    W      Unconditional exile            U
3    Protective Response            x2    W      Convoked removal               U
3    Pyrrhic Strike                 x1    W      Only answer to a noncreature   U
6    Winnowing                      x1    W      Matchup-dependent one-sided re R
```

### OTHER SPELLS (4)

```
CMC  Card                           Qty   Color  Role                           Rar
2    Stalactite Dagger              x1    C      Wrath-proof; makes a changelin C
3    Ajani, Outland Chaperone       x1    W      Wrath-proof token engine       M
3    Clachan Festival               x2    W      Wrath-proof; 2 tokens + sink   U
```

## SIDEBOARD (10)

```
Card                           Qty   Color  Role / When to board in                        Rar
Rooftop Percher                x2    C      vs graveyard decks (39-card class) AND vs flie C
Flock Impostor                 x2    W      vs fliers -- flash changeling flier; its ETB r U
Chomping Changeling            x2    G      vs artifacts/enchantments; a changeling body,  U
Unforgiving Aim                x2    G      vs fliers and enchantments. PILOT RULE: never  C
Spiral into Solitude           x2    W      vs a single large blocker or attacker -- 2 man C
```

## ANALYSIS

### DECK IDENTITY

A GW Kithkin tribal midrange deck that kills with a CUMULATIVE anthem stack over a wide, uniformly-typed token board. Champion of the Clachan's static 'Other Kithkin you control get +1/+1' persists across turns; Timid Shieldbearer x2 repeat '{4}{W}: Creatures you control get +1/+1' every turn there is spare mana; Gallant Fowlknight x2 closes with 'creatures you control get +1/+0 ... Kithkin creatures you control also gain first strike'. Five anthem effects across 23 nonland cards, fed by five token producers. All 12 creature copies are Kithkin-typed, which makes Winnowing a free reset -- but Winnowing is a MATCHUP-DEPENDENT reset, not the kill mechanism: see winnowing_asymmetry_ledger.

### WHAT THIS DECK ACTUALLY KILLS WITH — AND THE CLAIM I HAD TO RETRACT

This deck was built around the idea that Winnowing is a one-sided wrath. The self-grill proved that claim was **half-counted**, and the record now says so plainly.

Winnowing reads: *"For each player, you choose a creature that player controls. Then each player sacrifices all other creatures they control that don't share a creature type with the chosen creature they control."* My side of that verifies perfectly — **12 of 12 creature copies are Kithkin**, so I sacrifice zero. But the opponent's side was never counted. The dossier says:

| Fact | Value |
|---|---|
| `Tribal/Kindred` share of the cube | **120 of 260 nonland cards (46.2%)** — the largest tag |
| Tribes with 11+ playables | **13** (Elemental 32, Elf 27, Warrior 23, Goblin 21, Merfolk 19, Kithkin 19, …) |
| Changelings in the pool (survive regardless) | **13** |

Against a **single-tribe** board, every creature shares a type with whichever one I name, and Winnowing kills **zero**. It is an excellent card against multi-tribe and untribal boards and a blank against mono-tribe — a matchup-dependent reset, not a win condition.

**So what wins?** A cumulative anthem stack — five anthem effects across 23 nonland cards:

| Card | Copies | Effect | Persistence |
|---|---|---|---|
| Champion of the Clachan | 1 | "Other Kithkin you control get +1/+1" | **Static** — never resets |
| Timid Shieldbearer | 2 | "{4}{W}: Creatures you control get +1/+1" | Repeatable every turn |
| Gallant Fowlknight | 2 | "+1/+0 … Kithkin creatures also gain first strike" | One-shot closer |

That stack has to be answered five separate times, which is why the deck grinds.

### THE ENGINE IS DELIBERATELY NOT MADE OF CREATURES

The Midrange slot bands allocate **0%** to Engine. This deck runs **4 of 23** there, and the reason is mechanical: my own Winnowing sacrifices *creatures*. A build that spends every slot on creatures buys one turn and owns nothing after it. These four are structurally immune to my own reset:

- **Ajani, Outland Chaperone** — a planeswalker. "+1: Create a 1/1 green and white Kithkin creature token", every turn, for free.
- **Clachan Festival ×2** — enchantments. Two tokens on entry, then "{4}{W}: Create a 1/1 …" forever.
- **Stalactite Dagger** — an artifact. "When this Equipment enters, create a 1/1 colorless Shapeshifter creature token with changeling."

`Goldmeadow Nomad` ×2 crosses the wrath from the *other* side — "{W}, Exile this card from your graveyard: Create a 1/1 …" works precisely because a card in the graveyard is not a creature I control.

### CHAMPION OF THE CLACHAN EATS A TOKEN, ABOUT 70% OF THE TIME

Its additional cost is *"behold a Kithkin **and exile it**."* A 1/1 Kithkin token is a legal choice, and since "return the exiled card" does nothing for a token, the cost is genuinely free — you convert a spare 1/1 into a permanent anthem. The honest qualifier: that requires a token to exist. Token producers are **5 of 23 nonland cards**, giving p ≈ **0.700** by turn 4. In the other ~30% you exile a real card and get it back only when Champion leaves.

### TYPED PURITY IS A REAL CONSTRAINT, AND IT COSTS SOMETHING

Zero off-type bodies, mainboard and sideboard — every sideboard creature is a changeling, so purity survives boarding. That discipline has a price: **`Dawn's Light Archer`** (4/2 flash reach) is the pool's cleanest answer to the cube's 41-card evasion class, and it is excluded solely because it is a Creature — **Elf** Archer. `Rooftop Percher` and `Flock Impostor` do the same job as changelings instead.

One pilot rule the grill surfaced: **`Unforgiving Aim`'s third mode — "Create a 2/2 black and green Elf creature token" — must never be chosen** while Winnowing is in the deck. The card is safe; that one mode is not.

### THE MANA WENT WRONG TWICE

Round one of the grill showed three hard-green cards were being served by only **4** dedicated green sources, and the mana audit could not see it — the audit compares colour *shares*, and 22% of 18 lands is still 4 lands. Cutting `Celestial Reunion` dropped the green requirement to 2 cards. But reaching the recomputed 17-land target by cutting an `Evolving Wilds` quietly took G-capable sources from 6 back to **5**, pushing `Brigid's Command` off-curve in 25.8% of games. Round two fixed it with one card: **Plains 12→11, add `Temple Garden`** — the pool's only untapped-capable dual — holding W at exactly 14 while restoring G-capable to 6.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:4  2:5  3:9  4:3  5:1  6:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.4: Timid Shieldbearer@0.9, Timid Shieldbearer@0.9, Brigid's Command@0.8, Mistmeadow Council@0.8) → p=0.90 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 8.7: Goldmeadow Nomad@0.9, Goldmeadow Nomad@0.9, Stalactite Dagger@0.9, Eclipsed Kithkin@0.5, Eclipsed Kithkin@0.5) → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 59%  T2 91%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Winnowing, Gallant Fowlknight, Protective Response
  OK        single_large_threat: Crib Swap, Protective Response, Pyrrhic Strike
  OK        noncreature_permanents: Pyrrhic Strike
  CONCEDED  stack: No counterspell exists in GW anywhere in this pool -- the cube's only counterspells are Spell Snare, Wild Unraveling and Glen Elendra Guardian, all mono-blue. The deck cannot prevent a key opposing spell from resolving; it answers the resulting permanent afterwards with Crib Swap x2, Protective Response x2 and Pyrrhic Strike, and out-grinds it with an anthem stack that has to be answered five separate times.
  CONCEDED  graveyard: No maindeck graveyard hate; Rooftop Percher x2 is the sideboard answer to the cube's 39 graveyard-interaction cards, and it is a changeling so it never breaks the typed purity Winnowing depends on.
```

- No structural WARN flags. The Phase 6b gate returns PASS on all four checks (curve 1:4 2:5 3:9 4:3 5:1 6:1, assembly payoff p=0.90 / enabler p=0.96, goldfish keepable 87% with 90% making a turn-2 play, coverage) on the post-grill list.
- Rare/mythic budget is now 5 of 5, at the cap. The fifth slot went to Temple Garden at the second grill round -- see land_math.composition_notes; it was the one-card fix for a green-source regression the first round of repairs introduced.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Three repeatable sinks turn surplus lands into board: Clachan Festival x2's '{4}{W}: Create a 1/1 green and white Kithkin creature token', Timid Shieldbearer x2's '{4}{W}: Creatures you control get +1/+1 until end of turn', and Ajani's '+1: Create a 1/1 ... token' for free every turn. Stalactite Dagger's 'Equip {2}' is a fourth mana outlet. |
| screw | mitigation | 17 lands, the recomputed target, with the goldfish check measuring 87% keepable hands, 88% reaching 3 lands by turn 3, and 90% making a turn-2 play. 9 of 23 nonland cards cost 2 or less -- up from 7 of 22 before the grill, via Kinsbaile Aspirant x2 and Stalactite Dagger. Only 3 of 17 lands enter tapped, and Eclipsed Kithkin's {G/W}{G/W} casts off two Plains in a 91%-white base while digging four deep for a Kithkin, Forest or Plains. |
| decapitation | mitigation | The anthem is not a single card. Champion of the Clachan is 1 copy at p(seen by turn 6) = 0.325, but the deck runs FIVE anthem effects across 23 nonland cards: Champion (static), Timid Shieldbearer x2 ('{4}{W}: Creatures you control get +1/+1', repeatable), and Gallant Fowlknight x2 ('creatures you control get +1/+0 ... Kithkin creatures you control also gain first strike'). Brigid's Command copies Champion once one is on the battlefield. The earlier claim that the deck 'wins on Winnowing asymmetry alone' has been STRUCK -- Winnowing is itself a 1-of at p=0.325 and is blank against mono-tribe boards, so it cannot be anyone's fallback. |
| gas-out | mitigation | Mistmeadow Council's 'When this creature enters, draw a card' is the deck's only card replacement -- 1 of 23, stated as the real exposure. From an empty hand five permanents still act without spending a card: Ajani's +1, Clachan Festival x2's {4}{W}, Timid Shieldbearer x2's {4}{W}, Goldmeadow Nomad x2's '{W}, Exile this card from your graveyard: Create a 1/1', and Stalactite Dagger's equip. Four of those five survive the deck's own Winnowing (planeswalker, two enchantments, one artifact), so the refuel does not stop on the reset turn. |
| raced | accepted | The cube's fastest clocks are evasive -- 41 of 277 cards carry evasion, 13 of them blue -- and this deck has zero maindeck fliers and zero maindeck reach across all 12 creature copies. Mitigating in the maindeck would mean Dawn's Light Archer (Creature - Elf Archer), taking typed purity from 12/12 to 12/13 and making my own Winnowing cost me a creature. Accepted, with the honest qualification the Challenger added: the maindeck is not defenceless against a single attacking flier -- Protective Response x2 ('Destroy target attacking or blocking creature') and Crib Swap x2 (unconditional exile) both answer one. It is a sustained aerial clock the deck cannot block. Answered post-board by Rooftop Percher x2 and Flock Impostor x2, both changelings, so purity stays at 100% after boarding. |
| disruption-fizzle | mitigation | Verified against the pool: the only counterspells in the entire cube are Spell Snare, Wild Unraveling and Glen Elendra Guardian, all mono-blue, so a GW deck's key turn is rarely countered outright. Champion of the Clachan has Flash, so the anthem can be deployed after the opponent commits; Crib Swap x2 and Protective Response x2 are instants held for the same window. Because the kill is now an anthem stack rather than a single reset, interacting with any one card does not fold the plan -- five anthem effects and five token producers have to be answered separately. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Kinbinding | Cut at the judge stage on thesis grounds: '+X/+X, where X is the number of creatures that entered the battlefield under your control THIS TURN' is a per-turn count, which is the exact mechanism this pipeline rejects in favour of a static anthem. It also competes with Winnowing for the same turn at five mana. It is the payoff of the sibling Kinbinding Flood deck, not this one. |
| Crossroads Watcher | Cut during FILL for the same reason as Kinbinding: 'Whenever another creature you control enters, this creature gets +1/+0 until end of turn' is a per-entry payoff, not a cumulative-count one. Its {2}{G} cost also fought a 91%-white pip demand. |
| Kinscaer Sentry | Its attack trigger cheats a body into play mid-combat, which is a threat-density effect rather than a cumulative-count one. The rare budget now sits at 4 of 5, so this is a genuine option for the last slot -- it is declined because a 2/2 first striker adds less to an anthem stack than the cards already in the list. |
| Kithkeeper | TYPED PURITY: it is a Creature - Elemental. Every off-type body is a creature I sacrifice to my own Winnowing, which is the one thing this build cannot afford. Excluded regardless of rate. |
| Selfless Safewright | TYPED PURITY: Creature - Elf Warrior. Its 'choose a creature type. Other permanents you control of that type gain hexproof and indestructible' is on-theme, but the body dies to my own Winnowing. It is the main reason the fifth rare slot is left unspent rather than filled. |
| Dawn's Light Archer | TYPED PURITY: Creature - Elf Archer. A 4/2 flash reach blocker would answer the cube's 41-card evasion class, but it breaks Winnowing's asymmetry -- Rooftop Percher and Flock Impostor do the same job as changelings and were sideboarded instead. |
| Unforgiving Aim (Elf-token mode) | The card is in the sideboard for its 'Destroy target creature with flying' and 'Destroy target enchantment' modes only. The third mode, 'Create a 2/2 black and green Elf creature token', must never be taken -- it would put an off-type body on my board. |
| Bristlebane Battler | A 6/6 trample ward {2} for {1}{G}, but it un-shrinks off creature-ENTRY triggers and this build makes far fewer entries per turn than the sibling flood deck; it also adds a third hard-green card to a base that only supports two. |
| Figure of Fable | Nine total mana to reach the 7/8 Avatar mode; a mana sink competing with the two {4}{W} activations for the same late-game mana. A live option for the unspent fifth rare slot, declined on that mana conflict. |
| Thoughtweft Lieutenant | Its trigger fires on Kithkin ENTERING -- per-entry, not cumulative -- and its {G}{W} cost would add a third hard-green card to a base supporting two. |
| Dawn-Blessed Pennant | Its '{2}, {T}, Sacrifice this artifact: Return target card of the chosen type from your graveyard to your hand' does recur Kithkin across a wrath, but at 1 mana it does nothing to the board; the Engine slot went to Stalactite Dagger, which makes a body instead. |
| Gathering Stone | 'Spells you cast of the chosen type cost {1} less' plus top-card selection is a real tribal engine, but at four mana it lands the turn before Winnowing and does not affect the board. |
| Mutable Explorer | 'create a tapped Mutavault token' makes a LAND token; the land is a changeling creature only while activated, so it is a mana investment rather than a Kithkin body, and it costs a rare. |
| Brigid, Clachan's Heart // Brigid, Doun's Mind | One token per two turns through the transform loop; the back face's '{T}: Add X {G} or X {W}' ramp has no target in a curve that tops at Winnowing, and it costs a rare. |
| Temple Garden | The pool's only untapped-capable dual -- its oracle reads 'As this land enters, you may pay 2 life. If you don't, it enters tapped', which the dossier undercounts as enters_tapped. Declined because it is a RARE: with only 2 hard-green cards in the list, a rare slot buys very little fixing. (An earlier version declined it on 'green pip demand is only 13%', which was the wrong reason.) |
| Springleaf Drum | Taps the creatures the deck needs for Convoke on Winnowing and Protective Response -- the two effects compete for the same untapped bodies. |
| Liminal Hold | Sideboard consideration: 'exile up to one target nonland permanent an opponent controls' answers any permanent, but at four mana it is slower than Pyrrhic Strike, which is already maindeck. |
| Celestial Reunion | CUT at Phase 9 to fix the mana. It was 1 of only 3 hard-green cards served by just 4 dedicated green sources, and its {G} is the hardest to support -- being an untyped Sorcery, it cannot be paid by Eclipsed Realms. At X=4 it also costs 5 mana to fetch a 4-mana creature and affects the board not at all on the turn it resolves. |
| Thoughtweft Imbuer | CUT at Phase 9. A four-mana 0/5 whose 'Whenever a creature you control attacks alone' trigger is anti-correlated with the wide board the rest of the deck assembles; it had also been counted at full weight in the slot table while rated 0.5 in the assembly check, which is what pushed Threats/Payoffs over its band. |
| Springleaf Drum | Proposed by the grill as green fixing, and declined on a mechanism conflict: '{T}, Tap an untapped creature you control' competes for exactly the untapped bodies that Convoke on Winnowing and Protective Response needs. Green was fixed by cutting a green card instead. |
| Eclipsed Realms | Untapped, and adds any colour for Kithkin spells -- but Winnowing is a plain Sorcery, not a Kindred card, so Eclipsed Realms cannot pay its {W}{W}. It fixes for Brigid's Command and Mistmeadow Council only, at the cost of a white source for the deck's most expensive spell. |
| Firdoch Core | Fixing, a Kithkin card in hand for behold, and a mana sink in one {3} slot -- genuinely three jobs. Declined because at MV 3 it competes with the deck's densest turn (9 of 23 nonland cards cost 3) and adds no body until {4} is spent. |
| Personify | Two typed-safe bodies' worth of value at instant speed, but only 5 of 12 creature copies have an enter trigger worth re-buying (Gallant Fowlknight x2, Mistmeadow Council, Eclipsed Kithkin x2). |
| Keep Out | Cut from the sideboard at Phase 9: its non-enchantment mode is 'deals 4 damage to target tapped creature', the same tapped-only limitation already accepted on Ajani's -2, and the sideboard was carrying 6 of 10 slots against a 21-card enchantment class. |
| Reluctant Dounguard | A {2}{W} 4/4 Kithkin that sheds its two -1/-1 counters off creature entries, and Clachan Festival's ETB alone makes two. Lost the slot to Kinsbaile Aspirant, which costs 1 instead of 3 and fixed the MV-1 hole the curve check flagged. |
| Selfless Safewright | TYPED PURITY: Creature - Elf Warrior. Its 'choose a creature type. Other permanents you control of that type gain hexproof and indestructible' is on-theme, but the body dies to my own Winnowing. It is the main reason the fifth rare slot is left unspent rather than filled. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.37 adj [MV 2.78 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  G  demand   8.7%  prod  29.4%  gap -20.7pp  [OK]
  W  demand  91.3%  prod  82.4%  gap  +8.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
commons/uncommons max 2 copies                       PASS  (18 distinct; 0 over cap)
rares/mythics max 1 copy each                        PASS  (5 distinct, all at qty 1)
max 5 rare+mythic across MB+SB                       PASS  (5/5: Ajani, Outland Chaperone, Brigid's Command, Champion of the Clachan, Temple Garden, Winnowing)
basic lands unlimited (format-supplied)              PASS  (Forest x2, Plains x11 -- exempt)
all cards from cube mainboard                        PASS  (exact-name match vs working_pool, 0 phantoms)
colour identity G/W, no splash                       PASS  (effective_cost.best_mode non-None for every nonland; splash list empty)
deck size 40 + sideboard 10                          PASS  (mainboard 40, sideboard 10)
any copy-limit violation                             NONE
```
