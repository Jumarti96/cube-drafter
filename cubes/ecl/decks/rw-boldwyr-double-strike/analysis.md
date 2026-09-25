---
deck_name: "rw-boldwyr-double-strike"
cube_id: "ecl"
cube_slug: "ecl"
colors: "RW"
format: "40-card"
built_at: "2026-08-10T20:25:18Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
2x Eclipsed Realms      Giant-restricted any-colour + {C}
9x Mountain             Basic land
4x Plains               Basic land
2x Sacred Peaks         RW dual, enters tapped
```

### CREATURES (15)

```
CMC  Card                      Qty   Color  Role                                              Rar
  2  Burdened Stoneback        x2    W      MV2 Giant; counter -> indestructible (sorcery only) U
  2  Feisty Spikeling          x2    WR     MV2 changeling Giant                              C
  2  Kinscaer Sentry           x1    W      First strike lifelink; deploys a Giant mid-combat R
  3  Brambleback Brute         x2    R      MV3 Giant; counter -> can't block                 C
  3  Gangly Stompling          x2    RG     MV3 trample changeling Giant                      C
  3  Sizzling Changeling       x1    R      MV3 changeling Giant, self-replacing              U
  5  Boldwyr Aggressor         x2    R      PAYOFF - grants the tribe double strike           U
  5  Hovel Hurler              x2    WR     MV5 6/7 Giant; counter -> +1/+0 and flying        U
  6  Catharsis                 x1    WR     Evoke finisher: team +1/+1 and haste if RR spent  M
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                      Qty   Color  Role                                              Rar
  1  Cinder Strike             x2    R      Removal; 4 dmg if blight 1 paid                   C
  1  Impolite Entrance         x2    R      Trample+haste, cantrips                           U
  2  Sear                      x2    R      Removal, 4 dmg instant                            U
  3  Crib Swap                 x1    W      Exile removal; is itself a Giant card             U
```

### OTHER SPELLS (1)

```
CMC  Card                      Qty   Color  Role                                              Rar
  5  Collective Inferno        x1    R      2nd multiplier - doubles all Giant damage         R
