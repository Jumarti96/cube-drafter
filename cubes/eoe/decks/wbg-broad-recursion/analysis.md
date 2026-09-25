---
deck_name: "wbg-broad-recursion"
cube_id: "eoe"
cube_slug: "eoe"
colors: "WBG"
format: "40-card"
built_at: "2026-08-03T04:42:40Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
1x Forest                     
4x Plains                     
5x Swamp                      
1x Godless Shrine             ({T}: Add {W} or {B}.) As this land enters, you may pay 2 li
2x Haunted Mire               ({T}: Add {B} or {G}.) This land enters tapped.
2x Radiant Grove              ({T}: Add {G} or {W}.) This land enters tapped.
2x Sunlit Marsh               ({T}: Add {W} or {B}.) This land enters tapped.
```

### CREATURES (10)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Edge Rover                 x2    G      Recursion target (mana value 1) + fixing on death    U
2    Beamsaw Prospector         x2    B      Recursion target (mana value 2) + fixing on death    C
2    Seedship Broodtender       x2    BG     Recursion engine (uncapped) + graveyard enabler      U
2    Umbral Collar Zealot       x2    B      Recursion target (mana value 2) + sacrifice outlet + U
3    Xu-Ifit, Osteoharmonist    x1    B      Recursion engine (free, repeatable; strips abilities R
5    Astelli Reclaimer          x1    W      Evasive threat + noncreature-permanent recursion (re R
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                       Qty   Color  Role                                                 Rar
1    Tragic Trajectory          x1    B      Interaction (one mana, Void-scaling)                 U
2    Hymn of the Faller         x2    B      Card flow + graveyard enabler                        U
2    Seedship Impact            x1    G      Interaction (artifact/enchantment answer)            U
3    Emergency Eject            x1    W      Interaction (any nonland permanent)                  U
3    Scout for Survivors        x2    W      Recursion engine (mass rebuy, total mana value 3 or  U
3    Scrounge for Eternity      x2    B      Recursion engine (mana value 5 or less) + fixing     U
```

### OTHER SPELLS (4)

```
CMC  Card                       Qty   Color  Role                                                 Rar
3    Banishing Light            x2    W      Interaction (enchantment - Rescue Skiff rebuys it)   C
6    Rescue Skiff               x2    W      Recursion engine (uncapped; also rebuys enchantments U
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                                                                    Rar
Seedship Impact            x1    G      Hate — Second copy against artifact or enchantment decks - the ONLY enchantment answer in  U
Virus Beetle               x1    B      Flex — Against combo or control - 'each opponent discards a card' on a mana-value-2 body t C
Dauntless Scrapbot         x1    C      Hate — Against opposing graveyard decks: 'exile each opponent's graveyard', leaving your o U
Shattered Wings            x2    G      Hate — Against artifacts (74 of 271 cube cards), enchantments, or fliers (56 evasive cards C
Gravkill                   x1    B      Flex removal — Against recursion decks - Exile, not destroy, and it hits Spacecraft as wel C
Radiant Strike             x2    W      Hate — Against artifact decks; 'Destroy target artifact or tapped creature. You gain 3 lif C
Vote Out                   x2    B      Flex removal — Against creature decks; Convoke is nearly free off a wide recurring board.  U
```

## ANALYSIS

### DECK IDENTITY

A three-colour attrition deck that wins by never actually losing a creature. Nine recursion effects across white, black and green - Rescue Skiff x2 and Seedship Broodtender x2 (both uncapped), Scrounge for Eternity x2 (mana value 5 or less), Scout for Survivors x2 (up to three creatures totalling mana value 3 or less), and Xu-Ifit x1 (free and repeatable) - mean every removal spell the opponent casts trades down. The creature base is deliberately cheap so Scout for Survivors can rebuild two or three bodies at once, and Rescue Skiff's 'creature or ENCHANTMENT' clause turns Banishing Light into a recurring exile effect. The deck grinds to a wider board each cycle and wins in combat around turn 8.

### WHY THIS DECK IS THREE COLOURS

The whole point of the third colour is engine redundancy. Deck 1 (B/G) has a hard ceiling of **five** battlefield-reanimation copies; adding white takes it to **nine**, spread across five different cards:

| Card | Copies | Cap | Cost |
|---|---|---|---|
| Rescue Skiff | 2 | none — any creature OR enchantment | {5}{W}, enters-the-battlefield trigger |
| Seedship Broodtender | 2 | none | {3}{B}{G} plus sacrificing itself, sorcery-only |
| Scrounge for Eternity | 2 | mana value 5 or less | {2}{B} plus sacrificing an artifact or creature |
| Scout for Survivors | 2 | up to three creatures, **total** mana value 3 or less | {2}{W} |
| Xu-Ifit, Osteoharmonist | 1 | none, but strips all abilities | free, repeatable, sorcery-only |

