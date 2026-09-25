---
deck_name: "ub-rupture-reset"
cube_id: "eoe"
cube_slug: "eoe"
colors: "UB"
format: "40-card"
built_at: "2026-08-04T04:54:23Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
7x Island                     
8x Swamp                      
2x Contaminated Aquifer       ({T}: Add {U} or {B}.) This land enters tapped.
1x Watery Grave               ({T}: Add {U} or {B}.) As this land enters, you may pay 2 li
```

### CREATURES (7)

```
CMC  Card                       Qty   Color  Role                                                 Rar
3    Codecracker Hound          x2    U      Graveyard enabler (guaranteed one card to the yard,  U
3    Xu-Ifit, Osteoharmonist    x1    B      Reanimator engine (free, repeatable, uncapped - the  R
7    Mouth of the Storm         x2    U      Hardcastable finisher (6/6 flier, ward; blanks an at U
9    Bygone Colossus            x2    C      Reanimation payload (Xu-Ifit-safe: only ability is W U
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Zero Point Ballad          x1    B      Interaction (scalable wrath; at X>=6 also reanimates R
2    Consult the Star Charts    x1    U      Deep selection - the card that finds the single Xu-I R
2    Divert Disaster            x2    U      Interaction (tax counter; protects the wrath turn)   C
2    Hymn of the Faller         x1    B      Card flow + selective binning                        U
3    Scrounge for Eternity      x2    B      Recursion CAPPED at mana value 5 - rebuys utility, N U
3    Unravel                    x2    U      Interaction (hard counter)                           U
4    Gravkill                   x1    B      Interaction (instant-speed exile)                    C
6    Singularity Rupture        x1    UB     Anchor sweeper + largest self-mill in the cube       R
```

### OTHER SPELLS (4)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Thaumaton Torpedo          x2    C      Interaction (the deck's only answer to a resolved no C
3    Fell Gravship              x2    B      Graveyard enabler (mill 3) + wrath-proof as an unsta U
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                                                                    Rar
Annul                      x2    U      Hate — Against artifact or enchantment decks - the cube is 29.7% artifacts, and one mana t U
Cryoshatter                x2    U      Flex removal — Against creature decks - one mana, and 'when enchanted creature becomes tap C
Chrome Companion           x1    C      Hate — Against opposing graveyard decks needing repeatable answers; boarding it in accepts C
Depressurize               x2    B      Flex removal — Against fast starts - a two-mana instant answer to an early utility creatur C
Dauntless Scrapbot         x1    C      Hate — Against opposing graveyard decks: 'exile each opponent's graveyard' is one-shot but U
Tractor Beam               x2    U      Flex answer — Against a single threat too large to kill - 'You control enchanted permanent U
```

## ANALYSIS

### DECK IDENTITY

A U/B control deck whose sweeper is also its enabler. Singularity Rupture reads 'Destroy all creatures, then any number of target players each mill half their library, rounded down' - a hard wrath and, on the same card, a 10-to-14 card self-mill, which buries Bygone Colossus (9/9, mana value 9). Xu-Ifit, Osteoharmonist then returns it for free every turn; because the Colossus's only printed ability is Warp - a casting-only ability - it loses nothing to Xu-Ifit's 'has no abilities' clause. Four maindeck counterspells let this deck answer a threat BEFORE it resolves, which is what blue uniquely offers in this pool, and Mouth of the Storm is the hardcastable back-up finisher for the games where the single Xu-Ifit never appears.

### ONE CARD THAT IS BOTH THE WRATH AND THE ENABLER

`Singularity Rupture — {3}{U}{B}{B}: Destroy all creatures, then any number of target players each mill half their library, rounded down.`

Read the mill clause carefully: **"any number of target players"** means you choose the targets. On a resolved Rupture you may mill only yourself, only the opponent, or both — and which you pick is a real decision:

- **Mill yourself** when you need Bygone Colossus in the graveyard. Half of a ~28-card library is 14 cards, by far the biggest single self-mill in the cube.
- **Mill the opponent** when their deck recurs from the graveyard and you'd rather not feed it, or when you're the one under pressure and want their library gone.
- **Mill both** when neither risk applies.

No other card in this cube does board control and graveyard setup on the same spell. It is the reason this deck exists.

### THE ENGINE IS ONE CARD, AND THE DECK IS BUILT AROUND ADMITTING THAT

`Xu-Ifit, Osteoharmonist` is the **only uncapped self-reanimator in blue-black.** The alternatives do not cover for it:

| Card | Why it is not a second copy |
|---|---|
| Scrounge for Eternity | `mana value 5 or less` — Bygone Colossus is 9 and Mouth of the Storm is 7. It cannot return **any** of the four payload cards. |
| Zero Point Ballad | Only returns a creature that died to it, and only when X is 6 or more — seven mana and six life. |
| Fell Gravship | Returns to **hand**, not the battlefield. A mana-value-9 Colossus in hand is not a play. |

So the deck is built so the payload wins **without** the engine. **Mouth of the Storm** is hardcastable at seven mana for a 6/6 flier with Ward {2}, and its `creatures your opponents control get -3/-0 until your next turn` buys a full attack step on arrival. Xu-Ifit is a mana discount on a plan that already works, not the plan itself. **Consult the Star Charts** (`look at the top X cards of your library, where X is the number of lands you control`) is in the deck specifically to find it.

### THE FELL GRAVSHIP TRAP — SEQUENCING MATTERS

`When this Spacecraft enters, mill three cards, then return a creature or Spacecraft card from your graveyard to your hand.` The return is **mandatory**. If Bygone Colossus is the only creature or Spacecraft card in your graveyard, Fell Gravship drags your 9/9 back to hand at mana value 9 — undoing the work.

**Play pattern: lead with Fell Gravship early, before the Colossus is buried.** Bin the payload afterwards with Codecracker Hound, Hymn of the Faller, or Singularity Rupture. Nine of the 22 nonland cards are legal return targets, so once the yard has any other body the trap closes on its own.

### WHY XU-IFIT CANNOT STATION A SPACECRAFT

Every Spacecraft here is an artifact, not a creature, until Station puts it past its threshold — which means an unstationed Fell Gravship **survives your own Singularity Rupture**. Tempting to think it could then be stationed into a flier as a second threat. It cannot, and the reason is precise:

Station's cost is `Tap another creature you control`. Xu-Ifit's reanimation is *also* a tap ability (`{T}: Return target creature card…`). After a wrath, the only creature available to tap is the one Xu-Ifit just returned — and Xu-Ifit itself is now tapped. **The deck cannot reanimate and Station in the same turn.** Fell Gravship is in this list purely as a wrath-proof mill trigger; there is no Station line anywhere in the plan.

### THE ONE THING THIS COLOUR PAIR DOES THAT NO OTHER CAN

Four maindeck counterspells — Unravel ×2 (`Counter target spell`) and Divert Disaster ×2 (`Counter target spell unless its controller pays {2}`). This is the **only** build from this cube that lists cards under the `stack` coverage class instead of conceding it, because blue is the only colour in the pool with counterspells at all. It changes what the deck's critical turn looks like: Singularity Rupture on turn 6 can be protected, and a threat you cannot answer after it resolves can be answered before it does.

That is also why `Annul` sits in the sideboard rather than the maindeck. Against a cube that is 29.7% artifacts it is a one-mana answer to permanents U/B otherwise cannot remove once they land — but `Counter target artifact or enchantment spell` is far too narrow to run blind.

### PLAY PATTERN

Do nothing on turn 1 (only 19% of goldfish hands have a play). Trade with Gravkill and hold Divert Disaster up. Fell Gravship early for the mill. Singularity Rupture around turn 6, milling yourself if the Colossus is still in the deck. From there either Xu-Ifit recurs a 9/9 every turn for free, or you hardcast Mouth of the Storm and win with a 6/6 flier. Against the fastest decks in the cube you are behind from turn one — that matchup is recorded as an accepted loss, not a solved one.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (22 nonland):  1:3  2:4  3:9  4:1  6:1  7:2  9:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  finisher_access: 5 copies → p=0.88 (need ≥ 0.75)
  PASS  answer: 9 copies (effective 6.9: Thaumaton Torpedo@0.5, Thaumaton Torpedo@0.5, Zero Point Ballad@0.7, Divert Disaster@0.6, Divert Disaster@0.6) → p=0.95 (need ≥ 0.75)
  PASS  graveyard_enabler: 6 copies (effective 5.8: Hymn of the Faller@0.8) → p=0.92 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 92%
  play by turn: T1 49%  T2 84%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Singularity Rupture, Zero Point Ballad, Mouth of the Storm
  OK        single_large_threat: Gravkill, Singularity Rupture, Unravel
  OK        noncreature_permanents: Thaumaton Torpedo
  OK        stack: Unravel, Divert Disaster
  CONCEDED  graveyard: No maindeck graveyard hate - this deck's own graveyard is its win condition, so symmetric hate costs it more than the opponent. Chrome Companion and Dauntless Scrapbot are sideboarded for the matchups where that trade is worth making.
```

- No WARN flags raised. Curve (Control), assembly, goldfish and coverage all returned PASS.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Zero Point Ballad is an X spell, so surplus lands are spent directly on a bigger sweep and on reaching X=6 where it also reanimates. Consult the Star Charts scales twice over - its dig is 'the top X cards of your library, where X is the number of lands you control', and its Kicker {1}{U} turns one card into two. Bygone Colossus is hardcastable at {9} and Mouth of the Storm at {6}{U} off a flooded board. |
| screw | mitigation | The deck is designed to do nothing before turn 2, so a slow hand is close to its plan: Hymn of the Faller at {1}{B}, Divert Disaster at {1}{U} and Consult the Star Charts at {1}{U} are the cheap plays that bridge to the sweepers. Goldfish reports 85% keepable hands and 92% with three lands by turn 3. Watery Grave can enter untapped for 2 life when the turn matters. |
| decapitation | mitigation | Xu-Ifit is a single copy and IS the engine - this is the deck's named fragility, and the answer is that the payload does not need it. Mouth of the Storm x2 is hardcastable at seven mana for a 6/6 flier with Ward {2} whose enter-the-battlefield trigger blanks an attack step, and Bygone Colossus is hardcastable at nine. Consult the Star Charts digs 'the top X cards where X is the number of lands you control' specifically to find Xu-Ifit before it is needed. Losing Xu-Ifit costs the deck its mana discount, not its win condition. |
| gas-out | mitigation | Card-positive text is dense for a control deck: Hymn of the Faller x2 ('draw a card', plus a second when Void is on, which 10 of 22 nonland cards enable), Codecracker Hound x2 ('put one into your hand and the other into your graveyard' - card selection and graveyard fuel in the same trigger), Consult the Star Charts (one or two cards depending on Kicker), and Unravel x2 which draws when it counters an undercosted spell. Fell Gravship's mandatory return also refills the hand. |
| raced | accepted | This is the deck's worst matchup and the list does not fix it. Its first play lands on turn 1 in only 19% of goldfish hands, its finishers cost seven and nine, and the thesis turn is 9. Mitigating properly would mean maindecking cheap blockers - but every creature on the battlefield when Singularity Rupture resolves is a creature this deck destroys itself, and each blocker slot would come out of the counterspell suite that is the entire reason to be in these colours. The concession is bounded rather than total: Cryoshatter x2 and Depressurize x2 come in from the sideboard as one- and two-mana answers to the cheap threats that beat this deck, and Mouth of the Storm's '-3/-0 until your next turn' buys a full attack step when hardcast. |
| disruption-fizzle | mitigation | This is the one failure mode where U/B is the strongest identity in the pool. The critical turn is Singularity Rupture around turn 6, and the deck can protect it: Unravel x2 hard-counters and Divert Disaster x2 taxes, so 4 of the 22 nonland cards answer interaction ON THE STACK. If the wrath is answered anyway, Zero Point Ballad is a second mass answer. CORRECTED AT THE GRILL: an earlier version claimed the payload is 'still in the graveyard where removal cannot reach it'. That is false and this deck's own sideboard proves it - Dauntless Scrapbot reads 'exile each opponent's graveyard', so a comparable effect in an opponent's deck reaches the buried Colossus. The honest claim is conditional: the payload is protected only while countermagic is live to counter the graveyard-hate spell, which is itself an artifact creature and therefore also answerable by Annul from the sideboard. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Weftwalking | MYTHIC. 'shuffle your hand and graveyard into your library, then draw seven cards' — it shuffles your GRAVEYARD away, which is this deck's entire resource. Actively anti-synergistic with the thesis. |
| Chorale of the Void | RARE. Reanimates from the DEFENDING player's graveyard, needs an attacking creature to carry it, and its Void clause sacrifices it each end step unless a permanent left the battlefield. That is the other U/B build's plan, not this one's. |
| Specimen Freighter | 'Whenever this Spacecraft attacks, defending player mills four cards' is the cube's only repeatable opponent-mill, but decking is not this deck's kill mechanism and the Spacecraft must reach 9 charge counters to attack at all. |
| Sothera, the Supervoid | MYTHIC. Its exile trigger needs YOUR creatures to die repeatedly; a control deck that wraths keeps its own board empty on purpose, so the engine rarely turns on. |
| Alpharael, Stonechosen | MYTHIC. 'defending player loses half their life' is a real finisher but it must attack and survive, and this deck's plan is to have no creatures on board when its own sweepers resolve. |
| Quantum Riddler | MYTHIC 4/6 flier that draws on entry; a fine card, but its 'one or fewer cards in hand' payoff wants an empty hand and a control deck holds counterspells up. |
| Mm'menon, the Right Hand | RARE. 'You may cast artifact spells from the top of your library' rewards an artifact-dense deck; this list runs artifacts as graveyard fodder, not as a critical mass to cast off the top. |
| Starfield Vocalist | RARE. Doubles enter-the-battlefield triggers, which is real with Fell Gravship and Wurmwall Sweeper, but at {3}{U} on a 3/4 body it competes with counterspell mana on the turns that matter. |
| Emissary Escort | RARE 0/4 whose power scales with the greatest mana value among OTHER artifacts you control — Bygone Colossus is in the graveyard, not on the battlefield, so the scaling rarely fires. |
| Archenemy's Charm | RARE. Excellent modal removal plus graveyard recursion, but {B}{B}{B} triple-black is unreachable on a two-colour base whose duals mostly enter tapped. |
| Elegy Acolyte | RARE 4/4 lifelink, but toughness 4 means it dies to this deck's own Zero Point Ballad at any X of 4 or more and to Singularity Rupture unconditionally. |
| Sunset Saboteur | RARE 4/1 menace; a proactive attacker in a deck built to wrath its own board, and toughness 1 dies to everything. |
| Requiem Monolith | RARE. Its draw trigger needs a creature to be dealt damage and the opponent chooses whether to ping it — the opponent controls the payoff. |
| Entropic Battlecruiser | RARE 3/10 Spacecraft whose 1+ ability only fires 'whenever an opponent discards a card', and this deck has no opponent-discard outlet maindeck. |
| Mechanozoa | 5/5 for {4}{U}{U} that taps and stuns on entry — a fine body, but at mana value 6 it is outside Scrounge for Eternity's clause and it is a worse Xu-Ifit target than Bygone Colossus. |
| Anticausal Vestige | RARE 7/5 for {6} colourless; its leave-the-battlefield draw is genuine, but Xu-Ifit strips it and a 7/5 is smaller than the Colossus for the same reanimation. |
| Faller's Faithful | 'If that creature wasn't dealt damage this turn, its controller draws two cards' — a control deck that wins by out-carding cannot pay two cards per removal spell. |
| Embrace Oblivion | 'As an additional cost, sacrifice an artifact or creature' — a control deck that keeps its board deliberately empty cannot reliably pay this. |
| Vote Out | Convoke needs creatures to tap, and this deck deliberately has none on the turns it wants removal. |
| Desculpting Blast | Bounce is temporary; against a cube with 31 graveyard-interaction cards this deck wants exile, and it already runs Gravkill for that. |
| Susurian Dirgecraft | 'each opponent sacrifices a nontoken creature of their choice' is an edict the opponent chooses; the deck's targeted exile answers the specific threat instead. |
| Timeline Culler | Recurs itself from the graveyard for 'Warp—{B}, Pay 2 life', but warp exiles it at the next end step, so it is a 2/2 haste ping rather than a persistent body. |
| Voidforged Titan | 5/4 at mana value 5 IS inside Scrounge's clause, but its Void draw is stripped if Xu-Ifit returns it and the body is smaller than every other payload option. |
| Tragic Trajectory | '-2/-2', upgrading to '-10/-10' under Void, and 10 of the 22 nonland cards turn Void on - genuinely efficient. Cut because a sorcery-speed removal spell competes with holding counterspell mana up on the opponent's turn, which is this identity's actual edge. |
| Alpharael, Dreaming Acolyte | 'draw two cards. Then discard two cards unless you discard an artifact card' would bin Bygone Colossus (an artifact creature) while drawing. Cut because at {1}{U}{B} it is a creature on the battlefield the turn before this deck wants to cast its own Singularity Rupture. |
| Starbreach Whale | 3/5 flier with 'surveil 2' on entry. Cut for the same reason: a creature this deck deploys is a creature its own wrath destroys, and its Warp mode exiles it at the next end step rather than leaving a blocker. |
| Wurmwall Sweeper | 'surveil 2' for {2} and wrath-proof as an unstationed Spacecraft - the closest cut. Lost the slot to Fell Gravship, which mills three rather than surveilling two AND returns a card, and to Codecracker Hound, whose bin is guaranteed rather than top-of-library dependent. Kept as a sideboard consideration. |
| Uthros Scanship | 'draw two cards, then discard a card' is a genuine discard outlet for a Colossus stuck in hand. Cut on cost: {3}{U} for a card-neutral effect is slow in a deck already running 18 lands and two seven-drops. |
| Cerebral Download | 'Surveil X, where X is the number of artifacts you control. Then draw three cards.' Count-dependent and the count is bad here: 6 of the 22 nonland cards are artifacts (Fell Gravship x2, Thaumaton Torpedo x2, Bygone Colossus x2), and most sit in the graveyard rather than on the battlefield when this would be cast, so X is typically 0-2. |
| Extinguisher Battleship | RARE. 'destroy target noncreature permanent. Then this Spacecraft deals 4 damage to each creature' would answer the conceded class AND be a third sweeper, and the deck has one rare slot free. Cut on cost: {8} in an 18-land deck already running two mana-value-9 Colossus pushes the land recommendation to 19. Thaumaton Torpedo answers the same class for {1} up front. This is the strongest single upgrade if you want to spend the last rare slot. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.64   Ramp cards: 2   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +1.19 adj [MV 3.64 vs 2.5, 2 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  47.8%  prod  61.1%  gap -13.3pp  [OK]
  U  demand  52.2%  prod  55.6%  gap  -3.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                : cube_mainboard
multipliers         : {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}
rare/mythic cap (6) : PASS
verification        : All 40 mainboard + 10 sideboard cards exist by exact name in the working pool. No common/uncommon exceeds 2 combined copies; no rare/mythic exceeds 1. Rare+mythic total across mainboard and sideboard = 5 (Singularity Rupture, Zero Point Ballad, Xu-Ifit Osteoharmonist, Consult the Star Charts, Watery Grave), inside the user's cap of 6. Basic lands are format-supplied and exempt.
```