```

## SIDEBOARD (10)

```
Card                      Qty   Color  Role / When to board in                                Rar
Giantfall                 x1    R      vs artifacts; or as extra removal off a big Giant      U
Keep Out                  x2    W      vs the 21-card enchantment class; also vs tapped attackers C
Protective Response       x2    W      vs a single large blocker; convoke paid by the Giant board U
Pyrrhic Strike            x2    W      vs artifacts (11) and enchantments (21); blight paid onto a Giant U
Rooftop Percher           x2    C      vs the cube's 39-card graveyard class                  C
Winnowing                 x1    W      vs wide boards - nothing of yours dies                 R
```

## ANALYSIS

### DECK IDENTITY

Red-white Giants aggro built on a rules trick: **changeling** reads "This card is every creature type", so every Shapeshifter in this list is literally a Giant. The tribe is **13 bodies deep** - 8 printed Giant Warriors plus 5 changelings - rather than the 8 the type lines show at a glance. Those bodies are oversized for their cost because they enter with two -1/-1 counters, and each spends those counters for a permanent +1/+1 plus an effect: indestructible, can't-block, or flying. Boldwyr Aggressor's "Other Giants you control have double strike" is the multiplier when drawn, but the deck is built to kill on raw body size without it.

### THE COUNTER MATH IS THE ARCHETYPE

The set's **blight N** mechanic ("put N -1/-1 counters on a creature you control") looks like a drawback and is really a resource. Four of this deck's Giants read "Remove a counter from this creature" - unqualified - so the counters they enter with are ammunition, and every activation both fires an effect and permanently grows the body:

| Card | Enters as | Printed | Each activation buys |
|---|---|---|---|
| Burdened Stoneback | 2/2 | 4/4 | Target creature gains indestructible (sorcery speed only) |
| Brambleback Brute | 2/3 | 4/5 | Target creature can't block this turn |
| Hovel Hurler | 4/5 | 6/7 | Another creature gets +1/+0 and gains flying |

This is why Cinder Strike is a one-mana 4-damage spell here and close to fair elsewhere: its blight 1 additional cost puts a counter on a permanent that wanted one. **6 of 23 nonland cards** can absorb that cost profitably.

### WHAT DOUBLE STRIKE IS ACTUALLY WORTH

With one Boldwyr Aggressor resolved, **12 of the 13 Giant bodies** gain double strike - the whole creature base except Kinscaer Sentry. A 4/2 Gangly Stompling becomes 8 trampling damage; a fully-spent Hovel Hurler becomes 12. Collective Inferno naming Giant stacks multiplicatively on top ("Double all damage that sources you control of the chosen type would deal"), and its convoke is paid by the same board it doubles.

The honest limit: Boldwyr is an uncommon capped at 2 copies, so P(seen by turn 6) is 0.55, and even with Collective Inferno the multiplier package only reaches 0.70. **No legal configuration of this pool reaches the 0.75 assembly threshold.** The deck is therefore built so the multipliers are upside rather than a requirement - the payoff role that must assemble is a Giant body, and that sits at p = 0.99.

### MANA

The base is deliberately red-forward: **17 mandatory red pips against 4 white**, with 8 further {R/W} hybrid pips payable either way. Unconditional production is R 11 of 17 and W 6 of 17. Eclipsed Realms is the fixing the archetype unlocks - naming Giant, its any-colour mana is live on **14 of 23 nonlands** (13 Giant bodies plus Crib Swap, which carries changeling on a Kindred card) plus the activated abilities of every Giant source, and its {C} mode is never dead. It is explicitly *not* live on Kinscaer Sentry, a Kithkin Soldier.

One tooling caveat worth recording: `deck_audit` credits Eclipsed Realms as producing all five colours unconditionally, so the audit's `land_color_production` reports more sources than 17 lands can make. The colour-balance verdict is unaffected, but the per-colour figures in the raw audit block below read high.

### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (23 nonland):  1:4  2:7  3:6  5:5  6:1
  WARN  MV 4+ share: share 26% above band maximum 20%
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 13 copies → p=0.99 (need ≥ 0.75)
  PASS  multiplier: 6 copies (effective 4.2: Collective Inferno@0.8, Catharsis@0.6, Impolite Entrance@0.4, Impolite Entrance@0.4) → p=0.76 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 91%
  play by turn: T1 60%  T2 95%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Corrected premise: Winnowing IS a one-sided sweeper for this deck - 'each player sacrifices all other creatures they control that don't share a creature type with the chosen creature', and choosing one of the 5 changelings (every creature type) means nothing of mine dies. It is sideboarded rather than maindecked because it costs {4}{W}{W} against 6 unconditional white sources, is a plain Sorcery so Eclipsed Realms' Giant-restricted mana cannot pay for it, and at MV6 it is a control card in a list whose thesis turn is 6. Maindecking it would require a white-forward mana base, which costs Boldwyr Aggressor's {R}{R} and Catharsis's {R}{R} evoke mode - both multipliers.
  OK        single_large_threat: Crib Swap, Sear, Cinder Strike
  CONCEDED  noncreature_permanents: The mainboard carries no artifact or enchantment answer after Giantfall moved to the sideboard; the cube's artifact class is 11 cards at 4.2% density and its enchantment class 21 at 8.1%, and Pyrrhic Strike x2, Keep Out x2 and Giantfall in the sideboard answer both. Maindecking one would cost a Giant body in a 23-nonland list whose clock is the win condition.
  CONCEDED  stack: This pool gives R and W no counterspell at any rate, so the only answer to held-up interaction is to present a lethal board before reactive mana is profitable to hold.
  CONCEDED  graveyard: Rooftop Percher exiles up to two cards from graveyards but is a 5-mana 3/3 that does not advance the turn-6 clock; it is sideboarded against the cube's 39-card graveyard class rather than maindecked.
```