That redundancy is what makes `decapitation` a non-issue here — there is no single card to answer. The price is paid in the mana base: seven of the seventeen lands enter tapped, and Godless Shrine (`As this land enters, you may pay 2 life. If you don't, it enters tapped`) is the only untapped-capable dual in the identity, which is why it is worth one of the six rare slots.

### SCOUT FOR SURVIVORS RETURNS TWO, NOT THREE

`Return up to three target creature cards with total mana value 3 or less` is a **total** budget, not a per-creature one. Against this creature curve:

- mana value 1: Edge Rover ×2 — *the only MV1 creatures in the deck*
- mana value 2: Beamsaw Prospector ×2, Umbral Collar Zealot ×2, Seedship Broodtender ×2
- mana value 3: Xu-Ifit ×1

So the realistic lines are **Edge Rover + one MV2 body** (total 3), or **Edge Rover ×2** (total 2), or a lone Xu-Ifit. A genuine three-body return needs three MV1 creatures and this deck runs only two. Two bodies plus two +1/+1 counters for three mana is still a fine rate — but the card is not the blowout its text first suggests, and the deck is built knowing that.

### THE ONE REAL LOOP: RESCUE SKIFF INTO BANISHING LIGHT

Rescue Skiff returns a `creature or enchantment card`. **Banishing Light is an enchantment** (`When this enchantment enters, exile target nonland permanent an opponent controls until this enchantment leaves the battlefield`), so the Skiff rebuys it and re-exiles a second permanent. This is the deck's only genuine two-card engine, and it is narrow by the numbers — **2 of the 23 nonland cards** are enchantments the Skiff can target. It is a line to play toward, not a plan to build around.

Note the sequencing trap: if Banishing Light leaves the battlefield the exiled permanent comes back. Bouncing or sacrificing your own Banishing Light returns the opponent's card. The Skiff line only works when Banishing Light is already in the graveyard.

### ASTELLI RECLAIMER IS A BODY FIRST, A LOOP SECOND

`When this creature enters, return target noncreature, nonland permanent card with mana value X or less from your graveyard to the battlefield, where X is the amount of mana spent to cast this creature.` Cast for its printed {3}{W}{W}, X is 5. Two things follow that are easy to get wrong:

- It **cannot** return Rescue Skiff. Rescue Skiff is mana value 6, above X. The deck's most expensive recursion piece is out of reach for both Astelli Reclaimer and Scrounge for Eternity.
- Its only legal targets in this list are **Banishing Light ×2** — 2 of the 23 nonland cards. So it is a 5/4 flier that sometimes rebuys an exile effect, not a recursion engine. It is in the deck mostly because it is the only evasive body the identity offers at a reasonable rate, and this deck's clock is otherwise nine small ground creatures.

### WHAT SCROUNGE CANNOT DO

`Return target creature or Spacecraft card with mana value 5 or less` — **Rescue Skiff is mana value 6**. The deck's most expensive recursion piece is the one piece its cheap recursion cannot rebuy. Nine of the 23 nonland cards are legal Scrounge targets; the Skiff is not among them.

### FODDER THAT PAYS YOU FOR DYING

Both Scrounge for Eternity (`sacrifice an artifact or creature` as an additional cost) and Umbral Collar Zealot (`Sacrifice another creature or artifact: Surveil 1`) want bodies to eat. The creature base is chosen so those costs are close to free — Edge Rover and Beamsaw Prospector both read `When this creature dies, create a Lander token`, so feeding them to a sacrifice cost replaces them with fixing. In a three-colour deck that is not a coincidence; it is the reason those two creatures are the MV1 and MV2 slots rather than bigger bodies.

### PLAY PATTERN

Turns 1–3 are cheap blockers and one-for-one removal; 12 of the 23 nonland cards cost two or less. From turn 4 the recursion comes online and every trade the opponent makes gets undone. Rescue Skiff on turn 6 is usually the point the game tips. The deck does not race — it makes racing impossible by rebuilding the blocking front faster than it can be removed.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:9  3:8  5:1  6:2
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  recursion_engine: 9 copies (effective 7.1: Rescue Skiff@0.85, Rescue Skiff@0.85, Scout for Survivors@0.7, Scout for Survivors@0.7, Scrounge for Eternity@0.8, Scrounge for Eternity@0.8, Seedship Broodtender@0.7, Seedship Broodtender@0.7) → p=0.95 (need ≥ 0.75)
  PASS  recursion_target: 8 copies → p=0.96 (need ≥ 0.75)
  PASS  graveyard_enabler: 6 copies → p=0.91 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 38%  T2 92%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in this identity that the deck can afford - Zero Point Ballad's X would kill its own board of mana-value-1-and-2 creatures, and Beyond the Quiet exiles rather than destroys, denying its own recursion the fuel. The deck races a wide board by rebuilding blockers faster than they are removed: Scout for Survivors returns up to three creatures per cast.
  OK        single_large_threat: Banishing Light, Emergency Eject, Tragic Trajectory
  OK        noncreature_permanents: Banishing Light, Emergency Eject, Seedship Impact
  CONCEDED  stack: White, black and green contain no counterspell in this pool. The deck answers resolved permanents instead, and Banishing Light exiles anything nonland after it lands.
  CONCEDED  graveyard: No maindeck graveyard hate - the deck's own graveyard is its resource, so hate is asymmetrically bad for it; Dauntless Scrapbot is sideboarded in against opposing graveyard decks.