Curve WARN - MV4+ share 26% vs band maximum 20%: the top end is Boldwyr Aggressor x2 (the thesis multiplier), Hovel Hurler x2 (the largest body in the colours at 6/7) and Collective Inferno (the second multiplier the grill required to resolve the decapitation mode). Cutting any of them removes either the kill mechanism or the fix that closed a BLOCKING finding. Catharsis is booked at MV6 but is normally evoked for two mana, so the effective curve sits below the printed distribution.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Impolite Entrance x2 draws a card. Burdened Stoneback {1}{W}, Brambleback Brute {1}{R} and Hovel Hurler {R/W}{R/W} - 6 mainboard copies - each remove an entry -1/-1 counter for a permanent +1/+1 plus an effect, a repeatable mana sink. Collective Inferno's convoke lets surplus lands cast it without tapping the board. |
| screw | mitigation | 11 of 23 nonlands cost MV2 or less and 17 of 23 cost MV3 or less. Land count is the recommended 17; goldfish 88% keepable, 91% three-land-by-turn-3, 95% turn-2 play. No card needs {W}{W}, and of the three single-{W} cards two (Burdened Stoneback, Crib Swap) are Giant spells Eclipsed Realms pays for. |
| decapitation | accepted | Boldwyr Aggressor x2 plus Collective Inferno are three independently-drawn multiplier cards; P(at least one by turn 6) is 0.70. It cannot reach the 0.75 assembly threshold because Boldwyr is an uncommon capped at 2 and Collective Inferno a rare capped at 1 - no legal configuration does. The residual is accepted: the deck kills on raw body size (4/5, 4/2 trample, 6/7) and treats every multiplier as upside. |
| gas-out | mitigation | Impolite Entrance x2 ('Draw a card') and Sizzling Changeling ('When this creature dies, exile the top card of your library. Until the end of your next turn, you may play that card') are 3 of 23 self-replacing cards. Beyond card flow, the 6 counter-removal copies are on-board mana sinks that convert an empty hand plus lands into permanent stats. |
| raced | mitigation | Crib Swap ('Exile target creature', instant) answers the single fastest threat outright rather than blocking it, and Cinder Strike x2 plus Sear x2 are four MV<=2 damage spells that kill an opposing early threat on curve. On defence the deck blocks with Brambleback Brute at its ENTRY size 2/3 (4/5 once both counters are spent) and Hovel Hurler at 4/5 (6/7 once spent). Feisty Spikeling's first strike is 'During your turn' and does NOT apply when blocking - it is an attacker only. |
| disruption-fizzle | mitigation | The critical turn is a combat step, not a spell chain, so a counterspell has no target - and this pool gives no colour a counterspell anyway. Against removal aimed at the attacker, Burdened Stoneback's indestructible grant must be pre-committed in the precombat main phase ('Activate only as a sorcery'), which telegraphs it but does answer it. The plan retries next turn because 13 Giant bodies mean no single removal spell empties the attack. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bre of Clan Stoutarm (rare) | A 14th Giant and a repeatable flying+lifelink granter, but its end-step free-cast needs life gained that turn; at MV4 it would push the MV4+ share from 26% to 30% against a 20% band. Anchors Deck C instead. |
| Goliath Daydreamer (rare) | Its dream-counter engine keys off casting instants and sorceries; this list runs 7 of 23 nonlands that qualify, and it is a 4-drop in a build whose lens is lowest-curve. |
| Slumbering Walker (rare) | 'return target creature card with power 2 or less' hits only 2 of the 13 Giant bodies (Feisty Spikeling), and {3}{W}{W} is the exact pip pattern this red-forward base is built to avoid. Anchors Deck B. |
| Curious Colossus (mythic) | Cut from the sideboard on the grill's advice: {5}{W}{W} at MV7 against 6 unconditional white sources is close to uncastable in a game this deck wants to be playing, despite a game-ending ETB. |
| Rhys, the Evermore (rare) | Cut in repair. Its persist ETB is blank on 6 of the 13 Giants because they all 'enter with two -1/-1 counters', and persist requires 'if it had no -1/-1 counters on it'; the counter-stripping half is sorcery-speed, once per turn. |
| Scuzzback Scrounger (rare) | Treasure-per-turn ramp, but its body is a non-Giant 3/2 Goblin that gains nothing from the anthem, and the rare budget was better spent on a second damage multiplier. |
| Hexing Squelcher (rare) | 'Spells you control can't be countered' answers a threat class this pool does not contain - there are no counterspells in the R/W pool and the dossier's stack coverage is conceded for that reason. |
| Ajani, Outland Chaperone (mythic) | {1}{W}{W} on a base with 6 unconditional white sources; its +1 makes Kithkin tokens, which are not Giants and gain nothing from Boldwyr Aggressor. |
| Springleaf Drum (uncommon) | Cut in repair. It needs 'an untapped creature you control' and the deck has zero MV1 creatures, so it cannot produce mana before turn 3 - the acceleration that justified it does not exist. |
| Stalactite Dagger (common) | Makes a 1/1 changeling Giant token and its equip rider grants all creature types, but that rider is live on only 1 of the 15 creatures in the final list (Kinscaer Sentry) now that Rhys is cut. |
| Flock Impostor (uncommon) | A flying Giant with flash and a genuine gap-filler for evasion, but adding it meant either a curve slot the MV4+ WARN cannot afford or cutting a larger body. |
| Prideful Feastling (common) | A 2/3 lifelink changeling Giant castable off the {W/B} pip with white; a fine 14th body, cut only because MV3 is already 6 of 23. |
| Gathering Stone (uncommon) | Naming Giant it discounts 14 of 23 nonlands and digs each upkeep, but at MV4 it worsens the curve flag while adding no board presence on the turn it lands. |
| Personify (uncommon) | Makes a changeling Giant token, but its blink re-triggers 'enters with two -1/-1 counters' on 6 of the 13 Giants - actively anti-synergistic here. |
| Firdoch Core (common) | A Giant permanent and a mana rock, but it is not a creature until you pay {4}, so Boldwyr Aggressor's double strike does nothing for it. |
| Sourbread Auntie (uncommon) | Its two 1/1 tokens are Goblins, not changelings, so they get no double strike and do not raise the Giant count. |
| Lasting Tarfire (uncommon) | 2 damage per end step needs a counter placed that turn; this list has 3 blight sources (Cinder Strike x2, and Pyrrhic Strike in the board), so the trigger is live on a minority of turns. |
| Sting-Slinger (uncommon) | Its activation taps the creature, competing directly with attacking - the double-strike plan wants bodies in combat, not tapped for 2-point pings. |
| Boulder Dash / Tweeze (uncommon/common) | Both are worse than Sear at the same slot against the oversized blockers a Giant deck actually needs removed. |
| Feed the Flames (common) | Sideboard consideration displaced by Winnowing; 5 damage with an exile clause overlaps with Pyrrhic Strike and Protective Response already in the board. |
| Reluctant Dounguard (common) | The grill's suggested defensive 4/4 that self-strips counters as creatures enter; a real wall, but this deck attacks and the slot went to Crib Swap, which answers the fast clock outright. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 2.91 vs 2.5, 2 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  R  demand  78.9%  prod  70.6%  gap  +8.3pp  [OK]
  W  demand  21.1%  prod  41.2%  gap -20.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] commons/uncommons max 2 copies each
[PASS] rares/mythics max 1 copy each
[PASS] max 5 rares+mythics across MB+SB - 4 used (Kinscaer Sentry R, Collective Inferno R, Catharsis M, Winnowing M/R-SB)
[PASS] every card drawn from the ecl cube mainboard; basics format-supplied
[PASS] core colours R/W, no splash; all hybrid pips payable with red or white
[PASS] mainboard 40, sideboard 10
```