```

- No WARN flags raised. Curve, assembly, goldfish and coverage all returned PASS, both before and after the grill repair.


### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Rescue Skiff at {5}{W} is a genuine mana sink that converts a flooded board into a reanimation, and its Station ability ('Tap another creature you control: Put charge counters equal to its power on this Spacecraft') gives surplus creatures something to do. Umbral Collar Zealot's sacrifice outlet is free and repeatable, so extra permanents become graveyard selection. Landers from Edge Rover, Beamsaw Prospector, Scrounge for Eternity and Seedship Impact turn spare mana into basics. |
| screw | mitigation | 12 of the 23 nonland cards cost 2 or less (curve 1:3, 2:9), so two-land hands cast Edge Rover {G}, Tragic Trajectory {B}, Beamsaw Prospector {1}{B}, Umbral Collar Zealot {1}{B}, Hymn of the Faller {1}{B} and Seedship Impact {1}{G}. Goldfish reports 86% keepable hands and 88% with three lands by turn 3, and Godless Shrine can come in untapped for 2 life when the turn matters. |
| decapitation | mitigation | There is no key card to answer. The recursion is 9 copies spread across 5 different cards in 3 colours (Rescue Skiff x2, Scout for Survivors x2, Scrounge for Eternity x2, Seedship Broodtender x2, Xu-Ifit x1); removing any one leaves at least seven others. This redundancy is the entire reason this pipeline was built in three colours rather than two. |
| gas-out | mitigation | Hymn of the Faller x2 is the deck's Cards: Net-Positive text ('you draw a card and lose 1 life', plus a second draw when Void is on, which 12 of 23 nonland cards enable). Beyond that the recursion IS the card advantage: Scout for Survivors converts one card in hand into two bodies from the graveyard, and Xu-Ifit produces a body every turn from an empty hand at no mana cost. The graveyard is the deck's second library. |
| raced | mitigation | The cheap creature base doubles as the blocking wall and is chosen for it: Edge Rover is a 2/2 with reach against the cube's 56 evasive threats, Seedship Broodtender is a 2/3, Umbral Collar Zealot a 3/2. Crucially these blockers come BACK - Scout for Survivors rebuilds two of them for three mana, so chump-blocking is not card disadvantage here the way it normally is. Six removal spells cover the first threats, and Radiant Strike comes in from the sideboard for 3 life a copy. |
| disruption-fizzle | mitigation | The deck's critical turns are the least interactable in the pool: Scout for Survivors and Scrounge for Eternity target cards already in the graveyard, which an opponent cannot remove in response, and this identity faces no counterspells (the cube's blue is not in these colours). The one real exposure is Scrounge for Eternity's sacrifice, paid on cast - so the fodder is chosen to be creatures that pay you for dying (Edge Rover and Beamsaw Prospector both read 'When this creature dies, create a Lander token'), making a fizzle cost a token rather than a threat. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bygone Colossus | 9/9 for mana value 9. This build's recursion is capped or cheap-body-focused — Scout for Survivors tops out at total mana value 3 and Scrounge at 5, so only Rescue Skiff, Seedship Broodtender and Xu-Ifit could return it. That is deck 1's plan, not this one's. |
| Lashwhip Predator | 5/7 reach at mana value 6 — outside Scrounge's 'mana value 5 or less' clause and far outside Scout's total-3 clause, so 2 of this deck's 4 recursion types cannot touch it. |
| Glacier Godmaw | 6/6 at mana value 7; same clause problem, and {5}{G}{G} is unreachable on a three-colour base whose duals nearly all enter tapped. |
| Icetill Explorer | {2}{G}{G} double-green on a three-colour base with 9 green sources; the landfall mill is real but the cost competes with the white and black double-pip cards this deck must cast on curve. |
| Chorale of the Void | Reanimates from the DEFENDING player's graveyard, not yours, and its Void clause sacrifices it at end step unless a nonland permanent left the battlefield. |
| Sothera, the Supervoid | Its reanimation is of creatures IT exiled from opponents, gated on 'if a player controls no creatures' — that is a different engine (deck 3's), not this deck's own-yard rebuy. |
| Beyond the Quiet | 'Exile all creatures and Spacecraft' — symmetric, and this deck's board IS its win condition; exiling rather than destroying also denies its own recursion the fuel. |
| Zero Point Ballad | A sweeper whose reanimation clause needs X of 6 or more (7 mana, 6 life); this deck's creatures are cheap and would nearly all die to its own X, so it kills its own plan. |
| Monoist Sentry | 4/1 defender for {B} would be a cheap Scout target, but Defender means it never converts the recursion into damage — this deck wins in combat. |
| Hemosymbic Mite | 1/1 for {G}; its pump is 'gets +X/+X where X is this creature's power', i.e. +1/+1 off a 1/1 — the cheapest Scout target in the pool is Edge Rover, which at least replaces itself with a Lander when it dies. |
| Syr Vondam, the Lucent | 4/4 deathtouch lifelink but {2}{W}{B}{B} triple-coloured with double black on a three-colour base — the pip demand is unreachable on curve here. |
| Haliya, Ascendant Cadet | {2}{G}{W}{W} double-white plus green in a three-colour deck; and its payoff is +1/+1 counters, a different pipeline. |
| Pinnacle Starcage | 'exile all artifacts and creatures with mana value 2 or less' — symmetric, and this deck's Scout targets are precisely the mana-value-2-or-less creatures it would exile. |
| Wedgelight Rammer | Makes a 2/2 Robot token on entry, but tokens cease to exist in the graveyard, so it contributes nothing to a recursion deck's yard. |
| Exalted Sunborn | Token doubling is a payoff for a token deck; this list generates 2 token-makers, so the doubler has 2 of 22 nonland cards to double. |
| Perigee Beckoner | Grants another creature 'When this creature dies, return it to the battlefield tapped' — real recursion, but at mana value 5 it competes with Rescue Skiff for the same slot and only returns ONE creature, once. |
| Pull Through the Weft | Returns nonland permanents to HAND and lands to the battlefield; {3}{G}{G} double-green for a hand-refill is worse here than Rescue Skiff putting a body straight onto the battlefield. |
| All-Fates Stalker | 'exile up to one target non-Assassin creature until this creature leaves the battlefield' — the exile UNDOES itself when your own recursion deck sacrifices or bounces it, which this deck does constantly. |
| Dauntless Scrapbot | 'exile each opponent's graveyard' is near-dead maindeck (the cube census shows one graveyard-hate card overall); sideboard material. |
| Lumen-Class Frigate | 'Other creatures you control get +1/+1' at 2+ charge counters is a genuine anthem for a wide board, but Station requires tapping creatures, competing with attacking and with Starfighter Pilot's tap-to-surveil. |
| Blooming Stinger | 2/2 deathtouch at mana value 2 is a fine Scout target, but the deck already runs six mana-value-2-or-less creatures with ETB or death value; deathtouch adds no recursion equity. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.7   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.73 adj [MV 2.7 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  B  demand  48.1%  prod  58.8%  gap -10.7pp  [OK]
  G  demand  18.5%  prod  29.4%  gap -10.9pp  [OK]
  W  demand  33.3%  prod  52.9%  gap -19.6pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
base                : cube_mainboard
multipliers         : {"common": 2, "uncommon": 2, "rare": 1, "mythic": 1}
rare/mythic cap (6) : PASS
verification        : All 40 mainboard + 10 sideboard cards exist by exact name in the working pool. No common/uncommon exceeds 2 combined copies; no rare/mythic exceeds 1. Rare+mythic total across mainboard and sideboard = 3 (Xu-Ifit Osteoharmonist, Godless Shrine, Astelli Reclaimer), inside the user's cap of 6. Basic lands are format-supplied and exempt.
```
